/**
 * LinguaFlow - Ünite 9: Ev Odaları (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit9Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Cocina' ne demek?", options: [{ id: "a", text: "Yatak odası", correct: false }, { id: "b", text: "Mutfak", correct: true }, { id: "c", text: "Banyo", correct: false }, { id: "d", text: "Salon", correct: false }] },
    { id: 2, type: "SELECT", question: "'Salón' ne demek?", options: [{ id: "a", text: "Mutfak", correct: false }, { id: "b", text: "Oturma odası", correct: true }, { id: "c", text: "Yatak odası", correct: false }, { id: "d", text: "Banyo", correct: false }] },
    { id: 3, type: "SELECT", question: "'Dormitorio' ne demek?", options: [{ id: "a", text: "Salon", correct: false }, { id: "b", text: "Yatak odası", correct: true }, { id: "c", text: "Mutfak", correct: false }, { id: "d", text: "Koridor", correct: false }] },
    { id: 4, type: "SELECT", question: "'Baño' ne demek?", options: [{ id: "a", text: "Bahçe", correct: false }, { id: "b", text: "Banyo", correct: true }, { id: "c", text: "Garaj", correct: false }, { id: "d", text: "Teras", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cocina", options: [{ id: "a", text: "Salon", correct: false }, { id: "b", text: "Mutfak", correct: true }, { id: "c", text: "Banyo", correct: false }, { id: "d", text: "Yatak odası", correct: false }] },
    { id: 6, type: "SELECT", question: "'Jardín' ne demek?", options: [{ id: "a", text: "Garaj", correct: false }, { id: "b", text: "Bahçe", correct: true }, { id: "c", text: "Teras", correct: false }, { id: "d", text: "Koridor", correct: false }] },
    { id: 7, type: "SELECT", question: "'Garaje' ne demek?", options: [{ id: "a", text: "Bahçe", correct: false }, { id: "b", text: "Garaj", correct: true }, { id: "c", text: "Koridor", correct: false }, { id: "d", text: "Banyo", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Dormitorio", options: [{ id: "a", text: "Mutfak", correct: false }, { id: "b", text: "Yatak odası", correct: true }, { id: "c", text: "Salon", correct: false }, { id: "d", text: "Banyo", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Pasillo' ne demek?", options: [{ id: "a", text: "Teras", correct: false }, { id: "b", text: "Koridor", correct: true }, { id: "c", text: "Garaj", correct: false }, { id: "d", text: "Bahçe", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Mutfak", correctAnswer: "Cocina" },
    { id: 11, type: "SELECT", question: "'Terraza' ne demek?", options: [{ id: "a", text: "Koridor", correct: false }, { id: "b", text: "Teras", correct: true }, { id: "c", text: "Garaj", correct: false }, { id: "d", text: "Bahçe", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El baño está limpio", options: [{ id: "a", text: "Banyo kirli", correct: false }, { id: "b", text: "Banyo temiz", correct: true }, { id: "c", text: "Mutfak temiz", correct: false }, { id: "d", text: "Salon temiz", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ tiene ventana. (mutfak)", options: [{ id: "a", text: "salón", correct: false }, { id: "b", text: "cocina", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Yatak odası", correctAnswer: "Dormitorio" },
    { id: 15, type: "SELECT", question: "'Ventana' ne demek?", options: [{ id: "a", text: "Kapı", correct: false }, { id: "b", text: "Pencere", correct: true }, { id: "c", text: "Duvar", correct: false }, { id: "d", text: "Tavan", correct: false }] },
    { id: 16, type: "SELECT", question: "'Puerta' ne demek?", options: [{ id: "a", text: "Pencere", correct: false }, { id: "b", text: "Kapı", correct: true }, { id: "c", text: "Zemin", correct: false }, { id: "d", text: "Çatı", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi habitación es grande", options: [{ id: "a", text: "Odam küçük", correct: false }, { id: "b", text: "Odam büyük", correct: true }, { id: "c", text: "Evim büyük", correct: false }, { id: "d", text: "Bahçem büyük", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Mutfak büyük.", correctAnswer: "La cocina es grande" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ tiene flores. (bahçe)", options: [{ id: "a", text: "garaje", correct: false }, { id: "b", text: "jardín", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Banyoda su yok.", correctAnswer: "No hay agua en el baño" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ está en el sótano. (garaj)", options: [{ id: "a", text: "jardín", correct: false }, { id: "b", text: "garaje", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Oturma odasında bir koltuk var.", correctAnswer: "Hay un sofá en el salón" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La terraza tiene plantas", options: [{ id: "a", text: "Bahçede bitkiler var", correct: false }, { id: "b", text: "Terasta bitkiler var", correct: true }, { id: "c", text: "Balkonda çiçekler var", correct: false }, { id: "d", text: "Evde bitkiler var", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Evimde üç yatak odası var", correctAnswer: "En mi casa hay tres dormitorios" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Koridor dar ama aydınlık", correctAnswer: "El pasillo es estrecho pero luminoso" },
];

export const unit9Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Casa' ne demek?", options: [{ id: "a", text: "Apartman", correct: false }, { id: "b", text: "Ev", correct: true }, { id: "c", text: "Oda", correct: false }, { id: "d", text: "Bina", correct: false }] },
    { id: 2, type: "SELECT", question: "'Piso' ne demek?", options: [{ id: "a", text: "Ev", correct: false }, { id: "b", text: "Daire", correct: true }, { id: "c", text: "Villa", correct: false }, { id: "d", text: "Oda", correct: false }] },
    { id: 3, type: "SELECT", question: "'Habitación' ne demek?", options: [{ id: "a", text: "Ev", correct: false }, { id: "b", text: "Oda", correct: true }, { id: "c", text: "Bina", correct: false }, { id: "d", text: "Kat", correct: false }] },
    { id: 4, type: "SELECT", question: "'Techo' ne demek?", options: [{ id: "a", text: "Zemin", correct: false }, { id: "b", text: "Tavan", correct: true }, { id: "c", text: "Duvar", correct: false }, { id: "d", text: "Kapı", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Casa", options: [{ id: "a", text: "Daire", correct: false }, { id: "b", text: "Ev", correct: true }, { id: "c", text: "Oda", correct: false }, { id: "d", text: "Bina", correct: false }] },
    { id: 6, type: "SELECT", question: "'Suelo' ne demek?", options: [{ id: "a", text: "Tavan", correct: false }, { id: "b", text: "Zemin", correct: true }, { id: "c", text: "Duvar", correct: false }, { id: "d", text: "Çatı", correct: false }] },
    { id: 7, type: "SELECT", question: "'Pared' ne demek?", options: [{ id: "a", text: "Zemin", correct: false }, { id: "b", text: "Duvar", correct: true }, { id: "c", text: "Tavan", correct: false }, { id: "d", text: "Pencere", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Habitación", options: [{ id: "a", text: "Ev", correct: false }, { id: "b", text: "Oda", correct: true }, { id: "c", text: "Bina", correct: false }, { id: "d", text: "Kat", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Escalera' ne demek?", options: [{ id: "a", text: "Asansör", correct: false }, { id: "b", text: "Merdiven", correct: true }, { id: "c", text: "Koridor", correct: false }, { id: "d", text: "Balkon", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Ev", correctAnswer: "Casa" },
    { id: 11, type: "SELECT", question: "'Ascensor' ne demek?", options: [{ id: "a", text: "Merdiven", correct: false }, { id: "b", text: "Asansör", correct: true }, { id: "c", text: "Kapı", correct: false }, { id: "d", text: "Pencere", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La casa tiene dos pisos", options: [{ id: "a", text: "Evin bir katı var", correct: false }, { id: "b", text: "Evin iki katı var", correct: true }, { id: "c", text: "Evde iki oda var", correct: false }, { id: "d", text: "Evde üç kat var", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ es blanca. (duvar)", options: [{ id: "a", text: "techo", correct: false }, { id: "b", text: "pared", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Duvar", correctAnswer: "Pared" },
    { id: 15, type: "SELECT", question: "'Balcón' ne demek?", options: [{ id: "a", text: "Teras", correct: false }, { id: "b", text: "Balkon", correct: true }, { id: "c", text: "Pencere", correct: false }, { id: "d", text: "Çatı", correct: false }] },
    { id: 16, type: "SELECT", question: "'Sótano' ne demek?", options: [{ id: "a", text: "Çatı katı", correct: false }, { id: "b", text: "Bodrum", correct: true }, { id: "c", text: "Balkon", correct: false }, { id: "d", text: "Teras", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La escalera es de madera", options: [{ id: "a", text: "Merdiven metalden", correct: false }, { id: "b", text: "Merdiven ahşaptan", correct: true }, { id: "c", text: "Asansör bozuk", correct: false }, { id: "d", text: "Kapı ahşaptan", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Daire beşinci katta.", correctAnswer: "El piso está en el quinto piso" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ es de madera. (zemin)", options: [{ id: "a", text: "techo", correct: false }, { id: "b", text: "suelo", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çatı kırmızı.", correctAnswer: "El techo es rojo" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ está en el último piso. (çatı katı)", options: [{ id: "a", text: "sótano", correct: false }, { id: "b", text: "ático", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Balkon denize bakıyor.", correctAnswer: "El balcón da al mar" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vivo en el tercer piso", options: [{ id: "a", text: "İkinci katta yaşıyorum", correct: false }, { id: "b", text: "Üçüncü katta yaşıyorum", correct: true }, { id: "c", text: "Dördüncü katta yaşıyorum", correct: false }, { id: "d", text: "Birinci katta yaşıyorum", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Bodrumda garaj var", correctAnswer: "En el sótano hay un garaje" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Evimiz bahçeli ve iki katlı", correctAnswer: "Nuestra casa tiene jardín y dos pisos" },
];

export const unit9Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Limpio' ne demek?", options: [{ id: "a", text: "Kirli", correct: false }, { id: "b", text: "Temiz", correct: true }, { id: "c", text: "Büyük", correct: false }, { id: "d", text: "Küçük", correct: false }] },
    { id: 2, type: "SELECT", question: "'Sucio' ne demek?", options: [{ id: "a", text: "Temiz", correct: false }, { id: "b", text: "Kirli", correct: true }, { id: "c", text: "Geniş", correct: false }, { id: "d", text: "Dar", correct: false }] },
    { id: 3, type: "SELECT", question: "'Grande' ne demek?", options: [{ id: "a", text: "Küçük", correct: false }, { id: "b", text: "Büyük", correct: true }, { id: "c", text: "Eski", correct: false }, { id: "d", text: "Yeni", correct: false }] },
    { id: 4, type: "SELECT", question: "'Pequeño' ne demek?", options: [{ id: "a", text: "Büyük", correct: false }, { id: "b", text: "Küçük", correct: true }, { id: "c", text: "Geniş", correct: false }, { id: "d", text: "Dar", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Limpio", options: [{ id: "a", text: "Kirli", correct: false }, { id: "b", text: "Temiz", correct: true }, { id: "c", text: "Büyük", correct: false }, { id: "d", text: "Küçük", correct: false }] },
    { id: 6, type: "SELECT", question: "'Nuevo' ne demek?", options: [{ id: "a", text: "Eski", correct: false }, { id: "b", text: "Yeni", correct: true }, { id: "c", text: "Güzel", correct: false }, { id: "d", text: "Çirkin", correct: false }] },
    { id: 7, type: "SELECT", question: "'Viejo' ne demek?", options: [{ id: "a", text: "Yeni", correct: false }, { id: "b", text: "Eski", correct: true }, { id: "c", text: "Modern", correct: false }, { id: "d", text: "Klasik", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Grande", options: [{ id: "a", text: "Küçük", correct: false }, { id: "b", text: "Büyük", correct: true }, { id: "c", text: "Dar", correct: false }, { id: "d", text: "Geniş", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Luminoso' ne demek?", options: [{ id: "a", text: "Karanlık", correct: false }, { id: "b", text: "Aydınlık", correct: true }, { id: "c", text: "Dar", correct: false }, { id: "d", text: "Geniş", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Temiz", correctAnswer: "Limpio" },
    { id: 11, type: "SELECT", question: "'Oscuro' ne demek?", options: [{ id: "a", text: "Aydınlık", correct: false }, { id: "b", text: "Karanlık", correct: true }, { id: "c", text: "Büyük", correct: false }, { id: "d", text: "Küçük", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La cocina está limpia", options: [{ id: "a", text: "Mutfak kirli", correct: false }, { id: "b", text: "Mutfak temiz", correct: true }, { id: "c", text: "Banyo temiz", correct: false }, { id: "d", text: "Oda temiz", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi habitación es muy _____. (aydınlık)", options: [{ id: "a", text: "oscuro", correct: false }, { id: "b", text: "luminosa", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Büyük", correctAnswer: "Grande" },
    { id: 15, type: "SELECT", question: "'Cómodo' ne demek?", options: [{ id: "a", text: "Rahatsız", correct: false }, { id: "b", text: "Rahat", correct: true }, { id: "c", text: "Küçük", correct: false }, { id: "d", text: "Eski", correct: false }] },
    { id: 16, type: "SELECT", question: "'Amplio' ne demek?", options: [{ id: "a", text: "Dar", correct: false }, { id: "b", text: "Geniş", correct: true }, { id: "c", text: "Küçük", correct: false }, { id: "d", text: "Karanlık", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El salón es muy cómodo", options: [{ id: "a", text: "Salon çok büyük", correct: false }, { id: "b", text: "Salon çok rahat", correct: true }, { id: "c", text: "Salon çok aydınlık", correct: false }, { id: "d", text: "Salon çok yeni", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Yatak odam küçük ama rahat.", correctAnswer: "Mi dormitorio es pequeño pero cómodo" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El baño está _____. (kirli)", options: [{ id: "a", text: "limpio", correct: false }, { id: "b", text: "sucio", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Mutfak yeni ve modern.", correctAnswer: "La cocina es nueva y moderna" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El pasillo es _____ y _____. (dar, karanlık)", options: [{ id: "a", text: "amplio y luminoso", correct: false }, { id: "b", text: "estrecho y oscuro", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Oturma odası geniş ve aydınlık.", correctAnswer: "El salón es amplio y luminoso" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La casa es vieja pero bonita", options: [{ id: "a", text: "Ev yeni ama çirkin", correct: false }, { id: "b", text: "Ev eski ama güzel", correct: true }, { id: "c", text: "Ev büyük ama eski", correct: false }, { id: "d", text: "Ev küçük ama yeni", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Bahçe çok güzel ve yeşil", correctAnswer: "El jardín es muy bonito y verde" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Evim eski ama çok rahat ve aydınlık", correctAnswer: "Mi casa es vieja pero muy cómoda y luminosa" },
];

export const unit9Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Vivir' ne demek?", options: [{ id: "a", text: "Çalışmak", correct: false }, { id: "b", text: "Yaşamak", correct: true }, { id: "c", text: "Yemek", correct: false }, { id: "d", text: "Uyumak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Alquilar' ne demek?", options: [{ id: "a", text: "Satın almak", correct: false }, { id: "b", text: "Kiralamak", correct: true }, { id: "c", text: "Satmak", correct: false }, { id: "d", text: "Taşınmak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Comprar' ne demek?", options: [{ id: "a", text: "Kiralamak", correct: false }, { id: "b", text: "Satın almak", correct: true }, { id: "c", text: "Satmak", correct: false }, { id: "d", text: "Bakmak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Mudarse' ne demek?", options: [{ id: "a", text: "Yaşamak", correct: false }, { id: "b", text: "Taşınmak", correct: true }, { id: "c", text: "Kalmak", correct: false }, { id: "d", text: "Gelmek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vivir", options: [{ id: "a", text: "Çalışmak", correct: false }, { id: "b", text: "Yaşamak", correct: true }, { id: "c", text: "Uyumak", correct: false }, { id: "d", text: "Yemek", correct: false }] },
    { id: 6, type: "SELECT", question: "'Cerca' ne demek?", options: [{ id: "a", text: "Uzak", correct: false }, { id: "b", text: "Yakın", correct: true }, { id: "c", text: "İçinde", correct: false }, { id: "d", text: "Dışında", correct: false }] },
    { id: 7, type: "SELECT", question: "'Lejos' ne demek?", options: [{ id: "a", text: "Yakın", correct: false }, { id: "b", text: "Uzak", correct: true }, { id: "c", text: "Üstünde", correct: false }, { id: "d", text: "Altında", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Alquilar", options: [{ id: "a", text: "Satın almak", correct: false }, { id: "b", text: "Kiralamak", correct: true }, { id: "c", text: "Satmak", correct: false }, { id: "d", text: "Taşınmak", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Centro' ne demek?", options: [{ id: "a", text: "Kenar", correct: false }, { id: "b", text: "Merkez", correct: true }, { id: "c", text: "Dış", correct: false }, { id: "d", text: "İç", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Yaşamak", correctAnswer: "Vivir" },
    { id: 11, type: "SELECT", question: "'Afueras' ne demek?", options: [{ id: "a", text: "Merkez", correct: false }, { id: "b", text: "Varoşlar/Kenar mahalle", correct: true }, { id: "c", text: "İç", correct: false }, { id: "d", text: "Şehir içi", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vivo cerca del centro", options: [{ id: "a", text: "Merkezden uzakta yaşıyorum", correct: false }, { id: "b", text: "Merkeze yakın yaşıyorum", correct: true }, { id: "c", text: "Şehir dışında yaşıyorum", correct: false }, { id: "d", text: "Parkın yanında yaşıyorum", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi casa está _____ del metro. (yakın)", options: [{ id: "a", text: "lejos", correct: false }, { id: "b", text: "cerca", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Kiralamak", correctAnswer: "Alquilar" },
    { id: 15, type: "SELECT", question: "'Barrio' ne demek?", options: [{ id: "a", text: "Şehir", correct: false }, { id: "b", text: "Mahalle", correct: true }, { id: "c", text: "Ülke", correct: false }, { id: "d", text: "Cadde", correct: false }] },
    { id: 16, type: "SELECT", question: "'Dirección' ne demek?", options: [{ id: "a", text: "Yön", correct: false }, { id: "b", text: "Adres", correct: true }, { id: "c", text: "Sokak", correct: false }, { id: "d", text: "Numara", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me mudé el mes pasado", options: [{ id: "a", text: "Geçen yıl taşındım", correct: false }, { id: "b", text: "Geçen ay taşındım", correct: true }, { id: "c", text: "Gelecek ay taşınacağım", correct: false }, { id: "d", text: "Bu hafta taşınıyorum", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Şehir merkezinde yaşıyorum.", correctAnswer: "Vivo en el centro de la ciudad" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Quiero _____ una casa. (satın almak)", options: [{ id: "a", text: "alquilar", correct: false }, { id: "b", text: "comprar", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Dairem okulumun yakınında.", correctAnswer: "Mi piso está cerca de mi escuela" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El piso queda _____ del supermercado. (uzak)", options: [{ id: "a", text: "cerca", correct: false }, { id: "b", text: "lejos", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Gelecek hafta yeni bir eve taşınacağım.", correctAnswer: "La semana que viene me mudaré a una casa nueva" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Alquilo un piso en el centro", options: [{ id: "a", text: "Merkezde bir ev satın alıyorum", correct: false }, { id: "b", text: "Merkezde bir daire kiralıyorum", correct: true }, { id: "c", text: "Varoşlarda bir daire kiralıyorum", correct: false }, { id: "d", text: "Merkezde bir oda arıyorum", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Mahallemiz sakin ve yeşil", correctAnswer: "Nuestro barrio es tranquilo y verde" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Evim parkın yanında, metronun yakınında ve şehir merkezinde", correctAnswer: "Mi casa está al lado del parque, cerca del metro y en el centro de la ciudad" },
];
