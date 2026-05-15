import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;

    // Debug: API key kontrolü
    if (!apiKey) {
      console.error('OPENROUTER_API_KEY is missing from environment variables!');
      return NextResponse.json(
        { error: 'API key not configured. Please check .env.local file.' },
        { status: 500 }
      );
    }

    const { messages, scene, language, level } = await req.json();

    // Dil kodu → dil adı haritası
    const langNames: Record<string, string> = {
      en: 'English',
      de: 'German',
      fr: 'French',
      es: 'Spanish',
    };
    const langName = langNames[language] || language;

    const systemPrompt = `You are a friendly language learning roleplay partner in a scene-based conversation app called "Steady Shell".

SCENE: "${scene.titleTr}" — ${scene.description}
TARGET LANGUAGE: ${langName} (code: ${language})
STUDENT LEVEL: ${level} (CEFR)

YOUR RULES:
1. You MUST speak ONLY in ${langName}. This is the most important rule.
2. Stay in character for the scene. Be natural and realistic.
3. Keep responses SHORT — 1 to 3 sentences max. This is a conversation, not a lecture.
4. Match the complexity to ${level} level:
   - A1: Very basic words, present tense, simple sentences.
   - A2: Everyday phrases, past tense allowed, slightly longer.
   - B1: More complex grammar, idioms are okay.
   - B2: Near-native complexity, nuanced language.
5. If the student makes a grammar mistake, gently correct it in parentheses like (Correction: ...) and then continue the conversation naturally.
6. Always end with a question or prompt to keep the conversation going.
7. If this is the first message, greet the user and set the scene naturally in ${langName}.
8. Be warm, encouraging, and supportive.`;

    console.log(`[Scene AI] Sending request to OpenRouter — Model: qwen/qwen-2.5-7b-instruct, Lang: ${langName}, Level: ${level}`);

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
        max_tokens: 400,
      })
    });

    const data = await response.json();

    console.log(`[Scene AI] Response status: ${response.status}`);

    if (!response.ok) {
      console.error('[Scene AI] OpenRouter Error Response:', JSON.stringify(data));
      return NextResponse.json(
        { error: data.error?.message || `OpenRouter returned status ${response.status}` },
        { status: response.status }
      );
    }

    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error('[Scene AI] Unexpected response format:', JSON.stringify(data));
      return NextResponse.json(
        { error: 'Unexpected response format from AI model' },
        { status: 500 }
      );
    }

    const aiMessage = data.choices[0].message.content;
    console.log(`[Scene AI] Success! Response length: ${aiMessage.length} chars`);

    return NextResponse.json({ message: aiMessage });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Scene AI] Unexpected Error:', errorMessage);
    return NextResponse.json(
      { error: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
