/**
 * LinguaFlow - Ünite 6: İçecekler (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit6Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Agua' ne demek?", options: [{ id: "a", text: "Çay", correct: false }, { id: "b", text: "Su", correct: true }, { id: "c", text: "Kahve", correct: false }, { id: "d", text: "Süt", correct: false }] },
    { id: 2, type: "SELECT", question: "'Leche' ne demek?", options: [{ id: "a", text: "Su", correct: false }, { id: "b", text: "Süt", correct: true }, { id: "c", text: "Çay", correct: false }, { id: "d", text: "Meyve suyu", correct: false }] },
    { id: 3, type: "SELECT", question: "'Café' ne demek?", options: [{ id: "a", text: "Çay", correct: false }, { id: "b", text: "Kahve", correct: true }, { id: "c", text: "Süt", correct: false }, { id: "d", text: "Su", correct: false }] },
    { id: 4, type: "SELECT", question: "'Té' ne demek?", options: [{ id: "a", text: "Kahve", correct: false }, { id: "b", text: "Çay", correct: true }, { id: "c", text: "Süt", correct: false }, { id: "d", text: "Kakao", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Agua", options: [{ id: "a", text: "Çay", correct: false }, { id: "b", text: "Su", correct: true }, { id: "c", text: "Kahve", correct: false }, { id: "d", text: "Süt", correct: false }] },
    { id: 6, type: "SELECT", question: "'Zumo' ne demek?", options: [{ id: "a", text: "Meyve", correct: false }, { id: "b", text: "Meyve suyu", correct: true }, { id: "c", text: "Sebze", correct: false }, { id: "d", text: "Şurup", correct: false }] },
    { id: 7, type: "SELECT", question: "'Refresco' ne demek?", options: [{ id: "a", text: "Sıcak içecek", correct: false }, { id: "b", text: "Meşrubat", correct: true }, { id: "c", text: "Alkollü içki", correct: false }, { id: "d", text: "Maden suyu", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Leche", options: [{ id: "a", text: "Su", correct: false }, { id: "b", text: "Süt", correct: true }, { id: "c", text: "Çay", correct: false }, { id: "d", text: "Kahve", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Cerveza' ne demek?", options: [{ id: "a", text: "Şarap", correct: false }, { id: "b", text: "Bira", correct: true }, { id: "c", text: "Kola", correct: false }, { id: "d", text: "Limonata", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Su", correctAnswer: "Agua" },
    { id: 11, type: "SELECT", question: "'Vino' ne demek?", options: [{ id: "a", text: "Bira", correct: false }, { id: "b", text: "Şarap", correct: true }, { id: "c", text: "Viski", correct: false }, { id: "d", text: "Votka", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Café con leche", options: [{ id: "a", text: "Sade kahve", correct: false }, { id: "b", text: "Sütlü kahve", correct: true }, { id: "c", text: "Çay", correct: false }, { id: "d", text: "Sıcak çikolata", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Quiero un _____ con leche.", options: [{ id: "a", text: "té", correct: false }, { id: "b", text: "café", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Kahve", correctAnswer: "Café" },
    { id: 15, type: "SELECT", question: "'Chocolate caliente' ne demek?", options: [{ id: "a", text: "Soğuk çikolata", correct: false }, { id: "b", text: "Sıcak çikolata", correct: true }, { id: "c", text: "Çikolatalı pasta", correct: false }, { id: "d", text: "Çikolatalı süt", correct: false }] },
    { id: 16, type: "SELECT", question: "'Zumo de naranja' ne demek?", options: [{ id: "a", text: "Elma suyu", correct: false }, { id: "b", text: "Portakal suyu", correct: true }, { id: "c", text: "Üzüm suyu", correct: false }, { id: "d", text: "Limon suyu", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Zumo de naranja", options: [{ id: "a", text: "Elma suyu", correct: false }, { id: "b", text: "Portakal suyu", correct: true }, { id: "c", text: "Üzüm suyu", correct: false }, { id: "d", text: "Limonata", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bir çay lütfen.", correctAnswer: "Un té, por favor" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Un vaso de _____, por favor. (su)", options: [{ id: "a", text: "leche", correct: false }, { id: "b", text: "agua", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Portakal suyu istiyorum.", correctAnswer: "Quiero zumo de naranja" },
    { id: 21, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Chocolate caliente", options: [{ id: "a", text: "Soğuk kahve", correct: false }, { id: "b", text: "Sıcak çikolata", correct: true }, { id: "c", text: "Sıcak süt", correct: false }, { id: "d", text: "Çay", correct: false }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Sıcak çikolata severim.", correctAnswer: "Me gusta el chocolate caliente" },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "İki sütlü kahve lütfen", correctAnswer: "Dos cafés con leche, por favor" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Her sabah çay içerim", correctAnswer: "Bebo té todas las mañanas" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Elma suyu ve portakal suyu istiyorum", correctAnswer: "Quiero zumo de manzana y zumo de naranja" },
];

export const unit6Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Botella' ne demek?", options: [{ id: "a", text: "Bardak", correct: false }, { id: "b", text: "Şişe", correct: true }, { id: "c", text: "Kutu", correct: false }, { id: "d", text: "Kupa", correct: false }] },
    { id: 2, type: "SELECT", question: "'Vaso' ne demek?", options: [{ id: "a", text: "Şişe", correct: false }, { id: "b", text: "Bardak", correct: true }, { id: "c", text: "Fincan", correct: false }, { id: "d", text: "Kase", correct: false }] },
    { id: 3, type: "SELECT", question: "'Taza' ne demek?", options: [{ id: "a", text: "Bardak", correct: false }, { id: "b", text: "Fincan", correct: true }, { id: "c", text: "Tabak", correct: false }, { id: "d", text: "Kaşık", correct: false }] },
    { id: 4, type: "SELECT", question: "'Frío' ne demek?", options: [{ id: "a", text: "Sıcak", correct: false }, { id: "b", text: "Soğuk", correct: true }, { id: "c", text: "Ilık", correct: false }, { id: "d", text: "Buzlu", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Botella", options: [{ id: "a", text: "Bardak", correct: false }, { id: "b", text: "Şişe", correct: true }, { id: "c", text: "Fincan", correct: false }, { id: "d", text: "Kutu", correct: false }] },
    { id: 6, type: "SELECT", question: "'Caliente' ne demek?", options: [{ id: "a", text: "Soğuk", correct: false }, { id: "b", text: "Sıcak", correct: true }, { id: "c", text: "Ilık", correct: false }, { id: "d", text: "Donmuş", correct: false }] },
    { id: 7, type: "SELECT", question: "'Con hielo' ne demek?", options: [{ id: "a", text: "Sıcak", correct: false }, { id: "b", text: "Buzlu", correct: true }, { id: "c", text: "Gazlı", correct: false }, { id: "d", text: "Tatlı", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vaso", options: [{ id: "a", text: "Şişe", correct: false }, { id: "b", text: "Bardak", correct: true }, { id: "c", text: "Fincan", correct: false }, { id: "d", text: "Tabak", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Agua con gas' ne demek?", options: [{ id: "a", text: "Sade su", correct: false }, { id: "b", text: "Maden suyu", correct: true }, { id: "c", text: "Buz gibi su", correct: false }, { id: "d", text: "Sıcak su", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bir şişe su lütfen.", correctAnswer: "Una botella de agua, por favor" },
    { id: 11, type: "SELECT", question: "'Café solo' ne demek?", options: [{ id: "a", text: "Sütlü kahve", correct: false }, { id: "b", text: "Sade kahve", correct: true }, { id: "c", text: "Kremalı kahve", correct: false }, { id: "d", text: "Buzlu kahve", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Agua con gas", options: [{ id: "a", text: "Sade su", correct: false }, { id: "b", text: "Maden suyu", correct: true }, { id: "c", text: "Buz gibi su", correct: false }, { id: "d", text: "Sıcak su", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Prefiero agua sin _____. (gaz)", options: [{ id: "a", text: "hielo", correct: false }, { id: "b", text: "gas", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Bir fincan kahve.", correctAnswer: "Una taza de café" },
    { id: 15, type: "SELECT", question: "'Agua sin gas' ne demek?", options: [{ id: "a", text: "Maden suyu", correct: false }, { id: "b", text: "Sade su", correct: true }, { id: "c", text: "Buzlu su", correct: false }, { id: "d", text: "Sıcak su", correct: false }] },
    { id: 16, type: "SELECT", question: "'Copa' ne demek?", options: [{ id: "a", text: "Bardak", correct: false }, { id: "b", text: "Kadeh", correct: true }, { id: "c", text: "Fincan", correct: false }, { id: "d", text: "Şişe", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Café solo", options: [{ id: "a", text: "Sütlü kahve", correct: false }, { id: "b", text: "Sade kahve", correct: true }, { id: "c", text: "Kremalı kahve", correct: false }, { id: "d", text: "Buzlu kahve", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Buzlu çay istiyorum.", correctAnswer: "Quiero té con hielo" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Un café _____, por favor. (sade)", options: [{ id: "a", text: "con leche", correct: false }, { id: "b", text: "solo", correct: true }] },
    { id: 20, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Un vaso de vino", options: [{ id: "a", text: "Bir bardak bira", correct: false }, { id: "b", text: "Bir bardak şarap", correct: true }, { id: "c", text: "Bir bardak su", correct: false }, { id: "d", text: "Bir bardak süt", correct: false }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Soğuk su tercih ederim.", correctAnswer: "Prefiero agua fría" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Gazlı su istemiyorum.", correctAnswer: "No quiero agua con gas" },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Üç fincan çay ve bir şişe su", correctAnswer: "Tres tazas de té y una botella de agua" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Kahve sıcak mı soğuk mu?", correctAnswer: "¿El café está caliente o frío?" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Buzlu kahve çok güzel yazın", correctAnswer: "El café con hielo es muy bueno en verano" },
];

export const unit6Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Beber' ne demek?", options: [{ id: "a", text: "Yemek", correct: false }, { id: "b", text: "İçmek", correct: true }, { id: "c", text: "Gitmek", correct: false }, { id: "d", text: "Almak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Sed' ne demek?", options: [{ id: "a", text: "Açlık", correct: false }, { id: "b", text: "Susuzluk", correct: true }, { id: "c", text: "Yorgunluk", correct: false }, { id: "d", text: "Uyku", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cuenta' ne demek?", options: [{ id: "a", text: "Menü", correct: false }, { id: "b", text: "Hesap", correct: true }, { id: "c", text: "Sipariş", correct: false }, { id: "d", text: "Bahşiş", correct: false }] },
    { id: 4, type: "SELECT", question: "'Pedir' ne demek?", options: [{ id: "a", text: "Vermek", correct: false }, { id: "b", text: "İstemek/Sipariş etmek", correct: true }, { id: "c", text: "Almak", correct: false }, { id: "d", text: "Ödemek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Beber", options: [{ id: "a", text: "Yemek", correct: false }, { id: "b", text: "İçmek", correct: true }, { id: "c", text: "Gitmek", correct: false }, { id: "d", text: "Almak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Nada más' ne demek?", options: [{ id: "a", text: "Daha fazla", correct: false }, { id: "b", text: "Başka bir şey yok", correct: true }, { id: "c", text: "Her şey", correct: false }, { id: "d", text: "Bir şey var", correct: false }] },
    { id: 7, type: "SELECT", question: "'Tomar' ne demek?", options: [{ id: "a", text: "Vermek", correct: false }, { id: "b", text: "Almak/İçmek", correct: true }, { id: "c", text: "Gitmek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo sed", options: [{ id: "a", text: "Acıktım", correct: false }, { id: "b", text: "Susadım", correct: true }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Üşüdüm", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Quisiera' ne demek?", options: [{ id: "a", text: "İstiyorum", correct: false }, { id: "b", text: "İsterdim (kibar)", correct: true }, { id: "c", text: "İstedim", correct: false }, { id: "d", text: "İsteyeceğim", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Susadım.", correctAnswer: "Tengo sed" },
    { id: 11, type: "SELECT", question: "'¿Algo más?' ne demek?", options: [{ id: "a", text: "Bu kadar mı?", correct: false }, { id: "b", text: "Başka bir şey?", correct: true }, { id: "c", text: "Ne kadar?", correct: false }, { id: "d", text: "Hazır mı?", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Algo más?", options: [{ id: "a", text: "Bu kadar mı?", correct: false }, { id: "b", text: "Başka bir şey?", correct: true }, { id: "c", text: "Ne kadar?", correct: false }, { id: "d", text: "Hazır mı?", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo mucha _____. (susuzluk)", options: [{ id: "a", text: "hambre", correct: false }, { id: "b", text: "sed", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Hesap lütfen.", correctAnswer: "La cuenta, por favor" },
    { id: 15, type: "SELECT", question: "'¿Qué desea?' ne demek?", options: [{ id: "a", text: "Ne yapıyorsun?", correct: false }, { id: "b", text: "Ne istersiniz?", correct: true }, { id: "c", text: "Ne zaman?", correct: false }, { id: "d", text: "Neredesin?", correct: false }] },
    { id: 16, type: "SELECT", question: "'Propina' ne demek?", options: [{ id: "a", text: "Hesap", correct: false }, { id: "b", text: "Bahşiş", correct: true }, { id: "c", text: "Menü", correct: false }, { id: "d", text: "Fatura", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Qué desea tomar?", options: [{ id: "a", text: "Ne yemek istiyorsunuz?", correct: false }, { id: "b", text: "Ne içmek istiyorsunuz?", correct: true }, { id: "c", text: "Ne kadar?", correct: false }, { id: "d", text: "Nereye gidiyorsunuz?", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Ne içmek istersin?", correctAnswer: "¿Qué quieres beber?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "¿_____ más? (Başka)", options: [{ id: "a", text: "Qué", correct: false }, { id: "b", text: "Algo", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Quisiera _____ un café. (sipariş etmek)", options: [{ id: "a", text: "tomar", correct: false }, { id: "b", text: "pedir", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Bu kadar, teşekkürler.", correctAnswer: "Nada más, gracias" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Bir kahve sipariş etmek isterdim.", correctAnswer: "Quisiera pedir un café" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La cuenta, por favor", options: [{ id: "a", text: "Menü lütfen", correct: false }, { id: "b", text: "Hesap lütfen", correct: true }, { id: "c", text: "Sipariş lütfen", correct: false }, { id: "d", text: "Su lütfen", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Ne kadar? - 15 euro", correctAnswer: "¿Cuánto es? - Son quince euros" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Her gün sekiz bardak su içerim", correctAnswer: "Bebo ocho vasos de agua todos los días" },
];

export const unit6Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Limonada' ne demek?", options: [{ id: "a", text: "Portakal suyu", correct: false }, { id: "b", text: "Limonata", correct: true }, { id: "c", text: "Elma suyu", correct: false }, { id: "d", text: "Üzüm suyu", correct: false }] },
    { id: 2, type: "SELECT", question: "'Batido' ne demek?", options: [{ id: "a", text: "Meyve suyu", correct: false }, { id: "b", text: "Milkshake/Smoothie", correct: true }, { id: "c", text: "Soda", correct: false }, { id: "d", text: "Çay", correct: false }] },
    { id: 3, type: "SELECT", question: "'Vino tinto' ne demek?", options: [{ id: "a", text: "Beyaz şarap", correct: false }, { id: "b", text: "Kırmızı şarap", correct: true }, { id: "c", text: "Rosé şarap", correct: false }, { id: "d", text: "Köpüklü şarap", correct: false }] },
    { id: 4, type: "SELECT", question: "'Vino blanco' ne demek?", options: [{ id: "a", text: "Kırmızı şarap", correct: false }, { id: "b", text: "Beyaz şarap", correct: true }, { id: "c", text: "Rosé şarap", correct: false }, { id: "d", text: "Köpüklü şarap", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Limonada", options: [{ id: "a", text: "Portakal suyu", correct: false }, { id: "b", text: "Limonata", correct: true }, { id: "c", text: "Elma suyu", correct: false }, { id: "d", text: "Maden suyu", correct: false }] },
    { id: 6, type: "SELECT", question: "'Rico' içecek için ne demek?", options: [{ id: "a", text: "Zengin", correct: false }, { id: "b", text: "Lezzetli", correct: true }, { id: "c", text: "Pahalı", correct: false }, { id: "d", text: "Ucuz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Fuerte' içecek için ne demek?", options: [{ id: "a", text: "Hafif", correct: false }, { id: "b", text: "Sert/Güçlü", correct: true }, { id: "c", text: "Tatlı", correct: false }, { id: "d", text: "Soğuk", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Batido de fresa", options: [{ id: "a", text: "Çilekli dondurma", correct: false }, { id: "b", text: "Çilekli milkshake", correct: true }, { id: "c", text: "Çilek suyu", correct: false }, { id: "d", text: "Çilekli pasta", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Suave' içecek için ne demek?", options: [{ id: "a", text: "Sert", correct: false }, { id: "b", text: "Hafif/Yumuşak", correct: true }, { id: "c", text: "Tuzlu", correct: false }, { id: "d", text: "Acı", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "İki bira lütfen.", correctAnswer: "Dos cervezas, por favor" },
    { id: 11, type: "SELECT", question: "'Dulce' içecek için ne demek?", options: [{ id: "a", text: "Ekşi", correct: false }, { id: "b", text: "Tatlı", correct: true }, { id: "c", text: "Acı", correct: false }, { id: "d", text: "Tuzlu", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vino tinto", options: [{ id: "a", text: "Beyaz şarap", correct: false }, { id: "b", text: "Kırmızı şarap", correct: true }, { id: "c", text: "Rosé şarap", correct: false }, { id: "d", text: "Köpüklü şarap", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Un _____ de chocolate, por favor.", options: [{ id: "a", text: "zumo", correct: false }, { id: "b", text: "batido", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Bu çok lezzetli.", correctAnswer: "Esto está muy rico" },
    { id: 15, type: "SELECT", question: "'Amargo' ne demek?", options: [{ id: "a", text: "Tatlı", correct: false }, { id: "b", text: "Acı", correct: true }, { id: "c", text: "Tuzlu", correct: false }, { id: "d", text: "Ekşi", correct: false }] },
    { id: 16, type: "SELECT", question: "'Refrescante' ne demek?", options: [{ id: "a", text: "Sıcak", correct: false }, { id: "b", text: "Serinletici", correct: true }, { id: "c", text: "Tuzlu", correct: false }, { id: "d", text: "Ekşi", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Está muy dulce", options: [{ id: "a", text: "Çok tuzlu", correct: false }, { id: "b", text: "Çok tatlı", correct: true }, { id: "c", text: "Çok acı", correct: false }, { id: "d", text: "Çok ekşi", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Taze limonata çok güzel.", correctAnswer: "La limonada fresca es muy buena" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Prefiero el vino _____. (beyaz)", options: [{ id: "a", text: "tinto", correct: false }, { id: "b", text: "blanco", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "El café está muy _____. (güçlü)", options: [{ id: "a", text: "suave", correct: false }, { id: "b", text: "fuerte", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Bir kadeh kırmızı şarap.", correctAnswer: "Una copa de vino tinto" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Kahve çok sert.", correctAnswer: "El café está muy fuerte" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Un batido de chocolate", options: [{ id: "a", text: "Çilekli smoothie", correct: false }, { id: "b", text: "Çikolatalı milkshake", correct: true }, { id: "c", text: "Muzlu smoothie", correct: false }, { id: "d", text: "Vanilya milkshake", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Şarap çok yumuşak ve lezzetli", correctAnswer: "El vino es muy suave y rico" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Yazın serinletici içecekler içerim: limonata ve buzlu çay", correctAnswer: "En verano bebo bebidas refrescantes: limonada y té con hielo" },
];
