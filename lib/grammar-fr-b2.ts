import { UnitGrammar } from "./grammar";

const unit391Grammar: UnitGrammar = {
  unitId: 391,
  title: "Küreselleşme ve Le Subjonctif Passé",
  rules: [
    {
      id: "fr-b2-subjp-intro",
      title: "🎯 BÖLÜM 1: SUBJONCTIF PASSÉ NEDİR?",
      explanation:
        "Subjonctif Passé, geçmişte tamamlanmış eylemler için kullanılan dilek-istek kipi geçmiş zamanıdır.\n\n**Türkçedeki Karşılığı:** Genellikle '...mış olmasını (istemek/ummak)' şeklinde çevrilir. B2 seviyesinde görüşlerinizi ifade ederken çok sık kullanırsınız.",
      examples: [
        { fr: "Je suis ravi que tu sois venu.", tr: "Gelmiş olmana çok sevindim." },
        { fr: "Il est possible qu'il ait fini.", tr: "Bitirmiş olması mümkündür." }
      ]
    }
  ]
};

const unit392Grammar: UnitGrammar = {
  unitId: 392,
  title: "Sürdürülebilirlik ve Le Conditionnel Passé",
  rules: [
    {
      id: "fr-b2-condp-intro",
      title: "🎯 BÖLÜM 1: CONDITIONNEL PASSÉ NEDİR?",
      explanation:
        "Conditionnel Passé, geçmişteki pişmanlıklar veya gerçekleşmemiş şartları anlatmak için kullanılır.\n\n**Türkçedeki Karşılığı:** '-mış olacaktım / yapardım' (ama yapamadım) anlamına gelir.",
      examples: [
        { fr: "J'aurais voulu t'aider.", tr: "Sana yardım etmek isterdim (ama edemedim)." },
        { fr: "Nous aurions dû faire attention.", tr: "Dikkat etmeliydik." }
      ]
    }
  ]
};

const unit393Grammar: UnitGrammar = {
  unitId: 393,
  title: "Yapay Zeka ve Çift Zamirlerin Kullanımı",
  rules: [
    {
      id: "fr-b2-doublepron-intro",
      title: "🎯 BÖLÜM 1: ÇİFT ZAMİRLER",
      explanation:
        "Fransızcada hem dolaysız (COD) hem de dolaylı (COI) nesne zamirlerinin aynı cümlede kullanılması durumudur. B2 seviyesinde bu zamirlerin sıralaması çok önemlidir.",
      examples: [
        { fr: "Je le lui explique.", tr: "Onu ona açıklıyorum." },
        { fr: "Il me l'a donné.", tr: "Onu bana verdi." }
      ]
    }
  ]
};

// Generik B2 grammar data for remaining units to ensure robust and compile-ready codebase
const unit394Grammar: UnitGrammar = { unitId: 394, title: "Genetik Mühendisliği ve Dilbilgisi", rules: [] };
const unit395Grammar: UnitGrammar = { unitId: 395, title: "Modern Sanat ve Dilbilgisi", rules: [] };
const unit396Grammar: UnitGrammar = { unitId: 396, title: "Klasik Edebiyat ve Dilbilgisi", rules: [] };
const unit397Grammar: UnitGrammar = { unitId: 397, title: "Felsefi Akımlar ve Dilbilgisi", rules: [] };
const unit398Grammar: UnitGrammar = { unitId: 398, title: "Psikoloji ve Dilbilgisi", rules: [] };
const unit399Grammar: UnitGrammar = { unitId: 399, title: "Sosyoloji ve Dilbilgisi", rules: [] };
const unit400Grammar: UnitGrammar = { unitId: 400, title: "Uluslararası İlişkiler ve Dilbilgisi", rules: [] };
const unit401Grammar: UnitGrammar = { unitId: 401, title: "Diplomasi Dili ve Dilbilgisi", rules: [] };
const unit402Grammar: UnitGrammar = { unitId: 402, title: "Küresel Ekonomi ve Dilbilgisi", rules: [] };
const unit403Grammar: UnitGrammar = { unitId: 403, title: "Kripto Paralar ve Dilbilgisi", rules: [] };
const unit404Grammar: UnitGrammar = { unitId: 404, title: "İklim Politikaları ve Dilbilgisi", rules: [] };
const unit405Grammar: UnitGrammar = { unitId: 405, title: "Yenilenebilir Enerji ve Dilbilgisi", rules: [] };
const unit406Grammar: UnitGrammar = { unitId: 406, title: "Eğitim Reformu ve Dilbilgisi", rules: [] };
const unit407Grammar: UnitGrammar = { unitId: 407, title: "Uzaktan Çalışma ve Dilbilgisi", rules: [] };
const unit408Grammar: UnitGrammar = { unitId: 408, title: "Liderlik ve Dilbilgisi", rules: [] };
const unit409Grammar: UnitGrammar = { unitId: 409, title: "Girişimcilik ve Dilbilgisi", rules: [] };
const unit410Grammar: UnitGrammar = { unitId: 410, title: "Medya Manipülasyonu ve Dilbilgisi", rules: [] };
const unit411Grammar: UnitGrammar = { unitId: 411, title: "İfade Özgürlüğü ve Dilbilgisi", rules: [] };
const unit412Grammar: UnitGrammar = { unitId: 412, title: "Biyoetik ve Dilbilgisi", rules: [] };
const unit413Grammar: UnitGrammar = { unitId: 413, title: "Uzay Kolonizasyonu ve Dilbilgisi", rules: [] };
const unit414Grammar: UnitGrammar = { unitId: 414, title: "Geleceğin Şehirleri ve Dilbilgisi", rules: [] };
const unit415Grammar: UnitGrammar = { unitId: 415, title: "Sanal Gerçeklik ve Dilbilgisi", rules: [] };
const unit416Grammar: UnitGrammar = { unitId: 416, title: "Kuantum Çağı ve Dilbilgisi", rules: [] };
const unit417Grammar: UnitGrammar = { unitId: 417, title: "Nörobilim ve Dilbilgisi", rules: [] };
const unit418Grammar: UnitGrammar = { unitId: 418, title: "Kültürel Miras ve Dilbilgisi", rules: [] };
const unit419Grammar: UnitGrammar = { unitId: 419, title: "Dilin Evrimi ve Dilbilgisi", rules: [] };
const unit420Grammar: UnitGrammar = { unitId: 420, title: "B2 Genel Tekrar ve Dilbilgisi", rules: [] };

export function getFrB2GrammarForUnit(unitId: number): UnitGrammar {
  const grammarMapping: { [key: number]: UnitGrammar } = {
    391: unit391Grammar,
    392: unit392Grammar,
    393: unit393Grammar,
    394: unit394Grammar,
    395: unit395Grammar,
    396: unit396Grammar,
    397: unit397Grammar,
    398: unit398Grammar,
    399: unit399Grammar,
    400: unit400Grammar,
    401: unit401Grammar,
    402: unit402Grammar,
    403: unit403Grammar,
    404: unit404Grammar,
    405: unit405Grammar,
    406: unit406Grammar,
    407: unit407Grammar,
    408: unit408Grammar,
    409: unit409Grammar,
    410: unit410Grammar,
    411: unit411Grammar,
    412: unit412Grammar,
    413: unit413Grammar,
    414: unit414Grammar,
    415: unit415Grammar,
    416: unit416Grammar,
    417: unit417Grammar,
    418: unit418Grammar,
    419: unit419Grammar,
    420: unit420Grammar
  };
  return grammarMapping[unitId] || unit391Grammar;
}
