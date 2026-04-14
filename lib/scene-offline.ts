import { Scene, getScenePracticeData } from "@/lib/scenes";

type SupportedLanguage = "es" | "en" | "fr" | "de";
type Intent =
    | "greeting"
    | "thanks"
    | "goodbye"
    | "price"
    | "direction"
    | "reservation"
    | "question"
    | "order"
    | "statement";

export interface OfflineSceneReply {
    message: string;
    newlyMatchedPhrases: string[];
}

interface ReplyOptions {
    scene: Scene;
    language: string;
    level: string;
    userMessage: string;
    matchedPhrases: string[];
    turnIndex: number;
}

interface PracticePhraseEntry {
    canonical: string;
    candidates: string[];
    tokenCount: number;
}

interface PracticeData {
    scenario: string;
    targetPhrases: string[];
    phraseEntries: PracticePhraseEntry[];
}

interface PhraseMatchAnalysis {
    score: number;
    matchedTokenCount: number;
    phraseTokenCount: number;
}

const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["es", "en", "fr", "de"];

const GENERIC_PRACTICE_PHRASES: Record<SupportedLanguage, string[]> = {
    es: ["Hola", "Por favor", "Gracias", "Cuanto cuesta", "Quiero", "Me gustaria", "Donde esta"],
    en: ["Hello", "Please", "Thank you", "How much is it", "I want", "I would like", "Where is"],
    fr: ["Bonjour", "S'il vous plait", "Merci", "Combien ca coute", "Je veux", "Je voudrais", "Ou est"],
    de: ["Hallo", "Bitte", "Danke", "Wie viel kostet das", "Ich mochte", "Ich hatte gerne", "Wo ist"],
};

const GREETING_BY_LANG: Record<SupportedLanguage, string[]> = {
    es: ["Hola, bienvenido a la practica.", "Genial, empezamos la conversacion.", "Perfecto, vamos paso a paso."],
    en: ["Hello, welcome to practice.", "Great, let's start the conversation.", "Nice, we can go step by step."],
    fr: ["Bonjour, bienvenue dans la pratique.", "Parfait, on commence la conversation.", "Super, on avance pas a pas."],
    de: ["Hallo, willkommen zur Ubung.", "Super, wir starten die Unterhaltung.", "Perfekt, wir machen das Schritt fur Schritt."],
};

const INTENT_BY_LANG: Record<SupportedLanguage, Record<Intent, string[]>> = {
    es: {
        greeting: [
            "Hola, encantado de hablar contigo.", 
            "Muy bien, seguimos en este escenario.",
            "¡Hola! Qué alegría practicar español contigo hoy.",
            "Buenas tardes, es un placer saludarte.",
            "¡Hola! Me alegra mucho verte de nuevo por aquí.",
            "¡Buenas! ¿Cómo te va el día hoy?"
        ],
        thanks: [
            "De nada, con mucho gusto.", 
            "Perfecto, seguimos practicando.",
            "¡No hay de qué! Para eso estoy aquí.",
            "Gracias a ti por tu esfuerzo y dedicación.",
            "Es un placer ayudarte, ¡sigamos!"
        ],
        goodbye: [
            "Hasta luego. Antes de irte, una frase más.", 
            "Vale, cerramos bien este diálogo.",
            "¡Adiós! Ha sido una gran sesión de práctica.",
            "Nos vemos pronto, que tengas un excelente día.",
            "¡Chao! Espero verte mañana para seguir mejorando."
        ],
        price: [
            "Claro, te doy un precio aproximado.", 
            "Buena pregunta, te explico el costo.",
            "Eso cuesta unos 10 euros aproximadamente.",
            "Es un precio muy razonable, ¿quieres saber más?",
            "Depende del tamaño, pero ronda los 5 euros."
        ],
        direction: [
            "Te indico el camino con gusto.", 
            "Vale, vamos con direcciones claras.",
            "Está muy cerca de aquí, a unos dos minutos.",
            "Gira a la derecha en la próxima esquina.",
            "Sigue todo recto hasta llegar a la plaza principal."
        ],
        reservation: [
            "Perfecto, te ayudo con la reserva.", 
            "Muy bien, revisamos disponibilidad ahora mismo.",
            "Claro, ¿para cuántas personas sería la reserva?",
            "Entendido, déjame comprobar el calendario de reservas."
        ],
        question: [
            "Buena pregunta.", 
            "Te respondo con gusto y seguimos con la práctica.",
            "Es una duda muy común, te explico...",
            "Claro, déjame darte los detalles que necesitas."
        ],
        order: [
            "¡Excelente elección! Te lo traigo enseguida.",
            "Perfecto, marchando un pedido de lo más rico.",
            "Muy bien, anotado. ¿Deseas acompañarlo con algo más?",
            "Claro que sí, buena elección. ¿Algo más para ti?",
            "¡Marchando! Enseguida estará listo para disfrutar."
        ],
        statement: [
            "Entendido, buen aporte.", 
            "Perfecto, vamos muy bien con la práctica.",
            "Me parece un punto muy interesante.",
            "¡Genial! Me gusta cómo construyes las frases.",
            "Muy bien, sigamos adelante con la conversación."
        ],
    },
    en: {
        greeting: [
            "Hi, happy to practice with you.", 
            "Great, let's continue this scene.",
            "Hello! It's a pleasure to speak with you today.",
            "Hi there! I'm ready to keep our conversation going.",
            "Hello! Welcome back to our practice session.",
            "Hey! How is your day going so far?"
        ],
        thanks: [
            "You're welcome.", 
            "Nice, let's keep practicing.",
            "No problem at all! I'm here to help.",
            "My pleasure! You're doing a great job.",
            "You are very welcome! Let's continue.",
            "Don't mention it! Happy to assist you."
        ],
        goodbye: [
            "See you soon. Let's do one last sentence.", 
            "Alright, let's close the scene well.",
            "Goodbye! It was a very productive session.",
            "See you later! Have a wonderful day ahead.",
            "Bye for now! Keep practicing and stay motivated.",
            "Take care! I look forward to our next talk."
        ],
        price: [
            "Sure, I can give you an estimated price.", 
            "Good question, let's check the cost.",
            "That would be around 10 dollars, I believe.",
            "The price is quite reasonable for this quality.",
            "It depends on the size, but expect about 5 euros.",
            "Certainly! The total comes to twenty dollars."
        ],
        direction: [
            "Of course, I'll guide you clearly.", 
            "Great, let's go step by step with directions.",
            "It's very close from here, about a two-minute walk.",
            "Turn right at the next intersection.",
            "Go straight ahead until you reach the main square.",
            "Follow this street and you'll see it on your left."
        ],
        reservation: [
            "Perfect, I'll help with the booking.", 
            "Great, let's check availability.",
            "Certainly, how many people is the reservation for?",
            "Sure thing! Let me check the booking calendar for you.",
            "I can handle that. Which date were you thinking of?",
            "No problem! Let's secure your spot right now."
        ],
        question: [
            "Good question.", 
            "Let me answer and continue.",
            "That's a very interesting point you've raised.",
            "Certainly! Let me give you all the details you need.",
            "Great question! Here is how it works...",
            "I'm glad you asked. Let me explain it clearly."
        ],
        order: [
            "Great choice! I'll get that for you right away.", 
            "Alright, I'm taking your order. Anything else?",
            "Excellent! I'll bring that to you in just a moment.",
            "Noted! I'll start preparing that for you immediately.",
            "Perfect selection! It's one of our most popular items.",
            "Coming right up! Just a second while I process this."
        ],
        statement: [
            "Got it, nice sentence.", 
            "Good, you're on track.",
            "That's a very interesting observation.",
            "I see what you mean. Let's move forward.",
            "Great! You're building your sentences very well.",
            "Understood. Tell me more about that if you'd like."
        ],
    },
    fr: {
        greeting: [
            "Salut, ravi de pratiquer avec toi.", 
            "Très bien, on continue ce scénario.",
            "Bonjour ! C'est un plaisir de pratiquer le français avec vous.",
            "Salut ! Je suis content de vous revoir pour cette session.",
            "Bonjour ! Prêt pour une nouvelle conversation en français ?",
            "Coucou ! Comment allez-vous aujourd'hui ?"
        ],
        thanks: [
            "Avec plaisir.", 
            "Parfait, on continue la pratique.",
            "De rien ! Je suis là pour vous aider.",
            "Merci à vous pour votre enthousiasme !",
            "C'est un plaisir d'aider quelqu'un d'aussi motivé.",
            "Pas de quoi, on progresse bien ensemble !"
        ],
        goodbye: [
            "À bientôt. Faisons encore une phrase.", 
            "D'accord, on termine bien ce dialogue.",
            "Au revoir ! C'était une excellente session.",
            "À la prochaine ! Bonne continuation dans votre apprentissage.",
            "Salut ! On se retrouve demain pour la suite ?",
            "Bonne journée et à très bientôt pour pratiquer !"
        ],
        price: [
            "Bien sûr, je te donne un prix approximatif.", 
            "Bonne question, on vérifie le coût.",
            "Ça coûterait environ 10 euros, je pense.",
            "C'est un prix très raisonnable pour la qualité.",
            "Le tarif dépend de la taille, mais comptez environ 5 euros."
        ],
        direction: [
            "Je t'indique le chemin clairement.", 
            "Parfait, on y va étape par étape.",
            "C'est tout près d'ici, à environ deux minutes à pied.",
            "Tournez à droite au prochain croisement.",
            "Allez tout droit jusqu'à la place principale."
        ],
        reservation: [
            "Parfait, je t'aide pour la réservation.", 
            "Très bien, on vérifie les disponibilités.",
            "Bien sûr, c'est pour combien de personnes ?",
            "Entendu, je regarde le calendrier des réservations tout de suite."
        ],
        question: [
            "Bonne question.", 
            "Je réponds et on continue.",
            "C'est une question très intéressante, laissez-moi vous répondre.",
            "Bien sûr, je vais vous donner tous les détails nécessaires."
        ],
        order: [
            "Très bon choix ! Je m'en occupe tout de suite.", 
            "D'accord, je prends votre commande. Autre chose ?",
            "Excellent ! Je vous apporte ça dans quelques instants.",
            "C'est noté, je lance la préparation immédiatement.",
            "Parfait, un très bon choix pour aujourd'hui !"
        ],
        statement: [
            "Compris, bonne phrase.", 
            "Très bien, on avance.",
            "C'est un point de vue très intéressant.",
            "D'accord, je vois ce que vous voulez dire.",
            "Génial ! Vous construisez très bien vos phrases."
        ],
    },
    de: {
        greeting: [
            "Hallo, ich freue mich auf die Übung.", 
            "Sehr gut, wir machen mit der Szene weiter.",
            "Schön, dich zu sehen! Womit fangen wir an?",
            "Freut mich sehr! Ich bin bereit für unser Gespräch.",
            "Hallo! Möchtest du drinnen oder draußen üben?",
            "Willkommen! Legen wir direkt mit der Praxis los."
        ],
        thanks: [
            "Gern geschehen.", 
            "Super, wir üben weiter.",
            "Nichts zu danken! Ich helfe dir immer gerne.",
            "Kein Problem, du machst tolle Fortschritte!",
            "Immer wieder gerne! Das hast du sehr gut gesagt.",
            "Vielen Dank auch dir für dein Engagement!"
        ],
        goodbye: [
            "Bis bald. Eine letzte Aussage wäre gut.", 
            "Okay, wir beenden den Dialog sauber.",
            "Auf Wiedersehen! Das war eine tolle Übung heute.",
            "Tschüss! Wir sehen uns beim nächsten Mal hoffentlich wieder.",
            "Bis morgen! Übe fleißig weiter, du wirst immer besser.",
            "Einen schönen Tag noch! Mach's gut!"
        ],
        price: [
            "Klar, ich nenne dir einen ungefähren Preis.", 
            "Gute Frage, wir schauen auf die Kosten.",
            "Das würde etwa 10 Euro kosten, denke ich.",
            "Das ist ein sehr fairer Preis für diese Qualität.",
            "Es kommt auf die Größe an, aber rechnen Sie mit 5 Euro."
        ],
        direction: [
            "Ich erkläre dir den Weg klar.", 
            "Gut, wir machen die Wegbeschreibung Schritt für Schritt.",
            "Es ist ganz in der Nähe, etwa zwei Minuten zu Fuß.",
            "Biegen Sie an der nächsten Kreuzung rechts ab.",
            "Gehen Sie geradeaus bis zum Hauptplatz."
        ],
        reservation: [
            "Perfekt, ich helfe bei der Reservierung.", 
            "Sehr gut, wir prüfen die Verfügbarkeit.",
            "Natürlich, für wie viele Personen soll ich reservieren?",
            "Gerne, ich schaue sofort in den Belegungskalender."
        ],
        question: [
            "Gute Frage.", 
            "Ich antworte und wir machen weiter.",
            "Das ist eine sehr interessante Frage, lass mich nachschauen.",
            "Natürlich, ich gebe dir alle Details, die du brauchst."
        ],
        order: [
            "Gute Wahl! Ich bereite das sofort vor.", 
            "Alles klar, ich nehme Ihre Bestellung auf. Sonst noch etwas?",
            "Ausgezeichnet! Ich bringe Ihnen das in wenigen Augenblicken.",
            "Notiert, ich fange sofort mit der Zubereitung an.",
            "Perfekt, eine sehr gute Wahl für heute!"
        ],
        statement: [
            "Verstanden, guter Satz.", 
            "Sehr gut, du bist auf dem richtigen Weg.",
            "Das ist ein sehr interessanter Aspekt.",
            "Ich verstehe, was du meinst. Machen wir weiter.",
            "Klasse! Du baust deine Sätze schon sehr gut auf."
        ],
    },
};

const CATEGORY_FOLLOWUPS: Record<string, Record<SupportedLanguage, string[]>> = {
    daily: {
        es: ["Que quieres pedir exactamente?", "Prefieres una opcion economica o premium?"],
        en: ["What exactly would you like to order?", "Would you like a budget or premium option?"],
        fr: ["Qu'est-ce que vous voulez commander exactement?", "Vous preferez une option economique ou premium?"],
        de: ["Was mochtest du genau bestellen?", "Mochtest du eher eine gunstige oder eine Premium-Option?"],
    },
    transport: {
        es: ["Quieres la ruta rapida o la mas barata?", "Te explico el camino en dos pasos."],
        en: ["Do you want the fastest route or the cheapest one?", "I can explain the route in two steps."],
        fr: ["Vous voulez l'itineraire le plus rapide ou le moins cher?", "Je peux expliquer le trajet en deux etapes."],
        de: ["Mochtest du die schnellste oder die gunstigste Route?", "Ich kann den Weg in zwei Schritten erklaren."],
    },
    travel: {
        es: ["Para cuantas noches es?", "Necesitas tambien desayuno incluido?"],
        en: ["How many nights is it for?", "Do you also need breakfast included?"],
        fr: ["C'est pour combien de nuits?", "Vous voulez aussi le petit-dejeuner inclus?"],
        de: ["Fur wie viele Nachte ist es?", "Mochtest du auch Fruhstuck inklusive?"],
    },
    health: {
        es: ["Desde cuando tienes estos sintomas?", "El dolor es leve, medio o fuerte?"],
        en: ["Since when do you have these symptoms?", "Is the pain mild, medium, or strong?"],
        fr: ["Depuis quand avez-vous ces symptomes?", "La douleur est legere, moyenne ou forte?"],
        de: ["Seit wann hast du diese Symptome?", "Ist der Schmerz leicht, mittel oder stark?"],
    },
    social: {
        es: ["Que planes tienes para hoy?", "Quieres proponer una actividad?"],
        en: ["What are your plans for today?", "Do you want to suggest an activity?"],
        fr: ["Quels sont tes plans pour aujourd'hui?", "Tu veux proposer une activite?"],
        de: ["Was sind deine Plane fur heute?", "Mochtest du eine Aktivitat vorschlagen?"],
    },
    business: {
        es: ["Puedes contarme tu experiencia principal?", "Cual es tu objetivo profesional este ano?"],
        en: ["Can you tell me your main experience?", "What is your professional goal this year?"],
        fr: ["Pouvez-vous decrire votre experience principale?", "Quel est votre objectif professionnel cette annee?"],
        de: ["Kannst du deine wichtigste Erfahrung erklaren?", "Was ist dein berufliches Ziel in diesem Jahr?"],
    },
};

const KEYWORDS_BY_LANG: Record<SupportedLanguage, Record<Intent, string[]>> = {
    es: {
        greeting: ["hola", "buenos dias", "buenas", "que tal"],
        thanks: ["gracias", "muchas gracias"],
        goodbye: ["adios", "hasta luego", "nos vemos"],
        price: ["precio", "cuanto", "cuesta", "barato", "caro", "euro"],
        direction: ["donde", "izquierda", "derecha", "recto", "camino", "estacion"],
        reservation: ["reserva", "reservar", "habitacion", "mesa", "disponible", "confirmar"],
        question: ["que", "como", "cuando", "por que", "puedes", "podria", "?"],
        order: ["quiero", "quisiera", "me gustaria", "dame", "traeme", "un cafe", "una cerveza", "agua", "la carta", "el menu", "pido"],
        statement: [],
    },
    en: {
        greeting: ["hello", "hi", "good morning", "hey", "good afternoon", "good evening", "welcome", "pleasure"],
        thanks: ["thanks", "thank you", "appreciate", "grateful"],
        goodbye: ["bye", "goodbye", "see you", "farewell", "take care", "have a nice day"],
        price: ["price", "cost", "cheap", "expensive", "dollar", "euro", "how much", "pay", "bill", "money", "rate"],
        direction: ["where", "left", "right", "straight", "station", "route", "way", "street", "turn", "find", "distance", "near", "location"],
        reservation: ["book", "booking", "reserve", "reservation", "room", "table", "available", "confirm", "appointment", "check-in"],
        question: ["what", "how", "when", "why", "can", "could", "may", "which", "?"],
        order: ["i want", "i would like", "order", "buy", "get", "give me", "bring me", "choose", "take", "menu", "coffee", "water", "beer"],
        statement: [],
    },
    fr: {
        greeting: ["bonjour", "salut", "bonsoir", "coucou", "ca va", "enchante"],
        thanks: ["merci", "merci beaucoup", "remercie", "remerciez"],
        goodbye: ["au revoir", "a bientot", "a plus", "ciao", "bonne journee", "bonne soiree"],
        price: ["prix", "combien", "coute", "cher", "euro", "tarif", "argent", "payer"],
        direction: ["ou", "gauche", "droite", "tout droit", "gare", "chemin", "rue", "avenue", "tourner", "aller"],
        reservation: ["reserver", "reservation", "chambre", "table", "disponible", "confirmer", "place"],
        question: ["quoi", "comment", "quand", "pourquoi", "pouvez", "peux", "pourriez", "serait", "?"],
        order: ["je veux", "je voudrais", "commander", "commande", "acheter", "donnez-moi", "prends", "prendre", "choisis", "choisir"],
        statement: [],
    },
    de: {
        greeting: ["hallo", "guten tag", "hi", "servus", "moin", "gruss", "willkommen", "freut mich"],
        thanks: ["danke", "vielen dank", "bedanken", "dankeschon", "merci"],
        goodbye: ["tschuss", "auf wiedersehen", "bis bald", "ciao", "schonen tag", "machs gut", "gute fahrt"],
        price: ["preis", "kosten", "teuer", "billig", "euro", "wie viel", "kostet", "bezahlen", "rechnung", "geld", "tarif"],
        direction: ["wo", "links", "rechts", "geradeaus", "bahnhof", "weg", "strasse", "platz", "abbiegen", "finden", "entfernung", "entfernt", "nahe"],
        reservation: ["reservieren", "reservierung", "zimmer", "tisch", "verfugbar", "buchen", "platz", "frei", "bestatigen", "termin"],
        question: ["was", "wie", "wann", "warum", "kann", "konnte", "dürfte", "wieso", "weshalb", "?"],
        order: ["ich mochte", "ich hatte gerne", "bestellen", "bestellung", "kaufen", "nehmen", "geben sie mir", "bring mir", "nehme", "wahl", "kuchen", "kaffee", "bier", "karte"],
        statement: [],
    },
};

function asSupportedLanguage(language: string): SupportedLanguage {
    return SUPPORTED_LANGUAGES.includes(language as SupportedLanguage)
        ? (language as SupportedLanguage)
        : "en";
}

function isPracticeScene(scene: Scene): boolean {
    return scene.category.endsWith("-practice");
}

function extractPracticeData(scene: Scene, language: SupportedLanguage): PracticeData | null {
    // REMOVED

    // Safety: check if the scene's practice category matches the selected language
    // e.g., "fr-a1-practice" should only use its data when language is "fr"
    const categoryLang = scene.category.split("-")[0]; // "fr", "es", "en", "de"
    const isLangMatch = !isPracticeScene(scene) || categoryLang === language;

    const scenePracticeData = isLangMatch ? getScenePracticeData(scene) : null;
    const fromSceneData = scenePracticeData?.targetPhrases || [];
    const fromDescription = scene.description
        .split(/[;,|/]/g)
        .map((item) => item.trim())
        .filter((item) => item.length >= 2);
    const fallbackPhrases = Array.from(new Set([...fromDescription, ...GENERIC_PRACTICE_PHRASES[language]])).filter(
        (item) => item.length >= 2
    );

    const canonicalPhrases = (fromSceneData.length > 0 ? fromSceneData : fallbackPhrases).slice(0, 20);
    const phraseEntries = canonicalPhrases.map((phrase) => {
        const candidates = expandPhraseCandidates(phrase);
        return {
            canonical: phrase,
            candidates,
            tokenCount: Math.max(1, tokenize(phrase).length),
        };
    });

    return {
        scenario: scenePracticeData?.scenario || scene.titleTr || scene.title || "Pratik sahnesi",
        targetPhrases: canonicalPhrases,
        phraseEntries,
    };
}

function expandPhraseCandidates(phrase: string): string[] {
    const base = phrase.replace(/\.\.\./g, " ").trim();
    if (!base) return [];

    const candidates = new Set<string>([base]);
    const withParenContent = base.replace(/\(([^)]*)\)/g, "$1").replace(/\s+/g, " ").trim();
    const withoutParenContent = base.replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim();

    if (withParenContent.length >= 2) candidates.add(withParenContent);
    if (withoutParenContent.length >= 2) candidates.add(withoutParenContent);

    for (const separator of [",", "/", "|"]) {
        if (!base.includes(separator)) continue;
        const parts = base
            .split(separator)
            .map((item) => item.trim())
            .filter((item) => item.length >= 2);

        for (const part of parts) {
            candidates.add(part);
        }

        if (separator === "/" && parts.length === 2) {
            const leftWords = parts[0].split(/\s+/).filter(Boolean);
            if (leftWords.length >= 2) {
                const leftPrefix = leftWords.slice(0, -1).join(" ");
                const mixed = `${leftPrefix} ${parts[1]}`.trim();
                if (mixed.length >= 2) {
                    candidates.add(mixed);
                }
            }
        }
    }

    return Array.from(candidates);
}

function normalizeText(input: string): string {
    return input
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\u00df/g, "ss")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function tokenize(input: string): string[] {
    return normalizeText(input)
        .split(" ")
        .filter((token) => token.length >= 2);
}

function choose<T>(items: T[], seed: number): T {
    return items[Math.abs(seed) % items.length];
}

function computeSeed(text: string, turnIndex: number): number {
    let hash = turnIndex * 131;
    for (let i = 0; i < text.length; i++) {
        hash = (hash * 33 + text.charCodeAt(i)) % 2147483647;
    }
    return hash;
}

function detectIntent(message: string, lang: SupportedLanguage): Intent {
    const normalized = normalizeText(message);
    const keywordMap = KEYWORDS_BY_LANG[lang];
    const check = (intent: Intent) => keywordMap[intent].some((keyword) => normalized.includes(normalizeText(keyword)));

    // ÖNCELİK SIRALAMASI: Aksiyon içeren niyetler (Order, Price vb.) 
    // Sosyal niyetlerden (Greeting, Thanks) önce kontrol edilmeli.
    if (check("order")) return "order";
    if (check("price")) return "price";
    if (check("reservation")) return "reservation";
    if (check("direction")) return "direction";
    if (check("question") || message.includes("?")) return "question";
    if (check("greeting")) return "greeting";
    if (check("thanks")) return "thanks";
    if (check("goodbye")) return "goodbye";
    
    return "statement";
}

function analyzePhraseMatch(message: string, phrase: string): PhraseMatchAnalysis {
    const normalizedMessage = normalizeText(message);
    const normalizedPhrase = normalizeText(phrase.replace(/\.\.\./g, " "));
    if (!normalizedMessage || !normalizedPhrase) {
        return { score: 0, matchedTokenCount: 0, phraseTokenCount: 0 };
    }

    if (normalizedMessage.includes(normalizedPhrase)) {
        const phraseTokens = normalizedPhrase.split(" ").filter((token) => token.length >= 2);
        return {
            score: 1,
            matchedTokenCount: phraseTokens.length,
            phraseTokenCount: phraseTokens.length,
        };
    }

    const messageTokens = normalizedMessage.split(" ").filter((token) => token.length >= 2);
    const messageSet = new Set(messageTokens);
    const phraseTokens = Array.from(new Set(normalizedPhrase.split(" ").filter((token) => token.length >= 2)));
    if (phraseTokens.length === 0) {
        return { score: 0, matchedTokenCount: 0, phraseTokenCount: 0 };
    }

    let matched = 0;
    for (const token of phraseTokens) {
        if (messageSet.has(token)) {
            matched++;
            continue;
        }
        if (token.length >= 3) {
            const partial = messageTokens.some((word) => word.startsWith(token) || token.startsWith(word));
            if (partial) {
                matched++;
            }
        }
    }

    const rawScore = matched / phraseTokens.length;
    const score = phraseTokens.length >= 4 && matched <= 1 ? rawScore * 0.6 : rawScore;
    return {
        score,
        matchedTokenCount: matched,
        phraseTokenCount: phraseTokens.length,
    };
}

function findNewPhraseMatches(
    userMessage: string,
    phraseEntries: PracticePhraseEntry[],
    alreadyMatched: string[]
): string[] {
    const matchedSet = new Set(alreadyMatched.map((item) => normalizeText(item)));
    const newlyMatched: string[] = [];

    for (const entry of phraseEntries) {
        const canonicalKey = normalizeText(entry.canonical);
        if (matchedSet.has(canonicalKey)) continue;

        let bestAnalysis: PhraseMatchAnalysis = { score: 0, matchedTokenCount: 0, phraseTokenCount: entry.tokenCount };
        for (const candidate of entry.candidates) {
            const analysis = analyzePhraseMatch(userMessage, candidate);
            if (
                analysis.score > bestAnalysis.score ||
                (analysis.score === bestAnalysis.score && analysis.matchedTokenCount > bestAnalysis.matchedTokenCount)
            ) {
                bestAnalysis = analysis;
            }
        }

        const tokenCount = Math.max(entry.tokenCount, bestAnalysis.phraseTokenCount);
        const threshold = tokenCount <= 2 ? 0.5 : tokenCount <= 4 ? 0.38 : 0.32;
        const minMatchedTokens = tokenCount >= 4 ? 2 : 1;

        if (bestAnalysis.score >= threshold && bestAnalysis.matchedTokenCount >= minMatchedTokens) {
            newlyMatched.push(entry.canonical);
        }
    }

    return newlyMatched;
}

function buildSceneFollowUp(scene: Scene, lang: SupportedLanguage, seed: number, level: string): string {
    const followups = CATEGORY_FOLLOWUPS[scene.category]?.[lang];
    if (!followups || followups.length === 0) {
        if (level === "A1" || level === "A2") {
            const simpleByLang: Record<SupportedLanguage, string> = {
                es: "Puedes responder con una frase corta.",
                en: "You can answer with one short sentence.",
                fr: "Tu peux repondre avec une phrase courte.",
                de: "Du kannst mit einem kurzen Satz antworten.",
            };
            return simpleByLang[lang];
        }
        const normalByLang: Record<SupportedLanguage, string> = {
            es: "Si quieres, puedes dar mas detalles en la siguiente frase.",
            en: "If you want, you can add more detail in your next sentence.",
            fr: "Si tu veux, tu peux donner plus de details dans ta prochaine phrase.",
            de: "Wenn du willst, kannst du im nachsten Satz mehr Details geben.",
        };
        return normalByLang[lang];
    }
    return choose(followups, seed + 11);
}

function buildPracticeHint(targetPhrases: string[], matchedPhrases: string[], seed: number): string {
    const used = new Set(matchedPhrases.map((item) => normalizeText(item)));
    const remaining = targetPhrases.filter((phrase) => !used.has(normalizeText(phrase)));
    const pool = remaining.length > 0 ? remaining : targetPhrases;
    const first = choose(pool, seed + 3);
    const second = choose(pool, seed + 7);

    if (first === second) return first;
    return `${first} | ${second}`;
}

export function createOfflineSceneIntro(scene: Scene, language: string, level: string): OfflineSceneReply {
    const lang = asSupportedLanguage(language);
    const practiceData = extractPracticeData(scene, lang);
    const intro = choose(GREETING_BY_LANG[lang], scene.id.length + level.length);

    if (!practiceData) {
        const followUp = buildSceneFollowUp(scene, lang, scene.id.length, level);
        return {
            message: `${intro} ${followUp}`,
            newlyMatchedPhrases: [],
        };
    }

    const hint = buildPracticeHint(practiceData.targetPhrases, [], scene.id.length);
    const practiceIntroByLang: Record<SupportedLanguage, string> = {
        es: `Hoy practicamos: ${practiceData.scenario}.`,
        en: `Today we practice: ${practiceData.scenario}.`,
        fr: `Aujourd'hui on pratique: ${practiceData.scenario}.`,
        de: `Heute uben wir: ${practiceData.scenario}.`,
    };

    return {
        message: `${intro} ${practiceIntroByLang[lang]}\n\nNot (TR): Bu sahnede tek dogru cevap yok; farkli cumlelerle devam edebilirsin. Baslangic icin su kaliplardan birini dene: ${hint}`,
        newlyMatchedPhrases: [],
    };
}

export function createOfflineSceneReply({
    scene,
    language,
    level,
    userMessage,
    matchedPhrases,
    turnIndex,
}: ReplyOptions): OfflineSceneReply {
    const lang = asSupportedLanguage(language);
    const intent = detectIntent(userMessage, lang);
    const seed = computeSeed(userMessage, turnIndex);
    const intentReply = choose(INTENT_BY_LANG[lang][intent], seed);
    const followUp = buildSceneFollowUp(scene, lang, seed, level);

    let message = `${intentReply} ${followUp}`.trim();
    const practiceData = extractPracticeData(scene, lang);
    if (!practiceData) {
        return { message, newlyMatchedPhrases: [] };
    }

    const newlyMatchedPhrases = findNewPhraseMatches(userMessage, practiceData.phraseEntries, matchedPhrases);
    const totalMatched = new Set([...matchedPhrases, ...newlyMatchedPhrases].map((item) => normalizeText(item))).size;

    if (newlyMatchedPhrases.length > 0) {
        message += `\n\nNot (TR): Cok iyi. Yeni kullandigin kaliplar: ${newlyMatchedPhrases.join(", ")}. Ilerleme: ${totalMatched}/${practiceData.targetPhrases.length}.`;
    } else {
        const hint = buildPracticeHint(practiceData.targetPhrases, matchedPhrases, seed);
        message += `\n\nNot (TR): Mesajin anlasilir, devam. Cevap yelpazeni genisletmek icin su kaliplardan birini de eklemeyi dene: ${hint}`;
    }

    return {
        message,
        newlyMatchedPhrases,
    };
}
