/**
 * LinguaFlow - Ünite 11: Vücut Parçaları (100 soru - 4 quiz × 25 soru)
 */

import { Question } from "./questions";

export const unit11Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Cabeza' ne demek?", options: [{ id: "a", text: "Kol", correct: false }, { id: "b", text: "Baş", correct: true }, { id: "c", text: "Ayak", correct: false }, { id: "d", text: "El", correct: false }] },
    { id: 2, type: "SELECT", question: "'Mano' ne demek?", options: [{ id: "a", text: "Ayak", correct: false }, { id: "b", text: "El", correct: true }, { id: "c", text: "Kol", correct: false }, { id: "d", text: "Bacak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Pie' ne demek?", options: [{ id: "a", text: "El", correct: false }, { id: "b", text: "Ayak", correct: true }, { id: "c", text: "Bacak", correct: false }, { id: "d", text: "Parmak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Ojo' ne demek?", options: [{ id: "a", text: "Kulak", correct: false }, { id: "b", text: "Göz", correct: true }, { id: "c", text: "Burun", correct: false }, { id: "d", text: "Ağız", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cabeza", options: [{ id: "a", text: "Kol", correct: false }, { id: "b", text: "Baş", correct: true }, { id: "c", text: "Bacak", correct: false }, { id: "d", text: "Ayak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Brazo' ne demek?", options: [{ id: "a", text: "Bacak", correct: false }, { id: "b", text: "Kol", correct: true }, { id: "c", text: "El", correct: false }, { id: "d", text: "Parmak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Pierna' ne demek?", options: [{ id: "a", text: "Kol", correct: false }, { id: "b", text: "Bacak", correct: true }, { id: "c", text: "Ayak", correct: false }, { id: "d", text: "El", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mano", options: [{ id: "a", text: "Ayak", correct: false }, { id: "b", text: "El", correct: true }, { id: "c", text: "Kol", correct: false }, { id: "d", text: "Parmak", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Nariz' ne demek?", options: [{ id: "a", text: "Kulak", correct: false }, { id: "b", text: "Burun", correct: true }, { id: "c", text: "Göz", correct: false }, { id: "d", text: "Ağız", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Baş", correctAnswer: "Cabeza" },
    { id: 11, type: "SELECT", question: "'Boca' ne demek?", options: [{ id: "a", text: "Burun", correct: false }, { id: "b", text: "Ağız", correct: true }, { id: "c", text: "Kulak", correct: false }, { id: "d", text: "Göz", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me duele la cabeza", options: [{ id: "a", text: "Kolum ağrıyor", correct: false }, { id: "b", text: "Başım ağrıyor", correct: true }, { id: "c", text: "Ayağım ağrıyor", correct: false }, { id: "d", text: "Bacağım ağrıyor", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo dos _____. (göz)", options: [{ id: "a", text: "oreja", correct: false }, { id: "b", text: "ojos", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "El", correctAnswer: "Mano" },
    { id: 15, type: "SELECT", question: "'Oreja' ne demek?", options: [{ id: "a", text: "Göz", correct: false }, { id: "b", text: "Kulak", correct: true }, { id: "c", text: "Burun", correct: false }, { id: "d", text: "Ağız", correct: false }] },
    { id: 16, type: "SELECT", question: "'Dedo' ne demek?", options: [{ id: "a", text: "El", correct: false }, { id: "b", text: "Parmak", correct: true }, { id: "c", text: "Tırnak", correct: false }, { id: "d", text: "Bilek", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me duele el pie", options: [{ id: "a", text: "Elim ağrıyor", correct: false }, { id: "b", text: "Ayağım ağrıyor", correct: true }, { id: "c", text: "Bacağım ağrıyor", correct: false }, { id: "d", text: "Kolum ağrıyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Başım ağrıyor.", correctAnswer: "Me duele la cabeza" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Me duele la _____. (bacak)", options: [{ id: "a", text: "brazo", correct: false }, { id: "b", text: "pierna", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İki elim ve iki ayağım var.", correctAnswer: "Tengo dos manos y dos pies" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ es grande. (burun)", options: [{ id: "a", text: "boca", correct: false }, { id: "b", text: "nariz", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Gözlerin mavi.", correctAnswer: "Tus ojos son azules" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo dolor de espalda", options: [{ id: "a", text: "Boynum ağrıyor", correct: false }, { id: "b", text: "Sırtım ağrıyor", correct: true }, { id: "c", text: "Kolum ağrıyor", correct: false }, { id: "d", text: "Başım ağrıyor", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Bir elinde beş parmak var", correctAnswer: "En una mano hay cinco dedos" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Gözlerim kahverengi, saçlarım siyah ve burnum küçük", correctAnswer: "Mis ojos son marrones, mi pelo es negro y mi nariz es pequeña" },
];

export const unit11Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Pelo' ne demek?", options: [{ id: "a", text: "Deri", correct: false }, { id: "b", text: "Saç", correct: true }, { id: "c", text: "Kaş", correct: false }, { id: "d", text: "Kirpik", correct: false }] },
    { id: 2, type: "SELECT", question: "'Cuello' ne demek?", options: [{ id: "a", text: "Omuz", correct: false }, { id: "b", text: "Boyun", correct: true }, { id: "c", text: "Sırt", correct: false }, { id: "d", text: "Göğüs", correct: false }] },
    { id: 3, type: "SELECT", question: "'Espalda' ne demek?", options: [{ id: "a", text: "Göğüs", correct: false }, { id: "b", text: "Sırt", correct: true }, { id: "c", text: "Karın", correct: false }, { id: "d", text: "Omuz", correct: false }] },
    { id: 4, type: "SELECT", question: "'Hombro' ne demek?", options: [{ id: "a", text: "Boyun", correct: false }, { id: "b", text: "Omuz", correct: true }, { id: "c", text: "Sırt", correct: false }, { id: "d", text: "Dirsek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Pelo", options: [{ id: "a", text: "Deri", correct: false }, { id: "b", text: "Saç", correct: true }, { id: "c", text: "Kaş", correct: false }, { id: "d", text: "Kirpik", correct: false }] },
    { id: 6, type: "SELECT", question: "'Cara' ne demek?", options: [{ id: "a", text: "Boyun", correct: false }, { id: "b", text: "Yüz", correct: true }, { id: "c", text: "Baş", correct: false }, { id: "d", text: "Alın", correct: false }] },
    { id: 7, type: "SELECT", question: "'Frente' ne demek?", options: [{ id: "a", text: "Yanak", correct: false }, { id: "b", text: "Alın", correct: true }, { id: "c", text: "Çene", correct: false }, { id: "d", text: "Yüz", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cuello", options: [{ id: "a", text: "Omuz", correct: false }, { id: "b", text: "Boyun", correct: true }, { id: "c", text: "Sırt", correct: false }, { id: "d", text: "Kol", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Mejilla' ne demek?", options: [{ id: "a", text: "Çene", correct: false }, { id: "b", text: "Yanak", correct: true }, { id: "c", text: "Alın", correct: false }, { id: "d", text: "Burun", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Saç", correctAnswer: "Pelo" },
    { id: 11, type: "SELECT", question: "'Barbilla' ne demek?", options: [{ id: "a", text: "Yanak", correct: false }, { id: "b", text: "Çene", correct: true }, { id: "c", text: "Alın", correct: false }, { id: "d", text: "Boyun", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo el pelo largo", options: [{ id: "a", text: "Saçlarım kısa", correct: false }, { id: "b", text: "Saçlarım uzun", correct: true }, { id: "c", text: "Saçlarım sarı", correct: false }, { id: "d", text: "Saçlarım kıvırcık", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Me duele el _____. (boyun)", options: [{ id: "a", text: "hombro", correct: false }, { id: "b", text: "cuello", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Yüz", correctAnswer: "Cara" },
    { id: 15, type: "SELECT", question: "'Ceja' ne demek?", options: [{ id: "a", text: "Kirpik", correct: false }, { id: "b", text: "Kaş", correct: true }, { id: "c", text: "Göz", correct: false }, { id: "d", text: "Alın", correct: false }] },
    { id: 16, type: "SELECT", question: "'Pestaña' ne demek?", options: [{ id: "a", text: "Kaş", correct: false }, { id: "b", text: "Kirpik", correct: true }, { id: "c", text: "Göz kapağı", correct: false }, { id: "d", text: "Yanak", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me duele la espalda", options: [{ id: "a", text: "Boynum ağrıyor", correct: false }, { id: "b", text: "Sırtım ağrıyor", correct: true }, { id: "c", text: "Omzum ağrıyor", correct: false }, { id: "d", text: "Göğsüm ağrıyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Saçlarım sarı.", correctAnswer: "Mi pelo es rubio" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Tiene los _____ grandes. (omuz)", options: [{ id: "a", text: "cuello", correct: false }, { id: "b", text: "hombros", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yüzünde güzel bir gülümseme var.", correctAnswer: "Tiene una sonrisa bonita en la cara" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Sus _____ son largas. (kirpik)", options: [{ id: "a", text: "cejas", correct: false }, { id: "b", text: "pestañas", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Alnın terliyor.", correctAnswer: "Tu frente está sudando" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tiene las mejillas rojas", options: [{ id: "a", text: "Dudakları kırmızı", correct: false }, { id: "b", text: "Yanakları kırmızı", correct: true }, { id: "c", text: "Gözleri kırmızı", correct: false }, { id: "d", text: "Burnu kırmızı", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Saçlarım uzun ve kahverengi, gözlerim yeşil", correctAnswer: "Mi pelo es largo y marrón, mis ojos son verdes" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Boynu ağrıyor çünkü kötü uyumuş", correctAnswer: "Le duele el cuello porque durmió mal" },
];

export const unit11Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Diente' ne demek?", options: [{ id: "a", text: "Dil", correct: false }, { id: "b", text: "Diş", correct: true }, { id: "c", text: "Dudak", correct: false }, { id: "d", text: "Çene", correct: false }] },
    { id: 2, type: "SELECT", question: "'Lengua' ne demek?", options: [{ id: "a", text: "Diş", correct: false }, { id: "b", text: "Dil", correct: true }, { id: "c", text: "Damak", correct: false }, { id: "d", text: "Boğaz", correct: false }] },
    { id: 3, type: "SELECT", question: "'Labio' ne demek?", options: [{ id: "a", text: "Dil", correct: false }, { id: "b", text: "Dudak", correct: true }, { id: "c", text: "Diş", correct: false }, { id: "d", text: "Yanak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Garganta' ne demek?", options: [{ id: "a", text: "Boyun", correct: false }, { id: "b", text: "Boğaz", correct: true }, { id: "c", text: "Dil", correct: false }, { id: "d", text: "Damak", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Diente", options: [{ id: "a", text: "Dil", correct: false }, { id: "b", text: "Diş", correct: true }, { id: "c", text: "Dudak", correct: false }, { id: "d", text: "Damak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Corazón' ne demek?", options: [{ id: "a", text: "Akciğer", correct: false }, { id: "b", text: "Kalp", correct: true }, { id: "c", text: "Mide", correct: false }, { id: "d", text: "Karaciğer", correct: false }] },
    { id: 7, type: "SELECT", question: "'Estómago' ne demek?", options: [{ id: "a", text: "Kalp", correct: false }, { id: "b", text: "Mide", correct: true }, { id: "c", text: "Akciğer", correct: false }, { id: "d", text: "Bağırsak", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Garganta", options: [{ id: "a", text: "Boyun", correct: false }, { id: "b", text: "Boğaz", correct: true }, { id: "c", text: "Dil", correct: false }, { id: "d", text: "Diş", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Pulmón' ne demek?", options: [{ id: "a", text: "Kalp", correct: false }, { id: "b", text: "Akciğer", correct: true }, { id: "c", text: "Mide", correct: false }, { id: "d", text: "Böbrek", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Diş", correctAnswer: "Diente" },
    { id: 11, type: "SELECT", question: "'Hígado' ne demek?", options: [{ id: "a", text: "Mide", correct: false }, { id: "b", text: "Karaciğer", correct: true }, { id: "c", text: "Akciğer", correct: false }, { id: "d", text: "Kalp", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me duele el estómago", options: [{ id: "a", text: "Kalbim ağrıyor", correct: false }, { id: "b", text: "Midem ağrıyor", correct: true }, { id: "c", text: "Başım ağrıyor", correct: false }, { id: "d", text: "Boğazım ağrıyor", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Me duele la _____. (boğaz)", options: [{ id: "a", text: "lengua", correct: false }, { id: "b", text: "garganta", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Kalp", correctAnswer: "Corazón" },
    { id: 15, type: "SELECT", question: "'Sangre' ne demek?", options: [{ id: "a", text: "Su", correct: false }, { id: "b", text: "Kan", correct: true }, { id: "c", text: "Ter", correct: false }, { id: "d", text: "Gözyaşı", correct: false }] },
    { id: 16, type: "SELECT", question: "'Hueso' ne demek?", options: [{ id: "a", text: "Kas", correct: false }, { id: "b", text: "Kemik", correct: true }, { id: "c", text: "Eklem", correct: false }, { id: "d", text: "Tendon", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me duele un diente", options: [{ id: "a", text: "Dilim ağrıyor", correct: false }, { id: "b", text: "Dişim ağrıyor", correct: true }, { id: "c", text: "Dudağım ağrıyor", correct: false }, { id: "d", text: "Damağım ağrıyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Boğazım çok ağrıyor.", correctAnswer: "Me duele mucho la garganta" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ late rápido. (kalp)", options: [{ id: "a", text: "pulmón", correct: false }, { id: "b", text: "corazón", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Dişlerimi fırçalıyorum.", correctAnswer: "Me cepillo los dientes" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo dolor de _____. (mide)", options: [{ id: "a", text: "corazón", correct: false }, { id: "b", text: "estómago", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Dudakların kuru.", correctAnswer: "Tus labios están secos" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El corazón es un órgano vital", options: [{ id: "a", text: "Akciğer hayati bir organ", correct: false }, { id: "b", text: "Kalp hayati bir organ", correct: true }, { id: "c", text: "Mide hayati bir organ", correct: false }, { id: "d", text: "Beyin hayati bir organ", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Günde iki kez dişlerimi fırçalarım ve dil temizleyici kullanırım", correctAnswer: "Me cepillo los dientes dos veces al día y uso un limpiador de lengua" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Boğazım ağrıyor, ateşim var ve başım dönüyor", correctAnswer: "Me duele la garganta, tengo fiebre y me mareo" },
];

export const unit11Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Doler' ne demek?", options: [{ id: "a", text: "İyileşmek", correct: false }, { id: "b", text: "Ağrımak", correct: true }, { id: "c", text: "Kırmak", correct: false }, { id: "d", text: "Kaşımak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Sano' ne demek?", options: [{ id: "a", text: "Hasta", correct: false }, { id: "b", text: "Sağlıklı", correct: true }, { id: "c", text: "Yorgun", correct: false }, { id: "d", text: "Zayıf", correct: false }] },
    { id: 3, type: "SELECT", question: "'Enfermo' ne demek?", options: [{ id: "a", text: "Sağlıklı", correct: false }, { id: "b", text: "Hasta", correct: true }, { id: "c", text: "Güçlü", correct: false }, { id: "d", text: "Zinde", correct: false }] },
    { id: 4, type: "SELECT", question: "'Cansado' ne demek?", options: [{ id: "a", text: "Enerjik", correct: false }, { id: "b", text: "Yorgun", correct: true }, { id: "c", text: "Hasta", correct: false }, { id: "d", text: "Sağlıklı", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Enfermo", options: [{ id: "a", text: "Sağlıklı", correct: false }, { id: "b", text: "Hasta", correct: true }, { id: "c", text: "Yorgun", correct: false }, { id: "d", text: "Güçlü", correct: false }] },
    { id: 6, type: "SELECT", question: "'Herida' ne demek?", options: [{ id: "a", text: "Çürük", correct: false }, { id: "b", text: "Yara", correct: true }, { id: "c", text: "Kaşıntı", correct: false }, { id: "d", text: "Ağrı", correct: false }] },
    { id: 7, type: "SELECT", question: "'Fiebre' ne demek?", options: [{ id: "a", text: "Öksürük", correct: false }, { id: "b", text: "Ateş", correct: true }, { id: "c", text: "Hapşırık", correct: false }, { id: "d", text: "Baş ağrısı", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cansado", options: [{ id: "a", text: "Hasta", correct: false }, { id: "b", text: "Yorgun", correct: true }, { id: "c", text: "Sağlıklı", correct: false }, { id: "d", text: "Güçlü", correct: false }] },

    // ORTA (9 soru)
    { id: 9, type: "SELECT", question: "'Tos' ne demek?", options: [{ id: "a", text: "Hapşırık", correct: false }, { id: "b", text: "Öksürük", correct: true }, { id: "c", text: "Ateş", correct: false }, { id: "d", text: "Baş dönmesi", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Ağrımak", correctAnswer: "Doler" },
    { id: 11, type: "SELECT", question: "'Marearse' ne demek?", options: [{ id: "a", text: "Öksürmek", correct: false }, { id: "b", text: "Baş dönmesi olmak", correct: true }, { id: "c", text: "Hapşırmak", correct: false }, { id: "d", text: "Ateşlenmek", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Estoy enfermo", options: [{ id: "a", text: "Sağlıklıyım", correct: false }, { id: "b", text: "Hastayım", correct: true }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Açım", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo _____. (ateş)", options: [{ id: "a", text: "tos", correct: false }, { id: "b", text: "fiebre", correct: true }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Hasta", correctAnswer: "Enfermo" },
    { id: 15, type: "SELECT", question: "'Estornudar' ne demek?", options: [{ id: "a", text: "Öksürmek", correct: false }, { id: "b", text: "Hapşırmak", correct: true }, { id: "c", text: "Baş dönmesi olmak", correct: false }, { id: "d", text: "Ateşlenmek", correct: false }] },
    { id: 16, type: "SELECT", question: "'Curar' ne demek?", options: [{ id: "a", text: "Hastalanmak", correct: false }, { id: "b", text: "İyileştirmek", correct: true }, { id: "c", text: "Ağrımak", correct: false }, { id: "d", text: "Kırmak", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo fiebre y tos", options: [{ id: "a", text: "Başım ağrıyor ve yorgunum", correct: false }, { id: "b", text: "Ateşim var ve öksürüyorum", correct: true }, { id: "c", text: "Midem bulanıyor", correct: false }, { id: "d", text: "Başım dönüyor", correct: false }] },

    // ZOR (8 soru)
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Çok yorgunum.", correctAnswer: "Estoy muy cansado" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo una _____ en el brazo. (yara)", options: [{ id: "a", text: "fiebre", correct: false }, { id: "b", text: "herida", correct: true }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Doktora gitmem lazım.", correctAnswer: "Tengo que ir al médico" },
    { id: 21, type: "FILL_BLANK", question: "Doldur:", sentence: "Me siento _____. (hasta)", options: [{ id: "a", text: "sano", correct: false }, { id: "b", text: "enfermo", correct: true }] },
    { id: 22, type: "TRANSLATE", question: "Çevir:", hint: "Sürekli hapşırıyorum.", correctAnswer: "No paro de estornudar" },
    { id: 23, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me siento mal, me duele todo el cuerpo", options: [{ id: "a", text: "İyi hissediyorum", correct: false }, { id: "b", text: "Kendimi kötü hissediyorum, tüm vücudum ağrıyor", correct: true }, { id: "c", text: "Sadece başım ağrıyor", correct: false }, { id: "d", text: "Artık iyiyim", correct: false }] },
    { id: 24, type: "TRANSLATE", question: "Çevir:", hint: "Ateşim var, boğazım ağrıyor ve öksürüyorum", correctAnswer: "Tengo fiebre, me duele la garganta y tengo tos" },
    { id: 25, type: "TRANSLATE", question: "Çevir:", hint: "Sağlıklı olmak için iyi yemeli, spor yapmalı ve iyi uyumalısın", correctAnswer: "Para estar sano debes comer bien, hacer ejercicio y dormir bien" },
];
