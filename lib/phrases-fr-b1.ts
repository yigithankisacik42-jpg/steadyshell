export interface FrenchB1Phrase {
    text: string;
    meaning: string;
    pronunciation: string;
}

export interface FrenchB1UnitPhrases {
    unitId: number;
    title: string;
    phrases: FrenchB1Phrase[];
}

const unit361Phrases: FrenchB1UnitPhrases = {
    unitId: 361,
    title: "İş Görüşmesi",
    phrases: [
        { text: "Bonjour, je m'appelle... et j'ai rendez-vous pour un entretien.", meaning: "Merhaba, benim adım... ve bir görüşme için randevum var.", pronunciation: "bon-jur, jö ma-pel... e je ran-de-vu pur ön an-trö-tyan" },
        { text: "Enchanté de vous rencontrer.", meaning: "Sizinle tanıştığıma memnun oldum.", pronunciation: "an-şan-te dö vu ran-kon-tre" },
        { text: "Merci de m'avoir reçu.", meaning: "Beni kabul ettiğiniz için teşekkür ederim.", pronunciation: "mer-si dö ma-vuar rö-sü" },
        { text: "Parlez-moi de vous.", meaning: "Bana kendinizden bahsedin.", pronunciation: "par-le-mua dö vu" },
        { text: "J'ai obtenu mon diplôme l'année dernière.", meaning: "Diplomamı geçen yıl aldım.", pronunciation: "je ob-tö-nü mon dip-lom la-ne der-nyer" },
        { text: "J'ai cinq ans d'expérience dans ce domaine.", meaning: "Bu alanda beş yıllık tecrübem var.", pronunciation: "je sank an deks-pe-riyans dan sö do-men" },
        { text: "Pourquoi avez-vous postulé à ce poste ?", meaning: "Bu pozisyona neden başvurdunuz?", pronunciation: "pur-kua a-ve-vu pos-tü-le a sö post" },
        { text: "Votre entreprise est leader sur le marché.", meaning: "Şirketiniz pazarda lider.", pronunciation: "votr an-trö-priz e li-dör sür lö mar-şe" },
        { text: "Quels sont vos points forts et vos points faibles ?", meaning: "Güçlü ve zayıf yönleriniz nelerdir?", pronunciation: "kel son vo pwan for e vo pwan febl" },
        { text: "Je suis très organisé et j'apprends vite.", meaning: "Çok düzenliyim ve hızlı öğrenirim.", pronunciation: "jö süi tre or-ga-ni-ze e jap-ran vit" },
        { text: "Je parle couramment anglais et français.", meaning: "Akıcı bir şekilde İngilizce ve Fransızca konuşuyorum.", pronunciation: "jö parl ku-ra-man ang-le e fran-se" },
        { text: "Quelles sont vos prétentions salariales ?", meaning: "Maaş beklentileriniz nelerdir?", pronunciation: "kel son vo pre-tan-syon sa-la-ryal" },
        { text: "Avez-vous des questions ?", meaning: "Sorularınız var mı?", pronunciation: "a-ve-vu de kes-tyon" },
        { text: "Quand pensez-vous prendre une décision ?", meaning: "Ne zaman bir karar vermeyi düşünüyorsunuz?", pronunciation: "kan pan-se-vu prandr ün de-siz-yon" },
        { text: "Nous vous contacterons bientôt.", meaning: "Sizinle yakında iletişime geçeceğiz.", pronunciation: "nu vu kon-tak-tö-ron byan-to" }
    ]
};

const unit362Phrases: FrenchB1UnitPhrases = {
    unitId: 362,
    title: "L'environnement et l'écologie (Çevre ve Ekoloji)",
    phrases: [
        { text: "Il faut protéger l'environnement.", meaning: "Çevreyi korumak gerekir.", pronunciation: "il fo pro-te-je lan-vi-ron-man" },
        { text: "Le réchauffement climatique est un grand problème.", meaning: "Küresel ısınma büyük bir problemdir.", pronunciation: "lö re-şof-man kli-ma-tik e tun gran prob-lem" },
        { text: "Nous devons recycler nos déchets.", meaning: "Atıklarımızı geri dönüştürmeliyiz.", pronunciation: "nu dö-von rö-si-kle no de-şe" },
        { text: "Je fais le tri sélectif à la maison.", meaning: "Evde çöpleri ayırıyorum (geri dönüşüm için).", pronunciation: "jö fe lö tri se-lek-tif a la me-zon" },
        { text: "L'énergie solaire est une énergie renouvelable.", meaning: "Güneş enerjisi yenilenebilir bir enerjidir.", pronunciation: "le-ner-ji so-ler e tün e-ner-ji rö-nuv-labl" },
        { text: "Ne jetez pas de plastique dans la nature.", meaning: "Doğaya plastik atmayın.", pronunciation: "nö jö-te pa dö plas-tik dan la na-tur" },
        { text: "La pollution de l'air est dangereuse pour la santé.", meaning: "Hava kirliliği sağlık için tehlikelidir.", pronunciation: "la po-lüs-yon dö ler e dan-jö-röz pur la san-te" },
        { text: "Nous devons réduire notre empreinte carbone.", meaning: "Karbon ayak izimizi azaltmalıyız.", pronunciation: "nu dö-von re-dü-ir notr am-praint kar-bon" },
        { text: "C'est important de sauver les espèces en danger.", meaning: "Tehlike altındaki türleri kurtarmak önemlidir.", pronunciation: "se tam-por-tan dö so-ve le-zes-pes an dan-je" },
        { text: "Il est nécessaire d'utiliser les transports en commun.", meaning: "Toplu taşımayı kullanmak gereklidir.", pronunciation: "il e ne-se-ser dü-ti-li-ze le trans-por zan ko-mun" },
        { text: "Arrêtons de gaspiller l'eau potable.", meaning: "İçme suyunu israf etmeyi bırakalım.", pronunciation: "a-re-ton dö gas-pi-ye lo po-tabl" },
        { text: "Il faut lutter contre la déforestation.", meaning: "Ormansızlaşmaya karşı mücadele etmeliyiz.", pronunciation: "il fo lü-te kontr la de-fo-res-tas-yon" },
        { text: "Les sacs en plastique sont interdits.", meaning: "Plastik poşetler yasaktır.", pronunciation: "le sak zan plas-tik son tan-ter-di" },
        { text: "Les énergies fossiles polluent la planète.", meaning: "Fosil yakıtlar gezegeni kirletiyor.", pronunciation: "le-ze-ner-ji fo-sil po-lü la pla-net" },
        { text: "Chacun peut faire un geste pour l'écologie.", meaning: "Herkes ekoloji için bir şey (jest) yapabilir.", pronunciation: "şa-kun pö fer un jest pur le-ko-lo-ji" }
    ]
};

const unit363Phrases: FrenchB1UnitPhrases = {
    unitId: 363,
    title: "Les nouvelles technologies (Yeni Teknolojiler)",
    phrases: [
        { text: "J'ai acheté un nouvel ordinateur portable.", meaning: "Yeni bir dizüstü bilgisayar aldım.", pronunciation: "je a-şö-te un nu-vel or-di-na-tör por-tabl" },
        { text: "La connexion Internet est très lente aujourd'hui.", meaning: "İnternet bağlantısı bugün çok yavaş.", pronunciation: "la ko-nek-syon an-ter-net e tre lant o-jur-dö-i" },
        { text: "N'oublie pas de sauvegarder tes fichiers.", meaning: "Dosyalarını kaydetmeyi unutma.", pronunciation: "nub-li pa dö sov-gar-de te fi-şye" },
        { text: "J'ai téléchargé une nouvelle application sur mon smartphone.", meaning: "Akıllı telefonuma yeni bir uygulama indirdim.", pronunciation: "je te-le-şar-je ün nu-vel ap-li-kas-yon sür mon smar-fon" },
        { text: "Quel est le mot de passe du réseau Wi-Fi ?", meaning: "Wi-Fi ağının şifresi nedir?", pronunciation: "kel e lö mo dö pas dü re-zo ui-fi" },
        { text: "L'intelligence artificielle se développe rapidement.", meaning: "Yapay zeka hızla gelişiyor.", pronunciation: "lante-li-jans ar-ti-fi-syel sö de-vö-lop ra-pid-man" },
        { text: "Il faut faire une mise à jour du logiciel.", meaning: "Yazılım güncellemesi yapmak gerekiyor.", pronunciation: "il fo fer ün miz a jur dü lo-ji-syel" },
        { text: "Mon écran est cassé, je dois le réparer.", meaning: "Ekranım kırık, onu tamir ettirmem lazım.", pronunciation: "mon e-kran e ka-se, jö dua lö re-pa-re" },
        { text: "J'ai cliqué sur le mauvais lien par erreur.", meaning: "Yanlışlıkla hatalı bağlantıya tıkladım.", pronunciation: "je kli-ke sür lö mo-ve lyan par e-rör" },
        { text: "La sécurité des données est essentielle.", meaning: "Veri güvenliği çok önemlidir.", pronunciation: "la se-kü-ri-te de do-ne e te-san-syel" },
        { text: "J'ai supprimé le document par accident.", meaning: "Belgeyi kazara sildim.", pronunciation: "je sü-pri-me lö do-kü-man par ak-si-dan" },
        { text: "Comment puis-je imprimer ce formulaire ?", meaning: "Bu formu nasıl yazdırabilirim?", pronunciation: "ko-man pü-ij am-pri-me sö for-mü-ler" },
        { text: "Le pirate informatique a volé des informations.", meaning: "Bilgisayar korsanı bilgileri çaldı.", pronunciation: "lö pi-rat an-for-ma-tik a vo-le de-zan-for-mas-yon" },
        { text: "Les réseaux sociaux sont très populaires.", meaning: "Sosyal ağlar çok popüler.", pronunciation: "le re-zo so-syo son tre po-pü-ler" },
        { text: "J'utilise mon clavier professionnel tous les jours.", meaning: "Profesyonel klavyemi her gün kullanıyorum.", pronunciation: "jü-ti-liz mon kla-vye pro-fes-yo-nel tu le jur" }
    ]
};

const unit364Phrases: FrenchB1UnitPhrases = {
    unitId: 364,
    title: "L'art et la culture (Sanat ve Kültür)",
    phrases: [
        { text: "Ce musée est très célèbre dans le monde entier.", meaning: "Bu müze tüm dünyada çok ünlüdür.", pronunciation: "sö mü-ze e tre se-lebr dan lö mond an-tye" },
        { text: "J'ai vu une exposition d'art moderne hier.", meaning: "Dün modern sanat sergisi gördüm.", pronunciation: "je vö ün eks-po-zis-yon dar mo-dern i-yer" },
        { text: "Quel est ton peintre préféré ?", meaning: "En sevdiğin ressam kimdir?", pronunciation: "kel e ton pantr pre-fe-re" },
        { text: "La Joconde est un véritable chef-d'œuvre.", meaning: "Mona Lisa gerçek bir başyapıttır.", pronunciation: "la jo-kond e tun ve-ri-tabl şef-dövr" },
        { text: "Nous allons au théâtre ce soir.", meaning: "Bu akşam tiyatroya gidiyoruz.", pronunciation: "nu-za-lon o te-atr sö suar" },
        { text: "Les acteurs ont très bien joué leur rôle.", meaning: "Oyuncular rollerini çok iyi oynadılar.", pronunciation: "le-zak-tör on tre byan ju-e lör rol" },
        { text: "Le réalisateur a gagné un prix pour ce film.", meaning: "Yönetmen bu film için bir ödül kazandı.", pronunciation: "lö re-a-li-za-tör a gan-ye un pri pur sö film" },
        { text: "La scène de fin était très émouvante.", meaning: "Bitiş sahnesi çok dokunaklıydı.", pronunciation: "la sen dö fan e-te tre e-mu-vant" },
        { text: "J'adore écouter de la musique classique.", meaning: "Klasik müzik dinlemeye bayılırım.", pronunciation: "ja-dor e-ku-te dö la mü-zik kla-sik" },
        { text: "Il joue plusieurs instruments de musique.", meaning: "O, birkaç müzik aleti çalıyor.", pronunciation: "il ju plü-zyör zans-trü-man dö mü-zik" },
        { text: "Ce roman a remporté un grand succès.", meaning: "Bu roman büyük bir başarı elde etti.", pronunciation: "sö ro-man a ran-por-te un gran sük-se" },
        { text: "Qui est l'auteur de ce livre passionnant ?", meaning: "Bu heyecan verici kitabın yazarı kim?", pronunciation: "ki e lo-tör dö sö livr pa-syo-nan" },
        { text: "Le public a beaucoup applaudi à la fin.", meaning: "Halk (seyirci) sonunda çok alkışladı.", pronunciation: "lö püb-lik a bo-ku ap-lo-di a la fan" },
        { text: "La culture française est très riche et variée.", meaning: "Fransız kültürü çok zengin ve çeşitlidir.", pronunciation: "la kül-tür fran-sez e tre riş e va-rye" },
        { text: "L'art permet d'exprimer ses émotions profondes.", meaning: "Sanat derin duygularını ifade etmeyi sağlar.", pronunciation: "lar per-me deks-pri-me se-ze-mos-yon pro-fond" }
    ]
};

const unit365Phrases: FrenchB1UnitPhrases = {
    unitId: 365,
    title: "Teknoloji ve Toplum",
    phrases: [
        { text: "La technologie évolue à une vitesse incroyable.", meaning: "Teknoloji inanılmaz bir hızla gelişiyor.", pronunciation: "la tek-no-lo-ji e-vo-lü a ün vi-tes an-krua-yabl" },
        { text: "Les robots accomplissent de nombreuses tâches.", meaning: "Robotlar birçok görevi yerine getiriyor.", pronunciation: "le ro-bo a-kon-plis dö nom-bröz taş" },
        { text: "L'intelligence artificielle nous aide dans la vie quotidienne.", meaning: "Yapay zeka günlük hayatta bize yardımcı oluyor.", pronunciation: "lan-te-li-jans ar-ti-fi-syel nu zed dan la vi ko-ti-dyen" },
        { text: "Il est essentiel de protéger nos données personnelles.", meaning: "Kişisel verilerimizi korumak çok önemlidir.", pronunciation: "i-le te-san-syel dö pro-te-je no do-ne per-so-nel" },
        { text: "Internet a révolutionné notre façon de communiquer.", meaning: "İnternet iletişim kurma şeklimizde devrim yarattı.", pronunciation: "an-ter-net a re-vo-lüs-yo-ne notr fa-son dö ko-mü-ni-ke" },
        { text: "Les réseaux sociaux ont un grand impact sur la société.", meaning: "Sosyal ağların toplum üzerinde büyük bir etkisi var.", pronunciation: "le re-zo so-syo on tun gran am-pakt sür la so-sye-te" },
        { text: "Beaucoup de métiers seront automatisés à l'avenir.", meaning: "Gelecekte birçok meslek otomatikleştirilecek.", pronunciation: "bo-ku dö me-tye sö-ron o-to-ma-ti-ze a lav-nir" },
        { text: "L'innovation technologique crée de nouvelles opportunités.", meaning: "Teknolojik yenilik yeni fırsatlar yaratır.", pronunciation: "li-no-vas-yon tek-no-lo-jik kre dö nu-vel zo-por-tü-ni-te" },
        { text: "Trouver l'équilibre entre la vie numérique et réelle est difficile.", meaning: "Dijital ve gerçek hayat arasındaki dengeyi bulmak zordur.", pronunciation: "tru-ve le-ki-libr an-trö la vi nü-me-rik e re-el e di-fi-sil" },
        { text: "La science et la robotique progressent ensemble.", meaning: "Bilim ve robotik birlikte ilerliyor.", pronunciation: "la syans e la ro-bo-tik pro-gres an-sanbl" }
    ]
};

const unit366Phrases: FrenchB1UnitPhrases = {
    unitId: 366,
    title: "Sosyal Medya (Réseaux Sociaux)",
    phrases: [
        { text: "Les réseaux sociaux occupent une grande place dans nos vies.", meaning: "Sosyal medya hayatımızda büyük bir yer tutuyor.", pronunciation: "le re-zo so-syo o-küp ün grand plas dan no vi" },
        { text: "N'oublie pas de te déconnecter de ton compte.", meaning: "Hesabından çıkış yapmayı unutma.", pronunciation: "nu-bli pa dö tö de-ko-nek-te dö ton kont" },
        { text: "Je passe trop de temps sur mon écran.", meaning: "Ekranımın başında çok fazla zaman harcıyorum.", pronunciation: "jö pas tro dö tan sür mo-ne-kran" },
        { text: "Il a bloqué cette personne car elle était impolie.", meaning: "Kaba olduğu için bu kişiyi engelledi.", pronunciation: "i-la blo-ke set per-son kar e-le-te an-po-li" },
        { text: "Cette vidéo est devenue virale en ligne.", meaning: "Bu video internette viral oldu.", pronunciation: "set vi-de-o e dö-vö-nü vi-ral an liny" },
        { text: "J'ai téléchargé une nouvelle application de messagerie.", meaning: "Yeni bir mesajlaşma uygulaması indirdim.", pronunciation: "je te-le-şar-je ün nu-vel a-pli-kas-yon dö me-saj-ri" },
        { text: "Les influenceurs ont un grand pouvoir sur les jeunes.", meaning: "Fenomenlerin gençler üzerinde büyük bir gücü var.", pronunciation: "le zan-flü-an-sör on tun gran pu-vuar sür le jön" },
        { text: "Tu as reçu une notification de ta mère.", meaning: "Annenden bir bildirim aldın.", pronunciation: "tü a rö-sü ün no-ti-fi-kas-yon dö ta mer" },
        { text: "Clique sur le lien pour voir l'article complet.", meaning: "Makalenin tamamını görmek için linke tıkla.", pronunciation: "klik sür lö lyan pur vuar lar-tikl kon-ple" },
        { text: "Il est important de vérifier les informations avant de les partager.", meaning: "Bilgileri paylaşmadan önce doğrulamak önemlidir.", pronunciation: "i-le tan-por-tan dö ve-ri-fye le zan-for-mas-yon a-van dö le par-ta-je" }
    ]
};

const unit367Phrases: FrenchB1UnitPhrases = {
    unitId: 367,
    title: "Çevre ve Doğa (L'Environnement et la Nature)",
    phrases: [
        { text: "La pollution de l'air est un grand problème dans les grandes villes.", meaning: "Hava kirliliği büyük şehirlerde büyük bir sorundur.", pronunciation: "la po-lüs-yon dö ler e-tun gran prob-lem dan le grand vil" },
        { text: "Nous devons réduire notre consommation de plastique.", meaning: "Plastik tüketimimizi azaltmalıyız.", pronunciation: "nu dö-von re-dü-ir notr kon-so-mas-yon dö plas-tik" },
        { text: "Il est urgent d'agir contre le réchauffement climatique.", meaning: "Küresel ısınmaya karşı harekete geçmek acildir.", pronunciation: "i-le-tür-jan da-jir kontr lö re-şof-man kli-ma-tik" },
        { text: "Les énergies renouvelables sont l'avenir de notre planète.", meaning: "Yenilenebilir enerjiler gezegenimizin geleceğidir.", pronunciation: "le-ze-ner-ji rö-nuv-labl son la-vö-nir dö notr pla-net" },
        { text: "N'oubliez pas d'éteindre la lumière en sortant.", meaning: "Çıkarken ışığı kapatmayı unutmayın.", pronunciation: "nu-bli-ye pa de-tandr la lü-myer an sor-tan" },
        { text: "Le tri des déchets est obligatoire dans cette ville.", meaning: "Atıkların ayrıştırılması bu şehirde zorunludur.", pronunciation: "lö tri de de-şe e-tob-li-ga-tuar dan set vil" },
        { text: "Beaucoup d'espèces animales sont menacées d'extinction.", meaning: "Birçok hayvan türü yok olma tehlikesiyle karşı karşıya.", pronunciation: "bo-ku des-pes a-ni-mal son mö-na-se deks-tank-syon" },
        { text: "Nous participons à un projet de nettoyage de la plage.", meaning: "Sahil temizleme projesine katılıyoruz.", pronunciation: "nu par-ti-si-pon a un pro-je dö ne-tua-yaj dö la plaj" },
        { text: "L'eau potable devient une ressource rare.", meaning: "İçme suyu nadir bir kaynak haline geliyor.", pronunciation: "lo po-tabl dö-vyan ün rö-surs rar" },
        { text: "Chacun peut faire un petit geste pour sauver la nature.", meaning: "Doğayı kurtarmak için herkes küçük bir şey yapabilir.", pronunciation: "şa-kün pö fer un pö-ti jest pur so-ve la na-tür" }
    ]
};

export function getFrB1PhrasesForUnit(unitId: number): FrenchB1Phrase[] {
    const idMapping: { [key: number]: FrenchB1UnitPhrases } = {
        361: unit361Phrases,
        362: unit362Phrases,
        363: unit363Phrases,
        364: unit364Phrases,
        365: unit365Phrases,
        366: unit366Phrases,
        367: unit367Phrases
    };
    return idMapping[unitId]?.phrases || unit361Phrases.phrases;
}
