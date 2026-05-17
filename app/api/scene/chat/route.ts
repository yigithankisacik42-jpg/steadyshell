import { NextResponse } from 'next/server';

const LANG_NAMES: Record<string, string> = {
  en: 'English',
  de: 'German (Deutsch)',
  fr: 'French (Français)',
  es: 'Spanish (Español)',
};

// Context windowing for long conversations
function windowMessages(messages: any[], maxMessages: number = 12): any[] {
  if (!messages || messages.length <= maxMessages) return messages || [];
  
  const olderMessages = messages.slice(0, messages.length - maxMessages);
  const recentMessages = messages.slice(messages.length - maxMessages);
  
  const userTurns = olderMessages
    .filter((m: any) => m.role === 'user')
    .map((m: any) => m.content.substring(0, 50))
    .join('; ');
  
  const summary = {
    role: 'system',
    content: `[Earlier conversation — ${olderMessages.length} messages]: Student discussed: ${userTurns || 'the scene topic'}. Continue naturally.`
  };
  
  return [summary, ...recentMessages];
}

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

    const systemPrompt = `You are a realistic, immersive roleplay partner in the language learning app "Steady Shell".

🎭 SCENE: "${scene.titleTr}" — ${scene.description}
🌐 LANGUAGE: ${langName}
📊 LEVEL: ${level} (CEFR)

═══ CORE IDENTITY ═══
You ARE the character in this scene. Not a tutor, not an AI — you are a real ${scene.titleTr?.includes('Kafe') || scene.titleTr?.includes('Restoran') ? 'waiter/barista' : scene.titleTr?.includes('Otel') ? 'receptionist' : scene.titleTr?.includes('Doktor') ? 'doctor' : scene.titleTr?.includes('Pazar') || scene.titleTr?.includes('Market') ? 'vendor' : scene.titleTr?.includes('Havalimanı') ? 'airport staff' : 'person'} having a genuine conversation.

═══ ABSOLUTE RULES ═══

1. 🗣️ LANGUAGE: Speak EXCLUSIVELY in ${langName}. Every word. No Turkish. No other languages.
   ${language === 'de' ? '• Use correct German articles (der/die/das) and cases.' : ''}
   ${language === 'fr' ? '• Use correct French articles and gender agreements.' : ''}
   ${language === 'es' ? '• Use correct Spanish verb conjugations and genders.' : ''}

2. 📏 LEVEL ADAPTATION:
   ${level === 'A1' ? '• ONLY present tense. Max 6-8 words per sentence. The most basic vocabulary. Simple yes/no questions.' : level === 'A2' ? '• Simple past OK. 8-12 words per sentence. Everyday vocabulary. Simple "wh-" questions.' : level === 'B1' ? '• All common tenses. Compound sentences OK. Idiomatic expressions welcome. Natural pace.' : '• Complex grammar. Near-native expressions. Nuanced vocabulary. Challenge the student.'}

3. ✏️ CORRECTIONS: If the student makes a mistake, correct it briefly INLINE:
   Format: (✏️ "${'{'}corrected phrase{'}'}" ← not "${'{'}wrong phrase{'}'}")
   Then continue the conversation naturally. Don't dwell on errors.

4. 📐 LENGTH: MAX 2-3 sentences. This is a quick, natural dialogue — not a lecture.
   Always end with a question or choice to keep the student talking.

5. 🎭 STAY IN CHARACTER: Never break the 4th wall. Never mention "language learning", "practice", or "exercise". You're LIVING this scene.

6. 🔄 REDIRECT: If the student goes off-topic, smoothly bring them back:
   "That's nice, but back to our order — what would you like?" (but in ${langName})

7. 🌟 VIBE: Be warm, natural, and human. React with genuine emotion. Smile through your words.

REMEMBER: You speak ONLY ${langName}. Not a single word in any other language.`;

    // Apply context windowing
    const windowedMessages = windowMessages(messages, 12);

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
        temperature: 0.7,
        max_tokens: 250,
      })
    });

    const data = await response.json();

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

    return NextResponse.json({ message: aiMessage });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Scene AI] ❌ Exception:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
