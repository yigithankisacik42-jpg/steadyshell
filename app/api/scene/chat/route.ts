import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages, scene, language, level } = await req.json();

    const systemPrompt = `You are an AI language learning partner. 
Current Scene: ${scene.titleTr} (${scene.description})
Target Language: ${language}
User Level: ${level}

Roleplay Instructions:
1. Stay in character based on the scene.
2. Keep your responses short and appropriate for level ${level}.
3. If the user makes a major mistake, gently correct them in the target language.
4. Encourage the user to keep the conversation going.
5. Speak ONLY in ${language}. No English or Turkish unless absolutely necessary for a brief correction.

Let's start the conversation or continue it naturally.`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://steadyshell.com", // Optional, for OpenRouter rankings
        "X-Title": "Steady Shell", // Optional
      },
      body: JSON.stringify({
        "model": "qwen/qwen-2.5-7b-instruct",
        "messages": [
          { "role": "system", "content": systemPrompt },
          ...messages
        ],
        "temperature": 0.7,
        "max_tokens": 500,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to get response from OpenRouter');
    }

    return NextResponse.json({ 
      message: data.choices[0].message.content 
    });

  } catch (error: any) {
    console.error('OpenRouter Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
