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
type Intent = "greeting" | "farewell" | "order" | "question" | "thanks" | "agree" | "describe" | "statement";

export interface ShelldonOfflineReply {
    message: string;
    mood: "happy" | "thinking" | "neutral" | "surprised" | "sad";
    completedObjectives: number[];
    correction: { wrong: string; right: string; explanation: string } | null;
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
        order: ["quiero", "quisiera", "me gustaria", "pedir", "tomar", "dame", "un cafe", "una mesa", "reserva"],
        question: ["donde", "cuando", "como", "cuanto", "que es", "cual", "por que", "puede", "hay", "tiene", "?"],
        thanks: ["gracias", "muchas gracias", "te agradezco"],
        agree: ["si", "vale", "claro", "por supuesto", "perfecto", "de acuerdo", "bien", "bueno"],
        describe: ["tengo", "estoy", "soy", "me duele", "siento", "necesito", "busco"],
        statement: [],
    },
    en: {
        greeting: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
        farewell: ["bye", "goodbye", "see you", "take care"],
        order: ["i want", "i would like", "i'd like", "can i have", "give me", "a coffee", "a table", "book", "reserve"],
        question: ["where", "when", "how", "what", "which", "why", "can", "do you", "is there", "?"],
        thanks: ["thanks", "thank you", "appreciate"],
        agree: ["yes", "sure", "of course", "perfect", "alright", "okay", "great", "fine"],
        describe: ["i have", "i am", "i feel", "it hurts", "i need", "i'm looking"],
        statement: [],
    },
    fr: {
        greeting: ["bonjour", "salut", "bonsoir", "coucou", "comment allez"],
        farewell: ["au revoir", "a bientot", "a plus", "salut", "bonne journee"],
        order: ["je voudrais", "je veux", "je prends", "donnez-moi", "un cafe", "une table", "reserver"],
        question: ["ou", "quand", "comment", "combien", "quel", "pourquoi", "est-ce que", "?"],
        thanks: ["merci", "merci beaucoup", "je vous remercie"],
        agree: ["oui", "bien sur", "d'accord", "parfait", "volontiers", "exactement"],
        describe: ["j'ai", "je suis", "j'ai mal", "je me sens", "je cherche", "il me faut"],
        statement: [],
    },
    de: {
        greeting: ["hallo", "guten tag", "guten morgen", "guten abend", "hi", "servus"],
        farewell: ["tschuss", "auf wiedersehen", "bis bald", "mach's gut"],
        order: ["ich mochte", "ich hatte gerne", "ich nehme", "geben sie mir", "einen kaffee", "einen tisch", "reservieren"],
        question: ["wo", "wann", "wie", "was", "welch", "warum", "konnen", "gibt es", "haben sie", "?"],
        thanks: ["danke", "vielen dank", "dankeschon"],
        agree: ["ja", "klar", "naturlich", "perfekt", "einverstanden", "gut", "genau"],
        describe: ["ich habe", "ich bin", "mir tut", "ich fuhle", "ich brauche", "ich suche"],
        statement: [],
    },
};

function detectIntent(message: string, language: SupportedLang): Intent {
    const normalized = normalizeText(message);
    const map = KEYWORD_MAP[language];
    const check = (intent: Intent) => map[intent].some(kw => normalized.includes(normalizeText(kw)));

    if (check("greeting")) return "greeting";
    if (check("farewell")) return "farewell";
    if (check("thanks")) return "thanks";
    if (check("order")) return "order";
    if (check("describe")) return "describe";
    if (check("question")) return "question";
    if (check("agree")) return "agree";
    return "statement";
}

// ============================================================
// SCENARIO-BASED RESPONSE POOLS
// ============================================================
const SCENARIO_RESPONSES: Record<string, Record<SupportedLang, Record<Intent, string[]>>> = {
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
        statement: ["Interessant. Möchten Sie weiter üben?", "Gut gesagt. Weiter so! 🐢"],
    },
};

function getResponsePool(scenarioId: string, language: SupportedLang): Record<Intent, string[]> {
    return SCENARIO_RESPONSES[scenarioId]?.[language] || GENERIC_RESPONSES[language];
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
        { pattern: /\bich bist\b/i, wrong: "ich bist", right: "ich bin", explanation: "'Sein' fiilinin 1. kişisi 'bin'dir." },
        { pattern: /\bdu ist\b/i, wrong: "du ist", right: "du bist", explanation: "'Sein' fiilinin 2. kişisi 'bist'tir." },
        { pattern: /\bich hat\b/i, wrong: "ich hat", right: "ich habe", explanation: "'Haben' fiilinin 1. kişisi 'habe'dir." },
        { pattern: /\bich haben\b/i, wrong: "ich haben", right: "ich habe", explanation: "'Haben' fiilinin 1. kişisi 'habe'dir, 'haben' çoğul formudur." },
        { pattern: /\beine mann\b/i, wrong: "eine Mann", right: "ein Mann", explanation: "'Mann' erkek isimdir, 'ein' kullanılmalı." },
        { pattern: /\bein frau\b/i, wrong: "ein Frau", right: "eine Frau", explanation: "'Frau' dişil isimdir, 'eine' kullanılmalı." },
        { pattern: /\bich gehe zu hause\b/i, wrong: "zu Hause", right: "nach Hause", explanation: "Eve gitmek için 'nach Hause', evde olmak için 'zu Hause' kullanılır." },
        { pattern: /\bich mochte ein wasser\b/i, wrong: "ein Wasser", right: "ein Wasser", explanation: "Doğru kullandın! 'Wasser' nötr cinsiyettir." },
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
// MAIN API: createShelldonIntro
// ============================================================
export function createShelldonIntro(
    scenario: ShelldonScenario,
    language: string,
    level: string
): ShelldonOfflineReply {
    const l = lang(language);
    const pool = getResponsePool(scenario.id, l);
    const seed = computeSeed(scenario.id, 0);
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
    };
}

// ============================================================
// MAIN API: createShelldonReply
// ============================================================
export function createShelldonReply(options: ReplyOptions): ShelldonOfflineReply {
    const { scenario, language, userMessage, turnIndex, completedObjectives } = options;
    const l = lang(language);
    const seed = computeSeed(userMessage, turnIndex);

    // 1. Intent Detection
    const intent = detectIntent(userMessage, l);

    // 2. Get response from pool
    const pool = getResponsePool(scenario.id, l);
    const response = choose(pool[intent] || pool.statement, seed);

    // 3. Check objectives
    const newObjectives = checkObjectives(userMessage, scenario, l, completedObjectives);
    const allCompleted = [...new Set([...completedObjectives, ...newObjectives])];

    // 4. Grammar correction
    const correction = findCorrection(userMessage, l);

    // 5. Build message
    let message = response;

    if (newObjectives.length > 0) {
        const objectives = scenario.objectives[l] || [];
        const completedNames = newObjectives.map(i => objectives[i]).filter(Boolean);
        const celebrateByLang: Record<SupportedLang, string> = {
            es: `\n\n✨ ¡Objetivo completado! ${completedNames.join(", ")}`,
            en: `\n\n✨ Objective completed! ${completedNames.join(", ")}`,
            fr: `\n\n✨ Objectif accompli ! ${completedNames.join(", ")}`,
            de: `\n\n✨ Ziel erreicht! ${completedNames.join(", ")}`,
        };
        message += celebrateByLang[l];
    }

    // 6. Determine mood
    let mood: ShelldonOfflineReply["mood"] = "neutral";
    if (newObjectives.length > 0) mood = "happy";
    else if (correction) mood = "thinking";
    else if (intent === "greeting") mood = "happy";
    else if (intent === "farewell") mood = "sad";
    else if (intent === "question") mood = "thinking";

    return {
        message,
        mood,
        completedObjectives: allCompleted,
        correction,
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
        fr: ["Tes phrases sont compréhensibles. Continue à pratiquer.", "Bonne utilisation de la grammaire. Essaie des phrases plus complexes.", "Grammaire excellente ! Presque natif."],
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
