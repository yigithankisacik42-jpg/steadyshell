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

const unit373Speaking: UnitSpeakingFrB1 = {
  unitId: 373,
  title: "Seyahat Kültürü",
  exercises: [
    { text: "Quel est le meilleur conseil pour respecter la culture locale ?", translation: "Yerel kültüre saygı göstermek için en iyi tavsiye nedir?", pronunciation: "kel e lö me-yör kon-sey pur res-pek-te la kül-tür lo-kal" },
    { text: "Il faut apprendre à saluer correctement.", translation: "Doğru şekilde selam vermeyi öğrenmek gerekir.", pronunciation: "il fo a-pran-dr a sa-lü-e ko-rek-te-man" },
    { text: "Je me renseigne sur les coutumes avant de partir.", translation: "Yola çıkmadan önce gelenekler hakkında bilgi alıyorum.", pronunciation: "jö mö ran-sen-ny sur le ku-tüm a-van dö par-tir" },
    { text: "Dans ce pays, on ne donne pas de pourboire.", translation: "Bu ülkede bahşiş verilmez.", pronunciation: "dan sö pei, on nö don pa dö pur-buar" },
    { text: "Je préfère manger dans des restaurants locaux.", translation: "Yerel restoranlarda yemeyi tercih ederim.", pronunciation: "jö pre-fer man-je dan de res-to-ran lo-ko" },
    { text: "Les habitants sont très accueillants.", translation: "Yerel halk çok misafirperverdir.", pronunciation: "le za-bi-tan son tre za-kö-yan" },
    { text: "Je m'adapte aux horaires et aux règles.", translation: "Saatlere ve kurallara uyum sağlarım.", pronunciation: "jö ma-dapt o zo-rer e o regl" },
    { text: "Tu dois éviter de parler trop fort dans les lieux sacrés.", translation: "Kutsal yerlerde çok yüksek sesle konuşmaktan kaçınmalısın.", pronunciation: "tü dua za-vi-te dö par-le tro for dan le lyö sa-kre" },
    { text: "Nous avons assisté à une fête traditionnelle.", translation: "Geleneksel bir festivale katıldık.", pronunciation: "nu za-von a-si-ste a ün fet tra-di-syo-nel" },
    { text: "Voyager, c'est découvrir et respecter.", translation: "Seyahat etmek, keşfetmek ve saygı göstermektir.", pronunciation: "vua-ya-je, se de-ku-vrir e res-pek-te" }
  ]
};

const unit374Speaking: UnitSpeakingFrB1 = {
  unitId: 374,
  title: "Farklı Kültürler",
  exercises: [
    { text: "Quelles sont les différences culturelles qui vous surprennent ?", translation: "Sizi şaşırtan kültürel farklar nelerdir?", pronunciation: "kel son le di-fe-rans kül-tü-rel ki vu sür-pran" },
    { text: "Dans mon pays, on dîne assez tôt.", translation: "Benim ülkemde akşam yemeği oldukça erken yenir.", pronunciation: "dan mon pei, on din a-se to" },
    { text: "Chez nous, on salue avec une poignée de main.", translation: "Bizde el sıkışarak selamlaşılır.", pronunciation: "şe nu, on sa-lü a-vek ün po-nye dö men" },
    { text: "La ponctualité est très appréciée dans certaines cultures.", translation: "Bazı kültürlerde dakiklik çok takdir edilir.", pronunciation: "la ponk-tü-a-li-te e tre za-pre-si-ye dan ser-ten kül-tür" },
    { text: "Il faut garder l'esprit ouvert face aux différences.", translation: "Farklılıklara karşı açık fikirli olmak gerekir.", pronunciation: "il fo gar-de les-pri u-ver fas o di-fe-rans" },
    { text: "J'évite les stéréotypes quand je voyage.", translation: "Seyahat ederken kalıp yargılardan kaçınırım.", pronunciation: "jev-it le ste-re-o-tip kan jö vua-yaj" },
    { text: "Les traditions culinaires racontent l'histoire d'un peuple.", translation: "Geleneksel mutfaklar bir halkın tarihini anlatır.", pronunciation: "le tra-di-syon kü-li-ner ra-kont lis-tuar dön pö-pl" },
    { text: "Je respecte les croyances, même si elles sont différentes.", translation: "Farklı olsalar bile inançlara saygı duyarım.", pronunciation: "jö res-pekt le krua-yans, mem si el son di-fe-rant" },
    { text: "Le dialogue interculturel est essentiel.", translation: "Kültürler arası diyalog çok önemlidir.", pronunciation: "lö di-a-log an-ter-kül-tü-rel e e-san-syel" },
    { text: "En voyage, on apprend à s'adapter.", translation: "Seyahatte uyum sağlamayı öğreniriz.", pronunciation: "an vua-yaj, on a-pran a sa-dap-te" }
  ]
};

const unit375Speaking: UnitSpeakingFrB1 = {
  unitId: 375,
  title: "Sanat ve Edebiyat",
  exercises: [
    { text: "Quel est ton genre de livre préféré ?", translation: "En sevdiğin kitap türü nedir?", pronunciation: "kel e ton janr dö livr pre-fe-re" },
    { text: "J'adore les romans historiques.", translation: "Tarihi romanları çok severim.", pronunciation: "ja-dor le ro-man is-to-rik" },
    { text: "Tu es déjà allé au musée d'art moderne ?", translation: "Modern sanat müzesine hiç gittin mi?", pronunciation: "tü e de-ja a-le o mü-ze dar mo-dern" },
    { text: "Oui, l'exposition était magnifique.", translation: "Evet, sergi harikaydı.", pronunciation: "ui, leks-po-zi-syon e-te ma-ni-fik" },
    { text: "Quel écrivain français aimes-tu ?", translation: "Hangi Fransız yazarı seviyorsun?", pronunciation: "kel e-kri-van fran-se em-tü" },
    { text: "J'aime beaucoup Victor Hugo.", translation: "Victor Hugo'yu çok severim.", pronunciation: "jem bo-ku vik-tor ü-go" },
    { text: "Tu préfères lire ou regarder une pièce de théâtre ?", translation: "Okumayı mı yoksa bir tiyatro oyunu izlemeyi mi tercih edersin?", pronunciation: "tü pre-fer lir u rögar-de ün pyes dö te-atr" },
    { text: "Je préfère lire, mais j'aime aussi le théâtre.", translation: "Okumayı tercih ederim ama tiyatroyu da severim.", pronunciation: "jö pre-fer lir, me jöm o-si lö te-atr" },
    { text: "Qu'est-ce qui t'inspire pour écrire ?", translation: "Yazmak için sana ne ilham verir?", pronunciation: "kes-ki tin-spi-r pur e-krir" },
    { text: "Les voyages et la musique m'inspirent.", translation: "Seyahatler ve müzik bana ilham verir.", pronunciation: "le vua-yaj e la mü-zik man-spi-r" }
  ]
};

const unit376Speaking: UnitSpeakingFrB1 = {
  unitId: 376,
  title: "Tarihi Olaylar",
  exercises: [
    { text: "Quel événement historique t'intéresse le plus ?", translation: "Seni en çok hangi tarihi olay ilgilendiriyor?", pronunciation: "kel e-ve-ne-man is-to-rik tan-te-res lö plü" },
    { text: "La Révolution française me fascine.", translation: "Fransız Devrimi beni büyülüyor.", pronunciation: "la re-vo-lü-syon fran-ses mö fa-sin" },
    { text: "Tu as déjà visité un musée d'histoire ?", translation: "Hiç bir tarih müzesini ziyaret ettin mi?", pronunciation: "tü a de-ja vi-zi-te ün mü-ze dis-tuar" },
    { text: "Oui, j'y suis allé l'année dernière.", translation: "Evet, geçen yıl gittim.", pronunciation: "ui, ji süi a-le la-ne der-nyer" },
    { text: "Qu'est-ce que tu as appris là-bas ?", translation: "Orada ne öğrendin?", pronunciation: "kes-kö tü a a-pri la-ba" },
    { text: "J'ai appris l'histoire de la ville.", translation: "Şehrin tarihini öğrendim.", pronunciation: "je a-pri lis-tuar dö la vil" },
    { text: "Pourquoi la bataille est-elle importante ?", translation: "Bu muharebe neden önemli?", pronunciation: "pur-kua la ba-tay e-tel an-por-tant" },
    { text: "Parce qu'elle a changé le cours de l'histoire.", translation: "Çünkü tarihin seyrini değiştirdi.", pronunciation: "parskö el a şan-je lö kur dölis-tuar" },
    { text: "Tu te souviens d'une date marquante ?", translation: "Önemli bir tarihi hatırlıyor musun?", pronunciation: "tü tö su-vyen dün dat mar-kant" },
    { text: "Oui, la proclamation de l'indépendance.", translation: "Evet, bağımsızlığın ilanı.", pronunciation: "ui, la pro-kla-ma-syon döl-lan-de-pan-dans" }
  ]
};

const unit377Speaking: UnitSpeakingFrB1 = {
  unitId: 377,
  title: "Ünlü Şahsiyetler",
  exercises: [
    { text: "Qui est ton personnage historique préféré ?", translation: "En sevdiğin tarihi şahsiyet kim?", pronunciation: "ki e ton per-so-naj is-to-rik pre-fe-re" },
    { text: "J'admire une grande scientifique.", translation: "Büyük bir bilim insanına hayranım.", pronunciation: "ja-dmir ün gran si-yan-ti-fik" },
    { text: "Pourquoi l'admires-tu ?", translation: "Neden ona hayransın?", pronunciation: "pur-kua la-dmir tü" },
    { text: "Parce qu'elle a changé le monde.", translation: "Çünkü dünyayı değiştirdi.", pronunciation: "parskö el a şan-je lö mond" },
    { text: "As-tu lu sa biographie ?", translation: "Biyografisini okudun mu?", pronunciation: "a tü lü sa bi-o-gra-fi" },
    { text: "Oui, son parcours est incroyable.", translation: "Evet, hayat yolu inanılmaz.", pronunciation: "ui, son par-kur e an-krua-yabl" },
    { text: "Il a reçu des prix internationaux.", translation: "Uluslararası ödüller aldı.", pronunciation: "il a re-sü de pri an-ter-na-syo-no" },
    { text: "Son discours m'a beaucoup touché.", translation: "Konuşması beni çok etkiledi.", pronunciation: "son dis-kur ma bo-ku tu-şe" },
    { text: "Quel talent te plaît le plus chez lui ?", translation: "Onun hangi yeteneği seni en çok etkiliyor?", pronunciation: "kel ta-lan tö ple lö plü şe lü-i" },
    { text: "Sa créativité et son courage.", translation: "Yaratıcılığı ve cesareti.", pronunciation: "sa kre-a-ti-vi-te e son ku-raj" }
  ]
};

const unit378Speaking: UnitSpeakingFrB1 = {
  unitId: 378,
  title: "Bilimsel Keşifler",
  exercises: [
    { text: "Quelle découverte scientifique te fascine ?", translation: "Hangi bilimsel keşif seni büyülüyor?", pronunciation: "kel de-ku-vert si-yan-ti-fik te fa-sin" },
    { text: "La découverte des vaccins est incroyable.", translation: "Aşıların keşfi inanılmaz.", pronunciation: "la de-ku-vert de vak-san e an-krua-yabl" },
    { text: "Tu as déjà visité un laboratoire ?", translation: "Hiç bir laboratuvarı ziyaret ettin mi?", pronunciation: "tü a de-ja vi-zi-te ün la-bo-ra-tuar" },
    { text: "Oui, j'ai vu des microscopes et des expériences.", translation: "Evet, mikroskoplar ve deneyler gördüm.", pronunciation: "ui, je vü de mik-ro-skop e deks-pe-ryans" },
    { text: "Comment une hypothèse est-elle vérifiée ?", translation: "Bir hipotez nasıl doğrulanır?", pronunciation: "ko-man ün i-po-tez e-tel ve-ri-fi-e" },
    { text: "On la teste avec des expériences.", translation: "Onu deneylerle test ederiz.", pronunciation: "on la test a-vek deks-pe-ryans" },
    { text: "Quel équipement est nécessaire en science ?", translation: "Bilimde hangi ekipman gerekir?", pronunciation: "kel e-ki-pman e ne-se-ser an si-yans" },
    { text: "Le télescope permet d'observer les étoiles.", translation: "Teleskop yıldızları gözlemlemeyi sağlar.", pronunciation: "lö te-les-kop per-met dob-ser-ve le ze-tual" },
    { text: "Pourquoi la preuve est-elle importante ?", translation: "Kanıt neden önemlidir?", pronunciation: "pur-kua la pröv e-tel an-por-tant" },
    { text: "Parce qu'elle confirme les résultats.", translation: "Çünkü sonuçları doğrular.", pronunciation: "parskö el kon-firm le re-zül-ta" }
  ]
};

const unit379Speaking: UnitSpeakingFrB1 = {
  unitId: 379,
  title: "Uzay Araştırmaları",
  exercises: [
    { text: "Qu'est-ce qui t'intéresse dans l'espace ?", translation: "Uzayda seni ne ilgilendiriyor?", pronunciation: "kes-ki tan-te-res dan les-pas" },
    { text: "Les étoiles et les galaxies me passionnent.", translation: "Yıldızlar ve galaksiler beni büyülüyor.", pronunciation: "le ze-tual e le ga-lak-si me pa-syo-n" },
    { text: "Tu voudrais devenir astronaute ?", translation: "Astronot olmak ister misin?", pronunciation: "tü vu-dre dö-vnir as-tro-not" },
    { text: "Oui, j'aimerais participer à une mission.", translation: "Evet, bir misyona katılmak isterim.", pronunciation: "ui, je-me-re par-ti-si-pe a ün mi-syon" },
    { text: "Où se trouve la station spatiale ?", translation: "Uzay istasyonu nerede?", pronunciation: "u sö truv la sta-syon spa-syal" },
    { text: "Elle est en orbite autour de la Terre.", translation: "Dünya'nın etrafında yörüngededir.", pronunciation: "el e an or-bit o-tur dö la ter" },
    { text: "Pourquoi le télescope est important ?", translation: "Teleskop neden önemli?", pronunciation: "pur-kua lö te-les-kop e an-por-tan" },
    { text: "Parce qu'il permet d'observer l'univers.", translation: "Çünkü evreni gözlemlemeyi sağlar.", pronunciation: "parskil per-met dob-ser-ve lü-ni-ver" },
    { text: "La gravité est-elle différente sur la Lune ?", translation: "Yerçekimi Ay'da farklı mı?", pronunciation: "la gra-vi-te e-tel di-fe-rant sür la lün" },
    { text: "Oui, elle est beaucoup plus faible.", translation: "Evet, çok daha zayıf.", pronunciation: "ui, el e bo-ku plü febl" }
  ]
};

const unit380Speaking: UnitSpeakingFrB1 = {
  unitId: 380,
  title: "Moda Trendleri",
  exercises: [
    { text: "Quel style préfères-tu ?", translation: "Hangi tarzı tercih ediyorsun?", pronunciation: "kel stil pre-fer tü" },
    { text: "Je préfère un style simple et élégant.", translation: "Sade ve şık bir tarzı tercih ederim.", pronunciation: "jö pre-fer an stil san-pl e e-le-gan" },
    { text: "Cette tenue te va très bien.", translation: "Bu kombin sana çok yakışıyor.", pronunciation: "set tönü tö va tre byan" },
    { text: "Merci, je l'ai trouvée en solde.", translation: "Teşekkürler, indirimde buldum.", pronunciation: "mer-si, jö le tru-ve an sold" },
    { text: "Tu peux m'aider à choisir la couleur ?", translation: "Rengi seçmeme yardım eder misin?", pronunciation: "tü pö me-de a şua-zir la ku-lör" },
    { text: "Le bleu te va mieux que le rouge.", translation: "Mavi sana kırmızıdan daha çok yakışıyor.", pronunciation: "lö blö tö va myö kö lö ruj" },
    { text: "Est-ce que je peux essayer cette veste ?", translation: "Bu ceketi deneyebilir miyim?", pronunciation: "es-kö jö pö e-se-ye set vest" },
    { text: "Oui, la cabine d'essayage est là-bas.", translation: "Evet, deneme kabini orada.", pronunciation: "ui, la ka-bin de-se-yaj e la-ba" },
    { text: "Les accessoires complètent ton look.", translation: "Aksesuarlar görünümünü tamamlar.", pronunciation: "lez ak-se-suar kom-plet ton luk" },
    { text: "Je cherche une tenue pour la soirée.", translation: "Akşam için bir kombin arıyorum.", pronunciation: "jö şerş ün tönü pur la sua-re" }
  ]
};

const unit381Speaking: UnitSpeakingFrB1 = {
  unitId: 381,
  title: "Tüketim Alışkanlıkları",
  exercises: [
    { text: "Tu compares les prix avant d'acheter ?", translation: "Satın almadan önce fiyatları karşılaştırıyor musun?", pronunciation: "tü kom-par le pri a-van da-şe-te" },
    { text: "Oui, je regarde toujours les promotions.", translation: "Evet, her zaman kampanyalara bakarım.", pronunciation: "ui, jö rö-gard tu-jur le pro-mo-syon" },
    { text: "Tu fais souvent des achats en ligne ?", translation: "Sık sık online alışveriş yapar mısın?", pronunciation: "tü fe su-van de za-şa an liny" },
    { text: "Oui, c'est pratique et rapide.", translation: "Evet, pratik ve hızlı.", pronunciation: "ui, se pra-tik e ra-pid" },
    { text: "Quel est ton budget pour ce mois ?", translation: "Bu ay için bütçen nedir?", pronunciation: "kel e ton büj-e pur sö mua" },
    { text: "Je dois économiser un peu.", translation: "Biraz tasarruf etmeliyim.", pronunciation: "jö doa ze-ko-no-mi-ze an pö" },
    { text: "Tu préfères payer en espèces ou par carte ?", translation: "Nakit mi kartla mı ödemeyi tercih edersin?", pronunciation: "tü pre-fer pe-ye an es-pes u par kart" },
    { text: "Je paie par carte bancaire.", translation: "Banka kartıyla öderim.", pronunciation: "jö pe par kart ban-ker" },
    { text: "La livraison est-elle gratuite ?", translation: "Teslimat ücretsiz mi?", pronunciation: "la li-vre-zon e-tel gra-tü-it" },
    { text: "Oui, à partir de cinquante euros.", translation: "Evet, elli eurodan itibaren.", pronunciation: "ui, a par-tir dö san-kant ö-ro" }
  ]
};

const unit382Speaking: UnitSpeakingFrB1 = {
  unitId: 382,
  title: "Reklamcılık",
  exercises: [
    { text: "Tu as vu cette publicité ?", translation: "Bu reklamı gördün mü?", pronunciation: "tü a vü set pü-bli-si-te" },
    { text: "Oui, le slogan est vraiment accrocheur.", translation: "Evet, slogan gerçekten akılda kalıcı.", pronunciation: "ui, lö slo-gan e vre-man a-kro-şör" },
    { text: "Quelle est la cible de cette campagne ?", translation: "Bu kampanyanın hedef kitlesi nedir?", pronunciation: "kel e la sibl dö set kam-pan" },
    { text: "Les jeunes adultes, je pense.", translation: "Genç yetişkinler, bence.", pronunciation: "le jön o-dült, jö pans" },
    { text: "Tu préfères la publicité en ligne ou à la télé ?", translation: "Online reklamı mı yoksa TV reklamını mı tercih edersin?", pronunciation: "tü pre-fer la pü-bli-si-te an liny u a la te-le" },
    { text: "Je préfère en ligne, c'est plus ciblé.", translation: "Ben online olanı tercih ederim, daha hedeflidir.", pronunciation: "jö pre-fer an liny, se plü si-ble" },
    { text: "Le logo te plaît ?", translation: "Logo hoşuna gidiyor mu?", pronunciation: "lö lo-go tö ple" },
    { text: "Oui, il est simple et moderne.", translation: "Evet, basit ve modern.", pronunciation: "ui, il e san-pl e mo-dern" },
    { text: "Ils ont un budget publicitaire élevé.", translation: "Yüksek bir reklam bütçeleri var.", pronunciation: "il zon an büj-e pü-bli-si-ter e-le-ve" },
    { text: "On dirait une grande marque.", translation: "Büyük bir markaya benziyor.", pronunciation: "on di-re ün gran mark" }
  ]
};

const unit383Speaking: UnitSpeakingFrB1 = {
  unitId: 383,
  title: "Haber MedyasÄ±",
  exercises: [
    { text: "Tu as vu l'article sur la ville ?", translation: "Şehirle ilgili makaleyi gördün mü?", pronunciation: "tü a vü lar-ti-kl sür la vil" },
    { text: "Oui, le journaliste a fait un bon reportage.", translation: "Evet, gazeteci iyi bir haber yaptı.", pronunciation: "ui, lö jur-na-list a fe an bon rö-por-taj" },
    { text: "Le titre est accrocheur, mais un peu exagéré.", translation: "Başlık dikkat çekici ama biraz abartılı.", pronunciation: "lö titr e a-kro-şör me an pö eg-za-je-re" },
    { text: "C'est vrai, il faut vérifier les faits.", translation: "Doğru, gerçekleri doğrulamak gerekir.", pronunciation: "se vre, il fo ve-ri-fi le fe" },
    { text: "Tu préfères lire les nouvelles en ligne ou sur papier ?", translation: "Haberleri online mı yoksa kağıtta mı okumayı tercih edersin?", pronunciation: "tü pre-fer li-r le nu-vel an liny u sür pa-pye" },
    { text: "En ligne, c'est plus rapide.", translation: "Online, daha hızlı.", pronunciation: "an liny, se plü ra-pid" },
    { text: "La chaîne diffuse l'interview ce soir.", translation: "Kanal bu akşam röportajı yayınlıyor.", pronunciation: "la şen di-füz lan-ter-vyü sö suar" },
    { text: "Je vais regarder le direct.", translation: "Canlı yayını izleyeceğim.", pronunciation: "jö ve rög-ar-de lö di-rekt" },
    { text: "Les médias parlent beaucoup de ce débat.", translation: "Medyalar bu tartışmadan çok bahsediyor.", pronunciation: "le me-dya parl bo-ku dö sö de-ba" },
    { text: "Espérons que l'information soit correcte.", translation: "Bilginin doğru olmasını umalım.", pronunciation: "es-pe-ron kö lan-for-ma-syon sua ko-rekt" }
  ]
};

const unit384Speaking: UnitSpeakingFrB1 = {
  unitId: 384,
  title: "Politik Sistemler",
  exercises: [
    { text: "Tu as suivi le débat hier soir ?", translation: "Dün akşam tartışmayı takip ettin mi?", pronunciation: "tü a süi-vi lö de-ba yer suar" },
    { text: "Oui, les candidats ont parlé de la réforme.", translation: "Evet, adaylar reformdan bahsetti.", pronunciation: "ui, le kan-di-da on par-le dö la re-form" },
    { text: "Qui soutiens-tu aux élections ?", translation: "Seçimlerde kimi destekliyorsun?", pronunciation: "ki su-tyen tü o-zek-syon" },
    { text: "Je suis encore indécis, je compare les programmes.", translation: "Hâlâ kararsızım, programları karşılaştırıyorum.", pronunciation: "jö sü an-kor an-de-si, jö kom-par le pro-gram" },
    { text: "Le président propose une nouvelle loi.", translation: "Başkan yeni bir yasa öneriyor.", pronunciation: "lö pre-zi-dan pro-poz ün nu-vel loa" },
    { text: "L'opposition n'est pas d'accord.", translation: "Muhalefet aynı fikirde değil.", pronunciation: "lo-po-zi-syon ne pa da-kor" },
    { text: "La campagne électorale devient intense.", translation: "Seçim kampanyası yoğunlaşıyor.", pronunciation: "la kam-pan-y e-lek-to-ral dö-vyen an-tans" },
    { text: "Oui, tout le monde parle de politique.", translation: "Evet, herkes siyasetten bahsediyor.", pronunciation: "ui, tu lö mond parl dö po-li-tik" },
    { text: "Tu vas voter dimanche ?", translation: "Pazar günü oy kullanacak mısın?", pronunciation: "tü va vo-te di-manş" },
    { text: "Oui, c'est important pour la démocratie.", translation: "Evet, demokrasi için önemli.", pronunciation: "ui, se an-por-tan pur la de-mo-kra-si" }
  ]
};

const unit385Speaking: UnitSpeakingFrB1 = {
  unitId: 385,
  title: "Hukuk ve Adalet (Droit et Justice)",
  exercises: [
    { text: "Avez-vous compris vos droits ?", translation: "Haklarınızı anladınız mı?", pronunciation: "a-ve vu kon-pri vo drua" },
    { text: "Je demande à voir mon avocat.", translation: "Avukatımı görmek istiyorum.", pronunciation: "jö dö-mand a vuar mon a-vo-ka" },
    { text: "Le juge a prononcé sa sentence.", translation: "Hakim kararını (cezasını) açıkladı.", pronunciation: "lö jüj a pro-non-se sa san-tans" },
    { text: "Le témoin a juré de dire la vérité.", translation: "Tanık gerçeği söylemeye yemin etti.", pronunciation: "lö te-muan a jü-re dö dir la ve-ri-te" },
    { text: "Elle a porté plainte au commissariat.", translation: "Karakola gidip suç duyurusunda bulundu.", pronunciation: "el a por-te plant o ko-mi-sa-rya" },
    { text: "L'accusé a été reconnu innocent.", translation: "Sanığın masum olduğuna karar verildi.", pronunciation: "la-kü-ze a e-te rö-ko-nü i-no-san" },
    { text: "La police a ouvert une enquête.", translation: "Polis bir soruşturma başlattı.", pronunciation: "la po-lis a u-vert ün an-ket" },
    { text: "Le respect de la loi est obligatoire.", translation: "Kanuna saygı zorunludur.", pronunciation: "lö res-pekt dö la lua e-to-bli-ga-tuar" },
    { text: "La justice doit être égale pour tous.", translation: "Adalet herkes için eşit olmalıdır.", pronunciation: "la jüs-tis dua-tetr e-gal pur tus" },
    { text: "Il a été condamné à payer une amende.", translation: "Para cezası ödemeye mahkum edildi.", pronunciation: "il a e-te kon-da-ne a pe-ye ün a-mand" }
  ]
};

const unit386Speaking: UnitSpeakingFrB1 = {
    unitId: 386,
    title: "İnsan Hakları",
    exercises: [
        { text: "Tout le monde a droit à la liberté.", translation: "Herkesin özgürlük hakkı vardır.", pronunciation: "tu lö mond a dro-a a la li-ber-te" },
        { text: "Il faut lutter contre la discrimination.", translation: "Ayrımcılığa karşı mücadele edilmeli.", pronunciation: "il fo lü-te kontr la dis-kri-mi-na-syon" },
        { text: "Nous manifestons pour nos droits.", translation: "Haklarımız için gösteri yapıyoruz.", pronunciation: "nu ma-ni-fes-ton pur no dro-a" },
        { text: "L'égalité est une valeur fondamentale.", translation: "Eşitlik temel bir değerdir.", pronunciation: "le-ga-li-te e tün va-lör fon-da-man-tal" },
        { text: "Ils demandent plus de justice sociale.", translation: "Daha fazla sosyal adalet talep ediyorlar.", pronunciation: "il dö-mand plüs dö jüs-tis so-syal" },
        { text: "Chaque citoyen a le droit de voter.", translation: "Her vatandaşın oy kullanma hakkı vardır.", pronunciation: "şak si-twa-yen a lö dro-a dö vo-te" },
        { text: "Le racisme n'a pas sa place dans notre société.", translation: "Irkçılığın toplumumuzda yeri yoktur.", pronunciation: "lö ra-sizm na pa sa plas dan notr so-sye-te" },
        { text: "La liberté d'expression est menacée.", translation: "İfade özgürlüğü tehdit altında.", pronunciation: "la li-ber-te dek-spres-yon e mö-na-se" },
        { text: "La Déclaration universelle protège les droits humains.", translation: "Evrensel Beyanname insan haklarını korur.", pronunciation: "la de-kla-ra-syon ü-ni-ver-sel pro-tej le dro-a ü-men" },
        { text: "Il est interdit de torturer un être humain.", translation: "Bir insana işkence yapmak yasaktır.", pronunciation: "il e en-ter-di dö tor-tü-re un etr ü-men" }
    ]
};

const unit387Speaking: UnitSpeakingFrB1 = {
    unitId: 387,
    title: "Gönüllülük",
    exercises: [
        { text: "Je suis bénévole dans une association.", translation: "Bir dernekte gönüllüyüm.", pronunciation: "jö süi be-ne-vol dan zün a-so-sya-syon" },
        { text: "C'est important d'aider les autres.", translation: "Başkalarına yardım etmek önemlidir.", pronunciation: "se ten-por-tan de-de le zotr" },
        { text: "Nous organisons une distribution de vêtements.", translation: "Bir kıyafet dağıtımı düzenliyoruz.", pronunciation: "nu zor-ga-ni-zon zün dis-tri-bü-syon dö vet-man" },
        { text: "Ils ont fait un don pour cette cause.", translation: "Bu dava için bağış yaptılar.", pronunciation: "il zon fe un don pur set koz" },
        { text: "Le bénévolat demande beaucoup d'énergie.", translation: "Gönüllülük çok enerji gerektirir.", pronunciation: "lö be-ne-vo-la dö-mand bo-ku de-ner-ji" },
        { text: "Tu veux participer à notre prochaine action ?", translation: "Bir sonraki faaliyetimize katılmak ister misin?", pronunciation: "tü vö par-ti-si-pe a notr pro-şen ak-syon" },
        { text: "La collecte de fonds a été un grand succès.", translation: "Bağış toplama büyük bir başarı oldu.", pronunciation: "la ko-lekt dö fon a e-te un gran sük-se" },
        { text: "Chaque don compte, même le plus petit.", translation: "Her bağış önemlidir, en küçük olanı bile.", pronunciation: "şak don kont mem lö plü pö-ti" },
        { text: "La banque alimentaire distribue des repas tous les jours.", translation: "Gıda bankası her gün yemek dağıtıyor.", pronunciation: "la bank a-li-man-ter dis-tri-bü de rö-pa tu le jur" },
        { text: "Le don du sang sauve des vies humaines.", translation: "Kan bağışı insan hayatlarını kurtarır.", pronunciation: "lö don dü san sov de vi ü-men" }
    ]
};

const unit388Speaking: UnitSpeakingFrB1 = {
    unitId: 388,
    title: "Göç ve Mülteciler",
    exercises: [
        { text: "Les réfugiés ont besoin de notre aide.", translation: "Mültecilerin yardımımıza ihtiyacı var.", pronunciation: "le re-fü-je on bö-zwen dö notr ed" },
        { text: "L'intégration est un processus long et difficile.", translation: "Uyum uzun ve zor bir süreçtir.", pronunciation: "len-te-gra-syon e tun pro-se-süs lon e di-fi-sil" },
        { text: "Ils ont traversé la frontière pour fuir la guerre.", translation: "Savaştan kaçmak için sınırı geçtiler.", pronunciation: "il zon tra-ver-se la fron-tyər pur füir la ger" },
        { text: "La diversité culturelle est une richesse.", translation: "Kültürel çeşitlilik bir zenginliktir.", pronunciation: "la di-ver-si-te kül-tü-rel e tün ri-şes" },
        { text: "Le pays d'accueil leur offre des cours de langue.", translation: "Ev sahibi ülke onlara dil kursları sunuyor.", pronunciation: "lö pe-i da-köy lör ofr de kur dö lang" },
        { text: "Il a obtenu son permis de séjour après deux ans.", translation: "İki yıl sonra oturma iznini aldı.", pronunciation: "il a ob-tö-nü son per-mi dö se-jur a-pre dö zan" },
        { text: "La xénophobie est un problème grave dans certains pays.", translation: "Yabancı düşmanlığı bazı ülkelerde ciddi bir sorundur.", pronunciation: "la gze-no-fo-bi e tun pro-blem grav dan ser-ten pe-i" },
        { text: "Sa langue maternelle est l'arabe, mais il parle aussi français.", translation: "Ana dili Arapça ama Fransızca da konuşuyor.", pronunciation: "sa lang ma-ter-nel e la-rab me il parl o-si fran-se" },
        { text: "Beaucoup de jeunes émigrent pour trouver un meilleur avenir.", translation: "Birçok genç daha iyi bir gelecek bulmak için göç ediyor.", pronunciation: "bo-ku dö jön e-mi-gr pur tru-ve un me-yör a-vö-nir" },
        { text: "La nostalgie du pays d'origine ne disparaît jamais.", translation: "Memleket özlemi asla kaybolmaz.", pronunciation: "la nos-tal-ji dü pe-i do-ri-jin nö dis-pa-re ja-me" }
    ]
};

const unit389Speaking: UnitSpeakingFrB1 = {
    unitId: 389,
    title: "Ekonomik Sorunlar",
    exercises: [
        { text: "L'inflation est très élevée cette année.", translation: "Bu yıl enflasyon çok yüksek.", pronunciation: "lan-fla-syon e tre ze-le-ve se-ta-ne" },
        { text: "Le taux de chômage a baissé d'un point.", translation: "İşsizlik oranı bir puan düştü.", pronunciation: "lö to dö şo-maj a be-se dun pwan" },
        { text: "Il faut investir dans les énergies renouvelables.", translation: "Yenilenebilir enerjilere yatırım yapmak gerekir.", pronunciation: "il fo an-ves-tir dan le-ze-ner-ji rö-nu-ve-labl" },
        { text: "La crise économique touche de nombreux secteurs.", translation: "Ekonomik kriz birçok sektörü etkiliyor.", pronunciation: "la kriz e-ko-no-mik tuş dö non-brö sek-tör" },
        { text: "La croissance du PIB est de deux pour cent.", translation: "GSYİH büyümesi yüzde iki.", pronunciation: "la krua-sans dü pe-i-be e dö dö pur san" },
        { text: "Le pouvoir d'achat diminue à cause de la hausse des prix.", translation: "Fiyat artışı nedeniyle alım gücü azalıyor.", pronunciation: "lö pu-vuar da-şa di-mi-nü a koz dö la os de pri" },
        { text: "Les impôts servent à financer l'éducation publique.", translation: "Vergiler kamu eğitimini finanse etmeye yarar.", pronunciation: "le zan-po ser-va fi-nan-se le-dü-ka-syon pü-blik" },
        { text: "L'entreprise a fait faillite le mois dernier.", translation: "Şirket geçen ay iflas etti.", pronunciation: "lan-tre-priz a fe fa-yit lö mua der-nye" },
        { text: "La mondialisation favorise les échanges culturels.", translation: "Küreselleşme kültürel değişimleri teşvik eder.", pronunciation: "la mon-dya-li-za-syon fa-vo-riz le ze-şanj kül-tü-rel" },
        { text: "Il est prudent de mettre de l'argent de côté pour l'avenir.", translation: "Gelecek için kenara para koymak ihtiyatlıdır (akıllıcadır).", pronunciation: "i-le prü-dan dö metr dö lar-jan dö ko-te pur la-vö-nir" }
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
    372: unit372Speaking,
    373: unit373Speaking,
    374: unit374Speaking,
    375: unit375Speaking,
    376: unit376Speaking,
    377: unit377Speaking,
    378: unit378Speaking,
    379: unit379Speaking,
    380: unit380Speaking,
    381: unit381Speaking,
    382: unit382Speaking,
    383: unit383Speaking,
    384: unit384Speaking,
    385: unit385Speaking,
    386: unit386Speaking,
    387: unit387Speaking,
    388: unit388Speaking,
    389: unit389Speaking
  };
  return idMapping[unitId]?.exercises || unit361Speaking.exercises;
}
