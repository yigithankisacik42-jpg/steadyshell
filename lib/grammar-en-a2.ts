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

// ===== UNIT 131: Past Simple - Regular Verbs =====
const unit131Grammar: EnglishGrammarUnit = {
    unitId: 131,
    title: "Past Simple - Regular Verbs (Düzenli Fiiller)",
    rules: [
        {
            title: "1. Temel Kural: Fiilin Sonuna -ed Ekle",
            explanation: "Geçmiş zamanda düzenli fiilleri kullanmak için fiilin sonuna -ed eki eklenir. Bu kural tüm kişiler için aynıdır (I, you, he, she, it, we, they hepsi aynı şekli kullanır).",
            examples: [
                { english: "I worked yesterday.", turkish: "Dün çalıştım." },
                { english: "She visited her grandmother.", turkish: "Büyükannesini ziyaret etti." },
                { english: "They played football.", turkish: "Futbol oynadılar." },
                { english: "We watched a movie.", turkish: "Film izledik." }
            ]
        },
        {
            title: "2. Özel Durumlar",
            explanation: "Bazı fiillerde -ed eklerken küçük değişiklikler olur:\n• E ile bitenler: Sadece -d eklenir (like → liked)\n• Sessiz harf + y ile bitenler: y düşer, -ied eklenir (study → studied)\n• Kısa fiillerde (CVC): Son harf iki kez yazılır (stop → stopped)",
            examples: [
                { english: "like → liked, love → loved", turkish: "E ile bitenler: sadece -d" },
                { english: "study → studied, try → tried", turkish: "Sessiz+y: y→ied" },
                { english: "stop → stopped, plan → planned", turkish: "Kısa fiiller: çift harf" }
            ]
        },
        {
            title: "3. Olumsuz Cümleler: didn't + fiil",
            explanation: "Geçmiş zamanda olumsuz cümle kurmak için 'didn't' (did not) kullanılır. Fiil yalın halde (mastar) kalır, -ed eki KULLANILMAZ.",
            examples: [
                { english: "I didn't work yesterday.", turkish: "Dün çalışmadım." },
                { english: "She didn't visit her grandmother.", turkish: "Büyükannesini ziyaret etmedi." },
                { english: "They didn't play football.", turkish: "Futbol oynamadılar." }
            ]
        },
        {
            title: "4. Soru Cümleleri: Did + özne + fiil?",
            explanation: "'Did' cümlenin başına gelir ve fiil yalın halde kalır. Kısa cevaplar: Yes, I did. / No, I didn't.",
            examples: [
                { english: "Did you work yesterday?", turkish: "Dün çalıştın mı?" },
                { english: "Did she visit her grandmother?", turkish: "Büyükannesini ziyaret etti mi?" },
                { english: "Yes, I did. / No, I didn't.", turkish: "Evet, çalıştım. / Hayır, çalışmadım." }
            ]
        }
    ],
    exercises: [
        { question: "I ___ TV yesterday.", options: ["watch", "watched", "watching", "watches"], correct: 1, explanation: "Geçmiş zaman: watch → watched" },
        { question: "She ___ (not visit) her friend.", options: ["didn't visited", "didn't visit", "not visited", "don't visit"], correct: 1, explanation: "Olumsuzda fiil yalın: didn't + visit" },
        { question: "___ you ___ the movie?", options: ["Do/like", "Did/liked", "Did/like", "Does/like"], correct: 2, explanation: "Soruda fiil yalın: Did + you + like" },
        { question: "We ___ football last Sunday.", options: ["play", "played", "playing", "plays"], correct: 1, explanation: "Geçmiş zaman: play → played" },
        { question: "He ___ hard for the exam.", options: ["study", "studied", "studyed", "studies"], correct: 1, explanation: "study → studied (y→ied)" }
    ]
};

// ===== UNIT 132: Past Simple - Irregular Verbs =====
const unit132Grammar: EnglishGrammarUnit = {
    unitId: 132,
    title: "Past Simple - Irregular Verbs (Düzensiz Fiiller)",
    rules: [
        {
            title: "1. Düzensiz Fiiller Kuralsızdır!",
            explanation: "Bu fiillerin geçmiş zaman formları -ed eki almaz, tamamen farklı bir kelimeye dönüşür. Bunları ezberlemek zorundasın!",
            examples: [
                { english: "go → went", turkish: "gitmek → gitti" },
                { english: "see → saw", turkish: "görmek → gördü" },
                { english: "have → had", turkish: "sahip olmak → sahipti" },
                { english: "do → did", turkish: "yapmak → yaptı" }
            ]
        },
        {
            title: "2. En Sık Kullanılan Düzensiz Fiiller",
            explanation: "Bu listeyi mutlaka ezberle: eat→ate, come→came, take→took, make→made, get→got, give→gave, find→found, think→thought, know→knew, write→wrote",
            examples: [
                { english: "I went to school yesterday.", turkish: "Dün okula gittim." },
                { english: "She saw a beautiful bird.", turkish: "Güzel bir kuş gördü." },
                { english: "We had breakfast together.", turkish: "Birlikte kahvaltı yaptık." },
                { english: "They ate pizza for dinner.", turkish: "Akşam yemeğinde pizza yediler." }
            ]
        },
        {
            title: "3. Olumsuz ve Soru: Fiil Değişmez!",
            explanation: "Düzensiz fiillerde bile olumsuz (didn't) ve soruda (Did...?) fiil yalın halde kalır. Düzensiz form sadece olumlu cümlelerde kullanılır!",
            examples: [
                { english: "I didn't go (NOT: didn't went)", turkish: "Gitmedim" },
                { english: "Did you see? (NOT: Did you saw?)", turkish: "Gördün mü?" },
                { english: "She didn't eat breakfast.", turkish: "Kahvaltı yapmadı." }
            ]
        }
    ],
    exercises: [
        { question: "I ___ to Paris last year.", options: ["go", "goed", "went", "going"], correct: 2, explanation: "go → went (düzensiz)" },
        { question: "She ___ a beautiful sunset.", options: ["see", "saw", "seed", "seen"], correct: 1, explanation: "see → saw (düzensiz)" },
        { question: "We ___ pizza for dinner.", options: ["eat", "eated", "ate", "eating"], correct: 2, explanation: "eat → ate (düzensiz)" },
        { question: "___ you ___ him yesterday?", options: ["Do/see", "Did/saw", "Did/see", "Does/see"], correct: 2, explanation: "Soruda fiil yalın kalır" },
        { question: "He ___ his homework quickly.", options: ["do", "did", "does", "done"], correct: 1, explanation: "do → did (düzensiz)" }
    ]
};

// ===== UNIT 133: Restoranda =====
const unit133Grammar: EnglishGrammarUnit = {
    unitId: 133,
    title: "Restaurant English - Ordering Food",
    rules: [
        {
            title: "1. Sipariş Verme Kalıpları",
            explanation: "Restoranda sipariş verirken şu kalıpları kullanırız:\n• I'd like... (İstiyorum/İsterdim - kibarca)\n• Can I have...? (Alabilir miyim?)\n• Could I get...? (Alabilir miyim? - daha kibar)\n• I'll have... (Alacağım)",
            examples: [
                { english: "I'd like the chicken, please.", turkish: "Tavuk istiyorum lütfen." },
                { english: "Can I have the menu?", turkish: "Menüyü alabilir miyim?" },
                { english: "Could I get a glass of water?", turkish: "Bir bardak su alabilir miyim?" },
                { english: "I'll have the pasta.", turkish: "Makarna alacağım." }
            ]
        },
        {
            title: "2. Garsonla İletişim",
            explanation: "Restoranda garsona hitap ederken ve isteklerimizi belirtirken kullandığımız ifadeler.",
            examples: [
                { english: "Excuse me!", turkish: "Affedersiniz!" },
                { english: "Could I have the bill, please?", turkish: "Hesabı alabilir miyim lütfen?" },
                { english: "Is service included?", turkish: "Servis dahil mi?" },
                { english: "Can I pay by card?", turkish: "Kartla ödeyebilir miyim?" }
            ]
        },
        {
            title: "3. Yemek Hakkında Sormak",
            explanation: "Menüdeki yemekler hakkında soru sormak için kullanılan kalıplar.",
            examples: [
                { english: "What do you recommend?", turkish: "Ne önerirsiniz?" },
                { english: "What's the special today?", turkish: "Bugünün özel yemeği ne?" },
                { english: "Does this contain nuts?", turkish: "Bunun içinde fındık var mı?" },
                { english: "Is this spicy?", turkish: "Bu acılı mı?" }
            ]
        }
    ],
    exercises: [
        { question: "I'd like ___ the chicken, please.", options: ["have", "to have", "-", "having"], correct: 2, explanation: "I'd like + isim (fiil gerekmez)" },
        { question: "Could I ___ the menu?", options: ["has", "have", "having", "had"], correct: 1, explanation: "Could I have...?" },
        { question: "___ I pay by card?", options: ["Do", "Am", "Can", "Have"], correct: 2, explanation: "Can I...? (izin sorma)" },
        { question: "The bill, ___.", options: ["thanks", "please", "sorry", "yes"], correct: 1, explanation: "The bill, please = Hesap lütfen" },
        { question: "What ___ you recommend?", options: ["are", "do", "is", "have"], correct: 1, explanation: "What do you recommend?" }
    ]
};

// ===== UNIT 134: Alışveriş =====
const unit134Grammar: EnglishGrammarUnit = {
    unitId: 134,
    title: "Shopping English - Fiyat ve Beden Sorma",
    rules: [
        {
            title: "1. Fiyat Sormak: How much...?",
            explanation: "Fiyat sormak için 'How much' kullanılır. Tekil nesneler için 'is', çoğul nesneler için 'are' kullanılır.",
            examples: [
                { english: "How much is this shirt?", turkish: "Bu gömlek ne kadar?" },
                { english: "How much are these shoes?", turkish: "Bu ayakkabılar ne kadar?" },
                { english: "It's £25.", turkish: "25 pound." },
                { english: "They're on sale.", turkish: "İndirimde." }
            ]
        },
        {
            title: "2. Beden ve Renk Sormak",
            explanation: "Bir ürünün farklı beden veya renklerini sormak için 'Do you have this in...?' kalıbı kullanılır.",
            examples: [
                { english: "Do you have this in a smaller size?", turkish: "Bunun daha küçük bedeni var mı?" },
                { english: "Do you have this in blue?", turkish: "Bunun mavisi var mı?" },
                { english: "Can I try this on?", turkish: "Bunu deneyebilir miyim?" },
                { english: "Where are the changing rooms?", turkish: "Giyinme odaları nerede?" }
            ]
        },
        {
            title: "3. Satın Alma Kararı",
            explanation: "Bir şey almaya veya almamaya karar verdiğinizi ifade etmek için kullanılan kalıplar.",
            examples: [
                { english: "I'll take it.", turkish: "Alıyorum." },
                { english: "I'll think about it.", turkish: "Düşüneceğim." },
                { english: "It's too expensive.", turkish: "Çok pahalı." },
                { english: "Do you accept credit cards?", turkish: "Kredi kartı kabul ediyor musunuz?" }
            ]
        }
    ],
    exercises: [
        { question: "How ___ is this jacket?", options: ["many", "much", "price", "cost"], correct: 1, explanation: "Fiyat için: How much" },
        { question: "Can I ___ this on?", options: ["tried", "try", "trying", "tries"], correct: 1, explanation: "Can I try...?" },
        { question: "Do you have this ___ blue?", options: ["on", "at", "in", "with"], correct: 2, explanation: "in + renk" },
        { question: "How much ___ these shoes?", options: ["is", "are", "do", "does"], correct: 1, explanation: "Çoğul için: are" },
        { question: "Where ___ the changing rooms?", options: ["is", "are", "do", "be"], correct: 1, explanation: "Çoğul için: are" }
    ]
};

// ===== UNITS 135-160 =====
const unit135Grammar: EnglishGrammarUnit = { unitId: 135, title: "Travel Plans - Going to", rules: [{ title: "1. 'Going to' ile Gelecek Planlar", explanation: "Planlanmış gelecek eylemler için 'be going to + fiil' kullanılır.", examples: [{ english: "I'm going to visit Paris.", turkish: "Paris'i ziyaret edeceğim." }, { english: "We're going to book a hotel.", turkish: "Otel rezervasyonu yapacağız." }] }], exercises: [{ question: "She ___ going to travel.", options: ["am", "is", "are", "be"], correct: 1, explanation: "She için: is" }] };

const unit136Grammar: EnglishGrammarUnit = { unitId: 136, title: "Hotel Reservation", rules: [{ title: "1. Oda Rezervasyonu", explanation: "Otel rezervasyonu yaparken kullanılan kalıplar.", examples: [{ english: "I'd like to book a room.", turkish: "Oda ayırtmak istiyorum." }, { english: "Is breakfast included?", turkish: "Kahvaltı dahil mi?" }] }], exercises: [{ question: "I'd like ___ book a room.", options: ["for", "to", "at", "in"], correct: 1, explanation: "I'd like to + fiil" }] };

const unit137Grammar: EnglishGrammarUnit = { unitId: 137, title: "At the Airport", rules: [{ title: "1. Havalimanı İfadeleri", explanation: "Havalimanında kullanılan terimler ve cümleler.", examples: [{ english: "Where is the check-in counter?", turkish: "Check-in gişesi nerede?" }, { english: "My flight is delayed.", turkish: "Uçuşum gecikti." }] }], exercises: [{ question: "Where ___ Gate 5?", options: ["am", "is", "are", "be"], correct: 1, explanation: "Tekil için: is" }] };

const unit138Grammar: EnglishGrammarUnit = { unitId: 138, title: "At the Doctor - Health Expressions", rules: [{ title: "1. Şikayet Bildirme", explanation: "Doktorda şikayetlerimizi anlatırken kullanılan yapılar.", examples: [{ english: "I have a headache.", turkish: "Başım ağrıyor." }, { english: "My throat hurts.", turkish: "Boğazım ağrıyor." }] }], exercises: [{ question: "I ___ a headache.", options: ["has", "have", "am", "is"], correct: 1, explanation: "I have..." }] };

const unit139Grammar: EnglishGrammarUnit = { unitId: 139, title: "At the Pharmacy", rules: [{ title: "1. İlaç İsteme", explanation: "Eczanede ilaç alırken kullanılan kalıplar.", examples: [{ english: "I need something for a headache.", turkish: "Baş ağrısı için bir şey lazım." }, { english: "Take one tablet twice a day.", turkish: "Günde iki kez bir tablet alın." }] }], exercises: [{ question: "I need something ___ a cold.", options: ["at", "in", "for", "to"], correct: 2, explanation: "for + hastalık" }] };

const unit140Grammar: EnglishGrammarUnit = { unitId: 140, title: "Jobs and Professions", rules: [{ title: "1. Meslek Söyleme", explanation: "Mesleklerden bahsederken 'work as' ve 'be' kullanılır.", examples: [{ english: "I work as a software engineer.", turkish: "Yazılım mühendisi olarak çalışıyorum." }, { english: "She is a nurse.", turkish: "O bir hemşire." }] }], exercises: [{ question: "She works ___ a nurse.", options: ["like", "as", "for", "to"], correct: 1, explanation: "work as + meslek" }] };

const unit141Grammar: EnglishGrammarUnit = { unitId: 141, title: "Job Interview", rules: [{ title: "1. Görüşme Cümleleri", explanation: "İş görüşmesinde kullanılan kalıplar.", examples: [{ english: "I have 5 years of experience.", turkish: "5 yıllık deneyimim var." }, { english: "I'm a team player.", turkish: "Takım oyuncusuyum." }] }], exercises: [{ question: "I have 5 years of ___.", options: ["experience", "experiences", "experienced", "experiencing"], correct: 0, explanation: "experience (sayılamaz)" }] };

const unit142Grammar: EnglishGrammarUnit = { unitId: 142, title: "On the Phone", rules: [{ title: "1. Telefon Görüşmesi", explanation: "Telefonda konuşurken kullanılan kalıplar.", examples: [{ english: "May I speak to John?", turkish: "John ile konuşabilir miyim?" }, { english: "Can I leave a message?", turkish: "Mesaj bırakabilir miyim?" }] }], exercises: [{ question: "___ I speak to John?", options: ["May", "Am", "Do", "Have"], correct: 0, explanation: "May I...?" }] };

const unit143Grammar: EnglishGrammarUnit = { unitId: 143, title: "Writing Emails", rules: [{ title: "1. Resmi E-posta", explanation: "E-posta yazarken kullanılan kalıplar.", examples: [{ english: "Dear Mr. Smith,", turkish: "Sayın Bay Smith," }, { english: "I am writing to inquire about...", turkish: "...hakkında bilgi almak için yazıyorum." }] }], exercises: [{ question: "Dear ___ Smith,", options: ["Mr", "Mr.", "Mister", "Man"], correct: 1, explanation: "Dear Mr. + soyisim" }] };

const unit144Grammar: EnglishGrammarUnit = { unitId: 144, title: "Feelings and Emotions", rules: [{ title: "1. Duygu İfadeleri", explanation: "Duygularımızı ifade ederken 'feel' ve 'be' kullanılır.", examples: [{ english: "I feel happy.", turkish: "Mutlu hissediyorum." }, { english: "She is excited about the trip.", turkish: "Gezi için heyecanlı." }] }], exercises: [{ question: "I feel ___ today.", options: ["happy", "happily", "happiness", "happier"], correct: 0, explanation: "feel + sıfat" }] };

const unit145Grammar: EnglishGrammarUnit = { unitId: 145, title: "Personality Traits", rules: [{ title: "1. Kişilik Sıfatları", explanation: "Kişilikleri tanımlarken sıfatlar kullanılır.", examples: [{ english: "She's very friendly.", turkish: "Çok arkadaş canlısı." }, { english: "He tends to be shy.", turkish: "Utangaç olmaya meyilli." }] }], exercises: [{ question: "She's very ___.", options: ["friend", "friendly", "friends", "friendship"], correct: 1, explanation: "friendly = arkadaş canlısı" }] };

const unit146Grammar: EnglishGrammarUnit = { unitId: 146, title: "Sports and Fitness", rules: [{ title: "1. Spor Fiilleri", explanation: "play + takım sporları, go + -ing, do + bireysel sporlar", examples: [{ english: "I play football.", turkish: "Futbol oynarım." }, { english: "She goes swimming.", turkish: "Yüzmeye gider." }, { english: "He does yoga.", turkish: "Yoga yapar." }] }], exercises: [{ question: "I ___ yoga every morning.", options: ["play", "go", "make", "do"], correct: 3, explanation: "do yoga" }] };

const unit147Grammar: EnglishGrammarUnit = { unitId: 147, title: "Music and Art", rules: [{ title: "1. Enstrüman Çalmak", explanation: "Enstrüman çalarken 'play the + enstrüman' kullanılır.", examples: [{ english: "I play the guitar.", turkish: "Gitar çalıyorum." }, { english: "She listens to classical music.", turkish: "Klasik müzik dinler." }] }], exercises: [{ question: "He plays ___ piano.", options: ["a", "an", "the", "-"], correct: 2, explanation: "play the + enstrüman" }] };

const unit148Grammar: EnglishGrammarUnit = { unitId: 148, title: "Movies and TV Shows", rules: [{ title: "1. Film Türleri", explanation: "Film türlerini tanımlarken kullanılan yapılar.", examples: [{ english: "It's an action movie.", turkish: "Aksiyon filmi." }, { english: "The movie is directed by Spielberg.", turkish: "Film Spielberg tarafından yönetildi." }] }], exercises: [{ question: "It's ___ action movie.", options: ["a", "an", "the", "-"], correct: 1, explanation: "an + sesli harf (action)" }] };

const unit149Grammar: EnglishGrammarUnit = { unitId: 149, title: "Technology", rules: [{ title: "1. Teknoloji Fiilleri", explanation: "Teknoloji ile ilgili yaygın fiiller.", examples: [{ english: "Download the app.", turkish: "Uygulamayı indir." }, { english: "Connect to wifi.", turkish: "Wifi'ye bağlan." }] }], exercises: [{ question: "Can you connect ___ wifi?", options: ["at", "in", "for", "to"], correct: 3, explanation: "connect to" }] };

const unit150Grammar: EnglishGrammarUnit = { unitId: 150, title: "Social Media Language", rules: [{ title: "1. Sosyal Medya Terimleri", explanation: "Sosyal medyada kullanılan fiiller ve isimler.", examples: [{ english: "I posted a new photo.", turkish: "Yeni bir fotoğraf paylaştım." }, { english: "Follow me on Instagram.", turkish: "Instagram'da beni takip et." }] }], exercises: [{ question: "I ___ a new photo yesterday.", options: ["post", "posted", "posting", "posts"], correct: 1, explanation: "Geçmiş zaman: posted" }] };

const unit151Grammar: EnglishGrammarUnit = { unitId: 151, title: "Home and Moving - There is/are", rules: [{ title: "1. There is/are Yapısı", explanation: "Bir yerde bir şeyin varlığını ifade etmek için kullanılır.", examples: [{ english: "There is a big garden.", turkish: "Büyük bir bahçe var." }, { english: "There are three bedrooms.", turkish: "Üç yatak odası var." }] }], exercises: [{ question: "There ___ three bedrooms.", options: ["is", "are", "be", "have"], correct: 1, explanation: "Çoğul için: are" }] };

const unit152Grammar: EnglishGrammarUnit = { unitId: 152, title: "Environment - First Conditional", rules: [{ title: "1. Birinci Koşul Cümlesi", explanation: "Gerçekleşme olasılığı yüksek durumlar için: If + present, will + fiil", examples: [{ english: "If we recycle, we will help the planet.", turkish: "Geri dönüşüm yaparsak gezegene yardım ederiz." }, { english: "If it rains, I will stay home.", turkish: "Yağmur yağarsa evde kalacağım." }] }], exercises: [{ question: "If it rains, I ___ stay home.", options: ["would", "will", "shall", "can"], correct: 1, explanation: "First conditional: will" }] };

const unit153Grammar: EnglishGrammarUnit = { unitId: 153, title: "News - Passive Voice", rules: [{ title: "1. Edilgen Yapı", explanation: "Edilgen yapı: be + past participle. Öznenin eylemi yaptıran değil, eylemin yapıldığı kişi/şey olduğu durumlarda.", examples: [{ english: "The building was destroyed.", turkish: "Bina yıkıldı." }, { english: "The news was announced.", turkish: "Haber duyuruldu." }] }], exercises: [{ question: "The news ___ announced yesterday.", options: ["is", "are", "was", "were"], correct: 2, explanation: "Geçmiş zaman edilgen: was" }] };

const unit154Grammar: EnglishGrammarUnit = { unitId: 154, title: "Culture - Used to", rules: [{ title: "1. Geçmiş Alışkanlıklar: Used to", explanation: "Geçmişte yapılan ama artık yapılmayan eylemler için 'used to + fiil' kullanılır.", examples: [{ english: "I used to live in a village.", turkish: "Bir köyde yaşardım." }, { english: "We used to celebrate together.", turkish: "Birlikte kutlardık." }] }], exercises: [{ question: "I used ___ live in a village.", options: ["for", "at", "to", "in"], correct: 2, explanation: "used to + fiil" }] };

const unit155Grammar: EnglishGrammarUnit = { unitId: 155, title: "Present Perfect Tense", rules: [{ title: "1. Present Perfect Yapısı", explanation: "have/has + past participle. Deneyimler, tamamlanmış eylemler, devam eden durumlar için.", examples: [{ english: "I have visited Paris twice.", turkish: "Paris'i iki kez ziyaret ettim." }, { english: "She has already finished.", turkish: "O zaten bitirdi." }, { english: "Have you ever tried sushi?", turkish: "Hiç suşi denedin mi?" }] }, { title: "2. Zaman Zarfları", explanation: "already (zaten), yet (henüz), ever (hiç), never (asla), just (az önce)", examples: [{ english: "I have just arrived.", turkish: "Az önce geldim." }, { english: "She hasn't finished yet.", turkish: "Henüz bitirmedi." }] }], exercises: [{ question: "I ___ never been to Paris.", options: ["has", "have", "had", "having"], correct: 1, explanation: "I have..." }, { question: "She ___ already finished.", options: ["have", "has", "had", "having"], correct: 1, explanation: "She has..." }] };

const unit156Grammar: EnglishGrammarUnit = { unitId: 156, title: "Comparatives", rules: [{ title: "1. Karşılaştırma Sıfatları", explanation: "Kısa sıfatlar: -er (bigger). Uzun sıfatlar: more + sıfat. Düzensiz: good→better, bad→worse", examples: [{ english: "This car is bigger than that one.", turkish: "Bu araba diğerinden büyük." }, { english: "She is more intelligent than him.", turkish: "Ondan daha zeki." }, { english: "Today is better than yesterday.", turkish: "Bugün dünden daha iyi." }] }], exercises: [{ question: "This is ___ than that.", options: ["big", "bigger", "biggest", "more big"], correct: 1, explanation: "big → bigger" }] };

const unit157Grammar: EnglishGrammarUnit = { unitId: 157, title: "Superlatives", rules: [{ title: "1. Üstünlük Sıfatları", explanation: "Kısa sıfatlar: the + -est. Uzun sıfatlar: the most + sıfat. Düzensiz: good→the best", examples: [{ english: "It's the tallest building.", turkish: "En yüksek bina." }, { english: "She's the most talented.", turkish: "En yetenekli." }, { english: "This is the best restaurant.", turkish: "En iyi restoran." }] }], exercises: [{ question: "This is ___ tallest building.", options: ["a", "an", "the", "-"], correct: 2, explanation: "the + superlative" }] };

const unit158Grammar: EnglishGrammarUnit = { unitId: 158, title: "Modal Verbs", rules: [{ title: "1. Modal Fiiller", explanation: "can (yetenek), could (kibarlık), should (tavsiye), must (zorunluluk), might (olasılık)", examples: [{ english: "You should see a doctor.", turkish: "Doktora gitmelisin." }, { english: "I must finish this today.", turkish: "Bugün bitirmem lazım." }, { english: "It might rain tomorrow.", turkish: "Yarın yağmur yağabilir." }] }], exercises: [{ question: "You ___ wear a seatbelt.", options: ["can", "should", "must", "might"], correct: 2, explanation: "must = zorunluluk" }] };

const unit159Grammar: EnglishGrammarUnit = { unitId: 159, title: "Question Tags", rules: [{ title: "1. Ek Sorular", explanation: "Olumlu cümle + olumsuz tag, Olumsuz cümle + olumlu tag.", examples: [{ english: "You're coming, aren't you?", turkish: "Geliyorsun, değil mi?" }, { english: "She doesn't like coffee, does she?", turkish: "Kahve sevmiyor, değil mi?" }, { english: "They've finished, haven't they?", turkish: "Bitirdiler, değil mi?" }] }], exercises: [{ question: "It's hot today, ___ it?", options: ["is", "isn't", "does", "doesn't"], correct: 1, explanation: "Olumlu + olumsuz tag" }] };

const unit160Grammar: EnglishGrammarUnit = { unitId: 160, title: "A2 Review", rules: [{ title: "1. A2 Seviyesi Özet", explanation: "Past Simple, Present Perfect, Comparatives, Superlatives, Modal Verbs, Question Tags.", examples: [{ english: "I have learned so much.", turkish: "Çok şey öğrendim." }, { english: "This is better than before.", turkish: "Bu öncekinden daha iyi." }, { english: "You can do it!", turkish: "Yapabilirsin!" }] }], exercises: [{ question: "She ___ never been to Paris.", options: ["has", "have", "had", "having"], correct: 0, explanation: "She has..." }] };

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
