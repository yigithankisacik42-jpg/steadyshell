// SteadyShell Kalıplar Veritabanı - Fransızca A1 (301-330)
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
    unitId: 302, title: "Aksanlar ve Ulama",
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
    unitId: 303, title: "Sayılar 0-20",
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
    unitId: 304, title: "Renkler ve Cinsiyet Uyumu",
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
    unitId: 305, title: "Aile ve İyelik Sıfatları",
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
    unitId: 308, title: "Mesleklerde Cinsiyet",
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
    unitId: 309, title: "Evimiz (Yer Edatları ve Odalar)",
    phrases: [
        { text: "Bienvenue chez moi!", meaning: "Evime hoş geldiniz!", pronunciation: "byan-vö-nü-şe-mua" },
        { text: "C'est ma maison.", meaning: "Bu benim evim.", pronunciation: "se-ma-me-zon" },
        { text: "Où est la salle de bain?", meaning: "Banyo nerede?", pronunciation: "u-e-la-sal-dö-ben" },
        { text: "Il y a un grand jardin.", meaning: "Büyük bir bahçe var.", pronunciation: "il-ya-ön-gran-jar-den" },
        { text: "La cuisine est moderne.", meaning: "Mutfak modern.", pronunciation: "la-küi-zin-e-mo-dern" },
        { text: "Voici le salon.", meaning: "İşte salon.", pronunciation: "vua-si-lö-sa-lon" },
        { text: "Ma chambre est petite.", meaning: "Odam küçük.", pronunciation: "ma-şambr-e-pö-tit" },
        { text: "Ferme la porte, s'il te plaît.", meaning: "Kapıyı kapat lütfen.", pronunciation: "ferm-la-port sil-tö-ple" },
        { text: "Ouvre la fenêtre.", meaning: "Pencereyi aç.", pronunciation: "uvr-la-fö-netr" },
        { text: "Nous habitons ici.", meaning: "Biz burada yaşıyoruz.", pronunciation: "nu-za-bi-ton-i-si" }
    ]
};

// ===== ÜNİTE 310: İÇECEKLER =====
const unit310Phrases: FrenchA1UnitPhrases = {
    unitId: 310, title: "Sınıfta (Okul)",
    phrases: [
        { text: "Ouvrez votre livre.", meaning: "Kitabınızı açın.", pronunciation: "u-vre-votr-livr" },
        { text: "Fermez votre cahier.", meaning: "Defterinizi kapatın.", pronunciation: "fer-me-votr-ka-ye" },
        { text: "Écoutez-moi.", meaning: "Beni dinleyin.", pronunciation: "e-ku-te-mua" },
        { text: "Puis-je poser une question?", meaning: "Bir soru sorabilir miyim?", pronunciation: "püi-jö-po-ze-ün-kes-tyon" },
        { text: "Je ne comprends pas.", meaning: "Anlamıyorum.", pronunciation: "jö-nö-kom-pran-pa" },
        { text: "Comment dit-on ... en français?", meaning: "... Fransızca nasıl denir?", pronunciation: "ko-man-di-ton-an-fran-se" },
        { text: "C'est quelle page?", meaning: "Hangi sayfa?", pronunciation: "se-kel-paj" },
        { text: "Puis-je aller aux toilettes?", meaning: "Tuvalete gidebilir miyim?", pronunciation: "püi-ja-le-o-tua-let" },
        { text: "Asseyez-vous.", meaning: "Oturun.", pronunciation: "a-se-ye-vu" },
        { text: "Levez-vous.", meaning: "Ayağa kalkın.", pronunciation: "lö-ve-vu" },
        { text: "Silence, s'il vous plaît.", meaning: "Sessizlik lütfen.", pronunciation: "si-lans-sil-vu-ple" },
        { text: "C'est un crayon.", meaning: "Bu bir kalem.", pronunciation: "se-tön-kre-yon" },
        { text: "J'ai oublié mon devoir.", meaning: "Ödevimi unuttum.", pronunciation: "je-u-bli-ye-mon-dö-vuar" },
        { text: "Répétez, s'il vous plaît.", meaning: "Tekrar edin lütfen.", pronunciation: "re-pe-te-sil-vu-ple" },
        { text: "Je suis prêt.", meaning: "Hazırım.", pronunciation: "jö-süi-pre" }
    ]
};

// ===== ÜNİTE 311-330 için basitleştirilmiş yapı =====
function generatePhrases(unitId: number): FrenchA1UnitPhrases {
    const phraseData: { [key: number]: { title: string, phrases: FrenchPhrase[] } } = {
        311: {
            title: "Avoir Mal à (Ağrısı Olmak)", phrases: [
                { text: "J'ai mal à la tête.", meaning: "Başım ağrıyor.", pronunciation: "je-mal-a-la-tet" },
                { text: "J'ai mal au ventre.", meaning: "Karnım ağrıyor.", pronunciation: "je-mal-o-vantr" },
                { text: "J'ai mal aux dents.", meaning: "Dişim ağrıyor.", pronunciation: "je-mal-o-dan" },
                { text: "J'ai mal au dos.", meaning: "Sırtım ağrıyor.", pronunciation: "je-mal-o-do" },
                { text: "Ça fait mal.", meaning: "Acıyor.", pronunciation: "sa-fe-mal" },
                { text: "Je suis malade.", meaning: "Hastayım.", pronunciation: "jö-süi-ma-lad" },
                { text: "J'ai de la fièvre.", meaning: "Ateşim var.", pronunciation: "je-dö-la-fyevr" },
                { text: "J'ai besoin d'un médecin.", meaning: "Bir doktora ihtiyacım var.", pronunciation: "je-bö-zuen-dön-med-sen" },
                { text: "Prends ce médicament.", meaning: "Bu ilacı al.", pronunciation: "pran-sö-me-di-ka-man" },
                { text: "Je suis fatigué.", meaning: "Yorgunum.", pronunciation: "jö-süi-fa-ti-ge" },
                { text: "Mon nez coule.", meaning: "Burnum akıyor.", pronunciation: "mon-ne-kul" },
                { text: "J'ai mal à la gorge.", meaning: "Boğazım ağrıyor.", pronunciation: "je-mal-a-la-gorj" },
                { text: "Repose-toi.", meaning: "Dinlen.", pronunciation: "rö-poz-tua" },
                { text: "Ça va mieux.", meaning: "Daha iyiyim.", pronunciation: "sa-va-myö" },
                { text: "Appelez une ambulance!", meaning: "Ambulans çağırın!", pronunciation: "a-pö-le-ün-an-bü-lans" }
            ]
        },
        312: {
            title: "Porter Fiili ve Giysiler", phrases: [
                { text: "Je porte un pantalon.", meaning: "Pantolon giyiyorum.", pronunciation: "jö-port-ön-pan-ta-lon" },
                { text: "Elle porte une robe rouge.", meaning: "O kırmızı bir elbise giyiyor.", pronunciation: "el-port-ün-rob-ruj" },
                { text: "Mets ton manteau.", meaning: "Paltonu giy.", pronunciation: "me-ton-man-to" },
                { text: "J'aime cette chemise.", meaning: "Bu gömleği seviyorum.", pronunciation: "jem-set-şö-miz" },
                { text: "Ces chaussures sont confortables.", meaning: "Bu ayakkabılar rahat.", pronunciation: "se-şo-sür-son-kon-for-tabl" },
                { text: "Quelle est ta taille?", meaning: "Bedenin ne?", pronunciation: "kel-e-ta-tay" },
                { text: "C'est trop serré.", meaning: "Çok dar.", pronunciation: "se-tro-se-re" },
                { text: "C'est trop large.", meaning: "Çok bol.", pronunciation: "se-tro-larj" },
                { text: "Je cherche une jupe.", meaning: "Etek arıyorum.", pronunciation: "jö-şerş-ün-jüp" },
                { text: "Il fait froid, mets un bonnet.", meaning: "Hava soğuk, bere tak.", pronunciation: "il-fe-frua me-ön-bo-ne" },
                { text: "J'adore tes lunettes.", meaning: "Gözlüklerine bayıldım.", pronunciation: "ja-dor-te-lü-net" },
                { text: "Où est mon écharpe?", meaning: "Atkım nerede?", pronunciation: "u-e-mo-ne-şarp" },
                { text: "Je porte des baskets.", meaning: "Spor ayakkabı giyiyorum.", pronunciation: "jö-port-de-bas-ket" },
                { text: "C'est à la mode.", meaning: "Bu moda.", pronunciation: "se-ta-la-mod" },
                { text: "Ça te va bien.", meaning: "Sana çok yakıştı.", pronunciation: "sa-tö-va-byan" }
            ]
        },
        313: {
            title: "Partitif Artikeller (Du, De la, De l', Des)", phrases: [
                { text: "Je mange du pain.", meaning: "Ekmek yiyorum.", pronunciation: "jö-manj-dü-pen" },
                { text: "Je bois de l'eau.", meaning: "Su içiyorum.", pronunciation: "jö-bua-dö-lo" },
                { text: "Tu veux du fromage?", meaning: "Peynir ister misin?", pronunciation: "tü-vö-dü-fro-maj" },
                { text: "Je voudrais de la confiture.", meaning: "Reçel istiyorum.", pronunciation: "jö-vu-dre-dö-la-kon-fi-tür" },
                { text: "Il mange des pâtes.", meaning: "Makarna yiyor.", pronunciation: "il-manj-de-pat" },
                { text: "Je ne mange pas de viande.", meaning: "Et yemiyorum.", pronunciation: "jö-nö-manj-pa-dö-vyand" },
                { text: "Passe-moi du beurre.", meaning: "Bana tereyağı uzat.", pronunciation: "pas-mua-dü-bör" },
                { text: "C'est du poulet?", meaning: "Bu tavuk mu?", pronunciation: "se-dü-pu-le" },
                { text: "J'aime le poisson.", meaning: "Balığı severim (Genel).", pronunciation: "jem-lö-pua-son" },
                { text: "Je mange du poisson.", meaning: "Balık yiyorum (Miktar).", pronunciation: "jö-manj-dü-pua-son" },
                { text: "Il y a du sucre?", meaning: "Şeker var mı?", pronunciation: "il-ya-dü-sükr" },
                { text: "Je prends du café.", meaning: "Kahve alıyorum.", pronunciation: "jö-pran-dü-ka-fe" },
                { text: "Elle boit du thé.", meaning: "O çay içiyor.", pronunciation: "el-bua-dü-te" },
                { text: "C'est bon pour la santé.", meaning: "Sağlık için iyi.", pronunciation: "se-bon-pur-la-san-te" },
                { text: "Bon appétit!", meaning: "Afiyet olsun!", pronunciation: "bon-a-pe-ti" }
            ]
        },
        314: {
            title: "İçecekler (Sipariş Verme)", phrases: [
                { text: "Je voudrais un café.", meaning: "Bir kahve istiyorum.", pronunciation: "jö-vu-dre-ön-ka-fe" },
                { text: "Un verre d'eau, s'il vous plaît.", meaning: "Bir bardak su lütfen.", pronunciation: "ön-ver-do-sil-vu-ple" },
                { text: "J'ai soif.", meaning: "Susadım.", pronunciation: "je-suaf" },
                { text: "C'est délicieux.", meaning: "Bu lezzetli.", pronunciation: "se-de-li-syö" },
                { text: "Sans sucre, s'il vous plaît.", meaning: "Şekersiz lütfen.", pronunciation: "san-sükr-sil-vu-ple" },
                { text: "Avec du lait.", meaning: "Sütlü.", pronunciation: "a-vek-dü-le" },
                { text: "L'addition, s'il vous plaît.", meaning: "Hesap lütfen.", pronunciation: "la-di-syon-sil-vu-ple" },
                { text: "C'est chaud.", meaning: "Bu sıcak.", pronunciation: "se-şo" },
                { text: "C'est froid.", meaning: "Bu soğuk.", pronunciation: "se-frua" },
                { text: "Santé!", meaning: "Şerefe!", pronunciation: "san-te" },
                { text: "Un jus d'orange.", meaning: "Bir portakal suyu.", pronunciation: "ön-jü-do-ranj" },
                { text: "Vous avez du thé?", meaning: "Çayınız var mı?", pronunciation: "vu-za-ve-dü-te" },
                { text: "Je bois de l'eau.", meaning: "Su içiyorum.", pronunciation: "jö-bua-dö-lo" },
                { text: "C'est bon.", meaning: "Bu iyi/güzel.", pronunciation: "se-bon" },
                { text: "Encore un peu.", meaning: "Biraz daha.", pronunciation: "an-kor-ön-pö" }
            ]
        },
        315: {
            title: "Saatleri Söyleme (L'Heure)", phrases: [
                { text: "Quelle heure est-il?", meaning: "Saat kaç?", pronunciation: "kel-ör-e-til" },
                { text: "Il est trois heures.", meaning: "Saat üç.", pronunciation: "il-e-trua-zör" },
                { text: "Il est midi.", meaning: "Saat on iki (öğlen).", pronunciation: "il-e-mi-di" },
                { text: "Il est minuit.", meaning: "Gece yarısı.", pronunciation: "il-e-mi-nüi" },
                { text: "Il est quatre heures et quart.", meaning: "Saat dördü çeyrek geçiyor.", pronunciation: "il-e-ka-trör-e-kar" },
                { text: "Il est cinq heures et demie.", meaning: "Saat beş buçuk.", pronunciation: "il-e-sen-kör-e-dö-mi" },
                { text: "Il est six heures moins le quart.", meaning: "Saat altıya çeyrek var.", pronunciation: "il-e-si-zör-muan-lö-kar" },
                { text: "À quelle heure?", meaning: "Saat kaçta?", pronunciation: "a-kel-ör" },
                { text: "À huit heures pile.", meaning: "Tam sekizde.", pronunciation: "a-üi-tör-pil" },
                { text: "Je suis en retard.", meaning: "Geç kaldım.", pronunciation: "jö-süi-an-rö-tar" },
                { text: "Tu es en avance.", meaning: "Erken geldin.", pronunciation: "tü-e-tan-a-vans" },
                { text: "Le film commence à 20h.", meaning: "Film saat 20'de başlıyor.", pronunciation: "lö-film-ko-mans-a-ven-tör" },
                { text: "Il est tard.", meaning: "Geç oldu.", pronunciation: "il-e-tar" },
                { text: "Il est tôt.", meaning: "Erken.", pronunciation: "il-e-to" },
                { text: "On se voit à 10h.", meaning: "Saat 10'da görüşürüz.", pronunciation: "on-sö-vua-a-di-zör" }
            ]
        },
        316: {
            title: "Günlük Rutin (Dönüşlü Fiiller)", phrases: [
                { text: "Je me réveille à 7h.", meaning: "7'de uyanıyorum.", pronunciation: "jö-mö-re-vey-a-se-tör" },
                { text: "Je me lève.", meaning: "Kalkıyorum.", pronunciation: "jö-mö-lev" },
                { text: "Je me lave.", meaning: "Yıkanıyorum.", pronunciation: "jö-mö-lav" },
                { text: "Je m'habille.", meaning: "Giyiniyorum.", pronunciation: "jö-ma-biy" },
                { text: "Je me brosse les dents.", meaning: "Dişlerimi fırçalıyorum.", pronunciation: "jö-mö-bros-le-dan" },
                { text: "Je me coiffe.", meaning: "Saçımı tarıyorum.", pronunciation: "jö-mö-kuaf" },
                { text: "Je me prépare.", meaning: "Hazırlanıyorum.", pronunciation: "jö-mö-pre-par" },
                { text: "Je me maquille.", meaning: "Makyaj yapıyorum.", pronunciation: "jö-mö-ma-kiy" },
                { text: "Je me repose.", meaning: "Dinleniyorum.", pronunciation: "jö-mö-rö-poz" },
                { text: "Je me promène.", meaning: "Yürüyüş yapıyorum.", pronunciation: "jö-mö-pro-men" },
                { text: "Je m'amuse bien.", meaning: "İyi eğleniyorum.", pronunciation: "jö-ma-müz-byan" },
                { text: "Je me dépêche.", meaning: "Acele ediyorum.", pronunciation: "jö-mö-de-peş" },
                { text: "Je me couche à 23h.", meaning: "23'te yatıyorum.", pronunciation: "jö-mö-kuş-a-ven-trua-zör" },
                { text: "Je m'endors vite.", meaning: "Hemen uyuyorum.", pronunciation: "jö-man-dor-vit" },
                { text: "Comment tu t'appelles?", meaning: "Adın ne? (Dönüşlü)", pronunciation: "ko-man-tü-ta-pel" }
            ]
        },
        317: {
            title: "Hobiler (Faire vs Jouer)", phrases: [
                { text: "Quels sont tes loisirs?", meaning: "Hobilerin neler?", pronunciation: "kel-son-te-lua-zir" },
                { text: "Je joue au football.", meaning: "Futbol oynuyorum.", pronunciation: "jö-ju-o-fut-bol" },
                { text: "Je joue du piano.", meaning: "Piyano çalıyorum.", pronunciation: "jö-ju-dü-pya-no" },
                { text: "Je fais du sport.", meaning: "Spor yapıyorum.", pronunciation: "jö-fe-dü-spor" },
                { text: "Je fais de la natation.", meaning: "Yüzüyorum.", pronunciation: "jö-fe-dö-la-na-ta-syon" },
                { text: "Je joue aux échecs.", meaning: "Satranç oynuyorum.", pronunciation: "jö-ju-o-ze-şek" },
                { text: "Je joue de la guitare.", meaning: "Gitar çalıyorum.", pronunciation: "jö-ju-dö-la-gi-tar" },
                { text: "Je fais du vélo.", meaning: "Bisiklet sürüyorum.", pronunciation: "jö-fe-dü-ve-lo" },
                { text: "Je joue à des jeux vidéo.", meaning: "Video oyunları oynuyorum.", pronunciation: "jö-ju-a-de-jö-vi-de-o" },
                { text: "J'aime lire.", meaning: "Okumayı severim.", pronunciation: "jem-lir" },
                { text: "Je regarde la télé.", meaning: "Televizyon izliyorum.", pronunciation: "jö-rö-gard-la-te-le" },
                { text: "Je fais du shopping.", meaning: "Alışveriş yapıyorum.", pronunciation: "jö-fe-dü-şo-ping" },
                { text: "Je sors avec mes amis.", meaning: "Arkadaşlarımla çıkıyorum.", pronunciation: "jö-sor-a-vek-me-za-mi" },
                { text: "Je joue au tennis.", meaning: "Tenis oynuyorum.", pronunciation: "jö-ju-o-te-nis" },
                { text: "C'est ma passion.", meaning: "Bu benim tutkum.", pronunciation: "se-ma-pa-syon" }
            ]
        },
        318: {
            title: "Hava Durumu (Le Temps)", phrases: [
                { text: "Quel temps fait-il?", meaning: "Hava nasıl?", pronunciation: "kel-tan-fe-til" },
                { text: "Il fait beau.", meaning: "Hava güzel.", pronunciation: "il-fe-bo" },
                { text: "Il fait mauvais.", meaning: "Hava kötü.", pronunciation: "il-fe-mo-ve" },
                { text: "Il fait froid.", meaning: "Hava soğuk.", pronunciation: "il-fe-frua" },
                { text: "Il fait chaud.", meaning: "Hava sıcak.", pronunciation: "il-fe-şo" },
                { text: "Il y a du soleil.", meaning: "Güneş var.", pronunciation: "il-ya-dü-so-ley" },
                { text: "Il y a du vent.", meaning: "Rüzgar var.", pronunciation: "il-ya-dü-van" },
                { text: "Il pleut.", meaning: "Yağmur yağıyor.", pronunciation: "il-plö" },
                { text: "Il neige.", meaning: "Kar yağıyor.", pronunciation: "il-nej" },
                { text: "C'est nuageux.", meaning: "Bulutlu.", pronunciation: "se-nüa-jö" },
                { text: "Quelle température fait-il?", meaning: "Sıcaklık kaç derece?", pronunciation: "kel-tan-pe-ra-tür-fe-til" },
                { text: "Il fait 20 degrés.", meaning: "Hava 20 derece.", pronunciation: "il-fe-ven-dö-gre" },
                { text: "Il fait un temps magnifique.", meaning: "Harika bir hava var.", pronunciation: "il-fe-tön-tan-ma-nyi-fik" },
                { text: "Il gèle.", meaning: "Don oluyor.", pronunciation: "il-jel" },
                { text: "Prends un parapluie.", meaning: "Şemsiye al.", pronunciation: "pran-ön-pa-ra-plüi" }
            ]
        },
        319: {
            title: "Duygular ve Cinsiyet Uyumu", phrases: [
                { text: "Je suis heureux.", meaning: "Mutluyum (Erkek).", pronunciation: "jö-süi-zö-rö" },
                { text: "Je suis heureuse.", meaning: "Mutluyum (Kadın).", pronunciation: "jö-süi-zö-röz" },
                { text: "Il est triste.", meaning: "O üzgün.", pronunciation: "il-e-trist" },
                { text: "Elle est fâchée.", meaning: "O kızgın (Kadın).", pronunciation: "el-e-fa-şe" },
                { text: "Nous sommes fatigués.", meaning: "Biz yorgunuz.", pronunciation: "nu-som-fa-ti-ge" },
                { text: "Tu es amoureux?", meaning: "Aşık mısın?", pronunciation: "tü-e-a-mu-rö" },
                { text: "Je suis surpris.", meaning: "Şaşırdım.", pronunciation: "jö-süi-sür-pri" },
                { text: "Elle est inquiète.", meaning: "O endişeli.", pronunciation: "el-e-ten-kyet" },
                { text: "Je suis désolé.", meaning: "Üzgünüm/Özür dilerim.", pronunciation: "jö-süi-de-zo-le" },
                { text: "C'est énervant!", meaning: "Bu sinir bozucu!", pronunciation: "se-te-ner-van" },
                { text: "J'ai peur.", meaning: "Korkuyorum.", pronunciation: "je-pör" },
                { text: "Je suis content de te voir.", meaning: "Seni gördüğüme sevindim.", pronunciation: "jö-süi-kon-tan-dö-tö-vuar" },
                { text: "Il est jaloux.", meaning: "O kıskanç.", pronunciation: "il-e-ja-lu" },
                { text: "Elle est timide.", meaning: "O utangaç.", pronunciation: "el-e-ti-mid" },
                { text: "Soyez calmes.", meaning: "Sakin olun.", pronunciation: "sua-ye-kalm" }
            ]
        },
        320: {
            title: "Emir Kipi ve Yol Tarifi (L'Impératif)", phrases: [
                { text: "Tournez à droite.", meaning: "Sağa dönün.", pronunciation: "tur-ne-a-druat" },
                { text: "Va tout droit!", meaning: "Dümdüz git!", pronunciation: "va-tu-drua" },
                { text: "Écoute-moi.", meaning: "Beni dinle.", pronunciation: "e-kut-mua" },
                { text: "Regardez ici.", meaning: "Buraya bakın.", pronunciation: "rö-gar-de-i-si" },
                { text: "Ne parlez pas.", meaning: "Konuşmayın.", pronunciation: "nö-par-le-pa" },
                { text: "Prends la première rue.", meaning: "İlk sokağa gir (al).", pronunciation: "pran-la-prö-myer-rü" },
                { text: "Traversez le pont.", meaning: "Köprüyü geçin.", pronunciation: "tra-ver-se-lö-pon" },
                { text: "C'est loin?", meaning: "Uzak mı?", pronunciation: "se-luen" },
                { text: "C'est à côté de la banque.", meaning: "Bankanın yanında.", pronunciation: "se-ta-ko-te-dö-la-bank" },
                { text: "Arrêtez-vous!", meaning: "Durun!", pronunciation: "a-re-te-vu" },
                { text: "Entrez!", meaning: "Girin!", pronunciation: "an-tre" },
                { text: "Sortez!", meaning: "Çıkın!", pronunciation: "sor-te" },
                { text: "Allons-y!", meaning: "Hadi gidelim!", pronunciation: "a-lon-zi" },
                { text: "Ne tourne pas à gauche.", meaning: "Sola dönme.", pronunciation: "nö-turn-pa-a-goş" },
                { text: "Suivez-moi.", meaning: "Beni takip edin.", pronunciation: "süi-ve-mua" }
            ]
        },
        321: {
            title: "Prendre Fiili ve Ulaşım", phrases: [
                { text: "Je prends le bus.", meaning: "Otobüse biniyorum.", pronunciation: "jö-pran-lö-büs" },
                { text: "Tu prends le métro?", meaning: "Metroya mı biniyorsun?", pronunciation: "tü-pran-lö-me-tro" },
                { text: "Nous prenons le train.", meaning: "Trene biniyoruz.", pronunciation: "nu-prö-non-lö-tren" },
                { text: "Ils prennent l'avion.", meaning: "Uçağa biniyorlar.", pronunciation: "il-pren-la-vyon" },
                { text: "Prends le taxi.", meaning: "Taksiye bin.", pronunciation: "pran-lö-tak-si" },
                { text: "Je vais prendre une douche.", meaning: "Duş alacağım.", pronunciation: "jö-ve-pran-drün-duş" },
                { text: "Qu'est-ce que vous prenez?", meaning: "Ne alırsınız/içersiniz?", pronunciation: "kes-kö-vu-prö-ne" },
                { text: "Je prends un café.", meaning: "Bir kahve alıyorum.", pronunciation: "jö-pran-ön-ka-fe" },
                { text: "Elle prend des photos.", meaning: "Fotoğraf çekiyor.", pronunciation: "el-pran-de-fo-to" },
                { text: "Vous prenez la voiture?", meaning: "Arabayı mı alıyorsunuz?", pronunciation: "vu-prö-ne-la-vua-tür" },
                { text: "Je descends à la prochaine.", meaning: "Sonraki durakta iniyorum.", pronunciation: "jö-de-san-a-la-pro-şen" },
                { text: "C'est loin à pied.", meaning: "Yürüyerek uzak.", pronunciation: "se-luen-a-pye" },
                { text: "Le bus est complet.", meaning: "Otobüs dolu.", pronunciation: "lö-büs-e-kom-ple" },
                { text: "J'ai raté le train.", meaning: "Treni kaçırdım.", pronunciation: "je-ra-te-lö-tren" },
                { text: "Compostez votre billet.", meaning: "Biletinizi okutun/damgalatın.", pronunciation: "kom-pos-te-votr-bi-ye" }
            ]
        },
        322: {
            title: "Mevsimler ve Edatlar (Au/En)", phrases: [
                { text: "Quelle saison est-ce?", meaning: "Hangi mevsimdeyiz?", pronunciation: "kel-se-zon-es" },
                { text: "En été, il fait chaud.", meaning: "Yazın (EN) hava sıcak.", pronunciation: "an-e-te-il-fe-şo" },
                { text: "En hiver, il fait froid.", meaning: "Kışın (EN) hava soğuk.", pronunciation: "an-i-ver-il-fe-frua" },
                { text: "En automne, il pleut.", meaning: "Sonbaharda (EN) yağmur yağar.", pronunciation: "an-o-ton-il-plö" },
                { text: "Au printemps, tout est vert.", meaning: "İlkbaharda (AU) her yer yeşil.", pronunciation: "o-pren-tan-tu-te-ver" },
                { text: "J'aime l'été.", meaning: "Yazı severim (Artikel).", pronunciation: "jem-le-te" },
                { text: "Je pars en vacances en août.", meaning: "Ağustosta tatile gidiyorum.", pronunciation: "jö-par-an-va-kans-an-ut" },
                { text: "C'est la saison des fleurs.", meaning: "Çiçek mevsimi.", pronunciation: "se-la-se-zon-de-flör" },
                { text: "Il neige en hiver.", meaning: "Kışın kar yağar.", pronunciation: "il-nej-an-i-ver" },
                { text: "J'adore le printemps.", meaning: "İlkbaharı severim.", pronunciation: "ja-dor-lö-pren-tan" },
                { text: "Les feuilles tombent en automne.", meaning: "Sonbaharda yapraklar düşer.", pronunciation: "le-föy-tonb-an-o-ton" },
                { text: "On nage en été.", meaning: "Yazın yüzeriz.", pronunciation: "on-naj-an-e-te" },
                { text: "Il fait doux au printemps.", meaning: "İlkbaharda hava ılıktır.", pronunciation: "il-fe-du-o-pren-tan" },
                { text: "L'été est ma saison préférée.", meaning: "Yaz en sevdiğim mevsimdir.", pronunciation: "le-te-e-ma-se-zon-pre-fe-re" },
                { text: "Il fait gris en automne.", meaning: "Sonbaharda hava kapalıdır.", pronunciation: "il-fe-gri-an-o-ton" }
            ]
        },
        323: {
            title: "Özel Günler ve Kutlamalar", phrases: [
                { text: "Joyeux anniversaire!", meaning: "Doğum günün kutlu olsun!", pronunciation: "jua-yö-za-ni-ver-ser" },
                { text: "Bonne année!", meaning: "Mutlu yıllar!", pronunciation: "bo-na-ne" },
                { text: "Joyeux Noël!", meaning: "Mutlu Noeller!", pronunciation: "jua-yö-no-el" },
                { text: "Bonne fête!", meaning: "İyi bayramlar!", pronunciation: "bon-fet" },
                { text: "Meilleurs vœux.", meaning: "En iyi dileklerimle.", pronunciation: "me-yör-vö" },
                { text: "Félicitations!", meaning: "Tebrikler!", pronunciation: "fe-li-si-ta-syon" },
                { text: "Bonne chance!", meaning: "Bol şans!", pronunciation: "bon-şans" },
                { text: "C'est un cadeau pour toi.", meaning: "Bu senin için bir hediye.", pronunciation: "se-tön-ka-do-pur-tua" },
                { text: "Amuse-toi bien.", meaning: "İyi eğlenceler.", pronunciation: "a-müz-tua-byan" },
                { text: "Merci pour l'invitation.", meaning: "Davet için teşekkürler.", pronunciation: "mer-si-pur-len-vi-ta-syon" },
                { text: "Tous mes vœux de bonheur.", meaning: "Tüm mutluluk dileklerimle.", pronunciation: "tu-me-vö-dö-bo-nör" },
                { text: "Bravo!", meaning: "Bravo!", pronunciation: "bra-vo" },
                { text: "Santé et bonheur.", meaning: "Sağlık ve mutluluk.", pronunciation: "san-te-e-bo-nör" },
                { text: "C'est une surprise.", meaning: "Bu bir sürpriz.", pronunciation: "se-tün-sür-priz" },
                { text: "À la tienne!", meaning: "Şerefine!", pronunciation: "a-la-tyen" }
            ]
        },
        324: {
            title: "Tatil ve Seyahat", phrases: [
                { text: "Je pars en vacances.", meaning: "Tatile gidiyorum.", pronunciation: "jö-par-an-va-kans" },
                { text: "Bonnes vacances!", meaning: "İyi tatiller!", pronunciation: "bon-va-kans" },
                { text: "J'aime la plage.", meaning: "Plajı severim.", pronunciation: "jem-la-plaj" },
                { text: "Je vais à l'hôtel.", meaning: "Otele gidiyorum.", pronunciation: "jö-ve-a-lo-tel" },
                { text: "C'est un beau voyage.", meaning: "Güzel bir seyahat.", pronunciation: "se-tön-bo-vua-yaj" },
                { text: "Je prends des photos.", meaning: "Fotoğraf çekiyorum.", pronunciation: "jö-pran-de-fo-to" },
                { text: "Il fait beau ici.", meaning: "Burada hava güzel.", pronunciation: "il-fe-bo-i-si" },
                { text: "Je veux nager.", meaning: "Yüzmek istiyorum.", pronunciation: "jö-vö-na-je" },
                { text: "La mer est bleue.", meaning: "Deniz mavi.", pronunciation: "la-mer-e-blö" },
                { text: "J'achète des souvenirs.", meaning: "Hediyelik eşya alıyorum.", pronunciation: "ja-şet-de-su-vö-nir" },
                { text: "Le soleil brille.", meaning: "Güneş parlıyor.", pronunciation: "lö-so-ley-briy" },
                { text: "J'ai besoin de repos.", meaning: "Dinlenmeye ihtiyacım var.", pronunciation: "je-bö-zuen-dö-rö-po" },
                { text: "On visite le musée.", meaning: "Müzeyi geziyoruz.", pronunciation: "on-vi-zit-lö-mü-ze" },
                { text: "C'est le paradis.", meaning: "Burası cennet.", pronunciation: "se-lö-pa-ra-di" },
                { text: "Je ne veux pas rentrer.", meaning: "Dönmek istemiyorum.", pronunciation: "jö-nö-vö-pa-ran-tre" }
            ]
        },
        325: {
            title: "Fiyat ve Miktar Sorma (Combien)", phrases: [
                { text: "C'est combien?", meaning: "Bu ne kadar?", pronunciation: "se-kom-byan" },
                { text: "Combien ça coûte?", meaning: "Bu ne kadar tutuyor?", pronunciation: "kom-byan-sa-kut" },
                { text: "Combien de frères as-tu?", meaning: "Kaç kardeşin var?", pronunciation: "kom-byan-dö-frer-a-tü" },
                { text: "Combien de temps?", meaning: "Ne kadar zaman?", pronunciation: "kom-byan-dö-tan" },
                { text: "Combien d'amis viennent?", meaning: "Kaç arkadaş geliyor?", pronunciation: "kom-byan-da-mi-vyen" },
                { text: "Ça fait 10 euros.", meaning: "10 euro tutuyor.", pronunciation: "sa-fe-di-zö-ro" },
                { text: "Je voudrais un kilo de pommes.", meaning: "Bir kilo elma istiyorum.", pronunciation: "jö-vu-dre-ön-ki-lo-dö-pom" },
                { text: "C'est trop cher.", meaning: "Çok pahalı.", pronunciation: "se-tro-şer" },
                { text: "C'est bon marché.", meaning: "Ucuz / Hesaplı.", pronunciation: "se-bon-mar-şe" },
                { text: "Vous avez la monnaie?", meaning: "Bozuk paranız var mı?", pronunciation: "vu-za-ve-la-mo-ne" },
                { text: "Je peux payer par carte?", meaning: "Kartla ödeyebilir miyim?", pronunciation: "jö-pö-pe-ye-par-kart" },
                { text: "Combien de personnes?", meaning: "Kaç kişi?", pronunciation: "kom-byan-dö-per-son" },
                { text: "Il n'y a pas de prix.", meaning: "Fiyat yok.", pronunciation: "il-nya-pa-dö-pri" },
                { text: "Quel est le prix?", meaning: "Fiyatı nedir?", pronunciation: "kel-e-lö-pri" },
                { text: "Je fais des économies.", meaning: "Tasarruf yapıyorum.", pronunciation: "jö-fe-de-ze-ko-no-mi" }
            ]
        },
        326: {
            title: "Restoranda (Au Restaurant)", phrases: [
                { text: "Une table pour deux, s'il vous plaît.", meaning: "İki kişilik masa lütfen.", pronunciation: "ün-tabl-pur-dö-sil-vu-ple" },
                { text: "La carte, s'il vous plaît.", meaning: "Menü lütfen (Carte).", pronunciation: "la-kart-sil-vu-ple" },
                { text: "Je voudrais le menu.", meaning: "Fiks menüyü istiyorum.", pronunciation: "jö-vu-dre-lö-mönü" },
                { text: "Je vais prendre le poulet.", meaning: "Tavuk alacağım.", pronunciation: "jö-ve-prandr-lö-pu-le" },
                { text: "Une carafe d'eau, s'il vous plaît.", meaning: "Bir sürahi su lütfen (Ücretsiz).", pronunciation: "ün-ka-raf-do-sil-vu-ple" },
                { text: "L'addition, s'il vous plaît.", meaning: "Hesap lütfen.", pronunciation: "la-di-syon-sil-vu-ple" },
                { text: "C'était très bon!", meaning: "Çok güzeldi!", pronunciation: "se-te-tre-bon" },
                { text: "Excusez-moi, monsieur!", meaning: "Bakar mısınız beyefendi!", pronunciation: "eks-kü-ze-mua-mö-syö" },
                { text: "Du pain, s'il vous plaît.", meaning: "Ekmek lütfen.", pronunciation: "dü-pen-sil-vu-ple" },
                { text: "Bon appétit!", meaning: "Afiyet olsun!", pronunciation: "bon-a-pe-ti" },
                { text: "Je suis végétarien.", meaning: "Vejetaryenim.", pronunciation: "jö-süi-ve-je-ta-ryen" },
                { text: "Qu'est-ce que vous recommandez?", meaning: "Ne önerirsiniz?", pronunciation: "kes-kö-vu-rö-ko-man-de" },
                { text: "C'est délicieux.", meaning: "Bu leziz.", pronunciation: "se-de-li-syö" },
                { text: "Je n'ai pas de fourchette.", meaning: "Çatalım yok.", pronunciation: "jö-ne-pa-dö-fur-şet" },
                { text: "Gardez la monnaie.", meaning: "Üstü kalsın.", pronunciation: "gar-de-la-mo-ne" }
            ]
        },
        327: {
            title: "Karşılaştırma (Le Comparatif)", phrases: [
                { text: "Pierre est plus grand que Marie.", meaning: "Pierre Marie'den daha uzundur.", pronunciation: "pyer-e-plü-gran-kö-ma-ri" },
                { text: "Le train est plus rapide.", meaning: "Tren daha hızlıdır.", pronunciation: "lö-tren-e-plü-ra-pid" },
                { text: "C'est moins cher.", meaning: "Daha ucuz.", pronunciation: "se-muan-şer" },
                { text: "Je suis aussi fatigué que toi.", meaning: "Ben de senin kadar yorgunum.", pronunciation: "jö-süi-osi-fa-ti-ge-kö-tua" },
                { text: "C'est meilleur!", meaning: "Bu daha iyi! (Meilleur)", pronunciation: "se-me-yör" },
                { text: "Il est plus intelligent.", meaning: "O daha zeki.", pronunciation: "il-e-plü-zen-te-li-jan" },
                { text: "Elle est plus belle que moi.", meaning: "O benden daha güzel.", pronunciation: "el-e-plü-bel-kö-mua" },
                { text: "C'est pire.", meaning: "Bu daha kötü.", pronunciation: "se-pir" },
                { text: "Tu es plus fort que lui.", meaning: "Sen ondan daha güçlüsün.", pronunciation: "tü-e-plü-for-kö-lüi" },
                { text: "La France est plus grande.", meaning: "Fransa daha büyüktür.", pronunciation: "la-frans-e-plü-grand" },
                { text: "C'est moins intéressant.", meaning: "Daha az ilginç.", pronunciation: "se-muan-zen-te-re-san" },
                { text: "Il court plus vite.", meaning: "Daha hızlı koşuyor.", pronunciation: "il-kur-plü-vit" },
                { text: "Je mange plus que toi.", meaning: "Senden daha çok yiyorum.", pronunciation: "jö-manj-plü-kö-tua" },
                { text: "Ce livre est meilleur.", meaning: "Bu kitap daha iyi.", pronunciation: "sö-livr-e-me-yör" },
                { text: "Le café est meilleur que le thé.", meaning: "Kahve çaydan daha iyidir.", pronunciation: "lö-ka-fe-e-me-yör-kö-lö-te" }
            ]
        },
        328: {
            title: "Hayvanlar ve Cinsiyet Kuralı", phrases: [
                { text: "J'ai un chien.", meaning: "Bir köpeğim var (Erkek).", pronunciation: "je-ön-şyen" },
                { text: "C'est une chatte.", meaning: "Bu bir dişi kedi.", pronunciation: "se-tün-şat" },
                { text: "La souris est petite.", meaning: "Fare küçüktür (Her zaman Dişi/La).", pronunciation: "la-su-ri-e-pö-tit" },
                { text: "Le lion est le roi.", meaning: "Aslan kraldır.", pronunciation: "lö-liyon-e-lö-rua" },
                { text: "L'oiseau chante.", meaning: "Kuş ötüyor.", pronunciation: "lua-zo-şant" },
                { text: "J'aime les chevaux.", meaning: "Atları severim.", pronunciation: "jem-le-şö-vo" },
                { text: "La vache donne du lait.", meaning: "İnek süt verir.", pronunciation: "la-vaş-don-dü-le" },
                { text: "Le poisson nage.", meaning: "Balık yüzüyor.", pronunciation: "lö-pua-son-naj" },
                { text: "Attention au chien!", meaning: "Köpeğe dikkat!", pronunciation: "a-tan-syon-o-şyen" },
                { text: "C'est un animal sauvage.", meaning: "Bu vahşi bir hayvan.", pronunciation: "se-tön-a-ni-mal-so-vaj" },
                { text: "Mon chat est noir.", meaning: "Kedim siyah.", pronunciation: "mon-şa-e-nuar" },
                { text: "Les animaux de compagnie.", meaning: "Evcil hayvanlar.", pronunciation: "le-za-ni-mo-dö-kon-pa-nyi" },
                { text: "La girafe est grande.", meaning: "Zürafa büyüktür/uzundur.", pronunciation: "la-ji-raf-e-grand" },
                { text: "Un ours mange du miel.", meaning: "Ayı bal yer.", pronunciation: "ön-urs-manj-dü-myel" },
                { text: "J'ai peur des araignées.", meaning: "Örümceklerden korkarım.", pronunciation: "je-pör-de-za-ren-ye" }
            ]
        },
        329: {
            title: "Teknoloji ve İletişim", phrases: [
                { text: "J'ai un nouveau téléphone.", meaning: "Yeni bir telefonum var.", pronunciation: "je-ön-nu-vo-te-le-fon" },
                { text: "Je surfe sur internet.", meaning: "İnternette geziniyorum.", pronunciation: "jö-sörf-sür-en-ter-net" },
                { text: "Envoie-moi un message.", meaning: "Bana mesaj gönder.", pronunciation: "an-vua-mua-ön-me-saj" },
                { text: "Mon ordinateur est en panne.", meaning: "Bilgisayarım bozuk.", pronunciation: "mon-or-di-na-tör-e-tan-pan" },
                { text: "Quel est le mot de passe wifi?", meaning: "Wifi şifresi nedir?", pronunciation: "kel-e-lö-mo-dö-pas-vi-fi" },
                { text: "Télécharge l'application.", meaning: "Uygulamayı indir.", pronunciation: "te-le-şarj-la-pli-ka-syon" },
                { text: "La batterie est vide.", meaning: "Pil bitti.", pronunciation: "la-ba-tri-e-vid" },
                { text: "Je prends un selfie.", meaning: "Selfie çekiyorum.", pronunciation: "jö-pran-ön-sel-fi" },
                { text: "C'est en ligne.", meaning: "Çevrimiçi.", pronunciation: "se-tan-lin-yö" },
                { text: "Tu as un chargeur?", meaning: "Şarj aletin var mı?", pronunciation: "tü-a-ön-şar-jör" },
                { text: "Je regarde une vidéo.", meaning: "Video izliyorum.", pronunciation: "jö-rö-gard-ün-vi-de-o" },
                { text: "Clique ici.", meaning: "Buraya tıkla.", pronunciation: "klik-i-si" },
                { text: "Ça ne marche pas.", meaning: "Çalışmıyor.", pronunciation: "sa-nö-marş-pa" },
                { text: "J'ai reçu un email.", meaning: "Bir e-posta aldım.", pronunciation: "je-rö-sü-ön-i-meyl" },
                { text: "Google est mon ami.", meaning: "Google benim dostum.", pronunciation: "gu-göl-e-mon-a-mi" }
            ]
        },
        330: {
            title: "A1 Dilbilgisi Özeti", phrases: [
                { text: "Je suis prêt pour A2.", meaning: "A2 için hazırım.", pronunciation: "jö-süi-pre-pur-a-dö" },
                { text: "J'ai appris beaucoup de choses.", meaning: "Çok şey öğrendim.", pronunciation: "je-a-pri-bo-ku-dö-şoz" },
                { text: "Le français est une belle langue.", meaning: "Fransızca güzel bir dil.", pronunciation: "lö-fran-se-e-tün-bel-lang" },
                { text: "Je peux parler un peu.", meaning: "Biraz konuşabiliyorum.", pronunciation: "jö-pö-par-le-ön-pö" },
                { text: "Je comprends mieux maintenant.", meaning: "Şimdi daha iyi anlıyorum.", pronunciation: "jö-kom-pran-myö-men-tö-nan" },
                { text: "C'est facile.", meaning: "Bu kolay.", pronunciation: "se-fa-sil" },
                { text: "C'est difficile mais amusant.", meaning: "Bu zor ama eğlenceli.", pronunciation: "se-di-fi-sil-me-a-mü-zan" },
                { text: "J'aime étudier.", meaning: "Ders çalışmayı seviyorum.", pronunciation: "jem-e-tü-dye" },
                { text: "Merci pour les leçons.", meaning: "Dersler için teşekkürler.", pronunciation: "mer-si-pur-le-lö-son" },
                { text: "À la prochaine!", meaning: "Bir sonrakinde görüşmek üzere!", pronunciation: "a-la-pro-şen" },
                { text: "Je vais continuer.", meaning: "Devam edeceğim.", pronunciation: "jö-ve-kon-ti-nü-e" },
                { text: "Bravo à tous!", meaning: "Herkese bravo!", pronunciation: "bra-vo-a-tus" },
                { text: "C'est la fin du niveau A1.", meaning: "A1 seviyesinin sonu.", pronunciation: "se-la-fen-dü-ni-vo-a-ön" },
                { text: "Je veux voyager en France.", meaning: "Fransa'ya seyahat etmek istiyorum.", pronunciation: "jö-vö-vua-ya-je-an-frans" },
                { text: "Au revoir A1, bonjour A2!", meaning: "Hoşçakal A1, Merhaba A2!", pronunciation: "o-rö-vuar-a-ön bon-jur-a-dö" }
            ]
        },
    };

    // 315-330 için başlıklar (artık kullanılmıyor ama uyumluluk için bırakılıyor)
    const titles: { [key: number]: string } = {
        315: "Saat ve Zaman", 316: "Günlük Rutin", 317: "Hobiler",
        318: "Hava Durumu", 319: "Duygular", 320: "Şehirde Yönler",
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
