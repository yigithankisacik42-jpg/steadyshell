/**
 * LinguaFlow - Ünite 7: Günler ve Aylar (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit7Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Lunes' hangi gün?", options: [{ id: "a", text: "Pazar", correct: false }, { id: "b", text: "Pazartesi", correct: true }, { id: "c", text: "Salı", correct: false }, { id: "d", text: "Çarşamba", correct: false }] },
    { id: 2, type: "SELECT", question: "'Martes' hangi gün?", options: [{ id: "a", text: "Pazartesi", correct: false }, { id: "b", text: "Salı", correct: true }, { id: "c", text: "Çarşamba", correct: false }, { id: "d", text: "Perşembe", correct: false }] },
    { id: 3, type: "SELECT", question: "'Miércoles' hangi gün?", options: [{ id: "a", text: "Salı", correct: false }, { id: "b", text: "Çarşamba", correct: true }, { id: "c", text: "Perşembe", correct: false }, { id: "d", text: "Cuma", correct: false }] },
    { id: 4, type: "SELECT", question: "'Jueves' hangi gün?", options: [{ id: "a", text: "Çarşamba", correct: false }, { id: "b", text: "Perşembe", correct: true }, { id: "c", text: "Cuma", correct: false }, { id: "d", text: "Cumartesi", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun günü seç:", audioText: "Lunes", options: [{ id: "a", text: "Pazar", correct: false }, { id: "b", text: "Pazartesi", correct: true }, { id: "c", text: "Salı", correct: false }, { id: "d", text: "Cumartesi", correct: false }] },
    { id: 6, type: "SELECT", question: "'Viernes' hangi gün?", options: [{ id: "a", text: "Perşembe", correct: false }, { id: "b", text: "Cuma", correct: true }, { id: "c", text: "Cumartesi", correct: false }, { id: "d", text: "Pazar", correct: false }] },
    { id: 7, type: "SELECT", question: "'Sábado' hangi gün?", options: [{ id: "a", text: "Cuma", correct: false }, { id: "b", text: "Cumartesi", correct: true }, { id: "c", text: "Pazar", correct: false }, { id: "d", text: "Pazartesi", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun günü seç:", audioText: "Viernes", options: [{ id: "a", text: "Perşembe", correct: false }, { id: "b", text: "Cuma", correct: true }, { id: "c", text: "Cumartesi", correct: false }, { id: "d", text: "Pazar", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Domingo' hangi gün?", options: [{ id: "a", text: "Cumartesi", correct: false }, { id: "b", text: "Pazar", correct: true }, { id: "c", text: "Pazartesi", correct: false }, { id: "d", text: "Cuma", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Pazartesi", correctAnswer: "Lunes" },
    { id: 11, type: "SELECT", question: "Haftanın kaç günü var?", options: [{ id: "a", text: "Cinco", correct: false }, { id: "b", text: "Siete", correct: true }, { id: "c", text: "Seis", correct: false }, { id: "d", text: "Diez", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun günü seç:", audioText: "Domingo", options: [{ id: "a", text: "Cumartesi", correct: false }, { id: "b", text: "Pazar", correct: true }, { id: "c", text: "Pazartesi", correct: false }, { id: "d", text: "Cuma", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Hoy es _____. (Pazartesi)", options: [{ id: "a", text: "martes", correct: false }, { id: "b", text: "lunes", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Cuma", correctAnswer: "Viernes" },
    { id: 15, type: "SELECT", question: "'Fin de semana' ne demek?", options: [{ id: "a", text: "Hafta başı", correct: false }, { id: "b", text: "Hafta sonu", correct: true }, { id: "c", text: "Hafta ortası", correct: false }, { id: "d", text: "Tüm hafta", correct: false }] },
    { id: 16, type: "SELECT", question: "Pazartesi'nin İspanyolca'da önünde hangi artikel kullanılır?", options: [{ id: "a", text: "La", correct: false }, { id: "b", text: "El", correct: true }, { id: "c", text: "Un", correct: false }, { id: "d", text: "Los", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El sábado voy al cine", options: [{ id: "a", text: "Cuma sinemaya gidiyorum", correct: false }, { id: "b", text: "Cumartesi sinemaya gidiyorum", correct: true }, { id: "c", text: "Pazar sinemaya gidiyorum", correct: false }, { id: "d", text: "Bugün sinemaya gidiyorum", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bugün cumartesi.", correctAnswer: "Hoy es sábado" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El fin de semana es _____ y domingo.", options: [{ id: "a", text: "viernes", correct: false }, { id: "b", text: "sábado", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yarın pazar.", correctAnswer: "Mañana es domingo" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ fue jueves. (Dün)", options: [{ id: "a", text: "Hoy", correct: false }, { id: "b", text: "Ayer", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Hafta sonunda ne yapıyorsun?", correctAnswer: "¿Qué haces el fin de semana?" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Los lunes trabajo", options: [{ id: "a", text: "Pazartesileri çalışırım", correct: true }, { id: "b", text: "Pazartesi çalışacağım", correct: false }, { id: "c", text: "Pazartesi çalıştım", correct: false }, { id: "d", text: "Pazartesi tatil", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Her pazartesi spor salonuna giderim", correctAnswer: "Los lunes voy al gimnasio" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Çarşamba ve cuma İspanyolca dersi var", correctAnswer: "Los miércoles y viernes hay clase de español" },
];

export const unit7Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Enero' hangi ay?", options: [{ id: "a", text: "Şubat", correct: false }, { id: "b", text: "Ocak", correct: true }, { id: "c", text: "Mart", correct: false }, { id: "d", text: "Aralık", correct: false }] },
    { id: 2, type: "SELECT", question: "'Febrero' hangi ay?", options: [{ id: "a", text: "Ocak", correct: false }, { id: "b", text: "Şubat", correct: true }, { id: "c", text: "Mart", correct: false }, { id: "d", text: "Nisan", correct: false }] },
    { id: 3, type: "SELECT", question: "'Marzo' hangi ay?", options: [{ id: "a", text: "Şubat", correct: false }, { id: "b", text: "Mart", correct: true }, { id: "c", text: "Nisan", correct: false }, { id: "d", text: "Mayıs", correct: false }] },
    { id: 4, type: "SELECT", question: "'Abril' hangi ay?", options: [{ id: "a", text: "Mart", correct: false }, { id: "b", text: "Nisan", correct: true }, { id: "c", text: "Mayıs", correct: false }, { id: "d", text: "Haziran", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğun ayı seç:", audioText: "Enero", options: [{ id: "a", text: "Aralık", correct: false }, { id: "b", text: "Ocak", correct: true }, { id: "c", text: "Şubat", correct: false }, { id: "d", text: "Mart", correct: false }] },
    { id: 6, type: "SELECT", question: "'Mayo' hangi ay?", options: [{ id: "a", text: "Nisan", correct: false }, { id: "b", text: "Mayıs", correct: true }, { id: "c", text: "Haziran", correct: false }, { id: "d", text: "Temmuz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Junio' hangi ay?", options: [{ id: "a", text: "Mayıs", correct: false }, { id: "b", text: "Haziran", correct: true }, { id: "c", text: "Temmuz", correct: false }, { id: "d", text: "Ağustos", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğun ayı seç:", audioText: "Julio", options: [{ id: "a", text: "Haziran", correct: false }, { id: "b", text: "Temmuz", correct: true }, { id: "c", text: "Ağustos", correct: false }, { id: "d", text: "Eylül", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Agosto' hangi ay?", options: [{ id: "a", text: "Temmuz", correct: false }, { id: "b", text: "Ağustos", correct: true }, { id: "c", text: "Eylül", correct: false }, { id: "d", text: "Ekim", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Ocak", correctAnswer: "Enero" },
    { id: 11, type: "SELECT", question: "'Septiembre' hangi ay?", options: [{ id: "a", text: "Ağustos", correct: false }, { id: "b", text: "Eylül", correct: true }, { id: "c", text: "Ekim", correct: false }, { id: "d", text: "Kasım", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğun ayı seç:", audioText: "Septiembre", options: [{ id: "a", text: "Ağustos", correct: false }, { id: "b", text: "Eylül", correct: true }, { id: "c", text: "Ekim", correct: false }, { id: "d", text: "Kasım", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Estamos en _____. (Aralık)", options: [{ id: "a", text: "noviembre", correct: false }, { id: "b", text: "diciembre", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Temmuz", correctAnswer: "Julio" },
    { id: 15, type: "SELECT", question: "Yılda kaç ay var?", options: [{ id: "a", text: "Diez", correct: false }, { id: "b", text: "Doce", correct: true }, { id: "c", text: "Once", correct: false }, { id: "d", text: "Trece", correct: false }] },
    { id: 16, type: "SELECT", question: "Ay için hangi edat kullanılır?", options: [{ id: "a", text: "A", correct: false }, { id: "b", text: "En", correct: true }, { id: "c", text: "De", correct: false }, { id: "d", text: "Por", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğun ayı seç:", audioText: "Octubre", options: [{ id: "a", text: "Eylül", correct: false }, { id: "b", text: "Ekim", correct: true }, { id: "c", text: "Kasım", correct: false }, { id: "d", text: "Aralık", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Mayıs ayındayız.", correctAnswer: "Estamos en mayo" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi cumpleaños es en _____. (Nisan)", options: [{ id: "a", text: "marzo", correct: false }, { id: "b", text: "abril", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Ağustos'ta tatile giderim.", correctAnswer: "Voy de vacaciones en agosto" },
    { id: 21, type: "LISTENING", question: "Duyduğun ayı seç:", audioText: "Diciembre", options: [{ id: "a", text: "Kasım", correct: false }, { id: "b", text: "Aralık", correct: true }, { id: "c", text: "Ocak", correct: false }, { id: "d", text: "Şubat", correct: false }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Haziran'da okul biter.", correctAnswer: "La escuela termina en junio" },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Kasım genellikle soğuktur", correctAnswer: "Noviembre normalmente es frío" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Eylül'de okul başlar", correctAnswer: "La escuela empieza en septiembre" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Aralık'ta Noel kutlarız", correctAnswer: "En diciembre celebramos la Navidad" },
];

export const unit7Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Hoy' ne demek?", options: [{ id: "a", text: "Yarın", correct: false }, { id: "b", text: "Bugün", correct: true }, { id: "c", text: "Dün", correct: false }, { id: "d", text: "Hafta", correct: false }] },
    { id: 2, type: "SELECT", question: "'Mañana' (gün olarak) ne demek?", options: [{ id: "a", text: "Bugün", correct: false }, { id: "b", text: "Yarın", correct: true }, { id: "c", text: "Dün", correct: false }, { id: "d", text: "Sabah", correct: false }] },
    { id: 3, type: "SELECT", question: "'Ayer' ne demek?", options: [{ id: "a", text: "Bugün", correct: false }, { id: "b", text: "Dün", correct: true }, { id: "c", text: "Yarın", correct: false }, { id: "d", text: "Geçen hafta", correct: false }] },
    { id: 4, type: "SELECT", question: "'Semana' ne demek?", options: [{ id: "a", text: "Gün", correct: false }, { id: "b", text: "Hafta", correct: true }, { id: "c", text: "Ay", correct: false }, { id: "d", text: "Yıl", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Hoy", options: [{ id: "a", text: "Dün", correct: false }, { id: "b", text: "Bugün", correct: true }, { id: "c", text: "Yarın", correct: false }, { id: "d", text: "Hafta", correct: false }] },
    { id: 6, type: "SELECT", question: "'Día' ne demek?", options: [{ id: "a", text: "Hafta", correct: false }, { id: "b", text: "Gün", correct: true }, { id: "c", text: "Ay", correct: false }, { id: "d", text: "Saat", correct: false }] },
    { id: 7, type: "SELECT", question: "'Noche' ne demek?", options: [{ id: "a", text: "Sabah", correct: false }, { id: "b", text: "Gece", correct: true }, { id: "c", text: "Öğlen", correct: false }, { id: "d", text: "Akşam", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ayer", options: [{ id: "a", text: "Bugün", correct: false }, { id: "b", text: "Dün", correct: true }, { id: "c", text: "Yarın", correct: false }, { id: "d", text: "Hafta", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Todos los días' ne demek?", options: [{ id: "a", text: "Her hafta", correct: false }, { id: "b", text: "Her gün", correct: true }, { id: "c", text: "Her ay", correct: false }, { id: "d", text: "Bazen", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bugün", correctAnswer: "Hoy" },
    { id: 11, type: "SELECT", question: "'La semana que viene' ne demek?", options: [{ id: "a", text: "Bu hafta", correct: false }, { id: "b", text: "Gelecek hafta", correct: true }, { id: "c", text: "Geçen hafta", correct: false }, { id: "d", text: "İki hafta önce", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ayer fue lunes", options: [{ id: "a", text: "Dün pazartesiydi", correct: true }, { id: "b", text: "Yarın pazartesi", correct: false }, { id: "c", text: "Bugün pazartesi", correct: false }, { id: "d", text: "Dün salıydı", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ es viernes. (Yarın)", options: [{ id: "a", text: "Hoy", correct: false }, { id: "b", text: "Mañana", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Dün", correctAnswer: "Ayer" },
    { id: 15, type: "SELECT", question: "'La semana pasada' ne demek?", options: [{ id: "a", text: "Bu hafta", correct: false }, { id: "b", text: "Geçen hafta", correct: true }, { id: "c", text: "Gelecek hafta", correct: false }, { id: "d", text: "Her hafta", correct: false }] },
    { id: 16, type: "SELECT", question: "'Tarde' ne demek?", options: [{ id: "a", text: "Sabah", correct: false }, { id: "b", text: "Öğleden sonra", correct: true }, { id: "c", text: "Gece", correct: false }, { id: "d", text: "Erken", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La semana que viene", options: [{ id: "a", text: "Bu hafta", correct: false }, { id: "b", text: "Gelecek hafta", correct: true }, { id: "c", text: "Geçen hafta", correct: false }, { id: "d", text: "İki hafta sonra", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bugün günlerden ne?", correctAnswer: "¿Qué día es hoy?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Trabajo todos los _____. (günler)", options: [{ id: "a", text: "semanas", correct: false }, { id: "b", text: "días", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "La semana _____ fue muy ocupada. (geçen)", options: [{ id: "a", text: "que viene", correct: false }, { id: "b", text: "pasada", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Dün perşembeydi.", correctAnswer: "Ayer fue jueves" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Hafta sonu ne yapacaksın?", correctAnswer: "¿Qué vas a hacer el fin de semana?" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mañana por la mañana", options: [{ id: "a", text: "Yarın akşam", correct: false }, { id: "b", text: "Yarın sabah", correct: true }, { id: "c", text: "Bugün sabah", correct: false }, { id: "d", text: "Dün sabah", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Her sabah 7'de kalkarım", correctAnswer: "Me levanto a las siete todas las mañanas" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Geçen hafta çok meşguldüm ama bu hafta boşum", correctAnswer: "La semana pasada estuve muy ocupado pero esta semana estoy libre" },
];

export const unit7Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Mes' ne demek?", options: [{ id: "a", text: "Gün", correct: false }, { id: "b", text: "Ay", correct: true }, { id: "c", text: "Hafta", correct: false }, { id: "d", text: "Yıl", correct: false }] },
    { id: 2, type: "SELECT", question: "'Año' ne demek?", options: [{ id: "a", text: "Ay", correct: false }, { id: "b", text: "Yıl", correct: true }, { id: "c", text: "Hafta", correct: false }, { id: "d", text: "Gün", correct: false }] },
    { id: 3, type: "SELECT", question: "'Fecha' ne demek?", options: [{ id: "a", text: "Gün", correct: false }, { id: "b", text: "Tarih", correct: true }, { id: "c", text: "Saat", correct: false }, { id: "d", text: "Yıl", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cumpleaños' ne demek?", options: [{ id: "a", text: "Yıldönümü", correct: false }, { id: "b", text: "Doğum günü", correct: true }, { id: "c", text: "Bayram", correct: false }, { id: "d", text: "Tatil", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Año", options: [{ id: "a", text: "Ay", correct: false }, { id: "b", text: "Yıl", correct: true }, { id: "c", text: "Hafta", correct: false }, { id: "d", text: "Gün", correct: false }] },
    { id: 6, type: "SELECT", question: "'Primero' tarihte ne demek?", options: [{ id: "a", text: "Son", correct: false }, { id: "b", text: "Birinci", correct: true }, { id: "c", text: "İkinci", correct: false }, { id: "d", text: "Üçüncü", correct: false }] },
    { id: 7, type: "SELECT", question: "'Vacaciones' ne demek?", options: [{ id: "a", text: "İş", correct: false }, { id: "b", text: "Tatil", correct: true }, { id: "c", text: "Okul", correct: false }, { id: "d", text: "Etkinlik", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Fecha", options: [{ id: "a", text: "Gün", correct: false }, { id: "b", text: "Tarih", correct: true }, { id: "c", text: "Saat", correct: false }, { id: "d", text: "Hafta", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'El año pasado' ne demek?", options: [{ id: "a", text: "Bu yıl", correct: false }, { id: "b", text: "Geçen yıl", correct: true }, { id: "c", text: "Gelecek yıl", correct: false }, { id: "d", text: "Birkaç yıl önce", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Ay", correctAnswer: "Mes" },
    { id: 11, type: "SELECT", question: "'El mes que viene' ne demek?", options: [{ id: "a", text: "Bu ay", correct: false }, { id: "b", text: "Gelecek ay", correct: true }, { id: "c", text: "Geçen ay", correct: false }, { id: "d", text: "Sonraki yıl", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El año pasado", options: [{ id: "a", text: "Bu yıl", correct: false }, { id: "b", text: "Geçen yıl", correct: true }, { id: "c", text: "Gelecek yıl", correct: false }, { id: "d", text: "Birkaç yıl önce", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ tiene 12 meses. (yıl)", options: [{ id: "a", text: "mes", correct: false }, { id: "b", text: "año", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Doğum günü", correctAnswer: "Cumpleaños" },
    { id: 15, type: "SELECT", question: "'El año que viene' ne demek?", options: [{ id: "a", text: "Bu yıl", correct: false }, { id: "b", text: "Gelecek yıl", correct: true }, { id: "c", text: "Geçen yıl", correct: false }, { id: "d", text: "İki yıl önce", correct: false }] },
    { id: 16, type: "SELECT", question: "'El próximo mes' ne demek?", options: [{ id: "a", text: "Geçen ay", correct: false }, { id: "b", text: "Gelecek/sonraki ay", correct: true }, { id: "c", text: "Geçen yıl", correct: false }, { id: "d", text: "Bu hafta", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El quince de agosto", options: [{ id: "a", text: "15 Temmuz", correct: false }, { id: "b", text: "15 Ağustos", correct: true }, { id: "c", text: "5 Ağustos", correct: false }, { id: "d", text: "15 Eylül", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Gelecek ay tatile gideceğim.", correctAnswer: "El mes que viene iré de vacaciones" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Cuál es la _____ de hoy?", options: [{ id: "a", text: "hora", correct: false }, { id: "b", text: "fecha", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Mañana es mi _____. (doğum günüm)", options: [{ id: "a", text: "aniversario", correct: false }, { id: "b", text: "cumpleaños", correct: true }] },
    { id: 21, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi cumpleaños es el diez de marzo", options: [{ id: "a", text: "Doğum günüm 10 Şubat", correct: false }, { id: "b", text: "Doğum günüm 10 Mart", correct: true }, { id: "c", text: "Doğum günüm 10 Nisan", correct: false }, { id: "d", text: "Doğum günüm 20 Mart", correct: false }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Bugün ayın kaçı?", correctAnswer: "¿A cuántos estamos?" },
    { id: 23, type: "TRANSLATE", question: "Çevir:", hint: "Bugün 15 Aralık 2024", correctAnswer: "Hoy es el quince de diciembre de dos mil veinticuatro" },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Geçen yıl İspanya'ya gittim", correctAnswer: "El año pasado fui a España" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Doğum günüm 23 Nisan, Türkiye'de çocuk bayramı", correctAnswer: "Mi cumpleaños es el veintitrés de abril, el día del niño en Turquía" },
];
