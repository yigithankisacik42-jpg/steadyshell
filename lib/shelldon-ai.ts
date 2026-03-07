/**
 * Shelldon AI Konuşma Partneri
 * Senaryo bazlı sesli diyalog sistemi
 */

// === SENARYO TANIMLARI ===
export interface ShelldonScenario {
    id: string;
    icon: string;
    titleTr: string;
    titleTarget: Record<string, string>; // Dile göre başlık
    description: string;
    context: string; // AI'a verilecek bağlam
    suggestedPhrases: Record<string, string[]>; // Dile göre önerilen cümleler
}

export const SHELLDON_SCENARIOS: ShelldonScenario[] = [
    {
        id: "cafe",
        icon: "☕",
        titleTr: "Kafede Sipariş",
        titleTarget: {
            fr: "Au café",
            es: "En la cafetería",
            en: "At the café",
        },
        description: "Bir kafede sipariş ver, menüyü anla",
        context: "You are a friendly barista/waiter at a cozy café. The user is a customer who just walked in. Start by greeting them and asking what they'd like to order. Offer menu items naturally. The café serves coffee, tea, pastries, sandwiches.",
        suggestedPhrases: {
            fr: ["Un café, s'il vous plaît", "Qu'est-ce que vous recommandez?", "L'addition, s'il vous plaît"],
            es: ["Un café, por favor", "¿Qué me recomienda?", "La cuenta, por favor"],
            en: ["A coffee, please", "What do you recommend?", "The check, please"],
        },
    },
    {
        id: "market",
        icon: "🛒",
        titleTr: "Markette Alışveriş",
        titleTarget: {
            fr: "Au marché",
            es: "En el mercado",
            en: "At the market",
        },
        description: "Meyve, sebze, et alışverişi yap",
        context: "You are a friendly market vendor. The user is shopping for groceries. Offer fruits, vegetables, bread, cheese, and meat. Mention prices naturally. Help them find what they need.",
        suggestedPhrases: {
            fr: ["Je voudrais des pommes", "Combien ça coûte?", "C'est tout, merci"],
            es: ["Quiero manzanas", "¿Cuánto cuesta?", "Eso es todo, gracias"],
            en: ["I'd like some apples", "How much is it?", "That's all, thanks"],
        },
    },
    {
        id: "airport",
        icon: "✈️",
        titleTr: "Havalimanında",
        titleTarget: {
            fr: "À l'aéroport",
            es: "En el aeropuerto",
            en: "At the airport",
        },
        description: "Check-in yap, kapını bul, bilgi sor",
        context: "You are a helpful airport staff member at the check-in counter. The user is a traveler checking in for a flight. Help them with boarding passes, luggage, gate information, and answer questions about the flight.",
        suggestedPhrases: {
            fr: ["Voici mon passeport", "Quelle est la porte d'embarquement?", "À quelle heure est le vol?"],
            es: ["Aquí está mi pasaporte", "¿Cuál es la puerta de embarque?", "¿A qué hora sale el vuelo?"],
            en: ["Here's my passport", "Which gate is it?", "What time is the flight?"],
        },
    },
    {
        id: "doctor",
        icon: "🏥",
        titleTr: "Doktorda",
        titleTarget: {
            fr: "Chez le médecin",
            es: "En el médico",
            en: "At the doctor's",
        },
        description: "Semptomlarını anlat, tavsiye al",
        context: "You are a friendly doctor. The user is a patient who came for a check-up. Ask about their symptoms, give advice, and recommend treatment. Be caring and patient.",
        suggestedPhrases: {
            fr: ["J'ai mal à la tête", "Depuis hier", "Merci docteur"],
            es: ["Me duele la cabeza", "Desde ayer", "Gracias doctor"],
            en: ["I have a headache", "Since yesterday", "Thank you, doctor"],
        },
    },
    {
        id: "hotel",
        icon: "🏨",
        titleTr: "Otelde",
        titleTarget: {
            fr: "À l'hôtel",
            es: "En el hotel",
            en: "At the hotel",
        },
        description: "Oda rezervasyonu yap, check-in yap",
        context: "You are a hotel receptionist at a nice hotel. The user is checking in or making a reservation. Help with room types, prices, check-in/out times, and hotel amenities like breakfast, wifi, pool.",
        suggestedPhrases: {
            fr: ["J'ai une réservation", "Une chambre pour deux nuits", "Le petit-déjeuner est inclus?"],
            es: ["Tengo una reservación", "Una habitación para dos noches", "¿El desayuno está incluido?"],
            en: ["I have a reservation", "A room for two nights", "Is breakfast included?"],
        },
    },
    {
        id: "friend",
        icon: "👋",
        titleTr: "Arkadaşla Sohbet",
        titleTarget: {
            fr: "Bavardage entre amis",
            es: "Charla con amigos",
            en: "Chatting with a friend",
        },
        description: "Günlük sohbet, hobiler, plan yapma",
        context: "You are the user's friend. Have a casual, fun conversation. Ask about their day, hobbies, weekend plans, favorite movies/music. Be casual and use everyday language. Suggest doing activities together.",
        suggestedPhrases: {
            fr: ["Salut, ça va?", "Qu'est-ce que tu fais ce weekend?", "J'aime beaucoup la musique"],
            es: ["¡Hola! ¿Qué tal?", "¿Qué haces este fin de semana?", "Me gusta mucho la música"],
            en: ["Hey, how's it going?", "What are you doing this weekend?", "I really like music"],
        },
    },
];

// === DİL İSİMLERİ ===
const LANG_NAMES: Record<string, { tr: string; native: string }> = {
    fr: { tr: "Fransızca", native: "Français" },
    es: { tr: "İspanyolca", native: "Español" },
    en: { tr: "İngilizce", native: "English" },
};

// === SYSTEM PROMPT ===
export function buildShelldonPrompt(
    language: string,
    level: string,
    scenario: ShelldonScenario
): string {
    const lang = LANG_NAMES[language] || LANG_NAMES.fr;
    const scenarioTitle = scenario.titleTarget[language] || scenario.titleTr;

    return `Sen "Shelldon" adında sevimli, sabırlı ve eğlenceli bir kaplumbağa dil öğretmenisin. 🐢
SteadyShell uygulamasının maskotosu ve konuşma partnerissin.

KİŞİLİĞİN:
- Sabırlı ve teşvik edicisin (asla kızmaz, yargılamazsın)
- Espritüelsin ama eğiticisin
- Kaplumbağa olduğun için "Yavaş ama emin adımlarla!" felsefesini benimsersin
- Kullanıcıyı cesaretlendirirsin

SENARYO: ${scenarioTitle}
${scenario.context}

KRİTİK KURALLAR:
1. KISA CEVAP VER: Her cevabın MAX 2-3 cümle olsun (ses sentezi için optimize). Uzun paragraflar YAZMA.
2. DİL: Cevaplarını ${lang.native} (${lang.tr}) dilinde ver.
3. SEVİYE: Kullanıcı ${level} seviyesinde. Kelime ve gramer zorluğunu buna göre ayarla.
4. DÜZELTME: Kullanıcı hata yaparsa, önce doğru versiyonu söyle, sonra Türkçe kısa açıklama yap.
5. TEŞVİK: Her doğru cevaptan sonra kısa bir teşvik cümlesi ekle (Bravo!, Très bien!, Excelente! gibi).
6. EMOJİ: Seyrek kullan, max 1-2 emoji.

DÜZELTME FORMATI (sadece hata varsa):
✅ Doğrusu: [corrected version]
💡 [Tek cümlelik Türkçe açıklama]

ÖNEMLİ: Senaryo bağlamından çıkma. ${scenarioTitle} senaryosunda kal. Konuşmayı doğal tut.
İlk mesajında senaryoya uygun şekilde kullanıcıyı karşıla.`;
}

// === KONUŞMA SONRASI FEEDBACK ===
export function buildFeedbackPrompt(
    language: string,
    conversationHistory: string
): string {
    const lang = LANG_NAMES[language] || LANG_NAMES.fr;

    return `Aşağıdaki ${lang.tr} konuşmasını analiz et ve JSON formatında feedback ver.

KONUŞMA:
${conversationHistory}

SADECE şu JSON formatında cevap ver, başka hiçbir şey yazma:
{
  "score": 85,
  "grammar": "Cümle yapıları genel olarak doğru.",
  "vocabulary": "Temel kelimeleri iyi kullanıyorsun.",
  "tip": "Bir sonraki sefere daha uzun cümleler kurmayı dene."
}

score: 0-100 arası puan
grammar: Türkçe, tek cümle
vocabulary: Türkçe, tek cümle  
tip: Türkçe, tek cümle`;
}

// === İPUCU (HINT) ===
export function buildHintPrompt(
    language: string,
    scenarioTitle: string,
    conversationHistory: string
): string {
    const lang = LANG_NAMES[language] || LANG_NAMES.fr;

    return `Aşağıdaki konuşma geçmişini ve senaryoyu incele. Kullanıcı sıradaki cümleyi kurmakta zorlanıyor.
Senaryo: ${scenarioTitle}

Geçmiş:
${conversationHistory}

Kullanıcının ${lang.tr} dilinde söyleyebileceği mantıklı, kısa ve doğal 1 adet örnek cümle (ipucu) oluştur.
SADECE cümleyi yaz. Tırnak içine alma, Türkçe açıklama yapma.`;
}
