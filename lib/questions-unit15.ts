/**
 * LinguaFlow - Ünite 15: Şehir ve Yerler (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit15Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Hospital' ne demek?", options: [{ id: "a", text: "Okul", correct: false }, { id: "b", text: "Hastane", correct: true }, { id: "c", text: "Eczane", correct: false }, { id: "d", text: "Klinik", correct: false }] },
    { id: 2, type: "SELECT", question: "'Banco' ne demek?", options: [{ id: "a", text: "Park", correct: false }, { id: "b", text: "Banka", correct: true }, { id: "c", text: "Market", correct: false }, { id: "d", text: "Postane", correct: false }] },
    { id: 3, type: "SELECT", question: "'Parque' ne demek?", options: [{ id: "a", text: "Bahçe", correct: false }, { id: "b", text: "Park", correct: true }, { id: "c", text: "Orman", correct: false }, { id: "d", text: "Plaj", correct: false }] },
    { id: 4, type: "SELECT", question: "'Farmacia' ne demek?", options: [{ id: "a", text: "Hastane", correct: false }, { id: "b", text: "Eczane", correct: true }, { id: "c", text: "Klinik", correct: false }, { id: "d", text: "Market", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Hospital", options: [{ id: "a", text: "Okul", correct: false }, { id: "b", text: "Hastane", correct: true }, { id: "c", text: "Eczane", correct: false }, { id: "d", text: "Banka", correct: false }] },
    { id: 6, type: "SELECT", question: "'Supermercado' ne demek?", options: [{ id: "a", text: "Market", correct: false }, { id: "b", text: "Süpermarket", correct: true }, { id: "c", text: "Mağaza", correct: false }, { id: "d", text: "Pazar", correct: false }] },
    { id: 7, type: "SELECT", question: "'Biblioteca' ne demek?", options: [{ id: "a", text: "Kitapçı", correct: false }, { id: "b", text: "Kütüphane", correct: true }, { id: "c", text: "Müze", correct: false }, { id: "d", text: "Okul", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Parque", options: [{ id: "a", text: "Bahçe", correct: false }, { id: "b", text: "Park", correct: true }, { id: "c", text: "Orman", correct: false }, { id: "d", text: "Plaj", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Estación' ne demek?", options: [{ id: "a", text: "Havalimanı", correct: false }, { id: "b", text: "İstasyon", correct: true }, { id: "c", text: "Terminal", correct: false }, { id: "d", text: "Durak", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Hastane", correctAnswer: "Hospital" },
    { id: 11, type: "SELECT", question: "'Iglesia' ne demek?", options: [{ id: "a", text: "Cami", correct: false }, { id: "b", text: "Kilise", correct: true }, { id: "c", text: "Sinagog", correct: false }, { id: "d", text: "Tapınak", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Voy al banco", options: [{ id: "a", text: "Parka gidiyorum", correct: false }, { id: "b", text: "Bankaya gidiyorum", correct: true }, { id: "c", text: "Okula gidiyorum", correct: false }, { id: "d", text: "Eve gidiyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Voy a la _____ a comprar medicinas. (eczane)", options: [{ id: "a", text: "biblioteca", correct: false }, { id: "b", text: "farmacia", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Kütüphane", correctAnswer: "Biblioteca" },
    { id: 15, type: "SELECT", question: "'Calle' ne demek?", options: [{ id: "a", text: "Meydan", correct: false }, { id: "b", text: "Cadde/Sokak", correct: true }, { id: "c", text: "Köprü", correct: false }, { id: "d", text: "Geçit", correct: false }] },
    { id: 16, type: "SELECT", question: "'Plaza' ne demek?", options: [{ id: "a", text: "Sokak", correct: false }, { id: "b", text: "Meydan", correct: true }, { id: "c", text: "Park", correct: false }, { id: "d", text: "Cadde", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La biblioteca está cerca", options: [{ id: "a", text: "Kütüphane uzakta", correct: false }, { id: "b", text: "Kütüphane yakında", correct: true }, { id: "c", text: "Okul yakında", correct: false }, { id: "d", text: "Hastane yakında", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Hastane nerede?", correctAnswer: "¿Dónde está el hospital?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ está en el centro. (istasyon)", options: [{ id: "a", text: "calle", correct: false }, { id: "b", text: "estación", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Süpermarket büyük.", correctAnswer: "El supermercado es grande" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Hay un _____ cerca de mi casa. (park)", options: [{ id: "a", text: "calle", correct: false }, { id: "b", text: "parque", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Bankaya gidiyorum.", correctAnswer: "Voy al banco" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El hospital está en la calle principal", options: [{ id: "a", text: "Hastane ana sokakta", correct: true }, { id: "b", text: "Eczane yan sokakta", correct: false }, { id: "c", text: "Banka şehir merkezinde", correct: false }, { id: "d", text: "Okul parkın yanında", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Şehir merkezinde bir park, bir kilise ve birçok mağaza var", correctAnswer: "En el centro de la ciudad hay un parque, una iglesia y muchas tiendas" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Eczane hastanein yanında, banka ise meydanda", correctAnswer: "La farmacia está al lado del hospital y el banco está en la plaza" },
];

export const unit15Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Tienda' ne demek?", options: [{ id: "a", text: "Market", correct: false }, { id: "b", text: "Mağaza/Dükkan", correct: true }, { id: "c", text: "Restoran", correct: false }, { id: "d", text: "Otel", correct: false }] },
    { id: 2, type: "SELECT", question: "'Restaurante' ne demek?", options: [{ id: "a", text: "Kafe", correct: false }, { id: "b", text: "Restoran", correct: true }, { id: "c", text: "Bar", correct: false }, { id: "d", text: "Kantin", correct: false }] },
    { id: 3, type: "SELECT", question: "'Hotel' ne demek?", options: [{ id: "a", text: "Pansiyon", correct: false }, { id: "b", text: "Otel", correct: true }, { id: "c", text: "Hostel", correct: false }, { id: "d", text: "Motel", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cine' ne demek?", options: [{ id: "a", text: "Tiyatro", correct: false }, { id: "b", text: "Sinema", correct: true }, { id: "c", text: "Konser salonu", correct: false }, { id: "d", text: "Müze", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tienda", options: [{ id: "a", text: "Market", correct: false }, { id: "b", text: "Mağaza", correct: true }, { id: "c", text: "Restoran", correct: false }, { id: "d", text: "Otel", correct: false }] },
    { id: 6, type: "SELECT", question: "'Museo' ne demek?", options: [{ id: "a", text: "Galeri", correct: false }, { id: "b", text: "Müze", correct: true }, { id: "c", text: "Kütüphane", correct: false }, { id: "d", text: "Sergi", correct: false }] },
    { id: 7, type: "SELECT", question: "'Teatro' ne demek?", options: [{ id: "a", text: "Sinema", correct: false }, { id: "b", text: "Tiyatro", correct: true }, { id: "c", text: "Opera", correct: false }, { id: "d", text: "Konser", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Restaurante", options: [{ id: "a", text: "Kafe", correct: false }, { id: "b", text: "Restoran", correct: true }, { id: "c", text: "Bar", correct: false }, { id: "d", text: "Otel", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Cafetería' ne demek?", options: [{ id: "a", text: "Restoran", correct: false }, { id: "b", text: "Kafe/Kafeterya", correct: true }, { id: "c", text: "Bar", correct: false }, { id: "d", text: "Pastane", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Mağaza", correctAnswer: "Tienda" },
    { id: 11, type: "SELECT", question: "'Gimnasio' ne demek?", options: [{ id: "a", text: "Stadyum", correct: false }, { id: "b", text: "Spor salonu", correct: true }, { id: "c", text: "Havuz", correct: false }, { id: "d", text: "Saha", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Voy al cine esta noche", options: [{ id: "a", text: "Bu akşam tiyatroya gidiyorum", correct: false }, { id: "b", text: "Bu akşam sinemaya gidiyorum", correct: true }, { id: "c", text: "Bu akşam restorana gidiyorum", correct: false }, { id: "d", text: "Bu akşam otele gidiyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Hay un _____ nuevo en mi barrio. (restoran)", options: [{ id: "a", text: "tienda", correct: false }, { id: "b", text: "restaurante", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Sinema", correctAnswer: "Cine" },
    { id: 15, type: "SELECT", question: "'Centro comercial' ne demek?", options: [{ id: "a", text: "Şehir merkezi", correct: false }, { id: "b", text: "Alışveriş merkezi", correct: true }, { id: "c", text: "İş merkezi", correct: false }, { id: "d", text: "Kongre merkezi", correct: false }] },
    { id: 16, type: "SELECT", question: "'Mercado' ne demek?", options: [{ id: "a", text: "Süpermarket", correct: false }, { id: "b", text: "Pazar", correct: true }, { id: "c", text: "Mağaza", correct: false }, { id: "d", text: "Depo", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El museo abre a las diez", options: [{ id: "a", text: "Müze saat dokuzda açılıyor", correct: false }, { id: "b", text: "Müze saat onda açılıyor", correct: true }, { id: "c", text: "Tiyatro saat onda açılıyor", correct: false }, { id: "d", text: "Sinema saat onda açılıyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bu akşam sinemaya gidiyorum.", correctAnswer: "Esta noche voy al cine" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ está en el centro comercial. (spor salonu)", options: [{ id: "a", text: "museo", correct: false }, { id: "b", text: "gimnasio", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Müze çok ilginç.", correctAnswer: "El museo es muy interesante" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ cierra a las once. (tiyatro)", options: [{ id: "a", text: "cine", correct: false }, { id: "b", text: "teatro", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Alışveriş merkezinde birçok mağaza var.", correctAnswer: "En el centro comercial hay muchas tiendas" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El gimnasio está abierto de lunes a sábado", options: [{ id: "a", text: "Spor salonu her gün açık", correct: false }, { id: "b", text: "Spor salonu pazartesiden cumartesiye açık", correct: true }, { id: "c", text: "Havuz haftasonları açık", correct: false }, { id: "d", text: "Park her zaman açık", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Restoran otelin yanında, kafeterya ise müzenin karşısında", correctAnswer: "El restaurante está al lado del hotel y la cafetería está enfrente del museo" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Pazar sabahları pazara giderim ve taze meyve sebze alırım", correctAnswer: "Los domingos por la mañana voy al mercado y compro frutas y verduras frescas" },
];

export const unit15Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Escuela' ne demek?", options: [{ id: "a", text: "Üniversite", correct: false }, { id: "b", text: "Okul", correct: true }, { id: "c", text: "Kreş", correct: false }, { id: "d", text: "Kurs", correct: false }] },
    { id: 2, type: "SELECT", question: "'Universidad' ne demek?", options: [{ id: "a", text: "Okul", correct: false }, { id: "b", text: "Üniversite", correct: true }, { id: "c", text: "Lise", correct: false }, { id: "d", text: "Kolej", correct: false }] },
    { id: 3, type: "SELECT", question: "'Correos' ne demek?", options: [{ id: "a", text: "Banka", correct: false }, { id: "b", text: "Postane", correct: true }, { id: "c", text: "Belediye", correct: false }, { id: "d", text: "Vergi dairesi", correct: false }] },
    { id: 4, type: "SELECT", question: "'Ayuntamiento' ne demek?", options: [{ id: "a", text: "Müze", correct: false }, { id: "b", text: "Belediye", correct: true }, { id: "c", text: "Valilik", correct: false }, { id: "d", text: "Postane", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Escuela", options: [{ id: "a", text: "Üniversite", correct: false }, { id: "b", text: "Okul", correct: true }, { id: "c", text: "Kütüphane", correct: false }, { id: "d", text: "Müze", correct: false }] },
    { id: 6, type: "SELECT", question: "'Aeropuerto' ne demek?", options: [{ id: "a", text: "İstasyon", correct: false }, { id: "b", text: "Havalimanı", correct: true }, { id: "c", text: "Liman", correct: false }, { id: "d", text: "Terminal", correct: false }] },
    { id: 7, type: "SELECT", question: "'Puerto' ne demek?", options: [{ id: "a", text: "Havalimanı", correct: false }, { id: "b", text: "Liman", correct: true }, { id: "c", text: "İstasyon", correct: false }, { id: "d", text: "Terminal", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Aeropuerto", options: [{ id: "a", text: "İstasyon", correct: false }, { id: "b", text: "Havalimanı", correct: true }, { id: "c", text: "Terminal", correct: false }, { id: "d", text: "Liman", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Gasolinera' ne demek?", options: [{ id: "a", text: "Otopark", correct: false }, { id: "b", text: "Benzin istasyonu", correct: true }, { id: "c", text: "Tamirhane", correct: false }, { id: "d", text: "Oto yıkama", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Okul", correctAnswer: "Escuela" },
    { id: 11, type: "SELECT", question: "'Aparcamiento' ne demek?", options: [{ id: "a", text: "Benzinlik", correct: false }, { id: "b", text: "Otopark", correct: true }, { id: "c", text: "Tamirhane", correct: false }, { id: "d", text: "Garaje", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Voy a la universidad", options: [{ id: "a", text: "Okula gidiyorum", correct: false }, { id: "b", text: "Üniversiteye gidiyorum", correct: true }, { id: "c", text: "Kütüphaneye gidiyorum", correct: false }, { id: "d", text: "Eve gidiyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ está lejos de la ciudad. (havalimanı)", options: [{ id: "a", text: "estación", correct: false }, { id: "b", text: "aeropuerto", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Havalimanı", correctAnswer: "Aeropuerto" },
    { id: 15, type: "SELECT", question: "'Comisaría' ne demek?", options: [{ id: "a", text: "Hastane", correct: false }, { id: "b", text: "Karakol", correct: true }, { id: "c", text: "Belediye", correct: false }, { id: "d", text: "Mahkeme", correct: false }] },
    { id: 16, type: "SELECT", question: "'Bomberos' ne demek?", options: [{ id: "a", text: "Polis merkezi", correct: false }, { id: "b", text: "İtfaiye", correct: true }, { id: "c", text: "Hastane", correct: false }, { id: "d", text: "Ambulans", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Correos está cerrado hoy", options: [{ id: "a", text: "Banka bugün kapalı", correct: false }, { id: "b", text: "Postane bugün kapalı", correct: true }, { id: "c", text: "Belediye bugün kapalı", correct: false }, { id: "d", text: "Okul bugün kapalı", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Postane nerede?", correctAnswer: "¿Dónde está correos?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ está en el puerto. (liman)", options: [{ id: "a", text: "aeropuerto", correct: false }, { id: "b", text: "barco", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Belediye meydanda.", correctAnswer: "El ayuntamiento está en la plaza" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Necesito ir a la _____. (benzin istasyonu)", options: [{ id: "a", text: "aparcamiento", correct: false }, { id: "b", text: "gasolinera", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Üniversite şehir dışında.", correctAnswer: "La universidad está fuera de la ciudad" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La comisaría está al lado del ayuntamiento", options: [{ id: "a", text: "Karakol belediyenin yanında", correct: true }, { id: "b", text: "İtfaiye belediyenin yanında", correct: false }, { id: "c", text: "Hastane belediyenin yanında", correct: false }, { id: "d", text: "Postane belediyenin yanında", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Havalimanı şehir merkezinden otuz kilometre uzakta", correctAnswer: "El aeropuerto está a treinta kilómetros del centro de la ciudad" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Postaneye gidip mektup göndermem ve sonra üniversiteye gitmem gerekiyor", correctAnswer: "Tengo que ir a correos a enviar una carta y luego ir a la universidad" },
];

export const unit15Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Cerca' ne demek?", options: [{ id: "a", text: "Uzak", correct: false }, { id: "b", text: "Yakın", correct: true }, { id: "c", text: "İçinde", correct: false }, { id: "d", text: "Dışında", correct: false }] },
    { id: 2, type: "SELECT", question: "'Lejos' ne demek?", options: [{ id: "a", text: "Yakın", correct: false }, { id: "b", text: "Uzak", correct: true }, { id: "c", text: "Yanında", correct: false }, { id: "d", text: "Karşısında", correct: false }] },
    { id: 3, type: "SELECT", question: "'Enfrente' ne demek?", options: [{ id: "a", text: "Yanında", correct: false }, { id: "b", text: "Karşısında", correct: true }, { id: "c", text: "Arkasında", correct: false }, { id: "d", text: "Üstünde", correct: false }] },
    { id: 4, type: "SELECT", question: "'Al lado' ne demek?", options: [{ id: "a", text: "Karşısında", correct: false }, { id: "b", text: "Yanında", correct: true }, { id: "c", text: "Arkasında", correct: false }, { id: "d", text: "Altında", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cerca", options: [{ id: "a", text: "Uzak", correct: false }, { id: "b", text: "Yakın", correct: true }, { id: "c", text: "İçinde", correct: false }, { id: "d", text: "Dışında", correct: false }] },
    { id: 6, type: "SELECT", question: "'Detrás' ne demek?", options: [{ id: "a", text: "Önünde", correct: false }, { id: "b", text: "Arkasında", correct: true }, { id: "c", text: "Yanında", correct: false }, { id: "d", text: "Üstünde", correct: false }] },
    { id: 7, type: "SELECT", question: "'Delante' ne demek?", options: [{ id: "a", text: "Arkasında", correct: false }, { id: "b", text: "Önünde", correct: true }, { id: "c", text: "Yanında", correct: false }, { id: "d", text: "Altında", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Lejos", options: [{ id: "a", text: "Yakın", correct: false }, { id: "b", text: "Uzak", correct: true }, { id: "c", text: "Yanında", correct: false }, { id: "d", text: "Karşısında", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Entre' ne demek?", options: [{ id: "a", text: "Üstünde", correct: false }, { id: "b", text: "Arasında", correct: true }, { id: "c", text: "Altında", correct: false }, { id: "d", text: "Dışında", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Yakın", correctAnswer: "Cerca" },
    { id: 11, type: "SELECT", question: "'Esquina' ne demek?", options: [{ id: "a", text: "Köprü", correct: false }, { id: "b", text: "Köşe", correct: true }, { id: "c", text: "Kavşak", correct: false }, { id: "d", text: "Geçit", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Está al lado del banco", options: [{ id: "a", text: "Bankanın karşısında", correct: false }, { id: "b", text: "Bankanın yanında", correct: true }, { id: "c", text: "Bankanın arkasında", correct: false }, { id: "d", text: "Bankanın önünde", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El hospital está _____ de aquí. (yakın)", options: [{ id: "a", text: "lejos", correct: false }, { id: "b", text: "cerca", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Karşısında", correctAnswer: "Enfrente" },
    { id: 15, type: "SELECT", question: "'A la derecha' ne demek?", options: [{ id: "a", text: "Solda", correct: false }, { id: "b", text: "Sağda", correct: true }, { id: "c", text: "Düz", correct: false }, { id: "d", text: "Geri", correct: false }] },
    { id: 16, type: "SELECT", question: "'A la izquierda' ne demek?", options: [{ id: "a", text: "Sağda", correct: false }, { id: "b", text: "Solda", correct: true }, { id: "c", text: "Düz", correct: false }, { id: "d", text: "İleri", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Gira a la derecha", options: [{ id: "a", text: "Sola dön", correct: false }, { id: "b", text: "Sağa dön", correct: true }, { id: "c", text: "Düz git", correct: false }, { id: "d", text: "Geri dön", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Banka parkın karşısında.", correctAnswer: "El banco está enfrente del parque" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "La farmacia está _____ del hospital. (yanında)", options: [{ id: "a", text: "enfrente", correct: false }, { id: "b", text: "al lado", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sağa dön ve düz git.", correctAnswer: "Gira a la derecha y sigue recto" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "La iglesia está _____ la biblioteca y el museo. (arasında)", options: [{ id: "a", text: "delante de", correct: false }, { id: "b", text: "entre", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Okul evimden uzakta değil.", correctAnswer: "La escuela no está lejos de mi casa" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Sigue recto y luego gira a la izquierda", options: [{ id: "a", text: "Düz git sonra sağa dön", correct: false }, { id: "b", text: "Düz git sonra sola dön", correct: true }, { id: "c", text: "Sola dön sonra düz git", correct: false }, { id: "d", text: "Geri dön sonra sağa git", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Postane belediyenin arkasında, eczane ise bankanın yanında", correctAnswer: "Correos está detrás del ayuntamiento y la farmacia está al lado del banco" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Hastaneye gitmek için düz git, ikinci caddede sağa dön ve hastane solda", correctAnswer: "Para ir al hospital sigue recto, gira a la derecha en la segunda calle y el hospital está a la izquierda" },
];
