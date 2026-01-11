/**
 * LinguaFlow - Ünite 17: Günlük Rutinler (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit17Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Levantarse' ne demek?", options: [{ id: "a", text: "Yatmak", correct: false }, { id: "b", text: "Kalkmak", correct: true }, { id: "c", text: "Uyumak", correct: false }, { id: "d", text: "Oturmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Ducharse' ne demek?", options: [{ id: "a", text: "Yüzünü yıkamak", correct: false }, { id: "b", text: "Duş almak", correct: true }, { id: "c", text: "Banyo yapmak", correct: false }, { id: "d", text: "Yüzmek", correct: false }] },
    { id: 3, type: "SELECT", question: "'Desayunar' ne demek?", options: [{ id: "a", text: "Öğle yemeği", correct: false }, { id: "b", text: "Kahvaltı yapmak", correct: true }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Atıştırmak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Acostarse' ne demek?", options: [{ id: "a", text: "Kalkmak", correct: false }, { id: "b", text: "Yatmak", correct: true }, { id: "c", text: "Oturmak", correct: false }, { id: "d", text: "Uyumak", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Levantarse", options: [{ id: "a", text: "Yatmak", correct: false }, { id: "b", text: "Kalkmak", correct: true }, { id: "c", text: "Uyumak", correct: false }, { id: "d", text: "Dinlenmek", correct: false }] },
    { id: 6, type: "SELECT", question: "'Vestirse' ne demek?", options: [{ id: "a", text: "Soyunmak", correct: false }, { id: "b", text: "Giyinmek", correct: true }, { id: "c", text: "Yıkanmak", correct: false }, { id: "d", text: "Kurulanmak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Peinarse' ne demek?", options: [{ id: "a", text: "Yıkanmak", correct: false }, { id: "b", text: "Taranmak", correct: true }, { id: "c", text: "Makyaj yapmak", correct: false }, { id: "d", text: "Tıraş olmak", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Desayunar", options: [{ id: "a", text: "Öğle yemeği", correct: false }, { id: "b", text: "Kahvaltı yapmak", correct: true }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Atıştırmak", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Cepillarse los dientes' ne demek?", options: [{ id: "a", text: "Taranmak", correct: false }, { id: "b", text: "Dişlerini fırçalamak", correct: true }, { id: "c", text: "Yüzünü yıkamak", correct: false }, { id: "d", text: "Tıraş olmak", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Kalkmak", correctAnswer: "Levantarse" },
    { id: 11, type: "SELECT", question: "'Afeitarse' ne demek?", options: [{ id: "a", text: "Taranmak", correct: false }, { id: "b", text: "Tıraş olmak", correct: true }, { id: "c", text: "Makyaj yapmak", correct: false }, { id: "d", text: "Saç kesmek", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me levanto a las siete", options: [{ id: "a", text: "Saat altıda kalkıyorum", correct: false }, { id: "b", text: "Saat yedide kalkıyorum", correct: true }, { id: "c", text: "Saat sekizde kalkıyorum", correct: false }, { id: "d", text: "Saat yedide yatıyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Por la mañana me _____. (duş almak)", options: [{ id: "a", text: "visto", correct: false }, { id: "b", text: "ducho", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Duş almak", correctAnswer: "Ducharse" },
    { id: 15, type: "SELECT", question: "'Lavarse la cara' ne demek?", options: [{ id: "a", text: "Ellerini yıkamak", correct: false }, { id: "b", text: "Yüzünü yıkamak", correct: true }, { id: "c", text: "Dişlerini fırçalamak", correct: false }, { id: "d", text: "Saçını yıkamak", correct: false }] },
    { id: 16, type: "SELECT", question: "'Maquillarse' ne demek?", options: [{ id: "a", text: "Tıraş olmak", correct: false }, { id: "b", text: "Makyaj yapmak", correct: true }, { id: "c", text: "Taranmak", correct: false }, { id: "d", text: "Saç yapmak", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me ducho todos los días", options: [{ id: "a", text: "Her gün banyo yapıyorum", correct: false }, { id: "b", text: "Her gün duş alıyorum", correct: true }, { id: "c", text: "Her gün yüzümü yıkıyorum", correct: false }, { id: "d", text: "Her gün spor yapıyorum", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Saat yedide kalkıyorum.", correctAnswer: "Me levanto a las siete" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Después de desayunar me _____ los dientes. (fırçalamak)", options: [{ id: "a", text: "lavo", correct: false }, { id: "b", text: "cepillo", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Her gün duş alıyorum.", correctAnswer: "Me ducho todos los días" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Por la noche me _____ temprano. (yatmak)", options: [{ id: "a", text: "levanto", correct: false }, { id: "b", text: "acuesto", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Giyindikten sonra kahvaltı yapıyorum.", correctAnswer: "Después de vestirme desayuno" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me peino después de ducharme", options: [{ id: "a", text: "Duş almadan önce taranıyorum", correct: false }, { id: "b", text: "Duş aldıktan sonra taranıyorum", correct: true }, { id: "c", text: "Taranmadan önce duş alıyorum", correct: false }, { id: "d", text: "Giyindikten sonra taranıyorum", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Sabahları saat yedide kalkıyorum, duş alıyorum ve kahvaltı yapıyorum", correctAnswer: "Por las mañanas me levanto a las siete, me ducho y desayuno" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Yüzümü yıkıyorum, dişlerimi fırçalıyorum ve giyiniyorum", correctAnswer: "Me lavo la cara, me cepillo los dientes y me visto" },
];

export const unit17Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Almorzar' ne demek?", options: [{ id: "a", text: "Kahvaltı yapmak", correct: false }, { id: "b", text: "Öğle yemeği yemek", correct: true }, { id: "c", text: "Akşam yemeği yemek", correct: false }, { id: "d", text: "Atıştırmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Cenar' ne demek?", options: [{ id: "a", text: "Kahvaltı yapmak", correct: false }, { id: "b", text: "Akşam yemeği yemek", correct: true }, { id: "c", text: "Öğle yemeği yemek", correct: false }, { id: "d", text: "Ara öğün", correct: false }] },
    { id: 3, type: "SELECT", question: "'Trabajar' ne demek?", options: [{ id: "a", text: "Oynamak", correct: false }, { id: "b", text: "Çalışmak", correct: true }, { id: "c", text: "Dinlenmek", correct: false }, { id: "d", text: "Uyumak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Estudiar' ne demek?", options: [{ id: "a", text: "Okumak", correct: false }, { id: "b", text: "Ders çalışmak", correct: true }, { id: "c", text: "Yazmak", correct: false }, { id: "d", text: "Düşünmek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Almorzar", options: [{ id: "a", text: "Kahvaltı yapmak", correct: false }, { id: "b", text: "Öğle yemeği yemek", correct: true }, { id: "c", text: "Akşam yemeği yemek", correct: false }, { id: "d", text: "Atıştırmak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Descansar' ne demek?", options: [{ id: "a", text: "Çalışmak", correct: false }, { id: "b", text: "Dinlenmek", correct: true }, { id: "c", text: "Koşmak", correct: false }, { id: "d", text: "Spor yapmak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Dormir' ne demek?", options: [{ id: "a", text: "Kalkmak", correct: false }, { id: "b", text: "Uyumak", correct: true }, { id: "c", text: "Dinlenmek", correct: false }, { id: "d", text: "Rüya görmek", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cenar", options: [{ id: "a", text: "Kahvaltı yapmak", correct: false }, { id: "b", text: "Akşam yemeği yemek", correct: true }, { id: "c", text: "Öğle yemeği yemek", correct: false }, { id: "d", text: "Atıştırmak", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Volver a casa' ne demek?", options: [{ id: "a", text: "Evden çıkmak", correct: false }, { id: "b", text: "Eve dönmek", correct: true }, { id: "c", text: "Eve gitmek", correct: false }, { id: "d", text: "Evde kalmak", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Öğle yemeği yemek", correctAnswer: "Almorzar" },
    { id: 11, type: "SELECT", question: "'Salir de casa' ne demek?", options: [{ id: "a", text: "Eve girmek", correct: false }, { id: "b", text: "Evden çıkmak", correct: true }, { id: "c", text: "Eve dönmek", correct: false }, { id: "d", text: "Evde kalmak", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Almuerzo a las dos", options: [{ id: "a", text: "Saat birde öğle yemeği yiyorum", correct: false }, { id: "b", text: "Saat ikide öğle yemeği yiyorum", correct: true }, { id: "c", text: "Saat üçte öğle yemeği yiyorum", correct: false }, { id: "d", text: "Saat ikide kahvaltı yapıyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Por la tarde _____ en la oficina. (çalışmak)", options: [{ id: "a", text: "estudio", correct: false }, { id: "b", text: "trabajo", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Uyumak", correctAnswer: "Dormir" },
    { id: 15, type: "SELECT", question: "'Ver la televisión' ne demek?", options: [{ id: "a", text: "Radyo dinlemek", correct: false }, { id: "b", text: "Televizyon izlemek", correct: true }, { id: "c", text: "Film izlemek", correct: false }, { id: "d", text: "Müzik dinlemek", correct: false }] },
    { id: 16, type: "SELECT", question: "'Leer' ne demek?", options: [{ id: "a", text: "Yazmak", correct: false }, { id: "b", text: "Okumak", correct: true }, { id: "c", text: "Çizmek", correct: false }, { id: "d", text: "Düşünmek", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Duermo ocho horas", options: [{ id: "a", text: "Yedi saat uyuyorum", correct: false }, { id: "b", text: "Sekiz saat uyuyorum", correct: true }, { id: "c", text: "Dokuz saat uyuyorum", correct: false }, { id: "d", text: "Altı saat uyuyorum", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Saat altıda eve dönüyorum.", correctAnswer: "Vuelvo a casa a las seis" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Por la noche me gusta _____. (dinlenmek)", options: [{ id: "a", text: "trabajar", correct: false }, { id: "b", text: "descansar", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sekiz saat uyuyorum.", correctAnswer: "Duermo ocho horas" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Antes de dormir me gusta _____ un libro. (okumak)", options: [{ id: "a", text: "ver", correct: false }, { id: "b", text: "leer", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Akşam yemeğinden sonra televizyon izliyorum.", correctAnswer: "Después de cenar veo la televisión" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Salgo de casa a las ocho", options: [{ id: "a", text: "Saat yedide evden çıkıyorum", correct: false }, { id: "b", text: "Saat sekizde evden çıkıyorum", correct: true }, { id: "c", text: "Saat dokuzda evden çıkıyorum", correct: false }, { id: "d", text: "Saat sekizde eve dönüyorum", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Saat sekizde evden çıkıyorum, saat birde öğle yemeği yiyorum ve saat altıda eve dönüyorum", correctAnswer: "Salgo de casa a las ocho, almuerzo a la una y vuelvo a casa a las seis" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Akşamları dinleniyorum, televizyon izliyorum ve saat ona yatıyorum", correctAnswer: "Por las noches descanso, veo la televisión y me acuesto a las diez" },
];

export const unit17Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Por la mañana' ne demek?", options: [{ id: "a", text: "Öğleden sonra", correct: false }, { id: "b", text: "Sabahları", correct: true }, { id: "c", text: "Akşamları", correct: false }, { id: "d", text: "Geceleri", correct: false }] },
    { id: 2, type: "SELECT", question: "'Por la tarde' ne demek?", options: [{ id: "a", text: "Sabahları", correct: false }, { id: "b", text: "Öğleden sonra", correct: true }, { id: "c", text: "Akşamları", correct: false }, { id: "d", text: "Öğlenleri", correct: false }] },
    { id: 3, type: "SELECT", question: "'Por la noche' ne demek?", options: [{ id: "a", text: "Sabahları", correct: false }, { id: "b", text: "Akşamları/Geceleri", correct: true }, { id: "c", text: "Öğleden sonra", correct: false }, { id: "d", text: "Öğlenleri", correct: false }] },
    { id: 4, type: "SELECT", question: "'Siempre' ne demek?", options: [{ id: "a", text: "Bazen", correct: false }, { id: "b", text: "Her zaman", correct: true }, { id: "c", text: "Nadiren", correct: false }, { id: "d", text: "Hiçbir zaman", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Por la mañana", options: [{ id: "a", text: "Akşamları", correct: false }, { id: "b", text: "Sabahları", correct: true }, { id: "c", text: "Öğleden sonra", correct: false }, { id: "d", text: "Geceleri", correct: false }] },
    { id: 6, type: "SELECT", question: "'A veces' ne demek?", options: [{ id: "a", text: "Her zaman", correct: false }, { id: "b", text: "Bazen", correct: true }, { id: "c", text: "Hiçbir zaman", correct: false }, { id: "d", text: "Sık sık", correct: false }] },
    { id: 7, type: "SELECT", question: "'Nunca' ne demek?", options: [{ id: "a", text: "Her zaman", correct: false }, { id: "b", text: "Hiçbir zaman", correct: true }, { id: "c", text: "Bazen", correct: false }, { id: "d", text: "Nadiren", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Siempre", options: [{ id: "a", text: "Bazen", correct: false }, { id: "b", text: "Her zaman", correct: true }, { id: "c", text: "Nadiren", correct: false }, { id: "d", text: "Hiçbir zaman", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Normalmente' ne demek?", options: [{ id: "a", text: "Nadiren", correct: false }, { id: "b", text: "Genellikle/Normalde", correct: true }, { id: "c", text: "Bazen", correct: false }, { id: "d", text: "Hiçbir zaman", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Sabahları", correctAnswer: "Por la mañana" },
    { id: 11, type: "SELECT", question: "'Frecuentemente' ne demek?", options: [{ id: "a", text: "Nadiren", correct: false }, { id: "b", text: "Sık sık", correct: true }, { id: "c", text: "Bazen", correct: false }, { id: "d", text: "Hiçbir zaman", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Siempre desayuno en casa", options: [{ id: "a", text: "Bazen evde kahvaltı yapıyorum", correct: false }, { id: "b", text: "Her zaman evde kahvaltı yapıyorum", correct: true }, { id: "c", text: "Hiç evde kahvaltı yapmıyorum", correct: false }, { id: "d", text: "Nadiren evde kahvaltı yapıyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ me levanto temprano. (her zaman)", options: [{ id: "a", text: "A veces", correct: false }, { id: "b", text: "Siempre", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Her zaman", correctAnswer: "Siempre" },
    { id: 15, type: "SELECT", question: "'Raramente' ne demek?", options: [{ id: "a", text: "Sık sık", correct: false }, { id: "b", text: "Nadiren", correct: true }, { id: "c", text: "Bazen", correct: false }, { id: "d", text: "Her zaman", correct: false }] },
    { id: 16, type: "SELECT", question: "'Todos los días' ne demek?", options: [{ id: "a", text: "Her hafta", correct: false }, { id: "b", text: "Her gün", correct: true }, { id: "c", text: "Her ay", correct: false }, { id: "d", text: "Her yıl", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nunca llego tarde", options: [{ id: "a", text: "Bazen geç kalıyorum", correct: false }, { id: "b", text: "Hiç geç kalmam", correct: true }, { id: "c", text: "Her zaman geç kalıyorum", correct: false }, { id: "d", text: "Sık sık geç kalıyorum", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Her zaman erken kalkıyorum.", correctAnswer: "Siempre me levanto temprano" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ voy al gimnasio. (bazen)", options: [{ id: "a", text: "Siempre", correct: false }, { id: "b", text: "A veces", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Akşamları televizyon izliyorum.", correctAnswer: "Por la noche veo la televisión" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ ceno en casa. (genellikle)", options: [{ id: "a", text: "Nunca", correct: false }, { id: "b", text: "Normalmente", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Her gün spor yapıyorum.", correctAnswer: "Hago deporte todos los días" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Normalmente almuerzo a las dos", options: [{ id: "a", text: "Her zaman saat birde öğle yemeği yiyorum", correct: false }, { id: "b", text: "Genellikle saat ikide öğle yemeği yiyorum", correct: true }, { id: "c", text: "Bazen saat üçte öğle yemeği yiyorum", correct: false }, { id: "d", text: "Hiç öğle yemeği yemiyorum", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Her gün saat yedide kalkıyorum, bazen altıda kalkıyorum", correctAnswer: "Todos los días me levanto a las siete, a veces me levanto a las seis" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Genellikle akşamları dinleniyorum ama bazen arkadaşlarımla çıkıyorum", correctAnswer: "Normalmente por la noche descanso pero a veces salgo con mis amigos" },
];

export const unit17Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Temprano' ne demek?", options: [{ id: "a", text: "Geç", correct: false }, { id: "b", text: "Erken", correct: true }, { id: "c", text: "Hızlı", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    { id: 2, type: "SELECT", question: "'Tarde' ne demek?", options: [{ id: "a", text: "Erken", correct: false }, { id: "b", text: "Geç", correct: true }, { id: "c", text: "Çabuk", correct: false }, { id: "d", text: "Ağır", correct: false }] },
    { id: 3, type: "SELECT", question: "'Antes' ne demek?", options: [{ id: "a", text: "Sonra", correct: false }, { id: "b", text: "Önce", correct: true }, { id: "c", text: "Şimdi", correct: false }, { id: "d", text: "Daha", correct: false }] },
    { id: 4, type: "SELECT", question: "'Después' ne demek?", options: [{ id: "a", text: "Önce", correct: false }, { id: "b", text: "Sonra", correct: true }, { id: "c", text: "Şimdi", correct: false }, { id: "d", text: "Hâlâ", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Temprano", options: [{ id: "a", text: "Geç", correct: false }, { id: "b", text: "Erken", correct: true }, { id: "c", text: "Yavaş", correct: false }, { id: "d", text: "Hızlı", correct: false }] },
    { id: 6, type: "SELECT", question: "'Primero' ne demek?", options: [{ id: "a", text: "Sonra", correct: false }, { id: "b", text: "Önce/İlk olarak", correct: true }, { id: "c", text: "Sonunda", correct: false }, { id: "d", text: "Ortada", correct: false }] },
    { id: 7, type: "SELECT", question: "'Luego' ne demek?", options: [{ id: "a", text: "Önce", correct: false }, { id: "b", text: "Sonra/Daha sonra", correct: true }, { id: "c", text: "İlk", correct: false }, { id: "d", text: "Son", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Después", options: [{ id: "a", text: "Önce", correct: false }, { id: "b", text: "Sonra", correct: true }, { id: "c", text: "Şimdi", correct: false }, { id: "d", text: "Daha", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Finalmente' ne demek?", options: [{ id: "a", text: "İlk olarak", correct: false }, { id: "b", text: "Sonunda/En sonunda", correct: true }, { id: "c", text: "Ortada", correct: false }, { id: "d", text: "Başlangıçta", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Erken", correctAnswer: "Temprano" },
    { id: 11, type: "SELECT", question: "'Mientras' ne demek?", options: [{ id: "a", text: "Sonra", correct: false }, { id: "b", text: "...iken/Aynı zamanda", correct: true }, { id: "c", text: "Önce", correct: false }, { id: "d", text: "Sonunda", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Primero me ducho y luego desayuno", options: [{ id: "a", text: "Önce kahvaltı yapıyorum sonra duş alıyorum", correct: false }, { id: "b", text: "Önce duş alıyorum sonra kahvaltı yapıyorum", correct: true }, { id: "c", text: "Duş alırken kahvaltı yapıyorum", correct: false }, { id: "d", text: "Kahvaltı yapmadan duş alıyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ de desayunar me lavo los dientes. (sonra)", options: [{ id: "a", text: "Antes", correct: false }, { id: "b", text: "Después", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Sonra", correctAnswer: "Después" },
    { id: 15, type: "SELECT", question: "'Enseguida' ne demek?", options: [{ id: "a", text: "Daha sonra", correct: false }, { id: "b", text: "Hemen", correct: true }, { id: "c", text: "Önce", correct: false }, { id: "d", text: "Sonunda", correct: false }] },
    { id: 16, type: "SELECT", question: "'Al final' ne demek?", options: [{ id: "a", text: "Başlangıçta", correct: false }, { id: "b", text: "Sonunda", correct: true }, { id: "c", text: "Ortada", correct: false }, { id: "d", text: "İlk olarak", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Llego temprano al trabajo", options: [{ id: "a", text: "İşe geç geliyorum", correct: false }, { id: "b", text: "İşe erken geliyorum", correct: true }, { id: "c", text: "İşe zamanında geliyorum", correct: false }, { id: "d", text: "İşe yürüyerek geliyorum", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Önce duş alıyorum, sonra giyiniyorum.", correctAnswer: "Primero me ducho, luego me visto" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Me levanto _____ para no llegar tarde. (erken)", options: [{ id: "a", text: "tarde", correct: false }, { id: "b", text: "temprano", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kahvaltıdan önce duş alıyorum.", correctAnswer: "Antes de desayunar me ducho" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "_____ me peino y finalmente salgo de casa. (sonra)", options: [{ id: "a", text: "Antes", correct: false }, { id: "b", text: "Luego", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Sonunda yatıyorum.", correctAnswer: "Finalmente me acuesto" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mientras desayuno leo el periódico", options: [{ id: "a", text: "Kahvaltıdan sonra gazete okuyorum", correct: false }, { id: "b", text: "Kahvaltı yaparken gazete okuyorum", correct: true }, { id: "c", text: "Kahvaltıdan önce gazete okuyorum", correct: false }, { id: "d", text: "Gazete okuduktan sonra kahvaltı yapıyorum", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Önce kalkıyorum, sonra duş alıyorum, daha sonra giyiniyorum ve sonunda kahvaltı yapıyorum", correctAnswer: "Primero me levanto, luego me ducho, después me visto y finalmente desayuno" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Erken kalkıyorum çünkü işe geç kalmak istemiyorum, kahvaltı yaparken haber izliyorum", correctAnswer: "Me levanto temprano porque no quiero llegar tarde al trabajo, mientras desayuno veo las noticias" },
];
