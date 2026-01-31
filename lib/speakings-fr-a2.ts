
// SteadyShell Konuşma Pratikleri - Fransızca A2 (331-360)
// Her ünite için 10 konuşma alıştırması

interface SpeakingExercise {
    text: string;
    translation: string;
    pronunciation: string;
}

interface UnitSpeaking {
    unitId: number;
    title: string;
    exercises: SpeakingExercise[];
}

// ===== ÜNİTE 331: GEÇMİŞ TATİLLER =====
const unit331Speaking: UnitSpeaking = {
    unitId: 331, title: "Tatil Anlatımı", exercises: [
        { text: "J'ai passé de bonnes vacances.", translation: "Güzel tatil geçirdim.", pronunciation: "je pa-se dö bon va-kans" },
        { text: "Nous avons visité beaucoup de sites.", translation: "Çok yer gezdik.", pronunciation: "nu za-von vi-zi-te bo-ku dö sit" },
        { text: "C'était magnifique!", translation: "Harikaydı!", pronunciation: "se-te ma-nyi-fik" },
        { text: "Je me suis bien amusé.", translation: "Çok eğlendim.", pronunciation: "jö mö süi byan a-mü-ze" },
        { text: "Le temps était parfait.", translation: "Hava mükemmeldi.", pronunciation: "lö tan ze-te par-fe" },
        { text: "On a pris beaucoup de photos.", translation: "Çok fotoğraf çektik.", pronunciation: "on a pri bo-ku dö fo-to" },
        { text: "J'ai découvert une belle région.", translation: "Güzel bir bölge keşfettim.", pronunciation: "je de-ku-ver ün bel re-jyon" },
        { text: "La plage était superbe.", translation: "Plaj harikaydı.", pronunciation: "la plaj e-te sü-perb" },
        { text: "Nous avons loué une voiture pour voyager.", translation: "Seyahat etmek için araba kiraladık.", pronunciation: "nu za-von lu-e ün vua-tür pur vua-ya-je" },
        { text: "C'était une expérience inoubliable.", translation: "Unutulmaz bir deneyimdi.", pronunciation: "se-te tün eks-pe-ryans i-nu-bli-yabl" }
    ]
};

const unit332Speaking: UnitSpeaking = {
    unitId: 332, title: "Plan Yapma", exercises: [
        { text: "Je vais voyager cet été.", translation: "Bu yaz seyahat edeceğim.", pronunciation: "jö ve vua-ya-je set e-te" },
        { text: "Nous allons partir en vacances.", translation: "Tatile gideceğiz.", pronunciation: "nu za-lon par-tir an va-kans" },
        { text: "J'ai l'intention de visiter Paris.", translation: "Paris'i ziyaret etme niyetindeyim.", pronunciation: "je lan-tan-syon dö vi-zi-te pa-ri" },
        { text: "J'espère que le temps sera beau.", translation: "Umarım hava güzel olur.", pronunciation: "jes-per kö lö tan sö-ra bo" },
        { text: "Ce sera formidable!", translation: "Harika olacak!", pronunciation: "sö sö-ra for-mi-dabl" },
        { text: "J'ai hâte d'y aller.", translation: "Oraya gitmek için sabırsızlanıyorum.", pronunciation: "je at di a-le" },
        { text: "Je prévois de rester deux semaines.", translation: "İki hafta kalmayı planlıyorum.", pronunciation: "jö pre-vua dö res-te dö sö-men" },
        { text: "Quels sont vos projets pour l'avenir?", translation: "Gelecek için planlarınız neler?", pronunciation: "kel son vo pro-je pur lav-nir" },
        { text: "Nous allons organiser une grande fête.", translation: "Büyük bir parti organize edeceğiz.", pronunciation: "nu za-lon or-ga-ni-ze ün grand fet" },
        { text: "Je compte apprendre le français.", translation: "Fransızca öğrenmeyi düşünüyorum (planlıyorum).", pronunciation: "jö kont a-prandr lö fran-se" }
    ]
};

const unit333Speaking: UnitSpeaking = {
    unitId: 333, title: "Doktor Ziyareti", exercises: [
        // Şikayet cümleleri
        { text: "Je ne me sens pas bien.", translation: "Kendimi iyi hissetmiyorum.", pronunciation: "jö nö mö san pa byan" },
        { text: "Je suis malade.", translation: "Hastayım.", pronunciation: "jö süi ma-lad" },
        { text: "J'ai mal à la tête.", translation: "Başım ağrıyor.", pronunciation: "je mal a la tet" },
        { text: "J'ai mal à la gorge.", translation: "Boğazım ağrıyor.", pronunciation: "je mal a la gorj" },
        { text: "J'ai mal au ventre.", translation: "Karnım ağrıyor.", pronunciation: "je mal o vantr" },
        { text: "J'ai mal au dos.", translation: "Sırtım ağrıyor.", pronunciation: "je mal o do" },
        { text: "J'ai de la fièvre.", translation: "Ateşim var.", pronunciation: "je dö la fyevr" },
        { text: "Je tousse beaucoup.", translation: "Çok öksürüyorum.", pronunciation: "jö tus bo-ku" },
        // Doktor cümleleri
        { text: "Depuis quand êtes-vous malade?", translation: "Ne zamandır hastasınız?", pronunciation: "dö-püi kan et vu ma-lad" },
        { text: "Où avez-vous mal?", translation: "Nerede ağrınız var?", pronunciation: "u a-ve vu mal" },
        // Tavsiyeler (Il faut + Devoir)
        { text: "Il faut vous reposer.", translation: "Dinlenmeniz lazım.", pronunciation: "il fo vu rö-po-ze" },
        { text: "Vous devez prendre ce médicament.", translation: "Bu ilacı almalısınız.", pronunciation: "vu dö-ve prandr sö me-di-ka-man" },
        { text: "Vous devez boire beaucoup d'eau.", translation: "Çok su içmelisiniz.", pronunciation: "vu dö-ve buar bo-ku do" },
        { text: "Prenez ce médicament trois fois par jour.", translation: "Bu ilacı günde üç kez alın.", pronunciation: "prö-ne sö me-di-ka-man trua fua par jur" },
        { text: "Vous allez guérir bientôt.", translation: "Yakında iyileşeceksiniz.", pronunciation: "vu za-le ge-rir byan-to" }
    ]
};


const unit334Speaking: UnitSpeaking = {
    unitId: 334, title: "Banka İşlemleri", exercises: [
        { text: "Je voudrais ouvrir un compte.", translation: "Hesap açmak rica ediyorum.", pronunciation: "jö vu-dre uv-rir ön kont" },
        { text: "J'aimerais parler au directeur.", translation: "Müdürle konuşmak isterdim.", pronunciation: "je-mö-re par-le o di-rek-tör" },
        { text: "Pourriez-vous m'aider s'il vous plaît?", translation: "Bana yardım edebilir miydiniz lütfen?", pronunciation: "pu-rye vu me-de sil vu ple" },
        { text: "Je voudrais faire un virement.", translation: "Havale yapmak istiyorum.", pronunciation: "jö vu-dre fer ön vir-man" },
        { text: "Pourriez-vous vérifier mon solde?", translation: "Bakiyemi kontrol edebilir misiniz?", pronunciation: "pu-rye vu ve-ri-fye mon sold" },
        { text: "Est-ce que je peux retirer de l'argent?", translation: "Para çekebilir miyim?", pronunciation: "es kö jö pö rö-ti-re dö lar-jan" },
        { text: "J'aimerais demander une carte de crédit.", translation: "Kredi kartı istemek isterdim.", pronunciation: "je-mö-re dö-man-de ün kart dö kre-di" },
        { text: "Où est le distributeur le plus proche?", translation: "En yakın ATM nerede?", pronunciation: "u e lö dis-tri-bü-tör lö plü proş" },
        { text: "Ma carte a été avalée par le distributeur.", translation: "Kartım ATM tarafından yutuldu.", pronunciation: "ma kart a e-te a-va-le par lö dis-tri-bü-tör" },
        { text: "Je voudrais changer des euros en dollars.", translation: "Euroları dolara çevirmek istiyorum.", pronunciation: "jö vu-dre şan-je de zö-ro an do-lar" }
    ]
};

const unit335Speaking: UnitSpeaking = {
    unitId: 335, title: "Posta ve Miktarlar", exercises: [
        { text: "Je voudrais envoyer ce colis.", translation: "Bu koliyi göndermek istiyorum.", pronunciation: "jö vu-dre an-vua-ye sö ko-li" },
        { text: "Combien de timbres voulez-vous?", translation: "Kaç pul istiyorsunuz?", pronunciation: "kom-byan dö tanbr vu-le vu" },
        { text: "J'ai beaucoup de lettres à envoyer.", translation: "Gönderecek çok mektubum var.", pronunciation: "je bo-ku dö letr a an-vua-ye" },
        { text: "Il y a trop de monde ici.", translation: "Burada çok fazla insan var.", pronunciation: "il ya tro dö mond i-si" },
        { text: "Je voudrais un peu de temps.", translation: "Biraz zaman rica ediyorum.", pronunciation: "jö vu-dre ön pö dö tan" },
        { text: "C'est un paquet de livres.", translation: "Bu bir kitap paketi.", pronunciation: "se tön pa-ke dö livr" },
        { text: "Je voudrais une bouteille d'eau.", translation: "Bir şişe su rica ediyorum.", pronunciation: "jö vu-dre ün bu-tey do" },
        { text: "Est-ce que c'est urgent?", translation: "Acil mi?", pronunciation: "es kö se tür-jan" },
        { text: "Je voudrais l'envoyer en recommandé.", translation: "Taahhütlü göndermek istiyorum.", pronunciation: "jö vu-dre lan-vua-ye an rö-ko-man-de" },
        { text: "Quel est le tarif pour l'étranger?", translation: "Yurtdışı tarifesi nedir?", pronunciation: "kel e lö ta-rif pur le-tran-je" }
    ]
};

const unit336Speaking: UnitSpeaking = {
    unitId: 336, title: "Otel ve Koşullar", exercises: [
        { text: "J'ai une réservation au nom de Martin.", translation: "Martin adına rezervasyonum var.", pronunciation: "je ün re-zer-va-syon o nom dö mar-ten" },
        { text: "Je voudrais une chambre calme.", translation: "Sessiz bir oda istiyorum.", pronunciation: "jö vu-dre ün şanbr kalm" },
        { text: "Si vous payez maintenant, c'est moins cher.", translation: "Şimdi öderseniz daha ucuz.", pronunciation: "si vu pe-ye men-te-nan se muen şer" },
        { text: "S'il fait chaud, allumez la climatisation.", translation: "Hava sıcaksa klimayı açın.", pronunciation: "sil fe şo a-lü-me la kli-ma-ti-za-syon" },
        { text: "Si je reste trois nuits, quel est le prix?", translation: "Üç gece kalırsam fiyat nedir?", pronunciation: "si jö rest trua nüi kel e lö pri" },
        { text: "Si la chambre n'est pas prête, j'attends.", translation: "Oda hazır değilse beklerim.", pronunciation: "si la şanbr ne pa pret ja-tan" },
        { text: "Je confirme la réservation si c'est possible.", translation: "Mümkünse rezervasyonu onaylıyorum.", pronunciation: "jö kon-firm la re-zer-va-syon si se po-sibl" },
        { text: "Est-ce que le petit-déjeuner est inclus?", translation: "Kahvaltı dahil mi?", pronunciation: "es kö lö pö-ti de-jö-ne e ten-klü" },
        { text: "S'il y a un problème, appelez la réception.", translation: "Sorun olursa resepsiyonu arayın.", pronunciation: "sil ya ön prob-lem a-pö-le la re-sep-syon" },
        { text: "Je voudrais annuler ma réservation.", translation: "Rezervasyonumu iptal etmek istiyorum.", pronunciation: "jö vu-dre a-nü-le ma re-zer-va-syon" }
    ]
};

const unit337Speaking: UnitSpeaking = {
    unitId: 337, title: "Tren Bileti Alma", exercises: [
        { text: "Un aller-retour pour Paris, s'il vous plaît.", translation: "Paris'e gidiş-dönüş lütfen.", pronunciation: "ön a-le rö-tur pur pa-ri sil vu ple" },
        { text: "À quelle heure part le prochain train?", translation: "Bir sonraki tren saat kaçta?", pronunciation: "a kel ör par lö pro-şen tren" },
        { text: "Pouvez-vous valider mon billet?", translation: "Biletimi onaylayabilir misiniz?", pronunciation: "pu-ve vu va-li-de mon bi-ye" },
        { text: "De quel quai part le train pour Lyon?", translation: "Lyon treni hangi perondan kalkıyor?", pronunciation: "dö kel ke par lö tren pur li-yon" },
        { text: "Y a-t-il une correspondance à Nice?", translation: "Nice'te aktarma var mı?", pronunciation: "ya til ün ko-res-pon-dans a nis" },
        { text: "Le train a dix minutes de retard.", translation: "Tren on dakika gecikmeli.", pronunciation: "lö tren a di mi-nüt dö rö-tar" },
        { text: "Puis-je avoir un horaire?", translation: "Tarife alabilir miyim?", pronunciation: "püi jö a-vuar ön o-rer" },
        { text: "Avez-vous des réductions pour les étudiants?", translation: "Öğrenciler için indiriminiz var mı?", pronunciation: "a-ve vu de re-dük-syon pur le ze-tüd-yan" },
        { text: "Attention à la fermeture des portes.", translation: "Kapıların kapanmasına dikkat edin.", pronunciation: "a-tan-syon a la fer-mö-tür de port" },
        { text: "Je voudrais réserver une place assise.", translation: "Oturacak bir yer ayırtmak istiyorum.", pronunciation: "jö vu-dre re-zer-ve ün plas a-siz" }
    ]
};

const unit338Speaking: UnitSpeaking = {
    unitId: 338, title: "Havaalanı", exercises: [
        { text: "Le vol a été annulé à cause de la tempête.", translation: "Uçuş fırtına yüzünden iptal edildi.", pronunciation: "lö vol a e-te a-nü-le a koz dö la tan-pet" },
        { text: "Vos bagages sont enregistrés maintenant.", translation: "Bagajlarınız şimdi kaydedildi.", pronunciation: "vo ba-gaj son an-rö-jis-tre men-te-nan" },
        { text: "La porte d'embarquement a été changée.", translation: "Biniş kapısı değiştirildi.", pronunciation: "la port dan-bark-man a e-te şan-je" },
        { text: "Les passagers sont priés de se présenter porte 10.", translation: "Yolcuların 10 numaralı kapıya gelmesi rica olunur.", pronunciation: "le pa-sa-je son pri-ye dö sö pre-zan-te port diz" },
        { text: "Où est le comptoir d'enregistrement?", translation: "Check-in bankosu nerede?", pronunciation: "u e lö kon-tuar dan-rö-jistr-man" },
        { text: "J'ai perdu ma carte d'embarquement.", translation: "Biniş kartımı kaybettim.", pronunciation: "je per-dü ma kart dan-bark-man" },
        { text: "L'avion va décoller dans dix minutes.", translation: "Uçak on dakika içinde kalkacak.", pronunciation: "la-vyon va de-ko-le dan di mi-nüt" },
        { text: "Je voudrais une place côté hublot.", translation: "Pencere kenarı bir yer istiyorum.", pronunciation: "jö vu-dre ün plas ko-te üb-lo" },
        { text: "Est-ce que le vol est à l'heure?", translation: "Uçuş zamanında mı?", pronunciation: "es kö lö vol e a lör" },
        { text: "Nous avons atterri à Paris.", translation: "Paris'e indik.", pronunciation: "nu za-von a-te-ri a pa-ri" }
    ]
};

const unit339Speaking: UnitSpeaking = {
    unitId: 339, title: "Restoran Siparişi", exercises: [
        { text: "Le menu, s'il vous plaît.", translation: "Menü lütfen.", pronunciation: "lö mö-nü sil vu ple" },
        { text: "Qu'est-ce que vous recommandez?", translation: "Ne tavsiye edersiniz?", pronunciation: "kes kö vu rö-ko-man-de" },
        { text: "Je voudrais le plat du jour.", translation: "Günün yemeğini istiyorum.", pronunciation: "jö vu-dre lö pla dü jur" },
        { text: "L'addition, s'il vous plaît.", translation: "Hesap lütfen.", pronunciation: "la-di-syon sil vu ple" },
        { text: "C'est délicieux!", translation: "Çok lezzetli!", pronunciation: "se de-li-syö" }
    ]
};

const unit340Speaking: UnitSpeaking = {
    unitId: 340, title: "Tarif Anlatma", exercises: [
        { text: "Mange ta soupe !", translation: "Çorbanı iç/ye! (Tu - S yok)", pronunciation: "manj ta sup" },
        { text: "Allons dans la cuisine !", translation: "Mutfağa gidelim! (Nous)", pronunciation: "a-lon dan la küi-zin" },
        { text: "Coupez le pain, s'il vous plaît.", translation: "Ekmeği kesin lütfen. (Vous)", pronunciation: "ku-pe lö pen sil vu ple" },
        { text: "Ne touche pas le four !", translation: "Fırına dokunma! (Negatif)", pronunciation: "nö tuş pa lö fur" },
        { text: "Lave-toi les mains.", translation: "Ellerini yıka. (Dönüşlü)", pronunciation: "lav tua le men" },
        { text: "Sois prudent avec le couteau.", translation: "Bıçakla dikkatli ol. (Être - düzensiz)", pronunciation: "sua prü-dan a-vek lö ku-to" },
        { text: "Aie de la patience.", translation: "Sabırlı ol. (Avoir - düzensiz)", pronunciation: "ey dö la pa-syans" },
        { text: "Ne parle pas la bouche pleine.", translation: "Ağzın doluyken konuşma.", pronunciation: "nö parl pa la buş plen" },
        { text: "Goûte cette sauce.", translation: "Bu sosun tadına bak.", pronunciation: "gut set sos" },
        { text: "Bon appétit à tous !", translation: "Herkese afiyet olsun!", pronunciation: "bo na-pe-ti a tus" }
    ]
};

// ===== Üniteler 341-360 (Kısa format) =====
const unit341Speaking: UnitSpeaking = {
    unitId: 341, title: "Fiyat Sorma", exercises: [
        { text: "C'est combien?", translation: "Ne kadar?", pronunciation: "se kom-byan" },
        { text: "C'est trop cher.", translation: "Çok pahalı.", pronunciation: "se tro şer" },
        { text: "Vous avez moins cher?", translation: "Daha ucuz var mı?", pronunciation: "vu za-ve muen şer" }
    ]
};

const unit342Speaking: UnitSpeaking = {
    unitId: 342, title: "Deneme", exercises: [
        { text: "Je peux essayer?", translation: "Deneyebilir miyim?", pronunciation: "jö pö e-se-ye" },
        { text: "Ça vous va très bien!", translation: "Size çok yakışıyor!", pronunciation: "sa vu va tre byan" }
    ]
};

const unit343Speaking: UnitSpeaking = {
    unitId: 343, title: "Temizlik", exercises: [
        { text: "Je viens de faire le ménage.", translation: "Az önce temizlik yaptım.", pronunciation: "jö vyen dö fer lö me-naj" },
        { text: "Range ta chambre!", translation: "Odanı topla!", pronunciation: "ranj ta şanbr" }
    ]
};

const unit344Speaking: UnitSpeaking = {
    unitId: 344, title: "Haber", exercises: [
        { text: "Tu as vu les infos?", translation: "Haberleri gördün mü?", pronunciation: "tü a vü le zen-fo" },
        { text: "Qu'est-ce qui s'est passé?", translation: "Ne oldu?", pronunciation: "kes ki se pa-se" }
    ]
};

const unit345Speaking: UnitSpeaking = {
    unitId: 345, title: "TV", exercises: [
        { text: "Qu'est-ce qu'il y a à la télé?", translation: "TV'de ne var?", pronunciation: "kes kil ya a la te-le" },
        { text: "Change de chaîne.", translation: "Kanal değiştir.", pronunciation: "şanj dö şen" }
    ]
};

const unit346Speaking: UnitSpeaking = {
    unitId: 346, title: "Film", exercises: [
        { text: "On va au cinéma?", translation: "Sinemaya gidelim mi?", pronunciation: "on va o si-ne-ma" },
        { text: "C'était un bon film.", translation: "Güzel bir filmdi.", pronunciation: "se-te tön bon film" }
    ]
};

const unit347Speaking: UnitSpeaking = {
    unitId: 347, title: "Müzik", exercises: [
        { text: "Quel genre de musique aimes-tu?", translation: "Ne tür müzik seversin?", pronunciation: "kel janr dö mü-zik em tü" },
        { text: "J'écoute du jazz depuis toujours.", translation: "Her zaman caz dinlerim.", pronunciation: "je-kut dü jaz dö-püi tu-jur" }
    ]
};

const unit348Speaking: UnitSpeaking = {
    unitId: 348, title: "Spor", exercises: [
        { text: "Tu fais du sport?", translation: "Spor yapıyor musun?", pronunciation: "tü fe dü spor" },
        { text: "On a gagné le match!", translation: "Maçı kazandık!", pronunciation: "on a ga-nye lö maç" }
    ]
};

const unit349Speaking: UnitSpeaking = {
    unitId: 349, title: "Doğa", exercises: [
        { text: "On fait une randonnée?", translation: "Yürüyüşe çıkalım mı?", pronunciation: "on fe ün ran-do-ne" },
        { text: "La vue est magnifique!", translation: "Manzara harika!", pronunciation: "la vü e ma-nyi-fik" }
    ]
};

const unit350Speaking: UnitSpeaking = {
    unitId: 350, title: "Buluşma", exercises: [
        { text: "Ça te dit de sortir?", translation: "Çıkmak ister misin?", pronunciation: "sa tö di dö sor-tir" },
        { text: "On se retrouve où?", translation: "Nerede buluşalım?", pronunciation: "on sö rö-truv u" }
    ]
};

const unit351Speaking: UnitSpeaking = {
    unitId: 351, title: "Telefon", exercises: [
        { text: "Allô, c'est Marie.", translation: "Alo, ben Marie.", pronunciation: "a-lo se ma-ri" },
        { text: "Ne quittez pas.", translation: "Kapatmayın.", pronunciation: "nö ki-te pa" }
    ]
};

const unit352Speaking: UnitSpeaking = {
    unitId: 352, title: "Davet", exercises: [
        { text: "Je t'invite à dîner.", translation: "Seni yemeğe davet ediyorum.", pronunciation: "jö ten-vit a di-ne" },
        { text: "Avec plaisir!", translation: "Memnuniyetle!", pronunciation: "a-vek ple-zir" }
    ]
};

const unit353Speaking: UnitSpeaking = {
    unitId: 353, title: "Özür", exercises: [
        { text: "Je suis vraiment désolé.", translation: "Gerçekten özür dilerim.", pronunciation: "jö süi vre-man de-zo-le" },
        { text: "Ce n'est pas grave.", translation: "Önemli değil.", pronunciation: "sö ne pa grav" }
    ]
};

const unit354Speaking: UnitSpeaking = {
    unitId: 354, title: "Yön", exercises: [
        { text: "Tournez à gauche.", translation: "Sola dönün.", pronunciation: "tur-ne a goş" },
        { text: "C'est tout droit.", translation: "Düz.", pronunciation: "se tu drua" }
    ]
};

const unit355Speaking: UnitSpeaking = {
    unitId: 355, title: "Şehir", exercises: [
        { text: "C'est une ville historique.", translation: "Tarihi bir şehir.", pronunciation: "se tün vil is-to-rik" },
        { text: "La gastronomie est excellente.", translation: "Mutfağı mükemmel.", pronunciation: "la gas-tro-no-mi e tek-se-lant" }
    ]
};

const unit356Speaking: UnitSpeaking = {
    unitId: 356, title: "Kültür", exercises: [
        { text: "En France, on fait la bise.", translation: "Fransa'da yanaktan öpüşülür.", pronunciation: "an frans on fe la biz" },
        { text: "Chez nous, c'est différent.", translation: "Bizde farklı.", pronunciation: "şe nu se di-fe-ran" }
    ]
};

const unit357Speaking: UnitSpeaking = {
    unitId: 357, title: "Eğitim Hayatı", exercises: [
        // Okul ve Eğitim
        { text: "J'étudie à l'université.", translation: "Üniversitede okuyorum.", pronunciation: "je-tü-di a lü-ni-ver-si-te" },
        { text: "Il est au lycée.", translation: "O lisede.", pronunciation: "il e o li-se" },
        { text: "J'apprends le français.", translation: "Fransızca öğreniyorum.", pronunciation: "jap-ran lö fran-se" },
        { text: "Je ne comprends pas.", translation: "Anlamıyorum.", pronunciation: "jö nö kom-pran pa" },
        { text: "Le prof explique la leçon.", translation: "Hoca dersi açıklıyor.", pronunciation: "lö prof eks-plik la lö-son" },
        // Sınav İfadeleri
        { text: "J'ai un examen demain.", translation: "Yarın sınavım var.", pronunciation: "je ön eg-za-men dö-men" },
        { text: "Je vais passer l'examen.", translation: "Sınava gireceğim.", pronunciation: "jö ve pa-se leg-za-men" },
        { text: "J'ai réussi l'examen!", translation: "Sınavı geçtim!", pronunciation: "je re-ü-si leg-za-men" },
        { text: "J'ai raté l'examen.", translation: "Sınavdan kaldım.", pronunciation: "je ra-te leg-za-men" },
        { text: "Tu as bien révisé?", translation: "İyi tekrar yaptın mı?", pronunciation: "tü a biyen re-vi-ze" },
        // Diyalog
        { text: "On peut étudier ensemble?", translation: "Birlikte çalışabilir miyiz?", pronunciation: "on pö e-tü-dye an-sambl" },
        { text: "J'espère que je vais réussir.", translation: "Umarım geçerim.", pronunciation: "jes-per kö jö ve re-ü-sir" }
    ]
};

const unit358Speaking: UnitSpeaking = {
    unitId: 358, title: "İş Hayatı", exercises: [
        // İş Arama
        { text: "Je cherche un emploi.", translation: "İş arıyorum.", pronunciation: "jö şerş ön an-plua" },
        { text: "J'ai trouvé un travail.", translation: "Bir iş buldum.", pronunciation: "je tru-ve ön tra-vay" },
        // Mülakat
        { text: "J'ai un entretien demain.", translation: "Yarın mülakatım var.", pronunciation: "je ön an-trö-tyen dö-men" },
        { text: "Signez le contrat, s'il vous plaît.", translation: "Sözleşmeyi imzalayın lütfen.", pronunciation: "si-nye lö kon-tra sil vu ple" },
        // Ofis Hayatı
        { text: "Je travaille chez Google.", translation: "Google'da çalışıyorum.", pronunciation: "jö tra-vay şe gugl" },
        { text: "Je suis au bureau.", translation: "Ofisteyim.", pronunciation: "jö süi o bü-ro" },
        { text: "J'ai une réunion à 15h.", translation: "Saat 15'te toplantım var.", pronunciation: "je ün re-ü-ni-yon a kenz ör" },
        { text: "Nous devons finir le projet.", translation: "Projeyi bitirmeliyiz.", pronunciation: "nu dö-von fi-nir lö pro-je" },
        // Profesyonel İletişim
        { text: "Je vais envoyer l'email.", translation: "Maili göndereceğim.", pronunciation: "jö ve an-vua-ye li-meyl" },
        { text: "Cordialement.", translation: "Saygılarımla.", pronunciation: "kor-di-al-man" }
    ]
};

const unit359Speaking: UnitSpeaking = {
    unitId: 359, title: "Teknoloji", exercises: [
        // Cihaz kullanımı
        { text: "J'allume l'ordinateur.", translation: "Bilgisayarı açıyorum.", pronunciation: "ja-lüm lor-di-na-tör" },
        { text: "Tu peux éteindre l'écran?", translation: "Ekranı kapatabilir misin?", pronunciation: "tü pö e-tendr le-kran" },
        { text: "Ma souris ne marche pas.", translation: "Farem çalışmıyor.", pronunciation: "ma su-ri nö marş pa" },
        // İnternet ve bağlantı
        { text: "Je me connecte au wifi.", translation: "Wi-Fi'a bağlanıyorum.", pronunciation: "jö mö ko-nekt o wi-fi" },
        { text: "Quel est le mot de passe?", translation: "Şifre ne?", pronunciation: "kel e lö mo dö pas" },
        { text: "Je n'ai pas de connexion internet.", translation: "İnternet bağlantım yok.", pronunciation: "jö ne pa dö ko-nek-syon en-ter-net" },
        // İşlemler
        { text: "Cliquez sur le lien.", translation: "Linke tıklayın.", pronunciation: "kli-ke sür lö lyen" },
        { text: "Je télécharge un fichier.", translation: "Dosya indiriyorum.", pronunciation: "jö te-le-şarj ön fi-şye" },
        // Sorun çözme
        { text: "Ça ne marche pas.", translation: "Bu çalışmıyor.", pronunciation: "sa nö marş pa" },
        { text: "Ma batterie est vide.", translation: "Şarjım bitti.", pronunciation: "ma bat-ri e vid" }
    ]
};

const unit360Speaking: UnitSpeaking = {
    unitId: 360, title: "A2 Final", exercises: [
        { text: "Félicitations!", translation: "Tebrikler!", pronunciation: "fe-li-si-ta-syon" },
        { text: "Continuez à pratiquer!", translation: "Pratik yapmaya devam edin!", pronunciation: "kon-ti-nü-e a pra-ti-ke" }
    ]
};

// Export
export const frenchA2Speakings: UnitSpeaking[] = [
    unit331Speaking, unit332Speaking, unit333Speaking, unit334Speaking, unit335Speaking,
    unit336Speaking, unit337Speaking, unit338Speaking, unit339Speaking, unit340Speaking,
    unit341Speaking, unit342Speaking, unit343Speaking, unit344Speaking, unit345Speaking,
    unit346Speaking, unit347Speaking, unit348Speaking, unit349Speaking, unit350Speaking,
    unit351Speaking, unit352Speaking, unit353Speaking, unit354Speaking, unit355Speaking,
    unit356Speaking, unit357Speaking, unit358Speaking, unit359Speaking, unit360Speaking
];

export function getFrenchA2SpeakingForUnit(unitId: number): UnitSpeaking | undefined {
    return frenchA2Speakings.find(s => s.unitId === unitId);
}
