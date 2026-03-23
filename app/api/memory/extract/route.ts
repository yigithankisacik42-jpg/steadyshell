import { NextRequest, NextResponse } from 'next/server';
import { auth } from "@/auth";
import { db } from "@/lib/db";

const GROQ_API_KEY = process.env.GROQ_API_KEY;

export async function POST(request: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: "Messages array is required" }, { status: 400 });
        }

        // Prepare prompt for Groq to extract user memory
        const extractionPrompt = `
You are an expert AI profiling assistant. Analyze the following conversation between a User and a Language Tutor (Assistant).
Your goal is to extract ANY explicit or implicit information about the USER from the conversation.
Look for:
- Hobbies or interests (what they like to do)
- Language weaknesses or common mistakes they make
- Profession or studies
- Goals (why they are learning, what they want to achieve)
- General notes (any other useful personal context that would help a tutor personalize future lessons)

IMPORTANT:
- Output ONLY a valid raw JSON object. Do not include markdown code blocks, backticks, or any conversational text.
- If you don't find anything for a category, leave it null.
- Translate your findings into English or Turkish strictly (Turkish preferred for notes).

Expected JSON schema:
{
  "hobbies": "string or null",
  "weaknesses": "string or null",
  "profession": "string or null",
  "goals": "string or null",
  "notes": "string or null"
}
`;

        const apiMessages = [
            { role: "system", content: extractionPrompt },
            ...messages.map((m: any) => ({
                role: m.role,
                content: typeof m.content === "string" ? m.content : JSON.stringify(m.content)
            }))
        ];

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: apiMessages,
                temperature: 0.1,
                max_tokens: 512,
                response_format: { type: "json_object" }
            })
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Extraction failed" }, { status: response.status });
        }

        const data = await response.json();
        const rawJson = data.choices[0]?.message?.content;
        
        if (!rawJson) {
            return NextResponse.json({ message: "No content extracted" });
        }

        const extracted = JSON.parse(rawJson);

        // Fetch current memory
        const currentMemory = await db.userMemory.findUnique({
            where: { userId: session.user.id }
        });

        // Smart merge: Append new findings to old findings instead of replacing, if both exist
        const mergeStr = (oldStr: string | null | undefined, newStr: string | null | undefined) => {
            if (!newStr) return oldStr || undefined;
            if (!oldStr) return newStr;
            // Avoid duplicate exact matches
            if (oldStr.includes(newStr)) return oldStr;
            return `${oldStr}, ${newStr}`;
        };

        const updatedMemory = await db.userMemory.upsert({
            where: { userId: session.user.id },
            update: {
                hobbies: mergeStr(currentMemory?.hobbies, extracted.hobbies),
                weaknesses: mergeStr(currentMemory?.weaknesses, extracted.weaknesses),
                profession: mergeStr(currentMemory?.profession, extracted.profession),
                goals: mergeStr(currentMemory?.goals, extracted.goals),
                notes: mergeStr(currentMemory?.notes, extracted.notes),
            },
            create: {
                userId: session.user.id,
                hobbies: extracted.hobbies,
                weaknesses: extracted.weaknesses,
                profession: extracted.profession,
                goals: extracted.goals,
                notes: extracted.notes,
            }
        });

        return NextResponse.json({ success: true, memory: updatedMemory });

    } catch (error) {
        console.error('Extraction API Error:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
