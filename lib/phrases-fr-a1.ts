// LinguaFlow Kalıplar Veritabanı - Fransızca A1 (301-330)
// Her ünite için ~15 kalıp - Curriculum.ts ile senkronize

export interface FrenchPhrase {
    text: string;
    meaning: string;
    pronunciation: string;
}

export interface FrenchA1UnitPhrases {
    unitId: number;
    title: string;
    phrases: FrenchPhrase[];
}

// ===== ÜNİTE 301: SELAMLAŞMA VE TANIŞMA =====
const unit301Phrases: FrenchA1UnitPhrases = {
    unitId: 301, title: "Selamlaşma ve Tanışma",
    phrases: [
        { text: "Bonjour, comment allez-vous?", meaning: "Merhaba, nasılsınız?", pronunciation: "bon-jur ko-man-ta-le-vu" },
        { text: "Je vais bien, merci.", meaning: "İyiyim, teşekkürler.", pronunciation: "jö-ve-byan mer-si" },
        { text: "Comment vous appelez-vous?", meaning: "Adınız ne?", pronunciation: "ko-man-vu-za-pö-le-vu" },
        { text: "Je m'appelle Marie.", meaning: "Benim adım Marie.", pronunciation: "jö-ma-pel ma-ri" },
        { text: "Enchanté(e) de vous rencontrer.", meaning: "Tanıştığımıza memnun oldum.", pronunciation: "an-şan-te dö-vu-ran-kontr" },
        { text: "D'où venez-vous?", meaning: "Nereden geliyorsunuz?", pronunciation: "du-vö-ne-vu" },
        { text: "Je viens de Turquie.", meaning: "Türkiye'den geliyorum.", pronunciation: "jö-vyan dö tür-ki" },
        { text: "Ravi(e) de faire votre connaissance.", meaning: "Sizinle tanışmaktan mutluluk duydum.", pronunciation: "ra-vi dö-fer votr ko-ne-sans" },
        { text: "À bientôt!", meaning: "Yakında görüşürüz!", pronunciation: "a-byan-to" },
        { text: "À demain!", meaning: "Yarın görüşürüz!", pronunciation: "a-dö-men" },
        { text: "Bonne journée!", meaning: "İyi günler!", pronunciation: "bon-jur-ne" },
        { text: "Bonne soirée!", meaning: "İyi akşamlar!", pronunciation: "bon-sua-re" },
        { text: "Comment ça va?", meaning: "Nasılsın?", pronunciation: "ko-man-sa-va" },
        { text: "Ça va très bien.", meaning: "Çok iyiyim.", pronunciation: "sa-va-tre-byan" },
        { text: "Et vous?", meaning: "Ya siz?", pronunciation: "e-vu" }
    ]
};

// ===== ÜNİTE 302: ALFABE VE SESLER =====
const unit302Phrases: FrenchA1UnitPhrases = {
    unitId: 302, title: "Alfabe ve Sesler",
    phrases: [
        { text: "Comment ça s'écrit?", meaning: "Bu nasıl yazılır?", pronunciation: "ko-man-sa-se-kri" },
        { text: "Pouvez-vous épeler?", meaning: "Heceleyebilir misiniz?", pronunciation: "pu-ve-vu-e-pö-le" },
        { text: "Comment prononce-t-on ce mot?", meaning: "Bu kelime nasıl okunur?", pronunciation: "ko-man-pro-nons-ton-sö-mo" },
        { text: "Je ne comprends pas.", meaning: "Anlamıyorum.", pronunciation: "jö-nö-kom-pran-pa" },
        { text: "Pouvez-vous répéter?", meaning: "Tekrar edebilir misiniz?", pronunciation: "pu-ve-vu-re-pe-te" },
        { text: "Plus lentement, s'il vous plaît.", meaning: "Daha yavaş, lütfen.", pronunciation: "plü-lant-man sil-vu-ple" },
        { text: "Comment dit-on... en français?", meaning: "Fransızca'da ... nasıl denir?", pronunciation: "ko-man-di-ton an-fran-se" },
        { text: "Qu'est-ce que ça veut dire?", meaning: "Bu ne demek?", pronunciation: "kes-kö-sa-vö-dir" },
        { text: "C'est correct?", meaning: "Doğru mu?", pronunciation: "se-ko-rekt" },
        { text: "Je ne sais pas.", meaning: "Bilmiyorum.", pronunciation: "jö-nö-se-pa" },
        { text: "Excusez-moi, je n'ai pas compris.", meaning: "Affedersiniz, anlamadım.", pronunciation: "eks-kü-ze-mua jö-ne-pa-kom-pri" },
        { text: "Ça s'écrit avec un accent.", meaning: "Aksanlı yazılır.", pronunciation: "sa-se-kri-a-vek-ön-ak-san" },
        { text: "Vous pouvez l'écrire?", meaning: "Yazabilir misiniz?", pronunciation: "vu-pu-ve-le-krir" },
        { text: "Comment ça se prononce?", meaning: "Nasıl telaffuz edilir?", pronunciation: "ko-man-sa-sö-pro-nons" },
        { text: "J'apprends le français.", meaning: "Fransızca öğreniyorum.", pronunciation: "ja-pran-lö-fran-se" }
    ]
};

// ===== ÜNİTE 303: SAYILAR =====
const unit303Phrases: FrenchA1UnitPhrases = {
    unitId: 303, title: "Sayılar (0-20)",
    phrases: [
        { text: "Quel est votre numéro de téléphone?", meaning: "Telefon numaranız nedir?", pronunciation: "kel-e-votr-nü-me-ro-dö-te-le-fon" },
        { text: "Combien ça coûte?", meaning: "Bu ne kadar?", pronunciation: "kom-byan-sa-kut" },
        { text: "J'ai vingt ans.", meaning: "Yirmi yaşındayım.", pronunciation: "je-ven-an" },
        { text: "Quel âge avez-vous?", meaning: "Kaç yaşındasınız?", pronunciation: "kel-aj-a-ve-vu" },
        { text: "C'est dix euros.", meaning: "On euro.", pronunciation: "se-diz-ö-ro" },
        { text: "Un, deux, trois...", meaning: "Bir, iki, üç...", pronunciation: "ön dö trua" },
        { text: "Nous sommes cinq personnes.", meaning: "Beş kişiyiz.", pronunciation: "nu-som-senk-per-son" },
        { text: "Il y a huit étudiants.", meaning: "Sekiz öğrenci var.", pronunciation: "il-ya-üit-e-tü-dyan" },
        { text: "La moitié de vingt, c'est dix.", meaning: "Yirminin yarısı ondur.", pronunciation: "la-mua-tye-dö-ven-se-dis" },
        { text: "Donnez-moi deux, s'il vous plaît.", meaning: "Bana iki tane verin, lütfen.", pronunciation: "do-ne-mua-dö sil-vu-ple" },
        { text: "C'est le numéro un.", meaning: "Bir numara bu.", pronunciation: "se-lö-nü-me-ro-ön" },
        { text: "Encore une fois.", meaning: "Bir kez daha.", pronunciation: "an-kor-ün-fua" },
        { text: "Première, deuxième, troisième...", meaning: "Birinci, ikinci, üçüncü...", pronunciation: "prö-myer dö-zyem trua-zyem" },
        { text: "Ça fait combien?", meaning: "Toplam ne kadar?", pronunciation: "sa-fe-kom-byan" },
        { text: "J'en voudrais trois.", meaning: "Üç tane istiyorum.", pronunciation: "jan-vu-dre-trua" }
    ]
};

// ===== ÜNİTE 304: RENKLER =====
const unit304Phrases: FrenchA1UnitPhrases = {
    unitId: 304, title: "Renkler",
    phrases: [
        { text: "Quelle est ta couleur préférée?", meaning: "En sevdiğin renk hangisi?", pronunciation: "kel-e-ta-ku-lör-pre-fe-re" },
        { text: "J'aime le bleu.", meaning: "Maviyi severim.", pronunciation: "jem-lö-blö" },
        { text: "De quelle couleur est-ce?", meaning: "Bu hangi renk?", pronunciation: "dö-kel-ku-lör-es" },
        { text: "C'est rouge.", meaning: "Kırmızı.", pronunciation: "se-ruj" },
        { text: "Le ciel est bleu.", meaning: "Gökyüzü mavi.", pronunciation: "lö-syel-e-blö" },
        { text: "L'herbe est verte.", meaning: "Çimen yeşil.", pronunciation: "lerb-e-vert" },
        { text: "Vous l'avez en noir?", meaning: "Siyahı var mı?", pronunciation: "vu-la-ve-an-nuar" },
        { text: "Je préfère le blanc.", meaning: "Beyazı tercih ediyorum.", pronunciation: "jö-pre-fer-lö-blan" },
        { text: "C'est une couleur vive.", meaning: "Canlı bir renk.", pronunciation: "se-tün-ku-lör-viv" },
        { text: "Les couleurs de l'arc-en-ciel.", meaning: "Gökkuşağı renkleri.", pronunciation: "le-ku-lör-dö-lark-an-syel" },
        { text: "C'est trop foncé.", meaning: "Çok koyu.", pronunciation: "se-tro-fon-se" },
        { text: "C'est trop clair.", meaning: "Çok açık.", pronunciation: "se-tro-kler" },
        { text: "Ma voiture est grise.", meaning: "Arabam gri.", pronunciation: "ma-vua-tür-e-griz" },
        { text: "J'adore les couleurs pastel.", meaning: "Pastel renkleri seviyorum.", pronunciation: "ja-dor-le-ku-lör-pas-tel" },
        { text: "Ces couleurs vont bien ensemble.", meaning: "Bu renkler birbirine uyuyor.", pronunciation: "se-ku-lör-von-byan-an-sambl" }
    ]
};

// ===== ÜNİTE 305: AİLE =====
const unit305Phrases: FrenchA1UnitPhrases = {
    unitId: 305, title: "Aile Bireyleri",
    phrases: [
        { text: "Voici ma famille.", meaning: "İşte ailem.", pronunciation: "vua-si-ma-fa-miy" },
        { text: "J'ai deux frères et une sœur.", meaning: "İki erkek kardeşim ve bir kız kardeşim var.", pronunciation: "je-dö-frer-e-ün-sör" },
        { text: "Comment s'appelle ta mère?", meaning: "Annenin adı ne?", pronunciation: "ko-man-sa-pel-ta-mer" },
        { text: "Mon père s'appelle Jean.", meaning: "Babamın adı Jean.", pronunciation: "mon-per-sa-pel-jan" },
        { text: "Ma grand-mère habite avec nous.", meaning: "Büyükannem bizimle yaşıyor.", pronunciation: "ma-gran-mer-a-bit-a-vek-nu" },
        { text: "Je suis enfant unique.", meaning: "Tek çocuğum.", pronunciation: "jö-süi-an-fan-ü-nik" },
        { text: "Nous sommes une famille nombreuse.", meaning: "Kalabalık bir aileyiz.", pronunciation: "nu-som-ün-fa-miy-nom-bröz" },
        { text: "Mes parents sont divorcés.", meaning: "Ailem boşanmış.", pronunciation: "me-pa-ran-son-di-vor-se" },
        { text: "J'ai un neveu et une nièce.", meaning: "Bir yeğenim ve bir yeğenim var.", pronunciation: "je-ön-nö-vö-e-ün-nyes" },
        { text: "Mon oncle habite à Lyon.", meaning: "Amcam Lyon'da yaşıyor.", pronunciation: "mon-onkl-a-bit-a-lyon" },
        { text: "C'est mon beau-frère.", meaning: "Bu eniştim.", pronunciation: "se-mon-bo-frer" },
        { text: "Es-tu marié(e)?", meaning: "Evli misin?", pronunciation: "e-tü-ma-ri-e" },
        { text: "J'ai deux enfants.", meaning: "İki çocuğum var.", pronunciation: "je-dö-zan-fan" },
        { text: "Nous nous entendons bien.", meaning: "İyi anlaşıyoruz.", pronunciation: "nu-nu-zan-tan-don-byan" },
        { text: "C'est une photo de famille.", meaning: "Bu bir aile fotoğrafı.", pronunciation: "se-tün-fo-to-dö-fa-miy" }
    ]
};

// ===== ÜNİTE 306: GÜNLER VE AYLAR =====
const unit306Phrases: FrenchA1UnitPhrases = {
    unitId: 306, title: "Günler ve Aylar",
    phrases: [
        { text: "Quel jour sommes-nous?", meaning: "Bugün günlerden ne?", pronunciation: "kel-jur-som-nu" },
        { text: "Nous sommes lundi.", meaning: "Bugün pazartesi.", pronunciation: "nu-som-lan-di" },
        { text: "Quelle est la date aujourd'hui?", meaning: "Bugün tarih ne?", pronunciation: "kel-e-la-dat-o-jur-düi" },
        { text: "C'est le 15 janvier.", meaning: "15 Ocak.", pronunciation: "se-lö-kenz-jan-vye" },
        { text: "Mon anniversaire est en mai.", meaning: "Doğum günüm mayıs'ta.", pronunciation: "mon-a-ni-ver-ser-e-tan-me" },
        { text: "La semaine prochaine.", meaning: "Gelecek hafta.", pronunciation: "la-sö-men-pro-şen" },
        { text: "Le mois dernier.", meaning: "Geçen ay.", pronunciation: "lö-mua-der-nye" },
        { text: "Chaque jour.", meaning: "Her gün.", pronunciation: "şak-jur" },
        { text: "Tous les lundis.", meaning: "Her pazartesi.", pronunciation: "tu-le-lan-di" },
        { text: "Le week-end prochain.", meaning: "Gelecek hafta sonu.", pronunciation: "lö-wik-end-pro-şen" },
        { text: "En été, il fait chaud.", meaning: "Yazın sıcak olur.", pronunciation: "an-e-te il-fe-şo" },
        { text: "L'hiver est froid.", meaning: "Kış soğuktur.", pronunciation: "li-ver-e-frua" },
        { text: "Au printemps.", meaning: "İlkbaharda.", pronunciation: "o-pren-tan" },
        { text: "C'est bientôt Noël.", meaning: "Yakında Noel.", pronunciation: "se-byan-to-no-el" },
        { text: "Joyeux anniversaire!", meaning: "Mutlu yıllar!", pronunciation: "jua-yö-za-ni-ver-ser" }
    ]
};

// ===== ÜNİTE 307: ÜLKELER VE MİLLETLER =====
const unit307Phrases: FrenchA1UnitPhrases = {
    unitId: 307, title: "Ülkeler ve Milletler",
    phrases: [
        { text: "De quel pays venez-vous?", meaning: "Hangi ülkedensiniz?", pronunciation: "dö-kel-pe-i-vö-ne-vu" },
        { text: "Je viens de Turquie.", meaning: "Türkiye'den geliyorum.", pronunciation: "jö-vyan-dö-tür-ki" },
        { text: "Je suis turc/turque.", meaning: "Ben Türküm.", pronunciation: "jö-süi-türk" },
        { text: "Quelle est votre nationalité?", meaning: "Milliyetiniz ne?", pronunciation: "kel-e-votr-na-si-o-na-li-te" },
        { text: "J'habite en France.", meaning: "Fransa'da yaşıyorum.", pronunciation: "ja-bit-an-frans" },
        { text: "Paris est la capitale.", meaning: "Paris başkenttir.", pronunciation: "pa-ri-e-la-ka-pi-tal" },
        { text: "Quelles langues parlez-vous?", meaning: "Hangi dilleri konuşuyorsunuz?", pronunciation: "kel-lang-par-le-vu" },
        { text: "Je parle français et anglais.", meaning: "Fransızca ve İngilizce konuşuyorum.", pronunciation: "jö-parl-fran-se-e-ang-le" },
        { text: "C'est mon premier voyage en France.", meaning: "Fransa'ya ilk seyahatim.", pronunciation: "se-mon-prö-mye-vua-yaj-an-frans" },
        { text: "J'adore ce pays.", meaning: "Bu ülkeyi çok seviyorum.", pronunciation: "ja-dor-sö-pe-i" },
        { text: "La culture est très différente.", meaning: "Kültür çok farklı.", pronunciation: "la-kül-tür-e-tre-di-fe-rant" },
        { text: "Je suis étranger ici.", meaning: "Burada yabancıyım.", pronunciation: "jö-süi-e-tran-je-i-si" },
        { text: "J'apprends le français depuis un an.", meaning: "Bir yıldır Fransızca öğreniyorum.", pronunciation: "ja-pran-lö-fran-se-dö-püi-ön-an" },
        { text: "C'est un beau pays.", meaning: "Güzel bir ülke.", pronunciation: "se-tön-bo-pe-i" },
        { text: "Je voudrais visiter la France.", meaning: "Fransa'yı ziyaret etmek istiyorum.", pronunciation: "jö-vu-dre-vi-zi-te-la-frans" }
    ]
};

// ===== ÜNİTE 308: MESLEKLER =====
const unit308Phrases: FrenchA1UnitPhrases = {
    unitId: 308, title: "Meslekler",
    phrases: [
        { text: "Quelle est votre profession?", meaning: "Mesleğiniz nedir?", pronunciation: "kel-e-votr-pro-fe-syon" },
        { text: "Je suis médecin.", meaning: "Ben doktorum.", pronunciation: "jö-süi-med-sen" },
        { text: "Qu'est-ce que vous faites dans la vie?", meaning: "Meslek olarak ne yapıyorsunuz?", pronunciation: "kes-kö-vu-fet-dan-la-vi" },
        { text: "Je travaille comme professeur.", meaning: "Öğretmen olarak çalışıyorum.", pronunciation: "jö-tra-vay-kom-pro-fe-sör" },
        { text: "Je suis étudiant(e).", meaning: "Öğrenciyim.", pronunciation: "jö-süi-e-tü-dyan" },
        { text: "Je cherche du travail.", meaning: "İş arıyorum.", pronunciation: "jö-şerş-dü-tra-vay" },
        { text: "J'ai un entretien d'embauche.", meaning: "İş görüşmem var.", pronunciation: "je-ön-an-trö-tyan-dam-boş" },
        { text: "Je travaille à temps partiel.", meaning: "Yarı zamanlı çalışıyorum.", pronunciation: "jö-tra-vay-a-tan-par-syel" },
        { text: "Mon travail est intéressant.", meaning: "İşim ilginç.", pronunciation: "mon-tra-vay-e-tan-te-re-san" },
        { text: "Je suis en vacances.", meaning: "Tatildeyim.", pronunciation: "jö-süi-an-va-kans" },
        { text: "Mon patron est gentil.", meaning: "Patronum iyi biri.", pronunciation: "mon-pa-tron-e-jan-ti" },
        { text: "Je prends ma retraite.", meaning: "Emekli oluyorum.", pronunciation: "jö-pran-ma-rö-tret" },
        { text: "Mes collègues sont sympas.", meaning: "Meslektaşlarım sempatik.", pronunciation: "me-ko-leg-son-sen-pa" },
        { text: "Le salaire est bon.", meaning: "Maaş iyi.", pronunciation: "lö-sa-ler-e-bon" },
        { text: "Je fais des heures supplémentaires.", meaning: "Fazla mesai yapıyorum.", pronunciation: "jö-fe-de-zör-sü-ple-man-ter" }
    ]
};

// ===== ÜNİTE 309: YİYECEKLER =====
const unit309Phrases: FrenchA1UnitPhrases = {
    unitId: 309, title: "Yiyecekler",
    phrases: [
        { text: "J'ai faim.", meaning: "Açım.", pronunciation: "je-fen" },
        { text: "Qu'est-ce qu'on mange?", meaning: "Ne yiyeceğiz?", pronunciation: "kes-kon-manj" },
        { text: "Le petit-déjeuner est prêt.", meaning: "Kahvaltı hazır.", pronunciation: "lö-pö-ti-de-jö-ne-e-pre" },
        { text: "Bon appétit!", meaning: "Afiyet olsun!", pronunciation: "bon-a-pe-ti" },
        { text: "C'est délicieux!", meaning: "Çok lezzetli!", pronunciation: "se-de-li-syö" },
        { text: "Je suis végétarien(ne).", meaning: "Vejetaryenim.", pronunciation: "jö-süi-ve-je-ta-ryen" },
        { text: "Je suis allergique aux noix.", meaning: "Fındığa alerjim var.", pronunciation: "jö-süi-a-ler-jik-o-nua" },
        { text: "Encore un peu?", meaning: "Biraz daha?", pronunciation: "an-kor-ön-pö" },
        { text: "Non merci, je suis rassasié(e).", meaning: "Hayır teşekkürler, doydum.", pronunciation: "non-mer-si jö-süi-ra-sa-zye" },
        { text: "Qu'est-ce que vous recommandez?", meaning: "Ne önerirsiniz?", pronunciation: "kes-kö-vu-rö-ko-man-de" },
        { text: "Je voudrais le plat du jour.", meaning: "Günün menüsünü istiyorum.", pronunciation: "jö-vu-dre-lö-pla-dü-jur" },
        { text: "Pouvez-vous me passer le sel?", meaning: "Tuzu uzatır mısınız?", pronunciation: "pu-ve-vu-mö-pa-se-lö-sel" },
        { text: "C'est trop salé.", meaning: "Çok tuzlu.", pronunciation: "se-tro-sa-le" },
        { text: "C'est épicé?", meaning: "Acılı mı?", pronunciation: "se-te-pi-se" },
        { text: "À emporter.", meaning: "Paket için.", pronunciation: "a-am-por-te" }
    ]
};

// ===== ÜNİTE 310: İÇECEKLER =====
const unit310Phrases: FrenchA1UnitPhrases = {
    unitId: 310, title: "İçecekler",
    phrases: [
        { text: "J'ai soif.", meaning: "Susadım.", pronunciation: "je-suaf" },
        { text: "Un café, s'il vous plaît.", meaning: "Bir kahve, lütfen.", pronunciation: "ön-ka-fe sil-vu-ple" },
        { text: "Avec ou sans sucre?", meaning: "Şekerli mi şekersiz mi?", pronunciation: "a-vek-u-san-sükr" },
        { text: "Je voudrais un thé.", meaning: "Bir çay istiyorum.", pronunciation: "jö-vu-dre-ön-te" },
        { text: "Avec du lait, s'il vous plaît.", meaning: "Sütlü, lütfen.", pronunciation: "a-vek-dü-le sil-vu-ple" },
        { text: "Est-ce que vous avez du jus d'orange?", meaning: "Portakal suyunuz var mı?", pronunciation: "es-kö-vu-za-ve-dü-jü-do-ranj" },
        { text: "Un verre d'eau, s'il vous plaît.", meaning: "Bir bardak su, lütfen.", pronunciation: "ön-ver-do sil-vu-ple" },
        { text: "L'addition, s'il vous plaît.", meaning: "Hesap, lütfen.", pronunciation: "la-di-syon sil-vu-ple" },
        { text: "Santé!", meaning: "Şerefe!", pronunciation: "san-te" },
        { text: "C'est ma tournée.", meaning: "Bu benden.", pronunciation: "se-ma-tur-ne" },
        { text: "Qu'est-ce que vous buvez?", meaning: "Ne içiyorsunuz?", pronunciation: "kes-kö-vu-bü-ve" },
        { text: "C'est trop chaud.", meaning: "Çok sıcak.", pronunciation: "se-tro-şo" },
        { text: "Avec des glaçons.", meaning: "Buzlu.", pronunciation: "a-vek-de-gla-son" },
        { text: "Un café décaféiné.", meaning: "Kafeinsiz kahve.", pronunciation: "ön-ka-fe-de-ka-fe-i-ne" },
        { text: "Je voudrais payer.", meaning: "Ödemek istiyorum.", pronunciation: "jö-vu-dre-pe-ye" }
    ]
};

// ===== ÜNİTE 311-330 için basitleştirilmiş yapı =====
function generatePhrases(unitId: number): FrenchA1UnitPhrases {
    const phraseData: { [key: number]: { title: string, phrases: FrenchPhrase[] } } = {
        311: {
            title: "Ev ve Odalar", phrases: [
                { text: "Bienvenue chez moi!", meaning: "Evime hoş geldiniz!", pronunciation: "byan-vö-nü-şe-mua" },
                { text: "Fais comme chez toi.", meaning: "Evinde gibi hisset.", pronunciation: "fe-kom-şe-tua" },
                { text: "Où est la salle de bain?", meaning: "Banyo nerede?", pronunciation: "u-e-la-sal-dö-ben" },
                { text: "Au premier étage.", meaning: "Birinci katta.", pronunciation: "o-prö-mye-e-taj" },
                { text: "Je cherche un appartement.", meaning: "Daire arıyorum.", pronunciation: "jö-şerş-ön-a-par-tö-man" },
                { text: "Le loyer est cher.", meaning: "Kira pahalı.", pronunciation: "lö-lua-ye-e-şer" },
                { text: "C'est une grande maison.", meaning: "Büyük bir ev.", pronunciation: "se-tün-grand-me-zon" },
                { text: "J'habite au rez-de-chaussée.", meaning: "Zemin katta oturuyorum.", pronunciation: "ja-bit-o-re-dö-şo-se" },
                { text: "Le jardin est magnifique.", meaning: "Bahçe harika.", pronunciation: "lö-jar-den-e-ma-nyi-fik" },
                { text: "Ouvre la fenêtre.", meaning: "Pencereyi aç.", pronunciation: "uvr-la-fö-netr" },
                { text: "Ferme la porte.", meaning: "Kapıyı kapat.", pronunciation: "ferm-la-port" },
                { text: "Je vais déménager.", meaning: "Taşınacağım.", pronunciation: "jö-ve-de-me-na-je" },
                { text: "C'est bien situé.", meaning: "İyi konumda.", pronunciation: "se-byan-si-tü-e" },
                { text: "Il y a un balcon.", meaning: "Bir balkon var.", pronunciation: "il-ya-ön-bal-kon" },
                { text: "La cuisine est équipée.", meaning: "Mutfak donanımlı.", pronunciation: "la-küi-zin-e-te-ki-pe" }
            ]
        },
        312: {
            title: "Mobilya ve Eşyalar", phrases: [
                { text: "Range ta chambre!", meaning: "Odanı topla!", pronunciation: "ranj-ta-şambr" },
                { text: "Assieds-toi sur le canapé.", meaning: "Kanepede otur.", pronunciation: "a-sye-tua-sür-lö-ka-na-pe" },
                { text: "Allume la lumière.", meaning: "Işığı aç.", pronunciation: "a-lüm-la-lü-myer" },
                { text: "Éteins la télévision.", meaning: "Televizyonu kapat.", pronunciation: "e-ten-la-te-le-vi-zyon" },
                { text: "Le lit est confortable.", meaning: "Yatak rahat.", pronunciation: "lö-li-e-kon-for-tabl" },
                { text: "Il y a une armoire.", meaning: "Bir dolap var.", pronunciation: "il-ya-ün-ar-muar" },
                { text: "La table est en bois.", meaning: "Masa ahşap.", pronunciation: "la-tabl-e-tan-bua" },
                { text: "Je dois acheter un bureau.", meaning: "Bir masa almam lazım.", pronunciation: "jö-dua-aş-te-ön-bü-ro" },
                { text: "Mets ça dans le tiroir.", meaning: "Bunu çekmeceye koy.", pronunciation: "me-sa-dan-lö-ti-ruar" },
                { text: "Le miroir est cassé.", meaning: "Ayna kırık.", pronunciation: "lö-mi-ruar-e-ka-se" },
                { text: "Où est la télécommande?", meaning: "Kumanda nerede?", pronunciation: "u-e-la-te-le-ko-mand" },
                { text: "Le frigo est vide.", meaning: "Buzdolabı boş.", pronunciation: "lö-fri-go-e-vid" },
                { text: "Passe l'aspirateur.", meaning: "Süpürge çek.", pronunciation: "pas-las-pi-ra-tör" },
                { text: "Fais la vaisselle.", meaning: "Bulaşıkları yıka.", pronunciation: "fe-la-ve-sel" },
                { text: "Change les draps.", meaning: "Çarşafları değiştir.", pronunciation: "şanj-le-dra" }
            ]
        },
        313: {
            title: "Şehir ve Yerler", phrases: [
                { text: "Excusez-moi, où est la gare?", meaning: "Affedersiniz, istasyon nerede?", pronunciation: "eks-kü-ze-mua u-e-la-gar" },
                { text: "C'est tout droit.", meaning: "Düz gidin.", pronunciation: "se-tu-drua" },
                { text: "Tournez à droite.", meaning: "Sağa dönün.", pronunciation: "tur-ne-a-druat" },
                { text: "Tournez à gauche.", meaning: "Sola dönün.", pronunciation: "tur-ne-a-goş" },
                { text: "C'est près d'ici.", meaning: "Buraya yakın.", pronunciation: "se-pre-di-si" },
                { text: "C'est loin d'ici.", meaning: "Buradan uzak.", pronunciation: "se-luen-di-si" },
                { text: "Je cherche une pharmacie.", meaning: "Eczane arıyorum.", pronunciation: "jö-şerş-ün-far-ma-si" },
                { text: "Il y a une banque près d'ici?", meaning: "Yakınlarda banka var mı?", pronunciation: "il-ya-ün-bank-pre-di-si" },
                { text: "C'est à cinq minutes à pied.", meaning: "Yürüyerek beş dakika.", pronunciation: "se-ta-senk-mi-nüt-a-pye" },
                { text: "Prenez la première à droite.", meaning: "İlk sağdan dönün.", pronunciation: "prö-ne-la-prö-myer-a-druat" },
                { text: "Continuez tout droit.", meaning: "Düz devam edin.", pronunciation: "kon-ti-nü-e-tu-drua" },
                { text: "C'est en face de l'église.", meaning: "Kilisenin karşısında.", pronunciation: "se-tan-fas-dö-le-gliz" },
                { text: "Le musée est fermé.", meaning: "Müze kapalı.", pronunciation: "lö-mü-ze-e-fer-me" },
                { text: "À quelle heure ouvre la poste?", meaning: "Postane saat kaçta açılıyor?", pronunciation: "a-kel-ör-uvr-la-post" },
                { text: "Je me suis perdu(e).", meaning: "Kayboldum.", pronunciation: "jö-mö-süi-per-dü" }
            ]
        },
        314: {
            title: "Ulaşım", phrases: [
                { text: "Un billet aller-retour.", meaning: "Gidiş-dönüş bileti.", pronunciation: "ön-bi-ye-a-le-rö-tur" },
                { text: "Le train part à quelle heure?", meaning: "Tren saat kaçta kalkıyor?", pronunciation: "lö-tren-par-a-kel-ör" },
                { text: "Je voudrais réserver une place.", meaning: "Bir yer ayırtmak istiyorum.", pronunciation: "jö-vu-dre-re-zer-ve-ün-plas" },
                { text: "De quel quai part le train?", meaning: "Tren hangi perondan kalkıyor?", pronunciation: "dö-kel-ke-par-lö-tren" },
                { text: "Le métro est en grève.", meaning: "Metro grevde.", pronunciation: "lö-me-tro-e-tan-grev" },
                { text: "Où est l'arrêt de bus?", meaning: "Otobüs durağı nerede?", pronunciation: "u-e-la-re-dö-büs" },
                { text: "Comment aller à l'aéroport?", meaning: "Havaalanına nasıl gidilir?", pronunciation: "ko-man-a-le-a-la-e-ro-por" },
                { text: "Je suis en retard.", meaning: "Geç kaldım.", pronunciation: "jö-süi-an-rö-tar" },
                { text: "Il y a des embouteillages.", meaning: "Trafik var.", pronunciation: "il-ya-de-zan-bu-te-yaj" },
                { text: "Bon voyage!", meaning: "İyi yolculuklar!", pronunciation: "bon-vua-yaj" },
                { text: "Attachez votre ceinture.", meaning: "Kemeri bağlayın.", pronunciation: "a-ta-şe-votr-sen-tür" },
                { text: "Prochain arrêt...", meaning: "Bir sonraki durak...", pronunciation: "pro-şen-a-re" },
                { text: "Je descends ici.", meaning: "Burada iniyorum.", pronunciation: "jö-de-san-di-si" },
                { text: "C'est direct?", meaning: "Aktarmasız mı?", pronunciation: "se-di-rekt" },
                { text: "Je préfère prendre le taxi.", meaning: "Taksiyi tercih ediyorum.", pronunciation: "jö-pre-fer-prandr-lö-tak-si" }
            ]
        },
        315: {
            title: "Saat ve Zaman", phrases: [
                { text: "Quelle heure est-il?", meaning: "Saat kaç?", pronunciation: "kel-ör-e-til" },
                { text: "Il est huit heures.", meaning: "Saat sekiz.", pronunciation: "il-e-üit-ör" },
                { text: "Il est midi.", meaning: "Saat on iki (öğlen).", pronunciation: "il-e-mi-di" },
                { text: "Il est minuit.", meaning: "Gece yarısı.", pronunciation: "il-e-mi-nüi" },
                { text: "À quelle heure?", meaning: "Saat kaçta?", pronunciation: "a-kel-ör" },
                { text: "À neuf heures et demie.", meaning: "Dokuz buçukta.", pronunciation: "a-növ-ör-e-dö-mi" },
                { text: "Dans dix minutes.", meaning: "On dakika içinde.", pronunciation: "dan-di-mi-nüt" },
                { text: "Je suis en avance.", meaning: "Erken geldim.", pronunciation: "jö-süi-an-a-vans" },
                { text: "Je suis en retard.", meaning: "Geç kaldım.", pronunciation: "jö-süi-an-rö-tar" },
                { text: "Il est tôt.", meaning: "Erken.", pronunciation: "il-e-to" },
                { text: "Il est tard.", meaning: "Geç oldu.", pronunciation: "il-e-tar" },
                { text: "Rendez-vous à quelle heure?", meaning: "Randevu saat kaçta?", pronunciation: "ran-de-vu-a-kel-ör" },
                { text: "Dépêche-toi!", meaning: "Acele et!", pronunciation: "de-peş-tua" },
                { text: "Prends ton temps.", meaning: "Acele etme.", pronunciation: "pran-ton-tan" },
                { text: "C'est l'heure de partir.", meaning: "Gitme vakti.", pronunciation: "se-lör-dö-par-tir" }
            ]
        },
        316: {
            title: "Hava Durumu", phrases: [
                { text: "Quel temps fait-il?", meaning: "Hava nasıl?", pronunciation: "kel-tan-fe-til" },
                { text: "Il fait beau.", meaning: "Hava güzel.", pronunciation: "il-fe-bo" },
                { text: "Il fait mauvais.", meaning: "Hava kötü.", pronunciation: "il-fe-mo-ve" },
                { text: "Il pleut.", meaning: "Yağmur yağıyor.", pronunciation: "il-plö" },
                { text: "Il neige.", meaning: "Kar yağıyor.", pronunciation: "il-nej" },
                { text: "Il fait chaud.", meaning: "Hava sıcak.", pronunciation: "il-fe-şo" },
                { text: "Il fait froid.", meaning: "Hava soğuk.", pronunciation: "il-fe-frua" },
                { text: "Il y a du soleil.", meaning: "Güneşli.", pronunciation: "il-ya-dü-so-ley" },
                { text: "Il y a du vent.", meaning: "Rüzgarlı.", pronunciation: "il-ya-dü-van" },
                { text: "Le ciel est nuageux.", meaning: "Gökyüzü bulutlu.", pronunciation: "lö-syel-e-nüa-jö" },
                { text: "Prends un parapluie.", meaning: "Şemsiye al.", pronunciation: "pran-ön-pa-ra-plüi" },
                { text: "Mets un manteau.", meaning: "Mont giy.", pronunciation: "me-ön-man-to" },
                { text: "Il va pleuvoir.", meaning: "Yağmur yağacak.", pronunciation: "il-va-plö-vuar" },
                { text: "La météo dit qu'il fera beau.", meaning: "Hava durumu güzel olacak diyor.", pronunciation: "la-me-te-o-di-kil-fö-ra-bo" },
                { text: "Quelle température fait-il?", meaning: "Sıcaklık kaç derece?", pronunciation: "kel-tan-pe-ra-tür-fe-til" }
            ]
        },
        317: {
            title: "Günlük Aktiviteler", phrases: [
                { text: "Je me réveille à sept heures.", meaning: "Yedide uyanıyorum.", pronunciation: "jö-mö-re-vey-a-set-ör" },
                { text: "Je prends une douche.", meaning: "Duş alıyorum.", pronunciation: "jö-pran-ün-duş" },
                { text: "Je prends le petit-déjeuner.", meaning: "Kahvaltı yapıyorum.", pronunciation: "jö-pran-lö-pö-ti-de-jö-ne" },
                { text: "Je vais au travail.", meaning: "İşe gidiyorum.", pronunciation: "jö-ve-o-tra-vay" },
                { text: "Je déjeune à midi.", meaning: "Öğlen yemek yiyorum.", pronunciation: "jö-de-jön-a-mi-di" },
                { text: "Je rentre à la maison.", meaning: "Eve dönüyorum.", pronunciation: "jö-rantr-a-la-me-zon" },
                { text: "Je fais les courses.", meaning: "Alışveriş yapıyorum.", pronunciation: "jö-fe-le-kurs" },
                { text: "Je prépare le dîner.", meaning: "Akşam yemeği hazırlıyorum.", pronunciation: "jö-pre-par-lö-di-ne" },
                { text: "Je regarde la télé.", meaning: "TV izliyorum.", pronunciation: "jö-rö-gard-la-te-le" },
                { text: "Je me couche tôt.", meaning: "Erken yatıyorum.", pronunciation: "jö-mö-kuş-to" },
                { text: "Je fais du sport.", meaning: "Spor yapıyorum.", pronunciation: "jö-fe-dü-spor" },
                { text: "Je lis un livre.", meaning: "Kitap okuyorum.", pronunciation: "jö-li-ön-livr" },
                { text: "Je fais le ménage.", meaning: "Ev işi yapıyorum.", pronunciation: "jö-fe-lö-me-naj" },
                { text: "Je me repose.", meaning: "Dinleniyorum.", pronunciation: "jö-mö-rö-poz" },
                { text: "Je vais me coucher.", meaning: "Yatmaya gidiyorum.", pronunciation: "jö-ve-mö-ku-şe" }
            ]
        },
        318: {
            title: "Hobiler", phrases: [
                { text: "Quels sont tes hobbies?", meaning: "Hobilerin neler?", pronunciation: "kel-son-te-o-bi" },
                { text: "J'aime lire.", meaning: "Okumayı severim.", pronunciation: "jem-lir" },
                { text: "Je fais de la musique.", meaning: "Müzik yapıyorum.", pronunciation: "jö-fe-dö-la-mü-zik" },
                { text: "Je joue de la guitare.", meaning: "Gitar çalıyorum.", pronunciation: "jö-ju-dö-la-gi-tar" },
                { text: "J'adore cuisiner.", meaning: "Yemek yapmayı çok severim.", pronunciation: "ja-dor-küi-zi-ne" },
                { text: "Je fais de la peinture.", meaning: "Resim yapıyorum.", pronunciation: "jö-fe-dö-la-pen-tür" },
                { text: "Je collectionne les timbres.", meaning: "Pul koleksiyonu yapıyorum.", pronunciation: "jö-ko-lek-syon-le-tanbr" },
                { text: "J'aime voyager.", meaning: "Seyahat etmeyi severim.", pronunciation: "jem-vua-ya-je" },
                { text: "Je fais du jardinage.", meaning: "Bahçecilik yapıyorum.", pronunciation: "jö-fe-dü-jar-di-naj" },
                { text: "Je joue aux jeux vidéo.", meaning: "Video oyunu oynuyorum.", pronunciation: "jö-ju-o-jö-vi-de-o" },
                { text: "Je fais de la photo.", meaning: "Fotoğrafçılık yapıyorum.", pronunciation: "jö-fe-dö-la-fo-to" },
                { text: "J'aime danser.", meaning: "Dans etmeyi severim.", pronunciation: "jem-dan-se" },
                { text: "Je fais du vélo.", meaning: "Bisiklet sürüyorum.", pronunciation: "jö-fe-dü-ve-lo" },
                { text: "C'est mon passe-temps préféré.", meaning: "En sevdiğim hobi.", pronunciation: "se-mon-pas-tan-pre-fe-re" },
                { text: "Je n'ai pas le temps.", meaning: "Zamanım yok.", pronunciation: "jö-ne-pa-lö-tan" }
            ]
        },
        319: {
            title: "Duygular", phrases: [
                { text: "Je suis content(e).", meaning: "Mutluyum.", pronunciation: "jö-süi-kon-tan(t)" },
                { text: "Je suis triste.", meaning: "Üzgünüm.", pronunciation: "jö-süi-trist" },
                { text: "Je suis en colère.", meaning: "Kızgınım.", pronunciation: "jö-süi-an-ko-ler" },
                { text: "J'ai peur.", meaning: "Korkuyorum.", pronunciation: "je-pör" },
                { text: "Je suis fatigué(e).", meaning: "Yorgunum.", pronunciation: "jö-süi-fa-ti-ge" },
                { text: "Je suis stressé(e).", meaning: "Stressliyim.", pronunciation: "jö-süi-stre-se" },
                { text: "Je suis inquiet/inquiète.", meaning: "Endişeliyim.", pronunciation: "jö-süi-an-kye(t)" },
                { text: "Je suis surpris(e).", meaning: "Şaşkınım.", pronunciation: "jö-süi-sür-pri(z)" },
                { text: "Je suis déçu(e).", meaning: "Hayal kırıklığına uğradım.", pronunciation: "jö-süi-de-sü" },
                { text: "Je suis excité(e).", meaning: "Heyecanlıyım.", pronunciation: "jö-süi-ek-si-te" },
                { text: "Ça ne va pas.", meaning: "İyi değilim.", pronunciation: "sa-nö-va-pa" },
                { text: "Je me sens bien.", meaning: "Kendimi iyi hissediyorum.", pronunciation: "jö-mö-san-byan" },
                { text: "Qu'est-ce qui ne va pas?", meaning: "Sorun ne?", pronunciation: "kes-ki-nö-va-pa" },
                { text: "Ne t'inquiète pas.", meaning: "Endişelenme.", pronunciation: "nö-tan-kyet-pa" },
                { text: "Je suis soulagé(e).", meaning: "Rahatladım.", pronunciation: "jö-süi-su-la-je" }
            ]
        },
        320: {
            title: "Vücut Bölümleri", phrases: [
                { text: "J'ai mal à la tête.", meaning: "Başım ağrıyor.", pronunciation: "je-mal-a-la-tet" },
                { text: "J'ai mal au ventre.", meaning: "Karnım ağrıyor.", pronunciation: "je-mal-o-vantr" },
                { text: "J'ai mal aux dents.", meaning: "Dişim ağrıyor.", pronunciation: "je-mal-o-dan" },
                { text: "J'ai mal au dos.", meaning: "Sırtım ağrıyor.", pronunciation: "je-mal-o-do" },
                { text: "J'ai mal à la gorge.", meaning: "Boğazım ağrıyor.", pronunciation: "je-mal-a-la-gorj" },
                { text: "Levez la main.", meaning: "Elinizi kaldırın.", pronunciation: "lö-ve-la-men" },
                { text: "Fermez les yeux.", meaning: "Gözlerinizi kapatın.", pronunciation: "fer-me-le-zyö" },
                { text: "Ouvrez la bouche.", meaning: "Ağzınızı açın.", pronunciation: "uv-re-la-buş" },
                { text: "Tendez le bras.", meaning: "Kolunuzu uzatın.", pronunciation: "tan-de-lö-bra" },
                { text: "Je me suis cassé le bras.", meaning: "Kolumu kırdım.", pronunciation: "jö-mö-süi-ka-se-lö-bra" },
                { text: "Je me suis coupé le doigt.", meaning: "Parmağımı kestim.", pronunciation: "jö-mö-süi-ku-pe-lö-dua" },
                { text: "J'ai le nez bouché.", meaning: "Burnum tıkalı.", pronunciation: "je-lö-ne-bu-şe" },
                { text: "J'ai les yeux rouges.", meaning: "Gözlerim kırmızı.", pronunciation: "je-le-zyö-ruj" },
                { text: "Il a les cheveux blonds.", meaning: "Sarı saçlı.", pronunciation: "il-a-le-şö-vö-blon" },
                { text: "Elle a les yeux bleus.", meaning: "Mavi gözlü.", pronunciation: "el-a-le-zyö-blö" }
            ]
        },
        321: {
            title: "Ulaşım", phrases: [
                { text: "Le bus arrive dans cinq minutes.", meaning: "Otobüs beş dakikaya geliyor.", pronunciation: "lö-büs-a-riv-dan-senk-mi-nüt" },
                { text: "Je prends le métro tous les jours.", meaning: "Her gün metro alıyorum.", pronunciation: "jö-pran-lö-me-tro-tu-le-jur" },
                { text: "Où est la station de taxi?", meaning: "Taksi durağı nerede?", pronunciation: "u-e-la-sta-syon-dö-tak-si" },
                { text: "Le tramway est gratuit.", meaning: "Tramvay ücretsiz.", pronunciation: "lö-tram-ve-e-gra-tüi" },
                { text: "Tu as ton abonnement?", meaning: "Abonman kartın var mı?", pronunciation: "tü-a-ton-a-bon-man" },
                { text: "Le vélo est écologique.", meaning: "Bisiklet çevre dostu.", pronunciation: "lö-ve-lo-e-te-ko-lo-jik" },
                { text: "Je vais à pied.", meaning: "Yürüyerek gidiyorum.", pronunciation: "jö-ve-a-pye" },
                { text: "Ma voiture est en panne.", meaning: "Arabam bozuldu.", pronunciation: "ma-vua-tür-e-tan-pan" },
                { text: "Fais le plein d'essence.", meaning: "Benzin doldur.", pronunciation: "fe-lö-plen-de-sans" },
                { text: "Je dois faire réviser ma voiture.", meaning: "Arabamı bakıma göndermem lazım.", pronunciation: "jö-dua-fer-re-vi-ze-ma-vua-tür" },
                { text: "Où est le parking?", meaning: "Otopark nerede?", pronunciation: "u-e-lö-par-king" },
                { text: "Il y a un péage.", meaning: "Ücretli yol var.", pronunciation: "il-ya-ön-pe-aj" },
                { text: "Attention au feu rouge!", meaning: "Kırmızı ışığa dikkat!", pronunciation: "a-tan-syon-o-fö-ruj" },
                { text: "Passez au feu vert.", meaning: "Yeşil ışıkta geçin.", pronunciation: "pa-se-o-fö-ver" },
                { text: "La circulation est dense.", meaning: "Trafik yoğun.", pronunciation: "la-sir-kü-la-syon-e-dans" }
            ]
        },
        322: {
            title: "Mevsimler", phrases: [
                { text: "Quelle saison préférez-vous?", meaning: "Hangi mevsimi tercih ediyorsunuz?", pronunciation: "kel-se-zon-pre-fe-re-vu" },
                { text: "J'aime le printemps.", meaning: "İlkbaharı severim.", pronunciation: "jem-lö-pren-tan" },
                { text: "En été, il fait très chaud.", meaning: "Yazın çok sıcak olur.", pronunciation: "an-e-te-il-fe-tre-şo" },
                { text: "L'automne est magnifique.", meaning: "Sonbahar muhteşem.", pronunciation: "lo-ton-e-ma-nyi-fik" },
                { text: "En hiver, je fais du ski.", meaning: "Kışın kayak yaparım.", pronunciation: "an-i-ver-jö-fe-dü-ski" },
                { text: "Les feuilles tombent en automne.", meaning: "Sonbaharda yapraklar düşer.", pronunciation: "le-föy-tonb-an-o-ton" },
                { text: "Il neige beaucoup en montagne.", meaning: "Dağda çok kar yağar.", pronunciation: "il-nej-bo-ku-an-mon-ta-nyö" },
                { text: "Les fleurs poussent au printemps.", meaning: "İlkbaharda çiçekler açar.", pronunciation: "le-flör-pus-o-pren-tan" },
                { text: "On va à la plage en été.", meaning: "Yazın plaja gideriz.", pronunciation: "on-va-a-la-plaj-an-e-te" },
                { text: "Les jours sont courts en hiver.", meaning: "Kışın günler kısa.", pronunciation: "le-jur-son-kur-an-i-ver" },
                { text: "C'est la saison des pluies.", meaning: "Yağmur mevsimi.", pronunciation: "se-la-se-zon-de-plüi" },
                { text: "Le soleil se couche tôt.", meaning: "Güneş erken batıyor.", pronunciation: "lö-so-ley-sö-kuş-to" },
                { text: "Il fait doux aujourd'hui.", meaning: "Bugün ılık.", pronunciation: "il-fe-du-o-jur-düi" },
                { text: "La température baisse.", meaning: "Sıcaklık düşüyor.", pronunciation: "la-tan-pe-ra-tür-bes" },
                { text: "C'est le début de l'été.", meaning: "Yazın başlangıcı.", pronunciation: "se-lö-de-bü-dö-le-te" }
            ]
        },
        323: {
            title: "Doğum Günü", phrases: [
                { text: "Joyeux anniversaire!", meaning: "Mutlu yıllar!", pronunciation: "jua-yö-za-ni-ver-ser" },
                { text: "C'est quand ton anniversaire?", meaning: "Doğum günün ne zaman?", pronunciation: "se-kan-ton-a-ni-ver-ser" },
                { text: "J'ai acheté un cadeau.", meaning: "Bir hediye aldım.", pronunciation: "je-aş-te-ön-ka-do" },
                { text: "Souffle les bougies!", meaning: "Mumları üfle!", pronunciation: "sufl-le-bu-ji" },
                { text: "Fais un vœu!", meaning: "Bir dilek tut!", pronunciation: "fe-ön-vö" },
                { text: "On fait une fête surprise.", meaning: "Sürpriz parti yapıyoruz.", pronunciation: "on-fe-ün-fet-sür-priz" },
                { text: "Merci pour le cadeau.", meaning: "Hediye için teşekkürler.", pronunciation: "mer-si-pur-lö-ka-do" },
                { text: "C'est très gentil.", meaning: "Çok naziksin.", pronunciation: "se-tre-jan-ti" },
                { text: "Le gâteau est délicieux.", meaning: "Pasta çok lezzetli.", pronunciation: "lö-ga-to-e-de-li-syö" },
                { text: "Tous mes vœux!", meaning: "Tüm iyi dileklerimle!", pronunciation: "tu-me-vö" },
                { text: "J'espère que ça te plaît.", meaning: "Umarım beğenirsin.", pronunciation: "jes-per-kö-sa-tö-ple" },
                { text: "On chante ensemble!", meaning: "Birlikte şarkı söyleyelim!", pronunciation: "on-şant-an-sambl" },
                { text: "La fête était géniale!", meaning: "Parti harikaydı!", pronunciation: "la-fet-e-te-je-nyal" },
                { text: "Je te souhaite tout le bonheur.", meaning: "Sana tüm mutlulukları diliyorum.", pronunciation: "jö-tö-su-et-tu-lö-bo-nör" },
                { text: "Meilleurs vœux!", meaning: "En iyi dilekler!", pronunciation: "me-yör-vö" }
            ]
        },
        324: {
            title: "Tatil", phrases: [
                { text: "Bonnes vacances!", meaning: "İyi tatiller!", pronunciation: "bon-va-kans" },
                { text: "Où vas-tu en vacances?", meaning: "Tatile nereye gidiyorsun?", pronunciation: "u-va-tü-an-va-kans" },
                { text: "Je pars à la mer.", meaning: "Denize gidiyorum.", pronunciation: "jö-par-a-la-mer" },
                { text: "On va à la montagne.", meaning: "Dağa gidiyoruz.", pronunciation: "on-va-a-la-mon-ta-nyö" },
                { text: "Je réserve un hôtel.", meaning: "Otel rezervasyonu yapıyorum.", pronunciation: "jö-re-zerv-ön-o-tel" },
                { text: "Quel beau temps!", meaning: "Ne güzel hava!", pronunciation: "kel-bo-tan" },
                { text: "La plage est magnifique.", meaning: "Plaj muhteşem.", pronunciation: "la-plaj-e-ma-nyi-fik" },
                { text: "J'adore bronzer.", meaning: "Güneşlenmeyi çok severim.", pronunciation: "ja-dor-bron-ze" },
                { text: "On fait une excursion.", meaning: "Gezi yapıyoruz.", pronunciation: "on-fe-ün-eks-kür-syon" },
                { text: "Je prends des photos.", meaning: "Fotoğraf çekiyorum.", pronunciation: "jö-pran-de-fo-to" },
                { text: "Les vacances sont trop courtes.", meaning: "Tatil çok kısa.", pronunciation: "le-va-kans-son-tro-kurt" },
                { text: "Je me détends.", meaning: "Dinleniyorum.", pronunciation: "jö-mö-de-tan" },
                { text: "On visite des monuments.", meaning: "Anıtları geziyoruz.", pronunciation: "on-vi-zit-de-mo-nü-man" },
                { text: "C'est les vacances d'été.", meaning: "Yaz tatili.", pronunciation: "se-le-va-kans-de-te" },
                { text: "Je ne veux pas rentrer.", meaning: "Dönmek istemiyorum.", pronunciation: "jö-nö-vö-pa-ran-tre" }
            ]
        },
        325: {
            title: "Alışveriş", phrases: [
                { text: "Où sont les cabines d'essayage?", meaning: "Kabinler nerede?", pronunciation: "u-son-le-ka-bin-de-se-yaj" },
                { text: "Je cherche la taille M.", meaning: "M beden arıyorum.", pronunciation: "jö-şerş-la-tay-em" },
                { text: "Vous l'avez en bleu?", meaning: "Mavisi var mı?", pronunciation: "vu-la-ve-an-blö" },
                { text: "C'est en solde?", meaning: "İndirimde mi?", pronunciation: "se-tan-sold" },
                { text: "Je peux payer par carte?", meaning: "Kartla ödeyebilir miyim?", pronunciation: "jö-pö-pe-ye-par-kart" },
                { text: "Vous avez la monnaie?", meaning: "Bozuk paranız var mı?", pronunciation: "vu-za-ve-la-mo-ne" },
                { text: "C'est trop cher.", meaning: "Çok pahalı.", pronunciation: "se-tro-şer" },
                { text: "Vous faites une réduction?", meaning: "İndirim yapar mısınız?", pronunciation: "vu-fet-ün-re-dük-syon" },
                { text: "Je vais réfléchir.", meaning: "Düşüneceğim.", pronunciation: "jö-ve-re-fle-şir" },
                { text: "Je le prends.", meaning: "Alıyorum.", pronunciation: "jö-lö-pran" },
                { text: "Vous avez un sac?", meaning: "Poşetiniz var mı?", pronunciation: "vu-za-ve-ön-sak" },
                { text: "C'est un cadeau?", meaning: "Hediye mi?", pronunciation: "se-tön-ka-do" },
                { text: "Où est la caisse?", meaning: "Kasa nerede?", pronunciation: "u-e-la-kes" },
                { text: "Les soldes commencent demain.", meaning: "İndirimler yarın başlıyor.", pronunciation: "le-sold-ko-mans-dö-men" },
                { text: "Je fais du lèche-vitrine.", meaning: "Vitrin geziyorum.", pronunciation: "jö-fe-dü-leş-vi-trin" }
            ]
        },
        326: {
            title: "Restoranda", phrases: [
                { text: "Une table pour deux, s'il vous plaît.", meaning: "İki kişilik masa, lütfen.", pronunciation: "ün-tabl-pur-dö-sil-vu-ple" },
                { text: "La carte, s'il vous plaît.", meaning: "Menü lütfen.", pronunciation: "la-kart-sil-vu-ple" },
                { text: "Quel est le plat du jour?", meaning: "Günün yemeği ne?", pronunciation: "kel-e-lö-pla-dü-jur" },
                { text: "Je voudrais commander.", meaning: "Sipariş vermek istiyorum.", pronunciation: "jö-vu-dre-ko-man-de" },
                { text: "Qu'est-ce que vous recommandez?", meaning: "Ne önerirsiniz?", pronunciation: "kes-kö-vu-rö-ko-man-de" },
                { text: "Je suis végétarien(ne).", meaning: "Vejetaryenim.", pronunciation: "jö-süi-ve-je-ta-ryen" },
                { text: "C'est trop salé.", meaning: "Çok tuzlu.", pronunciation: "se-tro-sa-le" },
                { text: "C'est délicieux!", meaning: "Çok lezzetli!", pronunciation: "se-de-li-syö" },
                { text: "L'addition, s'il vous plaît.", meaning: "Hesap lütfen.", pronunciation: "la-di-syon-sil-vu-ple" },
                { text: "Je peux avoir un peu plus de pain?", meaning: "Biraz daha ekmek alabilir miyim?", pronunciation: "jö-pö-a-vuar-ön-pö-plü-dö-pen" },
                { text: "Service compris?", meaning: "Servis dahil mi?", pronunciation: "ser-vis-kon-pri" },
                { text: "Bon appétit!", meaning: "Afiyet olsun!", pronunciation: "bon-a-pe-ti" },
                { text: "Je voudrais réserver une table.", meaning: "Masa ayırtmak istiyorum.", pronunciation: "jö-vu-dre-re-zer-ve-ün-tabl" },
                { text: "Avez-vous une terrasse?", meaning: "Terasınız var mı?", pronunciation: "a-ve-vu-ün-te-ras" },
                { text: "C'était très bon.", meaning: "Çok güzeldi.", pronunciation: "se-te-tre-bon" }
            ]
        },
        327: {
            title: "Renkler ve Sıfatlar", phrases: [
                { text: "Cette robe est belle.", meaning: "Bu elbise güzel.", pronunciation: "set-rob-e-bel" },
                { text: "C'est trop grand.", meaning: "Çok büyük.", pronunciation: "se-tro-gran" },
                { text: "C'est trop petit.", meaning: "Çok küçük.", pronunciation: "se-tro-pö-ti" },
                { text: "Je préfère le rouge.", meaning: "Kırmızıyı tercih ederim.", pronunciation: "jö-pre-fer-lö-ruj" },
                { text: "Il est très gentil.", meaning: "Çok nazik.", pronunciation: "il-e-tre-jan-ti" },
                { text: "C'est une vieille maison.", meaning: "Eski bir ev.", pronunciation: "se-tün-vyey-me-zon" },
                { text: "C'est une nouvelle voiture.", meaning: "Yeni bir araba.", pronunciation: "se-tün-nu-vel-vua-tür" },
                { text: "Le film était intéressant.", meaning: "Film ilginçti.", pronunciation: "lö-film-e-te-an-te-re-san" },
                { text: "C'est vraiment joli.", meaning: "Gerçekten şirin.", pronunciation: "se-vre-man-jo-li" },
                { text: "La couleur est magnifique.", meaning: "Renk muhteşem.", pronunciation: "la-ku-lör-e-ma-nyi-fik" },
                { text: "C'est un bon livre.", meaning: "İyi bir kitap.", pronunciation: "se-tön-bon-livr" },
                { text: "C'est une mauvaise idée.", meaning: "Kötü bir fikir.", pronunciation: "se-tün-mo-vez-i-de" },
                { text: "Elle est très belle.", meaning: "Çok güzel (kadın).", pronunciation: "el-e-tre-bel" },
                { text: "Il est beau.", meaning: "Yakışıklı.", pronunciation: "il-e-bo" },
                { text: "Les couleurs sont vives.", meaning: "Renkler canlı.", pronunciation: "le-ku-lör-son-viv" }
            ]
        },
        328: {
            title: "Hayvanlar", phrases: [
                { text: "Tu as un animal de compagnie?", meaning: "Evcil hayvanın var mı?", pronunciation: "tü-a-ön-a-ni-mal-dö-kon-pa-nyi" },
                { text: "J'ai un chat.", meaning: "Bir kedim var.", pronunciation: "je-ön-şa" },
                { text: "J'ai un chien.", meaning: "Bir köpeğim var.", pronunciation: "je-ön-şyen" },
                { text: "Il est adorable!", meaning: "Çok tatlı!", pronunciation: "il-e-ta-do-rabl" },
                { text: "Mon chat s'appelle Mimi.", meaning: "Kedimin adı Mimi.", pronunciation: "mon-şa-sa-pel-mi-mi" },
                { text: "Le chien aboie.", meaning: "Köpek havlıyor.", pronunciation: "lö-şyen-a-bua" },
                { text: "Le chat miaule.", meaning: "Kedi miyavlıyor.", pronunciation: "lö-şa-myol" },
                { text: "J'adore les animaux.", meaning: "Hayvanları çok severim.", pronunciation: "ja-dor-le-za-ni-mo" },
                { text: "Il faut le promener.", meaning: "Gezdirmek lazım.", pronunciation: "il-fo-lö-prom-ne" },
                { text: "Je dois le nourrir.", meaning: "Beslemem lazım.", pronunciation: "jö-dua-lö-nu-rir" },
                { text: "L'oiseau chante le matin.", meaning: "Kuş sabah öter.", pronunciation: "lua-zo-şant-lö-ma-ten" },
                { text: "Au zoo, il y a des lions.", meaning: "Hayvanat bahçesinde aslanlar var.", pronunciation: "o-zo-il-ya-de-lyon" },
                { text: "Les poissons nagent.", meaning: "Balıklar yüzüyor.", pronunciation: "le-pua-son-naj" },
                { text: "Je n'aime pas les serpents.", meaning: "Yılanları sevmiyorum.", pronunciation: "jö-nem-pa-le-ser-pan" },
                { text: "C'est une espèce protégée.", meaning: "Koruma altındaki tür.", pronunciation: "se-tün-es-pes-pro-te-je" }
            ]
        },
        329: {
            title: "Teknoloji", phrases: [
                { text: "Je n'ai plus de batterie.", meaning: "Pil bitti.", pronunciation: "jö-ne-plü-dö-ba-tri" },
                { text: "Tu as le wifi?", meaning: "Wifi var mı?", pronunciation: "tü-a-lö-wi-fi" },
                { text: "Quel est le mot de passe?", meaning: "Şifre ne?", pronunciation: "kel-e-lö-mo-dö-pas" },
                { text: "Je t'envoie un email.", meaning: "Sana mail atıyorum.", pronunciation: "jö-tan-vua-ön-i-mel" },
                { text: "Tu peux m'appeler?", meaning: "Beni arayabilir misin?", pronunciation: "tü-pö-ma-pö-le" },
                { text: "J'ai reçu ton message.", meaning: "Mesajını aldım.", pronunciation: "je-rö-sü-ton-me-saj" },
                { text: "L'ordinateur est en panne.", meaning: "Bilgisayar bozuk.", pronunciation: "lor-di-na-tör-e-tan-pan" },
                { text: "Télécharge l'application.", meaning: "Uygulamayı indir.", pronunciation: "te-le-şarj-la-pli-ka-syon" },
                { text: "Clique sur ce lien.", meaning: "Bu linke tıkla.", pronunciation: "klik-sür-sö-lyen" },
                { text: "J'ai perdu mon téléphone.", meaning: "Telefonumu kaybettim.", pronunciation: "je-per-dü-mon-te-le-fon" },
                { text: "Tu as un chargeur?", meaning: "Şarj alet var mı?", pronunciation: "tü-a-ön-şar-jör" },
                { text: "Mon écran est cassé.", meaning: "Ekranım kırık.", pronunciation: "mon-e-kran-e-ka-se" },
                { text: "Je suis sur les réseaux sociaux.", meaning: "Sosyal medyadayım.", pronunciation: "jö-süi-sür-le-re-zo-so-syo" },
                { text: "Tu m'envoies une photo?", meaning: "Bana fotoğraf gönderir misin?", pronunciation: "tü-man-vua-ün-fo-to" },
                { text: "C'est une bonne connexion.", meaning: "İyi bir bağlantı.", pronunciation: "se-tün-bon-ko-nek-syon" }
            ]
        },
        330: {
            title: "A1 Genel Tekrar", phrases: [
                { text: "Félicitations!", meaning: "Tebrikler!", pronunciation: "fe-li-si-ta-syon" },
                { text: "Tu as réussi!", meaning: "Başardın!", pronunciation: "tü-a-re-ü-si" },
                { text: "Continue comme ça!", meaning: "Böyle devam et!", pronunciation: "kon-ti-nü-kom-sa" },
                { text: "Tu parles bien français.", meaning: "Fransızca iyi konuşuyorsun.", pronunciation: "tü-parl-byan-fran-se" },
                { text: "Tu as fait des progrès.", meaning: "İlerleme kaydettin.", pronunciation: "tü-a-fe-de-pro-gre" },
                { text: "Je suis fier/fière de toi.", meaning: "Seninle gurur duyuyorum.", pronunciation: "jö-süi-fyer-dö-tua" },
                { text: "Tu as beaucoup appris.", meaning: "Çok şey öğrendin.", pronunciation: "tü-a-bo-ku-a-pri" },
                { text: "Bravo pour ton travail!", meaning: "Çalışman için tebrikler!", pronunciation: "bra-vo-pur-ton-tra-vay" },
                { text: "Continue à pratiquer.", meaning: "Pratik yapmaya devam et.", pronunciation: "kon-ti-nü-a-pra-ti-ke" },
                { text: "Tu es prêt(e) pour A2.", meaning: "A2 için hazırsın.", pronunciation: "tü-e-pre-pur-a-dö" },
                { text: "Bonne chance pour la suite!", meaning: "Devamı için iyi şanslar!", pronunciation: "bon-şans-pur-la-süit" },
                { text: "J'espère te revoir.", meaning: "Tekrar görüşmek dileğiyle.", pronunciation: "jes-per-tö-rö-vuar" },
                { text: "À bientôt!", meaning: "Yakında görüşürüz!", pronunciation: "a-byan-to" },
                { text: "Merci d'avoir appris avec moi.", meaning: "Benimle öğrendiğin için teşekkürler.", pronunciation: "mer-si-da-vuar-a-pri-a-vek-mua" },
                { text: "Le français, c'est super!", meaning: "Fransızca harika!", pronunciation: "lö-fran-se-se-sü-per" }
            ]
        }
    };

    // 315-330 için başlıklar (artık kullanılmıyor ama uyumluluk için bırakılıyor)
    const titles: { [key: number]: string } = {
        315: "Saat ve Zaman", 316: "Hava Durumu", 317: "Günlük Aktiviteler",
        318: "Hobiler", 319: "Duygular", 320: "Vücut Bölümleri",
        321: "Ulaşım", 322: "Mevsimler", 323: "Doğum Günü",
        324: "Tatil", 325: "Alışveriş", 326: "Restoranda",
        327: "Renkler ve Sıfatlar", 328: "Hayvanlar", 329: "Teknoloji",
        330: "A1 Genel Tekrar"
    };

    if (phraseData[unitId]) {
        return { unitId, ...phraseData[unitId] };
    }

    return { unitId, title: titles[unitId] || `Ünite ${unitId}`, phrases: [] };
}

// Tüm kalıpları içeren obje
const allPhrases: { [key: number]: FrenchA1UnitPhrases } = {
    301: unit301Phrases,
    302: unit302Phrases,
    303: unit303Phrases,
    304: unit304Phrases,
    305: unit305Phrases,
    306: unit306Phrases,
    307: unit307Phrases,
    308: unit308Phrases,
    309: unit309Phrases,
    310: unit310Phrases
};

// 311-330 için ekle
for (let i = 311; i <= 330; i++) {
    allPhrases[i] = generatePhrases(i);
}

export function getFrenchA1PhrasesForUnit(unitId: number): FrenchA1UnitPhrases | null {
    return allPhrases[unitId] || null;
}
