/**
 * SteadyShell - A1 Ünite 22: TENER QUE + Mastar (80 soru)
 * Gramer: Zorunluluk ifade etme - Tener que + infinitivo
 */

import { Question } from "./questions";

export const unit22Quiz1: Question[] = [
    // KOLAY (7 soru) - TENER çekimi ve temel yapı
    { id: 1, type: "SELECT", question: "'Tengo que' ne demek?", options: [{ id: "a", text: "İstiyorum", correct: false }, { id: "b", text: "Yapmak zorundayım", correct: true }, { id: "c", text: "Yapabilirim", correct: false }, { id: "d", text: "Seviyorum", correct: false }] },
    { id: 2, type: "SELECT", question: "'Tienes que' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "Sen", correct: true }, { id: "c", text: "O", correct: false }, { id: "d", text: "Biz", correct: false }] },
    { id: 3, type: "SELECT", question: "'Estudiar' ne demek?", options: [{ id: "a", text: "Yemek", correct: false }, { id: "b", text: "Çalışmak/Ders çalışmak", correct: true }, { id: "c", text: "Uyumak", correct: false }, { id: "d", text: "Gitmek", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo que estudiar", options: [{ id: "a", text: "Çalışmak zorundayım", correct: true }, { id: "b", text: "Çalışmak istiyorum", correct: false }, { id: "c", text: "Çalışabilirim", correct: false }, { id: "d", text: "Çalışıyorum", correct: false }] },
    { id: 5, type: "SELECT", question: "'Trabajar' ne demek?", options: [{ id: "a", text: "Uyumak", correct: false }, { id: "b", text: "Çalışmak (iş)", correct: true }, { id: "c", text: "Yemek", correct: false }, { id: "d", text: "Gitmek", correct: false }] },
    { id: 6, type: "SELECT", question: "'Tiene que' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "O (él/ella)", correct: true }, { id: "c", text: "Biz", correct: false }, { id: "d", text: "Onlar", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tienes que trabajar", options: [{ id: "a", text: "Çalışmak zorundasın", correct: true }, { id: "b", text: "Çalışmak istiyorsun", correct: false }, { id: "c", text: "Çalışabilirsin", correct: false }, { id: "d", text: "Çalışıyorsun", correct: false }] },

    // ORTA (7 soru) - Cümle oluşturma
    { id: 8, type: "SELECT", question: "'Dormir' ne demek?", options: [{ id: "a", text: "Yemek", correct: false }, { id: "b", text: "Uyumak", correct: true }, { id: "c", text: "Gitmek", correct: false }, { id: "d", text: "Yapmak", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Çalışmak zorundayım", correctAnswer: "Tengo que estudiar" },
    { id: 10, type: "SELECT", question: "'Tengo que ir al colegio' ne demek?", options: [{ id: "a", text: "Okula gitmek istiyorum", correct: false }, { id: "b", text: "Okula gitmek zorundayım", correct: true }, { id: "c", text: "Okula gidebilirim", correct: false }, { id: "d", text: "Okula gidiyorum", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tenemos que comer", options: [{ id: "a", text: "Yemek zorundayız", correct: true }, { id: "b", text: "Yemek istiyoruz", correct: false }, { id: "c", text: "Yemek yiyoruz", correct: false }, { id: "d", text: "Yemek yedik", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Yo _____ que hacer la tarea.", options: [{ id: "a", text: "tengo", correct: true }, { id: "b", text: "tenemos", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "İş yapmak zorundasın", correctAnswer: "Tienes que trabajar" },
    { id: 14, type: "SELECT", question: "'Tenemos que' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "Biz", correct: true }, { id: "c", text: "Onlar", correct: false }, { id: "d", text: "Sen", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Okula gitmek zorundayım", correctAnswer: "Tengo que ir al colegio" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "María _____ que estudiar para el examen.", options: [{ id: "a", text: "tiene", correct: true }, { id: "b", text: "tengo", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tienen que llegar temprano", options: [{ id: "a", text: "Erken gelmek zorundalar", correct: true }, { id: "b", text: "Erken gelmek istiyorlar", correct: false }, { id: "c", text: "Erken gelebilirler", correct: false }, { id: "d", text: "Erken geldiler", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Nosotros _____ que dormir más.", options: [{ id: "a", text: "tenemos", correct: true }, { id: "b", text: "tienen", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Daha fazla uyumak zorundayız", correctAnswer: "Tenemos que dormir más" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "O ev ödevini yapmak zorunda", correctAnswer: "Él tiene que hacer la tarea" },
];

export const unit22Quiz2: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'Comer' ne demek?", options: [{ id: "a", text: "İçmek", correct: false }, { id: "b", text: "Yemek yemek", correct: true }, { id: "c", text: "Uyumak", correct: false }, { id: "d", text: "Koşmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Beber' ne demek?", options: [{ id: "a", text: "Yemek", correct: false }, { id: "b", text: "İçmek", correct: true }, { id: "c", text: "Yazmak", correct: false }, { id: "d", text: "Okumak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Leer' ne demek?", options: [{ id: "a", text: "Yazmak", correct: false }, { id: "b", text: "Okumak", correct: true }, { id: "c", text: "Dinlemek", correct: false }, { id: "d", text: "Konuşmak", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo que comer", options: [{ id: "a", text: "Yemek zorundayım", correct: true }, { id: "b", text: "İçmek zorundayım", correct: false }, { id: "c", text: "Uyumak zorundayım", correct: false }, { id: "d", text: "Gitmek zorundayım", correct: false }] },
    { id: 5, type: "SELECT", question: "'Escribir' ne demek?", options: [{ id: "a", text: "Okumak", correct: false }, { id: "b", text: "Yazmak", correct: true }, { id: "c", text: "Dinlemek", correct: false }, { id: "d", text: "Koşmak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Tienen que' hangi kişiye ait?", options: [{ id: "a", text: "Ben", correct: false }, { id: "b", text: "Onlar (ellos)", correct: true }, { id: "c", text: "Biz", correct: false }, { id: "d", text: "O", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tiene que leer", options: [{ id: "a", text: "Okumak zorunda", correct: true }, { id: "b", text: "Yazmak zorunda", correct: false }, { id: "c", text: "Dinlemek zorunda", correct: false }, { id: "d", text: "Konuşmak zorunda", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'Hablar' ne demek?", options: [{ id: "a", text: "Dinlemek", correct: false }, { id: "b", text: "Konuşmak", correct: true }, { id: "c", text: "Yazmak", correct: false }, { id: "d", text: "Okumak", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Yemek yemek zorundayım", correctAnswer: "Tengo que comer" },
    { id: 10, type: "SELECT", question: "'Tienes que beber agua' ne demek?", options: [{ id: "a", text: "Su içmek istiyorsun", correct: false }, { id: "b", text: "Su içmek zorundasın", correct: true }, { id: "c", text: "Su içebilirsin", correct: false }, { id: "d", text: "Su içiyorsun", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tenemos que hablar", options: [{ id: "a", text: "Konuşmak zorundayız", correct: true }, { id: "b", text: "Konuşmak istiyoruz", correct: false }, { id: "c", text: "Konuşabiliriz", correct: false }, { id: "d", text: "Konuşuyoruz", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Tú _____ que escribir un email.", options: [{ id: "a", text: "tienes", correct: true }, { id: "b", text: "tiene", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Okumak zorunda", correctAnswer: "Tiene que leer" },
    { id: 14, type: "SELECT", question: "'Escuchar' ne demek?", options: [{ id: "a", text: "Konuşmak", correct: false }, { id: "b", text: "Dinlemek", correct: true }, { id: "c", text: "Bakmak", correct: false }, { id: "d", text: "Düşünmek", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Su içmek zorundasın", correctAnswer: "Tienes que beber agua" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Ellos _____ que escuchar la música.", options: [{ id: "a", text: "tienen", correct: true }, { id: "b", text: "tenemos", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo que escribir una carta", options: [{ id: "a", text: "Mektup yazmak zorundayım", correct: true }, { id: "b", text: "Mektup okumak zorundayım", correct: false }, { id: "c", text: "Mektup göndermek zorundayım", correct: false }, { id: "d", text: "Mektup almak zorundayım", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi hermano _____ que hablar con papá.", options: [{ id: "a", text: "tiene", correct: true }, { id: "b", text: "tengo", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Mektup yazmak zorundayım", correctAnswer: "Tengo que escribir una carta" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Babayla konuşmak zorunda", correctAnswer: "Tiene que hablar con papá" },
];

export const unit22Quiz3: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'Comprar' ne demek?", options: [{ id: "a", text: "Satmak", correct: false }, { id: "b", text: "Satın almak", correct: true }, { id: "c", text: "Vermek", correct: false }, { id: "d", text: "Almak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Limpiar' ne demek?", options: [{ id: "a", text: "Kirletmek", correct: false }, { id: "b", text: "Temizlemek", correct: true }, { id: "c", text: "Yıkamak", correct: false }, { id: "d", text: "Toplamak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cocinar' ne demek?", options: [{ id: "a", text: "Yemek yemek", correct: false }, { id: "b", text: "Yemek pişirmek", correct: true }, { id: "c", text: "Yıkamak", correct: false }, { id: "d", text: "Toplamak", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo que comprar pan", options: [{ id: "a", text: "Ekmek almak zorundayım", correct: true }, { id: "b", text: "Ekmek yemek zorundayım", correct: false }, { id: "c", text: "Ekmek yapmak zorundayım", correct: false }, { id: "d", text: "Ekmek istiyorum", correct: false }] },
    { id: 5, type: "SELECT", question: "'Llamar' ne demek?", options: [{ id: "a", text: "Gelmek", correct: false }, { id: "b", text: "Aramak/Telefon etmek", correct: true }, { id: "c", text: "Görmek", correct: false }, { id: "d", text: "Duymak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Visitar' ne demek?", options: [{ id: "a", text: "Görmek", correct: false }, { id: "b", text: "Ziyaret etmek", correct: true }, { id: "c", text: "Gelmek", correct: false }, { id: "d", text: "Gitmek", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tiene que limpiar la casa", options: [{ id: "a", text: "Evi temizlemek zorunda", correct: true }, { id: "b", text: "Evi boyamak zorunda", correct: false }, { id: "c", text: "Evi satmak zorunda", correct: false }, { id: "d", text: "Evi almak zorunda", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'Ayudar' ne demek?", options: [{ id: "a", text: "İstemek", correct: false }, { id: "b", text: "Yardım etmek", correct: true }, { id: "c", text: "Vermek", correct: false }, { id: "d", text: "Almak", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Ekmek almak zorundayım", correctAnswer: "Tengo que comprar pan" },
    { id: 10, type: "SELECT", question: "'Tenemos que cocinar' ne demek?", options: [{ id: "a", text: "Yemek yemek zorundayız", correct: false }, { id: "b", text: "Yemek pişirmek zorundayız", correct: true }, { id: "c", text: "Yemek pişirebiliriz", correct: false }, { id: "d", text: "Pişiriyoruz", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tienes que llamar a mamá", options: [{ id: "a", text: "Anneni aramak zorundasın", correct: true }, { id: "b", text: "Anneni görmek zorundasın", correct: false }, { id: "c", text: "Anneni ziyaret etmelisin", correct: false }, { id: "d", text: "Anneni bekle", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Nosotros _____ que visitar a la abuela.", options: [{ id: "a", text: "tenemos", correct: true }, { id: "b", text: "tienen", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Evi temizlemek zorunda", correctAnswer: "Tiene que limpiar la casa" },
    { id: 14, type: "SELECT", question: "'Pagar' ne demek?", options: [{ id: "a", text: "Almak", correct: false }, { id: "b", text: "Ödemek", correct: true }, { id: "c", text: "Vermek", correct: false }, { id: "d", text: "Satmak", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Annemi aramak zorundayım", correctAnswer: "Tengo que llamar a mi madre" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Ella _____ que ayudar a su hermano.", options: [{ id: "a", text: "tiene", correct: true }, { id: "b", text: "tengo", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tenemos que pagar la cuenta", options: [{ id: "a", text: "Hesabı ödemek zorundayız", correct: true }, { id: "b", text: "Hesabı görmek zorundayız", correct: false }, { id: "c", text: "Hesabı istemek zorundayız", correct: false }, { id: "d", text: "Hesabı almak zorundayız", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Los niños _____ que ayudar en casa.", options: [{ id: "a", text: "tienen", correct: true }, { id: "b", text: "tenemos", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Hesabı ödemek zorundayız", correctAnswer: "Tenemos que pagar la cuenta" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Büyükannemi ziyaret etmek zorundayız", correctAnswer: "Tenemos que visitar a la abuela" },
];

export const unit22Quiz4: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'No tengo que' ne demek?", options: [{ id: "a", text: "Zorunda değilim", correct: true }, { id: "b", text: "İstemiyorum", correct: false }, { id: "c", text: "Yapamıyorum", correct: false }, { id: "d", text: "Sevmiyorum", correct: false }] },
    { id: 2, type: "SELECT", question: "'Ahora' ne demek?", options: [{ id: "a", text: "Sonra", correct: false }, { id: "b", text: "Şimdi", correct: true }, { id: "c", text: "Önce", correct: false }, { id: "d", text: "Dün", correct: false }] },
    { id: 3, type: "SELECT", question: "'Mañana' ne demek?", options: [{ id: "a", text: "Bugün", correct: false }, { id: "b", text: "Yarın", correct: true }, { id: "c", text: "Dün", correct: false }, { id: "d", text: "Şimdi", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "No tengo que trabajar hoy", options: [{ id: "a", text: "Bugün çalışmak zorunda değilim", correct: true }, { id: "b", text: "Bugün çalışmak zorundayım", correct: false }, { id: "c", text: "Bugün çalışmak istiyorum", correct: false }, { id: "d", text: "Bugün çalışamıyorum", correct: false }] },
    { id: 5, type: "SELECT", question: "'Hoy' ne demek?", options: [{ id: "a", text: "Yarın", correct: false }, { id: "b", text: "Bugün", correct: true }, { id: "c", text: "Dün", correct: false }, { id: "d", text: "Şimdi", correct: false }] },
    { id: 6, type: "SELECT", question: "'Más tarde' ne demek?", options: [{ id: "a", text: "Şimdi", correct: false }, { id: "b", text: "Daha sonra", correct: true }, { id: "c", text: "Önce", correct: false }, { id: "d", text: "Erken", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mañana tengo que ir", options: [{ id: "a", text: "Yarın gitmek zorundayım", correct: true }, { id: "b", text: "Bugün gitmek zorundayım", correct: false }, { id: "c", text: "Yarın gitmek istiyorum", correct: false }, { id: "d", text: "Yarın gidebilirim", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'¿Tienes que...?' ne demek?", options: [{ id: "a", text: "İster misin?", correct: false }, { id: "b", text: "...zorunda mısın?", correct: true }, { id: "c", text: "Yapabilir misin?", correct: false }, { id: "d", text: "Seviyor musun?", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Bugün çalışmak zorunda değilim", correctAnswer: "No tengo que trabajar hoy" },
    { id: 10, type: "SELECT", question: "'Antes de' ne demek?", options: [{ id: "a", text: "Sonra", correct: false }, { id: "b", text: "Önce", correct: true }, { id: "c", text: "Sırasında", correct: false }, { id: "d", text: "Şimdi", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Tienes que ir ahora?", options: [{ id: "a", text: "Şimdi gitmek zorunda mısın?", correct: true }, { id: "b", text: "Şimdi gitmek istiyor musun?", correct: false }, { id: "c", text: "Şimdi gidebilir misin?", correct: false }, { id: "d", text: "Şimdi gidiyor musun?", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "No _____ que hacer eso.", options: [{ id: "a", text: "tienes", correct: true }, { id: "b", text: "tiene", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Yarın gitmek zorundayım", correctAnswer: "Mañana tengo que ir" },
    { id: 14, type: "SELECT", question: "'Después de' ne demek?", options: [{ id: "a", text: "Önce", correct: false }, { id: "b", text: "Sonra", correct: true }, { id: "c", text: "Sırasında", correct: false }, { id: "d", text: "Şimdi", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Şimdi gitmek zorunda mısın?", correctAnswer: "¿Tienes que ir ahora?" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Antes de comer, _____ que lavarte las manos.", options: [{ id: "a", text: "tienes", correct: true }, { id: "b", text: "tengo", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Después de estudiar, tengo que descansar", options: [{ id: "a", text: "Çalıştıktan sonra dinlenmek zorundayım", correct: true }, { id: "b", text: "Çalışmadan önce dinlenmek zorundayım", correct: false }, { id: "c", text: "Çalışırken dinlenmek zorundayım", correct: false }, { id: "d", text: "Çalışmak ve dinlenmek zorundayım", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Mañana no _____ que trabajar.", options: [{ id: "a", text: "tenemos", correct: true }, { id: "b", text: "tienen", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Yemekten önce ellerini yıkamak zorundasın", correctAnswer: "Antes de comer, tienes que lavarte las manos" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çalıştıktan sonra dinlenmek zorundayım", correctAnswer: "Después de estudiar, tengo que descansar" },
];
