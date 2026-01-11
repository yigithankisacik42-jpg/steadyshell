/**
 * LinguaFlow - Tüm Ünite Soruları Birleştirilmiş
 * 20 ünite × 4 quiz × 15 soru = 1200 soru
 */

// Tip tanımları
export type QuestionType = "SELECT" | "TRANSLATE" | "FILL_BLANK" | "LISTENING";

export interface QuestionOption {
    id: string;
    text: string;
    image?: string;
    correct: boolean;
}

export interface Question {
    id: number;
    type: QuestionType;
    question: string;
    options?: QuestionOption[];
    correctAnswer?: string;
    hint?: string;
    sentence?: string;
    audioText?: string;
}

// Ayrı dosyalardan import
import { unit3Quiz1, unit3Quiz2, unit3Quiz3, unit3Quiz4 } from "./questions-unit3";
import { unit4Quiz1, unit4Quiz2, unit4Quiz3, unit4Quiz4 } from "./questions-unit4";
import { unit5Quiz1, unit5Quiz2, unit5Quiz3, unit5Quiz4 } from "./questions-unit5";
import { unit6Quiz1, unit6Quiz2, unit6Quiz3, unit6Quiz4 } from "./questions-unit6";
import { unit7Quiz1, unit7Quiz2, unit7Quiz3, unit7Quiz4 } from "./questions-unit7";
import { unit8Quiz1, unit8Quiz2, unit8Quiz3, unit8Quiz4 } from "./questions-unit8";
import { unit9Quiz1, unit9Quiz2, unit9Quiz3, unit9Quiz4 } from "./questions-unit9";
import { unit10Quiz1, unit10Quiz2, unit10Quiz3, unit10Quiz4 } from "./questions-unit10";
import { unit11Quiz1, unit11Quiz2, unit11Quiz3, unit11Quiz4 } from "./questions-unit11";
import { unit12Quiz1, unit12Quiz2, unit12Quiz3, unit12Quiz4 } from "./questions-unit12";
import { unit13Quiz1, unit13Quiz2, unit13Quiz3, unit13Quiz4 } from "./questions-unit13";
import { unit14Quiz1, unit14Quiz2, unit14Quiz3, unit14Quiz4 } from "./questions-unit14";
import { unit15Quiz1, unit15Quiz2, unit15Quiz3, unit15Quiz4 } from "./questions-unit15";
import { unit16Quiz1, unit16Quiz2, unit16Quiz3, unit16Quiz4 } from "./questions-unit16";
import { unit17Quiz1, unit17Quiz2, unit17Quiz3, unit17Quiz4 } from "./questions-unit17";
import { unit18Quiz1, unit18Quiz2, unit18Quiz3, unit18Quiz4 } from "./questions-unit18";
import { unit19Quiz1, unit19Quiz2, unit19Quiz3, unit19Quiz4 } from "./questions-unit19";
import { unit20Quiz1, unit20Quiz2, unit20Quiz3, unit20Quiz4 } from "./questions-unit20";
// A1 Üniteleri 21-30 (Gramer Odaklı)
import { unit21Quiz1, unit21Quiz2, unit21Quiz3, unit21Quiz4 } from "./questions-unit21";
import { unit22Quiz1, unit22Quiz2, unit22Quiz3, unit22Quiz4 } from "./questions-unit22";
import { unit23Quiz1, unit23Quiz2, unit23Quiz3, unit23Quiz4 } from "./questions-unit23";
import { unit24Quiz1, unit24Quiz2, unit24Quiz3, unit24Quiz4 } from "./questions-unit24";
import { unit25Quiz1, unit25Quiz2, unit25Quiz3, unit25Quiz4 } from "./questions-unit25";
import { unit26Quiz1, unit26Quiz2, unit26Quiz3, unit26Quiz4 } from "./questions-unit26";
import { unit27Quiz1, unit27Quiz2, unit27Quiz3, unit27Quiz4 } from "./questions-unit27-30";
import { unit28Quiz1, unit28Quiz2, unit28Quiz3, unit28Quiz4 } from "./questions-unit28";
import { unit29Quiz1, unit29Quiz2, unit29Quiz3, unit29Quiz4 } from "./questions-unit29";
import { unit30Quiz1, unit30Quiz2, unit30Quiz3, unit30Quiz4 } from "./questions-unit30";

// ===== ÜNİTE 1: SER FİİLİ VE TANITMA (YENİ - 25 SORU) =====
const unit1Quiz1: Question[] = [
    // KOLAY (8 soru - SER çekimleri ve temel kelimeler)
    { id: 1, type: "SELECT", question: "'Soy' hangi kişiye ait?", options: [{ id: "a", text: "Sen", correct: false }, { id: "b", text: "Ben", correct: true }, { id: "c", text: "O", correct: false }, { id: "d", text: "Biz", correct: false }] },
    { id: 2, type: "SELECT", question: "'Eres' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "Sen", correct: true }, { id: "c", text: "O", correct: false }, { id: "d", text: "Onlar", correct: false }] },
    { id: 3, type: "SELECT", question: "'Es' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "O (él/ella)", correct: true }, { id: "c", text: "Biz", correct: false }, { id: "d", text: "Sen", correct: false }] },
    { id: 4, type: "SELECT", question: "'Hola' ne demek?", options: [{ id: "a", text: "Hoşça kal", correct: false }, { id: "b", text: "Merhaba", correct: true }, { id: "c", text: "Teşekkürler", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 5, type: "SELECT", question: "'Gracias' ne demek?", options: [{ id: "a", text: "Lütfen", correct: false }, { id: "b", text: "Teşekkürler", correct: true }, { id: "c", text: "Merhaba", correct: false }, { id: "d", text: "Hoşça kal", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Soy estudiante", options: [{ id: "a", text: "Ben öğrenciyim", correct: true }, { id: "b", text: "Sen öğrencisin", correct: false }, { id: "c", text: "O öğrencidir", correct: false }, { id: "d", text: "Biz öğrenciyiz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Somos' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "Biz", correct: true }, { id: "c", text: "Onlar", correct: false }, { id: "d", text: "Sen", correct: false }] },
    { id: 8, type: "SELECT", question: "'Adiós' ne demek?", options: [{ id: "a", text: "Merhaba", correct: false }, { id: "b", text: "Hoşça kal", correct: true }, { id: "c", text: "Teşekkürler", correct: false }, { id: "d", text: "Lütfen", correct: false }] },

    // ORTA (9 soru - DOĞA kuralı, cümleler ve kelimeler)
    { id: 9, type: "SELECT", question: "DOĞA kuralında 'D' neyi temsil eder?", options: [{ id: "a", text: "Durum", correct: false }, { id: "b", text: "Definición (Tanım)", correct: true }, { id: "c", text: "Duygular", correct: false }, { id: "d", text: "Dakika", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Ben öğrenciyim", correctAnswer: "Soy estudiante" },
    { id: 11, type: "SELECT", question: "'Soy de Turquía' hangi DOĞA kategorisine girer?", options: [{ id: "a", text: "D - Tanım", correct: false }, { id: "b", text: "O - Origen (Köken)", correct: true }, { id: "c", text: "Ğ - Gün", correct: false }, { id: "d", text: "A - Sıfat", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Somos de España", options: [{ id: "a", text: "Ben İspanya'danım", correct: false }, { id: "b", text: "Biz İspanya'danız", correct: true }, { id: "c", text: "Onlar İspanya'dan", correct: false }, { id: "d", text: "Sen İspanya'dansın", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "María _____ profesora.", options: [{ id: "a", text: "es", correct: true }, { id: "b", text: "soy", correct: false }] },
    { id: 14, type: "SELECT", question: "'Mucho gusto' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Memnun oldum", correct: true }, { id: "c", text: "Hoşça kal", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "O doktordur", correctAnswer: "Es médico" },
    { id: 16, type: "SELECT", question: "'Buenos días' ne demek?", options: [{ id: "a", text: "İyi geceler", correct: false }, { id: "b", text: "Günaydın", correct: true }, { id: "c", text: "İyi akşamlar", correct: false }, { id: "d", text: "Hoşça kal", correct: false }] },
    { id: 17, type: "SELECT", question: "'Mi coche es rojo' hangi DOĞA kategorisine girer?", options: [{ id: "a", text: "D - Tanım", correct: false }, { id: "b", text: "O - Origen", correct: false }, { id: "c", text: "Ğ - Gün", correct: false }, { id: "d", text: "A - Adjetivo (Kalıcı Sıfat)", correct: true }] },

    // ZOR (8 soru - karmaşık çekimler, cümleler ve çeviriler)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Biz Türkiye'deniz", correctAnswer: "Somos de Turquía" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mis padres _____ españoles.", options: [{ id: "a", text: "son", correct: true }, { id: "b", text: "somos", correct: false }] },
    { id: 20, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿De dónde eres?", options: [{ id: "a", text: "Nerelisin?", correct: true }, { id: "b", text: "Nasılsın?", correct: false }, { id: "c", text: "Adın ne?", correct: false }, { id: "d", text: "Kaç yaşındasın?", correct: false }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Onlar çok nazikler", correctAnswer: "Son muy amables" },
    { id: 22, type: "FILL_BLANK", question: "Doldur:", sentence: "Nosotros _____ amigos.", options: [{ id: "a", text: "somos", correct: true }, { id: "b", text: "son", correct: false }] },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Sen çok zekisin", correctAnswer: "Eres muy inteligente" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Merhaba, nasılsın?", correctAnswer: "Hola, ¿cómo estás?" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Adım Juan ve öğretmenim", correctAnswer: "Me llamo Juan y soy profesor" },
];



const unit1Quiz2: Question[] = [
    // KOLAY (8 soru - Meslekler ve temel kelimeler)
    { id: 1, type: "SELECT", question: "'Médico' ne demek?", options: [{ id: "a", text: "Öğretmen", correct: false }, { id: "b", text: "Doktor", correct: true }, { id: "c", text: "Avukat", correct: false }, { id: "d", text: "Mühendis", correct: false }] },
    { id: 2, type: "SELECT", question: "'Profesora' ne demek?", options: [{ id: "a", text: "Doktor", correct: false }, { id: "b", text: "Öğretmen (kadın)", correct: true }, { id: "c", text: "Hemşire", correct: false }, { id: "d", text: "Sekreter", correct: false }] },
    { id: 3, type: "SELECT", question: "'Por favor' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Lütfen", correct: true }, { id: "c", text: "Özür dilerim", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi padre es médico", options: [{ id: "a", text: "Babam doktordur", correct: true }, { id: "b", text: "Annem doktordur", correct: false }, { id: "c", text: "Babam öğretmendir", correct: false }, { id: "d", text: "Babam hastadır", correct: false }] },
    { id: 5, type: "SELECT", question: "'Abogado' ne demek?", options: [{ id: "a", text: "Doktor", correct: false }, { id: "b", text: "Avukat", correct: true }, { id: "c", text: "Öğretmen", correct: false }, { id: "d", text: "Mühendis", correct: false }] },
    { id: 6, type: "SELECT", question: "'De nada' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Bir şey değil", correct: true }, { id: "c", text: "Merhaba", correct: false }, { id: "d", text: "Hoşça kal", correct: false }] },
    { id: 7, type: "SELECT", question: "'Enfermera' ne demek?", options: [{ id: "a", text: "Öğretmen", correct: false }, { id: "b", text: "Hemşire", correct: true }, { id: "c", text: "Doktor", correct: false }, { id: "d", text: "Sekreter", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ella es abogada", options: [{ id: "a", text: "O avukattır (kadın)", correct: true }, { id: "b", text: "O doktordur", correct: false }, { id: "c", text: "O öğrencidir", correct: false }, { id: "d", text: "O hemşiredir", correct: false }] },

    // ORTA (9 soru - Köken, sahiplik ve cümleler)
    { id: 9, type: "SELECT", question: "'Soy de Madrid' ne demek?", options: [{ id: "a", text: "Madrid'deyim", correct: false }, { id: "b", text: "Madrid'liyim", correct: true }, { id: "c", text: "Madrid güzel", correct: false }, { id: "d", text: "Madrid'e gidiyorum", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Babam öğretmendir", correctAnswer: "Mi padre es profesor" },
    { id: 11, type: "SELECT", question: "'El libro es de María' ne demek?", options: [{ id: "a", text: "María kitap okuyor", correct: false }, { id: "b", text: "Kitap María'nındır", correct: true }, { id: "c", text: "María kitapçıda", correct: false }, { id: "d", text: "María kitap yazdı", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿De quién es esto?", options: [{ id: "a", text: "Bu kimin?", correct: true }, { id: "b", text: "Bu nedir?", correct: false }, { id: "c", text: "Bu nerede?", correct: false }, { id: "d", text: "Bu ne zaman?", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El coche _____ de mi hermano.", options: [{ id: "a", text: "es", correct: true }, { id: "b", text: "está", correct: false }] },
    { id: 14, type: "SELECT", question: "'Buenas tardes' ne demek?", options: [{ id: "a", text: "Günaydın", correct: false }, { id: "b", text: "Tünaydın/İyi öğleden sonra", correct: true }, { id: "c", text: "İyi geceler", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Kız kardeşim hemşiredir", correctAnswer: "Mi hermana es enfermera" },
    { id: 16, type: "SELECT", question: "'La mesa es de madera' ne demek?", options: [{ id: "a", text: "Masa büyüktür", correct: false }, { id: "b", text: "Masa ahşaptandır", correct: true }, { id: "c", text: "Masa yenidir", correct: false }, { id: "d", text: "Masa burada", correct: false }] },
    { id: 17, type: "SELECT", question: "'Amigo' ne demek?", options: [{ id: "a", text: "Düşman", correct: false }, { id: "b", text: "Arkadaş", correct: true }, { id: "c", text: "Komşu", correct: false }, { id: "d", text: "Öğretmen", correct: false }] },

    // ZOR (8 soru - karmaşık cümleler ve çeviriler)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Annem hemşiredir ve babam doktordur", correctAnswer: "Mi madre es enfermera y mi padre es médico" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "¿De _____ eres? - Soy de Turquía.", options: [{ id: "a", text: "dónde", correct: true }, { id: "b", text: "qué", correct: false }] },
    { id: 20, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi hermana es profesora en Madrid", options: [{ id: "a", text: "Kız kardeşim Madrid'de öğretmendir", correct: true }, { id: "b", text: "Kız kardeşim Madrid'lidir", correct: false }, { id: "c", text: "Kız kardeşim Madrid'e gidiyor", correct: false }, { id: "d", text: "Kız kardeşim Madrid'i seviyor", correct: false }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Araba ağabeyimindir", correctAnswer: "El coche es de mi hermano" },
    { id: 22, type: "FILL_BLANK", question: "Doldur:", sentence: "Ellos _____ de Argentina.", options: [{ id: "a", text: "son", correct: true }, { id: "b", text: "es", correct: false }] },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Ben mühendisim ve İstanbul'danım", correctAnswer: "Soy ingeniero y soy de Estambul" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Çok teşekkürler, memnun oldum", correctAnswer: "Muchas gracias, mucho gusto" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Arkadaşım avukat ve çok çalışkan", correctAnswer: "Mi amigo es abogado y es muy trabajador" },
];



const unit1Quiz3: Question[] = [
    // KOLAY (8 soru - Saat, Gün ve temel kelimeler)
    { id: 1, type: "SELECT", question: "'¿Qué hora es?' ne demek?", options: [{ id: "a", text: "Bugün ne gün?", correct: false }, { id: "b", text: "Saat kaç?", correct: true }, { id: "c", text: "Kaç tane?", correct: false }, { id: "d", text: "Ne zaman?", correct: false }] },
    { id: 2, type: "SELECT", question: "Saat için hangi fiil kullanılır?", options: [{ id: "a", text: "ESTAR", correct: false }, { id: "b", text: "SER", correct: true }, { id: "c", text: "TENER", correct: false }, { id: "d", text: "HACER", correct: false }] },
    { id: 3, type: "SELECT", question: "'Son las tres' ne demek?", options: [{ id: "a", text: "Saat bir", correct: false }, { id: "b", text: "Saat üç", correct: true }, { id: "c", text: "Üç tane", correct: false }, { id: "d", text: "Üç kişiyiz", correct: false }] },
    { id: 4, type: "SELECT", question: "'Buenas noches' ne demek?", options: [{ id: "a", text: "Günaydın", correct: false }, { id: "b", text: "İyi geceler", correct: true }, { id: "c", text: "Tünaydın", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Es la una", options: [{ id: "a", text: "Saat bir", correct: true }, { id: "b", text: "Saat on bir", correct: false }, { id: "c", text: "Birinciyim", correct: false }, { id: "d", text: "Biriz", correct: false }] },
    { id: 6, type: "SELECT", question: "'Hoy es lunes' ne demek?", options: [{ id: "a", text: "Bugün pazartesi", correct: true }, { id: "b", text: "Bugün salı", correct: false }, { id: "c", text: "Bugün pazar", correct: false }, { id: "d", text: "Dün pazartesiydi", correct: false }] },
    { id: 7, type: "SELECT", question: "'Hasta luego' ne demek?", options: [{ id: "a", text: "Günaydın", correct: false }, { id: "b", text: "Görüşürüz", correct: true }, { id: "c", text: "İyi geceler", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Hoy es viernes", options: [{ id: "a", text: "Bugün cuma", correct: true }, { id: "b", text: "Bugün cumartesi", correct: false }, { id: "c", text: "Bugün perşembe", correct: false }, { id: "d", text: "Yarın cuma", correct: false }] },

    // ORTA (9 soru - Kalıcı sıfatlar ve cümleler)
    { id: 9, type: "SELECT", question: "'El cielo es azul' hangi DOĞA kategorisi?", options: [{ id: "a", text: "D - Tanım", correct: false }, { id: "b", text: "O - Köken", correct: false }, { id: "c", text: "Ğ - Gün", correct: false }, { id: "d", text: "A - Kalıcı Sıfat", correct: true }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Saat beş", correctAnswer: "Son las cinco" },
    { id: 11, type: "SELECT", question: "'María es alta' ne demek?", options: [{ id: "a", text: "María yorgun", correct: false }, { id: "b", text: "María uzundur", correct: true }, { id: "c", text: "María burada", correct: false }, { id: "d", text: "María geliyor", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Qué día es hoy?", options: [{ id: "a", text: "Bugün günlerden ne?", correct: true }, { id: "b", text: "Saat kaç?", correct: false }, { id: "c", text: "Bugün nasıl?", correct: false }, { id: "d", text: "Bugün neredesin?", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ las ocho de la mañana.", options: [{ id: "a", text: "Son", correct: true }, { id: "b", text: "Es", correct: false }] },
    { id: 14, type: "SELECT", question: "'Hasta mañana' ne demek?", options: [{ id: "a", text: "Görüşürüz", correct: false }, { id: "b", text: "Yarın görüşürüz", correct: true }, { id: "c", text: "İyi geceler", correct: false }, { id: "d", text: "Güle güle", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Arabam kırmızıdır", correctAnswer: "Mi coche es rojo" },
    { id: 16, type: "SELECT", question: "'Alto' ve 'Rojo' gibi sıfatlar neden SER ile kullanılır?", options: [{ id: "a", text: "Geçici özellikler", correct: false }, { id: "b", text: "Kalıcı özellikler", correct: true }, { id: "c", text: "Konum bildirirler", correct: false }, { id: "d", text: "Duygu bildirirler", correct: false }] },
    { id: 17, type: "SELECT", question: "'Señor' ne demek?", options: [{ id: "a", text: "Bayan", correct: false }, { id: "b", text: "Bay", correct: true }, { id: "c", text: "Çocuk", correct: false }, { id: "d", text: "Arkadaş", correct: false }] },

    // ZOR (8 soru - karmaşık cümleler ve çeviriler)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bugün pazartesi ve saat dokuz", correctAnswer: "Hoy es lunes y son las nueve" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El libro _____ interesante.", options: [{ id: "a", text: "es", correct: true }, { id: "b", text: "está", correct: false }] },
    { id: 20, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Son las diez de la noche", options: [{ id: "a", text: "Akşam saat on", correct: true }, { id: "b", text: "Sabah saat on", correct: false }, { id: "c", text: "Saat on iki", correct: false }, { id: "d", text: "On gece", correct: false }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Gökyüzü mavidir", correctAnswer: "El cielo es azul" },
    { id: 22, type: "FILL_BLANK", question: "Doldur:", sentence: "Hoy _____ miércoles.", options: [{ id: "a", text: "es", correct: true }, { id: "b", text: "son", correct: false }] },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Saat bir ve bugün cumartesi", correctAnswer: "Es la una y hoy es sábado" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "İyi geceler, yarın görüşürüz", correctAnswer: "Buenas noches, hasta mañana" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Kitap çok ilginç ve yeni", correctAnswer: "El libro es muy interesante y es nuevo" },
];



const unit1Quiz4: Question[] = [
    // KOLAY (8 soru - Tanışma ve SER ile kendinizi tanıtma)
    { id: 1, type: "SELECT", question: "'¿Cómo te llamas?' ne demek?", options: [{ id: "a", text: "Nasılsın?", correct: false }, { id: "b", text: "Adın ne?", correct: true }, { id: "c", text: "Nerelisin?", correct: false }, { id: "d", text: "Kaç yaşındasın?", correct: false }] },
    { id: 2, type: "SELECT", question: "'Me llamo María' ne demek?", options: [{ id: "a", text: "María'yı arıyorum", correct: false }, { id: "b", text: "Adım María", correct: true }, { id: "c", text: "María benim", correct: false }, { id: "d", text: "María'yı seviyorum", correct: false }] },
    { id: 3, type: "SELECT", question: "'Encantado' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Memnun oldum (erkek)", correct: true }, { id: "c", text: "Hoşça kal", correct: false }, { id: "d", text: "Rica ederim", correct: false }] },
    { id: 4, type: "SELECT", question: "'Señora' ne demek?", options: [{ id: "a", text: "Bay", correct: false }, { id: "b", text: "Bayan", correct: true }, { id: "c", text: "Kız", correct: false }, { id: "d", text: "Erkek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Soy Juan, soy de Madrid", options: [{ id: "a", text: "Ben Juan, Madrid'liyim", correct: true }, { id: "b", text: "Ben Juan, Madrid'deyim", correct: false }, { id: "c", text: "Ben Juan, Madrid'e gidiyorum", correct: false }, { id: "d", text: "Ben Juan, Madrid güzeldir", correct: false }] },
    { id: 6, type: "SELECT", question: "Olay yeri için hangi fiil kullanılır?", options: [{ id: "a", text: "ESTAR", correct: false }, { id: "b", text: "SER", correct: true }, { id: "c", text: "TENER", correct: false }, { id: "d", text: "IR", correct: false }] },
    { id: 7, type: "SELECT", question: "'Bien' ne demek?", options: [{ id: "a", text: "Kötü", correct: false }, { id: "b", text: "İyi", correct: true }, { id: "c", text: "Normal", correct: false }, { id: "d", text: "Harika", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mucho gusto, soy Ana", options: [{ id: "a", text: "Memnun oldum, ben Ana", correct: true }, { id: "b", text: "Teşekkürler, ben Ana", correct: false }, { id: "c", text: "Merhaba, Ana nerede?", correct: false }, { id: "d", text: "Hoşgeldin Ana", correct: false }] },

    // ORTA (9 soru - SER vs ESTAR ipuçları ve karşılaştırma)
    { id: 9, type: "SELECT", question: "Hangisi DOĞRU? (Meslek)", options: [{ id: "a", text: "Estoy médico", correct: false }, { id: "b", text: "Soy médico", correct: true }, { id: "c", text: "Tengo médico", correct: false }, { id: "d", text: "Hago médico", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Memnun oldum, ben María", correctAnswer: "Mucho gusto, soy María" },
    { id: 11, type: "SELECT", question: "Hangisi DOĞRU? (Köken)", options: [{ id: "a", text: "Estoy de Turquía", correct: false }, { id: "b", text: "Soy de Turquía", correct: true }, { id: "c", text: "Tengo de Turquía", correct: false }, { id: "d", text: "Voy de Turquía", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El concierto es en el estadio", options: [{ id: "a", text: "Konser stadyumdadır", correct: true }, { id: "b", text: "Konser stadyuma gidiyor", correct: false }, { id: "c", text: "Stadyum konsere yakın", correct: false }, { id: "d", text: "Stadyumda konser var mı?", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "La reunión _____ en la oficina.", options: [{ id: "a", text: "es", correct: true }, { id: "b", text: "está", correct: false }] },
    { id: 14, type: "SELECT", question: "'Mal' ne demek?", options: [{ id: "a", text: "İyi", correct: false }, { id: "b", text: "Kötü", correct: true }, { id: "c", text: "Normal", correct: false }, { id: "d", text: "Harika", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Toplantı ofistedir", correctAnswer: "La reunión es en la oficina" },
    { id: 16, type: "SELECT", question: "'Soy alto' neden 'Estoy alto' değil?", options: [{ id: "a", text: "Boy geçici", correct: false }, { id: "b", text: "Boy kalıcı bir özellik", correct: true }, { id: "c", text: "Zaman ifadesi", correct: false }, { id: "d", text: "Konum ifadesi", correct: false }] },
    { id: 17, type: "SELECT", question: "'¿Y tú?' ne demek?", options: [{ id: "a", text: "Ve o?", correct: false }, { id: "b", text: "Ve sen?", correct: true }, { id: "c", text: "Ve biz?", correct: false }, { id: "d", text: "Ve onlar?", correct: false }] },

    // ZOR (8 soru - tam kapsamlı SER kullanımı)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Ben María, öğrenciyim ve İstanbul'danım", correctAnswer: "Soy María, soy estudiante y soy de Estambul" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi padre _____ ingeniero.", options: [{ id: "a", text: "es", correct: true }, { id: "b", text: "está", correct: false }] },
    { id: 20, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿De dónde sois vosotros?", options: [{ id: "a", text: "Siz nerelisiniz?", correct: true }, { id: "b", text: "Siz neredesiniz?", correct: false }, { id: "c", text: "Siz ne yapıyorsunuz?", correct: false }, { id: "d", text: "Siz nasılsınız?", correct: false }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Parti benim evimde", correctAnswer: "La fiesta es en mi casa" },
    { id: 22, type: "FILL_BLANK", question: "Doldur:", sentence: "Nosotros _____ estudiantes de español.", options: [{ id: "a", text: "somos", correct: true }, { id: "b", text: "estamos", correct: false }] },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Adın ne? - Adım Carlos", correctAnswer: "¿Cómo te llamas? - Me llamo Carlos" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Çok iyiyim, teşekkürler, ya sen?", correctAnswer: "Muy bien, gracias, ¿y tú?" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "O çok akıllı ve çalışkan öğretmendir", correctAnswer: "Es un profesor muy inteligente y trabajador" },
];



// ===== ÜNİTE 2: SAYILAR 1-20 (Inline) =====
const unit2Quiz1: Question[] = [
    // KOLAY (8 soru - 1-10 arası temel sayılar)
    { id: 1, type: "SELECT", question: "'Uno' kaç?", options: [{ id: "a", text: "0", correct: false }, { id: "b", text: "1", correct: true }, { id: "c", text: "2", correct: false }, { id: "d", text: "3", correct: false }] },
    { id: 2, type: "SELECT", question: "'Dos' kaç?", options: [{ id: "a", text: "1", correct: false }, { id: "b", text: "2", correct: true }, { id: "c", text: "3", correct: false }, { id: "d", text: "4", correct: false }] },
    { id: 3, type: "SELECT", question: "'Tres' kaç?", options: [{ id: "a", text: "2", correct: false }, { id: "b", text: "3", correct: true }, { id: "c", text: "4", correct: false }, { id: "d", text: "5", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cinco' kaç?", options: [{ id: "a", text: "4", correct: false }, { id: "b", text: "5", correct: true }, { id: "c", text: "6", correct: false }, { id: "d", text: "7", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Cuatro", options: [{ id: "a", text: "3", correct: false }, { id: "b", text: "4", correct: true }, { id: "c", text: "5", correct: false }, { id: "d", text: "6", correct: false }] },
    { id: 6, type: "SELECT", question: "'Diez' kaç?", options: [{ id: "a", text: "5", correct: false }, { id: "b", text: "10", correct: true }, { id: "c", text: "15", correct: false }, { id: "d", text: "20", correct: false }] },
    { id: 7, type: "SELECT", question: "'Ocho' kaç?", options: [{ id: "a", text: "6", correct: false }, { id: "b", text: "8", correct: true }, { id: "c", text: "9", correct: false }, { id: "d", text: "10", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Siete", options: [{ id: "a", text: "6", correct: false }, { id: "b", text: "7", correct: true }, { id: "c", text: "8", correct: false }, { id: "d", text: "9", correct: false }] },

    // ORTA (9 soru - 10-20 arası ve sayı dizileri)
    { id: 9, type: "SELECT", question: "'Quince' kaç?", options: [{ id: "a", text: "14", correct: false }, { id: "b", text: "15", correct: true }, { id: "c", text: "16", correct: false }, { id: "d", text: "50", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "7", correctAnswer: "Siete" },
    { id: 11, type: "SELECT", question: "'Veinte' kaç?", options: [{ id: "a", text: "12", correct: false }, { id: "b", text: "20", correct: true }, { id: "c", text: "22", correct: false }, { id: "d", text: "2", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Quince", options: [{ id: "a", text: "14", correct: false }, { id: "b", text: "15", correct: true }, { id: "c", text: "16", correct: false }, { id: "d", text: "50", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Uno, dos, _____", options: [{ id: "a", text: "cuatro", correct: false }, { id: "b", text: "tres", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "12", correctAnswer: "Doce" },
    { id: 15, type: "SELECT", question: "'Nueve' kaç?", options: [{ id: "a", text: "8", correct: false }, { id: "b", text: "9", correct: true }, { id: "c", text: "10", correct: false }, { id: "d", text: "19", correct: false }] },
    { id: 16, type: "SELECT", question: "'Once' kaç?", options: [{ id: "a", text: "10", correct: false }, { id: "b", text: "11", correct: true }, { id: "c", text: "12", correct: false }, { id: "d", text: "1", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Trece", options: [{ id: "a", text: "3", correct: false }, { id: "b", text: "13", correct: true }, { id: "c", text: "30", correct: false }, { id: "d", text: "33", correct: false }] },

    // ZOR (8 soru - karmaşık sayılar ve çeviriler)
    { id: 18, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "18", correctAnswer: "Dieciocho" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Diez, once, _____", options: [{ id: "a", text: "doce", correct: true }, { id: "b", text: "trece", correct: false }] },
    { id: 20, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Dieciocho", options: [{ id: "a", text: "16", correct: false }, { id: "b", text: "18", correct: true }, { id: "c", text: "19", correct: false }, { id: "d", text: "8", correct: false }] },
    { id: 21, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "20", correctAnswer: "Veinte" },
    { id: 22, type: "FILL_BLANK", question: "Doldur:", sentence: "Diecisiete, dieciocho, _____", options: [{ id: "a", text: "veinte", correct: false }, { id: "b", text: "diecinueve", correct: true }] },
    { id: 23, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "16", correctAnswer: "Dieciséis" },
    { id: 24, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "14", correctAnswer: "Catorce" },
    { id: 25, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "17", correctAnswer: "Diecisiete" },
];


const unit2Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Seis' kaç?", options: [{ id: "a", text: "5", correct: false }, { id: "b", text: "6", correct: true }, { id: "c", text: "7", correct: false }, { id: "d", text: "8", correct: false }] },
    { id: 2, type: "SELECT", question: "'Siete' kaç?", options: [{ id: "a", text: "6", correct: false }, { id: "b", text: "7", correct: true }, { id: "c", text: "8", correct: false }, { id: "d", text: "9", correct: false }] },
    { id: 3, type: "SELECT", question: "'Once' kaç?", options: [{ id: "a", text: "10", correct: false }, { id: "b", text: "11", correct: true }, { id: "c", text: "12", correct: false }, { id: "d", text: "1", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cero' kaç?", options: [{ id: "a", text: "0", correct: true }, { id: "b", text: "1", correct: false }, { id: "c", text: "10", correct: false }, { id: "d", text: "100", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Trece", options: [{ id: "a", text: "3", correct: false }, { id: "b", text: "13", correct: true }, { id: "c", text: "30", correct: false }, { id: "d", text: "33", correct: false }] },
    { id: 6, type: "SELECT", question: "'Doce' kaç?", options: [{ id: "a", text: "10", correct: false }, { id: "b", text: "12", correct: true }, { id: "c", text: "2", correct: false }, { id: "d", text: "20", correct: false }] },
    { id: 7, type: "SELECT", question: "'Nueve' kaç?", options: [{ id: "a", text: "8", correct: false }, { id: "b", text: "9", correct: true }, { id: "c", text: "10", correct: false }, { id: "d", text: "19", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Veinte", options: [{ id: "a", text: "12", correct: false }, { id: "b", text: "20", correct: true }, { id: "c", text: "22", correct: false }, { id: "d", text: "2", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Catorce' kaç?", options: [{ id: "a", text: "13", correct: false }, { id: "b", text: "14", correct: true }, { id: "c", text: "15", correct: false }, { id: "d", text: "4", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "11", correctAnswer: "Once" },
    { id: 11, type: "SELECT", question: "'Dieciséis' kaç?", options: [{ id: "a", text: "15", correct: false }, { id: "b", text: "16", correct: true }, { id: "c", text: "17", correct: false }, { id: "d", text: "6", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Diecinueve", options: [{ id: "a", text: "17", correct: false }, { id: "b", text: "19", correct: true }, { id: "c", text: "18", correct: false }, { id: "d", text: "9", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Cuatro, cinco, _____", options: [{ id: "a", text: "seis", correct: true }, { id: "b", text: "siete", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "14", correctAnswer: "Catorce" },
    { id: 15, type: "SELECT", question: "'Trece' kaç?", options: [{ id: "a", text: "3", correct: false }, { id: "b", text: "13", correct: true }, { id: "c", text: "30", correct: false }, { id: "d", text: "33", correct: false }] },
    { id: 16, type: "SELECT", question: "'Quince' kaç?", options: [{ id: "a", text: "14", correct: false }, { id: "b", text: "15", correct: true }, { id: "c", text: "16", correct: false }, { id: "d", text: "5", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Catorce", options: [{ id: "a", text: "4", correct: false }, { id: "b", text: "14", correct: true }, { id: "c", text: "40", correct: false }, { id: "d", text: "15", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "17", correctAnswer: "Diecisiete" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Trece, catorce, _____", options: [{ id: "a", text: "quince", correct: true }, { id: "b", text: "dieciséis", correct: false }] },
    { id: 20, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Diecisiete", options: [{ id: "a", text: "16", correct: false }, { id: "b", text: "17", correct: true }, { id: "c", text: "7", correct: false }, { id: "d", text: "70", correct: false }] },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Diecisiete, _____, diecinueve", options: [{ id: "a", text: "dieciséis", correct: false }, { id: "b", text: "dieciocho", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "19", correctAnswer: "Diecinueve" },
    { id: 23, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "13", correctAnswer: "Trece" },
    { id: 24, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "15", correctAnswer: "Quince" },
    { id: 25, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "10", correctAnswer: "Diez" },
];


const unit2Quiz3: Question[] = [
    // KOLAY (8 soru - sayı kelimeleri Türkçe karşılığı)
    { id: 1, type: "SELECT", question: "'Uno' ne demek?", options: [{ id: "a", text: "Sıfır", correct: false }, { id: "b", text: "Bir", correct: true }, { id: "c", text: "İki", correct: false }, { id: "d", text: "Üç", correct: false }] },
    { id: 2, type: "SELECT", question: "'Dos' ne demek?", options: [{ id: "a", text: "Bir", correct: false }, { id: "b", text: "İki", correct: true }, { id: "c", text: "Üç", correct: false }, { id: "d", text: "Dört", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cinco' ne demek?", options: [{ id: "a", text: "Dört", correct: false }, { id: "b", text: "Beş", correct: true }, { id: "c", text: "Altı", correct: false }, { id: "d", text: "Yedi", correct: false }] },
    { id: 4, type: "SELECT", question: "'Diez' ne demek?", options: [{ id: "a", text: "Bir", correct: false }, { id: "b", text: "On", correct: true }, { id: "c", text: "Yüz", correct: false }, { id: "d", text: "Bin", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Nueve", options: [{ id: "a", text: "6", correct: false }, { id: "b", text: "9", correct: true }, { id: "c", text: "19", correct: false }, { id: "d", text: "90", correct: false }] },
    { id: 6, type: "SELECT", question: "'Ocho' ne demek?", options: [{ id: "a", text: "Yedi", correct: false }, { id: "b", text: "Sekiz", correct: true }, { id: "c", text: "Dokuz", correct: false }, { id: "d", text: "On", correct: false }] },
    { id: 7, type: "SELECT", question: "'Seis' ne demek?", options: [{ id: "a", text: "Beş", correct: false }, { id: "b", text: "Altı", correct: true }, { id: "c", text: "Yedi", correct: false }, { id: "d", text: "Sekiz", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Cuatro", options: [{ id: "a", text: "14", correct: false }, { id: "b", text: "4", correct: true }, { id: "c", text: "40", correct: false }, { id: "d", text: "44", correct: false }] },

    // ORTA (9 soru - basit işlemler ve sıralama)
    { id: 9, type: "SELECT", question: "5 + 7 = ?", options: [{ id: "a", text: "Once", correct: false }, { id: "b", text: "Doce", correct: true }, { id: "c", text: "Trece", correct: false }, { id: "d", text: "Catorce", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "15", correctAnswer: "Quince" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Ocho, nueve, _____", options: [{ id: "a", text: "diez", correct: true }, { id: "b", text: "once", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Once", options: [{ id: "a", text: "1", correct: false }, { id: "b", text: "11", correct: true }, { id: "c", text: "21", correct: false }, { id: "d", text: "10", correct: false }] },
    { id: 13, type: "SELECT", question: "10 + 6 = ?", options: [{ id: "a", text: "Quince", correct: false }, { id: "b", text: "Dieciséis", correct: true }, { id: "c", text: "Diecisiete", correct: false }, { id: "d", text: "Catorce", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "19", correctAnswer: "Diecinueve" },
    { id: 15, type: "SELECT", question: "8 - 3 = ?", options: [{ id: "a", text: "Cuatro", correct: false }, { id: "b", text: "Cinco", correct: true }, { id: "c", text: "Seis", correct: false }, { id: "d", text: "Tres", correct: false }] },
    { id: 16, type: "SELECT", question: "7 + 6 = ?", options: [{ id: "a", text: "Doce", correct: false }, { id: "b", text: "Trece", correct: true }, { id: "c", text: "Catorce", correct: false }, { id: "d", text: "Once", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Dieciocho", options: [{ id: "a", text: "8", correct: false }, { id: "b", text: "18", correct: true }, { id: "c", text: "80", correct: false }, { id: "d", text: "17", correct: false }] },

    // ZOR (8 soru - cümle içinde sayı kullanımı)
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ años tengo. (18)", options: [{ id: "a", text: "Diecisiete", correct: false }, { id: "b", text: "Dieciocho", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Beş elmam var", correctAnswer: "Tengo cinco manzanas" },
    { id: 20, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Diecisiete", options: [{ id: "a", text: "16", correct: false }, { id: "b", text: "17", correct: true }, { id: "c", text: "7", correct: false }, { id: "d", text: "70", correct: false }] },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "_____, veinte (19)", options: [{ id: "a", text: "Dieciocho", correct: false }, { id: "b", text: "Diecinueve", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "On iki kitabım var", correctAnswer: "Tengo doce libros" },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Üç kedi ve iki köpek", correctAnswer: "Tres gatos y dos perros" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Yedi arkadaşım var", correctAnswer: "Tengo siete amigos" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Dört kalem ve beş defter", correctAnswer: "Cuatro lápices y cinco cuadernos" },
];


const unit2Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Tengo' ne demek?", options: [{ id: "a", text: "İstiyorum", correct: false }, { id: "b", text: "Var/-im/Sahibim", correct: true }, { id: "c", text: "Gidiyorum", correct: false }, { id: "d", text: "Seviyorum", correct: false }] },
    { id: 2, type: "SELECT", question: "'Años' ne demek?", options: [{ id: "a", text: "Günler", correct: false }, { id: "b", text: "Yıllar/Yaş", correct: true }, { id: "c", text: "Aylar", correct: false }, { id: "d", text: "Saatler", correct: false }] },
    { id: 3, type: "SELECT", question: "'Euro' ne demek?", options: [{ id: "a", text: "Dolar", correct: false }, { id: "b", text: "Avro/Euro", correct: true }, { id: "c", text: "Lira", correct: false }, { id: "d", text: "Pound", correct: false }] },
    { id: 4, type: "SELECT", question: "'Manzana' ne demek?", options: [{ id: "a", text: "Portakal", correct: false }, { id: "b", text: "Elma", correct: true }, { id: "c", text: "Muz", correct: false }, { id: "d", text: "Üzüm", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Diez euros", options: [{ id: "a", text: "1€", correct: false }, { id: "b", text: "10€", correct: true }, { id: "c", text: "11€", correct: false }, { id: "d", text: "12€", correct: false }] },
    { id: 6, type: "SELECT", question: "'Cuesta' ne demek?", options: [{ id: "a", text: "İstiyorum", correct: false }, { id: "b", text: "Maliyeti/Fiyatı", correct: true }, { id: "c", text: "Var", correct: false }, { id: "d", text: "Seviyorum", correct: false }] },
    { id: 7, type: "SELECT", question: "15 - 8 = ?", options: [{ id: "a", text: "Seis", correct: false }, { id: "b", text: "Siete", correct: true }, { id: "c", text: "Ocho", correct: false }, { id: "d", text: "Nueve", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Catorce euros", options: [{ id: "a", text: "13€", correct: false }, { id: "b", text: "14€", correct: true }, { id: "c", text: "15€", correct: false }, { id: "d", text: "4€", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'¿Cuántos años tienes?' ne demek?", options: [{ id: "a", text: "Ne kadar?", correct: false }, { id: "b", text: "Kaç yaşındasın?", correct: true }, { id: "c", text: "Kaç tane?", correct: false }, { id: "d", text: "Ne zaman?", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Üç elma lütfen.", correctAnswer: "Tres manzanas, por favor" },
    { id: 11, type: "SELECT", question: "6 x 2 = ?", options: [{ id: "a", text: "Once", correct: false }, { id: "b", text: "Doce", correct: true }, { id: "c", text: "Trece", correct: false }, { id: "d", text: "Diez", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Dieciséis personas", options: [{ id: "a", text: "15 kişi", correct: false }, { id: "b", text: "16 kişi", correct: true }, { id: "c", text: "17 kişi", correct: false }, { id: "d", text: "6 kişi", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Quiero _____ manzanas. (7)", options: [{ id: "a", text: "seis", correct: false }, { id: "b", text: "siete", correct: true }] },
    { id: 14, type: "SELECT", question: "20 - 12 = ?", options: [{ id: "a", text: "Siete", correct: false }, { id: "b", text: "Ocho", correct: true }, { id: "c", text: "Nueve", correct: false }, { id: "d", text: "Seis", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "İki kahve lütfen.", correctAnswer: "Dos cafés, por favor" },
    { id: 16, type: "SELECT", question: "'Libro' ne demek?", options: [{ id: "a", text: "Kalem", correct: false }, { id: "b", text: "Kitap", correct: true }, { id: "c", text: "Defter", correct: false }, { id: "d", text: "Silgi", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Diecinueve libros", options: [{ id: "a", text: "9 kitap", correct: false }, { id: "b", text: "19 kitap", correct: true }, { id: "c", text: "17 kitap", correct: false }, { id: "d", text: "18 kitap", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "15 yaşındayım.", correctAnswer: "Tengo quince años" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo _____ años. (20)", options: [{ id: "a", text: "diecinueve", correct: false }, { id: "b", text: "veinte", correct: true }] },
    { id: 20, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Veinte años", options: [{ id: "a", text: "12 yaşında", correct: false }, { id: "b", text: "20 yaşında", correct: true }, { id: "c", text: "22 yaşında", correct: false }, { id: "d", text: "2 yaşında", correct: false }] },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Cuesta _____ euros. (19)", options: [{ id: "a", text: "dieciocho", correct: false }, { id: "b", text: "diecinueve", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Bu kaça?", correctAnswer: "¿Cuánto cuesta esto?" },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "On sekiz yaşındayım.", correctAnswer: "Tengo dieciocho años" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Sekiz kitap ve altı kalem var", correctAnswer: "Hay ocho libros y seis lápices" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "On üç öğrenci sınıftadır", correctAnswer: "Hay trece estudiantes en la clase" },
];


// Ünite 9+ için dinamik oluşturucu - GENİŞLETİLMİŞ KELİME LİSTELERİ
function generateQuiz(unitId: number, quizIndex: number, topic: string): Question[] {
    const topics: { [key: number]: { words: string[][], sentences: string[] } } = {
        // A1 Üniteleri (9-20) - Her biri 8 kelime
        9: { words: [["Cocina", "Mutfak"], ["Salón", "Oturma odası"], ["Dormitorio", "Yatak odası"], ["Baño", "Banyo"], ["Jardín", "Bahçe"], ["Garaje", "Garaj"], ["Pasillo", "Koridor"], ["Terraza", "Teras"]], sentences: ["La ___ tiene ventana.", "El ___ es grande.", "Mi ___ está limpio.", "Hay luz en el ___."] },
        10: { words: [["Mesa", "Masa"], ["Silla", "Sandalye"], ["Cama", "Yatak"], ["Sofá", "Koltuk"], ["Armario", "Dolap"], ["Lámpara", "Lamba"], ["Alfombra", "Halı"], ["Espejo", "Ayna"]], sentences: ["La ___ está rota.", "El ___ es nuevo.", "Necesito una ___.", "Hay un ___ aquí."] },
        11: { words: [["Cabeza", "Baş"], ["Mano", "El"], ["Pie", "Ayak"], ["Ojo", "Göz"], ["Brazo", "Kol"], ["Pierna", "Bacak"], ["Nariz", "Burun"], ["Boca", "Ağız"]], sentences: ["Me duele la ___.", "Tengo dos ___s.", "Mi ___ está bien.", "La ___ es importante."] },
        12: { words: [["Camisa", "Gömlek"], ["Pantalón", "Pantolon"], ["Zapatos", "Ayakkabı"], ["Vestido", "Elbise"], ["Falda", "Etek"], ["Chaqueta", "Ceket"], ["Sombrero", "Şapka"], ["Bufanda", "Atkı"]], sentences: ["Llevo una ___.", "Esta ___ es bonita.", "Quiero comprar ___.", "La ___ es roja."] },
        13: { words: [["Perro", "Köpek"], ["Gato", "Kedi"], ["Pájaro", "Kuş"], ["Pez", "Balık"], ["Caballo", "At"], ["Vaca", "İnek"], ["Cerdo", "Domuz"], ["Oveja", "Koyun"]], sentences: ["Tengo un ___.", "El ___ es grande.", "Me gustan los ___s.", "El ___ come hierba."] },
        14: { words: [["Médico", "Doktor"], ["Profesor", "Öğretmen"], ["Ingeniero", "Mühendis"], ["Abogado", "Avukat"], ["Enfermera", "Hemşire"], ["Policía", "Polis"], ["Bombero", "İtfaiyeci"], ["Chef", "Şef"]], sentences: ["Soy ___.", "El ___ trabaja mucho.", "Mi padre es ___.", "Quiero ser ___."] },
        15: { words: [["Hospital", "Hastane"], ["Banco", "Banka"], ["Parque", "Park"], ["Farmacia", "Eczane"], ["Supermercado", "Süpermarket"], ["Biblioteca", "Kütüphane"], ["Estación", "İstasyon"], ["Iglesia", "Kilise"]], sentences: ["Voy al ___.", "El ___ está cerca.", "¿Dónde está el ___?", "Trabajo en el ___."] },
        16: { words: [["Coche", "Araba"], ["Autobús", "Otobüs"], ["Tren", "Tren"], ["Avión", "Uçak"], ["Bicicleta", "Bisiklet"], ["Moto", "Motosiklet"], ["Metro", "Metro"], ["Barco", "Gemi"]], sentences: ["Voy en ___.", "El ___ es rápido.", "Tengo un ___.", "Prefiero el ___."] },
        17: { words: [["Levantarse", "Kalkmak"], ["Ducharse", "Duş almak"], ["Desayunar", "Kahvaltı"], ["Acostarse", "Yatmak"], ["Vestirse", "Giyinmek"], ["Peinarse", "Taranmak"], ["Cepillarse", "Dişleri fırçalamak"], ["Afeitarse", "Tıraş olmak"]], sentences: ["Me gusta ___.", "Suelo ___ temprano.", "Necesito ___.", "Voy a ___."] },
        18: { words: [["Hora", "Saat"], ["Minuto", "Dakika"], ["Media", "Buçuk"], ["Cuarto", "Çeyrek"], ["Tarde", "Öğleden sonra"], ["Mañana", "Sabah"], ["Noche", "Gece"], ["Mediodía", "Öğle"]], sentences: ["Son las ___ y media.", "La ___ pasa rápido.", "Es la ___.", "Por la ___ duermo."] },
        19: { words: [["Sol", "Güneş"], ["Lluvia", "Yağmur"], ["Nieve", "Kar"], ["Viento", "Rüzgar"], ["Nubes", "Bulutlar"], ["Tormenta", "Fırtına"], ["Calor", "Sıcak"], ["Frío", "Soğuk"]], sentences: ["Hace ___.", "Hay ___.", "Mañana habrá ___.", "No me gusta la ___."] },
        20: { words: [["Leer", "Okumak"], ["Nadar", "Yüzmek"], ["Bailar", "Dans"], ["Cocinar", "Yemek yapmak"], ["Cantar", "Şarkı söylemek"], ["Viajar", "Seyahat"], ["Correr", "Koşmak"], ["Pintar", "Resim yapmak"]], sentences: ["Me gusta ___.", "Quiero aprender a ___.", "Suelo ___ los fines de semana.", "___ es divertido."] },
        // A1 Üniteleri (21-30) - GRAMER ODAKLI
        21: { words: [["Feliz", "Mutlu"], ["Triste", "Üzgün"], ["Cansado", "Yorgun"], ["Nervioso", "Gergin"], ["Contento", "Memnun"], ["Preocupado", "Endişeli"], ["Enfadado", "Kızgın"], ["Emocionado", "Heyecanlı"]], sentences: ["Estoy muy ___.", "¿Estás ___?", "Hoy estoy ___.", "No estoy ___ hoy."] },
        22: { words: [["Tengo que", "Yapmak zorundayım"], ["Tienes que", "Yapmalısın"], ["Estudiar", "Çalışmak"], ["Trabajar", "Çalışmak"], ["Comer", "Yemek"], ["Dormir", "Uyumak"], ["Ir", "Gitmek"], ["Hacer", "Yapmak"]], sentences: ["___ ir al colegio.", "___ estudiar.", "___ trabajar.", "___ hacer la tarea."] },
        23: { words: [["Quiero", "İstiyorum"], ["Quieres", "İstiyorsun"], ["Me gusta", "Severim"], ["Te gusta", "Seversin"], ["Comer", "Yemek"], ["Bailar", "Dans"], ["Nadar", "Yüzmek"], ["Viajar", "Seyahat"]], sentences: ["___ comer pizza.", "¿___ ir al cine?", "___ bailar.", "No ___ estudiar."] },
        24: { words: [["Español", "İspanyol"], ["Turco", "Türk"], ["Alemán", "Alman"], ["Francés", "Fransız"], ["Inglés", "İngiliz"], ["Italiano", "İtalyan"], ["Americano", "Amerikalı"], ["Japonés", "Japon"]], sentences: ["Soy ___.", "Ella es ___.", "¿Eres ___?", "No soy ___."] },
        25: { words: [["Hablo", "Konuşuyorum"], ["Como", "Yiyorum"], ["Vivo", "Yaşıyorum"], ["Trabajo", "Çalışıyorum"], ["Estudio", "Ders çalışıyorum"], ["Bailo", "Dans ediyorum"], ["Canto", "Şarkı söylüyorum"], ["Cocino", "Yemek yapıyorum"]], sentences: ["Yo ___ español.", "Yo ___ arroz.", "Yo ___ en Madrid.", "Yo ___ mucho."] },
        26: { words: [["Este", "Bu (erkek)"], ["Esta", "Bu (kadın)"], ["Ese", "Şu (erkek)"], ["Esa", "Şu (kadın)"], ["Aquel", "O (erkek-uzak)"], ["Aquella", "O (kadın-uzak)"], ["Estos", "Bunlar"], ["Esas", "Şunlar"]], sentences: ["___ libro es mío.", "¿Qué es ___?", "Dame ___ cosa.", "Prefiero ___."] },
        27: { words: [["Del", "...nın (erkek)"], ["De la", "...nın (kadın)"], ["Al", "...a (erkek)"], ["A la", "...a (kadın)"], ["Cerca", "Yakın"], ["Lejos", "Uzak"], ["Delante", "Önünde"], ["Detrás", "Arkasında"]], sentences: ["El libro ___ profesor.", "Voy ___ parque.", "Está cerca ___ banco.", "Está ___ de la casa."] },
        28: { words: [["Primero", "Birinci"], ["Segundo", "İkinci"], ["Tercero", "Üçüncü"], ["Cuarto", "Dördüncü"], ["Quinto", "Beşinci"], ["Sexto", "Altıncı"], ["Séptimo", "Yedinci"], ["Octavo", "Sekizinci"]], sentences: ["Vivo en el ___ piso.", "Es mi ___ día.", "La ___ calle a la derecha.", "Soy el ___."] },
        29: { words: [["¿Qué?", "Ne?"], ["¿Quién?", "Kim?"], ["¿Dónde?", "Nerede?"], ["¿Cuándo?", "Ne zaman?"], ["¿Cómo?", "Nasıl?"], ["¿Por qué?", "Neden?"], ["¿Cuánto?", "Ne kadar?"], ["¿Cuál?", "Hangisi?"]], sentences: ["___ quieres?", "___ es él?", "___ vives?", "___ vienes?"] },
        30: { words: [["Puedo", "Yapabilirim"], ["Puedes", "Yapabilirsin"], ["Puede", "Yapabilir"], ["Podemos", "Yapabiliriz"], ["Nadar", "Yüzmek"], ["Hablar", "Konuşmak"], ["Ayudar", "Yardım etmek"], ["Entrar", "Girmek"]], sentences: ["¿___ ayudarme?", "No ___ ir.", "___ hablar español.", "¿___ entrar?"] },
        // A2 Üniteleri (31-60) - Her biri 8 kelime
        31: { words: [["Currículum", "CV"], ["Entrevista", "Mülakat"], ["Experiencia", "Deneyim"], ["Salario", "Maaş"], ["Contrato", "Sözleşme"], ["Puesto", "Pozisyon"], ["Jefe", "Patron"], ["Empleado", "Çalışan"]], sentences: ["Envié mi ___.", "Tengo una ___.", "Tengo ___ laboral.", "El ___ es bueno."] },
        32: { words: [["Llamada", "Arama"], ["Mensaje", "Mesaj"], ["Contestar", "Cevaplamak"], ["Colgar", "Kapatmak"], ["Marcar", "Çevirmek"], ["Buzón", "Sesli mesaj"], ["Número", "Numara"], ["Línea", "Hat"]], sentences: ["Tengo una ___.", "Envié un ___.", "Voy a ___.", "No puedo ___."] },
        33: { words: [["Correo", "E-posta"], ["Asunto", "Konu"], ["Adjunto", "Ek dosya"], ["Responder", "Cevaplamak"], ["Enviar", "Göndermek"], ["Bandeja", "Gelen kutusu"], ["Firma", "İmza"], ["Reenviar", "İletmek"]], sentences: ["Recibí un ___.", "El ___ es importante.", "Hay un ___.", "Voy a ___."] },
        34: { words: [["Feliz", "Mutlu"], ["Triste", "Üzgün"], ["Enfadado", "Kızgın"], ["Nervioso", "Gergin"], ["Emocionado", "Heyecanlı"], ["Preocupado", "Endişeli"], ["Aburrido", "Sıkılmış"], ["Sorprendido", "Şaşırmış"]], sentences: ["Estoy ___.", "Me siento ___.", "Pareces ___.", "No estoy ___."] },
        35: { words: [["Amable", "Nazik"], ["Trabajador", "Çalışkan"], ["Generoso", "Cömert"], ["Honesto", "Dürüst"], ["Paciente", "Sabırlı"], ["Tímido", "Utangaç"], ["Valiente", "Cesur"], ["Simpático", "Sempatik"]], sentences: ["Es muy ___.", "Soy ___.", "Mi amigo es ___.", "No soy ___."] },
        36: { words: [["Gimnasio", "Spor salonu"], ["Ejercicio", "Egzersiz"], ["Partido", "Maç"], ["Equipo", "Takım"], ["Entrenador", "Antrenör"], ["Natación", "Yüzme"], ["Fútbol", "Futbol"], ["Baloncesto", "Basketbol"]], sentences: ["Voy al ___.", "Hago ___.", "Vi el ___.", "Mi ___ ganó."] },
        37: { words: [["Concierto", "Konser"], ["Canción", "Şarkı"], ["Guitarra", "Gitar"], ["Museo", "Müze"], ["Pintura", "Resim"], ["Escultura", "Heykel"], ["Exposición", "Sergi"], ["Artista", "Sanatçı"]], sentences: ["Fui al ___.", "Me gusta esta ___.", "Toco la ___.", "El ___ es famoso."] },
        38: { words: [["Película", "Film"], ["Actor", "Aktör"], ["Serie", "Dizi"], ["Director", "Yönetmen"], ["Escena", "Sahne"], ["Guión", "Senaryo"], ["Estreno", "Prömiyer"], ["Taquilla", "Gişe"]], sentences: ["Vi una ___.", "El ___ es bueno.", "Veo una ___.", "El ___ es famoso."] },
        39: { words: [["Ordenador", "Bilgisayar"], ["Portátil", "Dizüstü"], ["Contraseña", "Şifre"], ["Pantalla", "Ekran"], ["Teclado", "Klavye"], ["Ratón", "Fare"], ["Aplicación", "Uygulama"], ["Internet", "İnternet"]], sentences: ["Uso el ___.", "Mi ___ es nuevo.", "Olvidé mi ___.", "La ___ es grande."] },
        40: { words: [["Perfil", "Profil"], ["Seguidor", "Takipçi"], ["Publicar", "Paylaşmak"], ["Comentario", "Yorum"], ["Me gusta", "Beğeni"], ["Compartir", "Paylaşmak"], ["Cuenta", "Hesap"], ["Privacidad", "Gizlilik"]], sentences: ["Actualicé mi ___.", "Tengo muchos ___s.", "Voy a ___.", "Dejé un ___."] },
        // B1 Üniteleri (41-60) - Her biri 8 kelime
        41: { words: [["Hablaré", "Konuşacağım"], ["Comeré", "Yiyeceğim"], ["Viviré", "Yaşayacağım"], ["Trabajaré", "Çalışacağım"], ["Estudiaré", "Çalışacağım"], ["Viajaré", "Seyahat edeceğim"], ["Compraré", "Satın alacağım"], ["Visitaré", "Ziyaret edeceğim"]], sentences: ["Mañana ___.", "El año que viene ___.", "Pronto ___.", "Algún día ___."] },
        42: { words: [["Tendré", "Sahip olacağım"], ["Podré", "Yapabileceğim"], ["Sabré", "Bileceğim"], ["Vendré", "Geleceğim"], ["Haré", "Yapacağım"], ["Diré", "Söyleyeceğim"], ["Saldré", "Çıkacağım"], ["Pondré", "Koyacağım"]], sentences: ["___ tiempo.", "___ ayudarte.", "___ la verdad.", "___ temprano."] },
        43: { words: [["Ven", "Gel"], ["Haz", "Yap"], ["Di", "Söyle"], ["Sal", "Çık"], ["Ten", "Al"], ["Pon", "Koy"], ["Sé", "Ol"], ["Ve", "Git"]], sentences: ["¡___ aquí!", "¡___ tu tarea!", "¡___ la verdad!", "¡___ cuidado!"] },
        44: { words: [["No vengas", "Gelme"], ["No hagas", "Yapma"], ["No digas", "Söyleme"], ["No salgas", "Çıkma"], ["No toques", "Dokunma"], ["No olvides", "Unutma"], ["No llegues", "Varma"], ["No te preocupes", "Endişelenme"]], sentences: ["¡___ tarde!", "¡___ ruido!", "¡___ mentiras!", "¡___!"] },
        45: { words: [["Espero que", "Umarım"], ["Quiero que", "İstiyorum ki"], ["Dudo que", "Şüpheliyim"], ["Es posible que", "Mümkün"], ["Es necesario que", "Gerekli"], ["Ojalá", "Keşke"], ["Cuando", "...diğinde"], ["Antes de que", "...meden önce"]], sentences: ["___ vengas.", "___ estudies.", "___ llegue.", "___ llueva."] },
        46: { words: [["Querría", "İsterdim"], ["Podría", "Yapabilirdim"], ["Tendría", "Olurdu"], ["Sería", "Olurdu"], ["Debería", "Yapmalıyım"], ["Haría", "Yapardım"], ["Iría", "Giderdim"], ["Vendría", "Gelirdim"]], sentences: ["___ un café.", "___ ayudarte.", "___ genial.", "___ ir."] },
        47: { words: [["Reciclar", "Geri dönüştürme"], ["Contaminar", "Kirletmek"], ["Proteger", "Korumak"], ["Reducir", "Azaltmak"], ["Renovable", "Yenilenebilir"], ["Sostenible", "Sürdürülebilir"], ["Cambio climático", "İklim değişikliği"], ["Medio ambiente", "Çevre"]], sentences: ["Hay que ___.", "Debemos ___.", "Es importante ___.", "El ___ es grave."] },
        48: { words: [["Carrera", "Bölüm"], ["Beca", "Burs"], ["Aprobar", "Geçmek"], ["Suspender", "Kalmak"], ["Licenciatura", "Lisans"], ["Máster", "Yüksek lisans"], ["Investigar", "Araştırmak"], ["Tesis", "Tez"]], sentences: ["Estudio la ___ de...", "Conseguí una ___.", "Voy a ___.", "Presenté mi ___."] },
        49: { words: [["Inteligencia artificial", "Yapay zeka"], ["Desarrollar", "Geliştirmek"], ["Innovar", "Yenilik yapmak"], ["Automatizar", "Otomatikleştirmek"], ["Datos", "Veri"], ["Algoritmo", "Algoritma"], ["Programar", "Programlamak"], ["Virtual", "Sanal"]], sentences: ["La ___ cambiará.", "Hay que ___.", "Necesito ___ los ___.", "La reunión es ___."] },
        50: { words: [["Noticia", "Haber"], ["Periódico", "Gazete"], ["Publicar", "Yayınlamak"], ["Reportaje", "Röportaj"], ["Titular", "Başlık"], ["Fuente", "Kaynak"], ["En directo", "Canlı"], ["Prensa", "Basın"]], sentences: ["Leí la ___.", "El ___ dice que...", "Van a ___ el artículo.", "Vi un ___."] },
        51: { words: [["Dieta", "Diyet"], ["Saludable", "Sağlıklı"], ["Nutriente", "Besin"], ["Adelgazar", "Zayıflamak"], ["Engordar", "Şişmanlamak"], ["Equilibrado", "Dengeli"], ["Vitamina", "Vitamin"], ["Ejercicio", "Egzersiz"]], sentences: ["Sigo una ___ ___.", "Es ___ comer verduras.", "Necesito más ___.", "Quiero ___."] },
        52: { words: [["Enamorarse", "Aşık olmak"], ["Casarse", "Evlenmek"], ["Divorciarse", "Boşanmak"], ["Reconciliarse", "Barışmak"], ["Comprometerse", "Nişanlanmak"], ["Discutir", "Tartışmak"], ["Confiar", "Güvenmek"], ["Perdonar", "Affetmek"]], sentences: ["Me ___ de él.", "Se ___ el año pasado.", "Van a ___.", "Debemos ___."] },
        53: { words: [["Obra", "Eser"], ["Cuadro", "Tablo"], ["Exposición", "Sergi"], ["Contemporáneo", "Çağdaş"], ["Escultura", "Heykel"], ["Galería", "Galeri"], ["Artista", "Sanatçı"], ["Estilo", "Tarz"]], sentences: ["Es una ___ maestra.", "El ___ es impresionante.", "Fui a una ___.", "El arte ___."] },
        54: { words: [["Gobierno", "Hükümet"], ["Votar", "Oy vermek"], ["Derecho", "Hak"], ["Igualdad", "Eşitlik"], ["Ley", "Yasa"], ["Elecciones", "Seçimler"], ["Ciudadano", "Vatandaş"], ["Democracia", "Demokrasi"]], sentences: ["El ___ tomó medidas.", "Voy a ___.", "Tengo ___ a...", "La ___ es igual para todos."] },
        55: { words: [["Dijo que", "... dedi ki"], ["Preguntó si", "... sordu"], ["Comentó que", "... dedi"], ["Explicó que", "... açıkladı"], ["Prometió que", "Söz verdi"], ["Sugirió que", "Önerdi"], ["Negó que", "İnkar etti"], ["Afirmó que", "Belirtti"]], sentences: ["___ vendría.", "___ estaba bien.", "___ era importante.", "___ me ayudaría."] },
        56: { words: [["Había comido", "Yemişti"], ["Había llegado", "Gelmişti"], ["Había terminado", "Bitmişti"], ["Había visto", "Görmüştü"], ["Había hecho", "Yapmıştı"], ["Había dicho", "Söylemişti"], ["Había estudiado", "Çalışmıştı"], ["Había vivido", "Yaşamıştı"]], sentences: ["Cuando llegué, ya ___.", "Nunca ___.", "Antes de eso, ___.", "Ya ___ cuando me llamaste."] },
        57: { words: [["Por eso", "Bu yüzden"], ["Para que", "...için"], ["Sin embargo", "Ancak"], ["Además", "Ayrıca"], ["Por lo tanto", "Dolayısıyla"], ["A pesar de", "...e rağmen"], ["Aunque", "...rağmen"], ["Mientras que", "...iken"]], sentences: ["___ no pude ir.", "Lo hago ___ aprendas.", "___, lo intenté.", "___ quiero agregar algo."] },
        58: { words: [["Costar un ojo", "Pahalı olmak"], ["Meter la pata", "Pot kırmak"], ["Echar una mano", "Yardım etmek"], ["Estar en las nubes", "Dalgın olmak"], ["Ponerse las pilas", "Kendine gelmek"], ["Tirar la casa", "Savurganlık"], ["Quedarse corto", "Yetersiz kalmak"], ["Dar en el clavo", "İsabet etmek"]], sentences: ["Me costó un ___.", "Metí la ___.", "¿Me echas una ___?", "Estás en las ___ hoy."] },
        59: { words: [["Contrato", "Sözleşme"], ["Despedir", "İşten çıkarmak"], ["Contratar", "İşe almak"], ["Aumento", "Zam"], ["Reunión", "Toplantı"], ["Negociar", "Pazarlık"], ["Empresa", "Şirket"], ["Jefe", "Patron"]], sentences: ["Firmé el ___.", "Lo ___ sin razón.", "Van a ___ más.", "Pedí un ___."] },
        60: { words: [["Lograr", "Başarmak"], ["Mejorar", "Geliştirmek"], ["Avanzar", "İlerlemek"], ["Superar", "Aşmak"], ["Comprender", "Anlamak"], ["Comunicar", "İletişim kurmak"], ["Felicidades", "Tebrikler"], ["Nivel", "Seviye"]], sentences: ["Logré mis ___.", "Mi español ha ___.", "He ___ mucho.", "¡___! Terminaste B1."] },
        // B1 Üniteleri (61-90) - Curriculum'a uyumlu, her biri 8 kelime
        // 61: Gelecek Zaman
        61: { words: [["Hablaré", "Konuşacağım"], ["Comeré", "Yiyeceğim"], ["Viviré", "Yaşayacağım"], ["Trabajaré", "Çalışacağım"], ["Estudiaré", "Çalışacağım"], ["Viajaré", "Seyahat edeceğim"], ["Compraré", "Satın alacağım"], ["Visitaré", "Ziyaret edeceğim"]], sentences: ["Mañana ___.", "El año que viene ___.", "Pronto ___.", "Algún día ___."] },
        // 62: Koşul Cümleleri 1
        62: { words: [["Si tengo", "Eğer sahip olursam"], ["Si puedo", "Yapabilirsem"], ["Iré", "Gideceğim"], ["Vendrá", "Gelecek"], ["Habrá", "Olacak"], ["Podremos", "Yapabileceğiz"], ["Si llueve", "Yağarsa"], ["Si hace sol", "Güneşli olursa"]], sentences: ["Si ___ tiempo, iré.", "Si ___, me quedaré.", "___ a la fiesta.", "___ muchas personas."] },
        // 63: Koşul Cümleleri 2
        63: { words: [["Si tuviera", "Olsaydım"], ["Si pudiera", "Yapabilseydim"], ["Iría", "Giderdim"], ["Tendría", "Olurdum"], ["Haría", "Yapardım"], ["Sería", "Olurdum"], ["Compraría", "Alırdım"], ["Viviría", "Yaşardım"]], sentences: ["Si ___ dinero, viajaría.", "Si ___, lo haría.", "___ a España.", "___ muy feliz."] },
        // 64: Subjunctive Giriş
        64: { words: [["Espero que", "Umarım"], ["Quiero que", "İstiyorum ki"], ["Es posible que", "Mümkün"], ["Es necesario que", "Gerekli"], ["Ojalá", "Keşke"], ["Dudo que", "Şüpheliyim"], ["Antes de que", "...meden önce"], ["Para que", "...için"]], sentences: ["___ vengas.", "___ estudies.", "___ llegue.", "___ llueva."] },
        // 65: Haberler ve Medya
        65: { words: [["Noticia", "Haber"], ["Periódico", "Gazete"], ["Reportaje", "Röportaj"], ["Titular", "Başlık"], ["Fuente", "Kaynak"], ["En directo", "Canlı"], ["Prensa", "Basın"], ["Periodista", "Gazeteci"]], sentences: ["Leí la ___.", "El ___ dice que...", "Vi un ___.", "La ___ es importante."] },
        // 66: Çevre Sorunları
        66: { words: [["Contaminación", "Kirlilik"], ["Calentamiento global", "Küresel ısınma"], ["Reciclar", "Geri dönüştürme"], ["Medio ambiente", "Çevre"], ["Cambio climático", "İklim değişikliği"], ["Deforestación", "Ormansızlaşma"], ["Sostenible", "Sürdürülebilir"], ["Emisiones", "Emisyonlar"]], sentences: ["La ___ es grave.", "Hay que ___.", "El ___ es importante.", "Debemos proteger el ___."] },
        // 67: Sürdürülebilirlik
        67: { words: [["Reciclaje", "Geri dönüşüm"], ["Renovable", "Yenilenebilir"], ["Energía solar", "Güneş enerjisi"], ["Reducir", "Azaltmak"], ["Reutilizar", "Yeniden kullanmak"], ["Biodegradable", "Biyolojik olarak parçalanabilir"], ["Huella de carbono", "Karbon ayak izi"], ["Ecosistema", "Ekosistem"]], sentences: ["El ___ es importante.", "La energía ___ es mejor.", "Hay que ___ el consumo.", "Protegemos el ___."] },
        // 68: Kültür ve Gelenekler
        68: { words: [["Tradición", "Gelenek"], ["Festival", "Festival"], ["Costumbre", "Adet"], ["Celebración", "Kutlama"], ["Fiesta", "Parti"], ["Patrimonio", "Miras"], ["Artesanía", "El işi"], ["Folklore", "Folklor"]], sentences: ["La ___ es antigua.", "Fui al ___.", "Es una ___ típica.", "La ___ es importante."] },
        // 69: Ekonomi Temelleri
        69: { words: [["Economía", "Ekonomi"], ["Inflación", "Enflasyon"], ["Presupuesto", "Bütçe"], ["Ahorro", "Tasarruf"], ["Inversión", "Yatırım"], ["Deuda", "Borç"], ["Impuesto", "Vergi"], ["Préstamo", "Kredi"]], sentences: ["La ___ está creciendo.", "La ___ subió.", "Tengo un ___ mensual.", "Hice una ___."] },
        // 70: Bankacılık
        70: { words: [["Cuenta bancaria", "Banka hesabı"], ["Transferencia", "Transfer"], ["Cajero automático", "ATM"], ["Tarjeta de crédito", "Kredi kartı"], ["Depósito", "Mevduat"], ["Retiro", "Para çekme"], ["Interés", "Faiz"], ["Comisión", "Komisyon"]], sentences: ["Abrí una ___.", "Hice una ___.", "Fui al ___.", "Usé mi ___."] },
        // 71: Tartışma Becerileri
        71: { words: [["Opinar", "Görüş bildirmek"], ["Argumentar", "Argüman geliştirmek"], ["Debatir", "Tartışmak"], ["Convencer", "İkna etmek"], ["Desde mi punto de vista", "Bakış açımdan"], ["En mi opinión", "Bana göre"], ["Estoy de acuerdo", "Katılıyorum"], ["No estoy de acuerdo", "Katılmıyorum"]], sentences: ["___ que es importante.", "Vamos a ___.", "Quiero ___te.", "___, es correcto."] },
        // 72: Sunum Yapma
        72: { words: [["Presentación", "Sunum"], ["Diapositiva", "Slayt"], ["Introducción", "Giriş"], ["Conclusión", "Sonuç"], ["Gráfico", "Grafik"], ["Estadística", "İstatistik"], ["Resumen", "Özet"], ["Público", "Seyirci"]], sentences: ["Hice una ___.", "Cambié la ___.", "La ___ fue breve.", "El ___ aplaudió."] },
        // 73: Edebiyat 1
        73: { words: [["Novela", "Roman"], ["Poesía", "Şiir"], ["Autor", "Yazar"], ["Personaje", "Karakter"], ["Trama", "Olay örgüsü"], ["Capítulo", "Bölüm"], ["Género", "Tür"], ["Narrativa", "Anlatı"]], sentences: ["Leí una ___.", "Me gusta la ___.", "El ___ es famoso.", "El ___ es interesante."] },
        // 74: Şiir ve Şarkı
        74: { words: [["Verso", "Dize"], ["Rima", "Kafiye"], ["Estrofa", "Kıta"], ["Metáfora", "Metafor"], ["Ritmo", "Ritim"], ["Letra", "Şarkı sözü"], ["Melodía", "Melodi"], ["Compositor", "Besteci"]], sentences: ["El ___ es bonito.", "La ___ es perfecta.", "La ___ es poderosa.", "El ___ es famoso."] },
        // 75: Tarih ve Politika
        75: { words: [["Historia", "Tarih"], ["Democracia", "Demokrasi"], ["Gobierno", "Hükümet"], ["Revolución", "Devrim"], ["Independencia", "Bağımsızlık"], ["Constitución", "Anayasa"], ["Elecciones", "Seçimler"], ["Ciudadano", "Vatandaş"]], sentences: ["La ___ es importante.", "La ___ es valiosa.", "El ___ tomo medidas.", "Hubo una ___."] },
        // 76: Hukuk Temelleri
        76: { words: [["Ley", "Yasa"], ["Derecho", "Hak"], ["Justicia", "Adalet"], ["Abogado", "Avukat"], ["Juicio", "Dava"], ["Tribunal", "Mahkeme"], ["Sentencia", "Karar"], ["Testigo", "Tanık"]], sentences: ["La ___ es clara.", "Tengo ___ a...", "La ___ es importante.", "El ___ habló."] },
        // 77: Bilim ve Teknoloji
        77: { words: [["Ciencia", "Bilim"], ["Tecnología", "Teknoloji"], ["Investigación", "Araştırma"], ["Descubrimiento", "Keşif"], ["Innovación", "Yenilik"], ["Experimento", "Deney"], ["Científico", "Bilim insanı"], ["Laboratorio", "Laboratuvar"]], sentences: ["La ___ avanza.", "La ___ cambia todo.", "La ___ es importante.", "El ___ fue exitoso."] },
        // 78: Sağlık ve Beslenme
        78: { words: [["Dieta", "Diyet"], ["Nutrición", "Beslenme"], ["Saludable", "Sağlıklı"], ["Ejercicio", "Egzersiz"], ["Vitamina", "Vitamin"], ["Proteína", "Protein"], ["Equilibrado", "Dengeli"], ["Bienestar", "İyi oluş"]], sentences: ["Sigo una ___.", "La ___ es importante.", "Es ___.", "Hago ___ diario."] },
        // 79: Psikoloji Temelleri
        79: { words: [["Mente", "Zihin"], ["Emoción", "Duygu"], ["Comportamiento", "Davranış"], ["Ansiedad", "Kaygı"], ["Estrés", "Stres"], ["Terapia", "Terapi"], ["Autoestima", "Özgüven"], ["Salud mental", "Ruh sağlığı"]], sentences: ["La ___ es compleja.", "Siento ___.", "El ___ cambió.", "La ___ ayuda."] },
        // 80: Por vs Para
        80: { words: [["Por eso", "Bu yüzden"], ["Para que", "...için"], ["Por favor", "Lütfen"], ["Para siempre", "Sonsuza dek"], ["Por lo tanto", "Dolayısıyla"], ["Para mí", "Benim için"], ["Por fin", "Sonunda"], ["Por qué", "Neden"]], sentences: ["___ no pude ir.", "Lo hago ___.", "___, ayúdame.", "___, es importante."] },
        // 81: Ser vs Estar İleri
        81: { words: [["Ser listo", "Akıllı olmak"], ["Estar listo", "Hazır olmak"], ["Ser rico", "Zengin olmak"], ["Estar rico", "Lezzetli olmak"], ["Ser malo", "Kötü karakterli"], ["Estar malo", "Hasta olmak"], ["Ser verde", "Yeşil renkte"], ["Estar verde", "Olgunlaşmamış"]], sentences: ["Él ___ muy ___.", "La comida ___ ___.", "El niño ___ ___.", "El fruto ___ ___."] },
        // 82: Spor ve Fitness
        82: { words: [["Entrenamiento", "Antrenman"], ["Gimnasio", "Spor salonu"], ["Correr", "Koşmak"], ["Nadar", "Yüzmek"], ["Pesas", "Ağırlık"], ["Resistencia", "Dayanıklılık"], ["Calentamiento", "Isınma"], ["Estiramiento", "Esneme"]], sentences: ["Hago ___.", "Voy al ___.", "Me gusta ___.", "Levanté ___."] },
        // 83: Seyahat Deneyimleri
        83: { words: [["Aventura", "Macera"], ["Destino", "Varış noktası"], ["Itinerario", "Güzergah"], ["Mochila", "Sırt çantası"], ["Pasaporte", "Pasaport"], ["Visa", "Vize"], ["Vuelo", "Uçuş"], ["Alojamiento", "Konaklama"]], sentences: ["Fue una ___.", "Mi ___ es España.", "Preparé el ___.", "Llevé mi ___."] },
        // 84: Müzik ve Sanat
        84: { words: [["Concierto", "Konser"], ["Exposición", "Sergi"], ["Escultura", "Heykel"], ["Pintura", "Resim"], ["Música clásica", "Klasik müzik"], ["Galería", "Galeri"], ["Artista", "Sanatçı"], ["Instrumento", "Enstrüman"]], sentences: ["Fui al ___.", "Vi una ___.", "La ___ es bella.", "Toco un ___."] },
        // 85: İlişkiler ve Sosyal Hayat
        85: { words: [["Amistad", "Dostluk"], ["Relación", "İlişki"], ["Confianza", "Güven"], ["Comunicación", "İletişim"], ["Respeto", "Saygı"], ["Compromiso", "Bağlılık"], ["Apoyar", "Desteklemek"], ["Compartir", "Paylaşmak"]], sentences: ["La ___ es importante.", "Tenemos buena ___.", "La ___ es clave.", "Te voy a ___."] },
        // 86: İş ve Kariyer
        86: { words: [["Carrera", "Kariyer"], ["Promoción", "Terfi"], ["Contrato", "Sözleşme"], ["Empresa", "Şirket"], ["Jefe", "Patron"], ["Empleado", "Çalışan"], ["Reunión", "Toplantı"], ["Proyecto", "Proje"]], sentences: ["Mi ___ va bien.", "Conseguí una ___.", "Firmé el ___.", "Trabajo en una ___."] },
        // 87: Edebiyat 2
        87: { words: [["Obra maestra", "Şaheser"], ["Clásico", "Klasik"], ["Contemporáneo", "Çağdaş"], ["Crítica literaria", "Edebi eleştiri"], ["Bestseller", "Çok satan"], ["Prólogo", "Önsöz"], ["Epílogo", "Sonsöz"], ["Antología", "Antoloji"]], sentences: ["Es una ___.", "Leí un ___.", "El autor es ___.", "La ___ es positiva."] },
        // 88: İspanyol Coğrafyası
        88: { words: [["Comunidad autónoma", "Özerk bölge"], ["Provincia", "İl"], ["Costa", "Kıyı"], ["Montaña", "Dağ"], ["Meseta", "Yayla"], ["Río", "Nehir"], ["Clima mediterráneo", "Akdeniz iklimi"], ["Isla", "Ada"]], sentences: ["España tiene 17 ___.", "Visité esa ___.", "La ___ es bonita.", "Subí a la ___."] },
        // 89: Latin Amerika Kültürü
        89: { words: [["Diversidad", "Çeşitlilik"], ["Mestizo", "Melez"], ["Herencia", "Miras"], ["Gastronomía", "Mutfak kültürü"], ["Ritmo latino", "Latin ritmi"], ["Carnaval", "Karnaval"], ["Civilización", "Uygarlık"], ["Colonización", "Sömürgecilik"]], sentences: ["Hay mucha ___.", "La comida ___ es rica.", "El ___ es famoso.", "La ___ maya es increíble."] },
        // 90: B1 Kapsamlı Final
        90: { words: [["Lograr", "Başarmak"], ["Mejorar", "Geliştirmek"], ["Avanzar", "İlerlemek"], ["Superar", "Aşmak"], ["Comprender", "Anlamak"], ["Comunicar", "İletişim kurmak"], ["Felicidades", "Tebrikler"], ["Nivel B1", "B1 Seviyesi"]], sentences: ["Logré mis objetivos.", "Mi español ha mejorado.", "He avanzado mucho.", "¡Felicidades! Completaste ___."] },
    };


    const data = topics[unitId] || topics[9];
    const baseId = (quizIndex - 1) * 20;
    const questions: Question[] = [];

    // 20 soru: 7 kolay + 7 orta + 6 zor
    // Kolay sorular (1-7): Basit kelime tanıma (SELECT, LISTENING ağırlıklı)
    // Orta sorular (8-14): Cümle içinde kullanım (TRANSLATE, FILL_BLANK)
    // Zor sorular (15-20): Karmaşık çeviri ve dinleme

    for (let i = 0; i < 20; i++) {
        const wordIdx = i % data.words.length;

        // Zorluk seviyesine göre soru tipi belirle
        let qType: QuestionType;
        if (i < 7) {
            // KOLAY: SELECT ve LISTENING ağırlıklı
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

        // Yanlış cevapları oluştur - en az 3 farklı kelime olmalı
        const otherWords = data.words.filter((_, idx) => idx !== wordIdx);
        const wrongOptions = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Şıkları oluştur ve karıştır
        const allOptions = [
            { id: "correct", text: data.words[wordIdx][1], correct: true },
            { id: "w1", text: wrongOptions[0][1], correct: false },
            { id: "w2", text: wrongOptions[1][1], correct: false },
            { id: "w3", text: wrongOptions[2][1], correct: false }
        ].sort(() => 0.5 - Math.random())
            .map((opt, idx) => ({ ...opt, id: String.fromCharCode(97 + idx) }));

        // Dinamik FILL_BLANK cümlesi
        const sentenceIdx = i % (data.sentences?.length || 1);
        const dynamicSentence = data.sentences ? data.sentences[sentenceIdx] : `La ___ es importante.`;

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


// Tüm quiz verileri
const allQuizzes: { [key: string]: Question[] } = {
    "1-1": unit1Quiz1, "1-2": unit1Quiz2, "1-3": unit1Quiz3, "1-4": unit1Quiz4,
    "2-1": unit2Quiz1, "2-2": unit2Quiz2, "2-3": unit2Quiz3, "2-4": unit2Quiz4,
    "3-1": unit3Quiz1, "3-2": unit3Quiz2, "3-3": unit3Quiz3, "3-4": unit3Quiz4,
    "4-1": unit4Quiz1, "4-2": unit4Quiz2, "4-3": unit4Quiz3, "4-4": unit4Quiz4,
    "5-1": unit5Quiz1, "5-2": unit5Quiz2, "5-3": unit5Quiz3, "5-4": unit5Quiz4,
    "6-1": unit6Quiz1, "6-2": unit6Quiz2, "6-3": unit6Quiz3, "6-4": unit6Quiz4,
    "7-1": unit7Quiz1, "7-2": unit7Quiz2, "7-3": unit7Quiz3, "7-4": unit7Quiz4,
    "8-1": unit8Quiz1, "8-2": unit8Quiz2, "8-3": unit8Quiz3, "8-4": unit8Quiz4,
    "9-1": unit9Quiz1, "9-2": unit9Quiz2, "9-3": unit9Quiz3, "9-4": unit9Quiz4,
    "10-1": unit10Quiz1, "10-2": unit10Quiz2, "10-3": unit10Quiz3, "10-4": unit10Quiz4,
    "11-1": unit11Quiz1, "11-2": unit11Quiz2, "11-3": unit11Quiz3, "11-4": unit11Quiz4,
    "12-1": unit12Quiz1, "12-2": unit12Quiz2, "12-3": unit12Quiz3, "12-4": unit12Quiz4,
    "13-1": unit13Quiz1, "13-2": unit13Quiz2, "13-3": unit13Quiz3, "13-4": unit13Quiz4,
    "14-1": unit14Quiz1, "14-2": unit14Quiz2, "14-3": unit14Quiz3, "14-4": unit14Quiz4,
    "15-1": unit15Quiz1, "15-2": unit15Quiz2, "15-3": unit15Quiz3, "15-4": unit15Quiz4,
    "16-1": unit16Quiz1, "16-2": unit16Quiz2, "16-3": unit16Quiz3, "16-4": unit16Quiz4,
    "17-1": unit17Quiz1, "17-2": unit17Quiz2, "17-3": unit17Quiz3, "17-4": unit17Quiz4,
    "18-1": unit18Quiz1, "18-2": unit18Quiz2, "18-3": unit18Quiz3, "18-4": unit18Quiz4,
    "19-1": unit19Quiz1, "19-2": unit19Quiz2, "19-3": unit19Quiz3, "19-4": unit19Quiz4,
    "20-1": unit20Quiz1, "20-2": unit20Quiz2, "20-3": unit20Quiz3, "20-4": unit20Quiz4,
    "21-1": unit21Quiz1, "21-2": unit21Quiz2, "21-3": unit21Quiz3, "21-4": unit21Quiz4,
    "22-1": unit22Quiz1, "22-2": unit22Quiz2, "22-3": unit22Quiz3, "22-4": unit22Quiz4,
    "23-1": unit23Quiz1, "23-2": unit23Quiz2, "23-3": unit23Quiz3, "23-4": unit23Quiz4,
    "24-1": unit24Quiz1, "24-2": unit24Quiz2, "24-3": unit24Quiz3, "24-4": unit24Quiz4,
    "25-1": unit25Quiz1, "25-2": unit25Quiz2, "25-3": unit25Quiz3, "25-4": unit25Quiz4,
    // A1 Üniteleri (26-30) - Gramer Odaklı
    "26-1": unit26Quiz1, "26-2": unit26Quiz2, "26-3": unit26Quiz3, "26-4": unit26Quiz4,
    "27-1": unit27Quiz1, "27-2": unit27Quiz2, "27-3": unit27Quiz3, "27-4": unit27Quiz4,
    "28-1": unit28Quiz1, "28-2": unit28Quiz2, "28-3": unit28Quiz3, "28-4": unit28Quiz4,
    "29-1": unit29Quiz1, "29-2": unit29Quiz2, "29-3": unit29Quiz3, "29-4": unit29Quiz4,
    "30-1": unit30Quiz1, "30-2": unit30Quiz2, "30-3": unit30Quiz3, "30-4": unit30Quiz4,
};

const unitTopics: { [key: number]: string } = {
    // A1 Üniteleri (1-30)
    1: "Selamlaşma", 2: "Sayılar 1-20", 3: "Aile", 4: "Renkler", 5: "Yiyecekler",
    6: "İçecekler", 7: "Günler/Aylar", 8: "Sayılar 21-100", 9: "Ev Odaları", 10: "Mobilyalar",
    11: "Vücut", 12: "Giysiler", 13: "Hayvanlar", 14: "Meslekler", 15: "Şehir",
    16: "Ulaşım", 17: "Rutinler", 18: "Saat", 19: "Hava", 20: "Hobiler",
    21: "ESTAR+Duygular", 22: "TENER QUE", 23: "QUERER/GUSTAR", 24: "SER+Milliyet", 25: "Düzenli Fiiller",
    26: "İşaret Sıfatları", 27: "DEL Kullanımı", 28: "Sıra Sayıları", 29: "Soru Kelimeleri", 30: "PODER Fiili",
    // A2 Üniteleri (31-60)
    31: "Geçmiş Zaman 1", 32: "Geçmiş Zaman 2", 33: "Restoran", 34: "Alışveriş", 35: "Seyahat",
    36: "Otel", 37: "Havalimanı", 38: "Doktor", 39: "Eczane", 40: "Meslekler 2",
    41: "İş Görüşmesi", 42: "Telefon", 43: "E-posta", 44: "Duygular 2", 45: "Karakter",
    46: "Gelecek Planları", 47: "Emir Kipi", 48: "Sinema", 49: "Teknoloji", 50: "Sosyal Medya",
    51: "Sağlık", 52: "İlişkiler", 53: "Sanat", 54: "Politika", 55: "Bağlaçlar",
    56: "Geçmiş İleri", 57: "Belirsiz Zamirler", 58: "Nitelik Sıfatları", 59: "Zarf Yapıları", 60: "A2 Final",
    // B1 Üniteleri (61-90) - Curriculum'a uyumlu
    61: "Gelecek Zaman", 62: "Koşul Cümleleri 1", 63: "Koşul Cümleleri 2", 64: "Subjunctive Giriş", 65: "Haberler/Medya",
    66: "Çevre Sorunları", 67: "Sürdürülebilirlik", 68: "Kültür/Gelenekler", 69: "Ekonomi Temelleri", 70: "Bankacılık",
    71: "Tartışma Becerileri", 72: "Sunum Yapma", 73: "Edebiyat 1", 74: "Şiir/Şarkı", 75: "Tarih/Politika",
    76: "Hukuk Temelleri", 77: "Bilim/Teknoloji", 78: "Sağlık/Beslenme", 79: "Psikoloji", 80: "Por vs Para",
    81: "Ser vs Estar İleri", 82: "Spor/Fitness", 83: "Seyahat Deneyimleri", 84: "Müzik/Sanat", 85: "İlişkiler/Sosyal",
    86: "İş/Kariyer", 87: "Edebiyat 2", 88: "İspanyol Coğrafyası", 89: "Latin Amerika", 90: "B1 Final",
    // B2 Üniteleri (91-120)
    91: "Subjunctive İleri", 92: "Koşul Cümleleri 3", 93: "Edilgen Çatı", 94: "Dolaylı Anlatım", 95: "Akademik Yazım",
    96: "Tartışma/Münazara", 97: "İş Müzakereleri", 98: "Hukuk Dili", 99: "Tıp Terminolojisi", 100: "Finans"
};

// Ana fonksiyon
import { getEnglishA1QuestionsForUnit } from './questions-en-a1';
import { getEnglishA2QuestionsForUnit } from './questions-en-a2';
import { getFrenchA1QuestionsForUnit } from './questions-fr-a1';

export function getQuestionsForUnit(unitId: number, quizIndex: number = 1): Question[] {
    // === İNGİLİZCE ÜNİTELER (ID 101-220) ===
    // İngilizce A1 (101-130)
    if (unitId >= 101 && unitId <= 130) {
        const enQuiz = getEnglishA1QuestionsForUnit(unitId);
        return enQuiz.questions.map((q, i) => ({
            id: i + 1,
            type: "SELECT" as QuestionType,
            question: q.question,
            options: q.options.map((opt, idx) => ({
                id: String(idx),
                text: opt,
                correct: idx === q.correctAnswer
            })),
            hint: q.explanation
        }));
    }

    // İngilizce A2 (131-160)
    if (unitId >= 131 && unitId <= 160) {
        const enQuiz = getEnglishA2QuestionsForUnit(unitId);
        return enQuiz.questions.map((q, i) => ({
            id: i + 1,
            type: "SELECT" as QuestionType,
            question: q.question,
            options: q.options.map((opt, idx) => ({
                id: String(idx),
                text: opt,
                correct: idx === q.correctAnswer
            })),
            hint: q.explanation
        }));
    }

    // Fransızca A1 (301-330)
    if (unitId >= 301 && unitId <= 330) {
        return getFrenchA1QuestionsForUnit(unitId, quizIndex);
    }

    // === İSPANYOLCA ÜNİTELER (ID 1-100) ===
    const key = `${unitId}-${quizIndex}`;
    if (allQuizzes[key]) return allQuizzes[key];
    // A1 (9-20) ve A2 (21-40) için dinamik oluştur
    return generateQuiz(unitId, quizIndex, unitTopics[unitId] || "Ders");
}
