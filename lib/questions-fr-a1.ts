
import { Question, QuestionType } from "./questions";

// French A1 Quiz Questions (Units 301-330)
// Her ünite 4 quiz, her quiz 20 soru (Kolay 7 + Orta 7 + Zor 6)

// ===== ÜNİTE 301: SELAMLAŞMA VE TANIŞMA =====
const unit301Quiz1: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'Bonjour' ne demek?", options: [{ id: "a", text: "Hoşça kal", correct: false }, { id: "b", text: "Merhaba/Günaydın", correct: true }, { id: "c", text: "Teşekkürler", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 2, type: "SELECT", question: "'Merci' ne demek?", options: [{ id: "a", text: "Lütfen", correct: false }, { id: "b", text: "Teşekkürler", correct: true }, { id: "c", text: "Özür dilerim", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 3, type: "SELECT", question: "'Au revoir' ne demek?", options: [{ id: "a", text: "Merhaba", correct: false }, { id: "b", text: "Hoşça kal", correct: true }, { id: "c", text: "Teşekkürler", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bonjour", options: [{ id: "a", text: "Merhaba", correct: true }, { id: "b", text: "Hoşça kal", correct: false }, { id: "c", text: "İyi geceler", correct: false }, { id: "d", text: "Teşekkürler", correct: false }] },
    { id: 5, type: "SELECT", question: "'Bonsoir' ne demek?", options: [{ id: "a", text: "Günaydın", correct: false }, { id: "b", text: "İyi akşamlar", correct: true }, { id: "c", text: "İyi geceler", correct: false }, { id: "d", text: "Hoşça kal", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Merci beaucoup", options: [{ id: "a", text: "Çok teşekkürler", correct: true }, { id: "b", text: "Rica ederim", correct: false }, { id: "c", text: "Lütfen", correct: false }, { id: "d", text: "Özür dilerim", correct: false }] },
    { id: 7, type: "SELECT", question: "'Salut' ne demek?", options: [{ id: "a", text: "Merhaba (resmi)", correct: false }, { id: "b", text: "Selam (samimi)", correct: true }, { id: "c", text: "Hoşça kal", correct: false }, { id: "d", text: "İyi günler", correct: false }] },
    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'Comment allez-vous?' ne demek?", options: [{ id: "a", text: "Nerelisiniz?", correct: false }, { id: "b", text: "Nasılsınız? (resmi)", correct: true }, { id: "c", text: "Adınız ne?", correct: false }, { id: "d", text: "Nereye gidiyorsunuz?", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Merhaba, nasılsınız?", correctAnswer: "Bonjour, comment allez-vous?" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ Marie.", options: [{ id: "a", text: "m'appelle", correct: true }, { id: "b", text: "suis", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je m'appelle Pierre", options: [{ id: "a", text: "Benim adım Pierre", correct: true }, { id: "b", text: "Pierre nerede?", correct: false }, { id: "c", text: "Pierre nasıl?", correct: false }, { id: "d", text: "Pierre kimdir?", correct: false }] },
    { id: 12, type: "SELECT", question: "'Enchanté(e)' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Memnun oldum", correct: true }, { id: "c", text: "Hoşça kal", correct: false }, { id: "d", text: "Rica ederim", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Adım Marie", correctAnswer: "Je m'appelle Marie" },
    { id: 14, type: "SELECT", question: "'Et vous?' ne demek?", options: [{ id: "a", text: "Ya o?", correct: false }, { id: "b", text: "Ya siz?", correct: true }, { id: "c", text: "Ya biz?", correct: false }, { id: "d", text: "Ya onlar?", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Memnun oldum, benim adım Jean", correctAnswer: "Enchanté, je m'appelle Jean" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Comment ___ tu?", options: [{ id: "a", text: "vas", correct: true }, { id: "b", text: "allez", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Comment vous appelez-vous?", options: [{ id: "a", text: "Adınız ne?", correct: true }, { id: "b", text: "Nasılsınız?", correct: false }, { id: "c", text: "Nerelisiniz?", correct: false }, { id: "d", text: "Ne yapıyorsunuz?", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Çok iyiyim, teşekkürler, ya siz?", correctAnswer: "Je vais très bien, merci, et vous?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Bonjour, je ___ de Turquie.", options: [{ id: "a", text: "suis", correct: true }, { id: "b", text: "viens", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İyi akşamlar, memnun oldum", correctAnswer: "Bonsoir, enchanté" }
];

const unit301Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "'S'il vous plaît' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Lütfen (resmi)", correct: true }, { id: "c", text: "Özür dilerim", correct: false }, { id: "d", text: "Rica ederim", correct: false }] },
    { id: 2, type: "SELECT", question: "'De rien' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Rica ederim/Bir şey değil", correct: true }, { id: "c", text: "Özür dilerim", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 3, type: "SELECT", question: "'Excusez-moi' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Özür dilerim/Affedersiniz", correct: true }, { id: "c", text: "Rica ederim", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "À bientôt", options: [{ id: "a", text: "Yakında görüşürüz", correct: true }, { id: "b", text: "Hoşça kal", correct: false }, { id: "c", text: "İyi geceler", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 5, type: "SELECT", question: "'Bonne nuit' ne demek?", options: [{ id: "a", text: "İyi akşamlar", correct: false }, { id: "b", text: "İyi geceler", correct: true }, { id: "c", text: "Günaydın", correct: false }, { id: "d", text: "İyi günler", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Comment ça va?", options: [{ id: "a", text: "Nasılsın? (samimi)", correct: true }, { id: "b", text: "Adın ne?", correct: false }, { id: "c", text: "Nerelisin?", correct: false }, { id: "d", text: "Ne yapıyorsun?", correct: false }] },
    { id: 7, type: "SELECT", question: "'Ça va bien' ne demek?", options: [{ id: "a", text: "Kötüyüm", correct: false }, { id: "b", text: "İyiyim", correct: true }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Hastayım", correct: false }] },
    { id: 8, type: "SELECT", question: "'Je suis fatigué(e)' ne demek?", options: [{ id: "a", text: "Mutluyum", correct: false }, { id: "b", text: "Yorgunum", correct: true }, { id: "c", text: "Açım", correct: false }, { id: "d", text: "İyiyim", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Lütfen, özür dilerim", correctAnswer: "S'il vous plaît, excusez-moi" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Ça va ___, merci.", options: [{ id: "a", text: "bien", correct: true }, { id: "b", text: "bon", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "D'où venez-vous?", options: [{ id: "a", text: "Nereden geliyorsunuz?", correct: true }, { id: "b", text: "Nereye gidiyorsunuz?", correct: false }, { id: "c", text: "Nasılsınız?", correct: false }, { id: "d", text: "Adınız ne?", correct: false }] },
    { id: 12, type: "SELECT", question: "'Je viens de Turquie' ne demek?", options: [{ id: "a", text: "Türkiye'ye gidiyorum", correct: false }, { id: "b", text: "Türkiye'den geliyorum", correct: true }, { id: "c", text: "Türkiye'deyim", correct: false }, { id: "d", text: "Türkiye güzel", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Yarın görüşürüz", correctAnswer: "À demain" },
    { id: 14, type: "SELECT", question: "'Pardon' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Pardon/Özür dilerim", correct: true }, { id: "c", text: "Lütfen", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Fransa'dan geliyorum", correctAnswer: "Je viens de France" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "À ___, bonne nuit!", options: [{ id: "a", text: "demain", correct: true }, { id: "b", text: "bientôt", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bonne journée", options: [{ id: "a", text: "İyi günler", correct: true }, { id: "b", text: "İyi akşamlar", correct: false }, { id: "c", text: "İyi geceler", correct: false }, { id: "d", text: "İyi haftalar", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Türkiye'denim, ya siz?", correctAnswer: "Je suis de Turquie, et vous?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ français un peu.", options: [{ id: "a", text: "parle", correct: true }, { id: "b", text: "suis", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Merhaba, ben Marie, Fransa'dan geliyorum", correctAnswer: "Bonjour, je m'appelle Marie, je viens de France" }
];

const unit301Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'Madame' ne demek?", options: [{ id: "a", text: "Bay", correct: false }, { id: "b", text: "Bayan/Hanımefendi", correct: true }, { id: "c", text: "Kız", correct: false }, { id: "d", text: "Çocuk", correct: false }] },
    { id: 2, type: "SELECT", question: "'Monsieur' ne demek?", options: [{ id: "a", text: "Bayan", correct: false }, { id: "b", text: "Bay/Beyefendi", correct: true }, { id: "c", text: "Çocuk", correct: false }, { id: "d", text: "Arkadaş", correct: false }] },
    { id: 3, type: "SELECT", question: "'Mademoiselle' ne demek?", options: [{ id: "a", text: "Bayan", correct: false }, { id: "b", text: "Genç bayan/Matmazel", correct: true }, { id: "c", text: "Bay", correct: false }, { id: "d", text: "Çocuk", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bonjour Monsieur", options: [{ id: "a", text: "Günaydın Beyefendi", correct: true }, { id: "b", text: "Günaydın Hanımefendi", correct: false }, { id: "c", text: "Hoşça kalın Beyefendi", correct: false }, { id: "d", text: "Merhaba arkadaş", correct: false }] },
    { id: 5, type: "SELECT", question: "'Ravi(e) de vous rencontrer' ne demek?", options: [{ id: "a", text: "Hoşça kalın", correct: false }, { id: "b", text: "Sizinle tanışmaktan mutluyum", correct: true }, { id: "c", text: "Teşekkürler", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je suis étudiant", options: [{ id: "a", text: "Ben öğrenciyim", correct: true }, { id: "b", text: "Ben öğretmenim", correct: false }, { id: "c", text: "Ben doktorum", correct: false }, { id: "d", text: "Ben mühendisim", correct: false }] },
    { id: 7, type: "SELECT", question: "'Oui' ne demek?", options: [{ id: "a", text: "Hayır", correct: false }, { id: "b", text: "Evet", correct: true }, { id: "c", text: "Belki", correct: false }, { id: "d", text: "Tamam", correct: false }] },
    { id: 8, type: "SELECT", question: "'Non' ne demek?", options: [{ id: "a", text: "Evet", correct: false }, { id: "b", text: "Hayır", correct: true }, { id: "c", text: "Belki", correct: false }, { id: "d", text: "Tamam", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Evet, ben öğrenciyim", correctAnswer: "Oui, je suis étudiant" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Bonjour ___, comment allez-vous?", options: [{ id: "a", text: "Madame", correct: true }, { id: "b", text: "Mademoiselle", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je ne comprends pas", options: [{ id: "a", text: "Anlamıyorum", correct: true }, { id: "b", text: "Bilmiyorum", correct: false }, { id: "c", text: "Görmüyorum", correct: false }, { id: "d", text: "Duymuyorum", correct: false }] },
    { id: 12, type: "SELECT", question: "'Je ne sais pas' ne demek?", options: [{ id: "a", text: "Anlamıyorum", correct: false }, { id: "b", text: "Bilmiyorum", correct: true }, { id: "c", text: "Görmüyorum", correct: false }, { id: "d", text: "Duymuyorum", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Affedersiniz, Fransızca konuşuyor musunuz?", correctAnswer: "Excusez-moi, parlez-vous français?" },
    { id: 14, type: "SELECT", question: "'Je parle un peu français' ne demek?", options: [{ id: "a", text: "Fransızca konuşmuyorum", correct: false }, { id: "b", text: "Biraz Fransızca konuşuyorum", correct: true }, { id: "c", text: "Çok iyi Fransızca konuşuyorum", correct: false }, { id: "d", text: "Fransızca öğreniyorum", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Hayır, anlamıyorum", correctAnswer: "Non, je ne comprends pas" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ français.", options: [{ id: "a", text: "parle", correct: true }, { id: "b", text: "suis", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Parlez plus lentement, s'il vous plaît", options: [{ id: "a", text: "Daha yavaş konuşun lütfen", correct: true }, { id: "b", text: "Daha hızlı konuşun lütfen", correct: false }, { id: "c", text: "Tekrar edin lütfen", correct: false }, { id: "d", text: "Daha yüksek sesle konuşun lütfen", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Evet, biraz Türkçe konuşuyorum", correctAnswer: "Oui, je parle un peu turc" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ pas.", options: [{ id: "a", text: "ne comprends", correct: true }, { id: "b", text: "suis", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Merhaba Beyefendi, nasılsınız? İyiyim, teşekkürler.", correctAnswer: "Bonjour Monsieur, comment allez-vous? Je vais bien, merci." }
];

const unit301Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'Bienvenue' ne demek?", options: [{ id: "a", text: "Hoşça kal", correct: false }, { id: "b", text: "Hoş geldiniz", correct: true }, { id: "c", text: "Teşekkürler", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 2, type: "SELECT", question: "'Je suis content(e)' ne demek?", options: [{ id: "a", text: "Yorgunum", correct: false }, { id: "b", text: "Mutluyum/Memnunum", correct: true }, { id: "c", text: "Üzgünüm", correct: false }, { id: "d", text: "Hastayım", correct: false }] },
    { id: 3, type: "SELECT", question: "'Avec plaisir' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Memnuniyetle", correct: true }, { id: "c", text: "Özür dilerim", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bienvenue en France", options: [{ id: "a", text: "Fransa'ya hoş geldiniz", correct: true }, { id: "b", text: "Fransa güzel", correct: false }, { id: "c", text: "Fransa'dan geliyorum", correct: false }, { id: "d", text: "Fransa'ya gidiyorum", correct: false }] },
    { id: 5, type: "SELECT", question: "'Comment tu t'appelles?' ne demek?", options: [{ id: "a", text: "Nasılsın?", correct: false }, { id: "b", text: "Adın ne? (samimi)", correct: true }, { id: "c", text: "Nerelisin?", correct: false }, { id: "d", text: "Kaç yaşındasın?", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Très bien, merci", options: [{ id: "a", text: "Çok iyiyim, teşekkürler", correct: true }, { id: "b", text: "İdare eder", correct: false }, { id: "c", text: "Kötüyüm", correct: false }, { id: "d", text: "Yorgunum", correct: false }] },
    { id: 7, type: "SELECT", question: "'Et toi?' ne demek?", options: [{ id: "a", text: "Ya o?", correct: false }, { id: "b", text: "Ya sen? (samimi)", correct: true }, { id: "c", text: "Ya biz?", correct: false }, { id: "d", text: "Ya onlar?", correct: false }] },
    { id: 8, type: "SELECT", question: "'Quel est votre nom?' ne demek?", options: [{ id: "a", text: "Nasılsınız?", correct: false }, { id: "b", text: "Adınız nedir?", correct: true }, { id: "c", text: "Nerelisiniz?", correct: false }, { id: "d", text: "Ne yapıyorsunuz?", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Adın ne? - Adım Sophie", correctAnswer: "Comment tu t'appelles? - Je m'appelle Sophie" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis ___ de te rencontrer.", options: [{ id: "a", text: "ravi", correct: true }, { id: "b", text: "bon", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je suis turc", options: [{ id: "a", text: "Ben Türküm", correct: true }, { id: "b", text: "Ben Türkiye'deyim", correct: false }, { id: "c", text: "Türkiye güzel", correct: false }, { id: "d", text: "Türkçe konuşuyorum", correct: false }] },
    { id: 12, type: "SELECT", question: "'Je suis française' ne demek?", options: [{ id: "a", text: "Fransa'dayım", correct: false }, { id: "b", text: "Ben Fransızım (kadın)", correct: true }, { id: "c", text: "Fransızca konuşuyorum", correct: false }, { id: "d", text: "Fransa'dan geliyorum", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Ya sen, nasılsın?", correctAnswer: "Et toi, comment vas-tu?" },
    { id: 14, type: "SELECT", question: "'Pas mal' ne demek?", options: [{ id: "a", text: "Çok iyi", correct: false }, { id: "b", text: "Fena değil/İdare eder", correct: true }, { id: "c", text: "Çok kötü", correct: false }, { id: "d", text: "Harika", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "İdare eder, teşekkürler", correctAnswer: "Pas mal, merci" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Comment ___ tu?", options: [{ id: "a", text: "vas", correct: true }, { id: "b", text: "allez", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je suis professeur", options: [{ id: "a", text: "Ben öğretmenim", correct: true }, { id: "b", text: "Ben öğrenciyim", correct: false }, { id: "c", text: "Ben doktorum", correct: false }, { id: "d", text: "Ben avukatım", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Ben Türk öğrenciyim", correctAnswer: "Je suis étudiant turc" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "___ en Turquie.", options: [{ id: "a", text: "Bienvenue", correct: true }, { id: "b", text: "Bonjour", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Merhaba, ben Pierre, Fransız öğretmenim, tanıştığımıza memnun oldum", correctAnswer: "Bonjour, je m'appelle Pierre, je suis professeur français, enchanté" }
];

// Tüm quiz export
export { unit301Quiz1, unit301Quiz2, unit301Quiz3, unit301Quiz4 };

// Diğer üniteler için dinamik oluşturucu
const unitTopics: { [key: number]: { title: string, words: string[][], sentences: string[] } } = {
    301: { title: "Selamlaşma ve Tanışma", words: [["Bonjour", "Merhaba"], ["Merci", "Teşekkürler"], ["Au revoir", "Hoşça kal"], ["S'il vous plaît", "Lütfen"]], sentences: ["___ comment allez-vous?", "Je m'appelle ___."] },
    302: { title: "Alfabe ve Sesler", words: [["L'alphabet", "Alfabe"], ["La lettre", "Harf"], ["Le son", "Ses"], ["Épeler", "Hecelemek"], ["Prononcer", "Telaffuz etmek"], ["L'accent", "Aksan"], ["Répéter", "Tekrarlamak"], ["Écrire", "Yazmak"]], sentences: ["Comment ça ___?", "Pouvez-vous ___?"] },
    303: { title: "Sayılar (0-20)", words: [["Un", "Bir"], ["Deux", "İki"], ["Trois", "Üç"], ["Quatre", "Dört"], ["Cinq", "Beş"], ["Dix", "On"], ["Quinze", "On beş"], ["Vingt", "Yirmi"]], sentences: ["J'ai ___ ans.", "Combien ça ___?"] },
    304: { title: "Renkler", words: [["Rouge", "Kırmızı"], ["Bleu", "Mavi"], ["Vert", "Yeşil"], ["Jaune", "Sarı"], ["Noir", "Siyah"], ["Blanc", "Beyaz"], ["Rose", "Pembe"], ["Orange", "Turuncu"]], sentences: ["C'est ___.", "La couleur ___"] },
    305: { title: "Aile Bireyleri", words: [["Le père", "Baba"], ["La mère", "Anne"], ["Le frère", "Erkek kardeş"], ["La sœur", "Kız kardeş"], ["Les parents", "Ebeveynler"], ["Les enfants", "Çocuklar"], ["Le fils", "Oğul"], ["La fille", "Kız"]], sentences: ["Mon ___ s'appelle...", "Ma ___ est..."] },
    306: { title: "Günler ve Aylar", words: [["Lundi", "Pazartesi"], ["Mardi", "Salı"], ["Mercredi", "Çarşamba"], ["Janvier", "Ocak"], ["Février", "Şubat"], ["Mars", "Mart"], ["Avril", "Nisan"], ["Dimanche", "Pazar"]], sentences: ["Aujourd'hui c'est ___.", "En ___ il fait froid."] },
    307: { title: "Ülkeler ve Milletler", words: [["La France", "Fransa"], ["La Turquie", "Türkiye"], ["L'Allemagne", "Almanya"], ["L'Espagne", "İspanya"], ["Français(e)", "Fransız"], ["Turc/Turque", "Türk"], ["Anglais(e)", "İngiliz"], ["Allemand(e)", "Alman"]], sentences: ["Je suis ___.", "Je viens de ___."] },
    308: { title: "Meslekler", words: [["Le médecin", "Doktor"], ["Le professeur", "Öğretmen"], ["L'ingénieur", "Mühendis"], ["L'avocat", "Avukat"], ["L'étudiant", "Öğrenci"], ["Le policier", "Polis"], ["L'infirmier", "Hemşire"], ["Le cuisinier", "Aşçı"]], sentences: ["Je suis ___.", "Mon père est ___."] },
    309: { title: "Yiyecekler", words: [["Le pain", "Ekmek"], ["Le fromage", "Peynir"], ["La viande", "Et"], ["Le poisson", "Balık"], ["Les légumes", "Sebzeler"], ["Les fruits", "Meyveler"], ["Le poulet", "Tavuk"], ["L'œuf", "Yumurta"]], sentences: ["Je mange du ___.", "J'aime le ___."] },
    310: { title: "İçecekler", words: [["L'eau", "Su"], ["Le café", "Kahve"], ["Le thé", "Çay"], ["Le lait", "Süt"], ["Le jus", "Meyve suyu"], ["Le vin", "Şarap"], ["La bière", "Bira"], ["Le chocolat", "Sıcak çikolata"]], sentences: ["Je bois du ___.", "Un ___ s'il vous plaît."] },
    311: { title: "Ev ve Odalar", words: [["La maison", "Ev"], ["La chambre", "Oda"], ["La cuisine", "Mutfak"], ["Le salon", "Oturma odası"], ["La salle de bain", "Banyo"], ["Le jardin", "Bahçe"], ["L'appartement", "Daire"], ["L'étage", "Kat"]], sentences: ["Ma ___ est grande.", "J'habite dans un ___."] },
    312: { title: "Mobilya ve Eşyalar", words: [["La table", "Masa"], ["La chaise", "Sandalye"], ["Le lit", "Yatak"], ["Le canapé", "Kanepe"], ["L'armoire", "Dolap"], ["La lampe", "Lamba"], ["Le bureau", "Çalışma masası"], ["Le miroir", "Ayna"]], sentences: ["La ___ est dans la chambre.", "J'ai besoin d'un ___."] },
    313: { title: "Şehir ve Yerler", words: [["La ville", "Şehir"], ["La gare", "İstasyon"], ["L'hôpital", "Hastane"], ["La banque", "Banka"], ["Le supermarché", "Süpermarket"], ["La pharmacie", "Eczane"], ["Le parc", "Park"], ["L'église", "Kilise"]], sentences: ["Où est la ___?", "Je vais à la ___."] },
    314: { title: "Ulaşım", words: [["Le bus", "Otobüs"], ["Le train", "Tren"], ["Le métro", "Metro"], ["L'avion", "Uçak"], ["La voiture", "Araba"], ["Le vélo", "Bisiklet"], ["Le taxi", "Taksi"], ["Le bateau", "Gemi"]], sentences: ["Je prends le ___.", "Le ___ arrive à..."] },
    315: { title: "Saat ve Zaman", words: [["L'heure", "Saat"], ["La minute", "Dakika"], ["Le matin", "Sabah"], ["L'après-midi", "Öğleden sonra"], ["Le soir", "Akşam"], ["La nuit", "Gece"], ["Maintenant", "Şimdi"], ["Plus tard", "Daha sonra"]], sentences: ["Il est ___ heures.", "À quelle ___ ?"] },
    316: { title: "Hava Durumu", words: [["Le soleil", "Güneş"], ["La pluie", "Yağmur"], ["La neige", "Kar"], ["Le vent", "Rüzgar"], ["Chaud", "Sıcak"], ["Froid", "Soğuk"], ["Le nuage", "Bulut"], ["L'orage", "Fırtına"]], sentences: ["Il fait ___.", "Quel ___ fait-il?"] },
    317: { title: "Günlük Aktiviteler", words: [["Se réveiller", "Uyanmak"], ["Se doucher", "Duş almak"], ["Manger", "Yemek yemek"], ["Travailler", "Çalışmak"], ["Dormir", "Uyumak"], ["Étudier", "Ders çalışmak"], ["Cuisiner", "Yemek yapmak"], ["Se reposer", "Dinlenmek"]], sentences: ["Je me ___ à 7 heures.", "Je ___ tous les jours."] },
    318: { title: "Hobiler", words: [["Lire", "Okumak"], ["Écouter de la musique", "Müzik dinlemek"], ["Regarder la télé", "TV izlemek"], ["Jouer", "Oynamak"], ["Nager", "Yüzmek"], ["Voyager", "Seyahat etmek"], ["Cuisiner", "Yemek yapmak"], ["Danser", "Dans etmek"]], sentences: ["J'aime ___.", "Mon hobby c'est ___."] },
    319: { title: "Duygular", words: [["Content(e)", "Mutlu"], ["Triste", "Üzgün"], ["Fatigué(e)", "Yorgun"], ["Fâché(e)", "Kızgın"], ["Inquiet/Inquiète", "Endişeli"], ["Surpris(e)", "Şaşkın"], ["Nerveux/Nerveuse", "Gergin"], ["Calme", "Sakin"]], sentences: ["Je suis ___.", "Il/Elle est ___."] },
    320: { title: "Vücut Bölümleri", words: [["La tête", "Baş"], ["Les yeux", "Gözler"], ["Le nez", "Burun"], ["La bouche", "Ağız"], ["Les oreilles", "Kulaklar"], ["Les mains", "Eller"], ["Les pieds", "Ayaklar"], ["Le cœur", "Kalp"]], sentences: ["J'ai mal à la ___.", "Il/Elle a de beaux ___."] },
    321: { title: "Ulaşım", words: [["Le billet", "Bilet"], ["L'arrêt", "Durak"], ["La gare", "İstasyon"], ["L'aéroport", "Havalimanı"], ["Le quai", "Peron"], ["La correspondance", "Aktarma"], ["L'horaire", "Tarife"], ["Le passager", "Yolcu"]], sentences: ["Je voudrais un ___.", "Le train part du ___."] },
    322: { title: "Mevsimler", words: [["Le printemps", "İlkbahar"], ["L'été", "Yaz"], ["L'automne", "Sonbahar"], ["L'hiver", "Kış"], ["La saison", "Mevsim"], ["Les fleurs", "Çiçekler"], ["Les feuilles", "Yapraklar"], ["La chaleur", "Sıcaklık"]], sentences: ["En ___ il fait chaud.", "Ma ___ préférée est..."] },
    323: { title: "Doğum Günü", words: [["L'anniversaire", "Doğum günü"], ["Le gâteau", "Pasta"], ["Les bougies", "Mumlar"], ["Le cadeau", "Hediye"], ["La fête", "Parti"], ["Félicitations", "Tebrikler"], ["Les ballons", "Balonlar"], ["La surprise", "Sürpriz"]], sentences: ["Joyeux ___!", "J'ai reçu un ___."] },
    324: { title: "Tatil", words: [["Les vacances", "Tatil"], ["La plage", "Plaj"], ["La mer", "Deniz"], ["La montagne", "Dağ"], ["L'hôtel", "Otel"], ["Le passeport", "Pasaport"], ["La valise", "Valiz"], ["Le souvenir", "Hatıra"]], sentences: ["Je pars en ___.", "J'adore la ___."] },
    325: { title: "Alışveriş", words: [["Le magasin", "Mağaza"], ["Le prix", "Fiyat"], ["Acheter", "Satın almak"], ["Payer", "Ödemek"], ["La caisse", "Kasa"], ["Le sac", "Çanta"], ["La réduction", "İndirim"], ["La carte", "Kart"]], sentences: ["Combien ça ___?", "Je voudrais ___."] },
    326: { title: "Restoranda", words: [["Le menu", "Menü"], ["Le serveur", "Garson"], ["L'addition", "Hesap"], ["Commander", "Sipariş vermek"], ["Le plat", "Yemek"], ["L'entrée", "Başlangıç"], ["Le dessert", "Tatlı"], ["La boisson", "İçecek"]], sentences: ["L'___ s'il vous plaît.", "Je voudrais ___."] },
    327: { title: "Renkler ve Sıfatlar", words: [["Grand(e)", "Büyük"], ["Petit(e)", "Küçük"], ["Beau/Belle", "Güzel"], ["Nouveau/Nouvelle", "Yeni"], ["Vieux/Vieille", "Eski"], ["Bon(ne)", "İyi"], ["Mauvais(e)", "Kötü"], ["Long(ue)", "Uzun"]], sentences: ["C'est ___.", "Il/Elle est très ___."] },
    328: { title: "Hayvanlar", words: [["Le chien", "Köpek"], ["Le chat", "Kedi"], ["L'oiseau", "Kuş"], ["Le poisson", "Balık"], ["Le cheval", "At"], ["La vache", "İnek"], ["Le lapin", "Tavşan"], ["L'éléphant", "Fil"]], sentences: ["J'ai un ___.", "Mon ___ s'appelle..."] },
    329: { title: "Teknoloji", words: [["Le téléphone", "Telefon"], ["L'ordinateur", "Bilgisayar"], ["Internet", "İnternet"], ["L'application", "Uygulama"], ["Le message", "Mesaj"], ["L'écran", "Ekran"], ["Le wifi", "Wifi"], ["La photo", "Fotoğraf"]], sentences: ["J'utilise mon ___.", "Je n'ai pas de ___."] },
    330: { title: "A1 Genel Tekrar", words: [["Apprendre", "Öğrenmek"], ["Comprendre", "Anlamak"], ["Parler", "Konuşmak"], ["Écouter", "Dinlemek"], ["Écrire", "Yazmak"], ["Lire", "Okumak"], ["Réussir", "Başarmak"], ["Continuer", "Devam etmek"]], sentences: ["J'ai ___ le français.", "Félicitations!"] }
};

function generateFrenchQuiz(unitId: number, quizIndex: number): Question[] {
    const topic = unitTopics[unitId];
    if (!topic) return [];

    const baseId = (quizIndex - 1) * 20;
    const questions: Question[] = [];

    for (let i = 0; i < 20; i++) {
        const wordIdx = i % topic.words.length;
        const otherWords = topic.words.filter((_, idx) => idx !== wordIdx);
        const wrongOptions = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);

        let qType: QuestionType;
        if (i < 7) {
            const easyTypes: QuestionType[] = ["SELECT", "SELECT", "SELECT", "LISTENING", "LISTENING", "SELECT", "LISTENING"];
            qType = easyTypes[i];
        } else if (i < 14) {
            const mediumTypes: QuestionType[] = ["SELECT", "TRANSLATE", "SELECT", "LISTENING", "FILL_BLANK", "TRANSLATE", "SELECT"];
            qType = mediumTypes[i - 7];
        } else {
            const hardTypes: QuestionType[] = ["TRANSLATE", "FILL_BLANK", "LISTENING", "FILL_BLANK", "TRANSLATE", "TRANSLATE"];
            qType = hardTypes[i - 14];
        }

        const allOptions = [
            { id: "correct", text: topic.words[wordIdx][1], correct: true },
            { id: "w1", text: wrongOptions[0]?.[1] || "Seçenek", correct: false },
            { id: "w2", text: wrongOptions[1]?.[1] || "Seçenek", correct: false },
            { id: "w3", text: wrongOptions[2]?.[1] || "Seçenek", correct: false }
        ].sort(() => 0.5 - Math.random()).map((opt, idx) => ({ ...opt, id: String.fromCharCode(97 + idx) }));

        const sentenceIdx = i % (topic.sentences?.length || 1);
        const dynamicSentence = topic.sentences ? topic.sentences[sentenceIdx] : "La ___ est importante.";

        questions.push({
            id: baseId + i + 1,
            type: qType,
            question: qType === "SELECT" ? `'${topic.words[wordIdx][0]}' ne demek?` :
                qType === "TRANSLATE" ? "Çevir:" :
                    qType === "LISTENING" ? "Duyduğunu seç:" : "Doldur:",
            options: qType !== "TRANSLATE" ? allOptions : undefined,
            correctAnswer: qType === "TRANSLATE" ? topic.words[wordIdx][0] : undefined,
            hint: qType === "TRANSLATE" ? topic.words[wordIdx][1] : undefined,
            audioText: qType === "LISTENING" ? topic.words[wordIdx][0] : undefined,
            sentence: qType === "FILL_BLANK" ? dynamicSentence : undefined,
        });
    }
    return questions;
}

export function getFrenchA1QuestionsForUnit(unitId: number, quizIndex: number): Question[] {
    // Ünite 301 için özel quizler
    if (unitId === 301) {
        if (quizIndex === 1) return unit301Quiz1;
        if (quizIndex === 2) return unit301Quiz2;
        if (quizIndex === 3) return unit301Quiz3;
        if (quizIndex === 4) return unit301Quiz4;
    }

    // Diğer üniteler için dinamik üret
    return generateFrenchQuiz(unitId, quizIndex);
}
