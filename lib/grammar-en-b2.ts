/**
 * SteadyShell Grammar Database - English B2
 * Units 191-220
 * Focus: Detailed explanations and extensive examples
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

// ===== UNIT 191: Past Perfect Continuous (KAPSAMLI) =====
const unit191Grammar: EnglishGrammarUnit = {
    unitId: 191,
    title: "Past Perfect Continuous (Sürekli Geçmiş Öncesi Zaman)",
    rules: [
        {
            title: "1. Temel Mantık: Geçmişin de Geçmişinde Bir Süreç",
            explanation: "Past Perfect Continuous (had been verb-ing), geçmişte gerçekleşmiş bir olaydan daha önce başlamış ve o olaya kadar kesintisiz devam etmiş eylemleri anlatmak için kullanılır. Bu zaman yapısı, eylemin 'kendisine' değil, 'ne kadar sürdüğüne' (süreç vurgusu) odaklanır. Türkçeye genellikle '-mekteydi', '-iyordu' veya '...-dir ...-iyordu' şeklinde çevrilir. Önemli olan, geçmişteki bir 'referans noktası' (başka bir geçmiş zaman eylemi) olmasıdır.",
            examples: [
                { english: "I had been waiting for two hours when the bus finally arrived.", turkish: "Otobüs nihayet geldiğinde, ben iki saattir beklemekteydim." },
                { english: "She had been working there for ten years before the company closed down.", turkish: "Şirket kapanmadan önce orada on yıldır çalışmaktaydı." },
                { english: "They had been playing football for an hour when it started to rain.", turkish: "Yağmur başladığında bir saattir futbol oynuyorlardı." },
                { english: "How long had you been studying English before you moved to London?", turkish: "Londra'ya taşınmadan önce ne kadar süredir İngilizce çalışmaktaydın?" },
                { english: "He had been driving for five hours, so he needed a break.", turkish: "Beş saattir araba sürmekteydi, bu yüzden bir molaya ihtiyacı vardı." }
            ]
        },
        {
            title: "2. Neden-Sonuç İlişkisi (Past Evidence)",
            explanation: "Geçmişte gördüğümüz bir sonucun sebebini açıklarken bu zamanı kullanırız. Örneğin; yerlerin ıslak olması bir sonuçtur, yağmurun yağmış olması ise bir süreçtir. Eğer geçmişte birinden bahsederken 'gözleri şişti' diyorsak, bunun nedenini 'ağlamaktaydı' diyerek açıklayabiliriz.",
            examples: [
                { english: "The ground was wet because it had been raining.", turkish: "Yerler ıslaktı çünkü yağmur yağmaktaydı (yağıyordu)." },
                { english: "Her eyes were red because she had been crying.", turkish: "Gözleri kırmızıydı çünkü ağlamaktaydı." },
                { english: "I was exhausted because I had been running.", turkish: "Bitkindim çünkü koşmaktaydım." },
                { english: "The kitchen was a mess because they had been cooking all afternoon.", turkish: "Mutfak darmadağındı çünkü bütün öğleden sonra yemek pişirmekteydiler." },
                { english: "He was out of breath because he had been exercising hard.", turkish: "Nefes nefeseydi çünkü ağır egzersiz yapmaktaydı." }
            ]
        },
        {
            title: "3. Past Perfect Simple vs. Continuous",
            explanation: "Past Perfect Simple (had done), eylemin 'tamamlanmış' olduğuna ve 'sonuca' odaklanır. Past Perfect Continuous (had been doing) ise eylemin 'süresine' ve 'devamlılığına' odaklanır. Bazı fiiller (state verbs - love, know, hate) continuous yapısında kullanılamazlar; bu durumlarda süre bildirilse bile Simple form kullanılır.",
            examples: [
                { english: "I had known him for years. (Know - State verb, continuous olmaz)", turkish: "Onu yıllardır tanıyordum." },
                { english: "I had been waiting for years. (Wait - Action verb, süreç vurgusu)", turkish: "Yıllardır beklemekteydim." },
                { english: "She had written three letters. (Sonuç: 3 mektup bitti)", turkish: "Üç mektup yazmıştı." },
                { english: "She had been writing letters all morning. (Süreç: Tüm sabah mektup yazdı durdu)", turkish: "Tüm sabah mektup yazmaktaydı." },
                { english: "They had already eaten when I arrived.", turkish: "Ben vardığımda onlar zaten yemişlerdi (eylem bitti)." }
            ]
        }
    ],
    exercises: [
        { question: "We ___ (wait) for over an hour before the doctor finally saw us.", options: ["had been waiting", "have been waiting", "waited", "were waiting"], correct: 0, explanation: "Geçmişteki bir olaydan (saw us) öncesindeki süreci belirtmek için Past Perfect Continuous kullanılır." },
        { question: "His hands were dirty because he ___ (work) in the garden.", options: ["had worked", "had been working", "was working", "has been working"], correct: 1, explanation: "Geçmişteki bir sonucun (dirty hands) nedenini süreç olarak açıklarken had been working kullanılır." },
        { question: "I ___ (know) her for a long time before we became best friends.", options: ["had been knowing", "had known", "knew", "have known"], correct: 1, explanation: "'Know' bir durum fiilidir (state verb), Continuous formda kullanılamaz." },
        { question: "How long ___ (they / play) when the game was interrupted?", options: ["had they been playing", "did they play", "were they playing", "had they played"], correct: 0, explanation: "Bölünme anına kadar ne kadar süredir devam ediyordu? Sorusunda Past Perfect Continuous kullanılır." },
        { question: "She was tired because she ___ (study) all night.", options: ["had studied", "had been studying", "has been studying", "studies"], correct: 1, explanation: "Neden-sonuç ve süreç vurgusu." }
    ]
};

// ===== UNIT 192: Future Perfect & Future Perfect Continuous =====
const unit192Grammar: EnglishGrammarUnit = {
    unitId: 192,
    title: "Future Perfect & Future Perfect Continuous",
    rules: [
        {
            title: "1. Future Perfect: 'Yapmış Olacağım'",
            explanation: "Future Perfect (will have + V3), gelecekteki belirli bir noktadan önce 'tamamlanmış olacak' eylemleri anlatır. Çoğunlukla 'by' (itibariyle/kadar) ifadesiyle kullanılır. Bir işin kesinlikle bitmiş olacağı tarihi verirken kullanılır.",
            examples: [
                { english: "By next Monday, I will have finished the report.", turkish: "Gelecek pazartesiye kadar raporu bitirmiş olacağım." },
                { english: "Will you have retired by the time you are 60?", turkish: "60 yaşına geldiğinde emekli olmuş olacak mısın?" },
                { english: "They will have left before we get there.", turkish: "Biz oraya varana kadar onlar ayrılmış olacaklar." },
                { english: "In two years, the city will have changed completely.", turkish: "İki yıl içinde şehir tamamen değişmiş olacak." },
                { english: "I won't have graduated by next summer.", turkish: "Gelecek yaza kadar mezun olmuş olmayacağım." }
            ]
        },
        {
            title: "2. Future Perfect Continuous: 'Yapıyor Olacağım (Süreç)'",
            explanation: "Future Perfect Continuous (will have been + V-ing), gelecekteki bir noktada bir eylemin 'ne kadar süredir devam ediyor olacağını' vurgular. Bu yapı sadece geleceği değil, o ana kadar geçen 'süreyi' de içine alır.",
            examples: [
                { english: "Next month, I will have been living here for 10 years.", turkish: "Gelecek ay, burada on yıldır yaşıyor olacağım." },
                { english: "By 5 PM, she will have been working for eight hours straight.", turkish: "Saat 5 olduğunda, o kesintisiz sekiz saattir çalışıyor olacak." },
                { english: "How long will you have been driving by the time we reach the border?", turkish: "Sınıra vardığımızda ne kadar süredir araba sürüyor olacaksın?" },
                { english: "At the end of this course, they will have been studying English for six months.", turkish: "Bu kursun sonunda, onlar altı aydır İngilizce çalışıyor olacaklar." },
                { english: "I will have been waiting for two hours if the plane is late.", turkish: "Eğer uçak gecikirse, iki saat boyunca beklemiş olacağım." }
            ]
        }
    ],
    exercises: [
        { question: "By the end of this year, I ___ (save) enough money for a car.", options: ["will have saved", "will have been saving", "will save", "saved"], correct: 0, explanation: "Eylemin gelecekteki bir noktada TAMAMLANMIŞ olacağını belirttiği için Future Perfect kullanılır." },
        { question: "In December, we ___ (be) together for five years.", options: ["will have been being", "will have been", "will be", "have been"], correct: 1, explanation: "'Be' fiili durum fiilidir, Continuous olmaz. Bu yüzden Future Perfect (will have been) kullanılır." },
        { question: "By 10 PM, he ___ (watch) TV for six hours.", options: ["will watch", "will have been watching", "will have watched", "is watching"], correct: 1, explanation: "Gelecekteki bir noktada eylemin ne kadar süredir devam ettiğini (six hours) vurguladığı için Future Perfect Continuous kullanılır." }
    ]
};

// ===== UNIT 193: Advanced Idioms & Logic =====
const unit193Grammar: EnglishGrammarUnit = {
    unitId: 193,
    title: "Understanding Idioms (Deyimlerin Mantığı)",
    rules: [
        {
            title: "1. Deyim Nedir ve Neden Kullanılır?",
            explanation: "Deyimler (Idioms), kelimelerin gerçek anlamlarından tamamen bağımsız, mecazi bir anlam taşıyan kalıplaşmış ifadelerdir. İngilizcede deyim kullanmak sadece 'havalı' görünmek için değil, kısıtlı kelimeyle çok derin anlamlar ifade etmek içindir. B2 seviyesinde deyimlerin kelime kelime çevrilmeyeceğini (don't translate literally) bilmek esastır.",
            examples: [
                { english: "Piece of cake", turkish: "Çok kolay (Gerçek: Bir dilim kek)" },
                { english: "Under the weather", turkish: "Biraz hasta/keyifsiz (Gerçek: Hava altında)" },
                { english: "Beat around the bush", turkish: "Lafı dolandırmak (Gerçek: Çalının etrafında beklemek)" },
                { english: "Cost an arm and a leg", turkish: "Çok pahalı olmak (Gerçek: Kol ve bacak maliyeti)" },
                { english: "Once in a blue moon", turkish: "Kırk yılda bir / Çok nadir (Gerçek: Mavi ayda bir kez)" }
            ]
        },
        {
            title: "2. Bağlam İçinde Deyim Kullanımı",
            explanation: "Deyimler genellikle gayriresmi (informal) veya yarı-resmi (semi-formal) ortamlarda kullanılır. Çok ciddi akademik makalelerde veya resmi raporlarda deyim kullanımı genellikle önerilmez. Deyimleri öğrenirken onları 'duygu' veya 'konu' gruplarına ayırarak ezberlemek en iyi yöntemdir.",
            examples: [
                { english: "Let's call it a day. (İş bittiğinde)", turkish: "Bugünlük bu kadar yeter diyelim." },
                { english: "Break a leg! (Sahneye çıkacak birine)", turkish: "İyi şanslar!" },
                { english: "I'm on cloud nine! (Çok mutlu)", turkish: "Bulutların üzerindeyim!" },
                { english: "Keep your chin up. (Moral verirken)", turkish: "Başını dik tut / Moralini bozma." }
            ]
        }
    ],
    exercises: [
        { question: "The exam was a ___ of cake. I finished in ten minutes.", options: ["slice", "part", "piece", "bit"], correct: 2, explanation: "'Piece of cake' kalıplaşmış bir deyimdir." },
        { question: "I only see my cousins once in a ___ moon.", options: ["red", "full", "blue", "new"], correct: 2, explanation: "'Once in a blue moon' = Çok nadiren." },
        { question: "I'm feeling a bit ___ the weather today.", options: ["under", "over", "at", "with"], correct: 0, explanation: "'Under the weather' = Kendini biraz hasta hissetmek." }
    ]
};

// ===== UNIT 194: Phrasal Verbs review (Advanced) =====
const unit194Grammar: EnglishGrammarUnit = {
    unitId: 194,
    title: "Advanced Phrasal Verbs (İleri Düzey Fiil Öbekleri)",
    rules: [
        {
            title: "1. Ayrılabilir ve Ayrılamaz Phrasal Verbs",
            explanation: "B2 seviyesinde artık phrasal verb'lerin nesne (object) alma kurallarını bilmeniz gerekir. Bazı fiillerde nesne fiil ile edatın arasına girebilir, bazılarında ise asla giremez. Eğer bir zamir (it, them, him) kullanıyorsanız ve fiil ayrılabilirse, zamir mutlaka araya girer.",
            examples: [
                { english: "Look up the word. / Look the word up.", turkish: "Kelimeye bak. (Ayrılabilir)" },
                { english: "Look it up. (NOT: Look up it)", turkish: "Ona bak. (Zamir araya girer)" },
                { english: "Look after the baby. (NOT: Look the baby after)", turkish: "Bebeğe bak/ilgilen. (Ayrılamaz)" },
                { english: "I ran into my old friend.", turkish: "Eski bir arkadaşıma rastladım. (Ayrılamaz)" }
            ]
        },
        {
            title: "2. Çok Anlamlı Phrasal Verbs",
            explanation: "Bazı phrasal verb'lerin bağlama göre tamamen farklı anlamları olabilir. Örneğin 'take off' uçağın kalkması için de kullanılır, bir kıyafeti çıkarmak için de.",
            examples: [
                { english: "Take off your shoes.", turkish: "Ayakkabılarını çıkar." },
                { english: "The plane took off at 9.", turkish: "Uçak saat 9'da kalktı." },
                { english: "His business really took off.", turkish: "İşi gerçekten hızla gelişti/başarılı oldu." },
                { english: "He took off after the argument.", turkish: "Tartışmadan sonra hızla ayrıldı/gitti." }
            ]
        }
    ],
    exercises: [
        { question: "Please ___ your coat before entering.", options: ["take off", "take it off", "off take", "Both A and B"], correct: 3, explanation: "Take off ayrılabilir bir fiildir, nesne sona da gelebilir araya da (zamir ise sadece araya)." },
        { question: "I ___ into an old friend yesterday.", options: ["ran", "walked", "fell", "hit"], correct: 0, explanation: "'Run into' = Beklenmedik şekilde karşılaşmak." }
    ]
};

// ===== UNIT 195: Formal Writing Structures =====
const unit195Grammar: EnglishGrammarUnit = {
    unitId: 195,
    title: "Formal Writing: Linking Words & Nuance",
    rules: [
        {
            title: "1. Linkers for Contrast (Zıtlık Bağlaçları)",
            explanation: "B2 seviyesinde 'but' yerine daha sofistike bağlaçlar kullanmalısınız. Resmilik sırasına göre; 'However', 'Nevertheless', 'Inspite of', 'Despite' bu bağlamda en güçlü olanlardır. 'Despite' ve 'In spite of' kendilerinden sonra isim veya -ing alırlar, tam cümle almazlar (unless followed by 'the fact that').",
            examples: [
                { english: "The weather was bad. However, we went out.", turkish: "Hava kötüydü. Ancak, biz dışarı çıktık." },
                { english: "Despite the bad weather, we went out.", turkish: "Kötü havaya rağmen dışarı çıktık." },
                { english: "In spite of raining, they played football.", turkish: "Yağmura rağmen futbol oynadılar." },
                { english: "Nevertheless, his performance was outstanding.", turkish: "Yine de, performansı olağanüstüydü." },
                { english: "In spite of the fact that he was sick, he came to work.", turkish: "Hasta olmasına rağmen işe geldi." }
            ]
        },
        {
            title: "2. Adding Information (Bilgi Ekleme)",
            explanation: "Düşüncelerinizi birbirine bağlamak için 'and' yerine profesyonel alternatifleri kullanın. Bu kelimeler genellikle cümlenin başında gelir ve ardından virgül gelir.",
            examples: [
                { english: "Moreover, the cost is too high.", turkish: "Dahası/Ayrıca, maliyet çok yüksek." },
                { english: "Furthermore, it is not safe.", turkish: "Ayrıca, güvenli değil." },
                { english: "In addition to these reasons, it is expensive.", turkish: "Bu nedenlere ek olarak, pahalıdır." },
                { english: "Additionally, we need more time.", turkish: "Ek olarak, daha fazla zamana ihtiyacımız var." }
            ]
        }
    ],
    exercises: [
        { question: "___ the rain, they continued the match.", options: ["Although", "However", "Despite", "But"], correct: 2, explanation: "Despite + isim yapısı kullanılır. Although'dan sonra cümle gelmelidir." },
        { question: "The project was successful. ___, we made a profit.", options: ["Moreover", "Nevertheless", "Inspite of", "Although"], correct: 0, explanation: "Bilgi eklemek ve pekiştirmek için 'Moreover' kullanılır." }
    ]
};

// ===== UNIT 196: Modal Verbs in the Past (KAPSAMLI) =====
const unit196Grammar: EnglishGrammarUnit = {
    unitId: 196,
    title: "Modal Verbs in the Past (Perfect Modals)",
    rules: [
        {
            title: "1. Must Have Done vs. Can't Have Done (Geriye Dönük Çıkarım)",
            explanation: "Geçmişte olmuş veya olmamış bir olay hakkında 'mantıksal bir çıkarım' (deduction) yaparken kullanılır. Eğer bir şeyin geçmişte olduğuna %90 eminseniz 'must have + V3', imkansız olduğuna eminseniz 'can't have + V3' kullanılır.",
            examples: [
                { english: "He must have forgotten his keys.", turkish: "Anahtarlarını unutmuş olmalı. (Geriye dönük %90 eminlik)" },
                { english: "She can't have seen me because she wasn't there.", turkish: "Beni görmüş olamaz çünkü o orada değildi." },
                { english: "The ground is wet; it must have rained last night.", turkish: "Yerler ıslak; dün gece yağmur yağmış olmalı." }
            ]
        },
        {
            title: "2. Should Have Done (Pişmanlık ve Eleştiri)",
            explanation: "Geçmişte yapılması gerekip de yapılmayan eylemleri anlatır. Çoğunlukla 'pişmanlık' (regret) veya birini 'eleştirme' (criticism) için kullanılır. Olumsuz formu 'shouldn't have + V3' ise 'yapılmaması gerekirdi ama yapıldı' anlamı taşır.",
            examples: [
                { english: "I should have studied more for my exam.", turkish: "Sınavım için daha çok çalışmalıydım. (Ama çalışmadım - Pişmanlık)" },
                { english: "You shouldn't have said that to him.", turkish: "Ona bunu söylememeliydin. (Ama söyledin - Eleştiri)" },
                { english: "We should have left earlier to avoid the traffic.", turkish: "Trafikten kaçınmak için daha erken yola çıkmalıydık." }
            ]
        },
        {
            title: "3. Could Have vs. Might Have Done (Olasılık)",
            explanation: "Geçmişteki 'belki' dediğimiz olasılıkları anlatır. 'Could have done' ayrıca 'yapabilirdi ama yapmadı' (bir fırsat kaçtı) anlamında da kullanılır.",
            examples: [
                { english: "I might have left my phone at the cafe.", turkish: "Telefonumu kafede bırakmış olabilirim. (Belki)" },
                { english: "He could have won the race if he hadn't fallen.", turkish: "Düşmeseydi yarışı kazanabilirdi. (Kapasitesi vardı ama olmadı)" }
            ]
        }
    ],
    exercises: [
        { question: "I ___ (buy) that car when I had the money, but I waited too long.", options: ["should have bought", "must have bought", "can't have bought", "bought"], correct: 0, explanation: "Geçmişteki bir kaçırılmış fırsat veya pişmanlık için 'should have' kullanılır." },
        { question: "She ___ (see) you yesterday. She was in Paris all day.", options: ["must have seen", "can't have seen", "might have seen", "saw"], correct: 1, explanation: "Geçmişteki bir imkansızlık durumu için 'can't have + V3' kullanılır." }
    ]
};

// ===== UNIT 197: Narrative Tenses (Hikaye Anlatımı) =====
const unit197Grammar: EnglishGrammarUnit = {
    unitId: 197,
    title: "Narrative Tenses (Zamanların Hikayesel Kullanımı)",
    rules: [
        {
            title: "1. Past Simple, Continuous and Perfect Together",
            explanation: "Daha önce öğrendiğimiz zamanları bir hikaye içinde nasıl birleştireceğimizi öğreniyoruz. Past Continuous sahneyi (atmosferi) hazırlar, Past Simple ana olayları anlatır, Past Perfect ise olayların öncesine gider.",
            examples: [
                { english: "The sun was shining (Continuous) and birds were singing. Suddenly, I noticed (Simple) that I had lost (Perfect) my wallet.", turkish: "Güneş parlıyordu ve kuşlar ötüyordu. Aniden cüzdanımı kaybettiğimi fark ettim." }
            ]
        }
    ],
    exercises: [
        { question: "While we ___ (wait) for the bus, we realized we ___ (leave) the oven on.", options: ["waited / left", "were waiting / had left", "had waited / left", "were waiting / were leaving"], correct: 1, explanation: "Süreç (waiting) devam ederken, daha önceki bir olayı (leaving oven) fark ettik." }
    ]
};

// ===== UNIT 198: Logical Connectors (Mantık Bağlaçları) =====
const unit198Grammar: EnglishGrammarUnit = {
    unitId: 198,
    title: "Advanced Logical Connectors (İleri Bağlaçlar)",
    rules: [
        {
            title: "1. Conditionals Alternatives (Unless, Provided that)",
            explanation: "Şart cümlelerinde 'if' yerine kullanılan zenginleştirilmiş yapılar.",
            examples: [
                { english: "Unless (If not)", turkish: "...medikçe" },
                { english: "As long as / Provided that", turkish: "...dığı sürece / şartıyla" },
                { english: "In case", turkish: "...olur diye / olması durumunda" }
            ]
        }
    ],
    exercises: [
        { question: "I'll go to the party ___ you come with me.", options: ["unless", "provided that", "in case", "although"], correct: 1, explanation: "Bana eşlik etmen ŞARTIYLA (provided that) gideceğim." }
    ]
};

// ===== UNIT 199: Mixed Conditionals (Karışık Koşullar) =====
const unit199Grammar: EnglishGrammarUnit = {
    unitId: 199,
    title: "Mixed Conditionals (Zamanlar Arası Koşul Köprüleri)",
    rules: [
        {
            title: "1. Past Action, Present Result",
            explanation: "Geçmişteki bir eylem veya durumun şu ana olan etkisini anlatır. Yapı: If + Past Perfect, Modal + Present (would do).",
            examples: [
                { english: "If I had moved to London last year, I would be speaking English fluently now.", turkish: "Geçen yıl Londra'ya taşınsaydım, şu an akıcı İngilizce konuşuyor olurdum." }
            ]
        }
    ],
    exercises: [
        { question: "If I ___ (study) harder in university, I ___ (be) a manager now.", options: ["had studied / would be", "studied / would have been", "had studied / would have been", "study / will be"], correct: 0, explanation: "Geçmişteki eylemin şu anki sonucu (now) için 'had studied / would be' kullanılır." }
    ]
};

// ===== UNIT 200: Progress Test & Review =====
const unit200Grammar: EnglishGrammarUnit = {
    unitId: 200,
    title: "Level B2.1 Final Review (Genel Tekrar)",
    rules: [
        {
            title: "1. Summary of Batch 1 & 2",
            explanation: "191-199 arasındaki tüm ileri düzey gramer yapılarını tek bir ünitede pekiştiriyoruz.",
            examples: [
                { english: "Review all perfect tenses, modals and conditionals.", turkish: "Tüm 'perfect' zamanları, modalları ve koşul yapılarını tekrar edin." }
            ]
        }
    ],
    exercises: [
        { question: "By 2026, I ___ (finish) all these lessons.", options: ["will finish", "will have finished", "finished", "have finished"], correct: 1, explanation: "Gelecekte bitmiş olacak (Future Perfect)." }
    ]
};

// ===== UNIT 201: Medical English - Passive Voice in Reports =====
const unit201Grammar: EnglishGrammarUnit = {
    unitId: 201,
    title: "Passive Voice in Medical Reports",
    rules: [
        {
            title: "1. Using Passive for Objectivity",
            explanation: "Tıp raporlarında ve vaka çalışmalarında, eylemi kimin yaptığından ziyade eylemin kendisine odaklanmak için edilgen yapı (Passive Voice) tercih edilir.",
            examples: [
                { english: "The patient was admitted to the hospital.", turkish: "Hasta hastaneye yatırıldı. (Kimin yatırdığı değil, hastanın durumu önemli)" },
                { english: "A standard dosage was administered.", turkish: "Standart bir doz uygulandı." }
            ]
        }
    ],
    exercises: [
        { question: "The surgery ___ (perform) by Dr. Smith yesterday.", options: ["performed", "was performed", "has performed", "is performing"], correct: 1, explanation: "Geçmişte yapılmış edilgen bir eylem." }
    ]
};

// ===== UNIT 202: Medical English - Giving Instructions =====
const unit202Grammar: EnglishGrammarUnit = {
    unitId: 202,
    title: "Imperatives & Modals in Healthcare",
    rules: [
        {
            title: "1. Direct Instructions (Imperatives)",
            explanation: "Tedavi ve ilaç kullanımı tarif edilirken emir kipi (Imperatives) kullanılır.",
            examples: [
                { english: "Take two tablets twice a day.", turkish: "Günde iki kez iki tablet alın." },
                { english: "Apply the cream to the affected area.", turkish: "Kremi etkilenen bölgeye uygulayın." }
            ]
        }
    ],
    exercises: [
        { question: "___ the patient's blood pressure every hour.", options: ["Monitor", "Monitoring", "To monitor", "Monitored"], correct: 0, explanation: "Emir kipi (Imperative) fiilin yalın haliyle başlar." }
    ]
};

// ===== UNIT 203: Public Health - Cause & Effect =====
const unit203Grammar: EnglishGrammarUnit = {
    unitId: 203,
    title: "Cause and Effect in Public Health",
    rules: [
        {
            title: "1. Due to / Because of / Resulting in",
            explanation: "Salgın ve sağlık politikalarını anlatırken sebep-sonuç ilişkisi kuran yapılar.",
            examples: [
                { english: "The outbreak started due to poor sanitation.", turkish: "Salgın, yetersiz sanitasyon nedeniyle başladı." },
                { english: "New policies resulted in lower infection rates.", turkish: "Yeni politikalar daha düşük enfeksiyon oranlarıyla sonuçlandı." }
            ]
        }
    ],
    exercises: [
        { question: "The school was closed ___ the flu outbreak.", options: ["because of", "result in", "leads to", "because"], correct: 0, explanation: "İsim öbeğinden (the flu outbreak) önce 'because of' veya 'due to' kullanılır." }
    ]
};

// ===== UNIT 204: Legal English - Modals (Shall/Must) =====
const unit204Grammar: EnglishGrammarUnit = {
    unitId: 204,
    title: "Modal Verbs in Legal Context",
    rules: [
        {
            title: "1. The peculiar use of 'Shall'",
            explanation: "Hukuk dilinde 'Shall', gelecek zaman olmaktan ziyade 'yasal bir zorunluluk' ifade etmek için kullanılır.",
            examples: [
                { english: "The party shall provide all documents.", turkish: "Taraf, tüm belgeleri sağlamakla yükümlüdür (sağlayacaktır)." },
                { english: "The employee shall not disclose confidential information.", turkish: "Çalışan gizli bilgileri ifşa etmeyecektir (zorunluluk)." }
            ]
        }
    ],
    exercises: [
        { question: "In this contract, 'shall' indicates a ___.", options: ["possibility", "legal obligation", "future plan", "suggestion"], correct: 1, explanation: "Hukuki dilde 'shall' yasal zorunluluk (obligation) ifade eder." }
    ]
};

// ===== UNIT 205: Legal English - Contract Clauses =====
const unit205Grammar: EnglishGrammarUnit = {
    unitId: 205,
    title: "Conditional Clauses in Contracts",
    rules: [
        {
            title: "1. Provided that / In the event of",
            explanation: "Sözleşme şartlarını belirtmek için kullanılan resmi yapılar.",
            examples: [
                { english: "In the event of a breach, the contract will be terminated.", turkish: "İhlal durumunda, sözleşme feshedilecektir." },
                { english: "The deposit is refundable provided that the car is returned clean.", turkish: "Arabanın temiz iade edilmesi şartıyla depozito iade edilebilir." }
            ]
        }
    ],
    exercises: [
        { question: "___ a fire, use the stairs.", options: ["In case of", "In the event of", "Both A and B", "Unless"], correct: 2, explanation: "Her iki ifade de olası bir durum/olay karşısında kullanılacak prosedürü belirtir." }
    ]
};

// ===== UNIT 206: Legal English - Relative Clauses in IP =====
const unit206Grammar: EnglishGrammarUnit = {
    unitId: 206,
    title: "Defining Relative Clauses in IP Law",
    rules: [
        {
            title: "1. Specifying Subjects (Who/Which/That)",
            explanation: "Fikri mülkiyet tanımlarında 'hangi kişi' veya 'hangi eser' olduğunu belirtmek için tanımlayıcı ilgi cümlecikleri kullanılır.",
            examples: [
                { english: "An author is a person who creates an original work.", turkish: "Yazar, özgün bir eser yaratan kişidir." },
                { english: "A patent is a right which protects an invention.", turkish: "Patent, bir buluşu koruyan bir haktır." }
            ]
        }
    ],
    exercises: [
        { question: "The company ___ owns the trademark is suing us.", options: ["who", "which", "whom", "whose"], correct: 1, explanation: "Şirket (cansız/kurum) için 'which' veya 'that' kullanılır." }
    ]
};

// ===== UNIT 207: Finance - Financial Hypotheticals =====
const unit207Grammar: EnglishGrammarUnit = {
    unitId: 207,
    title: "Expressing Wishes & Regrets (Finance)",
    rules: [
        {
            title: "1. I Wish / If Only (Finance Ref)",
            explanation: "Maddi durumlar hakkında pişmanlık veya dilek belirtirken kullanılır.",
            examples: [
                { english: "I wish I had invested in gold last year.", turkish: "Keşke geçen yıl altına yatırım yapsaydım (yapmış olsaydım)." },
                { english: "If only the interest rates were lower.", turkish: "Keşke faiz oranları daha düşük olsaydı." }
            ]
        }
    ],
    exercises: [
        { question: "I wish I ___ (save) more money when I was younger.", options: ["saved", "record", "had saved", "saving"], correct: 2, explanation: "Geçmişe dair pişmanlıklar için 'wish + Past Perfect' kullanılır." }
    ]
};

// ===== UNIT 208: Finance - Describing Trends =====
const unit208Grammar: EnglishGrammarUnit = {
    unitId: 208,
    title: "Adjectives & Adverbs for Trends",
    rules: [
        {
            title: "1. Degrees of Change",
            explanation: "Piyasa hareketlerini tarif ederken kullanılan derecelendirme zarfları.",
            examples: [
                { english: "Prices rose sharply.", turkish: "Fiyatlar keskin bir şekilde yükseldi." },
                { english: "Sales declined slightly.", turkish: "Satışlar hafifçe düştü." }
            ]
        }
    ],
    exercises: [
        { question: "The stock market fell ___ after the news.", options: ["dramatic", "dramatically", "slight", "slow"], correct: 1, explanation: "Fiili (fell) nitelemek için zarf (adverb) kullanılır." }
    ]
};

// ===== UNIT 209: Business English - Reported Speech =====
const unit209Grammar: EnglishGrammarUnit = {
    unitId: 209,
    title: "Reported Speech in Business Meetings",
    rules: [
        {
            title: "1. Reporting Statements & Decisions",
            explanation: "Toplantı tutanaklarında veya raporlarda birinin ne dediğini aktarırken bir derece 'past'a gidilir.",
            examples: [
                { english: "He said that the project was on schedule.", turkish: "Projenin takvime uygun olduğunu söyledi." },
                { english: "The board announced that dividends would be paid.", turkish: "Yönetim kurulu temettülerin ödeneceğini duyurdu." }
            ]
        }
    ],
    exercises: [
        { question: "She told me she ___ (be) busy in the meeting.", options: ["is", "was", "be", "being"], correct: 1, explanation: "Reported speech kurallarına göre present tense past tense'e dönüşür." }
    ]
};

// ===== UNIT 210: ESP Review - Integration =====
const unit210Grammar: EnglishGrammarUnit = {
    unitId: 210,
    title: "ESP Grammar Synthesis",
    rules: [
        {
            title: "1. Combining Technical Structures",
            explanation: "Tüm ESP ünitelerinde gördüğümüz yapıların (Passive, Modals, Cause-Effect, Reported Speech) karma kullanımı.",
            examples: [
                { english: "It was reported that the patient had been recovered.", turkish: "Hastanın iyileştiği rapor edildi." }
            ]
        }
    ],
    exercises: [
        { question: "The CEO ___ that the contract had been signed.", options: ["said", "told", "spoke", "announced"], correct: 3, explanation: "Resmi duyurular için 'announced' daha uygundur." }
    ]
};

// ===== UNIT 211: Inversion (Negative Adverbials) =====
const unit211Grammar: EnglishGrammarUnit = {
    unitId: 211,
    title: "Emphatic Inversion",
    rules: [
        {
            title: "1. Negative Adverbials at the start",
            explanation: "Cümle 'Never, Rarely, Seldom' gibi kelimelerle başladığında yardımcı fiil özneden önce gelir.",
            examples: [
                { english: "Never have I been so insulted.", turkish: "Asla bu kadar aşağılanmamıştım." },
                { english: "Hardly had the meeting started when the fire alarm rang.", turkish: "Toplantı başlar başlamaz yangın alarmı çaldı." }
            ]
        }
    ],
    exercises: [
        { question: "Little ___ I know about their secret plan.", options: ["do", "did", "have", "had"], correct: 1, explanation: "Geçmiş zaman devrik cümle: 'Little did I know'." },
        { question: "Never ___ such a beautiful voice.", options: ["I have heard", "have I heard", "I had heard", "I hear"], correct: 1, explanation: "Never ile başlayan cümlede devriklik (inversion) yapılır." },
        { question: "Rarely ___ he seen without his camera.", options: ["is", "does", "has", "was"], correct: 0, explanation: "Rarely is he... (Rarely + auxiliary + subject)" }
    ]
};

// ===== UNIT 212: Cleft Sentences (Focus) =====
const unit212Grammar: EnglishGrammarUnit = {
    unitId: 212,
    title: "Cleft Sentences for Emphasis",
    rules: [
        {
            title: "1. It-Clefts",
            explanation: "Vurguyu bir ögeye çekmek için: It + be + [vurgulanan] + who/that.",
            examples: [
                { english: "It was my brother who called you.", turkish: "Seni arayan kardeşimdi. (Vurgu kardeşimde)" }
            ]
        },
        {
            title: "2. What-Clefts (Pseudo-clefts)",
            explanation: "Eylemi vurgulamak için: What + S + V + is/was + [vurgulanan].",
            examples: [
                { english: "What you need is a vacation.", turkish: "Senin ihtiyacın olan şey bir tatil." }
            ]
        }
    ],
    exercises: [
        { question: "___ she wanted was some peace and quiet.", options: ["It", "What", "Which", "Who"], correct: 1, explanation: "Vurgu grubunu 'What' ile başlatırız." },
        { question: "It was in 1923 ___ the republic was founded.", options: ["when", "that", "which", "where"], correct: 1, explanation: "It-cleft yapısında 'that' kullanılır." }
    ]
};

// ===== UNIT 213: Advanced Passive (Reporting) =====
const unit213Grammar: EnglishGrammarUnit = {
    unitId: 213,
    title: "Impersonal Passive Reporting",
    rules: [
        {
            title: "1. It is said/believed that...",
            explanation: "Genel kanıyı belirtmek için kullanılır.",
            examples: [
                { english: "It is widely believed that he is innocent.", turkish: "Onun masum olduğuna yaygın olarak inanılıyor." }
            ]
        },
        {
            title: "2. Subject + passive + to-infinitive",
            explanation: "Eylemi gerçekleştiren kişiden bahsederken kullanılır.",
            examples: [
                { english: "He is said to be living in London.", turkish: "Londra'da yaşadığı söyleniyor." },
                { english: "The painting is reported to have been stolen.", turkish: "Tablonun çalındığı rapor edildi." }
            ]
        }
    ],
    exercises: [
        { question: "She is thought ___ (join) the army last year.", options: ["to join", "to have joined", "joining", "joined"], correct: 1, explanation: "Geçmişe yönelik raporlama için 'to have V3' kullanılır." },
        { question: "It is reported that the criminal ___ (escape).", options: ["has escaped", "to escape", "escaping", "escaped"], correct: 0, explanation: "It is reported that... + clause yapısı." }
    ]
};

// ===== UNIT 214: The Subjunctive Mood =====
const unit214Grammar: EnglishGrammarUnit = {
    unitId: 214,
    title: "Subjunctive in Formal English",
    rules: [
        {
            title: "1. Suggest / Insist / Vital + that + bare infinitive",
            explanation: "Önem ve gereklilik bildiren yapılardan sonra fiil çekime girmez (yalın kalır).",
            examples: [
                { english: "He suggested that she sign the contract.", turkish: "Sözleşmeyi imzalamasını önerdi. (signs değil sign)" },
                { english: "It is vital that he be informed.", turkish: "Bilgilendirilmesi hayati önem taşıyor. (is değil be)" }
            ]
        }
    ],
    exercises: [
        { question: "I demand that the manager ___ (come) here immediately.", options: ["comes", "coming", "come", "to come"], correct: 2, explanation: "Subjunctive yapıda fiil yalın (bare) kalır." },
        { question: "It is essential that everyone ___ (be) on time.", options: ["is", "are", "be", "to be"], correct: 2, explanation: "Essential + that + subjunctive (be)." }
    ]
};

// ===== UNIT 215: Participle Clauses (Reduction) =====
const unit215Grammar: EnglishGrammarUnit = {
    unitId: 215,
    title: "Participle Clauses",
    rules: [
        {
            title: "1. V-ing for Active Meaning",
            explanation: "Özneleri aynı olan iki cümleyi birleştirirken veya sebep bildirirken kullanılır.",
            examples: [
                { english: "Opening the door, I found a kitten.", turkish: "Kapıyı açtığımda (açarken) bir kedi yavrusu buldum." }
            ]
        },
        {
            title: "2. V3 for Passive Meaning",
            explanation: "Edilgen anlam taşıyan kısaltmalarda kullanılır.",
            examples: [
                { english: "Shocked by the news, he couldn't speak.", turkish: "Haberle şok olan (şok olduğu için) konuşamadı." }
            ]
        }
    ],
    exercises: [
        { question: "___ (smoke) is bad for health.", options: ["Smoke", "Smoked", "Smoking", "To smoking"], correct: 2, explanation: "Burada 'gerund' özne olarak kullanılmıştır." },
        { question: "___ (feel) tired, she went to sleep.", options: ["Feeling", "Felt", "To feel", "Feels"], correct: 0, explanation: "Sebep bildiren partiniple clause." }
    ]
};

// ===== UNIT 216: Advanced Quantifiers =====
const unit216Grammar: EnglishGrammarUnit = {
    unitId: 216,
    title: "Advanced Quantifiers",
    rules: [
        {
            title: "1. Each vs Every (Individual vs Group)",
            explanation: "Each tekil ögelere odaklanırken, Every grubu bir bütün olarak görür. 'Every single' vurguyu artırır.",
            examples: [
                { english: "Each student was given a book.", turkish: "Her bir öğrenciye (tek tek) bir kitap verildi." },
                { english: "Every single person must attend.", turkish: "İstisnasız her kişi katılmalı." }
            ]
        }
    ],
    exercises: [
        { question: "___ of the two candidates is qualified.", options: ["Each", "Every", "All", "Both"], correct: 0, explanation: "İki şeyden bahsederken 'Each' kullanılır." },
        { question: "There are 50 students, and ___ student has a book.", options: ["each", "every", "all", "none"], correct: 1, explanation: "Grup vurgusu için 'every' daha yaygındır." }
    ]
};

// ===== UNIT 217: Emphatic Structures (Do/Did & So/Such) =====
const unit217Grammar: EnglishGrammarUnit = {
    unitId: 217,
    title: "Vurgu Yapıları: Do/Did & So/Such",
    rules: [
        {
            title: "1. Auxiliary 'Do' for Emphasis",
            explanation: "Duyguları veya zıtlıkları vurgulamak için olumlu cümlede kullanılır.",
            examples: [
                { english: "I do believe you are right.", turkish: "Senin haklı olduğuna gerçekten inanıyorum." }
            ]
        },
        {
            title: "2. So / Such Inversion",
            explanation: "So + adjective + be + subject kalıbı.",
            examples: [
                { english: "So loud was the noise that I woke up.", turkish: "Gürültü o kadar fazlaydı ki uyandım." }
            ]
        }
    ],
    exercises: [
        { question: "He ___ (gerçekten) help us yesterday.", options: ["does", "did", "was", "has"], correct: 1, explanation: "Geçmiş zaman vurgusu için 'did + fiil' kullanılır." },
        { question: "I ___ believe you are joking.", options: ["do", "does", "am", "have"], correct: 0, explanation: "Geniş zaman vurgusu: 'I do believe'." }
    ]
};

// ===== UNIT 218: Prepositional Phrases =====
const unit218Grammar: EnglishGrammarUnit = {
    unitId: 218,
    title: "Advanced Prepositional Phrases",
    rules: [
        {
            title: "1. Purpose and Reason",
            explanation: "With a view to, in light of, on behalf of gibi profesyonel yapılar.",
            examples: [
                { english: "We study with a view to improving.", turkish: "Gelişmek amacıyla çalışıyoruz." }
            ]
        }
    ],
    exercises: [
        { question: "I am writing ___ behalf of the company.", options: ["in", "on", "at", "by"], correct: 1, explanation: "'On behalf of' (adına) kalıplaşmış bir ifadedir." },
        { question: "___ light of recent events, we must wait.", options: ["On", "In", "At", "For"], correct: 1, explanation: "'In light of' (ışığında) kalıbı kullanılır." }
    ]
};

// ===== UNIT 219: Complex Review =====
const unit219Grammar: EnglishGrammarUnit = {
    unitId: 219,
    title: "B2 Advanced Grammar Review",
    rules: [
        {
            title: "1. Mixing Structures",
            explanation: "Devriklik, vurgu ve kısaltmaların bir arada kullanımı.",
            examples: [
                { english: "Not only did he arrive late, but he also forgot what it was he had to do.", turkish: "Sadece geç kalmadı, aynı zamanda yapması gerekenin ne olduğunu da unuttu." }
            ]
        }
    ],
    exercises: [
        { question: "Seldom ___ such a mess.", options: ["I see", "have I seen", "I am seeing", "we see"], correct: 1, explanation: "Seldom ile başlayan cümle devrik olur." },
        { question: "What I need most ___ a long sleep.", options: ["is", "are", "be", "to be"], correct: 0, explanation: "What-cleft yapısı." }
    ]
};

// ===== UNIT 220: B2 Final Exam =====
const unit220Grammar: EnglishGrammarUnit = {
    unitId: 220,
    title: "B2 level Graduation Exam",
    rules: [
        {
            title: "Final Consolidation",
            explanation: "B2 seviyesinin tüm yapılarını başarıyla kullanabiliyorsunuz.",
            examples: [
                { english: "If I were you, I would celebrate.", turkish: "Yerinde olsam kutlardım." }
            ]
        }
    ],
    exercises: [
        { question: "What I need most is ___.", options: ["a break", "to break", "break", "breaking"], correct: 0, explanation: "'What' ile başlayan cleft cümlesi." },
        { question: "If I ___ (be) you, I'd go.", options: ["am", "was", "were", "be"], correct: 2, explanation: "Conditionals Type 2." }
    ]
};

/**
 * Üniteye göre B2 gramer içeriğini getiren yardımcı fonksiyon
 */
export function getEnglishB2GrammarForUnit(unitId: number): EnglishGrammarUnit {
    const b2Grammar: { [key: number]: EnglishGrammarUnit } = {
        191: unit191Grammar, 192: unit192Grammar, 193: unit193Grammar,
        194: unit194Grammar, 195: unit195Grammar, 196: unit196Grammar,
        197: unit197Grammar, 198: unit198Grammar, 199: unit199Grammar,
        200: unit200Grammar, 201: unit201Grammar, 202: unit202Grammar,
        203: unit203Grammar, 204: unit204Grammar, 205: unit205Grammar,
        206: unit206Grammar, 207: unit207Grammar, 208: unit208Grammar,
        209: unit209Grammar, 210: unit210Grammar, 211: unit211Grammar,
        212: unit212Grammar, 213: unit213Grammar, 214: unit214Grammar,
        215: unit215Grammar, 216: unit216Grammar, 217: unit217Grammar,
        218: unit218Grammar, 219: unit219Grammar, 220: unit220Grammar,
    };
    return b2Grammar[unitId] || unit191Grammar;
}
