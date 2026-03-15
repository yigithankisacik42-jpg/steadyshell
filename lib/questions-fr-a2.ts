
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
    { id: 7, type: "SELECT", question: "'Le menu' ne demek?", options: [{ id: "a", text: "Menü", correct: true }, { id: "b", text: "Liste", correct: false }, { id: "c", text: "Fiyat", correct: false }, { id: "d", text: "Yemek", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'entrée' ne demek?", options: [{ id: "a", text: "Başlangıç yemeği", correct: true }, { id: "b", text: "Ana yemek", correct: false }, { id: "c", text: "Tatlı", correct: false }, { id: "d", text: "İçecek", correct: false }] },

    // ORTA (7 Soru) - Sipariş Verme
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Sipariş vermek istiyorum", correctAnswer: "Je voudrais commander" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Günün yemeği nedir?", correctAnswer: "Quel est le plat du jour?" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Comme entrée, je ___ une salade.", options: [{ id: "a", text: "prends", correct: true }, { id: "b", text: "prend", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous avez ___?", options: [{ id: "a", text: "choisi", correct: true }, { id: "b", text: "choisir", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je prendrai le poulet", options: [{ id: "a", text: "Tavuğu alacağım", correct: true }, { id: "b", text: "Et alacağım", correct: false }, { id: "c", text: "Balık alacağım", correct: false }, { id: "d", text: "Sebze alacağım", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___.", options: [{ id: "a", text: "délicieux", correct: true }, { id: "b", text: "délice", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Masa rezervasyonu yaptım", correctAnswer: "J'ai réservé une table" },

    // ZOR (5 Soru) - Diyalog
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Ne önerirsiniz?", correctAnswer: "Qu'est-ce que vous recommandez?" },
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
    // KOLAY (8 Soru) - Temel Kelimeler
    { id: 1, type: "SELECT", question: "'Cuisiner' ne demek?", options: [{ id: "a", text: "Yemek pişirmek", correct: true }, { id: "b", text: "Kesmek", correct: false }, { id: "c", text: "Yıkamak", correct: false }, { id: "d", text: "Servis etmek", correct: false }] },
    { id: 2, type: "SELECT", question: "'Éplucher' ne demek?", options: [{ id: "a", text: "Soymak", correct: true }, { id: "b", text: "Karıştırmak", correct: false }, { id: "c", text: "Eklemek", correct: false }, { id: "d", text: "Pişirmek", correct: false }] },
    { id: 3, type: "SELECT", question: "'Couper' ne demek?", options: [{ id: "a", text: "Kesmek / Doğramak", correct: true }, { id: "b", text: "Tadına bakmak", correct: false }, { id: "c", text: "Servis etmek", correct: false }, { id: "d", text: "Dökmek", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le four' ne demek?", options: [{ id: "a", text: "Fırın", correct: true }, { id: "b", text: "Tencere", correct: false }, { id: "c", text: "Kase", correct: false }, { id: "d", text: "Kaşık", correct: false }] },
    { id: 5, type: "SELECT", question: "'La casserole' ne demek?", options: [{ id: "a", text: "Tencere", correct: true }, { id: "b", text: "Fırın", correct: false }, { id: "c", text: "Tabak", correct: false }, { id: "d", text: "Bıçak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Le bol' ne demek?", options: [{ id: "a", text: "Kase", correct: true }, { id: "b", text: "Kaşık", correct: false }, { id: "c", text: "Tava", correct: false }, { id: "d", text: "Masa", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Les légumes", options: [{ id: "a", text: "Sebzeler", correct: true }, { id: "b", text: "Domatesler", correct: false }, { id: "c", text: "Soğanlar", correct: false }, { id: "d", text: "Meyveler", correct: false }] },
    { id: 8, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le sel", options: [{ id: "a", text: "Tuz", correct: true }, { id: "b", text: "Şeker", correct: false }, { id: "c", text: "Su", correct: false }, { id: "d", text: "Karabiber", correct: false }] },

    // ORTA (7 Soru) - Temel Emirler ve Cümleler
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Ajoute le ___.", options: [{ id: "a", text: "sel", correct: true }, { id: "b", text: "sucre", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Mélange la ___.", options: [{ id: "a", text: "sauce", correct: true }, { id: "b", text: "soupe", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "___ les tomates !", options: [{ id: "a", text: "Coupe", correct: true }, { id: "b", text: "Coupez", correct: false }] },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Sebzeleri yıka!", correctAnswer: "Lave les légumes !" },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Servez chaud", options: [{ id: "a", text: "Sıcak servis edin", correct: true }, { id: "b", text: "Soğuk servis edin", correct: false }, { id: "c", text: "Hemen yiyin", correct: false }, { id: "d", text: "Hemen karıştırın", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Tadına bak.", correctAnswer: "Goûte." },
    { id: 15, type: "SELECT", question: "Konuşma: 'Herkese afiyet olsun!'", options: [{ id: "a", text: "Bon appétit à tous !", correct: true }, { id: "b", text: "Bonsoir à tous !", correct: false }, { id: "c", text: "Bon voyage !", correct: false }, { id: "d", text: "À bientôt !", correct: false }] },

    // ZOR (5 Soru)
    { id: 16, type: "SELECT", question: "Doğru emir cümlesi (Sen) hangisi?", options: [{ id: "a", text: "Coupe les oignons !", correct: true }, { id: "b", text: "Coupes les oignons !", correct: false }, { id: "c", text: "Coupez les oignons !", correct: false }, { id: "d", text: "Tu coupe les oignons !", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "Ne ___ pas le four !", options: [{ id: "a", text: "touche", correct: true }, { id: "b", text: "touchez", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "20 dakika pişirin.", correctAnswer: "Faites cuire 20 minutes." },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Yavaşça karıştır.", correctAnswer: "Mélange doucement." },
    { id: 20, type: "SELECT", question: "Eşleştir: 'Délicieux' hangi anlama gelir?", options: [{ id: "a", text: "Lezzetli", correct: true }, { id: "b", text: "Tuzlu", correct: false }, { id: "c", text: "Tatlı", correct: false }, { id: "d", text: "Hazır", correct: false }] }
];

const unit340Quiz2: Question[] = [
    // KOLAY (8 Soru) - Kalıplar ve Güvenlik
    { id: 1, type: "SELECT", question: "'Mets ton tablier.' ne demek?", options: [{ id: "a", text: "Önlüğünü tak.", correct: true }, { id: "b", text: "Ellerini yıka.", correct: false }, { id: "c", text: "Bıçağa dikkat et.", correct: false }, { id: "d", text: "Fırına dokunma.", correct: false }] },
    { id: 2, type: "SELECT", question: "'Fais attention au couteau!' ne demek?", options: [{ id: "a", text: "Bıçağa dikkat et!", correct: true }, { id: "b", text: "Tencereyi getir!", correct: false }, { id: "c", text: "Bulaşık yıka!", correct: false }, { id: "d", text: "Masayı kur!", correct: false }] },
    { id: 3, type: "SELECT", question: "'Passe-moi le pain, s'il te plaît.' ne demek?", options: [{ id: "a", text: "Bana ekmeği uzat lütfen.", correct: true }, { id: "b", text: "Bana tuzu uzat lütfen.", correct: false }, { id: "c", text: "Ekmek yeme.", correct: false }, { id: "d", text: "Ekmek alabilir miyim?", correct: false }] },
    { id: 4, type: "SELECT", question: "'C'est vraiment délicieux.' ne demek?", options: [{ id: "a", text: "Gerçekten çok lezzetli.", correct: true }, { id: "b", text: "Gerçekten çok tuzlu.", correct: false }, { id: "c", text: "Gerçekten çok tatlı.", correct: false }, { id: "d", text: "Çok hazır.", correct: false }] },
    { id: 5, type: "SELECT", question: "'Qui va faire la vaisselle?' ne demek?", options: [{ id: "a", text: "Bulaşığı kim yıkayacak?", correct: true }, { id: "b", text: "Yemek kim yapacak?", correct: false }, { id: "c", text: "Kim domates doğrayacak?", correct: false }, { id: "d", text: "Kim masayı kuracak?", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Lave-toi les mains", options: [{ id: "a", text: "Ellerini yıka.", correct: true }, { id: "b", text: "Önlüğünü tak.", correct: false }, { id: "c", text: "Bıçağı koy.", correct: false }, { id: "d", text: "Masayı kur.", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ajoutez du sel", options: [{ id: "a", text: "Tuz ekleyin.", correct: true }, { id: "b", text: "Şeker ekleyin.", correct: false }, { id: "c", text: "Su dökün.", correct: false }, { id: "d", text: "Sosu karıştırın.", correct: false }] },
    { id: 8, type: "SELECT", question: "'Goûtez la sauce.' ne demek?", options: [{ id: "a", text: "Sosun tadına bakın.", correct: true }, { id: "b", text: "Sosu karıştırın.", correct: false }, { id: "c", text: "Sosu dökün.", correct: false }, { id: "d", text: "Sosu servis edin.", correct: false }] },

    // ORTA (7 Soru) - Siz/Nous Emirleri
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Lütfen sebzeleri kesin! (Siz)", correctAnswer: "Coupez les légumes, s'il vous plaît !" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "___ les pommes de terre. (Siz)", options: [{ id: "a", text: "Épluchez", correct: true }, { id: "b", text: "Épluche", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "___ un peu d'eau. (Siz)", options: [{ id: "a", text: "Versez", correct: true }, { id: "b", text: "Verse", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ne touchez pas le four", options: [{ id: "a", text: "Fırına dokunmayın.", correct: true }, { id: "b", text: "Fırına dokunun.", correct: false }, { id: "c", text: "Fırını açın.", correct: false }, { id: "d", text: "Fırını kapatın.", correct: false }] },
    { id: 13, type: "SELECT", question: "Hangi cümle 'Hadi mutfağa gidelim!' anlamına gelir?", options: [{ id: "a", text: "Allons dans la cuisine !", correct: true }, { id: "b", text: "Aller dans la cuisine !", correct: false }, { id: "c", text: "Va dans la cuisine !", correct: false }, { id: "d", text: "Allons à la cuisine ?", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Sıcak servis edin.", correctAnswer: "Servez chaud." },
    { id: 15, type: "SELECT", question: "Eşleştir: 'Prêt(e)' hangi anlama gelir?", options: [{ id: "a", text: "Hazır", correct: true }, { id: "b", text: "Tuzlu", correct: false }, { id: "c", text: "Pişmiş", correct: false }, { id: "d", text: "Yavaşça", correct: false }] },

    // ZOR (5 Soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Domatesleri ve soğanları kesin.", correctAnswer: "Coupez les tomates et les oignons." },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "___ bien. (Siz - Karıştırın)", options: [{ id: "a", text: "Mélangez", correct: true }, { id: "b", text: "Mélange", correct: false }] },
    { id: 18, type: "SELECT", question: "Doğru olumsuz emir (Siz) hangisi?", options: [{ id: "a", text: "Ne coupez pas les tomates !", correct: true }, { id: "b", text: "Ne coupe pas les tomates !", correct: false }, { id: "c", text: "Ne coupez les tomates pas !", correct: false }, { id: "d", text: "Ne coupez pas tomates !", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bıçağa dikkat et!", correctAnswer: "Fais attention au couteau !" },
    { id: 20, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Faites cuire vingt minutes", options: [{ id: "a", text: "20 dakika pişirin", correct: true }, { id: "b", text: "20 dakika bekleyin", correct: false }, { id: "c", text: "20 dakika kesin", correct: false }, { id: "d", text: "20 dakika karıştırın", correct: false }] }
];

const unit340Quiz3: Question[] = [
    // KOLAY (8 Soru) - Tat ve Fiiller
    { id: 1, type: "SELECT", question: "'Salé' ne demek?", options: [{ id: "a", text: "Tuzlu", correct: true }, { id: "b", text: "Tatlı", correct: false }, { id: "c", text: "Sıcak", correct: false }, { id: "d", text: "Soğuk", correct: false }] },
    { id: 2, type: "SELECT", question: "'Sucré' ne demek?", options: [{ id: "a", text: "Şekerli / Tatlı", correct: true }, { id: "b", text: "Tuzlu", correct: false }, { id: "c", text: "Acı", correct: false }, { id: "d", text: "Ekşi", correct: false }] },
    { id: 3, type: "SELECT", question: "'Délicieux' ne demek?", options: [{ id: "a", text: "Lezzetli", correct: true }, { id: "b", text: "Hazır", correct: false }, { id: "c", text: "Yavaş", correct: false }, { id: "d", text: "Keskin", correct: false }] },
    { id: 4, type: "SELECT", question: "'Goûter' ne demek?", options: [{ id: "a", text: "Tadına bakmak", correct: true }, { id: "b", text: "Püre yapmak", correct: false }, { id: "c", text: "Servis etmek", correct: false }, { id: "d", text: "Dökmek", correct: false }] },
    { id: 5, type: "SELECT", question: "'Servir' ne demek?", options: [{ id: "a", text: "Servis etmek", correct: true }, { id: "b", text: "Kesmek", correct: false }, { id: "c", text: "Yıkamak", correct: false }, { id: "d", text: "Soymak", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le dîner est prêt", options: [{ id: "a", text: "Akşam yemeği hazır", correct: true }, { id: "b", text: "Akşam yemeği tuzlu", correct: false }, { id: "c", text: "Akşam yemeği geç", correct: false }, { id: "d", text: "Akşam yemeği yok", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Le dîner est ___.", options: [{ id: "a", text: "prêt", correct: true }, { id: "b", text: "près", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ !", options: [{ id: "a", text: "délicieux", correct: true }, { id: "b", text: "salé", correct: false }] },

    // ORTA (7 Soru) - Ünite Kelimeleri ve Cümleler
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Bu çok tuzlu.", correctAnswer: "C'est trop salé." },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bu çok tatlı.", correctAnswer: "C'est trop sucré." },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Ajoute du ___.", options: [{ id: "a", text: "poivre", correct: true }, { id: "b", text: "sucre", correct: false }] },
    { id: 12, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mélange lentement", options: [{ id: "a", text: "Yavaşça karıştır", correct: true }, { id: "b", text: "Hızlıca karıştır", correct: false }, { id: "c", text: "Tuz ekle", correct: false }, { id: "d", text: "Sosu dök", correct: false }] },
    { id: 13, type: "SELECT", question: "Eşleştir: 'Lentement' ne demek?", options: [{ id: "a", text: "Yavaşça", correct: true }, { id: "b", text: "Hızlıca", correct: false }, { id: "c", text: "Sessizce", correct: false }, { id: "d", text: "Asla", correct: false }] },
    { id: 14, type: "SELECT", question: "Doğru cümleyi seç (Sen):", options: [{ id: "a", text: "Goûte la sauce.", correct: true }, { id: "b", text: "Goûtes la sauce.", correct: false }, { id: "c", text: "Goûtez la sauce.", correct: false }, { id: "d", text: "Goûter la sauce.", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Tencereye koy.", correctAnswer: "Mets dans la casserole." },

    // ZOR (5 Soru) - Okuma Metni Bilgileri
    { id: 16, type: "SELECT", question: "Hikaye nerede geçiyor?", options: [{ id: "a", text: "Paris'te bir mutfakta", correct: true }, { id: "b", text: "Lyon'da bir pazarda", correct: false }, { id: "c", text: "Okulda", correct: false }, { id: "d", text: "Sokakta", correct: false }] },
    { id: 17, type: "SELECT", question: "Şefin asistanının adı nedir?", options: [{ id: "a", text: "Julien", correct: true }, { id: "b", text: "Thomas", correct: false }, { id: "c", text: "Pierre", correct: false }, { id: "d", text: "Marc", correct: false }] },
    { id: 18, type: "SELECT", question: "Sos için neler ekleniyor?", options: [{ id: "a", text: "Tuz ve karabiber", correct: true }, { id: "b", text: "Süt ve un", correct: false }, { id: "c", text: "Sadece tuz", correct: false }, { id: "d", text: "Sadece biber", correct: false }] },
    { id: 19, type: "SELECT", question: "Akşam yemeği saat kaçta başlıyor?", options: [{ id: "a", text: "20.00", correct: true }, { id: "b", text: "18.00", correct: false }, { id: "c", text: "19.00", correct: false }, { id: "d", text: "21.00", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Garsonları masayı kurmaları için çağır!", correctAnswer: "Appelle les garçons pour mettre la table !" }
];

const unit340Quiz4: Question[] = [
    // KOLAY (8 Soru) - Genel Tekrar
    { id: 1, type: "SELECT", question: "'Le four' ne demek?", options: [{ id: "a", text: "Fırın", correct: true }, { id: "b", text: "Tencere", correct: false }, { id: "c", text: "Kase", correct: false }, { id: "d", text: "Bıçak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Célèbre' ne demek?", options: [{ id: "a", text: "Ünlü", correct: true }, { id: "b", text: "Yavaş", correct: false }, { id: "c", text: "Hazır", correct: false }, { id: "d", text: "Lezzetli", correct: false }] },
    { id: 3, type: "SELECT", question: "Eşleştir: 'Surtout' ne demek?", options: [{ id: "a", text: "Özellikle", correct: true }, { id: "b", text: "Bazen", correct: false }, { id: "c", text: "Hiçbir zaman", correct: false }, { id: "d", text: "Daha sonra", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Coupe les tomates", options: [{ id: "a", text: "Domatesleri kes.", correct: true }, { id: "b", text: "Domatesleri yıka.", correct: false }, { id: "c", text: "Domatesleri soy.", correct: false }, { id: "d", text: "Domatesleri ekle.", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "___ du sel.", options: [{ id: "a", text: "Ajoute", correct: true }, { id: "b", text: "Ajoutes", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "___ la sauce.", options: [{ id: "a", text: "Goûte", correct: true }, { id: "b", text: "Goûtes", correct: false }] },
    { id: 7, type: "SELECT", question: "Konuşma kalıbı: 'Herkese afiyet olsun!'", options: [{ id: "a", text: "Bon appétit à tous !", correct: true }, { id: "b", text: "Bonsoir à tous !", correct: false }, { id: "c", text: "Bon voyage !", correct: false }, { id: "d", text: "À bientôt !", correct: false }] },
    { id: 8, type: "SELECT", question: "'Prêt(e)' ne demek?", options: [{ id: "a", text: "Hazır", correct: true }, { id: "b", text: "Tuzlu", correct: false }, { id: "c", text: "Pişmiş", correct: false }, { id: "d", text: "Yavaş", correct: false }] },

    // ORTA (7 Soru)
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Ellerini yıka!", correctAnswer: "Lave-toi les mains !" },
    { id: 10, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mets ton tablier", options: [{ id: "a", text: "Önlüğünü tak.", correct: true }, { id: "b", text: "Ellerini yıka.", correct: false }, { id: "c", text: "Sosu karıştır.", correct: false }, { id: "d", text: "Masayı kur.", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Ne ___ pas le four !", options: [{ id: "a", text: "touche", correct: true }, { id: "b", text: "touchez", correct: false }] },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Bana ekmeği uzat lütfen.", correctAnswer: "Passe-moi le pain, s'il te plaît." },
    { id: 13, type: "SELECT", question: "Hangi cümle 'Hadi başlayalım!' anlamına gelir?", options: [{ id: "a", text: "Allons-y !", correct: true }, { id: "b", text: "Allons-y ?", correct: false }, { id: "c", text: "Aller-y !", correct: false }, { id: "d", text: "Allons !", correct: false }] },
    { id: 14, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Servez chaud", options: [{ id: "a", text: "Sıcak servis edin.", correct: true }, { id: "b", text: "Soğuk servis edin.", correct: false }, { id: "c", text: "Hemen yiyin.", correct: false }, { id: "d", text: "Sosu dökün.", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Sosu iyice karıştırın.", correctAnswer: "Mélangez bien la sauce." },

    // ZOR (5 Soru)
    { id: 16, type: "SELECT", question: "Doğru olumsuz emir (Sen) hangisi?", options: [{ id: "a", text: "Ne touche pas le four !", correct: true }, { id: "b", text: "Ne touche le four pas !", correct: false }, { id: "c", text: "Ne touchez pas le four !", correct: false }, { id: "d", text: "Ne touche pas le four ?", correct: false }] },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "___ les légumes ! (Siz)", options: [{ id: "a", text: "Lavez", correct: true }, { id: "b", text: "Lave", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Soğanları çok hızlı kesme!", correctAnswer: "Ne coupe pas les oignons trop vite !" },
    { id: 19, type: "SELECT", question: "Şef karıştırma hakkında ne diyor?", options: [{ id: "a", text: "Yavaşça, çok hızlı değil.", correct: true }, { id: "b", text: "Hızlıca karıştır.", correct: false }, { id: "c", text: "Karıştırma.", correct: false }, { id: "d", text: "Sadece tuz ekle.", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bu akşam harika olacak.", correctAnswer: "Ce soir sera fantastique." }
];

// Üniteler 341-360

// UNIT 341: Karşılaştırmalar (Comparisons)
// UNIT 341: Karşılaştırma & Alışveriş Adjektifleri (Comparatif)
// Quiz 1: KOLAY (20 Soru) - Sıfat Sözlüğü ve Karşılaştırma Temelleri
const unit341Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'Cher' ne demek?", options: [{ id: "a", text: "Ucuz", correct: false }, { id: "b", text: "Pahalı", correct: true }, { id: "c", text: "Büyük", correct: false }, { id: "d", text: "Küçük", correct: false }] },
    { id: 2, type: "SELECT", question: "'Bon marché' ne demek?", options: [{ id: "a", text: "Pahalı", correct: false }, { id: "b", text: "Taze", correct: false }, { id: "c", text: "Ucuz", correct: true }, { id: "d", text: "Büyük", correct: false }] },
    { id: 3, type: "SELECT", question: "'Joli' ne demek?", options: [{ id: "a", text: "Çirkin", correct: false }, { id: "b", text: "Güzel", correct: true }, { id: "c", text: "Büyük", correct: false }, { id: "d", text: "Rahat", correct: false }] },
    { id: 4, type: "SELECT", question: "'Petit' ne demek?", options: [{ id: "a", text: "Büyük", correct: false }, { id: "b", text: "Şık", correct: false }, { id: "c", text: "Küçük", correct: true }, { id: "d", text: "Yeni", correct: false }] },
    { id: 5, type: "SELECT", question: "'Grand' ne demek?", options: [{ id: "a", text: "Büyük", correct: true }, { id: "b", text: "Küçük", correct: false }, { id: "c", text: "Şık", correct: false }, { id: "d", text: "Rahat", correct: false }] },
    { id: 6, type: "SELECT", question: "'Plus' ne anlama gelir?", options: [{ id: "a", text: "Daha az", correct: false }, { id: "b", text: "Daha / Daha fazla", correct: true }, { id: "c", text: "Kadar", correct: false }, { id: "d", text: "Hiç", correct: false }] },
    { id: 7, type: "SELECT", question: "'Moins' ne anlama gelir?", options: [{ id: "a", text: "Daha fazla", correct: false }, { id: "b", text: "Kadar", correct: false }, { id: "c", text: "Daha az", correct: true }, { id: "d", text: "Çok", correct: false }] },
    { id: 8, type: "SELECT", question: "'Aussi' ne anlama gelir?", options: [{ id: "a", text: "Daha fazla", correct: false }, { id: "b", text: "Daha az", correct: false }, { id: "c", text: "Kadar (Eşitlik)", correct: true }, { id: "d", text: "Asla", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Daha pahalı", correctAnswer: "Plus cher" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Daha ucuz (Daha az pahalı)", correctAnswer: "Moins cher" },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Kadar güzel", correctAnswer: "Aussi beau" },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ cher que l'autre.", options: [{ id: "a", text: "moins", correct: true }, { id: "b", text: "moindre", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle est ___ grande que lui. (Daha uzun/büyük)", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "aussi", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Le t-shirt est ___ grand que le pull. (Daha az büyük)", options: [{ id: "a", text: "moins", correct: true }, { id: "b", text: "aussi", correct: false }] },
    { id: 15, type: "SELECT", question: "'Aussi grand que' ne demek?", options: [{ id: "a", text: "Daha büyük", correct: false }, { id: "b", text: "Kadar büyük", correct: true }, { id: "c", text: "Daha az büyük", correct: false }, { id: "d", text: "En büyük", correct: false }] },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Daha az güzel", correctAnswer: "Moins beau" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Daha rahat", correctAnswer: "Plus confortable" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce pantalon est ___ bon marché que l'autre.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "très", correct: false }] },
    { id: 19, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est moins cher", options: [{ id: "a", text: "Bu daha ucuz (az pahalı)", correct: true }, { id: "b", text: "Bu daha pahalı", correct: false }, { id: "c", text: "Bu çok pahalı", correct: false }, { id: "d", text: "Bu kadar ucuz", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Daha şık", correctAnswer: "Plus élégant" }
];

// Quiz 2: ORTA (20 Soru) - Formül: Ürün + Est + Terazi + Que
const unit341Quiz2: Question[] = [
    { id: 1, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce livre est plus intéressant ___ le film.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Pierre, Marie'den daha uzundur", correctAnswer: "Pierre est plus grand que Marie" },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette veste est moins ___ que l'autre.", options: [{ id: "a", text: "chère", correct: true }, { id: "b", text: "cher", correct: false }] },
    { id: 4, type: "TRANSLATE", question: "Çevir:", hint: "Bu elbise diğerinden daha güzel", correctAnswer: "Cette robe est plus jolie que l'autre" },
    { id: 5, type: "SELECT", question: "Hangi cümle doğru?", options: [{ id: "a", text: "Il est plus grand que moi.", correct: true }, { id: "b", text: "Il est plus grand de moi.", correct: false }, { id: "c", text: "Il est plus grand comme moi.", correct: false }, { id: "d", text: "Il est grand que moi.", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon sac est ___ lourd que le tien. (kadar)", options: [{ id: "a", text: "aussi", correct: true }, { id: "b", text: "autant", correct: false }] },
    { id: 7, type: "TRANSLATE", question: "Çevir:", hint: "Bu ayakkabılar o ayakkabılar kadar rahat", correctAnswer: "Ces chaussures sont aussi confortables que ces chaussures-là" },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Paris est ___ grand que Lyon.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "très", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Benim kazağım seninkinden daha az pahalı", correctAnswer: "Mon pull est moins cher que le tien" },
    { id: 10, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cette robe est aussi belle que l'autre", options: [{ id: "a", text: "Bu elbise diğeri kadar güzel", correct: true }, { id: "b", text: "Bu elbise diğerinden daha güzel", correct: false }, { id: "c", text: "Bu elbise diğerinden daha az güzel", correct: false }, { id: "d", text: "Bu elbise çok güzel", correct: false }] },
    { id: 11, type: "SELECT", question: "'Moins élégant que' ne demek?", options: [{ id: "a", text: "-den daha az şık", correct: true }, { id: "b", text: "-den daha şık", correct: false }, { id: "c", text: "kadar şık", correct: false }, { id: "d", text: "çok şık", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce chat est ___ gros que le chien.", options: [{ id: "a", text: "moins", correct: true }, { id: "b", text: "peu", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Bu araba diğerinden daha hızlı", correctAnswer: "Cette voiture est plus rapide que l'autre" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Elles sont ___ intelligentes que leurs frères.", options: [{ id: "a", text: "aussi", correct: true }, { id: "b", text: "autant", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bu tişört bu kazaktan daha ucuzdur", correctAnswer: "Ce t-shirt est moins cher que ce pull" },
    { id: 16, type: "SELECT", question: "Çoğul bir kelimeyle (Ces chaussures) hangi fiil çekimi kullanılır?", options: [{ id: "a", text: "sont", correct: true }, { id: "b", text: "est", correct: false }, { id: "c", text: "ont", correct: false }, { id: "d", text: "sommes", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Hangisini tercih edersin?", correctAnswer: "Laquelle tu préfères?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Le pantalon est plus cher ___ le t-shirt.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu ceket ondan daha şık", correctAnswer: "Cette veste est plus élégante qu'elle" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Evet, ama aynı zamanda daha pahalı", correctAnswer: "Oui, mais elle est aussi plus chère" }
];

// Quiz 3: ZOR (20 Soru) - İstisna (Meilleur) ve Karmaşık Yapılar
const unit341Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'Daha iyi' demek için hangi kelime kullanılır?", options: [{ id: "a", text: "Meilleur", correct: true }, { id: "b", text: "Plus bon", correct: false }, { id: "c", text: "Plus bien", correct: false }, { id: "d", text: "Mieux bon", correct: false }] },
    { id: 2, type: "SELECT", question: "Hangisi YANLIŞTIR?", options: [{ id: "a", text: "C'est plus bon.", correct: true }, { id: "b", text: "C'est meilleur.", correct: false }, { id: "c", text: "C'est plus cher.", correct: false }, { id: "d", text: "C'est moins grand.", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Bu, diğerinden daha iyi", correctAnswer: "C'est meilleur que l'autre" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette chemise est ___ que l'autre t-shirt.", options: [{ id: "a", text: "meilleure", correct: true }, { id: "b", text: "plus bonne", correct: false }] },
    { id: 5, type: "SELECT", question: "'Pire' ne demek?", options: [{ id: "a", text: "Daha kötü", correct: true }, { id: "b", text: "Daha iyi", correct: false }, { id: "c", text: "Çok pahalı", correct: false }, { id: "d", text: "Daha büyük", correct: false }] },
    { id: 6, type: "TRANSLATE", question: "Çevir:", hint: "Durum dünden daha kötü", correctAnswer: "La situation est pire qu'hier" },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Ces chaussures sont ___ grandes que les autres.", options: [{ id: "a", text: "aussi", correct: true }, { id: "b", text: "autant", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Mavi kaban daha iyi bir seçenek", correctAnswer: "Le manteau bleu est la meilleure option" },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce restaurant est ___ que le café.", options: [{ id: "a", text: "meilleur", correct: true }, { id: "b", text: "mieux", correct: false }] },
    { id: 10, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est la meilleure option", options: [{ id: "a", text: "Bu daha iyi bir seçenek", correct: true }, { id: "b", text: "Bu daha kötü bir seçenek", correct: false }, { id: "c", text: "Bu daha pahalı bir seçenek", correct: false }, { id: "d", text: "Bu daha ucuz bir seçenek", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Bence siyah ceket daha şık", correctAnswer: "Je pense que la veste noire est plus élégante" },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Ton idée est ___ que la mienne. (daha kötü)", options: [{ id: "a", text: "pire", correct: true }, { id: "b", text: "plus mauvaise", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Bu kitap diğerinden daha ilginç", correctAnswer: "Ce livre est plus intéressant que l'autre" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Haklısın, maviyi alıyorum: Tu as raison, j'___ la bleue!", options: [{ id: "a", text: "achète", correct: true }, { id: "b", text: "cherche", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "O kış için daha iyi", correctAnswer: "Il est meilleur pour l'hiver" },
    { id: 16, type: "SELECT", question: "'Plus chaud' ne anlama gelir?", options: [{ id: "a", text: "Daha sıcak", correct: true }, { id: "b", text: "Daha ucuz", correct: false }, { id: "c", text: "Daha iyi", correct: false }, { id: "d", text: "Daha şık", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Kırmızı olan siyah kadar pahalı", correctAnswer: "Le rouge est aussi cher que le noir" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Ces fruits sont ___ que les légumes. (daha iyi)", options: [{ id: "a", text: "meilleurs", correct: true }, { id: "b", text: "plus bons", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu pasta diğerinden daha iyi", correctAnswer: "Ce gâteau est meilleur que l'autre" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Daha az şık, ama daha rahat", correctAnswer: "Moins élégant, mais plus confortable" }
];

// Quiz 4: KARIŞIK DEĞERLENDİRME (20 Soru) - Alışveriş & Karşılaştırmalar Genel Tekrar
const unit341Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'Plus cher' ne demek?", options: [{ id: "a", text: "Daha pahalı", correct: true }, { id: "b", text: "Daha ucuz", correct: false }, { id: "c", text: "Daha şık", correct: false }, { id: "d", text: "En pahalı", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Ton vélo est ___ lourd que le mien.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "très", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "O (adam) benden daha yaşlı", correctAnswer: "Il est plus âgé que moi" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ grand ici.", options: [{ id: "a", text: "moins", correct: true }, { id: "b", text: "aussi que", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Bu gömlek çok büyük", correctAnswer: "Cette chemise est trop grande" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ce pantalon est plus cher que ce t-shirt", options: [{ id: "a", text: "Bu pantolon, bu tişörtten daha pahalıdır", correct: true }, { id: "b", text: "Bu tişört, bu pantolondan daha pahalıdır", correct: false }, { id: "c", text: "Bu pantolon, bu tişört kadar pahalıdır", correct: false }, { id: "d", text: "Bu pantolon, bu tişörtten daha ucuzdur", correct: false }] },
    { id: 7, type: "SELECT", question: "Hangi sıfat 'Şık' anlamına gelir?", options: [{ id: "a", text: "Élégant", correct: true }, { id: "b", text: "Confortable", correct: false }, { id: "c", text: "Joli", correct: false }, { id: "d", text: "Petit", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "La pomme est ___ chère que l'orange.", options: [{ id: "a", text: "moins", correct: true }, { id: "b", text: "moindre", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Bu ayakkabılar rahat", correctAnswer: "Ces chaussures sont confortables" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ que je pensais! (Düşündüğümden daha kötü)", options: [{ id: "a", text: "pire", correct: true }, { id: "b", text: "meilleur", correct: false }] },
    { id: 11, type: "SELECT", question: "Karşılaştırmada eşitlik belirtmek için hangisi kullanılır?", options: [{ id: "a", text: "Aussi ... que", correct: true }, { id: "b", text: "Plus ... que", correct: false }, { id: "c", text: "Moins ... que", correct: false }, { id: "d", text: "Très ... que", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle est ___ gentille que sa sœur. (Kadar)", options: [{ id: "a", text: "aussi", correct: true }, { id: "b", text: "autant", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Mavi ceket daha az pahalı", correctAnswer: "La veste bleue est moins chère" },
    { id: 14, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est meilleur que l'autre", options: [{ id: "a", text: "Bu, diğerinden daha iyi", correct: true }, { id: "b", text: "Bu, diğerinden daha kötü", correct: false }, { id: "c", text: "Bu, diğerinden daha pahalı", correct: false }, { id: "d", text: "Bu, diğerinden daha ucuz", correct: false }] },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce manteau est ___ cher. (çok)", options: [{ id: "a", text: "très", correct: true }, { id: "b", text: "plus", correct: false }] },
    { id: 16, type: "SELECT", question: "'Plus bon' yerine ne demeliyiz?", options: [{ id: "a", text: "Meilleur", correct: true }, { id: "b", text: "Mieux", correct: false }, { id: "c", text: "Pire", correct: false }, { id: "d", text: "Aussi bon", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "İndirim var mı?", correctAnswer: "Est-ce qu'il y a une réduction?" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce t-shirt est ___ petit.", options: [{ id: "a", text: "trop", correct: true }, { id: "b", text: "pire", correct: false }] },
    { id: 19, type: "SELECT", question: "'Bon marché' kelimesinin zıttı nedir?", options: [{ id: "a", text: "Cher", correct: true }, { id: "b", text: "Petit", correct: false }, { id: "c", text: "Joli", correct: false }, { id: "d", text: "Grand", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sonunda, maviyi alıyorum!", correctAnswer: "Finalement, je prends le bleu!" }
];

// UNIT 342: Kıyafet Alışverişi & İşaret Sıfatları (Ce/Cette/Ces/Cet)
// Quiz 1: KOLAY (20 Soru) - Kıyafet Kelime Hazinesi & Temel İşaret Sıfatları
const unit342Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'Le pantalon' ne demek?", options: [{ id: "a", text: "Gömlek", correct: false }, { id: "b", text: "Pantolon", correct: true }, { id: "c", text: "Elbise", correct: false }, { id: "d", text: "Ceket", correct: false }] },
    { id: 2, type: "SELECT", question: "'La chemise' ne demek?", options: [{ id: "a", text: "Kazak", correct: false }, { id: "b", text: "Pantolon", correct: false }, { id: "c", text: "Gömlek", correct: true }, { id: "d", text: "Elbise", correct: false }] },
    { id: 3, type: "SELECT", question: "'La robe' ne demek?", options: [{ id: "a", text: "Elbise", correct: true }, { id: "b", text: "Ceket", correct: false }, { id: "c", text: "Gömlek", correct: false }, { id: "d", text: "Kazak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le pull' ne demek?", options: [{ id: "a", text: "Kazak", correct: true }, { id: "b", text: "Tişört", correct: false }, { id: "c", text: "Pantolon", correct: false }, { id: "d", text: "Ayakkabı", correct: false }] },
    { id: 5, type: "SELECT", question: "'Les chaussures' ne demek?", options: [{ id: "a", text: "Çoraplar", correct: false }, { id: "b", text: "Ayakkabılar", correct: true }, { id: "c", text: "Eldiven", correct: false }, { id: "d", text: "Şapkalar", correct: false }] },
    { id: 6, type: "SELECT", question: "'Acheter' ne demek?", options: [{ id: "a", text: "Satın almak", correct: true }, { id: "b", text: "Denemek", correct: false }, { id: "c", text: "Aramak", correct: false }, { id: "d", text: "Ödemek", correct: false }] },
    { id: 7, type: "SELECT", question: "'Essayer' ne demek?", options: [{ id: "a", text: "Ödemek", correct: false }, { id: "b", text: "Denemek", correct: true }, { id: "c", text: "Satın almak", correct: false }, { id: "d", text: "Aramak", correct: false }] },
    { id: 8, type: "SELECT", question: "Erkek kelimeler için hangi işaret sıfatı kullanılır?", options: [{ id: "a", text: "CE", correct: true }, { id: "b", text: "CETTE", correct: false }, { id: "c", text: "CES", correct: false }, { id: "d", text: "CET", correct: false }] },
    { id: 9, type: "SELECT", question: "Dişi kelimeler için hangi işaret sıfatı kullanılır?", options: [{ id: "a", text: "CE", correct: false }, { id: "b", text: "CETTE", correct: true }, { id: "c", text: "CES", correct: false }, { id: "d", text: "CET", correct: false }] },
    { id: 10, type: "SELECT", question: "Çoğul kelimeler için hangi işaret sıfatı kullanılır?", options: [{ id: "a", text: "CE", correct: false }, { id: "b", text: "CETTE", correct: false }, { id: "c", text: "CES", correct: true }, { id: "d", text: "CET", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "___ pantalon est beau.", options: [{ id: "a", text: "Ce", correct: true }, { id: "b", text: "Cette", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "___ robe est rouge.", options: [{ id: "a", text: "Cette", correct: true }, { id: "b", text: "Ce", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "___ chaussures sont noires.", options: [{ id: "a", text: "Ces", correct: true }, { id: "b", text: "Ce", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "J'achète ___ pull.", options: [{ id: "a", text: "ce", correct: true }, { id: "b", text: "cette", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bu elbise", correctAnswer: "Cette robe" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bu pantolon", correctAnswer: "Ce pantalon" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Bu ayakkabılar", correctAnswer: "Ces chaussures" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bu kazak", correctAnswer: "Ce pull" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu gömlek", correctAnswer: "Cette chemise" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bu ceket", correctAnswer: "Cette veste" }
];

// Quiz 2: ORTA (20 Soru) - CET Kuralı & Alışveriş Fiilleri
const unit342Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "Sesli harfle başlayan erkek kelimeler için hangisi kullanılır?", options: [{ id: "a", text: "CET", correct: true }, { id: "b", text: "CE", correct: false }, { id: "c", text: "CETTE", correct: false }, { id: "d", text: "CES", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "___ homme est gentil.", options: [{ id: "a", text: "Cet", correct: true }, { id: "b", text: "Ce", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "___ anorak est chaud.", options: [{ id: "a", text: "Cet", correct: true }, { id: "b", text: "Ce", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "___ amie est sympa.", options: [{ id: "a", text: "Cette", correct: true }, { id: "b", text: "Cet", correct: false }] },
    { id: 5, type: "SELECT", question: "Hangisi doğru?", options: [{ id: "a", text: "Cet hôtel", correct: true }, { id: "b", text: "Ce hôtel", correct: false }, { id: "c", text: "Cette hôtel", correct: false }, { id: "d", text: "Ces hôtel", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ ce pantalon. (arıyorum)", options: [{ id: "a", text: "cherche", correct: true }, { id: "b", text: "achète", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ cette robe. (satın alıyorum)", options: [{ id: "a", text: "achète", correct: true }, { id: "b", text: "essaie", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ ce pull. (deniyorum)", options: [{ id: "a", text: "essaie", correct: true }, { id: "b", text: "achète", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ ces chaussures. (ödüyorum)", options: [{ id: "a", text: "paie", correct: true }, { id: "b", text: "cherche", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bu kazağı deneyebilir miyim?", correctAnswer: "Je peux essayer ce pull?" },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Bu pantolonu arıyorum", correctAnswer: "Je cherche ce pantalon" },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Bu elbiseyi satın alıyorum", correctAnswer: "J'achète cette robe" },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Bu ayakkabıları ödüyorum", correctAnswer: "Je paie ces chaussures" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je prends ___ chaussures.", options: [{ id: "a", text: "ces", correct: true }, { id: "b", text: "ses", correct: false }] },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "___ problème est difficile.", options: [{ id: "a", text: "Ce", correct: true }, { id: "b", text: "Cet", correct: false }] },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "J'achète cette chemise", options: [{ id: "a", text: "Bu gömleği satın alıyorum", correct: true }, { id: "b", text: "Bu gömleği deniyorum", correct: false }, { id: "c", text: "Bu gömleği arıyorum", correct: false }, { id: "d", text: "Bu gömleği ödüyorum", correct: false }] },
    { id: 17, type: "SELECT", question: "'Ça coûte combien?' ne demek?", options: [{ id: "a", text: "Ne kadar tutuyor?", correct: true }, { id: "b", text: "Nerede?", correct: false }, { id: "c", text: "Hangisi?", correct: false }, { id: "d", text: "Ne zaman?", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kartla ödüyorum", correctAnswer: "Je paie par carte" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu montu deniyorum", correctAnswer: "J'essaie cet anorak" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Ne kadar tutuyor?", correctAnswer: "Ça coûte combien?" }
];

// Quiz 3: ZOR (20 Soru) - -ci/-là Ayrımı & Karmaşık Cümleler
const unit342Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'-ci' eki neyi belirtir?", options: [{ id: "a", text: "Yakın olan (bu)", correct: true }, { id: "b", text: "Uzak olan (şu)", correct: false }, { id: "c", text: "Geçmişteki", correct: false }, { id: "d", text: "Gelecekteki", correct: false }] },
    { id: 2, type: "SELECT", question: "'-là' eki neyi belirtir?", options: [{ id: "a", text: "Uzak olan (şu / o)", correct: true }, { id: "b", text: "Yakın olan (bu)", correct: false }, { id: "c", text: "Çoğul", correct: false }, { id: "d", text: "Tekil", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Bu günlerde", correctAnswer: "Ces jours-ci" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Je préfère cette robe-___.", options: [{ id: "a", text: "là", correct: true }, { id: "b", text: "ci", correct: false }] },
    { id: 5, type: "SELECT", question: "'Ce matin-là' ne demek?", options: [{ id: "a", text: "O sabah (geçmişte)", correct: true }, { id: "b", text: "Bu sabah (bugün)", correct: false }, { id: "c", text: "Yarın sabah", correct: false }, { id: "d", text: "Her sabah", correct: false }] },
    { id: 6, type: "TRANSLATE", question: "Çevir:", hint: "Şu adam (uzaktaki)", correctAnswer: "Cet homme-là" },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Prends ce crayon-___.", options: [{ id: "a", text: "ci", correct: true }, { id: "b", text: "la", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime bien ___ acteur.", options: [{ id: "a", text: "cet", correct: true }, { id: "b", text: "cette", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Bu ağaç çok yaşlı", correctAnswer: "Cet arbre est très vieux" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "___ idée est intéressante.", options: [{ id: "a", text: "Cette", correct: true }, { id: "b", text: "Ce", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Bu bilgisayar çalışmıyor", correctAnswer: "Cet ordinateur ne marche pas" },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Bu kuş", correctAnswer: "Cet oiseau" },
    { id: 13, type: "SELECT", question: "Hangisi yanlış?", options: [{ id: "a", text: "Ce amie", correct: true }, { id: "b", text: "Cet ami", correct: false }, { id: "c", text: "Cette amie", correct: false }, { id: "d", text: "Ces amis", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "___ histoire est vraie.", options: [{ id: "a", text: "Cette", correct: true }, { id: "b", text: "Cet", correct: false }] },
    { id: 15, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ce soir", options: [{ id: "a", text: "Bu akşam", correct: true }, { id: "b", text: "O akşam", correct: false }, { id: "c", text: "Dün akşam", correct: false }, { id: "d", text: "Yarın akşam", correct: false }] },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bu fikir ilginç", correctAnswer: "Cette idée est intéressante" },
    { id: 17, type: "FILL_BLANK", question: "Doldur:", sentence: "J'achète ___ t-shirt et ___ robe.", options: [{ id: "a", text: "ce / cette", correct: true }, { id: "b", text: "cette / ce", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bu tişörtü ve bu ayakkabıları satın alıyorum", correctAnswer: "J'achète ce t-shirt et ces chaussures" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Regardez ___ photos.", options: [{ id: "a", text: "ces", correct: true }, { id: "b", text: "ses", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bu mükemmel. Ve ayrıca bu beyaz gömleği istiyorum.", correctAnswer: "C'est parfait. Et je voudrais aussi cette chemise blanche." }
];

// Quiz 4: KARIŞIK DEĞERLENDİRME (20 Soru) - Kıyafet + İşaret Sıfatları + Alışveriş Genel Tekrar
const unit342Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'La veste' ne demek?", options: [{ id: "a", text: "Ceket", correct: true }, { id: "b", text: "Kazak", correct: false }, { id: "c", text: "Pantolon", correct: false }, { id: "d", text: "Elbise", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Je cherche ___ pull bleu.", options: [{ id: "a", text: "ce", correct: true }, { id: "b", text: "cette", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Bu elbise size çok yakışıyor", correctAnswer: "Cette robe vous va très bien" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "___ veste est parfaite.", options: [{ id: "a", text: "Cette", correct: true }, { id: "b", text: "Ce", correct: false }] },
    { id: 5, type: "SELECT", question: "'Payer' ne demek?", options: [{ id: "a", text: "Ödemek", correct: true }, { id: "b", text: "Denemek", correct: false }, { id: "c", text: "Satın almak", correct: false }, { id: "d", text: "Aramak", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ça coûte combien", options: [{ id: "a", text: "Ne kadar tutuyor?", correct: true }, { id: "b", text: "Nerede?", correct: false }, { id: "c", text: "Ne zaman?", correct: false }, { id: "d", text: "Kim?", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ cette chemise blanche.", options: [{ id: "a", text: "achète", correct: true }, { id: "b", text: "essaie", correct: false }] },
    { id: 8, type: "SELECT", question: "'Cet étudiant' ne demek?", options: [{ id: "a", text: "Bu öğrenci (erkek)", correct: true }, { id: "b", text: "Bu öğrenci (kadın)", correct: false }, { id: "c", text: "Öğrenciler", correct: false }, { id: "d", text: "Bir öğrenci", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Mükemmel, alıyorum!", correctAnswer: "C'est parfait, je le prends!" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je paie ___ carte.", options: [{ id: "a", text: "par", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 11, type: "SELECT", question: "'Chercher' ne demek?", options: [{ id: "a", text: "Aramak", correct: true }, { id: "b", text: "Ödemek", correct: false }, { id: "c", text: "Denemek", correct: false }, { id: "d", text: "Satın almak", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "J'essaie ___ anorak.", options: [{ id: "a", text: "cet", correct: true }, { id: "b", text: "ce", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Giyinme kabini nerede?", correctAnswer: "Où est la cabine d'essayage?" },
    { id: 14, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je cherche un pull", options: [{ id: "a", text: "Bir kazak arıyorum", correct: true }, { id: "b", text: "Bir kazak satın alıyorum", correct: false }, { id: "c", text: "Bir kazak deniyorum", correct: false }, { id: "d", text: "Bir kazak ödüyorum", correct: false }] },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime ___ couleurs.", options: [{ id: "a", text: "ces", correct: true }, { id: "b", text: "ce", correct: false }] },
    { id: 16, type: "SELECT", question: "'La cabine d'essayage' ne demek?", options: [{ id: "a", text: "Giyinme kabini", correct: true }, { id: "b", text: "Kasa", correct: false }, { id: "c", text: "Vitrin", correct: false }, { id: "d", text: "Raf", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Bu kazak ve bu gömlek. 80 euro tutuyor.", correctAnswer: "Ce pull et cette chemise. Ça coûte 80 euros." },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Regardez ___ pull bleu.", options: [{ id: "a", text: "ce", correct: true }, { id: "b", text: "cette", correct: false }] },
    { id: 19, type: "SELECT", question: "'Pantalon' kelimesinin cinsiyeti nedir?", options: [{ id: "a", text: "Erkek (Le)", correct: true }, { id: "b", text: "Dişi (La)", correct: false }, { id: "c", text: "Çoğul (Les)", correct: false }, { id: "d", text: "Belirsiz", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bu pantolonu ve bu gömleği satın alıyorum", correctAnswer: "J'achète ce pantalon et cette chemise" }
];

// UNIT 343: Ev İşleri & Yakın Geçmiş (Venir de)
// Quiz 1: KOLAY (20 Soru) - Ev İşleri Kelime Hazinesi & Temel Venir de
const unit343Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'Le ménage' ne demek?", options: [{ id: "a", text: "Yemek", correct: false }, { id: "b", text: "Temizlik", correct: true }, { id: "c", text: "Alışveriş", correct: false }, { id: "d", text: "Spor", correct: false }] },
    { id: 2, type: "SELECT", question: "'Faire la vaisselle' ne demek?", options: [{ id: "a", text: "Bulaşık yıkamak", correct: true }, { id: "b", text: "Çamaşır yıkamak", correct: false }, { id: "c", text: "Yemek yapmak", correct: false }, { id: "d", text: "Ütü yapmak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Faire la lessive' ne demek?", options: [{ id: "a", text: "Bulaşık yıkamak", correct: false }, { id: "b", text: "Çamaşır yıkamak", correct: true }, { id: "c", text: "Süpürge çekmek", correct: false }, { id: "d", text: "Yatağı toplamak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Faire le lit' ne demek?", options: [{ id: "a", text: "Yatağı toplamak", correct: true }, { id: "b", text: "Temizlik yapmak", correct: false }, { id: "c", text: "Ütü yapmak", correct: false }, { id: "d", text: "Çamaşır yıkamak", correct: false }] },
    { id: 5, type: "SELECT", question: "'Passer l'aspirateur' ne demek?", options: [{ id: "a", text: "Ütü yapmak", correct: false }, { id: "b", text: "Bulaşık yıkamak", correct: false }, { id: "c", text: "Süpürge çekmek", correct: true }, { id: "d", text: "Yatağı toplamak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Repasser' ne demek?", options: [{ id: "a", text: "Ütü yapmak", correct: true }, { id: "b", text: "Temizlemek", correct: false }, { id: "c", text: "Yıkamak", correct: false }, { id: "d", text: "Toplamak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Ranger' ne demek?", options: [{ id: "a", text: "Temizlemek", correct: false }, { id: "b", text: "Toplamak / Düzenlemek", correct: true }, { id: "c", text: "Yıkamak", correct: false }, { id: "d", text: "Süpürmek", correct: false }] },
    { id: 8, type: "SELECT", question: "'Venir de' ne anlama gelir?", options: [{ id: "a", text: "Az önce (bir şey yapmak)", correct: true }, { id: "b", text: "Yapacak olmak", correct: false }, { id: "c", text: "Yapmak istemek", correct: false }, { id: "d", text: "Yapabiliyor olmak", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je fais le ___.", options: [{ id: "a", text: "ménage", correct: true }, { id: "b", text: "lessive", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je passe l'___.", options: [{ id: "a", text: "aspirateur", correct: true }, { id: "b", text: "vaisselle", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ de faire la vaisselle.", options: [{ id: "a", text: "vient", correct: true }, { id: "b", text: "va", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ de faire le ménage.", options: [{ id: "a", text: "viens", correct: true }, { id: "b", text: "vais", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "___ ta chambre !", options: [{ id: "a", text: "Range", correct: true }, { id: "b", text: "Ranges", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "La maison est ___.", options: [{ id: "a", text: "propre", correct: true }, { id: "b", text: "ménage", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Temizlik yapıyorum", correctAnswer: "Je fais le ménage" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bulaşık yıkıyorum", correctAnswer: "Je fais la vaisselle" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Süpürge çekiyorum", correctAnswer: "Je passe l'aspirateur" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Odanı topla!", correctAnswer: "Range ta chambre!" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Az önce temizlik yaptım", correctAnswer: "Je viens de faire le ménage" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Gömlekleri ütülüyorum", correctAnswer: "Je repasse les chemises" }
];

// Quiz 2: ORTA (20 Soru) - Venir Çekimleri & Formül Uygulaması
const unit343Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "'Venir de' formülünde ikinci fiil nasıl kullanılır?", options: [{ id: "a", text: "Mastar (yalın) haliyle", correct: true }, { id: "b", text: "Çekimli haliyle", correct: false }, { id: "c", text: "Geçmiş zaman haliyle", correct: false }, { id: "d", text: "Gelecek zaman haliyle", correct: false }] },
    { id: 2, type: "SELECT", question: "'Je viens' fiilinin okunuşu nedir?", options: [{ id: "a", text: "Jö viyen", correct: true }, { id: "b", text: "Jö ven", correct: false }, { id: "c", text: "Jö vön", correct: false }, { id: "d", text: "Jö vine", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ de faire le lit.", options: [{ id: "a", text: "viens", correct: true }, { id: "b", text: "vient", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ de passer l'aspirateur.", options: [{ id: "a", text: "vient", correct: true }, { id: "b", text: "viens", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ de faire la lessive.", options: [{ id: "a", text: "venons", correct: true }, { id: "b", text: "venez", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ de ranger la chambre.", options: [{ id: "a", text: "venez", correct: true }, { id: "b", text: "venons", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ de nettoyer la cuisine.", options: [{ id: "a", text: "viennent", correct: true }, { id: "b", text: "vient", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Elles viennent ___ faire la vaisselle.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "à", correct: false }] },
    { id: 9, type: "SELECT", question: "'Tu viens de finir?' ne demek?", options: [{ id: "a", text: "Az önce mi bitirdin?", correct: true }, { id: "b", text: "Bitirecek misin?", correct: false }, { id: "c", text: "Bitiriyor musun?", correct: false }, { id: "d", text: "Bitirmek ister misin?", correct: false }] },
    { id: 10, type: "SELECT", question: "Hangisi 'Yakın Geçmiş'?", options: [{ id: "a", text: "Je viens de parler", correct: true }, { id: "b", text: "J'ai parlé", correct: false }, { id: "c", text: "Je vais parler", correct: false }, { id: "d", text: "Je parle", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Az önce yatağımı topladım", correctAnswer: "Je viens de faire mon lit" },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "O az önce süpürge çekti", correctAnswer: "Il vient de passer l'aspirateur" },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Az önce bulaşıkları yıkadın", correctAnswer: "Tu viens de faire la vaisselle" },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Az önce çamaşır yıkadık", correctAnswer: "Nous venons de faire la lessive" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "On ___ de rentrer.", options: [{ id: "a", text: "vient", correct: true }, { id: "b", text: "viennent", correct: false }] },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Tren az önce kalktı", correctAnswer: "Le train vient de partir" },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je viens de faire le ménage", options: [{ id: "a", text: "Az önce temizlik yaptım", correct: true }, { id: "b", text: "Temizlik yapacağım", correct: false }, { id: "c", text: "Temizlik yapıyorum", correct: false }, { id: "d", text: "Temizlik yaptım", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est à ton ___ de faire la vaisselle.", options: [{ id: "a", text: "tour", correct: true }, { id: "b", text: "fois", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Mektup az önce geldi", correctAnswer: "La lettre vient d'arriver" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Az önce bitirdik", correctAnswer: "Nous venons de finir" }
];

// Quiz 3: ZOR (20 Soru) - D' Apostrophe, Dönüşlü Fiiller & Karmaşık Cümleler
const unit343Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "Hangi durumda 'de' → 'd'' olur?", options: [{ id: "a", text: "Fiil sesli harfle başlarsa", correct: true }, { id: "b", text: "Fiil sessiz harfle başlarsa", correct: false }, { id: "c", text: "Her zaman", correct: false }, { id: "d", text: "Asla değişmez", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Je viens ___ arriver.", options: [{ id: "a", text: "d'", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle vient ___ écouter la musique.", options: [{ id: "a", text: "d'", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils viennent ___ faire le ménage.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "d'", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Az önce yıkandım", correctAnswer: "Je viens de me laver" },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle vient de ___ lever.", options: [{ id: "a", text: "se", correct: true }, { id: "b", text: "me", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous venons de ___ rencontrer.", options: [{ id: "a", text: "nous", correct: true }, { id: "b", text: "vous", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Onu az önce yaptım", correctAnswer: "Je viens de le faire" },
    { id: 9, type: "SELECT", question: "Doğru sıralama hangisi?", options: [{ id: "a", text: "Je viens de l'acheter", correct: true }, { id: "b", text: "Je viens l'acheter de", correct: false }, { id: "c", text: "Je le viens d'acheter", correct: false }, { id: "d", text: "Je viens de acheter le", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Az önce aradılar", correctAnswer: "Ils viennent d'appeler" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Le bébé vient de ___.", options: [{ id: "a", text: "s'endormir", correct: true }, { id: "b", text: "dormir se", correct: false }] },
    { id: 12, type: "SELECT", question: "'Le film vient de commencer' ne demek?", options: [{ id: "a", text: "Film az önce başladı", correct: true }, { id: "b", text: "Film başlıyor", correct: false }, { id: "c", text: "Film başlayacak", correct: false }, { id: "d", text: "Film bitti", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Az önce müziği dinledim", correctAnswer: "Je viens d'écouter la musique" },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Bebek az önce uyudu", correctAnswer: "Le bébé vient de s'endormir" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Hugo vient ___ passer l'aspirateur.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "d'", correct: false }] },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Lucas vient ___ repasser les chemises.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "d'", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Nous venons de faire la lessive", options: [{ id: "a", text: "Az önce çamaşır yıkadık", correct: true }, { id: "b", text: "Çamaşır yıkayacağız", correct: false }, { id: "c", text: "Çamaşır yıkıyoruz", correct: false }, { id: "d", text: "Çamaşır yıkadık", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Az önce kahve içtim", correctAnswer: "Je viens de boire du café" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ de le dire.", options: [{ id: "a", text: "viens", correct: true }, { id: "b", text: "vient", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Az önce gördüm", correctAnswer: "Je viens de voir" }
];

// Quiz 4: KARIŞIK DEĞERLENDİRME (20 Soru) - Ev İşleri + Venir de Genel Tekrar
const unit343Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "Fransızcada ev işlerinin çoğu hangi fiille kurulur?", options: [{ id: "a", text: "FAIRE", correct: true }, { id: "b", text: "ÊTRE", correct: false }, { id: "c", text: "ALLER", correct: false }, { id: "d", text: "AVOIR", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ de faire le lit.", options: [{ id: "a", text: "viens", correct: true }, { id: "b", text: "vais", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Senin sıran", correctAnswer: "C'est à ton tour" },
    { id: 4, type: "SELECT", question: "Hangi fiil 'Yakın Geçmiş' için kullanılır?", options: [{ id: "a", text: "Venir + de", correct: true }, { id: "b", text: "Aller + de", correct: false }, { id: "c", text: "Être + de", correct: false }, { id: "d", text: "Avoir + de", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ de gagner.", options: [{ id: "a", text: "viennent", correct: true }, { id: "b", text: "venez", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "On vient de partir", options: [{ id: "a", text: "Az önce çıktık", correct: true }, { id: "b", text: "Çıkıyoruz", correct: false }, { id: "c", text: "Çıkacağız", correct: false }, { id: "d", text: "Çıkmak istiyoruz", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ de lire ce livre?", options: [{ id: "a", text: "venez", correct: true }, { id: "b", text: "allez", correct: false }] },
    { id: 8, type: "SELECT", question: "'Je viens de me réveiller' ne demek?", options: [{ id: "a", text: "Az önce uyandım", correct: true }, { id: "b", text: "Şimdi uyanıyorum", correct: false }, { id: "c", text: "Uyanacağım", correct: false }, { id: "d", text: "Uyanmak üzereyim", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Az önce bulaşıkları yıkadım", correctAnswer: "Je viens de faire la vaisselle" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Hugo vient de ___ l'aspirateur.", options: [{ id: "a", text: "passer", correct: true }, { id: "b", text: "passé", correct: false }] },
    { id: 11, type: "SELECT", question: "'Propre' ne demek?", options: [{ id: "a", text: "Temiz", correct: true }, { id: "b", text: "Kirli", correct: false }, { id: "c", text: "Büyük", correct: false }, { id: "d", text: "Küçük", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Lucas vient de ___ les chambres.", options: [{ id: "a", text: "ranger", correct: true }, { id: "b", text: "rangé", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Ev şimdi temiz", correctAnswer: "La maison est propre maintenant" },
    { id: 14, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est à ton tour de faire la vaisselle", options: [{ id: "a", text: "Bulaşık yıkama sırası sende", correct: true }, { id: "b", text: "Bulaşıkları yıka", correct: false }, { id: "c", text: "Bulaşık yıkadım", correct: false }, { id: "d", text: "Bulaşık yıkayacağım", correct: false }] },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Je viens ___ écouter la radio.", options: [{ id: "a", text: "d'", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 16, type: "SELECT", question: "'Faire la lessive' ne demek?", options: [{ id: "a", text: "Çamaşır yıkamak", correct: true }, { id: "b", text: "Bulaşık yıkamak", correct: false }, { id: "c", text: "Ütü yapmak", correct: false }, { id: "d", text: "Temizlik yapmak", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "O az önce gömlekleri ütüledi", correctAnswer: "Elle vient de repasser les chemises" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle vient de ___ la cuisine.", options: [{ id: "a", text: "nettoyer", correct: true }, { id: "b", text: "nettoyé", correct: false }] },
    { id: 19, type: "SELECT", question: "'Venir de' formülünde ikinci fiil çekimlenir mi?", options: [{ id: "a", text: "Hayır, mastar haliyle kalır", correct: true }, { id: "b", text: "Evet, çekimlenir", correct: false }, { id: "c", text: "Bazen", correct: false }, { id: "d", text: "Sadece 'nous' ile", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Az önce yatağımı topladım. Dinleneceğim.", correctAnswer: "Je viens de faire mon lit. Je vais me reposer." }
];

// UNIT 344: Günlük Haberler & Imparfait (Sürekli Geçmiş Zaman)
// Quiz 1: KOLAY (20 Soru) - Haber Kelime Hazinesi & Temel Imparfait
const unit344Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'Les actualités' ne demek?", options: [{ id: "a", text: "Reklamlar", correct: false }, { id: "b", text: "Haberler", correct: true }, { id: "c", text: "Diziler", correct: false }, { id: "d", text: "Filmler", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le journal' ne demek?", options: [{ id: "a", text: "Dergi", correct: false }, { id: "b", text: "Gazete", correct: true }, { id: "c", text: "Kitap", correct: false }, { id: "d", text: "Mektup", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le / La journaliste' ne demek?", options: [{ id: "a", text: "Yazar", correct: false }, { id: "b", text: "Öğretmen", correct: false }, { id: "c", text: "Gazeteci", correct: true }, { id: "d", text: "Doktor", correct: false }] },
    { id: 4, type: "SELECT", question: "'L'article' ne demek?", options: [{ id: "a", text: "Makale", correct: true }, { id: "b", text: "Gazete", correct: false }, { id: "c", text: "Haber", correct: false }, { id: "d", text: "Başlık", correct: false }] },
    { id: 5, type: "SELECT", question: "'La météo' ne demek?", options: [{ id: "a", text: "Metro", correct: false }, { id: "b", text: "Hava durumu", correct: true }, { id: "c", text: "Müzik", correct: false }, { id: "d", text: "Spor haberleri", correct: false }] },
    { id: 6, type: "SELECT", question: "'L'accident' ne demek?", options: [{ id: "a", text: "Kaza", correct: true }, { id: "b", text: "Olay", correct: false }, { id: "c", text: "Haber", correct: false }, { id: "d", text: "Fırtına", correct: false }] },
    { id: 7, type: "SELECT", question: "'L'événement' ne demek?", options: [{ id: "a", text: "Kaza", correct: false }, { id: "b", text: "Toplantı", correct: false }, { id: "c", text: "Olay / Etkinlik", correct: true }, { id: "d", text: "Başlık", correct: false }] },
    { id: 8, type: "SELECT", question: "Imparfait Türkçede hangi ekle karşılanır?", options: [{ id: "a", text: "-yordu / -erdi", correct: true }, { id: "b", text: "-ecek / -acak", correct: false }, { id: "c", text: "-mış / -miş", correct: false }, { id: "d", text: "-yor / -iyor", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ les actualités. (izliyorum)", options: [{ id: "a", text: "regarde", correct: true }, { id: "b", text: "regardais", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ les actualités. (izliyordum)", options: [{ id: "a", text: "regardais", correct: true }, { id: "b", text: "regarde", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon père lisait le ___ chaque matin.", options: [{ id: "a", text: "journal", correct: true }, { id: "b", text: "météo", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ était terrible hier.", options: [{ id: "a", text: "météo", correct: true }, { id: "b", text: "journal", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y ___ un accident.", options: [{ id: "a", text: "avait", correct: true }, { id: "b", text: "a", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ parlait à la télé.", options: [{ id: "a", text: "journaliste", correct: true }, { id: "b", text: "journal", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Haberleri izliyorum", correctAnswer: "Je regarde les actualités" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Gazete okuyorum", correctAnswer: "Je lis le journal" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Hava durumu", correctAnswer: "La météo" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Büyük bir olay", correctAnswer: "Un grand événement" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bir makale okudum", correctAnswer: "J'ai lu un article" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Haberleri gördün mü?", correctAnswer: "Tu as vu les infos?" }
];

// Quiz 2: ORTA (20 Soru) - Imparfait Çekimleri & Formülü
const unit344Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "Imparfait yapmak için hangi adım önce gelir?", options: [{ id: "a", text: "Fiilin NOUS çekimini bul", correct: true }, { id: "b", text: "Sıfatı bul", correct: false }, { id: "c", text: "İsmi bul", correct: false }, { id: "d", text: "Fiilin JE çekimini bul", correct: false }] },
    { id: 2, type: "SELECT", question: "'Nous regardons' fiilinden Imparfait kökü ne olur?", options: [{ id: "a", text: "regard-", correct: true }, { id: "b", text: "regardons-", correct: false }, { id: "c", text: "regarder-", correct: false }, { id: "d", text: "regardai-", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Je regard___ la télé. (izliyordum)", options: [{ id: "a", text: "ais", correct: true }, { id: "b", text: "ons", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu regard___ les infos.", options: [{ id: "a", text: "ais", correct: true }, { id: "b", text: "ait", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Il regard___ le journal.", options: [{ id: "a", text: "ait", correct: true }, { id: "b", text: "ais", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous regard___.", options: [{ id: "a", text: "ions", correct: true }, { id: "b", text: "aient", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous regard___.", options: [{ id: "a", text: "iez", correct: true }, { id: "b", text: "ions", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils regard___.", options: [{ id: "a", text: "aient", correct: true }, { id: "b", text: "ais", correct: false }] },
    { id: 9, type: "SELECT", question: "Je, Tu, Il, Ils eklerinin okunuşu nasıldır?", options: [{ id: "a", text: "Hepsi aynı: '-e' sesi", correct: true }, { id: "b", text: "Hepsi farklı", correct: false }, { id: "c", text: "Je ve Tu aynı, diğerleri farklı", correct: false }, { id: "d", text: "Hiçbiri aynı değil", correct: false }] },
    { id: 10, type: "SELECT", question: "ÊTRE fiilinin Imparfait kökü nedir?", options: [{ id: "a", text: "ét-", correct: true }, { id: "b", text: "êtr-", correct: false }, { id: "c", text: "som-", correct: false }, { id: "d", text: "av-", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ malade hier. (hastaydım)", options: [{ id: "a", text: "étais", correct: true }, { id: "b", text: "suis", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ un bon journaliste.", options: [{ id: "a", text: "était", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ à la maison.", options: [{ id: "a", text: "étions", correct: true }, { id: "b", text: "sommes", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ très stressés.", options: [{ id: "a", text: "étaient", correct: true }, { id: "b", text: "sont", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "İzliyordum", correctAnswer: "Je regardais" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "O iyi bir gazeteciydi", correctAnswer: "Il était un bon journaliste" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Çok rüzgar vardı", correctAnswer: "Il y avait beaucoup de vent" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Gençken", correctAnswer: "Quand j'étais jeune" },
    { id: 19, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je regardais la télé", options: [{ id: "a", text: "TV izliyordum", correct: true }, { id: "b", text: "TV izliyorum", correct: false }, { id: "c", text: "TV izleyeceğim", correct: false }, { id: "d", text: "TV izledim", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yağmur yağıyordu", correctAnswer: "Il pleuvait" }
];

// Quiz 3: ZOR (20 Soru) - Imparfait vs Passé Composé & Hikaye
const unit344Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "Imparfait ne zaman kullanılır?", options: [{ id: "a", text: "Geçmişteki durum, alışkanlık, devam eden eylem", correct: true }, { id: "b", text: "Tek seferlik tamamlanmış eylem", correct: false }, { id: "c", text: "Gelecekte olacak eylem", correct: false }, { id: "d", text: "Şimdiki zaman", correct: false }] },
    { id: 2, type: "SELECT", question: "Passé Composé ne zaman kullanılır?", options: [{ id: "a", text: "Tamamlanmış, tek seferlik eylem", correct: true }, { id: "b", text: "Geçmişteki alışkanlık", correct: false }, { id: "c", text: "Durum/Manzara", correct: false }, { id: "d", text: "Devam eden eylem", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Pendant que je dormais, le téléphone ___.", options: [{ id: "a", text: "a sonné", correct: true }, { id: "b", text: "sonnait", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ beau quand nous sommes sortis.", options: [{ id: "a", text: "faisait", correct: true }, { id: "b", text: "a fait", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Soudain, un chien ___.", options: [{ id: "a", text: "est sorti", correct: true }, { id: "b", text: "sortait", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Quand je l'ai vu, il ___ un livre.", options: [{ id: "a", text: "lisait", correct: true }, { id: "b", text: "a lu", correct: false }] },
    { id: 7, type: "SELECT", question: "'Soudain' (aniden) hangi zamanla birlikte gelir?", options: [{ id: "a", text: "Passé Composé", correct: true }, { id: "b", text: "Imparfait", correct: false }, { id: "c", text: "Her ikisi", correct: false }, { id: "d", text: "Hiçbiri", correct: false }] },
    { id: 8, type: "SELECT", question: "'Chaque jour' (her gün) hangi zamanla birlikte gelir?", options: [{ id: "a", text: "Imparfait", correct: true }, { id: "b", text: "Passé Composé", correct: false }, { id: "c", text: "Futur", correct: false }, { id: "d", text: "Présent", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ à la plage chaque été.", options: [{ id: "a", text: "allions", correct: true }, { id: "b", text: "sommes allés", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Hier, il ___ neiger tout à coup.", options: [{ id: "a", text: "a commencé à", correct: true }, { id: "b", text: "commençait à", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Televizyon izliyordum", correctAnswer: "Je regardais la télé" },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Aniden düştü", correctAnswer: "Soudain il est tombé" },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Her pazar giderdik", correctAnswer: "Nous allions chaque dimanche" },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Yemek yapıyordum", correctAnswer: "Je faisais la cuisine" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ triste parce qu'elle avait perdu.", options: [{ id: "a", text: "était", correct: true }, { id: "b", text: "a été", correct: false }] },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Les gens ___ les infos quand la tempête a commencé.", options: [{ id: "a", text: "regardaient", correct: true }, { id: "b", text: "ont regardé", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il neigeait et il faisait froid", options: [{ id: "a", text: "Kar yağıyordu ve soğuktu", correct: true }, { id: "b", text: "Kar yağdı ve soğuk oldu", correct: false }, { id: "c", text: "Kar yağacak ve soğuk olacak", correct: false }, { id: "d", text: "Kar yağıyor ve soğuk", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Dışarıdayken başladı", correctAnswer: "Ça a commencé quand j'étais dehors" },
    { id: 19, type: "SELECT", question: "Hangisi 'tamamlanmış eylem'?", options: [{ id: "a", text: "J'ai fini", correct: true }, { id: "b", text: "Je finissais", correct: false }, { id: "c", text: "Je finis", correct: false }, { id: "d", text: "Je vais finir", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kar yağıyordu ve soğuktu", correctAnswer: "Il neigeait et il faisait froid" }
];

// Quiz 4: KARIŞIK DEĞERLENDİRME (20 Soru) - Kelime + Imparfait + PC Genel Tekrar
const unit344Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'C'était super' ne demek?", options: [{ id: "a", text: "Harikaydı", correct: true }, { id: "b", text: "Harika", correct: false }, { id: "c", text: "Harika olacak", correct: false }, { id: "d", text: "Harika oldu", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Avant, j'___ à Paris.", options: [{ id: "a", text: "habitais", correct: true }, { id: "b", text: "ai habité", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Çok yorgundum", correctAnswer: "J'étais très fatigué" },
    { id: 4, type: "SELECT", question: "'Il a bu un café' hangi zaman?", options: [{ id: "a", text: "Passé Composé", correct: true }, { id: "b", text: "Imparfait", correct: false }, { id: "c", text: "Présent", correct: false }, { id: "d", text: "Futur", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ le train tous les matins.", options: [{ id: "a", text: "prenions", correct: true }, { id: "b", text: "avons pris", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quand j'étudiais", options: [{ id: "a", text: "Ben ders çalışırken", correct: true }, { id: "b", text: "Ben ders çalışacağım", correct: false }, { id: "c", text: "Ben ders çalıştım", correct: false }, { id: "d", text: "Ben ders çalışıyorum", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Marc ___ les informations à la télé.", options: [{ id: "a", text: "présentait", correct: true }, { id: "b", text: "a présenté", correct: false }] },
    { id: 8, type: "SELECT", question: "'La météo était terrible' hangi zaman?", options: [{ id: "a", text: "Imparfait", correct: true }, { id: "b", text: "Passé Composé", correct: false }, { id: "c", text: "Présent", correct: false }, { id: "d", text: "Futur", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "İnsanlar haberleri izliyordu", correctAnswer: "Les gens regardaient les infos" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y ___ beaucoup de vent.", options: [{ id: "a", text: "avait", correct: true }, { id: "b", text: "a eu", correct: false }] },
    { id: 11, type: "SELECT", question: "ÊTRE fiilinin Imparfait 'nous' çekimi nedir?", options: [{ id: "a", text: "Nous étions", correct: true }, { id: "b", text: "Nous sommes", correct: false }, { id: "c", text: "Nous étaient", correct: false }, { id: "d", text: "Nous étais", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Tout à coup, un chien ___.", options: [{ id: "a", text: "est sorti", correct: true }, { id: "b", text: "sortait", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Gazeteci insanlarla konuşuyordu", correctAnswer: "Le journaliste parlait avec les gens" },
    { id: 14, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Il y avait un accident", options: [{ id: "a", text: "Bir kaza vardı", correct: true }, { id: "b", text: "Bir kaza var", correct: false }, { id: "c", text: "Bir kaza oldu", correct: false }, { id: "d", text: "Bir kaza olacak", correct: false }] },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Quand j'___ jeune, je lisais beaucoup.", options: [{ id: "a", text: "étais", correct: true }, { id: "b", text: "ai été", correct: false }] },
    { id: 16, type: "SELECT", question: "Hangisi Imparfait eki DEĞİLDİR?", options: [{ id: "a", text: "-é", correct: true }, { id: "b", text: "-ais", correct: false }, { id: "c", text: "-ait", correct: false }, { id: "d", text: "-ions", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Dün akşam hava durumu berbattı", correctAnswer: "Hier soir la météo était terrible" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Les gens ___ inquiets.", options: [{ id: "a", text: "étaient", correct: true }, { id: "b", text: "ont été", correct: false }] },
    { id: 19, type: "SELECT", question: "'Nous kökü + ekler' formülüne uymayan tek fiil hangisidir?", options: [{ id: "a", text: "ÊTRE", correct: true }, { id: "b", text: "AVOIR", correct: false }, { id: "c", text: "ALLER", correct: false }, { id: "d", text: "FAIRE", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Evinizde kalın, fırtına devam edecek", correctAnswer: "Restez chez vous, la tempête va continuer" }
];

// UNIT 345: TV Programları & İlgi Zamirleri (Qui/Que)
// Quiz 1: KOLAY (20 Soru) - TV Kelime Hazinesi & Temel Qui/Que
const unit345Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'La télévision' ne demek?", options: [{ id: "a", text: "Telefon", correct: false }, { id: "b", text: "Televizyon", correct: true }, { id: "c", text: "Telgraf", correct: false }, { id: "d", text: "Tablet", correct: false }] },
    { id: 2, type: "SELECT", question: "'La télécommande' ne demek?", options: [{ id: "a", text: "Televizyon", correct: false }, { id: "b", text: "Uzaktan kumanda", correct: true }, { id: "c", text: "Telefon", correct: false }, { id: "d", text: "Anten", correct: false }] },
    { id: 3, type: "SELECT", question: "'La chaîne' ne demek?", options: [{ id: "a", text: "Reklam", correct: false }, { id: "b", text: "Program", correct: false }, { id: "c", text: "Kanal", correct: true }, { id: "d", text: "Dizi", correct: false }] },
    { id: 4, type: "SELECT", question: "'Les informations' ne demek?", options: [{ id: "a", text: "Haberler", correct: true }, { id: "b", text: "Reklamlar", correct: false }, { id: "c", text: "Diziler", correct: false }, { id: "d", text: "Filmler", correct: false }] },
    { id: 5, type: "SELECT", question: "'La série' ne demek?", options: [{ id: "a", text: "Film", correct: false }, { id: "b", text: "Belgesel", correct: false }, { id: "c", text: "Dizi", correct: true }, { id: "d", text: "Reklam", correct: false }] },
    { id: 6, type: "SELECT", question: "'Le documentaire' ne demek?", options: [{ id: "a", text: "Dizi", correct: false }, { id: "b", text: "Belgesel", correct: true }, { id: "c", text: "Komedi", correct: false }, { id: "d", text: "Haber", correct: false }] },
    { id: 7, type: "SELECT", question: "'L'émission' ne demek?", options: [{ id: "a", text: "TV Programı / Yayın", correct: true }, { id: "b", text: "Uzaktan kumanda", correct: false }, { id: "c", text: "Kanal", correct: false }, { id: "d", text: "Anten", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le présentateur' ne demek?", options: [{ id: "a", text: "Yönetmen", correct: false }, { id: "b", text: "Oyuncu", correct: false }, { id: "c", text: "Sunucu", correct: true }, { id: "d", text: "Seyirci", correct: false }] },
    { id: 9, type: "SELECT", question: "'La publicité' ne demek?", options: [{ id: "a", text: "Haber", correct: false }, { id: "b", text: "Reklam", correct: true }, { id: "c", text: "Dizi", correct: false }, { id: "d", text: "Belgesel", correct: false }] },
    { id: 10, type: "SELECT", question: "'Regarder' fiili ne anlama gelir?", options: [{ id: "a", text: "Dinlemek", correct: false }, { id: "b", text: "İzlemek", correct: true }, { id: "c", text: "Okumak", correct: false }, { id: "d", text: "Yazmak", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ la télé le soir.", options: [{ id: "a", text: "regarde", correct: true }, { id: "b", text: "écoute", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Passe-moi la ___.", options: [{ id: "a", text: "télécommande", correct: true }, { id: "b", text: "chaîne", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Change de ___, s'il te plaît.", options: [{ id: "a", text: "chaîne", correct: true }, { id: "b", text: "télé", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Les ___ commencent à 20 heures.", options: [{ id: "a", text: "informations", correct: true }, { id: "b", text: "publicités", correct: false }] },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Je déteste les ___.", options: [{ id: "a", text: "publicités", correct: true }, { id: "b", text: "chaînes", correct: false }] },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "TV izliyorum", correctAnswer: "Je regarde la télé" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Kumandayı ver", correctAnswer: "Passe-moi la télécommande" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kanal değiştir", correctAnswer: "Change de chaîne" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu programı seviyorum", correctAnswer: "J'aime cette émission" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Haberleri izleyelim", correctAnswer: "Regardons les informations" }
];

// Quiz 2: ORTA (20 Soru) - QUI ve QUE Temelleri & TV Bağlamı
const unit345Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "'Qui' neyin yerini tutar?", options: [{ id: "a", text: "Özne (Subject)", correct: true }, { id: "b", text: "Nesne (Object)", correct: false }, { id: "c", text: "Yer", correct: false }, { id: "d", text: "Zaman", correct: false }] },
    { id: 2, type: "SELECT", question: "'Que' neyin yerini tutar?", options: [{ id: "a", text: "Nesne (Object)", correct: true }, { id: "b", text: "Özne (Subject)", correct: false }, { id: "c", text: "Yer", correct: false }, { id: "d", text: "Zaman", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un programme ___ est populaire.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "L'émission ___ je regarde est géniale.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Le présentateur ___ parle est drôle.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "La série ___ j'adore commence ce soir.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Le documentaire ___ passe à la télé parle de la nature.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la publicité ___ je déteste.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 9, type: "SELECT", question: "'L'homme qui parle' - burada 'qui' neden kullanılır?", options: [{ id: "a", text: "L'homme özne, parle fiil → QUI", correct: true }, { id: "b", text: "L'homme nesne → QUE", correct: false }, { id: "c", text: "Rastgele seçilir", correct: false }, { id: "d", text: "Her zaman qui kullanılır", correct: false }] },
    { id: 10, type: "SELECT", question: "'Le film que je regarde' - burada 'que' neden kullanılır?", options: [{ id: "a", text: "Le film nesne, je özne → QUE", correct: true }, { id: "b", text: "Le film özne → QUI", correct: false }, { id: "c", text: "Fiilden önce hep que gelir", correct: false }, { id: "d", text: "Film kelimesiyle que kullanılır", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "İzlediğim dizi", correctAnswer: "La série que je regarde" },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Konuşan sunucu", correctAnswer: "Le présentateur qui parle" },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Sevdiğim program", correctAnswer: "L'émission que j'aime" },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Saat 20'de başlayan program", correctAnswer: "L'émission qui commence à 20 heures" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "La chaîne ___ diffuse ce programme est TF1.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est le programme ___ nous regardons chaque soir.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'émission qui commence", options: [{ id: "a", text: "Başlayan program", correct: true }, { id: "b", text: "İzlediğim program", correct: false }, { id: "c", text: "Biten program", correct: false }, { id: "d", text: "Sevdiğim program", correct: false }] },
    { id: 18, type: "SELECT", question: "Doğru cümle hangisi?", options: [{ id: "a", text: "Le documentaire qui parle de la nature", correct: true }, { id: "b", text: "Le documentaire que parle de la nature", correct: false }, { id: "c", text: "Le documentaire qui je parle", correct: false }, { id: "d", text: "Le documentaire que est intéressant", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Nefret ettiğim reklam", correctAnswer: "La publicité que je déteste" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Doğa hakkında konuşan belgesel", correctAnswer: "Le documentaire qui parle de la nature" }
];

// Quiz 3: ZOR (20 Soru) - Karmaşık QUI/QUE, Qu' Elision & TV Diyalogları
const unit345Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "Hangi durumda 'Que' → 'Qu'' olur?", options: [{ id: "a", text: "Sesli harften önce", correct: true }, { id: "b", text: "Sessiz harften önce", correct: false }, { id: "c", text: "Her zaman", correct: false }, { id: "d", text: "Asla değişmez", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est l'émission ___ il regarde tous les soirs.", options: [{ id: "a", text: "qu'", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Le présentateur ___ on voit aux informations est célèbre.", options: [{ id: "a", text: "qu'", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "La série ___ a gagné le prix est fantastique.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "qu'", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la télécommande ___ Antoine cherche.", options: [{ id: "a", text: "qu'", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Le documentaire ___ elle adore parle des animaux.", options: [{ id: "a", text: "qu'", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 7, type: "SELECT", question: "'C'est lui qui a changé de chaîne' - 'qui' burada ne yapar?", options: [{ id: "a", text: "Özneyi (lui) fiille bağlar", correct: true }, { id: "b", text: "Nesneyi bağlar", correct: false }, { id: "c", text: "Soru sorar", correct: false }, { id: "d", text: "Yer belirtir", correct: false }] },
    { id: 8, type: "SELECT", question: "'C'est l'émission qu'il préfère' - neden 'qu'' kullanılır?", options: [{ id: "a", text: "que + il → qu'il (sesli harf çakışması)", correct: true }, { id: "b", text: "Özne olduğu için", correct: false }, { id: "c", text: "Émission dişil olduğu için", correct: false }, { id: "d", text: "Préférer fiili özel olduğu için", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Onun izlediği dizi çok uzun", correctAnswer: "La série qu'il regarde est très longue" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Haberlerde konuşan kadın gazeteci", correctAnswer: "La journaliste qui parle aux informations" },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Nefret ettiğimiz reklam tekrar başladı", correctAnswer: "La publicité que nous détestons a recommencé" },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Her akşam yayınlanan program", correctAnswer: "L'émission qui passe tous les soirs" },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Les séries ___ passent le soir sont intéressantes.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Les publicités ___ nous voyons sont ennuyeuses.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 15, type: "SELECT", question: "Doğru cümle hangisi?", options: [{ id: "a", text: "C'est l'émission qu'elle aime", correct: true }, { id: "b", text: "C'est l'émission que elle aime", correct: false }, { id: "c", text: "C'est l'émission qui elle aime", correct: false }, { id: "d", text: "C'est l'émission qu'aime elle", correct: false }] },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est le documentaire qu'il adore", options: [{ id: "a", text: "Bayıldığı belgesel bu", correct: true }, { id: "b", text: "Belgesel başlıyor", correct: false }, { id: "c", text: "Nefret ettiği belgesel", correct: false }, { id: "d", text: "Belgesel güzel", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Kanal değiştiren kişi Antoine", correctAnswer: "La personne qui change de chaîne est Antoine" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Sevmediğim sunucu çok konuşuyor", correctAnswer: "Le présentateur que je n'aime pas parle trop" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est le meilleur programme ___ j'ai vu cette semaine.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Le film ___ commence à 21h est un film d'action.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] }
];

// Quiz 4: KARIŞIK DEĞERLENDİRME (20 Soru) - Tüm TV Kelime + QUI/QUE Genel Tekrar
const unit345Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'La télé' hangi kelimenin kısaltmasıdır?", options: [{ id: "a", text: "La télécommande", correct: false }, { id: "b", text: "La télévision", correct: true }, { id: "c", text: "Le téléphone", correct: false }, { id: "d", text: "Le télégramme", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "L'émission ___ passe ce soir est un documentaire.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "İzlediğim belgesel çok güzel", correctAnswer: "Le documentaire que je regarde est très beau" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la série ___ tout le monde aime.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 5, type: "SELECT", question: "'Qui' den sonra ne gelir?", options: [{ id: "a", text: "Fiil (eylem)", correct: true }, { id: "b", text: "Özne (kişi)", correct: false }, { id: "c", text: "Sıfat", correct: false }, { id: "d", text: "Edat", correct: false }] },
    { id: 6, type: "SELECT", question: "'Que' den sonra ne gelir?", options: [{ id: "a", text: "Özne (kişi)", correct: true }, { id: "b", text: "Fiil (eylem)", correct: false }, { id: "c", text: "Sıfat", correct: false }, { id: "d", text: "Edat", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Passe-moi la télécommande", options: [{ id: "a", text: "Bana kumandayı uzat", correct: true }, { id: "b", text: "Kanalı değiştir", correct: false }, { id: "c", text: "TV'yi kapat", correct: false }, { id: "d", text: "Haberleri aç", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Le présentateur ___ je n'aime pas parle trop.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Başlayan program benim favorim", correctAnswer: "L'émission qui commence est ma préférée" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un documentaire ___ parle de la nature.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Bayıldığım dizi saat 20'de başlıyor", correctAnswer: "La série que j'adore commence à 20 heures" },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "La publicité ___ nous détestons est très longue.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 13, type: "SELECT", question: "Hangi cümle dilbilgisine uygun?", options: [{ id: "a", text: "Le programme qui commence", correct: true }, { id: "b", text: "Le programme que commence", correct: false }, { id: "c", text: "Le programme qui je commence", correct: false }, { id: "d", text: "Le programme que est bon", correct: false }] },
    { id: 14, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La série que j'adore", options: [{ id: "a", text: "Bayıldığım dizi", correct: true }, { id: "b", text: "İzlediğim film", correct: false }, { id: "c", text: "Sevdiğim müzik", correct: false }, { id: "d", text: "Nefret ettiğim reklam", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Haberlerde konuşan adam kim?", correctAnswer: "Qui est l'homme qui parle aux informations?" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la chaîne ___ diffuse les meilleurs documentaires.", options: [{ id: "a", text: "qui", correct: true }, { id: "b", text: "que", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Onun seçtiği film çok sıkıcı", correctAnswer: "Le film qu'il a choisi est très ennuyeux" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Les informations ___ je regarde sont à 20 heures.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    { id: 19, type: "SELECT", question: "'L'émission qu'elle regarde' cümlesinde neden 'qu'' kullanılır?", options: [{ id: "a", text: "que + elle → qu'elle (sesli harf birleşimi)", correct: true }, { id: "b", text: "Émission dişil olduğu için", correct: false }, { id: "c", text: "Elle özne olduğu için", correct: false }, { id: "d", text: "Regarder fiili özel olduğu için", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bu akşam TV'de ne var?", correctAnswer: "Qu'est-ce qu'il y a ce soir à la télé?" }
];

// UNIT 346: Üstünlük Derecesi (Superlatives)
const unit346Quiz1: Question[] = [
    // KOLAY (20 Soru) - Sinema Sözlüğü ve Temel Çeviriler
    { id: 1, type: "SELECT", question: "'Le film' ne demektir?", options: [{ id: "a", text: "Tiyatro", correct: false }, { id: "b", text: "Film", correct: true }, { id: "c", text: "Yönetmen", correct: false }, { id: "d", text: "Kitap", correct: false }] },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Bu bir aksiyon filmi", correctAnswer: "C'est un film d'action" },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Je regarde une ___ amusante.", options: [{ id: "a", text: "comédie", correct: true }, { id: "b", text: "film", correct: false }] },
    { id: 4, type: "SELECT", question: "Hangi tür film genellikle korkutucudur?", options: [{ id: "a", text: "Une comédie", correct: false }, { id: "b", text: "Un documentaire", correct: false }, { id: "c", text: "Un film d'horreur", correct: true }, { id: "d", text: "Un dessin animé", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Çizgi film izlemeyi seviyorum", correctAnswer: "J'aime regarder un dessin animé" },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Qui est le ___ de ce film?", options: [{ id: "a", text: "réalisateur", correct: true }, { id: "b", text: "comédie", correct: false }] },
    { id: 7, type: "SELECT", question: "'L'acteur' ne demektir?", options: [{ id: "a", text: "Kadın Oyuncu", correct: false }, { id: "b", text: "Erkek Oyuncu", correct: true }, { id: "c", text: "Yönetmen", correct: false }, { id: "d", text: "Senaryo", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Bu aktör çok ünlü", correctAnswer: "Cet acteur est très célèbre" },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon frère regarde un ___ sur les animaux.", options: [{ id: "a", text: "documentaire", correct: true }, { id: "b", text: "dessin", correct: false }] },
    { id: 10, type: "SELECT", question: "Hangi kelime 'Kadın Oyuncu' anlamına gelir?", options: [{ id: "a", text: "L'acteur", correct: false }, { id: "b", text: "L'actrice", correct: true }, { id: "c", text: "Le réalisateur", correct: false }, { id: "d", text: "Le film", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Sinemaya gidiyoruz", correctAnswer: "Nous allons au cinéma" },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un film ___.", options: [{ id: "a", text: "d'action", correct: true }, { id: "b", text: "action", correct: false }] },
    { id: 13, type: "SELECT", question: "'Belgesel'in Fransızcası nedir?", options: [{ id: "a", text: "Le documentaire", correct: true }, { id: "b", text: "La comédie", correct: false }, { id: "c", text: "Le dessin animé", correct: false }, { id: "d", text: "L'horreur", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Filmin yönetmeni kim?", correctAnswer: "Qui est le réalisateur du film?" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "J'adore les ___ romantiques.", options: [{ id: "a", text: "comédies", correct: true }, { id: "b", text: "documentaires", correct: false }] },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Un film d'action", options: [{ id: "a", text: "Bir aksiyon filmi", correct: true }, { id: "b", text: "Bir korku filmi", correct: false }, { id: "c", text: "Bir komedi", correct: false }, { id: "d", text: "Bir belgesel", correct: false }] },
    { id: 17, type: "SELECT", question: "'Le scénario' ne demektir?", options: [{ id: "a", text: "Yönetmen", correct: false }, { id: "b", text: "Senaryo", correct: true }, { id: "c", text: "Oyuncu", correct: false }, { id: "d", text: "Film", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Korku filmi", correctAnswer: "Un film d'horreur" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle est une bonne ___.", options: [{ id: "a", text: "actrice", correct: true }, { id: "b", text: "acteur", correct: false }] },
    { id: 20, type: "SELECT", question: "Aşağıdakilerden hangisi bir film türü DEĞİLDİR?", options: [{ id: "a", text: "La comédie", correct: false }, { id: "b", text: "Le journal", correct: true }, { id: "c", text: "Le documentaire", correct: false }, { id: "d", text: "Le film d'action", correct: false }] }
];

const unit346Quiz2: Question[] = [
    // ORTA (20 Soru) - Le Superlatif: Le Plus / La Plus
    { id: 1, type: "SELECT", question: "'En büyük' nasıl söylenir?", options: [{ id: "a", text: "Trés grand", correct: false }, { id: "b", text: "Plus grand", correct: false }, { id: "c", text: "Le plus grand", correct: true }, { id: "d", text: "Moins grand", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est l'homme ___ plus riche.", options: [{ id: "a", text: "le", correct: true }, { id: "b", text: "la", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "En ünlü oyuncu", correctAnswer: "L'acteur le plus célèbre" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "La voiture ___ plus rapide.", options: [{ id: "a", text: "la", correct: true }, { id: "b", text: "le", correct: false }] },
    { id: 5, type: "SELECT", question: "Fransızca'da Superlatif yaparken ne kullanılır?", options: [{ id: "a", text: "Le/La/Les + Plus/Moins + Sıfat", correct: true }, { id: "b", text: "Très + Sıfat", correct: false }, { id: "c", text: "Sıfat + est", correct: false }, { id: "d", text: "Beaucoup + Sıfat", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils sont ___ plus forts.", options: [{ id: "a", text: "les", correct: true }, { id: "b", text: "des", correct: false }] },
    { id: 7, type: "TRANSLATE", question: "Çevir:", hint: "En komik komedi", correctAnswer: "La comédie la plus amusante" },
    { id: 8, type: "SELECT", question: "'Le moins intéressant' ne anlama gelir?", options: [{ id: "a", text: "En ilginç", correct: false }, { id: "b", text: "İlginç", correct: false }, { id: "c", text: "Daha az ilginç", correct: false }, { id: "d", text: "En az ilginç (En sıkıcı)", correct: true }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est le film ___ plus long.", options: [{ id: "a", text: "le", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Bu hayvan dünyanın en büyüğüdür", correctAnswer: "Cet animal est le plus grand du monde" },
    { id: 11, type: "SELECT", question: "Hangi cümle doğrudur?", options: [{ id: "a", text: "Marie est la plus belle.", correct: true }, { id: "b", text: "Marie est le plus belle.", correct: false }, { id: "c", text: "Marie est la très belle.", correct: false }, { id: "d", text: "Marie est la moins beau.", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Le chat est ___ plus petit que le chien.", options: [{ id: "a", text: "le", correct: false }, { id: "b", text: "[Boş bırakınız - Sadece karşılaştırmada 'plus' kullanılır]", correct: true }] }, // Trick question replaced
    // Wait, replacing trick question to avoid confusion. Let's use a clear superlative.
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est le garçon ___ plus intelligent.", options: [{ id: "a", text: "le", correct: true }, { id: "b", text: "la", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "En sıcak yaz", correctAnswer: "L'été le plus chaud" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "La fille ___ moins timide.", options: [{ id: "a", text: "la", correct: true }, { id: "b", text: "le", correct: false }] },
    { id: 15, type: "SELECT", question: "Aşağıdakilerden hangisi 'En ucuz' anlamına gelir?", options: [{ id: "a", text: "Le plus cher", correct: false }, { id: "b", text: "Le moins cher", correct: true }, { id: "c", text: "Plus cher", correct: false }, { id: "d", text: "Très cher", correct: false }] },
    { id: 16, type: "LISTENING", question: "Duyduğunu seç:", audioText: "L'acteur le plus beau", options: [{ id: "a", text: "En yakışıklı oyuncu", correct: true }, { id: "b", text: "En iyi oyuncu", correct: false }, { id: "c", text: "Güzel oyuncu", correct: false }, { id: "d", text: "En yaşlı oyuncu", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "En hızlı araba", correctAnswer: "La voiture la plus rapide" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Ces chaussures sont ___ plus chères.", options: [{ id: "a", text: "les", correct: true }, { id: "b", text: "la", correct: false }] },
    { id: 19, type: "SELECT", question: "Cinsiyet uyumuna göre 'O (kadın) en akıllısıdır' nasıl çevrilir?", options: [{ id: "a", text: "Elle est le plus intelligent.", correct: false }, { id: "b", text: "Elle est la plus intelligente.", correct: true }, { id: "c", text: "Il est le plus inteligente.", correct: false }, { id: "d", text: "Elle est très intelligente.", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "En az orijinal senaryo", correctAnswer: "Le scénario le moins original" }
];

const unit346Quiz3: Question[] = [
    // ZOR (20 Soru) - Le meilleur / La meilleure (İstisnalar)
    { id: 1, type: "SELECT", question: "'Le plus bon' yerine Fransızca'da ne kullanılır?", options: [{ id: "a", text: "Le bien", correct: false }, { id: "b", text: "Le mieux", correct: false }, { id: "c", text: "Le meilleur", correct: true }, { id: "d", text: "Très bon", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la ___ comédie de l'année.", options: [{ id: "a", text: "meilleure", correct: true }, { id: "b", text: "meilleur", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "En iyi film", correctAnswer: "Le meilleur film" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce sont les ___ joueurs.", options: [{ id: "a", text: "meilleurs", correct: true }, { id: "b", text: "mieux", correct: false }] },
    { id: 5, type: "SELECT", question: "'Dünyanın en iyi yönetmeni' nasıl söylenir?", options: [{ id: "a", text: "Le meilleur réalisateur du monde", correct: true }, { id: "b", text: "Le plus bon réalisateur", correct: false }, { id: "c", text: "Le mieux réalisateur", correct: false }, { id: "d", text: "Le réalisateur très bon", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "La pizza italienne est la ___.", options: [{ id: "a", text: "meilleure", correct: true }, { id: "b", text: "plus bonne", correct: false }] },
    { id: 7, type: "TRANSLATE", question: "Çevir:", hint: "Bunlar en iyi fikirler", correctAnswer: "Ce sont les meilleures idées" },
    { id: 8, type: "SELECT", question: "'La pire' ne anlama gelir?", options: [{ id: "a", text: "En iyi", correct: false }, { id: "b", text: "En uzun", correct: false }, { id: "c", text: "En kötü (İstisna)", correct: true }, { id: "d", text: "En hızlı", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est mon ___ ami.", options: [{ id: "a", text: "meilleur", correct: true }, { id: "b", text: "mieux", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Benim en iyi arkadaşım (kız)", correctAnswer: "Ma meilleure amie" },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Le meilleur film", options: [{ id: "a", text: "En iyi film", correct: true }, { id: "b", text: "Aksiyon filmi", correct: false }, { id: "c", text: "Harika film", correct: false }, { id: "d", text: "Uzun film", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est le ___ de la classe.", options: [{ id: "a", text: "meilleur", correct: true }, { id: "b", text: "plus", correct: false }] },
    { id: 13, type: "SELECT", question: "Hangi cümle dilbilgisine uygundur?", options: [{ id: "a", text: "Mon frère est le plus bon.", correct: false }, { id: "b", text: "Mon frère est le meilleur.", correct: true }, { id: "c", text: "Mon frère est le mieux.", correct: false }, { id: "d", text: "Mon frère est la meilleure.", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Bu izlediğim en kötü film", correctAnswer: "C'est le pire film que j'ai vu" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la ___ décision.", options: [{ id: "a", text: "meilleure", correct: true }, { id: "b", text: "mieux", correct: false }] },
    { id: 16, type: "SELECT", question: "Çoğul ve eril 'en iyiler' demek için hangisi kullanılır?", options: [{ id: "a", text: "Les meilleurs", correct: true }, { id: "b", text: "Les meilleures", correct: false }, { id: "c", text: "Le meilleur", correct: false }, { id: "d", text: "Les plus bons", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Onlar (kadınlar) en iyiler", correctAnswer: "Elles sont les meilleures" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce restaurant est le ___ de la ville.", options: [{ id: "a", text: "meilleur", correct: true }, { id: "b", text: "pire", correct: false }, { id: "c", text: "plus bon", correct: false }] }, // Accepting a/b logically, but marking a
    { id: 19, type: "SELECT", question: "Le pire ve Le meilleur sıfatları isimden ÖNCE mi SONRA mı gelir?", options: [{ id: "a", text: "İsimden SONRA (Le film meilleur)", correct: false }, { id: "b", text: "İsimden ÖNCE (Le meilleur film)", correct: true }, { id: "c", text: "Fark etmez", correct: false }, { id: "d", text: "İsim kullanılmaz", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "En iyi korku filmi", correctAnswer: "Le meilleur film d'horreur" }
];

const unit346Quiz4: Question[] = [
    // KARIŞIK DEĞERLENDİRME (20 Soru) - Sinema & Le Superlatif
    { id: 1, type: "SELECT", question: "'Senaryo en az orijinal olanı' cümlesinin çevirisi nedir?", options: [{ id: "a", text: "Le scénario est très original.", correct: false }, { id: "b", text: "Le scénario est le plus original.", correct: false }, { id: "c", text: "Le scénario est le moins original.", correct: true }, { id: "d", text: "C'est un scénario original.", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est l'actrice la ___ célèbre.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "moins de", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "En sevdiğim film bir belgesel", correctAnswer: "Mon film préféré est un documentaire" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la ___ film de l'année. (Dikkat: Film eril!)", options: [{ id: "a", text: "meilleur", correct: false }, { id: "b", text: "Le meilleur", correct: true }] }, // Re-formatted as multiple choice
    // Reformat question 4 properly
    { id: 4, type: "SELECT", question: "Boşluğa ne gelmelidir? 'C'est ___ film de l'année.'", options: [{ id: "a", text: "la meilleure", correct: false }, { id: "b", text: "le meilleur", correct: true }, { id: "c", text: "les meilleurs", correct: false }, { id: "d", text: "le plus bon", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "O en yetenekli yönetmen", correctAnswer: "Il est le réalisateur le plus talentueux" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une comédie amusante", options: [{ id: "a", text: "Eğlenceli bir komedi", correct: true }, { id: "b", text: "Korkunç bir film", correct: false }, { id: "c", text: "Uzun bir belgesel", correct: false }, { id: "d", text: "Harika bir senaryo", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "La tortue est l'animal le ___ rapide.", options: [{ id: "a", text: "moins", correct: true }, { id: "b", text: "plus", correct: false }] },
    { id: 8, type: "SELECT", question: "Hangisi 'Aksiyon filmi' demektir?", options: [{ id: "a", text: "Un dessin animé", correct: false }, { id: "b", text: "Une comédie", correct: false }, { id: "c", text: "Un film d'action", correct: true }, { id: "d", text: "Un documentaire", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Bu en uzun film", correctAnswer: "C'est le film le plus long" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est la ___ d'horreur que je connais.", options: [{ id: "a", text: "pire", correct: true }, { id: "b", text: "meilleur", correct: false }] },
    { id: 11, type: "SELECT", question: "Superlatif kuralına göre sıfat ismin sağında ise tanımlık (article) kaç kez kullanılır?", options: [{ id: "a", text: "Bir kez (Le chien plus grand)", correct: false }, { id: "b", text: "İki kez (Le chien le plus grand)", correct: true }, { id: "c", text: "Kullanılmaz", correct: false }, { id: "d", text: "Sadece sonda", correct: false }] },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Dünyanın en güzel müziği", correctAnswer: "La plus belle musique du monde" },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Ces acteurs sont les ___ connus.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "le", correct: false }] },
    { id: 14, type: "SELECT", question: "'Le plus souvent' cümlesinin manası nedir?", options: [{ id: "a", text: "Çoğu kez / Sıklıkla", correct: true }, { id: "b", text: "Yavaşça", correct: false }, { id: "c", text: "Hiçbir zaman", correct: false }, { id: "d", text: "Bu sabah", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "En kısa yoldan", correctAnswer: "Par le chemin le plus court" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est l'histoire la ___ triste.", options: [{ id: "a", text: "plus", correct: true }, { id: "b", text: "moins de", correct: false }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "C'est le meilleur film d'horreur", options: [{ id: "a", text: "Bu en iyi korku filmidir", correct: true }, { id: "b", text: "Bu en ilginç belgeseldir", correct: false }, { id: "c", text: "Bu çok kötü bir film", correct: false }, { id: "d", text: "Bu harika bir komedi", correct: false }] },
    { id: 18, type: "SELECT", question: "Hangisinde anlamca zıtlık vardır?", options: [{ id: "a", text: "Le plus - Le moins", correct: true }, { id: "b", text: "Le meilleur - Le plus", correct: false }, { id: "c", text: "La pire - Le moins", correct: false }, { id: "d", text: "Le plus - Très", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "İzlediğim en iyi komediydi", correctAnswer: "C'était la meilleure comédie que j'ai vue" },
    { id: 20, type: "FILL_BLANK", question: "Doldur:", sentence: "Quel est ton ___ préféré?", options: [{ id: "a", text: "réalisateur", correct: true }, { id: "b", text: "cinéma", correct: false }] }
];

// UNIT 347: Müzik Zevkleri (Jouer de / Depuis)
const unit347Quiz1: Question[] = [
    // KOLAY-ORTA-ZOR (20 Soru) - Müzik Sözlüğü ve Genel Sorular
    { id: 1, type: "SELECT", question: "'Müzik' kelimesinin Fransızcası nedir?", options: [{ id: "a", text: "Le chanson", correct: false }, { id: "b", text: "La musique", correct: true }, { id: "c", text: "Le groupe", correct: false }, { id: "d", text: "Le son", correct: false }] },
    { id: 2, type: "TRANSLATE", question: "Çevir:", hint: "Rock müzik dinliyorum", correctAnswer: "J'écoute du rock" },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon ___ préféré est français.", options: [{ id: "a", text: "groupe", correct: true }, { id: "b", text: "musique", correct: false }] },
    { id: 4, type: "SELECT", question: "'Şarkı' kelimesinin Fransızcası nedir?", options: [{ id: "a", text: "La voix", correct: false }, { id: "b", text: "La chanson", correct: true }, { id: "c", text: "Le chanteur", correct: false }, { id: "d", text: "La guitare", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Bu benim favori şarkım", correctAnswer: "C'est ma chanson préférée" },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Il aime la musique ___.", options: [{ id: "a", text: "classique", correct: true }, { id: "b", text: "chanson", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le chanteur' ne anlama gelir?", options: [{ id: "a", text: "Şarkıcı", correct: true }, { id: "b", text: "Grup", correct: false }, { id: "c", text: "Müzisyen", correct: false }, { id: "d", text: "Şarkı", correct: false }] },
    { id: 8, type: "TRANSLATE", question: "Çevir:", hint: "Konsere gidiyoruz", correctAnswer: "Nous allons au concert" },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai acheté leur nouvel ___.", options: [{ id: "a", text: "album", correct: true }, { id: "b", text: "concert", correct: false }] },
    { id: 10, type: "SELECT", question: "Hangi enstrüman 'bateri/davul' anlamına gelir?", options: [{ id: "a", text: "Le piano", correct: false }, { id: "b", text: "La guitare", correct: false }, { id: "c", text: "La batterie", correct: true }, { id: "d", text: "Le violon", correct: false }] },
    { id: 11, type: "TRANSLATE", question: "Çevir:", hint: "Onların iyi bir sesi var", correctAnswer: "Ils ont une bonne voix" },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle chante très ___.", options: [{ id: "a", text: "bien", correct: true }, { id: "b", text: "bon", correct: false }] },
    { id: 13, type: "SELECT", question: "'Quel genre de musique aimes-tu?' ne demek?", options: [{ id: "a", text: "Ne zamandır müzik dinliyorsun?", correct: false }, { id: "b", text: "Ne tür müzik seversin?", correct: true }, { id: "c", text: "Hangi grubu seviyorsun?", correct: false }, { id: "d", text: "Enstrüman çalıyor musun?", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Pop müzik ruhu dinlendirir", correctAnswer: "La musique pop calme l'esprit" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu écoutes la ___ à la radio?", options: [{ id: "a", text: "musique", correct: true }, { id: "b", text: "rock", correct: false }] },
    { id: 16, type: "SELECT", question: "Aşağıdakilerden hangisi bir müzik türü değildir?", options: [{ id: "a", text: "Le jazz", correct: false }, { id: "b", text: "La pop", correct: false }, { id: "c", text: "Le cinéma", correct: true }, { id: "d", text: "Le rock", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Birlikte şarkı söyleyelim", correctAnswer: "Chantons ensemble" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est magnifique ce soir.", options: [{ id: "a", text: "concert", correct: true }, { id: "b", text: "chanson", correct: false }] },
    { id: 19, type: "SELECT", question: "Müzisyen grubu için kullanılan kelime nedir?", options: [{ id: "a", text: "L'équipe", correct: false }, { id: "b", text: "Le groupe", correct: true }, { id: "c", text: "La bande", correct: false }, { id: "d", text: "Le club", correct: false }] },
    { id: 20, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Une belle chanson", options: [{ id: "a", text: "Güzel bir şarkı", correct: true }, { id: "b", text: "İyi bir müzik", correct: false }, { id: "c", text: "Harika bir grup", correct: false }, { id: "d", text: "Pop müzik", correct: false }] }
];

const unit347Quiz2: Question[] = [
    // KOLAY-ORTA-ZOR (20 Soru) - Jouer DE (Enstrümanlar)
    { id: 1, type: "SELECT", question: "Müzik aleti çalarken Jouer fiili hangi edatı alır?", options: [{ id: "a", text: "À", correct: false }, { id: "b", text: "De", correct: true }, { id: "c", text: "Pour", correct: false }, { id: "d", text: "En", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Je joue ___ piano.", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Gitar çalıyorum", correctAnswer: "Je joue de la guitare" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle joue ___ batterie.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 5, type: "SELECT", question: "'Il joue de la guitare' ne demek?", options: [{ id: "a", text: "O gitar alıyor", correct: false }, { id: "b", text: "O gitarla oynuyor", correct: false }, { id: "c", text: "O gitar çalıyor", correct: true }, { id: "d", text: "O klasik müzik dinler", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous jouons ___ violon.", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 7, type: "TRANSLATE", question: "Çevir:", hint: "Bir enstrüman çalıyor musun?", correctAnswer: "Tu joues d'un instrument?" },
    { id: 8, type: "SELECT", question: "Hangi cümle doğrudur?", options: [{ id: "a", text: "Je joue au piano", correct: false }, { id: "b", text: "Je joue le piano", correct: false }, { id: "c", text: "Je joue du piano", correct: true }, { id: "d", text: "Je fais piano", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous jouez ___ flûte?", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Arkadaşım davul çalıyor", correctAnswer: "Mon ami joue de la batterie" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils apprennent à jouer ___ piano.", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "le", correct: false }] },
    { id: 12, type: "SELECT", question: "'Gitar çalmayı severim' nasıl söylenir?", options: [{ id: "a", text: "J'aime faire la guitare", correct: false }, { id: "b", text: "J'aime écouter la guitare", correct: false }, { id: "c", text: "J'aime jouer de la guitare", correct: true }, { id: "d", text: "J'aime jouer à la guitare", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "O saksafon çalıyor", correctAnswer: "Il joue du saxophone" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Ma sœur joue ___ trompette.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "à la", correct: false }] },
    { id: 15, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je joue du piano", options: [{ id: "a", text: "Piyano çalıyorum", correct: true }, { id: "b", text: "Piyano dinliyorum", correct: false }, { id: "c", text: "Gitar çalıyorum", correct: false }, { id: "d", text: "Rock dinliyorum", correct: false }] },
    { id: 16, type: "SELECT", question: "'Instrument' (enstrüman) kelimesinin önüne hangi artikeller gelir?", options: [{ id: "a", text: "Un / L' (Erkek)", correct: true }, { id: "b", text: "Une / La (Dişi)", correct: false }, { id: "c", text: "Des (Çoğul)", correct: false }, { id: "d", text: "Hiçbiri", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Çocuklar gitar çalıyor", correctAnswer: "Les enfants jouent de la guitare" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "On joue ___ piano ce soir.", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 19, type: "SELECT", question: "Hangisi doğrudur?", options: [{ id: "a", text: "Jouer à la guitare", correct: false }, { id: "b", text: "Jouer de la guitare", correct: true }, { id: "c", text: "Jouer du guitare", correct: false }, { id: "d", text: "Jouer des guitares", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Birlikte piyano çalıyoruz", correctAnswer: "Nous jouons du piano ensemble" }
];

const unit347Quiz3: Question[] = [
    // KOLAY-ORTA-ZOR (20 Soru) - Depuis (Zaman ve Süreklilik)
    { id: 1, type: "SELECT", question: "Geçmişte başlayıp hala devam eden eylemler için hangi edat kullanılır?", options: [{ id: "a", text: "Pour", correct: false }, { id: "b", text: "Dans", correct: false }, { id: "c", text: "Depuis", correct: true }, { id: "d", text: "Pendant", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "J'habite ici ___ cinq ans.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pendant", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "2015'ten beri", correctAnswer: "Depuis 2015" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Il m'attend ___ une heure.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 5, type: "SELECT", question: "Depuis ile Fransızca'da genellikle hangi zaman kipi kullanılır?", options: [{ id: "a", text: "Gelecek (Futur)", correct: false }, { id: "b", text: "Geçmiş (Passé Composé)", correct: false }, { id: "c", text: "Şimdiki/Geniş (Présent)", correct: true }, { id: "d", text: "Emir (Impératif)", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous regardons le film ___ 20h.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "il y a", correct: false }] },
    { id: 7, type: "TRANSLATE", question: "Çevir:", hint: "Çocukluğumdan beri", correctAnswer: "Depuis mon enfance" },
    { id: 8, type: "SELECT", question: "'Depuis quand?' ne demek?", options: [{ id: "a", text: "Ne zamandan beri?", correct: true }, { id: "b", text: "Nereye kadar?", correct: false }, { id: "c", text: "Ne zaman gideceksin?", correct: false }, { id: "d", text: "Ne kadar süreyle?", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu l'aimes ___ longtemps?", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pendant", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Sabahtan beri yağmur yağıyor", correctAnswer: "Il pleut depuis ce matin" },
    { id: 11, type: "SELECT", question: "Aşağıdakilerden hangisi bir süreklilik belirtir?", options: [{ id: "a", text: "Hier", correct: false }, { id: "b", text: "Demain", correct: false }, { id: "c", text: "Depuis trois mois", correct: true }, { id: "d", text: "Une fois", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle travaille ___ lundi.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Onu dün akşamdan beri görmedim", correctAnswer: "Je ne l'ai pas vu depuis hier soir" },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis fatigué ___ hier.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "il y a", correct: false }] },
    { id: 15, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Depuis toujours", options: [{ id: "a", text: "Her zaman", correct: true }, { id: "b", text: "Bazen", correct: false }, { id: "c", text: "Hiçbir zaman", correct: false }, { id: "d", text: "Yarın", correct: false }] },
    { id: 16, type: "SELECT", question: "'Depuis longtemps' ne demek?", options: [{ id: "a", text: "Kısa bir süre önce", correct: false }, { id: "b", text: "Uzun zamandır", correct: true }, { id: "c", text: "Şimdi", correct: false }, { id: "d", text: "Yavaşça", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Üç yıldır Fransızca öğreniyorum", correctAnswer: "J'apprends le français depuis trois ans" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Le chat dort ___ ce matin.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "dans", correct: false }] },
    { id: 19, type: "SELECT", question: "Hangisi yanlıştır?", options: [{ id: "a", text: "Depuis lundi", correct: false }, { id: "b", text: "Depuis demain", correct: true }, { id: "c", text: "Depuis 2010", correct: false }, { id: "d", text: "Depuis trois ans", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İki haftadır buradayız", correctAnswer: "Nous sommes ici depuis deux semaines" }
];

const unit347Quiz4: Question[] = [
    // KARIŞIK (20 Soru) - Müzik + Jouer de + Depuis
    { id: 1, type: "SELECT", question: "Hangi cümle dilbilgisi kurallarına uygundur?", options: [{ id: "a", text: "Je joue au piano depuis 5 ans.", correct: false }, { id: "b", text: "Je joue du piano depuis 5 ans.", correct: true }, { id: "c", text: "Je fait du piano pour 5 ans.", correct: false }, { id: "d", text: "Je joue la guitare.", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle chante ___ l'âge de dix ans.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pendant", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "O 2012'den beri rock müzik dinler", correctAnswer: "Il écoute du rock depuis 2012" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ de la batterie?", options: [{ id: "a", text: "joues", correct: true }, { id: "b", text: "fais", correct: false }] },
    { id: 5, type: "SELECT", question: "'Uzun zamandır konser vermiyoruz' nasıl söylenir?", options: [{ id: "a", text: "Nous ne donnons pas de concert depuis longtemps.", correct: true }, { id: "b", text: "Nous jouons un concert depuis toujours.", correct: false }, { id: "c", text: "Nous faisons un concert.", correct: false }, { id: "d", text: "Le concert est long.", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Le groupe joue ___ deux heures.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 7, type: "TRANSLATE", question: "Çevir:", hint: "Bu benim favori gitarım", correctAnswer: "C'est ma guitare préférée" },
    { id: 8, type: "SELECT", question: "'Depuis quand tu joues du piano?' cümlesinin anlamı nedir?", options: [{ id: "a", text: "Ne zamandan beri gitar çalıyorsun?", correct: false }, { id: "b", text: "Ne zamandan beri piyano çalıyorsun?", correct: true }, { id: "c", text: "Piyanoyu seviyor musun?", correct: false }, { id: "d", text: "Piyano nerede?", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je l'écoute ___ mon enfance.", options: [{ id: "a", text: "depuis", correct: true }, { id: "b", text: "pour", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Beş yıldır bu gruptayız", correctAnswer: "Nous sommes dans ce groupe depuis cinq ans" },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je joue de la guitare depuis trois ans", options: [{ id: "a", text: "Üç yıldır gitar çalıyorum", correct: true }, { id: "b", text: "Piyano çalmayı severim", correct: false }, { id: "c", text: "Gitar satıyorum", correct: false }, { id: "d", text: "Konsere üç gün kaldı", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu as acheté le nouvel ___ ?", options: [{ id: "a", text: "album", correct: true }, { id: "b", text: "chanteur", correct: false }] },
    { id: 13, type: "SELECT", question: "Hangisi bir süre zarfı ile birleştirilmiş müzikal eylemdir?", options: [{ id: "a", text: "Je joue du piano", correct: false }, { id: "b", text: "Je joue de la musique", correct: false }, { id: "c", text: "Je joue de la batterie depuis hier", correct: true }, { id: "d", text: "J'aime le rock", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Bu şarkıyı çok seviyorum.", correctAnswer: "J'aime beaucoup cette chanson" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous écoutons de la musique ___.", options: [{ id: "a", text: "classique", correct: true }, { id: "b", text: "concert", correct: false }] },
    { id: 16, type: "SELECT", question: "'Je fais de la musique' ve 'Je joue du piano' arasındaki asıl fark nedir?", options: [{ id: "a", text: "Fark yoktur.", correct: false }, { id: "b", text: "İlki 'müzik yapıyorum', ikincisi 'piyano çalıyorum' demektir.", correct: true }, { id: "c", text: "İkisi de 'müzik yapıyorum' demektir.", correct: false }, { id: "d", text: "İlki geçmiş zaman, ikincisi gelecek zamandır.", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "O sabahları rock dinler", correctAnswer: "Il écoute du rock le matin" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ du piano depuis longtemps.", options: [{ id: "a", text: "joue", correct: true }, { id: "b", text: "fais", correct: false }] },
    { id: 19, type: "SELECT", question: "Hangisi Fransızca bir müzik terimi değildir?", options: [{ id: "a", text: "Le clavier", correct: false }, { id: "b", text: "Le billet", correct: true }, { id: "c", text: "Le guitariste", correct: false }, { id: "d", text: "La symphonie", correct: false }] },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Ne tür müzik seversin?", correctAnswer: "Quel genre de musique aimes-tu?" }
];

// UNIT 348: Spor Aktiviteleri (Jouer à / Faire de)
const unit348Quiz1: Question[] = [
    // KOLAY-ORTA-ZOR (20 Soru) - JOUER (Takım ve Toplu Oyunlar)
    { id: 1, type: "SELECT", question: "Toplu ve takım sporlarında hangi fiil tercih edilir?", options: [{ id: "a", text: "Faire", correct: false }, { id: "b", text: "Jouer", correct: true }, { id: "c", text: "Aller", correct: false }, { id: "d", text: "Aimer", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Il joue ___ foot avec ses amis.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Biz tenis oynuyoruz", correctAnswer: "Nous jouons au tennis" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle joue ___ volley-ball.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "à la", correct: false }] },
    { id: 5, type: "SELECT", question: "'Le ballon' ne demek?", options: [{ id: "a", text: "Oyun", correct: false }, { id: "b", text: "Maç", correct: false }, { id: "c", text: "Top (Büyük)", correct: true }, { id: "d", text: "Takım", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils jouent ___ échecs.", options: [{ id: "a", text: "aux", correct: true }, { id: "b", text: "les", correct: false }] },
    { id: 7, type: "TRANSLATE", question: "Çevir:", hint: "Siz basketbol oynuyorsunuz", correctAnswer: "Vous jouez au basket" },
    { id: 8, type: "SELECT", question: "'Gagner le match' ne demek?", options: [{ id: "a", text: "Maçı kaybetmek", correct: false }, { id: "b", text: "Maçı izlemek", correct: false }, { id: "c", text: "Maçı bırakmak", correct: false }, { id: "d", text: "Maçı kazanmak", correct: true }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu aimes jouer ___ cartes?", options: [{ id: "a", text: "aux", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "O video oyunları oynuyor", correctAnswer: "Il joue aux jeux vidéo" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce soir, on joue ___ billard.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "le", correct: false }] },
    { id: 12, type: "SELECT", question: "Hangisi topla oynanmaz?", options: [{ id: "a", text: "Le basket", correct: false }, { id: "b", text: "Le tennis", correct: false }, { id: "c", text: "Les échecs", correct: true }, { id: "d", text: "Le volley", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ne joue pas ___ foot.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Satranç oynamayı sever misin?", correctAnswer: "Aimes-tu jouer aux échecs?" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Les enfants jouent ___ ballon.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 16, type: "SELECT", question: "'Perdre' ne demektir?", options: [{ id: "a", text: "Kazanmak", correct: false }, { id: "b", text: "Kaybetmek", correct: true }, { id: "c", text: "Oynamak", correct: false }, { id: "d", text: "İzlemek", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Takımımız kazandı", correctAnswer: "Notre équipe a gagné" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon frère joue ___ rugby.", options: [{ id: "a", text: "au", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bir maç yapalım mı?", correctAnswer: "On fait un match?" },
    { id: 20, type: "SELECT", question: "JOUER fiili hangi edat grubunu alır?", options: [{ id: "a", text: "Du, de la, de l', des", correct: false }, { id: "b", text: "Au, à la, à l', aux", correct: true }, { id: "c", text: "Le, la, l', les", correct: false }, { id: "d", text: "En, y", correct: false }] }
];

const unit348Quiz2: Question[] = [
    // KOLAY-ORTA-ZOR (20 Soru) - FAIRE (Bireysel ve Fiziksel Aktiviteler)
    { id: 1, type: "SELECT", question: "Bireysel fiziksel aktivitelerde hangi fiil tercih edilir?", options: [{ id: "a", text: "Faire (Faire de)", correct: true }, { id: "b", text: "Jouer (Jouer à)", correct: false }, { id: "c", text: "Prendre", correct: false }, { id: "d", text: "Aller", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Je fais ___ natation l'été.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "O sabahları koşu yapar", correctAnswer: "Il fait du jogging le matin" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous faisons ___ vélo dans la forêt.", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 5, type: "SELECT", question: "'La musculation' nedir?", options: [{ id: "a", text: "Jimnastik", correct: false }, { id: "b", text: "Yüzme", correct: false }, { id: "c", text: "Vücut geliştirme", correct: true }, { id: "d", text: "Koşu", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous faites ___ gymnastique.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 7, type: "TRANSLATE", question: "Çevir:", hint: "Kışın kayak yapıyoruz", correctAnswer: "L'hiver, nous faisons du ski" },
    { id: 8, type: "SELECT", question: "Hangisi FAIRE ile kullanılmaz?", options: [{ id: "a", text: "de la natation", correct: false }, { id: "b", text: "du basket", correct: true }, { id: "c", text: "du vélo", correct: false }, { id: "d", text: "de l'équitation", correct: false }] },
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle fait ___ danse classique.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "à la", correct: false }] },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Ben yoga yapıyorum", correctAnswer: "Je fais du yoga" },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils font ___ randonnée en montagne.", options: [{ id: "a", text: "de la", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 12, type: "SELECT", question: "'La course à pied' ne demek?", options: [{ id: "a", text: "Yüzme", correct: false }, { id: "b", text: "Bisiklet", correct: false }, { id: "c", text: "Koşu", correct: true }, { id: "d", text: "Kayak", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur: (Olumsuz Cümle)", sentence: "Je ne fais pas ___ sport formda değilim.", options: [{ id: "a", text: "de", correct: true }, { id: "b", text: "du", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Ata binmeyi severim", correctAnswer: "J'aime faire de l'équitation" },
    { id: 15, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu fais ___ surf?", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 16, type: "SELECT", question: "FAIRE fiili spor için hangi edatları alır?", options: [{ id: "a", text: "Du, de la, de l', des", correct: true }, { id: "b", text: "Au, à la, à l', aux", correct: false }, { id: "c", text: "Le, la, l', les", correct: false }, { id: "d", text: "À, de, en", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Paten yapıyoruz", correctAnswer: "Nous faisons du patinage" },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon père fait ___ golf.", options: [{ id: "a", text: "du", correct: true }, { id: "b", text: "au", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Yazın sörf yaparlar", correctAnswer: "L'été, ils font du surf" },
    { id: 20, type: "SELECT", question: "Hangisi fiziksel bir efordur?", options: [{ id: "a", text: "Jouer aux échecs", correct: false }, { id: "b", text: "Jouer aux cartes", correct: false }, { id: "c", text: "Faire de la course à pied", correct: true }, { id: "d", text: "Regarder un match", correct: false }] }
];

const unit348Quiz3: Question[] = [
    // KOLAY-ORTA-ZOR (20 Soru) - FAIRE vs JOUER Karşılaştırması
    { id: 1, type: "FILL_BLANK", question: "Doldur:", sentence: "Pour la natation, on dit : ___ natation.", options: [{ id: "a", text: "Faire de la", correct: true }, { id: "b", text: "Jouer à la", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Pour le tennis, on dit : ___ tennis.", options: [{ id: "a", text: "Jouer au", correct: true }, { id: "b", text: "Faire du", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "Hangi sporu yapıyorsunuz?", correctAnswer: "Quel sport pratiquez-vous?" },
    { id: 4, type: "SELECT", question: "Hangi eşleşme YANLIŞTIR?", options: [{ id: "a", text: "Jouer au football", correct: false }, { id: "b", text: "Faire du ski", correct: false }, { id: "c", text: "Jouer de la natation", correct: true }, { id: "d", text: "Faire du vélo", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Antrenmana gitmeliyim", correctAnswer: "Je dois aller à l'entraînement" },
    { id: 6, type: "FILL_BLANK", question: "Doldur (Basketbol):", sentence: "Moi, je ___ basket.", options: [{ id: "a", text: "joue au", correct: true }, { id: "b", text: "fais du", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur (Jimnastik):", sentence: "Ma sœur ___ gymnastique.", options: [{ id: "a", text: "fait de la", correct: true }, { id: "b", text: "joue à la", correct: false }] },
    { id: 8, type: "SELECT", question: "Hangi ikili doğrudur?", options: [{ id: "a", text: "Jouer du tennis / Faire au judo", correct: false }, { id: "b", text: "Jouer au tennis / Faire du judo", correct: true }, { id: "c", text: "Faire le tennis / Jouer de judo", correct: false }, { id: "d", text: "Jouer à tennis / Faire de judo", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "O haftada üç kez koşar", correctAnswer: "Il court trois fois par semaine" },
    { id: 10, type: "FILL_BLANK", question: "Doldur (Video oyunları):", sentence: "Ils ___ jeux vidéo.", options: [{ id: "a", text: "jouent aux", correct: true }, { id: "b", text: "font des", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur (Kaykay):", sentence: "Tu ___ skate?", options: [{ id: "a", text: "fais du", correct: true }, { id: "b", text: "joues au", correct: false }] },
    { id: 12, type: "SELECT", question: "'Jouer au golf' mu 'Faire du golf' mu?", options: [{ id: "a", text: "Sadece Jouer au golf", correct: false }, { id: "b", text: "Sadece Faire du golf", correct: false }, { id: "c", text: "İkisi de kullanılabilir (Golf hem oyun hem spordur)", correct: true }, { id: "d", text: "İkisi de yanlış", correct: false }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Biz asla spor yapmayız", correctAnswer: "Nous ne faisons jamais de sport" },
    { id: 14, type: "FILL_BLANK", question: "Doldur (Dans):", sentence: "Nous ___ danse le samedi.", options: [{ id: "a", text: "faisons de la", correct: true }, { id: "b", text: "jouons à la", correct: false }] },
    { id: 15, type: "FILL_BLANK", question: "Doldur (Ping pong):", sentence: "Vous ___ ping-pong?", options: [{ id: "a", text: "jouez au", correct: true }, { id: "b", text: "faites du", correct: false }] },
    { id: 16, type: "SELECT", question: "Satranç için ne kullanılır?", options: [{ id: "a", text: "Faire des échecs", correct: false }, { id: "b", text: "Jouer aux échecs", correct: true }, { id: "c", text: "Aller aux échecs", correct: false }, { id: "d", text: "Prendre des échecs", correct: false }] },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Hafta sonları bisiklete biniyorum", correctAnswer: "Je fais du vélo le week-end" },
    { id: 18, type: "FILL_BLANK", question: "Doldur (Box):", sentence: "Le champion ___ boxe.", options: [{ id: "a", text: "fait de la", correct: true }, { id: "b", text: "joue à la", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "O futbolu seviyor ama (onu) oynamıyor", correctAnswer: "Il aime le football mais il n'y joue pas" },
    { id: 20, type: "SELECT", question: "Genel kural nedir?", options: [{ id: "a", text: "Jouer: Top, Takım, Kural / Faire: Bireysel, Çaba, Egzersiz", correct: true }, { id: "b", text: "Jouer: Güç gerektiren / Faire: Zeka gerektiren", correct: false }, { id: "c", text: "Jouer: Kış sporları / Faire: Yaz sporları", correct: false }, { id: "d", text: "Her ikisi de eşanlamlıdır", correct: false }] }
];

const unit348Quiz4: Question[] = [
    // KARIŞIK (20 Soru) - Kelime, Kalıplar ve Okuma Parçası Testi
    { id: 1, type: "SELECT", question: "'L'équipe' ne demek?", options: [{ id: "a", text: "Takım", correct: true }, { id: "b", text: "Rakip", correct: false }, { id: "c", text: "Oyuncu", correct: false }, { id: "d", text: "Hakem", correct: false }] },
    { id: 2, type: "FILL_BLANK", question: "Doldur:", sentence: "Le joueur a un ___ ce soir.", options: [{ id: "a", text: "entraînement", correct: true }, { id: "b", text: "équipe", correct: false }] },
    { id: 3, type: "TRANSLATE", question: "Çevir:", hint: "O iyi bir oyuncu", correctAnswer: "C'est un bon joueur" },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Lucas est en très ___ forme.", options: [{ id: "a", text: "bonne", correct: true }, { id: "b", text: "bon", correct: false }] },
    { id: 5, type: "TRANSLATE", question: "Çevir:", hint: "Her gün spor yaparım", correctAnswer: "Je fais du sport tous les jours" },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ils ont perdu le match", options: [{ id: "a", text: "Onlar maçı kaybettiler", correct: true }, { id: "b", text: "Biz maçı kaybettik", correct: false }, { id: "c", text: "Onlar maçı kazandılar", correct: false }, { id: "d", text: "Maç başladı", correct: false }] },
    { id: 7, type: "SELECT", question: "'La course à pied' ne demektir?", options: [{ id: "a", text: "Yürüyüş", correct: false }, { id: "b", text: "Koşu", correct: true }, { id: "c", text: "Bisiklet", correct: false }, { id: "d", text: "Tırmanış", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle fait de l'___ (ata binme).", options: [{ id: "a", text: "équitation", correct: true }, { id: "b", text: "équipe", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Maç berabere bitti", correctAnswer: "Le match s'est terminé par un match nul" },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ a sifflé la fin du match.", options: [{ id: "a", text: "arbitre", correct: true }, { id: "b", text: "équipe", correct: false }] },
    { id: 11, type: "SELECT", question: "'Le gardien de but' kimdir?", options: [{ id: "a", text: "Forvet", correct: false }, { id: "b", text: "Kaleci", correct: true }, { id: "c", text: "Defans", correct: false }, { id: "d", text: "Teknik direktör", correct: false }] },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Gol attı", correctAnswer: "Il a marqué un but" },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Je dois acheter de nouvelles baskets de ___.", options: [{ id: "a", text: "course", correct: true }, { id: "b", text: "cour", correct: false }] },
    { id: 14, type: "SELECT", question: "Spor salonu ne demektir?", options: [{ id: "a", text: "La salle de sport", correct: true }, { id: "b", text: "Le terrain", correct: false }, { id: "c", text: "La piscine", correct: false }, { id: "d", text: "L'école", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Tenis oynamak için bir rakete ihtiyacım var", correctAnswer: "J'ai besoin d'une raquette pour jouer au tennis" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a beaucoup de ___ dans le stade.", options: [{ id: "a", text: "supporters", correct: true }, { id: "b", text: "arbitres", correct: false }] },
    { id: 17, type: "SELECT", question: "'Courir' fiili ne anlama gelir?", options: [{ id: "a", text: "Yüzmek", correct: false }, { id: "b", text: "Atlamak", correct: false }, { id: "c", text: "Koşmak", correct: true }, { id: "d", text: "Yürümek", correct: false }] },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Birlikte spora gidelim mi?", correctAnswer: "On fait du sport ensemble?" },
    { id: 19, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle a gagné une ___ d'or aux Jeux Olympiques.", options: [{ id: "a", text: "médaille", correct: true }, { id: "b", text: "coupe", correct: false }] },
    { id: 20, type: "SELECT", question: "Hangi spor takım sporu DEĞİLDİR?", options: [{ id: "a", text: "Le basket", correct: false }, { id: "b", text: "La natation", correct: true }, { id: "c", text: "Le football", correct: false }, { id: "d", text: "Le volley", correct: false }] }
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

// Unit 350 Quiz 1: Doğa ve Piknik (Kelime Bilgisi)
const unit350Quiz1: Question[] = [
    // KOLAY (8 soru) - Temel Doğa Kelimeleri
    { id: 1, type: "SELECT", question: "'L'arbre' ne demek?", options: [{ id: "a", text: "Ağaç", correct: true }, { id: "b", text: "Çiçek", correct: false }, { id: "c", text: "Yaprak", correct: false }, { id: "d", text: "Çimen", correct: false }] },
    { id: 2, type: "SELECT", question: "'La forêt' ne demek?", options: [{ id: "a", text: "Deniz", correct: false }, { id: "b", text: "Ova", correct: false }, { id: "c", text: "Orman", correct: true }, { id: "d", text: "Göl", correct: false }] },
    { id: 3, type: "SELECT", question: "'La nature' ne demek?", options: [{ id: "a", text: "Dünya", correct: false }, { id: "b", text: "Doğa", correct: true }, { id: "c", text: "Şehir", correct: false }, { id: "d", text: "Gökyüzü", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le pique-nique' ne demek?", options: [{ id: "a", text: "Yürüyüş", correct: false }, { id: "b", text: "Kamp", correct: false }, { id: "c", text: "Piknik", correct: true }, { id: "d", text: "Tatil", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est magnifique.", options: [{ id: "a", text: "paysage", correct: true }, { id: "b", text: "pays", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle aime la ___.", options: [{ id: "a", text: "nature", correct: true }, { id: "b", text: "naturel", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous allons à la ___.", options: [{ id: "a", text: "montagne", correct: true }, { id: "b", text: "mont", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ brille aujourd'hui.", options: [{ id: "a", text: "soleil", correct: true }, { id: "b", text: "lune", correct: false }] },

    // ORTA (7 soru) - Cümle ve Kalıplar
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Ormana gitmek ister misin?", correctAnswer: "Tu as envie d'aller à la forêt?" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Doğayı çok severim.", correctAnswer: "J'adore la nature." },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un bel ___.", options: [{ id: "a", text: "endroit", correct: true }, { id: "b", text: "place", correct: false }] },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Piknik yapalım mı?", correctAnswer: "On fait un pique-nique?" },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Il fait très ___.", options: [{ id: "a", text: "beau", correct: true }, { id: "b", text: "belle", correct: false }] },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Manzara muhteşem.", correctAnswer: "Le paysage est magnifique." },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bir ağacın altında oturuyoruz.", correctAnswer: "Nous nous asseyons sous un arbre." },

    // ZOR (5 soru) - İleri Seviye Cümleler
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Güneş parlıyor.", correctAnswer: "Le soleil brille." },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Küçük bir nehir var.", correctAnswer: "Il y a une petite rivière." },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Çok güzel bir gün.", correctAnswer: "C'est une très belle journée." },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Temiz hava almak iyi gelir.", correctAnswer: "Prendre l'air frais fait du bien." },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Doğada vakit geçirmeyi seviyorum.", correctAnswer: "J'aime passer du temps dans la nature." }
];

// Unit 350 Quiz 2: 'Y' Zamiri (Oraya / Orada)
const unit350Quiz2: Question[] = [
    // KOLAY (8 soru) - Kurallar ve Basit Çeviriler
    { id: 1, type: "SELECT", question: "'Y' zamiri cümlede genellikle neyin yerine geçer?", options: [{ id: "a", text: "Bir kişinin", correct: false }, { id: "b", text: "Bir yerin/konumun (à, dans vb. ile)", correct: true }, { id: "c", text: "Bir zamanın", correct: false }, { id: "d", text: "Bir nesnenin", correct: false }] },
    { id: 2, type: "SELECT", question: "'On y va' ne demek?", options: [{ id: "a", text: "Oraya gidiyoruz / gidelim", correct: true }, { id: "b", text: "Biz gidiyoruz", correct: false }, { id: "c", text: "Oradan geliyoruz", correct: false }, { id: "d", text: "Orayı görüyoruz", correct: false }] },
    { id: 3, type: "SELECT", question: "'J'y suis' ne demek?", options: [{ id: "a", text: "Ben oyum", correct: false }, { id: "b", text: "Oradayım", correct: true }, { id: "c", text: "Benim", correct: false }, { id: "d", text: "Oraya gidiyorum", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu vas à Paris? Oui, j'___ vais.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "en", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est dans la forêt? Oui, il ___ est.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "le", correct: false }] },
    { id: 6, type: "SELECT", question: "'J'y vais' ne demek?", options: [{ id: "a", text: "Oradan geliyorum", correct: false }, { id: "b", text: "Biliyorum", correct: false }, { id: "c", text: "Oraya gidiyorum", correct: true }, { id: "d", text: "Görüyorum", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous allons à la montagne? Oui, nous ___ allons.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "l'", correct: false }] },
    { id: 8, type: "SELECT", question: "'Y' zamiri cümlede genellikle nerede bulunur?", options: [{ id: "a", text: "Cümlenin sonunda", correct: false }, { id: "b", text: "Fiilden hemen sonra", correct: false }, { id: "c", text: "Fiilden hemen önce", correct: true }, { id: "d", text: "Cümlenin başında", correct: false }] },

    // ORTA (7 soru) - Kalıplar
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Oraya gidiyorum.", correctAnswer: "J'y vais." },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Oradayız.", correctAnswer: "Nous y sommes." },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu restes à la maison? Oui, j'___ reste.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "en", correct: false }] },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Oraya bisikletle gidelim.", correctAnswer: "On y va à vélo." },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Oraya gidiyor musun?", correctAnswer: "Tu y vas?" },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Oraya gitmeyeceğim.", correctAnswer: "Je ne vais pas y aller." },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ormana gidiyor musunuz? Evet oraya gidiyoruz.", correctAnswer: "Allez-vous à la forêt? Oui, nous y allons." },

    // ZOR (5 soru) - İleri Seviye ve Çift Fiil Kullanımı
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Oraya gitmek istiyorum.", correctAnswer: "Je veux y aller." },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Oraya gidemem (gidemiyorum).", correctAnswer: "Je ne peux pas y aller." },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Oraya varmak üzereyiz.", correctAnswer: "Nous allons y arriver." },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Oraya yalnız gideceğim (Futur Proche).", correctAnswer: "Je vais y aller seul." },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Orada piknik yapacağız.", correctAnswer: "Nous allons y faire un pique-nique." }
];

// Unit 350 Quiz 3: 'EN' Zamiri (Ondan / Oradan)
const unit350Quiz3: Question[] = [
    // KOLAY (8 soru) - Kurallar ve Basit Çeviriler
    { id: 1, type: "SELECT", question: "'EN' zamiri genellikle hangi edatla (preposition) başlayan yapıların yerine geçer?", options: [{ id: "a", text: "À (yer/yön)", correct: false }, { id: "b", text: "De (miktar/ayrılma)", correct: true }, { id: "c", text: "Pour (için)", correct: false }, { id: "d", text: "Avec (ile)", correct: false }] },
    { id: 2, type: "SELECT", question: "'J'en veux' ne demek?", options: [{ id: "a", text: "Oraya gitmek istiyorum", correct: false }, { id: "b", text: "Seni istiyorum", correct: false }, { id: "c", text: "Ondan istiyorum", correct: true }, { id: "d", text: "Orada olmak istiyorum", correct: false }] },
    { id: 3, type: "SELECT", question: "'J'en ai' ne demek?", options: [{ id: "a", text: "Oradayım", correct: false }, { id: "b", text: "Bende ondan var", correct: true }, { id: "c", text: "Onu aldım", correct: false }, { id: "d", text: "Oraya gideceğim", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu veux de l'eau? Oui, j'___ veux.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "As-tu des frères? Oui, j'___ ai deux.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "les", correct: false }] },
    { id: 6, type: "SELECT", question: "'J'en prends' ne demek?", options: [{ id: "a", text: "Onları alıyorum", correct: false }, { id: "b", text: "Ondan alıyorum", correct: true }, { id: "c", text: "Oradan geliyorum", correct: false }, { id: "d", text: "Bende var", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Il mange de la soupe? Oui, il ___ mange.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "la", correct: false }] },
    { id: 8, type: "SELECT", question: "'EN' zamirinin cümldeki yeri neresidir?", options: [{ id: "a", text: "Cümlenin ortası", correct: false }, { id: "b", text: "Fiilden sonra", correct: false }, { id: "c", text: "Cümlenin sonu", correct: false }, { id: "d", text: "Fiilden hemen önce", correct: true }] },

    // ORTA (7 soru) - Kalıplar
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Ondan istiyorum.", correctAnswer: "J'en veux." },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Ondan dört tane var.", correctAnswer: "J'en ai quatre." },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu manges du pain? Oui, j'___ mange.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] },
    { id: 12, type: "TRANSLATE", question: "Çevir:", hint: "Ondan getirdim.", correctAnswer: "J'en ai apporté." },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Ondan yemiyorum.", correctAnswer: "Je n'en mange pas." },
    { id: 14, type: "TRANSLATE", question: "Çevir:", hint: "Ondan içiyor musun?", correctAnswer: "Tu en bois?" },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ondan alacağım (Futur Proche).", correctAnswer: "Je vais en prendre." },

    // ZOR (5 soru) - İleri Seviye Yapılar
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Ondan çok var.", correctAnswer: "Il y en a beaucoup." },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Ondan biraz almak istiyorum.", correctAnswer: "Je veux en prendre un peu." },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Ondan hiç kalmadı (Daha fazla yok).", correctAnswer: "Il n'y en a plus." },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Sandviç getirdin mi? Evet, ondan getirdim.", correctAnswer: "Tu as apporté des sandwichs? Oui, j'en ai apporté." },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Ondan yemelisin.", correctAnswer: "Tu dois en manger." }
];

// Unit 350 Quiz 4: Genel Karışık (Doğa, Zamirler, Piknik)
const unit350Quiz4: Question[] = [
    // KOLAY (8 soru) - Karışık İlgili Kavramlar
    { id: 1, type: "SELECT", question: "'Apporter' ne demek?", options: [{ id: "a", text: "Getirmek", correct: true }, { id: "b", text: "Götürmek", correct: false }, { id: "c", text: "Seyretmek", correct: false }, { id: "d", text: "Uyumak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Boisson' ne demek?", options: [{ id: "a", text: "İçecek", correct: true }, { id: "b", text: "Yiyecek", correct: false }, { id: "c", text: "Tatlı", correct: false }, { id: "d", text: "Kitap", correct: false }] },
    { id: 3, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu as ___ l'eau ?", options: [{ id: "a", text: "apporté", correct: true }, { id: "b", text: "mangé", correct: false }] },
    { id: 4, type: "FILL_BLANK", question: "Doldur:", sentence: "J'aime me promener dans la ___.", options: [{ id: "a", text: "forêt", correct: true }, { id: "b", text: "bureau", correct: false }] },
    { id: 5, type: "SELECT", question: "'Le ciel' ne demek?", options: [{ id: "a", text: "Toprak", correct: false }, { id: "b", text: "Ağaç", correct: false }, { id: "c", text: "Gökyüzü", correct: true }, { id: "d", text: "Nehir", correct: false }] },
    { id: 6, type: "LISTENING", question: "Duyduğunu seç:", audioText: "On y va dans 5 minutes.", options: [{ id: "a", text: "Oraya 5 dakika içinde gidiyoruz.", correct: true }, { id: "b", text: "Buradan 5 dakika önce geldik.", correct: false }, { id: "c", text: "Oraya 5 dakika uzaklıktayız.", correct: false }, { id: "d", text: "Burada 5 dakika kalacağız.", correct: false }] },
    { id: 7, type: "SELECT", question: "'Préparer' ne demek?", options: [{ id: "a", text: "Satmak", correct: false }, { id: "b", text: "Hazırlamak", correct: true }, { id: "c", text: "Bulmak", correct: false }, { id: "d", text: "Kaçmak", correct: false }] },
    { id: 8, type: "SELECT", question: "'S'asseoir' ne demek?", options: [{ id: "a", text: "Oturmak", correct: true }, { id: "b", text: "Kalkmak", correct: false }, { id: "c", text: "Yürümek", correct: false }, { id: "d", text: "Uyumak", correct: false }] },

    // ORTA (7 soru) - Karışık Gramer ve Çeviri
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Su ister misin?", correctAnswer: "Tu veux de l'eau?" },
    { id: 10, type: "TRANSLATE", question: "Çevir:", hint: "Evet, ondan istiyorum, teşekkürler.", correctAnswer: "Oui, j'en veux, merci." },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Le pique-nique est prêt. ___ mangeons ? (Onu yer miyiz? / Başlayalım mı anlamında Y/EN hariç bir zamir, ama piknik için ORAYA gidiyoruz)", options: [{ id: "a", text: "Nous y", correct: true }, { id: "b", text: "Mon", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "As-tu préparé les fruits ? Oui, j'___ ai préparé.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "y", correct: false }] },
    { id: 13, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Je vais y aller.", options: [{ id: "a", text: "Oraya gideceğim.", correct: true }, { id: "b", text: "Orada kalacağım.", correct: false }, { id: "c", text: "Oradan döneceğim.", correct: false }, { id: "d", text: "Buradan gideceğim.", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je veux faire un pique-nique. On ___ va aujourd'hui ?", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "en", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Manzara harika.", correctAnswer: "Le paysage est magnifique." },

    // ZOR (5 soru)
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Sandviç getirdin mi?", correctAnswer: "Tu as apporté des sandwichs?" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Evet, ondan getirdim.", correctAnswer: "Oui, j'en ai apporté." },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle aime la forêt, elle ___ va souvent.", options: [{ id: "a", text: "y", correct: true }, { id: "b", text: "la", correct: false }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Kuşlar ağaçta şarkı söylüyor.", correctAnswer: "Les oiseaux chantent dans l'arbre." },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Biz doğada dinleniyoruz.", correctAnswer: "Nous nous reposons dans la nature." }
];

// Unit 351 Quiz 1: Temel Telefon Kelimeleri
const unit351Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Allô' ne zaman kullanılır?", options: [{ id: "a", text: "Her zaman", correct: false }, { id: "b", text: "Sadece telefonda", correct: true }, { id: "c", text: "Sabahları", correct: false }, { id: "d", text: "Geceleri", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le portable' ne demek?", options: [{ id: "a", text: "Bilgisayar", correct: false }, { id: "b", text: "Cep telefonu", correct: true }, { id: "c", text: "Tablet", correct: false }, { id: "d", text: "Numara", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le réseau' ne demek?", options: [{ id: "a", text: "İnternet", correct: false }, { id: "b", text: "Şebeke/Hat", correct: true }, { id: "c", text: "Şarj", correct: false }, { id: "d", text: "Ekran", correct: false }] },
    { id: 4, type: "SELECT", question: "'Sonner' ne demek?", options: [{ id: "a", text: "Konuşmak", correct: false }, { id: "b", text: "Çalmak (zil/tel)", correct: true }, { id: "c", text: "Açmak", correct: false }, { id: "d", text: "Kapatmak", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon téléphone ___.", options: [{ id: "a", text: "sonne", correct: true }, { id: "b", text: "parle", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Il n'y a pas de ___.", options: [{ id: "a", text: "réseau", correct: true }, { id: "b", text: "portable", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Je dois ___ mon portable.", options: [{ id: "a", text: "charger", correct: true }, { id: "b", text: "sonner", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ à l'appareil.", options: [{ id: "a", text: "Paul", correct: true }, { id: "b", text: "le", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "SELECT", question: "'Décrocher' ne demek?", options: [{ id: "a", text: "Kapatmak", correct: false }, { id: "b", text: "Telefonu açmak", correct: true }, { id: "c", text: "Aramak", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 10, type: "SELECT", question: "'Raccrocher' ne demek?", options: [{ id: "a", text: "Açmak", correct: false }, { id: "b", text: "Telefonu kapatmak", correct: true }, { id: "c", text: "Konuşmak", correct: false }, { id: "d", text: "Duymak", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Vite, ___ le téléphone!", options: [{ id: "a", text: "décroche", correct: true }, { id: "b", text: "raccroche", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il a ___ au nez.", options: [{ id: "a", text: "raccroché", correct: true }, { id: "b", text: "décroché", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Laisse un message sur la ___.", options: [{ id: "a", text: "messagerie", correct: true }, { id: "b", text: "sonnerie", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Quel est ton ___?", options: [{ id: "a", text: "numéro", correct: true }, { id: "b", text: "nom", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Telefon çalıyor", correctAnswer: "Le téléphone sonne" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Telefonu aç!", correctAnswer: "Décroche le téléphone!" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Şebeke yok", correctAnswer: "Il n'y a pas de réseau" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Telefondaki kim?", correctAnswer: "Qui est à l'appareil?" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Numaramı verdim", correctAnswer: "J'ai donné mon numéro" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sesli mesaj bırak", correctAnswer: "Laisse un message vocal" }
];

// Unit 351 Quiz 2: Birini İsteme ve Kendini Tanıtma
const unit351Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Je voudrais parler à...' ne demek?", options: [{ id: "a", text: "...ile konuşmak istiyorum", correct: true }, { id: "b", text: "...ile gidiyorum", correct: false }, { id: "c", text: "...ile geliyorum", correct: false }, { id: "d", text: "...ile yiyorum", correct: false }] },
    { id: 2, type: "SELECT", question: "'Est-ce que Marc est là?' ne demek?", options: [{ id: "a", text: "Marc nerede?", correct: false }, { id: "b", text: "Marc orada mı?", correct: true }, { id: "c", text: "Marc kim?", correct: false }, { id: "d", text: "Marc nasılsın?", correct: false }] },
    { id: 3, type: "SELECT", question: "'C'est Pierre' ne demek (telefonda)?", options: [{ id: "a", text: "Ben Pierre", correct: true }, { id: "b", text: "Bu Pierre", correct: false }, { id: "c", text: "O Pierre", correct: false }, { id: "d", text: "Sen Pierre", correct: false }] },
    { id: 4, type: "SELECT", question: "'Qui est à l'appareil?' ne demek?", options: [{ id: "a", text: "Telefondaki kim?", correct: true }, { id: "b", text: "Telefon nerede?", correct: false }, { id: "c", text: "Kimi arıyorsun?", correct: false }, { id: "d", text: "Ne yapıyorsun?", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Bonjour, ___ Alice.", options: [{ id: "a", text: "c'est", correct: true }, { id: "b", text: "je suis", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Pourrais-je ___ à Monsieur Blanc?", options: [{ id: "a", text: "parler", correct: true }, { id: "b", text: "dire", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Est-ce que Julie est ___?", options: [{ id: "a", text: "là", correct: true }, { id: "b", text: "ici", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est de la ___ de qui?", options: [{ id: "a", text: "part", correct: true }, { id: "b", text: "côté", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "SELECT", question: "'C'est de la part de qui?' ne demek?", options: [{ id: "a", text: "Kimin adına arıyorsunuz? / Kim arıyor?", correct: true }, { id: "b", text: "Kimi arıyorsunuz?", correct: false }, { id: "c", text: "Nereden arıyorsunuz?", correct: false }, { id: "d", text: "Ne zaman arıyorsunuz?", correct: false }] },
    { id: 10, type: "SELECT", question: "'Je suis bien chez les Dupont?' ne demek?", options: [{ id: "a", text: "Dupont'lar evde mi?", correct: false }, { id: "b", text: "Dupont'ların evi mi? (doğru numara mı)", correct: true }, { id: "c", text: "Dupont'lar iyi mi?", correct: false }, { id: "d", text: "Ben Dupont", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ parler au directeur.", options: [{ id: "a", text: "voudrais", correct: true }, { id: "b", text: "veux", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Un ___, s'il vous plaît.", options: [{ id: "a", text: "instant", correct: true }, { id: "b", text: "temps", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Ne ___ pas.", options: [{ id: "a", text: "quittez", correct: true }, { id: "b", text: "partez", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vous le ___.", options: [{ id: "a", text: "passe", correct: true }, { id: "b", text: "donne", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Kim arıyor?", correctAnswer: "C'est de la part de qui?" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Sophie ile görüşmek istiyorum", correctAnswer: "Je voudrais parler à Sophie" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Ben Paul", correctAnswer: "C'est Paul" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Doğru numara mı?", correctAnswer: "Je suis bien au...?" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Müdür orada mı?", correctAnswer: "Est-ce que le directeur est là?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kapatmayın lütfen", correctAnswer: "Ne quittez pas s'il vous plaît" }
];

// Unit 351 Quiz 3: Bekletme ve Mesaj Bırakma
const unit351Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Ne quittez pas' ne demek?", options: [{ id: "a", text: "Ayrılmayın / Hatta kalın", correct: true }, { id: "b", text: "Kapatın", correct: false }, { id: "c", text: "Gidin", correct: false }, { id: "d", text: "Konuşmayın", correct: false }] },
    { id: 2, type: "SELECT", question: "'La ligne est occupée' ne demek?", options: [{ id: "a", text: "Hat boş", correct: false }, { id: "b", text: "Hat meşgul", correct: true }, { id: "c", text: "Hat bozuk", correct: false }, { id: "d", text: "Hat yok", correct: false }] },
    { id: 3, type: "SELECT", question: "'Laisser un message' ne demek?", options: [{ id: "a", text: "Mesaj okumak", correct: false }, { id: "b", text: "Mesaj bırakmak", correct: true }, { id: "c", text: "Mesaj yazmak", correct: false }, { id: "d", text: "Mesaj silmek", correct: false }] },
    { id: 4, type: "SELECT", question: "'Rappeler' ne demek?", options: [{ id: "a", text: "Aramak", correct: false }, { id: "b", text: "Geri aramak", correct: true }, { id: "c", text: "Unutmak", correct: false }, { id: "d", text: "Sormak", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous voulez ___ un message?", options: [{ id: "a", text: "laisser", correct: true }, { id: "b", text: "donner", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais ___ plus tard.", options: [{ id: "a", text: "rappeler", correct: true }, { id: "b", text: "appeler", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Sa ligne est ___.", options: [{ id: "a", text: "occupée", correct: true }, { id: "b", text: "libre", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Il n'est pas ___.", options: [{ id: "a", text: "là", correct: true }, { id: "b", text: "ici", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "SELECT", question: "'Dites-lui que...' ne demek?", options: [{ id: "a", text: "Ona deyin ki...", correct: true }, { id: "b", text: "Bana deyin ki...", correct: false }, { id: "c", text: "Onlar dedi ki...", correct: false }, { id: "d", text: "Biz dedik ki...", correct: false }] },
    { id: 10, type: "SELECT", question: "'Je vous le passe' ne demek?", options: [{ id: "a", text: "Sizi ona bağlıyorum", correct: true }, { id: "b", text: "Sizi geçiyorum", correct: false }, { id: "c", text: "Size veriyorum", correct: false }, { id: "d", text: "Sizi bekliyorum", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Pouvez-vous lui demander de me ___?", options: [{ id: "a", text: "rappeler", correct: true }, { id: "b", text: "parler", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___.", options: [{ id: "a", text: "urgent", correct: true }, { id: "b", text: "vite", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ note.", options: [{ id: "a", text: "prends", correct: true }, { id: "b", text: "fais", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Un petit ___.", options: [{ id: "a", text: "moment", correct: true }, { id: "b", text: "heure", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Mesaj bırakmak ister misiniz?", correctAnswer: "Voulez-vous laisser un message?" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Sizi bağlıyorum", correctAnswer: "Je vous le passe" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Hat meşgul", correctAnswer: "La ligne est occupée" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Daha sonra arayacağım", correctAnswer: "Je rappellerai plus tard" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu acil", correctAnswer: "C'est urgent" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Telesekretere düştü", correctAnswer: "C'est le répondeur" }
];

// Unit 351 Quiz 4: Sorunlar ve Karışık
const unit351Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Je vous entends mal' ne demek?", options: [{ id: "a", text: "Sizi kötü duyuyorum", correct: true }, { id: "b", text: "Sizi iyi duyuyorum", correct: false }, { id: "c", text: "Sizi görmüyorum", correct: false }, { id: "d", text: "Sizi anlamıyorum", correct: false }] },
    { id: 2, type: "SELECT", question: "'Ça coupe' ne demek?", options: [{ id: "a", text: "Kesiliyor (ses)", correct: true }, { id: "b", text: "Açılıyor", correct: false }, { id: "c", text: "Kapanıyor", correct: false }, { id: "d", text: "Bitiyor", correct: false }] },
    { id: 3, type: "SELECT", question: "'Parlez plus fort' ne demek?", options: [{ id: "a", text: "Daha yavaş konuşun", correct: false }, { id: "b", text: "Daha sesli konuşun", correct: true }, { id: "c", text: "Daha hızlı konuşun", correct: false }, { id: "d", text: "Susun", correct: false }] },
    { id: 4, type: "SELECT", question: "'C'est une erreur' ne demek?", options: [{ id: "a", text: "Bu bir hata (yanlış numara)", correct: true }, { id: "b", text: "Bu doğru", correct: false }, { id: "c", text: "Bu güzel", correct: false }, { id: "d", text: "Bu kötü", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous avez fait le mauvais ___.", options: [{ id: "a", text: "numéro", correct: true }, { id: "b", text: "nom", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ne vous ___ pas.", options: [{ id: "a", text: "entends", correct: true }, { id: "b", text: "écoute", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "La batterie est ___.", options: [{ id: "a", text: "vide", correct: true }, { id: "b", text: "pleine", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Il n'y a plus de ___.", options: [{ id: "a", text: "réseau", correct: true }, { id: "b", text: "ligne", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "SELECT", question: "'Excusez-moi, j'ai fait un faux numéro' ne demek?", options: [{ id: "a", text: "Pardon, yanlış numara çevirdim", correct: true }, { id: "b", text: "Pardon, doğru numara mı?", correct: false }, { id: "c", text: "Pardon, kimsiniz?", correct: false }, { id: "d", text: "Pardon, meşgul müsünüz?", correct: false }] },
    { id: 10, type: "SELECT", question: "'Pouvez-vous répéter?' ne demek?", options: [{ id: "a", text: "Tekrar edebilir misiniz?", correct: true }, { id: "b", text: "Yazabilir misiniz?", correct: false }, { id: "c", text: "Duyabilir misiniz?", correct: false }, { id: "d", text: "Gidebilir misiniz?", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Parlez plus ___, s'il vous plaît.", options: [{ id: "a", text: "lentement", correct: true }, { id: "b", text: "vite", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous avons été ___ (kesildik).", options: [{ id: "a", text: "coupés", correct: true }, { id: "b", text: "arrêtés", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Je n'ai plus de ___ (şarj).", options: [{ id: "a", text: "batterie", correct: true }, { id: "b", text: "réseau", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vous ___ très mal.", options: [{ id: "a", text: "reçois", correct: true }, { id: "b", text: "donne", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Tekrar edebilir misiniz?", correctAnswer: "Pouvez-vous répéter?" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Sizi duyamıyorum", correctAnswer: "Je ne vous entends pas" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Yanlış numara", correctAnswer: "Mauvais numéro" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Hat kesildi", correctAnswer: "La ligne a été coupée" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Şarjım bitiyor", correctAnswer: "Je n'ai plus de batterie" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Daha yüksek sesle konuşun", correctAnswer: "Parlez plus fort" }
];

// Unit 352 Quiz 1: Davet Kalıpları
const unit352Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Ça te dit de...?' ne demek?", options: [{ id: "a", text: "Sana uyar mı? / Ne dersin?", correct: true }, { id: "b", text: "Neredesin?", correct: false }, { id: "c", text: "Nasılsın?", correct: false }, { id: "d", text: "Teşekkürler", correct: false }] },
    { id: 2, type: "SELECT", question: "'Tu veux...?' ne demek?", options: [{ id: "a", text: "Neden?", correct: false }, { id: "b", text: "İster misin?", correct: true }, { id: "c", text: "Merhaba", correct: false }, { id: "d", text: "Güle güle", correct: false }] },
    { id: 3, type: "SELECT", question: "'On va...?' ne demek?", options: [{ id: "a", text: "Gidelim mi?", correct: true }, { id: "b", text: "Gel mi?", correct: false }, { id: "c", text: "Tamam mı?", correct: false }, { id: "d", text: "Burada mı?", correct: false }] },
    { id: 4, type: "SELECT", question: "'Tu es libre?' ne demek?", options: [{ id: "a", text: "Boş musun?", correct: true }, { id: "b", text: "Mutlu musun?", correct: false }, { id: "c", text: "Hasta mısın?", correct: false }, { id: "d", text: "Neredesin?", correct: false }] },
    { id: 5, type: "SELECT", question: "'Je t'invite à dîner' ne demek?", options: [{ id: "a", text: "Sana kahve veriyorum", correct: false }, { id: "b", text: "Seni yemeğe davet ediyorum", correct: true }, { id: "c", text: "Sana para veriyorum", correct: false }, { id: "d", text: "Seni arıyorum", correct: false }] },
    { id: 6, type: "SELECT", question: "'L'invitation' ne demek?", options: [{ id: "a", text: "Parti", correct: false }, { id: "b", text: "Davet", correct: true }, { id: "c", text: "Konser", correct: false }, { id: "d", text: "Sinema", correct: false }] },
    { id: 7, type: "SELECT", question: "'Ce week-end' ne demek?", options: [{ id: "a", text: "Bu ay", correct: false }, { id: "b", text: "Bu hafta sonu", correct: true }, { id: "c", text: "Yarın", correct: false }, { id: "d", text: "Dün", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le concert' ne demek?", options: [{ id: "a", text: "Sinema", correct: false }, { id: "b", text: "Konser", correct: true }, { id: "c", text: "Tiyatro", correct: false }, { id: "d", text: "Müze", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Ça te ___ de manger une pizza?", options: [{ id: "a", text: "dit", correct: true }, { id: "b", text: "va", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ aller au cinéma?", options: [{ id: "a", text: "veux", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "On ___ au café?", options: [{ id: "a", text: "va", correct: true }, { id: "b", text: "dit", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu es ___ ce week-end?", options: [{ id: "a", text: "libre", correct: true }, { id: "b", text: "malade", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Je t'___ à dîner.", options: [{ id: "a", text: "invite", correct: true }, { id: "b", text: "appelle", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Merci pour l'___.", options: [{ id: "a", text: "invitation", correct: true }, { id: "b", text: "anniversaire", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Pizza yemeye ne dersin?", correctAnswer: "Ça te dit de manger une pizza" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Sinemaya gitmek ister misin?", correctAnswer: "Tu veux aller au cinéma" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Bu akşam kafeye gidelim mi?", correctAnswer: "On va au café ce soir" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bu hafta sonu boş musun?", correctAnswer: "Tu es libre ce week-end" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Seni yemeğe davet ediyorum", correctAnswer: "Je t'invite à dîner" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Davet için teşekkürler", correctAnswer: "Merci pour l'invitation" }
];

// Unit 352 Quiz 2: Kabul Etmek
const unit352Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Avec plaisir!' ne demek?", options: [{ id: "a", text: "Memnuniyetle!", correct: true }, { id: "b", text: "Hayır!", correct: false }, { id: "c", text: "Belki", correct: false }, { id: "d", text: "Bilmiyorum", correct: false }] },
    { id: 2, type: "SELECT", question: "'D'accord' ne demek?", options: [{ id: "a", text: "Hayır", correct: false }, { id: "b", text: "Tamam", correct: true }, { id: "c", text: "Belki", correct: false }, { id: "d", text: "Neden?", correct: false }] },
    { id: 3, type: "SELECT", question: "'Bonne idée!' ne demek?", options: [{ id: "a", text: "Kötü fikir", correct: false }, { id: "b", text: "İyi fikir!", correct: true }, { id: "c", text: "Bilmiyorum", correct: false }, { id: "d", text: "Hayır", correct: false }] },
    { id: 4, type: "SELECT", question: "'Pourquoi pas?' ne demek?", options: [{ id: "a", text: "Neden olmasın?", correct: true }, { id: "b", text: "Neden?", correct: false }, { id: "c", text: "Hayır", correct: false }, { id: "d", text: "Ne zaman?", correct: false }] },
    { id: 5, type: "SELECT", question: "'C'est super!' ne demek?", options: [{ id: "a", text: "Bu kötü", correct: false }, { id: "b", text: "Bu süper!", correct: true }, { id: "c", text: "Hayır", correct: false }, { id: "d", text: "Belki", correct: false }] },
    { id: 6, type: "SELECT", question: "'Oui, je veux bien' ne demek?", options: [{ id: "a", text: "Hayır istemiyorum", correct: false }, { id: "b", text: "Evet, çok isterim", correct: true }, { id: "c", text: "Bilmiyorum", correct: false }, { id: "d", text: "Belki", correct: false }] },
    { id: 7, type: "SELECT", question: "'Génial!' ne demek?", options: [{ id: "a", text: "Harika!", correct: true }, { id: "b", text: "Kötü", correct: false }, { id: "c", text: "Tamam", correct: false }, { id: "d", text: "Belki", correct: false }] },
    { id: 8, type: "SELECT", question: "'On se retrouve' ne demek?", options: [{ id: "a", text: "Buluşalım", correct: true }, { id: "b", text: "Vedalaşalım", correct: false }, { id: "c", text: "Tartışalım", correct: false }, { id: "d", text: "Gidelim", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Avec ___!", options: [{ id: "a", text: "plaisir", correct: true }, { id: "b", text: "travail", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "D'___!", options: [{ id: "a", text: "accord", correct: true }, { id: "b", text: "idée", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Bonne ___!", options: [{ id: "a", text: "idée", correct: true }, { id: "b", text: "nuit", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Pourquoi ___?", options: [{ id: "a", text: "pas", correct: true }, { id: "b", text: "non", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___!", options: [{ id: "a", text: "super", correct: true }, { id: "b", text: "mal", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "On se ___.", options: [{ id: "a", text: "retrouve", correct: true }, { id: "b", text: "quitte", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Memnuniyetle!", correctAnswer: "Avec plaisir" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Evet, çok isterim", correctAnswer: "Oui, je veux bien" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Tamam!", correctAnswer: "D'accord" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "İyi fikir!", correctAnswer: "Bonne idée" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Neden olmasın?", correctAnswer: "Pourquoi pas" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Nerede buluşuyoruz?", correctAnswer: "On se retrouve où" }
];

// Unit 352 Quiz 3: Reddetmek
const unit352Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Je ne peux pas' ne demek?", options: [{ id: "a", text: "Yapamam", correct: true }, { id: "b", text: "Yapabilirim", correct: false }, { id: "c", text: "İsterim", correct: false }, { id: "d", text: "Giderim", correct: false }] },
    { id: 2, type: "SELECT", question: "'Je suis occupé' ne demek?", options: [{ id: "a", text: "Boştayım", correct: false }, { id: "b", text: "Meşgulüm", correct: true }, { id: "c", text: "Mutluyum", correct: false }, { id: "d", text: "Hastayım", correct: false }] },
    { id: 3, type: "SELECT", question: "'J'ai du travail' ne demek?", options: [{ id: "a", text: "Tatildeyim", correct: false }, { id: "b", text: "İşim var", correct: true }, { id: "c", text: "Param var", correct: false }, { id: "d", text: "Zamanım var", correct: false }] },
    { id: 4, type: "SELECT", question: "'Une autre fois' ne demek?", options: [{ id: "a", text: "İlk kez", correct: false }, { id: "b", text: "Başka zaman", correct: true }, { id: "c", text: "Son kez", correct: false }, { id: "d", text: "Hiçbir zaman", correct: false }] },
    { id: 5, type: "SELECT", question: "'C'est gentil, mais non' ne demek?", options: [{ id: "a", text: "Çok naziksin ama hayır", correct: true }, { id: "b", text: "Çok iyisin, evet", correct: false }, { id: "c", text: "Tamam", correct: false }, { id: "d", text: "Teşekkürler", correct: false }] },
    { id: 6, type: "SELECT", question: "'Désolé' ne demek?", options: [{ id: "a", text: "Mutlu", correct: false }, { id: "b", text: "Üzgün", correct: true }, { id: "c", text: "Kızgın", correct: false }, { id: "d", text: "Meşgul", correct: false }] },
    { id: 7, type: "SELECT", question: "'Peut-être' ne demek?", options: [{ id: "a", text: "Kesinlikle", correct: false }, { id: "b", text: "Belki", correct: true }, { id: "c", text: "Hayır", correct: false }, { id: "d", text: "Evet", correct: false }] },
    { id: 8, type: "SELECT", question: "'Non merci' ne demek?", options: [{ id: "a", text: "Evet teşekkürler", correct: false }, { id: "b", text: "Hayır teşekkürler", correct: true }, { id: "c", text: "Lütfen", correct: false }, { id: "d", text: "Tamam", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Désolé, je ne ___ pas.", options: [{ id: "a", text: "peux", correct: true }, { id: "b", text: "veux", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis ___.", options: [{ id: "a", text: "occupé", correct: true }, { id: "b", text: "libre", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai du ___.", options: [{ id: "a", text: "travail", correct: true }, { id: "b", text: "temps", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Une ___ fois.", options: [{ id: "a", text: "autre", correct: true }, { id: "b", text: "première", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est gentil, ___ non.", options: [{ id: "a", text: "mais", correct: true }, { id: "b", text: "et", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "___-être.", options: [{ id: "a", text: "Peut", correct: true }, { id: "b", text: "Doit", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Üzgünüm, yapamam", correctAnswer: "Désolé, je ne peux pas" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Meşgulüm", correctAnswer: "Je suis occupé" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "İşim var", correctAnswer: "J'ai du travail" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Belki başka zaman", correctAnswer: "Peut-être une autre fois" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Çok naziksin ama hayır", correctAnswer: "C'est gentil, mais non" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Hayır teşekkürler", correctAnswer: "Non merci" }
];

// Unit 352 Quiz 4: Kibarlık Kipi (Conditionnel)
const unit352Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Tu voudrais' ne demek?", options: [{ id: "a", text: "İster miydin", correct: true }, { id: "b", text: "İstiyorsun", correct: false }, { id: "c", text: "İstemedin", correct: false }, { id: "d", text: "İstemeyeceksin", correct: false }] },
    { id: 2, type: "SELECT", question: "'Voudriez-vous' ne demek?", options: [{ id: "a", text: "İster misiniz (resmi)", correct: true }, { id: "b", text: "İstiyorsunuz", correct: false }, { id: "c", text: "İstemediniz", correct: false }, { id: "d", text: "İstemeyeceksiniz", correct: false }] },
    { id: 3, type: "SELECT", question: "Hangisi daha kibar?", options: [{ id: "a", text: "Tu voudrais venir?", correct: true }, { id: "b", text: "Tu veux venir?", correct: false }, { id: "c", text: "Viens!", correct: false }, { id: "d", text: "Tu viens?", correct: false }] },
    { id: 4, type: "SELECT", question: "'À quelle heure?' ne demek?", options: [{ id: "a", text: "Saat kaçta?", correct: true }, { id: "b", text: "Ne zaman?", correct: false }, { id: "c", text: "Nerede?", correct: false }, { id: "d", text: "Nasıl?", correct: false }] },
    { id: 5, type: "SELECT", question: "'On se retrouve où?' ne demek?", options: [{ id: "a", text: "Nerede buluşuyoruz?", correct: true }, { id: "b", text: "Ne zaman buluşuyoruz?", correct: false }, { id: "c", text: "Saat kaçta?", correct: false }, { id: "d", text: "Kimle buluşuyoruz?", correct: false }] },
    { id: 6, type: "SELECT", question: "'À samedi!' ne demek?", options: [{ id: "a", text: "Cumartesiye görüşürüz!", correct: true }, { id: "b", text: "Cumartesi gel!", correct: false }, { id: "c", text: "Cumartesi yok", correct: false }, { id: "d", text: "Cumartesi meşgulüm", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le soir' ne demek?", options: [{ id: "a", text: "Akşam", correct: true }, { id: "b", text: "Sabah", correct: false }, { id: "c", text: "Öğlen", correct: false }, { id: "d", text: "Gece", correct: false }] },
    { id: 8, type: "SELECT", question: "'Samedi soir' ne demek?", options: [{ id: "a", text: "Cumartesi akşamı", correct: true }, { id: "b", text: "Cumartesi sabahı", correct: false }, { id: "c", text: "Pazar akşamı", correct: false }, { id: "d", text: "Cuma akşamı", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ venir? (kibar)", options: [{ id: "a", text: "voudrais", correct: true }, { id: "b", text: "veux", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "___-vous venir? (resmi)", options: [{ id: "a", text: "Voudriez", correct: true }, { id: "b", text: "Voulez", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "À quelle ___?", options: [{ id: "a", text: "heure", correct: true }, { id: "b", text: "jour", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "On se retrouve ___?", options: [{ id: "a", text: "où", correct: true }, { id: "b", text: "quand", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "À ___!", options: [{ id: "a", text: "samedi", correct: true }, { id: "b", text: "demain", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Samedi ___.", options: [{ id: "a", text: "soir", correct: true }, { id: "b", text: "matin", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Gelmek ister miydin? (kibar)", correctAnswer: "Tu voudrais venir" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Gelmek ister miydiniz? (resmi)", correctAnswer: "Voudriez-vous venir" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Saat kaçta?", correctAnswer: "À quelle heure" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Nerede buluşuyoruz?", correctAnswer: "On se retrouve où" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Cumartesiye görüşürüz!", correctAnswer: "À samedi" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Cumartesi akşamı saat 20'de", correctAnswer: "Samedi soir à 20 heures" }
];

// Unit 353 Quiz 1: Özür Kelimeleri
const unit353Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Pardon' ne demek?", options: [{ id: "a", text: "Afedersiniz", correct: true }, { id: "b", text: "Merhaba", correct: false }, { id: "c", text: "Teşekkürler", correct: false }, { id: "d", text: "Güle güle", correct: false }] },
    { id: 2, type: "SELECT", question: "'Excusez-moi' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Bakar mısınız", correct: true }, { id: "c", text: "Hoşça kal", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    { id: 3, type: "SELECT", question: "'Désolé' ne demek?", options: [{ id: "a", text: "Mutlu", correct: false }, { id: "b", text: "Üzgün", correct: true }, { id: "c", text: "Kızgın", correct: false }, { id: "d", text: "Yorgun", correct: false }] },
    { id: 4, type: "SELECT", question: "'Je m'excuse' ne demek?", options: [{ id: "a", text: "Özür dilerim", correct: true }, { id: "b", text: "Teşekkür ederim", correct: false }, { id: "c", text: "Rica ederim", correct: false }, { id: "d", text: "Nasılsınız", correct: false }] },
    { id: 5, type: "SELECT", question: "'C'est ma faute' ne demek?", options: [{ id: "a", text: "Senin hatan", correct: false }, { id: "b", text: "Benim hatam", correct: true }, { id: "c", text: "Onun hatası", correct: false }, { id: "d", text: "Kimsenin değil", correct: false }] },
    { id: 6, type: "SELECT", question: "'Je regrette' ne demek?", options: [{ id: "a", text: "Sevindim", correct: false }, { id: "b", text: "Pişmanım", correct: true }, { id: "c", text: "Geldim", correct: false }, { id: "d", text: "Gittim", correct: false }] },
    { id: 7, type: "SELECT", question: "'Pardonner' ne demek?", options: [{ id: "a", text: "Özür dilemek", correct: false }, { id: "b", text: "Affetmek", correct: true }, { id: "c", text: "Unutmak", correct: false }, { id: "d", text: "Hatırlamak", correct: false }] },
    { id: 8, type: "SELECT", question: "'Ce n'est pas grave' ne demek?", options: [{ id: "a", text: "Çok önemli", correct: false }, { id: "b", text: "Önemli değil", correct: true }, { id: "c", text: "Çok kötü", correct: false }, { id: "d", text: "Bilmiyorum", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis vraiment ___.", options: [{ id: "a", text: "désolé", correct: true }, { id: "b", text: "content", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "___, je suis en retard.", options: [{ id: "a", text: "Excusez-moi", correct: true }, { id: "b", text: "Merci", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ma ___.", options: [{ id: "a", text: "faute", correct: true }, { id: "b", text: "maison", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ beaucoup.", options: [{ id: "a", text: "regrette", correct: true }, { id: "b", text: "mange", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Ce n'est pas ___.", options: [{ id: "a", text: "grave", correct: true }, { id: "b", text: "bon", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Pardonnez-___.", options: [{ id: "a", text: "moi", correct: true }, { id: "b", text: "vous", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Gerçekten üzgünüm", correctAnswer: "Je suis vraiment désolé" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Özür dilerim", correctAnswer: "Je m'excuse" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Benim hatam", correctAnswer: "C'est ma faute" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Önemli değil", correctAnswer: "Ce n'est pas grave" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Beni affedin", correctAnswer: "Pardonnez-moi" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çok pişmanım", correctAnswer: "Je regrette beaucoup" }
];

// Unit 353 Quiz 2: Mazeretler
const unit353Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'J'ai oublié' ne demek?", options: [{ id: "a", text: "Unuttum", correct: true }, { id: "b", text: "Hatırladım", correct: false }, { id: "c", text: "Geldim", correct: false }, { id: "d", text: "Gittim", correct: false }] },
    { id: 2, type: "SELECT", question: "'Je suis en retard' ne demek?", options: [{ id: "a", text: "Erken geldim", correct: false }, { id: "b", text: "Geç kaldım", correct: true }, { id: "c", text: "Zamanında geldim", correct: false }, { id: "d", text: "Gelmiyorum", correct: false }] },
    { id: 3, type: "SELECT", question: "'Je suis malade' ne demek?", options: [{ id: "a", text: "Sağlıklıyım", correct: false }, { id: "b", text: "Hastayım", correct: true }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Meşgulum", correct: false }] },
    { id: 4, type: "SELECT", question: "'Il y a du trafic' ne demek?", options: [{ id: "a", text: "Trafik yok", correct: false }, { id: "b", text: "Trafik var", correct: true }, { id: "c", text: "Yol kapalı", correct: false }, { id: "d", text: "Araba bozuldu", correct: false }] },
    { id: 5, type: "SELECT", question: "'J'ai un problème' ne demek?", options: [{ id: "a", text: "Sorunum yok", correct: false }, { id: "b", text: "Bir sorunum var", correct: true }, { id: "c", text: "Mutluyum", correct: false }, { id: "d", text: "Meşgulum", correct: false }] },
    { id: 6, type: "SELECT", question: "'J'ai un empêchement' ne demek?", options: [{ id: "a", text: "Zamanım var", correct: false }, { id: "b", text: "Bir engelim var", correct: true }, { id: "c", text: "Müsaitim", correct: false }, { id: "d", text: "Boştayım", correct: false }] },
    { id: 7, type: "SELECT", question: "'Mon réveil n'a pas sonné' ne demek?", options: [{ id: "a", text: "Alarmım çaldı", correct: false }, { id: "b", text: "Alarmım çalmadı", correct: true }, { id: "c", text: "Erken kalktım", correct: false }, { id: "d", text: "Geç yattım", correct: false }] },
    { id: 8, type: "SELECT", question: "'Annuler' ne demek?", options: [{ id: "a", text: "Onaylamak", correct: false }, { id: "b", text: "İptal etmek", correct: true }, { id: "c", text: "Kabul etmek", correct: false }, { id: "d", text: "Devam etmek", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___!", options: [{ id: "a", text: "oublié", correct: true }, { id: "b", text: "mangé", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis en ___.", options: [{ id: "a", text: "retard", correct: true }, { id: "b", text: "avance", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis ___.", options: [{ id: "a", text: "malade", correct: true }, { id: "b", text: "content", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a du ___.", options: [{ id: "a", text: "trafic", correct: true }, { id: "b", text: "soleil", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon réveil n'a pas ___.", options: [{ id: "a", text: "sonné", correct: true }, { id: "b", text: "marché", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai un ___.", options: [{ id: "a", text: "empêchement", correct: true }, { id: "b", text: "rendez-vous", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Unuttum", correctAnswer: "J'ai oublié" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Geç kaldım", correctAnswer: "Je suis en retard" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Hastayım", correctAnswer: "Je suis malade" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Trafik var", correctAnswer: "Il y a du trafic" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Alarmım çalmadı", correctAnswer: "Mon réveil n'a pas sonné" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bir engelim var", correctAnswer: "J'ai un empêchement" }
];

// Unit 353 Quiz 3: Sebep Bağlaçları
const unit353Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Parce que' ne demek?", options: [{ id: "a", text: "Çünkü", correct: true }, { id: "b", text: "Ama", correct: false }, { id: "c", text: "Ve", correct: false }, { id: "d", text: "Veya", correct: false }] },
    { id: 2, type: "SELECT", question: "'À cause de' ne demek?", options: [{ id: "a", text: "Sayesinde", correct: false }, { id: "b", text: "Yüzünden", correct: true }, { id: "c", text: "İçin", correct: false }, { id: "d", text: "Karşı", correct: false }] },
    { id: 3, type: "SELECT", question: "'Car' ne demek?", options: [{ id: "a", text: "Araba", correct: false }, { id: "b", text: "Zira", correct: true }, { id: "c", text: "Çünkü değil", correct: false }, { id: "d", text: "Veya", correct: false }] },
    { id: 4, type: "SELECT", question: "'Parce qu'il y a du trafic' ne demek?", options: [{ id: "a", text: "Trafik yok", correct: false }, { id: "b", text: "Çünkü trafik var", correct: true }, { id: "c", text: "Trafik olmasına rağmen", correct: false }, { id: "d", text: "Trafiğe rağmen", correct: false }] },
    { id: 5, type: "SELECT", question: "'À cause du bus' ne demek?", options: [{ id: "a", text: "Otobüs sayesinde", correct: false }, { id: "b", text: "Otobüs yüzünden", correct: true }, { id: "c", text: "Otobüsle", correct: false }, { id: "d", text: "Otobüse", correct: false }] },
    { id: 6, type: "SELECT", question: "'Car je suis malade' ne demek?", options: [{ id: "a", text: "Hasta olmama rağmen", correct: false }, { id: "b", text: "Zira hastayım", correct: true }, { id: "c", text: "Hasta değilim", correct: false }, { id: "d", text: "Hasta olacağım", correct: false }] },
    { id: 7, type: "SELECT", question: "'La prochaine fois' ne demek?", options: [{ id: "a", text: "Geçen sefer", correct: false }, { id: "b", text: "Bir dahaki sefere", correct: true }, { id: "c", text: "Bu sefer", correct: false }, { id: "d", text: "Hiçbir zaman", correct: false }] },
    { id: 8, type: "SELECT", question: "'C'est promis' ne demek?", options: [{ id: "a", text: "Bilmiyorum", correct: false }, { id: "b", text: "Söz veriyorum", correct: true }, { id: "c", text: "Belki", correct: false }, { id: "d", text: "Hayır", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis en retard ___ il y a du trafic.", options: [{ id: "a", text: "parce qu'", correct: true }, { id: "b", text: "mais", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "___ du bus.", options: [{ id: "a", text: "À cause", correct: true }, { id: "b", text: "Grâce", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ne peux pas venir ___ je suis malade.", options: [{ id: "a", text: "car", correct: true }, { id: "b", text: "et", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___!", options: [{ id: "a", text: "promis", correct: true }, { id: "b", text: "fini", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ fois.", options: [{ id: "a", text: "prochaine", correct: true }, { id: "b", text: "dernière", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Parce ___ je suis fatigué.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "qui", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Çünkü trafik var", correctAnswer: "Parce qu'il y a du trafic" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Otobüs yüzünden", correctAnswer: "À cause du bus" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Zira hastayım", correctAnswer: "Car je suis malade" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Söz veriyorum", correctAnswer: "C'est promis" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bir dahaki sefere", correctAnswer: "La prochaine fois" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çünkü unuttum", correctAnswer: "Parce que j'ai oublié" }
];

// Unit 353 Quiz 4: Diyalog ve Tepkiler
const unit353Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Vous êtes en retard' ne demek?", options: [{ id: "a", text: "Geç kaldınız", correct: true }, { id: "b", text: "Erken geldiniz", correct: false }, { id: "c", text: "Hoş geldiniz", correct: false }, { id: "d", text: "Neredesiniz", correct: false }] },
    { id: 2, type: "SELECT", question: "'Pourquoi?' ne demek?", options: [{ id: "a", text: "Ne zaman", correct: false }, { id: "b", text: "Neden", correct: true }, { id: "c", text: "Nerede", correct: false }, { id: "d", text: "Nasıl", correct: false }] },
    { id: 3, type: "SELECT", question: "'Téléphonez-moi' ne demek?", options: [{ id: "a", text: "Bana yazın", correct: false }, { id: "b", text: "Beni arayın", correct: true }, { id: "c", text: "Bana gelin", correct: false }, { id: "d", text: "Beni dinleyin", correct: false }] },
    { id: 4, type: "SELECT", question: "'D'accord' ne demek?", options: [{ id: "a", text: "Hayır", correct: false }, { id: "b", text: "Tamam", correct: true }, { id: "c", text: "Belki", correct: false }, { id: "d", text: "Bilmiyorum", correct: false }] },
    { id: 5, type: "SELECT", question: "'Encore une fois' ne demek?", options: [{ id: "a", text: "İlk kez", correct: false }, { id: "b", text: "Bir kez daha", correct: true }, { id: "c", text: "Son kez", correct: false }, { id: "d", text: "Hiçbir zaman", correct: false }] },
    { id: 6, type: "SELECT", question: "'La réunion' ne demek?", options: [{ id: "a", text: "Ofis", correct: false }, { id: "b", text: "Toplantı", correct: true }, { id: "c", text: "Yemek", correct: false }, { id: "d", text: "Tatil", correct: false }] },
    { id: 7, type: "SELECT", question: "'Cette semaine' ne demek?", options: [{ id: "a", text: "Geçen hafta", correct: false }, { id: "b", text: "Bu hafta", correct: true }, { id: "c", text: "Gelecek hafta", correct: false }, { id: "d", text: "Her hafta", correct: false }] },
    { id: 8, type: "SELECT", question: "'Je vous en prie' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Rica ederim", correct: true }, { id: "c", text: "Özür dilerim", correct: false }, { id: "d", text: "Merhaba", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous êtes en ___!", options: [{ id: "a", text: "retard", correct: true }, { id: "b", text: "avance", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "___-moi!", options: [{ id: "a", text: "Téléphonez", correct: true }, { id: "b", text: "Mangez", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ a commencé.", options: [{ id: "a", text: "réunion", correct: true }, { id: "b", text: "fête", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Encore une ___.", options: [{ id: "a", text: "fois", correct: true }, { id: "b", text: "jour", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Cette ___.", options: [{ id: "a", text: "semaine", correct: true }, { id: "b", text: "année", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vous en ___.", options: [{ id: "a", text: "prie", correct: true }, { id: "b", text: "merci", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Geç kaldınız", correctAnswer: "Vous êtes en retard" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Toplantı başladı", correctAnswer: "La réunion a commencé" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Beni arayın", correctAnswer: "Téléphonez-moi" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bu hafta ikinci kez", correctAnswer: "C'est la deuxième fois cette semaine" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bir kez daha özür dilerim", correctAnswer: "Je m'excuse encore une fois" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Rica ederim", correctAnswer: "Je vous en prie" }
];

// Unit 354 Quiz 1: Yol Sözlüğü
const unit354Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Le feu rouge' ne demek?", options: [{ id: "a", text: "Kırmızı ışık", correct: true }, { id: "b", text: "Köprü", correct: false }, { id: "c", text: "Kavşak", correct: false }, { id: "d", text: "Sokak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le carrefour' ne demek?", options: [{ id: "a", text: "Köprü", correct: false }, { id: "b", text: "Kavşak", correct: true }, { id: "c", text: "Meydan", correct: false }, { id: "d", text: "Köşe", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le rond-point' ne demek?", options: [{ id: "a", text: "Köprü", correct: false }, { id: "b", text: "Döner kavşak", correct: true }, { id: "c", text: "Trafik lambası", correct: false }, { id: "d", text: "Yaya geçidi", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le pont' ne demek?", options: [{ id: "a", text: "Köprü", correct: true }, { id: "b", text: "Kavşak", correct: false }, { id: "c", text: "Tünel", correct: false }, { id: "d", text: "Yol", correct: false }] },
    { id: 5, type: "SELECT", question: "'Le passage piéton' ne demek?", options: [{ id: "a", text: "Araba yolu", correct: false }, { id: "b", text: "Yaya geçidi", correct: true }, { id: "c", text: "Bisiklet yolu", correct: false }, { id: "d", text: "Tren yolu", correct: false }] },
    { id: 6, type: "SELECT", question: "'Le coin' ne demek?", options: [{ id: "a", text: "Cadde", correct: false }, { id: "b", text: "Köşe", correct: true }, { id: "c", text: "Meydan", correct: false }, { id: "d", text: "Park", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le bout' ne demek?", options: [{ id: "a", text: "Başlangıç", correct: false }, { id: "b", text: "Son/Uç", correct: true }, { id: "c", text: "Orta", correct: false }, { id: "d", text: "Köşe", correct: false }] },
    { id: 8, type: "SELECT", question: "'La rue' ne demek?", options: [{ id: "a", text: "Cadde/Sokak", correct: true }, { id: "b", text: "Meydan", correct: false }, { id: "c", text: "Köprü", correct: false }, { id: "d", text: "Park", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Après le ___ rouge.", options: [{ id: "a", text: "feu", correct: true }, { id: "b", text: "pont", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Au ___.", options: [{ id: "a", text: "carrefour", correct: true }, { id: "b", text: "rue", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Traversez le ___.", options: [{ id: "a", text: "pont", correct: true }, { id: "b", text: "feu", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Au ___ de la rue.", options: [{ id: "a", text: "coin", correct: true }, { id: "b", text: "bout", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Au ___ de la rue.", options: [{ id: "a", text: "bout", correct: true }, { id: "b", text: "coin", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "La première ___.", options: [{ id: "a", text: "rue", correct: true }, { id: "b", text: "pont", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Kırmızı ışıkta", correctAnswer: "Au feu rouge" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Kavşakta", correctAnswer: "Au carrefour" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Köprüyü geç", correctAnswer: "Traversez le pont" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Sokağın köşesinde", correctAnswer: "Au coin de la rue" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Sokağın sonunda", correctAnswer: "Au bout de la rue" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Döner kavşakta", correctAnswer: "Au rond-point" }
];

// Unit 354 Quiz 2: Yön Fiilleri
const unit354Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Tournez' ne demek?", options: [{ id: "a", text: "Dönün", correct: true }, { id: "b", text: "Gidin", correct: false }, { id: "c", text: "Durun", correct: false }, { id: "d", text: "Geçin", correct: false }] },
    { id: 2, type: "SELECT", question: "'Allez' ne demek?", options: [{ id: "a", text: "Dönün", correct: false }, { id: "b", text: "Gidin", correct: true }, { id: "c", text: "Bekleyin", correct: false }, { id: "d", text: "Durun", correct: false }] },
    { id: 3, type: "SELECT", question: "'Continuez' ne demek?", options: [{ id: "a", text: "Dönün", correct: false }, { id: "b", text: "Devam edin", correct: true }, { id: "c", text: "Durun", correct: false }, { id: "d", text: "Geri dönün", correct: false }] },
    { id: 4, type: "SELECT", question: "'Traversez' ne demek?", options: [{ id: "a", text: "Geçin", correct: true }, { id: "b", text: "Dönün", correct: false }, { id: "c", text: "Gidin", correct: false }, { id: "d", text: "Bekleyin", correct: false }] },
    { id: 5, type: "SELECT", question: "'Prenez' ne demek?", options: [{ id: "a", text: "Alın/Girin", correct: true }, { id: "b", text: "Verin", correct: false }, { id: "c", text: "Bırakın", correct: false }, { id: "d", text: "Durun", correct: false }] },
    { id: 6, type: "SELECT", question: "'À gauche' ne demek?", options: [{ id: "a", text: "Sağa", correct: false }, { id: "b", text: "Sola", correct: true }, { id: "c", text: "Düz", correct: false }, { id: "d", text: "Geri", correct: false }] },
    { id: 7, type: "SELECT", question: "'À droite' ne demek?", options: [{ id: "a", text: "Sağa", correct: true }, { id: "b", text: "Sola", correct: false }, { id: "c", text: "Yukarı", correct: false }, { id: "d", text: "Aşağı", correct: false }] },
    { id: 8, type: "SELECT", question: "'Tout droit' ne demek?", options: [{ id: "a", text: "Sağa", correct: false }, { id: "b", text: "Dümdüz", correct: true }, { id: "c", text: "Sola", correct: false }, { id: "d", text: "Geri", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "___ à gauche.", options: [{ id: "a", text: "Tournez", correct: true }, { id: "b", text: "Allez", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "___ tout droit.", options: [{ id: "a", text: "Allez", correct: true }, { id: "b", text: "Tournez", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "___ jusqu'au feu.", options: [{ id: "a", text: "Continuez", correct: true }, { id: "b", text: "Tournez", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "___ le pont.", options: [{ id: "a", text: "Traversez", correct: true }, { id: "b", text: "Tournez", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "___ la première rue.", options: [{ id: "a", text: "Prenez", correct: true }, { id: "b", text: "Allez", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Tournez à ___.", options: [{ id: "a", text: "droite", correct: true }, { id: "b", text: "droit", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Sola dönün", correctAnswer: "Tournez à gauche" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Sağa dönün", correctAnswer: "Tournez à droite" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Düz gidin", correctAnswer: "Allez tout droit" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Devam edin", correctAnswer: "Continuez" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Köprüyü geçin", correctAnswer: "Traversez le pont" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Birinci sokağa girin", correctAnswer: "Prenez la première rue" }
];

// Unit 354 Quiz 3: Sıra Sayıları ve Mesafe
const unit354Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'La première rue' ne demek?", options: [{ id: "a", text: "Birinci sokak", correct: true }, { id: "b", text: "İkinci sokak", correct: false }, { id: "c", text: "Son sokak", correct: false }, { id: "d", text: "Ana sokak", correct: false }] },
    { id: 2, type: "SELECT", question: "'La deuxième rue' ne demek?", options: [{ id: "a", text: "Birinci sokak", correct: false }, { id: "b", text: "İkinci sokak", correct: true }, { id: "c", text: "Üçüncü sokak", correct: false }, { id: "d", text: "Son sokak", correct: false }] },
    { id: 3, type: "SELECT", question: "'La troisième rue' ne demek?", options: [{ id: "a", text: "İkinci sokak", correct: false }, { id: "b", text: "Üçüncü sokak", correct: true }, { id: "c", text: "Dördüncü sokak", correct: false }, { id: "d", text: "Birinci sokak", correct: false }] },
    { id: 4, type: "SELECT", question: "'C'est loin' ne demek?", options: [{ id: "a", text: "Yakın", correct: false }, { id: "b", text: "Uzak", correct: true }, { id: "c", text: "Burada", correct: false }, { id: "d", text: "Orada", correct: false }] },
    { id: 5, type: "SELECT", question: "'C'est près' ne demek?", options: [{ id: "a", text: "Uzak", correct: false }, { id: "b", text: "Yakın", correct: true }, { id: "c", text: "Karşıda", correct: false }, { id: "d", text: "Yanında", correct: false }] },
    { id: 6, type: "SELECT", question: "'À 5 minutes à pied' ne demek?", options: [{ id: "a", text: "5 dakika arabayla", correct: false }, { id: "b", text: "5 dakika yürüyerek", correct: true }, { id: "c", text: "5 kilometre", correct: false }, { id: "d", text: "5 saat", correct: false }] },
    { id: 7, type: "SELECT", question: "'En face' ne demek?", options: [{ id: "a", text: "Yanında", correct: false }, { id: "b", text: "Karşıda", correct: true }, { id: "c", text: "Arkasında", correct: false }, { id: "d", text: "Altında", correct: false }] },
    { id: 8, type: "SELECT", question: "'À côté de' ne demek?", options: [{ id: "a", text: "Karşısında", correct: false }, { id: "b", text: "Yanında", correct: true }, { id: "c", text: "Üstünde", correct: false }, { id: "d", text: "İçinde", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Prenez la ___ rue.", options: [{ id: "a", text: "première", correct: true }, { id: "b", text: "premier", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ rue à droite.", options: [{ id: "a", text: "deuxième", correct: true }, { id: "b", text: "deux", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ d'ici?", options: [{ id: "a", text: "loin", correct: true }, { id: "b", text: "près", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est tout ___.", options: [{ id: "a", text: "près", correct: true }, { id: "b", text: "loin", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est en ___ de la poste.", options: [{ id: "a", text: "face", correct: true }, { id: "b", text: "côté", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "À 10 minutes à ___.", options: [{ id: "a", text: "pied", correct: true }, { id: "b", text: "pieds", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Birinci sokağı alın", correctAnswer: "Prenez la première rue" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "İkinci sokakta sola dönün", correctAnswer: "Tournez à gauche à la deuxième rue" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Buradan uzak mı?", correctAnswer: "C'est loin d'ici?" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Yürüyerek 10 dakika", correctAnswer: "À 10 minutes à pied" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Postanın karşısında", correctAnswer: "En face de la poste" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Müzenin yanında", correctAnswer: "À côté du musée" }
];

// Unit 354 Quiz 4: Diyalog ve Bağlaçlar
const unit354Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Puis' ne demek?", options: [{ id: "a", text: "Sonra", correct: true }, { id: "b", text: "Önce", correct: false }, { id: "c", text: "Şimdi", correct: false }, { id: "d", text: "Hemen", correct: false }] },
    { id: 2, type: "SELECT", question: "'Ensuite' ne demek?", options: [{ id: "a", text: "Önce", correct: false }, { id: "b", text: "Ardından", correct: true }, { id: "c", text: "Burada", correct: false }, { id: "d", text: "Orada", correct: false }] },
    { id: 3, type: "SELECT", question: "'Après' ne demek?", options: [{ id: "a", text: "Sonra", correct: true }, { id: "b", text: "Önce", correct: false }, { id: "c", text: "Şu an", correct: false }, { id: "d", text: "Dün", correct: false }] },
    { id: 4, type: "SELECT", question: "'Jusqu'à' ne demek?", options: [{ id: "a", text: "-den beri", correct: false }, { id: "b", text: "-e kadar", correct: true }, { id: "c", text: "-den sonra", correct: false }, { id: "d", text: "-den önce", correct: false }] },
    { id: 5, type: "SELECT", question: "'Pardon madame' ne demek?", options: [{ id: "a", text: "Pardon hanımefendi", correct: true }, { id: "b", text: "Merhaba hanım", correct: false }, { id: "c", text: "Teşekkürler", correct: false }, { id: "d", text: "Güle güle", correct: false }] },
    { id: 6, type: "SELECT", question: "'C'est facile' ne demek?", options: [{ id: "a", text: "Zor", correct: false }, { id: "b", text: "Kolay", correct: true }, { id: "c", text: "Uzak", correct: false }, { id: "d", text: "Yakın", correct: false }] },
    { id: 7, type: "SELECT", question: "'Merci beaucoup' ne demek?", options: [{ id: "a", text: "Merhaba", correct: false }, { id: "b", text: "Çok teşekkürler", correct: true }, { id: "c", text: "Güle güle", correct: false }, { id: "d", text: "Rica ederim", correct: false }] },
    { id: 8, type: "SELECT", question: "'Je vous en prie' ne demek?", options: [{ id: "a", text: "Teşekkürler", correct: false }, { id: "b", text: "Rica ederim", correct: true }, { id: "c", text: "Merhaba", correct: false }, { id: "d", text: "Pardon", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Allez tout droit, ___ tournez.", options: [{ id: "a", text: "puis", correct: true }, { id: "b", text: "avant", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Continuez ___ au feu.", options: [{ id: "a", text: "jusqu'", correct: true }, { id: "b", text: "après", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___!", options: [{ id: "a", text: "facile", correct: true }, { id: "b", text: "difficile", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "___ madame.", options: [{ id: "a", text: "Pardon", correct: true }, { id: "b", text: "Merci", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Merci ___!", options: [{ id: "a", text: "beaucoup", correct: true }, { id: "b", text: "bien", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vous en ___.", options: [{ id: "a", text: "prie", correct: true }, { id: "b", text: "merci", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Müzeye nasıl gidilir?", correctAnswer: "Pour aller au musée?" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Düz gidin sonra sola dönün", correctAnswer: "Allez tout droit, puis tournez à gauche" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Işıklara kadar devam edin", correctAnswer: "Continuez jusqu'au feu" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Çok kolay", correctAnswer: "C'est très facile" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Çok teşekkürler", correctAnswer: "Merci beaucoup" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Rica ederim", correctAnswer: "Je vous en prie" }
];

// Unit 355 Quiz 1: Şehir Terimleri
const unit355Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'La ville' ne demek?", options: [{ id: "a", text: "Şehir", correct: true }, { id: "b", text: "Köy", correct: false }, { id: "c", text: "Ülke", correct: false }, { id: "d", text: "Bölge", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le quartier' ne demek?", options: [{ id: "a", text: "Şehir", correct: false }, { id: "b", text: "Mahalle/Semt", correct: true }, { id: "c", text: "Cadde", correct: false }, { id: "d", text: "Meydan", correct: false }] },
    { id: 3, type: "SELECT", question: "'La mosquée' ne demek?", options: [{ id: "a", text: "Kilise", correct: false }, { id: "b", text: "Cami", correct: true }, { id: "c", text: "Müze", correct: false }, { id: "d", text: "Köprü", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le musée' ne demek?", options: [{ id: "a", text: "Cami", correct: false }, { id: "b", text: "Müze", correct: true }, { id: "c", text: "Sinema", correct: false }, { id: "d", text: "Tiyatro", correct: false }] },
    { id: 5, type: "SELECT", question: "'Le pont' ne demek?", options: [{ id: "a", text: "Yol", correct: false }, { id: "b", text: "Köprü", correct: true }, { id: "c", text: "Tünel", correct: false }, { id: "d", text: "Meydan", correct: false }] },
    { id: 6, type: "SELECT", question: "'La place' ne demek?", options: [{ id: "a", text: "Yer", correct: false }, { id: "b", text: "Meydan", correct: true }, { id: "c", text: "Park", correct: false }, { id: "d", text: "Cadde", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le centre-ville' ne demek?", options: [{ id: "a", text: "Banliyö", correct: false }, { id: "b", text: "Şehir merkezi", correct: true }, { id: "c", text: "AVM", correct: false }, { id: "d", text: "İstasyon", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le bâtiment' ne demek?", options: [{ id: "a", text: "Apartman", correct: false }, { id: "b", text: "Bina", correct: true }, { id: "c", text: "Ev", correct: false }, { id: "d", text: "Ofis", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est une grande ___.", options: [{ id: "a", text: "ville", correct: true }, { id: "b", text: "quartier", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a une ___ Bleue.", options: [{ id: "a", text: "Mosquée", correct: true }, { id: "b", text: "Église", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ de Paris.", options: [{ id: "a", text: "centre-ville", correct: true }, { id: "b", text: "quartier", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Sur le ___ du Bosphore.", options: [{ id: "a", text: "pont", correct: true }, { id: "b", text: "place", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Visitez le ___.", options: [{ id: "a", text: "musée", correct: true }, { id: "b", text: "mosquée", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ principale.", options: [{ id: "a", text: "rue", correct: true }, { id: "b", text: "pont", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Tarihi bir şehir", correctAnswer: "Une ville historique" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Güzel bir semt", correctAnswer: "Un beau quartier" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Ünlü bir cami", correctAnswer: "Une mosquée célèbre" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Şehir merkezi", correctAnswer: "Le centre-ville" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Ana meydan", correctAnswer: "La place principale" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Büyük bir bina", correctAnswer: "Un grand bâtiment" }
];

// Unit 355 Quiz 2: Şehir Sıfatları
const unit355Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Grand' ne demek?", options: [{ id: "a", text: "Büyük", correct: true }, { id: "b", text: "Küçük", correct: false }, { id: "c", text: "Eski", correct: false }, { id: "d", text: "Yeni", correct: false }] },
    { id: 2, type: "SELECT", question: "'Petit' ne demek?", options: [{ id: "a", text: "Büyük", correct: false }, { id: "b", text: "Küçük", correct: true }, { id: "c", text: "Güzel", correct: false }, { id: "d", text: "Çirkin", correct: false }] },
    { id: 3, type: "SELECT", question: "'Beau/Belle' ne demek?", options: [{ id: "a", text: "Çirkin", correct: false }, { id: "b", text: "Güzel", correct: true }, { id: "c", text: "Eski", correct: false }, { id: "d", text: "Yeni", correct: false }] },
    { id: 4, type: "SELECT", question: "'Vieux/Vieille' ne demek?", options: [{ id: "a", text: "Yeni", correct: false }, { id: "b", text: "Eski/Tarihi", correct: true }, { id: "c", text: "Modern", correct: false }, { id: "d", text: "Güzel", correct: false }] },
    { id: 5, type: "SELECT", question: "'Moderne' ne demek?", options: [{ id: "a", text: "Eski", correct: false }, { id: "b", text: "Modern", correct: true }, { id: "c", text: "Tarihi", correct: false }, { id: "d", text: "Antik", correct: false }] },
    { id: 6, type: "SELECT", question: "'Célèbre' ne demek?", options: [{ id: "a", text: "Sakin", correct: false }, { id: "b", text: "Ünlü", correct: true }, { id: "c", text: "Gürültülü", correct: false }, { id: "d", text: "Sessiz", correct: false }] },
    { id: 7, type: "SELECT", question: "'Calme' ne demek?", options: [{ id: "a", text: "Gürültülü", correct: false }, { id: "b", text: "Sakin", correct: true }, { id: "c", text: "Hızlı", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    { id: 8, type: "SELECT", question: "'Bruyant' ne demek?", options: [{ id: "a", text: "Sakin", correct: false }, { id: "b", text: "Gürültülü", correct: true }, { id: "c", text: "Sessiz", correct: false }, { id: "d", text: "Huzurlu", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est une ___ ville.", options: [{ id: "a", text: "grande", correct: true }, { id: "b", text: "grand", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Une ___ église.", options: [{ id: "a", text: "vieille", correct: true }, { id: "b", text: "vieux", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Un ___ quartier.", options: [{ id: "a", text: "beau", correct: true }, { id: "b", text: "belle", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Une ville ___.", options: [{ id: "a", text: "célèbre", correct: true }, { id: "b", text: "calme", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Un endroit très ___.", options: [{ id: "a", text: "calme", correct: true }, { id: "b", text: "bruyant", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Une architecture ___.", options: [{ id: "a", text: "moderne", correct: true }, { id: "b", text: "vieille", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Büyük bir şehir", correctAnswer: "Une grande ville" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Güzel bir yer", correctAnswer: "Un bel endroit" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Eski bir kilise", correctAnswer: "Une vieille église" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Sakin bir mahalle", correctAnswer: "Un quartier calme" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Ünlü bir müze", correctAnswer: "Un musée célèbre" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Modern bir bina", correctAnswer: "Un bâtiment moderne" }
];

// Unit 355 Quiz 3: Konum ve Edatlar
const unit355Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Près de' ne demek?", options: [{ id: "a", text: "Yakınında", correct: true }, { id: "b", text: "Uzağında", correct: false }, { id: "c", text: "Yanında", correct: false }, { id: "d", text: "Karşısında", correct: false }] },
    { id: 2, type: "SELECT", question: "'Loin de' ne demek?", options: [{ id: "a", text: "Yakınında", correct: false }, { id: "b", text: "Uzağında", correct: true }, { id: "c", text: "İçinde", correct: false }, { id: "d", text: "Dışında", correct: false }] },
    { id: 3, type: "SELECT", question: "'À côté de' ne demek?", options: [{ id: "a", text: "Karşısında", correct: false }, { id: "b", text: "Yanında", correct: true }, { id: "c", text: "Arkasında", correct: false }, { id: "d", text: "Önünde", correct: false }] },
    { id: 4, type: "SELECT", question: "'En face de' ne demek?", options: [{ id: "a", text: "Yanında", correct: false }, { id: "b", text: "Karşısında", correct: true }, { id: "c", text: "Yakınında", correct: false }, { id: "d", text: "Uzağında", correct: false }] },
    { id: 5, type: "SELECT", question: "'Dans' ne demek?", options: [{ id: "a", text: "Dışında", correct: false }, { id: "b", text: "İçinde", correct: true }, { id: "c", text: "Üstünde", correct: false }, { id: "d", text: "Altında", correct: false }] },
    { id: 6, type: "SELECT", question: "'Il y a' ne demek?", options: [{ id: "a", text: "O var", correct: false }, { id: "b", text: "Vardır", correct: true }, { id: "c", text: "Burası", correct: false }, { id: "d", text: "Orası", correct: false }] },
    { id: 7, type: "SELECT", question: "'C'est' ne demek?", options: [{ id: "a", text: "Vardır", correct: false }, { id: "b", text: "O.../Budur", correct: true }, { id: "c", text: "Var mı", correct: false }, { id: "d", text: "Nerede", correct: false }] },
    { id: 8, type: "SELECT", question: "'C'est loin?' ne demek?", options: [{ id: "a", text: "Yakın mı?", correct: false }, { id: "b", text: "Uzak mı?", correct: true }, { id: "c", text: "Burada mı?", correct: false }, { id: "d", text: "Nerede?", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ de la mosquée.", options: [{ id: "a", text: "près", correct: true }, { id: "b", text: "loin", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est à ___ du musée.", options: [{ id: "a", text: "côté", correct: true }, { id: "b", text: "face", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est en ___ de l'hôtel.", options: [{ id: "a", text: "face", correct: true }, { id: "b", text: "côté", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y ___ un parc.", options: [{ id: "a", text: "a", correct: true }, { id: "b", text: "est", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "___ la ville.", options: [{ id: "a", text: "Dans", correct: true }, { id: "b", text: "Sur", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ d'ici.", options: [{ id: "a", text: "loin", correct: true }, { id: "b", text: "près", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Caminin yakınında", correctAnswer: "Près de la mosquée" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Müzenin yanında", correctAnswer: "À côté du musée" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Otelin karşısında", correctAnswer: "En face de l'hôtel" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Buradan uzak mı?", correctAnswer: "C'est loin d'ici?" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bir park var", correctAnswer: "Il y a un parc" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Şehrin içinde", correctAnswer: "Dans la ville" }
];

// Unit 355 Quiz 4: Şehir Diyaloğu ve Turizm
const unit355Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Qu'est-ce qu'il y a?' ne demek?", options: [{ id: "a", text: "Ne var?", correct: true }, { id: "b", text: "Nerede?", correct: false }, { id: "c", text: "Ne zaman?", correct: false }, { id: "d", text: "Nasıl?", correct: false }] },
    { id: 2, type: "SELECT", question: "'À voir' ne demek?", options: [{ id: "a", text: "Görülecek", correct: true }, { id: "b", text: "Yapılacak", correct: false }, { id: "c", text: "Gidilecek", correct: false }, { id: "d", text: "Yenilecek", correct: false }] },
    { id: 3, type: "SELECT", question: "'C'est magnifique' ne demek?", options: [{ id: "a", text: "Berbat", correct: false }, { id: "b", text: "Muhteşem", correct: true }, { id: "c", text: "Normal", correct: false }, { id: "d", text: "Kötü", correct: false }] },
    { id: 4, type: "SELECT", question: "'L'endroit' ne demek?", options: [{ id: "a", text: "Zaman", correct: false }, { id: "b", text: "Yer", correct: true }, { id: "c", text: "Kişi", correct: false }, { id: "d", text: "Şey", correct: false }] },
    { id: 5, type: "SELECT", question: "'À pied' ne demek?", options: [{ id: "a", text: "Arabayla", correct: false }, { id: "b", text: "Yürüyerek", correct: true }, { id: "c", text: "Metroyla", correct: false }, { id: "d", text: "Otobüsle", correct: false }] },
    { id: 6, type: "SELECT", question: "'Historique' ne demek?", options: [{ id: "a", text: "Modern", correct: false }, { id: "b", text: "Tarihi", correct: true }, { id: "c", text: "Yeni", correct: false }, { id: "d", text: "Eski", correct: false }] },
    { id: 7, type: "SELECT", question: "'Je vous recommande' ne demek?", options: [{ id: "a", text: "Sizi uyarıyorum", correct: false }, { id: "b", text: "Tavsiye ederim", correct: true }, { id: "c", text: "Sizi arıyorum", correct: false }, { id: "d", text: "Sizi bekliyorum", correct: false }] },
    { id: 8, type: "SELECT", question: "'Visiter' ne demek?", options: [{ id: "a", text: "Görmek", correct: false }, { id: "b", text: "Ziyaret etmek", correct: true }, { id: "c", text: "Kalmak", correct: false }, { id: "d", text: "Çalışmak", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Qu'est-ce qu'il y a à ___ là-bas?", options: [{ id: "a", text: "voir", correct: true }, { id: "b", text: "faire", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est à 10 minutes à ___.", options: [{ id: "a", text: "pied", correct: true }, { id: "b", text: "main", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est un endroit très ___.", options: [{ id: "a", text: "historique", correct: true }, { id: "b", text: "histoire", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vous ___ de visiter.", options: [{ id: "a", text: "recommande", correct: true }, { id: "b", text: "demande", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___!", options: [{ id: "a", text: "magnifique", correct: true }, { id: "b", text: "terrible", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est excellente.", options: [{ id: "a", text: "gastronomie", correct: true }, { id: "b", text: "géographie", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Görülecek ne var?", correctAnswer: "Qu'est-ce qu'il y a à voir?" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Yürüyerek 10 dakika", correctAnswer: "À 10 minutes à pied" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Muhteşem bir yer", correctAnswer: "C'est un endroit magnifique" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Ziyaret etmenizi tavsiye ederim", correctAnswer: "Je vous recommande de visiter" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Mutfağı mükemmel", correctAnswer: "La gastronomie est excellente" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çok tarihi bir yer", correctAnswer: "C'est un endroit très historique" }
];

// Unit 356 Quiz 1: Kültür Terimleri
const unit356Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'La culture' ne demek?", options: [{ id: "a", text: "Kültür", correct: true }, { id: "b", text: "Gelenek", correct: false }, { id: "c", text: "Alışkanlık", correct: false }, { id: "d", text: "Fark", correct: false }] },
    { id: 2, type: "SELECT", question: "'La coutume' ne demek?", options: [{ id: "a", text: "Kültür", correct: false }, { id: "b", text: "Gelenek/Adet", correct: true }, { id: "c", text: "Nezaket", correct: false }, { id: "d", text: "Benzerlik", correct: false }] },
    { id: 3, type: "SELECT", question: "'La différence' ne demek?", options: [{ id: "a", text: "Benzerlik", correct: false }, { id: "b", text: "Fark", correct: true }, { id: "c", text: "Gelenek", correct: false }, { id: "d", text: "Ülke", correct: false }] },
    { id: 4, type: "SELECT", question: "'La ressemblance' ne demek?", options: [{ id: "a", text: "Fark", correct: false }, { id: "b", text: "Benzerlik", correct: true }, { id: "c", text: "Alışkanlık", correct: false }, { id: "d", text: "Kültür", correct: false }] },
    { id: 5, type: "SELECT", question: "'L'habitude' ne demek?", options: [{ id: "a", text: "Gelenek", correct: false }, { id: "b", text: "Alışkanlık", correct: true }, { id: "c", text: "Nezaket", correct: false }, { id: "d", text: "Yabancı", correct: false }] },
    { id: 6, type: "SELECT", question: "'La politesse' ne demek?", options: [{ id: "a", text: "Politika", correct: false }, { id: "b", text: "Nezaket", correct: true }, { id: "c", text: "Kibarlık", correct: false }, { id: "d", text: "Polis", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le pays' ne demek?", options: [{ id: "a", text: "Şehir", correct: false }, { id: "b", text: "Ülke", correct: true }, { id: "c", text: "Bölge", correct: false }, { id: "d", text: "Köy", correct: false }] },
    { id: 8, type: "SELECT", question: "'Étranger' ne demek?", options: [{ id: "a", text: "Garip", correct: false }, { id: "b", text: "Yabancı", correct: true }, { id: "c", text: "Turist", correct: false }, { id: "d", text: "Misafir", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est une ___ locale.", options: [{ id: "a", text: "coutume", correct: true }, { id: "b", text: "culture", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "La ___ est importante en France.", options: [{ id: "a", text: "politesse", correct: true }, { id: "b", text: "coutume", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Il y a une grande ___ entre les cultures.", options: [{ id: "a", text: "différence", correct: true }, { id: "b", text: "ressemblance", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est une ___ française.", options: [{ id: "a", text: "habitude", correct: true }, { id: "b", text: "politesse", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Quel ___ visitez-vous?", options: [{ id: "a", text: "pays", correct: true }, { id: "b", text: "ville", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est ___ en France.", options: [{ id: "a", text: "étranger", correct: true }, { id: "b", text: "français", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Yerel bir gelenek", correctAnswer: "Une coutume locale" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Kültürel farklar", correctAnswer: "Les différences culturelles" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Nezaket çok önemli", correctAnswer: "La politesse est très importante" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Günlük hayat", correctAnswer: "La vie quotidienne" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bu bir alışkanlık", correctAnswer: "C'est une habitude" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Yabancı bir ülke", correctAnswer: "Un pays étranger" }
];

// Unit 356 Quiz 2: Karşılaştırma (Plus...que)
const unit356Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Plus...que' ne demek?", options: [{ id: "a", text: "Daha...dan", correct: true }, { id: "b", text: "Daha az", correct: false }, { id: "c", text: "En çok", correct: false }, { id: "d", text: "Kadar", correct: false }] },
    { id: 2, type: "SELECT", question: "'Moins...que' ne demek?", options: [{ id: "a", text: "Daha çok", correct: false }, { id: "b", text: "Daha az...dan", correct: true }, { id: "c", text: "En az", correct: false }, { id: "d", text: "Kadar", correct: false }] },
    { id: 3, type: "SELECT", question: "'Aussi...que' ne demek?", options: [{ id: "a", text: "Daha çok", correct: false }, { id: "b", text: "...kadar", correct: true }, { id: "c", text: "Daha az", correct: false }, { id: "d", text: "En", correct: false }] },
    { id: 4, type: "SELECT", question: "'Grand' kelimesinin karşılaştırma hali?", options: [{ id: "a", text: "Plus grand", correct: true }, { id: "b", text: "Grande", correct: false }, { id: "c", text: "Grandement", correct: false }, { id: "d", text: "Grander", correct: false }] },
    { id: 5, type: "SELECT", question: "'Petit' kelimesinin karşılaştırma hali?", options: [{ id: "a", text: "Petite", correct: false }, { id: "b", text: "Plus petit", correct: true }, { id: "c", text: "Petitement", correct: false }, { id: "d", text: "Moins petite", correct: false }] },
    { id: 6, type: "SELECT", question: "'Fort' ne demek?", options: [{ id: "a", text: "Zayıf", correct: false }, { id: "b", text: "Güçlü/Sert", correct: true }, { id: "c", text: "Hafif", correct: false }, { id: "d", text: "Yumuşak", correct: false }] },
    { id: 7, type: "SELECT", question: "'Léger' ne demek?", options: [{ id: "a", text: "Ağır", correct: false }, { id: "b", text: "Hafif", correct: true }, { id: "c", text: "Sert", correct: false }, { id: "d", text: "Büyük", correct: false }] },
    { id: 8, type: "SELECT", question: "'Tard' ne demek?", options: [{ id: "a", text: "Erken", correct: false }, { id: "b", text: "Geç", correct: true }, { id: "c", text: "Hızlı", correct: false }, { id: "d", text: "Yavaş", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "La France est plus petite ___ la Turquie.", options: [{ id: "a", text: "que", correct: true }, { id: "b", text: "de", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Le café turc est plus ___ que le café français.", options: [{ id: "a", text: "fort", correct: true }, { id: "b", text: "léger", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Les Français mangent plus ___ que les Turcs.", options: [{ id: "a", text: "tard", correct: true }, { id: "b", text: "tôt", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Le petit-déjeuner turc est plus ___ qu'en France.", options: [{ id: "a", text: "grand", correct: true }, { id: "b", text: "petit", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Le croissant est plus ___ que le börek.", options: [{ id: "a", text: "léger", correct: true }, { id: "b", text: "lourd", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Les gens sont ___ sympas qu'en Turquie.", options: [{ id: "a", text: "aussi", correct: true }, { id: "b", text: "plus", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Fransa Türkiye'den daha küçük", correctAnswer: "La France est plus petite que la Turquie" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Türk kahvesi daha sert", correctAnswer: "Le café turc est plus fort" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Fransızlar daha geç yemek yer", correctAnswer: "Les Français mangent plus tard" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kahvaltı daha büyük", correctAnswer: "Le petit-déjeuner est plus grand" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Daha hafif", correctAnswer: "C'est plus léger" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İnsanlar kadar sempatik", correctAnswer: "Les gens sont aussi sympas" }
];

// Unit 356 Quiz 3: Fransa-Türkiye Farkları (La Bise, Vous/Tu)
const unit356Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'La bise' ne demek?", options: [{ id: "a", text: "El sıkışma", correct: false }, { id: "b", text: "Yanaktan öpücük", correct: true }, { id: "c", text: "Sarılma", correct: false }, { id: "d", text: "Selamlama", correct: false }] },
    { id: 2, type: "SELECT", question: "'Faire la bise' ne demek?", options: [{ id: "a", text: "El sıkışmak", correct: false }, { id: "b", text: "Yanaktan öpmek", correct: true }, { id: "c", text: "Sarılmak", correct: false }, { id: "d", text: "El sallamak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Se serrer la main' ne demek?", options: [{ id: "a", text: "Yanaktan öpmek", correct: false }, { id: "b", text: "El sıkışmak", correct: true }, { id: "c", text: "Sarılmak", correct: false }, { id: "d", text: "Baş eğmek", correct: false }] },
    { id: 4, type: "SELECT", question: "Paris'te kaç öpücük yapılır?", options: [{ id: "a", text: "Bir", correct: false }, { id: "b", text: "İki", correct: true }, { id: "c", text: "Üç", correct: false }, { id: "d", text: "Dört", correct: false }] },
    { id: 5, type: "SELECT", question: "Fransa'da akşam yemeği saat kaçta?", options: [{ id: "a", text: "18:00", correct: false }, { id: "b", text: "19:00", correct: false }, { id: "c", text: "20:00-21:00", correct: true }, { id: "d", text: "17:00", correct: false }] },
    { id: 6, type: "SELECT", question: "Fransa'da tanımadığın birine ne dersin?", options: [{ id: "a", text: "Tu", correct: false }, { id: "b", text: "Vous", correct: true }, { id: "c", text: "Abi", correct: false }, { id: "d", text: "Kardeş", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le dîner' ne demek?", options: [{ id: "a", text: "Kahvaltı", correct: false }, { id: "b", text: "Öğle yemeği", correct: false }, { id: "c", text: "Akşam yemeği", correct: true }, { id: "d", text: "Atıştırmalık", correct: false }] },
    { id: 8, type: "SELECT", question: "'Le petit-déjeuner' ne demek?", options: [{ id: "a", text: "Akşam yemeği", correct: false }, { id: "b", text: "Kahvaltı", correct: true }, { id: "c", text: "Öğle yemeği", correct: false }, { id: "d", text: "Tatlı", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "En France, on fait la ___ pour se saluer.", options: [{ id: "a", text: "bise", correct: true }, { id: "b", text: "main", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "En Turquie, on se serre la ___.", options: [{ id: "a", text: "main", correct: true }, { id: "b", text: "bise", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ de dire 'tu' à un inconnu.", options: [{ id: "a", text: "impoli", correct: true }, { id: "b", text: "poli", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "La politesse est très ___ en France.", options: [{ id: "a", text: "importante", correct: true }, { id: "b", text: "normale", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Dans le ___, on fait trois bises.", options: [{ id: "a", text: "sud", correct: true }, { id: "b", text: "nord", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Ça ___ de la région.", options: [{ id: "a", text: "dépend", correct: true }, { id: "b", text: "change", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Fransa'da yanaktan öpüşülür", correctAnswer: "En France, on fait la bise" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Türkiye'de el sıkışılır", correctAnswer: "En Turquie, on se serre la main" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Nezaket çok önemli", correctAnswer: "La politesse est très importante" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bölgeye bağlı", correctAnswer: "Ça dépend de la région" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bizde farklı", correctAnswer: "Chez nous, c'est différent" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Güneyde üç öpücük yapılır", correctAnswer: "Dans le sud, on fait trois bises" }
];

// Unit 356 Quiz 4: Kültür Diyaloğu ve Yemek Farkları
const unit356Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'La cuisine' ne demek?", options: [{ id: "a", text: "Mutfak", correct: true }, { id: "b", text: "Yemek odası", correct: false }, { id: "c", text: "Restoran", correct: false }, { id: "d", text: "Sofra", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le croissant' ne demek?", options: [{ id: "a", text: "Ekmek", correct: false }, { id: "b", text: "Kruvasan", correct: true }, { id: "c", text: "Pasta", correct: false }, { id: "d", text: "Kek", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le fromage' ne demek?", options: [{ id: "a", text: "Tereyağı", correct: false }, { id: "b", text: "Peynir", correct: true }, { id: "c", text: "Süt", correct: false }, { id: "d", text: "Yoğurt", correct: false }] },
    { id: 4, type: "SELECT", question: "'Les olives' ne demek?", options: [{ id: "a", text: "Salatalık", correct: false }, { id: "b", text: "Zeytinler", correct: true }, { id: "c", text: "Domates", correct: false }, { id: "d", text: "Biber", correct: false }] },
    { id: 5, type: "SELECT", question: "'Les œufs' ne demek?", options: [{ id: "a", text: "Ekmek", correct: false }, { id: "b", text: "Yumurtalar", correct: true }, { id: "c", text: "Bal", correct: false }, { id: "d", text: "Reçel", correct: false }] },
    { id: 6, type: "SELECT", question: "'C'est vrai' ne demek?", options: [{ id: "a", text: "Yanlış", correct: false }, { id: "b", text: "Doğru/Gerçek", correct: true }, { id: "c", text: "Belki", correct: false }, { id: "d", text: "Bilmiyorum", correct: false }] },
    { id: 7, type: "SELECT", question: "'Bizarre' ne demek?", options: [{ id: "a", text: "Normal", correct: false }, { id: "b", text: "Garip/Tuhaf", correct: true }, { id: "c", text: "Güzel", correct: false }, { id: "d", text: "İlginç", correct: false }] },
    { id: 8, type: "SELECT", question: "'Normal' ne demek?", options: [{ id: "a", text: "Garip", correct: false }, { id: "b", text: "Normal", correct: true }, { id: "c", text: "Farklı", correct: false }, { id: "d", text: "Özel", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu aimes la ___ française?", options: [{ id: "a", text: "cuisine", correct: true }, { id: "b", text: "culture", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Le petit-déjeuner est très ___.", options: [{ id: "a", text: "différent", correct: true }, { id: "b", text: "pareil", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "On mange du ___, des olives.", options: [{ id: "a", text: "fromage", correct: true }, { id: "b", text: "croissant", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est plus ___ qu'en France.", options: [{ id: "a", text: "grand", correct: true }, { id: "b", text: "petit", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___! Je trouve ça bizarre.", options: [{ id: "a", text: "vrai", correct: true }, { id: "b", text: "faux", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est ___ maintenant.", options: [{ id: "a", text: "normal", correct: true }, { id: "b", text: "bizarre", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Fransız mutfağını seviyor musun?", correctAnswer: "Tu aimes la cuisine française?" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Kahvaltı çok farklı", correctAnswer: "Le petit-déjeuner est très différent" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Peynir ve zeytin yiyoruz", correctAnswer: "On mange du fromage et des olives" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Sadece kruvasan ve kahve", correctAnswer: "Juste un croissant et du café" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Daha hafif", correctAnswer: "C'est plus léger" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Artık normal", correctAnswer: "C'est normal maintenant" }
];

// Unit 357 Quiz 1: Okul Terimleri
const unit357Quiz1: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'L'école' ne demek?", options: [{ id: "a", text: "Okul", correct: true }, { id: "b", text: "Sınıf", correct: false }, { id: "c", text: "Öğretmen", correct: false }, { id: "d", text: "Kitap", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le lycée' ne demek?", options: [{ id: "a", text: "Üniversite", correct: false }, { id: "b", text: "Lise", correct: true }, { id: "c", text: "İlkokul", correct: false }, { id: "d", text: "Anaokulu", correct: false }] },
    { id: 3, type: "SELECT", question: "'L'étudiant' ne demek?", options: [{ id: "a", text: "Öğretmen", correct: false }, { id: "b", text: "Öğrenci (üniv.)", correct: true }, { id: "c", text: "Müdür", correct: false }, { id: "d", text: "Defter", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le professeur' ne demek?", options: [{ id: "a", text: "Öğrenci", correct: false }, { id: "b", text: "Defter", correct: false }, { id: "c", text: "Öğretmen", correct: true }, { id: "d", text: "Sınıf", correct: false }] },
    { id: 5, type: "SELECT", question: "'La bibliothèque' ne demek?", options: [{ id: "a", text: "Kitapçı", correct: false }, { id: "b", text: "Kütüphane", correct: true }, { id: "c", text: "Sınıf", correct: false }, { id: "d", text: "Kantin", correct: false }] },
    { id: 6, type: "SELECT", question: "'Le cahier' ne demek?", options: [{ id: "a", text: "Kitap", correct: false }, { id: "b", text: "Kalem", correct: false }, { id: "c", text: "Defter", correct: true }, { id: "d", text: "Silgi", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le livre' ne demek?", options: [{ id: "a", text: "Kitap", correct: true }, { id: "b", text: "Defter", correct: false }, { id: "c", text: "Sözlük", correct: false }, { id: "d", text: "Dergi", correct: false }] },
    { id: 8, type: "SELECT", question: "'La classe' ne demek?", options: [{ id: "a", text: "Okul", correct: false }, { id: "b", text: "Sınıf", correct: true }, { id: "c", text: "Öğretmen", correct: false }, { id: "d", text: "Ders", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais à ___.", options: [{ id: "a", text: "l'école", correct: true }, { id: "b", text: "le école", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Il est au ___.", options: [{ id: "a", text: "lycée", correct: true }, { id: "b", text: "école", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "J'étudie à la ___.", options: [{ id: "a", text: "bibliothèque", correct: true }, { id: "b", text: "école", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ explique bien.", options: [{ id: "a", text: "professeur", correct: true }, { id: "b", text: "étudiant", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "J'écris dans mon ___.", options: [{ id: "a", text: "cahier", correct: true }, { id: "b", text: "livre", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je lis un ___.", options: [{ id: "a", text: "livre", correct: true }, { id: "b", text: "cahier", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Okula gidiyorum", correctAnswer: "Je vais à l'école" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "O lisede", correctAnswer: "Il est au lycée" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Üniversitede okuyorum", correctAnswer: "J'étudie à l'université" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kütüphanede çalışıyorum", correctAnswer: "J'étudie à la bibliothèque" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Sınıftayım", correctAnswer: "Je suis en classe" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Hoca dersi açıklıyor", correctAnswer: "Le prof explique la leçon" }
];

// Unit 357 Quiz 2: Eğitim Fiilleri
const unit357Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Apprendre' ne demek?", options: [{ id: "a", text: "Öğrenmek", correct: true }, { id: "b", text: "Anlamak", correct: false }, { id: "c", text: "Çalışmak", correct: false }, { id: "d", text: "Okumak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Comprendre' ne demek?", options: [{ id: "a", text: "Öğrenmek", correct: false }, { id: "b", text: "Anlamak", correct: true }, { id: "c", text: "Sormak", correct: false }, { id: "d", text: "Açıklamak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Étudier' ne demek?", options: [{ id: "a", text: "Dinlemek", correct: false }, { id: "b", text: "Ders çalışmak", correct: true }, { id: "c", text: "Yazmak", correct: false }, { id: "d", text: "Okumak", correct: false }] },
    { id: 4, type: "SELECT", question: "'Expliquer' ne demek?", options: [{ id: "a", text: "Sormak", correct: false }, { id: "b", text: "Açıklamak", correct: true }, { id: "c", text: "Cevaplamak", correct: false }, { id: "d", text: "Dinlemek", correct: false }] },
    { id: 5, type: "SELECT", question: "'Demander' ne demek?", options: [{ id: "a", text: "Cevaplamak", correct: false }, { id: "b", text: "Sormak/İstemek", correct: true }, { id: "c", text: "Dinlemek", correct: false }, { id: "d", text: "Yazmak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Réviser' ne demek?", options: [{ id: "a", text: "Yazmak", correct: false }, { id: "b", text: "Tekrar etmek", correct: true }, { id: "c", text: "Silmek", correct: false }, { id: "d", text: "Okumak", correct: false }] },
    { id: 7, type: "SELECT", question: "'J'apprends' ne demek?", options: [{ id: "a", text: "Anlıyorum", correct: false }, { id: "b", text: "Öğreniyorum", correct: true }, { id: "c", text: "Çalışıyorum", correct: false }, { id: "d", text: "Yazıyorum", correct: false }] },
    { id: 8, type: "SELECT", question: "'Je ne comprends pas' ne demek?", options: [{ id: "a", text: "Öğrenmiyorum", correct: false }, { id: "b", text: "Anlamıyorum", correct: true }, { id: "c", text: "Bilmiyorum", correct: false }, { id: "d", text: "Sevmiyorum", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ le français.", options: [{ id: "a", text: "apprends", correct: true }, { id: "b", text: "comprends", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ne ___ pas la question.", options: [{ id: "a", text: "comprends", correct: true }, { id: "b", text: "apprends", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ à l'université.", options: [{ id: "a", text: "étudie", correct: true }, { id: "b", text: "apprend", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Le prof ___ la leçon.", options: [{ id: "a", text: "explique", correct: true }, { id: "b", text: "demande", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu as bien ___?", options: [{ id: "a", text: "révisé", correct: true }, { id: "b", text: "étudié", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je peux ___ quelque chose?", options: [{ id: "a", text: "demander", correct: true }, { id: "b", text: "expliquer", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Fransızca öğreniyorum", correctAnswer: "J'apprends le français" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Soruyu anlamıyorum", correctAnswer: "Je ne comprends pas la question" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Bir şey sorabilir miyim?", correctAnswer: "Je peux demander quelque chose?" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Hoca dersi açıklıyor", correctAnswer: "Le prof explique la leçon" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "İyi tekrar yaptın mı?", correctAnswer: "Tu as bien révisé?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çok çalışıyorum", correctAnswer: "J'étudie beaucoup" }
];

// Unit 357 Quiz 3: Sınav İfadeleri (Passer vs Réussir)
const unit357Quiz3: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Passer un examen' ne demek?", options: [{ id: "a", text: "Sınavı geçmek", correct: false }, { id: "b", text: "Sınava girmek", correct: true }, { id: "c", text: "Sınavdan kalmak", correct: false }, { id: "d", text: "Sınavı iptal etmek", correct: false }] },
    { id: 2, type: "SELECT", question: "'Réussir un examen' ne demek?", options: [{ id: "a", text: "Sınava girmek", correct: false }, { id: "b", text: "Sınavı geçmek (başarmak)", correct: true }, { id: "c", text: "Sınavdan kalmak", correct: false }, { id: "d", text: "Sınav yapmak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Rater/Échouer' ne demek?", options: [{ id: "a", text: "Başarmak", correct: false }, { id: "b", text: "Kalmak/Başarısız olmak", correct: true }, { id: "c", text: "Geçmek", correct: false }, { id: "d", text: "Çalışmak", correct: false }] },
    { id: 4, type: "SELECT", question: "'L'examen' ne demek?", options: [{ id: "a", text: "Sınıf", correct: false }, { id: "b", text: "Sınav", correct: true }, { id: "c", text: "Not", correct: false }, { id: "d", text: "Ödev", correct: false }] },
    { id: 5, type: "SELECT", question: "'Le diplôme' ne demek?", options: [{ id: "a", text: "Sertifika", correct: false }, { id: "b", text: "Diploma", correct: true }, { id: "c", text: "Not", correct: false }, { id: "d", text: "Sınav", correct: false }] },
    { id: 6, type: "SELECT", question: "'Les résultats' ne demek?", options: [{ id: "a", text: "Sorular", correct: false }, { id: "b", text: "Sonuçlar", correct: true }, { id: "c", text: "Ödevler", correct: false }, { id: "d", text: "Dersler", correct: false }] },
    { id: 7, type: "SELECT", question: "⚠️ 'J'ai passé l'examen' ne demek?", options: [{ id: "a", text: "Sınavı geçtim", correct: false }, { id: "b", text: "Sınava girdim", correct: true }, { id: "c", text: "Sınavdan kaldım", correct: false }, { id: "d", text: "Sınavı iptal ettim", correct: false }] },
    { id: 8, type: "SELECT", question: "✅ 'J'ai réussi l'examen' ne demek?", options: [{ id: "a", text: "Sınava girdim", correct: false }, { id: "b", text: "Sınavı geçtim", correct: true }, { id: "c", text: "Sınavdan kaldım", correct: false }, { id: "d", text: "Sınavı sevdim", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vais ___ un examen demain.", options: [{ id: "a", text: "passer", correct: true }, { id: "b", text: "réussir", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ l'examen! (başardım)", options: [{ id: "a", text: "réussi", correct: true }, { id: "b", text: "passé", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ l'examen. (kaldım)", options: [{ id: "a", text: "raté", correct: true }, { id: "b", text: "passé", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "J'espère que je vais ___.", options: [{ id: "a", text: "réussir", correct: true }, { id: "b", text: "passer", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Les ___ arrivent demain.", options: [{ id: "a", text: "résultats", correct: true }, { id: "b", text: "examens", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai obtenu mon ___.", options: [{ id: "a", text: "diplôme", correct: true }, { id: "b", text: "examen", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Yarın sınava gireceğim", correctAnswer: "Je vais passer un examen demain" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Sınavı geçtim!", correctAnswer: "J'ai réussi l'examen!" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Sınavdan kaldım", correctAnswer: "J'ai raté l'examen" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Umarım geçerim", correctAnswer: "J'espère que je vais réussir" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Diplomamı aldım", correctAnswer: "J'ai obtenu mon diplôme" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Sonuçlar geldi", correctAnswer: "Les résultats sont arrivés" }
];

// Unit 357 Quiz 4: Diyalog ve Birlikte Çalışma
const unit357Quiz4: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'On peut étudier ensemble?' ne demek?", options: [{ id: "a", text: "Birlikte çalışabilir miyiz?", correct: true }, { id: "b", text: "Yalnız çalışabilir misin?", correct: false }, { id: "c", text: "Ders var mı?", correct: false }, { id: "d", text: "Sınav ne zaman?", correct: false }] },
    { id: 2, type: "SELECT", question: "'C'est très difficile pour moi' ne demek?", options: [{ id: "a", text: "Çok kolay", correct: false }, { id: "b", text: "Benim için çok zor", correct: true }, { id: "c", text: "Benim için ilginç", correct: false }, { id: "d", text: "Çok sıkıcı", correct: false }] },
    { id: 3, type: "SELECT", question: "'Je fais des erreurs' ne demek?", options: [{ id: "a", text: "Öğreniyorum", correct: false }, { id: "b", text: "Hata yapıyorum", correct: true }, { id: "c", text: "İyi yapıyorum", correct: false }, { id: "d", text: "Anlıyorum", correct: false }] },
    { id: 4, type: "SELECT", question: "'Les maths' ne demek?", options: [{ id: "a", text: "Matematik", correct: true }, { id: "b", text: "Fizik", correct: false }, { id: "c", text: "Kimya", correct: false }, { id: "d", text: "Biyoloji", correct: false }] },
    { id: 5, type: "SELECT", question: "'Ce soir' ne demek?", options: [{ id: "a", text: "Bu sabah", correct: false }, { id: "b", text: "Bu akşam", correct: true }, { id: "c", text: "Yarın", correct: false }, { id: "d", text: "Dün", correct: false }] },
    { id: 6, type: "SELECT", question: "'Je suis content(e)' ne demek?", options: [{ id: "a", text: "Üzgünüm", correct: false }, { id: "b", text: "Mutluyum", correct: true }, { id: "c", text: "Yorgunum", correct: false }, { id: "d", text: "Açım", correct: false }] },
    { id: 7, type: "SELECT", question: "'Pourquoi?' ne demek?", options: [{ id: "a", text: "Ne zaman?", correct: false }, { id: "b", text: "Neden?", correct: true }, { id: "c", text: "Nasıl?", correct: false }, { id: "d", text: "Nerede?", correct: false }] },
    { id: 8, type: "SELECT", question: "'D'accord' ne demek?", options: [{ id: "a", text: "Hayır", correct: false }, { id: "b", text: "Tamam", correct: true }, { id: "c", text: "Belki", correct: false }, { id: "d", text: "Bilmiyorum", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "C'est très ___ pour moi.", options: [{ id: "a", text: "difficile", correct: true }, { id: "b", text: "facile", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Je fais des ___.", options: [{ id: "a", text: "erreurs", correct: true }, { id: "b", text: "leçons", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "On peut étudier ___ ce soir?", options: [{ id: "a", text: "ensemble", correct: true }, { id: "b", text: "seul", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "___, merci beaucoup!", options: [{ id: "a", text: "D'accord", correct: true }, { id: "b", text: "Non", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Le prof n'explique pas ___.", options: [{ id: "a", text: "bien", correct: true }, { id: "b", text: "mal", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle était très ___.", options: [{ id: "a", text: "contente", correct: true }, { id: "b", text: "triste", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Birlikte çalışabilir miyiz?", correctAnswer: "On peut étudier ensemble?" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Benim için çok zor", correctAnswer: "C'est très difficile pour moi" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Çok hata yapıyorum", correctAnswer: "Je fais beaucoup d'erreurs" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Umarım başarırım", correctAnswer: "J'espère que je vais réussir" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Çok mutluydu", correctAnswer: "Il/Elle était très content(e)" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Tamam, teşekkürler!", correctAnswer: "D'accord, merci!" }
];

// Unit 358 Quiz 1: Temel İş Terimleri
const unit358Quiz1: Question[] = [
    // KOLAY (8 soru) - Kelime Eşleştirme
    { id: 1, type: "SELECT", question: "'Le travail' ne demek?", options: [{ id: "a", text: "İş", correct: true }, { id: "b", text: "Maaş", correct: false }, { id: "c", text: "Patron", correct: false }, { id: "d", text: "Ofis", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le bureau' ne demek?", options: [{ id: "a", text: "Toplantı", correct: false }, { id: "b", text: "Ofis/Masa", correct: true }, { id: "c", text: "Şirket", correct: false }, { id: "d", text: "Maaş", correct: false }] },
    { id: 3, type: "SELECT", question: "'Le patron' ne demek?", options: [{ id: "a", text: "İş arkadaşı", correct: false }, { id: "b", text: "Müşteri", correct: false }, { id: "c", text: "Patron", correct: true }, { id: "d", text: "Şef", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le collègue' ne demek?", options: [{ id: "a", text: "İş arkadaşı", correct: true }, { id: "b", text: "Patron", correct: false }, { id: "c", text: "Müşteri", correct: false }, { id: "d", text: "Şef", correct: false }] },
    { id: 5, type: "SELECT", question: "'La réunion' ne demek?", options: [{ id: "a", text: "Ofis", correct: false }, { id: "b", text: "Toplantı", correct: true }, { id: "c", text: "İş", correct: false }, { id: "d", text: "Mülakat", correct: false }] },
    { id: 6, type: "SELECT", question: "'Le salaire' ne demek?", options: [{ id: "a", text: "Maaş", correct: true }, { id: "b", text: "Sözleşme", correct: false }, { id: "c", text: "İş", correct: false }, { id: "d", text: "CV", correct: false }] },
    { id: 7, type: "SELECT", question: "'Le CV' ne demek?", options: [{ id: "a", text: "Sözleşme", correct: false }, { id: "b", text: "Özgeçmiş", correct: true }, { id: "c", text: "Maaş", correct: false }, { id: "d", text: "Mülakat", correct: false }] },
    { id: 8, type: "SELECT", question: "'L'entreprise' ne demek?", options: [{ id: "a", text: "Şirket", correct: true }, { id: "b", text: "Ofis", correct: false }, { id: "c", text: "İş", correct: false }, { id: "d", text: "Patron", correct: false }] },
    // ORTA (6 soru) - Boşluk Doldurma
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je travaille dans une ___.", options: [{ id: "a", text: "entreprise", correct: true }, { id: "b", text: "bureau", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon ___ est très gentil.", options: [{ id: "a", text: "patron", correct: true }, { id: "b", text: "travail", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai une ___ à 15h.", options: [{ id: "a", text: "réunion", correct: true }, { id: "b", text: "bureau", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Mon ___ m'aide beaucoup.", options: [{ id: "a", text: "collègue", correct: true }, { id: "b", text: "client", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Le ___ est de 2500 euros.", options: [{ id: "a", text: "salaire", correct: true }, { id: "b", text: "contrat", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Envoyez votre ___.", options: [{ id: "a", text: "CV", correct: true }, { id: "b", text: "travail", correct: false }] },
    // ZOR (6 soru) - Çeviri
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Ofisteyim", correctAnswer: "Je suis au bureau" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Toplantım var", correctAnswer: "J'ai une réunion" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Patronum kibar", correctAnswer: "Mon patron est gentil" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Büyük bir şirkette çalışıyorum", correctAnswer: "Je travaille dans une grande entreprise" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "CV'nizi gönderin", correctAnswer: "Envoyez votre CV" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Maaş ne kadar?", correctAnswer: "Quel est le salaire?" }
];

// Unit 358 Quiz 2: İş Fiilleri
const unit358Quiz2: Question[] = [
    // KOLAY (8 soru)
    { id: 1, type: "SELECT", question: "'Travailler' ne demek?", options: [{ id: "a", text: "Çalışmak", correct: true }, { id: "b", text: "Kazanmak", correct: false }, { id: "c", text: "Aramak", correct: false }, { id: "d", text: "Bulmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Gagner' ne demek?", options: [{ id: "a", text: "Aramak", correct: false }, { id: "b", text: "Kazanmak", correct: true }, { id: "c", text: "İmzalamak", correct: false }, { id: "d", text: "Çalışmak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Chercher' ne demek?", options: [{ id: "a", text: "Bulmak", correct: false }, { id: "b", text: "Aramak", correct: true }, { id: "c", text: "Kazanmak", correct: false }, { id: "d", text: "İstifa etmek", correct: false }] },
    { id: 4, type: "SELECT", question: "'Trouver' ne demek?", options: [{ id: "a", text: "Aramak", correct: false }, { id: "b", text: "Bulmak", correct: true }, { id: "c", text: "Kayıp", correct: false }, { id: "d", text: "Çalışmak", correct: false }] },
    { id: 5, type: "SELECT", question: "'Démissionner' ne demek?", options: [{ id: "a", text: "İşe başlamak", correct: false }, { id: "b", text: "İstifa etmek", correct: true }, { id: "c", text: "Terfi almak", correct: false }, { id: "d", text: "İmzalamak", correct: false }] },
    { id: 6, type: "SELECT", question: "'Signer' ne demek?", options: [{ id: "a", text: "Okumak", correct: false }, { id: "b", text: "Yazmak", correct: false }, { id: "c", text: "İmzalamak", correct: true }, { id: "d", text: "Göndermek", correct: false }] },
    { id: 7, type: "SELECT", question: "Makine çalışıyor = ?", options: [{ id: "a", text: "La machine travaille", correct: false }, { id: "b", text: "La machine marche", correct: true }, { id: "c", text: "La machine va", correct: false }, { id: "d", text: "La machine fait", correct: false }] },
    { id: 8, type: "SELECT", question: "Ali çalışıyor = ?", options: [{ id: "a", text: "Ali marche", correct: false }, { id: "b", text: "Ali travaille", correct: true }, { id: "c", text: "Ali va", correct: false }, { id: "d", text: "Ali fait", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ un emploi.", options: [{ id: "a", text: "cherche", correct: true }, { id: "b", text: "trouve", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai ___ un travail!", options: [{ id: "a", text: "trouvé", correct: true }, { id: "b", text: "cherché", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Il ___ bien sa vie.", options: [{ id: "a", text: "gagne", correct: true }, { id: "b", text: "travaille", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle va ___.", options: [{ id: "a", text: "démissionner", correct: true }, { id: "b", text: "signer", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "___ le contrat!", options: [{ id: "a", text: "Signez", correct: true }, { id: "b", text: "Cherchez", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ chez Google.", options: [{ id: "a", text: "travaille", correct: true }, { id: "b", text: "marche", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "İş arıyorum", correctAnswer: "Je cherche un emploi" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bir iş buldum", correctAnswer: "J'ai trouvé un travail" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Hayatını iyi kazanıyor", correctAnswer: "Il gagne bien sa vie" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Sözleşmeyi imzalayın lütfen", correctAnswer: "Signez le contrat, s'il vous plaît" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "İstifa edecek", correctAnswer: "Il va démissionner" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Google'da çalışıyorum", correctAnswer: "Je travaille chez Google" }
];

// Unit 358 Quiz 3: DEVOIR ve Futur Proche
const unit358Quiz3: Question[] = [
    // KOLAY (8 soru) - DEVOIR Çekimi
    { id: 1, type: "SELECT", question: "'Je dois' ne demek?", options: [{ id: "a", text: "Zorundayım", correct: true }, { id: "b", text: "Yapacağım", correct: false }, { id: "c", text: "İstiyorum", correct: false }, { id: "d", text: "Seviyorum", correct: false }] },
    { id: 2, type: "SELECT", question: "'Nous devons' ne demek?", options: [{ id: "a", text: "İstiyoruz", correct: false }, { id: "b", text: "Zorundayız", correct: true }, { id: "c", text: "Yapacağız", correct: false }, { id: "d", text: "Gidiyoruz", correct: false }] },
    { id: 3, type: "SELECT", question: "'Je vais travailler' ne demek?", options: [{ id: "a", text: "Çalışmalıyım", correct: false }, { id: "b", text: "Çalışacağım", correct: true }, { id: "c", text: "Çalışıyorum", correct: false }, { id: "d", text: "Çalıştım", correct: false }] },
    { id: 4, type: "SELECT", question: "'Il va partir' ne demek?", options: [{ id: "a", text: "Gitmeli", correct: false }, { id: "b", text: "Gidecek", correct: true }, { id: "c", text: "Gidiyor", correct: false }, { id: "d", text: "Gitti", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ finir ce projet.", options: [{ id: "a", text: "dois", correct: true }, { id: "b", text: "vais", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ travailler.", options: [{ id: "a", text: "devons", correct: true }, { id: "b", text: "allons", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ signer le contrat.", options: [{ id: "a", text: "dois", correct: true }, { id: "b", text: "vas", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous ___ arriver à l'heure.", options: [{ id: "a", text: "devez", correct: true }, { id: "b", text: "allez", correct: false }] },
    // ORTA (6 soru) - Futur Proche
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ envoyer l'email.", options: [{ id: "a", text: "vais", correct: true }, { id: "b", text: "dois", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Elle ___ signer le contrat.", options: [{ id: "a", text: "va", correct: true }, { id: "b", text: "doit", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Nous ___ faire une réunion.", options: [{ id: "a", text: "allons", correct: true }, { id: "b", text: "devons", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Ils ___ commencer demain.", options: [{ id: "a", text: "vont", correct: true }, { id: "b", text: "doivent", correct: false }] },
    { id: 13, type: "SELECT", question: "Hangi cümle 'Zorunluluk' ifade eder?", options: [{ id: "a", text: "Je dois travailler", correct: true }, { id: "b", text: "Je vais travailler", correct: false }, { id: "c", text: "Je travaille", correct: false }, { id: "d", text: "J'ai travaillé", correct: false }] },
    { id: 14, type: "SELECT", question: "Hangi cümle 'Gelecek' ifade eder?", options: [{ id: "a", text: "Tu dois partir", correct: false }, { id: "b", text: "Tu vas partir", correct: true }, { id: "c", text: "Tu pars", correct: false }, { id: "d", text: "Tu es parti", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bu projeyi bitirmeliyim", correctAnswer: "Je dois finir ce projet" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Çalışmalıyız", correctAnswer: "Nous devons travailler" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Maili göndereceğim", correctAnswer: "Je vais envoyer l'email" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bir toplantı yapacağız", correctAnswer: "Nous allons faire une réunion" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Raporu göndermelisin", correctAnswer: "Tu dois envoyer le rapport" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Hemen başlayacağım", correctAnswer: "Je vais commencer tout de suite" }
];

// Unit 358 Quiz 4: Profesyonel İletişim ve Mülakat
const unit358Quiz4: Question[] = [
    // KOLAY (8 soru) - Mail Dili
    { id: 1, type: "SELECT", question: "'Cordialement' ne demek?", options: [{ id: "a", text: "Saygılarımla", correct: true }, { id: "b", text: "Merhaba", correct: false }, { id: "c", text: "Hoşçakal", correct: false }, { id: "d", text: "İyi günler", correct: false }] },
    { id: 2, type: "SELECT", question: "'Bonjour Monsieur' ne demek?", options: [{ id: "a", text: "Günaydın Bay", correct: false }, { id: "b", text: "Merhaba Sayın Bey", correct: true }, { id: "c", text: "İyi akşamlar", correct: false }, { id: "d", text: "Hoş geldiniz", correct: false }] },
    { id: 3, type: "SELECT", question: "'En pièce jointe' ne demek?", options: [{ id: "a", text: "Aşağıda", correct: false }, { id: "b", text: "Ekte", correct: true }, { id: "c", text: "Sonuç olarak", correct: false }, { id: "d", text: "Başlangıçta", correct: false }] },
    { id: 4, type: "SELECT", question: "Resmi mailde hangi hitap kullanılır?", options: [{ id: "a", text: "Tu (sen)", correct: false }, { id: "b", text: "Vous (siz)", correct: true }, { id: "c", text: "Il (o)", correct: false }, { id: "d", text: "Nous (biz)", correct: false }] },
    { id: 5, type: "SELECT", question: "'L'entretien' ne demek?", options: [{ id: "a", text: "Toplantı", correct: false }, { id: "b", text: "Mülakat", correct: true }, { id: "c", text: "Sunum", correct: false }, { id: "d", text: "Eğitim", correct: false }] },
    { id: 6, type: "SELECT", question: "'Être embauché' ne demek?", options: [{ id: "a", text: "İşe alınmak", correct: true }, { id: "b", text: "Kovulmak", correct: false }, { id: "c", text: "İstifa etmek", correct: false }, { id: "d", text: "Terfi almak", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Je vous ___ pour le projet.", options: [{ id: "a", text: "écris", correct: true }, { id: "b", text: "parle", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "En ___ jointe, mon CV.", options: [{ id: "a", text: "pièce", correct: true }, { id: "b", text: "partie", correct: false }] },
    // ORTA (6 soru) - Mülakat
    { id: 9, type: "FILL_BLANK", question: "Doldur:", sentence: "J'ai un ___ demain matin.", options: [{ id: "a", text: "entretien", correct: true }, { id: "b", text: "réunion", correct: false }] },
    { id: 10, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous êtes ___!", options: [{ id: "a", text: "embauché", correct: true }, { id: "b", text: "travaillé", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Vous devez ___ le contrat lundi.", options: [{ id: "a", text: "signer", correct: true }, { id: "b", text: "envoyer", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Votre ___ sera de 2500 euros.", options: [{ id: "a", text: "salaire", correct: true }, { id: "b", text: "travail", correct: false }] },
    { id: 13, type: "SELECT", question: "'Pourquoi voulez-vous travailler chez nous?' ne demek?", options: [{ id: "a", text: "Ne zaman başlayabilirsiniz?", correct: false }, { id: "b", text: "Neden bizimle çalışmak istiyorsunuz?", correct: true }, { id: "c", text: "Maaş beklentiniz nedir?", correct: false }, { id: "d", text: "Nerede yaşıyorsunuz?", correct: false }] },
    { id: 14, type: "SELECT", question: "'Bon travail!' ne demek?", options: [{ id: "a", text: "İyi şanslar!", correct: false }, { id: "b", text: "İyi çalışmalar!", correct: true }, { id: "c", text: "Güle güle!", correct: false }, { id: "d", text: "Hoş geldin!", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "...için size yazıyorum", correctAnswer: "Je vous écris pour" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Yarın mülakatım var", correctAnswer: "J'ai un entretien demain" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Tebrikler, işe alındınız!", correctAnswer: "Félicitations, vous êtes embauché!" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Bir dakikanız var mı?", correctAnswer: "Vous avez une minute?" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Elbette, sorun yok", correctAnswer: "Bien sûr, pas de problème" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Ekibe hoş geldiniz!", correctAnswer: "Bienvenue dans l'équipe!" }
];

const unit359Quiz1: Question[] = [
    // KOLAY (8 soru) - Temel Teknoloji Kelimeler
    { id: 1, type: "SELECT", question: "Bilgisayar nasıl denir?", options: [{ id: "a", text: "L'ordinateur", correct: true }, { id: "b", text: "La souris", correct: false }, { id: "c", text: "Le clavier", correct: false }, { id: "d", text: "L'écran", correct: false }] },
    { id: 2, type: "SELECT", question: "Mouse (fare) nasıl denir?", options: [{ id: "a", text: "Le clavier", correct: false }, { id: "b", text: "La souris", correct: true }, { id: "c", text: "L'écran", correct: false }, { id: "d", text: "Le fichier", correct: false }] },
    { id: 3, type: "SELECT", question: "E-posta nasıl denir?", options: [{ id: "a", text: "Le mot de passe", correct: false }, { id: "b", text: "Le lien", correct: false }, { id: "c", text: "L'e-mail", correct: true }, { id: "d", text: "Le dossier", correct: false }] },
    { id: 4, type: "SELECT", question: "Şifre nasıl denir?", options: [{ id: "a", text: "Le fichier", correct: false }, { id: "b", text: "Le mot de passe", correct: true }, { id: "c", text: "Le lien", correct: false }, { id: "d", text: "L'écran", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ l'ordinateur.", options: [{ id: "a", text: "allume", correct: true }, { id: "b", text: "éteins", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Tu ___ l'écran.", options: [{ id: "a", text: "éteins", correct: true }, { id: "b", text: "allumes", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis ___ internet.", options: [{ id: "a", text: "sur", correct: true }, { id: "b", text: "dans", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis ___ ligne.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "sur", correct: false }] },

    // ORTA (6 soru) - Fiiller ve Kullanım
    { id: 9, type: "SELECT", question: "'Dosya indirmek' nasıl denir?", options: [{ id: "a", text: "Sauvegarder", correct: false }, { id: "b", text: "Télécharger", correct: true }, { id: "c", text: "Envoyer", correct: false }, { id: "d", text: "Cliquer", correct: false }] },
    { id: 10, type: "SELECT", question: "'Kaydetmek' nasıl denir?", options: [{ id: "a", text: "Télécharger", correct: false }, { id: "b", text: "Brancher", correct: false }, { id: "c", text: "Sauvegarder", correct: true }, { id: "d", text: "Envoyer", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "___ sur le lien! (Tıklayın!)", options: [{ id: "a", text: "Cliquez", correct: true }, { id: "b", text: "Clique", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "___ ton chargeur. (Şarjını tak.)", options: [{ id: "a", text: "Branche", correct: true }, { id: "b", text: "Branchez", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "N'oublie pas de ___. (Kaydetmeyi unutma.)", options: [{ id: "a", text: "sauvegarder", correct: true }, { id: "b", text: "télécharger", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ un fichier. (Dosya indiriyorum.)", options: [{ id: "a", text: "télécharge", correct: true }, { id: "b", text: "sauvegarde", correct: false }] },

    // ZOR (6 soru) - Çevirme ve Diyalog
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bilgisayarı açıyorum", correctAnswer: "J'allume l'ordinateur" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Bu çalışmıyor", correctAnswer: "Ça ne marche pas" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Şarjım bitti", correctAnswer: "Ma batterie est vide" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Linke tıklayın", correctAnswer: "Cliquez sur le lien" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "İnternet çalışıyor mu?", correctAnswer: "Internet marche?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bağlantım yok", correctAnswer: "Je n'ai pas de connexion" }
];

// Quiz 2: İnternet ve Yazılım Odaklı
const unit359Quiz2: Question[] = [
    // KOLAY (8 soru) - İnternet Terimleri
    { id: 1, type: "SELECT", question: "'Le site web' ne demek?", options: [{ id: "a", text: "Web sitesi", correct: true }, { id: "b", text: "E-posta", correct: false }, { id: "c", text: "Link", correct: false }, { id: "d", text: "Dosya", correct: false }] },
    { id: 2, type: "SELECT", question: "'Le dossier' ne demek?", options: [{ id: "a", text: "Dosya", correct: false }, { id: "b", text: "Klasör", correct: true }, { id: "c", text: "Link", correct: false }, { id: "d", text: "Şifre", correct: false }] },
    { id: 3, type: "SELECT", question: "'L'application' ne demek?", options: [{ id: "a", text: "Ekran", correct: false }, { id: "b", text: "Uygulama", correct: true }, { id: "c", text: "Klavye", correct: false }, { id: "d", text: "Dosya", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le lien' ne demek?", options: [{ id: "a", text: "Şifre", correct: false }, { id: "b", text: "Dosya", correct: false }, { id: "c", text: "Link", correct: true }, { id: "d", text: "Ekran", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Je navigue ___ internet.", options: [{ id: "a", text: "sur", correct: true }, { id: "b", text: "en", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Je suis ___ ligne.", options: [{ id: "a", text: "en", correct: true }, { id: "b", text: "sur", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Visitez notre ___ web.", options: [{ id: "a", text: "site", correct: true }, { id: "b", text: "page", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Entrez le mot de ___.", options: [{ id: "a", text: "passe", correct: true }, { id: "b", text: "code", correct: false }] },
    // ORTA (6 soru)
    { id: 9, type: "SELECT", question: "'Télécharger' ne demek?", options: [{ id: "a", text: "Kaydetmek", correct: false }, { id: "b", text: "İndirmek", correct: true }, { id: "c", text: "Göndermek", correct: false }, { id: "d", text: "Açmak", correct: false }] },
    { id: 10, type: "SELECT", question: "'Envoyer' ne demek?", options: [{ id: "a", text: "Almak", correct: false }, { id: "b", text: "Göndermek", correct: true }, { id: "c", text: "Silmek", correct: false }, { id: "d", text: "Kaydetmek", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Je ___ un e-mail.", options: [{ id: "a", text: "envoie", correct: true }, { id: "b", text: "télécharge", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ le fichier.", options: [{ id: "a", text: "ouvre", correct: true }, { id: "b", text: "ferme", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Créez un nouveau ___.", options: [{ id: "a", text: "dossier", correct: true }, { id: "b", text: "fichier", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "Cliquez sur le ___.", options: [{ id: "a", text: "lien", correct: true }, { id: "b", text: "fichier", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "E-posta gönderiyorum", correctAnswer: "J'envoie un e-mail" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Dosyayı indirin", correctAnswer: "Téléchargez le fichier" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Web sitemizi ziyaret edin", correctAnswer: "Visitez notre site web" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Yeni klasör oluşturun", correctAnswer: "Créez un nouveau dossier" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Şifreyi girin", correctAnswer: "Entrez le mot de passe" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Uygulamayı indirin", correctAnswer: "Téléchargez l'application" }
];

// Quiz 3: Fiiller ve Eylemler Odaklı
const unit359Quiz3: Question[] = [
    // KOLAY (8 soru) - Temel Fiiller
    { id: 1, type: "SELECT", question: "'Allumer' ne demek?", options: [{ id: "a", text: "Kapatmak", correct: false }, { id: "b", text: "Açmak", correct: true }, { id: "c", text: "Kırmak", correct: false }, { id: "d", text: "Tamir etmek", correct: false }] },
    { id: 2, type: "SELECT", question: "'Éteindre' ne demek?", options: [{ id: "a", text: "Açmak", correct: false }, { id: "b", text: "Kapatmak", correct: true }, { id: "c", text: "Başlatmak", correct: false }, { id: "d", text: "Yüklemek", correct: false }] },
    { id: 3, type: "SELECT", question: "'Cliquer' ne demek?", options: [{ id: "a", text: "Yazmak", correct: false }, { id: "b", text: "Tıklamak", correct: true }, { id: "c", text: "Silmek", correct: false }, { id: "d", text: "Kaydetmek", correct: false }] },
    { id: 4, type: "SELECT", question: "'Brancher' ne demek?", options: [{ id: "a", text: "Çıkarmak", correct: false }, { id: "b", text: "Fişe takmak", correct: true }, { id: "c", text: "Kapatmak", correct: false }, { id: "d", text: "Açmak", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ l'ordinateur le matin.", options: [{ id: "a", text: "allume", correct: true }, { id: "b", text: "éteins", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "J'___ l'ordinateur le soir.", options: [{ id: "a", text: "éteins", correct: true }, { id: "b", text: "allume", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "___ ici pour continuer.", options: [{ id: "a", text: "Cliquez", correct: true }, { id: "b", text: "Allumez", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "___ ton câble.", options: [{ id: "a", text: "Branche", correct: true }, { id: "b", text: "Débranche", correct: false }] },
    // ORTA (6 soru) - Emir Kipi
    { id: 9, type: "SELECT", question: "'Allume!' hangi kişiye?", options: [{ id: "a", text: "Vous (siz)", correct: false }, { id: "b", text: "Tu (sen)", correct: true }, { id: "c", text: "Nous (biz)", correct: false }, { id: "d", text: "Il (o)", correct: false }] },
    { id: 10, type: "SELECT", question: "'Cliquez!' hangi kişiye?", options: [{ id: "a", text: "Tu (sen)", correct: false }, { id: "b", text: "Vous (siz)", correct: true }, { id: "c", text: "Nous (biz)", correct: false }, { id: "d", text: "Il (o)", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "N'___ pas de sauvegarder!", options: [{ id: "a", text: "oublie", correct: true }, { id: "b", text: "oubliez", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "___ l'écran s'il vous plaît.", options: [{ id: "a", text: "Éteignez", correct: true }, { id: "b", text: "Éteins", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "___ le fichier avant de partir.", options: [{ id: "a", text: "Sauvegarde", correct: true }, { id: "b", text: "Télécharge", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "___ ton chargeur!", options: [{ id: "a", text: "Branche", correct: true }, { id: "b", text: "Allume", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Bilgisayarı kapat", correctAnswer: "Éteins l'ordinateur" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Buraya tıklayın", correctAnswer: "Cliquez ici" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Işığı aç", correctAnswer: "Allume la lumière" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Kaydetmeyi unutma", correctAnswer: "N'oublie pas de sauvegarder" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Şarjını tak", correctAnswer: "Branche ton chargeur" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Ekranı kapatın", correctAnswer: "Éteignez l'écran" }
];

// Quiz 4: Sorun Çözme ve Diyalog Odaklı
const unit359Quiz4: Question[] = [
    // KOLAY (8 soru) - Sorun Kalıpları
    { id: 1, type: "SELECT", question: "'Ça ne marche pas' ne demek?", options: [{ id: "a", text: "Bu pahalı", correct: false }, { id: "b", text: "Bu çalışmıyor", correct: true }, { id: "c", text: "Bu yeni", correct: false }, { id: "d", text: "Bu güzel", correct: false }] },
    { id: 2, type: "SELECT", question: "'La batterie est vide' ne demek?", options: [{ id: "a", text: "Batarya dolu", correct: false }, { id: "b", text: "Şarj bitti", correct: true }, { id: "c", text: "Ekran kırık", correct: false }, { id: "d", text: "İnternet yok", correct: false }] },
    { id: 3, type: "SELECT", question: "'La connexion' ne demek?", options: [{ id: "a", text: "Sinyal", correct: false }, { id: "b", text: "Bağlantı", correct: true }, { id: "c", text: "Şifre", correct: false }, { id: "d", text: "Ekran", correct: false }] },
    { id: 4, type: "SELECT", question: "'Le signal' ne demek?", options: [{ id: "a", text: "Bağlantı", correct: false }, { id: "b", text: "Sinyal", correct: true }, { id: "c", text: "Şifre", correct: false }, { id: "d", text: "Wi-Fi", correct: false }] },
    { id: 5, type: "FILL_BLANK", question: "Doldur:", sentence: "Internet ne ___ pas.", options: [{ id: "a", text: "marche", correct: true }, { id: "b", text: "fonctionne", correct: false }] },
    { id: 6, type: "FILL_BLANK", question: "Doldur:", sentence: "Ma ___ est vide.", options: [{ id: "a", text: "batterie", correct: true }, { id: "b", text: "souris", correct: false }] },
    { id: 7, type: "FILL_BLANK", question: "Doldur:", sentence: "Le signal est très ___.", options: [{ id: "a", text: "faible", correct: true }, { id: "b", text: "fort", correct: false }] },
    { id: 8, type: "FILL_BLANK", question: "Doldur:", sentence: "Je n'ai pas de ___.", options: [{ id: "a", text: "connexion", correct: true }, { id: "b", text: "écran", correct: false }] },
    // ORTA (6 soru) - Diyalog
    { id: 9, type: "SELECT", question: "'Internet marche?' nasıl cevap verilir olumsuz?", options: [{ id: "a", text: "Oui, ça marche", correct: false }, { id: "b", text: "Non, ça ne marche pas", correct: true }, { id: "c", text: "Je ne sais pas", correct: false }, { id: "d", text: "Peut-être", correct: false }] },
    { id: 10, type: "SELECT", question: "Wi-Fi sorunu için ne denir?", options: [{ id: "a", text: "L'écran est noir", correct: false }, { id: "b", text: "Je n'ai pas de connexion", correct: true }, { id: "c", text: "Le clavier est cassé", correct: false }, { id: "d", text: "La souris ne marche pas", correct: false }] },
    { id: 11, type: "FILL_BLANK", question: "Doldur:", sentence: "Essaie d'___ et rallumer.", options: [{ id: "a", text: "éteindre", correct: true }, { id: "b", text: "allumer", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "L'___ est en panne.", options: [{ id: "a", text: "imprimante", correct: true }, { id: "b", text: "ordinateur", correct: false }] },
    { id: 13, type: "FILL_BLANK", question: "Doldur:", sentence: "Quel est le ___ du wifi?", options: [{ id: "a", text: "mot de passe", correct: true }, { id: "b", text: "signal", correct: false }] },
    { id: 14, type: "FILL_BLANK", question: "Doldur:", sentence: "L'écran est ___.", options: [{ id: "a", text: "noir", correct: true }, { id: "b", text: "blanc", correct: false }] },
    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Farem çalışmıyor", correctAnswer: "Ma souris ne marche pas" },
    { id: 16, type: "TRANSLATE", question: "Çevir:", hint: "Yazıcı bozuk", correctAnswer: "L'imprimante est en panne" },
    { id: 17, type: "TRANSLATE", question: "Çevir:", hint: "Wi-Fi şifresi ne?", correctAnswer: "Quel est le mot de passe du wifi?" },
    { id: 18, type: "TRANSLATE", question: "Çevir:", hint: "Sinyal çok zayıf", correctAnswer: "Le signal est très faible" },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Kapatıp açmayı dene", correctAnswer: "Essaie d'éteindre et rallumer" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İnternet bağlantım yok", correctAnswer: "Je n'ai pas de connexion internet" }
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
    "351-1": unit351Quiz1, "351-2": unit351Quiz2, "351-3": unit351Quiz3, "351-4": unit351Quiz4,
    "352-1": unit352Quiz1, "352-2": unit352Quiz2, "352-3": unit352Quiz3, "352-4": unit352Quiz4,
    "353-1": unit353Quiz1, "353-2": unit353Quiz2, "353-3": unit353Quiz3, "353-4": unit353Quiz4,
    "354-1": unit354Quiz1, "354-2": unit354Quiz2, "354-3": unit354Quiz3, "354-4": unit354Quiz4,
    "355-1": unit355Quiz1, "355-2": unit355Quiz2, "355-3": unit355Quiz3, "355-4": unit355Quiz4,
    "356-1": unit356Quiz1, "356-2": unit356Quiz2, "356-3": unit356Quiz3, "356-4": unit356Quiz4,
    "357-1": unit357Quiz1, "357-2": unit357Quiz2, "357-3": unit357Quiz3, "357-4": unit357Quiz4,
    "358-1": unit358Quiz1, "358-2": unit358Quiz2, "358-3": unit358Quiz3, "358-4": unit358Quiz4,
    "359-1": unit359Quiz1, "359-2": unit359Quiz2, "359-3": unit359Quiz3, "359-4": unit359Quiz4,
    "360-1": unit360Quiz1
};

export function getFrenchA2Quiz(unitId: number, quizNumber: number): Question[] {
    return frenchA2Quizzes[`${unitId}-${quizNumber}`] || [];
}
