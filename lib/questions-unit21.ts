/**
 * LinguaFlow - A1 Ünite 21: ESTAR + Duygular (80 soru)
 * Gramer: ESTAR fiili ile geçici duygusal durumları ifade etme
 */

import { Question } from "./questions";

export const unit21Quiz1: Question[] = [
    // KOLAY (7 soru) - ESTAR çekimi ve temel duygu kelimeleri
    { id: 1, type: "SELECT", question: "'Estoy' hangi kişiye ait?", options: [{ id: "a", text: "Sen", correct: false }, { id: "b", text: "Ben", correct: true }, { id: "c", text: "O", correct: false }, { id: "d", text: "Biz", correct: false }] },
    { id: 2, type: "SELECT", question: "'Feliz' ne demek?", options: [{ id: "a", text: "Üzgün", correct: false }, { id: "b", text: "Mutlu", correct: true }, { id: "c", text: "Kızgın", correct: false }, { id: "d", text: "Yorgun", correct: false }] },
    { id: 3, type: "SELECT", question: "'Triste' ne demek?", options: [{ id: "a", text: "Mutlu", correct: false }, { id: "b", text: "Üzgün", correct: true }, { id: "c", text: "Heyecanlı", correct: false }, { id: "d", text: "Gergin", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy feliz", options: [{ id: "a", text: "Mutluyum", correct: true }, { id: "b", text: "Üzgünüm", correct: false }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Kızgınım", correct: false }] },
    { id: 5, type: "SELECT", question: "'Cansado' ne demek?", options: [{ id: "a", text: "Mutlu", correct: false }, { id: "b", text: "Yorgun", correct: true }, { id: "c", text: "Üzgün", correct: false }, { id: "d", text: "Heyecanlı", correct: false }] },
    { id: 6, type: "SELECT", question: "'Estás' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "Sen", correct: true }, { id: "c", text: "O", correct: false }, { id: "d", text: "Onlar", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy triste", options: [{ id: "a", text: "Mutluyum", correct: false }, { id: "b", text: "Üzgünüm", correct: true }, { id: "c", text: "Heyecanlıyım", correct: false }, { id: "d", text: "Yorgunum", correct: false }] },

    // ORTA (7 soru) - Cümle oluşturma ve daha fazla duygu
    { id: 8, type: "SELECT", question: "'Nervioso' ne demek?", options: [{ id: "a", text: "Sakin", correct: false }, { id: "b", text: "Gergin", correct: true }, { id: "c", text: "Mutlu", correct: false }, { id: "d", text: "Yorgun", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Mutluyum", correctAnswer: "Estoy feliz" },
    { id: 10, type: "SELECT", question: "'Estoy muy cansado' ne demek?", options: [{ id: "a", text: "Biraz yorgunum", correct: false }, { id: "b", text: "Çok yorgunum", correct: true }, { id: "c", text: "Yorgun değilim", correct: false }, { id: "d", text: "Yorgun musun?", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Cómo estás?", options: [{ id: "a", text: "Nasılsın?", correct: true }, { id: "b", text: "Neredesin?", correct: false }, { id: "c", text: "Ne yapıyorsun?", correct: false }, { id: "d", text: "Kim o?", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Yo _____ muy feliz hoy.", options: [{ id: "a", text: "estoy", correct: true }, { id: "b", text: "soy", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Üzgünüm", correctAnswer: "Estoy triste" },
    { id: 14, type: "SELECT", question: "'Preocupado' ne demek?", options: [{ id: "a", text: "Rahat", correct: false }, { id: "b", text: "Endişeli", correct: true }, { id: "c", text: "Mutlu", correct: false }, { id: "d", text: "Kızgın", correct: false }] },

    // ZOR (6 soru) - Karmaşık cümleler
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Çok yorgunum", correctAnswer: "Estoy muy cansado" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "María _____ nerviosa por el examen.", options: [{ id: "a", text: "está", correct: true }, { id: "b", text: "es", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estamos muy contentos", options: [{ id: "a", text: "Çok mutluyuz", correct: true }, { id: "b", text: "Çok üzgünüz", correct: false }, { id: "c", text: "Çok yorgunuz", correct: false }, { id: "d", text: "Çok kızgınız", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "¿_____ tú triste?", options: [{ id: "a", text: "Estás", correct: true }, { id: "b", text: "Eres", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bugün çok mutluyum", correctAnswer: "Hoy estoy muy feliz" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Nasılsın? - İyiyim, teşekkürler", correctAnswer: "¿Cómo estás? - Estoy bien, gracias" },
];

export const unit21Quiz2: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'Enfadado' ne demek?", options: [{ id: "a", text: "Mutlu", correct: false }, { id: "b", text: "Kızgın", correct: true }, { id: "c", text: "Üzgün", correct: false }, { id: "d", text: "Yorgun", correct: false }] },
    { id: 2, type: "SELECT", question: "'Contento' ne demek?", options: [{ id: "a", text: "Üzgün", correct: false }, { id: "b", text: "Memnun/Mutlu", correct: true }, { id: "c", text: "Kızgın", correct: false }, { id: "d", text: "Endişeli", correct: false }] },
    { id: 3, type: "SELECT", question: "'Emocionado' ne demek?", options: [{ id: "a", text: "Sakin", correct: false }, { id: "b", text: "Heyecanlı", correct: true }, { id: "c", text: "Yorgun", correct: false }, { id: "d", text: "Kızgın", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy enfadado", options: [{ id: "a", text: "Mutluyum", correct: false }, { id: "b", text: "Kızgınım", correct: true }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Üzgünüm", correct: false }] },
    { id: 5, type: "SELECT", question: "'Está' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "O (él/ella)", correct: true }, { id: "c", text: "Biz", correct: false }, { id: "d", text: "Onlar", correct: false }] },
    { id: 6, type: "SELECT", question: "'Estamos' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "Biz", correct: true }, { id: "c", text: "Onlar", correct: false }, { id: "d", text: "Sen", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy emocionado", options: [{ id: "a", text: "Sakinim", correct: false }, { id: "b", text: "Heyecanlıyım", correct: true }, { id: "c", text: "Kızgınım", correct: false }, { id: "d", text: "Üzgünüm", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'Aburrido' ne demek?", options: [{ id: "a", text: "Heyecanlı", correct: false }, { id: "b", text: "Sıkılmış", correct: true }, { id: "c", text: "Mutlu", correct: false }, { id: "d", text: "Kızgın", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Kızgınım", correctAnswer: "Estoy enfadado" },
    { id: 10, type: "SELECT", question: "'Ella está muy contenta' ne demek?", options: [{ id: "a", text: "O çok üzgün", correct: false }, { id: "b", text: "O çok memnun", correct: true }, { id: "c", text: "O çok yorgun", correct: false }, { id: "d", text: "O çok kızgın", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Están preocupados", options: [{ id: "a", text: "Endişeliler", correct: true }, { id: "b", text: "Mutlular", correct: false }, { id: "c", text: "Yorgunlar", correct: false }, { id: "d", text: "Kızgınlar", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Ellos _____ muy contentos.", options: [{ id: "a", text: "están", correct: true }, { id: "b", text: "son", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Heyecanlıyım", correctAnswer: "Estoy emocionado" },
    { id: 14, type: "SELECT", question: "'Tranquilo' ne demek?", options: [{ id: "a", text: "Gergin", correct: false }, { id: "b", text: "Sakin", correct: true }, { id: "c", text: "Heyecanlı", correct: false }, { id: "d", text: "Kızgın", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "O çok endişeli", correctAnswer: "Él está muy preocupado" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Nosotros no _____ aburridos.", options: [{ id: "a", text: "estamos", correct: true }, { id: "b", text: "somos", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Por qué estás triste?", options: [{ id: "a", text: "Neden üzgünsün?", correct: true }, { id: "b", text: "Neden mutlusun?", correct: false }, { id: "c", text: "Neden yorgunsun?", correct: false }, { id: "d", text: "Neden kızgınsın?", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi madre _____ cansada después del trabajo.", options: [{ id: "a", text: "está", correct: true }, { id: "b", text: "es", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Sıkıldım", correctAnswer: "Estoy aburrido" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Neden kızgınsın?", correctAnswer: "¿Por qué estás enfadado?" },
];

export const unit21Quiz3: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "Duygular için hangi fiil kullanılır?", options: [{ id: "a", text: "SER", correct: false }, { id: "b", text: "ESTAR", correct: true }, { id: "c", text: "TENER", correct: false }, { id: "d", text: "HACER", correct: false }] },
    { id: 2, type: "SELECT", question: "'Estoy bien' ne demek?", options: [{ id: "a", text: "Kötüyüm", correct: false }, { id: "b", text: "İyiyim", correct: true }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Mutluyum", correct: false }] },
    { id: 3, type: "SELECT", question: "'Estoy mal' ne demek?", options: [{ id: "a", text: "İyiyim", correct: false }, { id: "b", text: "Kötüyüm", correct: true }, { id: "c", text: "Normalim", correct: false }, { id: "d", text: "Harikayım", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy muy bien", options: [{ id: "a", text: "Çok iyiyim", correct: true }, { id: "b", text: "Çok kötüyüm", correct: false }, { id: "c", text: "Biraz iyiyim", correct: false }, { id: "d", text: "Normalim", correct: false }] },
    { id: 5, type: "SELECT", question: "'Asustado' ne demek?", options: [{ id: "a", text: "Mutlu", correct: false }, { id: "b", text: "Korkmuş", correct: true }, { id: "c", text: "Kızgın", correct: false }, { id: "d", text: "Sakin", correct: false }] },
    { id: 6, type: "SELECT", question: "'Sorprendido' ne demek?", options: [{ id: "a", text: "Üzgün", correct: false }, { id: "b", text: "Şaşırmış", correct: true }, { id: "c", text: "Korkmuş", correct: false }, { id: "d", text: "Sinirli", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy asustado", options: [{ id: "a", text: "Korkuyorum", correct: true }, { id: "b", text: "Kızgınım", correct: false }, { id: "c", text: "Şaşkınım", correct: false }, { id: "d", text: "Üzgünüm", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "Neden duygular için ESTAR kullanılır?", options: [{ id: "a", text: "Kalıcı özellikler", correct: false }, { id: "b", text: "Geçici durumlar", correct: true }, { id: "c", text: "Zaman ifadesi", correct: false }, { id: "d", text: "Konum bildirme", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "İyiyim", correctAnswer: "Estoy bien" },
    { id: 10, type: "SELECT", question: "'¿Estás nervioso?' ne demek?", options: [{ id: "a", text: "Gergin misin?", correct: true }, { id: "b", text: "Korkuyor musun?", correct: false }, { id: "c", text: "Üzgün müsün?", correct: false }, { id: "d", text: "Yorgun musun?", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "No estoy cansado", options: [{ id: "a", text: "Yorgun değilim", correct: true }, { id: "b", text: "Yorgunum", correct: false }, { id: "c", text: "Çok yorgunum", correct: false }, { id: "d", text: "Biraz yorgunum", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Cómo _____ tú hoy?", options: [{ id: "a", text: "estás", correct: true }, { id: "b", text: "eres", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Şaşkınım", correctAnswer: "Estoy sorprendido" },
    { id: 14, type: "SELECT", question: "'Así así' ne demek?", options: [{ id: "a", text: "Çok iyi", correct: false }, { id: "b", text: "Şöyle böyle", correct: true }, { id: "c", text: "Çok kötü", correct: false }, { id: "d", text: "Harika", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bugün nasılsın?", correctAnswer: "¿Cómo estás hoy?" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Los niños _____ muy emocionados.", options: [{ id: "a", text: "están", correct: true }, { id: "b", text: "son", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy un poco nervioso", options: [{ id: "a", text: "Biraz gerginim", correct: true }, { id: "b", text: "Çok gerginim", correct: false }, { id: "c", text: "Gergin değilim", correct: false }, { id: "d", text: "Biraz yorgunum", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Hoy no _____ muy feliz.", options: [{ id: "a", text: "estoy", correct: true }, { id: "b", text: "soy", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Korkmuş değilim", correctAnswer: "No estoy asustado" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çocuklar çok heyecanlı", correctAnswer: "Los niños están muy emocionados" },
];

export const unit21Quiz4: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'Muy' ne anlama gelir?", options: [{ id: "a", text: "Biraz", correct: false }, { id: "b", text: "Çok", correct: true }, { id: "c", text: "Hiç", correct: false }, { id: "d", text: "Az", correct: false }] },
    { id: 2, type: "SELECT", question: "'Un poco' ne anlama gelir?", options: [{ id: "a", text: "Çok", correct: false }, { id: "b", text: "Biraz", correct: true }, { id: "c", text: "Hiç", correct: false }, { id: "d", text: "Fazla", correct: false }] },
    { id: 3, type: "SELECT", question: "'Bastante' ne anlama gelir?", options: [{ id: "a", text: "Az", correct: false }, { id: "b", text: "Oldukça/Epey", correct: true }, { id: "c", text: "Hiç", correct: false }, { id: "d", text: "Biraz", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy bastante cansado", options: [{ id: "a", text: "Oldukça yorgunum", correct: true }, { id: "b", text: "Biraz yorgunum", correct: false }, { id: "c", text: "Çok yorgunum", correct: false }, { id: "d", text: "Yorgun değilim", correct: false }] },
    { id: 5, type: "SELECT", question: "'Hoy' ne demek?", options: [{ id: "a", text: "Dün", correct: false }, { id: "b", text: "Bugün", correct: true }, { id: "c", text: "Yarın", correct: false }, { id: "d", text: "Şimdi", correct: false }] },
    { id: 6, type: "SELECT", question: "'Ahora' ne demek?", options: [{ id: "a", text: "Dün", correct: false }, { id: "b", text: "Şimdi", correct: true }, { id: "c", text: "Yarın", correct: false }, { id: "d", text: "Bugün", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ahora estoy contento", options: [{ id: "a", text: "Şimdi memnunum", correct: true }, { id: "b", text: "Bugün memnunum", correct: false }, { id: "c", text: "Dün memnundum", correct: false }, { id: "d", text: "Yarın memnun olacağım", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'Estoy contento porque...' ne demek?", options: [{ id: "a", text: "Üzgünüm çünkü...", correct: false }, { id: "b", text: "Mutluyum çünkü...", correct: true }, { id: "c", text: "Yorgunum çünkü...", correct: false }, { id: "d", text: "Kızgınım çünkü...", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Şimdi çok mutluyum", correctAnswer: "Ahora estoy muy feliz" },
    { id: 10, type: "SELECT", question: "'Porque' ne demek?", options: [{ id: "a", text: "Neden", correct: false }, { id: "b", text: "Çünkü", correct: true }, { id: "c", text: "Nasıl", correct: false }, { id: "d", text: "Ne zaman", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy triste porque llueve", options: [{ id: "a", text: "Üzgünüm çünkü yağmur yağıyor", correct: true }, { id: "b", text: "Mutluyum çünkü güneşli", correct: false }, { id: "c", text: "Yorgunum çünkü çalıştım", correct: false }, { id: "d", text: "Kızgınım çünkü geç kaldım", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ muy feliz porque es mi cumpleaños.", options: [{ id: "a", text: "Estoy", correct: true }, { id: "b", text: "Soy", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Oldukça endişeliyim", correctAnswer: "Estoy bastante preocupado" },
    { id: 14, type: "SELECT", question: "'Siempre' ne demek?", options: [{ id: "a", text: "Bazen", correct: false }, { id: "b", text: "Her zaman", correct: true }, { id: "c", text: "Asla", correct: false }, { id: "d", text: "Nadiren", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Mutluyum çünkü bugün tatil", correctAnswer: "Estoy feliz porque hoy es fiesta" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Mis padres _____ muy contentos con mis notas.", options: [{ id: "a", text: "están", correct: true }, { id: "b", text: "son", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Estás enfadado conmigo?", options: [{ id: "a", text: "Bana kızgın mısın?", correct: true }, { id: "b", text: "Benden memnun musun?", correct: false }, { id: "c", text: "Beni seviyor musun?", correct: false }, { id: "d", text: "Benimle gelir misin?", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Por qué _____ triste tu hermana?", options: [{ id: "a", text: "está", correct: true }, { id: "b", text: "es", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Annem bugün çok yorgun", correctAnswer: "Mi madre está muy cansada hoy" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Her zaman mutluyum, ama bugün üzgünüm", correctAnswer: "Siempre estoy feliz, pero hoy estoy triste" },
];
