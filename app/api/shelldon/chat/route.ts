import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { db } from '@/lib/db';

function mergeList(existing: string | null, extracted: string[] | string | undefined): string {
  if (!extracted) return existing || "";
  const extList = Array.isArray(extracted) ? extracted : [extracted];
  const cleanExtracted = extList
    .map(x => x.trim())
    .filter(x => x.length > 0);
    
  if (cleanExtracted.length === 0) return existing || "";

  const existList = existing
    ? existing.split(",").map(x => x.trim()).filter(x => x.length > 0)
    : [];

  const combined = Array.from(new Set([...existList, ...cleanExtracted]));
  return combined.join(", ");
}

const LANG_NAMES: Record<string, string> = {
  es: 'Spanish (Español)',
  en: 'English',
  de: 'German (Deutsch)',
  fr: 'French (Français)',
  tr: 'Turkish (Türkçe)'
};

const SOUVENIRS: Record<string, string> = {
  cafe: "🥐 Taze Kruvasan",
  market: "🍎 Kırmızı Elma",
  airport: "✈️ Pasaport Pulu",
  doctor: "🩹 Şifalı Yara Bandı",
  hotel: "🔑 Altın Oda Anahtarı",
  friend: "🍀 Şans Yoncası",
  rendezvous: "🎟️ Sinema Bileti",
  restaurant: "🍽️ Gurme Yemek",
  direction: "🗺️ Seyahat Haritası"
};

// Context windowing: Keep last N messages + summarize older ones
function windowMessages(messages: any[], maxMessages: number = 10): any[] {
  if (!messages || messages.length <= maxMessages) return messages || [];
  
  // Keep the last maxMessages, create summary of older ones
  const olderMessages = messages.slice(0, messages.length - maxMessages);
  const recentMessages = messages.slice(messages.length - maxMessages);
  
  // Create a brief summary of older conversation
  const userTurns = olderMessages
    .filter((m: any) => m.role === 'user')
    .map((m: any) => m.content.substring(0, 60))
    .join('; ');
  
  const summary = {
    role: 'system',
    content: `[Earlier conversation summary — ${olderMessages.length} messages]: Student said: ${userTurns || 'various things'}. Continue from where you left off.`
  };
  
  return [summary, ...recentMessages];
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const body = await req.json();
    const { action, scenario, language, level, practiceMode, messages, turnIndex, completedObjectives, memory, dbMemory } = body;
    
    const langName = LANG_NAMES[language] || language || 'German';
    const persona = memory?.persona || "friendly";
    const objectives = scenario?.objectives?.[language] || [];
    
    // Merge database memory with session facts
    const facts: string[] = [];
    if (dbMemory) {
      if (dbMemory.name) facts.push(`Student's name: ${dbMemory.name}`);
      if (dbMemory.profession) facts.push(`Profession: ${dbMemory.profession}`);
      if (dbMemory.hobbies) facts.push(`Hobbies: ${dbMemory.hobbies}`);
      if (dbMemory.weaknesses) facts.push(`Weaknesses/Struggles: ${dbMemory.weaknesses}`);
      if (dbMemory.goals) facts.push(`Goals: ${dbMemory.goals}`);
      if (dbMemory.notes) facts.push(`Notes: ${dbMemory.notes}`);
    }
    if (memory?.knownFacts?.length > 0) {
      memory.knownFacts.forEach((fact: string) => {
        if (!facts.includes(fact)) facts.push(fact);
      });
    }
    const knownFacts = facts.join(' • ') || 'None yet';

    // ═══ PREMIUM RPG SYSTEM PROMPT ═══
    let systemPrompt = `You are "Shelldon" 🐢, a cute, adventurous traveling turtle in the app "Steady Shell".
You are currently traveling the world with the user, who acts as your "Language Mentor".
You do NOT speak ${langName} very well, and you frequently get into funny, stressful situations where you need to communicate with locals (waiters, hotel receptionists, ticket vendors, doctors, etc.).
You rely on the user to help you by telling you what to say or saying it for you.

═══ SESSION CONFIG ═══
• Current Destination / Adventure: "${scenario?.titleTr || 'General Conversation'}"
• Scenario Context: ${scenario?.context || ''}
• Language of Local Area: ${langName}
• Target Complexity: ${level || 'A1'} (CEFR)
• Practice Mode: ${practiceMode === 'vocab' ? 'Vocabulary Focus' : practiceMode === 'grammar' ? 'Grammar Focus' : 'Speaking Practice'}
• Persona Style: ${persona === 'strict' ? 'Strict Mentor - Be direct and firm.' : 'Friendly Companion - Be warm, enthusiastic, and supportive.'}
• Known about your Mentor (User): ${knownFacts}

═══ ROLEPLAYING RULES ═══
1. Act like a cute, slightly panicky traveling turtle. You want to eat/buy/reach something, but you are stuck!
2. You speak primarily in ${langName} at a ${level || 'A1'} level. Keep sentences very short (1-3 sentences).
3. Express your gratitude to your Mentor in ${langName} or occasionally in Turkish when they guide you correctly.
4. If your Mentor suggests a phrase, repeat it or use it to talk to the local, and show your excitement!
5. Add funny little turtle gestures (e.g. "*shakes shell*", "*hides in shell*", "*munches on lettuce*") to make it incredibly lively and fun.
6. Always give your Mentor something to respond to—ask what to do next or how to say a specific phrase.
`;

    if (action === 'intro') {
      systemPrompt += `
TASK: Start the scenario conversation. Greet the student in character.
IMPORTANT: Your opening line should make the student WANT to respond. Set the scene vividly in 1-2 short sentences.
${persona === 'strict' ? 'Start formal and set expectations.' : persona === 'formal' ? 'Greet professionally.' : 'Be warm and inviting.'}

OUTPUT FORMAT — VALID JSON ONLY:
{
  "message": "Your opening in ${langName} (1-2 short sentences, in character)",
  "mood": "happy"
}`;
    } else if (action === 'reply') {
      const objectiveList = objectives.map((obj: string, i: number) =>
        `[${i}] ${obj} ${completedObjectives?.includes(i) ? '✅ DONE' : '⬜ PENDING'}`
      ).join('\n');

      systemPrompt += `
═══ SCENARIO OBJECTIVES ═══
${objectiveList}

TASK: Respond to the Mentor's latest message in character.

AUDIO/SPEECH GOLDEN RULE:
The 'message' field must be 100% clean, natural, and free of any markdown (no asterisks, no brackets). Avoid writing actions inside the message (e.g. write '*hides shell*' in your thoughts, but never in the actual 'message' field). This ensures it can be spoken out loud perfectly by the voice engine. Make sure the speech flow sounds organically logical, pedagogically sound, and extremely natural.

RESPONSE STRATEGY:
1. REACT naturally to what the Mentor said in character as the cute traveling turtle.
2. If they make a mistake → correct it kindly in the 'correction' field.
3. Check if their message fulfills any PENDING objectives → mark as completed.
4. ADVANCE the quest — ask them a question, ask how to say a specific phrase, or describe what you are trying to do next in the target language.
5. Provide 3 dynamic, context-aware suggestions in ${langName} at ${level || 'A1'} complexity that the user can say next.
6. Evaluate your current quest progress stage and your joy level (0-100%).

OUTPUT FORMAT — VALID JSON ONLY:
{
  "message": "Your response in ${langName} (1-3 short sentences, clean and speech-ready, NO asterisks or markup)",
  "mood": "happy|thinking|surprised|idle",
  "correction": null,
  "completedObjectives": [${completedObjectives?.join(', ') || ''}],
  "suggestions": ["dynamic target language suggestion 1", "suggestion 2", "suggestion 3"],
  "questStatus": {
    "joyLevel": 75,
    "stage": "current stage name in Turkish (1-2 words)",
    "description": "short description of what Shelldon is doing at this stage in Turkish (e.g., Shelldon kasada hesabı ödemek için senin yardımını bekliyor.)"
  },
  "updatedMemory": { "persona": "${persona}", "knownFacts": [] }
}

CORRECTION FORMAT (when student makes a mistake):
"correction": { "wrong": "exact wrong text", "right": "corrected text", "explanation": "Türkçe açıklama" }`;
    } else if (action === 'hint') {
      systemPrompt += `
OBJECTIVES:
${objectives.map((obj: string, i: number) => `[${i}] ${obj} ${completedObjectives?.includes(i) ? '✅' : '⬜'}`).join('\n')}

TASK: The student is stuck and needs a hint.
Give a SHORT, practical hint in Turkish about what to say next.
The hint should suggest a specific phrase or sentence structure they can try.

OUTPUT FORMAT — VALID JSON ONLY:
{
  "hint": "Türkçe kısa ipucu — örnek cümle öner"
}`;
    } else if (action === 'feedback') {
      systemPrompt += `
TASK: The conversation has ended. Evaluate the student's performance AND extract personal details for memory.

SCORING CRITERIA:
- Grammar accuracy (30%)
- Vocabulary range and appropriateness (30%)
- Objective completion (25%)
- Conversational flow and naturalness (15%)

MEMORY EXTRACTION:
Analyze the dialogue history. If the student mentioned any personal details like their name, profession, hobbies, weaknesses/struggles in language learning, goals, or general notes, extract them as brief items. Keep extracted facts in Turkish. If nothing new is mentioned, return null or empty arrays.

Be specific in your feedback — mention exact examples from the conversation.
${persona === 'strict' ? 'Be honest and critical. High standards.' : 'Be encouraging but constructive.'}

OUTPUT FORMAT — VALID JSON ONLY:
{
  "score": 75,
  "grammar": "Türkçe gramer değerlendirmesi (1-2 cümle, somut örneklerle)",
  "vocabulary": "Türkçe kelime değerlendirmesi (1-2 cümle)",
  "tip": "Türkçe gelişim önerisi (1-2 cümle, spesifik)",
  "extractedMemory": {
    "name": "extracted name or empty string",
    "profession": "extracted profession or empty string",
    "hobbies": ["extracted hobby 1", "extracted hobby 2"],
    "weaknesses": ["extracted weakness 1", "extracted weakness 2"],
    "goals": ["extracted goal 1", "extracted goal 2"],
    "notes": ["extracted custom note 1", "extracted custom note 2"]
  }
}`;
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    // Apply context windowing to prevent token overflow
    const windowedMessages = windowMessages(
      messages?.map((m: any) => ({ role: m.role, content: m.content })),
      10
    );

    const requestBody = {
      model: "deepseek/deepseek-chat",
      messages: [
        { role: "system", content: systemPrompt },
        ...windowedMessages
      ],
      temperature: action === 'reply' ? 0.65 : action === 'feedback' ? 0.3 : 0.5,
      max_tokens: action === 'feedback' ? 500 : 400,
      response_format: { type: "json_object" }
    };

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://steadyshell.com",
        "X-Title": "Steady Shell",
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    if (!response.ok || !data.choices?.[0]?.message?.content) {
      console.error('[Shelldon AI] Error:', JSON.stringify(data));
      return NextResponse.json(
        { error: data.error?.message || 'AI response error' },
        { status: response.status || 500 }
      );
    }

    const aiMessageText = data.choices[0].message.content;
    
    // Parse JSON — handle markdown wrapping
    try {
      let cleanJson = aiMessageText.trim();
      if (cleanJson.startsWith('```json')) {
        cleanJson = cleanJson.substring(7);
        if (cleanJson.endsWith('```')) cleanJson = cleanJson.substring(0, cleanJson.length - 3);
      } else if (cleanJson.startsWith('```')) {
        cleanJson = cleanJson.substring(3);
        if (cleanJson.endsWith('```')) cleanJson = cleanJson.substring(0, cleanJson.length - 3);
      }
      
      const parsedJson = JSON.parse(cleanJson.trim());

      // If action is feedback, extract and merge memories into the database + award travel item
      if (action === 'feedback') {
        const scenarioId = scenario?.id || "unknown";
        const souvenir = SOUVENIRS[scenarioId] || "🐢 Altın Kaplumbağa Heykelciği";
        let earnedItem: string | null = null;
        
        try {
          const session = await auth();
          if (session?.user?.email) {
            const user = await db.user.findUnique({
              where: { email: session.user.email },
              include: { memory: true }
            });

            if (user) {
              let backpack: string[] = [];
              let notesObj: Record<string, any> = {};
              
              if (user.memory?.notes) {
                try {
                  notesObj = JSON.parse(user.memory.notes);
                  if (notesObj && Array.isArray(notesObj.backpack)) {
                    backpack = notesObj.backpack;
                  }
                } catch (e) {
                  notesObj = { plainNotes: user.memory.notes };
                }
              }

              // Award souvenir if score is decent and not already owned
              if (parsedJson.score >= 50) {
                if (!backpack.includes(souvenir)) {
                  backpack.push(souvenir);
                  earnedItem = souvenir;
                }
              }

              notesObj.backpack = backpack;
              const updatedNotes = JSON.stringify(notesObj);

              const ext = parsedJson.extractedMemory || {};
              
              if (ext.name && ext.name.trim() && (!user.name || user.name === "Gezgin")) {
                await db.user.update({
                  where: { id: user.id },
                  data: { name: ext.name.trim() }
                });
              }

              const mergedHobbies = mergeList(user.memory?.hobbies || null, ext.hobbies);
              const mergedWeaknesses = mergeList(user.memory?.weaknesses || null, ext.weaknesses);
              const mergedGoals = mergeList(user.memory?.goals || null, ext.goals);
              const newProfession = ext.profession?.trim() || user.memory?.profession || "";

              await db.userMemory.upsert({
                where: { userId: user.id },
                update: {
                  hobbies: mergedHobbies || null,
                  weaknesses: mergedWeaknesses || null,
                  goals: mergedGoals || null,
                  notes: updatedNotes,
                  profession: newProfession || null
                },
                create: {
                  userId: user.id,
                  hobbies: mergedHobbies || null,
                  weaknesses: mergedWeaknesses || null,
                  goals: mergedGoals || null,
                  notes: updatedNotes,
                  profession: newProfession || null
                }
              });

              // Flag the newly learned items so the client can display them in the results!
              parsedJson.newMemoryLearned = {
                name: ext.name && ext.name.trim() && ext.name.trim() !== user.name ? ext.name.trim() : null,
                profession: ext.profession && ext.profession.trim() && ext.profession.trim() !== user.memory?.profession ? ext.profession.trim() : null,
                hobbies: Array.isArray(ext.hobbies) ? ext.hobbies.filter((h: string) => !user.memory?.hobbies?.includes(h)) : [],
                weaknesses: Array.isArray(ext.weaknesses) ? ext.weaknesses.filter((w: string) => !user.memory?.weaknesses?.includes(w)) : [],
                goals: Array.isArray(ext.goals) ? ext.goals.filter((g: string) => !user.memory?.goals?.includes(g)) : [],
                earnedItem: earnedItem,
                backpack: backpack
              };
            }
          }
        } catch (dbError) {
          console.error('[Shelldon AI] Failed to auto-save extracted memory:', dbError);
        }
      }

      return NextResponse.json(parsedJson);
    } catch (parseError) {
      console.error('[Shelldon AI] JSON Parse Error:', parseError, 'Raw:', aiMessageText);
      return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 });
    }

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Shelldon AI] ❌ Exception:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
