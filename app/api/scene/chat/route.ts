import { NextResponse } from 'next/server';

const LANG_NAMES: Record<string, string> = {
  en: 'English',
  de: 'German (Deutsch)',
  fr: 'French (Français)',
  es: 'Spanish (Español)',
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error('[Scene AI] OPENROUTER_API_KEY is missing!');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const { messages, scene, language, level } = await req.json();
    const langName = LANG_NAMES[language] || language;

    const systemPrompt = `You are a realistic roleplay partner in a language learning app called "Steady Shell".

🎭 CURRENT SCENE: "${scene.titleTr}" — ${scene.description}
🌐 TARGET LANGUAGE: ${langName}
📊 STUDENT LEVEL: ${level} (CEFR scale)

═══════════════════════════════
STRICT RULES — FOLLOW ALL OF THEM:
═══════════════════════════════

1. LANGUAGE RULE: You MUST speak ONLY in ${langName}. Every single word of your response must be in ${langName}. Do NOT use Turkish, do NOT use any other language. This is the #1 most important rule.

2. SCENE RULE: Stay 100% in character for the scene "${scene.titleTr}". Act as if you are really there (a waiter, a receptionist, a shopkeeper, a doctor, etc. depending on the scene).

3. OFF-TOPIC RULE: If the student writes something completely unrelated to the scene (like talking about football during a cafe order), gently redirect them back to the scene. Say something like: "That's interesting, but let's focus on our ${scene.titleTr} scene! [then continue in character]". Say this in ${langName}.

4. LEVEL RULE — Adjust your language complexity:
   - A1: Use ONLY present tense. Very short sentences (5-8 words). Basic vocabulary only. Simple greetings and questions.
   - A2: Simple past tense OK. Slightly longer sentences. Everyday vocabulary.
   - B1: All common tenses OK. Compound sentences. Idiomatic expressions allowed.
   - B2: Complex grammar OK. Near-native expressions. Nuanced vocabulary.

5. CORRECTION RULE: If the student makes a grammar or spelling mistake, correct it briefly in parentheses like "(✏️ Correction: 'I would like' not 'I want like')" and then continue the conversation naturally. Keep corrections short and kind.

6. LENGTH RULE: Keep your responses SHORT — maximum 2-3 sentences. This is a conversation, not an essay. Ask a follow-up question to keep the dialogue going.

7. NATURAL RULE: Be warm, friendly, and encouraging. React naturally to what the student says. Don't be robotic.

8. FIRST MESSAGE RULE: If this is the start of the conversation, greet the student in character and set the scene naturally. For example, if you're a waiter, say "Welcome! Here's our menu. What would you like to order?" — but in ${langName}.

REMEMBER: ONLY speak in ${langName}. No Turkish. No English (unless ${langName} is English). No exceptions.`;

    console.log(`[Scene AI] Request → Model: qwen/qwen-2.5-7b-instruct | Lang: ${langName} | Level: ${level} | Scene: ${scene.titleTr} | Messages: ${messages.length}`);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://steadyshell.com",
        "X-Title": "Steady Shell",
      },
      body: JSON.stringify({
        model: "qwen/qwen-2.5-7b-instruct",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages
        ],
        temperature: 0.75,
        max_tokens: 300,
      })
    });

    const data = await response.json();
    console.log(`[Scene AI] Response status: ${response.status}`);

    if (!response.ok) {
      console.error('[Scene AI] API Error:', JSON.stringify(data));
      return NextResponse.json(
        { error: data.error?.message || `API error ${response.status}` },
        { status: response.status }
      );
    }

    if (!data.choices?.[0]?.message?.content) {
      console.error('[Scene AI] Empty response:', JSON.stringify(data));
      return NextResponse.json(
        { error: 'AI returned empty response' },
        { status: 500 }
      );
    }

    const aiMessage = data.choices[0].message.content;
    console.log(`[Scene AI] ✅ Success! (${aiMessage.length} chars)`);

    return NextResponse.json({ message: aiMessage });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Scene AI] ❌ Exception:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
