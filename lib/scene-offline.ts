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
        greeting: ["Hola, encantado de hablar contigo.", "Muy bien, seguimos en este escenario."],
        thanks: ["De nada, con mucho gusto.", "Perfecto, seguimos practicando."],
        goodbye: ["Hasta luego. Antes de irte, una frase mas.", "Vale, cerramos bien este dialogo."],
        price: ["Claro, te doy un precio aproximado.", "Buena pregunta, te explico el costo."],
        direction: ["Te indico el camino con gusto.", "Vale, vamos con direcciones claras."],
        reservation: ["Perfecto, te ayudo con la reserva.", "Muy bien, revisamos disponibilidad."],
        question: ["Buena pregunta.", "Te respondo y seguimos."],
        statement: ["Entendido, buen aporte.", "Perfecto, vamos bien."],
    },
    en: {
        greeting: ["Hi, happy to practice with you.", "Great, let's continue this scene."],
        thanks: ["You're welcome.", "Nice, let's keep practicing."],
        goodbye: ["See you soon. Let's do one last sentence.", "Alright, let's close the scene well."],
        price: ["Sure, I can give you an estimated price.", "Good question, let's check the cost."],
        direction: ["Of course, I'll guide you clearly.", "Great, let's go step by step with directions."],
        reservation: ["Perfect, I'll help with the booking.", "Great, let's check availability."],
        question: ["Good question.", "Let me answer and continue."],
        statement: ["Got it, nice sentence.", "Good, you're on track."],
    },
    fr: {
        greeting: ["Salut, ravi de pratiquer avec toi.", "Tres bien, on continue ce scenario."],
        thanks: ["Avec plaisir.", "Parfait, on continue la pratique."],
        goodbye: ["A bientot. Faisons encore une phrase.", "D'accord, on termine bien ce dialogue."],
        price: ["Bien sur, je te donne un prix approximatif.", "Bonne question, on verifie le cout."],
        direction: ["Je t'indique le chemin clairement.", "Parfait, on y va etape par etape."],
        reservation: ["Parfait, je t'aide pour la reservation.", "Tres bien, on verifie les disponibilites."],
        question: ["Bonne question.", "Je reponds et on continue."],
        statement: ["Compris, bonne phrase.", "Tres bien, on avance."],
    },
    de: {
        greeting: ["Hallo, ich freue mich auf die Ubung.", "Sehr gut, wir machen mit der Szene weiter."],
        thanks: ["Gern geschehen.", "Super, wir uben weiter."],
        goodbye: ["Bis bald. Eine letzte Aussage ware gut.", "Okay, wir beenden den Dialog sauber."],
        price: ["Klar, ich nenne dir einen ungefahren Preis.", "Gute Frage, wir schauen auf die Kosten."],
        direction: ["Ich erklare dir den Weg klar.", "Gut, wir machen die Wegbeschreibung Schritt fur Schritt."],
        reservation: ["Perfekt, ich helfe bei der Reservierung.", "Sehr gut, wir prufen die Verfugbarkeit."],
        question: ["Gute Frage.", "Ich antworte und wir machen weiter."],
        statement: ["Verstanden, guter Satz.", "Sehr gut, du bist auf dem richtigen Weg."],
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
        reservation: ["reserva", "reservar", "habitacion", "mesa", "disponible"],
        question: ["que", "como", "cuando", "por que", "puedes", "podria", "?"],
        statement: [],
    },
    en: {
        greeting: ["hello", "hi", "good morning", "hey"],
        thanks: ["thanks", "thank you"],
        goodbye: ["bye", "goodbye", "see you"],
        price: ["price", "cost", "cheap", "expensive", "dollar", "euro", "how much"],
        direction: ["where", "left", "right", "straight", "station", "route", "way"],
        reservation: ["book", "booking", "reserve", "reservation", "room", "table", "available"],
        question: ["what", "how", "when", "why", "can", "could", "?"],
        statement: [],
    },
    fr: {
        greeting: ["bonjour", "salut", "bonsoir", "coucou"],
        thanks: ["merci", "merci beaucoup"],
        goodbye: ["au revoir", "a bientot", "a plus"],
        price: ["prix", "combien", "coute", "cher", "euro"],
        direction: ["ou", "gauche", "droite", "tout droit", "gare", "chemin"],
        reservation: ["reserver", "reservation", "chambre", "table", "disponible"],
        question: ["quoi", "comment", "quand", "pourquoi", "pouvez", "peux", "?"],
        statement: [],
    },
    de: {
        greeting: ["hallo", "guten tag", "hi", "servus"],
        thanks: ["danke", "vielen dank"],
        goodbye: ["tschuss", "auf wiedersehen", "bis bald"],
        price: ["preis", "kosten", "teuer", "billig", "euro", "wie viel"],
        direction: ["wo", "links", "rechts", "geradeaus", "bahnhof", "weg"],
        reservation: ["reservieren", "reservierung", "zimmer", "tisch", "verfugbar"],
        question: ["was", "wie", "wann", "warum", "kann", "konnte", "?"],
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

    const scenePracticeData = getScenePracticeData(scene);
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

    if (check("greeting")) return "greeting";
    if (check("thanks")) return "thanks";
    if (check("goodbye")) return "goodbye";
    if (check("price")) return "price";
    if (check("direction")) return "direction";
    if (check("reservation")) return "reservation";
    if (check("question") || message.includes("?")) return "question";
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
