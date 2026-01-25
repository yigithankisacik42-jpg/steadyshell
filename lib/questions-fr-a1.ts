
import { Question, QuestionType } from "./questions";
import * as part2 from "./questions-fr-a1-part2";
import * as part3 from "./questions-fr-a1-part3";
import * as part4 from "./questions-fr-a1-part4";
import * as part5 from "./questions-fr-a1-part5";
import * as part6 from "./questions-fr-a1-part6";
import * as part7 from "./questions-fr-a1-part7";
import * as part8 from "./questions-fr-a1-part8";
import * as part9 from "./questions-fr-a1-part9";
import * as part10 from "./questions-fr-a1-part10";
import * as part11 from "./questions-fr-a1-part11";
import * as part12 from "./questions-fr-a1-part12";
import * as part13 from "./questions-fr-a1-part13";
import * as part14 from "./questions-fr-a1-part14";

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
];

// ===== ÜNİTE 302: ALFABE VE SESLER =====
const unit302Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'L'alphabet' ne demek?", options: [{ id: "a", text: "Alfabe", correct: true }, { id: "b", text: "Harf", correct: false }, { id: "c", text: "Ses", correct: false }, { id: "d", text: "Kelime", correct: false }] },
    { id: 2, type: "SELECT", question: "'La lettre' ne demek?", options: [{ id: "a", text: "Harf", correct: true }, { id: "b", text: "Mektup", correct: false }, { id: "c", text: "Kelime", correct: false }, { id: "d", text: "Cümle", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "A, B, C, D", options: [{ id: "a", text: "A, B, C, D", correct: true }, { id: "b", text: "E, F, G, H", correct: false }, { id: "c", text: "I, J, K, L", correct: false }, { id: "d", text: "M, N, O, P", correct: false }] },
    { id: 4, type: "SELECT", question: "'Épeler' ne demek?", options: [{ id: "a", text: "Hecelemek", correct: true }, { id: "b", text: "Okumak", correct: false }, { id: "c", text: "Yazmak", correct: false }, { id: "d", text: "Dinlemek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Comment ça s'écrit?", options: [{ id: "a", text: "Nasıl yazılır?", correct: true }, { id: "b", text: "Nasıl okunur?", correct: false }, { id: "c", text: "Ne demek?", correct: false }, { id: "d", text: "Nasıl söylenir?", correct: false }] },
    { id: 6, type: "SELECT", question: "'Prononcer' ne demek?", options: [{ id: "a", text: "Telaffuz etmek", correct: true }, { id: "b", text: "Yazmak", correct: false }, { id: "c", text: "Okumak", correct: false }, { id: "d", text: "Dinlemek", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le son' ne demek?", options: [{ id: "a", text: "Ses", correct: true }, { id: "b", text: "Harf", correct: false }, { id: "c", text: "Kelime", correct: false }, { id: "d", text: "Cümle", correct: false }] },
    { id: 8, type: "SELECT", question: "'Répéter' ne demek?", options: [{ id: "a", text: "Tekrarlamak", correct: true }, { id: "b", text: "Yazmak", correct: false }, { id: "c", text: "Okumak", correct: false }, { id: "d", text: "Silmek", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Nasıl yazılır?", correctAnswer: "Comment ça s'écrit?" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Comment ça se ___?", options: [{ id: "a", text: "prononce", correct: true }, { id: "b", text: "écrit", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Pouvez-vous répéter?", options: [{ id: "a", text: "Tekrar eder misiniz?", correct: true }, { id: "b", text: "Yazar mısınız?", correct: false }, { id: "c", text: "Okur musunuz?", correct: false }, { id: "d", text: "Dinler misiniz?", correct: false }] },
    { id: 12, type: "SELECT", question: "'L'accent' ne demek?", options: [{ id: "a", text: "Aksan/Vurgu", correct: true }, { id: "b", text: "Harf", correct: false }, { id: "c", text: "Ses", correct: false }, { id: "d", text: "Kelime", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Alfabeyi öğreniyorum", correctAnswer: "J'apprends l'alphabet" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Pouvez-vous ___ s'il vous plaît?", options: [{ id: "a", text: "épeler", correct: true }, { id: "b", text: "écrire", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Tekrar edin lütfen", correctAnswer: "Répétez s'il vous plaît" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est quelle lettre?", options: [{ id: "a", text: "Bu hangi harf?", correct: true }, { id: "b", text: "Bu hangi ses?", correct: false }, { id: "c", text: "Bu hangi kelime?", correct: false }, { id: "d", text: "Bu hangi sayı?", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Comment ___ ce mot?", options: [{ id: "a", text: "prononce-t-on", correct: true }, { id: "b", text: "écrit-on", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Adınızı heceleyebilir misiniz?", correctAnswer: "Pouvez-vous épeler votre nom?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ français a 26 lettres.", options: [{ id: "a", text: "alphabet", correct: true }, { id: "b", text: "accent", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bu nasıl telaffuz edilir?", correctAnswer: "Comment ça se prononce?" }
];

const unit302Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "Fransız alfabesinde kaç harf var?", options: [{ id: "a", text: "26", correct: true }, { id: "b", text: "24", correct: false }, { id: "c", text: "29", correct: false }, { id: "d", text: "27", correct: false }] },
    { id: 2, type: "SELECT", question: "'Écrire' ne demek?", options: [{ id: "a", text: "Yazmak", correct: true }, { id: "b", text: "Okumak", correct: false }, { id: "c", text: "Konuşmak", correct: false }, { id: "d", text: "Dinlemek", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "É, È, Ê", options: [{ id: "a", text: "E harfi aksanlı versiyonları", correct: true }, { id: "b", text: "A harfi aksanlı versiyonları", correct: false }, { id: "c", text: "O harfi aksanlı versiyonları", correct: false }, { id: "d", text: "U harfi aksanlı versiyonları", correct: false }] },
    { id: 4, type: "SELECT", question: "'Lire' ne demek?", options: [{ id: "a", text: "Okumak", correct: true }, { id: "b", text: "Yazmak", correct: false }, { id: "c", text: "Konuşmak", correct: false }, { id: "d", text: "Dinlemek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je ne comprends pas", options: [{ id: "a", text: "Anlamıyorum", correct: true }, { id: "b", text: "Bilmiyorum", correct: false }, { id: "c", text: "Duyamıyorum", correct: false }, { id: "d", text: "Göremiyorum", correct: false }] },
    { id: 6, type: "SELECT", question: "'Un mot' ne demek?", options: [{ id: "a", text: "Bir kelime", correct: true }, { id: "b", text: "Bir harf", correct: false }, { id: "c", text: "Bir cümle", correct: false }, { id: "d", text: "Bir ses", correct: false }] },
    { id: 7, type: "SELECT", question: "'Une phrase' ne demek?", options: [{ id: "a", text: "Bir cümle", correct: true }, { id: "b", text: "Bir kelime", correct: false }, { id: "c", text: "Bir paragraf", correct: false }, { id: "d", text: "Bir harf", correct: false }] },
    { id: 8, type: "SELECT", question: "'Doucement' ne demek?", options: [{ id: "a", text: "Yavaşça", correct: true }, { id: "b", text: "Hızlıca", correct: false }, { id: "c", text: "Yüksek sesle", correct: false }, { id: "d", text: "Sessizce", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Daha yavaş konuşun", correctAnswer: "Parlez plus lentement" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ écrire en français.", options: [{ id: "a", text: "sais", correct: true }, { id: "b", text: "peux", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est difficile", options: [{ id: "a", text: "Bu zor", correct: true }, { id: "b", text: "Bu kolay", correct: false }, { id: "c", text: "Bu güzel", correct: false }, { id: "d", text: "Bu ilginç", correct: false }] },
    { id: 12, type: "SELECT", question: "'Facile' ne demek?", options: [{ id: "a", text: "Kolay", correct: true }, { id: "b", text: "Zor", correct: false }, { id: "c", text: "Hızlı", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Fransızca kolay", correctAnswer: "Le français est facile" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Comment ___ votre nom?", options: [{ id: "a", text: "épelez-vous", correct: true }, { id: "b", text: "prononcez-vous", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Anlamadım", correctAnswer: "Je n'ai pas compris" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Plus fort s'il vous plaît", options: [{ id: "a", text: "Daha yüksek sesle lütfen", correct: true }, { id: "b", text: "Daha yavaş lütfen", correct: false }, { id: "c", text: "Tekrar lütfen", correct: false }, { id: "d", text: "Daha hızlı lütfen", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est une ___ difficile.", options: [{ id: "a", text: "lettre", correct: true }, { id: "b", text: "alphabet", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bu kelimeyi yazmayı bilmiyorum", correctAnswer: "Je ne sais pas écrire ce mot" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous pouvez ___ plus lentement?", options: [{ id: "a", text: "parler", correct: true }, { id: "b", text: "écrire", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bu harf Ç'dir, Fransızcada c cédille", correctAnswer: "Cette lettre est Ç, c cédille en français" }
];

const unit302Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'La voyelle' ne demek?", options: [{ id: "a", text: "Sesli harf", correct: true }, { id: "b", text: "Sessiz harf", correct: false }, { id: "c", text: "Aksan", correct: false }, { id: "d", text: "Ses", correct: false }] },
    { id: 2, type: "SELECT", question: "'La consonne' ne demek?", options: [{ id: "a", text: "Sessiz harf", correct: true }, { id: "b", text: "Sesli harf", correct: false }, { id: "c", text: "Aksan", correct: false }, { id: "d", text: "Kelime", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les voyelles sont A, E, I, O, U", options: [{ id: "a", text: "Sesli harfler A, E, I, O, U'dur", correct: true }, { id: "b", text: "Sessiz harfler A, E, I, O, U'dur", correct: false }, { id: "c", text: "Alfabe A, E, I, O, U ile başlar", correct: false }, { id: "d", text: "Beş harf var", correct: false }] },
    { id: 4, type: "SELECT", question: "'Majuscule' ne demek?", options: [{ id: "a", text: "Büyük harf", correct: true }, { id: "b", text: "Küçük harf", correct: false }, { id: "c", text: "Sesli harf", correct: false }, { id: "d", text: "Sessiz harf", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "En minuscule ou en majuscule?", options: [{ id: "a", text: "Küçük harf mi büyük harf mi?", correct: true }, { id: "b", text: "Sesli mi sessiz mi?", correct: false }, { id: "c", text: "Fransızca mı İngilizce mi?", correct: false }, { id: "d", text: "Doğru mu yanlış mı?", correct: false }] },
    { id: 6, type: "SELECT", question: "'Minuscule' ne demek?", options: [{ id: "a", text: "Küçük harf", correct: true }, { id: "b", text: "Büyük harf", correct: false }, { id: "c", text: "Sesli harf", correct: false }, { id: "d", text: "Sessiz harf", correct: false }] },
    { id: 7, type: "SELECT", question: "'La syllabe' ne demek?", options: [{ id: "a", text: "Hece", correct: true }, { id: "b", text: "Harf", correct: false }, { id: "c", text: "Kelime", correct: false }, { id: "d", text: "Cümle", correct: false }] },
    { id: 8, type: "SELECT", question: "'Correct' ne demek?", options: [{ id: "a", text: "Doğru", correct: true }, { id: "b", text: "Yanlış", correct: false }, { id: "c", text: "Güzel", correct: false }, { id: "d", text: "Kötü", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Büyük harfle yazın", correctAnswer: "Écrivez en majuscule" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "A, E, I, O, U sont des ___.", options: [{ id: "a", text: "voyelles", correct: true }, { id: "b", text: "consonnes", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est correct", options: [{ id: "a", text: "Bu doğru", correct: true }, { id: "b", text: "Bu yanlış", correct: false }, { id: "c", text: "Bu güzel", correct: false }, { id: "d", text: "Bu zor", correct: false }] },
    { id: 12, type: "SELECT", question: "'Incorrect' ne demek?", options: [{ id: "a", text: "Yanlış", correct: true }, { id: "b", text: "Doğru", correct: false }, { id: "c", text: "Güzel", correct: false }, { id: "d", text: "Kolay", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Bu kelimede kaç hece var?", correctAnswer: "Combien de syllabes dans ce mot?" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "B, C, D, F sont des ___.", options: [{ id: "a", text: "consonnes", correct: true }, { id: "b", text: "voyelles", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bu doğru telaffuz", correctAnswer: "C'est la bonne prononciation" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Avec un accent aigu", options: [{ id: "a", text: "Tiz aksanla (é)", correct: true }, { id: "b", text: "Pes aksanla (è)", correct: false }, { id: "c", text: "Şapka aksanla (ê)", correct: false }, { id: "d", text: "Aksansız", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ ou incorrect?", options: [{ id: "a", text: "correct", correct: true }, { id: "b", text: "faux", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "É harfi tiz aksanlı E'dir", correctAnswer: "É est un E avec accent aigu" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Écrivez en ___.", options: [{ id: "a", text: "minuscule", correct: true }, { id: "b", text: "majuscules", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Alfabeyi tekrar edin lütfen", correctAnswer: "Répétez l'alphabet s'il vous plaît" }
];

const unit302Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'L'accent aigu' (é) ne demek?", options: [{ id: "a", text: "Tiz aksan", correct: true }, { id: "b", text: "Pes aksan", correct: false }, { id: "c", text: "Şapka aksan", correct: false }, { id: "d", text: "Çift nokta", correct: false }] },
    { id: 2, type: "SELECT", question: "'L'accent grave' (è) ne demek?", options: [{ id: "a", text: "Pes aksan", correct: true }, { id: "b", text: "Tiz aksan", correct: false }, { id: "c", text: "Şapka aksan", correct: false }, { id: "d", text: "Çift nokta", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ç s'appelle c cédille", options: [{ id: "a", text: "Ç harfine c sedil denir", correct: true }, { id: "b", text: "C harfine sedil denir", correct: false }, { id: "c", text: "S harfine sedil denir", correct: false }, { id: "d", text: "Z harfine sedil denir", correct: false }] },
    { id: 4, type: "SELECT", question: "'L'accent circonflexe' (ê) ne demek?", options: [{ id: "a", text: "Şapka aksan", correct: true }, { id: "b", text: "Tiz aksan", correct: false }, { id: "c", text: "Pes aksan", correct: false }, { id: "d", text: "Çift nokta", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le tréma sur le i", options: [{ id: "a", text: "I üzerinde çift nokta", correct: true }, { id: "b", text: "I üzerinde şapka", correct: false }, { id: "c", text: "I üzerinde aksan", correct: false }, { id: "d", text: "I büyük harf", correct: false }] },
    { id: 6, type: "SELECT", question: "'Le tréma' (ï, ë) ne demek?", options: [{ id: "a", text: "Çift nokta/Trema", correct: true }, { id: "b", text: "Şapka aksan", correct: false }, { id: "c", text: "Tiz aksan", correct: false }, { id: "d", text: "Pes aksan", correct: false }] },
    { id: 7, type: "SELECT", question: "'C cédille' (ç) ne demek?", options: [{ id: "a", text: "Kuyruklu C", correct: true }, { id: "b", text: "Büyük C", correct: false }, { id: "c", text: "Küçük C", correct: false }, { id: "d", text: "Çift C", correct: false }] },
    { id: 8, type: "SELECT", question: "Fransızcada 'OU' nasıl okunur?", options: [{ id: "a", text: "U gibi", correct: true }, { id: "b", text: "O gibi", correct: false }, { id: "c", text: "AU gibi", correct: false }, { id: "d", text: "EU gibi", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Bu kelimede aksan var", correctAnswer: "Il y a un accent dans ce mot" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Français s'écrit avec un ___ cédille.", options: [{ id: "a", text: "c", correct: true }, { id: "b", text: "s", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Attention à l'orthographe", options: [{ id: "a", text: "Yazıma dikkat", correct: true }, { id: "b", text: "Telaffuza dikkat", correct: false }, { id: "c", text: "Aksana dikkat", correct: false }, { id: "d", text: "Harfe dikkat", correct: false }] },
    { id: 12, type: "SELECT", question: "'L'orthographe' ne demek?", options: [{ id: "a", text: "Yazım/İmla", correct: true }, { id: "b", text: "Telaffuz", correct: false }, { id: "c", text: "Gramer", correct: false }, { id: "d", text: "Kelime", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Yazımı zor", correctAnswer: "L'orthographe est difficile" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Être s'écrit avec un accent ___.", options: [{ id: "a", text: "circonflexe", correct: true }, { id: "b", text: "aigu", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "EU sesi Fransızcada önemli", correctAnswer: "Le son EU est important en français" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Comment s'écrit ce mot?", options: [{ id: "a", text: "Bu kelime nasıl yazılır?", correct: true }, { id: "b", text: "Bu kelime nasıl okunur?", correct: false }, { id: "c", text: "Bu kelime ne demek?", correct: false }, { id: "d", text: "Bu kelime nedir?", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Noël s'écrit avec un ___.", options: [{ id: "a", text: "tréma", correct: true }, { id: "b", text: "accent", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Alfabe tamamlandı, tebrikler!", correctAnswer: "L'alphabet est terminé, félicitations!" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Café s'écrit avec un accent ___.", options: [{ id: "a", text: "aigu", correct: true }, { id: "b", text: "grave", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Doğru yazım için aksanlara dikkat edin", correctAnswer: "Faites attention aux accents pour la bonne orthographe" }
];

// ===== ÜNİTE 303: SAYILAR (0-20) =====
const unit303Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'Un' ne demek?", options: [{ id: "a", text: "Bir (1)", correct: true }, { id: "b", text: "İki (2)", correct: false }, { id: "c", text: "Üç (3)", correct: false }, { id: "d", text: "Sıfır (0)", correct: false }] },
    { id: 2, type: "SELECT", question: "'Deux' ne demek?", options: [{ id: "a", text: "İki (2)", correct: true }, { id: "b", text: "Bir (1)", correct: false }, { id: "c", text: "Üç (3)", correct: false }, { id: "d", text: "Dört (4)", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Trois", options: [{ id: "a", text: "Üç", correct: true }, { id: "b", text: "İki", correct: false }, { id: "c", text: "Dört", correct: false }, { id: "d", text: "Beş", correct: false }] },
    { id: 4, type: "SELECT", question: "'Quatre' ne demek?", options: [{ id: "a", text: "Dört (4)", correct: true }, { id: "b", text: "Beş (5)", correct: false }, { id: "c", text: "Altı (6)", correct: false }, { id: "d", text: "Yedi (7)", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cinq", options: [{ id: "a", text: "Beş", correct: true }, { id: "b", text: "Altı", correct: false }, { id: "c", text: "Yedi", correct: false }, { id: "d", text: "Sekiz", correct: false }] },
    { id: 6, type: "SELECT", question: "'Six' ne demek?", options: [{ id: "a", text: "Altı (6)", correct: true }, { id: "b", text: "Yedi (7)", correct: false }, { id: "c", text: "Sekiz (8)", correct: false }, { id: "d", text: "Dokuz (9)", correct: false }] },
    { id: 7, type: "SELECT", question: "'Sept' ne demek?", options: [{ id: "a", text: "Yedi (7)", correct: true }, { id: "b", text: "Altı (6)", correct: false }, { id: "c", text: "Sekiz (8)", correct: false }, { id: "d", text: "On (10)", correct: false }] },
    { id: 8, type: "SELECT", question: "'Huit' ne demek?", options: [{ id: "a", text: "Sekiz (8)", correct: true }, { id: "b", text: "Dokuz (9)", correct: false }, { id: "c", text: "On (10)", correct: false }, { id: "d", text: "Yedi (7)", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Dokuz", correctAnswer: "Neuf" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ ans.", options: [{ id: "a", text: "dix", correct: true }, { id: "b", text: "ans", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Zéro", options: [{ id: "a", text: "Sıfır", correct: true }, { id: "b", text: "Bir", correct: false }, { id: "c", text: "On", correct: false }, { id: "d", text: "Yüz", correct: false }] },
    { id: 12, type: "SELECT", question: "'Dix' ne demek?", options: [{ id: "a", text: "On (10)", correct: true }, { id: "b", text: "Yirmi (20)", correct: false }, { id: "c", text: "Dokuz (9)", correct: false }, { id: "d", text: "On bir (11)", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Kaç yaşındasınız?", correctAnswer: "Quel âge avez-vous?" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Un, deux, ___, quatre, cinq.", options: [{ id: "a", text: "trois", correct: true }, { id: "b", text: "six", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ben on yaşındayım", correctAnswer: "J'ai dix ans" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Combien?", options: [{ id: "a", text: "Ne kadar?/Kaç tane?", correct: true }, { id: "b", text: "Nerede?", correct: false }, { id: "c", text: "Ne zaman?", correct: false }, { id: "d", text: "Nasıl?", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est ___ heures.", options: [{ id: "a", text: "huit", correct: true }, { id: "b", text: "huit's", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Üç artı dört eşittir yedi", correctAnswer: "Trois plus quatre égalent sept" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Six, sept, ___, neuf, dix.", options: [{ id: "a", text: "huit", correct: true }, { id: "b", text: "cinq", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sıfırdan ona kadar sayın", correctAnswer: "Comptez de zéro à dix" }
];

const unit303Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "'Onze' ne demek?", options: [{ id: "a", text: "On bir (11)", correct: true }, { id: "b", text: "On (10)", correct: false }, { id: "c", text: "On iki (12)", correct: false }, { id: "d", text: "Yirmi (20)", correct: false }] },
    { id: 2, type: "SELECT", question: "'Douze' ne demek?", options: [{ id: "a", text: "On iki (12)", correct: true }, { id: "b", text: "On bir (11)", correct: false }, { id: "c", text: "On üç (13)", correct: false }, { id: "d", text: "Yirmi (20)", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Treize", options: [{ id: "a", text: "On üç", correct: true }, { id: "b", text: "On iki", correct: false }, { id: "c", text: "On dört", correct: false }, { id: "d", text: "On beş", correct: false }] },
    { id: 4, type: "SELECT", question: "'Quatorze' ne demek?", options: [{ id: "a", text: "On dört (14)", correct: true }, { id: "b", text: "On beş (15)", correct: false }, { id: "c", text: "On altı (16)", correct: false }, { id: "d", text: "On yedi (17)", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quinze", options: [{ id: "a", text: "On beş", correct: true }, { id: "b", text: "On altı", correct: false }, { id: "c", text: "On yedi", correct: false }, { id: "d", text: "On sekiz", correct: false }] },
    { id: 6, type: "SELECT", question: "'Seize' ne demek?", options: [{ id: "a", text: "On altı (16)", correct: true }, { id: "b", text: "On yedi (17)", correct: false }, { id: "c", text: "On sekiz (18)", correct: false }, { id: "d", text: "On beş (15)", correct: false }] },
    { id: 7, type: "SELECT", question: "'Dix-sept' ne demek?", options: [{ id: "a", text: "On yedi (17)", correct: true }, { id: "b", text: "On altı (16)", correct: false }, { id: "c", text: "On sekiz (18)", correct: false }, { id: "d", text: "On dokuz (19)", correct: false }] },
    { id: 8, type: "SELECT", question: "'Dix-huit' ne demek?", options: [{ id: "a", text: "On sekiz (18)", correct: true }, { id: "b", text: "On dokuz (19)", correct: false }, { id: "c", text: "Yirmi (20)", correct: false }, { id: "d", text: "On yedi (17)", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "On dokuz", correctAnswer: "Dix-neuf" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ ans.", options: [{ id: "a", text: "quinze", correct: true }, { id: "b", text: "cinq", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vingt", options: [{ id: "a", text: "Yirmi", correct: true }, { id: "b", text: "On", correct: false }, { id: "c", text: "Otuz", correct: false }, { id: "d", text: "Kırk", correct: false }] },
    { id: 12, type: "SELECT", question: "'Vingt' ne demek?", options: [{ id: "a", text: "Yirmi (20)", correct: true }, { id: "b", text: "On (10)", correct: false }, { id: "c", text: "Otuz (30)", correct: false }, { id: "d", text: "On dokuz (19)", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Ben on beş yaşındayım", correctAnswer: "J'ai quinze ans" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Onze, douze, ___, quatorze.", options: [{ id: "a", text: "treize", correct: true }, { id: "b", text: "quinze", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "On artı on eşittir yirmi", correctAnswer: "Dix plus dix égalent vingt" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai dix-huit ans", options: [{ id: "a", text: "On sekiz yaşındayım", correct: true }, { id: "b", text: "On yedi yaşındayım", correct: false }, { id: "c", text: "On dokuz yaşındayım", correct: false }, { id: "d", text: "Yirmi yaşındayım", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Seize, dix-sept, ___.", options: [{ id: "a", text: "dix-huit", correct: true }, { id: "b", text: "quinze", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kaç tane istiyorsunuz?", correctAnswer: "Combien en voulez-vous?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Dix-neuf, ___. C'est fini!", options: [{ id: "a", text: "vingt", correct: true }, { id: "b", text: "trente", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Ondan yirmiye kadar sayabilirim", correctAnswer: "Je peux compter de dix à vingt" }
];

const unit303Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'Le numéro' ne demek?", options: [{ id: "a", text: "Numara", correct: true }, { id: "b", text: "Sayı", correct: false }, { id: "c", text: "Harf", correct: false }, { id: "d", text: "Kelime", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le nombre' ne demek?", options: [{ id: "a", text: "Sayı", correct: true }, { id: "b", text: "Numara", correct: false }, { id: "c", text: "Harf", correct: false }, { id: "d", text: "Rakam", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quel est votre numéro de téléphone?", options: [{ id: "a", text: "Telefon numaranız ne?", correct: true }, { id: "b", text: "Ev adresiniz ne?", correct: false }, { id: "c", text: "Adınız ne?", correct: false }, { id: "d", text: "Yaşınız ne?", correct: false }] },
    { id: 4, type: "SELECT", question: "'Compter' ne demek?", options: [{ id: "a", text: "Saymak", correct: true }, { id: "b", text: "Yazmak", correct: false }, { id: "c", text: "Okumak", correct: false }, { id: "d", text: "Konuşmak", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Plus", options: [{ id: "a", text: "Artı", correct: true }, { id: "b", text: "Eksi", correct: false }, { id: "c", text: "Çarpı", correct: false }, { id: "d", text: "Bölü", correct: false }] },
    { id: 6, type: "SELECT", question: "'Moins' ne demek?", options: [{ id: "a", text: "Eksi", correct: true }, { id: "b", text: "Artı", correct: false }, { id: "c", text: "Çarpı", correct: false }, { id: "d", text: "Bölü", correct: false }] },
    { id: 7, type: "SELECT", question: "'Égal' ne demek?", options: [{ id: "a", text: "Eşittir", correct: true }, { id: "b", text: "Artı", correct: false }, { id: "c", text: "Eksi", correct: false }, { id: "d", text: "Çarpı", correct: false }] },
    { id: 8, type: "SELECT", question: "'Combien?' ne demek?", options: [{ id: "a", text: "Ne kadar?/Kaç?", correct: true }, { id: "b", text: "Nerede?", correct: false }, { id: "c", text: "Ne zaman?", correct: false }, { id: "d", text: "Nasıl?", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "İki artı üç eşittir beş", correctAnswer: "Deux plus trois égalent cinq" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Dix ___ trois égalent sept.", options: [{ id: "a", text: "moins", correct: true }, { id: "b", text: "plus", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est combien?", options: [{ id: "a", text: "Ne kadar?", correct: true }, { id: "b", text: "Nerede?", correct: false }, { id: "c", text: "Ne zaman?", correct: false }, { id: "d", text: "Kim?", correct: false }] },
    { id: 12, type: "SELECT", question: "'Le prix' ne demek?", options: [{ id: "a", text: "Fiyat", correct: true }, { id: "b", text: "Numara", correct: false }, { id: "c", text: "Sayı", correct: false }, { id: "d", text: "Adet", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Fiyat ne kadar?", correctAnswer: "Quel est le prix?" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Quatre ___ quatre égalent huit.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "moins", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "On beş eksi beş eşittir on", correctAnswer: "Quinze moins cinq égalent dix" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mon numéro est le zéro six", options: [{ id: "a", text: "Numaram sıfır altı", correct: true }, { id: "b", text: "Numaram bir altı", correct: false }, { id: "c", text: "Numaram sıfır yedi", correct: false }, { id: "d", text: "Numaram iki altı", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Ça ___ combien?", options: [{ id: "a", text: "coûte", correct: true }, { id: "b", text: "fait", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Telefon numaranızı yazabilir misiniz?", correctAnswer: "Pouvez-vous écrire votre numéro de téléphone?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Quel est votre ___?", options: [{ id: "a", text: "numéro", correct: true }, { id: "b", text: "nombre", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Birden yirmiye kadar sayın lütfen", correctAnswer: "Comptez de un à vingt s'il vous plaît" }
];

const unit303Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'L'âge' ne demek?", options: [{ id: "a", text: "Yaş", correct: true }, { id: "b", text: "Sayı", correct: false }, { id: "c", text: "Numara", correct: false }, { id: "d", text: "Yıl", correct: false }] },
    { id: 2, type: "SELECT", question: "'L'année' ne demek?", options: [{ id: "a", text: "Yıl", correct: true }, { id: "b", text: "Ay", correct: false }, { id: "c", text: "Gün", correct: false }, { id: "d", text: "Hafta", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Elle a seize ans", options: [{ id: "a", text: "O on altı yaşında", correct: true }, { id: "b", text: "O on beş yaşında", correct: false }, { id: "c", text: "O on yedi yaşında", correct: false }, { id: "d", text: "O yirmi yaşında", correct: false }] },
    { id: 4, type: "SELECT", question: "'Euro' ne demek?", options: [{ id: "a", text: "Avro (€)", correct: true }, { id: "b", text: "Dolar ($)", correct: false }, { id: "c", text: "Lira (₺)", correct: false }, { id: "d", text: "Sterlin (£)", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ça coûte quinze euros", options: [{ id: "a", text: "On beş avro", correct: true }, { id: "b", text: "On altı avro", correct: false }, { id: "c", text: "On dört avro", correct: false }, { id: "d", text: "Yirmi avro", correct: false }] },
    { id: 6, type: "SELECT", question: "'Premier' ne demek?", options: [{ id: "a", text: "Birinci/İlk", correct: true }, { id: "b", text: "İkinci", correct: false }, { id: "c", text: "Üçüncü", correct: false }, { id: "d", text: "Sonuncu", correct: false }] },
    { id: 7, type: "SELECT", question: "'Deuxième' ne demek?", options: [{ id: "a", text: "İkinci", correct: true }, { id: "b", text: "Birinci", correct: false }, { id: "c", text: "Üçüncü", correct: false }, { id: "d", text: "Dördüncü", correct: false }] },
    { id: 8, type: "SELECT", question: "'Dernier' ne demek?", options: [{ id: "a", text: "Sonuncu", correct: true }, { id: "b", text: "Birinci", correct: false }, { id: "c", text: "İkinci", correct: false }, { id: "d", text: "Ortadaki", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Bu on sekiz avro", correctAnswer: "Ça coûte dix-huit euros" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la ___ fois.", options: [{ id: "a", text: "première", correct: true }, { id: "b", text: "premier", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est la deuxième maison", options: [{ id: "a", text: "Bu ikinci ev", correct: true }, { id: "b", text: "Bu birinci ev", correct: false }, { id: "c", text: "Bu üçüncü ev", correct: false }, { id: "d", text: "Bu son ev", correct: false }] },
    { id: 12, type: "SELECT", question: "'Troisième' ne demek?", options: [{ id: "a", text: "Üçüncü", correct: true }, { id: "b", text: "İkinci", correct: false }, { id: "c", text: "Dördüncü", correct: false }, { id: "d", text: "Birinci", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Bu birinci ders", correctAnswer: "C'est la première leçon" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est le ___ de la classe.", options: [{ id: "a", text: "premier", correct: true }, { id: "b", text: "première", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Son soru", correctAnswer: "La dernière question" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai vingt euros", options: [{ id: "a", text: "Yirmi avrom var", correct: true }, { id: "b", text: "On avrom var", correct: false }, { id: "c", text: "Otuz avrom var", correct: false }, { id: "d", text: "Beş avrom var", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ma ___ visite à Paris.", options: [{ id: "a", text: "deuxième", correct: true }, { id: "b", text: "deux", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kaç yaşındasınız? Ben yirmi yaşındayım.", correctAnswer: "Quel âge avez-vous? J'ai vingt ans." },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Ça ___ combien d'euros?", options: [{ id: "a", text: "coûte", correct: true }, { id: "b", text: "fait", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Tebrikler, sayıları öğrendiniz!", correctAnswer: "Félicitations, vous avez appris les nombres!" }
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
    309: { title: "Evimiz", words: [["La maison", "Ev"], ["La chambre", "Yatak odası"], ["La cuisine", "Mutfak"], ["Le salon", "Oturma odası"], ["La salle de bain", "Banyo"], ["Le jardin", "Bahçe"], ["L'appartement", "Daire"], ["L'étage", "Kat"]], sentences: ["Ma ___ est grande.", "J'habite dans un ___."] },
    310: { title: "Sınıfta", words: [["Le professeur", "Öğretmen"], ["L'élève", "Öğrenci"], ["Le tableau", "Tahta"], ["Le livre", "Kitap"], ["Le cahier", "Defter"], ["Le stylo", "Kalem"], ["La classe", "Sınıf"], ["Le bureau", "Masa"]], sentences: ["Le ___ est devant.", "J'ai un ___."] },
    311: { title: "Vücudumuz", words: [["La tête", "Baş"], ["Les yeux", "Gözler"], ["Le nez", "Burun"], ["La bouche", "Ağız"], ["Les oreilles", "Kulaklar"], ["Les mains", "Eller"], ["Les pieds", "Ayaklar"], ["Le cœur", "Kalp"]], sentences: ["J'ai mal à la ___.", "Il/Elle a de beaux ___."] },
    312: { title: "Giysiler", words: [["La chemise", "Gömlek"], ["Le pantalon", "Pantolon"], ["La robe", "Elbise"], ["Les chaussures", "Ayakkabılar"], ["Le manteau", "Mont"], ["Le chapeau", "Şapka"], ["La jupe", "Etek"], ["Le pull", "Kazak"]], sentences: ["Je porte une ___.", "J'aime cette ___."] },
    313: { title: "Yiyecekler", words: [["Le pain", "Ekmek"], ["Le fromage", "Peynir"], ["La viande", "Et"], ["Le poisson", "Balık"], ["Les légumes", "Sebzeler"], ["Les fruits", "Meyveler"], ["Le poulet", "Tavuk"], ["L'œuf", "Yumurta"]], sentences: ["Je mange du ___.", "J'aime le ___."] },
    314: { title: "İçecekler", words: [["L'eau", "Su"], ["Le café", "Kahve"], ["Le thé", "Çay"], ["Le lait", "Süt"], ["Le jus", "Meyve suyu"], ["Le vin", "Şarap"], ["La bière", "Bira"], ["Le chocolat", "Sıcak çikolata"]], sentences: ["Je bois du ___.", "Un ___ s'il vous plaît."] },
    315: { title: "Saat Kaç?", words: [["L'heure", "Saat"], ["La minute", "Dakika"], ["Le matin", "Sabah"], ["L'après-midi", "Öğleden sonra"], ["Le soir", "Akşam"], ["La nuit", "Gece"], ["Maintenant", "Şimdi"], ["Plus tard", "Daha sonra"]], sentences: ["Il est ___ heures.", "À quelle ___ ?"] },
    316: { title: "Günlük Rutin", words: [["Se réveiller", "Uyanmak"], ["Se doucher", "Duş almak"], ["Manger", "Yemek yemek"], ["Travailler", "Çalışmak"], ["Dormir", "Uyumak"], ["Étudier", "Ders çalışmak"], ["Cuisiner", "Yemek yapmak"], ["Se reposer", "Dinlenmek"]], sentences: ["Je me ___ à 7 heures.", "Je ___ tous les jours."] },
    317: { title: "Hobiler", words: [["Lire", "Okumak"], ["Écouter de la musique", "Müzik dinlemek"], ["Regarder la télé", "TV izlemek"], ["Jouer", "Oynamak"], ["Nager", "Yüzmek"], ["Voyager", "Seyahat etmek"], ["Cuisiner", "Yemek yapmak"], ["Danser", "Dans etmek"]], sentences: ["J'aime ___.", "Mon hobby c'est ___."] },
    318: { title: "Hava Durumu", words: [["Le soleil", "Güneş"], ["La pluie", "Yağmur"], ["La neige", "Kar"], ["Le vent", "Rüzgar"], ["Chaud", "Sıcak"], ["Froid", "Soğuk"], ["Le nuage", "Bulut"], ["L'orage", "Fırtına"]], sentences: ["Il fait ___.", "Quel ___ fait-il?"] },
    319: { title: "Duygular", words: [["Content(e)", "Mutlu"], ["Triste", "Üzgün"], ["Fatigué(e)", "Yorgun"], ["Fâché(e)", "Kızgın"], ["Inquiet/Inquiète", "Endişeli"], ["Surpris(e)", "Şaşkın"], ["Nerveux/Nerveuse", "Gergin"], ["Calme", "Sakin"]], sentences: ["Je suis ___.", "Il/Elle est ___."] },
    320: { title: "Şehirde Yönler", words: [["À droite", "Sağda"], ["À gauche", "Solda"], ["Tout droit", "Düz"], ["En face", "Karşısında"], ["Près de", "Yakınında"], ["Loin de", "Uzağında"], ["La rue", "Sokak"], ["Le carrefour", "Kavşak"]], sentences: ["Tournez à ___.", "C'est ___ d'ici."] },
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

    // Ünite 302 için özel quizler
    if (unitId === 302) {
        if (quizIndex === 1) return unit302Quiz1;
        if (quizIndex === 2) return unit302Quiz2;
        if (quizIndex === 3) return unit302Quiz3;
        if (quizIndex === 4) return unit302Quiz4;
    }

    // Ünite 303 için özel quizler
    if (unitId === 303) {
        if (quizIndex === 1) return unit303Quiz1;
        if (quizIndex === 2) return unit303Quiz2;
        if (quizIndex === 3) return unit303Quiz3;
        if (quizIndex === 4) return unit303Quiz4;
    }

    // Ünite 304-307 için part2 dosyasından
    if (unitId === 304) {
        if (quizIndex === 1) return part2.unit304Quiz1;
        if (quizIndex === 2) return part2.unit304Quiz2;
        if (quizIndex === 3) return part2.unit304Quiz3;
        if (quizIndex === 4) return part2.unit304Quiz4;
    }
    if (unitId === 305) {
        if (quizIndex === 1) return part2.unit305Quiz1;
        if (quizIndex === 2) return part2.unit305Quiz2;
        if (quizIndex === 3) return part2.unit305Quiz3;
        if (quizIndex === 4) return part2.unit305Quiz4;
    }
    if (unitId === 306) {
        if (quizIndex === 1) return part2.unit306Quiz1;
        if (quizIndex === 2) return part2.unit306Quiz2;
        if (quizIndex === 3) return part2.unit306Quiz3;
        if (quizIndex === 4) return part2.unit306Quiz4;
    }
    if (unitId === 307) {
        if (quizIndex === 1) return part2.unit307Quiz1;
        if (quizIndex === 2) return part2.unit307Quiz2;
        if (quizIndex === 3) return part2.unit307Quiz3;
        if (quizIndex === 4) return part2.unit307Quiz4;
    }

    // Ünite 308-309 için part3 dosyasından
    if (unitId === 308) {
        if (quizIndex === 1) return part3.unit308Quiz1;
        if (quizIndex === 2) return part3.unit308Quiz2;
        if (quizIndex === 3) return part3.unit308Quiz3;
        if (quizIndex === 4) return part3.unit308Quiz4;
    }
    if (unitId === 309) {
        if (quizIndex === 1) return part3.unit309Quiz1;
        if (quizIndex === 2) return part3.unit309Quiz2;
        if (quizIndex === 3) return part3.unit309Quiz3;
        if (quizIndex === 4) return part3.unit309Quiz4;
    }

    // Ünite 310-311 için part4 dosyasından
    if (unitId === 310) {
        if (quizIndex === 1) return part4.unit310Quiz1;
        if (quizIndex === 2) return part4.unit310Quiz2;
        if (quizIndex === 3) return part4.unit310Quiz3;
        if (quizIndex === 4) return part4.unit310Quiz4;
    }
    if (unitId === 311) {
        if (quizIndex === 1) return part4.unit311Quiz1;
        if (quizIndex === 2) return part4.unit311Quiz2;
        if (quizIndex === 3) return part4.unit311Quiz3;
        if (quizIndex === 4) return part4.unit311Quiz4;
    }

    // Ünite 312-313 için part5 dosyasından
    if (unitId === 312) {
        if (quizIndex === 1) return part5.unit312Quiz1;
        if (quizIndex === 2) return part5.unit312Quiz2;
        if (quizIndex === 3) return part5.unit312Quiz3;
        if (quizIndex === 4) return part5.unit312Quiz4;
    }
    if (unitId === 313) {
        if (quizIndex === 1) return part5.unit313Quiz1;
        if (quizIndex === 2) return part5.unit313Quiz2;
        if (quizIndex === 3) return part5.unit313Quiz3;
        if (quizIndex === 4) return part5.unit313Quiz4;
    }

    // Ünite 314-315 için part6 dosyasından
    if (unitId === 314) {
        if (quizIndex === 1) return part6.unit314Quiz1;
        if (quizIndex === 2) return part6.unit314Quiz2;
        if (quizIndex === 3) return part6.unit314Quiz3;
        if (quizIndex === 4) return part6.unit314Quiz4;
    }
    if (unitId === 315) {
        if (quizIndex === 1) return part6.unit315Quiz1;
        if (quizIndex === 2) return part6.unit315Quiz2;
        if (quizIndex === 3) return part6.unit315Quiz3;
        if (quizIndex === 4) return part6.unit315Quiz4;
    }

    // Ünite 316-317 için part7 dosyasından
    if (unitId === 316) {
        if (quizIndex === 1) return part7.unit316Quiz1;
        if (quizIndex === 2) return part7.unit316Quiz2;
        if (quizIndex === 3) return part7.unit316Quiz3;
        if (quizIndex === 4) return part7.unit316Quiz4;
    }
    if (unitId === 317) {
        if (quizIndex === 1) return part7.unit317Quiz1;
        if (quizIndex === 2) return part7.unit317Quiz2;
        if (quizIndex === 3) return part7.unit317Quiz3;
        if (quizIndex === 4) return part7.unit317Quiz4;
    }

    // Ünite 318-319 için part8 dosyasından
    if (unitId === 318) {
        if (quizIndex === 1) return part8.unit318Quiz1;
        if (quizIndex === 2) return part8.unit318Quiz2;
        if (quizIndex === 3) return part8.unit318Quiz3;
        if (quizIndex === 4) return part8.unit318Quiz4;
    }
    if (unitId === 319) {
        if (quizIndex === 1) return part8.unit319Quiz1;
        if (quizIndex === 2) return part8.unit319Quiz2;
        if (quizIndex === 3) return part8.unit319Quiz3;
        if (quizIndex === 4) return part8.unit319Quiz4;
    }

    // Ünite 320-321 için part9 dosyasından
    if (unitId === 320) {
        if (quizIndex === 1) return part9.unit320Quiz1;
        if (quizIndex === 2) return part9.unit320Quiz2;
        if (quizIndex === 3) return part9.unit320Quiz3;
        if (quizIndex === 4) return part9.unit320Quiz4;
    }
    if (unitId === 321) {
        if (quizIndex === 1) return part9.unit321Quiz1;
        if (quizIndex === 2) return part9.unit321Quiz2;
        if (quizIndex === 3) return part9.unit321Quiz3;
        if (quizIndex === 4) return part9.unit321Quiz4;
    }

    // Ünite 322-323 için part10 dosyasından
    if (unitId === 322) {
        if (quizIndex === 1) return part10.unit322Quiz1;
        if (quizIndex === 2) return part10.unit322Quiz2;
        if (quizIndex === 3) return part10.unit322Quiz3;
        if (quizIndex === 4) return part10.unit322Quiz4;
    }
    if (unitId === 323) {
        if (quizIndex === 1) return part10.unit323Quiz1;
        if (quizIndex === 2) return part10.unit323Quiz2;
        if (quizIndex === 3) return part10.unit323Quiz3;
        if (quizIndex === 4) return part10.unit323Quiz4;
    }

    // Ünite 324-325 için part11 dosyasından
    if (unitId === 324) {
        if (quizIndex === 1) return part11.unit324Quiz1;
        if (quizIndex === 2) return part11.unit324Quiz2;
        if (quizIndex === 3) return part11.unit324Quiz3;
        if (quizIndex === 4) return part11.unit324Quiz4;
    }
    if (unitId === 325) {
        if (quizIndex === 1) return part11.unit325Quiz1;
        if (quizIndex === 2) return part11.unit325Quiz2;
        if (quizIndex === 3) return part11.unit325Quiz3;
        if (quizIndex === 4) return part11.unit325Quiz4;
    }

    // Ünite 326-327 için part12 dosyasından
    if (unitId === 326) {
        if (quizIndex === 1) return part12.unit326Quiz1;
        if (quizIndex === 2) return part12.unit326Quiz2;
        if (quizIndex === 3) return part12.unit326Quiz3;
        if (quizIndex === 4) return part12.unit326Quiz4;
    }
    if (unitId === 327) {
        if (quizIndex === 1) return part12.unit327Quiz1;
        if (quizIndex === 2) return part12.unit327Quiz2;
        if (quizIndex === 3) return part12.unit327Quiz3;
        if (quizIndex === 4) return part12.unit327Quiz4;
    }

    // Ünite 328-329 için part13 dosyasından
    if (unitId === 328) {
        if (quizIndex === 1) return part13.unit328Quiz1;
        if (quizIndex === 2) return part13.unit328Quiz2;
        if (quizIndex === 3) return part13.unit328Quiz3;
        if (quizIndex === 4) return part13.unit328Quiz4;
    }
    if (unitId === 329) {
        if (quizIndex === 1) return part13.unit329Quiz1;
        if (quizIndex === 2) return part13.unit329Quiz2;
        if (quizIndex === 3) return part13.unit329Quiz3;
        if (quizIndex === 4) return part13.unit329Quiz4;
    }

    // Ünite 330 için part14 dosyasından (Final Review)
    if (unitId === 330) {
        if (quizIndex === 1) return part14.unit330Quiz1;
        if (quizIndex === 2) return part14.unit330Quiz2;
        if (quizIndex === 3) return part14.unit330Quiz3;
        if (quizIndex === 4) return part14.unit330Quiz4;
    }

    // Diğer üniteler için dinamik üret
    return generateFrenchQuiz(unitId, quizIndex);


}
