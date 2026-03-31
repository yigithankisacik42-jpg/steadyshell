/**
 * SteadyShell Grammar Database - English A2
 * 30 Units (ID: 131-160) with grammar rules and exercises
 * Curriculum ile uyumlu - Structure matches grammar-en-a1.ts
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

// ===== UNIT 131: Past Simple - Regular Verbs (COMPREHENSIVE) =====
const unit131Grammar: EnglishGrammarUnit = {
    unitId: 131,
    title: "Past Simple - Regular Verbs (Düzenli Fiiller - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Geçmiş Zaman Nedir?",
            explanation: "Türkçedeki '-di, -dı, -tı, -ti' ekleri gibi düşünün. Eylemin artık bittiğini ve geçmişte kaldığını anlatır. 'Dün çalıştım', 'Geçen hafta film izledik' gibi cümleler kurmak için bu yapıyı kullanırız. Düzenli fiillerin en güzel yanı, her özne için (I, you, he, she, it, we, they) aynı formun kullanılmasıdır. Herkes için sonuna -ed gelir!",
            examples: [
                { english: "I worked.", turkish: "Çalıştım." },
                { english: "They worked.", turkish: "Çalıştılar." },
                { english: "The cat played.", turkish: "Kedi oynadı." }
            ]
        },
        {
            title: "2. Altın Kural: Fiilin Sonuna -ed Ekle",
            explanation: "Düzenli bir fiili geçmişe taşımak için fiilin yalın halinin sonuna -ed eki getirilir. \n• Normal fiiller: watch → watched, play → played\n• 'E' ile bitenler: Sadece 'd' gelir: like → liked, live → lived\n• 'Sessiz + Y' ile bitenler: Y düşer, -ies gelir: study → studied, cry → cried\n• Kısa fiiller (CVC): Son harf çift yazılır: stop → stopped, plan → planned.",
            examples: [
                { english: "I watched a movie last night.", turkish: "Dün gece bir film izledim." },
                { english: "She lived in Paris in 2010.", turkish: "2010'da Paris'te yaşadı." },
                { english: "They studied hard for the test.", turkish: "Sınav için çok çalıştılar." }
            ]
        },
        {
            title: "3. Olumsuz Cümleler: Didn't + Yalın Fiil",
            explanation: "Geçmişte 'yapmadım' demek için can kurtaranımız 'didn't' (did not) kelimesidir. \nKRİTİK UYARI: Didn't kullandığınızda fiil 'normal' haline geri döner, -ed takısını atar! Çünkü 'didn't' zaten geçmiş zaman anlamını üstüne almıştır.",
            examples: [
                { english: "I didn't work yesterday. (NOT: didn't worked)", turkish: "Dün çalışmadım." },
                { english: "She didn't visit us.", turkish: "Bizi ziyaret etmedi." },
                { english: "We didn't play tennis.", turkish: "Tenis oynamadık." }
            ]
        },
        {
            title: "4. Soru Cümleleri: Did + Özne + Yalın Fiil?",
            explanation: "Soru sormak için 'Did' kelimesini cümlenin başına atıyoruz. Tıpkı olumsuz cümlelerde olduğu gibi, fiil üzerinde hiçbir ek (-ed) taşımadan yalın halde gelir.",
            examples: [
                { english: "Did you watch the match?", turkish: "Maçı izledin mi?" },
                { english: "Did it rain yesterday?", turkish: "Dün yağmur yağdı mı?" },
                { english: "Yes, I did. / No, I didn't.", turkish: "Evet, izledim. / Hayır, izlemedim." }
            ]
        }
    ],
    exercises: [
        { question: "Yesterday, I ___ (watch) a very long movie.", options: ["watch", "watched", "watching", "watches"], correct: 1, explanation: "Düzenli fiil geçmiş zaman: watch + ed." },
        { question: "She ___ (not / study) for the exam last night.", options: ["didn't study", "didn't studied", "not studied", "don't study"], correct: 0, explanation: "Olumsuzda didn't + yalın fiil kullanılır." },
        { question: "___ you ___ (play) football on Sunday?", options: ["Do / play", "Did / played", "Did / play", "Does / play"], correct: 2, explanation: "Soruda Did başa gelir, fiil yalın kalır." },
        { question: "We ___ (stay) at a very nice hotel.", options: ["stay", "stayed", "stays", "staying"], correct: 1, explanation: "Düzenli fiil: stay + ed." },
        { question: "He ___ (try) to open the window.", options: ["tryed", "tried", "tries", "trying"], correct: 1, explanation: "Sessiz + y ile bitenlerde y düşer, -ied gelir." },
        { question: "They ___ (walk) to the park together.", options: ["walked", "walk", "walking", "walks"], correct: 0, explanation: "Geçmiş zaman eylemi: walked." },
        { question: "I ___ (not / like) the food at that restaurant.", options: ["didn't like", "didn't liked", "not liked", "don't like"], correct: 0, explanation: "Olumsuzda didn't kullanıldığında fiil ek almaz." },
        { question: "Did she ___ (finish) her homework?", options: ["finished", "finishes", "finish", "finishing"], correct: 2, explanation: "Soru cümlesinde fiil yalın halde (finish) kullanılır." },
        { question: "It ___ (rain) a lot last week.", options: ["rain", "rained", "rains", "raining"], correct: 1, explanation: "Hava durumu geçmiş zaman: rained." },
        { question: "We ___ (stop) at the gas station.", options: ["stoped", "stopped", "stop", "stops"], correct: 1, explanation: "Kısa fiil olduğu için son harf çift yazılır: stopped." }
    ]
};

// ===== UNIT 132: Past Simple - Irregular Verbs (COMPREHENSIVE) =====
const unit132Grammar: EnglishGrammarUnit = {
    unitId: 132,
    title: "Past Simple - Irregular Verbs (Düzensiz Fiiller - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Neden 'Düzensiz'?",
            explanation: "İngilizcede bazı fiiller 'asidir'. Sonuna -ed almayı reddederler ve geçmiş zamana geçerken tamamen şekil değiştirirler. Bunlara 'Irregular' (Düzensiz) fiiller diyoruz. Neden böyleler? Çünkü dilin çok eski zamanlarından beri bu şekilde kullanılagelmişler. Maalesef bir formülleri yok, tek çare onları bol bol görüp ezberlemek!",
            examples: [
                { english: "Go → Went", turkish: "Gitmek → Gitti (Goed değil!)" },
                { english: "Have → Had", turkish: "Sahip olmak → Vardı / Sahipti" },
                { english: "See → Saw", turkish: "Görmek → Gördü" }
            ]
        },
        {
            title: "2. En Çok Kullanılan Düzensiz Fiiller",
            explanation: "Günlük hayatta en çok karşınıza çıkacak 'Süper 10' listesi:\n1. Go → Went (Gitti)\n2. See → Saw (Gördü)\n3. Eat → Ate (Yedi)\n4. Drink → Drank (İçti)\n5. Come → Came (Geldi)\n6. Buy → Bought (Satın aldı)\n7. Make → Made (Yaptı)\n8. Take → Took (Aldı/Götürdü)\n9. Think → Thought (Düşündü)\n10. Know → Knew (Bildi)",
            examples: [
                { english: "I went to the cinema yesterday.", turkish: "Dün sinemaya gittim." },
                { english: "She bought a new dress.", turkish: "Yeni bir elbise satın aldı." },
                { english: "We ate out last night.", turkish: "Dün gece dışarıda yemek yedik." }
            ]
        },
        {
            title: "3. Olumsuz ve Soru Formu: Asi Fiiller Bile 'Uysallaşır'!",
            explanation: "Düzensiz fiillerle ilgili EN ÖNEMLİ kural: Bu 'değişik' halleri sadece olumlu (+) cümlelerde kullanılır. Eğer cümlede 'didn't' veya 'Did...?' varsa, bu asi fiiller pes eder ve 'normal' (yalın) hallerine geri dönerler.",
            examples: [
                { english: "I went. (+) vs I didn't go. (-)", turkish: "Gittim. vs Gitmedim. (Went tekrar Go oldu!)" },
                { english: "She saw. (+) vs Did she see? (?)", turkish: "Gördü. vs Gördü mü? (Saw tekrar See oldu!)" },
                { english: "We ate breakfast. (+) vs We didn't eat breakfast. (-)", turkish: "Kahvaltı yaptık. vs Kahvaltı yapmadık." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Sık yapılan hata: 'Didn't' kelimesinden hemen sonra hala fiilin 2. halini kullanmaya çalışmak. Unutmayın, 'didn't' ve 'did' varken fiil her zaman 1. (yalın) halindedir. \n❌ I didn't went. (YANLIŞ)\n✅ I didn't go. (DOĞRU)",
            examples: [
                { english: "I didn't saw him. (❌) → I didn't see him. (✅)", turkish: "Onu görmedim." },
                { english: "Did you bought? (❌) → Did you buy? (✅)", turkish: "Satın aldın mı?" },
                { english: "He didn't knew. (❌) → He didn't know. (✅)", turkish: "Bilmiyordu." }
            ]
        }
    ],
    exercises: [
        { question: "I ___ (go) to the supermarket an hour ago.", options: ["go", "goed", "went", "going"], correct: 2, explanation: "Go fiilinin geçmiş zaman (2. hal) formu 'went'dir." },
        { question: "She ___ (write) a very long letter to her mother.", options: ["write", "wrote", "writed", "writing"], correct: 1, explanation: "Write fiilinin 2. hali 'wrote'dur." },
        { question: "We ___ (not / see) you at the party.", options: ["didn't saw", "didn't see", "not saw", "not see"], correct: 1, explanation: "Olumsuz cümlede didn't + yalın fiil (see) kullanılır." },
        { question: "___ he ___ (drink) all the orange juice?", options: ["Did / drank", "Did / drinks", "Did / drink", "Do / drink"], correct: 2, explanation: "Soru cümlesinde Did başa gelir, fiil yalın (drink) kalır." },
        { question: "They ___ (eat) all the cake!", options: ["eated", "ate", "eat", "eating"], correct: 1, explanation: "Eat fiilinin 2. hali 'ate'dir." },
        { question: "I ___ (think) you were at home.", options: ["think", "thought", "thinked", "thinking"], correct: 1, explanation: "Think fiilinin 2. hali 'thought'dur." },
        { question: "She ___ (give) me a beautiful present.", options: ["give", "gived", "gave", "giving"], correct: 2, explanation: "Give fiilinin 2. hali 'gave'dir." },
        { question: "We ___ (not / have) breakfast this morning.", options: ["haven't", "didn't had", "didn't have", "not had"], correct: 2, explanation: "Olumsuzda didn't + have kullanılır." },
        { question: "Did you ___ (make) this cake?", options: ["made", "make", "makes", "making"], correct: 1, explanation: "Soru cümlesinde fiil yalın (make) kalır." },
        { question: "He ___ (buy) a new smartphone yesterday.", options: ["buyed", "bought", "buys", "buying"], correct: 1, explanation: "Buy fiilinin 2. hali 'bought'dur." }
    ]
};

// ===== UNIT 133: Restaurant English - Ordering Food (COMPREHENSIVE) =====
const unit133Grammar: EnglishGrammarUnit = {
    unitId: 133,
    title: "Restaurant English - Ordering Food (Restoranda Sipariş - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Kibarlık Her Şeydir!",
            explanation: "İngilizcede restoran gibi sosyal ortamlarda doğrudan 'I want pasta' (Makarna istiyorum) demek biraz kaba kaçabilir. Bunun yerine 'İsterdim' veya 'Alabilir miyim?' gibi daha yumuşak ve kibar kalıplar tercih edilir. En yaygın olanı 'I'd like...' (I would like) kalıbıdır.",
            examples: [
                { english: "I'd like the grilled chicken, please.", turkish: "Izgara tavuk isterdim, lütfen." },
                { english: "Can I have a glass of water?", turkish: "Bir bardak su alabilir miyim?" },
                { english: "I'll have the steak.", turkish: "Ben biftek alayım. (Karar anında 'will' kullanılır)" }
            ]
        },
        {
            title: "2. Altın Kural: Sipariş Verme Kalıpları",
            explanation: "Sipariş verirken şu 3 ana yapıyı kullanabilirsiniz:\n• I'd like + [isim]: I'd like an omelette.\n• Can/Could I have + [isim]: Could I have the menu, please?\n• I'll have + [isim]: I'll have the fish platter.\nGarson size 'Are you ready to order?' (Siparişe hazır mısınız?) diye sorduğunda bu kalıplardan biriyle başlayabilirsiniz.",
            examples: [
                { english: "Could I have the bill, please?", turkish: "Hesabı alabilir miyim, lütfen? (Çok kibar)" },
                { english: "I'd like a table for two.", turkish: "İki kişilik bir masa rica ediyorum." },
                { english: "We're ready to order.", turkish: "Sipariş vermeye hazırız." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Masada İletişim",
            explanation: "Masada ihtiyacınız olan ek şeyler için şu kısa ama etkili ifadeleri bilmek hayat kurtarır:\n- Is service included? (Servis ücreti dahil mi?)\n- Keep the change. (Üstü kalsın - bahşiş bırakırken)\n- Anything else? (Başka bir şey var mı? - garsonun sorusu)\n- I'm allergic to... (... karşı alerjim var)",
            examples: [
                { english: "Is this dish spicy?", turkish: "Bu yemek acı mı?" },
                { english: "Can we have some more bread, please?", turkish: "Biraz daha ekmek alabilir miyiz lütfen?" },
                { english: "Actually, I'm allergic to nuts.", turkish: "Aslında kuruyemişe karşı alerjim var." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "En sık yapılan hata, garsona hitap ederken 'Waiter!' diye bağırmaktır. Bu Batı kültüründe kaba kabul edilir. Bunun yerine garsonla göz teması kurup elinizi hafifçe kaldırarak 'Excuse me' demeniz yeterlidir.",
            examples: [
                { english: "Waiter! (❌) → Excuse me! (✅)", turkish: "Affedersiniz! (Garsonu çağırmanın doğru yolu)" },
                { english: "I want a coffee. (❌) → I'd like a coffee, please. (✅)", turkish: "Daha kibar bir rica." },
                { english: "Give me the menu. (❌) → Could I see the menu? (✅)", turkish: "Menüyü görebilir miyim?" }
            ]
        }
    ],
    exercises: [
        { question: "Are you ready to order? - Yes, I ___ the pasta.", options: ["want", "'ll have", "had", "having"], correct: 1, explanation: "Anlık karar ve sipariş için 'I'll have' (I will have) kullanılır." },
        { question: "I'd like ___ a table for four, please.", options: ["at", "to", "book", "for"], correct: 2, explanation: "I'd like + to + fiil: I'd like to book..." },
        { question: "Could I ___ the menu, please?", options: ["saw", "see", "seeing", "sees"], correct: 1, explanation: "Could/Can modelarından sonra fiil yalın gelir." },
        { question: "Is service ___ in the bill?", options: ["including", "include", "included", "includes"], correct: 2, explanation: "Service included = Servis dahil." },
        { question: "I'm sorry, I'm allergic ___ seafood.", options: ["at", "with", "to", "for"], correct: 2, explanation: "Allergic to = ... karşı alerjisi olmak." },
        { question: "Excuse me, can we have the ___, please?", options: ["ticket", "paper", "bill", "money"], correct: 2, explanation: "Restoranda hesap = bill." },
        { question: "What do you ___?", options: ["advise", "recommend", "tell", "say"], correct: 1, explanation: "Recommend = Tavsiye etmek/Önermek." },
        { question: "I'll have a glass ___ orange juice.", options: ["of", "at", "in", "with"], correct: 0, explanation: "A glass of... = Bir bardak ..." },
        { question: "___ the change.", options: ["Hold", "Stay", "Keep", "Take"], correct: 2, explanation: "Keep the change = Üstü kalsın." },
        { question: "Could we have a ___ for two, please?", options: ["chair", "table", "room", "bed"], correct: 1, explanation: "A table for two = İki kişilik masa." }
    ]
};

// ===== UNIT 134: Shopping English - Clothes and Prices (COMPREHENSIVE) =====
const unit134Grammar: EnglishGrammarUnit = {
    unitId: 134,
    title: "Shopping English (Alışveriş İngilizcesi - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Fiyat ve Yardım İsteme",
            explanation: "Mağazaya girdiğinizde satış görevlisi genellikle 'Can I help you?' veya 'Are you looking for something special?' diyecektir. Eğer sadece bakıyorsanız 'I'm just looking, thanks' diyebilirsiniz. Fiyat sormak için 'How much is it?' (Ne kadar?) en temel sorudur.",
            examples: [
                { english: "I'm just looking, thanks.", turkish: "Sadece bakıyorum, teşekkürler." },
                { english: "How much is this T-shirt?", turkish: "Bu tişört ne kadar?" },
                { english: "How much are these jeans?", turkish: "Bu kot pantolon ne kadar? (Çoğul)" }
            ]
        },
        {
            title: "2. Altın Kural: Beden ve Renk Kalıpları",
            explanation: "Bir şeyin farklı bedenini veya rengini sormak için şu yapıyı kullanırız:\n• Do you have this in [renk/beden]?\nÖrneğin: Do you have this in blue? / Do you have this in a small?",
            examples: [
                { english: "Do you have this in a medium?", turkish: "Bunun medium bedeni var mı?" },
                { english: "Does it come in other colors?", turkish: "Başka renkleri var mı?" },
                { english: "I'd like to try this on.", turkish: "Bunu denemek istiyorum." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Karar Verme",
            explanation: "Alışverişi tamamlarken veya vazgeçerken şu ifadeleri kullanırız:\n- I'll take it. (Bunu alıyorum.)\n- I'll leave it. (Almayacağım/Bırakıyorum.)\n- It's a bit expensive. (Biraz pahalı.)\n- Where is the fitting room? (Deneme kabini nerede?)",
            examples: [
                { english: "It fits perfectly.", turkish: "Tam oldu / Üzerime tam oturdu." },
                { english: "It's too small for me.", turkish: "Bu bana çok küçük." },
                { english: "Do you accept credit cards?", turkish: "Kredi kartı kabul ediyor musunuz?" }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'pantolon' veya 'ayakkabı' diyerek tekil gibi düşünürüz. Ancak İngilizcede çift olan şeyler (pants, shoes, glasses, jeans) her zaman ÇOĞUL kabul edilir. \n❌ How much is these shoes? (YANLIŞ)\n✅ How much ARE these shoes? (DOĞRU)",
            examples: [
                { english: "How much are these trousers? (✅)", turkish: "Bu pantolon ne kadar?" },
                { english: "They are too big. (✅)", turkish: "Onlar (pantolon) çok büyük." },
                { english: "I'll take them. (✅)", turkish: "Onları (ayakkabıları) alacağım." }
            ]
        }
    ],
    exercises: [
        { question: "How ___ are these shoes?", options: ["much", "many", "price", "is"], correct: 0, explanation: "Fiyat sorarken her zaman 'How much' kullanılır." },
        { question: "Do you have this ___ a larger size?", options: ["at", "on", "in", "with"], correct: 2, explanation: "Beden ve renklerde 'in' edatı kullanılır: in red, in small." },
        { question: "Where is the ___ room? I want to try this.", options: ["trying", "fitting", "clothing", "making"], correct: 1, explanation: "Deneme kabini = fitting room." },
        { question: "This jacket is ___ small for me. I need a large.", options: ["too", "very", "enough", "bit"], correct: 0, explanation: "Aşırılık ve olumsuzluk bildiren 'çok' = too." },
        { question: "I'll ___ it. It looks great on me!", options: ["get", "take", "bring", "give"], correct: 1, explanation: "Satın alma kararı: I'll take it." },
        { question: "Can I pay ___ credit card?", options: ["with", "by", "on", "at"], correct: 1, explanation: "Pay by credit card = Kredi kartı ile ödemek." },
        { question: "It's on ___! 50% off.", options: ["price", "cheap", "sale", "sell"], correct: 2, explanation: "On sale = İndirimde." },
        { question: "Does this dress ___ in black?", options: ["go", "has", "come", "be"], correct: 2, explanation: "Bir ürünün renginin olup olmadığını sormak: Does it come in [color]?" },
        { question: "These jeans ___ too tight.", options: ["is", "are", "am", "be"], correct: 1, explanation: "Jeans her zaman çoğul kabul edilir ve 'are' alır." },
        { question: "I'm just ___, thank you.", options: ["watching", "looking", "seeing", "buying"], correct: 1, explanation: "I'm just looking = Sadece bakıyorum." }
    ]
};

// ===== UNITS 135-160 =====
// ===== UNIT 135: Travel Plans - Be Going To (COMPREHENSIVE) =====
const unit135Grammar: EnglishGrammarUnit = {
    unitId: 135,
    title: "Travel Plans - Be Going To (Gelecek Planları - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Karar Verilmiş Gelecek",
            explanation: "İngilizcede geleceği anlatmanın birkaç yolu vardır. 'Be going to' kalıbı, üzerine düşünülmüş, planlanmış ve karar verilmiş eylemler için kullanılır. 'Biletimi aldım, otelimi seçtim, tatile GİDECEĞİM' diyorsanız bu kalıbı kullanmalısınız. Tahminlerde ise, elimizde güçlü bir kanıt varsa (bulutlu gökyüzü gibi) yine bu yapıyı kullanırız.",
            examples: [
                { english: "I'm going to visit London in June.", turkish: "Haziran'da Londra'yı ziyaret edeceğim. (Planım hazır)" },
                { english: "Look at those clouds! It's going to rain.", turkish: "Şu bulutlara bak! Yağmur yağacak. (Kanıt var)" },
                { english: "We're going to stay in a small hotel.", turkish: "Küçük bir otelde kalacağız." }
            ]
        },
        {
            title: "2. Altın Kural: Am/Is/Are + Going To + Fiil",
            explanation: "Formülümüz oldukça basittir:\n• I + am + going to + Fiil\n• He/She/It + is + going to + Fiil\n• We/You/They + are + going to + Fiil\nFiil her zaman en yalın halindedir, hiçbir ek almaz.",
            examples: [
                { english: "She is going to travel by train.", turkish: "Trenle seyahat edecek." },
                { english: "They are going to see the museum.", turkish: "Müzeyi görecekler." },
                { english: "I am going to take many photos.", turkish: "Pek çok fotoğraf çekeceğim." }
            ]
        },
        {
            title: "3. Olumsuz ve Soru Formu",
            explanation: "Olumsuz yapmak için 'am/is/are' kelimesinden sonra 'not' getiririz. Soru sormak için ise 'am/is/are' kelimesini cümlenin en başına atarız.",
            examples: [
                { english: "I'm not going to fly this time.", turkish: "Bu sefer uçmayacağım." },
                { english: "Is he going to join us?", turkish: "Bize katılacak mı?" },
                { english: "Are you going to pack your suitcase?", turkish: "Valizini hazırlayacak mısın?" }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar ('Will' vs 'Going To')",
            explanation: "Türkçede her ikisini de '-ecek, -acak' diye çeviriyoruz ama aralarında büyük bir fark var. 'Will' o anda verilen ani kararlar içindir (Telefon çalıyor, bakacağım). 'Going to' ise önceden planlanmış durumlar içindir (Uçak biletimi aldım, haftaya uçacağım). Ayrıca 'I am going to go' demek yerine kısaca 'I am going' de diyebilirsiniz.",
            examples: [
                { english: "I'll help you with that. (Will)", turkish: "Sana yardım ederim. (Şu an karar verdim)" },
                { english: "I'm going to study tonight. (Going to)", turkish: "Bu akşam çalışacağım. (Planladım)" },
                { english: "Where are you going to go? (✅) / Where are you going? (✅)", turkish: "Nereye gideceksin?" }
            ]
        }
    ],
    exercises: [
        { question: "I ___ going to book a flight tonight.", options: ["is", "am", "are", "be"], correct: 1, explanation: "I öznesi ile 'am' kullanılır." },
        { question: "They ___ going to visit their grandparents.", options: ["is", "am", "are", "be"], correct: 2, explanation: "They öznesi ile 'are' kullanılır." },
        { question: "___ she going to travel alone?", options: ["Is", "Am", "Are", "Do"], correct: 0, explanation: "She ile soru sorarken 'Is' başa gelir." },
        { question: "We ___ not going to stay in a hostel.", options: ["is", "am", "are", "be"], correct: 2, explanation: "We öznesi ile 'are not' kullanılır." },
        { question: "Look! He ___ going to fall!", options: ["is", "am", "are", "be"], correct: 0, explanation: "Gözle görülür bir kanıt varsa (düşmek üzere olması) 'is going to' kullanılır." },
        { question: "Are you ___ to buy a map?", options: ["go", "gone", "going", "goes"], correct: 2, explanation: "Gelecek planı kalıbı 'be going to'dur." },
        { question: "I'm going to ___ a suitcase tomorrow.", options: ["buy", "bought", "buying", "buys"], correct: 0, explanation: "Going to'dan sonra fiil yalın (buy) gelir." },
        { question: "What ___ you going to do in London?", options: ["is", "am", "are", "do"], correct: 2, explanation: "Who/What/Where sorularında 'are you' yapısı korunur." },
        { question: "It ___ going to be a great trip!", options: ["is", "am", "are", "be"], correct: 0, explanation: "It öznesi ile 'is' kullanılır." },
        { question: "She ___ (not) going to pack her bags today.", options: ["isn't", "aren't", "am not", "doesn't"], correct: 0, explanation: "She isn't = She is not." }
    ]
};

// ===== UNIT 136: Hotel Reservation (COMPREHENSIVE) =====
const unit136Grammar: EnglishGrammarUnit = {
    unitId: 136,
    title: "Hotel Reservation (Otel Rezervasyonu - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Rezervasyon Dili",
            explanation: "Otel rezervasyonu yaparken veya giriş yaparken (check-in) belirli kibar kalıplar kullanılır. Tıpkı restoranda olduğu gibi 'I'd like...' (İsterdim) veya 'Can I...?' (Alabilir miyim?) yapıları ön plandadır. Odadaki yatak türlerini (single/double) ve olanakları (wifi/breakfast) sormak önemlidir.",
            examples: [
                { english: "I'd like to book a room for two nights.", turkish: "İki gecelik bir oda ayırtmak istiyorum." },
                { english: "Do you have any vacancies?", turkish: "Boş odanız var mı?" },
                { english: "Can I check in now?", turkish: "Şimdi giriş yapabilir miyim?" }
            ]
        },
        {
            title: "2. Altın Kural: Oda Türleri ve Olanaklar",
            explanation: "Otelde karşınıza çıkacak temel terimler:\n• Single room: Tek kişilik oda\n• Double/Twin room: Çift kişilik / İki yataklı oda\n• All-inclusive: Her şey dahil\n• Half-board: Yarım pansiyon (Kahvaltı ve akşam yemeği)",
            examples: [
                { english: "I'd like a double room with a sea view.", turkish: "Deniz manzaralı çift kişilik bir oda istiyorum." },
                { english: "Is breakfast included in the price?", turkish: "Kahvaltı fiyata dahil mi?" },
                { english: "What time is check-out?", turkish: "Çıkış saati kaçta?" }
            ]
        },
        {
            title: "3. Önemli İpuçları: Sorun Bildirme",
            explanation: "Otelde bir sorun yaşadığınızda şu kalıpları kullanabilirsiniz:\n- The AC (air conditioning) isn't working. (Klima çalışmıyor.)\n- I need extra towels. (Ekstra havluya ihtiyacım var.)\n- The room is too noisy. (Oda çok gürültülü.)",
            examples: [
                { english: "Excuse me, there's no hot water.", turkish: "Affedersiniz, sıcak su yok." },
                { english: "Can you wake me up at 7 AM?", turkish: "Beni sabah 7'de uyandırabilir misiniz?" },
                { english: "Where is the swimming pool?", turkish: "Yüzme havuzu nerede?" }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'rezervasyon yapmak' derken bazen 'make a reservation' yerine sadece 'reserve' denir; bu doğrudur. Ancak 'book' kelimesi (kitap değil!) İngilizcede 'yer ayırtmak' anlamında çok daha sık kullanılır. Ayrıca giriş yapmak 'check in', çıkış yapmak 'check out' olarak kullanılır, 'enter' veya 'exit' denmez.",
            examples: [
                { english: "I booked a room online. (✅)", turkish: "İnternetten oda ayırttım." },
                { english: "Checking in (✅) / Checking out (✅)", turkish: "Giriş / Çıkış yapmak." },
                { english: "I want to reserve a table. (✅)", turkish: "Masa ayırtmak istiyorum." }
            ]
        }
    ],
    exercises: [
        { question: "I'd like to ___ a double room, please.", options: ["book", "read", "take", "stay"], correct: 0, explanation: "Yer ayırtmak = to book." },
        { question: "Is breakfast ___ in the price?", options: ["including", "included", "includes", "include"], correct: 1, explanation: "Included = Dahil / Dahil edilmiş." },
        { question: "What time is ___?", options: ["check-in", "check-out", "booking", "vacancy"], correct: 1, explanation: "Otelden ayrılma saati = check-out." },
        { question: "Do you have any ___ for tonight?", options: ["vacations", "vacancies", "vacuums", "rooms"], correct: 1, explanation: "Boş yer/oda = vacancy." },
        { question: "I need some extra ___, please.", options: ["beds", "towels", "rooms", "water"], correct: 1, explanation: "Havlu = towel." },
        { question: "The air conditioning is not ___.", options: ["doing", "making", "working", "going"], correct: 2, explanation: "Bir cihazın çalışması = working." },
        { question: "I'd like a room ___ a balcony.", options: ["at", "in", "with", "on"], correct: 2, explanation: "... olan/sahip bir oda = room with..." },
        { question: "Can I pay ___ cash?", options: ["with", "by", "in", "to"], correct: 2, explanation: "Nakit ödemek = pay in cash (dikkat: kredi kartı 'by credit card')." },
        { question: "I have a ___ under the name of Smith.", options: ["reserve", "reservation", "booking", "Both B and C"], correct: 3, explanation: "Hem reservation hem de booking kullanılabilir." },
        { question: "Can you ___ me up at 8:00?", options: ["sleep", "get", "wake", "take"], correct: 2, explanation: "Uyandırmak = to wake someone up." }
    ]
};

// ===== UNIT 137: At the Airport (COMPREHENSIVE) =====
const unit137Grammar: EnglishGrammarUnit = {
    unitId: 137,
    title: "At the Airport (Havalimanında - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Havalimanı Prosedürleri",
            explanation: "Havalimanında süreç belirli bir sırayla ilerler: Check-in, Security (Güvenlik), Passport Control ve son olarak Boarding (Uçağa biniş). Bu süreçlerde kullanılan terimler standarttır. Uçuşunuzun durumunu (on time, delayed, cancelled) ekranlardan takip etmek ve 'Gate' (Kapı) numaranızı bilmek en önemli kısımdır.",
            examples: [
                { english: "Where is the check-in counter?", turkish: "Check-in kontuarı nerede?" },
                { english: "Is my flight on time?", turkish: "Uçuşum zamanında mı?" },
                { english: "Can I have a window seat, please?", turkish: "Pencere kenarı bir koltuk alabilir miyim, lütfen?" }
            ]
        },
        {
            title: "2. Altın Kural: Temel Havalimanı Terimleri",
            explanation: "Havalimanında sıkça göreceğiniz tabelalar ve terimler:\n• Departures / Arrivals: Gidiş / Geliş\n• Boarding Pass: Biniş kartı\n• Carry-on luggage: El bagajı\n• Excess baggage: Fazla bagaj\n• Delayed / Cancelled: Gecikmeli / İptal edildi",
            examples: [
                { english: "Your flight is boarding at Gate 12.", turkish: "Uçuşunuz 12 numaralı kapıdan biniş alıyor." },
                { english: "Please show your passport and boarding pass.", turkish: "Lütfen pasaportunuzu ve biniş kartınızı gösterin." },
                { english: "I have only one carry-on bag.", turkish: "Sadece bir el bagajım var." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Güvenlik ve Uçak İçi",
            explanation: "Güvenlikten geçerken ve uçak içinde şu kalıpları kullanabilirsiniz:\n- Please take off your shoes. (Lütfen ayakkabılarınızı çıkarın.)\n- Do you have any liquids? (Hiç sıvınız var mı?)\n- Fasten your seatbelt. (Emniyet kemerinizi bağlayın.)\n- Put your seat in the upright position. (Koltuklarınızı dik konuma getirin.)",
            examples: [
                { english: "Could you help me with my luggage?", turkish: "Bagajım için bana yardım edebilir misiniz?" },
                { english: "I'd like a blanket, please.", turkish: "Bir battaniye rica ediyorum, lütfen (uçakta)." },
                { english: "The flight is delayed by two hours.", turkish: "Uçuş iki saat gecikti." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'bagaj' kelimesini tekil olarak her yerde kullanırız ancak İngilizcede 'Baggage' ve 'Luggage' sayılamaz (uncountable) isimlerdir. \n❌ I have two luggages. (YANLIŞ)\n✅ I have two pieces of luggage. (DOĞRU)\n✅ I have two bags. (DOĞRU)",
            examples: [
                { english: "Where is the baggage claim? (✅)", turkish: "Bagaj alım yeri nerede?" },
                { english: "I have too much luggage. (✅)", turkish: "Çok fazla bagajım var." },
                { english: "My bag is missing. (✅)", turkish: "Çantam kayıp." }
            ]
        }
    ],
    exercises: [
        { question: "Where is the check-in ___ for British Airways?", options: ["table", "desk", "counter", "Both B and C"], correct: 3, explanation: "Check-in masası için hem 'desk' hem de 'counter' kullanılır." },
        { question: "Can I see your ___ and boarding pass?", options: ["ticket", "passport", "ID", "B and C"], correct: 1, explanation: "Uluslararası uçuşlarda pasaport (passport) istenir." },
        { question: "The flight is ___ by one hour.", options: ["late", "delayed", "slow", "stopped"], correct: 1, explanation: "Gecikmeli uçuş = delayed." },
        { question: "Please go to ___ 15 for boarding.", options: ["door", "gate", "room", "entrance"], correct: 1, explanation: "Uçağa biniş kapısı = gate." },
        { question: "___ your seatbelt, please.", options: ["Close", "Fasten", "Tie", "Hold"], correct: 1, explanation: "Emniyet kemeri bağlamak = fasten your seatbelt." },
        { question: "I only have ___ luggage.", options: ["a", "one", "carry-on", "bags"], correct: 2, explanation: "Uçak içine alınan küçük çanta = carry-on luggage." },
        { question: "Where can I find my bags? - At the baggage ___.", options: ["claim", "area", "take", "bring"], correct: 0, explanation: "Bagaj alım alanı = baggage claim." },
        { question: "Is this a ___ flight?", options: ["directly", "straight", "direct", "fast"], correct: 2, explanation: "Aktarmasız uçuş = direct flight." },
        { question: "You have 5kg of ___ baggage.", options: ["extra", "more", "too", "excess"], correct: 3, explanation: "Standart dışı fazla bagaj = excess baggage." },
        { question: "Please ___ your laptop from your bag.", options: ["take out", "remove", "get", "Both A and B"], correct: 3, explanation: "Güvenlikte laptop çıkartmak için hem 'take out' hem 'remove' denir." }
    ]
};

// ===== UNIT 138: At the Doctor - Health Expressions (COMPREHENSIVE) =====
const unit138Grammar: EnglishGrammarUnit = {
    unitId: 138,
    title: "At the Doctor (Doktorda - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Şikayetleri İfade Etme",
            explanation: "Doktora gittiğinizde temel olarak iki şeyi ifade etmelisiniz: Nerenizin ağrıdığı ve genel olarak nasıl hissettiğiniz. 'I have a...' (Bende ... var) yapısı semptomları söylemek için en yaygınıdır. Genel durum için ise 'I feel...' (Hissediyorum) kullanılır.",
            examples: [
                { english: "I have a headache.", turkish: "Başım ağrıyor (Baş ağrım var)." },
                { english: "I feel dizzy.", turkish: "Başım dönüyor (Baş dönmesi hissediyorum)." },
                { english: "My stomach hurts.", turkish: "Karnım ağrıyor." }
            ]
        },
        {
            title: "2. Altın Kural: 'Ache' vs 'Sore' vs 'Pain'",
            explanation: "Ağrıyı tarif ederken 3 farklı kelime kullanılır:\n• Ache: Sürekli ve donuk ağrı (headache, stomachache, backache).\n• Sore: Dokunulduğunda ağrıyan yer, genellikle enfeksiyon (sore throat - boğaz ağrısı).\n• Pain: Daha genel veya keskin ağrı (I have a pain in my chest).",
            examples: [
                { english: "I have a sore throat.", turkish: "Boğazım ağrıyor." },
                { english: "Do you have a backache?", turkish: "Sırtın mı ağrıyor?" },
                { english: "Where is the pain?", turkish: "Ağrı nerede?" }
            ]
        },
        {
            title: "3. Önemli İpuçları: Doktora Derdini Anlatma",
            explanation: "Doktorun size sorabileceği veya sizin söyleyebileceğiniz ek ifadeler:\n- What's the matter? (Sorun nedir?)\n- I have a fever. (Ateşim var.)\n- I've been coughing all night. (Bütün gece öksürdüm.)\n- Are you taking any medicine? (Hiç ilaç kullanıyor musunuz?)",
            examples: [
                { english: "I can't sleep.", turkish: "Uyumuyorum." },
                { english: "How long have you felt like this?", turkish: "Ne zamandır böyle hissediyorsunuz?" },
                { english: "I need a prescription.", turkish: "Reçeteye ihtiyacım var." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'Gribim' deriz; İngilizcede ise 'I have THE flu' (the kullanılmasına dikkat!) veya 'I have a cold' denir. Ayrıca 'I am sick' (Hastayım) kelimesi bazen sadece 'midem bulanıyor' veya 'kusuyorum' anlamında da kullanılabilir.",
            examples: [
                { english: "I have a cold. (✅)", turkish: "Soğuk almışım / Üşütmüşüm." },
                { english: "I have the flu. (✅)", turkish: "Gribim." },
                { english: "I feel sick. (✅)", turkish: "Kendimi hasta/kötü hissediyorum (veya midem bulanıyor)." }
            ]
        }
    ],
    exercises: [
        { question: "I have a terrible ___.", options: ["headpain", "headache", "sore head", "aching head"], correct: 1, explanation: "Baş ağrısı = headache." },
        { question: "My throat is really ___. I can't swallow.", options: ["pain", "ache", "sore", "sick"], correct: 2, explanation: "Boğaz ağrısı/yanması = sore throat." },
        { question: "___ the matter?", options: ["What's", "How", "Why", "Where"], correct: 0, explanation: "'Sorun nedir?' kalıbı: What's the matter?" },
        { question: "I feel ___. I need to sit down.", options: ["well", "hot", "dizzy", "cold"], correct: 2, explanation: "Baş dönmesi = dizzy." },
        { question: "Do you have a ___? You look very hot.", options: ["cough", "cold", "fever", "pain"], correct: 2, explanation: "Vücut ısısının yükselmesi (ateş) = fever." },
        { question: "I've been ___ all day. I think I'm getting a cold.", options: ["sneezing", "smiling", "singing", "sleeping"], correct: 0, explanation: "Hapşırmak = sneezing." },
        { question: "The doctor gave me a ___ for the medicine.", options: ["paper", "note", "letter", "prescription"], correct: 3, explanation: "Reçete = prescription." },
        { question: "I have ___ flu.", options: ["a", "the", "an", "some"], correct: 1, explanation: "Grip için 'the flu' kalıbı kullanılır." },
        { question: "My leg ___ when I walk.", options: ["pains", "aches", "hurts", "sick"], correct: 2, explanation: "Bir organın ağrıması/acıması = hurts." },
        { question: "How long ___ you felt like this?", options: ["do", "are", "have", "did"], correct: 2, explanation: "'Ne zamandır?' sorusu Present Perfect (have) ile kurulur." }
    ]
};

// ===== UNIT 139: At the Pharmacy (COMPREHENSIVE) =====
const unit139Grammar: EnglishGrammarUnit = {
    unitId: 139,
    title: "At the Pharmacy (Eczanede - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: İlaç ve Reçete",
            explanation: "Eczaneye (Pharmacy veya Chemist's) gittiğinizde genellikle ya bir reçeteniz (prescription) vardır ya da hafif bir rahatsızlık için tavsiye istersiniz. 'Over-the-counter' (reçetesiz satılan) ilaçlar için belirtilerinizi açıklamanız gerekir.",
            examples: [
                { english: "I have a prescription from my doctor.", turkish: "Doktorumdan bir reçetem var." },
                { english: "Can you recommend something for a cough?", turkish: "Öksürük için bir şey önerebilir misiniz?" },
                { english: "I need some painkillers.", turkish: "Biraz ağrı kesiciye ihtiyacım var." }
            ]
        },
        {
            title: "2. Altın Kural: Dozaj ve Talimatlar",
            explanation: "İlacın nasıl kullanılacağını anlamak hayati önem taşır. Eczacı size şu talimatları verebilir:\n• Take one tablet twice a day. (Günde iki kez bir tablet alın.)\n• Before / After meals. (Yemeklerden önce / sonra.)\n• For external use only. (Sadece harici kullanım için - yutmayın.)",
            examples: [
                { english: "How should I take this medicine?", turkish: "Bu ilacı nasıl almalıyım / kullanmalıyım?" },
                { english: "Are there any side effects?", turkish: "Hiç yan etkisi var mı?" },
                { english: "Does it cause drowsiness?", turkish: "Uyku yapar mı?" }
            ]
        },
        {
            title: "3. Önemli İpuçları: Eczane Terimleri",
            explanation: "İhtiyacınız olabilecek diğer ürünler ve terimler:\n- Band-aid / Plaster: Yara bandı\n- Painkiller: Ağrı kesici\n- Antibiotics: Antibiyotik\n- Ointment / Cream: Merhem / Krem",
            examples: [
                { english: "Can I have a box of plasters?", turkish: "Bir kutu yara bandı alabilir miyim?" },
                { english: "Keep it in a cool place.", turkish: "Serin bir yerde saklayın." },
                { english: "Finish the whole course of antibiotics.", turkish: "Antibiyotik kürünün tamamını bitirin." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede ilacı 'içmek' deriz (İlacımı içtim). İngilizcede ise her zaman 'TAKE' fiili kullanılır. \n❌ I drank my pill. (YANLIŞ)\n✅ I took my medicine. (DOĞRU)\nAyıca 'Drugstore' (ABD) ve 'Pharmacy' (Genel) aynı anlamdadır.",
            examples: [
                { english: "Did you take your medicine? (✅)", turkish: "İlacını aldın mı / içtin mi?" },
                { english: "Take two pills after breakfast. (✅)", turkish: "Kahvaltıdan sonra iki hap alın." },
                { english: "Is there a pharmacy nearby? (✅)", turkish: "Yakınlarda bir eczane var mı?" }
            ]
        }
    ],
    exercises: [
        { question: "I took the ___ to the pharmacist.", options: ["paper", "note", "prescription", "letter"], correct: 2, explanation: "Eczaneye götürülen reçete = prescription." },
        { question: "Take one pill ___ a day.", options: ["two", "twice", "double", "second"], correct: 1, explanation: "Günde iki kez = twice a day." },
        { question: "Are there any ___ effects?", options: ["side", "back", "next", "wrong"], correct: 0, explanation: "Yan etki = side effect." },
        { question: "Don't drive. This medicine causes ___.", options: ["sleepy", "drowsiness", "dream", "nap"], correct: 1, explanation: "Uyku hali/Uyuşukluk = drowsiness." },
        { question: "I need some ___ for my headache.", options: ["sugar", "pills", "painkillers", "water"], correct: 2, explanation: "Ağrı kesici = painkiller." },
        { question: "Do I need a prescription ___ this?", options: ["for", "to", "at", "with"], correct: 0, explanation: "... için reçete = prescription for..." },
        { question: "How ___ should I take it?", options: ["long", "much", "often", "many"], correct: 2, explanation: "Hangi sıklıkla? = How often?" },
        { question: "Take it ___ meals. Your stomach should be full.", options: ["before", "after", "between", "at"], correct: 1, explanation: "Tok karnına = after meals." },
        { question: "Can I have some ___? I cut my finger.", options: ["creams", "plasters", "pills", "liquid"], correct: 1, explanation: "Yara bandı = plaster/band-aid." },
        { question: "Did you ___ your medicine this morning?", options: ["drink", "take", "has", "eat"], correct: 1, explanation: "İlaç almak = take medicine." }
    ]
};

// ===== UNIT 140: Jobs and Professions (COMPREHENSIVE) =====
const unit140Grammar: EnglishGrammarUnit = {
    unitId: 140,
    title: "Jobs and Professions (Meslekler - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Mesleği İfade Etme",
            explanation: "Birinin ne iş yaptığını sormak için 'What do you do?' veya 'What is your job?' deriz. Cevap verirken 'I am a/an [meslek]' kalıbı kullanılır. Mesleklerden önce her zaman a/an artikelinin geldiğini unutmayın!",
            examples: [
                { english: "What do you do?", turkish: "Ne iş yapıyorsun?" },
                { english: "I am an engineer.", turkish: "Ben bir mühendisim." },
                { english: "She works as a teacher.", turkish: "Öğretmen olarak çalışıyor." }
            ]
        },
        {
            title: "2. Altın Kural: Çalışma Yeri ve Görevler",
            explanation: "Nerede çalıştığınızı ve ne yaptığınızı anlatırken şu yapıları kullanırız:\n• I work in [yer]: I work in a hospital.\n• I work for [şirket]: I work for Google.\n• I am in charge of [sorumluluk]: Satıştan sorumluyum.\n• I deal with [ilgilenilen şey]: Müşterilerle ilgileniyorum.",
            examples: [
                { english: "I work in an office.", turkish: "Bir ofiste çalışıyorum." },
                { english: "He is responsible for marketing.", turkish: "Pazarlamadan sorumlu." },
                { english: "My father is retired.", turkish: "Babam emekli." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Meslek Türleri",
            explanation: "Çalışma şekline göre bazı terimler:\n- Full-time / Part-time: Tam zamanlı / Yarı zamanlı\n- Self-employed: Kendi işinin sahibi\n- Unemployed: İşsiz\n- Shift work: Vardiyalı çalışma",
            examples: [
                { english: "I work part-time on weekends.", turkish: "Hafta sonları yarı zamanlı çalışıyorum." },
                { english: "She is looking for a job.", turkish: "İş arıyor." },
                { english: "I have a nine-to-five job.", turkish: "Sabah 9 akşam 5 bir işim var (Düzenli)." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Sık yapılan hata: 'What's your profession?' çok resmidir, günlük dilde 'What do you do?' tercih edilir. Ayrıca meslek isminden önce 'a/an' koymamak en büyük hatadır. \n❌ I am doctor. (YANLIŞ)\n✅ I am A doctor. (DOĞRU)",
            examples: [
                { english: "What does your father do? (✅)", turkish: "Baban ne iş yapıyor?" },
                { english: "He is an architect. (✅)", turkish: "O bir mimar." },
                { english: "I am out of work. (✅)", turkish: "İşsizim / İşim yok." }
            ]
        }
    ],
    exercises: [
        { question: "What ___ you do?", options: ["are", "is", "do", "have"], correct: 2, explanation: "Meslek sorma kalıbı: What do you do?" },
        { question: "She is ___ nurse.", options: ["a", "an", "the", "-"], correct: 0, explanation: "Sessiz harfle başlayan mesleklerden önce 'a' gelir." },
        { question: "He works ___ a large bank.", options: ["at", "for", "on", "Both A and B"], correct: 3, explanation: "Bir kurumda veya şirket adına çalışırken 'at' veya 'for' kullanılabilir." },
        { question: "I am responsible ___ hiring new staff.", options: ["to", "for", "with", "at"], correct: 1, explanation: "Responsible for = ...'dan sorumlu." },
        { question: "My brother is an ___. He designs buildings.", options: ["engineer", "architect", "artist", "author"], correct: 1, explanation: "Bina tasarlayan kişi = architect (mimar)." },
        { question: "I work ___ as a waiter.", options: ["full-time", "part-time", "self-employed", "A or B"], correct: 3, explanation: "Bir işte tam zamanlı veya yarı zamanlı çalışılabilir." },
        { question: "She is currently ___ work. She is looking for a new job.", options: ["out of", "in", "at", "by"], correct: 0, explanation: "Out of work = İşsiz." },
        { question: "My father ___ last year, so he doesn't work now.", options: ["hired", "retired", "fired", "worked"], correct: 1, explanation: "Emekli olmak = retired." },
        { question: "I have to deal ___ difficult customers.", options: ["for", "to", "with", "at"], correct: 2, explanation: "Deal with = ... ile ilgilenmek / uğraşmak." },
        { question: "What is your ___? I am a lawyer.", options: ["work", "job", "doing", "making"], correct: 1, explanation: "What is your job? yaygın bir sorudur." }
    ]
};

// ===== UNIT 141: Job Interview (COMPREHENSIVE) =====
const unit141Grammar: EnglishGrammarUnit = {
    unitId: 141,
    title: "Job Interview (İş Görüşmesi - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Profesyonel Kendini İfade Etme",
            explanation: "İş görüşmesinde amaç, deneyimlerinizi ve yeteneklerinizi profesyonel bir dille sunmaktır. 'I have experience in...' (Deneyimim var) veya 'I am good at...' (İyiyim) gibi kalıplar temeldir. Ayrıca şirkete olan ilginizi belirtmek için 'I am interested in...' yapısını kullanmalısınız.",
            examples: [
                { english: "Tell me about yourself.", turkish: "Bize kendinizden bahsedin." },
                { english: "I have five years of experience in marketing.", turkish: "Pazarlama alanında beş yıllık deneyimim var." },
                { english: "I'm looking for a new challenge.", turkish: "Yeni bir macera/meydan okuma arıyorum." }
            ]
        },
        {
            title: "2. Altın Kural: Yetenekler ve Güçlü Yanlar",
            explanation: "Yeteneklerinizden bahsederken şu kalıpları kullanabilirsiniz:\n• I am a team player. (Takım oyuncusuyum.)\n• I am hardworking and punctual. (Çalışkan ve dakiğim.)\n• I can work under pressure. (Baskı altında çalışabilirim.)\n• I am proficient in Microsoft Office. (MS Office programlarında uzmanım/yetkinim.)",
            examples: [
                { english: "What are your strengths?", turkish: "Güçlü yanlarınız nelerdir?" },
                { english: "I am very organized and reliable.", turkish: "Çok düzenli ve güvenilirim." },
                { english: "I'm a quick learner.", turkish: "Hızlı öğrenen biriyim." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Beklentiler ve Sorular",
            explanation: "Maaş beklentisi veya çalışma saatleri gibi detayları sorarken kibar olmalısınız:\n- What are the working hours? (Çalışma saatleri nedir?)\n- Is there any overtime? (Mesai var mı?)\n- I'm available to start immediately. (Hemen başlamaya hazırım.)",
            examples: [
                { english: "Why do you want to work for us?", turkish: "Neden bizimle çalışmak istiyorsunuz?" },
                { english: "I've always admired your company.", turkish: "Şirketinizi her zaman takdir etmişimdir." },
                { english: "What is the salary range for this position?", turkish: "Bu pozisyonun maaş aralığı nedir?" }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'Deneyimlerim var' diyerek çoğul düşünürüz. Ancak İngilizcede 'Experience' (iş deneyimi anlamında) sayılamaz (uncountable) bir isimdir. \n❌ I have many experiences. (YANLIŞ)\n✅ I have a lot of experience. (DOĞRU)\nAyrıca 'I work with...' yerine bazen 'I deal with...' (ilgileniyorum/çözüyorum) demek daha profesyoneldir.",
            examples: [
                { english: "I have much experience. (✅)", turkish: "Çok deneyimim var." },
                { english: "I deal with customer complaints. (✅)", turkish: "Müşteri şikayetleriyle ilgileniyorum." },
                { english: "I'm responsible for sales. (✅)", turkish: "Satıştan sorumluyum." }
            ]
        }
    ],
    exercises: [
        { question: "Can you tell us ___ yourself?", options: ["for", "about", "at", "with"], correct: 1, explanation: "Birisi hakkında konuşmak = tell about someone." },
        { question: "I have three years of ___ in this field.", options: ["experiencies", "experience", "experienced", "experiencing"], correct: 1, explanation: "Experience (deneyim) sayılamaz, çoğul eki almaz." },
        { question: "I am a ___ player. I enjoy working with others.", options: ["group", "staff", "team", "office"], correct: 2, explanation: "Takım oyuncusu = team player." },
        { question: "Why should we ___ you?", options: ["take", "get", "hire", "give"], correct: 2, explanation: "İşe almak = hire." },
        { question: "I can work ___ pressure.", options: ["under", "below", "at", "with"], correct: 0, explanation: "Baskı altında çalışmak = work under pressure." },
        { question: "What are your ___ and weaknesses?", options: ["strongs", "strengths", "powers", "goods"], correct: 1, explanation: "Güçlü yanlar = strengths." },
        { question: "I am ___ to start next Monday.", options: ["available", "free", "open", "Possible"], correct: 0, explanation: "Müsait/hazır olmak = available." },
        { question: "I'm looking ___ a new job.", options: ["at", "to", "for", "after"], correct: 2, explanation: "Bir şey aramak = look for." },
        { question: "I am proficient ___ Python and Java.", options: ["at", "in", "with", "on"], correct: 1, explanation: "Bir konuda yetkin olmak = proficient in." },
        { question: "What is the ___ range?", options: ["money", "salary", "cash", "price"], correct: 1, explanation: "Maaş aralığı = salary range." }
    ]
};

// ===== UNIT 142: On the Phone (COMPREHENSIVE) =====
const unit142Grammar: EnglishGrammarUnit = {
    unitId: 142,
    title: "On the Phone (Telefonda Konuşma - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Telefon Etiketi",
            explanation: "Telefonda kendinizi tanıtırken 'I am...' yerine 'This is...' kullanılır. Birini isterken 'May I speak to...?' kalıbı en kibar yoldur. Eğer aradığınız kişi orada değilse 'Can I leave a message?' (Mesaj bırakabilir miyim?) diyebilirsiniz.",
            examples: [
                { english: "Hello, this is Mark speaking.", turkish: "Merhaba, ben Mark (konuşan Mark)." },
                { english: "May I speak to Mrs. Jones, please?", turkish: "Bayan Jones ile görüşebilir miyim, lütfen?" },
                { english: "Who is calling, please?", turkish: "Kiminle görüşüyorum? / Kim arıyor?" }
            ]
        },
        {
            title: "2. Altın Kural: Bekletme ve Bağlama",
            explanation: "Telefonda birini bekletirken veya aktarırken şu kalıplar kullanılır:\n• Hold on a second. (Bir saniye bekleyin.)\n• I'll put you through. (Sizi bağlıyorum.)\n• The line is busy. (Hat meşgul.)\n• I'll call you back. (Sizi geri arayacağım.)",
            examples: [
                { english: "Could you hold the line, please?", turkish: "Hatta bekler misiniz, lütfen?" },
                { english: "I'm connecting you now.", turkish: "Sizi şimdi bağlıyorum." },
                { english: "Can you speak up? I can't hear you.", turkish: "Biraz yüksek sesle konuşur musun? Seni duyamıyorum." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Mesaj Bırakma",
            explanation: "Karşı taraf orada değilse:\n- He is in a meeting. (Toplantıda.)\n- He is out of the office. (Ofis dışında.)\n- Would you like to leave a message? (Mesaj bırakmak ister misiniz?)\n- I'll tell him you called. (Aradığınızı ona ileteceğim.)",
            examples: [
                { english: "Can I take a message?", turkish: "Mesajınızı alabilir miyim?" },
                { english: "Could you ask him to call me back?", turkish: "Beni geri aramasını söyler misiniz?" },
                { english: "My number is 555-1234.", turkish: "Numaram 555-1234." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede telefona 'Ben [isim]' diye cevap veririz. İngilizcede ise 'I am Ali' denmez, 'This is Ali' veya sadece 'Ali speaking' denir. Ayrıca 'Kapatmak' fiili için 'close' değil, 'hang up' kullanılır.",
            examples: [
                { english: "This is Jane. (✅)", turkish: "Ben Jane (telefonda)." },
                { english: "Don't hang up! (✅)", turkish: "Kapatma!" },
                { english: "You have the wrong number. (✅)", turkish: "Yanlış numarayı aradınız." }
            ]
        }
    ],
    exercises: [
        { question: "Hello, ___ is Sarah speaking.", options: ["I", "it", "this", "here"], correct: 2, explanation: "Telefonda kendini tanıtırken 'This is [name]' kullanılır." },
        { question: "___ I speak to the manager?", options: ["Do", "Am", "May", "Have"], correct: 2, explanation: "Kibarca birini istemek = May I speak to...?" },
        { question: "Please ___ on a second.", options: ["wait", "stay", "hold", "stop"], correct: 2, explanation: "Hatta beklemek = hold on." },
        { question: "I'll put you ___ to the sales department.", options: ["in", "on", "through", "over"], correct: 2, explanation: "Telefonda birini bağlamak = put someone through." },
        { question: "The ___ is busy right now.", options: ["road", "line", "phone", "call"], correct: 1, explanation: "Hattın meşgul olması = the line is busy." },
        { question: "I can't hear you. Can you speak ___?", options: ["down", "up", "loudly", "out"], correct: 1, explanation: "Daha yüksek sesle konuşmak = speak up." },
        { question: "Would you like to ___ a message?", options: ["give", "take", "leave", "send"], correct: 2, explanation: "Mesaj bırakmak = leave a message." },
        { question: "I'm sorry, you have the ___ number.", options: ["bad", "false", "wrong", "mistake"], correct: 2, explanation: "Yanlış numara = wrong number." },
        { question: "I'll call you ___ in ten minutes.", options: ["again", "back", "return", "forward"], correct: 1, explanation: "Geri aramak = call someone back." },
        { question: "He is ___ of the office today.", options: ["in", "at", "out", "away"], correct: 2, explanation: "Ofis dışında = out of the office." }
    ]
};

// ===== UNIT 143: Writing Emails (COMPREHENSIVE) =====
const unit143Grammar: EnglishGrammarUnit = {
    unitId: 143,
    title: "Writing Emails (E-posta Yazma - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Resmi ve Gayriresmi Dil",
            explanation: "E-postalarda kime yazdığınız çok önemlidir. Tanımadığınız birine veya iş birimine yazarken 'Formal' (Resmi), arkadaşınıza yazarken 'Informal' (Samimi) bir dil kullanırsınız. Giriş ve çıkış kalıpları buna göre değişir.",
            examples: [
                { english: "Dear Mr. Smith, (Formal)", turkish: "Sayın Bay Smith," },
                { english: "Hi John, (Informal)", turkish: "Selam John," },
                { english: "To whom it may concern,", turkish: "İlgili makama, (Kimin okuyacağı belli değilse)" }
            ]
        },
        {
            title: "2. Altın Kural: Giriş Amacını Belirtme",
            explanation: "E-postaya neden yazdığınızı ilk cümleden belirtmek en iyisidir:\n• I am writing to inquire about... (... hakkında bilgi almak için yazıyorum.)\n• I'm writing to confirm... (... onaylamak için yazıyorum.)\n• Thank you for your email. (E-postanız için teşekkürler.)\n• I am writing in response to... (... cevaben yazıyorum.)",
            examples: [
                { english: "I am writing to book a room.", turkish: "Oda ayırtmak için yazıyorum." },
                { english: "Just a quick note to say...", turkish: "Sadece ... demek için kısa bir not." },
                { english: "Please find the file attached.", turkish: "Ekteki dosyayı bulabilirsiniz." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Kapanış Kalıpları",
            explanation: "E-postayı bitirirken kullanılan standart yapılar:\n- I look forward to hearing from you. (Sizden haber bekliyorum.)\n- Best regards, (Saygılarımla - Resmi)\n- Yours sincerely, (Saygılarımla - Çok resmi)\n- Best / Cheers / Take care, (Selamlar / Kendine iyi bak - Samimi)",
            examples: [
                { english: "Let me know if you have any questions.", turkish: "Herhangi bir sorunuz olursa bana bildirin." },
                { english: "Speak soon,", turkish: "Yakında görüşmek üzere (konuşmak üzere)," },
                { english: "Kind regards,", turkish: "İçten saygılarımla," }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'Ekte gönderiyorum' derken 'I am sending in the attachment' gibi uzun cümleler kurulur. İngilizcede 'Please find attached...' kalıbı çok daha yaygın ve profesyoneldir. Ayrıca 'I look forward to hearing' yapısından sonra fiil gelirse -ing eki alır! (I look forward to MEETing you).",
            examples: [
                { english: "Please find attached the report. (✅)", turkish: "Raporu ekte bulabilirsiniz." },
                { english: "I look forward to seeing you. (✅)", turkish: "Sizi görmeyi dört gözle bekliyorum." },
                { english: "Thanks in advance. (✅)", turkish: "Şimdiden teşekkürler." }
            ]
        }
    ],
    exercises: [
        { question: "Dear Ms. White, (Formal start) - Yours ___, (Formal end)", options: ["Sincerely", "Cheers", "Bye", "Hello"], correct: 0, explanation: "Resmi bir e-posta 'Dear' ile başlarsa 'Yours sincerely' veya 'Yours faithfully' ile biter." },
        { question: "I am writing to ___ about your products.", options: ["ask", "tell", "inquire", "say"], correct: 2, explanation: "Bilgi almak için sormak (resmi) = inquire." },
        { question: "Please find the document ___.", options: ["attach", "attached", "attaching", "attaches"], correct: 1, explanation: "Ekteki dosya = attached document." },
        { question: "I ___ forward to hearing from you.", options: ["see", "watch", "look", "wait"], correct: 2, explanation: "Dört gözle beklemek = look forward to." },
        { question: "___ regards, (Common business ending)", options: ["Best", "Good", "Fine", "Nice"], correct: 0, explanation: "Best regards, en yaygın iş dünyası kapanışıdır." },
        { question: "I'm writing ___ response to your advertisement.", options: ["at", "on", "in", "for"], correct: 2, explanation: "... cevap olarak / cevaben = in response to." },
        { question: "Thanks ___ advance for your help.", options: ["for", "in", "at", "to"], correct: 1, explanation: "Şimdiden teşekkürler = thanks in advance." },
        { question: "To ___ it may concern,", options: ["who", "whom", "whose", "which"], correct: 1, explanation: "İlgili makama (standart kalıp) = To whom it may concern." },
        { question: "Just a ___ note to remind you about the meeting.", options: ["fast", "quick", "speed", "slow"], correct: 1, explanation: "Hızlı/kısa bir not = quick note." },
        { question: "Let me ___ if you need more information.", options: ["say", "tell", "know", "speak"], correct: 2, explanation: "Bana bildirin = let me know." }
    ]
};

// ===== UNIT 144: Feelings and Emotions (COMPREHENSIVE) =====
const unit144Grammar: EnglishGrammarUnit = {
    unitId: 144,
    title: "Feelings and Emotions (Duygular ve Hissiyat - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Nasıl Hissediyoruz?",
            explanation: "Duygularımızı ifade ederken en çok 'I am...' veya 'I feel...' yapılarını kullanırız. 'I am happy' (Mutluyum) durumu belirtirken, 'I feel happy' (Mutlu hissediyorum) o andaki duygunuzu vurgular.",
            examples: [
                { english: "I am excited about the party.", turkish: "Parti için heyecanlıyım." },
                { english: "She feels lonely today.", turkish: "O bugün yalnız hissediyor." },
                { english: "They look worried.", turkish: "Endişeli görünüyorlar." }
            ]
        },
        {
            title: "2. Altın Kural: Sıfatların Farkı (-ed vs -ing)",
            explanation: "Duyguları anlatırken kullanılan sıfatlar bazen kafa karıştırabilir:\n• -ed ile bitenler: Kişinin nasıl hissettiğini anlatır (I am bored - Sıkıldım).\n• -ing ile bitenler: Bir şeyin nasıl olduğunu anlatır (The book is boring - Kitap sıkıcı).\nUnutmayın: İnsanlar genellikle -ed, nesneler genellikle -ing olur.",
            examples: [
                { english: "I am interested in art.", turkish: "Sanatla ilgiliyim / Sanat ilgimi çekiyor." },
                { english: "This movie is very interesting.", turkish: "Bu film çok ilginç." },
                { english: "She was surprised by the news.", turkish: "Haberlere şaşırdı." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Karmaşık Duygular",
            explanation: "Sadece 'happy' veya 'sad' değil, daha detaylı hisleri de bilmelisiniz:\n- I am relieved. (Rahatladım - bir sorun çözülünce.)\n- I am frustrated. (Hayal kırıklığına uğramış / bunalmış.)\n- I am exhausted. (Çok yorgun / bitkin.)\n- I am jealous. (Kıskancım / kıskanıyorum.)",
            examples: [
                { english: "He is proud of his daughter.", turkish: "Kızıyla gurur duyuyor." },
                { english: "I was embarrassed by my mistake.", turkish: "Hatamdan dolayı utandım (mahçup oldum)." },
                { english: "Are you angry with me?", turkish: "Bana kızgın mısın?" }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'Sıkıldım' deriz, bunu 'I am boring' diye çevirmek 'Ben sıkıcıyım' demektir! Kendi duygunuz için her zaman 'I am bored' demelisiniz. Ayrıca 'Korkuyorum' derken 'I am afraid FROM' değil 'I am afraid OF' kullanılır.",
            examples: [
                { english: "I am bored. (✅)", turkish: "Sıkıldım." },
                { english: "I am afraid of spiders. (✅)", turkish: "Örümceklerden korkarım." },
                { english: "I am confused. (✅)", turkish: "Kafam karıştı." }
            ]
        }
    ],
    exercises: [
        { question: "I am so ___! I passed the exam.", options: ["sad", "happy", "angry", "worried"], correct: 1, explanation: "Sınavı geçince mutlu (happy) olunur." },
        { question: "The long flight was very ___.", options: ["tire", "tired", "tiring", "tires"], correct: 2, explanation: "Uçuşun kendisi yorucudur (-ing)." },
        { question: "I am ___ in learning Japanese.", options: ["interest", "interesting", "interested", "interests"], correct: 2, explanation: "Kişinin ilgisi belirtilirken -ed kullanılır." },
        { question: "She is afraid ___ dogs.", options: ["from", "with", "at", "of"], correct: 3, explanation: "Afraid of = ...'dan korkmak." },
        { question: "I feel ___. I need a 10-hour sleep.", options: ["excited", "exhausted", "relaxed", "glad"], correct: 1, explanation: "Çok yorgun/bitkin = exhausted." },
        { question: "He was very ___ because he lost his wallet.", options: ["upset", "cheerful", "proud", "brave"], correct: 0, explanation: "Cüzdan kaybedince üzgün (upset) olunur." },
        { question: "Are you ___ about the concert tomorrow?", options: ["excite", "exciting", "excited", "excites"], correct: 2, explanation: "Kişinin heyecanı = excited." },
        { question: "I am ___ of you! You did a great job.", options: ["proud", "shame", "scared", "bored"], correct: 0, explanation: "Proud of = ... ile gurur duymak." },
        { question: "Don't be ___ with me. It was an accident.", options: ["happy", "angry", "kind", "calm"], correct: 1, explanation: "Angry with (someone) = (Birine) kızgın." },
        { question: "This math problem is so ___. I don't understand it.", options: ["confused", "confusing", "confuse", "confuses"], correct: 1, explanation: "Problem kafa karıştırıcıdır (-ing)." }
    ]
};

// ===== UNIT 145: Personality Traits (COMPREHENSIVE) =====
const unit145Grammar: EnglishGrammarUnit = {
    unitId: 145,
    title: "Personality Traits (Kişilik Özellikleri - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Birini Tanımlamak",
            explanation: "Birinin nasıl biri olduğunu sormak için 'What is he/she like?' sorusunu kullanırız. Bu soru dış görünüşü değil, karakteri (kişiliği) sorar. Cevap verirken sıfatları kullanırız.",
            examples: [
                { english: "What is your best friend like?", turkish: "En iyi arkadaşın nasıl biridir?" },
                { english: "She is very kind and helpful.", turkish: "O çok nazik ve yardımseverdir." },
                { english: "He is a bit shy around strangers.", turkish: "Yabancıların yanında biraz utangaçtır." }
            ]
        },
        {
            title: "2. Altın Kural: Zıt Karakter Özellikleri",
            explanation: "Kişilik sıfatlarını zıt anlamlılarıyla öğrenmek kalıcılığı artırır:\n• Kind (Nazik) x Rude (Kaba)\n• Hardworking (Çalışkan) x Lazy (Tembel)\n• Generous (Cömert) x Stingy (Cimri)\n• Outgoing (Sosyal) x Shy (Utangaç)\n• Honest (Dürüst) x Dishonest (Dürüst olmayan)",
            examples: [
                { english: "My brother is very hardworking, but I'm a bit lazy.", turkish: "Erkek kardeşim çok çalışkan ama ben biraz tembelim." },
                { english: "She is an outgoing person; she loves parties.", turkish: "O dışadönük biridir; partileri sever." },
                { english: "Don't be rude to the waiter.", turkish: "Garsona karşı kaba olma." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Karakteri Detaylandırmak",
            explanation: "Sadece tek bir sıfat yerine zarflarla anlamı güçlendirebilirsiniz:\n- She is extremely clever. (Aşırı zeki.)\n- He is quite reliable. (Epey güvenilir.)\n- They are fairly optimistic. (Oldukça iyimserler.)\n- She has a good sense of humor. (İyi bir mizah anlayışı var.)",
            examples: [
                { english: "He is a very reliable employee.", turkish: "Çok güvenilir bir çalışandır." },
                { english: "She is quite bossy; she likes telling people what to do.", turkish: "Epey otoriterdir; insanlara ne yapacağını söylemeyi sever." },
                { english: "Are you an optimistic or a pessimistic person?", turkish: "İyimser mi yoksa kötümser mi birisin?" }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "En büyük tuzak 'What does she look like?' (Dış görünüşü nasıl?) ile 'What is she like?' (Karakteri nasıl?) sorularını karıştırmaktır. \n❓ What is she like? → She is friendly. (Karakter)\n❓ What does she look like? → She is tall and thin. (Görünüş)",
            examples: [
                { english: "What is your new teacher like? (✅)", turkish: "Yeni öğretmenin (karakter olarak) nasıl biri?" },
                { english: "Is he a brave person? (✅)", turkish: "O cesur biri mi?" },
                { english: "She is a bit talkative. (✅)", turkish: "Biraz konuşkandır." }
            ]
        }
    ],
    exercises: [
        { question: "What ___ your brother like? - He's very funny.", options: ["does", "is", "look", "be"], correct: 1, explanation: "Karakter sorarken 'is/are like' kullanılır." },
        { question: "She always shares her food. She is very ___.", options: ["stingy", "generous", "rude", "lazy"], correct: 1, explanation: "Cömert = generous." },
        { question: "He never works. He is so ___.", options: ["hardworking", "lazy", "clever", "kind"], correct: 1, explanation: "Tembel = lazy." },
        { question: "A person who tells the truth is ___.", options: ["honest", "rude", "shy", "unhelpful"], correct: 0, explanation: "Dürüst = honest." },
        { question: "She is very ___. She doesn't like talking to new people.", options: ["outgoing", "shy", "loud", "brave"], correct: 1, explanation: "Utangaç = shy." },
        { question: "My boss is quite ___. He always tells us what to do.", options: ["bossy", "lazy", "kind", "funny"], correct: 0, explanation: "Otoriter/Emretmeyi seven = bossy." },
        { question: "What ___ she look like? - She has long hair.", options: ["is", "are", "does", "be"], correct: 2, explanation: "Dış görünüş sorarken 'does... look like' kullanılır." },
        { question: "He makes everyone laugh. He has a great sense of ___.", options: ["humor", "smile", "laugh", "happy"], correct: 0, explanation: "Mizah anlayışı = sense of humor." },
        { question: "Don't be ___. Say 'please' and 'thank you'.", options: ["kind", "helpful", "rude", "polite"], correct: 2, explanation: "Kaba = rude." },
        { question: "She is very ___. She always gets 100 on her tests.", options: ["clever", "silly", "lazy", "shy"], correct: 0, explanation: "Zeki = clever." }
    ]
};

// ===== UNIT 146: Sports and Fitness (COMPREHENSIVE) =====
const unit146Grammar: EnglishGrammarUnit = {
    unitId: 146,
    title: "Sports and Fitness (Spor ve Sağlıklı Yaşam - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Play, Go, Do Ayrımı",
            explanation: "İngilizcede her spor için 'yapmak' (make/do) denmez. Sporun türüne göre 3 farklı fiil kullanılır:\n• Play: Topla oynanan veya takım sporları (football, tennis, basketball).\n• Go: -ing ile biten, bir yere gidilerek yapılan sporlar (swimming, running, cycling).\n• Do: Bireysel, dövüş veya salon sporları (yoga, karate, gymnastics, aerobics).",
            examples: [
                { english: "I play basketball on Saturdays.", turkish: "Cumartesileri basketbol oynarım." },
                { english: "She goes swimming every morning.", turkish: "Her sabah yüzmeye gider." },
                { english: "He does yoga to relax.", turkish: "Rahatlamak için yoga yapar." }
            ]
        },
        {
            title: "2. Altın Kural: Fitness ve Egzersiz Kalıpları",
            explanation: "Spor salonu ve genel egzersiz terimleri:\n• Work out: Antrenman yapmak / Egzersiz yapmak\n• Keep fit: Formda kalmak\n• Join a gym: Spor salonuna yazılmak\n• Warm up: Isınmak",
            examples: [
                { english: "I work out three times a week.", turkish: "Haftada üç kez egzersiz yapıyorum." },
                { english: "You should warm up before running.", turkish: "Koşmadan önce ısınmalısın." },
                { english: "She wants to keep fit.", turkish: "Formda kalmak istiyor." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Ekipmanlar ve Yerler",
            explanation: "Nerede ve neyle spor yapılır?\n- Football pitch (Futbol sahası)\n- Tennis court (Tenis kortu)\n- Swimming pool (Yüzme havuzu)\n- Gymnasium / Gym (Spor salonu)\n- Racket (Raket), Ball (Top), Trainers (Spor ayakkabısı)",
            examples: [
                { english: "The match is at the football pitch.", turkish: "Maç futbol sahasında." },
                { english: "I forgot my trainers at home.", turkish: "Spor ayakkabılarımı evde unuttum." },
                { english: "Let's meet at the tennis court.", turkish: "Tenis kortunda buluşalım." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "En sık yapılan hata her şeye 'play' demektir. \n❌ I play yoga. (YANLIŞ) → ✅ I do yoga. (DOĞRU)\n❌ I play swimming. (YANLIŞ) → ✅ I go swimming. (DOĞRU)\nKısa yol: Top varsa play, -ing varsa go, geri kalan bireysel şeyler do!",
            examples: [
                { english: "I go jogging in the park. (✅)", turkish: "Parkta hafif tempo koşuya çıkarım." },
                { english: "She does karate professionally. (✅)", turkish: "Profesyonelce karate yapıyor." },
                { english: "We play volleyball in summer. (✅)", turkish: "Yazın voleybol oynarız." }
            ]
        }
    ],
    exercises: [
        { question: "I ___ football with my friends every Sunday.", options: ["do", "go", "play", "make"], correct: 2, explanation: "Topla oynanan takım sporları = play." },
        { question: "She ___ gymnastics at school.", options: ["plays", "goes", "does", "makes"], correct: 2, explanation: "Bireysel salon sporları = do." },
        { question: "We should ___ every summer in the sea.", options: ["play swimming", "do swimming", "go swimming", "make swimming"], correct: 2, explanation: "-ing ile biten sporlar = go." },
        { question: "I go to the gym to ___.", options: ["warm up", "work out", "keep out", "play out"], correct: 1, explanation: "Antrenman yapmak = work out." },
        { question: "You need a ___ to play tennis.", options: ["bat", "stick", "racket", "club"], correct: 2, explanation: "Tenis raketi = racket." },
        { question: "The basketball ___ is very slippery today.", options: ["pitch", "court", "field", "pool"], correct: 1, explanation: "Basketbol/Tenis alanı = court." },
        { question: "I want to ___ a gym next month.", options: ["enter", "join", "go", "start"], correct: 1, explanation: "Bir spor salonuna kaydolmak = join a gym." },
        { question: "He is very healthy. He ___ fit.", options: ["stays", "keeps", "does", "Both A and B"], correct: 3, explanation: "Keep fit veya stay fit = formda kalmak." },
        { question: "Always ___ before you start heavy exercise.", options: ["warm up", "cool down", "sit down", "break down"], correct: 0, explanation: "Isınmak = warm up." },
        { question: "How often do you ___ jogging?", options: ["play", "do", "go", "make"], correct: 2, explanation: "Jogging = go." }
    ]
};

// ===== UNIT 147: Music and Art (COMPREHENSIVE) =====
const unit147Grammar: EnglishGrammarUnit = {
    unitId: 147,
    title: "Music and Art (Müzik ve Sanat - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Enstrüman Çalmak",
            explanation: "İngilizcede bir enstrüman çaldığınızı söylerken enstrümanın önüne mutlaka 'THE' gelmelidir. Bu, diller arasındaki en temel farklardan biridir.",
            examples: [
                { english: "I play the guitar.", turkish: "Gitar çalıyorum." },
                { english: "She plays the piano beautifully.", turkish: "Piyano çalıyor (harika bir şekilde)." },
                { english: "Do you play any instruments?", turkish: "Hiç enstrüman çalıyor musun?" }
            ]
        },
        {
            title: "2. Altın Kural: Sanatsal Eylemler",
            explanation: "Sanat dallarında kullanılan fiiller:\n• Paint a picture: Resim yapmak (boya ile)\n• Draw a sketch: Çizim yapmak (kalemle)\n• Sculpt: Heykel yapmak\n• Compose music: Müzik bestelemek",
            examples: [
                { english: "She is painting a landscape.", turkish: "Bir manzara resmi boyuyor." },
                { english: "I like drawing in my notebook.", turkish: "Defterime çizim yapmayı severim." },
                { english: "He composed his first song at age 10.", turkish: "İlk şarkısını 10 yaşında besteledi." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Müzik Türleri ve Konserler",
            explanation: "Müzik hakkında konuşurken:\n- What's your favorite genre? (Favori türün ne?)\n- I'm a big fan of rock music. (Rock müziğin büyük hayranıyım.)\n- The concert was sold out. (Konserin tüm biletleri tükendi.)\n- Live music (Canlı müzik), Lyrics (Şarkı sözleri)",
            examples: [
                { english: "I prefer classical music to pop.", turkish: "Klasik müziği popa tercih ederim." },
                { english: "The lyrics are very meaningful.", turkish: "Şarkı sözleri çok anlamlı." },
                { english: "Let's go to a live music bar tonight.", turkish: "Bu gece canlı müzik yapan bir bara gidelim." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'Gitar çalıyorum' deriz. İngilizcede 'the' koymazsanız yanlış olur. \n❌ I play guitar. (YANLIŞ) → ✅ I play THE guitar. (DOĞRU)\nAyrıca 'listen' fiilinden sonra her zaman 'TO' gelmelidir.\n❌ Listen music (YANLIŞ) → ✅ Listen TO music (DOĞRU)",
            examples: [
                { english: "She is listening to jazz. (✅)", turkish: "Caz dinliyor." },
                { english: "I play the violin. (✅)", turkish: "Keman çalıyorum." },
                { english: "What kind of music do you like? (✅)", turkish: "Ne tür müzik seversin?" }
            ]
        }
    ],
    exercises: [
        { question: "I can play ___ flute.", options: ["a", "an", "the", "-"], correct: 2, explanation: "Enstrüman isimlerinden önce 'the' gelir." },
        { question: "She likes to listen ___ the radio while cooking.", options: ["at", "to", "for", "with"], correct: 1, explanation: "Listen to = ... dinlemek." },
        { question: "He is an artist. He ___ amazing pictures.", options: ["draws", "paints", "makes", "A or B"], correct: 3, explanation: "Resim yapmak için hem draws (çizmek) hem de paints (boyamak) olabilir." },
        { question: "What is your favorite ___ of music?", options: ["type", "genre", "kind", "All of above"], correct: 3, explanation: "Müzik türü için 'type', 'genre' veya 'kind' kullanılabilir." },
        { question: "The concert was ___. All tickets were gone.", options: ["sold in", "sold out", "sold away", "sold up"], correct: 1, explanation: "Biletlerin tükenmesi = sold out." },
        { question: "Who ___ this beautiful song?", options: ["composed", "made", "wrote", "Both A and C"], correct: 3, explanation: "Müzik için 'compose' veya 'write' (söz/müzik) kullanılır." },
        { question: "I play ___ drums in a rock band.", options: ["a", "an", "the", "-"], correct: 2, explanation: "Play the drums." },
        { question: "She has a very beautiful ___.", options: ["sound", "voice", "noise", "shout"], correct: 1, explanation: "İnsan sesi = voice (enstrüman/eşya sesi = sound)." },
        { question: "I love the ___ of this song. They are so poetic.", options: ["words", "scripts", "lyrics", "notes"], correct: 2, explanation: "Şarkı sözleri = lyrics." },
        { question: "Do you prefer ___ music or recorded music?", options: ["alive", "living", "life", "live"], correct: 3, explanation: "Canlı müzik = live music." }
    ]
};

// ===== UNIT 148: Movies and TV Shows (COMPREHENSIVE) =====
const unit148Grammar: EnglishGrammarUnit = {
    unitId: 148,
    title: "Movies and TV Shows (Sinema ve TV - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Film/Dizi Hakkında Konuşmak",
            explanation: "İzlediğiniz bir şey hakkında fikir belirtirken 'It's about...' (Şunun hakkında) veya 'The plot is...' (Hikaye/Kurgu şöyledir) kalıplarını kullanırız. Hollywood etkisinden dolayı 'Movie' (Amerikan) ve 'Film' (İngiliz) kelimelerinin her ikisi de çok yaygındır.",
            examples: [
                { english: "What is the movie about?", turkish: "Film ne hakkında?" },
                { english: "It's a sci-fi movie about space travel.", turkish: "Uzay yolculuğu hakkında bir bilim kurgu filmi." },
                { english: "Have you seen the latest Batman movie?", turkish: "Son Batman filmini izledin mi?" }
            ]
        },
        {
            title: "2. Altın Kural: Film ve TV Türleri",
            explanation: "Türleri öğrenmek seçeceğiniz şeyi anlatmak için önemlidir:\n• Action: Aksiyon\n• Comedy: Komedi\n• Horror: Korku\n• Romance: Romantik\n• Documentary: Belgesel\n• Thriller: Gerilim\n• Animation: Animasyon",
            examples: [
                { english: "I don't like horror movies. They are too scary.", turkish: "Korku filmlerini sevmem. Çok korkutucular." },
                { english: "Let's watch a rom-com tonight.", turkish: "Bu gece bir romantik-komedi izleyelim." },
                { english: "The documentary was very educational.", turkish: "Belgesel çok eğiticiydi." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Ekip ve Oyuncular",
            explanation: "Sinema dünyası terimleri:\n- Cast (Oyuncu kadrosu), Director (Yönetmen), Main character (Başrol/Ana karakter)\n- Starring... (... başrolde olduğu)\n- Plot / Script (Kurgu / Senaryo)\n- Soundtrack (Film müzikleri)\n- Subtitles (Altyazı), Dubbed (Dublajlı)",
            examples: [
                { english: "Leonardo DiCaprio stars in this movie.", turkish: "Bu filmde Leonardo DiCaprio başrolde." },
                { english: "The plot is very confusing.", turkish: "Kurgu çok kafa karıştırıcı." },
                { english: "I prefer movies with subtitles.", turkish: "Altyazılı filmleri tercih ederim." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'Bu akşam film var' deriz; İngilizcede ise 'There is an interesting movie ON tonight' (TV'de anlamında on kullanılır) denir. Ayrıca 'Watch' TV/Sinema için, 'See' ise genellikle 'izlemeye gitmek' anlamında kullanılır.",
            examples: [
                { english: "What's on TV tonight? (✅)", turkish: "Bu gece TV'de ne var?" },
                { english: "I saw it at the cinema. (✅)", turkish: "Onu sinemada izledim." },
                { english: "I'm watching a series. (✅)", turkish: "Bir dizi izliyorum." }
            ]
        }
    ],
    exercises: [
        { question: "What is your favorite ___ of movie?", options: ["genre", "genre", "kind", "Both A and C"], correct: 3, explanation: "Tür anlamında genre veya kind kullanılabilir." },
        { question: "The movie ___ Tom Hanks.", options: ["stars", "plays", "acts", "shows"], correct: 0, explanation: "'Star' fiil olarak 'başrolde oynamak' anlamındadır." },
        { question: "I don't like movies with ___.", options: ["dubbing", "subtitles", "script", "plot"], correct: 1, explanation: "Altyazı = subtitles." },
        { question: "Who ___ this movie?", options: ["directed", "made", "wrote", "All of above"], correct: 0, explanation: "Yönetmek = direct." },
        { question: "It is an ___ movie. My kids love it.", options: ["action", "animated", "horror", "thriller"], correct: 1, explanation: "Çocuklar genellikle animasyon (animated) sever." },
        { question: "The ___ of the movie was excellent.", options: ["music", "soundtrack", "songs", "sound"], correct: 1, explanation: "Film müzikleri = soundtrack." },
        { question: "I missed the last ___ of the series.", options: ["part", "episode", "chapter", "unit"], correct: 1, explanation: "Dizi bölümü = episode." },
        { question: "The ___ was very sad. I cried at the end.", options: ["ending", "starting", "opening", "middle"], correct: 0, explanation: "Filmin sonu = ending." },
        { question: "Is there anything good ___ TV tonight?", options: ["in", "at", "on", "for"], correct: 2, explanation: "TV yayınında olmak = on TV." },
        { question: "The main ___ was very brave.", options: ["person", "actor", "character", "Both B and C"], correct: 3, explanation: "Ana karakter veya oyuncu kastedilir." }
    ]
};

// ===== UNIT 149: Technology (COMPREHENSIVE) =====
const unit149Grammar: EnglishGrammarUnit = {
    unitId: 149,
    title: "Technology (Teknoloji - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Dijital Eylemler",
            explanation: "Günlük hayatta teknolojiyle ilgili yaptığımız temel eylemler için özel fiiller kullanılır. Bu fiillerin çoğu nesne-odaklıdır. Örneğin bir şeyi indirmek 'download', yüklemek 'upload' olarak adlandırılır.",
            examples: [
                { english: "I need to download this file.", turkish: "bu dosyayı indirmem lazım." },
                { english: "She is uploading a video to YouTube.", turkish: "YouTube'a bir video yüklüyor." },
                { english: "Can you help me install this app?", turkish: "Bu uygulamayı kurmama yardım eder misin?" }
            ]
        },
        {
            title: "2. Altın Kural: Donanım ve İnternet",
            explanation: "Teknolojik aletler ve ağ bağlantısı ile ilgili terimler:\n• Device (Cihaz), Gadget (Küçük elektronik alet)\n• Wireless / Wifi (Kablosuz ağ)\n• Broadband / High-speed internet (Geniş bant / Hızlı internet)\n• Charger (Şarj aleti), Battery (Pil/Batarya)",
            examples: [
                { english: "My battery is low. I need a charger.", turkish: "Şarjım az. Şarj aletine ihtiyacım var." },
                { english: "Is there a free wifi connection here?", turkish: "Burada ücretsiz wifi bağlantısı var mı?" },
                { english: "Connect your device to the computer.", turkish: "Cihazınızı bilgisayara bağlayın." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Sorun Giderme",
            explanation: "Teknoloji hata verdiğinde kullanılan ifadeler:\n- It's frozen. (Dondu - ekran/bilgisayar.)\n- The app crashed. (Uygulama çöktü/kapandı.)\n- I've lost the connection. (Bağlantım koptu.)\n- Restart / Reboot the system. (Sistemi yeniden başlat.)",
            examples: [
                { english: "My computer keeps freezing.", turkish: "Bilgisayarım sürekli donuyor." },
                { english: "The server is down right now.", turkish: "Sunucu şu an kapalı/çalışmıyor." },
                { english: "Try to restart your router.", turkish: "Yönlendiricinizi (router) yeniden başlatmayı deneyin." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede ekran 'dondu' derken 'ice' gibi kelimeler düşünmeyin; İngilizcede 'freeze' (donmak) aynen kullanılır. Ayrıca 'Şarj etmek' derken 'fill' (doldurmak) değil, 'charge' kullanılır.",
            examples: [
                { english: "I need to charge my phone. (✅)", turkish: "Telefonumu şarj etmem lazım." },
                { english: "My laptop is broken. (✅)", turkish: "Dizüstü bilgisayarım bozuk/kırık." },
                { english: "Click on the link. (✅)", turkish: "Bağlantıya tıklayın." }
            ]
        }
    ],
    exercises: [
        { question: "I need to ___ this app to my phone.", options: ["download", "upload", "sync", "Both A and C"], correct: 3, explanation: "Uygulamayı indirmek (download) veya eşitlemek (sync) denilebilir." },
        { question: "Where is my ___? My phone is dying.", options: ["battery", "charger", "plug", "wire"], correct: 1, explanation: "Şarj aleti = charger." },
        { question: "The computer ___ and I lost my work.", options: ["crashed", "flew", "ran", "jumped"], correct: 0, explanation: "Sistemin/uygulamanın çökmesi = crashed." },
        { question: "You should ___ your password regularly.", options: ["change", "make", "take", "give"], correct: 0, explanation: "Şifre değiştirmek = change password." },
        { question: "Is your computer ___ to the internet?", options: ["joined", "connected", "attached", "fixed"], correct: 1, explanation: "Bağlı olmak = connected to." },
        { question: "I can't see the screen. It's ___.", options: ["cold", "frozen", "stopped", "dark"], correct: 1, explanation: "Ekranın donması = frozen." },
        { question: "Please ___ the button to start.", options: ["hit", "kick", "click", "press"], correct: 3, explanation: "Fiziksel bir düğmeye basmak = press (ekrandaki düğmeye basmak = click)." },
        { question: "I have a very slow ___ today.", options: ["connection", "relation", "joining", "meeting"], correct: 0, explanation: "İnternet bağlantısı = connection." },
        { question: "Did you ___ a backup of your files?", options: ["make", "do", "take", "give"], correct: 0, explanation: "Yedek almak = make a backup." },
        { question: "This ___ is very useful for traveling.", options: ["tool", "gadget", "machine", "part"], correct: 1, explanation: "Küçük teknolojik alet = gadget." }
    ]
};

// ===== UNIT 150: Social Media Language (COMPREHENSIVE) =====
const unit150Grammar: EnglishGrammarUnit = {
    unitId: 150,
    title: "Social Media Language (Sosyal Medya Dili - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Etkileşim Fiilleri",
            explanation: "Sosyal medyada yapılan eylemler artık günlük dilin bir parçası. Takip etmek (follow), beğenmek (like), paylaşmak (share) ve yorum yapmak (comment) en temel eylemlerdir.",
            examples: [
                { english: "Don't forget to follow me!", turkish: "Beni takip etmeyi unutmayın!" },
                { english: "He tagged me in a photo.", turkish: "Beni bir fotoğrafta etiketledi." },
                { english: "Can you share this post?", turkish: "Bu gönderiyi paylaşabilir misin?" }
            ]
        },
        {
            title: "2. Altın Kural: Kısaltmalar ve Terimler",
            explanation: "Sosyal medyada çok sık kullanılan bazı terimler ve kısaltmalar:\n• DM: Direct Message (Özel mesaj)\n• Feed: Akış (Gönderilerin göründüğü yer)\n• Story: Hikaye (24 saatlik paylaşımlar)\n• Follower / Following: Takipçi / Takip edilen",
            examples: [
                { english: "Send me a DM for details.", turkish: "Detaylar için bana DM (özel mesaj) gönderin." },
                { english: "I'm checking my Instagram feed.", turkish: "Instagram akışıma bakıyorum." },
                { english: "She has over 1 million followers.", turkish: "1 milyondan fazla takipçisi var." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Gizlilik ve Güvenlik",
            explanation: "Çevrimiçi ortamda kendinizi korumak için kullanılan ifadeler:\n- Set your profile to private. (Profilini gizliye al.)\n- Block someone. (Birini engelle.)\n- Report a post. (Bir gönderiyi şikayet et.)\n- Delete a comment. (Bir yorumu sil.)",
            examples: [
                { english: "I blocked him because he was rude.", turkish: "Kaba olduğu için onu engelledim." },
                { english: "Should I delete this photo?", turkish: "Bu fotoğrafı silmeli miyim?" },
                { english: "Her account is private.", turkish: "Onun hesabı gizli." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'post atmak' veya 'story atmak' deriz. İngilizcede 'throw' (atmak) kullanılmaz; 'post a story' (paylaşmak) veya 'upload a story' denir. Ayrıca 'takibe takip' gibi ifadeler yerine 'Follow for follow' kullanılır.",
            examples: [
                { english: "I posted a new story. (✅)", turkish: "Yeni bir hikaye paylaştım." },
                { english: "Who unfollowed me? (✅)", turkish: "Beni takibi kim bıraktı?" },
                { english: "Turn on the notifications. (✅)", turkish: "Bildirimleri aç." }
            ]
        }
    ],
    exercises: [
        { question: "I ___ a new photo on Instagram today.", options: ["shared", "posted", "uploaded", "All of above"], correct: 3, explanation: "Fotoğraf paylaşmak için hepsi kullanılabilir." },
        { question: "Please ___ me in the comments.", options: ["tag", "label", "mark", "name"], correct: 0, explanation: "Birini etiketlemek = tag." },
        { question: "I sent you a ___. Check your inbox.", options: ["DM", "mail", "letter", "note"], correct: 0, explanation: "Sosyal medya özel mesajı = DM (Direct Message)." },
        { question: "He has a lot of ___ on TikTok.", options: ["following", "followers", "follows", "followings"], correct: 1, explanation: "Takipçiler = followers." },
        { question: "You should ___ accounts you don't like.", options: ["open", "block", "close", "see"], correct: 1, explanation: "Engellemek = block." },
        { question: "I like scrolling through my ___.", options: ["food", "feed", "feel", "feet"], correct: 1, explanation: "Sosyal medya akışı = feed." },
        { question: "Don't forget to ___ the bell icon.", options: ["push", "click", "hit", "Both B and C"], correct: 3, explanation: "Bildirim ziline basmak/tıklamak = click/hit." },
        { question: "She ___ me last week.", options: ["unfollowed", "nonfollowed", "notfollowed", "disfollowed"], correct: 0, explanation: "Takibi bırakmak = unfollow." },
        { question: "My profile is ___. Only friends can see it.", options: ["open", "public", "private", "hidden"], correct: 2, explanation: "Gizli profil = private profile." },
        { question: "This video has 2 million ___.", options: ["watches", "looks", "views", "eyes"], correct: 2, explanation: "İzlenme sayısı = views." }
    ]
};

// ===== UNIT 151: Home and Moving - There is/are (COMPREHENSIVE) =====
const unit151Grammar: EnglishGrammarUnit = {
    unitId: 151,
    title: "Home and Moving (Ev ve Taşınma - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Varlık Bildirme (There is/are)",
            explanation: "Bir yerde bir şeyin 'var' olduğunu söylerken 'There is' (Tekil) veya 'There are' (Çoğul) kalıbını kullanırız. Bu yapı genellikle yeni bir evi veya odayı tanıtırken kullanılır.",
            examples: [
                { english: "There is a large sofa in the living room.", turkish: "Oturma odasında büyük bir kanepe var." },
                { english: "There are two bedrooms upstairs.", turkish: "Üst katta iki yatak odası var." },
                { english: "Is there a balcony?", turkish: "Balkon var mı?" }
            ]
        },
        {
            title: "2. Altın Kural: Evin Bölümleri ve Eşyalar",
            explanation: "Evi tanıtırken temel kelimeler:\n• Living room (Oturma odası), Kitchen (Mutfak), Bathroom (Banyo)\n• Bedroom (Yatak odası), Hall (Antre/Koridor), Balcony (Balkon)\n• Furniture (Mobilya - Dikkat! Sayılamaz)\n• Fridge (Buzdolabı), Cooker (Ocak), Wardrobe (Gardırop)",
            examples: [
                { english: "The kitchen is very modern.", turkish: "Mutfak çok modern." },
                { english: "I need to buy a new wardrobe.", turkish: "Yeni bir gardırop almam lazım." },
                { english: "We are moving into a new apartment.", turkish: "Yeni bir daireye taşınıyoruz." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Taşınma İşlemleri",
            explanation: "Taşınırken kullanılan kalıplar:\n- Move in / Move out (Taşınmak / Boşaltmak)\n- For rent / For sale (Kiralık / Satılık)\n- Fully furnished (Tam eşyalı)\n- Rent a truck (Kamyon kiralamak)\n- Pack boxes (Kolileri paketlemek)",
            examples: [
                { english: "We are moving out next Friday.", turkish: "Gelecek Cuma taşınıyoruz (evden çıkıyoruz)." },
                { english: "Is the apartment furnished?", turkish: "Daire eşyalı mı?" },
                { english: "I need some cardboard boxes.", turkish: "Biraz karton koliye ihtiyacım var." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'Mobilyalar' (plural) deriz. İngilizcede 'Furniture' her zaman TEKİLdir, asla 'furnitures' denmez. Ayrıca varlık bildirirken 'It has' yerine 'There is' kullanmak daha doğal bir İngilizcedir.",
            examples: [
                { english: "There is some beautiful furniture. (✅)", turkish: "Bazı güzel mobilyalar var." },
                { english: "There is no central heating. (✅)", turkish: "Merkezi ısıtma yok." },
                { english: "I moved to London. (✅)", turkish: "Londra'ya taşındım." }
            ]
        }
    ],
    exercises: [
        { question: "There ___ a small table in the hall.", options: ["is", "are", "be", "am"], correct: 0, explanation: "Tekil nesneler için (a table) 'there is' kullanılır." },
        { question: "There ___ three chairs in the kitchen.", options: ["is", "are", "be", "have"], correct: 1, explanation: "Çoğul nesneler için 'there are' kullanılır." },
        { question: "I like all the ___ in this shop.", options: ["furniture", "furnitures", "furnituring", "furniture's"], correct: 0, explanation: "Furniture her zaman sayılamaz ve tekildir." },
        { question: "We are ___ into our new house tomorrow.", options: ["moving", "going", "coming", "staying"], correct: 0, explanation: "Taşınmak = moving (into)." },
        { question: "Is your apartment ___ or unfurnished?", options: ["filled", "tabled", "furnished", "homed"], correct: 2, explanation: "Eşyalı = furnished." },
        { question: "There ___ any pictures on the wall.", options: ["isn't", "aren't", "not", "no"], correct: 1, explanation: "Çoğul olumsuz: There aren't any..." },
        { question: "Where is the ___? I want to wash my hands.", options: ["kitchen", "bedroom", "bathroom", "balcony"], correct: 2, explanation: "Banyo = bathroom." },
        { question: "___ there a garage in the building?", options: ["Is", "Are", "Do", "Have"], correct: 0, explanation: "Soru: Is there...?" },
        { question: "I'm looking for an apartment ___ rent.", options: ["for", "to", "at", "in"], correct: 0, explanation: "Kiralık = for rent." },
        { question: "He lives ___ the ground floor.", options: ["at", "in", "on", "to"], correct: 2, explanation: "Katlar için 'on' edatı kullanılır: on the ground floor." }
    ]
};

// ===== UNIT 152: Environment - First Conditional (COMPREHENSIVE) =====
const unit152Grammar: EnglishGrammarUnit = {
    unitId: 152,
    title: "Environment - First Conditional (Birinci Koşul - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Gerçekçi İhtimaller",
            explanation: "First Conditional, gelecekte olması muhtemel, gerçekçi bir şartı ve onun sonucunu anlatır. 'Eğer bu olursa, şu olacak' mantığıdır. Özellikle çevre, hava durumu ve günlük planlar hakkında konuşurken sıkça kullanılır.",
            examples: [
                { english: "If it rains, I will stay at home.", turkish: "Eğer yağmur yağarsa, evde kalacağım." },
                { english: "If we recycle more, we will help the planet.", turkish: "Eğer daha fazla geri dönüşüm yaparsak, gezegene yardım edeceğiz." },
                { english: "If you don't hurry, you will miss the bus.", turkish: "Eğer acele etmezsen, otobüsü kaçıracaksın." }
            ]
        },
        {
            title: "2. Altın Kural: If + Geniş Zaman, Will + Fiil",
            explanation: "Formülümüz iki kısımdan oluşur:\n• Şart Kısmı: If + Present Simple (Geniş Zaman)\n• Sonuç Kısmı: Will + Yalın Fiil\nNot: Cümleye 'If' ile başlarsanız araya virgül koyarsınız. Sonuç ile başlarsanız virgüle gerek yoktur.",
            examples: [
                { english: "If the sun shines, we'll go for a walk.", turkish: "Güneş açarsa, yürüyüşe çıkacağız." },
                { english: "I will call you if I have time.", turkish: "Vaktim olursa seni arayacağım." },
                { english: "They won't pass if they don't study.", turkish: "Çalışmazlarsa geçemeyecekler." }
            ]
        },
        {
            title: "3. Önemli İpuçları: 'Unless' ve Diğer Yardımcılar",
            explanation: "Şart cümlelerinde 'If not' yerine bazen 'Unless' (-medikçe / -mazsa) kullanılır. Ayrıca sonuç kısmında sadece 'will' değil, 'can' veya 'may' gibi diğer yardımcılar da kullanılabilir.",
            examples: [
                { english: "Unless we protect the forests, animals will lose their homes.", turkish: "Ormanları korumazsak, hayvanlar yuvalarını kaybedecek." },
                { english: "If you finish early, you can go out.", turkish: "Erken bitirirsen dışarı çıkabilirsin." },
                { english: "If it's hot, we might go to the beach.", turkish: "Hava sıcak olursa plaja gidebiliriz." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "En büyük hata, 'If'li tarafa da 'will' koymaktır. Türkçede 'Eğer yağmur yağacaksa' gibi düşündüğümüz için 'If it WILL rain' demeye meyilliyiz. \n❌ If it will rain... (YANLIŞ) → ✅ If it rains... (DOĞRU)\nUnutmayın: If'li kısım her zaman Geniş Zaman!",
            examples: [
                { english: "If she comes, I'll be happy. (✅)", turkish: "Eğer gelirse (geldiği takdirde), mutlu olacağım." },
                { english: "If I find your keys, I'll tell you. (✅)", turkish: "Anahtarlarını bulursam sana söyleyeceğim." },
                { english: "Unless it stops raining, we can't play. (✅)", turkish: "Yağmur durmadıkça oynayamayız." }
            ]
        }
    ],
    exercises: [
        { question: "If I ___ (be) late, please don't wait for me.", options: ["will be", "am", "was", "be"], correct: 1, explanation: "If kısmında Present Simple (am) kullanılır." },
        { question: "We ___ (help) the environment if we use less plastic.", options: ["help", "helps", "will help", "helping"], correct: 2, explanation: "Sonuç kısmında 'will + fiil' kullanılır." },
        { question: "If it ___ (snow) tomorrow, we ___ go skiing.", options: ["snows / will", "will snow / will", "snow / will", "snows / are"], correct: 0, explanation: "If + snows (Geniş), Sonuç + will." },
        { question: "You won't pass the test ___ you study hard.", options: ["if", "unless", "when", "but"], correct: 1, explanation: "Unless = ... yapmadıkça (-mazsan)." },
        { question: "If she ___ (call) me, I will tell her the news.", options: ["call", "calls", "will call", "calling"], correct: 1, explanation: "She için Geniş Zaman: calls." },
        { question: "We won't go out if it ___ (rain) heavily.", options: ["rain", "rains", "will rain", "raining"], correct: 1, explanation: "İf'den sonra her zaman Geniş Zaman." },
        { question: "I'll be surprised if they ___ (not / come) to the party.", options: ["won't come", "not come", "don't come", "doesn't come"], correct: 2, explanation: "They için olumsuz geniş zaman: don't come." },
        { question: "If you ___ (eat) all that cake, you ___ feel sick.", options: ["eat / will", "will eat / will", "eats / will", "eat / are"], correct: 0, explanation: "If + eat, will + feel." },
        { question: "___ we protect the oceans, the fish will die.", options: ["If", "When", "Unless", "So"], correct: 2, explanation: "Okyanusları korumazsak (Unless) balıklar ölecek." },
        { question: "What ___ you do if you miss the train?", options: ["do", "are", "will", "going"], correct: 2, explanation: "Sonuç sorusu: What will you do...?" }
    ]
};

// ===== UNIT 153: News - Passive Voice (COMPREHENSIVE) =====
const unit153Grammar: EnglishGrammarUnit = {
    unitId: 153,
    title: "News - Passive Voice (Edilgen Yapı - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Eylemi Kimin Yaptığı Değil, Ne Yapıldığı Önemli",
            explanation: "Edilgen yapı (Passive Voice), eylemi yapan kişinin (öznenin) kim olduğundan ziyade, eylemin kendisine veya eylemden etkilenen nesneye odaklandığımızda kullanılır. 'Ali camı kırdı' yerine 'Cam kırıldı' demek gibidir. Haberlerde, bilimsel raporlarda ve resmi dilde çok yaygındır.",
            examples: [
                { english: "Thousands of cars are produced every day.", turkish: "Her gün binlerce araba üretiliyor." },
                { english: "The criminal was caught by the police.", turkish: "Suçlu polis tarafından yakalandı." },
                { english: "Lunch is served at 12:00.", turkish: "Öğle yemeği 12:00'de servis edilir." }
            ]
        },
        {
            title: "2. Altın Kural: Be + Fiilin 3. Hali",
            explanation: "Edilgen yapının ana formülü:\n• Özne + be (am/is/are/was/were) + Fiilin 3. Hali (Past Participle)\nEylemi yapanı belirtmek istiyorsak cümlenin sonuna 'by' ekleriz.",
            examples: [
                { english: "Spanish is spoken in many countries.", turkish: "İspanyolca pek çok ülkede konuşulur." },
                { english: "The house was built in 1990.", turkish: "Ev 1990'da inşa edildi." },
                { english: "These photos were taken by my father.", turkish: "Bu fotoğraflar babam tarafından çekildi." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Haber Dili ve Nesneler",
            explanation: "Haberlerde olaylar genellikle şu şekilde verilir:\n- The building was destroyed by the fire. (Bina yangınla yok oldu.)\n- A new bridge will be built next year. (Gelecek yıl yeni bir köprü yapılacak.)\n- Many people were injured in the accident. (Kazada pek çok kişi yaralandı.)",
            examples: [
                { english: "The bank was robbed last night.", turkish: "Banka dün gece soyuldu." },
                { english: "Hamlet was written by Shakespeare.", turkish: "Hamlet, Shakespeare tarafından yazıldı." },
                { english: "Coffee is grown in Brazil.", turkish: "Kahve Brezilya'da yetiştirilir." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede edilgenliği fiile eklediğimiz '-il, -in' ekleriyle yaparız (yap-ıldı, sev-ildi). İngilizcede ise bunu 'is/was' yardımıyla yaparız. Fiilin 3. halini (irregular ise 3. sürüm, regular ise -ed) kullanmayı asla unutmayın!",
            examples: [
                { english: "It was stolen. (✅)", turkish: "Çalındı." },
                { english: "The room is cleaned every day. (✅)", turkish: "Oda her gün temizlenir." },
                { english: "I was invited to the party. (✅)", turkish: "Partiye davet edildim." }
            ]
        }
    ],
    exercises: [
        { question: "Rice ___ (grow) in many Asian countries.", options: ["is grown", "is grow", "grows", "is growing"], correct: 0, explanation: "Geniş zaman edilgen: am/is/are + V3." },
        { question: "The window ___ (break) by a little boy yesterday.", options: ["is broken", "was broken", "broke", "was broke"], correct: 1, explanation: "Geçmiş zaman edilgen: was/were + V3." },
        { question: "These letters ___ (write) many years ago.", options: ["are written", "was written", "were written", "wrote"], correct: 2, explanation: "Çoğul geçmiş zaman edilgen: were written." },
        { question: "The Mona Lisa ___ (paint) by Leonardo da Vinci.", options: ["is painted", "was painted", "painted", "was painting"], correct: 1, explanation: "Geçmişte tamamlanmış eylem." },
        { question: "Our office ___ (clean) every evening.", options: ["is cleaned", "is cleaning", "cleans", "was cleaned"], correct: 0, explanation: "Düzenli yapılan eylem: is cleaned." },
        { question: "The thief ___ (catch) by the police two hours ago.", options: ["was catch", "was caught", "catches", "is caught"], correct: 1, explanation: "Catch fiilinin 3. hali 'caught'dır." },
        { question: "Paper ___ (make) from wood.", options: ["makes", "is make", "is made", "is making"], correct: 2, explanation: "Genel gerçek: is made." },
        { question: "The bridge ___ (destroy) in the storm last night.", options: ["is destroyed", "was destroyed", "destroys", "was destroy"], correct: 1, explanation: "Geçmişte tekil: was destroyed." },
        { question: "I ___ (not / invite) to the meeting.", options: ["am not invited", "wasn't invite", "don't invited", "not invited"], correct: 0, explanation: "Olumsuz edilgen: am not + V3." },
        { question: "Who was this book ___ by?", options: ["write", "wrote", "written", "writing"], correct: 2, explanation: "Edilgen soruda fiil 3. haldedir (written)." }
    ]
};

// ===== UNIT 154: Culture - Used to (COMPREHENSIVE) =====
const unit154Grammar: EnglishGrammarUnit = {
    unitId: 154,
    title: "Culture - Used to (Eski Alışkanlıklar - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Artık Yapılmayan Eskiler",
            explanation: "'Used to' kalıbı, geçmişte düzenli olarak yaptığımız ama artık yapmadığımız alışkanlıkları anlatmak için kullanılır. Türkçedeki 'eskiden yapardım (ama şimdi yapmıyorum)' ifadesinin tam karşılığıdır.",
            examples: [
                { english: "I used to play the guitar when I was a child.", turkish: "Çocukken gitar çalardım." },
                { english: "She used to have long hair.", turkish: "Onun eskiden uzun saçları vardı." },
                { english: "We used to live in a small village.", turkish: "Eskiden küçük bir köyde yaşardık." }
            ]
        },
        {
            title: "2. Altın Kural: Used to + Yalın Fiil",
            explanation: "Formülümüz çok basittir: Her özne ile 'used to' kullanılır ve arkasından gelen fiil hiçbir ek almadan yalın halde gelir.",
            examples: [
                { english: "I used to smoke, but I quit.", turkish: "Eskiden sigara içerdim ama bıraktım." },
                { english: "He used to be very shy.", turkish: "Eskiden çok utangaçtı." },
                { english: "They used to swim in this river.", turkish: "Bu nehirde yüzerlerdi." }
            ]
        },
        {
            title: "3. Olumsuz ve Soru Formu: 'D' Harfine Dikkat!",
            explanation: "Olumsuz yapmak için 'didn't use to' kullanılır. Soru sormak için 'Did... use to...?' yapısı tercih edilir.\nÖNEMLİ: 'Did' veya 'Didn't' geldiğinde 'used' kelimesindeki 'd' harfi düşer, 'use' haline döner!",
            examples: [
                { english: "I didn't use to like vegetables.", turkish: "Eskiden sebze sevmezdim." },
                { english: "Did you use to work here?", turkish: "Eskiden burada mı çalışırdın?" },
                { english: "She didn't use to exercise.", turkish: "Eskiden egzersiz yapmazdı." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "En büyük hata 'Used to' ile 'Be used to' (alışkın olmak) kalıplarını karıştırmaktır. A2 seviyesinde biz sadece geçmiş alışkanlıkları öğreniyoruz. Ayrıca 'eskiden yapardım' demek için Present Simple (Geniş zaman) kullanılmaz.\n❌ I use to play. (Hala yapıyorsan: I play)\n✅ I used to play. (Eskiden yapardıysan)",
            examples: [
                { english: "I used to go there every day. (✅)", turkish: "Oraya her gün giderdim." },
                { english: "Did you use to play football? (✅)", turkish: "Eskiden futbol oynar mıydın?" },
                { english: "I didn't use to drink coffee. (✅)", turkish: "Eskiden kahve içmezdim." }
            ]
        }
    ],
    exercises: [
        { question: "I ___ (live) in Paris, but now I live in London.", options: ["use to live", "used to live", "lived to live", "used and live"], correct: 1, explanation: "Geçmiş alışkanlık = used to." },
        { question: "She ___ (not / like) Chinese food, but she loves it now.", options: ["didn't used to", "didn't use to", "not used to", "didn't liked"], correct: 1, explanation: "Olumsuzda didn't + use (d yok) kullanılır." },
        { question: "___ you ___ (have) a dog when you were young?", options: ["Did / used to", "Do / use to", "Did / use to", "Were / used to"], correct: 2, explanation: "Soru: Did ... use to...?" },
        { question: "He ___ be very fat, but now he is thin.", options: ["used to", "use to", "is", "was"], correct: 0, explanation: "Eskiden öyleydi durumu." },
        { question: "I ___ have much money, but now I'm successful.", options: ["not used to", "didn't used to", "didn't use to", "haven't"], correct: 2, explanation: "Olumsuz kullanılan kalıp." },
        { question: "Where ___ you ___ go on holiday as a child?", options: ["did / used to", "did / use to", "use to / did", "do / use to"], correct: 1, explanation: "Where did you use to...?" },
        { question: "There ___ be a cinema here, but it closed.", options: ["is", "was", "used to", "used"], correct: 2, explanation: "Eskiden burada bir sinema vardı." },
        { question: "She ___ (play) the violin professionally.", options: ["use to play", "used to play", "plays", "playing"], correct: 1, explanation: "Used to + V1." },
        { question: "Did you ___ have long hair?", options: ["used to", "use to", "used", "use"], correct: 1, explanation: "Soruda d düşer." },
        { question: "I didn't ___ study hard at school.", options: ["used to", "use to", "used", "use"], correct: 1, explanation: "Olumsuzda d düşer." }
    ]
};

// ===== UNIT 155: Present Perfect Tense (COMPREHENSIVE) =====
const unit155Grammar: EnglishGrammarUnit = {
    unitId: 155,
    title: "Present Perfect Tense (Yakın Geçmiş Zaman - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Belirsiz Zaman ve Deneyimler",
            explanation: "Present Perfect, geçmişte olmuş ama tam olarak ne zaman olduğu önemli olmayan eylemleri veya hala etkisini sürdüren durumları anlatır. En çok hayat deneyimlerimizden (Hiç gittin mi? Hiç yedin mi?) bahsederken kullanılır.",
            examples: [
                { english: "I have visited London three times.", turkish: "Londra'yı üç kez ziyaret ettim. (Zamanı belli değil, deneyim.)" },
                { english: "She has lost her keys.", turkish: "Anahtarlarını kaybetti. (Hala kayıp, etkisi sürüyor.)" },
                { english: "Have you ever tried sushi?", turkish: "Hiç suşi denedin mi?" }
            ]
        },
        {
            title: "2. Altın Kural: Have/Has + Fiilin 3. Hali",
            explanation: "Formülümüz özneye göre değişir:\n• I / You / We / They + HAVE + V3\n• He / She / It + HAS + V3\nOlumsuzda 'haven't/hasn't', soruda ise 'Have/Has' başa gelir.",
            examples: [
                { english: "We have finished our homework.", turkish: "Ödevimizi bitirdik." },
                { english: "He has gone to Italy.", turkish: "O İtalya'ya gitti." },
                { english: "They haven't seen this movie before.", turkish: "Bu filmi daha önce görmediler." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Zaman Zarfları (Ever, Never, Just, Yet, Already)",
            explanation: "Bu tensin olmazsa olmaz yardımcıları şunlardır:\n- Ever: Hiç (sorularda kullanılır)\n- Never: Asla (olumlu yapılı ama olumsuz anlamlı)\n- Just: Az önce (yeni bitmiş eylemler)\n- Already: Çoktan / Zaten (beklenenden önce bitmiş)\n- Yet: Henüz (olumsuz ve sorularda, cümlenin sonunda)",
            examples: [
                { english: "I have just arrived home.", turkish: "Eve az önce vardım." },
                { english: "She hasn't finished the report yet.", turkish: "Raporu henüz bitirmedi." },
                { english: "I have already seen this film.", turkish: "Bu filmi zaten izledim." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede 'Dün gittim' ile 'Hayatımda hiç gittim' ifadeleri aynı fiil çekimiyle (gittim) söylenebilir. Ancak İngilizcede zaman belliyse (yesterday, last week) Past Simple kullanılır, zaman belli değilse Present Perfect kullanılır.\n❌ I have gone yesterday. (YANLIŞ) → ✅ I went yesterday. (DOĞRU)\n❌ I saw Paris twice. (Eksik) → ✅ I have seen Paris twice. (DOĞRU)",
            examples: [
                { english: "I have never been to China. (✅)", turkish: "Çin'de hiç bulunmadım." },
                { english: "Have you reached him yet? (✅)", turkish: "Ona henüz ulaştın mı?" },
                { english: "She has lived here for ten years. (✅)", turkish: "On yıldır burada yaşıyor. (Hala yaşıyor.)" }
            ]
        }
    ],
    exercises: [
        { question: "I ___ (see) this movie three times.", options: ["saw", "have seen", "has seen", "seeing"], correct: 1, explanation: "Deneyimlerden bahsederken Present Perfect (have + V3) kullanılır." },
        { question: "___ you ever ___ (eat) Mexican food?", options: ["Have / eat", "Did / eat", "Have / eaten", "Has / eaten"], correct: 2, explanation: "Ever'lı sorularda Have + V3 kullanılır." },
        { question: "She ___ (not / finish) her homework yet.", options: ["hasn't finish", "haven't finished", "hasn't finished", "didn't finish"], correct: 2, explanation: "Yet ile olumsuz perfect: hasn't + V3." },
        { question: "We ___ (just / arrive) at the station.", options: ["have just arrive", "has just arrived", "have just arrived", "just arrived"], correct: 2, explanation: "Just ile have + V3." },
        { question: "He ___ (never / be) to America.", options: ["has never be", "have never been", "has never been", "never was"], correct: 2, explanation: "He has never been..." },
        { question: "I ___ (already / buy) the tickets.", options: ["have already bought", "has already bought", "already bought", "have already buy"], correct: 0, explanation: "Buy fiilinin 3. hali bought'dur." },
        { question: "They ___ (live) in London since 2010.", options: ["lived", "have lived", "has lived", "lives"], correct: 1, explanation: "Geçmişten günümüze devam eden durum: have lived." },
        { question: "___ your sister ___ (call) you today?", options: ["Did / call", "Have / called", "Has / called", "Has / call"], correct: 2, explanation: "Sister (she) olduğu için Has kullanılır." },
        { question: "I ___ (lose) my umbrella. Can I borrow yours?", options: ["lost", "have lost", "has lost", "lose"], correct: 1, explanation: "Etkisi süren eylem: have lost." },
        { question: "I haven't seen him ___ last Monday.", options: ["for", "since", "yet", "already"], correct: 1, explanation: "Belirli bir noktadan beri = since." }
    ]
};

// ===== UNIT 156: Comparatives (The Better Option - COMPREHENSIVE) =====
const unit156Grammar: EnglishGrammarUnit = {
    unitId: 156,
    title: "Comparatives (Karşılaştırma - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: İki Şeyi Kıyaslamak",
            explanation: "İki insanı, iki şehri veya iki nesneyi karşılaştırırken Comparative yapısını kullanırız. 'Daha ...' anlamına gelir. Karşılaştırma yaparken cümlede genellikle 'than' (-den/-dan) kelimesi de bulunur.",
            examples: [
                { english: "Istanbul is bigger than Ankara.", turkish: "İstanbul, Ankara'dan daha büyüktür." },
                { english: "I am taller than my brother.", turkish: "Ben erkek kardeşimden daha uzunum." },
                { english: "This phone is more expensive than that one.", turkish: "Bu telefon şundan daha pahalıdır." }
            ]
        },
        {
            title: "2. Altın Kural: Kısa Sıfatlar (-er) x Uzun Sıfatlar (More)",
            explanation: "Sıfatın uzunluğuna göre kural değişir:\n• Kısa Sıfatlar (1-2 hece): Sıfata -er takısı eklenir (Fast -> Faster, Small -> Smaller).\n• Uzun Sıfatlar (3+ hece): Sıfatın başına 'More' gelir (Beautiful -> More beautiful).\n• Sonu 'y' ile bitenler: y düşer -ier gelir (Happy -> Happier).",
            examples: [
                { english: "Cheetahs are faster than lions.", turkish: "Çitalar aslanlardan daha hızlıdır." },
                { english: "English is easier than Chinese.", turkish: "İngilizce Çinceden daha kolaydır." },
                { english: "This book is more interesting than the movie.", turkish: "Bu kitap filmden daha ilginçtir." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Düzensiz Sıfatlar",
            explanation: "Bazı sıfatlar kurallara uymaz ve tamamen değişir. Bunları ezberlemelisiniz:\n- Good -> Better (Daha iyi)\n- Bad -> Worse (Daha kötü)\n- Far -> Farther / Further (Daha uzak)\n- Little -> Less (Daha az)",
            examples: [
                { english: "My English is better now.", turkish: "İngilizcem şimdi daha iyi." },
                { english: "The weather is worse today.", turkish: "Hava bugün daha kötü." },
                { english: "I have less money than before.", turkish: "Eskisinden daha az param var." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "En büyük hata hem 'more' kullanıp hem de '-er' takısı eklemektir. Sadece biri seçilmelidir! \n❌ More bigger (YANLIŞ) → ✅ Bigger (DOĞRU)\n❌ More good (YANLIŞ) → ✅ Better (DOĞRU)\nAyrıca karşılaştırma kelimesi 'than'dir; 'then' (sonra) ile karıştırmayın.",
            examples: [
                { english: "Health is more important than money. (✅)", turkish: "Sağlık paradan daha önemlidir." },
                { english: "It is hotter today than yesterday. (✅)", turkish: "Bugün düne göre daha sıcak." },
                { english: "You are more careful than me. (✅)", turkish: "Benden daha dikkatlisin." }
            ]
        }
    ],
    exercises: [
        { question: "An elephant is ___ (big) than a dog.", options: ["bigger", "more big", "biggest", "biger"], correct: 0, explanation: "Big kısa sıfattır (sessiz+sesli+sessiz olduğu için g çift yazılır)." },
        { question: "This exercise is ___ (easy) than the last one.", options: ["easyer", "more easy", "easier", "most easy"], correct: 2, explanation: "y ile bitenlerde y düşer, -ier gelir." },
        { question: "A laptop is ___ (expensive) than a mouse.", options: ["expensiver", "more expensive", "most expensive", "expensive"], correct: 1, explanation: "Uzun sıfatlar 'more' alır." },
        { question: "Your car is ___ (good) than mine.", options: ["gooder", "more good", "better", "best"], correct: 2, explanation: "Good düzensizdir, better olur." },
        { question: "I feel ___ (bad) today than yesterday.", options: ["badder", "worse", "worst", "more bad"], correct: 1, explanation: "Bad düzensizdir, worse olur." },
        { question: "Russia is ___ (large) than Turkey.", options: ["larger", "more large", "largest", "largier"], correct: 0, explanation: "E ile bitenlere sadece -r gelir." },
        { question: "He is ___ (intelligent) than his brother.", options: ["intelligenter", "more intelligent", "most intelligent", "intelligent"], correct: 1, explanation: "Uzun sıfat." },
        { question: "The Nile is ___ (long) than the Amazon.", options: ["longer", "more long", "longier", "longest"], correct: 0, explanation: "Kısa sıfat." },
        { question: "It is ___ (hot) in summer than in winter.", options: ["hoter", "hotter", "more hot", "hottest"], correct: 1, explanation: "Hot -> Hotter." },
        { question: "History is ___ (interesting) than math.", options: ["interester", "more interesting", "most interesting", "interesting"], correct: 1, explanation: "Uzun sıfat." }
    ]
};

// ===== UNIT 157: Superlatives (The Best - COMPREHENSIVE) =====
const unit157Grammar: EnglishGrammarUnit = {
    unitId: 157,
    title: "Superlatives (En Üstünlük - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Grubun Birincisi",
            explanation: "Superlatives, bir grubu veya dünyadaki her şeyi kıyaslarken 'en ...' olanı belirtmek için kullanılır. Sınıfın 'en uzun'u, dünyanın 'en büyük' dağı gibi. Bu yapıda sıfatın önüne mutlaka 'THE' gelir.",
            examples: [
                { english: "Mount Everest is the highest mountain.", turkish: "Everest Dağı en yüksek dağdır." },
                { english: "She is the best student in the class.", turkish: "O, sınıftaki en iyi öğrencidir." },
                { english: "This is the most expensive car in the world.", turkish: "Bu dünyadaki en pahalı arabadır." }
            ]
        },
        {
            title: "2. Altın Kural: The -est vs The Most",
            explanation: "Kural yine sıfatın uzunluğuna dayanır:\n• Kısa Sıfatlar: the + Sıfat + -est (Fast -> the fastest).\n• Uzun Sıfatlar: the most + Sıfat (Beautiful -> the most beautiful).\n• Sonu 'y' ile bitenler: the + Sıfat + -iest (Funny -> the funniest).",
            examples: [
                { english: "Jupiter is the biggest planet.", turkish: "Jüpiter en büyük gezegendir." },
                { english: "The blue whale is the largest animal.", turkish: "Mavi balina en büyük hayvandır." },
                { english: "That was the most boring movie ever.", turkish: "O şimdiye kadarki en sıkıcı filmdi." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Düzensiz Superlatives",
            explanation: "Tıpkı comparatives gibi, bazı sıfatlar yine değişir:\n- Good -> the best (En iyi)\n- Bad -> the worst (En kötü)\n- Far -> the farthest / furthest (En uzak)\n- Little -> the least (En az)",
            examples: [
                { english: "It was the best day of my life.", turkish: "Hayatımın en iyi günüydü." },
                { english: "This is the worst pizza I've ever eaten.", turkish: "Bu şimdiye kadar yediğim en kötü pizza." },
                { english: "What is the most popular sport in Turkey?", turkish: "Türkiye'deki en popüler spor nedir?" }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "En sık yapılan hata 'THE' kelimesini unutmaktır. Süperlatif cümlelerde 'en' demek için 'the' şarttır. Ayrıca '-est' takısı alan sıfata 'most' koymayın.\n❌ He is most tall. (YANLIŞ) → ✅ He is the tallest. (DOĞRU)\n❌ The most fastest (YANLIŞ) → ✅ The fastest (DOĞRU)",
            examples: [
                { english: "The Nile is the longest river. (✅)", turkish: "Nil en uzun nehirdir." },
                { english: "Who is the richest person? (✅)", turkish: "En zengin kişi kim?" },
                { english: "It's the most difficult exam. (✅)", turkish: "En zor sınav bu." }
            ]
        }
    ],
    exercises: [
        { question: "Russia is ___ (large) country in the world.", options: ["the largest", "the most large", "the larger", "largest"], correct: 0, explanation: "En büyük derken 'the ...-est' kullanılır." },
        { question: "This is ___ (bad) day of the week.", options: ["the baddest", "the worse", "the worst", "most bad"], correct: 2, explanation: "Bad düzensizdir, the worst olur." },
        { question: "She is ___ (careful) driver I know.", options: ["the carefulest", "the most careful", "most careful", "the more careful"], correct: 1, explanation: "Uzun sıfatlar 'the most' alır." },
        { question: "Who is ___ (tall) person in your family?", options: ["the tallest", "tallest", "the most tall", "the taller"], correct: 0, explanation: "Kısa sıfata -est eklenir ve 'the' unutulmaz." },
        { question: "This is ___ (delicious) cake I've ever tasted.", options: ["the most delicious", "deliciousest", "most delicious", "the deliciousest"], correct: 0, explanation: "Uzun sıfat." },
        { question: "Monday is ___ (busy) day for me.", options: ["the busyest", "the most busy", "the busiest", "most busy"], correct: 2, explanation: "y i'ye dönüşür." },
        { question: "Which is ___ (hot) month of the year?", options: ["the hottest", "hottest", "the most hot", "the more hot"], correct: 0, explanation: "Hot -> the hottest." },
        { question: "He is ___ (good) football player in the team.", options: ["the goodest", "the better", "the best", "best"], correct: 2, explanation: "Good -> the best." },
        { question: "The Burj Khalifa is ___ (high) building in the world.", options: ["the highest", "highest", "the most high", "the higher"], correct: 0, explanation: "Kısa sıfat." },
        { question: "This is ___ (expensive) hotel in the city.", options: ["expensiveest", "most expensive", "the most expensive", "the expensiver"], correct: 2, explanation: "Uzun sıfat." }
    ]
};

// ===== UNIT 158: Modal Verbs (Can, Could, Should, Must) (COMPREHENSIVE) =====
const unit158Grammar: EnglishGrammarUnit = {
    unitId: 158,
    title: "Modal Verbs (Yardımcı Fiiller - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Yetenek, Tavsiye ve Zorunluluk",
            explanation: "Modal fiiller, ana fiilin anlamını destekleyen yardımcı fiillerdir. Cümleye 'yetenek', 'izin', 'tavsiye' veya 'zorunluluk' gibi anlamlar katarlar. En önemli özellikleri, her özne ile aynı kalmaları ve ana fiilin asla ek almamasıdır.",
            examples: [
                { english: "I can swim.", turkish: "Yüzebilirim. (Yetenek)" },
                { english: "You should rest.", turkish: "Dinlenmelisin. (Tavsiye)" },
                { english: "He must study.", turkish: "Çalışmalı. (Zorunluluk)" }
            ]
        },
        {
            title: "2. Altın Kural: Modal + Fiilin Yalın Hali",
            explanation: "Modal fiillerin kullanımı çok sabittir:\n• Can: Yetenek / İzin (I can go).\n• Could: Geçmiş yetenek / Kibar rica (Could you help me?).\n• Should: Tavsiye / Öneri (You should eat more vegetables).\n• Must: Güçlü zorunluluk (You must wear a seatbelt).\n• Might: Zayıf ihtimal (It might rain today).",
            examples: [
                { english: "Can I open the window?", turkish: "Pencereyi açabilir miyim?" },
                { english: "You should see a doctor.", turkish: "Bir doktora görünmelisin." },
                { english: "They must be quiet in the library.", turkish: "Kütüphanede sessiz olmalılar." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Olumsuz ve Sorular",
            explanation: "Olumsuz yaparken sonuna 'not' eklenir (can't, shouldn't, mustn't). Soru yaparken modal başa gelir. 'Doesn't' veya 'Don't' gibi yardımcılar modal cümlelerinde KULLANILMAZ.",
            examples: [
                { english: "You mustn't smoke here.", turkish: "Burada sigara içmemelisin (yasak)." },
                { english: "Should I buy this dress?", turkish: "Bu elbiseyi almalı mıyım?" },
                { english: "I couldn't sleep last night.", turkish: "Dün gece uyuyamadım." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "En büyük hata modal fiillerden sonra 'to' koymaktır. Sadece 'have to' (zorunluluk) 'to' alır; diğer hiçbir A2 modalı arkasından 'to' almaz. \n❌ I can to swim. (YANLIŞ) → ✅ I can swim. (DOĞRU)\n❌ You should to study. (YANLIŞ) → ✅ You should study. (DOĞRU)",
            examples: [
                { english: "We may stay home. (✅)", turkish: "Evde kalabiliriz (ihtimal)." },
                { english: "He cannot drive. (✅)", turkish: "Araba süremez." },
                { english: "Could you repeat that? (✅)", turkish: "Onu tekrar edebilir misiniz?" }
            ]
        }
    ],
    exercises: [
        { question: "I ___ play the piano when I was five.", options: ["can", "could", "should", "must"], correct: 1, explanation: "Geçmiş yetenek = could." },
        { question: "You ___ (not / eat) so much junk food.", options: ["don't should", "shouldn't", "mustn't to", "can't to"], correct: 1, explanation: "Tavsiye olumsuzu = shouldn't." },
        { question: "___ you help me with my bags, please?", options: ["Must", "Should", "Could", "May"], correct: 2, explanation: "Kibar rica = could." },
        { question: "We ___ (wear) a uniform at work. It's the rule.", options: ["can", "must", "might", "could"], correct: 1, explanation: "Zorunluluk = must." },
        { question: "It ___ rain later, so take an umbrella.", options: ["must", "should", "might", "can"], correct: 2, explanation: "Zayıf ihtimal = might." },
        { question: "You ___ (not / park) here. It's forbidden.", options: ["can't", "mustn't", "shouldn't", "Both A and B"], correct: 3, explanation: "Yasak belirtirken can't veya mustn't kullanılır." },
        { question: "I ___ (speak) three languages fluently.", options: ["can", "should", "must", "might"], correct: 0, explanation: "Yetenek = can." },
        { question: "___ I speak to the manager?", options: ["Must", "May", "Should", "Could"], correct: 1, explanation: "İzin isteme (resmi) = may." },
        { question: "He is very tired. He ___ go to bed early.", options: ["can", "should", "might", "could"], correct: 1, explanation: "Tavsiye = should." },
        { question: "You ___ (to / finish) this today. (Spot the mistake)", options: ["finish", "to finish", "finishing", "finished"], correct: 0, explanation: "Modal'dan sonra 'to' gelmez; fiil yalın kalır." }
    ]
};

// ===== UNIT 159: Question Tags (Aren't you? - COMPREHENSIVE) =====
const unit159Grammar: EnglishGrammarUnit = {
    unitId: 159,
    title: "Question Tags (Ek Sorular - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: Onaylama ve 'Değil mi?'",
            explanation: "Question Tags, bir cümleden sonra gelen ve karşı taraftan onay bekleyen kısa soru ekleridir. Türkçedeki '... değil mi?' ifadesinin tam karşılığıdır.",
            examples: [
                { english: "You are a student, aren't you?", turkish: "Sen bir öğrencisin, değil mi?" },
                { english: "It is cold, isn't it?", turkish: "Hava soğuk, değil mi?" },
                { english: "They can't swim, can they?", turkish: "Yüzemezler, değil mi?" }
            ]
        },
        {
            title: "2. Altın Kural: Zıtlık Prensibi",
            explanation: "Temel kuralımız aynadır:\n• Cümle OLUMLU ise Tag OLUMLSUZ olur.\n• Cümle OLUMSUZ ise Tag OLUMLU olur.\nTag yaparken cümledeki yardımcı fiili (am, is, are, can, have, do, did) kullanırız.",
            examples: [
                { english: "She likes coffee, doesn't she?", turkish: "Kahve sever, değil mi?" },
                { english: "He didn't call, did he?", turkish: "Aramadı, değil mi?" },
                { english: "You have finished, haven't you?", turkish: "Bitirdin, değil mi?" }
            ]
        },
        {
            title: "3. Önemli İpuçları: Özel Durumlar",
            explanation: "Bazı yapılar kural dışıdır:\n- I AM -> aren't I? (I am tall, aren't I?)\n- LET'S -> shall we? (Let's go, shall we?)\n- IMPERATIVES (Emir) -> will you? (Close the door, will you?)\n- EVERYBODY/SOMEONE -> they (Someone is here, aren't they?)",
            examples: [
                { english: "I'm right, aren't I?", turkish: "Haklıyım, değil mi?" },
                { english: "Let's play tennis, shall we?", turkish: "Hadi tenis oynayalım, olur mu?" },
                { english: "Don't forget the keys, will you?", turkish: "Anahtarları unutma, tamam mı?" }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar",
            explanation: "Türkçede sadece 'değil mi?' der geçeriz. İngilizcede ise her cümlenin tag'i farklıdır. Cümlenin zamanına (tense) dikkat etmelisiniz. \n❌ You like it, isn't it? (YANLIŞ) → ✅ You like it, DON'T you? (DOĞRU)\n❌ He came, didn't he? (DOĞRU)",
            examples: [
                { english: "You're coming, aren't you? (✅)", turkish: "Geliyorsun, değil mi?" },
                { english: "She won't be late, will she? (✅)", turkish: "Geç kalmayacak, değil mi?" },
                { english: "They have a car, don't they? (✅)", turkish: "Arabaları var, değil mi?" }
            ]
        }
    ],
    exercises: [
        { question: "You are Turkish, ___ you?", options: ["isn't", "aren't", "don't", "am not"], correct: 1, explanation: "Olumlu 'are' -> olumsuz 'aren't'." },
        { question: "She doesn't like milk, ___ she?", options: ["isn't", "doesn't", "does", "is"], correct: 2, explanation: "Olumsuz 'doesn't' -> olumlu 'does'." },
        { question: "They went to Paris, ___ they?", options: ["don't", "didn't", "wasn't", "weren't"], correct: 1, explanation: "Geçmiş zaman (went) için yardımcı fiil 'did' kullanılır. Olumluda tag 'didn't' olur." },
        { question: "I'm late, ___ I?", options: ["am not", "amn't", "aren't", "isn't"], correct: 2, explanation: "İstisna: I am -> aren't I?." },
        { question: "Let's go home, ___ we?", options: ["shall", "will", "don't", "do"], correct: 0, explanation: "İstisna: Let's -> shall we?." },
        { question: "He can drive, ___ he?", options: ["can't", "doesn't", "isn't", "won't"], correct: 0, explanation: "Can -> can't." },
        { question: "You haven't seen her, ___ you?", options: ["haven't", "didn't", "have", "did"], correct: 2, explanation: "Haven't -> have." },
        { question: "It is a beautiful day, ___ it?", options: ["is", "isn't", "doesn't", "does"], correct: 1, explanation: "Is -> isn't." },
        { question: "Open the window, ___ you?", options: ["shall", "don't", "will", "do"], correct: 2, explanation: "Emir cümleleri (Imperatives) -> will you?." },
        { question: "There is someone outside, ___ there?", options: ["isn't", "aren't", "is", "not"], correct: 0, explanation: "There is -> isn't there?." }
    ]
};

// ===== UNIT 160: A2 Review (General Overview - COMPREHENSIVE) =====
const unit160Grammar: EnglishGrammarUnit = {
    unitId: 160,
    title: "A2 Review (Genel Tekrar - Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: A2 Seviyesinde Neler Öğrendik?",
            explanation: "A2 seviyesini tamamlamak, İngilizcede artık temel düzeyin (Beginner) bir üstüne, 'Pre-Intermediate' seviyesine adım atmak demektir. Artık geçmişten, gelecekten, deneyimlerinizden bahsedebilir ve karşılaştırmalar yapabilirsiniz.",
            examples: [
                { english: "I have learned so much in this course.", turkish: "Bu kursta çok şey öğrendim." },
                { english: "English is easier than I thought.", turkish: "İngilizce düşündüğümden daha kolay." },
                { english: "I will continue my studies at B1 level.", turkish: "Çalışmalarıma B1 seviyesinde devam edeceğim." }
            ]
        },
        {
            title: "2. Altın Kural: Tense Karşılaştırması",
            explanation: "Öğrendiğimiz temel zamanları unutmayalım:\n• Past Simple: Belirli geçmiş zaman (I went yesterday).\n• Present Perfect: Belirsiz/Kalıcı zaman (I have been there).\n• First Conditional: Gelecek şartı (If you study, you will pass).\n• Used to: Eski alışkanlık (I used to play).",
            examples: [
                { english: "I went to London in 2015. (Past)", turkish: "2015'te Londra'ya gittim." },
                { english: "I have been to London. (Perfect)", turkish: "Londra'da bulundum." },
                { english: "I used to live in London. (Used to)", turkish: "Eskiden Londra'da yaşardım." }
            ]
        },
        {
            title: "3. Önemli İpuçları: Sıfatlar ve Modallar",
            explanation: "Günlük hayatta en sık kullandığımız yapılar:\n- Comparatives: Better, more expensive, faster.\n- Superlatives: The best, the most beautiful.\n- Modals: Should (tavsiye), Must (kural), Can (yetenek).",
            examples: [
                { english: "Health is the most important thing.", turkish: "Sağlık en önemli şeydir." },
                { english: "You should practice every day.", turkish: "Her gün pratik yapmalısın." },
                { english: "Is this lesson better than the last one?", turkish: "Bu ders öncekinden daha mı iyi?" }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar: Genel Özet",
            explanation: "A2 biterken şu hataları geride bıraktığınızdan emin olun:\n1. 'If'li cümleye 'will' koymak.\n2. Deneyim anlatırken 'yesterday' eklemek.\n3. 'More bigger' gibi çift karşılaştırma yapmak.\n4. Sorularda Question Tag'i 'isn't it?' diye sabitlemek.",
            examples: [
                { english: "I've just finished. (✅)", turkish: "Az önce bitirdim." },
                { english: "Better than before. (✅)", turkish: "Öncekinden daha iyi." },
                { english: "You can do it, can't you? (✅)", turkish: "Yapabilirsin, değil mi?" }
            ]
        }
    ],
    exercises: [
        { question: "I ___ (never / try) skiing before.", options: ["never try", "have never tried", "tried never", "has never tried"], correct: 1, explanation: "Deneyim (Perfect Tense)." },
        { question: "This is ___ book I've ever read.", options: ["the better", "the best", "better than", "the most good"], correct: 1, explanation: "Superlative: the best." },
        { question: "If it ___ hot tomorrow, we ___ go to the pool.", options: ["is / will", "will be / will", "is / are", "be / will"], correct: 0, explanation: "First Conditional: If + Present, will + V1." },
        { question: "I ___ (live) in a village, but now I live in a city.", options: ["use to live", "used to live", "lived", "am living"], correct: 1, explanation: "Eski alışkanlık: used to." },
        { question: "You ___ smoke here. It's against the law.", options: ["shouldn't", "mustn't", "can't", "Both B and C"], correct: 3, explanation: "Yasak (Mustn't) veya yetki dışı (Can't)." },
        { question: "She's very clever, ___ she?", options: ["isn't", "doesn't", "is", "does"], correct: 0, explanation: "Question Tag: Is -> isn't." },
        { question: "The house ___ (build) fifty years ago.", options: ["built", "was built", "is built", "was build"], correct: 1, explanation: "Passive Voice: was + V3." },
        { question: "You ___ (should / study) more for the exam.", options: ["should to study", "should study", "must study", "can study"], correct: 1, explanation: "Tavsiye (Should)." },
        { question: "He is ___ (tall) than me.", options: ["taller", "the tallest", "more tall", "tallest"], correct: 0, explanation: "Comparative: taller." },
        { question: "___ you ever ___ (be) to New York?", options: ["Have / be", "Did / go", "Have / been", "Has / been"], correct: 2, explanation: "Deneyim sorusu: Have you ever been...?" }
    ]
};

// Export function
export function getEnglishA2GrammarForUnit(unitId: number): EnglishGrammarUnit {
    const grammars: { [key: number]: EnglishGrammarUnit } = {
        131: unit131Grammar, 132: unit132Grammar, 133: unit133Grammar, 134: unit134Grammar,
        135: unit135Grammar, 136: unit136Grammar, 137: unit137Grammar, 138: unit138Grammar,
        139: unit139Grammar, 140: unit140Grammar, 141: unit141Grammar, 142: unit142Grammar,
        143: unit143Grammar, 144: unit144Grammar, 145: unit145Grammar, 146: unit146Grammar,
        147: unit147Grammar, 148: unit148Grammar, 149: unit149Grammar, 150: unit150Grammar,
        151: unit151Grammar, 152: unit152Grammar, 153: unit153Grammar, 154: unit154Grammar,
        155: unit155Grammar, 156: unit156Grammar, 157: unit157Grammar, 158: unit158Grammar,
        159: unit159Grammar, 160: unit160Grammar
    };
    return grammars[unitId] || unit131Grammar;
}
