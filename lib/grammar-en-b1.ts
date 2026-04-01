/**
 * SteadyShell İngilizce B1 Gramer Veritabanı
 * Üniteler 161-190 - Curriculum ve B1 Kelime Veritabanı ile uyumlu
 */

export interface GrammarRule {
    title: string;
    explanation: string;
    examples: { english: string; turkish: string }[];
}

export interface GrammarExercise {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
}

export interface EnglishGrammarUnit {
    unitId: number;
    title: string;
    rules: GrammarRule[];
    exercises: GrammarExercise[];
}

// ===== ÜNİTE 161: GELECEK ZAMAN (WILL VS GOING TO) =====
const unit161Grammar: EnglishGrammarUnit = {
    unitId: 161,
    title: "Future Plans & Intentions (Gelecek Zaman Karşılaştırması)",
    rules: [
        {
            title: "1. 'Be Going To': Planlanmış Gelecek",
            explanation: "B1 seviyesinde en önemli ayrım 'be going to' ve 'will' arasındadır. 'Be going to' önceden verilmiş kararlar, niyetler (intentions) ve planlar için kullanılır. Ayrıca elimizde kanıt olan durumlar için kullanılır (Örn: Kara bulutlar varsa yağmur yağacak demek).",
            examples: [
                { english: "I'm going to organize a meeting tomorrow.", turkish: "Yarın bir toplantı organize edeceğim. (Kararımı önceden verdim)" },
                { english: "They are going to achieve their goals.", turkish: "Hedeflerine ulaşacaklar. (Planları hazır)" },
                { english: "He has no intention of leaving.", turkish: "Ayrılmaya hiç niyeti yok." }
            ]
        },
        {
            title: "2. 'Will': Ani Kararlar ve Genel Tahminler",
            explanation: "'Will' konuşma anında verilen hızlı kararlar, sözler, teklifler ve kesin kanıtı olmayan uzak gelecek tahminleri için kullanılır. 'I think...', 'I expect...', 'I predict...' gibi ifadelerle sıkça görülür.",
            examples: [
                { english: "The phone is ringing. I'll get it!", turkish: "Telefon çalıyor. Ben bakarım! (Ani karar)" },
                { english: "I predict that life will be different in 2050.", turkish: "2050'de hayatın farklı olacağını tahmin ediyorum." },
                { english: "I expect he will arrive on schedule.", turkish: "Zamanında varacağını umuyorum." }
            ]
        },
        {
            title: "3. 'Present Continuous' vs 'Be Going To'",
            explanation: "Eğer bir şey sadece planlanmamış, aynı zamanda tüm düzenlemeleri (arrangements) yapılmışsa (otel rezervasyonu, bilet alımı vb.), Şimdiki Zaman (Present Continuous) kullanmak daha yaygındır.",
            examples: [
                { english: "I'm flying to London on Monday.", turkish: "Pazartesi Londra'ya uçuyorum. (Biletler alındı, kesin düzenleme)" },
                { english: "We're meeting at 2 PM.", turkish: "Saat 14:00'te buluşuyoruz. (Sözleştik)" }
            ]
        },
        {
            title: "4. Gelecek Zamanla Kullanılan Anahtar Kelimeler",
            explanation: "B1 seviyesinde şu kelimeler gelecek zamanı nitelemek için kullanılır: definite (kesin), likely (muhtemel), probably (muhtemelen), ambition (hırs/hedef), schedule (program).",
            examples: [
                { english: "It is likely to rain.", turkish: "Yağmur yağması muhtemel." },
                { english: "Her ambition is to become a CEO.", turkish: "Hedefi bir CEO olmak." }
            ]
        }
    ],
    exercises: [
        { question: "I've decided! I ___ (buy) a new car next month.", options: ["will buy", "am going to buy", "buy", "bought"], correct: 1, explanation: "Önceden verilmiş bir karar olduğu için 'be going to' kullanılır." },
        { question: "Look at those black clouds! It ___ (rain).", options: ["will rain", "rains", "is going to rain", "is raining"], correct: 2, explanation: "Gözle görülür bir kanıt olduğu için 'is going to' kullanılır." },
        { question: "I think people ___ (live) on Mars one day.", options: ["are going to live", "will live", "lives", "living"], correct: 1, explanation: "Kişisel bir tahmin olduğu için 'will' kullanılır." },
        { question: "The phone is ringing. - OK, I ___ (answer) it.", options: ["will answer", "going to answer", "answering", "answers"], correct: 0, explanation: "Konuşma anında verilen ani karar için 'will' kullanılır." },
        { question: "What is your main ___ for the future?", options: ["schedule", "ambition", "predict", "definite"], correct: 1, explanation: "Gelecek planlaması için 'ambition' (hedef/hırs) uygundur." },
        { question: "We have an ___ to meet at the airport.", options: ["intention", "arrangement", "achieve", "likely"], correct: 1, explanation: "Buluşma sözleşmesi/düzenlemesi = arrangement." },
        { question: "He ___ (meet) his boss at 10 AM tomorrow. Everything is fixed.", options: ["meets", "is meeting", "will meet", "going to meet"], correct: 1, explanation: "Kesinleşmiş düzenlemeler için Present Continuous kullanılır." },
        { question: "Is it a ___ plan or just an idea?", options: ["likely", "definite", "predict", "goal"], correct: 1, explanation: "Kesin plan = definite plan." },
        { question: "I ___ (travel) around the world after I graduate.", options: ["am going to travel", "will travel", "traveling", "travelled"], correct: 0, explanation: "Güçlü bir niyet/karar olduğu için 'be going to' daha uygundur." },
        { question: "Don't worry, I ___ (help) you with your homework.", options: ["am going to help", "will help", "helping", "helped"], correct: 1, explanation: "Yardım teklifi için 'will' kullanılır." }
    ]
};

// ===== ÜNİTE 162: IF CLAUSE TYPE 1 (POSSIBILITIES) =====
const unit162Grammar: EnglishGrammarUnit = {
    unitId: 162,
    title: "First Conditional (Gerçekçi Koşul Cümleleri)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Sebep ve Sonuç",
            explanation: "First Conditional (Tip 1), gelecekte olması muhtemel (likely) durumlar ve onların sonuçları için kullanılır. 'Eğer bu olursa, şu olacak' mantığıdır. Koşul gerçekleşirse sonuç da gerçekleşecektir.",
            examples: [
                { english: "If I find your passport, I will call you.", turkish: "Eğer pasaportunu bulursam, seni arayacağım." },
                { english: "If the departure is delayed, we will wait.", turkish: "Eğer kalkış ertelenirse, bekleyeceğiz." }
            ]
        },
        {
            title: "2. Gramer Yapısı: If + Present Simple, Will + Verb",
            explanation: "Formülümüz şöyledir: 'If'li kısımda Geniş Zaman (Present Simple), diğer (sonuç) kısmında ise Gelecek Zaman (Will) kullanılır. \nÖNEMLİ: 'If'li tarafa asla 'will' gelmez!",
            examples: [
                { english: "If you study hard, you will pass.", turkish: "Sıkı çalışırsan, geçeceksin." },
                { english: "If she doesn't hurry, she'll miss the flight.", turkish: "Acele etmezse, uçuşu kaçıracak." }
            ]
        },
        {
            title: "3. 'Unless' Kullanımı (Olumsuz Koşul)",
            explanation: "'Unless', 'if not' (olmadıkça/mezse) anlamına gelir. Cümleye kendisi olumsuzluk katar, bu yüzden fiil olumlu çekimlenir.",
            examples: [
                { english: "Unless you show your passport, you can't board.", turkish: "Pasaportunu göstermedikçe, uçağa binemezsin." },
                { english: "I won't go unless you come too.", turkish: "Sen de gelmedikçe gitmeyeceğim." }
            ]
        },
        {
            title: "4. Diğer Modallar (Can, May, Might, Should)",
            explanation: "Sonuç kısmında sadece 'will' değil, olasılık veya gereklilik bildiren diğer yardımcı fiiller de kullanılabilir.",
            examples: [
                { english: "If the weather is good, we might go sightseeing.", turkish: "Eğer hava güzelse, gezmeye gidebiliriz." },
                { english: "If you feel sick, you should see a doctor.", turkish: "Eğer hasta hissediyorsan, bir doktora görünmelisin." }
            ]
        }
    ],
    exercises: [
        { question: "If it ___ (rain), we will stay at home.", options: ["rains", "will rain", "raining", "rained"], correct: 0, explanation: "If'li cümlede Present Simple (Geniş Zaman) kullanılır." },
        { question: "If I ___ (not/find) my boarding pass, I won't be able to fly.", options: ["won't find", "don't find", "not find", "didn't find"], correct: 1, explanation: "Geniş zamanın olumsuzu: don't find." },
        { question: "Unless he ___ (hurry), he will miss the train.", options: ["hurry", "hurries", "will hurry", "doesn't hurry"], correct: 1, explanation: "Unless zaten olumsuzdur, fiil tekil şahısa göre (he) olumlu çekimlenir." },
        { question: "If you go to Terminal 3, you ___ (see) the customs area.", options: ["see", "saw", "will see", "sees"], correct: 2, explanation: "Sonuç cümlesinde 'will' kullanılır." },
        { question: "She will be late if she ___ (not/leave) now.", options: ["doesn't leave", "don't leave", "won't leave", "not leave"], correct: 0, explanation: "She öznesi ile 'doesn't' kullanılır." },
        { question: "If there is a ___, it means the flight might happen.", options: ["possibility", "luggage", "arrival", "departure"], correct: 0, explanation: "Olasılık = possibility." },
        { question: "You ___ (get) a discount if you book early.", options: ["get", "got", "will get", "gets"], correct: 2, explanation: "Geleceğe dair sonuç cümlesi: will get." },
        { question: "If they ___ (arrive) late, we'll miss the first scene.", options: ["arrive", "arrives", "will arrive", "arriving"], correct: 0, explanation: "They öznesi ile fiil ek almaz." },
        { question: "If it is ___, the plane will not take off.", options: ["likely", "foggy", "definite", "passport"], correct: 1, explanation: "Bağlama göre 'sisli' (foggy) en mantıklısıdır." },
        { question: "I'll help you with your luggage if it ___ (be) too heavy.", options: ["is", "will be", "are", "be"], correct: 0, explanation: "It öznesi ile be fiili 'is' olur." }
    ]
};

// ===== ÜNİTE 163: IF CLAUSE TYPE 2 (HYPOTHETICAL) =====
const unit163Grammar: EnglishGrammarUnit = {
    unitId: 163,
    title: "Second Conditional (Hayali/Varsayımsal Koşullar)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: 'Şu an öyle değil ama olsa...'",
            explanation: "Type 2, şu anda gerçek olmayan, hayali (imaginary) veya varsayımsal (hypothetical) durumlar için kullanılır. 'Piyangodan para çıksa şunu yapardım' (ama çıkmadı) gibi durumlar.",
            examples: [
                { english: "If I won the lottery, I would travel the world.", turkish: "Piyangoyu kazansam, dünyayı gezerdim." },
                { english: "If I were you, I would recommend a different hotel.", turkish: "Senin yerinde olsam, farklı bir otel önerirdim." }
            ]
        },
        {
            title: "2. Gramer Yapısı: If + Past Simple, Would + Verb",
            explanation: "Formül: 'If'li kısımda Geçmiş Zaman (Past Simple), sonuç kısmında ise 'Would' (yapardım/ederdim) kullanılır. Fiil 'would'dan sonra her zaman yalındır.",
            examples: [
                { english: "If she had more money, she would stay in a luxury hotel.", turkish: "Daha fazla parası olsa, lüks bir otelde kalırdı." },
                { english: "If we lived in London, we would go sightseeing every week.", turkish: "Londra'da yaşasak, her hafta turistik yerleri gezerdik." }
            ]
        },
        {
            title: "3. 'Was' vs 'Were' Kuralı",
            explanation: "Second Conditional'da 'I, he, she, it' özneleriyle 'was' kullanılabileceği gibi, 'were' kullanmak (özellikle tavsiye verirken) çok daha yaygın ve doğru kabul edilir.",
            examples: [
                { english: "If I were rich, I would buy a private jet.", turkish: "Zengin olsaydım, özel bir jet alırdım." },
                { english: "If he were here, he would explain everything.", turkish: "Burada olsaydı, her şeyi açıklardı." }
            ]
        },
        {
            title: "4. Could ve Might Kullanımı",
            explanation: "Sonuç kısmında 'would' yerine yetenek bildirmek için 'could' (yapabilirdim) veya düşük olasılık bildirmek için 'might' (belki yapardım) kullanılabilir.",
            examples: [
                { english: "If I spoke English perfectly, I could get a better job.", turkish: "İngilizceyi mükemmel konuşsam, daha iyi bir iş alabilirdim." },
                { english: "If we had time, we might visit the museum.", turkish: "Vaktimiz olsa belki müzeyi ziyaret ederdik." }
            ]
        }
    ],
    exercises: [
        { question: "If I ___ (be) you, I wouldn't worry about it.", options: ["am", "was", "were", "be"], correct: 2, explanation: "Tavsiye kalıbında 'If I were you' kullanılır." },
        { question: "If they ___ (have) enough money, they would buy a luxury villa.", options: ["have", "had", "would have", "has"], correct: 1, explanation: "If'li taraf Past Simple (had) olur." },
        { question: "We ___ (travel) more if we were on a better budget.", options: ["will travel", "travelled", "would travel", "travel"], correct: 2, explanation: "Sonuç cümlesinde 'would travel' kullanılır." },
        { question: "If I ___ (win) a car, I would give it to my brother.", options: ["won", "win", "would win", "winning"], correct: 0, explanation: "Past Simple formu: won." },
        { question: "What ___ you ___ (do) if you found a wallet on the street?", options: ["will / do", "did / do", "would / do", "do / do"], correct: 2, explanation: "Hayali soru: would you do." },
        { question: "If she ___ (study) harder, she could pass the exam.", options: ["studies", "studied", "will study", "study"], correct: 1, explanation: "Koşul kısmı Past Simple: studied." },
        { question: "If I ___ (not/work) today, I'd stay in bed.", options: ["don't work", "didn't work", "won't work", "not work"], correct: 1, explanation: "Geçmiş zamanın olumsuzu: didn't work." },
        { question: "A ___ question is about an imaginary situation.", options: ["hypothetical", "definite", "likely", "ambition"], correct: 0, explanation: "Varsayımsal = hypothetical." },
        { question: "If it ___ (not/rain), we could go for a walk.", options: ["don't rain", "doesn't rain", "didn't rain", "didn't rained"], correct: 2, explanation: "Olumsuz hayali durum: didn't + yalın fiil." },
        { question: "If I ___ (can) fly, I would go to Mars.", options: ["can", "could", "was can", "will"], correct: 1, explanation: "Can fiilinin 2. hali: could." }
    ]
};

// ===== ÜNİTE 164: PASSIVE VOICE (EDİLGEN YAPI) =====
const unit164Grammar: EnglishGrammarUnit = {
    unitId: 164,
    title: "The Passive Voice (Edilgen Yapı - Süreçler)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Eylemden Etkilenen Önemlidir",
            explanation: "Pasif yapı (Edilgen), eylemi yapan kişinin (özne) değil, eylemden etkilenen nesnenin daha önemli olduğu durumlarda kullanılır. 'Ali camı kırdı' (Etken) yerine 'Cam kırıldı' (Edilgen) demektir.",
            examples: [
                { english: "This phone was manufactured in Turkey.", turkish: "Bu telefon Türkiye'de imal edildi." },
                { english: "Electricity was discovered by Benjamin Franklin.", turkish: "Elektrik Benjamin Franklin tarafından keşfedildi." }
            ]
        },
        {
            title: "2. Formül: BE (am/is/are/was/were) + V3 (Past Participle)",
            explanation: "Pasif yapının temel anahtarı şudur: Hangi zamanda konuşuyorsanız 'BE' fiilini o zamana göre çekimleyin ve yanına fiilin 3. halini (V3) koyun.",
            examples: [
                { english: "The package is delivered every morning. (Present)", turkish: "Paket her sabah teslim edilir." },
                { english: "The building was constructed in 1990. (Past)", turkish: "Bina 1990'da inşa edildi." }
            ]
        },
        {
            title: "3. 'By' ile Eylemi Yapanı Belirtme",
            explanation: "Eğer eylemi kimin yaptığını söylemek istiyorsak, cümleye 'by' (tarafından) kelimesiyle ekleriz.",
            examples: [
                { english: "These experts designed the software.", turkish: "Bu uzmanlar yazılımı tasarladı. (Etken)" },
                { english: "The software was designed by these experts.", turkish: "Yazılım bu uzmanlarca tasarlandı. (Edilgen)" }
            ]
        },
        {
            title: "4. Neden Pasif Yapı Kullanırız?",
            explanation: "1. Yapan kişi bilinmiyorsa.\n2. Yapan kişi önemsizse.\n3. Nesne daha vurgulanmak isteniyorsa (Bilimsel, endüstriyel süreçler).",
            examples: [
                { english: "English is spoken worldwide.", turkish: "İngilizce dünya çapında konuşulur. (Herkes konuşur, önemli değil)" },
                { english: "My bike was stolen!", turkish: "Bisikletim çalındı! (Kim çaldı bilmiyorum)" }
            ]
        }
    ],
    exercises: [
        { question: "Penicillin ___ (discover) by Alexander Fleming.", options: ["discovered", "is discover", "was discovered", "was discover"], correct: 2, explanation: "Geçmişte olmuş bitmiş bir olay için 'was + V3' kullanılır." },
        { question: "The document ___ (require) for the application.", options: ["is required", "requires", "are required", "was require"], correct: 0, explanation: "Genel bir gereklilik olduğu için Present Passive: is required." },
        { question: "Millions of cars ___ (manufacture) every year.", options: ["is manufactured", "are manufactured", "were manufactured", "manufactured"], correct: 1, explanation: "Çoğul (cars) ve genel zaman (every year): are + V3." },
        { question: "The building was ___ in 1850.", options: ["construct", "constructed", "constructing", "constructs"], correct: 1, explanation: "Pasif yapıda fiilin 3. hali kullanılır." },
        { question: "The thief ___ (arrest) an hour ago.", options: ["was arrested", "is arrested", "arrested", "were arrested"], correct: 0, explanation: "An hour ago (geçmiş) ve tekil özne (thief): was arrested." },
        { question: "By whom was the radio ___?", options: ["invent", "invented", "inventing", "invents"], correct: 1, explanation: "İcat edildi = was invented." },
        { question: "Rice ___ (grow) in many Asian countries.", options: ["grows", "is grown", "is grow", "are grown"], correct: 1, explanation: "Üretilme/Yetiştirilme süreçlerinde Present Passive kullanılır." },
        { question: "The packages ___ (deliver) yesterday.", options: ["was delivered", "were delivered", "delivered", "are delivered"], correct: 1, explanation: "Çoğul (packages) + Past (yesterday): were delivered." },
        { question: "This picture ___ (paint) by Picasso.", options: ["was painted", "is painted", "painted", "paints"], correct: 0, explanation: "Geçmişte sanatçı tarafından yapılan eylem." },
        { question: "Coffee ___ (not/produce) in England.", options: ["don't produced", "isn't produced", "doesn't produce", "not produced"], correct: 1, explanation: "Present Passive olumsuz: isn't + V3." }
    ]
};

// ===== ÜNİTE 165: REPORTED SPEECH (DOLAYLI ANLATIM) =====
const unit165Grammar: EnglishGrammarUnit = {
    unitId: 165,
    title: "Reported Speech (Dolaylı Anlatım - Aktarma Cümleleri)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Birinin Sözünü Aktarma",
            explanation: "Reported Speech, bir kişinin söylediği cümleyi kendi kelimelerimizle başkasına aktarmaktır. 'Ali bana geliyorum dedi' gibi. Aktarırken zamanlar genellikle bir derece 'geçmişe' (backshift) kayar.",
            examples: [
                { english: "Direct: 'I am happy.'", turkish: "Doğrudan: 'Mutluyum.'" },
                { english: "Reported: He said that he was happy.", turkish: "Dolaylı: Mutlu olduğunu söyledi." }
            ]
        },
        {
            title: "2. Zaman Kayması (The Backshift Rules)",
            explanation: "Aktarma yaparken zamanlar şu şekilde değişir:\n• Present Simple → Past Simple (eat → ate)\n• Present Continuous → Past Continuous (is eating → was eating)\n• Will → Would (will go → would go)\n• Can → Could (can see → could see)",
            examples: [
                { english: "I will call you. → She said she would call me.", turkish: "Seni arayacağım. → Beni arayacağını söyledi." },
                { english: "I can help. → He said he could help.", turkish: "Yardım edebilirim. → Yardım edebileceğini söyledi." }
            ]
        },
        {
            title: "3. 'Say' vs 'Tell' Kullanımı",
            explanation: "• SAY: Genellikle kime söylendiği belirtilmez (He said that...).\n• TELL: Kime söylendiği mutlaka belirtilmelidir (He told ME that...).",
            examples: [
                { english: "She said she was tired.", turkish: "Yorgun olduğunu söyledi." },
                { english: "She told me that she was tired.", turkish: "Yana yorgun olduğunu söyledi." }
            ]
        },
        {
            title: "4. Zamir ve Zaman Zarflarının Değişimi",
            explanation: "Söz aktarılırken zamirler (I→he, my→his) ve zaman zarfları da değişir:\n• Now → Then\n• Today → That day\n• Tomorrow → The next day\n• Yesterday → The day before",
            examples: [
                { english: "I am working today. → He said he was working that day.", turkish: "Bugün çalışıyorum. → O gün çalıştığını söyledi." }
            ]
        }
    ],
    exercises: [
        { question: "'I like pizza.' - He said that he ___ pizza.", options: ["likes", "liked", "will like", "like"], correct: 1, explanation: "Present Simple, Past Simple'a (liked) dönüşür." },
        { question: "She ___ me that she would arrive late.", options: ["said", "told", "talked", "spoke"], correct: 1, explanation: "Kime söylendiği belirtildiği için 'told' kullanılır." },
        { question: "'I am flying tomorrow.' - He said he was flying ___.", options: ["tomorrow", "then", "the next day", "yesterday"], correct: 2, explanation: "Tomorrow, 'the next day'e dönüşür." },
        { question: "'Can you help me?' - She asked if I ___ help her.", options: ["can", "could", "will", "would"], correct: 1, explanation: "Can, 'could'a dönüşür." },
        { question: "He said that he ___ (not/mention) the secret.", options: ["didn't mentioned", "hadn't mentioned", "hasn't mentioned", "not mention"], correct: 1, explanation: "Past Simple, Past Perfect'e (hadn't mentioned) dönüşür." },
        { question: "They said they ___ (stay) in a luxury hotel.", options: ["stay", "were staying", "stying", "is staying"], correct: 1, explanation: "Present Continuous, Past Continuous'a dönüşür." },
        { question: "Mark said that he ___ (be) busy.", options: ["is", "was", "were", "been"], correct: 1, explanation: "am/is/are, 'was/were'e dönüşür." },
        { question: "'I will achieve my goal.' - She said she ___ achieve her goal.", options: ["will", "would", "shall", "won't"], correct: 1, explanation: "Will, 'would'a dönüşür." },
        { question: "She suggested that we ___ (inquire) about the prices.", options: ["should inquire", "inquired", "inquires", "inquiry"], correct: 0, explanation: "Öneri cümlelerinde 'should' veya 'yalın fiil' kullanılır." },
        { question: "He admitted that he ___ (make) a mistake.", options: ["made", "had made", "has made", "making"], correct: 1, explanation: "Yapılan bir hatayı aktarırken bir derece geriye (Past Perfect) gidilir." }
    ]
};

// ===== ÜNİTE 166: PHRASAL VERBS 1 (TEMELLER) =====
// ===== ÜNİTE 166: PHRASAL VERBS 1 (TEMELLER) =====
const unit166Grammar: EnglishGrammarUnit = {
    unitId: 166,
    title: "Phrasal Verbs - Part 1 (Deyimsel Fiiller - Giriş)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Fiil + Edat = Yeni Anlam",
            explanation: "İngilizcede bir fiilin yanına 'up, down, off, on, out' gibi edatların gelerek fiilin anlamını tamamen değiştirmesine 'Phrasal Verb' denir. B1 seviyesinde bunları parça parça öğrenmek en doğrusudur.",
            examples: [
                { english: "Pick up the kids from school.", turkish: "Çocukları okuldan al." },
                { english: "They set up a new meeting.", turkish: "Yeni bir toplantı ayarladılar/kurdular." },
                { english: "Can you find out the truth?", turkish: "Gerçeği öğrenebilir misin?" }
            ]
        },
        {
            title: "2. Ayrılabilen Phrasal Verbler (Separable)",
            explanation: "Bazı phrasal verblerde nesne, fiil ile edatın arasına girebilir. Eğer nesne bir zamir ise (it, him, her), MUTLAKA araya girmelidir.",
            examples: [
                { english: "Turn on the TV. / Turn the TV on.", turkish: "Televizyonu aç." },
                { english: "Turn it on. (Doğru) / Turn on it. (Yanlış)", turkish: "Onu aç." },
                { english: "Pick me up at 8.", turkish: "Beni 8'de al." }
            ]
        },
        {
            title: "3. Ayrılmayan Phrasal Verbler (Inseparable)",
            explanation: "Bazı phrasal verbler ise asla ayrılamaz. Nesne her zaman edattan sonra gelir.",
            examples: [
                { english: "I'm looking for a job.", turkish: "İş arıyorum." },
                { english: "Look after the cat.", turkish: "Kediye bak/ilgilen." },
                { english: "She gets on the bus.", turkish: "Otobüse biniyor." }
            ]
        },
        {
            title: "4. Günlük Hayatta En Çok Kullanılanlar",
            explanation: "B1 seviyesinde sıkça karşınıza çıkacaklar:\n• Come back: Geri dönmek\n• Wake up: Uyanmak\n• Go out: Dışarı çıkmak\n• Take off: Havalanmak (uçak) veya Kıyafet çıkarmak",
            examples: [
                { english: "When will you come back?", turkish: "Ne zaman geri döneceksin?" },
                { english: "The plane took off on time.", turkish: "Uçak zamanında havalandı." }
            ]
        }
    ],
    exercises: [
        { question: "I need to ___ (find) why she is angry.", options: ["find out", "find up", "find off", "find in"], correct: 0, explanation: "Bir şeyi öğrenmek/çözmek = find out." },
        { question: "Can you ___ (pick) at the station?", options: ["pick me up", "pick up me", "pick up", "picking up"], correct: 0, explanation: "Zamir nesne (me) araya girmelidir." },
        { question: "She is ___ (look) her lost keys.", options: ["looking for", "looking after", "looking at", "looking up"], correct: 0, explanation: "Aramak = look for." },
        { question: "Please ___ (turn) the lights before you leave.", options: ["turn on", "turn off", "turn out", "turn in"], correct: 1, explanation: "Kapatmak = turn off." },
        { question: "I ___ (wake) early every morning.", options: ["wake up", "wake on", "wake off", "wake in"], correct: 0, explanation: "Uyanmak = wake up." },
        { question: "Don't forget to ___ (look) the dog.", options: ["look for", "look after", "look at", "look in"], correct: 1, explanation: "Bakmak/İlgilenmek = look after." },
        { question: "The plane will ___ (take) in ten minutes.", options: ["take off", "take up", "take on", "take in"], correct: 0, explanation: "Uçağın havalanması = take off." },
        { question: "We decided to ___ (go) for dinner.", options: ["go out", "go in", "go off", "go on"], correct: 0, explanation: "Dışarı çıkmak = go out." },
        { question: "When did they ___ (set) the company?", options: ["set up", "set in", "set off", "set on"], correct: 0, explanation: "Kurmak = set up." },
        { question: "I'll ___ (come) next week.", options: ["come back", "come on", "come in", "come off"], correct: 0, explanation: "Geri gelmek = come back." }
    ]
};

// ===== ÜNİTE 167: PHRASAL VERBS 2 (DEVAM) =====
const unit167Grammar: EnglishGrammarUnit = {
    unitId: 167,
    title: "Phrasal Verbs - Part 2 (Deyimsel Fiiller - Devam)",
    rules: [
        {
            title: "1. Üç Kelimeli Phrasal Verbler",
            explanation: "Bazı deyimsel fiiller bir fiil ve iki edattan oluşur. Bunlar asla ayrılmazlar ve nesne en sona gelir.",
            examples: [
                { english: "I ran out of milk.", turkish: "Sütüm bitti/tükendi." },
                { english: "We need to keep up with the changes.", turkish: "Değişikliklere ayak uydurmamız gerekiyor." },
                { english: "I'm looking forward to the holiday.", turkish: "Tatili dört gözle bekliyorum." }
            ]
        },
        {
            title: "2. Duygular ve İlişkiler",
            explanation: "İlişkilerimizi ve hislerimizi anlatmak için kullanılan yaygın kalıplar:\n• Get on with: Biriyle iyi geçinmek\n• Break up: Ayrılmak (ilişki)\n• Grow up: Büyümek\n• Cheer up: Neşelenmek",
            examples: [
                { english: "I get on well with my sister.", turkish: "Kız kardeşimle iyi geçiniyorum." },
                { english: "Where did you grow up?", turkish: "Nerede büyüdün?" }
            ]
        },
        {
            title: "3. İş ve Çalışma Hayatı",
            explanation: "Ofis veya çalışma ortamında kullanılanlar:\n• Carry on: Devam etmek\n• Fill in: Doldurmak (form, evrak)\n• Give up: Vazgeçmek/Bırakmak\n• Call off: İptal etmek",
            examples: [
                { english: "Please fill in this form.", turkish: "Lütfen bu formu doldurun." },
                { english: "Carry on working, please.", turkish: "Lütfen çalışmaya devam edin." }
            ]
        },
        {
            title: "4. Kıyafet ve Görünüş",
            explanation: "Kıyafetlerle ilgili:\n• Put on: Giymek\n• Take off: Çıkarmak\n• Try on: Denemek (mağazada)\n• Dress up: Şık giyinmek",
            examples: [
                { english: "Put on your coat, it's cold.", turkish: "Ceketini gi, hava soğuk." },
                { english: "Can I try this on?", turkish: "Bunu deneyebilir miyim?" }
            ]
        }
    ],
    exercises: [
        { question: "We've ___ (run) sugar. Can you buy some?", options: ["run out of", "run in on", "run off with", "run up to"], correct: 0, explanation: "Tükenmek = run out of." },
        { question: "Never ___ (give)! Success takes time.", options: ["give up", "give in", "give off", "give away"], correct: 0, explanation: "Vazgeçmek/Bırakmak = give up." },
        { question: "Please ___ (carry) with your story.", options: ["carry on", "carry up", "carry in", "carry out"], correct: 0, explanation: "Devam etmek = carry on." },
        { question: "You need to ___ (fill) this application form.", options: ["fill in", "fill up", "fill off", "fill on"], correct: 0, explanation: "Form doldurmak = fill in." },
        { question: "I ___ (get) well with my colleagues.", options: ["get on", "get off", "get up", "get in"], correct: 0, explanation: "İyi geçinmek = get on with." },
        { question: "She decided to ___ (break) with her boyfriend.", options: ["break up", "break off", "break out", "break in"], correct: 0, explanation: "İlişkiyi bitirmek = break up." },
        { question: "I'm ___ (look) to seeing you.", options: ["looking forward", "looking at", "looking for", "looking after"], correct: 0, explanation: "Dört gözle beklemek = look forward to." },
        { question: "The match was ___ (call) because of rain.", options: ["called off", "called out", "called on", "called in"], correct: 0, explanation: "İptal etmek = call off." },
        { question: "He ___ (grow) in a small village.", options: ["grew up", "grew in", "grew on", "grew off"], correct: 0, explanation: "Büyümek (past) = grew up." },
        { question: "___ (cheer)! Everything will be fine.", options: ["Cheer up", "Cheer on", "Cheer off", "Cheer in"], correct: 0, explanation: "Neşelenmek = cheer up." }
    ]
};

// ===== ÜNİTE 168: NEWS & MEDIA (HABERLER VE MEDYA) =====
const unit168Grammar: EnglishGrammarUnit = {
    unitId: 168,
    title: "News & Media (Haberler ve Medya - Gramer Vurgusu)",
    rules: [
        {
            title: "1. Haberlerde Pasif Yapı Kullanımı",
            explanation: "Haber metinlerinde eylemi yapan gazetecinin değil, olayın kendisinin önemli olması nedeniyle Pasif Yapı (Passive Voice) çok sık kullanılır.",
            examples: [
                { english: "The incident was reported by many sources.", turkish: "Olay pek çok kaynak tarafından rapor edildi." },
                { english: "New evidence has been discovered.", turkish: "Yeni kanıtlar keşfedildi." }
            ]
        },
        {
            title: "2. Dolaylı Anlatım ve Kaynak Belirtme",
            explanation: "Haberlerde başkalarının sözlerini aktarırken Reported Speech ve 'say, claim, state, report' gibi fiiller kullanılır.",
            examples: [
                { english: "Officials stated that the fire was under control.", turkish: "Yetkililer yangının kontrol altında olduğunu ifade ettiler." },
                { english: "It is claimed that the company will close.", turkish: "Şirketin kapanacağı iddia ediliyor." }
            ]
        },
        {
            title: "3. Medya Terimleri ve Gramer",
            explanation: "Audience (izleyici), broadcasting (yayıncılık), commercial (reklam) gibi kelimelerin cümle içindeki kullanımı B1 seviyesinde önemlidir.",
            examples: [
                { english: "The audience clapped at the end of the performance.", turkish: "Performans sonunda seyirci alkışladı." },
                { english: "The live broadcasting started at 8 PM.", turkish: "Canlı yayın saat 20:00'de başladı." }
            ]
        },
        {
            title: "4. 'Said to be' ve 'Thought to be' Kalıpları",
            explanation: "Haber dilinde yaygın olan bir diğer pasif kalıptır; '... olduğu söyleniyor/düşünülüyor' anlamı katar.",
            examples: [
                { english: "The movie is said to be very successful.", turkish: "Filmin çok başarılı olduğu söyleniyor." },
                { english: "The criminal is thought to be in London.", turkish: "Suçlunun Londra'da olduğu düşünülüyor." }
            ]
        }
    ],
    exercises: [
        { question: "The news ___ (broadcast) live every day.", options: ["is broadcast", "broadcasts", "is broadcasting", "was broadcasted"], correct: 0, explanation: "Genel durum/süreç: is broadcast." },
        { question: "It is ___ that the economy will grow next year.", options: ["claim", "claimed", "claiming", "claims"], correct: 1, explanation: "İddia ediliyor = It is claimed." },
        { question: "The journalist ___ that the story was true.", options: ["stated", "tell", "speak", "report"], correct: 0, explanation: "Belirtmek/İfade etmek (past) = stated." },
        { question: "A TV ___ interrupted the movie.", options: ["commercial", "drama", "review", "viral"], correct: 0, explanation: "Televizyon reklamı = TV commercial." },
        { question: "The video went ___ in just two days.", options: ["viral", "audience", "broadcasting", "series"], correct: 0, explanation: "Viral olmak = go viral." },
        { question: "The audience ___ (show) their appreciation.", options: ["showed", "is shown", "was showed", "shown"], correct: 0, explanation: "Seyirci takdirini gösterdi (active)." },
        { question: "He is said ___ a great actor.", options: ["to be", "being", "is", "was"], correct: 0, explanation: "is said + to be kalıbı." },
        { question: "I read a positive ___ of the new series.", options: ["review", "drama", "commercial", "viral"], correct: 0, explanation: "Eleştiri/İnceleme = review." },
        { question: "The incident is being ___ by the police.", options: ["investigate", "investigated", "investigating", "investigates"], correct: 1, explanation: "Şu an araştırılıyor (Progressive Passive): is being investigated." },
        { question: "Who ___ the performance yesterday?", options: ["presented", "is presented", "was presented", "presents"], correct: 0, explanation: "Dün kim sundu? (Active past)." }
    ]
};

// ===== ÜNİTE 169: ENVIRONMENTAL ISSUES (ÇEVRE SORUNLARI) =====
const unit169Grammar: EnglishGrammarUnit = {
    unitId: 169,
    title: "Environmental Issues (Modallar: Zorunluluk ve Öneri)",
    rules: [
        {
            title: "1. Tavsiye ve Öneri: 'Should' ve 'Ought to'",
            explanation: "Çevre sorunlarını tartışırken ne yapılması gerektiğini söylemek için kullanılır. 'Ought to' daha resmidir ama 'should' ile aynı anlamdadır.",
            examples: [
                { english: "We should recycle paper to protect forests.", turkish: "Ormanları korumak için kağıdı geri dönüştürmeliyiz." },
                { english: "Governments ought to reduce air pollution.", turkish: "Hükümetler hava kirliliğini azaltmalı." }
            ]
        },
        {
            title: "2. Kuvvetli Tavsiye ve Kaygı: 'Had better'",
            explanation: "'Yapsan iyi olur, yoksa kötü olur' anlamı taşır. 'Should'dan daha güçlüdür.",
            examples: [
                { english: "We had better stop global warming soon.", turkish: "Küresel ısınmayı yakında durdursak iyi olur (yoksa felaket olacak)." },
                { english: "You'd better not waste water.", turkish: "Suyu boşa harcamasan iyi olur." }
            ]
        },
        {
            title: "3. Zorunluluk: 'Must' ve 'Have to'",
            explanation: "• Must: Kişisel zorunluluk veya kural.\n• Have to: Dıştan gelen zorunluluk (yasalar, genel gereklilikler).",
            examples: [
                { english: "We must protect endangered species.", turkish: "Nesli tükenmekte olan türleri korumalıyız (Görevimiz)." },
                { english: "Companies have to follow environmental laws.", turkish: "Şirketler çevre yasalarına uymak zorunda." }
            ]
        },
        {
            title: "4. Yasaklama: 'Mustn't'",
            explanation: "Bir şeyin yapılmasının kesinlikle yasak olduğunu belirtir.",
            examples: [
                { english: "You mustn't throw trash in the nature.", turkish: "Doğaya çöp atmamalısın (Yasak)." },
                { english: "We mustn't ignore climate change.", turkish: "İklim değişikliğini görmezden gelmemeliyiz." }
            ]
        }
    ],
    exercises: [
        { question: "We ___ (recycle) more to save the planet.", options: ["should", "mustn't", "don't have to", "might not"], correct: 0, explanation: "Genel tavsiye: should." },
        { question: "You ___ (not/throw) plastic in the sea. It's forbidden.", options: ["mustn't", "don't have to", "should", "might"], correct: 0, explanation: "Kesin yasak: mustn't." },
        { question: "The government ___ (make) new laws for air pollution.", options: ["has to", "mustn't", "doesn't have to", "can't"], correct: 0, explanation: "Hukuki/dışsal zorunluluk: has to." },
        { question: "We ___ (stop) global warming now, or it will be too late.", options: ["had better", "could", "might", "shouldn't"], correct: 0, explanation: "Kuvvetli uyarı: had better." },
        { question: "Do we ___ (protect) wildlife?", options: ["have to", "must", "should", "ought"], correct: 0, explanation: "Soru formunda 'do' ile 'have to' kullanılır." },
        { question: "Endangered species ___ (save) by everyone.", options: ["must be saved", "must save", "must saving", "must to save"], correct: 0, explanation: "Modal + Passive: must be + V3." },
        { question: "You ___ (waste) energy. Turn off the lights.", options: ["shouldn't", "have to", "must", "ought to"], correct: 0, explanation: "Olumsuz tavsiye: shouldn't." },
        { question: "In my opinion, we ___ (use) less plastic.", options: ["should", "mustn't", "can't", "don't"], correct: 0, explanation: "Fikir beyan ederken tavsiye: should." },
        { question: "Natural ___ are limited.", options: ["resources", "pollutions", "environments", "wildlifes"], correct: 0, explanation: "Doğal kaynaklar = natural resources." },
        { question: "The ___ change is a global issue.", options: ["climate", "nature", "conservation", "sustainable"], correct: 0, explanation: "İklim değişikliği = climate change." }
    ]
};

// ===== ÜNİTE 170: SUSTAINABILITY (GERUNDS & INFINITIVES) =====
const unit170Grammar: EnglishGrammarUnit = {
    unitId: 170,
    title: "Sustainability (Gerunds and Infinitives - İsim Fiiller)",
    rules: [
        {
            title: "1. Gerund (Fiil + ing): Özlem ve Alışkanlık",
            explanation: "Bazı fiillerden sonra gelen ikinci fiil '-ing' takısı alır. Özellikle sevdiğimiz, sevmediğimiz veya başladığımız/bitirdiğimiz işlerde kullanılır.",
            examples: [
                { english: "I enjoy recycling paper.", turkish: "Kağıdı geri dönüştürmekten keyif alıyorum." },
                { english: "We should avoid wasting water.", turkish: "Suyu boşa harcamaktan kaçınmalıyız." },
                { english: "She suggested planting more trees.", turkish: "Daha fazla ağaç dikmeyi önerdi." }
            ]
        },
        {
            title: "2. Infinitive (To + Fiil): Amaç ve Niyet",
            explanation: "Bazı fiillerden sonra 'to' ile fiilin yalın hali gelir. Genellikle bir amaç, niyet veya karar bildirir.",
            examples: [
                { english: "We decide to use sustainable energy.", turkish: "Sürdürülebilir enerji kullanmaya karar verdik." },
                { english: "They want to preserve the local ecology.", turkish: "Yerel ekolojiyi korumak/muhafaza etmek istiyorlar." },
                { english: "I hope to see a cleaner world.", turkish: "Daha temiz bir dünya görmeyi umuyorum." }
            ]
        },
        {
            title: "3. 'To' Olmadan Kullanılanlar (Bare Infinitive)",
            explanation: "Make ve Let gibi fiillerden sonra ikinci fiil hiçbir ek almaz ve 'to' kullanılmaz.",
            examples: [
                { english: "Let nature sustain itself.", turkish: "Doğanın kendini sürdürmesine izin ver." },
                { english: "We made them recycle their trash.", turkish: "Onları çöplerini geri dönüştürmeye zorladık." }
            ]
        },
        {
            title: "4. Hem -ing Hem 'To' Alabilenler",
            explanation: "Like, love, start, begin gibi fiiller her iki yapıyla da kullanılabilir, anlam genellikle değişmez. Ancak 'remember, forget, stop' fiillerinde anlam DEĞİŞİR.",
            examples: [
                { english: "I started to recycle. / I started recycling.", turkish: "Geri dönüşüme başladım." },
                { english: "I stopped smoking. (Bıraktım)", turkish: "Sigarayı bıraktım." },
                { english: "I stopped to smoke. (İçmek için durdum)", turkish: "Sigara içmek için durdum." }
            ]
        }
    ],
    exercises: [
        { question: "We must avoid ___ (pollute) the air.", options: ["polluting", "to pollute", "pollute", "polluted"], correct: 0, explanation: "Avoid + Gerund (-ing) alır." },
        { question: "They decided ___ (use) sustainable resources.", options: ["to use", "using", "use", "used"], correct: 0, explanation: "Decide + Infinitive (to) alır." },
        { question: "I enjoy ___ (walk) in nature.", options: ["walking", "to walk", "walk", "walks"], correct: 0, explanation: "Enjoy + Gerund (-ing) alır." },
        { question: "Don't forget ___ (turn off) the lights.", options: ["to turn off", "turning off", "turn off", "turn"], correct: 0, explanation: "Yapılacak bir şeyi hatırlatırken forget + to kullanılır." },
        { question: "She suggested ___ (plant) more flowers.", options: ["planting", "to plant", "plant", "planted"], correct: 0, explanation: "Suggest + Gerund (-ing) alır." },
        { question: "We plan ___ (visit) the conservation center.", options: ["to visit", "visiting", "visit", "visited"], correct: 0, explanation: "Plan + Infinitive (to) alır." },
        { question: "Stop ___ (waste) water! It's important.", options: ["wasting", "to waste", "waste", "wasted"], correct: 0, explanation: "Bir eylemi durdurmak/bitirmek için stop + -ing kullanılır." },
        { question: "Let me ___ (help) you with those bags.", options: ["help", "to help", "helping", "helped"], correct: 0, explanation: "Let + nesne + yalın fiil kullanılır." },
        { question: "Our goal is ___ (preserve) biodiversity.", options: ["to preserve", "preserving", "preserve", "preserved"], correct: 0, explanation: "Amacı belirtirken 'is + to preserve' yapısı uygundur." },
        { question: "I remember ___ (see) this endangered bird.", options: ["seeing", "to see", "see", "saw"], correct: 0, explanation: "Geçmişteki bir anıyı hatırlarken remember + -ing kullanılır." }
    ]
};

// ===== ÜNİTE 171: CULTURE & TRADITIONS (KÜLTÜR VE GELENEKLER) =====
const unit171Grammar: EnglishGrammarUnit = {
    unitId: 171,
    title: "Culture & Traditions (Geçmiş Alışkanlıklar: Used to & Would)",
    rules: [
        {
            title: "1. 'Used to': Geçmişteki Durumlar ve Alışkanlıklar",
            explanation: "Geçmişte uzun süre devam etmiş ama artık bitmiş olan alışkanlıkları (habitual actions) veya durumları (states) anlatmak için kullanılır.",
            examples: [
                { english: "I used to live in a small village.", turkish: "Eskiden küçük bir köyde yaşardım." },
                { english: "We used to celebrate every festival together.", turkish: "Eskiden her festivali birlikte kutlardık." }
            ]
        },
        {
            title: "2. 'Would': Sadece Geçmişteki Eylemler",
            explanation: "'Would', geçmişteki tekrarlanan eylemleri anlatmak için 'used to' yerine kullanılabilir ancak geçmişteki durumları (be, have, live, like gibi fiiller) anlatmak için KULLANILAMAZ.",
            examples: [
                { english: "Every summer, we would go to the beach.", turkish: "Her yaz sahile giderdik. (Action - OK)" },
                { english: "I used to be a teacher. (Would be - YANLIŞ)", turkish: "Eskiden öğretmendim. (State - Sadece used to)" }
            ]
        },
        {
            title: "3. 'Used to' Olumsuz ve Soru Formu",
            explanation: "Soru ve olumsuz formda 'did' yardımcı fiili devreye girer ve 'used' kelimesindeki 'd' harfi düşer.",
            examples: [
                { english: "I didn't use to like spicy food.", turkish: "Eskiden baharatlı yemek sevmezdim." },
                { english: "Did you use to have a ritual for the morning?", turkish: "Eskiden sabahları bir ritüelin var mıydı?" }
            ]
        },
        {
            title: "4. Kültürel Miras ve Gelenek Terimleri",
            explanation: "Heritage (miras), custom (adet), ancestry (soy), identity (kimlik) gibi kelimeler B1 seviyesinde bu yapılarla sıkça kullanılır.",
            examples: [
                { english: "This custom used to be very popular.", turkish: "Bu adet eskiden çok popülerdi." },
                { english: "My ancestors used to live in this region.", turkish: "Atalarım bu bölgede yaşardı." }
            ]
        }
    ],
    exercises: [
        { question: "I ___ (live) in Paris when I was a child.", options: ["used to live", "would live", "use to live", "living"], correct: 0, explanation: "Yaşamak bir 'durum' (state) olduğu için 'used to' daha uygundur." },
        { question: "Every Sunday, my grandfather ___ (tell) us stories.", options: ["would tell", "used to telling", "would to tell", "use tell"], correct: 0, explanation: "Geçmişteki tekrarlanan eylemler için 'would' kullanılabilir." },
        { question: "Did you ___ (have) long hair?", options: ["use to have", "used to have", "would have", "used have"], correct: 0, explanation: "Soruda 'did' olduğu için 'use to' kullanılır." },
        { question: "We ___ (not/celebrate) Halloween in my country.", options: ["didn't used to celebrate", "didn't use to celebrate", "wouldn't celebrate", "don't use to celebrate"], correct: 1, explanation: "Olumsuz form: didn't use to." },
        { question: "I ___ (be) very shy, but now I'm confident.", options: ["used to be", "would be", "use to be", "was used to"], correct: 0, explanation: "'Be' fiili ile 'would' kullanılmaz." },
        { question: "This tradition ___ (exist) for centuries.", options: ["used to exist", "would exist", "uses to exist", "was existing"], correct: 0, explanation: "Exist (var olmak) bir durum bildirdiği için used to." },
        { question: "When I was young, I ___ (play) football every day.", options: ["would play", "use to play", "playing", "would played"], correct: 0, explanation: "Tekrarlanan eylem: would." },
        { question: "He ___ (have) a lot of hobbies.", options: ["used to have", "would have", "use to have", "having"], correct: 0, explanation: "Sahiplik/Durum: used to have." },
        { question: "___ you use to visit your grandparents?", options: ["Did", "Do", "Were", "Does"], correct: 0, explanation: "Used to sorusu 'Did' ile başlar." },
        { question: "They ___ (not/show) much interest in culture.", options: ["didn't use to show", "didn't used to show", "don't use to show", "wouldn't show"], correct: 0, explanation: "Olumsuz alışkanlık: didn't use to." }
    ]
};

// ===== ÜNİTE 172: ECONOMY BASICS (EKONOMİ TEMELLERİ - MİKTARLAR) =====
const unit172Grammar: EnglishGrammarUnit = {
    unitId: 172,
    title: "Economy Basics (Miktar Belirleyiciler: Quantifiers)",
    rules: [
        {
            title: "1. Sayılabilen ve Sayılamayan İsimler",
            explanation: "Ekonomide 'money, wealth, inflation' sayılamaz (uncountable); 'coins, dollars, investments' sayılabilir (countable) isimlerdir.",
            examples: [
                { english: "I have a few coins.", turkish: "Birkaç bozuk param var." },
                { english: "I have a little money.", turkish: "Biraz param var." }
            ]
        },
        {
            title: "2. 'A few' vs 'Few' ve 'A little' vs 'Little'",
            explanation: "• A few / A little: Az ama yeterli (Olumlu).\n• Few / Little: Çok az ve yetersiz (Olumsuz).",
            examples: [
                { english: "We have a little profit. (Az da olsa kârdayız)", turkish: "Biraz kârımız var." },
                { english: "We have little profit. (Neredeyse hiç kârımız yok)", turkish: "Çok az kârımız var." }
            ]
        },
        {
            title: "3. 'Plenty of', 'A lot of', 'Many/Much'",
            explanation: "Soru ve olumsuzlarda many/much; olumlularda a lot of/plenty of kullanımı B1 seviyesinde yaygındır.",
            examples: [
                { english: "There isn't much inflation this month.", turkish: "Bu ay çok enflasyon yok." },
                { english: "We have plenty of resources for the project.", turkish: "Proje için bolca kaynağımız var." }
            ]
        },
        {
            title: "4. Ekonomi ve Finans Terimleri",
            explanation: "Budget (bütçe), investment (yatırım), currency (para birimi) gibi kelimelerle miktar belirtmek ekonominin temelidir.",
            examples: [
                { english: "We made a huge investment.", turkish: "Büyük bir yatırım yaptık." },
                { english: "How much currency do you need?", turkish: "Ne kadar (yabancı) paraya ihtiyacın var?" }
            ]
        }
    ],
    exercises: [
        { question: "There is ___ (little) hope for the economy to recover soon.", options: ["little", "a little", "few", "a few"], correct: 0, explanation: "Hope sayılamaz ve 'umut az' anlamı için little kullanılır." },
        { question: "I have ___ (few) dollars left in my wallet.", options: ["a few", "a little", "little", "much"], correct: 0, explanation: "Dollar sayılabilir; a few (birkaç) uygundur." },
        { question: "We don't have ___ (much) money for luxury.", options: ["much", "many", "few", "a few"], correct: 0, explanation: "Money sayılamaz; olumsuzda much kullanılır." },
        { question: "There are ___ (plenty) of opportunities in this market.", options: ["plenty", "much", "little", "a little"], correct: 0, explanation: "Bolca = plenty of." },
        { question: "How ___ investments did you make?", options: ["many", "much", "little", "a few"], correct: 0, explanation: "Investments (sayılabilir) olduğu için 'many' kullanılır." },
        { question: "He has ___ (little) experience in finance.", options: ["little", "few", "a few", "many"], correct: 0, explanation: "Experience (deneyim) sayılamaz; 'az' anlamında little." },
        { question: "Can I have ___ (little) information about the budget?", options: ["a little", "a few", "few", "many"], correct: 0, explanation: "Information sayılamaz; a little (biraz) uygundur." },
        { question: "We made ___ (lot) of profit this year.", options: ["a lot", "many", "much", "very"], correct: 0, explanation: "Olumlu cümlede 'a lot of' yaygındır." },
        { question: "Only ___ (few) people invested in that company.", options: ["a few", "a little", "much", "little"], correct: 0, explanation: "People sayılabilir; a few (birkaç)." },
        { question: "Is there ___ (much) risk in this plan?", options: ["much", "many", "few", "a little"], correct: 0, explanation: "Risk (sayılamaz) sorusu: much." }
    ]
};

// ===== ÜNİTE 173: DEBATE SKILLS (TARTIŞMA BECERİLERİ - BAĞLAÇLAR) =====
const unit173Grammar: EnglishGrammarUnit = {
    unitId: 173,
    title: "Debate & Arguments (Bağlaçlar: Zıtlık ve Neden-Sonuç)",
    rules: [
        {
            title: "1. Zıtlık Bağlaçları: 'However' ve 'Nevertheless'",
            explanation: "İki zıt fikri birbirine bağlar. Genellikle yeni bir cümleye başlarken kullanılır ve arkasından virgül gelir.",
            examples: [
                { english: "He is rich. However, he is not happy.", turkish: "O zengin. Ancak mutlu değil." },
                { english: "The plan is risky. Nevertheless, we should try.", turkish: "Plan riskli. Yine de denemeliyiz." }
            ]
        },
        {
            title: "2. 'Although' ve 'Even though'",
            explanation: "'...e rağmen' anlamı katar. Yanına tam cümle (Özne + Yüklem) alır.",
            examples: [
                { english: "Although it was expensive, I bought it.", turkish: "Pahalı olmasına rağmen onu satın aldım." },
                { english: "Even though I disagree, I respect your opinion.", turkish: "Katılmamama rağmen fikrine saygı duyuyorum." }
            ]
        },
        {
            title: "3. 'Despite' ve 'In spite of'",
            explanation: "Anlamı 'although' ile aynıdır ama dilbilgisel yapısı farklıdır. Yanına cümle DEĞİL, isim veya isim tamlaması alır.",
            examples: [
                { english: "Despite the rain, we went out.", turkish: "Yağmura rağmen dışarı çıktık." },
                { english: "In spite of his age, he is very active.", turkish: "Yaşına rağmen çok aktif." }
            ]
        },
        {
            title: "4. Neden-Sonuç: 'Therefore' ve 'Consequently'",
            explanation: "Sonuç bildirmek için kullanılır. 'Bu nedenle, sonuç olarak' anlamlarına gelir.",
            examples: [
                { english: "He studied hard. Therefore, he passed.", turkish: "Sıkı çalıştı. Bu nedenle geçti." },
                { english: "The prices rose. Consequently, sales dropped.", turkish: "Fiyatlar yükseldi. Sonuç olarak satışlar düştü." }
            ]
        }
    ],
    exercises: [
        { question: "___ it was raining, they played football.", options: ["Although", "Despite", "However", "Therefore"], correct: 0, explanation: "Cümle (it was raining) geldiği için Although kullanılır." },
        { question: "___ the traffic, we arrived on time.", options: ["Despite", "Although", "Even though", "Nevertheless"], correct: 0, explanation: "İsim (the traffic) geldiği için Despite kullanılır." },
        { question: "I like the car. ___, it's too expensive.", options: ["However", "Although", "Despite", "Therefore"], correct: 0, explanation: "Zıtlık bildiren ve cümleye yeni başlayan bağlaç: However." },
        { question: "He was sick. ___, he went to work.", options: ["Nevertheless", "Although", "Because", "Moreover"], correct: 0, explanation: "Yine de = Nevertheless." },
        { question: "___ my opinion is different, I will listen.", options: ["Even though", "Despite", "In spite of", "Therefore"], correct: 0, explanation: "Cümle yapısı: Even though." },
        { question: "She is very talented. ___, she is very humble.", options: ["Moreover", "However", "Consequently", "Because"], correct: 0, explanation: "Olumlu bir ekleme (Dahası): Moreover." },
        { question: "The weather was bad. ___, the flight was cancelled.", options: ["Therefore", "Although", "Despite", "However"], correct: 0, explanation: "Neden-sonuç: Therefore." },
        { question: "We continued the project ___ the difficulties.", options: ["despite", "although", "even though", "however"], correct: 0, explanation: "İsim tamlaması (the difficulties) öncesinde despite." },
        { question: "I don't agree. ___, I will help you.", options: ["Nonetheless", "Because", "Since", "If"], correct: 0, explanation: "Ancak/Yine de = Nonetheless." },
        { question: "___ he works hard, he doesn't earn much.", options: ["Although", "In spite of", "So", "But"], correct: 0, explanation: "Cümle yapısı ile zıtlık: Although." }
    ]
};

// ===== ÜNİTE 174: PRESENTATIONS (SUNUM YAPMA - YÖNLENDİRME) =====
const unit174Grammar: EnglishGrammarUnit = {
    unitId: 174,
    title: "Presentations (Sunum Dili: Signposting)",
    rules: [
        {
            title: "1. Sunuma Başlama ve Giriş",
            explanation: "Sunuma başlarken dinleyiciye yol göstermek (signposting) için standart kalıplar kullanılır.",
            examples: [
                { english: "First of all, I'd like to welcome you.", turkish: "Öncelikle, hepinize hoş geldiniz demek istiyorum." },
                { english: "Today, I'm going to talk about...", turkish: "Bugün ... hakkında konuşacağım." }
            ]
        },
        {
            title: "2. Konu Geçişleri (Moving on)",
            explanation: "Bir konudan diğerine geçerken dinleyicinin kopmamasını sağlar.",
            examples: [
                { english: "Now, let's move on to the next point.", turkish: "Şimdi, bir sonraki noktaya geçelim." },
                { english: "Turning now to the structure of...", turkish: "Şimdi ...'nın yapısına dönecek olursak..." }
            ]
        },
        {
            title: "3. Vurgulama ve Detaylandırma",
            explanation: "Önemli noktaları belirtmek için kullanılır.",
            examples: [
                { english: "I'd like to highlight the following point.", turkish: "Şu noktayı vurgulamak istiyorum." },
                { english: "Let's look at this chart in more detail.", turkish: "Bu grafiğe daha detaylı bakalım." }
            ]
        },
        {
            title: "4. Özetleme ve Kapanış",
            explanation: "Sunumu bitirirken ana fikirleri toplamak için kullanılır.",
            examples: [
                { english: "To sum up, we need a new strategy.", turkish: "Özetlemek gerekirse, yeni bir stratejiye ihtiyacımız var." },
                { english: "In conclusion, thank you for listening.", turkish: "Sonuç olarak, dinlediğiniz için teşekkürler." }
            ]
        }
    ],
    exercises: [
        { question: "___, I'd like to introduce myself.", options: ["First of all", "After all", "To sum up", "Moving on"], correct: 0, explanation: "Giriş kalıbı: First of all." },
        { question: "Now, let's ___ to the next topic.", options: ["move on", "go in", "stay at", "come back"], correct: 0, explanation: "Konu geçişi: move on." },
        { question: "I'd like to ___ the importance of this goal.", options: ["highlight", "shadow", "darken", "hide"], correct: 0, explanation: "Vurgulamak = highlight." },
        { question: "___, I believe our project was successful.", options: ["In conclusion", "At start", "First", "Second"], correct: 0, explanation: "Kapanış kalıbı: In conclusion." },
        { question: "Let's look at the data in more ___.", options: ["detail", "general", "fast", "short"], correct: 0, explanation: "Detaylı bakmak = in more detail." },
        { question: "Does anyone have any ___?", options: ["questions", "answers", "speeches", "summaries"], correct: 0, explanation: "Sunum sonu sorusu: Herhangi bir sorusu olan var mı?" },
        { question: "___ what I said earlier...", options: ["To repeat", "To highlight", "To sum up", "As I said"], correct: 0, explanation: "Tekrarlamak gerekirse = To repeat / As I said." },
        { question: "My ___ today is divided into three parts.", options: ["presentation", "summary", "topic", "visual"], correct: 0, explanation: "Sunum (presentation) kısımlara ayrılır." },
        { question: "Please refer to the ___ on the screen.", options: ["visual aids", "vocals", "audio", "background"], correct: 0, explanation: "Görsel yardımcılar = visual aids." },
        { question: "That ___ me to my final point.", options: ["brings", "takes", "goes", "sends"], correct: 0, explanation: "Beni son noktama getiriyor = That brings me to..." }
    ]
};

// ===== ÜNİTE 175: LITERATURE (EDEBİYAT - ANLATIM ZAMANLARI) =====
const unit175Grammar: EnglishGrammarUnit = {
    unitId: 175,
    title: "Literature (Anlatı Zamanları: Narrative Tenses)",
    rules: [
        {
            title: "1. Past Simple: Olaylar Zinciri",
            explanation: "Hikâyedeki ana olayları ve sırasıyla gerçekleşen eylemleri anlatmak için kullanılır.",
            examples: [
                { english: "The protagonist opened the door and entered the room.", turkish: "Baş kahraman kapıyı açtı ve odaya girdi." },
                { english: "The author wrote his first novel in 1920.", turkish: "Yazar ilk romanını 1920'da yazdı." }
            ]
        },
        {
            title: "2. Past Continuous: Arka Plan Bilgisi",
            explanation: "Eylem gerçekleşirken devam eden durumları veya hikâyenin atmosferini (setting the scene) anlatmak için kullanılır.",
            examples: [
                { english: "The sun was shining and the birds were singing.", turkish: "Güneş parlıyor ve kuşlar şarkı söylüyordu." },
                { english: "He was walking alone when he saw a mysterious shadow.", turkish: "Gizemli bir gölge gördüğünde yalnız yürüyordu." }
            ]
        },
        {
            title: "3. Past Perfect: 'Daha Önce' Olmuş Olaylar",
            explanation: "Geçmişte anlattığımız bir olaydan daha önce gerçekleşmiş eylemleri belirtmek için kullanılır (Geçmişin geçmişi).",
            examples: [
                { english: "She realized she had lost her character's notebook.", turkish: "Karakterinin not defterini kaybettiğini fark etti. (Önce kaybetti, sonra fark etti)" },
                { english: "The plot was complex because many things had happened before.", turkish: "Olay örgüsü karmaşıktı çünkü daha önce pek çok şey olmuştu." }
            ]
        },
        {
            title: "4. Edebiyat ve Kurgu Terimleri",
            explanation: "Author (yazar), plot (olay örgüsü), character (karakter), chapter (bölüm), narrative (anlatı) gibi kelimelerle bu zamanlar kullanılır.",
            examples: [
                { english: "In the first chapter, we meet the main character.", turkish: "İlk bölümde ana karakterle tanışıyoruz." },
                { english: "The plot had a surprising turn.", turkish: "Olay örgüsünün sürpriz bir dönüşü vardı." }
            ]
        }
    ],
    exercises: [
        { question: "While I ___ (read) the novel, the phone rang.", options: ["was reading", "read", "had read", "reading"], correct: 0, explanation: "Devam eden eylem (arka plan): was reading." },
        { question: "The author ___ (write) five chapters before he died.", options: ["had written", "wrote", "was writing", "write"], correct: 0, explanation: "Ölmeden önce (daha geçmiş): had written." },
        { question: "She ___ (pick up) the book and started to read.", options: ["picked up", "was picking up", "had picked up", "picks up"], correct: 0, explanation: "Sıralı olaylar zinciri: Past Simple." },
        { question: "The sun ___ (set) when they reached the house.", options: ["was setting", "set", "had set", "sets"], correct: 0, explanation: "Atmosphere/Setting: was setting." },
        { question: "He didn't know that she ___ (leave) a letter.", options: ["had left", "left", "was leaving", "leaves"], correct: 0, explanation: "Daha önce gerçekleşen eylem: had left." },
        { question: "The main ___ was very brave.", options: ["character", "plot", "chapter", "fiction"], correct: 0, explanation: "Karakter = character." },
        { question: "The ___ of the story was very interesting.", options: ["plot", "author", "writing", "book"], correct: 0, explanation: "Olay örgüsü = plot." },
        { question: "Suddenly, the light ___ (go out).", options: ["went out", "was going out", "had gone out", "goes out"], correct: 0, explanation: "Aniden olan kısa olay: went out." },
        { question: "By the time we arrived, the play ___ (start).", options: ["had started", "started", "was starting", "starts"], correct: 0, explanation: "Varmamızdan önce: had started." },
        { question: "I ___ (never/read) such a good fiction before.", options: ["had never read", "never read", "was never reading", "never reading"], correct: 0, explanation: "Deneyim (geçmiş öncesi): had never read." }
    ]
};

// ===== ÜNİTE 176: ACADEMIC WRITING (AKADEMİK YAZMA - RESMİ YAPILAR) =====
const unit176Grammar: EnglishGrammarUnit = {
    unitId: 176,
    title: "Academic Writing (Resmi Dil ve Pasif Yapı)",
    rules: [
        {
            title: "1. Pasif Yapının Önemi (Formal Passive)",
            explanation: "Akademik yazımda 'Ben' veya 'Biz' yerine 'Yapıldı, görüldü' gibi nesnel bir dil kullanmak için Pasif Yapı tercih edilir.",
            examples: [
                { english: "The research was conducted last year.", turkish: "Araştırma geçen yıl yürütüldü." },
                { english: "It is widely believed that...", turkish: "Yaygın olarak ... inanılmaktadır." }
            ]
        },
        {
            title: "2. Nominalization (İsimleştirme)",
            explanation: "Fiil kullanmak yerine isim formlarını kullanmak dili daha akademik ve ağır kılar.",
            examples: [
                { english: "We analyzed the data. (Daha az akademik)", turkish: "Verileri analiz ettik." },
                { english: "An analysis of the data was carried out. (Akademik)", turkish: "Verilerin bir analizi gerçekleştirildi." }
            ]
        },
        {
            title: "3. 'One' ve 'The reader' Kullanımı",
            explanation: "Şahıs zamirlerinden (I, you) kaçınmak için genel hitaplar kullanılır.",
            examples: [
                { english: "One must consider the consequences.", turkish: "Sonuçlar dikkate alınmalıdır." },
                { english: "The reader should note that...", turkish: "Okuyucu ...'yı not etmelidir." }
            ]
        },
        {
            title: "4. Alıntı ve Kaynak Belirtme (Citation)",
            explanation: "Cite (atıfta bulunmak), reference (kaynak), analyze (analiz etmek) gibi fiillerin kullanımı.",
            examples: [
                { english: "According to Smith (2020),...", turkish: "Smith'e (2020) göre,..." },
                { english: "As shown in the table below,...", turkish: "Aşağıdaki tabloda gösterildiği gibi,..." }
            ]
        }
    ],
    exercises: [
        { question: "The experiment ___ (carry out) in a laboratory.", options: ["was carried out", "carried out", "is carry out", "was carry out"], correct: 0, explanation: "Passive Past: was carried out." },
        { question: "It is ___ that this method is effective.", options: ["suggested", "suggest", "suggesting", "suggests"], correct: 0, explanation: "Önerilmektedir/Düşünülmektedir = is suggested." },
        { question: "You should ___ your sources in the essay.", options: ["cite", "read", "write", "say"], correct: 0, explanation: "Atıfta bulunmak = cite." },
        { question: "A detailed ___ of the results is necessary.", options: ["analysis", "analyze", "analyzing", "analyzed"], correct: 0, explanation: "İsim formu: analysis." },
        { question: "___ shown in the chart, the rate is rising.", options: ["As", "How", "Like", "Which"], correct: 0, explanation: "Kalup: As shown in..." },
        { question: "This essay provides a ___ of the current situation.", options: ["summary", "sum", "summarizing", "summarized"], correct: 0, explanation: "Özet = summary." },
        { question: "The data ___ (collect) online.", options: ["was collected", "collected", "is collect", "collecting"], correct: 0, explanation: "Toplandı (edilgen) = was collected." },
        { question: "One ___ be careful when drawing conclusions.", options: ["must", "maybe", "can", "is"], correct: 0, explanation: "Genel zorunluluk: One must..." },
        { question: "The results ___ (present) in the next chapter.", options: ["will be presented", "will present", "presents", "presented"], correct: 0, explanation: "Future Passive: will be + V3." },
        { question: "References should be ___ in alphabetical order.", options: ["listed", "list", "listing", "lists"], correct: 0, explanation: "Listelenmelidir = should be listed." }
    ]
};

// ===== ÜNİTE 177: SCIENCE & TECHNOLOGY (BİLİM VE TEKNOLOJİ - MODALLER) =====
const unit177Grammar: EnglishGrammarUnit = {
    unitId: 177,
    title: "Science & Technology (Modallar ve Koşullu Cümleler)",
    rules: [
        {
            title: "1. Kesinlik ve Olasılık: 'Must', 'Might', 'Can't'",
            explanation: "Bilimsel tahminlerde ve çıkarımlarda kullanılır:\n• Must: %100 Emin (Olumlu)\n• Can't: %100 Emin (Olumsuz/İmkansız)\n• Might/May: %50 Olasılık",
            examples: [
                { english: "This discovery might change the world.", turkish: "Bu keşif dünyayı değiştirebilir (olasılık)." },
                { english: "Water must freeze at 0 degrees.", turkish: "Su 0 derecede donmalı (mantıksal çıkarım)." }
            ]
        },
        {
            title: "2. Zero Conditional (Bilimsel Gerçekler)",
            explanation: "Her zaman doğru olan bilimsel yasalar için If + Present, Present yapısı kullanılır.",
            examples: [
                { english: "If you heat water to 100 degrees, it boils.", turkish: "Suyu 100 dereceye ısıtırsan kaynar." },
                { english: "If there is no oxygen, fire goes out.", turkish: "Oksijen olmazsa ateş söner." }
            ]
        },
        {
            title: "3. 'Can' ve 'Be able to' (Yetenek ve Kapasite)",
            explanation: "Teknolojik cihazların kapasitesini anlatmak için kullanılır.",
            examples: [
                { english: "AI can analyze large amounts of data.", turkish: "YZ büyük miktarda veriyi analiz edebilir." },
                { english: "Soon, robots will be able to perform surgery.", turkish: "Yakında robotlar ameliyat yapabilecek." }
            ]
        },
        {
            title: "4. Teknoloji Terimleri",
            explanation: "Device (cihaz), innovation (yenilik), artificial (yapay), virtual (sanal), data (veri).",
            examples: [
                { english: "This digital device is very small.", turkish: "Bu dijital cihaz çok küçük." },
                { english: "Virtual reality is a major innovation.", turkish: "Sanal gerçeklik büyük bir yenilik." }
            ]
        }
    ],
    exercises: [
        { question: "If you mix blue and yellow, you ___ green.", options: ["get", "will get", "got", "getting"], correct: 0, explanation: "Zero Conditional (Genel gerçek): get." },
        { question: "This new engine ___ save a lot of fuel.", options: ["might", "mustn't", "can't", "is"], correct: 0, explanation: "Potansiyel/Olasılık: might." },
        { question: "She ___ be a scientist. She doesn't know anything about biology.", options: ["can't", "must", "might", "should"], correct: 0, explanation: "Mantıksal imkansızlık: can't." },
        { question: "In the future, we ___ (be able to) visit other planets.", options: ["will be able to", "can", "could", "been able to"], correct: 0, explanation: "Gelecekteki yetenek: will be able to." },
        { question: "A smartphone is a multifunctional ___.", options: ["device", "data", "innovation", "science"], correct: 0, explanation: "Cihaz = device." },
        { question: "If there is a glitch, the computer ___ (shut down).", options: ["shuts down", "will shut down", "shut down", "shutting"], correct: 0, explanation: "Zero Conditional (Sistem kuralı): shuts down." },
        { question: "They ___ have discovered the cure. People are still sick.", options: ["can't", "must", "may", "could"], correct: 0, explanation: "Olumsuz çıkarım: can't." },
        { question: "Artificial ___ is the future of tech.", options: ["intelligence", "data", "device", "innovation"], correct: 0, explanation: "Yapay Zeka = Artificial Intelligence." },
        { question: "Scientists ___ conduct experiments in labs.", options: ["usually", "is", "was", "be"], correct: 0, explanation: "Genel alışkanlık: usually." },
        { question: "Data ___ processed by the main server.", options: ["is", "are", "do", "has"], correct: 0, explanation: "Edilgen Present: is processed." }
    ]
};

// ===== ÜNİTE 178: HEALTH & NUTRITION (SAĞLIK VE BESLENME - MODALLER) =====
const unit178Grammar: EnglishGrammarUnit = {
    unitId: 178,
    title: "Health & Nutrition (Modallar: İzin, Olasılık ve Tavsiye)",
    rules: [
        {
            title: "1. İzin ve Rica: 'May' ve 'Can'",
            explanation: "Hastanede veya birinden bir şey isterken kullanılır. 'May' daha resmidir.",
            examples: [
                { english: "May I see the doctor now?", turkish: "Doktoru şimdi görebilir miyim?" },
                { english: "Can you help me with my diet?", turkish: "Diyetim konusunda bana yardım edebilir misin?" }
            ]
        },
        {
            title: "2. Tavsiye: 'Better' ve 'Should'",
            explanation: "Sağlık tavsiyeleri verirken kullanılır.",
            examples: [
                { english: "You should eat a balanced diet.", turkish: "Dengeli beslenmelisin." },
                { english: "You'd better see a dentist for that pain.", turkish: "Şu ağrı için bir dişçiye görünsen iyi olur." }
            ]
        },
        {
            title: "3. Olasılıklar: 'Might' ve 'Could'",
            explanation: "Sağlık sonuçları hakkında konuşurken kullanılır.",
            examples: [
                { english: "Eating too much sugar could cause obesity.", turkish: "Çok fazla şeker yemek obeziteye neden olabilir." },
                { english: "Lack of vitamins might make you feel tired.", turkish: "Vitamin eksikliği seni yorgun hissettirebilir." }
            ]
        },
        {
            title: "4. Sağlık ve Beslenme Terimleri",
            explanation: "Diet (diyet/beslenme), nutrition (beslenme), balanced (dengeli), protein (protein), exercise (egzersiz).",
            examples: [
                { english: "Good nutrition is vital for kids.", turkish: "İyi beslenme çocuklar için hayatidir." },
                { english: "Daily exercise improves wellness.", turkish: "Günlük egzersiz zindeliği artırır." }
            ]
        }
    ],
    exercises: [
        { question: "You ___ (eat) vegetables every day.", options: ["should", "could", "mustn't", "may not"], correct: 0, explanation: "Sağlık tavsiyesi: should." },
        { question: "___ I have a glass of water, please?", options: ["Can", "Must", "Should", "Shall"], correct: 0, explanation: "Rica: Can I...?" },
        { question: "Too much salt ___ lead to high blood pressure.", options: ["could", "must", "should", "ought to"], correct: 0, explanation: "Olasılık/Sebep: could." },
        { question: "You ___ (not/smoke). It's bad for your lungs.", options: ["shouldn't", "may", "can", "must"], correct: 0, explanation: "Olumsuz tavsiye: shouldn't." },
        { question: "A ___ diet includes all food groups.", options: ["balanced", "hungry", "fat", "sugar"], correct: 0, explanation: "Dengeli diyet = balanced diet." },
        { question: "I ___ (feel) much better since I started exercising.", options: ["have felt", "feel", "felt", "was feeling"], correct: 0, explanation: "O zamandan beri (deneyim/süreç): have felt." },
        { question: "___ I ask a question about the medicine?", options: ["May", "Must", "Should", "Would"], correct: 0, explanation: "Resmi izin isteme: May I...?" },
        { question: "Wellness ___ (improve) by regular sleep.", options: ["is improved", "improves", "improved", "improving"], correct: 0, explanation: "Pasif genel gerçek: is improved." },
        { question: "You ___ better not eat that junk food.", options: ["had", "should", "would", "must"], correct: 0, explanation: "Kalıp: had better." },
        { question: "Protein is ___ (require) for muscle growth.", options: ["required", "require", "requiring", "requires"], correct: 0, explanation: "Gereklidir (edilgen): is required." }
    ]
};

// ===== ÜNİTE 179: PSYCHOLOGY BASICS (PSİKOLOJİ TEMELLERİ - FİİLER) =====
const unit179Grammar: EnglishGrammarUnit = {
    unitId: 179,
    title: "Psychology Basics (Gerunds vs Infinitives - Anlam Farkı)",
    rules: [
        {
            title: "1. Hatırlama ve Unutma: 'Remember' / 'Forget'",
            explanation: "• + To: Yapılması gereken bir şeyi hatırlamak/unutmak.\n• + ing: Geçmişte yapılmış bir şeyi hatırlamak/unutmak.",
            examples: [
                { english: "Remember to breathe deeply during stress.", turkish: "Stres anında derin nefes almayı hatırla (geleceğe yönelik)." },
                { english: "I remember talking to the therapist.", turkish: "Terapistle konuştuğumu hatırlıyorum (geçmişteki anı)." }
            ]
        },
        {
            title: "2. Deneme: 'Try'",
            explanation: "• + To: Çabalamak, zorlanmak.\n• + ing: Deney yapmak, çözüm yolu olarak denemek.",
            examples: [
                { english: "He tried to cope with his anxiety.", turkish: "Kaygısıyla başa çıkmaya çalıştı/çabaladı." },
                { english: "Try meditating every morning.", turkish: "Her sabah meditasyon yapmayı dene (belki işe yarar)." }
            ]
        },
        {
            title: "3. Durdurma: 'Stop'",
            explanation: "• + To: Başka bir şey yapmak amacıyla durmak.\n• + ing: Bir eylemi tamamen bitirmek/bırakmak.",
            examples: [
                { english: "I stopped to listen to my inner thoughts.", turkish: "İç düşüncelerimi dinlemek için durdum." },
                { english: "Stop worrying about the future.", turkish: "Gelecek hakkında endişelenmeyi bırak." }
            ]
        },
        {
            title: "4. Psikoloji ve Zihin Terimleri",
            explanation: "Mind (zihin), emotion (duygu), behavior (davranış), therapy (terapi), stress (stres).",
            examples: [
                { english: "Human behavior is very complex.", turkish: "İnsan davranışı çok karmaşıktır." },
                { english: "Meditation affects the state of mind.", turkish: "Meditasyon zihin durumunu etkiler." }
            ]
        }
    ],
    exercises: [
        { question: "I forgot ___ (lock) the clinic's door.", options: ["to lock", "locking", "lock", "locked"], correct: 0, explanation: "Yapmam gerekeni unuttum (to lock)." },
        { question: "Do you remember ___ (see) him before?", options: ["seeing", "to see", "see", "seen"], correct: 0, explanation: "Anıyı hatırlama (-ing)." },
        { question: "Try ___ (exercise) to reduce stress.", options: ["exercising", "to exercise", "exercise", "exercised"], correct: 0, explanation: "Çözüm yolu olarak denemek (-ing)." },
        { question: "I stopped ___ (smoke) last year.", options: ["smoking", "to smoke", "smoke", "smoked"], correct: 0, explanation: "Eylemi bırakmak (-ing)." },
        { question: "Please stop ___ (watch) TV and sleep.", options: ["watching", "to watch", "watch", "watched"], correct: 0, explanation: "Eylemi bitirmek (-ing)." },
        { question: "I tried ___ (open) the window, but it was stuck.", options: ["to open", "opening", "open", "opened"], correct: 0, explanation: "Çabalamak/Zorlanmak (to open)." },
        { question: "I remember ___ (read) that psychology book.", options: ["reading", "to read", "read", "reads"], correct: 0, explanation: "Geçmişte yapılmış bir eylemi hatırlama (-ing)." },
        { question: "She forgot ___ (bring) her notes to therapy.", options: ["to bring", "bringing", "bring", "brought"], correct: 0, explanation: "Yapması gerekeni unuttu (to bring)." },
        { question: "He stopped ___ (buy) a coffee on his way to work.", options: ["to buy", "buying", "buy", "bought"], correct: 0, explanation: "Amaç için durmak (to buy)." },
        { question: "Try ___ (not/think) too much about it.", options: ["not to think", "not thinking", "don't think", "not think"], correct: 0, explanation: "Çabalamak (olumsuz): try not to think." }
    ]
};

// ===== ÜNİTE 180: BUSINESS ENGLISH (İŞ İNGİLİZCESİ - DOLAYLI SORULAR) =====
const unit180Grammar: EnglishGrammarUnit = {
    unitId: 180,
    title: "Business English (Dolaylı Sorular: Indirect Questions)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Daha Kibar Olmak",
            explanation: "İş hayatında doğrudan soru sormak (Where is the meeting?) kaba gelebilir. Bunun yerine 'Can you tell me where the meeting is?' gibi dolaylı yapılar kullanılır.",
            examples: [
                { english: "Direct: What time is it?", turkish: "Saat kaç?" },
                { english: "Indirect: Could you tell me what time it is?", turkish: "Saatin kaç olduğunu söyleyebilir misiniz?" }
            ]
        },
        {
            title: "2. Kelime Sırası Değişimi",
            explanation: "Dolaylı sorularda 'yardımcı fiil + özne' sırası bozulur ve normal bir cümle gibi 'özne + fiil' sırasına döner.",
            examples: [
                { english: "Direct: Where is the office?", turkish: "Ofis nerede?" },
                { english: "Indirect: Do you know where the office IS? (is sona gider)", turkish: "Ofisin nerede olduğunu biliyor musunuz?" }
            ]
        },
        {
            title: "3. 'Yes/No' Sorularında 'If' Kullanımı",
            explanation: "Eğer soru 'ne, nerede, nasıl' ile başlamıyorsa (Yes/No sorusuysa), 'if' veya 'whether' (olup olmadığını) eklenir.",
            examples: [
                { english: "Direct: Is he in the meeting?", turkish: "Toplantıda mı?" },
                { english: "Indirect: I was wondering if he was in the meeting.", turkish: "Toplantıda olup olmadığını merak ediyordum." }
            ]
        },
        {
            title: "4. Yaygın Giriş Kalıpları",
            explanation: "• Could you tell me...?\n• Do you know...?\n• I was wondering...?\n• I'd like to know...?",
            examples: [
                { english: "I'd like to know your deadline.", turkish: "Teslim tarihinizi bilmek isterim." },
                { english: "Could you tell me how to reach the strategy team?", turkish: "Strateji ekibine nasıl ulaşacağımı söyleyebilir misiniz?" }
            ]
        }
    ],
    exercises: [
        { question: "Could you tell me where ___?", options: ["the manager is", "is the manager", "the manager", "manager is"], correct: 0, explanation: "Dolaylı soruda özne + fiil sırası: the manager is." },
        { question: "Do you know if the meeting ___ (start) yet?", options: ["has started", "did started", "is start", "start"], correct: 0, explanation: "Indirect question with 'if' (Yes/No)." },
        { question: "I was wondering what time ___.", options: ["it is", "is it", "it", "time is"], correct: 0, explanation: "Özne + fiil sırası: it is." },
        { question: "Could you tell me ___ to the office?", options: ["how to get", "how get", "how do I get", "how getting"], correct: 0, explanation: "How to + fiil yapısı dolaylı sorularda yaygındır." },
        { question: "I'd like to know ___ you are available tomorrow.", options: ["if", "what", "where", "how"], correct: 0, explanation: "Olup olmadığını anlamı katan 'if' kullanılır." },
        { question: "Do you know ___ our new client is?", options: ["who", "what", "where", "how"], correct: 0, explanation: "Kimin olduğunu sormak için 'who'." },
        { question: "Could you tell me ___ the package arrives?", options: ["when", "is", "if", "what"], correct: 0, explanation: "Zaman sormak: when." },
        { question: "I was wondering ___ you could help me.", options: ["if", "how", "what", "where"], correct: 0, explanation: "Kibar rica girişi: I was wondering if..." },
        { question: "Do you have any idea how much this ___?", options: ["costs", "does cost", "is cost", "costing"], correct: 0, explanation: "Özne (this) + fiil (costs) sırasına dikkat." },
        { question: "I'd like to know what your ___ is.", options: ["strategy", "deadline", "proposal", "feedback"], correct: 0, explanation: "Bağlama göre 'stratejinizin ne olduğunu' sormak." }
    ]
};

// ===== ÜNİTE 181: PAST PERFECT (MİŞ'Lİ GEÇMİŞ ZAMAN) =====
const unit181Grammar: EnglishGrammarUnit = {
    unitId: 181,
    title: "Past Perfect (Geçmişin Geçmişi: Had + V3)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Zaman Çizelgesi",
            explanation: "Past Perfect, geçmişte belirli bir andan veya başka bir olaydan daha önce gerçekleşmiş eylemleri anlatmak için kullanılır. 'O gelmeden önce ben yemeği yemiştim' gibi.",
            examples: [
                { english: "When I arrived, the meeting had already started.", turkish: "Ben vardığımda toplantı çoktan başlamıştı. (Önce toplantı başladı, sonra ben vardım)" },
                { english: "She had never seen such a beautiful sight before.", turkish: "Daha önce hiç bu kadar güzel bir manzara görmemişti." }
            ]
        },
        {
            title: "2. Gramer Yapısı: Had + Past Participle (V3)",
            explanation: "Tüm şahıslarda 'had' kullanılır ve yanına fiilin 3. hali gelir. Olumsuzda 'hadn't' kullanılır.",
            examples: [
                { english: "I hadn't finished my report by 5 PM.", turkish: "Saat 17:00 itibarıyla raporumu bitirmemiştim." },
                { english: "They had already reached a decision.", turkish: "Çoktan bir karara varmışlardı." }
            ]
        },
        {
            title: "3. 'By the time' ve 'Before/After' Kullanımı",
            explanation: "Past Perfect genellikle bu bağlaçlarla birlikte kullanılır. 'By the time' (o vakte kadar) kalıbından sonraki cümle Past Simple olur.",
            examples: [
                { english: "By the time the police arrived, the thief had escaped.", turkish: "Polis vardığında hırsız kaçmıştı." },
                { english: "After she had finished her work, she went home.", turkish: "İşini bitirdikten sonra eve gitti." }
            ]
        },
        {
            title: "4. Past Perfect vs Past Simple",
            explanation: "Eğer olayların sırası çok netse ve vurgulamaya gerek yoksa sadece Past Simple kullanılabilir. Ancak olayların birbirine etkisini veya 'daha önce' olduğunu vurgulamak istiyorsak Past Perfect şarttır.",
            examples: [
                { english: "I realized I had forgotten my phone.", turkish: "Telefonumu unuttuğumu fark ettim." }
            ]
        }
    ],
    exercises: [
        { question: "When I got home, my brother ___ (go) out.", options: ["had gone", "has gone", "went", "going"], correct: 0, explanation: "Eve varmamdan önce gerçekleşen olay: had gone." },
        { question: "I ___ (never/be) to England before last summer.", options: ["had never been", "have never been", "was never", "was never being"], correct: 0, explanation: "Geçmişteki bir andan öncesi: had never been." },
        { question: "By the time he was twenty, he ___ (write) two books.", options: ["had written", "wrote", "has written", "writes"], correct: 0, explanation: "Yirmi yaşına gelene kadar (geçmiş sınırlı): had written." },
        { question: "She told me that she ___ (see) the movie already.", options: ["had seen", "saw", "has seen", "sees"], correct: 0, explanation: "Söylemesinden önce izlemişti: had seen." },
        { question: "The house was quiet because everyone ___ (sleep).", options: ["had gone to sleep", "went to sleep", "is sleeping", "was sleeping"], correct: 0, explanation: "Ev sessiz çünkü (önceden) uyumuşlardı: had gone." },
        { question: "I realized I ___ (make) a big mistake.", options: ["had made", "made", "have made", "making"], correct: 0, explanation: "Fark etmemden önce yaptığım hata: had made." },
        { question: "After we ___ (eat) dinner, we went for a walk.", options: ["had eaten", "ate", "have eaten", "eating"], correct: 0, explanation: "Yemekten sonra (önceki eylem): had eaten." },
        { question: "I didn't answer because I ___ (not/hear) the phone.", options: ["hadn't heard", "didn't hear", "haven't heard", "wasn't hearing"], correct: 0, explanation: "Cevap vermeme sebebim (önceki durum): hadn't heard." },
        { question: "The train ___ (leave) before we reached the platform.", options: ["had left", "left", "has left", "leaves"], correct: 0, explanation: "Varmamızdan önce: had left." },
        { question: "She was sad because she ___ (lose) her ring.", options: ["had lost", "lost", "has lost", "is losing"], correct: 0, explanation: "Üzgün olma sebebi (önceki kayıp): had lost." }
    ]
};

// ===== ÜNİTE 182: FUTURE PERFECT (GELECEKTE TAMAMLANMIŞ ZAMAN) =====
const unit182Grammar: EnglishGrammarUnit = {
    unitId: 182,
    title: "Future Perfect (Gelecekte Belirli Bir Anda Bitmiş Olacaklar)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: 'Yapmış Olacağım'",
            explanation: "Future Perfect, gelecekte belirli bir zamandan ÖNCE tamamlanmış olacak eylemleri anlatmak için kullanılır. Beklentileri ve hedefleri belirtirken çok yaygındır.",
            examples: [
                { english: "By 2030, scientists will have found a cure.", turkish: "2030'a kadar bilim insanları bir tedavi bulmuş olacaklar." },
                { english: "I will have finished my degree by next year.", turkish: "Gelecek yıla kadar diplomamı almış olacağım." }
            ]
        },
        {
            title: "2. Gramer Yapısı: Will + Have + V3",
            explanation: "Yapı sabittir: 'will have' ve fiilin 3. hali. Özneye göre değişmez.",
            examples: [
                { english: "We will have reached our target by Friday.", turkish: "Cuma gününe kadar hedefimize ulaşmış olacağız." },
                { english: "They won't have completed the bridge by July.", turkish: "Temmuz'a kadar köprüyü tamamlamış olmayacaklar." }
            ]
        },
        {
            title: "3. 'By' ve 'By the time' Kullanımı",
            explanation: "Bu zaman genellikle zaman belirten 'by' (itibarıyla/kadar) edatıyla kullanılır. Eğer 'by the time' diyorsak yanındaki cümle Present Simple olur.",
            examples: [
                { english: "By the time you arrive, I will have cooked dinner.", turkish: "Sen vardığında yemeği pişirmiş olacağım." }
            ]
        },
        {
            title: "4. Future Perfect vs Future Simple",
            explanation: "Future Simple sadece gelecekte olacak olayı söyler. Future Perfect ise o olayın bir noktada 'bitmiş' olacağını vurgular.",
            examples: [
                { english: "I will work tomorrow. (Çalışacağım)", turkish: "Yarın çalışacağım." },
                { english: "I will have worked for ten hours by then. (Çalışmış olacağım)", turkish: "O zamana kadar on saat çalışmış olacağım." }
            ]
        }
    ],
    exercises: [
        { question: "By next month, we ___ (save) enough money.", options: ["will have saved", "will save", "have saved", "are saving"], correct: 0, explanation: "Gelecekte bir ana kadar tamamlanma: will have saved." },
        { question: "They ___ (finish) the construction by December.", options: ["will have finished", "will finish", "finished", "be finishing"], correct: 0, explanation: "Bitmiş olacak: will have finished." },
        { question: "By the time he graduates, he ___ (live) here for four years.", options: ["will have lived", "will live", "lives", "has lived"], correct: 0, explanation: "Eylem süreci ve bitiş: will have lived." },
        { question: "Will you ___ (complete) the report by tomorrow?", options: ["have completed", "completed", "complete", "completing"], correct: 1, explanation: "Soru formu: Will you have + V3." },
        { question: "I ___ (not/do) all the work by the deadline.", options: ["won't have done", "won't do", "haven't done", "not have done"], correct: 0, explanation: "Olumsuz gelecek bitiş: won't have done." },
        { question: "The train ___ (leave) by the time we get there.", options: ["will have left", "will leave", "leaves", "is leaving"], correct: 0, explanation: "Varmamızdan önce bitmiş olacak: will have left." },
        { question: "By 10 PM, the children ___ (go) to bed.", options: ["will have gone", "will go", "go", "are going"], correct: 0, explanation: "Saat 10'a kadar uyumuş olacaklar." },
        { question: "How many books ___ you ___ (read) by the end of the year?", options: ["will / have read", "do / read", "will / read", "have / read"], correct: 0, explanation: "Yıl sonuna kadar kaç kitap okumuş olacaksın?" },
        { question: "She ___ (master) English by next summer.", options: ["will have mastered", "will master", "masters", "mastering"], correct: 0, explanation: "Uzmanlaşmış olacak: will have mastered." },
        { question: "By the time the sun sets, we ___ (reach) the peak.", options: ["will have reached", "will reach", "reach", "reached"], correct: 0, explanation: "Güneş batana kadar varmış olacağız." }
    ]
};

// ===== ÜNİTE 183: RELATIVE CLAUSES (İLGİ CÜMLECİKLERİ) =====
const unit183Grammar: EnglishGrammarUnit = {
    unitId: 183,
    title: "Relative Clauses (Kişi ve Nesneleri Tanımlama: Who, Which, That)",
    rules: [
        {
            title: "1. 'Who' ve 'Which' Kullanımı",
            explanation: "Bir ismi tanımlamak/nitelemek için kullanılırlar. 'Who' insanlar için, 'Which' ise nesne ve hayvanlar için kullanılır.",
            examples: [
                { english: "The woman who lives next door is a doctor.", turkish: "Yandaki evde yaşayan kadın bir doktordur." },
                { english: "I bought a car which is very fast.", turkish: "Çok hızlı olan bir araba satın aldım." }
            ]
        },
        {
            title: "2. 'That' ve 'Whose' Kullanımı",
            explanation: "• That: Hem kişiler hem nesneler için kullanılabilir (daha gayri resmidir).\n• Whose: Sahiplik belirtir (ki-onun).",
            examples: [
                { english: "The book that I read was great.", turkish: "Okuduğum kitap harikaydı." },
                { english: "The boy whose father is a pilot is my friend.", turkish: "Babası pilot olan çocuk benim arkadaşım." }
            ]
        },
        {
            title: "3. 'Where' ve 'When' Kullanımı",
            explanation: "• Where: Yerleri nitelemek için.\n• When: Zamanları nitelemek için.",
            examples: [
                { english: "The city where I was born is very old.", turkish: "Doğduğum şehir çok eskidir." },
                { english: "I remember the day when we first met.", turkish: "İlk tanıştığımız günü hatırlıyorum." }
            ]
        },
        {
            title: "4. Defining vs Non-defining Clauses",
            explanation: "• Defining: Cümlenin anlamı için şarttır (Virgül kullanılmaz).\n• Non-defining: Ekstra bilgi verir (Virgüller arasında yazılır).",
            examples: [
                { english: "My brother, who lives in London, is visiting.", turkish: "Londra'da yaşayan erkek kardeşim ziyarete geliyor. (Tek kardeşim var, ekstra bilgi)" },
                { english: "The person who stole my bag was tall.", turkish: "Çantamı çalan kişi uzundu. (Hangi kişi olduğu belli değil, tanımlıyor)" }
            ]
        }
    ],
    exercises: [
        { question: "I know a man ___ speaks ten languages.", options: ["who", "which", "whose", "where"], correct: 0, explanation: "İnsanları nitelemek için 'who' kullanılır." },
        { question: "The house ___ I live in is very small.", options: ["which", "who", "whose", "when"], correct: 0, explanation: "Nesne nitelemek için 'which' (veya that) kullanılır." },
        { question: "That's the girl ___ sister is a famous actress.", options: ["whose", "who", "which", "that"], correct: 0, explanation: "Sahiplik bildiren: whose." },
        { question: "I'll never forget the day ___ I won the medal.", options: ["when", "where", "which", "who"], correct: 0, explanation: "Zaman nitelemek: when." },
        { question: "This is the park ___ we used to play.", options: ["where", "when", "which", "who"], correct: 0, explanation: "Yer nitelemek: where." },
        { question: "The book ___ you lent me is very interesting.", options: ["that", "who", "whose", "when"], correct: 0, explanation: "Nesne nitelemek (gayri resmi): that." },
        { question: "London, ___ is the capital of UK, is huge.", options: ["which", "who", "that", "where"], correct: 0, explanation: "Non-defining clause (virgül sonrası 'that' gelmez): which." },
        { question: "The students ___ study hard will succeed.", options: ["who", "which", "whose", "where"], correct: 0, explanation: "Öğrenciler (kişiler): who." },
        { question: "Do you like the painting ___ is on the wall?", options: ["which", "who", "whose", "when"], correct: 0, explanation: "Tablo (nesne): which." },
        { question: "The man ___ car was stolen called the police.", options: ["whose", "who", "which", "that"], correct: 0, explanation: "Aracı çalınan adam: whose car." }
    ]
};

// ===== ÜNİTE 184: CAUSATIVES (ETTİRGEN YAPI) =====
const unit184Grammar: EnglishGrammarUnit = {
    unitId: 184,
    title: "Causatives (Başkasına İş Yaptırma: Have/Get Something Done)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: 'Yaptırdım'",
            explanation: "Eylem biz değil, başkası (genellikle bir profesyonel) tarafından yapıldığında bu yapıyı kullanırız. 'Saçımı kestim' değil, 'Saçımı kestirdim' demektir.",
            examples: [
                { english: "I had my hair cut yesterday.", turkish: "Dün saçımı kestirdim." },
                { english: "We are getting the house painted.", turkish: "Evi boyatıyoruz." }
            ]
        },
        {
            title: "2. Formül: HAVE / GET + Nesne + V3",
            explanation: "Kural basittir: Arada nesne (saç, ev, araba vb.) vardır ve sondaki fiil her zaman 3. haldedir (V3).",
            examples: [
                { english: "You should have your car serviced.", turkish: "Arabanın bakımını yaptırmalısın." },
                { english: "She got her nails done.", turkish: "Tırnaklarını yaptırdı." }
            ]
        },
        {
            title: "3. 'Have Someone Do' vs 'Get Someone To Do'",
            explanation: "Eğer işi yapan kişiyi belirtiyorsak yapı değişir:\n• HAVE + Kişi + Yalın Fiil (V1)\n• GET + Kişi + TO + Fiil",
            examples: [
                { english: "I had the mechanic fix the car.", turkish: "Tamirciye arabayı tamir ettirdim." },
                { english: "I got the mechanic to fix the car.", turkish: "Tamirciyi arabayı tamir etmesi için ikna ettim/yaptırdım." }
            ]
        },
        {
            title: "4. Zamanlara Göre Çekim",
            explanation: "HAVE veya GET fiili cümlenin zamanına göre çekimlenir (had, getting, will have vb.). Sondaki V3 hep aynı kalır.",
            examples: [
                { english: "I will have it fixed soon.", turkish: "Onu yakında tamir ettireceğim." }
            ]
        }
    ],
    exercises: [
        { question: "I need to have my phone ___ (repair).", options: ["repaired", "repair", "repairing", "to repair"], correct: 0, explanation: "Have + nesne + V3 yapısı." },
        { question: "She is getting her teeth ___ (check) today.", options: ["checked", "check", "checking", "to check"], correct: 0, explanation: "Get + nesne + V3 yapısı." },
        { question: "They had the waiter ___ (bring) some water.", options: ["bring", "to bring", "brought", "bringing"], correct: 0, explanation: "Have + kişi + V1 (yalın) yapısı." },
        { question: "I got him ___ (help) me with the luggage.", options: ["to help", "help", "helped", "helping"], correct: 0, explanation: "Get + kişi + to + V1 yapısı." },
        { question: "When did you have your eyes ___?", options: ["tested", "test", "testing", "to test"], correct: 0, explanation: "Gözlerini ne zaman muayene ettirdin? (V3)." },
        { question: "We are having our kitchen ___ (renovate).", options: ["renovated", "renovate", "renovating", "to renovate"], correct: 0, explanation: "Mutfak yeniletiliyor (V3)." },
        { question: "I'll have my assistant ___ (call) you.", options: ["call", "to call", "called", "calling"], correct: 0, explanation: "Asistanıma seni arattıracağım (V1)." },
        { question: "Can you get the kids ___ (clean) their room?", options: ["to clean", "clean", "cleaned", "cleaning"], correct: 0, explanation: "Get + kişi + to V1." },
        { question: "He had his bike ___ last week.", options: ["stolen", "steal", "stealing", "to steal"], correct: 0, explanation: "Olumsuz bir olayda da ettirgen yapı kullanılabilir (Başına geldi anlamında)." },
        { question: "I'm going to have this document ___.", options: ["translated", "translate", "translating", "to translate"], correct: 0, explanation: "Çevirttireceğim (V3)." }
    ]
};

// ===== ÜNİTE 185: WISH CLAUSES (KEŞKE CÜMLELERİ) =====
const unit185Grammar: EnglishGrammarUnit = {
    unitId: 185,
    title: "Wish Clauses (Pişmanlık ve İstekler: I wish / If only)",
    rules: [
        {
            title: "1. Şu An İçin 'Keşke': Wish + Past Simple",
            explanation: "Şu anki bir durumdan memnun değilsek ve farklı olmasını istiyorsak Past Simple kullanırız. 'I wish I were rich' (Keşke zengin olsaydım - ama değilim).",
            examples: [
                { english: "I wish it weren't raining.", turkish: "Keşke yağmur yağmıyor olsaydı." },
                { english: "If only I knew the answer.", turkish: "Keşke cevabı bilseydim." }
            ]
        },
        {
            title: "2. Gelecek İçin 'Keşke' (Şikayet): Wish + Would",
            explanation: "Başkalarının davranışlarından şikayet ederken veya bir şeyin değişmesini isterken 'would' kullanırız.",
            examples: [
                { english: "I wish you would stop shouting.", turkish: "Keşke bağırmayı kesssen." },
                { english: "I wish the sun would come out.", turkish: "Keşke güneş açsa." }
            ]
        },
        {
            title: "3. Yetenek İçin 'Keşke': Wish + Could",
            explanation: "Bir şeyi yapabilmeyi dilerken 'could' kullanılır.",
            examples: [
                { english: "I wish I could play the piano.", turkish: "Keşke piyano çalabilseydim." },
                { english: "She wishes she could travel more.", turkish: "Daha fazla gezebilmeyi diliyor." }
            ]
        },
        {
            title: "4. Tipik Bir B1 Detayı: If Only",
            explanation: "'If only', 'I wish'ten daha güçlü bir 'keşke' anlamı taşır. Kurallar aynıdır.",
            examples: [
                { english: "If only we had more time!", turkish: "Keşke daha fazla vaktimiz olsaydı!" }
            ]
        }
    ],
    exercises: [
        { question: "I wish I ___ (be) taller.", options: ["were", "am", "was", "be"], correct: 0, explanation: "Güncel hayali durum: were (veya was)." },
        { question: "I wish you ___ (not/smoke) here. It's annoying.", options: ["wouldn't smoke", "didn't smoke", "don't smoke", "not smoke"], correct: 0, explanation: "Başkasına dair şikayet: would." },
        { question: "If only I ___ (have) a car.", options: ["had", "have", "will have", "having"], correct: 0, explanation: "Şu an için istek: had (Past Simple)." },
        { question: "I wish I ___ (can) speak French fluently.", options: ["could", "can", "should", "would"], correct: 0, explanation: "Yetenek isteği: could." },
        { question: "It's cold. I wish I ___ (wear) a coat.", options: ["were wearing", "am wearing", "will wear", "wore"], correct: 0, explanation: "Şu anki süreçten duyulan pişmanlık: were wearing." },
        { question: "I wish my boss ___ (give) me a promotion.", options: ["would give", "gives", "gave", "will give"], correct: 0, explanation: "Başkasına yönelik beklenti: would." },
        { question: "She wishes she ___ (live) in a warmer country.", options: ["lived", "lives", "is living", "will live"], correct: 0, explanation: "Şu anki gerçek dışı durum: lived." },
        { question: "I wish I ___ (not/have) so much work to do.", options: ["didn't have", "don't have", "hadn't", "haven't"], correct: 0, explanation: "Güncel durumun olumsuzu: didn't have." },
        { question: "If only they ___ (call) me soon.", options: ["would call", "called", "calling", "will call"], correct: 0, explanation: "İlerisi için sabırsız bir istek: would call." },
        { question: "I wish we ___ (know) the way to the hotel.", options: ["knew", "know", "known", "knowing"], correct: 0, explanation: "Şu an bilmediğimiz bir şeyi dilemek: knew." }
    ]
};

// Units 186-190 (Short summaries and review for space management)
const unit186Grammar: EnglishGrammarUnit = { unitId: 186, title: "Collocations (Sık Kullanılan Kelime Grupları)", rules: [{ title: "1. Do vs Make", explanation: "B1 seviyesinde en temel kolokasyonlar: Do (eylem/iş), Make (üretim/oluşturma).", examples: [{ english: "make a decision", turkish: "karar vermek" }, { english: "do homework", turkish: "ödev yapmak" }] }], exercises: [{ question: "Can I ___ a suggestion?", options: ["make", "do", "take", "give"], correct: 0, explanation: "Suggestion 'make' ile kullanılır." }, { question: "Who ___ the research?", options: ["did", "made", "gave", "took"], correct: 0, explanation: "Research 'do' ile kullanılır." }] };
const unit187Grammar: EnglishGrammarUnit = { unitId: 187, title: "Connecting Ideas (Fikirleri Bağlama - Gelişmiş)", rules: [{ title: "1. Moreover & Furthermore", explanation: "Fikirlere ekleme yapmak için kullanılır.", examples: [{ english: "The plan is cheap. Moreover, it is fast.", turkish: "Plan ucuz. Dahası, hızlıdır." }] }], exercises: [{ question: "He is intelligent. ___, he is very kind.", options: ["Moreover", "However", "Despite", "But"], correct: 0, explanation: "Ekleme bağlacı: Moreover." }] };
const unit188Grammar: EnglishGrammarUnit = { unitId: 188, title: "Formal vs Informal English (Resmi ve Günlük Dil)", rules: [{ title: "1. İstenen Üslup", explanation: "Resmi durumlarda kısaltma (don't, can't) kullanılmaz ve daha ağır kelimeler seçilir.", examples: [{ english: "Informal: Kids / Formal: Children", turkish: "Çocuklar" }] }], exercises: [{ question: "In a formal letter, use: ___", options: ["Dear Sir/Madam", "Hey", "Hi there", "Bye"], correct: 0, explanation: "Resmi selamlaşma: Dear Sir/Madam." }] };
const unit189Grammar: EnglishGrammarUnit = { unitId: 189, title: "Debate & Critical Thinking (Eleştirel Düşünce)", rules: [{ title: "1. Modal Verbs for Deduction", explanation: "Must/Might/Can't be... (Çıkarım modalleri).", examples: [{ english: "It must be true.", turkish: "Doğru olmalı." }] }], exercises: [{ question: "She hasn't eaten all day. She ___ be hungry.", options: ["must", "can't", "should", "mightn't"], correct: 0, explanation: "Güçlü mantıksal çıkarım: must." }] };
const unit190Grammar: EnglishGrammarUnit = {
    unitId: 190,
    title: "B1 Final Mastery Review (Genel B1 Gramer Tekrarı)",
    rules: [
        {
            title: "1. Tüm Temel B1 Konuları",
            explanation: "Bu ünite, B1 seviyesinde öğrendiğimiz tüm yapıları (Present Perfect, Conditionals, Passives, Reported Speech vb.) kapsayan genel bir değerlendirmedir.",
            examples: [
                { english: "I have achieved my goals.", turkish: "Hedeflerime ulaştım." },
                { english: "If I were you, I would review everything.", turkish: "Senin yerinde olsam her şeyi tekrar ederdim." }
            ]
        }
    ],
    exercises: [
        { question: "If I ___ (win) a million dollars, I would travel.", options: ["won", "win", "was win", "had won"], correct: 0, explanation: "Type 2 Conditional: won." },
        { question: "The car ___ (wash) every Saturday.", options: ["is washed", "washes", "washed", "be washed"], correct: 0, explanation: "Present Passive: is washed." },
        { question: "She said she ___ (be) tired.", options: ["was", "is", "were", "been"], correct: 0, explanation: "Reported Speech: was." },
        { question: "I ___ (live) here since 2010.", options: ["have lived", "lived", "was living", "live"], correct: 0, explanation: "Present Perfect (deneyim/süreç): have lived." },
        { question: "Would you mind ___ (open) the door?", options: ["opening", "to open", "open", "opened"], correct: 0, explanation: "Mind + V ing." },
        { question: "He is the man ___ fixed my computer.", options: ["who", "which", "whose", "where"], correct: 0, explanation: "Relative Clause (kişi): who." },
        { question: "I ___ (finish) the book by tomorrow.", options: ["will have finished", "will finish", "finished", "have finished"], correct: 0, explanation: "Future Perfect: will have finished." },
        { question: "We had better ___ (leave) now.", options: ["leave", "to leave", "leaving", "left"], correct: 0, explanation: "Had better + V1 (yalın)." },
        { question: "Unless you ___ (study), you will fail.", options: ["study", "don't study", "studied", "will study"], correct: 0, explanation: "Unless zaten olumsuzdur, fiil olumlu çekimlenir." },
        { question: "I'm looking forward to ___ (meet) you.", options: ["meeting", "meet", "to meet", "met"], correct: 0, explanation: "Look forward to + V ing." }
    ]
};

export const enB1Grammar: Record<number, EnglishGrammarUnit> = {
    161: unit161Grammar,
    162: unit162Grammar,
    163: unit163Grammar,
    164: unit164Grammar,
    165: unit165Grammar,
    166: unit166Grammar,
    167: unit167Grammar,
    168: unit168Grammar,
    169: unit169Grammar,
    170: unit170Grammar,
    171: unit171Grammar,
    172: unit172Grammar,
    173: unit173Grammar,
    174: unit174Grammar,
    175: unit175Grammar,
    176: unit176Grammar,
    177: unit177Grammar,
    178: unit178Grammar,
    179: unit179Grammar,
    180: unit180Grammar,
    181: unit181Grammar,
    182: unit182Grammar,
    183: unit183Grammar,
    184: unit184Grammar,
    185: unit185Grammar,
    186: unit186Grammar,
    187: unit187Grammar,
    188: unit188Grammar,
    189: unit189Grammar,
    190: unit190Grammar,
};

export function getEnglishB1GrammarForUnit(unitId: number): EnglishGrammarUnit {
    return enB1Grammar[unitId] || { unitId, title: `Ünite ${unitId} (Çalışma Aşamasında)`, rules: [], exercises: [] };
}
