import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const { expectedText, userSpeech, language, level } = await req.json();

    if (!expectedText) {
      return NextResponse.json({ error: 'expectedText is required' }, { status: 400 });
    }

    const cleanedUserSpeech = (userSpeech || "").trim();

    const systemPrompt = `You are a professional AI pronunciation tutor for a language learning app called "Steady Shell".
Your job is to compare what the student was supposed to say ("Expected") vs what their microphone speech was transcribed as ("Transcribed").

Expected Sentence: "${expectedText}"
Language: ${language || "en"}
Difficulty Level: ${level || "A1"}

Transcribed Speech: "${cleanedUserSpeech}"

Analyze:
1. Did the student pronounce the sentence correctly? Allow minor transcription spelling/punctuation variations. If the transcribed speech is completely empty or highly mismatched, they failed.
2. Calculate a pronunciation match score from 0 to 100. If it matches extremely closely, give a high score (80-100). If they missed key words, give 40-79. If they said something else entirely or it is blank, give 0-39.
3. Write a short, encouraging feedback message in TURKISH.
   - If they did well (score >= 70): Congratulate them warmly (e.g., "Mükemmel telaffuz! Cümleyi gayet akıcı ve net çıkardın.") and provide a subtle tip if any.
   - If they need practice (score < 70): Gently point out the mismatched or missing words, and explain how to pronounce the challenging sounds in Turkish. Keep it encouraging!
   - Keep the feedback brief (2 sentences max).

Return your response ONLY as a valid JSON object in this format (no markdown formatting, no code blocks, just raw JSON):
{
  "isCorrect": boolean,
  "score": number,
  "feedback": "string in Turkish"
}`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://steadyshell.com",
        "X-Title": "Steady Shell",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [
          { role: "user", content: systemPrompt }
        ],
        temperature: 0.3, // Lower temperature for more stable JSON output
        max_tokens: 300,
        response_format: { type: "json_object" } // Enforce JSON output
      })
    });

    const data = await response.json();

    if (!response.ok || !data.choices?.[0]?.message?.content) {
      console.error('[Pronounce AI] Error:', JSON.stringify(data));
      return NextResponse.json(
        { error: data.error?.message || 'AI response error' },
        { status: response.status || 500 }
      );
    }

    const aiMessage = data.choices[0].message.content.trim();
    
    // Parse the JSON output safely
    try {
      const parsedResult = JSON.parse(aiMessage);
      return NextResponse.json(parsedResult);
    } catch (parseError) {
      console.error('[Pronounce AI] JSON Parse Error for:', aiMessage);
      // Fallback response if parsing failed
      return NextResponse.json({
        isCorrect: cleanedUserSpeech.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") === expectedText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""),
        score: cleanedUserSpeech ? 75 : 0,
        feedback: "Sesiniz kaydedildi, ancak AI değerlendirmesi çözümlenemedi. Lütfen tekrar deneyin."
      });
    }

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Pronounce AI] ❌ Exception:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
