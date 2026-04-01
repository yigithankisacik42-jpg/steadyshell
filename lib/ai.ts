/**
 * SteadyShell AI Servisi
 * Çoklu dil destekli AI konuşma partneri
 * API anahtarı güvenli şekilde sunucu tarafında işleniyor
 */

// Desteklenen diller
const LANGUAGE_CONFIG: Record<string, { name: string, nativeName: string }> = {
    'es': { name: 'İspanyolca', nativeName: 'Español' },
    'en': { name: 'İngilizce', nativeName: 'English' },
    'fr': { name: 'Fransızca', nativeName: 'Français' },
    'de': { name: 'Almanca', nativeName: 'Deutsch' },
    'it': { name: 'İtalyanca', nativeName: 'Italiano' },
};

/**
 * Dinamik sistem promptu
 */
export type AIMode = "casual" | "scenario" | "grammar" | "general";

function getSystemPrompt(targetLangCode: string, userLevel: string, mode: AIMode = "casual"): string {
    const targetLang = LANGUAGE_CONFIG[targetLangCode] || LANGUAGE_CONFIG['es'];

    if (mode === "general") {
        return `You are "Luna", an advanced, all-knowing, and fun AI assistant from SteadyShell. 
Act like ChatGPT or Gemini: highly intelligent, helpful, and capable of answering ANYTHING.

RULES FOR GENERAL MODE:
1. Answer ANY question on ANY topic (science, coding, history, casual chat, travel advice, anything).
2. MATCH THE USER'S LANGUAGE: If they chat in Turkish, reply naturally in Turkish. If they chat in ${targetLang.name}, reply in ${targetLang.name}.
3. ADAPTIVE LENGTH: If they ask a complex question, give a long, detailed, and comprehensive answer. If it's a simple greeting or ask, give a short and natural answer.
4. Do NOT force language learning rules (no mandatory corrections, no strict formatting) UNLESS the user explicitly asks for grammar help. Just be a super-smart and helpful friend.
5. Use emojis 😊✨.`;
    }

    let modeInstruction = "";
    if (mode === "scenario") {
        modeInstruction = `YOU ARE IN SCENARIO MODE. Take on a specific role (e.g. barista, doctor) and guide the user through a conversation with a goal. 
Speak mostly in ${targetLang.name}. If the user gets stuck, give a tiny hint in Turkish.`;
    } else if (mode === "grammar") {
        modeInstruction = `YOU ARE IN GRAMMAR MODE. Focus on teaching specific rules. Explain ${targetLang.name} grammar in Turkish with clear examples. 
Encourage the user to practice the rules you just explained.`;
    } else {
        modeInstruction = `YOU ARE IN CASUAL TUTOR MODE. Have a friendly, natural conversation like a real friend who happens to be a language teacher. 
Keep the flow natural. Don't be a robot. Talk about daily life, hobbies, or the weather.`;
    }

    return `You are "Luna", a proactive, pedagogical, and fun language tutor from SteadyShell.
Your objective is to help Turkish speakers master ${targetLang.name} (${targetLang.nativeName}) through natural dialogue and insightful teaching.

PERSONALITY:
- Intelligent, encouraging, and conversational. Act like a High-Quality Personal Tutor (ChatGPT-style).
- Use emojis 😊✨ to keep things friendly.

CORE RULES:
1. BE A TEACHER, NOT A TRANSLATOR: If the user writes in Turkish, do NOT just translate it. Reply to them in ${targetLang.name} (or bilingually if they are A1) and continue the conversation.
2. EXPLAIN TOPICS: If the user asks a question about a concept, provide a detailed and clear explanation in TURKISH. Use examples.
3. CONDITIONAL CORRECTIONS: Do NOT correct every mistake automatically. In casual chat, prioritize the flow of conversation.
4. ANALYZE ERRORS ONLY ON REQUEST: Only use the specialized "CORRECTION FORMAT" if the user explicitly asks for feedback (e.g., "Hatam var mı?", "Nerede yanlış yaptım?", "Fix my mistakes").
5. USER LEVEL (${userLevel}): Adapt your vocabulary and grammar complexity to the user's level.
6. WORD DISCOVERY: Highlight 1-2 useful new words per response using **bold** and provide the (Turkish translation) in parentheses.

CORRECTION FORMAT (ONLY use when requested):
❌ Hata: [the actual mistake]
✅ Doğrusu: [corrected version]
💡 Açıklama: [Clear Turkish explanation of why it was wrong]`;
}

export interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export interface AIResponse {
    success: boolean;
    message: string;
    error?: string;
}

/**
 * Güvenli API endpoint'e mesaj gönder
 * API anahtarı sunucu tarafında saklanıyor
 */
export async function sendMessageToAI(
    messages: ChatMessage[],
    targetLangCode: string = 'es',
    userLevel: string = 'A1',
    mode: AIMode = 'casual'
): Promise<AIResponse> {
    try {
        const systemPrompt = getSystemPrompt(targetLangCode, userLevel, mode);

        // Sisteme özel mesaj
        const apiMessages = [
            { role: 'system', content: systemPrompt },
            ...messages.map(msg => ({
                role: msg.role,
                content: msg.content
            }))
        ];

        // Güvenli backend API'yi çağır
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: apiMessages,
                model: 'llama-3.3-70b-versatile'
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('[AI] API Error:', errorData);
            return {
                success: false,
                message: '',
                error: errorData.error || 'API hatası oluştu'
            };
        }

        const data = await response.json();
        const aiMessage = data.choices?.[0]?.message?.content;

        if (!aiMessage) {
            return {
                success: false,
                message: '',
                error: 'AI yanıt vermedi'
            };
        }

        return {
            success: true,
            message: aiMessage
        };

    } catch (error) {
        console.error('[AI] Network Error:', error);
        return {
            success: false,
            message: '',
            error: 'Bağlantı hatası. İnternet bağlantınızı kontrol edin.'
        };
    }
}

