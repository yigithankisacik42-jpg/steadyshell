
// SteadyShell Quiz Soruları - Fransızca A2 (331-360)
// Her ünite için quiz soruları

import { Question } from './questions';

// ===== ÜNİTE 331: GEÇMİŞ TATİLLER =====
const unit331Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'J'ai mangé' ne demek?", options: [{ id: "a", text: "Yedim", correct: true }, { id: "b", text: "Yiyorum", correct: false }, { id: "c", text: "Yiyeceğim", correct: false }, { id: "d", text: "Yerdim", correct: false }] },
    { id: 2, type: "SELECT", question: "Passé Composé'de hangi yardımcı fiiller kullanılır?", options: [{ id: "a", text: "AVOIR ve ÊTRE", correct: true }, { id: "b", text: "ALLER ve VENIR", correct: false }, { id: "c", text: "FAIRE ve DIRE", correct: false }, { id: "d", text: "POUVOIR ve VOULOIR", correct: false }] },
    { id: 3, type: "SELECT", question: "'Visité' hangi fiilin geçmiş ortacıdır?", options: [{ id: "a", text: "Visiter", correct: true }, { id: "b", text: "Voir", correct: false }, { id: "c", text: "Venir", correct: false }, { id: "d", text: "Vouloir", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai passé de bonnes vacances", options: [{ id: "a", text: "Güzel tatil geçirdim", correct: true }, { id: "b", text: "Tatile gideceğim", correct: false }, { id: "c", text: "Tatil planlıyorum", correct: false }, { id: "d", text: "Tatil güzeldi", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ visité Paris.", options: [{ id: "a", text: "ai", correct: true }, { id: "b", text: "suis", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ partie hier.", options: [{ id: "a", text: "est", correct: true }, { id: "b", text: "a", correct: false }] },
    { id: 7, type: "SELECT", question: "'La plage' ne demek?", options: [{ id: "a", text: "Plaj", correct: true }, { id: "b", text: "Dağ", correct: false }, { id: "c", text: "Otel", correct: false }, { id: "d", text: "Tatil", correct: false }] },
    { id: 8, type: "SELECT", question: "'Les vacances' ne demek?", options: [{ id: "a", text: "Tatil", correct: true }, { id: "b", text: "Seyahat", correct: false }, { id: "c", text: "Yolculuk", correct: false }, { id: "d", text: "Gezi", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Geçmiş yaz", correctAnswer: "L'été dernier" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Gittim", correctAnswer: "Je suis allé" },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Çok eğlendik", correctAnswer: "Nous nous sommes bien amusés" },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ont ___ des photos.", options: [{ id: "a", text: "pris", correct: true }, { id: "b", text: "prendre", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'était magnifique", options: [{ id: "a", text: "Harikaydı", correct: true }, { id: "b", text: "Harika olacak", correct: false }, { id: "c", text: "Harika görünüyor", correct: false }, { id: "d", text: "Harika olur", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ allés à la plage.", options: [{ id: "a", text: "sommes", correct: true }, { id: "b", text: "avons", correct: false }] },
    { id: 15, type: "SELECT", question: "Hangi fiil ÊTRE ile çekilir?", options: [{ id: "a", text: "Partir (gitmek)", correct: true }, { id: "b", text: "Manger (yemek)", correct: false }, { id: "c", text: "Visiter (ziyaret etmek)", correct: false }, { id: "d", text: "Acheter (almak)", correct: false }] },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Harikaydı", correctAnswer: "C'était magnifique" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Güzel bir bölge keşfettim", correctAnswer: "J'ai découvert une belle région" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Çok fotoğraf çektik", correctAnswer: "Nous avons pris beaucoup de photos" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ resté à l'hôtel.", options: [{ id: "a", text: "est", correct: true }, { id: "b", text: "a", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İyi dinlendim", correctAnswer: "Je me suis bien reposé" }
];

const unit331Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'L'hôtel' ne demek?", options: [{ id: "a", text: "Otel", correct: true }, { id: "b", text: "Hastane", correct: false }, { id: "c", text: "Restoran", correct: false }, { id: "d", text: "Havaalanı", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le voyage' ne demek?", options: [{ id: "a", text: "Seyahat", correct: true }, { id: "b", text: "Tatil", correct: false }, { id: "c", text: "Gezi", correct: false }, { id: "d", text: "Yolculuk", correct: false }] },
    { id: 3, type: "SELECT", question: "'Mangé' hangi fiilin geçmiş ortacıdır?", options: [{ id: "a", text: "Manger", correct: true }, { id: "b", text: "Marcher", correct: false }, { id: "c", text: "Monter", correct: false }, { id: "d", text: "Montrer", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ mangé une pizza.", options: [{ id: "a", text: "as", correct: true }, { id: "b", text: "es", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ regardé un film.", options: [{ id: "a", text: "avons", correct: true }, { id: "b", text: "sommes", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai visité un musée", options: [{ id: "a", text: "Bir müze ziyaret ettim", correct: true }, { id: "b", text: "Bir müze ziyaret ediyorum", correct: false }, { id: "c", text: "Müzeyi seviyorum", correct: false }, { id: "d", text: "Müzeye gideceğim", correct: false }] },
    { id: 7, type: "SELECT", question: "'La montagne' ne demek?", options: [{ id: "a", text: "Dağ", correct: true }, { id: "b", text: "Deniz", correct: false }, { id: "c", text: "Göl", correct: false }, { id: "d", text: "Orman", correct: false }] },
    { id: 8, type: "SELECT", question: "'Bronzer' ne demek?", options: [{ id: "a", text: "Bronzlaşmak", correct: true }, { id: "b", text: "Yüzmek", correct: false }, { id: "c", text: "Koşmak", correct: false }, { id: "d", text: "Dinlenmek", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Plaja gittik", correctAnswer: "Nous sommes allés à la plage" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bir müze ziyaret ettim", correctAnswer: "J'ai visité un musée" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Elles ___ arrivées hier.", options: [{ id: "a", text: "sont", correct: true }, { id: "b", text: "ont", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il a ___ un livre.", options: [{ id: "a", text: "lu", correct: true }, { id: "b", text: "lire", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Elle est partie hier", options: [{ id: "a", text: "Dün gitti", correct: true }, { id: "b", text: "Dün geldi", correct: false }, { id: "c", text: "Yarın gidecek", correct: false }, { id: "d", text: "Yarın gelecek", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ acheté des souvenirs.", options: [{ id: "a", text: "avez", correct: true }, { id: "b", text: "êtes", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Hatıralar aldım", correctAnswer: "J'ai acheté des souvenirs" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Denizde yüzdüm", correctAnswer: "J'ai nagé dans la mer" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Dağda kayak yaptım", correctAnswer: "J'ai fait du ski à la montagne" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous nous ___ bien amusés.", options: [{ id: "a", text: "sommes", correct: true }, { id: "b", text: "avons", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Plajda bronzlaştım", correctAnswer: "J'ai bronzé sur la plage" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kamp yaptık", correctAnswer: "Nous avons fait du camping" }
];

const unit331Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Nager' ne demek?", options: [{ id: "a", text: "Yüzmek", correct: true }, { id: "b", text: "Koşmak", correct: false }, { id: "c", text: "Yürümek", correct: false }, { id: "d", text: "Atlamak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le souvenir' ne demek?", options: [{ id: "a", text: "Hatıra/Anı", correct: true }, { id: "b", text: "Hediye", correct: false }, { id: "c", text: "Fotoğraf", correct: false }, { id: "d", text: "Bilet", correct: false }] },
    { id: 3, type: "SELECT", question: "Hangi fiil ÊTRE ile çekilir?", options: [{ id: "a", text: "Arriver (varmak)", correct: true }, { id: "b", text: "Visiter (ziyaret etmek)", correct: false }, { id: "c", text: "Acheter (satın almak)", correct: false }, { id: "d", text: "Manger (yemek)", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ arrivé à 10h.", options: [{ id: "a", text: "suis", correct: true }, { id: "b", text: "ai", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle a ___ des photos.", options: [{ id: "a", text: "pris", correct: true }, { id: "b", text: "prendre", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nous avons fait du camping", options: [{ id: "a", text: "Kamp yaptık", correct: true }, { id: "b", text: "Kamp yapacağız", correct: false }, { id: "c", text: "Kamp yapıyoruz", correct: false }, { id: "d", text: "Kamp yapmayı seviyoruz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Découvrir' ne demek?", options: [{ id: "a", text: "Keşfetmek", correct: true }, { id: "b", text: "Örtmek", correct: false }, { id: "c", text: "Açmak", correct: false }, { id: "d", text: "Kapamak", correct: false }] },
    { id: 8, type: "SELECT", question: "'Inoubliable' ne demek?", options: [{ id: "a", text: "Unutulmaz", correct: true }, { id: "b", text: "Sıkıcı", correct: false }, { id: "c", text: "Zor", correct: false }, { id: "d", text: "Kolay", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Otel rahattı", correctAnswer: "L'hôtel était confortable" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Yolculuk uzundu", correctAnswer: "Le voyage était long" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ descendus à l'hôtel.", options: [{ id: "a", text: "sont", correct: true }, { id: "b", text: "ont", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ une excursion.", options: [{ id: "a", text: "fait", correct: true }, { id: "b", text: "faire", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il est rentré tard", options: [{ id: "a", text: "Geç döndü", correct: true }, { id: "b", text: "Erken döndü", correct: false }, { id: "c", text: "Geç kaldı", correct: false }, { id: "d", text: "Geç geldi", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ rentré quand?", options: [{ id: "a", text: "es", correct: true }, { id: "b", text: "as", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Gezi yaptım", correctAnswer: "J'ai fait une excursion" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Unutulmazdı!", correctAnswer: "C'était inoubliable!" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Güzel bir bölge keşfettik", correctAnswer: "Nous avons découvert une belle région" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle s'est ___ à la plage.", options: [{ id: "a", text: "reposée", correct: true }, { id: "b", text: "reposé", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Onlar geç vardı", correctAnswer: "Ils sont arrivés tard" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bir hafta kaldık", correctAnswer: "Nous sommes restés une semaine" }
];

const unit331Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'La photo' ne demek?", options: [{ id: "a", text: "Fotoğraf", correct: true }, { id: "b", text: "Video", correct: false }, { id: "c", text: "Resim", correct: false }, { id: "d", text: "Kart", correct: false }] },
    { id: 2, type: "SELECT", question: "'L'excursion' ne demek?", options: [{ id: "a", text: "Gezi", correct: true }, { id: "b", text: "Tatil", correct: false }, { id: "c", text: "Seyahat", correct: false }, { id: "d", text: "Yolculuk", correct: false }] },
    { id: 3, type: "SELECT", question: "'Fait' hangi fiilin geçmiş ortacıdır?", options: [{ id: "a", text: "Faire", correct: true }, { id: "b", text: "Finir", correct: false }, { id: "c", text: "Falloir", correct: false }, { id: "d", text: "Fumer", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "On a ___ du ski.", options: [{ id: "a", text: "fait", correct: true }, { id: "b", text: "faire", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Marie ___ venue avec nous.", options: [{ id: "a", text: "est", correct: true }, { id: "b", text: "a", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai pris beaucoup de photos", options: [{ id: "a", text: "Çok fotoğraf çektim", correct: true }, { id: "b", text: "Fotoğraf çekeceğim", correct: false }, { id: "c", text: "Fotoğraf çekiyorum", correct: false }, { id: "d", text: "Fotoğraf seviyorum", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le camping' ne demek?", options: [{ id: "a", text: "Kamp", correct: true }, { id: "b", text: "Otel", correct: false }, { id: "c", text: "Pansiyon", correct: false }, { id: "d", text: "Çadır", correct: false }] },
    { id: 8, type: "SELECT", question: "'Se reposer' ne demek?", options: [{ id: "a", text: "Dinlenmek", correct: true }, { id: "b", text: "Yemek", correct: false }, { id: "c", text: "Uyumak", correct: false }, { id: "d", text: "Kalkmak", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Çok eğlendik", correctAnswer: "Nous nous sommes bien amusés" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Güneşli bir gündü", correctAnswer: "C'était une journée ensoleillée" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ montée en haut.", options: [{ id: "a", text: "est", correct: true }, { id: "b", text: "a", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ un bon repas.", options: [{ id: "a", text: "mangé", correct: true }, { id: "b", text: "manger", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ils sont partis le matin", options: [{ id: "a", text: "Sabah gittiler", correct: true }, { id: "b", text: "Sabah geldiler", correct: false }, { id: "c", text: "Akşam gittiler", correct: false }, { id: "d", text: "Akşam geldiler", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ revenus fatigués.", options: [{ id: "a", text: "sommes", correct: true }, { id: "b", text: "avons", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Sabah kalktım", correctAnswer: "Je me suis levé le matin" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Geçen yıl Paris'e gittik", correctAnswer: "L'année dernière, nous sommes allés à Paris" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Orada bir hafta kaldım", correctAnswer: "J'y suis resté une semaine" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Elles se sont ___ tôt.", options: [{ id: "a", text: "levées", correct: true }, { id: "b", text: "levé", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Birlikte güzel anılar yaşadık", correctAnswer: "Nous avons vécu de beaux souvenirs ensemble" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "En güzel tatilimdi", correctAnswer: "C'était mes plus belles vacances" }
];

const unit332Quiz1: Question[] = [
    // KOLAY (8 Soru) - Temel Çekimler
    { id: 1, type: "SELECT", question: "'Je vais' ne demek?", options: [{ id: "a", text: "Gidiyorum / -eceğim", correct: true }, { id: "b", text: "Geliyorum", correct: false }, { id: "c", text: "Yapıyorum", correct: false }, { id: "d", text: "İstiyorum", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ manger.", options: [{ id: "a", text: "vas", correct: true }, { id: "b", text: "vais", correct: false }] },
    { id: 3, type: "SELECT", question: "'Nous allons' hangi zamirdir?", options: [{ id: "a", text: "Biz", correct: true }, { id: "b", text: "Siz", correct: false }, { id: "c", text: "Onlar", correct: false }, { id: "d", text: "Ben", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ partir.", options: [{ id: "a", text: "vont", correct: true }, { id: "b", text: "allez", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Gideceğim", correctAnswer: "Je vais partir" },
    { id: 6, type: "TRANSLATE", question: "Çevir:", hint: "Yarın", correctAnswer: "Demain" },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je vais dormir", options: [{ id: "a", text: "Uyuyacağım", correct: true }, { id: "b", text: "Uyuyorum", correct: false }, { id: "c", text: "Uyudum", correct: false }, { id: "d", text: "Uyumak istiyorum", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ regarder la télé.", options: [{ id: "a", text: "allez", correct: true }, { id: "b", text: "allons", correct: false }] },

    // ORTA (7 Soru) - Olumsuz ve Dönüşlü
    { id: 9, type: "SELECT", question: "Hangisi OLUMSUZ bir cümledir?", options: [{ id: "a", text: "Je ne vais pas sortir.", correct: true }, { id: "b", text: "Je vais sortir.", correct: false }, { id: "c", text: "Je ne sors pas.", correct: false }, { id: "d", text: "Je vais ne pas sortir.", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais ___ reposer.", options: [{ id: "a", text: "me", correct: true }, { id: "b", text: "te", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Yemeyeceğim", correctAnswer: "Je ne vais pas manger" },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous allons ___ lever tôt.", options: [{ id: "a", text: "nous", correct: true }, { id: "b", text: "vous", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il ne va pas venir", options: [{ id: "a", text: "Gelmeyecek", correct: true }, { id: "b", text: "Gitmeyecek", correct: false }, { id: "c", text: "Gelmiyor", correct: false }, { id: "d", text: "Gelmedi", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Gelecek yaz", correctAnswer: "L'été prochain" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu vas ___ préparer?", options: [{ id: "a", text: "te", correct: true }, { id: "b", text: "me", correct: false }] },

    // ZOR (5 Soru) - Karışık ve Soru Cümleleri
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bu akşam ne yapacaksın?", correctAnswer: "Qu'est-ce que tu vas faire ce soir?" },
    { id: 17, type: "SELECT", question: "'Vas-tu sortir?' cümlesinin anlamı nedir?", options: [{ id: "a", text: "Çıkacak mısın?", correct: true }, { id: "b", text: "Çıkıyor musun?", correct: false }, { id: "c", text: "Çıkmalı mısın?", correct: false }, { id: "d", text: "Çıktın mı?", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Yakında gidecekler", correctAnswer: "Ils vont partir bientôt" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ réserver l'hôtel.", options: [{ id: "a", text: "va", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Gelecek hafta başlayacağız", correctAnswer: "Nous allons commencer la semaine prochaine" }
];

const unit332Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Le projet' ne demek?", options: [{ id: "a", text: "Proje/Plan", correct: true }, { id: "b", text: "Hedef", correct: false }, { id: "c", text: "Rüya", correct: false }, { id: "d", text: "Fikir", correct: false }] },
    { id: 2, type: "SELECT", question: "'Bientôt' ne demek?", options: [{ id: "a", text: "Yakında", correct: true }, { id: "b", text: "Şimdi", correct: false }, { id: "c", text: "Dün", correct: false }, { id: "d", text: "Geçen hafta", correct: false }] },
    { id: 3, type: "SELECT", question: "'L'avenir' ne demek?", options: [{ id: "a", text: "Gelecek", correct: true }, { id: "b", text: "Geçmiş", correct: false }, { id: "c", text: "Şimdi", correct: false }, { id: "d", text: "Her zaman", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "On ___ manger.", options: [{ id: "a", text: "va", correct: true }, { id: "b", text: "vais", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ étudier demain.", options: [{ id: "a", text: "vais", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nous allons voyager", options: [{ id: "a", text: "Seyahat edeceğiz", correct: true }, { id: "b", text: "Seyahat ediyoruz", correct: false }, { id: "c", text: "Seyahat ettik", correct: false }, { id: "d", text: "Seyahat ederiz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Espérer' ne demek?", options: [{ id: "a", text: "Ummak", correct: true }, { id: "b", text: "Beklemek", correct: false }, { id: "c", text: "Korkmak", correct: false }, { id: "d", text: "Sevmek", correct: false }] },
    { id: 8, type: "SELECT", question: "'Prévoir' ne demek?", options: [{ id: "a", text: "Planlamak", correct: true }, { id: "b", text: "Görmek", correct: false }, { id: "c", text: "Bilmek", correct: false }, { id: "d", text: "İstemek", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Yarın çalışacağım", correctAnswer: "Je vais travailler demain" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Gelecek ay taşınacağız", correctAnswer: "Nous allons déménager le mois prochain" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ne ___ pas venir?", options: [{ id: "a", text: "vas", correct: true }, { id: "b", text: "vais", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Elles ___ partir tôt.", options: [{ id: "a", text: "vont", correct: true }, { id: "b", text: "allons", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je vais me coucher", options: [{ id: "a", text: "Yatacağım", correct: true }, { id: "b", text: "Yatıyorum", correct: false }, { id: "c", text: "Yattım", correct: false }, { id: "d", text: "Yatmalıyım", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ se réveiller à 6h.", options: [{ id: "a", text: "va", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Başarmayı umuyorum", correctAnswer: "J'espère réussir" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Temmuz'da gitmeyi planlıyorum", correctAnswer: "Je prévois de partir en juillet" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Yemek yemeyecekler", correctAnswer: "Ils ne vont pas manger" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "On ne ___ pas sortir ce soir.", options: [{ id: "a", text: "va", correct: true }, { id: "b", text: "vais", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Seyahat hayali kuruyorum", correctAnswer: "Je rêve de voyager" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Öğrenme niyetindeyim", correctAnswer: "J'ai l'intention d'apprendre" }
];

const unit332Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Le rêve' ne demek?", options: [{ id: "a", text: "Rüya/Hayal", correct: true }, { id: "b", text: "Plan", correct: false }, { id: "c", text: "Hedef", correct: false }, { id: "d", text: "Proje", correct: false }] },
    { id: 2, type: "SELECT", question: "'L'objectif' ne demek?", options: [{ id: "a", text: "Hedef", correct: true }, { id: "b", text: "Rüya", correct: false }, { id: "c", text: "Plan", correct: false }, { id: "d", text: "İş", correct: false }] },
    { id: 3, type: "SELECT", question: "'La semaine prochaine' ne demek?", options: [{ id: "a", text: "Gelecek hafta", correct: true }, { id: "b", text: "Geçen hafta", correct: false }, { id: "c", text: "Bu hafta", correct: false }, { id: "d", text: "Her hafta", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ nous promener.", options: [{ id: "a", text: "allons", correct: true }, { id: "b", text: "allez", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ apprendre le français.", options: [{ id: "a", text: "allez", correct: true }, { id: "b", text: "allons", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Elle va se marier", options: [{ id: "a", text: "Evlenecek", correct: true }, { id: "b", text: "Evleniyor", correct: false }, { id: "c", text: "Evlendi", correct: false }, { id: "d", text: "Evlenmeli", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le mois prochain' ne demek?", options: [{ id: "a", text: "Gelecek ay", correct: true }, { id: "b", text: "Geçen ay", correct: false }, { id: "c", text: "Bu ay", correct: false }, { id: "d", text: "Her ay", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'année prochaine' ne demek?", options: [{ id: "a", text: "Gelecek yıl", correct: true }, { id: "b", text: "Geçen yıl", correct: false }, { id: "c", text: "Bu yıl", correct: false }, { id: "d", text: "Her yıl", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Akşam film izleyeceğiz", correctAnswer: "Nous allons regarder un film ce soir" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Pazartesi başlayacak", correctAnswer: "Il va commencer lundi" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu vas ___ habiller?", options: [{ id: "a", text: "t'", correct: true }, { id: "b", text: "te", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais ___ laver.", options: [{ id: "a", text: "me", correct: true }, { id: "b", text: "te", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nous allons nous amuser", options: [{ id: "a", text: "Eğleneceğiz", correct: true }, { id: "b", text: "Eğleniyoruz", correct: false }, { id: "c", text: "Eğlendik", correct: false }, { id: "d", text: "Eğlenmeliyiz", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils vont ___ retrouver au café.", options: [{ id: "a", text: "se", correct: true }, { id: "b", text: "nous", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bu benim hayalim!", correctAnswer: "C'est mon rêve!" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Hazırlanmayacak mısın?", correctAnswer: "Tu ne vas pas te préparer?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Hedefim başarmak", correctAnswer: "Mon objectif est de réussir" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ne va pas ___ dépêcher.", options: [{ id: "a", text: "se", correct: true }, { id: "b", text: "me", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Ne zaman gideceksin?", correctAnswer: "Quand vas-tu partir?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Gelecek yıl üniversiteye başlayacağım", correctAnswer: "L'année prochaine, je vais commencer l'université" }
];

const unit332Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Demain' ne demek?", options: [{ id: "a", text: "Yarın", correct: true }, { id: "b", text: "Bugün", correct: false }, { id: "c", text: "Dün", correct: false }, { id: "d", text: "Şimdi", correct: false }] },
    { id: 2, type: "SELECT", question: "'Ce soir' ne demek?", options: [{ id: "a", text: "Bu akşam", correct: true }, { id: "b", text: "Dün akşam", correct: false }, { id: "c", text: "Her akşam", correct: false }, { id: "d", text: "Sabah", correct: false }] },
    { id: 3, type: "SELECT", question: "'Rêver de' ne demek?", options: [{ id: "a", text: "Hayalini kurmak", correct: true }, { id: "b", text: "Uyumak", correct: false }, { id: "c", text: "Düşünmek", correct: false }, { id: "d", text: "Hatırlamak", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Qu'est-ce que tu ___ faire?", options: [{ id: "a", text: "vas", correct: true }, { id: "b", text: "vais", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Où ___ -vous aller?", options: [{ id: "a", text: "allez", correct: true }, { id: "b", text: "allons", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je vais rentrer tard", options: [{ id: "a", text: "Geç döneceğim", correct: true }, { id: "b", text: "Geç dönüyorum", correct: false }, { id: "c", text: "Geç döndüm", correct: false }, { id: "d", text: "Geç dönmeliyim", correct: false }] },
    { id: 7, type: "SELECT", question: "'Après-demain' ne demek?", options: [{ id: "a", text: "Öbür gün", correct: true }, { id: "b", text: "Dün", correct: false }, { id: "c", text: "Evvelsi gün", correct: false }, { id: "d", text: "Bugün", correct: false }] },
    { id: 8, type: "SELECT", question: "'La semaine' ne demek?", options: [{ id: "a", text: "Hafta", correct: true }, { id: "b", text: "Ay", correct: false }, { id: "c", text: "Yıl", correct: false }, { id: "d", text: "Gün", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Bu akşam dışarı çıkacağız", correctAnswer: "Nous allons sortir ce soir" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Yarın erken kalkacağım", correctAnswer: "Je vais me lever tôt demain" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "On va ___ coucher à 22h.", options: [{ id: "a", text: "se", correct: true }, { id: "b", text: "nous", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous n'___ pas venir?", options: [{ id: "a", text: "allez", correct: true }, { id: "b", text: "allons", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ils vont déménager", options: [{ id: "a", text: "Taşınacaklar", correct: true }, { id: "b", text: "Taşınıyorlar", correct: false }, { id: "c", text: "Taşındılar", correct: false }, { id: "d", text: "Taşınmalılar", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle va ___ promener dans le parc.", options: [{ id: "a", text: "se", correct: true }, { id: "b", text: "me", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Nereye gideceksin?", correctAnswer: "Où vas-tu aller?" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bu akşam ne yapacaksınız?", correctAnswer: "Qu'est-ce que vous allez faire ce soir?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Hafta sonu dinleneceğiz", correctAnswer: "Nous allons nous reposer le week-end" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ne vas pas ___ réveiller tôt?", options: [{ id: "a", text: "te", correct: true }, { id: "b", text: "me", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Kaçta buluşacağız?", correctAnswer: "À quelle heure allons-nous nous retrouver?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bence yapamayacaklar", correctAnswer: "Je pense qu'ils ne vont pas pouvoir" }
];

const unit333Quiz1: Question[] = [
    // KOLAY (8 soru) - Temel Kelimeler ve Yapılar
    { id: 1, type: "SELECT", question: "'J'ai mal' ne demek?", options: [{ id: "a", text: "Ağrım var", correct: true }, { id: "b", text: "Hastayım", correct: false }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Açım", correct: false }] },
    { id: 2, type: "SELECT", question: "'La tête' ne demek?", options: [{ id: "a", text: "Baş", correct: true }, { id: "b", text: "Boğaz", correct: false }, { id: "c", text: "Karın", correct: false }, { id: "d", text: "Sırt", correct: false }] },
    { id: 3, type: "SELECT", question: "'La gorge' ne demek?", options: [{ id: "a", text: "Boğaz", correct: true }, { id: "b", text: "Baş", correct: false }, { id: "c", text: "Kulak", correct: false }, { id: "d", text: "Göz", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai mal ___ la tête.", options: [{ id: "a", text: "à", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai mal ___ ventre.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "à la", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai mal à la tête", options: [{ id: "a", text: "Başım ağrıyor", correct: true }, { id: "b", text: "Karnım ağrıyor", correct: false }, { id: "c", text: "Boğazım ağrıyor", correct: false }, { id: "d", text: "Sırtım ağrıyor", correct: false }] },
    { id: 7, type: "SELECT", question: "'Je suis malade' ne demek?", options: [{ id: "a", text: "Hastayım", correct: true }, { id: "b", text: "Yorgunum", correct: false }, { id: "c", text: "Açım", correct: false }, { id: "d", text: "Üşüyorum", correct: false }] },
    { id: 8, type: "SELECT", question: "'Il faut' ne demek?", options: [{ id: "a", text: "Lazım / Gerekiyor", correct: true }, { id: "b", text: "Yapıyor", correct: false }, { id: "c", text: "İstiyor", correct: false }, { id: "d", text: "Gidiyor", correct: false }] },

    // ORTA (7 soru) - Çekimler ve Kalıplar
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Başım ağrıyor", correctAnswer: "J'ai mal à la tête" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Boğazım ağrıyor", correctAnswer: "J'ai mal à la gorge" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai de la ___.", options: [{ id: "a", text: "fièvre", correct: true }, { id: "b", text: "mal", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ se reposer.", options: [{ id: "a", text: "faut", correct: true }, { id: "b", text: "doit", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vous devez prendre ce médicament", options: [{ id: "a", text: "Bu ilacı almalısınız", correct: true }, { id: "b", text: "Bu ilacı aldınız", correct: false }, { id: "c", text: "Bu ilacı alıyorsunuz", correct: false }, { id: "d", text: "Bu ilacı alın", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ boire beaucoup d'eau.", options: [{ id: "a", text: "devez", correct: true }, { id: "b", text: "devons", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Dinlenmeniz lazım", correctAnswer: "Il faut vous reposer" },

    // ZOR (5 soru) - Karmaşık Cümleler
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bu ilacı almalısınız", correctAnswer: "Vous devez prendre ce médicament" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Çok su içmek lazım", correctAnswer: "Il faut boire beaucoup d'eau" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai mal ___ dents.", options: [{ id: "a", text: "aux", correct: true }, { id: "b", text: "à les", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Kendimi iyi hissetmiyorum", correctAnswer: "Je ne me sens pas bien" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Doktora gitmelisin", correctAnswer: "Tu dois aller chez le médecin" }
];

const unit333Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Le ventre' ne demek?", options: [{ id: "a", text: "Karın", correct: true }, { id: "b", text: "Baş", correct: false }, { id: "c", text: "Sırt", correct: false }, { id: "d", text: "Boğaz", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le dos' ne demek?", options: [{ id: "a", text: "Sırt", correct: true }, { id: "b", text: "Karın", correct: false }, { id: "c", text: "Baş", correct: false }, { id: "d", text: "Kulak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Je dois' ne demek?", options: [{ id: "a", text: "Yapmalıyım / Zorundayım", correct: true }, { id: "b", text: "İstiyorum", correct: false }, { id: "c", text: "Gidiyorum", correct: false }, { id: "d", text: "Seviyorum", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai mal ___ dos.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "à la", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai mal ___ gorge.", options: [{ id: "a", text: "à la", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai mal au ventre", options: [{ id: "a", text: "Karnım ağrıyor", correct: true }, { id: "b", text: "Başım ağrıyor", correct: false }, { id: "c", text: "Sırtım ağrıyor", correct: false }, { id: "d", text: "Boğazım ağrıyor", correct: false }] },
    { id: 7, type: "SELECT", question: "'La fièvre' ne demek?", options: [{ id: "a", text: "Ateş", correct: true }, { id: "b", text: "Öksürük", correct: false }, { id: "c", text: "Grip", correct: false }, { id: "d", text: "Nezle", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le médicament' ne demek?", options: [{ id: "a", text: "İlaç", correct: true }, { id: "b", text: "Doktor", correct: false }, { id: "c", text: "Hastane", correct: false }, { id: "d", text: "Reçete", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Karnım ağrıyor", correctAnswer: "J'ai mal au ventre" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Sırtım ağrıyor", correctAnswer: "J'ai mal au dos" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ te reposer.", options: [{ id: "a", text: "dois", correct: true }, { id: "b", text: "doit", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ prendre des médicaments.", options: [{ id: "a", text: "faut", correct: true }, { id: "b", text: "doit", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il faut vous reposer", options: [{ id: "a", text: "Dinlenmeniz lazım", correct: true }, { id: "b", text: "Dinleniyorsunuz", correct: false }, { id: "c", text: "Dinlendiniz", correct: false }, { id: "d", text: "Dinlenirsiniz", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ aller chez le médecin.", options: [{ id: "a", text: "dois", correct: true }, { id: "b", text: "devez", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ateşim var", correctAnswer: "J'ai de la fièvre" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Sigarayı bırakmalısınız", correctAnswer: "Vous devez arrêter de fumer" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "İlaç almak lazım", correctAnswer: "Il faut prendre des médicaments" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai mal ___ yeux.", options: [{ id: "a", text: "aux", correct: true }, { id: "b", text: "à les", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Dişlerim ağrıyor", correctAnswer: "J'ai mal aux dents" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Dinlenmeliyim", correctAnswer: "Je dois me reposer" }
];

const unit333Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'L'oreille' ne demek?", options: [{ id: "a", text: "Kulak", correct: true }, { id: "b", text: "Göz", correct: false }, { id: "c", text: "Burun", correct: false }, { id: "d", text: "Ağız", correct: false }] },
    { id: 2, type: "SELECT", question: "'Les yeux' ne demek?", options: [{ id: "a", text: "Gözler", correct: true }, { id: "b", text: "Kulaklar", correct: false }, { id: "c", text: "Dişler", correct: false }, { id: "d", text: "Eller", correct: false }] },
    { id: 3, type: "SELECT", question: "'Vous devez' ne demek?", options: [{ id: "a", text: "Yapmalısınız / Zorundasınız", correct: true }, { id: "b", text: "İstiyorsunuz", correct: false }, { id: "c", text: "Gidiyorsunuz", correct: false }, { id: "d", text: "Seviyorsunuz", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai mal ___ l'oreille.", options: [{ id: "a", text: "à", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ rester au lit.", options: [{ id: "a", text: "devons", correct: true }, { id: "b", text: "devez", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je suis malade", options: [{ id: "a", text: "Hastayım", correct: true }, { id: "b", text: "Yorgunum", correct: false }, { id: "c", text: "Açım", correct: false }, { id: "d", text: "Üzgünüm", correct: false }] },
    { id: 7, type: "SELECT", question: "'La grippe' ne demek?", options: [{ id: "a", text: "Grip", correct: true }, { id: "b", text: "Nezle", correct: false }, { id: "c", text: "Öksürük", correct: false }, { id: "d", text: "Ateş", correct: false }] },
    { id: 8, type: "SELECT", question: "'Se reposer' ne demek?", options: [{ id: "a", text: "Dinlenmek", correct: true }, { id: "b", text: "Yemek", correct: false }, { id: "c", text: "Uyumak", correct: false }, { id: "d", text: "Yürümek", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Kulağım ağrıyor", correctAnswer: "J'ai mal à l'oreille" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Gözlerim ağrıyor", correctAnswer: "J'ai mal aux yeux" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ prendre ce sirop.", options: [{ id: "a", text: "doit", correct: true }, { id: "b", text: "dois", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ boire du thé chaud.", options: [{ id: "a", text: "faut", correct: true }, { id: "b", text: "doit", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tu dois boire beaucoup d'eau", options: [{ id: "a", text: "Çok su içmelisin", correct: true }, { id: "b", text: "Çok su içtin", correct: false }, { id: "c", text: "Çok su içiyorsun", correct: false }, { id: "d", text: "Çok su iç", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ aller à l'hôpital.", options: [{ id: "a", text: "doivent", correct: true }, { id: "b", text: "devons", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Çok öksürüyorum", correctAnswer: "Je tousse beaucoup" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Yatakta kalmalısınız", correctAnswer: "Vous devez rester au lit" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Sıcak çay içmek lazım", correctAnswer: "Il faut boire du thé chaud" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "On ___ manger léger.", options: [{ id: "a", text: "doit", correct: true }, { id: "b", text: "dois", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Nezleyim", correctAnswer: "Je suis enrhumé" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Eczaneye gitmeli", correctAnswer: "Il doit aller à la pharmacie" }
];

const unit333Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Les dents' ne demek?", options: [{ id: "a", text: "Dişler", correct: true }, { id: "b", text: "Gözler", correct: false }, { id: "c", text: "Kulaklar", correct: false }, { id: "d", text: "Eller", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le rhume' ne demek?", options: [{ id: "a", text: "Nezle", correct: true }, { id: "b", text: "Grip", correct: false }, { id: "c", text: "Ateş", correct: false }, { id: "d", text: "Öksürük", correct: false }] },
    { id: 3, type: "SELECT", question: "'Guérir' ne demek?", options: [{ id: "a", text: "İyileşmek", correct: true }, { id: "b", text: "Hastalanmak", correct: false }, { id: "c", text: "Ağrımak", correct: false }, { id: "d", text: "Öksürmek", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ rhume.", options: [{ id: "a", text: "un", correct: true }, { id: "b", text: "le", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle a ___ grippe.", options: [{ id: "a", text: "la", correct: true }, { id: "b", text: "une", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je vais guérir bientôt", options: [{ id: "a", text: "Yakında iyileşeceğim", correct: true }, { id: "b", text: "Yakında gideceğim", correct: false }, { id: "c", text: "Yakında geleceğim", correct: false }, { id: "d", text: "Yakında başlayacağım", correct: false }] },
    { id: 7, type: "SELECT", question: "'L'hôpital' ne demek?", options: [{ id: "a", text: "Hastane", correct: true }, { id: "b", text: "Eczane", correct: false }, { id: "c", text: "Klinik", correct: false }, { id: "d", text: "Doktor", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'ordonnance' ne demek?", options: [{ id: "a", text: "Reçete", correct: true }, { id: "b", text: "İlaç", correct: false }, { id: "c", text: "Hastane", correct: false }, { id: "d", text: "Doktor", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Gripim", correctAnswer: "J'ai la grippe" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Yorgunum", correctAnswer: "Je suis fatigué" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ chez le médecin.", options: [{ id: "a", text: "aller", correct: true }, { id: "b", text: "va", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ prendre cette ordonnance.", options: [{ id: "a", text: "dois", correct: true }, { id: "b", text: "doit", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Où avez-vous mal", options: [{ id: "a", text: "Nerede ağrınız var?", correct: true }, { id: "b", text: "Ne zaman ağrıyor?", correct: false }, { id: "c", text: "Nasıl ağrıyor?", correct: false }, { id: "d", text: "Neden ağrıyor?", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous devons ___ à l'hôpital.", options: [{ id: "a", text: "aller", correct: true }, { id: "b", text: "allons", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ne zamandır hastasınız?", correctAnswer: "Depuis quand êtes-vous malade?" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bu ilacı günde üç kez almalısınız", correctAnswer: "Vous devez prendre ce médicament trois fois par jour" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Yakında iyileşeceksiniz", correctAnswer: "Vous allez guérir bientôt" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ des médicaments.", options: [{ id: "a", text: "prendre", correct: true }, { id: "b", text: "prend", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Doktora gitmem lazım", correctAnswer: "Il faut que j'aille chez le médecin" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İyileşene kadar dinlenmelisin", correctAnswer: "Tu dois te reposer jusqu'à guérir" }
];

const unit334Quiz1: Question[] = [
    // KOLAY (8 soru) - Temel Kelimeler
    { id: 1, type: "SELECT", question: "'Le compte' ne demek?", options: [{ id: "a", text: "Hesap", correct: true }, { id: "b", text: "Para", correct: false }, { id: "c", text: "Banka", correct: false }, { id: "d", text: "Kredi", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le guichet' ne demek?", options: [{ id: "a", text: "Gişe", correct: true }, { id: "b", text: "Masa", correct: false }, { id: "c", text: "Kapı", correct: false }, { id: "d", text: "Sıra", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais ___ un compte.", options: [{ id: "a", text: "ouvrir", correct: true }, { id: "b", text: "ouvre", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Je veux ___ de l'argent.", options: [{ id: "a", text: "retirer", correct: true }, { id: "b", text: "retire", correct: false }] },
    { id: 5, type: "SELECT", question: "'Le virement' ne demek?", options: [{ id: "a", text: "Havale", correct: true }, { id: "b", text: "Çek", correct: false }, { id: "c", text: "Nakit", correct: false }, { id: "d", text: "Borç", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ouvrir un compte", options: [{ id: "a", text: "Hesap açmak", correct: true }, { id: "b", text: "Hesap kapatmak", correct: false }, { id: "c", text: "Para çekmek", correct: false }, { id: "d", text: "Para yatırmak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Signer' ne demek?", options: [{ id: "a", text: "İmzalamak", correct: true }, { id: "b", text: "Okumak", correct: false }, { id: "c", text: "Yazmak", correct: false }, { id: "d", text: "Saymak", correct: false }] },
    { id: 8, type: "SELECT", question: "'La banque' ne demek?", options: [{ id: "a", text: "Banka", correct: true }, { id: "b", text: "Postane", correct: false }, { id: "c", text: "Okul", correct: false }, { id: "d", text: "Hastane", correct: false }] },

    // ORTA (7 soru) - Nezaket Kalıpları
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Hesap açmak istiyorum", correctAnswer: "Je voudrais ouvrir un compte" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "___-vous m'aider?", options: [{ id: "a", text: "Pourriez", correct: true }, { id: "b", text: "Pouvez", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Para çekmek istiyorum", correctAnswer: "Je voudrais retirer de l'argent" },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ parler au directeur.", options: [{ id: "a", text: "aimerais", correct: true }, { id: "b", text: "aime", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quel est mon solde?", options: [{ id: "a", text: "Bakiyem ne kadar?", correct: true }, { id: "b", text: "Hesabım nerede?", correct: false }, { id: "c", text: "Borcum ne kadar?", correct: false }, { id: "d", text: "Faiz ne kadar?", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Où est le ___?", options: [{ id: "a", text: "distributeur", correct: true }, { id: "b", text: "distribution", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "İmzalamak istiyorum", correctAnswer: "Je voudrais signer" },

    // ZOR (5 soru) - Karmaşık Cümleler
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bakiye yetersiz", correctAnswer: "Le solde est insuffisant" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Müdürle konuşmak isterdim", correctAnswer: "J'aimerais parler au directeur" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais ___ un virement.", options: [{ id: "a", text: "faire", correct: true }, { id: "b", text: "fais", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Lütfen burayı imzalayın", correctAnswer: "Signez ici s'il vous plaît" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bana yardım edebilir miydiniz?", correctAnswer: "Pourriez-vous m'aider?" }
];

const unit334Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Le distributeur' ne demek?", options: [{ id: "a", text: "ATM", correct: true }, { id: "b", text: "Banka", correct: false }, { id: "c", text: "Kasa", correct: false }, { id: "d", text: "Kredi", correct: false }] },
    { id: 2, type: "SELECT", question: "'Déposer' ne demek?", options: [{ id: "a", text: "Yatırmak", correct: true }, { id: "b", text: "Çekmek", correct: false }, { id: "c", text: "Almak", correct: false }, { id: "d", text: "Vermek", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais ___ de l'argent.", options: [{ id: "a", text: "déposer", correct: true }, { id: "b", text: "dépose", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai une carte ___.", options: [{ id: "a", text: "bancaire", correct: true }, { id: "b", text: "banque", correct: false }] },
    { id: 5, type: "SELECT", question: "'Espèces' ne demek?", options: [{ id: "a", text: "Nakit", correct: true }, { id: "b", text: "Kredi", correct: false }, { id: "c", text: "Borç", correct: false }, { id: "d", text: "Faiz", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une carte bancaire", options: [{ id: "a", text: "Banka kartı", correct: true }, { id: "b", text: "Kredi kartı", correct: false }, { id: "c", text: "Kimlik kartı", correct: false }, { id: "d", text: "Öğrenci kartı", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le solde' ne demek?", options: [{ id: "a", text: "Bakiye", correct: true }, { id: "b", text: "Para", correct: false }, { id: "c", text: "Hesap", correct: false }, { id: "d", text: "Borç", correct: false }] },
    { id: 8, type: "SELECT", question: "'Changer' ne demek?", options: [{ id: "a", text: "Değiştirmek/Bozdurmak", correct: true }, { id: "b", text: "Almak", correct: false }, { id: "c", text: "Satmak", correct: false }, { id: "d", text: "Vermek", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Para yatırmak istiyorum", correctAnswer: "Je voudrais déposer de l'argent" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "ATM nerede?", correctAnswer: "Où est le distributeur?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais ___ des euros.", options: [{ id: "a", text: "changer", correct: true }, { id: "b", text: "change", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Est-ce que je ___ retirer?", options: [{ id: "a", text: "peux", correct: true }, { id: "b", text: "peut", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je voudrais faire un retrait", options: [{ id: "a", text: "Çekim yapmak istiyorum", correct: true }, { id: "b", text: "Yatırım yapmak istiyorum", correct: false }, { id: "c", text: "Havale yapmak istiyorum", correct: false }, { id: "d", text: "Ödeme yapmak istiyorum", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Votre ___ est insuffisant.", options: [{ id: "a", text: "solde", correct: true }, { id: "b", text: "soldes", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Nakit ödüyorum", correctAnswer: "Je paie en espèces" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Kredi kartı kabul ediyor musunuz?", correctAnswer: "Acceptez-vous la carte de crédit?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Hesabımda para yok", correctAnswer: "Il n'y a pas d'argent sur mon compte" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Pourriez-vous me ___ un reçu?", options: [{ id: "a", text: "donner", correct: true }, { id: "b", text: "donne", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Şifremi unuttum", correctAnswer: "J'ai oublié mon mot de passe" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kartım çalışmıyor", correctAnswer: "Ma carte ne marche pas" }
];

const unit334Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'L'intérêt' ne demek?", options: [{ id: "a", text: "Faiz", correct: true }, { id: "b", text: "Para", correct: false }, { id: "c", text: "Banka", correct: false }, { id: "d", text: "Borç", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le prêt' ne demek?", options: [{ id: "a", text: "Kredi/Borç", correct: true }, { id: "b", text: "Faiz", correct: false }, { id: "c", text: "Hesap", correct: false }, { id: "d", text: "Kart", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Je demande un ___.", options: [{ id: "a", text: "prêt", correct: true }, { id: "b", text: "près", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Le taux d'___.", options: [{ id: "a", text: "intérêt", correct: true }, { id: "b", text: "intérêts", correct: false }] },
    { id: 5, type: "SELECT", question: "'Épargner' ne demek?", options: [{ id: "a", text: "Biriktirmek/Tasarruf etmek", correct: true }, { id: "b", text: "Harcamak", correct: false }, { id: "c", text: "Çekmek", correct: false }, { id: "d", text: "Yatırmak", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je fais des économies", options: [{ id: "a", text: "Tasarruf yapıyorum", correct: true }, { id: "b", text: "Para harcıyorum", correct: false }, { id: "c", text: "Para çekiyorum", correct: false }, { id: "d", text: "Para yatırıyorum", correct: false }] },
    { id: 7, type: "SELECT", question: "'Rembourser' ne demek?", options: [{ id: "a", text: "Geri ödemek", correct: true }, { id: "b", text: "Borç almak", correct: false }, { id: "c", text: "İstemek", correct: false }, { id: "d", text: "Vermemek", correct: false }] },
    { id: 8, type: "SELECT", question: "'Emprunter' ne demek?", options: [{ id: "a", text: "Ödünç almak", correct: true }, { id: "b", text: "Ödünç vermek", correct: false }, { id: "c", text: "Satın almak", correct: false }, { id: "d", text: "Satmak", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Kredi istiyorum", correctAnswer: "Je voudrais un prêt" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Faiz oranı yüksek", correctAnswer: "Le taux d'intérêt est élevé" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je dois ___ la banque.", options: [{ id: "a", text: "rembourser", correct: true }, { id: "b", text: "emprunter", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ de l'argent.", options: [{ id: "a", text: "épargner", correct: true }, { id: "b", text: "épargne", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai besoin d'argent", options: [{ id: "a", text: "Paraya ihtiyacım var", correct: true }, { id: "b", text: "Param var", correct: false }, { id: "c", text: "Para istemiyorum", correct: false }, { id: "d", text: "Para biriktiriyorum", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Combien voulez-vous ___?", options: [{ id: "a", text: "emprunter", correct: true }, { id: "b", text: "prêter", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Her ay biriktiriyorum", correctAnswer: "J'épargne chaque mois" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Borcumu ödedim", correctAnswer: "J'ai remboursé ma dette" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Banka faiz veriyor", correctAnswer: "La banque donne des intérêts" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais faire une ___ de crédit.", options: [{ id: "a", text: "demande", correct: true }, { id: "b", text: "demandé", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Hesabım bloke oldu", correctAnswer: "Mon compte est bloqué" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yeni bir hesap açmak gerekir", correctAnswer: "Il faut ouvrir un nouveau compte" }
];

const unit334Quiz4: Question[] = [
    // KOLAY (8 soru) - Karışık
    { id: 1, type: "SELECT", question: "'Le relevé' ne demek?", options: [{ id: "a", text: "Hesap özeti", correct: true }, { id: "b", text: "Bakiye", correct: false }, { id: "c", text: "Fatura", correct: false }, { id: "d", text: "Fiş", correct: false }] },
    { id: 2, type: "SELECT", question: "'La monnaie' ne demek?", options: [{ id: "a", text: "Bozuk para / Para", correct: true }, { id: "b", text: "Kağıt para", correct: false }, { id: "c", text: "Döviz", correct: false }, { id: "d", text: "Altın", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous avez de la ___?", options: [{ id: "a", text: "monnaie", correct: true }, { id: "b", text: "monnaies", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est fermé.", options: [{ id: "a", text: "guichet", correct: true }, { id: "b", text: "guichets", correct: false }] },
    { id: 5, type: "SELECT", question: "'Automatique' ne demek?", options: [{ id: "a", text: "Otomatik", correct: true }, { id: "b", text: "Manuel", correct: false }, { id: "c", text: "Hızlı", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est gratuit", options: [{ id: "a", text: "Bu ücretsiz", correct: true }, { id: "b", text: "Bu ücretli", correct: false }, { id: "c", text: "Bu pahalı", correct: false }, { id: "d", text: "Bu ucuz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Les frais' ne demek?", options: [{ id: "a", text: "Masraflar/Ücretler", correct: true }, { id: "b", text: "Paralar", correct: false }, { id: "c", text: "Hesaplar", correct: false }, { id: "d", text: "Vergiler", correct: false }] },
    { id: 8, type: "SELECT", question: "'International' ne demek?", options: [{ id: "a", text: "Uluslararası", correct: true }, { id: "b", text: "Ulusal", correct: false }, { id: "c", text: "Yerel", correct: false }, { id: "d", text: "Şehirlerarası", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Hesap özetimi istiyorum", correctAnswer: "Je voudrais mon relevé de compte" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Masraf var mı?", correctAnswer: "Est-ce qu'il y a des frais?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je dois faire un virement ___.", options: [{ id: "a", text: "international", correct: true }, { id: "b", text: "internationale", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Gardez la ___.", options: [{ id: "a", text: "monnaie", correct: true }, { id: "b", text: "argent", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Signez en bas", options: [{ id: "a", text: "Aşağıyı imzalayın", correct: true }, { id: "b", text: "Yukarıyı imzalayın", correct: false }, { id: "c", text: "Arkasını imzalayın", correct: false }, { id: "d", text: "İmzaladım", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je n'ai pas de ___.", options: [{ id: "a", text: "liquide", correct: true }, { id: "b", text: "liquid", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Kartımı kaybettim", correctAnswer: "J'ai perdu ma carte" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Ne zaman hazır olacak?", correctAnswer: "Quand sera-t-il prêt?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Kimlik kartınızı görebilir miyim?", correctAnswer: "Puis-je voir votre carte d'identité?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Veuillez ___ ce formulaire.", options: [{ id: "a", text: "remplir", correct: true }, { id: "b", text: "remplissez", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Mesajı aldınız mı?", correctAnswer: "Avez-vous reçu le message?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Hesabımda bir hata var", correctAnswer: "Il y a une erreur sur mon compte" }
];

const unit335Quiz1: Question[] = [
    // KOLAY (8 soru) - Miktar Zarfları (4 Büyükler)
    { id: 1, type: "SELECT", question: "'Beaucoup de' ne demek?", options: [{ id: "a", text: "Çok", correct: true }, { id: "b", text: "Az", correct: false }, { id: "c", text: "Yeterince", correct: false }, { id: "d", text: "Aşırı", correct: false }] },
    { id: 2, type: "SELECT", question: "'Un peu de' ne demek?", options: [{ id: "a", text: "Biraz", correct: true }, { id: "b", text: "Çok", correct: false }, { id: "c", text: "Hiç", correct: false }, { id: "d", text: "Fazla", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ d'amis.", options: [{ id: "a", text: "beaucoup", correct: true }, { id: "b", text: "très", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a ___ de bruit ici (Aşırı).", options: [{ id: "a", text: "trop", correct: true }, { id: "b", text: "assez", correct: false }] },
    { id: 5, type: "SELECT", question: "'Assez de' ne demek?", options: [{ id: "a", text: "Yeterince", correct: true }, { id: "b", text: "Az", correct: false }, { id: "c", text: "Çok", correct: false }, { id: "d", text: "Hiç", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Beaucoup de lettres", options: [{ id: "a", text: "Çok mektup", correct: true }, { id: "b", text: "Az mektup", correct: false }, { id: "c", text: "Güzel mektup", correct: false }, { id: "d", text: "Eski mektup", correct: false }] },
    { id: 7, type: "SELECT", question: "'Trop de travail' ne demek?", options: [{ id: "a", text: "Aşırı iş", correct: true }, { id: "b", text: "Az iş", correct: false }, { id: "c", text: "Güzel iş", correct: false }, { id: "d", text: "Kolay iş", correct: false }] },
    { id: 8, type: "SELECT", question: "'Combien de' ne demek?", options: [{ id: "a", text: "Kaç tane / Ne kadar", correct: true }, { id: "b", text: "Nerede", correct: false }, { id: "c", text: "Nasıl", correct: false }, { id: "d", text: "Neden", correct: false }] },

    // ORTA (7 soru) - Gramer Kuralları (DE Kuralı)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Çok arkadaşım var", correctAnswer: "J'ai beaucoup d'amis" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais un peu ___ sucre.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "des", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Aşırı gürültü var", correctAnswer: "Il y a trop de bruit" },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il a beaucoup ___ livres.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "des", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Un peu de patience", options: [{ id: "a", text: "Biraz sabır", correct: true }, { id: "b", text: "Çok sabır", correct: false }, { id: "c", text: "Sabırsız", correct: false }, { id: "d", text: "Sabırlı ol", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Combien ___ jours?", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "des", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Yeterince zamanım var", correctAnswer: "J'ai assez de temps" },

    // ZOR (5 soru) - Karmaşık
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Kaç pul istiyorsunuz?", correctAnswer: "Combien de timbres voulez-vous?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Çok fazla insan var", correctAnswer: "Il y a trop de monde" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Je n'ai pas ___ d'argent.", options: [{ id: "a", text: "assez", correct: true }, { id: "b", text: "très", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Biraz su istiyorum", correctAnswer: "Je veux un peu d'eau" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Aşırı sıcak", correctAnswer: "Il fait trop chaud" }
];

const unit335Quiz2: Question[] = [
    // KOLAY (8 soru) - Ölçü Birimleri (Kaplar)
    { id: 1, type: "SELECT", question: "'Une bouteille' ne demek?", options: [{ id: "a", text: "Bir şişe", correct: true }, { id: "b", text: "Bir bardak", correct: false }, { id: "c", text: "Bir paket", correct: false }, { id: "d", text: "Bir kutu", correct: false }] },
    { id: 2, type: "SELECT", question: "'Un verre' ne demek?", options: [{ id: "a", text: "Bir bardak", correct: true }, { id: "b", text: "Bir fincan", correct: false }, { id: "c", text: "Bir kaşık", correct: false }, { id: "d", text: "Bir tabak", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Une bouteille ___ eau.", options: [{ id: "a", text: "d'", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Un paquet ___ pâtes.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "des", correct: false }] },
    { id: 5, type: "SELECT", question: "'Une tranche' ne demek?", options: [{ id: "a", text: "Bir dilim", correct: true }, { id: "b", text: "Bir parça", correct: false }, { id: "c", text: "Bir bütün", correct: false }, { id: "d", text: "Bir yarım", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une tasse de café", options: [{ id: "a", text: "Bir fincan kahve", correct: true }, { id: "b", text: "Bir bardak çay", correct: false }, { id: "c", text: "Bir şişe su", correct: false }, { id: "d", text: "Bir kutu süt", correct: false }] },
    { id: 7, type: "SELECT", question: "'Un morceau' ne demek?", options: [{ id: "a", text: "Bir parça", correct: true }, { id: "b", text: "Bir dilim", correct: false }, { id: "c", text: "Bir kilo", correct: false }, { id: "d", text: "Bir gram", correct: false }] },
    { id: 8, type: "SELECT", question: "'Un kilo' ne demek?", options: [{ id: "a", text: "Bir kilo", correct: true }, { id: "b", text: "Bir litre", correct: false }, { id: "c", text: "Bir metre", correct: false }, { id: "d", text: "Bir ton", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Bir şişe su", correctAnswer: "Une bouteille d'eau" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bir fincan çay", correctAnswer: "Une tasse de thé" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Une tranche ___ pain.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Un morceau ___ gâteau.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "le", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Un kilo de pommes", options: [{ id: "a", text: "Bir kilo elma", correct: true }, { id: "b", text: "Bir kilo patates", correct: false }, { id: "c", text: "Bir kilo domates", correct: false }, { id: "d", text: "Bir kilo armut", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais un verre ___eau.", options: [{ id: "a", text: "d'", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bir paket kahve", correctAnswer: "Un paquet de café" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "İki dilim ekmek istiyorum", correctAnswer: "Je voudrais deux tranches de pain" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Bir parça pasta alır mısınız?", correctAnswer: "Voulez-vous un morceau de gâteau?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Donnez-moi une ___ de pizza.", options: [{ id: "a", text: "part", correct: true }, { id: "b", text: "bouteille", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu ne kadar (kilo)?", correctAnswer: "Combien de kilos?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bir şişe kırmızı şarap", correctAnswer: "Une bouteille de vin rouge" }
];

const unit335Quiz3: Question[] = [
    // KOLAY (8 soru) - Postane Kelimeleri
    { id: 1, type: "SELECT", question: "'Le timbre' ne demek?", options: [{ id: "a", text: "Pul", correct: true }, { id: "b", text: "Mektup", correct: false }, { id: "c", text: "Zarf", correct: false }, { id: "d", text: "Koli", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le colis' ne demek?", options: [{ id: "a", text: "Paket/Koli", correct: true }, { id: "b", text: "Mektup", correct: false }, { id: "c", text: "Pul", correct: false }, { id: "d", text: "Kart", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais ___ une lettre.", options: [{ id: "a", text: "envoyer", correct: true }, { id: "b", text: "envoyé", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Où est la ___?", options: [{ id: "a", text: "poste", correct: true }, { id: "b", text: "postes", correct: false }] },
    { id: 5, type: "SELECT", question: "'L'expéditeur' ne demek?", options: [{ id: "a", text: "Gönderici", correct: true }, { id: "b", text: "Alıcı", correct: false }, { id: "c", text: "Postacı", correct: false }, { id: "d", text: "Adres", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Envoyer un colis", options: [{ id: "a", text: "Paket göndermek", correct: true }, { id: "b", text: "Mektup göndermek", correct: false }, { id: "c", text: "Pul almak", correct: false }, { id: "d", text: "Para çekmek", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le destinataire' ne demek?", options: [{ id: "a", text: "Alıcı", correct: true }, { id: "b", text: "Gönderici", correct: false }, { id: "c", text: "Müdür", correct: false }, { id: "d", text: "Memur", correct: false }] },
    { id: 8, type: "SELECT", question: "'Urgent' ne demek?", options: [{ id: "a", text: "Acil", correct: true }, { id: "b", text: "Yavaş", correct: false }, { id: "c", text: "Kolay", correct: false }, { id: "d", text: "Zor", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Mektup göndermek istiyorum", correctAnswer: "Je voudrais envoyer une lettre" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Pul ne kadar?", correctAnswer: "Combien coûte un timbre?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un courrier ___.", options: [{ id: "a", text: "urgent", correct: true }, { id: "b", text: "urgente", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Je dois acheter des ___.", options: [{ id: "a", text: "timbres", correct: true }, { id: "b", text: "timbre", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est pour l'étranger", options: [{ id: "a", text: "Yurtdışı için", correct: true }, { id: "b", text: "Şehir içi için", correct: false }, { id: "c", text: "Kendim için", correct: false }, { id: "d", text: "Arkadaşım için", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "L'adresse du ___.", options: [{ id: "a", text: "destinataire", correct: true }, { id: "b", text: "destination", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bu paket çok ağır", correctAnswer: "Ce colis est trop lourd" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Ne kadar sürer?", correctAnswer: "Ça met combien de temps?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "İçinde ne var?", correctAnswer: "Qu'est-ce qu'il y a dedans?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Remplissez ce ___ de douane.", options: [{ id: "a", text: "formulaire", correct: true }, { id: "b", text: "papier", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Taahhütlü mektup", correctAnswer: "Lettre recommandée" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Posta kutusu nerede?", correctAnswer: "Où est la boîte aux lettres?" }
];

const unit335Quiz4: Question[] = [
    // KOLAY (8 soru) - Karışık Miktar & Postane
    { id: 1, type: "SELECT", question: "'Boîte aux lettres' ne demek?", options: [{ id: "a", text: "Posta kutusu", correct: true }, { id: "b", text: "Postane", correct: false }, { id: "c", text: "Mektup", correct: false }, { id: "d", text: "Telefon kulübesi", correct: false }] },
    { id: 2, type: "SELECT", question: "'La queue' ne demek?", options: [{ id: "a", text: "Sıra / Kuyruk", correct: true }, { id: "b", text: "Masa", correct: false }, { id: "c", text: "Koltuk", correct: false }, { id: "d", text: "Kapı", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a beaucoup ___ monde.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "des", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Je n'ai pas ___ temps.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 5, type: "SELECT", question: "'Le facteur' ne demek?", options: [{ id: "a", text: "Postacı", correct: true }, { id: "b", text: "Polis", correct: false }, { id: "c", text: "Doktor", correct: false }, { id: "d", text: "Şoför", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il n'y a pas de timbres", options: [{ id: "a", text: "Pul yok", correct: true }, { id: "b", text: "Pul var", correct: false }, { id: "c", text: "Pul istiyorum", correct: false }, { id: "d", text: "Pul lazım", correct: false }] },
    { id: 7, type: "SELECT", question: "'Carte postale' ne demek?", options: [{ id: "a", text: "Kartpostal", correct: true }, { id: "b", text: "Kredi kartı", correct: false }, { id: "c", text: "Kimlik kartı", correct: false }, { id: "d", text: "Harita", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le guichet' ne demek?", options: [{ id: "a", text: "Gişe", correct: true }, { id: "b", text: "Büro", correct: false }, { id: "c", text: "Ofis", correct: false }, { id: "d", text: "Salon", correct: false }] },

    // ORTA (7 soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Sırada bekliyorum", correctAnswer: "Je fais la queue" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Postacı geçti mi?", correctAnswer: "Le facteur est passé?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai reçu un ___ de fleurs.", options: [{ id: "a", text: "bouquet", correct: true }, { id: "b", text: "paquet", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Beaucoup ___ gens.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "des", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une bouteille de vin", options: [{ id: "a", text: "Bir şişe şarap", correct: true }, { id: "b", text: "Bir bardak şarap", correct: false }, { id: "c", text: "Bir şişe su", correct: false }, { id: "d", text: "Bir bardak su", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Il boit trop ___ café.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Biraz sabrım var", correctAnswer: "J'ai un peu de patience" },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Aşırı yorgunum", correctAnswer: "Je suis trop fatigué" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Yeterince paran var mı?", correctAnswer: "As-tu assez d'argent?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Donnez-moi une ___ de gâteau.", options: [{ id: "a", text: "part", correct: true }, { id: "b", text: "tranche", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu zarfı tartın lütfen", correctAnswer: "Pesez cette enveloppe s'il vous plaît" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Posta ücreti ne kadar?", correctAnswer: "Quels sont les frais de port?" }
];

const unit336Quiz1: Question[] = [
    // KOLAY (8 Soru) - Otel Kelimeleri
    { id: 1, type: "SELECT", question: "'La réservation' ne demek?", options: [{ id: "a", text: "Rezervasyon", correct: true }, { id: "b", text: "Resepsiyon", correct: false }, { id: "c", text: "Restoran", correct: false }, { id: "d", text: "Oda", correct: false }] },
    { id: 2, type: "SELECT", question: "'Une chambre simple' ne demek?", options: [{ id: "a", text: "Tek kişilik oda", correct: true }, { id: "b", text: "Çift kişilik oda", correct: false }, { id: "c", text: "Aile odası", correct: false }, { id: "d", text: "Süit", correct: false }] },
    { id: 3, type: "SELECT", question: "'Une chambre double' ne demek?", options: [{ id: "a", text: "Çift kişilik oda", correct: true }, { id: "b", text: "Tek kişilik oda", correct: false }, { id: "c", text: "İkiz yataklı oda", correct: false }, { id: "d", text: "Boş oda", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais ___ une chambre.", options: [{ id: "a", text: "réserver", correct: true }, { id: "b", text: "réserve", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est au rez-de-chaussée.", options: [{ id: "a", text: "réception", correct: true }, { id: "b", text: "chambre", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une chambre avec vue", options: [{ id: "a", text: "Manzaralı bir oda", correct: true }, { id: "b", text: "Banyolu bir oda", correct: false }, { id: "c", text: "Balkonlu bir oda", correct: false }, { id: "d", text: "Klimalı bir oda", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le petit-déjeuner' ne demek?", options: [{ id: "a", text: "Kahvaltı", correct: true }, { id: "b", text: "Öğle yemeği", correct: false }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Ara öğün", correct: false }] },
    { id: 8, type: "SELECT", question: "'Inclus' ne demek?", options: [{ id: "a", text: "Dahil", correct: true }, { id: "b", text: "Hariç", correct: false }, { id: "c", text: "Bedava", correct: false }, { id: "d", text: "Paralı", correct: false }] },

    // ORTA (7 Soru) - Si Cümleleri (Koşul)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Boş yer varsa", correctAnswer: "S'il y a de la place" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Kahvaltı dahil mi?", correctAnswer: "Le petit-déjeuner est-il inclus?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Si vous ___ maintenant, c'est moins cher.", options: [{ id: "a", text: "payez", correct: true }, { id: "b", text: "payer", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "S'il ___ beau, on sortira.", options: [{ id: "a", text: "fait", correct: true }, { id: "b", text: "faire", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Si c'est possible", options: [{ id: "a", text: "Eğer mümkünse", correct: true }, { id: "b", text: "Eğer yasaksa", correct: false }, { id: "c", text: "Eğer kolaysa", correct: false }, { id: "d", text: "Eğer zorsa", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je confirme ___ c'est libre.", options: [{ id: "a", text: "si", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Rezervasyon yapmak istiyorum", correctAnswer: "Je voudrais faire une réservation" },

    // ZOR (5 Soru) - Karmaşık Diyalog
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "İptal ederseniz ceza ödersiniz", correctAnswer: "Si vous annulez, vous payez une pénalité" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Deniz manzaralı bir oda istiyorum", correctAnswer: "Je voudrais une chambre avec vue sur la mer" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Si j'___ le temps, je visiterai le musée.", options: [{ id: "a", text: "ai", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Adınıza bir rezervasyonum var", correctAnswer: "J'ai une réservation à votre nom" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çıkış saati kaçta?", correctAnswer: "À quelle heure est le check-out?" }
];


const unit336Quiz2: Question[] = [
    // KOLAY (8 Soru) - Otel Özellikleri
    { id: 1, type: "SELECT", question: "'La clé' ne demek?", options: [{ id: "a", text: "Anahtar", correct: true }, { id: "b", text: "Kapı", correct: false }, { id: "c", text: "Pencere", correct: false }, { id: "d", text: "Kilit", correct: false }] },
    { id: 2, type: "SELECT", question: "'L'ascenseur' ne demek?", options: [{ id: "a", text: "Asansör", correct: true }, { id: "b", text: "Merdiven", correct: false }, { id: "c", text: "Koridor", correct: false }, { id: "d", text: "Salon", correct: false }] },
    { id: 3, type: "SELECT", question: "'La piscine' ne demek?", options: [{ id: "a", text: "Havuz", correct: true }, { id: "b", text: "Bahçe", correct: false }, { id: "c", text: "banyo", correct: false }, { id: "d", text: "Otopark", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Où est la ___?", options: [{ id: "a", text: "clé", correct: true }, { id: "b", text: "clef", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Prenez l'___.", options: [{ id: "a", text: "ascenseur", correct: true }, { id: "b", text: "escalier", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le wifi est gratuit", options: [{ id: "a", text: "Wifi ücretsiz", correct: true }, { id: "b", text: "Wifi ücretli", correct: false }, { id: "c", text: "Wifi bozuk", correct: false }, { id: "d", text: "Wifi yavaş", correct: false }] },
    { id: 7, type: "SELECT", question: "'La climatisation' ne demek?", options: [{ id: "a", text: "Klima", correct: true }, { id: "b", text: "Isıtma", correct: false }, { id: "c", text: "Işık", correct: false }, { id: "d", text: "Su", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le parking' ne demek?", options: [{ id: "a", text: "Otopark", correct: true }, { id: "b", text: "Park", correct: false }, { id: "c", text: "Bahçe", correct: false }, { id: "d", text: "Garaj", correct: false }] },

    // ORTA (7 Soru) - Yer Sorma
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Asansör nerede?", correctAnswer: "Où est l'ascenseur?" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Otoparkınız var mı?", correctAnswer: "Avez-vous un parking?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "La piscine est ___.", options: [{ id: "a", text: "ouverte", correct: true }, { id: "b", text: "ouvert", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a la ___ dans la chambre.", options: [{ id: "a", text: "télévision", correct: true }, { id: "b", text: "télé", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Au premier étage", options: [{ id: "a", text: "Birinci katta", correct: true }, { id: "b", text: "İkinci katta", correct: false }, { id: "c", text: "Zemin katta", correct: false }, { id: "d", text: "Son katta", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Le bar est ___.", options: [{ id: "a", text: "fermé", correct: true }, { id: "b", text: "fermer", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Havuzda yüzebilirsiniz", correctAnswer: "Vous pouvez nager dans la piscine" },

    // ZOR (5 Soru) - Sorun Bildirme
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Klima çalışmıyor", correctAnswer: "La climatisation ne marche pas" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Sıcak su yok", correctAnswer: "Il n'y a pas d'eau chaude" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais ___ de chambre.", options: [{ id: "a", text: "changer", correct: true }, { id: "b", text: "change", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Çok gürültü var", correctAnswer: "Il y a trop de bruit" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Televizyon bozuk", correctAnswer: "La télé est en panne" }
];

const unit336Quiz3: Question[] = [
    // KOLAY (8 Soru) - Personel ve Hizmetler
    { id: 1, type: "SELECT", question: "'Le réceptionniste' ne demek?", options: [{ id: "a", text: "Resepsiyonist", correct: true }, { id: "b", text: "Garson", correct: false }, { id: "c", text: "Aşçı", correct: false }, { id: "d", text: "Müdür", correct: false }] },
    { id: 2, type: "SELECT", question: "'La femme de chambre' ne demek?", options: [{ id: "a", text: "Oda görevlisi/Temizlikçi", correct: true }, { id: "b", text: "Müşteri", correct: false }, { id: "c", text: "Yönetici", correct: false }, { id: "d", text: "Rehber", correct: false }] },
    { id: 3, type: "SELECT", question: "'Servir' ne demek?", options: [{ id: "a", text: "Hizmet etmek", correct: true }, { id: "b", text: "Yemek", correct: false }, { id: "c", text: "İçmek", correct: false }, { id: "d", text: "Uyumak", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Appelez le ___.", options: [{ id: "a", text: "service", correct: true }, { id: "b", text: "servir", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ de chambre.", options: [{ id: "a", text: "service", correct: true }, { id: "b", text: "servante", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Besoin d'aide ?", options: [{ id: "a", text: "Yardıma ihtiyacınız var mı?", correct: true }, { id: "b", text: "Yardım eder misiniz?", correct: false }, { id: "c", text: "Yardım istiyorum", correct: false }, { id: "d", text: "Yardım yok", correct: false }] },
    { id: 7, type: "SELECT", question: "'Disponible' ne demek?", options: [{ id: "a", text: "Müsait", correct: true }, { id: "b", text: "Meşgul", correct: false }, { id: "c", text: "Dolu", correct: false }, { id: "d", text: "Kapalı", correct: false }] },
    { id: 8, type: "SELECT", question: "'Complet' ne demek?", options: [{ id: "a", text: "Dolu", correct: true }, { id: "b", text: "Boş", correct: false }, { id: "c", text: "Açık", correct: false }, { id: "d", text: "Yarım", correct: false }] },

    // ORTA (7 Soru) - İletişim
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Oda temizlenmedi", correctAnswer: "La chambre n'est pas nettoyée" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Havlular eksik", correctAnswer: "Il manque des serviettes" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Pouvez-vous ___ ma chambre?", options: [{ id: "a", text: "nettoyer", correct: true }, { id: "b", text: "laver", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Le lit n'est pas ___.", options: [{ id: "a", text: "fait", correct: true }, { id: "b", text: "faire", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le petit-déjeuner est servi", options: [{ id: "a", text: "Kahvaltı servis edildi", correct: true }, { id: "b", text: "Kahvaltı bitti", correct: false }, { id: "c", text: "Kahvaltı paralı", correct: false }, { id: "d", text: "Kahvaltı yok", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais ___ la réception.", options: [{ id: "a", text: "appeler", correct: true }, { id: "b", text: "appelle", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Lütfen odayı temizleyin", correctAnswer: "Nettoyez la chambre s'il vous plaît" },

    // ZOR (5 Soru) - Şikayet ve Çözüm
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Otel tamamen dolu", correctAnswer: "L'hôtel est complet" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Başka bir oda istiyorum", correctAnswer: "Je voudrais une autre chambre" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est inacceptable, je veux être ___.", options: [{ id: "a", text: "remboursé", correct: true }, { id: "b", text: "payé", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Gürültüden uyuyamıyorum", correctAnswer: "Je ne peux pas dormir à cause du bruit" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sorunu hemen çözün", correctAnswer: "Réglez le problème tout de suite" }
];

const unit336Quiz4: Question[] = [
    // KOLAY (8 Soru) - Karışık
    { id: 1, type: "SELECT", question: "'Payer' ne demek?", options: [{ id: "a", text: "Ödemek", correct: true }, { id: "b", text: "Almak", correct: false }, { id: "c", text: "Satmak", correct: false }, { id: "d", text: "Vermek", correct: false }] },
    { id: 2, type: "SELECT", question: "'La facture' ne demek?", options: [{ id: "a", text: "Fatura", correct: true }, { id: "b", text: "Fiş", correct: false }, { id: "c", text: "Para", correct: false }, { id: "d", text: "Kart", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cher' ne demek?", options: [{ id: "a", text: "Pahalı", correct: true }, { id: "b", text: "Ucuz", correct: false }, { id: "c", text: "Güzel", correct: false }, { id: "d", text: "Kötü", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est trop ___.", options: [{ id: "a", text: "cher", correct: true }, { id: "b", text: "chère", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Je paie par ___.", options: [{ id: "a", text: "carte", correct: true }, { id: "b", text: "billet", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Bon séjour", options: [{ id: "a", text: "İyi konaklamalar", correct: true }, { id: "b", text: "İyi yolculuklar", correct: false }, { id: "c", text: "İyi günler", correct: false }, { id: "d", text: "İyi akşamlar", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le séjour' ne demek?", options: [{ id: "a", text: "Konaklama", correct: true }, { id: "b", text: "Yolculuk", correct: false }, { id: "c", text: "Tatil", correct: false }, { id: "d", text: "Gezi", correct: false }] },
    { id: 8, type: "SELECT", question: "'Annuler' ne demek?", options: [{ id: "a", text: "İptal etmek", correct: true }, { id: "b", text: "Onaylamak", correct: false }, { id: "c", text: "Beklemek", correct: false }, { id: "d", text: "Gitmek", correct: false }] },

    // ORTA (7 Soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Hesabı ödemek istiyorum", correctAnswer: "Je voudrais régler la note" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Faturayı alabilir miyim?", correctAnswer: "Puis-je avoir la facture?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous acceptez les ___?", options: [{ id: "a", text: "chèques", correct: true }, { id: "b", text: "chèque", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Merci pour votre ___.", options: [{ id: "a", text: "accueil", correct: true }, { id: "b", text: "accueillir", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Revenez nous voir", options: [{ id: "a", text: "Bizi tekrar ziyarete gelin", correct: true }, { id: "b", text: "Güle güle", correct: false }, { id: "c", text: "İyi şanslar", correct: false }, { id: "d", text: "Görüşürüz", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Tout est ___.", options: [{ id: "a", text: "compris", correct: true }, { id: "b", text: "comprendre", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Vergiler dahil", correctAnswer: "Taxes incluses" },

    // ZOR (5 Soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Konaklamanız nasıldı?", correctAnswer: "Comment s'est passé votre séjour?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Memnun kaldık", correctAnswer: "Nous avons été satisfaits" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais laisser un ___ positif.", options: [{ id: "a", text: "avis", correct: true }, { id: "b", text: "vue", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Gelecek yıl tekrar geleceğiz", correctAnswer: "Nous reviendrons l'année prochaine" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Her şey mükemmeldi", correctAnswer: "Tout était parfait" }
];

const unit337Quiz1: Question[] = [
    // KOLAY (8 Soru) - İstasyon Kelimeleri
    { id: 1, type: "SELECT", question: "'La gare' ne demek?", options: [{ id: "a", text: "İstasyon / Gar", correct: true }, { id: "b", text: "Havaalanı", correct: false }, { id: "c", text: "Liman", correct: false }, { id: "d", text: "Durak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le train' ne demek?", options: [{ id: "a", text: "Tren", correct: true }, { id: "b", text: "Otobüs", correct: false }, { id: "c", text: "Uçak", correct: false }, { id: "d", text: "Taksi", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le billet' ne demek?", options: [{ id: "a", text: "Bilet", correct: true }, { id: "b", text: "Pasaport", correct: false }, { id: "c", text: "Kimlik", correct: false }, { id: "d", text: "Para", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais à la ___.", options: [{ id: "a", text: "gare", correct: true }, { id: "b", text: "guerre", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Un billet de ___.", options: [{ id: "a", text: "train", correct: true }, { id: "b", text: "géré", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Un aller simple", options: [{ id: "a", text: "Tek yön", correct: true }, { id: "b", text: "Gidiş-dönüş", correct: false }, { id: "c", text: "Aktarmalı", correct: false }, { id: "d", text: "Direkt", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le guichet' ne demek?", options: [{ id: "a", text: "Gişe", correct: true }, { id: "b", text: "Pencere", correct: false }, { id: "c", text: "Kapı", correct: false }, { id: "d", text: "Masa", correct: false }] },
    { id: 8, type: "SELECT", question: "'La voie' ne demek?", options: [{ id: "a", text: "Peron / Hat", correct: true }, { id: "b", text: "Yol", correct: false }, { id: "c", text: "Tren", correct: false }, { id: "d", text: "Vagon", correct: false }] },

    // ORTA (7 Soru) - Bilet Alma
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Gidiş-dönüş bilet", correctAnswer: "Un aller-retour" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Paris için bir bilet", correctAnswer: "Un billet pour Paris" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Le train part de la ___ 2.", options: [{ id: "a", text: "voie", correct: true }, { id: "b", text: "voix", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un train ___.", options: [{ id: "a", text: "direct", correct: true }, { id: "b", text: "directe", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Deuxième classe", options: [{ id: "a", text: "İkinci sınıf", correct: true }, { id: "b", text: "Birinci sınıf", correct: false }, { id: "c", text: "Üçüncü sınıf", correct: false }, { id: "d", text: "Ekonomi sınıfı", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais ___ un billet.", options: [{ id: "a", text: "acheter", correct: true }, { id: "b", text: "vendre", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Tren ne zaman kalkıyor?", correctAnswer: "À quelle heure part le train?" },

    // ZOR (5 Soru) - Detaylı Bilgi
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bilet ne kadar?", correctAnswer: "Combien coûte le billet?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Birinci sınıf mı ikinci sınıf mı?", correctAnswer: "Première ou deuxième classe?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Le train ___ à Lyon.", options: [{ id: "a", text: "s'arrête", correct: true }, { id: "b", text: "s'arrêter", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Pencere kenarı tercih ederim", correctAnswer: "Je préfère côté fenêtre" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Öğrenci indirimi var mı?", correctAnswer: "Y a-t-il une réduction étudiant?" }
];

const unit337Quiz2: Question[] = [
    // KOLAY (8 Soru) - Hareket Saatleri
    { id: 1, type: "SELECT", question: "'Le départ' ne demek?", options: [{ id: "a", text: "Kalkış", correct: true }, { id: "b", text: "Varış", correct: false }, { id: "c", text: "Gecikme", correct: false }, { id: "d", text: "İptal", correct: false }] },
    { id: 2, type: "SELECT", question: "'L'arrivée' ne demek?", options: [{ id: "a", text: "Varış", correct: true }, { id: "b", text: "Kalkış", correct: false }, { id: "c", text: "Yolculuk", correct: false }, { id: "d", text: "Bilet", correct: false }] },
    { id: 3, type: "SELECT", question: "'L'heure' ne demek?", options: [{ id: "a", text: "Saat / Zaman", correct: true }, { id: "b", text: "Dakika", correct: false }, { id: "c", text: "Gün", correct: false }, { id: "d", text: "Yıl", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "L'heure de ___.", options: [{ id: "a", text: "départ", correct: true }, { id: "b", text: "partir", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est prévue à 10h.", options: [{ id: "a", text: "arrivée", correct: true }, { id: "b", text: "arriver", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le train est à l'heure", options: [{ id: "a", text: "Tren zamanında", correct: true }, { id: "b", text: "Tren gecikti", correct: false }, { id: "c", text: "Tren erken", correct: false }, { id: "d", text: "Tren iptal", correct: false }] },
    { id: 7, type: "SELECT", question: "'Tôt' ne demek?", options: [{ id: "a", text: "Erken", correct: true }, { id: "b", text: "Geç", correct: false }, { id: "c", text: "Hızlı", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    { id: 8, type: "SELECT", question: "'Tard' ne demek?", options: [{ id: "a", text: "Geç", correct: true }, { id: "b", text: "Erken", correct: false }, { id: "c", text: "Şimdi", correct: false }, { id: "d", text: "Sonra", correct: false }] },

    // ORTA (7 Soru) - Zaman İfadeleri
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Tren saat kaçta?", correctAnswer: "À quelle heure est le train?" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "10 dakika sonra", correctAnswer: "Dans 10 minutes" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Le train arrive ___ 5 minutes.", options: [{ id: "a", text: "dans", correct: true }, { id: "b", text: "en", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est trop ___.", options: [{ id: "a", text: "tard", correct: true }, { id: "b", text: "tota", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Prochain départ", options: [{ id: "a", text: "Sonraki kalkış", correct: true }, { id: "b", text: "Önceki kalkış", correct: false }, { id: "c", text: "Son kalkış", correct: false }, { id: "d", text: "İlk kalkış", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Le train ___ part à midi.", options: [{ id: "a", text: "prochain", correct: true }, { id: "b", text: "dernier", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Tren garı nerede?", correctAnswer: "Où est la gare?" },

    // ZOR (5 Soru) - Kalkış/Varış Panosu
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Varış saati nedir?", correctAnswer: "Quelle est l'heure d'arrivée?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Tren 5 dakika erken geldi", correctAnswer: "Le train est arrivé avec 5 minutes d'avance" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Regardez le ___ d'affichage.", options: [{ id: "a", text: "tableau", correct: true }, { id: "b", text: "table", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Aktarma yapmalısınız", correctAnswer: "Vous devez changer de train" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yolculuk iki saat sürüyor", correctAnswer: "Le voyage dure deux heures" }
];

const unit337Quiz3: Question[] = [
    // KOLAY (8 Soru) - Sorunlar
    { id: 1, type: "SELECT", question: "'Le retard' ne demek?", options: [{ id: "a", text: "Gecikme", correct: true }, { id: "b", text: "İptal", correct: false }, { id: "c", text: "Kaza", correct: false }, { id: "d", text: "Hata", correct: false }] },
    { id: 2, type: "SELECT", question: "'Annulé' ne demek?", options: [{ id: "a", text: "İptal edilmiş", correct: true }, { id: "b", text: "Onaylanmış", correct: false }, { id: "c", text: "Gecikmiş", correct: false }, { id: "d", text: "Bekleyen", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le contrôleur' ne demek?", options: [{ id: "a", text: "Kondüktör/Kontrolör", correct: true }, { id: "b", text: "Şoför", correct: false }, { id: "c", text: "Yolcu", correct: false }, { id: "d", text: "Müdür", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Le train a du ___.", options: [{ id: "a", text: "retard", correct: true }, { id: "b", text: "tard", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Votre billet n'est pas ___.", options: [{ id: "a", text: "valable", correct: true }, { id: "b", text: "vrai", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Attention au départ", options: [{ id: "a", text: "Kalkışa dikkat", correct: true }, { id: "b", text: "Varışa dikkat", correct: false }, { id: "c", text: "Kapılara dikkat", correct: false }, { id: "d", text: "Trene dikkat", correct: false }] },
    { id: 7, type: "SELECT", question: "'Rembourser' ne demek?", options: [{ id: "a", text: "Para iadesi yapmak", correct: true }, { id: "b", text: "Bilet almak", correct: false }, { id: "c", text: "Ceza ödemek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'amende' ne demek?", options: [{ id: "a", text: "Ceza", correct: true }, { id: "b", text: "Ödül", correct: false }, { id: "c", text: "Bilet", correct: false }, { id: "d", text: "Ücret", correct: false }] },

    // ORTA (7 Soru) - Duyurular
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Tren iptal edildi", correctAnswer: "Le train est annulé" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "10 dakika gecikme", correctAnswer: "10 minutes de retard" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Le train ___ entrer en gare.", options: [{ id: "a", text: "va", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Éloignez-vous de la ___.", options: [{ id: "a", text: "bordure", correct: true }, { id: "b", text: "bord", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le train est complet", options: [{ id: "a", text: "Tren dolu", correct: true }, { id: "b", text: "Tren boş", correct: false }, { id: "c", text: "Tren temiz", correct: false }, { id: "d", text: "Tren yeni", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Préparez vos ___.", options: [{ id: "a", text: "billets", correct: true }, { id: "b", text: "billet", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Hangi peron?", correctAnswer: "Quelle voie?" },

    // ZOR (5 Soru) - İtirazlar
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Neden gecikme var?", correctAnswer: "Pourquoi y a-t-il du retard?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Paramın iadesini istiyorum", correctAnswer: "Je voudrais être remboursé" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est une ___ technique.", options: [{ id: "a", text: "panne", correct: true }, { id: "b", text: "faute", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Yolculuk ne kadar sürer?", correctAnswer: "Combien de temps dure le voyage?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Maalesef tren iptal", correctAnswer: "Malheureusement le train est annulé" }
];

const unit337Quiz4: Question[] = [
    // KOLAY (8 Soru) - Eylemler
    { id: 1, type: "SELECT", question: "'Composter' ne demek?", options: [{ id: "a", text: "Bileti damgalamak", correct: true }, { id: "b", text: "Bilet almak", correct: false }, { id: "c", text: "Trene binmek", correct: false }, { id: "d", text: "Trenden inmek", correct: false }] },
    { id: 2, type: "SELECT", question: "'Monter' ne demek?", options: [{ id: "a", text: "Binmek / Çıkmak", correct: true }, { id: "b", text: "İnmek", correct: false }, { id: "c", text: "Gitmek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 3, type: "SELECT", question: "'Descendre' ne demek?", options: [{ id: "a", text: "İnmek", correct: true }, { id: "b", text: "Binmek", correct: false }, { id: "c", text: "Kalkmak", correct: false }, { id: "d", text: "Oturmak", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ le billet.", options: [{ id: "a", text: "composter", correct: true }, { id: "b", text: "manger", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ dans le train.", options: [{ id: "a", text: "monte", correct: true }, { id: "b", text: "montes", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nous descendons ici", options: [{ id: "a", text: "Burada iniyoruz", correct: true }, { id: "b", text: "Burada biniyoruz", correct: false }, { id: "c", text: "Burada bekliyoruz", correct: false }, { id: "d", text: "Burada duruyoruz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Rater' ne demek?", options: [{ id: "a", text: "Kaçırmak", correct: true }, { id: "b", text: "Yakalamak", correct: false }, { id: "c", text: "Binmek", correct: false }, { id: "d", text: "Sürmek", correct: false }] },
    { id: 8, type: "SELECT", question: "'Attendre' ne demek?", options: [{ id: "a", text: "Beklemek", correct: true }, { id: "b", text: "Gelmek", correct: false }, { id: "c", text: "Gitmek", correct: false }, { id: "d", text: "Duymak", correct: false }] },

    // ORTA (7 Soru) - Eylem Çekimleri
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Trene biniyorum", correctAnswer: "Je monte dans le train" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Durakta iniyoruz", correctAnswer: "Nous descendons à l'arrêt" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "N'oubliez pas de ___.", options: [{ id: "a", text: "valider", correct: true }, { id: "b", text: "validez", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu as ___ ton train?", options: [{ id: "a", text: "raté", correct: true }, { id: "b", text: "rater", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Elle attend le bus", options: [{ id: "a", text: "Otobüsü bekliyor", correct: true }, { id: "b", text: "Otobüse biniyor", correct: false }, { id: "c", text: "Otobüsten iniyor", correct: false }, { id: "d", text: "Otobüsü kaçırdı", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ à Paris?", options: [{ id: "a", text: "descendez", correct: true }, { id: "b", text: "montez", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Biletini damgaladın mı?", correctAnswer: "As-tu composté ton billet?" },

    // ZOR (5 Soru) - Karışık Eylemler
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Şimdi inmemiz lazım", correctAnswer: "Il faut descendre maintenant" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Trene binmeden önce biletini damgala", correctAnswer: "Composte ton billet avant de monter dans le train" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Le train ___ de partir.", options: [{ id: "a", text: "vient", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Hangi durakta ineceksiniz?", correctAnswer: "À quel arrêt allez-vous descendre?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sakın treni kaçırma!", correctAnswer: "Ne rate pas le train!" }
];

const unit338Quiz1: Question[] = [
    // KOLAY (8 Soru) - Karışık (Kelime & Basit Gramer)
    { id: 1, type: "SELECT", question: "'L'aéroport' ne demek?", options: [{ id: "a", text: "Havaalanı", correct: true }, { id: "b", text: "Gümrük", correct: false }, { id: "c", text: "İstasyon", correct: false }, { id: "d", text: "Liman", correct: false }] },
    { id: 2, type: "SELECT", question: "Edilgen yapıda hangi yardımcı fiil kullanılır?", options: [{ id: "a", text: "Être", correct: true }, { id: "b", text: "Avoir", correct: false }, { id: "c", text: "Aller", correct: false }, { id: "d", text: "Faire", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le bagage' ne demek?", options: [{ id: "a", text: "Bagaj", correct: true }, { id: "b", text: "Bilet", correct: false }, { id: "c", text: "Pasaport", correct: false }, { id: "d", text: "Koltuk", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Le vol ___ annulé.", options: [{ id: "a", text: "est", correct: true }, { id: "b", text: "a", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai deux ___.", options: [{ id: "a", text: "valises", correct: true }, { id: "b", text: "valise", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Carte d'embarquement", options: [{ id: "a", text: "Biniş kartı", correct: true }, { id: "b", text: "Kimlik kartı", correct: false }, { id: "c", text: "Kredi kartı", correct: false }, { id: "d", text: "Bagaj kartı", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le passeport' ne demek?", options: [{ id: "a", text: "Pasaport", correct: true }, { id: "b", text: "Vize", correct: false }, { id: "c", text: "Bilet", correct: false }, { id: "d", text: "Kimlik", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'avion' ne demek?", options: [{ id: "a", text: "Uçak", correct: true }, { id: "b", text: "Pilot", correct: false }, { id: "c", text: "Hava", correct: false }, { id: "d", text: "Kuş", correct: false }] },

    // ORTA (7 Soru) - Karışık
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Uçuş iptal edildi", correctAnswer: "Le vol est annulé" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Pasaportunuz lütfen", correctAnswer: "Votre passeport s'il vous plaît" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Les bagages sont ___ (enregistrer).", options: [{ id: "a", text: "enregistrés", correct: true }, { id: "b", text: "enregistré", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "La valise est ___ (perdre).", options: [{ id: "a", text: "perdue", correct: true }, { id: "b", text: "perdu", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le vol est retardé", options: [{ id: "a", text: "Uçuş ertelendi", correct: true }, { id: "b", text: "Uçuş iptal", correct: false }, { id: "c", text: "Uçuş zamanında", correct: false }, { id: "d", text: "Uçuş dolu", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Voici votre ___ d'embarquement.", options: [{ id: "a", text: "carte", correct: true }, { id: "b", text: "billet", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Uçuş numarası nedir?", correctAnswer: "Quel est le numéro de vol?" },

    // ZOR (5 Soru) - Karışık
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Valizim kayboldu (Pasif)", correctAnswer: "Ma valise est perdue" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Yolcular uçağa biniyor", correctAnswer: "Les passagers embarquent" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Les vols ont ___ annulés.", options: [{ id: "a", text: "été", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bagajlar kontrol edildi", correctAnswer: "Les bagages ont été contrôlés" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Check-in kontuarı nerede?", correctAnswer: "Où est le comptoir d'enregistrement?" }
];

const unit338Quiz2: Question[] = [
    // KOLAY (8 Soru) - Karışık
    { id: 1, type: "SELECT", question: "'La sécurité' ne demek?", options: [{ id: "a", text: "Güvenlik", correct: true }, { id: "b", text: "Polis", correct: false }, { id: "c", text: "Kontrol", correct: false }, { id: "d", text: "Gümrük", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "La porte est ___ (fermer - Pasif).", options: [{ id: "a", text: "fermée", correct: true }, { id: "b", text: "fermé", correct: false }] },
    { id: 3, type: "SELECT", question: "'Embarquer' ne demek?", options: [{ id: "a", text: "Uçağa binmek", correct: true }, { id: "b", text: "Uçaktan inmek", correct: false }, { id: "c", text: "Beklemek", correct: false }, { id: "d", text: "Uyumak", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Allez à la ___ 10.", options: [{ id: "a", text: "porte", correct: true }, { id: "b", text: "port", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Les passagers sont ___ (inviter).", options: [{ id: "a", text: "invités", correct: true }, { id: "b", text: "invité", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Enlevez vos chaussures", options: [{ id: "a", text: "Ayakkabılarınızı çıkarın", correct: true }, { id: "b", text: "Ceketinizi çıkarın", correct: false }, { id: "c", text: "Kemerinizi çıkarın", correct: false }, { id: "d", text: "Saatinizi çıkarın", correct: false }] },
    { id: 7, type: "SELECT", question: "'La douane' ne demek?", options: [{ id: "a", text: "Gümrük", correct: true }, { id: "b", text: "Pasaport", correct: false }, { id: "c", text: "Polis", correct: false }, { id: "d", text: "Valiz", correct: false }] },
    { id: 8, type: "SELECT", question: "'Interdit' ne demek?", options: [{ id: "a", text: "Yasak", correct: true }, { id: "b", text: "Serbest", correct: false }, { id: "c", text: "Açık", correct: false }, { id: "d", text: "Kapalı", correct: false }] },

    // ORTA (7 Soru) - Karışık
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Ceplerinizi boşaltın", correctAnswer: "Videz vos poches" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bilgisayarınızı çıkarın", correctAnswer: "Sortez votre ordinateur" },
    { id: 11, type: "FILL_BLANK", question: "Doldur (Pasif):", sentence: "L'accès est ___ (interdire).", options: [{ id: "a", text: "interdit", correct: true }, { id: "b", text: "interdite", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous avez des objets ___?", options: [{ id: "a", text: "interdits", correct: true }, { id: "b", text: "interdit", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La porte est changée", options: [{ id: "a", text: "Kapı değiştirildi", correct: true }, { id: "b", text: "Kapı kapandı", correct: false }, { id: "c", text: "Kapı açıldı", correct: false }, { id: "d", text: "Kapı bozuk", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Montrez-moi votre ___.", options: [{ id: "a", text: "passeport", correct: true }, { id: "b", text: "billet", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Kapı kapalı (Pasif)", correctAnswer: "La porte est fermée" },

    // ZOR (5 Soru) - Karışık
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Yolcular yönlendirildi (Pasif)", correctAnswer: "Les passagers ont été dirigés" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Beyan edecek bir şeyiniz var mı?", correctAnswer: "Avez-vous quelque chose à déclarer?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Les valises sont ___ (fouiller - aramak).", options: [{ id: "a", text: "fouillées", correct: true }, { id: "b", text: "fouillés", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu eşya yasaktır", correctAnswer: "Cet objet est interdit" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Pasaportlar kontrol edildi", correctAnswer: "Les passeports ont été contrôlés" }
];

const unit338Quiz3: Question[] = [
    // KOLAY (8 Soru) - Karışık
    { id: 1, type: "SELECT", question: "'L'hôtesse' ne demek?", options: [{ id: "a", text: "Hostes", correct: true }, { id: "b", text: "Pilot", correct: false }, { id: "c", text: "Yolcu", correct: false }, { id: "d", text: "Polis", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le siège' ne demek?", options: [{ id: "a", text: "Koltuk", correct: true }, { id: "b", text: "Kemer", correct: false }, { id: "c", text: "Pencere", correct: false }, { id: "d", text: "Kapı", correct: false }] },
    { id: 3, type: "SELECT", question: "'Décoller' ne demek?", options: [{ id: "a", text: "Havalanmak / Kalkmak", correct: true }, { id: "b", text: "İnmek", correct: false }, { id: "c", text: "Uçmak", correct: false }, { id: "d", text: "Düşmek", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Attachez votre ___.", options: [{ id: "a", text: "ceinture", correct: true }, { id: "b", text: "siège", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous sommes ___ (arriver).", options: [{ id: "a", text: "arrivés", correct: true }, { id: "b", text: "arrivée", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'avion a atterri", options: [{ id: "a", text: "Uçak indi", correct: true }, { id: "b", text: "Uçak kalktı", correct: false }, { id: "c", text: "Uçak gecikti", correct: false }, { id: "d", text: "Uçak düştü", correct: false }] },
    { id: 7, type: "SELECT", question: "'Atterrir' ne demek?", options: [{ id: "a", text: "İniş yapmak", correct: true }, { id: "b", text: "Kalkış yapmak", correct: false }, { id: "c", text: "Uçmak", correct: false }, { id: "d", text: "Durmak", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le commandant' ne demek?", options: [{ id: "a", text: "Kaptan pilot", correct: true }, { id: "b", text: "Hostes", correct: false }, { id: "c", text: "Yolcu", correct: false }, { id: "d", text: "Güvenlik", correct: false }] },

    // ORTA (7 Soru) - Karışık
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Kemerlerinizi bağlayın", correctAnswer: "Attachez vos ceintures" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Uçak iniyor", correctAnswer: "L'avion atterrit" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Le repas est ___ (servir - Pasif).", options: [{ id: "a", text: "servi", correct: true }, { id: "b", text: "servie", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Redressez votre ___.", options: [{ id: "a", text: "siège", correct: true }, { id: "b", text: "chaise", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nous traversons une zone de turbulence", options: [{ id: "a", text: "Türbülansa giriyoruz", correct: true }, { id: "b", text: "Türbülanstan çıkıyoruz", correct: false }, { id: "c", text: "Hava çok güzel", correct: false }, { id: "d", text: "Uçuş sakin", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "L'annonce a été ___ (faire - Pasif).", options: [{ id: "a", text: "faite", correct: true }, { id: "b", text: "fait", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Su alabilir miyim?", correctAnswer: "Puis-je avoir de l'eau?" },

    // ZOR (5 Soru) - Karışık
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Lütfen yerinize oturun", correctAnswer: "Asseyez-vous à votre place s'il vous plaît" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Yemek servis edildi (Pasif)", correctAnswer: "Le repas a été servi" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Les lumières sont ___ (éteindre - Pasif).", options: [{ id: "a", text: "éteintes", correct: true }, { id: "b", text: "éteint", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Midem bulanıyor", correctAnswer: "J'ai mal au cœur" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Rahatsız etmeyin", correctAnswer: "Ne pas déranger" }
];

const unit338Quiz4: Question[] = [
    // KOLAY (8 Soru) - Karışık
    { id: 1, type: "SELECT", question: "'La douane' ne demek?", options: [{ id: "a", text: "Gümrük", correct: true }, { id: "b", text: "Polis", correct: false }, { id: "c", text: "Havaalanı", correct: false }, { id: "d", text: "Uçak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Perdu' ne demek?", options: [{ id: "a", text: "Kayıp", correct: true }, { id: "b", text: "Bulunmuş", correct: false }, { id: "c", text: "Yeni", correct: false }, { id: "d", text: "Eski", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur (Pasif):", sentence: "La valise est ___ (perdre).", options: [{ id: "a", text: "perdue", correct: true }, { id: "b", text: "perdu", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Suivez la ___.", options: [{ id: "a", text: "sortie", correct: true }, { id: "b", text: "sortir", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Bagages ___.", options: [{ id: "a", text: "perdus", correct: true }, { id: "b", text: "perdre", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Où est la sortie ?", options: [{ id: "a", text: "Çıkış nerede?", correct: true }, { id: "b", text: "Giriş nerede?", correct: false }, { id: "c", text: "Tuvalet nerede?", correct: false }, { id: "d", text: "Taksi nerede?", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le taxi' ne demek?", options: [{ id: "a", text: "Taksi", correct: true }, { id: "b", text: "Otobüs", correct: false }, { id: "c", text: "Tren", correct: false }, { id: "d", text: "Araba", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'autobus' ne demek?", options: [{ id: "a", text: "Otobüs", correct: true }, { id: "b", text: "Taksi", correct: false }, { id: "c", text: "Tren", correct: false }, { id: "d", text: "Uçak", correct: false }] },

    // ORTA (7 Soru) - Karışık
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Valizimi bulamıyorum", correctAnswer: "Je ne trouve pas ma valise" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Taksi durağı nerede?", correctAnswer: "Où est la station de taxis?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je prends le ___.", options: [{ id: "a", text: "bus", correct: true }, { id: "b", text: "buss", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ la douane.", options: [{ id: "a", text: "passer", correct: true }, { id: "b", text: "passé", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Contrôle des passeports", options: [{ id: "a", text: "Pasaport kontrolü", correct: true }, { id: "b", text: "Bilet kontrolü", correct: false }, { id: "c", text: "Gümrük kontrolü", correct: false }, { id: "d", text: "Bagaj kontrolü", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Bienvenue ___ France.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "à", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bagajlar bulundu (Pasif)", correctAnswer: "Les bagages sont trouvés" },

    // ZOR (5 Soru) - Karışık
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Şehre nasıl gidebilirim?", correctAnswer: "Comment aller en ville?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Otobüs durağı nerede?", correctAnswer: "Où est l'arrêt de bus?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Combien coûte la ___ en taxi?", options: [{ id: "a", text: "course", correct: true }, { id: "b", text: "cour", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Beni karşılamaya geldiler", correctAnswer: "Ils sont venus me chercher" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yolculuk iyi geçti", correctAnswer: "Le voyage s'est bien passé" }
];

const unit339Quiz1: Question[] = [
    // KOLAY (8 Soru) - Restoran Temelleri
    { id: 1, type: "SELECT", question: "'Le serveur' ne demek?", options: [{ id: "a", text: "Garson", correct: true }, { id: "b", text: "Aşçı", correct: false }, { id: "c", text: "Müdür", correct: false }, { id: "d", text: "Müşteri", correct: false }] },
    { id: 2, type: "SELECT", question: "'La carte' ne demek?", options: [{ id: "a", text: "Menü / Kart", correct: true }, { id: "b", text: "Hesap", correct: false }, { id: "c", text: "Masa", correct: false }, { id: "d", text: "Sandalye", correct: false }] },
    { id: 3, type: "SELECT", question: "'Commander' ne demek?", options: [{ id: "a", text: "Sipariş vermek", correct: true }, { id: "b", text: "Ödemek", correct: false }, { id: "c", text: "Yemek", correct: false }, { id: "d", text: "İçmek", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est occupé.", options: [{ id: "a", text: "serveur", correct: true }, { id: "b", text: "service", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Donnez-moi la ___.", options: [{ id: "a", text: "carte", correct: true }, { id: "b", text: "carton", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une table pour deux", options: [{ id: "a", text: "İki kişilik masa", correct: true }, { id: "b", text: "Üç kişilik masa", correct: false }, { id: "c", text: "Tek kişilik masa", correct: false }, { id: "d", text: "Dört kişilik masa", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le menu' ne demek?", options: [{ id: "a", text: "Menü (Günün menüsü)", correct: true }, { id: "b", text: "Liste", correct: false }, { id: "c", text: "Fiyat", correct: false }, { id: "d", text: "Yemek", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'entrée' ne demek?", options: [{ id: "a", text: "Başlangıç yemeği", correct: true }, { id: "b", text: "Ana yemek", correct: false }, { id: "c", text: "Tatlı", correct: false }, { id: "d", text: "İçecek", correct: false }] },

    // ORTA (7 Soru) - Sipariş Verme
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Sipariş vermek istiyorum", correctAnswer: "Je voudrais commander" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Günün menüsü nedir?", correctAnswer: "Quel est le menu du jour?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Comme entrée, je ___ une salade.", options: [{ id: "a", text: "prends", correct: true }, { id: "b", text: "prend", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous avez ___?", options: [{ id: "a", text: "choisi", correct: true }, { id: "b", text: "choisir", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je prendrai le poulet", options: [{ id: "a", text: "Tavuğu alacağım", correct: true }, { id: "b", text: "Et alacağım", correct: false }, { id: "c", text: "Balık alacağım", correct: false }, { id: "d", text: "Sebze alacağım", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___.", options: [{ id: "a", text: "délicieux", correct: true }, { id: "b", text: "délice", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Masa rezervasyonu yaptım", correctAnswer: "J'ai réservé une table" },

    // ZOR (5 Soru) - Diyalog
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Ne önerirsiniz?", correctAnswer: "Qu'est-ce que vous nous conseillez?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "az pişmiş lütfen", correctAnswer: "Saignant s'il vous plaît" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Avez-vous une table en ___?", options: [{ id: "a", text: "terrasse", correct: true }, { id: "b", text: "terra", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Garsonu çağırabilir misin?", correctAnswer: "Peux-tu appeler le serveur?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Burada sigara içmek yasak", correctAnswer: "Il est interdit de fumer ici" }
];

const unit339Quiz2: Question[] = [
    // KOLAY (8 Soru) - Yiyecek & İçecek
    { id: 1, type: "SELECT", question: "'Le plat principal' ne demek?", options: [{ id: "a", text: "Ana yemek", correct: true }, { id: "b", text: "Başlangıç", correct: false }, { id: "c", text: "Tatlı", correct: false }, { id: "d", text: "İçecek", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le dessert' ne demek?", options: [{ id: "a", text: "Tatlı", correct: true }, { id: "b", text: "Tuzlu", correct: false }, { id: "c", text: "Ekşi", correct: false }, { id: "d", text: "Acı", correct: false }] },
    { id: 3, type: "SELECT", question: "'La boisson' ne demek?", options: [{ id: "a", text: "İçecek", correct: true }, { id: "b", text: "Yiyecek", correct: false }, { id: "c", text: "Ekmek", correct: false }, { id: "d", text: "Su", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Je voudrais un ___.", options: [{ id: "a", text: "dessert", correct: true }, { id: "b", text: "désert", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Quelle ___ désirez-vous?", options: [{ id: "a", text: "boisson", correct: true }, { id: "b", text: "boire", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une carafe d'eau", options: [{ id: "a", text: "Bir sürahi su", correct: true }, { id: "b", text: "Bir şişe şarap", correct: false }, { id: "c", text: "Bir bardak çay", correct: false }, { id: "d", text: "Bir fincan kahve", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le poisson' ne demek?", options: [{ id: "a", text: "Balık", correct: true }, { id: "b", text: "Tavuk", correct: false }, { id: "c", text: "Et", correct: false }, { id: "d", text: "Sebze", correct: false }] },
    { id: 8, type: "SELECT", question: "'La viande' ne demek?", options: [{ id: "a", text: "Et", correct: true }, { id: "b", text: "Balık", correct: false }, { id: "c", text: "Salata", correct: false }, { id: "d", text: "Meyve", correct: false }] },

    // ORTA (7 Soru) - Tercihler
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Et sevmem", correctAnswer: "Je n'aime pas la viande" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Vejetaryen yemeğiniz var mı?", correctAnswer: "Avez-vous des plats végétariens?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Le poisson est ___ cuit.", options: [{ id: "a", text: "bien", correct: true }, { id: "b", text: "bon", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ne bois pas ___ vin.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Sans sucre", options: [{ id: "a", text: "Şekersiz", correct: true }, { id: "b", text: "Şekerli", correct: false }, { id: "c", text: "Tuzsuz", correct: false }, { id: "d", text: "Tuzlu", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "En ___, je prends une tarte.", options: [{ id: "a", text: "dessert", correct: true }, { id: "b", text: "entrée", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bu çorba çok sıcak", correctAnswer: "Cette soupe est trop chaude" },

    // ZOR (5 Soru) - Detaylar
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Ev yapımı mı?", correctAnswer: "C'est fait maison?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Alerjim var", correctAnswer: "J'ai une allergie" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce plat contient du ___.", options: [{ id: "a", text: "gluten", correct: true }, { id: "b", text: "glutène", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Çok taze görünüyor", correctAnswer: "Ça a l'air très frais" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Başka bir şey ister misiniz?", correctAnswer: "Voulez-vous autre chose?" }
];

const unit339Quiz3: Question[] = [
    // KOLAY (8 Soru) - Hesap ve Ödeme
    { id: 1, type: "SELECT", question: "'L'addition' ne demek?", options: [{ id: "a", text: "Hesap", correct: true }, { id: "b", text: "Matematik", correct: false }, { id: "c", text: "Sipariş", correct: false }, { id: "d", text: "Para", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le pourboire' ne demek?", options: [{ id: "a", text: "Bahşiş", correct: true }, { id: "b", text: "Hesap", correct: false }, { id: "c", text: "Vergi", correct: false }, { id: "d", text: "İndirim", correct: false }] },
    { id: 3, type: "SELECT", question: "'Payer' ne demek?", options: [{ id: "a", text: "Ödemek", correct: true }, { id: "b", text: "Almak", correct: false }, { id: "c", text: "Vermek", correct: false }, { id: "d", text: "Saymak", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___, s'il vous plaît.", options: [{ id: "a", text: "addition", correct: true }, { id: "b", text: "additions", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Je laisse un ___.", options: [{ id: "a", text: "pourboire", correct: true }, { id: "b", text: "boire", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Gardez la monnaie", options: [{ id: "a", text: "Üstü kalsın", correct: true }, { id: "b", text: "Parayı saklayın", correct: false }, { id: "c", text: "Parayı verin", correct: false }, { id: "d", text: "Para bozuk", correct: false }] },
    { id: 7, type: "SELECT", question: "'Espèces' ne demek?", options: [{ id: "a", text: "Nakit", correct: true }, { id: "b", text: "Kart", correct: false }, { id: "c", text: "Çek", correct: false }, { id: "d", text: "Borç", correct: false }] },
    { id: 8, type: "SELECT", question: "'La caisse' ne demek?", options: [{ id: "a", text: "Kasa", correct: true }, { id: "b", text: "Kutu", correct: false }, { id: "c", text: "Banka", correct: false }, { id: "d", text: "Cüzdan", correct: false }] },

    // ORTA (7 Soru) - Ödeme Diyalogları
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Hesabı alabilir miyim?", correctAnswer: "Puis-je avoir l'addition?" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Kartla ödeyebilir miyim?", correctAnswer: "Puis-je payer par carte?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce n'est pas ___.", options: [{ id: "a", text: "cher", correct: true }, { id: "b", text: "chère", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vous ___ au restaurant.", options: [{ id: "a", text: "invite", correct: true }, { id: "b", text: "invité", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est moi qui invite", options: [{ id: "a", text: "Ben ısmarlıyorum", correct: true }, { id: "b", text: "Ben ödüyorum", correct: false }, { id: "c", text: "Ben geliyorum", correct: false }, { id: "d", text: "Ben gidiyorum", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Le service est ___.", options: [{ id: "a", text: "compris", correct: true }, { id: "b", text: "comprendre", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Hesabı bölüşelim", correctAnswer: "Partageons l'addition" },

    // ZOR (5 Soru) - Sorun ve İtiraz
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Hesapta bir hata var", correctAnswer: "Il y a une erreur dans l'addition" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Bunu ben sipariş etmedim", correctAnswer: "Je n'ai pas commandé ça" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "La monnaie est ___.", options: [{ id: "a", text: "fausse", correct: true }, { id: "b", text: "faux", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Fiş alabilir miyim?", correctAnswer: "Puis-je avoir un reçu?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Fiyatlar çok yüksek", correctAnswer: "Les prix sont très élevés" }
];

const unit339Quiz4: Question[] = [
    // KOLAY (8 Soru) - Karışık
    { id: 1, type: "SELECT", question: "'Le petit-déjeuner' ne demek?", options: [{ id: "a", text: "Kahvaltı", correct: true }, { id: "b", text: "Öğle yemeği", correct: false }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Ara öğün", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le déjeuner' ne demek?", options: [{ id: "a", text: "Öğle yemeği", correct: true }, { id: "b", text: "Kahvaltı", correct: false }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Gece yemeği", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le dîner' ne demek?", options: [{ id: "a", text: "Akşam yemeği", correct: true }, { id: "b", text: "Öğle yemeği", correct: false }, { id: "c", text: "Kahvaltı", correct: false }, { id: "d", text: "Tatlı", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Bon ___!", options: [{ id: "a", text: "appétit", correct: true }, { id: "b", text: "manger", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___.", options: [{ id: "a", text: "faim", correct: true }, { id: "b", text: "soif", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'ai soif", options: [{ id: "a", text: "Susadım", correct: true }, { id: "b", text: "Acıktım", correct: false }, { id: "c", text: "Yoruldum", correct: false }, { id: "d", text: "Üşüdüm", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le verre' ne demek?", options: [{ id: "a", text: "Bardak", correct: true }, { id: "b", text: "Tabak", correct: false }, { id: "c", text: "Çatal", correct: false }, { id: "d", text: "Bıçak", correct: false }] },
    { id: 8, type: "SELECT", question: "'La fourchette' ne demek?", options: [{ id: "a", text: "Çatal", correct: true }, { id: "b", text: "Kaşık", correct: false }, { id: "c", text: "Bıçak", correct: false }, { id: "d", text: "Tabak", correct: false }] },

    // ORTA (7 Soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Afiyet olsun", correctAnswer: "Bon appétit" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Şerefe", correctAnswer: "Santé / À la vôtre" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Passe-moi le ___.", options: [{ id: "a", text: "sel", correct: true }, { id: "b", text: "selle", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ chaud.", options: [{ id: "a", text: "très", correct: true }, { id: "b", text: "beaucoup", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est froid", options: [{ id: "a", text: "Bu soğuk", correct: true }, { id: "b", text: "Bu sıcak", correct: false }, { id: "c", text: "Bu ılık", correct: false }, { id: "d", text: "Bu taze", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ne mange pas de ___.", options: [{ id: "a", text: "porc", correct: true }, { id: "b", text: "pork", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ekmek bitti", correctAnswer: "Il n'y a plus de pain" },

    // ZOR (5 Soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Hizmet çok yavaş", correctAnswer: "Le service est très lent" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Tuvaletler nerede?", correctAnswer: "Où sont les toilettes?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "La viande est ___.", options: [{ id: "a", text: "dure", correct: true }, { id: "b", text: "dur", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bıçağım kirli", correctAnswer: "Mon couteau est sale" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Harika bir akşamdı", correctAnswer: "C'était une soirée merveilleuse" }
];

const unit340Quiz1: Question[] = [
    // KOLAY (8 Soru) - Temel Malzemeler
    { id: 1, type: "SELECT", question: "'Le sel' ne demek?", options: [{ id: "a", text: "Tuz", correct: true }, { id: "b", text: "Şeker", correct: false }, { id: "c", text: "Un", correct: false }, { id: "d", text: "Yağ", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le sucre' ne demek?", options: [{ id: "a", text: "Şeker", correct: true }, { id: "b", text: "Tuz", correct: false }, { id: "c", text: "Biber", correct: false }, { id: "d", text: "Süt", correct: false }] },
    { id: 3, type: "SELECT", question: "'L'huile' ne demek?", options: [{ id: "a", text: "Yağ", correct: true }, { id: "b", text: "Su", correct: false }, { id: "c", text: "Sirke", correct: false }, { id: "d", text: "Süt", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Passe-moi le ___.", options: [{ id: "a", text: "sel", correct: true }, { id: "b", text: "selle", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut du ___.", options: [{ id: "a", text: "sucre", correct: true }, { id: "b", text: "sel", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "De la farine", options: [{ id: "a", text: "Un", correct: true }, { id: "b", text: "Şeker", correct: false }, { id: "c", text: "Tuz", correct: false }, { id: "d", text: "Pirinç", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le poivre' ne demek?", options: [{ id: "a", text: "Karabiber", correct: true }, { id: "b", text: "Tuz", correct: false }, { id: "c", text: "Şeker", correct: false }, { id: "d", text: "Kimyon", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le beurre' ne demek?", options: [{ id: "a", text: "Tereyağı", correct: true }, { id: "b", text: "Peynir", correct: false }, { id: "c", text: "Yoğurt", correct: false }, { id: "d", text: "Kaymak", correct: false }] },

    // ORTA (7 Soru) - Mutfak Eylemleri
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Soğanları doğrayın", correctAnswer: "Coupez les oignons" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Tuz ekleyin", correctAnswer: "Ajoutez du sel" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Faites ___ l'eau.", options: [{ id: "a", text: "bouillir", correct: true }, { id: "b", text: "bouilli", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "___ le tout.", options: [{ id: "a", text: "Mélangez", correct: true }, { id: "b", text: "Mélanger", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Faire cuire au four", options: [{ id: "a", text: "Fırında pişirmek", correct: true }, { id: "b", text: "Tavada pişirmek", correct: false }, { id: "c", text: "Haşlamak", correct: false }, { id: "d", text: "Kızartmak", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "___ les pommes de terre.", options: [{ id: "a", text: "Épluchez", correct: true }, { id: "b", text: "Éplucher", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "İyice karıştırın", correctAnswer: "Mélangez bien" },

    // ZOR (5 Soru) - Tarif
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Kısık ateşte pişirin", correctAnswer: "Faites cuire à feu doux" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "10 dakika bekletin", correctAnswer: "Laissez reposer 10 minutes" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Versez le mélange dans un ___.", options: [{ id: "a", text: "moule", correct: true }, { id: "b", text: "moulé", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Fırını önceden ısıtın", correctAnswer: "Préchauffez le four" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sıcak servis yapın", correctAnswer: "Servez chaud" }
];

const unit340Quiz2: Question[] = [
    // KOLAY (8 Soru) - Mutfak Eşyaları
    { id: 1, type: "SELECT", question: "'La casserole' ne demek?", options: [{ id: "a", text: "Tencere", correct: true }, { id: "b", text: "Tava", correct: false }, { id: "c", text: "Tabak", correct: false }, { id: "d", text: "Kaşık", correct: false }] },
    { id: 2, type: "SELECT", question: "'La poêle' ne demek?", options: [{ id: "a", text: "Tava", correct: true }, { id: "b", text: "Tencere", correct: false }, { id: "c", text: "Fırın", correct: false }, { id: "d", text: "Bıçak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le four' ne demek?", options: [{ id: "a", text: "Fırın", correct: true }, { id: "b", text: "Ocak", correct: false }, { id: "c", text: "Dolap", correct: false }, { id: "d", text: "Masa", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Mets la ___ sur le feu.", options: [{ id: "a", text: "casserole", correct: true }, { id: "b", text: "table", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Ouvre le ___.", options: [{ id: "a", text: "frigo", correct: true }, { id: "b", text: "frit", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Un couteau pointu", options: [{ id: "a", text: "Sivri bir bıçak", correct: true }, { id: "b", text: "Kör bir bıçak", correct: false }, { id: "c", text: "Büyük bir bıçak", correct: false }, { id: "d", text: "Küçük bir bıçak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le bol' ne demek?", options: [{ id: "a", text: "Kase", correct: true }, { id: "b", text: "Bardak", correct: false }, { id: "c", text: "Şişe", correct: false }, { id: "d", text: "Tabak", correct: false }] },
    { id: 8, type: "SELECT", question: "'La cuillère' ne demek?", options: [{ id: "a", text: "Kaşık", correct: true }, { id: "b", text: "Çatal", correct: false }, { id: "c", text: "Bıçak", correct: false }, { id: "d", text: "Kepçe", correct: false }] },

    // ORTA (7 Soru) - Kullanım
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Tencereyi kapağıyla kapatın", correctAnswer: "Couvrez la casserole" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Tavayı yağlayın", correctAnswer: "Huilez la poêle" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Utilisez une ___ en bois.", options: [{ id: "a", text: "cuillère", correct: true }, { id: "b", text: "couteau", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Lavez les ___.", options: [{ id: "a", text: "légumes", correct: true }, { id: "b", text: "légume", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Râper le fromage", options: [{ id: "a", text: "Peyniri rendelemek", correct: true }, { id: "b", text: "Peyniri kesmek", correct: false }, { id: "c", text: "Peyniri eritmek", correct: false }, { id: "d", text: "Peyniri yemek", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Battez les ___.", options: [{ id: "a", text: "œufs", correct: true }, { id: "b", text: "œuf", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bulaşıkları yıkayın", correctAnswer: "Faites la vaisselle" },

    // ZOR (5 Soru) - Teknikler
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Suyunu süzün", correctAnswer: "Égouttez l'eau" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Köpürtün", correctAnswer: "Faites mousser" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Coupez en petits ___.", options: [{ id: "a", text: "morceaux", correct: true }, { id: "b", text: "bouts", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Altın rengi olana kadar pişirin", correctAnswer: "Faites cuire jusqu'à ce que ce soit doré" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kaynatmayın", correctAnswer: "Ne faites pas bouillir" }
];

const unit340Quiz3: Question[] = [
    // KOLAY (8 Soru) - Tatlar
    { id: 1, type: "SELECT", question: "'Sucré' ne demek?", options: [{ id: "a", text: "Tatlı / Şekerli", correct: true }, { id: "b", text: "Tuzlu", correct: false }, { id: "c", text: "Acı", correct: false }, { id: "d", text: "Ekşi", correct: false }] },
    { id: 2, type: "SELECT", question: "'Salé' ne demek?", options: [{ id: "a", text: "Tuzlu", correct: true }, { id: "b", text: "Tatlı", correct: false }, { id: "c", text: "Acı", correct: false }, { id: "d", text: "Ekşi", correct: false }] },
    { id: 3, type: "SELECT", question: "'Amer' ne demek?", options: [{ id: "a", text: "Acı (Kahve gibi)", correct: true }, { id: "b", text: "Tatlı", correct: false }, { id: "c", text: "Ekşi", correct: false }, { id: "d", text: "Tuzlu", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce gâteau est très ___.", options: [{ id: "a", text: "sucré", correct: true }, { id: "b", text: "salé", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime le goût ___.", options: [{ id: "a", text: "épicé", correct: true }, { id: "b", text: "épice", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est trop salé", options: [{ id: "a", text: "Bu çok tuzlu", correct: true }, { id: "b", text: "Bu çok tatlı", correct: false }, { id: "c", text: "Bu çok acı", correct: false }, { id: "d", text: "Bu çok ekşi", correct: false }] },
    { id: 7, type: "SELECT", question: "'Acide' ne demek?", options: [{ id: "a", text: "Ekşi / Asitli", correct: true }, { id: "b", text: "Tatlı", correct: false }, { id: "c", text: "Tuzlu", correct: false }, { id: "d", text: "Acı", correct: false }] },
    { id: 8, type: "SELECT", question: "'Frais' ne demek?", options: [{ id: "a", text: "Taze / Serin", correct: true }, { id: "b", text: "Bayat", correct: false }, { id: "c", text: "Sıcak", correct: false }, { id: "d", text: "Pişmiş", correct: false }] },

    // ORTA (7 Soru) - Tanımlama
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Çok lezzetli", correctAnswer: "C'est délicieux" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Tadı yok", correctAnswer: "Ça n'a pas de goût" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "La sauce est ___.", options: [{ id: "a", text: "épicée", correct: true }, { id: "b", text: "épicé", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un plat ___.", options: [{ id: "a", text: "traditionnel", correct: true }, { id: "b", text: "tradition", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ça sent bon", options: [{ id: "a", text: "Güzel kokuyor", correct: true }, { id: "b", text: "Kötü kokuyor", correct: false }, { id: "c", text: "Tadı güzel", correct: false }, { id: "d", text: "Tadı kötü", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Il manque du ___.", options: [{ id: "a", text: "sel", correct: true }, { id: "b", text: "selle", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Çok baharatlı", correctAnswer: "C'est très épicé" },

    // ZOR (5 Soru) - Detaylı Tatlar
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Hafif bir tat", correctAnswer: "Un goût léger" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Bu meyve ekşi", correctAnswer: "Ce fruit est acide" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "La texture est ___.", options: [{ id: "a", text: "crémeuse", correct: true }, { id: "b", text: "crème", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Ağızda eriyor", correctAnswer: "Ça fond dans la bouche" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Biraz daha tuz ekle", correctAnswer: "Ajoute un peu plus de sel" }
];

const unit340Quiz4: Question[] = [
    // KOLAY (8 Soru) - Karışık Mutfak
    { id: 1, type: "SELECT", question: "'Le chef' ne demek?", options: [{ id: "a", text: "Aşçıbaşı / Şef", correct: true }, { id: "b", text: "Garson", correct: false }, { id: "c", text: "Müdür", correct: false }, { id: "d", text: "Patron", correct: false }] },
    { id: 2, type: "SELECT", question: "'La cuisine' ne demek?", options: [{ id: "a", text: "Mutfak / Yemek pişirme", correct: true }, { id: "b", text: "Salon", correct: false }, { id: "c", text: "Banyo", correct: false }, { id: "d", text: "Bahçe", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le repas' ne demek?", options: [{ id: "a", text: "Öğün / Yemek", correct: true }, { id: "b", text: "Kahvaltı", correct: false }, { id: "c", text: "Tatlı", correct: false }, { id: "d", text: "İçecek", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime faire la ___.", options: [{ id: "a", text: "cuisine", correct: true }, { id: "b", text: "cuisinier", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ma ___ préférée.", options: [{ id: "a", text: "recette", correct: true }, { id: "b", text: "reçu", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mettre la table", options: [{ id: "a", text: "Masayı kurmak", correct: true }, { id: "b", text: "Masayı toplamak", correct: false }, { id: "c", text: "Masayı silmek", correct: false }, { id: "d", text: "Masayı taşımak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Gouter' ne demek?", options: [{ id: "a", text: "Tatmak", correct: true }, { id: "b", text: "Yemek", correct: false }, { id: "c", text: "İçmek", correct: false }, { id: "d", text: "Pişirmek", correct: false }] },
    { id: 8, type: "SELECT", question: "'Préparer' ne demek?", options: [{ id: "a", text: "Hazırlamak", correct: true }, { id: "b", text: "Yemek", correct: false }, { id: "c", text: "Almak", correct: false }, { id: "d", text: "Vermemek", correct: false }] },

    // ORTA (7 Soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Yemek hazır", correctAnswer: "Le repas est prêt" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bulaşık makinesini boşalt", correctAnswer: "Vide le lave-vaisselle" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu cuisines ___.", options: [{ id: "a", text: "bien", correct: true }, { id: "b", text: "bon", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est une spécialité ___.", options: [{ id: "a", text: "locale", correct: true }, { id: "b", text: "local", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une pincée de sel", options: [{ id: "a", text: "Bir tutam tuz", correct: true }, { id: "b", text: "Bir kaşık tuz", correct: false }, { id: "c", text: "Bir paket tuz", correct: false }, { id: "d", text: "Bir kilo tuz", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut ___ les ingrédients.", options: [{ id: "a", text: "peser", correct: true }, { id: "b", text: "pesé", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Fırın kapağını açma", correctAnswer: "N'ouvre pas la porte du four" },

    // ZOR (5 Soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Yemeği yaktım", correctAnswer: "J'ai brûlé le repas" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Bu tarif çok kolay", correctAnswer: "Cette recette est très facile" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai besoin d'un ___ de cuisine.", options: [{ id: "a", text: "robot", correct: true }, { id: "b", text: "machine", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Malzemeler taze olmalı", correctAnswer: "Les ingrédients doivent être frais" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Aşçılık kursuna gidiyorum", correctAnswer: "Je prends des cours de cuisine" }
];

// Üniteler 341-360

// UNIT 341: Karşılaştırmalar (Comparisons)
const unit341Quiz1: Question[] = [
    // KOLAY (8 Soru) - Temel Yapılar
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Daha pahalı", correctAnswer: "Plus cher" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ cher que l'autre.", options: [{ id: "a", text: "moins", correct: true }, { id: "b", text: "plus de", correct: false }] },
    { id: 3, type: "SELECT", question: "'Aussi grand que' ne demek?", options: [{ id: "a", text: "Kadar büyük", correct: true }, { id: "b", text: "Daha büyük", correct: false }, { id: "c", text: "Daha az büyük", correct: false }, { id: "d", text: "En büyük", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est plus ___ que toi.", options: [{ id: "a", text: "rapide", correct: true }, { id: "b", text: "rapidement", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Daha az güzel", correctAnswer: "Moins beau" },
    { id: 6, type: "SELECT", question: "'Plus intelligent' ne demek?", options: [{ id: "a", text: "Daha zeki", correct: true }, { id: "b", text: "Daha az zeki", correct: false }, { id: "c", text: "Zeki kadar", correct: false }, { id: "d", text: "En zeki", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle est ___ gentille que sa sœur.", options: [{ id: "a", text: "aussi", correct: true }, { id: "b", text: "autant", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Benim kadar", correctAnswer: "Aussi que moi" }
];

const unit341Quiz2: Question[] = [
    // ORTA (7 Soru) - Karşılaştırma Cümleleri
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce livre est ___ que le film.", options: [{ id: "a", text: "meilleur", correct: true }, { id: "b", text: "bon", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Pierre, Marie'den daha uzun", correctAnswer: "Pierre est plus grand que Marie" },
    { id: 11, type: "SELECT", question: "Hangi cümle doğru?", options: [{ id: "a", text: "Elle chante mieux que moi.", correct: true }, { id: "b", text: "Elle chante bon que moi.", correct: false }, { id: "c", text: "Elle chante meilleur que moi.", correct: false }, { id: "d", text: "Elle chante bien que moi.", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il travaille ___ toi.", options: [{ id: "a", text: "plus que", correct: true }, { id: "b", text: "plus de", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Daha iyi şarkı söylüyorlar", correctAnswer: "Ils chantent mieux" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ intéressant.", options: [{ id: "a", text: "moins", correct: true }, { id: "b", text: "moindre", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Daha az çalışıyorsun", correctAnswer: "Tu travailles moins" }
];

const unit341Quiz3: Question[] = [
    // ZOR (5 Soru) - Bon/Meilleur & Bien/Mieux
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bu pasta diğerinden daha iyi", correctAnswer: "Ce gâteau est meilleur que l'autre" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Je me sens ___ aujourd'hui.", options: [{ id: "a", text: "mieux", correct: true }, { id: "b", text: "meilleur", correct: false }] },
    { id: 18, type: "SELECT", question: "'Pire' ne demek?", options: [{ id: "a", text: "Daha kötü", correct: true }, { id: "b", text: "Daha iyi", correct: false }, { id: "c", text: "Kötü", correct: false }, { id: "d", text: "En kötü", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Durum dünden daha kötü", correctAnswer: "La situation est pire qu'hier" },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu cuisines ___ que ton frère.", options: [{ id: "a", text: "bien mieux", correct: true }, { id: "b", text: "bon mieux", correct: false }] }
];

const unit341Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'Plus vite' ne demek?", options: [{ id: "a", text: "Daha hızlı", correct: true }, { id: "b", text: "Daha yavaş", correct: false }, { id: "c", text: "Hızlıca", correct: false }, { id: "d", text: "En hızlı", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Ton vélo est ___ lourd que le mien.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "le plus", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "O benden daha yaşlı", correctAnswer: "Il est plus âgé que moi" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ cher ici.", options: [{ id: "a", text: "aussi", correct: true }, { id: "b", text: "aussi que", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Daha iyi anlıyorum", correctAnswer: "Je comprends mieux" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est moins loin", options: [{ id: "a", text: "Daha az uzak", correct: true }, { id: "b", text: "Daha uzak", correct: false }, { id: "c", text: "Çok uzak", correct: false }, { id: "d", text: "En uzak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Autant de' ne için kullanılır?", options: [{ id: "a", text: "Miktar karşılaştırması", correct: true }, { id: "b", text: "Sıfat karşılaştırması", correct: false }, { id: "c", text: "Zarf karşılaştırması", correct: false }, { id: "d", text: "Fiil çekimi", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Il a ___ livres que moi.", options: [{ id: "a", text: "autant de", correct: true }, { id: "b", text: "aussi de", correct: false }] }
];

// UNIT 342: İşaret Sıfatları (Demonstrative Adjectives)
const unit342Quiz1: Question[] = [
    // KOLAY (8 Soru) - Ce, Cet, Cette, Ces
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Bu elbise", correctAnswer: "Cette robe" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "___ pantalon est beau.", options: [{ id: "a", text: "Ce", correct: true }, { id: "b", text: "Cette", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "___ homme est gentil.", options: [{ id: "a", text: "Cet", correct: true }, { id: "b", text: "Ce", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "___ femmes sont intelligentes.", options: [{ id: "a", text: "Ces", correct: true }, { id: "b", text: "Cettes", correct: false }] },
    { id: 5, type: "SELECT", question: "'Ce livre' ne demek?", options: [{ id: "a", text: "Bu kitap", correct: true }, { id: "b", text: "Şu kitaplar", correct: false }, { id: "c", text: "Hangi kitap", correct: false }, { id: "d", text: "Bir kitap", correct: false }] },
    { id: 6, type: "SELECT", question: "'Ces enfants' ne demek?", options: [{ id: "a", text: "Bu çocuklar", correct: true }, { id: "b", text: "Çocuk", correct: false }, { id: "c", text: "Bizim çocuklar", correct: false }, { id: "d", text: "O çocuk", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Regarde ___ animal.", options: [{ id: "a", text: "cet", correct: true }, { id: "b", text: "ce", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Bu ev", correctAnswer: "Cette maison" }
];

const unit342Quiz2: Question[] = [
    // ORTA (7 Soru) - Cinsiyet ve Sesli Harf
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime bien ___ acteur.", options: [{ id: "a", text: "cet", correct: true }, { id: "b", text: "cette", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bu ağaç çok yaşlı", correctAnswer: "Cet arbre est très vieux" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "___ amie est sympa.", options: [{ id: "a", text: "Cette", correct: true }, { id: "b", text: "Cet", correct: false }] },
    { id: 12, type: "SELECT", question: "Hangisi doğru?", options: [{ id: "a", text: "Cet hôtel", correct: true }, { id: "b", text: "Ce hôtel", correct: false }, { id: "c", text: "Cette hôtel", correct: false }, { id: "d", text: "Ces hôtel", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Je prends ___ chaussures.", options: [{ id: "a", text: "ces", correct: true }, { id: "b", text: "ses", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Bu fikir ilginç", correctAnswer: "Cette idée est intéressante" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "___ problème est difficile.", options: [{ id: "a", text: "Ce", correct: true }, { id: "b", text: "Cet", correct: false }] }
];

const unit342Quiz3: Question[] = [
    // ZOR (5 Soru) - -ci ve -là
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bu günlerde", correctAnswer: "Ces jours-ci" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Je préfère cette robe-___.", options: [{ id: "a", text: "là", correct: true }, { id: "b", text: "ci", correct: false }] },
    { id: 18, type: "SELECT", question: "'Ce matin-là' ne demek?", options: [{ id: "a", text: "O sabah (geçmişte)", correct: true }, { id: "b", text: "Bu sabah (bugün)", correct: false }, { id: "c", text: "Yarın sabah", correct: false }, { id: "d", text: "Her sabah", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Şu adam (uzaktaki)", correctAnswer: "Cet homme-là" },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Prends ce crayon-___.", options: [{ id: "a", text: "ci", correct: true }, { id: "b", text: "la", correct: false }] }
];

const unit342Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'Cet étudiant' ne demek?", options: [{ id: "a", text: "Bu öğrenci (erkek)", correct: true }, { id: "b", text: "Bu öğrenci (kadın)", correct: false }, { id: "c", text: "Öğrenciler", correct: false }, { id: "d", text: "Bir öğrenci", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Regardez ___ photos.", options: [{ id: "a", text: "ces", correct: true }, { id: "b", text: "ses", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Bu bilgisayar çalışmıyor", correctAnswer: "Ce sordinateur ne marche pas" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "___ histoire est vraie.", options: [{ id: "a", text: "Cette", correct: true }, { id: "b", text: "Cet", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Bu kuş", correctAnswer: "Cet oiseau" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ce soir", options: [{ id: "a", text: "Bu akşam", correct: true }, { id: "b", text: "O akşam", correct: false }, { id: "c", text: "Dün akşam", correct: false }, { id: "d", text: "Yarın akşam", correct: false }] },
    { id: 7, type: "SELECT", question: "Hangisi yanlış?", options: [{ id: "a", text: "Ce amie", correct: true }, { id: "b", text: "Cet ami", correct: false }, { id: "c", text: "Cette amie", correct: false }, { id: "d", text: "Ces amis", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime ___ couleurs.", options: [{ id: "a", text: "ces", correct: true }, { id: "b", text: "ce", correct: false }] }
];

// UNIT 343: Yakın Geçmiş (Recent Past - Venir de)
const unit343Quiz1: Question[] = [
    // KOLAY (8 Soru) - Venir de + Infinitif
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Az önce yedim", correctAnswer: "Je viens de manger" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ de partir.", options: [{ id: "a", text: "vient", correct: true }, { id: "b", text: "va", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ d'arriver.", options: [{ id: "a", text: "venons", correct: true }, { id: "b", text: "allons", correct: false }] },
    { id: 4, type: "SELECT", question: "'Tu viens de finir?' ne demek?", options: [{ id: "a", text: "Az önce mi bitirdin?", correct: true }, { id: "b", text: "Bitirecek misin?", correct: false }, { id: "c", text: "Bitiriyor musun?", correct: false }, { id: "d", text: "Bitirmek ister misin?", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Az önce aradılar", correctAnswer: "Ils viennent d'appeler" },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Elles viennent ___ sortir.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "à", correct: false }] },
    { id: 7, type: "SELECT", question: "'Je viens de me réveiller' ne demek?", options: [{ id: "a", text: "Az önce uyandım", correct: true }, { id: "b", text: "Şimdi uyanıyorum", correct: false }, { id: "c", text: "Uyanacağım", correct: false }, { id: "d", text: "Uyanmak üzereyim", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Az önce gördüm", correctAnswer: "Je viens de voir" }
];

const unit343Quiz2: Question[] = [
    // ORTA (7 Soru) - Çekimler ve Yapı
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ de comprendre.", options: [{ id: "a", text: "venez", correct: true }, { id: "b", text: "venons", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Tren az önce kalktı", correctAnswer: "Le train vient de partir" },
    { id: 11, type: "SELECT", question: "Hangisi 'Yakın Geçmiş'?", options: [{ id: "a", text: "Je viens de parler", correct: true }, { id: "b", text: "J'ai parlé", correct: false }, { id: "c", text: "Je vais parler", correct: false }, { id: "d", text: "Je parle", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "On ___ de rentrer.", options: [{ id: "a", text: "vient", correct: true }, { id: "b", text: "viennent", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Az önce bitirdik", correctAnswer: "Nous venons de finir" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ de le dire.", options: [{ id: "a", text: "viens", correct: true }, { id: "b", text: "vient", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Mektup az önce geldi", correctAnswer: "La lettre vient d'arriver" }
];

const unit343Quiz3: Question[] = [
    // ZOR (5 Soru) - Dönüşlü Fiiller ve Zamirler
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Az önce yıkandım", correctAnswer: "Je viens de me laver" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle vient de ___ lever.", options: [{ id: "a", text: "se", correct: true }, { id: "b", text: "me", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous venons de ___ rencontrer.", options: [{ id: "a", text: "nous", correct: true }, { id: "b", text: "vous", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Onu az önce yaptım", correctAnswer: "Je viens de le faire" },
    { id: 20, type: "SELECT", question: "Doğru sıralama hangisi?", options: [{ id: "a", text: "Je viens de l'acheter", correct: true }, { id: "b", text: "Je viens l'acheter de", correct: false }, { id: "c", text: "Je le viens d'acheter", correct: false }, { id: "d", text: "Je viens de acheter le", correct: false }] }
];

const unit343Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'Le film vient de commencer' ne demek?", options: [{ id: "a", text: "Film az önce başladı", correct: true }, { id: "b", text: "Film başlıyor", correct: false }, { id: "c", text: "Film başlayacak", correct: false }, { id: "d", text: "Film bitti", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ de gagner.", options: [{ id: "a", text: "viennent", correct: true }, { id: "b", text: "venez", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Az önce kahve içtim", correctAnswer: "Je viens de boire du café" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ de lire ce livre?", options: [{ id: "a", text: "venez", correct: true }, { id: "b", text: "allez", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Bebek az önce uyudu", correctAnswer: "Le bébé vient de s'endormir" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "On vient de partir", options: [{ id: "a", text: "Az önce çıktık", correct: true }, { id: "b", text: "Çıkıyoruz", correct: false }, { id: "c", text: "Çıkacağız", correct: false }, { id: "d", text: "Çıkmak istiyoruz", correct: false }] },
    { id: 7, type: "SELECT", question: "Hangi fiil kullanılır?", options: [{ id: "a", text: "Venir + de", correct: true }, { id: "b", text: "Aller + de", correct: false }, { id: "c", text: "Être + de", correct: false }, { id: "d", text: "Avoir + de", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Je viens ___ faire.", options: [{ id: "a", text: "de le", correct: true }, { id: "b", text: "du", correct: false }] }
];

// UNIT 344: İmparfait vs Geçmiş Zaman (Imparfait vs Passé Composé)
const unit344Quiz1: Question[] = [
    // KOLAY (8 Soru) - İmparfait Çekimleri
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Gençken", correctAnswer: "Quand j'étais jeune" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ beau hier.", options: [{ id: "a", text: "faisait", correct: true }, { id: "b", text: "fait", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ 10 ans.", options: [{ id: "a", text: "avais", correct: true }, { id: "b", text: "ai", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ à la plage chaque été.", options: [{ id: "a", text: "allions", correct: true }, { id: "b", text: "sommes allés", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Eskiden", correctAnswer: "Autrefois" },
    { id: 6, type: "SELECT", question: "'Je voulais' ne demek?", options: [{ id: "a", text: "İstiyordum", correct: true }, { id: "b", text: "İstedim", correct: false }, { id: "c", text: "İsterim", correct: false }, { id: "d", text: "İsteyeceğim", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ toujours content.", options: [{ id: "a", text: "étais", correct: true }, { id: "b", text: "as été", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Yağmur yağıyordu", correctAnswer: "Il pleuvait" }
];

const unit344Quiz2: Question[] = [
    // ORTA (7 Soru) - PC vs İmparfait Seçimi
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Pendant que je dormais, tu ___.", options: [{ id: "a", text: "es arrivé", correct: true }, { id: "b", text: "arrivais", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Televizyon izliyordum", correctAnswer: "Je regardais la télé" },
    { id: 11, type: "SELECT", question: "Hangisi 'betimleme' (description) için kullanılır?", options: [{ id: "a", text: "Imparfait", correct: true }, { id: "b", text: "Passé Composé", correct: false }, { id: "c", text: "Futur", correct: false }, { id: "d", text: "Présent", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Soudain, le téléphone ___.", options: [{ id: "a", text: "a sonné", correct: true }, { id: "b", text: "sonnait", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Her pazar giderdik", correctAnswer: "Nous allions chaque dimanche" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ froid ce jour-là.", options: [{ id: "a", text: "faisait", correct: true }, { id: "b", text: "a fait", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Aniden düştü", correctAnswer: "Soudain il est tombé" }
];

const unit344Quiz3: Question[] = [
    // ZOR (5 Soru) - Karışık Hikaye
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Yemek yapıyordum", correctAnswer: "Je faisais la cuisine" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Quand je l'ai vu, il ___ un livre.", options: [{ id: "a", text: "lisait", correct: true }, { id: "b", text: "a lu", correct: false }] },
    { id: 18, type: "SELECT", question: "Hangisi 'tamamlanmış eylem'?", options: [{ id: "a", text: "J'ai fini", correct: true }, { id: "b", text: "Je finissais", correct: false }, { id: "c", text: "Je finis", correct: false }, { id: "d", text: "Je vais finir", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Dışarıdayken başladı", correctAnswer: "Ça a commencé quand j'étais dehors" },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ triste parce qu'elle avait perdu.", options: [{ id: "a", text: "était", correct: true }, { id: "b", text: "a été", correct: false }] }
];

const unit344Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'C'était super' ne demek?", options: [{ id: "a", text: "Harikaydı", correct: true }, { id: "b", text: "Harika", correct: false }, { id: "c", text: "Harika olacak", correct: false }, { id: "d", text: "Harika oldu", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Avant, j'___ à Paris.", options: [{ id: "a", text: "habitais", correct: true }, { id: "b", text: "habité", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Çok yorgundum", correctAnswer: "J'étais très fatigué" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Tout à coup, un chien ___.", options: [{ id: "a", text: "est sorti", correct: true }, { id: "b", text: "sortait", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Kar yağıyordu ve soğuktu", correctAnswer: "Il neigeait et il faisait froid" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quand j'étudiais", options: [{ id: "a", text: "Ben ders çalışırken", correct: true }, { id: "b", text: "Ben ders çalışacağım", correct: false }, { id: "c", text: "Ben ders çalıştım", correct: false }, { id: "d", text: "Ben ders çalışıyorum", correct: false }] },
    { id: 7, type: "SELECT", question: "'Il a bu un café' hangi zaman?", options: [{ id: "a", text: "Passé Composé", correct: true }, { id: "b", text: "Imparfait", correct: false }, { id: "c", text: "Présent", correct: false }, { id: "d", text: "Futur", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ le train tous les matins.", options: [{ id: "a", text: "prenions", correct: true }, { id: "b", text: "avons pris", correct: false }] }
];

// UNIT 345: İlgi Zamirleri (Qui/Que) (Relative Pronouns)
const unit345Quiz1: Question[] = [
    // KOLAY (8 Soru) - Qui ve Que Ayrımı
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "İzlediğim film", correctAnswer: "Le film que je regarde" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un programme ___ est populaire.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "L'homme ___ parle.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Le livre ___ tu lis.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 5, type: "SELECT", question: "'Qui' neyin yerini tutar?", options: [{ id: "a", text: "Özne (Subject)", correct: true }, { id: "b", text: "Nesne (Object)", correct: false }, { id: "c", text: "Yer", correct: false }, { id: "d", text: "Zaman", correct: false }] },
    { id: 6, type: "SELECT", question: "'Que' neyin yerini tutar?", options: [{ id: "a", text: "Nesne (Object)", correct: true }, { id: "b", text: "Özne (Subject)", correct: false }, { id: "c", text: "Yer", correct: false }, { id: "d", text: "Zaman", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime les gens ___ sont gentils.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Yediğim elma", correctAnswer: "La pomme que je mange" }
];

const unit345Quiz2: Question[] = [
    // ORTA (7 Soru) - Birleştirme
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la voiture ___ j'ai achetée.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Beni güldüren arkadaş", correctAnswer: "L'ami qui me fait rire" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "La maison ___ est là-bas.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 12, type: "SELECT", question: "Doğru cümle hangisi?", options: [{ id: "a", text: "Le chien qui aboie", correct: true }, { id: "b", text: "Le chien que aboie", correct: false }, { id: "c", text: "Le chien qui j'aboie", correct: false }, { id: "d", text: "Chien qui aboie", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Sevdiğim şarkı", correctAnswer: "La chanson que j'aime" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est toi ___ as gagné?", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Burada çalışan kadın", correctAnswer: "La femme qui travaille ici" }
];

const unit345Quiz3: Question[] = [
    // ZOR (5 Soru) - Sesli harf çakışması (Qu')
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Ona verdiğim hediye", correctAnswer: "Le cadeau que je lui ai donné" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "La fille ___ habite ici.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "qu'", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce ___ il dit est vrai.", options: [{ id: "a", text: "qu'", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Seni bekleyen kişi", correctAnswer: "La personne qui t'attend" },
    { id: 20, type: "SELECT", question: "Hangi durumda 'Que' -> 'Qu'' olur?", options: [{ id: "a", text: "Sesli harften önce", correct: true }, { id: "b", text: "Sessiz harften önce", correct: false }, { id: "c", text: "Her zaman", correct: false }, { id: "d", text: "Asla", correct: false }] }
];

const unit345Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'L'étudiant que je vois' cümlesindeki 'que' neyin yerine geçer?", options: [{ id: "a", text: "L'étudiant", correct: true }, { id: "b", text: "Je", correct: false }, { id: "c", text: "Vois", correct: false }, { id: "d", text: "Okul", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un acteur ___ joue bien.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Gördüğün adam", correctAnswer: "L'homme que tu vois" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "La lettre ___ est arrivée.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Yaptığım kek", correctAnswer: "Le gâteau que j'ai fait" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est lui qui a fait ça", options: [{ id: "a", text: "Bunu yapan o", correct: true }, { id: "b", text: "Bunu ona yaptım", correct: false }, { id: "c", text: "Bunu o yaptı", correct: false }, { id: "d", text: "Bunu biz yaptık", correct: false }] },
    { id: 7, type: "SELECT", question: "'Qui' den sonra ne gelir?", options: [{ id: "a", text: "Fiil", correct: true }, { id: "b", text: "Özne", correct: false }, { id: "c", text: "Sıfat", correct: false }, { id: "d", text: "Zarf", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Les photos ___ tu as prises.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] }
];

// UNIT 346: Üstünlük Derecesi (Superlatives)
const unit346Quiz1: Question[] = [
    // KOLAY (8 Soru) - Le plus / Le moins
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "En iyi film", correctAnswer: "Le meilleur film" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ plus intéressant.", options: [{ id: "a", text: "le", correct: true }, { id: "b", text: "la", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la ___ belle ville.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "plus de", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est le ___ grand.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "mieux", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "En pahalı", correctAnswer: "Le plus cher" },
    { id: 6, type: "SELECT", question: "'Le moins cher' ne demek?", options: [{ id: "a", text: "En ucuz / En az pahalı", correct: true }, { id: "b", text: "Pahalı", correct: false }, { id: "c", text: "Daha pahalı", correct: false }, { id: "d", text: "Çok pahalı", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "La voiture la ___ rapide.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "le", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Dünyanın en güzeli", correctAnswer: "La plus belle du monde" }
];

const unit346Quiz2: Question[] = [
    // ORTA (7 Soru) - Le meilleur / Le pire
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est mon ___ ami.", options: [{ id: "a", text: "meilleur", correct: true }, { id: "b", text: "mieux", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "En iyi oyuncu", correctAnswer: "Le meilleur joueur" },
    { id: 11, type: "SELECT", question: "'La pire situation' ne demek?", options: [{ id: "a", text: "En kötü durum", correct: true }, { id: "b", text: "En iyi durum", correct: false }, { id: "c", text: "Kötü bir durum", correct: false }, { id: "d", text: "İyi bir durum", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il chante le ___.", options: [{ id: "a", text: "mieux", correct: true }, { id: "b", text: "meilleur", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "En kötü gün", correctAnswer: "Le pire jour" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la ___ chose.", options: [{ id: "a", text: "meilleure", correct: true }, { id: "b", text: "mieux", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "En az yorgun", correctAnswer: "Le moins fatigué" }
];

const unit346Quiz3: Question[] = [
    // ZOR (5 Soru) - Bağlam ve Yerleşim
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Sınıfın en zekisi", correctAnswer: "Le plus intelligent de la classe" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est l'homme ___ riche du monde.", options: [{ id: "a", text: "le plus", correct: true }, { id: "b", text: "plus", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Les jours les ___ longs.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "le plus", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "En çok sevdiğim", correctAnswer: "Ce que j'aime le plus" },
    { id: 20, type: "SELECT", question: "'Le plus souvent' ne demek?", options: [{ id: "a", text: "En sık / Çoğu zaman", correct: true }, { id: "b", text: "Nadiren", correct: false }, { id: "c", text: "Bazen", correct: false }, { id: "d", text: "Asla", correct: false }] }
];

const unit346Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'Le plus grand pays' ne demek?", options: [{ id: "a", text: "En büyük ülke", correct: true }, { id: "b", text: "Büyük ülke", correct: false }, { id: "c", text: "Daha büyük ülke", correct: false }, { id: "d", text: "Küçük ülke", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la ___ solution.", options: [{ id: "a", text: "meilleure", correct: true }, { id: "b", text: "mieux", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Bu en kolayı", correctAnswer: "C'est le plus facile" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "L'animal le plus ___.", options: [{ id: "a", text: "dangereux", correct: true }, { id: "b", text: "danger", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "En az önemli", correctAnswer: "Le moins important" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le monde entier", options: [{ id: "a", text: "Tüm dünya", correct: true }, { id: "b", text: "Dünyanın yarısı", correct: false }, { id: "c", text: "Dünya", correct: false }, { id: "d", text: "Ülkeler", correct: false }] },
    { id: 7, type: "SELECT", question: "Hangisi 'Süperlatif' yapısıdır?", options: [{ id: "a", text: "Le plus + Adjectif", correct: true }, { id: "b", text: "Plus + Adjectif", correct: false }, { id: "c", text: "Très + Adjectif", correct: false }, { id: "d", text: "Moins + Adjectif", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ce qui compte le ___.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "mieux", correct: false }] }
];

// UNIT 347: Zaman İfadeleri (Depuis, Pendant, Pour)
const unit347Quiz1: Question[] = [
    // KOLAY (8 Soru) - Depuis
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "10 yıldır", correctAnswer: "Depuis 10 ans" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "J'écoute du jazz ___ mon enfance.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pendant", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Il vit ici ___ 2010.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 4, type: "SELECT", question: "'Depuis quand?' ne demek?", options: [{ id: "a", text: "Ne zamandan beri?", correct: true }, { id: "b", text: "Ne kadar süre?", correct: false }, { id: "c", text: "Ne zaman?", correct: false }, { id: "d", text: "Hangi gün?", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Je t'attends ___ une heure.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pendant", correct: false }] },
    { id: 6, type: "TRANSLATE", question: "Çevir:", hint: "Sabahtan beri", correctAnswer: "Depuis ce matin" },
    { id: 7, type: "SELECT", question: "Hangi zamanda 'Depuis' kullanılır?", options: [{ id: "a", text: "Present (Şimdiki/Geniş)", correct: true }, { id: "b", text: "Passé Composé", correct: false }, { id: "c", text: "Futur", correct: false }, { id: "d", text: "Imperatif", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Uzun zamandır", correctAnswer: "Depuis longtemps" }
];

const unit347Quiz2: Question[] = [
    // ORTA (7 Soru) - Pendant vs Pour
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai dormi ___ 8 heures.", options: [{ id: "a", text: "pendant", correct: true }, { id: "b", text: "depuis", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "İki günlüğüne gidiyorum", correctAnswer: "Je pars pour deux jours" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Il a habité à Paris ___ 5 ans.", options: [{ id: "a", text: "pendant", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 12, type: "SELECT", question: "'Pour' ne zaman kullanılır?", options: [{ id: "a", text: "Gelecekte planlanan süre için", correct: true }, { id: "b", text: "Geçmişte bitmiş süre için", correct: false }, { id: "c", text: "Hala devam eden süre için", correct: false }, { id: "d", text: "Hiçbiri", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "___ les vacances, j'ai lu beaucoup.", options: [{ id: "a", text: "Pendant", correct: true }, { id: "b", text: "Depuis", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Akşam yemeği sırasında", correctAnswer: "Pendant le dîner" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ la vie.", options: [{ id: "a", text: "pour", correct: true }, { id: "b", text: "pendant", correct: false }] }
];

const unit347Quiz3: Question[] = [
    // ZOR (5 Soru) - Karışık Zamanlar
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Ne zamandır buradasın?", correctAnswer: "Depuis combien de temps es-tu ici?" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Il va travailler ___ trois semaines.", options: [{ id: "a", text: "pendant", correct: true }, { id: "b", text: "depuis", correct: false }] },
    { id: 18, type: "SELECT", question: "Hangisi doğru?", options: [{ id: "a", text: "Je suis ici depuis lundi", correct: true }, { id: "b", text: "Je suis ici pendant lundi", correct: false }, { id: "c", text: "Je suis ici pour lundi", correct: false }, { id: "d", text: "J'étais ici depuis lundi", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Yolculuk boyunca uyudu", correctAnswer: "Il a dormi pendant le voyage" },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai loué cette maison ___ un an.", options: [{ id: "a", text: "pour", correct: true }, { id: "b", text: "depuis", correct: false }] }
];

const unit347Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'Il y a 2 ans' ne demek?", options: [{ id: "a", text: "2 yıl önce", correct: true }, { id: "b", text: "2 yıldır", correct: false }, { id: "c", text: "2 yıl boyunca", correct: false }, { id: "d", text: "2 yıl için", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "On se connaît ___ longtemps.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pendant", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Bir haftalığına", correctAnswer: "Pour une semaine" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "___ la nuit, il a neigé.", options: [{ id: "a", text: "Pendant", correct: true }, { id: "b", text: "Depuis", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Dünden beri hastayım", correctAnswer: "Je suis malade depuis hier" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Pour toujours", options: [{ id: "a", text: "Sonsuza dek", correct: true }, { id: "b", text: "Bir günlüğüne", correct: false }, { id: "c", text: "Bazen", correct: false }, { id: "d", text: "Asla", correct: false }] },
    { id: 7, type: "SELECT", question: "'Dans 10 minutes' ne demek?", options: [{ id: "a", text: "10 dakika içinde (sonra)", correct: true }, { id: "b", text: "10 dakika önce", correct: false }, { id: "c", text: "10 dakika boyunca", correct: false }, { id: "d", text: "10 dakikadır", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Je pars ___ deux mois.", options: [{ id: "a", text: "dans", correct: true }, { id: "b", text: "depuis", correct: false }] }
];

// UNIT 348: Spor ve Hobiler (Faire de / Jouer à)
const unit348Quiz1: Question[] = [
    // KOLAY (8 Soru) - Jouer vs Faire
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Futbol oynuyorum", correctAnswer: "Je joue au football" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Je fais ___ natation.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Il joue ___ tennis.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 4, type: "SELECT", question: "'Faire du vélo' ne demek?", options: [{ id: "a", text: "Bisiklete binmek", correct: true }, { id: "b", text: "Bisiklet oynamak", correct: false }, { id: "c", text: "Bisiklet satmak", correct: false }, { id: "d", text: "Bisiklet izlemek", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle fait ___ danse.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "à la", correct: false }] },
    { id: 6, type: "TRANSLATE", question: "Çevir:", hint: "Piyano çalıyorum", correctAnswer: "Je joue du piano" },
    { id: 7, type: "SELECT", question: "'Jouer aux échecs' ne demek?", options: [{ id: "a", text: "Satranç oynamak", correct: true }, { id: "b", text: "Kart oynamak", correct: false }, { id: "c", text: "Video oyunu oynamak", correct: false }, { id: "d", text: "Dama oynamak", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous faisons ___ sport.", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "au", correct: false }] }
];

const unit348Quiz2: Question[] = [
    // ORTA (7 Soru) - Edatlar (au, aux, du, de la)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu joues ___ cartes?", options: [{ id: "a", text: "aux", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Gitar çalıyor", correctAnswer: "Il joue de la guitare" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils font ___ randonnée.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 12, type: "SELECT", question: "Hangi fiil kullanılır? (Basketbol)", options: [{ id: "a", text: "Jouer au", correct: true }, { id: "b", text: "Faire du", correct: false }, { id: "c", text: "Aller au", correct: false }, { id: "d", text: "Manger du", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous faites ___ ski.", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Video oyunları oynarız", correctAnswer: "Nous jouons aux jeux vidéo" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ne fais pas ___ sport.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "du", correct: false }] }
];

const unit348Quiz3: Question[] = [
    // ZOR (5 Soru) - Müzik aletleri ve Negatiflik
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Piyano çalmıyorum", correctAnswer: "Je ne joue pas de piano" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle joue ___ violon.", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 18, type: "SELECT", question: "Müzik aletleri ile hangi edat kullanılır?", options: [{ id: "a", text: "De / Du / De la", correct: true }, { id: "b", text: "À / Au / À la", correct: false }, { id: "c", text: "Le / La", correct: false }, { id: "d", text: "En", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Hiç spor yapmam", correctAnswer: "Je ne fais jamais de sport" },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous jouons ___ batterie.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "à la", correct: false }] }
];

const unit348Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'L'équipe' ne demek?", options: [{ id: "a", text: "Takım", correct: true }, { id: "b", text: "Maç", correct: false }, { id: "c", text: "Oyuncu", correct: false }, { id: "d", text: "Hakem", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime ___ au foot.", options: [{ id: "a", text: "jouer", correct: true }, { id: "b", text: "faire", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Yüzmeyi seviyorum", correctAnswer: "J'aime nager" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un ___ match.", options: [{ id: "a", text: "bon", correct: true }, { id: "b", text: "bien", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Hafta sonu koşarım", correctAnswer: "Je cours le week-end" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Gagner le match", options: [{ id: "a", text: "Maçı kazanmak", correct: true }, { id: "b", text: "Maçı kaybetmek", correct: false }, { id: "c", text: "Maçı izlemek", correct: false }, { id: "d", text: "Maçı bitirmek", correct: false }] },
    { id: 7, type: "SELECT", question: "'Perdre' ne demek?", options: [{ id: "a", text: "Kaybetmek", correct: true }, { id: "b", text: "Kazanmak", correct: false }, { id: "c", text: "Oynamak", correct: false }, { id: "d", text: "Bulmak", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Le joueur a marqué un ___.", options: [{ id: "a", text: "but", correct: true }, { id: "b", text: "ballon", correct: false }] }
];

// UNIT 349: Zamirler (Y ve En)
const unit349Quiz1: Question[] = [
    // KOLAY (8 Soru) - Y
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Oraya gidiyorum", correctAnswer: "J'y vais" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu vas à Paris? Oui, j'___ vais.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "en", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ habite.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "en", correct: false }] },
    { id: 4, type: "SELECT", question: "'Y' zamiri neyi karşılar?", options: [{ id: "a", text: "Yer (à + yer)", correct: true }, { id: "b", text: "Miktar (de + miktar)", correct: false }, { id: "c", text: "Kişi", correct: false }, { id: "d", text: "Özne", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle pense à son examen? Oui, elle ___ pense.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "en", correct: false }] },
    { id: 6, type: "TRANSLATE", question: "Çevir:", hint: "Oraya gitme", correctAnswer: "N'y va pas" },
    { id: 7, type: "SELECT", question: "'On y va!' ne demek?", options: [{ id: "a", text: "Hadi gidelim!", correct: true }, { id: "b", text: "Gitmiyoruz", correct: false }, { id: "c", text: "Geldik", correct: false }, { id: "d", text: "O gitti", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ sommes.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "en", correct: false }] }
];

const unit349Quiz2: Question[] = [
    // ORTA (7 Soru) - En
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu veux du pain? Oui, j'___ veux.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Ondan korkuyor", correctAnswer: "Il en a peur" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "La montagne? J'___ reviens.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] },
    { id: 12, type: "SELECT", question: "'En' zamiri neyi karşılar?", options: [{ id: "a", text: "Miktar (de...) / Yer (de...)", correct: true }, { id: "b", text: "Yer (à...)", correct: false }, { id: "c", text: "Kişi (à...)", correct: false }, { id: "d", text: "Özne", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Combien de pommes as-tu? J'___ ai trois.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Onun hakkında konuşuyoruz", correctAnswer: "Nous en parlons" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ mange beaucoup.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] }
];

const unit349Quiz3: Question[] = [
    // ZOR (5 Soru) - Y vs En Ayrımı
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Oraya koy", correctAnswer: "Mets-le y (Mets-y-le)" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu viens de Paris? Oui, j'___ viens.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu vas à Paris? Oui, j'___ vais.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "en", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Hiç yok", correctAnswer: "Il n'y en a pas" },
    { id: 20, type: "SELECT", question: "Hangisi doğru?", options: [{ id: "a", text: "Il y en a trois", correct: true }, { id: "b", text: "Il en y a trois", correct: false }, { id: "c", text: "Il y a en trois", correct: false }, { id: "d", text: "y en a trois", correct: false }] }
];

const unit349Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'Vas-y!' ne demek?", options: [{ id: "a", text: "Git! / Başla!", correct: true }, { id: "b", text: "Dur!", correct: false }, { id: "c", text: "Gel!", correct: false }, { id: "d", text: "Bekle!", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai besoin de temps. J'___ ai besoin.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "İlgileniyorum (ona)", correctAnswer: "Je m'y intéresse" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Du café? Il n'y ___ a plus.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Orada mısın?", correctAnswer: "Es-tu là? / Y es-tu?" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'en suis sûr", options: [{ id: "a", text: "Ondan eminim", correct: true }, { id: "b", text: "Oraya eminim", correct: false }, { id: "c", text: "Eminim", correct: false }, { id: "d", text: "Bilmiyorum", correct: false }] },
    { id: 7, type: "SELECT", question: "Hangisi yer belirtir?", options: [{ id: "a", text: "Y", correct: true }, { id: "b", text: "En", correct: false }, { id: "c", text: "Le", correct: false }, { id: "d", text: "Lui", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Ne t'___ fais pas.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] }
];

// UNIT 350: Öneri ve Tavsiyeler (Suggestions)
const unit350Quiz1: Question[] = [
    // KOLAY (8 Soru) - Öneri Kalıpları
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "İster misin?", correctAnswer: "Ça te dit?" },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "On ___ aller au cinéma?", options: [{ id: "a", text: "pourrait", correct: true }, { id: "b", text: "peut", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Si on ___ au restaurant?", options: [{ id: "a", text: "allait", correct: true }, { id: "b", text: "va", correct: false }] },
    { id: 4, type: "SELECT", question: "'Pourquoi pas?' ne demek?", options: [{ id: "a", text: "Neden olmasın?", correct: true }, { id: "b", text: "Neden?", correct: false }, { id: "c", text: "Hayır", correct: false }, { id: "d", text: "Belki", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ venir?", options: [{ id: "a", text: "veux", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 6, type: "TRANSLATE", question: "Çevir:", hint: "İyi fikir", correctAnswer: "Bonne idée" },
    { id: 7, type: "SELECT", question: "'Non, je ne peux pas' ne demek?", options: [{ id: "a", text: "Hayır, yapamam/gelemem", correct: true }, { id: "b", text: "Hayır, istemiyorum", correct: false }, { id: "c", text: "Evet, gelirim", correct: false }, { id: "d", text: "Belki", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Memnuniyetle", correctAnswer: "Avec plaisir" }
];

const unit350Quiz2: Question[] = [
    // ORTA (7 Soru) - Kibar Red ve Kabul
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est gentil, mais ___.", options: [{ id: "a", text: "je ne peux pas", correct: true }, { id: "b", text: "je veux", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Maalesef meşgulüm", correctAnswer: "Désolé, je suis occupé" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ bien, mais je dois travailler.", options: [{ id: "a", text: "voudrais", correct: true }, { id: "b", text: "veux", correct: false }] },
    { id: 12, type: "SELECT", question: "Hangisi bir daveti kabul eder?", options: [{ id: "a", text: "D'accord, super!", correct: true }, { id: "b", text: "Bof", correct: false }, { id: "c", text: "Non merci", correct: false }, { id: "d", text: "Dommage", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Başka zamana", correctAnswer: "Une autre fois" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Ça ne me ___ rien.", options: [{ id: "a", text: "dit", correct: true }, { id: "b", text: "parle", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "İstemiyorum", correctAnswer: "Je n'ai pas envie" }
];

const unit350Quiz3: Question[] = [
    // ZOR (5 Soru) - Problemler ve Tavsiye (Devoir/Falloir)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Doktora gitmelisin", correctAnswer: "Tu devrais aller chez le médecin" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ faire attention.", options: [{ id: "a", text: "faut", correct: true }, { id: "b", text: "falloir", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "À ta place, je ___ ça.", options: [{ id: "a", text: "ferais", correct: true }, { id: "b", text: "fais", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bir sorun var", correctAnswer: "Il y a un problème" },
    { id: 20, type: "SELECT", question: "'Il vaut mieux' ne demek?", options: [{ id: "a", text: "Daha iyi olur", correct: true }, { id: "b", text: "Daha kötü olur", correct: false }, { id: "c", text: "Aynı olur", correct: false }, { id: "d", text: "Gerek yok", correct: false }] }
];

const unit350Quiz4: Question[] = [
    // KARIŞIK (8 Soru)
    { id: 1, type: "SELECT", question: "'Tu as envie de sortir?' ne demek?", options: [{ id: "a", text: "Dışarı çıkmak ister misin?", correct: true }, { id: "b", text: "Dışarı çıkıyor musun?", correct: false }, { id: "c", text: "Dışarı çıkacak mısın?", correct: false }, { id: "d", text: "Dışarı çıktın mı?", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "On se ___ à 20h?", options: [{ id: "a", text: "retrouve", correct: true }, { id: "b", text: "trouve", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Müsait misin?", correctAnswer: "Es-tu disponible?" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Il faut que tu ___.", options: [{ id: "a", text: "viennes", correct: true }, { id: "b", text: "viens", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Yapacak çok işim var", correctAnswer: "J'ai trop de choses à faire" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "On se voit demain", options: [{ id: "a", text: "Yarın görüşürüz", correct: true }, { id: "b", text: "Yarın geliyorum", correct: false }, { id: "c", text: "Yarın işim var", correct: false }, { id: "d", text: "Yarın evdeyim", correct: false }] },
    { id: 7, type: "SELECT", question: "'Je te conseille de...' ne demek?", options: [{ id: "a", text: "Sana ... tavsiye ediyorum", correct: true }, { id: "b", text: "Senden ... istiyorum", correct: false }, { id: "c", text: "Sana ... söylüyorum", correct: false }, { id: "d", text: "Sana ... veriyorum", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Si tu veux, on ___ manger.", options: [{ id: "a", text: "peut", correct: true }, { id: "b", text: "peux", correct: false }] }
];

const unit351Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Kapatmayın", correctAnswer: "Ne quittez pas" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Sizi geri ararım", correctAnswer: "Je vous rappelle" }
];

const unit352Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Seni davet ediyorum", correctAnswer: "Je t'invite" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Memnuniyetle", correctAnswer: "Avec plaisir" }
];

const unit353Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Gerçekten özür dilerim", correctAnswer: "Je suis vraiment désolé" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Önemli değil", correctAnswer: "Ce n'est pas grave" }
];

const unit354Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Sola dönün", correctAnswer: "Tournez à gauche" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Düz gidin", correctAnswer: "Allez tout droit" }
];

const unit355Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Tarihi bir şehir", correctAnswer: "Une ville historique" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Mutfağıyla ünlü", correctAnswer: "Connue pour sa gastronomie" }
];

const unit356Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Fransa'da", correctAnswer: "En France" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Bizde farklı", correctAnswer: "Chez nous, c'est différent" }
];

const unit357Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Sınava girdim", correctAnswer: "J'ai passé l'examen" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Başardım", correctAnswer: "J'ai réussi" }
];

const unit358Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "İş arıyorum", correctAnswer: "Je cherche un emploi" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Mülakatım var", correctAnswer: "J'ai un entretien" }
];

const unit359Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Uygulamayı indireceğim", correctAnswer: "Je vais télécharger l'application" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Şifre ne?", correctAnswer: "Quel est le mot de passe?" }
];

const unit360Quiz1: Question[] = [
    { id: 1, type: "TRANSLATE", question: "Çevir:", hint: "Tebrikler", correctAnswer: "Félicitations" },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Devam edin", correctAnswer: "Continuez" }
];

// Quiz Map
export const frenchA2Quizzes: { [key: string]: Question[] } = {
    "331-1": unit331Quiz1, "331-2": unit331Quiz2, "331-3": unit331Quiz3, "331-4": unit331Quiz4,
    "332-1": unit332Quiz1, "332-2": unit332Quiz2, "332-3": unit332Quiz3, "332-4": unit332Quiz4,
    "333-1": unit333Quiz1, "333-2": unit333Quiz2, "333-3": unit333Quiz3, "333-4": unit333Quiz4,
    "334-1": unit334Quiz1, "334-2": unit334Quiz2, "334-3": unit334Quiz3, "334-4": unit334Quiz4,
    "335-1": unit335Quiz1, "335-2": unit335Quiz2, "335-3": unit335Quiz3, "335-4": unit335Quiz4,
    "336-1": unit336Quiz1, "336-2": unit336Quiz2, "336-3": unit336Quiz3, "336-4": unit336Quiz4,
    "337-1": unit337Quiz1, "337-2": unit337Quiz2, "337-3": unit337Quiz3, "337-4": unit337Quiz4,
    "338-1": unit338Quiz1, "338-2": unit338Quiz2, "338-3": unit338Quiz3, "338-4": unit338Quiz4,
    "339-1": unit339Quiz1, "339-2": unit339Quiz2, "339-3": unit339Quiz3, "339-4": unit339Quiz4,
    "340-1": unit340Quiz1, "340-2": unit340Quiz2, "340-3": unit340Quiz3, "340-4": unit340Quiz4,
    "341-1": unit341Quiz1, "341-2": unit341Quiz2, "341-3": unit341Quiz3, "341-4": unit341Quiz4,
    "342-1": unit342Quiz1, "342-2": unit342Quiz2, "342-3": unit342Quiz3, "342-4": unit342Quiz4,
    "343-1": unit343Quiz1, "343-2": unit343Quiz2, "343-3": unit343Quiz3, "343-4": unit343Quiz4,
    "344-1": unit344Quiz1, "344-2": unit344Quiz2, "344-3": unit344Quiz3, "344-4": unit344Quiz4,
    "345-1": unit345Quiz1, "345-2": unit345Quiz2, "345-3": unit345Quiz3, "345-4": unit345Quiz4,
    "346-1": unit346Quiz1, "346-2": unit346Quiz2, "346-3": unit346Quiz3, "346-4": unit346Quiz4,
    "347-1": unit347Quiz1, "347-2": unit347Quiz2, "347-3": unit347Quiz3, "347-4": unit347Quiz4,
    "348-1": unit348Quiz1, "348-2": unit348Quiz2, "348-3": unit348Quiz3, "348-4": unit348Quiz4,
    "349-1": unit349Quiz1, "349-2": unit349Quiz2, "349-3": unit349Quiz3, "349-4": unit349Quiz4,
    "350-1": unit350Quiz1, "350-2": unit350Quiz2, "350-3": unit350Quiz3, "350-4": unit350Quiz4,
    "351-1": unit351Quiz1, "352-1": unit352Quiz1, "353-1": unit353Quiz1, "354-1": unit354Quiz1,
    "355-1": unit355Quiz1, "356-1": unit356Quiz1, "357-1": unit357Quiz1, "358-1": unit358Quiz1,
    "359-1": unit359Quiz1, "360-1": unit360Quiz1
};

export function getFrenchA2Quiz(unitId: number, quizNumber: number): Question[] {
    return frenchA2Quizzes[`${unitId}-${quizNumber}`] || [];
}
