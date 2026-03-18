import { UnitGrammar } from "./grammar";

const unit361Grammar: UnitGrammar = {
  unitId: 361,
  title: "İş Görüşmesi ve Conditionnel Présent",
  rules: [
    {
      id: "fr-b1-cond-intro",
      title: "🎯 Bölüm 1: Conditionnel Présent Nedir?",
      explanation:
        'Le Conditionnel Présent (Şimdiki Zamanın Şartı), Fransızcada temel olarak iki durum için kullanılır:\n\n1. **Kibarlık:** Bir şeyi nazikçe istemek veya teklif etmek ("İsterdim", "Yapabilir misiniz?"). İş görüşmelerinde vazgeçilmezdir.\n2. **Gerçekleşmemiş Varsayımlar:** "Eğer vaktim olsaydı, yapardım" gibi hayali durumları anlatmak.\n\n**Nasıl Oluşturulur?**\nFiilin *Futur Simple* (Gelecek Zaman) köküne, *Imparfait* (Geçmiş Zaman) ekleri eklenerek oluşturulur.',
      examples: [
        { fr: "Je voudrais un café.", tr: "Bir kahve isterdim. (Kibarca)" },
        { fr: "Si j'étais à votre place, j'accepterais.", tr: "Sizin yerinizde olsaydım, kabul ederdim. (Varsayım)" }
      ]
    },
    {
      id: "fr-b1-cond-formation",
      title: "🧱 Bölüm 2: Conditionnel Présent Çekimi",
      explanation:
        '**Düzenli Fiiller (Parler - Konuşmak):**\nKök: parler- (Mastar haliyle aynı kalır)\nEkler: -ais, -ais, -ait, -ions, -iez, -aient\n\n* Je parler**ais** (Konuşurdum)\n* Tu parler**ais** (Konuşurdun)\n* Il/Elle parler**ait** (Konuşurdu)\n* Nous parler**ions** (Konuşurduk)\n* Vous parler**iez** (Konuşurdunuz)\n* Ils/Elles parler**aient** (Konuşurlardı)',
      examples: [
        { fr: "Je travaillerais bien avec vous.", tr: "Sizinle seve seve çalışırdım." },
        { fr: "Nous aimerions vous embaucher.", tr: "Sizi işe almak isterdik." }
      ]
    },
    {
      id: "fr-b1-cond-irreg",
      title: "⚠️ Bölüm 3: Düzensiz Fiillerde Conditionnel",
      explanation:
        'Futur Simple kökleri düzensiz olan fiiller, Conditionnel\'de de aynı düzensiz kökleri korurlar. Ancak ekler (Imparfait ekleri) her zaman aynı ve düzenlidir!\n\n* **Avoir (Sahip olmak):** Kök: aur- -> J\'aurais (Sahip olurdum)\n* **Être (Olmak):** Kök: ser- -> Je serais (Olurdum)\n* **Faire (Yapmak):** Kök: fer- -> Je ferais (Yapardım)\n* **Aller (Gitmek):** Kök: ir- -> J\'irais (Giderdim)\n* **Pouvoir (Ebilmek):** Kök: pourr- -> Je pourrais (Yapabilirdim)',
      examples: [
        { fr: "Je serais ravi de travailler ici.", tr: "Burada çalışmaktan memnuniyet duyardım." },
        { fr: "Pourriez-vous répéter la question ?", tr: "Soruyu tekrar edebilir misiniz? (Çok kibar)" }
      ]
    },
    {
      id: "fr-b1-cond-usage",
      title: "💼 Bölüm 4: İş Görüşmelerinde Conditionnel Kullanımı",
      explanation:
        'İş görüşmelerinde (Entretien d\'embauche) kaba veya kesin görünmemek için *Conditionnel* çok sık kullanılır. Emir kipleri veya geniş zaman yerine potansiyel yeteneklerinizi ve isteklerinizi belirtmek için mükemmeldir.\n\n**Önemli Kalıplar:**\n* Je voudrais (İsterdim)\n* J\'aimerais (Seviyor olurdum / İsterdim)\n* Serait-il possible de... (...mümkün müdür?)\n* Je pourrais (Yapabilirdim / Yapabilirim)',
      examples: [
        { fr: "J'aimerais vous poser une question.", tr: "Size bir soru sormak isterdim." },
        { fr: "Je pourrais commencer lundi prochain.", tr: "Gelecek pazartesi başlayabilirim (başlayabilirdim)." }
      ]
    }
  ]
};

const unit362Grammar: UnitGrammar = {
  unitId: 362,
  title: "Le Gérondif (Ulaç / Zarf-Fiil)",
  rules: [
    {
      id: "fr-b1-gerondif-intro",
      title: "🎯 Bölüm 1: Le Gérondif Nedir?",
      explanation:
        'Le Gérondif, Türkçedeki "-erek, -arak" veya "yaparken, ederken" anlamlarına gelen koddur. İki eylemin aynı anda yapıldığını veya bir eylemin nasıl (ne şekilde) yapıldığını belirtmek için kullanılır.\n\nÖzneleri aynı olan iki filden birini ana fiil, diğerini ise "Gérondif" olarak kullanırız.',
      examples: [
        { fr: "Il mange en regardant la télé.", tr: "Televizyon izleyerek (izlerken) yemek yiyor." },
        { fr: "J'ai appris le français en écoutant de la musique.", tr: "Fransızcayı müzik dinleyerek öğrendim." }
      ]
    },
    {
      id: "fr-b1-gerondif-formation",
      title: "🧱 Bölüm 2: Nasıl Oluşturulur?",
      explanation:
        'Le Gérondif oluşturmak oldukça basittir:\n1. Fiilin Şimdiki Zaman (Présent) "Nous" (Biz) çekimini bul.\n2. Sondaki "-ons" ekini at.\n3. Kalan kökün sonuna "-ant" ekle.\n4. Başına "en" kelimesini koy.\n\nÖrnek (Regarder - İzlemek):\nNous regardons -> regard- -> en regardant (İzleyerek)',
      examples: [
        { fr: "Faire -> Nous faisons -> en faisant", tr: "Yaparak" },
        { fr: "Prendre -> Nous prenons -> en prenant", tr: "Alarak" },
        { fr: "Aller -> Nous allons -> en allant", tr: "Giderek" }
      ]
    },
    {
      id: "fr-b1-gerondif-irreg",
      title: "⚠️ Bölüm 3: Düzensiz Fiiller",
      explanation:
        'Sadece üç fiilin Gérondif kökü düzensizdir. Bunları ezberlemek gerekir:\n\n1. **Avoir (Sahip olmak):** en ayant (sahip olarak)\n2. **Être (Olmak):** en étant (olarak)\n3. **Savoir (Bilmek):** en sachant (bilerek)',
      examples: [
        { fr: "En étant patient, tu réussiras.", tr: "Sabırlı olarak (sabrederek) başaracaksın." },
        { fr: "Il a répondu en sachant la vérité.", tr: "Gerçeği bilerek cevap verdi." }
      ]
    },
    {
      id: "fr-b1-gerondif-usage",
      title: "💡 Bölüm 4: Kullanım Durumları",
      explanation:
        'Le Gérondif temel olarak üç durumda kullanılır:\n\n1. **Eşzamanlılık (Simultanéité):** Aynı anda gerçekleşen iki eylem. ("-ken")\n2. **Tarz / Yöntem (Manière / Moyen):** Bir şeyin nasıl yapıldığını açıklar. ("-erek")\n3. **Şart (Condition):** Eğer anlamı katar. ("-irsen")',
      examples: [
        { fr: "Il parle en souriant. (Eşzamanlılık)", tr: "Gülümseyerek (Gülümserken) konuşuyor." },
        { fr: "Tu as maigri en faisant du sport. (Yöntem)", tr: "Spor yaparak zayıfladın." },
        { fr: "En prenant le métro, tu iras plus vite. (Şart)", tr: "Metroya binersen daha hızlı gidersin." }
      ]
    }
  ]
};

const unit363Grammar: UnitGrammar = {
  unitId: 363,
  title: "Les Pronoms Relatifs (qui, que, où) (İlgi Adılları)",
  rules: [
    {
      id: "fr-b1-pronoms-relatifs-intro",
      title: "🎯 Bölüm 1: İlgi Adılları Nedir?",
      explanation:
        'İlgi adılları (Les pronoms relatifs), iki farklı cümleyi birbirine bağlamak ve tekrarlardan kaçınmak için kullanılır. Ortak olan ismi bir daha söylemek yerine "qui, que, où" gibi kelimeler kullanırız.\n\nÖrnek:\n1. J\'adore ce téléphone. (Bu telefonu çok seviyorum.)\n2. Ce téléphone est très rapide. (Bu telefon çok hızlı.)\n-> J\'adore ce téléphone **qui** est très rapide. (Çok hızlı *olan* bu telefonu çok seviyorum.)',
      examples: [
        { fr: "C'est la femme qui travaille ici.", tr: "Burada çalışan kadın budur." },
        { fr: "C'est le livre que je lis.", tr: "Bu benim okuduğum kitaptır." }
      ]
    },
    {
      id: "fr-b1-pronoms-relatifs-qui",
      title: "🧱 Bölüm 2: QUI (Özne)",
      explanation:
        '**QUI**, bir cümlenin **öznesinin (sujet)** yerini alır. Doğrudan fiilden önce gelir ve eylemi yapanı temsil eder.\nTürkçedeki "-an, -en" ekleri (yapan, giden, gelen vb.) gibi çevrilebilir.',
      examples: [
        { fr: "Voici l'étudiant qui parle français.", tr: "İşte Fransızca konuşan öğrenci." },
        { fr: "Le chien qui aboie est à mon voisin.", tr: "Havlayan köpek komşumundur." }
      ]
    },
    {
      id: "fr-b1-pronoms-relatifs-que",
      title: "📝 Bölüm 3: QUE (Nesne)",
      explanation:
        '**QUE**, bir cümlenin **nesnesinin (objet directionnel)** yerini alır. Her zaman bir özne ve fiilden (Je veux, Tu aimes vb.) önce gelir.\nSesli harfle başlayan bir kelimeden önce "Qu\'" şeklini alır.\nTürkçedeki "-dığım, -diğin" ekleri (sevdiğim, yaptığın vb.) gibi çevrilebilir.',
      examples: [
        { fr: "Le gâteau que tu as fait est délicieux.", tr: "Yaptığın pasta çok lezzetli." },
        { fr: "C'est l'ordinateur qu'il a acheté.", tr: "Bu onun satın aldığı bilgisayardır." }
      ]
    },
    {
      id: "fr-b1-pronoms-relatifs-ou",
      title: "📍 Bölüm 4: OÙ (Yer ve Zaman)",
      explanation:
        '**OÙ**, genellikle bir **yer (lieu)** bildirmek için kullanılır ("...dığı yer").\nAynı zamanda kesin bir **zaman (temps)** bildiren kelimeleri (jour, année, moment vb.) bağlamak için de kullanılır ("...dığı zaman/gün").',
      examples: [
        { fr: "La ville où j'habite est très belle.", tr: "Yaşadığım (oturduğum) şehir çok güzel." },
        { fr: "Je me souviens du jour où nous nous sommes rencontrés.", tr: "Tanıştığımız günü hatırlıyorum." }
      ]
    }
  ]
};

const unit364Grammar: UnitGrammar = {
  unitId: 364,
  title: "Les Pronoms Démonstratifs (İşaret Adılları)",
  rules: [
    {
      id: "fr-b1-pronoms-demonstratifs-intro",
      title: "🎯 Bölüm 1: İşaret Adılı Nedir?",
      explanation:
        'Daha önce bahsedilen bir ismin tekrarını önlemek için kullanılır. Türkçedeki "şu, bu, o, şunlar, bunlar" veya "benimki, seninki, ...olan" anlamlarına gelir.\nFransızcada ismin cinsiyetine ve sayısına göre dört şekli vardır:\n\n* **Celui:** Eril Tekil (Bu / Şu / O)\n* **Celle:** Dişil Tekil (Bu / Şu / O)\n* **Ceux:** Eril Çoğul (Bunlar / Şunlar / Onlar)\n* **Celles:** Dişil Çoğul (Bunlar / Şunlar / Onlar)',
      examples: [
        { fr: "Mon livre et celui de Pierre.", tr: "Benim kitabım ve Pierre'inki (Pierre'in kitabı)." },
        { fr: "La voiture rouge ou celle-ci ?", tr: "Kırmızı araba mı yoksa bu mu?" }
      ]
    },
    {
      id: "fr-b1-pronoms-demonstratifs-ci-la",
      title: "🧱 Bölüm 2: -ci ve -là Ekleri",
      explanation:
        'Yakınlık ve uzaklığı daha net belirtmek veya iki seçenek arasında tercih yapmak için kullanılır.\n\n* **-ci (Yakınlık):** celui-ci, celle-ci, ceux-ci, celles-ci (Bu, bunlar)\n* **-là (Uzaklık):** celui-là, celle-là, ceux-là, celles-là (Şu/O, şunlar/onlar)',
      examples: [
        { fr: "Quel gâteau veux-tu ? Celui-ci ou celui-là ?", tr: "Hangi pastayı istiyorsun? Bunu mu yoksa şunu mu?" },
        { fr: "J'aime ces fleurs, surtout celles-là.", tr: "Bu çiçekleri seviyorum, özellikle de şunları." }
      ]
    },
    {
      id: "fr-b1-pronoms-demonstratifs-de",
      title: "📝 Bölüm 3: Aidiyet Belirtme (de)",
      explanation:
        'Bir şeyin kime ait olduğunu belirtirken ismi tekrarlamadan "de + kişi" kalıbını kullanırız.\n\nFormül: **Celui/Celle/Ceux/Celles + de + isim/zamir**',
      examples: [
        { fr: "C'est l'ordinateur de Paul ? Non, c'est celui de Marie.", tr: "Bu Paul'ün bilgisayarı mı? Hayır, Marie'ninki." },
        { fr: "Je préfère les idées de Thomas à celles de Sophie.", tr: "Thomas'nın fikirlerini Sophie'ninkilere tercih ederim." }
      ]
    },
    {
      id: "fr-b1-pronoms-demonstratifs-qui-que",
      title: "📍 Bölüm 4: İlgi Adılıyla Kullanım (qui/que)",
      explanation:
        'Bir nesneyi veya kişiyi tanımlamak için "celui qui", "celle que" vb. yapılar kullanılır.\nTürkçedeki "...yapan kişi" veya "...olan şey" anlamını verir.',
      examples: [
        { fr: "Celui qui parle est mon frère.", tr: "Konuşan (o kişi), benim kardeşim." },
        { fr: "Prends la chaise, celle que tu préfères.", tr: "Sandalyeyi al, hangisini tercih ediyorsan." }
      ]
    }
  ]
};

const unit365Grammar: UnitGrammar = {
  unitId: 365,
  title: "La Voix Passive (Edilgen Yapı)",
  rules: [
    {
      id: "fr-b1-voix-passive-intro",
      title: "🎯 Bölüm 1: Edilgen Yapı Nedir?",
      explanation:
        'Aktif bir cümlede özne işi yaparken, pasif (edilgen) bir cümlede özne eylemden etkilenir. Vurguyu işi yapandan eylemin kendisine veya eylemden etkilenen nesneye kaydırmak için kullanılır.\n\n* **Aktif:** Le chat mange la souris. (Kedi fareyi yer.)\n* **Pasif:** La souris est mangée par le chat. (Fare kedi tarafından yenir.)',
      examples: [
        { fr: "L'architecte construit la maison.", tr: "Mimar evi inşa eder. (Aktif)" },
        { fr: "La maison est construite par l'architecte.", tr: "Ev mimar tarafından inşa edilir. (Pasif)" }
      ]
    },
    {
      id: "fr-b1-voix-passive-formation",
      title: "🧱 Bölüm 2: Nasıl Oluşturulur?",
      explanation:
        'Pasif yapı her zaman **"être"** (olmak) yardımcı fiilinin çekimi ve asıl fiilin **"participe passé"** (geçmiş zaman ortacı) hali ile oluşturulur.\n\n"Être" fiili, aktif cümlenin asıl zamanına uygun olarak çekimlenir:\n* Présent: est / sont\n* Passé Composé: a été / ont été\n* Futur Simple: sera / seront',
      examples: [
        { fr: "Le repas est préparé.", tr: "Yemek hazırlanıyor/hazırlanır. (Présent)" },
        { fr: "Le repas a été préparé.", tr: "Yemek hazırlandı. (Passé Composé)" },
        { fr: "Le repas sera préparé.", tr: "Yemek hazırlanacak. (Futur Simple)" }
      ]
    },
    {
      id: "fr-b1-voix-passive-accord",
      title: "📝 Bölüm 3: Uyum Kuralı (L'accord)",
      explanation:
        'Pasif yapıda, "participe passé" her zaman cümledeki **yeni özneyle (eylemden etkilenen nesne)** cinsiyet (eril/dişil) ve sayı (tekil/çoğul) bakımından uyumlu olmalıdır:\n\n* Yeni özne dişilse: **-e** eklenir.\n* Yeni özne çoğulsa: **-s** eklenir.',
      examples: [
        { fr: "La lettre est écrite.", tr: "Mektup (la lettre - dişil) yazıldı." },
        { fr: "Les problèmes sont résolus.", tr: "Problemler (les problèmes - eril çoğul) çözüldü." }
      ]
    },
    {
      id: "fr-b1-voix-passive-par",
      title: "📍 Bölüm 4: 'Par' Kelimesinin Kullanımı",
      explanation:
        'İşin kimin veya neyin tarafından yapıldığını belirtmek için çoğunlukla **"par"** (tarafından) kelimesi kullanılır.\n',
      examples: [
        { fr: "L'ordinateur est réparé par le technicien.", tr: "Bilgisayar teknisyen tarafından tamir edilir." },
        { fr: "Le projet a été terminé par les étudiants.", tr: "Proje öğrenciler tarafından bitirildi." }
      ]
    }
  ]
};

const unit366Grammar: UnitGrammar = {
  unitId: 366,
  title: "Le Gérondif (Ulaç Yapısı)",
  rules: [
    {
      id: "fr-b1-gerondif-formation",
      title: "🎯 Bölüm 1: Nasıl Oluşturulur?",
      explanation:
        'Le Gérondif (ulaç), eylemlere "-arak, -erek" veya "-iken" anlamı katar.\nOluşturmak için formül şudur: **En + Participe Présent (Şimdiki Zaman Ortacı)**.\n\nParticipe présent elde etmek için: Fiilin geniş zamanda (Présent) "Nous" (Biz) çekimindeki "-ons" takısı atılır ve yerine **"-ant"** eklenir.\n* Parler -> (Nous) parlons -> parlant -> **en parlant**\n* Finir -> (Nous) finissons -> finissant -> **en finissant**',
      examples: [
        { fr: "En écoutant", tr: "Dinleyerek / Dinlerken" },
        { fr: "En faisant", tr: "Yaparak / Yaparken" }
      ]
    },
    {
      id: "fr-b1-gerondif-simultaneite",
      title: "🧱 Bölüm 2: Eşzamanlılık (Simultanéité)",
      explanation:
        'Aynı öznenin aynı anda yaptığı iki farklı eylemi anlatmak için kullanılır. Türkçede "-ken, -diği sırada" olarak çevrilebilir.',
      examples: [
        { fr: "Elle travaille en écoutant de la musique.", tr: "O, müzik dinlerken (dinleyerek) çalışıyor." },
        { fr: "Il a téléphoné en conduisant.", tr: "O, araba sürerken telefonla konuştu." }
      ]
    },
    {
      id: "fr-b1-gerondif-moyen",
      title: "📝 Bölüm 3: Yöntem / Araç Belirtme (Le Moyen)",
      explanation:
        'Bir eylemin **nasıl** veya **hangi yolla** yapıldığını gösterir. Türkçede "-arak, -erek" şeklinde çevrilir.',
      examples: [
        { fr: "J'ai réussi à l'examen en étudiant beaucoup.", tr: "Sınavı çok çalışarak başardım." },
        { fr: "Tu vas maigrir en faisant du sport.", tr: "Spor yaparak zayıflayacaksın." }
      ]
    },
    {
      id: "fr-b1-gerondif-exceptions",
      title: "📍 Bölüm 4: İstisnai Fiiller",
      explanation:
        'Üç önemli fiil "nous" çekimi kuralına uymaz ve düzensizdir:\n\n* **Être (Olmak):** en étant\n* **Avoir (Sahip olmak):** en ayant\n* **Savoir (Bilmek):** en sachant',
      examples: [
        { fr: "J'ai accepté en sachant les risques.", tr: "Riskleri bilerek kabul ettim." },
        { fr: "Il a gagné le match en étant très rapide.", tr: "Çok hızlı olarak maçı kazandı." }
      ]
    }
  ]
};

const unit367Grammar: UnitGrammar = {
  unitId: 367,
  title: "Le Subjonctif Présent (Dilek-İstek Kipi ve Zorunluluk)",
  rules: [
    {
      id: "fr-b1-subjonctif-intro",
      title: "🎯 Bölüm 1: Nedir ve Ne Zaman Kullanılır?",
      explanation:
        'Le Subjonctif (Dilek-İstek kipi), eylemin kesin olmadığını, bir duygu, istek veya zorunluluk barındırdığını gösterir.\n\nB1 seviyesinde en sık karşılaşacağınız kullanımı **"Il faut que..." (Gerekir ki / -malı, -meli)** yapısıdır. "Il faut que" kalıbından sonra gelen fiil %100 oranında Subjonctif kipinde çekimlenmek zorundadır.',
      examples: [
        { fr: "Il faut que tu parles.", tr: "Senin konuşman lazım." },
        { fr: "Il faut que nous protégions la nature.", tr: "Doğayı korumamız gerekiyor." }
      ]
    },
    {
      id: "fr-b1-subjonctif-formation",
      title: "🧱 Bölüm 2: Nasıl Çekimlenir?",
      explanation:
        'Düzenli fiiller için kural çok nettir:\n1. Geniş zamanda "Ils / Elles" (Onlar) çekimini alın.\n2. Sonundaki **"-ent"** takısını atın. Kök ortaya çıkar.\n3. Bu köke şu ekleri getirin: **-e, -es, -e, -ions, -iez, -ent**.',
      examples: [
        { fr: "Parler -> Ils parlent -> parl", tr: "que je parle, que tu parles, qu'il parle, que nous parlions, que vous parliez, qu'ils parlent" },
        { fr: "Finir -> Ils finissent -> finiss", tr: "que je finisse, que tu finisses, qu'il finisse, que nous finissions, que vous finissiez, qu'ils finissent" }
      ]
    },
    {
      id: "fr-b1-subjonctif-exemples",
      title: "📝 Bölüm 3: Örnek Cümleler",
      explanation:
        'Bu yapı özellikle çevreyi koruma gibi tavsiye ve zorunluluk bildiren cümlelerde çok işe yarar.',
      examples: [
        { fr: "Il faut que tout le monde recycle ses déchets.", tr: "Herkesin çöplerini geri dönüştürmesi gerekiyor." },
        { fr: "Il est important que vous choisissiez bien.", tr: "İyi seçim yapmanız önemlidir." }
      ]
    },
    {
      id: "fr-b1-subjonctif-etre-avoir",
      title: "📍 Bölüm 4: Être ve Avoir (Düzensizler)",
      explanation:
        'En çok kullanılan "Être" (Olmak) ve "Avoir" (Sahip olmak) fiilleri Subjonctif\'te tamamen düzensizdir ve ezberlenmelidir:\n\n**Être:** que je sois, que tu sois, qu\'il/elle soit, que nous soyons, que vous soyez, qu\'ils/elles soient\n**Avoir:** que j\'aie, que tu aies, qu\'il ait, que nous ayons, que vous ayez, qu\'ils/elles aient',
      examples: [
        { fr: "Il faut que tu sois prudent.", tr: "Dikkatli olman lazım." },
        { fr: "Il est nécessaire que nous ayons de l'espoir.", tr: "Umudumuzun olması gereklidir." }
      ]
    }
  ]
};

export function getFrB1GrammarForUnit(unitId: number): UnitGrammar | undefined {
  const grammar: { [key: number]: UnitGrammar } = {
    361: unit361Grammar,
    362: unit362Grammar,
    363: unit363Grammar,
    364: unit364Grammar,
    365: unit365Grammar,
    366: unit366Grammar,
    367: unit367Grammar
  };
  return grammar[unitId];
}
