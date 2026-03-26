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
        { text: "Votre entreprise est leader sur le marché.", meaning: "Åirketiniz pazarda lider.", pronunciation: "votr an-trö-priz e li-dör sür lö mar-şe" },
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
        { text: "La Joconde est un véritable chef-d'Å“uvre.", meaning: "Mona Lisa gerçek bir başyapıttır.", pronunciation: "la jo-kond e tun ve-ri-tabl şef-dövr" },
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

const unit368Phrases: FrenchB1UnitPhrases = {
    unitId: 368,
    title: "Sağlık ve Zindelik (Santé et Bien-être)",
    phrases: [
        { text: "Je ne me sens pas très bien aujourd'hui.", meaning: "Bugün kendimi pek iyi hissetmiyorum.", pronunciation: "jö nö mö san pa tre byan o-jur-dü-i" },
        { text: "Avez-vous pris vos médicaments ce matin ?", meaning: "Bu sabah ilaçlarınızı aldınız mı?", pronunciation: "a-ve vu pri vo me-di-ka-man sö ma-tan" },
        { text: "Il vaut mieux consulter un médecin rapidement.", meaning: "Hemen bir doktora danışmak en iyisidir.", pronunciation: "il vo myö kon-sül-te un med-san ra-pid-man" },
        { text: "J'ai mal à la tête et je tousse beaucoup.", meaning: "Başım ağrıyor ve çok öksürüyorum.", pronunciation: "je mal a la tet e jö tus bo-ku" },
        { text: "Le sport est excellent pour la santé physique et mentale.", meaning: "Spor, fiziksel ve zihinsel sağlık için mükemmeldir.", pronunciation: "lö spor e-tek-se-lan pur la san-te fi-zik e man-tal" },
        { text: "Pensez à boire beaucoup d'eau pendant la journée.", meaning: "Gün boyunca bol su içmeyi unutmayın.", pronunciation: "pan-se a buar bo-ku do pan-dan la jur-ne" },
        { text: "Je voudrais prendre rendez-vous avec le docteur, s'il vous plaît.", meaning: "Doktorla randevu almak istiyorum, lütfen.", pronunciation: "jö vu-dre prandr ran-de-vu a-vek lö dok-tör, sil vu ple" },
        { text: "Combien de temps faut-il pour guérir de cette maladie ?", meaning: "Bu hastalıktan iyileşmek ne kadar sürer?", pronunciation: "kon-byan dö tan fo-til pur ge-rir dö set ma-la-di" },
        { text: "Vous devez vous reposer et rester au chaud.", meaning: "Dinlenmeli ve sıcak kalmalısınız.", pronunciation: "vu dö-ve vu rö-po-ze e res-te o şo" },
        { text: "Manger plus de légumes fait partie d'un régime sain.", meaning: "Daha fazla sebze yemek sağlıklı bir diyetin parçasıdır.", pronunciation: "man-je plü dö le-güm fe par-ti dun re-jim san" }
    ]
};

const unit369Phrases: FrenchB1UnitPhrases = {
    unitId: 369,
    title: "Eğitim ve Öğrenim (Ã‰ducation et Apprentissage)",
    phrases: [
        { text: "Les étudiants doivent préparer leurs examens finaux.", meaning: "Öğrenciler final sınavlarına hazırlanmalıdır.", pronunciation: "lez e-tü-dyan duav pre-pa-re lörz eg-za-man fi-no" },
        { text: "Elle a obtenu son diplôme avec mention.", meaning: "Diplomasını dereceyle aldı.", pronunciation: "el a ob-tö-nü son di-plom a-vek man-syon" },
        { text: "Le professeur de mathématiques est très strict cette année.", meaning: "Matematik öğretmeni bu yıl çok katı.", pronunciation: "lö pro-fe-sör dö ma-te-ma-tik e tre strikt set a-ne" },
        { text: "Combien de cours avez-vous aujourd'hui ?", meaning: "Bugün kaç dersiniz var?", pronunciation: "kon-byan dö kur a-ve vu o-jur-dü-i" },
        { text: "J'espère réussir cet examen car j'ai beaucoup étudié.", meaning: "Çok çalıştığım için bu sınavı geçmeyi umuyorum.", pronunciation: "jes-per re-ü-sir set eg-za-man kar je bo-ku e-tü-dye" },
        { text: "Il est important d'écouter attentivement pendant la leçon.", meaning: "Ders sırasında dikkatle dinlemek önemlidir.", pronunciation: "il e-tan-por-tan de-ku-te a-tan-tiv-man pan-dan la lö-son" },
        { text: "La rentrée scolaire est toujours un moment stressant.", meaning: "Okulların açılması her zaman stresli bir andır.", pronunciation: "la ran-tre sko-ler e tu-jur un mo-man stres-san" },
        { text: "N'oublie pas de faire tes devoirs avant de sortir.", meaning: "Çıkmadan önce ödevlerini yapmayı unutma.", pronunciation: "nub-li pa dö fer te dö-vuar a-van dö sor-tir" },
        { text: "Elle veut obtenir une bourse pour aller à l'université.", meaning: "Üniversiteye gitmek için burs almak istiyor.", pronunciation: "el vö ob-tö-nir ün burs pur a-le a lü-ni-ver-si-te" },
        { text: "L'éducation est essentielle pour l'avenir des jeunes.", meaning: "Eğitim, gençlerin geleceği için esastır.", pronunciation: "le-dü-ka-syon e-te-san-syel pur lav-nir de jön" }
    ]
};

const unit370Phrases: FrenchB1UnitPhrases = {
    unitId: 370,
    title: "Doğa ve Çevre (Nature et Environnement)",
    phrases: [
        { text: "Le changement climatique est un problème mondial.", meaning: "İklim değişikliği küresel bir sorundur.", pronunciation: "lö şanj-man kli-ma-tik e-tun prob-lem mon-dyal" },
        { text: "Nous devons réduire notre consommation de plastique.", meaning: "Plastik tüketimimizi azaltmalıyız.", pronunciation: "nu dö-von re-düir notr kon-so-ma-syon dö plas-tik" },
        { text: "Il est important de recycler le papier et le verre.", meaning: "Kağıdı ve camı geri dönüştürmek önemlidir.", pronunciation: "il e-tan-por-tan dö rö-si-kle lö pa-pye e lö ver" },
        { text: "Ne jetez pas vos déchets dans la nature.", meaning: "Çöplerinizi doğaya atmayın.", pronunciation: "nö jö-te pa vo de-şe dan la na-tür" },
        { text: "Les énergies renouvelables protègent notre planète.", meaning: "Yenilenebilir enerjiler gezegenimizi korur.", pronunciation: "lez e-ner-ji rö-nuv-labl pro-tej notr pla-net" },
        { text: "La pollution des océans menace les animaux marins.", meaning: "Okyanus kirliliği deniz hayvanlarını tehdit ediyor.", pronunciation: "la po-lü-syon dez o-se-an mö-nas lez a-ni-mo ma-ran" },
        { text: "Prenez les transports en commun pour réduire la pollution de l'air.", meaning: "Hava kirliliğini azaltmak için toplu taşımayı kullanın.", pronunciation: "prö-ne le trans-por an ko-mun pur re-düir la po-lü-syon dö ler" },
        { text: "L'eau potable devient une ressource rare.", meaning: "İçme suyu nadir bir kaynak haline geliyor.", pronunciation: "lo po-tabl dö-vyan ün rö-surs rar" },
        { text: "Chacun peut faire un geste pour l'environnement.", meaning: "Herkes çevre için ufak bir adım atabilir.", pronunciation: "şa-kun pö fer un jest pur lan-vi-ron-man" },
        { text: "La disparition des forêts est une véritable tragédie.", meaning: "Ormanların yok olması gerçek bir trajedidir.", pronunciation: "la dis-pa-ri-syon de fo-re e-tün ve-ri-tabl tra-je-di" }
    ]
};

const unit371Phrases: FrenchB1UnitPhrases = {
    unitId: 371,
    title: "Åehir ve Toplu Taşıma (La Ville et Les Transports)",
    phrases: [
        { text: "Pardon, pour aller à la gare s'il vous plaît ?", meaning: "Afedersiniz, istasyona nasıl gidebilirim lütfen?", pronunciation: "par-don, pur a-le a la gar sil vu ple" },
        { text: "Le métro est plus rapide que le bus en ville.", meaning: "Metro, şehirde otobüsten daha hızlıdır.", pronunciation: "lö me-tro e plü ra-pid kö lö büs an vil" },
        { text: "Il faut descendre à la prochaine station.", meaning: "Sonraki istasyonda/durakta inmek gerekiyor.", pronunciation: "il fo de-sandr a la pro-şen sta-syon" },
        { text: "Ã‰vitez le centre-ville à cause des embouteillages.", meaning: "Trafik sıkışıklığı nedeniyle şehir merkezinden kaçının.", pronunciation: "e-vi-te lö santr-vil a koz dez an-bu-tey-yaj" },
        { text: "Je vais prendre un taxi pour rentrer.", meaning: "Dönmek (eve gitmek) için taksiye bineceğim.", pronunciation: "jö ve prandr un tak-si pur ran-tre" },
        { text: "Pensez à valider votre ticket avant de monter.", meaning: "Binmeden önce biletinizi okutmayı unutmayın.", pronunciation: "pan-se a va-li-de votr ti-ke a-van dö mon-te" },
        { text: "Ce quartier est connu pour ses beaux bâtiments.", meaning: "Bu semt güzel binalarıyla tanınır.", pronunciation: "sö kar-tye e ko-nü pur se bo ba-ti-man" },
        { text: "Les piétons ont la priorité sur ce passage.", meaning: "Bu geçitte yayaların önceliği vardır.", pronunciation: "le pye-ton on la pri-yo-ri-te sür sö pas-saj" },
        { text: "Traversez la rue et tournez à gauche.", meaning: "Sokağı (karşıdan karşıya) geçin ve sola dönün.", pronunciation: "tra-ver-se la rü e tur-ne a goş" },
        { text: "La ligne 4 est fermée pour travaux aujourd'hui.", meaning: "Hat 4 bugün çalışmalar nedeniyle kapalı.", pronunciation: "la liny katr e fer-me pur tra-vo o-jur-dü-i" }
    ]
};

const unit372Phrases: FrenchB1UnitPhrases = {
    unitId: 372,
    title: "Spor ve Aktiviteler (Le Sport et Les Activités Physiques)",
    phrases: [
        { text: "Je fais de la natation deux fois par semaine.", meaning: "Haftada iki kez yüzüyorum (yüzme sporu yapıyorum).", pronunciation: "jö fe dö la na-ta-syon dö fua par sö-men" },
        { text: "Quelle est votre équipe de football préférée ?", meaning: "En sevdiğiniz futbol takımı hangisi?", pronunciation: "kel e votr e-kip dö fut-bol pre-fe-re" },
        { text: "Il faut s'échauffer avant l'entraînement.", meaning: "Antrenmandan önce ısınmak gerekir.", pronunciation: "il fo se-şo-fe a-van lan-tren-man" },
        { text: "Le match s'est terminé par un match nul.", meaning: "Maç beraberlikle bitti.", pronunciation: "lö maç se ter-mi-ne par un maç nül" },
        { text: "Elle joue au tennis depuis l'âge de cinq ans.", meaning: "Beş yaşından beri tenis oynuyor.", pronunciation: "el ju o te-nis dö-püi laj dö sank an" },
        { text: "Le sport est essentiel pour rester en bonne santé.", meaning: "Spor, sağlıklı kalmak için gereklidir.", pronunciation: "lö spor e e-san-syel pur res-te an bon san-te" },
        { text: "L'arbitre a donné un carton rouge au joueur.", meaning: "Hakem oyuncuya kırmızı kart gösterdi (verdi).", pronunciation: "lar-bitr a do-ne un kar-ton ruj o ju-ör" },
        { text: "Inscrivez-vous à la salle de sport pour garder la forme.", meaning: "Formda kalmak için spor salonuna kaydolun.", pronunciation: "ans-kri-ve-vu a la sal dö spor pur gar-de la form" },
        { text: "Ils ont perdu la finale de la compétition.", meaning: "Yarışmanın finalini kaybettiler.", pronunciation: "il zon per-dü la fi-nal dö la kom-pe-ti-syon" },
        { text: "Faire du sport permet de réduire le stress.", meaning: "Spor yapmak stresi azaltmayı sağlar.", pronunciation: "fer dü spor per-me dö re-düir lö stres" }
    ]
};

const unit373Phrases: FrenchB1UnitPhrases = {
    unitId: 373,
    title: "Seyahat Kültürü",
    phrases: [
        { text: "Il est important de respecter les coutumes locales.", meaning: "Yerel geleneklere saygı göstermek önemlidir.", pronunciation: "il e tan-por-tan dö res-pek-te le ku-tüm lo-kal" },
        { text: "On devrait apprendre quelques mots de la langue.", meaning: "Dilden birkaç kelime öğrenmeliyiz.", pronunciation: "on dö-vre a-pran-dr kel-ke mo dö la lang" },
        { text: "Dans certains pays, enlever ses chaussures est obligatoire.", meaning: "Bazı ülkelerde ayakkabıları çıkarmak zorunludur.", pronunciation: "dan ser-ten pei, an-le-ve se şo-sür e to-bli-ga-tuar" },
        { text: "Le pourboire est déjà inclus dans l'addition.", meaning: "Bahşiş zaten hesabın içinde.", pronunciation: "lö pur-buar e de-ja an-klü dan la-di-syon" },
        { text: "Je préfère voyager lentement pour mieux comprendre la culture.", meaning: "Kültürü daha iyi anlamak için yavaş gezmeyi tercih ederim.", pronunciation: "jö pre-fer vua-ya-je lan-te-man pur myö kom-pran-dr la kül-tür" },
        { text: "Les habitants apprécient la politesse.", meaning: "Yerel halk nezaketi takdir eder.", pronunciation: "le za-bi-tan a-pre-si la po-li-tes" },
        { text: "Je me renseigne sur les règles du temple.", meaning: "Tapınak kuralları hakkında bilgi alıyorum.", pronunciation: "jö mö ran-sen-ny sur le regl dü tan-pl" },
        { text: "Il vaut mieux éviter les sujets sensibles.", meaning: "Hassas konulardan kaçınmak daha iyi.", pronunciation: "il vo myö e-vi-te le sü-je san-sibl" },
        { text: "Les gestes ne veulent pas toujours dire la même chose.", meaning: "Jestler her zaman aynı şeyi ifade etmez.", pronunciation: "le jest nö völ pa tu-jur dir la mem şoz" },
        { text: "Je visite un marché local pour goûter des spécialités.", meaning: "Yerel pazarı yöresel tatları denemek için geziyorum.", pronunciation: "jö vi-zit an mar-şe lo-kal pur gu-te de spe-si-ya-li-te" },
        { text: "La tenue correcte est recommandée.", meaning: "Uygun kıyafet önerilir.", pronunciation: "la tö-nü ko-rekt e rök-ko-man-de" },
        { text: "Je respecte les horaires et les rendez-vous.", meaning: "Saatlere ve randevulara saygı gösteririm.", pronunciation: "jö res-pekt le zo-rer e le ran-de-vu" },
        { text: "Nous avons participé à une fête traditionnelle.", meaning: "Geleneksel bir festivale katıldık.", pronunciation: "nu za-von par-ti-si-pe a ün fet tra-di-syo-nel" },
        { text: "Il est conseillé de réserver à l'avance.", meaning: "Önceden rezervasyon yapmak önerilir.", pronunciation: "il e kon-se-ye dö re-zer-ve a la-vans" },
        { text: "Je m'adapte facilement aux habitudes du pays.", meaning: "Ülkenin alışkanlıklarına kolayca uyum sağlarım.", pronunciation: "jö ma-dapt fa-si-le-man o za-bi-tüd dü pei" }
    ]
};

const unit374Phrases: FrenchB1UnitPhrases = {
    unitId: 374,
    title: "Farklı Kültürler",
    phrases: [
        { text: "Dans ma culture, la famille est très importante.", meaning: "Benim kültürümde aile çok önemlidir.", pronunciation: "dan ma kül-tür, la fa-mi-y e tre tan-por-tant" },
        { text: "Chez eux, on dîne plus tard le soir.", meaning: "Onlarda akşam yemeği daha geç yenir.", pronunciation: "şe zö, on din plü tar lö suar" },
        { text: "Il est poli de dire bonjour en entrant.", meaning: "İçeri girerken merhaba demek nezakettir.", pronunciation: "il e po-li dö dir bon-jur an an-tran" },
        { text: "La ponctualité n'a pas la même valeur partout.", meaning: "Dakiklik her yerde aynı değere sahip değildir.", pronunciation: "la ponk-tü-a-li-te na pa la mem va-lör par-tu" },
        { text: "Il faut éviter les stéréotypes.", meaning: "Kalıp yargılardan kaçınmak gerekir.", pronunciation: "il fo e-vi-te le ste-re-o-tip" },
        { text: "Les salutations varient d'un pays à l'autre.", meaning: "Selamlaşmalar ülkeden ülkeye değişir.", pronunciation: "le sa-lü-ta-syon va-ryan dön pei a lo-tr" },
        { text: "Le contact visuel peut être perçu différemment.", meaning: "Göz teması farklı algılanabilir.", pronunciation: "lö kon-takt vi-zyel pö e-tr per-sü di-fe-ra-man" },
        { text: "Je respecte les traditions, même si elles sont différentes.", meaning: "Farklı olsalar bile geleneklere saygı duyarım.", pronunciation: "jö res-pekt le tra-di-syon, mem si el son di-fe-rant" },
        { text: "La cuisine traditionnelle est un bon moyen de découvrir une culture.", meaning: "Geleneksel mutfak bir kültürü keşfetmenin iyi bir yoludur.", pronunciation: "la küi-zin tra-di-syo-nel e tün bon mua-yan dö de-ku-vrir ün kül-tür" },
        { text: "Les vêtements traditionnels racontent une histoire.", meaning: "Geleneksel kıyafetler bir hikaye anlatır.", pronunciation: "le vet-mon tra-di-syo-nel ra-kont ün nis-tuar" },
        { text: "Je compare les modes de vie sans juger.", meaning: "Yargılamadan yaşam tarzlarını karşılaştırırım.", pronunciation: "jö kom-par le mod dö vi san jü-je" },
        { text: "Il est important d'avoir l'esprit ouvert.", meaning: "Açık fikirli olmak önemlidir.", pronunciation: "il e tan-por-tan da-vuar les-pri u-ver" },
        { text: "Les croyances ne se discutent pas de la même façon partout.", meaning: "İnançlar her yerde aynı şekilde tartışılmaz.", pronunciation: "le krua-yans nö sö dis-küt pa dö la mem fa-son par-tu" },
        { text: "On peut apprendre beaucoup en voyageant.", meaning: "Seyahat ederek çok şey öğrenebiliriz.", pronunciation: "on pö a-pran-dr bo-ku an vua-ya-jan" },
        { text: "Le respect mutuel facilite la communication.", meaning: "Karşılıklı saygı iletişimi kolaylaştırır.", pronunciation: "lö res-pekt mü-tyel fa-si-lit la ko-mü-ni-ka-syon" }
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
        { text: "Ils ont signé une pétition pour l'égalité.", meaning: "Eşitlik için bir dilekçe imzaladılar.", pronunciation: "il zon si-nye ün pe-ti-syon pur le-ga-li-te" },
        { text: "La dignité humaine est inviolable.", meaning: "İnsan onuru dokunulmazdır.", pronunciation: "la di-nyi-te ü-men e en-vyo-labl" },
        { text: "L'esclavage est interdit dans le monde entier.", meaning: "Kölelik tüm dünyada yasaklanmıştır.", pronunciation: "les-kla-vaj e en-ter-di dan lö mond an-tye" },
        { text: "Ils revendiquent de meilleures conditions de travail.", meaning: "Daha iyi çalışma koşulları talep ediyorlar.", pronunciation: "il rö-van-dik dö me-yör kon-di-syon dö tra-vay" },
        { text: "La tolérance est une vertu essentielle.", meaning: "Hoşgörü temel bir erdemdir.", pronunciation: "la to-le-rans e tün ver-tü e-san-syel" },
        { text: "La Convention européenne protège nos droits.", meaning: "Avrupa Sözleşmesi haklarımızı korur.", pronunciation: "la kon-van-syon ö-ro-pe-en pro-tej no dro-a" }
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
        { text: "La solidarité nous rend plus forts.", meaning: "Dayanışma bizi daha güçlü kılar.", pronunciation: "la so-li-da-ri-te nu ran plü for" },
        { text: "La collecte de fonds a été un succès.", meaning: "Bağış toplama kampanyası başarılı oldu.", pronunciation: "la ko-lekt dö fon a e-te un sük-se" },
        { text: "Le don du sang sauve des vies.", meaning: "Kan bağışı hayat kurtarır.", pronunciation: "lö don dü san sov de vi" },
        { text: "L'action sociale est au cœur de notre mission.", meaning: "Sosyal faaliyet misyonumuzun merkezindedir.", pronunciation: "lak-syon so-syal e o kör dö notr mi-syon" },
        { text: "Les bénéficiaires reçoivent de l'aide chaque semaine.", meaning: "Yararlanıcılar her hafta yardım alıyor.", pronunciation: "le be-ne-fi-syer rö-suav dö led şak sö-men" },
        { text: "L'entraide est la base du vivre-ensemble.", meaning: "Karşılıklı yardımlaşma birlikte yaşamanın temelidir.", pronunciation: "lan-tred e la baz dü vivr an-sambl" }
    ]
};

const unit388Phrases: FrenchB1UnitPhrases = {
    unitId: 388,
    title: "Göç ve Mülteciler",
    phrases: [
        { text: "Ils ont dû fuir leur pays.", meaning: "Ülkelerinden kaçmak zorunda kaldılar.", pronunciation: "il zon dü füir lör pe-i" },
        { text: "L'intégration demande du temps et de la patience.", meaning: "Uyum zaman ve sabır gerektirir.", pronunciation: "len-te-gra-syon dö-mand dü tan e dö la pa-syans" },
        { text: "La diversité est une force pour la société.", meaning: "Çeşitlilik toplum için bir güçtür.", pronunciation: "la di-ver-si-te e tün fors pur la so-sye-te" },
        { text: "Nous devons accueillir les réfugiés avec dignité.", meaning: "Mültecileri onurlu bir şekilde karşılamalıyız.", pronunciation: "nu dö-von a-kö-yir le re-fü-je a-vek di-nyi-te" },
        { text: "Le pays d'accueil offre de nouvelles opportunités.", meaning: "Ev sahibi ülke yeni fırsatlar sunar.", pronunciation: "lö pe-i da-köy ofr dö nu-vel o-por-tü-ni-te" },
        { text: "S'adapter à une nouvelle culture n'est pas facile.", meaning: "Yeni bir kültüre uyum sağlamak kolay değildir.", pronunciation: "sa-dap-te a ün nu-vel kül-tür ne pa fa-sil" },
        { text: "La solidarité est la clé de l'intégration.", meaning: "Dayanışma uyumun anahtarıdır.", pronunciation: "la so-li-da-ri-te e la kle dö len-te-gra-syon" },
        { text: "Chaque personne mérite une seconde chance.", meaning: "Herkes ikinci bir şansı hak eder.", pronunciation: "şak per-son me-rit ün sö-gond şans" },
        { text: "Ils ont traversé la frontière à pied.", meaning: "Sınırı yürüyerek geçtiler.", pronunciation: "il zon tra-ver-se la fron-tyər a pye" },
        { text: "L'immigration enrichit notre société.", meaning: "Göç toplumumuzu zenginleştirir.", pronunciation: "li-mi-gra-syon an-ri-şi notr so-sye-te" },
        { text: "Le demandeur d'asile attend la réponse depuis des mois.", meaning: "Sığınmacı aylardır cevap bekliyor.", pronunciation: "lö dö-man-dör da-zil a-tan la re-pons dö-pü de mua" },
        { text: "La naturalisation est un processus long.", meaning: "Vatandaşlığa geçiş uzun bir süreçtir.", pronunciation: "la na-tü-ra-li-za-syon e un pro-se-süs lon" },
        { text: "Le multiculturalisme enrichit les sociétés modernes.", meaning: "Çokkültürlülük modern toplumları zenginleştirir.", pronunciation: "lö mül-ti-kül-tü-ra-lism an-ri-şi le so-sye-te mo-dern" },
        { text: "Il faut un visa pour entrer dans ce pays.", meaning: "Bu ülkeye girmek için vize gerekir.", pronunciation: "il fo un vi-za pur an-tre dan sö pe-i" },
        { text: "La double culture est une véritable richesse.", meaning: "Çift kültürlülük gerçek bir zenginliktir.", pronunciation: "la dubl kül-tür e ün ve-ri-tabl ri-şes" }
    ]
};

const unit389Phrases: FrenchB1UnitPhrases = {
    unitId: 389,
    title: "Ekonomik Sorunlar",
    phrases: [
        { text: "L'économie mondiale connaît des changements importants.", meaning: "Dünya ekonomisi önemli değişimler yaşıyor.", pronunciation: "le-ko-no-mi mon-dyal ko-ne de şanj-man an-por-tan" },
        { text: "Le gouvernement a annoncé de nouvelles mesures fiscales.", meaning: "Hükümet yeni vergi önlemleri açıkladı.", pronunciation: "lö gu-ver-nö-man a a-non-se dö nu-vel mö-zür fis-kal" },
        { text: "Il est difficile de joindre les deux bouts avec l'inflation.", meaning: "Enflasyonla birlikte ayı sonunu getirmek (iki yakayı bir araya getirmek) zor.", pronunciation: "i-le di-fi-sil dö jwan-dr le dö bu a-vek lan-fla-syon" },
        { text: "Les prix à la consommation ont augmenté rapidement.", meaning: "Tüketici fiyatları hızla arttı.", pronunciation: "le pri a la kon-so-ma-syon on tog-man-te ra-pid-man" },
        { text: "Le chômage des jeunes reste une priorité politique.", meaning: "Genç işsizliği bir siyasi öncelik olmaya devam ediyor.", pronunciation: "lö şo-maj de jön rest ün pri-o-ri-te po-li-tik" },
        { text: "Investir en bourse comporte toujours des risques.", meaning: "Borsaya yatırım yapmak her zaman riskler içerir.", pronunciation: "an-ves-tir an burs kon-port tu-jur de risk" },
        { text: "La banque a refusé ma demande de prêt immobilier.", meaning: "Banka konut kredisi talebimi reddetti.", pronunciation: "la bank a rö-fü-ze ma dö-mand dö pre i-mo-bi-lye" },
        { text: "Le pouvoir d'achat est au cœur des débats actuels.", meaning: "Alım gücü güncel tartışmaların merkezinde.", pronunciation: "lö pu-vuar da-şa e o kör de de-ba ak-tü-el" },
        { text: "La croissance verte est l'avenir de notre société.", meaning: "Yeşil büyüme toplumumuzun geleceğidir.", pronunciation: "la krua-sans vert e la-vö-nir dö notr so-sye-te" },
        { text: "Il faut réduire la dette publique pour les générations futures.", meaning: "Gelecek nesiller için kamu borcunu azaltmak gerekir.", pronunciation: "il fo re-dü-ir la det pü-blik pur le je-ne-ra-syon fü-tür" },
        { text: "La concurrence internationale est de plus en plus forte.", meaning: "Uluslararası rekabet giderek daha güçlü hale geliyor.", pronunciation: "la kon-kü-rans an-ter-na-syo-nal e dö plü zan plü fort" },
        { text: "Le secteur des services représente une grande part du PIB.", meaning: "Hizmet sektörü GSYİH'nın büyük bir kısmını temsil ediyor.", pronunciation: "lö sek-tör de ser-vis rö-pre-zant ün grand par dü pe-i-be" },
        { text: "Les syndicats appellent à une manifestation nationale.", meaning: "Sendikalar ulusal bir gösteri çağrısında bulunuyor.", pronunciation: "le sen-di-ka a-pel a ün ma-ni-fes-ta-syon na-syo-nal" },
        { text: "Les subventions aident les agriculteurs à moderniser leur matériel.", meaning: "Sübvansiyonlar çiftçilerin ekipmanlarını modernize etmelerine yardımcı oluyor.", pronunciation: "le süb-van-syon ed le za-gri-kül-tör a mo-der-ni-ze lör ma-te-ryel" },
        { text: "Le commerce extérieur est essentiel pour la richesse du pays.", meaning: "Dış ticaret ülkenin zenginliği için elzemdir.", pronunciation: "lö ko-mers eks-te-ryör e te-san-syel pur la ri-şes dü pe-i" }
    ]
};


const unit390Phrases: FrenchB1UnitPhrases = {
    unitId: 390,
    title: "B1 Genel Tekrar (Révision Générale)",
    phrases: [
        { text: "Je suis ravi de vous rencontrer.", meaning: "Sizinle tanışmaktan memnunum.", pronunciation: "jö süi ra-vi dö vu ran-kon-tre" },
        { text: "Pourriez-vous m'expliquer ce point ?", meaning: "Bu noktayı bana açıklayabilir miydiniz?", pronunciation: "pu-rye-vu meks-pli-ke sö pwan" },
        { text: "Il est essentiel de protéger la planète.", meaning: "Gezegeni korumak esastır.", pronunciation: "i-le te-san-syel dö pro-te-je la pla-net" },
        { text: "J'ai acquis beaucoup d'expérience ce mois-ci.", meaning: "Bu ay çok tecrübe kazandım.", pronunciation: "je a-ki bo-ku dek-spe-ryans sö mua-si" },
        { text: "La technologie change nos vies quotidiennes.", meaning: "Teknoloji günlük hayatlarımızı değiştiriyor.", pronunciation: "la tek-no-lo-ji şanj no vi ko-ti-dyen" },
        { text: "Je cherche un emploi stable.", meaning: "İstikrarlı bir iş arıyorum.", pronunciation: "jö şerş un an-plua sta-bl" },
        { text: "Il faut respecter les opinions des autres.", meaning: "Başkalarının fikirlerine saygı duymak gerekir.", pronunciation: "il fo res-pek-te le zo-pi-nyon de zotr" },
        { text: "Le succès dépend du travail acharné.", meaning: "Başarı sıkı çalışmaya bağlıdır.", pronunciation: "lö sük-se de-pan dü tra-vay a-şar-ne" },
        { text: "La solidarité est une valeur clé.", meaning: "Dayanışma anahtar bir değerdir.", pronunciation: "la so-li-da-ri-te e tün va-lör kle" },
        { text: "C'est une opportunité à ne pas manquer.", meaning: "Bu kaçırılmaması gereken bir fırsat.", pronunciation: "se tün o-por-tü-ni-te a nö pa man-ke" },
        { text: "L'inflation est un problème économique majeur.", meaning: "Enflasyon büyük bir ekonomik sorundur.", pronunciation: "lan-fla-syon e un pro-blem e-ko-no-mik ma-jör" },
        { text: "Je m'adapte facilement à de nouveaux environnements.", meaning: "Yeni ortamlara kolayca uyum sağlarım.", pronunciation: "jö ma-dapt fa-sil-man a dö nu-vo zan-vi-ro-nö-man" },
        { text: "La diversité culturelle est une richesse.", meaning: "Kültürel çeşitlilik bir zenginliktir.", pronunciation: "la di-ver-si-te kül-tü-rel e ün ri-şes" },
        { text: "Nous devons agir pour le climat dès maintenant.", meaning: "İklim için şimdiden harekete geçmeliyiz.", pronunciation: "nu dö-von a-jir pur lö kli-ma de men-tö-nan" },
        { text: "Félicitations pour votre réussite !", meaning: "Başarınız için tebrikler!", pronunciation: "fe-li-si-tas-yon pur votr re-ü-sit" }
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
        387: unit387Phrases,
        388: unit388Phrases,
        389: unit389Phrases,
        390: unit390Phrases
    };
    return idMapping[unitId]?.phrases || unit361Phrases.phrases;
}

