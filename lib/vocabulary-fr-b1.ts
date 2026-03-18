export interface FrenchB1VocabularyItem {
    word: string;
    meaning: string;
    pronunciation: string;
    example: string;
    exampleTranslation: string;
}

export interface UnitVocabularyFrB1 {
    unitId: number;
    title: string;
    words: FrenchB1VocabularyItem[];
}

const unit361Vocab: UnitVocabularyFrB1 = {
    unitId: 361,
    title: "İş Görüşmesi",
    words: [
        { word: "L'entretien d'embauche", meaning: "İş görüşmesi", pronunciation: "lan-trö-tyan dam-boş", example: "J'ai un entretien d'embauche demain.", exampleTranslation: "Yarın bir iş görüşmem var." },
        { word: "Le candidat", meaning: "Aday", pronunciation: "lö kan-di-da", example: "Le candidat est très compétent.", exampleTranslation: "Aday çok yetkin." },
        { word: "Le recruteur", meaning: "İşe alan kişi", pronunciation: "lö rö-krü-tör", example: "Le recruteur pose beaucoup de questions.", exampleTranslation: "İşe alan kişi çok soru soruyor." },
        { word: "L'expérience professionnelle", meaning: "İş tecrübesi", pronunciation: "leks-pe-riyans pro-fes-yonel", example: "J'ai cinq ans d'expérience professionnelle.", exampleTranslation: "Beş yıllık iş tecrübem var." },
        { word: "Le curriculum vitæ (CV)", meaning: "Özgeçmiş", pronunciation: "lö kü-ri-kü-lom vi-te", example: "Voici mon CV.", exampleTranslation: "İşte özgeçmişim." },
        { word: "La lettre de motivation", meaning: "Niyet mektubu", pronunciation: "la letr dö mo-ti-vas-yon", example: "Il faut joindre une lettre de motivation.", exampleTranslation: "Bir niyet mektubu eklemek gerekiyor." },
        { word: "La compétence", meaning: "Yetenek/Beceri", pronunciation: "la kom-pe-tans", example: "Quelles sont vos compétences principales?", exampleTranslation: "Temel becerileriniz nelerdir?" },
        { word: "Embaucher", meaning: "İşe almak", pronunciation: "am-bo-şe", example: "L'entreprise veut m'embaucher.", exampleTranslation: "Şirket beni işe almak istiyor." },
        { word: "Le poste", meaning: "Pozisyon/Makam", pronunciation: "lö post", example: "Le poste m'intéresse beaucoup.", exampleTranslation: "Pozisyon çok ilgimi çekiyor." },
        { word: "Le salaire", meaning: "Maaş", pronunciation: "lö sa-ler", example: "Quelles sont vos prétentions de salaire?", exampleTranslation: "Maaş beklentileriniz nelerdir?" },
        { word: "Le point fort", meaning: "Güçlü yön", pronunciation: "lö pwan for", example: "Mon point fort est la communication.", exampleTranslation: "Güçlü yönüm iletişimdir." },
        { word: "Le défaut", meaning: "Zayıf yön/Kusur", pronunciation: "lö de-fo", example: "Un de mes défauts est le perfectionnisme.", exampleTranslation: "Kusurlarımdan biri mükemmeliyetçiliktir." },
        { word: "L'atout", meaning: "Avantaj/Koz", pronunciation: "la-tu", example: "C'est un atout pour ce poste.", exampleTranslation: "Bu pozisyon için bir avantaj." },
        { word: "Le contrat", meaning: "Sözleşme", pronunciation: "lö kon-tra", example: "J'ai signé le contrat.", exampleTranslation: "Sözleşmeyi imzaladım." },
        { word: "L'entreprise", meaning: "Şirket/Firma", pronunciation: "lan-trö-priz", example: "C'est une grande entreprise internationale.", exampleTranslation: "Bu büyük, uluslararası bir şirket." },
        { word: "À plein temps", meaning: "Tam zamanlı", pronunciation: "a plan tan", example: "Je cherche un travail à plein temps.", exampleTranslation: "Tam zamanlı bir iş arıyorum." },
        { word: "À temps partiel", meaning: "Yarı zamanlı", pronunciation: "a tan par-syel", example: "Il travaille à temps partiel.", exampleTranslation: "Yarı zamanlı çalışıyor." },
        { word: "Postuler", meaning: "Başvurmak", pronunciation: "pos-tü-le", example: "J'aimerais postuler à ce poste.", exampleTranslation: "Bu pozisyona başvurmak isterim." },
        { word: "La candidature", meaning: "Başvuru", pronunciation: "la kan-di-da-tür", example: "Votre candidature a été retenue.", exampleTranslation: "Başvurunuz kabul edildi." },
        { word: "Le profil", meaning: "Profil", pronunciation: "lö pro-fil", example: "Votre profil correspond à nos besoins.", exampleTranslation: "Profiliniz ihtiyaçlarımıza uyuyor." },
        { word: "L'offre d'emploi", meaning: "İş ilanı", pronunciation: "lofr dam-plua", example: "J'ai vu votre offre d'emploi sur internet.", exampleTranslation: "İş ilanınızı internette gördüm." },
        { word: "La formation", meaning: "Eğitim", pronunciation: "la for-mas-yon", example: "J'ai une formation en marketing.", exampleTranslation: "Pazarlama eğitimim var." },
        { word: "L'équipe", meaning: "Takım", pronunciation: "le-kip", example: "J'aime travailler en équipe.", exampleTranslation: "Takım halinde çalışmayı severim." },
        { word: "Gérer", meaning: "Yönetmek", pronunciation: "je-re", example: "Je peux gérer une équipe de cinq personnes.", exampleTranslation: "Beş kişilik bir ekibi yönetebilirim." },
        { word: "Convaincre", meaning: "İkna etmek", pronunciation: "kon-vankr", example: "Il a su convaincre le jury.", exampleTranslation: "Jüriyi ikna etmeyi başardı." },
        { word: "La ponctualité", meaning: "Dakiklik", pronunciation: "la ponk-tü-a-li-te", example: "La ponctualité est très importante ici.", exampleTranslation: "Burada dakiklik çok önemlidir." },
        { word: "Ambitieux(euse)", meaning: "Hırslı/Azimli", pronunciation: "am-bi-syö / am-bi-syöz", example: "Je suis une personne ambitieuse.", exampleTranslation: "Ben hırslı biriyim." },
        { word: "Dynamique", meaning: "Dinamik", pronunciation: "di-na-mik", example: "Il est jeune et dynamique.", exampleTranslation: "O genç ve dinamik." },
        { word: "Organisé(e)", meaning: "Düzenli", pronunciation: "or-ga-ni-ze", example: "Je suis très organisé dans mon travail.", exampleTranslation: "İşimde çok düzenliyim." },
        { word: "L'objectif", meaning: "Hedef", pronunciation: "lob-jek-tif", example: "Mon principal objectif est de réussir.", exampleTranslation: "Temel hedefim başarmaktır." }
    ]
};

const unit362Vocab: UnitVocabularyFrB1 = {
    unitId: 362,
    title: "L'environnement et l'écologie (Çevre ve Ekoloji)",
    words: [
        { word: "L'environnement", meaning: "Çevre", pronunciation: "lan-vi-ron-man", example: "Il faut protéger l'environnement.", exampleTranslation: "Çevreyi korumak gerekir." },
        { word: "La nature", meaning: "Doğa", pronunciation: "la na-tur", example: "J'aime me promener dans la nature.", exampleTranslation: "Doğada yürümeyi severim." },
        { word: "L'écologie", meaning: "Ekoloji", pronunciation: "lé-ko-lo-ji", example: "L'écologie est une priorité.", exampleTranslation: "Ekoloji bir önceliktir." },
        { word: "Le climat", meaning: "İklim", pronunciation: "lö kli-ma", example: "Le climat change rapidement.", exampleTranslation: "İklim hızla değişiyor." },
        { word: "Le réchauffement climatique", meaning: "Küresel ısınma", pronunciation: "lö ré-şof-man kli-ma-tik", example: "Le réchauffement climatique nous menace.", exampleTranslation: "Küresel ısınma bizi tehdit ediyor." },
        { word: "La pollution", meaning: "Kirlilik", pronunciation: "la po-lüs-yon", example: "La pollution de l'air est grave dans les villes.", exampleTranslation: "Şehirlerde hava kirliliği ciddidir." },
        { word: "Les déchets", meaning: "Atıklar/Çöpler", pronunciation: "le de-şe", example: "Triez vos déchets.", exampleTranslation: "Atıklarınızı ayırın." },
        { word: "Le recyclage", meaning: "Geri dönüşüm", pronunciation: "lö rö-si-klaj", example: "Le recyclage sauve la planète.", exampleTranslation: "Geri dönüşüm gezegeni kurtarır." },
        { word: "Renouvelable", meaning: "Yenilenebilir", pronunciation: "rö-nuv-labl", example: "L'énergie solaire est renouvelable.", exampleTranslation: "Güneş enerjisi yenilenebilirdir." },
        { word: "Protéger", meaning: "Korumak", pronunciation: "pro-te-je", example: "Nous devons protéger les animaux sauvages.", exampleTranslation: "Vahşi hayvanları korumalıyız." },
        { word: "Détruire", meaning: "Yok etmek", pronunciation: "dé-tru-ir", example: "Ne détruisez pas la forêt.", exampleTranslation: "Ormanı yok etmeyin." },
        { word: "Polluer", meaning: "Kirletmek", pronunciation: "po-lü-e", example: "Les voitures polluent l'air.", exampleTranslation: "Arabalar havayı kirletir." },
        { word: "Recycler", meaning: "Geri dönüştürmek", pronunciation: "rö-si-kle", example: "Je recycle le papier et le verre.", exampleTranslation: "Kağıdı ve camı geri dönüştürüyorum." },
        { word: "Trier", meaning: "Ayırmak (Çöp)", pronunciation: "tri-ye", example: "Il faut trier le plastique.", exampleTranslation: "Plastiği ayırmak gerekir." },
        { word: "L'effet de serre", meaning: "Sera etkisi", pronunciation: "le-fe dö ser", example: "L'effet de serre augmente la température.", exampleTranslation: "Sera etkisi sıcaklığı artırır." },
        { word: "La planète", meaning: "Gezegen", pronunciation: "la pla-net", example: "Sauvons notre planète.", exampleTranslation: "Gezegenimizi kurtaralım." },
        { word: "La biodiversité", meaning: "Biyoçeşitlilik", pronunciation: "la bi-yo-di-ver-si-te", example: "La biodiversité est en danger.", exampleTranslation: "Biyoçeşitlilik tehlikede." },
        { word: "L'émission", meaning: "Emisyon / Salınım", pronunciation: "le-mis-yon", example: "Réduire les émissions de carbone.", exampleTranslation: "Karbon emisyonlarını azaltmak." },
        { word: "Durable", meaning: "Sürdürülebilir", pronunciation: "dü-rabl", example: "Le développement durable est important.", exampleTranslation: "Sürdürülebilir kalkınma önemlidir." },
        { word: "Écologique", meaning: "Ekolojik / Çevreci", pronunciation: "e-ko-lo-jik", example: "J'utilise un sac écologique.", exampleTranslation: "Ekolojik bir çanta kullanıyorum." },
        { word: "Gaspiller", meaning: "İsraf etmek", pronunciation: "gas-pi-ye", example: "Ne gaspillez pas l'eau potable.", exampleTranslation: "İçme suyunu israf etmeyin." },
        { word: "Le gaspillage", meaning: "İsraf", pronunciation: "lö gas-pi-yaj", example: "Le gaspillage alimentaire est triste.", exampleTranslation: "Gıda israfı üzücüdür." },
        { word: "Sauver", meaning: "Kurtarmak", pronunciation: "so-ve", example: "Il faut sauver les océans.", exampleTranslation: "Okyanusları kurtarmak lazım." },
        { word: "La déforestation", meaning: "Ormansızlaşma", pronunciation: "la de-fo-res-tas-yon", example: "La déforestation détruit les habitats.", exampleTranslation: "Ormansızlaşma habitatları yok ediyor." },
        { word: "La faune", meaning: "Yaban hayatı (Hayvanlar)", pronunciation: "la fon", example: "La faune sous-marine est magnifique.", exampleTranslation: "Sualtı yaban hayatı muhteşemdir." },
        { word: "La flore", meaning: "Bitki örtüsü", pronunciation: "la flor", example: "Il faut protéger la flore locale.", exampleTranslation: "Yerel bitki örtüsünü korumak gerekir." },
        { word: "La poubelle", meaning: "Çöp kutusu", pronunciation: "la pu-bel", example: "Jetez ça à la poubelle.", exampleTranslation: "Bunu çöpe atın." },
        { word: "Le plastique", meaning: "Plastik", pronunciation: "lö plas-tik", example: "Le plastique pollue l'océan.", exampleTranslation: "Plastik okyanusu kirletir." },
        { word: "Le verre", meaning: "Cam", pronunciation: "lö ver", example: "La bouteille est en verre.", exampleTranslation: "Şişe camdandır." },
        { word: "Planter", meaning: "Dikmek (Bitki vb.)", pronunciation: "plan-te", example: "Nous allons planter des arbres.", exampleTranslation: "Ağaç dikeceğiz." }
    ]
};

const unit363Vocab: UnitVocabularyFrB1 = {
    unitId: 363,
    title: "Les nouvelles technologies (Yeni Teknolojiler)",
    words: [
        { word: "La technologie", meaning: "Teknoloji", pronunciation: "la tek-no-lo-ji", example: "La technologie évolue vite.", exampleTranslation: "Teknoloji hızlı gelişiyor." },
        { word: "L'ordinateur", meaning: "Bilgisayar", pronunciation: "lor-di-na-tör", example: "J'ai un ordinateur portable.", exampleTranslation: "Bir dizüstü bilgisayarım var." },
        { word: "Le clavier", meaning: "Klavye", pronunciation: "lö kla-vye", example: "Mon clavier est noir.", exampleTranslation: "Klavyem siyahtır." },
        { word: "L'écran", meaning: "Ekran", pronunciation: "le-kran", example: "L'écran est très grand.", exampleTranslation: "Ekran çok büyük." },
        { word: "La souris", meaning: "Fare (Bilgisayar)", pronunciation: "la su-ri", example: "Utilisez la souris pour cliquer.", exampleTranslation: "Tıklamak için fareyi kullanın." },
        { word: "Le logiciel", meaning: "Yazılım", pronunciation: "lö lo-ji-syel", example: "Ce logiciel est gratuit.", exampleTranslation: "Bu yazılım ücretsizdir." },
        { word: "Le réseau", meaning: "Ağ", pronunciation: "lö re-zo", example: "Le réseau est sécurisé.", exampleTranslation: "Ağ güvenlidir." },
        { word: "La connexion", meaning: "Bağlantı", pronunciation: "la ko-nek-syon", example: "J'ai perdu la connexion.", exampleTranslation: "Bağlantıyı kaybettim." },
        { word: "Le smartphone", meaning: "Akıllı telefon", pronunciation: "lö smar-fon", example: "Il a le dernier smartphone.", exampleTranslation: "Onun son model akıllı telefonu var." },
        { word: "L'application", meaning: "Uygulama", pronunciation: "lap-li-kas-yon", example: "Ouvre cette application.", exampleTranslation: "Bu uygulamayı aç." },
        { word: "Télécharger", meaning: "İndirmek", pronunciation: "te-le-şar-je", example: "Je veux télécharger ce film.", exampleTranslation: "Bu filmi indirmek istiyorum." },
        { word: "Naviguer", meaning: "Gezinmek", pronunciation: "na-vi-ge", example: "Naviguer sur Internet.", exampleTranslation: "İnternette gezinmek." },
        { word: "Cliquer", meaning: "Tıklamak", pronunciation: "kli-ke", example: "Cliquez sur ce lien.", exampleTranslation: "Bu bağlantıya tıklayın." },
        { word: "Sauvegarder", meaning: "Kaydetmek", pronunciation: "sov-gar-de", example: "N'oublie pas de sauvegarder.", exampleTranslation: "Kaydetmeyi unutma." },
        { word: "Supprimer", meaning: "Silmek", pronunciation: "sü-pri-me", example: "J'ai supprimé l'erreur.", exampleTranslation: "Hatayı sildim." },
        { word: "Imprimer", meaning: "Yazdırmak", pronunciation: "am-pri-me", example: "Je dois imprimer cette page.", exampleTranslation: "Bu sayfayı yazdırmam lazım." },
        { word: "Le mot de passe", meaning: "Şifre", pronunciation: "lö mo dö pas", example: "Quel est le mot de passe ?", exampleTranslation: "Şifre nedir?" },
        { word: "L'utilisateur", meaning: "Kullanıcı", pronunciation: "lü-ti-li-za-tör", example: "Nom d'utilisateur invalide.", exampleTranslation: "Geçersiz kullanıcı adı." },
        { word: "Virtuel", meaning: "Sanal", pronunciation: "vir-tü-el", example: "La réalité virtuelle.", exampleTranslation: "Sanal gerçeklik." },
        { word: "Numérique", meaning: "Dijital", pronunciation: "nü-me-rik", example: "L'âge numérique.", exampleTranslation: "Dijital çağ." },
        { word: "La donnée", meaning: "Veri", pronunciation: "la do-ne", example: "Les données sont cryptées.", exampleTranslation: "Veriler şifrelenmiştir." },
        { word: "Le fichier", meaning: "Dosya", pronunciation: "lö fi-şye", example: "Où est le fichier PDF ?", exampleTranslation: "PDF dosyası nerede?" },
        { word: "Le dossier", meaning: "Klasör", pronunciation: "lö do-sye", example: "J'ai créé un nouveau dossier.", exampleTranslation: "Yeni bir klasör oluşturdum." },
        { word: "Pirater", meaning: "Hacklemek", pronunciation: "pi-ra-te", example: "Son compte a été piraté.", exampleTranslation: "Hesabı hacklendi." },
        { word: "Le pirate", meaning: "Hacker / Korsan", pronunciation: "lö pi-rat", example: "Un pirate informatique.", exampleTranslation: "Bir bilgisayar korsanı (hacker)." },
        { word: "La mise à jour", meaning: "Güncelleme", pronunciation: "la miz a jur", example: "Faites la mise à jour.", exampleTranslation: "Güncellemeyi yapın." },
        { word: "L'intelligence artificielle", meaning: "Yapay zeka", pronunciation: "lan-te-li-jans ar-ti-fi-syel", example: "L'intelligence artificielle est partout.", exampleTranslation: "Yapay zeka her yerdedir." },
        { word: "L'algorithme", meaning: "Algoritma", pronunciation: "lal-go-ritm", example: "L'algorithme de ce site.", exampleTranslation: "Bu sitenin algoritması." },
        { word: "Le lien", meaning: "Bağlantı (Link)", pronunciation: "lö lyan", example: "Cliquez sur le lien ci-dessous.", exampleTranslation: "Aşağıdaki bağlantıya (linke) tıklayın." },
        { word: "En ligne", meaning: "Çevrimiçi (Online)", pronunciation: "an liny", example: "Je joue en ligne.", exampleTranslation: "Çevrimiçi oynuyorum." }
    ]
};

const unit364Vocab: UnitVocabularyFrB1 = {
    unitId: 364,
    title: "L'art et la culture (Sanat ve Kültür)",
    words: [
        { word: "L'art", meaning: "Sanat", pronunciation: "lar", example: "L'art est très important pour moi.", exampleTranslation: "Sanat benim için çok önemlidir." },
        { word: "La culture", meaning: "Kültür", pronunciation: "la kül-tür", example: "J'aime découvrir de nouvelles cultures.", exampleTranslation: "Yeni kültürler keşfetmeyi severim." },
        { word: "Le musée", meaning: "Müze", pronunciation: "lö mü-ze", example: "Nous allons visiter le musée du Louvre.", exampleTranslation: "Louvre müzesini ziyaret edeceğiz." },
        { word: "L'exposition", meaning: "Sergi", pronunciation: "leks-po-zis-yon", example: "L'exposition de peinture est magnifique.", exampleTranslation: "Resim sergisi muhteşem." },
        { word: "Le tableau", meaning: "Tablo", pronunciation: "lö tab-lo", example: "C'est un tableau très célèbre.", exampleTranslation: "Bu çok ünlü bir tablodur." },
        { word: "La peinture", meaning: "Resim / Boya", pronunciation: "la pan-tür", example: "J'étudie la peinture italienne.", exampleTranslation: "İtalyan resmi üzerine çalışıyorum." },
        { word: "La sculpture", meaning: "Heykel", pronunciation: "la skül-tür", example: "La sculpture en marbre est lourde.", exampleTranslation: "Mermer heykel ağırdır." },
        { word: "L'artiste", meaning: "Sanatçı", pronunciation: "lar-tist", example: "Cet artiste a beaucoup de talent.", exampleTranslation: "Bu sanatçının çok yeteneği var." },
        { word: "Le peintre", meaning: "Ressam", pronunciation: "lö pantr", example: "Mon peintre préféré est Van Gogh.", exampleTranslation: "En sevdiğim ressam Van Gogh'tur." },
        { word: "Le chef-d'œuvre", meaning: "Başyapıt", pronunciation: "lö şef-dövr", example: "La Joconde est un chef-d'œuvre.", exampleTranslation: "Mona Lisa bir başyapıttır." },
        { word: "Le théâtre", meaning: "Tiyatro", pronunciation: "lö te-atr", example: "J'adore aller au théâtre le soir.", exampleTranslation: "Akşamları tiyatroya gitmeye bayılırım." },
        { word: "La pièce de théâtre", meaning: "Tiyatro oyunu", pronunciation: "la pyes dö te-atr", example: "La pièce de théâtre était amusante.", exampleTranslation: "Tiyatro oyunu eğlenceliydi." },
        { word: "L'acteur", meaning: "Erkek oyuncu", pronunciation: "lak-tör", example: "C'est le meilleur acteur de l'année.", exampleTranslation: "O, yılın en iyi aktörü." },
        { word: "L'actrice", meaning: "Kadın oyuncu", pronunciation: "lak-tris", example: "L'actrice principale joue très bien.", exampleTranslation: "Başrol aktrisi çok iyi oynuyor." },
        { word: "La scène", meaning: "Sahne", pronunciation: "la sen", example: "Il est monté sur scène.", exampleTranslation: "Sahneye çıktı." },
        { word: "Le cinéma", meaning: "Sinema", pronunciation: "lö si-ne-ma", example: "Le cinéma français est très connu.", exampleTranslation: "Fransız sineması çok ünlüdür." },
        { word: "Le réalisateur", meaning: "Yönetmen", pronunciation: "lö re-a-li-za-tör", example: "Le réalisateur du film est espagnol.", exampleTranslation: "Filmin yönetmeni İspanyol." },
        { word: "Le film", meaning: "Film", pronunciation: "lö film", example: "Ce film est une comédie.", exampleTranslation: "Bu film bir komedi." },
        { word: "Le scénario", meaning: "Senaryo", pronunciation: "lö se-nar-yo", example: "Le scénario est très original.", exampleTranslation: "Senaryo çok orijinal." },
        { word: "La musique", meaning: "Müzik", pronunciation: "la mü-zik", example: "J'écoute de la musique classique.", exampleTranslation: "Klasik müzik dinliyorum." },
        { word: "Le concert", meaning: "Konser", pronunciation: "lö kon-ser", example: "Le concert affiche complet.", exampleTranslation: "Konser tamamen dolu." },
        { word: "Le musicien", meaning: "Müzisyen", pronunciation: "lö mü-zi-syan", example: "Ce musicien est aveugle.", exampleTranslation: "Bu müzisyen kör (görme engelli)." },
        { word: "L'instrument", meaning: "Enstrüman", pronunciation: "lans-trü-man", example: "De quel instrument joues-tu ?", exampleTranslation: "Hangi enstrümanı çalıyorsun?" },
        { word: "La littérature", meaning: "Edebiyat", pronunciation: "la li-te-ra-tür", example: "J'ai étudié la littérature anglaise.", exampleTranslation: "İngiliz edebiyatı okudum." },
        { word: "Le roman", meaning: "Roman", pronunciation: "lö ro-man", example: "C'est un roman d'aventure.", exampleTranslation: "Bu bir macera romanı." },
        { word: "Le poème", meaning: "Şiir", pronunciation: "lö po-em", example: "Il a écrit un poème d'amour.", exampleTranslation: "Bir aşk şiiri yazdı." },
        { word: "L'écrivain", meaning: "Yazar", pronunciation: "le-kri-van", example: "L'écrivain présente son nouveau livre.", exampleTranslation: "Yazar yeni kitabını tanıtıyor." },
        { word: "Le personnage", meaning: "Karakter", pronunciation: "lö per-so-naj", example: "Le personnage principal est courageux.", exampleTranslation: "Ana karakter cesurdur." },
        { word: "Le public", meaning: "Seyirci / Halk", pronunciation: "lö püb-lik", example: "Le public a beaucoup aimé le spectacle.", exampleTranslation: "Halk (seyirci) gösteriyi çok beğendi." },
        { word: "Applaudir", meaning: "Alkışlamak", pronunciation: "ap-lo-dir", example: "Tout le monde a commencé à applaudir.", exampleTranslation: "Herkes alkışlamaya başladı." }
    ]
};

const unit365Vocab: UnitVocabularyFrB1 = {
    unitId: 365,
    title: "Teknoloji ve Toplum",
    words: [
        { word: "L'innovation (f)", meaning: "İnovasyon / Yenilik", example: "L'innovation technologique avance vite.", exampleTranslation: "Teknolojik yenilik hızla ilerliyor.", pronunciation: "li-no-vas-yon" },
        { word: "La robotique", meaning: "Robotik", example: "La robotique crée de nouveaux emplois.", exampleTranslation: "Robotik yeni işler yaratır.", pronunciation: "la ro-bo-tik" },
        { word: "L'intelligence artificielle (f)", meaning: "Yapay zeka", example: "L'intelligence artificielle est très utile.", exampleTranslation: "Yapay zeka çok kullanışlıdır.", pronunciation: "lan-te-li-jans ar-ti-fi-syel" },
        { word: "L'impact (m)", meaning: "Etki", example: "Quel est l'impact de cette technologie ?", exampleTranslation: "Bu teknolojinin etkisi nedir?", pronunciation: "lam-pakt" },
        { word: "Le progrès", meaning: "İlerleme / Gelişim", example: "Le progrès scientifique est important.", exampleTranslation: "Bilimsel ilerleme önemlidir.", pronunciation: "lö pro-gre" },
        { word: "La société", meaning: "Toplum", example: "La technologie change notre société.", exampleTranslation: "Teknoloji toplumumuzu değiştiriyor.", pronunciation: "la so-sye-te" },
        { word: "La donnée", meaning: "Veri", example: "Il faut protéger nos données personnelles.", exampleTranslation: "Kişisel verilerimizi korumalıyız.", pronunciation: "la do-ne" },
        { word: "Numérique", meaning: "Dijital", example: "Nous vivons à l'ère numérique.", exampleTranslation: "Dijital çağda yaşıyoruz.", pronunciation: "nü-me-rik" },
        { word: "L'algorithme (m)", meaning: "Algoritma", example: "L'algorithme analyse vos préférences.", exampleTranslation: "Algoritma tercihlerinizi analiz eder.", pronunciation: "lal-go-ritm" },
        { word: "Automatisé", meaning: "Otomatikleştirilmiş", example: "Ce système est entièrement automatisé.", exampleTranslation: "Bu sistem tamamen otomatikleştirilmiştir.", pronunciation: "o-to-ma-ti-ze" },
        { word: "La vie privée", meaning: "Özel hayat", example: "L'internet menace parfois la vie privée.", exampleTranslation: "İnternet bazen özel hayatı tehdit eder.", pronunciation: "la vi pri-ve" },
        { word: "L'invention (f)", meaning: "İcat / Buluş", example: "L'invention de l'imprimerie a tout changé.", exampleTranslation: "Matbaanın icadı her şeyi değiştirdi.", pronunciation: "lan-vans-yon" },
        { word: "La machine", meaning: "Makine", example: "La machine accomplit le travail rapidement.", exampleTranslation: "Makine işi hızla tamamlar.", pronunciation: "la ma-şin" },
        { word: "Développer", meaning: "Geliştirmek", example: "Nous devons développer de nouveaux outils.", exampleTranslation: "Yeni araçlar geliştirmeliyiz.", pronunciation: "de-vlo-pe" },
        { word: "Remplacer", meaning: "Yerine geçmek / Değiştirmek", example: "Les robots ne peuvent pas remplacer les humains.", exampleTranslation: "Robotlar insanların yerini alamaz.", pronunciation: "ran-pla-se" },
        { word: "Faciliter", meaning: "Kolaylaştırmak", example: "Ces outils vont faciliter notre travail.", exampleTranslation: "Bu araçlar işimizi kolaylaştıracak.", pronunciation: "fa-si-li-te" },
        { word: "Le chercheur / La chercheuse", meaning: "Araştırmacı", example: "Ce chercheur travaille sur l'IA.", exampleTranslation: "Bu araştırmacı yapay zeka üzerinde çalışıyor.", pronunciation: "lö şer-şör" },
        { word: "L'appareil (m)", meaning: "Cihaz", example: "C'est un appareil très moderne.", exampleTranslation: "Bu çok modern bir cihazdır.", pronunciation: "la-pa-rey" },
        { word: "La connexion", meaning: "Bağlantı", example: "La connexion entre ces appareils est rapide.", exampleTranslation: "Bu cihazlar arasındaki bağlantı hızlıdır.", pronunciation: "la ko-nek-syon" },
        { word: "L'avenir (m)", meaning: "Gelecek", example: "L'avenir dépend du progrès technologique.", exampleTranslation: "Gelecek teknolojik ilerlemeye bağlıdır.", pronunciation: "lav-nir" }
    ]
};

const unit366Vocab: UnitVocabularyFrB1 = {
    unitId: 366,
    title: "Sosyal Medya (Réseaux Sociaux)",
    words: [
        { word: "Le réseau social", meaning: "Sosyal medya/ağ", example: "J'utilise ce réseau social tous les jours.", exampleTranslation: "Bu sosyal ağı her gün kullanıyorum.", pronunciation: "lö re-zo so-syal" },
        { word: "Le compte", meaning: "Hesap", example: "J'ai créé un compte sur Instagram.", exampleTranslation: "Instagram'da bir hesap açtım.", pronunciation: "lö kont" },
        { word: "L'abonné(e)", meaning: "Abone / Takipçi", example: "Il a beaucoup d'abonnés.", exampleTranslation: "Onun çok abonesi var.", pronunciation: "la-bo-ne" },
        { word: "Partager", meaning: "Paylaşmak", example: "Je veux partager cette photo.", exampleTranslation: "Bu fotoğrafı paylaşmak istiyorum.", pronunciation: "par-ta-je" },
        { word: "Publier", meaning: "Yayınlamak", example: "Elle a publié un nouvel article.", exampleTranslation: "O yeni bir makale yayınladı.", pronunciation: "püb-li-ye" },
        { word: "Le mot de passe", meaning: "Şifre / Parola", example: "N'oubliez pas votre mot de passe.", exampleTranslation: "Şifrenizi unutmayın.", pronunciation: "lö mo dö pas" },
        { word: "S'inscrire", meaning: "Kaydolmak", example: "Tu dois t'inscrire pour lire la suite.", exampleTranslation: "Devamını okumak için kaydolmalısın.", pronunciation: "san-skrir" },
        { word: "Bloquer", meaning: "Engellemek", example: "J'ai dû bloquer cet utilisateur.", exampleTranslation: "Bu kullanıcıyı engellemek zorunda kaldım.", pronunciation: "blo-ke" },
        { word: "L'influenceur (L'influenceuse)", meaning: "Etkileyici / Fenomen", example: "Ce jeune homme est un grand influenceur.", exampleTranslation: "Bu genç adam büyük bir fenomen.", pronunciation: "lan-flü-an-sör" },
        { word: "Commenter", meaning: "Yorum yapmak", example: "Beaucoup de gens ont commenté ma vidéo.", exampleTranslation: "Birçok insan videoma yorum yaptı.", pronunciation: "ko-man-te" },
        { word: "En ligne", meaning: "Çevrimiçi", example: "Je joue à des jeux en ligne.", exampleTranslation: "Çevrimiçi oyunlar oynuyorum.", pronunciation: "an liny" },
        { word: "Le profil", meaning: "Profil", example: "Change ta photo de profil.", exampleTranslation: "Profil fotoğrafını değiştir.", pronunciation: "lö pro-fil" },
        { word: "Le lien", meaning: "Bağlantı (Link)", example: "Cliquez sur le lien en bas.", exampleTranslation: "Aşağıdaki linke tıklayın.", pronunciation: "lö lyan" },
        { word: "Une notification", meaning: "Bildirim", example: "J'ai reçu une nouvelle notification.", exampleTranslation: "Yeni bir bildirim aldım.", pronunciation: "ün no-ti-fi-kas-yon" },
        { word: "Télécharger", meaning: "İndirmek / Yüklemek", example: "Tu peux télécharger cette application.", exampleTranslation: "Bu uygulamayı indirebilirsin.", pronunciation: "te-le-şar-je" },
        { word: "L'écran (m)", meaning: "Ekran", example: "L'écran de mon téléphone est cassé.", exampleTranslation: "Telefonumun ekranı kırık.", pronunciation: "le-kran" },
        { word: "Le clavier", meaning: "Klavye", example: "Mon clavier est très confortable.", exampleTranslation: "Klavyem çok rahat.", pronunciation: "lö kla-vye" },
        { word: "Taper", meaning: "Yazmak (klavyede)", example: "Elle tape un message rapidement.", exampleTranslation: "O hızla bir mesaj yazıyor.", pronunciation: "ta-pe" },
        { word: "La messagerie", meaning: "Mesajlaşma uygulaması", example: "J'utilise cette messagerie pour mes amis.", exampleTranslation: "Bu mesajlaşma uygulamasını arkadaşlarım için kullanıyorum.", pronunciation: "la me-saj-ri" },
        { word: "Aimer", meaning: "Beğenmek (Like atmak)", example: "N'hésitez pas à aimer la page.", exampleTranslation: "Sayfayı beğenmekten çekinmeyin.", pronunciation: "e-me" }
    ]
};

const unit367Vocab: UnitVocabularyFrB1 = {
    unitId: 367,
    title: "Çevre ve Doğa (L'Environnement et la Nature)",
    words: [
        { word: "L'environnement (m)", meaning: "Çevre", example: "Il faut protéger l'environnement.", exampleTranslation: "Çevreyi korumak gerekir.", pronunciation: "lan-vi-ron-man" },
        { word: "La nature", meaning: "Doğa", example: "J'aime passer du temps dans la nature.", exampleTranslation: "Doğada vakit geçirmeyi severim.", pronunciation: "la na-tür" },
        { word: "Polluer", meaning: "Kirletmek", example: "Les usines polluent l'air.", exampleTranslation: "Fabrikalar havayı kirletir.", pronunciation: "po-lü-e" },
        { word: "La pollution", meaning: "Kirlilik", example: "La pollution de l'eau est un grand problème.", exampleTranslation: "Su kirliliği büyük bir sorundur.", pronunciation: "la po-lüs-yon" },
        { word: "Protéger", meaning: "Korumak", example: "Nous devons protéger notre planète.", exampleTranslation: "Gezegenimizi korumalıyız.", pronunciation: "pro-te-je" },
        { word: "La planète", meaning: "Gezegen", example: "La Terre est notre seule planète.", exampleTranslation: "Dünya bizim tek gezegenimizdir.", pronunciation: "la pla-net" },
        { word: "Le réchauffement climatique", meaning: "Küresel ısınma", example: "Le réchauffement climatique menace les ours polaires.", exampleTranslation: "Küresel ısınma kutup ayılarını tehdit ediyor.", pronunciation: "lö re-şof-man kli-ma-tik" },
        { word: "Le déchet", meaning: "Çöp / Atık", example: "Ne jetez pas vos déchets par terre.", exampleTranslation: "Çöplerinizi yere atmayın.", pronunciation: "lö de-şe" },
        { word: "Recycler", meaning: "Geri dönüştürmek", example: "Il est important de recycler le papier et le plastique.", exampleTranslation: "Kağıt ve plastiği geri dönüştürmek önemlidir.", pronunciation: "rö-sik-le" },
        { word: "La poubelle", meaning: "Çöp kutusu", example: "Mettez les bouteilles dans la poubelle jaune.", exampleTranslation: "Şişeleri sarı çöp kutusuna atın.", pronunciation: "la pu-bel" },
        { word: "L'énergie (f)", meaning: "Enerji", example: "Nous devons utiliser des énergies renouvelables.", exampleTranslation: "Yenilenebilir enerjiler kullanmalıyız.", pronunciation: "le-ner-ji" },
        { word: "L'arbre (m)", meaning: "Ağaç", example: "Ils ont planté un arbre dans le jardin.", exampleTranslation: "Bahçeye bir ağaç diktiler.", pronunciation: "larbr" },
        { word: "La forêt", meaning: "Orman", example: "La forêt amazonienne est très vaste.", exampleTranslation: "Amazon ormanı çok geniştir.", pronunciation: "la fo-re" },
        { word: "Détruire", meaning: "Yok etmek / Yıkmak", example: "Le feu a détruit une grande partie de la forêt.", exampleTranslation: "Yangın ormanın büyük bir bölümünü yok etti.", pronunciation: "de-trü-ir" },
        { word: "Sauver", meaning: "Kurtarmak", example: "Nous pouvons sauver les animaux en danger.", exampleTranslation: "Tehlike altındaki hayvanları kurtarabiliriz.", pronunciation: "so-ve" },
        { word: "Le changement", meaning: "Değişim", example: "Le changement commence par nous-mêmes.", exampleTranslation: "Değişim kendimizden başlar.", pronunciation: "lö şanj-man" },
        { word: "L'espèce (f)", meaning: "Tür (Bitki/Hayvan)", example: "Beaucoup d'espèces sont en voie de disparition.", exampleTranslation: "Birçok tür yok olma tehlikesiyle karşı karşıya.", pronunciation: "les-pes" },
        { word: "L'océan (m)", meaning: "Okyanus", example: "Il y a trop de plastique dans l'océan.", exampleTranslation: "Okyanusta çok fazla plastik var.", pronunciation: "lo-se-an" },
        { word: "Écologique", meaning: "Ekolojik / Çevreci", example: "Elle a acheté une voiture écologique.", exampleTranslation: "O, çevreci bir araba satın aldı.", pronunciation: "e-ko-lo-jik" },
        { word: "La ressource", meaning: "Kaynak", example: "L'eau est une ressource vitale.", exampleTranslation: "Su hayati bir kaynaktır.", pronunciation: "la rö-surs" }
    ]
};

export function getFrB1VocabularyForUnit(unitId: number): FrenchB1VocabularyItem[] {
    const idMapping: { [key: number]: UnitVocabularyFrB1 } = {
        361: unit361Vocab,
        362: unit362Vocab,
        363: unit363Vocab,
        364: unit364Vocab,
        365: unit365Vocab,
        366: unit366Vocab,
        367: unit367Vocab
    };
    return idMapping[unitId]?.words || unit361Vocab.words;
}
