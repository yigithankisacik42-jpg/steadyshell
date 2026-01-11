/**
 * LinguaFlow Soru Veritabanı Part 2 - Ünite 3
 * Her ünite için 4 quiz × 25 soru = 100 soru
 */

import { Question } from "./questions";

// ===== ÜNİTE 3: AİLE ÜYELERİ (25 SORU) =====
export const unit3Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Madre' ne demek?", options: [{ id: "a", text: "Baba", correct: false }, { id: "b", text: "Anne", correct: true }, { id: "c", text: "Kardeş", correct: false }, { id: "d", text: "Amca", correct: false }] },
    { id: 2, type: "SELECT", question: "'Padre' ne demek?", options: [{ id: "a", text: "Anne", correct: false }, { id: "b", text: "Baba", correct: true }, { id: "c", text: "Dede", correct: false }, { id: "d", text: "Amca", correct: false }] },
    { id: 3, type: "SELECT", question: "'Hermano' ne demek?", options: [{ id: "a", text: "Kız kardeş", correct: false }, { id: "b", text: "Erkek kardeş", correct: true }, { id: "c", text: "Baba", correct: false }, { id: "d", text: "Amca", correct: false }] },
    { id: 4, type: "SELECT", question: "'Hermana' ne demek?", options: [{ id: "a", text: "Erkek kardeş", correct: false }, { id: "b", text: "Kız kardeş", correct: true }, { id: "c", text: "Anne", correct: false }, { id: "d", text: "Teyze", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Madre", options: [{ id: "a", text: "Baba", correct: false }, { id: "b", text: "Anne", correct: true }, { id: "c", text: "Dede", correct: false }, { id: "d", text: "Nine", correct: false }] },
    { id: 6, type: "SELECT", question: "'Familia' ne demek?", options: [{ id: "a", text: "Arkadaş", correct: false }, { id: "b", text: "Aile", correct: true }, { id: "c", text: "Komşu", correct: false }, { id: "d", text: "İş arkadaşı", correct: false }] },
    { id: 7, type: "SELECT", question: "'Hija' ne demek?", options: [{ id: "a", text: "Oğul", correct: false }, { id: "b", text: "Kız (çocuk)", correct: true }, { id: "c", text: "Anne", correct: false }, { id: "d", text: "Kuzen", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Padre", options: [{ id: "a", text: "Anne", correct: false }, { id: "b", text: "Baba", correct: true }, { id: "c", text: "Kardeş", correct: false }, { id: "d", text: "Amca", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Abuelo' ne demek?", options: [{ id: "a", text: "Nine", correct: false }, { id: "b", text: "Dede", correct: true }, { id: "c", text: "Amca", correct: false }, { id: "d", text: "Baba", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bu benim annem.", correctAnswer: "Esta es mi madre" },
    { id: 11, type: "SELECT", question: "'Abuela' ne demek?", options: [{ id: "a", text: "Dede", correct: false }, { id: "b", text: "Nine/Büyükanne", correct: true }, { id: "c", text: "Teyze", correct: false }, { id: "d", text: "Anne", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi hermano", options: [{ id: "a", text: "Annem", correct: false }, { id: "b", text: "Erkek kardeşim", correct: true }, { id: "c", text: "Babam", correct: false }, { id: "d", text: "Ablam", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ se llama Carlos. (babam)", options: [{ id: "a", text: "madre", correct: false }, { id: "b", text: "padre", correct: true }] },
    { id: 14, type: "SELECT", question: "'Hijo' ne demek?", options: [{ id: "a", text: "Kız", correct: false }, { id: "b", text: "Oğul", correct: true }, { id: "c", text: "Yeğen", correct: false }, { id: "d", text: "Kuzen", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Babam", correctAnswer: "Mi padre" },
    { id: 16, type: "SELECT", question: "'Padres' ne demek?", options: [{ id: "a", text: "Babalar", correct: false }, { id: "b", text: "Anne baba", correct: true }, { id: "c", text: "Amcalar", correct: false }, { id: "d", text: "Dedeler", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mis padres", options: [{ id: "a", text: "Kardeşlerim", correct: false }, { id: "b", text: "Anne babam", correct: true }, { id: "c", text: "Büyüklerim", correct: false }, { id: "d", text: "Çocuklarım", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "İki kardeşim var.", correctAnswer: "Tengo dos hermanos" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ es muy joven. (kız kardeşim)", options: [{ id: "a", text: "hermano", correct: false }, { id: "b", text: "hermana", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Ailem büyük.", correctAnswer: "Mi familia es grande" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ tiene ojos azules. (annem)", options: [{ id: "a", text: "padre", correct: false }, { id: "b", text: "madre", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Büyükanne ve büyükbabam", correctAnswer: "Mis abuelos" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi familia es grande", options: [{ id: "a", text: "Ailem küçük", correct: false }, { id: "b", text: "Ailem büyük", correct: true }, { id: "c", text: "Ailem burada", correct: false }, { id: "d", text: "Ailem uzakta", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Annem ve babam evli", correctAnswer: "Mis padres están casados" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Üç çocuğum var: iki kız ve bir oğlan", correctAnswer: "Tengo tres hijos: dos hijas y un hijo" },
];

export const unit3Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Tío' ne demek?", options: [{ id: "a", text: "Teyze", correct: false }, { id: "b", text: "Amca/Dayı", correct: true }, { id: "c", text: "Kuzen", correct: false }, { id: "d", text: "Yeğen", correct: false }] },
    { id: 2, type: "SELECT", question: "'Tía' ne demek?", options: [{ id: "a", text: "Amca", correct: false }, { id: "b", text: "Teyze/Hala", correct: true }, { id: "c", text: "Anne", correct: false }, { id: "d", text: "Nine", correct: false }] },
    { id: 3, type: "SELECT", question: "'Primo' ne demek?", options: [{ id: "a", text: "Yeğen", correct: false }, { id: "b", text: "Kuzen (erkek)", correct: true }, { id: "c", text: "Amca", correct: false }, { id: "d", text: "Kardeş", correct: false }] },
    { id: 4, type: "SELECT", question: "'Prima' ne demek?", options: [{ id: "a", text: "Kuzen (erkek)", correct: false }, { id: "b", text: "Kuzen (kız)", correct: true }, { id: "c", text: "Teyze", correct: false }, { id: "d", text: "Yeğen", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi tío", options: [{ id: "a", text: "Teyzem", correct: false }, { id: "b", text: "Amcam/Dayım", correct: true }, { id: "c", text: "Babam", correct: false }, { id: "d", text: "Dedem", correct: false }] },
    { id: 6, type: "SELECT", question: "'Sobrino' ne demek?", options: [{ id: "a", text: "Kuzen", correct: false }, { id: "b", text: "Yeğen (erkek)", correct: true }, { id: "c", text: "Amca", correct: false }, { id: "d", text: "Oğul", correct: false }] },
    { id: 7, type: "SELECT", question: "'Sobrina' ne demek?", options: [{ id: "a", text: "Yeğen (erkek)", correct: false }, { id: "b", text: "Yeğen (kız)", correct: true }, { id: "c", text: "Kuzen", correct: false }, { id: "d", text: "Kız çocuk", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi tía", options: [{ id: "a", text: "Amcam", correct: false }, { id: "b", text: "Teyzem/Halam", correct: true }, { id: "c", text: "Annem", correct: false }, { id: "d", text: "Ablam", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Mayor' ne demek?", options: [{ id: "a", text: "Küçük", correct: false }, { id: "b", text: "Büyük/Ağabey-Abla", correct: true }, { id: "c", text: "Orta", correct: false }, { id: "d", text: "Genç", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Amcamın adı Pedro.", correctAnswer: "Mi tío se llama Pedro" },
    { id: 11, type: "SELECT", question: "'Menor' ne demek?", options: [{ id: "a", text: "Büyük", correct: false }, { id: "b", text: "Küçük", correct: true }, { id: "c", text: "Orta", correct: false }, { id: "d", text: "Yaşlı", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mis abuelos", options: [{ id: "a", text: "Anne babam", correct: false }, { id: "b", text: "Büyükanne büyükbabam", correct: true }, { id: "c", text: "Amcalarım", correct: false }, { id: "d", text: "Kuzenlerim", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ vive en Madrid. (teyzem)", options: [{ id: "a", text: "tío", correct: false }, { id: "b", text: "tía", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Üç kuzenim var.", correctAnswer: "Tengo tres primos" },
    { id: 15, type: "SELECT", question: "'Hermano mayor' ne demek?", options: [{ id: "a", text: "Küçük kardeş", correct: false }, { id: "b", text: "Ağabey", correct: true }, { id: "c", text: "Ablam", correct: false }, { id: "d", text: "İkiz kardeş", correct: false }] },
    { id: 16, type: "SELECT", question: "'Hermana menor' ne demek?", options: [{ id: "a", text: "Abla", correct: false }, { id: "b", text: "Küçük kız kardeş", correct: true }, { id: "c", text: "Kuzen", correct: false }, { id: "d", text: "Teyze", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo una hermana mayor", options: [{ id: "a", text: "Küçük kardeşim var", correct: false }, { id: "b", text: "Ablam var", correct: true }, { id: "c", text: "Ağabeyim var", correct: false }, { id: "d", text: "İkizim var", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Yeğenim beş yaşında.", correctAnswer: "Mi sobrino tiene cinco años" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mis _____ son muy simpáticos. (kuzenlerim)", options: [{ id: "a", text: "tíos", correct: false }, { id: "b", text: "primos", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi hermano _____ tiene 20 años. (ağabeyim)", options: [{ id: "a", text: "menor", correct: false }, { id: "b", text: "mayor", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Küçük erkek kardeşim var.", correctAnswer: "Tengo un hermano menor" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Amcam ve halam İspanya'da yaşıyor.", correctAnswer: "Mis tíos viven en España" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi prima es muy alta", options: [{ id: "a", text: "Teyzem çok uzun", correct: false }, { id: "b", text: "Kız kuzenim çok uzun", correct: true }, { id: "c", text: "Ablam çok uzun", correct: false }, { id: "d", text: "Annem çok uzun", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Dört yeğenim var", correctAnswer: "Tengo cuatro sobrinos" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Amcam doktor ve teyzem öğretmendir", correctAnswer: "Mi tío es médico y mi tía es profesora" },
];

export const unit3Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Casado' ne demek?", options: [{ id: "a", text: "Bekar", correct: false }, { id: "b", text: "Evli", correct: true }, { id: "c", text: "Boşanmış", correct: false }, { id: "d", text: "Nişanlı", correct: false }] },
    { id: 2, type: "SELECT", question: "'Soltero' ne demek?", options: [{ id: "a", text: "Evli", correct: false }, { id: "b", text: "Bekar", correct: true }, { id: "c", text: "Dul", correct: false }, { id: "d", text: "Ayrı", correct: false }] },
    { id: 3, type: "SELECT", question: "'Esposo' ne demek?", options: [{ id: "a", text: "Eş (kadın)", correct: false }, { id: "b", text: "Koca", correct: true }, { id: "c", text: "Sevgili", correct: false }, { id: "d", text: "Nişanlı", correct: false }] },
    { id: 4, type: "SELECT", question: "'Esposa' ne demek?", options: [{ id: "a", text: "Koca", correct: false }, { id: "b", text: "Karı/Eş", correct: true }, { id: "c", text: "Kız arkadaş", correct: false }, { id: "d", text: "Nişanlı", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Casado", options: [{ id: "a", text: "Bekar", correct: false }, { id: "b", text: "Evli", correct: true }, { id: "c", text: "Boşanmış", correct: false }, { id: "d", text: "Dul", correct: false }] },
    { id: 6, type: "SELECT", question: "'Vivir' ne demek?", options: [{ id: "a", text: "Çalışmak", correct: false }, { id: "b", text: "Yaşamak", correct: true }, { id: "c", text: "Gitmek", correct: false }, { id: "d", text: "Gelmek", correct: false }] },
    { id: 7, type: "SELECT", question: "'Divorciado' ne demek?", options: [{ id: "a", text: "Evli", correct: false }, { id: "b", text: "Boşanmış", correct: true }, { id: "c", text: "Bekar", correct: false }, { id: "d", text: "Nişanlı", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Soltero", options: [{ id: "a", text: "Evli", correct: false }, { id: "b", text: "Bekar", correct: true }, { id: "c", text: "Boşanmış", correct: false }, { id: "d", text: "Dul", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Ojos' ne demek?", options: [{ id: "a", text: "Kulaklar", correct: false }, { id: "b", text: "Gözler", correct: true }, { id: "c", text: "Eller", correct: false }, { id: "d", text: "Ayaklar", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Babam evli.", correctAnswer: "Mi padre está casado" },
    { id: 11, type: "SELECT", question: "'Azul' ne demek?", options: [{ id: "a", text: "Yeşil", correct: false }, { id: "b", text: "Mavi", correct: true }, { id: "c", text: "Kırmızı", correct: false }, { id: "d", text: "Sarı", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi hermano menor", options: [{ id: "a", text: "Ağabeyim", correct: false }, { id: "b", text: "Küçük erkek kardeşim", correct: true }, { id: "c", text: "Ablam", correct: false }, { id: "d", text: "Babam", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Tienes _____? (kardeş)", options: [{ id: "a", text: "padres", correct: false }, { id: "b", text: "hermanos", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Teyzem bekar.", correctAnswer: "Mi tía está soltera" },
    { id: 15, type: "SELECT", question: "'Verde' ne demek?", options: [{ id: "a", text: "Mavi", correct: false }, { id: "b", text: "Yeşil", correct: true }, { id: "c", text: "Kırmızı", correct: false }, { id: "d", text: "Sarı", correct: false }] },
    { id: 16, type: "SELECT", question: "'Pelo' ne demek?", options: [{ id: "a", text: "Göz", correct: false }, { id: "b", text: "Saç", correct: true }, { id: "c", text: "Burun", correct: false }, { id: "d", text: "Kulak", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mis padres están divorciados", options: [{ id: "a", text: "Anne babam evli", correct: false }, { id: "b", text: "Anne babam boşanmış", correct: true }, { id: "c", text: "Anne babam yaşlı", correct: false }, { id: "d", text: "Anne babam genç", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Annemin gözleri mavi.", correctAnswer: "Mi madre tiene ojos azules" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi tía está _____. (bekar)", options: [{ id: "a", text: "casada", correct: false }, { id: "b", text: "soltera", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kocam İspanyol.", correctAnswer: "Mi esposo es español" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Vivo con mi _____. (aile)", options: [{ id: "a", text: "hermano", correct: false }, { id: "b", text: "familia", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Ailemle yaşıyorum.", correctAnswer: "Vivo con mi familia" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi hermana tiene pelo rubio", options: [{ id: "a", text: "Kız kardeşimin saçı siyah", correct: false }, { id: "b", text: "Kız kardeşimin saçı sarı", correct: true }, { id: "c", text: "Kız kardeşimin saçı kahverengi", correct: false }, { id: "d", text: "Kız kardeşimin saçı kızıl", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Babamın saçı siyah ve gözleri kahverengi", correctAnswer: "Mi padre tiene pelo negro y ojos marrones" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Eşim ve ben iki çocuğumuz var", correctAnswer: "Mi esposa y yo tenemos dos hijos" },
];

export const unit3Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Nieto' ne demek?", options: [{ id: "a", text: "Yeğen", correct: false }, { id: "b", text: "Torun (erkek)", correct: true }, { id: "c", text: "Kuzen", correct: false }, { id: "d", text: "Oğul", correct: false }] },
    { id: 2, type: "SELECT", question: "'Nieta' ne demek?", options: [{ id: "a", text: "Torun (erkek)", correct: false }, { id: "b", text: "Torun (kız)", correct: true }, { id: "c", text: "Yeğen", correct: false }, { id: "d", text: "Kız", correct: false }] },
    { id: 3, type: "SELECT", question: "'Suegro' ne demek?", options: [{ id: "a", text: "Kayınvalide", correct: false }, { id: "b", text: "Kayınpeder", correct: true }, { id: "c", text: "Enişte", correct: false }, { id: "d", text: "Amca", correct: false }] },
    { id: 4, type: "SELECT", question: "'Suegra' ne demek?", options: [{ id: "a", text: "Kayınpeder", correct: false }, { id: "b", text: "Kayınvalide", correct: true }, { id: "c", text: "Baldız", correct: false }, { id: "d", text: "Teyze", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi nieto", options: [{ id: "a", text: "Yeğenim", correct: false }, { id: "b", text: "Torunum", correct: true }, { id: "c", text: "Oğlum", correct: false }, { id: "d", text: "Kuzenim", correct: false }] },
    { id: 6, type: "SELECT", question: "'Cuñado' ne demek?", options: [{ id: "a", text: "Kayınpeder", correct: false }, { id: "b", text: "Kayınbirader/Enişte", correct: true }, { id: "c", text: "Amca", correct: false }, { id: "d", text: "Kuzen", correct: false }] },
    { id: 7, type: "SELECT", question: "'Cuñada' ne demek?", options: [{ id: "a", text: "Kayınpeder", correct: false }, { id: "b", text: "Baldız/Görümce", correct: true }, { id: "c", text: "Teyze", correct: false }, { id: "d", text: "Kuzen", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi suegra", options: [{ id: "a", text: "Kayınpederim", correct: false }, { id: "b", text: "Kayınvalidem", correct: true }, { id: "c", text: "Teyzem", correct: false }, { id: "d", text: "Annem", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Gemelo' ne demek?", options: [{ id: "a", text: "Tek çocuk", correct: false }, { id: "b", text: "İkiz", correct: true }, { id: "c", text: "Üçüz", correct: false }, { id: "d", text: "Yarım kardeş", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "İki torunum var.", correctAnswer: "Tengo dos nietos" },
    { id: 11, type: "SELECT", question: "'Padrastro' ne demek?", options: [{ id: "a", text: "Baba", correct: false }, { id: "b", text: "Üvey baba", correct: true }, { id: "c", text: "Kayınpeder", correct: false }, { id: "d", text: "Dede", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi nieta es muy pequeña", options: [{ id: "a", text: "Kızım çok küçük", correct: false }, { id: "b", text: "Torunum çok küçük", correct: true }, { id: "c", text: "Yeğenim çok küçük", correct: false }, { id: "d", text: "Kuzenim çok küçük", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ tiene 80 años. (büyükannem)", options: [{ id: "a", text: "abuelo", correct: false }, { id: "b", text: "abuela", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Kayınvalidem çok iyi.", correctAnswer: "Mi suegra es muy buena" },
    { id: 15, type: "SELECT", question: "'Familia numerosa' ne demek?", options: [{ id: "a", text: "Küçük aile", correct: false }, { id: "b", text: "Kalabalık aile", correct: true }, { id: "c", text: "Tek kişi", correct: false }, { id: "d", text: "İki kişi", correct: false }] },
    { id: 16, type: "SELECT", question: "'Madrastra' ne demek?", options: [{ id: "a", text: "Anne", correct: false }, { id: "b", text: "Üvey anne", correct: true }, { id: "c", text: "Teyze", correct: false }, { id: "d", text: "Nine", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Somos cinco en mi familia", options: [{ id: "a", text: "Ailemiz dört kişi", correct: false }, { id: "b", text: "Ailemiz beş kişi", correct: true }, { id: "c", text: "Ailemiz altı kişi", correct: false }, { id: "d", text: "Ailemiz üç kişi", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "İkiz kardeşim var.", correctAnswer: "Tengo un hermano gemelo" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ es el hermano de mi esposa. (kayınbiraderim)", options: [{ id: "a", text: "suegro", correct: false }, { id: "b", text: "cuñado", correct: true }] },
    { id: 20, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi cuñada vive en Barcelona", options: [{ id: "a", text: "Kardeşim Barcelona'da yaşıyor", correct: false }, { id: "b", text: "Baldızım/Görümcem Barcelona'da yaşıyor", correct: true }, { id: "c", text: "Teyzem Barcelona'da yaşıyor", correct: false }, { id: "d", text: "Kuzenim Barcelona'da yaşıyor", correct: false }] },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ cuatro en mi familia. (Biz)", options: [{ id: "a", text: "Son", correct: false }, { id: "b", text: "Somos", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Ailemiz beş kişi.", correctAnswer: "Somos cinco en mi familia" },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Kayınpederim ve kayınvalidem İstanbul'da yaşıyor", correctAnswer: "Mis suegros viven en Estambul" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Büyükbabam 75 yaşında ve çok sağlıklı", correctAnswer: "Mi abuelo tiene 75 años y es muy sano" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Tüm ailem bir arada yaşıyoruz", correctAnswer: "Toda mi familia vive junta" },
];
