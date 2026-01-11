/**
 * LinguaFlow - Ünite 8: Sayılar 21-100 (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit8Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Treinta' kaç?", options: [{ id: "a", text: "20", correct: false }, { id: "b", text: "30", correct: true }, { id: "c", text: "40", correct: false }, { id: "d", text: "50", correct: false }] },
    { id: 2, type: "SELECT", question: "'Cuarenta' kaç?", options: [{ id: "a", text: "30", correct: false }, { id: "b", text: "40", correct: true }, { id: "c", text: "50", correct: false }, { id: "d", text: "60", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cincuenta' kaç?", options: [{ id: "a", text: "40", correct: false }, { id: "b", text: "50", correct: true }, { id: "c", text: "60", correct: false }, { id: "d", text: "70", correct: false }] },
    { id: 4, type: "SELECT", question: "'Sesenta' kaç?", options: [{ id: "a", text: "50", correct: false }, { id: "b", text: "60", correct: true }, { id: "c", text: "70", correct: false }, { id: "d", text: "80", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Treinta", options: [{ id: "a", text: "20", correct: false }, { id: "b", text: "30", correct: true }, { id: "c", text: "40", correct: false }, { id: "d", text: "13", correct: false }] },
    { id: 6, type: "SELECT", question: "'Setenta' kaç?", options: [{ id: "a", text: "60", correct: false }, { id: "b", text: "70", correct: true }, { id: "c", text: "80", correct: false }, { id: "d", text: "90", correct: false }] },
    { id: 7, type: "SELECT", question: "'Ochenta' kaç?", options: [{ id: "a", text: "70", correct: false }, { id: "b", text: "80", correct: true }, { id: "c", text: "90", correct: false }, { id: "d", text: "100", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Cincuenta", options: [{ id: "a", text: "40", correct: false }, { id: "b", text: "50", correct: true }, { id: "c", text: "60", correct: false }, { id: "d", text: "15", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Noventa' kaç?", options: [{ id: "a", text: "80", correct: false }, { id: "b", text: "90", correct: true }, { id: "c", text: "100", correct: false }, { id: "d", text: "70", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "30", correctAnswer: "Treinta" },
    { id: 11, type: "SELECT", question: "'Cien' kaç?", options: [{ id: "a", text: "50", correct: false }, { id: "b", text: "100", correct: true }, { id: "c", text: "90", correct: false }, { id: "d", text: "1000", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Ochenta y tres", options: [{ id: "a", text: "73", correct: false }, { id: "b", text: "83", correct: true }, { id: "c", text: "93", correct: false }, { id: "d", text: "63", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Treinta y _____ = 36", options: [{ id: "a", text: "cinco", correct: false }, { id: "b", text: "seis", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "50", correctAnswer: "Cincuenta" },
    { id: 15, type: "SELECT", question: "30-99 arası sayılarda birler basamağı nasıl eklenir?", options: [{ id: "a", text: "Birleşik yazılır", correct: false }, { id: "b", text: "'y' ile bağlanır", correct: true }, { id: "c", text: "Ayrı yazılır", correct: false }, { id: "d", text: "Tire ile bağlanır", correct: false }] },
    { id: 16, type: "SELECT", question: "'Setenta y cinco' kaç?", options: [{ id: "a", text: "65", correct: false }, { id: "b", text: "75", correct: true }, { id: "c", text: "85", correct: false }, { id: "d", text: "57", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Noventa y nueve", options: [{ id: "a", text: "89", correct: false }, { id: "b", text: "99", correct: true }, { id: "c", text: "79", correct: false }, { id: "d", text: "69", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "75", correctAnswer: "Setenta y cinco" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Cuarenta y _____ = 42", options: [{ id: "a", text: "uno", correct: false }, { id: "b", text: "dos", correct: true }] },
    { id: 20, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Cincuenta y cinco", options: [{ id: "a", text: "45", correct: false }, { id: "b", text: "55", correct: true }, { id: "c", text: "65", correct: false }, { id: "d", text: "35", correct: false }] },
    { id: 21, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "63", correctAnswer: "Sesenta y tres" },
    { id: 22, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "47", correctAnswer: "Cuarenta y siete" },
    { id: 23, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "88", correctAnswer: "Ochenta y ocho" },
    { id: 24, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "91", correctAnswer: "Noventa y uno" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Büyükbabam 78 yaşında", correctAnswer: "Mi abuelo tiene setenta y ocho años" },
];

export const unit8Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Veintiuno' kaç?", options: [{ id: "a", text: "20", correct: false }, { id: "b", text: "21", correct: true }, { id: "c", text: "22", correct: false }, { id: "d", text: "11", correct: false }] },
    { id: 2, type: "SELECT", question: "'Veintidós' kaç?", options: [{ id: "a", text: "12", correct: false }, { id: "b", text: "22", correct: true }, { id: "c", text: "32", correct: false }, { id: "d", text: "20", correct: false }] },
    { id: 3, type: "SELECT", question: "'Veintitrés' kaç?", options: [{ id: "a", text: "13", correct: false }, { id: "b", text: "23", correct: true }, { id: "c", text: "33", correct: false }, { id: "d", text: "32", correct: false }] },
    { id: 4, type: "SELECT", question: "'Veinticinco' kaç?", options: [{ id: "a", text: "15", correct: false }, { id: "b", text: "25", correct: true }, { id: "c", text: "35", correct: false }, { id: "d", text: "50", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Veinticuatro", options: [{ id: "a", text: "14", correct: false }, { id: "b", text: "24", correct: true }, { id: "c", text: "34", correct: false }, { id: "d", text: "44", correct: false }] },
    { id: 6, type: "SELECT", question: "'Veintisiete' kaç?", options: [{ id: "a", text: "17", correct: false }, { id: "b", text: "27", correct: true }, { id: "c", text: "37", correct: false }, { id: "d", text: "72", correct: false }] },
    { id: 7, type: "SELECT", question: "21-29 nasıl yazılır?", options: [{ id: "a", text: "Veinte y uno", correct: false }, { id: "b", text: "Tek kelime (veintiuno)", correct: true }, { id: "c", text: "Dos uno", correct: false }, { id: "d", text: "Veinte uno", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Veintisiete", options: [{ id: "a", text: "17", correct: false }, { id: "b", text: "27", correct: true }, { id: "c", text: "37", correct: false }, { id: "d", text: "70", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "31 nasıl yazılır?", options: [{ id: "a", text: "Treintiuno", correct: false }, { id: "b", text: "Treinta y uno", correct: true }, { id: "c", text: "Tres uno", correct: false }, { id: "d", text: "Treinta uno", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "28", correctAnswer: "Veintiocho" },
    { id: 11, type: "SELECT", question: "67 nasıl söylenir?", options: [{ id: "a", text: "Sesenta siete", correct: false }, { id: "b", text: "Sesenta y siete", correct: true }, { id: "c", text: "Seis siete", correct: false }, { id: "d", text: "Sesentisiete", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Cuarenta y uno", options: [{ id: "a", text: "31", correct: false }, { id: "b", text: "41", correct: true }, { id: "c", text: "51", correct: false }, { id: "d", text: "14", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Veinti_____ = 23", options: [{ id: "a", text: "dos", correct: false }, { id: "b", text: "tres", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "29", correctAnswer: "Veintinueve" },
    { id: 15, type: "SELECT", question: "82 nasıl söylenir?", options: [{ id: "a", text: "Ochenta dos", correct: false }, { id: "b", text: "Ochenta y dos", correct: true }, { id: "c", text: "Ocho dos", correct: false }, { id: "d", text: "Ochentidos", correct: false }] },
    { id: 16, type: "SELECT", question: "'Veintiséis' kaç?", options: [{ id: "a", text: "16", correct: false }, { id: "b", text: "26", correct: true }, { id: "c", text: "36", correct: false }, { id: "d", text: "62", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Sesenta y cuatro", options: [{ id: "a", text: "54", correct: false }, { id: "b", text: "64", correct: true }, { id: "c", text: "74", correct: false }, { id: "d", text: "46", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "31", correctAnswer: "Treinta y uno" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Cincuenta y _____ = 58", options: [{ id: "a", text: "siete", correct: false }, { id: "b", text: "ocho", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Veinti_____ = 26", options: [{ id: "a", text: "cinco", correct: false }, { id: "b", text: "seis", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "94", correctAnswer: "Noventa y cuatro" },
    { id: 22, type: "TRANSLATE", question: "Sayıyı yaz:", hint: "86", correctAnswer: "Ochenta y seis" },
    { id: 23, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Treinta y tres", options: [{ id: "a", text: "23", correct: false }, { id: "b", text: "33", correct: true }, { id: "c", text: "43", correct: false }, { id: "d", text: "13", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "25 öğrenci ve 32 sandalye var", correctAnswer: "Hay veinticinco estudiantes y treinta y dos sillas" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Sınıfta 29 kişiyiz", correctAnswer: "Somos veintinueve en la clase" },
];

export const unit8Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "45 + 30 = ?", options: [{ id: "a", text: "Sesenta y cinco", correct: false }, { id: "b", text: "Setenta y cinco", correct: true }, { id: "c", text: "Ochenta y cinco", correct: false }, { id: "d", text: "Cincuenta y cinco", correct: false }] },
    { id: 2, type: "SELECT", question: "50 x 2 = ?", options: [{ id: "a", text: "Noventa", correct: false }, { id: "b", text: "Cien", correct: true }, { id: "c", text: "Ochenta", correct: false }, { id: "d", text: "Setenta", correct: false }] },
    { id: 3, type: "SELECT", question: "60 / 2 = ?", options: [{ id: "a", text: "Veinte", correct: false }, { id: "b", text: "Treinta", correct: true }, { id: "c", text: "Cuarenta", correct: false }, { id: "d", text: "Veinticinco", correct: false }] },
    { id: 4, type: "SELECT", question: "100 - 23 = ?", options: [{ id: "a", text: "Sesenta y siete", correct: false }, { id: "b", text: "Setenta y siete", correct: true }, { id: "c", text: "Ochenta y siete", correct: false }, { id: "d", text: "Cincuenta y siete", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Setenta y dos", options: [{ id: "a", text: "62", correct: false }, { id: "b", text: "72", correct: true }, { id: "c", text: "82", correct: false }, { id: "d", text: "27", correct: false }] },
    { id: 6, type: "SELECT", question: "25 + 25 + 25 = ?", options: [{ id: "a", text: "Sesenta y cinco", correct: false }, { id: "b", text: "Setenta y cinco", correct: true }, { id: "c", text: "Ochenta y cinco", correct: false }, { id: "d", text: "Cincuenta y cinco", correct: false }] },
    { id: 7, type: "SELECT", question: "40 + 40 = ?", options: [{ id: "a", text: "Setenta", correct: false }, { id: "b", text: "Ochenta", correct: true }, { id: "c", text: "Noventa", correct: false }, { id: "d", text: "Cien", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Cuarenta y cinco", options: [{ id: "a", text: "35", correct: false }, { id: "b", text: "45", correct: true }, { id: "c", text: "55", correct: false }, { id: "d", text: "54", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "90 - 45 = ?", options: [{ id: "a", text: "Treinta y cinco", correct: false }, { id: "b", text: "Cuarenta y cinco", correct: true }, { id: "c", text: "Cincuenta y cinco", correct: false }, { id: "d", text: "Veinticinco", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bu 50 euro.", correctAnswer: "Esto cuesta cincuenta euros" },
    { id: 11, type: "SELECT", question: "30 + 30 + 30 = ?", options: [{ id: "a", text: "Ochenta", correct: false }, { id: "b", text: "Noventa", correct: true }, { id: "c", text: "Setenta", correct: false }, { id: "d", text: "Cien", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Setenta y dos euros", options: [{ id: "a", text: "62€", correct: false }, { id: "b", text: "72€", correct: true }, { id: "c", text: "82€", correct: false }, { id: "d", text: "27€", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El libro cuesta _____ euros. (35)", options: [{ id: "a", text: "treinta y cuatro", correct: false }, { id: "b", text: "treinta y cinco", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "88 sayfa.", correctAnswer: "Ochenta y ocho páginas" },
    { id: 15, type: "SELECT", question: "'Euro' ne demek?", options: [{ id: "a", text: "Dolar", correct: false }, { id: "b", text: "Euro", correct: true }, { id: "c", text: "Pound", correct: false }, { id: "d", text: "Lira", correct: false }] },
    { id: 16, type: "SELECT", question: "'Kilómetro' ne demek?", options: [{ id: "a", text: "Metre", correct: false }, { id: "b", text: "Kilometre", correct: true }, { id: "c", text: "Santimetre", correct: false }, { id: "d", text: "Mil", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Noventa y seis kilómetros", options: [{ id: "a", text: "69 km", correct: false }, { id: "b", text: "96 km", correct: true }, { id: "c", text: "86 km", correct: false }, { id: "d", text: "66 km", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bunun fiyatı 99 euro.", correctAnswer: "Esto cuesta noventa y nueve euros" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Hay _____ estudiantes. (74)", options: [{ id: "a", text: "setenta y tres", correct: false }, { id: "b", text: "setenta y cuatro", correct: true }] },
    { id: 20, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Ochenta y cuatro personas", options: [{ id: "a", text: "48 kişi", correct: false }, { id: "b", text: "84 kişi", correct: true }, { id: "c", text: "94 kişi", correct: false }, { id: "d", text: "74 kişi", correct: false }] },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Son _____ años. (61)", options: [{ id: "a", text: "sesenta", correct: false }, { id: "b", text: "sesenta y uno", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Otelde 85 oda var.", correctAnswer: "El hotel tiene ochenta y cinco habitaciones" },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Bu ayakkabılar 65 euro", correctAnswer: "Estos zapatos cuestan sesenta y cinco euros" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "İstanbul'dan Ankara'ya 453 kilometre", correctAnswer: "De Estambul a Ankara hay cuatrocientos cincuenta y tres kilómetros" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Toplam 97 kişi katıldı", correctAnswer: "En total participaron noventa y siete personas" },
];

export const unit8Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'¿Cuánto cuesta?' ne demek?", options: [{ id: "a", text: "Ne kadar sürer?", correct: false }, { id: "b", text: "Ne kadar (fiyat)?", correct: true }, { id: "c", text: "Kaç tane?", correct: false }, { id: "d", text: "Ne zaman?", correct: false }] },
    { id: 2, type: "SELECT", question: "'Por ciento' ne demek?", options: [{ id: "a", text: "Yüz numara", correct: false }, { id: "b", text: "Yüzde", correct: true }, { id: "c", text: "Yüze kadar", correct: false }, { id: "d", text: "Yüzden fazla", correct: false }] },
    { id: 3, type: "SELECT", question: "'Número' ne demek?", options: [{ id: "a", text: "Sayaç", correct: false }, { id: "b", text: "Sayı/Numara", correct: true }, { id: "c", text: "Sıra", correct: false }, { id: "d", text: "Miktar", correct: false }] },
    { id: 4, type: "SELECT", question: "'Mitad' ne demek?", options: [{ id: "a", text: "Çeyrek", correct: false }, { id: "b", text: "Yarı", correct: true }, { id: "c", text: "Tam", correct: false }, { id: "d", text: "Üçte bir", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Cien", options: [{ id: "a", text: "10", correct: false }, { id: "b", text: "100", correct: true }, { id: "c", text: "1000", correct: false }, { id: "d", text: "50", correct: false }] },
    { id: 6, type: "SELECT", question: "'Doble' ne demek?", options: [{ id: "a", text: "Yarı", correct: false }, { id: "b", text: "İki kat", correct: true }, { id: "c", text: "Üç kat", correct: false }, { id: "d", text: "Çeyrek", correct: false }] },
    { id: 7, type: "SELECT", question: "'Triple' ne demek?", options: [{ id: "a", text: "Yarı", correct: false }, { id: "b", text: "Üç kat", correct: true }, { id: "c", text: "İki kat", correct: false }, { id: "d", text: "Dört kat", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Cien por ciento", options: [{ id: "a", text: "%10", correct: false }, { id: "b", text: "%100", correct: true }, { id: "c", text: "%50", correct: false }, { id: "d", text: "%1000", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "77 + 23 = ?", options: [{ id: "a", text: "Noventa", correct: false }, { id: "b", text: "Cien", correct: true }, { id: "c", text: "Noventa y nueve", correct: false }, { id: "d", text: "Ochenta", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "52 yaşındayım.", correctAnswer: "Tengo cincuenta y dos años" },
    { id: 11, type: "SELECT", question: "100 / 2 = ?", options: [{ id: "a", text: "Cuarenta", correct: false }, { id: "b", text: "Cincuenta", correct: true }, { id: "c", text: "Sesenta", correct: false }, { id: "d", text: "Treinta", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "El número treinta y siete", options: [{ id: "a", text: "27 numara", correct: false }, { id: "b", text: "37 numara", correct: true }, { id: "c", text: "47 numara", correct: false }, { id: "d", text: "73 numara", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El vuelo dura _____ minutos. (45)", options: [{ id: "a", text: "cuarenta y cuatro", correct: false }, { id: "b", text: "cuarenta y cinco", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "yüzde elli", correctAnswer: "Cincuenta por ciento" },
    { id: 15, type: "SELECT", question: "50 + 50 = ?", options: [{ id: "a", text: "Noventa", correct: false }, { id: "b", text: "Cien", correct: true }, { id: "c", text: "Ochenta", correct: false }, { id: "d", text: "Setenta", correct: false }] },
    { id: 16, type: "SELECT", question: "'Cuarto' kesir olarak ne demek?", options: [{ id: "a", text: "Yarı", correct: false }, { id: "b", text: "Çeyrek", correct: true }, { id: "c", text: "Üçte bir", correct: false }, { id: "d", text: "Beşte bir", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "La mitad de cien", options: [{ id: "a", text: "25", correct: false }, { id: "b", text: "50", correct: true }, { id: "c", text: "75", correct: false }, { id: "d", text: "100", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "yüzde yirmi beş", correctAnswer: "Veinticinco por ciento" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi habitación es la número _____. (89)", options: [{ id: "a", text: "ochenta y ocho", correct: false }, { id: "b", text: "ochenta y nueve", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ de 80 es 40.", options: [{ id: "a", text: "cuarto", correct: false }, { id: "b", text: "mitad", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Oda numarası 76.", correctAnswer: "El número de la habitación es setenta y seis" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "yüzde yetmiş beş", correctAnswer: "Setenta y cinco por ciento" },
    { id: 23, type: "LISTENING", question: "Duyduğun sayıyı seç:", audioText: "Veinticinco por ciento", options: [{ id: "a", text: "%15", correct: false }, { id: "b", text: "%25", correct: true }, { id: "c", text: "%35", correct: false }, { id: "d", text: "%52", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "İndirim yüzde 30, şimdi 56 euro", correctAnswer: "El descuento es del treinta por ciento, ahora son cincuenta y seis euros" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "100 kişiden 75'i kabul etti", correctAnswer: "Setenta y cinco de cien personas aceptaron" },
];
