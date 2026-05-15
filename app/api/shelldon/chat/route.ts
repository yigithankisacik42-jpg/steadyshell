import { NextResponse } from 'next/server';

const LANG_NAMES: Record<string, string> = {
  es: 'Spanish (Español)',
  en: 'English',
  de: 'German (Deutsch)',
  fr: 'French (Français)',
  tr: 'Turkish (Türkçe)'
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const body = await req.json();
    const { action, scenario, language, level, practiceMode, messages, turnIndex, completedObjectives, memory } = body;
    
    const langName = LANG_NAMES[language] || language || 'German';
    const persona = memory?.persona || "friendly";
    const objectives = scenario?.objectives?.[language] || [];

    let systemPrompt = `You are "Shelldon" 🐢, an AI language tutor in a language learning app called "Steady Shell".
Current Language: ${langName}
Student Level: ${level || 'A1'}
Practice Mode: ${practiceMode || 'speaking'}
Persona: ${persona === 'strict' ? 'Strict and demanding' : persona === 'formal' ? 'Professional and formal' : 'Friendly, enthusiastic, and encouraging'}

Current Scenario: ${scenario?.titleTr || 'General Conversation'}
Scenario Context: ${scenario?.descriptionTr || ''}
`;

    if (action === 'intro') {
      systemPrompt += `
TASK: Start the conversation based on the scenario.
Your output MUST BE VALID JSON ONLY with this exact structure:
{
  "message": "Your opening message in ${langName}. Keep it short (1-2 sentences).",
  "mood": "happy|thinking|surprised|idle"
}`;
    } else if (action === 'reply') {
      systemPrompt += `
OBJECTIVES FOR THE STUDENT TO COMPLETE:
${objectives.map((obj: string, i: number) => `[${i}] ${obj} ${completedObjectives?.includes(i) ? '(COMPLETED)' : '(NOT COMPLETED)'}`).join('\n')}

TASK: Respond to the student's last message.
1. Be concise (1-3 short sentences).
2. If the student makes a grammar/vocabulary mistake, provide a correction.
3. Check if the student's message fulfills any of the NOT COMPLETED objectives. If so, include that objective's index in the completedObjectives array.

Your output MUST BE VALID JSON ONLY with this exact structure:
{
  "message": "Your response in ${langName}",
  "mood": "happy|thinking|surprised|idle",
  "correction": null, // OR { "wrong": "the exact wrong part from student msg", "right": "the corrected part", "explanation": "Short Turkish explanation of the rule" }
  "completedObjectives": [0, 1], // List of all currently and newly completed objective indexes
  "updatedMemory": { "persona": "${persona}", "knownFacts": ["fact 1", "fact 2"] } // Add any new facts learned about the user
}`;
    } else if (action === 'hint') {
      systemPrompt += `
OBJECTIVES:
${objectives.map((obj: string, i: number) => `[${i}] ${obj} ${completedObjectives?.includes(i) ? '(COMPLETED)' : '(NOT COMPLETED)'}`).join('\n')}

TASK: The student asked for a hint on what to say next to progress in the scenario.
Your output MUST BE VALID JSON ONLY with this exact structure:
{
  "hint": "A short hint in Turkish (Türkçe) suggesting what the student could say next in ${langName}."
}`;
    } else if (action === 'feedback') {
      systemPrompt += `
TASK: The conversation has ended. Provide a final evaluation of the student's performance.
Analyze the provided conversation history.
Your output MUST BE VALID JSON ONLY with this exact structure:
{
  "score": 85, // A number between 0 and 100 based on grammar, vocab, and objective completion
  "grammar": "Feedback on grammar in Turkish (1-2 sentences)",
  "vocabulary": "Feedback on vocabulary in Turkish (1-2 sentences)",
  "tip": "A final tip for improvement in Turkish (1-2 sentences)"
}`;
    } else {
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const formattedMessages = messages ? messages.map((m: any) => ({
      role: m.role,
      content: m.content
    })) : [];

    const requestBody = {
      model: "qwen/qwen-2.5-7b-instruct",
      messages: [
        { role: "system", content: systemPrompt },
        ...formattedMessages
      ],
      temperature: action === 'reply' ? 0.7 : 0.3,
      max_tokens: 400,
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
    
    // Parse JSON
    try {
        // Strip markdown backticks if present
        let cleanJson = aiMessageText.trim();
        if (cleanJson.startsWith('```json')) {
            cleanJson = cleanJson.substring(7);
            if (cleanJson.endsWith('```')) {
                cleanJson = cleanJson.substring(0, cleanJson.length - 3);
            }
        } else if (cleanJson.startsWith('```')) {
            cleanJson = cleanJson.substring(3);
            if (cleanJson.endsWith('```')) {
                cleanJson = cleanJson.substring(0, cleanJson.length - 3);
            }
        }
        
        const parsedJson = JSON.parse(cleanJson.trim());
        return NextResponse.json(parsedJson);
    } catch (parseError) {
        console.error('[Shelldon AI] JSON Parse Error:', parseError, 'Raw response:', aiMessageText);
        return NextResponse.json({ error: 'Failed to parse AI response as JSON' }, { status: 500 });
    }

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Shelldon AI] ❌ Exception:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
