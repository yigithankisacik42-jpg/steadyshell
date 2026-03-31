import { Question, QuestionType } from "./questions";

export interface EnglishTopic {
    words: string[][];
    sentences: string[];
}

const topics: { [key: number]: EnglishTopic } = {
    // A1 Üniteleri (101-130) - Her biri 8 kelime
    101: { words: [["Hello", "Merhaba"], ["Goodbye", "Hoşça kal"], ["Good morning", "Günaydın"], ["Good night", "İyi geceler"], ["Thank you", "Teşekkür ederim"], ["Please", "Lütfen"], ["Yes", "Evet"], ["No", "Hayır"]], sentences: ["___, how are you?", "I must say ___ now.", "___, can you help me?"] },
    102: { words: [["One", "Bir"], ["Two", "İki"], ["Three", "Üç"], ["Four", "Dört"], ["Five", "Beş"], ["Six", "Altı"], ["Seven", "Yedi"], ["Eight", "Sekiz"]], sentences: ["I have ___ apples.", "There are ___ cats.", "She wants ___ books."] },
    103: { words: [["Mother", "Anne"], ["Father", "Baba"], ["Brother", "Erkek kardeş"], ["Sister", "Kız kardeş"], ["Grandmother", "Büyükanne"], ["Grandfather", "Büyükbaba"], ["Aunt", "Teyze/Hala"], ["Uncle", "Amca/Dayı"]], sentences: ["My ___ is very kind.", "I love my ___.", "Her ___ is tall.", "This is my ___."] },
    104: { words: [["Red", "Kırmızı"], ["Blue", "Mavi"], ["Green", "Yeşil"], ["Yellow", "Sarı"], ["Black", "Siyah"], ["White", "Beyaz"], ["Pink", "Pembe"], ["Purple", "Mor"]], sentences: ["The sky is ___.", "I have a ___ car.", "Her dress is ___.", "I don't like ___."] },
    105: { words: [["Apple", "Elma"], ["Bread", "Ekmek"], ["Cheese", "Peynir"], ["Meat", "Et"], ["Fish", "Balık"], ["Chicken", "Tavuk"], ["Egg", "Yumurta"], ["Rice", "Pirinç"]], sentences: ["I want to eat ___.", "We need some ___.", "Do you like ___?", "This ___ is delicious."] },
    106: { words: [["Water", "Su"], ["Milk", "Süt"], ["Coffee", "Kahve"], ["Tea", "Çay"], ["Juice", "Meyve suyu"], ["Soda", "Gazoz"], ["Wine", "Şarap"], ["Beer", "Bira"]], sentences: ["I drink ___ every day.", "Can I have some ___?", "He doesn't like ___.", "This ___ is hot."] },
    107: { words: [["Monday", "Pazartesi"], ["Tuesday", "Salı"], ["Wednesday", "Çarşamba"], ["Thursday", "Perşembe"], ["Friday", "Cuma"], ["Saturday", "Cumartesi"], ["Sunday", "Pazar"], ["Weekend", "Hafta sonu"]], sentences: ["Today is ___.", "I work on ___.", "We meet every ___.", "___ is my favorite day."] },
    108: { words: [["Ten", "On"], ["Twenty", "Yirmi"], ["Thirty", "Otuz"], ["Forty", "Kırk"], ["Fifty", "Elli"], ["Sixty", "Altmış"], ["Seventy", "Yetmiş"], ["Hundred", "Yüz"]], sentences: ["I have ___ dollars.", "There are ___ students.", "It costs ___ liras.", "He is ___ years old."] },
    109: { words: [["House", "Ev (bina)"], ["Home", "Ev (yuva)"], ["Kitchen", "Mutfak"], ["Bedroom", "Yatak odası"], ["Bathroom", "Banyo"], ["Living room", "Oturma odası"], ["Garden", "Bahçe"], ["Door", "Kapı"]], sentences: ["My ___ is big.", "She is in the ___.", "We have a beautiful ___.", "Please open the ___."] },
    110: { words: [["Bed", "Yatak"], ["Table", "Masa"], ["Chair", "Sandalye"], ["Sofa", "Koltuk"], ["Desk", "Çalışma masası"], ["Lamp", "Lamba"], ["Window", "Pencere"], ["Mirror", "Ayna"]], sentences: ["The ___ is comfortable.", "He sits on the ___.", "Put it on the ___.", "Look in the ___."] },
    111: { words: [["Head", "Baş"], ["Eye", "Göz"], ["Ear", "Kulak"], ["Hand", "El"], ["Foot", "Ayak"], ["Leg", "Bacak"], ["Arm", "Kol"], ["Hair", "Saç"]], sentences: ["My ___ hurts.", "She has blue ___s.", "Wash your ___s.", "He has short ___."] },
    112: { words: [["Shirt", "Gömlek"], ["Pants", "Pantolon"], ["Dress", "Elbise"], ["Shoes", "Ayakkabılar"], ["Hat", "Şapka"], ["Jacket", "Ceket"], ["Socks", "Çoraplar"], ["Skirt", "Etek"]], sentences: ["I wear a ___.", "Your ___ are new.", "She bought a ___.", "Where are my ___?"] },
    113: { words: [["Dog", "Köpek"], ["Cat", "Kedi"], ["Bird", "Kuş"], ["Fish", "Balık"], ["Elephant", "Fil"], ["Horse", "At"], ["Cow", "İnek"], ["Monkey", "Maymun"]], sentences: ["The ___ is barking.", "I have a pet ___.", "Look at that ___.", "The ___ is huge."] },
    114: { words: [["Teacher", "Öğretmen"], ["Doctor", "Doktor"], ["Nurse", "Hemşire"], ["Police", "Polis"], ["Driver", "Sürücü"], ["Student", "Öğrenci"], ["Chef", "Aşçı"], ["Farmer", "Çiftçi"]], sentences: ["My friend is a ___.", "The ___ helps me.", "She studies to be a ___.", "I am a ___."] },
    115: { words: [["Hospital", "Hastane"], ["School", "Okul"], ["Bank", "Banka"], ["Park", "Park"], ["Library", "Kütüphane"], ["Supermarket", "Süpermarket"], ["Restaurant", "Restoran"], ["Airport", "Havalimanı"]], sentences: ["I go to the ___.", "The ___ is closed.", "She works at a ___.", "We met in the ___."] },
    116: { words: [["Car", "Araba"], ["Bus", "Otobüs"], ["Train", "Tren"], ["Plane", "Uçak"], ["Bike", "Bisiklet"], ["Boat", "Tekne"], ["Taxi", "Taksi"], ["Subway", "Metro"]], sentences: ["I drive a ___.", "We take the ___.", "The ___ is fast.", "I ride my ___."] },
    117: { words: [["Wake up", "Uyanmak"], ["Get up", "Kalkmak"], ["Eat", "Yemek yemek"], ["Drink", "İçmek"], ["Sleep", "Uyumak"], ["Read", "Okumak"], ["Write", "Yazmak"], ["Listen", "Dinlemek"]], sentences: ["I ___ early.", "They ___ dinner.", "She likes to ___.", "Please ___ to me."] },
    118: { words: [["Time", "Zaman"], ["Hour", "Saat (süre)"], ["Minute", "Dakika"], ["Morning", "Sabah"], ["Afternoon", "Öğleden sonra"], ["Evening", "Akşam"], ["Today", "Bugün"], ["Tomorrow", "Yarın"]], sentences: ["What ___ is it?", "I need an ___.", "See you ___.", "It happened this ___."] },
    119: { words: [["Sun", "Güneş"], ["Rain", "Yağmur"], ["Snow", "Kar"], ["Wind", "Rüzgar"], ["Cloud", "Bulut"], ["Hot", "Sıcak"], ["Cold", "Soğuk"], ["Weather", "Hava"]], sentences: ["The ___ is shining.", "I don't like the ___.", "It is very ___ today.", "How is the ___?"] },
    120: { words: [["Play", "Oynamak/Çalmak"], ["Swim", "Yüzmek"], ["Run", "Koşmak"], ["Walk", "Yürümek"], ["Sing", "Şarkı söylemek"], ["Dance", "Dans etmek"], ["Cook", "Yemek pişirmek"], ["Travel", "Seyahat etmek"]], sentences: ["I want to ___.", "We ___ every day.", "He learns to ___.", "Let's ___ together."] },
    121: { words: [["Happy", "Mutlu"], ["Sad", "Üzgün"], ["Angry", "Kızgın"], ["Tired", "Yorgun"], ["Hungry", "Aç"], ["Thirsty", "Susamış"], ["Scared", "Korkmuş"], ["Bored", "Sıkılmış"]], sentences: ["I feel ___.", "Why are you ___?", "She is very ___.", "Are you ___?"] },
    122: { words: [["Pen", "Tükenmez kalem"], ["Pencil", "Kurşun kalem"], ["Book", "Kitap"], ["Notebook", "Defter"], ["Bag", "Çanta"], ["Eraser", "Silgi"], ["Board", "Tahta"], ["Paper", "Kağıt"]], sentences: ["I need a ___.", "Read this ___.", "Look at the ___.", "Put it in your ___."] },
    123: { words: [["Holiday", "Tatil"], ["Birthday", "Doğum günü"], ["Party", "Parti"], ["Gift", "Hediye"], ["Cake", "Pasta"], ["Music", "Müzik"], ["Dance", "Dans"], ["Fun", "Eğlence"]], sentences: ["It is my ___.", "We have a ___.", "I bought a ___.", "This is fun ___."] },
    124: { words: [["Country", "Ülke"], ["City", "Şehir"], ["World", "Dünya"], ["Map", "Harita"], ["Language", "Dil"], ["People", "İnsanlar"], ["Place", "Yer"], ["Street", "Sokak"]], sentences: ["Turkey is a beautiful ___.", "I live in this ___.", "Look at the ___.", "There are many ___."] },
    125: { words: [["Go", "Gitmek"], ["Come", "Gelmek"], ["Do", "Yapmak"], ["Make", "Yapmak/Üretmek"], ["Have", "Sahip olmak"], ["Say", "Söylemek"], ["See", "Görmek"], ["Look", "Bakmak"]], sentences: ["I ___ to work.", "Please ___ here.", "I ___ a problem.", "___ at this!"] },
    126: { words: [["Always", "Her zaman"], ["Usually", "Genellikle"], ["Sometimes", "Bazen"], ["Never", "Asla"], ["Often", "Sık sık"], ["Every", "Her"], ["Fast", "Hızlı"], ["Slow", "Yavaş"]], sentences: ["I ___ wake up early.", "She is ___ late.", "He works very ___.", "We ___ meet here."] },
    127: { words: [["Now", "Şimdi"], ["Here", "Burada"], ["There", "Orada"], ["Where", "Nerede"], ["When", "Ne zaman"], ["Why", "Neden"], ["How", "Nasıl"], ["What", "Ne"]], sentences: ["___ are you?", "We are ___.", "___ is the time.", "___ do it now."] },
    128: { words: [["Big", "Büyük"], ["Small", "Küçük"], ["Good", "İyi"], ["Bad", "Kötü"], ["New", "Yeni"], ["Old", "Eski/Yaşlı"], ["Beautiful", "Güzel"], ["Ugly", "Çirkin"]], sentences: ["This car is ___.", "It is a ___ day.", "My phone is ___.", "The house is ___."] },
    129: { words: [["In", "İçinde"], ["On", "Üstünde"], ["Under", "Altında"], ["Behind", "Arkasında"], ["Next to", "Bitişiğinde"], ["Between", "Arasında"], ["With", "İle"], ["Without", "Olmadan"]], sentences: ["The cat is ___ the box.", "I go ___ you.", "It is ___ the table.", "Stand ___ me."] },
    130: { words: [["Learn", "Öğrenmek"], ["Understand", "Anlamak"], ["Speak", "Konuşmak"], ["Help", "Yardım etmek"], ["Work", "Çalışmak"], ["Start", "Başlamak"], ["Finish", "Bitirmek"], ["Try", "Denemek"]], sentences: ["I want to ___ English.", "Do you ___?", "Let's ___.", "I will ___ it."] }
};

export function getEnglishA1QuestionsForUnit(unitId: number, quizIndex: number = 1): Question[] {
    const data = topics[unitId] || topics[101];
    
    // quizIndex kullanarak soruların sırasını ve içeriğini farklılaştır
    // baseId sayesinde React key map'lerinde sorun çıkmaz.
    const baseId = (quizIndex - 1) * 20;
    const questions: Question[] = [];

    for (let i = 0; i < 20; i++) {
        // Kelime seçiminde rastgeleliği quizIndex ve döngü indexi ile harmanla
        // Böylece farklı quizIndexlerde tamamen farklı dizilim olur
        const offset = (quizIndex * 3) + i;
        const wordIdx = offset % data.words.length;

        // Zorluk seviyesine göre soru tipi belirle
        let qType: QuestionType;
        if (i < 7) {
            // KOLAY: SELECT ve LISTENING ağırlıklı (A1 için)
            const easyTypes: QuestionType[] = ["SELECT", "SELECT", "SELECT", "LISTENING", "LISTENING", "SELECT", "LISTENING"];
            qType = easyTypes[i];
        } else if (i < 14) {
            // ORTA: Karışık tipler
            const mediumTypes: QuestionType[] = ["SELECT", "TRANSLATE", "SELECT", "LISTENING", "FILL_BLANK", "TRANSLATE", "SELECT"];
            qType = mediumTypes[i - 7];
        } else {
            // ZOR: TRANSLATE ve FILL_BLANK ağırlıklı
            const hardTypes: QuestionType[] = ["TRANSLATE", "FILL_BLANK", "LISTENING", "FILL_BLANK", "TRANSLATE", "TRANSLATE"];
            qType = hardTypes[i - 14];
        }

        // Yanlış cevapları oluştur - diğer kelimelerden rastgele al
        const otherWords = data.words.filter((_, idx) => idx !== wordIdx);
        // Doğru şıkkı tahmin etmeyi zorlaştırmak için basit shuffle
        const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
        const wrongOptions = shuffledOthers.slice(0, 3);

        // Şıkları oluştur ve karıştır
        const allOptions = [
            { id: "correct", text: data.words[wordIdx][1], correct: true },
            { id: "w1", text: wrongOptions[0][1], correct: false },
            { id: "w2", text: wrongOptions[1][1], correct: false },
            { id: "w3", text: wrongOptions[2][1], correct: false }
        ]
        .sort(() => 0.5 - Math.random())
        .map((opt, idx) => ({ ...opt, id: String.fromCharCode(97 + idx) })); // a, b, c, d yap

        // Dinamik FILL_BLANK cümlesi
        const sentenceIdx = (offset + i) % (data.sentences?.length || 1);
        const dynamicSentence = data.sentences ? data.sentences[sentenceIdx] : `This is a ___.`;

        questions.push({
            id: baseId + i + 1,
            type: qType,
            question: qType === "SELECT" ? `'${data.words[wordIdx][0]}' ne demek?` :
                qType === "TRANSLATE" ? "Çevir:" :
                    qType === "LISTENING" ? "Duyduğunu seç:" : "Doldur:",
            options: qType !== "TRANSLATE" ? allOptions : undefined,
            correctAnswer: qType === "TRANSLATE" ? data.words[wordIdx][0] : undefined,
            hint: qType === "TRANSLATE" ? data.words[wordIdx][1] : undefined,
            audioText: qType === "LISTENING" ? data.words[wordIdx][0] : undefined,
            sentence: qType === "FILL_BLANK" ? dynamicSentence : undefined,
        });
    }

    return questions;
}
