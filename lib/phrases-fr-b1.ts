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
    title: "Eğitim ve Öğrenim (Éducation et Apprentissage)",
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
    title: "Şehir ve Toplu Taşıma (La Ville et Les Transports)",
    phrases: [
        { text: "Pardon, pour aller à la gare s'il vous plaît ?", meaning: "Afedersiniz, istasyona nasıl gidebilirim lütfen?", pronunciation: "par-don, pur a-le a la gar sil vu ple" },
        { text: "Le métro est plus rapide que le bus en ville.", meaning: "Metro, şehirde otobüsten daha hızlıdır.", pronunciation: "lö me-tro e plü ra-pid kö lö büs an vil" },
        { text: "Il faut descendre à la prochaine station.", meaning: "Sonraki istasyonda/durakta inmek gerekiyor.", pronunciation: "il fo de-sandr a la pro-şen sta-syon" },
        { text: "Évitez le centre-ville à cause des embouteillages.", meaning: "Trafik sıkışıklığı nedeniyle şehir merkezinden kaçının.", pronunciation: "e-vi-te lö santr-vil a koz dez an-bu-tey-yaj" },
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
        372: unit372Phrases
    };
    return idMapping[unitId]?.phrases || unit361Phrases.phrases;
}
