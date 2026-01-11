/**
 * LinguaFlow - Ünite 5: Yiyecekler (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit5Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Manzana' ne demek?", options: [{ id: "a", text: "Portakal", correct: false }, { id: "b", text: "Elma", correct: true }, { id: "c", text: "Muz", correct: false }, { id: "d", text: "Üzüm", correct: false }] },
    { id: 2, type: "SELECT", question: "'Pan' ne demek?", options: [{ id: "a", text: "Süt", correct: false }, { id: "b", text: "Ekmek", correct: true }, { id: "c", text: "Peynir", correct: false }, { id: "d", text: "Yumurta", correct: false }] },
    { id: 3, type: "SELECT", question: "'Queso' ne demek?", options: [{ id: "a", text: "Ekmek", correct: false }, { id: "b", text: "Peynir", correct: true }, { id: "c", text: "Süt", correct: false }, { id: "d", text: "Yoğurt", correct: false }] },
    { id: 4, type: "SELECT", question: "'Naranja' ne demek?", options: [{ id: "a", text: "Elma", correct: false }, { id: "b", text: "Portakal", correct: true }, { id: "c", text: "Limon", correct: false }, { id: "d", text: "Greyfurt", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Manzana", options: [{ id: "a", text: "Portakal", correct: false }, { id: "b", text: "Elma", correct: true }, { id: "c", text: "Muz", correct: false }, { id: "d", text: "Üzüm", correct: false }] },
    { id: 6, type: "SELECT", question: "'Huevo' ne demek?", options: [{ id: "a", text: "Tavuk", correct: false }, { id: "b", text: "Yumurta", correct: true }, { id: "c", text: "Et", correct: false }, { id: "d", text: "Balık", correct: false }] },
    { id: 7, type: "SELECT", question: "'Leche' ne demek?", options: [{ id: "a", text: "Su", correct: false }, { id: "b", text: "Süt", correct: true }, { id: "c", text: "Kahve", correct: false }, { id: "d", text: "Çay", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Queso", options: [{ id: "a", text: "Ekmek", correct: false }, { id: "b", text: "Peynir", correct: true }, { id: "c", text: "Süt", correct: false }, { id: "d", text: "Yoğurt", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Plátano' ne demek?", options: [{ id: "a", text: "Portakal", correct: false }, { id: "b", text: "Muz", correct: true }, { id: "c", text: "Kivi", correct: false }, { id: "d", text: "Ananas", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Elma", correctAnswer: "Manzana" },
    { id: 11, type: "SELECT", question: "'Carne' ne demek?", options: [{ id: "a", text: "Tavuk", correct: false }, { id: "b", text: "Et", correct: true }, { id: "c", text: "Balık", correct: false }, { id: "d", text: "Sebze", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Huevo", options: [{ id: "a", text: "Tavuk", correct: false }, { id: "b", text: "Yumurta", correct: true }, { id: "c", text: "Et", correct: false }, { id: "d", text: "Balık", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Me gusta el _____. (peynir)", options: [{ id: "a", text: "pan", correct: false }, { id: "b", text: "queso", correct: true }] },
    { id: 14, type: "SELECT", question: "'Pescado' ne demek?", options: [{ id: "a", text: "Et", correct: false }, { id: "b", text: "Balık", correct: true }, { id: "c", text: "Tavuk", correct: false }, { id: "d", text: "Karides", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ekmek", correctAnswer: "Pan" },
    { id: 16, type: "SELECT", question: "'Pollo' ne demek?", options: [{ id: "a", text: "Balık", correct: false }, { id: "b", text: "Tavuk", correct: true }, { id: "c", text: "Kuzu", correct: false }, { id: "d", text: "Sığır", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Pollo", options: [{ id: "a", text: "Balık", correct: false }, { id: "b", text: "Tavuk", correct: true }, { id: "c", text: "Et", correct: false }, { id: "d", text: "Kuzu", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Elma istiyorum.", correctAnswer: "Quiero una manzana" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "No como _____. (et)", options: [{ id: "a", text: "pescado", correct: false }, { id: "b", text: "carne", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İki yumurta lütfen.", correctAnswer: "Dos huevos, por favor" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ es muy delicioso. (tavuk)", options: [{ id: "a", text: "pescado", correct: false }, { id: "b", text: "pollo", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Tavuk çok lezzetli.", correctAnswer: "El pollo es muy delicioso" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me gusta la carne", options: [{ id: "a", text: "Balık severim", correct: false }, { id: "b", text: "Et severim", correct: true }, { id: "c", text: "Tavuk severim", correct: false }, { id: "d", text: "Sebze severim", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Kahvaltıda peynir ve ekmek yerim", correctAnswer: "Para desayunar como queso y pan" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Her gün meyve ve sebze yerim", correctAnswer: "Como fruta y verdura todos los días" },
];

export const unit5Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Tomate' ne demek?", options: [{ id: "a", text: "Patates", correct: false }, { id: "b", text: "Domates", correct: true }, { id: "c", text: "Biber", correct: false }, { id: "d", text: "Patlıcan", correct: false }] },
    { id: 2, type: "SELECT", question: "'Patata' ne demek?", options: [{ id: "a", text: "Havuç", correct: false }, { id: "b", text: "Patates", correct: true }, { id: "c", text: "Soğan", correct: false }, { id: "d", text: "Sarımsak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Lechuga' ne demek?", options: [{ id: "a", text: "Domates", correct: false }, { id: "b", text: "Marul", correct: true }, { id: "c", text: "Salatalık", correct: false }, { id: "d", text: "Havuç", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cebolla' ne demek?", options: [{ id: "a", text: "Sarımsak", correct: false }, { id: "b", text: "Soğan", correct: true }, { id: "c", text: "Pırasa", correct: false }, { id: "d", text: "Kereviz", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tomate", options: [{ id: "a", text: "Patates", correct: false }, { id: "b", text: "Domates", correct: true }, { id: "c", text: "Biber", correct: false }, { id: "d", text: "Havuç", correct: false }] },
    { id: 6, type: "SELECT", question: "'Verdura' ne demek?", options: [{ id: "a", text: "Meyve", correct: false }, { id: "b", text: "Sebze", correct: true }, { id: "c", text: "Et", correct: false }, { id: "d", text: "Tahıl", correct: false }] },
    { id: 7, type: "SELECT", question: "'Ensalada' ne demek?", options: [{ id: "a", text: "Çorba", correct: false }, { id: "b", text: "Salata", correct: true }, { id: "c", text: "Makarna", correct: false }, { id: "d", text: "Pilav", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Lechuga", options: [{ id: "a", text: "Domates", correct: false }, { id: "b", text: "Marul", correct: true }, { id: "c", text: "Salatalık", correct: false }, { id: "d", text: "Havuç", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Zanahoria' ne demek?", options: [{ id: "a", text: "Patates", correct: false }, { id: "b", text: "Havuç", correct: true }, { id: "c", text: "Kabak", correct: false }, { id: "d", text: "Patlıcan", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Salata istiyorum.", correctAnswer: "Quiero una ensalada" },
    { id: 11, type: "SELECT", question: "'Pimiento' ne demek?", options: [{ id: "a", text: "Domates", correct: false }, { id: "b", text: "Biber", correct: true }, { id: "c", text: "Kabak", correct: false }, { id: "d", text: "Fasulye", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Zanahoria", options: [{ id: "a", text: "Patates", correct: false }, { id: "b", text: "Havuç", correct: true }, { id: "c", text: "Kabak", correct: false }, { id: "d", text: "Patlıcan", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ es verde. (marul)", options: [{ id: "a", text: "tomate", correct: false }, { id: "b", text: "lechuga", correct: true }] },
    { id: 14, type: "SELECT", question: "'Ajo' ne demek?", options: [{ id: "a", text: "Soğan", correct: false }, { id: "b", text: "Sarımsak", correct: true }, { id: "c", text: "Zencefil", correct: false }, { id: "d", text: "Maydanoz", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Domates", correctAnswer: "Tomate" },
    { id: 16, type: "SELECT", question: "'Pepino' ne demek?", options: [{ id: "a", text: "Biber", correct: false }, { id: "b", text: "Salatalık", correct: true }, { id: "c", text: "Kabak", correct: false }, { id: "d", text: "Patlıcan", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Pepino", options: [{ id: "a", text: "Biber", correct: false }, { id: "b", text: "Salatalık", correct: true }, { id: "c", text: "Kabak", correct: false }, { id: "d", text: "Patlıcan", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kızarmış patates severim.", correctAnswer: "Me gustan las patatas fritas" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Las _____ son naranjas. (havuçlar)", options: [{ id: "a", text: "patatas", correct: false }, { id: "b", text: "zanahorias", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ es verde. (salatalık)", options: [{ id: "a", text: "tomate", correct: false }, { id: "b", text: "pepino", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Kırmızı biber daha tatlı.", correctAnswer: "El pimiento rojo es más dulce" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Sebzeler sağlıklıdır.", correctAnswer: "Las verduras son saludables" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me gustan las verduras", options: [{ id: "a", text: "Meyve severim", correct: false }, { id: "b", text: "Sebze severim", correct: true }, { id: "c", text: "Et severim", correct: false }, { id: "d", text: "Balık severim", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Salatada domates, marul ve salatalık var", correctAnswer: "La ensalada tiene tomate, lechuga y pepino" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Soğan ve sarımsak çorbaya lezzet katar", correctAnswer: "La cebolla y el ajo dan sabor a la sopa" },
];

export const unit5Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Desayuno' ne demek?", options: [{ id: "a", text: "Öğle yemeği", correct: false }, { id: "b", text: "Kahvaltı", correct: true }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Atıştırmalık", correct: false }] },
    { id: 2, type: "SELECT", question: "'Almuerzo' ne demek?", options: [{ id: "a", text: "Kahvaltı", correct: false }, { id: "b", text: "Öğle yemeği", correct: true }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Tatlı", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cena' ne demek?", options: [{ id: "a", text: "Kahvaltı", correct: false }, { id: "b", text: "Akşam yemeği", correct: true }, { id: "c", text: "Öğle yemeği", correct: false }, { id: "d", text: "Brunch", correct: false }] },
    { id: 4, type: "SELECT", question: "'Sopa' ne demek?", options: [{ id: "a", text: "Salata", correct: false }, { id: "b", text: "Çorba", correct: true }, { id: "c", text: "Pilav", correct: false }, { id: "d", text: "Makarna", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Desayuno", options: [{ id: "a", text: "Öğle yemeği", correct: false }, { id: "b", text: "Kahvaltı", correct: true }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Tatlı", correct: false }] },
    { id: 6, type: "SELECT", question: "'Delicioso' ne demek?", options: [{ id: "a", text: "Tatsız", correct: false }, { id: "b", text: "Lezzetli", correct: true }, { id: "c", text: "Tuzlu", correct: false }, { id: "d", text: "Acı", correct: false }] },
    { id: 7, type: "SELECT", question: "'Hambre' ne demek?", options: [{ id: "a", text: "Susuzluk", correct: false }, { id: "b", text: "Açlık", correct: true }, { id: "c", text: "Yorgunluk", correct: false }, { id: "d", text: "Mutluluk", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La cena", options: [{ id: "a", text: "Kahvaltı", correct: false }, { id: "b", text: "Akşam yemeği", correct: true }, { id: "c", text: "Öğle yemeği", correct: false }, { id: "d", text: "Atıştırma", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Dulce' ne demek?", options: [{ id: "a", text: "Tuzlu", correct: false }, { id: "b", text: "Tatlı", correct: true }, { id: "c", text: "Acı", correct: false }, { id: "d", text: "Ekşi", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Acıktım.", correctAnswer: "Tengo hambre" },
    { id: 11, type: "SELECT", question: "'Picante' ne demek?", options: [{ id: "a", text: "Tatlı", correct: false }, { id: "b", text: "Baharatlı/Acı", correct: true }, { id: "c", text: "Tuzlu", correct: false }, { id: "d", text: "Tatsız", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo hambre", options: [{ id: "a", text: "Susadım", correct: false }, { id: "b", text: "Acıktım", correct: true }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Hasta değilim", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ es a las ocho. (akşam yemeği)", options: [{ id: "a", text: "almuerzo", correct: false }, { id: "b", text: "cena", correct: true }] },
    { id: 14, type: "SELECT", question: "'Ácido' ne demek?", options: [{ id: "a", text: "Tatlı", correct: false }, { id: "b", text: "Ekşi", correct: true }, { id: "c", text: "Tuzlu", correct: false }, { id: "d", text: "Acı", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Çorba çok sıcak.", correctAnswer: "La sopa está muy caliente" },
    { id: 16, type: "SELECT", question: "'Salado' ne demek?", options: [{ id: "a", text: "Tatlı", correct: false }, { id: "b", text: "Tuzlu", correct: true }, { id: "c", text: "Acı", correct: false }, { id: "d", text: "Ekşi", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Está salado", options: [{ id: "a", text: "Tatlı", correct: false }, { id: "b", text: "Tuzlu", correct: true }, { id: "c", text: "Acı", correct: false }, { id: "d", text: "Ekşi", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kahvaltıda ne yersin?", correctAnswer: "¿Qué comes para desayunar?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo mucha _____. (açlık)", options: [{ id: "a", text: "sed", correct: false }, { id: "b", text: "hambre", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "El limón es _____. (ekşi)", options: [{ id: "a", text: "dulce", correct: false }, { id: "b", text: "ácido", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Paella çok lezzetli.", correctAnswer: "La paella es muy deliciosa" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Bu yemek çok baharatlı.", correctAnswer: "Esta comida es muy picante" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Qué quieres comer?", options: [{ id: "a", text: "Ne içmek istersin?", correct: false }, { id: "b", text: "Ne yemek istersin?", correct: true }, { id: "c", text: "Ne yapmak istersin?", correct: false }, { id: "d", text: "Nereye gitmek istersin?", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Öğle yemeği saat birde", correctAnswer: "El almuerzo es a la una" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Bu yemek çok tuzlu, daha az tuz lütfen", correctAnswer: "Esta comida está muy salada, menos sal por favor" },
];

export const unit5Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Fruta' ne demek?", options: [{ id: "a", text: "Sebze", correct: false }, { id: "b", text: "Meyve", correct: true }, { id: "c", text: "Et", correct: false }, { id: "d", text: "Tahıl", correct: false }] },
    { id: 2, type: "SELECT", question: "'Fresa' ne demek?", options: [{ id: "a", text: "Üzüm", correct: false }, { id: "b", text: "Çilek", correct: true }, { id: "c", text: "Ahududu", correct: false }, { id: "d", text: "Böğürtlen", correct: false }] },
    { id: 3, type: "SELECT", question: "'Uva' ne demek?", options: [{ id: "a", text: "Çilek", correct: false }, { id: "b", text: "Üzüm", correct: true }, { id: "c", text: "Karpuz", correct: false }, { id: "d", text: "Kavun", correct: false }] },
    { id: 4, type: "SELECT", question: "'Sandía' ne demek?", options: [{ id: "a", text: "Kavun", correct: false }, { id: "b", text: "Karpuz", correct: true }, { id: "c", text: "Ananas", correct: false }, { id: "d", text: "Mango", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Fresa", options: [{ id: "a", text: "Üzüm", correct: false }, { id: "b", text: "Çilek", correct: true }, { id: "c", text: "Kiraz", correct: false }, { id: "d", text: "Şeftali", correct: false }] },
    { id: 6, type: "SELECT", question: "'Limón' ne demek?", options: [{ id: "a", text: "Portakal", correct: false }, { id: "b", text: "Limon", correct: true }, { id: "c", text: "Greyfurt", correct: false }, { id: "d", text: "Mandalina", correct: false }] },
    { id: 7, type: "SELECT", question: "'Melocotón' ne demek?", options: [{ id: "a", text: "Erik", correct: false }, { id: "b", text: "Şeftali", correct: true }, { id: "c", text: "Kayısı", correct: false }, { id: "d", text: "Nektarin", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Uva", options: [{ id: "a", text: "Çilek", correct: false }, { id: "b", text: "Üzüm", correct: true }, { id: "c", text: "Kiraz", correct: false }, { id: "d", text: "Erik", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Cereza' ne demek?", options: [{ id: "a", text: "Çilek", correct: false }, { id: "b", text: "Kiraz", correct: true }, { id: "c", text: "Vişne", correct: false }, { id: "d", text: "Üzüm", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Çilek", correctAnswer: "Fresa" },
    { id: 11, type: "SELECT", question: "'Pera' ne demek?", options: [{ id: "a", text: "Elma", correct: false }, { id: "b", text: "Armut", correct: true }, { id: "c", text: "Şeftali", correct: false }, { id: "d", text: "Kayısı", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Melocotón", options: [{ id: "a", text: "Erik", correct: false }, { id: "b", text: "Şeftali", correct: true }, { id: "c", text: "Kayısı", correct: false }, { id: "d", text: "Armut", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Las _____ son rojas. (çilekler)", options: [{ id: "a", text: "manzanas", correct: false }, { id: "b", text: "fresas", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Karpuz yaz meyvesidir.", correctAnswer: "La sandía es fruta de verano" },
    { id: 15, type: "SELECT", question: "'Melón' ne demek?", options: [{ id: "a", text: "Karpuz", correct: false }, { id: "b", text: "Kavun", correct: true }, { id: "c", text: "Ananas", correct: false }, { id: "d", text: "Mango", correct: false }] },
    { id: 16, type: "SELECT", question: "'Piña' ne demek?", options: [{ id: "a", text: "Muz", correct: false }, { id: "b", text: "Ananas", correct: true }, { id: "c", text: "Kavun", correct: false }, { id: "d", text: "Papaya", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cereza", options: [{ id: "a", text: "Çilek", correct: false }, { id: "b", text: "Kiraz", correct: true }, { id: "c", text: "Vişne", correct: false }, { id: "d", text: "Üzüm", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Her gün meyve yerim.", correctAnswer: "Como fruta todos los días" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ es amarillo. (muz)", options: [{ id: "a", text: "limón", correct: false }, { id: "b", text: "plátano", correct: true }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Las _____ son muy dulces. (kirazlar)", options: [{ id: "a", text: "uvas", correct: false }, { id: "b", text: "cerezas", correct: true }] },
    { id: 21, type: "TRANSLATE", question: "Çevir:", hint: "Bu çok taze.", correctAnswer: "Esto es muy fresco" },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Meyveler sağlıklıdır.", correctAnswer: "Las frutas son saludables" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me gustan las fresas", options: [{ id: "a", text: "Üzüm severim", correct: false }, { id: "b", text: "Çilek severim", correct: true }, { id: "c", text: "Kiraz severim", correct: false }, { id: "d", text: "Şeftali severim", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Elma kırmızı, muz sarı", correctAnswer: "La manzana es roja, el plátano es amarillo" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Yaz meyveleri çok lezzetli: karpuz, kavun ve şeftali", correctAnswer: "Las frutas de verano son muy deliciosas: sandía, melón y melocotón" },
];
