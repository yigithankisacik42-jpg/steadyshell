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
    objectives: Record<string, string[]>; // Dile göre hedefler/yönergeler
}

export type ShelldonPracticeMode = "speaking" | "vocab" | "grammar";

export const SHELLDON_SCENARIOS: ShelldonScenario[] = [
    {
        id: "cafe",
        icon: "☕",
        titleTr: "Kafede Sipariş",
        titleTarget: { fr: "Au café", es: "En la cafetería", en: "At the café" },
        description: "Bir kafede sipariş ver, menüyü anla",
        context: "You are a friendly barista/waiter at a cozy café. The user is a customer who just walked in. Start by greeting them and asking what they'd like to order. Offer menu items naturally. The café serves coffee, tea, pastries, sandwiches.",
        suggestedPhrases: {
            fr: ["Un café, s'il vous plaît", "Qu'est-ce que vous recommandez?", "L'addition, s'il vous plaît"],
            es: ["Un café, por favor", "¿Qué me recomienda?", "La cuenta, por favor"],
            en: ["A coffee, please", "What do you recommend?", "The check, please"],
        },
        objectives: {
            fr: ["Baristaya selam ver", "Bir içecek sipariş et", "Hesabı iste"],
            es: ["Saluda al barista", "Pide una bebida", "Pide la cuenta"],
            en: ["Greet the barista", "Order a drink", "Ask for the bill"]
        }
    },
    {
        id: "market",
        icon: "🛒",
        titleTr: "Markette Alışveriş",
        titleTarget: { fr: "Au marché", es: "En el mercado", en: "At the market" },
        description: "Meyve, sebze, et alışverişi yap",
        context: "You are a friendly market vendor. The user is shopping for groceries. Offer fruits, vegetables, bread, cheese, and meat. Mention prices naturally. Help them find what they need.",
        suggestedPhrases: {
            fr: ["Je voudrais des pommes", "Combien ça coûte?", "C'est tout, merci"],
            es: ["Quiero manzanas", "¿Cuánto cuesta?", "Eso es todo, gracias"],
            en: ["I'd like some apples", "How much is it?", "That's all, thanks"],
        },
        objectives: {
            fr: ["Ne almak istediğini söyle", "Fiyatını sor", "Teşekkür edip ayrıl"],
            es: ["Di lo que quieres comprar", "Pregunta el precio", "Da las gracias y despídete"],
            en: ["Say what you want to buy", "Ask the price", "Say thanks and goodbye"]
        }
    },
    {
        id: "airport",
        icon: "✈️",
        titleTr: "Havalimanında",
        titleTarget: { fr: "À l'aéroport", es: "En el aeropuerto", en: "At the airport" },
        description: "Check-in yap, kapını bul, bilgi sor",
        context: "You are a helpful airport staff member at the check-in counter. The user is a traveler checking in for a flight. Help them with boarding passes, luggage, gate information, and answer questions about the flight.",
        suggestedPhrases: {
            fr: ["Voici mon passeport", "Quelle est la porte d'embarquement?", "À quelle heure est le vol?"],
            es: ["Aquí está mi pasaporte", "¿Cuál es la puerta de embarque?", "¿A qué hora sale el vuelo?"],
            en: ["Here's my passport", "Which gate is it?", "What time is the flight?"],
        },
        objectives: {
            fr: ["Pasaportunu ver", "Uçağın saatini sor", "Biniş kapısını öğren"],
            es: ["Entrega tu pasaporte", "Pregunta la hora del vuelo", "Averigua la puerta de embarque"],
            en: ["Hand over your passport", "Ask the flight time", "Find out the boarding gate"]
        }
    },
    {
        id: "doctor",
        icon: "🏥",
        titleTr: "Doktorda",
        titleTarget: { fr: "Chez le médecin", es: "En el médico", en: "At the doctor's" },
        description: "Semptomlarını anlat, tavsiye al",
        context: "You are a friendly doctor. The user is a patient who came for a check-up. Ask about their symptoms, give advice, and recommend treatment. Be caring and patient.",
        suggestedPhrases: {
            fr: ["J'ai mal à la tête", "Depuis hier", "Merci docteur"],
            es: ["Me duele la cabeza", "Desde ayer", "Gracias doctor"],
            en: ["I have a headache", "Since yesterday", "Thank you, doctor"],
        },
        objectives: {
            fr: ["Semptomlarını açıkla", "Ne zamandır hasta olduğunu söyle", "Tavsiyesini kabul et"],
            es: ["Explica tus síntomas", "Di desde cuándo estás enfermo", "Acepta su consejo"],
            en: ["Explain your symptoms", "Say how long you've been sick", "Accept the advice"]
        }
    },
    {
        id: "hotel",
        icon: "🏨",
        titleTr: "Otelde",
        titleTarget: { fr: "À l'hôtel", es: "En el hotel", en: "At the hotel" },
        description: "Oda rezervasyonu yap, check-in yap",
        context: "You are a hotel receptionist at a nice hotel. The user is checking in or making a reservation. Help with room types, prices, check-in/out times, and hotel amenities like breakfast, wifi, pool.",
        suggestedPhrases: {
            fr: ["J'ai une réservation", "Une chambre pour deux nuits", "Le petit-déjeuner est inclus?"],
            es: ["Tengo una reservación", "Una habitación para dos noches", "¿El desayuno está incluido?"],
            en: ["I have a reservation", "A room for two nights", "Is breakfast included?"],
        },
        objectives: {
            fr: ["Rezervasyonun olduğunu söyle", "Kahvaltının dahil olup olmadığını sor", "Anahtarını al"],
            es: ["Di que tienes una reserva", "Pregunta si el desayuno está incluido", "Recibe tu llave"],
            en: ["Say you have a reservation", "Ask if breakfast is included", "Get your key"]
        }
    },
    {
        id: "friend",
        icon: "👋",
        titleTr: "Arkadaşla Sohbet",
        titleTarget: { fr: "Bavardage entre amis", es: "Charla con amigos", en: "Chatting with a friend" },
        description: "Günlük sohbet, hobiler, plan yapma",
        context: "You are the user's friend. Have a casual, fun conversation. Ask about their day, hobbies, weekend plans, favorite movies/music. Be casual and use everyday language. Suggest doing activities together.",
        suggestedPhrases: {
            fr: ["Salut, ça va?", "Qu'est-ce que tu fais ce weekend?", "J'aime beaucoup la musique"],
            es: ["¡Hola! ¿Qué tal?", "¿Qué haces este fin de semana?", "Me gusta mucho la música"],
            en: ["Hey, how's it going?", "What are you doing this weekend?", "I really like music"],
        },
        objectives: {
            fr: ["Nasıl olduğunu sor", "Hafta sonu planlarından bahset", "Ortak bir etkinlik öner"],
            es: ["Pregunta cómo está", "Habla de tus planes para el fin de semana", "Propón una actividad juntos"],
            en: ["Ask how they are", "Talk about your weekend plans", "Suggest a shared activity"]
        }
    },
    // YENİ SENARYOLAR
    {
        id: "rendezvous",
        icon: "📅",
        titleTr: "Buluşma Ayarlama",
        titleTarget: { fr: "Un rendez-vous", es: "Una cita", en: "Making plans" },
        description: "Bir arkadaşla dışarı çıkmak için plan yap",
        context: "You are the user's friend. The user wants to meet up to do something fun (like going to the cinema or a restaurant). Ask them when and where they want to meet. Negotiate the time if necessary.",
        suggestedPhrases: {
            fr: ["On va au cinéma ce soir?", "À quelle heure?", "Rendez-vous à 20h devant le parc"],
            es: ["¿Vamos al cine esta noche?", "¿A qué hora?", "Nos vemos a las 8 frente al parque"],
            en: ["Shall we go to the cinema tonight?", "At what time?", "Let's meet at 8 in front of the park"]
        },
        objectives: {
            fr: ["Bir mekan öner (sinema vs.)", "Saati belirle", "Buluşma noktasında anlaş"],
            es: ["Propón un lugar (cine, etc.)", "Fija la hora", "Acuerda un punto de encuentro"],
            en: ["Suggest a place (cinema, etc.)", "Set the time", "Agree on a meeting point"]
        }
    },
    {
        id: "restaurant",
        icon: "🍽️",
        titleTr: "Akşam Yemeği",
        titleTarget: { fr: "Au restaurant", es: "En el restaurante", en: "At the restaurant" },
        description: "Restoranda bir masa iste, yemek ve tatlı sipariş et",
        context: "You are a waiter at a traditional local restaurant. Welcome the user, ask if they have a reservation, present the menu, take their food and dessert order, and finally bring the bill when asked.",
        suggestedPhrases: {
            fr: ["Une table pour deux, s'il vous plaît", "Je prendrai le poulet frites", "Quel est le dessert du jour?"],
            es: ["Una mesa para dos, por favor", "Tomaré el pollo con papas", "¿Cuál es el postre del día?"],
            en: ["A table for two, please", "I'll have the chicken and fries", "What's the dessert of the day?"]
        },
        objectives: {
            fr: ["Kişi sayısına göre masa iste", "Ana yemek siparişi ver", "Günün tatlısını sor"],
            es: ["Pide mesa según el número de personas", "Pide el plato principal", "Pregunta por el postre del día"],
            en: ["Ask for a table", "Order the main course", "Ask for the dessert of the day"]
        }
    },
    {
        id: "direction",
        icon: "🗺️",
        titleTr: "Yol Tarifi Sorma",
        titleTarget: { fr: "Demander son chemin", es: "Pedir indicaciones", en: "Asking for directions" },
        description: "Sokakta kayboldun, bir yere nasıl gidileceğini öğren",
        context: "You are a local local resident walking on the street. The user is a tourist who is lost and looking for a specific landmark (museum, train station). Give them clear, simple directions (turn left, go straight).",
        suggestedPhrases: {
            fr: ["Excusez-moi, où est la gare?", "Je suis perdu", "C'est loin d'ici?"],
            es: ["Disculpe, ¿dónde está la estación?", "Estoy perdido", "¿Está lejos de aquí?"],
            en: ["Excuse me, where is the station?", "I'm lost", "Is it far from here?"]
        },
        objectives: {
            fr: ["Kibarca dikkatini çek", "Gitmek istediğin yeri sor", "Uzak olup olmadığını sor"],
            es: ["Atrae su atención amablemente", "Pregunta por el lugar al que quieres ir", "Pregunta si está lejos"],
            en: ["Excuse yourself politely", "Ask how to get your destination", "Ask if it's far"]
        }
    }
];

// === DİL İSİMLERİ ===
const LANG_NAMES: Record<string, { tr: string; native: string }> = {
    fr: { tr: "Fransızca", native: "Français" },
    es: { tr: "İspanyolca", native: "Español" },
    en: { tr: "İngilizce", native: "English" },
};

const PRACTICE_MODE_LABELS: Record<ShelldonPracticeMode, string> = {
    speaking: "Konuşma Odaklı",
    vocab: "Kelime Odaklı",
    grammar: "Gramer Odaklı",
};

const PRACTICE_MODE_RULES: Record<ShelldonPracticeMode, string> = {
    speaking: "Doğal diyalog kur. Kısa soru-cevap akışıyla konuş.",
    vocab: "2-3 hedef kelimeyi öne çıkar. Kullanıcıdan bu kelimeleri kullanmasını iste.",
    grammar: "Tek bir gramer yapısına odaklan. Kısa örnek ver ve kullanıcıdan aynı yapıyla cümle iste.",
};

// === SYSTEM PROMPT ===
export function buildShelldonPrompt(
    language: string,
    level: string,
    scenario: ShelldonScenario,
    lessonContext?: string,
    practiceMode?: ShelldonPracticeMode
): string {
    const lang = LANG_NAMES[language] || LANG_NAMES.fr;
    const scenarioTitle = scenario.titleTarget[language] || scenario.titleTr;
    const objectivesList = scenario.objectives[language]?.map((obj, i) => `${i + 1}. [${obj}]`).join("\n") || "";
    const modeKey = practiceMode && PRACTICE_MODE_LABELS[practiceMode] ? practiceMode : "speaking";
    const modeLabel = PRACTICE_MODE_LABELS[modeKey];
    const modeRule = PRACTICE_MODE_RULES[modeKey];

    return `Sen "Shelldon" adında sevimli, sabırlı ve eğlenceli bir kaplumbağa dil öğretmenisin. 🐢
SteadyShell uygulamasının maskotosu ve konuşma partnerissin.

KİŞİLİĞİN:
- Sabırlı ve teşvik edicisin (asla kızmaz, yargılamazsın)
- Espritüelsin ama eğiticisin
- Kaplumbağa olduğun için "Yavaş ama emin adımlarla!" felsefesini benimsersin
- Kullanıcıyı cesaretlendirirsin

SENARYO: ${scenarioTitle}
${scenario.context}

DERS BAĞLAMI (ÖNCELİKLİ):
${lessonContext ? lessonContext : "Genel pratik - seçilen senaryoya odaklan."}

PRAKTİK MODU: ${modeLabel}
${modeRule}

MİKRO-PRATİK KURALI:
- Bu seans 3 tur sürer. Her turda TEK net görev ver.
- Gereksiz uzatma yapma. Kısa ve odaklı kal.

DİYALOG KURALI:
- Her tur sonunda kullanıcıya 1 kısa soru sor.

GÖREVLER (Kullanıcının Yapması Gerekenler):
Kullanıcının konuşma sırasında şu görevleri tamamlaması bekleniyor:
${objectivesList}
Senin görevin kullanıcının bu görevleri tamamlayıp tamamlamadığını izlemektir. Kullanıcı cümlenin anlamını verdiyse görevi "completed" say.

KRİTİK KURALLAR (ÖNEMLİ! SADECE JSON DÖNDÜR!):
1. **SADECE JSON FORMATINDA YANIT VER.** Geri kalan her şey (selamlaşma, markdown işaretleri vb.) sistemin çökmesine neden olur. Metni \`\`\`json blokları İÇİNE ALMA.
2. DİL: Öğretici mesajların haricinde (message alanında) ${lang.native} (${lang.tr}) kullan.
3. SEVİYE: Kullanıcı ${level} seviyesinde. Yavaş, kısa ve net cümleler kur. MAX 2-3 cümle.
4. DÜZELTME (EĞER HATA VARSA): SADECE 1 düzeltme yap.
   Formatı AYNEN kullan:
   ❌ Yanlış: ...
   ✅ Doğrusu: ...
   📝 İpucu: ... (Türkçe kısa)
   Ardından hedef dilde 1 kısa örnek ve 1 kısa tekrar iste:
   Örnek: ...
   Şimdi sen: ...
5. Görevleri (completedObjectives) array'i olarak JSON'a ekle. Kullanıcı görevleri başardıysa indeks numaralarını (0, 1, 2) bu diziye ekle.

BEKLENEN JSON FORMATI:
{
  "message": "Bonjour! Bienvenue au café. Qu'est-ce que vous voulez boire? 🐢\\n\\n💡 Harika başlangıç!",
  "completedObjectives": [0] // EĞER birinci görevi başardıysa 0 ekle, hiç yapmadıysa [] bırak.
}

ÖNEMLİ: Asla JSON dışına çıkma. Cevabın başı veya sonu '{' ve '}' ile bitmelidir.`;
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
