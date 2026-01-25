
// SteadyShell Kelime Veritabanı - Fransızca A2 (331-360)
// Her ünite için ~25 kelime - Curriculum.ts ile senkronize

interface Vocabulary {
    word: string;
    meaning: string;
    pronunciation: string;
    example: string;
    exampleTranslation: string;
}

interface UnitVocabulary {
    unitId: number;
    title: string;
    words: Vocabulary[];
}

// ===== ÜNİTE 331: GEÇMİŞ TATİLLER =====
const unit331Vocab: UnitVocabulary = {
    unitId: 331, title: "Geçmiş Tatiller",
    words: [
        // Tatil Türleri ve Yerler
        { word: "Les vacances", meaning: "Tatil", pronunciation: "le-va-kans", example: "J'ai passé de bonnes vacances.", exampleTranslation: "Güzel tatil geçirdim." },
        { word: "Le voyage", meaning: "Seyahat", pronunciation: "lö-vua-yaj", example: "Le voyage était long.", exampleTranslation: "Yolculuk uzundu." },
        { word: "La plage", meaning: "Plaj", pronunciation: "la-plaj", example: "Nous sommes allés à la plage.", exampleTranslation: "Plaja gittik." },
        { word: "La montagne", meaning: "Dağ", pronunciation: "la-mon-tany", example: "J'ai fait du ski à la montagne.", exampleTranslation: "Dağda kayak yaptım." },
        { word: "L'hôtel", meaning: "Otel", pronunciation: "lo-tel", example: "L'hôtel était confortable.", exampleTranslation: "Otel rahattı." },
        { word: "Le camping", meaning: "Kamp", pronunciation: "lö-kam-ping", example: "Nous avons fait du camping.", exampleTranslation: "Kamp yaptık." },
        { word: "L'étranger", meaning: "Yurt dışı", pronunciation: "le-tran-je", example: "Je suis allé à l'étranger.", exampleTranslation: "Yurt dışına gittim." },
        { word: "L'île", meaning: "Ada", pronunciation: "lil", example: "Une île déserte.", exampleTranslation: "Issız bir ada." },

        // Aktiviteler
        { word: "Visiter", meaning: "Ziyaret etmek", pronunciation: "vi-zi-te", example: "J'ai visité un musée.", exampleTranslation: "Bir müze ziyaret ettim." },
        { word: "Découvrir", meaning: "Keşfetmek", pronunciation: "de-kuv-rir", example: "J'ai découvert une belle région.", exampleTranslation: "Güzel bir bölge keşfettim." },
        { word: "Se reposer", meaning: "Dinlenmek", pronunciation: "sö-rö-po-ze", example: "Je me suis bien reposé.", exampleTranslation: "İyi dinlendim." },
        { word: "Bronzer", meaning: "Bronzlaşmak", pronunciation: "bron-ze", example: "J'ai bronzé sur la plage.", exampleTranslation: "Plajda bronzlaştım." },
        { word: "Nager", meaning: "Yüzmek", pronunciation: "na-je", example: "J'ai nagé dans la mer.", exampleTranslation: "Denizde yüzdüm." },
        { word: "Se promener", meaning: "Gezinmek", pronunciation: "sö-pro-mö-ne", example: "Nous nous sommes promenés.", exampleTranslation: "Gezindik." },
        { word: "Louer", meaning: "Kiralamak", pronunciation: "lu-e", example: "Nous avons loué une voiture.", exampleTranslation: "Araba kiraladık." },

        // Eşyalar ve Hatıralar
        { word: "Le souvenir", meaning: "Hatıra/Anı", pronunciation: "lö-suv-nir", example: "J'ai acheté des souvenirs.", exampleTranslation: "Hatıralar aldım." },
        { word: "La photo", meaning: "Fotoğraf", pronunciation: "la-fo-to", example: "J'ai pris beaucoup de photos.", exampleTranslation: "Çok fotoğraf çektim." },
        { word: "La valise", meaning: "Bavul", pronunciation: "la-va-liz", example: "J'ai perdu ma valise.", exampleTranslation: "Bavulumu kaybettim." },
        { word: "Le sac à dos", meaning: "Sırt çantası", pronunciation: "lö-sak-a-do", example: "Mon sac à dos est lourd.", exampleTranslation: "Sırt çantam ağır." },
        { word: "Le passeport", meaning: "Pasaport", pronunciation: "lö-pas-por", example: "N'oublie pas ton passeport.", exampleTranslation: "Pasaportunu unutma." },

        // Sıfatlar
        { word: "Inoubliable", meaning: "Unutulmaz", pronunciation: "i-nu-bli-yabl", example: "C'était inoubliable!", exampleTranslation: "Unutulmazdı!" },
        { word: "Magnifique", meaning: "Harika", pronunciation: "ma-nyi-fik", example: "La vue était magnifique.", exampleTranslation: "Manzara harikaydı." },
        { word: "Fatigant", meaning: "Yorucu", pronunciation: "fa-ti-gan", example: "Le voyage était fatigant.", exampleTranslation: "Yolculuk yorucuydu." },
        { word: "Ensoleillé", meaning: "Güneşli", pronunciation: "an-so-le-ye", example: "Une journée ensoleillée.", exampleTranslation: "Güneşli bir gün." }
    ]
};

// ===== ÜNİTE 332: GELECEK PLANLARI =====
const unit332Vocab: UnitVocabulary = {
    unitId: 332, title: "Gelecek Planları",
    words: [
        // Zaman İfadeleri
        { word: "L'avenir", meaning: "Gelecek", pronunciation: "lav-nir", example: "Je pense à l'avenir.", exampleTranslation: "Geleceği düşünüyorum." },
        { word: "Bientôt", meaning: "Yakında", pronunciation: "byan-to", example: "Je vais partir bientôt.", exampleTranslation: "Yakında gideceğim." },
        { word: "L'année prochaine", meaning: "Gelecek yıl", pronunciation: "la-ne-pro-şen", example: "L'année prochaine, je vais voyager.", exampleTranslation: "Gelecek yıl seyahat edeceğim." },
        { word: "Le mois prochain", meaning: "Gelecek ay", pronunciation: "lö-mua-pro-şen", example: "Je déménage le mois prochain.", exampleTranslation: "Gelecek ay taşınıyorum." },
        { word: "La semaine prochaine", meaning: "Gelecek hafta", pronunciation: "la-sö-men-pro-şen", example: "Je commence la semaine prochaine.", exampleTranslation: "Gelecek hafta başlıyorum." },
        { word: "Demain", meaning: "Yarın", pronunciation: "dö-men", example: "À demain!", exampleTranslation: "Yarına görüşürüz!" },
        { word: "Plus tard", meaning: "Daha sonra", pronunciation: "plü-tar", example: "On verra plus tard.", exampleTranslation: "Daha sonra bakarız." },

        // Planlama Fiilleri
        { word: "Prévoir", meaning: "Planlamak/Öngörmek", pronunciation: "pre-vuar", example: "Je prévois de partir.", exampleTranslation: "Gitmeyi planlıyorum." },
        { word: "Espérer", meaning: "Ummak", pronunciation: "es-pe-re", example: "J'espère réussir.", exampleTranslation: "Başarmayı umuyorum." },
        { word: "Rêver de", meaning: "Hayalini kurmak", pronunciation: "re-ve-dö", example: "Je rêve de voyager.", exampleTranslation: "Seyahat hayali kuruyorum." },
        { word: "Avoir l'intention de", meaning: "Niyetinde olmak", pronunciation: "avuar-len-tan-syon", example: "J'ai l'intention d'apprendre.", exampleTranslation: "Öğrenme niyetindeyim." },
        { word: "Organiser", meaning: "Organize etmek", pronunciation: "or-ga-ni-ze", example: "J'organise une fête.", exampleTranslation: "Bir parti organize ediyorum." },
        { word: "Décider", meaning: "Karar vermek", pronunciation: "de-si-de", example: "J'ai décidé de partir.", exampleTranslation: "Gitmeye karar verdim." },
        { word: "Se préparer", meaning: "Hazırlanmak", pronunciation: "sö-pre-pa-re", example: "Je me prépare pour le voyage.", exampleTranslation: "Yolculuk için hazırlanıyorum." },

        // İsimler ve Kavramlar
        { word: "Le projet", meaning: "Proje/Plan", pronunciation: "lö-pro-je", example: "J'ai un projet.", exampleTranslation: "Bir projem var." },
        { word: "Le rêve", meaning: "Rüya/Hayal", pronunciation: "lö-rev", example: "C'est mon rêve.", exampleTranslation: "Bu benim hayalim." },
        { word: "L'objectif", meaning: "Hedef", pronunciation: "lob-jek-tif", example: "Mon objectif est de réussir.", exampleTranslation: "Hedefim başarmak." },
        { word: "L'espoir", meaning: "Umut", pronunciation: "les-puar", example: "Garder l'espoir.", exampleTranslation: "Umudunu korumak." },
        { word: "Le départ", meaning: "Gidiş/Kalkış", pronunciation: "lö-de-par", example: "Le départ est à 8h.", exampleTranslation: "Kalkış saat 8'de." },
        { word: "L'arrivée", meaning: "Varış/Geliş", pronunciation: "la-ri-ve", example: "L'heure d'arrivée.", exampleTranslation: "Varış saati." },
        { word: "La décision", meaning: "Karar", pronunciation: "la-de-si-zyon", example: "C'est une bonne décision.", exampleTranslation: "Bu iyi bir karar." },
        { word: "Le changement", meaning: "Değişim", pronunciation: "lö-şanj-man", example: "J'ai besoin de changement.", exampleTranslation: "Değişime ihtiyacım var." },
        { word: "La réussite", meaning: "Başarı", pronunciation: "la-re-ü-sit", example: "Félicitations pour ta réussite.", exampleTranslation: "Başarın için tebrikler." }
    ]
};

// ===== ÜNİTE 333: SAĞLIK VE HASTALIK =====
const unit333Vocab: UnitVocabulary = {
    unitId: 333, title: "Sağlık ve Hastalık",
    words: [
        // Hastalıklar ve Belirtiler
        { word: "La fièvre", meaning: "Ateş", pronunciation: "la-fyevr", example: "J'ai de la fièvre.", exampleTranslation: "Ateşim var." },
        { word: "La toux", meaning: "Öksürük", pronunciation: "la-tu", example: "J'ai une mauvaise toux.", exampleTranslation: "Kötü öksürüğüm var." },
        { word: "Le rhume", meaning: "Nezle", pronunciation: "lö-rüm", example: "J'ai attrapé un rhume.", exampleTranslation: "Nezle oldum." },
        { word: "La grippe", meaning: "Grip", pronunciation: "la-grip", example: "Elle a la grippe.", exampleTranslation: "Gribi var." },
        { word: "La douleur", meaning: "Ağrı", pronunciation: "la-du-lör", example: "J'ai une douleur au dos.", exampleTranslation: "Sırtımda ağrı var." },
        { word: "Le symptôme", meaning: "Belirti", pronunciation: "lö-senp-tom", example: "Quels sont les symptômes?", exampleTranslation: "Belirtiler neler?" },
        { word: "Fatigué", meaning: "Yorgun", pronunciation: "fa-ti-ge", example: "Je suis très fatigué.", exampleTranslation: "Çok yorgunum." },
        { word: "Malade", meaning: "Hasta", pronunciation: "ma-lad", example: "Je suis tombé malade.", exampleTranslation: "Hastalandım." },

        // Vücut Parçaları
        { word: "La tête", meaning: "Baş", pronunciation: "la-tet", example: "J'ai mal à la tête.", exampleTranslation: "Başım ağrıyor." },
        { word: "Le ventre", meaning: "Karın", pronunciation: "lö-vantr", example: "J'ai mal au ventre.", exampleTranslation: "Karnım ağrıyor." },
        { word: "Le dos", meaning: "Sırt", pronunciation: "lö-do", example: "J'ai mal au dos.", exampleTranslation: "Sırtım ağrıyor." },
        { word: "La gorge", meaning: "Boğaz", pronunciation: "la-gorj", example: "J'ai mal à la gorge.", exampleTranslation: "Boğazım ağrıyor." },
        { word: "Le nez", meaning: "Burun", pronunciation: "lö-ne", example: "J'ai le nez qui coule.", exampleTranslation: "Burnum akıyor." },
        { word: "Les dents", meaning: "Dişler", pronunciation: "le-dan", example: "J'ai mal aux dents.", exampleTranslation: "Dişlerim ağrıyor." },
        { word: "Les yeux", meaning: "Gözler", pronunciation: "le-zyö", example: "J'ai mal aux yeux.", exampleTranslation: "Gözlerim ağrıyor." },

        // Tedavi ve Sağlık Personeli
        { word: "Le médecin", meaning: "Doktor", pronunciation: "lö-med-sen", example: "Je vais chez le médecin.", exampleTranslation: "Doktora gidiyorum." },
        { word: "L'infirmier", meaning: "Hemşire", pronunciation: "len-fir-mye", example: "L'infirmier arrive.", exampleTranslation: "Hemşire geliyor." },
        { word: "Le dentiste", meaning: "Dişçi", pronunciation: "lö-dan-tist", example: "Rendez-vous chez le dentiste.", exampleTranslation: "Dişçide randevu." },
        { word: "L'hôpital", meaning: "Hastane", pronunciation: "lo-pi-tal", example: "Il est à l'hôpital.", exampleTranslation: "Hastanede." },
        { word: "La pharmacie", meaning: "Eczane", pronunciation: "la-far-ma-si", example: "Je vais à la pharmacie.", exampleTranslation: "Eczaneye gidiyorum." },
        { word: "Le médicament", meaning: "İlaç", pronunciation: "lö-me-di-ka-man", example: "Prenez ce médicament.", exampleTranslation: "Bu ilacı alın." },
        { word: "L'ordonnance", meaning: "Reçete", pronunciation: "lor-do-nans", example: "Voici l'ordonnance.", exampleTranslation: "İşte reçete." },
        { word: "Le rendez-vous", meaning: "Randevu", pronunciation: "lö-ran-de-vu", example: "Prendre un rendez-vous.", exampleTranslation: "Randevu almak." },

        // Fiiller
        { word: "Tousser", meaning: "Öksürmek", pronunciation: "tu-se", example: "Je tousse beaucoup.", exampleTranslation: "Çok öksürüyorum." },
        { word: "Guérir", meaning: "İyileşmek", pronunciation: "ge-rir", example: "Je vais guérir bientôt.", exampleTranslation: "Yakında iyileşeceğim." },
        { word: "Se sentir", meaning: "Hissetmek", pronunciation: "sö-san-tir", example: "Je me sens mieux.", exampleTranslation: "Daha iyi hissediyorum." },
        { word: "Soigner", meaning: "Tedavi etmek", pronunciation: "sua-nye", example: "Le médecin me soigne.", exampleTranslation: "Doktor beni tedavi ediyor." }
    ]
};

// ===== ÜNİTE 334: BANKADA =====
const unit334Vocab: UnitVocabulary = {
    unitId: 334, title: "Bankada",
    words: [
        // Bankacılık İşlemleri
        { word: "Ouvrir un compte", meaning: "Hesap açmak", pronunciation: "uvrir-ön-kont", example: "Je voudrais ouvrir un compte.", exampleTranslation: "Hesap açmak istiyorum." },
        { word: "Faire un virement", meaning: "Havale yapmak", pronunciation: "fer-ön-vir-man", example: "Je dois faire un virement.", exampleTranslation: "Havale yapmam lazım." },
        { word: "Retirer", meaning: "Çekmek", pronunciation: "rö-ti-re", example: "Je vais retirer de l'argent.", exampleTranslation: "Para çekeceğim." },
        { word: "Déposer", meaning: "Yatırmak", pronunciation: "de-po-ze", example: "Je veux déposer de l'argent.", exampleTranslation: "Para yatırmak istiyorum." },
        { word: "Changer", meaning: "Bozdurmak/Değiştirmek", pronunciation: "şan-je", example: "Changer des euros.", exampleTranslation: "Euro bozdurmak." },
        { word: "Signer", meaning: "İmzalamak", pronunciation: "sin-ye", example: "Signez ici.", exampleTranslation: "Burayı imzalayın." },
        { word: "Payer", meaning: "Ödemek", pronunciation: "pe-ye", example: "Je paie par carte.", exampleTranslation: "Kartla ödüyorum." },
        { word: "Emprunter", meaning: "Ödünç almak", pronunciation: "an-pran-te", example: "Emprunter de l'argent.", exampleTranslation: "Para ödünç almak." },

        // Banka Terimleri
        { word: "Le compte", meaning: "Hesap", pronunciation: "lö-kont", example: "Mon compte est bloqué.", exampleTranslation: "Hesabım bloke oldu." },
        { word: "Le guichet", meaning: "Gişe", pronunciation: "lö-gi-şe", example: "Allez au guichet.", exampleTranslation: "Gişeye gidin." },
        { word: "Le distributeur", meaning: "ATM", pronunciation: "lö-dis-tri-bü-tör", example: "Le distributeur est là-bas.", exampleTranslation: "ATM şurada." },
        { word: "Le solde", meaning: "Bakiye", pronunciation: "lö-sold", example: "Quel est mon solde?", exampleTranslation: "Bakiyem ne kadar?" },
        { word: "L'intérêt", meaning: "Faiz", pronunciation: "len-te-re", example: "Taux d'intérêt.", exampleTranslation: "Faiz oranı." },
        { word: "Le crédit", meaning: "Kredi", pronunciation: "lö-kre-di", example: "Demander un crédit.", exampleTranslation: "Kredi istemek." },
        { word: "La dette", meaning: "Borç", pronunciation: "la-det", example: "Payer une dette.", exampleTranslation: "Borç ödemek." },
        { word: "Les frais", meaning: "Masraflar", pronunciation: "le-fre", example: "Frais bancaires.", exampleTranslation: "Banka masrafları." },

        // Para ve Belgeler
        { word: "L'argent", meaning: "Para", pronunciation: "lar-jan", example: "J'ai besoin d'argent.", exampleTranslation: "Paraya ihtiyacım var." },
        { word: "La monnaie", meaning: "Bozuk para / Para", pronunciation: "la-mo-ne", example: "Vous avez de la monnaie?", exampleTranslation: "Bozuk paranız var mı?" },
        { word: "Le billet", meaning: "Kağıt para / Bilet", pronunciation: "lö-bi-ye", example: "Un billet de 20 euros.", exampleTranslation: "20 euro'luk banknot." },
        { word: "La carte bancaire", meaning: "Banka kartı", pronunciation: "la-kart-ban-ker", example: "Insérez votre carte.", exampleTranslation: "Kartınızı takın." },
        { word: "Le relevé", meaning: "Hesap özeti", pronunciation: "lö-rö-lö-ve", example: "Le relevé de compte.", exampleTranslation: "Hesap özeti." },
        { word: "La pièce d'identité", meaning: "Kimlik", pronunciation: "la-pyes-di-dan-ti-te", example: "Votre pièce d'identité?", exampleTranslation: "Kimliğiniz?" },
        { word: "Le code", meaning: "Şifre", pronunciation: "lö-kod", example: "Entrez votre code.", exampleTranslation: "Şifrenizi girin." }
    ]
};

const unit335Vocab: UnitVocabulary = {
    unitId: 335, title: "Postanede ve Miktarlar", words: [
        // Postane Terimleri
        { word: "Le timbre", meaning: "Pul", pronunciation: "lö-tanbr", example: "Je voudrais un carnet de timbres.", exampleTranslation: "Bir defter pul istiyorum." },
        { word: "Le colis", meaning: "Paket/Koli", pronunciation: "lö-ko-li", example: "Ce colis est trop lourd.", exampleTranslation: "Bu koli çok/aşırı ağır." },
        { word: "Envoyer", meaning: "Göndermek", pronunciation: "an-vua-ye", example: "Je vais envoyer une lettre.", exampleTranslation: "Bir mektup göndereceğim." },
        { word: "L'expéditeur", meaning: "Gönderici", pronunciation: "leks-pe-di-tör", example: "Écrivez l'adresse de l'expéditeur.", exampleTranslation: "Göndericinin adresini yazın." },
        { word: "Le destinataire", meaning: "Alıcı", pronunciation: "lö-des-ti-na-ter", example: "Le destinataire est absent.", exampleTranslation: "Alıcı yok." },
        { word: "La poste", meaning: "Postane", pronunciation: "la-post", example: "Je vais à la poste.", exampleTranslation: "Postaneye gidiyorum." },
        { word: "Le courrier", meaning: "Posta/Mektup", pronunciation: "lö-kur-ye", example: "Distribuer le courrier.", exampleTranslation: "Postayı dağıtmak." },
        { word: "L'enveloppe", meaning: "Zarf", pronunciation: "lan-vö-lop", example: "Mettez la lettre dans l'enveloppe.", exampleTranslation: "Mektubu zarfa koyun." },
        { word: "La carte postale", meaning: "Kartpostal", pronunciation: "la-kart-pos-tal", example: "Envoyer une carte postale.", exampleTranslation: "Kartpostal göndermek." },
        { word: "Le facteur", meaning: "Postacı", pronunciation: "lö-fak-tör", example: "Le facteur arrive.", exampleTranslation: "Postacı geliyor." },
        { word: "La boîte aux lettres", meaning: "Posta kutusu", pronunciation: "la-buat-o-letr", example: "Jeter dans la boîte aux lettres.", exampleTranslation: "Posta kutusuna atmak." },
        { word: "Recommandé", meaning: "Taahhütlü", pronunciation: "rö-ko-man-de", example: "Une lettre recommandée.", exampleTranslation: "Taahhütlü bir mektup." },

        // Miktar Zarfları (4 Büyükler)
        { word: "Beaucoup de", meaning: "Çok", pronunciation: "bo-ku-dö", example: "Il y a beaucoup de monde.", exampleTranslation: "Çok insan var." },
        { word: "Un peu de", meaning: "Biraz", pronunciation: "ön-pö-dö", example: "Je voudrais un peu de temps.", exampleTranslation: "Biraz zaman istiyorum." },
        { word: "Trop de", meaning: "Aşırı / Çok fazla", pronunciation: "tro-dö", example: "Il y a trop de bruit.", exampleTranslation: "Aşırı gürültü var." },
        { word: "Assez de", meaning: "Yeterince", pronunciation: "a-se-dö", example: "J'ai assez d'argent.", exampleTranslation: "Yeterince param var." },
        { word: "Plus de", meaning: "Daha fazla", pronunciation: "plü-dö", example: "Je veux plus de sucre.", exampleTranslation: "Daha fazla şeker istiyorum." },
        { word: "Moins de", meaning: "Daha az", pronunciation: "muen-dö", example: "Il y a moins de monde.", exampleTranslation: "Daha az insan var." },

        // Ölçü Birimleri (Kaplar)
        { word: "Une bouteille de", meaning: "Bir şişe...", pronunciation: "ün-bu-tey-dö", example: "Une bouteille d'eau.", exampleTranslation: "Bir şişe su." },
        { word: "Un paquet de", meaning: "Bir paket...", pronunciation: "ön-pa-ke-dö", example: "Un paquet de café.", exampleTranslation: "Bir paket kahve." },
        { word: "Une tranche de", meaning: "Bir dilim...", pronunciation: "ün-tranş-dö", example: "Une tranche de pain.", exampleTranslation: "Bir dilim ekmek." },
        { word: "Un morceau de", meaning: "Bir parça...", pronunciation: "ön-mor-so-dö", example: "Un morceau de gâteau.", exampleTranslation: "Bir parça pasta." },
        { word: "Une boîte de", meaning: "Bir kutu...", pronunciation: "ün-buat-dö", example: "Une boîte de chocolats.", exampleTranslation: "Bir kutu çikolata." },
        { word: "Un verre de", meaning: "Bir bardak...", pronunciation: "ön-ver-dö", example: "Un verre de jus.", exampleTranslation: "Bir bardak meyve suyu." },
        { word: "Une tasse de", meaning: "Bir fincan...", pronunciation: "ün-tas-dö", example: "Une tasse de thé.", exampleTranslation: "Bir fincan çay." },
        { word: "Un kilo de", meaning: "Bir kilo...", pronunciation: "ön-ki-lo-dö", example: "Un kilo de pommes.", exampleTranslation: "Bir kilo elma." },
        { word: "Un litre de", meaning: "Bir litre...", pronunciation: "ön-li-tr-dö", example: "Un litre de lait.", exampleTranslation: "Bir litre süt." },
        { word: "Une douzaine de", meaning: "Bir düzine...", pronunciation: "ün-du-zen-dö", example: "Une douzaine d'œufs.", exampleTranslation: "Bir düzine yumurta." }
    ]
};

const unit336Vocab: UnitVocabulary = {
    unitId: 336, title: "Otel Rezervasyonu", words: [
        // Temel Kelimeler
        { word: "La réservation", meaning: "Rezervasyon", pronunciation: "la-re-zer-va-syon", example: "J'ai une réservation.", exampleTranslation: "Rezervasyonum var." },
        { word: "La chambre", meaning: "Oda", pronunciation: "la-şanbr", example: "Une chambre calme.", exampleTranslation: "Sessiz bir oda." },
        { word: "La clé", meaning: "Anahtar", pronunciation: "la-kle", example: "Voici votre clé.", exampleTranslation: "İşte anahtarınız." },
        { word: "La réception", meaning: "Resepsiyon", pronunciation: "la-re-sep-syon", example: "Demandez à la réception.", exampleTranslation: "Resepsiyona sorun." },

        // Oda Tipleri & Özellikler
        { word: "Une chambre simple", meaning: "Tek kişilik oda", pronunciation: "ün-şanbr-senpl", example: " Pour une personne.", exampleTranslation: "Bir kişi için." },
        { word: "Une chambre double", meaning: "Çift kişilik oda", pronunciation: "ün-şanbr-dubl", example: "Un grand lit.", exampleTranslation: "Büyük bir yatak." },
        { word: "Le lit", meaning: "Yatak", pronunciation: "lö-li", example: "Le lit est confortable.", exampleTranslation: "Yatak rahat." },
        { word: "La salle de bains", meaning: "Banyo", pronunciation: "la-sal-dö-ben", example: "Avec salle de bains.", exampleTranslation: "Banyolu." },
        { word: "La vue sur la mer", meaning: "Deniz manzarası", pronunciation: "la-vü-sür-la-mer", example: "Je veux une vue sur la mer.", exampleTranslation: "Deniz manzarası istiyorum." },
        { word: "Le balcon", meaning: "Balkon", pronunciation: "lö-bal-kon", example: "Avec un balcon.", exampleTranslation: "Balkonlu." },

        // Tesisler ve Hizmetler
        { word: "Le petit-déjeuner", meaning: "Kahvaltı", pronunciation: "lö-pö-ti-de-jö-ne", example: "Le petit-déjeuner est inclus.", exampleTranslation: "Kahvaltı dahil." },
        { word: "L'ascenseur", meaning: "Asansör", pronunciation: "la-san-sör", example: "L'ascenseur est là.", exampleTranslation: "Asansör orada." },
        { word: "La piscine", meaning: "Havuz", pronunciation: "la-pi-sin", example: "Il y a une piscine.", exampleTranslation: "Havuz var." },
        { word: "Le parking", meaning: "Otopark", pronunciation: "lö-par-king", example: "Le parking est gratuit.", exampleTranslation: "Otopark ücretsiz." },
        { word: "Le wifi", meaning: "Wifi", pronunciation: "lö-wi-fi", example: "Le mot de passe wifi.", exampleTranslation: "Wifi şifresi." },
        { word: "La climatisation", meaning: "Klima", pronunciation: "la-kli-ma-ti-za-syon", example: "Il fait chaud, la clim marche?", exampleTranslation: "Sıcak, klima çalışıyor mu?" },

        // Fiiller ve Durumlar
        { word: "Réserver", meaning: "Rezerve etmek", pronunciation: "re-zer-ve", example: "Je voudrais réserver.", exampleTranslation: "Rezervasyon yapmak istiyorum." },
        { word: "Disponible", meaning: "Müsait", pronunciation: "dis-po-nibl", example: "La chambre est disponible.", exampleTranslation: "Oda müsait." },
        { word: "Complet", meaning: "Dolu", pronunciation: "kom-ple", example: "L'hôtel est complet.", exampleTranslation: "Otel dolu." },
        { word: "Annuler", meaning: "İptal etmek", pronunciation: "a-nü-le", example: "Je dois annuler.", exampleTranslation: "İptal etmem lazım." },
        { word: "Confirmer", meaning: "Onaylamak", pronunciation: "kon-fir-me", example: "Je confirme la date.", exampleTranslation: "Tarihi onaylıyorum." },
        { word: "Payer", meaning: "Ödemek", pronunciation: "pe-ye", example: "Je vais payer maintenant.", exampleTranslation: "Şimdi ödeyeceğim." },
        { word: "Compris/Inclus", meaning: "Dahil", pronunciation: "kom-pri/en-klü", example: "Tout est compris.", exampleTranslation: "Her şey dahil." },
        { word: "Par nuit", meaning: "Gecelik", pronunciation: "par-nüi", example: "Le prix par nuit.", exampleTranslation: "Gecelik fiyat." }
    ]
};

const unit337Vocab: UnitVocabulary = {
    unitId: 337, title: "Tren İstasyonunda", words: [
        // Bilet ve Yolculuk
        { word: "Le billet", meaning: "Bilet", pronunciation: "lö-bi-ye", example: "Un billet aller-retour.", exampleTranslation: "Gidiş-dönüş bilet." },
        { word: "L'aller-retour", meaning: "Gidiş-dönüş", pronunciation: "la-le-rö-tur", example: "Deux allers-retours.", exampleTranslation: "İki gidiş-dönüş." },
        { word: "L'aller simple", meaning: "Tek gidiş", pronunciation: "la-le-senpl", example: "Juste un aller simple.", exampleTranslation: "Sadece tek gidiş." },
        { word: "La réduction", meaning: "İndirim", pronunciation: "la-re-dük-syon", example: "Une réduction pour les jeunes.", exampleTranslation: "Gençler için indirim." },
        { word: "La place", meaning: "Koltuk/Yer", pronunciation: "la-plas", example: "Ma place est réservée.", exampleTranslation: "Yerim rezerve edildi." },
        { word: "Le tarif", meaning: "Tarife/Fiyat", pronunciation: "lö-ta-rif", example: "Le tarif normal.", exampleTranslation: "Normal tarife." },
        { word: "Complet", meaning: "Dolu", pronunciation: "kom-ple", example: "Le train est complet.", exampleTranslation: "Tren dolu." },

        // İstasyon Bölümleri
        { word: "Le quai", meaning: "Peron", pronunciation: "lö-ke", example: "Le train part du quai 5.", exampleTranslation: "Tren 5. perondan kalkıyor." },
        { word: "La voie", meaning: "Yol/Ray", pronunciation: "la-vua", example: "Voie A.", exampleTranslation: "A yolu." },
        { word: "Le guichet", meaning: "Gişe", pronunciation: "lö-gi-şe", example: "Allez au guichet.", exampleTranslation: "Gişeye gidin." },
        { word: "La salle d'attente", meaning: "Bekleme salonu", pronunciation: "la-sal-da-tant", example: "Attendez dans la salle d'attente.", exampleTranslation: "Bekleme salonunda bekleyin." },
        { word: "Les renseignements", meaning: "Danışma", pronunciation: "le-ran-sen-nyö-man", example: "Bureau des renseignements.", exampleTranslation: "Danışma bürosu." },
        { word: "L'horaire", meaning: "Tarife/Saat çizelgesi", pronunciation: "lo-rer", example: "Vérifiez les horaires.", exampleTranslation: "Saatleri kontrol edin." },
        { word: "Le panneau", meaning: "Tabela/Pano", pronunciation: "lö-pa-no", example: "Regardez le panneau d'affichage.", exampleTranslation: "Duyuru panosuna bakın." },

        // Eylemler
        { word: "Composter", meaning: "Damgalamak (Bilet)", pronunciation: "kom-pos-te", example: "N'oubliez pas de composter.", exampleTranslation: "Damgalamayı unutmayın." },
        { word: "Valider", meaning: "Onaylatmak", pronunciation: "va-li-de", example: "Validez votre titre de transport.", exampleTranslation: "Biletinizi onaylatın." },
        { word: "Rater", meaning: "Kaçırmak", pronunciation: "ra-te", example: "J'ai raté le train.", exampleTranslation: "Treni kaçırdım." },
        { word: "Attendre", meaning: "Beklemek", pronunciation: "a-tan-dr", example: "J'attends le train.", exampleTranslation: "Treni bekliyorum." },
        { word: "Descendre", meaning: "İnmek", pronunciation: "de-san-dr", example: "Je descends à Nice.", exampleTranslation: "Nice'te iniyorum." },
        { word: "Monter", meaning: "Binmek", pronunciation: "mon-te", example: "Montez dans le train.", exampleTranslation: "Trene binin." },
        { word: "Changer", meaning: "Değiştirmek (Aktarma)", pronunciation: "şan-je", example: "Il faut changer à Lyon.", exampleTranslation: "Lyon'da aktarma yapmak lazım." },

        // Durumlar
        { word: "Le retard", meaning: "Gecikme", pronunciation: "lö-rö-tar", example: "Le train a du retard.", exampleTranslation: "Tren gecikmeli." },
        { word: "La correspondance", meaning: "Aktarma", pronunciation: "la-ko-res-pon-dans", example: "J'ai une correspondance.", exampleTranslation: "Aktarmam var." },
        { word: "À l'heure", meaning: "Zamanında", pronunciation: "a-lör", example: "Le train est à l'heure.", exampleTranslation: "Tren zamanında (kalkıyor)." },
        { word: "Annulé", meaning: "İptal", pronunciation: "a-nü-le", example: "Le train est annulé.", exampleTranslation: "Tren iptal edildi." }
    ]
};

const unit338Vocab: UnitVocabulary = {
    unitId: 338, title: "Havaalanında",
    words: [
        // İşlemler ve Fiiller (Edilgen Yapı İçin Önemli)
        { word: "L'enregistrement", meaning: "Check-in", pronunciation: "lan-rö-jistr-man", example: "L'enregistrement est ouvert.", exampleTranslation: "Check-in açık." },
        { word: "Enregistrer", meaning: "Kaydetmek/Check-in yapmak", pronunciation: "an-rö-jis-tre", example: "Les bagages sont enregistrés.", exampleTranslation: "Bagajlar kaydedildi. (Pasif)" },
        { word: "Embarquer", meaning: "Uçağa binmek", pronunciation: "an-bar-ke", example: "Les passagers embarquent.", exampleTranslation: "Yolcular uçağa biniyor." },
        { word: "Décoller", meaning: "Kalkmak (Uçak)", pronunciation: "de-ko-le", example: "L'avion va décoller.", exampleTranslation: "Uçak kalkacak." },
        { word: "Atterrir", meaning: "İnmek (Uçak)", pronunciation: "a-te-rir", example: "L'avion a atterri.", exampleTranslation: "Uçak indi." },
        { word: "Annuler", meaning: "İptal etmek", pronunciation: "a-nü-le", example: "Le vol est annulé.", exampleTranslation: "Uçuş iptal edildi. (Pasif)" },
        { word: "Retarder", meaning: "Ertelemek", pronunciation: "rö-tar-de", example: "Le vol est retardé.", exampleTranslation: "Uçuş ertelendi. (Pasif)" },

        // İnsanlar
        { word: "Le passager", meaning: "Yolcu", pronunciation: "lö-pa-sa-je", example: "Les passagers attendent.", exampleTranslation: "Yolcular bekliyor." },
        { word: "L'hôtesse de l'air", meaning: "Hostes", pronunciation: "lo-tes-dö-ler", example: "Demandez à l'hôtesse.", exampleTranslation: "Hostese sorun." },
        { word: "Le douanier", meaning: "Gümrük memuru", pronunciation: "lö-dua-nye", example: "Le douanier contrôle.", exampleTranslation: "Gümrük memuru kontrol ediyor." },
        { word: "Le pilote", meaning: "Pilot", pronunciation: "lö-pi-lot", example: "Le pilote est expérimenté.", exampleTranslation: "Pilot deneyimli." },

        // Yerler ve Eşyalar
        { word: "La porte d'embarquement", meaning: "Biniş kapısı", pronunciation: "la-port-dan-bark-man", example: "Porte numéro 4.", exampleTranslation: "4 numaralı kapı." },
        { word: "La carte d'embarquement", meaning: "Biniş kartı", pronunciation: "la-kart-dan-bark-man", example: "Montrez votre carte.", exampleTranslation: "Kartınızı gösterin." },
        { word: "Le bagage", meaning: "Bagaj", pronunciation: "lö-ba-gaj", example: "Un bagage à main.", exampleTranslation: "El bagajı." },
        { word: "La valise", meaning: "Bavul", pronunciation: "la-va-liz", example: "Ma valise est perdue.", exampleTranslation: "Bavulum kayıp." },
        { word: "Le contrôle de sécurité", meaning: "Güvenlik kontrolü", pronunciation: "lö-kon-trol-dö-se-kü-ri-te", example: "Passez par la sécurité.", exampleTranslation: "Güvenlikten geçin." },
        { word: "La douane", meaning: "Gümrük", pronunciation: "la-duan", example: "Rien à déclarer à la douane.", exampleTranslation: "Gümrükte bildirecek bir şey yok." },
        { word: "Le terminal", meaning: "Terminal", pronunciation: "lö-ter-mi-nal", example: "Terminal 2F.", exampleTranslation: "Terminal 2F." },
        { word: "L'écran", meaning: "Ekran", pronunciation: "le-kran", example: "Regardez l'écran.", exampleTranslation: "Ekrana bakın." },

        // Durumlar
        { word: "Le vol", meaning: "Uçuş", pronunciation: "lö-vol", example: "Bon vol!", exampleTranslation: "İyi uçuşlar!" },
        { word: "L'escale", meaning: "Aktarma/Mola", pronunciation: "les-kal", example: "Une escale à Paris.", exampleTranslation: "Paris'te aktarma." },
        { word: "Interdit", meaning: "Yasak", pronunciation: "en-ter-di", example: "C'est interdit.", exampleTranslation: "Bu yasak." },
        { word: "À l'heure", meaning: "Zamanında", pronunciation: "a-lör", example: "Le train est à l'heure.", exampleTranslation: "Tren zamanında." },
        { word: "Le visa", meaning: "Vize", pronunciation: "lö-vi-za", example: "Avez-vous un visa?", exampleTranslation: "Vizeniz var mı?" },
        { word: "Le siège", meaning: "Koltuk", pronunciation: "lö-syej", example: "Quel est votre siège?", exampleTranslation: "Koltuğunuz hangisi?" }
    ]
};

const unit339Vocab: UnitVocabulary = {
    unitId: 339, title: "Restoranda Sipariş", words: [
        { word: "Le menu", meaning: "Menü", pronunciation: "lö-mö-nü", example: "Le menu, s'il vous plaît.", exampleTranslation: "Menü lütfen." },
        { word: "L'entrée", meaning: "Başlangıç", pronunciation: "lan-tre", example: "Comme entrée, une soupe.", exampleTranslation: "Başlangıç olarak çorba." },
        { word: "Le plat principal", meaning: "Ana yemek", pronunciation: "lö-pla-pren-si-pal", example: "Quel est le plat du jour?", exampleTranslation: "Günün yemeği ne?" },
        { word: "Le dessert", meaning: "Tatlı", pronunciation: "lö-de-ser", example: "Comme dessert, une tarte.", exampleTranslation: "Tatlı olarak turta." },
        { word: "L'addition", meaning: "Hesap", pronunciation: "la-di-syon", example: "L'addition, s'il vous plaît.", exampleTranslation: "Hesap lütfen." },
        { word: "Commander", meaning: "Sipariş vermek", pronunciation: "ko-man-de", example: "Je voudrais commander.", exampleTranslation: "Sipariş vermek istiyorum." },
        { word: "Recommander", meaning: "Tavsiye etmek", pronunciation: "rö-ko-man-de", example: "Qu'est-ce que vous recommandez?", exampleTranslation: "Ne tavsiye edersiniz?" }
    ]
};

const unit340Vocab: UnitVocabulary = {
    unitId: 340, title: "Yemek Tarifi", words: [
        // Hazırlık Fiilleri (Emir kipi için ideal)
        { word: "Cuisiner", meaning: "Yemek pişirmek", pronunciation: "küi-zi-ne", example: "J'aime cuisiner.", exampleTranslation: "Yemek pişirmeyi severim." },
        { word: "Couper", meaning: "Kesmek/Doğramak", pronunciation: "ku-pe", example: "Coupez les oignons.", exampleTranslation: "Soğanları doğrayın." },
        { word: "Mélanger", meaning: "Karıştırmak", pronunciation: "me-lan-je", example: "Mélangez les œufs.", exampleTranslation: "Yumurtaları karıştırın." },
        { word: "Ajouter", meaning: "Eklemek", pronunciation: "a-ju-te", example: "Ajoutez du sel.", exampleTranslation: "Tuz ekleyin." },
        { word: "Verser", meaning: "Dökmek", pronunciation: "ver-se", example: "Versez de l'eau.", exampleTranslation: "Su dökün." },
        { word: "Éplucher", meaning: "Soymak", pronunciation: "e-plü-şe", example: "Épluchez les pommes de terre.", exampleTranslation: "Patatesleri soyun." },
        { word: "Cuire", meaning: "Pişirmek", pronunciation: "küir", example: "Faites cuire 20 minutes.", exampleTranslation: "20 dakika pişirin." },
        { word: "Servir", meaning: "Servis etmek", pronunciation: "ser-vir", example: "Servez chaud.", exampleTranslation: "Sıcak servis edin." },
        { word: "Goûter", meaning: "Tadına bakmak", pronunciation: "gu-te", example: "Goûtez la sauce.", exampleTranslation: "Sosun tadına bakın." },

        // Mutfak Eşyaları
        { word: "Le four", meaning: "Fırın", pronunciation: "lö-fur", example: "Mettez dans le four.", exampleTranslation: "Fırına koyun." },
        { word: "La casserole", meaning: "Tencere", pronunciation: "la-kas-rol", example: "Dans une casserole.", exampleTranslation: "Bir tencerede." },
        { word: "La poêle", meaning: "Tava", pronunciation: "la-pual", example: "Chauffez la poêle.", exampleTranslation: "Tavayı ısıtın." },
        { word: "Le couteau", meaning: "Bıçak", pronunciation: "lö-ku-to", example: "Attention au couteau.", exampleTranslation: "Bıçağa dikkat edin." },
        { word: "La cuillère", meaning: "Kaşık", pronunciation: "la-küi-yer", example: "Une cuillère de sucre.", exampleTranslation: "Bir kaşık şeker." },
        { word: "Le bol", meaning: "Kase", pronunciation: "lö-bol", example: "Un bol de riz.", exampleTranslation: "Bir kase pirinç." },

        // Malzemeler ve Tatlar
        { word: "La recette", meaning: "Tarif", pronunciation: "la-rö-set", example: "Suivez la recette.", exampleTranslation: "Tarifi takip edin." },
        { word: "L'ingrédient", meaning: "Malzeme", pronunciation: "len-gre-dyan", example: "Les ingrédients sont frais.", exampleTranslation: "Malzemeler taze." },
        { word: "Délicieux/Délicieuse", meaning: "Lezzetli", pronunciation: "de-li-syö", example: "C'est délicieux!", exampleTranslation: "Bu çok lezzetli!" },
        { word: "Salé", meaning: "Tuzlu", pronunciation: "sa-le", example: "C'est trop salé.", exampleTranslation: "Çok tuzlu." },
        { word: "Sucré", meaning: "Şekerli/Tatlı", pronunciation: "sü-kre", example: "J'aime le sucré.", exampleTranslation: "Tatlıyı severim." }
    ]
};

// ===== ÜNİTE 341-350 =====
const unit341Vocab: UnitVocabulary = {
    unitId: 341, title: "Alışveriş Diyaloğu", words: [
        { word: "Le prix", meaning: "Fiyat", pronunciation: "lö-pri", example: "Quel est le prix?", exampleTranslation: "Fiyatı ne?" },
        { word: "La réduction", meaning: "İndirim", pronunciation: "la-re-dük-syon", example: "Il y a une réduction.", exampleTranslation: "İndirim var." },
        { word: "Les soldes", meaning: "İndirimler", pronunciation: "le-sold", example: "C'est les soldes!", exampleTranslation: "İndirimler var!" },
        { word: "Moins cher", meaning: "Daha ucuz", pronunciation: "muen-şer", example: "C'est moins cher ici.", exampleTranslation: "Burası daha ucuz." },
        { word: "Cher/Chère", meaning: "Pahalı", pronunciation: "şer", example: "C'est trop cher.", exampleTranslation: "Çok pahalı." },
        { word: "Payer", meaning: "Ödemek", pronunciation: "pe-ye", example: "Je paie par carte.", exampleTranslation: "Kartla ödüyorum." }
    ]
};

const unit342Vocab: UnitVocabulary = {
    unitId: 342, title: "Kıyafet Alışverişi", words: [
        { word: "La taille", meaning: "Beden", pronunciation: "la-tay", example: "Quelle taille?", exampleTranslation: "Hangi beden?" },
        { word: "Essayer", meaning: "Denemek", pronunciation: "e-se-ye", example: "Je peux essayer?", exampleTranslation: "Deneyebilir miyim?" },
        { word: "La cabine d'essayage", meaning: "Giyinme kabini", pronunciation: "la-ka-bin-de-se-yaj", example: "Où est la cabine?", exampleTranslation: "Kabin nerede?" },
        { word: "Serré(e)", meaning: "Dar", pronunciation: "se-re", example: "C'est trop serré.", exampleTranslation: "Çok dar." },
        { word: "Large", meaning: "Geniş", pronunciation: "larj", example: "C'est trop large.", exampleTranslation: "Çok geniş." },
        { word: "Aller bien", meaning: "Yakışmak", pronunciation: "a-le-byan", example: "Ça vous va bien!", exampleTranslation: "Size çok yakışıyor!" }
    ]
};

const unit343Vocab: UnitVocabulary = {
    unitId: 343, title: "Ev İşleri", words: [
        { word: "Le ménage", meaning: "Temizlik", pronunciation: "lö-me-naj", example: "Je fais le ménage.", exampleTranslation: "Temizlik yapıyorum." },
        { word: "Ranger", meaning: "Toplamak", pronunciation: "ran-je", example: "Range ta chambre!", exampleTranslation: "Odanı topla!" },
        { word: "Nettoyer", meaning: "Temizlemek", pronunciation: "ne-tua-ye", example: "Je nettoie la cuisine.", exampleTranslation: "Mutfağı temizliyorum." },
        { word: "Laver", meaning: "Yıkamak", pronunciation: "la-ve", example: "Je lave la vaisselle.", exampleTranslation: "Bulaşık yıkıyorum." },
        { word: "Repasser", meaning: "Ütülemek", pronunciation: "rö-pa-se", example: "Je repasse les chemises.", exampleTranslation: "Gömlekleri ütülüyorum." },
        { word: "L'aspirateur", meaning: "Elektrik süpürgesi", pronunciation: "las-pi-ra-tör", example: "Je passe l'aspirateur.", exampleTranslation: "Süpürge çekiyorum." }
    ]
};

const unit344Vocab: UnitVocabulary = {
    unitId: 344, title: "Günlük Haberler", words: [
        { word: "Les actualités", meaning: "Haberler", pronunciation: "le-zak-tü-a-li-te", example: "Je regarde les actualités.", exampleTranslation: "Haberleri izliyorum." },
        { word: "Le journal", meaning: "Gazete", pronunciation: "lö-jur-nal", example: "Je lis le journal.", exampleTranslation: "Gazete okuyorum." },
        { word: "L'événement", meaning: "Olay", pronunciation: "le-ven-man", example: "C'est un grand événement.", exampleTranslation: "Büyük bir olay." },
        { word: "L'article", meaning: "Makale", pronunciation: "lar-tikl", example: "J'ai lu un article.", exampleTranslation: "Bir makale okudum." },
        { word: "Le titre", meaning: "Başlık", pronunciation: "lö-titr", example: "Le titre est intéressant.", exampleTranslation: "Başlık ilginç." }
    ]
};

const unit345Vocab: UnitVocabulary = {
    unitId: 345, title: "Televizyon Programları", words: [
        { word: "L'émission", meaning: "Program", pronunciation: "le-mi-syon", example: "Cette émission est bien.", exampleTranslation: "Bu program iyi." },
        { word: "La chaîne", meaning: "Kanal", pronunciation: "la-şen", example: "Quelle chaîne?", exampleTranslation: "Hangi kanal?" },
        { word: "La télécommande", meaning: "Kumanda", pronunciation: "la-te-le-ko-mand", example: "Où est la télécommande?", exampleTranslation: "Kumanda nerede?" },
        { word: "Le documentaire", meaning: "Belgesel", pronunciation: "lö-do-kü-man-ter", example: "Je regarde un documentaire.", exampleTranslation: "Belgesel izliyorum." },
        { word: "La série", meaning: "Dizi", pronunciation: "la-se-ri", example: "J'adore cette série.", exampleTranslation: "Bu diziye bayılıyorum." }
    ]
};

const unit346Vocab: UnitVocabulary = {
    unitId: 346, title: "Sinema ve Filmler", words: [
        { word: "Le film", meaning: "Film", pronunciation: "lö-film", example: "Le film était super.", exampleTranslation: "Film harikaydı." },
        { word: "L'acteur/L'actrice", meaning: "Oyuncu", pronunciation: "lak-tör/lak-tris", example: "L'actrice est célèbre.", exampleTranslation: "Oyuncu ünlü." },
        { word: "Le réalisateur", meaning: "Yönetmen", pronunciation: "lö-re-a-li-za-tör", example: "Qui est le réalisateur?", exampleTranslation: "Yönetmen kim?" },
        { word: "La séance", meaning: "Seans", pronunciation: "la-se-ans", example: "La séance de 20h.", exampleTranslation: "Saat 20 seansı." },
        { word: "Les sous-titres", meaning: "Altyazı", pronunciation: "le-su-titr", example: "Avec sous-titres.", exampleTranslation: "Altyazılı." }
    ]
};

const unit347Vocab: UnitVocabulary = {
    unitId: 347, title: "Müzik Zevkleri", words: [
        { word: "La chanson", meaning: "Şarkı", pronunciation: "la-şan-son", example: "J'aime cette chanson.", exampleTranslation: "Bu şarkıyı seviyorum." },
        { word: "Le concert", meaning: "Konser", pronunciation: "lö-kon-ser", example: "Je vais au concert.", exampleTranslation: "Konsere gidiyorum." },
        { word: "L'album", meaning: "Albüm", pronunciation: "lal-bom", example: "Le nouvel album.", exampleTranslation: "Yeni albüm." },
        { word: "Le chanteur", meaning: "Şarkıcı", pronunciation: "lö-şan-tör", example: "Mon chanteur préféré.", exampleTranslation: "En sevdiğim şarkıcı." },
        { word: "Le groupe", meaning: "Grup", pronunciation: "lö-grup", example: "Un groupe de rock.", exampleTranslation: "Rock grubu." }
    ]
};

const unit348Vocab: UnitVocabulary = {
    unitId: 348, title: "Spor Aktiviteleri", words: [
        { word: "L'entraînement", meaning: "Antrenman", pronunciation: "lan-tren-man", example: "J'ai un entraînement.", exampleTranslation: "Antrenmanım var." },
        { word: "Le match", meaning: "Maç", pronunciation: "lö-maç", example: "Le match commence.", exampleTranslation: "Maç başlıyor." },
        { word: "Gagner", meaning: "Kazanmak", pronunciation: "ga-nye", example: "On va gagner!", exampleTranslation: "Kazanacağız!" },
        { word: "Perdre", meaning: "Kaybetmek", pronunciation: "perdr", example: "On a perdu.", exampleTranslation: "Kaybettik." },
        { word: "L'équipe", meaning: "Takım", pronunciation: "le-kip", example: "Notre équipe est forte.", exampleTranslation: "Takımımız güçlü." }
    ]
};

const unit349Vocab: UnitVocabulary = {
    unitId: 349, title: "Doğa Gezisi", words: [
        { word: "La randonnée", meaning: "Yürüyüş", pronunciation: "la-ran-do-ne", example: "Je fais une randonnée.", exampleTranslation: "Yürüyüş yapıyorum." },
        { word: "Le sentier", meaning: "Patika", pronunciation: "lö-san-tye", example: "Suivez le sentier.", exampleTranslation: "Patikayı takip edin." },
        { word: "La forêt", meaning: "Orman", pronunciation: "la-fo-re", example: "La forêt est belle.", exampleTranslation: "Orman güzel." },
        { word: "Le lac", meaning: "Göl", pronunciation: "lö-lak", example: "On va au lac.", exampleTranslation: "Göle gidiyoruz." },
        { word: "La tente", meaning: "Çadır", pronunciation: "la-tant", example: "On monte la tente.", exampleTranslation: "Çadır kuruyoruz." }
    ]
};

const unit350Vocab: UnitVocabulary = {
    unitId: 350, title: "Arkadaş Buluşması", words: [
        { word: "Le rendez-vous", meaning: "Randevu/Buluşma", pronunciation: "lö-ran-de-vu", example: "On a rendez-vous à 15h.", exampleTranslation: "Saat 15'te buluşuyoruz." },
        { word: "Se retrouver", meaning: "Buluşmak", pronunciation: "sö-rö-tru-ve", example: "On se retrouve où?", exampleTranslation: "Nerede buluşalım?" },
        { word: "Proposer", meaning: "Teklif etmek", pronunciation: "pro-po-ze", example: "Je te propose un café.", exampleTranslation: "Sana kahve teklif ediyorum." },
        { word: "Accepter", meaning: "Kabul etmek", pronunciation: "ak-sep-te", example: "J'accepte avec plaisir.", exampleTranslation: "Memnuniyetle kabul ediyorum." },
        { word: "Refuser", meaning: "Reddetmek", pronunciation: "rö-fü-ze", example: "Je dois refuser.", exampleTranslation: "Reddetmek zorundayım." }
    ]
};

// ===== ÜNİTE 351-360 =====
const unit351Vocab: UnitVocabulary = {
    unitId: 351, title: "Telefon Görüşmesi", words: [
        { word: "Appeler", meaning: "Aramak", pronunciation: "a-pö-le", example: "Je t'appelle demain.", exampleTranslation: "Yarın seni arıyorum." },
        { word: "Rappeler", meaning: "Geri aramak", pronunciation: "ra-pö-le", example: "Je vous rappelle.", exampleTranslation: "Sizi geri arayacağım." },
        { word: "Laisser un message", meaning: "Mesaj bırakmak", pronunciation: "le-se-ön-me-saj", example: "Laissez un message.", exampleTranslation: "Mesaj bırakın." },
        { word: "Décrocher", meaning: "Açmak", pronunciation: "de-kro-şe", example: "Décrochez le téléphone.", exampleTranslation: "Telefonu açın." },
        { word: "Raccrocher", meaning: "Kapatmak", pronunciation: "ra-kro-şe", example: "Ne raccrochez pas.", exampleTranslation: "Kapatmayın." }
    ]
};

const unit352Vocab: UnitVocabulary = {
    unitId: 352, title: "Davet Etme", words: [
        { word: "L'invitation", meaning: "Davet", pronunciation: "len-vi-ta-syon", example: "Merci pour l'invitation.", exampleTranslation: "Davet için teşekkürler." },
        { word: "Inviter", meaning: "Davet etmek", pronunciation: "en-vi-te", example: "Je t'invite à dîner.", exampleTranslation: "Seni yemeğe davet ediyorum." },
        { word: "La fête", meaning: "Parti", pronunciation: "la-fet", example: "C'est une fête surprise.", exampleTranslation: "Sürpriz parti." },
        { word: "L'anniversaire", meaning: "Doğum günü", pronunciation: "la-ni-ver-ser", example: "Joyeux anniversaire!", exampleTranslation: "Doğum günün kutlu olsun!" }
    ]
};

const unit353Vocab: UnitVocabulary = {
    unitId: 353, title: "Özür Dileme", words: [
        { word: "S'excuser", meaning: "Özür dilemek", pronunciation: "seks-kü-ze", example: "Je m'excuse.", exampleTranslation: "Özür dilerim." },
        { word: "Pardonner", meaning: "Affetmek", pronunciation: "par-do-ne", example: "Pardonnez-moi.", exampleTranslation: "Beni affedin." },
        { word: "L'empêchement", meaning: "Engel", pronunciation: "lan-peş-man", example: "J'ai un empêchement.", exampleTranslation: "Bir engelim var." },
        { word: "Annuler", meaning: "İptal etmek", pronunciation: "a-nü-le", example: "Je dois annuler.", exampleTranslation: "İptal etmem gerekiyor." }
    ]
};

const unit354Vocab: UnitVocabulary = {
    unitId: 354, title: "Yol Tarifi", words: [
        { word: "Tourner", meaning: "Dönmek", pronunciation: "tur-ne", example: "Tournez à gauche.", exampleTranslation: "Sola dönün." },
        { word: "Continuer", meaning: "Devam etmek", pronunciation: "kon-ti-nü-e", example: "Continuez tout droit.", exampleTranslation: "Düz devam edin." },
        { word: "Le carrefour", meaning: "Kavşak", pronunciation: "lö-kar-fur", example: "Au carrefour.", exampleTranslation: "Kavşakta." },
        { word: "Le feu", meaning: "Trafik ışığı", pronunciation: "lö-fö", example: "Après le feu.", exampleTranslation: "Işıklardan sonra." }
    ]
};

const unit355Vocab: UnitVocabulary = {
    unitId: 355, title: "Şehir Tanıtımı", words: [
        { word: "Le monument", meaning: "Anıt", pronunciation: "lö-mo-nü-man", example: "Visitez le monument.", exampleTranslation: "Anıtı ziyaret edin." },
        { word: "Le quartier", meaning: "Semt", pronunciation: "lö-kar-tye", example: "Un beau quartier.", exampleTranslation: "Güzel bir semt." },
        { word: "La place", meaning: "Meydan", pronunciation: "la-plas", example: "La place centrale.", exampleTranslation: "Ana meydan." },
        { word: "Célèbre", meaning: "Ünlü", pronunciation: "se-lebr", example: "Une ville célèbre.", exampleTranslation: "Ünlü bir şehir." }
    ]
};

const unit356Vocab: UnitVocabulary = {
    unitId: 356, title: "Kültürel Farklar", words: [
        { word: "La coutume", meaning: "Gelenek", pronunciation: "la-ku-tüm", example: "Les coutumes locales.", exampleTranslation: "Yerel gelenekler." },
        { word: "La tradition", meaning: "Gelenek", pronunciation: "la-tra-di-syon", example: "Une belle tradition.", exampleTranslation: "Güzel bir gelenek." },
        { word: "L'habitude", meaning: "Alışkanlık", pronunciation: "la-bi-tüd", example: "C'est une habitude.", exampleTranslation: "Bu bir alışkanlık." },
        { word: "Différent(e)", meaning: "Farklı", pronunciation: "di-fe-ran", example: "C'est très différent.", exampleTranslation: "Çok farklı." }
    ]
};

const unit357Vocab: UnitVocabulary = {
    unitId: 357, title: "Eğitim Hayatı", words: [
        { word: "Le diplôme", meaning: "Diploma", pronunciation: "lö-di-plom", example: "J'ai obtenu mon diplôme.", exampleTranslation: "Diplomamı aldım." },
        { word: "L'examen", meaning: "Sınav", pronunciation: "leg-za-men", example: "J'ai passé l'examen.", exampleTranslation: "Sınava girdim." },
        { word: "Réussir", meaning: "Başarmak/Geçmek", pronunciation: "re-ü-sir", example: "J'ai réussi l'examen.", exampleTranslation: "Sınavı geçtim." },
        { word: "Échouer", meaning: "Başarısız olmak", pronunciation: "e-şu-e", example: "J'ai échoué.", exampleTranslation: "Kaldım." }
    ]
};

const unit358Vocab: UnitVocabulary = {
    unitId: 358, title: "İş Hayatı", words: [
        { word: "L'emploi", meaning: "İş", pronunciation: "lan-plua", example: "Je cherche un emploi.", exampleTranslation: "İş arıyorum." },
        { word: "Le CV", meaning: "Özgeçmiş", pronunciation: "lö-se-ve", example: "Envoyez votre CV.", exampleTranslation: "CV'nizi gönderin." },
        { word: "L'entretien", meaning: "Mülakat", pronunciation: "lan-trö-tyen", example: "J'ai un entretien.", exampleTranslation: "Mülakatım var." },
        { word: "Le salaire", meaning: "Maaş", pronunciation: "lö-sa-ler", example: "Quel est le salaire?", exampleTranslation: "Maaş ne kadar?" }
    ]
};

const unit359Vocab: UnitVocabulary = {
    unitId: 359, title: "Teknoloji Kullanımı", words: [
        { word: "L'application", meaning: "Uygulama", pronunciation: "lap-li-ka-syon", example: "Téléchargez l'application.", exampleTranslation: "Uygulamayı indirin." },
        { word: "Le mot de passe", meaning: "Şifre", pronunciation: "lö-mo-dö-pas", example: "Entrez le mot de passe.", exampleTranslation: "Şifreyi girin." },
        { word: "Se connecter", meaning: "Bağlanmak", pronunciation: "sö-ko-nek-te", example: "Je me connecte.", exampleTranslation: "Bağlanıyorum." },
        { word: "Partager", meaning: "Paylaşmak", pronunciation: "par-ta-je", example: "Je partage la photo.", exampleTranslation: "Fotoğrafı paylaşıyorum." }
    ]
};

const unit360Vocab: UnitVocabulary = {
    unitId: 360, title: "A2 Genel Tekrar", words: [
        { word: "Bravo", meaning: "Aferin", pronunciation: "bra-vo", example: "Bravo, vous avez réussi!", exampleTranslation: "Aferin, başardınız!" },
        { word: "Félicitations", meaning: "Tebrikler", pronunciation: "fe-li-si-ta-syon", example: "Félicitations!", exampleTranslation: "Tebrikler!" },
        { word: "Continuer", meaning: "Devam etmek", pronunciation: "kon-ti-nü-e", example: "Continuez à apprendre!", exampleTranslation: "Öğrenmeye devam edin!" },
        { word: "Pratiquer", meaning: "Pratik yapmak", pronunciation: "pra-ti-ke", example: "Il faut pratiquer.", exampleTranslation: "Pratik yapmak lazım." }
    ]
};

// Export
export const frenchA2Vocabulary: UnitVocabulary[] = [
    unit331Vocab, unit332Vocab, unit333Vocab, unit334Vocab, unit335Vocab,
    unit336Vocab, unit337Vocab, unit338Vocab, unit339Vocab, unit340Vocab,
    unit341Vocab, unit342Vocab, unit343Vocab, unit344Vocab, unit345Vocab,
    unit346Vocab, unit347Vocab, unit348Vocab, unit349Vocab, unit350Vocab,
    unit351Vocab, unit352Vocab, unit353Vocab, unit354Vocab, unit355Vocab,
    unit356Vocab, unit357Vocab, unit358Vocab, unit359Vocab, unit360Vocab
];

export function getFrenchA2VocabularyForUnit(unitId: number): UnitVocabulary | undefined {
    return frenchA2Vocabulary.find(v => v.unitId === unitId);
}
