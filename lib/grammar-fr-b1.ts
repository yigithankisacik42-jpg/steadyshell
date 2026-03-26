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

const unit368Grammar: UnitGrammar = {
  unitId: 368,
  title: "Le Subjonctif Présent (Bölüm 2: Duygu ve İstek)",
  rules: [
    {
      id: "fr-b1-subjonctif-volonte",
      title: "💭 Bölüm 1: İstek Bildiren Fiiller (Volonté)",
      explanation:
        'Birinin bir şey yapmasını **istediğimizde** "Je veux que..." (İstiyorum ki...) veya "Je désire que..." gibi kalıplar kullanırız. Bu kalıplardan sonra fiil her zaman Subjonctif (Dilek) kipinde çekilir.',
      examples: [
        { fr: "Je veux que tu te reposes.", tr: "Dinlenmeni istiyorum." },
        { fr: "Le médecin exige que vous preniez ce médicament.", tr: "Doktor bu ilacı almanızı talep ediyor." }
      ]
    },
    {
      id: "fr-b1-subjonctif-sentiment",
      title: "❤️ Bölüm 2: Duygu Bildiren İfadeler (Sentiment)",
      explanation:
        'Mutluluk, üzüntü, şaşkınlık veya korku gibi **duyguları** ifade eden kalıplardan ("Je suis content que...", "Je suis triste que...", "J\'ai peur que...") sonra da daima Subjonctif kullanılır.',
      examples: [
        { fr: "Je suis content que tu ailles mieux.", tr: "Daha iyi olmana sevindim." },
        { fr: "J'ai peur qu'il soit malade.", tr: "Onun hasta olmasından korkuyorum." }
      ]
    },
    {
      id: "fr-b1-subjonctif-regle-sujet",
      title: "⚠️ Bölüm 3: Önemli Bir Kural (Özne Değişimi)",
      explanation:
        'Subjonctif kullanmak için "que" bağlacından önceki özne ile sonraki özne **farklı** olmalıdır. Eğer özne aynıysa, "que" kullanılmaz ve doğrudan mastar (infinitif) fiil söylenir.',
      examples: [
        { fr: "Je veux aller à l'hôpital. (Aynı özne: Ben istiyorum, ben gideceğim)", tr: "Hastaneye gitmek istiyorum." },
        { fr: "Je veux que tu ailles à l'hôpital. (Farklı özne: Ben istiyorum, sen gideceksin)", tr: "Senin hastaneye gitmeni istiyorum." }
      ]
    },
    {
      id: "fr-b1-subjonctif-sante-exemples",
      title: "💊 Bölüm 4: Sağlık Konusunda Pratik",
      explanation:
        'Sağlık ve zindelik konularında tavsiye veya endişe belirtirken bu yapılar çok sık kullanılır.',
      examples: [
        { fr: "Je suis triste que vous ayez mal.", tr: "Ağrınız olmasına üzülüyorum." },
        { fr: "Il est dommage qu'elle ne fasse pas de sport.", tr: "Onun spor yapmaması ne yazık." }
      ]
    }
  ]
};

const unit369Grammar: UnitGrammar = {
  unitId: 369,
  title: "Le Subjonctif Présent (Bölüm 3: Bağlaçlarla Kullanım)",
  rules: [
    {
      id: "fr-b1-subjonctif-conjonctions-but",
      title: "🎯 Bölüm 1: Amaç Bildiren Bağlaçlar",
      explanation:
        'Birinin bir şey yapması **amacıyla** konuştuğumuzda "pour que" veya "afin que" (-sın diye) kullanırız. Bu bağlaçlardan sonra daima Subjonctif kullanılır.',
      examples: [
        { fr: "Je t'aide pour que tu réussisses ton examen.", tr: "Sınavını geçesin diye sana yardım ediyorum." },
        { fr: "Il parle fort afin que tout le monde l'entende.", tr: "Herkes onu duysun diye yüksek sesle konuşuyor." }
      ]
    },
    {
      id: "fr-b1-subjonctif-conjonctions-concession",
      title: "⚖️ Bölüm 2: Zıtlık/Ödün Bildiren Bağlaçlar",
      explanation:
        '"Bien que" veya "quoique" (...olmasına rağmen) bağlaçlarından sonra her zaman Subjonctif kipi gelir.',
      examples: [
        { fr: "Bien qu'il soit fatigué, il étudie.", tr: "Yorgun olmasına rağmen ders çalışıyor." },
        { fr: "Elle est venue à l'école bien qu'elle soit malade.", tr: "Hasta olmasına rağmen okula geldi." }
      ]
    },
    {
      id: "fr-b1-subjonctif-conjonctions-temps",
      title: "⏳ Bölüm 3: Zaman Bağlaçları (Avant que)",
      explanation:
        '"Avant que" (-den önce) bağlacından sonra daima Subjonctif kullanılır. Ancak DİKKAT: "Après que" (-den sonra) bağlacından sonra normal zaman (Indicatif) kullanılır!',
      examples: [
        { fr: "Fais tes devoirs avant que le professeur n'arrive.", tr: "Öğretmen gelmeden önce ödevlerini yap." },
        { fr: "Je pars avant qu'il soit trop tard.", tr: "Çok geç olmadan önce çıkıyorum." }
      ]
    },
    {
      id: "fr-b1-subjonctif-conjonctions-meme-sujet",
      title: "⚠️ Bölüm 4: Özneler Aynıysa Ne Olur?",
      explanation:
        'Eğer iki eylemi de **aynı kişi** yapıyorsa "pour que" veya "avant que" yerine "pour + mastar" ve "avant de + mastar" kullanılır.',
      examples: [
        { fr: "J'étudie pour réussir. (Ben çalışıyorum, ben başaracağım)", tr: "Başarmak için ders çalışıyorum." },
        { fr: "J'étudie pour que tu réussisses. (Ben çalışıyorum, sen başaracaksın)", tr: "Sen başarasın diye ders çalışıyorum." }
      ]
    }
  ]
};

const unit370Grammar: UnitGrammar = {
  unitId: 370,
  title: "Le Participe Présent et Le Gérondif (-erek, -arak)",
  rules: [
    {
      id: "fr-b1-gerondif-formation",
      title: "🛠️ Bölüm 1: Nasıl Yapılır? (-ant Eki)",
      explanation:
        'Bir fiilden Gérondif (Ulaç) yapmak için fiilin geniş zamandaki "nous" (biz) çekimine bakarız. Sondaki "-ons" ekini atıp yerine **"-ant"** ekleriz. Başına da **"en"** edatını koyarız.\n\nÖrnek:\n*Parler* -> nous parlons -> parlant -> **en parlant** (konuşarak)\n*Finir* -> nous finissons -> finissant -> **en finissant** (bitirerek)',
      examples: [
        { fr: "En marchant", tr: "Yürüyerek" },
        { fr: "En recyclant", tr: "Geri dönüşüm yaparak" }
      ]
    },
    {
      id: "fr-b1-gerondif-exceptions",
      title: "⚠️ Bölüm 2: 3 Önemli İstisna Fiil",
      explanation:
        'Sadece 3 fiil bu kurala uymaz, bunları ezberlemelisiniz:\n1. **Avoir** (sahip olmak) -> en **ayant** (sahip olarak)\n2. **Être** (olmak) -> en **étant** (olarak)\n3. **Savoir** (bilmek) -> en **sachant** (bilerek)',
      examples: [
        { fr: "En étant malade, il est resté à la maison.", tr: "Hasta olduğu için (hasta olarak), evde kaldı." },
        { fr: "En sachant la vérité, elle a souri.", tr: "Gerçeği bilerek gülümsedi." }
      ]
    },
    {
      id: "fr-b1-gerondif-simultaneite",
      title: "⏱️ Bölüm 3: Aynı Anda Gerçekleşen Eylemler",
      explanation:
        'Gérondif, **aynı anda** yapılan iki işi anlatmak için çok kullanılır. Türkçeye "-ken, -erek, -arak" diye çevrilir.',
      examples: [
        { fr: "Il mange en regardant la télévision.", tr: "Televizyon izleyerek (izlerken) yemek yiyor." },
        { fr: "Elle travaille en écoutant de la musique.", tr: "Müzik dinleyerek çalışıyor." }
      ]
    },
    {
      id: "fr-b1-gerondif-maniere-cause",
      title: "🌿 Bölüm 4: Yöntem ve Çevre Pratiği",
      explanation:
        'Bir şeyin **nasıl** veya **neden** yapıldığını açıklarken de Gérondif kullanılır. Çevrecilik konularında sorunu nasıl çözeceğimizi anlatırken çok işe yarar.',
      examples: [
        { fr: "En utilisant le vélo, on réduit la pollution.", tr: "Bisiklet kullanarak kirliliği azaltırız." },
        { fr: "On protège la nature en jetant les déchets à la poubelle.", tr: "Çöpleri çöp kutusuna atarak doğayı koruruz." }
      ]
    }
  ]
};

const unit371Grammar: UnitGrammar = {
  unitId: 371,
  title: "Les Pronoms Relatifs Composés (Lequel, Auquel, Duquel...)",
  rules: [
    {
      id: "fr-b1-pronoms-lequel",
      title: "🔗 Bölüm 1: 'Lequel' Ailesi (Edatlardan Sonra)",
      explanation:
        'Fransızcada "avec (ile), pour (için), sur (üzerinde), dans (içinde)" gibi bir edattan sonra, bahsettiğimiz nesnenin cinsiyetine ve sayısına göre "ki o..." demek için **Lequel** ailesini kullanırız:\n* Eril Tekil: Lequel\n* Dişil Tekil: Laquelle\n* Eril Çoğul: Lesquels\n* Dişil Çoğul: Lesquelles',
      examples: [
        { fr: "Le stylo avec lequel j'écris. (stylo = eril)", tr: "Kendisiyle yazdığım kalem." },
        { fr: "La chaise sur laquelle je suis assis. (chaise = dişil)", tr: "Üzerinde oturduğum sandalye." }
      ]
    },
    {
      id: "fr-b1-pronoms-auquel",
      title: "🔄 Bölüm 2: 'À' Edatı ile Birleşimi (Auquel)",
      explanation:
        'Eğer fiil "à" edatı alıyorsa (penser à, s\'intéresser à gibi), "à + lequel" birleşerek değişir:\n* à + lequel = **auquel**\n* à + laquelle = **à laquelle** (değişmez)\n* à + lesquels = **auxquels**\n* à + lesquelles = **auxquelles**',
      examples: [
        { fr: "Le problème auquel je pense. (penser à un problème)", tr: "Hakkında düşündüğüm problem." },
        { fr: "Les sports auxquels il s'intéresse.", tr: "İlgilendiği sporlar." }
      ]
    },
    {
      id: "fr-b1-pronoms-duquel",
      title: "✂️ Bölüm 3: 'De' Edatı ile Birleşimi (Duquel)",
      explanation:
        'Eğer kullanılan ifade "de" edatı ile bitiyorsa (à côté de, près de, à cause de), "de + lequel" birleşir:\n* de + lequel = **duquel**\n* de + laquelle = **de laquelle** (değişmez)\n* de + lesquels = **desquels**\n* de + lesquelles = **desquelles**',
      examples: [
        { fr: "Le parc à côté duquel j'habite.", tr: "Yanında yaşadığım park." },
        { fr: "Les bâtiments près desquels nous sommes.", tr: "Yakınında olduğumuz binalar." }
      ]
    },
    {
      id: "fr-b1-pronoms-personnes-exception",
      title: "⚠️ Bölüm 4: İnsanlar İçin İstisna (Qui)",
      explanation:
        'ÖNEMLİ: Eğer bahsettiğimiz şey bir **İNSAN** ise, "lequel/laquelle" yerine genellikle edat + **"qui"** kullanmayı tercih ederiz.',
      examples: [
        { fr: "L'ami avec qui je voyage. (avec lequel yerine)", tr: "Birlikte seyahat ettiğim arkadaşım." },
        { fr: "La fille à qui je parle. (à laquelle yerine)", tr: "Konuştuğum kız." }
      ]
    }
  ]
};

const unit372Grammar: UnitGrammar = {
  unitId: 372,
  title: "Spor Fiilleri (Jouer vs Faire) ve Durum Zarfları (-ment)",
  rules: [
    {
      id: "fr-b1-jouer-a",
      title: "⚽ Bölüm 1: 'Jouer à' (Toplu veya Takım Sporları)",
      explanation:
        'Fransızcada **topla oynanan sporlar**, **takım sporları** veya **oyunlar** (satranç, video oyunları) için "jouer à" kullanılır.\n* jouer à + le = **jouer au**\n* jouer à + la = **jouer à la**\n* jouer à + les = **jouer aux**',
      examples: [
        { fr: "Je joue au football. (le football)", tr: "Futbol oynuyorum." },
        { fr: "Ils jouent au tennis tous les dimanches.", tr: "Onlar her pazar tenis oynarlar." },
        { fr: "Elle joue aux échecs. (les échecs)", tr: "O satranç oynar." }
      ]
    },
    {
      id: "fr-b1-faire-de",
      title: "🏃‍♂️ Bölüm 2: 'Faire de' (Bireysel Sporlar ve Aktiviteler)",
      explanation:
        '**Bireysel sporlar**, **fiziksel aktiviteler** veya **müzik aletleri** çalmak için "faire de" kullanılır.\n* faire de + le = **faire du**\n* faire de + la = **faire de la**\n* faire de + l\' = **faire de l\'**\n* faire de + les = **faire des**',
      examples: [
        { fr: "Je fais de la natation. (la natation)", tr: "Yüzme (sporu) yapıyorum." },
        { fr: "Il fait du vélo le matin. (le vélo)", tr: "Sabahları bisiklete biner." },
        { fr: "Nous faisons de l'escalade.", tr: "Biz tırmanış yapıyoruz." }
      ]
    },
    {
      id: "fr-b1-adverbes-maniere",
      title: "⚡ Bölüm 3: Durum Zarfları (Les Adverbes de Manière)",
      explanation:
        'Bir eylemin **nasıl** yapıldığını belirtmek için zarflar kullanılır (-ca, -ce, -lice anlamı katar). Çoğu zarf, sıfatın **dişil** formuna **"-ment"** eklenerek oluşturulur:\n* lent (eril) -> lente (dişil) -> **lentement** (yavaşça)\n* franc (eril) -> franche (dişil) -> **franchement** (açıkça)',
      examples: [
        { fr: "Il marche lentement.", tr: "Yavaşça yürüyor." },
        { fr: "Elle parle doucement. (doux -> douce -> doucement)", tr: "O yumuşakça (sessizce) konuşuyor." }
      ]
    },
    {
      id: "fr-b1-adverbes-exceptions",
      title: "⚠️ Bölüm 4: Zarf Kuralları (İstisnalar)",
      explanation:
        '1) Eğer sıfat **sesli harfle** bitiyorsa, doğrudan eril forma "-ment" eklenir:\n* vrai -> **vraiment** (gerçekten)\n* absolu -> **absolument** (kesinlikle)\n\n2) Eğer sıfat **-ant** veya **-ent** ile bitiyorsa, **-amment** veya **-emment** olur (Okunuşları aynıdır: -aman):\n* fréquent -> **fréquemment** (sıkça)\n* méchant -> **méchamment** (kötücül bir şekilde)',
      examples: [
        { fr: "Il court rapidement. (rapide -> rapidement)", tr: "Hızlıca koşuyor." },
        { fr: "C'est vraiment difficile.", tr: "Bu gerçekten zor." },
        { fr: "Il a répondu intelligemment. (intelligent -> intelligemment)", tr: "Zekice cevap verdi." }
      ]
    }
  ]
};

const unit373Grammar: UnitGrammar = {
  unitId: 373,
  title: "Seyahat Kültürü",
  rules: [
    {
      id: "fr-b1-conseils-intro",
      title: "🧭 Bölüm 1: Tavsiye Vermek (Il faut / Il est important de)",
      explanation:
        "Seyahatte kural ve tavsiye verirken en sık kullanılan iki yapı şunlardır:\n\n* **Il faut + mastar** = Yapmak gerekir\n* **Il est important de + mastar** = Yapmak önemlidir\n\nBu yapılar genel kural ve öneri bildirmek için kullanılır.",
      examples: [
        { fr: "Il faut respecter les coutumes locales.", tr: "Yerel geleneklere saygı göstermek gerekir." },
        { fr: "Il est important de se renseigner avant de partir.", tr: "Yola çıkmadan önce bilgi almak önemlidir." }
      ]
    },
    {
      id: "fr-b1-conseils-preference",
      title: "✅ Bölüm 2: Yumuşak Tavsiye (Il vaut mieux / Il est préférable de)",
      explanation:
        "Daha kibar ve yumuşak bir öneri için **Il vaut mieux** veya **Il est préférable de** kullanılır.\n\n* **Il vaut mieux + mastar** = Daha iyi olur\n* **Il est préférable de + mastar** = Tercih edilir / Daha iyidir",
      examples: [
        { fr: "Il vaut mieux apprendre quelques mots de la langue.", tr: "Dilden birkaç kelime öğrenmek daha iyi olur." },
        { fr: "Il est préférable de réserver à l'avance.", tr: "Önceden rezervasyon yapmak daha iyidir." }
      ]
    },
    {
      id: "fr-b1-conseils-negative",
      title: "🚫 Bölüm 3: Olumsuz Tavsiyeler ve Yasaklar",
      explanation:
        "Olumsuz tavsiye verirken **ne pas** kullanılır. Yasak belirtmek için **Il est interdit de** yapısı tercih edilir.\n\n* **Il vaut mieux ne pas + mastar** = Yapmamak daha iyi olur\n* **Il est interdit de + mastar** = ... yapmak yasaktır",
      examples: [
        { fr: "Il vaut mieux ne pas parler trop fort dans les temples.", tr: "Tapınaklarda çok yüksek sesle konuşmamak daha iyi olur." },
        { fr: "Il est interdit de prendre des photos ici.", tr: "Burada fotoğraf çekmek yasaktır." }
      ]
    }
  ]
};

const unit374Grammar: UnitGrammar = {
  unitId: 374,
  title: "Farklı Kültürler",
  rules: [
    {
      id: "fr-b1-contrast-intro",
      title: "🔎 Bölüm 1: Kültürleri Karşılaştırma",
      explanation:
        "Kültürleri karşılaştırırken en temel yapı **plus/moins/aussi... que** kalıbıdır. Ayrıca **différent de** ve **pareil à** sık kullanılır.\n\n* plus + sıfat + que = daha ...\n* moins + sıfat + que = daha az ...\n* aussi + sıfat + que = ... kadar\n* différent de / pareil à = ...den farklı / ...e benzer",
      examples: [
        { fr: "Le rythme de vie est plus lent ici.", tr: "Burada yaşam temposu daha yavaştır." },
        { fr: "Nos habitudes sont différentes des vôtres.", tr: "Alışkanlıklarımız sizinkilerden farklıdır." }
      ]
    },
    {
      id: "fr-b1-contrast-linkers",
      title: "⚖️ Bölüm 2: Karşıtlık Bağlaçları",
      explanation:
        "Farklılık ve karşıtlık anlatmak için şu bağlaçlar çok kullanılır:\n\n* **tandis que / alors que** = ... iken\n* **par contre / en revanche** = buna karşılık\n* **cependant / pourtant** = ancak / buna rağmen",
      examples: [
        { fr: "En France, on dîne tôt, tandis qu'en Espagne on dîne tard.", tr: "Fransa'da erken yenir, İspanya'da geç." },
        { fr: "Je suis timide; pourtant, j'aime rencontrer des gens.", tr: "Çekingenim; buna rağmen insanlarla tanışmayı seviyorum." }
      ]
    },
    {
      id: "fr-b1-contrast-opinion",
      title: "💬 Bölüm 3: Görüş Bildirme ve Yumuşatma",
      explanation:
        "Kültürler arası konuşmalarda yargılayıcı olmamak için görüşleri yumuşatırız:\n\n* **À mon avis / Selon moi** = bana göre\n* **Il me semble que** = bana öyle geliyor ki\n* **Je trouve que** = bence",
      examples: [
        { fr: "À mon avis, la politesse est essentielle.", tr: "Bana göre nezaket çok önemlidir." },
        { fr: "Il me semble que les salutations sont différentes ici.", tr: "Selamlaşmalar burada farklı gibi geliyor." }
      ]
    }
  ]
};

const unit375Grammar: UnitGrammar = {
  unitId: 375,
  title: "Sanat ve Edebiyat",
  rules: [
    {
      id: "fr-b1-recits-passe-intro",
      title: "📖 Bölüm 1: Hikaye Anlatımında Passé Composé vs Imparfait",
      explanation:
        "Edebiyatta olayları anlatırken iki zaman sık kullanılır:\n\n* **Imparfait**: Arka plan, alışkanlık, süreklilik (okuyordu, gidiyordu)\n* **Passé composé**: Tamamlanmış olay (geldi, başladı)\n\nGenellikle arka planı imparfait ile, olayı passé composé ile veririz.",
      examples: [
        { fr: "Lucie lisait un roman quand son amie est arrivée.", tr: "Lucie roman okuyordu, arkadaşı geldi." },
        { fr: "Nous avons visité l'exposition et nous étions très impressionnés.", tr: "Sergiyi gezdik ve çok etkilenmiştik." }
      ]
    },
    {
      id: "fr-b1-avis-critique",
      title: "📝 Bölüm 2: Eleştiri ve Görüş Bildirme",
      explanation:
        "Bir eser hakkında görüş bildirirken şu yapılar çok kullanılır:\n\n* **À mon avis / Selon moi** = Bana göre\n* **Je trouve que / J'ai trouvé que** = Bence / Buldum ki\n* **C'est + sıfat** = Bu ...\n\nAyrıca görüşü yumuşatmak için **plutôt, assez, vraiment** gibi zarflar ekleyebiliriz.",
      examples: [
        { fr: "À mon avis, ce roman est captivant.", tr: "Bana göre bu roman sürükleyici." },
        { fr: "J'ai trouvé la pièce plutôt longue.", tr: "Oyunu biraz uzun buldum." }
      ]
    },
    {
      id: "fr-b1-pronom-dont",
      title: "🔗 Bölüm 3: 'Dont' ile Bağlantı Kurma",
      explanation:
        "**Dont**, 'de + isim' yapısının yerini alır ve iki cümleyi birleştirir.\n\nFormül: **isim + dont + cümle**\n\nÖzellikle sanat ve edebiyat bağlamında eser, yazar, stil vb. anlatırken çok kullanılır.",
      examples: [
        { fr: "C'est l'auteur dont je parle.", tr: "Bahsettiğim yazar budur." },
        { fr: "Voici le livre dont le style est unique.", tr: "İşte stili eşsiz olan kitap." }
      ]
    }
  ]
};

const unit376Grammar: UnitGrammar = {
  unitId: 376,
  title: "Tarihi Olaylar",
  rules: [
    {
      id: "fr-b1-dates-siecles",
      title: "🗓️ Bölüm 1: Tarih ve Yüzyıl İfadeleri",
      explanation:
        "Tarihi olayları anlatırken tarih ve yüzyıl kalıpları sık kullanılır:\n\n* **en + yıl** = en 1923\n* **au + yüzyıl** = au XIXe siècle\n* **le + gün/ay** = le 29 octobre\n* **il y a + süre** = il y a 100 ans",
      examples: [
        { fr: "La république a été fondée en 1923.", tr: "Cumhuriyet 1923'te kuruldu." },
        { fr: "Au XXe siècle, la ville a beaucoup changé.", tr: "20. yüzyılda şehir çok değişti." }
      ]
    },
    {
      id: "fr-b1-chronologie",
      title: "⏳ Bölüm 2: Kronoloji Bağlaçları",
      explanation:
        "Olayları sıraya koymak için şu bağlaçlar kullanılır:\n\n* **d'abord** = önce\n* **ensuite / puis** = sonra\n* **finalement** = sonunda\n* **pendant ce temps** = bu sırada",
      examples: [
        { fr: "D'abord, ils ont signé le traité; ensuite, la paix est revenue.", tr: "Önce antlaşmayı imzaladılar; sonra barış geri geldi." },
        { fr: "Finalement, la ville a été libérée.", tr: "Sonunda şehir kurtarıldı." }
      ]
    },
    {
      id: "fr-b1-cause-consequence",
      title: "🔗 Bölüm 3: Neden–Sonuç İfadeleri",
      explanation:
        "Tarihi olaylarda neden ve sonuç anlatımı önemlidir:\n\n* **parce que** = çünkü\n* **à cause de** = ... yüzünden\n* **donc / c'est pourquoi** = bu yüzden",
      examples: [
        { fr: "La bataille est connue parce qu'elle a changé le cours de l'histoire.", tr: "Muharebe, tarihin seyrini değiştirdiği için bilinir." },
        { fr: "À cause de la guerre, beaucoup de familles ont quitté la ville.", tr: "Savaş yüzünden birçok aile şehirden ayrıldı." }
      ]
    }
  ]
};

const unit377Grammar: UnitGrammar = {
  unitId: 377,
  title: "Ünlü Şahsiyetler",
  rules: [
    {
      id: "fr-b1-passe-etre-biographie",
      title: "✅ Bölüm 1: Biyografide Passé Composé (Être ile)",
      explanation:
        "Biyografilerde **naître, mourir, devenir, rester** gibi fiiller sık kullanılır. Bu fiiller **être** ile çekilir ve geçmiş zaman ortacı (participe passé) özneye göre uyum alır.\n\n* Elle est **née** en 1990.\n* Il est **devenu** célèbre.",
      examples: [
        { fr: "Elle est née à Paris.", tr: "Paris'te doğdu." },
        { fr: "Ils sont devenus célèbres.", tr: "Ünlü oldular." }
      ]
    },
    {
      id: "fr-b1-age-duree",
      title: "🕒 Bölüm 2: Yaş ve Süre İfadeleri",
      explanation:
        "Kişinin yaşamında dönemleri anlatırken şu yapılar kullanılır:\n\n* **à l'âge de** = ... yaşında\n* **pendant** = boyunca\n* **depuis** = beri\n* **dès** = -den itibaren",
      examples: [
        { fr: "À l'âge de 20 ans, il a commencé sa carrière.", tr: "20 yaşında kariyerine başladı." },
        { fr: "Elle a travaillé pendant dix ans.", tr: "On yıl boyunca çalıştı." }
      ]
    },
    {
      id: "fr-b1-rapport-opinion",
      title: "💬 Bölüm 3: Görüş ve Söz Aktarma",
      explanation:
        "Bir ünlünün düşüncelerini aktarırken şu yapılar kullanılır:\n\n* **Il/Elle dit que...** = ... dediğini söyler\n* **Il/Elle explique que...** = ... açıkladığını söyler\n* **Selon lui/elle...** = Ona göre...",
      examples: [
        { fr: "Il dit que la créativité est essentielle.", tr: "Yaratıcılığın çok önemli olduğunu söyler." },
        { fr: "Selon elle, il faut persévérer.", tr: "Ona göre pes etmemek gerekir." }
      ]
    }
  ]
};

const unit378Grammar: UnitGrammar = {
  unitId: 378,
  title: "Bilimsel Keşifler",
  rules: [
    {
      id: "fr-b1-hypothese-cause",
      title: "🧪 Bölüm 1: Hipotez ve Neden-Sonuç",
      explanation:
        "Bilimsel anlatımda hipotez ve neden-sonuç ilişkisi önemlidir. Sık kullanılan yapılar:\n\n* **Si... alors...** = Eğer... o halde...\n* **parce que / donc** = çünkü / bu yüzden\n* **grâce à** = sayesinde",
      examples: [
        { fr: "Si l'hypothèse est correcte, alors l'expérience réussira.", tr: "Hipotez doğruysa, deney başarılı olur." },
        { fr: "Grâce à cette méthode, les résultats sont fiables.", tr: "Bu yöntem sayesinde sonuçlar güvenilirdir." }
      ]
    },
    {
      id: "fr-b1-objectif-but",
      title: "🎯 Bölüm 2: Amaç Bildirme (pour / afin de)",
      explanation:
        "Bilimsel metinlerde amaç belirtirken **pour + mastar** veya **afin de + mastar** kullanılır.\n\n* Nous testons une formule **pour** vérifier l'hypothèse.\n* Ils répètent l'expérience **afin de** confirmer les résultats.",
      examples: [
        { fr: "On observe les étoiles pour comprendre l'univers.", tr: "Evreni anlamak için yıldızları gözlemleriz." },
        { fr: "Ils mesurent la température afin de comparer les données.", tr: "Verileri karşılaştırmak için sıcaklığı ölçüyorlar." }
      ]
    },
    {
      id: "fr-b1-passif-science",
      title: "🔬 Bölüm 3: Edilgen Yapı (Le Passif) Kullanımı",
      explanation:
        "Bilimsel dilde süreçleri anlatırken edilgen yapı sık kullanılır:\n\n* **être + participe passé** = yapılmak/edilmek\n\nÖrnek: L'expérience **est réalisée** dans le laboratoire.",
      examples: [
        { fr: "La formule est testée plusieurs fois.", tr: "Formül birkaç kez test edilir." },
        { fr: "Les données sont analysées par l'équipe.", tr: "Veriler ekip tarafından analiz edilir." }
      ]
    }
  ]
};

const unit379Grammar: UnitGrammar = {
  unitId: 379,
  title: "Uzay Araştırmaları",
  rules: [
    {
      id: "fr-b1-espace-prepositions",
      title: "🛰️ Bölüm 1: Uzayda Konum Bildiren Edatlar",
      explanation:
        "Uzayla ilgili konuşurken konum bildiren edatlar çok kullanılır:\n\n* **autour de** = etrafında\n* **loin de / près de** = uzağında / yakınında\n* **vers** = -e doğru\n* **dans** = içinde",
      examples: [
        { fr: "La station spatiale tourne autour de la Terre.", tr: "Uzay istasyonu Dünya'nın etrafında döner." },
        { fr: "La fusée part vers Mars.", tr: "Roket Mars'a doğru gider." }
      ]
    },
    {
      id: "fr-b1-distance-position",
      title: "📏 Bölüm 2: Mesafe ve Konum İfadeleri",
      explanation:
        "Mesafe ve konum belirtmek için şu yapılar kullanılır:\n\n* **entre ... et ...** = ... ile ... arasında\n* **au-dessus de / en dessous de** = üstünde / altında\n* **à + distance** = ... uzaklıkta",
      examples: [
        { fr: "La lune est entre la Terre et le soleil.", tr: "Ay, Dünya ile Güneş arasındadır." },
        { fr: "Le satellite est au-dessus de l'atmosphère.", tr: "Uydu atmosferin üzerindedir." }
      ]
    },
    {
      id: "fr-b1-futur-mission",
      title: "🚀 Bölüm 3: Gelecek Zamanla Görev Anlatımı",
      explanation:
        "Uzay görevleri anlatılırken **Futur Simple** sık kullanılır:\n\n* **sera / ira / partira / observera** gibi çekimler\n\nFormül: **fiil kökü + -ai, -as, -a, -ons, -ez, -ont**",
      examples: [
        { fr: "La mission durera six mois.", tr: "Görev altı ay sürecek." },
        { fr: "Les astronautes observeront la planète.", tr: "Astronotlar gezegeni gözlemleyecek." }
      ]
    }
  ]
};

const unit380Grammar: UnitGrammar = {
  unitId: 380,
  title: "Moda Trendleri",
  rules: [
    {
      id: "fr-b1-couleurs-accord",
      title: "🎨 Bölüm 1: Renk Sıfatları (Uyum ve Yer)",
      explanation:
        "Renk sıfatları genellikle isimden sonra gelir ve isimle cinsiyet-sayı uyumu yapar:\n\n* une robe **bleue**\n* des chaussures **noires**\n\nBazı renkler ise değişmez: **marron, orange, kaki** gibi.",
      examples: [
        { fr: "Elle porte une jupe rouge.", tr: "Kırmızı bir etek giyiyor." },
        { fr: "Ils aiment les manteaux marron.", tr: "Kahverengi paltoları severler." }
      ]
    },
    {
      id: "fr-b1-comparatif-style",
      title: "📏 Bölüm 2: Karşılaştırma ve Süperlatif",
      explanation:
        "Tarzları karşılaştırmak için **plus / moins / aussi ... que** kullanılır.\n\n* plus élégant que = daha şık\n* moins cher que = daha ucuz\n* aussi confortable que = ... kadar rahat",
      examples: [
        { fr: "Cette veste est plus élégante que l'autre.", tr: "Bu ceket diğerinden daha şık." },
        { fr: "C'est le vêtement le plus confortable.", tr: "Bu en rahat kıyafet." }
      ]
    },
    {
      id: "fr-b1-porter-mettre",
      title: "👕 Bölüm 3: Porter / Mettre / S'habiller",
      explanation:
        "Giyimle ilgili fiiller:\n\n* **porter** = üzerinde taşımak/giymek\n* **mettre** = giymek/takmak\n* **s'habiller** = giyinmek\n\nGenellikle: **Je mets une veste** / **Je porte une robe** / **Je m'habille vite**",
      examples: [
        { fr: "Je mets un manteau.", tr: "Bir palto giyiyorum." },
        { fr: "Elle s'habille pour la soirée.", tr: "Akşam için giyiniyor." }
      ]
    }
  ]
};

const unit381Grammar: UnitGrammar = {
  unitId: 381,
  title: "Tüketim Alışkanlıkları",
  rules: [
    {
      id: "fr-b1-quantites",
      title: "🛒 Bölüm 1: Miktar ve Nicelik İfadeleri",
      explanation:
        "Tüketim konuşurken miktar belirtmek için şu ifadeler kullanılır:\n\n* **beaucoup de** = çok\n* **un peu de** = biraz\n* **assez de** = yeterince\n* **trop de** = fazla\n* **pas assez de** = yeterince değil",
      examples: [
        { fr: "Je dépense trop d'argent.", tr: "Çok fazla para harcıyorum." },
        { fr: "Il reste un peu de budget.", tr: "Biraz bütçe kaldı." }
      ]
    },
    {
      id: "fr-b1-objectif-achat",
      title: "🎯 Bölüm 2: Amaç Bildirme (pour / afin de)",
      explanation:
        "Alışverişte amaç belirtirken **pour + mastar** veya **afin de + mastar** kullanılır.\n\n* Je compare les prix **pour** économiser.\n* Il achète en ligne **afin de** gagner du temps.",
      examples: [
        { fr: "Je cherche une promotion pour payer moins.", tr: "Daha az ödemek için kampanya arıyorum." },
        { fr: "Elle garde le reçu afin de retourner le produit.", tr: "Ürünü iade etmek için fişi saklar." }
      ]
    },
    {
      id: "fr-b1-opposition",
      title: "⚖️ Bölüm 3: Karşıtlık (mais / pourtant)",
      explanation:
        "Tüketim alışkanlıklarında karşıtlık anlatırken **mais** ve **pourtant** kullanılır.\n\n* Je veux acheter ce téléphone, **mais** il est cher.\n* Il a de l'argent, **pourtant** il économise.",
      examples: [
        { fr: "Le produit est cher, mais la qualité est bonne.", tr: "Ürün pahalı ama kalite iyi." },
        { fr: "Elle a un budget limité; pourtant, elle achète beaucoup.", tr: "Bütçesi sınırlı; buna rağmen çok alışveriş yapıyor." }
      ]
    }
  ]
};

const unit382Grammar: UnitGrammar = {
  unitId: 382,
  title: "ReklamcÄ±lÄ±k",
  rules: [
    {
      id: "fr-b1-ad-imperatif",
      title: "ğŸ“£ BÃ¶lÃ¼m 1: Reklam Dilinde Emir Kipi (ImpÃ©ratif)",
      explanation:
        "Reklamlarda mÃ¼ÅŸteriyi harekete geÃ§irmek iÃ§in emir kipi Ã§ok kullanÄ±lÄ±r.\n\n* **Fiil kÃ¶kÃ¼** kullanÄ±lÄ±r: *Essayez !, DÃ©couvrez !, Profitez !*\n* **Olumsuz emir:** *Ne + fiil + pas*\n\nBu yapÄ±, teklif ve Ã§aÄŸrÄ± cÃ¼mlelerini doÄŸal ve etkili gÃ¶sterir.",
      examples: [
        { fr: "Essayez notre nouveau produit !", tr: "Yeni Ã¼rÃ¼nÃ¼mÃ¼zÃ¼ deneyin!" },
        { fr: "Ne manquez pas l'offre spÃ©ciale !", tr: "Ã–zel teklifi kaÃ§Ä±rmayÄ±n!" }
      ]
    },
    {
      id: "fr-b1-ad-futur",
      title: "ğŸ“… BÃ¶lÃ¼m 2: Lansman Ä°Ã§in Gelecek Zaman",
      explanation:
        "Reklam ve lansman anlatÄ±mÄ±nda iki gelecek zaman sÄ±k kullanÄ±lÄ±r:\n\n* **Futur Proche:** *aller + mastar* (yakÄ±n plan)\n* **Futur Simple:** kÃ¶k + **-ai, -as, -a, -ons, -ez, -ont** (kesin plan / Ã¶ngÃ¶rÃ¼)\n\nÃ–rnek: *Nous allons lancer la campagne* / *La marque lancera un nouveau produit*.",
      examples: [
        { fr: "Nous allons lancer la campagne demain.", tr: "KampanyayÄ± yarÄ±n baÅŸlatacaÄŸÄ±z." },
        { fr: "La marque lancera un nouveau produit en juin.", tr: "Marka haziranda yeni bir Ã¼rÃ¼n Ã§Ä±karacak." }
      ]
    },
    {
      id: "fr-b1-ad-comparatif",
      title: "âš–ï¸ BÃ¶lÃ¼m 3: KarÅŸÄ±laÅŸtÄ±rma ve SÃ¼perlatif",
      explanation:
        "Reklamlarda Ã¼rÃ¼nleri karÅŸÄ±laÅŸtÄ±rmak iÃ§in ÅŸu yapÄ±lar kullanÄ±lÄ±r:\n\n* **plus / moins / aussi ... que** = daha / daha az / ... kadar\n* **le / la / les plus + sÄ±fat** = en ... (sÃ¼perlatif)\n\nBu yapÄ±lar Ã¼rÃ¼nÃ¼ vurgulamak iÃ§in sÄ±kÃ§a kullanÄ±lÄ±r.",
      examples: [
        { fr: "Notre service est plus rapide que celui des concurrents.", tr: "Hizmetimiz rakiplerinkinden daha hÄ±zlÄ±." },
        { fr: "C'est le slogan le plus mÃ©morable de la marque.", tr: "Bu, markanÄ±n en akÄ±lda kalÄ±cÄ± sloganÄ±dÄ±r." }
      ]
    }
  ]
};

const unit383Grammar: UnitGrammar = {
  unitId: 383,
  title: "Haber MedyasÄ±",
  rules: [
    {
      id: "fr-b1-media-source",
      title: "ğŸ“° BÃ¶lÃ¼m 1: Kaynak Belirtme (selon / d'aprÃ¨s)",
      explanation:
        "Haber dilinde bilgi kaynaÄŸÄ±nÄ± belirtmek iÃ§in **selon** ve **d'aprÃ¨s** kullanÄ±lÄ±r:\n\n* **Selon + isim** = ...'e gÃ¶re\n* **D'aprÃ¨s + isim** = ...'e gÃ¶re\n\nBu yapÄ±lar, bilginin kime ait olduÄŸunu aÃ§Ä±klar.",
      examples: [
        { fr: "Selon la police, l'incident est terminÃ©.", tr: "Polise gÃ¶re olay bitti." },
        { fr: "D'aprÃ¨s le journal, la route sera fermÃ©e.", tr: "Gazeteye gÃ¶re yol kapatÄ±lacak." }
      ]
    },
    {
      id: "fr-b1-media-indirect",
      title: "ğŸ’¬ BÃ¶lÃ¼m 2: DolaylÄ± AnlatÄ±m (annoncer / dire que)",
      explanation:
        "Gazetecilikte sÄ±kÃ§a **que** baÄŸlacÄ±yla dolaylÄ± anlatÄ±m kullanÄ±lÄ±r:\n\n* **annoncer que** = duyurmak\n* **dire que / expliquer que** = sÃ¶ylemek / aÃ§Ä±klamak\n\nBu yapÄ±lar haberin iÃ§eriÄŸini aktarÄ±r.",
      examples: [
        { fr: "Le maire annonce que le projet commence demain.", tr: "Belediye baÅŸkanÄ± projenin yarÄ±n baÅŸlayacaÄŸÄ±nÄ± duyuruyor." },
        { fr: "La journaliste explique que les chiffres sont vÃ©rifiÃ©s.", tr: "Gazeteci rakamlarÄ±n doÄŸrulandÄ±ÄŸÄ±nÄ± aÃ§Ä±klÄ±yor." }
      ]
    },
    {
      id: "fr-b1-media-conditionnel",
      title: "âš ï¸ BÃ¶lÃ¼m 3: Gazetecilikte Åart Kipi (SÃ¶ylenti)",
      explanation:
        "Kesin olmayan bilgiler aktarÄ±lÄ±rken **Conditionnel PrÃ©sent** kullanÄ±lÄ±r. Bu, bilginin teyit edilmediÄŸini gÃ¶sterir:\n\n* **Il y aurait...** = ... var(dÄ±) deniyor\n* **Il serait...** = ... olabilirmiÅŸ\n\nBu yapÄ±, haber dilinde ihtiyatlÄ± anlatÄ±m saÄŸlar.",
      examples: [
        { fr: "Il y aurait des retards sur la ligne.", tr: "Hatta gecikmeler var deniyor." },
        { fr: "Le nouveau service serait gratuit.", tr: "Yeni hizmetin Ã¼cretsiz olabileceÄŸi sÃ¶yleniyor." }
      ]
    }
  ]
};

const unit384Grammar: UnitGrammar = {
  unitId: 384,
  title: "Politik Sistemler",
  rules: [
    {
      id: "fr-b1-politique-obligation",
      title: "âš–ï¸ BÃ¶lÃ¼m 1: Zorunluluk ve Ä°zin (il faut / devoir)",
      explanation:
        "Siyasi ve toplumsal kurallarda zorunluluk ve izin belirtmek iÃ§in ÅŸu yapÄ±lar kullanÄ±lÄ±r:\n\n* **il faut + mastar** = gereklidir\n* **devoir + mastar** = zorunda olmak\n* **avoir le droit de + mastar** = izinli olmak\n\nBu yapÄ±lar kanun ve kurallarÄ± anlatÄ±rken Ã§ok sÄ±k kullanÄ±lÄ±r.",
      examples: [
        { fr: "Il faut respecter la loi.", tr: "Yasaya uymak gerekir." },
        { fr: "Les citoyens doivent voter.", tr: "VatandaÅŸlar oy kullanmak zorundadÄ±r." }
      ]
    },
    {
      id: "fr-b1-politique-passif",
      title: "ğŸ“œ BÃ¶lÃ¼m 2: Kanun Dilinde Edilgen YapÄ±",
      explanation:
        "ResmÃ® metinlerde edilgen yapÄ± sÄ±k kullanÄ±lÄ±r:\n\n* **Ãªtre + participe passÃ©** = edilgen\n\nBu yapÄ±, eylemi kimin yaptÄ±ÄŸÄ±ndan Ã§ok, eylemin kendisini vurgular.",
      examples: [
        { fr: "La loi est votÃ©e par le parlement.", tr: "Yasa parlamento tarafÄ±ndan kabul edilir." },
        { fr: "Le projet est approuvÃ©.", tr: "Proje onaylanÄ±r." }
      ]
    },
    {
      id: "fr-b1-politique-relatifs",
      title: "ğŸ§© BÃ¶lÃ¼m 3: KurumlarÄ± Anlatmada Qui / Que",
      explanation:
        "KurumlarÄ± tanÄ±mlarken **qui** ve **que** sÄ±k kullanÄ±lÄ±r:\n\n* **qui** = Ã¶zne yerine\n* **que** = nesne yerine\n\nBu yapÄ±lar bilgiyi akÄ±cÄ± verir.",
      examples: [
        { fr: "Le parti qui gagne les Ã©lections forme le gouvernement.", tr: "SeÃ§imleri kazanan parti hÃ¼kÃ¼meti kurar." },
        { fr: "La loi que le parlement propose est importante.", tr: "Parlamentonun Ã¶nerdiÄŸi yasa Ã¶nemlidir." }
      ]
    }
  ]
};

const unit385Grammar: UnitGrammar = {
  unitId: 385,
  title: "Hukuk ve Adalet (Droit et Justice)",
  rules: [
    {
      id: "fr-b1-droit-subjonctif",
      title: "⚖️ Bölüm 1: Adalet İsteklerinde Subjonctif (Dilek Kipi)",
      explanation:
        "Adalet ve hukuk sisteminde bir şeyin olmasını istemek veya talep etmek için **Subjonctif** sıkça kullanılır.\n\n* **Il est juste que...** (Adil olandır ki...)\n* **Il exige que...** (Talep ediyor ki...)\n* **Nous demandons que...** (İstiyoruz ki...)\n\nBu ifadelerden sonra fiil Subjonctif kipinde çekilir.",
      examples: [
        { fr: "Il est juste que le coupable soit puni.", tr: "Suçlunun cezalandırılması adildir." },
        { fr: "L'avocat exige que son client soit libéré.", tr: "Avukat müvekkilinin serbest bırakılmasını talep ediyor." }
      ]
    },
    {
      id: "fr-b1-droit-passif",
      title: "📝 Bölüm 2: Mahkeme Dilinde Edilgen Yapı (Le Passif)",
      explanation:
        "Hukuk dilinde eylemin kendisi, eylemi yapandan daha önemli olduğu için **Passif (Edilgen Çatı)** çok kullanılır. Formül: **Être + Participe Passé**.\n\n* a été condamné = mahkum edildi\n* sera jugé = yargılanacak",
      examples: [
        { fr: "L'accusé a été condamné à trois ans de prison.", tr: "Sanık üç yıl hapis cezasına çarptırıldı." },
        { fr: "La victime sera indemnisée par l'État.", tr: "Mağdura devlet tarafından tazminat ödenecek." }
      ]
    },
    {
      id: "fr-b1-droit-conditionnel",
      title: "⚠️ Bölüm 3: İddialarda Conditionnel (Şart Kipi) Kullanımı",
      explanation:
        "Kesinleşmemiş suçlamalarda veya haberlerde **Conditionnel** (Şart/Söylenti Kipi) kullanılır. Bu, bilginin bir iddia olduğunu ve henüz mahkemece kanıtlanmadığını gösterir.\n\n* **Il aurait volé...** = ...çalmış olduğu söyleniyor/iddia ediliyor\n* **Le suspect serait...** = Şüphelinin ... olduğu iddia ediliyor",
      examples: [
        { fr: "Le suspect aurait quitté le pays.", tr: "Şüphelinin ülkeyi terk ettiği iddia ediliyor." },
        { fr: "Il serait le principal responsable de l'infraction.", tr: "İhlalin başlıca sorumlusu olduğu söyleniyor." }
      ]
    }
  ]
};

const unit386Grammar: UnitGrammar = {
  unitId: 386,
  title: "İnsan Hakları (Les Droits de l'Homme)",
  rules: [
    {
      id: "fr-b1-droits-subjonctif",
      title: "⚖️ Bölüm 1: Gereklilik ve İrade (Subjonctif)",
      explanation:
        "İnsan hakları konularında bir şeyin olmasını istemek veya talep etmek için **Subjonctif** sıkça kullanılır.\n\n* **Il est nécessaire que...** (Gereklidir ki...)\n* **Nous voulons que...** (İstiyoruz ki...)\n* **Ils exigent que...** (Talep ediyorlar ki...)\n\nBu ifadelerden sonra fiil Subjonctif kipinde çekilir.",
      examples: [
        { fr: "Il est nécessaire que nous respections les droits de chacun.", tr: "Herkesin haklarına saygı duymamız gereklidir." },
        { fr: "Ils exigent que la loi change.", tr: "Yasanın değişmesini talep ediyorlar." }
      ]
    },
    {
      id: "fr-b1-droits-passif",
      title: "📝 Bölüm 2: Edilgen Yapı (Le Passif)",
      explanation:
        "Hukuk ve insan hakları dilinde eylemin kendisi, eylemi yapandan daha önemli olduğu için **Passif (Edilgen Çatı)** çok kullanılır. Formül: **Être + Participe Passé**.\n\n* est protégé = korunur\n* sont respectés = saygı duyulur",
      examples: [
        { fr: "Les réfugiés sont protégés par la loi internationale.", tr: "Mülteciler uluslararası hukuk tarafından korunur." },
        { fr: "La liberté d'expression doit être garantie.", tr: "İfade özgürlüğü garanti altına alınmalıdır." }
      ]
    },
    {
      id: "fr-b1-droits-infinitif",
      title: "⚠️ Bölüm 3: Hak Bildirme (Avoir le droit de)",
      explanation:
        "Hak ve özgürlüklerden bahsederken **avoir le droit de + mastar** yapısı kullanılır.\n\n* le droit de + fiil = ... hakkı\n* le droit à + isim = ... hakkı",
      examples: [
        { fr: "Tout le monde a le droit de vivre en liberté.", tr: "Herkesin özgürce yaşama hakkı vardır." },
        { fr: "Les travailleurs ont droit à des conditions justes.", tr: "İşçilerin adil şartlara hakkı vardır." }
      ]
    }
  ]
};

const unit387Grammar: UnitGrammar = {
  unitId: 387,
  title: "Gönüllülük (Le Bénévolat)",
  rules: [
    {
      id: "fr-b1-benevolat-but",
      title: "🎯 Bölüm 1: Amaç Bildiren Bağlaçlar (pour que / afin que)",
      explanation:
        "Sosyal sorumluluk projelerinde, bir hedefe ulaşmak için yapılan eylemleri anlatırken 'pour que' (diye, olması için) ve 'afin que' kullanılır. Bu bağlaçlardan sonra gelen fiil her zaman **Subjonctif** kipinde çekilir.",
      examples: [
        { fr: "Je travaille comme bénévole pour que les enfants aient un avenir.", tr: "Çocukların bir geleceği olması için gönüllü olarak çalışıyorum." },
        { fr: "Nous faisons des dons afin que la recherche avance.", tr: "Araştırmanın ilerlemesi için bağış yapıyoruz." }
      ]
    },
    {
      id: "fr-b1-benevolat-indefinis",
      title: "🌍 Bölüm 2: Belgisiz Zamirler (Chacun, Personne, Tout le monde)",
      explanation:
        "Toplumsal dayanışmadan bahsederken belgisiz zamirler sıkça kullanılır:\n\n* **Chacun** = Herkes / Her biri (Tekil fiil alır)\n* **Tout le monde** = Herkes (Tekil fiil alır)\n* **Personne ne** = Hiç kimse (Olumsuzluk ifade eder, pas almaz)\n* **Quelqu'un** = Birisi",
      examples: [
        { fr: "Chacun peut faire la différence.", tr: "Herkes fark yaratabilir." },
        { fr: "Personne ne doit être oublié.", tr: "Kimse unutulmamalıdır." }
      ]
    },
    {
      id: "fr-b1-benevolat-engagement",
      title: "🤝 Bölüm 3: Katılım Belirten Yapılar (S'engager / Décider)",
      explanation:
        "Gönüllülük eylemlerine katılmayı anlatırken şu edat yapıları kullanılır:\n\n* **s'engager à + infinitif** = ... yapmaya söz vermek / gönüllü katılmak\n* **s'engager dans + isim** = ...'ya katılmak / girmek\n* **décider de + infinitif** = ... yapmaya karar vermek",
      examples: [
        { fr: "Elle s'est engagée à distribuer des repas.", tr: "Yemek dağıtmaya söz verdi (gönüllü oldu)." },
        { fr: "Ils ont décidé de soutenir l'association.", tr: "Derneği desteklemeye karar verdiler." }
      ]
    }
  ]
};

const unit388Grammar: UnitGrammar = {
  unitId: 388,
  title: "Göç ve Mülteciler (L'Immigration et les Réfugiés)",
  rules: [
    {
      id: "fr-b1-immigration-cause",
      title: "📌 Bölüm 1: Sebep Bildiren Yapılar (à cause de / grâce à)",
      explanation:
        "Göç konusunda sebep-sonuç ilişkilerini anlatırken iki önemli yapı kullanılır:\n\n* **à cause de + isim** = yüzünden (olumsuz sebep)\n* **grâce à + isim** = sayesinde (olumlu sebep)\n\nBu yapılar cümlenin başında veya sonunda kullanılabilir.",
      examples: [
        { fr: "Ils ont quitté leur pays à cause de la guerre.", tr: "Savaş yüzünden ülkelerini terk ettiler." },
        { fr: "Grâce à l'association, elle a trouvé un emploi.", tr: "Dernek sayesinde bir iş buldu." }
      ]
    },
    {
      id: "fr-b1-immigration-passe-compose",
      title: "⏳ Bölüm 2: Passé Composé ile Göç Anlatımı",
      explanation:
        "Geçmişte yapılan göç eylemlerini anlatırken Passé Composé kullanılır. Özellikle yer değiştirme fiilleri (arriver, partir, venir, aller) **être** yardımcı fiili ile çekilir ve özneyle uyum sağlar.\n\n* Elle **est arrivée** en France.\n* Ils **sont partis** de leur pays.\n* Nous **sommes venus** pour une vie meilleure.",
      examples: [
        { fr: "Amara est arrivée en France il y a deux ans.", tr: "Amara iki yıl önce Fransa'ya geldi." },
        { fr: "Ils ont dû fuir à cause du conflit.", tr: "Çatışma yüzünden kaçmak zorunda kaldılar." }
      ]
    },
    {
      id: "fr-b1-immigration-expression",
      title: "🗣️ Bölüm 3: Uyum ve Kabul İfadeleri",
      explanation:
        "Entegrasyon sürecini anlatırken sık kullanılan yapılar:\n\n* **s'adapter à** = ...ya uyum sağlamak\n* **se sentir intégré(e)** = uyum sağlamış hissetmek\n* **participer à** = ...ya katılmak\n* **il faut du temps pour** = ... için zaman gerekir",
      examples: [
        { fr: "Il faut du temps pour s'adapter à un nouveau pays.", tr: "Yeni bir ülkeye uyum sağlamak zaman alır." },
        { fr: "Elle se sent intégrée dans sa communauté.", tr: "Topluluğunda uyum sağlamış hissediyor." }
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
    367: unit367Grammar,
    368: unit368Grammar,
    369: unit369Grammar,
    370: unit370Grammar,
    371: unit371Grammar,
    372: unit372Grammar,
    373: unit373Grammar,
    374: unit374Grammar,
    375: unit375Grammar,
    376: unit376Grammar,
    377: unit377Grammar,
    378: unit378Grammar,
    379: unit379Grammar,
    380: unit380Grammar,
    381: unit381Grammar,
    382: unit382Grammar,
    383: unit383Grammar,
    384: unit384Grammar,
    385: unit385Grammar,
    386: unit386Grammar,
    387: unit387Grammar,
    388: unit388Grammar
  };
  return grammar[unitId];
}
