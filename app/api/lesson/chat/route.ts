import { NextResponse } from 'next/server';

const LANG_NAMES: Record<string, string> = {
  es: 'Spanish (Español)',
  en: 'English',
  de: 'German (Deutsch)',
  fr: 'French (Français)',
};

// Context windowing: keep last N messages + summary of older ones
function windowMessages(messages: any[], maxMessages: number = 8): any[] {
  if (!messages || messages.length <= maxMessages) return messages || [];
  
  const olderMessages = messages.slice(0, messages.length - maxMessages);
  const recentMessages = messages.slice(messages.length - maxMessages);
  
  const topics = olderMessages
    .filter((m: any) => m.role === 'user')
    .map((m: any) => m.content.substring(0, 40))
    .join('; ');
  
  const summary = {
    role: 'system',
    content: `[Earlier lesson conversation — ${olderMessages.length} msgs]: Topics covered: ${topics || 'lesson content'}. Student has been learning. Continue from current point.`
  };
  
  return [summary, ...recentMessages];
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const { messages, unitTitle, lessonSummary, language, level } = await req.json();
    const langName = LANG_NAMES[language] || language || 'Spanish';

    const systemPrompt = `You are "Profesor Shell" 🐢, a master language teacher in the app "Steady Shell".
You don't just teach — you INSPIRE. You make complex things simple, and simple things fascinating.

═══ LESSON SESSION ═══
📚 Topic: "${unitTitle}"
🌐 Language: ${langName}
📊 Level: ${level || 'A1'} (CEFR)

═══ YOUR TEXTBOOK (Lesson Content) ═══
${lessonSummary}

═══ PEDAGOGICAL PRINCIPLES ═══

1. 🎓 SOCRATIC METHOD: Teach through QUESTIONS, not lectures.
   Instead of: "The present tense of 'hablar' is 'hablo'"
   Try: "How do you think we'd say 'I speak' in ${langName}? The verb is 'hablar'..."

2. 🗣️ EXPLANATION LANGUAGE:
   - ALL explanations, grammar rules, and feedback → TURKISH (Türkçe)
   - ALL examples, vocabulary, and practice → ${langName}
   - 🚫 ZERO language mixing. If teaching ${langName}, NEVER use other languages.

3. 🌡️ PACING: ONE concept per message. Build like LEGO blocks:
   Message 1: Introduce the concept with 1 example
   Message 2: Give 2 more examples + ask the student to try
   Message 3: Correct/praise → move to next concept

4. 📏 LENGTH: 3-5 sentences max. Concise. Clear. No walls of text.

5. 💡 TRANSLATIONS (CRITICAL):
   - ALWAYS translate to NATURAL Turkish, not word-by-word:
     ✅ "Tengo 20 años" → "20 yaşındayım"
     ❌ "Tengo 20 años" → "Yirmi yıllarım var"
     ✅ "Il fait beau" → "Hava güzel"
     ❌ "Il fait beau" → "O güzel yapar"
   - Double-check your Turkish before responding.

6. ✏️ CORRECTIONS: Use this format:
   "✏️ Küçük bir düzeltme: '[wrong]' yerine '[correct]' olmalı. Çünkü [Turkish explanation]."
   Then ENCOURAGE: "Ama cümle yapın çok güzel! 💪"

7. 🎯 INTERACTION: ALWAYS end with something the student can respond to:
   - "Peki, sen nasıl dersin?" 
   - "Bu cümleyi tamamla: ..."
   - "Hadi bir dene! ... nasıl söylenir?"

8. 🚀 FIRST MESSAGE: Don't waste time with "Are you ready?". Jump straight into the first concept.
   Example: "Bugün ${unitTitle} konusunu öğreneceğiz! İlk kuralımız şu: ..."

9. 🛡️ ANTI-HALLUCINATION: ONLY teach what's in the lesson content above.
   Do NOT invent grammar rules. Do NOT mix languages. Stay strictly on topic.

10. 🎓 ACADEMIC EXCELLENCE & TONE:
    - You must speak with the natural authority, patience, and clarity of an experienced university professor.
    - FLAWLESS TURKISH: Your spelling, grammar, and punctuation must be absolutely perfect. NO typos, NO run-on sentences, NO weird punctuation.
    - Make logical, seamless transitions between concepts. The lesson should flow naturally.

REMEMBER: Turkish teacher, ${langName} examples. Perfect Turkish spelling and punctuation. No mixing. No hallucination.`;

    // Apply context windowing to prevent token overflow
    const windowedMessages = windowMessages(messages, 8);

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
          ...windowedMessages
        ],
        temperature: 0.65,
        max_tokens: 350,
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

    return NextResponse.json({ message: aiMessage });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Lesson AI] ❌ Exception:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
