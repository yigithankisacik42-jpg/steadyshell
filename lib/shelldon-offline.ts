// ============================================================
// SCENARIO DEFINITIONS (Migrated from legacy AI module)
// ============================================================
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
        titleTarget: { fr: "Au café", es: "En la cafetería", en: "At the café", de: "Im Café" },
        description: "Bir kafede sipariş ver, menüyü anla",
        context: "You are a friendly barista/waiter at a cozy café. The user is a customer who just walked in. Start by greeting them and asking what they'd like to order. Offer menu items naturally.",
        suggestedPhrases: {
            fr: ["Un café, s'il vous plaît", "Qu'est-ce que vous recommandez?", "L'addition, s'il vous plaît"],
            es: ["Un café, por favor", "¿Qué me recomienda?", "La cuenta, por favor"],
            en: ["A coffee, please", "What do you recommend?", "The check, please"],
            de: ["Einen Kaffee, bitte", "Was können Sie empfehlen?", "Die Rechnung, bitte"],
        },
        objectives: {
            fr: ["Baristaya selam ver", "Bir içecek sipariş et", "Hesabı iste"],
            es: ["Saluda al barista", "Pide una bebida", "Pide la cuenta"],
            en: ["Greet the barista", "Order a drink", "Ask for the bill"],
            de: ["Grüße den Barista", "Bestelle ein Getränk", "Verlange die Rechnung"]
        }
    },
    {
        id: "market",
        icon: "🛒",
        titleTr: "Markette Alışveriş",
        titleTarget: { fr: "Au marché", es: "En el mercado", en: "At the market", de: "Auf dem Markt" },
        description: "Meyve, sebze, et alışverişi yap",
        context: "You are a friendly market vendor. The user is shopping for groceries. Offer fruits, vegetables, bread, cheese, and meat.",
        suggestedPhrases: {
            fr: ["Je voudrais des pommes", "Combien ça coûte?", "C'est tout, merci"],
            es: ["Quiero manzanas", "¿Cuánto cuesta?", "Eso es todo, gracias"],
            en: ["I'd like some apples", "How much is it?", "That's all, thanks"],
            de: ["Ich hätte gerne Äpfel", "Wie viel kostet das?", "Das ist alles, danke"],
        },
        objectives: {
            fr: ["Ne almak istediğini söyle", "Fiyatını sor", "Teşekkür edip ayrıl"],
            es: ["Di lo que quieres comprar", "Pregunta el precio", "Da las gracias y despídete"],
            en: ["Say what you want to buy", "Ask the price", "Say thanks and goodbye"],
            de: ["Sag, was du kaufen möchtest", "Frag nach dem Preis", "Bedanke dich und verabschiede dich"]
        }
    },
    {
        id: "airport",
        icon: "✈️",
        titleTr: "Havalimanında",
        titleTarget: { fr: "À l'aéroport", es: "En l'aeropuerto", en: "At the airport", de: "Am Flughafen" },
        description: "Check-in yap, kapını bul, bilgi sor",
        context: "You are a helpful airport staff member at the check-in counter. The user is a traveler checking in for a flight.",
        suggestedPhrases: {
            fr: ["Voici mon passeport", "Quelle est la porte d'embarquement?", "À quelle heure est le vol?"],
            es: ["Aquí está mi pasaporte", "¿Cuál es la puerta de embarque?", "¿A qué hora sale el vuelo?"],
            en: ["Here's my passport", "Which gate is it?", "What time is the flight?"],
            de: ["Hier ist mein Reisepass", "Wo ist das Gate?", "Um wie viel Uhr ist der Flug?"],
        },
        objectives: {
            fr: ["Pasaportunu ver", "Uçağın saatini sor", "Biniş kapısını öğren"],
            es: ["Entrega tu pasaporte", "Pregunta la hora del vuelo", "Averigua la puerta de embarque"],
            en: ["Hand over your passport", "Ask the flight time", "Find out the boarding gate"],
            de: ["Gib deinen Pass ab", "Frag nach der Flugzeit", "Finde das Gate heraus"]
        }
    },
    {
        id: "doctor",
        icon: "🏥",
        titleTr: "Doktorda",
        titleTarget: { fr: "Chez le médecin", es: "En el médico", en: "At the doctor's", de: "Beim Arzt" },
        description: "Semptomlarını anlat, tavsiye al",
        context: "You are a friendly doctor. The user is a patient who came for a check-up. Ask about their symptoms.",
        suggestedPhrases: {
            fr: ["J'ai mal à la tête", "Depuis hier", "Merci docteur"],
            es: ["Me duele la cabeza", "Desde ayer", "Gracias doctor"],
            en: ["I have a headache", "Since yesterday", "Thank you, doctor"],
            de: ["Ich habe Kopfschmerzen", "Seit gestern", "Danke, Herr Doktor"],
        },
        objectives: {
            fr: ["Semptomlarını açıkla", "Ne zamandır hasta olduğunu söyle", "Tavsiyesini kabul et"],
            es: ["Explica tus síntomas", "Di desde cuándo estás enfermo", "Acepta su consejo"],
            en: ["Explain your symptoms", "Say how long you've been sick", "Accept the advice"],
            de: ["Erkläre deine Symptome", "Sag, wie lange du schon krank bist", "Akzeptiere den Rat"]
        }
    },
    {
        id: "hotel",
        icon: "🏨",
        titleTr: "Otelde",
        titleTarget: { fr: "À l'hôtel", es: "En el hotel", en: "At the hotel", de: "Im Hotel" },
        description: "Oda rezervasyonu yap, check-in yap",
        context: "You are a hotel receptionist at a nice hotel. The user is checking in or making a reservation.",
        suggestedPhrases: {
            fr: ["J'ai une réservation", "Une chambre pour deux nuits", "Le petit-déjeuner ist inclus?"],
            es: ["Tengo una reservación", "Una habitación para dos noches", "¿El desayuno está incluido?"],
            en: ["I have a reservation", "A room for two nights", "Is breakfast included?"],
            de: ["Ich habe eine Reservierung", "Ein Zimmer für zwei Nächte", "Ist das Frühstück inklusive?"],
        },
        objectives: {
            fr: ["Rezervasyonun olduğunu söyle", "Kahvaltının dahil olup olmadığını sor", "Anahtarını al"],
            es: ["Di que tienes una reserva", "Pregunta si el desayuno está incluido", "Recibe tu llave"],
            en: ["Say you have a reservation", "Ask if breakfast is included", "Get your key"],
            de: ["Sag, dass du eine Reservierung hast", "Frag, ob Frühstück inklusive ist", "Hol deinen Schlüssel ab"]
        }
    },
    {
        id: "friend",
        icon: "👋",
        titleTr: "Arkadaşla Sohbet",
        titleTarget: { fr: "Bavardage entre amis", es: "Charla con amigos", en: "Chatting with a friend", de: "Plaudern mit einem Freund" },
        description: "Günlük sohbet, hobiler, plan yapma",
        context: "You are the user's friend. Have a casual, fun conversation. Ask about their day, hobbies, weekend plans.",
        suggestedPhrases: {
            fr: ["Salut, ça va?", "Qu'est-ce que tu fais ce weekend?", "J'aime beaucoup la musique"],
            es: ["¡Hola! ¿Qué tal?", "¿Qué haces este fin de semana?", "Me gusta mucho la música"],
            en: ["Hey, how's it going?", "What are you doing this weekend?", "I really like music"],
            de: ["Hallo, wie geht's?", "Was machst du am Wochenende?", "Ich mag Musik sehr"],
        },
        objectives: {
            fr: ["Nasıl olduğunu sor", "Hafta sonu planlarından bahset", "Ortak bir etkinlik öner"],
            es: ["Pregunta cómo está", "Habla de tus planes para el fin de semana", "Propón una actividad juntos"],
            en: ["Ask how they are", "Talk about your weekend plans", "Suggest a shared activity"],
            de: ["Frag, wie es ihm/ihr geht", "Erzähl von deinen Wochenendplänen", "Schlag eine gemeinsame Aktivität vor"]
        }
    },
    {
        id: "rendezvous",
        icon: "📅",
        titleTr: "Buluşma Ayarlama",
        titleTarget: { fr: "Un rendez-vous", es: "Una cita", en: "Making plans", de: "Pläne machen" },
        description: "Bir arkadaşla dışarı çıkmak için plan yap",
        context: "You are the user's friend. The user wants to meet up to do something fun. Ask them when and where they want to meet.",
        suggestedPhrases: {
            fr: ["On va au cinéma ce soir?", "À quelle heure?", "Rendez-vous à 20h devant le parc"],
            es: ["¿Vamos al cine esta noche?", "¿A qué hora?", "Nos vemos a las 8 frente al parque"],
            en: ["Shall we go to the cinema tonight?", "At what time?", "Let's meet at 8 in front of the park"],
            de: ["Gehen wir heute Abend ins Kino?", "Um wie viel Uhr?", "Treffen wir uns um acht Uhr vor dem Park"],
        },
        objectives: {
            fr: ["Bir mekan öner (sinema vs.)", "Saati belirle", "Buluşma noktasında anlaş"],
            es: ["Propón un lugar (cine, etc.)", "Fija la hora", "Acuerda un punto de encuentro"],
            en: ["Suggest a place (cinema, etc.)", "Set the time", "Agree on a meeting point"],
            de: ["Schlag einen Ort vor (Kino vb.)", "Leg die Uhrzeit fest", "Einigt euch auf einen Treffpunkt"]
        }
    },
    {
        id: "restaurant",
        icon: "🍽️",
        titleTr: "Akşam Yemeği",
        titleTarget: { fr: "Au restaurant", es: "En el restaurante", en: "At the restaurant", de: "Im Restaurant" },
        description: "Restoranda bir masa iste, yemek ve tatlı sipariş et",
        context: "You are a waiter at a traditional local restaurant. Welcome the user, take their food and dessert order.",
        suggestedPhrases: {
            fr: ["Une table pour deux, s'il vous plaît", "Je prendrai le poulet frites", "Quel est le dessert du jour?"],
            es: ["Una mesa para dos, por favor", "Tomaré el pollo con papas", "¿Cuál es el postre del día?"],
            en: ["A table for two, please", "I'll have the chicken and fries", "What's the dessert of the day?"],
            de: ["Ein Tisch für zwei Personen, bitte", "Ich nehme das Hähnchen mit Pommes", "Was ist das Dessert des Tages?"],
        },
        objectives: {
            fr: ["Kişi sayısına göre masa iste", "Ana yemek siparişi ver", "Günün tatlısını sor"],
            es: ["Pide mesa según el número de personas", "Pide el plato principal", "Pregunta por el postre del día"],
            en: ["Ask for a table", "Order the main course", "Ask for the dessert of the day"],
            de: ["Bestell einen Tisch", "Bestell das Hauptgericht", "Frag nach dem Dessert des Tages"]
        }
    },
    {
        id: "direction",
        icon: "🗺️",
        titleTr: "Yol Tarifi Sorma",
        titleTarget: { fr: "Demander son chemin", es: "Pedir indicaciones", en: "Asking for directions", de: "Nach dem Weg fragen" },
        description: "Sokakta kayboldun, bir yere nasıl gidileceğini öğren",
        context: "You are a local local resident walking on the street. Help the user find a specific landmark.",
        suggestedPhrases: {
            fr: ["Excusez-moi, où est la gare?", "Je suis perdu", "C'est loin d'ici?"],
            es: ["Disculpe, ¿dónde está la estación?", "Estoy perdido", "¿Está lejos de aquí?"],
            en: ["Excuse me, where is the station?", "I'm lost", "Is it far from here?"],
            de: ["Entschuldigung, wo ist der Bahnhof?", "Ich habe mich verlaufen", "Ist es weit von hier?"],
        },
        objectives: {
            fr: ["Kibarca dikkatini çek", "Gitmek istediğin yeri sor", "Uzak olup olmadığını sor"],
            es: ["Atrae su atención amablemente", "Pregunta por el lugar al que quieres ir", "Pregunta si está lejos"],
            en: ["Excuse yourself politely", "Ask how to get your destination", "Ask if it's far"],
            de: ["Entschuldige dich höflich", "Frag nach dem Weg zum Ziel", "Frag, ob es weit ist"]
        }
    }
];

// ============================================================
// TYPES
// ============================================================
type SupportedLang = "es" | "en" | "fr" | "de";
type Intent = "greeting" | "farewell" | "order" | "question" | "thanks" | "agree" | "describe" | "statement"
    | "price" | "help" | "complain" | "preference" | "negotiate" | "emotion"
    | "location" | "time_ask" | "food" | "weather" | "hobby" | "opinion";

// ============================================================
// PERSONA & CONVERSATION MEMORY
// ============================================================
export type ShelldonPersona = "default" | "strict" | "friendly" | "formal";

export interface ConversationMemory {
    userName: string | null;
    mentionedItems: string[];
    lastIntent: Intent;
    topicStack: string[];
    userPreferences: string[];
    userMood: "positive" | "neutral" | "negative";
    repeatedMistakes: string[];
    persona: ShelldonPersona;
    turnCount: number;
}

export function createEmptyMemory(): ConversationMemory {
    return {
        userName: null,
        mentionedItems: [],
        lastIntent: "statement",
        topicStack: [],
        userPreferences: [],
        userMood: "neutral",
        repeatedMistakes: [],
        persona: "default",
        turnCount: 0,
    };
}

export interface ShelldonOfflineReply {
    message: string;
    mood: "happy" | "thinking" | "neutral" | "surprised" | "sad";
    completedObjectives: number[];
    correction: { wrong: string; right: string; explanation: string } | null;
    updatedMemory: ConversationMemory;
}

export interface ShelldonOfflineFeedback {
    score: number;
    grammar: string;
    vocabulary: string;
    tip: string;
}

interface ReplyOptions {
    scenario: ShelldonScenario;
    language: string;
    level: string;
    userMessage: string;
    messages: { role: string; content: string }[];
    turnIndex: number;
    completedObjectives: number[];
    practiceMode: ShelldonPracticeMode;
    memory?: ConversationMemory;
}

// ============================================================
// LANGUAGE HELPERS
// ============================================================
const SUPPORTED: SupportedLang[] = ["es", "en", "fr", "de"];

function lang(language: string): SupportedLang {
    return SUPPORTED.includes(language as SupportedLang) ? (language as SupportedLang) : "en";
}

function normalizeText(input: string): string {
    return input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ß/g, "ss")
        .replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function choose<T>(items: T[], seed: number): T {
    return items[Math.abs(seed) % items.length];
}

function computeSeed(text: string, turn: number): number {
    let h = turn * 131;
    for (let i = 0; i < text.length; i++) h = (h * 33 + text.charCodeAt(i)) % 2147483647;
    return h;
}

// ============================================================
// INTENT DETECTION
// ============================================================
const KEYWORD_MAP: Record<SupportedLang, Record<Intent, string[]>> = {
    es: {
        greeting: ["hola", "buenos dias", "buenas tardes", "que tal", "buenas"],
        farewell: ["adios", "hasta luego", "nos vemos", "chao"],
        order: ["quiero", "quisiera", "me gustaria", "pedir", "tomar", "dame", "una mesa", "reserva"],
        question: ["donde", "cuando", "como", "cuanto", "que es", "cual", "por que", "puede", "hay", "tiene", "?"],
        thanks: ["gracias", "muchas gracias", "te agradezco"],
        agree: ["si", "vale", "claro", "por supuesto", "perfecto", "de acuerdo", "bien", "bueno"],
        describe: ["tengo", "estoy", "soy", "me duele", "siento", "necesito", "busco"],
        price: ["precio", "cuanto cuesta", "cuanto vale", "caro", "barato", "euros", "dolares"],
        help: ["no entiendo", "no se", "ayuda", "ayudame", "no comprendo", "dificil", "explicar"],
        complain: ["malo", "horrible", "terrible", "no me gusta", "demasiado", "peor"],
        preference: ["prefiero", "me gusta mas", "mejor", "quisiera mas bien", "en vez de"],
        negotiate: ["descuento", "mas barato", "rebaja", "oferta", "reducir"],
        emotion: ["feliz", "triste", "contento", "enojado", "cansado", "emocionado", "nervioso", "aburrido"],
        location: ["donde esta", "direccion", "cerca", "lejos", "aqui", "alli", "al lado"],
        time_ask: ["que hora", "a que hora", "manana", "hoy", "ahora", "tarde", "temprano"],
        food: ["pizza", "cafe", "cerveza", "pollo", "ensalada", "pan", "agua", "vino", "carne", "pescado", "postre", "tarta", "sopa", "arroz"],
        weather: ["clima", "lluvia", "sol", "frio", "calor", "nublado", "viento", "nieve"],
        hobby: ["deporte", "musica", "leer", "pelicula", "jugar", "bailar", "cocinar", "viajar", "futbol"],
        opinion: ["creo que", "pienso que", "en mi opinion", "me parece", "segun yo"],
        statement: [],
    },
    en: {
        greeting: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
        farewell: ["bye", "goodbye", "see you", "take care"],
        order: ["i want", "i would like", "i'd like", "can i have", "give me", "a table", "book", "reserve"],
        question: ["where", "when", "how", "what", "which", "why", "can", "do you", "is there", "?"],
        thanks: ["thanks", "thank you", "appreciate"],
        agree: ["yes", "sure", "of course", "perfect", "alright", "okay", "great", "fine"],
        describe: ["i have", "i am", "i feel", "it hurts", "i need", "i'm looking"],
        price: ["price", "how much", "cost", "expensive", "cheap", "euros", "dollars"],
        help: ["i don't understand", "i don't know", "help", "help me", "difficult", "confused", "explain"],
        complain: ["bad", "horrible", "terrible", "i don't like", "too much", "worst"],
        preference: ["i prefer", "i like more", "i'd rather", "better", "instead of"],
        negotiate: ["discount", "cheaper", "deal", "offer", "lower price"],
        emotion: ["happy", "sad", "angry", "tired", "excited", "bored", "nervous", "worried"],
        location: ["where is", "address", "near", "far", "here", "there", "direction", "next to"],
        time_ask: ["what time", "at what time", "tomorrow", "today", "now", "late", "early"],
        food: ["pizza", "coffee", "beer", "chicken", "salad", "bread", "water", "wine", "meat", "fish", "dessert", "cake", "soup", "rice"],
        weather: ["weather", "rain", "sun", "cold", "hot", "cloudy", "wind", "snow", "sunny"],
        hobby: ["sport", "music", "read", "movie", "play", "dance", "cook", "travel", "football", "soccer", "game"],
        opinion: ["i think", "i believe", "in my opinion", "it seems", "i feel that"],
        statement: [],
    },
    fr: {
        greeting: ["bonjour", "salut", "bonsoir", "coucou", "comment allez"],
        farewell: ["au revoir", "a bientot", "a plus", "salut", "bonne journee"],
        order: ["je voudrais", "je veux", "je prends", "donnez-moi", "une table", "reserver"],
        question: ["ou", "quand", "comment", "combien", "quel", "pourquoi", "est-ce que", "?"],
        thanks: ["merci", "merci beaucoup", "je vous remercie"],
        agree: ["oui", "bien sur", "d'accord", "parfait", "volontiers", "exactement"],
        describe: ["j'ai", "je suis", "j'ai mal", "je me sens", "je cherche", "il me faut"],
        price: ["prix", "combien coute", "cher", "pas cher", "euros", "gratuit"],
        help: ["je ne comprends pas", "je ne sais pas", "aide", "aidez-moi", "difficile", "expliquer"],
        complain: ["mauvais", "horrible", "terrible", "je n'aime pas", "trop", "pire"],
        preference: ["je prefere", "j'aime mieux", "plutot", "je voudrais plutot", "au lieu de"],
        negotiate: ["reduction", "moins cher", "remise", "offre", "promotion"],
        emotion: ["heureux", "triste", "content", "fache", "fatigue", "excite", "nerveux", "ennuye"],
        location: ["ou est", "adresse", "pres", "loin", "ici", "la-bas", "a cote"],
        time_ask: ["quelle heure", "a quelle heure", "demain", "aujourd'hui", "maintenant", "tard", "tot"],
        food: ["pizza", "cafe", "biere", "poulet", "salade", "pain", "eau", "vin", "viande", "poisson", "dessert", "gateau", "soupe", "riz"],
        weather: ["meteo", "pluie", "soleil", "froid", "chaud", "nuageux", "vent", "neige"],
        hobby: ["sport", "musique", "lire", "film", "jouer", "danser", "cuisiner", "voyager", "football"],
        opinion: ["je crois que", "je pense que", "a mon avis", "il me semble", "selon moi"],
        statement: [],
    },
    de: {
        greeting: ["hallo", "guten tag", "guten morgen", "guten abend", "hi", "servus"],
        farewell: ["tschuss", "auf wiedersehen", "bis bald", "mach's gut"],
        order: ["ich mochte", "ich hatte gerne", "ich nehme", "geben sie mir", "einen tisch", "reservieren"],
        question: ["wo", "wann", "wie", "was", "welch", "warum", "konnen", "gibt es", "haben sie", "?"],
        thanks: ["danke", "vielen dank", "dankeschon"],
        agree: ["ja", "klar", "naturlich", "perfekt", "einverstanden", "gut", "genau"],
        describe: ["ich habe", "ich bin", "mir tut", "ich fuhle", "ich brauche", "ich suche"],
        price: ["preis", "wie viel kostet", "teuer", "billig", "gunstig", "euros", "kostenlos"],
        help: ["ich verstehe nicht", "ich weiss nicht", "hilfe", "hilf mir", "schwierig", "erklaren"],
        complain: ["schlecht", "schrecklich", "furchtbar", "ich mag nicht", "zu viel", "schlimm"],
        preference: ["ich bevorzuge", "ich mag lieber", "lieber", "ich hatte lieber", "anstatt"],
        negotiate: ["rabatt", "gunstiger", "angebot", "billiger", "reduziert"],
        emotion: ["glucklich", "traurig", "wutend", "mude", "aufgeregt", "gelangweilt", "nervos", "besorgt"],
        location: ["wo ist", "adresse", "nah", "weit", "hier", "dort", "richtung", "neben"],
        time_ask: ["wie spat", "um wie viel uhr", "morgen", "heute", "jetzt", "spat", "fruh"],
        food: ["pizza", "kaffee", "bier", "hahnchen", "salat", "brot", "wasser", "wein", "fleisch", "fisch", "nachtisch", "kuchen", "suppe", "reis"],
        weather: ["wetter", "regen", "sonne", "kalt", "heiss", "wolkig", "wind", "schnee"],
        hobby: ["sport", "musik", "lesen", "film", "spielen", "tanzen", "kochen", "reisen", "fussball"],
        opinion: ["ich glaube", "ich denke", "meiner meinung nach", "es scheint mir", "ich finde"],
        statement: [],
    },
};

function detectIntent(message: string, language: SupportedLang): Intent {
    const normalized = normalizeText(message);
    const map = KEYWORD_MAP[language];
    const check = (intent: Intent) => map[intent].some(kw => normalized.includes(normalizeText(kw)));

    // Specific intents first (more precise matches)
    if (check("greeting")) return "greeting";
    if (check("farewell")) return "farewell";
    if (check("thanks")) return "thanks";
    if (check("help")) return "help";
    if (check("negotiate")) return "negotiate";
    if (check("price")) return "price";
    if (check("complain")) return "complain";
    if (check("preference")) return "preference";
    if (check("emotion")) return "emotion";
    if (check("opinion")) return "opinion";
    if (check("order")) return "order";
    if (check("food")) return "food";
    if (check("hobby")) return "hobby";
    if (check("weather")) return "weather";
    if (check("location")) return "location";
    if (check("time_ask")) return "time_ask";
    if (check("describe")) return "describe";
    if (check("question")) return "question";
    if (check("agree")) return "agree";
    return "statement";
}

// ============================================================
// SCENARIO-BASED RESPONSE POOLS
// ============================================================
const SCENARIO_RESPONSES: Record<string, Record<SupportedLang, Partial<Record<Intent, string[]>>>> = {
    cafe: {
        es: {
            greeting: [
                "¡Hola! Bienvenido a nuestro café. ¿Qué le puedo ofrecer hoy? ☕", 
                "¡Buenas! ¿Quiere sentarse aquí dentro o prefiere la terraza? 🐢",
                "¡Hola! Qué alegría verle. ¿Le traigo la carta de cafés?",
                "¡Muy buenas! ¿Busca una mesa para desayunar o solo un café rápido?",
                "¡Hola! Tome asiento donde guste. Enseguida le atiendo.",
                "¡Buenas tardes! ¿En qué puedo ayudarle a empezar el día?"
            ],
            order: [
                "¡Excelente elección! Se lo preparo enseguida con mucho gusto. ¿Quiere algo más?", 
                "Perfecto, un pedido de lo más clásico. ¿Le gustaría añadir un poco de azúcar?",
                "Muy bien, anotado. En un par de minutos lo tendrá en su mesa. 🍰",
                "¡Marchando! ¿Desea acompañar su pedido con algún bollo o pastel?",
                "¡Genial! Me pongo a ello ahora mismo. ¿Le traigo también un vaso de agua?",
                "Buena decisión, es nuestra especialidad. ¿Desea algo más de nuestra carta?"
            ],
            question: [
                "Claro, tenemos café solo, con leche, capuchino y una gran variedad de tés. ¿Qué prefiere?", 
                "El café con leche y el cruasán son nuestros productos estrella. ¿Los quiere probar?",
                "Hoy tenemos una oferta especial de café y tarta por solo 5 euros. ¿Le interesa?",
                "Sí, disponemos de leche de avena y soja si lo prefiere. ¿Cómo lo quiere?",
                "Nuestra tarta de chocolate es casera y está riquísima. ¿Le apetece un trozo?",
                "Claro, la carta está en la mesa, pero si tiene alguna duda, dígame."
            ],
            thanks: [
                "¡De nada! Ha sido un placer atenderle. ¡Disfrute mucho! 🐢", 
                "¡Gracias a usted! Vuelva cuando quiera por aquí. 😊",
                "¡No hay de qué! Espero que le guste mucho el café.",
                "¡A usted las gracias! Que tenga un día excelente.",
                "¡Placer mutuo! Aquí estaremos para su próximo descanso."
            ],
            farewell: [
                "¡Hasta luego! Que tenga un día maravilloso. 🐢", 
                "¡Adiós! Fue un placer servirle. ¡Vuelva pronto por favor!",
                "¡Hasta la próxima! Espero que haya disfrutado del café.",
                "¡Chao! Nos vemos pronto por el barrio.",
                "¡Que le vaya muy bien! Ha sido un gusto verle."
            ],
            agree: [
                "¡Genial! Se lo preparo ahora mismo sin falta.", 
                "¡Perfecto! Aquí tiene su servicio. ¿Necesita alguna cosa más?",
                "¡Estupendo! Enseguida estoy con usted.",
                "¡Muy bien! Me parece una idea fantástica.",
                "¡Claro que sí! Marchando ahora mismo."
            ],
            describe: [
                "Entiendo perfectamente. ¿Quiere que le recomiende algo especial hoy?", 
                "Muy bien, me hago una idea de lo que busca. Tenemos opciones para todos.",
                "Interesante... ¿Busca algo refrescante o prefiere algo caliente?",
                "Comprendo. Déjeme ver qué puedo ofrecerle que encaje con eso.",
                "Vale, anotado. ¿Qué más me puede contar sobre su preferencia?"
            ],
            statement: [
                "Interesante comentario. ¿Le gustaría pedir algo de nuestra carta mientras tanto? ☕", 
                "Claro, entiendo. ¿En qué más puedo ayudarle en este momento? 🐢",
                "Muy bien dicho. ¿Desea tomar algo más o prefiere la cuenta?",
                "Comprendido. Me gusta charlar con mis clientes. ¿Busca algo más?",
                "¡Vaya! No lo había pensado así. ¿Qué le pongo para acompañar esa idea?"
            ],
        },
        en: {
            greeting: [
                "Hello! Welcome to our café. What can I get you today? ☕", 
                "Hi there! Would you like to sit inside or on the terrace? 🐢",
                "Good morning! It's great to see you. Should I bring the menu?",
                "Welcome! Are you looking for a table for two or just a quick coffee?",
                "Hi! Take a seat anywhere you like. I'll be right with you.",
                "Good afternoon! How can I help you start your day?"
            ],
            order: [
                "Great choice! I'll prepare that right away. Anything else?", 
                "Perfect, coming right up. Would you like a pastry to go with it? 🍰",
                "Excellent! One hot coffee coming right up. Do you need sugar or milk?",
                "Sure thing! I'll have that ready for you in just a couple of minutes.",
                "Great! I'm on it. Would you like a glass of water as well?",
                "Good decision, that's our house specialty. Anything else for you?"
            ],
            question: [
                "Sure, we have espresso, latte, cappuccino, and a wide variety of teas. What do you prefer?", 
                "Our latte and croissant combo is a bestseller. Would you like to try it?",
                "Today we have a special offer: any coffee and a slice of cake for only 5 dollars. Interested?",
                "Yes, we have oat milk and soy milk if you prefer. How would you like your coffee?",
                "Our chocolate cake is homemade and absolutely delicious. Fancy a slice?",
                "Of course! The menu is right on the table, but if you have any questions, just let me know."
            ],
            thanks: [
                "You're welcome! It was a pleasure serving you. Enjoy! 🐢", 
                "Thank you for coming! Please come back anytime. 😊",
                "No problem at all! I hope you really enjoy your coffee.",
                "You're very welcome! Have a wonderful day ahead.",
                "The pleasure was all mine! See you next time for your coffee break."
            ],
            farewell: [
                "Goodbye! Have a wonderful day. 🐢", 
                "See you next time! It was a pleasure serving you. Come back soon!",
                "Bye for now! I hope you enjoyed your time at the café.",
                "Take care! See you around the neighborhood.",
                "Have a great rest of your day! It was nice seeing you."
            ],
            agree: [
                "Great! I'll get that ready for you right now without fail.", 
                "Perfect! Here is your service. Do you need anything else?",
                "Awesome! I'll be right with you in a second.",
                "Very well! That sounds like a fantastic idea.",
                "Of course! Coming right up."
            ],
            describe: [
                "I see. Would you like me to recommend something special from our menu today?", 
                "Alright, I get what you're looking for. We have options for every taste.",
                "Interesting... Are you looking for something refreshing or something warm?",
                "I understand. Let me see what I can offer you that fits that.",
                "Noted. What else can you tell me about your preferences?"
            ],
            statement: [
                "Interesting comment. Would you like to order something from our menu in the meantime? ☕", 
                "Alright, I understand. How else can I help you at the moment? 🐢",
                "Well said. Would you like anything else or should I bring the bill?",
                "Understood. I love chatting with my customers. Looking for anything else?",
                "Wow! I hadn't thought of it that way. What can I get you to go with that idea?"
            ],
        },
        fr: {
            greeting: [
                "Bonjour ! Bienvenue dans notre café. Qu'est-ce que je vous sers ? ☕", 
                "Salut ! Vous voulez vous asseoir à l'intérieur ou en terrasse ? 🐢",
                "Bonjour ! Heureux de vous voir. Je vous apporte la carte ?",
                "Bienvenue ! Vous désirez une table pour deux ou juste un café au comptoir ?"
            ],
            order: [
                "Excellent choix ! Je vous prépare ça tout de suite. Autre chose ?", 
                "Parfait, c'est parti. Vous voulez un dessert aussi ? 🍰",
                "Très bien, je lance la préparation. Voulez-vous un peu de sucre avec ?",
                "C'est noté ! Un café bien chaud arrive dans un instant."
            ],
            question: [
                "Bien sûr, nous avons du café, du thé, des jus et des pâtisseries. Que désirez-vous ?", 
                "Notre café au lait est le plus populaire. Vous voulez l'essayer ?",
                "Aujourd'hui, nous avons une offre : café et croissant pour 4 euros. Ça vous tente ?",
                "Oui, nous avons du lait de soja ou d'amande si vous préférez."
            ],
            thanks: [
                "De rien ! C'était un plaisir. À bientôt ! 🐢", 
                "Merci à vous ! Bonne journée. 😊",
                "Je vous en prie ! Profitez bien de votre café.",
                "Tout le plaisir est pour moi ! Au plaisir de vous revoir."
            ],
            farewell: [
                "Au revoir ! Bonne journée. 🐢", 
                "À bientôt ! C'était un plaisir.",
                "Bonne continuation et à demain pour votre café !",
                "Salut ! Passez une excellente fin de journée."
            ],
            agree: [
                "Super ! Je vous prépare ça maintenant.", 
                "Parfait ! Voilà. Vous avez besoin d'autre chose ?",
                "Entendu ! C'est une excellente idée.",
                "D'accord, je m'en occupe immédiatement."
            ],
            describe: [
                "Je comprends. Voulez-vous que je vous recommande quelque chose ?", 
                "D'accord. Nous avons des options pour tous les goûts.",
                "Je vois... Vous cherchez quelque chose de plutôt sucré ou salé ?",
                "C'est noté. Laissez-moi voir ce que je peux vous proposer."
            ],
            statement: [
                "Intéressant. Voulez-vous commander quelque chose ? ☕", 
                "D'accord. Comment puis-je vous aider ? 🐢",
                "C'est un bon point. Voulez-vous prendre une petite douceur avec ça ?",
                "D'accord, je comprends. Autre chose pour la commande ?"
            ],
        },
        de: {
            greeting: [
                "Hallo! Willkommen in unserem Café. Was darf es sein? ☕", 
                "Hi! Möchten Sie drinnen oder auf der Terrasse sitzen? 🐢",
                "Guten Tag! Freut mich, Sie zu sehen. Soll ich Ihnen die Karte bringen?",
                "Willkommen! Suchen Sie einen Tisch für zwei oder nur einen schnellen Kaffee?"
            ],
            order: [
                "Tolle Wahl! Ich bereite das sofort vor. Noch etwas?", 
                "Perfekt, kommt sofort. Möchten Sie auch ein Gebäck? 🍰",
                "Alles klar, ich mache das fertig. Möchten Sie Zucker oder Milch dazu?",
                "Notiert! Ein heißer Kaffee ist in einem Augenblick bei Ihnen."
            ],
            question: [
                "Natürlich, wir haben Kaffee, Tee, Säfte und Gebäck. Was möchten Sie?", 
                "Unser Milchkaffee ist ein Bestseller. Möchten Sie ihn probieren?",
                "Heute haben wir ein Angebot: Kaffee und Croissant für 4 Euro. Interesse?",
                "Ja, wir haben auch Hafermilch oder laktosefreie Milch, wenn Sie möchten."
            ],
            thanks: [
                "Gern geschehen! Es war mir ein Vergnügen. Auf Wiedersehen! 🐢", 
                "Danke Ihnen! Einen schönen Tag noch. 😊",
                "Nichts zu danken! Genießen Sie Ihren Kaffee.",
                "Sehr gerne! Ich freue mich auf Ihren nächsten Besuch."
            ],
            farewell: [
                "Auf Wiedersehen! Einen schönen Tag. 🐢", 
                "Bis zum nächsten Mal! Es war ein Vergnügen.",
                "Tschüss! Wir sehen uns hoffentlich morgen wieder.",
                "Einen wunderbaren Tag noch! Bis bald."
            ],
            agree: [
                "Super! Ich bereite das jetzt für Sie vor.", 
                "Perfekt! Bitte sehr. Brauchen Sie noch etwas?",
                "Abgemacht! Das ist eine sehr gute Wahl.",
                "In Ordnung, ich kümmere mich sofort darum."
            ],
            describe: [
                "Verstehe. Soll ich Ihnen etwas von unserer Karte empfehlen?", 
                "In Ordnung. Wir haben für jeden Geschmack etwas.",
                "Ich sehe... Suchen Sie etwas Süßes oder eher etwas Herzhaftes?",
                "Verstanden. Lassen Sie mich sehen, was ich Ihnen vorschlagen kann."
            ],
            statement: [
                "Interessant. Möchten Sie etwas von unserer Karte bestellen? ☕", 
                "Alles klar. Wie kann ich Ihnen helfen? 🐢",
                "Das ist ein guter Punkt. Möchten Sie vielleicht eine Kleinigkeit dazu essen?",
                "Ich verstehe. Haben Sie sonst noch einen Wunsch für Ihre Bestellung?"
            ],
        },
    },
    supermarket: {
        es: {
            greeting: ["¡Bienvenido al supermercado! ¿Tiene la lista preparada? 🛒", "¡Hola! ¿Necesita un carrito o busca algo en concreto?"],
            order: ["¡Claro! Los cereales están en el pasillo cuatro.", "Perfecto, aquí tiene su ticket. ¿Suma puntos en su tarjeta?"],
            question: ["¿Prefiere la marca de la casa o busca una marca específica?", "¿Sabe si hay ofertas en la carnicería hoy?"],
            thanks: ["¡De nada! ¡Disfrute de su compra! 🐢", "¡Gracias a usted! 😊"],
            farewell: ["¡Adiós! ¡Hasta la próxima compra! 🐢"],
            agree: ["¡Claro! Es una gran oferta.", "¡Perfecto!"],
            describe: ["Entiendo, busca algo de calidad.", "Muy bien."],
            statement: ["Muy bien. ¿Algo más que necesite del súper? 🛒"],
        },
        en: {
            greeting: [
                "Welcome to the supermarket! Do you have your shopping list ready? 🛒", 
                "Hi there! Do you need a cart or are you looking for something specific? 🐢",
                "Hello! Welcome to our store. How can I help you find what you need today?",
                "Good morning! Are you doing your weekly shopping or just picking up a few things?",
                "Hi! Need help finding any particular aisle or product?",
                "Welcome! We have some great offers today. Would you like to hear about them?"
            ],
            order: [
                "Sure thing! The cereals are right over in aisle four.", 
                "Perfect, here is your receipt. Are you collecting points on your loyalty card? 🧾",
                "Got it! I've added those items to your basket. Anything else for today?",
                "Certainly! You can find the fresh produce right at the back of the store.",
                "Great! I'll process your payment now. Would you like a bag?",
                "Noted! I'll help you pack those items carefully. Anything else?"
            ],
            question: [
                "Do you prefer the store brand or are you looking for a specific name brand?", 
                "Do you know if there are any special deals at the deli counter today?",
                "Are you looking for organic options or just the regular products?",
                "Would you like to know about our current discounts on dairy products?",
                "Do you have a coupon you'd like to use for your purchase today?",
                "Of course! The restroom is located near the exit, past the checkout counters."
            ],
            thanks: [
                "You're welcome! Enjoy the rest of your shopping trip! 🐢", 
                "Thank you for shopping with us! Have a great day. 😊",
                "No problem at all! I'm glad I could help you find everything.",
                "You're very welcome! We hope to see you again soon.",
                "The pleasure was all mine! Let me know if you need anything else."
            ],
            farewell: [
                "Goodbye! Have a safe trip home with your groceries! 🛒", 
                "See you next time! Thanks for choosing our supermarket. 🐢",
                "Bye for now! We look forward to your next visit.",
                "Take care! Hope you found everything you were looking for.",
                "Have a wonderful day! Goodbye!"
            ],
            agree: [
                "Of course! That's actually one of our best deals today.", 
                "Perfect! I'll make sure those are properly scanned for you.",
                "Awesome! That's a very popular choice among our customers.",
                "Very well! I'll add that to your total right now.",
                "Of course! It's a high-quality product for a great price."
            ],
            describe: [
                "I understand, you're looking for high-quality organic items.", 
                "Alright, I see what you mean. We have a lot of variety in that section.",
                "I understand. You want something quick and easy for dinner tonight?",
                "Noted. We'll make sure you find exactly what fits your needs.",
                "I see. Thank you for the information, it helps me guide you better."
            ],
            statement: [
                "Interesting choice. Is there anything else you need from the supermarket today? 🛒", 
                "Understood. We're here to make your shopping experience as smooth as possible. 🐢",
                "Well noted. Would you like me to check if we have more in stock?",
                "I see. Customer satisfaction is our top priority here.",
                "Wow! That's a lot of shopping. Do you need any help out to your car?"
            ],
        },
        fr: {
            greeting: ["Bienvenue au supermarché ! Avez-vous votre liste de courses ? 🛒", "Bonjour ! Besoin d'un chariot ou vous cherchez quelque chose de précis ?"],
            order: ["Bien sûr ! Les céréales sont dans l'allée numéro quatre.", "Parfait, voici votre ticket. Avez-vous une carte de fidélité ?"],
            question: ["Préférez-vous la marque du magasin ou cherchez-vous une marque spécifique ?", "Savez-vous s'il y a des promotions sur les fruits aujourd'hui ?"],
            thanks: ["Je vous en prie ! Bonne fin de courses ! 🐢", "Merci à vous ! 😊"],
            farewell: ["Au revoir ! À la prochaine pour vos courses ! 🐢"],
            agree: ["Bien sûr ! C'est une excellente offre.", "Parfait !"],
            describe: ["Je comprends, vous cherchez de la qualité.", "Très bien."],
            statement: ["Très bien. Autre chose dont vous avez besoin au supermarché ? 🛒"],
        },
        de: {
            greeting: ["Willkommen im Supermarkt! Haben Sie Ihre Einkaufsliste dabei? 🛒", "Hallo! Brauchen Sie einen Einkaufswagen oder suchen Sie etwas Bestimmtes?"],
            order: ["Natürlich! Das Müsli finden Sie in Gang Nummer vier.", "Perfekt, hier ist Ihr Kassenbon. Haben Sie eine Kundenkarte?"],
            question: ["Bevorzugen Sie unsere Eigenmarke oder suchen Sie eine bestimmte Marke?", "Wissen Sie, ob es heute Angebote bei den Früchten gibt?"],
            thanks: ["Gern geschehen! Einen schönen Einkauf noch! 🐢", "Danke Ihnen! 😊"],
            farewell: ["Auf Wiedersehen! Bis zum nächsten Mal! 🐢"],
            agree: ["Natürlich! Das ist ein sehr gutes Angebot.", "Perfekt!"],
            describe: ["Ich verstehe, Sie suchen nach hoher Qualität.", "Sehr gut."],
            statement: ["Alles klar. Brauchen Sie sonst noch etwas aus dem Supermarkt? 🛒"],
        },
    },
    bakery: {
        es: {
            greeting: ["¡Mmm! ¡Qué bien huele! ¿Qué le pongo recién hecho? 🥐", "¡Hola! ¿Quiere pan caliente o prefiere algo dulce?"],
            order: ["¡Marchando una barra de pan! ¿Algo más de bollería?", "Perfecto, se lo pongo en una bolsa de papel. 😊"],
            question: ["¿Prefiere el pan integral o la barra tradicional?", "¿Quiere probar nuestros cruasanes artesanos?"],
            thanks: ["¡Gracias a usted! ¡Buen provecho! 🐢", "¡De nada! 😊"],
            farewell: ["¡Adiós! Vuelva mañana para el pan tierno. 🐢"],
            agree: ["¡Claro! Enseguida se lo envuelvo.", "¡Perfecto!"],
            describe: ["Entiendo, busca algo dulce.", "Muy bien."],
            statement: ["Muy bien. ¿Alguna otra cosa que le apetezca? 🥐"],
        },
        en: {
            greeting: [
                "Mmm! It smells wonderful in here! What can I get you fresh from the oven? 🥐", 
                "Hi there! Are you looking for some warm bread or would you prefer something sweet? 🐢",
                "Hello! Welcome to our bakery. Everything was baked just this morning!",
                "Good morning! Would you like to try our special pastry of the day?",
                "Hi! Step right in. Can I help you find your favorite type of bread?",
                "Welcome! What can I serve you to make your morning a little bit sweeter?"
            ],
            order: [
                "One loaf of bread coming right up! Anything else from the pastry case?", 
                "Perfect, I'll put that in a paper bag for you. Anything else? 😊",
                "Excellent choice! Our croissants are still warm. How many would you like?",
                "Sure thing! I'll get those rolls ready for you immediately. 🥨",
                "Great! I've noted down your order. Would you like a coffee to go with that?",
                "Noted! I'll wrap those cakes carefully so they stay fresh for your journey."
            ],
            question: [
                "Do you prefer whole wheat bread or a traditional white baguette?", 
                "Would you like to try one of our handmade artisan croissants today?",
                "Are you looking for something gluten-free or are the regular options okay?",
                "Do you know what time we usually have the fresh batches of muffins ready?",
                "Would you like to see our selection of traditional fruit tarts?",
                "Of course! Do you have any dietary restrictions we should be aware of?"
            ],
            thanks: [
                "Thank you! Enjoy your fresh baked goods! 🐢", 
                "You're welcome! Have a delicious day. 😊",
                "No problem at all! I hope you love the taste of our bread.",
                "You're very welcome! We look forward to seeing you tomorrow morning.",
                "The pleasure was mine! There's nothing like fresh bread, is there?"
            ],
            farewell: [
                "Goodbye! Come back tomorrow for some more fresh bread. 🐢", 
                "Bye for now! Enjoy your treats and have a wonderful day!",
                "See you later! It was a pleasure serving you this morning.",
                "Take care! We'll have your favorite rolls ready for you next time.",
                "Have a great day! Goodbye!"
            ],
            agree: [
                "Of course! I'll wrap that up for you right away.", 
                "Perfect! That's a very popular choice today.",
                "Awesome! I'll make sure you get the biggest one we have left.",
                "Very well! I'll add that to your order now.",
                "Of course! It's our signature recipe and people love it."
            ],
            describe: [
                "I understand, you're looking for something sweet for a special occasion.", 
                "Alright, I see. You want something healthy but still delicious?",
                "I understand perfectly. Our sourdough is exactly what you need then.",
                "Noted. We take great pride in our traditional baking methods.",
                "I see. Thank you for sharing your preferences with me."
            ],
            statement: [
                "Interesting choice. Is there anything else you'd like from the bakery today? 🥐", 
                "Understood. There's nothing quite like the smell of fresh bread, right? 🐢",
                "Well noted. Would you like me to reserve a loaf for you for tomorrow?",
                "I see. We love hearing what our customers think of our recipes.",
                "Wow! You're clearly a fan of good pastries. Anything else for now?"
            ],
        },
        fr: {
            greeting: ["Mmm ! Ça sent bon ici ! Que puis-je vous servir de frais ? 🥐", "Bonjour ! Vous voulez du pain chaud ou plutôt une viennoiserie ?"],
            order: ["Une baguette, une ! Voulez-vous aussi un croissant ?", "Parfait, je vous mets ça dans un sac en papier. 😊"],
            question: ["Préférez-vous le pain complet ou la baguette traditionnelle ?", "Voulez-vous goûter nos pains au chocolat faits maison ?"],
            thanks: ["Merci à vous ! Bon appétit ! 🐢", "Je vous en prie ! 😊"],
            farewell: ["Au revoir ! Revenez demain pour le pain frais. 🐢"],
            agree: ["Bien sûr ! Je vous emballe ça tout de suite.", "Parfait !"],
            describe: ["Je comprends, vous avez envie d'un petit plaisir sucré.", "Très bien."],
            statement: ["Très bien. Autre chose qui vous tente à la boulangerie ? 🥐"],
        },
        de: {
            greeting: ["Mmm! Hier riecht es aber gut! Was darf ich Ihnen frisch einpacken? 🥐", "Guten Tag! Möchten Sie warmes Brot oder lieber etwas Süßes?"],
            order: ["Ein Baguette, bitteschön! Möchten Sie auch ein Croissant dazu?", "Perfekt, ich packe Ihnen das in eine Papiertüte. 😊"],
            question: ["Bevorzugen Sie Vollkornbrot oder das traditionelle Weißbrot?", "Möchten Sie unsere hausgemachten Schokobrötchen probieren?"],
            thanks: ["Danke Ihnen! Guten Appetit! 🐢", "Gern geschehen! 😊"],
            farewell: ["Auf Wiedersehen! Kommen Sie morgen wieder für frisches Brot. 🐢"],
            agree: ["Natürlich! Ich packe es Ihnen sofort ein.", "Perfekt!"],
            describe: ["Ich verstehe, Sie haben Lust auf eine kleine Belohnung.", "Sehr gut."],
            statement: ["Alles klar. Möchten Sie noch etwas anderes aus der Bäckerei? 🥐"],
        },
    },
    taxi: {
        es: {
            greeting: ["¡Hola! ¿A dónde le llevo hoy? El tráfico está bien. 🚕", "¡Buenas! Suba, por favor. ¿Qué dirección le pongo?"],
            order: ["¡Claro! Enseguida estamos allí. Son unos 15 minutos.", "Perfecto, aquí tiene su cambio. ¿Desea recibo?"],
            question: ["¿Le importa si pongo un poco la radio?", "¿Quiere que pongamos el aire acondicionado?"],
            thanks: ["¡Gracias a usted! ¡Tenga un buen viaje! 🐢", "¡De nada! 😊"],
            farewell: ["¡Adiós! Que tenga un buen día en su destino. 🐢"],
            agree: ["¡Claro! Sin problemas.", "¡Perfecto!"],
            describe: ["Entiendo, tiene un poco de prisa.", "Muy bien."],
            statement: ["Interesante. ¿Ha estado antes en esta ciudad? 🚕"],
        },
        en: {
            greeting: [
                "Hello! Where are we headed today? I know the city like the back of my hand. 🚕", 
                "Hi there! Step in. It's a busy day out there, isn't it? 🐢",
                "Good morning! Welcome to my taxi. What's the destination for today?",
                "Hello! Do you have a specific route in mind or should I take the fastest way?",
                "Hi! Need a lift? I can get you anywhere you need to go in no time.",
                "Welcome! I hope you're having a good day so far. Where to?"
            ],
            order: [
                "Of course! The airport? That'll take about twenty minutes via the highway.", 
                "Perfect, fasten your seatbelt and we'll be there before you know it. 🐢",
                "Got it! I'll take the shortcut to avoid the traffic jam in the city center.",
                "Certainly! I'll turn on the meter and we'll get moving right away.",
                "Great! I know exactly where that is. It's a nice area of the city.",
                "Noted! I'll put your luggage in the trunk. Ready to go?"
            ],
            question: [
                "Would you like me to take the highway or do you prefer the scenic route?", 
                "Do you have a preferred radio station or do you like the quiet?",
                "Are you in a hurry or can we take the standard route today?",
                "Do you know if the main entrance is open or should I drop you at the side?",
                "Would you like me to turn up the air conditioning for you?",
                "Of course! Would you like to know the estimated fare for this journey?"
            ],
            thanks: [
                "You're welcome! Enjoy the ride and the view! 🐢", 
                "Thank you! It's a pleasure to have you as a passenger. 😊",
                "No problem at all! I'm happy to help you get to your destination.",
                "You're very welcome! We'll be there in just a few more minutes.",
                "The pleasure was mine! I hope you have a great stay in our city."
            ],
            farewell: [
                "Goodbye! Have a safe trip and a great stay! 🐢", 
                "See you later! Don't forget any of your belongings in the back seat!",
                "Bye for now! It was a pleasure driving you today. Take care!",
                "Have a wonderful day! I hope you arrive exactly on time.",
                "Good luck with your plans today! Goodbye!"
            ],
            agree: [
                "Of course! That's the best way to get there at this time of day.", 
                "Perfect! I'll follow your directions exactly. 🚕",
                "Awesome! I'll make sure we get there as quickly as possible.",
                "Very well! I'll take the bridge instead of the tunnel then.",
                "Of course! I'll pull over right here as requested."
            ],
            describe: [
                "I understand, you're a bit late for your flight. I'll do my best to hurry.", 
                "Alright, I see. You're visiting the city for the first time? Welcome!",
                "I understand. You want a quiet ride so you can make some phone calls?",
                "Noted. I'll make sure to avoid the bumpy roads for a smoother ride.",
                "I see. Thank you for letting me know your preferences for the journey."
            ],
            statement: [
                "Interesting. Did you know this building was built over a hundred years ago?", 
                "Understood. Riding with Shelldon is the most reliable way to travel. 🐢",
                "Well noted. The traffic is unusually light today, isn't it?",
                "I see. I've been driving this route for years and I never get tired of it.",
                "Wow! That's quite a story. Anything else you'd like to share?"
            ],
        },
        fr: {
            greeting: ["Bonjour ! Où vous emmène-t-on aujourd'hui ? La circulation est fluide. 🚕", "Salut ! Montez, je vous en prie. Quelle est votre destination ?"],
            order: ["Bien sûr ! On y sera dans environ quinze minutes.", "Parfait, voici votre monnaie. Voulez-vous un reçu ?"],
            question: ["Est-ce que ça vous dérange si je mets un peu de musique ?", "Voulez-vous que je mette la climatisation ?"],
            thanks: ["Merci à vous ! Bon voyage ! 🐢", "Je vous en prie ! 😊"],
            farewell: ["Au revoir ! Passez une excellente journée à destination. 🐢"],
            agree: ["Bien sûr ! Pas de problème.", "Parfait !"],
            describe: ["Je comprends, vous êtes un peu pressé.", "Très bien."],
            statement: ["C'est intéressant. Êtes-vous déjà venu dans cette ville ? 🚕"],
        },
        de: {
            greeting: ["Guten Tag! Wohin darf ich Sie heute bringen? Der Verkehr ist ruhig. 🚕", "Hallo! Steigen Sie bitte ein. Wohin soll die Fahrt gehen?"],
            order: ["Natürlich! Wir sind in etwa fünfzehn Minuten da.", "Perfekt, hier ist Ihr Wechselgeld. Möchten Sie eine Quittung?"],
            question: ["Stört es Sie, wenn ich ein bisschen Musik anmache?", "Soll ich die Klimaanlage einschalten?"],
            thanks: ["Danke Ihnen! Gute Fahrt! 🐢", "Gern geschehen! 😊"],
            farewell: ["Auf Wiedersehen! Einen angenehmen Tag noch am Zielort. 🐢"],
            agree: ["Natürlich! Gar kein Problem.", "Perfekt!"],
            describe: ["Ich verstehe, Sie haben es ein wenig eilig.", "Sehr gut."],
            statement: ["Das ist interessant. Waren Sie schon einmal in dieser Stadt? 🚕"],
        },
    },
    train: {
        es: {
            greeting: ["¡Bienvenido a bordo! ¿Tiene su billete para el trayecto? 🚆", "¡Hola! ¿Busca su asiento o necesita ayuda con la maleta?"],
            order: ["¡Claro! El tren sale en cinco minutos por la vía tres.", "Perfecto, aquí tiene su reserva confirmada. ¡Buen viaje!"],
            question: ["¿Prefiere un asiento en el sentido de la marcha?", "¿Sabe cuántas paradas faltan para llegar a su destino?"],
            thanks: ["¡De nada! ¡Disfrute del paisaje durante el viaje! 🐢", "¡Gracias a usted! 😊"],
            farewell: ["¡Adiós! ¡Espero que tenga un trayecto muy agradable! 🐢"],
            agree: ["¡Claro! Todo está en orden.", "¡Perfecto!"],
            describe: ["Entiendo, prefiere viajar en tren.", "Muy bien."],
            statement: ["Interesante. Viajar en tren es muy relajante. ¿No cree? 🚆"],
        },
        en: {
            greeting: [
                "Welcome aboard! Do you have your ticket for the journey? 🚆", 
                "Hello! Are you looking for your seat or do you need help with your luggage? 🐢",
                "Good afternoon! Welcome to the Shelldon Express. How's your trip so far?",
                "Hi! Step right in. Is this your first time traveling on this route?",
                "Hello! We'll be departing shortly. Please find your seat and get comfortable.",
                "Welcome! I hope you have a relaxing journey with us today."
            ],
            order: [
                "Of course! The train departs in five minutes from track three.", 
                "Perfect, I've confirmed your reservation. Have a wonderful trip! 🐢",
                "Got it! I've upgraded your seat to first class for maximum comfort.",
                "Certainly! You can find the dining car right at the front of the train.",
                "Great! I've marked your ticket as checked. Enjoy the ride!",
                "Noted! I'll alert you five minutes before we reach your station."
            ],
            question: [
                "Would you prefer a seat facing the direction of travel?", 
                "Do you know how many stops are left before we reach your destination?",
                "Would you like to know what time the dining car opens for dinner?",
                "Do you have any questions about the facilities on board this train?",
                "Would you like me to check if the train is running on schedule?",
                "Of course! Would you like a map of the city you're visiting?"
            ],
            thanks: [
                "You're welcome! Enjoy the scenery during the journey! 🐢", 
                "Thank you! It's our pleasure to have you on board with us. 😊",
                "No problem at all! I hope you have a very pleasant trip.",
                "You're very welcome! Let me know if you need anything else.",
                "The pleasure was mine! I hope you find the train ride relaxing."
            ],
            farewell: [
                "Goodbye! I hope you had a very pleasant journey with us! 🚆", 
                "See you later! Don't forget any of your luggage when you get off! 🐢",
                "Bye for now! Enjoy your time at your destination.",
                "Take care! It was a pleasure having you on board today.",
                "Have a wonderful stay! Goodbye!"
            ],
            agree: [
                "Of course! Everything is in order for your trip today.", 
                "Perfect! We'll make sure you arrive right on time.",
                "Awesome! That's one of the most beautiful routes in the country.",
                "Very well! I'll make sure the cabin temperature is comfortable for you.",
                "Of course! We strive to provide the best service for our passengers."
            ],
            describe: [
                "I understand, you prefer traveling by train because of the views.", 
                "Alright, I see. You're traveling for a business meeting, I assume?",
                "I understand. You want a quiet cabin so you can get some work done?",
                "Noted. Trains are indeed one of the most sustainable ways to travel.",
                "I see. Thank you for sharing your travel plans with me."
            ],
            statement: [
                "Interesting. Did you know this train line was opened in the 19th century?", 
                "Understood. Traveling by train with Shelldon is always a great experience. 🐢",
                "Well noted. The scenery outside the window is quite stunning today.",
                "I see. I always find the sound of the train very relaxing, don't you?",
                "Wow! You've traveled a lot! Where was your favorite train trip?"
            ],
        },
        fr: {
            greeting: ["Bienvenue à bord ! Avez-vous votre billet pour le trajet ? 🚆", "Bonjour ! Vous cherchez votre siège ou vous avez besoin d'aide avec votre valise ?"],
            order: ["Bien sûr ! Le train part dans cinq minutes de la voie trois.", "Parfait, voici votre réservation confirmée. Bon voyage !"],
            question: ["Préférez-vous un siège dans le sens de la marche ?", "Savez-vous combien d'arrêts il reste avant votre destination ?"],
            thanks: ["De rien ! Profitez du paysage pendant le voyage ! 🐢", "Merci à vous ! 😊"],
            farewell: ["Au revoir ! J'espère que vous passerez un trajet très agréable ! 🐢"],
            agree: ["Bien sûr ! Tout est en ordre.", "Parfait !"],
            describe: ["Je comprends, vous préférez voyager en train.", "Très bien."],
            statement: ["C'est intéressant. Voyager en train est très relaxant, vous ne trouvez pas ? 🚆"],
        },
        de: {
            greeting: ["Willkommen an Bord! Haben Sie Ihre Fahrkarte bereit? 🚆", "Guten Tag! Suchen Sie Ihren Platz oder benötigen Sie Hilfe mit dem Gepäck?"],
            order: ["Natürlich! Der Zug fährt in fünf Minuten von Gleis drei ab.", "Perfekt, hier ist Ihre Buchungsbestätigung. Gute Reise!"],
            question: ["Bevorzugen Sie einen Sitzplatz in Fahrtrichtung?", "Wissen Sie, wie viele Haltestellen es noch bis zu Ihrem Ziel sind?"],
            thanks: ["Gern geschehen! Genießen Sie die Aussicht während der Fahrt! 🐢", "Danke Ihnen! 😊"],
            farewell: ["Auf Wiedersehen! Ich hoffe, Sie haben eine sehr angenehme Fahrt! 🐢"],
            agree: ["Natürlich! Alles ist in bester Ordnung.", "Perfekt!"],
            describe: ["Ich verstehe, Sie reisen gerne mit dem Zug.", "Sehr gut."],
            statement: ["Das ist interessant. Zugfahren ist sehr entspannend, finden Sie nicht auch? 🚆"],
        },
    },
    tour: {
        es: {
            greeting: ["¡Hola! Bienvenido al tour por el centro histórico. 🗺️", "¡Buenas! ¿Es su primera vez visitando nuestra ciudad?"],
            order: ["¡Claro! En este punto podemos ver la catedral gótica.", "Perfecto, ahora vamos a caminar hacia la plaza mayor."],
            question: ["¿Quiere saber más sobre la historia de este monumento?", "¿Tienen alguna pregunta sobre la arquitectura de la zona?"],
            thanks: ["¡De nada! ¡Espero que estén disfrutando de la ruta! 🐢", "¡Gracias a ustedes! 😊"],
            farewell: ["¡Adiós! Espero que el tour les haya gustado mucho. 🐢"],
            agree: ["¡Claro! Es un detalle muy interesante.", "¡Perfecto!"],
            describe: ["Entiendo, le gusta mucho el arte y la historia.", "Muy bien."],
            statement: ["Interesante observación. ¿Seguimos con el recorrido? 🗺️"],
        },
        en: {
            greeting: [
                "Hello! Welcome to the tour of the historical city center. 🗺️", 
                "Hi there! Is it your first time visiting our beautiful city? 🐢",
                "Good morning! I'm your guide for today. Are you ready to explore?",
                "Welcome! We're about to see some of the most famous landmarks in the area.",
                "Hi! I hope you're wearing comfortable shoes for our walking tour!",
                "Hello! Welcome! What part of our city's history interests you the most?"
            ],
            order: [
                "Of course! At this point, we can see the stunning Gothic cathedral.", 
                "Perfect, now let's walk towards the main square for the next highlight. 🐢",
                "Got it! I've added a special stop to our route to see a hidden gem.",
                "Certainly! We'll take a short break here for photos and questions.",
                "Great! I've noted that you're interested in the local architecture.",
                "Noted! Let's continue our journey through time in this historic district."
            ],
            question: [
                "Would you like to know more about the history of this monument?", 
                "Do you have any questions about the architecture of this area?",
                "Would you like to know where the best local food is around here?",
                "Are you curious about the legends surrounding this ancient building?",
                "Would you like me to take a photo of you in front of this landmark?",
                "Of course! Would you like to know how long the tour will last?"
            ],
            thanks: [
                "You're welcome! I hope you're enjoying the tour route so far! 🐢", 
                "Thank you! It's a pleasure to show you our city's treasures. 😊",
                "No problem at all! I'm glad you're finding the history interesting.",
                "You're very welcome! Feel free to ask anything at any time.",
                "The pleasure was mine! I love sharing these stories with our visitors."
            ],
            farewell: [
                "Goodbye! I hope you enjoyed the tour very much today! 🐢", 
                "See you later! Enjoy the rest of your stay in our wonderful city! 🗺️",
                "Bye for now! It was a pleasure being your guide today. Take care!",
                "Have a wonderful afternoon exploring more highlights on your own!",
                "I hope you found the tour inspiring. Goodbye!"
            ],
            agree: [
                "Of course! It's a very interesting detail that many people miss.", 
                "Perfect! We'll spend a bit more time at this location then. 🐢",
                "Awesome! I'm glad you're as excited about this landmark as I am.",
                "Very well! I'll make sure to point out more facts like that.",
                "Of course! We want to make this tour as engaging as possible for you."
            ],
            describe: [
                "I understand, you're a big fan of art and local history.", 
                "Alright, I see. You're interested in how the city has changed over time?",
                "I understand. You prefer the hidden stories over the famous landmarks?",
                "Noted. We'll focus on the architectural details for this part of the tour.",
                "I see. Thank you for telling me what interests you the most!"
            ],
            statement: [
                "Interesting observation. Should we continue with the tour? 🗺️", 
                "Understood. Exploring with Shelldon is the best way to learn history. 🐢",
                "Well noted. This street has changed quite a lot in the last decade.",
                "I see. Many people are surprised by that fact too when they first hear it.",
                "Wow! You really know your history. Do you have a favorite period?"
            ],
        },
        fr: {
            greeting: ["Bonjour ! Bienvenue pour la visite du centre historique. 🗺️", "Salut ! C'est votre première visite dans notre ville ?"],
            order: ["Bien sûr ! À cet endroit, nous pouvons voir la cathédrale gothique.", "Parfait, nous allons maintenant marcher vers la place principale."],
            question: ["Voulez-vous en savoir plus sur l'histoire de ce monument ?", "Avez-vous des questions sur l'architecture du quartier ?"],
            thanks: ["De rien ! J'espère que vous appréciez l'itinéraire ! 🐢", "Merci à vous ! 😊"],
            farewell: ["Au revoir ! J'espère que la visite vous a beaucoup plu. 🐢"],
            agree: ["Bien sûr ! C'est un détail très intéressant.", "Parfait !"],
            describe: ["Je comprends, vous aimez beaucoup l'art et l'histoire.", "Très bien."],
            statement: ["C'est une observation intéressante. On continue la visite ? 🗺️"],
        },
        de: {
            greeting: ["Guten Tag! Willkommen zur Führung durch die historische Altstadt. 🗺️", "Hallo! Ist das Ihr erster Besuch in unserer Stadt?"],
            order: ["Natürlich! An dieser Stelle sehen wir die gotische Kathedrale.", "Perfekt, wir gehen nun weiter zum Hauptplatz."],
            question: ["Möchten Sie mehr über die Geschichte dieses Denkmals erfahren?", "Haben Sie Fragen zur Architektur dieses Viertels?"],
            thanks: ["Gern geschehen! Ich hoffe, Ihnen gefällt die Route! 🐢", "Danke Ihnen! 😊"],
            farewell: ["Auf Wiedersehen! Ich hoffe, die Tour hat Ihnen sehr gefallen. 🐢"],
            agree: ["Natürlich! Das ist ein sehr interessantes Detail.", "Perfekt!"],
            describe: ["Ich verstehe, Sie interessieren sich sehr für Kunst und Geschichte.", "Sehr gut."],
            statement: ["Das ist eine interessante Beobachtung. Machen wir weiter? 🗺️"],
        },
    },
    museum: {
        es: {
            greeting: ["¡Bienvenido al museo! ¿Tiene su entrada o su pase? 🏛️", "¡Hola! ¿Busca alguna exposición temporal en concreto?"],
            order: ["¡Claro! Las obras del siglo XIX están en la planta uno.", "Perfecto, aquí tiene el folleto con el mapa del museo."],
            question: ["¿Prefiere usar la audioguía o prefiere ir por libre?", "¿Quiere conocer los detalles de esta escultura?"],
            thanks: ["¡De nada! ¡Disfrute de la colección de arte! 🐢", "¡Gracias a usted! 😊"],
            farewell: ["¡Adiós! Espero que la visita haya sido muy inspiradora. 🐢"],
            agree: ["¡Claro! Es una obra maestra.", "¡Perfecto!"],
            describe: ["Entiendo, busca inspiración artística.", "Muy bien."],
            statement: ["Interesante. ¿Cuál es su estilo artístico favorito? 🏛️"],
        },
        en: {
            greeting: [
                "Welcome to the museum! Do you have your ticket or your pass? 🏛️", 
                "Hi there! Are you looking for a specific temporary exhibition today? 🐢",
                "Hello! Welcome to our galleries. How can I help you navigate the art?",
                "Good afternoon! Would you like a map of the museum to start your visit?",
                "Hi! Welcome! Are you here for the classical art or the modern section?",
                "Welcome! I hope you're ready for some artistic inspiration today."
            ],
            order: [
                "Of course! The 19th-century works are located on the first floor.", 
                "Perfect, here is the brochure with the map of the museum layout. 🗺️",
                "Got it! I've noted that you'd like to see the Renaissance collection.",
                "Certainly! You can find the gift shop near the main entrance.",
                "Great! I'll guide you to the special exhibition room right now.",
                "Noted! I'll make sure you don't miss the masterpiece in the central hall."
            ],
            question: [
                "Do you prefer using the audio guide or do you want to explore freely?", 
                "Would you like to know the details behind this beautiful sculpture?",
                "Do you know when the museum usually closes for the day?",
                "Are you interested in the history of the building itself?",
                "Would you like to know if there are any photography restrictions here?",
                "Of course! Would you like to see our collection of ancient artifacts?"
            ],
            thanks: [
                "You're welcome! Enjoy the art collection to the fullest! 🐢", 
                "Thank you for visiting! I hope you have an inspiring day. 😊",
                "No problem at all! I'm glad I could help you find that piece.",
                "You're very welcome! Art is better when shared with curious visitors.",
                "The pleasure was mine! I hope the exhibition leaves a lasting impression."
            ],
            farewell: [
                "Goodbye! I hope the visit was very inspiring for you! 🏛️", 
                "See you later! Come back soon for our new exhibitions! 🐢",
                "Bye for now! It was a pleasure helping you explore the museum today.",
                "Take care! We hope you enjoyed the world of art with us.",
                "Have a wonderful day! Goodbye!"
            ],
            agree: [
                "Of course! It's truly a masterpiece of its time, isn't it?", 
                "Perfect! I'll show you more works by the same artist. 🐢",
                "Awesome! I'm glad you appreciate the detail in this gallery.",
                "Very well! I'll make sure to highlight more facts about this period.",
                "Of course! We want to make your visit as educational as possible."
            ],
            describe: [
                "I understand, you're looking for artistic inspiration today.", 
                "Alright, I see. You're a big fan of Impressionist paintings, I assume?",
                "I understand. You prefer the quiet rooms where you can contemplate the art?",
                "Noted. Art has a unique way of touching our hearts, doesn't it?",
                "I see. Thank you for sharing your favorite art styles with me."
            ],
            statement: [
                "Interesting. What is your favorite style of art in this museum? 🏛️", 
                "Understood. Viewing art with Shelldon is always a deep experience. 🐢",
                "Well noted. Many people spend hours in this specific room.",
                "I see. The lighting in this gallery was designed just for these pieces.",
                "Wow! You have a great eye for detail. Have you studied art before?"
            ],
        },
        fr: {
            greeting: ["Bienvenue au musée ! Avez-vous votre billet ou votre pass ? 🏛️", "Bonjour ! Vous cherchez une exposition temporaire précise ?"],
            order: ["Bien sûr ! Les œuvres du XIXe siècle sont au premier étage.", "Parfait, voici la brochure avec le plan du musée."],
            question: ["Préférez-vous utiliser l'audioguide ou vous préférez la visite libre ?", "Voulez-vous connaître les détails de cette sculpture ?"],
            thanks: ["De rien ! Profitez bien de la collection d'art ! 🐢", "Merci à vous ! 😊"],
            farewell: ["Au revoir ! J'espère que la visite a été très inspiratrice. 🐢"],
            agree: ["Bien sûr ! C'est un chef-d'œuvre.", "Parfait !"],
            describe: ["Je comprends, vous cherchez de l'inspiration artistique.", "Très bien."],
            statement: ["C'est intéressant. Quel est votre style artistique préféré ? 🏛️"],
        },
        de: {
            greeting: ["Willkommen im Museum! Haben Sie Ihre Eintrittskarte oder einen Pass? 🏛️", "Guten Tag! Suchen Sie eine bestimmte Sonderausstellung?"],
            order: ["Natürlich! Die Werke aus dem 19. Jahrhundert befinden sich im ersten Stock.", "Perfekt, hier ist die Broschüre mit dem Museumsplan."],
            question: ["Bevorzugen Sie den Audioguide oder möchten Sie die Ausstellung frei erkunden?", "Möchten Sie Details zu dieser Skulptur erfahren?"],
            thanks: ["Gern geschehen! Viel Freude mit der Kunstsammlung! 🐢", "Danke Ihnen! 😊"],
            farewell: ["Auf Wiedersehen! Ich hoffe, der Besuch war sehr inspirierend für Sie. 🐢"],
            agree: ["Natürlich! Das ist ein wahres Meisterwerk.", "Perfekt!"],
            describe: ["Ich verstehe, Sie suchen nach künstlerischer Inspiration.", "Sehr gut."],
            statement: ["Das ist interessant. Welcher Kunststil gefällt Ihnen am besten? 🏛️"],
        },
    },
    pharmacy: {
        es: {
            greeting: ["¡Hola! ¿En qué puedo ayudarle hoy en la farmacia? 🏥", "¡Buenas! ¿Viene por un medicamento o busca algo de higiene?"],
            order: ["¡Claro! Aquí tiene el jarabe. Tómelo cada ocho horas.", "Perfecto, ¿necesita también que le tome la tensión?"],
            question: ["¿Tiene usted la receta médica preparada?", "¿Prefiere el formato en pastillas o en sobres?"],
            thanks: ["¡De nada! ¡Espero que se sienta mejor pronto! 🐢", "¡Gracias a usted! 😊"],
            farewell: ["¡Adiós! ¡Cuídese mucho y que se mejore! 🐢"],
            agree: ["¡Claro! Es muy importante seguir las pautas.", "¡Perfecto!"],
            describe: ["Entiendo, no se siente del todo bien hoy.", "Muy bien."],
            statement: ["Muy bien. ¿Necesita alguna otra cosa de farmacia? 🏥"],
        },
        en: {
            greeting: [
                "Hello! How can I help you today at the pharmacy? 🏥", 
                "Hi there! Are you here for medication or are you looking for some hygiene products? 🐢",
                "Good morning! Welcome to our pharmacy. How are you feeling today?",
                "Hi! Do you have a prescription or do you need some over-the-counter advice?",
                "Hello! Please come in. Is there something specific we can help you find?",
                "Welcome! I hope we can help you feel better soon. What can I do for you?"
            ],
            order: [
                "Of course! here is the syrup. Take it every eight hours as directed.", 
                "Perfect, would you also like me to take your blood pressure? 🐢",
                "Got it! I've prepared your prescription. Please follow the instructions carefully.",
                "Certainly! I'll get that vitamins package for you right now.",
                "Great! I've noted down your needs. Would you like some healthy snacks too?",
                "Noted! I'll put these items in a bag for you. Anything else?"
            ],
            question: [
                "Do you have your medical prescription ready for me to check?", 
                "Do you prefer the tablets or the soluble powder for this medicine?",
                "Would you like to know about any potential side effects of this treatment?",
                "Do you know how long you should continue taking this medication?",
                "Are you looking for a generic version or a specific brand today?",
                "Of course! Would you like some advice on how to store these products?"
            ],
            thanks: [
                "You're welcome! I hope you feel better very soon! 🐢", 
                "Thank you! It's a pleasure to help you stay healthy. 😊",
                "No problem at all! I'm glad we had exactly what you needed.",
                "You're very welcome! Don't hesitate to come back if you have more questions.",
                "The pleasure was mine! Take care of yourself and have a good day."
            ],
            farewell: [
                "Goodbye! Take good care of yourself and get well soon! 💊", 
                "See you later! Don't forget to take your medicine on time! 🐢",
                "Bye for now! I hope you find the treatment effective. Take care!",
                "Have a wonderful day! We're here whenever you need health advice.",
                "Stay healthy! Goodbye!"
            ],
            agree: [
                "Of course! It's very important to follow the doctor's guidelines.", 
                "Perfect! I'll make sure you have all the necessary information. 🐢",
                "Awesome! I'm glad you're taking your health so seriously.",
                "Very well! I'll add those items to your order right now.",
                "Of course! We strive to provide the most reliable health advice."
            ],
            describe: [
                "I understand, you're not feeling quite like yourself today.", 
                "Alright, I see. You've been having these symptoms for a few days now?",
                "I understand. You want something natural to help with your sleep?",
                "Noted. We have a lot of options that could help you feel more energized.",
                "I see. Thank you for letting me know your health concerns."
            ],
            statement: [
                "Very well. Is there anything else you need from the pharmacy today? 🏥", 
                "Understood. Health is the most important thing, after all. 🐢",
                "Well noted. Would you like me to check if this is covered by your insurance?",
                "I see. Many people find this specific product very helpful for those symptoms.",
                "Wow! You're really knowledgeable about your health. Any other questions?"
            ],
        },
        fr: {
            greeting: ["Bonjour ! En quoi puis-je vous aider aujourd'hui à la pharmacie ? 🏥", "Salut ! Vous venez pour un médicament ou vous cherchez un produit d'hygiène ?"],
            order: ["Bien sûr ! Voici le sirop. Prenez-le toutes les huit heures.", "Parfait, avez-vous aussi besoin que je prenne votre tension ?"],
            question: ["Avez-vous votre ordonnance médicale prête ?", "Préférez-vous le format en comprimés ou en sachets ?"],
            thanks: ["De rien ! J'espère que vous vous sentirez mieux bientôt ! 🐢", "Merci à vous ! 😊"],
            farewell: ["Au revoir ! Prenez soin de vous et portez-vous mieux ! 🐢"],
            agree: ["Bien sûr ! C'est très important de suivre les indications.", "Parfait !"],
            describe: ["Je comprends, vous ne vous sentez pas très bien aujourd'hui.", "Très bien."],
            statement: ["Très bien. Avez-vous besoin d'autre chose à la pharmacie ? 🏥"],
        },
        de: {
            greeting: ["Guten Tag! Wie kann ich Ihnen heute in der Apotheke helfen? 🏥", "Hallo! Benötigen Sie ein Medikament oder suchen Sie ein Pflegeprodukt?"],
            order: ["Natürlich! Hier ist der Hustensaft. Nehmen Sie ihn alle acht Stunden ein.", "Perfekt, soll ich auch kurz Ihren Blutdruck messen?"],
            question: ["Haben Sie Ihr ärztliches Rezept dabei?", "Bevorzugen Sie Tabletten oder Pulver zum Auflösen?"],
            thanks: ["Gern geschehen! Ich hoffe, es geht Ihnen bald wieder besser! 🐢", "Danke Ihnen! 😊"],
            farewell: ["Auf Wiedersehen! Passen Sie auf sich auf und gute Besserung! 🐢"],
            agree: ["Natürlich! Es ist sehr wichtig, die Anweisungen genau zu befolgen.", "Perfekt!"],
            describe: ["Ich verstehe, Sie fühlen sich heute nicht besonders wohl.", "Sehr gut."],
            statement: ["Alles klar. Benötigen Sie sonst noch etwas aus der Apotheke? 🏥"],
        },
    },
    interview: {
        es: {
            greeting: ["¡Hola! Bienvenido a la entrevista de trabajo. Tome asiento. 💼", "¡Buenas! ¿Ha tenido problemas para encontrar nuestras oficinas?"],
            order: ["¡Claro! Hábleme de su experiencia en este sector.", "Perfecto, revisaremos su currículum y le diremos algo pronto."],
            question: ["¿Por qué cree que es el candidato ideal para este puesto?", "¿Qué es lo que más le motiva de trabajar con nuestro equipo?"],
            thanks: ["¡Gracias por venir! Ha sido un placer conocerle hoy. 🐢", "¡Gracias a usted! 😊"],
            farewell: ["¡Adiós! Le llamaremos en los próximos días sin falta. 🐢"],
            agree: ["¡Claro! Es una actitud muy positiva.", "¡Perfecto!"],
            describe: ["Entiendo, busca nuevos retos profesionales.", "Muy bien."],
            statement: ["Interesante. ¿Tiene alguna otra duda sobre el puesto? 💼"],
        },
        en: {
            greeting: [
                "Hello! Welcome to the job interview. Please take a seat. 💼", 
                "Hi there! Did you have any trouble finding our offices today? 🐢",
                "Good morning! It's a pleasure to meet you. Are you ready for our talk?",
                "Welcome! Thank you for your interest in joining our team. Should we begin?",
                "Hi! Please make yourself comfortable. Would you like a glass of water?",
                "Hello! We're excited to learn more about your background today."
            ],
            order: [
                "Of course! Please tell me more about your experience in this field.", 
                "Perfect, we'll review your resume and get back to you very soon. 📋",
                "Got it! I've noted down your technical skills. Anything else to add?",
                "Certainly! We'll start with some general questions about your career path.",
                "Great! I've marked your availability for the next round of interviews.",
                "Noted! We'll process your application and contact you in a few days."
            ],
            question: [
                "Why do you believe you are the ideal candidate for this position?", 
                "What motivates you the most about working with our team?",
                "How do you handle difficult situations or conflicts in the workplace?",
                "Where do you see yourself professionally in the next five years?",
                "What do you consider to be your greatest achievement so far?",
                "Of course! Do you have any questions for us about the role or the company?"
            ],
            thanks: [
                "Thank you for coming! It was a pleasure meeting you today. 🐢", 
                "Thank you! We appreciate your time and your interest in our company. 😊",
                "No problem at all! I'm glad we could have this detailed conversation.",
                "You're very welcome! We'll be in touch with you shortly.",
                "The pleasure was mine! I hope you found the interview process helpful."
            ],
            farewell: [
                "Goodbye! We'll call you in the next few days for sure. 💼", 
                "See you later! Have a great rest of your day and good luck! 🐢",
                "Bye for now! It was great learning more about your professional goals.",
                "Take care! We'll notify you of our decision by the end of the week.",
                "Thank you again for your time. Goodbye!"
            ],
            agree: [
                "Of course! That's a very positive attitude to have in this role.", 
                "Perfect! We value transparency and clear communication. 🐢",
                "Awesome! I'm glad you're as excited about this opportunity as we are.",
                "Very well! I'll make sure the hiring manager sees these notes.",
                "Of course! We strive to create a supportive environment for our employees."
            ],
            describe: [
                "I understand, you're looking for new professional challenges.", 
                "Alright, I see. You've been working in this industry for a long time?",
                "I understand. You're looking for a role where you can use your foreign languages?",
                "Noted. We're looking for someone who is proactive and eager to learn.",
                "I see. Thank you for sharing your career aspirations with me."
            ],
            statement: [
                "Interesting. Do you have any other questions about the position? 💼", 
                "Understood. Practicing for an interview with Shelldon is a great idea. 🐢",
                "Well noted. We'll definitely take that into consideration.",
                "I see. Many of our employees share similar values and goals.",
                "Wow! That's an impressive background. Anything else you'd like to mention?"
            ],
        },
        fr: {
            greeting: ["Bonjour ! Bienvenue à l'entretien d'embauche. Asseyez-vous, je vous en prie. 💼", "Salut ! Avez-vous trouvé nos bureaux facilement ?"],
            order: ["Bien sûr ! Parlez-moi de votre expérience dans ce secteur.", "Parfait, nous allons examiner votre CV et nous vous recontacterons bientôt."],
            question: ["Pourquoi pensez-vous être le candidat idéal pour ce poste ?", "Qu'est-ce qui vous motive le plus à travailler dans notre équipe ?"],
            thanks: ["Merci d'être venu ! C'était un plaisir de vous rencontrer aujourd'hui. 🐢", "Merci à vous ! 😊"],
            farewell: ["Au revoir ! Nous vous appellerons dans les prochains jours sans faute. 🐢"],
            agree: ["Bien sûr ! C'est une attitude très positive.", "Parfait !"],
            describe: ["Je comprends, vous cherchez de nouveaux défis professionnels.", "Très bien."],
            statement: ["C'est intéressant. Avez-vous d'autres questions sur le poste ? 💼"],
        },
        de: {
            greeting: ["Hallo! Willkommen zum Vorstellungsgespräch. Bitte nehmen Sie Platz. 💼", "Guten Tag! Hatten Sie Schwierigkeiten, unser Büro zu finden?"],
            order: ["Gerne! Erzählen Sie mir von Ihrer Erfahrung in diesem Bereich.", "Perfekt, wir werden Ihren Lebenslauf prüfen und uns bald bei Ihnen melden."],
            question: ["Warum glauben Sie, dass Sie der ideale Kandidat für diese Stelle sind?", "Was motiviert Sie am meisten an der Arbeit in unserem Team?"],
            thanks: ["Danke für Ihr Erscheinen! Es war mir ein Vergnügen, Sie heute kennenzulernen. 🐢", "Danke Ihnen! 😊"],
            farewell: ["Auf Wiedersehen! Wir werden Sie in den nächsten Tagen auf jeden Fall anrufen. 🐢"],
            agree: ["Natürlich! Das ist eine sehr positive Einstellung.", "Perfekt!"],
            describe: ["Ich verstehe, Sie suchen nach neuen beruflichen Herausforderungen.", "Sehr gut."],
            statement: ["Interessant. Haben Sie noch andere Fragen zur Stelle? 💼"],
        },
    },
    bank: {
        es: {
            greeting: ["¡Hola! ¿Desea hacer una gestión en ventanilla o en mesa? 🏦", "¡Buenas! ¿Busca abrir una cuenta o necesita cambiar moneda?"],
            order: ["¡Claro! Aquí tiene su comprobante de la operación.", "Perfecto, la transferencia se ha realizado correctamente."],
            question: ["¿Desea consultar el saldo de su cuenta corriente?", "¿Quiere conocer nuestra oferta de préstamos personales?"],
            thanks: ["¡Gracias por confiar en nuestro banco! 🐢", "¡Gracias a usted! 😊"],
            farewell: ["¡Adiós! ¡Que tenga un día excelente! 🐢"],
            agree: ["¡Claro! Todo está conforme a la normativa.", "¡Perfecto!"],
            describe: ["Entiendo, busca ahorrar para el futuro.", "Muy bien."],
            statement: ["Muy bien. ¿Alguna otra gestión bancaria para hoy? 🏦"],
        },
        en: {
            greeting: [
                "Hello! Would you like to carry out a transaction at the counter or at a desk? 🏦", 
                "Hi there! Are you looking to open an account or do you need to exchange currency? 🐢",
                "Good morning! Welcome to our bank. How can I assist you today?",
                "Hi! Please step forward. Do you have your ID and bank card ready?",
                "Hello! Welcome! Are you here for a personal appointment or a general query?",
                "Welcome! I hope we can help you manage your finances efficiently today."
            ],
            order: [
                "Of course! Here is your receipt for the transaction. Anything else?", 
                "Perfect, the transfer has been completed successfully. 🐢",
                "Got it! I've updated your account information as requested.",
                "Certainly! I'll process your withdrawal right away. How would you like the bills?",
                "Great! I've noted down your loan application. We'll review it shortly.",
                "Noted! I'll print out your latest bank statement for you now."
            ],
            question: [
                "Would you like to check the balance of your current account today?", 
                "Would you like to hear about our latest personal loan offers?",
                "Do you know the current exchange rate for the currency you need?",
                "Are you interested in opening a savings account with a high interest rate?",
                "Would you like me to explain the different types of credit cards we offer?",
                "Of course! Would you like to set up an automatic payment for your bills?"
            ],
            thanks: [
                "Thank you for trusting our bank! 🐢", 
                "Thank you! It's a pleasure to help you with your financial needs. 😊",
                "No problem at all! I'm glad we could resolve that issue for you.",
                "You're very welcome! We appreciate your business and your loyalty.",
                "The pleasure was mine! Have a great day and manage your money well."
            ],
            farewell: [
                "Goodbye! Have an excellent day ahead! 🏦", 
                "See you later! Don't forget to take your card and your receipt! 🐢",
                "Bye for now! It was a pleasure assisting you with your banking today.",
                "Take care! We're here whenever you need financial advice.",
                "Have a wonderful day! Goodbye!"
            ],
            agree: [
                "Of course! Everything is in compliance with the bank regulations.", 
                "Perfect! We'll make sure your funds are transferred immediately. 🐢",
                "Awesome! I'm glad you're taking steps to secure your financial future.",
                "Very well! I'll add this transaction to your records right now.",
                "Of course! We strive to provide the most secure banking experience."
            ],
            describe: [
                "I understand, you're looking to save for the future.", 
                "Alright, I see. You're planning a big purchase and need financial advice?",
                "I understand. You want to consolidate your debts into one monthly payment?",
                "Noted. Banking with Shelldon is the smartest way to manage your assets.",
                "I see. Thank you for sharing your financial goals with me."
            ],
            statement: [
                "Very well. Any other banking business for you today? 🏦", 
                "Understood. Security is our top priority here at the bank. 🐢",
                "Well noted. Would you like me to check if you're eligible for a credit limit increase?",
                "I see. Many of our customers find this specific account type very useful.",
                "Wow! You've been a loyal customer for a long time. Anything else I can do?"
            ],
        },
        fr: {
            greeting: ["Bonjour ! Souhaitez-vous effectuer une opération au guichet ou au bureau ? 🏦", "Salut ! Cherchez-vous à ouvrir un compte ou avez-vous besoin de changer de devise ?"],
            order: ["Bien sûr ! Voici votre reçu pour l'opération.", "Parfait, le virement a été effectué avec succès."],
            question: ["Souhaitez-vous consulter le solde de votre compte courant ?", "Voulez-vous connaître nos offres de prêts personnels ?"],
            thanks: ["Merci de votre confiance en notre banque ! 🐢", "Merci à vous ! 😊"],
            farewell: ["Au revoir ! Passez une excellente journée ! 🐢"],
            agree: ["Bien sûr ! Tout est conforme à la réglementation.", "Parfait !"],
            describe: ["Je comprends, vous cherchez à épargner pour l'avenir.", "Très bien."],
            statement: ["Très bien. Autre chose pour vos opérations bancaires aujourd'hui ? 🏦"],
        },
        de: {
            greeting: ["Guten Tag! Möchten Sie ein Geschäft am Schalter oder am Beratungstisch erledigen? 🏦", "Hallo! Möchten Sie ein Konto eröffnen oder müssen Sie Währungen wechseln?"],
            order: ["Natürlich! Hier ist Ihr Beleg für den Vorgang.", "Perfekt, die Überweisung wurde erfolgreich durchgeführt."],
            question: ["Möchten Sie den Kontostand Ihres Girokontos abfragen?", "Möchten Sie mehr über unsere Privatkredit-Angebote erfahren?"],
            thanks: ["Vielen Dank für Ihr Vertrauen in unsere Bank! 🐢", "Danke Ihnen! 😊"],
            farewell: ["Auf Wiedersehen! Ich wünsche Ihnen einen ausgezeichneten Tag! 🐢"],
            agree: ["Natürlich! Alles entspricht den Vorschriften.", "Perfekt!"],
            describe: ["Ich verstehe, Sie möchten für die Zukunft sparen.", "Sehr gut."],
            statement: ["Sehr gut. Gibt es heute noch ein anderes Bankgeschäft für Sie? 🏦"],
        },
    },
    market: {
        es: {
            greeting: [
                "¡Hola! El mercado tiene hoy productos frescos espectaculares. ¿Qué está buscando? 🛒", 
                "¡Buenos días! Mire estas frutas, están en su punto. ¿Le ayudo con algo?",
                "¡Buenas! Bienvenido al puesto central. ¿Busca algo de nuestra huerta?",
                "¡Hola, hola! Hoy tenemos las mejores manzanas de la zona. ¿Le pongo un kilo?",
                "¡Muy buenas! ¿Viene a por verduras frescas o prefiere algo de fruta?",
                "¡Hola! Pase, pase. Todo lo que ve es del día. ¿En qué le puedo servir?"
            ],
            order: [
                "¡Claro! Una elección muy sabrosa. Son productos frescos del día. ¿Algo más?", 
                "Perfecto, ¿cuántos kilos necesita que le ponga en la bolsa? 🍎",
                "Muy bien, se lo preparo ahora mismo. ¿Desea también algo de verdura para acompañar?",
                "¡Excelente! Estas naranjas tienen mucha vitamina. ¿Le pongo media docena?",
                "¡Anotado! Enseguida le peso las uvas. ¿Necesita alguna bolsa más?",
                "¡Marchando un pedido fresco! ¿Quiere ver también nuestros tomates?"
            ],
            question: [
                "Las manzanas están hoy a 2 euros el kilo. ¿Le pongo un par para probar?", 
                "Hoy tenemos ofertas increíbles en todas las verduras de temporada. ¿Quiere echar un vistazo?",
                "Sí, estas uvas no tienen semillas, son perfectas para los niños. ¿Le interesan?",
                "Claro, el pescado llega mañana temprano, hoy solo tenemos lo que ve aquí.",
                "Efectivamente, todo nuestro género es ecológico y local. ¿Qué le parece?",
                "¿El precio de los tomates? Están a 1.50 el kilo, ¡están tirados de precio!"
            ],
            thanks: [
                "¡Gracias a usted! Que disfrute mucho de su comida fresca. 🐢", 
                "¡De nada! Vuelva mañana, tendremos fruta recién traída del huerto. 😊",
                "¡A usted las gracias! Es un placer ver clientes tan decididos.",
                "¡No hay de qué! Disfrute de los productos y tenga un buen día.",
                "¡Gracias por su visita! El mercado es su casa."
            ],
            farewell: [
                "¡Adiós! Que tenga un día de compras de lo más productivo. 🐢", 
                "¡Hasta luego! Vuelva pronto por aquí, el mercado le esperará con los brazos abiertos.",
                "¡Chao! Espero que le gusten mucho nuestras verduras.",
                "¡Nos vemos! No olvide pasar por el puesto de las flores antes de irse.",
                "¡Que le vaya muy bien! ¡Hasta la próxima semana!"
            ],
            agree: [
                "¡Claro que sí! Es una de las mejores elecciones que puede hacer hoy.", 
                "¡Perfecto! Se lo pongo inmediatamente en la bolsa. ¿Algo más?",
                "¡Estupendo! No se arrepentirá de llevarse este producto.",
                "¡Muy bien! Procedo a pesarlo ahora mismo.",
                "¡Sin problemas! Aquí tiene lo que ha pedido."
            ],
            describe: [
                "Entiendo, usted busca calidad ante todo. Aquí tenemos lo mejor del mercado.", 
                "Muy bien pensado. ¿Prefiere que sean todos del mismo tamaño o variados?",
                "Comprendo su necesidad. Déjeme buscarle las piezas más maduras.",
                "Interesante... ¿Busca algo para cocinar hoy o para que dure toda la semana?",
                "Vale, ya tengo claro lo que quiere. Permítame seleccionarlo para usted."
            ],
            statement: [
                "Muy buena observación. ¿Quiere probar un trozo de esta fruta antes de decidirse? 🐢", 
                "El mercado es, sin duda, el mejor sitio para practicar español. ¿Qué más necesita para hoy?",
                "Totalmente de acuerdo. La frescura es vital. ¿Le pongo algo más?",
                "Interesante punto de vista. ¿Busca algún otro producto de temporada?",
                "¡Vaya! Se nota que entiende de buenos productos. ¿Qué le pongo ahora?"
            ],
        },
        en: {
            greeting: [
                "Hello! The market has spectacular fresh produce today. What are you looking for? 🛒", 
                "Good morning! Look at these fruits, they're at their peak. Can I help you with anything? 🐢",
                "Hi! Welcome to our central stall. Everything is organic and local!",
                "Hello, hello! We have the best apples in the region today. Shall I get you a kilo?",
                "Good morning! Are you here for fresh vegetables or would you prefer some fruit?",
                "Hi! Step right in. Everything you see was picked just this morning."
            ],
            order: [
                "Sure! A very tasty choice. These are fresh products of the day. Anything else?", 
                "Perfect, how many kilos do you need me to put in the bag? 🍎",
                "Of course! I'll prepare that for you right now. Would you like some greens to go with it?",
                "Excellent! These oranges are full of vitamins. Shall I get you half a dozen?",
                "Noted! I'll weigh the grapes for you immediately. Do you need another bag?",
                "Coming right up! One fresh order! Would you like to see our tomatoes as well?"
            ],
            question: [
                "Apples are 2 euros a kilo today. Should I get you a couple to try?", 
                "We have incredible deals on all seasonal vegetables today. Want to take a look?",
                "Yes, these grapes are seedless, they're perfect for the kids. Are you interested?",
                "Of course, the fresh fish arrives early tomorrow morning, today we only have what you see.",
                "Actually, all our produce is organic and locally grown. What do you think?",
                "The price of the tomatoes? They're 1.50 per kilo, they're a steal!"
            ],
            thanks: [
                "Thank you! I hope you really enjoy your fresh meal. 🐢", 
                "You're welcome! Come back tomorrow, we'll have more fruit straight from the orchard. 😊",
                "Thank you! It's a pleasure to see such decisive customers.",
                "No problem at all! Enjoy the products and have a wonderful day.",
                "Thank you for your visit! The market is your home."
            ],
            farewell: [
                "Goodbye! Have a great and productive shopping day! 🛒", 
                "See you later! Come back soon, the market will wait for you with open arms. 🐢",
                "Bye for now! I hope you really like our vegetables.",
                "See you around! Don't forget to stop by the flower stall before you leave.",
                "Have a great week! See you next time!"
            ],
            agree: [
                "Of course! That's one of the best choices you can make today.", 
                "Perfect! I'll put that in a bag for you immediately. Anything else? 🐢",
                "Awesome! You won't regret taking this product home with you.",
                "Very well! I'll weigh it right now for you.",
                "No problem! Here is what you asked for."
            ],
            describe: [
                "I see, you're looking for quality above all else. We have the best here.", 
                "Well thought out. Do you prefer them all the same size or mixed?",
                "I understand your need. Let me find the ripest pieces for you.",
                "Interesting... Are you looking to cook something today or for the whole week?",
                "Alright, I see what you want. Let me select them for you."
            ],
            statement: [
                "Very good observation. Would you like to try a piece of this fruit before you decide? 🐢", 
                "The market is definitely the best place to practice your English. What else do you need? 🛒",
                "Total agreement. Freshness is vital. Shall I get you anything else?",
                "Interesting point of view. Are you looking for any other seasonal product?",
                "Wow! It's clear you know your good produce. What shall I get you now?"
            ],
        },
        fr: {
            greeting: [
                "Bonjour ! Le marché a des produits frais spectaculaires aujourd'hui. Que cherchez-vous ? 🛒", 
                "Salut ! Regardez ces fruits, ils sont magnifiques. Je vous aide ?",
                "Bonjour ! Bienvenue à notre stand. Vous cherchez quelque chose de notre potager ?",
                "Salut, salut ! Aujourd'hui nous avons les meilleures pommes du coin. Un kilo ?",
                "Bonjour ! Vous venez pour des légumes frais ou vous préférez des fruits ?",
                "Salut ! Entrez, entrez. Tout ce que vous voyez est du jour. Puis-je vous servir ?"
            ],
            order: [
                "Bien sûr ! Un excellent choix. Ce sont des produits frais du jour. Autre chose ?", 
                "Parfait, combien de kilos voulez-vous que je vous mette dans le sac ? 🍎",
                "Très bien, je vous prépare ça. Voulez-vous aussi des légumes pour accompagner ?",
                "Excellent ! Ces oranges sont pleines de vitamines. Une demi-douzaine ?",
                "C'est noté ! Je vous pèse les raisins tout de suite. Besoin d'un autre sac ?",
                "Et une commande fraîche, une ! Voulez-vous aussi voir nos tomates ?"
            ],
            question: [
                "Les pommes sont aujourd'hui à 2 euros le kilo. Je vous en mets quelques-unes ?", 
                "Aujourd'hui nous avons des offres incroyables sur tous les légumes de saison. Vous voulez jeter un œil ?",
                "Oui, ces raisins n'ont pas de pépins, ils sont parfaits pour les enfants. Ça vous intéresse ?",
                "Bien sûr, le poisson arrive demain matin tôt. Aujourd'hui on n'a que ce que vous voyez.",
                "Effectivement, tout ce que nous vendons est biologique et local. Qu'en pensez-vous ?",
                "Le prix des tomates ? Elles sont à un euro cinquante le kilo, c'est une affaire !"
            ],
            thanks: [
                "Merci à vous ! Profitez bien de vos produits frais. 🐢", 
                "De rien ! Revenez demain, on aura des fruits tout juste cueillis. 😊",
                "C'est moi qui vous remercie ! C'est un plaisir de voir des clients décidés.",
                "Pas de quoi ! Profitez bien et passez une bonne journée.",
                "Merci de votre visite ! Le marché est votre maison."
            ],
            farewell: [
                "Au revoir ! Bonne fin de courses au marché. 🐢", 
                "À bientôt ! Revenez nous voir, le marché vous attendra les bras ouverts.",
                "Salut ! J'espère que vous aimerez beaucoup nos légumes.",
                "On se revoit bientôt ! N'oubliez pas de passer chez le fleuriste avant de partir.",
                "Passez une excellente journée ! À la semaine prochaine !"
            ],
            agree: [
                "Bien sûr ! C'est l'un des meilleurs choix que vous puissiez faire aujourd'hui.", 
                "Parfait ! Je vous mets ça tout de suite dans le sac. Autre chose ?",
                "Super ! Vous ne regretterez pas d'avoir pris ce produit.",
                "Très bien ! Je pèse tout ça immédiatement.",
                "Pas de problème ! Voici votre commande."
            ],
            describe: [
                "Je comprends, vous cherchez la qualité avant tout. Ici, on a le meilleur du marché.", 
                "Très bien pensé. Préférez-vous qu'ils soient tous de la même taille ou variés ?",
                "Je comprends votre besoin. Laissez-moi vous chercher les pièces les plus mûres.",
                "Intéressant... Vous cherchez quelque chose pour cuisiner aujourd'hui ou pour toute la semaine ?",
                "D'accord, je vois ce que vous voulez. Laissez-moi les sélectionner pour vous."
            ],
            statement: [
                "Très bonne observation. Voulez-vous goûter un morceau de ce fruit avant de décider ? 🐢", 
                "Le marché est sans doute le meilleur endroit pour pratiquer le français. Autre chose ?",
                "Totalement d'accord. La fraîcheur est vitale. Je vous mets autre chose ?",
                "Point de vue intéressant. Vous cherchez un autre produit de saison ?",
                "Saperlipopette ! On voit que vous connaissez les bons produits. Je vous mets quoi maintenant ?"
            ],
        },
        de: {
            greeting: [
                "Hallo! Der Markt hat heute spektakuläre frische Produkte. Was suchen Sie? 🛒", 
                "Guten Morgen! Schauen Sie sich dieses Obst an, es ist genau richtig. Kann ich helfen?",
                "Guten Tag! Willkommen am zentralen Stand. Suchen Sie etwas aus unserem Garten?",
                "Hallo, hallo! Heute haben wir die besten Äpfel der Region. Darf es ein Kilo sein?",
                "Guten Tag! Suchen Sie frisches Gemüse oder bevorzugen Sie etwas Obst?",
                "Hallo! Kommen Sie rein. Alles, was Sie sehen, ist von heute. Wie kann ich dienen?"
            ],
            order: [
                "Gerne! Eine sehr schmackhafte Wahl. Das sind tagesfrische Produkte. Noch etwas?", 
                "Perfekt, wie viele Kilo soll ich Ihnen in die Tüte packen? 🍎",
                "Sehr gut, ich bereite das sofort vor. Möchten Sie auch etwas Gemüse dazu?",
                "Ausgezeichnet! Diese Orangen haben viel Vitamin C. Darf es ein halbes Dutzend sein?",
                "Notiert! Ich wiege Ihnen sofort die Weintrauben ab. Brauchen Sie noch eine Tüte?",
                "Und eine frische Bestellung, kommt sofort! Möchten Sie auch unsere Tomaten sehen?"
            ],
            question: [
                "Die Äpfel kosten heute 2 Euro pro Kilo. Möchten Sie ein paar zum Probieren?", 
                "Heute haben wir unglaubliche Angebote für alle saisonalen Gemüse. Möchten Sie mal schauen?",
                "Ja, diese Weintrauben sind kernlos, sie sind perfekt für Kinder. Interesse?",
                "Natürlich, der Fisch kommt morgen früh, heute haben wir nur das, was Sie hier sehen.",
                "In der Tat, alle unsere Waren sind ökologisch und lokal. Was sagen Sie dazu?",
                "Der Preis für Tomaten? Sie liegen bei 1,50 Euro das Kilo, das ist ein Schnäppchen!"
            ],
            thanks: [
                "Danke Ihnen! Genießen Sie Ihre frischen Produkte. 🐢", 
                "Gern geschehen! Kommen Sie morgen wieder, wir haben dann ganz frisch geerntetes Obst. 😊",
                "Vielen Dank auch an Sie! Es ist eine Freude, so entschlossene Kunden zu sehen.",
                "Nichts zu danken! Viel Freude mit den Waren und einen schönen Tag.",
                "Danke für Ihren Besuch! Der Markt ist Ihr Zuhause."
            ],
            farewell: [
                "Auf Wiedersehen! Einen produktiven Einkaufstag noch auf dem Markt. 🐢", 
                "Bis bald! Kommen Sie bald wieder vorbei, der Markt erwartet Sie mit offenen Armen.",
                "Tschüss! Ich hoffe, Ihnen schmeckt unser Gemüse sehr.",
                "Man sieht sich! Vergessen Sie nicht, am Blumenstand vorbeizuschauen, bevor Sie gehen.",
                "Alles Gute für Sie! Bis zur nächsten Woche!"
            ],
            agree: [
                "Natürlich! Das ist eine der besten Wahlen, die Sie heute treffen können.", 
                "Perfekt! Ich packe es Ihnen sofort in die Tüte. Noch etwas?",
                "Wunderbar! Sie werden es nicht bereuen, dieses Produkt mitzunehmen.",
                "Sehr gut! Ich werde es sofort abwiegen.",
                "Kein Problem! Hier ist Ihre Bestellung."
            ],
            describe: [
                "Ich verstehe, Sie suchen vor allem Qualität. Hier haben wir das Beste vom Markt.", 
                "Sehr gut durchdacht. Sollen sie alle die gleiche Größe haben oder gemischt sein?",
                "Ich verstehe Ihren Bedarf. Lassen Sie mich die reifsten Stücke für Sie aussuchen.",
                "Interessant... Suchen Sie etwas zum Kochen für heute oder für die ganze Woche?",
                "Alles klar, ich weiß jetzt, was Sie wollen. Erlauben Sie mir, es für Sie auszuwählen."
            ],
            statement: [
                "Sehr gute Beobachtung. Möchten Sie ein Stück von dieser Frucht probieren? 🐢", 
                "Der Markt ist zweifellos der beste Ort, um Deutsch zu üben. Was brauchen Sie noch?",
                "Völlig einverstanden. Frische ist lebenswichtig. Darf es noch etwas sein?",
                "Interessanter Standpunkt. Suchen Sie noch ein anderes saisonales Produkt?",
                "Ach was! Man merkt, dass Sie etwas von guten Produkten verstehen. Was darf es jetzt sein?"
            ],
        },
    },
    airport: {
        es: {
            greeting: [
                "¡Hola! Bienvenido al mostrador de facturación. ¿Su pasaporte y billete, por favor? ✈️", 
                "¡Buen día! ¿A qué destino viaja usted hoy? Espero que tenga un gran vuelo. 🐢",
                "¡Hola! ¿Viene a facturar maletas o ya tiene su tarjeta de embarque online?",
                "¡Buenas! Bienvenido a la terminal. ¿En qué puedo ayudarle con su viaje?",
                "¡Hola! ¿Viaja por placer o por negocios en esta ocasión?",
                "¡Muy buenas! ¿Lleva algún artículo prohibido en su equipaje de mano?"
            ],
            order: [
                "Muy bien, todo en orden. Aquí tiene su tarjeta de embarque. ¡Tenga un excelente vuelo!", 
                "Perfecto, su maleta está dentro del peso permitido. ¿Desea facturar algo más?",
                "¡Hecho! Le he asignado un asiento en la ventana, como solicitó. Disfrute las vistas. 🌤️",
                "Aquí tiene su resguardo de equipaje. Su puerta de embarque se anunciará en breve.",
                "¡Genial! Ya está todo listo. Puede pasar por el control de seguridad cuando guste.",
                "Excelente, su vuelo está confirmado y a tiempo. ¿Algo más que necesite?"
            ],
            question: [
                "Su puerta de embarque es la B12. Está a unos diez minutos caminando desde aquí.", 
                "El vuelo tiene prevista su salida a las diez en punto. ¿Necesita saber algo más?",
                "Sí, hay una zona de restauración justo después del control de pasaportes. ¿Le interesa?",
                "El límite de peso para el equipaje de mano es de 10 kilos. ¿Quiere que lo pesemos?",
                "La oficina de objetos perdidos está en la planta baja, cerca de la salida principal.",
                "Claro, el Wi-Fi del aeropuerto es gratuito por tiempo limitado. ¿Quiere la contraseña?"
            ],
            thanks: [
                "¡De nada! ¡Tenga un excelente vuelo y disfrute del viaje! 🐢", 
                "¡Gracias a usted! Esperamos verle de nuevo pronto por nuestra aerolínea. 😊",
                "¡No hay de qué! Es un placer ayudar a los viajeros. ¡Buen viaje!",
                "¡A usted! ¡Qué tenga una estancia maravillosa en su destino!",
                "¡Un placer! ¡Que el vuelo se le pase volando!"
            ],
            farewell: [
                "¡Adiós! ¡Nos vemos en el próximo vuelo! ¡Mucha suerte! 🐢", 
                "¡Buen viaje! ¡Hasta pronto y que todo vaya fenomenal!",
                "¡Hasta la vista! No olvide sus pertenencias en el mostrador.",
                "¡Chao! Disfrute de su destino, es una ciudad preciosa.",
                "¡Que tenga un vuelo muy tranquilo! ¡Hasta la próxima!"
            ],
            agree: [
                "¡Claro que sí! Todo está perfectamente en orden con su documentación.", 
                "¡Perfecto! Procedemos entonces con el embarque. ¿Alguna duda más?",
                "¡Muy bien! Me parece la mejor opción para su viaje.",
                "¡Sin problemas! Enseguida actualizo sus datos de viajero frecuente.",
                "¡Excelente! Todo listo para que pueda despegar."
            ],
            describe: [
                "Entiendo. Es un viaje bastante largo, ¿verdad? Asegúrese de descansar.", 
                "Muy bien. Aquí tiene toda la información necesaria para su conexión en el próximo aeropuerto.",
                "Comprendo su situación. Vamos a ver cómo podemos agilizar su proceso.",
                "Ya veo, viaja con la familia. ¿Necesitan algún servicio de asistencia especial?",
                "Vale, anotado. Es importante tener claras las escalas del viaje."
            ],
            statement: [
                "Interesante. ¿Ha viajado antes con nuestra compañía o es su primera vez?", 
                "El aeropuerto es muy grande, pero con Shelldon es imposible perderse. ¿Tiene todo listo?",
                "Muy buena observación sobre los horarios. ¿Quiere confirmar algo más?",
                "Entiendo perfectamente. Viajar abre la mente, ¿no cree?",
                "¡Vaya! Parece que tiene mucha experiencia viajando. ¿Cuál es su próximo destino?"
            ],
        },
        en: {
            greeting: [
                "Welcome to the airport! Where are you flying to today? ✈️", 
                "Hi there! Do you have your boarding pass and passport ready? 🐢",
                "Good morning! Welcome to the terminal. Are you traveling for business or pleasure?",
                "Hi! Need help finding your check-in counter or the security gate?",
                "Hello! Welcome! I hope you're excited about your trip. Which gate is your flight?",
                "Welcome! Is this your first time flying from this airport?"
            ],
            order: [
                "Of course! Check-in for your flight opens in about an hour.", 
                "Perfect, please place your luggage on the belt for weighing. 🐢",
                "Got it! I've marked your seat as a window seat as requested.",
                "Certainly! I'll print out your boarding pass and luggage tags right now.",
                "Great! I've noted down your special meal request for the flight.",
                "Noted! I'll help you find the fastest way to your boarding gate."
            ],
            question: [
                "Do you know if your flight departs from Gate A or Gate B today?", 
                "Would you like to know if there are any delays for your departure?",
                "Do you have any liquid items in your carry-on luggage that we should check?",
                "Are you interested in upgrading your seat to premium economy?",
                "Would you like to know where the duty-free shops and lounges are located?",
                "Of course! Would you like to check the latest flight status on the board?"
            ],
            thanks: [
                "You're welcome! Have an excellent flight and a safe trip! 🐢", 
                "Thank you! It's our pleasure to help you start your journey. 😊",
                "No problem at all! I'm glad we could get your check-in sorted quickly.",
                "You're very welcome! We hope you have a wonderful time at your destination.",
                "The pleasure was mine! Have a smooth journey and see you again soon."
            ],
            farewell: [
                "Goodbye! Enjoy your trip and have a safe flight! ✈️", 
                "See you later! Don't forget any of your belongings at the gate! 🐢",
                "Bye for now! I hope you arrive exactly on time and have a great stay.",
                "Take care! It was a pleasure assisting you with your travel today.",
                "Have a wonderful journey! Goodbye!"
            ],
            agree: [
                "Of course! Everything is in order for your departure today.", 
                "Perfect! We'll make sure your luggage is handled with care. 🐢",
                "Awesome! I'm glad your travel arrangements are all set.",
                "Very well! I'll add those details to your flight record right now.",
                "Of course! We strive to make your airport experience as smooth as possible."
            ],
            describe: [
                "I understand, you're traveling for work and need a quick transition.", 
                "Alright, I see. You're visiting family abroad? That's wonderful!",
                "I understand. You want a seat near the exit for extra legroom?",
                "Noted. Traveling can be stressful, but we're here to help you through it.",
                "I see. Thank you for sharing your travel plans with me."
            ],
            statement: [
                "Very well. Any other business before you board your flight? ✈️", 
                "Understood. Traveling with Shelldon is always a first-class experience. 🐢",
                "Well noted. The airport is quite busy today, isn't it?",
                "I see. I always find the atmosphere of airports very exciting, don't you?",
                "Wow! You've been to many countries. Which one was your favorite?"
            ],
        },
        fr: {
            greeting: [
                "Bonjour ! Bienvenue au comptoir d'enregistrement. Votre passeport et votre billet, s'il vous plaît ? ✈️", 
                "Salut ! Pour quelle destination voyagez-vous aujourd'hui ? J'espère que vous ferez un excellent vol. 🐢",
                "Bonjour ! Vous venez enregistrer des bagages ou vous avez déjà votre carte d'embarquement ?",
                "Bienvenue au terminal ! Comment puis-je vous aider pour votre voyage ?",
                "Salut ! Vous voyagez pour le plaisir ou pour les affaires cette fois-ci ?",
                "Bonjour ! Avez-vous des articles interdits dans votre bagage à main ?"
            ],
            order: [
                "Très bien, tout est en ordre. Voici votre carte d'embarquement. Bon vol !", 
                "Parfait, votre valise respecte le poids autorisé. Voulez-vous enregistrer autre chose ?",
                "Et voilà ! Je vous ai attribué un siège côté hublot, comme demandé. Profitez de la vue. 🌤️",
                "Voici votre reçu de bagage. Votre porte d'embarquement sera annoncée bientôt.",
                "Génial ! Tout est prêt. Vous pouvez passer le contrôle de sécurité quand vous voulez.",
                "Excellent, votre vol est confirmé et à l'heure. Autre chose ?"
            ],
            question: [
                "Votre porte d'embarquement est la B12. C'est à environ dix minutes à pied d'ici.", 
                "Le vol est prévu à dix heures pile. Avez-vous besoin d'autre chose ?",
                "Oui, il y a une zone de restauration juste après le contrôle des passeports. Ça vous intéresse ?",
                "La limite de poids pour le bagage à main est de 10 kilos. Voulez-vous qu'on le pèse ?",
                "Le bureau des objets trouvés est au rez-de-chaussée, près de la sortie principale.",
                "Bien sûr, le Wi-Fi de l'aéroport est gratuit pendant un temps limité. Vous voulez le mot de passe ?"
            ],
            thanks: [
                "De rien ! Faites un excellent vol et profitez bien du voyage ! 🐢", 
                "Merci à vous ! Nous espérons vous revoir bientôt sur notre compagnie. 😊",
                "Il n'y a pas de quoi ! C'est un plaisir d'aider les voyageurs. Bon voyage !",
                "C'est moi qui vous remercie ! Passez un séjour merveilleux à votre destination !",
                "Tout le plaisir est pour moi ! Que le vol vous semble court !"
            ],
            farewell: [
                "Au revoir ! On se voit au prochain vol ! Bonne chance ! 🐢", 
                "Bon voyage ! À bientôt et j'espère que tout se passera bien !",
                "À la revoyure ! N'oubliez pas vos affaires sur le comptoir.",
                "Salut ! Profitez bien de votre destination, c'est une ville magnifique.",
                "Bon vol à vous ! À la prochaine !"
            ],
            agree: [
                "Bien sûr ! Tout est parfaitement en règle avec vos documents.", 
                "Parfait ! On procède donc à l'embarquement. D'autres questions ?",
                "Très bien ! C'est la meilleure option pour votre voyage, je pense.",
                "Pas de problème ! Je mets à jour vos données de voyageur fréquent immédiatement.",
                "Excellent ! Tout est prêt pour le décollage."
            ],
            describe: [
                "Je comprends. C'est un long voyage, n'est-ce pas ? Pensez à vous reposer.", 
                "Très bien. Voici toutes les informations nécessaires pour votre correspondance au prochain aéroport.",
                "Je comprends votre situation. Voyons comment nous pouvons accélérer le processus.",
                "Je vois, vous voyagez en famille. Avez-vous besoin d'un service d'assistance spécial ?",
                "D'accord, c'est noté. Il est important d'avoir les escales bien claires."
            ],
            statement: [
                "Intéressant. Avez-vous déjà voyagé avec notre compagnie ou est-ce la première fois ?", 
                "L'aéroport est immense, mais avec Shelldon, impossible de se perdre. Tout est prêt ?",
                "Très bonne observation sur les horaires. Voulez-vous confirmer autre chose ?",
                "Je comprends parfaitement. Voyager ouvre l'esprit, vous ne trouvez pas ?",
                "Saperlipopette ! On voit que vous avez l'habitude de voyager. Quelle est votre prochaine destination ?"
            ],
        },
        de: {
            greeting: [
                "Hallo! Willkommen am Check-in-Schalter. Ihren Reisepass und das Ticket, bitte? ✈️", 
                "Guten Tag! Wohin reisen Sie heute? Ich hoffe, Sie haben einen tollen Flug. 🐢",
                "Hallo! Kommen Sie zum Kofferaufgeben oder haben Sie schon Ihre Online-Bordkarte?",
                "Guten Tag! Willkommen am Terminal. Wie kann ich Ihnen bei Ihrer Reise helfen?",
                "Hallo! Reisen Sie diesmal privat oder geschäftlich?",
                "Guten Tag! Führen Sie verbotene Gegenstände in Ihrem Handgepäck mit?"
            ],
            order: [
                "Sehr gut, alles in Ordnung. Hier ist Ihre Bordkarte. Guten Flug!", 
                "Perfekt, Ihr Koffer liegt innerhalb des erlaubten Gewichts. Möchten Sie noch etwas aufgeben?",
                "Erledigt! Ich habe Ihnen einen Fensterplatz zugewiesen, wie gewünscht. Viel Spaß! 🌤️",
                "Hier ist Ihr Gepäckschein. Ihr Gate wird in Kürze bekannt gegeben.",
                "Klasse! Alles ist fertig. Sie können jederzeit zur Sicherheitskontrolle gehen.",
                "Ausgezeichnet, Ihr Flug ist bestätigt und pünktlich. Brauchen Sie noch etwas?"
            ],
            question: [
                "Ihr Gate ist B12. Es ist etwa zehn Minuten zu Fuß von hier entfernt.", 
                "Der Flug soll pünktlich um zehn Uhr starten. Möchten Sie noch etwas wissen?",
                "Ja, es gibt einen Gastronomiebereich direkt nach der Passkontrolle. Interesse?",
                "Die Gewichtsgrenze für Handgepäck beträgt 10 Kilo. Sollen wir es wiegen?",
                "Das Fundbüro befindet sich im Erdgeschoss, in der Nähe des Haupteingangs.",
                "Klar, das Flughafen-WLAN ist zeitlich begrenzt kostenlos. Möchten Sie das Passwort?"
            ],
            thanks: [
                "Gern geschehen! Haben Sie einen ausgezeichneten Flug und genießen Sie die Reise! 🐢", 
                "Danke Ihnen! Wir hoffen, Sie bald wieder bei unserer Fluggesellschaft zu sehen. 😊",
                "Nichts zu danken! Es ist ein Vergnügen, Reisenden zu helfen. Guten Flug!",
                "Sehr gerne! Kommen Sie gut an Ihr Ziel und bis zum nächsten Mal.",
                "Gern geschehen! Bei Fragen zum Flughafen bin ich gerne für Sie da."
            ],
            farewell: [
                "Auf Wiedersehen! Wir wünschen Ihnen eine sichere Reise und eine gute Ankunft! ✈️", 
                "Tschüss! Wir sehen uns hoffentlich bald wieder hier am Flughafen. Guten Flug!",
                "Check-in beendet! Genießen Sie Ihren Aufenthalt im Duty-Free-Bereich.",
                "Mach's gut! Einen wunderbaren Aufenthalt an Ihrem Zielort.",
                "Alles Gute! Bis bald am Terminal."
            ],
            agree: [
                "Natürlich! Alles ist perfekt für Ihren Abflug heute vorbereitet.", 
                "Perfekt! Wir freuen uns sehr, Sie als Fluggast in unserer Maschine zu haben.",
                "Gerne! Ich habe alle Details Ihrer Reise in unserem System aktualisiert.",
                "Sehr gut! Das ist ein sehr bequemer Platz für einen langen Flug.",
                "Kein Problem! Das ist bereits für Sie in der Buchung vermerkt."
            ],
            describe: [
                "Ich verstehe, Sie sind zum ersten Mal an diesem Flughafen, oder? Es ist sehr einfach.", 
                "Alles klar. Der Flughafen ist sehr gut ausgeschildert, Sie werden sich nicht verlaufen.",
                "Ich verstehe Ihren Punkt. Wir tun alles, damit Ihre Reise so entspannt wie möglich ist.",
                "In Ordnung, notiert. Wir werden uns um die Details für Ihr Sondergepäck kümmern.",
                "Ich sehe. Danke für die Informationen zu Ihren Reisevorlieben."
            ],
            statement: [
                "Interessant. Haben Sie noch eine spezielle Bitte, um Ihren Flug zu verbessern?", 
                "Reisen mit Shelldon ist der schnellste Weg zum Gate. Brauchen Sie noch etwas? 🐢",
                "Sehr gute Beobachtung. Möchten Sie, dass ich ein anderes Detail bestätige?",
                "Verstanden. Kundenzufriedenheit ist am Flughafen unsere oberste Priorität.",
                "Ach was! Wir lieben es, wenn Reisende ihre Abenteuer mit uns teilen. Noch etwas?"
            ],
        },
    },
    doctor: {
        es: {
            greeting: [
                "Hola, soy el Dr. Shelldon. ¿Qué síntomas tiene hoy? 🏥", 
                "¡Buen día! Pase por aquí, por favor. ¿En qué puedo ayudarle a mejorar su salud? 🐢",
                "¡Hola! Dígame, ¿se siente bien o hay algo que le preocupe?",
                "¡Muy buenas! ¿Viene por un chequeo general o tiene alguna molestia específica?",
                "¡Hola! Tome asiento. Cuénteme con detalle qué es lo que le pasa.",
                "¡Buenas! Espero que no sea nada grave. ¿Cómo se encuentra?"
            ],
            order: [
                "Le recetaré este medicamento para el dolor. Tómelo dos veces al día después de las comidas.", 
                "Perfecto, lo más importante ahora es que descanse mucho y beba abundante agua.",
                "Muy bien, aquí tiene su receta médica. Siga las instrucciones al pie de la letra. 💊",
                "¡Anotado! También le pediré unos análisis de sangre para estar totalmente seguros.",
                "Entendido. Vamos a empezar con este tratamiento y veremos cómo evoluciona en una semana.",
                "Claro, guarde reposo absoluto durante los próximos tres días. Es vital para su recuperación."
            ],
            question: [
                "¿Le duele la cabeza de forma constante o tiene también un poco de fiebre?", 
                "¿Desde cuándo se siente así exactamente? ¿Ha sido algo gradual o repentino?",
                "¿Tiene alguna alergia conocida a algún medicamento que deba saber?",
                "¿Ha estado en contacto con alguien enfermo recientemente en su entorno?",
                "Ese dolor que menciona... ¿es agudo o más bien una presión constante?",
                "¿Ha tomado ya algún medicamento por su cuenta antes de venir a la consulta?"
            ],
            thanks: [
                "¡De nada! ¡Espero de corazón que se mejore muy pronto! 🐢", 
                "¡Cuídese mucho y siga mis consejos! Si nota algún cambio, vuelva a verme pronto. 😊",
                "¡A usted las gracias por confiar en mí! La salud es lo primordial.",
                "¡No hay de qué! Para eso estamos los médicos. ¡Que tenga un buen día!",
                "¡Un placer! Ya verá cómo en unos días se siente mucho mejor."
            ],
            farewell: [
                "¡Adiós! ¡Espero que la próxima vez que nos veamos esté totalmente recuperado! 🐢", 
                "¡Cuídese mucho! ¡Hasta la próxima y no olvide tomar su medicina!",
                "¡Hasta pronto! Espero noticias positivas sobre su estado de salud.",
                "¡Chao! Vaya con cuidado y descanse lo que el cuerpo le pida.",
                "¡Que tenga una pronta recuperación! ¡Adiós!"
            ],
            agree: [
                "¡Claro que sí! Es una de las mejores elecciones que puede hacer hoy.", 
                "¡Perfecto! No se preocupe de más, es algo común y tiene fácil solución.",
                "¡Estupendo! Me alegra que esté de acuerdo con el plan de tratamiento.",
                "¡Muy bien! Confío en que se sentirá mejor muy pronto siguiendo estos pasos.",
                "¡Sin problemas! Vamos a proceder de esa manera entonces."
            ],
            describe: [
                "Entiendo, parece ser un resfriado común debido al cambio de tiempo.", 
                "Muy bien. Vamos a hacerle un chequeo rápido para descartar cualquier otra cosa.",
                "Comprendo perfectamente lo que siente. No es algo agradable, pero se pasará.",
                "Vale, anotado. Esos síntomas son muy claros. Vamos a ponerles remedio.",
                "Ya veo. Gracias por ser tan específico, eso me ayuda mucho con el diagnóstico."
            ],
            statement: [
                "Muy bien. ¿Tiene alguna otra molestia o síntoma que quiera mencionar ahora?", 
                "La salud es lo primero, siempre hay que estar atentos a las señales del cuerpo. 🐢",
                "Interesante lo que comenta. ¿Lleva un estilo de vida activo o es más bien sedentario?",
                "Entiendo. ¿Ha tenido problemas similares en el pasado o es la primera vez?",
                "¡Vaya! El cuerpo humano es fascinante. ¿En qué más le puedo ayudar hoy?"
            ],
        },
        en: {
            greeting: [
                "Hello! What brings you to my office today? How are you feeling? 🩺", 
                "Hi there! Please come in and take a seat. How can I help you today? 🐢",
                "Good morning! I'm here to listen. What symptoms have you been having?",
                "Hi! Welcome. When did you first start feeling this way?",
                "Hello! I hope we can get you back on your feet quickly. What's the concern?",
                "Welcome! Have you been to our clinic before for this issue?"
            ],
            order: [
                "Of course! Here is the prescription for your treatment. Get plenty of rest.", 
                "Perfect, let's run a quick blood test just to be absolutely sure. 🐢",
                "Got it! I've noted down your allergies. Let's find an alternative medicine.",
                "Certainly! I'll refer you to a specialist for a more detailed examination.",
                "Great! I've scheduled your follow-up appointment for next Tuesday.",
                "Noted! I'll give you some advice on how to manage the pain at home."
            ],
            question: [
                "Have you been having these symptoms for a long time now?", 
                "Do you feel any pain when you breathe deeply or when you move?",
                "Have you recently traveled abroad or been in contact with anyone sick?",
                "Are you currently taking any other medications that I should know about?",
                "Would you like me to explain how this treatment works in more detail?",
                "Of course! Would you like to know the results of your latest check-up?"
            ],
            thanks: [
                "You're welcome! I hope you feel much better very soon! 🐢", 
                "Thank you! It's my priority to help you recover as fast as possible. 😊",
                "No problem at all! I'm glad we could identify the cause of the problem.",
                "You're very welcome! Don't hesitate to call if your symptoms worsen.",
                "The pleasure was mine! Take good care of yourself and stay healthy."
            ],
            farewell: [
                "Goodbye! Take good care of yourself and get well soon! 🩺", 
                "See you later! Don't forget to take your medicine on time! 🐢",
                "Bye for now! I hope you find the treatment effective. Take care!",
                "Have a wonderful day! We're here whenever you have health concerns.",
                "Stay healthy! Goodbye!"
            ],
            agree: [
                "Of course! It's absolutely fundamental that you follow these instructions.", 
                "Perfect! We'll make sure you have all the support you need during recovery. 🐢",
                "Awesome! I'm glad you're committed to improving your health habits.",
                "Very well! I'll add this information to your medical history right now.",
                "Of course! We strive to provide the most compassionate care possible."
            ],
            describe: [
                "I understand, you have a slight fever and a bit of a cough today.", 
                "Alright, I see. You've been feeling quite tired lately, I assume?",
                "I understand. You want a natural way to improve your immune system?",
                "Noted. Health is a journey, and we're here to walk it with you.",
                "I see. Thank you for sharing your symptoms so clearly with me."
            ],
            statement: [
                "Very well. Any other concerns about your health today? 🩺", 
                "Understood. Consulting with Shelldon is the first step to feeling better. 🐢",
                "Well noted. Would you like me to check if this is covered by your plan?",
                "I see. Many patients find that resting is the best way to heal.",
                "Wow! You're really attentive to your body's signals. Any other questions?"
            ],
        },
        fr: {
            greeting: [
                "Bonjour, je suis le Dr Shelldon. Quels symptômes avez-vous aujourd'hui ? 🏥", 
                "Salut ! Entrez, je vous en prie. Comment puis-je vous aider à aller mieux ? 🐢",
                "Bonjour ! Dites-moi, vous vous sentez bien ou quelque chose vous inquiète ?",
                "Salut ! Vous venez pour un bilan général ou vous avez une douleur précise ?",
                "Bonjour ! Asseyez-vous. Racontez-moi en détail ce qui vous arrive.",
                "Salut ! J'espère que ce n'est rien de grave. Comment vous sentez-vous ?"
            ],
            order: [
                "Je vous prescris ce médicament pour la douleur. À prendre deux fois par jour après le repas.", 
                "Parfait, le plus important maintenant est de vous reposer et de boire beaucoup d'eau.",
                "Très bien, voici votre ordonnance médicale. Suivez bien les instructions. 💊",
                "C'est noté ! Je vais aussi vous demander des analyses de sang pour être bien sûr.",
                "Entendu. Nous allons commencer ce traitement et on verra l'évolution dans une semaine.",
                "Bien sûr, reposez-vous bien pendant les trois prochains jours. C'est vital pour guérir."
            ],
            question: [
                "Avez-vous mal à la tête ou avez-vous aussi un peu de fièvre ?", 
                "Depuis quand vous sentez-vous comme ça exactement ? C'est venu d'un coup ?",
                "Avez-vous des allergies connues à certains médicaments ?",
                "Avez-vous été en contact avec quelqu'oui de malade récemment ?",
                "Cette douleur... est-elle aiguë ou plutôt comme une pression constante ?",
                "Avez-vous déjà pris des médicaments avant de venir à la consultation ?"
            ],
            thanks: [
                "De rien ! J'espère de tout cœur que vous irez mieux très bientôt ! 🐢", 
                "Prenez soin de vous et suivez mes conseils ! Si ça change, revenez me voir. 😊",
                "Merci à vous de me faire confiance ! La santé est le plus important.",
                "Il n'y a pas de quoi ! On est là pour ça. Passez une bonne journée !",
                "Tout le plaisir est pour moi ! Vous verrez, dans quelques jours vous irez mieux."
            ],
            farewell: [
                "Au revoir ! J'espère que la prochaine fois, vous serez totalement rétabli ! 🐢", 
                "Prenez soin de vous ! À la prochaine et n'oubliez pas vos médicaments !",
                "À bientôt ! J'attends des nouvelles positives de votre état de santé.",
                "Salut ! Reposez-vous bien, votre corps en a besoin.",
                "Bon rétablissement à vous ! Au revoir !"
            ],
            agree: [
                "Bien sûr ! C'est l'un des meilleurs choix que vous puissiez faire aujourd'hui.", 
                "Parfait ! Ne vous inquiétez pas trop, c'est courant et facile à soigner.",
                "Génial ! Je suis content que vous soyez d'accord avec le traitement.",
                "Très bien ! I'm sûr que vous irez mieux en suivant ces étapes.",
                "Pas de problème ! On va procéder comme ça alors."
            ],
            describe: [
                "Je comprends, ça ressemble à un simple rhume à cause du changement de temps.", 
                "Très bien. On va faire un petit contrôle rapide pour écarter tout le reste.",
                "Je comprends parfaitement ce que vous ressentez. Ce n'est pas agréable du tout.",
                "D'accord, c'est noté. Ces symptômes sont clairs. On va soigner ça.",
                "Je vois. Merci d'être aussi précis, ça m'aide beaucoup pour le diagnostic."
            ],
            statement: [
                "D'accord. Avez-vous d'autres douleurs ou symptômes à mentionner ?", 
                "La santé avant tout, il faut toujours écouter son corps. 🐢",
                "C'est intéressant. Avez-vous un mode de vie actif ou plutôt sédentaire ?",
                "Je vois. Avez-vous déjà eu des problèmes similaires par le passé ?",
                "Saperlipopette ! Le corps humain est fascinant. Autre chose pour aujourd'hui ?"
            ],
        },
        de: {
            greeting: [
                "Hallo, ich bin Dr. Shelldon. Was fehlt Ihnen heute? 🏥", 
                "Guten Tag! Kommen Sie bitte herein. Wie kann ich Ihnen helfen, gesund zu werden? 🐢",
                "Hallo! Erzählen Sie mir, fühlen Sie sich gut oder macht Ihnen etwas Sorgen?",
                "Guten Tag! Kommen Sie für einen allgemeinen Check-up oder haben Sie akute Schmerzen?",
                "Hallo! Setzen Sie sich. Berichten Sie mir bitte im Detail, was passiert ist.",
                "Hi! Ich hoffe, es ist nichts Ernstes. Wie fühlen Sie sich?"
            ],
            order: [
                "Ich verschreibe Ihnen dieses Medikament gegen die Schmerzen. Zweimal täglich nach dem Essen einnehmen.", 
                "Perfekt, das Wichtigste ist jetzt, dass Sie sich ausruhen und viel Wasser trinken.",
                "Sehr gut, hier ist Ihr ärztliches Rezept. Folgen Sie bitte genau den Anweisungen. 💊",
                "Notiert! Ich werde auch eine Blutuntersuchung anfordern, um ganz sicherzugehen.",
                "Verstanden. Wir beginnen mit dieser Behandlung und sehen uns in einer Woche zur Kontrolle.",
                "Natürlich, ruhen Sie sich die nächsten drei Tage gut aus. Das ist wichtig für die Heilung."
            ],
            question: [
                "Haben Sie Kopfschmerzen oder haben Sie auch ein bisschen Fieber?", 
                "Seit wann genau fühlen Sie sich so? Kam das ganz plötzlich?",
                "Haben Sie bekannte Allergien gegen bestimmte Medikamente?",
                "Hatten Sie in letzter Zeit Kontakt zu anderen kranken Personen?",
                "Dieser Schmerz... ist er stechend oder eher ein konstanter Druck?",
                "Haben Sie bereits Medikamente eingenommen, bevor Sie zur Untersuchung kamen?"
            ],
            thanks: [
                "Gern geschehen! Ich hoffe von ganzem Herzen, dass es Ihnen bald besser geht! 🐢", 
                "Passen Sie auf sich auf und folgen Sie meinem Rat! Wenn es sich verschlechtert, kommen Sie wieder. 😊",
                "Vielen Dank für Ihr Vertrauen! Die Gesundheit ist das wichtigste Gut.",
                "Nichts zu danken! Dafür sind wir da. Ich wünsche Ihnen einen guten Tag!",
                "Sehr gerne! Sie werden sehen, in ein paar Tagen geht es Ihnen schon viel besser."
            ],
            farewell: [
                "Auf Wiedersehen! Ich hoffe, beim nächsten Mal sind Sie wieder völlig gesund! 🐢", 
                "Passen Sie auf sich auf! Bis zum nächsten Mal und vergessen Sie Ihre Medizin nicht!",
                "Bis bald! Ich erwarte positive Nachrichten über Ihren Gesundheitszustand.",
                "Tschüss! Ruhen Sie sich gut aus, Ihr Körper braucht die Erholung jetzt.",
                "Gute Besserung! Auf Wiedersehen!"
            ],
            agree: [
                "Natürlich! Das ist eine der besten Entscheidungen, die Sie heute treffen können.", 
                "Perfekt! Machen Sie sich nicht zu viele Sorgen, das ist gut heilbar.",
                "Klasse! Ich freue mich, dass Sie mit der Behandlung einverstanden sind.",
                "Sehr gut! Ich bin sicher, dass es Ihnen mit diesen Schritten bald besser geht.",
                "Kein Problem! Wir werden dann genau so vorgehen."
            ],
            describe: [
                "Ich verstehe, das klingt nach einer einfachen Erkältung wegen des Wetterumschwungs.", 
                "Sehr gut. Wir machen eine kurze Untersuchung, um alles andere auszuschließen.",
                "Ich verstehe vollkommen, wie Sie sich fühlen. Das ist wirklich unangenehm.",
                "Alles klar, notiert. Diese Symptome sind recht eindeutig. Wir kriegen das hin.",
                "Ich sehe. Danke, dass Sie so präzise sind, das hilft mir sehr bei der Diagnose."
            ],
            statement: [
                "Alles klar. Haben Sie noch andere Schmerzen oder Symptome, die ich wissen sollte?", 
                "Die Gesundheit geht vor, man sollte immer auf seinen Körper hören. 🐢",
                "Das ist interessant. Haben Sie einen aktiven Lebensstil oder eher sitzend?",
                "Ich verstehe. Hatten Sie in der Vergangenheit schon einmal ähnliche Probleme?",
                "Ach was! Der menschliche Körper ist faszinierend. Sonst noch etwas für heute?"
            ],
        },
    },
    hotel: {
        es: {
            greeting: [
                "¡Bienvenido al Hotel Shelldon! ¿Tiene usted una reserva a su nombre? 🏨", 
                "¡Hola! ¿En qué puedo ayudarle hoy en nuestra recepción? Es un placer recibirle. 🐢",
                "¡Buenas tardes! Bienvenido a nuestro hotel. ¿Ha tenido un buen viaje hasta aquí?",
                "¡Hola, hola! ¿Busca una habitación para hoy o prefiere información sobre nuestras tarifas?",
                "¡Bienvenido! ¿Viene a hacer el check-in o necesita dejar sus maletas en consigna?",
                "¡Muy buenas! ¿Cómo podemos hacer que su estancia sea perfecta hoy?"
            ],
            order: [
                "¡Claro que sí! Una habitación doble con vistas al mar. Aquí tiene su llave electrónica.", 
                "Perfecto, le recuerdo que el desayuno se sirve de 7 a 10 de la mañana en el salón principal.",
                "¡Hecho! He actualizado su reserva para incluir el servicio de media pensión. 🍳",
                "Aquí tiene su tarjeta. El botones le ayudará con su equipaje si lo desea.",
                "¡Estupendo! Su habitación ya está lista, es la número 305 en la tercera planta.",
                "Muy bien, pedido anotado. Le enviaremos las toallas extra a su habitación enseguida."
            ],
            question: [
                "¿Desea una habitación individual para una persona o prefiere una doble?", 
                "¿A qué hora tiene pensado hacer el check-out mañana por la mañana?",
                "¿Necesita una plaza de aparcamiento en nuestro garaje privado durante su estancia?",
                "¿Le interesaría conocer las opciones de ocio y excursiones que ofrece el hotel?",
                "¿Tiene alguna alergia alimentaria que debamos comunicar al servicio de cocina?",
                "Claro, ¿quiere que le despierte a alguna hora en concreto mañana?"
            ],
            thanks: [
                "¡De nada! ¡Disfrute mucho de su estancia con nosotros! 🐢", 
                "¡Gracias a usted! Si necesita cualquier otra cosa, llame a recepción en cualquier momento. 😊",
                "¡A usted las gracias! Esperamos que se sienta como en su propia casa.",
                "¡No hay de qué! Estamos aquí para que su viaje sea inolvidable.",
                "¡Un placer! Que disfrute de las instalaciones del hotel."
            ],
            farewell: [
                "¡Adiós! ¡Que tenga un excelente viaje de vuelta a casa! 🐢", 
                "¡Hasta la vista! Esperamos volver a verle muy pronto por aquí. ¡Buen viaje!",
                "¡Chao! Vuelva cuando quiera, siempre será bienvenido en el Hotel Shelldon.",
                "¡Nos vemos! Gracias por elegirnos para su estancia en la ciudad.",
                "¡Que le vaya muy bien! ¡Hasta el próximo año!"
            ],
            agree: [
                "¡Claro que sí! Todo está perfectamente preparado para su llegada hoy.", 
                "¡Perfecto! Nos alegra mucho tenerle como huésped en nuestro establecimiento.",
                "¡Estupendo! Procedo a confirmar todos los detalles de su estancia ahora mismo.",
                "¡Muy bien! Me parece una elección magnífica para sus vacaciones.",
                "¡Sin problemas! Ya está todo anotado en su ficha de cliente."
            ],
            describe: [
                "Entiendo perfectamente. Es su primera vez en esta ciudad, ¿verdad? Le va a encantar.", 
                "Muy bien. El hotel es muy céntrico, así que tendrá todo a mano para explorar.",
                "Comprendo lo que busca. Queremos que su estancia sea lo más relajante posible.",
                "Vale, anotado. Es una ocasión especial, así que cuidaremos todos los detalles.",
                "Ya veo. Gracias por darnos esos detalles sobre sus preferencias de alojamiento."
            ],
            statement: [
                "Interesante. ¿Tiene alguna otra petición especial para que su estancia sea mejor?", 
                "El Hotel Shelldon es el más cómodo de la zona. ¿En qué más puedo ayudarle? 🐢",
                "Muy buena elección. ¿Quiere que le recomiende algún restaurante cercano?",
                "Comprendido. La comodidad de nuestros clientes es lo más importante para nosotros.",
                "¡Vaya! Nos encanta que nuestros huéspedes compartan sus historias. ¿Algo más?"
            ],
        },
        en: {
            greeting: [
                "Welcome to Hotel Shelldon! Do you have a reservation under your name? 🏨", 
                "Hi there! Would you like to check in or are you looking for information? 🐢",
                "Good afternoon! Welcome! Is it your first time staying with us?",
                "Hi! Please step forward. Do you have your booking confirmation ready?",
                "Hello! Welcome aboard! What can I do to make your stay more comfortable?",
                "Welcome! I hope you're ready for a relaxing experience in our hotel."
            ],
            order: [
                "Of course! Here is your key card. Your room is 302, on the third floor.", 
                "Perfect, breakfast is served from seven to ten in the main hall. ☕",
                "Got it! I've upgraded your room to a suite with a city view for free.",
                "Certainly! I'll arrange for a taxi to pick you up tomorrow morning at eight.",
                "Great! I've noted down your request for extra towels and pillows.",
                "Noted! I'll guide you to the elevators so you can find your room easily."
            ],
            question: [
                "Would you like a room with a sea view or do you prefer an interior one?", 
                "Do you know if you'll need a wake-up call for tomorrow morning?",
                "Are you interested in hearing about our pool and spa facilities?",
                "Would you like to know the best local restaurants within walking distance?",
                "Would you like me to book a table for you at our rooftop restaurant?",
                "Of course! Would you like to know our check-out time and procedures?"
            ],
            thanks: [
                "You're welcome! I hope you really enjoy your stay with us! 🐢", 
                "Thank you for choosing us! It's a pleasure to have you as our guest. 😊",
                "No problem at all! I'm glad we could accommodate your special requests.",
                "You're very welcome! We hope you have a wonderful time in our city.",
                "The pleasure was mine! Enjoy your room and have a great night."
            ],
            farewell: [
                "Goodbye! Have an excellent trip back and come see us again! 🏨", 
                "See you later! Don't forget any of your belongings in the room! 🐢",
                "Bye for now! It was a pleasure having you stay with us today.",
                "Take care! We hope your journey home is smooth and on time.",
                "Have a wonderful day! Goodbye!"
            ],
            agree: [
                "Of course! Everything is prepared for your arrival and comfort.", 
                "Perfect! We'll make sure your stay is as peaceful as possible. 🐢",
                "Awesome! I'm glad you're happy with your room and our facilities.",
                "Very well! I'll add those guest preferences to your profile now.",
                "Of course! We strive to provide the most secular hospitality experience."
            ],
            describe: [
                "I understand, you're looking for a quiet and relaxing stay.", 
                "Alright, I see. You're visiting the city for a special anniversary?",
                "I understand. You want a room with a desk because you're traveling for work?",
                "Noted. Staying with Shelldon is the most comfortable way to travel.",
                "I see. Thank you for sharing your stay preferences with me."
            ],
            statement: [
                "Very well. Any other requests for your stay with us today? 🏨", 
                "Understood. Hospitality with Shelldon is always top-notch. 🐢",
                "Well noted. The hotel is quite busy this weekend, isn't it?",
                "I see. I always find the view from our terrace very relaxing, don't you?",
                "Wow! You've stayed in many grand hotels. What do you think of ours?"
            ],
        },
        fr: {
            greeting: [
                "Bienvenue à l'Hôtel Shelldon ! Avez-vous une réservation à votre nom ? 🏨", 
                "Bonjour ! Comment puis-je vous aider à la réception ? C'est un plaisir de vous recevoir. 🐢",
                "Bon après-midi ! Bienvenue dans notre hôtel. Avez-vous fait bon voyage ?",
                "Salut, salut ! Vous cherchez une chambre pour aujourd'hui ou juste des tarifs ?",
                "Bienvenue ! Vous venez pour le check-in ou pour laisser vos bagages ?",
                "Bonjour ! Que pouvons-nous faire pour que votre séjour soit parfait ?"
            ],
            order: [
                "Bien sûr ! Une chambre double avec vue sur la mer. Voici votre clé électronique.", 
                "Parfait, je vous rappelle que le petit-déjeuner est servi de 7h à 10h au salon principal.",
                "Et voilà ! J'ai mis à jour votre réservation avec la demi-pension. 🍳",
                "Voici votre carte. Le bagagiste va vous aider avec vos valises si vous voulez.",
                "Génial ! Votre chambre est prête, c'est la numéro 305 au troisième étage.",
                "Très bien, c'est noté. On vous envoie les serviettes supplémentaires immédiatement."
            ],
            question: [
                "Voulez-vous une chambre simple pour une personne ou plutôt une double ?", 
                "À quelle heure pensez-vous faire le check-out demain matin ?",
                "Avez-vous besoin d'une place dans notre parking privé pendant votre séjour ?",
                "Seriez-vous intéressé par les excursions proposées par l'hôtel ?",
                "Avez-vous des allergies alimentaires que la cuisine doit connaître ?",
                "Bien sûr, vous voulez que je vous réveille à une heure précise demain ?"
            ],
            thanks: [
                "De rien ! Profitez bien de votre séjour chez nous ! 🐢", 
                "Merci à vous ! Si vous avez besoin d'autre chose, appelez la réception. 😊",
                "C'est moi qui vous remercie ! On espère que vous vous sentirez comme chez vous.",
                "Il n'y a pas de quoi ! On est là pour que votre voyage soit inoubliable.",
                "Tout le plaisir est pour moi ! Profitez bien des installations de l'hôtel."
            ],
            farewell: [
                "Au revoir ! Faites un excellent voyage de retour chez vous ! 🐢", 
                "À la revoyure ! On espère vous revoir très bientôt ici. Bon voyage !",
                "Salut ! Revenez quand vous voulez au Hotel Shelldon.",
                "On se revoit ! Merci d'avoir choisi notre hôtel pour votre séjour.",
                "Passez une excellente année ! À bientôt !"
            ],
            agree: [
                "Bien sûr ! Tout est parfaitement prêt pour votre arrivée aujourd'hui.", 
                "Parfait ! On est ravi de vous avoir comme client dans notre établissement.",
                "Super ! Je procède à la confirmation de tous les détails de votre séjour.",
                "Très bien ! C'est un excellent choix pour vos vacances, je pense.",
                "Pas de problème ! C'est déjà noté dans votre dossier client."
            ],
            describe: [
                "Je comprends parfaitement. C'est votre première fois ici, non ? Vous allez adorer.", 
                "Très bien. L'hôtel est très central, vous aurez tout à proximité pour explorer.",
                "Je comprends ce que vous cherchez. On veut que votre séjour soit le plus relaxant possible.",
                "D'accord, c'est noté. C'est une occasion spéciale, on va soigner les détails.",
                "Je vois. Merci pour ces précisions sur vos préférences de logement."
            ],
            statement: [
                "C'est intéressant. Avez-vous une demande spéciale pour améliorer votre séjour ?", 
                "L'Hôtel Shelldon est le plus confortable du quartier. Besoin d'autre chose ? 🐢",
                "Très bon choix. Voulez-vous que je vous recommande un restaurant tout près ?",
                "Compris. Le confort de nos clients est notre priorité absolue.",
                "Saperlipopette ! On adore quand nos clients partagent leurs histoires. Autre chose ?"
            ],
        },
        de: {
            greeting: [
                "Willkommen im Hotel Shelldon! Haben Sie eine Reservierung bei uns? 🏨", 
                "Guten Tag! Wie kann ich Ihnen an der Rezeption helfen? Es ist uns ein Vergnügen. 🐢",
                "Schönen Nachmittag! Willkommen in unserem Hotel. Hatten Sie eine gute Reise?",
                "Hallo, hallo! Suchen Sie ein Zimmer für heute oder möchten Sie nur die Preise wissen?",
                "Willkommen! Kommen Sie zum Einchecken oder möchten Sie Ihr Gepäck bei uns lassen?",
                "Guten Tag! Was können wir tun, damit Ihr Aufenthalt bei uns perfekt wird?"
            ],
            order: [
                "Natürlich! Ein Doppelzimmer mit Meerblick. Hier ist Ihr elektronischer Schlüssel.", 
                "Perfekt, ich darf Sie daran erinnern, dass das Frühstück von 7 bis 10 Uhr serviert wird.",
                "Hier bitte! Ich habe Ihre Reservierung auf Halbpension aktualisiert. 🍳",
                "Hier ist Ihre Zimmerkarte. Der Gepäckträger hilft Ihnen gerne mit Ihren Koffern.",
                "Klasse! Ihr Zimmer ist fertig, es ist die Nummer 305 im dritten Stock.",
                "Sehr gut, notiert. Wir schicken Ihnen die zusätzlichen Handtücher sofort aufs Zimmer."
            ],
            question: [
                "Möchten Sie ein Einzelzimmer für eine Person oder lieber ein Doppelzimmer?", 
                "Um wie viel Uhr planen Sie morgen früh auszuchecken?",
                "Benötigen Sie während Ihres Aufenthalts einen Platz in unserer Tiefgarage?",
                "Wären Sie an den Ausflügen interessiert, die das Hotel anbietet?",
                "Haben Sie Lebensmittelallergien, die unser Küchenteam kennen sollte?",
                "Natürlich, möchten Sie, dass ich Sie morgen zu einer bestimmten Zeit wecke?"
            ],
            thanks: [
                "Gern geschehen! Genießen Sie Ihren Aufenthalt bei uns in vollen Zügen! 🐢", 
                "Danke Ihnen! Wenn Sie noch etwas brauchen, rufen Sie einfach die Rezeption an. 😊",
                "Ich habe zu danken! Wir hoffen, dass Sie sich bei uns wie zu Hause fühlen werden.",
                "Nichts zu danken! Wir sind hier, um Ihre Reise unvergesslich zu machen.",
                "Das Vergnügen liegt ganz auf meiner Seite! Viel Spaß mit unseren Einrichtungen."
            ],
            farewell: [
                "Auf Wiedersehen! Ich wünsche Ihnen eine gute Heimreise! 🐢", 
                "Bis zum nächsten Mal! Wir hoffen, Sie sehr bald wieder hier begrüßen zu dürfen.",
                "Tschüss! Kommen Sie jederzeit gerne wieder ins Hotel Shelldon.",
                "Man sieht sich! Vielen Dank, dass Sie unser Hotel für Ihren Aufenthalt gewählt haben.",
                "Einen schönen Tag noch! Bis bald!"
            ],
            agree: [
                "Natürlich! Alles ist perfekt vorbereitet für Ihre Ankunft heute.", 
                "Perfekt! Wir freuen uns sehr, Sie als Gast in unserem Haus zu haben.",
                "Klasse! Ich bestätige hiermit alle Details Ihres Aufenthalts.",
                "Sehr gut! Das ist eine ausgezeichnete Wahl für Ihren Urlaub, denke ich.",
                "Kein Problem! Das ist bereits in Ihrer Gästeakte vermerkt."
            ],
            describe: [
                "Ich verstehe vollkommen. Es ist Ihr erstes Mal hier, oder? Es wird Ihnen gefallen.", 
                "Sehr gut. Das Hotel liegt sehr zentral, Sie haben alles in der Nähe zum Erkunden.",
                "Ich verstehe, was Sie suchen. Wir möchten, dass Ihr Aufenthalt so entspannend wie möglich ist.",
                "Alles klar, notiert. Es ist ein besonderer Anlass, wir werden auf die Details achten.",
                "Ich verstehe. Danke für diese Informationen zu Ihren Unterbringungswünschen."
            ],
            statement: [
                "Das ist interessant. Haben Sie eine spezielle Bitte, um Ihren Aufenthalt zu verbessern?", 
                "Das Hotel Shelldon ist das komfortabelste im Viertel. Brauchen Sie noch etwas? 🐢",
                "Sehr gute Wahl. Möchten Sie, dass ich Ihnen ein Restaurant in der Nähe empfehle?",
                "Verstanden. Der Komfort unserer Gäste ist unsere oberste Priorität.",
                "Ach was! Wir lieben es, wenn unsere Gäste ihre Geschichten mit uns teilen. Sonst noch etwas?"
            ],
        },
    },
    friend: {
        es: {
            greeting: [
                "¡Hola amigo! ¿Qué tal ha ido hoy tu día? 👋", 
                "¡Buenas! ¿Cómo te va todo hoy? Hacía tiempo que no hablábamos. 🐢",
                "¡Hola, hola! ¿Cómo estás? Espero que todo vaya genial por ahí.",
                "¡Muy buenas! ¿Qué hay de nuevo? Cuéntame alguna novedad.",
                "¡Hola! Me alegra mucho saludarte. ¿Estás teniendo un buen día?",
                "¡Buenas! ¿En qué andas metido hoy, amigo?"
            ],
            order: [
                "¡Qué bien! Yo también querría hacer eso contigo ahora mismo.", 
                "Perfecto, vamos a divertirnos mucho hoy juntos.",
                "¡Genial! Me apunto a ese plan sin pensarlo dos veces. 🤘",
                "¡Muy bien! Me parece una idea estupenda aprovechando el día.",
                "¡Anotado! Pues así lo haremos. ¡Va a ser fantástico!",
                "¡Claro que sí! Cuenta conmigo para lo que necesites."
            ],
            question: [
                "¿Qué es lo que más te gusta hacer en tu tiempo libre y fines de semana?", 
                "¿Tienes ya algún plan interesante pensado para este fin de semana?",
                "¿Has visto alguna película buena últimamente que me recomiendes?",
                "¿Qué tal va la familia? Espero que todos estén muy bien.",
                "¿Prefieres quedarnos hoy por casa o te apetece más salir a dar una vuelta?",
                "¿Sabes a qué hora abre el sitio al que querías ir hoy?"
            ],
            thanks: [
                "¡Gracias! Sabes que eres un gran amigo para mí. 🐢", 
                "¡De nada! Aquí estoy siempre para lo que necesites, ¡faltaría más! 😊",
                "¡Gracias a ti por estar ahí! Es un gusto hablar contigo.",
                "¡No hay de qué! Sabes que puedes contar conmigo para todo.",
                "¡Un placer ayudarte, para eso están los buenos amigos!"
            ],
            farewell: [
                "¡Chao! ¡Hablamos luego sin falta! ¡Cuídate mucho! 🐢", 
                "¡Nos vemos luego! ¡Pásalo muy bien en lo que vayas a hacer!",
                "¡Hasta pronto, amigo! Me ha encantado charlar un rato contigo.",
                "¡Adiós! Que termines de pasar un día excelente.",
                "¡Cuídate! Nos vemos en la próxima sesión de práctica."
            ],
            agree: [
                "¡Claro que sí! Me parece una idea totalmente genial, amigo.", 
                "¡Perfecto! Estoy totalmente de acuerdo contigo en eso.",
                "¡Estupendo! No se me ocurre una forma mejor de verlo.",
                "¡Muy bien! Pues vamos a hacerlo así entonces.",
                "¡Sin problemas! Me gusta mucho cómo piensas."
            ],
            describe: [
                "¡Qué guay! Cuéntame mucho más sobre eso, me interesa un montón.", 
                "Entiendo perfectamente por lo que estás pasando. ¡Vaya día, no!",
                "Comprendo tu situación. A mí también me ha pasado alguna vez.",
                "Vale, anotado. Gracias por compartir eso conmigo, de verdad.",
                "Ya veo. Me gusta mucho cómo te expresas cuando cuentas algo."
            ],
            statement: [
                "Interesante todo lo que me dices. ¿Qué más me cuentas de nuevo?", 
                "Hablar contigo siempre es de lo más divertido y relajante. ¿Tú qué piensas? 🐢",
                "Muy buena observación. ¿Quieres que hablemos de algún otro tema?",
                "Comprendido. Me encanta conocer tu opinión sobre estas cosas.",
                "¡Vaya! Siempre aprendo algo nuevo charlando contigo. ¿Algo más?"
            ],
        },
        en: {
            greeting: [
                "Hey friend! How's your day going? 👋", 
                "Hi! How is everything today? It's been a while since we talked. 🐢",
                "Hello, hello! How are you? I hope everything is going great on your end.",
                "Hi there! What's new with you? Tell me some news.",
                "Hello! I'm so happy to chat with you today. Are you having a good day?",
                "Hey! What are you up to today, my friend?"
            ],
            order: [
                "That's cool! I'd love to do that with you right now too.", 
                "Perfect, let's have a lot of fun together today.",
                "Awesome! I'm in for that plan without a second thought. 🤘",
                "Very well! I think it's a great idea to make the most of the day.",
                "Noted! We'll do it that way then. It's going to be fantastic!",
                "Of course! Count on me for whatever you need."
            ],
            question: [
                "What do you like to do most in your free time and on weekends?", 
                "Do you already have any interesting plans for this weekend?",
                "Have you seen any good movies lately that you'd recommend to me?",
                "How is the family doing? I hope everyone is well.",
                "Do you prefer to stay home today or do you feel like going out for a walk?",
                "Do you know what time the place you wanted to go today opens?"
            ],
            thanks: [
                "Thank you! You know you're a great friend to me. 🐢", 
                "You're welcome! I'm always here for whatever you need, of course! 😊",
                "Thank you for being there! It's a pleasure to talk to you.",
                "No problem at all! You know you can count on me for everything.",
                "My pleasure to help, that's what good friends are for!"
            ],
            farewell: [
                "Bye! Let's talk later for sure! Take good care of yourself! 🐢", 
                "See you later! Have a great time with whatever you're doing!",
                "See you soon, friend! I loved chatting with you for a while.",
                "Goodbye! I hope you have an excellent rest of your day.",
                "Take care! See you in our next practice session."
            ],
            agree: [
                "Of course! I think it's a totally cool idea, friend.", 
                "Perfect! I completely agree with you on that.",
                "Awesome! I can't think of a better way to see it.",
                "Very well! Let's do it that way then.",
                "No problem! I really like how you think."
            ],
            describe: [
                "That's so cool! Tell me a lot more about that, it interests me a ton.", 
                "I totally understand what you're going through. What a day, huh!",
                "I understand your situation. It's happened to me at some point too.",
                "Alright, noted. Thank you for sharing that with me, really.",
                "I see. I really like how you express yourself when you tell a story."
            ],
            statement: [
                "Everything you're telling me is interesting. What else is new?", 
                "Talking to you is always super fun and relaxing. What do you think? 🐢",
                "Very good observation. Do you want to talk about another topic?",
                "Understood. I love hearing your opinion on these things.",
                "Wow! I always learn something new by chatting with you. Anything else?"
            ],
        },
        fr: {
            greeting: [
                "Salut l'ami ! Comment se passe ta journée ? 👋", 
                "Salut ! Comment ça va aujourd'hui ? Ça faisait longtemps qu'on n'avait pas discuté. 🐢",
                "Coucou ! Comment vas-tu ? J'espère que tout se passe bien de ton côté.",
                "Salut ! Quoi de neuf ? Raconte-moi tes dernières nouvelles.",
                "Bonjour ! Je suis ravi de te saluer. Tu passes une bonne journée ?",
                "Salut ! Qu'est-ce que tu fais de beau aujourd'hui, mon ami ?"
            ],
            order: [
                "C'est super ! J'aimerais aussi faire ça avec toi tout de suite.", 
                "Parfait, on va bien s'amuser ensemble aujourd'hui.",
                "Génial ! Je m'inscris à ce plan sans hésiter. 🤘",
                "Très bien ! C'est une excellente idée pour profiter de la journée.",
                "C'est noté ! On fera comme ça. Ça va être fantastique !",
                "Bien sûr ! Tu peux compter sur moi pour tout ce dont tu as besoin."
            ],
            question: [
                "Qu'est-ce que tu aimes le plus faire pendant ton temps libre et les weekends ?", 
                "As-tu déjà un projet intéressant pour ce weekend ?",
                "As-tu vu un bon film récemment que tu pourrais me conseiller ?",
                "Comment va la famille ? J'espère que tout le monde se porte bien.",
                "Tu préfères qu'on reste à la maison ou tu as envie de sortir faire un tour ?",
                "Tu sais à quelle heure ouvre l'endroit où tu voulais aller aujourd'hui ?"
            ],
            thanks: [
                "Merci ! Tu sais que tu es un super ami pour moi. 🐢", 
                "De rien ! Je suis toujours là pour toi, c'est normal ! 😊",
                "Merci à toi d'être là ! C'est un plaisir de discuter avec toi.",
                "Il n'y a pas de quoi ! Tu sais que tu peux compter sur moi pour tout.",
                "Tout le plaisir est pour moi ! C'est ça, les bons amis."
            ],
            farewell: [
                "Salut ! On se parle plus tard sans faute ! Prends soin de toi ! 🐢", 
                "À tout à l'heure ! Amuse-toi bien dans ce que tu vas faire !",
                "À bientôt, l'ami ! J'ai adoré discuter un moment avec toi.",
                "Au revoir ! Passe une excellente fin de journée.",
                "À plus ! On se voit à la prochaine session de pratique."
            ],
            agree: [
                "Bien sûr ! C'est une idée totalement géniale, mon ami.", 
                "Parfait ! Je suis tout à fait d'accord avec toi là-dessus.",
                "Super ! Je ne vois pas de meilleure façon de voir les choses.",
                "Très bien ! On va faire comme ça alors.",
                "Pas de problème ! J'aime beaucoup ta façon de penser."
            ],
            describe: [
                "C'est super cool ! Raconte-m'en plus là-dessus, ça m'intéresse beaucoup.", 
                "Je comprends tout à fait ce que tu traverses. Quelle journée, hein ?",
                "Je comprends ta situation. Ça m'est aussi arrivé une fois.",
                "D'accord, c'est noté. Merci de partager ça avec moi, vraiment.",
                "Je vois. J'aime beaucoup comment tu t'exprimes quand tu racontes quelque chose."
            ],
            statement: [
                "C'est intéressant, tout ce que tu me dis. Quoi de neuf à part ça ?", 
                "Parler avec toi est toujours super amusant et relaxant. Tu en penses quoi ? 🐢",
                "Trés bonne observation. Tu veux qu'on parle d'un autre sujet ?",
                "Compris. J'adore connaître ton opinion sur ces choses-là.",
                "Saperlipopette ! J'apprends toujours quelque chose de nouveau avec toi. Autre chose ?"
            ],
        },
        de: {
            greeting: [
                "Hallo mein Freund! Wie läuft dein Tag heute so? 👋", 
                "Hi! Wie geht es dir heute? Wir haben schon lange nicht mehr geplaudert. 🐢",
                "Hallo, hallo! Wie schlägt's? Ich hoffe, bei dir ist alles bestens.",
                "Hey! Was gibt's Neues? Erzähl mir mal was Spannendes.",
                "Hallo! Freut mich sehr, dich zu grüßen. Hast du einen guten Tag?",
                "Hi! Was treibst du heute so schönes, mein Freund?"
            ],
            order: [
                "Wie schön! Das würde ich jetzt auch am liebsten mit dir machen.", 
                "Perfekt, wir werden heute zusammen viel Spaß haben.",
                "Genial! Bei dem Plan bin ich ohne zu zögern dabei. 🤘",
                "Sehr gut! Das ist eine super Idee, um den Tag zu genießen.",
                "Notiert! Dann machen wir das so. Das wird fantastisch!",
                "Natürlich! Du kannst auf mich zählen, was auch immer du brauchst."
            ],
            question: [
                "Was machst du am liebsten in deiner Freizeit und am Wochenende?", 
                "Hast du für dieses Wochenende schon einen interessanten Plan?",
                "Hast du in letzter Zeit einen guten Film gesehen, den du mir empfehlen kannst?",
                "Wie geht es der Familie? Ich hoffe, alle sind wohlauf.",
                "Möchtest du lieber heute zu Hause bleiben oder hast du Lust, auszugehen?",
                "Weißt du, um wie viel Uhr der Ort öffnet, zu dem du heute gehen wolltest?"
            ],
            thanks: [
                "Danke! Du weißt, dass du ein toller Freund für mich bist. 🐢", 
                "Gern geschehen! Ich bin immer für dich da, wenn du mich brauchst. 😊",
                "Danke dir, dass du da bist! Es ist schön, mit dir zu reden.",
                "Nichts zu danken! Du weißt, dass du bei allem auf mich zählen kannst.",
                "Es war mir ein Vergnügen, dir zu helfen. Dafür sind gute Freunde da!"
            ],
            farewell: [
                "Tschüss! Wir sprechen uns später auf jeden Fall! Pass auf dich auf! 🐢", 
                "Bis später! Viel Spaß bei dem, was du vorhast!",
                "Bis bald, mein Freund! Es war toll, ein bisschen mit dir zu plaudern.",
                "Auf Wiedersehen! Hab noch einen ausgezeichneten Tag.",
                "Mach's gut! Wir sehen uns bei der nächsten Übungssession."
            ],
            agree: [
                "Natürlich! Das finde ich eine absolut geniale Idee, mein Freund.", 
                "Perfekt! Da stimme ich dir voll und ganz zu.",
                "Wunderbar! Eine bessere Art, das zu sehen, fällt mir nicht ein.",
                "Sehr gut! Dann machen wir es genau so.",
                "Kein Problem! Mir gefällt sehr, wie du denkst."
            ],
            describe: [
                "Wie cool! Erzähl mir mehr darüber, das interessiert mich brennend.", 
                "Ich verstehe vollkommen, was du gerade durchmachst. Was für ein Tag, oder?",
                "Ich verstehe deine Situation. Das ist mir auch schon mal passiert.",
                "Alles klar, notiert. Danke, dass du das mit mir teilst, wirklich.",
                "Ich verstehe. Mir gefällt sehr, wie du dich ausdrückst, wenn du etwas erzählst."
            ],
            statement: [
                "Interessant, was du mir da alles erzählst. Was gibt's sonst Neues?", 
                "Mit dir zu reden ist immer total lustig und entspannend. Was denkst du? 🐢",
                "Sehr gute Beobachtung. Möchtest du über ein anderes Thema sprechen?",
                "Verstanden. Ich liebe es, deine Meinung zu diesen Dingen zu hören.",
                "Ach was! Ich lerne immer etwas Neues, wenn ich mit dir plaudere. Noch etwas?"
            ],
        },
    },
    rendezvous: {
        es: {
            greeting: ["¿Quieres que quedemos? ¿A qué hora te viene bien? 📅", "¡Hola! ¿A dónde quieres ir hoy? 🐢"],
            order: ["¡Claro! Me parece un plan perfecto.", "Muy bien, quedamos allí entonces."],
            question: ["¿Prefieres ir al cine o a cenar?", "¿Te parece bien a las ocho delante del parque?"],
            thanks: ["¡Gracias por invitarme! Tengo muchas ganas. 🐢", "¡De nada! Nos vemos en un rato."],
            farewell: ["¡Hasta ahora! Nos vemos allí. 🐢", "¡Ciao! ¡Pórtate bien!"],
            agree: ["¡Claro! Es una hora excelente.", "¡Perfecto! Nos vemos entonces."],
            describe: ["Entiendo, hoy tienes ganas de hacer algo diferente.", "Muy bien. ¿Qué tal si vamos caminando?"],
            statement: ["Muy bien. ¿Alguna otra idea para hoy?", "Planificar con Shelldon es fácil. ¿Quedamos ya? 🐢"],
        },
        en: {
            greeting: [
                "Want to meet up? What time works for you? 📅", 
                "Hello! Where do you want to go today? I'm ready. 🐢",
                "Hey! Do you feel like doing something together today?",
                "Good day! Shall we set a meeting point for today?",
                "Hi! I'm looking forward to seeing you. Where shall we meet?",
                "Hi! Do you have any plans for today or shall we meet up?"
            ],
            order: [
                "Of course! Sounds like a totally perfect plan.", 
                "Alright, let's meet exactly there at the agreed time.",
                "Awesome! I'm marking it in my calendar right now. 🗓️",
                "Very well! I'm really looking forward to our meeting.",
                "Agreed! That's going to be a great outing for sure.",
                "Perfect, I'll be there on time. See you then!"
            ],
            question: [
                "Do you prefer going to the cinema or a cozy restaurant?", 
                "Does eight o'clock work for you right in front of the park entrance?",
                "Should we meet downtown or would you prefer somewhere near you?",
                "Do you have an idea of how long we'll be out today?",
                "Do we need to make a reservation for the place we're going?",
                "What do you think if we meet at the train station?"
            ],
            thanks: [
                "Thanks for the invitation! I'm really excited about it. 🐢", 
                "You're welcome! See you in a tiny bit.",
                "Thank you so much! It's always nice to make plans with you. 😊",
                "No problem at all! I didn't have any plans for today anyway.",
                "Thank you! I'm looking forward to seeing what adventures we'll have today."
            ],
            farewell: [
                "See you soon! We'll see each other there at the meeting point. 🐢", 
                "Bye! Take care and drive safely!",
                "See you soon! I'm already slowly heading that way.",
                "Goodbye! We'll talk before we meet up.",
                "Take care! I'm excited for later!"
            ],
            agree: [
                "Of course! That's a totally excellent time for a meeting.", 
                "Perfect! See you then. It's a deal!",
                "Awesome! That fits very well into my schedule too.",
                "Very well! Then we'll stick to our arrangement.",
                "No problem! I think the meeting point is very well chosen too."
            ],
            describe: [
                "I see, you're in the mood for something completely new and exciting today.", 
                "Alright. How about we walk there to enjoy the nice weather?",
                "I understand your situation. Then let's find a quiet place.",
                "Very well. That sounds like a relaxed afternoon.",
                "I see. That's an interesting choice for our meeting today."
            ],
            statement: [
                "Alright. Any other creative ideas for our meeting today?", 
                "Planning with Shelldon is easy and fun. Shall we go? 🐢",
                "Very good observation. Do you want to bring anyone else along?",
                "Understood. I'm flexible about our plan for today.",
                "Wow! That's a great surprise for our meeting. Anything else?"
            ],
        },
        fr: {
            greeting: ["Tu veux qu'on se voie ? Quelle heure te convient le mieux ? 📅", "Salut ! Où as-tu envie d'aller aujourd'hui ? 🐢"],
            order: ["Bien sûr ! Ça me semble être un plan absolument parfait.", "D'accord, on se retrouve là-bas alors."],
            question: ["Tu préfères aller au cinéma ou plutôt aller dîner quelque part ?", "Ça te va à huit heures pile devant l'entrée du parc ?"],
            thanks: ["Merci de m'avoir invité ! J'ai vraiment hâte d'y être. 🐢", "De rien ! On se voit dans un petit moment alors."],
            farewell: ["À tout à l'heure ! On se voit là-bas bientôt. 🐢", "Salut ! Sois sage !"],
            agree: ["Bien sûr ! C'est une excellente heure pour se voir.", "Parfait ! On se voit alors, c'est entendu."],
            describe: ["Je vois, tu as envie de faire quelque chose de différent aujourd'hui.", "D'accord. Et si on y allait à pied pour profiter du temps ?"],
            statement: ["D'accord. Tu as d'autres idées pour aujourd'hui ?", "Planifier avec Shelldon, c'est facile et rapide. On confirme ? 🐢"],
        },
        de: {
            greeting: [
                "Sollen wir uns treffen? Welche Uhrzeit passt dir am besten? 📅", 
                "Hallo! Wohin möchtest du heute gerne gehen? Ich bin bereit. 🐢",
                "Hey! Hast du Lust, heute etwas zusammen zu unternehmen?",
                "Guten Tag! Sollen wir einen Treffpunkt für heute ausmachen?",
                "Hallo! Ich freue mich darauf, dich zu sehen. Wo treffen wir uns?",
                "Hi! Hast du heute schon was vor oder wollen wir uns treffen?"
            ],
            order: [
                "Natürlich! Das klingt nach einem absolut perfekten Plan.", 
                "Alles klar, dann treffen wir uns genau dort zur vereinbarten Zeit.",
                "Super! Ich trage mir das sofort in den Kalender ein. 🗓️",
                "Sehr gut! Ich freue mich schon sehr auf unser Treffen.",
                "Abgemacht! Das wird bestimmt ein toller Ausflug.",
                "Perfekt, ich werde pünktlich da sein. Bis dann!"
            ],
            question: [
                "Möchtest du lieber ins Kino gehen oder in ein gemütliches Restaurant?", 
                "Passt es dir um acht Uhr direkt vor dem Haupteingang des Parks?",
                "Sollen wir uns in der Innenstadt treffen oder lieber in der Nähe von dir?",
                "Hast du eine Vorstellung, wie lange wir heute unterwegs sein werden?",
                "Müssen wir für den Ort, zu dem wir gehen, vorher reservieren?",
                "Was hälst du davon, wenn wir uns am Bahnhof treffen?"
            ],
            thanks: [
                "Danke für die Einladung! Ich freue mich schon riesig darauf. 🐢", 
                "Gern geschehen! Wir sehen uns in einem kleinen Augenblick.",
                "Vielen Dank! Es ist immer schön, Pläne mit dir zu machen. 😊",
                "Nichts zu danken! Ich habe heute sowieso noch nichts vor.",
                "Danke dir! Ich bin gespannt, was wir heute alles erleben werden."
            ],
            farewell: [
                "Bis gleich! Wir sehen uns dann dort am Treffpunkt. 🐢", 
                "Tschüss! Mach's gut und fahr vorsichtig!",
                "Bis bald! Ich mache mich schon mal langsam auf den Weg.",
                "Auf Wiedersehen! Wir hören uns, bevor wir uns treffen.",
                "Mach's gut! Ich freue mich auf nachher!"
            ],
            agree: [
                "Natürlich! Das ist eine ganz hervorragende Uhrzeit für ein Treffen.", 
                "Perfekt! Dann sehen wir uns genau dann. Abgemacht!",
                "Klasse! Das passt mir auch zeitlich sehr gut in den Plan.",
                "Sehr gut! Dann bleibt es bei unserer Verabredung.",
                "Kein Problem! Ich finde den Treffpunkt auch sehr gut gewählt."
            ],
            describe: [
                "Ich verstehe, du hast heute Lust auf etwas ganz Neues und Aufregendes.", 
                "Alles klar. Sollen wir zu Fuß hingehen, um das schöne Wetter zu nutzen?",
                "Ich verstehe deine Situation. Dann suchen wir uns einen ruhigen Ort.",
                "Sehr gut. Das klingt nach einem entspannten Nachmittag.",
                "Ich sehe. Das ist eine interessante Wahl für unser heutiges Treffen."
            ],
            statement: [
                "In Ordnung. Hast du noch andere kreative Ideen für unser Treffen heute?", 
                "Mit Shelldon zu planen ist einfach und macht Spaß. Sollen wir los? 🐢",
                "Sehr gute Beobachtung. Möchtest du noch jemanden mitschleppen?",
                "Verstanden. Ich bin flexibel, was unseren Plan für heute angeht.",
                "Ach was! Das ist ja eine tolle Überraschung für unser Treffen. Noch etwas?"
            ],
        },
    },
    restaurant: {
        es: {
            greeting: [
                "¡Bienvenido! ¿Tienen ustedes una reserva o prefieren una mesa para dos hoy? 🍽️", 
                "¡Buen día! Pasen, por favor. Es un placer tenerles aquí. ¿Qué desean tomar? 🐢",
                "¡Hola! ¿Desean comer en la terraza al aire libre o prefieren el salón principal?",
                "¡Bienvenidos a nuestro restaurante! ¿Buscan una mesa para cenar o solo vienen a picar algo?",
                "¡Muy buenas! ¿Cuántas personas van a ser para la comida de hoy?",
                "¡Hola! Pasen al fondo, por favor. ¿En qué podemos servirles para empezar?"
            ],
            order: [
                "¡Gran elección! El pollo asado está delicioso hoy. ¿Desean algo de beber?", 
                "Perfecto, ¿quieren pedir el postre ahora o prefieren dejarlo para después? 🍰",
                "¡Hecho! Un chuletón al punto y una ensalada mixta. Una combinación clásica.",
                "Muy bien, les traigo las bebidas inmediatamente mientras esperan la comida.",
                "¡Excelente! Nuestra recomendación del día es siempre un éxito total.",
                "¡Anotado! Marchando una de croquetas y el plato principal. ¿Algo más?"
            ],
            question: [
                "¿Prefieren la mesa que está cerca de la ventana o una más tranquila en el centro?", 
                "¿Les gustaría ver nuestra extensa carta de vinos o prefieren alguna otra bebida?",
                "¿Tienen alguna preferencia en cuanto al punto de cocción de la carne de hoy?",
                "¿Desean saber qué ingredientes lleva nuestra famosa salsa especial?",
                "¿Van a querer compartir los entrantes o cada uno prefiere pedir el suyo?",
                "¿Les traigo la carta de postres ahora o quieren esperar a terminar de comer?"
            ],
            thanks: [
                "¡Gracias a ustedes! Espero de corazón que disfruten mucho de la cena. 🐢", 
                "¡De nada! Buen provecho y que la comida esté a su gusto en todo momento. 😊",
                "¡A ustedes las gracias por habernos elegido! Es un honor atenderles.",
                "¡No hay de qué! Si necesitan cualquier otra cosa, solo tienen que llamarme.",
                "¡Un placer! Ya verán cómo los platos superan sus expectativas."
            ],
            farewell: [
                "¡Adiós! ¡Muchísimas gracias por su visita! Esperamos verles pronto. 🐢", 
                "¡Hasta la próxima! Vuelvan pronto a visitarnos, ¡ha sido un placer!",
                "¡Chao! Espero que hayan disfrutado de la experiencia gastronómica con nosotros.",
                "¡Nos vemos! Les esperamos con los brazos abiertos para su próxima comida.",
                "¡Que tengan un resto del día excelente! ¡Adiós!"
            ],
            agree: [
                "¡Claro que sí! Enseguida les traigo todo lo que han solicitado a la mesa.", 
                "¡Perfecto! Una elección muy popular y acertada entre nuestros clientes hoy.",
                "¡Estupendo! Procedo a pasar el pedido a la cocina ahora mismo.",
                "¡Muy bien! Me parece una combinación de sabores muy interesante.",
                "¡Sin problemas! Todo estará listo en unos quince minutos aproximadamente."
            ],
            describe: [
                "Entiendo perfectamente, hoy quieren celebrar algo muy especial y único.", 
                "Muy bien. Tenemos una gran variedad de opciones vegetarianas y veganas también.",
                "Comprendo lo que buscan. Queremos que su experiencia aquí sea inolvidable.",
                "Vale, anotado. Cuidaremos hasta el último detalle para que todo esté perfecto.",
                "Ya veo. Gracias por decirme sus preferencias, eso nos ayuda a servirles mejor."
            ],
            statement: [
                "Interesante detalle. ¿Quieren esperar a que llegue alguien más a la mesa?", 
                "Comer con Shelldon es siempre un auténtico placer para los sentidos. ¿Algo más? 🐢",
                "Muy buena observación. ¿Desean probar nuestra especialidad de la casa?",
                "Comprendido. La calidad de nuestros productos es nuestra mayor prioridad.",
                "¡Vaya! Nos encanta tener clientes tan apasionados por la buena cocina."
            ],
        },
        en: {
            greeting: [
                "Welcome! Do you have a reservation or would you prefer a table for two today? 🍽️", 
                "Good day! Please come in. It's a pleasure to have you here. What would you like? 🐢",
                "Hi! Would you like to eat on the outdoor terrace or do you prefer the main hall?",
                "Welcome to our restaurant! Are you looking for a dinner table or just coming for a snack?",
                "Good afternoon! How many people will it be for today's meal?",
                "Hello! Please come to the back. How can we serve you to begin?"
            ],
            order: [
                "Great choice! The roast chicken is delicious today. Anything to drink?", 
                "Perfect, would you like to order dessert now or would you prefer to leave it for later? 🍰",
                "Done! A steak medium and a mixed salad. A classic combination.",
                "Very well, I'll bring you the drinks immediately while you wait for the food.",
                "Excellent! Our recommendation of the day is always a total success.",
                "Noted! One order of croquettes and the main dish coming right up. Anything else?"
            ],
            question: [
                "Do you prefer the table near the window or a quieter one in the center?", 
                "Would you like to see our extensive wine list or do you prefer some other drink?",
                "Do you have a preference regarding the level of cooking for the meat today?",
                "Would you like to know what ingredients are in our famous special sauce?",
                "Are you going to want to share the starters or does everyone prefer to order their own?",
                "Shall I bring you the dessert menu now or do you want to wait until you finish eating?"
            ],
            thanks: [
                "Thank you! I hope from the bottom of my heart that you really enjoy the dinner. 🐢", 
                "You're welcome! Enjoy your meal and may the food be to your liking at all times. 😊",
                "Thank you so much for choosing us! It's an honor to serve you.",
                "No problem at all! If you need anything else, you just have to call me.",
                "My pleasure! You'll see how the dishes exceed your expectations."
            ],
            farewell: [
                "Goodbye! Thank you so much for your visit! We hope to see you soon. 🐢", 
                "See you next time! Come back to visit us soon, it's been a pleasure!",
                "Bye! I hope you enjoyed the gastronomic experience with us.",
                "See you around! We wait for you with open arms for your next meal.",
                "Have an excellent rest of your day! Goodbye!"
            ],
            agree: [
                "Of course! I'll bring everything you requested to the table right away.", 
                "Perfect! A very popular and wise choice among our customers today.",
                "Awesome! I'm proceeding to pass the order to the kitchen right now.",
                "Very well! It seems like an interesting combination of flavors to me.",
                "No problem! Everything will be ready in about fifteen minutes."
            ],
            describe: [
                "I understand perfectly, today you want to celebrate something very special and unique.", 
                "Very well. We have a wide variety of vegetarian and vegan options too.",
                "I understand what you're looking for. We want your experience here to be unforgettable.",
                "Alright, noted. We'll take care of every last detail so that everything is perfect.",
                "I see. Thank you for telling me your preferences, that helps us serve you better."
            ],
            statement: [
                "Interesting detail. Do you want to wait for someone else to arrive at the table?", 
                "Eating with Shelldon is always a real pleasure for the senses. Anything else? 🐢",
                "Very good observation. Do you want to try our house specialty?",
                "Understood. The quality of our products is our highest priority.",
                "Wow! We love having customers so passionate about good cuisine."
            ],
        },
        fr: {
            greeting: [
                "Bienvenue ! Avez-vous une réservation ou préférez-vous une table pour deux ? 🍽️", 
                "Bonjour ! Entrez, s'il vous plaît. C'est un plaisir de vous accueillir. 🐢",
                "Salut ! Vous voulez manger en terrasse ou vous préférez l'intérieur ?",
                "Bienvenue chez nous ! Vous cherchez une table pour dîner ou juste boire un verre ?",
                "Bonjour ! Combien serez-vous pour le repas d'aujourd'hui ?",
                "Salut ! Installez-vous au fond, s'il vous plaît. Que puis-je faire pour vous ?"
            ],
            order: [
                "Excellent choix ! Le poulet rôti est délicieux aujourd'hui. Une boisson ?", 
                "Parfait, voulez-vous commander le dessert maintenant ou plus tard ? 🍰",
                "C'est noté ! Une entrecôte à point et une salade mixte. Un classique.",
                "Très bien, je vous apporte les boissons immédiatement en attendant les plats.",
                "Génial ! Notre recommandation du jour est toujours un grand succès.",
                "C'est parti ! Une portion de croquettes et le plat principal. Autre chose ?"
            ],
            question: [
                "Vous préférez la table près de la fenêtre ou une plus calme au centre ?", 
                "Voulez-vous voir notre carte des vins ou préférez-vous une autre boisson ?",
                "Avez-vous une préférence pour la cuisson de la viande aujourd'hui ?",
                "Voulez-vous savoir quels sont les ingrédients de notre sauce spéciale ?",
                "Voulez-vous partager les entrées ou chacun préfère prendre le sien ?",
                "Je vous apporte la carte des desserts maintenant ou vous préférez attendre ?"
            ],
            thanks: [
                "Merci à vous ! J'espère de tout cœur que vous apprécierez votre dîner. 🐢", 
                "De rien ! Bon appétit et j'espère que tout est à votre goût. 😊",
                "C'est moi qui vous remercie d'avoir choisi notre restaurant ! C'est un honneur.",
                "Il n'y a pas de quoi ! Si vous avez besoin d'autre chose, n'hésitez pas.",
                "Tout le plaisir est pour moi ! Vous verrez, les plats sont excellents."
            ],
            farewell: [
                "Au revoir ! Merci beaucoup de votre visite ! On espère vous revoir. 🐢", 
                "À la prochaine ! Revenez nous voir bientôt, c'était un plaisir !",
                "Salut ! J'espère que vous avez apprécié l'expérience gastronomique avec nous.",
                "On se revoit ! On vous attend les bras ouverts pour votre prochain repas.",
                "Passez une excellente fin de journée ! Au revoir !"
            ],
            agree: [
                "Bien sûr ! Je vous apporte tout de suite ce que vous avez demandé.", 
                "Parfait ! Un choix très populaire et judicieux parmi nos clients aujourd'hui.",
                "Super ! Je passe la commande en cuisine immédiatement.",
                "Très bien ! Ça me semble être une combinaison de saveurs très intéressante.",
                "Pas de problème ! Tout sera prêt dans environ quinze minutes."
            ],
            describe: [
                "Je comprends parfaitement, vous voulez fêter quelque chose de spécial aujourd'hui.", 
                "Très bien. Nous avons aussi une grande variété d'options végétariennes et vegans.",
                "Je vois ce que vous cherchez. On veut que votre expérience ici soit inoubliable.",
                "D'accord, c'est noté. On soignera les détails pour que tout soit parfait.",
                "Je comprends. Merci de me préciser vos préférences, ça nous aide à mieux vous servir."
            ],
            statement: [
                "Intéressant. Voulez-vous attendre que quelqu'un d'autre arrive à table ?", 
                "Manger avec Shelldon est toujours un vrai plaisir pour les sens. Autre chose ? 🐢",
                "Très bonne observation. Voulez-vous goûter notre spécialité maison ?",
                "Compris. La qualité de nos produits est notre priorité absolue.",
                "Saperlipopette ! On adore avoir des clients aussi passionnés par la cuisine."
            ],
        },
        de: {
            greeting: [
                "Willkommen! Haben Sie eine Reservierung oder bevorzugen Sie heute einen Tisch für zwei? 🍽️", 
                "Guten Tag! Kommen Sie bitte herein. Es ist ein Vergnügen, Sie hier zu haben. 🐢",
                "Hallo! Möchten Sie draußen auf der Terrasse essen oder lieber im Hauptsaal?",
                "Herzlich willkommen in unserem Restaurant! Suchen Sie einen Tisch zum Abendessen?",
                "Guten Tag! Mit wie vielen Personen möchten Sie heute bei uns speisen?",
                "Hallo! Nehmen Sie bitte Platz. Was darf ich Ihnen als Erstes bringen?"
            ],
            order: [
                "Eine hervorragende Wahl! Das Brathähnchen ist heute besonders köstlich. Etwas zu trinken?", 
                "Perfekt, möchten Sie das Dessert jetzt bestellen oder lieber für später aufheben? 🍰",
                "Abgemacht! Ein Steak medium und ein gemischter Salat. Ein echter Klassiker.",
                "Sehr gut, ich bringe Ihnen sofort die Getränke, während Sie auf das Essen warten.",
                "Ausgezeichnet! Unsere Tagesempfehlung ist heute wieder ein totaler Erfolg.",
                "Notiert! Eine Portion Kroketten und das Hauptgericht kommen sofort. Noch etwas?"
            ],
            question: [
                "Bevorzugen Sie den Tisch am Fenster oder einen ruhigeren Platz in der Mitte?", 
                "Möchten Sie unsere umfangreiche Weinkarte sehen oder lieber ein anderes Getränk?",
                "Haben Sie eine Vorliebe dafür, wie Ihr Fleisch heute zubereitet werden soll?",
                "Möchten Sie wissen, welche Zutaten in unserer berühmten Spezialsauce sind?",
                "Möchten Sie sich die Vorspeisen teilen oder möchte jeder seine eigene bestellen?",
                "Soll ich Ihnen jetzt die Dessertkarte bringen oder wollen Sie noch einen Moment warten?"
            ],
            thanks: [
                "Vielen Dank an Sie! Ich hoffe von ganzem Herzen, dass Sie das Abendessen genießen. 🐢", 
                "Gern geschehen! Guten Appetit und hoffentlich ist das Essen ganz nach Ihrem Geschmack. 😊",
                "Ich habe zu danken, dass Sie unser Restaurant gewählt haben! Es ist uns eine Ehre.",
                "Nichts zu danken! Wenn Sie noch etwas brauchen, rufen Sie mich einfach.",
                "Ein Vergnügen! Sie werden sehen, dass die Gerichte Ihre Erwartungen übertreffen werden."
            ],
            farewell: [
                "Auf Wiedersehen! Vielen Dank für Ihren Besuch! Wir hoffen, Sie bald wiederzusehen. 🐢", 
                "Bis zum nächsten Mal! Besuchen Sie uns bald wieder, es war uns ein Vergnügen!",
                "Tschüss! Ich hoffe, Sie hatten bei uns ein tolles gastronomisches Erlebnis.",
                "Man sieht sich! Wir erwarten Sie mit offenen Armen zu Ihrer nächsten Mahlzeit.",
                "Ich wünsche Ihnen noch einen ausgezeichneten Resttag! Auf Wiedersehen!"
            ],
            agree: [
                "Natürlich! Ich bringe Ihnen sofort alles an den Tisch, was Sie bestellt haben.", 
                "Perfekt! Eine sehr beliebte und gute Wahl unter unseren heutigen Gästen.",
                "Wunderbar! Ich gebe die Bestellung sofort an die Küche weiter.",
                "Sehr gut! Das scheint mir eine sehr interessante Geschmackskombination zu sein.",
                "Kein Problem! Alles wird in etwa fünfzehn Minuten für Sie bereit sein."
            ],
            describe: [
                "Ich verstehe vollkommen, heute möchten Sie etwas ganz Besonderes feiern.", 
                "Sehr gut. Wir haben auch eine große Auswahl an vegetarischen und veganen Optionen.",
                "Ich verstehe, was Sie suchen. Wir möchten, dass Ihr Erlebnis hier unvergesslich wird.",
                "Alles klar, notiert. Wir werden auf jedes Detail achten, damit alles perfekt ist.",
                "Ich verstehe. Danke, dass Sie mir Ihre Vorlieben sagen, das hilft uns beim Service."
            ],
            statement: [
                "Interessantes Detail. Möchten Sie warten, bis noch jemand an den Tisch kommt?", 
                "Mit Shelldon zu essen ist immer ein wahrer Genuss für die Sinne. Noch etwas? 🐢",
                "Sehr gute Beobachtung. Möchten Sie unsere Spezialität des Hauses probieren?",
                "Verstanden. Die Qualität unserer Produkte ist unsere oberste Priorität.",
                "Ach was! Wir lieben es, Gäste zu haben, die so leidenschaftlich gerne gut essen."
            ],
        },
    },
    direction: {
        es: {
            greeting: [
                "¡Hola! ¿Buscando algún sitio en concreto? Conozco bien toda la ciudad. 🗺️", 
                "¡Buen día! ¿Parece que se ha perdido un poco? No se preocupe, yo le ayudo. 🐢",
                "¡Hola! ¿Busca alguna calle, monumento o estación de transporte por aquí cerca?",
                "¡Buenas! ¿Le puedo ayudar a encontrar su destino hoy? Soy experto en rutas.",
                "¡Hola, hola! ¿Necesita que le indique cómo llegar a algún lugar famoso de la zona?",
                "¡Muy buenas! ¿Está buscando el centro de la ciudad o alguna dirección específica?"
            ],
            order: [
                "¡Claro! Siga todo recto por esta misma calle y luego gire a la derecha al final.", 
                "Perfecto, el lugar que busca está justo detrás de la plaza grande, no tiene pérdida.",
                "¡Hecho! Tome la segunda calle a la izquierda y camine unos doscientos metros. 📍",
                "Muy bien, cruce el puente y lo verá justo enfrente de la parada de autobús.",
                "¡Genial! Siga las señales hacia el museo y lo encontrará en la esquina de la plaza.",
                "Claro, baje por esa avenida y gire a la derecha después de pasar el cine."
            ],
            question: [
                "¿Está buscando la oficina de correos central o prefiere ir al museo nacional primero?", 
                "¿Viene usted de la estación de tren o ha llegado en coche a la ciudad?",
                "¿Prefiere ir por el camino más corto o por el más bonito que pasa por el parque?",
                "¿Sabe si el sitio al que va está abierto ahora o quiere que lo comprobemos?",
                "¿Lleva un mapa consigo o quiere que le dibuje un pequeño croquis rápido?",
                "¿Está muy lejos de aquí o cree que puede ir caminando tranquilamente?"
            ],
            thanks: [
                "¡De nada! ¡Espero de verdad que encuentre el sitio a la primera! 🐢", 
                "¡Gracias a usted! ¡Que tenga un paseo excelente por nuestra ciudad! 😊",
                "¡No hay de qué! Es un placer ayudar a los visitantes a no perderse.",
                "¡A usted! Disfrute mucho de las vistas mientras camina hacia su destino.",
                "¡Un placer! Si se vuelve a perder, ya sabe dónde encontrarme."
            ],
            farewell: [
                "¡Adiós! ¡Espero que disfrute mucho del camino y de las vistas! 🐢", 
                "¡Hasta luego! ¡Vaya con cuidado con el tráfico y disfrute del paseo!",
                "¡Chao! Espero que sus mapas funcionen mejor después de mi ayuda.",
                "¡Nos vemos! Que tenga un día de exploración fantástico por la ciudad.",
                "¡Buen viaje! ¡Hasta la próxima dirección!"
            ],
            agree: [
                "¡Claro que sí! Es muy fácil llegar desde aquí siguiendo mis indicaciones.", 
                "¡Perfecto! Está usted ya muy cerca de su destino, solo le quedan cinco minutos.",
                "¡Estupendo! Me alegra que haya entendido bien la ruta que le he propuesto.",
                "¡Muy bien! Pues ya sabe, todo recto y a disfrutar del camino.",
                "¡Sin problemas! La ruta es segura y no tiene ninguna complicación."
            ],
            describe: [
                "Entiendo, hoy tiene usted ganas de explorar nuevos sitios y perderse un poco.", 
                "Muy bien. Tenga mucho cuidado con el tráfico en el centro, hay mucha gente.",
                "Comprendo perfectamente lo que busca. Es un sitio emblemático de la ciudad.",
                "Vale, anotado. Le indicaré el camino más seguro para que no tenga problemas.",
                "Ya veo. Gracias por decirme su punto de partida, así la ruta es más clara."
            ],
            statement: [
                "Muy bien. ¿Alguna otra dirección o lugar de interés que necesite hoy?", 
                "Explorar con Shelldon es totalmente seguro y productivo. ¿Algo más? 🐢",
                "Muy buena observación sobre el mapa. ¿Quiere confirmar algún otro dato?",
                "Entiendo perfectamente. Caminar es la mejor forma de conocer una ciudad.",
                "¡Vaya! Parece que conoce bien los atajos. ¿Qué más busca por aquí?"
            ],
        },
        en: {
            greeting: [
                "Hello! Looking for a specific place? I know the whole city well. 🗺️", 
                "Good day! It seems you're a bit lost? Don't worry, I'll help you. 🐢",
                "Hi! Are you looking for a street, monument, or transport station nearby?",
                "Good afternoon! Can I help you find your destination today? I'm a route expert.",
                "Hello, hello! Do you need me to tell you how to get to some famous place in the area?",
                "Hi! Are you looking for the city center or a specific address?"
            ],
            order: [
                "Of course! Go straight down this same street and then turn right at the end.", 
                "Perfect, the place you're looking for is right behind the large square.",
                "Done! Take the second street on the left and walk for about two hundred meters. 📍",
                "Very well, cross the bridge and you'll see it right in front of the bus stop.",
                "Great! Follow the signs to the museum and you'll find it at the corner of the square.",
                "Sure, go down that avenue and turn right after passing the cinema."
            ],
            question: [
                "Are you looking for the central post office or would you prefer to go to the national museum first?", 
                "Are you coming from the train station or did you arrive by car in the city?",
                "Do you prefer the shortest way or the prettiest one that passes through the park?",
                "Do you know if the place you're going is open now or do you want us to check?",
                "Do you have a map with you or do you want me to draw you a quick little sketch?",
                "Is it very far from here or do you think you can walk comfortably?"
            ],
            thanks: [
                "You're welcome! I really hope you find the place on your first try! 🐢", 
                "Thank you too! Have an excellent walk through our city! 😊",
                "No problem at all! It's a pleasure to help visitors not get lost.",
                "Thank you! Enjoy the views while you walk towards your destination.",
                "My pleasure! If you get lost again, you already know where to find me."
            ],
            farewell: [
                "Goodbye! I hope you enjoy the path and the views very much! 🐢", 
                "See you later! Be careful with traffic and enjoy the walk!",
                "Bye! I hope your maps work better after my help.",
                "See you around! Have a fantastic day of exploration through the city.",
                "Safe travels! Until the next direction!"
            ],
            agree: [
                "Of course! It's very easy to get there from here following my instructions.", 
                "Perfect! You're already very close to your destination, just five minutes left.",
                "Awesome! I'm glad you understood the route I proposed well.",
                "Very well! So you know, straight ahead and enjoy the path.",
                "No problem! The route is safe and has no complications."
            ],
            describe: [
                "I understand, today you feel like exploring new places and getting a bit lost.", 
                "Very well. Be very careful with the traffic in the center, there are a lot of people.",
                "I understand perfectly what you're looking for. It's an emblematic place in the city.",
                "Alright, noted. I'll show you the safest way so you don't have problems.",
                "I see. Thank you for telling me your starting point, so the route is clearer."
            ],
            statement: [
                "Very well. Any other direction or place of interest you need today?", 
                "Exploring with Shelldon is totally safe and productive. Anything else? 🐢",
                "Very good observation about the map. Do you want to confirm any other data?",
                "I understand perfectly. Walking is the best way to know a city.",
                "Wow! It seems you know the shortcuts well. What else are you looking for?"
            ],
        },
        fr: {
            greeting: [
                "Bonjour ! Vous cherchez un endroit précis ? Je connais bien toute la ville. 🗺️", 
                "Salut ! On dirait que vous êtes un peu perdu ? Ne vous inquiétez pas, je vous aide. 🐢",
                "Bonjour ! Vous cherchez une rue, un monument ou une station de métro ?",
                "Salut ! Puis-je vous aider à trouver votre destination ? Je suis expert en itinéraires.",
                "Bonjour ! Avez-vous besoin que je vous indique comment aller à un endroit connu ?",
                "Salut ! Vous cherchez le centre-ville ou une adresse spécifique ?"
            ],
            order: [
                "Bien sûr ! Continuez tout droit dans cette rue et tournez à droite au bout.", 
                "Parfait, l'endroit que vous cherchez est juste derrière la grande place.",
                "Et voilà ! Prenez la deuxième à gauche et marchez environ deux cents mètres. 📍",
                "Très bien, traversez le pont et vous le verrez juste en face de l'arrêt de bus.",
                "Génial ! Suivez les panneaux vers le musée et vous le trouverez à l'angle.",
                "Bien sûr, descendez cette avenue et tournez à droite après le cinéma."
            ],
            question: [
                "Vous cherchez la poste centrale ou vous préférez aller au musée national d'abord ?", 
                "Vous venez de la gare ou vous êtes arrivé en voiture en ville ?",
                "Préférez-vous le chemin le plus court ou le plus joli qui passe par le parc ?",
                "Saviez-vous si l'endroit où vous allez est ouvert ou vous voulez qu'on vérifie ?",
                "Avez-vous un plan avec vous ou voulez-vous que je vous fasse un petit croquis ?",
                "C'est très loin d'ici d'après vous, ou vous pensez pouvoir y aller à pied ?"
            ],
            thanks: [
                "De rien ! J'espère vraiment que vous trouverez l'endroit du premier coup ! 🐢", 
                "Merci à vous ! Passez une excellente promenade dans notre ville ! 😊",
                "Il n'y a pas de quoi ! C'est un plaisir d'aider les visiteurs à ne pas se perdre.",
                "C'est moi qui vous remercie ! Profitez bien de la vue en marchant vers votre destination.",
                "Tout le plaisir est pour moi ! Si vous vous reperdez, vous savez où me trouver."
            ],
            farewell: [
                "Au revoir ! J'espère que vous apprécierez le trajet et la vue ! 🐢", 
                "À bientôt ! Faites attention à la circulation et profitez de la balade !",
                "Salut ! J'espère que vos cartes fonctionneront mieux après mon aide.",
                "On se revoit ! Passez une journée d'exploration fantastique en ville.",
                "Bon voyage ! À la prochaine direction !"
            ],
            agree: [
                "Bien sûr ! C'est très facile d'arriver d'ici en suivant mes indications.", 
                "Parfait ! Vous êtes déjà tout près de votre destination, plus que cinq minutes.",
                "Super ! Je suis ravi que vous ayez bien compris l'itinéraire proposé.",
                "Très bien ! Alors c'est parti, tout droit et profitez bien du chemin.",
                "Pas de problème ! L'itinéraire est sûr et n'a aucune complication."
            ],
            describe: [
                "Je comprends, aujourd'hui vous avez envie d'explorer et de vous perdre un peu.", 
                "Très bien. Faites bien attention à la circulation au centre, il y a beaucoup de monde.",
                "Je comprends parfaitement ce que vous cherchez. C'est un lieu emblématique.",
                "D'accord, c'est noté. Je vais vous indiquer le chemin le plus sûr.",
                "Je vois. Merci de me dire votre point de départ, l'itinéraire est plus clair."
            ],
            statement: [
                "Très bien. Une autre direction ou un autre lieu d'intérêt pour aujourd'hui ?", 
                "Explorer avec Shelldon est totalement sûr et productif. Autre chose ? 🐢",
                "Trés bonne observation sur le plan. Voulez-vous confirmer une autre donnée ?",
                "Je comprends tout à fait. Marcher est la meilleure façon de découvrir une ville.",
                "Saperlipopette ! On dirait que vous connaissez les raccourcis. Vous cherchez quoi d'autre ?"
            ],
        },
        de: {
            greeting: [
                "Hallo! Suchen Sie einen bestimmten Ort? Ich kenne die Stadt sehr gut. 🗺️", 
                "Guten Tag! Sieht aus, als hätten Sie sich verlaufen? Keine Sorge, ich helfe Ihnen. 🐢",
                "Hallo! Suchen Sie eine Straße, ein Denkmal oder eine Haltestelle hier in der Nähe?",
                "Guten Tag! Kann ich Ihnen helfen, Ihr Ziel heute zu finden? Ich bin ein Routenexperte.",
                "Hallo, hallo! Soll ich Ihnen zeigen, wie Sie zu einer berühmten Sehenswürdigkeit kommen?",
                "Guten Tag! Suchen Sie das Stadtzentrum oder eine ganz bestimmte Adresse?"
            ],
            order: [
                "Natürlich! Gehen Sie diese Straße immer geradeaus und biegen Sie am Ende rechts ab.", 
                "Perfekt, der Ort, den Sie suchen, liegt direkt hinter dem großen Platz.",
                "Erledigt! Nehmen Sie die zweite Straße links und gehen Sie etwa zweihundert Meter. 📍",
                "Sehr gut, überqueren Sie die Brücke und Sie sehen es direkt gegenüber der Bushaltestelle.",
                "Klasse! Folgen Sie den Schildern zum Museum und Sie finden es an der Ecke des Platzes.",
                "Klar, gehen Sie diese Allee hinunter und biegen Sie nach dem Kino rechts ab."
            ],
            question: [
                "Suchen Sie das Hauptpostamt oder möchten Sie zuerst zum Nationalmuseum gehen?", 
                "Kommen Sie vom Bahnhof oder sind Sie mit dem Auto in die Stadt gekommen?",
                "Bevorzugen Sie den kürzesten Weg oder den schönsten Weg durch den Park?",
                "Wissen Sie, ob der Ort, zu dem Sie wollen, jetzt offen ist oder sollen wir nachsehen?",
                "Haben Sie einen Stadtplan dabei oder soll ich Ihnen eine kleine Skizze machen?",
                "Ist es weit von hier oder glauben Sie, dass Sie gemütlich zu Fuß gehen können?"
            ],
            thanks: [
                "Gern geschehen! Ich hoffe wirklich, dass Sie den Ort auf Anhieb finden! 🐢", 
                "Danke Ihnen! Ich wünsche Ihnen einen ausgezeichneten Spaziergang durch unsere Stadt! 😊",
                "Nichts zu danken! Es ist ein Vergnügen, Besuchern zu helfen, sich nicht zu verlaufen.",
                "Danke! Genießen Sie die Aussicht, während Sie zu Ihrem Ziel spazieren.",
                "Ein Vergnügen! Wenn Sie sich wieder verlaufen, wissen Sie ja, wo Sie mich finden."
            ],
            farewell: [
                "Auf Wiedersehen! Ich hoffe, Sie genießen den Weg und die Aussicht sehr! 🐢", 
                "Bis später! Passen Sie auf den Verkehr auf und genießen Sie den Spaziergang!",
                "Tschüss! Ich hoffe, Ihre Karten funktionieren nach meiner Hilfe jetzt besser.",
                "Man sieht sich! Ich wünsche Ihnen einen fantastischen Erkundungstag in der Stadt.",
                "Gute Reise! Bis zur nächsten Wegbeschreibung!"
            ],
            agree: [
                "Natürlich! Es ist sehr einfach, von hier aus meinen Anweisungen zu folgen.", 
                "Perfekt! Sie sind schon ganz nah an Ihrem Ziel, es sind nur noch fünf Minuten.",
                "Wunderbar! Es freut mich, dass Sie die Route, die ich vorgeschlagen habe, verstanden haben.",
                "Sehr gut! Dann wissen Sie ja jetzt Bescheid: immer geradeaus und den Weg genießen.",
                "Kein Problem! Die Route ist sicher und hat überhaupt keine Komplikationen."
            ],
            describe: [
                "Ich verstehe, Sie sind zum ersten Mal hier und möchten die wichtigsten Orte sehen.", 
                "Sehr gut. Die Stadt ist sehr fahrradfreundlich, das wäre auch eine Option für Sie.",
                "Ich verstehe Ihre Situation. Dann ist dieser Weg der entspannteste für Sie.",
                "Alles klar, notiert. Sie suchen also eher nach den kulturellen Highlights der Stadt.",
                "Ich sehe. Danke für die Informationen zu Ihren Reiseplänen für heute."
            ],
            statement: [
                "Interessant. Haben Sie noch eine spezielle Frage zu dieser Route?", 
                "Sich mit Shelldon zurechtzufinden ist der sicherste Weg ans Ziel. Noch was? 🐢",
                "Sehr gute Beobachtung. Möchten Sie, dass ich ein anderes Detail der Karte bestätige?",
                "Verstanden. Dass unsere Besucher ihr Ziel finden, ist uns sehr wichtig.",
                "Ach was! Wir lieben es, wenn Besucher unsere Stadt so gründlich erkunden wollen."
            ],
        },
    },
};

// Generic fallback responses for any scenario not explicitly defined
const GENERIC_RESPONSES: Record<SupportedLang, Record<Intent, string[]>> = {
    es: {
        greeting: ["¡Hola! ¡Bienvenido! ¿En qué puedo ayudarte? 🐢", "¡Buenas! Me alegra verte. ¿Cómo estás?"],
        farewell: ["¡Hasta luego! Fue un placer hablar contigo. 🐢", "¡Adiós! ¡Que tengas un buen día!"],
        order: ["Claro, te ayudo con eso.", "Perfecto, enseguida lo organizo."],
        question: ["Buena pregunta. Te explico.", "Claro, con mucho gusto te ayudo con eso."],
        thanks: ["¡De nada! Siempre es un gusto ayudar. 🐢", "¡Gracias a ti! ¿Necesitas algo más?"],
        agree: ["¡Genial! Sigamos adelante.", "¡Perfecto! Vamos bien."],
        describe: ["Entiendo. Cuéntame más.", "Muy bien, eso es interesante. ¿Hay algo más?"],
        price: ["El precio es muy razonable. ¿Quieres saber el total? 💰", "¡Buena pregunta sobre el precio! Te digo enseguida."],
        help: ["¡No te preocupes! Estoy aquí para ayudarte. Vamos paso a paso. 🐢", "Tranquilo, es normal. Te lo explico de otra manera."],
        complain: ["Entiendo tu frustración. Vamos a solucionarlo. 🐢", "Lo siento mucho. ¿Cómo puedo mejorarlo?"],
        preference: ["¡Buena elección! Eso es muy popular.", "Entiendo tu preferencia. Es una opción excelente."],
        negotiate: ["Hmm, déjame ver qué puedo hacer por ti. 🤔", "Tenemos algunas ofertas especiales hoy."],
        emotion: ["¡Me alegra que te sientas así! 😊", "Entiendo cómo te sientes. Estoy aquí para ti. 🐢"],
        location: ["Está muy cerca de aquí. Te explico cómo llegar.", "¡Conozco bien ese lugar! Sigue todo recto."],
        time_ask: ["Son las diez en punto. ¿Tienes prisa?", "Todavía hay tiempo. No te preocupes. 🐢"],
        food: ["¡Mmm, eso suena delicioso! Buena elección. 🍽️", "¡Excelente gusto! ¿Quieres algo más para acompañar?"],
        weather: ["¡Hoy hace un día estupendo! ☀️", "El clima está agradable hoy. Perfecto para practicar."],
        hobby: ["¡Qué interesante! Cuéntame más sobre eso. 🎯", "¡Genial! Es un hobby muy divertido."],
        opinion: ["¡Interesante punto de vista! ¿Por qué piensas eso? 🤔", "Respeto tu opinión. Cuéntame más."],
        statement: ["Interesante. ¿Quieres continuar practicando?", "Muy bien dicho. ¡Sigue así! 🐢"],
    },
    en: {
        greeting: ["Hello! Welcome! How can I help you? 🐢", "Hi! Great to see you. How are you?"],
        farewell: ["Goodbye! It was a pleasure chatting. 🐢", "See you later! Have a great day!"],
        order: ["Sure, I'll help you with that.", "Perfect, I'll arrange that right away."],
        question: ["Good question. Let me explain.", "Sure, I'd be happy to help with that."],
        thanks: ["You're welcome! Always happy to help. 🐢", "Thank you too! Need anything else?"],
        agree: ["Great! Let's keep going.", "Perfect! We're doing well."],
        describe: ["I understand. Tell me more.", "Alright, that's interesting. Anything else?"],
        price: ["The price is very reasonable. Want to know the total? 💰", "Great question about the price! Let me check."],
        help: ["Don't worry! I'm here to help. Let's take it step by step. 🐢", "That's totally okay. Let me explain it differently."],
        complain: ["I understand your frustration. Let's fix that. 🐢", "I'm sorry about that. How can I make it better?"],
        preference: ["Great choice! That's very popular.", "I understand your preference. Excellent option!"],
        negotiate: ["Hmm, let me see what I can do for you. 🤔", "We have some special offers today."],
        emotion: ["I'm glad you feel that way! 😊", "I understand how you feel. I'm here for you. 🐢"],
        location: ["It's very close to here. Let me explain how to get there.", "I know that place well! Just go straight ahead."],
        time_ask: ["It's ten o'clock. Are you in a hurry?", "There's still time. Don't worry. 🐢"],
        food: ["Mmm, that sounds delicious! Great choice. 🍽️", "Excellent taste! Would you like something to go with that?"],
        weather: ["It's a wonderful day today! ☀️", "The weather is lovely today. Perfect for practicing!"],
        hobby: ["How interesting! Tell me more about that. 🎯", "That's awesome! What a fun hobby."],
        opinion: ["Interesting point of view! Why do you think that? 🤔", "I respect your opinion. Tell me more."],
        statement: ["Interesting. Would you like to keep practicing?", "Well said. Keep it up! 🐢"],
    },
    fr: {
        greeting: ["Bonjour ! Bienvenue ! Comment puis-je vous aider ? 🐢", "Salut ! Content de vous voir. Comment allez-vous ?"],
        farewell: ["Au revoir ! C'était un plaisir de discuter. 🐢", "À bientôt ! Bonne journée !"],
        order: ["Bien sûr, je m'en occupe.", "Parfait, je vous arrange ça tout de suite."],
        question: ["Bonne question. Je vous explique.", "Bien sûr, je suis content de vous aider."],
        thanks: ["De rien ! Toujours un plaisir d'aider. 🐢", "Merci à vous ! Besoin d'autre chose ?"],
        agree: ["Super ! Continuons.", "Parfait ! On avance bien."],
        describe: ["Je comprends. Dites-m'en plus.", "D'accord, c'est intéressant. Autre chose ?"],
        price: ["Le prix est très raisonnable. Voulez-vous connaître le total ? 💰", "Bonne question sur le prix ! Je vérifie."],
        help: ["Ne vous inquiétez pas ! Je suis là pour vous aider. Allons-y étape par étape. 🐢", "C'est tout à fait normal. Laissez-moi vous expliquer autrement."],
        complain: ["Je comprends votre frustration. Réglons ça ensemble. 🐢", "Je suis désolé. Comment puis-je améliorer les choses ?"],
        preference: ["Excellent choix ! C'est très populaire.", "Je comprends votre préférence. C'est une option excellente."],
        negotiate: ["Hmm, laissez-moi voir ce que je peux faire. 🤔", "Nous avons des offres spéciales aujourd'hui."],
        emotion: ["Je suis content que vous vous sentiez ainsi ! 😊", "Je comprends ce que vous ressentez. Je suis là pour vous. 🐢"],
        location: ["C'est tout près d'ici. Je vous explique comment y aller.", "Je connais bien cet endroit ! Allez tout droit."],
        time_ask: ["Il est dix heures. Vous êtes pressé ?", "Il y a encore du temps. Ne vous inquiétez pas. 🐢"],
        food: ["Mmm, ça a l'air délicieux ! Bon choix. 🍽️", "Excellent goût ! Voulez-vous un accompagnement ?"],
        weather: ["Il fait un temps magnifique aujourd'hui ! ☀️", "Le temps est agréable. Parfait pour pratiquer !"],
        hobby: ["Comme c'est intéressant ! Dites-m'en plus. 🎯", "Super ! C'est un hobby très amusant."],
        opinion: ["Point de vue intéressant ! Pourquoi pensez-vous ça ? 🤔", "Je respecte votre opinion. Dites-m'en plus."],
        statement: ["Intéressant. Voulez-vous continuer à pratiquer ?", "Bien dit. Continuez comme ça ! 🐢"],
    },
    de: {
        greeting: ["Hallo! Willkommen! Wie kann ich Ihnen helfen? 🐢", "Hi! Schön Sie zu sehen. Wie geht es Ihnen?"],
        farewell: ["Auf Wiedersehen! Es war schön zu plaudern. 🐢", "Bis bald! Einen schönen Tag noch!"],
        order: ["Klar, ich helfe Ihnen dabei.", "Perfekt, das organisiere ich sofort."],
        question: ["Gute Frage. Ich erkläre es Ihnen.", "Natürlich, ich helfe gerne dabei."],
        thanks: ["Gern geschehen! Immer gerne. 🐢", "Danke Ihnen! Brauchen Sie noch etwas?"],
        agree: ["Super! Machen wir weiter.", "Perfekt! Wir machen gute Fortschritte."],
        describe: ["Verstehe. Erzählen Sie mir mehr.", "In Ordnung, das ist interessant. Noch etwas?"],
        price: ["Der Preis ist sehr günstig. Möchten Sie den Gesamtpreis wissen? 💰", "Gute Frage zum Preis! Ich schaue nach."],
        help: ["Keine Sorge! Ich bin hier, um zu helfen. Schritt für Schritt. 🐢", "Das ist völlig normal. Ich erkläre es anders."],
        complain: ["Ich verstehe Ihre Frustration. Wir lösen das zusammen. 🐢", "Das tut mir leid. Wie kann ich es verbessern?"],
        preference: ["Tolle Wahl! Das ist sehr beliebt.", "Ich verstehe Ihre Vorliebe. Ausgezeichnete Option!"],
        negotiate: ["Hmm, mal sehen, was ich tun kann. 🤔", "Wir haben heute einige Sonderangebote."],
        emotion: ["Es freut mich, dass Sie sich so fühlen! 😊", "Ich verstehe, wie Sie sich fühlen. Ich bin für Sie da. 🐢"],
        location: ["Das ist ganz in der Nähe. Ich erkläre Ihnen den Weg.", "Ich kenne den Ort gut! Gehen Sie einfach geradeaus."],
        time_ask: ["Es ist zehn Uhr. Haben Sie es eilig?", "Es ist noch genug Zeit. Keine Sorge. 🐢"],
        food: ["Mmm, das klingt lecker! Tolle Wahl. 🍽️", "Ausgezeichneter Geschmack! Möchten Sie eine Beilage dazu?"],
        weather: ["Heute ist ein wunderschöner Tag! ☀️", "Das Wetter ist angenehm. Perfekt zum Üben!"],
        hobby: ["Wie interessant! Erzählen Sie mir mehr darüber. 🎯", "Super! Das ist ein tolles Hobby."],
        opinion: ["Interessanter Standpunkt! Warum denken Sie das? 🤔", "Ich respektiere Ihre Meinung. Erzählen Sie mehr."],
        statement: ["Interessant. Möchten Sie weiter üben?", "Gut gesagt. Weiter so! 🐢"],
    },
};

function getResponsePool(scenarioId: string, language: SupportedLang): Record<Intent, string[]> {
    const scenario = SCENARIO_RESPONSES[scenarioId]?.[language];
    const generic = GENERIC_RESPONSES[language];
    if (!scenario) return generic;
    // Merge: scenario-specific intents override generic, but fallback to generic for missing intents
    return { ...generic, ...scenario } as Record<Intent, string[]>;
}

// ============================================================
// OBJECTIVE TRACKING
// ============================================================
function checkObjectives(
    message: string,
    scenario: ShelldonScenario,
    language: SupportedLang,
    already: number[]
): number[] {
    const normalized = normalizeText(message);
    const objectives = scenario.objectives[language] || [];
    const phrases = scenario.suggestedPhrases[language] || [];
    const newlyCompleted: number[] = [];

    objectives.forEach((_, idx) => {
        if (already.includes(idx)) return;

        // Check if user used one of the suggested phrases (or close matches)
        if (idx < phrases.length) {
            const phraseNorm = normalizeText(phrases[idx]);
            const phraseWords = phraseNorm.split(" ").filter(w => w.length >= 2);
            const matchCount = phraseWords.filter(w => normalized.includes(w)).length;
            if (matchCount >= Math.ceil(phraseWords.length * 0.4)) {
                newlyCompleted.push(idx);
                return;
            }
        }

        // Fallback: intent-based objective completion
        const intent = detectIntent(message, language);
        if (idx === 0 && (intent === "greeting" || intent === "describe")) newlyCompleted.push(idx);
        if (idx === 1 && (intent === "order" || intent === "question" || intent === "describe")) newlyCompleted.push(idx);
        if (idx === 2 && (intent === "thanks" || intent === "farewell" || intent === "agree")) newlyCompleted.push(idx);
    });

    return newlyCompleted;
}

// ============================================================
// STATIC GRAMMAR CORRECTIONS (Regex-based)
// ============================================================
interface CorrectionRule {
    pattern: RegExp;
    wrong: string;
    right: string;
    explanation: string;
}

const CORRECTION_RULES: Record<SupportedLang, CorrectionRule[]> = {
    fr: [
        { pattern: /\bje suis alle a le\b/i, wrong: "à le", right: "au", explanation: "Fransızcada 'à + le' → 'au' şeklinde kısalır." },
        { pattern: /\bje suis alle a les\b/i, wrong: "à les", right: "aux", explanation: "Fransızcada 'à + les' → 'aux' şeklinde kısalır." },
        { pattern: /\bde le\b/i, wrong: "de le", right: "du", explanation: "Fransızcada 'de + le' → 'du' şeklinde kısalır." },
        { pattern: /\bje suis un femme\b/i, wrong: "un femme", right: "une femme", explanation: "'Femme' dişil bir kelimedir, 'une' kullanılmalı." },
        { pattern: /\bje suis un fille\b/i, wrong: "un fille", right: "une fille", explanation: "'Fille' dişil bir kelimedir, 'une' kullanılmalı." },
        { pattern: /\bil a faim\b.*\bje\b/i, wrong: "il a faim", right: "j'ai faim", explanation: "Kendin için 'j'ai faim' kullanmalısın." },
        { pattern: /\bje a\b/i, wrong: "je a", right: "j'ai", explanation: "'Je' + ünlü ile başlayan fiil → apostrophe: j'ai." },
        { pattern: /\bje ai\b/i, wrong: "je ai", right: "j'ai", explanation: "'Je' + 'ai' → 'j'ai' olarak kısalır (élision)." },
        { pattern: /\bje est\b/i, wrong: "je est", right: "je suis", explanation: "'Être' fiilinin 1. tekil kişisi 'suis'tir, 'est' değil." },
        { pattern: /\btu est\b/i, wrong: "tu est", right: "tu es", explanation: "'Être' fiilinin 2. kişisi 'es'tir." },
    ],
    es: [
        { pattern: /\byo soy tengo\b/i, wrong: "soy tengo", right: "tengo", explanation: "'Tener' fiilinde 'soy' kullanılmaz, sadece 'tengo' yeterli." },
        { pattern: /\byo es\b/i, wrong: "yo es", right: "yo soy", explanation: "'Ser' fiilinin 1. kişisi 'soy'dur, 'es' değil." },
        { pattern: /\btu es\b/i, wrong: "tu es", right: "tú eres", explanation: "'Ser' fiilinin 2. kişisi 'eres'tir." },
        { pattern: /\bestoy bueno\b/i, wrong: "estoy bueno", right: "estoy bien", explanation: "'Estoy bueno' yanlış anlam taşır, 'estoy bien' demelisin." },
        { pattern: /\bme gusta los\b/i, wrong: "me gusta los", right: "me gustan los", explanation: "Çoğul nesnelerde 'gustan' kullanılır." },
        { pattern: /\bun problema\b/i, wrong: "un problema", right: "un problema", explanation: "'Problema' erkek kelimedir ama '-a' ile biter. Doğru kullandın!" },
        { pattern: /\besta problema\b/i, wrong: "esta problema", right: "este problema", explanation: "'Problema' erkek kelimedir, 'este' kullanılmalı." },
        { pattern: /\bla problema\b/i, wrong: "la problema", right: "el problema", explanation: "'Problema' erkek kelimedir, 'el' kullanılmalı." },
        { pattern: /\byo tiene\b/i, wrong: "yo tiene", right: "yo tengo", explanation: "'Tener' fiilinin 1. kişisi 'tengo'dur." },
    ],
    en: [
        { pattern: /\bi is\b/i, wrong: "I is", right: "I am", explanation: "1. tekil kişi için 'am' kullanılır, 'is' değil." },
        { pattern: /\bhe have\b/i, wrong: "he have", right: "he has", explanation: "3. tekil kişi için 'has' kullanılır." },
        { pattern: /\bshe have\b/i, wrong: "she have", right: "she has", explanation: "3. tekil kişi için 'has' kullanılır." },
        { pattern: /\bi doesn't\b/i, wrong: "I doesn't", right: "I don't", explanation: "1. kişi için 'don't' kullanılır, 'doesn't' değil." },
        { pattern: /\bhe don't\b/i, wrong: "he don't", right: "he doesn't", explanation: "3. tekil kişi için 'doesn't' kullanılır." },
        { pattern: /\bmore better\b/i, wrong: "more better", right: "better", explanation: "'Better' zaten karşılaştırma biçimi, 'more' eklenmez." },
        { pattern: /\bdoes you\b/i, wrong: "does you", right: "do you", explanation: "'You' için 'do' kullanılır, 'does' değil." },
        { pattern: /\bcan to\b/i, wrong: "can to", right: "can", explanation: "'Can' yardımcı fiilinden sonra 'to' gelmez." },
    ],
    de: [
        { pattern: /\bich bist\b/i, wrong: "ich bist", right: "ich bin", explanation: "'Sein' fiilinin 1. tekil şahıs (ich) çekimi 'bin'dir." },
        { pattern: /\bdu bin\b/i, wrong: "du bin", right: "du bist", explanation: "'Sein' fiilinin 2. tekil şahıs (du) çekimi 'bist'tir." },
        { pattern: /\bdu ist\b/i, wrong: "du ist", right: "du bist", explanation: "'Sein' fiilinin 2. tekil şahıs (du) çekimi 'bist'tir." },
        { pattern: /\ber bin\b/i, wrong: "er bin", right: "er ist", explanation: "'O' (er/sie/es) için 'ist' kullanılır." },
        { pattern: /\ber bist\b/i, wrong: "er bist", right: "er ist", explanation: "'O' (er/sie/es) için 'ist' kullanılır." },
        { pattern: /\bich hast\b/i, wrong: "ich hast", right: "ich habe", explanation: "'Haben' fiilinin 1. şahıs çekimi 'habe'dir." },
        { pattern: /\bich hat\b/i, wrong: "ich hat", right: "ich habe", explanation: "'Haben' fiilinin 1. şahıs çekimi 'habe'dir." },
        { pattern: /\bdu habe\b/i, wrong: "du habe", right: "du hast", explanation: "'Haben' fiilinin 2. şahıs çekimi 'hast'tır." },
        { pattern: /\bdu hat\b/i, wrong: "du hat", right: "du hast", explanation: "'Haben' fiilinin 2. şahıs çekimi 'hast'tır." },
        { pattern: /\ber habe\b/i, wrong: "er habe", right: "er hat", explanation: "'Er/sie/es' için 'hat' kullanılır." },
        { pattern: /\bich haben\b/i, wrong: "ich haben", right: "ich habe", explanation: "'Ich' için 'habe' kullanılır, 'haben' çoğul/mastar halidir." },
        { pattern: /\beine mann\b/i, wrong: "eine Mann", right: "ein Mann", explanation: "'Mann' erkek (der) olduğu için 'ein' kullanılır." },
        { pattern: /\bein frau\b/i, wrong: "ein Frau", right: "eine Frau", explanation: "'Frau' dişil (die) olduğu için 'eine' kullanılır." },
        { pattern: /\bein tasche\b/i, wrong: "ein Tasche", right: "eine Tasche", explanation: "'Tasche' dişil (die) olduğu için 'eine' kullanılır." },
        { pattern: /\bich gehe zu hause\b/i, wrong: "zu Hause", right: "nach Hause", explanation: "Eve gitmek 'nach Hause', evde olmak 'zu Hause'dur." },
        { pattern: /\bum montag\b/i, wrong: "um Montag", right: "am Montag", explanation: "Günlerde 'am' kullanılır. 'um' sadece saatlerdedir." },
        { pattern: /\bum dienstag\b/i, wrong: "um Dienstag", right: "am Dienstag", explanation: "Günlerde 'am' kullanılır. 'um' sadece saatlerdedir." },
        { pattern: /\bum wochenende\b/i, wrong: "um Wochenende", right: "am Wochenende", explanation: "Hafta sonu için 'am' kullanılır." },
        { pattern: /\bam 10 uhr\b/i, wrong: "am 10 Uhr", right: "um 10 Uhr", explanation: "Saatlerde her zaman 'um' kullanılır." },
        { pattern: /\bam 8 uhr\b/i, wrong: "am 8 Uhr", right: "um 8 Uhr", explanation: "Saatlerde her zaman 'um' kullanılır." },
        { pattern: /\bim montag\b/i, wrong: "im Montag", right: "am Montag", explanation: "Günlerde 'am' kullanılır. 'im' aylar ve mevsimler içindir." },
        { pattern: /\bim sommer\b/i, wrong: "im Sommer", right: "im Sommer", explanation: "Doğru! Mevsimlerde 'im' kullanılır." },
        { pattern: /\bkein gut\b/i, wrong: "kein gut", right: "nicht gut", explanation: "Sıfatları olumsuz yaparken 'nicht' kullanılır." },
        { pattern: /\bkein schnell\b/i, wrong: "kein schnell", right: "nicht schnell", explanation: "Sıfatları olumsuz yaparken 'nicht' kullanılır." },
        { pattern: /\bnicht auto\b/i, wrong: "nicht Auto", right: "kein Auto", explanation: "Belirsiz isimleri olumsuz yaparken 'kein' kullanılır." },
        { pattern: /\bnicht hunger\b/i, wrong: "nicht Hunger", right: "keinen Hunger", explanation: "Açlık (Hunger) bir isimdir, 'keinen' ile olumsuzlanır." },
        { pattern: /\bmein kopf tun weh\b/i, wrong: "tun weh", right: "tut weh", explanation: "Kafa (Kopf) tekil olduğu için 'tut' kullanılmalı." },
        { pattern: /\bmeine beine tut weh\b/i, wrong: "tut weh", right: "tun weh", explanation: "Bacaklar (Beine) çoğul olduğu için 'tun' kullanılmalı." },
        { pattern: /\bmeine augen tut weh\b/i, wrong: "tut weh", right: "tun weh", explanation: "Gözler (Augen) çoğul olduğu için 'tun' kullanılmalı." },
        { pattern: /\bheute ich komme\b/i, wrong: "heute ich komme", right: "heute komme ich", explanation: "Zaman başa gelirse fiil 2. sırada kalır, özne ile yer değiştirir." },
        { pattern: /\bich kann (.*)(e|st|t)\b/i, wrong: "ekli fiil", right: "mastar fiil (-en)", explanation: "Modal fiil (können) varken asıl fiil cümlenin sonunda mastar (-en) kalmalıdır." },
        { pattern: /\b(ich bin|er ist|sie ist) ein (lehrer|arzt|student|koch|kellner)\b/i, wrong: "ein + meslek", right: "meslek", explanation: "Meslek söylerken artikel (ein/eine) kullanılmaz." },
        { pattern: /\b(ich bin|er ist|sie ist) eine (lehrerin|arztin|studentin|kochin|kellnerin)\b/i, wrong: "eine + meslek", right: "meslek", explanation: "Meslek söylerken artikel (ein/eine) kullanılmaz." },
        { pattern: /\bgehe nach arzt\b/i, wrong: "nach Arzt", right: "zum Arzt", explanation: "Kişilere giderken 'zu' kullanılır, şehirler için 'nach'." },
        { pattern: /\bgehe nach (max|erika|dir)\b/i, wrong: "nach + kişi", right: "zu + kişi", explanation: "Kişilere yönelirken 'zu' edatı kullanılır." },
        { pattern: /\bmit das auto\b/i, wrong: "mit das Auto", right: "mit dem Auto", explanation: "'mit' edatı Dativ ister. das → dem olur." },
        { pattern: /\bmit die u bahn\b/i, wrong: "mit die U-Bahn", right: "mit der U-Bahn", explanation: "'mit' edatı Dativ ister. die → der olur." },
        { pattern: /\bich anrufe\b/i, wrong: "anrufe", right: "rufe ... an", explanation: "Anrufen ayrılan bir fiildir. 'an' eki sona gitmelidir." },
        { pattern: /\ber aufsteht\b/i, wrong: "aufsteht", right: "steht ... auf", explanation: "Aufstehen ayrılan bir fiildir. 'auf' eki sona gitmelidir." },
    ],
};

function findCorrection(message: string, language: SupportedLang): ShelldonOfflineReply["correction"] {
    const rules = CORRECTION_RULES[language] || [];
    const normalized = normalizeText(message);
    for (const rule of rules) {
        if (rule.pattern.test(normalized) || rule.pattern.test(message)) {
            return { wrong: rule.wrong, right: rule.right, explanation: rule.explanation };
        }
    }
    return null;
}

// ============================================================
// EMOJI GAME (Static Sets for /game command)
// ============================================================
const EMOJI_GAME_SETS: Record<SupportedLang, { emojis: string; answers: string[] }[]> = {
    es: [
        { emojis: "🍎 🐱 🚗 📚 🌸", answers: ["manzana", "gato", "coche", "libro", "flor"] },
        { emojis: "🏠 ☀️ 🐟 🎵 ✈️", answers: ["casa", "sol", "pescado", "música", "avión"] },
        { emojis: "🍕 🐕 🌊 👨 🎸", answers: ["pizza", "perro", "mar", "hombre", "guitarra"] },
        { emojis: "🌙 🍞 🐴 ⚽ 🎨", answers: ["luna", "pan", "caballo", "fútbol", "arte"] },
        { emojis: "🍳 🐦 🚂 📱 🌳", answers: ["huevo", "pájaro", "tren", "teléfono", "árbol"] },
    ],
    en: [
        { emojis: "🍎 🐱 🚗 📚 🌸", answers: ["apple", "cat", "car", "book", "flower"] },
        { emojis: "🏠 ☀️ 🐟 🎵 ✈️", answers: ["house", "sun", "fish", "music", "airplane"] },
        { emojis: "🍕 🐕 🌊 👨 🎸", answers: ["pizza", "dog", "sea", "man", "guitar"] },
        { emojis: "🌙 🍞 🐴 ⚽ 🎨", answers: ["moon", "bread", "horse", "football", "art"] },
        { emojis: "🍳 🐦 🚂 📱 🌳", answers: ["egg", "bird", "train", "phone", "tree"] },
    ],
    fr: [
        { emojis: "🍎 🐱 🚗 📚 🌸", answers: ["pomme", "chat", "voiture", "livre", "fleur"] },
        { emojis: "🏠 ☀️ 🐟 🎵 ✈️", answers: ["maison", "soleil", "poisson", "musique", "avion"] },
        { emojis: "🍕 🐕 🌊 👨 🎸", answers: ["pizza", "chien", "mer", "homme", "guitare"] },
        { emojis: "🌙 🍞 🐴 ⚽ 🎨", answers: ["lune", "pain", "cheval", "football", "art"] },
        { emojis: "🍳 🐦 🚂 📱 🌳", answers: ["oeuf", "oiseau", "train", "téléphone", "arbre"] },
    ],
    de: [
        { emojis: "🍎 🐱 🚗 📚 🌸", answers: ["Apfel", "Katze", "Auto", "Buch", "Blume"] },
        { emojis: "🏠 ☀️ 🐟 🎵 ✈️", answers: ["Haus", "Sonne", "Fisch", "Musik", "Flugzeug"] },
        { emojis: "🍕 🐕 🌊 👨 🎸", answers: ["Pizza", "Hund", "Meer", "Mann", "Gitarre"] },
        { emojis: "🌙 🍞 🐴 ⚽ 🎨", answers: ["Mond", "Brot", "Pferd", "Fußball", "Kunst"] },
        { emojis: "🍳 🐦 🚂 📱 🌳", answers: ["Ei", "Vogel", "Zug", "Telefon", "Baum"] },
    ],
};

export function getEmojiGame(language: string, seed: number): string {
    const l = lang(language);
    const sets = EMOJI_GAME_SETS[l];
    const set = choose(sets, seed);
    return set.emojis;
}

// ============================================================
// CONVERSATION HELPERS (Memory, Entities, Templates)
// ============================================================

/**
 * Kullanıcının mesajından isim, yiyecek, eşya gibi bilgileri cımbızla çeker.
 */
function extractEntities(message: string, language: SupportedLang): { name: string | null; items: string[] } {
    const normalized = normalizeText(message);
    let name: string | null = null;
    const items: string[] = [];

    // Ad yakalama (Basit desenler)
    const namePatterns = {
        es: [/\bme llamo ([a-z]+)\b/i, /\bsoy ([a-z]+)\b/i, /\bmi nombre es ([a-z]+)\b/i],
        en: [/\bim ([a-z]+)\b/i, /\bi am ([a-z]+)\b/i, /\bmy name is ([a-z]+)\b/i, /\bcall me ([a-z]+)\b/i],
        fr: [/\bje m appelle ([a-z]+)\b/i, /\bje suis ([a-z]+)\b/i, /\bmon nom est ([a-z]+)\b/i],
        de: [/\bich bin ([a-z]+)\b/i, /\bich heisse ([a-z]+)\b/i, /\bmein name ist ([a-z]+)\b/i],
    };

    const patterns = namePatterns[language];
    for (const p of patterns) {
        const match = message.match(p);
        if (match && match[1] && match[1].length > 2) {
            name = match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
            break;
        }
    }

    // Yiyecek/Eşya yakalama (KEYWORD_MAP içindeki food listesini kullanabiliriz)
    const foodKeywords = KEYWORD_MAP[language].food;
    for (const food of foodKeywords) {
        if (normalized.includes(food)) {
            items.push(food);
        }
    }

    return { name, items };
}

/**
 * Konuşma hafızasını günceller.
 */
function updateMemory(
    message: string,
    intent: Intent,
    currentMemory: ConversationMemory | undefined,
    language: SupportedLang
): ConversationMemory {
    const mem = currentMemory || createEmptyMemory();
    const entities = extractEntities(message, language);

    const newMemory: ConversationMemory = {
        ...mem,
        lastIntent: intent,
        turnCount: mem.turnCount + 1,
    };

    if (entities.name) newMemory.userName = entities.name;
    if (entities.items.length > 0) {
        newMemory.mentionedItems = [...new Set([...mem.mentionedItems, ...entities.items])].slice(-5);
        newMemory.topicStack = [...new Set([...mem.topicStack, "food"])].slice(-3);
    }

    // Basit duygu analizi
    if (intent === "emotion" || intent === "complain") {
        const neg = ["triste", "bad", "mauvais", "schlecht", "terrible", "horrible", "angry", "fache", "wutend"];
        if (neg.some(w => normalizeText(message).includes(w))) {
            newMemory.userMood = "negative";
        } else {
            newMemory.userMood = "positive";
        }
    }

    return newMemory;
}

/**
 * {userName}, {item} gibi etiketleri hafızadaki gerçek verilerle doldurur.
 */
function fillTemplate(text: string, memory: ConversationMemory, language: SupportedLang): string {
    let result = text;
    
    // İsim doldurma
    if (memory.userName) {
        const greets = { es: "Hola ", en: "Hello ", fr: "Salut ", de: "Hallo " };
        result = result.replace(/¡?Hola!?|Hello|Bonjour|Hallo/i, `${greets[language]}${memory.userName}`);
    }

    // Eşya/Yiyecek doldurma
    if (memory.mentionedItems.length > 0) {
        const lastItem = memory.mentionedItems[memory.mentionedItems.length - 1];
        result = result.replace(/\{item\}/g, lastItem);
    } else {
        // Fallback if no item mentioned
        const fallbacks = { es: "esto", en: "it", fr: "ceci", de: "das" };
        result = result.replace(/\{item\}/g, fallbacks[language]);
    }

    return result;
}

/**
 * Diyaloğu sürdürmek için rastgele ama bağlamla uyumlu bir soru ekler.
 */
function getFollowUp(intent: Intent, language: SupportedLang, memory: ConversationMemory): string {
    const followUps: Record<SupportedLang, Partial<Record<Intent, string[]>>> = {
        es: {
            order: ["¿Algo más para acompañar?", "¿Desea la cuenta también?", "¿Le gusta mucho ese plato?"],
            greeting: ["¿Cómo te va hoy?", "¿En qué puedo ayudarte?", "¿Buscas algo específico?"],
            food: ["¿Es tu comida favorita?", "¿Prefieres dulce o salado?", "¿Has probado nuestra especialidad?"],
            emotion: ["¿Quieres contarme más?", "¿Puedo ayudarte con eso?", "¿Desde cuándo te sientes así?"],
            opinion: ["¿Por qué piensas eso?", "¿Es un tema que te interesa mucho?", "¿Qué opinan tus amigos?"],
            statement: ["Cuéntame más, por favor.", "¿Y qué pasó después?", "¿Qué piensas hacer ahora?"],
        },
        en: {
            order: ["Anything else with that?", "Would you like the bill too?", "Do you like that dish a lot?"],
            greeting: ["How's it going today?", "How can I help you?", "Are you looking for something specific?"],
            food: ["Is that your favorite food?", "Do you prefer sweet or savory?", "Have you tried our specialty?"],
            emotion: ["Want to tell me more?", "Can I help you with that?", "How long have you felt this way?"],
            opinion: ["Why do you think that?", "Is this a topic you're interested in?", "What do your friends think?"],
            statement: ["Tell me more, please.", "And what happened next?", "What are you planning to do now?"],
        },
        fr: {
            order: ["Autre chose avec ça ?", "Voulez-vous l'addition aussi ?", "Aimez-vous beaucoup ce plat ?"],
            greeting: ["Comment ça va aujourd'hui ?", "Comment puis-je vous aider ?", "Cherchez-vous quelque chose de précis ?"],
            food: ["Est-ce votre plat préféré ?", "Préférez-vous le sucré ou le salé ?", "Avez-vous goûté notre spécialité ?"],
            emotion: ["Voulez-vous m'en dire plus ?", "Puis-je vous aider ?", "Depuis quand vous sentez-vous ainsi ?"],
            opinion: ["Pourquoi pensez-vous cela ?", "Est-ce un sujet qui vous intéresse ?", "Qu'en pensent vos amis ?"],
            statement: ["Dites-m'en plus, s'il vous plaît.", "Et que s'est-il passé ensuite ?", "Que comptez-vous faire maintenant ?"],
        },
        de: {
            order: ["Noch etwas dazu?", "Möchten Sie auch die Rechnung?", "Mögen Sie dieses Gericht sehr?"],
            greeting: ["Wie geht es dir heute?", "Wie kann ich dir helfen?", "Suchst du etwas Bestimmtes?"],
            food: ["Ist das dein Lieblingsessen?", "Magst du es lieber süß oder salzig?", "Hast du unsere Spezialität probiert?"],
            emotion: ["Möchtest du mir mehr erzählen?", "Kann ich dir dabei helfen?", "Seit wann fühlst du dich so?"],
            opinion: ["Warum denkst du das?", "Interessiert dich dieses Thema sehr?", "Was denken deine Freunde darüber?"],
            statement: ["Erzähl mir bitte mehr.", "Und was ist dann passiert?", "Was hast du jetzt vor?"],
        },
    };

    const pool = followUps[language][intent] || followUps[language].statement || ["..."];
    const seed = computeSeed(intent + (memory.userName || ""), memory.turnCount);
    return "\n\n" + choose(pool, seed);
}

// ============================================================
// MAIN API: createShelldonIntro
// ============================================================
export function createShelldonIntro(
    scenario: ShelldonScenario,
    language: string,
    level: string,
    practiceMode: string = "speaking"
): ShelldonOfflineReply {
    const l = lang(language);
    const pool = getResponsePool(scenario.id, l);
    const seed = computeSeed(scenario.id, 0);

    if (practiceMode === "vocab") {
        const vocabIntroByLang: Record<SupportedLang, string> = {
            es: `¡Hoy vamos a practicar vocabulario con el tema '${scenario.titleTr}'! Empecemos con un juego rápido. ¿Qué significa: ${getEmojiGame(l, seed)}? 🐢`,
            en: `Today we are practicing vocabulary with the theme '${scenario.titleTr}'! Let's start with a quick game. What does this mean: ${getEmojiGame(l, seed)}? 🐢`,
            fr: `Aujourd'hui, nous pratiquons le vocabulaire sur le thème '${scenario.titleTr}' ! Commençons par un petit jeu. Que signifie : ${getEmojiGame(l, seed)} ? 🐢`,
            de: `Heute üben wir Vokabeln zum Thema '${scenario.titleTr}'! Lass uns mit einem kurzen Spiel beginnen. Was bedeutet das: ${getEmojiGame(l, seed)}? 🐢`,
        };
        return {
            message: vocabIntroByLang[l],
            mood: "happy",
            completedObjectives: [],
            correction: null,
            updatedMemory: createEmptyMemory(),
        };
    }

    if (practiceMode === "grammar") {
        const grammarIntroByLang: Record<SupportedLang, string> = {
            es: `¡Vamos a enfocarnos en la gramática hoy! En el escenario '${scenario.titleTr}', asegúrate de usar frases completas. ¿Puedes construir una oración con tus propias palabras para empezar? 🐢`,
            en: `Let's focus on grammar today! In the scenario '${scenario.titleTr}', make sure to use complete sentences. Can you build a sentence in your own words to start? 🐢`,
            fr: `Concentrons-nous sur la grammaire aujourd'hui ! Dans le scénario '${scenario.titleTr}', veillez à faire des phrases complètes. Pouvez-vous construire une phrase avec vos propres mots pour commencer ? 🐢`,
            de: `Konzentrieren wir uns heute auf die Grammatik! Achte im Szenario '${scenario.titleTr}' darauf, ganze Sätze zu bilden. Kannst du zum Start einen Satz mit eigenen Worten bilden? 🐢`,
        };
        return {
            message: grammarIntroByLang[l],
            mood: "thinking",
            completedObjectives: [],
            correction: null,
            updatedMemory: createEmptyMemory(),
        };
    }

    const greeting = choose(pool.greeting, seed);

    // Add objective hint
    const objectives = scenario.objectives[l] || scenario.objectives["en"] || [];
    const firstObj = objectives[0] || "";

    const hintByLang: Record<SupportedLang, string> = {
        es: `\n\n🎯 Primer objetivo: ${firstObj}`,
        en: `\n\n🎯 First objective: ${firstObj}`,
        fr: `\n\n🎯 Premier objectif : ${firstObj}`,
        de: `\n\n🎯 Erstes Ziel: ${firstObj}`,
    };

    return {
        message: greeting + (firstObj ? hintByLang[l] : ""),
        mood: "happy",
        completedObjectives: [],
        correction: null,
        updatedMemory: createEmptyMemory(),
    };
}

// ============================================================
// MAIN API: createShelldonReply
// ============================================================
export function createShelldonReply(options: ReplyOptions): ShelldonOfflineReply {
    const { scenario, language, userMessage, turnIndex, completedObjectives, practiceMode, memory } = options;
    const l = lang(language);
    const seed = computeSeed(userMessage, turnIndex);

    // 1. Intent Detection
    const intent = detectIntent(userMessage, l);

    // 2. Memory Update
    const updatedMemory = updateMemory(userMessage, intent, memory, l);

    // 3. Format response based on practiceMode
    let message = "";
    const pool = getResponsePool(scenario.id, l);
    
    if (practiceMode === "vocab") {
        const emojiSet = getEmojiGame(l, seed + 1);
        const vocabRepliesByLang: Record<SupportedLang, string> = {
            es: `¡Interesante! Sigue así. 🌟 Ahora intenta decir los nombres de estos emojis: ${emojiSet}`,
            en: `Interesting! Keep it up. 🌟 Now try to name these emojis: ${emojiSet}`,
            fr: `Intéressant ! Continue comme ça. 🌟 Maintenant, essaie de nommer ces emojis : ${emojiSet}`,
            de: `Interessant! Weiter so. 🌟 Versuch nun, diese Emojis zu benennen: ${emojiSet}`,
        };
        message = vocabRepliesByLang[l];
    } else {
        // Normal or Grammar mode
        const rawMessage = choose(pool[intent] || pool.statement, seed);
        
        // Şablon doldurma (e.g. {item} -> "pizza")
        message = fillTemplate(rawMessage, updatedMemory, l);

        // Persona ve Hafıza bazlı dokunuşlar
        if (updatedMemory.persona === "friendly" && updatedMemory.userName) {
            message = `¡${updatedMemory.userName}! ` + message;
        }

        // Takip sorusu ekleme (Diyaloğu canlı tutmak için)
        if (practiceMode !== "grammar" && !userMessage.includes("?")) {
            message += getFollowUp(intent, l, updatedMemory);
        }
    }

    // 4. Check objectives (only in speaking/grammar)
    let newObjectives: number[] = [];
    if (practiceMode !== "vocab") {
        newObjectives = checkObjectives(userMessage, scenario, l, completedObjectives);
    }
    const allCompleted = [...new Set([...completedObjectives, ...newObjectives])];

    // 5. Grammar correction
    const correction = findCorrection(userMessage, l);

    // 6. Celebration if objective completed
    if (newObjectives.length > 0 && practiceMode !== "vocab") {
        const scenarioObjectives = scenario.objectives[l] || [];
        const completedNames = newObjectives.map(i => scenarioObjectives[i]).filter(Boolean);
        const celebrateByLang: Record<SupportedLang, string> = {
            es: `\n\n✨ ¡Objetivo completado! ${completedNames.join(", ")}`,
            en: `\n\n✨ Objective completed! ${completedNames.join(", ")}`,
            fr: `\n\n✨ Objectif accompli ! ${completedNames.join(", ")}`,
            de: `\n\n✨ Ziel erreicht! ${completedNames.join(", ")}`,
        };
        message += celebrateByLang[l];
    }

    // 7. Determine mood
    let mood: ShelldonOfflineReply["mood"] = "neutral";
    if (practiceMode === "vocab") mood = "happy";
    else if (newObjectives.length > 0) mood = "happy";
    else if (correction) mood = "thinking";
    else if (intent === "greeting") mood = "happy";
    else if (intent === "farewell") mood = "sad";
    else if (intent === "question" || intent === "opinion") mood = "thinking";
    else if (updatedMemory.userMood === "negative") mood = "sad";

    return {
        message,
        mood,
        completedObjectives: allCompleted,
        correction,
        updatedMemory,
    };
}

// ============================================================
// MAIN API: createShelldonFeedback
// ============================================================
export function createShelldonFeedback(
    messages: { role: string; content: string }[],
    language: string,
    completedObjectives: number[],
    totalObjectives: number
): ShelldonOfflineFeedback {
    const userMessages = messages.filter(m => m.role === "user");
    const turnCount = userMessages.length;
    const totalWords = userMessages.reduce((sum, m) => sum + m.content.split(/\s+/).length, 0);
    const avgWords = turnCount > 0 ? totalWords / turnCount : 0;

    // Score calculation
    const objectiveScore = Math.min(40, (completedObjectives.length / Math.max(totalObjectives, 1)) * 40);
    const turnScore = Math.min(30, turnCount * 4);
    const wordScore = Math.min(30, avgWords * 5);
    const score = Math.round(Math.min(100, objectiveScore + turnScore + wordScore));

    const l = lang(language);

    // Static feedback based on score ranges
    const grammarByScore: Record<SupportedLang, string[]> = {
        es: ["Tus frases son comprensibles. Sigue practicando las estructuras.", "Buen uso de la gramática. Intenta frases más complejas.", "¡Gramática excelente! Casi nativa."],
        en: ["Your sentences are understandable. Keep practicing structures.", "Good grammar usage. Try more complex sentences.", "Excellent grammar! Nearly native."],
        fr: ["Tes phrases sont compréhensibles. Continue à pratiquer.", "Bonne utilisation de la grammaire. Essaie des phrases complexes.", "Grammaire excellente ! Presque natif."],
        de: ["Deine Sätze sind verständlich. Übe weiter die Strukturen.", "Guter Grammatikgebrauch. Versuch komplexere Sätze.", "Ausgezeichnete Grammatik! Fast muttersprachlich."],
    };

    const vocabByScore: Record<SupportedLang, string[]> = {
        es: ["Vocabulario básico correcto. Incorpora nuevas palabras.", "Buen vocabulario. Usa sinónimos para enriquecer.", "¡Vocabulario rico y variado!"],
        en: ["Basic vocabulary is correct. Incorporate new words.", "Good vocabulary. Use synonyms to enrich it.", "Rich and varied vocabulary!"],
        fr: ["Vocabulaire de base correct. Incorpore de nouveaux mots.", "Bon vocabulaire. Utilise des synonymes pour enrichir.", "Vocabulaire riche et varié !"],
        de: ["Grundwortschatz ist korrekt. Baue neue Wörter ein.", "Guter Wortschatz. Nutze Synonyme zur Bereicherung.", "Reicher und vielfältiger Wortschatz!"],
    };

    const tipByLang: Record<SupportedLang, string> = {
        es: score < 50 ? "Intenta completar todos los objetivos del escenario." : score < 80 ? "Construye frases más largas para mejorar tu fluidez." : "¡Sigue así! Prueba escenarios más difíciles.",
        en: score < 50 ? "Try to complete all scenario objectives." : score < 80 ? "Build longer sentences to improve fluency." : "Keep it up! Try harder scenarios.",
        fr: score < 50 ? "Essaie de compléter tous les objectifs du scénario." : score < 80 ? "Construis des phrases plus longues pour améliorer ta fluidité." : "Continue comme ça ! Essaie des scénarios plus difficiles.",
        de: score < 50 ? "Versuche alle Szenario-Ziele zu erreichen." : score < 80 ? "Bilde längere Sätze, um deine Sprachflüssigkeit zu verbessern." : "Weiter so! Probiere schwierigere Szenarien.",
    };

    const tier = score < 50 ? 0 : score < 80 ? 1 : 2;

    return {
        score,
        grammar: grammarByScore[l][tier],
        vocabulary: vocabByScore[l][tier],
        tip: tipByLang[l],
    };
}

// ============================================================
// MAIN API: createShelldonHint
// ============================================================
export function createShelldonHint(
    scenario: ShelldonScenario,
    language: string,
    completedObjectives: number[],
    turnIndex: number
): string {
    const l = lang(language);
    const phrases = scenario.suggestedPhrases[l] || scenario.suggestedPhrases["en"] || [];
    const objectives = scenario.objectives[l] || [];

    // Find the first uncompleted objective
    const nextIdx = objectives.findIndex((_, i) => !completedObjectives.includes(i));

    if (nextIdx !== -1 && nextIdx < phrases.length) {
        return phrases[nextIdx];
    }

    // Fallback: random phrase from the scenario
    return choose(phrases.length > 0 ? phrases : ["..."], computeSeed("hint", turnIndex));
}
