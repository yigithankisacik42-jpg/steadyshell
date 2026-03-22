export interface SpeakingExerciseFrB1 {
  text: string;
  translation: string;
  pronunciation: string;
}

export interface UnitSpeakingFrB1 {
  unitId: number;
  title: string;
  exercises: SpeakingExerciseFrB1[];
}

const unit361Speaking: UnitSpeakingFrB1 = {
  unitId: 361,
  title: "İş Görüşmesi",
  exercises: [
    { text: "Bonjour, je suis ici pour l'entretien d'embauche.", translation: "Merhaba, iş görüşmesi için buradayım.", pronunciation: "bon-jur, jö süi i-si pur lan-trö-tyan dam-boş" },
    { text: "Asseyez-vous, je vous en prie.", translation: "Otuyun lütfen.", pronunciation: "a-se-ye-vu, jö vu zan pri" },
    { text: "Pouvez-vous me parler de votre parcours ?", translation: "Bana geçmişinizden bahsedebilir misiniz?", pronunciation: "pu-ve vu mö par-le dö votr par-kur" },
    { text: "J'ai travaillé cinq ans dans le marketing.", translation: "Pazarlamada beş yıl çalıştım.", pronunciation: "je tra-va-ye sank an dan lö mar-kö-ting" },
    { text: "Quelles sont vos qualités principales ?", translation: "Temel nitelikleriniz nelerdir?", pronunciation: "kel son vo ka-li-te pran-si-pal" },
    { text: "Je suis dynamique et j'aime le travail en équipe.", translation: "Dinamik biriyim ve takım çalışmasını severim.", pronunciation: "jö süi di-na-mik e jem lö tra-vay an e-kip" },
    { text: "Pourquoi voulez-vous travailler pour nous ?", translation: "Neden bizim için çalışmak istiyorsunuz?", pronunciation: "pur-kua vu-le vu tra-va-ye pur nu" },
    { text: "Votre entreprise a une excellente réputation.", translation: "Şirketinizin mükemmel bir ünü var.", pronunciation: "votr an-trö-priz a ün ek-se-lant re-pü-tas-yon" },
    { text: "Avez-vous des questions à me poser ?", translation: "Bana soracağınız sorular var mı?", pronunciation: "a-ve-vu de kes-tyon a mö po-ze" },
    { text: "Quand aurai-je de vos nouvelles ?", translation: "Sizden ne zaman haber alırım?", pronunciation: "kan o-rej dö vo nu-vel" }
  ]
};

const unit362Speaking: UnitSpeakingFrB1 = {
  unitId: 362,
  title: "L'environnement et l'écologie (Çevre ve Ekoloji)",
  exercises: [
    { text: "Que penses-tu du changement climatique ?", translation: "İklim değişikliği hakkında ne düşünüyorsun?", pronunciation: "kö pans-tü dü şanj-man kli-ma-tik" },
    { text: "Je pense que c'est très grave.", translation: "Bunun çok ciddi olduğunu düşünüyorum.", pronunciation: "jö pans kö se tre grav" },
    { text: "Que fais-tu pour protéger la planète ?", translation: "Gezegeni korumak için ne yapıyorsun?", pronunciation: "kö fe-tü pur pro-te-je la pla-net" },
    { text: "Je recycle toujours mes bouteilles en plastique.", translation: "Plastik şişelerimi her zaman geri dönüştürürüm.", pronunciation: "jö rö-sikl tu-jur me bu-tey zan plas-tik" },
    { text: "En utilisant mon vélo, je réduis la pollution.", translation: "Bisikletimi kullanarak kirliliği azaltıyorum.", pronunciation: "an nü-ti-li-zan mon ve-lo jö re-düi la po-lüs-yon" },
    { text: "C'est une excellente idée écologique.", translation: "Bu harika bir ekolojik fikir.", pronunciation: "se tün ek-se-lant i-de e-ko-lo-jik" },
    { text: "La Terre se réchauffe chaque année.", translation: "Dünya her yıl ısınıyor.", pronunciation: "la ter sö re-şof şak a-ne" },
    { text: "Nous n'avons pas de planète B.", translation: "B gezegenimiz yok.", pronunciation: "nu na-von pa dö pla-net Be" },
    { text: "Mettez vos déchets dans la poubelle jaune.", translation: "Atıklarınızı sarı çöp kutusuna atın.", pronunciation: "me-te vo de-şe dan la pu-bel jon" },
    { text: "La protection de la faune est essentielle.", translation: "Yaban hayatının korunması çok önemlidir.", pronunciation: "la pro-tek-syon dö la fon e te-san-syel" }
  ]
};

const unit363Speaking: UnitSpeakingFrB1 = {
  unitId: 363,
  title: "Les nouvelles technologies (Yeni Teknolojiler)",
  exercises: [
    { text: "Utilisez-vous souvent votre ordinateur ?", translation: "Bilgisayarınızı sık kullanır mısınız?", pronunciation: "ü-ti-li-ze vu su-van votr or-di-na-tör" },
    { text: "Oui, je travaille sur mon ordinateur toute la journée.", translation: "Evet, bütün gün bilgisayarımda çalışıyorum.", pronunciation: "ui, jö tra-vay sür mon or-di-na-tör tut la jur-ne" },
    { text: "Avez-vous une bonne connexion Internet ?", translation: "İyi bir internet bağlantınız var mı?", pronunciation: "a-ve vu ün bon ko-nek-syon an-ter-net" },
    { text: "Désolé, mais la connexion est très mauvaise ici.", translation: "Üzgünüm ama burada bağlantı çok kötü.", pronunciation: "de-zo-le, me la ko-nek-syon e tre mo-vez i-si" },
    { text: "Je dois mettre à jour mon téléphone.", translation: "Telefonumu güncellemem gerekiyor.", pronunciation: "jö dua metr a jur mon te-le-fon" },
    { text: "Pouvez-vous me donner le mot de passe ?", translation: "Bana şifreyi verebilir misiniz?", pronunciation: "pu-ve vu mö do-ne lö mo dö pas" },
    { text: "N'ouvrez pas ce fichier, c'est un virus.", translation: "Bu dosyayı açmayın, o bir virüs.", pronunciation: "nu-vre pa sö fi-şye, se tun vi-rüs" },
    { text: "J'ai perdu toutes mes données.", translation: "Tüm verilerimi kaybettim.", pronunciation: "je per-dü tut me do-ne" },
    { text: "La technologie facilite notre vie quotidienne.", translation: "Teknoloji günlük hayatımızı kolaylaştırır.", pronunciation: "la tek-no-lo-ji fa-si-lit notr vi ko-ti-dyen" },
    { text: "Je passe trop de temps sur mon smartphone.", translation: "Akıllı telefonumda çok fazla zaman harcıyorum.", pronunciation: "jö pas tro dö tan sür mon smar-fon" }
  ]
};

const unit364Speaking: UnitSpeakingFrB1 = {
  unitId: 364,
  title: "L'art et la culture (Sanat ve Kültür)",
  exercises: [
    { text: "Aimes-tu aller au musée ?", translation: "Müzeye gitmeyi sever misin?", pronunciation: "em-tü a-le o mü-ze" },
    { text: "Oui, j'y vais souvent le week-end.", translation: "Evet, hafta sonları sık sık giderim.", pronunciation: "ui, ji ve su-van lö ui-kend" },
    { text: "Quel genre de films aimes-tu ?", translation: "Ne tür filmleri seversin?", pronunciation: "kel janr dö film em-tü" },
    { text: "J'adore les comédies dramatiques françaises.", translation: "Fransız dramatik komedilerine bayılırım.", pronunciation: "ja-dor le ko-me-di dra-ma-tik fran-sez" },
    { text: "As-tu lu le dernier roman de cet écrivain ?", translation: "Bu yazarın son romanını okudun mu?", pronunciation: "a-tü lü lö der-nye ro-man dö se-te-kri-van" },
    { text: "Non, pas encore, mais j'en ai entendu parler.", translation: "Hayır, henüz değil, ama adını duydum.", pronunciation: "non, pa zan-kor, me jan ne an-tan-dü par-le" },
    { text: "Tu joues d'un instrument de musique ?", translation: "Bir müzik aleti çalıyor musun?", pronunciation: "tü ju dun nans-trü-man dö mü-zik" },
    { text: "Je joue du piano depuis cinq ans.", translation: "Beş yıldır piyano çalıyorum.", pronunciation: "jö ju dü pya-no dö-püi sank an" },
    { text: "C'est une œuvre d'art magnifique.", translation: "Bu muhteşem bir sanat eseri.", pronunciation: "se tün övr dar ma-nyi-fik" },
    { text: "Le concert commencera à vingt heures.", translation: "Konser saat yirmide (akşam 8'de) başlayacak.", pronunciation: "lö kon-ser ko-mans-ra a vant ör" }
  ]
};

const unit365Speaking: UnitSpeakingFrB1 = {
  unitId: 365,
  title: "Teknoloji ve Toplum",
  exercises: [
    { text: "L'impact de la technologie sur notre société est immense.", translation: "Teknolojinin toplumumuz üzerindeki etkisi muazzamdır.", pronunciation: "lam-pakt dö la tek-no-lo-ji sür notr so-sye-te e ti-mans" },
    { text: "Crois-tu que les robots remplaceront les humains ?", translation: "Robotların insanların yerini alacağına inanıyor musun?", pronunciation: "krua-tü kö le ro-bo ran-plas-ron le zü-man" },
    { text: "Pensez-vous que l'intelligence artificielle est dangereuse ?", translation: "Yapay zekanın tehlikeli olduğunu düşünüyor musunuz?", pronunciation: "pan-se-vu kö lan-te-li-jans ar-ti-fi-syel e dan-jö-röz" },
    { text: "Elle nous aide à résoudre des problèmes complexes.", translation: "Karmaşık sorunları çözmemize yardımcı olur.", pronunciation: "el nu zed a re-zudr de pro-blem kom-pleks" },
    { text: "Cependant, il faut faire attention à notre vie privée.", translation: "Ancak, özel hayatımıza dikkat etmeliyiz.", pronunciation: "sö-pan-dan, il fo fer a-tan-syon a notr vi pri-ve" },
    { text: "J'utilise des applications sécurisées pour mes données.", translation: "Verilerim için güvenli uygulamalar kullanıyorum.", pronunciation: "jü-ti-liz de za-pli-kas-yon se-kü-ri-ze pur me do-ne" },
    { text: "La fracture numérique est un problème grave.", translation: "Dijital uçurum ciddi bir sorundur.", pronunciation: "la frak-tür nü-me-rik e tun pro-blem grav" },
    { text: "L'innovation ouvre la porte à de nouveaux emplois.", translation: "İnovasyon yeni işlere kapı açar.", pronunciation: "li-no-vas-yon uvr la port a dö nu-vo zan-plua" },
    { text: "Mon entreprise est entièrement automatisée.", translation: "Şirketim tamamen otomatikleştirilmiştir.", pronunciation: "mon an-trö-priz e an-tyer-man o-to-ma-ti-ze" },
    { text: "Il est important d'éduquer les jeunes sur ces sujets.", translation: "Gençleri bu konularda eğitmek önemlidir.", pronunciation: "i-le tan-por-tan de-dü-ke le jön sür se sü-je" }
  ]
};

const unit366Speaking: UnitSpeakingFrB1 = {
  unitId: 366,
  title: "Sosyal Medya (Réseaux Sociaux)",
  exercises: [
    { text: "Quel est ton réseau social préféré ?", translation: "En sevdiğin sosyal ağ hangisi?", pronunciation: "ke-le ton re-zo so-syal pre-fe-re" },
    { text: "Je préfère Instagram pour partager mes photos.", translation: "Fotoğraflarımı paylaşmak için Instagram'ı tercih ediyorum.", pronunciation: "jö pre-fer ans-ta-gram pur par-ta-je me fo-to" },
    { text: "As-tu vu la dernière vidéo de ce créateur ?", translation: "Bu içerik üreticisinin son videosunu gördün mü?", pronunciation: "a-tü vü la der-nyer vi-de-o dö sö kre-a-tör" },
    { text: "Non, je n'ai pas eu le temps de me connecter.", translation: "Hayır, bağlanmaya vaktim olmadı.", pronunciation: "non, jö ne pa zü lö tan dö mö ko-nek-te" },
    { text: "Elle a gagné beaucoup d'abonnés cette semaine.", translation: "O bu hafta çok abone kazandı.", pronunciation: "e-la ga-nye bo-ku da-bo-ne set sö-men" },
    { text: "C'est dangereux de partager trop d'informations.", translation: "Çok fazla bilgi paylaşmak tehlikelidir.", pronunciation: "se dan-jö-rö dö par-ta-je tro dan-for-mas-yon" },
    { text: "Peux-tu m'envoyer le lien par message ?", translation: "Bana linki mesajla gönderebilir misin?", pronunciation: "pö-tü man-vua-ye lö lyan par me-saj" },
    { text: "J'ai oublié mon mot de passe pour m'inscrire.", translation: "Kaydolmak için şifremi unuttum.", pronunciation: "je u-bli-ye mon mo dö pas pur mans-krir" },
    { text: "N'oublie pas de laisser un commentaire.", translation: "Yorum bırakmayı unutma.", pronunciation: "nu-bli pa dö le-se tun ko-man-ter" },
    { text: "Beaucoup de jeunes veulent devenir des influenceurs.", translation: "Birçok genç fenomen olmak istiyor.", pronunciation: "bo-ku dö jön völ dö-vö-nir de zan-flü-an-sör" }
  ]
};

const unit367Speaking: UnitSpeakingFrB1 = {
  unitId: 367,
  title: "Çevre ve Doğa (L'Environnement et la Nature)",
  exercises: [
    { text: "Que pensez-vous du réchauffement climatique ?", translation: "Küresel ısınma hakkında ne düşünüyorsunuz?", pronunciation: "kö pan-se vu dü re-şof-man kli-ma-tik" },
    { text: "Je pense qu'il est urgent de protéger notre planète.", translation: "Gezegenimizi korumanın acil olduğunu düşünüyorum.", pronunciation: "jö pans ki-le-tür-jan dö pro-te-je notr pla-net" },
    { text: "Triez-vous vos déchets à la maison ?", translation: "Evde çöplerinizi ayırıyor musunuz?", pronunciation: "tri-ye vu vo de-şe a la me-zon" },
    { text: "Oui, je recycle toujours le papier et le plastique.", translation: "Evet, her zaman kağıdı ve plastiği geri dönüştürürüm.", pronunciation: "ui, jö rö-sikl tu-jur lö pa-pye e lö plas-tik" },
    { text: "Faut-il interdire les sacs en plastique ?", translation: "Plastik poşetler yasaklanmalı mı?", pronunciation: "fo-til an-ter-dir le sak an plas-tik" },
    { text: "Absolument, ils polluent énormément les océans.", translation: "Kesinlikle, okyanusları çok kirletiyorlar.", pronunciation: "ab-so-lü-man, il po-lü e-nor-me-man le-zo-se-an" },
    { text: "Comment pouvons-nous économiser l'eau ?", translation: "Suyu nasıl tasarruf edebiliriz?", pronunciation: "ko-man pu-von nu e-ko-no-mi-ze lo" },
    { text: "En prenant des douches plus courtes, par exemple.", translation: "Örneğin daha kısa duşlar alarak.", pronunciation: "an prö-nan de duş plü kurt par eg-zanpl" },
    { text: "La déforestation menace beaucoup d'espèces.", translation: "Ormansızlaşma birçok türü tehdit ediyor.", pronunciation: "la de-fo-res-tas-yon mö-nas bo-ku des-pes" },
    { text: "Tout le monde doit faire un effort pour l'environnement.", translation: "Herkes çevre için çaba göstermelidir.", pronunciation: "tu lö mond dua fer un e-for pur lan-vi-ron-man" }
  ]
};

const unit368Speaking: UnitSpeakingFrB1 = {
  unitId: 368,
  title: "Sağlık ve Zindelik (Santé et Bien-être)",
  exercises: [
    { text: "Comment vous sentez-vous aujourd'hui ?", translation: "Bugün kendinizi nasıl hissediyorsunuz?", pronunciation: "ko-man vu san-te vu o-jur-dü-i" },
    { text: "Je me sens fatigué et j'ai un peu de fièvre.", translation: "Kendimi yorgun hissediyorum ve biraz ateşim var.", pronunciation: "jö mö san fa-ti-ge e je un pö dö fyevr" },
    { text: "Avez-vous mal quelque part ?", translation: "Bir yeriniz ağrıyor mu?", pronunciation: "a-ve vu mal kel-kö par" },
    { text: "Oui, j'ai très mal à la gorge.", translation: "Evet, boğazım çok ağrıyor.", pronunciation: "ui, je tre mal a la gorj" },
    { text: "Je vais vous prescrire quelques médicaments.", translation: "Size birkaç ilaç yazacağım.", pronunciation: "jö ve vu pres-krir kel-kö me-di-ka-man" },
    { text: "Pensez-vous que c'est grave, docteur ?", translation: "Sizce ciddi mi, doktor?", pronunciation: "pan-se vu kö se grav, dok-tör" },
    { text: "Non, c'est juste un simple rhume.", translation: "Hayır, sadece basit bir soğuk algınlığı.", pronunciation: "non, se just un sanpl rüm" },
    { text: "Est-ce que vous faites du sport régulièrement ?", translation: "Düzenli spor yapıyor musunuz?", pronunciation: "es-kö vu fet dü spor re-gü-lyer-man" },
    { text: "J'essaie de courir deux fois par semaine.", translation: "Haftada iki kez koşmaya çalışıyorum.", pronunciation: "je-sey dö ku-rir dö fua par sö-men" },
    { text: "C'est très bien pour maintenir votre bien-être.", translation: "Zindeliğinizi korumak için bu çok iyi.", pronunciation: "se tre byan pur man-tö-nir votr byan-etr" }
  ]
};

const unit369Speaking: UnitSpeakingFrB1 = {
  unitId: 369,
  title: "Eğitim ve Öğrenim (Éducation et Apprentissage)",
  exercises: [
    { text: "En quelle année êtes-vous à l'université ?", translation: "Üniversitede kaçıncı yılınızdasınız?", pronunciation: "an kel a-ne et vu a lü-ni-ver-si-te" },
    { text: "Je suis en dernière année et je prépare mon diplôme.", translation: "Son yılımdayım ve diplomamı hazırlıyorum.", pronunciation: "jö süi an der-nyer a-ne e jö pre-par mon di-plom" },
    { text: "Quel est votre sujet préféré à l'école ?", translation: "Okulda en sevdiğiniz konu/ders nedir?", pronunciation: "kel e votr sü-je pre-fe-re a le-kol" },
    { text: "J'aime beaucoup les mathématiques et l'histoire.", translation: "Matematiği ve tarihi çok seviyorum.", pronunciation: "jem bo-ku le ma-te-ma-tik e lis-tuar" },
    { text: "Avez-vous réussi votre examen de français ?", translation: "Fransızca sınavınızı geçtiniz mi?", pronunciation: "a-ve vu re-ü-si votr eg-za-man dö fran-se" },
    { text: "Oui, j'ai eu une très bonne note !", translation: "Evet, çok iyi bir not aldım!", pronunciation: "ui, je ü ün tre bon not" },
    { text: "Que voulez-vous étudier plus tard ?", translation: "İleride ne okumak istiyorsunuz?", pronunciation: "kö vu-le vu e-tü-dye plü tar" },
    { text: "Je voudrais obtenir une bourse et étudier à l'étranger.", translation: "Burs alıp yurtdışında okumak isterim.", pronunciation: "jö vu-dre ob-tö-nir ün burs e e-tü-dye a le-tran-je" },
    { text: "Monsieur, pouvez-vous expliquer cette leçon encore une fois ?", translation: "Öğretmenim, bu dersi bir kez daha açıklayabilir misiniz?", pronunciation: "mö-syö, pu-ve vu eks-pli-ke set lö-son an-kor ün fua" },
    { text: "Bien sûr, écoutez attentivement s'il vous plaît.", translation: "Tabii ki, lütfen dikkatlice dinleyin.", pronunciation: "byan sür, e-ku-te a-tan-tiv-man sil vu ple" }
  ]
};

const unit370Speaking: UnitSpeakingFrB1 = {
  unitId: 370,
  title: "Doğa ve Çevre (Nature et Environnement)",
  exercises: [
    { text: "Que faites-vous pour protéger l'environnement ?", translation: "Çevreyi korumak için ne yapıyorsunuz?", pronunciation: "kö fet vu pur pro-te-je lan-vi-ron-man" },
    { text: "Je trie mes déchets et je recycle le plastique.", translation: "Çöplerimi ayırıyorum ve plastiği geri dönüştürüyorum.", pronunciation: "jö tri me de-şe e jö rö-sikl lö plas-tik" },
    { text: "Pensez-vous que le changement climatique est grave ?", translation: "İklim değişikliğinin ciddi olduğunu düşünüyor musunuz?", pronunciation: "pan-se vu kö lö şanj-man kli-ma-tik e grav" },
    { text: "Oui, c'est le plus grand défi de notre époque.", translation: "Evet, çağımızın en büyük zorluğudur.", pronunciation: "ui, se lö plü gran de-fi dö notr e-pok" },
    { text: "Est-ce que vous prenez souvent la voiture ?", translation: "Sık sık araba kullanır mısınız?", pronunciation: "es-kö vu prö-ne su-van la vua-tür" },
    { text: "Non, je préfère utiliser mon vélo ou marcher.", translation: "Hayır, bisikletimi kullanmayı veya yürümeyi tercih ederim.", pronunciation: "non, jö pre-fer ü-ti-li-ze mon ve-lo u mar-şe" },
    { text: "Les animaux sauvages perdent leur habitat naturel.", translation: "Vahşi hayvanlar doğal yaşam alanlarını kaybediyor.", pronunciation: "lez a-ni-mo so-vaj perd lör a-bi-ta na-tü-rel" },
    { text: "Nous devrions tous réduire notre consommation d'eau.", translation: "Hepimiz su tüketimimizi azaltmalıyız.", pronunciation: "nu dö-vri-yon tus re-düir notr kon-so-ma-syon do" },
    { text: "Avez-vous déjà participé à un nettoyage de la plage ?", translation: "Hiç plaj temizliğine katıldınız mı?", pronunciation: "a-ve vu de-ja par-ti-si-pe a un net-tua-yaj dö la plaj" },
    { text: "Oui, c'était une expérience très enrichissante.", translation: "Evet, çok zenginleştirici bir deneyimdi.", pronunciation: "ui, se-te tün eks-pe-ryans tre an-ri-şis-sant" }
  ]
};

const unit371Speaking: UnitSpeakingFrB1 = {
  unitId: 371,
  title: "Şehir ve Toplu Taşıma (La Ville et Les Transports)",
  exercises: [
    { text: "Excusez-moi, comment puis-je aller au centre-ville ?", translation: "Afedersiniz, şehir merkezine nasıl gidebilirim?", pronunciation: "eks-kü-ze mua, ko-man püi-jö a-le o santr-vil" },
    { text: "Vous pouvez prendre le bus numéro 12 ou le métro.", translation: "12 numaralı otobüse veya metroya binebilirsiniz.", pronunciation: "vu pu-ve prandr lö büs nü-me-ro duz u lö me-tro" },
    { text: "C'est loin d'ici ou je peux y aller à pied ?", translation: "Buradan uzak mı yoksa yürüyerek gidebilir miyim?", pronunciation: "se luan di-si u jö pö i a-le a pye" },
    { text: "Ce n'est pas très loin, environ dix minutes à pied.", translation: "Çok uzak değil, yürüyerek yaklaşık on dakika.", pronunciation: "sö ne pa tre luan, an-vi-ron di mi-nüt a pye" },
    { text: "Où puis-je acheter un ticket de métro ?", translation: "Nereden metro bileti satın alabilirim?", pronunciation: "u püi-jö aş-te un ti-ke dö me-tro" },
    { text: "Il y a un distributeur automatique à la station.", translation: "İstasyonda otomatik bir makine (biletmatik) var.", pronunciation: "i-lya un dis-tri-bü-tör o-to-ma-tik a la sta-syon" },
    { text: "Je suis perdu, pouvez-vous me montrer sur la carte ?", translation: "Kayboldum, haritada bana gösterebilir misiniz?", pronunciation: "jö süi per-dü, pu-ve vu mö mon-tre sür la kart" },
    { text: "Bien sûr, nous sommes ici et vous devez aller là-bas.", translation: "Tabii ki, biz buradayız ve siz oraya gitmelisiniz.", pronunciation: "byan sür, nu som i-si e vu dö-ve a-le la-ba" },
    { text: "À quelle heure passe le dernier train ce soir ?", translation: "Bu akşam son tren saat kaçta geçiyor?", pronunciation: "a kel ör pas lö der-nye tran sö suar" },
    { text: "Le dernier train part à minuit précis.", translation: "Son tren tam gece yarısında kalkıyor.", pronunciation: "lö der-nye tran par a mi-nüi pre-si" }
  ]
};

const unit372Speaking: UnitSpeakingFrB1 = {
  unitId: 372,
  title: "Spor ve Aktiviteler (Le Sport et Les Activités Physiques)",
  exercises: [
    { text: "Quel sport pratiquez-vous régulièrement ?", translation: "Düzenli olarak hangi sporu yapıyorsunuz?", pronunciation: "kel spor pra-ti-ke vu re-gü-lyer-man" },
    { text: "Je fais de la course à pied tous les matins.", translation: "Her sabah koşu yapıyorum.", pronunciation: "jö fe dö la kurs a pye tu le ma-tan" },
    { text: "Avez-vous vu le match à la télévision hier soir ?", translation: "Dün akşam maçı televizyonda izlediniz mi?", pronunciation: "a-ve vu vü lö maç a la te-le-viz-yon yer suar" },
    { text: "Oui, c'était un match incroyable, notre équipe a gagné.", translation: "Evet, inanılmaz bir maçtı, takımımız kazandı.", pronunciation: "ui, se-te un maç an-krua-yabl, notr e-kip a gan-ye" },
    { text: "Je voudrais m'inscrire à la salle de sport.", translation: "Spor salonuna kaydolmak istiyorum.", pronunciation: "jö vu-dre mans-krir a la sal dö spor" },
    { text: "Les cours collectifs sont inclus dans l'abonnement.", translation: "Grup dersleri aboneliğe dahildir.", pronunciation: "le kur ko-lek-tif son an-klü dan la-bon-man" },
    { text: "Ne forcez pas trop si vous ressentez une douleur.", translation: "Bir ağrı hissederseniz fazla zorlamayın.", pronunciation: "nö for-se pa tro si vu rö-san-te ün du-lör" },
    { text: "Est-ce que tu sais nager le papillon ?", translation: "Kelebek stili yüzmeyi biliyor musun?", pronunciation: "es kö tü se na-je lö pa-pi-yon" },
    { text: "Le sport collectif nous apprend l'esprit d'équipe.", translation: "Takım sporu bize takım ruhunu öğretir.", pronunciation: "lö spor ko-lek-tif nuz a-pran les-pri de-kip" },
    { text: "Il faut s'hydrater pendant l'effort physique.", translation: "Fiziksel aktivite sırasında su içmek gerekir.", pronunciation: "il fo sid-ra-te pan-dan le-for fi-zik" }
  ]
};

export function getFrB1SpeakingForUnit(unitId: number): SpeakingExerciseFrB1[] {
  const idMapping: { [key: number]: UnitSpeakingFrB1 } = {
    361: unit361Speaking,
    362: unit362Speaking,
    363: unit363Speaking,
    364: unit364Speaking,
    365: unit365Speaking,
    366: unit366Speaking,
    367: unit367Speaking,
    368: unit368Speaking,
    369: unit369Speaking,
    370: unit370Speaking,
    371: unit371Speaking,
    372: unit372Speaking
  };
  return idMapping[unitId]?.exercises || unit361Speaking.exercises;
}
