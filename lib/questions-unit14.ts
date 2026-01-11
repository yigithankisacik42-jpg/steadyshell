/**
 * LinguaFlow - Ünite 14: Meslekler (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit14Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Médico' ne demek?", options: [{ id: "a", text: "Hemşire", correct: false }, { id: "b", text: "Doktor", correct: true }, { id: "c", text: "Eczacı", correct: false }, { id: "d", text: "Diş hekimi", correct: false }] },
    { id: 2, type: "SELECT", question: "'Profesor' ne demek?", options: [{ id: "a", text: "Öğrenci", correct: false }, { id: "b", text: "Öğretmen", correct: true }, { id: "c", text: "Müdür", correct: false }, { id: "d", text: "Danışman", correct: false }] },
    { id: 3, type: "SELECT", question: "'Ingeniero' ne demek?", options: [{ id: "a", text: "Mimar", correct: false }, { id: "b", text: "Mühendis", correct: true }, { id: "c", text: "Teknisyen", correct: false }, { id: "d", text: "Bilim insanı", correct: false }] },
    { id: 4, type: "SELECT", question: "'Abogado' ne demek?", options: [{ id: "a", text: "Hakim", correct: false }, { id: "b", text: "Avukat", correct: true }, { id: "c", text: "Savcı", correct: false }, { id: "d", text: "Noter", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Médico", options: [{ id: "a", text: "Hemşire", correct: false }, { id: "b", text: "Doktor", correct: true }, { id: "c", text: "Eczacı", correct: false }, { id: "d", text: "Cerrah", correct: false }] },
    { id: 6, type: "SELECT", question: "'Enfermera' ne demek?", options: [{ id: "a", text: "Doktor", correct: false }, { id: "b", text: "Hemşire", correct: true }, { id: "c", text: "Hasta", correct: false }, { id: "d", text: "Ebe", correct: false }] },
    { id: 7, type: "SELECT", question: "'Policía' ne demek?", options: [{ id: "a", text: "Asker", correct: false }, { id: "b", text: "Polis", correct: true }, { id: "c", text: "Bekçi", correct: false }, { id: "d", text: "İtfaiyeci", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Profesor", options: [{ id: "a", text: "Öğrenci", correct: false }, { id: "b", text: "Öğretmen", correct: true }, { id: "c", text: "Müdür", correct: false }, { id: "d", text: "Danışman", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Bombero' ne demek?", options: [{ id: "a", text: "Polis", correct: false }, { id: "b", text: "İtfaiyeci", correct: true }, { id: "c", text: "Asker", correct: false }, { id: "d", text: "Bekçi", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Doktor", correctAnswer: "Médico" },
    { id: 11, type: "SELECT", question: "'Chef' ne demek?", options: [{ id: "a", text: "Garson", correct: false }, { id: "b", text: "Şef/Aşçıbaşı", correct: true }, { id: "c", text: "Barmen", correct: false }, { id: "d", text: "Temizlikçi", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Soy médico", options: [{ id: "a", text: "Ben hemşireyim", correct: false }, { id: "b", text: "Ben doktorum", correct: true }, { id: "c", text: "Ben hastayım", correct: false }, { id: "d", text: "Ben eczacıyım", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi padre es _____. (mühendis)", options: [{ id: "a", text: "médico", correct: false }, { id: "b", text: "ingeniero", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Öğretmen", correctAnswer: "Profesor" },
    { id: 15, type: "SELECT", question: "'Arquitecto' ne demek?", options: [{ id: "a", text: "Mühendis", correct: false }, { id: "b", text: "Mimar", correct: true }, { id: "c", text: "Ressam", correct: false }, { id: "d", text: "Heykeltıraş", correct: false }] },
    { id: 16, type: "SELECT", question: "'Dentista' ne demek?", options: [{ id: "a", text: "Doktor", correct: false }, { id: "b", text: "Diş hekimi", correct: true }, { id: "c", text: "Hemşire", correct: false }, { id: "d", text: "Eczacı", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi madre es profesora", options: [{ id: "a", text: "Annem doktor", correct: false }, { id: "b", text: "Annem öğretmen", correct: true }, { id: "c", text: "Annem hemşire", correct: false }, { id: "d", text: "Annem mühendis", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Ben öğretmenim.", correctAnswer: "Soy profesor" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ apaga el fuego. (itfaiyeci)", options: [{ id: "a", text: "policía", correct: false }, { id: "b", text: "bombero", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Babam avukat.", correctAnswer: "Mi padre es abogado" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ cuida a los pacientes. (hemşire)", options: [{ id: "a", text: "médica", correct: false }, { id: "b", text: "enfermera", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Mühendis olmak istiyorum.", correctAnswer: "Quiero ser ingeniero" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El bombero salva vidas", options: [{ id: "a", text: "Polis suçluları yakalar", correct: false }, { id: "b", text: "İtfaiyeci hayat kurtarır", correct: true }, { id: "c", text: "Doktor hastaları iyileştirir", correct: false }, { id: "d", text: "Asker ülkeyi korur", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Ağabeyim polis, ablam hemşire", correctAnswer: "Mi hermano es policía, mi hermana es enfermera" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Büyüyünce doktor olmak istiyorum çünkü insanlara yardım etmek istiyorum", correctAnswer: "Cuando sea mayor quiero ser médico porque quiero ayudar a la gente" },
];

export const unit14Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Cocinero' ne demek?", options: [{ id: "a", text: "Garson", correct: false }, { id: "b", text: "Aşçı", correct: true }, { id: "c", text: "Barmen", correct: false }, { id: "d", text: "Fırıncı", correct: false }] },
    { id: 2, type: "SELECT", question: "'Camarero' ne demek?", options: [{ id: "a", text: "Aşçı", correct: false }, { id: "b", text: "Garson", correct: true }, { id: "c", text: "Şef", correct: false }, { id: "d", text: "Kasiyer", correct: false }] },
    { id: 3, type: "SELECT", question: "'Vendedor' ne demek?", options: [{ id: "a", text: "Alıcı", correct: false }, { id: "b", text: "Satıcı", correct: true }, { id: "c", text: "Kasiyer", correct: false }, { id: "d", text: "Müşteri", correct: false }] },
    { id: 4, type: "SELECT", question: "'Secretario' ne demek?", options: [{ id: "a", text: "Müdür", correct: false }, { id: "b", text: "Sekreter", correct: true }, { id: "c", text: "Danışman", correct: false }, { id: "d", text: "Asistan", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cocinero", options: [{ id: "a", text: "Garson", correct: false }, { id: "b", text: "Aşçı", correct: true }, { id: "c", text: "Şef", correct: false }, { id: "d", text: "Fırıncı", correct: false }] },
    { id: 6, type: "SELECT", question: "'Peluquero' ne demek?", options: [{ id: "a", text: "Berber", correct: false }, { id: "b", text: "Kuaför", correct: true }, { id: "c", text: "Güzellik uzmanı", correct: false }, { id: "d", text: "Makyöz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Mecánico' ne demek?", options: [{ id: "a", text: "Elektrikçi", correct: false }, { id: "b", text: "Tamirci", correct: true }, { id: "c", text: "Tesisatçı", correct: false }, { id: "d", text: "Marangoz", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Camarero", options: [{ id: "a", text: "Aşçı", correct: false }, { id: "b", text: "Garson", correct: true }, { id: "c", text: "Şef", correct: false }, { id: "d", text: "Barmen", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Electricista' ne demek?", options: [{ id: "a", text: "Tamirci", correct: false }, { id: "b", text: "Elektrikçi", correct: true }, { id: "c", text: "Teknisyen", correct: false }, { id: "d", text: "Tesisatçı", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Aşçı", correctAnswer: "Cocinero" },
    { id: 11, type: "SELECT", question: "'Fontanero' ne demek?", options: [{ id: "a", text: "Elektrikçi", correct: false }, { id: "b", text: "Tesisatçı", correct: true }, { id: "c", text: "Boyacı", correct: false }, { id: "d", text: "Tamirci", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El camarero trae la comida", options: [{ id: "a", text: "Aşçı yemek pişirir", correct: false }, { id: "b", text: "Garson yemeği getirir", correct: true }, { id: "c", text: "Şef sipariş alır", correct: false }, { id: "d", text: "Kasiyer ödeme alır", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ repara coches. (tamirci)", options: [{ id: "a", text: "electricista", correct: false }, { id: "b", text: "mecánico", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Garson", correctAnswer: "Camarero" },
    { id: 15, type: "SELECT", question: "'Carpintero' ne demek?", options: [{ id: "a", text: "Boyacı", correct: false }, { id: "b", text: "Marangoz", correct: true }, { id: "c", text: "Duvarcı", correct: false }, { id: "d", text: "Tesisatçı", correct: false }] },
    { id: 16, type: "SELECT", question: "'Pintor' ne demek?", options: [{ id: "a", text: "Marangoz", correct: false }, { id: "b", text: "Boyacı/Ressam", correct: true }, { id: "c", text: "Heykeltıraş", correct: false }, { id: "d", text: "Fotoğrafçı", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El peluquero corta el pelo", options: [{ id: "a", text: "Berber sakal tıraş eder", correct: false }, { id: "b", text: "Kuaför saç keser", correct: true }, { id: "c", text: "Güzellik uzmanı makyaj yapar", correct: false }, { id: "d", text: "Stilist kıyafet seçer", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Aşçı yemek pişirir.", correctAnswer: "El cocinero cocina la comida" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ arregla las tuberías. (tesisatçı)", options: [{ id: "a", text: "electricista", correct: false }, { id: "b", text: "fontanero", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Elektrikçi kabloları tamir eder.", correctAnswer: "El electricista repara los cables" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ hace muebles. (marangoz)", options: [{ id: "a", text: "pintor", correct: false }, { id: "b", text: "carpintero", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Satıcı mağazada çalışır.", correctAnswer: "El vendedor trabaja en la tienda" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La secretaria contesta el teléfono", options: [{ id: "a", text: "Müdür toplantıya gider", correct: false }, { id: "b", text: "Sekreter telefona cevap verir", correct: true }, { id: "c", text: "Asistan dosyaları düzenler", correct: false }, { id: "d", text: "İşçi raporları yazar", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Amcam tamirci, arabamı tamir etti", correctAnswer: "Mi tío es mecánico, reparó mi coche" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Restoranda bir aşçı, iki garson ve bir kasiyer çalışıyor", correctAnswer: "En el restaurante trabajan un cocinero, dos camareros y un cajero" },
];

export const unit14Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Periodista' ne demek?", options: [{ id: "a", text: "Yazar", correct: false }, { id: "b", text: "Gazeteci", correct: true }, { id: "c", text: "Editör", correct: false }, { id: "d", text: "Sunucu", correct: false }] },
    { id: 2, type: "SELECT", question: "'Escritor' ne demek?", options: [{ id: "a", text: "Gazeteci", correct: false }, { id: "b", text: "Yazar", correct: true }, { id: "c", text: "Şair", correct: false }, { id: "d", text: "Çevirmen", correct: false }] },
    { id: 3, type: "SELECT", question: "'Actor' ne demek?", options: [{ id: "a", text: "Yönetmen", correct: false }, { id: "b", text: "Aktör/Oyuncu", correct: true }, { id: "c", text: "Prodüktör", correct: false }, { id: "d", text: "Senarist", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cantante' ne demek?", options: [{ id: "a", text: "Dansçı", correct: false }, { id: "b", text: "Şarkıcı", correct: true }, { id: "c", text: "Müzisyen", correct: false }, { id: "d", text: "DJ", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Periodista", options: [{ id: "a", text: "Yazar", correct: false }, { id: "b", text: "Gazeteci", correct: true }, { id: "c", text: "Sunucu", correct: false }, { id: "d", text: "Editör", correct: false }] },
    { id: 6, type: "SELECT", question: "'Músico' ne demek?", options: [{ id: "a", text: "Şarkıcı", correct: false }, { id: "b", text: "Müzisyen", correct: true }, { id: "c", text: "Dansçı", correct: false }, { id: "d", text: "Besteci", correct: false }] },
    { id: 7, type: "SELECT", question: "'Fotógrafo' ne demek?", options: [{ id: "a", text: "Kameraman", correct: false }, { id: "b", text: "Fotoğrafçı", correct: true }, { id: "c", text: "Editör", correct: false }, { id: "d", text: "Tasarımcı", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Actor", options: [{ id: "a", text: "Yönetmen", correct: false }, { id: "b", text: "Aktör", correct: true }, { id: "c", text: "Senarist", correct: false }, { id: "d", text: "Prodüktör", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Director' ne demek?", options: [{ id: "a", text: "Aktör", correct: false }, { id: "b", text: "Yönetmen/Müdür", correct: true }, { id: "c", text: "Prodüktör", correct: false }, { id: "d", text: "Senarist", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Gazeteci", correctAnswer: "Periodista" },
    { id: 11, type: "SELECT", question: "'Bailarín' ne demek?", options: [{ id: "a", text: "Şarkıcı", correct: false }, { id: "b", text: "Dansçı", correct: true }, { id: "c", text: "Müzisyen", correct: false }, { id: "d", text: "Jimnastikçi", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El escritor escribe libros", options: [{ id: "a", text: "Gazeteci haber yazar", correct: false }, { id: "b", text: "Yazar kitap yazar", correct: true }, { id: "c", text: "Şair şiir yazar", correct: false }, { id: "d", text: "Çevirmen çeviri yapar", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ canta canciones. (şarkıcı)", options: [{ id: "a", text: "músico", correct: false }, { id: "b", text: "cantante", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Aktör", correctAnswer: "Actor" },
    { id: 15, type: "SELECT", question: "'Científico' ne demek?", options: [{ id: "a", text: "Mühendis", correct: false }, { id: "b", text: "Bilim insanı", correct: true }, { id: "c", text: "Araştırmacı", correct: false }, { id: "d", text: "Profesör", correct: false }] },
    { id: 16, type: "SELECT", question: "'Diseñador' ne demek?", options: [{ id: "a", text: "Ressam", correct: false }, { id: "b", text: "Tasarımcı", correct: true }, { id: "c", text: "Mimar", correct: false }, { id: "d", text: "Grafiker", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La cantante tiene una voz bonita", options: [{ id: "a", text: "Müzisyen güzel çalıyor", correct: false }, { id: "b", text: "Şarkıcının güzel bir sesi var", correct: true }, { id: "c", text: "Dansçı güzel dans ediyor", correct: false }, { id: "d", text: "Aktris güzel oynuyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Şarkıcı sahneye çıkıyor.", correctAnswer: "El cantante sale al escenario" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ hace películas. (yönetmen)", options: [{ id: "a", text: "actor", correct: false }, { id: "b", text: "director", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Müzisyen gitar çalıyor.", correctAnswer: "El músico toca la guitarra" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ hace fotos. (fotoğrafçı)", options: [{ id: "a", text: "diseñador", correct: false }, { id: "b", text: "fotógrafo", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Ünlü bir aktör olmak istiyorum.", correctAnswer: "Quiero ser un actor famoso" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El científico trabaja en el laboratorio", options: [{ id: "a", text: "Mühendis ofiste çalışır", correct: false }, { id: "b", text: "Bilim insanı laboratuvarda çalışır", correct: true }, { id: "c", text: "Profesör üniversitede çalışır", correct: false }, { id: "d", text: "Araştırmacı kütüphanede çalışır", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "En sevdiğim aktör İspanyol, ama en sevdiğim şarkıcı Türk", correctAnswer: "Mi actor favorito es español, pero mi cantante favorita es turca" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Fotoğrafçı düğün için resim çekti, kameraman ise video çekti", correctAnswer: "El fotógrafo hizo fotos para la boda y el cámara grabó el vídeo" },
];

export const unit14Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Trabajar' ne demek?", options: [{ id: "a", text: "Oynamak", correct: false }, { id: "b", text: "Çalışmak", correct: true }, { id: "c", text: "Dinlenmek", correct: false }, { id: "d", text: "Uyumak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Trabajo' ne demek?", options: [{ id: "a", text: "Tatil", correct: false }, { id: "b", text: "İş", correct: true }, { id: "c", text: "Okul", correct: false }, { id: "d", text: "Ev", correct: false }] },
    { id: 3, type: "SELECT", question: "'Oficina' ne demek?", options: [{ id: "a", text: "Fabrika", correct: false }, { id: "b", text: "Ofis", correct: true }, { id: "c", text: "Mağaza", correct: false }, { id: "d", text: "Atölye", correct: false }] },
    { id: 4, type: "SELECT", question: "'Empresa' ne demek?", options: [{ id: "a", text: "Fabrika", correct: false }, { id: "b", text: "Şirket", correct: true }, { id: "c", text: "Ofis", correct: false }, { id: "d", text: "Dükkan", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Trabajar", options: [{ id: "a", text: "Dinlenmek", correct: false }, { id: "b", text: "Çalışmak", correct: true }, { id: "c", text: "Uyumak", correct: false }, { id: "d", text: "Oynamak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Jefe' ne demek?", options: [{ id: "a", text: "Çalışan", correct: false }, { id: "b", text: "Patron/Şef", correct: true }, { id: "c", text: "Sekreter", correct: false }, { id: "d", text: "Stajyer", correct: false }] },
    { id: 7, type: "SELECT", question: "'Empleado' ne demek?", options: [{ id: "a", text: "Patron", correct: false }, { id: "b", text: "Çalışan", correct: true }, { id: "c", text: "Müdür", correct: false }, { id: "d", text: "Şef", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Oficina", options: [{ id: "a", text: "Fabrika", correct: false }, { id: "b", text: "Ofis", correct: true }, { id: "c", text: "Okul", correct: false }, { id: "d", text: "Hastane", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Sueldo' ne demek?", options: [{ id: "a", text: "İkramiye", correct: false }, { id: "b", text: "Maaş", correct: true }, { id: "c", text: "Vergi", correct: false }, { id: "d", text: "Fatura", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Çalışmak", correctAnswer: "Trabajar" },
    { id: 11, type: "SELECT", question: "'Reunión' ne demek?", options: [{ id: "a", text: "Parti", correct: false }, { id: "b", text: "Toplantı", correct: true }, { id: "c", text: "Mola", correct: false }, { id: "d", text: "Öğle yemeği", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Trabajo en una oficina", options: [{ id: "a", text: "Fabrikada çalışıyorum", correct: false }, { id: "b", text: "Ofiste çalışıyorum", correct: true }, { id: "c", text: "Hastanede çalışıyorum", correct: false }, { id: "d", text: "Okulda çalışıyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ es muy amable. (patron)", options: [{ id: "a", text: "empleado", correct: false }, { id: "b", text: "jefe", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "İş", correctAnswer: "Trabajo" },
    { id: 15, type: "SELECT", question: "'Horario' ne demek?", options: [{ id: "a", text: "Takvim", correct: false }, { id: "b", text: "Çalışma saati", correct: true }, { id: "c", text: "Mola", correct: false }, { id: "d", text: "Tatil", correct: false }] },
    { id: 16, type: "SELECT", question: "'Descanso' ne demek?", options: [{ id: "a", text: "Çalışma", correct: false }, { id: "b", text: "Mola/Dinlenme", correct: true }, { id: "c", text: "Toplantı", correct: false }, { id: "d", text: "Öğle yemeği", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo una reunión a las tres", options: [{ id: "a", text: "Saat ikide bir toplantım var", correct: false }, { id: "b", text: "Saat üçte bir toplantım var", correct: true }, { id: "c", text: "Saat dörtte bir toplantım var", correct: false }, { id: "d", text: "Saat beşte bir toplantım var", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Her gün ofiste çalışıyorum.", correctAnswer: "Trabajo en la oficina todos los días" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo una _____ importante. (toplantı)", options: [{ id: "a", text: "descanso", correct: false }, { id: "b", text: "reunión", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Maaşım iyi.", correctAnswer: "Mi sueldo es bueno" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ de trabajo es de 9 a 5. (çalışma saati)", options: [{ id: "a", text: "descanso", correct: false }, { id: "b", text: "horario", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Şirkette çok çalışan var.", correctAnswer: "En la empresa hay muchos empleados" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi jefe es muy estricto pero justo", options: [{ id: "a", text: "Patronum çok nazik ve sabırlı", correct: false }, { id: "b", text: "Patronum çok katı ama adil", correct: true }, { id: "c", text: "Patronum çok komik ama ciddi", correct: false }, { id: "d", text: "Patronum çok yaşlı ama enerjik", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Her gün saat dokuzda işe başlarım ve saat beşte bitiririm", correctAnswer: "Empiezo a trabajar a las nueve y termino a las cinco todos los días" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "İşimi seviyorum çünkü patronum iyi, maaşım yeterli ve iş arkadaşlarım çok nazik", correctAnswer: "Me gusta mi trabajo porque mi jefe es bueno, mi sueldo es suficiente y mis compañeros son muy amables" },
];
