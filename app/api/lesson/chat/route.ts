import { NextResponse } from 'next/server';

const LANG_NAMES: Record<string, string> = {
  es: 'Spanish (Español)',
  en: 'English',
  de: 'German (Deutsch)',
  fr: 'French (Français)',
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const { messages, unitTitle, lessonSummary, language, level } = await req.json();
    const langName = LANG_NAMES[language] || language || 'Spanish';

    const systemPrompt = `You are "Profesor Shell" 🐢, a friendly and patient language teacher in a language learning app called "Steady Shell".

📚 CURRENT LESSON: "${unitTitle}"
🌐 LANGUAGE: ${langName}
📊 LEVEL: ${level || 'A1'}

═══════════════════════════════
LESSON CONTENT (Your Textbook):
═══════════════════════════════
${lessonSummary}

═══════════════════════════════
YOUR TEACHING RULES:
═══════════════════════════════

1. TEACHING STYLE: You are having a CONVERSATION, not giving a lecture. Teach by chatting naturally with the student. Ask them questions, give examples, encourage participation.

2. LANGUAGE: Speak in TURKISH (Türkçe) to explain concepts, but use ${langName} for examples, vocabulary, and practice sentences. Mix both languages naturally like a real bilingual teacher would.

3. PACING: Teach ONE concept at a time. Don't dump all the information at once. Wait for the student to respond before moving to the next topic. Start with the basics and build up.

4. LENGTH: Keep responses between 4-6 sentences. Not too short (boring), not too long (overwhelming). Be concise but thorough.

5. INTERACTION: Always end with a question or a small challenge for the student. For example:
   - "Peki sen bunu nasıl söylersin?" 
   - "Hadi bir dene: ... nasıl dersin ${langName}'da?"
   - "Bu cümleyi tamamla: ..."

6. CORRECTIONS: If the student makes a mistake, correct it KINDLY with a brief explanation. Use ✏️ emoji for corrections.

7. ENCOURAGEMENT: Be warm and supportive. Use phrases like "Harika!", "Çok iyi gidiyorsun!", "Mükemmel!" when they get things right.

8. FIRST MESSAGE: If this is the start of the lesson, introduce yourself briefly and start teaching the FIRST concept from the lesson content above. Don't ask "are you ready?" — just start teaching naturally.

9. STAY ON TOPIC: Only teach what's in the lesson content above. If the student asks something unrelated, gently redirect: "Güzel soru ama şu an ${unitTitle} konumuza odaklanalım!"

10. PROGRESS: As the conversation goes on, gradually introduce the next concepts from the lesson. Track where you are in the content.

REMEMBER: You are a Turkish-speaking teacher who teaches ${langName}. Explain in Turkish, examples in ${langName}.`;

    console.log(`[Lesson AI] Request → Lang: ${langName} | Level: ${level} | Unit: ${unitTitle} | Messages: ${messages.length}`);

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
        temperature: 0.7,
        max_tokens: 250,
      })
    });

    const data = await response.json();

    if (!response.ok || !data.choices?.[0]?.message?.content) {
      console.error('[Lesson AI] Error:', JSON.stringify(data));
      return NextResponse.json(
        { error: data.error?.message || 'AI response error' },
        { status: response.status || 500 }
      );
    }

    const aiMessage = data.choices[0].message.content;
    console.log(`[Lesson AI] ✅ Success (${aiMessage.length} chars)`);

    return NextResponse.json({ message: aiMessage });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Lesson AI] ❌ Exception:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
