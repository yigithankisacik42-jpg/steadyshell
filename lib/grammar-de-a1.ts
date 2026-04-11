import { GrammarRule, GrammarExercise } from "./grammar";

export interface GermanGrammarUnit {
    unitId: number;
    title: string;
    rules: GrammarRule[];
    exercises: GrammarExercise[];
    dialogue?: {
        scenario: string;
        intro: string;
        objectives: { de: string[]; tr: string[] };
        suggestedPhrases: { de: string[]; tr: string[] };
    };
}

// ===== UNIT 501: PERSONALPRONOMEN & SEIN (OLMAK) =====
const unit501Grammar: GermanGrammarUnit = {
    unitId: 501,
    title: "Şahıs Zamirleri ve Sein Fiili (Olmak)",
    rules: [
        {
            id: "de-pronouns",
            title: "👤 BÖLÜM 1: ŞAHIS ZAMİRLERİ (Personalpronomen)",
            explanation: "İsimleri (Ahmet, Ayşe, araba) sürekli tekrar etmemek için kullandığımız \"Ben, Sen, O\" kelimeleridir. Almancada 3 tane \"O\" vardır, kafa karıştırıcı gibi dursa da mantığı çok basittir.\n\n🚨 **KOÇUN BÜYÜK UYARISI (3 Tane \"Sie\" Tuzağı):**\nTabloda gördüğün gibi tam 3 tane sie/Sie var.\n• **sie (Küçük s):** O (Kadın)\n• **sie (Küçük s):** Onlar\n• **Sie (Büyük S):** Siz (Saygı)\n\nPeki bunları nasıl ayırt edeceğiz? Tabii ki yanlarına gelecek olan fiilin çekimine bakarak! Hadi o fiile geçelim.",
            table: {
                headers: ["Almanca Zamir", "Okunuşu 🔊", "Türkçe Anlamı", "Mantığı / Açıklaması"],
                rows: [
                    ["ich", "ih", "Ben", "Kendinden bahsederken."],
                    ["du", "du", "Sen", "Karşındaki tek bir kişiye hitap ederken."],
                    ["er", "er", "O (Erkek)", "Erkekler ve 'der' artikelli kelimeler için."],
                    ["sie", "zi", "O (Kadın)", "Kadınlar ve 'die' artikelli kelimeler için."],
                    ["es", "es", "O (Nötr/Cansız)", "Bebekler ve 'das' artikelli kelimeler için."],
                    ["wir", "vir", "Biz", "Kendin ve yanındakiler için."],
                    ["ihr", "ir", "Siz", "Karşındaki birden fazla kişi için (Çoğul 'sen'ler)."],
                    ["sie", "zi", "Onlar", "Uzaktaki birden fazla kişi/nesne için."],
                    ["Sie", "zi", "Siz (Kibar/Resmi)", "Saygı duyduğun, tanımadığın kişilere (Her zaman BÜYÜK harfle yazılır!)."]
                ]
            },
            examples: []
        },
        {
            id: "de-sein-intro",
            title: "🧱 BÖLÜM 2: SEIN FİİLİ NEDİR? (Olmak)",
            explanation: "Türkçede \"Ben yorgunum\", \"O hastadır\" derken cümlenin sonuna ekler koyarız. Almancada bu ekler yoktur!\nAlmancada isim ve sıfat cümleleri kurabilmek için (Mesela adını, yaşını, mesleğini, duygularını söylerken) mutlaka bir yardımcı fiile ihtiyacın vardır. İşte bu, **\"sein\" (olmak)** fiilidir. Düzensiz bir fiildir, yani kökü tamamen değişir. Bu tabloyu adın gibi ezberlemelisin!\n\n*(Fark ettin mi koç? \"Onlar\" (sie) ve \"Kibar Siz\" (Sie) için çekim tamamen aynıdır: sind. \"Kadın O\" (sie) için ise çekim ist'tir. İşte 3 tane 'sie'yi birbirinden böyle ayırıyoruz!)*",
            table: {
                headers: ["Şahıs Zamiri", "\"Sein\" Çekimi", "Okunuşu 🔊", "Türkçe Mantığı"],
                rows: [
                    ["ich", "bin", "ih bin", "Ben ...-im (Ben ...'yım)"],
                    ["du", "bist", "du bist", "Sen ...-sin"],
                    ["er / sie / es", "ist", "er/zi/es ist", "O ...-dir"],
                    ["wir", "sind", "vir zint", "Biz ...-iz"],
                    ["ihr", "seid", "ir zayt", "Siz ...-siniz (Çoğullar için)"],
                    ["sie / Sie", "sind", "zi zint", "Onlar ...-dirler / Siz ...-siniz (Kibar)"]
                ]
            },
            examples: []
        },
        {
            id: "de-sein-examples",
            title: "🗣️ BÖLÜM 3: GERÇEK HAYAT ÖRNEKLERİ (Lego Zamanı)",
            explanation: "Şimdi özneleri aldık, motoru (sein) taktık. Cümleleri tamamlayalım.",
            examples: [
                { de: "Ich bin Yiğithan.", tr: "Ben Yiğithan'ım. (Kendini Tanıtma)" },
                { de: "Ich bin Entwickler.", tr: "Ben yazılımcıyım. (Kendini Tanıtma)" },
                { de: "Du bist sehr klug.", tr: "Sen çok zekisin. (Durum / Duygu)" },
                { de: "Er ist müde.", tr: "O yorgun. (Durum / Duygu)" },
                { de: "Sie ist glücklich.", tr: "O mutlu. -> Kadın o (Durum / Duygu)" },
                { de: "Wir sind bereit.", tr: "Biz hazırız. (Çoğul Durumlar)" },
                { de: "Ihr seid zu spät.", tr: "Siz geç kaldınız. -> Karşımdaki arkadaş grubuna. (Çoğul Durumlar)" },
                { de: "Sie sind nett.", tr: "Onlar nazikler VEYA Siz naziksiniz. -> Cümlenin gelişinden anlaşılır. (Çoğul Durumlar)" }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ Ali.", options: ["bin", "bist", "ist", "sind"], correct: 0, explanation: "'Ich' öznesi ile her zaman 'bin' çekimi kullanılır." },
        { question: "Du ___ nett.", options: ["bin", "bist", "ist", "sind"], correct: 1, explanation: "'Du' öznesi ile her zaman 'bist' çekimi kullanılır." },
        { question: "Er ___ Lehrer.", options: ["bin", "bist", "ist", "sind"], correct: 2, explanation: "'Er/Sie/Es' tekil şahısları için 'ist' kullanılır." },
        { question: "Wir ___ glücklich.", options: ["bin", "bist", "ist", "sind"], correct: 3, explanation: "'Wir' ve 'Sie/sie' çoğulları için 'sind' kullanılır." },
        { question: "Ihr ___ Studenten.", options: ["bin", "seid", "ist", "sind"], correct: 1, explanation: "'Ihr' (sizler) öznesi için 'seid' kullanılır." },
        { question: "Es ___ kalt.", options: ["bin", "bist", "ist", "sind"], correct: 2, explanation: "Cansız varlıklar/durumlar (es) için 'ist' kullanılır." },
        { question: "Sie (onlar) ___ müde.", options: ["bin", "bist", "ist", "sind"], correct: 3, explanation: "Çoğul olan 'onlar' (sie) için 'sind' kullanılır." },
        { question: "___ du bereit?", options: ["Bin", "Bist", "Ist", "Sind"], correct: 1, explanation: "Soru yapılırken fiil başa gelir: 'Bist du...?'" },
        { question: "Das ___ ein Buch.", options: ["bin", "bist", "ist", "sind"], correct: 2, explanation: "'Das' (bu) ifadesi teklik bildirirse 'ist' alır." },
        { question: "Meine Mutter ___ schön.", options: ["bin", "bist", "ist", "sind"], correct: 2, explanation: "'Mutter' (anne) 'Sie' şahsına girdiği için 'ist' kullanılır." }
    ]
};

// ===== UNIT 502: HABEN & ZAHLEN (SAHİP OLMAK VE SAYILAR) =====
const unit502Grammar: GermanGrammarUnit = {
    unitId: 502,
    title: "Haben Fiili ve Sayılar (21-100+)",
    rules: [
        {
            id: "de-haben",
            title: "🔑 BÖLÜM 1: HABEN FİİLİ NEDİR? (Sahip Olmak)",
            explanation: "İngilizcedeki \"have/has\" fiilinin birebir aynısıdır. Kurallı bir fiil gibi görünse de \"Sen\" (du) ve \"O\" (er/sie/es) çekimlerinde ufak bir harf yutma huyları vardır (b harfi düşer).\n\nBu tabloyu adın gibi ezberlemelisin koç!\n\n🚨 **KOÇUN DİKKAT KÖŞESİ:** Fark ettin mi? \"Du habst\" veya \"Er habt\" DEMİYORUZ! O aradaki 'b' harfleri düşüyor ve **hast / hat** oluyor. Burası en çok hata yapılan yerdir, tuzağa düşme!\n\n*(Önemli Not: Almancada \"Açım\" veya \"Susadım\" derken \"Ben açım\" denmez, \"Ben açlığa SAHİBİM\" denir. Yani: Ich habe Hunger. 🔊 İh habe hunga.)*",
            table: {
                headers: ["Şahıs Zamiri", "\"Haben\" Çekimi", "Okunuşu 🔊", "Türkçe Anlamı"],
                rows: [
                    ["ich", "habe", "ih habe", "Ben sahibim (Benim ... var)"],
                    ["du", "hast", "du hast", "Sen sahipsin (Senin ... var)"],
                    ["er / sie / es", "hat", "ea / zi / es hat", "O sahip (Onun ... var)"],
                    ["wir", "haben", "via haben", "Biz sahibiz (Bizim ... var)"],
                    ["ihr", "habt", "ia habt", "Siz sahipsiniz (Sizin ... var)"],
                    ["sie / Sie", "haben", "zi haben", "Onlar sahip / Siz (Kibar) sahipsiniz"]
                ]
            },
            examples: [
                { de: "Ich habe ein Auto.", tr: "Benim bir arabam var. (🔊 İh habe ayn auto.)" },
                { de: "Du hast Zeit.", tr: "Senin zamanın var. (🔊 Du hast tsayt.)" },
                { de: "Wir haben ein Problem.", tr: "Bizim bir problemimiz var. (🔊 Via haben ayn problem.)" }
            ]
        },
        {
            id: "de-numbers-21",
            title: "🔢 BÖLÜM 2: SAYILAR (21-100+) BÜYÜK TUZAK!",
            explanation: "Geldik Almanların dünyayı şaşırttığı o sisteme! Türkçede \"Yirmi Bir\" derken önce Onluğu (Yirmi), sonra Birliği (Bir) söyleriz.\n\nAlmanlar ise tam tersini yapar! Önce Birliği söylerler, araya \"VE\" (und) koyarlar, sonra Onluğu söylerler. Yani \"Bir ve Yirmi\" derler!\n\n🧩 **Altın Formül: Birlik + und + Onluk**\n\nAma önce şu onlukları (20, 30, 40...) cebimize koyalım ki birleştirebilelim. (Hepsinin sonu genelde -zig diye biter).",
            table: {
                headers: ["Sayı", "Almancası", "Okunuşu 🔊"],
                rows: [
                    ["20", "zwanzig", "tsvan-tsih"],
                    ["30", "dreißig", "dray-sih (Dikkat: 'z' yerine 'ß' var!)"],
                    ["40", "vierzig", "fiya-tsih"],
                    ["50", "fünfzig", "fünf-tsih"],
                    ["60", "sechzig", "zeh-tsih (s harfi düştü)"],
                    ["70", "siebzig", "ziip-tsih (en hecesi düştü)"],
                    ["80", "achtzig", "aht-tsih"],
                    ["90", "neunzig", "noyn-tsih"],
                    ["100", "hundert", "hundat (veya einhundert)"]
                ]
            },
            examples: []
        },
        {
            id: "de-numbers-logic",
            title: "🏗️ BÖLÜM 3: SAYILARI BİRLEŞTİRME (Lego Zamanı)",
            explanation: "Hadi şu \"Tersten okuma\" formülünü uygulayalım. Unutma, sayılar Almancada bitişik yazılır.\n\n**Örnek: 24 (Yirmi Dört)**\n• Önce 4'ü al: vier (fiya)\n• Araya \"ve\" koy: und (unt)\n• Sonra 20'yi ekle: zwanzig (tsvantsih)\n• Sonuç: vierundzwanzig (🔊 fiya-unt-tsvantsih)\n\n**Örnek: 35 (Otuz Beş)**\n• 5 (fünf) + und + 30 (dreißig)\n• Sonuç: fünfunddreißig (🔊 fünf-unt-draysih)\n\n**Örnek: 99 (Doksan Dokuz)**\n• 9 (neun) + und + 90 (neunzig)\n• Sonuç: neunundneunzig (🔊 noyn-unt-noyntsih)\n\n⚠️ **MİNİK BİR KURAL:** \"1\" sayısı normalde \"eins\" (ayns) olarak okunur. Ama 21, 31, 41 gibi sayılarda araya girerken sondaki 's' harfini atar!\n• 21 = **ein**undzwanzig (ein**s**undzwanzig DEĞİL!)",
            examples: []
        },
        {
            id: "de-haben-numbers-mix",
            title: "🎬 BÖLÜM 4: HABEN VE SAYILARI BİRLEŞTİRİYORUZ",
            explanation: "Şimdi bu iki konuyu birleştirip tam bir Alman gibi varlıklarımızı sayalım.\n\n🏢 **Senaryo:** Ofiste arkadaşınla sohbet ediyorsun ve elindeki kitaplardan/paradan bahsediyorsunuz.\n\n**👦 Sen:** Ich brauche ein Buch. Hast du Bücher? (Bir kitaba ihtiyacım var. Senin kitapların var mı?) 🔊 İh brauhe ayn buh. Hast du büha?\n\n**👨 Arkadaşın:** Ja, ich habe viele Bücher. Ich habe fünfunddreißig (35) Bücher zu Hause! (Evet, benim çok kitabım var. Evde 35 kitabım var!) 🔊 Ya, ih habe fiile büha. İh habe fünf-unt-draysih büha tsu hauze!\n\n**👦 Sen:** Wow! Und Geld? Ich habe nur zweiundzwanzig (22) Euro. (Vay canına! Peki ya para? Benim sadece 22 eurom var.) 🔊 Vav! Unt gelt? İh habe nua tsvay-unt-tsvantsih oyro.\n\n**👨 Arkadaşın:** Kein Problem, ich habe hundert (100) Euro. Ich lade dich ein! (Problem değil, benim 100 eurom var. Sana ısmarlıyorum!) 🔊 Kayn problem, ih habe hundat oyro. İh lade dih ayn!\n\n🧠 **KOÇUN BÜYÜK UYARISI (Yaş Söyleme Tuzağı):**\nİngilizcede \"I am 25 years old\" (Sein fiili) kullanılır. Türkçede \"Ben 25 yaşındayım\" denir. Almancada yaş söylerken ASLA Haben (Sahip olmak) KULLANILMAZ! İngilizcedeki gibi \"Sein\" (Olmak) kullanılır.\n• ❌ **YANLIŞ:** Ich habe 25 Jahre alt. (Ben 25 yaşa sahibim denmez!)\n• ✅ **DOĞRU:** Ich bin fünfundzwanzig (25) Jahre alt. (🔊 İh bin fünf-unt-tsvantsih yare alt.)",
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
    title: "İyelik Artikelleri (Benim, Senin, Onun...)",
    rules: [
        {
            id: "de-pos-intro",
            title: "📜 MASTER REHBER: İYELİK ARTIKELLERİ (Benim, Senin, Onun)",
            explanation: "Almancada bir eşyaya \"Benim\" demek için iki şeye karar vermen gerekir:\n1. **Sahibi kim?** (Ben mi, Sen mi, O mu?)\n2. **Eşyanın (Nesnenin) artikeli ne?** (der/das mı, yoksa die mi?)",
            examples: []
        },
        {
            id: "de-pos-roots",
            title: "👤 BÖLÜM 1: TEMEL SAHİPLİK KELİMELERİ (Kökler)",
            explanation: "Önce \"Benim, Senin, Onun\" kelimelerinin YALIN (Kök) hallerini öğrenelim. Bu kelimeleri adın gibi bilmelisin!\n\n🚨 **KOÇUN DİKKAT KÖŞESİ (İngilizce Bilenler İçin):**\nTürkçede kız için de erkek için de \"Onun\" deriz. Ama İngilizcedeki \"his\" ve \"her\" ayrımı Almancada da vardır!\n• Sahibi **ERKEK** ise: sein (Onun)\n• Sahibi **KADIN** ise: ihr (Onun)",
            table: {
                headers: ["Şahıs (Kim?)", "Sahiplik Kelimesi (Kök)", "Okunuşu 🔊", "Türkçe Anlamı"],
                rows: [
                    ["ich (Ben)", "mein", "mayn", "Benim"],
                    ["du (Sen)", "dein", "dayn", "Senin"],
                    ["er (O - Erkek)", "sein", "zayn", "Onun (Erkeğin)"],
                    ["sie (O - Kadın)", "ihr", "ia", "Onun (Kadının)"],
                    ["es (O - Nötr)", "sein", "zayn", "Onun (Nötr/Cansızın)"],
                    ["wir (Biz)", "unser", "unza", "Bizim"],
                    ["ihr (Siz)", "euer", "oya", "Sizin (Çoğul)"],
                    ["sie (Onlar)", "ihr", "ia", "Onların"],
                    ["Sie (Siz - Kibar)", "Ihr", "ia", "Sizin (Kibar - Büyük harf!)"]
                ]
            },
            examples: []
        },
        {
            id: "de-pos-endings",
            title: "🧱 BÖLÜM 2: EŞYANIN CİNSİYETİ (Büyük Tuzak!)",
            explanation: "Geldik Almanların en sevdiği işe: Kelimenin sonuna harf eklemeye!\nSahibi bulduk (örneğin mein - benim). Peki bu kelimeyi aynen kullanacak mıyız? Bu, sahip olduğun eşyanın artikeline (der, die, das) bağlıdır!\n\n🎯 **ALTIN KURAL:**\n• Eğer sahip olduğun eşya **\"der\" (Erkek)** veya **\"das\" (Nötr)** ise: Kök kelimeye DOKUNMA! Olduğu gibi kalır.\n• Eğer sahip olduğun eşya **\"die\" (Kadın)** veya **ÇOĞUL** ise: Kök kelimenin sonuna fazladan bir **\"-e\"** harfi ekle!\n\n**Hemen Pratik Yapalım:**\nElimizdeki eşyalar:\n• der Hund (Köpek) -> der olduğu için ek yok.\n• das Auto (Araba) -> das olduğu için ek yok.\n• die Katze (Kedi) -> die olduğu için sonuna +e gelecek.\n• die Bücher (Kitaplar - Çoğul) -> Çoğul olduğu için sonuna +e gelecek.\n\n*(Okunuş Mantığı: mein -> mayn, meine -> mayn-ö. dein -> dayn, deine -> dayn-ö)*\n\n⚠️ **MİNİK İSTİSNA (euer tuzağı):** \"Sizin\" anlamına gelen euer (oya) kelimesine \"-e\" eklediğimizde, ortadaki 'e' harfi düşer ve **eure** (oy-rö) olur. (Euere denmez, dile zor gelir!)",
            table: {
                headers: ["Sahibi", "\"der\" Hund", "\"das\" Auto", "\"die\" Katze (+e)", "\"die\" Bücher (Çoğul / +e)"],
                rows: [
                    ["Benim", "mein Hund", "mein Auto", "meine Katze", "meine Bücher"],
                    ["Senin", "dein Hund", "dein Auto", "deine Katze", "deine Bücher"],
                    ["Onun (E)", "sein Hund", "sein Auto", "seine Katze", "seine Bücher"],
                    ["Onun (K)", "ihr Hund", "ihr Auto", "ihre Katze", "ihre Bücher"]
                ]
            },
            examples: []
        },
        {
            id: "de-pos-examples",
            title: "🗣️ BÖLÜM 3: GÜNLÜK HAYATTAN ÖRNEKLER VE OKUNUŞLARI",
            explanation: "Hadi bu kelimeleri gerçek cümlelerin içinde, tam bir Alman gibi kullanalım!",
            examples: [
                { de: "Das ist mein Bruder.", tr: "Bu benim erkek kardeşim. (🔊 Das ist mayn bruda. -> der Bruder)" },
                { de: "Das ist meine Schwester.", tr: "Bu benim kız kardeşim. (🔊 Das ist maynö şvesta. -> die Schwester)" },
                { de: "Ist das dein Buch?", tr: "Bu senin kitabın mı? (🔊 İst das dayn buh? -> das Buch)" },
                { de: "Nein, das ist sein Buch.", tr: "Hayır, bu onun (erkeğin) kitabı. (🔊 Nayn, das ist zayn buh.)" },
                { de: "Anna ist hier. Wo ist ihr Auto?", tr: "Anna burada. Onun arabası nerede? (🔊 ... Vo ist ia auto?)" },
                { de: "Wo sind unsere Kinder?", tr: "Bizim çocuklarımız nerede? (🔊 Vo zint unzarö kinda? -> die Kinder / çoğul)" }
            ]
        },
        {
            id: "de-pos-dialogue",
            title: "🎬 BÖLÜM 4: KISA BİR DİYALOG (Kayıp Eşya Bürosunda)",
            explanation: "🏢 **Senaryo:** Ofiste bir cüzdan (das Portemonnaie) ve bir çanta (die Tasche) bulundu.\n\n**👦 Sen:** Entschuldigung, ist das deine Tasche? (Afedersin, bu senin çantan mı? -> die Tasche) 🔊 Entşuldigung, ist das daynö taşö?\n\n**👨 Lukas:** Nein, das ist nicht meine Tasche. Das ist ihre Tasche. (*Anna'yı gösterir*) (Hayır, o benim çantam değil. O onun [Anna'nın] çantası.) 🔊 Nayn, das ist niht maynö taşö. Das ist irö taşö.\n\n**👦 Sen:** Okay. Und das Portemonnaie? Ist das dein Portemonnaie? (Tamam. Peki cüzdan? Bu senin cüzdanın mı? -> das Portemonnaie) 🔊 Okey. Unt das portmone? İst das dayn portmone?\n\n**👨 Lukas:** Ja! Das ist mein Portemonnaie! Danke! (Evet! O benim cüzdanım! Teşekkürler!) 🔊 Ya! Das ist mayn portmone! Dankö!",
            examples: []
        }
    ],
    exercises: [
        { question: "Das ist ___ (benim) Bruder.", options: ["mein", "meine", "meinen", "meiner"], correct: 0, explanation: "'Bruder' (der) olduğu için ve özne durumunda olduğu için 'mein' kullanılır." },
        { question: "Wo ist ___ (senin) Mutter?", options: ["dein", "deine", "deinen", "deiner"], correct: 1, explanation: "'Mutter' (die) olduğu için sonuna '-e' gelir: 'deine'." },
        { question: "Das ist ___ (onun - kadın) Buch.", options: ["ihr", "ihre", "sein", "seine"], correct: 0, explanation: "'Buch' (das) olduğu için ve sahibi 'kadın' olduğu için 'ihr' kullanılır." },
        { question: "___ (bizim) Haus ist groß.", options: ["unser", "unsere", "mein", "meine"], correct: 0, explanation: "'Haus' (das) olduğu için ek almaz: 'unser'." },
        { question: "Sind das ___ (senin) Kinder?", options: ["dein", "deine", "mein", "meine"], correct: 1, explanation: "Çoğul (Kinder) nesneler her zaman '-e' eki alır: 'deine'." },
        { question: "___ (onun - erkek) Auto ist neu.", options: ["sein", "seine", "ihr", "ihre"], correct: 0, explanation: "'Auto' (das) olduğu için 'sein' kullanılır." },
        { question: "Hier ist ___ (benim) Tasche.", options: ["mein", "meine", "meinen", "meiner"], correct: 1, explanation: "'Tasche' (die) olduğu için 'meine' kullanılır." },
        { question: "Wie heißt ___ (senin) Hund?", options: ["dein", "deine", "mein", "meine"], correct: 0, explanation: "'Hund' (der) olduğu için 'dein' kullanılır." },
        { question: "___ (onların) Eltern sind alt.", options: ["ihr", "ihre", "unser", "unsere"], correct: 1, explanation: "Çoğul 'Eltern' için sonu '-e'li 'ihre' (onların) kullanılır." },
        { question: "___ (sizin - resmi) Name, bitte?", options: ["Ihr", "Ihre", "Mein", "Meine"], correct: 0, explanation: "Resmi 'Siz' için 'Ihr' kullanılır (Der Name)." }
    ]
};

// ===== UNIT 504: ADJEKTIVE (SIFATLAR) =====
const unit504Grammar: GermanGrammarUnit = {
    unitId: 504,
    title: "Temel Sıfatlar ve Niteleme",
    rules: [
        {
            id: "de-adj-intro",
            title: "🧱 BÖLÜM 1: SIFATLARIN CÜMLE İÇİNDEKİ KULLANIMI (Altın Kural)",
            explanation: "Türkçede \"Araba hızlıdır\", \"Ev büyüktür\" deriz. Almancada bunu yapmak için ilk derslerde öğrendiğimiz o meşhur \"sein\" (olmak - ist/sind vb.) fiilini kullanırız.\n\n🎯 **KOÇUN ALTIN KURALI (Almancanın Sana Kıyağı!):**\nEğer bir sıfat, \"sein\" fiilinden (ist/sind) sonra tek başına geliyorsa, o sıfat ÇIRILÇIPLAK kalır! Hiçbir ek almaz, cinsiyete (der/die/das) bakmaz. Orijinal haliyle yazılır ve okunur.\n\n*(Not: Sıfatları ismin önüne koyarsan, yani \"Güzel kadın\" (Die schöne Frau) dersen işler değişir, o ileri seviye bir konudur. Biz şu an \"Kadın güzeldir\" diyoruz, bu yüzden sıfatlar hep yalın!)*",
            examples: [
                { de: "Das Auto ist schnell.", tr: "Araba hızlıdır. (🔊 Das auto ist şnel. -> Bak, hiçbir ek almadı!)" },
                { de: "Der Hund ist groß.", tr: "Köpek büyüktür. (🔊 Dea hunt ist groos. -> der Hund)" },
                { de: "Die Frau ist schön.", tr: "Kadın güzeldir. (🔊 Di frau ist şön. -> Kadın 'die' olsa bile sıfata dokunmadık!)" }
            ]
        },
        {
            id: "de-adj-opposites",
            title: "🆚 BÖLÜM 2: SIK KULLANILAN ZIT SIFATLAR (Kelimeleri Cebe At)",
            explanation: "Dünyayı tanımlamak için bu zıt kutupları adın gibi bilmelisin. Hepsini yüksek sesle okuyarak ezberle koç!",
            table: {
                headers: ["Almanca (Zıt Çiftler)", "Okunuşu 🔊", "Türkçe Anlamları"],
                rows: [
                    ["groß / klein", "groos / klayn", "Büyük / Küçük"],
                    ["gut / schlecht", "gut / şleht", "İyi / Kötü"],
                    ["neu / alt", "noy / alt", "Yeni / Eski (veya Yaşlı)"],
                    ["teuer / billig", "toya / bil-lih", "Pahalı / Ucuz"],
                    ["schön / hässlich", "şön / hes-lih", "Güzel / Çirkin"],
                    ["heiß / kalt", "hays / kalt", "Sıcak / Soğuk"],
                    ["schnell / langsam", "şnel / lang-zam", "Hızlı / Yavaş"],
                    ["einfach / schwer", "ayn-fah / şvea", "Kolay (Basit) / Zor (Ağır)"]
                ]
            },
            examples: []
        },
        {
            id: "de-sehr-zu",
            title: "🌶️ BÖLÜM 3: SIFATLARI BAHARATLANDIRMAK (Sehr ve Zu)",
            explanation: "Sıfatları tek başına kullanmak bazen yetmez. \"Pahalı\" yerine \"Çok pahalı\" veya \"Aşırı pahalı\" demek isteyebilirsin. Bunun için sıfatın hemen önüne iki sihirli kelimeden birini koyarız:\n\n1. **SEHR (Çok)** -> Olumlu veya tarafsız bir çokluk.\n2. **ZU (Aşırı / Fazla)** -> Genelde olumsuz bir abartı, şikayet durumu.",
            examples: [
                { de: "Das Auto ist sehr schnell.", tr: "Araba çok hızlı. (🔊 Das auto ist zea şnel.)" },
                { de: "Das Auto ist zu teuer!", tr: "Araba aşırı / haddinden fazla pahalı! (🔊 Das auto ist tsu toya!)" }
            ]
        },
        {
            id: "de-adj-dialogue",
            title: "🎬 BÖLÜM 4: KISA BİR DİYALOG (Ev Ararken)",
            explanation: "🏢 **Senaryo:** Almanya'da ev kiralayacaksın ve emlakçı (Lukas) ile bir evi geziyorsunuz. Önceki derste öğrendiğimiz \"Benim/Senin\" (mein/dein) kelimelerini de işin içine katıyoruz!\n\n**👨 Lukas:** Schau mal, das ist das Haus. Es ist sehr groß und neu! (Bak, bu ev. O çok büyük ve yeni!) 🔊 Şau mal, das ist das haus. Es ist zea groos unt noy!\n\n**👦 Sen:** Ja, das Haus ist schön. Aber ist es teuer? (Evet, ev güzel. Ama pahalı mı?) 🔊 Ya, das haus ist şön. Aba ist es toya?\n\n**👨 Lukas:** Nein, es ist billig. Und dein Zimmer ist sehr groß. (Hayır, ucuz. Ve senin odan çok büyük.) 🔊 Nayn, es ist bil-lih. Unt dayn tsima ist zea groos.\n\n**👦 Sen:** Super! Aber das Bad (Banyo) ist zu klein. (Süper! Ama banyo aşırı küçük.) 🔊 Zuper! Aba das baat ist tsu klayn.\n\n🚀 **KOÇUN SIFAT GÖREVİ (Şimdi Sen Niteliyorsun)**\nDostum, artık Almancada eşyaların ve insanların nasıl olduğunu en temiz şekilde anlatabiliyorsun! Şimdi tüm öğrendiklerimizi (Benim kelimesi + sein fiili + baharat + zıt sıfat) tek bir cümlede birleştirmeni istiyorum.\nBana şu cümleyi Almanca olarak kur ve yüksek sesle oku:\n\n*\"Benim arabam (das Auto) çok hızlıdır.\"*\n*(İpuçları: Benim arabam (das olduğu için e almaz) + ist + çok + hızlı)*",
            examples: []
        }
    ],
    exercises: [
        { question: "Das Buch ist ___ (pahalı).", options: ["billig", "teuer", "klein", "alt"], correct: 1, explanation: "Teuer = Pahalı. Billig = Ucuz." },
        { question: "Der Mann ist ___ (yaşlı).", options: ["jung", "alt", "neu", "groß"], correct: 1, explanation: "Alt = Yaşlı veya Eski anlamına gelir." },
        { question: "Mein Auto ist ___ (hızlı).", options: ["langsam", "schnell", "schmutzig", "kalt"], correct: 1, explanation: "Schnell = Hızlı." },
        { question: "Die Wohnung ist ___ (aydınlık).", options: ["dunkel", "hell", "klein", "groß"], correct: 1, explanation: "Hell = Aydınlık / Işıklı." },
        { question: "Wasser ist ___ (soğuk).", options: ["heiß", "kalt", "warm", "süß"], correct: 1, explanation: "Kalt = Soğuk." },
        { question: "Das Gegenteil von 'groß' ist ___.", options: ["alt", "klein", "gut", "teuer"], correct: 1, explanation: "Büyüğün (groß) zıttı küçüktür (klein)." },
        { question: "Kaffee ist ___ (sıcak).", options: ["kalt", "heiß", "billig", "langsam"], correct: 1, explanation: "Heiß = Çok sıcak." },
        { question: "Der Film ist ___ (sıkıcı).", options: ["interessant", "langweilig", "lustig", "kurz"], correct: 1, explanation: "Langweilig = Sıkıcı. Interessant = İlginç." },
        { question: "Die Tasche ist ___ (hafif).", options: ["schwer", "leicht", "groß", "klein"], correct: 1, explanation: "Leicht = Hem hafif hem kolay demektir." },
        { question: "Das Gegenteil von 'teuer' ist ___.", options: ["billig", "neu", "hell", "kurz"], correct: 0, explanation: "Pahalının (teuer) zıttı ucuzdur (billig)." }
    ]
};

// ===== UNIT 505: ARTIKEL (BELİRLİ VE BELİRSİZ ARTIKELLER) =====
const unit505Grammar: GermanGrammarUnit = {
    unitId: 505,
    title: "Artikeller (der, die, das / ein, eine)",
    rules: [
        {
            id: "de-art-def",
            title: "🎯 BÖLÜM 1: BELİRLİ ARTİKELLER (Bestimmte Artikel)",
            explanation: "Bunlar İngilizcedeki \"The\" kelimesinin karşılığıdır. Bilinen, belirli, daha önce bahsi geçmiş veya dünyada tek olan şeylerden bahsederken kullanılır (Örn: O araba çok hızlı).\n\nAlmancada 3 farklı cinsiyet (ve dolayısıyla 3 farklı belirli artikel) vardır:\n\n🚨 **KOÇUN HAYAT KURTARAN KURALI (ÇOĞULLAR):**\nKelimenin orijinal artikeli \"der, die veya das\" olabilir. Ama o kelime ÇOĞUL olduğu an (Arabalar, Masalar, Adamlar), artikeli otomatik olarak \"die\" ye dönüşür! Çoğulların tek patronu \"die\" dir.\n• das Auto (Araba) -> die Autos (Arabalar)\n• der Tisch (Masa) -> die Tische (Masalar)",
            table: {
                headers: ["Artikel", "Okunuşu 🔊", "Cinsiyet Temsili", "Hangi Kelimeler Alır?", "Örnek Kelime"],
                rows: [
                    ["der", "dea", "Erkek (Maskulin)", "Erkekler, günler, aylar, bazı nesneler", "der Mann (Adam), der Tisch (Masa)"],
                    ["die", "di", "Dişi (Feminin)", "Kadınlar, sonu -e ile biten çoğu nesne", "die Frau (Kadın), die Tasche (Çanta)"],
                    ["das", "das", "Nötr (Neutral)", "Bebekler, hayvan yavruları, bazı nesneler", "das Kind (Çocuk), das Auto (Araba)"]
                ]
            },
            examples: []
        },
        {
            id: "de-art-indef",
            title: "🎲 BÖLÜM 2: BELİRSİZ ARTİKELLER (Unbestimmte Artikel)",
            explanation: "Bunlar İngilizcedeki \"A / An\" (Bir) kelimesinin karşılığıdır. Bilinmeyen, rastgele, herhangi bir şeyden bahsederken kullanılır (Örn: Sokakta bir araba gördüm).\nBurada işimiz daha kolay çünkü sadece 2 seçeneğimiz var! Kelimenin orijinal \"der/die/das\" kimliğine bakarak \"Bir\" (ein/eine) kelimesini seçeriz:\n\n🛑 **MANTIK UYARISI:** \"Bir arabalar\" veya \"Bir masalar\" diyemeyeceğimiz için, Çoğul kelimelerin belirsiz artikeli YOKTUR! Çoğullarda \"ein/eine\" ASLA kullanılmaz. Sadece kelimenin kendisi söylenir (Örn: Ich sehe Autos = Arabalar görüyorum).",
            table: {
                headers: ["Orijinal Artikel", "Belirsiz Artikel (\"Bir\")", "Okunuşu 🔊", "Mantığı (Neden?)", "Örnek"],
                rows: [
                    ["der (Erkek)", "ein", "ayn", "Orijinalinde 'e' yok, dümdüz kalır.", "ein Tisch (Bir masa)"],
                    ["das (Nötr)", "ein", "ayn", "Orijinalinde 'e' yok, dümdüz kalır.", "ein Auto (Bir araba)"],
                    ["die (Dişi)", "eine", "aynö", "Orijinali 'die' olduğu için sonuna +e alır!", "eine Tasche (Bir çanta)"]
                ]
            },
            examples: []
        },
        {
            id: "de-art-compare",
            title: "🆚 BÖLÜM 3: KARŞILAŞTIRMA (Farkı Hisset)",
            explanation: "Hadi aynı kelimeyi hem belirli (Bilinen) hem de belirsiz (Herhangi bir) olarak cümlede kullanalım ki mantık tam otursun.\n\n**Senaryo 1: Erkek Kelime (der Apfel - Elma)**\n• 🔊 İh esse aynen apföl. -> Ben bir elma yiyorum. (Herhangi bir elma, masadaki elmalardan biri)\n• 🔊 İh esse den apföl. -> Ben (o) elmayı yiyorum. (Senin getirdiğin, belirli olan o elma)\n*(Not: 'der' ve 'ein' nesne durumunda 'den' ve 'einen' olur, bu sonraki konunun sürprizi ama mantığı anlaman için harika bir örnektir!)*\n\n**Senaryo 2: Nötr Kelime (das Buch - Kitap)**\n• Das ist ein Buch. -> 🔊 Das ist ayn buh. (Bu bir kitaptır. -> Genel bir bilgi)\n• Das Buch ist sehr gut! -> 🔊 Das buh ist zea gut! (O/Bu kitap çok iyidir! -> Belirli, okuduğum kitap)\n\n**Senaryo 3: Dişi Kelime (die Frau - Kadın)**\n• Da ist eine Frau. -> 🔊 Da ist aynö frau. (Orada bir kadın var. -> Tanımadığım biri)\n• Die Frau ist meine Mutter. -> 🔊 Di frau ist maynö muta. (O kadın benim annemdir. -> Belirli kişi)",
            examples: []
        },
        {
            id: "de-art-dialogue",
            title: "🎬 BÖLÜM 4: KISA BİR DİYALOG (Alışverişte)",
            explanation: "**👦 Sen:** Entschuldigung, ich brauche einen Stift. (Afedersiniz, bir kaleme ihtiyacım var.) 🔊 Entşuldigung, ih brauhö aynön ştift. (der Stift = Erkek)\n\n**👨 Satıcı:** Hier ist ein Stift. (İşte burada bir kalem var.) 🔊 Hia ist ayn ştift.\n\n**👦 Sen:** Nein, der Stift ist blau. Ich brauche einen roten Stift. (Hayır, bu/o kalem mavi. Benim kırmızı bir kaleme ihtiyacım var.) 🔊 Nayn, dea ştift ist blau. İh brauhö aynön rotön ştift.\n\n**👨 Satıcı:** Ah, okay. Und brauchen Sie auch eine Tasche? (Ah, tamam. Ve bir çantaya da ihtiyacınız var mı?) 🔊 A, okey. Unt brauhön zi auh aynö taşö? (die Tasche = Dişi)\n\n**👦 Sen:** Ja, danke. Die Tasche ist sehr schön! (Evet, teşekkürler. Bu/o çanta çok güzel!) 🔊 Ya, dankö. Di taşö ist zea şön!",
            examples: []
        }
    ],
    exercises: [
        { question: "Das ist ___ Haus (das).", options: ["der", "die", "das", "ein"], correct: 3, explanation: "Cümle tanıtım cümlesi (Bu bir...); Das Haus olduğu için 'ein' kullanılır." },
        { question: "Ich habe ___ Apfel (der).", options: ["ein", "eine", "einer", "einen"], correct: 3, explanation: "Akkusativ yapısıdır; 'haben' fiili der -> den / ein -> einen yapar." },
        { question: "Das ist ___ Blume (die).", options: ["ein", "eine", "einer", "eines"], correct: 1, explanation: "Die ismin belirsiz artikeli 'eine'dır." },
        { question: "___ Kinder (plural) spielen.", options: ["Der", "Die", "Das", "Ein"], correct: 1, explanation: "Çoğulların belirli artikeli her zaman 'die'dır." },
        { question: "Ist das ___ (bir) Buch (das)?", options: ["ein", "eine", "einer", "das"], correct: 0, explanation: "Das ismin belirsiz artikeli 'ein'dır." },
        { question: "___ Sonne (die) scheint.", options: ["Der", "Die", "Das", "Ein"], correct: 1, explanation: "Sonne tek ve belirgin olduğu için 'die Sonne' denir." },
        { question: "___ Hund (der) ist groß.", options: ["Der", "Die", "Das", "Ein"], correct: 0, explanation: "Cümle başında belirli bir köpekten bahsedilir: 'Der Hund'." },
        { question: "Das sind ___ (birkaç) Bücher (plural).", options: ["ein", "eine", "-", "keine"], correct: 2, explanation: "Çoğullarda 'bir' kelimesi (ein/eine) kullanılmaz." },
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
            title: "🚫 BÖLÜM 1: \"KEIN\" KULLANIMI (İsimleri Olumsuz Yapma)",
            explanation: "Kural çok basit: Eğer cümlede olumsuz yapacağın şey, başında \"ein / eine\" (bir) olan belirsiz bir nesneyse veya hiç artikeli olmayan genel bir isimse (Zaman, Su, Para gibi) **KEIN** kullanırsın.\n\n🎯 **KOÇUN MUAZZAM KISAYOLU:**\nHatırlarsan \"Bir\" demek için ein veya eine kullanıyorduk. Bunları olumsuz yapmak için tek yapman gereken başlarına bir \"k\" harfi koymaktır! (k + ein = kein).",
            table: {
                headers: ["Artikel (Olumlu)", "Olumsuz Hali (Yok / Değil)", "Okunuşu 🔊", "Örnek Cümle", "Okunuşu ve Anlamı"],
                rows: [
                    ["ein (der/das)", "kein", "kayn", "Das ist kein Auto.", "🔊 Das ist kayn auto. (Bu bir araba değil.)"],
                    ["eine (die)", "keine", "kaynö", "Das ist keine Katze.", "🔊 Das ist kaynö katsö. (Bu bir kedi değil.)"],
                    ["- (Çoğullar)", "keine", "kaynö", "Ich habe keine Kinder.", "🔊 İh habe kaynö kinda. (Benim çocuklarım yok.)"]
                ]
            },
            examples: [
                { de: "Ich habe keine Zeit.", tr: "Zamanım yok. (🔊 İh habe kaynö tsayt.) -> Haben (Sahip Olmak) ile Kullanımı" },
                { de: "Ich habe kein Geld.", tr: "Param yok. (🔊 İh habe kayn gelt.)" }
            ]
        },
        {
            id: "de-neg-nicht",
            title: "🛑 BÖLÜM 2: \"NICHT\" KULLANIMI (Fiil, Sıfat ve Özel İsimler)",
            explanation: "Eğer ortada \"bir (ein)\" nesne yoksa; yani bir sıfatı, bir eylemi (fiili) veya \"Benimki, Ahmet, O (der/die/das)\" gibi belirli/özel bir şeyi olumsuz yapıyorsan her zaman **NICHT** (niht diye okunur) kullanırsın! Bu İngilizcedeki \"Not\" kelimesinin tam karşılığıdır.\n\n**1. Sıfatları Olumsuz Yaparken (Hemen sıfatın önüne gelir):**\n• Das Auto ist schnell. (Araba hızlıdır.)\n• Das Auto ist nicht schnell. (Araba hızlı değildir.) 🔊 Das auto ist niht şnel.\n\n**2. Fiilleri/Eylemleri Olumsuz Yaparken (Genelde cümlenin sonuna gelir):**\n• Ich arbeite. (Ben çalışıyorum.)\n• Ich arbeite nicht. (Ben çalışmıyorum.) 🔊 İh arbaytö niht.\n\n**3. Özel İsimleri veya \"Benim/Senin\" Kelimelerini Olumsuz Yaparken:**\n• Das ist mein Buch. -> Das ist nicht mein Buch. (Bu benim kitabım değil.) 🔊 Das ist niht mayn buh.\n• Das ist Lukas. -> Das ist nicht Lukas. (Bu Lukas değil.)",
            examples: []
        },
        {
            id: "de-neg-compare",
            title: "🆚 BÖLÜM 3: BEYNE KAZIMA TABLOSU (Farkı Gör)",
            explanation: "Dostum, işte Almancanın bütün olumsuzluk sırrını çözen o meşhur karşılaştırma tablosu. İki cümleye de bak, mantığı hisset!",
            table: {
                headers: ["Durum", "KEIN (Nesneyi Yok Sayar)", "NICHT (Durumu Yok Sayar)"],
                rows: [
                    ["Araba Örneği", "Das ist kein Auto. (Bu bir araba değil, bu bir bisiklet!)", "Das Auto ist nicht neu. (O/Bu araba yeni değil, eski!)"],
                    ["Zaman Örneği", "Ich habe keine Zeit. (Zamanım yok, hiç vaktim yok!)", "Ich habe heute nicht gearbeitet. (Bugün çalışmadım - Eylem!)"],
                    ["Kişi Örneği", "Das ist keine Frau. (Bu bir kadın değil, bu bir adam!)", "Das ist nicht meine Frau! (Bu benim karım değil! - Belirli Kişi)"]
                ]
            },
            examples: []
        },
        {
            id: "de-neg-dialogue",
            title: "🎬 BÖLÜM 4: KISA BİR DİYALOG (Polis Çevirmesinde)",
            explanation: "👮 **Senaryo:** Almanya'da arabayla gidiyorsun ve polis seni durdurdu.\n\n**👮‍♂️ Polis:** Guten Tag! Ist das Ihr Auto? 🔊 Gutön taag! İst das ia auto? (İyi günler! Bu sizin (kibar) arabanız mı? -> Belirli bir sahiplik)\n\n**👦 Sen:** Nein, das ist nicht mein Auto. Es ist das Auto von meinem Freund. 🔊 Nayn, das ist niht mayn auto. Es ist das auto fon maynöm froynt. (Hayır, bu benim arabam değil. O, arkadaşımın arabası. -> Sahipliği inkar ettin -> nicht)\n\n**👮‍♂️ Polis:** Haben Sie ein Problem? 🔊 Habön zi ayn problem? (Bir probleminiz mi var?)\n\n**👦 Sen:** Nein, ich habe kein Problem. Aber mein Freund fährt nicht schnell. Er ist sehr langsam! 🔊 Nayn, ih habe kayn problem. Aba mayn froynt fert niht şnel. Ee ist zea lang-zam! (Hayır, hiçbir problemim yok [Problem isimdir -> kein]. Ama arkadaşım hızlı sürmüyor [Hızlı sıfattır -> nicht]. O çok yavaş!)\n\n🚀 **KOÇUN \"HAYIR!\" GÖREVİ (Senin Sıran)**\nDostum, artık nerede neye \"Hayır / Yok\" diyeceğini kusursuzca biliyorsun! Şimdi öğrendiğin bu iki kuralı test etme vakti. Bana şu iki cümleyi Almanca olarak kur ve yüksek sesle oku:\n\n*1. \"Bu bir kitap (ein Buch) değil.\"* -> (İpucu: 'ein' kelimesinin başına ne geliyordu?)\n*2. \"Kitap (das Buch) iyi (gut) değil.\"* -> (İpucu: 'İyi' bir sıfattır, sıfatları neyle olumsuz yapıyorduk?)",
            examples: []
        }
    ],
    exercises: [
        { question: "Das ist ___ Auto (das).", options: ["nicht", "kein", "keine", "nichts"], correct: 1, explanation: "Önünde 'ein' gelebilecek tekil bir ismi olumsuz yaparken 'kein' kullanılır." },
        { question: "Ich komme ___.", options: ["nicht", "kein", "keine", "keiner"], correct: 0, explanation: "Fiilleri olumsuz yapmak için 'nicht' kullanılır." },
        { question: "Er ist ___ nett.", options: ["kein", "keine", "nicht", "nichts"], correct: 2, explanation: "Sıfatları (nett) olumsuz yapmak için 'nicht' kullanılır." },
        { question: "Ich habe ___ Zeit (die).", options: ["nicht", "kein", "keine", "nichts"], correct: 2, explanation: "'Zeit' (die) ismi artikelsiz kullanıldığı için 'keine' ile olumsuzlanır." },
        { question: "Das ist ___ (benim) Buch.", options: ["nicht mein", "kein mein", "meine değil", "nicht"], correct: 0, explanation: "İyelik artikelleri (mein, dein...) 'nicht' ile olumsuzlanır." },
        { question: "Wir essen ___.", options: ["kein", "keine", "nicht", "nichts"], correct: 2, explanation: "Eylemi (fiili) olumsuz yapmak için 'nicht' kullanılır." },
        { question: "Hast du Hunger? Nein, ___.", options: ["nicht", "keinen Hunger", "kein", "nichts"], correct: 1, explanation: "Hunger (der) ismi için 'keinen' kullanılır (Akkusativ)." },
        { question: "Das ist ___ (bir) Blume (die).", options: ["nicht", "kein", "keine", "nichts"], correct: 2, explanation: "'Blume' dişil bir isimdir, 'keine' kullanılır." },
        { question: "Sie trinkt ___ Wasser.", options: ["nicht", "kein", "keine", "nichts"], correct: 1, explanation: "Artikelsiz (belirsiz) isimlerde 'kein' kullanılır." },
        { question: "Das Buch ist ___ teuer.", options: ["kein", "nicht", "keine", "nichts"], correct: 1, explanation: "Sıfatları (teuer) olumsuz yaparken 'nicht' kullanılır." }
    ]
};

// ===== UNIT 507: PRÄPOSITIONEN AM, UM, IM (ZAMAN EDATLARI) =====
const unit507Grammar: GermanGrammarUnit = {
    unitId: 507,
    title: "Zaman Edatları (am, um, im)",
    rules: [
        {
            id: "de-prep-um",
            title: "🎯 BÖLÜM 1: \"UM\" KULLANIMI (Nokta Atışı Saatler)",
            explanation: "**Kural:** En dar ve en kesin zaman dilimidir. Sadece ve sadece SAATLERDE kullanılır. Türkçedeki \"... saatinde / ...-te, -ta\" ekidir.\n\n• Saat 8'de -> um 8 Uhr (🔊 um aht ua)\n• Saat 14:30'da -> um 14:30 Uhr (🔊 um fiyatsen ua draysih)",
            examples: [
                { de: "Der Unterricht beginnt um 9 Uhr.", tr: "Ders saat 9'da başlıyor. (🔊 Dea untariht begint um noyn ua.)" }
            ]
        },
        {
            id: "de-prep-am",
            title: "📅 BÖLÜM 2: \"AM\" KULLANIMI (Günler ve Günün Bölümleri)",
            explanation: "**Kural:** Saatlerden biraz daha geniş bir zaman dilimine, yani 24 saatlik periyotlara çıktığımızda **am** kullanırız. Haftanın günlerinde, tarihlerde ve günün bölümlerinde (sabah, akşam) bu edat devreye girer.\n\n**1. Haftanın Günleri:**\n• am Montag (Pazartesi günü) -> 🔊 am mon-taag\n• am Freitag (Cuma günü) -> 🔊 am fray-taag\n• am Wochenende (Hafta sonu) -> 🔊 am vohön-endö\n\n**2. Günün Bölümleri:**\n• am Morgen (Sabahleyin) -> 🔊 am morgön\n• am Nachmittag (Öğleden sonra) -> 🔊 am nah-mit-taag\n• am Abend (Akşamleyin) -> 🔊 am abönt\n\n🚨 **KOÇUN BÜYÜK İSTİSNASI (Bunu Sınavlarda Hep Sorarlar!):**\nGünün bütün bölümleri \"am\" alır ama GECE (Nacht) kelimesi bu kuralı bozar! Geceleyin demek için \"am Nacht\" DENMEZ.\n👉 in der Nacht (Geceleyin) -> 🔊 in dea naht",
            examples: []
        },
        {
            id: "de-prep-im",
            title: "🌍 BÖLÜM 3: \"IM\" KULLANIMI (Aylar ve Mevsimler)",
            explanation: "**Kural:** En geniş zaman dilimleridir. Günlerden daha büyük olan her şeyde, yani Aylarda, Mevsimlerde ve Yıllarda \"im\" kullanırız.\n\n**1. Aylar:**\n• im Januar (Ocak ayında) -> 🔊 im yanua\n• im August (Ağustos ayında) -> 🔊 im auguzt\n\n**2. Mevsimler:**\n• im Sommer (Yazın) -> 🔊 im zoma\n• im Winter (Kışın) -> 🔊 im vinta",
            examples: [
                { de: "Mein Geburtstag ist im Mai.", tr: "Benim doğum günüm Mayıs ayında. (🔊 Mayn göburtz-taag ist im may.)" }
            ]
        },
        {
            id: "de-prep-compare",
            title: "🆚 BÖLÜM 4: BEYNE KAZIMA TABLOSU (Büyüklük Sırasıyla)",
            explanation: "Dostum, işte o meşhur Alman mantığı. Tabloya yukarıdan aşağıya bak, zamanın nasıl genişlediğini hisset!",
            table: {
                headers: ["Edat", "Zamanın Büyüklüğü", "Nelerde Kullanılır?", "Örnekler"],
                rows: [
                    ["UM", "🎯 Nokta Atışı", "Sadece Saatler", "um 10 Uhr (Saat 10'da)"],
                    ["AM", "📅 24 Saatlik", "Günler, Günün bölümleri", "am Dienstag (Salı), am Morgen (Sabah)"],
                    ["IM", "🌍 Geniş Zaman", "Aylar, Mevsimler", "im Sommer (Yazın), im März (Martta)"]
                ]
            },
            examples: []
        },
        {
            id: "de-prep-dialogue",
            title: "🎬 BÖLÜM 5: KISA BİR DİYALOG (Randevu Ayarlama)",
            explanation: "📅 **Senaryo:** Alman arkadaşın Lukas ile kahve içmek için plan yapıyorsun. Bütün edatları aynı diyalogda birleştirelim!\n\n**👨 Lukas:** Hallo! Hast du Zeit? Trinken wir einen Kaffee? 🔊 Halo! Hast du tsayt? Trinkön via aynön kafe? (Selam! Zamanın var mı? Bir kahve içelim mi?)\n\n**👦 Sen:** Gerne! Wann? Am Wochenende? 🔊 Gernö! Van? Am vohön-endö? (Memnuniyetle! Ne zaman? Hafta sonu (am) mu?)\n\n**👨 Lukas:** Nein, ich arbeite am Wochenende. Hast du am Mittwoch Zeit? 🔊 Nayn, ih arbaytö am vohön-endö. Hast du am mit-voh tsayt? (Hayır, ben hafta sonu çalışıyorum. Çarşamba günü (am) zamanın var mı?)\n\n**👦 Sen:** Ja, am Mittwoch ist super. Um wie viel Uhr? 🔊 Ya, am mit-voh ist zuper. Um vi fiil ua? (Evet, Çarşamba süper. Saat kaçta?)\n\n**👨 Lukas:** Um 15 Uhr? Am Nachmittag. 🔊 Um fümpf-tsen ua? Am nah-mit-taag. (Saat 15'te (um)? Öğleden sonra (am).)\n\n**👦 Sen:** Perfekt. Bis dann! 🔊 Perfekt. Bis dan! (Mükemmel. Görüşürüz!)\n\n🚀 **KOÇUN AJANDA GÖREVİ (Planı Sen Yapıyorsun)**\nDostum, artık Almanlar gibi saniyesi saniyesine plan yapmayı öğrendin! Nereye \"am\", nereye \"um\" geleceğini şıp diye biliyorsun. Şimdi senden tek bir cümle içinde iki edatı birden kullanmanı istiyorum.\nBana şu cümleyi Almanca olarak kur ve yüksek sesle oku:\n\n*\"Ben Pazartesi günü (Montag) saat 8'de (8 Uhr) çalışıyorum (arbeite).\"*\n*(İpuçları: Ich arbeite + [Pazartesi edatı] Montag + [Saat edatı] 8 Uhr.)*",
            examples: []
        }
    ],
    exercises: [
        { question: "Ich komme ___ Montag.", options: ["am", "um", "im", "in"], correct: 0, explanation: "Günler için 'am' kullanılır." },
        { question: "Der Film ist ___ 20 Uhr.", options: ["am", "um", "im", "in"], correct: 1, explanation: "Saatler için 'um' kullanılır." },
        { question: "Wir fahren ___ Sommer.", options: ["am", "um", "im", "in"], correct: 2, explanation: "Mevsimler için 'im' kullanılır." },
        { question: "Mein Geburtstag ist ___ März.", options: ["am", "um", "im", "in"], correct: 2, explanation: "Aylar için 'im' kullanılır." },
        { question: "___ Abend bin ich zu Hause.", options: ["Am", "Um", "Im", "In"], correct: 0, explanation: "Günün bölümleri (istisnalar hariç) 'am' alır." },
        { question: "Es ist ___ Mitternacht.", options: ["am", "um", "im", "in"], correct: 1, explanation: "Gece yarısı (saat bazlı bir nokta) 'um' ile kullanılır." },
        { question: "___ Vormittag arbeite ich.", options: ["Am", "Um", "Im", "In"], correct: 0, explanation: "Günün bölümleri için 'am' kullanılır." },
        { question: "Das Fest ist ___ Dezember.", options: ["am", "um", "im", "in"], correct: 2, explanation: "Aylar için 'im' kullanılır." },
        { question: "___ Wochenende habe ich frei.", options: ["Am", "Um", "Im", "In"], correct: 0, explanation: "Hafta sonu (Wochenende) için 'am' kullanılır." },
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
            title: "👑 BÖLÜM 1: ÇOĞULLARIN TEK PATRONU (\"die\")",
            explanation: "Kelimeleri tekil olarak öğrenirken \"der Tisch (masa), das Auto (araba), die Tasche (çanta)\" diye 3 farklı artikel ezberlemiştik.\n\n🎯 **ALTIN KURAL:** Kelimenin orijinal artikeli ne olursa olsun, o kelime ÇOĞUL olduğu an artikeli otomatik olarak \"die\" ye dönüşür! Çoğul dünyasının tek patronu \"die\"dir.\n• der Tisch (Masa) -> die Tische (Masalar)\n• das Auto (Araba) -> die Autos (Arabalar)\n• die Frau (Kadın) -> die Frauen (Kadınlar)\n\n🚫 **BÜYÜK TUZAK (ein/eine):** Hatırlarsan \"Bir\" demek için ein/eine kullanıyorduk. \"Bir arabalar\" diyemeyeceğin için, çoğul kelimelerin önüne ASLA ein/eine gelmez! Ya sadece kelimeyi söylersin (Autos) ya da \"die Autos\" (O arabalar) dersin.",
            examples: []
        },
        {
            id: "de-plural-types",
            title: "🧱 BÖLÜM 2: 5 FARKLI ÇOĞUL EKİ (Lego Parçaları)",
            explanation: "Almancada kelimelerin sonuna gelen 5 farklı çoğul eki vardır. Bazen de kelimenin içindeki sesli harf noktalanır (a -> ä, o -> ö, u -> ü). Buna **Umlaut** denir.\nİşte en çok karşılaşacağın 5 grup:\n\n**1. Sadece \"-e\" Ekleyenler (En Yaygın Grup)**\nGenellikle \"der\" ve \"das\" artikelli kelimeler bu eği alır. Bazen içindeki harf noktalanır.\n• der Hund (Köpek) -> die Hunde (🔊 di hundö) = Köpekler\n• der Tisch (Masa) -> die Tische (🔊 di tişö) = Masalar\n• der Stuhl (Sandalye) -> die Stühle (🔊 di ştülö) = Sandalyeler (Dikkat: u, ü oldu!)\n\n**2. \"-er\" Ekleyenler (Bebekler ve Eşyalar)**\nGenellikle \"das\" artikelli kısa kelimeler bu eği alır ve içindeki harf hep noktalanır.\n• das Kind (Çocuk) -> die Kinder (🔊 di kinda) = Çocuklar\n• das Buch (Kitap) -> die Bücher (🔊 di büha) = Kitaplar\n• der Mann (Adam) -> die Männer (🔊 di mena) = Adamlar\n\n**3. \"-n\" veya \"-en\" Ekleyenler (Kadınların Grubu)**\nEğer kelime \"die\" artikeline sahipse ve sonu \"e\" ile bitiyorsa %99 bu eği alır!\n• die Frau (Kadın) -> die Frauen (🔊 di frau-ön) = Kadınlar\n• die Tasche (Çanta) -> die Taschen (🔊 di taşön) = Çantalar\n• die Blume (Çiçek) -> die Blumen (🔊 di blumön) = Çiçekler\n\n**4. \"-s\" Ekleyenler (Yabancılar Grubu)**\nİngilizceden, Fransızcadan gelen veya sonu a, i, o, u ile biten kelimeler bu eği alır.\n• das Auto (Araba) -> die Autos (🔊 di autos) = Arabalar\n• das Sofa (Kanepe) -> die Sofas (🔊 di zofas) = Kanepeler\n• das Hotel (Otel) -> die Hotels (🔊 di hotels) = Oteller\n\n**5. Hiç Ek Almayanlar (Hayalet Grup)**\nKelimenin sonu zaten -er, -en, -el ile bitiyorsa, sonuna bir daha ek getirilmez. Çoğul olduğunu sadece başındaki \"die\" artikelinden anlarız! (Bazen içindeki harf noktalanır).\n• der Lehrer (Öğretmen) -> die Lehrer (🔊 di lera) = Öğretmenler (Ek yok!)\n• der Apfel (Elma) -> die Äpfel (🔊 di epföl) = Elmalar (Sadece a, ä oldu)\n• das Fenster (Pencere) -> die Fenster (🔊 di fensta) = Pencereler",
            examples: []
        },
        {
            id: "de-plural-table",
            title: "🆚 BÖLÜM 3: BEYNE KAZIMA TABLOSU (Toplu Bakış)",
            explanation: "",
            table: {
                headers: ["Çoğul Eki", "Hangi Kelimeler?", "Tekil Örnek (Okunuşu)", "Çoğul Hali (Okunuşu) 🔊"],
                rows: [
                    ["-e", "Çoğu 'der' ve 'das'", "der Tisch (tiş)", "die Tische (tişö)"],
                    ["-er", "Kısa 'das' kelimeleri", "das Kind (kint)", "die Kinder (kinda)"],
                    ["-(e)n", "Neredeyse tüm 'die'ler", "die Tasche (taşö)", "die Taschen (taşön)"],
                    ["-s", "Yabancı / Sesli harfle biten", "das Auto (auto)", "die Autos (autos)"],
                    ["Yok (-)", "Sonu -er, -en, -el bitenler", "der Lehrer (lera)", "die Lehrer (lera)"]
                ]
            },
            examples: []
        },
        {
            id: "de-plural-dialogue",
            title: "🎬 BÖLÜM 4: KISA BİR DİYALOG (Ofis Siparişi)",
            explanation: "🏢 **Senaryo:** Ofis için malzeme sipariş ediyorsun. Tekiller ve çoğullar havada uçuşuyor!\n\n**👦 Sen:** Hallo. Ich brauche einen Tisch und einen Stuhl. 🔊 Halo. İh brauhö aynön tiş unt aynön ştuul. (Merhaba. Benim bir masaya ve bir sandalyeye ihtiyacım var.)\n\n**👨 Satıcı:** Nur einen? Wir haben sehr gute Tische und Stühle! 🔊 Nua aynön? Via habön zea gutö tişö unt ştülö! (Sadece bir tane mi? Bizim çok iyi masalarımız ve sandalyelerimiz var! -> Çoğul kullandığı için ein yok!)\n\n**👦 Sen:** Okay. Dann brauche ich drei Tische und fünf Stühle. Haben Sie auch Computer? 🔊 Okey. Dan brauhö ih dray tişö unt fünf ştülö. Habön zi auh kompyuta? (Tamam. O zaman üç masa ve beş sandalyeye ihtiyacım var. Bilgisayarlarınız [Computer: Ek almayan grup] da var mı?)\n\n**👨 Satıcı:** Ja, die Computer sind hier. 🔊 Ya, di kompyuta zint hia. (Evet, bilgisayarlar burada.)\n\n🚀 **KOÇUN KLONLAMA GÖREVİ (Şimdi Sen Çoğaltıyorsun)**\nDostum, Almancada isimleri nasıl çoğaltacağını ve başlarına \"die\" getireceğini çok iyi anladın! Şimdi sana tekil bir cümle veriyorum. Senden bunu tamamen çoğul bir cümleye çevirmeni istiyorum.\n\n*Tekil Cümle: Das ist ein Buch. (Bu bir kitaptır.)*\n*(Hatırlatma: 'ein' kelimesi çoğullarda buharlaşıp yok olur! Buch kelimesi \"-er\" grubundandır ve noktalanır.)*\n\n**Görevin:** Bu cümleyi \"Bunlar kitaplardır.\" (Das sind ...) şeklinde Almanca kur ve yüksek sesle oku!",
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
            id: "de-syntax-pos2",
            title: "👑 BÖLÜM 1: ALTIN KURAL (Position 2)",
            explanation: "Almancada düz bir cümle kurarken, zamanı ve mekanı ne kadar değiştirirsen değiştir, tek bir kural ASLA değişmez:\n\n🎯 **Çekimlenmiş fiil HER ZAMAN 2. SIRADA (Position 2) yer alır!**\n\n**Lego Formülü (Standart Cümle):**\n1. ÖZNE (Kim?) + 2. FİİL (Eylem) + 3. ZAMAN (Ne zaman?) + 4. NESNE (Ne?)\n\n• Ich + lerne + heute + Deutsch.\n• 🔊 İh lernö hoytö doytş.\n• (Ben bugün Almanca öğreniyorum.)\n\nGördüğün gibi, \"lerne\" (öğreniyorum) fiili kral tahtına, yani 2. sıraya oturdu!",
            examples: []
        },
        {
            id: "de-syntax-inverse",
            title: "🔀 BÖLÜM 2: YER DEĞİŞTİRME SİHRİ (Zamanı Başa Almak)",
            explanation: "İşte Alman mantığının en havalı kısmına geldik! Diyelim ki vurguyu değiştirmek istedin ve \"Ben bugün...\" demek yerine \"BUGÜN, ben...\" diye cümleye başlamak istedin.\n\n• **Türkçede:** Bugün ben Almanca öğreniyorum. (Fiil yine sonda).\n• **Almancada:** Zamanı (Heute) 1. sıraya koyarsan, Fiil (lerne) YİNE 2. SIRADA KALMAK ZORUNDADIR! Bu yüzden fiil ile özne yer değiştirir.\n\n**Lego Formülü (Zaman Başta):**\n1. ZAMAN + 2. FİİL + 3. ÖZNE + 4. NESNE\n\n• Heute + lerne + ich + Deutsch.\n• 🔊 Hoytö lernö ih doytş.\n• (Bugün öğreniyorum ben Almanca.) -> Türkçeye çevirince devrik gibi dursa da, Almancada en doğru, en kusursuz ve en yaygın cümle yapısı budur!",
            examples: []
        },
        {
            id: "de-syntax-table",
            title: "🆚 BÖLÜM 3: BEYNE KAZIMA TABLOSU (Fiilin Tahtı)",
            explanation: "Aşağıdaki tabloya çok iyi bak koç. 1. sıraya ne gelirse gelsin, 2. sıradaki \"Kral\" asla yerinden kımıldamıyor!\n\n🚨 **KOÇUN DİKKAT KÖŞESİ (Büyük Tuzak!):**\n2. Sıra demek, illa \"2. kelime\" demek değildir! 2. SIRA, \"2. Öge (Blok)\" demektir.\nÖrneğin; Mein Bruder (Benim erkek kardeşim) iki kelimedir ama tek bir öznedir (1. Sıra).\n• Mein Bruder (1) + lernt (2) + Deutsch (3). -> DOĞRU! ✅",
            table: {
                headers: ["1. Sıra (Position 1)", "2. Sıra (POSITION 2)", "3. Sıra (Position 3)", "4. Sıra (Position 4)", "Anlamı"],
                rows: [
                    ["Ich (Ben)", "spiele (oynuyorum)", "am Sonntag (Pazar günü)", "Fußball (futbol).", "Ben Pazar günü futbol oynuyorum."],
                    ["Am Sonntag (Pazar günü)", "spiele (oynuyorum)", "ich (ben)", "Fußball (futbol).", "Pazar günü futbol oynuyorum ben."],
                    ["Fußball (Futbol)", "spiele (oynuyorum)", "ich (ben)", "am Sonntag (Pazar günü).", "Futbol oynuyorum ben Pazar günü."]
                ]
            },
            examples: []
        },
        {
            id: "de-syntax-questions",
            title: "❓ BÖLÜM 4: SORU CÜMLELERİ (Fiil 1. Sıraya Geçerse Ne Olur?)",
            explanation: "Düz cümlelerde fiil 2. sıradadır. Peki \"Sen Almanca öğreniyor musun?\" diye Evet/Hayır sorusu soracaksak ne yapacağız?\nÇok basit: **Fiili 1. sıraya, cümlenin en başına fırlatacaksın!**\n\n• **Düz:** Du lernst Deutsch. (Sen Almanca öğreniyorsun.)\n• **Soru:** Lernst du Deutsch? (Sen Almanca öğreniyor musun?) 🔊 Lernst du doytş?\n• **Cevap:** Ja, ich lerne Deutsch. (Evet, ben Almanca öğreniyorum.)",
            examples: []
        },
        {
            id: "de-syntax-dialogue",
            title: "🎬 BÖLÜM 5: KISA BİR DİYALOG (Hafta Sonu Planı)",
            explanation: "📅 **Senaryo:** Alman arkadaşın Lukas ile plan yapıyorsun. Cümlelerin dizilişine dikkat et!\n\n**👨 Lukas:** Hallo! Spielst du am Samstag Fußball? 🔊 Halo! Şpiilst du am zamstaag fusbal? (Selam! Cumartesi günü futbol oynuyor musun? -> Fiil başta = Soru)\n\n**👦 Sen:** Nein, ich arbeite am Samstag. 🔊 Nayn, ih arbaytö am zamstaag. (Hayır, ben Cumartesi günü çalışıyorum. -> Özne 1. sırada, Fiil 2. sırada)\n\n**👨 Lukas:** Schade! Und am Sonntag? Hast du Zeit? 🔊 Şaadö! Unt am zontaag? Hast du tsayt? (Yazık/Tüh! Peki Pazar günü? Zamanın var mı? -> Fiil başta = Soru)\n\n**👦 Sen:** Ja! Am Sonntag habe ich Zeit. 🔊 Ya! Am zontaag habö ih tsayt. (Evet! Pazar günü zamanım var. -> Zaman 1. sırada, Fiil 2. sırada, Özne 3. sıraya kaçtı!)\n\n🚀 **KOÇUN MÜHENDİSLİK GÖREVİ (Cümleyi Sen İnşa Ediyorsun)**\nDostum, fiilin 2. sıradaki o sarsılmaz tahtını mükemmel bir şekilde anladın. Şimdi senden bu kuralı uygulamanı istiyorum.\nSana standart bir cümle veriyorum:\n👉 Ich trinke am Morgen Kaffee. (Ben sabahleyin kahve içiyorum.)\n*(İpuçları: trinke = içiyorum, am Morgen = sabahleyin)*\n\n**GÖREVİN:** Bu cümleyi \"Sabahleyin\" (Am Morgen) ile başlatarak yeniden kur ve sesli oku! (Unutma, fiil yerinden kıpırdamaz, özne kaçar!)",
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
            id: "de-w-questions-intro",
            title: "❓ BÖLÜM 1: BİLGİ SORULARI (W-Fragen / W-Soruları)",
            explanation: "Bunlar Türkçedeki \"5N1K\" sorularıdır. Almancada bütün soru kelimeleri \"W\" harfiyle başladığı için bunlara \"W-Fragen\" denir.\nÖnce cephaneliğimizi, yani W-kelimelerini yüksek sesle okuyarak ezberleyelim:\n\n🎯 **ALTIN KURAL (Fiilin Tahtı Korunuyor):**\nHatırlarsan düz cümlede fiil 2. sıradaydı. W-Sorularında da kural DEĞİŞMEZ!\n1. sıraya W-Kelimesini koyarsın, 2. sıraya FİİLİ çakarsın, 3. sıraya da Özneyi (Kim?) atarsın.\n**Lego Formülü:** W-Kelimesi (1) + FİİL (2) + Özne (3)",
            table: {
                headers: ["W-Kelimesi", "Okunuşu 🔊", "Türkçe Anlamı", "Kullanım Örneği (Türkçe Mantığı)"],
                rows: [
                    ["Was?", "vas", "Ne?", "Ne yapıyorsun?"],
                    ["Wer?", "vea", "Kim?", "O adam kim?"],
                    ["Wo?", "vo", "Nerede?", "Nerede yaşıyorsun?"],
                    ["Woher?", "vo-hea", "Nereden?", "Nereden geliyorsun?"],
                    ["Wann?", "van", "Ne zaman?", "Ne zaman çalışıyorsun?"],
                    ["Wie?", "vi", "Nasıl?", "Nasılsın?"],
                    ["Warum?", "va-rum", "Neden / Niçin?", "Neden gülüyorsun?"]
                ]
            },
            examples: [
                { de: "Was machst du?", tr: "Sen ne yapıyorsun? (🔊 Vas mahst du?)" },
                { de: "Woher kommst du?", tr: "Sen nereden geliyorsun? (🔊 Vo-hea komst du?)" },
                { de: "Wann arbeitet er?", tr: "O ne zaman çalışıyor? (🔊 Van arbaytöt ea?)" }
            ]
        },
        {
            id: "de-ja-nein-questions",
            title: "⚖️ BÖLÜM 2: EVET/HAYIR SORULARI (Ja/Nein Fragen)",
            explanation: "Eğer karşındakinden detaylı bilgi istemiyorsan, sadece \"Gidiyor musun? Kahve içer misin? Yoruldun mu?\" gibi Evet (Ja) veya Hayır (Nein) cevabı bekliyorsan, işin içine hiçbir W-Kelimesi sokmazsın.\n\n🎯 **ALTIN KURAL (Fiili Başa Fırlat!):**\nDüz cümlenin en başındaki özneyi alıp fiille yer değiştirirsin. Yani FİİL 1. SIRAYA, EN BAŞA GEÇER!\n**Lego Formülü:** FİİL (1) + Özne (2) + Gerisi...\n\n**Adım Adım Dönüşüm:**\n• **Düz Cümle:** Du trinkst Kaffee. (Sen kahve içiyorsun. -> Fiil 2. sırada)\n• **Soru Hali:** Trinkst du Kaffee? (Sen kahve içiyor musun? -> Fiil en başta!) 🔊 Trinkst du kafe?\n• **Cevap:** Ja! (Evet!) Veya Nein! (Hayır!)",
            examples: [
                { de: "Lernst du Deutsch?", tr: "Almanca öğreniyor musun? (🔊 Lernst du doytş?)" },
                { de: "Bist du müde?", tr: "Yorgun musun? (🔊 Bist du müde?)" }
            ]
        },
        {
            id: "de-verb-movement-table",
            title: "🆚 BÖLÜM 3: BEYNE KAZIMA TABLOSU (Fiilin Hareketi)",
            explanation: "Koç, şu tabloya bakınca Almancanın bütün mekaniğini tepeden göreceksin. Fiilin (Kralın) nasıl hareket ettiğine dikkat et!",
            table: {
                headers: ["Cümle Türü", "1. Sıra (Position 1)", "2. Sıra (Position 2)", "3. Sıra (Position 3)", "Anlamı"],
                rows: [
                    ["Düz Cümle", "Du (Sen)", "wohnst (yaşıyorsun)", "in Berlin.", "Sen Berlin'de yaşıyorsun."],
                    ["W-Sorusu", "Wo (Nerede)", "wohnst (yaşıyorsun)", "du? (sen)", "Nerede yaşıyorsun sen?"],
                    ["Ja/Nein", "Wohnst (Yaşıyor)", "du (sen)", "in Berlin?", "Berlin'de yaşıyor musun sen?"]
                ]
            },
            examples: []
        },
        {
            id: "de-questions-dialogue",
            title: "🎬 BÖLÜM 4: KISA BİR DİYALOG (Sokakta Tanışma)",
            explanation: "🏙️ **Senaryo:** Sokakta biriyle tanışıyorsun. Sorular havada uçuşuyor! (Okurken fiilin nerede olduğuna dikkat et).\n\n**👦 Sen:** Hallo! Wie heißt du? 🔊 Halo! Vi hayst du? (Merhaba! Adın ne? / Nasıl adlandırılırsın? -> W-Sorusu: Fiil 2. sırada)\n\n**👩 Anna:** Ich heiße Anna. Und du? Wer bist du? 🔊 İh haysö Anna. Unt du? Vea bist du? (Benim adım Anna. Ya sen? Sen kimsin? -> W-Sorusu)\n\n**👦 Sen:** Ich bin Yiğithan. Woher kommst du, Anna? 🔊 İh bin Yiğithan. Vo-hea komst du, Anna? (Ben Yiğithan. Nereden geliyorsun Anna? -> W-Sorusu)\n\n**👩 Anna:** Ich komme aus Deutschland. Lernst du Deutsch? 🔊 İh komö aus doytşlant. Lernst du doytş? (Ben Almanya'dan geliyorum. Sen Almanca öğreniyor musun? -> Ja/Nein Sorusu: Fiil 1. sırada!)\n\n**👦 Sen:** Ja, ich lerne Deutsch! Trinken wir einen Kaffee? 🔊 Ya, ih lernö doytş! Trinkön via aynön kafe? (Evet, Almanca öğreniyorum! Bir kahve içelim mi? -> Ja/Nein Sorusu)\n\n🚀 **KOÇUN SORGU GÖREVİ (Dedektif Sensin)**\nDostum, soruların mantığını da cebe indirdik! Fiili ne zaman 2. sırada tutacağını, ne zaman başa fırlatacağını çok iyi biliyorsun. Şimdi senden bu iki kuralı da test edeceğim iki cümle kurmanı istiyorum:\n\n*1. \"Nerede çalışıyorsun?\"* -> (İpucu: Nerede (Wo) + çalışıyorsun (arbeitest) + sen (du))\n*2. \"Çalışıyor musun?\"* -> (İpucu: Sadece evet/hayır bekliyorum, fiili başa fırlat!)",
            examples: []
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
            title: "🦵 BÖLÜM 1: VÜCUT BÖLÜMLERİ SÖZLÜĞÜ (Körperteile)",
            explanation: "Sana en çok ağrıyan, en temel bölgeleri seçtim. Bunları aynaya bakarak ve yüksek sesle okuyarak çalış koç!",
            table: {
                headers: ["Artikel + Kelime", "Okunuşu 🔊", "Türkçe Anlamı", "Çoğul Hali (Çok Önemli!)"],
                rows: [
                    ["der Kopf", "dea kopf", "Baş / Kafa", "die Köpfe (di köpfö)"],
                    ["der Bauch", "dea bauh", "Karın / Mide", "die Bäuche (di boyhö)"],
                    ["der Rücken", "dea rükön", "Sırt", "die Rücken (di rükön)"],
                    ["der Hals", "dea hals", "Boğaz / Boyun", "die Hälse (di helzö)"],
                    ["der Arm", "dea arm", "Kol", "die Arme (di armö)"],
                    ["das Bein", "das bayn", "Bacak", "die Beine (di baynö)"],
                    ["das Auge", "das augö", "Göz", "die Augen (di augön)"],
                    ["das Ohr", "das oa", "Kulak", "die Ohren (di orön)"],
                    ["die Hand", "di hant", "El", "die Hände (di hendö)"],
                    ["die Nase", "di nazö", "Burun", "die Nasen (di nazön)"]
                ]
            },
            examples: []
        },
        {
            id: "de-pain-wehtun",
            title: "🤕 BÖLÜM 2: 1. AĞRI YÖNTEMİ (Wehtun - Ağrımak/Acımak)",
            explanation: "Almancada \"Ağrıyor\" demenin en yaygın yolu \"wehtun\" fiilidir. Ama bu fiil çok tuhaftır; ortadan ikiye ayrılır! Cümle kurarken \"weh\" kelimesini koparıp cümlenin EN SONUNA fırlatırız!\n\n🎯 **ALTIN KURAL (Tekil mi, Çoğul mu?):**\nHatırlarsan \"Benim\" derken mein veya meine kullanıyorduk.\n• Ağrıyan yerin TEK BİR TANE ise: \"tut ... weh\" kullanırsın.\n• Ağrıyan yerin ÇOĞULSA (İki gözün, iki bacağın ağrıyorsa): \"tun ... weh\" kullanırsın.\n\n**Lego Formülü:** Benim [Vücut Bölümü] + tut / tun + (varsa başka kelimeler) + weh\n\n**Pratik Yapalım (Tekil Ağrılar):**\n• Mein Kopf tut sehr weh. (Benim başım çok ağrıyor.) 🔊 Mayn kopf tut zea vee.\n• Mein Bauch tut weh. (Karnım ağrıyor.) 🔊 Mayn bauh tut vee.\n• Mein Hals tut weh. (Boğazım ağrıyor.) 🔊 Mayn hals tut vee.\n\n**Pratik Yapalım (Çoğul Ağrılar - Dikkat 'e' eklendi!):**\n• Meine Beine tun weh. (Bacaklarım ağrıyor. -> Çoğul olduğu için meinE ve tuN oldu!) 🔊 Maynö baynö tun vee.\n• Meine Augen tun weh. (Gözlerim ağrıyor.) 🔊 Maynö augön tun vee.",
            examples: []
        },
        {
            id: "de-pain-schmerzen",
            title: "💊 BÖLÜM 3: 2. AĞRI YÖNTEMİ (Schmerzen haben)",
            explanation: "Almanlar sadece \"Başım ağrıyor\" demezler. Bazen İngilizcedeki \"I have a headache\" mantığıyla \"Ben baş-ağrısına sahibim\" derler.\nBu çok daha kolay bir Lego parçasıdır çünkü fiilimiz sadece bizim eski dostumuz \"haben\" (sahip olmak)!\n\n**Lego Formülü:** Ich habe + [Vücut Bölümü]schmerzen\n*(Sadece ağrıyan organın adını alıp sonuna schmerzen kelimesini yapıştırıyoruz. Hepsi bitişik yazılır!)*\n\n**Pratik Yapalım:**\n• Ich habe Kopfschmerzen. (Baş ağrım var / Başım ağrıyor.) 🔊 İh habö kopf-şmertsen.\n• Ich habe Bauchschmerzen. (Karın ağrım var / Karnım ağrıyor.) 🔊 İh habö bauh-şmertsen.\n• Ich habe Rückenschmerzen. (Sırt ağrım var / Sırtım ağrıyor.) 🔊 İh habö rükön-şmertsen.",
            examples: []
        },
        {
            id: "de-pain-table",
            title: "🆚 BÖLÜM 4: BEYNE KAZIMA TABLOSU (İki Yöntem Yan Yana)",
            explanation: "Dostum, ikisi de günlük hayatta sürekli kullanılır, ikisi de %100 aynı anlama gelir. Hangisi o an aklına gelirse onu kullan!",
            table: {
                headers: ["Vücut Bölümü", "Yöntem 1 (Wehtun)", "Yöntem 2 (Haben + Schmerzen)", "Türkçe Anlamı"],
                rows: [
                    ["Kopf (Baş)", "Mein Kopf tut weh.", "Ich habe Kopfschmerzen.", "Başım ağrıyor."],
                    ["Bauch (Karın)", "Mein Bauch tut weh.", "Ich habe Bauchschmerzen.", "Karnım ağrıyor."],
                    ["Beine (Bacaklar)", "Meine Beine tun weh.", "Ich habe Beinschmerzen.", "Bacaklarım ağrıyor."]
                ]
            },
            examples: []
        },
        {
            id: "de-pain-dialogue",
            title: "🎬 BÖLÜM 5: KISA BİR DİYALOG (Doktorda - Beim Arzt)",
            explanation: "🏥 **Senaryo:** Kendini kötü hissediyorsun ve doktora (der Arzt) gittin.\n\n**👨‍⚕️ Doktor:** Guten Morgen! Was fehlt Ihnen? 🔊 Gutön morgön! Vas felt inön? (Günaydın! Neyiniz var? / Şikayetiniz nedir?)\n\n**👦 Sen:** Guten Morgen Herr Doktor. Mir geht es nicht gut. Mein Kopf tut sehr weh. 🔊 Gutön morgön hea doktor. Mia geet es niht gut. Mayn kopf tut zea vee. (Günaydın Doktor Bey. İyi değilim. Başım çok ağrıyor.)\n\n**👨‍⚕️ Doktor:** Haben Sie auch Halsschmerzen? 🔊 Habön zi auh hals-şmertsen? (Aynı zamanda boğaz ağrınız da var mı?)\n\n**👦 Sen:** Ja, mein Hals tut auch weh. Und ich bin sehr müde. 🔊 Ya, mayn hals tut auh vee. Unt ih bin zea müde. (Evet, boğazım da ağrıyor. Ve çok yorgunum.)\n\n**👨‍⚕️ Doktor:** Okay, bleiben Sie zu Hause und trinken Sie viel Wasser. 🔊 Okey, blaybön zi tsu hauzö unt trinkön zi fiil vasa. (Tamam, evde kalın ve bol su için.)\n\n🚀 **KOÇUN HASTA GÖREVİ (Şikayetini Söyle)**\nDostum, Allah korusun ama Almanya'da bir yerin ağrırsa artık kendini aslanlar gibi ifade edebilirsin! Şimdi öğrendiğin bu iki muazzam yöntemi test etme vakti.\nBana şu cümleyi, öğrendiğimiz İKİ FARKLI YÖNTEMLE DE kurmanı ve yüksek sesle okumanı istiyorum:\n\n*\"Benim sırtım (der Rücken) ağrıyor.\"*\n\n1. Yöntem (wehtun fiili ile) -> (İpucu: Mein Rücken...)\n2. Yöntem (haben fiili ile) -> (İpucu: Ich habe...)",
            examples: []
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
        { question: "Özne çoğulsa wehtun fiili nasıl çekimlenir? (Meine Beine ___ weh)", options: ["tut", "tun", "hat", "bin"], correct: 1, explanation: "Çoğul öznelerde 'tun weh' kullanılır." }
    ]
};

// ===== UNIT 512: ADJEKTİVE (SIFATLAR) =====
const unit512Grammar: GermanGrammarUnit = {
    unitId: 512,
    title: "Sıfatlar ve Karşıtlıklar",
    rules: [
        {
            id: "de-adj-opposites",
            title: "☯️ BÖLÜM 1: TEMEL SIFAT ÇİFTLERİ (Zıtlıkların Gücü)",
            explanation: "Bu tabloyu yüksek sesle oku ve zıtlıklarıyla beraber beynine kazı koç! Sıfatlar dünyayı renklendirir.",
            table: {
                headers: ["Sıfat", "Anlamı", "🆚 Zıt Sıfat", "Zıt Anlamı"],
                rows: [
                    ["groß", "Büyük / Uzun", "klein", "Küçük / Kısa"],
                    ["gut", "İyi", "schlecht", "Kötü"],
                    ["heiß", "Sıcak (Kaynar)", "kalt", "Soğuk"],
                    ["teuer", "Pahalı", "billig", "Ucuz"],
                    ["schnell", "Hızlı", "langsam", "Yavaş"],
                    ["schwer", "Zor / Ağır", "leicht", "Kolay / Hafif"]
                ]
            },
            examples: []
        },
        {
            id: "de-adj-alt",
            title: "🚨 KOÇUN BÜYÜK UYARISI (alt Kelimesine Dikkat!)",
            explanation: "Almancada **'alt'** kelimesi hem ESKİ hem de YAŞLI anlamına gelir. Zıttını söylerken neyden bahsettiğine çok dikkat etmelisin!\n\n- Araba/Evden bahsediyorsan: **alt** (Eski) 🆚 **neu** (Yeni)\n- İnsandan bahsediyorsan: **alt** (Yaşlı) 🆚 **jung** (Genç)",
            examples: [
                { de: "Mein Auto ist alt, aber sein Auto ist neu.", tr: "Benim arabam eski ama onun arabası yeni." },
                { de: "Der Mann ist alt, aber das Kind ist jung.", tr: "Adam yaşlı ama çocuk genç." }
            ]
        },
        {
            id: "de-adj-derece",
            title: "🌶️ BÖLÜM 2: DERECELENDİRME (Sehr vs. Zu)",
            explanation: "Bir şeyin miktarını belirtirken bu iki kelimeyi karıştırma koç!\n\n- **sehr (çok):** Olumlu veya nötr bir 'çok'tur. (Das Essen ist sehr gut - Yemek çok iyi)\n- **zu (fazla/aşırı):** Genellikle olumsuzluk bildirir, 'fazla kaçmış' demektir. (Das Essen ist zu salzig - Yemek fazla tuzlu)",
            examples: []
        }
    ],
    dialogue: {
        scenario: "friend",
        intro: "Selam! Yeni bir telefon almak istiyorum ama bu telefon çok pahalı (zu teuer). Sence ne yapmalıyım? 📱",
        objectives: {
            de: ["Telefonun pahalı olduğunu doğrula (zu teuer)", "Daha ucuz bir telefon tavsiye et (billig)", "Kendi telefonundan bahset (alt/neu)"],
            tr: ["Telefonun pahalı olduğunu doğrula (zu teuer)", "Daha ucuz bir telefon tavsiye et (billig)", "Kendi telefonundan bahset (alt/neu)"]
        },
        suggestedPhrases: {
            de: ["Ja, das ist zu teuer.", "Kauf ein billiges Handy.", "Mein Handy ist schon alt."],
            tr: ["Evet, bu çok pahalı.", "Ucuz bir telefon al.", "Benim telefonum zaten eski."]
        }
    },
    exercises: [
        { question: "Der Elefant ist ___ (büyük).", options: ["klein", "groß", "alt", "neu"], correct: 1, explanation: "Büyük = groß." },
        { question: "Das Auto ist ___ (pahalı).", options: ["billig", "teuer", "schnell", "langsam"], correct: 1, explanation: "Pahalı = teuer." },
        { question: "Ein Ferrari ist ___ (hızlı).", options: ["langsam", "schnell", "schwer", "leicht"], correct: 1, explanation: "Hızlı = schnell." },
        { question: "Das Wetter ist ___ (soğuk).", options: ["heiß", "kalt", "warm", "schön"], correct: 1, explanation: "Soğuk = kalt." },
        { question: "Mathe ist ___ (zor).", options: ["leicht", "schwer", "gut", "schlecht"], correct: 1, explanation: "Zor/Ağır = schwer." },
        { question: "Mein Bruder ist ___ (genç).", options: ["alt", "jung", "neu", "groß"], correct: 1, explanation: "İnsanlar için genç = jung." },
        { question: "Der Film ist ___ (çok) gut.", options: ["sehr", "zu", "viel", "gern"], correct: 0, explanation: "Normal 'çok' için 'sehr' kullanılır." },
        { question: "Der Kaffee ist ___ (aşırı/fazla) heiß.", options: ["sehr", "zu", "viel", "gern"], correct: 1, explanation: "Olumsuzluk bildiren aşırılık için 'zu' kullanılır." },
        { question: "Gegenteil (zıt anlam) von 'billig'?", options: ["leise", "teuer", "schnell", "groß"], correct: 1, explanation: "Ucuz (billig) 🆚 Pahalı (teuer)." },
        { question: "Gegenteil von 'langsam'?", options: ["schnell", "leise", "schwer", "alt"], correct: 0, explanation: "Yavaş (langsam) 🆚 Hızlı (schnell)." }
    ]
};

const unit513Grammar: GermanGrammarUnit = {
    unitId: 513,
    title: "Tarz Fiiller: Können ve Müssen",
    rules: [
        {
            id: "de-modal-intro",
            title: "1. Fiilin Tahtı ve Son Durak",
            explanation: "Almancada 'yapabilmek' (können) veya 'zorunda olmak' (müssen) gibi yardımcı fiiller kullandığında cümle yapısı biraz değişir.\n\n🎯 **ALTIN KURAL (Kral ve Vezir):** Modal fiil (können/müssen) özneye göre çekimlener ve **2. sıraya** (tahtına) oturur. Asıl yapmak istediğin eylem ise hiç ek almadan (mastar) cümlenin **EN SONUNA** (son durak) gider.\n\n🧱 **Lego Formülü:**\nÖzne + MODAL FİİL (Çekimli) + ... + ANA FİİL (Mastar/Sonda)",
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
        },
        {
            id: "de-modal-tuzağa-dikkat",
            title: "2. Modal Fiil Çekimi Tuzağı",
            explanation: "Almancada modal fiiller biraz asidir. 'Ich' ve 'Er/Sie/Es' çekimleri her zaman birebir aynıdır!\n\n🚫 **BÜYÜK TUZAK:** Sakın 'Er kannst' veya 'Ich müsse' deme. Doğrusu: *Ich kann / Er kann* ve *Ich muss / Er muss*.",
            examples: []
        },
        {
            id: "de-modal-koc",
            title: "🕵️ KOÇUN GÖREVİ",
            explanation: "Şimdi Shelldon senin yeteneklerini ve sorumluluklarını merak ediyor. Ona neler yapabildiğini (können) ve bugün neler yapman gerektiğini (müssen) anlat. Ana fiili en sona fırlatmayı unutma!",
            examples: []
        }
    ],
    dialogue: {
        scenario: "skills",
        intro: "Merhaba! Ben Shelldon. Bu bölümde seninle yeteneklerin hakkında konuşacağız. Was kannst du gut machen? (Neyi iyi yapabilirsin?) 🐢",
        objectives: {
            de: ["İyi yapabildiğin bir şeyi söyle (kann)", "Bugün yapman gereken bir şeyi anlat (muss)", "Bana bir soru sor (Kannst du...?)"],
            tr: ["İyi yapabildiğin bir şeyi söyle (kann)", "Bugün yapman gereken bir şeyi anlat (muss)", "Bana bir soru sor (Kannst du...?)"]
        },
        suggestedPhrases: {
            de: ["Ich kann gut Deutsch sprechen.", "Ich muss heute viel lernen.", "Kannst du mir helfen?"],
            tr: ["İyi Almanca konuşabiliyorum.", "Bugün çok ders çalışmalıyım.", "Bana yardım edebilir misin?"]
        }
    },
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
            title: "1. Mesleklerde Kadın-Erkek Ayrımı",
            explanation: "Almancada meslek isimleri genellikle cinsiyete göre değişir. İngilizcedeki 'Teacher' gibi her iki cins için aynı değildir.\n\n🎯 **ALTIN KURAL (İsimlerde Cinsiyet):** Kadın meslek sahipleri için ismin sonuna neredeyse her zaman **'-in'** takısı eklenir. Artikel de otomatik olarak **'die'** olur.\n\n- der Lehrer (Erkek öğretmen) $\rightarrow$ die Lehrerin (Kadın öğretmen)\n- der Arzt (Erkek doktor) $\rightarrow$ die Ärztin (Kadın doktor - Umlaut'a dikkat! a $\rightarrow$ ä)",
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
            examples: [
                { de: "Mein Vater ist Arzt.", tr: "Babam doktordur." },
                { de: "Meine Mutter ist Lehrerin.", tr: "Annem öğretmendir." }
            ]
        },
        {
            id: "de-job-prep",
            title: "2. Meslek Söylerken Artikel Tuzağı",
            explanation: "Türkçede 'Ben bir doktorum' diyebiliriz ama Almancada durum farklı.\n\n🎯 **ALTIN KURAL (Artikelsiz Alan):** Mesleğini söylerken önüne 'ein/eine' (bir) getirmene gerek yoktur! Doğrudan mesleği söylersin.\n\n🚫 **BÜYÜK TUZAK:** Sakın 'Ich bin ein Arzt' deme, kulağa sanki dünyadaki herhangi bir rastgele doktormuşsun gibi gelir. 'Ich bin Arzt' en doğrusudur.",
            examples: [
                { de: "Ich bin Arzt.", tr: "Ben doktorum." },
                { de: "Ich arbeite als Verkäufer.", tr: "Satıcı olarak çalışıyorum. ('als' = olarak)" }
            ]
        },
        {
            id: "de-jobs-koc",
            title: "🕵️ KOÇUN GÖREVİ",
            explanation: "Şimdi Shelldon bir İnsan Kaynakları görevlisi olsun. Sana mesleğini soracak. Ona mesleğini artikelsiz söyle ve 'als' (olarak) kelimesini kullanarak nerede çalıştığını anlat!",
            examples: []
        }
    ],
    dialogue: {
        scenario: "rendezvous",
        intro: "Merhaba! Ben İnsan Kaynaklarından Shelldon. Bugün seninle kariyerin hakkında konuşacağız. Was bist du von Beruf? (Mesleğin nedir?) 🐢",
        objectives: {
            de: ["Mesleğini söyle", "Nerede/Nasıl çalıştığını anlat (als)", "Gelecekte ne olmak istediğini söyle (will)"],
            tr: ["Mesleğini söyle", "Nerede/Nasıl çalıştığını anlat (als)", "Gelecekte ne olmak istediğini söyle (will)"]
        },
        suggestedPhrases: {
            de: ["Ich bin Student.", "Ich arbeite als Lehrer.", "Ich will Arzt werden."],
            tr: ["Ben öğrenciyim.", "Öğretmen olarak çalışıyorum.", "Doktor olmak istiyorum."]
        }
    },
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
            title: "1. Şehir mi, Bina mı, Kişi mi?",
            explanation: "Almancada 'e doğru' demek için iki ana yol vardır: **Nach** ve **Zu**.\n\n🎯 **ALTIN KURAL (Nach):** Şehirler, ülkeler (artikelsiz olanlar) ve 'ev' (nach Hause) için **nach** kullanılır.\n- nach Berlin, nach Deutschland, nach Hause.\n\n🎯 **ALTIN KURAL (Zu):** Kişilere, belirli binalara veya kurumlara giderken **zu** kullanılır. Zu her zaman Dativ ister ve artikelle birleşir!\n- zu Max, zum Arzt (zu+dem), zur Schule (zu+der).\n\n🚫 **BÜYÜK TUZAK:** Sakın 'Ich gehe nach Arzt' deme! Doktora (kişiye) gidiyorsan 'zum Arzt' demelisin.",
            table: {
                headers: ["Edat", "Kullanım Yeri", "Örnek"],
                rows: [
                    ["nach", "Şehirler/Ülkeler", "nach Berlin, nach Deutschland"],
                    ["nach", "Ev (yön)", "nach Hause"],
                    ["zu", "Kişiler/Binalar", "zu Max, zur Schule (zu+der)"],
                    ["zu", "Ev (orada / Evde)", "zu Hause (İstisna: Durum bildirir)"]
                ]
            },
            examples: [
                { de: "Nach dem Essen gehe ich nach Hause.", tr: "Yemekten sonra eve gidiyorum." },
                { de: "Ich fahre morgen nach Deutschland.", tr: "Yarın Almanya'ya gidiyorum." }
            ]
        },
        {
            id: "de-direction-koc",
            title: "🕵️ KOÇUN GÖREVİ",
            explanation: "Shelldon yolda kaybolmuş bir turist olsun. Ona nereye gittiğini anlat. Şehir mi yoksa bir bina/kişi mi olduğunu düşünerek 'nach' veya 'zu' edatlarını doğru seç!",
            examples: []
        }
    ],
    dialogue: {
        scenario: "direction",
        intro: "Affedersiniz! Ben Shelldon. Yolumu bulmaya çalışıyorum. Wohin gehen Sie? (Nereye gidiyorsunuz?) 🗺️",
        objectives: {
            de: ["Eve gittiğini söyle (nach Hause)", "Bir şehre gittiğini söyle (nach...)", "Bir binaya/kişiye gittiğini söyle (zu/zum/zur)"],
            tr: ["Eve gittiğini söyle (nach Hause)", "Bir şehre gittiğini söyle (nach...)", "Bir binaya/kişiye gittiğini söyle (zu/zum/zur)"]
        },
        suggestedPhrases: {
            de: ["Ich gehe nach Hause.", "Ich fahre nach Hamburg.", "Ich gehe zum Supermarkt."],
            tr: ["Eve gidiyorum.", "Hamburg'a gidiyorum.", "Süpermarkete gidiyorum."]
        }
    },
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
            title: "1. Araçlarla 'mit' ve Dativ Dansı",
            explanation: "Bir araçla bir yere gittiğini söylerken Almancada 'mit' (ile) edatını kullanırız.\n\n🎯 **ALTIN KURAL (Dativ Sıklığı):** 'mit' edatı her zaman **Dativ** ister. Yani artikeller değişir!\n- der Bus $\rightarrow$ mit **dem** Bus\n- die U-Bahn $\rightarrow$ mit **der** U-Bahn\n- das Auto $\rightarrow$ mit **dem** Auto\n\n🚫 **BÜYÜK TUZAK (Yürümek):** Sakın 'mit Füßen' deme! Yürüyerek gitmek istisnai olarak **'zu Fuß'** şeklinde söylenir.",
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
            examples: [
                { de: "Ich fahre mit dem Zug.", tr: "Trenle gidiyorum." },
                { de: "Kommst du mit dem Auto?", tr: "Arabayla mı geliyorsun?" }
            ]
        },
        {
            id: "de-transport-koc",
            title: "🕵️ KOÇUN GÖREVİ",
            explanation: "Shelldon bir bilet gişesi görevlisi olsun. Ona hangi araçla seyahat edeceğini anlat. 'mit dem' veya 'mit der' kalıplarını doğru kullanmayı unutma!",
            examples: []
        }
    ],
    dialogue: {
        scenario: "airport",
        intro: "Hoş geldiniz! Ben Shelldon. Seyahatiniz için hangi aracı tercih edersiniz? Wie fahren Sie nach Berlin? ✈️",
        objectives: {
            de: ["Bir araçla gideceğini söyle (mit + dem/der)", "Yürüyerek gideceğini söyle (zu Fuß)", "Bilet fiyatını sor"],
            tr: ["Bir araçla gideceğini söyle (mit + dem/der)", "Yürüyerek gideceğini söyle (zu Fuß)", "Bilet fiyatını sor"]
        },
        suggestedPhrases: {
            de: ["Ich fahre mit dem Zug.", "Ich gehe zu Fuß.", "Was kostet das Ticket?"],
            tr: ["Trenle gidiyorum.", "Yürüyerek gidiyorum.", "Bilet ne kadar?"]
        }
    },
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
            title: "1. Kopan Parça Yasası",
            explanation: "Bazı Almanca fiiller çok sosyaldir, cümle içinde parçalanıp ikiye bölünürler!\n\n🎯 **ALTIN KURAL (Uçan önek):** Fiilin başındaki küçük parça (önek) kopar ve cümlenin EN SONUNA fırlatılır. Fiilin kökü ise yine 2. sıradaki yerini korur.\n\n🧱 **Lego Formülü:**\n1. Özne + 2. FİİL KÖKÜ + ... + EN SON. ÖNEK\n\nÖrnek: **an**rufen (aramak) $\rightarrow$ Ich rufe dich **an**.\n\n🚫 **BÜYÜK TUZAK:** Sakın öneki fiilin yanında unutma! 'Ich anrufe dich' yanlış, 'Ich rufe dich an' doğrudur.",
            examples: [
                { de: "anrufen (aramak) -> Ich rufe dich an.", tr: "Seni arıyorum." },
                { de: "aufstehen (kalkmak) -> Er steht um 7 Uhr auf.", tr: "O saat 7'de kalkar." }
            ]
        },
        {
            id: "de-sep-prefixes",
            title: "2. Sık Kullanılan Ayrılan Önekler",
            explanation: "Hangi fiillerin ayrıldığını anlamak için öneklerine bakmalısın. İşte en popülerleri:\n- **an-** (anrufen, anfangen)\n- **auf-** (aufstehen, aufräumen)\n- **aus-** (ausmachen, ausgehen)\n- **mit-** (mitkommen, mitbringen)\n- **ein-** (einkaufen)",
            table: {
                headers: ["Fiil", "Anlamı", "Örnek"],
                rows: [
                    ["fernsehen", "TV izlemek", "Ich sehe fern."],
                    ["einkaufen", "Alışveriş yapmak", "Sie kauft ein."],
                    ["mitkommen", "Birlikte gelmek", "Kommst du mit?"]
                ]
            },
            examples: [
                { de: "Kaufst du heute ein?", tr: "Bugün alışveriş yapar mısın?" },
                { de: "Ruf mich am Abend an!", tr: "Beni akşam ara!" }
            ]
        },
        {
            id: "de-sep-koc",
            title: "🕵️ KOÇUN GÖREVİ",
            explanation: "Shelldon ile sabah rutinin hakkında konuş. Kaçta kalktığını (aufstehen), ne zaman alışveriş yaptığını (einkaufen) veya kimi aradığını (anrufen) anlat. Parçaları sona fırlatmayı unutma!",
            examples: []
        }
    ],
    dialogue: {
        scenario: "friend",
        intro: "Selam! Bugün neler yapacaksın? Sabah kaçta kalktın? Wann stehst du heute auf? ☕",
        objectives: {
            de: ["Kaçta kalktığını söyle (aufstehen)", "Alışveriş yapacağını söyle (einkaufen)", "Arkadaşını arayıp aramayacağını sor (anrufen)"],
            tr: ["Kaçta kalktığını söyle (aufstehen)", "Alışveriş yapacağını söyle (einkaufen)", "Arkadaşını arayıp aramayacağını sor (anrufen)"]
        },
        suggestedPhrases: {
            de: ["Ich stehe um 8 Uhr auf.", "Ich kaufe am Nachmittag ein.", "Rufst du mich an?"],
            tr: ["Saat 8'de kalkıyorum.", "Öğleden sonra alışveriş yapıyorum.", "Beni arar mısın?"]
        }
    },
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
            explanation: "Almancada saat sormanın iki yolu vardır: 'Wie spät ist es?' (Ne kadar geç?) veya 'Wie viel Uhr ist es?' (Saat kaç?).\n\n🎯 **ALTIN KURAL (Halb Tuzağı):** İşte Almanların en kafa karıştırıcı kuralı! 'Yarım' derken içinde olduğun saati değil, **bir sonraki saati** söylersin.\n- 08:30 $\rightarrow$ halb **neun** (Dokuz yarımı!)\n- 10:30 $\rightarrow$ halb **elf** (On bir yarımı!)\n\n🧱 **Günlük Dil Formülleri:**\n- Çeyrek geçe: **Viertel nach** ... (Viertel nach acht - 08:15)\n- Çeyrek kala: **Viertel vor** ... (Viertel vor neun - 08:45)",
            table: {
                headers: ["Saat", "Almanca Yapı", "Türkçesi"],
                rows: [
                    ["08:00", "acht Uhr", "Saat sekiz"],
                    ["08:15", "Viertel nach acht", "Sekizi çeyrek geçiyor"],
                    ["08:30", "halb neun", "Sekiz buçuk"],
                    ["08:45", "Viertel vor neun", "Dokuza çeyrek var"],
                    ["08:55", "fünf vor neun", "Dokuza beş var"]
                ]
            },
            examples: [
                { de: "Es ist genau acht Uhr.", tr: "Saat tam sekiz." },
                { de: "Es ist halb eins.", tr: "Saat yarım (12:30)." }
            ]
        },
        {
            id: "de-time-prep",
            title: "2. Zaman Edatları (Am vs Um)",
            explanation: "Zamanla ilgili konuşurken edatları karıştırma koç!\n\n🎯 **ALTIN KURAL:**\n- Saatlerde her zaman **'UM'** kullanılır. (Um 8 Uhr)\n- Günlerde ve günün bölümlerinde **'AM'** kullanılır. (Am Montag, am Morgen)\nException: Nacht (gece) için 'In der Nacht' kullanılır.",
            examples: []
        },
        {
            id: "de-time-koc",
            title: "🕵️ KOÇUN GÖREVİ",
            explanation: "Shelldon seninle randevulaşmak istiyor. Sana saat kaçta buluşabileceğimizi soracak. Ona 'halb' tuzağına düşmeden bir saat söyle ve randevuyu onayla!",
            examples: []
        }
    ],
    dialogue: {
        scenario: "rendezvous",
        intro: "Selam! Ben Shelldon. Bugün seninle buluşmak istiyorum. Wann hast du Zeit? (Ne zaman vaktin var?) ⏰",
        objectives: {
            de: ["Bir saat söyle (um...)", "Yarım saat içeren bir ifade kullan (halb...)", "Buluşma yerini sor"],
            tr: ["Bir saat söyle (um...)", "Yarım saat içeren bir ifade kullan (halb...)", "Buluşma yerini sor"]
        },
        suggestedPhrases: {
            de: ["Ich habe um 14 Uhr Zeit.", "Treffen we uns um halb drei?", "Wo treffen wir uns?"],
            tr: ["Saat 14'te vaktim var.", "İki buçukta buluşalım mı?", "Nerede buluşuyoruz?"]
        }
    },
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
            explanation: "Hava durumundan bahsederken Almancada özne her zaman gizemli bir **'ES'** (o) kelimesidir.\n\n🎯 **ALTIN KURAL (Es Yapısı):**\n- Hava güneşli: **Es** ist sonnig.\n- Yağmur yağıyor: **Es** regnet. (Buradaki -t ekine dikkat, 'es' şahsına göre çekimlenir)\n- Kar yağıyor: **Es** schneit.",
            table: {
                headers: ["Yapı", "Almanca", "Türkçesi"],
                rows: [
                    ["es ist + Sıfat", "es ist sonnig / windig", "Güneşli / Rüzgarlı"],
                    ["Fiil", "es regnet / es schneit", "Yağmur / Kar yağıyor"],
                    ["Sıcaklık", "es ist heiß / kalt", "Sıcak / Soğuk"]
                ]
            },
            examples: [
                { de: "Heute regnet es stark.", tr: "Bugün kuvvetli yağmur yağıyor." },
                { de: "Morgen wird es sonnig.", tr: "Yarın hava güneşli olacak." }
            ]
        },
        {
            id: "de-weather-koc",
            title: "🕵️ KOÇUN GÖREVİ",
            explanation: "Şimdi Shelldon seninle pencereden dışarı bakıyor. Sana havayı soracak. Ona sadece 'iyi/kötü' deme! Bir sıfat kullan veya yağmur/kar durumunu anlat.",
            examples: []
        }
    ],
    dialogue: {
        scenario: "friend",
        intro: "Selam! Bugün dışarı çıkmak istiyorum ama havadan emin değilim. Wie ist das Wetter heute? (Bugün hava nasıl?) 🌤️",
        objectives: {
            de: ["Havanın nasıl olduğunu söyle (Es ist...)", "Sıcaklık hakkında bilgi ver (warm/kalt)", "Bir tavsiyede bulun (Şemsiye al vb.)"],
            tr: ["Havanın nasıl olduğunu söyle (Es ist...)", "Sıcaklık hakkında bilgi ver (warm/kalt)", "Bir tavsiyede bulun (Şemsiye al vb.)"]
        },
        suggestedPhrases: {
            de: ["Es ist heute sehr sonnig.", "Es ist ein bisschen kalt.", "Nimm einen Regenschirm mit!"],
            tr: ["Bugün hava çok güneşli.", "Biraz soğuk.", "Yanına bir şemsiye al!"]
        }
    },
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
// ===== UNIT 520: FREIZEIT & GERN (BOŞ ZAMAN VE SEVMEK-GERN) =====
const unit520Grammar: GermanGrammarUnit = {
    unitId: 520,
    title: "Boş Zaman Aktiviteleri ve 'gern' Kullanımı",
    rules: [
        {
            id: "de-gern",
            title: "1. Sevmek Sihirbazı (gern)",
            explanation: "Almancada 'seviyorum' demek için her zaman bir fiile ihtiyacın yok koç. Sadece yaptığın eylemin yanına 'gern' ekle, gerisini o halleder!\n\n🎯 **ALTIN KURAL (Gern zarfı):** 'Gern' bir fiil değildir. Fiilin hemen arkasına gelir ve o işi 'severek' yaptığını anlatır.\n\n🧱 **Lego Formülü:**\nÖzne + FİİL + **gern** + Nesne.\n\nÖrnek: Ich spiele **gern** Tennis. (Tenis oynamayı severim.)",
            examples: [
                { de: "Ich esse gern Pizza.", tr: "Pizza yemeyi severim." },
                { de: "Reist du gern?", tr: "Seyahat etmeyi sever misin?" }
            ]
        },
        {
            id: "de-leisure",
            title: "2. Hobi Cephaneliği",
            explanation: "Boş zamanlarını anlatırken bu fiillere ihtiyacın olacak. Hepsini 'gern' ile kullanabilirsin!",
            table: {
                headers: ["Fiil", "Anlamı", "Örnek"],
                rows: [
                    ["lesen", "okumak", "Ich lese gern."],
                    ["schwimmen", "yüzmek", "Er schwimmt gern."],
                    ["kochen", "yemek pişirmek", "Wir kochen gern."],
                    ["Musik hören", "müzik dinlemek", "Hörst du gern Musik?"],
                    ["fernsehen", "TV izlemek", "Opa sieht gern fern."]
                ]
            },
            examples: []
        },
        {
            id: "de-gern-koc",
            title: "🕵️ KOÇUN GÖREVİ",
            explanation: "Shelldon senin hobilerini merak ediyor. Ona nelerden hoşlandığını anlat. 'Ich ... gern ...' formülünü kullan ve en az iki hobinden bahset!",
            examples: []
        }
    ],
    dialogue: {
        scenario: "friend",
        intro: "Selam! Bugün boş vaktim var. Benim hobim kitap okumak (lesen). Was machst du gern in deiner Freizeit? (Boş zamanında ne yapmayı seversin?) 🎨",
        objectives: {
            de: ["Bir hobini söyle (Ich ... gern)", "Başka bir aktiviteyi sevmediğini söyle (nicht gern)", "Shelldon'a hobisini sor"],
            tr: ["Bir hobini söyle (Ich ... gern)", "Başka bir aktiviteyi sevmediğini söyle (nicht gern)", "Shelldon'a hobisini sor"]
        },
        suggestedPhrases: {
            de: ["Ich spiele gern Fußball.", "Ich schwimme nicht gern.", "Was ist dein Hobby?"],
            tr: ["Futbol oynamayı severim.", "Yüzmeyi sevmem.", "Senin hobin ne?"]
        }
    },
    exercises: [
        { question: "Ich lese ___ (Severek okurum).", options: ["gut", "gern", "viel", "sehr"], correct: 1, explanation: "Bir eylemi sevmeyi 'gern' ifade eder." },
        { question: "Was ___ du in deiner Freizeit?", options: ["mache", "machst", "machen", "macht"], correct: 1, explanation: "Soru: Boş zamanında ne yaparsın? (Du ile machst)" },
        { question: "___ du gern Musik?", options: ["Höre", "Hörst", "Hört", "Hören"], correct: 1, explanation: "Müzik dinlemek = hören." },
        { question: "Ich ___ (yüzerim) gern.", options: ["schwimme", "schwimmst", "schwimmen", "schwimmt"], correct: 0, explanation: "Ich schwimme." },
        { question: "Wir tanzen ___ (severek).", options: ["gern", "gut", "hızlı", "yavaş"], correct: 0, explanation: "Gern = Severek/Hoşlanarak." },
        { question: "Mein Hobby ___ (okumaktır).", options: ["ist", "sind", "bin", "bist"], correct: 0, explanation: "Özne 'mein Hobby' tekildir." },
        { question: "Meine Hobbys ___ (okumak ve yüzmektir).", options: ["ist", "sind", "bin", "bist"], correct: 1, explanation: "Özne 'meine Hobbys' çoğuldur." },
        { question: "Ich spiele ___ (tenis).", options: ["Klavier", "Tennis", "Buch", "Wasser"], correct: 1, explanation: "Tennis spielen." },
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
            examples: [
                { de: "Ich fahre mit meiner Schwester.", tr: "Kız kardeşimle gidiyorum." },
                { de: "Sie wohnt seit einem Jahr in Berlin.", tr: "O bir yıldır Berlin'de yaşıyor." }
            ]
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
            examples: [
                { de: "Wir haben Fußball gespielt.", tr: "Futbol oynadık." },
                { de: "Hast du Musik gehört?", tr: "Müzik dinledin mi?" }
            ]
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
            examples: [
                { de: "Ich bin ins Kino gegangen.", tr: "Sinemaya gittim." },
                { de: "Hast du die Pizza gegessen?", tr: "Pizzayı yedin mi?" }
            ]
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
