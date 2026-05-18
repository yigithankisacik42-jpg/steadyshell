export interface SpeakingExerciseFrB2 {
  text: string;
  translation: string;
  pronunciation: string;
}

export interface UnitSpeakingFrB2 {
  unitId: number;
  title: string;
  exercises: SpeakingExerciseFrB2[];
}

const unit391Speaking: UnitSpeakingFrB2 = {
  unitId: 391,
  title: "La Mondialisation et l'Identité",
  exercises: [
    { text: "La mondialisation influence notre identité culturelle.", translation: "Küreselleşme kültürel kimliğimizi etkiliyor.", pronunciation: "la mon-dya-li-za-syon an-flü-ans notr i-dan-ti-te kül-tü-rel" },
    { text: "Il faut préserver nos traditions locales.", translation: "Yerel geleneklerimizi korumamız gerekir.", pronunciation: "il fo pre-zer-ve no tra-di-syon lo-kal" }
  ]
};

const unit392Speaking: UnitSpeakingFrB2 = {
  unitId: 392,
  title: "Le Défi de la Durabilité",
  exercises: [
    { text: "Le développement durable est une nécessité absolue.", translation: "Sürdürülebilir kalkınma mutlak bir gerekliliktir.", pronunciation: "lö de-vö-lop-man dü-rabl e tün ne-se-si-te ab-so-lü" }
  ]
};

const unit393Speaking: UnitSpeakingFrB2 = {
  unitId: 393,
  title: "L'essor de l'Intelligence Artificielle",
  exercises: [
    { text: "L'intelligence artificielle transforme nos métiers.", translation: "Yapay zeka mesleklerimizi dönüştürüyor.", pronunciation: "lan-te-li-jans ar-ti-fi-syel trans-form no me-tye" }
  ]
};

// Generik B2 speakings data for units 394-420 to ensure dynamic loadability without errors
const unit394Speaking: UnitSpeakingFrB2 = { unitId: 394, title: "Genetik Mühendisliği Konuşma", exercises: [{ text: "Le génie génétique.", translation: "Genetik mühendisliği.", pronunciation: "lö je-ni je-ne-tik" }] };
const unit395Speaking: UnitSpeakingFrB2 = { unitId: 395, title: "Modern Sanat Konuşma", exercises: [{ text: "L'art contemporain.", translation: "Çağdaş sanat.", pronunciation: "lar kon-tan-po-ran" }] };
const unit396Speaking: UnitSpeakingFrB2 = { unitId: 396, title: "Klasik Edebiyat Konuşma", exercises: [{ text: "La littérature classique.", translation: "Klasik edebiyat.", pronunciation: "la li-te-ra-tür kla-sik" }] };
const unit397Speaking: UnitSpeakingFrB2 = { unitId: 397, title: "Felsefi Akımlar Konuşma", exercises: [{ text: "La philosophie.", translation: "Felsefe.", pronunciation: "la fi-lo-zo-fi" }] };
const unit398Speaking: UnitSpeakingFrB2 = { unitId: 398, title: "Psikoloji Konuşma", exercises: [{ text: "La psychologie moderne.", translation: "Modern psikoloji.", pronunciation: "la psi-ko-lo-ji mo-dern" }] };
const unit399Speaking: UnitSpeakingFrB2 = { unitId: 399, title: "Sosyoloji Konuşma", exercises: [{ text: "La sociologie.", translation: "Sosyoloji.", pronunciation: "la so-syo-lo-ji" }] };
const unit400Speaking: UnitSpeakingFrB2 = { unitId: 400, title: "Uluslararası İlişkiler Konuşma", exercises: [{ text: "Les relations internationales.", translation: "Uluslararası ilişkiler.", pronunciation: "le rö-la-syon an-ter-na-syo-nal" }] };
const unit401Speaking: UnitSpeakingFrB2 = { unitId: 401, title: "Diplomasi Dili Konuşma", exercises: [{ text: "La diplomatie.", translation: "Diplomasi.", pronunciation: "la di-plo-ma-si" }] };
const unit402Speaking: UnitSpeakingFrB2 = { unitId: 402, title: "Küresel Ekonomi Konuşma", exercises: [{ text: "L'économie mondiale.", translation: "Dünya ekonomisi.", pronunciation: "le-ko-no-mi mon-dyal" }] };
const unit403Speaking: UnitSpeakingFrB2 = { unitId: 403, title: "Kripto Paralar Konuşma", exercises: [{ text: "La finance moderne.", translation: "Modern finans.", pronunciation: "la fi-nans mo-dern" }] };
const unit404Speaking: UnitSpeakingFrB2 = { unitId: 404, title: "İklim Politikaları Konuşma", exercises: [{ text: "La politique climatique.", translation: "İklim politikası.", pronunciation: "la po-li-tik kli-ma-tik" }] };
const unit405Speaking: UnitSpeakingFrB2 = { unitId: 405, title: "Yenilenebilir Enerji Konuşma", exercises: [{ text: "L'énergie verte.", translation: "Yeşil enerji.", pronunciation: "le-ner-ji vert" }] };
const unit406Speaking: UnitSpeakingFrB2 = { unitId: 406, title: "Eğitim Reformu Konuşma", exercises: [{ text: "L'éducation moderne.", translation: "Modern eğitim.", pronunciation: "le-dü-ka-syon mo-dern" }] };
const unit407Speaking: UnitSpeakingFrB2 = { unitId: 407, title: "Uzaktan Çalışma Konuşma", exercises: [{ text: "Le télétravail.", translation: "Uzaktan çalışma.", pronunciation: "lö te-le-tra-vay" }] };
const unit408Speaking: UnitSpeakingFrB2 = { unitId: 408, title: "Liderlik Konuşma", exercises: [{ text: "Le leadership.", translation: "Liderlik.", pronunciation: "lö li-der-şip" }] };
const unit409Speaking: UnitSpeakingFrB2 = { unitId: 409, title: "Girişimcilik Konuşma", exercises: [{ text: "L'entrepreneuriat.", translation: "Girişimcilik.", pronunciation: "lan-trö-prö-nö-rya" }] };
const unit410Speaking: UnitSpeakingFrB2 = { unitId: 410, title: "Medya Manipülasyonu Konuşma", exercises: [{ text: "Les médias.", translation: "Medya.", pronunciation: "le me-dya" }] };
const unit411Speaking: UnitSpeakingFrB2 = { unitId: 411, title: "İfade Özgürlüğü Konuşma", exercises: [{ text: "La liberté d'expression.", translation: "İfade özgürlüğü.", pronunciation: "la li-ber-te dek-spres-yon" }] };
const unit412Speaking: UnitSpeakingFrB2 = { unitId: 412, title: "Biyoetik Konuşma", exercises: [{ text: "La bioéthique.", translation: "Biyoetik.", pronunciation: "la bi-o-e-tik" }] };
const unit413Speaking: UnitSpeakingFrB2 = { unitId: 413, title: "Uzay Kolonizasyonu Konuşma", exercises: [{ text: "La conquête spatiale.", translation: "Uzay fethi.", pronunciation: "la kon-ket spa-syal" }] };
const unit414Speaking: UnitSpeakingFrB2 = { unitId: 414, title: "Geleceğin Şehirleri Konuşma", exercises: [{ text: "Les villes vertes.", translation: "Yeşil şehirler.", pronunciation: "le vil vert" }] };
const unit415Speaking: UnitSpeakingFrB2 = { unitId: 415, title: "Sanal Gerçeklik Konuşma", exercises: [{ text: "La réalité virtuelle.", translation: "Sanal gerçeklik.", pronunciation: "la re-a-li-te vir-tü-el" }] };
const unit416Speaking: UnitSpeakingFrB2 = { unitId: 416, title: "Kuantum Çağı Konuşma", exercises: [{ text: "La physique quantique.", translation: "Kuantum fiziği.", pronunciation: "la fi-zik kan-tik" }] };
const unit417Speaking: UnitSpeakingFrB2 = { unitId: 417, title: "Nörobilim Konuşma", exercises: [{ text: "Les neurosciences.", translation: "Nörobilim.", pronunciation: "le nö-ro-si-yans" }] };
const unit418Speaking: UnitSpeakingFrB2 = { unitId: 418, title: "Kültürel Miras Konuşma", exercises: [{ text: "Le patrimoine culturel.", translation: "Kültürel miras.", pronunciation: "lö pa-tri-muan kül-tü-rel" }] };
const unit419Speaking: UnitSpeakingFrB2 = { unitId: 419, title: "Dilin Evrimi Konuşma", exercises: [{ text: "L'évolution des langues.", translation: "Dillerin evrimi.", pronunciation: "le-vo-lü-syon de lang" }] };
const unit420Speaking: UnitSpeakingFrB2 = { unitId: 420, title: "B2 Genel Tekrar Konuşma", exercises: [{ text: "La révision générale.", translation: "Genel tekrar.", pronunciation: "la re-vi-zyon je-ne-ral" }] };

export function getFrB2SpeakingForUnit(unitId: number): SpeakingExerciseFrB2[] {
  const idMapping: { [key: number]: UnitSpeakingFrB2 } = {
    391: unit391Speaking,
    392: unit392Speaking,
    393: unit393Speaking,
    394: unit394Speaking,
    395: unit395Speaking,
    396: unit396Speaking,
    397: unit397Speaking,
    398: unit398Speaking,
    399: unit399Speaking,
    400: unit400Speaking,
    401: unit401Speaking,
    402: unit402Speaking,
    403: unit403Speaking,
    404: unit404Speaking,
    405: unit405Speaking,
    406: unit406Speaking,
    407: unit407Speaking,
    408: unit408Speaking,
    409: unit409Speaking,
    410: unit410Speaking,
    411: unit411Speaking,
    412: unit412Speaking,
    413: unit413Speaking,
    414: unit414Speaking,
    415: unit415Speaking,
    416: unit416Speaking,
    417: unit417Speaking,
    418: unit418Speaking,
    419: unit419Speaking,
    420: unit420Speaking
  };
  return idMapping[unitId]?.exercises || unit391Speaking.exercises;
}
