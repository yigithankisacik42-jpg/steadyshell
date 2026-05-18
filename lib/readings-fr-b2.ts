import { UnitReading } from "./readings";

const unit391Reading: UnitReading = {
  unitId: 391,
  title: "La Mondialisation et l'Identité Culturelle",
  language: "Fransızca",
  level: "B2",
  story: {
    text: "De nos jours, la mondialisation influence presque tous les aspects de notre quotidien. Les flux économiques et culturels se croisent constamment d'un bout à l'autre de la planète. Alors que certains y voient une formidable opportunité d'échange et d'enrichissement mutuel, d'autres craignent l'homogénéisation des cultures et la perte des traditions locales. En fin de compte, l'enjeu crucial de notre siècle réside dans la capacité à s'ouvrir sur le monde tout en préservant son héritage unique.",
    translation: "Bugünlerde, küreselleşme günlük hayatımızın neredeyse her alanını etkiliyor. Ekonomik ve kültürel akışlar gezegenin bir ucundan diğerine sürekli olarak kesişiyor. Bazıları bunu harika bir değişim ve karşılıklı zenginleşme fırsatı olarak görürken, diğerleri kültürlerin tek tipleşmesinden ve yerel geleneklerin kaybolmasından korkuyor. Sonuç olarak, yüzyılımızın en kritik meselesi, benzersiz mirasını korurken dünyaya açılabilme yeteneğinde yatmaktadır."
  },
  vocabulary: [
    { word: "La mondialisation", meaning: "Küreselleşme" },
    { word: "Le flux", meaning: "Akış" },
    { word: "Craindre", meaning: "Korkmak, endişe etmek" },
    { word: "L'enrichissement (m)", meaning: "Zenginleşme" },
    { word: "L'héritage (m)", meaning: "Miras" }
  ],
  questions: [
    {
      id: 1,
      question: "Quel est l'impact de la mondialisation selon le texte ?",
      options: ["Elle n'a aucun impact", "Elle influence presque tous les aspects de notre quotidien", "Elle ne touche que l'économie", "Elle détruit toutes les langues"],
      correctAnswer: "Elle influence presque tous les aspects de notre quotidien"
    },
    {
      id: 2,
      question: "Que craignent certaines personnes face à la mondialisation ?",
      options: ["La baisse des prix", "La hausse des températures", "L'homogénéisation des cultures et la perte des traditions", "Le manque de technologies"],
      correctAnswer: "L'homogénéisation des cultures et la perte des traditions"
    }
  ]
};

const unit392Reading: UnitReading = {
  unitId: 392,
  title: "Le Défi de la Sürdürülebilirlik",
  language: "Fransızca",
  level: "B2",
  story: {
    text: "Le développement durable n'est plus une simple option, mais une nécessité impérieuse. Face aux changements climatiques sans précédent, les sociétés modernes doivent repenser leurs modèles de production et de consommation. Adopter des technologies propres, réduire le gaspillage alimentaire et investir massivement dans les énergies renouvelables constituent les piliers d'un avenir viable pour les générations futures.",
    translation: "Sürdürülebilir kalkınma artık sadece bir seçenek değil, zorunlu bir ihtiyaçtır. Benzeri görülmemiş iklim değişiklikleri karşısında modern toplumlar, üretim ve tüketim modellerini yeniden düşünmek zorundadır. Temiz teknolojileri benimsemek, gıda israfını azaltmak ve yenilenebilir enerjilere yoğun şekilde yatırım yapmak, gelecek nesiller için yaşanabilir bir geleceğin temel direklerini oluşturmaktadır."
  },
  vocabulary: [
    { word: "Le développement durable", meaning: "Sürdürülebilir kalkınma" },
    { word: "Impérieuse", meaning: "Zorunlu, kaçınılmaz" },
    { word: "Le gaspillage", meaning: "İsraf" },
    { word: "Viable", meaning: "Yaşanabilir, sürdürülebilir" }
  ],
  questions: [
    {
      id: 1,
      question: "Qu'est-ce que le développement durable selon le texte ?",
      options: ["Un projet facultatif", "Une nécessité impérieuse", "Une théorie scientifique obsolète", "Une invention récente"],
      correctAnswer: "Une nécessité impérieuse"
    }
  ]
};

const unit393Reading: UnitReading = {
  unitId: 393,
  title: "L'essor de l'Intelligence Artificielle",
  language: "Fransızca",
  level: "B2",
  story: {
    text: "L'intelligence artificielle transforme en profondeur notre relation au travail et à l'information. En automatisant des tâches complexes, elle libère du temps pour la créativité et la prise de décision stratégique. Cependant, cette révolution technologique impose d'établir des normes éthiques strictes afin d'éviter la désinformation et de protéger la vie privée des utilisateurs.",
    translation: "Yapay zeka, çalışma ve bilgiyle olan ilişkimizi derinden dönüştürüyor. Karmaşık görevleri otomatikleştirerek, yaratıcılık ve stratejik karar alma için zaman açıyor. Ancak bu teknolojik devrim, dezenformasyonu önlemek ve kullanıcıların özel hayatını korumak için sıkı etik kuralların belirlenmesini zorunlu kılmaktadır."
  },
  vocabulary: [
    { word: "L'intelligence artificielle", meaning: "Yapay zeka" },
    { word: "En profondeur", meaning: "Derinden, kapsamlı bir şekilde" },
    { word: "Automatisant", meaning: "Otomatikleştirerek" },
    { word: "La vie privée", meaning: "Özel hayat" }
  ],
  questions: [
    {
      id: 1,
      question: "Quel avantage l'IA apporte-t-elle selon le texte ?",
      options: ["Elle augmente la bureaucratie", "Elle libère du temps pour la créativité", "Elle remplace le cerveau humain", "Elle supprime l'art"],
      correctAnswer: "Elle libère du temps pour la créativité"
    }
  ]
};

// Generik B2 readings data for units 394-420 to ensure dynamic loadability without errors
const unit394Reading: UnitReading = { unitId: 394, title: "Genetik Mühendisliği Okuma", language: "Fransızca", level: "B2", story: { text: "Le génie génétique est en pleine expansion.", translation: "Genetik mühendisliği hızla genişliyor." }, vocabulary: [], questions: [] };
const unit395Reading: UnitReading = { unitId: 395, title: "Modern Sanat Okuma", language: "Fransızca", level: "B2", story: { text: "L'art contemporain propose de nouvelles formes.", translation: "Çağdaş sanat yeni formlar sunuyor." }, vocabulary: [], questions: [] };
const unit396Reading: UnitReading = { unitId: 396, title: "Klasik Edebiyat Okuma", language: "Fransızca", level: "B2", story: { text: "Les classiques littéraires nous instruisent.", translation: "Edebi klasikler bize rehberlik eder." }, vocabulary: [], questions: [] };
const unit397Reading: UnitReading = { unitId: 397, title: "Felsefi Akımlar Okuma", language: "Fransızca", level: "B2", story: { text: "La philosophie examine l'existence humaine.", translation: "Felsefe insan varoluşunu inceler." }, vocabulary: [], questions: [] };
const unit398Reading: UnitReading = { unitId: 398, title: "Psikoloji Okuma", language: "Fransızca", level: "B2", story: { text: "La psychologie moderne étudie le comportement.", translation: "Modern psikoloji davranışı inceler." }, vocabulary: [], questions: [] };
const unit399Reading: UnitReading = { unitId: 399, title: "Sosyoloji Okuma", language: "Fransızca", level: "B2", story: { text: "La sociologie analyse la société.", translation: "Sosyoloji toplumu analiz eder." }, vocabulary: [], questions: [] };
const unit400Reading: UnitReading = { unitId: 400, title: "Uluslararası İlişkiler Okuma", language: "Fransızca", level: "B2", story: { text: "Les relations internationales sont complexes.", translation: "Uluslararası ilişkiler karmaşıktır." }, vocabulary: [], questions: [] };
const unit401Reading: UnitReading = { unitId: 401, title: "Diplomasi Dili Okuma", language: "Fransızca", level: "B2", story: { text: "La diplomatie évite les conflits.", translation: "Diplomasi çatışmaları önler." }, vocabulary: [], questions: [] };
const unit402Reading: UnitReading = { unitId: 402, title: "Küresel Ekonomi Okuma", language: "Fransızca", level: "B2", story: { text: "L'économie mondiale fait face à de grands défis.", translation: "Dünya ekonomisi büyük zorluklarla karşı karşıya." }, vocabulary: [], questions: [] };
const unit403Reading: UnitReading = { unitId: 403, title: "Kripto Paralar Okuma", language: "Fransızca", level: "B2", story: { text: "Les actifs numériques modifient la finance.", translation: "Dijital varlıklar finansı değiştiriyor." }, vocabulary: [], questions: [] };
const unit404Reading: UnitReading = { unitId: 404, title: "İklim Politikaları Okuma", language: "Fransızca", level: "B2", story: { text: "Les accords climat guident les nations.", translation: "İklim anlaşmaları uluslara rehberlik ediyor." }, vocabulary: [], questions: [] };
const unit405Reading: UnitReading = { unitId: 405, title: "Yenilenebilir Enerji Okuma", language: "Fransızca", level: "B2", story: { text: "L'énergie verte est notre avenir.", translation: "Yeşil enerji geleceğimizdir." }, vocabulary: [], questions: [] };
const unit406Reading: UnitReading = { unitId: 406, title: "Eğitim Reformu Okuma", language: "Fransızca", level: "B2", story: { text: "Les nouvelles méthodes éducatives sont requises.", translation: "Yeni eğitim yöntemleri gerekiyor." }, vocabulary: [], questions: [] };
const unit407Reading: UnitReading = { unitId: 407, title: "Uzaktan Çalışma Okuma", language: "Fransızca", level: "B2", story: { text: "Le télétravail change l'organisation.", translation: "Uzaktan çalışma organizasyonu değiştiriyor." }, vocabulary: [], questions: [] };
const unit408Reading: UnitReading = { unitId: 408, title: "Liderlik Okuma", language: "Fransızca", level: "B2", story: { text: "Un leader motive son équipe.", translation: "Bir lider ekibini motive eder." }, vocabulary: [], questions: [] };
const unit409Reading: UnitReading = { unitId: 409, title: "Girişimcilik Okuma", language: "Fransızca", level: "B2", story: { text: "Créer une entreprise demande du courage.", translation: "Şirket kurmak cesaret gerektirir." }, vocabulary: [], questions: [] };
const unit410Reading: UnitReading = { unitId: 410, title: "Medya Manipülasyonu Okuma", language: "Fransızca", level: "B2", story: { text: "Il faut vérifier les sources d'information.", translation: "Bilgi kaynaklarını doğrulamak gerekir." }, vocabulary: [], questions: [] };
const unit411Reading: UnitReading = { unitId: 411, title: "İfade Özgürlüğü Okuma", language: "Fransızca", level: "B2", story: { text: "La libre expression est fondamentale.", translation: "Özgür ifade temeldir." }, vocabulary: [], questions: [] };
const unit412Reading: UnitReading = { unitId: 412, title: "Biyoetik Okuma", language: "Fransızca", level: "B2", story: { text: "La science a besoin de balises éthiques.", translation: "Bilimin etik sınırlara ihtiyacı vardır." }, vocabulary: [], questions: [] };
const unit413Reading: UnitReading = { unitId: 413, title: "Uzay Kolonizasyonu Okuma", language: "Fransızca", level: "B2", story: { text: "Explorer l'espace lointain nous passionne.", translation: "Uzak uzayı keşfetmek bizi heyecanlandırıyor." }, vocabulary: [], questions: [] };
const unit414Reading: UnitReading = { unitId: 414, title: "Geleceğin Şehirleri Okuma", language: "Fransızca", level: "B2", story: { text: "La ville verte de demain se dessine.", translation: "Yarının yeşil şehri tasarlanıyor." }, vocabulary: [], questions: [] };
const unit415Reading: UnitReading = { unitId: 415, title: "Sanal Gerçeklik Okuma", language: "Fransızca", level: "B2", story: { text: "Le monde virtuel devient de plus en plus réel.", translation: "Sanal dünya giderek daha gerçekçi hale geliyor." }, vocabulary: [], questions: [] };
const unit416Reading: UnitReading = { unitId: 416, title: "Kuantum Çağı Okuma", language: "Fransızca", level: "B2", story: { text: "La révolution quantique a commencé.", translation: "Kuantum devrimi başladı." }, vocabulary: [], questions: [] };
const unit417Reading: UnitReading = { unitId: 417, title: "Nörobilim Okuma", language: "Fransızca", level: "B2", story: { text: "Le cerveau humain livre ses secrets.", translation: "İnsan beyni sırlarını açığa çıkarıyor." }, vocabulary: [], questions: [] };
const unit418Reading: UnitReading = { unitId: 418, title: "Kültürel Miras Okuma", language: "Fransızca", level: "B2", story: { text: "Notre patrimoine commun est inestimable.", translation: "Ortak mirasımız paha biçilemezdir." }, vocabulary: [], questions: [] };
const unit419Reading: UnitReading = { unitId: 419, title: "Dilin Evrimi Okuma", language: "Fransızca", level: "B2", story: { text: "Le langage s'adapte à la modernité.", translation: "Dil modernliğe uyum sağlar." }, vocabulary: [], questions: [] };
const unit420Reading: UnitReading = { unitId: 420, title: "B2 Genel Tekrar Okuma", language: "Fransızca", level: "B2", story: { text: "Nous avons parcouru tout le niveau B2.", translation: "B2 seviyesinin tamamını geride bıraktık." }, vocabulary: [], questions: [] };

export function getFrB2ReadingForUnit(unitId: number): UnitReading {
  const readingMapping: { [key: number]: UnitReading } = {
    391: unit391Reading,
    392: unit392Reading,
    393: unit393Reading,
    394: unit394Reading,
    395: unit395Reading,
    396: unit396Reading,
    397: unit397Reading,
    398: unit398Reading,
    399: unit399Reading,
    400: unit400Reading,
    401: unit401Reading,
    402: unit402Reading,
    403: unit403Reading,
    404: unit404Reading,
    405: unit405Reading,
    406: unit406Reading,
    407: unit407Reading,
    408: unit408Reading,
    409: unit409Reading,
    410: unit410Reading,
    411: unit411Reading,
    412: unit412Reading,
    413: unit413Reading,
    414: unit414Reading,
    415: unit415Reading,
    416: unit416Reading,
    417: unit417Reading,
    418: unit418Reading,
    419: unit419Reading,
    420: unit420Reading
  };
  return readingMapping[unitId] || unit391Reading;
}
