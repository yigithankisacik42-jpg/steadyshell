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
  unitId: 331,
  title: "Tatil Anlatımı",
  exercises: [
    {
      text: "J'ai passé de bonnes vacances.",
      translation: "Güzel tatil geçirdim.",
      pronunciation: "je pa-se dö bon va-kans",
    },
    {
      text: "Nous avons visité beaucoup de sites.",
      translation: "Çok yer gezdik.",
      pronunciation: "nu za-von vi-zi-te bo-ku dö sit",
    },
    {
      text: "C'était magnifique!",
      translation: "Harikaydı!",
      pronunciation: "se-te ma-nyi-fik",
    },
    {
      text: "Je me suis bien amusé.",
      translation: "Çok eğlendim.",
      pronunciation: "jö mö süi byan a-mü-ze",
    },
    {
      text: "Le temps était parfait.",
      translation: "Hava mükemmeldi.",
      pronunciation: "lö tan ze-te par-fe",
    },
    {
      text: "On a pris beaucoup de photos.",
      translation: "Çok fotoğraf çektik.",
      pronunciation: "on a pri bo-ku dö fo-to",
    },
    {
      text: "J'ai découvert une belle région.",
      translation: "Güzel bir bölge keşfettim.",
      pronunciation: "je de-ku-ver ün bel re-jyon",
    },
    {
      text: "La plage était superbe.",
      translation: "Plaj harikaydı.",
      pronunciation: "la plaj e-te sü-perb",
    },
    {
      text: "Nous avons loué une voiture pour voyager.",
      translation: "Seyahat etmek için araba kiraladık.",
      pronunciation: "nu za-von lu-e ün vua-tür pur vua-ya-je",
    },
    {
      text: "C'était une expérience inoubliable.",
      translation: "Unutulmaz bir deneyimdi.",
      pronunciation: "se-te tün eks-pe-ryans i-nu-bli-yabl",
    },
  ],
};

const unit332Speaking: UnitSpeaking = {
  unitId: 332,
  title: "Plan Yapma",
  exercises: [
    {
      text: "Je vais voyager cet été.",
      translation: "Bu yaz seyahat edeceğim.",
      pronunciation: "jö ve vua-ya-je set e-te",
    },
    {
      text: "Nous allons partir en vacances.",
      translation: "Tatile gideceğiz.",
      pronunciation: "nu za-lon par-tir an va-kans",
    },
    {
      text: "J'ai l'intention de visiter Paris.",
      translation: "Paris'i ziyaret etme niyetindeyim.",
      pronunciation: "je lan-tan-syon dö vi-zi-te pa-ri",
    },
    {
      text: "J'espère que le temps sera beau.",
      translation: "Umarım hava güzel olur.",
      pronunciation: "jes-per kö lö tan sö-ra bo",
    },
    {
      text: "Ce sera formidable!",
      translation: "Harika olacak!",
      pronunciation: "sö sö-ra for-mi-dabl",
    },
    {
      text: "J'ai hâte d'y aller.",
      translation: "Oraya gitmek için sabırsızlanıyorum.",
      pronunciation: "je at di a-le",
    },
    {
      text: "Je prévois de rester deux semaines.",
      translation: "İki hafta kalmayı planlıyorum.",
      pronunciation: "jö pre-vua dö res-te dö sö-men",
    },
    {
      text: "Quels sont vos projets pour l'avenir?",
      translation: "Gelecek için planlarınız neler?",
      pronunciation: "kel son vo pro-je pur lav-nir",
    },
    {
      text: "Nous allons organiser une grande fête.",
      translation: "Büyük bir parti organize edeceğiz.",
      pronunciation: "nu za-lon or-ga-ni-ze ün grand fet",
    },
    {
      text: "Je compte apprendre le français.",
      translation: "Fransızca öğrenmeyi düşünüyorum (planlıyorum).",
      pronunciation: "jö kont a-prandr lö fran-se",
    },
  ],
};

const unit333Speaking: UnitSpeaking = {
  unitId: 333,
  title: "Doktor Ziyareti",
  exercises: [
    // Şikayet cümleleri
    {
      text: "Je ne me sens pas bien.",
      translation: "Kendimi iyi hissetmiyorum.",
      pronunciation: "jö nö mö san pa byan",
    },
    {
      text: "Je suis malade.",
      translation: "Hastayım.",
      pronunciation: "jö süi ma-lad",
    },
    {
      text: "J'ai mal à la tête.",
      translation: "Başım ağrıyor.",
      pronunciation: "je mal a la tet",
    },
    {
      text: "J'ai mal à la gorge.",
      translation: "Boğazım ağrıyor.",
      pronunciation: "je mal a la gorj",
    },
    {
      text: "J'ai mal au ventre.",
      translation: "Karnım ağrıyor.",
      pronunciation: "je mal o vantr",
    },
    {
      text: "J'ai mal au dos.",
      translation: "Sırtım ağrıyor.",
      pronunciation: "je mal o do",
    },
    {
      text: "J'ai de la fièvre.",
      translation: "Ateşim var.",
      pronunciation: "je dö la fyevr",
    },
    {
      text: "Je tousse beaucoup.",
      translation: "Çok öksürüyorum.",
      pronunciation: "jö tus bo-ku",
    },
    // Doktor cümleleri
    {
      text: "Depuis quand êtes-vous malade?",
      translation: "Ne zamandır hastasınız?",
      pronunciation: "dö-püi kan et vu ma-lad",
    },
    {
      text: "Où avez-vous mal?",
      translation: "Nerede ağrınız var?",
      pronunciation: "u a-ve vu mal",
    },
    // Tavsiyeler (Il faut + Devoir)
    {
      text: "Il faut vous reposer.",
      translation: "Dinlenmeniz lazım.",
      pronunciation: "il fo vu rö-po-ze",
    },
    {
      text: "Vous devez prendre ce médicament.",
      translation: "Bu ilacı almalısınız.",
      pronunciation: "vu dö-ve prandr sö me-di-ka-man",
    },
    {
      text: "Vous devez boire beaucoup d'eau.",
      translation: "Çok su içmelisiniz.",
      pronunciation: "vu dö-ve buar bo-ku do",
    },
    {
      text: "Prenez ce médicament trois fois par jour.",
      translation: "Bu ilacı günde üç kez alın.",
      pronunciation: "prö-ne sö me-di-ka-man trua fua par jur",
    },
    {
      text: "Vous allez guérir bientôt.",
      translation: "Yakında iyileşeceksiniz.",
      pronunciation: "vu za-le ge-rir byan-to",
    },
  ],
};

const unit334Speaking: UnitSpeaking = {
  unitId: 334,
  title: "Banka İşlemleri",
  exercises: [
    {
      text: "Je voudrais ouvrir un compte.",
      translation: "Hesap açmak rica ediyorum.",
      pronunciation: "jö vu-dre uv-rir ön kont",
    },
    {
      text: "J'aimerais parler au directeur.",
      translation: "Müdürle konuşmak isterdim.",
      pronunciation: "je-mö-re par-le o di-rek-tör",
    },
    {
      text: "Pourriez-vous m'aider s'il vous plaît?",
      translation: "Bana yardım edebilir miydiniz lütfen?",
      pronunciation: "pu-rye vu me-de sil vu ple",
    },
    {
      text: "Je voudrais faire un virement.",
      translation: "Havale yapmak istiyorum.",
      pronunciation: "jö vu-dre fer ön vir-man",
    },
    {
      text: "Pourriez-vous vérifier mon solde?",
      translation: "Bakiyemi kontrol edebilir misiniz?",
      pronunciation: "pu-rye vu ve-ri-fye mon sold",
    },
    {
      text: "Est-ce que je peux retirer de l'argent?",
      translation: "Para çekebilir miyim?",
      pronunciation: "es kö jö pö rö-ti-re dö lar-jan",
    },
    {
      text: "J'aimerais demander une carte de crédit.",
      translation: "Kredi kartı istemek isterdim.",
      pronunciation: "je-mö-re dö-man-de ün kart dö kre-di",
    },
    {
      text: "Où est le distributeur le plus proche?",
      translation: "En yakın ATM nerede?",
      pronunciation: "u e lö dis-tri-bü-tör lö plü proş",
    },
    {
      text: "Ma carte a été avalée par le distributeur.",
      translation: "Kartım ATM tarafından yutuldu.",
      pronunciation: "ma kart a e-te a-va-le par lö dis-tri-bü-tör",
    },
    {
      text: "Je voudrais changer des euros en dollars.",
      translation: "Euroları dolara çevirmek istiyorum.",
      pronunciation: "jö vu-dre şan-je de zö-ro an do-lar",
    },
  ],
};

const unit335Speaking: UnitSpeaking = {
  unitId: 335,
  title: "Posta ve Miktarlar",
  exercises: [
    {
      text: "Je voudrais envoyer ce colis.",
      translation: "Bu koliyi göndermek istiyorum.",
      pronunciation: "jö vu-dre an-vua-ye sö ko-li",
    },
    {
      text: "Combien de timbres voulez-vous?",
      translation: "Kaç pul istiyorsunuz?",
      pronunciation: "kom-byan dö tanbr vu-le vu",
    },
    {
      text: "J'ai beaucoup de lettres à envoyer.",
      translation: "Gönderecek çok mektubum var.",
      pronunciation: "je bo-ku dö letr a an-vua-ye",
    },
    {
      text: "Il y a trop de monde ici.",
      translation: "Burada çok fazla insan var.",
      pronunciation: "il ya tro dö mond i-si",
    },
    {
      text: "Je voudrais un peu de temps.",
      translation: "Biraz zaman rica ediyorum.",
      pronunciation: "jö vu-dre ön pö dö tan",
    },
    {
      text: "C'est un paquet de livres.",
      translation: "Bu bir kitap paketi.",
      pronunciation: "se tön pa-ke dö livr",
    },
    {
      text: "Je voudrais une bouteille d'eau.",
      translation: "Bir şişe su rica ediyorum.",
      pronunciation: "jö vu-dre ün bu-tey do",
    },
    {
      text: "Est-ce que c'est urgent?",
      translation: "Acil mi?",
      pronunciation: "es kö se tür-jan",
    },
    {
      text: "Je voudrais l'envoyer en recommandé.",
      translation: "Taahhütlü göndermek istiyorum.",
      pronunciation: "jö vu-dre lan-vua-ye an rö-ko-man-de",
    },
    {
      text: "Quel est le tarif pour l'étranger?",
      translation: "Yurtdışı tarifesi nedir?",
      pronunciation: "kel e lö ta-rif pur le-tran-je",
    },
  ],
};

const unit336Speaking: UnitSpeaking = {
  unitId: 336,
  title: "Otel ve Koşullar",
  exercises: [
    {
      text: "J'ai une réservation au nom de Martin.",
      translation: "Martin adına rezervasyonum var.",
      pronunciation: "je ün re-zer-va-syon o nom dö mar-ten",
    },
    {
      text: "Je voudrais une chambre calme.",
      translation: "Sessiz bir oda istiyorum.",
      pronunciation: "jö vu-dre ün şanbr kalm",
    },
    {
      text: "Si vous payez maintenant, c'est moins cher.",
      translation: "Şimdi öderseniz daha ucuz.",
      pronunciation: "si vu pe-ye men-te-nan se muen şer",
    },
    {
      text: "S'il fait chaud, allumez la climatisation.",
      translation: "Hava sıcaksa klimayı açın.",
      pronunciation: "sil fe şo a-lü-me la kli-ma-ti-za-syon",
    },
    {
      text: "Si je reste trois nuits, quel est le prix?",
      translation: "Üç gece kalırsam fiyat nedir?",
      pronunciation: "si jö rest trua nüi kel e lö pri",
    },
    {
      text: "Si la chambre n'est pas prête, j'attends.",
      translation: "Oda hazır değilse beklerim.",
      pronunciation: "si la şanbr ne pa pret ja-tan",
    },
    {
      text: "Je confirme la réservation si c'est possible.",
      translation: "Mümkünse rezervasyonu onaylıyorum.",
      pronunciation: "jö kon-firm la re-zer-va-syon si se po-sibl",
    },
    {
      text: "Est-ce que le petit-déjeuner est inclus?",
      translation: "Kahvaltı dahil mi?",
      pronunciation: "es kö lö pö-ti de-jö-ne e ten-klü",
    },
    {
      text: "S'il y a un problème, appelez la réception.",
      translation: "Sorun olursa resepsiyonu arayın.",
      pronunciation: "sil ya ön prob-lem a-pö-le la re-sep-syon",
    },
    {
      text: "Je voudrais annuler ma réservation.",
      translation: "Rezervasyonumu iptal etmek istiyorum.",
      pronunciation: "jö vu-dre a-nü-le ma re-zer-va-syon",
    },
  ],
};

const unit337Speaking: UnitSpeaking = {
  unitId: 337,
  title: "Tren Bileti Alma",
  exercises: [
    {
      text: "Un aller-retour pour Paris, s'il vous plaît.",
      translation: "Paris'e gidiş-dönüş lütfen.",
      pronunciation: "ön a-le rö-tur pur pa-ri sil vu ple",
    },
    {
      text: "À quelle heure part le prochain train?",
      translation: "Bir sonraki tren saat kaçta?",
      pronunciation: "a kel ör par lö pro-şen tren",
    },
    {
      text: "Pouvez-vous valider mon billet?",
      translation: "Biletimi onaylayabilir misiniz?",
      pronunciation: "pu-ve vu va-li-de mon bi-ye",
    },
    {
      text: "De quel quai part le train pour Lyon?",
      translation: "Lyon treni hangi perondan kalkıyor?",
      pronunciation: "dö kel ke par lö tren pur li-yon",
    },
    {
      text: "Y a-t-il une correspondance à Nice?",
      translation: "Nice'te aktarma var mı?",
      pronunciation: "ya til ün ko-res-pon-dans a nis",
    },
    {
      text: "Le train a dix minutes de retard.",
      translation: "Tren on dakika gecikmeli.",
      pronunciation: "lö tren a di mi-nüt dö rö-tar",
    },
    {
      text: "Puis-je avoir un horaire?",
      translation: "Tarife alabilir miyim?",
      pronunciation: "püi jö a-vuar ön o-rer",
    },
    {
      text: "Avez-vous des réductions pour les étudiants?",
      translation: "Öğrenciler için indiriminiz var mı?",
      pronunciation: "a-ve vu de re-dük-syon pur le ze-tüd-yan",
    },
    {
      text: "Attention à la fermeture des portes.",
      translation: "Kapıların kapanmasına dikkat edin.",
      pronunciation: "a-tan-syon a la fer-mö-tür de port",
    },
    {
      text: "Je voudrais réserver une place assise.",
      translation: "Oturacak bir yer ayırtmak istiyorum.",
      pronunciation: "jö vu-dre re-zer-ve ün plas a-siz",
    },
  ],
};

const unit338Speaking: UnitSpeaking = {
  unitId: 338,
  title: "Havaalanı",
  exercises: [
    {
      text: "Le vol a été annulé à cause de la tempête.",
      translation: "Uçuş fırtına yüzünden iptal edildi.",
      pronunciation: "lö vol a e-te a-nü-le a koz dö la tan-pet",
    },
    {
      text: "Vos bagages sont enregistrés maintenant.",
      translation: "Bagajlarınız şimdi kaydedildi.",
      pronunciation: "vo ba-gaj son an-rö-jis-tre men-te-nan",
    },
    {
      text: "La porte d'embarquement a été changée.",
      translation: "Biniş kapısı değiştirildi.",
      pronunciation: "la port dan-bark-man a e-te şan-je",
    },
    {
      text: "Les passagers sont priés de se présenter porte 10.",
      translation: "Yolcuların 10 numaralı kapıya gelmesi rica olunur.",
      pronunciation: "le pa-sa-je son pri-ye dö sö pre-zan-te port diz",
    },
    {
      text: "Où est le comptoir d'enregistrement?",
      translation: "Check-in bankosu nerede?",
      pronunciation: "u e lö kon-tuar dan-rö-jistr-man",
    },
    {
      text: "J'ai perdu ma carte d'embarquement.",
      translation: "Biniş kartımı kaybettim.",
      pronunciation: "je per-dü ma kart dan-bark-man",
    },
    {
      text: "L'avion va décoller dans dix minutes.",
      translation: "Uçak on dakika içinde kalkacak.",
      pronunciation: "la-vyon va de-ko-le dan di mi-nüt",
    },
    {
      text: "Je voudrais une place côté hublot.",
      translation: "Pencere kenarı bir yer istiyorum.",
      pronunciation: "jö vu-dre ün plas ko-te üb-lo",
    },
    {
      text: "Est-ce que le vol est à l'heure?",
      translation: "Uçuş zamanında mı?",
      pronunciation: "es kö lö vol e a lör",
    },
    {
      text: "Nous avons atterri à Paris.",
      translation: "Paris'e indik.",
      pronunciation: "nu za-von a-te-ri a pa-ri",
    },
  ],
};

const unit339Speaking: UnitSpeaking = {
  unitId: 339,
  title: "Restoran Siparişi",
  exercises: [
    {
      text: "Le menu, s'il vous plaît.",
      translation: "Menü lütfen.",
      pronunciation: "lö mö-nü sil vu ple",
    },
    {
      text: "Qu'est-ce que vous recommandez?",
      translation: "Ne tavsiye edersiniz?",
      pronunciation: "kes kö vu rö-ko-man-de",
    },
    {
      text: "Je voudrais le plat du jour.",
      translation: "Günün yemeğini istiyorum.",
      pronunciation: "jö vu-dre lö pla dü jur",
    },
    {
      text: "L'addition, s'il vous plaît.",
      translation: "Hesap lütfen.",
      pronunciation: "la-di-syon sil vu ple",
    },
    {
      text: "C'est délicieux!",
      translation: "Çok lezzetli!",
      pronunciation: "se de-li-syö",
    },
  ],
};

const unit340Speaking: UnitSpeaking = {
  unitId: 340,
  title: "Tarif Anlatma",
  exercises: [
    {
      text: "Mange ta soupe !",
      translation: "Çorbanı iç/ye! (Tu - S yok)",
      pronunciation: "manj ta sup",
    },
    {
      text: "Allons dans la cuisine !",
      translation: "Mutfağa gidelim! (Nous)",
      pronunciation: "a-lon dan la küi-zin",
    },
    {
      text: "Goûte cette sauce.",
      translation: "Bu sosun tadına bak.",
      pronunciation: "gut set sos",
    },
    {
      text: "Bon appétit à tous !",
      translation: "Herkese afiyet olsun!",
      pronunciation: "bo na-pe-ti a tus",
    },
  ],
};

// ===== Üniteler 341-360 (Kısa format) =====
const unit341Speaking: UnitSpeaking = {
  unitId: 341,
  title: "Karşılaştırma Yapma",
  exercises: [
    {
      text: "Ce t-shirt est moins cher que ce pull.",
      translation: "Bu tişört, bu kazaktan daha ucuzdur.",
      pronunciation: "sö ti-şört e muen şer kö sö pül",
    },
    {
      text: "La veste noire est plus élégante.",
      translation: "Siyah ceket daha şık.",
      pronunciation: "la vest nuar e plü ze-le-gant",
    },
    {
      text: "Cette robe est aussi belle que l'autre.",
      translation: "Bu elbise diğeri kadar güzel.",
      pronunciation: "set rob e o-si bel kö lotr",
    },
    {
      text: "C'est meilleur que l'autre option.",
      translation: "Bu diğer seçenekten daha iyi.",
      pronunciation: "se me-yör kö lotr op-syon",
    },
    {
      text: "Ces chaussures sont plus confortables.",
      translation: "Bu ayakkabılar daha rahat.",
      pronunciation: "se şo-sür son plü kon-for-tabl",
    },
    {
      text: "Mon pantalon est moins grand que le tien.",
      translation: "Benim pantolonum seninkinden daha az büyük.",
      pronunciation: "mon pan-ta-lon e muen gran kö lö ti-yen",
    },
    {
      text: "Laquelle tu préfères ?",
      translation: "Hangisini tercih edersin?",
      pronunciation: "la-kel tü pre-fer",
    },
    {
      text: "Tu as raison, j'achète la bleue !",
      translation: "Haklısın, maviyi satın alıyorum!",
      pronunciation: "tü a re-zon, ja-şet la blö",
    },
    {
      text: "Elle est aussi chère que le manteau.",
      translation: "O (dişi), kaban kadar pahalı.",
      pronunciation: "el e o-si şer kö lö man-to",
    },
    {
      text: "C'est pire que ce que je pensais.",
      translation: "Bu düşündüğümden daha kötü.",
      pronunciation: "se pir kö sö kö jö pan-se",
    },
  ],
};

const unit342Speaking: UnitSpeaking = {
  unitId: 342,
  title: "Kıyafet Alışverişi",
  exercises: [
    {
      text: "Je cherche un pull.",
      translation: "Bir kazak arıyorum.",
      pronunciation: "jö şerş an pül",
    },
    {
      text: "Je peux essayer ce pull ?",
      translation: "Bu kazağı deneyebilir miyim?",
      pronunciation: "jö pö e-se-ye sö pül",
    },
    {
      text: "Cette robe vous va très bien !",
      translation: "Bu elbise size çok yakışıyor!",
      pronunciation: "set rob vu va tre biyen",
    },
    {
      text: "Ça coûte combien ?",
      translation: "Ne kadar tutuyor?",
      pronunciation: "sa kut kon-biyen",
    },
    {
      text: "J'achète cette chemise blanche.",
      translation: "Bu beyaz gömleği satın alıyorum.",
      pronunciation: "jaşet set şö-miz blanş",
    },
    {
      text: "Je paie par carte.",
      translation: "Kartla ödüyorum.",
      pronunciation: "jö pey par kart",
    },
    {
      text: "Où est la cabine d'essayage ?",
      translation: "Giyinme kabini nerede?",
      pronunciation: "u e la ka-bin de-se-yaj",
    },
    {
      text: "Je paie ces chaussures.",
      translation: "Bu ayakkabıları ödüyorum.",
      pronunciation: "jö pey se şo-sür",
    },
    {
      text: "Ce pantalon est trop serré.",
      translation: "Bu pantolon çok dar.",
      pronunciation: "sö pan-ta-lon e tro se-re",
    },
    {
      text: "C'est parfait, je le prends !",
      translation: "Mükemmel, alıyorum!",
      pronunciation: "se par-fe jö lö pran",
    },
  ],
};

const unit343Speaking: UnitSpeaking = {
  unitId: 343,
  title: "Ev İşleri",
  exercises: [
    {
      text: "Je viens de faire le ménage.",
      translation: "Az önce temizlik yaptım.",
      pronunciation: "jö viyen dö fer lö me-naj",
    },
    {
      text: "Range ta chambre !",
      translation: "Odanı topla!",
      pronunciation: "ranj ta şanbr",
    },
    {
      text: "Tu viens de faire la vaisselle ?",
      translation: "Az önce bulaşık mı yıkadın?",
      pronunciation: "tü viyen dö fer la ve-sel",
    },
    {
      text: "Il vient de passer l'aspirateur.",
      translation: "O az önce süpürge çekti.",
      pronunciation: "il viyen dö pa-se las-pi-ra-tör",
    },
    {
      text: "Nous venons de faire la lessive.",
      translation: "Az önce çamaşır yıkadık.",
      pronunciation: "nu vö-non dö fer la le-siv",
    },
    {
      text: "C'est à ton tour de faire le lit.",
      translation: "Yatağı toplama sırası sende.",
      pronunciation: "se a ton tur dö fer lö li",
    },
    {
      text: "Elle vient de repasser les chemises.",
      translation: "O az önce gömlekleri ütüledi.",
      pronunciation: "el viyen dö rö-pa-se le şö-miz",
    },
    {
      text: "La maison est propre maintenant.",
      translation: "Ev şimdi temiz.",
      pronunciation: "la me-zon e propr ment-nan",
    },
    {
      text: "Je viens de nettoyer la cuisine.",
      translation: "Az önce mutfağı temizledim.",
      pronunciation: "jö viyen dö ne-tua-ye la küi-zin",
    },
    {
      text: "Vous venez de ranger la chambre ?",
      translation: "Az önce odayı mı topladınız?",
      pronunciation: "vu vö-ne dö ran-je la şanbr",
    },
  ],
};

const unit344Speaking: UnitSpeaking = {
  unitId: 344,
  title: "Günlük Haberler",
  exercises: [
    {
      text: "Tu as vu les infos hier soir ?",
      translation: "Dün akşam haberleri gördün mü?",
      pronunciation: "tü a vü le zen-fo iyer suar",
    },
    {
      text: "Qu'est-ce qui s'est passé ?",
      translation: "Ne oldu?",
      pronunciation: "kes ki se pa-se",
    },
    {
      text: "La météo était terrible.",
      translation: "Hava durumu berbattı.",
      pronunciation: "la me-te-o e-te te-ribl",
    },
    {
      text: "Il y avait beaucoup de vent.",
      translation: "Çok rüzgar vardı.",
      pronunciation: "il ya-ve bo-ku dö van",
    },
    {
      text: "Les gens regardaient les informations.",
      translation: "İnsanlar haberleri izliyordu.",
      pronunciation: "le jan rö-gar-de le zen-for-ma-syon",
    },
    {
      text: "Je parlais avec les habitants.",
      translation: "Sakinlerle konuşuyordum.",
      pronunciation: "jö par-le a-vek le za-bi-tan",
    },
    {
      text: "Quand j'étais jeune, je lisais le journal.",
      translation: "Gençken gazete okurdum.",
      pronunciation: "kan je-te jön jö li-ze lö jur-nal",
    },
    {
      text: "Ils étaient très stressés !",
      translation: "Çok stresliydiler!",
      pronunciation: "ilz e-te tre stre-se",
    },
    {
      text: "Il neigeait et il faisait froid.",
      translation: "Kar yağıyordu ve soğuktu.",
      pronunciation: "il ne-je e il fö-ze frua",
    },
    {
      text: "Nous regardions la télé tous les soirs.",
      translation: "Her akşam TV izliyorduk.",
      pronunciation: "nu rö-gar-diyon la te-le tu le suar",
    },
  ],
};

const unit345Speaking: UnitSpeaking = {
  unitId: 345,
  title: "TV Programları",
  exercises: [
    {
      text: "Passe-moi la télécommande, s'il te plaît.",
      translation: "Lütfen bana kumandayı uzat.",
      pronunciation: "pas-mua la te-le-ko-mand sil tö ple",
    },
    {
      text: "Change de chaîne, je déteste ce présentateur.",
      translation: "Kanalı değiştir, bu sunucudan nefret ediyorum.",
      pronunciation: "şanj dö şen jö de-test sö pre-zan-ta-tör",
    },
    {
      text: "L'émission qui passe à la télé est géniale.",
      translation: "Televizyonda yayınlanan program harika.",
      pronunciation: "le-mi-syon ki pas a la te-le e je-nyal",
    },
    {
      text: "C'est le documentaire que je veux regarder.",
      translation: "İzlemek istediğim belgesel bu.",
      pronunciation: "se lö do-kü-man-ter kö jö vö rö-gar-de",
    },
    {
      text: "La série que j'adore commence à vingt heures.",
      translation: "Bayıldığım dizi saat yirmide başlıyor.",
      pronunciation: "la se-ri kö ja-dor ko-mans a ven tör",
    },
    {
      text: "Qui est l'homme qui parle aux informations?",
      translation: "Haberlerde konuşan adam kim?",
      pronunciation: "ki e lom ki parl o zen-for-ma-syon",
    },
    {
      text: "C'est la publicité que je déteste le plus.",
      translation: "En çok nefret ettiğim reklam bu.",
      pronunciation: "se la püb-li-si-te kö jö de-test lö plüs",
    },
    {
      text: "Le film qu'ils ont choisi est très ennuyeux.",
      translation: "Seçtikleri film çok sıkıcı.",
      pronunciation: "lö film kil zon şua-zi e tre zan-nüi-yö",
    },
    {
      text: "La télécommande est l'objet qui sert à changer de chaîne.",
      translation: "Kumanda, kanal değiştirmeye yarayan nesnedir.",
      pronunciation: "la te-le-ko-mand e lob-je ki ser a şan-je dö şen",
    },
    {
      text: "Qu'est-ce qu'il y a ce soir à la télé?",
      translation: "Bu akşam TV'de ne var?",
      pronunciation: "kes kil ya sö suar a la te-le",
    },
  ],
};

const unit346Speaking: UnitSpeaking = {
  unitId: 346,
  title: "Sinema ve Filmler",
  exercises: [
    {
      text: "C'est un film d'action.",
      translation: "Bu bir aksiyon filmi.",
      pronunciation: "se tön film daksyon",
    },
    {
      text: "C'est le meilleur film d'horreur.",
      translation: "Bu en iyi korku filmidir.",
      pronunciation: "se lö meyör film dorör",
    },
    {
      text: "Qui est le réalisateur ?",
      translation: "Yönetmen kim?",
      pronunciation: "ki e lö realizatör",
    },
    {
      text: "C'est la meilleure comédie de l'année.",
      translation: "Bu yılın en iyi komedisidir.",
      pronunciation: "se la meyör komedi dö lane",
    },
    {
      text: "C'est le film le plus célèbre.",
      translation: "Bu en ünlü filmdir.",
      pronunciation: "se lö film lö plü selebr",
    },
    {
      text: "C'est l'actrice la plus riche.",
      translation: "Bu en zengin kadın oyuncudur.",
      pronunciation: "se laktris la plü riş",
    },
    {
      text: "C'est le film le moins intéressant.",
      translation: "Bu en az ilginç (en sıkıcı) filmdir.",
      pronunciation: "se lö film lö muen zenteresan",
    },
    {
      text: "Mais l'acteur est le plus beau, non ?",
      translation: "Ama erkek oyuncu en yakışıklısı, değil mi?",
      pronunciation: "me laktör e lö plü bo, no",
    },
    {
      text: "Le scénario est le moins original.",
      translation: "Senaryo en az orijinal olanı.",
      pronunciation: "lö senariyo e lö muen zoorijinal",
    },
    {
      text: "Nous regardons un dessin animé.",
      translation: "Bir çizgi film izliyoruz.",
      pronunciation: "nu rögardon an desan anime",
    },
  ],
};

const unit347Speaking: UnitSpeaking = {
  unitId: 347,
  title: "Müzik Zevkleri",
  exercises: [
    // Müzik Türleri ve Dinleme
    {
      text: "Quel genre de musique aimes-tu?",
      translation: "Ne tür müzik seversin?",
      pronunciation: "kel janr dö mü-zik em tü",
    },
    {
      text: "J'écoute du rock et de la musique classique.",
      translation: "Rock ve klasik müzik dinliyorum.",
      pronunciation: "je-kut dü rok e dö la mü-zik kla-sik",
    },
    // Enstrüman Çalma (Jouer de)
    {
      text: "Tu joues d'un instrument?",
      translation: "Bir enstrüman çalıyor musun?",
      pronunciation: "tü ju d ön ens-trü-man",
    },
    {
      text: "Oui, je joue de la guitare.",
      translation: "Evet, gitar çalıyorum.",
      pronunciation: "ui, jö ju dö la gi-tar",
    },
    {
      text: "Il joue du piano très bien.",
      translation: "Çok iyi piyano çalıyor.",
      pronunciation: "il ju dü pya-no tre byan",
    },
    // Depuis (...den beri / ...dır)
    {
      text: "Je joue du piano depuis mon enfance.",
      translation: "Çocukluğumdan beri piyano çalıyorum.",
      pronunciation: "jö ju dü pya-no dö-püi mon an-fans",
    },
    {
      text: "Tu les écoutes depuis quand?",
      translation: "Onları ne zamandan beri dinliyorsun?",
      pronunciation: "tü le z e-kut dö-püi kan",
    },
    {
      text: "J'écoute leur musique depuis 2022.",
      translation: "2022'den beri müziklerini dinliyorum.",
      pronunciation: "je-kut lör mü-zik dö-püi dö-mil ven-dö",
    },
    {
      text: "Nous écoutons ce groupe depuis 5 ans.",
      translation: "5 yıldır bu grubu dinliyoruz.",
      pronunciation: "nu ze-ku-ton sö grup dö-püi senk an",
    },
    // Diyalog Kapanış
    {
      text: "J'adore ce groupe, le chanteur est super!",
      translation: "Bu gruba bayılıyorum, şarkıcı harika!",
      pronunciation: "ja-dor sö grup, lö şan-tör e sü-per",
    },
  ],
};




const unit348Speaking: UnitSpeaking = {
  unitId: 348,
  title: "Spor Aktiviteleri",
  exercises: [
    // Genel Spor Soruları
    {
      text: "Tu fais du sport?",
      translation: "Spor yapıyor musun?",
      pronunciation: "tü fe dü spor",
    },
    {
      text: "Je veux commencer le sport.",
      translation: "Spora başlamak istiyorum.",
      pronunciation: "jö vö ko-man-se lö spor",
    },
    // Toplu Oyunlar (Jouer)
    {
      text: "On joue au tennis demain?",
      translation: "Yarın tenis oynayalım mı?",
      pronunciation: "on ju o te-nis dö-men",
    },
    {
      text: "Je n'aime pas le tennis.",
      translation: "Tenisi sevmem.",
      pronunciation: "jö nem pa lö te-nis",
    },
    {
      text: "Vous jouez au football.",
      translation: "Siz futbol oynuyorsunuz.",
      pronunciation: "vu jue o fut-bol",
    },
    {
      text: "Nous jouons aux échecs.",
      translation: "Biz satranç oynuyoruz.",
      pronunciation: "nu ju-on o ze-şek",
    },
    // Bireysel Aktiviteler (Faire)
    {
      text: "Je préfère faire de la natation.",
      translation: "Yüzmeyi tercih ederim.",
      pronunciation: "jö pre-fer fer dö la na-tas-yon",
    },
    {
      text: "Nous faisons du vélo.",
      translation: "Biz bisiklete biniyoruz.",
      pronunciation: "nu fö-zon dü ve-lo",
    },
    {
      text: "Ils font du jogging le matin.",
      translation: "Onlar sabahları koşu yapıyorlar.",
      pronunciation: "il fon dü jo-ging lö ma-ten",
    },
    // Kapanış
    {
      text: "Parfait! Allons-y!",
      translation: "Mükemmel! Hadi gidelim!",
      pronunciation: "par-fe a-lon zi",
    },
  ],
};

const unit349Speaking: UnitSpeaking = {
  unitId: 349,
  title: "Doğa",
  exercises: [
    {
      text: "On fait une randonnée?",
      translation: "Yürüyüşe çıkalım mı?",
      pronunciation: "on fe ün ran-do-ne",
    },
    {
      text: "La vue est magnifique!",
      translation: "Manzara harika!",
      pronunciation: "la vü e ma-nyi-fik",
    },
  ],
};

const unit350Speaking: UnitSpeaking = {
  unitId: 350,
  title: "Doğa ve Piknik (Arkadaş Buluşması)",
  exercises: [
    // Doğa Teklifleri
    {
      text: "Tu as envie d'aller à la forêt?",
      translation: "Ormana gitmek ister misin?",
      pronunciation: "tü a an-vi da-le a la fo-re",
    },
    {
      text: "On fait un pique-nique?",
      translation: "Piknik yapalım mı?",
      pronunciation: "on fe ön pik-nik",
    },
    {
      text: "J'adore la nature.",
      translation: "Doğayı çok severim.",
      pronunciation: "ja-dor la na-tür",
    },
    {
      text: "C'est un bel endroit.",
      translation: "Burası güzel bir yer.",
      pronunciation: "se tön bel an-drua",
    },

    // Zamirler (Y / EN)
    {
      text: "On y va?",
      translation: "Oraya gidelim mi?",
      pronunciation: "on ni va",
    },
    {
      text: "Je vais y aller.",
      translation: "Oraya gideceğim.",
      pronunciation: "jö ve zi a-le",
    },
    {
      text: "Tu as apporté des sandwichs?",
      translation: "Sandviç getirdin mi?",
      pronunciation: "tü a a-por-te de sand-viç",
    },
    {
      text: "Oui, j'en ai apporté.",
      translation: "Evet, ondan getirdim.",
      pronunciation: "ui jan ne a-por-te",
    },
    {
      text: "Tu veux de l'eau?",
      translation: "Su ister misin?",
      pronunciation: "tü vö dö lo",
    },
    {
      text: "Oui, j'en veux, merci.",
      translation: "Evet, ondan istiyorum, teşekkürler.",
      pronunciation: "ui jan vö mer-si",
    },
  ],
};

const unit351Speaking: UnitSpeaking = {
  unitId: 351,
  title: "Telefon",
  exercises: [
    // Açılış
    {
      text: "Allô, bonjour!",
      translation: "Alo, merhaba!",
      pronunciation: "a-lo bon-jur",
    },
    {
      text: "C'est Paul à l'appareil.",
      translation: "Ben Paul (telefonda).",
      pronunciation: "se pol a la-pa-rey",
    },

    // Birini İsteme
    {
      text: "Je voudrais parler à Marie.",
      translation: "Marie ile konuşmak istiyorum.",
      pronunciation: "jö vu-dre par-le a ma-ri",
    },
    {
      text: "Est-ce que Pierre est là?",
      translation: "Pierre orada mı?",
      pronunciation: "es-kö pyer e la",
    },

    // Bekletme
    {
      text: "Ne quittez pas.",
      translation: "Hatta kalın.",
      pronunciation: "nö ki-te pa",
    },
    {
      text: "Un instant, s'il vous plaît.",
      translation: "Bir saniye lütfen.",
      pronunciation: "an ens-tan sil vu ple",
    },

    // Sorunlar
    {
      text: "Je vous entends mal.",
      translation: "Sizi kötü duyuyorum.",
      pronunciation: "jö vu zan-tan mal",
    },
    {
      text: "Ça coupe.",
      translation: "Ses kesiliyor.",
      pronunciation: "sa kup",
    },
    {
      text: "Je vous rappelle.",
      translation: "Sizi geri ararım.",
      pronunciation: "jö vu ra-pel",
    },

    // Mesaj
    {
      text: "Voulez-vous laisser un message?",
      translation: "Mesaj bırakmak ister misiniz?",
      pronunciation: "vu-le vu le-se an me-saj",
    },
  ],
};

const unit352Speaking: UnitSpeaking = {
  unitId: 352,
  title: "Davet Etme",
  exercises: [
    // Davet Kalıpları
    {
      text: "Ça te dit de manger une pizza?",
      translation: "Pizza yemeye ne dersin?",
      pronunciation: "sa tö di dö man-je ün pi-za",
    },
    {
      text: "Tu veux aller au cinéma?",
      translation: "Sinemaya gitmek ister misin?",
      pronunciation: "tü vö a-le o si-ne-ma",
    },
    {
      text: "On va au café ce soir?",
      translation: "Bu akşam kafeye gidelim mi?",
      pronunciation: "on va o ka-fe sö suar",
    },
    {
      text: "Tu es libre ce week-end?",
      translation: "Bu hafta sonu boş musun?",
      pronunciation: "tü e libr sö vi-kend",
    },

    // Kabul
    {
      text: "Avec plaisir!",
      translation: "Memnuniyetle!",
      pronunciation: "a-vek ple-zir",
    },
    {
      text: "Oui, je veux bien!",
      translation: "Evet, çok isterim!",
      pronunciation: "ui jö vö biyen",
    },
    {
      text: "Bonne idée!",
      translation: "İyi fikir!",
      pronunciation: "bon ide",
    },
    {
      text: "Pourquoi pas?",
      translation: "Neden olmasın?",
      pronunciation: "pur-kua pa",
    },

    // Reddetme
    {
      text: "Désolé, je ne peux pas.",
      translation: "Üzgünüm, yapamam.",
      pronunciation: "de-zo-le jö nö pö pa",
    },
    {
      text: "Je suis occupé.",
      translation: "Meşgulüm.",
      pronunciation: "jö süi o-kü-pe",
    },
    {
      text: "J'ai du travail.",
      translation: "İşim var.",
      pronunciation: "je dü tra-vay",
    },
    {
      text: "Peut-être une autre fois.",
      translation: "Belki başka zaman.",
      pronunciation: "pö-tetr ün otr fua",
    },
  ],
};

const unit353Speaking: UnitSpeaking = {
  unitId: 353,
  title: "Özür Dileme",
  exercises: [
    // Özür Dileme
    {
      text: "Je suis vraiment désolé.",
      translation: "Gerçekten üzgünüm.",
      pronunciation: "jö süi vre-man de-zo-le",
    },
    {
      text: "Excusez-moi, je suis en retard.",
      translation: "Afedersiniz, geciktim.",
      pronunciation: "eks-kü-ze mua jö süi an rö-tar",
    },
    {
      text: "Pardon, c'est ma faute.",
      translation: "Özür dilerim, benim hatam.",
      pronunciation: "par-don se ma fot",
    },
    {
      text: "Je m'excuse sincèrement.",
      translation: "İçtenlikle özür dilerim.",
      pronunciation: "jö meks-küz san-ser-man",
    },

    // Mazeret
    {
      text: "J'ai un empêchement.",
      translation: "Bir engelim var.",
      pronunciation: "je an am-peş-man",
    },
    {
      text: "J'ai oublié!",
      translation: "Unuttum!",
      pronunciation: "je ub-li-ye",
    },
    {
      text: "Je suis malade.",
      translation: "Hastayım.",
      pronunciation: "jö süi ma-lad",
    },
    {
      text: "Il y a du trafic.",
      translation: "Trafik var.",
      pronunciation: "il ya dü tra-fik",
    },

    // Sebep Belirtme
    {
      text: "À cause du bus.",
      translation: "Otobüs yüzünden.",
      pronunciation: "a koz dü büs",
    },
    {
      text: "Parce que je suis malade.",
      translation: "Çünkü hastayım.",
      pronunciation: "pars kö jö süi ma-lad",
    },

    // Tepkiler
    {
      text: "Ce n'est pas grave.",
      translation: "Önemli değil.",
      pronunciation: "sö ne pa grav",
    },
    {
      text: "C'est promis!",
      translation: "Söz veriyorum!",
      pronunciation: "se pro-mi",
    },
  ],
};

const unit354Speaking: UnitSpeaking = {
  unitId: 354,
  title: "Yol Tarifi",
  exercises: [
    // Yol Sorma
    {
      text: "Pardon, pour aller au musée?",
      translation: "Pardon, müzeye nasıl gidilir?",
      pronunciation: "par-don pur a-le o mü-ze",
    },
    {
      text: "Où est la gare, s'il vous plaît?",
      translation: "Gar nerede lütfen?",
      pronunciation: "u e la gar sil vu ple",
    },
    {
      text: "C'est loin d'ici?",
      translation: "Buradan uzak mı?",
      pronunciation: "se luen di-si",
    },

    // Yol Tarif Etme
    {
      text: "Allez tout droit.",
      translation: "Dümdüz gidin.",
      pronunciation: "a-le tu drua",
    },
    {
      text: "Tournez à gauche.",
      translation: "Sola dönün.",
      pronunciation: "tur-ne a goş",
    },
    {
      text: "Tournez à droite.",
      translation: "Sağa dönün.",
      pronunciation: "tur-ne a druat",
    },
    {
      text: "Prenez la première rue.",
      translation: "Birinci sokağa girin.",
      pronunciation: "prö-ne la prö-myer rü",
    },
    {
      text: "Continuez jusqu'au feu.",
      translation: "Işıklara kadar devam edin.",
      pronunciation: "kon-ti-nü-e jüs-ko fö",
    },

    // Mesafe
    {
      text: "C'est à 5 minutes à pied.",
      translation: "Yürüyerek 5 dakika.",
      pronunciation: "se ta senk mi-nüt a pye",
    },
    {
      text: "C'est tout près.",
      translation: "Çok yakın.",
      pronunciation: "se tu pre",
    },

    // Bağlaçlı
    {
      text: "Puis, tournez à gauche.",
      translation: "Sonra sola dönün.",
      pronunciation: "püi tur-ne a goş",
    },
    {
      text: "C'est en face de la poste.",
      translation: "Postanın karşısında.",
      pronunciation: "se tan fas dö la post",
    },
  ],
};

const unit355Speaking: UnitSpeaking = {
  unitId: 355,
  title: "Şehir Hayatı",
  exercises: [
    // Şehir Tanıtımı
    {
      text: "C'est une ville historique.",
      translation: "Tarihi bir şehir.",
      pronunciation: "se tün vil is-to-rik",
    },
    {
      text: "C'est une grande ville.",
      translation: "Büyük bir şehir.",
      pronunciation: "se tün grand vil",
    },
    {
      text: "C'est une ville magnifique.",
      translation: "Muhteşem bir şehir.",
      pronunciation: "se tün vil ma-nyi-fik",
    },
    // Il y a
    {
      text: "Il y a beaucoup de monuments.",
      translation: "Çok anıt var.",
      pronunciation: "il ya bo-ku dö mo-nü-man",
    },
    {
      text: "Il y a un parc.",
      translation: "Bir park var.",
      pronunciation: "il ya ön park",
    },
    {
      text: "Qu'est-ce qu'il y a à voir?",
      translation: "Görülecek ne var?",
      pronunciation: "kes kil ya a vuar",
    },
    // Konum
    {
      text: "C'est loin d'ici?",
      translation: "Buradan uzak mı?",
      pronunciation: "se luen di-si",
    },
    {
      text: "C'est près de la mosquée.",
      translation: "Caminin yakınında.",
      pronunciation: "se pre dö la mos-ke",
    },
    {
      text: "C'est à côté du musée.",
      translation: "Müzenin yanında.",
      pronunciation: "se a ko-te dü mü-ze",
    },
    // Turist Rehberliği
    {
      text: "La gastronomie est excellente.",
      translation: "Mutfağı mükemmel.",
      pronunciation: "la gas-tro-no-mi e tek-se-lant",
    },
    {
      text: "C'est un endroit magnifique.",
      translation: "Harika bir yer.",
      pronunciation: "se tön an-drua ma-nyi-fik",
    },
    {
      text: "C'est à 10 minutes.",
      translation: "10 dakika mesafede.",
      pronunciation: "se a di mi-nüt",
    },
  ],
};

const unit356Speaking: UnitSpeaking = {
  unitId: 356,
  title: "Kültürel Farklar",
  exercises: [
    // Selamlaşma
    {
      text: "En France, on fait la bise.",
      translation: "Fransa'da yanaktan öpüşülür.",
      pronunciation: "an frans on fe la biz",
    },
    {
      text: "On se serre la main.",
      translation: "El sıkışırız.",
      pronunciation: "on sö ser la men",
    },
    {
      text: "Combien de bises dans ta région?",
      translation: "Bölgede kaç öpücük?",
      pronunciation: "kon-biyen dö biz dan ta re-jyon",
    },
    // Karşılaştırma
    {
      text: "Chez nous, c'est différent.",
      translation: "Bizde farklı.",
      pronunciation: "şe nu se di-fe-ran",
    },
    {
      text: "En Turquie, on fait comme ça.",
      translation: "Türkiye'de böyle yapıyoruz.",
      pronunciation: "an tür-ki on fe kom sa",
    },
    {
      text: "C'est une coutume locale.",
      translation: "Yerel bir gelenek.",
      pronunciation: "se tün ku-tüm lo-kal",
    },
    // Bölgesel
    {
      text: "Ça dépend de la région.",
      translation: "Bölgeye bağlı.",
      pronunciation: "sa de-pan dö la re-jyon",
    },
    {
      text: "Dans le sud, on fait trois bises.",
      translation: "Güneyde üç öpücük yapıyoruz.",
      pronunciation: "dan lö süd on fe trua biz",
    },
    // Nezaket
    {
      text: "C'est poli en France.",
      translation: "Fransa'da kibarca.",
      pronunciation: "se po-li an frans",
    },
    {
      text: "C'est bizarre pour moi.",
      translation: "Bana garip geliyor.",
      pronunciation: "se bi-zar pur mua",
    },
    {
      text: "C'est normal ici.",
      translation: "Burada normal.",
      pronunciation: "se nor-mal i-si",
    },
    {
      text: "C'est la même chose.",
      translation: "Aynı şey.",
      pronunciation: "se la mem şoz",
    },
  ],
};

const unit357Speaking: UnitSpeaking = {
  unitId: 357,
  title: "Eğitim Hayatı",
  exercises: [
    // Okul ve Eğitim
    {
      text: "J'étudie à l'université.",
      translation: "Üniversitede okuyorum.",
      pronunciation: "je-tü-di a lü-ni-ver-si-te",
    },
    {
      text: "Il est au lycée.",
      translation: "O lisede.",
      pronunciation: "il e o li-se",
    },
    {
      text: "J'apprends le français.",
      translation: "Fransızca öğreniyorum.",
      pronunciation: "jap-ran lö fran-se",
    },
    {
      text: "Je ne comprends pas.",
      translation: "Anlamıyorum.",
      pronunciation: "jö nö kom-pran pa",
    },
    {
      text: "Le prof explique la leçon.",
      translation: "Hoca dersi açıklıyor.",
      pronunciation: "lö prof eks-plik la lö-son",
    },
    // Sınav İfadeleri
    {
      text: "J'ai un examen demain.",
      translation: "Yarın sınavım var.",
      pronunciation: "je ön eg-za-men dö-men",
    },
    {
      text: "Je vais passer l'examen.",
      translation: "Sınava gireceğim.",
      pronunciation: "jö ve pa-se leg-za-men",
    },
    {
      text: "J'ai réussi l'examen!",
      translation: "Sınavı geçtim!",
      pronunciation: "je re-ü-si leg-za-men",
    },
    {
      text: "J'ai raté l'examen.",
      translation: "Sınavdan kaldım.",
      pronunciation: "je ra-te leg-za-men",
    },
    {
      text: "Tu as bien révisé?",
      translation: "İyi tekrar yaptın mı?",
      pronunciation: "tü a biyen re-vi-ze",
    },
    // Diyalog
    {
      text: "On peut étudier ensemble?",
      translation: "Birlikte çalışabilir miyiz?",
      pronunciation: "on pö e-tü-dye an-sambl",
    },
    {
      text: "J'espère que je vais réussir.",
      translation: "Umarım geçerim.",
      pronunciation: "jes-per kö jö ve re-ü-sir",
    },
  ],
};

const unit358Speaking: UnitSpeaking = {
  unitId: 358,
  title: "İş Hayatı",
  exercises: [
    // İş Arama
    {
      text: "Je cherche un emploi.",
      translation: "İş arıyorum.",
      pronunciation: "jö şerş ön an-plua",
    },
    {
      text: "J'ai trouvé un travail.",
      translation: "Bir iş buldum.",
      pronunciation: "je tru-ve ön tra-vay",
    },
    // Mülakat
    {
      text: "J'ai un entretien demain.",
      translation: "Yarın mülakatım var.",
      pronunciation: "je ön an-trö-tyen dö-men",
    },
    {
      text: "Signez le contrat, s'il vous plaît.",
      translation: "Sözleşmeyi imzalayın lütfen.",
      pronunciation: "si-nye lö kon-tra sil vu ple",
    },
    // Ofis Hayatı
    {
      text: "Je travaille chez Google.",
      translation: "Google'da çalışıyorum.",
      pronunciation: "jö tra-vay şe gugl",
    },
    {
      text: "Je suis au bureau.",
      translation: "Ofisteyim.",
      pronunciation: "jö süi o bü-ro",
    },
    {
      text: "J'ai une réunion à 15h.",
      translation: "Saat 15'te toplantım var.",
      pronunciation: "je ün re-ü-ni-yon a kenz ör",
    },
    {
      text: "Nous devons finir le projet.",
      translation: "Projeyi bitirmeliyiz.",
      pronunciation: "nu dö-von fi-nir lö pro-je",
    },
    // Profesyonel İletişim
    {
      text: "Je vais envoyer l'email.",
      translation: "Maili göndereceğim.",
      pronunciation: "jö ve an-vua-ye li-meyl",
    },
    {
      text: "Cordialement.",
      translation: "Saygılarımla.",
      pronunciation: "kor-di-al-man",
    },
  ],
};

const unit359Speaking: UnitSpeaking = {
  unitId: 359,
  title: "Teknoloji",
  exercises: [
    // Cihaz kullanımı
    {
      text: "J'allume l'ordinateur.",
      translation: "Bilgisayarı açıyorum.",
      pronunciation: "ja-lüm lor-di-na-tör",
    },
    {
      text: "Tu peux éteindre l'écran?",
      translation: "Ekranı kapatabilir misin?",
      pronunciation: "tü pö e-tendr le-kran",
    },
    {
      text: "Ma souris ne marche pas.",
      translation: "Farem çalışmıyor.",
      pronunciation: "ma su-ri nö marş pa",
    },
    // İnternet ve bağlantı
    {
      text: "Je me connecte au wifi.",
      translation: "Wi-Fi'a bağlanıyorum.",
      pronunciation: "jö mö ko-nekt o wi-fi",
    },
    {
      text: "Quel est le mot de passe?",
      translation: "Şifre ne?",
      pronunciation: "kel e lö mo dö pas",
    },
    {
      text: "Je n'ai pas de connexion internet.",
      translation: "İnternet bağlantım yok.",
      pronunciation: "jö ne pa dö ko-nek-syon en-ter-net",
    },
    // İşlemler
    {
      text: "Cliquez sur le lien.",
      translation: "Linke tıklayın.",
      pronunciation: "kli-ke sür lö lyen",
    },
    {
      text: "Je télécharge un fichier.",
      translation: "Dosya indiriyorum.",
      pronunciation: "jö te-le-şarj ön fi-şye",
    },
    // Sorun çözme
    {
      text: "Ça ne marche pas.",
      translation: "Bu çalışmıyor.",
      pronunciation: "sa nö marş pa",
    },
    {
      text: "Ma batterie est vide.",
      translation: "Şarjım bitti.",
      pronunciation: "ma bat-ri e vid",
    },
  ],
};

const unit360Speaking: UnitSpeaking = {
  unitId: 360,
  title: "A2 Final",
  exercises: [
    {
      text: "Félicitations!",
      translation: "Tebrikler!",
      pronunciation: "fe-li-si-ta-syon",
    },
    {
      text: "Continuez à pratiquer!",
      translation: "Pratik yapmaya devam edin!",
      pronunciation: "kon-ti-nü-e a pra-ti-ke",
    },
  ],
};

// Export
export const frenchA2Speakings: UnitSpeaking[] = [
  unit331Speaking,
  unit332Speaking,
  unit333Speaking,
  unit334Speaking,
  unit335Speaking,
  unit336Speaking,
  unit337Speaking,
  unit338Speaking,
  unit339Speaking,
  unit340Speaking,
  unit341Speaking,
  unit342Speaking,
  unit343Speaking,
  unit344Speaking,
  unit345Speaking,
  unit346Speaking,
  unit347Speaking,
  unit348Speaking,
  unit349Speaking,
  unit350Speaking,
  unit351Speaking,
  unit352Speaking,
  unit353Speaking,
  unit354Speaking,
  unit355Speaking,
  unit356Speaking,
  unit357Speaking,
  unit358Speaking,
  unit359Speaking,
  unit360Speaking,
];

export function getFrenchA2SpeakingForUnit(
  unitId: number,
): UnitSpeaking | undefined {
  return frenchA2Speakings.find((s) => s.unitId === unitId);
}
