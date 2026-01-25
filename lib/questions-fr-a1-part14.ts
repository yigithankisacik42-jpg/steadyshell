// French A1 Quiz Questions - Unit 330 (Final Review)
import { Question } from "./questions";

// ===== ÜNİTE 330: GENEL TEKRAR (FINAL REVIEW) =====

// Quiz 1: Dilbilgisi ve Fiil Çekimleri (Grammar & Conjugation)
export const unit330Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'Je ___ américain.' (être)", options: [{ id: "a", text: "suis", correct: true }, { id: "b", text: "es", correct: false }, { id: "c", text: "est", correct: false }, { id: "d", text: "sommes", correct: false }] },
    { id: 2, type: "SELECT", question: "'Tu ___ faim?' (avoir)", options: [{ id: "a", text: "as", correct: true }, { id: "b", text: "a", correct: false }, { id: "c", text: "ai", correct: false }, { id: "d", text: "avez", correct: false }] },
    { id: 3, type: "SELECT", question: "'Il ___ au cinéma.' (aller)", options: [{ id: "a", text: "va", correct: true }, { id: "b", text: "vais", correct: false }, { id: "c", text: "vas", correct: false }, { id: "d", text: "vont", correct: false }] },
    { id: 4, type: "SELECT", question: "'Nous ___ du sport.' (faire)", options: [{ id: "a", text: "faisons", correct: true }, { id: "b", text: "faites", correct: false }, { id: "c", text: "font", correct: false }, { id: "d", text: "fais", correct: false }] },
    { id: 5, type: "SELECT", question: "'Ils ___ (parler) français.'", options: [{ id: "a", text: "parlent", correct: true }, { id: "b", text: "parle", correct: false }, { id: "c", text: "parlons", correct: false }, { id: "d", text: "parlez", correct: false }] },
    { id: 6, type: "SELECT", question: "'Elles ___ (finir) le devoir.'", options: [{ id: "a", text: "finissent", correct: true }, { id: "b", text: "finit", correct: false }, { id: "c", text: "finis", correct: false }, { id: "d", text: "finissons", correct: false }] },
    { id: 7, type: "SELECT", question: "'Je ___ (prendre) le train.'", options: [{ id: "a", text: "prends", correct: true }, { id: "b", text: "prend", correct: false }, { id: "c", text: "prens", correct: false }, { id: "d", text: "prenez", correct: false }] },
    { id: 8, type: "SELECT", question: "'Tu ___ (pouvoir) venir?'", options: [{ id: "a", text: "peux", correct: true }, { id: "b", text: "peut", correct: false }, { id: "c", text: "pouvons", correct: false }, { id: "d", text: "pouvez", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Ben Fransız değilim", correctAnswer: "Je ne suis pas français" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ (vouloir) une pomme.", options: [{ id: "a", text: "veut", correct: true }, { id: "b", text: "veux", correct: false }] },
    { id: 11, type: "SELECT", question: "'Vous ___ (attendre) le bus.'", options: [{ id: "a", text: "attendez", correct: true }, { id: "b", text: "attends", correct: false }, { id: "c", text: "attend", correct: false }, { id: "d", text: "attendent", correct: false }] },
    { id: 12, type: "SELECT", question: "'Mon frère ___ (s'appeler) Paul.'", options: [{ id: "a", text: "s'appelle", correct: true }, { id: "b", text: "t'appelles", correct: false }, { id: "c", text: "m'appelle", correct: false }, { id: "d", text: "s'appellent", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Yorgunum", correctAnswer: "Je suis fatigué" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ (habiter) à Paris.", options: [{ id: "a", text: "habitons", correct: true }, { id: "b", text: "habitent", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Onların arabası var", correctAnswer: "Ils ont une voiture" },
    { id: 16, type: "SELECT", question: "'C'est ___ livre.' (Benim)", options: [{ id: "a", text: "mon", correct: true }, { id: "b", text: "ma", correct: false }, { id: "c", text: "mes", correct: false }, { id: "d", text: "moi", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Où sont ___ clés? (Senin)", options: [{ id: "a", text: "tes", correct: true }, { id: "b", text: "ton", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Nereye gidiyorsun?", correctAnswer: "Où vas-tu?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y ___ un chat sur la table.", options: [{ id: "a", text: "a", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Dilbilgisi tekrarını tamamladık!", correctAnswer: "Nous avons terminé la révision de grammaire!" }
];

// Quiz 2: Kelime Bilgisi (Vocabulary Review)
export const unit330Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "'Le père' ne demek?", options: [{ id: "a", text: "Baba", correct: true }, { id: "b", text: "Anne", correct: false }, { id: "c", text: "Kardeş", correct: false }, { id: "d", text: "Amca", correct: false }] },
    { id: 2, type: "SELECT", question: "'La pomme' ne demek?", options: [{ id: "a", text: "Elma", correct: true }, { id: "b", text: "Armut", correct: false }, { id: "c", text: "Portakal", correct: false }, { id: "d", text: "Muz", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La maison", options: [{ id: "a", text: "Ev", correct: true }, { id: "b", text: "Okul", correct: false }, { id: "c", text: "Araba", correct: false }, { id: "d", text: "Bahçe", correct: false }] },
    { id: 4, type: "SELECT", question: "'La ville' ne demek?", options: [{ id: "a", text: "Şehir", correct: true }, { id: "b", text: "Köy", correct: false }, { id: "c", text: "Ülke", correct: false }, { id: "d", text: "Kıta", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le chat", options: [{ id: "a", text: "Kedi", correct: true }, { id: "b", text: "Köpek", correct: false }, { id: "c", text: "Kuş", correct: false }, { id: "d", text: "Balık", correct: false }] },
    { id: 6, type: "SELECT", question: "'La semaine' ne demek?", options: [{ id: "a", text: "Hafta", correct: true }, { id: "b", text: "Gün", correct: false }, { id: "c", text: "Ay", correct: false }, { id: "d", text: "Yıl", correct: false }] },
    { id: 7, type: "SELECT", question: "'Aujourd'hui' ne demek?", options: [{ id: "a", text: "Bugün", correct: true }, { id: "b", text: "Yarın", correct: false }, { id: "c", text: "Dün", correct: false }, { id: "d", text: "Şimdi", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le matin' ne demek?", options: [{ id: "a", text: "Sabah", correct: true }, { id: "b", text: "Öğle", correct: false }, { id: "c", text: "Akşam", correct: false }, { id: "d", text: "Gece", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Kırmızı bir araba", correctAnswer: "Une voiture rouge" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime le ___ (ekmek).", options: [{ id: "a", text: "pain", correct: true }, { id: "b", text: "lait", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'eau", options: [{ id: "a", text: "Su", correct: true }, { id: "b", text: "Süt", correct: false }, { id: "c", text: "Çay", correct: false }, { id: "d", text: "Kahve", correct: false }] },
    { id: 12, type: "SELECT", question: "'Le médecin' ne demek?", options: [{ id: "a", text: "Doktor", correct: true }, { id: "b", text: "Öğretmen", correct: false }, { id: "c", text: "Polis", correct: false }, { id: "d", text: "Aşçı", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Küçük bir köpek", correctAnswer: "Un petit chien" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est ___ (saat 8).", options: [{ id: "a", text: "huit heures", correct: true }, { id: "b", text: "neuf heures", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ben öğrenciyim", correctAnswer: "Je suis étudiant" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'hiver", options: [{ id: "a", text: "Kış", correct: true }, { id: "b", text: "Yaz", correct: false }, { id: "c", text: "Bahar", correct: false }, { id: "d", text: "Güz", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est mon ___ (arkadaş).", options: [{ id: "a", text: "ami", correct: true }, { id: "b", text: "ennemi", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Pazar günü", correctAnswer: "Dimanche" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "La robe est ___ (güzel).", options: [{ id: "a", text: "belle", correct: true }, { id: "b", text: "beau", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kelime tekrarını tamamladık!", correctAnswer: "Nous avons terminé la révision de vocabulaire!" }
];

// Quiz 3: Durumsal Diyaloglar (Situational Review)
export const unit330Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'Bonjour, comment ça va?' - Cevap ver:", options: [{ id: "a", text: "Ça va bien, merci.", correct: true }, { id: "b", text: "Je m'appelle Paul.", correct: false }, { id: "c", text: "J'ai 20 ans.", correct: false }, { id: "d", text: "Il est midi.", correct: false }] },
    { id: 2, type: "SELECT", question: "'Quel est ton nom?' - Cevap ver:", options: [{ id: "a", text: "Je m'appelle Alice.", correct: true }, { id: "b", text: "J'habite à Paris.", correct: false }, { id: "c", text: "Je suis française.", correct: false }, { id: "d", text: "Oui, ça va.", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Enchanté", options: [{ id: "a", text: "Memnun oldum", correct: true }, { id: "b", text: "Güle güle", correct: false }, { id: "c", text: "Teşekkürler", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 4, type: "SELECT", question: "'Au revoir' ne demek?", options: [{ id: "a", text: "Güle güle", correct: true }, { id: "b", text: "Merhaba", correct: false }, { id: "c", text: "Günaydın", correct: false }, { id: "d", text: "İyi geceler", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "S'il vous plaît", options: [{ id: "a", text: "Lütfen (resmi)", correct: true }, { id: "b", text: "Teşekkürler", correct: false }, { id: "c", text: "Pardon", correct: false }, { id: "d", text: "Tamam", correct: false }] },
    { id: 6, type: "SELECT", question: "'Merci beaucoup' ne demek?", options: [{ id: "a", text: "Çok teşekkürler", correct: true }, { id: "b", text: "Rica ederim", correct: false }, { id: "c", text: "Özür dilerim", correct: false }, { id: "d", text: "Lütfen", correct: false }] },
    { id: 7, type: "SELECT", question: "'Je voudrais un café.' - Ne istiyor?", options: [{ id: "a", text: "Bir kahve", correct: true }, { id: "b", text: "Bir çay", correct: false }, { id: "c", text: "Bir su", correct: false }, { id: "d", text: "Bir bira", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'addition, s'il vous plaît.' - Ne istiyor?", options: [{ id: "a", text: "Hesap", correct: true }, { id: "b", text: "Menü", correct: false }, { id: "c", text: "Sipariş", correct: false }, { id: "d", text: "Tuvalet", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Fransızca konuşuyor musunuz?", correctAnswer: "Parlez-vous français?" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "___, où est la gare?", options: [{ id: "a", text: "Pardon", correct: true }, { id: "b", text: "Merci", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bon anniversaire", options: [{ id: "a", text: "Doğum günün kutlu olsun", correct: true }, { id: "b", text: "İyi şanslar", correct: false }, { id: "c", text: "Tebrikler", correct: false }, { id: "d", text: "İyi yolculuklar", correct: false }] },
    { id: 12, type: "SELECT", question: "'Bon appétit' ne demek?", options: [{ id: "a", text: "Afiyet olsun", correct: true }, { id: "b", text: "İyi geceler", correct: false }, { id: "c", text: "İyi yolculuklar", correct: false }, { id: "d", text: "Hoş geldiniz", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Anlamıyorum", correctAnswer: "Je ne comprends pas" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ aller aux toilettes.", options: [{ id: "a", text: "dois", correct: true }, { id: "b", text: "fais", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Saat kaç?", correctAnswer: "Quelle heure est-il?" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "À demain", options: [{ id: "a", text: "Yarına görüşürüz", correct: true }, { id: "b", text: "Bugün", correct: false }, { id: "c", text: "Dün", correct: false }, { id: "d", text: "Sonra", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ (çok güzel).", options: [{ id: "a", text: "très beau", correct: true }, { id: "b", text: "moche", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Yardım edebilir misiniz?", correctAnswer: "Pouvez-vous m'aider?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis ___ (Türk).", options: [{ id: "a", text: "turc", correct: true }, { id: "b", text: "france", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Diyalog tekrarını tamamladık!", correctAnswer: "Nous avons terminé la révision des dialogues!" }
];

// Quiz 4: Karma Test (Mixed Review)
export const unit330Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'La semaine prochaine' ne demek?", options: [{ id: "a", text: "Gelecek hafta", correct: true }, { id: "b", text: "Geçen hafta", correct: false }, { id: "c", text: "Bu hafta", correct: false }, { id: "d", text: "Hafta sonu", correct: false }] },
    { id: 2, type: "SELECT", question: "'Je me lève à 7 heures.' - Ne yapıyor?", options: [{ id: "a", text: "Kalkıyor", correct: true }, { id: "b", text: "Yatıyor", correct: false }, { id: "c", text: "Yiyor", correct: false }, { id: "d", text: "Gidiyor", correct: false }] },
    { id: 3, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il pleut", options: [{ id: "a", text: "Yağmur yağıyor", correct: true }, { id: "b", text: "Güneşli", correct: false }, { id: "c", text: "Rüzgarlı", correct: false }, { id: "d", text: "Karlı", correct: false }] },
    { id: 4, type: "SELECT", question: "'J'aime le chocolat.' - Ne seviyor?", options: [{ id: "a", text: "Çikolata", correct: true }, { id: "b", text: "Kahve", correct: false }, { id: "c", text: "Pasta", correct: false }, { id: "d", text: "Şeker", correct: false }] },
    { id: 5, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est délicieux", options: [{ id: "a", text: "Bu lezzetli", correct: true }, { id: "b", text: "Bu kötü", correct: false }, { id: "c", text: "Bu pahalı", correct: false }, { id: "d", text: "Bu ucuz", correct: false }] },
    { id: 6, type: "SELECT", question: "'Mon anniversaire est en mai.' - Hangi ay?", options: [{ id: "a", text: "Mayıs", correct: true }, { id: "b", text: "Mart", correct: false }, { id: "c", text: "Nisan", correct: false }, { id: "d", text: "Haziran", correct: false }] },
    { id: 7, type: "SELECT", question: "'Il est grand et blond.' - Nasıl biri?", options: [{ id: "a", text: "Uzun ve sarışın", correct: true }, { id: "b", text: "Kısa ve esmer", correct: false }, { id: "c", text: "Uzun ve esmer", correct: false }, { id: "d", text: "Kısa ve sarışın", correct: false }] },
    { id: 8, type: "SELECT", question: "'Soixante-dix' kaç?", options: [{ id: "a", text: "70", correct: true }, { id: "b", text: "60", correct: false }, { id: "c", text: "80", correct: false }, { id: "d", text: "90", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Nerede oturuyorsun?", correctAnswer: "Où habites-tu?" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais ___ (sinemaya).", options: [{ id: "a", text: "au cinéma", correct: true }, { id: "b", text: "à la cinéma", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je suis désolé", options: [{ id: "a", text: "Üzgünüm", correct: true }, { id: "b", text: "Mutluyum", correct: false }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Hastayım", correct: false }] },
    { id: 12, type: "SELECT", question: "'Le stylo est sur la table.' - Kalem nerede?", options: [{ id: "a", text: "Masanın üstünde", correct: true }, { id: "b", text: "Masanın altında", correct: false }, { id: "c", text: "Masanın yanında", correct: false }, { id: "d", text: "Masanın içinde", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Gözlerim yeşil", correctAnswer: "J'ai les yeux verts" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ (gitmek) à la plage.", options: [{ id: "a", text: "allons", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Çok sıcak", correctAnswer: "Il fait très chaud" },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bonne nuit", options: [{ id: "a", text: "İyi geceler", correct: true }, { id: "b", text: "İyi akşamlar", correct: false }, { id: "c", text: "Günaydın", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai acheté un ___ (kitap).", options: [{ id: "a", text: "livre", correct: true }, { id: "b", text: "cahier", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bu benim arkadaşım", correctAnswer: "C'est mon ami" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a ___ (çok) de monde.", options: [{ id: "a", text: "beaucoup", correct: true }, { id: "b", text: "peu", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "A1 seviyesini tamamladık! Tebrikler!", correctAnswer: "Nous avons terminé le niveau A1! Félicitations!" }
];
