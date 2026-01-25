// French A1 Quiz Questions - Units 310-315
// Sınıf, Vücut, Giysiler, Yiyecekler, İçecekler, Saat
import { Question } from "./questions";

// ===== ÜNİTE 310: SINIFTA =====
export const unit310Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'La classe' ne demek?", options: [{ id: "a", text: "Sınıf", correct: true }, { id: "b", text: "Okul", correct: false }, { id: "c", text: "Ders", correct: false }, { id: "d", text: "Öğretmen", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le tableau' ne demek?", options: [{ id: "a", text: "Tahta", correct: true }, { id: "b", text: "Masa", correct: false }, { id: "c", text: "Defter", correct: false }, { id: "d", text: "Kitap", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le stylo", options: [{ id: "a", text: "Kalem", correct: true }, { id: "b", text: "Silgi", correct: false }, { id: "c", text: "Cetvel", correct: false }, { id: "d", text: "Defter", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le cahier' ne demek?", options: [{ id: "a", text: "Defter", correct: true }, { id: "b", text: "Kitap", correct: false }, { id: "c", text: "Kağıt", correct: false }, { id: "d", text: "Dosya", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le livre", options: [{ id: "a", text: "Kitap", correct: true }, { id: "b", text: "Defter", correct: false }, { id: "c", text: "Dergi", correct: false }, { id: "d", text: "Gazete", correct: false }] },
    { id: 6, type: "SELECT", question: "'La gomme' ne demek?", options: [{ id: "a", text: "Silgi", correct: true }, { id: "b", text: "Kalem", correct: false }, { id: "c", text: "Kalemtıraş", correct: false }, { id: "d", text: "Cetvel", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le crayon' ne demek?", options: [{ id: "a", text: "Kurşun kalem", correct: true }, { id: "b", text: "Tükenmez kalem", correct: false }, { id: "c", text: "Boya kalemi", correct: false }, { id: "d", text: "Silgi", correct: false }] },
    { id: 8, type: "SELECT", question: "'La règle' ne demek?", options: [{ id: "a", text: "Cetvel", correct: true }, { id: "b", text: "Makas", correct: false }, { id: "c", text: "Yapıştırıcı", correct: false }, { id: "d", text: "Silgi", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Kalemim nerede?", correctAnswer: "Où est mon stylo?" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "J'écris dans mon ___.", options: [{ id: "a", text: "cahier", correct: true }, { id: "b", text: "livre", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le sac à dos", options: [{ id: "a", text: "Sırt çantası", correct: true }, { id: "b", text: "El çantası", correct: false }, { id: "c", text: "Valiz", correct: false }, { id: "d", text: "Kutu", correct: false }] },
    { id: 12, type: "SELECT", question: "'Le bureau' ne demek?", options: [{ id: "a", text: "Masa/Büro", correct: true }, { id: "b", text: "Sandalye", correct: false }, { id: "c", text: "Dolap", correct: false }, { id: "d", text: "Raf", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Kitabımı açıyorum", correctAnswer: "J'ouvre mon livre" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Le professeur écrit au ___.", options: [{ id: "a", text: "tableau", correct: true }, { id: "b", text: "cahier", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Silgi ödünç alabilir miyim?", correctAnswer: "Est-ce que je peux emprunter une gomme?" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ouvrez vos livres", options: [{ id: "a", text: "Kitaplarınızı açın", correct: true }, { id: "b", text: "Defterlerinizi açın", correct: false }, { id: "c", text: "Kitaplarınızı kapatın", correct: false }, { id: "d", text: "Kalemlerinizi alın", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Mes affaires sont dans mon ___.", options: [{ id: "a", text: "sac", correct: true }, { id: "b", text: "bureau", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Sınıfta yirmi öğrenci var", correctAnswer: "Il y a vingt élèves dans la classe" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Je dessine avec un ___.", options: [{ id: "a", text: "crayon", correct: true }, { id: "b", text: "stylo", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sınıf malzemelerini öğrendik!", correctAnswer: "Nous avons appris les fournitures scolaires!" }
];

export const unit310Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "'L'école' ne demek?", options: [{ id: "a", text: "Okul", correct: true }, { id: "b", text: "Sınıf", correct: false }, { id: "c", text: "Ders", correct: false }, { id: "d", text: "Öğretmen", correct: false }] },
    { id: 2, type: "SELECT", question: "'L'élève' ne demek?", options: [{ id: "a", text: "Öğrenci", correct: true }, { id: "b", text: "Öğretmen", correct: false }, { id: "c", text: "Müdür", correct: false }, { id: "d", text: "Veli", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'étudiant", options: [{ id: "a", text: "Üniversite öğrencisi", correct: true }, { id: "b", text: "Lise öğrencisi", correct: false }, { id: "c", text: "İlkokul öğrencisi", correct: false }, { id: "d", text: "Öğretmen", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le cours' ne demek?", options: [{ id: "a", text: "Ders", correct: true }, { id: "b", text: "Sınıf", correct: false }, { id: "c", text: "Okul", correct: false }, { id: "d", text: "Sınav", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'examen", options: [{ id: "a", text: "Sınav", correct: true }, { id: "b", text: "Ders", correct: false }, { id: "c", text: "Ödev", correct: false }, { id: "d", text: "Not", correct: false }] },
    { id: 6, type: "SELECT", question: "'Les devoirs' ne demek?", options: [{ id: "a", text: "Ödevler", correct: true }, { id: "b", text: "Dersler", correct: false }, { id: "c", text: "Notlar", correct: false }, { id: "d", text: "Sınavlar", correct: false }] },
    { id: 7, type: "SELECT", question: "'La récréation' ne demek?", options: [{ id: "a", text: "Teneffüs", correct: true }, { id: "b", text: "Öğle yemeği", correct: false }, { id: "c", text: "Ders", correct: false }, { id: "d", text: "Spor", correct: false }] },
    { id: 8, type: "SELECT", question: "'La cantine' ne demek?", options: [{ id: "a", text: "Yemekhane", correct: true }, { id: "b", text: "Kütüphane", correct: false }, { id: "c", text: "Spor salonu", correct: false }, { id: "d", text: "Laboratuvar", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Ders saat dokuzda başlıyor", correctAnswer: "Le cours commence à neuf heures" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je fais mes ___ à la maison.", options: [{ id: "a", text: "devoirs", correct: true }, { id: "b", text: "cours", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La bibliothèque", options: [{ id: "a", text: "Kütüphane", correct: true }, { id: "b", text: "Kitapçı", correct: false }, { id: "c", text: "Yemekhane", correct: false }, { id: "d", text: "Müze", correct: false }] },
    { id: 12, type: "SELECT", question: "'La note' ne demek?", options: [{ id: "a", text: "Not/Puan", correct: true }, { id: "b", text: "Ödev", correct: false }, { id: "c", text: "Sınav", correct: false }, { id: "d", text: "Ders", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Yarın sınavım var", correctAnswer: "J'ai un examen demain" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous mangeons à la ___.", options: [{ id: "a", text: "cantine", correct: true }, { id: "b", text: "bibliothèque", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Teneffüste arkadaşlarımla oynuyorum", correctAnswer: "Je joue avec mes amis à la récréation" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai une bonne note", options: [{ id: "a", text: "İyi bir notum var", correct: true }, { id: "b", text: "Kötü bir notum var", correct: false }, { id: "c", text: "Ödevim var", correct: false }, { id: "d", text: "Sınavım var", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Je lis des livres à la ___.", options: [{ id: "a", text: "bibliothèque", correct: true }, { id: "b", text: "cantine", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Ödevlerimi bitirdim", correctAnswer: "J'ai fini mes devoirs" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ dure une heure.", options: [{ id: "a", text: "examen", correct: true }, { id: "b", text: "récréation", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Okul hayatını öğrendik!", correctAnswer: "Nous avons appris la vie scolaire!" }
];

export const unit310Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'Apprendre' ne demek?", options: [{ id: "a", text: "Öğrenmek", correct: true }, { id: "b", text: "Öğretmek", correct: false }, { id: "c", text: "Okumak", correct: false }, { id: "d", text: "Yazmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Enseigner' ne demek?", options: [{ id: "a", text: "Öğretmek", correct: true }, { id: "b", text: "Öğrenmek", correct: false }, { id: "c", text: "Çalışmak", correct: false }, { id: "d", text: "Dinlemek", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Lire", options: [{ id: "a", text: "Okumak", correct: true }, { id: "b", text: "Yazmak", correct: false }, { id: "c", text: "Dinlemek", correct: false }, { id: "d", text: "Konuşmak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Écrire' ne demek?", options: [{ id: "a", text: "Yazmak", correct: true }, { id: "b", text: "Okumak", correct: false }, { id: "c", text: "Çizmek", correct: false }, { id: "d", text: "Silmek", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Écouter", options: [{ id: "a", text: "Dinlemek", correct: true }, { id: "b", text: "Konuşmak", correct: false }, { id: "c", text: "Okumak", correct: false }, { id: "d", text: "Yazmak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Parler' ne demek?", options: [{ id: "a", text: "Konuşmak", correct: true }, { id: "b", text: "Dinlemek", correct: false }, { id: "c", text: "Anlamak", correct: false }, { id: "d", text: "Sormak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Comprendre' ne demek?", options: [{ id: "a", text: "Anlamak", correct: true }, { id: "b", text: "Öğrenmek", correct: false }, { id: "c", text: "Hatırlamak", correct: false }, { id: "d", text: "Unutmak", correct: false }] },
    { id: 8, type: "SELECT", question: "'Poser une question' ne demek?", options: [{ id: "a", text: "Soru sormak", correct: true }, { id: "b", text: "Cevap vermek", correct: false }, { id: "c", text: "Dinlemek", correct: false }, { id: "d", text: "Okumak", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Fransızca öğreniyorum", correctAnswer: "J'apprends le français" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ un livre.", options: [{ id: "a", text: "lis", correct: true }, { id: "b", text: "écris", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Répondre", options: [{ id: "a", text: "Cevap vermek", correct: true }, { id: "b", text: "Soru sormak", correct: false }, { id: "c", text: "Dinlemek", correct: false }, { id: "d", text: "Anlamak", correct: false }] },
    { id: 12, type: "SELECT", question: "'Lever la main' ne demek?", options: [{ id: "a", text: "El kaldırmak", correct: true }, { id: "b", text: "Parmak kaldırmak", correct: false }, { id: "c", text: "Ayağa kalkmak", correct: false }, { id: "d", text: "Oturmak", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Anlamadım, tekrar eder misiniz?", correctAnswer: "Je n'ai pas compris, pouvez-vous répéter?" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ le professeur.", options: [{ id: "a", text: "écoute", correct: true }, { id: "b", text: "parle", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Defterime yazıyorum", correctAnswer: "J'écris dans mon cahier" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Levez la main!", options: [{ id: "a", text: "Elinizi kaldırın!", correct: true }, { id: "b", text: "Oturun!", correct: false }, { id: "c", text: "Kalkın!", correct: false }, { id: "d", text: "Dinleyin!", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Est-ce que tu ___?", options: [{ id: "a", text: "comprends", correct: true }, { id: "b", text: "apprends", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Öğretmen soruları yanıtlıyor", correctAnswer: "Le professeur répond aux questions" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ français.", options: [{ id: "a", text: "parle", correct: true }, { id: "b", text: "écoute", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sınıfta kullanılan fiilleri öğrendik!", correctAnswer: "Nous avons appris les verbes utilisés en classe!" }
];

export const unit310Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'Les mathématiques' ne demek?", options: [{ id: "a", text: "Matematik", correct: true }, { id: "b", text: "Fizik", correct: false }, { id: "c", text: "Kimya", correct: false }, { id: "d", text: "Biyoloji", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le français' ne demek?", options: [{ id: "a", text: "Fransızca (dersi)", correct: true }, { id: "b", text: "İngilizce", correct: false }, { id: "c", text: "Almanca", correct: false }, { id: "d", text: "İspanyolca", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'histoire", options: [{ id: "a", text: "Tarih", correct: true }, { id: "b", text: "Coğrafya", correct: false }, { id: "c", text: "Felsefe", correct: false }, { id: "d", text: "Edebiyat", correct: false }] },
    { id: 4, type: "SELECT", question: "'La géographie' ne demek?", options: [{ id: "a", text: "Coğrafya", correct: true }, { id: "b", text: "Tarih", correct: false }, { id: "c", text: "Biyoloji", correct: false }, { id: "d", text: "Fizik", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les sciences", options: [{ id: "a", text: "Fen bilimleri", correct: true }, { id: "b", text: "Sosyal bilimler", correct: false }, { id: "c", text: "Matematik", correct: false }, { id: "d", text: "Diller", correct: false }] },
    { id: 6, type: "SELECT", question: "'L'art' ne demek?", options: [{ id: "a", text: "Sanat", correct: true }, { id: "b", text: "Müzik", correct: false }, { id: "c", text: "Spor", correct: false }, { id: "d", text: "Drama", correct: false }] },
    { id: 7, type: "SELECT", question: "'La musique' ne demek?", options: [{ id: "a", text: "Müzik", correct: true }, { id: "b", text: "Sanat", correct: false }, { id: "c", text: "Dans", correct: false }, { id: "d", text: "Tiyatro", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'éducation physique' ne demek?", options: [{ id: "a", text: "Beden eğitimi", correct: true }, { id: "b", text: "Sağlık", correct: false }, { id: "c", text: "Spor", correct: false }, { id: "d", text: "Jimnastik", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "En sevdiğim ders matematik", correctAnswer: "Ma matière préférée est les mathématiques" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime l'___ physique.", options: [{ id: "a", text: "éducation", correct: true }, { id: "b", text: "education", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'anglais", options: [{ id: "a", text: "İngilizce", correct: true }, { id: "b", text: "Fransızca", correct: false }, { id: "c", text: "Almanca", correct: false }, { id: "d", text: "İspanyolca", correct: false }] },
    { id: 12, type: "SELECT", question: "'La matière' ne demek?", options: [{ id: "a", text: "Ders/Konu", correct: true }, { id: "b", text: "Sınıf", correct: false }, { id: "c", text: "Öğretmen", correct: false }, { id: "d", text: "Okul", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Tarih dersi ilginç", correctAnswer: "Le cours d'histoire est intéressant" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis bon en ___.", options: [{ id: "a", text: "sciences", correct: true }, { id: "b", text: "science", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Haftada üç saat müzik dersim var", correctAnswer: "J'ai trois heures de musique par semaine" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je n'aime pas les maths", options: [{ id: "a", text: "Matematiği sevmiyorum", correct: true }, { id: "b", text: "Matematiği seviyorum", correct: false }, { id: "c", text: "Matematik kolay", correct: false }, { id: "d", text: "Matematik zor", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est importante.", options: [{ id: "a", text: "histoire", correct: true }, { id: "b", text: "histoir", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Sanat dersinde resim yapıyoruz", correctAnswer: "Nous faisons de la peinture en cours d'art" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Quelle est ta ___ préférée?", options: [{ id: "a", text: "matière", correct: true }, { id: "b", text: "cours", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Okuldaki dersleri öğrendik, tebrikler!", correctAnswer: "Nous avons appris les matières à l'école, félicitations!" }
];

// ===== ÜNİTE 311: VÜCUDUMUZ =====
export const unit311Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'La tête' ne demek?", options: [{ id: "a", text: "Baş/Kafa", correct: true }, { id: "b", text: "Yüz", correct: false }, { id: "c", text: "Boyun", correct: false }, { id: "d", text: "Omuz", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le visage' ne demek?", options: [{ id: "a", text: "Yüz", correct: true }, { id: "b", text: "Baş", correct: false }, { id: "c", text: "Göz", correct: false }, { id: "d", text: "Burun", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les yeux", options: [{ id: "a", text: "Gözler", correct: true }, { id: "b", text: "Kulaklar", correct: false }, { id: "c", text: "Kaşlar", correct: false }, { id: "d", text: "Kirpikler", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le nez' ne demek?", options: [{ id: "a", text: "Burun", correct: true }, { id: "b", text: "Ağız", correct: false }, { id: "c", text: "Çene", correct: false }, { id: "d", text: "Kulak", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La bouche", options: [{ id: "a", text: "Ağız", correct: true }, { id: "b", text: "Burun", correct: false }, { id: "c", text: "Dil", correct: false }, { id: "d", text: "Diş", correct: false }] },
    { id: 6, type: "SELECT", question: "'Les oreilles' ne demek?", options: [{ id: "a", text: "Kulaklar", correct: true }, { id: "b", text: "Gözler", correct: false }, { id: "c", text: "Yanaklar", correct: false }, { id: "d", text: "Burun", correct: false }] },
    { id: 7, type: "SELECT", question: "'Les cheveux' ne demek?", options: [{ id: "a", text: "Saçlar", correct: true }, { id: "b", text: "Kaşlar", correct: false }, { id: "c", text: "Kirpikler", correct: false }, { id: "d", text: "Sakal", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le cou' ne demek?", options: [{ id: "a", text: "Boyun", correct: true }, { id: "b", text: "Omuz", correct: false }, { id: "c", text: "Sırt", correct: false }, { id: "d", text: "Göğüs", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Mavi gözlerim var", correctAnswer: "J'ai les yeux bleus" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai mal à la ___.", options: [{ id: "a", text: "tête", correct: true }, { id: "b", text: "main", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les dents", options: [{ id: "a", text: "Dişler", correct: true }, { id: "b", text: "Dudaklar", correct: false }, { id: "c", text: "Dil", correct: false }, { id: "d", text: "Damak", correct: false }] },
    { id: 12, type: "SELECT", question: "'La langue' ne demek?", options: [{ id: "a", text: "Dil", correct: true }, { id: "b", text: "Diş", correct: false }, { id: "c", text: "Dudak", correct: false }, { id: "d", text: "Ağız", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Burnumla kokluyorum", correctAnswer: "Je sens avec mon nez" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vois avec mes ___.", options: [{ id: "a", text: "yeux", correct: true }, { id: "b", text: "oreilles", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Uzun saçları var", correctAnswer: "Elle a les cheveux longs" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'entends avec mes oreilles", options: [{ id: "a", text: "Kulaklarımla duyuyorum", correct: true }, { id: "b", text: "Gözlerimle görüyorum", correct: false }, { id: "c", text: "Burnumla kokluyorum", correct: false }, { id: "d", text: "Dilimle tatıyorum", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Je parle avec ma ___.", options: [{ id: "a", text: "bouche", correct: true }, { id: "b", text: "nez", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "İki göz ve bir burun", correctAnswer: "Deux yeux et un nez" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon ___ est long.", options: [{ id: "a", text: "cou", correct: true }, { id: "b", text: "nez", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yüz bölümlerini öğrendik!", correctAnswer: "Nous avons appris les parties du visage!" }
];

export const unit311Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "'Le bras' ne demek?", options: [{ id: "a", text: "Kol", correct: true }, { id: "b", text: "Bacak", correct: false }, { id: "c", text: "El", correct: false }, { id: "d", text: "Omuz", correct: false }] },
    { id: 2, type: "SELECT", question: "'La main' ne demek?", options: [{ id: "a", text: "El", correct: true }, { id: "b", text: "Ayak", correct: false }, { id: "c", text: "Kol", correct: false }, { id: "d", text: "Parmak", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les doigts", options: [{ id: "a", text: "Parmaklar", correct: true }, { id: "b", text: "Eller", correct: false }, { id: "c", text: "Tırnaklar", correct: false }, { id: "d", text: "Bilekler", correct: false }] },
    { id: 4, type: "SELECT", question: "'L'épaule' ne demek?", options: [{ id: "a", text: "Omuz", correct: true }, { id: "b", text: "Boyun", correct: false }, { id: "c", text: "Kol", correct: false }, { id: "d", text: "Sırt", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le coude", options: [{ id: "a", text: "Dirsek", correct: true }, { id: "b", text: "Bilek", correct: false }, { id: "c", text: "Diz", correct: false }, { id: "d", text: "Omuz", correct: false }] },
    { id: 6, type: "SELECT", question: "'Le poignet' ne demek?", options: [{ id: "a", text: "Bilek", correct: true }, { id: "b", text: "Dirsek", correct: false }, { id: "c", text: "Ayak bileği", correct: false }, { id: "d", text: "Parmak", correct: false }] },
    { id: 7, type: "SELECT", question: "'La jambe' ne demek?", options: [{ id: "a", text: "Bacak", correct: true }, { id: "b", text: "Kol", correct: false }, { id: "c", text: "Ayak", correct: false }, { id: "d", text: "Diz", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le pied' ne demek?", options: [{ id: "a", text: "Ayak", correct: true }, { id: "b", text: "El", correct: false }, { id: "c", text: "Bacak", correct: false }, { id: "d", text: "Diz", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Kolum ağrıyor", correctAnswer: "J'ai mal au bras" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je marche avec mes ___.", options: [{ id: "a", text: "jambes", correct: true }, { id: "b", text: "bras", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le genou", options: [{ id: "a", text: "Diz", correct: true }, { id: "b", text: "Dirsek", correct: false }, { id: "c", text: "Bilek", correct: false }, { id: "d", text: "Omuz", correct: false }] },
    { id: 12, type: "SELECT", question: "'Le dos' ne demek?", options: [{ id: "a", text: "Sırt", correct: true }, { id: "b", text: "Göğüs", correct: false }, { id: "c", text: "Karın", correct: false }, { id: "d", text: "Omuz", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "On parmağım var", correctAnswer: "J'ai dix doigts" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "J'écris avec ma ___.", options: [{ id: "a", text: "main", correct: true }, { id: "b", text: "pied", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ayaklarım yorgun", correctAnswer: "J'ai les pieds fatigués" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mon dos me fait mal", options: [{ id: "a", text: "Sırtım ağrıyor", correct: true }, { id: "b", text: "Başım ağrıyor", correct: false }, { id: "c", text: "Kolum ağrıyor", correct: false }, { id: "d", text: "Bacağım ağrıyor", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Je plie le ___.", options: [{ id: "a", text: "genou", correct: true }, { id: "b", text: "coude", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "İki kol ve iki bacak", correctAnswer: "Deux bras et deux jambes" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est entre le bras et le cou.", options: [{ id: "a", text: "épaule", correct: true }, { id: "b", text: "coude", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Vücudun uzuvlarını öğrendik!", correctAnswer: "Nous avons appris les membres du corps!" }
];

export const unit311Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'Le ventre' ne demek?", options: [{ id: "a", text: "Karın", correct: true }, { id: "b", text: "Göğüs", correct: false }, { id: "c", text: "Sırt", correct: false }, { id: "d", text: "Bel", correct: false }] },
    { id: 2, type: "SELECT", question: "'La poitrine' ne demek?", options: [{ id: "a", text: "Göğüs", correct: true }, { id: "b", text: "Karın", correct: false }, { id: "c", text: "Sırt", correct: false }, { id: "d", text: "Omuz", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le cœur", options: [{ id: "a", text: "Kalp", correct: true }, { id: "b", text: "Akciğer", correct: false }, { id: "c", text: "Mide", correct: false }, { id: "d", text: "Beyin", correct: false }] },
    { id: 4, type: "SELECT", question: "'Les poumons' ne demek?", options: [{ id: "a", text: "Akciğerler", correct: true }, { id: "b", text: "Kalp", correct: false }, { id: "c", text: "Böbrekler", correct: false }, { id: "d", text: "Karaciğer", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'estomac", options: [{ id: "a", text: "Mide", correct: true }, { id: "b", text: "Bağırsak", correct: false }, { id: "c", text: "Karaciğer", correct: false }, { id: "d", text: "Karın", correct: false }] },
    { id: 6, type: "SELECT", question: "'Le cerveau' ne demek?", options: [{ id: "a", text: "Beyin", correct: true }, { id: "b", text: "Kalp", correct: false }, { id: "c", text: "Akciğer", correct: false }, { id: "d", text: "Göz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le sang' ne demek?", options: [{ id: "a", text: "Kan", correct: true }, { id: "b", text: "Deri", correct: false }, { id: "c", text: "Kemik", correct: false }, { id: "d", text: "Kas", correct: false }] },
    { id: 8, type: "SELECT", question: "'Les os' ne demek?", options: [{ id: "a", text: "Kemikler", correct: true }, { id: "b", text: "Kaslar", correct: false }, { id: "c", text: "Damarlar", correct: false }, { id: "d", text: "Sinirler", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Karınım ağrıyor", correctAnswer: "J'ai mal au ventre" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ bat.", options: [{ id: "a", text: "cœur", correct: true }, { id: "b", text: "poumon", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La peau", options: [{ id: "a", text: "Deri/Cilt", correct: true }, { id: "b", text: "Kemik", correct: false }, { id: "c", text: "Kas", correct: false }, { id: "d", text: "Kan", correct: false }] },
    { id: 12, type: "SELECT", question: "'Les muscles' ne demek?", options: [{ id: "a", text: "Kaslar", correct: true }, { id: "b", text: "Kemikler", correct: false }, { id: "c", text: "Sinirler", correct: false }, { id: "d", text: "Damarlar", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Beyin düşünmeye yarar", correctAnswer: "Le cerveau sert à penser" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je respire avec mes ___.", options: [{ id: "a", text: "poumons", correct: true }, { id: "b", text: "cœur", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Midem boş", correctAnswer: "J'ai l'estomac vide" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le corps humain", options: [{ id: "a", text: "İnsan vücudu", correct: true }, { id: "b", text: "İnsan beyni", correct: false }, { id: "c", text: "İnsan kalbi", correct: false }, { id: "d", text: "İnsan derisi", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ circule dans les veines.", options: [{ id: "a", text: "sang", correct: true }, { id: "b", text: "os", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Vücudumuzda 206 kemik var", correctAnswer: "Nous avons 206 os dans notre corps" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Ma ___ est douce.", options: [{ id: "a", text: "peau", correct: true }, { id: "b", text: "muscle", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İç organları öğrendik!", correctAnswer: "Nous avons appris les organes internes!" }
];

export const unit311Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'Avoir mal' ne demek?", options: [{ id: "a", text: "Ağrımak/Acımak", correct: true }, { id: "b", text: "İyi olmak", correct: false }, { id: "c", text: "Hasta olmak", correct: false }, { id: "d", text: "Yorgun olmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Être en bonne santé' ne demek?", options: [{ id: "a", text: "Sağlıklı olmak", correct: true }, { id: "b", text: "Hasta olmak", correct: false }, { id: "c", text: "Yorgun olmak", correct: false }, { id: "d", text: "Zayıf olmak", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je suis malade", options: [{ id: "a", text: "Hastayım", correct: true }, { id: "b", text: "Sağlıklıyım", correct: false }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Açım", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le médecin' ne demek?", options: [{ id: "a", text: "Doktor", correct: true }, { id: "b", text: "Hemşire", correct: false }, { id: "c", text: "Eczacı", correct: false }, { id: "d", text: "Hasta", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'hôpital", options: [{ id: "a", text: "Hastane", correct: true }, { id: "b", text: "Eczane", correct: false }, { id: "c", text: "Klinik", correct: false }, { id: "d", text: "Muayenehane", correct: false }] },
    { id: 6, type: "SELECT", question: "'Le médicament' ne demek?", options: [{ id: "a", text: "İlaç", correct: true }, { id: "b", text: "Tedavi", correct: false }, { id: "c", text: "Reçete", correct: false }, { id: "d", text: "Şırınga", correct: false }] },
    { id: 7, type: "SELECT", question: "'La fièvre' ne demek?", options: [{ id: "a", text: "Ateş", correct: true }, { id: "b", text: "Öksürük", correct: false }, { id: "c", text: "Grip", correct: false }, { id: "d", text: "Soğuk algınlığı", correct: false }] },
    { id: 8, type: "SELECT", question: "'Guérir' ne demek?", options: [{ id: "a", text: "İyileşmek", correct: true }, { id: "b", text: "Hastalanmak", correct: false }, { id: "c", text: "Ağrımak", correct: false }, { id: "d", text: "Dinlenmek", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Başım ağrıyor", correctAnswer: "J'ai mal à la tête" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je prends un ___.", options: [{ id: "a", text: "médicament", correct: true }, { id: "b", text: "médecin", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai de la fièvre", options: [{ id: "a", text: "Ateşim var", correct: true }, { id: "b", text: "Öksürüğüm var", correct: false }, { id: "c", text: "Başım ağrıyor", correct: false }, { id: "d", text: "Midem ağrıyor", correct: false }] },
    { id: 12, type: "SELECT", question: "'Tousser' ne demek?", options: [{ id: "a", text: "Öksürmek", correct: true }, { id: "b", text: "Hapşırmak", correct: false }, { id: "c", text: "Burnunu silmek", correct: false }, { id: "d", text: "Nefes almak", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Doktora gitmeliyim", correctAnswer: "Je dois aller chez le médecin" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais à l'___.", options: [{ id: "a", text: "hôpital", correct: true }, { id: "b", text: "école", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Çabuk iyileş!", correctAnswer: "Guéris vite!" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Prends soin de toi", options: [{ id: "a", text: "Kendine iyi bak", correct: true }, { id: "b", text: "Dinlen", correct: false }, { id: "c", text: "İlaç al", correct: false }, { id: "d", text: "Doktora git", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ pour être en bonne santé.", options: [{ id: "a", text: "manger", correct: true }, { id: "b", text: "boire", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "İlaçları günde üç kez alın", correctAnswer: "Prenez les médicaments trois fois par jour" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis en bonne ___.", options: [{ id: "a", text: "santé", correct: true }, { id: "b", text: "forme", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Vücudumuzu ve sağlığı öğrendik, tebrikler!", correctAnswer: "Nous avons appris le corps et la santé, félicitations!" }
];
