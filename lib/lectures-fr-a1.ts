
// SteadyShell Konu Anlatımı - Fransızca A1 (301-330)
// Curriculum.ts ile senkronize - Tüm üniteler için detaylı içerik

import { UnitLecture, LectureSlide } from './lectures';

// ===== ÜNİTE 301: MERHABA =====
const unit301Lecture: UnitLecture = {
    unitId: 301, title: "Merhaba - Selamlaşma ve Tanışma", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Bienvenue! 🇫🇷", content: "Fransızca öğrenmeye hoş geldiniz! Bu derste temel selamlaşma ve tanışma ifadelerini öğreneceğiz.", tip: "Fransızca'da vurgu genellikle son hecededir." },
        {
            id: 2, type: "vocabulary", title: "Selamlaşma Kelimeleri", words: [
                { target: "Bonjour", native: "Merhaba / İyi günler", pronunciation: "bon-jur", example: "Bonjour, madame." },
                { target: "Bonsoir", native: "İyi akşamlar", pronunciation: "bon-suar", example: "Bonsoir, monsieur." },
                { target: "Salut", native: "Selam (Samimi)", pronunciation: "sa-lü", example: "Salut, ça va?" },
                { target: "Au revoir", native: "Hoşça kal", pronunciation: "o-rö-vuar", example: "Au revoir, à demain!" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Kibarlık: Tu vs Vous", rules: [
                { rule: "Tu (Sen)", explanation: "Aile ve arkadaşlar arasında kullanılır.", examples: ["Tu es français?", "Comment tu t'appelles?"] },
                { rule: "Vous (Siz)", explanation: "Tanımadığınız kişiler ve saygı için kullanılır.", examples: ["Vous êtes français?", "Comment vous appelez-vous?"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Gündüz: Bonjour", "Akşam: Bonsoir", "Samimi: Salut", "Resmi: Vous kullan"], cta: "Şimdi selamlaşma pratiği yapalım!" }
    ]
};

// ===== ÜNİTE 302: ALFABE VE SESLER =====
const unit302Lecture: UnitLecture = {
    unitId: 302, title: "Alfabe ve Sesler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "L'Alphabet Français 🔤", content: "Fransız alfabesi 26 harften oluşur. Bazı harflerin üzerinde aksan işaretleri bulunur.", tip: "Aksanlar sesi değiştirir!" },
        {
            id: 2, type: "vocabulary", title: "Özel Sesler", words: [
                { target: "é (accent aigu)", native: "Kapalı E sesi", pronunciation: "e", example: "été (yaz)" },
                { target: "è (accent grave)", native: "Açık E sesi", pronunciation: "è", example: "mère (anne)" },
                { target: "ç (cédille)", native: "S sesi verir", pronunciation: "s", example: "français" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Ulama (Liaison)", rules: [
                { rule: "Ulama Kuralı", explanation: "Bir kelime sessiz harfle bitip sonraki sesliyle başlıyorsa, birleşik okunur.", examples: ["Les amis = Le-zami", "Un enfant = Ön-nan-fan"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Aksanlar sesi değiştirir", "é = kapalı e, è = açık e", "Ulama melodiyi sağlar"], cta: "Alfabeyi tekrar edelim!" }
    ]
};

// ===== ÜNİTE 303: SAYILAR (0-20) =====
const unit303Lecture: UnitLecture = {
    unitId: 303, title: "Sayılar (0-20)", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Nombres 🔢", content: "Fransızca sayıları öğrenmek önemlidir. 0-16 arası her sayının özel adı vardır.", tip: "17'den sonra 'On-yedi' mantığı başlar." },
        {
            id: 2, type: "vocabulary", title: "0-10 Arası Sayılar", words: [
                { target: "Zéro", native: "Sıfır", pronunciation: "ze-ro" },
                { target: "Un, Deux, Trois", native: "Bir, İki, Üç", pronunciation: "ön, dö, trua" },
                { target: "Quatre, Cinq", native: "Dört, Beş", pronunciation: "katr, senk" },
                { target: "Six, Sept, Huit, Neuf, Dix", native: "6-10", pronunciation: "sis, set, üit, nöf, dis" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "11-20 Arası", words: [
                { target: "Onze, Douze, Treize", native: "11, 12, 13", pronunciation: "onz, duz, trez" },
                { target: "Dix-sept, Dix-huit", native: "17, 18 (On-yedi mantığı)", pronunciation: "dis-set, diz-üit" },
                { target: "Vingt", native: "20", pronunciation: "ven" }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["0-16: Özel isimler", "17-19: Dix + sayı", "20 = Vingt"], cta: "Sayıları pratik yapalım!" }
    ]
};

// ===== ÜNİTE 304: RENKLER =====
const unit304Lecture: UnitLecture = {
    unitId: 304, title: "Renkler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Couleurs 🎨", content: "Renkleri öğrenelim! Fransızca'da renkler sıfat olarak ismin cinsiyetine göre değişir.", tip: "Dişi için genellikle -e eklenir." },
        {
            id: 2, type: "vocabulary", title: "Temel Renkler", words: [
                { target: "Rouge", native: "Kırmızı", pronunciation: "ruj", example: "Une pomme rouge" },
                { target: "Bleu/Bleue", native: "Mavi", pronunciation: "blö", example: "Le ciel est bleu" },
                { target: "Vert/Verte", native: "Yeşil", pronunciation: "ver/vert", example: "L'herbe est verte" },
                { target: "Jaune", native: "Sarı", pronunciation: "jon", example: "Le soleil est jaune" },
                { target: "Noir/Noire", native: "Siyah", pronunciation: "nuar", example: "Un chat noir" },
                { target: "Blanc/Blanche", native: "Beyaz", pronunciation: "blan/blanş", example: "La neige est blanche" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Cinsiyet Uyumu", rules: [
                { rule: "Renk + Dişi İsim", explanation: "Çoğu renk dişil isimle kullanılırken sonuna -e alır.", examples: ["Un stylo vert → Une pomme verte", "Un chat blanc → Une chemise blanche"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Renkler sıfat olarak kullanılır", "Dişi için -e eklenir", "Bazı renkler değişmez (rouge, jaune)"], cta: "Renkleri test edelim!" }
    ]
};

// ===== ÜNİTE 305: AİLE BİREYLERİ =====
const unit305Lecture: UnitLecture = {
    unitId: 305, title: "Aile Bireyleri", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "La Famille 👨‍👩‍👧‍👦", content: "Ailenizi tanıtmayı öğrenelim. Fransızca'da iyelik sıfatları (benim, senin) önemlidir.", tip: "İyelik sıfatı nesnenin cinsiyetine göre değişir!" },
        {
            id: 2, type: "vocabulary", title: "Aile Üyeleri", words: [
                { target: "Le père / La mère", native: "Baba / Anne", pronunciation: "per / mer" },
                { target: "Le frère / La sœur", native: "Erkek kardeş / Kız kardeş", pronunciation: "frer / sör" },
                { target: "Le grand-père / La grand-mère", native: "Dede / Büyükanne", pronunciation: "gran-per / gran-mer" },
                { target: "L'oncle / La tante", native: "Amca-Dayı / Hala-Teyze", pronunciation: "onkl / tant" }
            ]
        },
        {
            id: 3, type: "grammar", title: "İyelik Sıfatları", rules: [
                { rule: "Mon, Ma, Mes (Benim)", explanation: "Mon: Eril tekil, Ma: Dişil tekil, Mes: Çoğul", examples: ["Mon père", "Ma mère", "Mes parents"] },
                { rule: "Ton, Ta, Tes (Senin)", explanation: "Aynı mantık", examples: ["Ton frère", "Ta sœur"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Mon/Ma/Mes = Benim", "Ton/Ta/Tes = Senin", "Nesnenin cinsiyetine bak!"], cta: "Ailenizi tanıtın!" }
    ]
};

// ===== ÜNİTE 306: GÜNLER VE AYLAR =====
const unit306Lecture: UnitLecture = {
    unitId: 306, title: "Günler ve Aylar", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Jours et Les Mois 📅", content: "Haftanın günlerini ve yılın aylarını öğrenelim.", tip: "Fransızca'da günler ve aylar küçük harfle yazılır!" },
        {
            id: 2, type: "vocabulary", title: "Haftanın Günleri", words: [
                { target: "Lundi", native: "Pazartesi", pronunciation: "lan-di" },
                { target: "Mardi, Mercredi", native: "Salı, Çarşamba", pronunciation: "mar-di, mer-krö-di" },
                { target: "Jeudi, Vendredi", native: "Perşembe, Cuma", pronunciation: "jö-di, van-drö-di" },
                { target: "Samedi, Dimanche", native: "Cumartesi, Pazar", pronunciation: "sam-di, di-manş" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Aylar", words: [
                { target: "Janvier, Février, Mars", native: "Ocak, Şubat, Mart", pronunciation: "jan-vi-e, fev-ri-e, mars" },
                { target: "Avril, Mai, Juin", native: "Nisan, Mayıs, Haziran", pronunciation: "av-ril, me, juen" },
                { target: "Juillet, Août", native: "Temmuz, Ağustos", pronunciation: "jui-ye, ut" }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Günler küçük harfle", "Le lundi = Pazartesileri", "En janvier = Ocak'ta"], cta: "Takvimi öğrenelim!" }
    ]
};

// ===== ÜNİTE 307: ÜLKELER VE MİLLETLER =====
const unit307Lecture: UnitLecture = {
    unitId: 307, title: "Ülkeler ve Milletler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Pays 🌍", content: "Nerelisin? D'où venez-vous? Bu derste ülkeleri ve milliyetleri öğreneceğiz.", tip: "Milliyet sıfatları cinsiyete göre değişir!" },
        {
            id: 2, type: "vocabulary", title: "Ülkeler", words: [
                { target: "La France", native: "Fransa", pronunciation: "frans" },
                { target: "La Turquie", native: "Türkiye", pronunciation: "tür-ki" },
                { target: "L'Allemagne", native: "Almanya", pronunciation: "al-man-yö" },
                { target: "L'Angleterre", native: "İngiltere", pronunciation: "ang-lö-ter" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Milliyetler", rules: [
                { rule: "Cinsiyet Değişimi", explanation: "Erkek → Kadın için genellikle -e eklenir veya son harf değişir.", examples: ["Français → Française", "Turc → Turque", "Allemand → Allemande"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Je viens de Turquie", "Je suis turc/turque", "En + ülke (dişil)"], cta: "Ülkeleri öğrenelim!" }
    ]
};

// ===== ÜNİTE 308: MESLEKLER =====
const unit308Lecture: UnitLecture = {
    unitId: 308, title: "Meslekler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Métiers 👷", content: "Ne iş yapıyorsunuz? Que faites-vous dans la vie? Meslekleri öğrenelim.", tip: "Meslekler de cinsiyete göre değişir!" },
        {
            id: 2, type: "vocabulary", title: "Yaygın Meslekler", words: [
                { target: "Médecin", native: "Doktor", pronunciation: "med-sen" },
                { target: "Professeur/e", native: "Öğretmen", pronunciation: "pro-fe-sör" },
                { target: "Avocat/e", native: "Avukat", pronunciation: "a-vo-ka" },
                { target: "Ingénieur/e", native: "Mühendis", pronunciation: "en-je-ni-ör" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Meslek Değişimi", rules: [
                { rule: "Dişil Yapma", explanation: "-eur → -euse veya -teur → -trice", examples: ["Chanteur → Chanteuse", "Acteur → Actrice"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Je suis médecin", "Elle est avocate", "Il travaille comme..."], cta: "Mesleğinizi söyleyin!" }
    ]
};

// ===== ÜNİTE 309: EVİMİZ =====
const unit309Lecture: UnitLecture = {
    unitId: 309, title: "Evimiz", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "La Maison 🏠", content: "Evinizi tanıtmayı ve yer edatlarını öğrenelim.", tip: "Dans = İçinde, Sur = Üstünde, Sous = Altında" },
        {
            id: 2, type: "vocabulary", title: "Ev Bölümleri", words: [
                { target: "Le salon", native: "Salon", pronunciation: "sa-lon" },
                { target: "La cuisine", native: "Mutfak", pronunciation: "kui-zin" },
                { target: "La chambre", native: "Yatak odası", pronunciation: "şanbr" },
                { target: "La salle de bain", native: "Banyo", pronunciation: "sal-dö-ben" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Yer Edatları", rules: [
                { rule: "Nerede?", explanation: "Dans (içinde), Sur (üstünde), Sous (altında), Devant (önünde), Derrière (arkasında)", examples: ["Le chat est sous la table", "Le livre est sur le lit"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["J'habite dans une maison", "Ma chambre est grande", "Il y a trois pièces"], cta: "Evinizi tanıtın!" }
    ]
};

// ===== ÜNİTE 310: SINIFTA =====
const unit310Lecture: UnitLecture = {
    unitId: 310, title: "Sınıfta", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Dans la Classe 📚", content: "Sınıf ortamında kullanılan kelimeler ve ifadeleri öğrenelim.", tip: "Un/Une belirsiz, Le/La belirli tanımlıklardır." },
        {
            id: 2, type: "vocabulary", title: "Sınıf Eşyaları", words: [
                { target: "Le tableau", native: "Tahta", pronunciation: "tab-lo" },
                { target: "Le livre / Le cahier", native: "Kitap / Defter", pronunciation: "livr / ka-ye" },
                { target: "Le stylo / Le crayon", native: "Kalem / Kurşun kalem", pronunciation: "sti-lo / kre-yon" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Tanımlıklar", rules: [
                { rule: "Un/Une/Des (Belirsiz)", explanation: "Bir şeyden ilk kez bahsederken", examples: ["J'ai un livre"] },
                { rule: "Le/La/Les (Belirli)", explanation: "Bilinen bir şeyden bahsederken", examples: ["Le livre est sur la table"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Un stylo (bir kalem)", "Le stylo (o kalem)", "Ouvrez vos livres!"], cta: "Sınıf kelimelerini öğren!" }
    ]
};

// ===== ÜNİTE 311: VÜCUDUMUZ =====
const unit311Lecture: UnitLecture = {
    unitId: 311, title: "Vücudumuz", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Le Corps 🧍", content: "Vücut bölümlerini ve ağrı bildirmeyi öğrenelim.", tip: "J'ai mal à = Bir yerim ağrıyor" },
        {
            id: 2, type: "vocabulary", title: "Vücut Bölümleri", words: [
                { target: "La tête", native: "Kafa/Baş", pronunciation: "tet" },
                { target: "Les yeux", native: "Gözler", pronunciation: "yö" },
                { target: "Le bras / La main", native: "Kol / El", pronunciation: "bra / men" },
                { target: "La jambe / Le pied", native: "Bacak / Ayak", pronunciation: "janb / pi-ye" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Ağrı Bildirme", rules: [
                { rule: "Avoir mal à + vücut", explanation: "à + le = au, à + la = à la, à + les = aux", examples: ["J'ai mal à la tête", "J'ai mal au ventre", "J'ai mal aux yeux"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["J'ai mal à la tête", "Où avez-vous mal?", "au/à la/aux kullanımı"], cta: "Vücut bölümlerini öğren!" }
    ]
};

// ===== ÜNİTE 312: GİYSİLER =====
const unit312Lecture: UnitLecture = {
    unitId: 312, title: "Giysiler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Vêtements 👕", content: "Kıyafet isimlerini ve ne giydiğinizi anlatmayı öğrenelim.", tip: "Porter = Giymek/Taşımak" },
        {
            id: 2, type: "vocabulary", title: "Giysi İsimleri", words: [
                { target: "Le pantalon", native: "Pantolon", pronunciation: "pan-ta-lon" },
                { target: "La chemise / Le t-shirt", native: "Gömlek / Tişört", pronunciation: "şö-miz" },
                { target: "La robe / La jupe", native: "Elbise / Etek", pronunciation: "rob / jüp" },
                { target: "Les chaussures", native: "Ayakkabılar", pronunciation: "şo-sür" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Porter Fiili", rules: [
                { rule: "Porter çekimi", explanation: "Düzenli -er fiili: Je porte, Tu portes, Il porte...", examples: ["Je porte un pantalon noir", "Elle porte une robe rouge"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Je porte...", "Qu'est-ce que tu portes?", "C'est trop grand/petit"], cta: "Ne giyiyorsunuz?" }
    ]
};

// ===== ÜNİTE 313: YİYECEKLER =====
const unit313Lecture: UnitLecture = {
    unitId: 313, title: "Yiyecekler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "La Nourriture 🍽️", content: "Yiyecek isimlerini ve partitif artikelleri öğrenelim.", tip: "Du/De la/De l' = Bir miktar (sayılamayan)" },
        {
            id: 2, type: "vocabulary", title: "Yiyecekler", words: [
                { target: "Le pain", native: "Ekmek", pronunciation: "pen" },
                { target: "Le fromage", native: "Peynir", pronunciation: "fro-maj" },
                { target: "La viande", native: "Et", pronunciation: "vi-and" },
                { target: "Les légumes", native: "Sebzeler", pronunciation: "le-güm" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Partitif Artikeller", rules: [
                { rule: "Du/De la/De l'", explanation: "Sayılamayan nesnelerden bir miktar alırken kullanılır.", examples: ["Je mange du pain", "Je bois de l'eau", "Je prends de la salade"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Du pain (biraz ekmek)", "De l'eau (biraz su)", "J'aime le fromage"], cta: "Ne yiyorsunuz?" }
    ]
};

// ===== ÜNİTE 314: İÇECEKLER =====
const unit314Lecture: UnitLecture = {
    unitId: 314, title: "İçecekler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Boissons ☕", content: "İçecekleri ve kibar isteme şeklini öğrenelim.", tip: "Je voudrais = Rica ediyorum (kibar)" },
        {
            id: 2, type: "vocabulary", title: "İçecekler", words: [
                { target: "L'eau", native: "Su", pronunciation: "o" },
                { target: "Le café / Le thé", native: "Kahve / Çay", pronunciation: "ka-fe / te" },
                { target: "Le jus d'orange", native: "Portakal suyu", pronunciation: "jü do-ranj" },
                { target: "Le lait", native: "Süt", pronunciation: "le" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Kibar İsteme", rules: [
                { rule: "Je voudrais...", explanation: "'İsterdim' anlamında, 'Je veux'dan daha kibar.", examples: ["Je voudrais un café, s'il vous plaît", "Je voudrais de l'eau"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Je voudrais...", "Un café, s'il vous plaît", "J'ai soif!"], cta: "Ne içersiniz?" }
    ]
};

// ===== ÜNİTE 315: SAAT KAÇ? =====
const unit315Lecture: UnitLecture = {
    unitId: 315, title: "Saat Kaç?", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Quelle heure est-il? ⏰", content: "Saati sorma ve söylemeyi öğrenelim.", tip: "Il est... heures = Saat ..." },
        {
            id: 2, type: "vocabulary", title: "Saat İfadeleri", words: [
                { target: "Il est midi", native: "Öğlen 12", pronunciation: "mi-di" },
                { target: "Il est minuit", native: "Gece yarısı", pronunciation: "mi-nui" },
                { target: "Et quart", native: "Çeyrek geçe", pronunciation: "e kar" },
                { target: "Et demie", native: "Buçuk", pronunciation: "e dö-mi" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Saat Söyleme", rules: [
                { rule: "Tam saat", explanation: "Il est [sayı] heure(s)", examples: ["Il est trois heures", "Il est une heure"] },
                { rule: "Dakika", explanation: "Et (geçe), Moins (kala)", examples: ["Il est trois heures et quart", "Il est quatre heures moins dix"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Quelle heure est-il?", "Il est... heures", "Et demie/quart"], cta: "Saat kaç?" }
    ]
};

// ===== ÜNİTE 316: GÜNLÜK RUTİN =====
const unit316Lecture: UnitLecture = {
    unitId: 316, title: "Günlük Rutin", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Ma Journée 🌅", content: "Günlük rutininizi anlatmayı ve dönüşlü fiilleri öğrenelim.", tip: "Se + fiil = Dönüşlü fiil (Kendine yapılan eylem)" },
        {
            id: 2, type: "vocabulary", title: "Rutin Fiilleri", words: [
                { target: "Se réveiller", native: "Uyanmak", pronunciation: "sö-re-ve-ye" },
                { target: "Se lever", native: "Kalkmak", pronunciation: "sö-lö-ve" },
                { target: "Se doucher", native: "Duş almak", pronunciation: "sö-du-şe" },
                { target: "Se coucher", native: "Yatmak", pronunciation: "sö-ku-şe" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Dönüşlü Fiiller", rules: [
                { rule: "Çekim", explanation: "Je me, Tu te, Il se, Nous nous, Vous vous, Ils se", examples: ["Je me réveille à 7h", "Il se douche le matin"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Je me lève à...", "D'abord, ensuite, puis", "Tous les jours"], cta: "Gününüzü anlatın!" }
    ]
};

// ===== ÜNİTE 317: HOBİLER =====
const unit317Lecture: UnitLecture = {
    unitId: 317, title: "Hobiler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Loisirs 🎾", content: "Hobilerden bahsetmeyi öğrenelim. Faire ve Jouer fiilleri önemli!", tip: "Faire de = Bireysel spor, Jouer à = Takım sporu" },
        {
            id: 2, type: "vocabulary", title: "Hobiler", words: [
                { target: "Lire", native: "Okumak", pronunciation: "lir" },
                { target: "Nager", native: "Yüzmek", pronunciation: "na-je" },
                { target: "Jouer au football", native: "Futbol oynamak", pronunciation: "ju-e o fut-bol" },
                { target: "Faire du vélo", native: "Bisiklet sürmek", pronunciation: "fer dü ve-lo" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Faire vs Jouer", rules: [
                { rule: "Faire de", explanation: "Bireysel aktiviteler ve sporlar", examples: ["Je fais du tennis", "Je fais de la natation"] },
                { rule: "Jouer à/de", explanation: "Takım sporları (à) ve müzik aletleri (de)", examples: ["Je joue au basket", "Je joue de la guitare"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["J'aime + fiil mastarı", "Je fais du sport", "Je joue au football"], cta: "Hobiniz ne?" }
    ]
};

// ===== ÜNİTE 318: HAVA DURUMU =====
const unit318Lecture: UnitLecture = {
    unitId: 318, title: "Hava Durumu", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Quel temps fait-il? ☀️", content: "Hava durumunu anlatmayı öğrenelim.", tip: "Il fait = Hava ... (genel durum)" },
        {
            id: 2, type: "vocabulary", title: "Hava İfadeleri", words: [
                { target: "Il fait beau", native: "Hava güzel", pronunciation: "il fe bo" },
                { target: "Il fait chaud/froid", native: "Hava sıcak/soğuk", pronunciation: "il fe şo/frua" },
                { target: "Il pleut", native: "Yağmur yağıyor", pronunciation: "il plö" },
                { target: "Il neige", native: "Kar yağıyor", pronunciation: "il nej" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Il fait vs Il y a", rules: [
                { rule: "Il fait + sıfat", explanation: "Genel hava durumu", examples: ["Il fait beau", "Il fait mauvais"] },
                { rule: "Il y a + isim", explanation: "Belirli bir şey var", examples: ["Il y a du soleil", "Il y a du vent"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Quel temps fait-il?", "Il fait beau/mauvais", "Il pleut/neige"], cta: "Hava nasıl?" }
    ]
};

// ===== ÜNİTE 319: DUYGULAR =====
const unit319Lecture: UnitLecture = {
    unitId: 319, title: "Duygular", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Émotions 😊", content: "Duygularımızı ifade etmeyi öğrenelim.", tip: "Être + sıfat = Olmak (Sıfatlar cinsiyete uyar!)" },
        {
            id: 2, type: "vocabulary", title: "Duygular", words: [
                { target: "Heureux/Heureuse", native: "Mutlu", pronunciation: "ö-rö/ö-röz" },
                { target: "Triste", native: "Üzgün", pronunciation: "trist" },
                { target: "Fatigué/e", native: "Yorgun", pronunciation: "fa-ti-ge" },
                { target: "En colère", native: "Kızgın", pronunciation: "an-ko-ler" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Être + Sıfat", rules: [
                { rule: "Cinsiyet uyumu", explanation: "Sıfatlar kadın/erkek için değişir", examples: ["Il est content", "Elle est contente"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Comment ça va?", "Je suis heureux/triste", "Elle est fatiguée"], cta: "Nasıl hissediyorsunuz?" }
    ]
};

// ===== ÜNİTE 320: ŞEHİRDE YÖNLER =====
const unit320Lecture: UnitLecture = {
    unitId: 320, title: "Şehirde Yönler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Directions 🧭", content: "Yol tarifi vermeyi ve almayı öğrenelim.", tip: "Emir kipi: Allez! Tournez! (Öznesiz kullanılır)" },
        {
            id: 2, type: "vocabulary", title: "Yön İfadeleri", words: [
                { target: "À gauche / À droite", native: "Sola / Sağa", pronunciation: "a goş / a druat" },
                { target: "Tout droit", native: "Dümdüz", pronunciation: "tu drua" },
                { target: "Près de / Loin de", native: "Yakınında / Uzağında", pronunciation: "pre dö / luen dö" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Emir Kipi", rules: [
                { rule: "Vous formu", explanation: "Öznesiz kullanılır: Allez, Tournez, Prenez", examples: ["Allez tout droit", "Tournez à gauche"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Où est la gare?", "Allez tout droit", "C'est à côté de..."], cta: "Yol tarifi verin!" }
    ]
};

// Kalan üniteler için kısa tanımlar
const unit321Lecture: UnitLecture = {
    unitId: 321, title: "Ulaşım", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Transports 🚌", content: "Ulaşım araçlarını ve prendre fiilini öğrenelim.", tip: "Prendre le bus = Otobüse binmek" },
        {
            id: 2, type: "vocabulary", title: "Ulaşım Araçları", words: [
                { target: "Le bus / Le métro", native: "Otobüs / Metro", pronunciation: "büs / me-tro" },
                { target: "Le train / L'avion", native: "Tren / Uçak", pronunciation: "tren / a-vi-on" },
                { target: "Le vélo / La voiture", native: "Bisiklet / Araba", pronunciation: "ve-lo / vua-tür" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Prendre Fiili", rules: [
                { rule: "Düzensiz çekim", explanation: "Je prends, Tu prends, Il prend, Nous prenons, Vous prenez, Ils prennent", examples: ["Je prends le bus", "Elle prend le métro"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Je prends le bus", "Comment y aller?", "Un billet aller-retour"], cta: "Hangi araçla gidersiniz?" }
    ]
};

const unit322Lecture: UnitLecture = {
    unitId: 322, title: "Mevsimler", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Saisons 🍂", content: "Dört mevsimi ve mevsim edatlarını öğrenelim.", tip: "En été, en hiver, en automne AMA au printemps!" },
        {
            id: 2, type: "vocabulary", title: "Mevsimler", words: [
                { target: "Le printemps", native: "İlkbahar", pronunciation: "pren-tan" },
                { target: "L'été", native: "Yaz", pronunciation: "e-te" },
                { target: "L'automne", native: "Sonbahar", pronunciation: "o-ton" },
                { target: "L'hiver", native: "Kış", pronunciation: "i-ver" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Mevsim Edatları", rules: [
                { rule: "En + Mevsim (çoğu)", explanation: "İstisna: Au printemps", examples: ["En été, il fait chaud", "Au printemps, les fleurs poussent"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["En été, en hiver, en automne", "Au printemps (istisna)", "Ma saison préférée..."], cta: "En sevdiğiniz mevsim?" }
    ]
};

const unit323Lecture: UnitLecture = {
    unitId: 323, title: "Doğum Günü", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Joyeux Anniversaire! 🎂", content: "Kutlama ifadelerini ve yakın gelecek zamanı öğrenelim.", tip: "Aller + mastar = Yakın gelecek" },
        {
            id: 2, type: "vocabulary", title: "Kutlama Kelimeleri", words: [
                { target: "L'anniversaire", native: "Doğum günü", pronunciation: "a-ni-ver-ser" },
                { target: "Le cadeau", native: "Hediye", pronunciation: "ka-do" },
                { target: "Le gâteau", native: "Pasta", pronunciation: "ga-to" },
                { target: "La fête", native: "Parti", pronunciation: "fet" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Futur Proche", rules: [
                { rule: "Aller + Mastar", explanation: "Yakın gelecekte yapılacakları anlatır", examples: ["Je vais manger le gâteau", "Nous allons faire la fête"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Joyeux anniversaire!", "Je vais + fiil = Yapacağım", "C'est quand ton anniversaire?"], cta: "Doğum gününüz ne zaman?" }
    ]
};

const unit324Lecture: UnitLecture = {
    unitId: 324, title: "Tatil", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Vacances 🏖️", content: "Tatil planlarınızı anlatmayı öğrenelim.", tip: "Passé composé = Geçmiş zaman (avoir/être + participe passé)" },
        {
            id: 2, type: "vocabulary", title: "Tatil Kelimeleri", words: [
                { target: "Les vacances", native: "Tatil", pronunciation: "va-kans" },
                { target: "La plage / La mer", native: "Plaj / Deniz", pronunciation: "plaj / mer" },
                { target: "L'hôtel", native: "Otel", pronunciation: "o-tel" },
                { target: "La valise", native: "Bavul", pronunciation: "va-liz" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Passé Composé (Giriş)", rules: [
                { rule: "Avoir + participe passé", explanation: "J'ai mangé, Tu as visité, Il a voyagé", examples: ["J'ai visité Paris", "Nous avons nagé"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Je vais à la mer", "J'ai visité...", "Bonnes vacances!"], cta: "Tatil planlarınız?" }
    ]
};

const unit325Lecture: UnitLecture = {
    unitId: 325, title: "Alışveriş", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Faire les Courses 🛒", content: "Alışveriş yaparken kullanılan ifadeleri öğrenelim.", tip: "Combien = Ne kadar?" },
        {
            id: 2, type: "vocabulary", title: "Alışveriş Kelimeleri", words: [
                { target: "Le magasin", native: "Mağaza", pronunciation: "ma-ga-zen" },
                { target: "Le prix", native: "Fiyat", pronunciation: "pri" },
                { target: "Acheter", native: "Satın almak", pronunciation: "aş-te" },
                { target: "Payer", native: "Ödemek", pronunciation: "pe-ye" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Soru Kalıpları", rules: [
                { rule: "Combien ça coûte?", explanation: "Fiyat sormak için", examples: ["Combien ça coûte?", "Ça fait combien?"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Combien ça coûte?", "C'est trop cher", "Je le prends"], cta: "Alışverişe gidelim!" }
    ]
};

const unit326Lecture: UnitLecture = {
    unitId: 326, title: "Restoranda", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Au Restaurant 🍽️", content: "Restoranda sipariş vermeyi öğrenelim.", tip: "S'il vous plaît = Lütfen (Resmi)" },
        {
            id: 2, type: "vocabulary", title: "Restoran Kelimeleri", words: [
                { target: "Le menu", native: "Menü", pronunciation: "mö-nü" },
                { target: "L'addition", native: "Hesap", pronunciation: "a-di-si-on" },
                { target: "Le serveur", native: "Garson", pronunciation: "ser-vör" },
                { target: "Commander", native: "Sipariş vermek", pronunciation: "ko-man-de" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Nezaket", rules: [
                { rule: "Kibar ifadeler", explanation: "S'il vous plaît, Merci beaucoup, Je voudrais...", examples: ["Je voudrais un steak", "L'addition, s'il vous plaît"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Une table pour deux", "Je voudrais commander", "L'addition, s'il vous plaît"], cta: "Sipariş verin!" }
    ]
};

const unit327Lecture: UnitLecture = {
    unitId: 327, title: "Renkler ve Sıfatlar", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Adjectifs 📝", content: "Sıfatları ve karşılaştırma yapıyı öğrenelim.", tip: "Plus + sıfat + que = ...den daha ..." },
        {
            id: 2, type: "vocabulary", title: "Sıfatlar", words: [
                { target: "Grand/Petit", native: "Büyük/Küçük", pronunciation: "gran/pö-ti" },
                { target: "Beau/Belle", native: "Güzel", pronunciation: "bo/bel" },
                { target: "Nouveau/Vieux", native: "Yeni/Eski", pronunciation: "nu-vo/vi-yö" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Karşılaştırma", rules: [
                { rule: "Plus...que", explanation: "...den daha ...", examples: ["Paris est plus grand que Lyon", "Ce livre est moins cher"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["Plus grand que", "Moins cher que", "Aussi beau que (kadar)"], cta: "Karşılaştırma yapın!" }
    ]
};

const unit328Lecture: UnitLecture = {
    unitId: 328, title: "Hayvanlar", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Les Animaux 🐕", content: "Hayvan isimlerini ve cinsiyet değişimlerini öğrenelim.", tip: "Le chat/La chatte = Kedi (Erkek/Dişi)" },
        {
            id: 2, type: "vocabulary", title: "Hayvanlar", words: [
                { target: "Le chien / Le chat", native: "Köpek / Kedi", pronunciation: "şi-en / şa" },
                { target: "L'oiseau", native: "Kuş", pronunciation: "ua-zo" },
                { target: "Le poisson", native: "Balık", pronunciation: "pua-son" },
                { target: "Le cheval", native: "At", pronunciation: "şö-val" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Hayvan Cinsiyeti", rules: [
                { rule: "Erkek/Dişi farkı", explanation: "Bazı hayvanların erkek ve dişi isimleri farklı", examples: ["Le chat / La chatte", "Le chien / La chienne"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["J'ai un chien", "J'adore les animaux", "Quel est ton animal préféré?"], cta: "Evcil hayvanınız var mı?" }
    ]
};

const unit329Lecture: UnitLecture = {
    unitId: 329, title: "Teknoloji", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "La Technologie 💻", content: "Teknoloji kelimelerini ve pour + mastar yapısını öğrenelim.", tip: "Pour + mastar = ...mek için" },
        {
            id: 2, type: "vocabulary", title: "Teknoloji Kelimeleri", words: [
                { target: "L'ordinateur", native: "Bilgisayar", pronunciation: "or-di-na-tör" },
                { target: "Le téléphone", native: "Telefon", pronunciation: "te-le-fon" },
                { target: "L'internet", native: "İnternet", pronunciation: "en-ter-net" },
                { target: "Le message", native: "Mesaj", pronunciation: "me-saj" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Pour + Mastar", rules: [
                { rule: "Amaç bildirme", explanation: "Pour + fiil mastarı = ...mek için", examples: ["J'utilise mon téléphone pour appeler", "Je vais sur internet pour chercher"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["J'utilise l'ordinateur pour...", "J'envoie un message", "Je surfe sur internet"], cta: "Teknolojiyi nasıl kullanırsınız?" }
    ]
};

const unit330Lecture: UnitLecture = {
    unitId: 330, title: "A1 Genel Tekrar", language: "Fransızca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Révisions 🎓", content: "Tebrikler! A1 seviyesini tamamladınız. Ana konuları tekrar edelim.", tip: "Pratik yaparak öğrendiklerinizi pekiştirin!" },
        {
            id: 2, type: "grammar", title: "Être ve Avoir", rules: [
                { rule: "Être (Olmak)", explanation: "Je suis, Tu es, Il est, Nous sommes, Vous êtes, Ils sont", examples: ["Je suis français", "Elle est étudiante"] },
                { rule: "Avoir (Sahip olmak)", explanation: "J'ai, Tu as, Il a, Nous avons, Vous avez, Ils ont", examples: ["J'ai un chat", "Nous avons faim"] }
            ]
        },
        {
            id: 3, type: "grammar", title: "Aller ve Faire", rules: [
                { rule: "Aller (Gitmek)", explanation: "Je vais, Tu vas, Il va...", examples: ["Je vais à Paris", "Je vais manger (gelecek)"] },
                { rule: "Faire (Yapmak)", explanation: "Je fais, Tu fais, Il fait...", examples: ["Je fais du sport", "Il fait beau"] }
            ]
        },
        { id: 4, type: "summary", title: "Tebrikler! 🎉", points: ["Selamlaşma ve tanışma", "Temel fiiller (être, avoir, aller, faire)", "Soru sorma ve cevaplama", "Geçmiş ve gelecek zaman temelleri"], cta: "A2 seviyesine hazırsınız!" }
    ]
};

// Tüm lecture'ları içeren obje
const allLectures: { [key: number]: UnitLecture } = {
    301: unit301Lecture, 302: unit302Lecture, 303: unit303Lecture, 304: unit304Lecture, 305: unit305Lecture,
    306: unit306Lecture, 307: unit307Lecture, 308: unit308Lecture, 309: unit309Lecture, 310: unit310Lecture,
    311: unit311Lecture, 312: unit312Lecture, 313: unit313Lecture, 314: unit314Lecture, 315: unit315Lecture,
    316: unit316Lecture, 317: unit317Lecture, 318: unit318Lecture, 319: unit319Lecture, 320: unit320Lecture,
    321: unit321Lecture, 322: unit322Lecture, 323: unit323Lecture, 324: unit324Lecture, 325: unit325Lecture,
    326: unit326Lecture, 327: unit327Lecture, 328: unit328Lecture, 329: unit329Lecture, 330: unit330Lecture
};

export function getFrenchA1LectureForUnit(unitId: number): UnitLecture {
    return allLectures[unitId] || unit301Lecture;
}
