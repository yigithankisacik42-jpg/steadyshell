/**
 * LinguaFlow Grammar Database - English A1
 * 30 Units (ID: 101-130) with grammar rules and exercises
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

// ===== UNIT 101: GREETINGS - TO BE (COMPREHENSIVE) =====
const unit101Grammar: EnglishGrammarUnit = {
    unitId: 101,
    title: "To Be - Am, Is, Are (Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Anlayalım: 'To Be' Nedir?",
            explanation: "Türkçede biz 'Ben mutluyum', 'O doktordur', 'Hava soğuktur' deriz. Cümlenin sonuna eklediğimiz o ekler (-im, -dir, -dur) var ya? İşte İngilizcedeki 'To Be' (am, is, are) tam olarak bu işe yarar. Hareket bildirmez (koşmak, gitmek, gelmek yoktur). Durum bildirir (kim olduğunu, nasıl olduğunu, nerede olduğunu anlatır). Matematikteki Eşittir (=) işareti gibidir: I am Ali. (Ben = Ali)",
            examples: [
                { english: "I am Ali.", turkish: "Ben = Ali (Ben Ali'yim)" },
                { english: "She is a doctor.", turkish: "O = bir doktor" },
                { english: "They are happy.", turkish: "Onlar = mutlu" }
            ]
        },
        {
            title: "2. Olumlu Cümleler (Positive Forms)",
            explanation: "İngilizcede her kişi (özne) için 'To Be' farklı bir kılığa girer. Topu topu 3 tane kelime ezberleyeceğiz: am, is, are. Formül: Özne (Subject) + To Be (am/is/are) + Tamamlayıcı (Nesne/Sıfat). I → am, He/She/It → is, We/You/They → are. İpucu: Tekillerde (He, She, It) hep 'is' kullanılır. Çoğullarda (We, They) hep 'are' kullanılır. 'You' özeldir; tek bir kişiye de 'Sen' desen, kalabalığa 'Siz' de desen hep 'are' alır.",
            examples: [
                { english: "I am a student.", turkish: "Ben bir öğrenciyim." },
                { english: "He is happy.", turkish: "O mutludur." },
                { english: "She is clever.", turkish: "O zekidir." },
                { english: "It is a cat.", turkish: "O bir kedidir." },
                { english: "We are friends.", turkish: "Biz arkadaşız." },
                { english: "You are young.", turkish: "Sen gençsin." },
                { english: "They are at home.", turkish: "Onlar evdeler." }
            ]
        },
        {
            title: "3. Olumsuz Cümleler (Negative Forms)",
            explanation: "Bir şeyi 'değilim' demek için tek yapman gereken, am/is/are kelimesinden hemen sonra 'not' getirmektir. Formül: Özne + am/is/are + NOT + Nesne/Sıfat. Kısaltmalar (Çok Önemli): Konuşma dilinde uzun uzun 'is not' denmez. is not → isn't, are not → aren't. DİKKAT: 'am not' birleşmez, 'amn't' diye bir şey yoktur. 'I'm not' şeklinde özneyle birleşir.",
            examples: [
                { english: "I am not sad.", turkish: "Üzgün değilim." },
                { english: "She is not (isn't) ready.", turkish: "O hazır değil." },
                { english: "We are not (aren't) tired.", turkish: "Biz yorgun değiliz." },
                { english: "They aren't at school.", turkish: "Onlar okulda değiller." }
            ]
        },
        {
            title: "4. Soru Cümleleri (Questions with To Be)",
            explanation: "İngilizcede soru sormanın altın kuralı: Fiili başa al! Özne ile Yardımcı Fiilin (am/is/are) yerini değiştiriyoruz. Formül: Am/Is/Are + Özne + Nesne/Sıfat? Kısa Cevaplar: Soruya 'Yes' veya 'No' dedikten sonra cümleyi uzatmana gerek yok. Are you okay? - Yes, I am. / No, I am not.",
            examples: [
                { english: "Are you a doctor?", turkish: "Doktor musun?" },
                { english: "Is she beautiful?", turkish: "O güzel mi?" },
                { english: "Are they late?", turkish: "Onlar geç mi kaldı?" },
                { english: "Am I right?", turkish: "Haklı mıyım?" },
                { english: "Yes, I am. / No, I am not.", turkish: "Evet, öyleyim. / Hayır, değilim." }
            ]
        }
    ],
    exercises: [
        { question: "I ___ a student.", options: ["am", "is", "are", "be"], correct: 0, explanation: "'I' ile her zaman 'am' kullanılır." },
        { question: "She ___ beautiful.", options: ["am", "is", "are", "be"], correct: 1, explanation: "'She' tekil olduğu için 'is' kullanılır." },
        { question: "They ___ my friends.", options: ["am", "is", "are", "be"], correct: 2, explanation: "'They' çoğul olduğu için 'are' kullanılır." },
        { question: "___ you from Turkey?", options: ["Am", "Is", "Are", "Be"], correct: 2, explanation: "Soru cümlesinde 'you' ile 'Are' kullanılır." },
        { question: "We ___ not tired.", options: ["am", "is", "are", "be"], correct: 2, explanation: "'We' çoğul olduğu için 'are' kullanılır." },
        { question: "He ___ a doctor.", options: ["am", "is", "are", "be"], correct: 1, explanation: "'He' tekil olduğu için 'is' kullanılır." },
        { question: "I ___ not sad.", options: ["am", "is", "are", "be"], correct: 0, explanation: "'I' ile 'am' kullanılır, olumsuzda 'am not' olur." },
        { question: "___ she your sister?", options: ["Am", "Is", "Are", "Be"], correct: 1, explanation: "'She' için soru cümlesinde 'Is' başa gelir." },
        { question: "It ___ a cat.", options: ["am", "is", "are", "be"], correct: 1, explanation: "'It' tekil nesne/hayvan için 'is' kullanılır." },
        { question: "You ___ young.", options: ["am", "is", "are", "be"], correct: 2, explanation: "'You' tek veya çoğul olsa da her zaman 'are' alır." }
    ]
};


// ===== UNIT 102: NUMBERS - THERE IS/ARE (COMPREHENSIVE) =====
const unit102Grammar: EnglishGrammarUnit = {
    unitId: 102,
    title: "There Is / There Are (Kapsamlı)",
    rules: [
        {
            title: "1. Temel Kural: Tekil mi, Çoğul mu?",
            explanation: "Burada sadece tek bir şeye bakacaksın: Bahsettiğin şey bir tane mi yoksa birden fazla mı? Eğer tek bir tane ise 'There is', birden fazla ise 'There are' kullanırsın.",
            examples: [
                { english: "There is a pen.", turkish: "Bir kalem var. (Tekil - 1 tane)" },
                { english: "There are two pens.", turkish: "İki kalem var. (Çoğul - 2+ tane)" }
            ]
        },
        {
            title: "A) There is (Tekiller için)",
            explanation: "Eğer bahsettiğin nesne tek bir tane ise (veya sayılamayan bir sıvı/madde ise) bunu kullanırız. Formül: There is + a/an + Tekil Nesne + Yer. Kısaltma: Konuşurken genellikle 'There's' diye kısaltılır.",
            examples: [
                { english: "There is a book on the table.", turkish: "Masada bir kitap var." },
                { english: "There is a cat in the garden.", turkish: "Bahçede bir kedi var." },
                { english: "There is a problem.", turkish: "Bir problem var." },
                { english: "There's a car outside.", turkish: "Dışarıda bir araba var." }
            ]
        },
        {
            title: "B) There are (Çoğullar için)",
            explanation: "Eğer bahsettiğin nesne birden fazla ise bunu kullanırız. Nesnenin sonuna çoğul eki olan -s takısını getirmeyi unutma! Formül: There are + Sayı/Miktar + Çoğul Nesne (-s) + Yer.",
            examples: [
                { english: "There are two books on the table.", turkish: "Masada iki kitap var." },
                { english: "There are many people here.", turkish: "Burada çok insan var." },
                { english: "There are three cats.", turkish: "Üç kedi var." },
                { english: "There are five children in the park.", turkish: "Parkta beş çocuk var." }
            ]
        },
        {
            title: "3. 'Yok' Demek (Negatives)",
            explanation: "'Var' demeyi öğrendik, peki 'Yok' nasıl denir? Tıpkı 'To Be' konusunda yaptığımız gibi, hemen 'not' ekliyoruz. There is not (There isn't) → YOK (Tekil). There are not (There aren't) → YOK (Çoğul).",
            examples: [
                { english: "There isn't a phone in my bag.", turkish: "Çantamda bir telefon yok." },
                { english: "There aren't any cookies left.", turkish: "Hiç kurabiye kalmadı / yok." },
                { english: "There isn't a problem.", turkish: "Bir problem yok." },
                { english: "There aren't any students.", turkish: "Hiç öğrenci yok." }
            ]
        },
        {
            title: "4. 'Var mı?' Diye Sormak (Questions)",
            explanation: "Kuralımız değişmiyor: Yardımcı fiili (is/are) cümlenin başına alıyoruz. Kısa cevaplar: Yes, there is. / No, there isn't. veya Yes, there are. / No, there aren't.",
            examples: [
                { english: "Is there a problem?", turkish: "Bir problem var mı?" },
                { english: "Yes, there is. / No, there isn't.", turkish: "Evet, var. / Hayır, yok." },
                { english: "Are there students in the class?", turkish: "Sınıfta öğrenciler var mı?" },
                { english: "Yes, there are. / No, there aren't.", turkish: "Evet, var. / Hayır, yok." }
            ]
        }
    ],
    exercises: [
        { question: "There ___ a dog in the garden.", options: ["is", "are", "isn't", "aren't"], correct: 0, explanation: "Tekil isim 'a dog' için 'is' kullanılır." },
        { question: "There ___ five books on the table.", options: ["is", "are", "isn't", "aren't"], correct: 1, explanation: "Çoğul isim 'books' (5 tane) için 'are' kullanılır." },
        { question: "There ___ some water in the glass.", options: ["is", "are", "isn't", "aren't"], correct: 0, explanation: "Sayılamayan 'water' için 'is' kullanılır." },
        { question: "___ there a problem?", options: ["Is", "Are", "Do", "Does"], correct: 0, explanation: "Tekil soru için 'Is there' kullanılır." },
        { question: "There ___ many people here.", options: ["is", "are", "isn't", "aren't"], correct: 1, explanation: "'People' çoğul olduğu için 'are' kullanılır." },
        { question: "There ___ a phone in my bag.", options: ["isn't", "aren't", "is", "are"], correct: 0, explanation: "Tekil olumsuz için 'isn't' kullanılır." },
        { question: "___ there any students in the class?", options: ["Is", "Are", "Do", "Does"], correct: 1, explanation: "Çoğul soru için 'Are there' kullanılır." },
        { question: "There ___ any cookies left.", options: ["isn't", "aren't", "is", "are"], correct: 1, explanation: "Çoğul olumsuz için 'aren't' kullanılır." },
        { question: "There ___ a child in the park.", options: ["is", "are", "isn't", "aren't"], correct: 0, explanation: "Tekil 'a child' için 'is' kullanılır." },
        { question: "There ___ three cats.", options: ["is", "are", "isn't", "aren't"], correct: 1, explanation: "Çoğul (3 tane) için 'are' kullanılır." }
    ]
};


// ===== UNIT 103: FAMILY - POSSESSIVE ADJECTIVES (COMPREHENSIVE) =====
const unit103Grammar: EnglishGrammarUnit = {
    unitId: 103,
    title: "Possessive Adjectives - İyelik Sıfatları (Kapsamlı)",
    rules: [
        {
            title: "1. Tablo: Kimin Nesi?",
            explanation: "Bu tabloyu adın gibi bilmelisin. Sol tarafta kişiyi (Özne), sağ tarafta ise o kişinin sahiplik ekini göreceksin. I → My (Benim), You → Your (Senin), He → His (Onun-erkek), She → Her (Onun-kadın), It → Its (Onun-nesne), We → Our (Bizim), They → Their (Onların).",
            examples: [
                { english: "My car", turkish: "Benim arabam" },
                { english: "Your phone", turkish: "Senin telefonun" },
                { english: "His dog", turkish: "Onun köpeği (Erkek)" },
                { english: "Her bag", turkish: "Onun çantası (Kadın)" },
                { english: "Its tail", turkish: "Onun kuyruğu (Hayvan)" },
                { english: "Our house", turkish: "Bizim evimiz" },
                { english: "Their school", turkish: "Onların okulu" }
            ]
        },
        {
            title: "2. Altın Kural: Asla Yalnız Kullanma!",
            explanation: "Bu kelimelerin adı 'Sıfat'tır. Sıfatlar tek başına duramaz, mutlaka yanına bir İsim (Noun) isterler. ❌ Yanlış: This is my. (Eksik cümle!) ✅ Doğru: This is my book. Türkçeden En Büyük Farkı: Türkçede 'Benim evim' derken hem 'benim' diyoruz hem de 'ev' kelimesine '-im' eki ekliyoruz. İngilizcede kelimeye dokunmuyoruz! 'Ev' hep 'House' olarak kalır: My house, Your house, Our house.",
            examples: [
                { english: "This is my book.", turkish: "Bu benim kitabım." },
                { english: "My name is Gemini.", turkish: "Benim ismim Gemini." },
                { english: "My house / Your house / Our house", turkish: "House kelimesi hiç değişmedi!" }
            ]
        },
        {
            title: "3. 'His' ve 'Her' Ayrımı (Çok Önemli!)",
            explanation: "Türkçede cinsiyet olmadığı için biz herkese 'Onun' deriz. Ama İngilizcede kime ait olduğuna göre kelime değişir. Eğer bir ERKEĞİN şeyinden bahsediyorsan → His. Eğer bir KADININ şeyinden bahsediyorsan → Her.",
            examples: [
                { english: "Ahmet is a doctor. This is his hospital.", turkish: "Onun hastanesi - Ahmet erkek olduğu için His" },
                { english: "Ayşe is a student. This is her book.", turkish: "Onun kitabı - Ayşe kadın olduğu için Her" },
                { english: "My father loves his job.", turkish: "Babam işini seviyor. (His = erkek)" },
                { english: "My mother loves her job.", turkish: "Annem işini seviyor. (Her = kadın)" }
            ]
        },
        {
            title: "4. Its vs It's (Karıştırma!)",
            explanation: "Bu ikisi birbirine çok benzer ama tamamen farklıdır. Its (Kesme işareti YOK): Onun - Sahiplik bildirir. It's (Kesme işareti VAR): 'It is' kısaltmasıdır.",
            examples: [
                { english: "The cat likes its food.", turkish: "Kedi yemeğini sever. (Its = sahiplik)" },
                { english: "It's a cat.", turkish: "O bir kedidir. (It's = It is)" },
                { english: "The dog wags its tail.", turkish: "Köpek kuyruğunu sallıyor. (Its = onun)" },
                { english: "It's very hot today.", turkish: "Bugün çok sıcak. (It's = It is)" }
            ]
        }
    ],
    exercises: [
        { question: "This is ___ book. (I)", options: ["my", "me", "I", "mine"], correct: 0, explanation: "'I' için iyelik sıfatı 'my'dir." },
        { question: "___ name is John. (He)", options: ["He", "Him", "His", "Her"], correct: 2, explanation: "'He' (erkek) için iyelik sıfatı 'His'dir." },
        { question: "This is ___ car. (they)", options: ["they", "their", "them", "theirs"], correct: 1, explanation: "'They' için iyelik sıfatı 'their'dir." },
        { question: "___ mother is a doctor. (she)", options: ["She", "Her", "Hers", "Him"], correct: 1, explanation: "'She' (kadın) için iyelik sıfatı 'Her'dir." },
        { question: "We love ___ country. (we)", options: ["we", "us", "our", "ours"], correct: 2, explanation: "'We' için iyelik sıfatı 'our'dur." },
        { question: "The cat is eating ___ food.", options: ["it's", "its", "it", "his"], correct: 1, explanation: "Hayvan için sahiplik: 'its' (kesme işareti yok)." },
        { question: "Ahmet loves ___ sister.", options: ["her", "his", "its", "their"], correct: 1, explanation: "Ahmet erkek, o yüzden 'his' kullanılır." },
        { question: "Ayşe loves ___ brother.", options: ["her", "his", "its", "their"], correct: 0, explanation: "Ayşe kadın, o yüzden 'her' kullanılır." },
        { question: "___ a beautiful day. (It is)", options: ["Its", "It's", "His", "Her"], correct: 1, explanation: "'It is' kısaltması = It's (kesme işaretli)." },
        { question: "The dog lost ___ ball.", options: ["it's", "its", "his", "her"], correct: 1, explanation: "Hayvan için sahiplik: 'its' (kesme işareti yok)." }
    ]
};


// ===== UNIT 104: COLORS - ARTICLES A/AN/THE (COMPREHENSIVE) =====
const unit104Grammar: EnglishGrammarUnit = {
    unitId: 104,
    title: "Articles: A, An, The (Kapsamlı)",
    rules: [
        {
            title: "1. A ve An (Belirsiz Artikel - Indefinite)",
            explanation: "Bunların ikisi de 'BİR' (Herhangi bir) demektir. Henüz tanışmadığımız, rastgele, genel bir şeyden bahsederken kullanılır. Sadece tekil (sayılabilen) kelimelerle kullanılır. Kural: 'A' mı, 'An' mi? Burada kural yazılışa göre değil, OKUNUŞA (SESE) göredir! Kelime ünsüz sesle başlıyorsa → A. Kelime ünlü sesle başlıyorsa → An.",
            examples: [
                { english: "a book, a car, a dog", turkish: "bir kitap, bir araba, bir köpek (ünsüz sesle başlıyor)" },
                { english: "an apple, an engineer, an orange", turkish: "bir elma, bir mühendis, bir portakal (ünlü sesle başlıyor)" },
                { english: "a university", turkish: "'U' ile yazılır ama 'Y' sesiyle okunur → A university" },
                { english: "an hour", turkish: "'H' yazılır ama okunmaz, 'our' gibi okunur → An hour" }
            ]
        },
        {
            title: "2. The (Belirli Artikel - Definite)",
            explanation: "'The' kelimesinin tam bir Türkçe karşılığı yoktur ama mantığı şudur: 'O bildiğimiz', 'Malum', 'Bahsettiğimiz'. Konuşan ve dinleyen kişi, hangi nesneden bahsedildiğini biliyorsa 'The' kullanılır. Hikaye Tekniği: İlk kez bahsettiğimizde 'a/an', sonraki seferlerde artık bildiğimiz için 'the' kullanırız.",
            examples: [
                { english: "Open a window.", turkish: "Herhangi bir pencereyi aç. (Hangisi olursa olsun)" },
                { english: "Open the window.", turkish: "O pencereyi aç. (İkimizin de bildiği o pencere)" },
                { english: "I saw a cat. The cat was black.", turkish: "Bir kedi gördüm. [O bahsettiğim] kedi siyahtı." },
                { english: "The Sun, The Internet, The World", turkish: "Dünyada tek olan şeyler için 'The' kullanılır." }
            ]
        },
        {
            title: "3. Özet Tablo: Hangisini Seçeceğim?",
            explanation: "Herhangi bir tane, tekil → A/An (I need a phone). Konuştuğumuz belirli bir şey → The (Where is the phone? - Senin telefonun). Dünyada tek olan şeyler → The (The Sun, The Internet, The World).",
            examples: [
                { english: "I need a phone.", turkish: "Telefona ihtiyacım var, herhangi biri olur." },
                { english: "Where is the phone?", turkish: "Telefon nerede? (Senin telefonun, bildiğimiz telefon)" },
                { english: "The moon is beautiful tonight.", turkish: "Ay bu gece güzel. (Tek olan şey)" }
            ]
        },
        {
            title: "4. Çok Önemli Uyarılar (Yapma!)",
            explanation: "Türkler olarak en çok bu hataları yapıyoruz! 1) Özel İsimlerde Kullanma: İnsan isimlerinin, şehirlerin, ülkelerin önüne gelmez. ❌ The Ahmet, The Turkey ✅ Ahmet, Turkey. 2) Çoğul Genellemelerde Kullanma: Genel olarak bir türden bahsederken 'The' kullanma. ❌ I like the cats. ✅ I like cats. (Kedileri severim - genel olarak)",
            examples: [
                { english: "❌ The Ahmet is my friend.", turkish: "YANLIŞ - İsimlerden önce 'The' kullanılmaz" },
                { english: "✅ Ahmet is my friend.", turkish: "DOĞRU - Ahmet benim arkadaşım." },
                { english: "❌ I like the cats.", turkish: "YANLIŞ - Genel konuşurken 'The' olmaz" },
                { english: "✅ I like cats.", turkish: "DOĞRU - Kedileri severim (genel olarak)" }
            ]
        }
    ],
    exercises: [
        { question: "I have ___ apple.", options: ["a", "an", "the", "-"], correct: 1, explanation: "'Apple' ünlü (A) sesiyle başladığı için 'an' kullanılır." },
        { question: "She is ___ teacher.", options: ["a", "an", "the", "-"], correct: 0, explanation: "'Teacher' ünsüz (T) sesiyle başladığı için 'a' kullanılır." },
        { question: "___ sun is bright.", options: ["A", "An", "The", "-"], correct: 2, explanation: "Dünyada tek olan şeyler için 'The' kullanılır." },
        { question: "I need ___ umbrella.", options: ["a", "an", "the", "-"], correct: 1, explanation: "'Umbrella' ünlü (U) sesiyle başladığı için 'an' kullanılır." },
        { question: "He goes to ___ university.", options: ["a", "an", "the", "-"], correct: 0, explanation: "'University' yazılışı U ama 'Y' sesiyle okunur → 'a' kullanılır." },
        { question: "I waited for ___ hour.", options: ["a", "an", "the", "-"], correct: 1, explanation: "'Hour' H okunmaz, ünlü sesle başlar → 'an' kullanılır." },
        { question: "I saw ___ cat. ___ cat was black.", options: ["a, The", "the, A", "a, A", "the, The"], correct: 0, explanation: "İlk kez → 'a', tekrar bahsederken → 'the'." },
        { question: "I like ___ dogs.", options: ["a", "an", "the", "-"], correct: 3, explanation: "Genel olarak bir türden bahsederken artikel kullanılmaz." },
        { question: "___ Internet is very useful.", options: ["A", "An", "The", "-"], correct: 2, explanation: "Dünyada tek olan şeyler için 'The' kullanılır." },
        { question: "Open ___ window, please.", options: ["a", "an", "the", "-"], correct: 0, explanation: "Herhangi bir pencere (belirsiz) için 'a' kullanılır." }
    ]
};


// ===== UNIT 105: FOOD - SOME/ANY =====
// ===== UNIT 105: FOOD - SOME/ANY (COMPREHENSIVE) =====
const unit105Grammar: EnglishGrammarUnit = {
    unitId: 105,
    title: "Some and Any (Kapsamlı)",
    rules: [
        {
            title: "1. Some (Biraz / Bazı / Birkaç)",
            explanation: "'Some' kelimesini gördüğünde aklına OLUMLU (+) ve VARLIK gelmeli. Genellikle düz, olumlu cümlelerde kullanılır. İki anlama gelir: Sayılamayan şeyler için (su, para, zaman) → Biraz. Sayılabilen şeyler için (elma, kalem, öğrenci) → Bazı / Birkaç.",
            examples: [
                { english: "I have some money.", turkish: "Benim biraz param var." },
                { english: "There are some apples on the table.", turkish: "Masada birkaç elma var." },
                { english: "I need some water.", turkish: "Benim biraz suya ihtiyacım var." },
                { english: "She bought some books.", turkish: "O birkaç kitap aldı." }
            ]
        },
        {
            title: "Çok Önemli İstisna: Kibar Sorular",
            explanation: "Normalde sorularda 'some' kullanılmaz dedik AMA Teklif veya İstek bildiriyorsan 'Some' kullanılır. Çünkü cevabın 'Evet' olmasını umuyorsun.",
            examples: [
                { english: "Would you like some tea?", turkish: "Biraz çay ister misin? (Teklif)" },
                { english: "Can I have some water?", turkish: "Biraz su alabilir miyim? (İstek)" },
                { english: "Do you want some coffee?", turkish: "Biraz kahve ister misin? (Teklif)" }
            ]
        },
        {
            title: "2. Any (Hiç / Herhangi)",
            explanation: "'Any' kelimesini gördüğünde aklına OLUMSUZ (-) veya SORU (?) gelmeli. Bir şeyin yokluğunu veya var olup olmadığını sorarken kullanılır. A) Olumsuz Cümlelerde: 'Not' ekiyle birlikte kullanılır ve cümleye 'Hiç' anlamı katar. B) Soru Cümlelerinde: Bir şeyin var olup olmadığını sorarken kullanılır.",
            examples: [
                { english: "I don't have any money.", turkish: "Benim hiç param yok. (Olumsuz)" },
                { english: "There aren't any cars in the street.", turkish: "Sokakta hiç araba yok. (Olumsuz)" },
                { english: "Do you have any brothers?", turkish: "Hiç erkek kardeşin var mı? (Soru)" },
                { english: "Is there any milk in the fridge?", turkish: "Dolapta hiç süt var mı? (Soru)" }
            ]
        },
        {
            title: "3. Tablo ile Farkı Netleştirelim + Pratik Mantık",
            explanation: "OLUMLU (+) → SOME (There is some coffee). OLUMSUZ (-) → ANY (There isn't any coffee). SORU (?) → ANY (Is there any coffee?). KİBAR TEKLİF → SOME (Do you want some coffee?). PRATİK HİLE: Cümlede 'not' var mı? → ANY. Soru işareti var mı? → ANY (teklif değilse). Düz mutlu cümle mi? → SOME.",
            examples: [
                { english: "There is some coffee. (+)", turkish: "Biraz kahve var. (Olumlu → Some)" },
                { english: "There isn't any coffee. (-)", turkish: "Hiç kahve yok. (Olumsuz → Any)" },
                { english: "Is there any coffee? (?)", turkish: "Hiç kahve var mı? (Soru → Any)" },
                { english: "Do you want some coffee?", turkish: "Biraz kahve ister misin? (Teklif → Some)" }
            ]
        }
    ],
    exercises: [
        { question: "I have ___ bread.", options: ["some", "any", "a", "an"], correct: 0, explanation: "Olumlu cümle → 'some' kullanılır." },
        { question: "Do you have ___ milk?", options: ["some", "any", "a", "an"], correct: 1, explanation: "Soru cümlesi → 'any' kullanılır." },
        { question: "There isn't ___ water.", options: ["some", "any", "a", "an"], correct: 1, explanation: "Olumsuz cümle (isn't) → 'any' kullanılır." },
        { question: "Would you like ___ coffee?", options: ["some", "any", "a", "an"], correct: 0, explanation: "Kibar teklif → 'some' kullanılır." },
        { question: "I don't have ___ time.", options: ["some", "any", "a", "an"], correct: 1, explanation: "Olumsuz cümle (don't) → 'any' kullanılır." },
        { question: "There are ___ apples on the table.", options: ["some", "any", "a", "an"], correct: 0, explanation: "Olumlu cümle → 'some' kullanılır." },
        { question: "Are there ___ students in the class?", options: ["some", "any", "a", "an"], correct: 1, explanation: "Soru cümlesi → 'any' kullanılır." },
        { question: "Can I have ___ water, please?", options: ["some", "any", "a", "an"], correct: 0, explanation: "Kibar istek → 'some' kullanılır." },
        { question: "She doesn't have ___ friends here.", options: ["some", "any", "a", "an"], correct: 1, explanation: "Olumsuz cümle (doesn't) → 'any' kullanılır." },
        { question: "I bought ___ books yesterday.", options: ["some", "any", "a", "an"], correct: 0, explanation: "Olumlu cümle → 'some' kullanılır." }
    ]
};


// ===== UNIT 106: DRINKS - COUNTABLE/UNCOUNTABLE =====
// ===== UNIT 106: DRINKS - COUNTABLE/UNCOUNTABLE (COMPREHENSIVE) =====
const unit106Grammar: EnglishGrammarUnit = {
    unitId: 106,
    title: "Countable & Uncountable Nouns (Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Nedir? (Parmak Hesabı)",
            explanation: "Kendine şu basit soruyu sor: 'Ben bunu parmağımla 1 tane, 2 tane, 3 tane diye tek tek sayabilir miyim?' Cevap EVET ise → Countable (Sayılabilir). Cevap HAYIR ise → Uncountable (Sayılamaz).",
            examples: [
                { english: "Apple → 1 apple, 2 apples ✓", turkish: "Elma sayılabilir → Countable" },
                { english: "Water → 1 water, 2 waters ✗", turkish: "Su sayılamaz → Uncountable" }
            ]
        },
        {
            title: "2. Countable Nouns (Sayılabilen İsimler)",
            explanation: "Bunlar sınırları belli olan, tane tane sayabildiğimiz nesnelerdir. Kuralları: Önüne sayı gelebilir (One, two, three...). Tekilse başına a/an gelebilir. Çoğul olabilirler, yani sonuna -s takısı alabilirler.",
            examples: [
                { english: "A book → Two books", turkish: "Bir kitap → İki kitap" },
                { english: "An apple → Three apples", turkish: "Bir elma → Üç elma" },
                { english: "A car → Many cars", turkish: "Bir araba → Pek çok araba" },
                { english: "There is a cat. / There are two cats.", turkish: "Bir kedi var. / İki kedi var." }
            ]
        },
        {
            title: "3. Uncountable Nouns (Sayılamayan İsimler)",
            explanation: "Bunlar genellikle sıvılar, tozlar, gazlar veya soyut kavramlardır. ASLA çoğul eki (-s) almazlar (Waters, Moneys, Rices DİYEMEZSİN). ASLA başlarına 'a/an' gelmez (A water, A money DİYEMEZSİN). HER ZAMAN TEKİL kabul edilirler, fiil her zaman 'is' olur. Neler sayılamaz? Sıvılar: Water, Coffee, Milk, Oil. Yiyecekler: Rice, Sugar, Bread, Cheese. Soyut: Love, Music, Information, Money.",
            examples: [
                { english: "There is some water.", turkish: "'There are water' denmez! Her zaman 'is'." },
                { english: "Money is important.", turkish: "'Money are' denmez! Tekil fiil." },
                { english: "❌ Two waters / ✅ Two glasses of water", turkish: "Sayılamayan şeylere sayı gelmez." }
            ]
        },
        {
            title: "4. Türklerin Düştüğü Tuzaklar (Dikkat!)",
            explanation: "Bu 3 kelimeyi ezberle, tuzağa düşme! MONEY: 'Paraları saydım' deriz ama İngilizcede 'Money' çoğul olmaz. ❌ Two moneys ✅ Some money / Two dollars. BREAD: Biz 'İki ekmek ver' deriz ama İngilizcede sayılamaz. ❌ Two breads ✅ Two loaves of bread. INFORMATION: 'Sana iki bilgi vereceğim' diyemezsin. ❌ Informations ✅ Some information.",
            examples: [
                { english: "❌ I have two moneys. / ✅ I have some money.", turkish: "Para sayılamaz, dolar sayılır." },
                { english: "❌ Two breads. / ✅ Two loaves of bread.", turkish: "Ekmek sayılamaz, somun sayılır." },
                { english: "❌ Informations. / ✅ Some information.", turkish: "Bilgi soyuttur, sayılamaz." }
            ]
        },
        {
            title: "5. Sayılamayanları Nasıl Sayarız? + Özet Tablo",
            explanation: "Sıvıyı veya maddeyi değil, içine koyduğumuz kabı sayacağız! A bottle of water (Şişeyi say!), A cup of coffee (Fincanı say!), A slice of pizza (Dilimi say!), A glass of milk (Bardağı say!). ÖZET: Countable → How many? (Kaç tane?) + sayı + -s alır + a/an alır. Uncountable → How much? (Ne kadar?) + sayı gelmez + -s almaz + a/an almaz + her zaman 'is'.",
            examples: [
                { english: "A bottle of water / Two bottles of water", turkish: "Bir şişe su / İki şişe su" },
                { english: "A cup of coffee / Three cups of coffee", turkish: "Bir fincan kahve / Üç fincan kahve" },
                { english: "How many apples? / How much water?", turkish: "Kaç tane elma? / Ne kadar su?" }
            ]
        }
    ],
    exercises: [
        { question: "I drink ___ every day.", options: ["a water", "waters", "water", "the waters"], correct: 2, explanation: "'Water' sayılamaz, 'a' veya çoğul eki almaz." },
        { question: "There are two ___ on the table.", options: ["coffee", "cup of coffee", "cups of coffee", "coffees"], correct: 2, explanation: "Sayılamayan isimler için ölçü birimi (cup) kullanılır." },
        { question: "How ___ milk do you want?", options: ["many", "much", "some", "any"], correct: 1, explanation: "Sayılamayan isimler için 'How much' kullanılır." },
        { question: "How ___ apples are there?", options: ["many", "much", "some", "any"], correct: 0, explanation: "Sayılabilen isimler için 'How many' kullanılır." },
        { question: "Can I have ___ water, please?", options: ["a", "an", "some", "many"], correct: 2, explanation: "Sayılamayan isimler için 'some' kullanılır, 'a' değil." },
        { question: "I have ___.", options: ["two moneys", "some money", "a money", "moneys"], correct: 1, explanation: "'Money' sayılamaz, çoğul veya 'a' almaz." },
        { question: "She bought two ___ of bread.", options: ["bread", "breads", "loaves", "loaf"], correct: 2, explanation: "'Bread' sayılamaz, 'loaf' (somun) ile sayılır." },
        { question: "There ___ some water in the glass.", options: ["is", "are", "be", "were"], correct: 0, explanation: "Sayılamayan isimler HER ZAMAN tekil fiil (is) alır." },
        { question: "I need ___.", options: ["an information", "informations", "some information", "two informations"], correct: 2, explanation: "'Information' sayılamaz, 'a' veya çoğul almaz." },
        { question: "Would you like ___ of coffee?", options: ["a cup", "a coffee", "coffees", "some coffees"], correct: 0, explanation: "Sayılamayan 'coffee' için ölçü birimi 'cup' kullanılır." }
    ]
};


// ===== UNIT 107: DAYS - PREPOSITIONS OF TIME (COMPREHENSIVE) =====
const unit107Grammar: EnglishGrammarUnit = {
    unitId: 107,
    title: "Prepositions of Time: In, On, At (Kapsamlı)",
    rules: [
        {
            title: "1. IN (En Geniş Zamanlar - Kutunun İçi)",
            explanation: "Piramidin en tepesindeki, en geniş kısımdır. İçinde uzun süreler barındıran zaman dilimleri için kullanılır. Kendini büyük bir zaman kutusunun 'içinde' (in) gibi düşün. Nerelerde Kullanılır? Yıllar: In 2025. Aylar: In December. Mevsimler: In Summer. Günün Bölümleri (İstisna): In the morning, In the afternoon, In the evening.",
            examples: [
                { english: "I was born in 2003.", turkish: "2003'te doğdum. (Yıl → IN)" },
                { english: "We go on holiday in Summer.", turkish: "Yazın tatile gideriz. (Mevsim → IN)" },
                { english: "I wake up in the morning.", turkish: "Sabahleyin uyanırım. (Günün bölümü → IN)" },
                { english: "The exam is in December.", turkish: "Sınav Aralık'ta. (Ay → IN)" }
            ]
        },
        {
            title: "2. ON (Günler ve Takvim Yaprakları)",
            explanation: "Piramidin orta kısmıdır. Biraz daha daraldık. Aklına 'Takvim' ve 'Gün' kelimesi gelsin. Eğer bahsettiğin şey bir takvim yaprağında tek bir gün ise veya içinde 'Day' kelimesi geçiyorsa 'ON' kullanırız. Nerelerde Kullanılır? Haftanın Günleri: On Monday. Tam Tarihler: On 23 December 2025. Özel Günler: On my birthday, On New Year's Day.",
            examples: [
                { english: "I have an exam on Monday.", turkish: "Pazartesi günü sınavım var. (Gün → ON)" },
                { english: "My birthday is on May 5th.", turkish: "Doğum günüm 5 Mayıs'ta. (Tarih → ON)" },
                { english: "We meet on Fridays.", turkish: "Cuma günleri buluşuruz. (Gün → ON)" },
                { english: "The party is on New Year's Day.", turkish: "Parti Yılbaşı günü. (Özel gün → ON)" }
            ]
        },
        {
            title: "3. AT (Saatler ve Nokta Atışı)",
            explanation: "Piramidin en altındaki, en sivri uçtur. Tam bir nokta atışı yapıyoruz. Saatine baktığında gördüğün o kesin anlar için kullanılır. Nerelerde Kullanılır? Saatler: At 3 o'clock, At 5:30 pm. Özel Anlar: At noon, At midnight. İstisnalar: At night (Geceleyin) - 'In the night' denmez! At the weekend.",
            examples: [
                { english: "The class starts at 09:00.", turkish: "Ders 09:00'da başlar. (Saat → AT)" },
                { english: "I sleep at night.", turkish: "Gece uyurum. (İstisna → AT night)" },
                { english: "Let's meet at noon.", turkish: "Öğlen buluşalım. (Nokta atışı → AT)" },
                { english: "I study at the weekend.", turkish: "Hafta sonu çalışırım. (İstisna → AT)" }
            ]
        },
        {
            title: "4. Özet Tablo + Altın Kural: Yasaklı Kelimeler 🚫",
            explanation: "ÖZET: Yıllar/Aylar/Mevsimler → IN (çok geniş). Günler/Tarihler → ON (takvim). Saatler → AT (nokta atışı). ALTIN KURAL: Bu 4 kelimeyi gördüğünde ASLA (in, on, at) kullanma: NEXT, LAST, THIS, EVERY. ❌ See you on next week. ✅ See you next week. ❌ I went there in last year. ✅ I went there last year.",
            examples: [
                { english: "❌ See you on next week.", turkish: "YANLIŞ - next varsa edat kullanılmaz!" },
                { english: "✅ See you next week.", turkish: "DOĞRU - Gelecek hafta görüşürüz." },
                { english: "❌ I went there in last year.", turkish: "YANLIŞ - last varsa edat kullanılmaz!" },
                { english: "✅ I went there last year.", turkish: "DOĞRU - Geçen yıl oraya gittim." }
            ]
        }
    ],
    exercises: [
        { question: "I go to work ___ Monday.", options: ["at", "on", "in", "by"], correct: 1, explanation: "Günler için 'on' kullanılır." },
        { question: "The party is ___ 8 o'clock.", options: ["at", "on", "in", "by"], correct: 0, explanation: "Saatler için 'at' kullanılır." },
        { question: "I was born ___ 2000.", options: ["at", "on", "in", "by"], correct: 2, explanation: "Yıllar için 'in' kullanılır." },
        { question: "We go swimming ___ summer.", options: ["at", "on", "in", "by"], correct: 2, explanation: "Mevsimler için 'in' kullanılır." },
        { question: "I sleep ___ night.", options: ["at", "on", "in", "by"], correct: 0, explanation: "'At night' kalıp ifadedir, 'in the night' denmez!" },
        { question: "My birthday is ___ July 15th.", options: ["at", "on", "in", "by"], correct: 1, explanation: "Tam tarihler için (gün varsa) 'on' kullanılır." },
        { question: "I wake up ___ the morning.", options: ["at", "on", "in", "by"], correct: 2, explanation: "Günün bölümleri için 'in the morning' kullanılır." },
        { question: "See you ___ next week.", options: ["at", "on", "in", "-"], correct: 3, explanation: "'Next' varsa ASLA edat kullanılmaz!" },
        { question: "I went there ___ last year.", options: ["at", "on", "in", "-"], correct: 3, explanation: "'Last' varsa ASLA edat kullanılmaz!" },
        { question: "The meeting is ___ noon.", options: ["at", "on", "in", "by"], correct: 0, explanation: "'Noon' (öğlen) nokta atışı → 'at' kullanılır." }
    ]
};


// ===== UNIT 108-130: Diğer üniteler için kısa gramer kuralları =====

// ===== UNIT 108: ORDINAL NUMBERS (COMPREHENSIVE) =====
const unit108Grammar: EnglishGrammarUnit = {
    unitId: 108,
    title: "Ordinal Numbers - Sıra Sayıları (Kapsamlı)",
    rules: [
        {
            title: "1. 'Muhteşem Üçlü' (Ezberlemen Gerekenler)",
            explanation: "Bu kuralın en önemli kısmı ilk 3 sayıdır. Bunlar kural tanımaz, tamamen değişirler: 1st = First (Birinci), 2nd = Second (İkinci), 3rd = Third (Üçüncü). Kısaltma Mantığı: Sayının yanına kelimenin son iki harfi gelir. First → 1st, Second → 2nd, Third → 3rd.",
            examples: [
                { english: "1st = First", turkish: "Birinci (Kuralsız, ezberle!)" },
                { english: "2nd = Second", turkish: "İkinci (Kuralsız, ezberle!)" },
                { english: "3rd = Third", turkish: "Üçüncü (Kuralsız, ezberle!)" }
            ]
        },
        {
            title: "2. Standart Kural: '-th' Eki",
            explanation: "İlk 3 sayıdan sonrası çok kolaydır. Sayma sayısının sonuna sadece '-th' (peltek s sesi) ekleriz. Dikkat: 5th = Fifth (five değil!), 12th = Twelfth (v→f değişir).",
            examples: [
                { english: "4th = Fourth, 6th = Sixth, 7th = Seventh", turkish: "Dördüncü, Altıncı, Yedinci" },
                { english: "10th = Tenth, 11th = Eleventh", turkish: "Onuncu, On birinci" },
                { english: "5th = Fifth (NOT: Fiveth!)", turkish: "Beşinci (harf değişimi var)" },
                { english: "12th = Twelfth (v→f)", turkish: "On ikinci (harf değişimi var)" }
            ]
        },
        {
            title: "3. Çift Basamaklı Sayılar (20, 21, 30...)",
            explanation: "A) Sonu 'y' ile bitenler (20, 30, 40): Sonundaki 'y' düşer, yerine '-ieth' gelir. Twenty → Twentieth (20th). B) Ara Sayılar (21, 22, 35): Sadece sondaki rakamı sıra sayısı yaparız! Baştaki sayı normal kalır. ❌ Twenty-oneth DEME! ✅ Twenty-first (21st).",
            examples: [
                { english: "20th = Twentieth, 30th = Thirtieth", turkish: "Yirminci, Otuzuncu (y→ieth)" },
                { english: "21st = Twenty-first", turkish: "Yirmi birinci (sadece son rakam değişir!)" },
                { english: "22nd = Twenty-second", turkish: "Yirmi ikinci" },
                { english: "33rd = Thirty-third", turkish: "Otuz üçüncü" }
            ]
        },
        {
            title: "4. Nerelerde Kullanırız?",
            explanation: "1) TARİHLERDE: Yazarken '23 December' yazarız ama okurken 'The twenty-third of May' deriz. 2) KATLARDA: My office is on the second floor. 3) SIRALAMALARDA: He came first in the race.",
            examples: [
                { english: "Yazılış: 23 May → Okunuş: The twenty-third of May", turkish: "Tarihlerde sıra sayısı" },
                { english: "My office is on the second floor.", turkish: "Ofisim ikinci katta." },
                { english: "He came first in the race.", turkish: "Yarışta birinci geldi." },
                { english: "It's my 21st birthday!", turkish: "Bu benim 21. doğum günüm!" }
            ]
        }
    ],
    exercises: [
        { question: "My birthday is on the ___ of May.", options: ["five", "fifth", "fiveth", "fives"], correct: 1, explanation: "5 = fifth (fiveth diye bir şey yok!)" },
        { question: "I live on the ___ floor.", options: ["three", "third", "thirth", "thirdth"], correct: 1, explanation: "3rd = third (kuralsız, ezberle!)" },
        { question: "Today is the ___ of December.", options: ["twenty-one", "twenty-first", "twenty-oneth", "twentieth-one"], correct: 1, explanation: "21st = Twenty-first (sadece son rakam değişir!)" },
        { question: "She came ___ in the competition.", options: ["one", "first", "oneth", "the one"], correct: 1, explanation: "1st = first (kuralsız, ezberle!)" },
        { question: "It's his ___ birthday.", options: ["thirty", "thirtieth", "thirtyth", "thirtith"], correct: 1, explanation: "30th = thirtieth (y→ieth)" },
        { question: "This is the ___ time I'm telling you.", options: ["two", "second", "twoth", "seconed"], correct: 1, explanation: "2nd = second (kuralsız, ezberle!)" },
        { question: "My office is on the ___ floor.", options: ["twelve", "twelfth", "twelveth", "twelvth"], correct: 1, explanation: "12th = twelfth (v→f değişimi)" },
        { question: "The ___ of July is Independence Day in the USA.", options: ["four", "fourth", "forth", "foureth"], correct: 1, explanation: "4th = fourth" },
        { question: "He finished ___.", options: ["twenty-three", "twenty-third", "twenty-threeth", "twenty-thirdth"], correct: 1, explanation: "23rd = twenty-third" },
        { question: "It's the ___ century.", options: ["twenty-one", "twenty-first", "21", "twenty-oneth"], correct: 1, explanation: "21st century = Twenty-first century" }
    ]
};


// ===== UNIT 109: HOME & ROOMS - PREPOSITIONS OF PLACE (COMPREHENSIVE) =====
const unit109Grammar: EnglishGrammarUnit = {
    unitId: 109,
    title: "Prepositions of Place - Yer Edatları (Kapsamlı)",
    rules: [
        {
            title: "1. IN (İçinde / Büyük Alanlar)",
            explanation: "Bir şeyin sınırları belli bir alanın veya kapalı bir kutunun içinde olduğunu anlatır. En geniş kapsamlı edattır. Kapalı Alanlar: In the room, In the car, In the box. Şehirler ve Ülkeler: In Ankara, In Turkey. Kitap/Gazete: In the book, In the picture.",
            examples: [
                { english: "I live in Eskişehir.", turkish: "Eskişehir'de yaşıyorum. (Şehir → IN)" },
                { english: "The pen is in my bag.", turkish: "Kalem çantamın içinde. (Kapalı alan → IN)" },
                { english: "She is in the kitchen.", turkish: "O mutfakta. (Oda → IN)" },
                { english: "I saw it in the newspaper.", turkish: "Gazetede gördüm. (Yayın → IN)" }
            ]
        },
        {
            title: "2. ON (Üstünde / Yüzeyler)",
            explanation: "Burada anahtar kelime TEMAS. Bir şeyin bir yüzeye değdiğini anlatır. Yüzeyler: On the table, On the wall, On the floor. Katlar: On the second floor. Cadde/Sokak: On Atatürk Street. İletişim Araçları: On the phone, On the internet, On Instagram.",
            examples: [
                { english: "Your phone is on the desk.", turkish: "Telefonun masanın üzerinde. (Yüzey → ON)" },
                { english: "The picture is on the wall.", turkish: "Resim duvarda. (Yüzey → ON)" },
                { english: "I live on the third floor.", turkish: "Üçüncü katta yaşıyorum. (Kat → ON)" },
                { english: "I found it on the internet.", turkish: "İnternette buldum. (İletişim → ON)" }
            ]
        },
        {
            title: "3. AT (Nokta Atışı / Konum)",
            explanation: "'Neredesin?' sorusuna genel bir konumla cevap verirken kullanılır. Binanın içinde mi dışında mı olduğun önemli değildir. Belirli Noktalar: At the bus stop, At the door. Kurumlar: At home, At school, At work. KRİTİK FARK: I am AT the cinema (Sinemadayım, konumum orası) vs I am IN the cinema (Sinema salonunun içindeyim).",
            examples: [
                { english: "I am at home.", turkish: "Evdeyim. (Konum → AT)" },
                { english: "She is at school.", turkish: "O okulda. (Kurum → AT)" },
                { english: "Wait at the bus stop.", turkish: "Otobüs durağında bekle. (Nokta → AT)" },
                { english: "I am at the cinema. / I am in the cinema.", turkish: "Sinemadayım (konum) / Sinema salonundayım (içeride)" }
            ]
        },
        {
            title: "4. Diğer Önemli Yer Edatları",
            explanation: "Under (Altında), Next to (Yanında/Bitişik), Near (Yakınında), Between (Arasında), In front of (Önünde), Behind (Arkasında). Bu edatlar bir nesnenin diğerine göre konumunu anlatır.",
            examples: [
                { english: "The cat is under the table.", turkish: "Kedi masanın altında. (UNDER)" },
                { english: "The bank is next to the cafe.", turkish: "Banka kafenin yanında. (NEXT TO)" },
                { english: "I am between Ali and Ayşe.", turkish: "Ali ile Ayşe'nin arasındayım. (BETWEEN)" },
                { english: "There is a car in front of the house.", turkish: "Evin önünde bir araba var. (IN FRONT OF)" },
                { english: "The garden is behind the house.", turkish: "Bahçe evin arkasında. (BEHIND)" }
            ]
        }
    ],
    exercises: [
        { question: "The cat is ___ the box.", options: ["at", "on", "in", "by"], correct: 2, explanation: "Kapalı alan için 'in' kullanılır." },
        { question: "Your keys are ___ the table.", options: ["at", "on", "in", "by"], correct: 1, explanation: "Yüzey için 'on' kullanılır." },
        { question: "I live ___ Istanbul.", options: ["at", "on", "in", "by"], correct: 2, explanation: "Şehirler için 'in' kullanılır." },
        { question: "She is waiting ___ the bus stop.", options: ["at", "on", "in", "by"], correct: 0, explanation: "Belirli nokta için 'at' kullanılır." },
        { question: "The picture is ___ the wall.", options: ["at", "on", "in", "by"], correct: 1, explanation: "Duvar yüzey olduğu için 'on' kullanılır." },
        { question: "My office is ___ the second floor.", options: ["at", "on", "in", "by"], correct: 1, explanation: "Katlar için 'on' kullanılır." },
        { question: "The dog is ___ the table.", options: ["under", "on", "in", "at"], correct: 0, explanation: "Altında = 'under'." },
        { question: "The pharmacy is ___ the bank.", options: ["between", "next to", "in", "at"], correct: 1, explanation: "Yanında/Bitişik = 'next to'." },
        { question: "I am ___ home.", options: ["at", "on", "in", "by"], correct: 0, explanation: "'At home' kalıp ifadedir." },
        { question: "There is a garden ___ the house.", options: ["under", "behind", "in", "at"], correct: 1, explanation: "Arkasında = 'behind'." }
    ]
};


// ===== UNIT 110: FURNITURE - DEMONSTRATIVES (COMPREHENSIVE) =====
const unit110Grammar: EnglishGrammarUnit = {
    unitId: 110,
    title: "Demonstratives: This/That/These/Those (Kapsamlı)",
    rules: [
        {
            title: "1. Tabloyu Zihnine Kazı",
            explanation: "Bu tabloyu anladığın an konu biter! YAKIN (Near) + TEKİL = THIS (Bu). YAKIN (Near) + ÇOĞUL = THESE (Bunlar). UZAK (Far) + TEKİL = THAT (Şu/O). UZAK (Far) + ÇOĞUL = THOSE (Şunlar/Onlar). Tekillerde IS, çoğullarda ARE kullanılır.",
            examples: [
                { english: "THIS (Bu) + IS = Yakın + Tekil", turkish: "Elini uzatsan tutabilirsin" },
                { english: "THAT (Şu) + IS = Uzak + Tekil", turkish: "Parmağınla gösteriyorsun" },
                { english: "THESE (Bunlar) + ARE = Yakın + Çoğul", turkish: "Avucundalar, birden fazla" },
                { english: "THOSE (Şunlar) + ARE = Uzak + Çoğul", turkish: "Uzakta, birden fazla" }
            ]
        },
        {
            title: "2. Tekiller: This ve That (Fiil: IS)",
            explanation: "Nesne tek bir tanedir. Yardımcı fiil her zaman 'IS' olur. THIS: Çok yakın, dokunabilirsin. THAT: Uzak, parmağınla gösteriyorsun.",
            examples: [
                { english: "This is a book.", turkish: "Bu bir kitaptır. (Elimde tutuyorum)" },
                { english: "This is my phone.", turkish: "Bu benim telefonum. (Yakın)" },
                { english: "That is a car.", turkish: "Şu bir arabadır. (Uzaktaki arabayı gösteriyorum)" },
                { english: "That is your house.", turkish: "Şu senin evin. (Uzak)" }
            ]
        },
        {
            title: "3. Çoğullar: These ve Those (Fiil: ARE)",
            explanation: "Nesneler birden fazladır. İki kural: 1) Yardımcı fiil 'ARE' olur. 2) Nesnenin sonuna mutlaka '-s' (çoğul eki) gelir. THESE: Yakın + Çoğul. THOSE: Uzak + Çoğul.",
            examples: [
                { english: "These are my pens.", turkish: "Bunlar benim kalemlerim. (Avucumun içindeler)" },
                { english: "These are apples.", turkish: "Bunlar elmadır. (Yakın, birden fazla)" },
                { english: "Those are birds.", turkish: "Şunlar kuşlardır. (Gökyüzündeler, uzak)" },
                { english: "Those are expensive cars.", turkish: "Şunlar pahalı arabalar. (Uzak, birden fazla)" }
            ]
        },
        {
            title: "4. Kritik Okunuş Farkı + Özet Formüller",
            explanation: "TELAFFUZ: This = Kısa ve keskin (Dıs gibi). These = Uzun ve titrek (Diizz gibi, 's' harfi 'z' gibi okunur). FORMÜLLER: This/That + IS + Tekil İsim. These/Those + ARE + Çoğul İsim (-s).",
            examples: [
                { english: "This + is + (Tekil İsim)", turkish: "This is a chair." },
                { english: "That + is + (Tekil İsim)", turkish: "That is a table." },
                { english: "These + are + (Çoğul İsim -s)", turkish: "These are chairs." },
                { english: "Those + are + (Çoğul İsim -s)", turkish: "Those are tables." }
            ]
        }
    ],
    exercises: [
        { question: "___ books are mine.", options: ["This", "These", "That", "It"], correct: 1, explanation: "Çoğul (books) ve yakın için 'These' kullanılır." },
        { question: "___ is my phone.", options: ["This", "These", "Those", "Are"], correct: 0, explanation: "Tekil ve yakın için 'This' kullanılır." },
        { question: "___ are birds in the sky.", options: ["This", "That", "Those", "It"], correct: 2, explanation: "Çoğul (birds) ve uzak (sky) için 'Those' kullanılır." },
        { question: "___ is a beautiful house.", options: ["These", "Those", "That", "Are"], correct: 2, explanation: "Tekil (house) ve uzak için 'That' kullanılır." },
        { question: "___ are my keys.", options: ["This", "These", "That", "It"], correct: 1, explanation: "Çoğul (keys) ve yakın için 'These' kullanılır." },
        { question: "This ___ a chair.", options: ["is", "are", "am", "be"], correct: 0, explanation: "Tekil (This) ile 'is' kullanılır." },
        { question: "Those ___ expensive.", options: ["is", "are", "am", "be"], correct: 1, explanation: "Çoğul (Those) ile 'are' kullanılır." },
        { question: "___ is my teacher over there.", options: ["This", "These", "That", "Those"], correct: 2, explanation: "'Over there' (orada) uzaklık belirtir → 'That'." },
        { question: "___ apples are delicious.", options: ["This", "These", "That", "It"], correct: 1, explanation: "Çoğul (apples) ve yakın için 'These' kullanılır." },
        { question: "Look at ___ car! It's amazing!", options: ["this", "these", "those", "they"], correct: 0, explanation: "Tekil (car) için 'this' veya 'that' kullanılır, burada yakın." }
    ]
};


// ===== UNIT 111: BODY PARTS - HAVE GOT (COMPREHENSIVE) =====
const unit111Grammar: EnglishGrammarUnit = {
    unitId: 111,
    title: "Have Got - Sahiplik (Kapsamlı)",
    rules: [
        {
            title: "1. Kural Tablosu: Kim 'Have', Kim 'Has'?",
            explanation: "Öznemize göre kelime şekil değiştiriyor. GRUP 1 (I, You, We, They) → HAVE GOT. GRUP 2 (He, She, It) → HAS GOT. Kısaltmalar: I have got → I've got. She has got → She's got (Buradaki 's \"has\"tir, \"is\" değil!).",
            examples: [
                { english: "I have got a brother.", turkish: "Erkek kardeşim var. (I → have got)" },
                { english: "She has got a cat.", turkish: "Onun bir kedisi var. (She → has got)" },
                { english: "I've got blue eyes.", turkish: "Mavi gözlerim var. (Kısaltma)" },
                { english: "She's got long hair.", turkish: "Uzun saçları var. (Kısaltma)" }
            ]
        },
        {
            title: "2. Olumlu Cümleler (Positive)",
            explanation: "Formül: Özne + have got / has got + Nesne. Fiziksel özelliklerimizi (saç, göz, boy) anlatırken de hep bu kalıbı kullanırız.",
            examples: [
                { english: "I have got blue eyes.", turkish: "Mavi gözlerim var." },
                { english: "My father has got a car.", turkish: "Babamın bir arabası var. (He → has)" },
                { english: "They have got a big house.", turkish: "Onların büyük bir evi var." },
                { english: "The cat has got a long tail.", turkish: "Kedinin uzun kuyruğu var. (It → has)" }
            ]
        },
        {
            title: "3. Olumsuz Cümleler (Negative)",
            explanation: "'Benim yok' demek için 'not' ekini have/has kelimesine yapıştırıyoruz. Have not got → Haven't got. Has not got → Hasn't got.",
            examples: [
                { english: "I haven't got any money.", turkish: "Hiç param yok." },
                { english: "She hasn't got a computer.", turkish: "Onun bilgisayarı yok." },
                { english: "We haven't got time.", turkish: "Zamanımız yok." },
                { english: "He hasn't got a car.", turkish: "Arabası yok." }
            ]
        },
        {
            title: "4. Soru Cümleleri (Questions) + Kritik Not",
            explanation: "Yardımcı fiil (Have/Has) başa gelir! Formül: Have/Has + Özne + got + Nesne? Kısa cevaplar: Yes, I have. / No, I haven't. KRİTİK NOT: Amerikan vs İngiliz - British: I have got a car. American: I have a car. İkisi de doğru!",
            examples: [
                { english: "Have you got a pen?", turkish: "Kalemin var mı?" },
                { english: "Yes, I have. / No, I haven't.", turkish: "Evet, var. / Hayır, yok." },
                { english: "Has she got a boyfriend?", turkish: "Erkek arkadaşı var mı?" },
                { english: "Yes, she has. / No, she hasn't.", turkish: "Evet, var. / Hayır, yok." }
            ]
        }
    ],
    exercises: [
        { question: "She ___ blue eyes.", options: ["have got", "has got", "got", "having"], correct: 1, explanation: "'She' için 'has got' kullanılır." },
        { question: "I ___ a brother.", options: ["have got", "has got", "got", "having"], correct: 0, explanation: "'I' için 'have got' kullanılır." },
        { question: "They ___ a big house.", options: ["have got", "has got", "got", "having"], correct: 0, explanation: "'They' için 'have got' kullanılır." },
        { question: "He ___ any money.", options: ["haven't got", "hasn't got", "not got", "don't got"], correct: 1, explanation: "'He' için olumsuz 'hasn't got'." },
        { question: "___ you got a car?", options: ["Have", "Has", "Do", "Are"], correct: 0, explanation: "'You' için soru 'Have you got...?'" },
        { question: "___ she got a sister?", options: ["Have", "Has", "Do", "Is"], correct: 1, explanation: "'She' için soru 'Has she got...?'" },
        { question: "We ___ time.", options: ["haven't got", "hasn't got", "not got", "don't got"], correct: 0, explanation: "'We' için olumsuz 'haven't got'." },
        { question: "The dog ___ a long tail.", options: ["have got", "has got", "got", "having"], correct: 1, explanation: "'The dog' (It) için 'has got' kullanılır." },
        { question: "I ___ long hair.", options: ["'ve got", "'s got", "got", "having"], correct: 0, explanation: "'I've got' = I have got kısaltması." },
        { question: "Has he got a bike? - Yes, ___.", options: ["he has", "he have", "he got", "has he"], correct: 0, explanation: "Kısa cevap: Yes, he has." }
    ]
};


// ===== UNIT 112: CLOTHES - PLURALS (COMPREHENSIVE) =====
const unit112Grammar: EnglishGrammarUnit = {
    unitId: 112,
    title: "Plural Nouns - Çoğul İsimler (Kapsamlı)",
    rules: [
        {
            title: "1. Altın Kural: Standart '-s' Takısı",
            explanation: "İngilizcedeki kelimelerin %90'ı bu kurala uyar. Hiçbir şeyi değiştirme, sonuna sadece 's' harfi koy.",
            examples: [
                { english: "Car → Cars", turkish: "Araba → Arabalar" },
                { english: "Book → Books", turkish: "Kitap → Kitaplar" },
                { english: "Pen → Pens", turkish: "Kalem → Kalemler" },
                { english: "Shoe → Shoes", turkish: "Ayakkabı → Ayakkabılar" }
            ]
        },
        {
            title: "2. '-es' Alanlar (Tıslayan Harfler)",
            explanation: "Sonu -s, -ss, -sh, -ch, -x, -o ile bitenlere '-es' gelir. Neden? Yanına bir 's' daha koyarsan okunmaz! (Bus-s → Buss? Olmaz)",
            examples: [
                { english: "Bus → Buses", turkish: "Otobüs → Otobüsler" },
                { english: "Box → Boxes", turkish: "Kutu → Kutular" },
                { english: "Watch → Watches", turkish: "Saat → Saatler" },
                { english: "Potato → Potatoes", turkish: "Patates → Patatesler" }
            ]
        },
        {
            title: "3. '-ies' ve '-ves' Dönüşümleri",
            explanation: "A) Sessiz harf + Y ise: Y düşer, -ies gelir (City → Cities). Sesli harf + Y ise: Sadece -s gelir (Boy → Boys). B) Sonu F veya FE ile bitenlerde: F düşer, yerine -ves gelir (Wife → Wives).",
            examples: [
                { english: "City → Cities, Baby → Babies", turkish: "Şehir → Şehirler, Bebek → Bebekler (Sessiz+y → ies)" },
                { english: "Boy → Boys, Toy → Toys", turkish: "Erkek → Erkekler, Oyuncak → Oyuncaklar (Sesli+y → s)" },
                { english: "Wife → Wives, Knife → Knives", turkish: "Eş → Eşler, Bıçak → Bıçaklar (f → ves)" },
                { english: "Wolf → Wolves, Life → Lives", turkish: "Kurt → Kurtlar, Hayat → Hayatlar (f → ves)" }
            ]
        },
        {
            title: "4. Kuralsızlar (Irregular Plurals - Mutantlar)",
            explanation: "Bu kelimeler '-s' takısı almazlar, tamamen başka bir kelimeye dönüşürler. Bunları adın gibi ezberlemelisin! EN ÖNEMLİSİ: Person → People (Persons denmez!).",
            examples: [
                { english: "Man → Men, Woman → Women", turkish: "Adam → Adamlar, Kadın → Kadınlar" },
                { english: "Child → Children", turkish: "Çocuk → Çocuklar (ÇOK ÖNEMLİ!)" },
                { english: "Person → People", turkish: "Kişi → İnsanlar (Persons ASLA!)" },
                { english: "Tooth → Teeth, Foot → Feet", turkish: "Diş → Dişler, Ayak → Ayaklar" }
            ]
        }
    ],
    exercises: [
        { question: "I have two ___.", options: ["child", "childs", "children", "childrens"], correct: 2, explanation: "'Child' düzensiz çoğul: children." },
        { question: "There are many ___ in the city.", options: ["person", "persons", "people", "peoples"], correct: 2, explanation: "'Person' → 'People' (Persons denmez!)." },
        { question: "I bought three ___.", options: ["box", "boxs", "boxes", "boxies"], correct: 2, explanation: "Sonu -x ile bitenler → -es alır." },
        { question: "The ___ are playing.", options: ["baby", "babys", "babies", "babyes"], correct: 2, explanation: "Sessiz harf + y → y düşer, -ies gelir." },
        { question: "I have two ___.", options: ["watch", "watchs", "watches", "watchies"], correct: 2, explanation: "Sonu -ch ile bitenler → -es alır." },
        { question: "The ___ are on the table.", options: ["knife", "knifes", "knives", "knivies"], correct: 2, explanation: "Sonu -fe ile bitenler → fe düşer, -ves gelir." },
        { question: "I saw three ___.", options: ["woman", "womans", "women", "womens"], correct: 2, explanation: "'Woman' düzensiz çoğul: women." },
        { question: "Some ___ like toys.", options: ["boy", "boys", "boies", "boyes"], correct: 1, explanation: "Sesli harf + y → sadece -s gelir." },
        { question: "My ___ hurt.", options: ["foot", "foots", "feet", "feets"], correct: 2, explanation: "'Foot' düzensiz çoğul: feet." },
        { question: "I ate two ___.", options: ["potato", "potatos", "potatoes", "potatoies"], correct: 2, explanation: "Sonu -o ile bitenler → -es alır." }
    ]
};


// ===== UNIT 113: ANIMALS - ADJECTIVE ORDER (COMPREHENSIVE) =====
const unit113Grammar: EnglishGrammarUnit = {
    unitId: 113,
    title: "Adjective Order - Sıfat Sıralaması (Kapsamlı)",
    rules: [
        {
            title: "1. Sihirli Formül: OSASCOMP",
            explanation: "Sıralama Öznelden (Yorumdan) → Nesnele (Gerçeğe) doğru gider. Sıra: 1) Opinion (Görüş) 2) Size (Boyut) 3) Age (Yaş) 4) Shape (Şekil) 5) Color (Renk) 6) Origin (Köken) 7) Material (Malzeme) 8) Purpose (Amaç).",
            examples: [
                { english: "Opinion: Beautiful, Good, Ugly", turkish: "Görüş/Fikir (İlk sıra)" },
                { english: "Size: Big, Small, Tall", turkish: "Boyut (2. sıra)" },
                { english: "Color: Red, Blue, White", turkish: "Renk (5. sıra)" },
                { english: "Material: Wooden, Metal, Plastic", turkish: "Malzeme (7. sıra)" }
            ]
        },
        {
            title: "2. Mantığı Nasıl Çalışır?",
            explanation: "Liste, senin fikrinden (Güzel/Çirkin) başlayıp, o eşyanın değişmez fiziksel gerçeklerine (Rengi, Malzemesi) doğru gidiyor. Örnek: 'A beautiful small old white Turkish wooden table.' = Güzel + Küçük + Eski + Beyaz + Türk + Ahşap bir masa.",
            examples: [
                { english: "A beautiful small old white Turkish wooden table.", turkish: "Güzel, küçük, eski, beyaz, Türk yapımı, ahşap bir masa" },
                { english: "Beautiful (Opinion) → Small (Size) → Old (Age)", turkish: "Fikir → Boyut → Yaş sırası" },
                { english: "White (Color) → Turkish (Origin) → Wooden (Material)", turkish: "Renk → Köken → Malzeme sırası" }
            ]
        },
        {
            title: "3. En Sık Kullanılan Üçlü (Pratik Kural)",
            explanation: "Günlük hayatta 8 tane sıfatı arka arkaya dizmeyiz. Genelde 2-3 tane kullanırız. En sık kullanılan: BOYUT + RENK + EŞYA. Eğer fikir de varsa: FİKİR + BOYUT + RENK + EŞYA.",
            examples: [
                { english: "A big black car.", turkish: "Büyük siyah araba. (Boyut + Renk)" },
                { english: "A small white cat.", turkish: "Küçük beyaz kedi. (Boyut + Renk)" },
                { english: "A beautiful big black car.", turkish: "Güzel, büyük, siyah araba. (Fikir + Boyut + Renk)" },
                { english: "An old Italian car.", turkish: "Eski İtalyan arabası. (Yaş + Köken)" }
            ]
        },
        {
            title: "4. Dikkat Etmen Gerekenler",
            explanation: "VİRGÜL: Farklı kategorilerdeki sıfatların arasına virgül konmaz (big red car). Aynı kategoriden iki sıfat varsa virgül konur (red, black and white car). PURPOSE (AMAÇ) SIFATLARI: Bunlar isimle neredeyse birleşmiştir. 'Running shoes' (Koşu ayakkabısı), 'Sleeping bag' (Uyku tulumu). En sona gelirler.",
            examples: [
                { english: "A big red car. (NO comma)", turkish: "Farklı kategori = virgül yok" },
                { english: "A red, green and blue flag.", turkish: "Aynı kategori (renkler) = virgül var" },
                { english: "Running shoes, Sleeping bag", turkish: "Amaç sıfatları = isimle birleşik" },
                { english: "A new Italian leather bag.", turkish: "Yaş + Köken + Malzeme sırası" }
            ]
        }
    ],
    exercises: [
        { question: "It's a ___ dog.", options: ["brown big", "big brown", "brown a big", "big a brown"], correct: 1, explanation: "Size (big) + Color (brown) sırası." },
        { question: "She has a ___ cat.", options: ["white small", "small white", "a small white", "white a small"], correct: 1, explanation: "Size (small) + Color (white) sırası." },
        { question: "He bought a ___ car.", options: ["red beautiful", "beautiful red", "red a beautiful", "beautifully red"], correct: 1, explanation: "Opinion (beautiful) + Color (red) sırası." },
        { question: "I have a ___ bag.", options: ["leather Italian", "Italian leather", "leather a Italian", "Italian a leather"], correct: 1, explanation: "Origin (Italian) + Material (leather) sırası." },
        { question: "It's a ___ house.", options: ["old big", "big old", "old a big", "big a old"], correct: 1, explanation: "Size (big) + Age (old) sırası." },
        { question: "She wore a ___ dress.", options: ["silk beautiful", "beautiful silk", "silk a beautiful", "beautifully silk"], correct: 1, explanation: "Opinion (beautiful) + Material (silk) sırası." },
        { question: "I need ___.", options: ["shoes running", "running shoes", "shoes a running", "run shoes"], correct: 1, explanation: "Purpose sıfatları isimle birleşir: running shoes." },
        { question: "He has a ___ car.", options: ["new German fast", "fast new German", "German new fast", "new fast German"], correct: 1, explanation: "Age (new) en önce değil, Opinion/Speed (fast) önce gelir." },
        { question: "It's a ___ table.", options: ["wooden round", "round wooden", "wooden a round", "round a wooden"], correct: 1, explanation: "Shape (round) + Material (wooden) sırası." },
        { question: "She bought a ___ coat.", options: ["long black beautiful", "beautiful long black", "black long beautiful", "beautiful black long"], correct: 1, explanation: "Opinion + Size + Color sırası." }
    ]
};


// ===== UNIT 114: PROFESSIONS - CAN ABILITY (COMPREHENSIVE) =====
const unit114Grammar: EnglishGrammarUnit = {
    unitId: 114,
    title: "Can - Yetenek (Kapsamlı)",
    rules: [
        {
            title: "1. Olumlu Cümle (Yaparım!)",
            explanation: "Formül: Özne + CAN + Fiil (Yalın Hali). Kural: Fiilin önüne 'to' gelmez, sonuna ek gelmez. Fiil tertemiz kalır!",
            examples: [
                { english: "I can swim.", turkish: "Yüzebilirim." },
                { english: "He can play football.", turkish: "O futbol oynayabilir." },
                { english: "They can speak English.", turkish: "Onlar İngilizce konuşabilir." },
                { english: "I can use Unreal Engine.", turkish: "Unreal Engine kullanabilirim. (Gamer örneği!)" }
            ]
        },
        {
            title: "2. Olumsuz Cümle (Yapamam!)",
            explanation: "'Yapamam' demek için 'not' ekleriz. Uzun hali: Cannot (Bitişik yazılır). Kısa hali: Can't (En çok kullanılan). Formül: Özne + CAN'T + Fiil.",
            examples: [
                { english: "I can't fly.", turkish: "Uçamam." },
                { english: "She can't cook.", turkish: "O yemek yapamaz." },
                { english: "We can't see you.", turkish: "Seni göremiyoruz." },
                { english: "He cannot (can't) drive.", turkish: "O araba süremez." }
            ]
        },
        {
            title: "3. Soru Cümlesi (Yapabilir misin?)",
            explanation: "Kuralımız standart: Yardımcı fiili (Can) başa al, gerisine karışma. Formül: CAN + Özne + Fiil? Kısa Cevaplar: Yes, I can. / No, I can't.",
            examples: [
                { english: "Can you help me?", turkish: "Bana yardım edebilir misin?" },
                { english: "Can she drive a car?", turkish: "O araba sürebilir mi?" },
                { english: "Can they hear us?", turkish: "Bizi duyabiliyorlar mı?" },
                { english: "Yes, I can. / No, I can't.", turkish: "Evet, yapabilirim. / Hayır, yapamam." }
            ]
        },
        {
            title: "4. Çok Kritik Uyarı! 🚫",
            explanation: "Türk öğrencilerin en sık yaptığı hatalar: 1) Fiile 'to' eklemek: ❌ I can to go. ✅ I can go. 2) Fiile -s takısı eklemek: ❌ He can plays. ✅ He can play. 'Can' tüm öznelerle aynı kalır, fiil de yalın kalır!",
            examples: [
                { english: "❌ I can to go.", turkish: "YANLIŞ! 'to' yok!" },
                { english: "✅ I can go.", turkish: "DOĞRU!" },
                { english: "❌ He can plays.", turkish: "YANLIŞ! -s takısı yok!" },
                { english: "✅ He can play.", turkish: "DOĞRU!" }
            ]
        }
    ],
    exercises: [
        { question: "She ___ speak English.", options: ["can", "cans", "canned", "to can"], correct: 0, explanation: "'Can' tüm öznelerle aynı kalır, -s almaz." },
        { question: "I ___ swim.", options: ["can", "can to", "cans", "am can"], correct: 0, explanation: "'Can' sonrası 'to' gelmez." },
        { question: "___ you help me?", options: ["Can", "Do", "Are", "Is"], correct: 0, explanation: "Yetenek sorusu için 'Can' başa gelir." },
        { question: "He ___ fly.", options: ["can't", "can not to", "cans not", "don't can"], correct: 0, explanation: "Olumsuz için 'can't' veya 'cannot' kullanılır." },
        { question: "She can ___.", options: ["to cook", "cooks", "cook", "cooking"], correct: 2, explanation: "'Can' sonrası fiil yalın kalır, 'to' veya ek almaz." },
        { question: "Can she drive? - Yes, ___.", options: ["she can", "she cans", "can she", "she is"], correct: 0, explanation: "Kısa cevap: Yes, she can." },
        { question: "They ___ hear us.", options: ["can't", "don't can", "can't to", "not can"], correct: 0, explanation: "Olumsuz için 'can't' kullanılır." },
        { question: "I can ___ a computer.", options: ["to use", "uses", "use", "using"], correct: 2, explanation: "'Can' sonrası fiil yalın kalır." },
        { question: "Can you swim? - No, ___.", options: ["I can't", "I don't", "I'm not", "can't I"], correct: 0, explanation: "Olumsuz kısa cevap: No, I can't." },
        { question: "He ___ speak three languages.", options: ["can", "cans", "can to", "is can"], correct: 0, explanation: "'Can' hiç değişmez, tüm öznelerle aynı." }
    ]
};


// ===== UNIT 115: PLACES IN CITY - IMPERATIVES (COMPREHENSIVE) =====
const unit115Grammar: EnglishGrammarUnit = {
    unitId: 115,
    title: "Imperatives - Emir Kipi (Kapsamlı)",
    rules: [
        {
            title: "1. Olumlu Emir (Yap!)",
            explanation: "Dünyanın en kolay kuralı: Sadece Fiili Söyle! Cümlenin başına fiilin yalın halini koyarsın, yanına hiçbir ek getirmezsin. Bitti.",
            examples: [
                { english: "Come.", turkish: "Gel." },
                { english: "Go.", turkish: "Git." },
                { english: "Listen.", turkish: "Dinle." },
                { english: "Open the door.", turkish: "Kapıyı aç." },
                { english: "Press Any Key", turkish: "Herhangi bir tuşa bas. (Oyun dünyasından!)" }
            ]
        },
        {
            title: "2. Olumsuz Emir (Yapma!)",
            explanation: "Bir şeyi yasaklamak veya 'yapma' demek için fiilin başına sadece 'Don't' getirirsin. Formül: Don't + Fiil.",
            examples: [
                { english: "Don't go.", turkish: "Gitme." },
                { english: "Don't touch.", turkish: "Dokunma." },
                { english: "Don't be late.", turkish: "Geç kalma." },
                { english: "Don't speak Turkish here.", turkish: "Burada Türkçe konuşma." }
            ]
        },
        {
            title: "3. Kibarlık Katmak (Lütfen)",
            explanation: "Emir kipi bazen kaba duyulabilir. Bunu yumuşatmak için sihirli kelimemiz 'Please' (Lütfen) devreye girer. Cümlenin başına veya sonuna gelebilir.",
            examples: [
                { english: "Please sit down.", turkish: "Lütfen oturun." },
                { english: "Help me, please.", turkish: "Bana yardım et, lütfen." },
                { english: "Please wait here.", turkish: "Lütfen burada bekle." },
                { english: "Come in, please.", turkish: "İçeri gel, lütfen." }
            ]
        },
        {
            title: "4. 'Hadi Yapalım!' (Let's)",
            explanation: "Bu da bir emir kipi türüdür ama emir değil, öneri bildirir. Seni ve beni kapsar (Biz). Formül: Let's + Fiil. Olumsuzu: Let's not + Fiil.",
            examples: [
                { english: "Let's go.", turkish: "Hadi gidelim." },
                { english: "Let's play a game.", turkish: "Hadi bir oyun oynayalım." },
                { english: "Let's stop.", turkish: "Hadi duralım." },
                { english: "Let's not talk about this.", turkish: "Hadi bunun hakkında konuşmayalım." }
            ]
        }
    ],
    exercises: [
        { question: "___ the window, please.", options: ["Closes", "Close", "Closing", "To close"], correct: 1, explanation: "Emir kipinde fiilin yalın hali kullanılır." },
        { question: "___ be late!", options: ["Don't", "Doesn't", "Not", "No"], correct: 0, explanation: "Olumsuz emir için 'Don't' kullanılır." },
        { question: "___ go to the cinema.", options: ["Let's", "Let", "Lets", "Let is"], correct: 0, explanation: "'Hadi gidelim' için 'Let's' kullanılır." },
        { question: "___ here, please.", options: ["Sits", "Sit", "Sitting", "To sit"], correct: 1, explanation: "Emir kipinde fiil yalın kalır." },
        { question: "___ touch that!", options: ["Don't", "Not", "No", "Doesn't"], correct: 0, explanation: "Olumsuz emir: Don't + Fiil." },
        { question: "Please ___ the door.", options: ["opens", "open", "opening", "opened"], correct: 1, explanation: "'Please' ile bile fiil yalın kalır." },
        { question: "___ not talk about this.", options: ["Let's", "Don't", "Let", "Lets"], correct: 0, explanation: "'Konuşmayalım' için 'Let's not' kullanılır." },
        { question: "___ me, please.", options: ["Help", "Helps", "Helping", "To help"], correct: 0, explanation: "Emir kipinde fiil yalın kalır." },
        { question: "___ quiet!", options: ["Be", "Being", "Is", "Are"], correct: 0, explanation: "'Be' fiili de emir kipinde yalın kalır." },
        { question: "___ run in the corridor.", options: ["Don't", "Doesn't", "Not", "No"], correct: 0, explanation: "Yasaklama: Don't + Fiil." }
    ]
};


// ===== UNIT 116: TRANSPORTATION - PREPOSITIONS OF MOVEMENT (COMPREHENSIVE) =====
const unit116Grammar: EnglishGrammarUnit = {
    unitId: 116,
    title: "Prepositions of Movement - Hareket Edatları (Kapsamlı)",
    rules: [
        {
            title: "1. TO vs TOWARDS (Yönelme)",
            explanation: "TO (-e, -a): Hedef bellidir, oraya varacaksın (Navigasyondaki 'Varış Noktası'). TOWARDS (-e doğru): O yöne gidiyorsun ama belki oraya varmadan duracaksın.",
            examples: [
                { english: "I am going to school.", turkish: "Okula gidiyorum. (Hedefim okul)" },
                { english: "He is running towards me.", turkish: "Bana doğru koşuyor. (Belki yanımda duracak)" },
                { english: "Walk to the door.", turkish: "Kapıya yürü. (Varış noktası)" },
                { english: "The car is coming towards us.", turkish: "Araba bize doğru geliyor." }
            ]
        },
        {
            title: "2. INTO vs OUT OF (Giriş - Çıkış)",
            explanation: "'Kutu' mantığıyla düşün. INTO (İçine): Dışarıdan içeriye hareket. OUT OF (Dışına): İçeriden dışarıya hareket. DİKKAT: 'I am in the room' (Durum) vs 'I go into the room' (Hareket).",
            examples: [
                { english: "The cat jumped into the box.", turkish: "Kedi kutunun içine atladı. (INTO)" },
                { english: "Go into the room.", turkish: "Odaya gir. (INTO)" },
                { english: "Get out of the car.", turkish: "Arabadan çık. (OUT OF)" },
                { english: "He walked out of the room.", turkish: "Odadan çıktı. (OUT OF)" }
            ]
        },
        {
            title: "3. THROUGH vs ACROSS (Geçişler)",
            explanation: "ACROSS (Karşıdan karşıya): Bir yüzeyin bir tarafından diğerine (2 Boyutlu). THROUGH (İçinden geçerek): Etrafı kapalı bir şeyin içinden (3 Boyutlu - tünel, orman, duvar).",
            examples: [
                { english: "Walk across the street.", turkish: "Caddenin karşısına geç. (ACROSS - 2D)" },
                { english: "Swim across the river.", turkish: "Nehrin karşısına yüz. (ACROSS)" },
                { english: "Go through the tunnel.", turkish: "Tünelin içinden geç. (THROUGH - 3D)" },
                { english: "The ghost went through the wall.", turkish: "Hayalet duvarın içinden geçti. (THROUGH)" }
            ]
        },
        {
            title: "4. OVER vs UNDER ve ALONG vs PAST",
            explanation: "OVER (Üstünden): Temas etmeden, kavis çizerek geçmek. UNDER (Altından): Altından geçmek. ALONG (Boyunca): Çizgi takip ederek gitmek. PAST (Yanından): Uğramadan yanından geçip gitmek.",
            examples: [
                { english: "Jump over the fence.", turkish: "Çitin üzerinden atla. (OVER)" },
                { english: "The boat went under the bridge.", turkish: "Bot köprünün altından geçti. (UNDER)" },
                { english: "Walk along the beach.", turkish: "Sahil boyunca yürü. (ALONG)" },
                { english: "Go past the bank.", turkish: "Bankayı geç (yanından). (PAST)" }
            ]
        }
    ],
    exercises: [
        { question: "I'm going ___ the park.", options: ["at", "on", "to", "in"], correct: 2, explanation: "Varış noktası için 'to' kullanılır." },
        { question: "The cat jumped ___ the box.", options: ["in", "into", "on", "to"], correct: 1, explanation: "İçeriye hareket için 'into' kullanılır." },
        { question: "Get ___ the car.", options: ["out", "out of", "off of", "from"], correct: 1, explanation: "Dışarıya çıkış için 'out of' kullanılır." },
        { question: "Walk ___ the street.", options: ["through", "across", "along", "over"], correct: 1, explanation: "Karşıya geçmek (yüzey) için 'across' kullanılır." },
        { question: "Go ___ the tunnel.", options: ["across", "through", "over", "past"], correct: 1, explanation: "İçinden geçmek (tünel) için 'through' kullanılır." },
        { question: "Jump ___ the wall.", options: ["through", "across", "over", "into"], correct: 2, explanation: "Üstünden atlamak için 'over' kullanılır." },
        { question: "The boat went ___ the bridge.", options: ["over", "under", "through", "across"], correct: 1, explanation: "Altından geçmek için 'under' kullanılır." },
        { question: "Walk ___ the beach.", options: ["across", "through", "along", "past"], correct: 2, explanation: "Boyunca gitmek için 'along' kullanılır." },
        { question: "Go ___ the bank and turn left.", options: ["to", "into", "past", "through"], correct: 2, explanation: "Yanından geçip gitmek için 'past' kullanılır." },
        { question: "He is running ___ me.", options: ["to", "towards", "at", "on"], correct: 1, explanation: "Bir yöne doğru (varmadan) için 'towards' kullanılır." }
    ]
};


// ===== UNIT 117: DAILY ROUTINES - PRESENT SIMPLE (COMPREHENSIVE) =====
const unit117Grammar: EnglishGrammarUnit = {
    unitId: 117,
    title: "Present Simple - Geniş Zaman (Kapsamlı)",
    rules: [
        {
            title: "1. Olumlu Cümle (Positive)",
            explanation: "GRUP 1 (I, You, We, They): Fiile HİÇBİR ek gelmez, yalın haldedir. GRUP 2 (He, She, It): Fiilin sonuna '-s' takısı gelir. İstisna: Have → Has olur (She has breakfast).",
            examples: [
                { english: "I wake up at 7:00.", turkish: "7'de uyanırım. (Grup 1 - ek yok)" },
                { english: "He wakes up at 7:00.", turkish: "O 7'de uyanır. (Grup 2 - s eki)" },
                { english: "We go to school.", turkish: "Okula gideriz. (Grup 1)" },
                { english: "She goes to school.", turkish: "O okula gider. (Grup 2 - es eki)" }
            ]
        },
        {
            title: "2. Olumsuz Cümle (Negative)",
            explanation: "GRUP 1 → Don't (Do not). GRUP 2 → Doesn't (Does not). ÇOK ÖNEMLİ 🚨: 'Doesn't' girdiği anda fiildeki '-s' takısı DÜŞER! He plays → He doesn't play (plays DEĞİL!).",
            examples: [
                { english: "I don't smoke.", turkish: "Sigara içmem. (Grup 1 - don't)" },
                { english: "She doesn't eat meat.", turkish: "O et yemez. (Grup 2 - doesn't)" },
                { english: "He plays → He doesn't play.", turkish: "O oynar → O oynamaz. (S düştü!)" },
                { english: "We don't watch TV.", turkish: "TV izlemeyiz." }
            ]
        },
        {
            title: "3. Soru Cümlesi (Question)",
            explanation: "Sorularda Do ve Does cümlenin en başına gelir. 'Does' kullanıldığında fiildeki -s DÜŞER! Kısa cevaplar: Yes, I do. / No, I don't. veya Yes, she does. / No, she doesn't.",
            examples: [
                { english: "Do you play football?", turkish: "Futbol oynar mısın?" },
                { english: "Yes, I do. / No, I don't.", turkish: "Evet, oynarım. / Hayır, oynamam." },
                { english: "Does Ahmet like statistics?", turkish: "Ahmet istatistiği sever mi? (Likes yok!)" },
                { english: "Yes, he does. / No, he doesn't.", turkish: "Evet, sever. / Hayır, sevmez." }
            ]
        },
        {
            title: "4. Günlük Rutin Kelimeleri + Zaman Zarfları",
            explanation: "Rutin Fiiller: Wake up, Get up, Wash face, Get dressed, Have breakfast, Go to school, Take the bus, Have lunch, Come back home, Study, Sleep. ZAMAN ZARFLARI: Always (%100), Usually (%80), Often (%60), Sometimes (%50), Never (%0 - cümleyi olumsuz yapar).",
            examples: [
                { english: "I always drink coffee.", turkish: "Her zaman kahve içerim. (Always %100)" },
                { english: "She usually wakes up early.", turkish: "O genellikle erken uyanır. (Usually %80)" },
                { english: "He never eats breakfast.", turkish: "O asla kahvaltı yapmaz. (Never %0)" },
                { english: "I sometimes study at night.", turkish: "Bazen gece ders çalışırım. (Sometimes %50)" }
            ]
        }
    ],
    exercises: [
        { question: "She ___ every morning.", options: ["run", "runs", "running", "to run"], correct: 1, explanation: "'She' için fiile -s eklenir." },
        { question: "I ___ coffee every day.", options: ["drink", "drinks", "drinking", "drinked"], correct: 0, explanation: "'I' için fiil yalın kalır." },
        { question: "He ___ to school by bus.", options: ["go", "goes", "going", "goed"], correct: 1, explanation: "'He' için fiile -es eklenir (go → goes)." },
        { question: "They ___ TV at night.", options: ["doesn't watch", "don't watch", "not watch", "watches"], correct: 1, explanation: "'They' için olumsuz 'don't' kullanılır." },
        { question: "She ___ meat.", options: ["don't eat", "doesn't eat", "not eat", "eats not"], correct: 1, explanation: "'She' için olumsuz 'doesn't' kullanılır." },
        { question: "___ you like pizza?", options: ["Do", "Does", "Is", "Are"], correct: 0, explanation: "'You' için soru 'Do' ile başlar." },
        { question: "___ he play football?", options: ["Do", "Does", "Is", "Are"], correct: 1, explanation: "'He' için soru 'Does' ile başlar." },
        { question: "She doesn't ___ early.", options: ["wakes up", "wake up", "waking up", "waked up"], correct: 1, explanation: "'Doesn't' varsa fiil yalın kalır, -s düşer." },
        { question: "I ___ drink alcohol.", options: ["never", "always", "sometimes", "often"], correct: 0, explanation: "'Never' = %0 = asla." },
        { question: "She ___ breakfast at 8.", options: ["have", "has", "having", "haves"], correct: 1, explanation: "'She' için have → has olur." }
    ]
};


// ===== UNIT 118: TELLING TIME - SAAT KAÇI? (COMPREHENSIVE) =====
const unit118Grammar: EnglishGrammarUnit = {
    unitId: 118,
    title: "Telling Time - Saat Söyleme (Kapsamlı)",
    rules: [
        {
            title: "1. Tam Saatler (O'clock) + Dijital Okuma",
            explanation: "TAM SAAT: Dakika 00 ise 'o'clock' kullan. 07:00 → It is seven o'clock. DİJİTAL OKUMA (Kolay Yol): Gördüğün sayıları sırayla oku, %100 doğru! 10:15 → It is ten fifteen. Taktik: Sıkışırsan bu yöntemi kullan!",
            examples: [
                { english: "03:00 → It is three o'clock.", turkish: "Saat üç." },
                { english: "10:15 → It is ten fifteen.", turkish: "Saat on on beş. (Dijital)" },
                { english: "02:30 → It is two thirty.", turkish: "Saat iki otuz. (Dijital)" },
                { english: "05:45 → It is five forty-five.", turkish: "Saat beş kırk beş. (Dijital)" }
            ]
        },
        {
            title: "2. Klasik Okuma: PAST (Geçiyor)",
            explanation: "Dakika 1-30 arasındaysa PAST kullanılır. Formül: Dakika + PAST + Şimdiki Saat. Yelkovan sağ taraftaysa (saat geçiyor).",
            examples: [
                { english: "10:10 → It is ten past ten.", turkish: "Onu on geçiyor." },
                { english: "04:05 → It is five past four.", turkish: "Dördü beş geçiyor." },
                { english: "06:20 → It is twenty past six.", turkish: "Altıyı yirmi geçiyor." },
                { english: "09:25 → It is twenty-five past nine.", turkish: "Dokuzu yirmi beş geçiyor." }
            ]
        },
        {
            title: "3. Klasik Okuma: TO (Var / Kala)",
            explanation: "Dakika 31-59 arasındaysa TO kullanılır. MATEMATİK: 60 - dakika = kalan dakika. Formül: Kalan Dakika + TO + BİR SONRAKİ SAAT. Yelkovan sol taraftaysa (saate var).",
            examples: [
                { english: "02:50 → It is ten to three.", turkish: "Üçe on var. (60-50=10, bir sonraki saat=3)" },
                { english: "08:40 → It is twenty to nine.", turkish: "Dokuza yirmi var. (60-40=20)" },
                { english: "11:55 → It is five to twelve.", turkish: "On ikiye beş var." },
                { english: "07:35 → It is twenty-five to eight.", turkish: "Sekize yirmi beş var." }
            ]
        },
        {
            title: "4. Özel Terimler + AM/PM",
            explanation: "HALF PAST (Buçuk): 02:30 → Half past two (Hep 'geçiyor' denir). QUARTER PAST (Çeyrek geçe): 10:15 → Quarter past ten. QUARTER TO (Çeyrek kala): 10:45 → Quarter to eleven. AM/PM: AM = Sabah (00:00-12:00). PM = Öğleden sonra/Akşam (12:00-00:00). 08:00 AM = Sabah 8. 08:00 PM = Akşam 8 (20:00).",
            examples: [
                { english: "02:30 → It is half past two.", turkish: "Saat iki buçuk." },
                { english: "10:15 → It is quarter past ten.", turkish: "Onu çeyrek geçiyor." },
                { english: "10:45 → It is quarter to eleven.", turkish: "On bire çeyrek var." },
                { english: "08:00 AM / 08:00 PM", turkish: "Sabah 8 / Akşam 8 (20:00)" }
            ]
        }
    ],
    exercises: [
        { question: "It's 3:15. = It's ___.", options: ["quarter past three", "quarter to three", "half past three", "three o'clock"], correct: 0, explanation: "3:15 = çeyrek geçe = quarter past three." },
        { question: "It's 2:30. = It's ___.", options: ["half past two", "half to two", "two thirty past", "two half"], correct: 0, explanation: "2:30 = buçuk = half past two." },
        { question: "It's 4:45. = It's ___.", options: ["quarter past four", "quarter to five", "half past four", "four forty-five"], correct: 1, explanation: "4:45 = beşe çeyrek var = quarter to five." },
        { question: "It's 6:00. = It's ___.", options: ["six o'clock", "six past", "six to", "six zero"], correct: 0, explanation: "Tam saat = o'clock." },
        { question: "It's 7:10. = It's ___.", options: ["ten to seven", "ten past seven", "seven ten past", "seven to ten"], correct: 1, explanation: "7:10 = yediyi on geçiyor = ten past seven." },
        { question: "It's 8:50. = It's ___.", options: ["ten past eight", "ten to nine", "fifty past eight", "eight fifty to"], correct: 1, explanation: "8:50 = dokuza on var = ten to nine (60-50=10)." },
        { question: "It's 9:20. = It's ___.", options: ["twenty to nine", "twenty past nine", "nine twenty to", "twenty nine"], correct: 1, explanation: "9:20 = dokuzu yirmi geçiyor = twenty past nine." },
        { question: "It's 11:55. = It's ___.", options: ["five to twelve", "five past eleven", "fifty-five past eleven", "twelve to five"], correct: 0, explanation: "11:55 = on ikiye beş var = five to twelve." },
        { question: "08:00 PM means ___.", options: ["8 in the morning", "8 in the evening", "12 noon", "12 midnight"], correct: 1, explanation: "PM = öğleden sonra/akşam = evening." },
        { question: "It's 1:30. Dijital: ___.", options: ["one thirty", "thirty one", "half one", "one half past"], correct: 0, explanation: "Dijital okuma: 1:30 = one thirty." }
    ]
};


// ===== UNIT 119: WEATHER EXPRESSIONS (COMPREHENSIVE) =====
const unit119Grammar: EnglishGrammarUnit = {
    unitId: 119,
    title: "Weather Expressions - Hava Durumu (Kapsamlı)",
    rules: [
        {
            title: "1. Soruyu Nasıl Sorarız?",
            explanation: "Hava durumunu sormanın iki yolu: 'How is the weather?' (Hava nasıl?) - En basit hali. 'What is the weather like?' (Hava nasıl/ne gibi?) - Dikkat: Buradaki 'Like' sevmek değil, 'Gibi' anlamındadır.",
            examples: [
                { english: "How is the weather?", turkish: "Hava nasıl?" },
                { english: "What is the weather like?", turkish: "Hava nasıl? / Hava ne gibi?" },
                { english: "How is the weather in Istanbul?", turkish: "İstanbul'da hava nasıl?" },
                { english: "What's the weather like today?", turkish: "Bugün hava nasıl?" }
            ]
        },
        {
            title: "2. Temel Kural: '-y' Takısı (Sıfat Yapma)",
            explanation: "Hava durumu kelimeleri genelde isimden türetilir. İsmin sonuna '-y' eklersen sıfat olur. Sun → Sunny, Cloud → Cloudy, Wind → Windy, Rain → Rainy, Snow → Snowy, Fog → Foggy (çift g!). Formül: It is + Sıfat.",
            examples: [
                { english: "Sun → Sunny, Cloud → Cloudy", turkish: "Güneş → Güneşli, Bulut → Bulutlu" },
                { english: "Wind → Windy, Rain → Rainy", turkish: "Rüzgar → Rüzgarlı, Yağmur → Yağmurlu" },
                { english: "It is sunny.", turkish: "Hava güneşli." },
                { english: "It is windy today.", turkish: "Bugün hava rüzgarlı." }
            ]
        },
        {
            title: "3. Sıcaklık Dereceleri (Termometre)",
            explanation: "Hava sıcak mı soğuk mu söylemek gerekir. HOT 🔥🔥🔥 = Sıcak (Terleten). WARM ☀️ = Ilık/Sıcakça. COOL 🍃 = Serin. COLD ❄️ = Soğuk (Mont gerekir). FREEZING 🥶 = Dondurucu.",
            examples: [
                { english: "It is hot and sunny.", turkish: "Hava sıcak ve güneşli." },
                { english: "It is cold and snowy.", turkish: "Hava soğuk ve karlı." },
                { english: "It is warm today.", turkish: "Bugün hava ılık." },
                { english: "It is freezing outside!", turkish: "Dışarısı dondurucu!" }
            ]
        },
        {
            title: "4. Kritik Fark: 'Yağmurlu' vs 'Yağıyor'",
            explanation: "DURUM (Sıfat): It is rainy. (Hava yağmurlu - Genel durum). HAREKET (Fiil - Present Continuous): It is raining. (Yağmur yağıyor - Şu an oluyor). Pencereden bakıp 'Bak, kar yağıyor!' → 'Look! It is snowing.'",
            examples: [
                { english: "It is rainy.", turkish: "Hava yağmurlu. (Genel durum - Sıfat)" },
                { english: "It is raining.", turkish: "Yağmur yağıyor. (Şu an - Fiil)" },
                { english: "It is snowy.", turkish: "Hava karlı. (Sıfat)" },
                { english: "Look! It is snowing.", turkish: "Bak! Kar yağıyor. (Şu an - Fiil)" }
            ]
        }
    ],
    exercises: [
        { question: "Look! It ___ outside.", options: ["rain", "rains", "rainy", "is raining"], correct: 3, explanation: "Şu an devam eden eylem için 'is raining'." },
        { question: "___ is the weather today?", options: ["How", "What", "Where", "When"], correct: 0, explanation: "'Hava nasıl?' = 'How is the weather?'" },
        { question: "It is ___ today. (sun)", options: ["sun", "sunny", "sunning", "suns"], correct: 1, explanation: "Sun + y = Sunny (sıfat)." },
        { question: "It is ___ and cold.", options: ["snow", "snowy", "snowing", "snows"], correct: 1, explanation: "Genel durum için sıfat: snowy." },
        { question: "Look! It ___!", options: ["snowy", "snow", "is snowing", "snows"], correct: 2, explanation: "Şu an oluyor = Present Continuous: is snowing." },
        { question: "It is very ___ in summer.", options: ["cold", "hot", "freezing", "cool"], correct: 1, explanation: "Yaz = sıcak = hot." },
        { question: "What is the weather ___?", options: ["how", "like", "is", "today"], correct: 1, explanation: "'What is the weather like?' yapısı." },
        { question: "It is ___ outside. I need a coat.", options: ["hot", "warm", "cold", "sunny"], correct: 2, explanation: "Coat (mont) = soğuk hava = cold." },
        { question: "The weather is ___. (fog)", options: ["fog", "foggy", "foging", "fogs"], correct: 1, explanation: "Fog + gy = Foggy (çift g!)." },
        { question: "It is ___ in winter.", options: ["hot", "warm", "freezing", "sunny"], correct: 2, explanation: "Kış = dondurucu = freezing." }
    ]
};


// ===== UNIT 120: HOBBIES - LIKE + -ING (COMPREHENSIVE) =====
const unit120Grammar: EnglishGrammarUnit = {
    unitId: 120,
    title: "Like + -ing - Fiili İsim Yapmak (Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı Nedir? (Fiili İsim Yapmak)",
            explanation: "Türkçede 'Ben yüzmek severim' demeyiz, 'Yüzmeyi severim' deriz. İngilizcede de 'I like swim' dersen Tarzan gibi olursun! Fiilin sonuna -ing takarak onu eylemden aktivite ismine dönüştürürüz.",
            examples: [
                { english: "Play → Playing", turkish: "Oyna → Oynama / Oynamayı" },
                { english: "Swim → Swimming", turkish: "Yüz → Yüzme / Yüzmeyi" },
                { english: "I like swimming.", turkish: "Yüzmeyi severim. (DOĞRU)" },
                { english: "❌ I like swim.", turkish: "YANLIŞ - Tarzan gibi!" }
            ]
        },
        {
            title: "2. Duygu Skalası (Love Meter)",
            explanation: "Sadece 'Like' yok! Sevgini/nefretini derecelendir. Hepsinden sonra fiile -ing gelir. ❤️❤️ LOVE (Bayılmak) → 😊 ENJOY (Keyif almak) → 👍 LIKE (Sevmek) → 👎 DON'T LIKE (Sevmemek) → 😡 HATE (Nefret etmek). DİKKAT: He/She/It için '-s' takısı: She likes, He hates.",
            examples: [
                { english: "I love sleeping.", turkish: "Uyumaya bayılırım. ❤️❤️" },
                { english: "I enjoy reading.", turkish: "Okumaktan keyif alırım. 😊" },
                { english: "I like cooking.", turkish: "Yemek yapmayı severim. 👍" },
                { english: "I hate waiting.", turkish: "Beklemekten nefret ederim. 😡" }
            ]
        },
        {
            title: "3. '-ing' Takma Kuralları (Yazım)",
            explanation: "Genelde direkt -ing yapıştır (Go → Going). İSTİSNALAR: 1) Sonu 'e' ile bitenler: E'yi at! Dance → Dancing. 2) Sandviç Kuralı (Sessiz-Sesli-Sessiz): Son harf ikizleşir. Run → Running, Swim → Swimming. 3) Sonu 'y' ile bitenler: Hiçbir şey değişmez! Play → Playing, Study → Studying.",
            examples: [
                { english: "Dance → Dancing (e düşer)", turkish: "Dans → Dans etme" },
                { english: "Run → Running (n ikizleşir)", turkish: "Koş → Koşma" },
                { english: "Swim → Swimming (m ikizleşir)", turkish: "Yüz → Yüzme" },
                { english: "Play → Playing (y düşmez!)", turkish: "Oyna → Oynama" }
            ]
        },
        {
            title: "4. Olumsuz ve Soru (Present Simple Kuralları)",
            explanation: "'Like' bir fiildir, geniş zaman kuralları aynen işler! OLUMSUZ: Don't / Doesn't kullan. SORU: Do / Does başa gelir. She doesn't like driving. Does Ali like studying?",
            examples: [
                { english: "I don't like cleaning.", turkish: "Temizlik yapmayı sevmem." },
                { english: "She doesn't like driving.", turkish: "Araba sürmeyi sevmez. (doesn't!)" },
                { english: "Do you like playing FIFA?", turkish: "FIFA oynamayı sever misin?" },
                { english: "Does Ali like studying?", turkish: "Ali ders çalışmayı sever mi?" }
            ]
        }
    ],
    exercises: [
        { question: "I like ___ music.", options: ["listen", "listens", "listening to", "to listening"], correct: 2, explanation: "'Like' + fiil-ing yapısı." },
        { question: "She ___ swimming.", options: ["love", "loves", "loving", "to love"], correct: 1, explanation: "'She' için 'loves' (3. tekil şahıs -s)." },
        { question: "I ___ waiting.", options: ["hate", "hates", "hating", "hateing"], correct: 0, explanation: "'I' için 'hate' (ek yok)." },
        { question: "He enjoys ___.", options: ["read", "reads", "reading", "to read"], correct: 2, explanation: "'Enjoy' + fiil-ing yapısı." },
        { question: "Dance → ___", options: ["danceing", "dancing", "danccing", "danceying"], correct: 1, explanation: "Sonu 'e' ile bitenler: E düşer → Dancing." },
        { question: "Run → ___", options: ["runing", "running", "runeing", "runying"], correct: 1, explanation: "Sandviç kuralı: Sessiz-Sesli-Sessiz → n ikizleşir." },
        { question: "She ___ like cooking.", options: ["don't", "doesn't", "not", "isn't"], correct: 1, explanation: "'She' için olumsuz 'doesn't'." },
        { question: "___ you like playing games?", options: ["Do", "Does", "Is", "Are"], correct: 0, explanation: "'You' için soru 'Do' ile başlar." },
        { question: "Study → ___", options: ["studing", "studying", "studieing", "studyying"], correct: 1, explanation: "Sonu 'y' ile bitenler: Hiçbir şey değişmez!" },
        { question: "I ___ playing football.", options: ["enjoy", "enjoys", "enjoying", "to enjoy"], correct: 0, explanation: "'I' için 'enjoy' (ek yok)." }
    ]
};


// ===== UNIT 121: EMOTIONS & FEELINGS - FEEL + ADJECTIVE (COMPREHENSIVE) =====
const unit121Grammar: EnglishGrammarUnit = {
    unitId: 121,
    title: "Feel + Adjective - Hissetmek (Kapsamlı)",
    rules: [
        {
            title: "1. Mantığı ve Formülü",
            explanation: "Mantık: Özne + Hissetmek + Durum (Sıfat). 'Feel' fiili köprü görevi görür. Formül: Özne + FEEL/FEELS + Sıfat. DİKKAT: He/She/It için 's' takısı → She feels tired.",
            examples: [
                { english: "I feel happy.", turkish: "Mutlu hissediyorum." },
                { english: "She feels tired.", turkish: "O yorgun hissediyor. (feels - s takısı!)" },
                { english: "We feel excited.", turkish: "Heyecanlıyız." },
                { english: "He feels nervous.", turkish: "O gergin hissediyor." }
            ]
        },
        {
            title: "2. En Sık Kullanılan Durum Sıfatları",
            explanation: "Happy (Mutlu), Sad (Üzgün), Tired (Yorgun), Sick/Ill (Hasta), Hungry (Aç), Bored (Sıkılmış), Nervous (Gergin/Heyecanlı), Excited (Heyecanlı-Mutlu). Bu sıfatlar 'feel' ile birlikte kullanılır.",
            examples: [
                { english: "I feel happy today.", turkish: "Bugün mutlu hissediyorum." },
                { english: "He feels sad.", turkish: "O üzgün hissediyor." },
                { english: "I feel sick.", turkish: "Hasta hissediyorum / Midem bulanıyor." },
                { english: "I feel nervous before the exam.", turkish: "Sınavdan önce gergin hissediyorum." }
            ]
        },
        {
            title: "3. 'I am feeling' diyebilir miyim? + Soru Sormak",
            explanation: "EVET! 'I feel tired' (Genel, daha yaygın) veya 'I am feeling tired' (Şu an) ikisi de kabul edilir. SORU: 'How do you feel?' (Nasıl hissediyorsun?). 'Does she feel okay?' (O iyi hissediyor mu?).",
            examples: [
                { english: "I feel tired. / I am feeling tired.", turkish: "İkisi de DOĞRU!" },
                { english: "How do you feel?", turkish: "Nasıl hissediyorsun?" },
                { english: "I feel great.", turkish: "Harika hissediyorum." },
                { english: "Does she feel okay? - No, she feels sick.", turkish: "O iyi mi? - Hayır, hasta." }
            ]
        },
        {
            title: "4. Kritik Uyarı: 'To Be' vs 'Feel'",
            explanation: "Bu ikisi çok yakındır ama küçük fark var: 'I am tired' = Tespit, gerçek. 'I feel tired' = İçsel algı, hissetme. Genelde birbirinin yerine kullanılabilirler.",
            examples: [
                { english: "I am tired.", turkish: "Yorgunum. (Tespit - Gerçek)" },
                { english: "I feel tired.", turkish: "Yorgun hissediyorum. (İçsel algı)" },
                { english: "She is happy.", turkish: "O mutlu. (Tespit)" },
                { english: "She feels happy.", turkish: "O mutlu hissediyor. (İçsel algı)" }
            ]
        }
    ],
    exercises: [
        { question: "I feel ___.", options: ["tire", "tired", "tiring", "to tire"], correct: 1, explanation: "'Feel' + sıfat yapısı. Tired = yorgun." },
        { question: "She ___ happy.", options: ["feel", "feels", "feeling", "to feel"], correct: 1, explanation: "'She' için 'feels' (3. tekil şahıs -s)." },
        { question: "How ___ you feel?", options: ["do", "does", "is", "are"], correct: 0, explanation: "'You' için soru 'do' ile yapılır." },
        { question: "He feels ___ before the exam.", options: ["nerve", "nervous", "nervously", "nerving"], correct: 1, explanation: "'Feel' + sıfat: nervous (gergin)." },
        { question: "I feel ___. I want to eat.", options: ["hungry", "hunger", "hungrily", "hungering"], correct: 0, explanation: "'Hungry' sıfat = aç." },
        { question: "She ___ sick today.", options: ["feel", "feels", "is feeling", "feels / is feeling"], correct: 3, explanation: "İkisi de doğru: 'feels' veya 'is feeling'." },
        { question: "___ she feel okay?", options: ["Do", "Does", "Is", "Are"], correct: 1, explanation: "'She' için soru 'Does' ile yapılır." },
        { question: "I feel ___.", options: ["bore", "bored", "boring", "boredom"], correct: 1, explanation: "'Bored' = sıkılmış (sıfat)." },
        { question: "We ___ tired after school.", options: ["feel", "feels", "feeling", "to feel"], correct: 0, explanation: "'We' için 'feel' (ek yok)." },
        { question: "I ___ excited about the game.", options: ["feel", "am", "feel / am", "feels"], correct: 2, explanation: "İkisi de doğru: 'I feel' veya 'I am'." }
    ]
};


// ===== UNIT 122: SCHOOL & CLASSROOM - OBJECT PRONOUNS (COMPREHENSIVE) =====
const unit122Grammar: EnglishGrammarUnit = {
    unitId: 122,
    title: "Object Pronouns - Nesne Zamirleri (Kapsamlı)",
    rules: [
        {
            title: "1. Dönüşüm Tablosu (Formül)",
            explanation: "Özne (İşi Yapan) → Nesne (Etkilenen) dönüşümü: I→Me, You→You (değişmez!), He→Him, She→Her, It→It (değişmez!), We→Us, They→Them. Cümlenin başında özne, ortasında/sonunda nesne kullanılır.",
            examples: [
                { english: "I → Me", turkish: "Ben → Beni/Bana" },
                { english: "He → Him, She → Her", turkish: "O (erkek) → Onu/Ona, O (kadın) → Onu/Ona" },
                { english: "We → Us, They → Them", turkish: "Biz → Bizi/Bize, Onlar → Onları/Onlara" },
                { english: "You → You, It → It", turkish: "Sen/Siz ve It değişmez!" }
            ]
        },
        {
            title: "2. Altın Kural: Yerleşimi Neresi?",
            explanation: "Bu kelimeler ASLA cümlenin başında özne olarak kullanılmaz! 'Me go to school' → TARZANCA! Formül: Özne + Fiil + NESNE ZAMİRİ. Yani fiilden SONRA gelirler.",
            examples: [
                { english: "I love you.", turkish: "Ben seni seviyorum. (You = nesne)" },
                { english: "You love me.", turkish: "Sen beni seviyorsun. (Me = nesne)" },
                { english: "Call him.", turkish: "Onu ara. (Him = nesne)" },
                { english: "Help us.", turkish: "Bize yardım et. (Us = nesne)" }
            ]
        },
        {
            title: "3. Edatlarla Kullanımı (With, For, To...)",
            explanation: "Sadece fiilden sonra değil, edatlardan sonra da nesne zamirleri kullanılır. 'With me' (Benimle), 'For him' (Onun için), 'To them' (Onlara), 'About us' (Bizim hakkımızda). With I, For he YANLIŞ!",
            examples: [
                { english: "Come with me.", turkish: "Benimle gel. (With I değil!)" },
                { english: "This is for him.", turkish: "Bu onun için. (For he değil!)" },
                { english: "Talk to them.", turkish: "Onlarla konuş." },
                { english: "Shoot them! / Come with us.", turkish: "Onları vur! / Bizimle gel. (Oyun örnekleri)" }
            ]
        },
        {
            title: "4. Karşılaştırma Analizi (Yanlış vs Doğru)",
            explanation: "YANLIŞ: Ali loves she. DOĞRU: Ali loves her. (Fiilden sonra = her). YANLIŞ: The teacher saw we. DOĞRU: The teacher saw us. YANLIŞ: Him is happy. DOĞRU: He is happy. (Cümle başında özne!)",
            examples: [
                { english: "❌ Ali loves she. → ✅ Ali loves her.", turkish: "Fiilden sonra she→her" },
                { english: "❌ The teacher saw we. → ✅ ...saw us.", turkish: "Fiilden sonra we→us" },
                { english: "❌ Him is happy. → ✅ He is happy.", turkish: "Cümle başında özne kullanılır!" },
                { english: "❌ Me go home. → ✅ I go home.", turkish: "Cümle başında I (özne)" }
            ]
        }
    ],
    exercises: [
        { question: "She loves ___. (he)", options: ["he", "his", "him", "himself"], correct: 2, explanation: "'He' nesne olarak 'him' olur." },
        { question: "Give ___ the book. (I)", options: ["I", "my", "me", "mine"], correct: 2, explanation: "'I' nesne olarak 'me' olur." },
        { question: "Come with ___. (we)", options: ["we", "our", "us", "ours"], correct: 2, explanation: "'We' edat sonrası 'us' olur." },
        { question: "I can see ___. (they)", options: ["they", "their", "them", "theirs"], correct: 2, explanation: "'They' nesne olarak 'them' olur." },
        { question: "This is for ___. (she)", options: ["she", "her", "hers", "herself"], correct: 1, explanation: "'She' edat sonrası 'her' olur." },
        { question: "Call ___ tonight. (he)", options: ["he", "his", "him", "himself"], correct: 2, explanation: "'He' fiilden sonra 'him' olur." },
        { question: "Help ___! (we)", options: ["we", "our", "us", "ours"], correct: 2, explanation: "'We' fiilden sonra 'us' olur." },
        { question: "Tell ___ the truth. (they)", options: ["they", "their", "them", "theirs"], correct: 2, explanation: "'They' fiilden sonra 'them' olur." },
        { question: "Talk to ___. (I)", options: ["I", "my", "me", "mine"], correct: 2, explanation: "'I' edat sonrası 'me' olur." },
        { question: "___ is happy. (NOT: Him)", options: ["Him", "He", "His", "Himself"], correct: 1, explanation: "Cümle başında özne 'He' kullanılır, Him değil!" }
    ]
};


// ===== UNIT 123: HOLIDAYS & FESTIVALS - WOULD LIKE (COMPREHENSIVE) =====
const unit123Grammar: EnglishGrammarUnit = {
    unitId: 123,
    title: "Would Like - Kibar İstek (Kapsamlı)",
    rules: [
        {
            title: "1. İsimlerle Kullanımı (Bir Şey İstemek)",
            explanation: "Bir nesneyi (kahve, su, bilet) isterken kullanırız. Özne ne olursa olsun 'would like' ASLA değişmez, 's' takısı almaz! Formül: Özne + would like + Nesne.",
            examples: [
                { english: "I would like a cup of coffee.", turkish: "Bir fincan kahve istiyorum." },
                { english: "She would like a salad.", turkish: "O bir salata istiyor." },
                { english: "We would like the bill, please.", turkish: "Hesabı alabilir miyiz lütfen." },
                { english: "He would like some water.", turkish: "O biraz su istiyor." }
            ]
        },
        {
            title: "2. Fiillerle Kullanımı (Milyon Dolarlık Kural! 🚨)",
            explanation: "Bir eylemden bahsediyorsan araya mutlaka 'TO' girmeli! Formül: Özne + would like + TO + Fiil. ❌ I would like go home. ✅ I would like to go home.",
            examples: [
                { english: "❌ I would like go home.", turkish: "YANLIŞ! 'to' eksik!" },
                { english: "✅ I would like to go home.", turkish: "DOĞRU! Eve gitmek istiyorum." },
                { english: "She would like to play tennis.", turkish: "O tenis oynamak istiyor." },
                { english: "We would like to order now.", turkish: "Şimdi sipariş vermek istiyoruz." }
            ]
        },
        {
            title: "3. Kısaltması: 'd like (Havalı Söyleyiş)",
            explanation: "İngilizler konuşurken 'would' kelimesini 'd harfine sıkıştırır. I would like → I'd like. She would like → She'd like. We would like → We'd like. Kulağın buna alışsın!",
            examples: [
                { english: "I would like → I'd like", turkish: "Kısaltma - daha yaygın" },
                { english: "I'd like to join your team.", turkish: "Takımına katılmak isterim." },
                { english: "She'd like a coffee.", turkish: "O kahve istiyor." },
                { english: "We'd like to book a table.", turkish: "Masa rezervasyonu yapmak istiyoruz." }
            ]
        },
        {
            title: "4. Soru Sormak + Kritik Fark",
            explanation: "Formül: Would + Özne + like + Nesne/To Fiil? 'Would you like tea?' (Şu an teklif). 'Do you like tea?' (Genel zevk). KRİTİK FARK: Would = Şu an ikram/teklif. Do = Genel olarak sever misin?",
            examples: [
                { english: "Would you like some cake?", turkish: "Biraz kek ister misiniz? (İkram)" },
                { english: "Yes, please. / No, thank you.", turkish: "Evet, lütfen. / Hayır, teşekkürler." },
                { english: "Would you like to dance?", turkish: "Dans etmek ister misiniz? (Teklif)" },
                { english: "Do you like tea? vs Would you like tea?", turkish: "Çayı sever misin? vs Çay ister misin? (ŞU AN)" }
            ]
        }
    ],
    exercises: [
        { question: "I would like ___ go home.", options: ["-", "to", "for", "that"], correct: 1, explanation: "'Would like' + to + fiil." },
        { question: "She ___ a coffee.", options: ["would like", "would likes", "like would", "likes would"], correct: 0, explanation: "'Would like' hiç değişmez, -s almaz." },
        { question: "I'd like ___ order now.", options: ["-", "to", "for", "that"], correct: 1, explanation: "'Would like' + to + fiil (kısaltma)." },
        { question: "___ you like some cake?", options: ["Do", "Would", "Are", "Is"], correct: 1, explanation: "Teklif/İkram için 'Would you like?' kullanılır." },
        { question: "We would like ___ table for two.", options: ["a", "to", "the a", "-"], correct: 0, explanation: "İsim istiyoruz: 'a table'." },
        { question: "He'd like ___ play football.", options: ["-", "to", "for", "that"], correct: 1, explanation: "Fiil önünde 'to' şart!" },
        { question: "Would you like to dance? - ___.", options: ["Yes, please", "Yes, I like", "No, I don't like", "Yes, I would like"], correct: 0, explanation: "'Yes, please' veya 'No, thank you' cevabı." },
        { question: "I ___ like a sandwich.", options: ["would", "do", "am", "have"], correct: 0, explanation: "Kibar istek = 'would like'." },
        { question: "___ she like pizza? (Genel zevk)", options: ["Would", "Does", "Is", "Has"], correct: 1, explanation: "Genel zevk için 'Does she like...?' kullanılır." },
        { question: "They'd like ___ the museum.", options: ["visit", "visiting", "to visit", "visited"], correct: 2, explanation: "'Would like' + to + fiil." }
    ]
};


// ===== UNIT 124: COUNTRIES & NATIONALITIES - WHERE ARE YOU FROM? (COMPREHENSIVE) =====
const unit124Grammar: EnglishGrammarUnit = {
    unitId: 124,
    title: "Where are you from? - Nerelisin? (Kapsamlı)",
    rules: [
        {
            title: "1. Soru Kalıbı: Nerelisin?",
            explanation: "Soru standarttır, kalıp olarak ezberle: 'Where are you from?' (Nerelisin? / Nereden geliyorsun?). Where = Nere, From = -den/-dan.",
            examples: [
                { english: "Where are you from?", turkish: "Nerelisin? / Nereden geliyorsun?" },
                { english: "Where is she from?", turkish: "O nereli?" },
                { english: "Where are they from?", turkish: "Onlar nereli?" },
                { english: "Where u from? (Chat)", turkish: "Oyun/chat kısaltması" }
            ]
        },
        {
            title: "2. Yöntem 1: Ülke İsmiyle (FROM Kullanarak)",
            explanation: "Ülke adını söyleyeceksen mutlaka 'FROM' kullan. 'Türkiye'denim' diyorsun. Formül: Özne + am/is/are + FROM + Ülke/Şehir.",
            examples: [
                { english: "I am from Turkey.", turkish: "Ben Türkiye'denim." },
                { english: "She is from France.", turkish: "O Fransa'dan." },
                { english: "We are from Italy.", turkish: "Biz İtalya'danız." },
                { english: "I am from Eskişehir.", turkish: "Ben Eskişehirliyim. (Şehir de olur)" }
            ]
        },
        {
            title: "3. Yöntem 2: Milliyet İsmiyle (FROM YOK!)",
            explanation: "Milliyetini söyleyeceksen FROM KULLANMA! 'Ben Türk'tenim' denmez, 'Ben Türküm' denir. Formül: Özne + am/is/are + Milliyet. ❌ I am from Turkish. ✅ I am Turkish.",
            examples: [
                { english: "I am Turkish.", turkish: "Ben Türküm. (FROM YOK!)" },
                { english: "She is French.", turkish: "O Fransız." },
                { english: "We are Italian.", turkish: "Biz İtalyanız." },
                { english: "❌ I am from Turkish.", turkish: "YANLIŞ! Milliyet + from olmaz!" }
            ]
        },
        {
            title: "4. Kritik Tablo: Ülke vs Milliyet",
            explanation: "ÜLKE (FROM ile): Turkey, France, Germany, England, USA, Spain, Japan. MİLLİYET (FROM YOK): Turkish, French, German, English, American, Spanish, Japanese. En sık hata: 'I am from Turkish' → YANLIŞ!",
            examples: [
                { english: "Turkey → Turkish", turkish: "Türkiye → Türk" },
                { english: "France → French", turkish: "Fransa → Fransız" },
                { english: "Germany → German", turkish: "Almanya → Alman" },
                { english: "Japan → Japanese", turkish: "Japonya → Japon" }
            ]
        }
    ],
    exercises: [
        { question: "I'm ___ Japan.", options: ["at", "on", "from", "in"], correct: 2, explanation: "Ülke için 'from' kullanılır." },
        { question: "I'm ___. (Türk)", options: ["Turkey", "from Turkish", "Turkish", "from Turkey"], correct: 2, explanation: "Milliyet için 'from' kullanılmaz!" },
        { question: "She is ___ France.", options: ["at", "on", "from", "in"], correct: 2, explanation: "Ülke için 'from' kullanılır." },
        { question: "He is ___.", options: ["Germany", "German", "from German", "of Germany"], correct: 1, explanation: "Milliyet için 'from' yok: German." },
        { question: "Where ___ you from?", options: ["is", "are", "do", "does"], correct: 1, explanation: "'You' için 'are' kullanılır." },
        { question: "I am ___ Istanbul.", options: ["at", "on", "from", "in"], correct: 2, explanation: "Şehir için de 'from' kullanılır." },
        { question: "We are ___.", options: ["Spain", "Spanish", "from Spanish", "at Spain"], correct: 1, explanation: "Milliyet: Spanish." },
        { question: "She is ___ England.", options: ["at", "English", "from", "of"], correct: 2, explanation: "Ülke için 'from' kullanılır." },
        { question: "They are ___.", options: ["Japan", "Japanese", "from Japanese", "at Japan"], correct: 1, explanation: "Milliyet: Japanese." },
        { question: "❌ I am from ___.", options: ["Turkish", "Turkey", "Turk", "Turkiye"], correct: 1, explanation: "'From' ile ülke ismi kullanılır, milliyet değil!" }
    ]
};


// ===== UNIT 125: BASIC VERBS - PRESENT SIMPLE FULL (COMPREHENSIVE) =====
const unit125Grammar: EnglishGrammarUnit = {
    unitId: 125,
    title: "Present Simple - Tam Yapı (Kapsamlı)",
    rules: [
        {
            title: "1. Takımları Hatırla + Olumlu Cümle",
            explanation: "TAKIM 1 (I/You/We/They): Fiile asla dokunmazlar, yalın kalır. TAKIM 2 (He/She/It): Fiile mutlaka -s gelir. YAZIM: Genel → -s (plays). Tıslayanlar (-s,-sh,-ch,-x,-o) → -es (goes, watches). Sessiz+Y → -ies (study→studies). İstisna: have→has.",
            examples: [
                { english: "I play / She plays", turkish: "Ben oynarım / O oynar" },
                { english: "He goes, She watches, It fixes", turkish: "Tıslayan harfler → -es" },
                { english: "study → studies, cry → cries", turkish: "Sessiz+Y → -ies" },
                { english: "have → has (İstisna!)", turkish: "Have tamamen değişir" }
            ]
        },
        {
            title: "2. Olumsuz Cümle (-) ve 'Hırsız Does'",
            explanation: "ALTIN KURAL: DOES geldiği anda fiildeki -s takısını çalar ve yok eder! Formül: GRUP 1 → don't + Fiil. GRUP 2 → doesn't + Fiil (S YOK!). ❌ She doesn't goes. ✅ She doesn't go.",
            examples: [
                { english: "I don't work.", turkish: "Ben çalışmam." },
                { english: "She doesn't work.", turkish: "O çalışmaz. (doesn't + yalın fiil)" },
                { english: "❌ She doesn't goes.", turkish: "YANLIŞ! Hem doesn't hem -es var." },
                { english: "✅ She doesn't go.", turkish: "DOĞRU! Doesn't ekini aldı, fiil çıplak." }
            ]
        },
        {
            title: "3. Soru Cümlesi (?) + Wh- Questions",
            explanation: "Yardımcı fiili başa al! Does varsa fiilde -s olmaz! Formül: Do/Does + Özne + Fiil? WH- SORULAR: Wh- Kelimesi + Do/Does + Özne + Fiil? (What, Where, When, What time, Why, How)",
            examples: [
                { english: "Do you like games?", turkish: "Oyunları sever misin?" },
                { english: "Does she play football?", turkish: "O futbol oynar mı? (plays DEĞİL!)" },
                { english: "Where do you live?", turkish: "Nerede yaşıyorsun?" },
                { english: "What time does class start?", turkish: "Ders kaçta başlar?" }
            ]
        },
        {
            title: "4. Büyük Özet Tablosu",
            explanation: "Bu tabloyu zihnine kazı! OLUMLU: I work / She works. OLUMSUZ: I don't work / She doesn't work. SORU: Do you work? / Does she work? WH- SORU: Where do you work? / Where does she work?",
            examples: [
                { english: "I work. / She works.", turkish: "Olumlu (+)" },
                { english: "I don't work. / She doesn't work.", turkish: "Olumsuz (-)" },
                { english: "Do you work? / Does she work?", turkish: "Soru (?)" },
                { english: "Where do you work? / Where does she work?", turkish: "Wh- Soru" }
            ]
        }
    ],
    exercises: [
        { question: "___ she like pizza?", options: ["Do", "Does", "Is", "Are"], correct: 1, explanation: "'She' için 'Does' kullanılır." },
        { question: "He ___ to school every day.", options: ["go", "goes", "going", "goed"], correct: 1, explanation: "'He' için fiile -es eklenir (go→goes)." },
        { question: "She ___ hard.", options: ["study", "studies", "studys", "studying"], correct: 1, explanation: "Sessiz+Y → -ies (study→studies)." },
        { question: "He ___ a car.", options: ["have", "haves", "has", "having"], correct: 2, explanation: "Have → Has (istisna)." },
        { question: "She doesn't ___ English.", options: ["speaks", "speak", "speaking", "spoke"], correct: 1, explanation: "'Doesn't' varsa fiil yalın kalır, -s düşer!" },
        { question: "Where ___ you live?", options: ["do", "does", "is", "are"], correct: 0, explanation: "'You' için 'do' kullanılır." },
        { question: "What time ___ the movie start?", options: ["do", "does", "is", "are"], correct: 1, explanation: "'The movie' (It) için 'does' kullanılır." },
        { question: "Do you like games? - Yes, I ___.", options: ["like", "do", "does", "am"], correct: 1, explanation: "Kısa cevap: Yes, I do." },
        { question: "She ___ TV every evening.", options: ["watch", "watchs", "watches", "watching"], correct: 2, explanation: "Tıslayan harfler (-ch) → -es (watch→watches)." },
        { question: "___ they play football?", options: ["Do", "Does", "Is", "Are"], correct: 0, explanation: "'They' için 'Do' kullanılır." }
    ]
};


// ===== UNIT 126: PRESENT SIMPLE - ADVERBS OF FREQUENCY (COMPREHENSIVE) =====
const unit126Grammar: EnglishGrammarUnit = {
    unitId: 126,
    title: "Adverbs of Frequency - Sıklık Zarfları (Kapsamlı)",
    rules: [
        {
            title: "1. Sıklık Skalası (İhtimal Tablosu)",
            explanation: "%100 ALWAYS (Her zaman) → %90 USUALLY (Genellikle) → %75 OFTEN (Sık sık) → %50 SOMETIMES (Bazen) → %10 RARELY (Nadiren) → %0 NEVER (Asla). Bu oranlar kelimenin gücünü hissettirir.",
            examples: [
                { english: "Always = %100", turkish: "Her zaman / Hep (Fire vermeden, her gün)" },
                { english: "Usually = %90", turkish: "Genellikle (Çoğu zaman, rutin)" },
                { english: "Sometimes = %50", turkish: "Bazen (Yarı yarıya, arada sırada)" },
                { english: "Never = %0", turkish: "Asla / Hiç (Hiçbir zaman)" }
            ]
        },
        {
            title: "2. Kural A: Normal Fiillerle (Aksiyon)",
            explanation: "Koşmak, gitmek, yemek, oynamak gibi fiillerde zarf ÖZNE ile FİİLİN ARASINA girer (Sandviç yaparsın). Formül: Özne + ZARF + Fiil.",
            examples: [
                { english: "I always drink coffee.", turkish: "Ben her zaman kahve içerim." },
                { english: "She sometimes plays tennis.", turkish: "O bazen tenis oynar." },
                { english: "We never eat pork.", turkish: "Biz asla domuz eti yemeyiz." },
                { english: "He usually studies at night.", turkish: "O genellikle gece çalışır." }
            ]
        },
        {
            title: "3. Kural B: 'To Be' (Am/Is/Are) ile",
            explanation: "'Am, Is, Are' patron oldukları için kimseyi önlerine almazlar! Zarf onlardan SONRA gelir. Formül: Özne + am/is/are + ZARF + Sıfat. ❌ I always am happy. ✅ I am always happy.",
            examples: [
                { english: "I am always happy.", turkish: "Ben her zaman mutluyumdur. (DOĞRU)" },
                { english: "❌ I always am happy.", turkish: "YANLIŞ! 'To Be' zarfın önüne geçer." },
                { english: "She is never late.", turkish: "O asla geç kalmaz." },
                { english: "It is usually cold here.", turkish: "Burası genellikle soğuktur." }
            ]
        },
        {
            title: "4. 'Never' Uyarısı + How Often?",
            explanation: "'Never' zaten negatiftir, ayrıca 'Don't/Doesn't' koyamazsın! İngilizce'de çift negatif (Double Negative) YOKTUR! ❌ I don't never smoke. ✅ I never smoke. SORU: 'How often...?' = Ne sıklıkla?",
            examples: [
                { english: "❌ I don't never smoke.", turkish: "YANLIŞ! İki kere hayır denmez." },
                { english: "✅ I never smoke.", turkish: "DOĞRU! Ben asla sigara içmem." },
                { english: "How often do you study English?", turkish: "Ne sıklıkla İngilizce çalışırsın?" },
                { english: "I usually study at night.", turkish: "Genellikle gece çalışırım." }
            ]
        }
    ],
    exercises: [
        { question: "She ___ late for school.", options: ["is never", "never is", "never", "never are"], correct: 0, explanation: "To Be ile zarf SONRA gelir: is never." },
        { question: "I ___ drink coffee.", options: ["always", "am always", "always am", "is always"], correct: 0, explanation: "Normal fiil ile zarf ÖNCE gelir: always drink." },
        { question: "He ___ happy.", options: ["is usually", "usually is", "usually", "usually are"], correct: 0, explanation: "To Be ile zarf SONRA gelir: is usually." },
        { question: "They ___ play football.", options: ["sometimes", "are sometimes", "sometimes are", "is sometimes"], correct: 0, explanation: "Normal fiil ile zarf ÖNCE gelir: sometimes play." },
        { question: "She ___ eats meat.", options: ["never", "doesn't never", "don't never", "isn't never"], correct: 0, explanation: "Çift negatif olmaz! 'Never' tek başına yeterli." },
        { question: "___ do you go to gym?", options: ["How often", "How much", "How many", "How long"], correct: 0, explanation: "'Ne sıklıkla?' = 'How often?'" },
        { question: "I am ___ tired after work.", options: ["always", "always am", "am always", "always is"], correct: 0, explanation: "To Be var, zarf sonra: am always tired." },
        { question: "We ___ go to the cinema.", options: ["rarely", "are rarely", "rarely are", "is rarely"], correct: 0, explanation: "Normal fiil ile zarf önce: rarely go." },
        { question: "He ___ late.", options: ["is sometimes", "sometimes is", "sometimes", "sometimes are"], correct: 0, explanation: "To Be ile zarf sonra: is sometimes." },
        { question: "I ___ smoke.", options: ["never", "don't never", "am never", "never don't"], correct: 0, explanation: "'Never' = asla. Çift negatif kullanılmaz!" }
    ]
};


// ===== UNIT 127: PRESENT CONTINUOUS - FULL (COMPREHENSIVE) =====
const unit127Grammar: EnglishGrammarUnit = {
    unitId: 127,
    title: "Present Continuous - Şimdiki Zaman (Kapsamlı)",
    rules: [
        {
            title: "1. Altın Formül + Büyük Hata Alarmı 🚨",
            explanation: "Formül: Özne + AM/IS/ARE + Fiil-ING. ❌ I working (Motor var, kontak yok!). ❌ I am work (Kontak var, motor yok!). ✅ I am working (DOĞRU!). İkisi de ŞART!",
            examples: [
                { english: "I am going.", turkish: "Gidiyorum." },
                { english: "She is working.", turkish: "Çalışıyor." },
                { english: "❌ I working. / ❌ I am work.", turkish: "YANLIŞ! İkisi de eksik!" },
                { english: "✅ I am working.", turkish: "DOĞRU! Am + V-ing tamam." }
            ]
        },
        {
            title: "2. Olumlu, Olumsuz, Soru Cümleleri",
            explanation: "OLUMLU: Özne + am/is/are + V-ing (I am working). OLUMSUZ: Özne + am/is/are + NOT + V-ing (I am not listening). SORU: Am/Is/Are + Özne + V-ing? (Are you sleeping?). Kısa cevap: Yes, I am. / No, I'm not.",
            examples: [
                { english: "I am working now.", turkish: "Şu an çalışıyorum." },
                { english: "She is not (isn't) coming.", turkish: "O gelmiyor." },
                { english: "Are you sleeping? - Yes, I am.", turkish: "Uyuyor musun? - Evet." },
                { english: "What are you doing?", turkish: "Ne yapıyorsun? (Wh- soru)" }
            ]
        },
        {
            title: "3. Yazım Kuralları (-ing Takarken)",
            explanation: "Çoğu fiile direkt -ing yapıştır (Go→Going). İSTİSNALAR: 1) Sonu 'e' ile bitenler: E düşer! Make→Making. 2) Kısa fiiller (Sessiz-Sesli-Sessiz): Son harf ikizleşir. Run→Running, Sit→Sitting. 3) Sonu 'y' ile bitenler: HİÇBİR ŞEY DEĞİŞMEZ! Study→Studying.",
            examples: [
                { english: "Make → Making, Write → Writing", turkish: "'E' düşer!" },
                { english: "Run → Running, Sit → Sitting", turkish: "Son harf ikizleşir" },
                { english: "Study → Studying, Play → Playing", turkish: "'Y' düşmez!" },
                { english: "Go → Going (Normal)", turkish: "Direkt -ing eklenir" }
            ]
        },
        {
            title: "4. Sinyal Kelimeleri + Present Simple vs Continuous",
            explanation: "SİNYAL KELİMELER: Now, Right now, At the moment, Currently, Look!, Listen! = Present Continuous. KARŞILAŞTIRMA: Present Simple = Rutin (I drink tea). Present Continuous = Şu an olan (I am drinking tea).",
            examples: [
                { english: "Listen! Someone is crying.", turkish: "Dinle! Biri ağlıyor. (Şu an)" },
                { english: "I drink tea. (Present Simple)", turkish: "Çay içerim. (Genel huyum)" },
                { english: "I am drinking tea. (Present Cont.)", turkish: "Çay içiyorum. (Elimde bardak var)" },
                { english: "She works. vs She is working.", turkish: "Çalışır (Rutin) vs Çalışıyor (Şu an)" }
            ]
        }
    ],
    exercises: [
        { question: "They ___ now.", options: ["are working", "working", "is working", "works"], correct: 0, explanation: "'They' + 'are' + V-ing." },
        { question: "She ___ TV at the moment.", options: ["is watching", "watches", "watch", "watching"], correct: 0, explanation: "'At the moment' = şu an = Present Continuous." },
        { question: "I ___ to music now.", options: ["am listening", "listen", "listens", "listening"], correct: 0, explanation: "'Now' = Present Continuous: am + V-ing." },
        { question: "He ___ (not) sleeping.", options: ["is not", "does not", "not is", "are not"], correct: 0, explanation: "Olumsuz: is + not + V-ing." },
        { question: "___ you studying?", options: ["Are", "Do", "Does", "Is"], correct: 0, explanation: "Soru: Are + you + V-ing?" },
        { question: "Make → ___", options: ["makeing", "making", "makking", "maked"], correct: 1, explanation: "'E' düşer: Make → Making." },
        { question: "Run → ___", options: ["runing", "running", "runeing", "runned"], correct: 1, explanation: "Kısa fiil: Son harf ikizleşir." },
        { question: "Study → ___", options: ["studing", "studying", "studieing", "studyed"], correct: 1, explanation: "'Y' düşmez: Study → Studying." },
        { question: "Look! He ___.", options: ["is coming", "comes", "come", "coming"], correct: 0, explanation: "'Look!' = şu an = Present Continuous." },
        { question: "What ___ you doing?", options: ["are", "do", "does", "is"], correct: 0, explanation: "Wh- soru: What + are + you + V-ing?" }
    ]
};


// ===== UNIT 128: ADJECTIVES - COMPARATIVE (COMPREHENSIVE) =====
const unit128Grammar: EnglishGrammarUnit = {
    unitId: 128,
    title: "Comparative Adjectives - Karşılaştırma Sıfatları (Kapsamlı)",
    rules: [
        {
            title: "1. Kısa Kelimeler (Tek Heceli) → '-er' Takısı",
            explanation: "Sıfat tek heceli ise sonuna '-er' ekle. Old→Older, Fast→Faster, Tall→Taller, Cheap→Cheaper. YAZIM: Big→Bigger (son harf ikizleşir), Easy→Easier (y düşer, ier gelir).",
            examples: [
                { english: "Old → Older", turkish: "Yaşlı → Daha yaşlı" },
                { english: "Fast → Faster", turkish: "Hızlı → Daha hızlı" },
                { english: "Big → Bigger", turkish: "Büyük → Daha büyük (g ikizleşir)" },
                { english: "Easy → Easier", turkish: "Kolay → Daha kolay (y→ier)" }
            ]
        },
        {
            title: "2. Uzun Kelimeler (2+ Heceli) → 'More'",
            explanation: "Kelime uzunsa ve sonuna ek getirmek zor olacaksa, kelimeye dokunma, başına 'More' (Daha) getir. Beautiful→More beautiful (Beautifuler YOK!), Expensive→More expensive, Difficult→More difficult.",
            examples: [
                { english: "Beautiful → More beautiful", turkish: "Güzel → Daha güzel (ER olmaz!)" },
                { english: "Expensive → More expensive", turkish: "Pahalı → Daha pahalı" },
                { english: "Difficult → More difficult", turkish: "Zor → Daha zor" },
                { english: "Intelligent → More intelligent", turkish: "Zeki → Daha zeki" }
            ]
        },
        {
            title: "3. 'Than' (Karşılaştırma Köprüsü)",
            explanation: "İki şeyi kıyaslarken araya mutlaka 'THAN' koy. Bu Türkçedeki '-den/-dan' ekidir. Formül: A + is + Sıfat(-er/more) + THAN + B.",
            examples: [
                { english: "Ferrari is faster than Tofaş.", turkish: "Ferrari, Tofaş'tan daha hızlıdır." },
                { english: "English is easier than Chinese.", turkish: "İngilizce, Çinceden daha kolaydır." },
                { english: "This game is more difficult than that one.", turkish: "Bu oyun diğerinden daha zordur." },
                { english: "He is taller than me.", turkish: "O benden daha uzun." }
            ]
        },
        {
            title: "4. Kuralsızlar (Mutantlar) 🚨",
            explanation: "Kural bozan asiler: '-er' veya 'more' gelmez, kelime komple değişir! Good→Better (gooder YOK!), Bad→Worse (badder YOK!), Far→Further/Farther.",
            examples: [
                { english: "Good → Better", turkish: "İyi → Daha iyi (gooder YANLIŞ!)" },
                { english: "Bad → Worse", turkish: "Kötü → Daha kötü (badder YANLIŞ!)" },
                { english: "Far → Further / Farther", turkish: "Uzak → Daha uzak" },
                { english: "My computer is better than yours.", turkish: "Bilgisayarım seninkinden daha iyi." }
            ]
        }
    ],
    exercises: [
        { question: "This book is ___ than that one.", options: ["interesting", "more interesting", "most interesting", "interestinger"], correct: 1, explanation: "'Interesting' uzun sıfat → 'more' eklenir." },
        { question: "She is ___ than me.", options: ["tall", "taller", "more tall", "tallest"], correct: 1, explanation: "'Tall' kısa sıfat → '-er' eklenir." },
        { question: "English is ___ than Chinese.", options: ["easy", "easier", "more easy", "easiest"], correct: 1, explanation: "'Easy' kısa sıfat, y→ier: easier." },
        { question: "This car is ___ than that one.", options: ["expensive", "expensiver", "more expensive", "most expensive"], correct: 2, explanation: "'Expensive' uzun sıfat → 'more expensive'." },
        { question: "My grade is ___ than yours.", options: ["good", "gooder", "better", "more good"], correct: 2, explanation: "'Good' kuralsız → 'better'." },
        { question: "Today is ___ than yesterday.", options: ["hot", "hoter", "hotter", "more hot"], correct: 2, explanation: "'Hot' kısa sıfat, t ikizleşir: hotter." },
        { question: "This movie is ___ than the book.", options: ["bad", "badder", "worse", "more bad"], correct: 2, explanation: "'Bad' kuralsız → 'worse'." },
        { question: "My room is ___ than yours.", options: ["big", "biger", "bigger", "more big"], correct: 2, explanation: "'Big' kısa sıfat, g ikizleşir: bigger." },
        { question: "This laptop is ___ than the old one.", options: ["fast", "faster", "more fast", "fastest"], correct: 1, explanation: "'Fast' kısa sıfat → '-er' eklenir." },
        { question: "The city is ___ than the village.", options: ["far", "farer", "further", "more far"], correct: 2, explanation: "'Far' kuralsız → 'further/farther'." }
    ]
};


// ===== UNIT 129: PREPOSITIONS - REVIEW (COMPREHENSIVE) =====
const unit129Grammar: EnglishGrammarUnit = {
    unitId: 129,
    title: "Prepositions Review - Edatlar Tekrar (Kapsamlı)",
    rules: [
        {
            title: "1. 'Muhteşem Üçlü': IN - ON - AT (Zaman)",
            explanation: "Büyükten Küçüğe mantık! IN: En geniş (Yıllar, Aylar, Mevsimler, Günün vakti). ON: Orta (Günler, Tarihler, Özel günler). AT: En dar (Saatler, Anlar). İstisna: At night (In the night değil!).",
            examples: [
                { english: "In 2025 / In July / In Summer / In the morning", turkish: "IN: Yıl, Ay, Mevsim, Gün vakti" },
                { english: "On Monday / On 24 Dec / On my birthday", turkish: "ON: Gün, Tarih, Özel gün" },
                { english: "At 09:00 / At night / At noon", turkish: "AT: Saat, An (At night!)" },
                { english: "See you next week. (ON yok!)", turkish: "Next/Last/This/Every → edat olmaz!" }
            ]
        },
        {
            title: "2. 'Muhteşem Üçlü': IN - ON - AT (Mekan)",
            explanation: "IN: Ülkeler, Şehirler, Kapalı alanlar (In Turkey, In the room). ON: Yüzeyler, Katlar, İnternet (On the table, On the 2nd floor). AT: Konumlar, Adresler, Duraklar (At school, At home, At the bus stop).",
            examples: [
                { english: "In Turkey / In the room / In the book", turkish: "IN: Ülke, Şehir, Kapalı alan" },
                { english: "On the table / On the 2nd floor / On the internet", turkish: "ON: Yüzey, Kat, İnternet" },
                { english: "At school / At home / At the bus stop", turkish: "AT: Konum, Adres, Durak" },
                { english: "I am in the cafe vs I am at the cafe", turkish: "IN: İçerideyim / AT: Oradayım (genel)" }
            ]
        },
        {
            title: "3. Hareket Edatları (Action!)",
            explanation: "TO: Hedef (Go to school). INTO: İçine (Go into the room). OUT OF: Dışına (Get out of the car). THROUGH: İçinden/3D (Walk through the forest). ACROSS: Karşıya/2D (Swim across the river). FROM: Çıkış noktası (I am coming from home).",
            examples: [
                { english: "Go to school.", turkish: "Okula git. (TO: Hedef)" },
                { english: "Go into the room.", turkish: "Odaya gir. (INTO: İçine)" },
                { english: "Get out of the car.", turkish: "Arabadan çık. (OUT OF: Dışına)" },
                { english: "Walk through the forest.", turkish: "Ormanın içinden yürü. (THROUGH: 3D)" }
            ]
        },
        {
            title: "4. En Sık Yapılan Hatalar (Çeldiriciler 🚨)",
            explanation: "HOME İstisnası: At home (Evdeyim). Go home (To YOK! Go to home YANLIŞ!). ZAMAN: Next/Last/This/Every → edat olmaz (See you next week). GECE: In the morning AMA At night!",
            examples: [
                { english: "I am at home.", turkish: "Evdeyim. (At home)" },
                { english: "❌ Go to home. ✅ Go home.", turkish: "Eve git. (To olmaz!)" },
                { english: "❌ See you on next week. ✅ See you next week.", turkish: "Next/Last/This = edat yok!" },
                { english: "In the morning ↔ At night", turkish: "Sabah IN, Gece AT!" }
            ]
        }
    ],
    exercises: [
        { question: "I live ___ Istanbul.", options: ["at", "on", "in", "to"], correct: 2, explanation: "Şehirler için 'in' kullanılır." },
        { question: "The meeting is ___ 3 o'clock.", options: ["in", "on", "at", "to"], correct: 2, explanation: "Saatler için 'at' kullanılır." },
        { question: "I was born ___ July.", options: ["in", "on", "at", "to"], correct: 0, explanation: "Aylar için 'in' kullanılır." },
        { question: "She works ___ Monday.", options: ["in", "on", "at", "to"], correct: 1, explanation: "Günler için 'on' kullanılır." },
        { question: "Go ___!", options: ["to home", "home", "at home", "in home"], correct: 1, explanation: "'Home' ile 'to' kullanılmaz!" },
        { question: "I am ___ home.", options: ["in", "on", "at", "to"], correct: 2, explanation: "'Evdeyim' = 'at home'." },
        { question: "See you ___ week.", options: ["on next", "in next", "next", "at next"], correct: 2, explanation: "'Next' önünde edat olmaz!" },
        { question: "I wake up ___ the morning.", options: ["in", "on", "at", "to"], correct: 0, explanation: "Sabah = 'in the morning'." },
        { question: "I sleep ___ night.", options: ["in", "on", "at", "to"], correct: 2, explanation: "Gece = 'at night' (İstisna!)." },
        { question: "The book is ___ the table.", options: ["in", "on", "at", "to"], correct: 1, explanation: "Yüzey için 'on' kullanılır." }
    ]
};


// ===== UNIT 130: A1 GRAMMAR REVIEW (COMPREHENSIVE) =====
const unit130Grammar: EnglishGrammarUnit = {
    unitId: 130,
    title: "A1 Grammar Review - Büyük Özet (Kapsamlı)",
    rules: [
        {
            title: "1. Kimsin ve Neyin Var? (Durum & Sahiplik)",
            explanation: "TO BE: am/is/are (Hareket yok, durum var. I am a student). SAHİPLİK: have/has got (She has got a car). VAR/YOK: There is/are (There is a pen on the table).",
            examples: [
                { english: "I am a student.", turkish: "Ben öğrenciyim. (To Be = durum)" },
                { english: "She has got a car.", turkish: "Onun arabası var. (Sahiplik)" },
                { english: "There is a pen.", turkish: "Bir kalem var. (Var/Yok)" },
                { english: "There are two books.", turkish: "İki kitap var. (Çoğul)" }
            ]
        },
        {
            title: "2. Zamanlar Savaşı (Tenses)",
            explanation: "PRESENT SIMPLE: Rutinler, Gerçekler (Do/Does + Fiil/-s). İpucu: Always, Usually, Every day. PRESENT CONTINUOUS: Şu an olanlar (Am/Is/Are + Fiil-ing). İpucu: Now, At the moment. FARK: I play games (Genel) vs I am playing (Şu an).",
            examples: [
                { english: "I play games. (Present Simple)", turkish: "Oyun oynarım. (Genel hobim)" },
                { english: "I am playing games. (Present Cont.)", turkish: "Oyun oynuyorum. (Şu an)" },
                { english: "She works every day.", turkish: "Her gün çalışır. (Rutin)" },
                { english: "She is working now.", turkish: "Şu an çalışıyor. (Şimdi)" }
            ]
        },
        {
            title: "3. Modallar ve Emirler (Güç & İstek)",
            explanation: "CAN: Yetenek/Güç (Fiil yalın, ek yok. I can code). WOULD LIKE: Kibar istek (Fiil varsa 'to' gelir. I would like to go). IMPERATIVES: Emir (Özne yok, direkt fiil. Stop! Don't go!).",
            examples: [
                { english: "I can code.", turkish: "Kod yazabilirim. (Yetenek)" },
                { english: "She can swim.", turkish: "O yüzebilir." },
                { english: "I would like to go.", turkish: "Gitmek isterim. (Kibar istek)" },
                { english: "Stop! / Don't go!", turkish: "Dur! / Gitme! (Emir)" }
            ]
        },
        {
            title: "4. Edatlar (IN-ON-AT) + Tanımlamalar",
            explanation: "IN: Geniş (2025, July, Turkey). ON: Orta (Monday, table). AT: Dar (09:00, school). POSSESSIVES: My, His, Her. OBJECT PRONOUNS: me, him, her. PLURALS: cars, boxes, men. COMPARATIVES: faster, more expensive + than. ARTICLES: a/an (belirsiz), the (belirli).",
            examples: [
                { english: "In 2025 / On Monday / At 09:00", turkish: "Edatlar (Büyükten küçüğe)" },
                { english: "My book / Call me", turkish: "İyelik / Nesne zamiri" },
                { english: "Cars, Boxes, Men", turkish: "Çoğullar (Düzenli/Düzensiz)" },
                { english: "Faster than / More expensive than", turkish: "Karşılaştırma (-er/more)" }
            ]
        }
    ],
    exercises: [
        { question: "She ___ to school every day.", options: ["go", "goes", "going", "is go"], correct: 1, explanation: "'She' + V-s (Present Simple)." },
        { question: "I ___ a student.", options: ["am", "is", "are", "be"], correct: 0, explanation: "'I' ile 'am' kullanılır." },
        { question: "They ___ playing now.", options: ["is", "are", "am", "does"], correct: 1, explanation: "'They' + 'are' + V-ing." },
        { question: "She has ___ a car.", options: ["get", "got", "getting", "gets"], correct: 1, explanation: "'Have/Has got' = sahiplik." },
        { question: "I ___ swim.", options: ["can", "cans", "am can", "do can"], correct: 0, explanation: "'Can' hiç değişmez, fiil yalın." },
        { question: "I would like ___ go home.", options: ["-", "to", "for", "that"], correct: 1, explanation: "'Would like' + to + fiil." },
        { question: "There ___ a book on the table.", options: ["is", "are", "be", "am"], correct: 0, explanation: "Tekil isim için 'is' kullanılır." },
        { question: "The meeting is ___ Monday.", options: ["in", "on", "at", "to"], correct: 1, explanation: "Günler için 'on' kullanılır." },
        { question: "She is ___ than me.", options: ["tall", "taller", "more tall", "tallest"], correct: 1, explanation: "Kısa sıfat + -er + than." },
        { question: "Give ___ the book. (I)", options: ["I", "my", "me", "mine"], correct: 2, explanation: "'I' nesne olarak 'me' olur." }
    ]
};


// Export function
export function getEnglishA1GrammarForUnit(unitId: number): EnglishGrammarUnit {
    const idMapping: { [key: number]: EnglishGrammarUnit } = {
        101: unit101Grammar, 102: unit102Grammar, 103: unit103Grammar, 104: unit104Grammar, 105: unit105Grammar,
        106: unit106Grammar, 107: unit107Grammar, 108: unit108Grammar, 109: unit109Grammar, 110: unit110Grammar,
        111: unit111Grammar, 112: unit112Grammar, 113: unit113Grammar, 114: unit114Grammar, 115: unit115Grammar,
        116: unit116Grammar, 117: unit117Grammar, 118: unit118Grammar, 119: unit119Grammar, 120: unit120Grammar,
        121: unit121Grammar, 122: unit122Grammar, 123: unit123Grammar, 124: unit124Grammar, 125: unit125Grammar,
        126: unit126Grammar, 127: unit127Grammar, 128: unit128Grammar, 129: unit129Grammar, 130: unit130Grammar,
    };

    return idMapping[unitId] || unit101Grammar;
}
