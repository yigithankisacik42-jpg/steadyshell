import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// POST — Generate 10 adaptive quiz questions based on user weaknesses
export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const user = await db.user.findUnique({
      where: { email: session.user.email },
      include: { memory: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await req.json();
    const { language, level } = body;

    if (!language || !level) {
      return NextResponse.json(
        { error: "Missing required fields: language, level" },
        { status: 400 }
      );
    }

    // Fetch top 10 unresolved weaknesses by wrongCount
    const weaknesses = await db.userWeakness.findMany({
      where: {
        userId: user.id,
        language,
        resolved: false,
      },
      orderBy: { wrongCount: "desc" },
      take: 10,
    });

    // If user has no weaknesses yet, return early
    if (weaknesses.length === 0) {
      return NextResponse.json({
        noWeaknesses: true,
        message: "Henüz zayıf noktanız yok! Ders çözerek başlayın.",
      });
    }

    // Build weakness context for the AI
    const weaknessContext = weaknesses
      .map(
        (w, i) =>
          `${i + 1}. Topic: "${w.topic}" (Category: ${w.category}, Wrong ${w.wrongCount}x)` +
          (w.originalQuestion
            ? `\n   Example mistake: Q: "${w.originalQuestion}" → Correct: "${w.correctAnswer}", User said: "${w.userAnswer}"`
            : "")
      )
      .join("\n");

    const weaknessTopics = weaknesses.map((w) => w.topic);

    // Build weakness ID mapping for linking questions back
    const weaknessIdMap = weaknesses
      .map((w) => `"${w.topic}": "${w.id}"`)
      .join(", ");

    // Personalization from UserMemory
    const personalInfo: string[] = [];
    if (user.name && user.name !== "Gezgin")
      personalInfo.push(`Name: ${user.name}`);
    if (user.memory?.profession)
      personalInfo.push(`Profession: ${user.memory.profession}`);
    if (user.memory?.hobbies)
      personalInfo.push(`Hobbies: ${user.memory.hobbies}`);
    const personalization =
      personalInfo.length > 0
        ? personalInfo.join(", ")
        : "No personal info available";

    const LANG_NAMES: Record<string, string> = {
      es: "Spanish (Español)",
      en: "English",
      de: "German (Deutsch)",
      fr: "French (Français)",
    };
    const langName = LANG_NAMES[language] || language;

    const systemPrompt = `You are an adaptive language quiz generator for the app "Steady Shell".
Generate exactly 10 quiz questions targeting the student's weak areas in ${langName} at CEFR ${level} level.

═══ STUDENT'S WEAK TOPICS ═══
${weaknessContext}

═══ STUDENT INFO (for personalization) ═══
${personalization}

═══ WEAKNESS ID MAPPING ═══
Use these IDs in the "weaknessId" field to link questions to the weakness record:
{${weaknessIdMap}}

═══ QUESTION TYPE MIX (exactly 10 questions) ═══
- 3x SELECT: Multiple choice with 4 options, exactly 1 correct
- 3x TRANSLATE: Give a Turkish sentence as hint, student translates to ${langName}
- 2x FILL_BLANK: Sentence with ___ blank, 2 options to choose from
- 2x LISTENING: audioText in ${langName} (a sentence the student would hear), 4 options for meaning/answer

═══ RULES ═══
1. Questions MUST target the weak topics listed above
2. Difficulty must match ${level} level
3. If student info is available, personalize some questions (use their name, hobbies, profession in sentences)
4. Each question must have a unique id (1-10)
5. SELECT options must have id: "a", "b", "c", "d"
6. FILL_BLANK options must have id: "a", "b"
7. For TRANSLATE: provide "hint" (Turkish text) and "correctAnswer" (${langName} translation)
8. Set weaknessId to the corresponding weakness record ID from the mapping above
9. Make questions progressively harder within each type

═══ OUTPUT FORMAT — VALID JSON ONLY ═══
{
  "questions": [
    {
      "id": 1,
      "type": "SELECT",
      "question": "Question text in ${langName} or Turkish",
      "options": [
        { "id": "a", "text": "option 1", "correct": false },
        { "id": "b", "text": "option 2", "correct": true },
        { "id": "c", "text": "option 3", "correct": false },
        { "id": "d", "text": "option 4", "correct": false }
      ],
      "weaknessId": "cuid_from_mapping_or_null"
    },
    {
      "id": 2,
      "type": "TRANSLATE",
      "question": "Translate the following sentence:",
      "hint": "Turkish sentence to translate",
      "correctAnswer": "Correct translation in ${langName}",
      "weaknessId": "cuid_from_mapping_or_null"
    },
    {
      "id": 3,
      "type": "FILL_BLANK",
      "question": "Fill in the blank:",
      "sentence": "Elle ___ étudiante.",
      "options": [
        { "id": "a", "text": "est", "correct": true },
        { "id": "b", "text": "es", "correct": false }
      ],
      "weaknessId": "cuid_from_mapping_or_null"
    },
    {
      "id": 4,
      "type": "LISTENING",
      "question": "What does this sentence mean?",
      "audioText": "Sentence in ${langName} to be read aloud",
      "options": [
        { "id": "a", "text": "meaning 1", "correct": false },
        { "id": "b", "text": "meaning 2", "correct": true },
        { "id": "c", "text": "meaning 3", "correct": false },
        { "id": "d", "text": "meaning 4", "correct": false }
      ],
      "weaknessId": "cuid_from_mapping_or_null"
    }
  ]
}`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://steadyshell.com",
          "X-Title": "Steady Shell",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: `Generate 10 adaptive quiz questions for my weak topics in ${langName} at ${level} level. Return valid JSON only.`,
            },
          ],
          temperature: 0.7,
          max_tokens: 3000,
          response_format: { type: "json_object" },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.choices?.[0]?.message?.content) {
      console.error("[ADAPTIVE_QUIZ_GENERATE] AI Error:", JSON.stringify(data));
      return NextResponse.json(
        { error: data.error?.message || "AI response error" },
        { status: response.status || 500 }
      );
    }

    const aiMessageText = data.choices[0].message.content;

    // Parse JSON — handle markdown wrapping like Shelldon route
    let cleanJson = aiMessageText.trim();
    if (cleanJson.startsWith("```json")) {
      cleanJson = cleanJson.substring(7);
      if (cleanJson.endsWith("```"))
        cleanJson = cleanJson.substring(0, cleanJson.length - 3);
    } else if (cleanJson.startsWith("```")) {
      cleanJson = cleanJson.substring(3);
      if (cleanJson.endsWith("```"))
        cleanJson = cleanJson.substring(0, cleanJson.length - 3);
    }

    const parsedJson = JSON.parse(cleanJson.trim());

    return NextResponse.json({
      questions: parsedJson.questions || [],
      weaknessTopics,
    });
  } catch (error) {
    console.error("[ADAPTIVE_QUIZ_GENERATE]", error);
    const msg = error instanceof Error ? error.message : "Internal Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
