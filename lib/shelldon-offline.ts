/**
 * Shelldon Offline Konuşma Motoru
 * AI API çağrısı SIFIR — Tamamen kural tabanlı, çevrimdışı çalışır.
 * 
 * Mimarı: scene-offline.ts ile aynı pattern.
 */
import { SHELLDON_SCENARIOS, type ShelldonScenario, type ShelldonPracticeMode } from "./shelldon-ai";

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
            greeting: ["¡Hola! Bienvenido a nuestro café. ¿Qué le puedo ofrecer? ☕", "¡Buenas! ¿Quiere sentarse aquí o en la terraza? 🐢"],
            order: ["¡Excelente elección! Se lo preparo enseguida. ¿Quiere algo más?", "Perfecto, marchando. ¿Desea un postre también? 🍰"],
            question: ["Claro, tenemos café, té, zumos y pasteles. ¿Qué le apetece?", "El café con leche es nuestro mejor vendido. ¿Lo quiere probar?"],
            thanks: ["¡De nada! Ha sido un placer atenderle. ¡Hasta luego! 🐢", "¡Gracias a usted! Vuelva cuando quiera. 😊"],
            farewell: ["¡Hasta luego! Que tenga un buen día. 🐢", "¡Adiós! Fue un placer. Vuelva pronto."],
            agree: ["¡Genial! Se lo preparo ahora mismo.", "¡Perfecto! Aquí tiene. ¿Necesita algo más?"],
            describe: ["Entiendo. ¿Quiere que le recomiende algo especial del menú?", "Muy bien. Tenemos opciones para todos los gustos."],
            statement: ["Interesante. ¿Quiere pedir algo de nuestra carta? ☕", "Muy bien. ¿En qué puedo ayudarle? 🐢"],
        },
        en: {
            greeting: ["Hello! Welcome to our café. What can I get you? ☕", "Hi there! Would you like to sit inside or on the terrace? 🐢"],
            order: ["Great choice! I'll prepare that right away. Anything else?", "Perfect, coming right up. Would you like a pastry too? 🍰"],
            question: ["Sure, we have coffee, tea, juices, and pastries. What would you like?", "Our latte is a bestseller. Would you like to try it?"],
            thanks: ["You're welcome! It was a pleasure. See you soon! 🐢", "Thank you for coming! Have a great day. 😊"],
            farewell: ["Goodbye! Have a wonderful day. 🐢", "See you next time! It was a pleasure."],
            agree: ["Great! I'll get that ready for you now.", "Perfect! Here you go. Need anything else?"],
            describe: ["I see. Would you like me to recommend something from our menu?", "Alright. We have options for every taste."],
            statement: ["Interesting. Would you like to order something from our menu? ☕", "Alright. How can I help you? 🐢"],
        },
        fr: {
            greeting: ["Bonjour ! Bienvenue dans notre café. Qu'est-ce que je vous sers ? ☕", "Salut ! Vous voulez vous asseoir à l'intérieur ou en terrasse ? 🐢"],
            order: ["Excellent choix ! Je vous prépare ça tout de suite. Autre chose ?", "Parfait, c'est parti. Vous voulez un dessert aussi ? 🍰"],
            question: ["Bien sûr, nous avons du café, du thé, des jus et des pâtisseries. Que désirez-vous ?", "Notre café au lait est le plus populaire. Vous voulez l'essayer ?"],
            thanks: ["De rien ! C'était un plaisir. À bientôt ! 🐢", "Merci à vous ! Bonne journée. 😊"],
            farewell: ["Au revoir ! Bonne journée. 🐢", "À bientôt ! C'était un plaisir."],
            agree: ["Super ! Je vous prépare ça maintenant.", "Parfait ! Voilà. Vous avez besoin d'autre chose ?"],
            describe: ["Je comprends. Voulez-vous que je vous recommande quelque chose ?", "D'accord. Nous avons des options pour tous les goûts."],
            statement: ["Intéressant. Voulez-vous commander quelque chose ? ☕", "D'accord. Comment puis-je vous aider ? 🐢"],
        },
        de: {
            greeting: ["Hallo! Willkommen in unserem Café. Was darf es sein? ☕", "Hi! Möchten Sie drinnen oder auf der Terrasse sitzen? 🐢"],
            order: ["Tolle Wahl! Ich bereite das sofort vor. Noch etwas?", "Perfekt, kommt sofort. Möchten Sie auch ein Gebäck? 🍰"],
            question: ["Natürlich, wir haben Kaffee, Tee, Säfte und Gebäck. Was möchten Sie?", "Unser Milchkaffee ist ein Bestseller. Möchten Sie ihn probieren?"],
            thanks: ["Gern geschehen! Es war mir ein Vergnügen. Auf Wiedersehen! 🐢", "Danke Ihnen! Einen schönen Tag noch. 😊"],
            farewell: ["Auf Wiedersehen! Einen schönen Tag. 🐢", "Bis zum nächsten Mal! Es war ein Vergnügen."],
            agree: ["Super! Ich bereite das jetzt für Sie vor.", "Perfekt! Bitte sehr. Brauchen Sie noch etwas?"],
            describe: ["Verstehe. Soll ich Ihnen etwas von unserer Karte empfehlen?", "In Ordnung. Wir haben für jeden Geschmack etwas."],
            statement: ["Interessant. Möchten Sie etwas von unserer Karte bestellen? ☕", "Alles klar. Wie kann ich Ihnen helfen? 🐢"],
        },
    },
    market: {
        es: {
            greeting: ["¡Hola! El mercado tiene hoy productos frescos. ¿Qué busca? 🛒", "¡Buenos días! Mire estas frutas, están deliciosas. ¿Le ayudo?"],
            order: ["¡Claro! Aquí tiene. Son muy frescos. ¿Algo más?", "Perfecto, ¿cuántos kilos necesita?"],
            question: ["Las manzanas cuestan 2 euros el kilo. ¿Le pongo algunas?", "Hoy tenemos ofertas en verduras. ¿Quiere ver?"],
            thanks: ["¡Gracias a usted! Disfrute de su comida. 🐢", "¡De nada! Vuelva mañana, tendremos más fruta."],
            farewell: ["¡Adiós! Que tenga un buen día de compras. 🐢", "¡Hasta luego! Vuelva pronto."],
            agree: ["¡Claro! Es una buena elección.", "¡Perfecto! Se lo pongo en la bolsa."],
            describe: ["Entiendo, busca algo de calidad. Aquí tenemos lo mejor.", "Muy bien. ¿Prefiere algo más?"],
            statement: ["Muy bien. ¿Quiere probar algo antes de comprar?", "El mercado es un buen sitio para practicar. ¿Qué más necesita?"],
        },
        en: {
            greeting: ["Hello! We have fresh produce today. What are you looking for? 🛒", "Good morning! Look at these fruits, they're delicious. Can I help?"],
            order: ["Sure! Here you go. They're very fresh. Anything else?", "Perfect, how many kilos do you need?"],
            question: ["Apples are 2 euros a kilo. Should I get you some?", "We have deals on vegetables today. Want to see?"],
            thanks: ["Thank you! Enjoy your meal. 🐢", "You're welcome! Come back tomorrow for more."],
            farewell: ["Goodbye! Have a great shopping day! 🐢", "See you later! Come back soon."],
            agree: ["Of course! That's a great choice.", "Perfect! I'll put that in a bag for you."],
            describe: ["I see, you're looking for quality. We have the best here.", "Alright. Would you like anything else?"],
            statement: ["Alright. Would you like to try it before you buy?", "The market is a great place to practice. What else do you need?"],
        },
        fr: {
            greeting: ["Bonjour ! Nous avons des produits frais aujourd'hui. Que cherchez-vous ? 🛒", "Salut ! Regardez ces fruits, ils sont délicieux. Je vous aide ?"],
            order: ["Bien sûr ! Voici. Ils sont très frais. Autre chose ?", "Parfait, combien de kilos vous faut-il ?"],
            question: ["Les pommes sont à 2 euros le kilo. Je vous en mets ?", "Nous avons des promos sur les légumes. Vous voulez voir ?"],
            thanks: ["Merci à vous ! Bon appétit ! 🐢", "De rien ! Revenez demain pour plus de fruits."],
            farewell: ["Au revoir ! Bonne journée de courses ! 🐢", "À bientôt ! Revenez vite."],
            agree: ["Bien sûr ! C'est un bon choix.", "Parfait ! Je vous mets ça dans un sac."],
            describe: ["Je vois, vous cherchez de la qualité. Nous avons le meilleur ici.", "D'accord. Voulez-vous autre chose ?"],
            statement: ["D'accord. Voulez-vous goûter avant d'acheter ?", "Le marché est un bon endroit pour pratiquer. Autre chose ?"],
        },
        de: {
            greeting: ["Hallo! Wir haben heute frische Produkte. Was suchen Sie? 🛒", "Guten Morgen! Schauen Sie sich dieses Obst an. Kann ich Ihnen helfen?"],
            order: ["Gerne! Hier bitte. Alles ist frisch. Noch etwas?", "Perfekt, wie viele Kilo brauchen Sie?"],
            question: ["Die Äpfel kosten 2 Euro pro Kilo. Darf es etwas mehr sein?", "Heute haben wir Gemüse im Angebot. Möchten Sie sehen?"],
            thanks: ["Danke Ihnen! Genießen Sie Ihr Essen. 🐢", "Gern geschehen! Kommen Sie morgen wieder."],
            farewell: ["Auf Wiedersehen! Einen schönen Einkaufstag noch. 🐢", "Bis bald! Kommen Sie bald wieder."],
            agree: ["Natürlich! Das ist eine gute Wahl.", "Perfekt! Ich packe es Ihnen in die Tüte."],
            describe: ["Ich verstehe, Sie suchen Qualität. Wir haben hier das Beste.", "In Ordnung. Möchten Sie noch etwas?"],
            statement: ["Alles klar. Möchten Sie probieren, bevor Sie kaufen?", "Der Markt ist ein toller Ort zum Üben. Was brauchen Sie noch?"],
        },
    },
    airport: {
        es: {
            greeting: ["¡Hola! Bienvenido al mostrador de facturación. ¿Su pasaporte, por favor? ✈️", "¡Buen día! ¿A dónde viaja hoy? 🐢"],
            order: ["Muy bien, aquí tiene su tarjeta de embarque. ¡Buen vuelo!", "Perfecto, ¿tiene maletas para facturar?"],
            question: ["Su puerta de embarque es la B12. Está a diez minutos de aquí.", "El vuelo sale a las diez en punto. ¿Necesita algo más?"],
            thanks: ["¡De nada! ¡Tenga un excelente vuelo! 🐢", "¡Gracias a usted! ¡Buen viaje! 😊"],
            farewell: ["¡Adiós! ¡Nos vemos en el próximo vuelo! 🐢", "¡Buen viaje! ¡Hasta pronto!"],
            agree: ["¡Claro! Todo está en orden.", "¡Perfecto! Disfrute de su viaje."],
            describe: ["Entiendo. Es un viaje largo, ¿verdad?", "Muy bien. Aquí tiene toda la información necesaria."],
            statement: ["Interesante. ¿Ha viajado antes con nosotros?", "El aeropuerto es grande, pero Shelldon le ayuda. ¿Tiene todo listo?"],
        },
        en: {
            greeting: ["Hello! Welcome to the check-in counter. Passport, please? ✈️", "Good day! Where are you flying to today? 🐢"],
            order: ["Alright, here is your boarding pass. Have a great flight!", "Perfect, do you have any bags to check in?"],
            question: ["Your boarding gate is B12. It's ten minutes from here.", "The flight leaves at ten o'clock sharp. Need anything else?"],
            thanks: ["You're welcome! Have an excellent flight! 🐢", "Thank you! Have a safe trip! 😊"],
            farewell: ["Goodbye! Have a wonderful day. 🐢", "Safe travels! See you soon!"],
            agree: ["Of course! Everything is in order.", "Perfect! Enjoy your trip."],
            describe: ["I see. It's a long trip, isn't it?", "Alright. Here is all the information you need."],
            statement: ["Interesting. Have you flown with us before?", "The airport is big, but Shelldon is here. Got everything ready?"],
        },
        fr: {
            greeting: ["Bonjour ! Bienvenue au comptoir d'enregistrement. Votre passeport ? ✈️", "Salut ! Où voyagez-vous aujourd'hui ? 🐢"],
            order: ["Très bien, voici votre carte d'embarquement. Bon vol !", "Parfait, avez-vous des bagages à enregistrer ?"],
            question: ["Votre porte d'embarquement est la B12. C'est à dix minutes.", "Le vol part à dix heures pile. Autre chose ?"],
            thanks: ["De rien ! Bon vol ! 🐢", "Merci à vous ! Bon voyage ! 😊"],
            farewell: ["Au revoir ! À bientôt pour le prochain vol ! 🐢", "Bon voyage ! À plus !"],
            agree: ["Bien sûr ! Tout est en règle.", "Parfait ! Profitez de votre voyage."],
            describe: ["Je vois. C'est un long voyage, n'est-ce pas ?", "D'accord. Voici toutes les informations nécessaires."],
            statement: ["Intéressant. Avez-vous déjà voyagé avec nous ?", "L'aéroport est grand, mais Shelldon vous aide. Prêt ?"],
        },
        de: {
            greeting: ["Hallo! Willkommen am Check-in-Schalter. Ihren Reisepass, bitte? ✈️", "Guten Tag! Wohin reisen Sie heute? 🐢"],
            order: ["Alles klar, hier ist Ihre Bordkarte. Guten Flug!", "Perfekt, haben Sie Gepäck zum Aufgeben?"],
            question: ["Ihr Flugsteig ist B12. Es sind zehn Minuten von hier.", "Der Flug startet pünktlich um zehn Uhr. Noch etwas?"],
            thanks: ["Gern geschehen! Haben Sie einen tollen Flug! 🐢", "Danke Ihnen! Gute Reise! 😊"],
            farewell: ["Auf Wiedersehen! Einen schönen Flugtag noch. 🐢", "Gute Reise! Bis bald!"],
            agree: ["Natürlich! Alles ist in Ordnung.", "Perfekt! Genießen Sie Ihre Reise."],
            describe: ["Ich verstehe, Sie haben heute Lust, die Stadt zu erkunden.", "In Ordnung. Achten Sie auf den Verkehr."],
            statement: ["Alles klar. Brauchen Sie noch weitere Wegbeschreibungen?", "Erkunden mit Shelldon ist sicher. Noch etwas? 🐢"],
        },
    },
    doctor: {
        es: {
            greeting: ["Hola, soy el Dr. Shelldon. ¿Qué le pasa? 🏥", "¡Buen día! ¿En qué puedo ayudarle hoy? 🐢"],
            order: ["Le recetaré este medicamento. Tómelo dos veces al día.", "Perfecto, descanse mucho y beba agua."],
            question: ["¿Le duele la cabeza o tiene fiebre?", "¿Desde cuándo se siente así? ¿Tres días?"],
            thanks: ["¡De nada! ¡Que se mejore pronto! 🐢", "¡Cuídese mucho! Hasta la próxima."],
            farewell: ["¡Adiós! ¡Espero que se recupere pronto! 🐢", "¡Cuídese! ¡Hasta luego!"],
            agree: ["¡Claro! Es importante seguir el tratamiento.", "¡Perfecto! No se preocupe, estará bien."],
            describe: ["Entiendo, parece un resfriado común.", "Muy bien. Vamos a hacerle un chequeo rápido."],
            statement: ["Muy bien. ¿Tiene alguna otra molestia?", "La salud es lo primero. ¿Necesita algo más? 🐢"],
        },
        en: {
            greeting: ["Hello, I'm Dr. Shelldon. What's the matter? 🏥", "Good day! How can I help you today? 🐢"],
            order: ["I'll prescribe this medicine. Take it twice a day.", "Perfect, get plenty of rest and drink water."],
            question: ["Do you have a headache or a fever?", "How long have you felt this way? Three days?"],
            thanks: ["You're welcome! Get well soon! 🐢", "Take care! See you next time."],
            farewell: ["Goodbye! I hope you recover soon! 🐢", "Take care! See you later!"],
            agree: ["Of course! It's important to follow the treatment.", "Perfect! Don't worry, you'll be fine."],
            describe: ["I see, it seems like a common cold.", "Alright. Let's do a quick check-up."],
            statement: ["Alright. Do you have any other symptoms?", "Health comes first. Need anything else? 🐢"],
        },
        fr: {
            greeting: ["Bonjour, je suis le Dr Shelldon. Qu'est-ce qui ne va pas ? 🏥", "Salut ! Comment puis-je vous aider aujourd'hui ? 🐢"],
            order: ["Je vous prescris ce médicament. À prendre deux fois par jour.", "Parfait, reposez-vous bien et buvez de l'eau."],
            question: ["Avez-vous mal à la tête ou de la fièvre ?", "Depuis quand vous sentez-vous comme ça ?"],
            thanks: ["De rien ! Bon rétablissement ! 🐢", "Prenez soin de vous ! À la prochaine."],
            farewell: ["Au revoir ! J'espère que vous irez mieux bientôt ! 🐢", "Prenez soin de vous !"],
            agree: ["Bien sûr ! C'est important de suivre le traitement.", "Parfait ! Ne vous inquiétez pas, ça ira."],
            describe: ["Je vois, ça ressemble à un simple rhume.", "D'accord. Faisons un petit examen."],
            statement: ["D'accord. Avez-vous d'autres symptômes ?", "La santé avant tout. Besoin d'autre chose ? 🐢"],
        },
        de: {
            greeting: ["Hallo, ich bin Dr. Shelldon. Was fehlt Ihnen? 🏥", "Guten Tag! Wie kann ich Ihnen heute helfen? 🐢"],
            order: ["Ich verschreibe Ihnen dieses Medikament. Zweimal täglich einnehmen.", "Perfekt, ruh dich viel aus und trink Wasser."],
            question: ["Haben Sie Kopfschmerzen oder Fieber?", "Seit wann fühlen Sie sich so? Drei Tage?"],
            thanks: ["Gern geschehen! Gute Besserung! 🐢", "Pass gut auf dich auf! Bis zum nächsten Mal."],
            farewell: ["Auf Wiedersehen! Hoffentlich geht es dir bald besser! 🐢", "Mach's gut! Schone dich."],
            agree: ["Natürlich! Es ist wichtig, die Behandlung zu befolgen.", "Perfekt! Keine Sorge, du wirst bald wieder fit."],
            describe: ["Ich verstehe, es sieht nach einer Erkältung aus.", "In Ordnung. Lassen Sie uns eine kurze Untersuchung machen."],
            statement: ["Alles klar. Haben Sie noch andere Beschwerden?", "Gesundheit geht vor. Brauchen Sie noch etwas? 🐢"],
        },
    },
    hotel: {
        es: {
            greeting: ["¡Bienvenido al Hotel Shelldon! ¿Tiene una reserva? 🏨", "¡Holanda! ¿En qué puedo ayudarle hoy? 🐢"],
            order: ["¡Claro! Una habitación doble con vistas. Aquí tiene su llave.", "Perfecto, el desayuno se sirve de 7 a 10 de la mañana."],
            question: ["¿Desea una habitación individual o doble?", "¿A qué hora quiere hacer el check-out mañana?"],
            thanks: ["¡De nada! ¡Disfrute de su estancia! 🐢", "¡Gracias a usted! Si necesita algo, llame a recepción."],
            farewell: ["¡Adiós! ¡Que tenga un buen viaje! 🐢", "¡Hasta la vista! Vuelva pronto."],
            agree: ["¡Claro! Todo está listo para usted.", "¡Perfecto! Nos alegra tenerle aquí."],
            describe: ["Entiendo. Es su primera vez en la ciudad, ¿verdad?", "Muy bien. ¿Le gustaría saber más sobre el hotel?"],
            statement: ["Interesante. ¿Tiene alguna petición especial?", "El hotel es muy cómodo. ¿En qué más le ayudo? 🐢"],
        },
        en: {
            greeting: ["Welcome to Hotel Shelldon! Do you have a reservation? 🏨", "Hi there! How can I help you today? 🐢"],
            order: ["Sure! A double room with a view. Here is your key.", "Perfect, breakfast is served from 7 to 10 AM."],
            question: ["Would you like a single or double room?", "What time would you like to check out tomorrow?"],
            thanks: ["You're welcome! Enjoy your stay! 🐢", "Thanks! If you need anything, call the reception."],
            farewell: ["Goodbye! Have a safe trip! 🐢", "See you later! Come back soon."],
            agree: ["Of course! Everything is ready for you.", "Perfect! Happy to have you here."],
            describe: ["I see. It's your first time in the city, isn't it?", "Alright. Would you like to know more about the hotel?"],
            statement: ["Interesting. Do you have any special requests?", "The hotel is very comfortable. How can I help? 🐢"],
        },
        fr: {
            greeting: ["Bienvenue à l'Hôtel Shelldon ! Avez-vous une réservation ? 🏨", "Salut ! Comment puis-je vous aider aujourd'hui ? 🐢"],
            order: ["Bien sûr ! Une chambre double avec vue. Voici votre clé.", "Parfait, le petit-déjeuner est servi de 7h à 10h."],
            question: ["Voulez-vous une chambre simple ou double ?", "À quelle heure voulez-vous partir demain ?"],
            thanks: ["De rien ! Profitez de votre séjour ! 🐢", "Merci ! Si vous avez besoin de quoi que ce soit, appelez."],
            farewell: ["Au revoir ! Bon voyage ! 🐢", "À bientôt ! Revenez nous voir."],
            agree: ["Bien sûr ! Tout est prêt pour vous.", "Parfait ! Nous sommes ravis de vous accueillir."],
            describe: ["Je vois. C'est votre première fois ici, n'est-ce pas ?", "D'accord. Voulez-vous en savoir plus sur l'hôtel ?"],
            statement: ["Intéressant. Avez-vous des demandes spéciales ?", "L'hôtel est très confortable. Autre chose ? 🐢"],
        },
        de: {
            greeting: ["Willkommen im Hotel Shelldon! Haben Sie eine Reservierung? 🏨", "Hi! Wie kann ich Ihnen heute helfen? 🐢"],
            order: ["Klar! Ein Doppelzimmer mit Aussicht. Hier ist Ihr Schlüssel.", "Perfekt, Frühstück gibt es von 7 bis 10 Uhr."],
            question: ["Möchten Sie ein Einzel- oder Doppelzimmer?", "Um wie viel Uhr möchten Sie morgen auschecken?"],
            thanks: ["Gern geschehen! Genießen Sie Ihren Aufenthalt! 🐢", "Danke! Wenn Sie etwas brauchen, rufen Sie die Rezeption an."],
            farewell: ["Auf Wiedersehen! Gute Reise! 🐢", "Bis bald! Besuchen Sie uns bald wieder."],
            agree: ["Natürlich! Alles ist bereit für Sie.", "Perfekt! Wir freuen uns, Sie hier zu haben."],
            describe: ["Ich verstehe, Sie haben heute Lust, die Stadt zu erkunden.", "In Ordnung. Möchten Sie mehr über das Hotel wissen?"],
            statement: ["Interessant. Haben Sie spezielle Wünsche?", "Das Hotel ist sehr gemütlich. Wie kann ich helfen? 🐢"],
        },
    },
    friend: {
        es: {
            greeting: ["¡Hola amigo! ¿Qué tal tu día? 👋", "¡Buenas! ¿Cómo te va todo hoy? 🐢"],
            order: ["¡Qué bien! Yo también quiero hacer eso.", "Perfecto, vamos a divertirnos hoy."],
            question: ["¿Qué te gusta hacer en tu tiempo libre?", "¿Tienes planes para este fin de semana?"],
            thanks: ["¡Gracias! Eres un gran amigo. 🐢", "¡De nada! Aquí estoy siempre."],
            farewell: ["¡Chao! ¡Hablamos luego! 🐢", "¡Nos vemos! ¡Pásalo bien!"],
            agree: ["¡Claro! Me parece genial.", "¡Perfecto! Estoy de acuerdo contigo."],
            describe: ["¡Qué guay! Cuéntame más sobre eso.", "Entiendo perfectamente. ¡Vaya día!"],
            statement: ["Interesante lo que dices. ¿Qué más me cuentas?", "Hablar contigo siempre es divertido. ¿Tü qué piensas? 🐢"],
        },
        en: {
            greeting: ["Hey friend! How's your day going? 👋", "Hi! How is everything today? 🐢"],
            order: ["Nice! I want to do that too.", "Perfect, let's have fun today."],
            question: ["What do you like to do in your free time?", "Do you have any plans for this weekend?"],
            thanks: ["Thanks! You're a great friend. 🐢", "You're welcome! I'm always here."],
            farewell: ["Bye! Talk to you later! 🐢", "See you! Have a good one!"],
            agree: ["Of course! Sounds great to me.", "Perfect! I agree with you."],
            describe: ["Cool! Tell me more about that.", "I totally understand. What a day!"],
            statement: ["Interesting what you're saying. What else is new?", "Talking to you is always fun. What do you think? 🐢"],
        },
        fr: {
            greeting: ["Salut l'ami ! Comment se passe ta journée ? 👋", "Salut ! Comment ça va aujourd'hui ? 🐢"],
            order: ["Super ! Je veux faire ça aussi.", "Parfait, on va bien s'amuser."],
            question: ["Qu'est-ce que tu aimes faire pendant ton temps libre ?", "Tu as des projets pour ce weekend ?"],
            thanks: ["Merci ! Tu es un super ami. 🐢", "De rien ! Je suis toujours là."],
            farewell: ["Salut ! On se parle plus tard ! 🐢", "À plus ! Amuse-toi bien !"],
            agree: ["Bien sûr ! Ça me semble génial.", "Parfait ! Je suis d'accord avec toi."],
            describe: ["Génial ! Dis-m'en plus là-dessus.", "Je comprends tout à fait. Quelle journée !"],
            statement: ["C'est intéressant ce que tu dis. Quoi de neuf ?", "C'est toujours un plaisir de parler avec toi. Et toi ? 🐢"],
        },
        de: {
            greeting: ["Hallo mein Freund! Wie läuft dein Tag? 👋", "Hi! Wie geht es dir heute? 🐢"],
            order: ["Schön! Das möchte ich auch machen.", "Perfekt, lass uns heute Spaß haben."],
            question: ["Was machst du gerne in deiner Freizeit?", "Hast du Pläne für dieses Wochenende?"],
            thanks: ["Danke! Du bist ein toller Freund. 🐢", "Bitteschön! Ich bin immer für dich da."],
            farewell: ["Tschüss! Wir sprechen uns später! 🐢", "Bis dann! Viel Spaß!"],
            agree: ["Natürlich! Das klingt super.", "Perfekt! Ich stimme dir zu."],
            describe: ["Cool! Erzähl mir mehr darüber.", "Ich verstehe dich vollkommen. Was für ein Tag!"],
            statement: ["Interessant, was du sagst. Was gibt's sonst Neues?", "Mit dir zu reden macht immer Spaß. Was denkst du? 🐢"],
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
            greeting: ["Want to meet up? What time works for you? 📅", "Hello! Where do you want to go today? 🐢"],
            order: ["Sure! Sounds like a perfect plan.", "Alright, let's meet there then."],
            question: ["Do you prefer going to the cinema or dinner?", "How about eight o'clock in front of the park?"],
            thanks: ["Thanks for inviting me! I'm excited. 🐢", "You're welcome! See you in a bit."],
            farewell: ["See you soon! See you there. 🐢", "Bye! Be good!"],
            agree: ["Of course! That's an excellent time.", "Perfect! See you then."],
            describe: ["I see, you're in the mood for something different today.", "Alright. How about we walk there?"],
            statement: ["Alright. Any other ideas for today?", "Planning with Shelldon is easy. Shall we meet? 🐢"],
        },
        fr: {
            greeting: ["Tu veux qu'on se voie ? Quelle heure te convient ? 📅", "Salut ! Où veux-tu aller aujourd'hui ? 🐢"],
            order: ["Bien sûr ! Ça me semble être un plan parfait.", "D'accord, on se retrouve là-bas alors."],
            question: ["Tu préfères aller au cinéma ou dîner ?", "Ça te va à huit heures devant le parc ?"],
            thanks: ["Merci de m'avoir invité ! J'ai hâte. 🐢", "De rien ! À tout à l'heure."],
            farewell: ["À tout à l'heure ! On se voit là-bas. 🐢", "Salut ! À plus !"],
            agree: ["Bien sûr ! C'est une excellente heure.", "Parfait ! On se voit alors."],
            describe: ["Je vois, tu as envie de faire quelque chose de différent.", "D'accord. Et si on y allait à pied ?"],
            statement: ["D'accord. D'autres idées pour aujourd'hui ?", "Planifier avec Shelldon, c'est facile. On y va ? 🐢"],
        },
        de: {
            greeting: ["Sollen wir uns treffen? Welche Uhrzeit passt dir? 📅", "Hallo! Wohin möchtest du heute gehen? 🐢"],
            order: ["Natürlich! Das klingt nach einem perfekten Plan.", "Alles klar, dann treffen wir uns dort."],
            question: ["Möchten Sie lieber ins Kino oder zum Essen gehen?", "Passt es dir um acht Uhr vor dem Park?"],
            thanks: ["Danke für die Einladung! Ich freue mich darauf. 🐢", "Gern geschehen! Wir sehen uns gleich."],
            farewell: ["Bis gleich! Wir sehen uns dort. 🐢", "Tschüss! Mach's gut!"],
            agree: ["Natürlich! Das ist eine super Uhrzeit.", "Perfekt! Dann bis dann."],
            describe: ["Ich verstehe, du hast heute Lust auf etwas Neues.", "Alles klar. Sollen wir zu Fuß hingehen?"],
            statement: ["In Ordnung. Hast du noch andere Ideen für heute?", "Mit Shelldon zu planen ist einfach. Treffen wir uns? 🐢"],
        },
    },
    restaurant: {
        es: {
            greeting: ["¡Bienvenido! ¿Tienen una reserva o quieren una mesa para dos? 🍽️", "¡Buen día! Pasen, por favor. ¿Qué desean tomar? 🐢"],
            order: ["¡Gran elección! El pollo está delicioso hoy. ¿Algo de beber?", "Perfecto, ¿quieren pedir el postre ahora o después?"],
            question: ["¿Prefieren la mesa cerca de la ventana o en el centro?", "¿Quieren ver la carta de vinos hoy?"],
            thanks: ["¡Gracias a ustedes! Espero que disfruten de la cena. 🐢", "¡De nada! Buen provecho."],
            farewell: ["¡Adiós! ¡Gracias por su visita! 🐢", "¡Hasta la próxima! Vuelvan pronto."],
            agree: ["¡Claro! Enseguida les traigo lo que han pedido.", "¡Perfecto! Una elección muy popular."],
            describe: ["Entiendo, hoy quieren celebrar algo especial.", "Muy bien. Tenemos opciones vegetarianas también."],
            statement: ["Interesante. ¿Quieren esperar a alguien más?", "Comer con Shelldon es un placer. ¿Alguna otra cosa? 🐢"],
        },
        en: {
            greeting: ["Welcome! Do you have a reservation or a table for two? 🍽️", "Good day! Please come in. What would you like to drink? 🐢"],
            order: ["Great choice! The chicken is delicious today. Anything to drink?", "Perfect, would you like to order dessert now or later?"],
            question: ["Do you prefer a table near the window or in the center?", "Would you like to see the wine list today?"],
            thanks: ["Thank you! I hope you enjoy your dinner. 🐢", "You're welcome! Enjoy your meal."],
            farewell: ["Goodbye! Thank you for your visit! 🐢", "See you next time! Come back soon."],
            agree: ["Of course! I'll bring your order right away.", "Perfect! A very popular choice."],
            describe: ["I see, you want to celebrate something special today.", "Alright. We have vegetarian options too."],
            statement: ["Interesting. Are you waiting for anyone else?", "Eating with Shelldon is a pleasure. Anything else? 🐢"],
        },
        fr: {
            greeting: ["Bienvenue ! Avez-vous une réservation ou voulez-vous une table ? 🍽️", "Bonjour ! Entrez, s'il vous plaît. Que voulez-vous boire ? 🐢"],
            order: ["Excellent choix ! Le poulet est délicieux aujourd'hui. Une boisson ?", "Parfait, voulez-vous commander le dessert maintenant ou après ?"],
            question: ["Vous préférez la table près de la fenêtre ou au centre ?", "Vous voulez voir la carte des vins aujourd'hui ?"],
            thanks: ["Merci à vous ! J'espère que vous apprécierez votre dîner. 🐢", "De rien ! Bon appétit."],
            farewell: ["Au revoir ! Merci de votre visite ! 🐢", "À la prochaine ! Revenez vite."],
            agree: ["Bien sûr ! Je vous apporte votre commande tout de suite.", "Parfait ! Un choix très populaire."],
            describe: ["Je vois, vous voulez fêter quelque chose de spécial aujourd'hui.", "D'accord. Nous avons aussi des options végétariennes."],
            statement: ["Intéressant. Attendez-vous quelqu'un d'autre ?", "Manger avec Shelldon est un plaisir. Autre chose ? 🐢"],
        },
        de: {
            greeting: ["Willkommen im Hotel Shelldon! Haben Sie eine Reservierung? 🏨", "Hi! Wie kann ich Ihnen heute helfen? 🐢"],
            order: ["Tolle Wahl! Das Hähnchen ist heute köstlich. Etwas zu trinken?", "Perfekt, möchten Sie das Dessert jetzt oder später bestellen?"],
            question: ["Bevorzugen Sie einen Tisch am Fenster oder in der Mitte?", "Möchten Sie heute die Weinkarte sehen?"],
            thanks: ["Danke Ihnen! Ich hoffe, Sie genießen das Abendessen. 🐢", "Gern geschehen! Guten Appetit."],
            farewell: ["Auf Wiedersehen! Vielen Dank für Ihren Besuch! 🐢", "Bis bald! Kommen Sie bald wieder."],
            agree: ["Natürlich! Ich bringe Ihnen sofort Ihre Bestellung.", "Perfekt! Eine sehr beliebte Wahl."],
            describe: ["Ich verstehe, Sie möchten heute etwas Besonderes feiern.", "In Ordnung. Wir haben auch vegetarische Optionen."],
            statement: ["Interessant. Warten Sie noch auf jemanden?", "Mit Shelldon zu essen ist ein Vergnügen. Noch etwas? 🐢"],
        },
    },
    direction: {
        es: {
            greeting: ["¡Hola! ¿Buscando algún sitio? Yo conozco bien la city. 🗺️", "¡Buen día! ¿Te has perdido? Puedo ayudarte. 🐢"],
            order: ["¡Claro! Sigue todo recto y luego gira a la derecha.", "Perfecto, está justo detrás de la plaza."],
            question: ["¿Buscas la oficina de correos o el museo nacional?", "¿Vienes de la estación de tren?"],
            thanks: ["¡De nada! ¡Espero que encuentres el sitio! 🐢", "¡Gracias a ti! ¡Buen paseo!"],
            farewell: ["¡Adiós! ¡Espero que disfrutes del camino! 🐢", "¡Hasta luego! ¡Cuídate!"],
            agree: ["¡Claro! Es muy fácil llegar desde aquí.", "¡Perfecto! Estás muy cerca de tu destino."],
            describe: ["Entiendo, hoy tienes ganas de explorar nuevos sitios.", "Muy bien. Ten cuidado con el tráfico."],
            statement: ["Muy bien. ¿Alguna otra dirección que necesites?", "Explorar con Shelldon es seguro. ¿Algo más? 🐢"],
        },
        en: {
            greeting: ["Hello! Looking for somewhere? I know the city well. 🗺️", "Good day! Are you lost? I can help you. 🐢"],
            order: ["Sure! Go straight and then turn right.", "Perfect, it's right behind the square."],
            question: ["Are you looking for the post office or the national museum?", "Are you coming from the train station?"],
            thanks: ["You're welcome! I hope you find the place! 🐢", "Thanks! Have a nice walk!"],
            farewell: ["Goodbye! Enjoy your walk! 🐢", "See you later! Take care!"],
            agree: ["Of course! It's very easy to get there from here.", "Perfect! You're very close to your destination."],
            describe: ["I see, you're in the mood to explore new places today.", "Alright. Be careful with the traffic."],
            statement: ["Alright. Any other directions you need?", "Exploring with Shelldon is safe. Anything else? 🐢"],
        },
        fr: {
            greeting: ["Bonjour ! Vous cherchez un endroit ? Je connais bien la ville. 🗺️", "Salut ! Vous êtes perdu ? Je peux vous aider. 🐢"],
            order: ["Bien sûr ! Allez tout droit puis tournez à droite.", "Parfait, c'est juste derrière la place."],
            question: ["Vous cherchez la poste ou le musée national ?", "Vous venez de la gare ?"],
            thanks: ["De rien ! J'espère que vous trouverez l'endroit ! 🐢", "Merci à vous ! Bonne promenade !"],
            farewell: ["Au revoir ! Bonne promenade ! 🐢", "À plus ! Prenez soin de vous !"],
            agree: ["Bien sûr ! C'est très facile d'y aller d'ici.", "Parfait ! Vous êtes tout près de votre destination."],
            describe: ["Je vois, vous avez envie d'explorer de nouveaux endroits.", "D'accord. Faites attention à la circulation."],
            statement: ["D'accord. Besoin d'un autre itinéraire ?", "Explorer avec Shelldon est sûr. Autre chose ? 🐢"],
        },
        de: {
            greeting: ["Hallo! Suchen Sie etwas? Ich kenne die Stadt gut. 🗺️", "Guten Tag! Haben Sie sich verlaufen? Ich kann helfen. 🐢"],
            order: ["Natürlich! Gehen Sie geradeaus und dann rechts.", "Perfekt, es ist gleich hinter dem Platz."],
            question: ["Suchen Sie die Post oder das Nationalmuseum?", "Kommen Sie vom Bahnhof?"],
            thanks: ["Gern geschehen! Hoffentlich finden Sie den Ort! 🐢", "Danke Ihnen! Einen schönen Spaziergang!"],
            farewell: ["Auf Wiedersehen! Genießen Sie den Weg! 🐢", "Bis bald! Mach's gut!"],
            agree: ["Natürlich! Es ist von hier aus sehr einfach zu finden.", "Perfekt! Sie sind ganz nah an Ihrem Ziel."],
            describe: ["Ich verstehe, Sie haben heute Lust, die Stadt zu erkunden.", "In Ordnung. Achten Sie auf den Verkehr."],
            statement: ["Alles klar. Brauchen Sie noch weitere Wegbeschreibungen?", "Erkunden mit Shelldon ist sicher. Noch etwas? 🐢"],
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
