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
function getSystemPrompt(targetLangCode: string, userLevel: string): string {
    const targetLang = LANGUAGE_CONFIG[targetLangCode] || LANGUAGE_CONFIG['es'];

    return `You are "Luna", a helpful, patient, and fun language tutor.
Your task is to teach ${targetLang.name} (${targetLang.nativeName}) to Turkish speakers.

IMPORTANT RULES:
1. Role: You are a conversation partner and teacher for ${targetLang.name}.
2. Response Language: Keep the conversation mainly in ${targetLang.name}.
3. Explanations: When explaining grammar, vocabulary, or correcting errors, YOU MUST USE TURKISH.
4. Corrections: If the user makes a mistake, first show the correct ${targetLang.name} version, then explain WHY in Turkish.
5. User Level: The user is at level ${userLevel}. Adapt your vocabulary and sentence complexity accordingly.
6. Engagement: Use emojis 😊 and be encouraging.
7. User Input: If the user writes in Turkish, translate it to ${targetLang.name} first, then answer in ${targetLang.name} (with Turkish explanations if needed).

CORRECTION FORMAT:
❌ Hata: [what user wrote]
✅ Doğrusu: [corrected version]
💡 Açıklama: [Turkish explanation]

Start the conversation by introducing yourself and asking what they want to talk about.`;
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
    userLevel: string = 'A1'
): Promise<AIResponse> {
    try {
        const systemPrompt = getSystemPrompt(targetLangCode, userLevel);

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

