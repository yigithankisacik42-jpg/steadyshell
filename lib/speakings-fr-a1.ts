// SteadyShell Konuşma Pratikleri - Fransızca A1 (301-330)
// Her ünite için 10 konuşma alıştırması

export interface SpeakingExercise {
    text: string;
    translation: string;
    pronunciation: string;
}

export interface UnitSpeaking {
    unitId: number;
    title: string;
    exercises: SpeakingExercise[];
}

// ===== ÜNİTE 301: SELAMLAŞMA =====
const unit301Speaking: UnitSpeaking = {
    unitId: 301, title: "Tanışma Pratiği",
    exercises: [
        { text: "Bonjour, comment allez-vous?", translation: "Merhaba, nasılsınız?", pronunciation: "bon-jur ko-man-ta-le-vu" },
        { text: "Je m'appelle Marie.", translation: "Benim adım Marie.", pronunciation: "jö ma-pel ma-ri" },
        { text: "Enchanté de vous rencontrer.", translation: "Tanıştığımıza memnun oldum.", pronunciation: "an-şan-te dö vu ran-kontr" },
        { text: "Je vais très bien, merci.", translation: "Çok iyiyim, teşekkürler.", pronunciation: "jö ve tre byan mer-si" },
        { text: "Comment vous appelez-vous?", translation: "Adınız ne?", pronunciation: "ko-man vu za-ple vu" },
        { text: "D'où venez-vous?", translation: "Nereden geliyorsunuz?", pronunciation: "du vö-ne vu" },
        { text: "Je viens de Turquie.", translation: "Türkiye'den geliyorum.", pronunciation: "jö vyen dö tür-ki" },
        { text: "Ravi de faire votre connaissance.", translation: "Sizinle tanışmak güzel.", pronunciation: "ra-vi dö fer votr ko-ne-sans" },
        { text: "À bientôt!", translation: "Yakında görüşürüz!", pronunciation: "a byan-to" },
        { text: "Bonne journée!", translation: "İyi günler!", pronunciation: "bon jur-ne" }
    ]
};

// ===== ÜNİTE 302: ALFABE =====
const unit302Speaking: UnitSpeaking = {
    unitId: 302, title: "Alfabe Pratiği",
    exercises: [
        { text: "Comment ça s'écrit?", translation: "Bu nasıl yazılır?", pronunciation: "ko-man sa se-kri" },
        { text: "Pouvez-vous épeler?", translation: "Heceleyebilir misiniz?", pronunciation: "pu-ve vu e-ple" },
        { text: "C'est avec un accent.", translation: "Aksanlı yazılır.", pronunciation: "se a-vek ön ak-san" },
        { text: "Je ne comprends pas.", translation: "Anlamıyorum.", pronunciation: "jö nö kom-pran pa" },
        { text: "Répétez, s'il vous plaît.", translation: "Tekrar edin, lütfen.", pronunciation: "re-pe-te sil vu ple" },
        { text: "Comment prononce-t-on ce mot?", translation: "Bu kelime nasıl okunur?", pronunciation: "ko-man pro-nons ton sö mo" },
        { text: "Plus lentement, s'il vous plaît.", translation: "Daha yavaş, lütfen.", pronunciation: "plü lant-man sil vu ple" },
        { text: "Qu'est-ce que ça veut dire?", translation: "Bu ne demek?", pronunciation: "kes kö sa vö dir" },
        { text: "C'est correct?", translation: "Doğru mu?", pronunciation: "se ko-rekt" },
        { text: "J'apprends le français.", translation: "Fransızca öğreniyorum.", pronunciation: "ja-pran lö fran-se" }
    ]
};

// ===== ÜNİTE 303: SAYILAR =====
const unit303Speaking: UnitSpeaking = {
    unitId: 303, title: "Sayılar Pratiği",
    exercises: [
        { text: "Quel est votre numéro?", translation: "Numaranız nedir?", pronunciation: "kel e votr nü-me-ro" },
        { text: "J'ai vingt ans.", translation: "Yirmi yaşındayım.", pronunciation: "je ven an" },
        { text: "Ça coûte quinze euros.", translation: "On beş euro.", pronunciation: "sa kut kenz ö-ro" },
        { text: "Nous sommes cinq personnes.", translation: "Beş kişiyiz.", pronunciation: "nu som senk per-son" },
        { text: "Il est dix heures.", translation: "Saat on.", pronunciation: "il e diz ör" },
        { text: "Un, deux, trois, quatre, cinq.", translation: "Bir, iki, üç, dört, beş.", pronunciation: "ön dötrua katr senk" },
        { text: "Combien ça coûte?", translation: "Bu ne kadar?", pronunciation: "kom-byan sa kut" },
        { text: "Quel âge avez-vous?", translation: "Kaç yaşındasınız?", pronunciation: "kel aj a-ve vu" },
        { text: "Six plus quatre égale dix.", translation: "Altı artı dört on eder.", pronunciation: "sis plüs katr e-gal dis" },
        { text: "Donnez-moi trois, s'il vous plaît.", translation: "Üç tane verin, lütfen.", pronunciation: "do-ne mua trua sil vu ple" }
    ]
};

// ===== ÜNİTE 304: RENKLER =====
const unit304Speaking: UnitSpeaking = {
    unitId: 304, title: "Renkler Pratiği",
    exercises: [
        { text: "De quelle couleur est-ce?", translation: "Bu ne renk?", pronunciation: "dö kel ku-lör es" },
        { text: "Ma couleur préférée est le bleu.", translation: "En sevdiğim renk mavi.", pronunciation: "ma ku-lör pre-fe-re e lö blö" },
        { text: "Le ciel est bleu.", translation: "Gökyüzü mavi.", pronunciation: "lö syel e blö" },
        { text: "L'herbe est verte.", translation: "Çimen yeşil.", pronunciation: "lerb e vert" },
        { text: "J'aime le rouge.", translation: "Kırmızıyı severim.", pronunciation: "jem lö ruj" },
        { text: "Cette robe est noire.", translation: "Bu elbise siyah.", pronunciation: "set rob e nuar" },
        { text: "Les fleurs sont jaunes.", translation: "Çiçekler sarı.", pronunciation: "le flör son jon" },
        { text: "Vous l'avez en blanc?", translation: "Beyaz var mı?", pronunciation: "vu la-ve an blan" },
        { text: "C'est trop foncé.", translation: "Çok koyu.", pronunciation: "se tro fon-se" },
        { text: "Je préfère les couleurs claires.", translation: "Açık renkleri tercih ederim.", pronunciation: "jö pre-fer le ku-lör kler" }
    ]
};

// ===== ÜNİTE 305: AİLE =====
const unit305Speaking: UnitSpeaking = {
    unitId: 305, title: "Aile Pratiği",
    exercises: [
        { text: "Voici ma famille.", translation: "İşte ailem.", pronunciation: "vua-si ma fa-miy" },
        { text: "Mon père s'appelle Pierre.", translation: "Babamın adı Pierre.", pronunciation: "mon per sa-pel pyer" },
        { text: "J'ai deux frères.", translation: "İki kardeşim var.", pronunciation: "je dö frer" },
        { text: "Ma mère est professeur.", translation: "Annem öğretmen.", pronunciation: "ma mer e pro-fe-sör" },
        { text: "Nous sommes une grande famille.", translation: "Büyük bir aileyiz.", pronunciation: "nu som ün grand fa-miy" },
        { text: "Mes grands-parents habitent à Paris.", translation: "Büyükanne ve dedem Paris'te yaşıyor.", pronunciation: "me gran-pa-ran a-bit a pa-ri" },
        { text: "Tu as des enfants?", translation: "Çocukların var mı?", pronunciation: "tü a de zan-fan" },
        { text: "J'ai un fils et une fille.", translation: "Bir oğlum ve bir kızım var.", pronunciation: "je ön fis e ün fiy" },
        { text: "Mon frère est marié.", translation: "Kardeşim evli.", pronunciation: "mon frer e ma-rye" },
        { text: "Ma sœur a trois enfants.", translation: "Kız kardeşimin üç çocuğu var.", pronunciation: "ma sör a trua zan-fan" }
    ]
};

// ===== ÜNİTE 306: GÜNLER =====
const unit306Speaking: UnitSpeaking = {
    unitId: 306, title: "Günler Pratiği",
    exercises: [
        { text: "Quel jour sommes-nous?", translation: "Bugün günlerden ne?", pronunciation: "kel jur som nu" },
        { text: "Aujourd'hui, c'est lundi.", translation: "Bugün pazartesi.", pronunciation: "o-jur-dui se lön-di" },
        { text: "Mon anniversaire est en mars.", translation: "Doğum günüm Mart'ta.", pronunciation: "mon a-ni-ver-ser e an mars" },
        { text: "Le week-end, je me repose.", translation: "Hafta sonu dinlenirim.", pronunciation: "lö wik-end jö mö röpoz" },
        { text: "Nous sommes en janvier.", translation: "Ocak ayındayız.", pronunciation: "nu som an jan-vye" },
        { text: "Je travaille du lundi au vendredi.", translation: "Pazartesiden cumaya çalışıyorum.", pronunciation: "jö tra-vay dü lön-di o van-drö-di" },
        { text: "Hier, c'était dimanche.", translation: "Dün pazardı.", pronunciation: "yer se-te di-manş" },
        { text: "Demain, ce sera mercredi.", translation: "Yarın çarşamba olacak.", pronunciation: "dö-men sö sö-ra mer-krö-di" },
        { text: "En été, il fait chaud.", translation: "Yazın sıcak olur.", pronunciation: "an e-te il fe şo" },
        { text: "Joyeux anniversaire!", translation: "Mutlu yıllar!", pronunciation: "jua-yö a-ni-ver-ser" }
    ]
};

// ===== ÜNİTE 307: ÜLKELER =====
const unit307Speaking: UnitSpeaking = {
    unitId: 307, title: "Ülkeler Pratiği",
    exercises: [
        { text: "D'où venez-vous?", translation: "Nerelisiniz?", pronunciation: "du vö-ne vu" },
        { text: "Je viens de Turquie.", translation: "Türkiye'den geliyorum.", pronunciation: "jö vyen dö tür-ki" },
        { text: "Je suis turc.", translation: "Ben Türküm.", pronunciation: "jö süi türk" },
        { text: "J'habite en France.", translation: "Fransa'da yaşıyorum.", pronunciation: "ja-bit an frans" },
        { text: "Paris est la capitale.", translation: "Paris başkenttir.", pronunciation: "pa-ri e la ka-pi-tal" },
        { text: "Quelles langues parlez-vous?", translation: "Hangi dilleri konuşuyorsunuz?", pronunciation: "kel lang par-le vu" },
        { text: "Je parle français et anglais.", translation: "Fransızca ve İngilizce konuşuyorum.", pronunciation: "jö parl fran-se e ang-le" },
        { text: "C'est mon premier voyage.", translation: "Bu ilk seyahatim.", pronunciation: "se mon prö-mye vua-yaj" },
        { text: "J'adore ce pays.", translation: "Bu ülkeyi çok seviyorum.", pronunciation: "ja-dor sö pe-i" },
        { text: "La France est belle.", translation: "Fransa güzel.", pronunciation: "la frans e bel" }
    ]
};

// ===== ÜNİTE 308: MESLEKLER =====
const unit308Speaking: UnitSpeaking = {
    unitId: 308, title: "Meslekler Pratiği",
    exercises: [
        { text: "Quelle est votre profession?", translation: "Mesleğiniz nedir?", pronunciation: "kel e votr pro-fe-syon" },
        { text: "Je suis médecin.", translation: "Doktorum.", pronunciation: "jö süi med-sen" },
        { text: "Je travaille comme professeur.", translation: "Öğretmen olarak çalışıyorum.", pronunciation: "jö tra-vay kom pro-fe-sör" },
        { text: "Je suis étudiant.", translation: "Öğrenciyim.", pronunciation: "jö süi e-tü-dyan" },
        { text: "Je cherche du travail.", translation: "İş arıyorum.", pronunciation: "jö şerş dü tra-vay" },
        { text: "Mon travail est intéressant.", translation: "İşim ilginç.", pronunciation: "mon tra-vay e an-te-re-san" },
        { text: "Je travaille dans un bureau.", translation: "Bir ofiste çalışıyorum.", pronunciation: "jö tra-vay dan ön bü-ro" },
        { text: "Je suis en vacances.", translation: "Tatildeyim.", pronunciation: "jö süi an va-kans" },
        { text: "Mon patron est gentil.", translation: "Patronum iyi biri.", pronunciation: "mon pa-tron e jan-ti" },
        { text: "Je fais des heures supplémentaires.", translation: "Fazla mesai yapıyorum.", pronunciation: "jö fe de zör sü-ple-man-ter" }
    ]
};

// ===== ÜNİTE 309: EVİMİZ =====
const unit309Speaking: UnitSpeaking = {
    unitId: 309, title: "Ev Pratiği",
    exercises: [
        { text: "Bienvenue chez moi!", translation: "Evime hoş geldiniz!", pronunciation: "byan-vö-nü şe mua" },
        { text: "Fais comme chez toi.", translation: "Evinde gibi hisset.", pronunciation: "fe kom şe tua" },
        { text: "Où est la salle de bain?", translation: "Banyo nerede?", pronunciation: "u e la sal dö ben" },
        { text: "Au premier étage.", translation: "Birinci katta.", pronunciation: "o prö-mye e-taj" },
        { text: "Je cherche un appartement.", translation: "Daire arıyorum.", pronunciation: "jö şerş ön a-par-tö-man" },
        { text: "Le loyer est cher.", translation: "Kira pahalı.", pronunciation: "lö lua-ye e şer" },
        { text: "C'est une grande maison.", translation: "Büyük bir ev.", pronunciation: "se tün grand me-zon" },
        { text: "Le jardin est magnifique.", translation: "Bahçe harika.", pronunciation: "lö jar-den e ma-nyi-fik" },
        { text: "Ouvre la fenêtre.", translation: "Pencereyi aç.", pronunciation: "uvr la fö-netr" },
        { text: "Ferme la porte.", translation: "Kapıyı kapat.", pronunciation: "ferm la port" }
    ]
};

// ===== ÜNİTE 310: SINIFTA =====
const unit310Speaking: UnitSpeaking = {
    unitId: 310, title: "Sınıf Pratiği",
    exercises: [
        { text: "Je vais à l'école.", translation: "Okula gidiyorum.", pronunciation: "jö ve a le-kol" },
        { text: "Ouvre ton livre.", translation: "Kitabını aç.", pronunciation: "uvr ton livr" },
        { text: "Écris dans ton cahier.", translation: "Defterine yaz.", pronunciation: "e-kri dan ton ka-ye" },
        { text: "Le professeur explique.", translation: "Öğretmen açıklıyor.", pronunciation: "lö pro-fe-sör eks-plik" },
        { text: "Lève la main.", translation: "Elini kaldır.", pronunciation: "lev la men" },
        { text: "Je n'ai pas compris.", translation: "Anlamadım.", pronunciation: "jö ne pa kom-pri" },
        { text: "Pouvez-vous répéter?", translation: "Tekrar eder misiniz?", pronunciation: "pu-ve vu re-pe-te" },
        { text: "Le cours commence.", translation: "Ders başlıyor.", pronunciation: "lö kur ko-mans" },
        { text: "Où est le tableau?", translation: "Tahta nerede?", pronunciation: "u e lö ta-blo" },
        { text: "Range tes affaires.", translation: "Eşyalarını topla.", pronunciation: "ranj te za-fer" }
    ]
};

// ===== ÜNİTE 311: VÜCUDUMUZ =====
const unit311Speaking: UnitSpeaking = {
    unitId: 311, title: "Vücut Pratiği",
    exercises: [
        { text: "J'ai mal à la tête.", translation: "Başım ağrıyor.", pronunciation: "je mal a la tet" },
        { text: "J'ai mal au ventre.", translation: "Karnım ağrıyor.", pronunciation: "je mal o vantr" },
        { text: "J'ai mal au dos.", translation: "Sırtım ağrıyor.", pronunciation: "je mal o do" },
        { text: "Ouvre la bouche.", translation: "Ağzını aç.", pronunciation: "uvr la buş" },
        { text: "Lève la main.", translation: "Elini kaldır.", pronunciation: "lev la men" },
        { text: "Ferme les yeux.", translation: "Gözlerini kapat.", pronunciation: "ferm le zyö" },
        { text: "Je suis fort.", translation: "Güçlüyüm.", pronunciation: "jö süi for" },
        { text: "J'ai les cheveux bruns.", translation: "Saçlarım kahverengi.", pronunciation: "je le şö-vö brön" },
        { text: "Elle a les yeux bleus.", translation: "Mavi gözleri var.", pronunciation: "el a le zyö blö" },
        { text: "Il est grand.", translation: "O uzun boylu.", pronunciation: "il e gran" }
    ]
};

// ===== ÜNİTE 312: GİYSİLER =====
const unit312Speaking: UnitSpeaking = {
    unitId: 312, title: "Giysi Pratiği",
    exercises: [
        { text: "Qu'est-ce que tu portes?", translation: "Ne giyiyorsun?", pronunciation: "kes kö tü port" },
        { text: "Je porte un pantalon noir.", translation: "Siyah pantolon giyiyorum.", pronunciation: "jö port ön pan-ta-lon nuar" },
        { text: "Cette robe est belle.", translation: "Bu elbise güzel.", pronunciation: "set rob e bel" },
        { text: "J'aime cette chemise.", translation: "Bu gömleği seviyorum.", pronunciation: "jem set şö-miz" },
        { text: "Mets ton manteau.", translation: "Montunu giy.", pronunciation: "me ton man-to" },
        { text: "Enlève tes chaussures.", translation: "Ayakkabılarını çıkar.", pronunciation: "an-lev te şo-sür" },
        { text: "Vous l'avez en taille M?", translation: "M bedeniniz var mı?", pronunciation: "vu la-ve an tay em" },
        { text: "Je peux l'essayer?", translation: "Deneyebilir miyim?", pronunciation: "jö pö le-se-ye" },
        { text: "C'est trop grand.", translation: "Çok büyük.", pronunciation: "se tro gran" },
        { text: "C'est trop petit.", translation: "Çok küçük.", pronunciation: "se tro pö-ti" }
    ]
};

// ===== ÜNİTE 313: YİYECEKLER =====
const unit313Speaking: UnitSpeaking = {
    unitId: 313, title: "Yiyecekler Pratiği",
    exercises: [
        { text: "J'ai faim.", translation: "Açım.", pronunciation: "je fen" },
        { text: "Qu'est-ce qu'on mange?", translation: "Ne yiyeceğiz?", pronunciation: "kes kon manj" },
        { text: "Le petit-déjeuner est prêt.", translation: "Kahvaltı hazır.", pronunciation: "lö pö-ti de-jö-ne e pre" },
        { text: "Bon appétit!", translation: "Afiyet olsun!", pronunciation: "bon a-pe-ti" },
        { text: "C'est délicieux!", translation: "Çok lezzetli!", pronunciation: "se de-li-syö" },
        { text: "Je suis végétarien.", translation: "Vejetaryenim.", pronunciation: "jö süi ve-je-ta-ryen" },
        { text: "Encore un peu?", translation: "Biraz daha?", pronunciation: "an-kor ön pö" },
        { text: "Non merci, je suis rassasié.", translation: "Teşekkürler, doydum.", pronunciation: "non mer-si jö süi ra-sa-zye" },
        { text: "J'aime les légumes.", translation: "Sebzeleri severim.", pronunciation: "jem le le-güm" },
        { text: "Le pain est frais.", translation: "Ekmek taze.", pronunciation: "lö pan e fre" }
    ]
};

// ===== ÜNİTE 314: İÇECEKLER =====
const unit314Speaking: UnitSpeaking = {
    unitId: 314, title: "İçecekler Pratiği",
    exercises: [
        { text: "J'ai soif.", translation: "Susadım.", pronunciation: "je suaf" },
        { text: "Un café, s'il vous plaît.", translation: "Bir kahve, lütfen.", pronunciation: "ön ka-fe sil vu ple" },
        { text: "Avec ou sans sucre?", translation: "Şekerli mi şekersiz mi?", pronunciation: "a-vek u san sükr" },
        { text: "Je voudrais un thé.", translation: "Bir çay istiyorum.", pronunciation: "jö vu-dre ön te" },
        { text: "Un verre d'eau, s'il vous plaît.", translation: "Bir bardak su, lütfen.", pronunciation: "ön ver do sil vu ple" },
        { text: "L'addition, s'il vous plaît.", translation: "Hesap, lütfen.", pronunciation: "la-di-syon sil vu ple" },
        { text: "Santé!", translation: "Şerefe!", pronunciation: "san-te" },
        { text: "C'est ma tournée.", translation: "Bu benden.", pronunciation: "se ma tur-ne" },
        { text: "Qu'est-ce que vous buvez?", translation: "Ne içiyorsunuz?", pronunciation: "kes kö vu bü-ve" },
        { text: "Avec des glaçons.", translation: "Buzlu.", pronunciation: "a-vek de gla-son" }
    ]
};

const unit315Speaking: UnitSpeaking = {
    unitId: 315, title: "Saat Pratiği",
    exercises: [
        { text: "Quelle heure est-il?", translation: "Saat kaç?", pronunciation: "kel ör e-til" },
        { text: "Il est trois heures.", translation: "Saat üç.", pronunciation: "il e trua zör" },
        { text: "Il est midi.", translation: "Öğlen oldu.", pronunciation: "il e mi-di" },
        { text: "Il est minuit.", translation: "Gece yarısı.", pronunciation: "il e mi-nui" },
        { text: "Il est huit heures et demie.", translation: "Saat sekiz buçuk.", pronunciation: "il e üit ör e dö-mi" },
        { text: "À quelle heure?", translation: "Saat kaçta?", pronunciation: "a kel ör" },
        { text: "Je suis en avance.", translation: "Erken geldim.", pronunciation: "jö süi an a-vans" },
        { text: "Je suis en retard.", translation: "Geç kaldım.", pronunciation: "jö süi an rö-tar" },
        { text: "Dépêche-toi!", translation: "Acele et!", pronunciation: "de-peş tua" },
        { text: "Il est tôt.", translation: "Erken.", pronunciation: "il e to" }
    ]
};

const unit316Speaking: UnitSpeaking = {
    unitId: 316, title: "Günlük Rutin Pratiği",
    exercises: [
        { text: "Je me réveille à 7 heures.", translation: "7'de uyanıyorum.", pronunciation: "jö mö re-vey a set ör" },
        { text: "Je prends le petit-déjeuner.", translation: "Kahvaltı yapıyorum.", pronunciation: "jö pran lö pö-ti de-jö-ne" },
        { text: "Je vais au travail.", translation: "İşe gidiyorum.", pronunciation: "jö ve o tra-vay" },
        { text: "Je déjeune à midi.", translation: "Öğlen yemek yiyorum.", pronunciation: "jö de-jön a mi-di" },
        { text: "Je rentre à la maison.", translation: "Eve dönüyorum.", pronunciation: "jö rantr a la me-zon" },
        { text: "Je fais les courses.", translation: "Alışveriş yapıyorum.", pronunciation: "jö fe le kurs" },
        { text: "Je cuisine le dîner.", translation: "Akşam yemeği yapıyorum.", pronunciation: "jö küi-zin lö di-ne" },
        { text: "Je regarde la télévision.", translation: "Televizyon izliyorum.", pronunciation: "jö rö-gard la te-le-vi-zyon" },
        { text: "Je me couche à 23 heures.", translation: "23'te yatıyorum.", pronunciation: "jö mö kuş a vent-trua zör" },
        { text: "Je dors bien.", translation: "İyi uyuyorum.", pronunciation: "jö dor byan" }
    ]
};

const unit317Speaking: UnitSpeaking = {
    unitId: 317, title: "Hobiler Pratiği",
    exercises: [
        { text: "Qu'est-ce que tu aimes faire?", translation: "Ne yapmayı seversin?", pronunciation: "kes kö tü em fer" },
        { text: "J'aime lire.", translation: "Okumayı severim.", pronunciation: "jem lir" },
        { text: "Je fais du sport.", translation: "Spor yapıyorum.", pronunciation: "jö fe dü spor" },
        { text: "J'aime voyager.", translation: "Seyahat etmeyi severim.", pronunciation: "jem vua-ya-je" },
        { text: "Je joue de la guitare.", translation: "Gitar çalıyorum.", pronunciation: "jö ju dö la gi-tar" },
        { text: "J'adore la musique.", translation: "Müziği çok severim.", pronunciation: "ja-dor la mü-zik" },
        { text: "Je fais de la natation.", translation: "Yüzüyorum.", pronunciation: "jö fe dö la na-ta-syon" },
        { text: "Je joue aux jeux vidéo.", translation: "Video oyunu oynuyorum.", pronunciation: "jö ju o jö vi-de-o" },
        { text: "C'est passionnant!", translation: "Çok heyecan verici!", pronunciation: "se pa-syo-nan" },
        { text: "Je m'amuse beaucoup.", translation: "Çok eğleniyorum.", pronunciation: "jö ma-müz bo-ku" }
    ]
};

const unit318Speaking: UnitSpeaking = {
    unitId: 318, title: "Hava Durumu Pratiği",
    exercises: [
        { text: "Quel temps fait-il?", translation: "Hava nasıl?", pronunciation: "kel tan fe-til" },
        { text: "Il fait beau.", translation: "Hava güzel.", pronunciation: "il fe bo" },
        { text: "Il pleut.", translation: "Yağmur yağıyor.", pronunciation: "il plö" },
        { text: "Il neige.", translation: "Kar yağıyor.", pronunciation: "il nej" },
        { text: "Il fait chaud.", translation: "Hava sıcak.", pronunciation: "il fe şo" },
        { text: "Il fait froid.", translation: "Hava soğuk.", pronunciation: "il fe frua" },
        { text: "Le soleil brille.", translation: "Güneş parlıyor.", pronunciation: "lö so-ley briy" },
        { text: "Il y a du vent.", translation: "Rüzgar var.", pronunciation: "il ya dü van" },
        { text: "Prends ton parapluie.", translation: "Şmsiyeni al.", pronunciation: "pran ton pa-ra-plüi" },
        { text: "Il fait 25 degrés.", translation: "25 derece var.", pronunciation: "il fe vent-senk dö-gre" }
    ]
};

const unit319Speaking: UnitSpeaking = {
    unitId: 319, title: "Duygular Pratiği",
    exercises: [
        { text: "Je suis heureux.", translation: "Mutluyum.", pronunciation: "jö süi ö-rö" },
        { text: "Je suis triste.", translation: "Üzgünüm.", pronunciation: "jö süi trist" },
        { text: "Je suis fatigué.", translation: "Yorgunum.", pronunciation: "jö süi fa-ti-ge" },
        { text: "Je suis en colère.", translation: "Kızgınım.", pronunciation: "jö süi an ko-ler" },
        { text: "J'ai peur.", translation: "Korkuyorum.", pronunciation: "je pör" },
        { text: "Je suis surpris.", translation: "Şaşırdım.", pronunciation: "jö süi sür-pri" },
        { text: "Je suis excité.", translation: "Heyecanlıyım.", pronunciation: "jö süi ek-si-te" },
        { text: "Je m'ennuie.", translation: "Sıkılıyorum.", pronunciation: "jö man-nüi" },
        { text: "Je suis stressé.", translation: "Stresliyim.", pronunciation: "jö süi stre-se" },
        { text: "Je me sens bien.", translation: "İyi hissediyorum.", pronunciation: "jö mö san byan" }
    ]
};

const unit320Speaking: UnitSpeaking = {
    unitId: 320, title: "Şehirde Yönler Pratiği",
    exercises: [
        { text: "Excusez-moi, où est la gare?", translation: "Affedersiniz, istasyon nerede?", pronunciation: "eks-kü-ze mua u e la gar" },
        { text: "C'est tout droit.", translation: "Düz gidin.", pronunciation: "se tu drua" },
        { text: "Tournez à droite.", translation: "Sağa dönün.", pronunciation: "tur-ne a druat" },
        { text: "Tournez à gauche.", translation: "Sola dönün.", pronunciation: "tur-ne a goş" },
        { text: "C'est près d'ici.", translation: "Buraya yakın.", pronunciation: "se pre di-si" },
        { text: "C'est loin?", translation: "Uzak mı?", pronunciation: "se luen" },
        { text: "Je cherche une pharmacie.", translation: "Eczane arıyorum.", pronunciation: "jö şerş ün far-ma-si" },
        { text: "Il y a une banque près d'ici?", translation: "Yakında banka var mı?", pronunciation: "il ya ün bank pre di-si" },
        { text: "Je me suis perdu.", translation: "Kayboldum.", pronunciation: "jö mö süi per-dü" },
        { text: "Pouvez-vous m'aider?", translation: "Bana yardım edebilir misiniz?", pronunciation: "pu-ve vu me-de" }
    ]
};

// ===== ÜNİTE 321-330 =====
const unit321Speaking: UnitSpeaking = {
    unitId: 321, title: "Ulaşım Pratiği",
    exercises: [
        { text: "Un billet aller-retour.", translation: "Gidiş-dönüş bileti.", pronunciation: "ön bi-ye a-le rö-tur" },
        { text: "Le train part à quelle heure?", translation: "Tren saat kaçta kalkıyor?", pronunciation: "lö tren par a kel ör" },
        { text: "Je voudrais réserver une place.", translation: "Bir yer ayırtmak istiyorum.", pronunciation: "jö vu-dre re-zer-ve ün plas" },
        { text: "De quel quai part le train?", translation: "Tren hangi perondan kalkıyor?", pronunciation: "dö kel ke par lö tren" },
        { text: "Où est l'arrêt de bus?", translation: "Otobüs durağı nerede?", pronunciation: "u e la-re dö büs" },
        { text: "Je suis en retard.", translation: "Geç kaldım.", pronunciation: "jö süi an rö-tar" },
        { text: "Il y a des embouteillages.", translation: "Trafik var.", pronunciation: "il ya de zan-bu-te-yaj" },
        { text: "Bon voyage!", translation: "İyi yolculuklar!", pronunciation: "bon vua-yaj" },
        { text: "Je descends ici.", translation: "Burada iniyorum.", pronunciation: "jö de-san di-si" },
        { text: "C'est direct?", translation: "Aktarmasız mı?", pronunciation: "se di-rekt" }
    ]
};

const unit322Speaking: UnitSpeaking = {
    unitId: 322, title: "Mevsimler Pratiği",
    exercises: [
        { text: "C'est le printemps.", translation: "Bahar geldi.", pronunciation: "se lö pren-tan" },
        { text: "En été, il fait chaud.", translation: "Yazın hava sıcak.", pronunciation: "an e-te il fe şo" },
        { text: "Les feuilles tombent en automne.", translation: "Sonbaharda yapraklar dökülür.", pronunciation: "le föy tomb an o-ton" },
        { text: "Il neige en hiver.", translation: "Kışın kar yağar.", pronunciation: "il nej an i-ver" },
        { text: "J'aime le printemps.", translation: "Baharı severim.", pronunciation: "jem lö pren-tan" },
        { text: "L'été est ma saison préférée.", translation: "Yaz en sevdiğim mevsim.", pronunciation: "le-te e ma se-zon pre-fe-re" },
        { text: "Il fait froid en hiver.", translation: "Kışın soğuk olur.", pronunciation: "il fe frua an i-ver" },
        { text: "Les fleurs poussent au printemps.", translation: "Baharda çiçekler açar.", pronunciation: "le flör pus o pren-tan" },
        { text: "Je vais à la plage en été.", translation: "Yazın plaja giderim.", pronunciation: "jö ve a la plaj an e-te" },
        { text: "L'automne est beau.", translation: "Sonbahar güzel.", pronunciation: "lo-ton e bo" }
    ]
};

const unit323Speaking: UnitSpeaking = {
    unitId: 323, title: "Doğum Günü Pratiği",
    exercises: [
        { text: "Joyeux anniversaire!", translation: "Mutlu yıllar!", pronunciation: "jua-yö a-ni-ver-ser" },
        { text: "C'est ton anniversaire?", translation: "Bugün doğum günün mü?", pronunciation: "se ton a-ni-ver-ser" },
        { text: "Tu as quel âge?", translation: "Kaç yaşındasın?", pronunciation: "tü a kel aj" },
        { text: "J'ai 25 ans.", translation: "25 yaşındayım.", pronunciation: "je vent-senk an" },
        { text: "Voici ton cadeau.", translation: "İşte hediyem.", pronunciation: "vua-si ton ka-do" },
        { text: "Merci beaucoup!", translation: "Çok teşekkürler!", pronunciation: "mer-si bo-ku" },
        { text: "On fait une fête!", translation: "Parti yapalım!", pronunciation: "on fe ün fet" },
        { text: "Souffle les bougies!", translation: "Mumlara üfle!", pronunciation: "sufl le bu-ji" },
        { text: "Le gâteau est délicieux.", translation: "Pasta çok lezzetli.", pronunciation: "lö ga-to e de-li-syö" },
        { text: "Fais un vœu!", translation: "Dilek tut!", pronunciation: "fe ön vö" }
    ]
};

const unit324Speaking: UnitSpeaking = {
    unitId: 324, title: "Tatil Pratiği",
    exercises: [
        { text: "Je pars en vacances!", translation: "Tatile gidiyorum!", pronunciation: "jö par an va-kans" },
        { text: "J'ai réservé un hôtel.", translation: "Otel ayırttım.", pronunciation: "je re-zer-ve ön o-tel" },
        { text: "Je vais à la plage.", translation: "Plaja gidiyorum.", pronunciation: "jö ve a la plaj" },
        { text: "La mer est belle.", translation: "Deniz güzel.", pronunciation: "la mer e bel" },
        { text: "Je fais du tourisme.", translation: "Turizm yapıyorum.", pronunciation: "jö fe dü tu-rizm" },
        { text: "Je visite les monuments.", translation: "Anıtları ziyaret ediyorum.", pronunciation: "jö vi-zit le mo-nü-man" },
        { text: "J'ai pris l'avion.", translation: "Uçağa bindim.", pronunciation: "je pri la-vyon" },
        { text: "Bonnes vacances!", translation: "İyi tatiller!", pronunciation: "bon va-kans" },
        { text: "Je suis en vacances.", translation: "Tatildeyim.", pronunciation: "jö süi an va-kans" },
        { text: "Je rentre demain.", translation: "Yarın dönüyorum.", pronunciation: "jö rantr dö-men" }
    ]
};

const unit325Speaking: UnitSpeaking = {
    unitId: 325, title: "Alışveriş Pratiği",
    exercises: [
        { text: "Combien ça coûte?", translation: "Bu ne kadar?", pronunciation: "kom-byan sa kut" },
        { text: "C'est trop cher.", translation: "Çok pahalı.", pronunciation: "se tro şer" },
        { text: "Vous avez une réduction?", translation: "İndiriminiz var mı?", pronunciation: "vu za-ve ün re-dük-syon" },
        { text: "Je peux payer par carte?", translation: "Kartla ödeyebilir miyim?", pronunciation: "jö pö pe-ye par kart" },
        { text: "Un sac, s'il vous plaît.", translation: "Bir poşet, lütfen.", pronunciation: "ön sak sil vu ple" },
        { text: "Gardez la monnaie.", translation: "Üstü kalsın.", pronunciation: "gar-de la mo-ne" },
        { text: "Je regarde seulement.", translation: "Sadece bakıyorum.", pronunciation: "jö rö-gard söl-man" },
        { text: "Je vais réfléchir.", translation: "Düşüneceğim.", pronunciation: "jö ve re-fle-şir" },
        { text: "Je prends celui-ci.", translation: "Bunu alıyorum.", pronunciation: "jö pran sö-lui-si" },
        { text: "Où est la caisse?", translation: "Kasa nerede?", pronunciation: "u e la kes" }
    ]
};

const unit326Speaking: UnitSpeaking = {
    unitId: 326, title: "Restoran Pratiği",
    exercises: [
        { text: "Une table pour deux, s'il vous plaît.", translation: "İki kişilik masa, lütfen.", pronunciation: "ün tabl pur dö sil vu ple" },
        { text: "Qu'est-ce que vous recommandez?", translation: "Ne önerirsiniz?", pronunciation: "kes kö vu rö-ko-man-de" },
        { text: "Je voudrais le menu.", translation: "Menüyü istiyorum.", pronunciation: "jö vu-dre lö mö-nü" },
        { text: "L'addition, s'il vous plaît.", translation: "Hesap, lütfen.", pronunciation: "la-di-syon sil vu ple" },
        { text: "C'était délicieux!", translation: "Çok lezzetliydi!", pronunciation: "se-te de-li-syö" },
        { text: "Je suis allergique aux noix.", translation: "Fındığa alerjim var.", pronunciation: "jö süi a-ler-jik o nua" },
        { text: "Un verre de vin rouge.", translation: "Bir kadeh kırmızı şarap.", pronunciation: "ön ver dö ven ruj" },
        { text: "Je voudrais le plat du jour.", translation: "Günün menüsünü istiyorum.", pronunciation: "jö vu-dre lö pla dü jur" },
        { text: "Pouvez-vous apporter du pain?", translation: "Ekmek getirir misiniz?", pronunciation: "pu-ve vu a-por-te dü pen" },
        { text: "C'est à emporter.", translation: "Paket olsun.", pronunciation: "se ta an-por-te" }
    ]
};

const unit327Speaking: UnitSpeaking = {
    unitId: 327, title: "Sıfat Pratiği",
    exercises: [
        { text: "C'est grand ou petit?", translation: "Büyük mü küçük mü?", pronunciation: "se gran u pö-ti" },
        { text: "Cette maison est vieille.", translation: "Bu ev eski.", pronunciation: "set me-zon e vyey" },
        { text: "La voiture est rapide.", translation: "Araba hızlı.", pronunciation: "la vua-tür e ra-pid" },
        { text: "C'est très intéressant.", translation: "Çok ilginç.", pronunciation: "se tre an-te-re-san" },
        { text: "Elle est belle.", translation: "O güzel.", pronunciation: "el e bel" },
        { text: "Il est jeune.", translation: "O genç.", pronunciation: "il e jön" },
        { text: "C'est facile ou difficile?", translation: "Kolay mı zor mu?", pronunciation: "se fa-sil u di-fi-sil" },
        { text: "La rue est large.", translation: "Sokak geniş.", pronunciation: "la rü e larj" },
        { text: "Le film est long.", translation: "Film uzun.", pronunciation: "lö film e long" },
        { text: "C'est nouveau.", translation: "Bu yeni.", pronunciation: "se nu-vo" }
    ]
};

const unit328Speaking: UnitSpeaking = {
    unitId: 328, title: "Hayvanlar Pratiği",
    exercises: [
        { text: "J'ai un chien.", translation: "Köpeğim var.", pronunciation: "je ön şyen" },
        { text: "Le chat dort.", translation: "Kedi uyuyor.", pronunciation: "lö şa dor" },
        { text: "L'oiseau chante.", translation: "Kuş şarkı söylüyor.", pronunciation: "lua-zo şant" },
        { text: "J'aime les animaux.", translation: "Hayvanları severim.", pronunciation: "jem le za-ni-mo" },
        { text: "Le chien aboie.", translation: "Köpek havlıyor.", pronunciation: "lö şyen a-bua" },
        { text: "Le chat miaule.", translation: "Kedi miyavlıyor.", pronunciation: "lö şa myol" },
        { text: "C'est un animal domestique.", translation: "Bu evcil hayvan.", pronunciation: "se tön a-ni-mal do-mes-tik" },
        { text: "Le lion est sauvage.", translation: "Aslan vahşi.", pronunciation: "lö li-on e so-vaj" },
        { text: "Je monte à cheval.", translation: "Ata biniyorum.", pronunciation: "jö mont a şö-val" },
        { text: "L'éléphant est grand.", translation: "Fil büyük.", pronunciation: "le-le-fan e gran" }
    ]
};

const unit329Speaking: UnitSpeaking = {
    unitId: 329, title: "Teknoloji Pratiği",
    exercises: [
        { text: "Mon téléphone est cassé.", translation: "Telefonum bozuldu.", pronunciation: "mon te-le-fon e ka-se" },
        { text: "J'ai un ordinateur.", translation: "Bilgisayarım var.", pronunciation: "je ön or-di-na-tör" },
        { text: "Le wifi ne marche pas.", translation: "Wifi çalışmıyor.", pronunciation: "lö wi-fi nö marş pa" },
        { text: "Je télécharge une application.", translation: "Uygulama indiriyorum.", pronunciation: "jö te-le-şarj ün a-pli-ka-syon" },
        { text: "Envoie-moi un message.", translation: "Bana mesaj at.", pronunciation: "an-vua mua ön me-saj" },
        { text: "Je suis sur Internet.", translation: "İnternetteyim.", pronunciation: "jö süi sür en-ter-net" },
        { text: "Où est le chargeur?", translation: "Şarj aleti nerede?", pronunciation: "u e lö şar-jör" },
        { text: "La batterie est vide.", translation: "Batarya bitti.", pronunciation: "la ba-tri e vid" },
        { text: "Fais une photo!", translation: "Fotoğraf çek!", pronunciation: "fe ün fo-to" },
        { text: "Je regarde des vidéos.", translation: "Video izliyorum.", pronunciation: "jö rö-gard de vi-de-o" }
    ]
};

const unit330Speaking: UnitSpeaking = {
    unitId: 330, title: "Kapanış Pratiği",
    exercises: [
        { text: "Félicitations!", translation: "Tebrikler!", pronunciation: "fe-li-si-ta-syon" },
        { text: "Tu as bien travaillé!", translation: "İyi çalıştın!", pronunciation: "tü a byan tra-va-ye" },
        { text: "Je comprends le français.", translation: "Fransızca anlıyorum.", pronunciation: "jö kom-pran lö fran-se" },
        { text: "Je parle un peu français.", translation: "Biraz Fransızca konuşuyorum.", pronunciation: "jö parl ön pö fran-se" },
        { text: "J'ai beaucoup appris!", translation: "Çok şey öğrendim!", pronunciation: "je bo-ku a-pri" },
        { text: "Merci pour tout!", translation: "Her şey için teşekkürler!", pronunciation: "mer-si pur tu" },
        { text: "Continue comme ça!", translation: "Böyle devam et!", pronunciation: "kon-ti-nü kom sa" },
        { text: "Bonne chance!", translation: "Bol şans!", pronunciation: "bon şans" },
        { text: "À bientôt!", translation: "Yakında görüşürüz!", pronunciation: "a byan-to" },
        { text: "Au revoir et bonne continuation!", translation: "Hoşça kal ve başarılar!", pronunciation: "o rö-vuar e bon kon-ti-nü-a-syon" }
    ]
};

// Tüm konuşma içeriklerini içeren obje
const allSpeakings: { [key: number]: UnitSpeaking } = {
    301: unit301Speaking, 302: unit302Speaking, 303: unit303Speaking, 304: unit304Speaking, 305: unit305Speaking,
    306: unit306Speaking, 307: unit307Speaking, 308: unit308Speaking, 309: unit309Speaking, 310: unit310Speaking,
    311: unit311Speaking, 312: unit312Speaking, 313: unit313Speaking, 314: unit314Speaking, 315: unit315Speaking,
    316: unit316Speaking, 317: unit317Speaking, 318: unit318Speaking, 319: unit319Speaking, 320: unit320Speaking,
    321: unit321Speaking, 322: unit322Speaking, 323: unit323Speaking, 324: unit324Speaking, 325: unit325Speaking,
    326: unit326Speaking, 327: unit327Speaking, 328: unit328Speaking, 329: unit329Speaking, 330: unit330Speaking
};

export function getFrenchA1SpeakingForUnit(unitId: number): UnitSpeaking | null {
    return allSpeakings[unitId] || null;
}
