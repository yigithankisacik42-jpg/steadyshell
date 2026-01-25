
import { UnitReading } from './readings';

// ===== ÜNİTE 301: MERHABA (Selamlaşma ve Tanışma) =====
const unit301Reading: UnitReading = {
    unitId: 301,
    title: "Selamlaşma ve Tanışma",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Bonjour ! Je m'appelle Pierre. Je suis français. J'habite à Paris. Voici Marie. Elle est mon amie. Elle est espagnole. Nous sommes étudiants.",
        translation: "Merhaba! Benim adım Pierre. Ben Fransızım. Paris'te yaşıyorum. İşte Marie. O benim arkadaşım. O İspanyol. Biz öğrenciyiz."
    },
    questions: [
        { id: 1, question: "Pierre nereli?", options: ["İspanyol", "Fransız", "Türk", "İngiliz"], correctAnswer: "Fransız" },
        { id: 2, question: "Pierre nerede yaşıyor?", options: ["Lyon", "Marsilya", "Paris", "Madrid"], correctAnswer: "Paris" },
        { id: 3, question: "Marie kim?", options: ["Kardeşi", "Annesi", "Arkadaşı", "Öğretmeni"], correctAnswer: "Arkadaşı" },
        { id: 4, question: "Marie nereli?", options: ["Fransız", "İspanyol", "Alman", "İtalyan"], correctAnswer: "İspanyol" },
        { id: 5, question: "Onlar ne iş yapıyor?", options: ["Doktor", "Öğretmen", "Öğrenci", "Mühendis"], correctAnswer: "Öğrenci" },
        { id: 6, question: "Metinde kaç kişi tanıtılıyor?", options: ["Bir", "İki", "Üç", "Dört"], correctAnswer: "İki" },
        { id: 7, question: "'Habiter' fiili ne anlama gelir?", options: ["Yemek", "Yaşamak", "Görmek", "Gibi"], correctAnswer: "Yaşamak" },
        { id: 8, question: "'Ami' kelimesinin anlamı nedir?", options: ["Düşman", "Arkadaş", "Aile", "Komşu"], correctAnswer: "Arkadaş" },
        { id: 9, question: "'Nous sommes' ne demek?", options: ["Benim", "Sizsiniz", "Onlar", "Biziz"], correctAnswer: "Biziz" },
        { id: 10, question: "Pierre ne diyor?", options: ["Bonsoir", "Bonjour", "Au revoir", "Salut"], correctAnswer: "Bonjour" }
    ],
    vocabulary: [
        { word: "Bonjour", meaning: "Merhaba" },
        { word: "M'appelle", meaning: "Adım..." },
        { word: "Habite", meaning: "Yaşıyorum" },
        { word: "Amie", meaning: "Arkadaş (Kız)" },
        { word: "Étudiants", meaning: "Öğrenciler" }
    ]
};

// ===== ÜNİTE 302: ALFABE VE SESLER =====
const unit302Reading: UnitReading = {
    unitId: 302,
    title: "Aksanlar ve Ulama",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Le français est une belle langue. L'alphabet a 26 lettres. Les voyelles sont importantes: a, e, i, o, u, y. L'accent est aussi important. Par exemple: 'été' et 'père'.",
        translation: "Fransızca güzel bir dildir. Alfabede 26 harf vardır. Sesli harfler önemlidir: a, e, i, o, u, y. Aksan da önemlidir. Örneğin: 'yaz' ve 'baba'."
    },
    questions: [
        { id: 1, question: "Fransızca nasıl bir dildir?", options: ["Zor", "Güzel", "Çirkin", "Kolay"], correctAnswer: "Güzel" },
        { id: 2, question: "Alfabede kaç harf var?", options: ["20", "26", "29", "30"], correctAnswer: "26" },
        { id: 3, question: "Hangisi sesli harftir?", options: ["b", "c", "e", "z"], correctAnswer: "e" },
        { id: 4, question: "'Été' kelimesinde hangi aksan var?", options: ["Grave", "Aigu", "Circonflexe", "Tréma"], correctAnswer: "Aigu" },
        { id: 5, question: "Hangi harf seslidir?", options: ["k", "m", "y", "p"], correctAnswer: "y" },
        { id: 6, question: "Metinde verilen örnek kelime hangisi?", options: ["Mère", "Père", "Frère", "Sœur"], correctAnswer: "Père" },
        { id: 7, question: "'Langue' ne demek?", options: ["Dil", "Uzun", "Kısa", "Ses"], correctAnswer: "Dil" },
        { id: 8, question: "'Lettre' ne anlama gelir?", options: ["Mektup/Harf", "Sayı", "Kelime", "Cümle"], correctAnswer: "Mektup/Harf" },
        { id: 9, question: "'Aussi' ne demek?", options: ["Ama", "Veya", "De/Da", "Çünkü"], correctAnswer: "De/Da" },
        { id: 10, question: "Aksanlar nerede önemlidir?", options: ["İngilizce", "Almanca", "Fransızca", "Türkçe"], correctAnswer: "Fransızca" }
    ],
    vocabulary: [
        { word: "Langue", meaning: "Dil" },
        { word: "Lettres", meaning: "Harfler" },
        { word: "Voyelles", meaning: "Sesli harfler" },
        { word: "Important", meaning: "Önemli" },
        { word: "Exemple", meaning: "Örnek" }
    ]
};


// ===== ÜNİTE 303: SAYILAR (0-20) =====
const unit303Reading: UnitReading = {
    unitId: 303,
    title: "Sayılar 0-20",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Je vais au marché. J'achète trois pommes et deux bananes. Ça coûte cinq euros. J'ai dix euros. Le vendeur me rend cinq euros. Il y a vingt personnes ici.",
        translation: "Pazara gidiyorum. Üç elma ve iki muz alıyorum. Beş euro tutuyor. On eurom var. Satıcı bana beş euro geri veriyor. Burada yirmi kişi var."
    },
    questions: [
        { id: 1, question: "Nereye gidiyorum?", options: ["Okula", "Eve", "Pazara", "İşe"], correctAnswer: "Pazara" },
        { id: 2, question: "Kaç elma alıyorum?", options: ["Bir", "İki", "Üç", "Dört"], correctAnswer: "Üç" },
        { id: 3, question: "Kaç muz alıyorum?", options: ["İki", "Üç", "Beş", "On"], correctAnswer: "İki" },
        { id: 4, question: "Toplam ne kadar tuttu?", options: ["3 Euro", "5 Euro", "10 Euro", "20 Euro"], correctAnswer: "5 Euro" },
        { id: 5, question: "Benim ne kadarım var?", options: ["5", "10", "15", "20"], correctAnswer: "10" },
        { id: 6, question: "Para üstü ne kadar?", options: ["2", "3", "5", "10"], correctAnswer: "5" },
        { id: 7, question: "Orada kaç kişi var?", options: ["10", "15", "20", "25"], correctAnswer: "20" },
        { id: 8, question: "'Trois' hangi sayıdır?", options: ["2", "3", "4", "5"], correctAnswer: "3" },
        { id: 9, question: "'Deux' hangi sayıdır?", options: ["1", "2", "12", "20"], correctAnswer: "2" },
        { id: 10, question: "'Vingt' hangi sayıdır?", options: ["2", "12", "20", "22"], correctAnswer: "20" }
    ],
    vocabulary: [
        { word: "Trois", meaning: "Üç" },
        { word: "Deux", meaning: "İki" },
        { word: "Cinq", meaning: "Beş" },
        { word: "Dix", meaning: "On" },
        { word: "Vingt", meaning: "Yirmi" }
    ]
};

// ===== ÜNİTE 304: RENKLER =====
const unit304Reading: UnitReading = {
    unitId: 304,
    title: "Renkler ve Cinsiyet Uyumu",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Mon jardin est très beau. L'herbe est verte. Le ciel est bleu. J'ai des roses rouges et des fleurs jaunes. Mon chat noir dort sous un arbre marron.",
        translation: "Bahçem çok güzel. Çim yeşil. Gökyüzü mavi. Kırmızı güllerim ve sarı çiçeklerim var. Siyah kedim kahverengi bir ağacın altında uyuyor."
    },
    questions: [
        { id: 1, question: "Bahçe nasıl?", options: ["Çirkin", "Küçük", "Güzel", "Büyük"], correctAnswer: "Güzel" },
        { id: 2, question: "Çim ne renk?", options: ["Mavi", "Yeşil", "Sarı", "Kırmızı"], correctAnswer: "Yeşil" },
        { id: 3, question: "Gökyüzü ne renk?", options: ["Beyaz", "Gri", "Mavi", "Siyah"], correctAnswer: "Mavi" },
        { id: 4, question: "Güller ne renk?", options: ["Sarı", "Pembe", "Kırmızı", "Mor"], correctAnswer: "Kırmızı" },
        { id: 5, question: "Çiçekler ne renk?", options: ["Kırmızı", "Sarı", "Yeşil", "Mavi"], correctAnswer: "Sarı" },
        { id: 6, question: "Kedi ne renk?", options: ["Beyaz", "Siyah", "Gri", "Turuncu"], correctAnswer: "Siyah" },
        { id: 7, question: "Ağaç ne renk?", options: ["Yeşil", "Mavi", "Kahverengi", "Siyah"], correctAnswer: "Kahverengi" },
        { id: 8, question: "Kedi ne yapıyor?", options: ["Koşuyor", "Yiyor", "Uyuyor", "Oynuyor"], correctAnswer: "Uyuyor" },
        { id: 9, question: "'Vert' hangi renktir?", options: ["Mavi", "Yeşil", "Sarı", "Kırmızı"], correctAnswer: "Yeşil" },
        { id: 10, question: "'Rouge' hangi renktir?", options: ["Pembe", "Kırmızı", "Mor", "Turuncu"], correctAnswer: "Kırmızı" }
    ],
    vocabulary: [
        { word: "Verte", meaning: "Yeşil" },
        { word: "Bleu", meaning: "Mavi" },
        { word: "Rouges", meaning: "Kırmızı" },
        { word: "Jaunes", meaning: "Sarı" },
        { word: "Noir", meaning: "Siyah" }
    ]
};

// ===== ÜNİTE 305: AİLE BİREYLERİ =====
const unit305Reading: UnitReading = {
    unitId: 305,
    title: "Aile ve İyelik Sıfatları",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Voici la famille Dupont. Le père s'appelle Jean. La mère s'appelle Sophie. Ils ont deux enfants: un fils, Marc, et une fille, Julie. Ils ont aussi un chien.",
        translation: "İşte Dupont ailesi. Babanın adı Jean. Annenin adı Sophie. İki çocukları var: bir erkek çocuk, Marc ve bir kız çocuk, Julie. Ayrıca bir köpekleri var."
    },
    questions: [
        { id: 1, question: "Babanın adı ne?", options: ["Marc", "Jean", "Pierre", "Paul"], correctAnswer: "Jean" },
        { id: 2, question: "Annenin adı ne?", options: ["Julie", "Marie", "Sophie", "Anne"], correctAnswer: "Sophie" },
        { id: 3, question: "Kaç çocukları var?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
        { id: 4, question: "Erkek çocuğun adı ne?", options: ["Jean", "Marc", "Pierre", "Paul"], correctAnswer: "Marc" },
        { id: 5, question: "Kız çocuğun adı ne?", options: ["Sophie", "Marie", "Julie", "Claire"], correctAnswer: "Julie" },
        { id: 6, question: "Başka neyleri var?", options: ["Kedi", "Kuş", "Köpek", "Balık"], correctAnswer: "Köpek" },
        { id: 7, question: "'Père' ne demek?", options: ["Anne", "Baba", "Kardeş", "Dede"], correctAnswer: "Baba" },
        { id: 8, question: "'Mère' ne demek?", options: ["Anne", "Teyze", "Nine", "Kız"], correctAnswer: "Anne" },
        { id: 9, question: "'Fils' ne demek?", options: ["Kız evlat", "Erkek evlat", "Yeğen", "Kuzen"], correctAnswer: "Erkek evlat" },
        { id: 10, question: "'Fille' ne demek?", options: ["Anne", "Kız evlat", "Oğul", "Teyze"], correctAnswer: "Kız evlat" }
    ],
    vocabulary: [
        { word: "Père", meaning: "Baba" },
        { word: "Mère", meaning: "Anne" },
        { word: "Enfants", meaning: "Çocuklar" },
        { word: "Fils", meaning: "Oğul" },
        { word: "Fille", meaning: "Kız" }
    ]
};

// ===== ÜNİTE 306: GÜNLER VE AYLAR =====
const unit306Reading: UnitReading = {
    unitId: 306,
    title: "Günler ve Aylar",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Aujourd'hui, c'est lundi. Je travaille. Mardi, je vais au sport. Mercredi, je suis libre. Janvier est froid mais juillet est chaud.",
        translation: "Bugün pazartesi. Çalışıyorum. Salı spora gidiyorum. Çarşamba boşum. Ocak soğuktur ama Temmuz sıcaktır."
    },
    questions: [
        { id: 1, question: "Bugün hangi gün?", options: ["Salı", "Çarşamba", "Pazartesi", "Cuma"], correctAnswer: "Pazartesi" },
        { id: 2, question: "Salı ne yapıyorum?", options: ["Çalışıyorum", "Spora gidiyorum", "Uyuyorum", "Okuyorum"], correctAnswer: "Spora gidiyorum" },
        { id: 3, question: "Çarşamba nasılım?", options: ["Meşgul", "Yorgun", "Libre (Boş)", "Hasta"], correctAnswer: "Libre (Boş)" },
        { id: 4, question: "Ocak nasıl?", options: ["Sıcak", "Soğuk", "Ilık", "Yağmurlu"], correctAnswer: "Soğuk" },
        { id: 5, question: "Temmuz nasıl?", options: ["Soğuk", "Karlı", "Sıcak", "Rüzgarlı"], correctAnswer: "Sıcak" },
        { id: 6, question: "'Lundi' ne demek?", options: ["Pazar", "Pazartesi", "Salı", "Çarşamba"], correctAnswer: "Pazartesi" },
        { id: 7, question: "'Travaille' ne anlama gelir?", options: ["Oynuyorum", "Çalışıyorum", "Gidiyorum", "Geliyorum"], correctAnswer: "Çalışıyorum" },
        { id: 8, question: "'Froid' ne demek?", options: ["Sıcak", "Soğuk", "Güzel", "Kötü"], correctAnswer: "Soğuk" },
        { id: 9, question: "'Chaud' ne demek?", options: ["Soğuk", "Sıcak", "Ilık", "Serin"], correctAnswer: "Sıcak" },
        { id: 10, question: "Hangi ay bahsedilmedi?", options: ["Janvier", "Juillet", "Mars (Mart)", "Août"], correctAnswer: "Mars (Mart)" }
    ],
    vocabulary: [
        { word: "Lundi", meaning: "Pazartesi" },
        { word: "Travaille", meaning: "Çalışıyorum" },
        { word: "Janvier", meaning: "Ocak" },
        { word: "Froid", meaning: "Soğuk" },
        { word: "Chaud", meaning: "Sıcak" }
    ]
};

// ===== ÜNİTE 307: ÜLKELER VE MİLLETLER =====
const unit307Reading: UnitReading = {
    unitId: 307,
    title: "Ülkeler ve Milletler",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "J'ai des amis de partout. Hans est allemand. Yoko est japonaise. Ali est turc. Maria est italienne. Nous parlons anglais ensemble.",
        translation: "Her yerden arkadaşlarım var. Hans Alman. Yoko Japon. Ali Türk. Maria İtalyan. Birlikte İngilizce konuşuyoruz."
    },
    questions: [
        { id: 1, question: "Hans nereli?", options: ["Fransız", "Alman", "Türk", "İtalyan"], correctAnswer: "Alman" },
        { id: 2, question: "Yoko nereli?", options: ["Çinli", "Koreli", "Japon", "Vietnamlı"], correctAnswer: "Japon" },
        { id: 3, question: "Ali nereli?", options: ["Mısırlı", "Türk", "İranlı", "Arap"], correctAnswer: "Türk" },
        { id: 4, question: "Maria nereli?", options: ["İspanyol", "İtalyan", "Portekizli", "Meksikalı"], correctAnswer: "İtalyan" },
        { id: 5, question: "Hangi dili konuşuyorlar?", options: ["Fransızca", "Almanca", "İngilizce", "Türkçe"], correctAnswer: "İngilizce" },
        { id: 6, question: "'Allemand' ne demek?", options: ["Almanya", "Alman", "Avusturya", "İsviçre"], correctAnswer: "Alman" },
        { id: 7, question: "'Turc' ne demek?", options: ["Türkiye", "Türk", "Türkçe", "Turist"], correctAnswer: "Türk" },
        { id: 8, question: "'Ensemble' ne anlama gelir?", options: ["Ayrı", "Birlikte", "Yalnız", "Mutlu"], correctAnswer: "Birlikte" },
        { id: 9, question: "'Parlons' hangi fiildir?", options: ["Parler (Konuşmak)", "Manger (Yemek)", "Aller (Gitmek)", "Voir (Görmek)"], correctAnswer: "Parler (Konuşmak)" },
        { id: 10, question: "İtalya'nın sıfat hali nedir?", options: ["Italie", "Italien/Italienne", "Roma", "Pizza"], correctAnswer: "Italien/Italienne" }
    ],
    vocabulary: [
        { word: "Amis", meaning: "Arkadaşlar" },
        { word: "Allemand", meaning: "Alman" },
        { word: "Turc", meaning: "Türk" },
        { word: "Italienne", meaning: "İtalyan (Kız)" },
        { word: "Ensemble", meaning: "Birlikte" }
    ]
};

// ===== ÜNİTE 308: MESLEKLER =====
const unit308Reading: UnitReading = {
    unitId: 308,
    title: "Mesleklerde Cinsiyet",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Mon père est médecin. Il travaille à l'hôpital. Ma mère est professeure. Elle travaille à l'école. Je veux être ingénieur.",
        translation: "Babam doktor. Hastanede çalışıyor. Annem öğretmen. Okulda çalışıyor. Ben mühendis olmak istiyorum."
    },
    questions: [
        { id: 1, question: "Babanın mesleği ne?", options: ["Öğretmen", "Doktor", "Mühendis", "Avukat"], correctAnswer: "Doktor" },
        { id: 2, question: "Baba nerede çalışıyor?", options: ["Okulda", "Ofiste", "Hastanede", "Evde"], correctAnswer: "Hastanede" },
        { id: 3, question: "Annenin mesleği ne?", options: ["Doktor", "Hemşire", "Öğretmen", "Sekreter"], correctAnswer: "Öğretmen" },
        { id: 4, question: "Anne nerede çalışıyor?", options: ["Hastanede", "Okulda", "Bankada", "Markette"], correctAnswer: "Okulda" },
        { id: 5, question: "Çocuk ne olmak istiyor?", options: ["Pilot", "Doktor", "Mühendis", "Polis"], correctAnswer: "Mühendis" },
        { id: 6, question: "'Médecin' ne demek?", options: ["İlaç", "Doktor", "Hasta", "Hemşire"], correctAnswer: "Doktor" },
        { id: 7, question: "'Professeure' ne demek?", options: ["Profesyonel", "Öğrenci", "Müdür", "Öğretmen (Kadın)"], correctAnswer: "Öğretmen (Kadın)" },
        { id: 8, question: "'Hôpital' ne demek?", options: ["Otel", "Hastane", "Ev", "Okul"], correctAnswer: "Hastane" },
        { id: 9, question: "'École' ne demek?", options: ["Ekol", "Okul", "Sınıf", "Ders"], correctAnswer: "Okul" },
        { id: 10, question: "'Ingénieur' ne demek?", options: ["İngiliz", "Mühendis", "Mimar", "İşçi"], correctAnswer: "Mühendis" }
    ],
    vocabulary: [
        { word: "Médecin", meaning: "Doktor" },
        { word: "Hôpital", meaning: "Hastane" },
        { word: "Professeure", meaning: "Öğretmen" },
        { word: "École", meaning: "Okul" },
        { word: "Ingénieur", meaning: "Mühendis" }
    ]
};

// ===== ÜNİTE 309: EVİMİZ =====
const unit309Reading: UnitReading = {
    unitId: 309,
    title: "Evimiz (Yer Edatları ve Odalar)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "J'habite dans une maison. Il y a un salon, une cuisine et deux chambres. La salle de bain est petite. Le jardin est grand.",
        translation: "Bir evde yaşıyorum. Bir salon, bir mutfak ve iki yatak odası var. Banyo küçük. Bahçe büyük."
    },
    questions: [
        { id: 1, question: "Nerede yaşıyorum?", options: ["Apartman", "Otel", "Ev", "Villa"], correctAnswer: "Ev" },
        { id: 2, question: "Kaç yatak odası var?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
        { id: 3, question: "Banyo nasıl?", options: ["Büyük", "Küçük", "Temiz", "Kirli"], correctAnswer: "Küçük" },
        { id: 4, question: "Bahçe nasıl?", options: ["Küçük", "Yok", "Güzel", "Büyük"], correctAnswer: "Büyük" },
        { id: 5, question: "Evde ne var?", options: ["Salon", "Havuz", "Garaj", "Sinema"], correctAnswer: "Salon" },
        { id: 6, question: "'Maison' ne demek?", options: ["Masa", "Ev", "Oda", "Kapı"], correctAnswer: "Ev" },
        { id: 7, question: "'Cuisine' ne demek?", options: ["Kuzen", "Mutfak", "Yemek", "Aşçı"], correctAnswer: "Mutfak" },
        { id: 8, question: "'Petite' ne demek?", options: ["Büyük", "Küçük", "Orta", "Geniş"], correctAnswer: "Küçük" },
        { id: 9, question: "'Grand' ne demek?", options: ["Büyük", "Küçük", "Yüce", "Uzun"], correctAnswer: "Büyük" },
        { id: 10, question: "'Chambres' ne demek?", options: ["Odalar/Yatak odaları", "Çamlar", "Camlar", "Sandalyeler"], correctAnswer: "Odalar/Yatak odaları" }
    ],
    vocabulary: [
        { word: "Maison", meaning: "Ev" },
        { word: "Salon", meaning: "Salon" },
        { word: "Cuisine", meaning: "Mutfak" },
        { word: "Chambres", meaning: "Odalar" },
        { word: "Jardin", meaning: "Bahçe" }
    ]
};

// ===== ÜNİTE 310: SINIFTA =====
const unit310Reading: UnitReading = {
    unitId: 310,
    title: "Belirsiz Tanımlıklar (Les Articles Indéfinis)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Dans la classe, il y a un tableau noir. Les élèves ont des livres et des cahiers. Le professeur a un stylo rouge. Il y a aussi une carte du monde.",
        translation: "Sınıfta kara tahta var. Öğrencilerin kitapları ve defterleri var. Öğretmenin kırmızı bir kalemi var. Ayrıca bir dünya haritası var."
    },
    questions: [
        { id: 1, question: "Sınıfta ne var?", options: ["Televizyon", "Tahta", "Yatak", "Koltuk"], correctAnswer: "Tahta" },
        { id: 2, question: "Öğrencilerin nesi var?", options: ["Telefon", "Bilgisayar", "Kitap ve Defter", "Oyuncak"], correctAnswer: "Kitap ve Defter" },
        { id: 3, question: "Öğretmenin kalemi ne renk?", options: ["Mavi", "Siyah", "Yeşil", "Kırmızı"], correctAnswer: "Kırmızı" },
        { id: 4, question: "Duvarda ne var?", options: ["Resim", "Saat", "Harita", "Ayna"], correctAnswer: "Harita" },
        { id: 5, question: "'Tableau' ne demek?", options: ["Masa", "Tablo/Tahta", "Tablet", "Tabak"], correctAnswer: "Tablo/Tahta" },
        { id: 6, question: "'Livres' ne demek?", options: ["Defterler", "Kitaplar", "Kalemler", "Silgiler"], correctAnswer: "Kitaplar" },
        { id: 7, question: "'Cahiers' ne demek?", options: ["Kitaplar", "Kağıtlar", "Defterler", "Çantalar"], correctAnswer: "Defterler" },
        { id: 8, question: "'Stylo' ne demek?", options: ["Stil", "Kalem (Tükenmez)", "Silgi", "Cetvel"], correctAnswer: "Kalem (Tükenmez)" },
        { id: 9, question: "'Carte' ne demek?", options: ["Kart", "Harita", "Mektup", "Kutu"], correctAnswer: "Harita" },
        { id: 10, question: "Kimde kırmızı kalem var?", options: ["Öğrenci", "Öğretmen", "Müdür", "Hademede"], correctAnswer: "Öğretmen" }
    ],
    vocabulary: [
        { word: "Classe", meaning: "Sınıf" },
        { word: "Tableau", meaning: "Tahta" },
        { word: "Livres", meaning: "Kitaplar" },
        { word: "Cahiers", meaning: "Defterler" },
        { word: "Stylo", meaning: "Kalem" }
    ]
};

// ===== ÜNİTE 311: VÜCUDUMUZ =====
const unit311Reading: UnitReading = {
    unitId: 311,
    title: "Avoir Mal à (Ağrısı Olmak)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "J'ai deux yeux et un nez. J'ai deux bras et deux jambes. J'ai mal à la tête. Mon cœur bat vite.",
        translation: "İki gözüm ve bir burnum var. İki kolum ve iki bacağım var. Başım ağrıyor. Kalbim hızlı atıyor."
    },
    questions: [
        { id: 1, question: "Kaç gözüm var?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
        { id: 2, question: "Kaç burnum var?", options: ["1", "2", "Yok", "Çok"], correctAnswer: "1" },
        { id: 3, question: "Neresi ağrıyor?", options: ["Kol", "Bacak", "Baş", "Karın"], correctAnswer: "Baş" },
        { id: 4, question: "Kalp nasıl atıyor?", options: ["Yavaş", "Normal", "Hızlı", "Atmıyor"], correctAnswer: "Hızlı" },
        { id: 5, question: "'Tête' ne demek?", options: ["Kafa/Baş", "Tepe", "Teyze", "Tat"], correctAnswer: "Kafa/Baş" },
        { id: 6, question: "'Yeux' ne demek?", options: ["Kulaklar", "Gözler", "Eller", "Ayaklar"], correctAnswer: "Gözler" },
        { id: 7, question: "'Bras' ne demek?", options: ["Bacak", "Baş", "Kol", "Parmak"], correctAnswer: "Kol" },
        { id: 8, question: "'Jambes' ne demek?", options: ["Kollar", "Eller", "Bacaklar", "Dizler"], correctAnswer: "Bacaklar" },
        { id: 9, question: "'Cœur' ne demek?", options: ["Ciğer", "Kalp", "Mide", "Beyin"], correctAnswer: "Kalp" },
        { id: 10, question: "'Vite' ne demek?", options: ["Yavaş", "Hızlı", "Güçlü", "Zayıf"], correctAnswer: "Hızlı" }
    ],
    vocabulary: [
        { word: "Yeux", meaning: "Gözler" },
        { word: "Nez", meaning: "Burun" },
        { word: "Bras", meaning: "Kol" },
        { word: "Jambes", meaning: "Bacaklar" },
        { word: "Tête", meaning: "Baş" }
    ]
};

// ===== ÜNİTE 312: GİYSİLER =====
const unit312Reading: UnitReading = {
    unitId: 312,
    title: "Porter Fiili ve Giysiler",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Je porte un pantalon noir et une chemise blanche. Elle porte une robe rouge. Il fait froid, je mets mon manteau.",
        translation: "Siyah bir pantolon ve beyaz bir gömlek giyiyorum. O kırmızı bir elbise giyiyor. Hava soğuk, paltomu giyiyorum."
    },
    questions: [
        { id: 1, question: "Pantolon ne renk?", options: ["Mavi", "Siyah", "Gri", "Beyaz"], correctAnswer: "Siyah" },
        { id: 2, question: "Gömlek ne renk?", options: ["Siyah", "Mavi", "Beyaz", "Sarı"], correctAnswer: "Beyaz" },
        { id: 3, question: "O (kadın) ne giyiyor?", options: ["Etek", "Pantolon", "Elbise", "Şort"], correctAnswer: "Elbise" },
        { id: 4, question: "Elbise ne renk?", options: ["Kırmızı", "Mavi", "Yeşil", "Mor"], correctAnswer: "Kırmızı" },
        { id: 5, question: "Neden palto giyiyor?", options: ["Hava sıcak", "Hava soğuk", "Yağmur yağıyor", "Moda diye"], correctAnswer: "Hava soğuk" },
        { id: 6, question: "'Chemise' ne demek?", options: ["Gömlek", "Tişört", "Kazak", "Ceket"], correctAnswer: "Gömlek" },
        { id: 7, question: "'Robe' ne demek?", options: ["Robot", "Elbise", "Etek", "Bluz"], correctAnswer: "Elbise" },
        { id: 8, question: "'Manteau' ne demek?", options: ["Mantı", "Palto/Kaban", "Eldiven", "Şapka"], correctAnswer: "Palto/Kaban" },
        { id: 9, question: "'Noir' ne renk?", options: ["Beyaz", "Siyah", "Gri", "Lacivert"], correctAnswer: "Siyah" },
        { id: 10, question: "'Blanche' ne renk?", options: ["Siyah", "Beyaz", "Mavi", "Kırmızı"], correctAnswer: "Beyaz" }
    ],
    vocabulary: [
        { word: "Pantalon", meaning: "Pantolon" },
        { word: "Chemise", meaning: "Gömlek" },
        { word: "Robe", meaning: "Elbise" },
        { word: "Manteau", meaning: "Palto" },
        { word: "Porte", meaning: "Giyiyor/Taşıyor" }
    ]
};


// ===== ÜNİTE 313: YİYECEKLER =====
const unit313Reading: UnitReading = {
    unitId: 313,
    title: "Partitif Artikeller (Du, De la, De l', Des)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Le matin, je mange du pain avec du beurre et de la confiture. Je bois du café. J'aime aussi les croissants.",
        translation: "Sabahları tereyağlı ve reçelli ekmek yerim. Kahve içerim. Kruvasanları da severim."
    },
    questions: [
        { id: 1, question: "Ne zaman yiyor?", options: ["Akşam", "Öğlen", "Sabah", "Gece"], correctAnswer: "Sabah" },
        { id: 2, question: "Ekmeğin yanında ne var?", options: ["Peynir", "Tereyağı ve Reçel", "Sucuk", "Yumurta"], correctAnswer: "Tereyağı ve Reçel" },
        { id: 3, question: "Ne içiyor?", options: ["Çay", "Süt", "Kahve", "Su"], correctAnswer: "Kahve" },
        { id: 4, question: "Başka ne seviyor?", options: ["Kek", "Börek", "Kruvasan", "Simit"], correctAnswer: "Kruvasan" },
        { id: 5, question: "'Pain' ne demek?", options: ["Pasta", "Ekmek", "Peynir", "Para"], correctAnswer: "Ekmek" },
        { id: 6, question: "'Beurre' ne demek?", options: ["Börek", "Tereyağı", "Bira", "Bardak"], correctAnswer: "Tereyağı" },
        { id: 7, question: "'Confiture' ne demek?", options: ["Konserve", "Reçel", "Şeker", "Çikolata"], correctAnswer: "Reçel" },
        { id: 8, question: "'Café' ne demek?", options: ["Kafe", "Kahve", "Kafeterya", "Kola"], correctAnswer: "Kahve" },
        { id: 9, question: "'Mange' ne anlama gelir?", options: ["İçmek", "Yemek", "Uyumak", "Gezmek"], correctAnswer: "Yemek" },
        { id: 10, question: "'Bois' ne anlama gelir?", options: ["Yemek", "İçmek", "Bakmak", "Odun"], correctAnswer: "İçmek" }
    ],
    vocabulary: [
        { word: "Pain", meaning: "Ekmek" },
        { word: "Beurre", meaning: "Tereyağı" },
        { word: "Confiture", meaning: "Reçel" },
        { word: "Café", meaning: "Kahve" },
        { word: "Mange", meaning: "Yiyorum" }
    ]
};

// ===== ÜNİTE 314: İÇECEKLER =====
const unit314Reading: UnitReading = {
    unitId: 314,
    title: "Vouloir, Pouvoir, Devoir (Modal Fiiller)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Il fait chaud. J'ai soif. Je voudrais un verre d'eau, s'il vous plaît. Ou peut-être un jus d'orange frais.",
        translation: "Hava sıcak. Susadım. Bir bardak su rica ediyorum, lütfen. Ya da belki taze bir portakal suyu."
    },
    questions: [
        { id: 1, question: "Hava nasıl?", options: ["Soğuk", "Sıcak", "Rüzgarlı", "Yağmurlu"], correctAnswer: "Sıcak" },
        { id: 2, question: "Kişinin sorunu ne?", options: ["Aç", "Yorgun", "Susuz", "Hasta"], correctAnswer: "Susuz" },
        { id: 3, question: "Ne istiyor?", options: ["Yemek", "Su", "Para", "Uyku"], correctAnswer: "Su" },
        { id: 4, question: "Alternatif olarak ne istiyor?", options: ["Çay", "Kahve", "Portakal suyu", "Süt"], correctAnswer: "Portakal suyu" },
        { id: 5, question: "'Eau' ne demek?", options: ["O", "Su", "Ateş", "Hava"], correctAnswer: "Su" },
        { id: 6, question: "'Verre' ne demek?", options: ["Ver", "Bardak", "Şişe", "Tabak"], correctAnswer: "Bardak" },
        { id: 7, question: "'Jus' ne demek?", options: ["Yüz", "Meyve suyu", "Jöle", "Söz"], correctAnswer: "Meyve suyu" },
        { id: 8, question: "'Orange' ne demek?", options: ["Elma", "Portakal", "Muz", "Üzüm"], correctAnswer: "Portakal" },
        { id: 9, question: "'S'il vous plaît' ne demek?", options: ["Teşekkürler", "Lütfen", "Pardon", "Görüşürüz"], correctAnswer: "Lütfen" },
        { id: 10, question: "'J'ai soif' ne demek?", options: ["Korkuyorum", "Üşüdüm", "Susadım", "Acıktım"], correctAnswer: "Susadım" }
    ],
    vocabulary: [
        { word: "Soif", meaning: "Susuzluk" },
        { word: "Verre", meaning: "Bardak" },
        { word: "Eau", meaning: "Su" },
        { word: "Jus", meaning: "Meyve suyu" },
        { word: "Frais", meaning: "Taze/Serin" }
    ]
};

// ===== ÜNİTE 315: SAAT KAÇ? =====
const unit315Reading: UnitReading = {
    unitId: 315,
    title: "Saatleri Söyleme (L'Heure)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Quelle heure est-il ? Il est huit heures. Le cours commence à neuf heures. Nous sommes en retard ! Vite !",
        translation: "Saat kaç? Saat sekiz. Ders dokuzda başlıyor. Geç kaldık! Çabuk!"
    },
    questions: [
        { id: 1, question: "Saat kaç?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
        { id: 2, question: "Ders kaçta başlıyor?", options: ["8", "9", "10", "11"], correctAnswer: "9" },
        { id: 3, question: "Durum ne?", options: ["Erken geldik", "Geç kaldık", "Zamanında", "Tatil"], correctAnswer: "Geç kaldık" },
        { id: 4, question: "Ne yapmalılar?", options: ["Beklemeli", "Uyumalı", "Acele etmeli (Vite)", "Yemeli"], correctAnswer: "Acele etmeli (Vite)" },
        { id: 5, question: "'Quelle heure est-il?' ne demek?", options: ["Adın ne?", "Nasılsın?", "Saat kaç?", "Neredesin?"], correctAnswer: "Saat kaç?" },
        { id: 6, question: "'Huit' kaç?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
        { id: 7, question: "'Neuf' kaç?", options: ["8", "9", "10", "19"], correctAnswer: "9" },
        { id: 8, question: "'Commence' ne demek?", options: ["Biter", "Başlar", "Bekler", "Gelir"], correctAnswer: "Başlar" },
        { id: 9, question: "'En retard' ne demek?", options: ["Erken", "Geç", "Hızlı", "Yavaş"], correctAnswer: "Geç" },
        { id: 10, question: "'Vite' ne demek?", options: ["Yavaş", "Dur", "Çabuk/Hızlı", "Sakin"], correctAnswer: "Çabuk/Hızlı" }
    ],
    vocabulary: [
        { word: "Heure", meaning: "Saat" },
        { word: "Huit", meaning: "Sekiz" },
        { word: "Neuf", meaning: "Dokuz" },
        { word: "Retard", meaning: "Gecikme" },
        { word: "Commence", meaning: "Başlıyor" }
    ]
};

// ===== ÜNİTE 316: GÜNLÜK RUTİN =====
const unit316Reading: UnitReading = {
    unitId: 316,
    title: "Günlük Rutin (Dönüşlü Fiiller)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Je me réveille à sept heures. Je me douche. Je prends mon petit déjeuner. Ensuite, je vais au travail en bus.",
        translation: "Yedide uyanıyorum. Duş alıyorum. Kahvaltımı yapıyorum. Sonra otobüsle işe gidiyorum."
    },
    questions: [
        { id: 1, question: "Kaçta uyanıyor?", options: ["6", "7", "8", "9"], correctAnswer: "7" },
        { id: 2, question: "Uyandıktan sonra ne yapıyor?", options: ["Yiyor", "Uyuyor", "Duş alıyor", "Gidiyor"], correctAnswer: "Duş alıyor" },
        { id: 3, question: "İşe nasıl gidiyor?", options: ["Arabayla", "Yürüyerek", "Otobüsle", "Metroyla"], correctAnswer: "Otobüsle" },
        { id: 4, question: "'Je me réveille' ne demek?", options: ["Uyuyorum", "Uyanıyorum", "Gidiyorum", "Geliyorum"], correctAnswer: "Uyanıyorum" },
        { id: 5, question: "'Douche' ne demek?", options: ["Duş", "Diş", "Düş", "Dış"], correctAnswer: "Duş" },
        { id: 6, question: "'Petit déjeuner' ne demek?", options: ["Öğle yemeği", "Akşam yemeği", "Kahvaltı", "Ara öğün"], correctAnswer: "Kahvaltı" },
        { id: 7, question: "'Travail' ne demek?", options: ["Okul", "Ev", "İş", "Tatil"], correctAnswer: "İş" },
        { id: 8, question: "'Ensuite' ne demek?", options: ["Önce", "Sonra/Ardından", "Şimdi", "Asla"], correctAnswer: "Sonra/Ardından" },
        { id: 9, question: "'Bus' ne demek?", options: ["Taksi", "Tren", "Otobüs", "Uçak"], correctAnswer: "Otobüs" },
        { id: 10, question: "Sıralama nasıl?", options: ["Uyan-Ye-Duş-Git", "Uyan-Duş-Ye-Git", "Git-Uyan-Ye", "Ye-Uyan-Git"], correctAnswer: "Uyan-Duş-Ye-Git" }
    ],
    vocabulary: [
        { word: "Réveille", meaning: "Uyanmak" },
        { word: "Douche", meaning: "Duş" },
        { word: "Travail", meaning: "İş" },
        { word: "Bus", meaning: "Otobüs" },
        { word: "Ensuite", meaning: "Sonra" }
    ]
};

// ===== ÜNİTE 317: HOBİLER =====
const unit317Reading: UnitReading = {
    unitId: 317,
    title: "Hobiler (Faire vs Jouer)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "J'aime lire des livres. Le week-end, je joue au tennis avec mes amis. Parfois, je regarde la télévision ou j'écoute de la musique.",
        translation: "Kitap okumayı severim. Hafta sonu arkadaşlarımla tenis oynarım. Bazen televizyon izlerim veya müzik dinlerim."
    },
    questions: [
        { id: 1, question: "Ne okumayı sever?", options: ["Gazete", "Dergi", "Kitap", "Mektup"], correctAnswer: "Kitap" },
        { id: 2, question: "Hafta sonu ne yapar?", options: ["Çalışır", "Uyar", "Tenis oynar", "Yüzer"], correctAnswer: "Tenis oynar" },
        { id: 3, question: "Kiminle tenis oynar?", options: ["Ailesiyle", "Arkadaşlarıyla", "Yalnız", "Köpeğiyle"], correctAnswer: "Arkadaşlarıyla" },
        { id: 4, question: "Bazen ne yapar?", options: ["TV izler", "Koşar", "Yazar", "Dans eder"], correctAnswer: "TV izler" },
        { id: 5, question: "'Lire' ne demek?", options: ["Yazmak", "Okumak", "Konuşmak", "Duymak"], correctAnswer: "Okumak" },
        { id: 6, question: "'Joue' ne demek?", options: ["Oynarım", "İzlerim", "Giderim", "Gelirim"], correctAnswer: "Oynarım" },
        { id: 7, question: "'Regarde' ne demek?", options: ["Dinlerim", "Görürüm", "İzlerim/Bakarım", "Yaparım"], correctAnswer: "İzlerim/Bakarım" },
        { id: 8, question: "'Écoute' ne demek?", options: ["Konuşurum", "Dinlerim", "Söylerim", "Düşünürüm"], correctAnswer: "Dinlerim" },
        { id: 9, question: "'Musique' ne demek?", options: ["Müzik", "Müze", "Muz", "Masa"], correctAnswer: "Müzik" },
        { id: 10, question: "'Parfois' ne demek?", options: ["Her zaman", "Hiçbir zaman", "Bazen", "Sık sık"], correctAnswer: "Bazen" }
    ],
    vocabulary: [
        { word: "Loisirs", meaning: "Hobiler" },
        { word: "Lire", meaning: "Okumak" },
        { word: "Joue", meaning: "Oynamak" },
        { word: "Regarde", meaning: "İzlemek" },
        { word: "Écoute", meaning: "Dinlemek" }
    ]
};

// ===== ÜNİTE 318: HAVA DURUMU =====
const unit318Reading: UnitReading = {
    unitId: 318,
    title: "Hava Durumu (Le Temps)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "En été, il fait chaud et il y a du soleil. En hiver, il fait froid et il neige. Au printemps, il pleut souvent.",
        translation: "Yazın hava sıcaktır ve güneş vardır. Kışın hava soğuktur ve kar yağar. İlkbaharda sık sık yağmur yağar."
    },
    questions: [
        { id: 1, question: "Yazın hava nasıldır?", options: ["Soğuk", "Sıcak", "Rüzgarlı", "Karlı"], correctAnswer: "Sıcak" },
        { id: 2, question: "Kışın ne olur?", options: ["Güneş açar", "Çiçek açar", "Kar yağar", "Sıcak olur"], correctAnswer: "Kar yağar" },
        { id: 3, question: "İlkbaharda ne olur?", options: ["Kar yağar", "Yağmur yağar", "Çok sıcak olur", "Don olur"], correctAnswer: "Yağmur yağar" },
        { id: 4, question: "'Eté' ne demek?", options: ["Kış", "Yaz", "Bahar", "Sonbahar"], correctAnswer: "Yaz" },
        { id: 5, question: "'Hiver' ne demek?", options: ["Yaz", "İlkbahar", "Kış", "Sonbahar"], correctAnswer: "Kış" },
        { id: 6, question: "'Soleil' ne demek?", options: ["Ay", "Yıldız", "Güneş", "Bulut"], correctAnswer: "Güneş" },
        { id: 7, question: "'Neige' ne demek?", options: ["Yağmur", "Dolu", "Kar", "Sis"], correctAnswer: "Kar" },
        { id: 8, question: "'Pleut' ne anlama gelir?", options: ["Ağlamak", "Yağmur yağmak", "Gülmek", "Koşmak"], correctAnswer: "Yağmur yağmak" },
        { id: 9, question: "'Souvent' ne demek?", options: ["Asla", "Bazen", "Sık sık", "Nadir"], correctAnswer: "Sık sık" },
        { id: 10, question: "'Printemps' ne demek?", options: ["Kış", "Yaz", "Sonbahar", "İlkbahar"], correctAnswer: "İlkbahar" }
    ],
    vocabulary: [
        { word: "Temps", meaning: "Hava/Zaman" },
        { word: "Soleil", meaning: "Güneş" },
        { word: "Neige", meaning: "Kar" },
        { word: "Pleut", meaning: "Yağmur" },
        { word: "Hiver", meaning: "Kış" }
    ]
};

// ===== ÜNİTE 319: DUYGULAR =====
const unit319Reading: UnitReading = {
    unitId: 319,
    title: "Duygular ve Cinsiyet Uyumu",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Je suis heureux quand il fait beau. Je suis triste quand il pleut. Parfois, je suis en colère. Mais souvent, je suis calme.",
        translation: "Hava güzel olduğunda mutluyum. Yağmur yağdığında üzgünüm. Bazen kızgınım. Ama genellikle sakinim."
    },
    questions: [
        { id: 1, question: "Ne zaman mutluyum?", options: ["Yağmur yağınca", "Kar yağınca", "Hava güzel olunca", "Gece olunca"], correctAnswer: "Hava güzel olunca" },
        { id: 2, question: "Ne zaman üzgünüm?", options: ["Güneş açınca", "Yağmur yağınca", "Yemek yiyince", "Uyuyunca"], correctAnswer: "Yağmur yağınca" },
        { id: 3, question: "Bazen nasılım?", options: ["Mutlu", "Kızgın", "Sakin", "Yorgun"], correctAnswer: "Kızgın" },
        { id: 4, question: "Genellikle nasılım?", options: ["Kızgın", "Üzgün", "Sakin", "Korkmuş"], correctAnswer: "Sakin" },
        { id: 5, question: "'Heureux' ne demek?", options: ["Mutlu", "Üzgün", "Kızgın", "Yorgun"], correctAnswer: "Mutlu" },
        { id: 6, question: "'Triste' ne demek?", options: ["Mutlu", "Üzgün", "Kızgın", "Şaşkın"], correctAnswer: "Üzgün" },
        { id: 7, question: "'En colère' ne demek?", options: ["Kızgın", "Mutlu", "Sakin", "Hasta"], correctAnswer: "Kızgın" },
        { id: 8, question: "'Calme' ne demek?", options: ["Kızgın", "Heyecanlı", "Sakin", "Korkak"], correctAnswer: "Sakin" },
        { id: 9, question: "'Quand' ne demek?", options: ["Nerede", "Ne zaman/..dığında", "Kim", "Nasıl"], correctAnswer: "Ne zaman/..dığında" },
        { id: 10, question: "'Mais' ne demek?", options: ["Ve", "Veya", "Ama", "Çünkü"], correctAnswer: "Ama" }
    ],
    vocabulary: [
        { word: "Heureux", meaning: "Mutlu" },
        { word: "Triste", meaning: "Üzgün" },
        { word: "Colère", meaning: "Öfke/Kızgın" },
        { word: "Calme", meaning: "Sakin" },
        { word: "Quand", meaning: "Ne zaman" }
    ]
};

// ===== ÜNİTE 320: ŞEHİRDE YÖNLER =====
const unit320Reading: UnitReading = {
    unitId: 320,
    title: "Emir Kipi ve Yol Tarifi (L'Impératif)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Pardon, où est la gare ? Allez tout droit, puis tournez à gauche. La gare est à côté de la poste, en face du parc.",
        translation: "Pardon, istasyon nerede? Dümdüz gidin, sonra sola dönün. İstasyon postanenin yanında, parkın karşısında."
    },
    questions: [
        { id: 1, question: "Ne arıyor?", options: ["Otel", "İstasyon / Gar", "Park", "Okul"], correctAnswer: "İstasyon / Gar" },
        { id: 2, question: "Nasıl gitmeli?", options: ["Sola dönmeli", "Sağa dönmeli", "Dümdüz gitmeli", "Geri dönmeli"], correctAnswer: "Dümdüz gitmeli" },
        { id: 3, question: "Sonra ne yapmalı?", options: ["Sağa dönmeli", "Sola dönmeli", "Durmalı", "Koşmalı"], correctAnswer: "Sola dönmeli" },
        { id: 4, question: "İstasyon neyin yanında?", options: ["Okulun", "Bankanın", "Postanenin", "Marketin"], correctAnswer: "Postanenin" },
        { id: 5, question: "İstasyon neyin karşısında?", options: ["Parkın", "Evin", "Hastanenin", "Sinemanın"], correctAnswer: "Parkın" },
        { id: 6, question: "'Gare' ne demek?", options: ["Gar/İstasyon", "Liman", "Havalimanı", "Durak"], correctAnswer: "Gar/İstasyon" },
        { id: 7, question: "'Tout droit' ne demek?", options: ["Sola", "Sağa", "Dümdüz", "Geri"], correctAnswer: "Dümdüz" },
        { id: 8, question: "'Gauche' ne demek?", options: ["Sağ", "Sol", "Düz", "Arka"], correctAnswer: "Sol" },
        { id: 9, question: "'À côté de' ne demek?", options: ["Uzağında", "İçinde", "Yanında", "Üstünde"], correctAnswer: "Yanında" },
        { id: 10, question: "'En face de' ne demek?", options: ["Arkasında", "Karşısında", "Altında", "Yakınında"], correctAnswer: "Karşısında" }
    ],
    vocabulary: [
        { word: "Gare", meaning: "Gar" },
        { word: "Droit", meaning: "Düz/Sağ (Hukuk)" },
        { word: "Gauche", meaning: "Sol" },
        { word: "Côté", meaning: "Yan/Taraf" },
        { word: "Face", meaning: "Yüz/Karşı" }
    ]
};

// ===== ÜNİTE 321: ULAŞIM =====
const unit321Reading: UnitReading = {
    unitId: 321,
    title: "Prendre Fiili ve Ulaşım",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Je prends le bus pour aller à l'école. Mon père prend la voiture. Le train est rapide. J'aime aussi le vélo.",
        translation: "Okula gitmek için otobüse biniyorum. Babam arabayı alıyor. Tren hızlıdır. Bisikleti de severim."
    },
    questions: [
        { id: 1, question: "Okula neyle gidiyor?", options: ["Araba", "Tren", "Otobüs", "Bisiklet"], correctAnswer: "Otobüs" },
        { id: 2, question: "Babası ne kullanıyor?", options: ["Otobüs", "Araba", "Motosiklet", "Kamyon"], correctAnswer: "Araba" },
        { id: 3, question: "Tren nasıl?", options: ["Yavaş", "Eski", "Hızlı", "Pahalı"], correctAnswer: "Hızlı" },
        { id: 4, question: "Başka neyi seviyor?", options: ["Yürümeyi", "Koşmayı", "Bisikleti", "Kaykayı"], correctAnswer: "Bisikleti" },
        { id: 5, question: "'Prends' ne demek?", options: ["Almak/Binmek", "Vermek", "Satmak", "Görmek"], correctAnswer: "Almak/Binmek" },
        { id: 6, question: "'Voiture' ne demek?", options: ["Vapur", "Uçak", "Araba", "Tren"], correctAnswer: "Araba" },
        { id: 7, question: "'Train' ne demek?", options: ["Tramvay", "Tren", "Tır", "Taksi"], correctAnswer: "Tren" },
        { id: 8, question: "'Rapide' ne demek?", options: ["Yavaş", "Hızlı", "Güçlü", "Zayıf"], correctAnswer: "Hızlı" },
        { id: 9, question: "'Vélo' ne demek?", options: ["Veli", "Vazo", "Bisiklet", "Bavul"], correctAnswer: "Bisiklet" },
        { id: 10, question: "'Aller' ne demek?", options: ["Gelmek", "Gitmek", "Kalmak", "Durmak"], correctAnswer: "Gitmek" }
    ],
    vocabulary: [
        { word: "Prends", meaning: "Alıyorum/Biniyorum" },
        { word: "Voiture", meaning: "Araba" },
        { word: "Train", meaning: "Tren" },
        { word: "Rapide", meaning: "Hızlı" },
        { word: "Vélo", meaning: "Bisiklet" }
    ]
};

// ===== ÜNİTE 322: MEVSİMLER =====
const unit322Reading: UnitReading = {
    unitId: 322,
    title: "Mevsimler ve En/Au Edatları",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Il y a quatre saisons. Le printemps est vert. L'été est chaud. L'automne est jaune et rouge. L'hiver est blanc.",
        translation: "Dört mevsim vardır. İlkbahar yeşildir. Yaz sıcaktır. Sonbahar sarı ve kırmızıdır. Kış beyazdır."
    },
    questions: [
        { id: 1, question: "Kaç mevsim var?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
        { id: 2, question: "İlkbahar ne renktir?", options: ["Sarı", "Yeşil", "Beyaz", "Mavi"], correctAnswer: "Yeşil" },
        { id: 3, question: "Yaz nasıldır?", options: ["Soğuk", "Ilık", "Sıcak", "Rüzgarlı"], correctAnswer: "Sıcak" },
        { id: 4, question: "Sonbahar hangi renklerdir?", options: ["Mavi-Yeşil", "Sarı-Kırmızı", "Siyah-Beyaz", "Mor-Pembe"], correctAnswer: "Sarı-Kırmızı" },
        { id: 5, question: "Kış ne renktir?", options: ["Gri", "Siyah", "Beyaz", "Mavi"], correctAnswer: "Beyaz" },
        { id: 6, question: "'Saison' ne demek?", options: ["Sezon/Mevsim", "Ay", "Yıl", "Gün"], correctAnswer: "Sezon/Mevsim" },
        { id: 7, question: "'Printemps' ne demek?", options: ["Yaz", "Kış", "İlkbahar", "Sonbahar"], correctAnswer: "İlkbahar" },
        { id: 8, question: "'Été' ne demek?", options: ["Kış", "Yaz", "Bahar", "Tatil"], correctAnswer: "Yaz" },
        { id: 9, question: "'Automne' ne demek?", options: ["Otomobil", "İlkbahar", "Sonbahar", "Kış"], correctAnswer: "Sonbahar" },
        { id: 10, question: "'Hiver' ne demek?", options: ["Nehir", "Kış", "Yaz", "Hava"], correctAnswer: "Kış" }
    ],
    vocabulary: [
        { word: "Saisons", meaning: "Mevsimler" },
        { word: "Printemps", meaning: "İlkbahar" },
        { word: "Été", meaning: "Yaz" },
        { word: "Automne", meaning: "Sonbahar" },
        { word: "Hiver", meaning: "Kış" }
    ]
};


// ===== ÜNİTE 323: DOĞUM GÜNÜ =====
const unit323Reading: UnitReading = {
    unitId: 323,
    title: "Futur Proche (Yakın Gelecek)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Demain, c'est mon anniversaire. Je vais fêter avec mes amis. Nous allons manger un gâteau. Je vais être très heureux.",
        translation: "Yarın doğum günüm. Arkadaşlarımla kutlayacağım. Bir pasta yiyeceğiz. Çok mutlu olacağım."
    },
    questions: [
        { id: 1, question: "Doğum günü ne zaman?", options: ["Bugün", "Yarın", "Dün", "Haftaya"], correctAnswer: "Yarın" },
        { id: 2, question: "Kiminle kutlayacak?", options: ["Ailesiyle", "Yalnız", "Arkadaşlarıyla", "Öğretmeniyle"], correctAnswer: "Arkadaşlarıyla" },
        { id: 3, question: "Ne yiyecekler?", options: ["Pizza", "Pasta", "Dondurma", "Meyve"], correctAnswer: "Pasta" },
        { id: 4, question: "Nasıl hissedecek?", options: ["Üzgün", "Yorgun", "Mutlu", "Kızgın"], correctAnswer: "Mutlu" },
        { id: 5, question: "Kullanılan zaman hangisi?", options: ["Geçmiş", "Şimdiki", "Yakın Gelecek", "Geniş"], correctAnswer: "Yakın Gelecek" },
        { id: 6, question: "'Demain' ne demek?", options: ["Dün", "Yarın", "Bugün", "Sonra"], correctAnswer: "Yarın" },
        { id: 7, question: "'Fêter' ne demek?", options: ["Ağlamak", "Kutlamak", "Uyumak", "Gitmek"], correctAnswer: "Kutlamak" },
        { id: 8, question: "'Gâteau' ne demek?", options: ["Pasta", "Ekmek", "Su", "Şeker"], correctAnswer: "Pasta" },
        { id: 9, question: "'Heureux' ne demek?", options: ["Mutlu", "Üzgün", "Hasta", "Hızlı"], correctAnswer: "Mutlu" },
        { id: 10, question: "'Nous allons manger' ne demek?", options: ["Yedik", "Yiyoruz", "Yiyeceğiz", "Yemeliyiz"], correctAnswer: "Yiyeceğiz" }
    ],
    vocabulary: [
        { word: "Demain", meaning: "Yarın" },
        { word: "Fêter", meaning: "Kutlamak" },
        { word: "Gâteau", meaning: "Pasta" },
        { word: "Heureux", meaning: "Mutlu" },
        { word: "Manger", meaning: "Yemek" }
    ]
};

// ===== ÜNİTE 324: TATİL =====
const unit324Reading: UnitReading = {
    unitId: 324,
    title: "Passé Composé (Geçmiş Zaman)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "L'été dernier, je suis allé en vacances. J'ai nagé dans la mer. J'ai mangé de bons plats. J'ai adoré mes vacances.",
        translation: "Geçen yaz tatile gittim. Denizde yüzdüm. Güzel yemekler yedim. Tatilime bayıldım."
    },
    questions: [
        { id: 1, question: "Ne zaman tatile gitti?", options: ["Bu kış", "Geçen yaz", "Yarın", "Haftaya"], correctAnswer: "Geçen yaz" },
        { id: 2, question: "Nerede yüzdü?", options: ["Havuzda", "Nehirde", "Denizde", "Gölde"], correctAnswer: "Denizde" },
        { id: 3, question: "Yemekler nasıldı?", options: ["Kötü", "Soğuk", "Güzel (Bon)", "Pahalı"], correctAnswer: "Güzel (Bon)" },
        { id: 4, question: "Tatili sevdi mi?", options: ["Hayır", "Biraz", "Evet, bayıldı", "Nefret etti"], correctAnswer: "Evet, bayıldı" },
        { id: 5, question: "Hangi zaman kullanılmış?", options: ["Gelecek", "Şimdiki", "Geçmiş (Passé Composé)", "Emir"], correctAnswer: "Geçmiş (Passé Composé)" },
        { id: 6, question: "'Je suis allé' ne demek?", options: ["Gidiyorum", "Gideceğim", "Gittim", "Gitmeliyim"], correctAnswer: "Gittim" },
        { id: 7, question: "'J'ai nagé' ne demek?", options: ["Yüzdüm", "Koştum", "Uçtum", "Yattım"], correctAnswer: "Yüzdüm" },
        { id: 8, question: "'Mer' ne demek?", options: ["Dağ", "Deniz", "Orman", "Şehir"], correctAnswer: "Deniz" },
        { id: 9, question: "'Plats' ne demek?", options: ["Tabaklar/Yemekler", "Bardaklar", "Çatallar", "Bıçaklar"], correctAnswer: "Tabaklar/Yemekler" },
        { id: 10, question: "'J'ai adoré' ne demek?", options: ["Nefret ettim", "Bayıldım/Çok sevdim", "Gördüm", "Yaptım"], correctAnswer: "Bayıldım/Çok sevdim" }
    ],
    vocabulary: [
        { word: "Vacances", meaning: "Tatil" },
        { word: "Mer", meaning: "Deniz" },
        { word: "Allé", meaning: "Gitti" },
        { word: "Nagé", meaning: "Yüzdü" },
        { word: "Adoré", meaning: "Bayıldı/Çok sevdi" }
    ]
};

// ===== ÜNİTE 325: ALIŞVERİŞ =====
const unit325Reading: UnitReading = {
    unitId: 325,
    title: "Fiyat ve Miktar Sorma (Combien)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Je fais les courses. J'achète du lait, des œufs et du fromage. Je paie à la caisse. Le sac est lourd.",
        translation: "Alışveriş yapıyorum. Süt, yumurta ve peynir alıyorum. Kasada ödüyorum. Poşet ağır."
    },
    questions: [
        { id: 1, question: "Ne yapıyor?", options: ["Spor", "Alışveriş", "Yemek", "Temizlik"], correctAnswer: "Alışveriş" },
        { id: 2, question: "Ne alıyor?", options: ["Ekmek", "Su", "Süt", "Et"], correctAnswer: "Süt" },
        { id: 3, question: "Başka ne alıyor?", options: ["Meyve", "Sebze", "Yumurta", "Balık"], correctAnswer: "Yumurta" },
        { id: 4, question: "Nerede ödüyor?", options: ["Kapıda", "Kasada", "Dışarıda", "Evde"], correctAnswer: "Kasada" },
        { id: 5, question: "Poşet nasıl?", options: ["Hafif", "Boş", "Dolu", "Ağır"], correctAnswer: "Ağır" },
        { id: 6, question: "'Courses' ne demek?", options: ["Koşular", "Kurslar", "Alışveriş", "Dersler"], correctAnswer: "Alışveriş" },
        { id: 7, question: "'Lait' ne demek?", options: ["Süt", "Su", "Yağ", "Bal"], correctAnswer: "Süt" },
        { id: 8, question: "'Œufs' ne demek?", options: ["Etler", "Yumurtalar", "Otlar", "Gözler"], correctAnswer: "Yumurtalar" },
        { id: 9, question: "'Fromage' ne demek?", options: ["Fransız", "Form", "Peynir", "Yoğurt"], correctAnswer: "Peynir" },
        { id: 10, question: "'Lourd' ne demek?", options: ["Hafif", "Ağır", "Büyük", "Küçük"], correctAnswer: "Ağır" }
    ],
    vocabulary: [
        { word: "Courses", meaning: "Alışveriş" },
        { word: "Lait", meaning: "Süt" },
        { word: "Œufs", meaning: "Yumurtalar" },
        { word: "Fromage", meaning: "Peynir" },
        { word: "Lourd", meaning: "Ağır" }
    ]
};

// ===== ÜNİTE 326: RESTORANDA =====
const unit326Reading: UnitReading = {
    unitId: 326,
    title: "Restoranda (Au Restaurant)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Le serveur apporte le menu. Je commande une soupe et un steak. C'est délicieux. Je laisse un pourboire.",
        translation: "Garson menüyü getiriyor. Bir çorba ve bir biftek sipariş ediyorum. Bu lezzetli. Bahşiş bırakıyorum."
    },
    questions: [
        { id: 1, question: "Garson ne getiriyor?", options: ["Su", "Hesap", "Menü", "Ekmek"], correctAnswer: "Menü" },
        { id: 2, question: "Ne sipariş ediyor (sıvı)?", options: ["Su", "Şarap", "Çorba", "Kahve"], correctAnswer: "Çorba" },
        { id: 3, question: "Ne sipariş ediyor (ana yemek)?", options: ["Balık", "Tavuk", "Steak/Biftek", "Salata"], correctAnswer: "Steak/Biftek" },
        { id: 4, question: "Yemek nasıl?", options: ["Kötü", "Soğuk", "Lezzetli", "Pahalı"], correctAnswer: "Lezzetli" },
        { id: 5, question: "Ne bırakıyor?", options: ["Para", "Bahşiş", "Telefon", "Anahtar"], correctAnswer: "Bahşiş" },
        { id: 6, question: "'Serveur' ne demek?", options: ["Servis", "Garson", "Aşçı", "Müdür"], correctAnswer: "Garson" },
        { id: 7, question: "'Commande' ne demek?", options: ["Komutan", "Sipariş ediyorum", "Geliyorum", "Gidiyorum"], correctAnswer: "Sipariş ediyorum" },
        { id: 8, question: "'Soupe' ne demek?", options: ["Supa", "Çorba", "Sulu", "Sos"], correctAnswer: "Çorba" },
        { id: 9, question: "'Délicieux' ne demek?", options: ["Delice", "Kötü", "Lezzetli", "Acı"], correctAnswer: "Lezzetli" },
        { id: 10, question: "'Pourboire' ne demek?", options: ["İçmek için", "Bahşiş", "Hesap", "Para üstü"], correctAnswer: "Bahşiş" }
    ],
    vocabulary: [
        { word: "Serveur", meaning: "Garson" },
        { word: "Menu", meaning: "Menü" },
        { word: "Soupe", meaning: "Çorba" },
        { word: "Délicieux", meaning: "Lezzetli" },
        { word: "Pourboire", meaning: "Bahşiş" }
    ]
};

// ===== ÜNİTE 327: RENKLER VE SIFATLAR =====
const unit327Reading: UnitReading = {
    unitId: 327,
    title: "Karşılaştırma (Le Comparatif)",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Mon frère est plus grand que moi. Ma voiture est plus rapide que ton vélo. L'été est plus chaud que l'hiver. La souris est moins grande que l'éléphant.",
        translation: "Erkek kardeşim benden daha uzun. Arabam senin bisikletinden daha hızlı. Yaz kıştan daha sıcak. Fare filden daha az büyüktür (küçüktür)."
    },
    questions: [
        { id: 1, question: "Erkek kardeş nasıl?", options: ["Daha kısa", "Daha uzun (Grand)", "Daha şişman", "Daha genç"], correctAnswer: "Daha uzun (Grand)" },
        { id: 2, question: "Araba bisikletten nasıl?", options: ["Daha yavaş", "Daha hızlı (Rapide)", "Daha ucuz", "Daha eski"], correctAnswer: "Daha hızlı (Rapide)" },
        { id: 3, question: "Yaz kıştan nasıl?", options: ["Daha soğuk", "Daha sıcak (Chaud)", "Daha kısa", "Daha yağmurlu"], correctAnswer: "Daha sıcak (Chaud)" },
        { id: 4, question: "Fare filden nasıl?", options: ["Daha büyük", "Daha küçük (Moins grande)", "Eşit", "Daha ağır"], correctAnswer: "Daha küçük (Moins grande)" },
        { id: 5, question: "'Plus... que' ne demek?", options: ["Daha az... den", "Daha çok... den", "Kadar", "Gibi"], correctAnswer: "Daha çok... den" },
        { id: 6, question: "'Moins... que' ne demek?", options: ["Daha çok", "Daha az", "Eşit", "Çok"], correctAnswer: "Daha az" },
        { id: 7, question: "'Grand' ne demek?", options: ["Küçük", "Büyük/Uzun", "Kısa", "Zayıf"], correctAnswer: "Büyük/Uzun" },
        { id: 8, question: "'Rapide' ne demek?", options: ["Yavaş", "Hızlı", "Güzel", "Çirkin"], correctAnswer: "Hızlı" },
        { id: 9, question: "'Chaud' ne demek?", options: ["Soğuk", "Sıcak", "Ilık", "Serin"], correctAnswer: "Sıcak" },
        { id: 10, question: "'Frère' ne demek?", options: ["Baba", "Anne", "Erkek kardeş", "Kız kardeş"], correctAnswer: "Erkek kardeş" }
    ],
    vocabulary: [
        { word: "Plus", meaning: "Daha (fazla)" },
        { word: "Moins", meaning: "Daha az" },
        { word: "Grand", meaning: "Büyük/Uzun" },
        { word: "Rapide", meaning: "Hızlı" },
        { word: "Chaud", meaning: "Sıcak" }
    ]
};

// ===== ÜNİTE 328: HAYVANLAR =====
const unit328Reading: UnitReading = {
    unitId: 328,
    title: "Hayvanlar ve Cinsiyet Kuralı",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Le chien aboie. Le chat miaule. L'oiseau chante. Le poisson nage. Le lion est le roi.",
        translation: "Köpek havlar. Kedi miyavlar. Kuş öter (şarkı söyler). Balık yüzer. Aslan kraldır."
    },
    questions: [
        { id: 1, question: "Köpek ne yapar?", options: ["Miyavlar", "Havlar", "Öter", "Yüzer"], correctAnswer: "Havlar" },
        { id: 2, question: "Kedi ne yapar?", options: ["Havlar", "Miyavlar", "Kükrer", "Öter"], correctAnswer: "Miyavlar" },
        { id: 3, question: "Kuş ne yapar?", options: ["Yüzer", "Koşar", "Öter/Şarkı söyler", "Uyur"], correctAnswer: "Öter/Şarkı söyler" },
        { id: 4, question: "Balık ne yapar?", options: ["Uçar", "Yüzer", "Yürür", "Koşar"], correctAnswer: "Yüzer" },
        { id: 5, question: "Kral kimdir?", options: ["Ayı", "Kaplan", "Aslan", "Fil"], correctAnswer: "Aslan" },
        { id: 6, question: "'Chien' ne demek?", options: ["Kedi", "Köpek", "Kuş", "Balık"], correctAnswer: "Köpek" },
        { id: 7, question: "'Chat' ne demek?", options: ["Kedi", "Köpek", "Fare", "Tavşan"], correctAnswer: "Kedi" },
        { id: 8, question: "'Oiseau' ne demek?", options: ["Böcek", "Kuş", "Arı", "Kelebek"], correctAnswer: "Kuş" },
        { id: 9, question: "'Poisson' ne demek?", options: ["Zehir", "Balık", "Pasta", "Su"], correctAnswer: "Balık" },
        { id: 10, question: "'Lion' ne demek?", options: ["Kaplan", "Aslan", "Puma", "Kedi"], correctAnswer: "Aslan" }
    ],
    vocabulary: [
        { word: "Chien", meaning: "Köpek" },
        { word: "Chat", meaning: "Kedi" },
        { word: "Oiseau", meaning: "Kuş" },
        { word: "Poisson", meaning: "Balık" },
        { word: "Lion", meaning: "Aslan" }
    ]
};

// ===== ÜNİTE 329: TEKNOLOJİ =====
const unit329Reading: UnitReading = {
    unitId: 329,
    title: "Amaç Bildirme: Pour + Mastar",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "J'utilise mon ordinateur pour travailler. J'ai un téléphone portable. Je surfe sur internet. J'envoie des messages.",
        translation: "Çalışmak için bilgisayarımı kullanıyorum. Bir cep telefonum var. İnternette sörf yapıyorum. Mesajlar gönderiyorum."
    },
    questions: [
        { id: 1, question: "Ne için bilgisayar kullanıyor?", options: ["Oyun oynamak", "Çalışmak", "Film izlemek", "Müzik dinlemek"], correctAnswer: "Çalışmak" },
        { id: 2, question: "Nesi var?", options: ["Tableti", "Kamerası", "Cep telefonu", "Televizyonu"], correctAnswer: "Cep telefonu" },
        { id: 3, question: "Nerede sörf yapıyor?", options: ["Denizde", "Havuzda", "İnternette", "Kanepede"], correctAnswer: "İnternette" },
        { id: 4, question: "Ne gönderiyor?", options: ["Mektup", "Paket", "Para", "Mesaj"], correctAnswer: "Mesaj" },
        { id: 5, question: "'Ordinateur' ne demek?", options: ["Televizyon", "Radyo", "Bilgisayar", "Telefon"], correctAnswer: "Bilgisayar" },
        { id: 6, question: "'Téléphone portable' ne demek?", options: ["Ev telefonu", "Cep telefonu", "Ankesörlü", "Telsiz"], correctAnswer: "Cep telefonu" },
        { id: 7, question: "'Surfe' ne demek?", options: ["Yüzmek", "Sörf yapmak/Gezinmek", "Koşmak", "Uçmak"], correctAnswer: "Sörf yapmak/Gezinmek" },
        { id: 8, question: "'Internet' ne demek?", options: ["İnternet", "Ağ", "Site", "Oyun"], correctAnswer: "İnternet" },
        { id: 9, question: "'Envoie' ne demek?", options: ["Almak", "Göndermek", "Silmek", "Yazmak"], correctAnswer: "Göndermek" },
        { id: 10, question: "'Messages' ne demek?", options: ["Mesajlar", "Resimler", "Videolar", "Sesler"], correctAnswer: "Mesajlar" }
    ],
    vocabulary: [
        { word: "Ordinateur", meaning: "Bilgisayar" },
        { word: "Téléphone", meaning: "Telefon" },
        { word: "Internet", meaning: "İnternet" },
        { word: "Messages", meaning: "Mesajlar" },
        { word: "Utilise", meaning: "Kullanıyorum" }
    ]
};


// ... (Devam eden üniteler)

// ===== ÜNİTE 330: A1 GENEL TEKRAR =====
const unit330Reading: UnitReading = {
    unitId: 330,
    title: "A1 Dilbilgisi Özeti",
    language: "Fransızca",
    level: "A1",
    story: {
        text: "Je parle français maintenant. Je connais les nombres, les couleurs et les jours. Je peux me présenter. C'est super !",
        translation: "Artık Fransızca konuşuyorum. Sayıları, renkleri ve günleri biliyorum. Kendimi tanıtabiliyorum. Bu süper!"
    },
    questions: [
        { id: 1, question: "Hangi dili konuşuyor?", options: ["İngilizce", "Almanca", "Fransızca", "İspanyolca"], correctAnswer: "Fransızca" },
        { id: 2, question: "Neleri biliyor?", options: ["Sadece sayıları", "Sayıları, renkleri, günleri", "Hiçbir şeyi", "Sadece renkleri"], correctAnswer: "Sayıları, renkleri, günleri" },
        { id: 3, question: "Ne yapabiliyor?", options: ["Şarkı söyleyebiliyor", "Dans edebiliyor", "Kendini tanıtabiliyor", "Uçabiliyor"], correctAnswer: "Kendini tanıtabiliyor" },
        { id: 4, question: "Durum nasıl?", options: ["Kötü", "Sıkıcı", "Zor", "Süper"], correctAnswer: "Süper" },
        { id: 5, question: "'Parle' ne demek?", options: ["Konuşuyorum", "Dinliyorum", "Yazıyorum", "Okuyorum"], correctAnswer: "Konuşuyorum" },
        { id: 6, question: "'Connais' ne demek?", options: ["Bilmiyorum", "Biliyorum/Tanıyorum", "Görüyorum", "Duyuyorum"], correctAnswer: "Biliyorum/Tanıyorum" },
        { id: 7, question: "'Nombres' ne demek?", options: ["Numaralar/Sayılar", "İsimler", "Harfler", "Kelimeler"], correctAnswer: "Numaralar/Sayılar" },
        { id: 8, question: "'Couleurs' ne demek?", options: ["Kullar", "Renkler", "Şekiller", "Sesler"], correctAnswer: "Renkler" },
        { id: 9, question: "'Jours' ne demek?", options: ["Günler", "Aylar", "Yıllar", "Mevsimler"], correctAnswer: "Günler" },
        { id: 10, question: "'Maintenant' ne demek?", options: ["Şimdi", "Asla", "Önce", "Sonra"], correctAnswer: "Şimdi" }
    ],
    vocabulary: [
        { word: "Parle", meaning: "Konuşuyorum" },
        { word: "Connais", meaning: "Biliyorum" },
        { word: "Nombres", meaning: "Sayılar" },
        { word: "Couleurs", meaning: "Renkler" },
        { word: "Jours", meaning: "Günler" }
    ]
};

// Ünite ID'sine göre reading getir
export function getReadingForUnit(unitId: number): UnitReading | null {
    const readings: { [key: number]: UnitReading } = {
        301: unit301Reading,
        302: unit302Reading,
        303: unit303Reading,
        304: unit304Reading,
        305: unit305Reading,
        306: unit306Reading,
        307: unit307Reading,
        308: unit308Reading,
        309: unit309Reading,
        310: unit310Reading,
        311: unit311Reading,
        312: unit312Reading,
        313: unit313Reading,
        314: unit314Reading,
        315: unit315Reading,
        316: unit316Reading,
        317: unit317Reading,
        318: unit318Reading,
        319: unit319Reading,
        320: unit320Reading,
        321: unit321Reading,
        322: unit322Reading,
        323: unit323Reading,
        324: unit324Reading,
        325: unit325Reading,
        326: unit326Reading,
        327: unit327Reading,
        328: unit328Reading,
        329: unit329Reading,
        330: unit330Reading
    };

    return readings[unitId] || null;
}

