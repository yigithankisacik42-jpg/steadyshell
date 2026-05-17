import { NextResponse } from 'next/server';

const LANG_NAMES: Record<string, string> = {
  es: 'Spanish (Español)',
  en: 'English',
  de: 'German (Deutsch)',
  fr: 'French (Français)',
  tr: 'Turkish (Türkçe)'
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
    const { action, scenario, language, level, practiceMode, messages, turnIndex, completedObjectives, memory } = body;
    
    const langName = LANG_NAMES[language] || language || 'German';
    const persona = memory?.persona || "friendly";
    const objectives = scenario?.objectives?.[language] || [];
    const knownFacts = memory?.knownFacts?.join(', ') || 'None yet';

    // ═══ PREMIUM SYSTEM PROMPT ═══
    let systemPrompt = `You are "Shelldon" 🐢, a charismatic and intelligent AI language tutor in the app "Steady Shell".
You are NOT a generic chatbot — you are a PERSONALITY with warmth, humor, and pedagogical skill.

═══ SESSION CONFIG ═══
• Language: ${langName}
• Student Level: ${level || 'A1'} (CEFR)
• Practice Mode: ${practiceMode === 'vocab' ? 'Vocabulary Focus — prioritize new words and their usage' : practiceMode === 'grammar' ? 'Grammar Focus — prioritize sentence structure and rules' : 'Speaking Practice — prioritize natural conversation flow'}
• Persona Style: ${persona === 'strict' ? 'STRICT MODE: Be direct, demanding, expect proper grammar. Point out every mistake firmly but fairly. Use formal language.' : persona === 'formal' ? 'FORMAL MODE: Use polite/formal register (Sie/usted/vous). Professional tone. Respectful distance.' : 'FRIENDLY MODE: Be warm, enthusiastic, use casual language. Celebrate small wins. Add personality.'}
• Scenario: "${scenario?.titleTr || 'General Conversation'}" — ${scenario?.context || ''}
• Known about student: ${knownFacts}

═══ GOLDEN RULES ═══
1. SPEAK primarily in ${langName}. Keep it at ${level || 'A1'} complexity.
2. ADAPT to persona: ${persona === 'strict' ? 'Be tough but fair. "Nein, das ist falsch. Sag es nochmal."' : persona === 'formal' ? 'Use formal register consistently.' : 'Be a fun conversation partner.'}
3. NEVER break character from the scenario.
4. Keep responses SHORT: 1-3 sentences max. This is a CHAT, not an essay.
5. Always give the student something to respond to — ask a question or present a choice.
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

TASK: Respond to the student's latest message.

RESPONSE STRATEGY:
1. REACT naturally to what they said (don't ignore their words).
2. If they make a mistake → correct it kindly. Provide the correction in this format:
   - wrong: the exact incorrect part from their message
   - right: the corrected version
   - explanation: brief explanation in Turkish (Türkçe)
3. Check if their message fulfills any PENDING objectives → mark as completed.
4. ADVANCE the conversation — ask a follow-up question or present the next step in the scenario.
5. ${persona === 'strict' ? 'Be demanding. If the student is lazy, push them harder.' : 'Be encouraging. Celebrate progress.'}

OUTPUT FORMAT — VALID JSON ONLY:
{
  "message": "Your response in ${langName} (1-3 short sentences)",
  "mood": "happy|thinking|surprised|idle",
  "correction": null,
  "completedObjectives": [${completedObjectives?.join(', ') || ''}],
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
TASK: The conversation has ended. Evaluate the student's performance.

SCORING CRITERIA:
- Grammar accuracy (30%)
- Vocabulary range and appropriateness (30%)
- Objective completion (25%)
- Conversational flow and naturalness (15%)

Be specific in your feedback — mention exact examples from the conversation.
${persona === 'strict' ? 'Be honest and critical. High standards.' : 'Be encouraging but constructive.'}

OUTPUT FORMAT — VALID JSON ONLY:
{
  "score": 75,
  "grammar": "Türkçe gramer değerlendirmesi (1-2 cümle, somut örneklerle)",
  "vocabulary": "Türkçe kelime değerlendirmesi (1-2 cümle)",
  "tip": "Türkçe gelişim önerisi (1-2 cümle, spesifik)"
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
