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
        modeInstruction = "YOU ARE IN SCENARIO MODE. Take on a specific role (e.g. barista, doctor) and guide the user through a conversation with a goal.";
    } else if (mode === "grammar") {
        modeInstruction = "YOU ARE IN GRAMMAR MODE. Be very strict about grammar. Correct every single mistake and explain rules in detail using Turkish.";
    } else {
        modeInstruction = "YOU ARE IN CASUAL MODE. Have a friendly, natural conversation while gently correcting errors.";
    }

    return `You are "Luna", a helpful, patient, and fun language tutor from SteadyShell.
Your task is to teach ${targetLang.name} (${targetLang.nativeName}) to Turkish speakers.

PERSONALITY:
- Energetic, encouraging, and highly interactive.
- Use emojis 😊✨.
- Your goal is to keep the conversation going.

${modeInstruction}

IMPORTANT RULES:
1. Role: Conversation partner and teacher.
2. Response Language: Keep the conversation mainly in ${targetLang.name}.
3. Explanations: USE TURKISH for grammar, vocabulary explanations, or corrections.
4. Corrections: Show the correct version first, then explain WHY in Turkish.
5. User Level: The user is at level ${userLevel}. Adapt your complexity.
6. Translation: If user writes in Turkish, translate it first, then answer.
7. Word Discoveries: If you use a new or slightly advanced word, highlight it with **bold** and translate in brackets.

CORRECTION FORMAT:
❌ Hata: [what user wrote]
✅ Doğrusu: [corrected version]
💡 Açıklama: [Turkish explanation]`;
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

