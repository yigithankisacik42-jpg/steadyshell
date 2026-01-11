/**
 * LinguaFlow - Ünite 18: Saat (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit18Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'La hora' ne demek?", options: [{ id: "a", text: "Dakika", correct: false }, { id: "b", text: "Saat", correct: true }, { id: "c", text: "Saniye", correct: false }, { id: "d", text: "Gün", correct: false }] },
    { id: 2, type: "SELECT", question: "'Minuto' ne demek?", options: [{ id: "a", text: "Saat", correct: false }, { id: "b", text: "Dakika", correct: true }, { id: "c", text: "Saniye", correct: false }, { id: "d", text: "Hafta", correct: false }] },
    { id: 3, type: "SELECT", question: "'Media' ne demek?", options: [{ id: "a", text: "Çeyrek", correct: false }, { id: "b", text: "Buçuk/Yarım", correct: true }, { id: "c", text: "Onu geçe", correct: false }, { id: "d", text: "Ona kala", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cuarto' ne demek?", options: [{ id: "a", text: "Buçuk", correct: false }, { id: "b", text: "Çeyrek", correct: true }, { id: "c", text: "On", correct: false }, { id: "d", text: "Beş", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La una", options: [{ id: "a", text: "Saat iki", correct: false }, { id: "b", text: "Saat bir", correct: true }, { id: "c", text: "Saat üç", correct: false }, { id: "d", text: "Saat on iki", correct: false }] },
    { id: 6, type: "SELECT", question: "'En punto' ne demek?", options: [{ id: "a", text: "Geçe", correct: false }, { id: "b", text: "Tam/Başı", correct: true }, { id: "c", text: "Kala", correct: false }, { id: "d", text: "Buçukta", correct: false }] },
    { id: 7, type: "SELECT", question: "'¿Qué hora es?' ne demek?", options: [{ id: "a", text: "Ne gün?", correct: false }, { id: "b", text: "Saat kaç?", correct: true }, { id: "c", text: "Ne kadar?", correct: false }, { id: "d", text: "Kaç tane?", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Las dos", options: [{ id: "a", text: "Saat bir", correct: false }, { id: "b", text: "Saat iki", correct: true }, { id: "c", text: "Saat üç", correct: false }, { id: "d", text: "Saat dört", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Son las tres' ne demek?", options: [{ id: "a", text: "Saat iki", correct: false }, { id: "b", text: "Saat üç", correct: true }, { id: "c", text: "Saat dört", correct: false }, { id: "d", text: "Saat bir", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Saat kaç?", correctAnswer: "¿Qué hora es?" },
    { id: 11, type: "SELECT", question: "'Es la una y media' ne demek?", options: [{ id: "a", text: "Saat bir çeyrek", correct: false }, { id: "b", text: "Saat bir buçuk", correct: true }, { id: "c", text: "Saat iki buçuk", correct: false }, { id: "d", text: "Saat on iki buçuk", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Son las tres y cuarto", options: [{ id: "a", text: "Saat üç buçuk", correct: false }, { id: "b", text: "Saat üçü çeyrek geçiyor", correct: true }, { id: "c", text: "Saat üçe çeyrek var", correct: false }, { id: "d", text: "Saat dördü çeyrek geçiyor", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Son las cuatro y _____. (buçuk)", options: [{ id: "a", text: "cuarto", correct: false }, { id: "b", text: "media", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Saat iki", correctAnswer: "Son las dos" },
    { id: 15, type: "SELECT", question: "'Son las cinco menos cuarto' ne demek?", options: [{ id: "a", text: "Saat beşi çeyrek geçiyor", correct: false }, { id: "b", text: "Saat beşe çeyrek var", correct: true }, { id: "c", text: "Saat beş buçuk", correct: false }, { id: "d", text: "Saat dört buçuk", correct: false }] },
    { id: 16, type: "SELECT", question: "'Son las seis y diez' ne demek?", options: [{ id: "a", text: "Saat altıyı on geçiyor", correct: true }, { id: "b", text: "Saat altıya on var", correct: false }, { id: "c", text: "Saat altı buçuk", correct: false }, { id: "d", text: "Saat yediyi on geçiyor", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Es la una en punto", options: [{ id: "a", text: "Saat on iki tam", correct: false }, { id: "b", text: "Saat bir tam", correct: true }, { id: "c", text: "Saat iki tam", correct: false }, { id: "d", text: "Saat bir buçuk", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Saat üç buçuk.", correctAnswer: "Son las tres y media" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Son las siete _____ veinte. (geçe)", options: [{ id: "a", text: "menos", correct: false }, { id: "b", text: "y", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Saat dokuza çeyrek var.", correctAnswer: "Son las nueve menos cuarto" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Son las ocho _____ diez. (kala)", options: [{ id: "a", text: "y", correct: false }, { id: "b", text: "menos", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Saat on ikiye beş var.", correctAnswer: "Son las doce menos cinco" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Son las diez menos veinticinco", options: [{ id: "a", text: "Saat onu yirmi beş geçiyor", correct: false }, { id: "b", text: "Saat ona yirmi beş var", correct: true }, { id: "c", text: "Saat onbire çeyrek var", correct: false }, { id: "d", text: "Saat dokuz buçuk", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Şimdi saat beşi yirmi geçiyor", correctAnswer: "Ahora son las cinco y veinte" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Toplantı saat üçte, şimdi saat üçe on var, geç kalacağım", correctAnswer: "La reunión es a las tres, ahora son las tres menos diez, voy a llegar tarde" },
];

export const unit18Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Mediodía' ne demek?", options: [{ id: "a", text: "Gece yarısı", correct: false }, { id: "b", text: "Öğle", correct: true }, { id: "c", text: "Sabah", correct: false }, { id: "d", text: "Akşam", correct: false }] },
    { id: 2, type: "SELECT", question: "'Medianoche' ne demek?", options: [{ id: "a", text: "Öğle", correct: false }, { id: "b", text: "Gece yarısı", correct: true }, { id: "c", text: "Akşam", correct: false }, { id: "d", text: "Sabah", correct: false }] },
    { id: 3, type: "SELECT", question: "'De la mañana' ne demek?", options: [{ id: "a", text: "Öğleden sonra", correct: false }, { id: "b", text: "Sabah/Öğleden önce", correct: true }, { id: "c", text: "Akşam", correct: false }, { id: "d", text: "Gece", correct: false }] },
    { id: 4, type: "SELECT", question: "'De la tarde' ne demek?", options: [{ id: "a", text: "Sabah", correct: false }, { id: "b", text: "Öğleden sonra", correct: true }, { id: "c", text: "Gece", correct: false }, { id: "d", text: "Sabah erkenden", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mediodía", options: [{ id: "a", text: "Gece yarısı", correct: false }, { id: "b", text: "Öğle", correct: true }, { id: "c", text: "Akşam", correct: false }, { id: "d", text: "Sabah", correct: false }] },
    { id: 6, type: "SELECT", question: "'De la noche' ne demek?", options: [{ id: "a", text: "Sabah", correct: false }, { id: "b", text: "Gece/Akşam", correct: true }, { id: "c", text: "Öğleden sonra", correct: false }, { id: "d", text: "Öğle", correct: false }] },
    { id: 7, type: "SELECT", question: "'Reloj' ne demek?", options: [{ id: "a", text: "Takvim", correct: false }, { id: "b", text: "Saat (alet)", correct: true }, { id: "c", text: "Zamanlayıcı", correct: false }, { id: "d", text: "Alarm", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "De la noche", options: [{ id: "a", text: "Sabah", correct: false }, { id: "b", text: "Gece", correct: true }, { id: "c", text: "Öğle", correct: false }, { id: "d", text: "Akşamüstü", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'A las ocho de la mañana' ne demek?", options: [{ id: "a", text: "Akşam saat sekizde", correct: false }, { id: "b", text: "Sabah saat sekizde", correct: true }, { id: "c", text: "Gece saat sekizde", correct: false }, { id: "d", text: "Öğle saat sekizde", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Öğle", correctAnswer: "Mediodía" },
    { id: 11, type: "SELECT", question: "'¿A qué hora?' ne demek?", options: [{ id: "a", text: "Ne kadar?", correct: false }, { id: "b", text: "Saat kaçta?", correct: true }, { id: "c", text: "Saat kaç?", correct: false }, { id: "d", text: "Kaç tane?", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Son las nueve de la noche", options: [{ id: "a", text: "Sabah saat dokuz", correct: false }, { id: "b", text: "Gece saat dokuz", correct: true }, { id: "c", text: "Öğleden sonra saat dokuz", correct: false }, { id: "d", text: "Akşam saat on", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El tren sale a las siete de la _____. (sabah)", options: [{ id: "a", text: "noche", correct: false }, { id: "b", text: "mañana", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Gece yarısı", correctAnswer: "Medianoche" },
    { id: 15, type: "SELECT", question: "'Es mediodía' ne demek?", options: [{ id: "a", text: "Gece yarısı", correct: false }, { id: "b", text: "Öğle vakti", correct: true }, { id: "c", text: "Sabah erken", correct: false }, { id: "d", text: "Akşam geç", correct: false }] },
    { id: 16, type: "SELECT", question: "'Despertador' ne demek?", options: [{ id: "a", text: "Kol saati", correct: false }, { id: "b", text: "Çalar saat", correct: true }, { id: "c", text: "Duvar saati", correct: false }, { id: "d", text: "Kum saati", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La película empieza a las diez de la noche", options: [{ id: "a", text: "Film sabah onda başlıyor", correct: false }, { id: "b", text: "Film gece onda başlıyor", correct: true }, { id: "c", text: "Film dokuzda bitiyor", correct: false }, { id: "d", text: "Konser gece başlıyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Sabah saat sekizde kalkıyorum.", correctAnswer: "Me levanto a las ocho de la mañana" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El supermercado cierra a _____. (gece yarısı)", options: [{ id: "a", text: "mediodía", correct: false }, { id: "b", text: "medianoche", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Saat kaçta başlıyor?", correctAnswer: "¿A qué hora empieza?" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ suena a las seis. (çalar saat)", options: [{ id: "a", text: "reloj", correct: false }, { id: "b", text: "despertador", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Akşam saat yedide eve dönüyorum.", correctAnswer: "Vuelvo a casa a las siete de la tarde" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La tienda abre a las nueve de la mañana", options: [{ id: "a", text: "Mağaza öğleden sonra açılıyor", correct: false }, { id: "b", text: "Mağaza sabah dokuzda açılıyor", correct: true }, { id: "c", text: "Mağaza akşam kapanıyor", correct: false }, { id: "d", text: "Mağaza gece açılıyor", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Çalar saatim sabah altıda çalıyor ama ben yedide kalkıyorum", correctAnswer: "Mi despertador suena a las seis de la mañana pero me levanto a las siete" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Öğle vakti restoranda yemek yiyorum ve gece yarısına kadar çalışıyorum", correctAnswer: "A mediodía como en el restaurante y trabajo hasta medianoche" },
];

export const unit18Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Empezar' ne demek?", options: [{ id: "a", text: "Bitirmek", correct: false }, { id: "b", text: "Başlamak", correct: true }, { id: "c", text: "Devam etmek", correct: false }, { id: "d", text: "Durmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Terminar' ne demek?", options: [{ id: "a", text: "Başlamak", correct: false }, { id: "b", text: "Bitirmek", correct: true }, { id: "c", text: "Devam etmek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 3, type: "SELECT", question: "'Abrir' ne demek?", options: [{ id: "a", text: "Kapatmak", correct: false }, { id: "b", text: "Açmak", correct: true }, { id: "c", text: "Kilitlemek", correct: false }, { id: "d", text: "Kırmak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cerrar' ne demek?", options: [{ id: "a", text: "Açmak", correct: false }, { id: "b", text: "Kapatmak", correct: true }, { id: "c", text: "Kilitlemek", correct: false }, { id: "d", text: "Tamir etmek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Empezar", options: [{ id: "a", text: "Bitirmek", correct: false }, { id: "b", text: "Başlamak", correct: true }, { id: "c", text: "Beklemek", correct: false }, { id: "d", text: "Durmak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Desde' ne demek?", options: [{ id: "a", text: "...e kadar", correct: false }, { id: "b", text: "...den beri", correct: true }, { id: "c", text: "...dan önce", correct: false }, { id: "d", text: "...dan sonra", correct: false }] },
    { id: 7, type: "SELECT", question: "'Hasta' ne demek?", options: [{ id: "a", text: "...den beri", correct: false }, { id: "b", text: "...e kadar", correct: true }, { id: "c", text: "...dan önce", correct: false }, { id: "d", text: "...dan sonra", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Terminar", options: [{ id: "a", text: "Başlamak", correct: false }, { id: "b", text: "Bitirmek", correct: true }, { id: "c", text: "Devam etmek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Durar' ne demek?", options: [{ id: "a", text: "Başlamak", correct: false }, { id: "b", text: "Sürmek", correct: true }, { id: "c", text: "Bitmek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Başlamak", correctAnswer: "Empezar" },
    { id: 11, type: "SELECT", question: "'Puntual' ne demek?", options: [{ id: "a", text: "Geç", correct: false }, { id: "b", text: "Dakik/Zamanında", correct: true }, { id: "c", text: "Erken", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La clase empieza a las nueve", options: [{ id: "a", text: "Ders saat onda başlıyor", correct: false }, { id: "b", text: "Ders saat dokuzda başlıyor", correct: true }, { id: "c", text: "Ders saat sekizde bitiyor", correct: false }, { id: "d", text: "Ders saat dokuzda bitiyor", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Trabajo _____ las nueve _____ las cinco. (dokuzdan, beşe kadar)", options: [{ id: "a", text: "hasta / desde", correct: false }, { id: "b", text: "desde / hasta", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Bitirmek", correctAnswer: "Terminar" },
    { id: 15, type: "SELECT", question: "'Tarde' (saat için) ne demek?", options: [{ id: "a", text: "Erken", correct: false }, { id: "b", text: "Geç", correct: true }, { id: "c", text: "Zamanında", correct: false }, { id: "d", text: "Hızlı", correct: false }] },
    { id: 16, type: "SELECT", question: "'A tiempo' ne demek?", options: [{ id: "a", text: "Geç", correct: false }, { id: "b", text: "Zamanında", correct: true }, { id: "c", text: "Erken", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El banco cierra a las dos", options: [{ id: "a", text: "Banka saat ikide açılıyor", correct: false }, { id: "b", text: "Banka saat ikide kapanıyor", correct: true }, { id: "c", text: "Banka saat üçte kapanıyor", correct: false }, { id: "d", text: "Banka saat ikide başlıyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Mağaza saat onda açılıyor.", correctAnswer: "La tienda abre a las diez" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "La película _____ dos horas. (sürüyor)", options: [{ id: "a", text: "empieza", correct: false }, { id: "b", text: "dura", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Film saat sekizde bitiyor.", correctAnswer: "La película termina a las ocho" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Siempre llego _____. (zamanında)", options: [{ id: "a", text: "tarde", correct: false }, { id: "b", text: "a tiempo", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Sabah dokuzdan akşam altıya kadar çalışıyorum.", correctAnswer: "Trabajo desde las nueve de la mañana hasta las seis de la tarde" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La reunión dura una hora y media", options: [{ id: "a", text: "Toplantı bir saat sürüyor", correct: false }, { id: "b", text: "Toplantı bir buçuk saat sürüyor", correct: true }, { id: "c", text: "Toplantı iki saat sürüyor", correct: false }, { id: "d", text: "Toplantı yarım saat sürüyor", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Ders saat onda başlıyor ve on bir buçukta bitiyor, bir buçuk saat sürüyor", correctAnswer: "La clase empieza a las diez y termina a las once y media, dura una hora y media" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Müze sabah dokuzdan akşam yediye kadar açık, pazartesi günleri kapalı", correctAnswer: "El museo está abierto desde las nueve de la mañana hasta las siete de la tarde, los lunes está cerrado" },
];

export const unit18Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Ahora' ne demek?", options: [{ id: "a", text: "Sonra", correct: false }, { id: "b", text: "Şimdi", correct: true }, { id: "c", text: "Önce", correct: false }, { id: "d", text: "Daha sonra", correct: false }] },
    { id: 2, type: "SELECT", question: "'Ya' ne demek?", options: [{ id: "a", text: "Henüz değil", correct: false }, { id: "b", text: "Artık/Zaten", correct: true }, { id: "c", text: "Hâlâ", correct: false }, { id: "d", text: "Asla", correct: false }] },
    { id: 3, type: "SELECT", question: "'Todavía' ne demek?", options: [{ id: "a", text: "Artık", correct: false }, { id: "b", text: "Hâlâ/Henüz", correct: true }, { id: "c", text: "Asla", correct: false }, { id: "d", text: "Sonra", correct: false }] },
    { id: 4, type: "SELECT", question: "'Pronto' ne demek?", options: [{ id: "a", text: "Geç", correct: false }, { id: "b", text: "Yakında", correct: true }, { id: "c", text: "Dün", correct: false }, { id: "d", text: "Uzun süre", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ahora", options: [{ id: "a", text: "Daha sonra", correct: false }, { id: "b", text: "Şimdi", correct: true }, { id: "c", text: "Önce", correct: false }, { id: "d", text: "Sonra", correct: false }] },
    { id: 6, type: "SELECT", question: "'En seguida' ne demek?", options: [{ id: "a", text: "Daha sonra", correct: false }, { id: "b", text: "Hemen", correct: true }, { id: "c", text: "Yakında", correct: false }, { id: "d", text: "Önce", correct: false }] },
    { id: 7, type: "SELECT", question: "'Más tarde' ne demek?", options: [{ id: "a", text: "Şimdi", correct: false }, { id: "b", text: "Daha sonra", correct: true }, { id: "c", text: "Önce", correct: false }, { id: "d", text: "Hemen", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Pronto", options: [{ id: "a", text: "Geç", correct: false }, { id: "b", text: "Yakında", correct: true }, { id: "c", text: "Şimdi", correct: false }, { id: "d", text: "Dün", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Dentro de' ne demek?", options: [{ id: "a", text: "Önce", correct: false }, { id: "b", text: "...sonra/içinde", correct: true }, { id: "c", text: "Hemen", correct: false }, { id: "d", text: "Şimdi", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Şimdi", correctAnswer: "Ahora" },
    { id: 11, type: "SELECT", question: "'Hace' (zaman için) ne demek?", options: [{ id: "a", text: "...içinde", correct: false }, { id: "b", text: "...önce", correct: true }, { id: "c", text: "...sonra", correct: false }, { id: "d", text: "...beri", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Todavía no he llegado", options: [{ id: "a", text: "Artık geldim", correct: false }, { id: "b", text: "Henüz gelmedim", correct: true }, { id: "c", text: "Her zaman geliyorum", correct: false }, { id: "d", text: "Asla gelmiyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ son las tres. (şimdi)", options: [{ id: "a", text: "Después", correct: false }, { id: "b", text: "Ahora", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Yakında", correctAnswer: "Pronto" },
    { id: 15, type: "SELECT", question: "'Hoy' ne demek?", options: [{ id: "a", text: "Dün", correct: false }, { id: "b", text: "Bugün", correct: true }, { id: "c", text: "Yarın", correct: false }, { id: "d", text: "Şimdi", correct: false }] },
    { id: 16, type: "SELECT", question: "'A menudo' ne demek?", options: [{ id: "a", text: "Nadiren", correct: false }, { id: "b", text: "Sık sık", correct: true }, { id: "c", text: "Bazen", correct: false }, { id: "d", text: "Hiçbir zaman", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ya es tarde", options: [{ id: "a", text: "Henüz erken", correct: false }, { id: "b", text: "Artık geç", correct: true }, { id: "c", text: "Hâlâ erken", correct: false }, { id: "d", text: "Her zaman geç", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Artık çok geç.", correctAnswer: "Ya es muy tarde" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ no es mediodía. (henüz)", options: [{ id: "a", text: "Ya", correct: false }, { id: "b", text: "Todavía", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yakında görüşürüz.", correctAnswer: "Nos vemos pronto" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ de una hora tengo clase. (bir saat içinde)", options: [{ id: "a", text: "Hace", correct: false }, { id: "b", text: "Dentro", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "İki saat önce geldim.", correctAnswer: "Llegué hace dos horas" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Dentro de media hora empieza la reunión", options: [{ id: "a", text: "Yarım saat önce toplantı başladı", correct: false }, { id: "b", text: "Yarım saat içinde toplantı başlıyor", correct: true }, { id: "c", text: "Bir saat içinde toplantı bitiyor", correct: false }, { id: "d", text: "Birkaç dakika sonra toplantı başlıyor", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Şimdi saat üç, yarım saat içinde dersim var, hâlâ evdeyim", correctAnswer: "Ahora son las tres, dentro de media hora tengo clase y todavía estoy en casa" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "İki saat önce geldim, şimdi beklemekten yoruldum, yakında gideceğim", correctAnswer: "Llegué hace dos horas, ahora estoy cansado de esperar, pronto me voy" },
];
