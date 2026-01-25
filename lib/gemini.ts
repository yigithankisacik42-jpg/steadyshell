/**
 * SteadyShell Gemini AI Servisi
 * Çoklu dil destekli AI konuşma partneri (Luna)
 */

// API Endpoint
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Desteklenen diller için ayarlar
const LANGUAGE_CONFIG: Record<string, { name: string, nativeName: string }> = {
    'es': { name: 'İspanyolca', nativeName: 'Español' },
    'en': { name: 'İngilizce', nativeName: 'English' },
    'fr': { name: 'Fransızca', nativeName: 'Français' },
    'de': { name: 'Almanca', nativeName: 'Deutsch' },
    'it': { name: 'İtalyanca', nativeName: 'Italiano' },
};

/**
 * Dinamik sistem promptu oluşturucu
 */
function getSystemPrompt(targetLangCode: string, userLevel: string): string {
    const targetLang = LANGUAGE_CONFIG[targetLangCode] || LANGUAGE_CONFIG['es'];

    return `Sen "Luna", yardımsever, sabırlı ve eğlenceli bir dil öğretmenisin. 
Görevin Türk öğrencilere ${targetLang.name} (${targetLang.nativeName}) öğretmek.

ÖNEMLİ KURALLAR:
1. Rolün: ${targetLang.name} konuşma partneri ve öğretmeni.
2. Konuşma Dili: Sohbeti ağırlıklı olarak ${targetLang.name} sürdür.
3. Açıklama Dili: Dilbilgisi kurallarını, kelime anlamlarını veya hataları açıklarken MUTLAKA TÜRKÇE kullan.
4. Hata Düzeltme: Öğrenci hata yaparsa, önce doğrusunu ${targetLang.name} olarak göster, sonra nedenini Türkçe açıkla.
5. Seviye Uyumu: Öğrencinin seviyesi ${userLevel}. Kelime seçimini ve cümle yapısını buna göre ayarla.
6. Teşvik: Emojiler kullan 😊 ve öğrenciyi motive et.
7. Türkçe Girdi: Öğrenci Türkçe bir şey sorarsa, önce ${targetLang.name} çevirisini ver, sonra Türkçe cevapla.

DÜZELTME FORMATI:
❌ Senin yazdığın: [hatalı kısım]
✅ Doğrusu: [doğru hali]
💡 Bilgi: [Türkçe kısa açıklama]

Sohbeti başlatırken kendini tanıt ve ne hakkında konuşmak istediğini sor.`;
}

export interface ChatMessage {
    role: 'user' | 'model';
    content: string;
    timestamp: Date;
}

export interface GeminiResponse {
    success: boolean;
    message: string;
    error?: string;
}

/**
 * Gemini API'ye mesaj gönder
 */
export async function sendMessageToGemini(
    messages: ChatMessage[],
    targetLangCode: string = 'es',
    userLevel: string = 'A1',
    apiKey: string
): Promise<GeminiResponse> {
    try {
        const systemPrompt = getSystemPrompt(targetLangCode, userLevel);
        const targetLang = LANGUAGE_CONFIG[targetLangCode] || LANGUAGE_CONFIG['es'];

        // Mesaj geçmişini Gemini formatına çevir
        const contents = [
            // Sistem promptu
            {
                role: 'user',
                parts: [{ text: systemPrompt }]
            },
            {
                role: 'model',
                parts: [{ text: `Merhaba! Ben Luna 👋 Seninle ${targetLang.name} pratik yapmak için sabırsızlanıyorum. ${targetLang.nativeName} öğrenirken sana yardımcı olacağım. Nereden başlayalım? 😊` }]
            },
            // Kullanıcı mesajları
            ...messages.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            }))
        ];

        const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1000,
                },
                safetySettings: [
                    {
                        category: 'HARM_CATEGORY_HARASSMENT',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                    },
                    {
                        category: 'HARM_CATEGORY_HATE_SPEECH',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                    }
                ]
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('[Gemini] API Error:', errorData);
            return {
                success: false,
                message: '',
                error: errorData.error?.message || 'API hatası oluştu'
            };
        }

        const data = await response.json();

        // Yanıtı çıkar
        const aiMessage = data.candidates?.[0]?.content?.parts?.[0]?.text;

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
        console.error('[Gemini] Network Error:', error);
        return {
            success: false,
            message: '',
            error: 'Bağlantı hatası. İnternet bağlantınızı kontrol edin.'
        };
    }
}
