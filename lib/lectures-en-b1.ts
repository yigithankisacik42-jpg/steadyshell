/**
 * SteadyShell Lectures - English B1 (Units 161-190)
 * B1 Orta Seviye İçerikler
 */

import { EnglishLecture } from './lectures-en-a1';

// ===== UNIT 161: GELECEK ZAMAN =====
export const u161: EnglishLecture = {
    unitId: 161,
    title: "Future Plans & Intentions (Will vs Be Going To)",
    introduction: "B1 seviyesinde en önemli ayrım 'be going to' ve 'will' arasındadır. Bu ünitede niyetlerimizi, planlarımızı ve ani kararlarımızı nasıl doğru ifade edeceğimizi öğreneceğiz.",
    sections: [
        {
            title: "Planlanmış Gelecek: Be Going To",
            content: "Önceden verilmiş kararlar, niyetler (intentions) ve elimizde kanıt olan durumlar için 'be going to' kullanılır.",
            examples: [
                { english: "I am going to buy a new laptop next month.", turkish: "Gelecek ay yeni bir dizüstü bilgisayar alacağım. (Kararımı önceden verdim)" },
                { english: "Look at those dark clouds! It is going to rain.", turkish: "Şu kara bulutlara bak! Yağmur yağacak. (Elimde kanıt var)" }
            ]
        },
        {
            title: "Ani Kararlar ve Genel Tahminler: Will",
            content: "Konuşma anında verilen hızlı kararlar, sözler, teklifler ve kesin kanıtı olmayan tahminler için 'will' kullanılır.",
            examples: [
                { english: "The phone is ringing. - I will answer it!", turkish: "Telefon çalıyor. - Ben bakarım! (Ani karar)" },
                { english: "I expect life will be very different in 2050.", turkish: "2050'de hayatın çok farklı olacağını tahmin ediyorum." }
            ]
        }
    ],
    tips: ["Gelecek planlamasında niyetlerinizi belirtirken 'ambition' veya 'arrangement' kelimelerini de kullanabilirsiniz."],
    summary: "Planlı durumlar için 'be going to', ani kararlar ve tahminler için 'will' kullanmayı öğrendiniz."
};

// ===== UNIT 162: KOŞUL CÜMLELERİ 1 =====
export const u162: EnglishLecture = {
    unitId: 162,
    title: "First Conditional (Gerçekçi Koşul Cümleleri)",
    introduction: "First Conditional (Tip 1), gelecekte olması muhtemel durumlar ve onların sonuçları için kullanılır. 'Eğer bu olursa, şu olacak' mantığıdır.",
    sections: [
        {
            title: "Yapı: If + Present Simple, Will + Verb",
            content: "'If'li kısımda Geniş Zaman (Present Simple), sonuç kısmında ise Gelecek Zaman (Will) kullanılır. Unutmayın, 'if'li tarafa doğrudan 'will' gelmez.",
            examples: [
                { english: "If you study hard, you will pass the exam.", turkish: "Eğer sıkı çalışırsan, sınavı geçeceksin." },
                { english: "If the flight is delayed, we will wait.", turkish: "Eğer uçuş ertelenirse, bekleyeceğiz." }
            ]
        },
        {
            title: "Unless Kullanımı",
            content: "'Unless', 'if not' (olmadıkça / -mezse) anlamına gelir. Cümleye kendisi olumsuzluk kattığı için fiil olumlu çekimlenir.",
            examples: [
                { english: "Unless you show your passport, you cannot board.", turkish: "Pasaportunu göstermedikçe, uçağa binemezsin." },
                { english: "I won't go unless you come too.", turkish: "Sen de gelmedikçe gitmeyeceğim." }
            ]
        }
    ],
    tips: ["Koşul cümlelerinde sonuç kısmında 'will' yerine 'can' veya 'might' modalları da gelebilir."],
    summary: "Gelecekteki olası durumları ve sonuçlarını ifade etmeyi öğrendiniz."
};

// ===== UNIT 163: KOŞUL CÜMLELERİ 2 =====
export const u163: EnglishLecture = {
    unitId: 163,
    title: "Second Conditional (Hayali Durumlar)",
    introduction: "Second Conditional (Tip 2), şu anda gerçek olmayan, hayali (imaginary) veya varsayımsal (hypothetical) durumlar için kullanılır.",
    sections: [
        {
            title: "Yapı: If + Past Simple, Would + Verb",
            content: "'If'li kısımda Geçmiş Zaman (Past Simple), sonuç kısmında ise 'Would' (yapardım/ederdim) kullanılır.",
            examples: [
                { english: "If I won the lottery, I would travel the world.", turkish: "Piyangoyu kazansam, dünyayı gezerdim." },
                { english: "If they had more money, they would stay in a luxury hotel.", turkish: "Daha fazla paraları olsa, lüks bir otelde kalırlardı." }
            ]
        },
        {
            title: "Tavsiye Kalıbı: If I were you",
            content: "Second Conditional'da 'I, he, she, it' özneleriyle 'were' kullanmak (özellikle tavsiye verirken) çok daha yaygındır.",
            examples: [
                { english: "If I were you, I would recommend a different option.", turkish: "Senin yerinde olsam, farklı bir seçeneği önerirdim." },
                { english: "If she were here, she would explain everything.", turkish: "Burada olsaydı, her şeyi açıklardı." }
            ]
        }
    ],
    tips: ["Yetenek bildiren hayaller için 'would' yerine 'could' da kullanabilirsiniz."],
    summary: "Gerçek dışı durumları ve varsayımları İngilizce ifade etmeyi öğrendiniz."
};

// ===== UNIT 164: PASSIVE VOICE =====
export const u164: EnglishLecture = {
    unitId: 164,
    title: "Passive Voice (Edilgen Yapı)",
    introduction: "Pasif yapı, eylemi yapan kişinin değil, eylemden etkilenen nesnenin daha önemli veya vurgulanmak istendiği durumlarda kullanılır.",
    sections: [
        {
            title: "Yapı: BE + Fiilin 3. Hali (Past Participle)",
            content: "Konuşulan zamana göre 'BE' fiili çekimlenir (am/is/are/was/were) ve yanına fiilin 3. hali eklenir.",
            examples: [
                { english: "This phone was manufactured in Turkey.", turkish: "Bu telefon Türkiye'de imal edildi." },
                { english: "Millions of emails are sent every day.", turkish: "Her gün milyonlarca e-posta gönderilir." }
            ]
        },
        {
            title: "Eylemi Yapanı Belirtme: By",
            content: "Eğer eylemi kimin yaptığını özellikle belirtmek istiyorsak, cümleye 'by' (tarafından) kelimesiyle ekleriz.",
            examples: [
                { english: "The book was written by a famous author.", turkish: "Kitap ünlü bir yazar tarafından yazıldı." },
                { english: "The software was designed by our team.", turkish: "Yazılım ekibimiz tarafından tasarlandı." }
            ]
        }
    ],
    tips: ["Bilimsel veya endüstriyel süreçleri anlatırken pasif yapı sıklıkla tercih edilir."],
    summary: "Nesnenin ve sürecin ön planda olduğu edilgen yapıları kullanmayı öğrendiniz."
};

// ===== UNIT 165: REPORTED SPEECH =====
export const u165: EnglishLecture = {
    unitId: 165,
    title: "Reported Speech (Dolaylı Anlatım)",
    introduction: "Reported Speech, bir kişinin söylediği cümleyi kendi kelimelerimizle başkasına aktarmak için kullanılır. Aktarırken zamanlar genellikle geçmişe kayar.",
    sections: [
        {
            title: "Zaman Kayması (The Backshift Rules)",
            content: "Aktarma yaparken zamanlar bir derece geçmişe kayar. Örneğin; Present Simple -> Past Simple, Will -> Would, Can -> Could olur.",
            examples: [
                { english: "Direct: 'I am happy.' -> Reported: He said that he was happy.", turkish: "Doğrudan: 'Mutluyum.' -> Dolaylı: Mutlu olduğunu söyledi." },
                { english: "Direct: 'I will call you.' -> Reported: She said she would call me.", turkish: "Doğrudan: 'Seni arayacağım.' -> Dolaylı: Beni arayacağını söyledi." }
            ]
        },
        {
            title: "Say vs Tell Farkı",
            content: "'Say' kime söylendiği belirtilmediğinde, 'Tell' ise kime söylendiği mutlaka belirtildiğinde (tell me, tell him) kullanılır.",
            examples: [
                { english: "She said she was tired.", turkish: "Yorgun olduğunu söyledi." },
                { english: "She told me that she was tired.", turkish: "Bana yorgun olduğunu söyledi." }
            ]
        }
    ],
    tips: ["Söz aktarırken zaman zarfları da değişir: 'tomorrow' -> 'the next day', 'today' -> 'that day' olur."],
    summary: "Başkalarının sözlerini aktarma kurallarını ve zaman kaymalarını öğrendiniz."
};

// ===== UNIT 166: PHRASAL VERBS 1 =====
export const u166: EnglishLecture = {
    unitId: 166,
    title: "Phrasal Verbs - Part 1 (Temeller)",
    introduction: "İngilizcede bir fiilin yanına 'up, down, off, out' gibi edatların gelerek fiilin anlamını tamamen değiştirmesine 'Phrasal Verb' denir.",
    sections: [
        {
            title: "Fiil + Edat Mantığı",
            content: "Deyimsel fiiller günlük İngilizcede son derece yaygındır ve akıcılık için ezberlenmeleri gerekir.",
            examples: [
                { english: "Pick up the kids from school.", turkish: "Çocukları okuldan al." },
                { english: "Can you find out the truth?", turkish: "Gerçeği öğrenebilir misin?" }
            ]
        },
        {
            title: "Ayrılabilen Phrasal Verbler",
            content: "Bazı phrasal verblerde nesne araya girebilir. Eğer nesne bir zamir ise (it, me, them), mutlaka araya girmelidir.",
            examples: [
                { english: "Turn on the TV. / Turn the TV on.", turkish: "Televizyonu aç." },
                { english: "Turn it on. (Doğru) / Turn on it. (Yanlış)", turkish: "Onu aç." }
            ]
        }
    ],
    tips: ["Ayrılmayan phrasal verblerde nesne her zaman en sonda kalır: 'look for a job'."],
    summary: "Deyimsel fiillerin temel mantığını ve nesne kullanım kurallarını öğrendiniz."
};

// ===== UNIT 167: PHRASAL VERBS 2 =====
export const u167: EnglishLecture = {
    unitId: 167,
    title: "Phrasal Verbs - Part 2 (Daha Fazla Deyim)",
    introduction: "Bu ünitede üç kelimeli phrasal verbleri, ilişkiler ve iş hayatında en çok kullanılan deyimsel fiilleri öğreneceğiz.",
    sections: [
        {
            title: "Üç Kelimeli Phrasal Verbler",
            content: "Bir fiil ve iki edattan oluşan bu yapılar asla ayrılmaz ve nesne her zaman en sona gelir.",
            examples: [
                { english: "We ran out of milk.", turkish: "Sütümüz tükendi/bitti." },
                { english: "I am looking forward to the holiday.", turkish: "Tatili dört gözle bekliyorum." }
            ]
        },
        {
            title: "İlişkiler ve İş Hayatı",
            content: "İletişim ve günlük rutinlerde kullanılan yaygın kalıplar:",
            examples: [
                { english: "I get on well with my colleagues.", turkish: "Meslektaşlarımla iyi geçiniyorum." },
                { english: "Never give up on your dreams.", turkish: "Hayallerinden asla vazgeçme." }
            ]
        }
    ],
    tips: ["Kıyafet denerken 'try on', şık giyinirken 'dress up' kullanılır."],
    summary: "Günlük akıcılığınızı artıracak gelişmiş deyimsel fiilleri öğrendiniz."
};

// ===== UNIT 168: HABERLER VE MEDYA =====
export const u168: EnglishLecture = {
    unitId: 168,
    title: "News & Media (Medya Dili)",
    introduction: "Haber okurken, televizyon izlerken veya sosyal medyadaki güncel gelişmeleri takip ederken kullanılan dile odaklanıyoruz.",
    sections: [
        {
            title: "Haberlerde Pasif Yapı ve Aktarma",
            content: "Haber metinlerinde objektifliği sağlamak için pasif yapılar ve 'claim, state, report' gibi aktarma fiilleri sıkça kullanılır.",
            examples: [
                { english: "It is claimed that the company will close.", turkish: "Şirketin kapanacağı iddia ediliyor." },
                { english: "Officials stated that the fire was under control.", turkish: "Yetkililer yangının kontrol altında olduğunu ifade etti." }
            ]
        },
        {
            title: "Medya Terimleri",
            content: "Broadcasting (yayıncılık), viral (hızlı yayılan), commercial (reklam) gibi kelimelerin kullanımı yaygındır.",
            examples: [
                { english: "The video went viral in just two days.", turkish: "Video sadece iki günde viral oldu (yayıldı)." },
                { english: "A TV commercial interrupted the movie.", turkish: "Bir televizyon reklamı filmi böldü." }
            ]
        }
    ],
    tips: ["'Breaking news' son dakika gelişmeleri anlamına gelir."],
    summary: "Haber ve medya takibinde kullanılan profesyonel dili ve kalıpları öğrendiniz."
};

// ===== UNIT 169: ÇEVRE SORUNLARI =====
export const u169: EnglishLecture = {
    unitId: 169,
    title: "Environmental Issues (Çevre ve Modallar)",
    introduction: "Çevre sorunlarını tartışırken, tavsiyede bulunurken veya yasal zorunlulukları belirtirken modalları nasıl kullanacağımızı öğreneceğiz.",
    sections: [
        {
            title: "Tavsiye ve Kuvvetli Tavsiye: Should & Had Better",
            content: "Genel öneriler için 'should', yapılması kritik olan ve uyarı içeren durumlar için 'had better' kullanılır.",
            examples: [
                { english: "We should recycle paper to protect forests.", turkish: "Ormanları korumak için kağıdı geri dönüştürmeliyiz." },
                { english: "We had better stop global warming soon.", turkish: "Küresel ısınmayı yakında durdursak iyi olur (yoksa kötü olacak)." }
            ]
        },
        {
            title: "Zorunluluk ve Yasaklama: Have to & Mustn't",
            content: "Yasal zorunluluklarda 'have to', kesin yasaklarda ise 'mustn't' kullanılır.",
            examples: [
                { english: "Companies have to follow environmental laws.", turkish: "Şirketler çevre yasalarına uymak zorunda." },
                { english: "You mustn't throw trash in nature.", turkish: "Doğaya çöp atmamalısın (kesinlikle yasak)." }
            ]
        }
    ],
    tips: ["'Endangered species', nesli tükenmekte olan canlı türlerini ifade eder."],
    summary: "Çevresel sorunları ifade ederken doğru modalları seçmeyi öğrendiniz."
};

// ===== UNIT 170: SÜRDÜRÜLEBİLİRLİK =====
export const u170: EnglishLecture = {
    unitId: 170,
    title: "Sustainability (Gerunds & Infinitives)",
    introduction: "Sürdürülebilirlik ve doğayı koruma konularını tartışırken, fiillerin isim hallerini (Gerunds) veya mastar hallerini (Infinitives) kullanmayı öğreneceğiz.",
    sections: [
        {
            title: "Gerund Alan Fiiller (Fiil + ing)",
            content: "Recycle, avoid, suggest gibi bazı fiillerden sonra gelen ikinci fiil mutlaka '-ing' takısı alır.",
            examples: [
                { english: "We should avoid wasting water.", turkish: "Suyu boşa harcamaktan kaçınmalıyız." },
                { english: "She suggested planting more trees.", turkish: "Daha fazla ağaç dikmeyi önerdi." }
            ]
        },
        {
            title: "Infinitive Alan Fiiller (To + Fiil)",
            content: "Decide, plan, want, hope gibi fiillerden sonra gelen ikinci fiil 'to' ile kullanılır.",
            examples: [
                { english: "We decided to use sustainable energy.", turkish: "Sürdürülebilir enerji kullanmaya karar verdik." },
                { english: "They want to preserve the local ecology.", turkish: "Yerel ekolojiyi korumak istiyorlar." }
            ]
        }
    ],
    tips: ["'Stop' fiilinden sonra '-ing' gelirse eylemi tamamen bırakmak, 'to' gelirse bir amaç için durmak anlamına gelir."],
    summary: "Geri dönüşüm ve çevre bağlamında Gerund/Infinitive kullanımını öğrendiniz."
};

// ===== UNIT 171: KÜLTÜR VE GELENEKLER =====
export const u171: EnglishLecture = {
    unitId: 171,
    title: "Culture & Traditions (Used to & Would)",
    introduction: "Farklı kültürleri, festivalleri ve geçmişteki alışkanlıklarımızı anlatırken kullanılan yapılara odaklanıyoruz.",
    sections: [
        {
            title: "Past Habits: Used to",
            content: "Geçmişte uzun süre yapılmış fakat artık tamamen bitmiş durumlar veya alışkanlıklar için 'used to' kullanılır.",
            examples: [
                { english: "We used to live in a small village.", turkish: "Eskiden küçük bir köyde yaşardık." },
                { english: "Did you use to celebrate this festival?", turkish: "Eskiden bu festivali kutlar mıydınız?" }
            ]
        },
        {
            title: "Past Action Repeat: Would",
            content: "Geçmişteki tekrarlanan hareketli eylemler için 'would' kullanılabilir. Ancak durum bildiren (be, live, have) fiillerle 'would' kullanılmaz.",
            examples: [
                { english: "Every summer, my grandfather would tell us stories.", turkish: "Her yaz büyükbabam bize hikayeler anlatırdı." },
                { english: "I used to be shy. (I would be shy - YANLIŞ)", turkish: "Eskiden utangaçtım." }
            ]
        }
    ],
    tips: ["Kültürel adetler ve miras için 'custom' ve 'heritage' kelimeleri sıkça kullanılır."],
    summary: "Geçmiş alışkanlıklarınızı 'used to' ve 'would' kullanarak anlatmayı öğrendiniz."
};

// ===== UNIT 172: EKONOMİ TEMELLERİ =====
export const u172: EnglishLecture = {
    unitId: 172,
    title: "Economy Basics (Quantifiers)",
    introduction: "Ekonomi, bütçe ve para konularından bahsederken sayılabilen ve sayılamayan isimlerle kullanılan miktar belirleyicileri öğreneceğiz.",
    sections: [
        {
            title: "Sayılabilen ve Sayılamayan Kelimeler",
            content: "Ekonomide 'money, wealth' sayılamaz; 'coins, dollars, investments' sayılabilir isimlerdir.",
            examples: [
                { english: "I have a few dollars left in my wallet.", turkish: "Cüzdanımda birkaç dolarım kaldı. (Sayılabilen)" },
                { english: "We have a little profit this month.", turkish: "Bu ay biraz kârımız var. (Sayılamayan)" }
            ]
        },
        {
            title: "Many vs Much ve A lot of",
            content: "Sorularda ve olumsuzlarda sayılabilenler için 'many', sayılamayanlar için 'much'; olumlu cümlelerde ise 'a lot of' veya 'plenty of' kullanılır.",
            examples: [
                { english: "We don't have much money for investment.", turkish: "Yatırım için çok paramız yok." },
                { english: "There are plenty of opportunities in this market.", turkish: "Bu piyasada bolca fırsat var." }
            ]
        }
    ],
    tips: ["A few / A little olumlu (az ama yeterli) anlam taşırken; few / little olumsuz (neredeyse hiç yok) anlam taşır."],
    summary: "Ekonomi ve bütçe konularında miktar ifadelerini doğru kullanmayı öğrendiniz."
};

// ===== UNIT 173: TARTIŞMA BECERİLERİ =====
export const u173: EnglishLecture = {
    unitId: 173,
    title: "Debate & Arguments (Connectors)",
    introduction: "Fikirlerimizi tartışırken, tezlerimizi savunurken ve zıt görüşleri birbirine bağlarken kullanacağımız gelişmiş bağlaçları öğreneceğiz.",
    sections: [
        {
            title: "Zıtlık Bağlaçları: However & Although",
            content: "'However' cümle başında arkasından virgül alarak kullanılır. 'Although' ise arkasından tam bir cümle alır.",
            examples: [
                { english: "The plan is risky. However, we should try it.", turkish: "Plan riskli. Ancak denemeliyiz." },
                { english: "Although it was expensive, I bought it.", turkish: "Pahalı olmasına rağmen onu satın aldım." }
            ]
        },
        {
            title: "Despite & In spite of",
            content: "Zıtlık bildirir ancak yanına cümle değil, isim veya isim tamlaması alır.",
            examples: [
                { english: "Despite the bad weather, we arrived on time.", turkish: "Kötü havaya rağmen zamanında vardık." },
                { english: "We continued the project in spite of difficulties.", turkish: "Zorluklara rağmen projeye devam ettik." }
            ]
        }
    ],
    tips: ["Sonuç bildirmek ve argümanınızı bağlamak için 'therefore' veya 'consequently' kullanabilirsiniz."],
    summary: "Fikirlerinizi zıtlık ve neden-sonuç bağlaçlarıyla güçlendirmeyi öğrendiniz."
};

// ===== UNIT 174: SUNUM YAPMA =====
export const u174: EnglishLecture = {
    unitId: 174,
    title: "Presentations (Signposting)",
    introduction: "Profesyonel veya akademik ortamlarda sunum yaparken dinleyicileri yönlendirmek için kullanılan kalıpları (signposting) öğreneceğiz.",
    sections: [
        {
            title: "Sunuma Başlama ve Giriş",
            content: "Sunuma başlarken kendimizi tanıtıp konuya girmek için kalıplaşmış ifadeler kullanırız.",
            examples: [
                { english: "First of all, I'd like to welcome you all today.", turkish: "Öncelikle, bugün hepinize hoş geldiniz demek istiyorum." },
                { english: "Today, I am going to talk about innovation.", turkish: "Bugün yenilik/inovasyon hakkında konuşacağım." }
            ]
        },
        {
            title: "Konu Geçişleri ve Vurgu",
            content: "Konudan konuya geçerken dinleyicinin takibini kolaylaştıran ifadeler:",
            examples: [
                { english: "Now, let's move on to the next point.", turkish: "Şimdi bir sonraki noktaya geçelim." },
                { english: "I would like to highlight the following chart.", turkish: "Şu grafiği vurgulamak istiyorum." }
            ]
        }
    ],
    tips: ["Sunumu bitirirken 'In conclusion, thank you for listening' demek kibar bir kapanıştır."],
    summary: "Profesyonel sunumlarda yönlendirme kalıplarını kullanmayı öğrendiniz."
};

// ===== UNIT 175: EDEBİYAT 1 =====
export const u175: EnglishLecture = {
    unitId: 175,
    title: "Literature (Narrative Tenses)",
    introduction: "Edebi eserleri, hikayeleri ve kurgusal olayları anlatırken kullanılan anlatım zamanlarını (Narrative Tenses) inceleyeceğiz.",
    sections: [
        {
            title: "Hikaye Anlatım Zamanları",
            content: "Olaylar zinciri için 'Past Simple', arka plan tasviri için 'Past Continuous', olaylardan önce gerçekleşmiş durumlar için 'Past Perfect' kullanılır.",
            examples: [
                { english: "The protagonist opened the door and entered the room.", turkish: "Baş kahraman kapıyı açtı ve odaya girdi. (Past Simple)" },
                { english: "The sun was shining when the mystery began.", turkish: "Gizem başladığında güneş parlıyordu. (Past Continuous)" },
                { english: "She realized she had lost her notebook.", turkish: "Not defterini kaybetmiş olduğunu fark etti. (Past Perfect)" }
            ]
        }
    ],
    tips: ["Olay örgüsü için 'plot', ana karakter için 'protagonist' kelimeleri edebiyatta sıkça geçer."],
    summary: "Hikaye anlatımında geçmiş zamanların kombinasyonlarını kullanmayı öğrendiniz."
};

// ===== UNIT 176: AKADEMİK YAZMA =====
export const u176: EnglishLecture = {
    unitId: 176,
    title: "Academic Writing (Essay Structure)",
    introduction: "Makale, rapor ve kompozisyon (essay) yazarken akademik dili ve yapısal özellikleri nasıl kullanacağımızı öğreneceğiz.",
    sections: [
        {
            title: "Paragraf Yapısı ve Bağlantılar",
            content: "Akademik yazımda fikirlerimizi desteklemek ve mantıklı geçişler yapmak için bağlaçlar kullanırız.",
            examples: [
                { english: "Furthermore, research shows that prices are rising.", turkish: "Dahası, araştırmalar fiyatların yükseldiğini gösteriyor." },
                { english: "In addition to this, we must analyze the data.", turkish: "Buna ek olarak, veriyi analiz etmeliyiz." }
            ]
        },
        {
            title: "Objektif Anlatım",
            content: "Kişisel ifadeler (I think) yerine nesnel yapılar ve edilgen anlatım tercih edilir.",
            examples: [
                { english: "It is widely believed that technology helps learning.", turkish: "Teknolojinin öğrenmeye yardımcı olduğuna yaygın olarak inanılır." }
            ]
        }
    ],
    tips: ["Akademik yazılarda kısaltmalar (don't, won't) kullanılmaz; açık halleri (do not, will not) yazılır."],
    summary: "Akademik kompozisyon yazımındaki temel kuralları ve nesnel dili öğrendiniz."
};

// ===== UNIT 177: BİLİM VE TEKNOLOJİ =====
export const u177: EnglishLecture = {
    unitId: 177,
    title: "Science & Technology (Innovations)",
    introduction: "Bilimsel gelişmeler, teknolojik yenilikler ve geleceğin icatları hakkında nasıl konuşacağımızı öğreneceğiz.",
    sections: [
        {
            title: "Teknoloji Terimleri ve Gelecek",
            content: "İcatlar, yapay zeka ve dijital dönüşüm konularında kullanılan kalıplar.",
            examples: [
                { english: "Artificial intelligence will transform healthcare.", turkish: "Yapay zeka sağlık hizmetlerini dönüştürecek." },
                { english: "They discovered a new vaccine for the virus.", turkish: "Virüs için yeni bir aşı keşfettiler." }
            ]
        },
        {
            title: "Bilimsel Bulguların Aktarılması",
            content: "Araştırma ve deney sonuçlarını aktarırken kullanılan yapılar:",
            examples: [
                { english: "The experiment proved our hypothesis.", turkish: "Deney hipotezimizi kanıtladı." },
                { english: "This innovation has many benefits.", turkish: "Bu yeniliğin pek çok faydası var." }
            ]
        }
    ],
    tips: ["Keşfetmek 'discover', icat etmek ise 'invent' fiiliyle ifade edilir."],
    summary: "Bilim ve teknoloji konularını akademik düzeyde tartışmayı öğrendiniz."
};

// ===== UNIT 178: SAĞLIK VE BESLENME =====
export const u178: EnglishLecture = {
    unitId: 178,
    title: "Health & Nutrition (Healthy Living)",
    introduction: "Sağlıklı yaşam tarzı, beslenme alışkanlıkları ve tıbbi tavsiyelerde bulunurken kullanılan kalıpları öğreneceğiz.",
    sections: [
        {
            title: "Beslenme ve Diyet",
            content: "Karbonhidratlar, vitaminler, kalori dengesi ve yaşam alışkanlıkları üzerine konuşma.",
            examples: [
                { english: "A balanced diet is essential for physical health.", turkish: "Dengeli bir diyet fiziksel sağlık için şarttır." },
                { english: "We should reduce sugar consumption.", turkish: "Şeker tüketimini azaltmalıyız." }
            ]
        },
        {
            title: "Tıbbi Öneriler ve Şikayetler",
            content: "Doktora giderken veya birine sağlık önerisinde bulunurken kullanılan modallar:",
            examples: [
                { english: "You should consult a doctor immediately.", turkish: "Derhal bir doktora danışmalısın." },
                { english: "He suffers from high blood pressure.", turkish: "Yüksek tansiyondan muzdarip." }
            ]
        }
    ],
    tips: ["'Ingredients' yiyeceklerin içindekiler/malzemeler anlamına gelir."],
    summary: "Sağlık, beslenme ve yaşam kalitesi üzerine konuşma becerisi kazandınız."
};

// ===== UNIT 179: PSİKOLOJİ TEMELLERİ =====
export const u179: EnglishLecture = {
    unitId: 179,
    title: "Psychology Basics (Behavior & Mind)",
    introduction: "İnsan davranışlarını, zihinsel süreçleri ve karakter analizlerini İngilizce olarak nasıl ifade edeceğimizi öğreneceğiz.",
    sections: [
        {
            title: "Zihinsel Durumlar ve Duygular",
            content: "Stres yönetimi, bilinçaltı ve karakter özellikleri üzerine akademik kelime bilgisi.",
            examples: [
                { english: "Cognitive therapy helps manage anxiety.", turkish: "Bilişsel terapi kaygıyı yönetmeye yardımcı olur." },
                { english: "Her behavior influenced the whole group.", turkish: "Onun davranışı tüm grubu etkiledi." }
            ]
        },
        {
            title: "Kişilik Analizi",
            content: "İnsanların karakterini detaylıca analiz ederken kullanılan sıfatlar:",
            examples: [
                { english: "He is highly motivated and resilient.", turkish: "O son derece motivasyonu yüksek ve dayanıklıdır." }
            ]
        }
    ],
    tips: ["'Subconscious' bilinçaltı anlamına gelen önemli bir psikoloji terimidir."],
    summary: "İnsan psikolojisi ve zihinsel süreçler üzerine konuşmayı öğrendiniz."
};

// ===== UNIT 180: İŞ İNGİLİZCESİ 1 =====
export const u180: EnglishLecture = {
    unitId: 180,
    title: "Business English (Office Basics)",
    introduction: "Profesyonel iş hayatında, ofis içi yazışmalarda ve kurumsal iletişimde en sık kullanılan kalıpları öğreneceğiz.",
    sections: [
        {
            title: "Ofis Yazışmaları ve Talepler",
            content: "E-postalarda ve yazışmalarda kullanılan resmi ve kurumsal ifadeler.",
            examples: [
                { english: "I am writing to confirm our meeting on Friday.", turkish: "Cuma günkü toplantımızı onaylamak için yazıyorum." },
                { english: "Please find the attached document for review.", turkish: "Lütfen inceleme için ekteki belgeyi bulunuz." }
            ]
        },
        {
            title: "Toplantı Yönetimi",
            content: "Toplantılarda söz alırken veya gündemi belirlerken kullanılan yapılar:",
            examples: [
                { english: "Let's discuss the agenda points one by one.", turkish: "Gündem maddelerini tek tek tartışalım." },
                { english: "We need to make a decision by tomorrow.", turkish: "Yarına kadar bir karar vermek zorundayız." }
            ]
        }
    ],
    tips: ["Resmi iş yazışmalarında 'Dear Mr./Ms.' ile başlamak ve 'Best regards' ile bitirmek standarttır."],
    summary: "Kurumsal iş hayatındaki temel yazışma ve konuşma kalıplarını öğrendiniz."
};

// ===== UNIT 181: PAST PERFECT =====
export const u181: EnglishLecture = {
    unitId: 181,
    title: "Past Perfect Tense (Had Done)",
    introduction: "Geçmişte gerçekleşmiş iki olaydan daha önce olanını (geçmişin geçmişini) ifade etmek için 'Past Perfect' kullanırız.",
    sections: [
        {
            title: "Yapı: Had + Fiilin 3. Hali (V3)",
            content: "Geçmişte belirli bir noktadan veya olaydan daha önce tamamlanmış durumları anlatır.",
            examples: [
                { english: "When I arrived at the station, the train had already left.", turkish: "Ben istasyona vardığımda, tren çoktan ayrılmıştı. (Önce tren ayrıldı, sonra ben vardım)" },
                { english: "She had studied English before she moved to London.", turkish: "Londra'ya taşınmadan önce İngilizce çalışmıştı." }
            ]
        },
        {
            title: "Past Perfect vs Past Simple",
            content: "Eğer geçmişteki iki olayın sırası belliyse ve vurgulamak istiyorsak Past Perfect kullanırız. Normal kronolojik anlatımda Past Simple yeterlidir.",
            examples: [
                { english: "I ate dinner, then I watched TV. (Sırayla - Past Simple)", turkish: "Akşam yemeği yedim, sonra TV izledim." },
                { english: "I watched TV after I had eaten dinner. (Vurgulu - Past Perfect)", turkish: "Akşam yemeği yedikten sonra TV izledim." }
            ]
        }
    ],
    tips: ["'Already', 'before' ve 'after' kelimeleri bu zamanla sıkça kullanılır."],
    summary: "Geçmişteki olayların gerçekleşme sırasını Past Perfect kullanarak netleştirmeyi öğrendiniz."
};

// ===== UNIT 182: FUTURE PERFECT =====
export const u182: EnglishLecture = {
    unitId: 182,
    title: "Future Perfect Tense (Will Have Done)",
    introduction: "Gelecekte belirli bir noktada tamamlanmış olacak, 'yapmış olacağım' dediğimiz eylemleri ifade etmeyi öğreneceğiz.",
    sections: [
        {
            title: "Yapı: Will Have + Fiilin 3. Hali (V3)",
            content: "Gelecekteki bir zamana gönderme yapar ve o zamandan önce eylemin bitmiş olacağını vurgular.",
            examples: [
                { english: "By next year, I will have finished my university degree.", turkish: "Gelecek yıla kadar üniversite diplomamı almış (bitirmiş) olacağım." },
                { english: "They will have completed the project by Friday.", turkish: "Projeyi Cuma gününe kadar tamamlamış olacaklar." }
            ]
        },
        {
            title: "Zaman Belirteci: By / By the time",
            content: "Future Perfect ile en sık kullanılan zaman belirteci 'by' (itibariyle, -e kadar) ifadesidir.",
            examples: [
                { english: "By 8 PM, we will have prepared dinner.", turkish: "Saat 20:00'ye kadar akşam yemeğini hazırlamış olacağız." }
            ]
        }
    ],
    tips: ["'By the time'lı yan cümlecikte gelecek zaman değil, geniş zaman (Present Simple) kullanılır: 'By the time you arrive...'"],
    summary: "Gelecekteki hedeflerinizi ve tamamlanacak işleri Future Perfect ile ifade etmeyi öğrendiniz."
};

// ===== UNIT 183: RELATIVE CLAUSES =====
export const u183: EnglishLecture = {
    unitId: 183,
    title: "Relative Clauses (Who, Which, That)",
    introduction: "İki cümleyi birbirine bağlayarak bir insan, nesne veya yer hakkında ekstra bilgi vermek için sıfat cümleciklerini (Relative Clauses) kullanırız.",
    sections: [
        {
            title: "İnsanlar İçin: Who / That",
            content: "Bir insandan bahsederken ve onu tanımlarken 'who' veya 'that' kullanırız.",
            examples: [
                { english: "The doctor who treated me was very kind.", turkish: "Beni tedavi eden doktor çok nazikti." },
                { english: "He is the teacher that helped my son.", turkish: "Oğluma yardım eden öğretmen odur." }
            ]
        },
        {
            title: "Nesneler ve Hayvanlar İçin: Which / That",
            content: "Cansız nesneler, fikirler veya hayvanlar hakkında bilgi verirken 'which' veya 'that' kullanırız.",
            examples: [
                { english: "The car which she bought is very fast.", turkish: "Satın aldığı araba çok hızlı." },
                { english: "This is the book that I was looking for.", turkish: "Aradığım kitap buydu." }
            ]
        }
    ],
    tips: ["Sahiplik bildirmek için 'whose' (onun ...sı), yer bildirmek için 'where' relative pronounları da kullanılır."],
    summary: "Sıfat cümleciklerini kullanarak daha akıcı ve birleşik cümleler kurmayı öğrendiniz."
};

// ===== UNIT 184: CAUSATIVES =====
export const u184: EnglishLecture = {
    unitId: 184,
    title: "Causatives (Ettirgen Yapı)",
    introduction: "Bir işi kendimiz yapmayıp başkasına yaptırdığımızda ettirgen (Causative) yapıları kullanırız. Günlük hayatta çok yaygındır.",
    sections: [
        {
            title: "Have Something Done (Pasif Ettirgen)",
            content: "Bir hizmet aldığımızda veya bir işi profesyonel birine yaptırdığımızda kullanılır. Formül: Have + Nesne + V3.",
            examples: [
                { english: "I had my car repaired yesterday.", turkish: "Dün arabamı tamir ettirdim. (Tamirciye yaptırdım)" },
                { english: "She is going to have her hair cut tomorrow.", turkish: "Yarın saçını kestirecek." }
            ]
        },
        {
            title: "Get Someone to Do Something (Aktif Ettirgen)",
            content: "Birini bir şey yapmaya ikna ettiğimizde veya yaptırdığımızda kullanılır. Formül: Get + Kişi + TO + Fiil.",
            examples: [
                { english: "I got the technician to fix the computer.", turkish: "Teknisyene bilgisayarı tamir ettirdim." }
            ]
        }
    ],
    tips: ["Eğer birini bir şeye zorluyorsak 'make' (make someone do), izin veriyorsak 'let' (let someone do) kullanılır."],
    summary: "Başkalarına yaptırdığınız işleri İngilizce ettirgen yapılarla ifade etmeyi öğrendiniz."
};

// ===== UNIT 185: WISH CLAUSES =====
export const u185: EnglishLecture = {
    unitId: 185,
    title: "Wish Clauses (Keşkeler)",
    introduction: "Şu anki durumumuzdan duyduğumuz memnuniyetsizlikleri veya geçmişteki pişmanlıklarımızı ifade etmek için 'Wish' kalıbını kullanırız.",
    sections: [
        {
            title: "Şu Anki Durum İçin Keşkeler: Wish + Past Simple",
            content: "Şu anki gerçeğin zıttını dilediğimizde kullanılır. Anlam şimdiki zamandır ama fiil geçmiş zamana çekimlenir.",
            examples: [
                { english: "I wish I spoke English perfectly.", turkish: "Keşke İngilizceyi mükemmel konuşabilseydim. (Ama şu an konuşamıyorum)" },
                { english: "I wish I had more free time.", turkish: "Keşke daha fazla boş vaktim olsaydı." }
            ]
        },
        {
            title: "Geçmişteki Pişmanlıklar: Wish + Past Perfect",
            content: "Geçmişte olmuş bitmiş olaylara dair keşkelerimiz için fiil 'had + V3' (Past Perfect) şeklinde çekimlenir.",
            examples: [
                { english: "I wish I had studied harder for the exam.", turkish: "Keşke sınava daha sıkı çalışsaydım. (Ama çalışmadım ve bitti)" }
            ]
        }
    ],
    tips: ["'I wish' yerine 'If only' kalıbı da aynı anlamda fakat daha güçlü bir vurguyla kullanılabilir."],
    summary: "Şimdiki ve geçmiş zamana dair dileklerinizi ve pişmanlıklarınızı ifade etmeyi öğrendiniz."
};

// ===== UNIT 186: COLLOCATIONS =====
export const u186: EnglishLecture = {
    unitId: 186,
    title: "Collocations (Eşdizimler)",
    introduction: "İngilizcede bazı kelimeler her zaman birlikte kullanılır. Bunlara 'Collocations' (kelime birliktelikleri) denir. Doğal konuşmanın sırrıdır.",
    sections: [
        {
            title: "Do vs Make Eşdizimleri",
            content: "Do genellikle eylemler, işler ve ödevler için; Make ise üretmek, inşa etmek veya hazırlamak için kullanılır.",
            examples: [
                { english: "Do homework / Do business / Do a favor", turkish: "Ödev yapmak / İş yapmak / İyilik yapmak" },
                { english: "Make a decision / Make a mistake / Make progress", turkish: "Karar vermek / Hata yapmak / İlerleme kaydetmek" }
            ]
        },
        {
            title: "Zaman ve Para Eşdizimleri",
            content: "Save time (zaman kazanmak), spend money (para harcamak), waste time (zamanı boşa harcamak) gibi yaygın yapılar:",
            examples: [
                { english: "Using a computer saves a lot of time.", turkish: "Bilgisayar kullanmak çok zaman kazandırır." }
            ]
        }
    ],
    tips: ["Kelimeleri tek tek ezberlemek yerine, her zaman yanındaki eşlikçi kelimeyle birlikte bütünsel olarak ezberleyin."],
    summary: "İngilizcede kelimelerin doğal birlikteliklerini (eşdizimleri) kullanmayı öğrendiniz."
};

// ===== UNIT 187: CONNECTORS =====
export const u187: EnglishLecture = {
    unitId: 187,
    title: "Connectors (Gelişmiş Bağlaçlar)",
    introduction: "Yazı yazarken veya konuşurken fikirlerimizi birbirine bağlayan, neden-sonuç ve ek bilgi sunan bağlaçları öğreneceğiz.",
    sections: [
        {
            title: "Neden-Sonuç Bağlaçları",
            content: "Because of, due to (den dolayı) kendilerinden sonra isim alırlar. Therefore, as a result (bu nedenle, sonuç olarak) ise yeni bir cümle başlatır.",
            examples: [
                { english: "The flight was delayed due to bad weather.", turkish: "Kötü hava koşullarından dolayı uçuş ertelendi. (İsim aldı)" },
                { english: "He worked very hard. Therefore, he succeeded.", turkish: "Çok çalıştı. Bu nedenle başarılı oldu. (Yeni cümle)" }
            ]
        },
        {
            title: "Ek Bilgi Bağlaçları",
            content: "Moreover, furthermore (dahası, ek olarak) yazılı dilde resmi eklemeler yapmak için kullanılır.",
            examples: [
                { english: "The course is free. Moreover, it offers a certificate.", turkish: "Kurs ücretsizdir. Dahası, sertifika da sunuyor." }
            ]
        }
    ],
    tips: ["Due to ve Because of'tan sonra tam cümle (özne+yüklem) gelmez; isim veya isim tamlaması gelir."],
    summary: "Cümlelerinizi birbirine bağlayarak daha profesyonel ifadeler kurmayı öğrendiniz."
};

// ===== UNIT 188: FORMAL VS INFORMAL =====
export const u188: EnglishLecture = {
    unitId: 188,
    title: "Formal vs Informal (Resmi ve Samimi Dil)",
    introduction: "İngilizcede konuştuğunuz kişiye veya ortama göre dilin tonunu ayarlamak çok önemlidir. Bu ünitede bu ayrımları inceleyeceğiz.",
    sections: [
        {
            title: "Yazışma ve Hitap Farkları",
            content: "Resmi iş e-postalarında samimi kısaltmalar ve argo ifadeler yerine daha mesafeli ve nazik kalıplar kullanılır.",
            examples: [
                { english: "Formal: Dear Sir/Madam, I am writing to inquire... / Informal: Hi John, just wanted to ask...", turkish: "Resmi: Sayın Yetkili, bilgi almak için yazıyorum... / Samimi: Selam John, bir şey soracaktım..." },
                { english: "Formal: Best regards / Informal: Take care", turkish: "Resmi: Saygılarımla / Samimi: Kendine iyi bak" }
            ]
        },
        {
            title: "Kelime Tercihleri",
            content: "Aynı anlama gelen kelimelerin resmi ve samimi versiyonları vardır. (Örn: ask -> inquire, buy -> purchase, check -> verify).",
            examples: [
                { english: "Formal: We purchased new equipment. / Informal: We bought some new gear.", turkish: "Resmi: Yeni ekipman satın aldık. / Samimi: Yeni aletler aldık." }
            ]
        }
    ],
    tips: ["Resmi dilde 'I want' yerine 'I would appreciate' veya 'I would like' kalıpları tercih edilir."],
    summary: "Ortama göre dilin tonunu ayarlamayı ve resmi/samimi kelimeleri doğru seçmeyi öğrendiniz."
};

// ===== UNIT 189: DEBATE SKILLS =====
export const u189: EnglishLecture = {
    unitId: 189,
    title: "Debate Skills (Argüman Geliştirme)",
    introduction: "Bir tartışmada kendi tezlerimizi sunarken, karşı tarafın fikrine katılırken veya kibarca karşı çıkarken kullanılan kalıpları öğreneceğiz.",
    sections: [
        {
            title: "Fikirlere Katılma ve Karşı Çıkma",
            content: "Kibarca karşı çıkmak ve kendi argümanımızı temellendirmek için kullanılan yapılar:",
            examples: [
                { english: "I agree with you to some extent, but...", turkish: "Sana bir dereceye kadar katılıyorum ama..." },
                { english: "I see your point, however, I believe...", turkish: "Ne demek istediğini anlıyorum ancak bence..." }
            ]
        },
        {
            title: "Argüman Sunma",
            content: "Kanıt sunarken ve fikrinizi desteklerken kullanabileceğiniz yapılar:",
            examples: [
                { english: "According to recent data, this strategy works.", turkish: "Son verilere göre, bu strateji işe yarıyor." },
                { english: "It is important to consider the benefits.", turkish: "Faydaları göz önünde bulundurmak önemlidir." }
            ]
        }
    ],
    tips: ["Asla 'You are wrong' demeyin; bunun yerine 'I respectfully disagree' kalıbını tercih edin."],
    summary: "Fikirlerinizi akademik ve profesyonel çerçevede savunma becerisi kazandınız."
};

// ===== UNIT 190: B1 TEKRAR =====
export const u190: EnglishLecture = {
    unitId: 190,
    title: "B1 Level Review (Genel Tekrar)",
    introduction: "Tebrikler! B1 seviyesinin sonuna geldiniz. Bu ünitede B1 seviyesinde öğrendiğimiz tüm önemli gramer ve kelime konularını özetleyeceğiz.",
    sections: [
        {
            title: "Ana Konuların Özeti",
            content: "B1 seviyesinde gelecek zaman ayrımlarını, Tip 1 & 2 koşul cümlelerini, edilgen yapıyı (Passive) ve ettirgenleri (Causatives) öğrendiniz.",
            examples: [
                { english: "If I studied, I would pass. (Geçmişte/Şu an hayali)", turkish: "Çalışsaydım, geçerdim." },
                { english: "I will have finished my B1 course today.", turkish: "Bugün B1 kursumu bitirmiş olacağım. (Future Perfect)" }
            ]
        }
    ],
    tips: ["Öğrendiğiniz tüm bağlaçları, deyimsel fiilleri ve eşdizimleri bol pratikle pekiştirin."],
    summary: "B1 seviyesini başarıyla tamamladınız! Artık B2 (Üst-Orta) seviyesine geçmeye tamamen hazırsınız."
};

/**
 * Üniteye göre B1 ders içeriğini getiren yardımcı fonksiyon
 */
export function getEnglishB1LectureForUnit(unitId: number): EnglishLecture {
    const b1Lectures: { [key: number]: EnglishLecture } = {
        161: u161, 162: u162, 163: u163, 164: u164, 165: u165,
        166: u166, 167: u167, 168: u168, 169: u169, 170: u170,
        171: u171, 172: u172, 173: u173, 174: u174, 175: u175,
        176: u176, 177: u177, 178: u178, 179: u179, 180: u180,
        181: u181, 182: u182, 183: u183, 184: u184, 185: u185,
        186: u186, 187: u187, 188: u188, 189: u189, 190: u190,
    };
    return b1Lectures[unitId] || u161;
}
