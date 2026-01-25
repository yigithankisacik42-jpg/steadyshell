/**
 * SteadyShell Questions/Quiz Database - English A1
 * 30 Units (ID: 101-130) with quiz questions
 */

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    type: "vocabulary" | "grammar" | "reading" | "listening";
}

export interface EnglishQuizUnit {
    unitId: number;
    title: string;
    questions: QuizQuestion[];
}

// ===== Quiz questions for all A1 units =====

const unit101Questions: EnglishQuizUnit = {
    unitId: 101, title: "Greetings Quiz",
    questions: [
        { question: "'Merhaba' İngilizce ne demek?", options: ["Goodbye", "Hello", "Thank you", "Please"], correctAnswer: 1, explanation: "'Hello' merhaba demektir.", type: "vocabulary" },
        { question: "Sabah selamlaşması hangisidir?", options: ["Good night", "Good evening", "Good morning", "Goodbye"], correctAnswer: 2, explanation: "'Good morning' günaydın demektir.", type: "vocabulary" },
        { question: "'Thank you' ne demek?", options: ["Merhaba", "Teşekkür ederim", "Lütfen", "Özür dilerim"], correctAnswer: 1, explanation: "'Thank you' teşekkür etme ifadesidir.", type: "vocabulary" },
        { question: "I ___ a student.", options: ["is", "am", "are", "be"], correctAnswer: 1, explanation: "'I' ile 'am' kullanılır.", type: "grammar" },
        { question: "'Nice to meet you' ne zaman kullanılır?", options: ["Vedalaşırken", "İlk tanışmada", "Yemekten önce", "Uyumadan önce"], correctAnswer: 1, explanation: "İlk kez tanışılan biriyle kullanılır.", type: "vocabulary" }
    ]
};

const unit102Questions: EnglishQuizUnit = { unitId: 102, title: "Numbers Quiz", questions: [{ question: "'Fifteen' sayısı kaçtır?", options: ["5", "50", "15", "51"], correctAnswer: 2, explanation: "'Fifteen' on beş demektir.", type: "vocabulary" }, { question: "'Twelve' hangi sayı?", options: ["2", "12", "20", "22"], correctAnswer: 1, explanation: "'Twelve' on iki demektir.", type: "vocabulary" }, { question: "There ___ three cats.", options: ["is", "are", "am", "be"], correctAnswer: 1, explanation: "Çoğul isim için 'are' kullanılır.", type: "grammar" }] };

const unit103Questions: EnglishQuizUnit = { unitId: 103, title: "Family Quiz", questions: [{ question: "'Büyükanne' İngilizce ne?", options: ["Mother", "Aunt", "Grandmother", "Sister"], correctAnswer: 2, explanation: "'Grandmother' büyükanne demektir.", type: "vocabulary" }, { question: "This is ___ mother. (I)", options: ["me", "my", "I", "mine"], correctAnswer: 1, explanation: "'I' için iyelik sıfatı 'my'dir.", type: "grammar" }, { question: "'Uncle' ne demek?", options: ["Teyze", "Amca/Dayı", "Kuzen", "Büyükbaba"], correctAnswer: 1, explanation: "'Uncle' amca veya dayı demektir.", type: "vocabulary" }] };

const unit104Questions: EnglishQuizUnit = { unitId: 104, title: "Colors Quiz", questions: [{ question: "'Yellow' hangi renk?", options: ["Yeşil", "Mavi", "Sarı", "Kırmızı"], correctAnswer: 2, explanation: "'Yellow' sarı demektir.", type: "vocabulary" }, { question: "I have ___ orange.", options: ["a", "an", "the", "-"], correctAnswer: 1, explanation: "Ünlü harfle başlayan kelimeler için 'an' kullanılır.", type: "grammar" }, { question: "'Purple' Türkçesi nedir?", options: ["Pembe", "Mor", "Mavi", "Turuncu"], correctAnswer: 1, explanation: "'Purple' mor demektir.", type: "vocabulary" }] };

const unit105Questions: EnglishQuizUnit = { unitId: 105, title: "Food Quiz", questions: [{ question: "'Cheese' ne demek?", options: ["Et", "Peynir", "Ekmek", "Yumurta"], correctAnswer: 1, explanation: "'Cheese' peynir demektir.", type: "vocabulary" }, { question: "I have ___ bread.", options: ["some", "any", "a", "many"], correctAnswer: 0, explanation: "Olumlu cümlede 'some' kullanılır.", type: "grammar" }, { question: "'Sebze' İngilizce ne?", options: ["Fruit", "Meat", "Vegetable", "Fish"], correctAnswer: 2, explanation: "'Vegetable' sebze demektir.", type: "vocabulary" }] };

const unit106Questions: EnglishQuizUnit = { unitId: 106, title: "Drinks Quiz", questions: [{ question: "'Milk' ne demek?", options: ["Su", "Süt", "Kahve", "Çay"], correctAnswer: 1, explanation: "'Milk' süt demektir.", type: "vocabulary" }, { question: "How ___ water do you drink?", options: ["many", "much", "some", "any"], correctAnswer: 1, explanation: "Sayılamayan isimler için 'much' kullanılır.", type: "grammar" }, { question: "'Meyve suyu' İngilizce ne?", options: ["Coffee", "Tea", "Juice", "Water"], correctAnswer: 2, explanation: "'Juice' meyve suyu demektir.", type: "vocabulary" }] };

const unit107Questions: EnglishQuizUnit = { unitId: 107, title: "Days Quiz", questions: [{ question: "'Wednesday' hangi gün?", options: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"], correctAnswer: 2, explanation: "'Wednesday' Çarşamba demektir.", type: "vocabulary" }, { question: "The meeting is ___ Monday.", options: ["at", "on", "in", "by"], correctAnswer: 1, explanation: "Günler için 'on' kullanılır.", type: "grammar" }, { question: "'January' hangi ay?", options: ["Şubat", "Mart", "Ocak", "Nisan"], correctAnswer: 2, explanation: "'January' Ocak demektir.", type: "vocabulary" }] };

const unit108Questions: EnglishQuizUnit = { unitId: 108, title: "Numbers 21-100 Quiz", questions: [{ question: "'Fifty' kaç?", options: ["15", "50", "5", "500"], correctAnswer: 1, explanation: "'Fifty' elli demektir.", type: "vocabulary" }, { question: "'Birinci' İngilizce ne?", options: ["One", "First", "Once", "One st"], correctAnswer: 1, explanation: "'First' birinci demektir.", type: "vocabulary" }] };

const unit109Questions: EnglishQuizUnit = { unitId: 109, title: "Home Quiz", questions: [{ question: "'Kitchen' ne demek?", options: ["Yatak odası", "Mutfak", "Banyo", "Oturma odası"], correctAnswer: 1, explanation: "'Kitchen' mutfak demektir.", type: "vocabulary" }, { question: "The cat is ___ the room.", options: ["at", "on", "in", "by"], correctAnswer: 2, explanation: "Kapalı alan için 'in' kullanılır.", type: "grammar" }] };

const unit110Questions: EnglishQuizUnit = { unitId: 110, title: "Furniture Quiz", questions: [{ question: "'Bed' ne demek?", options: ["Masa", "Sandalye", "Yatak", "Koltuk"], correctAnswer: 2, explanation: "'Bed' yatak demektir.", type: "vocabulary" }, { question: "___ books are mine.", options: ["This", "These", "That", "It"], correctAnswer: 1, explanation: "Çoğul ve yakın için 'These' kullanılır.", type: "grammar" }] };

const unit111Questions: EnglishQuizUnit = { unitId: 111, title: "Body Parts Quiz", questions: [{ question: "'Eye' ne demek?", options: ["Kulak", "Burun", "Göz", "Ağız"], correctAnswer: 2, explanation: "'Eye' göz demektir.", type: "vocabulary" }, { question: "She ___ blue eyes.", options: ["have got", "has got", "got have", "having"], correctAnswer: 1, explanation: "'She' için 'has got' kullanılır.", type: "grammar" }] };

const unit112Questions: EnglishQuizUnit = { unitId: 112, title: "Clothes Quiz", questions: [{ question: "'Shoes' ne demek?", options: ["Gömlek", "Pantolon", "Ayakkabılar", "Çoraplar"], correctAnswer: 2, explanation: "'Shoes' ayakkabılar demektir.", type: "vocabulary" }, { question: "I have two ___.", options: ["child", "childs", "children", "childrens"], correctAnswer: 2, explanation: "'Child' düzensiz çoğul: children.", type: "grammar" }] };

const unit113Questions: EnglishQuizUnit = { unitId: 113, title: "Animals Quiz", questions: [{ question: "'Elephant' hangi hayvan?", options: ["Aslan", "Fil", "Maymun", "Ayı"], correctAnswer: 1, explanation: "'Elephant' fil demektir.", type: "vocabulary" }, { question: "It's a ___ cat.", options: ["black big", "big black", "black a big", "big a black"], correctAnswer: 1, explanation: "Size (big) + Color (black) sırası.", type: "grammar" }] };

const unit114Questions: EnglishQuizUnit = { unitId: 114, title: "Jobs Quiz", questions: [{ question: "'Nurse' ne demek?", options: ["Doktor", "Hemşire", "Öğretmen", "Avukat"], correctAnswer: 1, explanation: "'Nurse' hemşire demektir.", type: "vocabulary" }, { question: "She ___ speak English.", options: ["can", "cans", "canning", "to can"], correctAnswer: 0, explanation: "'Can' tüm öznelerle aynı kalır.", type: "grammar" }] };

const unit115Questions: EnglishQuizUnit = { unitId: 115, title: "Places Quiz", questions: [{ question: "'Library' ne demek?", options: ["Hastane", "Kütüphane", "Okul", "Banka"], correctAnswer: 1, explanation: "'Library' kütüphane demektir.", type: "vocabulary" }, { question: "___ the door, please.", options: ["Closes", "Close", "Closing", "To close"], correctAnswer: 1, explanation: "Emir kipinde fiilin yalın hali kullanılır.", type: "grammar" }] };

const unit116Questions: EnglishQuizUnit = { unitId: 116, title: "Transportation Quiz", questions: [{ question: "'Train' ne demek?", options: ["Uçak", "Otobüs", "Tren", "Araba"], correctAnswer: 2, explanation: "'Train' tren demektir.", type: "vocabulary" }, { question: "I'm going ___ school.", options: ["at", "on", "to", "in"], correctAnswer: 2, explanation: "Varış noktası için 'to' kullanılır.", type: "grammar" }] };

const unit117Questions: EnglishQuizUnit = { unitId: 117, title: "Routines Quiz", questions: [{ question: "'Wake up' ne demek?", options: ["Uyumak", "Uyanmak", "Yürümek", "Koşmak"], correctAnswer: 1, explanation: "'Wake up' uyanmak demektir.", type: "vocabulary" }, { question: "She ___ every morning.", options: ["run", "runs", "running", "to run"], correctAnswer: 1, explanation: "'She' için fiile -s eklenir.", type: "grammar" }] };

const unit118Questions: EnglishQuizUnit = { unitId: 118, title: "Time Quiz", questions: [{ question: "3:30 nasıl söylenir?", options: ["Three o'clock", "Half past three", "Quarter past three", "Quarter to three"], correctAnswer: 1, explanation: "3:30 = half past three (üç buçuk).", type: "vocabulary" }, { question: "'Tomorrow' ne demek?", options: ["Dün", "Bugün", "Yarın", "Şimdi"], correctAnswer: 2, explanation: "'Tomorrow' yarın demektir.", type: "vocabulary" }] };

const unit119Questions: EnglishQuizUnit = { unitId: 119, title: "Weather Quiz", questions: [{ question: "'Cloudy' ne demek?", options: ["Güneşli", "Bulutlu", "Yağmurlu", "Karlı"], correctAnswer: 1, explanation: "'Cloudy' bulutlu demektir.", type: "vocabulary" }, { question: "Look! It ___ outside.", options: ["rain", "rains", "raining", "is raining"], correctAnswer: 3, explanation: "Şu an devam eden eylem için Present Continuous.", type: "grammar" }] };

const unit120Questions: EnglishQuizUnit = { unitId: 120, title: "Hobbies Quiz", questions: [{ question: "'Swimming' ne demek?", options: ["Koşma", "Yüzme", "Dans", "Okuma"], correctAnswer: 1, explanation: "'Swimming' yüzme demektir.", type: "vocabulary" }, { question: "I like ___ music.", options: ["listen", "listens", "listening to", "to listening"], correctAnswer: 2, explanation: "'Like' + fiil-ing yapısı.", type: "grammar" }] };

const unit121Questions: EnglishQuizUnit = { unitId: 121, title: "Feelings Quiz", questions: [{ question: "'Tired' ne demek?", options: ["Mutlu", "Üzgün", "Yorgun", "Aç"], correctAnswer: 2, explanation: "'Tired' yorgun demektir.", type: "vocabulary" }, { question: "I feel ___.", options: ["happily", "happy", "happiness", "to happy"], correctAnswer: 1, explanation: "'Feel' + sıfat yapısı.", type: "grammar" }] };

const unit122Questions: EnglishQuizUnit = { unitId: 122, title: "School Quiz", questions: [{ question: "'Homework' ne demek?", options: ["Kitap", "Sınav", "Ödev", "Ders"], correctAnswer: 2, explanation: "'Homework' ödev demektir.", type: "vocabulary" }, { question: "Give ___ the book. (he)", options: ["he", "his", "him", "himself"], correctAnswer: 2, explanation: "'He' nesne olarak 'him' olur.", type: "grammar" }] };

const unit123Questions: EnglishQuizUnit = { unitId: 123, title: "Holidays Quiz", questions: [{ question: "'Birthday' ne demek?", options: ["Yeni yıl", "Noel", "Doğum günü", "Bayram"], correctAnswer: 2, explanation: "'Birthday' doğum günü demektir.", type: "vocabulary" }, { question: "I would like ___ go now.", options: ["-", "to", "for", "that"], correctAnswer: 1, explanation: "'Would like' + to + fiil.", type: "grammar" }] };

const unit124Questions: EnglishQuizUnit = { unitId: 124, title: "Countries Quiz", questions: [{ question: "'Turkish' ne demek?", options: ["Türkiye", "Türk", "Türkçe", "Türkiye'den"], correctAnswer: 1, explanation: "'Turkish' Türk (milliyet) demektir.", type: "vocabulary" }, { question: "I'm ___ Japan.", options: ["at", "on", "from", "in"], correctAnswer: 2, explanation: "Nereli olduğunu söylemek için 'from' kullanılır.", type: "grammar" }] };

const unit125Questions: EnglishQuizUnit = { unitId: 125, title: "Verbs Quiz", questions: [{ question: "'Give' ne demek?", options: ["Almak", "Vermek", "Gitmek", "Gelmek"], correctAnswer: 1, explanation: "'Give' vermek demektir.", type: "vocabulary" }, { question: "She ___ to school every day.", options: ["go", "goes", "going", "to go"], correctAnswer: 1, explanation: "'She' için fiile -s eklenir.", type: "grammar" }] };

const unit126Questions: EnglishQuizUnit = { unitId: 126, title: "Present Simple Quiz", questions: [{ question: "'Usually' ne demek?", options: ["Her zaman", "Genellikle", "Bazen", "Asla"], correctAnswer: 1, explanation: "'Usually' genellikle demektir.", type: "vocabulary" }, { question: "___ she like pizza?", options: ["Do", "Does", "Is", "Are"], correctAnswer: 1, explanation: "'She' için 'Does' kullanılır.", type: "grammar" }] };

const unit127Questions: EnglishQuizUnit = { unitId: 127, title: "Present Continuous Quiz", questions: [{ question: "'Sleeping' ne demek?", options: ["Uyumak", "Uyuyor", "Uyuyordu", "Uyuyacak"], correctAnswer: 1, explanation: "'Sleeping' uyuyor demektir.", type: "vocabulary" }, { question: "They ___ now.", options: ["are working", "working", "is working", "works"], correctAnswer: 0, explanation: "'They' + 'are' + V-ing.", type: "grammar" }] };

const unit128Questions: EnglishQuizUnit = { unitId: 128, title: "Adjectives Quiz", questions: [{ question: "'Slow' ne demek?", options: ["Hızlı", "Yavaş", "Kolay", "Zor"], correctAnswer: 1, explanation: "'Slow' yavaş demektir.", type: "vocabulary" }, { question: "This book is ___ than that one.", options: ["interesting", "more interesting", "most interesting", "interestinger"], correctAnswer: 1, explanation: "'Interesting' uzun sıfat, 'more' eklenir.", type: "grammar" }] };

const unit129Questions: EnglishQuizUnit = { unitId: 129, title: "Prepositions Quiz", questions: [{ question: "'Under' ne demek?", options: ["Üstünde", "İçinde", "Altında", "Yanında"], correctAnswer: 2, explanation: "'Under' altında demektir.", type: "vocabulary" }, { question: "I live ___ Istanbul.", options: ["at", "on", "in", "to"], correctAnswer: 2, explanation: "Şehirler için 'in' kullanılır.", type: "grammar" }] };

const unit130Questions: EnglishQuizUnit = { unitId: 130, title: "A1 Review Quiz", questions: [{ question: "'Excuse me' ne zaman kullanılır?", options: ["Teşekkür ederken", "Dikkat çekerken", "Vedalaşırken", "Tanışırken"], correctAnswer: 1, explanation: "'Excuse me' dikkat çekmek için kullanılır.", type: "vocabulary" }, { question: "She ___ to school every day.", options: ["go", "goes", "going", "is go"], correctAnswer: 1, explanation: "'She' + V-s (Present Simple).", type: "grammar" }] };

// Export function
export function getEnglishA1QuestionsForUnit(unitId: number): EnglishQuizUnit {
    const idMapping: { [key: number]: EnglishQuizUnit } = {
        101: unit101Questions, 102: unit102Questions, 103: unit103Questions, 104: unit104Questions, 105: unit105Questions,
        106: unit106Questions, 107: unit107Questions, 108: unit108Questions, 109: unit109Questions, 110: unit110Questions,
        111: unit111Questions, 112: unit112Questions, 113: unit113Questions, 114: unit114Questions, 115: unit115Questions,
        116: unit116Questions, 117: unit117Questions, 118: unit118Questions, 119: unit119Questions, 120: unit120Questions,
        121: unit121Questions, 122: unit122Questions, 123: unit123Questions, 124: unit124Questions, 125: unit125Questions,
        126: unit126Questions, 127: unit127Questions, 128: unit128Questions, 129: unit129Questions, 130: unit130Questions,
    };

    return idMapping[unitId] || unit101Questions;
}
