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
    title: "Ä°ÅŸ GÃ¶rÃ¼ÅŸmesi",
    phrases: [
        { text: "Bonjour, je m'appelle... et j'ai rendez-vous pour un entretien.", meaning: "Merhaba, benim adÄ±m... ve bir gÃ¶rÃ¼ÅŸme iÃ§in randevum var.", pronunciation: "bon-jur, jÃ¶ ma-pel... e je ran-de-vu pur Ã¶n an-trÃ¶-tyan" },
        { text: "EnchantÃ© de vous rencontrer.", meaning: "Sizinle tanÄ±ÅŸtÄ±ÄŸÄ±ma memnun oldum.", pronunciation: "an-ÅŸan-te dÃ¶ vu ran-kon-tre" },
        { text: "Merci de m'avoir reÃ§u.", meaning: "Beni kabul ettiÄŸiniz iÃ§in teÅŸekkÃ¼r ederim.", pronunciation: "mer-si dÃ¶ ma-vuar rÃ¶-sÃ¼" },
        { text: "Parlez-moi de vous.", meaning: "Bana kendinizden bahsedin.", pronunciation: "par-le-mua dÃ¶ vu" },
        { text: "J'ai obtenu mon diplÃ´me l'annÃ©e derniÃ¨re.", meaning: "DiplomamÄ± geÃ§en yÄ±l aldÄ±m.", pronunciation: "je ob-tÃ¶-nÃ¼ mon dip-lom la-ne der-nyer" },
        { text: "J'ai cinq ans d'expÃ©rience dans ce domaine.", meaning: "Bu alanda beÅŸ yÄ±llÄ±k tecrÃ¼bem var.", pronunciation: "je sank an deks-pe-riyans dan sÃ¶ do-men" },
        { text: "Pourquoi avez-vous postulÃ© Ã  ce poste ?", meaning: "Bu pozisyona neden baÅŸvurdunuz?", pronunciation: "pur-kua a-ve-vu pos-tÃ¼-le a sÃ¶ post" },
        { text: "Votre entreprise est leader sur le marchÃ©.", meaning: "Åirketiniz pazarda lider.", pronunciation: "votr an-trÃ¶-priz e li-dÃ¶r sÃ¼r lÃ¶ mar-ÅŸe" },
        { text: "Quels sont vos points forts et vos points faibles ?", meaning: "GÃ¼Ã§lÃ¼ ve zayÄ±f yÃ¶nleriniz nelerdir?", pronunciation: "kel son vo pwan for e vo pwan febl" },
        { text: "Je suis trÃ¨s organisÃ© et j'apprends vite.", meaning: "Ã‡ok dÃ¼zenliyim ve hÄ±zlÄ± Ã¶ÄŸrenirim.", pronunciation: "jÃ¶ sÃ¼i tre or-ga-ni-ze e jap-ran vit" },
        { text: "Je parle couramment anglais et franÃ§ais.", meaning: "AkÄ±cÄ± bir ÅŸekilde Ä°ngilizce ve FransÄ±zca konuÅŸuyorum.", pronunciation: "jÃ¶ parl ku-ra-man ang-le e fran-se" },
        { text: "Quelles sont vos prÃ©tentions salariales ?", meaning: "MaaÅŸ beklentileriniz nelerdir?", pronunciation: "kel son vo pre-tan-syon sa-la-ryal" },
        { text: "Avez-vous des questions ?", meaning: "SorularÄ±nÄ±z var mÄ±?", pronunciation: "a-ve-vu de kes-tyon" },
        { text: "Quand pensez-vous prendre une dÃ©cision ?", meaning: "Ne zaman bir karar vermeyi dÃ¼ÅŸÃ¼nÃ¼yorsunuz?", pronunciation: "kan pan-se-vu prandr Ã¼n de-siz-yon" },
        { text: "Nous vous contacterons bientÃ´t.", meaning: "Sizinle yakÄ±nda iletiÅŸime geÃ§eceÄŸiz.", pronunciation: "nu vu kon-tak-tÃ¶-ron byan-to" }
    ]
};

const unit362Phrases: FrenchB1UnitPhrases = {
    unitId: 362,
    title: "L'environnement et l'Ã©cologie (Ã‡evre ve Ekoloji)",
    phrases: [
        { text: "Il faut protÃ©ger l'environnement.", meaning: "Ã‡evreyi korumak gerekir.", pronunciation: "il fo pro-te-je lan-vi-ron-man" },
        { text: "Le rÃ©chauffement climatique est un grand problÃ¨me.", meaning: "KÃ¼resel Ä±sÄ±nma bÃ¼yÃ¼k bir problemdir.", pronunciation: "lÃ¶ re-ÅŸof-man kli-ma-tik e tun gran prob-lem" },
        { text: "Nous devons recycler nos dÃ©chets.", meaning: "AtÄ±klarÄ±mÄ±zÄ± geri dÃ¶nÃ¼ÅŸtÃ¼rmeliyiz.", pronunciation: "nu dÃ¶-von rÃ¶-si-kle no de-ÅŸe" },
        { text: "Je fais le tri sÃ©lectif Ã  la maison.", meaning: "Evde Ã§Ã¶pleri ayÄ±rÄ±yorum (geri dÃ¶nÃ¼ÅŸÃ¼m iÃ§in).", pronunciation: "jÃ¶ fe lÃ¶ tri se-lek-tif a la me-zon" },
        { text: "L'Ã©nergie solaire est une Ã©nergie renouvelable.", meaning: "GÃ¼neÅŸ enerjisi yenilenebilir bir enerjidir.", pronunciation: "le-ner-ji so-ler e tÃ¼n e-ner-ji rÃ¶-nuv-labl" },
        { text: "Ne jetez pas de plastique dans la nature.", meaning: "DoÄŸaya plastik atmayÄ±n.", pronunciation: "nÃ¶ jÃ¶-te pa dÃ¶ plas-tik dan la na-tur" },
        { text: "La pollution de l'air est dangereuse pour la santÃ©.", meaning: "Hava kirliliÄŸi saÄŸlÄ±k iÃ§in tehlikelidir.", pronunciation: "la po-lÃ¼s-yon dÃ¶ ler e dan-jÃ¶-rÃ¶z pur la san-te" },
        { text: "Nous devons rÃ©duire notre empreinte carbone.", meaning: "Karbon ayak izimizi azaltmalÄ±yÄ±z.", pronunciation: "nu dÃ¶-von re-dÃ¼-ir notr am-praint kar-bon" },
        { text: "C'est important de sauver les espÃ¨ces en danger.", meaning: "Tehlike altÄ±ndaki tÃ¼rleri kurtarmak Ã¶nemlidir.", pronunciation: "se tam-por-tan dÃ¶ so-ve le-zes-pes an dan-je" },
        { text: "Il est nÃ©cessaire d'utiliser les transports en commun.", meaning: "Toplu taÅŸÄ±mayÄ± kullanmak gereklidir.", pronunciation: "il e ne-se-ser dÃ¼-ti-li-ze le trans-por zan ko-mun" },
        { text: "ArrÃªtons de gaspiller l'eau potable.", meaning: "Ä°Ã§me suyunu israf etmeyi bÄ±rakalÄ±m.", pronunciation: "a-re-ton dÃ¶ gas-pi-ye lo po-tabl" },
        { text: "Il faut lutter contre la dÃ©forestation.", meaning: "OrmansÄ±zlaÅŸmaya karÅŸÄ± mÃ¼cadele etmeliyiz.", pronunciation: "il fo lÃ¼-te kontr la de-fo-res-tas-yon" },
        { text: "Les sacs en plastique sont interdits.", meaning: "Plastik poÅŸetler yasaktÄ±r.", pronunciation: "le sak zan plas-tik son tan-ter-di" },
        { text: "Les Ã©nergies fossiles polluent la planÃ¨te.", meaning: "Fosil yakÄ±tlar gezegeni kirletiyor.", pronunciation: "le-ze-ner-ji fo-sil po-lÃ¼ la pla-net" },
        { text: "Chacun peut faire un geste pour l'Ã©cologie.", meaning: "Herkes ekoloji iÃ§in bir ÅŸey (jest) yapabilir.", pronunciation: "ÅŸa-kun pÃ¶ fer un jest pur le-ko-lo-ji" }
    ]
};

const unit363Phrases: FrenchB1UnitPhrases = {
    unitId: 363,
    title: "Les nouvelles technologies (Yeni Teknolojiler)",
    phrases: [
        { text: "J'ai achetÃ© un nouvel ordinateur portable.", meaning: "Yeni bir dizÃ¼stÃ¼ bilgisayar aldÄ±m.", pronunciation: "je a-ÅŸÃ¶-te un nu-vel or-di-na-tÃ¶r por-tabl" },
        { text: "La connexion Internet est trÃ¨s lente aujourd'hui.", meaning: "Ä°nternet baÄŸlantÄ±sÄ± bugÃ¼n Ã§ok yavaÅŸ.", pronunciation: "la ko-nek-syon an-ter-net e tre lant o-jur-dÃ¶-i" },
        { text: "N'oublie pas de sauvegarder tes fichiers.", meaning: "DosyalarÄ±nÄ± kaydetmeyi unutma.", pronunciation: "nub-li pa dÃ¶ sov-gar-de te fi-ÅŸye" },
        { text: "J'ai tÃ©lÃ©chargÃ© une nouvelle application sur mon smartphone.", meaning: "AkÄ±llÄ± telefonuma yeni bir uygulama indirdim.", pronunciation: "je te-le-ÅŸar-je Ã¼n nu-vel ap-li-kas-yon sÃ¼r mon smar-fon" },
        { text: "Quel est le mot de passe du rÃ©seau Wi-Fi ?", meaning: "Wi-Fi aÄŸÄ±nÄ±n ÅŸifresi nedir?", pronunciation: "kel e lÃ¶ mo dÃ¶ pas dÃ¼ re-zo ui-fi" },
        { text: "L'intelligence artificielle se dÃ©veloppe rapidement.", meaning: "Yapay zeka hÄ±zla geliÅŸiyor.", pronunciation: "lante-li-jans ar-ti-fi-syel sÃ¶ de-vÃ¶-lop ra-pid-man" },
        { text: "Il faut faire une mise Ã  jour du logiciel.", meaning: "YazÄ±lÄ±m gÃ¼ncellemesi yapmak gerekiyor.", pronunciation: "il fo fer Ã¼n miz a jur dÃ¼ lo-ji-syel" },
        { text: "Mon Ã©cran est cassÃ©, je dois le rÃ©parer.", meaning: "EkranÄ±m kÄ±rÄ±k, onu tamir ettirmem lazÄ±m.", pronunciation: "mon e-kran e ka-se, jÃ¶ dua lÃ¶ re-pa-re" },
        { text: "J'ai cliquÃ© sur le mauvais lien par erreur.", meaning: "YanlÄ±ÅŸlÄ±kla hatalÄ± baÄŸlantÄ±ya tÄ±kladÄ±m.", pronunciation: "je kli-ke sÃ¼r lÃ¶ mo-ve lyan par e-rÃ¶r" },
        { text: "La sÃ©curitÃ© des donnÃ©es est essentielle.", meaning: "Veri gÃ¼venliÄŸi Ã§ok Ã¶nemlidir.", pronunciation: "la se-kÃ¼-ri-te de do-ne e te-san-syel" },
        { text: "J'ai supprimÃ© le document par accident.", meaning: "Belgeyi kazara sildim.", pronunciation: "je sÃ¼-pri-me lÃ¶ do-kÃ¼-man par ak-si-dan" },
        { text: "Comment puis-je imprimer ce formulaire ?", meaning: "Bu formu nasÄ±l yazdÄ±rabilirim?", pronunciation: "ko-man pÃ¼-ij am-pri-me sÃ¶ for-mÃ¼-ler" },
        { text: "Le pirate informatique a volÃ© des informations.", meaning: "Bilgisayar korsanÄ± bilgileri Ã§aldÄ±.", pronunciation: "lÃ¶ pi-rat an-for-ma-tik a vo-le de-zan-for-mas-yon" },
        { text: "Les rÃ©seaux sociaux sont trÃ¨s populaires.", meaning: "Sosyal aÄŸlar Ã§ok popÃ¼ler.", pronunciation: "le re-zo so-syo son tre po-pÃ¼-ler" },
        { text: "J'utilise mon clavier professionnel tous les jours.", meaning: "Profesyonel klavyemi her gÃ¼n kullanÄ±yorum.", pronunciation: "jÃ¼-ti-liz mon kla-vye pro-fes-yo-nel tu le jur" }
    ]
};

const unit364Phrases: FrenchB1UnitPhrases = {
    unitId: 364,
    title: "L'art et la culture (Sanat ve KÃ¼ltÃ¼r)",
    phrases: [
        { text: "Ce musÃ©e est trÃ¨s cÃ©lÃ¨bre dans le monde entier.", meaning: "Bu mÃ¼ze tÃ¼m dÃ¼nyada Ã§ok Ã¼nlÃ¼dÃ¼r.", pronunciation: "sÃ¶ mÃ¼-ze e tre se-lebr dan lÃ¶ mond an-tye" },
        { text: "J'ai vu une exposition d'art moderne hier.", meaning: "DÃ¼n modern sanat sergisi gÃ¶rdÃ¼m.", pronunciation: "je vÃ¶ Ã¼n eks-po-zis-yon dar mo-dern i-yer" },
        { text: "Quel est ton peintre prÃ©fÃ©rÃ© ?", meaning: "En sevdiÄŸin ressam kimdir?", pronunciation: "kel e ton pantr pre-fe-re" },
        { text: "La Joconde est un vÃ©ritable chef-d'Å“uvre.", meaning: "Mona Lisa gerÃ§ek bir baÅŸyapÄ±ttÄ±r.", pronunciation: "la jo-kond e tun ve-ri-tabl ÅŸef-dÃ¶vr" },
        { text: "Nous allons au thÃ©Ã¢tre ce soir.", meaning: "Bu akÅŸam tiyatroya gidiyoruz.", pronunciation: "nu-za-lon o te-atr sÃ¶ suar" },
        { text: "Les acteurs ont trÃ¨s bien jouÃ© leur rÃ´le.", meaning: "Oyuncular rollerini Ã§ok iyi oynadÄ±lar.", pronunciation: "le-zak-tÃ¶r on tre byan ju-e lÃ¶r rol" },
        { text: "Le rÃ©alisateur a gagnÃ© un prix pour ce film.", meaning: "YÃ¶netmen bu film iÃ§in bir Ã¶dÃ¼l kazandÄ±.", pronunciation: "lÃ¶ re-a-li-za-tÃ¶r a gan-ye un pri pur sÃ¶ film" },
        { text: "La scÃ¨ne de fin Ã©tait trÃ¨s Ã©mouvante.", meaning: "BitiÅŸ sahnesi Ã§ok dokunaklÄ±ydÄ±.", pronunciation: "la sen dÃ¶ fan e-te tre e-mu-vant" },
        { text: "J'adore Ã©couter de la musique classique.", meaning: "Klasik mÃ¼zik dinlemeye bayÄ±lÄ±rÄ±m.", pronunciation: "ja-dor e-ku-te dÃ¶ la mÃ¼-zik kla-sik" },
        { text: "Il joue plusieurs instruments de musique.", meaning: "O, birkaÃ§ mÃ¼zik aleti Ã§alÄ±yor.", pronunciation: "il ju plÃ¼-zyÃ¶r zans-trÃ¼-man dÃ¶ mÃ¼-zik" },
        { text: "Ce roman a remportÃ© un grand succÃ¨s.", meaning: "Bu roman bÃ¼yÃ¼k bir baÅŸarÄ± elde etti.", pronunciation: "sÃ¶ ro-man a ran-por-te un gran sÃ¼k-se" },
        { text: "Qui est l'auteur de ce livre passionnant ?", meaning: "Bu heyecan verici kitabÄ±n yazarÄ± kim?", pronunciation: "ki e lo-tÃ¶r dÃ¶ sÃ¶ livr pa-syo-nan" },
        { text: "Le public a beaucoup applaudi Ã  la fin.", meaning: "Halk (seyirci) sonunda Ã§ok alkÄ±ÅŸladÄ±.", pronunciation: "lÃ¶ pÃ¼b-lik a bo-ku ap-lo-di a la fan" },
        { text: "La culture franÃ§aise est trÃ¨s riche et variÃ©e.", meaning: "FransÄ±z kÃ¼ltÃ¼rÃ¼ Ã§ok zengin ve Ã§eÅŸitlidir.", pronunciation: "la kÃ¼l-tÃ¼r fran-sez e tre riÅŸ e va-rye" },
        { text: "L'art permet d'exprimer ses Ã©motions profondes.", meaning: "Sanat derin duygularÄ±nÄ± ifade etmeyi saÄŸlar.", pronunciation: "lar per-me deks-pri-me se-ze-mos-yon pro-fond" }
    ]
};

const unit365Phrases: FrenchB1UnitPhrases = {
    unitId: 365,
    title: "Teknoloji ve Toplum",
    phrases: [
        { text: "La technologie Ã©volue Ã  une vitesse incroyable.", meaning: "Teknoloji inanÄ±lmaz bir hÄ±zla geliÅŸiyor.", pronunciation: "la tek-no-lo-ji e-vo-lÃ¼ a Ã¼n vi-tes an-krua-yabl" },
        { text: "Les robots accomplissent de nombreuses tÃ¢ches.", meaning: "Robotlar birÃ§ok gÃ¶revi yerine getiriyor.", pronunciation: "le ro-bo a-kon-plis dÃ¶ nom-brÃ¶z taÅŸ" },
        { text: "L'intelligence artificielle nous aide dans la vie quotidienne.", meaning: "Yapay zeka gÃ¼nlÃ¼k hayatta bize yardÄ±mcÄ± oluyor.", pronunciation: "lan-te-li-jans ar-ti-fi-syel nu zed dan la vi ko-ti-dyen" },
        { text: "Il est essentiel de protÃ©ger nos donnÃ©es personnelles.", meaning: "KiÅŸisel verilerimizi korumak Ã§ok Ã¶nemlidir.", pronunciation: "i-le te-san-syel dÃ¶ pro-te-je no do-ne per-so-nel" },
        { text: "Internet a rÃ©volutionnÃ© notre faÃ§on de communiquer.", meaning: "Ä°nternet iletiÅŸim kurma ÅŸeklimizde devrim yarattÄ±.", pronunciation: "an-ter-net a re-vo-lÃ¼s-yo-ne notr fa-son dÃ¶ ko-mÃ¼-ni-ke" },
        { text: "Les rÃ©seaux sociaux ont un grand impact sur la sociÃ©tÃ©.", meaning: "Sosyal aÄŸlarÄ±n toplum Ã¼zerinde bÃ¼yÃ¼k bir etkisi var.", pronunciation: "le re-zo so-syo on tun gran am-pakt sÃ¼r la so-sye-te" },
        { text: "Beaucoup de mÃ©tiers seront automatisÃ©s Ã  l'avenir.", meaning: "Gelecekte birÃ§ok meslek otomatikleÅŸtirilecek.", pronunciation: "bo-ku dÃ¶ me-tye sÃ¶-ron o-to-ma-ti-ze a lav-nir" },
        { text: "L'innovation technologique crÃ©e de nouvelles opportunitÃ©s.", meaning: "Teknolojik yenilik yeni fÄ±rsatlar yaratÄ±r.", pronunciation: "li-no-vas-yon tek-no-lo-jik kre dÃ¶ nu-vel zo-por-tÃ¼-ni-te" },
        { text: "Trouver l'Ã©quilibre entre la vie numÃ©rique et rÃ©elle est difficile.", meaning: "Dijital ve gerÃ§ek hayat arasÄ±ndaki dengeyi bulmak zordur.", pronunciation: "tru-ve le-ki-libr an-trÃ¶ la vi nÃ¼-me-rik e re-el e di-fi-sil" },
        { text: "La science et la robotique progressent ensemble.", meaning: "Bilim ve robotik birlikte ilerliyor.", pronunciation: "la syans e la ro-bo-tik pro-gres an-sanbl" }
    ]
};

const unit366Phrases: FrenchB1UnitPhrases = {
    unitId: 366,
    title: "Sosyal Medya (RÃ©seaux Sociaux)",
    phrases: [
        { text: "Les rÃ©seaux sociaux occupent une grande place dans nos vies.", meaning: "Sosyal medya hayatÄ±mÄ±zda bÃ¼yÃ¼k bir yer tutuyor.", pronunciation: "le re-zo so-syo o-kÃ¼p Ã¼n grand plas dan no vi" },
        { text: "N'oublie pas de te dÃ©connecter de ton compte.", meaning: "HesabÄ±ndan Ã§Ä±kÄ±ÅŸ yapmayÄ± unutma.", pronunciation: "nu-bli pa dÃ¶ tÃ¶ de-ko-nek-te dÃ¶ ton kont" },
        { text: "Je passe trop de temps sur mon Ã©cran.", meaning: "EkranÄ±mÄ±n baÅŸÄ±nda Ã§ok fazla zaman harcÄ±yorum.", pronunciation: "jÃ¶ pas tro dÃ¶ tan sÃ¼r mo-ne-kran" },
        { text: "Il a bloquÃ© cette personne car elle Ã©tait impolie.", meaning: "Kaba olduÄŸu iÃ§in bu kiÅŸiyi engelledi.", pronunciation: "i-la blo-ke set per-son kar e-le-te an-po-li" },
        { text: "Cette vidÃ©o est devenue virale en ligne.", meaning: "Bu video internette viral oldu.", pronunciation: "set vi-de-o e dÃ¶-vÃ¶-nÃ¼ vi-ral an liny" },
        { text: "J'ai tÃ©lÃ©chargÃ© une nouvelle application de messagerie.", meaning: "Yeni bir mesajlaÅŸma uygulamasÄ± indirdim.", pronunciation: "je te-le-ÅŸar-je Ã¼n nu-vel a-pli-kas-yon dÃ¶ me-saj-ri" },
        { text: "Les influenceurs ont un grand pouvoir sur les jeunes.", meaning: "Fenomenlerin genÃ§ler Ã¼zerinde bÃ¼yÃ¼k bir gÃ¼cÃ¼ var.", pronunciation: "le zan-flÃ¼-an-sÃ¶r on tun gran pu-vuar sÃ¼r le jÃ¶n" },
        { text: "Tu as reÃ§u une notification de ta mÃ¨re.", meaning: "Annenden bir bildirim aldÄ±n.", pronunciation: "tÃ¼ a rÃ¶-sÃ¼ Ã¼n no-ti-fi-kas-yon dÃ¶ ta mer" },
        { text: "Clique sur le lien pour voir l'article complet.", meaning: "Makalenin tamamÄ±nÄ± gÃ¶rmek iÃ§in linke tÄ±kla.", pronunciation: "klik sÃ¼r lÃ¶ lyan pur vuar lar-tikl kon-ple" },
        { text: "Il est important de vÃ©rifier les informations avant de les partager.", meaning: "Bilgileri paylaÅŸmadan Ã¶nce doÄŸrulamak Ã¶nemlidir.", pronunciation: "i-le tan-por-tan dÃ¶ ve-ri-fye le zan-for-mas-yon a-van dÃ¶ le par-ta-je" }
    ]
};

const unit367Phrases: FrenchB1UnitPhrases = {
    unitId: 367,
    title: "Ã‡evre ve DoÄŸa (L'Environnement et la Nature)",
    phrases: [
        { text: "La pollution de l'air est un grand problÃ¨me dans les grandes villes.", meaning: "Hava kirliliÄŸi bÃ¼yÃ¼k ÅŸehirlerde bÃ¼yÃ¼k bir sorundur.", pronunciation: "la po-lÃ¼s-yon dÃ¶ ler e-tun gran prob-lem dan le grand vil" },
        { text: "Nous devons rÃ©duire notre consommation de plastique.", meaning: "Plastik tÃ¼ketimimizi azaltmalÄ±yÄ±z.", pronunciation: "nu dÃ¶-von re-dÃ¼-ir notr kon-so-mas-yon dÃ¶ plas-tik" },
        { text: "Il est urgent d'agir contre le rÃ©chauffement climatique.", meaning: "KÃ¼resel Ä±sÄ±nmaya karÅŸÄ± harekete geÃ§mek acildir.", pronunciation: "i-le-tÃ¼r-jan da-jir kontr lÃ¶ re-ÅŸof-man kli-ma-tik" },
        { text: "Les Ã©nergies renouvelables sont l'avenir de notre planÃ¨te.", meaning: "Yenilenebilir enerjiler gezegenimizin geleceÄŸidir.", pronunciation: "le-ze-ner-ji rÃ¶-nuv-labl son la-vÃ¶-nir dÃ¶ notr pla-net" },
        { text: "N'oubliez pas d'Ã©teindre la lumiÃ¨re en sortant.", meaning: "Ã‡Ä±karken Ä±ÅŸÄ±ÄŸÄ± kapatmayÄ± unutmayÄ±n.", pronunciation: "nu-bli-ye pa de-tandr la lÃ¼-myer an sor-tan" },
        { text: "Le tri des dÃ©chets est obligatoire dans cette ville.", meaning: "AtÄ±klarÄ±n ayrÄ±ÅŸtÄ±rÄ±lmasÄ± bu ÅŸehirde zorunludur.", pronunciation: "lÃ¶ tri de de-ÅŸe e-tob-li-ga-tuar dan set vil" },
        { text: "Beaucoup d'espÃ¨ces animales sont menacÃ©es d'extinction.", meaning: "BirÃ§ok hayvan tÃ¼rÃ¼ yok olma tehlikesiyle karÅŸÄ± karÅŸÄ±ya.", pronunciation: "bo-ku des-pes a-ni-mal son mÃ¶-na-se deks-tank-syon" },
        { text: "Nous participons Ã  un projet de nettoyage de la plage.", meaning: "Sahil temizleme projesine katÄ±lÄ±yoruz.", pronunciation: "nu par-ti-si-pon a un pro-je dÃ¶ ne-tua-yaj dÃ¶ la plaj" },
        { text: "L'eau potable devient une ressource rare.", meaning: "Ä°Ã§me suyu nadir bir kaynak haline geliyor.", pronunciation: "lo po-tabl dÃ¶-vyan Ã¼n rÃ¶-surs rar" },
        { text: "Chacun peut faire un petit geste pour sauver la nature.", meaning: "DoÄŸayÄ± kurtarmak iÃ§in herkes kÃ¼Ã§Ã¼k bir ÅŸey yapabilir.", pronunciation: "ÅŸa-kÃ¼n pÃ¶ fer un pÃ¶-ti jest pur so-ve la na-tÃ¼r" }
    ]
};

const unit368Phrases: FrenchB1UnitPhrases = {
    unitId: 368,
    title: "SaÄŸlÄ±k ve Zindelik (SantÃ© et Bien-Ãªtre)",
    phrases: [
        { text: "Je ne me sens pas trÃ¨s bien aujourd'hui.", meaning: "BugÃ¼n kendimi pek iyi hissetmiyorum.", pronunciation: "jÃ¶ nÃ¶ mÃ¶ san pa tre byan o-jur-dÃ¼-i" },
        { text: "Avez-vous pris vos mÃ©dicaments ce matin ?", meaning: "Bu sabah ilaÃ§larÄ±nÄ±zÄ± aldÄ±nÄ±z mÄ±?", pronunciation: "a-ve vu pri vo me-di-ka-man sÃ¶ ma-tan" },
        { text: "Il vaut mieux consulter un mÃ©decin rapidement.", meaning: "Hemen bir doktora danÄ±ÅŸmak en iyisidir.", pronunciation: "il vo myÃ¶ kon-sÃ¼l-te un med-san ra-pid-man" },
        { text: "J'ai mal Ã  la tÃªte et je tousse beaucoup.", meaning: "BaÅŸÄ±m aÄŸrÄ±yor ve Ã§ok Ã¶ksÃ¼rÃ¼yorum.", pronunciation: "je mal a la tet e jÃ¶ tus bo-ku" },
        { text: "Le sport est excellent pour la santÃ© physique et mentale.", meaning: "Spor, fiziksel ve zihinsel saÄŸlÄ±k iÃ§in mÃ¼kemmeldir.", pronunciation: "lÃ¶ spor e-tek-se-lan pur la san-te fi-zik e man-tal" },
        { text: "Pensez Ã  boire beaucoup d'eau pendant la journÃ©e.", meaning: "GÃ¼n boyunca bol su iÃ§meyi unutmayÄ±n.", pronunciation: "pan-se a buar bo-ku do pan-dan la jur-ne" },
        { text: "Je voudrais prendre rendez-vous avec le docteur, s'il vous plaÃ®t.", meaning: "Doktorla randevu almak istiyorum, lÃ¼tfen.", pronunciation: "jÃ¶ vu-dre prandr ran-de-vu a-vek lÃ¶ dok-tÃ¶r, sil vu ple" },
        { text: "Combien de temps faut-il pour guÃ©rir de cette maladie ?", meaning: "Bu hastalÄ±ktan iyileÅŸmek ne kadar sÃ¼rer?", pronunciation: "kon-byan dÃ¶ tan fo-til pur ge-rir dÃ¶ set ma-la-di" },
        { text: "Vous devez vous reposer et rester au chaud.", meaning: "Dinlenmeli ve sÄ±cak kalmalÄ±sÄ±nÄ±z.", pronunciation: "vu dÃ¶-ve vu rÃ¶-po-ze e res-te o ÅŸo" },
        { text: "Manger plus de lÃ©gumes fait partie d'un rÃ©gime sain.", meaning: "Daha fazla sebze yemek saÄŸlÄ±klÄ± bir diyetin parÃ§asÄ±dÄ±r.", pronunciation: "man-je plÃ¼ dÃ¶ le-gÃ¼m fe par-ti dun re-jim san" }
    ]
};

const unit369Phrases: FrenchB1UnitPhrases = {
    unitId: 369,
    title: "EÄŸitim ve Ã–ÄŸrenim (Ã‰ducation et Apprentissage)",
    phrases: [
        { text: "Les Ã©tudiants doivent prÃ©parer leurs examens finaux.", meaning: "Ã–ÄŸrenciler final sÄ±navlarÄ±na hazÄ±rlanmalÄ±dÄ±r.", pronunciation: "lez e-tÃ¼-dyan duav pre-pa-re lÃ¶rz eg-za-man fi-no" },
        { text: "Elle a obtenu son diplÃ´me avec mention.", meaning: "DiplomasÄ±nÄ± dereceyle aldÄ±.", pronunciation: "el a ob-tÃ¶-nÃ¼ son di-plom a-vek man-syon" },
        { text: "Le professeur de mathÃ©matiques est trÃ¨s strict cette annÃ©e.", meaning: "Matematik Ã¶ÄŸretmeni bu yÄ±l Ã§ok katÄ±.", pronunciation: "lÃ¶ pro-fe-sÃ¶r dÃ¶ ma-te-ma-tik e tre strikt set a-ne" },
        { text: "Combien de cours avez-vous aujourd'hui ?", meaning: "BugÃ¼n kaÃ§ dersiniz var?", pronunciation: "kon-byan dÃ¶ kur a-ve vu o-jur-dÃ¼-i" },
        { text: "J'espÃ¨re rÃ©ussir cet examen car j'ai beaucoup Ã©tudiÃ©.", meaning: "Ã‡ok Ã§alÄ±ÅŸtÄ±ÄŸÄ±m iÃ§in bu sÄ±navÄ± geÃ§meyi umuyorum.", pronunciation: "jes-per re-Ã¼-sir set eg-za-man kar je bo-ku e-tÃ¼-dye" },
        { text: "Il est important d'Ã©couter attentivement pendant la leÃ§on.", meaning: "Ders sÄ±rasÄ±nda dikkatle dinlemek Ã¶nemlidir.", pronunciation: "il e-tan-por-tan de-ku-te a-tan-tiv-man pan-dan la lÃ¶-son" },
        { text: "La rentrÃ©e scolaire est toujours un moment stressant.", meaning: "OkullarÄ±n aÃ§Ä±lmasÄ± her zaman stresli bir andÄ±r.", pronunciation: "la ran-tre sko-ler e tu-jur un mo-man stres-san" },
        { text: "N'oublie pas de faire tes devoirs avant de sortir.", meaning: "Ã‡Ä±kmadan Ã¶nce Ã¶devlerini yapmayÄ± unutma.", pronunciation: "nub-li pa dÃ¶ fer te dÃ¶-vuar a-van dÃ¶ sor-tir" },
        { text: "Elle veut obtenir une bourse pour aller Ã  l'universitÃ©.", meaning: "Ãœniversiteye gitmek iÃ§in burs almak istiyor.", pronunciation: "el vÃ¶ ob-tÃ¶-nir Ã¼n burs pur a-le a lÃ¼-ni-ver-si-te" },
        { text: "L'Ã©ducation est essentielle pour l'avenir des jeunes.", meaning: "EÄŸitim, genÃ§lerin geleceÄŸi iÃ§in esastÄ±r.", pronunciation: "le-dÃ¼-ka-syon e-te-san-syel pur lav-nir de jÃ¶n" }
    ]
};

const unit370Phrases: FrenchB1UnitPhrases = {
    unitId: 370,
    title: "DoÄŸa ve Ã‡evre (Nature et Environnement)",
    phrases: [
        { text: "Le changement climatique est un problÃ¨me mondial.", meaning: "Ä°klim deÄŸiÅŸikliÄŸi kÃ¼resel bir sorundur.", pronunciation: "lÃ¶ ÅŸanj-man kli-ma-tik e-tun prob-lem mon-dyal" },
        { text: "Nous devons rÃ©duire notre consommation de plastique.", meaning: "Plastik tÃ¼ketimimizi azaltmalÄ±yÄ±z.", pronunciation: "nu dÃ¶-von re-dÃ¼ir notr kon-so-ma-syon dÃ¶ plas-tik" },
        { text: "Il est important de recycler le papier et le verre.", meaning: "KaÄŸÄ±dÄ± ve camÄ± geri dÃ¶nÃ¼ÅŸtÃ¼rmek Ã¶nemlidir.", pronunciation: "il e-tan-por-tan dÃ¶ rÃ¶-si-kle lÃ¶ pa-pye e lÃ¶ ver" },
        { text: "Ne jetez pas vos dÃ©chets dans la nature.", meaning: "Ã‡Ã¶plerinizi doÄŸaya atmayÄ±n.", pronunciation: "nÃ¶ jÃ¶-te pa vo de-ÅŸe dan la na-tÃ¼r" },
        { text: "Les Ã©nergies renouvelables protÃ¨gent notre planÃ¨te.", meaning: "Yenilenebilir enerjiler gezegenimizi korur.", pronunciation: "lez e-ner-ji rÃ¶-nuv-labl pro-tej notr pla-net" },
        { text: "La pollution des ocÃ©ans menace les animaux marins.", meaning: "Okyanus kirliliÄŸi deniz hayvanlarÄ±nÄ± tehdit ediyor.", pronunciation: "la po-lÃ¼-syon dez o-se-an mÃ¶-nas lez a-ni-mo ma-ran" },
        { text: "Prenez les transports en commun pour rÃ©duire la pollution de l'air.", meaning: "Hava kirliliÄŸini azaltmak iÃ§in toplu taÅŸÄ±mayÄ± kullanÄ±n.", pronunciation: "prÃ¶-ne le trans-por an ko-mun pur re-dÃ¼ir la po-lÃ¼-syon dÃ¶ ler" },
        { text: "L'eau potable devient une ressource rare.", meaning: "Ä°Ã§me suyu nadir bir kaynak haline geliyor.", pronunciation: "lo po-tabl dÃ¶-vyan Ã¼n rÃ¶-surs rar" },
        { text: "Chacun peut faire un geste pour l'environnement.", meaning: "Herkes Ã§evre iÃ§in ufak bir adÄ±m atabilir.", pronunciation: "ÅŸa-kun pÃ¶ fer un jest pur lan-vi-ron-man" },
        { text: "La disparition des forÃªts est une vÃ©ritable tragÃ©die.", meaning: "OrmanlarÄ±n yok olmasÄ± gerÃ§ek bir trajedidir.", pronunciation: "la dis-pa-ri-syon de fo-re e-tÃ¼n ve-ri-tabl tra-je-di" }
    ]
};

const unit371Phrases: FrenchB1UnitPhrases = {
    unitId: 371,
    title: "Åehir ve Toplu TaÅŸÄ±ma (La Ville et Les Transports)",
    phrases: [
        { text: "Pardon, pour aller Ã  la gare s'il vous plaÃ®t ?", meaning: "Afedersiniz, istasyona nasÄ±l gidebilirim lÃ¼tfen?", pronunciation: "par-don, pur a-le a la gar sil vu ple" },
        { text: "Le mÃ©tro est plus rapide que le bus en ville.", meaning: "Metro, ÅŸehirde otobÃ¼sten daha hÄ±zlÄ±dÄ±r.", pronunciation: "lÃ¶ me-tro e plÃ¼ ra-pid kÃ¶ lÃ¶ bÃ¼s an vil" },
        { text: "Il faut descendre Ã  la prochaine station.", meaning: "Sonraki istasyonda/durakta inmek gerekiyor.", pronunciation: "il fo de-sandr a la pro-ÅŸen sta-syon" },
        { text: "Ã‰vitez le centre-ville Ã  cause des embouteillages.", meaning: "Trafik sÄ±kÄ±ÅŸÄ±klÄ±ÄŸÄ± nedeniyle ÅŸehir merkezinden kaÃ§Ä±nÄ±n.", pronunciation: "e-vi-te lÃ¶ santr-vil a koz dez an-bu-tey-yaj" },
        { text: "Je vais prendre un taxi pour rentrer.", meaning: "DÃ¶nmek (eve gitmek) iÃ§in taksiye bineceÄŸim.", pronunciation: "jÃ¶ ve prandr un tak-si pur ran-tre" },
        { text: "Pensez Ã  valider votre ticket avant de monter.", meaning: "Binmeden Ã¶nce biletinizi okutmayÄ± unutmayÄ±n.", pronunciation: "pan-se a va-li-de votr ti-ke a-van dÃ¶ mon-te" },
        { text: "Ce quartier est connu pour ses beaux bÃ¢timents.", meaning: "Bu semt gÃ¼zel binalarÄ±yla tanÄ±nÄ±r.", pronunciation: "sÃ¶ kar-tye e ko-nÃ¼ pur se bo ba-ti-man" },
        { text: "Les piÃ©tons ont la prioritÃ© sur ce passage.", meaning: "Bu geÃ§itte yayalarÄ±n Ã¶nceliÄŸi vardÄ±r.", pronunciation: "le pye-ton on la pri-yo-ri-te sÃ¼r sÃ¶ pas-saj" },
        { text: "Traversez la rue et tournez Ã  gauche.", meaning: "SokaÄŸÄ± (karÅŸÄ±dan karÅŸÄ±ya) geÃ§in ve sola dÃ¶nÃ¼n.", pronunciation: "tra-ver-se la rÃ¼ e tur-ne a goÅŸ" },
        { text: "La ligne 4 est fermÃ©e pour travaux aujourd'hui.", meaning: "Hat 4 bugÃ¼n Ã§alÄ±ÅŸmalar nedeniyle kapalÄ±.", pronunciation: "la liny katr e fer-me pur tra-vo o-jur-dÃ¼-i" }
    ]
};

const unit372Phrases: FrenchB1UnitPhrases = {
    unitId: 372,
    title: "Spor ve Aktiviteler (Le Sport et Les ActivitÃ©s Physiques)",
    phrases: [
        { text: "Je fais de la natation deux fois par semaine.", meaning: "Haftada iki kez yÃ¼zÃ¼yorum (yÃ¼zme sporu yapÄ±yorum).", pronunciation: "jÃ¶ fe dÃ¶ la na-ta-syon dÃ¶ fua par sÃ¶-men" },
        { text: "Quelle est votre Ã©quipe de football prÃ©fÃ©rÃ©e ?", meaning: "En sevdiÄŸiniz futbol takÄ±mÄ± hangisi?", pronunciation: "kel e votr e-kip dÃ¶ fut-bol pre-fe-re" },
        { text: "Il faut s'Ã©chauffer avant l'entraÃ®nement.", meaning: "Antrenmandan Ã¶nce Ä±sÄ±nmak gerekir.", pronunciation: "il fo se-ÅŸo-fe a-van lan-tren-man" },
        { text: "Le match s'est terminÃ© par un match nul.", meaning: "MaÃ§ beraberlikle bitti.", pronunciation: "lÃ¶ maÃ§ se ter-mi-ne par un maÃ§ nÃ¼l" },
        { text: "Elle joue au tennis depuis l'Ã¢ge de cinq ans.", meaning: "BeÅŸ yaÅŸÄ±ndan beri tenis oynuyor.", pronunciation: "el ju o te-nis dÃ¶-pÃ¼i laj dÃ¶ sank an" },
        { text: "Le sport est essentiel pour rester en bonne santÃ©.", meaning: "Spor, saÄŸlÄ±klÄ± kalmak iÃ§in gereklidir.", pronunciation: "lÃ¶ spor e e-san-syel pur res-te an bon san-te" },
        { text: "L'arbitre a donnÃ© un carton rouge au joueur.", meaning: "Hakem oyuncuya kÄ±rmÄ±zÄ± kart gÃ¶sterdi (verdi).", pronunciation: "lar-bitr a do-ne un kar-ton ruj o ju-Ã¶r" },
        { text: "Inscrivez-vous Ã  la salle de sport pour garder la forme.", meaning: "Formda kalmak iÃ§in spor salonuna kaydolun.", pronunciation: "ans-kri-ve-vu a la sal dÃ¶ spor pur gar-de la form" },
        { text: "Ils ont perdu la finale de la compÃ©tition.", meaning: "YarÄ±ÅŸmanÄ±n finalini kaybettiler.", pronunciation: "il zon per-dÃ¼ la fi-nal dÃ¶ la kom-pe-ti-syon" },
        { text: "Faire du sport permet de rÃ©duire le stress.", meaning: "Spor yapmak stresi azaltmayÄ± saÄŸlar.", pronunciation: "fer dÃ¼ spor per-me dÃ¶ re-dÃ¼ir lÃ¶ stres" }
    ]
};

const unit373Phrases: FrenchB1UnitPhrases = {
    unitId: 373,
    title: "Seyahat KÃ¼ltÃ¼rÃ¼",
    phrases: [
        { text: "Il est important de respecter les coutumes locales.", meaning: "Yerel geleneklere saygÄ± gÃ¶stermek Ã¶nemlidir.", pronunciation: "il e tan-por-tan dÃ¶ res-pek-te le ku-tÃ¼m lo-kal" },
        { text: "On devrait apprendre quelques mots de la langue.", meaning: "Dilden birkaÃ§ kelime Ã¶ÄŸrenmeliyiz.", pronunciation: "on dÃ¶-vre a-pran-dr kel-ke mo dÃ¶ la lang" },
        { text: "Dans certains pays, enlever ses chaussures est obligatoire.", meaning: "BazÄ± Ã¼lkelerde ayakkabÄ±larÄ± Ã§Ä±karmak zorunludur.", pronunciation: "dan ser-ten pei, an-le-ve se ÅŸo-sÃ¼r e to-bli-ga-tuar" },
        { text: "Le pourboire est dÃ©jÃ  inclus dans l'addition.", meaning: "BahÅŸiÅŸ zaten hesabÄ±n iÃ§inde.", pronunciation: "lÃ¶ pur-buar e de-ja an-klÃ¼ dan la-di-syon" },
        { text: "Je prÃ©fÃ¨re voyager lentement pour mieux comprendre la culture.", meaning: "KÃ¼ltÃ¼rÃ¼ daha iyi anlamak iÃ§in yavaÅŸ gezmeyi tercih ederim.", pronunciation: "jÃ¶ pre-fer vua-ya-je lan-te-man pur myÃ¶ kom-pran-dr la kÃ¼l-tÃ¼r" },
        { text: "Les habitants apprÃ©cient la politesse.", meaning: "Yerel halk nezaketi takdir eder.", pronunciation: "le za-bi-tan a-pre-si la po-li-tes" },
        { text: "Je me renseigne sur les rÃ¨gles du temple.", meaning: "TapÄ±nak kurallarÄ± hakkÄ±nda bilgi alÄ±yorum.", pronunciation: "jÃ¶ mÃ¶ ran-sen-ny sur le regl dÃ¼ tan-pl" },
        { text: "Il vaut mieux Ã©viter les sujets sensibles.", meaning: "Hassas konulardan kaÃ§Ä±nmak daha iyi.", pronunciation: "il vo myÃ¶ e-vi-te le sÃ¼-je san-sibl" },
        { text: "Les gestes ne veulent pas toujours dire la mÃªme chose.", meaning: "Jestler her zaman aynÄ± ÅŸeyi ifade etmez.", pronunciation: "le jest nÃ¶ vÃ¶l pa tu-jur dir la mem ÅŸoz" },
        { text: "Je visite un marchÃ© local pour goÃ»ter des spÃ©cialitÃ©s.", meaning: "Yerel pazarÄ± yÃ¶resel tatlarÄ± denemek iÃ§in geziyorum.", pronunciation: "jÃ¶ vi-zit an mar-ÅŸe lo-kal pur gu-te de spe-si-ya-li-te" },
        { text: "La tenue correcte est recommandÃ©e.", meaning: "Uygun kÄ±yafet Ã¶nerilir.", pronunciation: "la tÃ¶-nÃ¼ ko-rekt e rÃ¶k-ko-man-de" },
        { text: "Je respecte les horaires et les rendez-vous.", meaning: "Saatlere ve randevulara saygÄ± gÃ¶steririm.", pronunciation: "jÃ¶ res-pekt le zo-rer e le ran-de-vu" },
        { text: "Nous avons participÃ© Ã  une fÃªte traditionnelle.", meaning: "Geleneksel bir festivale katÄ±ldÄ±k.", pronunciation: "nu za-von par-ti-si-pe a Ã¼n fet tra-di-syo-nel" },
        { text: "Il est conseillÃ© de rÃ©server Ã  l'avance.", meaning: "Ã–nceden rezervasyon yapmak Ã¶nerilir.", pronunciation: "il e kon-se-ye dÃ¶ re-zer-ve a la-vans" },
        { text: "Je m'adapte facilement aux habitudes du pays.", meaning: "Ãœlkenin alÄ±ÅŸkanlÄ±klarÄ±na kolayca uyum saÄŸlarÄ±m.", pronunciation: "jÃ¶ ma-dapt fa-si-le-man o za-bi-tÃ¼d dÃ¼ pei" }
    ]
};

const unit374Phrases: FrenchB1UnitPhrases = {
    unitId: 374,
    title: "FarklÄ± KÃ¼ltÃ¼rler",
    phrases: [
        { text: "Dans ma culture, la famille est trÃ¨s importante.", meaning: "Benim kÃ¼ltÃ¼rÃ¼mde aile Ã§ok Ã¶nemlidir.", pronunciation: "dan ma kÃ¼l-tÃ¼r, la fa-mi-y e tre tan-por-tant" },
        { text: "Chez eux, on dÃ®ne plus tard le soir.", meaning: "Onlarda akÅŸam yemeÄŸi daha geÃ§ yenir.", pronunciation: "ÅŸe zÃ¶, on din plÃ¼ tar lÃ¶ suar" },
        { text: "Il est poli de dire bonjour en entrant.", meaning: "Ä°Ã§eri girerken merhaba demek nezakettir.", pronunciation: "il e po-li dÃ¶ dir bon-jur an an-tran" },
        { text: "La ponctualitÃ© n'a pas la mÃªme valeur partout.", meaning: "Dakiklik her yerde aynÄ± deÄŸere sahip deÄŸildir.", pronunciation: "la ponk-tÃ¼-a-li-te na pa la mem va-lÃ¶r par-tu" },
        { text: "Il faut Ã©viter les stÃ©rÃ©otypes.", meaning: "KalÄ±p yargÄ±lardan kaÃ§Ä±nmak gerekir.", pronunciation: "il fo e-vi-te le ste-re-o-tip" },
        { text: "Les salutations varient d'un pays Ã  l'autre.", meaning: "SelamlaÅŸmalar Ã¼lkeden Ã¼lkeye deÄŸiÅŸir.", pronunciation: "le sa-lÃ¼-ta-syon va-ryan dÃ¶n pei a lo-tr" },
        { text: "Le contact visuel peut Ãªtre perÃ§u diffÃ©remment.", meaning: "GÃ¶z temasÄ± farklÄ± algÄ±lanabilir.", pronunciation: "lÃ¶ kon-takt vi-zyel pÃ¶ e-tr per-sÃ¼ di-fe-ra-man" },
        { text: "Je respecte les traditions, mÃªme si elles sont diffÃ©rentes.", meaning: "FarklÄ± olsalar bile geleneklere saygÄ± duyarÄ±m.", pronunciation: "jÃ¶ res-pekt le tra-di-syon, mem si el son di-fe-rant" },
        { text: "La cuisine traditionnelle est un bon moyen de dÃ©couvrir une culture.", meaning: "Geleneksel mutfak bir kÃ¼ltÃ¼rÃ¼ keÅŸfetmenin iyi bir yoludur.", pronunciation: "la kÃ¼i-zin tra-di-syo-nel e tÃ¼n bon mua-yan dÃ¶ de-ku-vrir Ã¼n kÃ¼l-tÃ¼r" },
        { text: "Les vÃªtements traditionnels racontent une histoire.", meaning: "Geleneksel kÄ±yafetler bir hikaye anlatÄ±r.", pronunciation: "le vet-mon tra-di-syo-nel ra-kont Ã¼n nis-tuar" },
        { text: "Je compare les modes de vie sans juger.", meaning: "YargÄ±lamadan yaÅŸam tarzlarÄ±nÄ± karÅŸÄ±laÅŸtÄ±rÄ±rÄ±m.", pronunciation: "jÃ¶ kom-par le mod dÃ¶ vi san jÃ¼-je" },
        { text: "Il est important d'avoir l'esprit ouvert.", meaning: "AÃ§Ä±k fikirli olmak Ã¶nemlidir.", pronunciation: "il e tan-por-tan da-vuar les-pri u-ver" },
        { text: "Les croyances ne se discutent pas de la mÃªme faÃ§on partout.", meaning: "Ä°nanÃ§lar her yerde aynÄ± ÅŸekilde tartÄ±ÅŸÄ±lmaz.", pronunciation: "le krua-yans nÃ¶ sÃ¶ dis-kÃ¼t pa dÃ¶ la mem fa-son par-tu" },
        { text: "On peut apprendre beaucoup en voyageant.", meaning: "Seyahat ederek Ã§ok ÅŸey Ã¶ÄŸrenebiliriz.", pronunciation: "on pÃ¶ a-pran-dr bo-ku an vua-ya-jan" },
        { text: "Le respect mutuel facilite la communication.", meaning: "KarÅŸÄ±lÄ±klÄ± saygÄ± iletiÅŸimi kolaylaÅŸtÄ±rÄ±r.", pronunciation: "lÃ¶ res-pekt mÃ¼-tyel fa-si-lit la ko-mÃ¼-ni-ka-syon" }
    ]
};

const unit375Phrases: FrenchB1UnitPhrases = {
    unitId: 375,
    title: "Sanat ve Edebiyat",
    phrases: [
        { text: "Je préfère la littérature classique à la littérature moderne.", meaning: "Klasik edebiyatı modern edebiyata tercih ederim.", pronunciation: "jö pre-fer la li-te-ra-tür kla-sik a la li-te-ra-tür mo-dern" },
        { text: "Cette exposition attire beaucoup de visiteurs.", meaning: "Bu sergi çok ziyaretçi çekiyor.", pronunciation: "set eks-po-zi-syon a-tir bo-ku dö vi-zi-tör" },
        { text: "Le roman raconte une histoire vraie.", meaning: "Roman gerçek bir hikaye anlatıyor.", pronunciation: "lö ro-man ra-kont ün is-tuar vre" },
        { text: "J'aime découvrir de nouveaux auteurs.", meaning: "Yeni yazarlar keşfetmeyi seviyorum.", pronunciation: "jem de-ku-vrir dö nu-vo lo-tör" },
        { text: "Le musée propose une visite guidée.", meaning: "Müze rehberli bir tur sunuyor.", pronunciation: "lö mü-ze pro-poz ün vi-zit gi-de" },
        { text: "Son style d'écriture est très simple.", meaning: "Yazı tarzı çok sade.", pronunciation: "son stil de-kri-tür e tre san-pl" },
        { text: "La critique a salué la mise en scène.", meaning: "Eleştiri sahnelemeyi övdü.", pronunciation: "la kri-tik a sa-lüe la miz an sen" },
        { text: "Je note mes idées dans un carnet.", meaning: "Fikirlerimi bir deftere not ederim.", pronunciation: "jö not me i-de dan zün kar-ne" },
        { text: "Le poète exprime ses émotions.", meaning: "Şair duygularını ifade eder.", pronunciation: "lö po-et eks-prim se ze-mo-syon" },
        { text: "Nous avons assisté à une pièce de théâtre.", meaning: "Bir tiyatro oyununa katıldık.", pronunciation: "nu za-von a-si-ste a ün pyes dö te-atr" },
        { text: "Le personnage principal change à la fin.", meaning: "Baş karakter sonunda değişir.", pronunciation: "lö per-so-naj pran-si-pal şanj a la fen" },
        { text: "Cette peinture est inspirée de la nature.", meaning: "Bu resim doğadan ilham almıştır.", pronunciation: "set pan-tür e an-spi-re dö la na-tür" },
        { text: "La bibliothèque municipale est gratuite.", meaning: "Belediye kütüphanesi ücretsizdir.", pronunciation: "la bi-bli-yo-tek mü-ni-si-pal e gra-tüit" },
        { text: "Le public a applaudi debout.", meaning: "İzleyici ayakta alkışladı.", pronunciation: "lö püb-lik a a-plo-di dö-bu" },
        { text: "Je relis ce livre pour mieux le comprendre.", meaning: "Bu kitabı daha iyi anlamak için tekrar okuyorum.", pronunciation: "jö rö-lis sö livr pur myö lö kon-pran-dr" }
    ]
};

const unit376Phrases: FrenchB1UnitPhrases = {
    unitId: 376,
    title: "Tarihi Olaylar",
    phrases: [
        { text: "En 1789, la Révolution française a commencé.", meaning: "1789'da Fransız Devrimi başladı.", pronunciation: "an mil set san katr-van-nef, la re-vo-lü-syon fran-ses a ko-man-se" },
        { text: "La paix a été signée après la guerre.", meaning: "Savaşın ardından barış imzalandı.", pronunciation: "la pe a e-te si-nye a-pre la ger" },
        { text: "Cette bataille a changé le cours de l'histoire.", meaning: "Bu muharebe tarihin seyrini değiştirdi.", pronunciation: "set ba-tay a şan-je lö kur dölis-tuar" },
        { text: "Au XIXe siècle, la ville s'est développée.", meaning: "19. yüzyılda şehir gelişti.", pronunciation: "o di-znev sie-kl, la vil ses de-vo-lo-pe" },
        { text: "Le traité a mis fin au conflit.", meaning: "Antlaşma çatışmayı sona erdirdi.", pronunciation: "lö tre-te a mi fen o kon-fli" },
        { text: "On commémore cette date chaque année.", meaning: "Bu tarih her yıl anılır.", pronunciation: "on ko-me-mo-re set dat şak a-ne" },
        { text: "Le monument rend hommage aux victimes.", meaning: "Anıt, kurbanları anıyor.", pronunciation: "lö mo-nü-man ran o-maj o vik-tim" },
        { text: "La constitution garantit les droits fondamentaux.", meaning: "Anayasa temel hakları güvence altına alır.", pronunciation: "la kon-sti-tü-syon ga-ran-ti le drua fon-da-mon-to" },
        { text: "Les archives conservent des documents anciens.", meaning: "Arşivler eski belgeleri saklar.", pronunciation: "lez ar-şiv kon-serv de do-ku-man an-syen" },
        { text: "Selon les sources, l'empire était très vaste.", meaning: "Kaynaklara göre imparatorluk çok genişti.", pronunciation: "se-lon le sors, lan-pir e-te tre vast" },
        { text: "La colonisation a marqué l'économie.", meaning: "Sömürgeleştirme ekonomiyi etkiledi.", pronunciation: "la ko-lo-ni-za-syon a mar-ke le-ko-no-mi" },
        { text: "La libération de la ville est un moment important.", meaning: "Şehrin kurtuluşu önemli bir andır.", pronunciation: "la li-be-ra-syon dö la vil e tan mo-man an-por-tan" },
        { text: "Le roi a abdiqué après la révolution.", meaning: "Kral devrimden sonra tahttan çekildi.", pronunciation: "lö rua a ab-di-ke a-pre la re-vo-lü-syon" },
        { text: "Il est important de se souvenir du passé.", meaning: "Geçmişi hatırlamak önemlidir.", pronunciation: "il e tan-por-tan dö su-vnir dü pa-se" },
        { text: "La chronologie aide à comprendre les événements.", meaning: "Kronoloji olayları anlamaya yardım eder.", pronunciation: "la kro-no-lo-ji ed a kon-pran-dr lez e-ve-ne-man" }
    ]
};

const unit377Phrases: FrenchB1UnitPhrases = {
    unitId: 377,
    title: "Ünlü Şahsiyetler",
    phrases: [
        { text: "Il est connu pour ses découvertes.", meaning: "Keşifleriyle tanınır.", pronunciation: "il e ko-nü pur se de-ku-vert" },
        { text: "Sa biographie est très inspirante.", meaning: "Biyografisi çok ilham vericidir.", pronunciation: "sa bi-o-gra-fi e tre an-spi-rant" },
        { text: "Elle a reçu un prix important.", meaning: "Önemli bir ödül aldı.", pronunciation: "el a re-sü an pri an-por-tan" },
        { text: "Son parcours montre beaucoup de courage.", meaning: "Hayat yolu büyük cesaret gösteriyor.", pronunciation: "son par-kur montr bo-ku dö ku-raj" },
        { text: "Il a commencé sa carrière très jeune.", meaning: "Kariyerine çok genç başladı.", pronunciation: "il a ko-man-se sa ka-ri-yer tre jön" },
        { text: "Son œuvre a marqué son époque.", meaning: "Eseri kendi dönemine damga vurdu.", pronunciation: "son löv-r a mar-ke son e-pok" },
        { text: "Il a laissé un héritage culturel.", meaning: "Kültürel bir miras bıraktı.", pronunciation: "il a le-se an e-ri-taj kül-tü-rel" },
        { text: "C'est un modèle pour les jeunes.", meaning: "Gençler için bir rol modeldir.", pronunciation: "se tan mo-del pur le jön" },
        { text: "Son discours a changé les mentalités.", meaning: "Konuşması düşünce yapısını değiştirdi.", pronunciation: "son dis-kur a şan-je le mon-ta-li-te" },
        { text: "L'actrice joue un rôle principal.", meaning: "Aktris başrol oynuyor.", pronunciation: "lak-tris ju an rol pran-si-pal" },
        { text: "Le musicien a composé une nouvelle chanson.", meaning: "Müzisyen yeni bir şarkı besteledi.", pronunciation: "lö mü-zi-syen a kom-po-ze ün nu-vel şan-son" },
        { text: "Le sportif s'entraîne chaque matin.", meaning: "Sporcu her sabah antrenman yapar.", pronunciation: "lö spor-tif san-tren şak ma-tan" },
        { text: "Il soutient une cause humanitaire.", meaning: "İnsani bir davayı destekliyor.", pronunciation: "il su-tyen ün koz yü-ma-ni-ter" },
        { text: "Sa renommée est internationale.", meaning: "Şöhreti uluslararasıdır.", pronunciation: "sa re-no-me e an-ter-na-syo-nal" },
        { text: "Son histoire nous inspire.", meaning: "Hikayesi bize ilham verir.", pronunciation: "son is-tuar nu an-spi-r" }
    ]
};

const unit378Phrases: FrenchB1UnitPhrases = {
    unitId: 378,
    title: "Bilimsel Keşifler",
    phrases: [
        { text: "L'expérience a donné des résultats positifs.", meaning: "Deney olumlu sonuçlar verdi.", pronunciation: "lek-spe-ryans a do-ne de re-zül-ta po-zi-tif" },
        { text: "La méthode scientifique est rigoureuse.", meaning: "Bilimsel yöntem titizdir.", pronunciation: "la me-tod si-yan-ti-fik e ri-gu-röz" },
        { text: "Les chercheurs travaillent jour et nuit.", meaning: "Araştırmacılar gece gündüz çalışıyor.", pronunciation: "le şer-şör tra-vay jör e nui" },
        { text: "Cette découverte a révolutionné la médecine.", meaning: "Bu keşif tıbbı devrimleştirdi.", pronunciation: "set de-ku-vert a re-vo-lü-syo-ne la me-di-sin" },
        { text: "L'hypothèse doit être prouvée.", meaning: "Hipotez kanıtlanmalıdır.", pronunciation: "li-po-tez doa et-r pru-ve" },
        { text: "Le laboratoire est bien équipé.", meaning: "Laboratuvar iyi donanımlıdır.", pronunciation: "lö la-bo-ra-tuar e byan e-ki-pe" },
        { text: "Les observations sont précises.", meaning: "Gözlemler kesindir.", pronunciation: "lez ob-ser-va-syon son pre-siz" },
        { text: "Ils ont publié leurs recherches.", meaning: "Araştırmalarını yayımladılar.", pronunciation: "il zon pü-bli-ye lör re-şerş" },
        { text: "Le vaccin protège contre la maladie.", meaning: "Aşı hastalığa karşı korur.", pronunciation: "lö vak-san pro-tej kon-tr la ma-la-di" },
        { text: "Cette innovation améliore la vie quotidienne.", meaning: "Bu yenilik günlük hayatı iyileştirir.", pronunciation: "set i-no-va-syon a-me-lyor la vi ko-ti-dyen" },
        { text: "Le télescope observe les étoiles.", meaning: "Teleskop yıldızları gözlemler.", pronunciation: "lö te-les-kop ob-serv le ze-tual" },
        { text: "Le microscope révèle des détails invisibles.", meaning: "Mikroskop görünmez ayrıntıları gösterir.", pronunciation: "lö mik-ro-skop re-vel de de-tay in-vi-zibl" },
        { text: "La preuve est essentielle pour convaincre.", meaning: "İkna etmek için kanıt şarttır.", pronunciation: "la pröv e e-san-syel pur kon-van-kr" },
        { text: "Le progrès scientifique est rapide.", meaning: "Bilimsel ilerleme hızlıdır.", pronunciation: "lö pro-gre si-yan-ti-fik e ra-pid" },
        { text: "Ils testent une nouvelle formule.", meaning: "Yeni bir formül test ediyorlar.", pronunciation: "il test ün nu-vel for-mül" }
    ]
};

const unit379Phrases: FrenchB1UnitPhrases = {
    unitId: 379,
    title: "Uzay Araştırmaları",
    phrases: [
        { text: "La fusée a décollé avec succès.", meaning: "Roket başarıyla kalkış yaptı.", pronunciation: "la fü-ze a de-ko-le a-vek suk-se" },
        { text: "La mission spatiale durera six mois.", meaning: "Uzay görevi altı ay sürecek.", pronunciation: "la mi-syon spa-syal dü-ra si mua" },
        { text: "Les astronautes vivent en apesanteur.", meaning: "Astronotlar ağırlıksızlıkta yaşar.", pronunciation: "lez as-tro-not viv an a-pe-zan-tör" },
        { text: "Le télescope observe des galaxies lointaines.", meaning: "Teleskop uzak galaksileri gözlemler.", pronunciation: "lö te-les-kop ob-serv de ga-lak-si luan-ten" },
        { text: "La station spatiale tourne autour de la Terre.", meaning: "Uzay istasyonu Dünya'nın etrafında döner.", pronunciation: "la sta-syon spa-syal turn o-tur dö la ter" },
        { text: "On a découvert une nouvelle planète.", meaning: "Yeni bir gezegen keşfedildi.", pronunciation: "on a de-ku-ver ün nu-vel pla-net" },
        { text: "La gravité est plus faible sur la Lune.", meaning: "Yerçekimi Ay'da daha zayıftır.", pronunciation: "la gra-vi-te e plü febl sür la lün" },
        { text: "L'atmosphère protège notre planète.", meaning: "Atmosfer gezegenimizi korur.", pronunciation: "lat-mos-fer pro-tej notr pla-net" },
        { text: "Le lancement a été reporté à cause du vent.", meaning: "Fırlatma rüzgar nedeniyle ertelendi.", pronunciation: "lö lan-se-man a e-te re-por-te a koz dü van" },
        { text: "L'équipage est prêt pour le décollage.", meaning: "Mürettebat kalkış için hazır.", pronunciation: "le-ki-paj e pre pur lö de-ko-laj" },
        { text: "L'atterrissage s'est bien passé.", meaning: "İniş iyi geçti.", pronunciation: "la-ter-ri-saj ses byan pa-se" },
        { text: "L'astronomie aide à comprendre l'univers.", meaning: "Astronomi evreni anlamaya yardımcı olur.", pronunciation: "las-tro-no-mi ed a kon-pran-dr lü-ni-ver" },
        { text: "Ils mesurent la distance entre les étoiles.", meaning: "Yıldızlar arasındaki mesafeyi ölçüyorlar.", pronunciation: "il me-zyur la dis-tans an-tre le ze-tual" },
        { text: "La constellation d'Orion est facile à reconnaître.", meaning: "Orion takımyıldızını tanımak kolaydır.", pronunciation: "la kon-ste-la-syon do-ryon e fa-sil a re-ko-netr" },
        { text: "Explorer Mars est un objectif important.", meaning: "Mars'ı keşfetmek önemli bir hedeftir.", pronunciation: "eks-plo-re mars e tan obj-ektif an-por-tan" }
    ]
};

const unit380Phrases: FrenchB1UnitPhrases = {
    unitId: 380,
    title: "Moda Trendleri",
    phrases: [
        { text: "Cette saison, les couleurs vives sont à la mode.", meaning: "Bu sezon canlı renkler moda.", pronunciation: "set se-zon, le ku-lör viv son a la mod" },
        { text: "Le défilé présente la nouvelle collection.", meaning: "Defile yeni koleksiyonu sunuyor.", pronunciation: "lö de-fi-le pre-zant la nu-vel ko-lek-syon" },
        { text: "Je préfère un style simple et élégant.", meaning: "Sade ve şık bir tarzı tercih ederim.", pronunciation: "jö pre-fer an stil san-pl e e-le-gan" },
        { text: "Cette robe me va très bien.", meaning: "Bu elbise bana çok yakışıyor.", pronunciation: "set rob mö va tre byan" },
        { text: "Tu peux essayer cette veste en cabine.", meaning: "Bu ceketi kabinde deneyebilirsin.", pronunciation: "tü pö e-se-ye set vest an ka-bin" },
        { text: "Les accessoires complètent la tenue.", meaning: "Aksesuarlar kıyafeti tamamlar.", pronunciation: "lez ak-se-suar kom-plet la tönü" },
        { text: "Le motif à fleurs est tendance.", meaning: "Çiçekli desen trenddir.", pronunciation: "lö mo-tif a flör e ton-dans" },
        { text: "Les soldes commencent demain.", meaning: "İndirimler yarın başlıyor.", pronunciation: "le sold ko-mans dö-men" },
        { text: "Il y a une réduction de 30%.", meaning: "%30 indirim var.", pronunciation: "il ya ün re-dük-syon dö tran-sant" },
        { text: "La boutique ouvre à dix heures.", meaning: "Butik on'da açılır.", pronunciation: "la bu-tik uv-r a dis ör" },
        { text: "La vitrine attire beaucoup de clients.", meaning: "Vitrin birçok müşteri çeker.", pronunciation: "la vi-trin a-trir bo-ku dö kli-yan" },
        { text: "Il faut assortir les couleurs.", meaning: "Renkleri uyumlu yapmak gerekir.", pronunciation: "il fo a-sor-tir le ku-lör" },
        { text: "Je porte souvent des vêtements en coton.", meaning: "Sıklıkla pamuklu kıyafetler giyerim.", pronunciation: "jö por-te su-van de ve-te-mon an ko-ton" },
        { text: "Cette tenue est parfaite pour la soirée.", meaning: "Bu kombin akşam için mükemmel.", pronunciation: "set tönü e per-fet pur la sua-re" },
        { text: "Le créateur s'inspire de la nature.", meaning: "Tasarımcı doğadan ilham alıyor.", pronunciation: "lö kre-a-tör san-spi-r dö la na-tür" }
    ]
};

const unit381Phrases: FrenchB1UnitPhrases = {
    unitId: 381,
    title: "Tüketim Alışkanlıkları",
    phrases: [
        { text: "Je compare les prix avant d'acheter.", meaning: "Satın almadan önce fiyatları karşılaştırırım.", pronunciation: "jö kom-par le pri a-van da-şe-te" },
        { text: "L'achat en ligne est très pratique.", meaning: "Online satın alma çok pratiktir.", pronunciation: "la-şa an liny e tre pra-tik" },
        { text: "Il faut respecter son budget.", meaning: "Bütçeye uymak gerekir.", pronunciation: "il fo res-pek-te son büj-e" },
        { text: "La livraison est gratuite à partir de 50 euros.", meaning: "50 eurodan itibaren teslimat ücretsizdir.", pronunciation: "la li-vre-zon e gra-tü-it a par-tir dö san-kant ö-ro" },
        { text: "Je paie par carte bancaire.", meaning: "Banka kartıyla ödüyorum.", pronunciation: "jö pe par kart ban-ker" },
        { text: "Je préfère payer en espèces.", meaning: "Nakit ödemeyi tercih ederim.", pronunciation: "jö pre-fer pe-ye an es-pes" },
        { text: "Les promotions attirent les clients.", meaning: "Kampanyalar müşterileri çeker.", pronunciation: "le pro-mo-syon a-trir le kli-yan" },
        { text: "Le reçu est nécessaire pour un retour.", meaning: "İade için fiş gereklidir.", pronunciation: "lö rö-sü e ne-se-ser pur an re-tur" },
        { text: "La qualité est plus importante que le prix.", meaning: "Kalite fiyattan daha önemlidir.", pronunciation: "la ka-li-te e plü an-por-tant kö lö pri" },
        { text: "J'essaie d'économiser chaque mois.", meaning: "Her ay tasarruf etmeye çalışıyorum.", pronunciation: "je-se de-ko-no-mi-ze şak mua" },
        { text: "Le panier est déjà plein.", meaning: "Sepet zaten dolu.", pronunciation: "lö pa-nye e de-ja plen" },
        { text: "Il y a beaucoup de choix au supermarché.", meaning: "Süpermarkette birçok seçenek var.", pronunciation: "il ya bo-ku dö şua o sü-per-mar-şe" },
        { text: "Le service client est disponible.", meaning: "Müşteri hizmetleri mevcut.", pronunciation: "lö ser-vis kli-yan e dis-po-ni-bl" },
        { text: "Je demande une réduction.", meaning: "İndirim istiyorum.", pronunciation: "jö dö-man ü-n re-dük-syon" },
        { text: "Le gaspillage alimentaire doit être réduit.", meaning: "Gıda israfı azaltılmalıdır.", pronunciation: "lö gas-pi-yaj a-li-man-ter doa et-r re-dü-it" }
    ]
};

const unit382Phrases: FrenchB1UnitPhrases = {
    unitId: 382,
    title: "Reklamcılık",
    phrases: [
        { text: "Cette publicité est très efficace.", meaning: "Bu reklam çok etkilidir.", pronunciation: "set pü-bli-si-te e tre ef-fi-kas" },
        { text: "Le slogan est facile à retenir.", meaning: "Slogan akılda kalıcıdır.", pronunciation: "lö slo-gan e fa-sil a re-tö-nir" },
        { text: "La campagne cible les jeunes adultes.", meaning: "Kampanya genç yetişkinleri hedefliyor.", pronunciation: "la kam-pan sibl le jön o-dült" },
        { text: "Le spot passe à la télévision le soir.", meaning: "Reklam filmi akşam televizyonda yayınlanır.", pronunciation: "lö spot pas a la te-le-vi-zyon lö suar" },
        { text: "La marque veut améliorer son image.", meaning: "Marka imajını geliştirmek istiyor.", pronunciation: "la mark vö a-me-lyo-re son i-maj" },
        { text: "Les réseaux sociaux sont essentiels pour le marketing.", meaning: "Sosyal medya pazarlama için önemlidir.", pronunciation: "le re-zo so-syo son e-san-syel pur lö mar-ke-ting" },
        { text: "L'offre est valable jusqu'à dimanche.", meaning: "Teklif pazar gününe kadar geçerlidir.", pronunciation: "lof-r e va-la-bl jü-ska di-manş" },
        { text: "La publicité en ligne touche un large public.", meaning: "Online reklam geniş bir kitleye ulaşır.", pronunciation: "la pü-bli-si-te an liny tuş an larj pü-blik" },
        { text: "Le budget publicitaire est limité cette année.", meaning: "Bu yıl reklam bütçesi sınırlı.", pronunciation: "lö büj-e pü-bli-si-ter e li-mi-te set a-ne" },
        { text: "La concurrence est forte sur ce marché.", meaning: "Bu pazarda rekabet güçlü.", pronunciation: "la kon-kü-rans e for sür sö mar-şe" },
        { text: "Le logo doit être simple et reconnaissable.", meaning: "Logo basit ve tanınabilir olmalı.", pronunciation: "lö lo-go doa et-r san-pl e re-ko-ne-sabl" },
        { text: "La promotion attire beaucoup de clients.", meaning: "Kampanya birçok müşteri çeker.", pronunciation: "la pro-mo-syon a-trir bo-ku dö kli-yan" },
        { text: "Le prospectus présente les nouveautés.", meaning: "Broşür yenilikleri sunar.", pronunciation: "lö pros-pek-tüs pre-zant le nu-vo-te" },
        { text: "Le lancement du produit est prévu demain.", meaning: "Ürün lansmanı yarın planlandı.", pronunciation: "lö lan-se-man dü pro-düi e pre-vü dö-men" },
        { text: "La publicité mensongère est interdite.", meaning: "Aldatıcı reklam yasaktır.", pronunciation: "la pü-bli-si-te mon-son-jer e an-ter-di" }
    ]
};

const unit383Phrases: FrenchB1UnitPhrases = {
    unitId: 383,
    title: "Haber Medyası",
    phrases: [
        { text: "Je lis les nouvelles tous les jours.", meaning: "Her gün haberleri okurum.", pronunciation: "jö li le nu-vel tu le jur" },
        { text: "Cette nouvelle est confirmée par la source.", meaning: "Bu haber kaynak tarafından doğrulandı.", pronunciation: "set nu-vel e kon-fir-me par la surs" },
        { text: "Le journaliste vérifie les faits.", meaning: "Gazeteci gerçekleri doğrular.", pronunciation: "lö jur-na-list ve-ri-fi le fe" },
        { text: "L'article a été publié ce matin.", meaning: "Makale bu sabah yayımlandı.", pronunciation: "lar-ti-kl a e-te pü-bli-ye sö ma-tan" },
        { text: "Le titre est trop sensationnel.", meaning: "Başlık çok sansasyonel.", pronunciation: "lö titr e tro san-sa-syo-nel" },
        { text: "Nous suivons le direct à la télévision.", meaning: "Televizyonda canlı yayını takip ediyoruz.", pronunciation: "nu süi-von lö di-rekt a la te-le-vi-zyon" },
        { text: "La conférence de presse commence à dix heures.", meaning: "Basın toplantısı saat 10'da başlıyor.", pronunciation: "la kon-fe-rans dö pres ko-mans a dis ör" },
        { text: "La chaîne change sa programmation.", meaning: "Kanal yayın akışını değiştiriyor.", pronunciation: "la şen şanj sa pro-gra-ma-syon" },
        { text: "L'interview est en direct.", meaning: "Röportaj canlı.", pronunciation: "lan-ter-vyü e an di-rekt" },
        { text: "La rumeur n'est pas confirmée.", meaning: "Söylenti doğrulanmadı.", pronunciation: "la rü-mör ne pa kon-fir-me" },
        { text: "Le débat est animé mais respectueux.", meaning: "Tartışma hararetli ama saygılı.", pronunciation: "lö de-ba e a-ni-me me re-spek-tü-ö" },
        { text: "Les médias parlent de ce sujet.", meaning: "Medyalar bu konudan bahsediyor.", pronunciation: "le me-dya parl dö sö sü-je" },
        { text: "La presse locale publie un dossier spécial.", meaning: "Yerel basın özel bir dosya yayımlıyor.", pronunciation: "la pres lo-kal pü-bli ün do-sye spe-syal" },
        { text: "Les réseaux sociaux relaient l'information.", meaning: "Sosyal medya bilgiyi yayıyor.", pronunciation: "le re-zo so-syo rö-le lan-for-ma-syon" },
        { text: "J'ai un abonnement au journal en ligne.", meaning: "Online gazeteye aboneliğim var.", pronunciation: "je ün a-bo-nö-man o jur-nal an liny" }
    ]
};

const unit384Phrases: FrenchB1UnitPhrases = {
    unitId: 384,
    title: "Politik Sistemler",
    phrases: [
        { text: "Le gouvernement annonce une réforme.", meaning: "Hükümet bir reform duyuruyor.", pronunciation: "lö gu-ver-nö-man a-nons ün re-form" },
        { text: "Les élections auront lieu dimanche.", meaning: "Seçimler pazar günü yapılacak.", pronunciation: "lez e-lek-syon o-ron ly di-manş" },
        { text: "Les citoyens vont voter demain.", meaning: "Vatandaşlar yarın oy kullanacak.", pronunciation: "le si-to-yen von vo-te dö-men" },
        { text: "La constitution protège les droits.", meaning: "Anayasa hakları korur.", pronunciation: "la kon-sti-tü-syon pro-tej le drua" },
        { text: "Le parlement débat d'un projet de loi.", meaning: "Parlamento bir yasa tasarısını tartışıyor.", pronunciation: "lö par-la-man de-ba dün pro-je dö loa" },
        { text: "L'opposition critique la décision.", meaning: "Muhalefet kararı eleştiriyor.", pronunciation: "lo-po-zi-syon kri-tik la de-si-zyon" },
        { text: "La majorité soutient le président.", meaning: "Çoğunluk başkanı destekliyor.", pronunciation: "la ma-jo-ri-te su-tyen lö pre-zi-dan" },
        { text: "Le ministre présente le budget.", meaning: "Bakan bütçeyi sunuyor.", pronunciation: "lö mi-nistr pre-zant lö bü-jé" },
        { text: "Une coalition s'est formée après les élections.", meaning: "Seçimlerden sonra bir koalisyon oluştu.", pronunciation: "ün ko-a-li-syon se for-me a-pre lez e-lek-syon" },
        { text: "Le référendum est organisé pour cette loi.", meaning: "Bu yasa için referandum düzenleniyor.", pronunciation: "lö re-fe-ran-dom e zor-ga-ni-ze pur set loa" },
        { text: "La campagne électorale commence aujourd'hui.", meaning: "Seçim kampanyası bugün başlıyor.", pronunciation: "la kam-pan-y e-lek-to-ral ko-mans o-jur-dü-i" },
        { text: "La démocratie repose sur le vote.", meaning: "Demokrasi oya dayanır.", pronunciation: "la de-mo-kra-si rö-poz sür lö vot" },
        { text: "La justice doit être indépendante.", meaning: "Adalet bağımsız olmalı.", pronunciation: "la jüs-tis doa et-r an-de-pan-dant" },
        { text: "La liberté d'expression est essentielle.", meaning: "İfade özgürlüğü çok önemlidir.", pronunciation: "la li-ber-te dek-spre-syon e e-san-syel" },
        { text: "Les médias suivent la situation politique.", meaning: "Medya siyasi durumu takip ediyor.", pronunciation: "le me-dya süi-v la si-tü-a-syon po-li-tik" }
    ]
};

const unit385Phrases: FrenchB1UnitPhrases = {
    unitId: 385,
    title: "Hukuk ve Adalet (Droit et Justice)",
    phrases: [
        { text: "Vous avez le droit de garder le silence.", meaning: "Sessiz kalma hakkınız var.", pronunciation: "vu za-ve lö drua dö gar-de lö si-lans" },
        { text: "Je suis innocent de ces accusations.", meaning: "Ben bu suçlamalardan masumum.", pronunciation: "jö süi zi-no-san dö sez a-kü-za-syon" },
        { text: "Le procès commencera la semaine prochaine.", meaning: "Dava önümüzdeki hafta başlayacak.", pronunciation: "lö pro-se ko-man-sra la sö-men pro-şen" },
        { text: "Il a engagé un avocat pour sa défense.", meaning: "Savunması için bir avukat tuttu.", pronunciation: "il a an-ga-je un a-vo-ka pur sa de-fans" },
        { text: "La police a trouvé de nouvelles preuves.", meaning: "Polis yeni deliller buldu.", pronunciation: "la po-lis a tru-ve dö nu-vel pröv" },
        { text: "Le juge a rendu un verdict de culpabilité.", meaning: "Hakim suçluluk kararı verdi.", pronunciation: "lö jüj a ran-dü un ver-dikt dö kül-pa-bi-li-te" },
        { text: "Elle témoignera au tribunal demain.", meaning: "Yarın mahkemede tanıklık yapacak.", pronunciation: "el te-mua-nyöra o tri-bü-nal dö-men" },
        { text: "Justice doit être rendue à la victime.", meaning: "Mağdur için adalet yerini bulmalıdır.", pronunciation: "jüs-tis dua te-tr ran-dü a la vik-tim" },
        { text: "Le voleur a été condamné à payer une amende.", meaning: "Hırsız para cezası ödemeye mahkum edildi.", pronunciation: "lö vo-lör a e-te kon-da-ne a pe-ye ün a-mand" },
        { text: "L'accusé a été finalement acquitté.", meaning: "Sanık sonunda beraat etti.", pronunciation: "la-kü-ze a e-te fi-nal-man a-ki-te" },
        { text: "Nul n'est censé ignorer la loi.", meaning: "Kimse yasayı bilmemezlikten gelemez.", pronunciation: "nül ne san-se in-yo-re la lua" },
        { text: "Ils demandent le respect des droits de l'homme.", meaning: "İnsan haklarına saygı talep ediyorlar.", pronunciation: "il dö-mand lö res-pekt de drua dö lom" },
        { text: "Le suspect a été arrêté hier soir.", meaning: "Şüpheli dün akşam tutuklandı.", pronunciation: "lö süs-pe a e-te a-re-te yer suar" },
        { text: "Tout le monde a droit à un procès équitable.", meaning: "Herkesin adil bir yargılanma hakkı vardır.", pronunciation: "tu lö mond a drua a un pro-se e-ki-tabl" },
        { text: "Le système judiciaire est complexe.", meaning: "Yargı sistemi karmaşıktır.", pronunciation: "lö sis-tem jü-di-syer e kom-pleks" }
    ]
};

const unit386Phrases: FrenchB1UnitPhrases = {
    unitId: 386,
    title: "İnsan Hakları",
    phrases: [
        { text: "J'ai le droit de donner mon opinion.", meaning: "Fikrimi söyleme hakkım var.", pronunciation: "je lö dro-a dö do-ne mon o-pin-yon" },
        { text: "C'est complètement injuste !", meaning: "Bu tamamen haksızlık!", pronunciation: "se kom-plet-man en-jüst" },
        { text: "Tous les êtres humains naissent libres et égaux.", meaning: "Bütün insanlar özgür ve eşit doğarlar.", pronunciation: "tu le zetr ü-men nes libr e e-go" },
        { text: "Il faut défendre les minorités.", meaning: "Azınlıkları savunmak gerekir.", pronunciation: "il fo de-fandr le mi-no-ri-te" },
        { text: "La liberté d'expression est menacée.", meaning: "İfade özgürlüğü tehdit altında.", pronunciation: "la li-ber-te dek-spres-yon e mö-na-se" },
        { text: "Nous devons lutter contre le racisme.", meaning: "Irkçılığa karşı mücadele etmeliyiz.", pronunciation: "nu dö-von lü-te kontr lö ra-sizm" },
        { text: "C'est une violation des droits de l'homme.", meaning: "Bu bir insan hakları ihlalidir.", pronunciation: "se tün vi-o-la-syon de dro-a dö lom" },
        { text: "Chaque citoyen a des droits et des devoirs.", meaning: "Her vatandaşın hakları ve görevleri vardır.", pronunciation: "şak si-twa-yen a de dro-a e de dö-vuar" },
        { text: "La manifestation était pacifique.", meaning: "Gösteri barışçıldı.", pronunciation: "la ma-ni-fes-tas-yon e-te pa-si-fik" },
        { text: "Ils ont signé une pétition pour l'égalité.", meaning: "Eşitlik için bir dilekçe imzaladılar.", pronunciation: "il zon si-nye ün pe-ti-syon pur le-ga-li-te" }
    ]
};

const unit387Phrases: FrenchB1UnitPhrases = {
    unitId: 387,
    title: "Gönüllülük",
    phrases: [
        { text: "Je voudrais être bénévole.", meaning: "Gönüllü olmak isterdim.", pronunciation: "jö vud-re etr be-ne-vol" },
        { text: "Comment puis-je aider l'association ?", meaning: "Derneğe nasıl yardımcı olabilirim?", pronunciation: "ko-man püi-jö e-de la-so-sya-syon" },
        { text: "Nous collectons des vêtements pour l'hiver.", meaning: "Kış için kıyafet topluyoruz.", pronunciation: "nu ko-lek-ton de vet-man pur li-ver" },
        { text: "Merci pour votre générosité.", meaning: "Cömertliğiniz için teşekkürler.", pronunciation: "mer-si pur votr je-ne-ro-zi-te" },
        { text: "Le travail d'équipe est essentiel.", meaning: "Ekip çalışması esastır.", pronunciation: "lö tra-vay de-kip e te-san-syel" },
        { text: "Chacun peut faire la différence.", meaning: "Herkes fark yaratabilir.", pronunciation: "şa-kön pöy fer la di-fe-rans" },
        { text: "Je consacre mon temps libre aux autres.", meaning: "Boş zamanımı başkalarına adıyorum.", pronunciation: "jö kon-sakr mon tan libr o zotr" },
        { text: "L'association cherche de nouveaux membres.", meaning: "Dernek yeni üyeler arıyor.", pronunciation: "la-so-sya-syon şerş dö nu-vo mambr" },
        { text: "N'hésitez pas à faire un don.", meaning: "Bağış yapmaktan çekinmeyin.", pronunciation: "ne-zi-te pa a fer un don" },
        { text: "La solidarité nous rend plus forts.", meaning: "Dayanışma bizi daha güçlü kılar.", pronunciation: "la so-li-da-ri-te nu ran plü for" }
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
        367: unit367Phrases,
        368: unit368Phrases,
        369: unit369Phrases,
        370: unit370Phrases,
        371: unit371Phrases,
        372: unit372Phrases,
        373: unit373Phrases,
        374: unit374Phrases,
        375: unit375Phrases,
        376: unit376Phrases,
        377: unit377Phrases,
        378: unit378Phrases,
        379: unit379Phrases,
        380: unit380Phrases,
        381: unit381Phrases,
        382: unit382Phrases,
        383: unit383Phrases,
        384: unit384Phrases,
        385: unit385Phrases,
        386: unit386Phrases,
        387: unit387Phrases
    };
    return idMapping[unitId]?.phrases || unit361Phrases.phrases;
}

