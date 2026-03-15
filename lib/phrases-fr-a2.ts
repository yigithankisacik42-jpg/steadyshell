// SteadyShell Kalıplar Veritabanı - Fransızca A2 (331-360)
// Her ünite için ~15 kalıp - Curriculum.ts ile senkronize

interface FrenchPhrase {
  text: string;
  meaning: string;
  pronunciation: string;
}

interface FrenchA2UnitPhrases {
  unitId: number;
  title: string;
  phrases: FrenchPhrase[];
}

// ===== ÜNİTE 331-340 =====
const unit331Phrases: FrenchA2UnitPhrases = {
  unitId: 331,
  title: "Geçmiş Tatiller",
  phrases: [
    {
      text: "J'ai passé de bonnes vacances.",
      meaning: "Güzel tatil geçirdim.",
      pronunciation: "je-pa-se-dö-bon-va-kans",
    },
    {
      text: "C'était magnifique!",
      meaning: "Harikaydı!",
      pronunciation: "se-te-ma-nyi-fik",
    },
    {
      text: "Nous avons visité beaucoup de sites.",
      meaning: "Çok yer gezdik.",
      pronunciation: "nu-za-von-vi-zi-te",
    },
    {
      text: "Le temps était parfait.",
      meaning: "Hava mükemmeldi.",
      pronunciation: "lö-tan-ze-te-par-fe",
    },
    {
      text: "Je me suis bien amusé(e).",
      meaning: "Çok eğlendim.",
      pronunciation: "jö-mö-süi-byan-a-mü-ze",
    },
    {
      text: "On a pris beaucoup de photos.",
      meaning: "Çok fotoğraf çektik.",
      pronunciation: "on-a-pri-bo-ku-dö-fo-to",
    },
    {
      text: "C'était inoubliable.",
      meaning: "Unutulmazdı.",
      pronunciation: "se-te-i-nu-bli-yabl",
    },
    {
      text: "J'ai découvert une belle région.",
      meaning: "Güzel bir bölge keşfettim.",
      pronunciation: "je-de-ku-ver-ün-bel-re-jyon",
    },
    // Yeni Eklenenler
    {
      text: "Je suis allé(e) au bord de la mer.",
      meaning: "Deniz kenarına gittim.",
      pronunciation: "jö-süi-za-le-o-bor-dö-la-mer",
    },
    {
      text: "Nous avons loué une voiture.",
      meaning: "Araba kiraladık.",
      pronunciation: "nu-za-von-lu-e-ün-vua-tür",
    },
    {
      text: "C'était une catastrophe.",
      meaning: "Bir felaketti.",
      pronunciation: "se-te-tün-ka-tas-trof",
    },
    {
      text: "J'ai raté mon avion.",
      meaning: "Uçağımı kaçırdım.",
      pronunciation: "je-ra-te-mon-a-vyon",
    },
    {
      text: "On a fait du camping sauvage.",
      meaning: "Vahşi kamp yaptık.",
      pronunciation: "on-a-fe-dü-kam-ping-so-vaj",
    },
    {
      text: "Je n'ai pas aimé la nourriture.",
      meaning: "Yemeği sevmedim.",
      pronunciation: "jö-ne-pa-ze-me-la-nu-ri-tür",
    },
    {
      text: "Nous sommes rentrés fatigués.",
      meaning: "Yorgun döndük.",
      pronunciation: "nu-som-ran-tre-fa-ti-ge",
    },
  ],
};

const unit332Phrases: FrenchA2UnitPhrases = {
  unitId: 332,
  title: "Gelecek Planları",
  phrases: [
    {
      text: "Je vais voyager cet été.",
      meaning: "Bu yaz seyahat edeceğim.",
      pronunciation: "jö-ve-vua-ya-je-set-e-te",
    },
    {
      text: "J'ai l'intention de partir.",
      meaning: "Gitme niyetindeyim.",
      pronunciation: "je-len-tan-syon-dö-par-tir",
    },
    {
      text: "Je prévois de visiter...",
      meaning: "...ziyaret etmeyi planlıyorum.",
      pronunciation: "jö-pre-vua-dö-vi-zi-te",
    },
    {
      text: "J'espère que ça va marcher.",
      meaning: "Umarım işe yarar.",
      pronunciation: "jes-per-kö-sa-va-mar-şe",
    },
    {
      text: "L'année prochaine, je vais...",
      meaning: "Gelecek yıl ... yapacağım.",
      pronunciation: "la-ne-pro-şen-jö-ve",
    },
    {
      text: "J'ai hâte d'y aller.",
      meaning: "Oraya gitmek için sabırsızlanıyorum.",
      pronunciation: "je-at-di-a-le",
    },
    {
      text: "Ce sera formidable!",
      meaning: "Harika olacak!",
      pronunciation: "sö-sö-ra-for-mi-dabl",
    },
    // Yeni Eklenenler
    {
      text: "Quels sont tes projets?",
      meaning: "Planların neler?",
      pronunciation: "kel-son-te-pro-je",
    },
    {
      text: "Je n'ai rien prévu.",
      meaning: "Hiçbir şey planlamadım.",
      pronunciation: "jö-ne-ryan-pre-vü",
    },
    {
      text: "On verra bien.",
      meaning: "Bakacağız / Göreceğiz.",
      pronunciation: "on-ve-ra-byan",
    },
    {
      text: "C'est décidé.",
      meaning: "Karar verildi.",
      pronunciation: "se-de-si-de",
    },
    {
      text: "Ça dépend du temps.",
      meaning: "Havaya bağlı.",
      pronunciation: "sa-de-pan-dü-tan",
    },
    {
      text: "Je compte déménager.",
      meaning: "Taşınmayı düşünüyorum.",
      pronunciation: "jö-kont-de-me-na-je",
    },
    {
      text: "Tu vas faire quoi ce week-end?",
      meaning: "Bu hafta sonu ne yapacaksın?",
      pronunciation: "tü-va-fer-kua-sö-wi-kend",
    },
    {
      text: "J'aimerais changer de travail.",
      meaning: "İş değiştirmek isterdim.",
      pronunciation: "je-mö-re-şan-je-dö-tra-vay",
    },
  ],
};

const unit333Phrases: FrenchA2UnitPhrases = {
  unitId: 333,
  title: "Sağlık ve Hastalık",
  phrases: [
    // Şikayet kalıpları
    {
      text: "Je ne me sens pas bien.",
      meaning: "Kendimi iyi hissetmiyorum.",
      pronunciation: "jö-nö-mö-san-pa-byan",
    },
    {
      text: "Je suis malade.",
      meaning: "Hastayım.",
      pronunciation: "jö-süi-ma-lad",
    },
    {
      text: "J'ai mal à la tête.",
      meaning: "Başım ağrıyor.",
      pronunciation: "je-mal-a-la-tet",
    },
    {
      text: "J'ai mal à la gorge.",
      meaning: "Boğazım ağrıyor.",
      pronunciation: "je-mal-a-la-gorj",
    },
    {
      text: "J'ai mal au ventre.",
      meaning: "Karnım ağrıyor.",
      pronunciation: "je-mal-o-vantr",
    },
    {
      text: "J'ai mal au dos.",
      meaning: "Sırtım ağrıyor.",
      pronunciation: "je-mal-o-do",
    },
    {
      text: "J'ai de la fièvre.",
      meaning: "Ateşim var.",
      pronunciation: "je-dö-la-fyevr",
    },
    {
      text: "Je tousse beaucoup.",
      meaning: "Çok öksürüyorum.",
      pronunciation: "jö-tus-bo-ku",
    },
    // Doktor soruları
    {
      text: "Depuis quand êtes-vous malade?",
      meaning: "Ne zamandır hastasınız?",
      pronunciation: "dö-püi-kan-et-vu-ma-lad",
    },
    {
      text: "Où avez-vous mal?",
      meaning: "Nerede ağrınız var?",
      pronunciation: "u-a-ve-vu-mal",
    },
    // Doktor tavsiyeleri (Il faut + Devoir)
    {
      text: "Il faut vous reposer.",
      meaning: "Dinlenmeniz lazım.",
      pronunciation: "il-fo-vu-rö-po-ze",
    },
    {
      text: "Il faut boire beaucoup d'eau.",
      meaning: "Çok su içmeniz lazım.",
      pronunciation: "il-fo-buar-bo-ku-do",
    },
    {
      text: "Vous devez prendre ce médicament.",
      meaning: "Bu ilacı almalısınız.",
      pronunciation: "vu-dö-ve-prandr-sö-me-di-ka-man",
    },
    {
      text: "Vous devez rester au lit.",
      meaning: "Yatakta kalmalısınız.",
      pronunciation: "vu-dö-ve-res-te-o-li",
    },
    {
      text: "Prenez ce médicament trois fois par jour.",
      meaning: "Bu ilacı günde üç kez alın.",
      pronunciation: "prö-ne-sö-me-di-ka-man-trua-fua-par-jur",
    },
    // Sonuç
    {
      text: "Vous allez guérir bientôt.",
      meaning: "Yakında iyileşeceksiniz.",
      pronunciation: "vu-za-le-ge-rir-byan-to",
    },
  ],
};

const unit334Phrases: FrenchA2UnitPhrases = {
  unitId: 334,
  title: "Bankada",
  phrases: [
    {
      text: "Je voudrais ouvrir un compte.",
      meaning: "Hesap açmak rica ediyorum.",
      pronunciation: "jö-vu-dre-uv-rir-ön-kont",
    },
    {
      text: "Pourriez-vous m'aider s'il vous plaît?",
      meaning: "Bana yardım edebilir miydiniz lütfen?",
      pronunciation: "pu-rye-vu-me-de-sil-vu-ple",
    },
    {
      text: "J'aimerais parler au directeur.",
      meaning: "Müdürle konuşmak isterdim.",
      pronunciation: "je-mö-re-par-le-o-di-rek-tör",
    },
    {
      text: "Je voudrais faire un virement.",
      meaning: "Havale yapmak istiyorum.",
      pronunciation: "jö-vu-dre-fer-ön-vir-man",
    },
    {
      text: "Pourriez-vous vérifier mon solde?",
      meaning: "Bakiyemi kontrol edebilir misiniz?",
      pronunciation: "pu-rye-vu-ve-ri-fye-mon-sold",
    },
    {
      text: "Est-ce que je peux retirer de l'argent?",
      meaning: "Para çekebilir miyim?",
      pronunciation: "es-kö-jö-pö-rö-ti-re-dö-lar-jan",
    },
    {
      text: "J'aimerais demander une carte de crédit.",
      meaning: "Kredi kartı istemek isterdim.",
      pronunciation: "je-mö-re-dö-man-de-ün-kart",
    },
    {
      text: "Où est le distributeur le plus proche?",
      meaning: "En yakın ATM nerede?",
      pronunciation: "u-e-lö-dis-tri-bü-tör-lö-plü-proş",
    },
    // Yeni Eklenenler
    {
      text: "J'ai perdu ma carte bancaire.",
      meaning: "Banka kartımı kaybettim.",
      pronunciation: "je-per-dü-ma-kart-ban-ker",
    },
    {
      text: "Le distributeur a avalé ma carte.",
      meaning: "ATM kartımı yuttu.",
      pronunciation: "lö-dis-tri-bü-tör-a-a-va-le-ma-kart",
    },
    {
      text: "J'ai oublié mon code secret.",
      meaning: "Şifremi unuttum.",
      pronunciation: "je-u-bli-ye-mon-kod-sö-kre",
    },
    {
      text: "Quel est le taux de change?",
      meaning: "Döviz kuru nedir?",
      pronunciation: "kel-e-lö-to-dö-şanj",
    },
    {
      text: "Il y a une erreur sur mon relevé.",
      meaning: "Hesap özetimde bir hata var.",
      pronunciation: "il-ya-ün-e-rör-sür-mon-rö-lö-ve",
    },
    {
      text: "Je veux clôturer mon compte.",
      meaning: "Hesabımı kapatmak istiyorum.",
      pronunciation: "jö-vö-klo-tü-re-mon-kont",
    },
    {
      text: "Avez-vous de la monnaie?",
      meaning: "Bozuk paranız var mı?",
      pronunciation: "a-ve-vu-dö-la-mo-ne",
    },
  ],
};

const unit335Phrases: FrenchA2UnitPhrases = {
  unitId: 335,
  title: "Postanede",
  phrases: [
    {
      text: "Je voudrais envoyer ce colis.",
      meaning: "Bu koliyi göndermek istiyorum.",
      pronunciation: "jö-vu-dre-an-vua-ye-sö-ko-li",
    },
    {
      text: "J'ai beaucoup de lettres.",
      meaning: "Çok mektubum var.",
      pronunciation: "je-bo-ku-dö-letr",
    },
    {
      text: "Il y a trop de monde.",
      meaning: "Çok fazla insan var.",
      pronunciation: "il-ya-tro-dö-mond",
    },
    {
      text: "Je voudrais un carnet de timbres.",
      meaning: "Bir defter pul istiyorum.",
      pronunciation: "jö-vu-dre-ön-kar-ne-dö-tanbr",
    },
    {
      text: "C'est un paquet de livres.",
      meaning: "Bu bir kitap paketi.",
      pronunciation: "se-tön-pa-ke-dö-livr",
    },
    {
      text: "Il me faut un peu de temps.",
      meaning: "Bana biraz zaman lazım.",
      pronunciation: "il-mö-fo-ön-pö-dö-tan",
    },
    {
      text: "Combien de jours ça prend?",
      meaning: "Kaç gün sürer?",
      pronunciation: "kom-byan-dö-jur-sa-pran",
    },
    // Yeni Eklenenler
    {
      text: "C'est pour l'étranger.",
      meaning: "Bu yurtdışı için.",
      pronunciation: "se-pur-le-tran-je",
    },
    {
      text: "Est-ce que c'est urgent?",
      meaning: "Acil mi?",
      pronunciation: "es-kö-se-tür-jan",
    },
    {
      text: "Ça pèse combien?",
      meaning: "Ağırlığı ne kadar?",
      pronunciation: "sa-pez-kom-byan",
    },
    {
      text: "Je voudrais l'envoyer en recommandé.",
      meaning: "Taahhütlü göndermek istiyorum.",
      pronunciation: "jö-vu-dre-lan-vua-ye-an-rö-ko-man-de",
    },
    {
      text: "Quel est le code postal?",
      meaning: "Posta kodu nedir?",
      pronunciation: "kel-e-lö-kod-pos-tal",
    },
    {
      text: "Remplissez ce formulaire, s'il vous plaît.",
      meaning: "Lütfen bu formu doldurun.",
      pronunciation: "ran-pli-se-sö-for-mü-ler",
    },
    {
      text: "Je peux avoir un reçu?",
      meaning: "Makbuz alabilir miyim?",
      pronunciation: "jö-pö-za-vuar-ön-rö-sü",
    },
    {
      text: "Où est la boîte aux lettres?",
      meaning: "Posta kutusu nerede?",
      pronunciation: "u-e-la-buat-o-letr",
    },
  ],
};

const unit336Phrases: FrenchA2UnitPhrases = {
  unitId: 336,
  title: "Otel Rezervasyonu",
  phrases: [
    // Standart
    {
      text: "J'ai une réservation au nom de...",
      meaning: "... adına rezervasyonum var.",
      pronunciation: "je-ün-re-zer-va-syon-o-nom-dö",
    },
    {
      text: "Je voudrais réserver une chambre.",
      meaning: "Bir oda ayırtmak istiyorum.",
      pronunciation: "jö-vu-dre-re-zer-ve-ün-shanbr",
    },
    {
      text: "Est-ce que le petit-déjeuner est inclus?",
      meaning: "Kahvaltı dahil mi?",
      pronunciation: "es-kö-lö-pö-ti-de-jö-ne-e-ten-klü",
    },
    {
      text: "À quelle heure est le check-out?",
      meaning: "Çıkış saati kaçta?",
      pronunciation: "a-kel-ör-e-lö-chek-aut",
    },
    {
      text: "Avez-vous une chambre avec vue?",
      meaning: "Manzaralı odanız var mı?",
      pronunciation: "a-ve-vu-ün-shanbr-a-vek-vü",
    },

    // Si Cümleleri (Koşullar)
    {
      text: "Si je réserve maintenant, c'est moins cher?",
      meaning: "Şimdi ayırtırsam daha mı ucuz?",
      pronunciation: "si-jö-re-zerv-men-te-nan-se-muen-sher",
    },
    {
      text: "S'il y a de la place, je reste deux nuits.",
      meaning: "Yer varsa iki gece kalırım.",
      pronunciation: "sil-ya-dö-la-plas-jö-rest-dö-nüi",
    },
    {
      text: "Si j'annule, je dois payer?",
      meaning: "İptal edersem ödemek zorunda mıyım?",
      pronunciation: "si-ja-nül-jö-dua-pe-ye",
    },
    {
      text: "Si vous avez une chambre calme, je la prends.",
      meaning: "Sessiz bir odanız varsa alırım.",
      pronunciation: "si-vu-za-ve-ün-shanbr-kalm-jö-la-pran",
    },
    {
      text: "Appelez-moi s'il y a un problème.",
      meaning: "Sorun olursa beni arayın.",
      pronunciation: "a-pö-le-mua-sil-ya-ön-prob-lem",
    },

    // Ekstra
    {
      text: "Je voudrais payer par carte.",
      meaning: "Kartla ödemek istiyorum.",
      pronunciation: "jö-vu-dre-pe-ye-par-kart",
    },
    {
      text: "Pouvez-vous me réveiller à 7h?",
      meaning: "Beni 7'de uyandırabilir misiniz?",
      pronunciation: "pu-ve-vu-mö-re-ve-ye-a-set-ör",
    },
    {
      text: "Il y a un parking gratuit?",
      meaning: "Ücretsiz otopark var mı?",
      pronunciation: "il-ya-ön-par-king-gra-tüi",
    },
    {
      text: "La télécommande ne marche pas.",
      meaning: "Kumanda çalışmıyor.",
      pronunciation: "la-te-le-ko-mand-nö-marsh-pa",
    },
    {
      text: "C'est complet ce soir.",
      meaning: "Bu akşam doluyuz.",
      pronunciation: "se-kom-ple-sö-suar",
    },
  ],
};

const unit337Phrases: FrenchA2UnitPhrases = {
  unitId: 337,
  title: "Tren İstasyonunda (Soru Sorma)",
  phrases: [
    // Temel İstekler (Je voudrais...)
    {
      text: "Je voudrais un billet pour Paris.",
      meaning: "Paris'e bir bilet rica ediyorum.",
      pronunciation: "jö-vu-dre-ön-bi-ye-pur-pa-ri",
    },
    {
      text: "Un aller-retour, s'il vous plaît.",
      meaning: "Gidiş-dönüş lütfen.",
      pronunciation: "ön-a-le-rö-tur-sil-vu-ple",
    },
    {
      text: "Je voudrais réserver une place.",
      meaning: "Yer ayırtmak istiyorum.",
      pronunciation: "jö-vu-dre-re-zer-ve-ün-plas",
    },

    // Inversion (Resmi Soru Sorma)
    {
      text: "Avez-vous des réductions?",
      meaning: "İndiriminiz var mı?",
      pronunciation: "a-ve-vu-de-re-dük-syon",
    },
    {
      text: "À quelle heure part le train?",
      meaning: "Tren saat kaçta kalkıyor?",
      pronunciation: "a-kel-ör-par-lö-tren",
    },
    {
      text: "De quel quai part le train?",
      meaning: "Tren hangi perondan kalkıyor?",
      pronunciation: "dö-kel-ke-par-lö-tren",
    },
    {
      text: "Est-ce direct?",
      meaning: "Direkt mi?",
      pronunciation: "es-di-rekt",
    },
    {
      text: "Faut-il composter le billet?",
      meaning: "Bileti damgalamak gerekiyor mu?",
      pronunciation: "fo-til-kom-pos-te-lö-bi-ye",
    },

    // Kibar Sorular (Puis-je...)
    {
      text: "Puis-je avoir un horaire?",
      meaning: "Tarife alabilir miyim?",
      pronunciation: "püi-jö-a-vuar-ön-o-rer",
    },
    {
      text: "Puis-je payer par carte?",
      meaning: "Kartla ödeyebilir miyim?",
      pronunciation: "püi-jö-pe-ye-par-kart",
    },

    // Sorunlar ve Bilgiler
    {
      text: "Le train a du retard.",
      meaning: "Tren gecikmeli.",
      pronunciation: "lö-tren-a-dü-rö-tar",
    },
    {
      text: "J'ai raté ma correspondance.",
      meaning: "Aktarmamı kaçırdım.",
      pronunciation: "je-ra-te-ma-ko-res-pon-dans",
    },
    {
      text: "C'est complet.",
      meaning: "Burası/Tren dolu.",
      pronunciation: "se-kom-ple",
    },
    {
      text: "Où est la salle d'attente?",
      meaning: "Bekleme salonu nerede?",
      pronunciation: "u-e-la-sal-da-tant",
    },
    {
      text: "Attention à la fermeture des portes.",
      meaning: "Kapıların kapanmasına dikkat edin.",
      pronunciation: "a-tan-syon-a-la-fer-mö-tür-de-port",
    },
  ],
};

const unit338Phrases: FrenchA2UnitPhrases = {
  unitId: 338,
  title: "Havaalanında",
  phrases: [
    // Sorular ve Yer Sorma
    {
      text: "Où est l'enregistrement?",
      meaning: "Check-in nerede?",
      pronunciation: "u-e-lan-rö-jistr-man",
    },
    {
      text: "Où est la porte d'embarquement?",
      meaning: "Biniş kapısı nerede?",
      pronunciation: "u-e-la-port-dan-bark-man",
    },
    {
      text: "Combien de bagages puis-je prendre?",
      meaning: "Kaç bagaj alabilirim?",
      pronunciation: "kom-byan-dö-ba-gaj-püi-jö-prandr",
    },
    {
      text: "C'est un bagage à main.",
      meaning: "Bu el bagajı.",
      pronunciation: "se-tön-ba-gaj-a-men",
    },

    // Pasif Yapı ve Durumlar
    {
      text: "Le vol est annulé.",
      meaning: "Uçuş iptal edildi.",
      pronunciation: "lö-vol-e-a-nü-le",
    },
    {
      text: "Mon vol a été retardé.",
      meaning: "Uçuşum ertelendi.",
      pronunciation: "mon-vol-a-e-te-rö-tar-de",
    },
    {
      text: "Mes bagages ont été perdus.",
      meaning: "Bagajlarım kayboldu.",
      pronunciation: "me-ba-gaj-on-te-te-per-dü",
    },
    {
      text: "Le vol est complet.",
      meaning: "Uçuş dolu.",
      pronunciation: "lö-vol-e-kom-ple",
    },
    {
      text: "Est-ce que le vol est à l'heure?",
      meaning: "Uçuş zamanında mı?",
      pronunciation: "es-kö-lö-vol-e-a-lör",
    },

    // Güvenlik ve Gümrük
    {
      text: "Rien à déclarer.",
      meaning: "Bildirecek bir şey yok.",
      pronunciation: "ryan-a-de-kla-re",
    },
    {
      text: "Enlevez votre ceinture.",
      meaning: "Kemerinizi çıkarın.",
      pronunciation: "an-lö-ve-votr-sen-tür",
    },
    {
      text: "Ouvrez votre sac, s'il vous plaît.",
      meaning: "Çantanızı açın lütfen.",
      pronunciation: "uv-re-votr-sak",
    },
    {
      text: "Préparez votre passeport.",
      meaning: "Pasaportunuzu hazırlayın.",
      pronunciation: "pre-pa-re-votr-pas-por",
    },

    // Uçak İçi
    {
      text: "Attachez votre ceinture.",
      meaning: "Kemerinizi bağlayın.",
      pronunciation: "a-ta-şe-votr-sen-tür",
    },
    {
      text: "J'ai une escale à Paris.",
      meaning: "Paris'te aktarmam var.",
      pronunciation: "je-ün-es-kal-a-pa-ri",
    },
  ],
};

const unit339Phrases: FrenchA2UnitPhrases = {
  unitId: 339,
  title: "Restoranda Sipariş",
  phrases: [
    {
      text: "Le menu, s'il vous plaît.",
      meaning: "Menü lütfen.",
      pronunciation: "lö-mö-nü-sil-vu-ple",
    },
    {
      text: "Qu'est-ce que vous recommandez?",
      meaning: "Ne tavsiye edersiniz?",
      pronunciation: "kes-kö-vu-rö-ko-man-de",
    },
    {
      text: "Je voudrais le plat du jour.",
      meaning: "Günün yemeğini istiyorum.",
      pronunciation: "jö-vu-dre-lö-pla-dü-jur",
    },
    {
      text: "C'est délicieux!",
      meaning: "Çok lezzetli!",
      pronunciation: "se-de-li-syö",
    },
    {
      text: "L'addition, s'il vous plaît.",
      meaning: "Hesap lütfen.",
      pronunciation: "la-di-syon-sil-vu-ple",
    },
    {
      text: "Je peux payer par carte?",
      meaning: "Kartla ödeyebilir miyim?",
      pronunciation: "jö-pö-pe-ye-par-kart",
    },
  ],
};

const unit340Phrases: FrenchA2UnitPhrases = {
  unitId: 340,
  title: "Yemek Tarifi",
  phrases: [
    // Hazırlık ve Güvenlik (Emir Kipi)
    {
      text: "Lave-toi les mains!",
      meaning: "Ellerini yıka!",
      pronunciation: "lav-tua-le-men",
    },
    {
      text: "Mets ton tablier.",
      meaning: "Önlüğünü tak.",
      pronunciation: "me-ton-ta-bli-ye",
    },
    {
      text: "Fais attention au couteau!",
      meaning: "Bıçağa dikkat et!",
      pronunciation: "fe-za-tan-syon-o-ku-to",
    },
    {
      text: "Ne touche pas le four!",
      meaning: "Fırına dokunma!",
      pronunciation: "nö-tuş-pa-lö-fur",
    },

    // Tarif Adımları
    {
      text: "D'abord, épluchez les pommes de terre.",
      meaning: "Önce patatesleri soyun.",
      pronunciation: "bo-na-pe-ti",
    },
    {
      text: "Coupez les tomates.",
      meaning: "Domatesleri doğrayın.",
      pronunciation: "ku-pe le to-mat",
    },
    {
      text: "Ajoutez du sel.",
      meaning: "Tuz ekleyin.",
      pronunciation: "a-ju-te du sel",
    },
    {
      text: "Mélangez bien.",
      meaning: "İyice karıştırın.",
      pronunciation: "me-lan-je byan",
    },
    {
      text: "Versez un peu d'eau.",
      meaning: "Biraz su dökün.",
      pronunciation: "ver-sez un pö do",
    },
    {
      text: "Faites cuire 20 minutes.",
      meaning: "20 dakika pişirin.",
      pronunciation: "fet küir van minüt",
    },
    {
      text: "Goûtez la sauce.",
      meaning: "Sosun tadına bakın.",
      pronunciation: "gu-te la sos",
    },
    {
      text: "Servez chaud.",
      meaning: "Sıcak servis edin.",
      pronunciation: "ser-ve şo",
    },
    {
      text: "Passe-moi le pain, s'il te plaît.",
      meaning: "Bana ekmeği uzat lütfen.",
      pronunciation: "pas-mua-lö-pen-sil-tö-ple",
    },
    {
      text: "C'est vraiment délicieux.",
      meaning: "Gerçekten çok lezzetli.",
      pronunciation: "se-vre-man-de-li-syö",
    },
    {
      text: "Qui va faire la vaisselle?",
      meaning: "Bulaşığı kim yıkayacak?",
      pronunciation: "ki-va-fer-la-ve-sel",
    },
  ],
};

// ===== ÜNİTE 341-350 =====
const unit341Phrases: FrenchA2UnitPhrases = {
  unitId: 341,
  title: "Alışveriş Diyaloğu",
  phrases: [
    {
      text: "Ce pantalon est plus cher que ce t-shirt.",
      meaning: "Bu pantolon, bu tişörtten daha pahalıdır.",
      pronunciation: "sö-pan-ta-lon-e-plü-şer-kö-sö-ti-şört",
    },
    {
      text: "Cette veste est moins grande que ce pull.",
      meaning: "Bu ceket, bu kazaktan daha az büyüktür.",
      pronunciation: "set-vest-e-muen-grand-kö-sö-pül",
    },
    {
      text: "Ces chaussures sont aussi confortables que ces baskets.",
      meaning: "Bu ayakkabılar, bu spor ayakkabılar kadar rahattır.",
      pronunciation: "se-şo-sür-son-o-si-kon-for-tabl-kö-se-bas-ket",
    },
    {
      text: "C'est meilleur que l'autre.",
      meaning: "Bu, diğerinden daha iyi.",
      pronunciation: "se-me-yör-kö-lotr",
    },
    {
      text: "Laquelle tu préfères ?",
      meaning: "Hangisini tercih edersin?",
      pronunciation: "la-kel-tü-pre-fer",
    },
    {
      text: "Je pense que la veste noire est plus élégante.",
      meaning: "Bence siyah ceket daha şık.",
      pronunciation: "jö-pans-kö-la-vest-nuar-e-plü-ze-le-gant",
    },
    {
      text: "Oui, mais elle est aussi plus chère !",
      meaning: "Evet, ama aynı zamanda daha pahalı!",
      pronunciation: "ui-me-el-e-o-si-plü-şer",
    },
    {
      text: "La veste bleue est moins chère.",
      meaning: "Mavi ceket daha az pahalı (daha ucuz).",
      pronunciation: "la-vest-blö-e-muen-şer",
    },
    {
      text: "Tu as raison, j'achète la bleue !",
      meaning: "Haklısın, maviyi satın alıyorum!",
      pronunciation: "tü-a-re-zon-ja-şet-la-blö",
    },
    {
      text: "Est-ce qu'il y a une réduction ?",
      meaning: "İndirim var mı?",
      pronunciation: "es-kil-i-a-ün-re-dük-syon",
    },
  ],
};

const unit342Phrases: FrenchA2UnitPhrases = {
  unitId: 342,
  title: "Kıyafet Alışverişi",
  phrases: [
    {
      text: "Je peux essayer ce pull ?",
      meaning: "Bu kazağı deneyebilir miyim?",
      pronunciation: "jö-pö-e-se-ye-sö-pül",
    },
    {
      text: "Quelle taille faites-vous ?",
      meaning: "Bedeniniz ne?",
      pronunciation: "kel-tay-fet-vu",
    },
    {
      text: "Je cherche une robe noire.",
      meaning: "Siyah bir elbise arıyorum.",
      pronunciation: "jö-şerş-ün-rob-nuar",
    },
    {
      text: "Cette robe vous va très bien !",
      meaning: "Bu elbise size çok yakışıyor!",
      pronunciation: "set-rob-vu-va-tre-biyen",
    },
    {
      text: "Ça coûte combien ?",
      meaning: "Ne kadar tutuyor?",
      pronunciation: "sa-kut-kon-biyen",
    },
    {
      text: "Je paie par carte.",
      meaning: "Kartla ödüyorum.",
      pronunciation: "jö-pey-par-kart",
    },
    {
      text: "J'achète ce pantalon et cette chemise.",
      meaning: "Bu pantolonu ve bu gömleği satın alıyorum.",
      pronunciation: "jaşet-sö-panta-lon-e-set-şömiz",
    },
    {
      text: "Vous l'avez en bleu ?",
      meaning: "Mavisi var mı?",
      pronunciation: "vu-la-ve-an-blö",
    },
    {
      text: "C'est parfait, je le prends !",
      meaning: "Mükemmel, alıyorum!",
      pronunciation: "se-par-fe-jö-lö-pran",
    },
    {
      text: "Où est la cabine d'essayage ?",
      meaning: "Giyinme kabini nerede?",
      pronunciation: "u-e-la-ka-bin-de-se-yaj",
    },
  ],
};

const unit343Phrases: FrenchA2UnitPhrases = {
  unitId: 343,
  title: "Ev İşleri",
  phrases: [
    {
      text: "Je viens de faire le ménage.",
      meaning: "Az önce temizlik yaptım.",
      pronunciation: "jö-viyen-dö-fer-lö-me-naj",
    },
    {
      text: "C'est ton tour de faire la vaisselle.",
      meaning: "Bulaşık yıkama sırası sende.",
      pronunciation: "se-ton-tur-dö-fer-la-ve-sel",
    },
    {
      text: "Range ta chambre !",
      meaning: "Odanı topla!",
      pronunciation: "ranj-ta-şanbr",
    },
    {
      text: "J'ai passé l'aspirateur.",
      meaning: "Süpürge çektim.",
      pronunciation: "je-pa-se-las-pi-ra-tör",
    },
    {
      text: "Tu viens de faire la lessive ?",
      meaning: "Az önce çamaşır mı yıkadın?",
      pronunciation: "tü-viyen-dö-fer-la-le-siv",
    },
    {
      text: "Il vient de passer l'aspirateur.",
      meaning: "O az önce süpürge çekti.",
      pronunciation: "il-viyen-dö-pa-se-las-pi-ra-tör",
    },
    {
      text: "La maison est propre maintenant.",
      meaning: "Ev şimdi temiz.",
      pronunciation: "la-me-zon-e-propr-ment-nan",
    },
    {
      text: "Je vais faire le lit.",
      meaning: "Yatağı yapacağım.",
      pronunciation: "jö-ve-fer-lö-li",
    },
    {
      text: "Nous venons de nettoyer la cuisine.",
      meaning: "Az önce mutfağı temizledik.",
      pronunciation: "nu-vö-non-dö-ne-tua-ye-la-küi-zin",
    },
    {
      text: "Tu peux repasser les chemises ?",
      meaning: "Gömlekleri ütüleyebilir misin?",
      pronunciation: "tü-pö-rö-pa-se-le-şö-miz",
    },
  ],
};

const unit344Phrases: FrenchA2UnitPhrases = {
  unitId: 344,
  title: "Günlük Haberler",
  phrases: [
    {
      text: "Tu as vu les infos ?",
      meaning: "Haberleri gördün mü?",
      pronunciation: "tü-a-vü-le-zen-fo",
    },
    {
      text: "Qu'est-ce qui s'est passé ?",
      meaning: "Ne oldu?",
      pronunciation: "kes-ki-se-pa-se",
    },
    {
      text: "C'est incroyable !",
      meaning: "İnanılmaz!",
      pronunciation: "se-ten-krua-yabl",
    },
    {
      text: "J'ai lu dans le journal.",
      meaning: "Gazetede okudum.",
      pronunciation: "je-lü-dan-lö-jur-nal",
    },
    {
      text: "La météo était terrible hier soir.",
      meaning: "Dün akşam hava durumu berbattı.",
      pronunciation: "la-me-te-o-e-te-te-ribl-iyer-suar",
    },
    {
      text: "Il y avait beaucoup de vent.",
      meaning: "Çok rüzgar vardı.",
      pronunciation: "il-ya-ve-bo-ku-dö-van",
    },
    {
      text: "Les gens regardaient les infos.",
      meaning: "İnsanlar haberleri izliyordu.",
      pronunciation: "le-jan-rö-gar-de-le-zen-fo",
    },
    {
      text: "Je parlais avec les gens.",
      meaning: "İnsanlarla konuşuyordum.",
      pronunciation: "jö-par-le-a-vek-le-jan",
    },
    {
      text: "Ils étaient très stressés !",
      meaning: "Çok stresliydiler!",
      pronunciation: "ilz-e-te-tre-stre-se",
    },
    {
      text: "Quand j'étais jeune, je lisais le journal.",
      meaning: "Gençken gazete okurdum.",
      pronunciation: "kan-je-te-jön-jö-li-ze-lö-jur-nal",
    },
  ],
};

const unit345Phrases: FrenchA2UnitPhrases = {
  unitId: 345,
  title: "TV Programları",
  phrases: [
    {
      text: "Passe-moi la télécommande, s'il te plaît.",
      meaning: "Lütfen bana kumandayı uzat.",
      pronunciation: "pas-mua-la-te-le-ko-mand, sil-tö-ple",
    },
    {
      text: "Pourquoi ? L'émission qui commence est très bien.",
      meaning: "Neden? Başlayan program çok iyi.",
      pronunciation: "pur-kua ? le-mi-syon ki komans e tre biyen",
    },
    {
      text: "Non, c'est le présentateur que je déteste ! Il parle trop.",
      meaning: "Hayır, bu benim nefret ettiğim sunucu! Çok konuşuyor.",
      pronunciation: "non, se lö pre-zan-ta-tör kö jö de-test ! il parl tro",
    },
    {
      text: "Alors, on regarde les infos ?",
      meaning: "Öyleyse haberleri mi izleyelim?",
      pronunciation: "a-lor, on rö-gard le zen-fo ?",
    },
    {
      text: "D'accord. Mets la chaîne que tu préfères.",
      meaning: "Tamam. Senin tercih ettiğin kanalı aç.",
      pronunciation: "da-kor. me la şen kö tü pre-fer",
    },
    {
      text: "Super. C'est une chaîne qui donne de bonnes nouvelles.",
      meaning: "Süper. Bu, iyi haberler veren bir kanal.",
      pronunciation: "sü-per. se tün şen ki don dö bon nu-vel",
    },
  ],
};

const unit346Phrases: FrenchA2UnitPhrases = {
  unitId: 346,
  title: "Sinema ve Filmler",
  phrases: [
    {
      text: "On va au cinéma ce soir ?",
      meaning: "Bu akşam sinemaya gidelim mi?",
      pronunciation: "on va o sinema sö suar",
    },
    {
      text: "C'est quel genre de film ?",
      meaning: "Ne tür bir film?",
      pronunciation: "se kel janr dö film",
    },
    {
      text: "C'est un film d'action très excitant.",
      meaning: "Çok heyecanlı bir aksiyon filmi.",
      pronunciation: "se tön film daksyon tre zeksitan",
    },
    {
      text: "C'est le meilleur film de l'année !",
      meaning: "Bu yılın en iyi filmi!",
      pronunciation: "se lö meyör film dö lane",
    },
    {
      text: "Je n'aime pas les films d'horreur.",
      meaning: "Korku filmlerini sevmem.",
      pronunciation: "jö nem pa le film dorör",
    },
    {
      text: "C'est la comédie la plus amusante.",
      meaning: "Bu en eğlenceli komedidir.",
      pronunciation: "se la komedi la plü zamüzant",
    },
    {
      text: "Qui est le réalisateur de ce film ?",
      meaning: "Bu filmin yönetmeni kim?",
      pronunciation: "ki e lö realizatör dö sö film",
    },
    {
      text: "C'est l'acteur le plus célèbre au monde.",
      meaning: "Dünyadaki en ünlü oyuncudur.",
      pronunciation: "se laktör lö plü selebr o mond",
    },
    {
      text: "L'histoire est la moins intéressante.",
      meaning: "Hikaye en az ilginç olanıdır.",
      pronunciation: "listu-ar e la muen zenteresant",
    },
    {
      text: "Le film commence à quelle heure ?",
      meaning: "Film saat kaçta başlıyor?",
      pronunciation: "lö film komans a kel ör",
    },
  ],
};

const unit347Phrases: FrenchA2UnitPhrases = {
  unitId: 347,
  title: "Müzik Zevkleri",
  phrases: [
    {
      text: "Quel genre de musique aimes-tu?",
      meaning: "Ne tür müzik seversin?",
      pronunciation: "kel-janr-dö-mü-zik-em-tü",
    },
    {
      text: "J'écoute du rock depuis 2015.",
      meaning: "2015'ten beri rock dinliyorum.",
      pronunciation: "je-kut-dü-rok-dö-püi-dö-mil-kenz",
    },
    {
      text: "Tu joues de la guitare?",
      meaning: "Gitar çalıyor musun?",
      pronunciation: "tü-ju-dö-la-gi-tar",
    },
    {
      text: "Je joue du piano depuis 3 ans.",
      meaning: "3 yıldır piyano çalıyorum.",
      pronunciation: "jö-ju-dü-pya-no-dö-püi-trua-zan",
    },
    {
      text: "Il chante depuis l'enfance.",
      meaning: "Çocukluktan beri şarkı söylüyor.",
      pronunciation: "il-şant-dö-püi-lan-fans",
    },
    {
      text: "Nous écoutons ce groupe depuis longtemps.",
      meaning: "Uzun zamandır bu grubu dinliyoruz.",
      pronunciation: "nuz-e-ku-ton-sö-grup-dö-püi-lon-tan",
    },
    {
      text: "Tu les écoutes depuis quand?",
      meaning: "Onları ne zamandan beri dinliyorsun?",
      pronunciation: "tü-le-ze-kut-dö-püi-kan",
    },
    {
      text: "J'adore leur nouvel album.",
      meaning: "Yeni albümlerine bayılıyorum.",
      pronunciation: "ja-dor-lör-nu-vel-al-bom",
    },
    {
      text: "Il apprend à jouer de la batterie.",
      meaning: "Bateri çalmayı öğreniyor.",
      pronunciation: "il-a-prand-a-ju-e-dö-la-bat-ri",
    },
    {
      text: "On va au concert ce soir?",
      meaning: "Bu akşam konsere gidelim mi?",
      pronunciation: "on-va-o-kon-ser-sö-suar",
    },
  ],
};

const unit348Phrases: FrenchA2UnitPhrases = {
  unitId: 348,
  title: "Spor Aktiviteleri",
  phrases: [
    // Genel Spor İfadeleri
    {
      text: "Quel sport pratiquez-vous?",
      meaning: "Hangi sporu yapıyorsunuz?",
      pronunciation: "kel-spor-pra-ti-ke-vu",
    },
    {
      text: "Je fais du sport tous les jours.",
      meaning: "Her gün spor yaparım.",
      pronunciation: "jö-fe-dü-spor-tu-le-jur",
    },
    // FAIRE (Bireysel / Fiziksel Eylem)
    {
      text: "Le matin, je fais du jogging.",
      meaning: "Sabahları koşu yaparım.",
      pronunciation: "lö-ma-ten-jö-fe-dü-jo-ging",
    },
    {
      text: "Ma sœur fait de la natation.",
      meaning: "Kız kardeşim yüzüyor (yüzme yapıyor).",
      pronunciation: "ma-sör-fe-dö-la-na-tas-yon",
    },
    {
      text: "Nous faisons du vélo le week-end.",
      meaning: "Hafta sonu bisiklete biniyoruz.",
      pronunciation: "nu-fö-zon-dü-ve-lo-lö-wik-end",
    },
    // JOUER (Toplu / Takım Maçları)
    {
      text: "Je joue au football avec mes amis.",
      meaning: "Arkadaşlarımla futbol oynarım.",
      pronunciation: "jö-ju-o-fut-bol-a-vek-me-za-mi",
    },
    {
      text: "Tu aimes jouer au tennis?",
      meaning: "Tenis oynamayı sever misin?",
      pronunciation: "tü-em-ju-e-o-te-nis",
    },
    {
      text: "Ils jouent au basket dans le parc.",
      meaning: "Onlar parkta basketbol oynuyorlar.",
      pronunciation: "il-ju-o-bas-ket-dan-lö-park",
    },
    // Karşılaşma ve Antrenman
    {
      text: "Notre équipe a gagné le match!",
      meaning: "Takımımız maçı kazandı!",
      pronunciation: "notr-e-kip-a-ga-nye-lö-maç",
    },
    {
      text: "Je dois aller à l'entraînement.",
      meaning: "Antrenmana gitmeliyim.",
      pronunciation: "jö-dua-za-le-a-lan-tren-man",
    },
  ],
};

const unit349Phrases: FrenchA2UnitPhrases = {
  unitId: 349,
  title: "Doğa Gezisi",
  phrases: [
    {
      text: "On fait une randonnée?",
      meaning: "Yürüyüşe çıkalım mı?",
      pronunciation: "on-fe-ün-ran-do-ne",
    },
    {
      text: "La vue est magnifique!",
      meaning: "Manzara harika!",
      pronunciation: "la-vü-e-ma-nyi-fik",
    },
    {
      text: "On monte la tente ici.",
      meaning: "Çadırı buraya kuralım.",
      pronunciation: "on-mont-la-tant-i-si",
    },
    {
      text: "Attention au sentier!",
      meaning: "Patikaya dikkat!",
      pronunciation: "a-tan-syon-o-san-tye",
    },
  ],
};

const unit350Phrases: FrenchA2UnitPhrases = {
  unitId: 350,
  title: "Arkadaş Buluşması",
  phrases: [
    // Doğa ve Piknik Teklifleri
    {
      text: "Tu as envie d'aller à la forêt?",
      meaning: "Ormana gitmek ister misin?",
      pronunciation: "tü-a-an-vi-da-le-a-la-fo-re",
    },
    {
      text: "On fait un pique-nique?",
      meaning: "Piknik yapalım mı?",
      pronunciation: "on-fe-ön-pik-nik",
    },
    {
      text: "J'adore la nature.",
      meaning: "Doğayı çok severim.",
      pronunciation: "ja-dor-la-na-tür",
    },
    {
      text: "C'est un bel endroit.",
      meaning: "Burası güzel bir yer.",
      pronunciation: "se-tön-bel-an-drua",
    },
    {
      text: "Où est-ce qu'on s'installe?",
      meaning: "Nereye yerleşelim?",
      pronunciation: "u-es-kon-sens-tal",
    },

    // Y ve EN Zamirleri (Oraya / Ondan / Oradan)
    {
      text: "On y va?",
      meaning: "Oraya gidelim mi?",
      pronunciation: "on-ni-va",
    },
    {
      text: "Je vais y aller.",
      meaning: "Oraya gideceğim.",
      pronunciation: "jö-ve-zi-a-le",
    },
    { text: "Allons-y!", meaning: "Hadi gidelim!", pronunciation: "a-lon-zi" },
    {
      text: "Tu as apporté des sandwichs?",
      meaning: "Sandviç getirdin mi?",
      pronunciation: "tü-a-a-por-te-de-sand-viç",
    },
    {
      text: "Oui, j'en ai apporté.",
      meaning: "Evet, ondan getirdim.",
      pronunciation: "ui-jan-e-a-por-te",
    },
    {
      text: "Tu veux de l'eau?",
      meaning: "Su ister misin?",
      pronunciation: "tü-vö-dö-lo",
    },
    {
      text: "Oui, j'en veux, merci.",
      meaning: "Evet, ondan istiyorum, teşekkürler.",
      pronunciation: "ui-jan-vö-mer-si",
    },
    {
      text: "Tu viens de la ville?",
      meaning: "Şehirden mi geliyorsun?",
      pronunciation: "tü-vyen-dö-la-vil",
    },
    {
      text: "Oui, j'en viens.",
      meaning: "Evet, oradan geliyorum.",
      pronunciation: "ui-jan-vyen",
    },

    // Kapanış
    {
      text: "C'est un super pique-nique!",
      meaning: "Bu harika bir piknik!",
      pronunciation: "se-tön-sü-per-pik-nik",
    },
  ],
};

// ===== ÜNİTE 351-360 =====
const unit351Phrases: FrenchA2UnitPhrases = {
  unitId: 351,
  title: "Telefon Görüşmesi",
  phrases: [
    // Açılış ve Tanıtma
    {
      text: "Allô, bonjour!",
      meaning: "Alo, merhaba!",
      pronunciation: "a-lo-bon-jur",
    },
    {
      text: "C'est Yiğithan à l'appareil.",
      meaning: "Ben Yiğithan (telefonda).",
      pronunciation: "se-yi-it-an-a-la-pa-rey",
    },
    {
      text: "Ici Pierre de la société Dupont.",
      meaning: "Burada Dupont şirketinden Pierre.",
      pronunciation: "i-si-pyer-dö-la-so-si-e-te-dü-pon",
    },

    // Birini İstemek
    {
      text: "Je voudrais parler à Monsieur Dupont.",
      meaning: "Bay Dupont ile görüşmek istiyorum.",
      pronunciation: "jö-vu-dre-par-le-a-mö-syö-dü-pon",
    },
    {
      text: "Est-ce que Marie est là?",
      meaning: "Marie orada mı?",
      pronunciation: "es-kö-ma-ri-e-la",
    },
    {
      text: "Pourrais-je parler au directeur?",
      meaning: "Müdürle görüşebilir miyim?",
      pronunciation: "pu-re-jö-par-le-o-di-rek-tör",
    },

    // Bekletme ve Aktarma
    {
      text: "Ne quittez pas.",
      meaning: "Hatta kalın.",
      pronunciation: "nö-ki-te-pa",
    },
    {
      text: "Un instant, s'il vous plaît.",
      meaning: "Bir saniye lütfen.",
      pronunciation: "an-ens-tan-sil-vu-ple",
    },
    {
      text: "Je vous le passe.",
      meaning: "Sizi ona bağlıyorum.",
      pronunciation: "jö-vu-lö-pas",
    },
    {
      text: "C'est de la part de qui?",
      meaning: "Kimin adına? / Kim arıyor?",
      pronunciation: "se-dö-la-par-dö-ki",
    },

    // Sorunlar
    {
      text: "Je vous entends très mal.",
      meaning: "Sizi çok kötü duyuyorum.",
      pronunciation: "jö-vu-zan-tan-tre-mal",
    },
    { text: "Ça coupe.", meaning: "Ses kesiliyor.", pronunciation: "sa-kup" },
    {
      text: "Parlez plus lentement, s'il vous plaît.",
      meaning: "Daha yavaş konuşun lütfen.",
      pronunciation: "par-le-plü-lant-man-sil-vu-ple",
    },
    {
      text: "Je vais rappeler plus tard.",
      meaning: "Daha sonra tekrar arayacağım.",
      pronunciation: "jö-ve-ra-pö-le-plü-tar",
    },
    {
      text: "Voulez-vous laisser un message?",
      meaning: "Mesaj bırakmak ister misiniz?",
      pronunciation: "vu-le-vu-le-se-ön-me-saj",
    },
  ],
};

const unit352Phrases: FrenchA2UnitPhrases = {
  unitId: 352,
  title: "Davet Etme",
  phrases: [
    // Davet Etme
    {
      text: "Ça te dit de manger une pizza?",
      meaning: "Pizza yemeye ne dersin?",
      pronunciation: "sa-tö-di-dö-man-je-ün-pi-za",
    },
    {
      text: "Tu veux aller au cinéma?",
      meaning: "Sinemaya gitmek ister misin?",
      pronunciation: "tü-vö-a-le-o-si-ne-ma",
    },
    {
      text: "On va au café ce soir?",
      meaning: "Bu akşam kafeye gidelim mi?",
      pronunciation: "on-va-o-ka-fe-sö-suar",
    },
    {
      text: "Tu es libre ce week-end?",
      meaning: "Bu hafta sonu boş musun?",
      pronunciation: "tü-e-libr-sö-vi-kend",
    },
    {
      text: "Je t'invite à dîner.",
      meaning: "Seni yemeğe davet ediyorum.",
      pronunciation: "jö-ten-vit-a-di-ne",
    },

    // Kabul
    {
      text: "Avec plaisir!",
      meaning: "Memnuniyetle!",
      pronunciation: "a-vek-ple-zir",
    },
    {
      text: "Oui, je veux bien!",
      meaning: "Evet, çok isterim!",
      pronunciation: "ui-jö-vö-biyen",
    },
    { text: "D'accord!", meaning: "Tamam!", pronunciation: "da-kor" },
    { text: "Bonne idée!", meaning: "İyi fikir!", pronunciation: "bon-ide" },
    {
      text: "Pourquoi pas?",
      meaning: "Neden olmasın?",
      pronunciation: "pur-kua-pa",
    },

    // Reddetme
    {
      text: "Désolé, je ne peux pas.",
      meaning: "Üzgünüm, yapamam.",
      pronunciation: "de-zo-le-jö-nö-pö-pa",
    },
    {
      text: "Je suis occupé(e).",
      meaning: "Meşgulüm.",
      pronunciation: "jö-süi-o-kü-pe",
    },
    {
      text: "J'ai du travail.",
      meaning: "İşim var.",
      pronunciation: "je-dü-tra-vay",
    },
    {
      text: "Peut-être une autre fois.",
      meaning: "Belki başka zaman.",
      pronunciation: "pö-tetr-ün-otr-fua",
    },
    {
      text: "C'est gentil, mais non.",
      meaning: "Çok naziksin ama hayır.",
      pronunciation: "se-jan-ti-me-no",
    },
  ],
};

const unit353Phrases: FrenchA2UnitPhrases = {
  unitId: 353,
  title: "Özür Dileme",
  phrases: [
    // Özür Dileme
    {
      text: "Je suis vraiment désolé(e).",
      meaning: "Gerçekten üzgünüm.",
      pronunciation: "jö-süi-vre-man-de-zo-le",
    },
    {
      text: "Excusez-moi, je suis en retard.",
      meaning: "Afedersiniz, geciktim.",
      pronunciation: "eks-kü-ze-mua-jö-süi-an-rö-tar",
    },
    {
      text: "Pardon, c'est ma faute.",
      meaning: "Özür dilerim, benim hatam.",
      pronunciation: "par-don-se-ma-fot",
    },
    {
      text: "Je m'excuse sincèrement.",
      meaning: "İçtenlikle özür dilerim.",
      pronunciation: "jö-meks-küz-san-ser-man",
    },
    {
      text: "Je regrette beaucoup.",
      meaning: "Çok pişmanım.",
      pronunciation: "jö-rö-gret-bo-ku",
    },

    // Mazeret
    {
      text: "J'ai un empêchement.",
      meaning: "Bir engelim var.",
      pronunciation: "je-ön-an-peş-man",
    },
    { text: "J'ai oublié!", meaning: "Unuttum!", pronunciation: "je-ub-li-ye" },
    {
      text: "Je suis malade.",
      meaning: "Hastayım.",
      pronunciation: "jö-süi-ma-lad",
    },
    {
      text: "Il y a du trafic.",
      meaning: "Trafik var.",
      pronunciation: "il-ya-dü-tra-fik",
    },
    {
      text: "Mon réveil n'a pas sonné.",
      meaning: "Alarmım çalmadı.",
      pronunciation: "mon-re-vey-na-pa-so-ne",
    },

    // Sebep Belirtme
    {
      text: "Parce qu'il y a du trafic.",
      meaning: "Çünkü trafik var.",
      pronunciation: "pars-kil-ya-dü-tra-fik",
    },
    {
      text: "À cause du bus.",
      meaning: "Otobüs yüzünden.",
      pronunciation: "a-koz-dü-büs",
    },

    // Tepkiler
    {
      text: "Ce n'est pas grave.",
      meaning: "Önemli değil.",
      pronunciation: "sö-ne-pa-grav",
    },
    {
      text: "La prochaine fois, téléphonez-moi.",
      meaning: "Bir dahaki sefere beni arayın.",
      pronunciation: "la-pro-şen-fua-te-le-fo-ne-mua",
    },
    {
      text: "C'est promis!",
      meaning: "Söz veriyorum!",
      pronunciation: "se-pro-mi",
    },
  ],
};

const unit354Phrases: FrenchA2UnitPhrases = {
  unitId: 354,
  title: "Yol Tarifi",
  phrases: [
    // Yol Sorma
    {
      text: "Pardon, pour aller au musée?",
      meaning: "Pardon, müzeye nasıl gidilir?",
      pronunciation: "par-don-pur-a-le-o-mü-ze",
    },
    {
      text: "Excusez-moi, je cherche...",
      meaning: "Affedersiniz, ... arıyorum.",
      pronunciation: "eks-kü-ze-mua-jö-şerş",
    },
    {
      text: "Où est la gare, s'il vous plaît?",
      meaning: "Gar nerede lütfen?",
      pronunciation: "u-e-la-gar-sil-vu-ple",
    },
    {
      text: "C'est loin d'ici?",
      meaning: "Buradan uzak mı?",
      pronunciation: "se-luen-di-si",
    },

    // Yol Tarif Etme
    {
      text: "Allez tout droit.",
      meaning: "Dümdüz gidin.",
      pronunciation: "a-le-tu-drua",
    },
    {
      text: "Tournez à gauche.",
      meaning: "Sola dönün.",
      pronunciation: "tur-ne-a-goş",
    },
    {
      text: "Tournez à droite.",
      meaning: "Sağa dönün.",
      pronunciation: "tur-ne-a-druat",
    },
    {
      text: "Prenez la première rue.",
      meaning: "Birinci sokağa girin.",
      pronunciation: "prö-ne-la-prö-myer-rü",
    },
    {
      text: "Continuez jusqu'au feu.",
      meaning: "Işıklara kadar devam edin.",
      pronunciation: "kon-ti-nü-e-jüs-ko-fö",
    },
    {
      text: "Traversez le pont.",
      meaning: "Köprüyü geçin.",
      pronunciation: "tra-ver-se-lö-pon",
    },

    // Mesafe
    {
      text: "C'est à 5 minutes à pied.",
      meaning: "Yürüyerek 5 dakika.",
      pronunciation: "se-ta-senk-mi-nüt-a-pye",
    },
    {
      text: "C'est tout près.",
      meaning: "Çok yakın.",
      pronunciation: "se-tu-pre",
    },
    {
      text: "C'est un peu loin.",
      meaning: "Biraz uzak.",
      pronunciation: "se-tön-pö-luen",
    },

    // Bağlaçlı Cümleler
    {
      text: "Allez tout droit, puis tournez à gauche.",
      meaning: "Düz gidin, sonra sola dönün.",
      pronunciation: "a-le-tu-drua-püi-tur-ne-a-goş",
    },
    {
      text: "C'est en face de la poste.",
      meaning: "Postanın karşısında.",
      pronunciation: "se-tan-fas-dö-la-post",
    },
  ],
};

const unit355Phrases: FrenchA2UnitPhrases = {
  unitId: 355,
  title: "Şehir Hayatı",
  phrases: [
    // Şehir Tanıtımı
    {
      text: "C'est une ville historique.",
      meaning: "Tarihi bir şehir.",
      pronunciation: "se-tün-vil-is-to-rik",
    },
    {
      text: "C'est une grande ville.",
      meaning: "Büyük bir şehir.",
      pronunciation: "se-tün-grand-vil",
    },
    {
      text: "C'est une ville magnifique.",
      meaning: "Muhteşem bir şehir.",
      pronunciation: "se-tün-vil-ma-nyi-fik",
    },

    // Il y a
    {
      text: "Il y a beaucoup de monuments.",
      meaning: "Çok anıt var.",
      pronunciation: "il-ya-bo-ku-dö-mo-nü-man",
    },
    {
      text: "Il y a un parc.",
      meaning: "Bir park var.",
      pronunciation: "il-ya-ön-park",
    },
    {
      text: "Qu'est-ce qu'il y a à voir?",
      meaning: "Görülecek ne var?",
      pronunciation: "kes-kil-ya-a-vuar",
    },

    // Konum
    {
      text: "C'est loin d'ici?",
      meaning: "Buradan uzak mı?",
      pronunciation: "se-luen-di-si",
    },
    {
      text: "C'est près de la mosquée.",
      meaning: "Caminin yakınında.",
      pronunciation: "se-pre-dö-la-mos-ke",
    },
    {
      text: "C'est à côté du musée.",
      meaning: "Müzenin yanında.",
      pronunciation: "se-a-ko-te-dü-mü-ze",
    },
    {
      text: "C'est en face de l'hôtel.",
      meaning: "Otelin karşısında.",
      pronunciation: "se-an-fas-dö-lo-tel",
    },

    // Zaman
    {
      text: "C'est à 10 minutes.",
      meaning: "10 dakika mesafede.",
      pronunciation: "se-a-di-mi-nüt",
    },
    {
      text: "C'est à 5 minutes à pied.",
      meaning: "Yürüyerek 5 dakika.",
      pronunciation: "se-a-senk-mi-nüt-a-pye",
    },

    // Turist
    {
      text: "La gastronomie est excellente.",
      meaning: "Mutfağı mükemmel.",
      pronunciation: "la-gas-tro-no-mi-e-tek-se-lant",
    },
    {
      text: "C'est un endroit magnifique.",
      meaning: "Harika bir yer.",
      pronunciation: "se-tön-an-drua-ma-nyi-fik",
    },
    {
      text: "Je vous recommande de visiter...",
      meaning: "...ziyaret etmenizi tavsiye ederim.",
      pronunciation: "jö-vu-rö-ko-mand-dö-vi-zi-te",
    },
  ],
};

const unit356Phrases: FrenchA2UnitPhrases = {
  unitId: 356,
  title: "Kültürel Farklar",
  phrases: [
    // Selamlaşma
    {
      text: "En France, on fait la bise.",
      meaning: "Fransa'da yanaktan öpüşülür.",
      pronunciation: "an-frans-on-fe-la-biz",
    },
    {
      text: "On se serre la main.",
      meaning: "El sıkışırız.",
      pronunciation: "on-sö-ser-la-men",
    },
    {
      text: "Combien de bises?",
      meaning: "Kaç öpücük?",
      pronunciation: "kon-biyen-dö-biz",
    },

    // Karşılaştırma
    {
      text: "C'est une coutume locale.",
      meaning: "Yerel bir gelenek.",
      pronunciation: "se-tün-ku-tüm-lo-kal",
    },
    {
      text: "Chez nous, c'est différent.",
      meaning: "Bizde farklı.",
      pronunciation: "şe-nu-se-di-fe-ran",
    },
    {
      text: "En Turquie, on fait comme ça.",
      meaning: "Türkiye'de böyle yapıyoruz.",
      pronunciation: "an-tür-ki-on-fe-kom-sa",
    },
    {
      text: "C'est normal ici.",
      meaning: "Burada normal.",
      pronunciation: "se-nor-mal-i-si",
    },
    {
      text: "C'est bizarre pour moi.",
      meaning: "Bana garip geliyor.",
      pronunciation: "se-bi-zar-pur-mua",
    },

    // Bölgesel Farklar
    {
      text: "Ça dépend de la région.",
      meaning: "Bölgeye bağlı.",
      pronunciation: "sa-de-pan-dö-la-re-jyon",
    },
    {
      text: "Dans le sud, on...",
      meaning: "Güneyde, ...",
      pronunciation: "dan-lö-süd-on",
    },
    {
      text: "Dans le nord, c'est différent.",
      meaning: "Kuzeyde farklı.",
      pronunciation: "dan-lö-nor-se-di-fe-ran",
    },

    // Nezaket
    {
      text: "C'est poli de...",
      meaning: "... yapmak kibarcadır.",
      pronunciation: "se-po-li-dö",
    },
    {
      text: "C'est impoli de...",
      meaning: "... yapmak kabalıktır.",
      pronunciation: "se-en-po-li-dö",
    },
    {
      text: "Contrairement à chez nous.",
      meaning: "Bizdekinin aksine.",
      pronunciation: "kon-trer-man-a-şe-nu",
    },
    {
      text: "C'est la même chose.",
      meaning: "Aynı şey.",
      pronunciation: "se-la-mem-şoz",
    },
  ],
};

const unit357Phrases: FrenchA2UnitPhrases = {
  unitId: 357,
  title: "Eğitim Hayatı",
  phrases: [
    // Okul Hayatı
    {
      text: "J'étudie à l'université.",
      meaning: "Üniversitede okuyorum.",
      pronunciation: "je-tü-di-a-lü-ni-ver-si-te",
    },
    {
      text: "Il est au lycée.",
      meaning: "O lisede.",
      pronunciation: "il-e-o-li-se",
    },
    {
      text: "J'étudie à la bibliothèque.",
      meaning: "Kütüphanede çalışıyorum.",
      pronunciation: "je-tü-di-a-la-bib-li-yo-tek",
    },

    // Ders Çalışma
    {
      text: "J'apprends le français.",
      meaning: "Fransızca öğreniyorum.",
      pronunciation: "jap-ran-lö-fran-se",
    },
    {
      text: "Je ne comprends pas.",
      meaning: "Anlamıyorum.",
      pronunciation: "jö-nö-kom-pran-pa",
    },
    {
      text: "Tu as bien révisé?",
      meaning: "İyi tekrar yaptın mı?",
      pronunciation: "tü-a-biyen-re-vi-ze",
    },
    {
      text: "Le prof explique la leçon.",
      meaning: "Hoca dersi anlatıyor.",
      pronunciation: "lö-prof-eks-plik-la-lö-son",
    },
    {
      text: "Je peux demander quelque chose?",
      meaning: "Bir şey sorabilir miyim?",
      pronunciation: "jö-pö-dö-man-de-kelk-şoz",
    },

    // Sınav İfadeleri
    {
      text: "J'ai un examen demain.",
      meaning: "Yarın sınavım var.",
      pronunciation: "je-ön-eg-za-men-dö-men",
    },
    {
      text: "Je vais passer l'examen.",
      meaning: "Sınava gireceğim.",
      pronunciation: "jö-ve-pa-se-leg-za-men",
    },
    {
      text: "J'ai réussi l'examen!",
      meaning: "Sınavı geçtim!",
      pronunciation: "je-re-ü-si-leg-za-men",
    },
    {
      text: "J'ai raté l'examen.",
      meaning: "Sınavdan kaldım.",
      pronunciation: "je-ra-te-leg-za-men",
    },
    {
      text: "J'espère que je vais réussir.",
      meaning: "Umarım geçerim.",
      pronunciation: "jes-per-kö-jö-ve-re-ü-sir",
    },

    // Birlikte Çalışma
    {
      text: "On peut étudier ensemble?",
      meaning: "Birlikte çalışabilir miyiz?",
      pronunciation: "on-pö-e-tü-dye-an-sambl",
    },
    {
      text: "C'est très difficile pour moi.",
      meaning: "Benim için çok zor.",
      pronunciation: "se-tre-di-fi-sil-pur-mua",
    },
  ],
};

const unit358Phrases: FrenchA2UnitPhrases = {
  unitId: 358,
  title: "İş Hayatı",
  phrases: [
    // İş Arama
    {
      text: "Je cherche un emploi.",
      meaning: "İş arıyorum.",
      pronunciation: "jö-şerş-ön-an-plua",
    },
    {
      text: "Je cherche un emploi à temps plein.",
      meaning: "Tam zamanlı iş arıyorum.",
      pronunciation: "jö-şerş-ön-an-plua-a-tan-plen",
    },
    {
      text: "Je travaille à temps partiel.",
      meaning: "Yarı zamanlı çalışıyorum.",
      pronunciation: "jö-tra-vay-a-tan-par-syel",
    },
    {
      text: "J'ai trouvé un travail.",
      meaning: "Bir iş buldum.",
      pronunciation: "je-tru-ve-ön-tra-vay",
    },

    // Mülakat
    {
      text: "J'ai un entretien demain.",
      meaning: "Yarın mülakatım var.",
      pronunciation: "je-ön-an-trö-tyen-dö-men",
    },
    {
      text: "Signez le contrat, s'il vous plaît.",
      meaning: "Sözleşmeyi imzalayın lütfen.",
      pronunciation: "si-nye-lö-kon-tra-sil-vu-ple",
    },
    {
      text: "Il va démissionner.",
      meaning: "İstifa edecek.",
      pronunciation: "il-va-de-mi-syo-ne",
    },

    // İş Ortamı
    {
      text: "Je travaille chez Google.",
      meaning: "Google'da çalışıyorum.",
      pronunciation: "jö-tra-vay-şe-gugl",
    },
    {
      text: "Je suis au bureau.",
      meaning: "Ofisteyim.",
      pronunciation: "jö-süi-o-bü-ro",
    },
    {
      text: "J'ai une réunion.",
      meaning: "Toplantım var.",
      pronunciation: "je-ün-re-ü-ni-yon",
    },
    {
      text: "Nous devons préparer le projet.",
      meaning: "Projeyi hazırlamalıyız.",
      pronunciation: "nu-dö-von-pre-pa-re-lö-pro-je",
    },
    {
      text: "Je vais envoyer l'email.",
      meaning: "Maili göndereceğim.",
      pronunciation: "jö-ve-an-vua-ye-li-meyl",
    },

    // Mail Dili
    {
      text: "Bonjour Monsieur,",
      meaning: "Merhaba Sayın Bey,",
      pronunciation: "bon-jur-mö-syö",
    },
    {
      text: "Je vous écris pour...",
      meaning: "...için size yazıyorum.",
      pronunciation: "jö-vu-ze-kri-pur",
    },
    {
      text: "Cordialement,",
      meaning: "Saygılarımla,",
      pronunciation: "kor-di-al-man",
    },
  ],
};

const unit359Phrases: FrenchA2UnitPhrases = {
  unitId: 359,
  title: "Teknoloji Kullanımı",
  phrases: [
    // Cihaz açma/kapama
    {
      text: "J'allume l'ordinateur.",
      meaning: "Bilgisayarı açıyorum.",
      pronunciation: "ja-lüm-lor-di-na-tör",
    },
    {
      text: "Tu peux éteindre l'écran?",
      meaning: "Ekranı kapatabilir misin?",
      pronunciation: "tü-pö-e-tendr-le-kran",
    },
    {
      text: "Branche ton chargeur.",
      meaning: "Şarjını tak.",
      pronunciation: "branş-ton-şar-jör",
    },

    // Wi-Fi ve Bağlantı sorunları
    {
      text: "Internet marche?",
      meaning: "İnternet çalışıyor mu?",
      pronunciation: "en-ter-net-marş",
    },
    {
      text: "Je n'ai pas de connexion.",
      meaning: "Bağlantım yok.",
      pronunciation: "jö-ne-pa-dö-ko-nek-syon",
    },
    {
      text: "Le signal est très faible.",
      meaning: "Sinyal çok zayıf.",
      pronunciation: "lö-si-nyal-e-tre-febl",
    },
    {
      text: "Quel est le mot de passe du wifi?",
      meaning: "Wi-Fi şifresi ne?",
      pronunciation: "kel-e-lö-mo-dö-pas-dü-wi-fi",
    },

    // İşlemler
    {
      text: "Cliquez sur le lien.",
      meaning: "Linke tıklayın.",
      pronunciation: "kli-ke-sür-lö-lyen",
    },
    {
      text: "N'oublie pas de sauvegarder.",
      meaning: "Kaydetmeyi unutma.",
      pronunciation: "nu-bli-pa-dö-sov-gar-de",
    },
    {
      text: "Je télécharge un fichier.",
      meaning: "Dosya indiriyorum.",
      pronunciation: "jö-te-le-şarj-ön-fi-şye",
    },
    {
      text: "J'envoie un e-mail.",
      meaning: "E-posta gönderiyorum.",
      pronunciation: "jan-vua-ön-i-meyl",
    },

    // Sorun çözme
    {
      text: "Ça ne marche pas.",
      meaning: "Bu çalışmıyor.",
      pronunciation: "sa-nö-marş-pa",
    },
    {
      text: "Ma batterie est vide.",
      meaning: "Şarjım bitti.",
      pronunciation: "ma-bat-ri-e-vid",
    },
    {
      text: "L'écran est noir.",
      meaning: "Ekran siyah/karardı.",
      pronunciation: "le-kran-e-nuar",
    },
    {
      text: "Essaie d'éteindre et rallumer.",
      meaning: "Kapatıp açmayı dene.",
      pronunciation: "e-sey-de-tendr-e-ra-lü-me",
    },
  ],
};

const unit360Phrases: FrenchA2UnitPhrases = {
  unitId: 360,
  title: "A2 Genel Tekrar",
  phrases: [
    {
      text: "Félicitations, vous avez terminé!",
      meaning: "Tebrikler, bitirdiniz!",
      pronunciation: "fe-li-si-ta-syon-vu-za-ve-ter-mi-ne",
    },
    {
      text: "Continuez à pratiquer!",
      meaning: "Pratik yapmaya devam edin!",
      pronunciation: "kon-ti-nü-e-a-pra-ti-ke",
    },
    {
      text: "Bonne continuation!",
      meaning: "Başarılar!",
      pronunciation: "bon-kon-ti-nü-a-syon",
    },
  ],
};

// Export
export const frenchA2Phrases: FrenchA2UnitPhrases[] = [
  unit331Phrases,
  unit332Phrases,
  unit333Phrases,
  unit334Phrases,
  unit335Phrases,
  unit336Phrases,
  unit337Phrases,
  unit338Phrases,
  unit339Phrases,
  unit340Phrases,
  unit341Phrases,
  unit342Phrases,
  unit343Phrases,
  unit344Phrases,
  unit345Phrases,
  unit346Phrases,
  unit347Phrases,
  unit348Phrases,
  unit349Phrases,
  unit350Phrases,
  unit351Phrases,
  unit352Phrases,
  unit353Phrases,
  unit354Phrases,
  unit355Phrases,
  unit356Phrases,
  unit357Phrases,
  unit358Phrases,
  unit359Phrases,
  unit360Phrases,
];

export function getFrenchA2PhrasesForUnit(
  unitId: number,
): FrenchA2UnitPhrases | undefined {
  return frenchA2Phrases.find((p) => p.unitId === unitId);
}
