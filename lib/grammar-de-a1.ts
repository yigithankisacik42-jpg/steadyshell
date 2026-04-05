import { GrammarRule, GrammarExercise } from "./grammar";

export interface GermanGrammarUnit {
    unitId: number;
    title: string;
    rules: GrammarRule[];
    exercises: GrammarExercise[];
}

// ===== UNIT 501: PERSONALPRONOMEN & SEIN (OLMAK) =====
const unit501Grammar: GermanGrammarUnit = {
    unitId: 501,
    title: "Şahıs Zamirleri ve Sein Fiili (Olmak)",
    rules: [
        {
            id: "de-sein-intro",
            title: "1. Sein Fiili Nedir?",
            explanation: "Almancada en temel fiil 'sein' (olmak) fiilidir. İngilizcedeki 'to be' (am/is/are) gibidir. Durum, kimlik veya özellik belirtirken kullanılır. Çekimi düzensizdir, yani ezberlenmesi gerekir.",
            examples: [
                { de: "Ich bin Ali.", tr: "Ben Ali'yim." },
                { de: "Du bist Student.", tr: "Sen öğrencisin." },
                { de: "Er ist Lehrer.", tr: "O öğretmendir." }
            ]
        },
        {
            id: "de-pronouns",
            title: "2. Şahıs Zamirleri (Personalpronomen)",
            explanation: "Almancada şahıslar şöyledir:\n\n* **Ich:** Ben\n* **Du:** Sen\n* **Er:** O (Erkek)\n* **Sie:** O (Kadın)\n* **Es:** O (Nötr)\n* **Wir:** Biz\n* **Ihr:** Siz (Çoğul)\n* **Sie:** Onlar\n* **Sie:** Siz (Resmi)",
            table: {
                headers: ["Zamir", "Türkçe", "Sein Çekimi"],
                rows: [
                    ["Ich", "Ben", "bin"],
                    ["Du", "Sen", "bist"],
                    ["Er / Sie / Es", "O", "ist"],
                    ["Wir", "Biz", "sind"],
                    ["Ihr", "Siz", "seid"],
                    ["Sie / sie", "Siz / Onlar", "sind"]
                ]
            },
            examples: [
                { de: "Wer sind Sie?", tr: "Siz kimsiniz? (Resmi)" },
                { de: "Wir sind hier.", tr: "Biz buradayız." }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ Ali.", options: ["bin", "bist", "ist", "sind"], correct: 0, explanation: "'Ich' ile 'bin' kullanılır." },
        { question: "Du ___ nett.", options: ["bin", "bist", "ist", "sind"], correct: 1, explanation: "'Du' ile 'bist' kullanılır." },
        { question: "Er ___ Lehrer.", options: ["bin", "bist", "ist", "sind"], correct: 2, explanation: "'Er' ile 'ist' kullanılır." },
        { question: "Wir ___ glücklich.", options: ["bin", "bist", "ist", "sind"], correct: 3, explanation: "'Wir' ile 'sind' kullanılır." },
        { question: "Ihr ___ Studenten.", options: ["bin", "seid", "ist", "sind"], correct: 1, explanation: "'Ihr' ile 'seid' kullanılır." },
        { question: "Es ___ kalt.", options: ["bin", "bist", "ist", "sind"], correct: 2, explanation: "'Es' ile 'ist' kullanılır." },
        { question: "Sie (onlar) ___ müde.", options: ["bin", "bist", "ist", "sind"], correct: 3, explanation: "Çoğul 'sie' ile 'sind' kullanılır." },
        { question: "___ du hazır?", options: ["Bin", "Bist", "Ist", "Sind"], correct: 1, explanation: "Soru cümlesinde 'bist' başa gelir." },
        { question: "Das ___ ein Buch.", options: ["bin", "bist", "ist", "sind"], correct: 2, explanation: "Nesneler (es) için 'ist' kullanılır." },
        { question: "Meine Mutter ___ güzel.", options: ["bin", "bist", "ist", "sind"], correct: 2, explanation: "'Mutter' (sie) için 'ist' kullanılır." }
    ]
};

// ===== UNIT 502: HABEN & ZAHLEN (SAHİP OLMAK VE SAYILAR) =====
const unit502Grammar: GermanGrammarUnit = {
    unitId: 502,
    title: "Haben Fiili ve Sayılar (21-100+)",
    rules: [
        {
            id: "de-haben",
            title: "1. Haben Fiili (Sahip Olmak)",
            explanation: "Haben fiili bir şeye sahip olduğumuzu belirtirken kullanılır (İngilizce 'to have'). Almancada nesneler genellikle 'Akkusativ' (i hali) ile kullanılır.",
            table: {
                headers: ["Zamir", "Türkçe", "Haben Çekimi"],
                rows: [
                    ["Ich", "Ben", "habe"],
                    ["Du", "Sen", "hast"],
                    ["Er / Sie / Es", "O", "hat"],
                    ["Wir", "Biz", "haben"],
                    ["Ihr", "Siz", "habt"],
                    ["Sie / sie", "Siz / Onlar", "haben"]
                ]
            },
            examples: [
                { de: "Ich habe einen Hund.", tr: "Benim bir köpeğim var." },
                { de: "Hast du Zeit?", tr: "Vaktin var mı?" }
            ]
        },
        {
            id: "de-numbers-21",
            title: "2. Sayılar (21-100+)",
            explanation: "20'den sonra sayılar tersten söylenir: 'bir-ve-yirmi' (einundzwanzig).",
            table: {
                headers: ["Sayı", "Almanca", "Yapı"],
                rows: [
                    ["21", "einundzwanzig", "1 + ve + 20"],
                    ["32", "zweiunddreißig", "2 + ve + 30"],
                    ["45", "fünfundvierzig", "5 + ve + 40"],
                    ["100", "hundert", "-"],
                    ["1000", "tausend", "-"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Ich ___ ein Haus.", options: ["habe", "hast", "hat", "haben"], correct: 0, explanation: "'Ich' ile 'habe' kullanılır." },
        { question: "___ du Geschwister?", options: ["Habe", "Hast", "Hat", "Haben"], correct: 1, explanation: "'Du' ile 'hast' kullanılır." },
        { question: "Er ___ keine Zeit.", options: ["habe", "hast", "hat", "haben"], correct: 2, explanation: "'Er' ile 'hat' kullanılır." },
        { question: "Wir ___ Hunger.", options: ["habe", "hast", "hat", "haben"], correct: 3, explanation: "'Wir' ile 'haben' kullanılır." },
        { question: "Ihr ___ ein Auto.", options: ["habe", "hast", "hat", "habt"], correct: 3, explanation: "'Ihr' ile 'habt' kullanılır." },
        { question: "Sie (onlar) ___ Glück.", options: ["habe", "hast", "hat", "haben"], correct: 3, explanation: "Çoğul 'sie' ile 'haben' kullanılır." },
        { question: "21 sayısının yazılışı hangisidir?", options: ["zwanzigein", "einundzwanzig", "einzwanzig", "zwanzigundein"], correct: 1, explanation: "Önce birlik, sonra onluk söylenir." },
        { question: "35 sayısının yazılışı hangisidir?", options: ["fünfunddreißig", "dreißigfünf", "fünfdreißig", "dreißigundfünf"], correct: 0, explanation: "fünf (5) + und (ve) + dreißig (30)." },
        { question: "100 hangi kelimeyle ifade edilir?", options: ["tausend", "million", "hundert", "null"], correct: 2, explanation: "Hundert = 100." },
        { question: "Haben fiilinin 'Ihr' (sizler) çekimi nedir?", options: ["habe", "habt", "hat", "hast"], correct: 1, explanation: "Ihr habt." }
    ]
};

// ===== UNIT 503: POSSESSIVARTIKEL (İYELİK ARTIKELLERİ) =====
const unit503Grammar: GermanGrammarUnit = {
    unitId: 503,
    title: "İyelik Artikelleri (Mein, Dein...)",
    rules: [
        {
            id: "de-pos-intro",
            title: "1. Benim, Senin, Onun",
            explanation: "Bir şeyin kime ait olduğunu belirtmek için iyelik artikelleri kullanılır. Artikeller, ait olunan nesnenin cinsiyetine (der, die, das) göre ek alır.",
            table: {
                headers: ["Kişi", "Eril/Nötr (der/das)", "Dişil (die) / Çoğul"],
                rows: [
                    ["Ich (Ben)", "mein", "meine"],
                    ["Du (Sen)", "dein", "deine"],
                    ["Er (O - Erkek)", "sein", "seine"],
                    ["Sie (O - Kadın)", "ihr", "ihre"],
                    ["Es (O - Nötr)", "sein", "seine"],
                    ["Wir (Biz)", "unser", "unsere"]
                ]
            },
            examples: [
                { de: "Mein Vater ist hier.", tr: "Babam burada." },
                { de: "Ist das deine Tasche?", tr: "Bu senin çantan mı?" }
            ]
        }
    ],
    exercises: [
        { question: "Das ist ___ (benim) Bruder.", options: ["mein", "meine", "meinen", "meiner"], correct: 0, explanation: "'Bruder' (der) olduğu için 'mein' kullanılır." },
        { question: "Wo ist ___ (senin) Mutter?", options: ["dein", "deine", "deinen", "deiner"], correct: 1, explanation: "'Mutter' (die) olduğu için 'deine' kullanılır." },
        { question: "Das ist ___ (onun - kadın) Buch.", options: ["ihr", "ihre", "sein", "seine"], correct: 0, explanation: "'Buch' (das) olduğu için 'ihr' kullanılır." },
        { question: "___ (bizim) Haus ist groß.", options: ["unser", "unsere", "mein", "meine"], correct: 0, explanation: "'Haus' (das) olduğu için 'unser' kullanılır." },
        { question: "Sind das ___ (senin) Kinder?", options: ["dein", "deine", "mein", "meine"], correct: 1, explanation: "Çoğul (Kinder) için 'deine' kullanılır." },
        { question: "___ (onun - erkek) Auto ist neu.", options: ["sein", "seine", "ihr", "ihre"], correct: 0, explanation: "'Auto' (das) olduğu için 'sein' kullanılır." },
        { question: "Hier ist ___ (benim) Tasche.", options: ["mein", "meine", "meinen", "meiner"], correct: 1, explanation: "'Tasche' (die) olduğu için 'meine' kullanılır." },
        { question: "Wie heißt ___ (senin) Hund?", options: ["dein", "deine", "mein", "meine"], correct: 0, explanation: "'Hund' (der) olduğu için 'dein' kullanılır." },
        { question: "___ (onların) Eltern sind alt.", options: ["ihr", "ihre", "unser", "unsere"], correct: 1, explanation: "Çoğul 'Eltern' için 'ihre' (onların - dişil/çoğul hali) kullanılır." },
        { question: "___ (sizin - resmi) Name, bitte?", options: ["Ihr", "Ihre", "Mein", "Meine"], correct: 0, explanation: "Resmi 'Siz' için 'Ihr' kullanılır." }
    ]
};

// ===== UNIT 504: ADJEKTIVE (SIFATLAR) =====
const unit504Grammar: GermanGrammarUnit = {
    unitId: 504,
    title: "Temel Sıfatlar ve Niteleme",
    rules: [
        {
            id: "de-adj",
            title: "1. Sıfatların Kullanımı",
            explanation: "Sıfatlar bir ismi veya bir durumu nitelemek için kullanılır. 'sein' fiili ile kullanıldıklarında ek almazlar (özne-sıfat yapısı).",
            examples: [
                { de: "Der Baum ist groß.", tr: "Ağaç büyüktür." },
                { de: "Das Auto ist schnell.", tr: "Araba hızlıdır." }
            ]
        },
        {
            id: "de-adj-opposites",
            title: "2. Zıt Sıfatlar",
            table: {
                headers: ["Sıfat", "Zıttı", "Türkçeleri"],
                rows: [
                    ["groß", "klein", "büyük - küçük"],
                    ["gut", "schlecht", "iyi - kötü"],
                    ["neu", "alt", "yeni - eski"],
                    ["teuer", "billig", "pahalı - ucuz"],
                    ["hell", "dunkel", "aydınlık - karanlık"]
                ]
            },
            explanation: "Sıfatlar zıt anlamlılarıyla öğrenilirse daha kalıcı olur.",
            examples: []
        }
    ],
    exercises: [
        { question: "Das Buch ist ___ (pahalı).", options: ["billig", "teuer", "klein", "alt"], correct: 1, explanation: "Teuer = Pahalı." },
        { question: "Der Mann ist ___ (yaşlı).", options: ["jung", "alt", "neu", "groß"], correct: 1, explanation: "Alt = Yaşlı/Eski." },
        { question: "Mein Auto ist ___ (hızlı).", options: ["langsam", "schnell", "schmutzig", "kalt"], correct: 1, explanation: "Schnell = Hızlı." },
        { question: "Die Wohnung ist ___ (aydınlık).", options: ["dunkel", "hell", "klein", "groß"], correct: 1, explanation: "Hell = Aydınlık." },
        { question: "Wasser ist ___ (soğuk).", options: ["heiß", "kalt", "warm", "süß"], correct: 1, explanation: "Kalt = Soğuk." },
        { question: "Das Gegenteil von 'groß' ist ___.", options: ["alt", "klein", "gut", "teuer"], correct: 1, explanation: "Büyüğün zıttı küçüktür (klein)." },
        { question: "Kaffee ist ___ (sıcak).", options: ["kalt", "heiß", "billig", "langsam"], correct: 1, explanation: "Heiß = Sıcak." },
        { question: "Der Film ist ___ (sıkıcı).", options: ["interessant", "langweilig", "lustig", "kurz"], correct: 1, explanation: "Langweilig = Sıkıcı." },
        { question: "Die Tasche ist ___ (hafif).", options: ["schwer", "leicht", "groß", "klein"], correct: 1, explanation: "Leicht = Hafif/Kolay." },
        { question: "Das Gegenteil von 'teuer' ist ___.", options: ["billig", "neu", "hell", "kurz"], correct: 0, explanation: "Pahalının zıttı ucuştur (billig)." }
    ]
};

// ===== UNIT 505: ARTIKEL (BELİRLİ VE BELİRSİZ ARTIKELLER) =====
const unit505Grammar: GermanGrammarUnit = {
    unitId: 505,
    title: "Artikeller (der, die, das / ein, eine)",
    rules: [
        {
            id: "de-art-def",
            title: "1. Belirli Artikeller (Bestimmte Artikel)",
            explanation: "Almancada her ismin bir cinsiyeti vardır. 'der' (eril), 'die' (dişil), 'das' (nötr). Çoğul isimlerin tamamı 'die' artikeli ile kullanılır.",
            table: {
                headers: ["Cinsiyet", "Belirli Artikel", "Belirsiz Artikel", "Olumsuz (kein)"],
                rows: [
                    ["Eril (Maskulin)", "der", "ein", "kein"],
                    ["Nötr (Neutral)", "das", "ein", "kein"],
                    ["Dişil (Feminin)", "die", "eine", "keine"],
                    ["Çoğul (Plural)", "die", "-", "keine"]
                ]
            },
            examples: []
        },
        {
            id: "de-art-indef",
            title: "2. Belirsiz Artikeller (Unbestimmte Artikel)",
            explanation: "Herhangi bir nesneden bahsederken kullanılır (Türkçedeki 'bir' kelimesi gibi). Çoğul isimlerin belirsiz artikeli yoktur.",
            examples: [
                { de: "Das ist ein Tisch.", tr: "Bu bir masadır. (Herhangi bir masa)" },
                { de: "Der Tisch ist blau.", tr: "(O) masa mavidir. (Belirli bir masa)" }
            ]
        }
    ],
    exercises: [
        { question: "Das ist ___ Haus (das).", options: ["der", "die", "das", "ein"], correct: 2, explanation: "'Haus'un belirli artikeli 'das'tır." },
        { question: "Ich habe ___ Apfel (der).", options: ["ein", "eine", "einer", "eines"], correct: 0, explanation: "Der ismin belirsiz artikeli 'ein'dır." },
        { question: "Das ist ___ Blume (die).", options: ["ein", "eine", "einer", "eines"], correct: 1, explanation: "Die ismin belirsiz artikeli 'eine'dır." },
        { question: "___ Kinder (plural) spielen.", options: ["Der", "Die", "Das", "Ein"], correct: 1, explanation: "Çoğulların belirli artikeli her zaman 'die'dır." },
        { question: "İst das ___ (bir) Buch (das)?", options: ["ein", "eine", "einer", "das"], correct: 0, explanation: "Das ismin belirsiz artikeli 'ein'dır." },
        { question: "___ Sonne (die) scheint.", options: ["Der", "Die", "Das", "Ein"], correct: 1, explanation: "Sonne (die) artikeline sahiptir." },
        { question: "___ Hund (der) ist groß.", options: ["Der", "Die", "Das", "Ein"], correct: 0, explanation: "Hund (der) artikeline sahiptir." },
        { question: "Das sind ___ (birkaç) Bücher (plural).", options: ["ein", "eine", "-", "keine"], correct: 2, explanation: "Almancada çoğul isimlerin önünde belirsiz artikel (bir) kullanılmaz." },
        { question: "Kayıp bir anahtar için hangisi söylenir? (Schlüssel - der)", options: ["Die Schlüssel", "Ein Schlüssel", "Eine Schlüssel", "Das Schlüssel"], correct: 1, explanation: "Eril isim belirsiz artikeli 'ein' alır." },
        { question: "Masadaki lamba için hangisi söylenir? (Lampe - die)", options: ["Der Lampe", "Das Lampe", "Die Lampe", "Ein Lampe"], correct: 2, explanation: "Belirli bir lamba için 'Die Lampe' kullanılır." }
    ]
};

// ===== UNIT 506: NEGATION (OLUMSUZLUK - KEIN & NICHT) =====
const unit506Grammar: GermanGrammarUnit = {
    unitId: 506,
    title: "Olumsuzluk Yapısı (Kein ve Nicht)",
    rules: [
        {
            id: "de-neg-kein",
            title: "1. Kein Kullanımı",
            explanation: "Önünde 'ein/eine' artikeli olan veya artikelsiz kullanılan isimleri olumsuz yapmak için 'kein/keine' kullanılır.",
            examples: [
                { de: "Das ist ein Buch. -> Das ist kein Buch.", tr: "Bu bir kitap. -> Bu bir kitap değil." },
                { de: "Ich habe Kinder. -> Ich habe keine Kinder.", tr: "Çocuklarım var. -> Çocuklarım yok." }
            ]
        },
        {
            id: "de-neg-nicht",
            title: "2. Nicht Kullanımı",
            explanation: "Fiilleri, sıfatları, belirli isimleri veya tüm cümleyi olumsuz yapmak için 'nicht' kullanılır.",
            examples: [
                { de: "Ich lerne nicht.", tr: "Çalışmıyorum (öğrenmiyorum)." },
                { de: "Der Baum ist nicht groß.", tr: "Ağaç büyük değil." }
            ]
        }
    ],
    exercises: [
        { question: "Das ist ___ Auto.", options: ["nicht", "kein", "keine", "nichts"], correct: 1, explanation: "'Auto' (das) olduğu için 'kein' kullanılır." },
        { question: "Ich komme ___.", options: ["nicht", "kein", "keine", "keiner"], correct: 0, explanation: "Fiili olumsuz yapmak için 'nicht' kullanılır." },
        { question: "Er ist ___ nett.", options: ["kein", "keine", "nicht", "nichts"], correct: 2, explanation: "Sıfatı olumsuz yapmak için 'nicht' kullanılır." },
        { question: "Ich habe ___ Zeit.", options: ["nicht", "kein", "keine", "nichts"], correct: 2, explanation: "'Zeit' (die) olduğu için 'keine' kullanılır." },
        { question: "Das ist ___ (benim) Buch.", options: ["nicht mein", "kein mein", "meine değil", "nicht"], correct: 0, explanation: "İyelik artikelleri ile 'nicht' kullanılır." },
        { question: "Wir essen ___.", options: ["kein", "keine", "nicht", "nichts"], correct: 2, explanation: "Eylemi olumsuz yapmak için 'nicht' kullanılır." },
        { question: "Hast du Hunger? Nein, ___.", options: ["nicht", "keinen Hunger", "kein", "nichts"], correct: 1, explanation: "Hunger (der) olduğu için 'keinen' (Akkusativ) veya isimsiz 'nein' denir. En uygunu 'keinen Hunger'." },
        { question: "Das ist ___ (bir) Blume.", options: ["nicht", "kein", "keine", "nichts"], correct: 2, explanation: "'Blume' (die) olduğu için 'keine' kullanılır." },
        { question: "Sie trinkt ___ Wasser.", options: ["nicht", "kein", "keine", "nichts"], correct: 1, explanation: "Artikelsiz isimlerde 'kein' kullanılır." },
        { question: "Das Buch ist ___ teuer.", options: ["kein", "nicht", "keine", "nichts"], correct: 1, explanation: "Sıfatları olumsuz yaparken 'nicht' kullanılır." }
    ]
};

// ===== UNIT 507: PRÄPOSITIONEN AM, UM, IM (ZAMAN EDATLARI) =====
const unit507Grammar: GermanGrammarUnit = {
    unitId: 507,
    title: "Zaman Edatları (am, um, im)",
    rules: [
        {
            id: "de-prep-time",
            title: "1. Zaman Bildiren Edatlar",
            explanation: "Almancada zaman ifadelerinin önüne belirli edatlar gelir. Hangi zaman diliminden bahsettiğimize göre edat değişir.\n\n**İstisna:** 'gece' ifadesi 'in der Nacht' şeklinde kullanılır.",
            table: {
                headers: ["Edat", "Kullanım Alanı", "Örnek"],
                rows: [
                    ["am", "Günler ve Günün bölümleri", "am Montag, am Morgen"],
                    ["um", "Saatler", "um 8 Uhr"],
                    ["im", "Aylar ve Mevsimler", "im Januar, im Sommer"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Ich komme ___ Montag.", options: ["am", "um", "im", "in"], correct: 0, explanation: "Günler için 'am' kullanılır." },
        { question: "Der Film ist ___ 20 Uhr.", options: ["am", "um", "im", "in"], correct: 1, explanation: "Saatler için 'um' kullanılır." },
        { question: "Wir fahren ___ Sommer.", options: ["am", "um", "im", "in"], correct: 2, explanation: "Mevsimler için 'im' kullanılır." },
        { question: "Mein Geburtstag ist ___ März.", options: ["am", "um", "im", "in"], correct: 2, explanation: "Aylar için 'im' kullanılır." },
        { question: "___ Abend bin ich zu Hause.", options: ["Am", "Um", "Im", "In"], correct: 0, explanation: "Günün bölümleri (istisnalar hariç) 'am' alır." },
        { question: "Es ist ___ Mitternacht.", options: ["am", "um", "im", "in"], correct: 1, explanation: "Gece yarısı (saat bazlı) 'um' ile kullanılır." },
        { question: "___ Vormittag arbeite ich.", options: ["Am", "Um", "Im", "In"], correct: 0, explanation: "Günün bölümleri için 'am' kullanılır." },
        { question: "Das Fest ist ___ Dezember.", options: ["am", "um", "im", "in"], correct: 2, explanation: "Aylar için 'im' kullanılır." },
        { question: "___ Wochenende habe ich frei.", options: ["Am", "Um", "Im", "In"], correct: 0, explanation: "Hafta sonu için 'am' kullanılır." },
        { question: "Der Kurs beginnt ___ 9:00.", options: ["am", "um", "im", "in"], correct: 1, explanation: "Kesin saatler için 'um' kullanılır." }
    ]
};

// ===== UNIT 508: PLURAL (ÇOĞUL YAPMA KURALLARI) =====
const unit508Grammar: GermanGrammarUnit = {
    unitId: 508,
    title: "İsimlerin Çoğul Halleri",
    rules: [
        {
            id: "de-plural-intro",
            title: "1. Çoğul Yapma",
            explanation: "Almancada çoğul yapmanın tek bir kuralı yoktur; isimler farklı ekler alabilir. Ancak tüm çoğul isimlerin belirli artikeli her zaman 'die'dır.",
            table: {
                headers: ["Ek", "Kural/Örnek", "Örnek"],
                rows: [
                    ["-n / -en", "Çoğu feminin isim", "die Frau -> die Frauen"],
                    ["-e", "Birçok maskulin isim", "der Tisch -> die Tische"],
                    ["-er", "Bazı nötr isimler", "das Kind -> die Kinder"],
                    ["-s", "Yabancı kökenli/sessizle biten", "das Auto -> die Autos"],
                    ["(değişmez)", "Bazı -er, -el, -en bitenler", "der Lehrer -> die Lehrer"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Das Kind -> Die ___.", options: ["Kinden", "Kinder", "Kindes", "Kind"], correct: 1, explanation: "Kind çoğulu 'Kinder' olur." },
        { question: "Der Tisch -> Die ___.", options: ["Tisch", "Tischen", "Tische", "Tischs"], correct: 2, explanation: "Tisch çoğulu 'Tische' olur." },
        { question: "Die Frau -> Die ___.", options: ["Fraue", "Frauen", "Fraus", "Frauner"], correct: 1, explanation: "Frau çoğulu 'Frauen' olur." },
        { question: "Das Auto -> Die ___.", options: ["Autoe", "Auton", "Autos", "Autör"], correct: 2, explanation: "Auto çoğulu 'Autos' olur." },
        { question: "Der Lehrer -> Die ___.", options: ["Lehreren", "Lehrer", "Lehrers", "Lehrere"], correct: 1, explanation: "-er ile biten bazı erkek meslek isimleri çoğulda değişmez." },
        { question: "Das Buch -> Die ___.", options: ["Buchen", "Buche", "Bücher", "Buchs"], correct: 2, explanation: "Buch çoğulu 'Bücher' olur." },
        { question: "Die Tasche -> Die ___.", options: ["Taschen", "Tascher", "Tasche", "Taschener"], correct: 0, explanation: "Tasche çoğulu 'Taschen' olur." },
        { question: "Die Lampe -> Die ___.", options: ["Lampen", "Lamper", "Lampe", "Lampes"], correct: 0, explanation: "Lampe çoğulu 'Lampen' olur." },
        { question: "Das Bild -> Die ___.", options: ["Bilden", "Bilder", "Bilde", "Bildes"], correct: 1, explanation: "Bild çoğulu 'Bilder' olur." },
        { question: "Der Name -> Die ___.", options: ["Namenn", "Namen", "Names", "Namens"], correct: 1, explanation: "Name çoğulu 'Namen' olur." }
    ]
};

// ===== UNIT 509: SATZBAU (CÜMLE YAPISI - FİİLİN YERİ) =====
const unit509Grammar: GermanGrammarUnit = {
    unitId: 509,
    title: "Cümle Yapısı ve Fiilin Konumu",
    rules: [
        {
            id: "de-sentence-structure",
            title: "1. Fiilin Yeri (Position 2)",
            explanation: "Almancada düz cümlelerde (Aussagesatz) çekimlenmiş fiil her zaman **ikinci** sırada bulunur. Özne genellikle baştadır, ancak vurgu için başka bir kelime başa gelirse özne fiilin hemen sonuna geçer.",
            table: {
                headers: ["Konum 1", "Konum 2 (Fiil)", "Konum 3 / Diğer"],
                rows: [
                    ["Ich", "lerne", "heute Deutsch."],
                    ["Heute", "lerne", "ich Deutsch."],
                    ["Wir", "wohnen", "in Berlin."]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "'Ich / heute / komme' cümlesinin doğru dizilişi hangisidir?", options: ["Ich heute komme.", "Bugün ich komme.", "Ich komme heute.", "Komme ich heute."], correct: 2, explanation: "Fiil (komme) 2. sırada olmalı." },
        { question: "'Trinken / wir / Kaffee' cümlesini düz cümle yapın.", options: ["Trinken wir Kaffee.", "Wir Kaffee trinken.", "Wir trinken Kaffee.", "Kaffee wir trinken."], correct: 2, explanation: "Özne + Fiil + Nesne." },
        { question: "'Heute' kelimesi başa gelirse 'ich / spielen' nasıl dizilir?", options: ["Heute ich spiele.", "Heute spiele ich.", "Spiele bugün ich.", "Heute spiele."], correct: 1, explanation: "Fiil 2. sıradaki yerini korur, özne 3. sıraya geçer." },
        { question: "Almancada fiil düz cümlede kaçıncı sıradadır?", options: ["1", "2", "3", "Sonda"], correct: 1, explanation: "Fiil her zaman 2. sıradadır." },
        { question: "'In Berlin / wir / wohnen' doğru diziliş hangisidir?", options: ["In Berlin wir wohnen.", "Wir wohnen in Berlin.", "Wohnen wir in Berlin.", "Wir in Berlin wohnen."], correct: 1, explanation: "Wir (1) wohnen (2) in Berlin (3)." },
        { question: "'O / şimdi / uyuyor' (Er / jetzt / schläft) dizilişi nedir?", options: ["Er schläft jetzt.", "Er jetzt schläft.", "Schläft er jetzt?", "Jetzt er schläft."], correct: 0, explanation: "Fiil 2. sırada." },
        { question: "'Opa / bald / kommt' dizilişi?", options: ["Opa kommt bald.", "Bald Opa kommt.", "Kommt Opa bald.", "Opa bald kommt."], correct: 0, explanation: "Opa (1) kommt (2) bald (3)." },
        { question: "Vurgu için 'Bald' (yakında) başa gelirse fiil nerede olur?", options: ["Bald kommt Opa.", "Bald Opa kommt.", "Bald kommer Opa.", "Opa bald kommt."], correct: 0, explanation: "Fiil yerini (pos 2) asla terk etmez." },
        { question: "'Ich / lerne / Deutsch' - Eğer 'Deutsch' başa gelirse?", options: ["Deutsch ich lerne.", "Deutsch lerne ich.", "Deutsch lerne.", "Lerne ich Deutsch."], correct: 1, explanation: "Deutsch (1) lerne (2) ich (3)." },
        { question: "Hangisi hatalı bir cümledir?", options: ["Du bist nett.", "Bist du nett?", "Du nett bist.", "Ich bin Ali."], correct: 2, explanation: "Fiil sonda olamaz (basit cümlelerde)." }
    ]
};

// ===== UNIT 510: FRAGESÄTZE (SORU CÜMLELERİ - W-SORULARI) =====
const unit510Grammar: GermanGrammarUnit = {
    unitId: 510,
    title: "Soru Cümleleri (W-Fragen ve Ja/Nein)",
    rules: [
        {
            id: "de-w-questions",
            title: "1. W-Soruları (W-Fragen)",
            explanation: "Soru kelimesi (Wer, Wie, Wo...) ile başlayan sorulardır. Soru kelimesi 1. sırada, fiil yine 2. sırada yer alır.",
            table: {
                headers: ["Soru Kelimesi", "Türkçe", "Örnek"],
                rows: [
                    ["Wer", "Kim?", "Wer bist du?"],
                    ["Wie", "Nasıl/Ne?", "Wie heißt du?"],
                    ["Wo", "Nerede?", "Wo wohnst du?"],
                    ["Was", "Ne?", "Was machst du?"],
                    ["Wohin", "Nereye?", "Wohin gehst du?"]
                ]
            },
            examples: []
        },
        {
            id: "de-ja-nein-questions",
            title: "2. Evet/Hayır Soruları (Ja/Nein Fragen)",
            explanation: "Fiilin en başa (1. sıra) geldiği sorulardır. Cevap genellikle 'Ja' veya 'Nein' ile başlar.",
            examples: [
                { de: "Kommst du aus Berlin?", tr: "Berlin'den mi geliyorsun?" },
                { de: "Bist du müde?", tr: "Yorgun musun?" }
            ]
        }
    ],
    exercises: [
        { question: "___ wohnst du? (In Berlin)", options: ["Wer", "Wie", "Wo", "Was"], correct: 2, explanation: "Yer sormak için 'Wo' (Nerede) kullanılır." },
        { question: "___ heißt du? (Max)", options: ["Wer", "Wie", "Wo", "Was"], correct: 1, explanation: "İsim sormak için 'Wie' kalıbı kullanılır." },
        { question: "___ ist das? (Das ist ein Buch)", options: ["Wer", "Was", "Wo", "Wie"], correct: 1, explanation: "Cansız nesneler için 'Was' (Ne) kullanılır." },
        { question: "___ bist du? (Ich bin 20)", options: ["Wer", "Wie alt", "Wo", "Was"], correct: 1, explanation: "Yaş sormak için 'Wie alt' kullanılır." },
        { question: "___ gehst du? (Nach Hause)", options: ["Wo", "Wohin", "Wer", "Wie"], correct: 1, explanation: "Yön/hedef sormak için 'Wohin' kullanılır." },
        { question: "___ du Zeit?", options: ["Habe", "Hast", "Hat", "Haben"], correct: 1, explanation: "Soru cümlesinde fiil (hast) başa gelir." },
        { question: "___ du Deutsch?", options: ["Lerne", "Lernst", "Lernt", "Lernen"], correct: 1, explanation: "Fiil başa gelir, özneye göre çekimlenir." },
        { question: "___ ist senin baban?", options: ["Wer", "Was", "Wo", "Wie"], correct: 0, explanation: "Kişileri sormak için 'Wer' (Kim) kullanılır." },
        { question: "___ kommst du? (Aus der Türkei)", options: ["Wo", "Wohin", "Woher", "Wie"], correct: 2, explanation: "Köken (nereden) sormak için 'Woher' kullanılır." },
        { question: "Evet/Hayır sorusu yapın: 'Du bist Ali.'", options: ["Wer bist du?", "Bist du Ali?", "Du bist Ali?", "Ali bist du?"], correct: 1, explanation: "Fiil başa gelerek soru oluşturulur." }
    ]
};

// ===== UNIT 511: KÖRPER & SCHMERZEN (VÜCUT VE AĞRILAR) =====
const unit511Grammar: GermanGrammarUnit = {
    unitId: 511,
    title: "Vücut Bölümleri ve Ağrıları İfade Etme",
    rules: [
        {
            id: "de-body-parts",
            title: "1. Vücut Bölümleri (Körperteile)",
            explanation: "Vücut bölümlerini öğrenirken artikellerine çok dikkat etmelisiniz. Çoğul kullanımları da sıklıkla ağrı tariflerinde kullanılır.",
            table: {
                headers: ["Almanca", "Türkçe", "Çoğul"],
                rows: [
                    ["der Kopf", "Baş", "die Köpfe"],
                    ["der Arm", "Kol", "die Arme"],
                    ["die Hand", "El", "die Hände"],
                    ["das Bein", "Bacak", "die Beine"],
                    ["der Fuß", "Ayak", "die Füße"]
                ]
            },
            examples: []
        },
        {
            id: "de-pain",
            title: "2. Ağrı İfade Etme (Schmerzen)",
            explanation: "Ağrılar için genellikle 'weh tun' (ağrımak) fiili veya 'Schmerzen haben' (ağrısı olmak) yapısı kullanılır.",
            examples: [
                { de: "Mein Kopf tut weh.", tr: "Başım ağrıyor." },
                { de: "Ich habe Halsschmerzen.", tr: "Boğaz ağrım var." }
            ]
        }
    ],
    exercises: [
        { question: "___ (Başım) tut weh.", options: ["Mein Kopf", "Meine Kopf", "Meinen Kopf", "Mein Hand"], correct: 0, explanation: "'Kopf' der artikeli olduğu için 'mein' kullanılır." },
        { question: "Ich habe ___ (karın ağrısı).", options: ["Kopfschmerzen", "Bauchschmerzen", "Zahnschmerzen", "Halsschmerzen"], correct: 1, explanation: "Bauch = Karın." },
        { question: "Meine ___ (ayaklarım) tun weh.", options: ["Fuß", "Füße", "Hand", "Hände"], correct: 1, explanation: "Çoğul olduğu için 'tun' fiili gelir; ayaklar 'Füße'dir." },
        { question: "Was ___ dir weh?", options: ["tut", "tun", "hat", "hast"], correct: 0, explanation: "Tekil bir yerin ağrıyıp ağrımadığını sorarken 'tut weh' kullanılır." },
        { question: "Die ___ (diş ağrısı) sind schlimm.", options: ["Kopfschmerzen", "Zahnschmerzen", "Halsschmerzen", "Beinschmerzen"], correct: 1, explanation: "Zahn = Diş." },
        { question: "Er hat ___ (sırt ağrısı).", options: ["Rückenschmerzen", "Kopfschmerzen", "Halsschmerzen", "Bauchschmerzen"], correct: 0, explanation: "Rücken = Sırt." },
        { question: "Mein ___ (kolum) ist gebrochen.", options: ["Bein", "Arm", "Hand", "Fuß"], correct: 1, explanation: "Arm = Kol." },
        { question: "Özne çoğulsa (örn. bacaklar) 'weh tun' nasıl çekimlenir?", options: ["tut weh", "tun weh", "tust weh", "tat weh"], correct: 1, explanation: "Çoğul şahıslar/nesneler için 'tun' kullanılır." },
        { question: "'Boğazım ağrıyor' cümlesinin Almancası nedir?", options: ["Mein Hals tut weh.", "Ich habe Halsschmerzen.", "Her ikisi de", "Hiçbiri"], correct: 2, explanation: "Almancada her iki yapı da boğaz ağrısını ifade etmek için kullanılır." },
        { question: "Hast du ___ (diş) schmerzen?", options: ["Zahn", "Kopf", "Bauch", "Hals"], correct: 0, explanation: "Zahnschmerzen = Diş ağrısı." }
    ]
};

// ===== UNIT 512: ADJEKTIVE GEGENTEILE (ZIT SIFATLAR) =====
const unit512Grammar: GermanGrammarUnit = {
    unitId: 512,
    title: "Sıfatlar: Zıt Anlamlılar ve Derecelendirme",
    rules: [
        {
            id: "de-adj-rev",
            title: "1. Temel Sıfat Çiftleri",
            explanation: "Nesneleri ve kişileri tarif ederken kullanılan zıt anlamlı sıfatlar.",
            table: {
                headers: ["Sıfat", "Zıttı", "Türkçeleri"],
                rows: [
                    ["stark", "schwach", "güçlü - zayıf"],
                    ["fleißig", "faul", "çalışkan - tembel"],
                    ["reich", "arm", "zengin - fakir"],
                    ["sauber", "schmutzig", "temiz - kirli"],
                    ["breit", "schmal", "geniş - dar"]
                ]
            },
            examples: []
        },
        {
            id: "de-sehr-zu",
            title: "2. Çok ve Fazla (Sehr & Zu)",
            explanation: "'Sehr' olumlu/nötr bir çokluk bildirirken, 'zu' aşırılık ve genellikle olumsuzluk bildirir.",
            examples: [
                { de: "Das Wetter ist sehr schön.", tr: "Hava çok güzel." },
                { de: "Der Kaffee ist zu heiß.", tr: "Kahve (içilemeyecek kadar) fazla sıcak." }
            ]
        }
    ],
    exercises: [
        { question: "Er ist nicht faul, er ist ___ (çalışkan).", options: ["stark", "fleißig", "arm", "sauber"], correct: 1, explanation: "Faul (tembel) zıttı fleißig (çalışkan)." },
        { question: "Das Zimmer ist ___ (kirli).", options: ["sauber", "schmutzig", "breit", "schmal"], correct: 1, explanation: "Schmutzig = Kirli." },
        { question: "Sie ist ___ (zengin).", options: ["arm", "reich", "stark", "schwach"], correct: 1, explanation: "Reich = Zengin." },
        { question: "Der Weg ist ___ (dar).", options: ["breit", "schmal", "sauber", "fleißig"], correct: 1, explanation: "Schmal = Dar." },
        { question: "Der Mann ist ___ (güçlü).", options: ["stark", "schwach", "faul", "arm"], correct: 0, explanation: "Stark = Güçlü." },
        { question: "Aşırılık (fazla/çok fazla) bildiren kelime hangisidir?", options: ["sehr", "zu", "viel", "gern"], correct: 1, explanation: "Zu, sıfattan önce gelerek aşırılık bildirir." },
        { question: "Das Auto ist ___ (çok) teuer.", options: ["sehr", "zu", "bil", "gern"], correct: 0, explanation: "Nötr bir 'çok' ifadesi için 'sehr' kullanılır." },
        { question: "Gegenteil von 'arm'?", options: ["reich", "schwach", "faul", "sauber"], correct: 0, explanation: "Fakir (arm) zıttı zengin (reich)." },
        { question: "Gegenteil von 'sauber'?", options: ["schmutzig", "schwach", "faul", "arm"], correct: 0, explanation: "Temiz (sauber) zıttı kirli (schmutzig)." },
        { question: "Der Tee ist ___, ich kann ihn nicht trinken.", options: ["sehr heiß", "zu heiß", "heiß değil", "kalt"], correct: 1, explanation: "İçilemeyecek kadar sıcak olduğu için 'zu' (fazla) kullanılır." }
    ]
};

// ===== UNIT 513: MODALVERBEN: KÖNNEN & MÜSSEN (YAPABİLMEK VE ZORUNLULUK) =====
const unit513Grammar: GermanGrammarUnit = {
    unitId: 513,
    title: "Tarz Fiiller: Können ve Müssen",
    rules: [
        {
            id: "de-modal-intro",
            title: "1. Modal Fiillerin Yapısı",
            explanation: "Modal fiiller cümlede 2. sırada çekimlenmiş olarak bulunur. Asıl eylem ise cümlenin en sonunda mastar (ek almamış) halde yer alır.",
            table: {
                headers: ["Zamir", "Können (-ebilmek)", "Müssen (-meli/zorunlu)"],
                rows: [
                    ["Ich", "kann", "muss"],
                    ["Du", "kannst", "musst"],
                    ["Er / Sie / Es", "kann", "muss"],
                    ["Wir", "können", "müssen"],
                    ["Ihr", "könnt", "müsst"],
                    ["Sie / sie", "können", "müssen"]
                ]
            },
            examples: [
                { de: "Ich kann Deutsch sprechen.", tr: "Almanca konuşabiliyorum." },
                { de: "Du musst heute arbeiten.", tr: "Bugün çalışmalısın (zorunlusun)." }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ (yapabilirim) gut kochen.", options: ["kann", "kannst", "können", "könnt"], correct: 0, explanation: "Ich ile 'kann' kullanılır." },
        { question: "Wir ___ (zorundayız) şimdi gehen.", options: ["muss", "musst", "müssen", "müsst"], correct: 2, explanation: "Wir ile 'müssen' kullanılır." },
        { question: "Er ___ (yapabilir) Gitarre spielen.", options: ["kann", "kannst", "können", "könnt"], correct: 0, explanation: "O (er) ile 'kann' kullanılır." },
        { question: "___ (zorunda mısın) du lernen?", options: ["Muss", "Musst", "Müssen", "Müsst"], correct: 1, explanation: "Du ile 'musst' kullanılır." },
        { question: "Ihr ___ (yapabilirsiniz) burada parken.", options: ["kann", "kannst", "könnt", "können"], correct: 2, explanation: "Ihr ile 'könnt' kullanılır." },
        { question: "Modal fiil olan cümlede ana fiil nerede olur?", options: ["2. sırada", "Özneden önce", "Cümlenin sonunda", "Başta"], correct: 2, explanation: "Ana fiil mastar halde cümlenin en sonundadır." },
        { question: "Ich kann ___ (yüzmek).", options: ["schwimme", "schwimmst", "schwimmen", "schwimmt"], correct: 2, explanation: "Sonda fiil ek almadan (mastar) kullanılır." },
        { question: "Du musst ___ (öğrenmek).", options: ["lernen", "lernst", "lerne", "gelernt"], correct: 0, explanation: "Mastarı 'lernen'dir." },
        { question: "Sie (onlar) ___ (yapabilirler) Deutsch.", options: ["kann", "kannst", "können", "könnt"], correct: 2, explanation: "Onlar (sie) için 'können' kullanılır." },
        { question: "Können fiilinin 'Er/Sie/Es' çekimi nedir?", options: ["kann", "kannst", "können", "könnt"], correct: 0, explanation: "Almancada modal fiillerin 1. ve 3. tekil şahıs çekimleri aynıdır (Ich/Er kann)." }
    ]
};

// ===== UNIT 514: BERUFE (MESLEKLER) =====
const unit514Grammar: GermanGrammarUnit = {
    unitId: 514,
    title: "Meslekler ve Çalışma Hayatı",
    rules: [
        {
            id: "de-jobs",
            title: "1. Meslek İsimleri ve Cinsiyet",
            explanation: "Almancada meslek isimleri genellikle cinsiyete göre değişir. Kadın meslek sahipleri için ismin sonuna genellikle '-in' takısı eklenir.",
            table: {
                headers: ["Erkek", "Kadın", "Türkçesi"],
                rows: [
                    ["der Lehrer", "die Lehrerin", "Öğretmen"],
                    ["der Arzt", "die Ärztin", "Doktor"],
                    ["der Student", "die Studentin", "Öğrenci"],
                    ["der Kellner", "die Kellnerin", "Garson"],
                    ["der Koch", "die Köchin", "Aşçı"]
                ]
            },
            examples: []
        },
        {
            id: "de-job-prep",
            title: "2. Meslek Söylerken Kullanım",
            explanation: "Meslek söylerken 'bir' (ein/eine) artikeli genellikle kullanılmaz. Fiil olarak 'sein' veya 'arbeiten als' kullanılır.",
            examples: [
                { de: "Ich bin Arzt.", tr: "Ben doktorum." },
                { de: "Ich arbeite als Verkäufer.", tr: "Satıcı olarak çalışıyorum." }
            ]
        }
    ],
    exercises: [
        { question: "Ich bin ___ (öğretmen - kadın).", options: ["Lehrer", "Lehrerin", "Arzt", "Ärztin"], correct: 1, explanation: "Kadın öğretmen 'Lehrerin'dir." },
        { question: "Er arbeitet ___ Verkäufer.", options: ["als", "wie", "für", "bei"], correct: 0, explanation: "Bir mesleği icra ederken 'als' edatı kullanılır." },
        { question: "Der ___ (doktor - erkek) ist nett.", options: ["Arzt", "Ärztin", "Lehrer", "Lehrerin"], correct: 0, explanation: "Erkek doktor 'Arzt'dır." },
        { question: "Was bist du von ___?", options: ["Arbeit", "Job", "Beruf", "Hobby"], correct: 2, explanation: "'Mesleğin ne?' sorusu 'Was bist du von Beruf?' şeklinde sorulur." },
        { question: "Die ___ (garson - kadın) bringt das Essen.", options: ["Kellner", "Kellnerin", "Koch", "Köchin"], correct: 1, explanation: "Kellnerin = Kadın garson." },
        { question: "Meslek söylerken hangisi doğrudur?", options: ["Ich bin ein Arzt.", "Ich bin Arzt.", "Ich habe Arzt.", "Ich Arzt."], correct: 1, explanation: "Mesleklerde genellikle artikel (bir) kullanılmaz." },
        { question: "Kadın aşçı hangisidir?", options: ["Koch", "Köchin", "Kochen", "Koche"], correct: 1, explanation: "Koch -> Köchin." },
        { question: "Kadın öğrenci hangisidir?", options: ["Student", "Studentin", "Studium", "Studieren"], correct: 1, explanation: "Student -> Studentin." },
        { question: "Er ist ___ (mühendis).", options: ["Lehrer", "Ingenieur", "Arzt", "Kellner"], correct: 1, explanation: "Ingenieur = Mühendis." },
        { question: "Sie ist ___ (hemşire).", options: ["Krankenschwester", "Ärztin", "Lehrerin", "Kellnerin"], correct: 0, explanation: "Krankenschwester = Hemşire." }
    ]
};

// ===== UNIT 515: PRÄPOSITIONEN: ZU & NACH (YÖNELME EDATLARI) =====
const unit515Grammar: GermanGrammarUnit = {
    unitId: 515,
    title: "Yönelme Edatları: Zu ve Nach",
    rules: [
        {
            id: "de-prep-direction",
            title: "1. Nach ve Zu Kullanımı",
            explanation: "'Nach' genellikle şehirler, ülkeler (artikelsiz olanlar) ve 'ev' kelimesiyle (nach Hause) kullanılır. 'Zu' ise kişilere veya belirli binalara yönelirken kullanılır.",
            table: {
                headers: ["Edat", "Kullanım Yeri", "Örnek"],
                rows: [
                    ["nach", "Şehirler/Ülkeler", "nach Berlin, nach Deutschland"],
                    ["nach", "Ev (yön)", "nach Hause"],
                    ["zu", "Kişiler/Binalar", "zu Max, zur Schule (zu+der)"],
                    ["zu", "Ev (orada)", "zu Hause (Dikkat: Bu 'evde' demektir)"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Ich gehe ___ Hause (Eve gidiyorum).", options: ["nach", "zu", "in", "an"], correct: 0, explanation: "Eve gitmek 'nach Hause'dır." },
        { question: "Ich bin ___ Hause (Evdeyim).", options: ["nach", "zu", "in", "an"], correct: 1, explanation: "Evde olmak 'zu Hause'dır." },
        { question: "Wir fahren ___ Berlin.", options: ["nach", "zu", "in", "an"], correct: 0, explanation: "Şehirlere yönelirken 'nach' kullanılır." },
        { question: "Ich gehe ___ (doktora).", options: ["nach Arzt", "zum Arzt", "zu Arzt", "in Arzt"], correct: 1, explanation: "Kişiye yönelirken 'zu' + Dativ kullanılır. (zu+dem = zum)" },
        { question: "Er kommt ___ mir.", options: ["nach", "zu", "in", "von"], correct: 1, explanation: "Şahıs zamirlerine (bana) yönelirken 'zu' kullanılır." },
        { question: "Fahrt ihr ___ Italien?", options: ["nach", "zu", "in", "an"], correct: 0, explanation: "Ülkelere (artikelsiz) yönelirken 'nach' kullanılır." },
        { question: "Ich muss ___ (okula) gehen.", options: ["nach Schule", "zur Schule", "zu Schule", "in Schule"], correct: 1, explanation: "Okula yönelirken 'zu+der = zur' kullanılır." },
        { question: "Kommst du ___ (bize)?", options: ["nach uns", "zu uns", "in uns", "bei uns"], correct: 1, explanation: "Bize gelmek 'zu uns'dır." },
        { question: "Gehen wir ___ (arkadaşıma)?", options: ["nach mein Freund", "zu meinem Freund", "in mein Freund", "an mein Freund"], correct: 1, explanation: "Kişiye yönelirken 'zu' + Dativ kullanılır." },
        { question: "Ich gehe ___ (parka).", options: ["nach Park", "zum Park", "zu Park", "in Park"], correct: 1, explanation: "Belirli bir mekana yönelirken 'zu' kullanılabilir." }
    ]
};

// ===== UNIT 516: VERKEHRSMITTEL & MIT (ULAŞIM VE MİT EDATI) =====
const unit516Grammar: GermanGrammarUnit = {
    unitId: 516,
    title: "Ulaşım Araçları ve 'mit' Edatı",
    rules: [
        {
            id: "de-transport-mit",
            title: "1. Mit Edatı ve Dativ",
            explanation: "'mit' edatı her zaman 'Dativ' (ismin -e hali) gerektirir. Bir araçla gitmekten bahsederken kullanılır.",
            table: {
                headers: ["Araç", "Mit + Artikel (Dativ)", "Türkçesi"],
                rows: [
                    ["der Bus", "mit dem Bus", "Otobüsle"],
                    ["der Zug", "mit dem Zug", "Trenle"],
                    ["das Auto", "mit dem Auto", "Arabayla"],
                    ["die U-Bahn", "mit der U-Bahn", "Metroyla"],
                    ["das Fahrrad", "mit dem Fahrrad", "Bisikletle"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Ich fahre ___ dem Bus.", options: ["mit", "bei", "zu", "nach"], correct: 0, explanation: "Araçla gitmek 'mit' ile söylenir." },
        { question: "Wir fliegen ___ (uçakla).", options: ["mit das Flugzeug", "mit dem Flugzeug", "mit Flugzeug", "mit den Flugzeug"], correct: 1, explanation: "'mit' Dativ ister; das -> dem olur." },
        { question: "Kommst du ___ (arabayla)?", options: ["mit dem Auto", "mit das Auto", "mit Auto", "mit der Auto"], correct: 0, explanation: "'Auto' das olduğu için 'dem' olur." },
        { question: "Sie fährt ___ (metroyla).", options: ["mit der U-Bahn", "mit die U-Bahn", "mit dem U-Bahn", "mit U-Bahn"], correct: 0, explanation: "'U-Bahn' die olduğu için Dativ halde 'der' olur." },
        { question: "Ich gehe ___ (yürüyerek / yaya).", options: ["mit den Füßen", "mit dem Fuß", "zu Fuß", "nach Fuß"], correct: 2, explanation: "Yürüyerek gitmek istisnai olarak 'zu Fuß' şeklinde söylenir." },
        { question: "Fährst du mit ___ (bisiklet)?", options: ["das Fahrrad", "dem Fahrrad", "der Fahrrad", "den Fahrrad"], correct: 1, explanation: "Das Fahrrad -> dem Fahrrad." },
        { question: "Wir reisen mit ___ (tren).", options: ["der Zug", "dem Zug", "das Zug", "den Zug"], correct: 1, explanation: "Der Zug -> dem Zug." },
        { question: "Reist ihr mit ___ (gemi)?", options: ["dem Schiff", "das Schiff", "der Schiff", "den Schiff"], correct: 0, explanation: "Das Schiff -> dem Schiff." },
        { question: "Ich fahre ile ___ (motosiklet).", options: ["dem Motorrad", "das Motorrad", "der Motorrad", "den Motorrad"], correct: 0, explanation: "Das Motorrad -> dem Motorrad." },
        { question: "'Otobüsle' ifadesindeki 'mit'den sonra artikel ne olur? (der Bus)", options: ["der", "die", "das", "dem"], correct: 3, explanation: "Der artikel Dativ'de dem olur." }
    ]
};

// ===== UNIT 517: TRENNBARE VERBEN (AYRILAN FİİLLER) =====
const unit517Grammar: GermanGrammarUnit = {
    unitId: 517,
    title: "Ayrılan Fiiller (Trennbare Verben)",
    rules: [
        {
            id: "de-separable-verbs",
            title: "1. Ayrılan Fiillerin Yapısı",
            explanation: "Bazı Almanca fiillerin başında bir ek (önek) bulunur. Cümle kurulurken bu önek fiilden ayrılır ve cümlenin en sonuna gider. Fiilin kökü ise özneye göre çekimlenerek 2. sırada yer alır.",
            examples: [
                { de: "anrufen (aramak) -> Ich rufe dich an.", tr: "Seni arıyorum." },
                { de: "aufstehen (kalkmak) -> Er steht um 7 Uhr auf.", tr: "O saat 7'de kalkar." }
            ]
        },
        {
            id: "de-sep-prefixes",
            title: "2. Sık Kullanılan Önekler",
            explanation: "an-, auf-, aus-, mit-, fern-, einkaufen gibi önekler ayrılabilir öneklerdir.",
            table: {
                headers: ["Fiil", "Anlamı", "Örnek"],
                rows: [
                    ["fernsehen", "TV izlemek", "Ich sehe fern."],
                    ["einkaufen", "Alışveriş yapmak", "Sie kauft ein."],
                    ["mitkommen", "Birlikte gelmek", "Kommst du mit?"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Ich ___ (kalkıyorum) um 8 Uhr ___.", options: ["stehe / auf", "kalk- / -ıyorum", "auf / stehe", "steht / auf"], correct: 0, explanation: "Aufstehen fiili ayrılır; stehe (pos 2), auf (sonda)." },
        { question: "___ du mich ___ (arar mısın)?", options: ["Rufst / an", "An / rufst", "Ruft / an", "An / ruft"], correct: 0, explanation: "Anrufen -> Rufst... an." },
        { question: "Wir ___ (alışveriş yapıyoruz) am Samstag ___.", options: ["kaufen / ein", "einkaufen / -", "gehe / einkaufen", "ein / kaufen"], correct: 0, explanation: "Einkaufen -> Kaufen... ein." },
        { question: "Er ___ (televizyon izliyor) am Abend ___.", options: ["sieht / fern", "sieht / ab", "fern / sieht", "sieht / auf"], correct: 0, explanation: "Fernsehen -> Sieht... fern." },
        { question: "Kommt ihr ___ (birlikte gelir misiniz)?", options: ["mit", "an", "auf", "aus"], correct: 0, explanation: "Birlikte gelmek 'mitkommen'dır." },
        { question: "Ayrılan fiillerin öneki düz cümlede nerede olur?", options: ["Başta", "Fiilin yanında", "Cümlenin sonunda", "Özneden sonra"], correct: 2, explanation: "Önek her zaman cümlenin en sonuna gider." },
        { question: "Ich ___ (temizliyorum) das Zimmer ___.", options: ["räume / auf", "machen / sauber", "sehe / fern", "rufe / an"], correct: 0, explanation: "Aufräumen (toplamak/temizlemek) -> Räume... auf." },
        { question: "Wann ___ der Zug ___ (kalkıyor)?", options: ["fährt / ab", "ab / fährt", "geht / nach", "kommt / an"], correct: 0, explanation: "Abfahren (hareket etmek) -> Fährt... ab." },
        { question: "Der Film ___ (başlıyor) um 20 Uhr ___.", options: ["fängt / an", "an / fängt", "beginnt / -", "Her ikisi de"], correct: 0, explanation: "Anfangen ayrılan bir fiildir. (Beginnen ayrılmaz)" },
        { question: "Mach das Licht ___ (kapat)!", options: ["an", "aus", "auf", "zu"], correct: 1, explanation: "Ausmachen = Kapatmak." }
    ]
};

// ===== UNIT 518: UHRZEIT (SAATLER) =====
const unit518Grammar: GermanGrammarUnit = {
    unitId: 518,
    title: "Saat Söyleme ve Zaman İfadeleri",
    rules: [
        {
            id: "de-time-telling",
            title: "1. Saat Kaç? (Wie spät ist es?)",
            explanation: "Almancada saatler iki şekilde söylenir: Resmi (24 saat üzerinden) ve Günlük (12 saat üzerinden).",
            table: {
                headers: ["Saat Yapısı", "Almanca", "Türkçe"],
                rows: [
                    ["8:00", "acht Uhr", "Saat sekiz"],
                    ["8:15", "Viertel nach acht", "Sekizi çeyrek geçiyor"],
                    ["8:30", "halb neun", "Sekiz buçuk (Dikkat: Dokuz yarımı denir)"],
                    ["8:45", "Viertel vor neun", "Dokuza çeyrek var"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Wie ___ ist es?", options: ["spät", "alt", "viel", "lange"], correct: 0, explanation: "'Saat kaç?' sorusu 'Wie spät ist es?'dir." },
        { question: "Es ist halb zehn. Saat kaçtır?", options: ["10:30", "9:30", "11:30", "10:15"], correct: 1, explanation: "Almancada 'halb' bir sonraki saati hedef alır; halb zehn = 9:30." },
        { question: "8:15 günlük dilde nasıl söylenir?", options: ["acht Uhr fünfzehn", "Viertel nach acht", "Viertel vor acht", "acht nach Viertel"], correct: 1, explanation: "Viertel nach acht = Sekizi çeyrek geçiyor." },
        { question: "Es ist ___ (12:00 tam).", options: ["zwölf Uhr", "zwölf halb", "zwölf nach", "Viertel vor zwölf"], correct: 0, explanation: "Tam saatlerde 'Uhr' kullanılır." },
        { question: "7:45 günlük dilde hangisidir?", options: ["Viertel nach sieben", "Viertel vor acht", "halb acht", "sieben Uhr"], correct: 1, explanation: "Dokuza (bir sonraki saate) çeyrek var; Viertel vor acht." },
        { question: "14:00 resmi dilde nasıl söylenir?", options: ["zwei Uhr", "vierzehn Uhr", "halb drei", "Viertel zwei"], correct: 1, explanation: "Resmi saatlerde olduğu gibi sayı (14) söylenir." },
        { question: "15:30 saat kaçtır?", options: ["halb drei", "halb vier", "Viertel nach drei", "drei Uhr"], correct: 1, explanation: "Üç buçuk = halb vier." },
        { question: "Es ist beş ___ (geçiyor) iki.", options: ["vor", "nach", "halb", "an"], correct: 1, explanation: "Geçiyor = nach." },
        { question: "Es ist on ___ (kala/var) dört.", options: ["vor", "nach", "halb", "an"], correct: 0, explanation: "Kala/Var = vor." },
        { question: "Saat sormak için diğer alternatif hangisidir?", options: ["Wie viel Uhr ist es?", "Was ist Uhr?", "Wo ist Uhr?", "Wie spät Uhr?"], correct: 0, explanation: "Wie viel Uhr ist es? de saat sormak için kullanılır." }
    ]
};

// ===== UNIT 519: WETTER (HAVA DURUMU) =====
const unit519Grammar: GermanGrammarUnit = {
    unitId: 519,
    title: "Hava Durumu ve Doğa",
    rules: [
        {
            id: "de-weather-intro",
            title: "1. Hava Nasıl? (Wie ist das Wetter?)",
            explanation: "Hava durumundan bahsederken özne olarak 'es' kullanılır. Genellikle 'es ist...' yapısı veya özel fiiller (yağmak, kar yağmak) kullanılır.",
            table: {
                headers: ["Yapı", "Almanca", "Türkçe"],
                rows: [
                    ["es ist + sıfat", "es ist sonnig", "Güneşli"],
                    ["fiil", "es regnet", "Yağmur yağıyor"],
                    ["fiil", "es schneit", "Kar yağıyor"],
                    ["es ist + sıfat", "es ist windig", "Rüzgarlı"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Wie ___ das Wetter?", options: ["ist", "bist", "sind", "macht"], correct: 0, explanation: "Soru cümlesi: Wie ist das Wetter?" },
        { question: "Es ___ (yağmur yağıyor).", options: ["schneit", "regnet", "sonnig", "windig"], correct: 1, explanation: "Regnen = Yağmur yağması." },
        { question: "Es ist ___ (güneşli).", options: ["schneit", "regnet", "sonnig", "kalt"], correct: 2, explanation: "Sonnig = Güneşli." },
        { question: "Es ist ___ (soğuk).", options: ["heiß", "kalt", "warm", "schön"], correct: 1, explanation: "Kalt = Soğuk." },
        { question: "Die ___ (güneş) scheint.", options: ["Sonne", "Mond", "Wolke", "Regen"], correct: 0, explanation: "Sonne = Güneş." },
        { question: "Es ___ (kar yağıyor).", options: ["regnet", "schneit", "sonnig", "windig"], correct: 1, explanation: "Schneien = Kar yağması." },
        { question: "Es ist ___ (bulutlu).", options: ["sonnig", "bewölkt", "warm", "kalt"], correct: 1, explanation: "Bewölkt = Bulutlu." },
        { question: "İst es heute ___ (sıcak)?", options: ["kalt", "warm", "windig", "regnet"], correct: 1, explanation: "Warm/Heiß = Sıcak." },
        { question: "Es ist çok ___ (rüzgarlı).", options: ["windig", "sonnig", "schnee", "regen"], correct: 0, explanation: "Windig = Rüzgarlı." },
        { question: "Wie viel Grad sind es? Ne soruluyor?", options: ["Hava nasıl?", "Sıcaklık kaç derece?", "Saat kaç?", "Hava yağmurlu mu?"], correct: 1, explanation: "Grad = Derece." }
    ]
};

// ===== UNIT 520: FREIZEIT & GERN (BOŞ ZAMAN VE SEVMEK-GERN) =====
const unit520Grammar: GermanGrammarUnit = {
    unitId: 520,
    title: "Boş Zaman Aktiviteleri ve 'gern' Kullanımı",
    rules: [
        {
            id: "de-gern",
            title: "1. Sevmek (gern)",
            explanation: "Almancada bir eylemi yapmayı sevdiğimizi belirtmek için o fiilden sonra 'gern' kelimesini ekleriz. 'Gern' fiil değildir, bir zarftır.",
            examples: [
                { de: "Ich spiele gern Fußball.", tr: "Futbol oynamayı severim." },
                { de: "Trinkst du gern Kaffee?", tr: "Kahve içmeyi sever misin?" }
            ]
        },
        {
            id: "de-leisure",
            title: "2. Boş Zaman Fiilleri",
            explanation: "Sık kullanılan hobi fiilleri.",
            table: {
                headers: ["Almanca", "Türkçe"],
                rows: [
                    ["lesen", "okumak"],
                    ["schwimmen", "yüzmek"],
                    ["tanzen", "dans etmek"],
                    ["wandern", "doğa yürüyüşü"],
                    ["reisen", "seyahat etmek"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Ich lese ___ (Severek okurum).", options: ["gut", "gern", "viel", "sehr"], correct: 1, explanation: "Bir eylemi sevmeyi 'gern' ifade eder." },
        { question: "Was ___ du in deiner Freizeit?", options: ["mache", "machst", "machen", "macht"], correct: 1, explanation: "Soru: Boş zamanında ne yaparsın? (Du ile machst)" },
        { question: "___ du gern Musik?", options: ["Höre", "Hörst", "Hört", "Hören"], correct: 1, explanation: "Müzik dinlemek = hören." },
        { question: "Ich ___ (yüzerim) gern.", options: ["schwimme", "schwimmst", "schwimmen", "schwimmt"], correct: 0, explanation: "Ich schwimme." },
        { question: "Wir tanzen ___ (severek).", options: ["gern", "gut", "hızlı", "yavaş"], correct: 0, explanation: "Gern = Severek/Hoşlanarak." },
        { question: "Mein Hobby ___ (okumaktır).", options: ["ist", "sind", "bin", "bist"], correct: 0, explanation: "Özne 'mein Hobby' tekildir." },
        { question: "Meine Hobbys ___ (okumak ve yüzmektir).", options: ["ist", "sind", "bin", "bist"], correct: 1, explanation: "Özne 'meine Hobbys' çoğuldur." },
        { question: "Ich spiele ile ___ (tenis).", options: ["Klavier", "Tennis", "Buch", "Wasser"], correct: 1, explanation: "Tennis spielen." },
        { question: "Kommst du ___ ins Kino? (Birlikte gelir misin?)", options: ["mit", "aus", "nach", "zu"], correct: 0, explanation: "Mitkommen = Birlikte gelmek." },
        { question: "En sevdiğin hobiyi nasıl sorarsın?", options: ["Hobby ne?", "Was ist dein Hobby?", "Hast du Hobby?", "Wie Hobby?"], correct: 1, explanation: "Was ist dein Hobby? standart sorudur." }
    ]
};

// ===== UNIT 521: MODALVERBEN 2: WOLLEN & MÖCHTEN (İSTEMEK) =====
const unit521Grammar: GermanGrammarUnit = {
    unitId: 521,
    title: "Modal Fiiller 2: Wollen ve Möchten",
    rules: [
        {
            id: "de-wollen-moechten",
            title: "1. Wollen vs. Möchten",
            explanation: "'Wollen' güçlü bir isteği, niyeti belirtir (İstiyorum!). 'Möchten' ise daha nazik bir isteği, rica bildirir (-mek isterim).",
            table: {
                headers: ["Zamir", "Wollen", "Möchten"],
                rows: [
                    ["Ich", "will", "möchte"],
                    ["Du", "willst", "möchtest"],
                    ["Er / Sie / Es", "will", "möchte"],
                    ["Wir", "wollen", "möchten"],
                    ["Ihr", "wollt", "möchtet"],
                    ["Sie / sie", "wollen", "möchten"]
                ]
            },
            examples: [
                { de: "Ich will Arzt werden.", tr: "Doktor olmak istiyorum. (Eril)" },
                { de: "Ich möchte einen Kaffee trinken.", tr: "Bir kahve içmek isterim. (Nazik rica)" }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ (istiyorum) ein Eis essen.", options: ["will", "willst", "wollen", "wollt"], correct: 0, explanation: "Ich ile 'will' kullanılır." },
        { question: "___ (İster misiniz) Sie etwas trinken?", options: ["Wollen", "Möchten", "Will", "Möchte"], correct: 1, explanation: "Nazik sorularda 'möchten' tercih edilir." },
        { question: "Er ___ (istiyor) nach Berlin fahren.", options: ["will", "willst", "wollen", "möchte"], correct: 0, explanation: "Er ile 'will' kullanılır." },
        { question: "Wir ___ (isteriz) euch helfen.", options: ["wollen", "möchten", "wollt", "möchtet"], correct: 1, explanation: "Biz isteriz: 'möchten'." },
        { question: "___ (İstiyor musun) du mitkommen?", options: ["Willst", "Will", "Wollst", "Möchtest"], correct: 0, explanation: "Du ile 'willst' kullanılır." },
        { question: "Ihr ___ (istiyorsunuz) spielen.", options: ["wollt", "will", "wollen", "möchtet"], correct: 0, explanation: "Ihr ile 'wollt' kullanılır." },
        { question: "Sie (onlar) ___ (istiyorlar) schlafen.", options: ["wollen", "will", "wollt", "möchten"], correct: 0, explanation: "Onlar istiyor: 'wollen'." },
        { question: "Was ___ (istersin) du essen?", options: ["willst", "möchtest", "möchten", "wollen"], correct: 1, explanation: "Nazikçe 'ne istersin?' -> 'möchtest'." },
        { question: "Wollen fiilinin 'Er' çekimi nedir?", options: ["will", "willst", "wollen", "wollt"], correct: 0, explanation: "Modal fiillerde 1. ve 3. tekil şahıs aynıdır." },
        { question: "Möchten fiilinin 'Wir' çekimi nedir?", options: ["möchte", "möchtest", "möchten", "möchtet"], correct: 2, explanation: "Wir möchten." }
    ]
};

// ===== UNIT 522: IMPERATIV (EMİR KİPİ) =====
const unit522Grammar: GermanGrammarUnit = {
    unitId: 522,
    title: "Emir Kipi (Imperativ)",
    rules: [
        {
            id: "de-imperative",
            title: "1. Emir Kipi Yapımı",
            explanation: "Almancada emir kipi üç şahıs için kullanılır: du (sen), ihr (sizler) ve Sie (siz-resmi). 'du' formunda fiilin kökü kullanılır ve 'st' takısı atılır. 'ihr' formunda fiil çekimi aynen kalır ama özne atılır. 'Sie' formunda ise fiil ve özne yer değiştirir.",
            table: {
                headers: ["Şahıs", "Fiil: Machen", "Emir Hali", "Anlamı"],
                rows: [
                    ["du (sen)", "machst", "Mach!", "Yap!"],
                    ["ihr (siz)", "macht", "Macht!", "Yapın!"],
                    ["Sie (resmi)", "machen", "Machen Sie!", "Yapınız!"]
                ]
            },
            examples: [
                { de: "Lies das Buch!", tr: "Kitabı oku! (du)" },
                { de: "Essen Sie bitte!", tr: "Lütfen yiyiniz! (Sie)" }
            ]
        }
    ],
    exercises: [
        { question: "___ (Gel!) zu mir!", options: ["Komm", "Kommst", "Kommen", "Kommt"], correct: 0, explanation: "Du için emir kipinde kök kullanılır." },
        { question: "___ (Yapınız!) bitte die Tür auf.", options: ["Mach", "Macht", "Machen Sie", "Machen"], correct: 2, explanation: "Resmi (Sie) emirde 'Machen Sie' kullanılır." },
        { question: "___ (Kalkın!) pünktlich ___!", options: ["Steht / auf", "Stehe / auf", "Aufstehen", "Stehen Sie"], correct: 0, explanation: "Siz (ihr) için 'Steht auf' kullanılır." },
        { question: "Hör ___ (Dinle)!", options: ["du", "zu", "auf", "-"], correct: 2, explanation: "Zuhören (dinlemek) ayrılan bir fiildir; 'Hör zu!'." },
        { question: "___ (İç!) das Wasser!", options: ["Trink", "Trinkst", "Trinken", "Trinkt"], correct: 0, explanation: "Du için: 'Trink!'." },
        { question: "___ (Yazın!) den Satz!", options: ["Schreibt", "Schreib", "Schreiben Sie", "Schreiben"], correct: 0, explanation: "İhr (siz) için: 'Schreibt!'." },
        { question: "___ (Ol!) ruhig!", options: ["Sein", "Sei", "Seid", "Sind Sie"], correct: 1, explanation: "Sein fiilinin 'du' emir hali düzensizdir: 'Sei!'." },
        { question: "___ (Olun!) vorsichtig!", options: ["Sein", "Sei", "Seid", "Sind Sie"], correct: 2, explanation: "Sein fiilinin 'ihr' emir hali: 'Seid!'." },
        { question: "___ (Gidiniz!) nach Hause!", options: ["Geh", "Geht", "Gehen Sie", "Gehen"], correct: 2, explanation: "Sie için: 'Gehen Sie!'." },
        { question: "Sprich ___! (Yavaş konuş!)", options: ["schnell", "langsam", "laut", "leise"], correct: 1, explanation: "Langsam = Yavaş." }
    ]
};

// ===== UNIT 523: PRÄTERITUM SEIN & HABEN (GEÇMİŞ ZAMAN) =====
const unit523Grammar: GermanGrammarUnit = {
    unitId: 523,
    title: "Geçmiş Zaman: War ve Hatte",
    rules: [
        {
            id: "de-praeteritum-intro",
            title: "1. Sein ve Haben Geçmiş Halleri",
            explanation: "Almancada 'idi' ve 'vardı/sahipti' demek için 'war' ve 'hatte' kullanılır. Günlük dilde bu iki fiilin Präteritum hali Perfekt'e (geçmiş zaman) tercih edilir.",
            table: {
                headers: ["Zamir", "Sein -> War (İdi)", "Haben -> Hatte (Vardı)"],
                rows: [
                    ["Ich", "war", "hatte"],
                    ["Du", "warst", "hattest"],
                    ["Er / Sie / Es", "war", "hatte"],
                    ["Wir", "waren", "hatten"],
                    ["Ihr", "wart", "hattet"],
                    ["Sie / sie", "waren", "hatten"]
                ]
            },
            examples: [
                { de: "Ich war gestern in Berlin.", tr: "Dün Berlin'deydim." },
                { de: "Ich hatte keine Zeit.", tr: "Vaktim yoktu." }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ (idim) müde.", options: ["bin", "war", "warst", "waren"], correct: 1, explanation: "Ich war = İdim." },
        { question: "___ (Var mıydı) du Glück?", options: ["Hast", "Hatte", "Hattest", "Warst"], correct: 2, explanation: "Du ile 'hattest' kullanılır." },
        { question: "Er ___ (idi) krank.", options: ["ist", "war", "hatte", "bin"], correct: 1, explanation: "Er war = O idi." },
        { question: "Wir ___ (idik) im Kino.", options: ["sind", "waren", "hatten", "wart"], correct: 1, explanation: "Wir waren = Biz idik." },
        { question: "Ihr ___ (vardı) Hunger.", options: ["habt", "hattet", "wart", "hatte"], correct: 1, explanation: "Sizin vardı (ihr) -> 'hattet'." },
        { question: "Sie (onlar) ___ (idiler) zu Hause.", options: ["sind", "waren", "hatten", "war"], correct: 1, explanation: "Onlar idiler -> 'waren'." },
        { question: "Dün akşam neredeydin?", options: ["Wo bist du?", "Wo warst du?", "Wer warst du?", "Was hast du?"], correct: 1, explanation: "Geçmiş zaman sorusu: 'Wo warst du?'." },
        { question: "Benim bir köpeğim vardı.", options: ["Ich habe einen Hund.", "Ich hatte einen Hund.", "Ich war einen Hund.", "Ich bin bir Hund."], correct: 1, explanation: "'İdi' değil 'vardı' (hatte) kullanılır." },
        { question: "Warst fiilinin 'Wir' çekimi nedir?", options: ["war", "waren", "wart", "warst"], correct: 1, explanation: "Wir waren." },
        { question: "Hatte fiilinin 'Er' çekimi nedir?", options: ["hatte", "hattest", "hatten", "hattet"], correct: 0, explanation: "Er hatte." }
    ]
};

// ===== UNIT 524: DATIV EINFÜHRUNG (DATİV GİRİŞ) =====
const unit524Grammar: GermanGrammarUnit = {
    unitId: 524,
    title: "Dativ Yapısına Giriş (İsmin -e Hali)",
    rules: [
        {
            id: "de-dativ-intro",
            title: "1. Dativ Nedir?",
            explanation: "Dativ, Almancada ismin dolaylı tümleç halidir (e-hali). Artikeller Dativ'de değişikliğe uğrar.",
            table: {
                headers: ["Cinsiyet", "Nominativ (Yalın)", "Dativ (-e hali)"],
                rows: [
                    ["Eril (der)", "der / ein", "dem / einem"],
                    ["Nötr (das)", "das / ein", "dem / einem"],
                    ["Dişil (die)", "die / eine", "der / einer"],
                    ["Çoğul (die)", "die / -", "den + n"]
                ]
            },
            examples: [
                { de: "Ich helfe dem Mann.", tr: "Adama yardım ediyorum." },
                { de: "Ich gebe der Frau das Buch.", tr: "Kadına kitabı veriyorum." }
            ]
        }
    ],
    exercises: [
        { question: "Ich helfe ___ (doktora - der Arzt).", options: ["der Arzt", "dem Arzt", "den Arzt", "des Arztes"], correct: 1, explanation: "Helfen Dativ ister; der -> dem olur." },
        { question: "Das Buch gehört ___ (kadına - die Frau).", options: ["die Frau", "der Frau", "den Frau", "dem Frau"], correct: 1, explanation: "Gehören Dativ ister; die -> der olur." },
        { question: "Ich danke ___ (çocuğa - das Kind).", options: ["das Kind", "dem Kind", "den Kind", "der Kind"], correct: 1, explanation: "Danken Dativ ister; das -> dem olur." },
        { question: "Wie geht es ___ (sana)?", options: ["du", "dich", "dir", "dein"], correct: 2, explanation: "Dativ şahıs zamiri 'dir' (sana) kullanılır." },
        { question: "Wie geht es ___ (size - resmi)?", options: ["Sie", "Ihr", "Ihnen", "Euch"], correct: 2, explanation: "Resmi 'siz'in Dativ hali 'Ihnen'dir." },
        { question: "Ich antworte ___ (öğretmene - der Lehrer).", options: ["der Lehrer", "dem Lehrer", "den Lehrer", "einem Lehrer"], correct: 1, explanation: "Antworten Dativ ister; der -> dem." },
        { question: "Dativ'de 'die' artikeli neye dönüşür?", options: ["dem", "den", "der", "des"], correct: 2, explanation: "Die (dişil) -> der." },
        { question: "Dativ'de çoğul artikel 'die' neye dönüşür?", options: ["dem", "den", "der", "des"], correct: 1, explanation: "Die (çoğul) -> den." },
        { question: "Çoğul Dativ'de ismin sonuna ne eklenir?", options: ["-e", "-r", "-n", "-s"], correct: 2, explanation: "Çoğul Dativ'de hem artikel 'den' olur hem de isme '-n' eklenir." },
        { question: "Dativ'de 'das' artikeli neye dönüşür?", options: ["dem", "den", "der", "des"], correct: 0, explanation: "Das (nötr) -> dem." }
    ]
};

// ===== UNIT 525: DATIV VERBEN (DATİV İSTEYEN FİİLLER) =====
const unit525Grammar: GermanGrammarUnit = {
    unitId: 525,
    title: "Dativ İsteyen Sık Kullanılan Fiiller",
    rules: [
        {
            id: "de-dativ-verbs",
            title: "1. En Yaygın Dativ Fiilleri",
            explanation: "Almancada bazı fiiller nesnelerini her zaman Dativ (e-hali) olarak alır. Bunları ezberlemek önemlidir.",
            table: {
                headers: ["Fiil", "Anlamı", "Örnek"],
                rows: [
                    ["helfen", "yardım etmek", "Ich helfe dir."],
                    ["danken", "teşekkür etmek", "Ich danke dem Lehrer."],
                    ["gehören", "ait olmak", "Das gehört mir."],
                    ["gratulieren", "tebrik etmek", "Ich gratuliere dir."],
                    ["schmecken", "tadında olmak (lezzet)", "Es schmeckt mir."]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Das Essen schmeckt ___ (bana) gut.", options: ["ich", "mich", "mir", "mein"], correct: 2, explanation: "Schmecken Dativ ister; ich -> mir." },
        { question: "Ich gratuliere ___ (sana) zum Geburtstag.", options: ["du", "dich", "dir", "dein"], correct: 2, explanation: "Gratulieren Dativ ister; du -> dir." },
        { question: "Helfen ___ (bana) bitte!", options: ["ich", "mich", "mir", "Sie"], correct: 2, explanation: "Helfen Dativ ister; mir." },
        { question: "Die Tasche gehört ___ (kıza - das Mädchen).", options: ["das Mädchen", "dem Mädchen", "der Mädchen", "den Mädchen"], correct: 1, explanation: "Gehören + Dativ; das -> dem." },
        { question: "Ich danke ___ (anneme - meine Mutter).", options: ["meine Mutter", "meiner Mutter", "meinen Mutter", "meinem Mutter"], correct: 1, explanation: "Danken + Dativ; meine -> meiner." },
        { question: "Glaubst du ___ (ona - erkek)?", options: ["er", "ihn", "ihm", "ihr"], correct: 2, explanation: "Glauben (inanmak) Dativ ister; er -> ihm." },
        { question: "Das passt ___ (bana).", options: ["ich", "mich", "mir", "mein"], correct: 2, explanation: "Passen (uymak/yakışmak) Dativ ister." },
        { question: "Antworte ___ (bize) bitte!", options: ["wir", "uns", "euch", "ihnen"], correct: 1, explanation: "Antworten + Dativ; wir -> uns." },
        { question: "Zuhören (dinlemek) fiili ne ister?", options: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"], correct: 2, explanation: "Zuhören nesnesini Dativ alır." },
        { question: "Dativ şahıs zamiri: 'euch' (size) hangi şahsa aittir?", options: ["du", "ihr", "wir", "sie"], correct: 1, explanation: "İhr (sizler) -> euch (size)." }
    ]
};

// ===== UNIT 526: PRÄPOSITIONEN + DATIV (DATİV EDATLARI) =====
const unit526Grammar: GermanGrammarUnit = {
    unitId: 526,
    title: "Dativ Gerektiren Edatlar",
    rules: [
        {
            id: "de-dativ-preps",
            title: "1. Her Zaman Dativ İsteyen Edatlar",
            explanation: "Bu edatlardan sonra gelen isim veya zamir her zaman Dativ halde çekimlenir: aus, bei, mit, nach, seit, von, zu.",
            table: {
                headers: ["Edat", "Türkçe Anlamı", "Örnek"],
                rows: [
                    ["aus", "-den/-dan (içinden)", "aus dem Haus"],
                    ["bei", "yanında/esnasında", "bei dem (beim) Arzt"],
                    ["mit", "ile/beraber", "mit meiner Freundin"],
                    ["seit", "-den beri", "seit einem Monat"],
                    ["von", "-den/-dan / -in", "von dem (vom) Vater"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Ich komme aus ___ (evden - das Haus).", options: ["das Haus", "dem Haus", "den Haus", "der Haus"], correct: 1, explanation: "Aus + Dativ; das -> dem." },
        { question: "Er arbeitet bei ___ (BMW - die Firma).", options: ["die Firma", "der Firma", "den Firma", "dem Firma"], correct: 1, explanation: "Bei + Dativ; die -> der." },
        { question: "Seit ___ (bir ay) bin ich hier.", options: ["ein Monat", "einem Monat", "einen Monat", "einer Monat"], correct: 1, explanation: "Seit + Dativ; der Monat -> einem Monat." },
        { question: "Das Geschenk ist von ___ (babamdan - mein Vater).", options: ["mein Vater", "meinem Vater", "meinen Vater", "meiner Vater"], correct: 1, explanation: "Von + Dativ; mein -> meinem." },
        { question: "Ich gehe zu ___ (arkadaşıma - mein Freund).", options: ["mein Freund", "meinem Freund", "meinen Freund", "meiner Freund"], correct: 1, explanation: "Zu + Dativ; mein -> meinem." },
        { question: "Kommst du mit ___ (benimle)?", options: ["ich", "mich", "mir", "meiner"], correct: 2, explanation: "Mit + Dativ; ich -> mir." },
        { question: "Ich wohne bei ___ (ailemin yanında - meine Eltern).", options: ["meine Eltern", "meinen Eltern", "meiner Eltern", "mein Eltern"], correct: 1, explanation: "Bei + Dativ; plural 'die' -> 'den' (meinen)." },
        { question: "Bist du seit ___ (bir yıl) in Deutschland?", options: ["ein Jahr", "einem Jahr", "einen Jahr", "einer Jahr"], correct: 1, explanation: "Seit + Dativ; das Jahr -> einem Jahr." },
        { question: "Er kommt aus ___ (Türkiye'den - die Türkei).", options: ["die Türkei", "der Türkei", "den Türkei", "dem Türkei"], correct: 1, explanation: "Türkei istisnai olarak artikellidir; die -> der olur." },
        { question: "Zu + dem birleşince ne olur?", options: ["zur", "zum", "zen", "zud"], correct: 1, explanation: "Zu + dem = zum." }
    ]
};

// ===== UNIT 527: WECHSELPRÄPOSITIONEN (İKİ DEĞERLİ EDATLAR) =====
const unit527Grammar: GermanGrammarUnit = {
    unitId: 527,
    title: "İki Değerli Edatlar (Nereye? Nerede?)",
    rules: [
        {
            id: "de-wechsel-preps",
            title: "1. Akkusativ mi, Dativ mi?",
            explanation: "Bazı edatlar (in, an, auf, unter, über, vor, hinter, neben, zwischen) hem Akkusativ hem de Dativ ile kullanılabilir.\n\n* **Wohin? (Nereye?):** Hareket varsa Akkusativ.\n* **Wo? (Nerede?):** Konum belirtiliyorsa Dativ.",
            table: {
                headers: ["Soru", "Durum", "Örnek"],
                rows: [
                    ["Wohin?", "Akkusativ", "Ich gehe in die Schule."],
                    ["Wo?", "Dativ", "Ich bin in der Schule."]
                ]
            },
            examples: [
                { de: "Das Buch liegt auf dem Tisch. (Wo?)", tr: "Kitap masanın üzerinde duruyor. (Dativ)" },
                { de: "Ich lege das Buch auf den Tisch. (Wohin?)", tr: "Kitabı masanın üzerine koyuyorum. (Akkusativ)" }
            ]
        }
    ],
    exercises: [
        { question: "Das Bild hängt an ___ (duvarda - die Wand). (Wo?)", options: ["die Wand", "der Wand", "den Wand", "dem Wand"], correct: 1, explanation: "Konum bildiriyor (Nerede?); Dativ: die -> der." },
        { question: "Ich hänge das Bild an ___ (duvara). (Wohin?)", options: ["die Wand", "der Wand", "den Wand", "dem Wand"], correct: 0, explanation: "Hareket bildiriyor (Nereye?); Akkusativ: die -> die." },
        { question: "Der Hund schläft unter ___ (masanın altında - der Tisch).", options: ["der Tisch", "dem Tisch", "den Tisch", "des Tisches"], correct: 1, explanation: "Konum: Dativ; der -> dem." },
        { question: "Ich gehe in ___ (parka - der Park).", options: ["der Park", "dem Park", "den Park", "des Parks"], correct: 2, explanation: "Hareket: Akkusativ; der -> den." },
        { question: "Wir wohnen in ___ (Berlin'de).", options: ["Berlin", "dem Berlin", "der Berlin", "in"], correct: 0, explanation: "Şehir adları artikelsizdir." },
        { question: "Die Katze ist hinter ___ (koltuğun arkasında - das Sofa).", options: ["das Sofa", "dem Sofa", "den Sofa", "der Sofa"], correct: 1, explanation: "Konum: Dativ; das -> dem." },
        { question: "Stell die Flasche auf ___ (masaya).", options: ["der Tisch", "dem Tisch", "den Tisch", "das Tisch"], correct: 2, explanation: "Nereye koyayım? -> Akkusativ (den)." },
        { question: "Das Kind sitzt zwischen ___ (ebeveynlerinin arasında - die Eltern).", options: ["die Eltern", "den Eltern", "der Eltern", "meine Eltern"], correct: 1, explanation: "Nerede? -> Dativ (den)." },
        { question: "Wo ist der anahtar? ___ der Tasche.", options: ["In", "An", "Auf", "Hinter"], correct: 0, explanation: "Çantanın içinde: In." },
        { question: "İn + dem birleşince ne olur?", options: ["im", "ins", "ir", "id"], correct: 0, explanation: "In + dem = im." }
    ]
};

// ===== UNIT 528: PERFEKT EINFÜHRUNG (PERFEKT - GEÇMİŞ ZAMAN GİRİŞ) =====
const unit528Grammar: GermanGrammarUnit = {
    unitId: 528,
    title: "Almancada Geçmiş Zaman: Perfekt",
    rules: [
        {
            id: "de-perfekt-intro",
            title: "1. Perfekt Yapısı",
            explanation: "Almancada günlük konuşmada en çok kullanılan geçmiş zaman formudur.\n**Yapı:** Haben/Sein (çekimlenmiş 2. sırada) + Partizip II (fiilin 3. hali, cümlenin sonunda).",
            table: {
                headers: ["Yardımcı Fiil", "Kullanım Alanı", "Örnek"],
                rows: [
                    ["Haben", "Çoğu fiil için kullanılır", "Ich habe gelernt."],
                    ["Sein", "Hareket/Durum değişikliği", "Ich bin gegangen."]
                ]
            },
            examples: [
                { de: "Ich habe gefrühstückt.", tr: "Kahvaltı yaptım." },
                { de: "Er ist nach Hause gekommen.", tr: "O eve geldi." }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ Deutsch gelernt.", options: ["bin", "bist", "habe", "hast"], correct: 2, explanation: "Öğrenmek (lernen) 'haben' ile kullanılır." },
        { question: "Er ___ nach Berlin gefahren.", options: ["ist", "hat", "war", "bin"], correct: 0, explanation: "Gitmek/Sürmek (fahren) hareket bildirir, 'sein' (ist) ile kullanılır." },
        { question: "Partizip II (fiilin geçmiş hali) cümlede nerede olur?", options: ["2. sırada", "Başta", "Özneden sonra", "Cümlenin sonunda"], correct: 3, explanation: "Ana fiil (ge...) cümlenin en sonundadır." },
        { question: "Wir ___ Pizza gegessen.", options: ["sind", "haben", "waren", "habt"], correct: 1, explanation: "Yemek yemek (essen) 'haben' ile kullanılır." },
        { question: "Bist du schon ___ (geldin mi)?", options: ["gekommen", "kommen", "gekommst", "gekame"], correct: 0, explanation: "Kommen fiilinin Partizip II hali 'gekommen'dir." },
        { question: "Hast du das ___ (yaptın mı)?", options: ["machen", "gemacht", "gemachst", "gemachen"], correct: 1, explanation: "Machen -> gemacht." },
        { question: "Ich ___ (uyudum).", options: ["habe geschlafen", "bin geschlafen", "habe schlafen", "bin schlafen"], correct: 0, explanation: "Uyumak (schlafen) hareket bildirmez, 'haben' ile kullanılır." },
        { question: "Sie (onlar) ___ (yüzdüler).", options: ["haben geschwommen", "sind geschwommen", "sind schwimmen", "habe geschwommen"], correct: 1, explanation: "Yüzmek (hareket) 'sein' ile kullanılır." },
        { question: "Hangi yardımcı fiil 'gitmek' (gehen) ile kullanılır?", options: ["haben", "sein", "werden", "machen"], correct: 1, explanation: "Hareket bildiren fiiller 'sein' ile kullanılır." },
        { question: "Was hast du gestern ___ (yaptın)?", options: ["machen", "gemacht", "gemachst", "tun"], correct: 1, explanation: "Machen -> gemacht." }
    ]
};

// ===== UNIT 529: REGELMÄSSIGES PERFEKT (DÜZENLİ GEÇMİŞ ZAMAN) =====
const unit529Grammar: GermanGrammarUnit = {
    unitId: 529,
    title: "Düzenli Fiillerle Geçmiş Zaman",
    rules: [
        {
            id: "de-regular-perfekt",
            title: "1. Düzenli Fiil Yapımı (ge...t)",
            explanation: "Düzenli fiillerin (zayıf fiiller) Partizip II hali: **ge + fiil kökü + t** kuralıyla oluşturulur.",
            table: {
                headers: ["Mastar", "Fiil Kökü", "Partizip II"],
                rows: [
                    ["machen", "mach", "gemacht"],
                    ["lernen", "lern", "gelernt"],
                    ["kochen", "koch", "gekocht"],
                    ["spielen", "spiel", "gespielt"],
                    ["hören", "hör", "gehört"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Machen -> ___", options: ["gemacht", "gemachen", "gemachst", "gmacht"], correct: 0, explanation: "Kural: ge + mach + t." },
        { question: "Lernen -> ___", options: ["gelernen", "gelernt", "gelernst", "lern"], correct: 1, explanation: "Kural: ge + lern + t." },
        { question: "Sagen (söylemek) -> ___", options: ["gesagt", "gesagen", "gesagst", "sagt"], correct: 0, explanation: "ge + sag + t." },
        { question: "Spielen -> ___", options: ["gespile", "gespielt", "gespielen", "geplayt"], correct: 1, explanation: "ge + spiel + t." },
        { question: "Kochen -> ___", options: ["gekocht", "gekochten", "gekochst", "koch"], correct: 0, explanation: "ge + koch + t." },
        { question: "Wohnen (yaşamak) -> ___", options: ["gewohnen", "gewohnt", "gewohnst", "wohnt"], correct: 1, explanation: "ge + wohn + t." },
        { question: "Hören -> ___", options: ["gehör", "gehörte", "gehört", "gehören"], correct: 2, explanation: "ge + hör + t." },
        { question: "Fragen (sormak) -> ___", options: ["gefragt", "gefragen", "gefragst", "frag"], correct: 0, explanation: "ge + frag + t." },
        { question: "Arbeiten fiilinin Partizip II hali nedir? (Dikkat: kök -t ile bitiyor)", options: ["gearbet", "gearbeitet", "gearbeiten", "gearbaitet"], correct: 1, explanation: "Kök -t/-d ile biterse araya -e- girer: gearbeitet." },
        { question: "Kaufen -> ___", options: ["gekauft", "gekauften", "gekaufst", "kauf"], correct: 0, explanation: "ge + kauf + t." }
    ]
};

// ===== UNIT 530: UNREGELMÄSSIGES PERFEKT (DÜZENSİZ GEÇMİŞ ZAMAN) =====
const unit530Grammar: GermanGrammarUnit = {
    unitId: 530,
    title: "Düzensiz Fiillerle Geçmiş Zaman",
    rules: [
        {
            id: "de-irregular-perfekt",
            title: "1. Düzensiz Fiil Yapımı (ge...en)",
            explanation: "Düzensiz (güçlü) fiillerin çoğu 'ge...en' ile biter ve fiil kökünde ses değişimi olabilir. Bunlar listeler halinde ezberlenmelidir.",
            table: {
                headers: ["Mastar", "Anlamı", "Partizip II"],
                rows: [
                    ["gehen", "gitmek", "gegangen (H.F: sein)"],
                    ["kommen", "gelmek", "gekommen (H.F: sein)"],
                    ["essen", "yemek", "gegessen (H.F: haben)"],
                    ["trinken", "içmek", "getrunken (H.F: haben)"],
                    ["sehen", "görmek", "gesehen (H.F: haben)"]
                ]
            },
            examples: []
        }
    ],
    exercises: [
        { question: "Gehen -> ___", options: ["gegehen", "gegangen", "gegeht", "gang"], correct: 1, explanation: "Gehen düzensizdir; 'gegangen' olur." },
        { question: "Essen -> ___", options: ["geesst", "gegegessen", "gegessen", "geessen"], correct: 2, explanation: "Essen -> gegessen." },
        { question: "Trinken -> ___", options: ["getrinkt", "getrunken", "getrinken", "trunken"], correct: 1, explanation: "Trinken -> getrunken." },
        { question: "Kommen -> ___", options: ["gekommen", "gekommt", "gekommst", "kome"], correct: 0, explanation: "Kommen -> gekommen." },
        { question: "Sehen -> ___", options: ["gesehen", "gesieht", "geseht", "sehn"], correct: 0, explanation: "Sehen -> gesehen." },
        { question: "Schreiben (yazmak) -> ___", options: ["geschreibt", "geschrieben", "geschrabt", "schreiben"], correct: 1, explanation: "Schreiben -> geschrieben." },
        { question: "Lesen (okumak) -> ___", options: ["gelesen", "gelest", "gelesst", "lesen"], correct: 0, explanation: "Lesen -> gelesen." },
        { question: "Finden (bulmak) -> ___", options: ["gefundet", "gefunden", "gefindet", "fund"], correct: 1, explanation: "Finden -> gefunden." },
        { question: "Fliegen (uçmak) -> ___", options: ["gefliegen", "geflogen", "gefliegt", "flug"], correct: 1, explanation: "Fliegen -> geflogen." },
        { question: "Sprechen -> ___", options: ["gesprochen", "gesprecht", "gespricht", "sprochen"], correct: 0, explanation: "Sprechen -> gesprochen." }
    ]
};

const unitMap: { [key: number]: GermanGrammarUnit } = {
    501: unit501Grammar, 502: unit502Grammar, 503: unit503Grammar, 504: unit504Grammar, 505: unit505Grammar,
    506: unit506Grammar, 507: unit507Grammar, 508: unit508Grammar, 509: unit509Grammar, 510: unit510Grammar,
    511: unit511Grammar, 512: unit512Grammar, 513: unit513Grammar, 514: unit514Grammar, 515: unit515Grammar,
    516: unit516Grammar, 517: unit517Grammar, 518: unit518Grammar, 519: unit519Grammar, 520: unit520Grammar,
    521: unit521Grammar, 522: unit522Grammar, 523: unit523Grammar, 524: unit524Grammar, 525: unit525Grammar,
    526: unit526Grammar, 527: unit527Grammar, 528: unit528Grammar, 529: unit529Grammar, 530: unit530Grammar
};

export function getGermanA1GrammarForUnit(unitId: number): GermanGrammarUnit {
    return unitMap[unitId] || unit501Grammar;
}
