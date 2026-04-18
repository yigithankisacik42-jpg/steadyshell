/**
 * Luna AI Tutor - Offline Motor
 * AI API çağrısı SIFIR — Tamamen kural tabanlı, çevrimdışı çalışır.
 * 
 * Stratejisi: Konu tespiti (topic detection) + Statik grammar/vocabulary kartları
 */

export type SupportedLang = "es" | "en" | "fr" | "de";
type Topic = "greeting" | "grammar" | "vocabulary" | "correction" | "scenario" | "general";

export interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export interface LunaOfflineReply {
    success: boolean;
    message: string;
    error?: string;
}

// ============================================================
// LANGUAGE CONFIG
// ============================================================
export const LANG_NAMES: Record<SupportedLang, { tr: string; native: string; flag: string }> = {
    es: { tr: "İspanyolca", native: "Español", flag: "🇪🇸" },
    en: { tr: "İngilizce", native: "English", flag: "🇬🇧" },
    fr: { tr: "Fransızca", native: "Français", flag: "🇫🇷" },
    de: { tr: "Almanca", native: "Deutsch", flag: "🇩🇪" },
};

const SUPPORTED: SupportedLang[] = ["es", "en", "fr", "de"];
function lang(l: string): SupportedLang { return SUPPORTED.includes(l as SupportedLang) ? l as SupportedLang : "en"; }
function normalizeText(input: string): string {
    return input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s?]/g, " ").replace(/\s+/g, " ").trim();
}
function choose<T>(items: T[], seed: number): T { return items[Math.abs(seed) % items.length]; }
function hashStr(s: string): number { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 2147483647; return h; }

// ============================================================
// TOPIC DETECTION
// ============================================================
const GRAMMAR_KEYWORDS = [
    "gramer", "grammar", "dilbilgisi", "kural", "rule", "fiil", "verb", "zaman", "tense",
    "present", "past", "future", "çekim", "conjugation", "article", "tanımlık", "preposition",
    "edat", "subjunctive", "subjonctif", "konjunktiv", "imperfect", "perfect", "passé",
    "imparfait", "conditionnel", "conditional", "gerund", "infinitive", "participle",
    "passif", "passive", "aktif", "active", "modal", "yardımcı", "auxiliary"
];

const VOCAB_KEYWORDS = [
    "kelime", "word", "vocabulary", "sözcük", "anlam", "meaning", "çevir", "translate",
    "nasıl denir", "how do you say", "comment dit-on", "wie sagt man", "ne demek",
    "ne anlama", "what does", "sözlük", "dictionary"
];

const CORRECTION_KEYWORDS = [
    "hata", "mistake", "error", "yanlış", "wrong", "düzelt", "correct", "fix",
    "nerede yanlış", "hatam var mı", "doğru mu", "is this correct"
];

const GREETING_KEYWORDS = [
    "merhaba", "selam", "hello", "hi", "hey", "nasılsın", "how are you",
    "bonjour", "salut", "hallo", "buenos", "hola"
];

function detectTopic(message: string): Topic {
    const n = normalizeText(message);
    if (GREETING_KEYWORDS.some(k => n.includes(normalizeText(k)))) return "greeting";
    if (CORRECTION_KEYWORDS.some(k => n.includes(normalizeText(k)))) return "correction";
    if (GRAMMAR_KEYWORDS.some(k => n.includes(normalizeText(k)))) return "grammar";
    if (VOCAB_KEYWORDS.some(k => n.includes(normalizeText(k)))) return "vocabulary";
    return "general";
}

// ============================================================
// GRAMMAR CARDS DATABASE (Static, per language)
// ============================================================
interface GrammarCard {
    topic: string;
    keywords: string[];
    explanation: string;
    examples: string[];
}

const GRAMMAR_CARDS: Record<SupportedLang, GrammarCard[]> = {
    es: [
        { topic: "Ser vs Estar", keywords: ["ser", "estar", "to be"], explanation: "📝 **Ser vs Estar**\n\n**Ser**: Kalıcı özellikler (milliyet, meslek, fiziksel özellik)\n**Estar**: Geçici durumlar (ruh hali, konum, sağlık)\n\n", examples: ["**Yo soy** (ben ~yım) turco → Kalıcı\n**Yo estoy** (ben ~yım) cansado → Geçici"] },
        { topic: "Present Tense -AR", keywords: ["presente", "present", "ar", "hablar", "geniş zaman"], explanation: "📝 **-AR Fiil Çekimi (Presente)**\n\nHABLAR (konuşmak):\n• yo habl**o**\n• tú habl**as**\n• él/ella habl**a**\n• nosotros habl**amos**\n• ellos/ellas habl**an**", examples: ["**Hablo** (konuşuyorum) español", "**Hablas** (konuşuyorsun) muy bien"] },
        { topic: "Gustar", keywords: ["gustar", "gusta", "like", "beğenmek", "sevmek"], explanation: "📝 **Gustar (Hoşlanmak)**\n\nGustar farklı çalışır — özne hoşlanılan şeydir:\n• **Me gusta** el café (kahve hoşuma gider)\n• **Me gustan** los gatos (kediler hoşuma gider)\n\nTekil → gusta\nÇoğul → gustan", examples: ["**Me gusta** (hoşuma gider) la música", "**Te gustan** (hoşuna gider) los perros"] },
        { topic: "Pretérito", keywords: ["preterito", "past", "geçmiş", "dün", "ayer"], explanation: "📝 **Pretérito Indefinido (Belirli Geçmiş)**\n\n-AR fiiller:\n• yo habl**é**\n• tú habl**aste**\n• él habl**ó**\n\nKullanım: Tamamlanmış, belirli geçmiş olaylar\n'Ayer **hablé** con María' (Dün Maria ile konuştum)", examples: ["Ayer **comí** (dün yedim) pizza", "**Viajé** (seyahat ettim) a España"] },
    ],
    en: [
        { topic: "Present Simple", keywords: ["present simple", "simple present", "geniş zaman", "do", "does"], explanation: "📝 **Present Simple**\n\nAlışkanlıklar ve genel doğrular için:\n• I/you/we/they **play**\n• He/she/it **plays** (3. tekil kişi +s)\n\nOlumsuz: don't / doesn't + fiil", examples: ["I **play** (oynuyorum) football every day", "She **doesn't like** (sevmez) coffee"] },
        { topic: "Present Perfect", keywords: ["present perfect", "have", "has", "been", "yet", "already", "ever"], explanation: "📝 **Present Perfect**\n\nhave/has + past participle (V3)\n\n• I **have eaten** (yedim/yemiş bulunuyorum)\n• She **has gone** (gitmiş)\n\nKullanım: Geçmişte başlayıp şimdiyle bağlantılı eylemler\nSinyal kelimeleri: already, yet, ever, never, just", examples: ["I **have visited** (ziyaret ettim) London twice", "She **has never been** (hiç gitmemiş) to Japan"] },
        { topic: "Past Simple", keywords: ["past simple", "simple past", "geçmiş zaman", "did", "yesterday"], explanation: "📝 **Past Simple**\n\nBelirli geçmiş olaylar:\n• Düzenli: play → **played**\n• Düzensiz: go → **went**, eat → **ate**\n\nOlumsuz: didn't + yalın fiil\nSoru: Did + özne + yalın fiil?", examples: ["I **went** (gittim) to the cinema yesterday", "She **didn't eat** (yemedi) lunch"] },
        { topic: "Conditionals", keywords: ["conditional", "if", "would", "koşul", "şart"], explanation: "📝 **Conditionals (If Cümleleri)**\n\n**Zero**: If + present, present → Genel doğrular\n**First**: If + present, will + V → Gerçekçi gelecek\n**Second**: If + past, would + V → Hayali/düşük olasılık\n**Third**: If + had + V3, would have + V3 → Geçmişe pişmanlık", examples: ["If I **had** money, I **would buy** a car (2nd)", "If it **rains**, I **will stay** home (1st)"] },
    ],
    fr: [
        { topic: "Être vs Avoir", keywords: ["etre", "avoir", "to be", "to have", "olmak", "sahip"], explanation: "📝 **Être vs Avoir**\n\n**Être** (olmak): je **suis**, tu **es**, il **est**, nous **sommes**, ils **sont**\n**Avoir** (sahip olmak): j'**ai**, tu **as**, il **a**, nous **avons**, ils **ont**\n\n⚠️ Yaş için 'avoir' kullanılır: J'**ai** 20 ans (20 yaşındayım)", examples: ["Je **suis** (ben ~yım) étudiant", "J'**ai** (bende var/~yaşındayım) 25 ans"] },
        { topic: "Passé Composé", keywords: ["passe compose", "passe", "compose", "geçmiş", "hier"], explanation: "📝 **Passé Composé**\n\navoir/être + participe passé\n\n• J'**ai mangé** (yedim) → avoir + mangé\n• Je **suis allé(e)** (gittim) → être + allé\n\n⚠️ 17 fiil être ile çekilir (aller, venir, partir...)\nÊtre ile çekilenler cinsiyete göre uyum alır: allé/allée", examples: ["J'**ai visité** (ziyaret ettim) Paris", "Elle **est partie** (o gitti - kadın) hier"] },
        { topic: "Articles", keywords: ["article", "le", "la", "les", "un", "une", "des", "tanımlık"], explanation: "📝 **Articles (Tanımlıklar)**\n\n**Belirli**: le (eril), la (dişil), les (çoğul)\n**Belirsiz**: un (eril), une (dişil), des (çoğul)\n\n⚠️ Ünlü ile başlayan kelimelerde: l' (le/la yerine)\nl'eau, l'homme, l'école", examples: ["**Le** (o/bu) livre est sur **la** table", "J'ai acheté **une** (bir) pomme"] },
        { topic: "Futur Proche", keywords: ["futur proche", "aller", "gelecek", "demain", "prochain"], explanation: "📝 **Futur Proche (Yakın Gelecek)**\n\nAller (çekimli) + Fiil (mastar)\n\n• Je **vais** manger (yiyeceğim)\n• Tu **vas** sortir (çıkacaksın)\n\nKullanım: Planlanmış veya hemen gerçekleşecek eylemler.", examples: ["Je **vais voyager** (seyahat edeceğim) demain", "Nous **allons regarder** (izleyeceğiz) un film"] },
    ],
    de: [
        { topic: "Artikel", keywords: ["artikel", "der", "die", "das", "ein", "eine", "tanımlık"], explanation: "📝 **Artikel (Tanımlıklar)**\n\n**Belirli**: der (eril), die (dişil), das (nötr), die (çoğul)\n**Belirsiz**: ein (eril/nötr), eine (dişil)\n\n⚠️ Almancada her ismin bir cinsiyeti var ve ezberlenmelidir.\nder Mann, die Frau, das Kind", examples: ["**Der** (o/bu) Mann ist groß", "**Eine** (bir) Frau liest **ein** Buch"] },
        { topic: "Verb Conjugation", keywords: ["verb", "fiil", "çekim", "konjugation", "spielen", "machen"], explanation: "📝 **Fiil Çekimi (Präsens)**\n\nSPIELEN (oynamak):\n• ich spiel**e**\n• du spiel**st**\n• er/sie/es spiel**t**\n• wir spiel**en**\n• ihr spiel**t**\n• sie/Sie spiel**en**", examples: ["Ich **spiele** (oynuyorum) Fußball", "Du **spielst** (oynuyorsun) gut"] },
        { topic: "Akkusativ", keywords: ["akkusativ", "accusative", "belirtme", "den", "einen"], explanation: "📝 **Akkusativ (Belirtme Hali)**\n\n⚠️ Sadece eril tanımlık değişir:\nder → **den**, ein → **einen**\n\ndie, das, ein (nötr) değişmez.\n\nNe zaman: Doğrudan nesne (kimi, neyi?)", examples: ["Ich sehe **den** (o) Mann", "Ich kaufe **einen** (bir) Apfel"] },
        { topic: "Modalverben", keywords: ["modal", "koennen", "muessen", "dürfen", "wollen", "sollen"], explanation: "📝 **Modalverben (Yardımcı Fiiller)**\n\n• **können** (ebilmek)\n• **müssen** (zorunda olmak)\n• **wollen** (istemek)\n\nFormül: Modal (çekimli) + Fiil (Sonda, mastar)\n'Ich **kann** Deutsch **sprechen**' (Almanca konuşabiliyorum)", examples: ["Ich **muss** (zorundayım) arbeiten", "Wir **wollen** (istiyoruz) essen"] },
    ],
};

function findGrammarCard(message: string, language: SupportedLang): GrammarCard | null {
    const n = normalizeText(message);
    const cards = GRAMMAR_CARDS[language] || [];
    
    let bestMatch: GrammarCard | null = null;
    let bestScore = 0;
    
    for (const card of cards) {
        const matchCount = card.keywords.filter(kw => n.includes(normalizeText(kw))).length;
        if (matchCount > bestScore) {
            bestScore = matchCount;
            bestMatch = card;
        }
    }
    
    return bestMatch;
}

// ============================================================
// VOCABULARY MINI-DICTIONARY
// ============================================================
interface VocabEntry { word: string; translation: string; example: string; }

const VOCAB_POOLS: Record<SupportedLang, VocabEntry[]> = {
    es: [
        { word: "desayuno", translation: "kahvaltı", example: "El **desayuno** (kahvaltı) es a las ocho." },
        { word: "almuerzo", translation: "öğle yemeği", example: "Quiero un **almuerzo** (öğle yemeği) ligero." },
        { word: "cuenta", translation: "hesap", example: "La **cuenta** (hesap), por favor." },
        { word: "izquierda", translation: "sol", example: "Gira a la **izquierda** (sol)." },
        { word: "derecha", translation: "sağ", example: "Está a la **derecha** (sağ)." },
        { word: "temporada", translation: "sezon/mevsim", example: "Es la **temporada** (sezon) de lluvias." },
    ],
    en: [
        { word: "appointment", translation: "randevu", example: "I have an **appointment** (randevu) at 3 PM." },
        { word: "receipt", translation: "fiş/makbuz", example: "Can I get a **receipt** (fiş)?" },
        { word: "commute", translation: "işe gidip gelme", example: "My daily **commute** (işe gidiş) takes an hour." },
        { word: "bargain", translation: "pazarlık/fırsat", example: "This is a real **bargain** (fırsat)!" },
        { word: "straightforward", translation: "açık/doğrudan", example: "The instructions are **straightforward** (açık)." },
        { word: "overwhelmed", translation: "bunalmış", example: "I feel **overwhelmed** (bunalmış) with work." },
    ],
    fr: [
        { word: "petit-déjeuner", translation: "kahvaltı", example: "Le **petit-déjeuner** (kahvaltı) est à huit heures." },
        { word: "addition", translation: "hesap", example: "L'**addition** (hesap), s'il vous plaît." },
        { word: "gauche", translation: "sol", example: "Tournez à **gauche** (sol)." },
        { word: "droite", translation: "sağ", example: "C'est à **droite** (sağ)." },
        { word: "quartier", translation: "mahalle/semt", example: "C'est un beau **quartier** (mahalle)." },
        { word: "embouteillage", translation: "trafik sıkışıklığı", example: "Il y a un **embouteillage** (trafik) terrible." },
        { word: "travail", translation: "iş/çalışma", example: "Bon **travail** (iyi iş) !" },
        { word: "voyage", translation: "seyahat", example: "Bon **voyage** (iyi yolculuklar) !" },
        { word: "santé", translation: "sağlık", example: "À votre **santé** (şerefe/sağlığınıza) !" },
        { word: "merci", translation: "teşekkürler", example: "**Merci** (teşekkürler) beaucoup." },
    ],
    de: [
        { word: "Frühstück", translation: "kahvaltı", example: "Das **Frühstück** (kahvaltı) ist um acht Uhr." },
        { word: "Rechnung", translation: "hesap/fatura", example: "Die **Rechnung** (hesap), bitte." },
        { word: "Ausfahrt", translation: "çıkış", example: "Nehmen Sie die nächste **Ausfahrt** (çıkış)." },
        { word: "Bahnhof", translation: "tren istasyonu", example: "Wo ist der **Bahnhof** (tren istasyonu)?" },
        { word: "Umgebung", translation: "çevre/etraf", example: "Die **Umgebung** (çevre) ist wunderschön." },
        { word: "Stau", translation: "trafik sıkışıklığı", example: "Es gibt einen **Stau** (trafik) auf der Autobahn." },
        { word: "Entschuldigung", translation: "özür dilerim/affedersiniz", example: "**Entschuldigung** (affedersiniz), wo ist das?" },
        { word: "Viel Glück", translation: "bol şans", example: "**Viel Glück** (bol şans) bei der Prüfung!" },
        { word: "Willkommen", translation: "hoş geldiniz", example: "**Herzlich Willkommen** (hoş geldiniz)!" },
        { word: "Tschüss", translation: "hoşça kal", example: "**Tschüss** (hoşça kal), bis bald!" },
    ],
};

// ============================================================
// GENERAL RESPONSE TEMPLATES
// ============================================================
const GREETING_RESPONSES: Record<SupportedLang, string[]> = {
    es: [
        "¡Hola! 😊 Soy Luna, tu tutora de español.\n\n¿Qué quieres practicar hoy?\n• Gramática 📝\n• Vocabulario 📚\n• Conversación libre 💬\n\nPuedes escribirme en español o turco. ¡Empecemos!",
        "¡Buenos días! 🌟 Me alegra verte de nuevo.\n\n¿Seguimos donde lo dejamos? Escríbeme en español, o pregúntame sobre cualquier tema gramatical."
    ],
    en: [
        "Hello! 😊 I'm Luna, your English tutor.\n\nWhat would you like to practice today?\n• Grammar 📝\n• Vocabulary 📚\n• Free conversation 💬\n\nYou can write in English or Turkish. Let's begin!",
        "Good morning! 🌟 Great to see you again.\n\nShall we pick up where we left off? Write me in English, or ask me about any grammar topic."
    ],
    fr: [
        "Bonjour ! 😊 Je suis Luna, ta tutrice de français.\n\nQu'est-ce que tu veux pratiquer aujourd'hui ?\n• Grammaire 📝\n• Vocabulaire 📚\n• Conversation libre 💬\n\nTu peux m'écrire en français ou en turc. Commençons !",
        "Salut ! 🌟 Contente de te revoir.\n\nOn reprend où on s'est arrêté ? Écris-moi en français, ou demande-moi n'importe quel sujet grammatical."
    ],
    de: [
        "Hallo! 😊 Ich bin Luna, deine Deutsch-Tutorin.\n\nWas möchtest du heute üben?\n• Grammatik 📝\n• Wortschatz 📚\n• Freies Gespräch 💬\n\nDu kannst mir auf Deutsch oder Türkisch schreiben. Los geht's!",
        "Guten Tag! 🌟 Schön dich wiederzusehen.\n\nSollen wir dort weitermachen, wo wir aufgehört haben? Schreib mir auf Deutsch, oder frag mich zu jedem Grammatikthema."
    ],
};

const GENERAL_RESPONSES: Record<SupportedLang, string[]> = {
    es: [
        "¡Muy bien! Sigamos practicando. 😊\n\n¿Puedes intentar formar una frase con lo que dijiste? Te ayudaré si te atoras.",
        "¡Genial! Eso está muy bien dicho. 🎉\n\nAquí tienes una palabra nueva: **cuenta** (hesap) — \"La **cuenta**, por favor\" (Hesap, lütfen).\n\n¿Quieres practicar más?"
    ],
    en: [
        "Great job! Let's keep practicing. 😊\n\nCan you try forming a sentence with what you said? I'll help if you get stuck.",
        "That sounds nice! Well said. 🎉\n\nHere's a new word for you: **receipt** (fiş) — \"Can I get a **receipt**?\" (Fiş alabilir miyim?)\n\nWant to practice more?"
    ],
    fr: [
        "Très bien ! Continuons à pratiquer. 😊\n\nPeux-tu essayer de former une phrase avec ce que tu as dit ? Je t'aide si tu bloques.",
        "Super ! C'est très bien dit. 🎉\n\nVoici un nouveau mot : **addition** (hesap) — \"L'**addition**, s'il vous plaît\" (Hesap, lütfen).\n\nTu veux pratiquer encore ?"
    ],
    de: [
        "Sehr gut! Lass uns weiter üben. 😊\n\nKannst du versuchen, einen Satz mit dem zu bilden, was du gesagt hast? Ich helfe, wenn du nicht weiterkommst.",
        "Super! Das hast du sehr gut gesagt. 🎉\n\nHier ist ein neues Wort: **Rechnung** (hesap) — \"Die **Rechnung**, bitte\" (Hesap, lütfen).\n\nMöchtest du weiter üben?"
    ],
};

const CORRECTION_RESPONSES: Record<SupportedLang, string[]> = {
    es: [
        "¡Claro que reviso! 🔍 Escríbeme la frase que quieres que corrija, y te explico cualquier error.\n\nRecuerda: hacer errores es parte del aprendizaje. 💪"
    ],
    en: [
        "Of course I'll check! 🔍 Write me the sentence you want me to review, and I'll explain any errors.\n\nRemember: making mistakes is part of learning. 💪"
    ],
    fr: [
        "Bien sûr que je vérifie ! 🔍 Écris-moi la phrase que tu veux que je corrige, et je t'expliquerai les erreurs.\n\nN'oublie pas : faire des erreurs fait partie de l'apprentissage. 💪"
    ],
    de: [
        "Natürlich überprüfe ich das! 🔍 Schreib mir den Satz, den ich korrigieren soll, und ich erkläre dir die Fehler.\n\nDenk daran: Fehler machen gehört zum Lernen. 💪"
    ],
};

// ============================================================
// MAIN API: createLunaReply
// ============================================================
export function createLunaReply(
    message: string,
    language: string,
    level: string,
    mode: string
): LunaOfflineReply {
    const l = lang(language);
    const topic = detectTopic(message);
    const seed = hashStr(message);
    const langName = LANG_NAMES[l];

    let response = "";

    switch (topic) {
        case "greeting":
            response = choose(GREETING_RESPONSES[l], seed);
            break;

        case "grammar": {
            const card = findGrammarCard(message, l);
            if (card) {
                response = card.explanation + "\n\n" + card.examples.join("\n") + "\n\n💡 Bu konuyu daha iyi anlamak için kendi cümleni kurmayı dene!";
            } else {
                response = `📝 ${langName.native} grameri hakkında sormak istediğin konuyu daha spesifik yazabilir misin?\n\nÖrneğin:\n• \"Present tense\"\n• \"Être çekimi\"\n• \"Artikel kuralları\"\n\nSana en iyi şekilde açıklamaya çalışayım! 😊`;
            }
            break;
        }

        case "vocabulary": {
            const vocabPool = VOCAB_POOLS[l];
            const entry1 = choose(vocabPool, seed);
            const entry2 = choose(vocabPool, seed + 3);
            response = `📚 İşte bugünün kelimeleri:\n\n1. **${entry1.word}** (${entry1.translation})\n   ${entry1.example}\n\n2. **${entry2.word}** (${entry2.translation})\n   ${entry2.example}\n\nBu kelimelerle bir cümle kurmayı dener misin? 😊`;
            break;
        }

        case "correction":
            response = choose(CORRECTION_RESPONSES[l], seed);
            break;

        case "general":
        default:
            response = choose(GENERAL_RESPONSES[l], seed);
            break;
    }

    return { success: true, message: response };
}
