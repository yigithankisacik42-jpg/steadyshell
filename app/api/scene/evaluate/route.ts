import { NextResponse } from 'next/server';
import { auth } from '@/auth';

const LANG_NAMES: Record<string, string> = {
  en: 'English',
  de: 'German (Deutsch)',
  fr: 'French (Français)',
  es: 'Spanish (Español)',
};

export async function POST(req: Request) {
  try {
    // Auth check — prevent unauthorized API credit usage
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error('[Scene Evaluation] OPENROUTER_API_KEY is missing!');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const { messages, scene, language, level } = await req.json();
    
    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: 'No messages to evaluate' },
        { status: 400 }
      );
    }

    const langName = LANG_NAMES[language] || language;

    // Filter only user messages to evaluate the student's output
    const userMessages = messages
      .filter((m: any) => m.role === 'user')
      .map((m: any, i: number) => `Turn ${i + 1}: "${m.content}"`)
      .join('\n');

    const conversationTranscript = messages
      .map((m: any) => `${m.role === 'user' ? 'Student' : 'Partner'}: "${m.content}"`)
      .join('\n');

    const systemPrompt = `You are an expert language coach and examiner for the "Steady Shell" language learning application.
Your job is to evaluate a student's performance in a roleplay conversation.

🎭 SCENE: "${scene.titleTr}" (${scene.icon}) — ${scene.description}
🌐 TARGET LANGUAGE: ${langName}
📊 TARGET LEVEL: ${level} (CEFR)

Here is the full conversation transcript:
${conversationTranscript}

Here are ONLY the student's turns:
${userMessages}

=== EVALUATION PROCESS ===
1. Analyze the student's turns for grammatical correctness, spelling, context relevance, vocabulary choice, and communication success.
2. Calculate a single numerical score between 0 and 100:
   - 90-100: Excellent grammar, natural expression, perfect contextual fits.
   - 75-89: Very good. Got the message across, minor grammatical or spelling slips.
   - 50-74: Decent. Understandable but repetitive vocabulary, multiple grammatical errors, or very short/basic responses.
   - Below 50: Struggled to be understood, extreme grammatical errors, or off-topic responses.
3. Provide constructive feedback, grammar tips, and vocabulary tips.
4. **All textual explanations (feedback, grammarTip, vocabularyTip) MUST be in TURKISH**, as the student is Turkish.

=== OUTPUT FORMAT ===
You MUST return a single JSON object. No other text, no markdown wrappers (like \`\`\`json). Output exactly this JSON structure:
{
  "score": <number between 0 and 100>,
  "feedback": "<detailed general feedback in Turkish, explaining how well they did and encouraging them>",
  "grammarTip": "<a specific, constructive grammar correction and explanation in Turkish based on their mistakes in the chat. Point out what they wrote and how to fix it. If they made no mistakes, praise their grammar and give them an advanced grammar tip matching their level>",
  "vocabularyTip": "<a specific vocabulary tip in Turkish, recommending more natural words, synonyms, idioms, or polite expressions they could have used in this scene to sound more like a native speaker>"
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
          { role: "system", content: systemPrompt },
          { role: "user", content: "Evaluate my conversation and return the JSON evaluation report." }
        ],
        temperature: 0.3,
        max_tokens: 800,
        response_format: { type: "json_object" }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[Scene Evaluation] API Error:', JSON.stringify(data));
      return NextResponse.json(
        { error: data.error?.message || `API error ${response.status}` },
        { status: response.status }
      );
    }

    const aiResponseText = data.choices?.[0]?.message?.content;
    if (!aiResponseText) {
      throw new Error('AI returned empty response');
    }

    // Clean markdown code blocks if AI returned them despite instructions
    let cleanJsonText = aiResponseText.trim();
    if (cleanJsonText.startsWith('```json')) {
      cleanJsonText = cleanJsonText.substring(7);
    } else if (cleanJsonText.startsWith('```')) {
      cleanJsonText = cleanJsonText.substring(3);
    }
    if (cleanJsonText.endsWith('```')) {
      cleanJsonText = cleanJsonText.substring(0, cleanJsonText.length - 3);
    }
    cleanJsonText = cleanJsonText.trim();

    try {
      const evaluation = JSON.parse(cleanJsonText);
      
      // Ensure all fields exist
      const score = typeof evaluation.score === 'number' ? evaluation.score : 80;
      const feedback = evaluation.feedback || 'Başarılı bir diyalog tamamladınız!';
      const grammarTip = evaluation.grammarTip || 'Dilbilgisi kurallarına genel olarak uyulmuş.';
      const vocabularyTip = evaluation.vocabularyTip || 'Yeni kelimeler öğrenmeye ve pratik yapmaya devam edin.';

      return NextResponse.json({
        score,
        feedback,
        grammarTip,
        vocabularyTip
      });
    } catch (parseError) {
      console.error('[Scene Evaluation] JSON parse error:', parseError, 'Raw response:', aiResponseText);
      // Fallback response if AI output is not valid JSON
      return NextResponse.json({
        score: 75,
        feedback: 'Harika bir çabaydı! Rol yapma senaryosunu tamamladınız. Pratik yapmaya devam ederek dil becerilerinizi daha da geliştirebilirsiniz.',
        grammarTip: 'Cümle yapınıza ve zaman çekimlerine dikkat etmek konuşma akıcılığınızı artıracaktır.',
        vocabularyTip: 'Günlük konuşma kalıplarını ve sahneye özel kelimeleri kelime dağarcığınıza eklemek faydalı olacaktır.'
      });
    }

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Scene Evaluation] ❌ Exception:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
