import { UnitGrammar } from "./grammar";

// ===== FRANSIZCA A2 GRAMER KURALLARI (Üniteler 331-360) =====
// CEFR A2 Standartları: Geçmiş zaman, Gelecek zaman, Karşılaştırmalar, Günlük durumlar

// ===== ÜNİTE 331: GEÇMİŞ TATİLLER =====
const unit331Grammar: UnitGrammar = {
  unitId: 331,
  title: "Geçmiş Tatiller",
  rules: [
    {
      id: "fr-a2-pc-logic",
      title: "🏗️ Bölüm 1: Passé Composé Nedir?",
      explanation:
        'Adı üzerinde "Composé" yani Birleşik bir zamandır. Tek bir kelimeyle yapılmaz. İki parçanın birleşmesiyle oluşur.\n\n* Türkçede "Geldim" deriz (Tek parça).\n* Fransızlar "Gelmeye sahibim" veya "Gelmiş durumdayım" mantığını kullanır.\n\n**🧱 Formül (1 + 1 = 2):**\n$$\\text{ÖZNE} + \\text{[YARDIMCI FİİL]} + \\text{[ANA FİİLİN GEÇMİŞ HALİ]}$$\n\n* **Yardımcı Fiil (Motor):** Ya AVOIR (Sahip olmak) ya da ÊTRE (Olmak).\n* **Ana Fiil (Vagon):** Buna Participe Passé denir. Fiilin geçmişe dönüşmüş halidir.',
      examples: [
        { fr: "J'ai mangé.", tr: "Yemek yedim (Yemeye sahibim)." },
        { fr: "Je suis parti.", tr: "Gittim (Gitmiş durumdayım)." },
      ],
    },
    {
      id: "fr-a2-pc-avoir",
      title: "📝 Bölüm 2: AVOIR + Participe Passé (Genel Kural)",
      explanation:
        'Fransızcadaki fiillerin %95\'i yardımcı fiil olarak AVOIR kullanır. Yani "Yaptım, Ettim, Gördüm" derken aslında "Yapmaya sahibim" dersin.\n\n**A. Adım: Motoru Seç (Avoir Çekimi):**\n* J\'ai (Sahibim)\n* Tu as (Sahipsin)\n* Il a (Sahip)\n* Nous avons (Sahibiz)\n* Vous avez (Sahipsiniz)\n* Ils ont (Sahipler)',
      examples: [
        { fr: "J'ai parlé.", tr: "Konuştum." },
        { fr: "Tu as fini.", tr: "Bitirdin." },
      ],
    },
    {
      id: "fr-a2-pc-participe",
      title: "🚂 B. Adım: Vagonu Tak (Participe Passé Kuralları)",
      explanation:
        "Fiillerin son harfine göre vagon şekil değiştirir:\n\n**1. Sonu -ER ile bitenler (-ER gider, -É gelir):**\n* Manger → Mangé (Okunuş değişmez!)\n* Parler → Parlé\n\n**2. Sonu -IR ile bitenler (-IR gider, -I gelir):**\n* Finir → Fini\n* Dormir → Dormi\n\n**3. Sonu -RE ile bitenler (-RE gider, -U gelir):**\n* Attendre → Attendu\n* Vendre → Vendu",
      examples: [
        { fr: "J'ai mangé une pomme.", tr: "Bir elma yedim." },
        { fr: "Il a attendu le bus.", tr: "Otobüsü bekledi." },
      ],
    },
    {
      id: "fr-a2-pc-etre",
      title: "🚶 Bölüm 3: ÊTRE ile Çekilenler (Dr. & Mrs. Vandertramp)",
      explanation:
        "Geriye kalan %5'lik VIP fiiller Avoir'ı kabul etmez, ÊTRE ile çekilirler. Bunlar genellikle hareket veya durum değişikliği bildiren fiillerdir.\n\n**A. Adım: Motoru Değiştir (Être Çekimi):**\nJe suis, Tu es, Il est, Nous sommes, Vous êtes, Ils sont.\n\n**B. Adım: VIP Listesi (Mastar → Participe Passé):**\n* Aller → Allé (Gitmek)\n* Venir → Venu (Gelmek)\n* Arriver → Arrivé (Varmak)\n* Partir → Parti (Ayrılmak)\n* Entrer → Entré (Girmek)\n* Sortir → Sorti (Çıkmak)\n* Monter → Monté (Çıkmak)\n* Descendre → Descendu (İnmek)\n* Naître → Né (Doğmak)\n* Mourir → Mort (Ölmek)\n* Rester → Resté (Kalmak)\n* Tomber → Tombé (Düşmek)\n* Retourner → Retourné (Dönmek)",
      examples: [
        { fr: "Je suis allé au cinéma.", tr: "Sinemaya gittim." },
        { fr: "Il est né en 2000.", tr: "2000'de doğdu." },
      ],
    },
    {
      id: "fr-a2-pc-accord",
      title: "⚠️ C. Adım: A2 Seviyesi İçin Altın Kural (UYUM / L'ACCORD)",
      explanation:
        "Eğer motorun ÊTRE ise, vagonu (geçmiş fiili) öznenin cinsiyetine ve sayısına uydurmak ZORUNDASIN.\n\n* **Erkek:** Ek yok (Il est allé)\n* **Kadın:** Sonuna -e ekle (Elle est allée)\n* **Çoğul:** Sonuna -s ekle (Ils sont allés)\n* **Kadın Çoğul:** Sonuna -es ekle (Elles sont allées)\n\nOkunuş genellikle değişmez, sadece yazarken eklenir!",
      examples: [
        { fr: "Elle est partie.", tr: "O (kadın) gitti." },
        { fr: "Nous sommes tombés.", tr: "Biz düştük." },
        { fr: "Elles sont arrivées.", tr: "Onlar (kadınlar) vardılar." },
      ],
    },
  ],
};

// ===== ÜNİTE 332: GELECEK PLANLARI =====
const unit332Grammar: UnitGrammar = {
  unitId: 332,
  title: "Gelecek Planları",
  rules: [
    {
      id: "fr-a2-fp-step1",
      title: "⚙️ 1. Adım: Motoru Hazırla (Aller Fiili)",
      explanation:
        'Bu zamanı kurmak için "Gitmek" fiilini yardımcı oyuncu olarak kullanırız. Bunu ezbere bilmek zorundasın.\n\n**Şahıs - Aller Çekimi - Okunuşu - Anlamı**\n* Je **Vais** (Ve) ...-ceğim\n* Tu **Vas** (Va) ...-ceksin\n* Il/Elle **Va** (Va) ...-cek\n* Nous **Allons** (Nu zalon) ...-ceğiz (Ulama!)\n* Vous **Allez** (Vu zale) ...-ceksiniz (Ulama!)\n* Ils/Elles **Vont** (Von) ...-cekler',
      examples: [
        { fr: "Je vais...", tr: "Ben ...-ceğim" },
        { fr: "Tu vas...", tr: "Sen ...-ceksin" },
      ],
    },
    {
      id: "fr-a2-fp-step2",
      title: "✅ 2. Olumlu Cümle Formülü (Standart)",
      explanation:
        "Motorun arkasına fiilin hiç bozulmamış halini (Mastar) ekle.\n\n**Formül:** ÖZNE + ALLER ÇEKİMİ + MASTAR FİİL\n\n* **Ben konuşacağım:** Je vais parler. (Jö ve parle)\n* **Sen bitireceksin:** Tu vas finir. (Tü va fini)\n* **Biz dans edeceğiz:** Nous allons danser. (Nu zalon danse)",
      examples: [
        { fr: "Je vais parler.", tr: "Konuşacağım." },
        { fr: "Nous allons danser.", tr: "Dans edeceğiz." },
      ],
    },
    {
      id: "fr-a2-fp-step3",
      title: "❌ 3. Olumsuz Cümle Formülü (Sandviç)",
      explanation:
        "Olumsuzluk eki (Ne... Pas), sadece yardımcı fiili (Aller) içine alır. Ana fiil dışarıda kalır.\n\n**Formül:** ÖZNE + NE + ALLER + PAS + MASTAR FİİL\n\n* **Ben yemeyeceğim:** Je **ne** vais **pas** manger. (Jö nö ve pa manje)\n* **O gelmeyecek:** Il **ne** va **pas** venir. (İl nö va pa vönir)",
      examples: [
        { fr: "Je ne vais pas manger.", tr: "Yemeyeceğim." },
        { fr: "Il ne va pas venir.", tr: "Gelmeyecek." },
      ],
    },
    {
      id: "fr-a2-fp-step4",
      title: "🪞 4. Dönüşlü Fiiller (TUZAK NOKTASI!) ⚠️",
      explanation:
        "Se laver (Yıkanmak), Se lever (Kalkmak) gibi fiillerde zamir (me, te, se...) iki fiilin arasına girer.\n\n**Formül:** ÖZNE + ALLER + [ME/TE/SE] + FİİL\n\n* **Ben dinleneceğim:** Je vais **me** reposer. (Jö ve mö röpoze)\n* **Sen hazırlanacaksın:** Tu vas **te** préparer. (Tü va tö prepare)\n* **Biz kalkacağız:** Nous allons **nous** lever. (Nu zalon nu löve)\n\n**Olumsuz:** Je ne vais pas me reposer. (Dinlenmeyeceğim.)",
      examples: [
        { fr: "Je vais me reposer.", tr: "Dinleneceğim." },
        { fr: "Tu vas te préparer.", tr: "Hazırlanacaksın." },
      ],
    },
    {
      id: "fr-a2-fp-step5",
      title: "❓ 5. Soru Sorma Şekilleri",
      explanation:
        "Üç farklı şekilde sorabilirsin:\n\n1.  **Ses Tonuyla (En Kolayı):** Tu vas sortir ? (Çıkacak mısın?)\n2.  **Est-ce que ile (Standart):** Est-ce que tu vas sortir ?\n3.  **Yer Değiştirme ile (Resmi):** Sadece Aller fiili özne ile yer değiştirir. Vas-tu sortir ?",
      examples: [
        { fr: "Tu vas sortir ce soir ?", tr: "Bu akşam çıkacak mısın?" },
        { fr: "Vas-tu regarder le film ?", tr: "Filmi izleyecek misin?" },
      ],
    },
    {
      id: "fr-a2-fp-step6",
      title: "⏳ 6. Zaman Zarfları (Anahtar Kelimeler)",
      explanation:
        "Bu kelimeleri cümlenin başına veya sonuna koyarsan cümlelerin A2 seviyesine çıkar.\n\n* **Demain:** Yarın (Dömen)\n* **Ce soir:** Bu akşam (Sö suar)\n* **Bientôt:** Yakında/Birazdan (Biyento)\n* **Tout à l'heure:** Az sonra (Tu ta lör)\n* **La semaine prochaine:** Gelecek hafta (La sömen proşen)\n* **Dans 10 minutes:** 10 dakika içinde (Dan di minüt)\n* **Cet après-midi:** Bu öğleden sonra (Set apre-midi)",
      examples: [
        {
          fr: "Qu'est-ce que tu vas faire ce soir ?",
          tr: "Bu akşam ne yapacaksın?",
        },
        {
          fr: "Je vais regarder un film et je vais dormir.",
          tr: "Bir film izleyeceğim ve uyuyacağım.",
        },
      ],
    },
  ],
};

// ===== ÜNİTE 333: SAĞLIK VE HASTALIK =====
const unit333Grammar: UnitGrammar = {
  unitId: 333,
  title: "Sağlık ve Hastalık",
  rules: [
    {
      id: "fr-a2-avoir-pain",
      title: "🤕 BÖLÜM 1: Ağrıyı İfade Etmek (Avoir mal à...)",
      explanation:
        'Fransızcada "Ağrım var" demek için AVOIR (Sahip olmak) fiilini kullanırız.\n\n"Başım ağrıyor" derken "Ben ağrıya sahibim" diyeceğiz.',
      table: {
        headers: ["Şahıs", "Çekim", "Okunuşu 🔊", "Anlamı (Burada)"],
        rows: [
          ["Je", "J'ai...", "Je", "Benim ... ağrıyor"],
          ["Tu", "as...", "Tü a", "Senin ... ağrıyor"],
          ["Il / Elle", "a...", "İl a / El a", "Onun ... ağrıyor"],
          ["Nous", "avons...", "Nu zavon", "Bizim ... ağrıyor"],
          ["Vous", "avez...", "Vu zave", "Sizin ... ağrıyor"],
          ["Ils", "ont...", "İl zon", "Onların ... ağrıyor"],
        ],
      },
      examples: [
        {
          fr: "Özne + Avoir + MAL + EDAT + VÜCUT BÖLÜMÜ",
          tr: "🦴 Gramer Formülü",
        },
        { fr: "AU (O) → Erkek kelimeler için (Le ile başlayanlar)", tr: "" },
        {
          fr: "À LA (A la) → Dişi kelimeler için (La ile başlayanlar)",
          tr: "",
        },
        { fr: "À L' (A l...) → Sesli harfle başlayanlar için", tr: "" },
        { fr: "AUX (O) → Çoğul kelimeler için (Les ile başlayanlar)", tr: "" },
      ],
    },
    {
      id: "fr-a2-body-parts-table",
      title: "📋 Vücut Sözlüğü ve Örnek Cümleler",
      explanation:
        "Hangi vücut bölümü hangi edatı alır? Cinsiyete göre edat değişir.",
      table: {
        headers: ["Bölge", "Cinsiyet", "Cümle", "Okunuşu 🔊"],
        rows: [
          ["Baş (Tête)", "Dişi", "J'ai mal à la tête.", "Je mal a la tet."],
          [
            "Karın (Ventre)",
            "Erkek",
            "Tu as mal au ventre.",
            "Tü a mal o vantr.",
          ],
          [
            "Boğaz (Gorge)",
            "Dişi",
            "Il a mal à la gorge.",
            "İl a mal a la gorj.",
          ],
          ["Sırt (Dos)", "Erkek", "J'ai mal au dos.", "Je mal o do."],
          [
            "Dişler (Dents)",
            "Çoğul",
            "Nous avons mal aux dents.",
            "Nu zavon mal o dan.",
          ],
          [
            "Gözler (Yeux)",
            "Çoğul",
            "Vous avez mal aux yeux.",
            "Vu zave mal o zyu.",
          ],
          [
            "Kulak (Oreille)",
            "Sesli",
            "J'ai mal à l'oreille.",
            "Je mal a lorey.",
          ],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-etre-health",
      title: "🤒 BÖLÜM 2: Hastalık Durumları (Être Fiili)",
      explanation:
        "Sadece bir yerin ağrımıyorsa, genel durumunu anlatmak için ÊTRE (Olmak) fiilini kullanırsın.\n\n• Je suis malade. (Hastayım.) → Jö süi malad.\n• Je suis fatigué(e). (Yorgunum.) → Jö süi fatige.\n• Je suis enrhumé(e). (Nezleyim.) → Jö süi anrüme.\n\n🌡️ Ekstra Belirtiler (Avoir ile):\n• J'ai de la fièvre. (Ateşim var.) → Je dö la fyevr.\n• J'ai la grippe. (Gribim.) → Je la grip.",
      examples: [
        { fr: "Je suis malade.", tr: "Hastayım. (Jö süi malad)" },
        { fr: "J'ai de la fièvre.", tr: "Ateşim var. (Je dö la fyevr)" },
        { fr: "Je suis enrhumé(e).", tr: "Nezleyim. (Jö süi anrüme)" },
      ],
    },
    {
      id: "fr-a2-il-faut",
      title: "☝️ BÖLÜM 3a: IL FAUT (Gerekiyor / Lazım) - Kişisiz",
      explanation:
        'Bu bir fiil çekimi değildir, kalıptır. Öznesi hep "Il"dir ama kişiyi kastetmez, genel durumu anlatır.\n\nFormül: Il faut + Mastar Fiil',
      examples: [
        { fr: "Il faut se reposer.", tr: "Dinlenmek lazım. (İl fo sö röpoze)" },
        {
          fr: "Il faut boire de l'eau.",
          tr: "Su içmek gerekir. (İl fo buar dö lo)",
        },
      ],
    },
    {
      id: "fr-a2-devoir",
      title: "☝️ BÖLÜM 3b: DEVOIR (Zorunda Olmak / -Meli -Malı) - Kişisel",
      explanation:
        'Birine parmak sallayarak "Sen şunu yapmalısın" demek için bu fiili çekimlemelisin.',
      table: {
        headers: ["Şahıs", "Çekim", "Okunuşu 🔊", "Anlamı"],
        rows: [
          ["Je", "Dois", "Dua", "...-meliyim / Zorundayım"],
          ["Tu", "Dois", "Dua", "...-melisin"],
          ["Il / Elle", "Doit", "Dua", "...-meli"],
          ["Nous", "Devons", "Dövon", "...-meliyiz"],
          ["Vous", "Devez", "Döve", "...-melisiniz"],
          ["Ils / Elles", "Doivent", "Duav", "...-meliler"],
        ],
      },
      examples: [
        {
          fr: "Tu dois prendre tes médicaments.",
          tr: "İlaçlarını almalısın. (Tü dua prandr te medikaman)",
        },
        {
          fr: "Vous devez arrêter de fumer.",
          tr: "Sigarayı bırakmalısınız. (Vu döve arete dö füme)",
        },
        {
          fr: "Je dois aller chez le médecin.",
          tr: "Doktora gitmeliyim. (Jö dua ale şe lö medsen)",
        },
      ],
    },
    {
      id: "fr-a2-medical-verbs",
      title: "🗣️ BÖLÜM 4: Tedavi Fiilleri (Mastar Hali)",
      explanation:
        "Bu fiilleri Il faut veya Devoir arkasına ekleyerek kullanırız.",
      table: {
        headers: ["Fiil", "Anlamı", "Okunuşu 🔊", "Örnek Kullanım"],
        rows: [
          ["Prendre", "Almak (İlaç)", "Prandr", "Prendre des médicaments"],
          ["Se reposer", "Dinlenmek", "Sö röpoze", "Il faut se reposer"],
          ["Aller", "Gitmek", "Ale", "Aller à l'hôpital (Hastaneye gitmek)"],
          ["Boire", "İçmek", "Buar", "Boire beaucoup d'eau (Çok su içmek)"],
          ["Manger", "Yemek", "Manje", "Manger léger (Hafif yemek)"],
        ],
      },
      examples: [],
    },
  ],
};

// ===== ÜNİTE 334: BANKADA =====
const unit334Grammar: UnitGrammar = {
  unitId: 334,
  title: "Bankada",
  rules: [
    {
      id: "fr-a2-polite-phrases",
      title: "🏛️ BÖLÜM 1: 3 Büyük Kibarlık Kalıbı",
      explanation:
        'Bu üç kalıbı ezberlersen Fransa\'nın her yerinde kapılar sana açılır.\n\n**1. "Je voudrais..." (İsterdim / Rica ediyorum)**\n*Je veux (İstiyorum) demek YASAK!* 🚫 Onun yerine bunu kullanıyoruz.\n* **Fiil:** Vouloir (İstemek)\n* **Okunuşu:** Jö vudre...\n\n**2. "J\'aimerais..." (...mek İsterdim)**\nBir hayalini veya isteğini çok nazikçe belirtmek için kullanılır.\n* **Fiil:** Aimer (Sevmek)\n* **Okunuşu:** Jemöre... (Jem-ö-re)\n\n**3. "Pourriez-vous... ?" (...-ebilir miydiniz?)**\n"Pouvez-vous" (Yapabilir misiniz?) kalıbının ultra kibar halidir.\n* **Fiil:** Pouvoir (-Ebilmek)\n* **Okunuşu:** Puriye-vu...?',
      examples: [
        { fr: "Je voudrais un café.", tr: "Bir kahve rica ediyorum." },
        {
          fr: "J'aimerais parler au directeur.",
          tr: "Müdürle konuşmak isterdim.",
        },
        { fr: "Pourriez-vous m'aider ?", tr: "Bana yardım edebilir miydiniz?" },
      ],
    },
    {
      id: "fr-a2-bank-vocab",
      title: "🏦 BÖLÜM 2: Banka Sözlüğü (La Banque)",
      explanation:
        "Banka işlerini halletmek için bu fiilleri mastar (ham) halleriyle bilmen yeterli. Çünkü bunları **Je voudrais...** arkasına takacağız.",
      table: {
        headers: ["Fiil / Kelime", "Anlamı", "Okunuşu 🔊"],
        rows: [
          ["Ouvrir un compte", "Hesap açmak", "Uvrir ön kont"],
          ["Faire un virement", "Havale yapmak", "Fer ön virman"],
          ["Retirer de l'argent", "Para çekmek", "Rötire dö larjan"],
          ["Déposer de l'argent", "Para yatırmak", "Depoze dö larjan"],
          ["Changer de l'argent", "Para bozdurmak", "Şanje dö larjan"],
          ["Une carte bancaire", "Banka kartı", "Ün kart banker"],
          ["Signer", "İmzalamak", "Sinye"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-bank-dialogue",
      title: "🗣️ BÖLÜM 3: Örnek Diyalog (Au Guichet)",
      explanation:
        "**Banquier:** Bonjour Monsieur, je peux vous aider ?\n(Merhaba beyefendi, size yardım edebilir miyim?)\n\n**Müşteri:** Bonjour. Je voudrais ouvrir un compte bancaire, s'il vous plaît.\n(Merhaba. Bir banka hesabı açmak isterdim/istiyorum lütfen.)\n\n**Banquier:** Bien sûr. Avez-vous une pièce d'identité ?\n(Tabii ki. Kimliğiniz var mı?)\n\n**Müşteri:** Oui, voilà. J'aimerais aussi demander une carte de crédit.\n(Evet, buyrun. Ayrıca bir kredi kartı da istemek isterdim.)\n\n**Banquier:** D'accord. Pourriez-vous signer ici, s'il vous plaît ?\n(Tamamdır. Burayı imzalayabilir miydiniz lütfen?)",
      examples: [],
    },
    {
      id: "fr-a2-inversion-questions",
      title: "📝 BÖLÜM 4: Soru Sorma (Inversion - Ters Çevirme)",
      explanation:
        "Resmi dilde soru sorarken, ses tonunu yükseltmek yetmez. Fiil ve Öznenin yerini değiştiririz. Bu çok şık durur.\n\n**Normal (Arkadaşına):** Vous avez un stylo ?\n* **Resmi (Bankada):** **Avez-vous** un stylo ? (Kaleminiz var mı?)\n\n**Normal:** Vous voulez un reçu ?\n* **Resmi:** **Voulez-vous** un reçu ? (Makbuz istiyor musunuz?)",
      examples: [
        { fr: "Avez-vous une pièce d'identité ?", tr: "Kimliğiniz var mı?" },
        { fr: "Voulez-vous un café ?", tr: "Kahve ister misiniz?" },
      ],
    },
  ],
};

// ===== ÜNİTE 335: POSTANEDE =====
const unit335Grammar: UnitGrammar = {
  unitId: 335,
  title: "Postanede",
  rules: [
    {
      id: "fr-a2-quantifiers-basic",
      title: "📏 BÖLÜM 1: 4 Büyük Miktar Zarfı",
      explanation:
        "Fransızcada miktar belirtirken bu 4 kelimeyi adın gibi bilmelisin. Bunlar miktar terazisidir.\n\n⚠️ **Kural:** Bu kelimelerden sonra gelen isim çoğul olsa bile, aradaki DE asla DES olmaz! Hep DE (veya D') olarak kalır.",
      table: {
        headers: ["Fransızca", "Anlamı", "Formül", "Okunuşu 🔊"],
        rows: [
          ["Beaucoup de", "Çok", "Beaucoup de + İsim", "Boku dö"],
          ["Un peu de", "Biraz", "Un peu de + İsim", "Ön pö dö"],
          ["Trop de", "Aşırı / Çok fazla", "Trop de + İsim", "Tro dö"],
          ["Assez de", "Yeterince", "Assez de + İsim", "Ase dö"],
        ],
      },
      examples: [
        {
          fr: "J'ai beaucoup d'amis.",
          tr: "Çok arkadaşım var. (Des amis DEĞİL!)",
        },
        { fr: "Je veux un peu de sucre.", tr: "Biraz şeker istiyorum." },
        { fr: "Il y a trop de bruit.", tr: "Aşırı gürültü var." },
      ],
    },
    {
      id: "fr-a2-containers",
      title: "📦 BÖLÜM 2: Kaplar ve Ölçü Birimleri",
      explanation:
        'Markette her şeyi "çok" veya "az" diye almayız. Şişeyle, kiloyla, dilimle alırız. Burada da kural aynıdır: **ÖLÇÜ BİRİMİ + DE + ÜRÜN**',
      table: {
        headers: ["Birim", "Fransızca", "Örnek", "Okunuşu 🔊"],
        rows: [
          [
            "Bir şişe...",
            "Une bouteille de...",
            "Une bouteille d'eau",
            "Ün butey do",
          ],
          [
            "Bir bardak...",
            "Un verre de...",
            "Un verre de thé",
            "Ön ver dö te",
          ],
          [
            "Bir fincan...",
            "Une tasse de...",
            "Une tasse de café",
            "Ün tas dö kafe",
          ],
          [
            "Bir kilo...",
            "Un kilo de...",
            "Un kilo de pommes",
            "Ön kilo dö pom",
          ],
          [
            "Bir dilim...",
            "Une tranche de...",
            "Une tranche de pain",
            "Ün tranş dö pen",
          ],
          [
            "Bir parça...",
            "Un morceau de...",
            "Un morceau de gâteau",
            "Ön morso dö gato",
          ],
          [
            "Bir paket...",
            "Un paquet de...",
            "Un paquet de pâtes",
            "Ön pake dö pat",
          ],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-quantifiers-elision",
      title: "⚠️ BÖLÜM 3: Altın Kural (D' Durumu)",
      explanation:
        "Eğer miktar kelimesinden sonra gelen ürün **sesli harf** ile (veya H ile) başlıyorsa, DE düşer ve **D'** olur.\n\n💡 **İpucu:** Sayılabilen vs Sayılamayan Fark Etmez! İngilizcedeki Much/Many ayrımı burada yoktur.",
      examples: [
        { fr: "Beaucoup d'eau", tr: "Çok su (Boku do)" },
        { fr: "Un verre d'eau", tr: "Bir bardak su (Ön ver do)" },
        { fr: "Assez d'argent", tr: "Yeterince para (Ase darjan)" },
        { fr: "Trop d'argent", tr: "Aşırı para (Tro darjan)" },
      ],
    },
  ],
};

// ===== ÜNİTE 336: OTEL REZERVASYONU =====
const unit336Grammar: UnitGrammar = {
  unitId: 336,
  title: "Otel Rezervasyonu",
  rules: [
    {
      id: "fr-a2-si-basic",
      title: "🔑 Temel Kural: SI (Eğer)",
      explanation:
        "Si kelimesi cümlenin başına veya ortasına gelebilir.\n\n**Önemli Ses Kuralı:**\n* Eğer Si kelimesinden sonra **Il** (O - Erkek) gelirse, kesme işaretiyle birleşir: **S'il** (Sil okunur).\n* Ama **Elle** (O - Kadın) gelirse ASLA birleşmez! **Si elle** olarak kalır.",
      examples: [
        { fr: "S'il pleut...", tr: "Eğer yağmur yağarsa... (✅)" },
        { fr: "Si elle vient...", tr: "Eğer o gelirse... (✅)" },
        { fr: "Si il...", tr: "(❌ YANLIŞ!)" },
      ],
    },
    {
      id: "fr-a2-si-equation1",
      title: "🔮 1. Denklem: Gelecek Planı (Söz Verme)",
      explanation:
        'Durum: "Eğer şu olursa, bunu yapacağım." (Geleceğe dair kesinlik).\n\n**Formül:** $$Si + \\text{Présent (Şimdiki)} \\rightarrow \\text{Futur Simple (Gelecek)}$$\n\n💡 **İpucu:** Konuşma dilinde Futur Simple yerine **Futur Proche (Aller + Fiil)** da kullanabilirsin! Bu çok daha kolaydır.\n* S\'il fait beau, nous allons aller au parc.',
      examples: [
        {
          fr: "Si il fait beau, nous irons au parc.",
          tr: "Hava güzel olursa, parka gideceğiz.",
        },
        {
          fr: "Si tu viens, je serai content.",
          tr: "Eğer gelirsen, mutlu olacağım.",
        },
        {
          fr: "Si tu as de l'argent, tu payeras.",
          tr: "Paran varsa, ödeyeceksin.",
        },
      ],
    },
    {
      id: "fr-a2-si-equation2",
      title: "🧠 2. Denklem: Genel Gerçekler (Alışkanlıklar)",
      explanation:
        'Durum: "Eğer şu olursa, (her zaman) şu olur." (Bilimsel gerçekler, rutinler).\n\n**Formül:** $$Si + \\text{Présent (Şimdiki)} \\rightarrow \\text{Présent (Şimdiki)}$$',
      examples: [
        {
          fr: "S'il pleut, je prends le bus.",
          tr: "Eğer yağmur yağarsa, otobüsü alırım. (Rutin)",
        },
        { fr: "Si je mange trop, je dors.", tr: "Eğer çok yersem, uyurum." },
      ],
    },
    {
      id: "fr-a2-si-equation3",
      title: "☝️ 3. Denklem: Emir ve Tavsiye",
      explanation:
        'Durum: "Eğer şöyleysen, şunu yap!"\n\n**Formül:** $$Si + \\text{Présent (Şimdiki)} \\rightarrow \\text{Impératif (Emir)}$$',
      examples: [
        { fr: "Si tu es fatigué, dors!", tr: "Eğer yorgunsan, uyu!" },
        {
          fr: "Si tu es malade, va chez le médecin.",
          tr: "Eğer hastaysan, doktora git.",
        },
        { fr: "Si vous avez faim, mangez.", tr: "Eğer açsanız, yiyin." },
      ],
    },
    {
      id: "fr-a2-si-inversion",
      title: "🔄 Yer Değiştirme (Virgül Kuralı)",
      explanation:
        "Matematikteki gibi terimlerin yerini değiştirebilirsin. Tek fark virgül (,) kullanımıdır.\n\n* **Si başta ise virgül koy:** Si tu viens**,** je suis content.\n* **Si ortada ise virgül YOK:** Je suis content si tu viens.",
      examples: [],
    },
  ],
};

// ===== ÜNİTE 337: TREN İSTASYONUNDA =====
const unit337Grammar: UnitGrammar = {
  unitId: 337,
  title: "Tren İstasyonunda",
  rules: [
    {
      id: "fr-a2-inversion-basic",
      title: "1. Temel Kural: Fiil + Tire + Özne 🔄",
      explanation:
        "Normal cümleyi alıyoruz, takla attırıyoruz.\n\n**Normal:** Vous avez un billet. (Biletiniz var.)\n**Soru:** Avez-vous un billet ? (Biletiniz var mı?)\n*Okunuşu: Ave-vu ön biye?*\n\n**Normal:** Tu vas à la gare.\n**Soru:** Vas-tu à la gare ?\n*Okunuşu: Va-tü a la gar?*",
      examples: [
        { fr: "Avez-vous un billet ?", tr: "Biletiniz var mı?" },
        { fr: "Vas-tu à la gare ?", tr: "İstasyona gidiyor musun?" },
      ],
    },
    {
      id: "fr-a2-euphonic-t",
      title: '2. Kritik Ses Kuralı: "T" Köprüsü 🌉',
      explanation:
        "Fransızcada iki sesli harf yanyana gelmeyi sevmez. Eğer fiil sesli harfle bitiyor ve özne de sesli harfle (**Il, Elle, On**) başlıyorsa, araya kurtarıcı bir **-t-** harfi girer.\n\n* ❌ ~~Parle-il ?~~ (Zor okunur)\n* ✅ **Parle-t-il ?** (Konuşuyor mu?)\n* ❌ ~~Va-elle ?~~\n* ✅ **Va-t-elle ?** (Gidiyor mu?)",
      examples: [
        { fr: "Parle-t-il français ?", tr: "Fransızca konuşuyor mu?" },
        { fr: "Va-t-elle à Paris ?", tr: "Paris'e gidiyor mu?" },
      ],
    },
    {
      id: "fr-a2-question-words",
      title: "3. İstasyonda Soru Kelimeleriyle Inversion 🛤️",
      explanation:
        "Soru kelimeleri (**Où, Quand, Comment**) başa gelir, inversion hemen arkasından yapılır.\n\n* **OÙ (Nerede?):** Où sont les toilettes ?\n* **QUAND (Ne zaman?):** Quand part le train ?\n* **QUEL (Hangi?):** C'est quelle voie ? -> Quelle est la voie ?",
      examples: [
        { fr: "Où sont les toilettes ?", tr: "Tuvaletler nerede?" },
        { fr: "Quand part le train ?", tr: "Tren ne zaman kalkıyor?" },
        { fr: "Quelle est la voie ?", tr: "Hangi peron?" },
      ],
    },
    {
      id: "fr-a2-puis-je",
      title: '4. İstisna: "Puis-je" (Yapabilir miyim?) 🎩',
      explanation:
        "**Pouvoir** (Ebilmek) fiilini 'Je' ile ters çevirirken 'Peux-je' diyemezsin. Kulağı tırmalar. Bunun yerine çok özel bir form olan **'Puis-je'** kullanılır. Bu kibarlığın zirvesidir.\n\n* **Normal:** Je peux vous demander...?\n* **Resmi:** Puis-je vous demander... ?",
      examples: [
        { fr: "Puis-je vous aider ?", tr: "Size yardım edebilir miyim?" },
        { fr: "Puis-je entrer ?", tr: "Girebilir miyim?" },
      ],
    },
    {
      id: "fr-a2-station-vocab",
      title: "5. Tren İstasyonu Sözlüğü 🚄",
      explanation: "Bu kelimeleri soruların içinde kullanacağız.",
      table: {
        headers: ["Kelime", "Anlamı", "Okunuşu 🔊"],
        rows: [
          ["Le train", "Tren", "Lö tren"],
          ["La gare", "İstasyon / Gar", "La gar"],
          ["Le guichet", "Gişe", "Lö gişe"],
          ["La voie", "Peron / Yol", "La vua"],
          ["Le billet", "Bilet", "Lö biye"],
          ["Composter", "Bileti okutmak", "Komposte"],
          ["Partir", "Hareket etmek", "Partir"],
          ["Arriver", "Varmak", "Arive"],
        ],
      },
      examples: [],
    },
  ],
};

// ===== ÜNİTE 338: HAVAALANINDA =====
const unit338Grammar: UnitGrammar = {
  unitId: 338,
  title: "Havaalanında",
  rules: [
    {
      id: "fr-a2-passive-logic",
      title: "🎬 Bölüm 1: Mantık (Yönetmen Koltuğu)",
      explanation:
        "**Etken (Aktif):** Kamera 'İşi Yapan' üzerindedir. (Ahmet elmayı yiyor.)\n**Edilgen (Pasif):** Kamera 'İşten Etkilenen' (Mağdur) üzerindedir. (Elma, Ahmet tarafından yeniliyor.)\n\n**Dönüşüm:** Nesne başa, Özne sona. Araya **ÊTRE** girer.",
      examples: [
        { fr: "Marie regarde la télé.", tr: "Marie TV izliyor. (Aktif)" },
        {
          fr: "La télé est regardée par Marie.",
          tr: "TV Marie tarafından izleniyor. (Pasif)",
        },
      ],
    },
    {
      id: "fr-a2-passive-steps",
      title: "🧱 Bölüm 2: Dört Adımlı Kurulum",
      explanation:
        "1. **Yer Değiştirme:** Nesne başa, Özne sona.\n2. **Motoru Takmak (ÊTRE):** Orijinal cümlenin zamanında ÊTRE çekimlenir.\n3. **Fiil Dönüşümü:** Ana fiil Participe Passé olur.\n4. **Bağlaç (PAR):** İşi yapan 'PAR' ile bağlanır.",
      examples: [
        {
          fr: "La télé EST REGARDÉE PAR Marie.",
          tr: "TV Marie tarafından izleniyor.",
        },
      ],
    },
    {
      id: "fr-a2-passive-accord",
      title: "⚠️ Bölüm 3: 'Akort' Ayarı (L'Accord)",
      explanation:
        "ÊTRE kullanıldığı için fiil (Participe Passé), yeni öznenin cinsiyetine ve sayısına uymak ZORUNDASIN.\n\n* **Dişi (La):** +e (mangé**e**)\n* **Çoğul (Les):** +s (mangé**s**)\n* **Dişi Çoğul:** +es (mangé**es**)",
      examples: [
        { fr: "La porte est ferméE.", tr: "Kapı kapatıldı. (Kapı dişidir)" },
        {
          fr: "Les vols sont annuléS.",
          tr: "Uçuşlar iptal edildi. (Uçuş erkektir)",
        },
      ],
    },
    {
      id: "fr-a2-passive-tenses",
      title: "🕰️ Bölüm 4: Zaman Yolculuğu",
      explanation:
        "Sadece ÊTRE fiili zaman değiştirir. Ana fiil (Fermée) ve 'Par...' kısmı SABİT kalır.\n\n* **Présent:** La porte **EST** fermée.\n* **Passé Composé:** La porte **A ÉTÉ** fermée.\n* **Futur Proche:** La porte **VA ÊTRE** fermée.",
      examples: [
        {
          fr: "La porte a été fermée par Ali.",
          tr: "Kapı Ali tarafından kapatıldı.",
        },
      ],
    },
    {
      id: "fr-a2-passive-par-de",
      title: "🕵️ Bölüm 5: 'Par' mı 'De' mi?",
      explanation:
        "Genelde **PAR** kullanılır. Ancak duygu fiilleri (Sevmek, Tanımak, Saygı duymak...) ile **DE** kullanılır.",
      examples: [
        { fr: "Elle est aimée DE tout le monde.", tr: "Herkesçe sevilir." },
        { fr: "Il est connu DE tous.", tr: "Herkesçe tanınır." },
      ],
    },
  ],
};

// ===== ÜNİTE 339: RESTORANDA SİPARİŞ =====
const unit339Grammar: UnitGrammar = {
  unitId: 339,
  title: "Restoranda Sipariş",
  rules: [
    {
      id: "fr-a2-restaurant-pronouns-table",
      title: "🧲 BÖLÜM 1: ZAMİRLER SÖZLÜĞÜ (Kısayol Tuşları)",
      explanation:
        "Önce kimi/neyi kastettiğimizi bilelim. Bu tabloyu adın gibi ezberlemelisin koç!",
      table: {
        headers: ["Fransızca Zamir", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Me", "Mö", "Beni"],
          ["Te", "Tö", "Seni"],
          ["Le", "Lö", "Onu (Erkek / Le ile başlayanlar)"],
          ["La", "La", "Onu (Dişi / La ile başlayanlar)"],
          ["Nous", "Nu", "Bizi"],
          ["Vous", "Vu", "Sizi"],
          ["Les", "Le", "Onları (Çoğul / Les ile başlayanlar)"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-restaurant-pronouns-order",
      title: "📍 BÖLÜM 2: ALTIN KURAL (Nereye Koyacağız?)",
      explanation:
        "İngilizcede \"I eat it\" (Ben yerim onu) deriz, yani kelime sona gider.\n" +
        "Ama Fransızca bu konuda TÜRKÇE İLE BİREBİR AYNIDIR! 😍\n\n" +
        "Zamir her zaman FİİLDEN (Eylemden) HEMEN ÖNCE gelir!\n" +
        "**Formül:** ÖZNE + ZAMİR + FİİL\n\n" +
        "Türkçe Mantığı: Ben + Onu + Yiyorum.\n" +
        "Fransızca Mantığı: Je + Le + Mange. (🔊 Jö lö manj.)",
      examples: [],
    },
    {
      id: "fr-a2-restaurant-pronouns-lego",
      title: "🧩 Adım Adım Lego Birleştirme",
      explanation:
        "**Örnek 1: Erkek bir kelime (Le pantalon - Pantolon)**\n" +
        "Uzun cümle: J'achète le pantalon. (Pantolonu satın alıyorum.)\n" +
        "\"Pantolon\" erkek olduğu için yerine LE (onu) gelir.\n" +
        "Kısa cümle: Je le regarde. (Ben onu izliyorum.)\n" +
        "🔊 Jö lö rögard.\n\n" +
        "**Örnek 2: Dişi bir kelime (La pomme - Elma)**\n" +
        "Uzun cümle: Tu manges la pomme. (Elmayı yiyorsun.)\n" +
        "\"Elma\" dişi olduğu için yerine LA (onu) gelir.\n" +
        "Kısa cümle: Tu la manges. (Sen onu yiyorsun.)\n" +
        "🔊 Tü la manj.\n\n" +
        "**Örnek 3: Çoğul bir kelime (Les tomates - Domatesler)**\n" +
        "Uzun cümle: Il coupe les tomates. (O, domatesleri kesiyor.)\n" +
        "\"Domatesler\" çoğul olduğu için yerine LES (onları) gelir.\n" +
        "Kısa cümle: Il les coupe. (O onları kesiyor.)\n" +
        "🔊 İl le kup.",
      examples: [],
    },
    {
      id: "fr-a2-restaurant-pronouns-traps",
      title: "🚨 BÖLÜM 3: HAYAT KURTARAN 2 UYARI",
      explanation:
        "Koç, burası çok önemli, bütün tuzaklar burada gizli:\n\n" +
        "**Tuzak 1: Çarpışma Kuralı (M', T', L')**\n" +
        "Eğer fiil sesli harfle (A, E, I, O, U) veya 'H' harfiyle başlıyorsa; Me, Te, Le, La kelimelerindeki sesli harf düşer ve kesme işareti gelir!\n" +
        "Je le aime → **YANLIŞ**\n" +
        "Je **l'**aime → **DOĞRU** (🔊 Jö lem)\n" +
        "Il **m'**écoute. (O beni dinliyor.) → (🔊 İl mekut)\n" +
        "Je **t'**attends. (Ben seni bekliyorum.) → (🔊 Jö tatend)\n\n" +
        "**Tuzak 2: LE/LA/LES Makale mi, Zamir mi?**\n" +
        "Nasıl ayırt edeceğiz? Çok basit:\n" +
        "Arkasında **İSİM** varsa = \"Belirteçtir\". (Örn: Le livre = Kitap)\n" +
        "Arkasında **FİİL** varsa = \"Onu/Onları\" demektir. (Örn: Je le lis = Ben onu okuyorum)",
      examples: [],
    },
    {
      id: "fr-a2-restaurant-dialogue",
      title: "🗣️ BÖLÜM 4: SESLİ DİYALOG (Yemek Masasında)",
      explanation:
        "Senaryo: İki arkadaş (Marie ve Paul) az önce senin tarifinle yaptıkları yemeği yiyorlar.\n\n" +
        "**Marie:** Cette soupe est délicieuse ! Tu **l'**aimes ?\n" +
        "🔊 Set sup e delisyöz! Tü lem?\n" +
        "(Bu çorba (dişi) lezzetli! Sen onu seviyor musun?)\n\n" +
        "**Paul:** Oui, je la trouve très bonne. Qui a fait ça ?\n" +
        "🔊 Ui, jö la truv tre bon. Ki a fe sa?\n" +
        "(Evet, ben onu çok iyi buluyorum. Bunu kim yaptı?)\n\n" +
        "**Marie:** C'est Yiğithan ! Il nous invite souvent pour manger.\n" +
        "🔊 Se Yiğithan! İl nuz envit suvan pur manje.\n" +
        "(Yiğithan! O yemek için bizi sık sık davet eder.)\n\n" +
        "**Paul:** Ah, super. Et les légumes ? Tu les manges ?\n" +
        "🔊 A, süper. E le legüm? Tü le manj?\n" +
        "(Ah, süper. Peki sebzeleri (çoğul)? Sen onları yiyor musun?)\n\n" +
        "**Marie:** Non, je ne les aime pas. Je te donne mon assiette !\n" +
        "🔊 No, jö nö le zem pa. Jö tö don mon asyet!\n" +
        "(Hayır, ben onları sevmiyorum. Tabağımı sana veriyorum!)",
      examples: [],
    },
    {
      id: "fr-a2-restaurant-task",
      title: "🚀 KOÇUN KISAYOL GÖREVİ (Şimdi Sen Bağlıyorsun)",
      explanation:
        "Dostum, cümleleri kısaltma sanatını öğrendin. Şimdi senin bu \"Lego\" parçalarını doğru yere koyup koyamadığını test edelim.\n\n" +
        "Şu iki cümleyi çevir ve yüksek sesle oku:\n" +
        "• \"Ben seni seviyorum.\" (İpucu: Je + seni + aimer. Sesli harf çarpışmasına dikkat!)\n" +
        "• \"Ben onu (erkek bir şeyi, mesela 'le pantolon') satın alıyorum.\" (İpucu: Je + onu + acheter. Yine sesli harf çarpışması var!)",
      examples: [],
    },
  ],
};

const unit340Grammar: UnitGrammar = {
  unitId: 340,
  title: "Yemek Tarifi",
  rules: [
    {
      id: "fr-a2-cooking-verbs",
      title: "🧅 BÖLÜM 1: MUTFAK FİİLLERİ SÖZLÜĞÜ (Malzemeler)",
      explanation:
        "Önce yemek yaparken en çok kullanacağımız \"Hareketleri\" (Fiilleri) cebe atalım.",
      table: {
        headers: ["Fransızca Fiil (Mastar)", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Couper", "Ku-pe", "Kesmek / Doğramak"],
          ["Laver", "La-ve", "Yıkamak"],
          ["Mélanger", "Me-lan-je", "Karıştırmak"],
          ["Ajouter", "A-ju-te", "Eklemek"],
          ["Manger", "Man-je", "Yemek (yemek)"],
          ["Regarder", "Rö-gar-de", "Bakmak / İzlemek"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-imperatif-logic",
      title: "✂️ BÖLÜM 2: EMİR KİPİ MANTIĞI (Kelimeleri Çöpe At!)",
      explanation:
        "Fransızcada normal bir cümle kurarken hep \"Je, Tu, Il...\" (Ben, Sen, O) derdik. Emir kipinin BİRİNCİ ALTIN KURALI şudur:\n\n" +
        "**👉 Şahıs zamirlerini (Tu, Nous, Vous) çöpe at!**\n\n" +
        "Sadece 3 kişiye emir verebiliriz:\n" +
        "**Tu** (Sen) → \"Yap, Kes, Yıka\"\n" +
        "**Nous** (Biz) → \"Hadi yapalım, keselim\" (Teklif/Ortak emir)\n" +
        "**Vous** (Siz) → \"Yapın, Kesin, Yıkayın\" (Kibar veya çoğul)",
      examples: [
        {
          fr: "Tu regardes la télé.",
          tr: "(Normal) Sen televizyon izliyorsun.",
        },
        {
          fr: "Regarde la télé !",
          tr: "(Emir) Televizyon izle! (Gördün mü, 'Tu' kelimesi uçtu gitti!)",
        },
      ],
    },
    {
      id: "fr-a2-imperatif-drop-s",
      title: "🚨 BÖLÜM 3: İKİNCİ ALTIN KURAL (Düşen 'S' Harfi)",
      explanation:
        "Burası Fransızca öğrenenlerin %90'ının hata yaptığı yerdir koç, buraya çok dikkat et!\n\n" +
        "Fransızcada sonu **-ER** ile biten fiillerde (Yukarıdaki mutfak fiillerinin hepsi öyledir), \"Sen\" (Tu) çekiminin sonunda her zaman bir \"S\" harfi vardır. (Tu coupes = Sen kesiyorsun).\n\n" +
        "👉 Emir kipi yaparken, o sondaki **\"S\" harfi de ÇÖPE GİDER!**",
      examples: [
        {
          fr: "Tu coupes",
          tr: "(Normal) Sen kesiyorsun",
        },
        {
          fr: "Coupe !",
          tr: "(Emir) Kes! (S harfi uçtu!)",
        },
      ],
    },
    {
      id: "fr-a2-imperatif-conjugation",
      title: "🧮 BÖLÜM 4: LEGO ZAMANI (Fiilleri Emir Kipinde Çekiyoruz)",
      explanation:
        "Hadi Couper (Kesmek) fiilini tezgaha yatırıp emir kipine sokalım:\n\n" +
        "Hemen başka bir fiille (Laver - Yıkamak) pratik yapalım:\n" +
        "* Lave les tomates ! → 🔊 Lav le to-mat! (Domatesleri yıka!)\n" +
        "* Lavons les tomates ! → 🔊 La-von le to-mat! (Domatesleri yıkayalım!)\n" +
        "* Lavez les tomates ! → 🔊 La-ve le to-mat! (Domatesleri yıkayın!)",
      table: {
        headers: ["Şahıs (Gizli)", "Emir Kipi Çekimi", "Okunuşu 🔊", "Türkçe Anlamı", "Kural"],
        rows: [
          ["(Tu - Sen)", "Coupe !", "Kup!", "Kes!", "'Tu' atıldı, sondaki 'S' atıldı."],
          ["(Nous - Biz)", "Coupons !", "Ku-pon!", "Keselim!", "Sadece 'Nous' atıldı."],
          ["(Vous - Siz)", "Coupez !", "Ku-pe!", "Kesin(iz)!", "Sadece 'Vous' atıldı."],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-imperatif-negative",
      title: "🛑 BÖLÜM 5: OLUMSUZ EMİR (Yapma!)",
      explanation:
        "\"Kesme, Karıştırma!\" demek de çok basittir. Fiilin önüne **NE**, arkasına **PAS** koyarsın.",
      examples: [
        {
          fr: "Coupe ! → Ne coupe pas !",
          tr: "(Kes!) → (Kesme!) 🔊 Nö kup pa!",
        },
        {
          fr: "Mélangez ! → Ne mélangez pas !",
          tr: "(Karıştırın!) → (Karıştırmayın!) 🔊 Nö me-lan-je pa!",
        },
      ],
    },
    {
      id: "fr-a2-imperatif-dialogue",
      title: "🗣️ BÖLÜM 6: SESLİ DİYALOG (Mutfakta Şef ve Yamağı)",
      explanation:
        "Senaryo: Paris'te ünlü bir restorandasın. Şef (Le Chef) mutfakta yardımcısına (L'assistant) tarif veriyor.\n\n" +
        "**Şef:** Ali, lave les légumes, s'il te plaît !\n" +
        "🔊 Ali, lav le le-güm, sil tö ple!\n" +
        "_(Ali, sebzeleri yıka, lütfen!)_\n\n" +
        "**Asistan:** Oui, Chef ! Et après ?\n" +
        "🔊 Ui, Şef! E a-pre?\n" +
        "_(Evet Şef! Peki sonra?)_\n\n" +
        "**Şef:** Coupe les tomates et les oignons. Mais ne pleure pas !\n" +
        "🔊 Kup le to-mat e le zon-yon. Me nö plör pa!\n" +
        "_(Domatesleri ve soğanları kes/doğra. Ama ağlama!) (Pleurer = Ağlamak)_\n\n" +
        "**Asistan:** D'accord. Je mets tout dans le bol ?\n" +
        "🔊 Da-kor. Jö me tu dan lö bol?\n" +
        "_(Tamam. Her şeyi kaseye mi koyuyorum?)_\n\n" +
        "**Şef:** Oui ! Ensuite, ajoute le sel et mélange !\n" +
        "🔊 Ui! An-sü-it, a-jut lö sel e me-lanj!\n" +
        "_(Evet! Ardından tuzu ekle ve karıştır!)_\n\n" +
        "**Asistan:** C'est prêt !\n" +
        "🔊 Se pre!\n" +
        "_(Hazır!)_\n\n" +
        "**Şef:** Parfait. Maintenant, mangeons !\n" +
        "🔊 Par-fe. Men-tö-nan, man-jon!\n" +
        "_(Mükemmel. Şimdi, yiyelim (hadi yiyelim)!)_",
      examples: [],
    },
  ],
};

// ===== ÜNİTE 341-350: Devam =====
const unit341Grammar: UnitGrammar = {
  unitId: 341,
  title: "Alışveriş Diyaloğu",
  rules: [
    {
      id: "fr-a2-adj-vocab",
      title: "🏷️ BÖLÜM 1: SIFAT SÖZLÜĞÜ (Terazinin Ağırlıkları)",
      explanation:
        "Önce kıyafetleri eleştirmek için gereken kelimeleri (Sıfatları) cebe atalım.",
      table: {
        headers: ["Fransızca Sıfat", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Cher", "Şer", "Pahalı"],
          ["Bon marché", "Bon marşe", "Ucuz (Uygun fiyatlı)"],
          ["Grand", "Gran", "Büyük"],
          ["Petit", "Pöti", "Küçük"],
          ["Joli / Beau", "Joli / Bo", "Güzel"],
          ["Confortable", "Konfortabl", "Rahat"],
          ["Élégant", "Elegan", "Şık"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-comparatif-formulas",
      title: "⚖️ BÖLÜM 2: TERAZİ FORMÜLÜ (Daha / Daha Az / Kadar)",
      explanation:
        "Karşılaştırma yapmak için terazinin 3 farklı ayarı vardır.\n\n" +
        "**1. PLUS ... QUE (+ Daha ... -den)**\n" +
        "Bir şeyin diğerinden \"Daha fazla\" olduğunu anlatır.\n" +
        "Kalıp: **PLUS** (plü) + Sıfat + **QUE** (kö)\n" +
        "→ Plus cher que... (Plü şer kö...) = ...-den daha pahalı.\n\n" +
        "**2. MOINS ... QUE (- Daha az ... -den)**\n" +
        "Bir şeyin diğerinden \"Daha az\" olduğunu anlatır.\n" +
        "Kalıp: **MOINS** (muen) + Sıfat + **QUE** (kö)\n" +
        "→ Moins grand que... (Muen gran kö...) = ...-den daha az büyük.\n\n" +
        "**3. AUSSI ... QUE (= ... Kadar ...)**\n" +
        "İki şeyin eşit olduğunu anlatır.\n" +
        "Kalıp: **AUSSI** (osi) + Sıfat + **QUE** (kö)\n" +
        "→ Aussi joli que... (Osi joli kö...) = ... kadar güzel.",
      examples: [],
    },
    {
      id: "fr-a2-comparatif-assembly",
      title: "🏗️ BÖLÜM 3: PARÇALARI BİRLEŞTİRME (Lego Zamanı)",
      explanation:
        "Geçen dersteki \"Bu (Ce/Cette)\" kelimeleriyle terazimizi birleştirelim.\n\n" +
        "**Formül:** 1. Ürün + **EST** (dır/dir) + Terazi (Plus/Moins/Aussi) + Sıfat + **QUE** + 2. Ürün\n\n" +
        "(Not: Çoğul kelimelerde \"est\" yerine **\"sont\"** (onlar ...dır) kullanılır.)",
      table: {
        headers: ["Fransızca Tam Cümle", "Okunuşu 🔊", "Türkçe Çevirisi"],
        rows: [
          ["Ce pantalon est plus cher que ce t-shirt.", "Sö pantalon e plü şer kö sö ti-şört.", "Bu pantolon, bu tişörtten daha pahalıdır."],
          ["Cette veste est moins grande que ce pull.", "Set vest e muen grand kö sö pül.", "Bu ceket, bu kazaktan daha az büyüktür."],
          ["Ces chaussures sont aussi confortables que ces baskets.", "Se şosür son osi konfortabl kö se basket.", "Bu ayakkabılar, bu spor ayakkabılar kadar rahattır."],
        ],
      },
      examples: [
        {
          fr: "Ce produit est moins cher que l'autre.",
          tr: "Bu ürün diğerinden daha ucuz.",
        },
      ],
    },
    {
      id: "fr-a2-comparatif-meilleur-exception",
      title: "🚨 BÖLÜM 4: HAYAT KURTARAN İSTİSNA (Daha İyi)",
      explanation:
        "Tıpkı Türkçede \"En iyisi\" derken \"En güzeli\" demediğimiz gibi, Fransızcada da \"Daha iyi\" demek için özel bir kelime vardır.\n\n" +
        "❌ **\"Plus bon\" ASLA denmez!**\n" +
        "✅ Onun yerine şu kelime kullanılır:\n\n" +
        "**Meilleur** (Daha iyi) → 🔊 Meyör",
      examples: [
        {
          fr: "Cette chemise est meilleure.",
          tr: "Bu gömlek daha iyi.",
        },
        {
          fr: "C'est meilleur que l'autre.",
          tr: "Bu, diğerinden daha iyi.",
        },
      ],
    },
    {
      id: "fr-a2-comparatif-dialogue",
      title: "🗣️ BÖLÜM 5: FİNAL DİYALOĞU (İki Ürün Arasında Kalmak)",
      explanation:
        "Senaryo: Arkadaşınla (Ali) mağazadasın. İki ceket arasında kaldın.\n\n" +
        "**Sen:** Ali, regarde cette veste noire et cette veste bleue. Laquelle tu préfères ?\n" +
        "🔊 Ali, rögard set vest nuar e set vest blö. Lakel tü prefer?\n" +
        "_(Ali, bu siyah cekete ve bu mavi cekete bak. Hangisini tercih edersin?)_\n\n" +
        "**Ali:** Je pense que la veste noire est plus élégante que la veste bleue.\n" +
        "🔊 Jö pans kö la vest nuar e plü zelegan kö la vest blö.\n" +
        "_(Bence siyah ceket, mavi ceketten daha şık.)_\n\n" +
        "**Sen:** Oui, mais elle est aussi plus chère ! (100 euros).\n" +
        "🔊 Ui, me el e osi plü şer! Sö öro.\n" +
        "_(Evet, ama aynı zamanda daha pahalı!)_\n\n" +
        "**Ali:** C'est vrai. La veste bleue est moins chère, et elle est aussi confortable.\n" +
        "🔊 Se vre. La vest blö e muen şer, e el e osi konfortabl.\n" +
        "_(Bu doğru. Mavi ceket daha az pahalı (daha ucuz) ve o da aynı derecede rahat.)_\n\n" +
        "**Sen:** Tu as raison. J'achète la bleue !\n" +
        "🔊 Tü a rezon. Jaşet la blö!\n" +
        "_(Haklısın. Maviyi satın alıyorum!)_",
      examples: [],
    },
  ],
};

const unit342Grammar: UnitGrammar = {
  unitId: 342,
  title: "Kıyafet Alışverişi",
  rules: [
    {
      id: "fr-a2-clothing-vocab",
      title: "👕 BÖLÜM 1: VİTRİNDEKİ MALZEMELER (Kıyafetler)",
      explanation:
        "Önce neleri alacağımızı bilelim. Kelimelerin başındaki Le/La (Erkek/Dişi) ayrımı hayati önem taşır, çünkü parmağımızla işaret ederken kuralı bu belirleyecek!",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe Anlamı", "Cinsiyet"],
        rows: [
          ["Le pantalon", "Lö pantalon", "Pantolon", "(Erkek)"],
          ["Le pull", "Lö pül", "Kazak", "(Erkek)"],
          ["Le t-shirt", "Lö ti-şört", "Tişört", "(Erkek)"],
          ["La chemise", "La şömiz", "Gömlek", "(Dişi)"],
          ["La robe", "La rob", "Elbise", "(Dişi)"],
          ["La veste", "La vest", "Ceket", "(Dişi)"],
          ["Les chaussures", "Le şosür", "Ayakkabılar", "(Çoğul)"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-shopping-verbs",
      title: "🛠️ BÖLÜM 2: ALIŞVERİŞ MOTORLARI (Kritik Fiiller)",
      explanation:
        "Vitrine bakmak yetmez, o ürünü \"denemek\" ve \"satın almak\" lazım. İşte en çok kullanacağın 4 ana fiil ve \"Ben (Je)\" çekimleri:\n\n" +
        "(Ekstra Bilgi: Ürünün fiyatını sormak için **Coûter** (Kute - Tutmak/Fiyatı olmak) fiili kullanılır.\n" +
        "→ **Ça coûte combien ?** = Ne kadar tutuyor?)",
      table: {
        headers: ["Fiil (Mastar)", "Okunuşu", "Türkçe Anlamı", "\"Ben\" (Je) Çekimi", "Okunuşu 🔊"],
        rows: [
          ["Acheter", "Aşöte", "Satın almak", "J'achète", "Jaşet"],
          ["Essayer", "Eseye", "Denemek", "J'essaie", "Jesey"],
          ["Chercher", "Şerşe", "Aramak", "Je cherche", "Jö şerş"],
          ["Payer", "Peye", "Ödemek", "Je paie", "Jö pey"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-demonstratifs-detailed",
      title: "👉 BÖLÜM 3: İŞARET PARMAĞI (Bu / Şu / Bunlar)",
      explanation:
        "Türkçede her şeye \"Bu\" deyip geçeriz. Fransızlar ise işaret ederken kelimenin cinsiyetine bakar. İşte işin sırrı olan 4 kelime:\n\n" +
        "**1. CE (Erkekler İçin \"Bu\")**\n" +
        "Kelime Le (Erkek) ise **CE** (Sö) kullanırız.\n" +
        "→ **Ce pantalon** (Bu pantolon) 🔊 Sö pantalon\n\n" +
        "**2. CETTE (Dişiler İçin \"Bu\")**\n" +
        "Kelime La (Dişi) ise **CETTE** (Set) kullanırız.\n" +
        "→ **Cette chemise** (Bu gömlek) 🔊 Set şömiz\n\n" +
        "**3. CES (Çoğullar İçin \"Bunlar / Bu\")**\n" +
        "Kelime çoğulsa (sonunda genelde -s varsa), erkek veya dişi fark etmez, **CES** (Se) kullanırız.\n" +
        "→ **Ces chaussures** (Bu ayakkabılar) 🔊 Se şosür\n\n" +
        "🚨 **4. CET (Sesli Harfle Başlayan Erkekler İçin)**\n" +
        "Fransızlar iki sesli harfin yan yana gelmesini sevmez. Kelime Erkekse (Le) ama A, E, I, O, U ile başlıyorsa araya bir 't' koyarız.\n" +
        "→ Un anorak (Kışlık mont - Erkek) → **Cet anorak** (Bu mont) 🔊 Set anorak",
      examples: [],
    },
    {
      id: "fr-a2-demonstratifs-formula",
      title: "🏗️ BÖLÜM 4: TÜM PARÇALARI BİRLEŞTİRME (Lego Zamanı)",
      explanation:
        "Şimdi formülü kuruyoruz: **FİİL + İŞARET SIFATI + KIYAFET**",
      table: {
        headers: ["Tam Cümle (Fransızca)", "Okunuşu 🔊", "Türkçe Çevirisi", "Mantığı"],
        rows: [
          ["Je cherche ce pantalon.", "Jö şerş sö pantalon.", "Bu pantolonu arıyorum.", "Pantalon erkek → CE"],
          ["J'achète cette robe.", "Jaşet set rob.", "Bu elbiseyi satın alıyorum.", "Robe dişi → CETTE"],
          ["J'essaie cet anorak.", "Jesey set anorak.", "Bu montu deniyorum.", "Anorak erkek + sesli → CET"],
          ["Je paie ces chaussures.", "Jö pey se şosür.", "Bu ayakkabıları ödüyorum.", "Ayakkabılar çoğul → CES"],
        ],
      },
      examples: [
        {
          fr: "Cette robe vous va très bien.",
          tr: "Bu elbise size çok yakışıyor.",
        },
      ],
    },
    {
      id: "fr-a2-clothing-dialogue",
      title: "🗣️ BÖLÜM 5: FİNAL DİYALOĞU (Mağazada Kusursuz Şov)",
      explanation:
        "Öğrendiğimiz her şeyi gerçek bir mağaza (Le magasin) senaryosunda kullanalım.\n\n" +
        "**Satıcı:** Bonjour Monsieur, je peux vous aider ?\n" +
        "🔊 Bonjur Mösyö, jö pö vu zede?\n" +
        "_(Merhaba beyefendi, size yardım edebilir miyim?)_\n\n" +
        "**Sen:** Oui, bonjour. Je cherche un pull.\n" +
        "🔊 Ui, bonjur. Jö şerş an pül.\n" +
        "_(Evet, merhaba. Bir kazak arıyorum.)_\n\n" +
        "**Satıcı:** Regardez ce pull bleu. Vous aimez ?\n" +
        "🔊 Rögarde sö pül blö. Vu zeme?\n" +
        "_(Bu mavi kazağa bakın. Beğendiniz mi?)_\n\n" +
        "**Sen:** Oui, c'est très beau. Je peux essayer ce pull ?\n" +
        "🔊 Ui, se tre bo. Jö pö eseye sö pül?\n" +
        "_(Evet, çok güzel. Bu kazağı deneyebilir miyim?)_\n\n" +
        "_(Kabinden çıkarsın)_\n\n" +
        "**Sen:** C'est parfait. Et je voudrais aussi cette chemise blanche.\n" +
        "🔊 Se parfe. E jö vudre osi set şömiz blanş.\n" +
        "_(Bu mükemmel. Ve ayrıca bu beyaz gömleği istiyorum.)_\n\n" +
        "**Satıcı:** Très bien. Ce pull et cette chemise. Ça coûte 80 euros.\n" +
        "🔊 Tre biyen. Sö pül e set şömiz. Sa kut katrö-van öro.\n" +
        "_(Çok iyi. Bu kazak ve bu gömlek. 80 euro tutuyor.)_\n\n" +
        "**Sen:** D'accord. Je paie par carte.\n" +
        "🔊 Dakor. Jö pey par kart.\n" +
        "_(Tamam. Kartla ödüyorum.)_",
      examples: [],
    },
  ],
};

const unit343Grammar: UnitGrammar = {
  unitId: 343,
  title: "Ev İşleri",
  rules: [
    {
      id: "fr-a2-housework-vocab",
      title: "🧹 BÖLÜM 1: EV İŞLERİ SÖZLÜĞÜ (Malzemeler)",
      explanation:
        "Fransızcada ev işlerinin %90'ı \"FAIRE\" (Yapmak) fiiliyle kurulur. Spor ünitesinden bu fiile zaten alışkınsın koç!",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Le ménage", "Lö menaj", "Temizlik"],
          ["Faire le ménage", "Fer lö menaj", "Temizlik yapmak"],
          ["Faire la vaisselle", "Fer la vesel", "Bulaşık yıkamak"],
          ["Faire la lessive", "Fer la lesiv", "Çamaşır yıkamak"],
          ["Faire le lit", "Fer lö li", "Yatağı toplamak / yapmak"],
          ["Passer l'aspirateur", "Pase laspiratör", "Elektrikli süpürge yapmak"],
          ["Repasser", "Röpase", "Ütü yapmak"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-venir-de-concept",
      title: "⏳ BÖLÜM 2: \"VENIR DE\" MANTIĞI NEDİR?",
      explanation:
        "Türkçede \"Az önce / Yeni\" anlamı katar. Eylemi tam şu saniyeden bir veya birkaç dakika önce bitirdiğini anlatır.\n\n" +
        "**İşin Sırrı (Kelime Anlamı):**\n" +
        "\"Venir\", Fransızcada \"Gelmek\" demektir. \"De\" ise \"-den/-dan\" demektir.\n" +
        "Fransızlar \"Az önce bulaşıkları yıkadım\" demezler. Şöyle derler:\n" +
        "👉 \"Bulaşıkları yıkamak-**tan** geliyorum.\" (Yani o eylemi daha yeni bitirip buraya geldim).\n\n" +
        "🎯 **Altın Kural:** Formüldeki ikinci fiil (yani asıl iş) **ASLA ÇEKİMLENMEZ**. Sözlükteki yalın (mastar) haliyle kalır. Bu senin için inanılmaz bir kolaylıktır!",
      examples: [],
    },
    {
      id: "fr-a2-venir-conjugation",
      title: "🧮 BÖLÜM 3: VENİR FİİLİ ÇEKİMİ (Motoru Çalıştır)",
      explanation:
        "Formülü kurmak için sadece VENIR (Gelmek) fiilini şimdiki zamanda çekmeyi bileceğiz. Bu biraz düzensizdir, bunu ezberliyoruz:",
      table: {
        headers: ["Özne", "Venir Çekimi", "Okunuşu 🔊"],
        rows: [
          ["Je", "viens", "Jö viyen"],
          ["Tu", "viens", "Tü viyen"],
          ["Il / Elle", "vient", "İl / El viyen"],
          ["Nous", "venons", "Nu vönon"],
          ["Vous", "venez", "Vu vöne"],
          ["Ils / Elles", "viennent", "İl / El viyen"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-venir-de-formula",
      title: "🏗️ BÖLÜM 4: FORMÜLÜ BİRLEŞTİRME (Lego Zamanı)",
      explanation:
        "Şimdi parçaları birleştiriyoruz:\n\n" +
        "**Formül:** ÖZNE + VENIR (Çekimli) + DE + FİİL (Yalın/Mastar)\n\n" +
        "**Adım Adım Yapalım:**\n" +
        "* **Özne:** Je (Ben)\n" +
        "* **Venir çekimi:** viens (viyen)\n" +
        "* **Bağlaç:** de (dö)\n" +
        "* **Asıl iş:** faire le lit (Yatağı toplamak)\n" +
        "* **Sonuç:** **Je viens de faire le lit.**\n" +
        "* 🔊 Jö viyen dö fer lö li.\n" +
        "* **Anlamı:** Az önce yatağı topladım. (Yatağı toplamaktan geliyorum).\n\n" +
        "⚠️ **Küçük Sesli Harf Tuzağı:** Eğer asıl fiil sesli harfle başlarsa (Mesela écouter - dinlemek), \"DE\" kelimesinin 'e'si düşer ve **D'** olur.\n" +
        "* Je viens **d'**écouter la musique. (Az önce müziği dinledim.)",
      examples: [
        {
          fr: "Tu viens de faire la vaisselle.",
          tr: "Az önce bulaşıkları yıkadın. (🔊 Tü viyen dö fer la vesel)",
        },
        {
          fr: "Il vient de passer l'aspirateur.",
          tr: "O az önce süpürge yaptı. (🔊 İl viyen dö pase laspiratör)",
        },
      ],
    },
    {
      id: "fr-a2-housework-dialogue",
      title: "🗣️ BÖLÜM 5: SESLİ DİYALOG (Ev Arkadaşı Kavgası)",
      explanation:
        "**Senaryo:** İki ev arkadaşı (Hugo ve Lucas) cumartesi temizliği için tartışıyor.\n\n" +
        "**Hugo:** Lucas, tu peux faire la vaisselle, s'il te plaît ?\n" +
        "🔊 Lükas, tü pö fer la vesel, sil tö ple?\n" +
        "_(Lucas, bulaşıkları yıkayabilir misin, lütfen?)_\n\n" +
        "**Lucas:** Mais non ! Je viens de faire la vaisselle ! C'est à ton tour.\n" +
        "🔊 Me no! Jö viyen dö fer la vesel! Se a ton tur.\n" +
        "_(Yok artık! Ben az önce bulaşıkları yıkadım! Senin sıran.)_\n\n" +
        "**Hugo:** D'accord, d'accord. Je vais faire le ménage.\n" +
        "🔊 Dakor, dakor. Jö ve fer lö menaj.\n" +
        "_(Tamam, tamam. Ben temizlik yapacağım.)_\n\n" +
        "**Lucas:** Super. Moi, je viens de faire mon lit. Je vais me reposer.\n" +
        "🔊 Süper. Mua, jö viyen dö fer mon li. Jö ve mö röpoze.\n" +
        "_(Süper. Ben az önce yatağımı topladım. Dinleneceğim.)_",
      examples: [],
    },
  ],
};

const unit344Grammar: UnitGrammar = {
  unitId: 344,
  title: "Günlük Haberler",
  rules: [
    {
      id: "fr-a2-news-vocab",
      title: "🗞️ BÖLÜM 1: HABERLER SÖZLÜĞÜ (Malzemeler)",
      explanation: "Önce gazetecilik kelimelerimizi cebimize koyalım.",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Les actualités / Les infos", "Le zaktüalite / Le zenfo", "Haberler (Güncel olaylar)"],
          ["Le journal", "Lö jurnal", "Gazete / Haber bülteni"],
          ["Le / La journaliste", "Lö / La jurnalist", "Gazeteci"],
          ["L'article (m)", "Lartikl", "Makale / Yazı"],
          ["La météo", "La meteo", "Hava durumu"],
          ["L'accident (m)", "Laksidan", "Kaza"],
          ["L'événement (m)", "Levenman", "Olay / Etkinlik"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-imparfait-concept",
      title: "⏳ BÖLÜM 2: IMPARFAIT MANTIĞI NEDİR?",
      explanation:
        "Türkçedeki \"-yordu\" veya \"-erdi\" ekidir.\n\n" +
        "🔹 Çocukken çok çikolata yiyerdim. (Geçmişteki alışkanlık)\n" +
        "🔹 Dün akşam gazete okuyordum. (Geçmişte devam eden eylem)\n" +
        "🔹 Hava çok güzeldi. (Geçmişteki durum/manzara)\n\n" +
        "💡 **Eğer bir olayın fotoğrafını çekiyorsan, o Imparfait'dir!**",
      examples: [],
    },
    {
      id: "fr-a2-imparfait-formation",
      title: "🛠️ BÖLÜM 3: IMPARFAIT NASIL YAPILIR? (3 Adımlı Formül)",
      explanation:
        "Fransızcada Imparfait yapmak bir Lego oyunu gibidir ve kuralı çok sabittir. Sadece 3 adımda her fiili geçmişe atabilirsin.\n\n" +
        "**Örnek Fiil: REGARDER (İzlemek)**\n\n" +
        "**Adım 1:** Fiilin \"NOUS\" (Biz) çekimini bul.\n" +
        "→ Nous regard**ons** (Biz izliyoruz)\n\n" +
        "**Adım 2:** Sondaki \"ONS\" ekini çöpe at. Elinde kalan \"KÖK\"tür.\n" +
        "→ regard~~ons~~ → Kökümüz: **regard-**\n\n" +
        "**Adım 3:** Sihirli Imparfait eklerini bu köke yapıştır!\n\n" +
        "İşte o sihirli ekler ve okunuşları:",
      table: {
        headers: ["Özne", "Ek", "Okunuşu 🔊"],
        rows: [
          ["Je", "-ais", "-e"],
          ["Tu", "-ais", "-e"],
          ["Il/Elle/On", "-ait", "-e"],
          ["Nous", "-ions", "-iyon"],
          ["Vous", "-iez", "-iye"],
          ["Ils/Elles", "-aient", "-e"],
        ],
      },
      examples: [
        {
          fr: "🧠 KOÇUN MUAZZAM TAKTİĞİ:",
          tr: "Fark ettin mi? Je, Tu, Il, Elle, Ils, Elles... Bunların hepsinin sonundaki eklerin yazılışı farklı olsa da okunuşu tamamen aynıdır! (\"-e\" sesi). Yani konuşurken hata yapma ihtimalin neredeyse SIFIRDIR! Sadece Nous ve Vous farklı okunur.",
        },
      ],
    },
    {
      id: "fr-a2-imparfait-regarder",
      title: "📋 BÖLÜM 4: FİİL ÇEKİMİ (Regarder = İzlemek)",
      explanation: "Hadi formülü uygulayalım:",
      table: {
        headers: ["Özne", "Imparfait Çekimi", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Je", "regardais", "Jö rögarde", "İzliyordum"],
          ["Tu", "regardais", "Tü rögarde", "İzliyordun"],
          ["Il / Elle", "regardait", "İl / El rögarde", "İzliyordu"],
          ["Nous", "regardions", "Nu rögardiyon", "İzliyorduk"],
          ["Vous", "regardiez", "Vu rögardiye", "İzliyordunuz"],
          ["Ils / Elles", "regardaient", "İl / El rögarde", "İzliyorlardı"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-imparfait-etre",
      title: "🚨 BÖLÜM 5: TEK İSTİSNA (ÊTRE = Olmak)",
      explanation:
        "Fransızcada her zaman bir çıkıntı vardır. \"Nous\" kuralına uymayan **TEK BİR FİİL** vardır: **ÊTRE** (Olmak). \"İdim / ...-dı\" demek için kullanılır (Güzeldi, hastaydım, evdeydim).\n\n" +
        "Bunun kökünü ezbere bileceksin: Kök **\"ét-\"** (et- diye okunur).\n" +
        "Sonrasına aynı sihirli ekleri getiriyoruz:",
      table: {
        headers: ["Özne", "ÊTRE Çekimi", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Je", "j'étais", "Jete", "Ben ... idim / ...-dım"],
          ["Tu", "tu étais", "Tü ete", "Sen ... idin"],
          ["Il/Elle", "il/elle était", "İl/El ete", "O ... idi"],
          ["Nous", "nous étions", "Nuz etiyon", "Biz ... idik"],
          ["Vous", "vous étiez", "Vuz etiye", "Siz ... idiniz"],
          ["Ils/Elles", "ils/elles étaient", "İlz/Elz ete", "Onlar ... idiler"],
        ],
      },
      examples: [
        {
          fr: "Il était un bon journaliste.",
          tr: "O, iyi bir gazeteciydi. (🔊 İl ete an bon jurnalist)",
        },
      ],
    },
    {
      id: "fr-a2-imparfait-dialogue",
      title: "🗣️ BÖLÜM 6: SESLİ DİYALOG (Olay Yeri Haberi)",
      explanation:
        "**Senaryo:** Bir gazeteci (Marc), dün akşamki fırtınayı canlı yayında anlatıyor. Olayın \"manzarasını\" çizdiği için hep Imparfait kullanıyor.\n\n" +
        "**Sunucu:** Marc, que se passait-il hier soir ?\n" +
        "🔊 Mark, kö sö pase-til iyer suar?\n" +
        "_(Marc, dün akşam ne oluyordu?)_\n\n" +
        "**Marc (Gazeteci):** Hier soir, la météo était terrible.\n" +
        "🔊 İyer suar, la meteo ete terribl.\n" +
        "_(Dün akşam hava durumu berbattı.)_\n\n" +
        "**Sunucu:** Les gens regardaient les infos ?\n" +
        "🔊 Le jan rögarde le zenfo?\n" +
        "_(İnsanlar haberleri mi izliyordu?)_\n\n" +
        "**Marc:** Oui. Il y avait beaucoup de vent. Je parlais avec les gens. Ils étaient très stressés !\n" +
        "🔊 Ui. İl y ave boku dö van. Jö parle avek le jan. İlz ete tre strese!\n" +
        "_(Evet. Çok rüzgar vardı. İnsanlarla konuşuyordum. Çok stresliydiler!)_\n\n" +
        "_(Not: \"Il y a\" = vardır. \"Il y avait\" = vardı)_",
      examples: [],
    },
  ],
};

const unit345Grammar: UnitGrammar = {
  unitId: 345,
  title: "Televizyon Programları",
  rules: [
    {
      id: "fr-a2-tv-vocab",
      title: "📡 BÖLÜM 1: EKRAN SÖZLÜĞÜ (Malzemeler)",
      explanation: "Televizyon karşısında en çok kullanacağın kelimeler. Hepsini sesli oku!",
      table: {
        headers: ["Fransızca Kelime", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["La télévision (La télé)", "La televizyon (La tele)", "Televizyon"],
          ["La télécommande", "La telekomand", "Uzaktan Kumanda"],
          ["La chaîne", "La şen", "Kanal (TV Kanalı)"],
          ["Les informations (Les infos)", "Le zenformasyon (Le zenfo)", "Haberler"],
          ["La série", "La seri", "Dizi"],
          ["Le documentaire", "Lö dokümantehr", "Belgesel"],
          ["L'émission", "Lemisyon", "TV Programı / Yayın"],
          ["Le présentateur", "Lö prezantatör", "Sunucu (Erkek)"],
          ["La publicité (La pub)", "La püblisite (La püb)", "Reklam"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-tv-verbs",
      title: "🛠️ BÖLÜM 2: FİİLLER (Eylemler)",
      explanation: "Cümle kurmak için bu eylemlere ihtiyacımız olacak.",
      table: {
        headers: ["Fiil", "Okunuşu 🔊", "Anlamı", "Çekimli Örnek (Okunuş)"],
        rows: [
          ["Regarder", "Rögarde", "İzlemek", "Je regarde (Jö rögard) - İzliyorum"],
          ["Aimer", "Eme", "Sevmek", "J'aime (Jem) - Seviyorum"],
          ["Détester", "Deteste", "Nefret etmek", "Je déteste (Jö detest) - Nefret ediyorum"],
          ["Commencer", "Komanse", "Başlamak", "Il commence (İl komans) - O başlıyor"],
          ["Parler", "Parle", "Konuşmak", "Il parle (İl parl) - O konuşuyor"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-qui",
      title: '🔗 BÖLÜM 3: "QUI" YAPIŞTIRICISI (Yapan / Olan)',
      explanation: "QUI (Ki diye okunur), arkasından gelen eylemi YAPAN kişinin veya nesnenin yerini tutar. Türkçedeki \"-an / -en\" ekidir (Başlayan, Konuşan).\n\n🎯 **Altın Kural:**\nEğer boşluktan veya yapıştırıcıdan hemen sonra bir FİİL (Eylem) geliyorsa, o kelime kesinlikle QUI'dir.\n\n**Formül:** İsim + QUI + FİİL\n\nAdım Adım Cümle Kurulumu:\n* **İsim:** La série (Dizi) -> 🔊 La seri\n* **Fiil:** commence à 20h. (Saat 20'de başlıyor.) -> 🔊 komans a ven-tör\n* **Birleştir (QUI ile):** La série QUI commence à 20h.\n* **Türkçesi:** Saat 20'de başlayan dizi.\n* **Tam Okunuşu:** 🔊 La seri ki komans a ven-tör.",
      examples: [
        { fr: "Le présentateur qui parle vite.", tr: "Hızlı konuşan sunucu. (Lö prezantatör ki parl vit)" },
        { fr: "Le documentaire qui est intéressant.", tr: "İlginç olan belgesel. (Lö dokümantehr ki e zenteresan)" },
      ],
    },
    {
      id: "fr-a2-que",
      title: '🔗 BÖLÜM 4: "QUE" YAPIŞTIRICISI (Yapılan / Edilen)',
      explanation: "QUE (Kö diye okunur), eylemden ETKİLENEN şeyin yerini tutar. Türkçedeki \"-dığım / -diğim\" ekidir (İzlediğim, Sevdiğim).\n\n🎯 **Altın Kural:**\nEğer boşluktan veya yapıştırıcıdan hemen sonra bir ŞAHIS veya İSİM (Je, Tu, Ali, Mon père...) geliyorsa, o kelime kesinlikle QUE'dir.\n\n**Formül:** İsim + QUE + ŞAHIS/ÖZNE\n\nAdım Adım Cümle Kurulumu:\n* **İsim:** L'émission (Program) -> 🔊 Lemisyon\n* **Şahıs + Fiil:** tu regardes. (sen izliyorsun.) -> 🔊 tü rögard\n* **Birleştir (QUE ile):** L'émission QUE tu regardes.\n* **Türkçesi:** Senin izlediğin program.\n* **Tam Okunuşu:** 🔊 Lemisyon kö tü rögard.\n\n⚠️ **HAYAT KURTARAN İSTİSNA (Çarpmayı Önleme):**\nFransızcada iki sesli harf yan yana gelmeyi sevmez. Eğer QUE kelimesinden sonra sesli harfle başlayan bir kelime (örneğin il, elle, on veya j'aime) gelirse, QUE kelimesinin sonundaki 'e' düşer ve kesme işareti alır: QU' (K diye okunur).\n* Le film **qu'**il aime. (Onun sevdiği film.) -> 🔊 Lö film kil em.\n* La série **qu'**elle regarde. (Onun izlediği dizi.) -> 🔊 La seri kel rögard.\n*(Dikkat: QUI kelimesinin 'i'si ASLA düşmez! \"Qu'il\" hep QUE'den gelir)*",
      examples: [
        { fr: "La chaîne que je préfère.", tr: "Benim tercih ettiğim kanal. (La şen kö jö prefer)" },
        { fr: "La publicité que nous détestons.", tr: "Bizim nefret ettiğimiz reklam. (La püblisite kö nu deteston)" },
      ],
    },
    {
      id: "fr-a2-qui-que-table",
      title: "🆚 BÖLÜM 5: BEYNE KAZIMA TABLOSU (Karşılaştırma)",
      explanation: "Koç, bu tabloyu zihnine fotoğraf gibi çek.",
      table: {
        headers: ["Yapıştırıcı", "Okunuşu", "Formül", "Türkçesi", "Örnek", "Okunuşu 🔊"],
        rows: [
          ["QUI", "Ki", "İsim + QUI + FİİL", "Yapan / Olan", "Le film qui commence", "Lö film ki komans"],
          ["QUE", "Kö", "İsim + QUE + ŞAHIS", "Yaptığım / Sevdiğim", "Le film que je regarde", "Lö film kö jö rögard"],
        ]
      },
      examples: [],
    },
    {
      id: "fr-a2-tv-dialogue",
      title: "🗣️ BÖLÜM 6: FİNAL DİYALOĞU (Kanepede Kumanda Savaşı)",
      explanation: "**Paul:** Passe-moi la télécommande, s'il te plaît.\n🔊 Pas-mua la telekomand, sil tö ple.\n(Lütfen bana kumandayı uzat.)\n\n**Marc:** Pourquoi ? L'émission QUI commence est très bien.\n🔊 Purkua? Lemisyon Kİ komans e tre biyen.\n(Neden? BaşlayAN program çok iyi.)\n\n**Paul:** Non, c'est le présentateur QUE je déteste ! Il parle trop.\n🔊 No, se lö prezantatör KÖ jö detest! İl parl tro.\n(Hayır, bu benim nefret ettiĞİM sunucu! Çok konuşuyor.)\n\n**Marc:** Alors, on regarde les infos ?\n🔊 Alor, on rögard le zenfo?\n(Öyleyse haberleri mi izleyelim?)\n\n**Paul:** D'accord. Mets la chaîne QUE tu préfères.\n🔊 Dakor. Me la şen KÖ tü prefer.\n(Tamam. Senin tercih ettiĞİN kanalı aç.)\n\n**Marc:** Super. C'est une chaîne QUI donne de bonnes nouvelles.\n🔊 Süper. Se tün şen Kİ don dö bon nuvel.\n(Süper. Bu, iyi haberler verEN bir kanal.)",
      examples: [],
    },
  ],
};

const unit346Grammar: UnitGrammar = {
  unitId: 346,
  title: "Sinema ve Filmler",
  rules: [
    {
      id: "fr-a2-cinema-vocab",
      title: "🎞️ BÖLÜM 1: SİNEMA SÖZLÜĞÜ (Film Türleri)",
      explanation: "Önce ne izleyeceğimize karar verelim. Cinsiyetlere (Le/La) ve okunuşlara dikkat!",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Le film", "Lö film", "Film"],
          ["Un film d'action", "An film daksyon", "Aksiyon filmi"],
          ["Une comédie", "Ün komedi", "Komedi"],
          ["Un film d'horreur", "An film dorör", "Korku filmi"],
          ["Un documentaire", "An dokümantehr", "Belgesel"],
          ["Un dessin animé", "An desan anime", "Çizgi film / Animasyon"],
          ["L'acteur / L'actrice", "Laktör / Laktris", "Oyuncu (Erkek / Kadın)"],
          ["Le réalisateur", "Lö realizatör", "Yönetmen"]
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-superlatif-rules",
      title: "🏆 BÖLÜM 2: ÜSTÜNLÜK DERECESİ (Le Superlatif)",
      explanation:
        "\"Bu film güzel\" (C'est un beau film) demeyi biliyorsun. Peki, \"Bu **en** güzel film\" nasıl denir?\n\n**Mantık:** İngilizcedeki gibi kelimenin sonuna ek gelmez (fast-est gibi). Sadece sıfatın önüne \"En fazla\" veya \"En az\" kelimelerini koyarız.\n\n🧮 **Superlatif Formülü:**\n**Le / La / Les** + **PLUS** (En çok) veya **MOINS** (En az) + Sıfat\n\n⚠️ **Dikkat: Cinsiyet Uyumu**\nSıfat neyi niteliyorsa, başındaki \"Le\" ona göre değişir:\n* **Le** plus grand (Erkek - En büyük)\n* **La** plus grande (Dişi - En büyük)\n* **Les** plus grands (Çoğul - En büyükler)",
      table: {
        headers: ["Derece", "Fransızca Kalıp", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["En çok (+)", "Le plus...", "Lö plü", "En fazla... / En ..."],
          ["En az (-)", "Le moins...", "Lö muen", "En az..."]
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-superlatif-examples",
      title: "🌟 BÖLÜM 3: ÖRNEK CÜMLELER (Filmlerle Uygulama)",
      explanation: "Sıfırdan başlayan biri için en net örnekler:",
      examples: [
        {
          fr: "C'est le film le plus célèbre.",
          tr: "Bu en ünlü filmdir. (🔊 Se lö film lö plü selebr.)",
        },
        {
          fr: "C'est l'actrice la plus riche.",
          tr: "Bu en zengin kadın oyuncudur. (🔊 Se laktris la plü riş.)",
        },
        {
          fr: "C'est le film le moins intéressant.",
          tr: "Bu en az ilginç (en sıkıcı) filmdir. (🔊 Se lö film lö muen zenteresan.)",
        },
      ],
    },
    {
      id: "fr-a2-meilleur-exception",
      title: "👑 BÖLÜM 4: İSTİSNA - 'EN İYİ' (Le Meilleur)",
      explanation:
        "Fransızcada \"En iyi\" derken \"Le plus bon\" denmez! (Tıpkı Türkçede \"En güzelce\" dememek gibi). Özel bir kelime kullanılır:\n\n* **Le meilleur** (Erkek) $\\rightarrow$ 🔊 Lö meyör\n* **La meilleure** (Dişi) $\\rightarrow$ 🔊 La meyör\n* **Les meilleurs** (Çoğul) $\\rightarrow$ 🔊 Le meyör",
      examples: [
        {
          fr: "Tarkan est le meilleur chanteur.",
          tr: "Tarkan en iyi şarkıcıdır.",
        },
        {
          fr: "C'est la meilleure comédie.",
          tr: "Bu en iyi komedidir.",
        },
      ],
    },
    {
      id: "fr-a2-cinema-dialogue",
      title: "🗣️ BÖLÜM 5: SESLİ DİYALOG (Sinema Çıkışı)",
      explanation: "🎬 **Senaryo:** İki arkadaş (Clara ve Theo) yeni çıkan bir aksiyon filmini izlemişler.",
      table: {
        headers: ["Kişi", "Fransızcası", "Okunuşu ve Türkçesi"],
        rows: [
          ["Clara", "Alors, tu aimes ce film ?", "🔊 Alor, tü em sö film? (Eee, bu filmi sevdin mi?)"],
          ["Theo", "Oui, c'est le meilleur film d'action de l'année !", "🔊 Ui, se lö meyör film daksyon dö lane! (Evet, yılın en iyi aksiyon filmi!)"],
          ["Clara", "Vraiment ? Pour moi, c'est le plus long et le plus ennuyeux.", "🔊 Vrecman? Pur mua, se lö plü lon e lö plü zanvüyö. (Gerçekten mi? Bence bu en uzun ve en sıkıcı film.)"],
          ["Theo", "Mais l'acteur est le plus beau, non ?", "🔊 Me laktör e lö plü bo, no? (Ama erkek oyuncu en yakışıklısı, değil mi?)"],
          ["Clara", "Oui, il est célèbre, mais le scénario est le moins original.", "🔊 Ui, il e selebr, me lö senariyo e lö muen zoorijinal. (Evet, ünlü biri ama senaryo en az orijinal olanı.)"]
        ]
      },
      examples: [
        {
          fr: "C'est le meilleur film d'horreur.",
          tr: "🚀 Patron Görevi: Bu en iyi korku filmidir. (🔊 Se lö meyör film dorör.)"
        }
      ]
    },
  ],
};

const unit347Grammar: UnitGrammar = {
  unitId: 347,
  title: "Müzik Zevkleri",
  rules: [
    {
      id: "fr-a2-music-vocab",
      title: "🎸 BÖLÜM 1: MÜZİK SÖZLÜĞÜ (Türler ve Aletler)",
      explanation: "Önce listemizi (Playlist) hazırlayalım.",
      table: {
        headers: ["Müzik Türü / Alet", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["La musique", "La müzik", "Müzik"],
          ["Le rock / La pop", "Lö rok / La pop", "Rock / Pop"],
          ["La musique classique", "La müzik klasik", "Klasik Müzik"],
          ["Le piano", "Lö piyano", "Piyano"],
          ["La guitare", "La gitar", "Gitar"],
          ["La batterie", "La batri", "Bateri (Davul)"],
          ["Une chanson", "Ün şanson", "Bir şarkı"],
          ["Un groupe (de musique)", "An grup", "Müzik grubu"]
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-jouer-de",
      title: "⚠️ BÖLÜM 2: GEÇEN DERSTEN BÜYÜK BAĞLANTI (Jouer DE)",
      explanation:
        "Hatırlıyor musun? Geçen ders spor yaparken 'Top varsa JOUER À kullanılır' demiştik.\\n\\nPeki ya müzik aleti çalıyorsak?\\n**ALTIN KURAL:** Fransızcada bir enstrüman çalmak, onunla oynamak (Jouer) fiiliyle ifade edilir. Ama bu sefer À edatı yerine **DE** (..den) edatı kullanılır!\\n\\n* **Erkek Aletler (Le):** Jouer + de le $\\rightarrow$ **DU**\\n* **Dişi Aletler (La):** Jouer + de la $\\rightarrow$ **DE LA**",
      examples: [
        { fr: "Je joue du piano.", tr: "Piyano çalıyorum. (🔊 Jö ju dü piyano.)" },
        { fr: "Tu joues de la guitare.", tr: "Gitar çalıyorsun. (🔊 Tü ju dö la gitar.)" },
      ],
    },
    {
      id: "fr-a2-depuis-logic",
      title: "⏳ BÖLÜM 3: 'DEPUIS' MANTIĞI (Zaman Makinesi)",
      explanation:
        "**DEPUIS** (Döpüi), geçmişte başlamış ve şu an hala devam eden eylemler için kullanılır. Türkçedeki tam karşılığı: '-den beri' veya '-dır / -dir' (3 yıldır, 5 aydır).\\n\\n**Kritik Kural:** Eylem hala devam ettiği için Fransızcada her zaman **ŞİMDİKİ ZAMAN (Présent)** kullanılır. Asla geçmiş zaman kullanma!\\n\\nKarşımıza iki farklı DEPUIS çıkar:\\n\\n**1. DEPUIS + Başlangıç Noktası (-den beri)**\\nOlayın tam olarak başladığı tarihi veya günü söylüyorsak:\\n* **depuis 2020** (döpüi dö mil ven) = 2020'den beri\\n* **depuis janvier** (döpüi janviye) = Ocak'tan beri\\n* **depuis hier** (döpüi iyer) = Dünden beri\\n\\n**2. DEPUIS + Süre Miktarı (-dır / -dir)**\\nOlayın ne kadar zaman dilimi boyunca sürdüğünü söylüyorsak:\\n* **depuis 5 ans** (döpüi senk an) = 5 yıldır\\n* **depuis deux mois** (döpüi dö mua) = İki aydır\\n* **depuis longtemps** (döpüi lontan) = Uzun zamandır",
      examples: [],
    },
    {
      id: "fr-a2-depuis-music",
      title: "🏗️ BÖLÜM 4: MÜZİK VE ZAMANI BİRLEŞTİRME",
      explanation:
        "Şimdi fiilleri (Écouter = Dinlemek, Jouer = Çalmak) ve Depuis'yi aynı cümlede buluşturalım.",
      table: {
        headers: ["Fransızca Cümle", "Okunuşu 🔊", "Türkçe Çevirisi", "Mantığı"],
        rows: [
          ["J'écoute du rock depuis 2015.", "Jekut dü rok döpüi dö mil kenz.", "2015'ten beri rock dinliyorum.", "Nokta zaman"],
          ["Tu joues de la guitare depuis 3 ans.", "Tü ju dö la gitar döpüi trua zan.", "3 yıldır gitar çalıyorsun.", "Süre zamanı"],
          ["Il chante depuis l'enfance.", "İl şant döpüi lanfans.", "Çocukluktan beri şarkı söylüyor.", "Nokta zaman"],
          ["Nous écoutons ce groupe depuis longtemps.", "Nuz ekuton sö grup döpüi lontan.", "Uzun zamandır bu grubu dinliyoruz.", "Süre zamanı"]
        ]
      },
      examples: [],
    },
    {
      id: "fr-a2-depuis-dialogue",
      title: "🗣️ BÖLÜM 5: SESLİ DİYALOG (Konser Sırasında)",
      explanation: "Senaryo: İki arkadaş (Léa ve Hugo) bir rock konserini beklerken sohbet ediyor.",
      table: {
        headers: ["Kişi", "Fransızca Cümle", "Okunuşu 🔊", "Türkçe Çevirisi"],
        rows: [
          ["Léa", "J'adore ce groupe ! Tu les écoutes depuis quand ?", "Jador sö grup! Tü le zekut döpüi kan?", "Bu gruba bayılıyorum! Onları ne zamandan beri dinliyorsun?"],
          ["Hugo", "J'écoute leur musique depuis 2022. Et toi ?", "Jekut lör müzik döpüi dö mil ven-dö. E tua?", "2022'den beri müziklerini dinliyorum. Ya sen?"],
          ["Léa", "Moi, je les écoute depuis 5 ans ! Le chanteur est super.", "Mua, jö le zekut döpüi senk an! Lö şantör e süper.", "Ben, 5 yıldır onları dinliyorum! Şarkıcı harika."],
          ["Hugo", "Oui, c'est vrai. Au fait, tu joues d'un instrument ?", "Ui, se vre. O fet, tü ju dan enstrüman?", "Evet, doğru. Bu arada, bir enstrüman çalıyor musun?"],
          ["Léa", "Oui, je joue du piano depuis mon enfance.", "Ui, jö ju dü piyano döpüi mon anfans.", "Evet, çocukluğumdan beri piyano çalıyorum."]
        ]
      },
      examples: [],
    }
  ],
};

const unit348Grammar: UnitGrammar = {
  unitId: 348,
  title: "Spor Aktiviteleri",
  rules: [
    {
      id: "fr-a2-jouer-sports",
      title: "⚽ BÖLÜM 1: JOUER (Oynamak) - Toplu ve Takım Oyunları",
      explanation:
        "Eğer yaptığın sporda bir top, bir raket veya karşılıklı bir takım/rakip varsa (Futbol, Tenis, Basketbol, Satranç, Video Oyunları) **JOUER** fiilini kullanırız.\\n\\n**1. JOUER Fiil Çekimi (Takımın Düzenli Oyuncusu)**\\nKurallı ve uslu bir fiildir. (Yazılışları farklı olsa da ilk üç ve sonuncu şahsın okunuşu 'ju' sesidir, çok kolaydır!)\\n⚠️ *Sondaki '-ent' asla okunmaz!*",
      table: {
        headers: ["Özne", "Fiil Çekimi", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Je", "joue", "Jö ju", "Ben oynuyorum"],
          ["Tu", "joues", "Tü ju", "Sen oynuyorsun"],
          ["Il / Elle / On", "joue", "İl / El / On ju", "Erkek O / Kadın O / Biz oynuyor"],
          ["Nous", "jouons", "Nu juon", "Biz oynuyoruz"],
          ["Vous", "jouez", "Vu jue", "Siz oynuyorsunuz"],
          ["Ils / Elles", "jouent", "İl / El ju", "Onlar oynuyorlar"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-jouer-prepositions",
      title: "🎯 BÖLÜM 1.2: Formül ve Edat Mantığı (À Edatı)",
      explanation:
        "Fransızlar 'Tenis oynuyorum' demezler, 'Tenis-e oynuyorum' derler. Yönelme ekini veren harf **À** harfidir.\\n\\n* **Erkek sporlarda (Le):** à + le birleşir ve **AU** (o) olur.\\n* **Çoğul oyunlarda (Les):** à + les birleşir ve **AUX** (o) olur.\\n\\n**Formül:** JOUER + À + Spor/Oyun",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Je joue au football (foot)", "Jö ju o futbol (fut)", "Futbol oynuyorum"],
          ["Tu joues au tennis", "Tü ju o tenis", "Tenis oynuyorsun"],
          ["Il joue au basket", "İl ju o basket", "O basketbol oynuyor"],
          ["Nous jouons aux échecs", "Nu juon o zeşek", "Biz satranç oynuyoruz"],
          ["Vous jouez aux jeux vidéo", "Vu jue o jö video", "Siz video oyunu oynuyorsunuz"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-faire-sports",
      title: "🏊‍♀️ BÖLÜM 2: FAIRE (Yapmak) - Bireysel ve Fiziksel Aktiviteler",
      explanation:
        "Eğer ortada bir top yoksa; koşuyorsan, yüzüyorsan, dağa tırmanıyorsan, bisiklete biniyorsan veya sadece bedenini kullanıyorsan **FAIRE** fiilini kullanırız.\\n\\n**1. FAIRE Fiil Çekimi (Takımın Asi Çocuğu)**\\nBu fiil kural tanımaz (Düzensizdir). Fransızcanın kalbidir, bunu adın gibi ezberlemelisin!",
      table: {
        headers: ["Özne", "Fiil Çekimi", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Je", "fais", "Jö fe", "Ben yapıyorum"],
          ["Tu", "fais", "Tü fe", "Sen yapıyorsun"],
          ["Il / Elle / On", "fait", "İl / El / On fe", "Erkek O / Kadın O / Biz yapıyor"],
          ["Nous", "faisons", "Nu fözon", "Biz yapıyoruz"],
          ["Vous", "faites", "Vu fet", "Siz yapıyorsunuz"],
          ["Ils / Elles", "font", "İl / El fon", "Onlar yapıyorlar"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-faire-prepositions",
      title: "🚲 BÖLÜM 2.2: Formül ve Edat Mantığı (DE Edatı)",
      explanation:
        "Fransızlar 'Bisiklet yapıyorum' demezler, 'Bisiklet-ten yapıyorum' (O eylemden biraz yapıyorum) derler. Buradaki edatımız **DE** kelimesidir.\\n\\n* **Erkek sporlarda (Le):** de + le birleşir ve **DU** (dü) olur.\\n* **Dişi sporlarda (La):** de + la birleşmez, **DE LA** (dö la) kalır.\\n\\n**Formül:** FAIRE + DE + Spor/Aktivite",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe Anlamı"],
        rows: [
          ["Je fais du vélo", "Jö fe dü velo", "Bisiklete biniyorum (yapıyorum)"],
          ["Tu fais du ski", "Tü fe dü ski", "Kayak yapıyorsun"],
          ["Il fait du jogging", "İl fe dü joging", "O koşu yapıyor"],
          ["Nous faisons de la natation", "Nu fözon dö la natasyon", "Biz yüzüyoruz (yüzme yapıyoruz)"],
          ["Vous faites de la gym", "Vu fet dö la jim", "Siz jimnastik yapıyorsunuz"],
          ["Ils font du sport", "İl fon dü spor", "Onlar spor yapıyorlar (Genel)"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-sports-dialogue",
      title: "🗣️ BÖLÜM 3: GÜNLÜK HAYAT DİYALOĞU",
      explanation:
        "**Senaryo:** İki kişi spora başlama kararı alıyor.\\n\\n**Sen:** Salut ! Tu fais du sport ?\\n🔊 *Salü! Tü fe dü spor?*\\n*(Selam! Spor yapıyor musun?)*\\n\\n**O:** Non. Mais je veux commencer. On joue au tennis demain ?\\n🔊 *No. Me jö vö komanse. On ju o tenis dömen?*\\n*(Hayır. Ama başlamak istiyorum. Yarın tenis oynayalım mı?)*\\n\\n**Sen:** Je n'aime pas le tennis. Je préfère faire de la natation.\\n🔊 *Jö nem pa lö tenis. Jö prefer fer dö la natasyon.*\\n*(Tenisi sevmem. Yüzmeyi tercih ederim.)*\\n\\n**O:** D'accord ! Et le week-end, nous faisons du vélo ?\\n🔊 *Dakor! E lö wikend, nu fözon dü velo?*\\n*(Tamam! Peki hafta sonu bisiklete biniyor muyuz?)*\\n\\n**Sen:** Parfait ! Allons-y !\\n🔊 *Parfe! Alon-zi!*\\n*(Mükemmel! Hadi gidelim!)*",
      examples: [
        { fr: "Vous jouez au football.", tr: "Siz futbol oynuyorsunuz. (🔊 Vu jue o futbol)" },
        { fr: "Ils font du vélo.", tr: "Onlar bisiklete biniyorlar. (🔊 İl fon dü velo)" },
      ],
    },
  ],
};

const unit349Grammar: UnitGrammar = {
  unitId: 349,
  title: "Doğa Gezisi",
  rules: [
    {
      id: "fr-a2-nature-vocab",
      title: "🌲 BÖLÜM 1: DOĞA SÖZLÜĞÜ (La Nature)",
      explanation: "Önce nereye gideceğimizi bilelim.",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["La nature", "La natühr", "Doğa"],
          ["La forêt", "La fore", "Orman"],
          ["La montagne", "La montany", "Dağ"],
          ["La mer", "La mer", "Deniz"],
          ["La rivière", "La riviyer", "Nehir"],
          ["L'arbre (m)", "Larbr", "Ağaç"],
          ["Le pique-nique", "Lö pik-nik", "Piknik"],
          ["Le paysage", "Lö peyizaj", "Manzara"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-pronoun-y",
      title: '🎯 BÖLÜM 2: "Y" ZAMİRİ (Oraya / Orada)',
      explanation:
        '**Y** harfi, "Nereye?" (Où?) sorusuna cevap veren ve önünde **À, DANS, SUR, EN** gibi yer edatları olan kelimelerin yerine geçer.\\n\\n**Kural:** Zamir her zaman fiilden **hemen önce** gelir!\\n\\n**Soru:** Tu vas à la forêt ? (Ormana mı gidiyorsun?)\\n🔊 *Tü va a la fore?*\\n**Uzun Cevap:** Oui, je vais à la forêt. (Evet, ormana gidiyorum.) - Fransızlar bunu sevmez.\\n**Kısa (NİNJA) Cevap:** Oui, j\'y vais. (Evet, oraya gidiyorum.)\\n🔊 *Ui, ji ve.*',
      examples: [
        {
          fr: "Elle est dans la tente ? → Oui, elle y est.",
          tr: "O çadırda mı? → Evet, orada / onun içinde. (Ui, el i e.)",
        },
        {
          fr: "Nous allons à la montagne. → Nous y allons.",
          tr: "Biz dağa gidiyoruz. → Biz oraya gidiyoruz. (Nuz i alon.)",
        },
      ],
    },
    {
      id: "fr-a2-pronoun-en",
      title: '🏹 BÖLÜM 3: "EN" ZAMİRİ (Oradan / Ondan)',
      explanation:
        "**EN** kelimesi ise \"Nereden?\" (D'où?) sorusuna cevap veren ve önünde **DE, DU, DE LA, DES** olan kelimelerin yerine geçer. İki anlamı vardır:\\n\\n**1. Yer Anlamı (Oradan)**\\n**Soru:** Tu viens de la montagne ? (Dağdan mı geliyorsun?)\\n🔊 *Tü viyen dö la montany?*\\n**Kısa Cevap:** Oui, j'en viens. (Evet, oradan geliyorum.)\\n🔊 *Ui, jan viyen.*\\n\\n**2. Miktar Anlamı (Ondan / Biraz)**\\nYemek, içmek veya miktar belirtirken de EN kullanılır (Piknikte çok işine yarar!).\\n**Soru:** Tu veux de l'eau ? (Su ister misin?)\\n🔊 *Tü vö dö lo?*\\n**Kısa Cevap:** Oui, j'en veux. (Evet, ondan istiyorum.)\\n🔊 *Ui, jan vö.*",
      examples: [
        {
          fr: "Tu viens de la montagne ? → Oui, j'en viens.",
          tr: "Dağdan mı geliyorsun? → Evet, oradan geliyorum.",
        },
        {
          fr: "Tu veux de l'eau ? → Oui, j'en veux.",
          tr: "Su ister misin? → Evet, ondan istiyorum.",
        },
      ],
    },
    {
      id: "fr-a2-pronoun-placement",
      title: "📐 BÖLÜM 4: ALTIN KURAL (Nereye Koyacağız?)",
      explanation:
        "**Y** ve **EN** her zaman Çekimli Fiilin **Önüne** yapışır. Eğer cümlede **iki fiil varsa** (mesela yakın gelecek zaman / aller + mastar), zweite fiilin (mastarın) önüne gelir.\\n\\n**Örnek:**\\nJe vais aller à la mer. (Denize gideceğim.)\\nJe vais **y** aller. (Oraya gideceğim.)\\n🔊 *Jö ve zi ale.*",
      examples: [
        { fr: "Je vais y aller.", tr: "Ben oraya gideceğim." },
        { fr: "Tu vas en manger ?", tr: "Ondan yiyecek misin?" },
      ],
    },
    {
      id: "fr-a2-picnic-dialogue",
      title: "🗣️ BÖLÜM 5: SESLİ DİYALOG (Ormanda Piknik)",
      explanation:
        '**Senaryo:** İki arkadaş (Marc ve Sophie) ormana pikniğe gidiyor.\\n\\n**Marc:** La forêt est magnifique. Tu aimes la nature ?\\n🔊 *La fore e manyifik. Tü em la natühr?*\\n*(Orman muhteşem. Doğayı sever misin?)*\\n\\n**Sophie:** Oui, j\'adore ! Je viens souvent ici.\\n🔊 *Ui, jador! Jö viyen suvan isi.*\\n*(Evet, bayılırım! Buraya sık sık gelirim.)*\\n\\n**Marc:** Tu as apporté des sandwichs ?\\n🔊 *Tü a aporte de sandviç?*\\n*(Sandviç getirdin mi?)*\\n\\n**Sophie:** Oui, j\'en ai apporté trois. Tu en veux un ?\\n🔊 *Ui, jan e aporte trua. Tü an vö an?*\\n*(Evet, ondan üç tane getirdim. Bir tane ondan ister misin?)*\\n\\n**Marc:** Avec plaisir. Il y a une belle rivière là-bas. On y va ?\\n🔊 *Avek plezir. İl ya ün bel riviyer la-ba. On ni va?*\\n*(Memnuniyetle. Şurada güzel bir nehir var. Oraya gidelim mi?)*\\n\\n**Sophie:** Bonne idée, allons-y !\\n🔊 *Bon ide, alon-zi!*\\n*(İyi fikir, oraya gidelim / hadi gidelim!)*\\n\\n💡 **Not:** "Allons-y" Fransızcadaki en meşhur kalıplardan biridir. Tam çevirisi "Oraya gidelim"dir ama genelde "Hadi başla/Hadi gidelim" anlamında kullanılır.',
      examples: [],
    },
  ],
};

const unit350Grammar: UnitGrammar = {
  unitId: 350,
  title: "Arkadaş Buluşması",
  rules: [
    {
      id: "fr-a2-meet-propose",
      title: "🗣️ BÖLÜM 1: TEKLİF ETMEK (Proposer)",
      explanation:
        "Arkadaşına teklif yaparken en doğal kalıplar:\n\n* **On va ... ?** → On va au cinéma?\n* **Tu as envie de ... ?** → Tu as envie de marcher?\n* **Ça te dit ?** → On mange une pizza, ça te dit?",
      examples: [
        { fr: "On va boire un verre ?", tr: "Bir şeyler içmeye gidelim mi?" },
        { fr: "Ça te dit ce soir ?", tr: "Bu akşam sana uyar mı?" },
      ],
    },
    {
      id: "fr-a2-meet-accept",
      title: "✅ BÖLÜM 2: KABUL ETMEK (Accepter)",
      explanation: "Pozitif cevaplar için kısa ve doğal kalıplar:",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["Génial !", "Jeniyal", "Harika!"],
          ["D'accord, ça marche.", "Dakor, sa marş", "Tamam, olur."],
          ["Allons-y !", "Alon-zi", "Hadi gidelim!"],
          ["Avec plaisir !", "Avek plezir", "Memnuniyetle!"],
          ["Bonne idée !", "Bon ide", "İyi fikir!"],
          ["Pourquoi pas ?", "Purkua pa", "Neden olmasın?"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-meet-refuse",
      title: "❌ BÖLÜM 3: REDDETMEK (Refuser)",
      explanation: "Nazik ve doğal reddetme kalıpları:",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["Bof, je ne sais pas.", "Bof, jö nö se pa", "Pff, bilmiyorum."],
          ["Je ne peux pas, j'ai du travail.", "Jö nö pö pa, jö dü travay", "Yapamam, işim var."],
          ["Non, je n'ai pas envie.", "No, jö ne pa zanvi", "Hayır, canım istemiyor."],
          ["Désolé, je suis occupé.", "Dezole, jö süi zoküpe", "Üzgünüm, meşgulüm."],
          ["Peut-être une autre fois.", "Pötetr ün otr fua", "Belki başka zaman."],
          ["J'ai un empêchement.", "Je ön anpeşman", "Engelim var."],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-meet-details",
      title: "📍 BÖLÜM 4: DETAYLARI KONUŞMAK",
      explanation: "Yer ve zaman için temel sorular ve cevaplar:",
      table: {
        headers: ["Durum", "Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["Yer", "On se retrouve où ?", "On sö rötrüv u", "Nerede buluşuyoruz?"],
          ["Yer", "Devant le cinéma.", "Dövan lö sinema", "Sinemanın önünde."],
          ["Yer", "Chez moi.", "Şe mua", "Benim evimde."],
          ["Yer", "Devant le métro.", "Dövan lö metro", "Metronun önünde."],
          ["Zaman", "On se voit à quelle heure ?", "On sö vua a kel ör", "Saat kaçta görüşüyoruz?"],
          ["Zaman", "Vers 20 heures.", "Ver ven-tör", "Saat 20 civarı."],
          ["Zaman", "Ce soir.", "Sö suar", "Bu akşam."],
          ["Zaman", "Demain.", "Dömen", "Yarın."],
          ["Zaman", "Ce week-end.", "Sö wikend", "Bu hafta sonu."],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-meet-dialogue",
      title: "🗣️ BÖLÜM 5: SESLİ DİYALOG (Plan Yapma)",
      explanation:
        "**Thomas:** Salut Julie ! Qu'est-ce que tu fais ce week-end?\n🔊 Salü Julie! Kes kö tü fe sö wikend?\n_(Selam Julie! Bu hafta sonu ne yapıyorsun?)_\n\n**Julie:** Rien de spécial. Je suis libre.\n🔊 Riyen dö spesyal. Jö süi libr.\n_(Özel bir şey yok. Boşum.)_\n\n**Thomas:** On va au restaurant italien?\n🔊 On va o restoran italyen?\n_(İtalyan restoranına gidelim mi?)_\n\n**Julie:** Mmm, bof. Je n'ai pas très faim. Tu as envie d'aller au cinéma plutôt?\n🔊 Mmm, bof. Jö ne pa tre fen. Tü a anvi dale o sinema plüto?\n_(Pek aç değilim. Onun yerine sinemaya gitmek ister misin?)_\n\n**Thomas:** Bonne idée! On se retrouve où?\n🔊 Bon ide! On sö rötrüv u?\n_(İyi fikir! Nerede buluşuyoruz?)_\n\n**Julie:** Devant le métro, vers 19 heures?\n🔊 Dövan lö metro, ver diz-növ ör?\n_(Metronun önünde, 19:00 civarı?)_\n\n**Thomas:** Ça marche! À plus!\n🔊 Sa marş! A plüs!\n_(Olur! Görüşürüz!)_",
      examples: [],
    },
  ],
};

// ===== ÜNİTE 351-360: Son 10 Ünite =====
const unit351Grammar: UnitGrammar = {
  unitId: 351,
  title: "Telefon Görüşmesi",
  rules: [
    {
      id: "fr-a2-phone-vocab",
      title: "📱 BÖLÜM 1: TEMEL TELEFON KELİMELERİ",
      explanation: "Telefon ekranında veya ayarlarında göreceğin terimler:",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe", "Notlar 📝"],
        rows: [
          ["Allô ?", "Alo?", "Alo?", "Sadece telefonda kullanılır!"],
          ["Le portable", "Lö portabl", "Cep Telefonu", "-"],
          ["Le numéro", "Lö nümero", "Numara", "-"],
          ["Un appel", "An apel", "Bir arama / Çağrı", "-"],
          ["La messagerie", "La mesajri", "Sesli Posta / Telesekreter", "-"],
          ["Le réseau", "Lö rezo", "Şebeke / Hat", "'Reseau yok' = Çekmiyor"],
          ["Sonner", "Sone", "Çalmak (Telefon)", "-"],
          ["Décrocher", "Dekroşe", "Telefonu açmak", "-"],
          ["Raccrocher", "Rakroşe", "Telefonu kapatmak", "-"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-phone-intro",
      title: "🗣️ BÖLÜM 2: KENDİNİ TANITMA (Se présenter)",
      explanation:
        "**⚠️ KRİTİK FARK:** Telefonda 'Ben Yiğithan' derken **'Je suis...'** kullanılmaz!\\n\\n**Telefonda:** C'est + isim → *C'est Yiğithan.* (Ben Yiğithan.)\\n**Yüz yüze:** Je suis + isim → *Je suis Yiğithan.* (Ben Yiğithan.)\\n\\n**Neden?** Telefonda karşı taraf sizi görmüyor. Ses bir 'şey' olarak algılanıyor, bu yüzden 'C'est' (Bu...) kullanılır.\\n\\n**Diğer kalıplar:**\\n• **... à l'appareil** = ...telefonda\\n  *Marie à l'appareil.* (Telefondaki Marie.)\\n• **Ici + isim** = Burada...\\n  *Ici Pierre.* (Burada Pierre.)",
      examples: [
        { fr: "Allô, c'est Yiğithan.", tr: "Alo, ben Yiğithan." },
        {
          fr: "Bonjour, Yiğithan à l'appareil.",
          tr: "Merhaba, telefondaki Yiğithan.",
        },
        {
          fr: "Ici Pierre de la société Dupont.",
          tr: "Burada Dupont şirketinden Pierre.",
        },
      ],
    },
    {
      id: "fr-a2-asking-someone",
      title: "📞 BÖLÜM 3: BİRİNİ İSTEMEK (Demander quelqu'un)",
      explanation:
        "**Yapı:** Je voudrais + fiil mastarı\\n\\n**Kalıplar:**\\n• Je voudrais parler à... (... ile konuşmak istiyorum)\\n• Est-ce que ... est là? (... orada mı?)\\n• Pourrais-je parler à...? (... ile konuşabilir miyim?) - Daha kibar\\n\\n💡 'Je voudrais' (isterdim) 'Je veux'dan (istiyorum) daha kibar!",
      examples: [
        {
          fr: "Je voudrais parler à Monsieur Yılmaz, s'il vous plaît.",
          tr: "Bay Yılmaz ile görüşmek istiyorum lütfen.",
        },
        { fr: "Est-ce que Paul est là?", tr: "Paul orada mı?" },
        {
          fr: "Pourrais-je parler au directeur?",
          tr: "Müdürle görüşebilir miyim?",
        },
      ],
    },
    {
      id: "fr-a2-call-handling",
      title: "⏳ BÖLÜM 4: BEKLETMEK VE AKTARMAK",
      explanation: "Ofis ortamı için çok önemli kalıplar:",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["Ne quittez pas.", "Nö kite pa", "Ayrılmayın (Hatta kalın)."],
          [
            "Un instant, s'il vous plaît.",
            "An enstan, sil vu ple",
            "Bir saniye lütfen.",
          ],
          ["Je vous le passe.", "Jö vu lö pas", "Sizi ona bağlıyorum."],
          ["La ligne est occupée.", "La liny e oküpe", "Hat meşgul."],
          [
            "C'est de la part de qui?",
            "Se dö la par dö ki",
            "Kimin adına? / Kim arıyor?",
          ],
        ],
      },
      examples: [
        {
          fr: "Un instant, je vous le passe.",
          tr: "Bir saniye, sizi bağlıyorum.",
        },
        { fr: "Désolé, il est en ligne.", tr: "Üzgünüm, şu an başka hatta." },
      ],
    },
    {
      id: "fr-a2-phone-problems",
      title: "⚠️ BÖLÜM 5: HAT SORUNLARI (Problèmes)",
      explanation: "Hat kötü olduğunda veya anlamadığında bunları kullan:",
      table: {
        headers: ["Durum", "Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          [
            "Hat kötü",
            "Je vous entends très mal.",
            "Jö vu zantan tre mal",
            "Sizi çok kötü duyuyorum.",
          ],
          ["Ses kesiliyor", "Ça coupe.", "Sa kup", "Ses kesiliyor."],
          [
            "Tekrar et",
            "Pardon? Vous pouvez répéter?",
            "Pardon? Vu puve repete?",
            "Pardon? Tekrar edebilir misiniz?",
          ],
          [
            "Yavaş konuş",
            "Parlez plus lentement, s'il vous plaît.",
            "Parle plü lantman, sil vu ple",
            "Daha yavaş konuşun lütfen.",
          ],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-indirect-pronouns",
      title: "📐 BÖLÜM 6: GRAMER (Dolaylı Nesne Zamirleri)",
      explanation:
        "**'Je vous le passe'** cümlesini anlamak için zamirler:\\n\\n**Zamirler:**\\n• **le** = onu (erkek)\\n• **la** = onu (kadın)\\n• **vous** = size\\n• **lui** = ona\\n\\n**Cümlede sıralama:** Özne + *dolaylı* + *doğrudan* + fiil\\n\\n| Fransızca | Açıklama | Türkçe |\\n|-----------|----------|--------|\\n| Je vous le passe. | size + onu | Sizi ona bağlıyorum. |\\n| Je lui passe un message. | ona | Ona mesaj iletiyorum. |",
      examples: [
        { fr: "Je vous le passe.", tr: "Sizi ona (erkek) bağlıyorum." },
        { fr: "Je vous la passe.", tr: "Sizi ona (kadın) bağlıyorum." },
        { fr: "Je lui laisse un message.", tr: "Ona mesaj bırakıyorum." },
      ],
    },
    {
      id: "fr-a2-phone-dialogue",
      title: "🗣️ BÖLÜM 7: SESLİ DİYALOG (İş Görüşmesi)",
      explanation:
        "**Senaryo:** Müşteri (Pierre), ofisi arıyor. Sekreter (Aslı) cevaplıyor.\\n\\n**Sekreter:** Steadyshell, bonjour.\\n🔊 *Steadyshell, bonjur.*\\n*(Steadyshell, iyi günler.)*\\n\\n**Pierre:** Bonjour, je voudrais parler à Yiğithan, s'il vous plaît.\\n🔊 *Bonjur, jö vudre parle a Yiğithan, sil vu ple.*\\n*(Merhaba, Yiğithan ile görüşmek istiyorum lütfen.)*\\n\\n**Sekreter:** C'est de la part de qui?\\n🔊 *Se dö la par dö ki?*\\n*(Kimin adına?)*\\n\\n**Pierre:** C'est Pierre Dupont.\\n🔊 *Se Pierre Dupont.*\\n*(Ben Pierre Dupont.)*\\n\\n**Sekreter:** Un instant, Monsieur Dupont. Je vous le passe.\\n🔊 *An enstan, Mösyö Dupont. Jö vu lö pas.*\\n*(Bir saniye Bay Dupont. Sizi bağlıyorum.)*\\n\\n*(Biraz bekledikten sonra)*\\n\\n**Sekreter:** Désolée, il est en ligne. Vous voulez laisser un message?\\n🔊 *Dezole, il e an liny. Vu vule lese an mesaj?*\\n*(Üzgünüm, şu an başka hatta. Mesaj bırakmak ister misiniz?)*\\n\\n**Pierre:** Non merci, je vais rappeler plus tard.\\n🔊 *No mersi, jö ve raple plü tar.*\\n*(Hayır teşekkürler, daha sonra tekrar arayacağım.)*",
      examples: [],
    },
  ],
};

const unit352Grammar: UnitGrammar = {
  unitId: 352,
  title: "Davet Etme",
  rules: [
    {
      id: "fr-a2-invitation-patterns",
      title: "🗣️ BÖLÜM 1: DAVET KALIPLARI (Nasıl Sorulur?)",
      explanation:
        "Birine 'Yapalım mı? Gidelim mi?' demenin 3 altın yolu vardır:\\n\\n**1. 'Ça te dit de...?' (Sana uyar mı? / Ne dersin?) ⭐**\\nEn popüler, en günlük ve en 'Fransız' kalıptır.\\nKalıp: Ça te dit de + Fiil?\\n🔊 Sa tö di dö...\\n\\n**2. 'Tu veux...?' (İster misin?)**\\nDaha düz ve net bir sorudur.\\nKalıp: Tu veux + Fiil?\\n🔊 Tü vö...\\n\\n**3. 'On va...?' (Gidelim mi?)**\\n'Nous' yerine 'On' kullanarak yapılan teklif. Çok samimidir.\\nKalıp: On va + Yer?\\n🔊 On va...",
      examples: [
        { fr: "Ça te dit de manger une pizza?", tr: "Pizza yemeye ne dersin?" },
        { fr: "Tu veux aller au cinéma?", tr: "Sinemaya gitmek ister misin?" },
        { fr: "On va au café ce soir?", tr: "Bu akşam kafeye gidelim mi?" },
      ],
    },
    {
      id: "fr-a2-accepting",
      title: "✅ BÖLÜM 2: KABUL ETMEK (Accepter)",
      explanation: "Davet geldi, peki nasıl 'Evet' diyeceğiz?",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["Oui, je veux bien.", "Ui, jö vö biyen", "Evet, çok isterim."],
          ["Avec plaisir!", "Avek plezir", "Zevkle! / Memnuniyetle!"],
          ["D'accord.", "Dakor", "Tamam / Olur."],
          ["Bonne idée!", "Bon ide", "İyi fikir!"],
          ["Pourquoi pas?", "Purkua pa", "Neden olmasın?"],
          ["C'est super!", "Se süper", "Bu süper!"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-refusing",
      title: "❌ BÖLÜM 3: REDDETMEK (Refuser)",
      explanation:
        "Kibarca 'Hayır' demek bir sanattır. Asla sadece 'Non' deme, kaba olur!",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          [
            "Désolé, je ne peux pas.",
            "Dezole, jö nö pö pa",
            "Üzgünüm, yapamam.",
          ],
          ["Je suis occupé(e).", "Jö süi zoküpe", "Meşgulüm."],
          [
            "C'est gentil, mais non.",
            "Se janti, me no",
            "Çok naziksin ama hayır.",
          ],
          ["J'ai du travail.", "Je dü travay", "İşim var."],
          [
            "Peut-être une autre fois.",
            "Pötetr ün otr fua",
            "Belki başka zaman.",
          ],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-conditionnel",
      title: "📐 BÖLÜM 4: GRAMER (Kibarlık Kipi - Conditionnel)",
      explanation:
        "Patronunu veya müşterini davet ederken 'Tu veux?' (İster misin?) demek biraz sert kaçabilir.\\nBunun yerine 'İsterdiniz' (Would you like) kalıbını kullanırız.\\n\\n**Fiil: VOULOIR (İstemek)**\\n* Samimi: Tu veux venir? (Gelmek ister misin?)\\n* Kibar: Tu voudrais venir? (Gelmek ister miydin?)\\n* Resmi: Voudriez-vous venir? (Gelmek ister miydiniz?)\\n🔊 Vudriye-vu vönir?",
      examples: [
        { fr: "Tu veux venir?", tr: "Gelmek ister misin? (Samimi)" },
        { fr: "Tu voudrais venir?", tr: "Gelmek ister miydin? (Kibar)" },
        { fr: "Voudriez-vous venir?", tr: "Gelmek ister miydiniz? (Resmi)" },
      ],
    },
    {
      id: "fr-a2-invitation-dialogue",
      title: "🗣️ BÖLÜM 5: SESLİ DİYALOG (Hafta Sonu Planı)",
      explanation:
        "**Senaryo:** Paul, arkadaşı Marie'yi konsere davet ediyor.\\n\\n**Paul:** Salut Marie! Tu es libre ce week-end?\\n🔊 *Salü Marie! Tü e libr sö wikend?*\\n*(Selam Marie! Bu hafta sonu boş musun?)*\\n\\n**Marie:** Salut! Oui, pourquoi?\\n🔊 *Salü! Ui, purkua?*\\n*(Selam! Evet, neden?)*\\n\\n**Paul:** Ça te dit d'aller au concert de Tarkan?\\n🔊 *Sa tö di dale o konser dö Tarkan?*\\n*(Tarkan konserine gitmeye ne dersin?)*\\n\\n**Marie:** Ah, Tarkan! C'est une très bonne idée! C'est quand?\\n🔊 *A, Tarkan! Se tün tre bon ide! Se kan?*\\n*(Ah, Tarkan! Bu çok iyi bir fikir! Ne zaman?)*\\n\\n**Paul:** Samedi soir, à 20 heures.\\n🔊 *Samdi suar, a ven-tör.*\\n*(Cumartesi akşamı, saat 20'de.)*\\n\\n**Marie:** Avec plaisir! On se retrouve où?\\n🔊 *Avek plezir! On sö rötrüv u?*\\n*(Zevkle! Nerede buluşuyoruz?)*",
      examples: [],
    },
  ],
};

const unit353Grammar: UnitGrammar = {
  unitId: 353,
  title: "Özür Dileme",
  rules: [
    {
      id: "fr-a2-apology-words",
      title: "🙏 BÖLÜM 1: TEMEL ÖZÜR KELİMELERİ",
      explanation: "Durumun ciddiyetine göre hangi kelimeyi seçeceğiz?",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe", "Kullanım Yeri"],
        rows: [
          [
            "Pardon",
            "Pardon",
            "Pardon / Afedersiniz",
            "Çarpışınca, söz kesince (Hafif)",
          ],
          [
            "Excusez-moi",
            "Eksküze mua",
            "İzninizle / Bakar mısınız",
            "Birine soru sormadan önce",
          ],
          [
            "Désolé / Désolée",
            "Dezole",
            "Üzgünüm",
            "Bir hata yaptığında (Duygu içerir)",
          ],
          ["Je m'excuse", "Jö mekskuz", "Özür dilerim", "Daha resmi ve ciddi"],
          ["C'est ma faute", "Se ma fot", "Benim hatam", "Suçu üstlenirken"],
          [
            "Je regrette",
            "Jö rögret",
            "Pişmanım / Üzgünüm",
            "Çok resmi durumlarda",
          ],
        ],
      },
      examples: [
        { fr: "Pardon, je ne vous ai pas vu.", tr: "Pardon, sizi görmedim." },
        { fr: "Je suis vraiment désolé.", tr: "Gerçekten üzgünüm." },
      ],
    },
    {
      id: "fr-a2-excuses",
      title: "🛠️ BÖLÜM 2: MAZERET BİLDİRMEK",
      explanation:
        "Özür diledik, peki neden hata yaptık? İşte en popüler A2 mazeretleri:",
      table: {
        headers: ["Cümle", "Okunuşu 🔊", "Anlamı"],
        rows: [
          ["J'ai oublié.", "Je ubliye", "Unuttum."],
          ["Je suis en retard.", "Jö süi an rötar", "Geciktim."],
          ["J'ai un problème.", "Je an problem", "Bir sorunum var."],
          ["Je suis malade.", "Jö süi malad", "Hastayım."],
          ["Il y a du trafic.", "İl ya dü trafik", "Trafik var."],
          [
            "Mon réveil n'a pas sonné.",
            "Mon revey na pa sone",
            "Alarmım çalmadı.",
          ],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-cause-conjunctions",
      title: "📐 BÖLÜM 3: GRAMER (Sebep Bağlaçları)",
      explanation:
        "Mazeret sunarken 'Çünkü' veya '...yüzünden' demek zorundayız:\\n\\n**1. PARCE QUE (Çünkü)**\\nEn yaygın bağlaç. Kendisinden sonra tam cümle gelir.\\n\\n**2. À CAUSE DE (Yüzünden)**\\nOlumsuz sebep belirtir. Kendisinden sonra isim gelir.\\n\\n**3. CAR (Zira)**\\nYazı dilinde veya resmi maillerde kullanılır.",
      examples: [
        {
          fr: "Je suis en retard parce qu'il y a du trafic.",
          tr: "Geciktim çünkü trafik var.",
        },
        {
          fr: "Je suis en retard à cause du trafic.",
          tr: "Trafik yüzünden geciktim.",
        },
        {
          fr: "Je ne peux pas venir car je suis malade.",
          tr: "Gelemem zira hastayım.",
        },
      ],
    },
    {
      id: "fr-a2-apology-dialogue",
      title: "🗣️ BÖLÜM 4: SESLİ DİYALOG (Toplantıya Geç Kalmak)",
      explanation:
        "**Senaryo:** Léa, patronu M. Dupont'a geç kaldığı için açıklama yapıyor.\\n\\n**M. Dupont:** Léa, vous êtes en retard! La réunion a commencé.\\n🔊 *Léa, vu zet an rötar! La reüniyon a komanse.*\\n*(Léa, geç kaldınız! Toplantı başladı.)*\\n\\n**Léa:** Je suis vraiment désolée, Monsieur.\\n🔊 *Jö süi vreman dezole, Mösyö.*\\n*(Gerçekten çok üzgünüm, efendim.)*\\n\\n**M. Dupont:** Pourquoi êtes-vous en retard?\\n🔊 *Purkua et-vu an rötar?*\\n*(Neden geç kaldınız?)*\\n\\n**Léa:** À cause du bus. Il n'est pas venu.\\n🔊 *A koz dü büs. İl ne pa vönü.*\\n*(Otobüs yüzünden. Gelmedi.)*\\n\\n**M. Dupont:** D'accord, mais la prochaine fois, téléphonez-moi!\\n🔊 *Dakor, me la proşen fua, telefone-mua!*\\n*(Tamam ama bir dahaki sefere bana telefon edin!)*\\n\\n**Léa:** Oui, c'est promis. Excusez-moi encore.\\n🔊 *Ui, se promi. Eksküze-mua ankor.*\\n*(Evet, söz. Tekrar kusura bakmayın.)*",
      examples: [],
    },
  ],
};

const unit354Grammar: UnitGrammar = {
  unitId: 354,
  title: "Yol Tarifi",
  rules: [
    {
      id: "fr-a2-directions-warning",
      title: "⚠️ KRİTİK UYARI: 'SAĞ' vs 'DÜZ'",
      explanation:
        "Bu iki kelimeyi karıştırırsan turistleri yanlış yere gönderirsin!\\n\\n**Tout droit** = Dümdüz (Hiç sapmadan devam et)\\n🔊 Okunuşu: Tu drua\\n\\n**À droite** = Sağa (Sağ tarafa dön)\\n🔊 Okunuşu: A druat (Sonundaki 't' hafif basılarak okunur!)\\n\\n**Fark:** 'Düz' derken O sesi (Drua), 'Sağ' derken A sesi (Druat) baskındır.",
      examples: [
        { fr: "Allez tout droit.", tr: "Dümdüz gidin." },
        { fr: "Tournez à droite.", tr: "Sağa dönün." },
      ],
    },
    {
      id: "fr-a2-road-vocab",
      title: "🚦 BÖLÜM 1: YOL SÖZLÜĞÜ",
      explanation: "Trafikte veya sokakta göreceğin nesneler:",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["Le feu (rouge)", "Lö fö (ruj)", "Trafik Işığı"],
          ["Le carrefour", "Lö karfur", "Kavşak / Dört yol"],
          ["Le rond-point", "Lö ron-puan", "Göbek / Döner Kavşak"],
          ["Le pont", "Lö pon", "Köprü"],
          ["Le passage piéton", "Lö pasaj piyeton", "Yaya Geçidi"],
          ["Le coin", "Lö kuen", "Köşe"],
          ["Le bout", "Lö bu", "Son / Uç (Sokağın sonu)"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-imperative-verbs",
      title: "🏃 BÖLÜM 2: ANA FİİLLER (Emir Kipi)",
      explanation:
        "Yol tarif ederken kibar olmak için VOUS (Siz) çekimi kullanılır:\\n\\n**1. Aller (Gitmek):** Allez tout droit. → Dümdüz gidiniz.\\n**2. Tourner (Dönmek):** Tournez à gauche/droite. → Sola/Sağa dönünüz.\\n**3. Prendre (Almak):** Prenez la première rue. → Birinci sokağı alınız.\\n**4. Traverser (Geçmek):** Traversez le pont. → Köprüyü geçiniz.\\n**5. Continuer (Devam):** Continuez jusqu'au feu. → Işıklara kadar devam ediniz.",
      examples: [
        { fr: "Allez tout droit.", tr: "Dümdüz gidiniz." },
        { fr: "Tournez à gauche.", tr: "Sola dönünüz." },
        { fr: "Prenez le bus.", tr: "Otobüse bininiz." },
        { fr: "Traversez le pont.", tr: "Köprüyü geçiniz." },
        { fr: "Continuez jusqu'au feu.", tr: "Işıklara kadar devam ediniz." },
      ],
    },
    {
      id: "fr-a2-ordinal-numbers",
      title: "📍 BÖLÜM 3: SIRA SAYILARI",
      explanation:
        "'İkinci sokaktan dön' demek için sayıları sıraya koymamız lazım:",
      table: {
        headers: ["Sıra", "Dişi (Sokak için)", "Okunuşu"],
        rows: [
          ["1.", "La première", "La prömiyer"],
          ["2.", "La deuxième", "La döziyem"],
          ["3.", "La troisième", "La truaziyem"],
        ],
      },
      examples: [
        {
          fr: "Prenez la deuxième rue à droite.",
          tr: "Sağdaki ikinci sokağa girin.",
        },
      ],
    },
    {
      id: "fr-a2-conjunctions",
      title: "🔗 BÖLÜM 4: BAĞLAÇLAR",
      explanation: "Robot gibi konuşmamak için cümleleri bağlarız:",
      table: {
        headers: ["Kelime", "Okunuşu 🔊", "Anlamı"],
        rows: [
          ["Puis", "Püi", "Sonra"],
          ["Ensuite", "Ansuit", "Daha sonra / Ardından"],
          ["Après", "Apre", "Sonra"],
          ["Jusqu'à", "Jüska", "...-e kadar (Çok önemli!)"],
        ],
      },
      examples: [
        {
          fr: "Allez tout droit, puis tournez à gauche.",
          tr: "Düz gidin, sonra sola dönün.",
        },
      ],
    },
    {
      id: "fr-a2-directions-dialogue",
      title: "🗣️ BÖLÜM 5: SESLİ DİYALOG (Turist ve Yerli)",
      explanation:
        "**Senaryo:** Turist (Alex), müzeye gitmek istiyor.\\n\\n**Alex:** Pardon madame, pour aller au musée, s'il vous plaît?\\n🔊 *Pardon madam, pur ale o müze, sil vu ple?*\\n*(Pardon hanımefendi, müzeye gitmek için lütfen?)*\\n\\n**Madame:** C'est facile. Allez tout droit jusqu'au feu.\\n🔊 *Se fasil. Ale tu drua jüsko fö.*\\n*(Kolay. Işıklara kadar dümdüz gidin.)*\\n\\n**Alex:** D'accord, et après?\\n🔊 *Dakor, e apre?*\\n*(Tamam, ya sonra?)*\\n\\n**Madame:** Au feu, tournez à droite.\\n🔊 *O fö, turne a druat.*\\n*(Işıklarda, sağa dönün.)*\\n\\n**Alex:** C'est tout?\\n*(Hepsi bu mu?)*\\n\\n**Madame:** Non, traversez le pont. Le musée est en face.\\n🔊 *No, traverse lö pon. Lö müze e an fas.*\\n*(Hayır, köprüyü geçin. Müze karşıdadır.)*",
      examples: [],
    },
  ],
};

const unit355Grammar: UnitGrammar = {
  unitId: 355,
  title: "Şehir Tanıtımı",
  rules: [
    {
      id: "fr-a2-city-vocab",
      title: "🏙️ BÖLÜM 1: ŞEHİR SÖZLÜĞÜ",
      explanation:
        "Önce etrafımızdaki binaları tanıyalım. Cinsiyetlere (Le/La) dikkat!",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe", "Cinsiyet"],
        rows: [
          ["La ville", "La vil", "Şehir", "(Dişi)"],
          ["La capitale", "La kapital", "Başkent", "(Dişi)"],
          ["Le quartier", "Lö kartiye", "Mahalle / Semt", "(Erkek)"],
          ["La rue", "La rü", "Cadde / Sokak", "(Dişi)"],
          ["Le centre-ville", "Lö santr-vil", "Şehir Merkezi", "(Erkek)"],
          ["Le musée", "Lö müze", "Müze", "(Erkek)"],
          ["Le pont", "Lö pon", "Köprü", "(Erkek)"],
          ["La place", "La plas", "Meydan", "(Dişi)"],
          ["La mosquée", "La moske", "Cami", "(Dişi)"],
          ["L'église", "Legliz", "Kilise", "(Dişi)"],
          ["Le bâtiment", "Lö batiman", "Bina", "(Erkek)"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-city-adjectives",
      title: "🎨 BÖLÜM 2: SIFATLAR (Nasıldır?)",
      explanation:
        "Şehri övmek veya yermek için gereken sıfatlar. Bunlar şehre (La ville - Dişi) göre uyum sağlar!",
      table: {
        headers: ["Sıfat (E/D)", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["Grand / Grande", "Gran / Grand", "Büyük"],
          ["Petit / Petite", "Pöti / Pötit", "Küçük"],
          ["Beau / Belle", "Bo / Bel", "Güzel"],
          ["Vieux / Vieille", "Viyö / Viey", "Eski / Tarihi"],
          ["Moderne", "Modern", "Modern (Değişmez)"],
          ["Bruyant / Bruyante", "Brüyan / Brüyant", "Gürültülü"],
          ["Calme", "Kalm", "Sakin"],
          ["Célèbre", "Selebr", "Ünlü / Meşhur"],
        ],
      },
      examples: [
        {
          fr: "İstanbul est une grande ville.",
          tr: "İstanbul büyük bir şehirdir.",
        },
        {
          fr: "Paris est une ville touristique.",
          tr: "Paris turistik bir şehirdir.",
        },
      ],
    },
    {
      id: "fr-a2-prepositions",
      title: "📍 BÖLÜM 3: GRAMER (Yer Yön Tarifleri)",
      explanation:
        "'Müze nerede?' dediklerinde yolu tarif etmek veya konum belirtmek için Edatlar (Prépositions) şarttır.",
      table: {
        headers: ["Edat", "Okunuşu 🔊", "Anlamı", "Kullanım Örneği"],
        rows: [
          ["Près de", "Pre dö", "Yakınında", "Près de la mer (Denize yakın)"],
          ["Loin de", "Luen dö", "Uzağında", "Loin du centre (Merkezden uzak)"],
          [
            "À côté de",
            "A kote dö",
            "Yanında",
            "À côté de l'hôtel (Otelin yanında)",
          ],
          [
            "En face de",
            "An fas dö",
            "Karşısında",
            "En face du musée (Müzenin karşısında)",
          ],
          ["Dans", "Dan", "İçinde", "Dans la ville (Şehrin içinde)"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-ilya-cest",
      title: "🏗️ BÖLÜM 4: KRİTİK YAPI (Il y a vs C'est)",
      explanation:
        "Şehir tanıtırken en çok bu iki kalıp karıştırılır.\\n\\n**1. IL Y A (Vardır)**\\nBir yerde neyin bulunduğunu sayarken kullanılır.\\nFormül: IL Y A + Nesne\\n🔊 Okunuşu: İl-ya...\\n\\n**2. C'EST (Budur / O...)**\\nBir yeri tanımlarken veya fikir belirtirken kullanılır.\\nFormül: C'EST + Sıfat / İsim\\n🔊 Okunuşu: Se...",
      examples: [
        {
          fr: "A Istanbul, il y a beaucoup de mosquées.",
          tr: "İstanbul'da çok cami vardır.",
        },
        {
          fr: "Dans mon quartier, il y a un parc.",
          tr: "Mahallemde bir park var.",
        },
        { fr: "C'est une ville magnifique.", tr: "O muhteşem bir şehirdir." },
        { fr: "C'est très bruyant.", tr: "Burası çok gürültülü." },
      ],
    },
    {
      id: "fr-a2-city-dialogue",
      title: "🗣️ BÖLÜM 5: SESLİ DİYALOG (Turiste Yardım)",
      explanation:
        "**Senaryo:** Pierre (Fransız Turist), İstanbul'da Ali'ye Sultanahmet'i soruyor.\\n\\n**Pierre:** Pardon monsieur, Sultanahmet, c'est loin d'ici?\\n🔊 *Pardon mösyö, Sultanahmet, se luen disi?*\\n*(Pardon beyefendi, Sultanahmet buradan uzak mı?)*\\n\\n**Ali:** Non, ce n'est pas loin. C'est à 10 minutes.\\n🔊 *No, sö ne pa luen. Se a di minüt.*\\n*(Hayır, uzak değil. 10 dakika mesafede.)*\\n\\n**Pierre:** Qu'est-ce qu'il y a à voir là-bas?\\n🔊 *Kes kil ya a vuar la-ba?*\\n*(Orada görülecek ne var?)*\\n\\n**Ali:** Il y a la Mosquée Bleue et Sainte-Sophie. C'est magnifique!\\n🔊 *İl ya la Moske Blö e Sent-Sofi. Se manyifik!*\\n*(Sultanahmet Camii ve Ayasofya var. Muhteşemdir!)*\\n\\n**Pierre:** Et le Grand Bazar?\\n🔊 *E lö Gran Bazar?*\\n*(Peki ya Kapalıçarşı?)*\\n\\n**Ali:** C'est à côté de la mosquée. C'est un endroit très historique.\\n🔊 *Se a kote dö la moske. Se an andra tre zistorik.*\\n*(Caminin yanında. Çok tarihi bir yerdir.)*",
      examples: [],
    },
  ],
};

const unit356Grammar: UnitGrammar = {
  unitId: 356,
  title: "Kültürel Farklar",
  rules: [
    {
      id: "fr-a2-culture-vocab",
      title: "🎭 BÖLÜM 1: TEMEL KÜLTÜR SÖZLÜĞÜ",
      explanation: "Önce konuyu tartışmak için gereken kelimeler:",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe", "Notlar 📝"],
        rows: [
          ["La culture", "La kültür", "Kültür", "-"],
          ["La différence", "La diferans", "Fark", "-"],
          ["La ressemblance", "La resemblans", "Benzerlik", "-"],
          ["La coutume", "La kutüm", "Gelenek / Adet", "Önemli kelime!"],
          ["L'habitude", "Labitüd", "Alışkanlık", "-"],
          ["Le pays", "Lö peyi", "Ülke", "Sonundaki 's' okunmaz"],
          ["Étranger", "Etranje", "Yabancı", "-"],
          ["La vie quotidienne", "La vi kotidyen", "Günlük hayat", "-"],
          ["La politesse", "La polites", "Nezaket", "Fransa'da çok önemli!"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-comparison-review",
      title: "🆚 BÖLÜM 2: GRAMER TEKRARI (Karşılaştırma)",
      explanation:
        "Alışveriş ünitesinde öğrendiğimiz 'Plus... que' (Daha... than) kalıbını burada kültürler için kullanacağız.\\n\\n**Formül:** Özne + Fiil + PLUS / MOINS + Sıfat + QUE + Diğer Ülke",
      examples: [
        {
          fr: "La France est plus petite que la Turquie.",
          tr: "Fransa, Türkiye'den daha küçüktür.",
        },
        {
          fr: "Le café turc est plus fort que le café français.",
          tr: "Türk kahvesi Fransız kahvesinden daha serttir.",
        },
        {
          fr: "Les gens sont aussi sympas qu'en Turquie.",
          tr: "İnsanlar Türkiye'deki kadar sempatiktir.",
        },
      ],
    },
    {
      id: "fr-a2-france-turkey-diff",
      title: "🥖 vs 🥯 BÖLÜM 3: FRANSA VE TÜRKİYE FARKLARI",
      explanation:
        "İşte gerçek hayatta karşılaşacağın en büyük 3 fark:\\n\\n**1. Selamlaşma: 'La Bise' 💋**\\nFransa'da insanlar yanak yanağa öpüşür. Buna 'Faire la bise' denir.\\n• Türkiye: Biz el sıkışırız veya sarılırız.\\n• Fransa: Sarılmak çok nadirdir.\\n\\n**2. Yemek Saatleri: 'Le Dîner' 🍽️**\\nFransızlar akşam yemeğini çok geç yer.\\n• Türkiye: 19:00 civarı\\n• Fransa: 20:00 hatta 21:00\\n\\n**3. Hitap: 'Vous' vs 'Tu' 👔**\\nFransa'da tanımadığın birine 'Tu' demek kabalıktır. Her zaman 'Vous' ile başlanır.\\n• Türkiye: 'Abi/Abla' deriz, hemen samimi oluruz.\\n• Fransa: Yıllarca komşuna 'Monsieur' diyebilirsin.",
      examples: [
        {
          fr: "En France, on fait la bise pour dire bonjour.",
          tr: "Fransa'da merhaba demek için yanaktan öpüşülür.",
        },
        {
          fr: "Les Français mangent plus tard que les Turcs.",
          tr: "Fransızlar Türklerden daha geç yemek yer.",
        },
        {
          fr: "La politesse est très importante en France.",
          tr: "Fransa'da nezaket çok önemlidir.",
        },
      ],
    },
    {
      id: "fr-a2-culture-dialogue",
      title: "🗣️ BÖLÜM 4: SESLİ DİYALOG (Kültür Şoku)",
      explanation:
        "**Senaryo:** Türk öğrenci (Can) ve Fransız arkadaşı (Lucas) alışkanlıkları kıyaslıyor.\\n\\n**Lucas:** Tu aimes la cuisine française, Can?\\n🔊 *Tü em la küizin franse, Can?*\\n*(Fransız mutfağını seviyor musun, Can?)*\\n\\n**Can:** Oui, mais le petit-déjeuner est très différent.\\n🔊 *Ui, me lö pöti-dejöne e tre diferan.*\\n*(Evet ama kahvaltı çok farklı.)*\\n\\n**Lucas:** Ah bon? Pourquoi?\\n🔊 *A bon? Purkua?*\\n*(Öyle mi? Neden?)*\\n\\n**Can:** En Turquie, le petit-déjeuner est plus grand qu'en France. On mange du fromage, des olives, des œufs...\\n🔊 *An Türki, lö pöti-dejöne e plü gran kan Frans. On manj dü fromaj, de zoliv, de zö...*\\n*(Türkiye'de kahvaltı Fransa'dakinden daha büyüktür. Peynir, zeytin, yumurta yeriz...)*\\n\\n**Lucas:** C'est vrai. En France, on mange juste un croissant et du café. C'est plus léger.\\n🔊 *Se vre. An Frans, on manj jüst an kruasan e dü kafe. Se plü leje.*\\n*(Doğru. Fransa'da sadece kruvasan ve kahve yeriz. O daha hafiftir.)*\\n\\n**Can:** Et vous mangez le dîner plus tard que nous!\\n🔊 *E vu manje lö dine plü tar kö nu!*\\n*(Ve siz akşam yemeğini bizden daha geç yiyorsunuz!)*",
      examples: [],
    },
  ],
};

const unit357Grammar: UnitGrammar = {
  unitId: 357,
  title: "Eğitim Hayatı",
  rules: [
    {
      id: "fr-a2-edu-places",
      title: "🏫 BÖLÜM 1: OKUL YERLERİ VE KİŞİLER",
      explanation: "Okul ortamındaki temel isimler:",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          ["L'école", "Lekol", "Okul"],
          ["Le lycée", "Lö lise", "Lise"],
          ["L'université", "Lüniversite", "Üniversite"],
          [
            "L'étudiant / L'étudiante",
            "Letüdyan / Letüdyant",
            "Üniversite Öğrencisi (E/K)",
          ],
          ["L'élève", "Lelev", "Öğrenci (Genel)"],
          ["Le professeur", "Lö profesör", "Öğretmen"],
          ["La classe", "La klas", "Sınıf"],
          ["La bibliothèque", "La bibliyotek", "Kütüphane"],
          ["Le cahier", "Lö kaye", "Defter"],
          ["Le livre", "Lö livr", "Kitap"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-edu-verbs",
      title: "🛠️ BÖLÜM 2: EĞİTİM FİİLLERİ",
      explanation:
        "Bu fiilleri cümle içinde nasıl kullanacağını ezberle:\\n\\n**1. Apprendre (Öğrenmek)** - Okunuşu: Aprandr\\n**2. Comprendre (Anlamak)** - Okunuşu: Komprandr\\n**3. Étudier (Ders Çalışmak)** - Okunuşu: Etüdye\\n**4. Demander (Sormak/İstemek)** - Okunuşu: Dömande\\n**5. Expliquer (Açıklamak)** - Okunuşu: Eksplike",
      examples: [
        {
          fr: "J'apprends le français.",
          tr: "Fransızca öğreniyorum. (Japran lö franse)",
        },
        {
          fr: "Je ne comprends pas la question.",
          tr: "Soruyu anlamıyorum. (Jö nö kompran pa la kestion)",
        },
        {
          fr: "Il étudie à l'université.",
          tr: "O üniversitede okuyor. (İl etüdi a lüniversite)",
        },
        {
          fr: "Je peux demander quelque chose?",
          tr: "Bir şey sorabilir miyim? (Jö pö dömande kelk şoz)",
        },
        {
          fr: "Le prof explique la leçon.",
          tr: "Hoca dersi açıklıyor. (Lö prof eksplik la löson)",
        },
      ],
    },
    {
      id: "fr-a2-edu-exams",
      title: "⚠️ BÖLÜM 3: KRİTİK SINAV TUZAĞI (Passer vs Réussir)",
      explanation:
        "Türkçede 'sınavı geçtim' derken dikkatli ol! Fransızcada iki farklı anlam var:\\n\\n**PASSER un examen** = Sınava GİRMEK (henüz sonuç yok)\\n**RÉUSSIR un examen** = Sınavı GEÇMEK (başarılı olmak)\\n**RATER/ÉCHOUER** = Sınavdan KALMAK",
      table: {
        headers: ["Durum", "Fransızca", "Okunuşu 🔊", "Türkçe"],
        rows: [
          [
            "Sınava Girmek",
            "Je vais passer un examen.",
            "Jö ve pase an egzamen",
            "Sınava gireceğim.",
          ],
          [
            "Sınavı Geçmek",
            "J'ai réussi l'examen.",
            "Je reüsi legzamen",
            "Sınavı geçtim (başardım).",
          ],
          [
            "Sınavdan Kalmak",
            "J'ai raté l'examen.",
            "Je rate legzamen",
            "Sınavdan kaldım.",
          ],
        ],
      },
      examples: [
        {
          fr: "❌ J'ai passé l'examen ≠ Sınavı geçtim",
          tr: "⚠️ Bu 'sınava girdim' demek, 'geçtim' değil!",
        },
        {
          fr: "✅ J'ai réussi l'examen = Sınavı geçtim",
          tr: "Doğru kullanım budur!",
        },
      ],
    },
    {
      id: "fr-a2-edu-dialogue",
      title: "🗣️ BÖLÜM 4: ÖRNEK DİYALOG (Sınav Stresi)",
      explanation:
        "**Senaryo:** Léo ve Lea matematik sınavı hakkında konuşuyor.\\n\\n**Léo:** Salut Lea, tu as bien révisé pour l'examen ?\\n🔊 *Salü Lea, tü a biyen revize pur legzamen?*\\n*(Selam Lea, sınav için iyi tekrar yaptın mı?)*\\n\\n**Lea:** Non, les maths, c'est très difficile pour moi.\\n🔊 *No, le mat, se tre difisil pur mua.*\\n*(Hayır, matematik benim için çok zor.)*\\n\\n**Léo:** Pourquoi ? Tu ne comprends pas le prof ?\\n🔊 *Purkua? Tü nö kompran pa lö prof?*\\n*(Neden? Hocayı anlamıyor musun?)*\\n\\n**Lea:** Si, je comprends le cours, mais je fais des erreurs.\\n🔊 *Si, jö kompran lö kur, me jö fe de zerör.*\\n*(Evet, dersi anlıyorum ama hatalar yapıyorum.)*\\n\\n**Léo:** On peut étudier ensemble ce soir ?\\n🔊 *On pö etüdye ansambl sö suar?*\\n*(Bu akşam beraber çalışabiliriz, olur mu?)*\\n\\n**Lea:** Merci ! J'espère que je vais réussir.\\n🔊 *Mersi! Jesper kö jö ve reüsi.*\\n*(Teşekkürler! Umarım başarırım/geçerim.)*",
      examples: [],
    },
  ],
};

const unit358Grammar: UnitGrammar = {
  unitId: 358,
  title: "İş Hayatı",
  rules: [
    {
      id: "fr-a2-work-terms",
      title: "🏢 BÖLÜM 1: TEMEL TERİMLER (Ofis Sözlüğü)",
      explanation:
        "Bir şirketin içindeki temel taşlar. Cinsiyetlere (Le/La) dikkat!",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe", "Cinsiyet"],
        rows: [
          [
            "Le travail / Le boulot",
            "Lö travay / Lö bulo",
            "İş ('Boulot' günlük dildir)",
            "Erkek",
          ],
          [
            "L'entreprise / La société",
            "Lantröpriz / La sosyete",
            "Şirket / Firma",
            "Dişi",
          ],
          ["Le bureau", "Lö büro", "Ofis / Çalışma Masası", "Erkek"],
          ["Le patron / La patronne", "Lö patron", "Patron", "E / D"],
          ["Le chef", "Lö şef", "Yönetici / Şef", "Erkek"],
          ["Le collègue", "Lö kolleg", "İş arkadaşı", "E / D"],
          ["Le client", "Lö kliyan", "Müşteri", "Erkek"],
          ["La réunion", "La reüniyon", "Toplantı", "Dişi"],
          ["Le chômage", "Lö şomaj", "İşsizlik", "Erkek"],
          ["Le CV (Curriculum Vitae)", "Lö se-ve", "Özgeçmiş", "Erkek"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-work-verbs",
      title: "🛠️ BÖLÜM 2: İŞ EYLEMLERİ (Fiiller)",
      explanation: "İş hayatında en çok bu fiilleri çekeceğiz.",
      table: {
        headers: ["Fiil", "Anlamı", "Örnek Cümle"],
        rows: [
          [
            "Travailler",
            "Çalışmak",
            "Je travaille chez Google. (Google'da çalışıyorum.)",
          ],
          [
            "Gagner",
            "Kazanmak (Para)",
            "Il gagne bien sa vie. (Hayatını iyi kazanıyor.)",
          ],
          [
            "Chercher",
            "Aramak (İş/Eleman)",
            "Je cherche un emploi. (Bir iş arıyorum.)",
          ],
          ["Trouver", "Bulmak", "J'ai trouvé un travail. (Bir iş buldum.)"],
          [
            "Démissionner",
            "İstifa etmek",
            "Il va démissionner. (İstifa edecek.)",
          ],
          [
            "Signer",
            "İmzalamak",
            "Signez le contrat, s'il vous plaît. (Sözleşmeyi imzalayın lütfen.)",
          ],
        ],
      },
      examples: [
        {
          fr: "⚠️ KRİTİK AYRIM: Travailler vs Marcher",
          tr: "Türkçede ikisine de 'Çalışmak' diyoruz ama Fransızcada farklıdır!",
        },
        { fr: "Ali travaille.", tr: "Ali çalışıyor. (İnsan = TRAVAILLER)" },
        {
          fr: "L'ordinateur marche.",
          tr: "Bilgisayar çalışıyor. (Makine = MARCHER)",
        },
      ],
    },
    {
      id: "fr-a2-work-devoir",
      title: "📐 BÖLÜM 3a: Zorunluluk Kipi - DEVOIR (Meli/Malı) 🛑",
      explanation:
        "'Raporu bitirmeliyim', 'Toplantıya gitmeliyiz' demek için DEVOIR fiili kullanılır.\\n\\n**DEVOIR Çekimi (Present):**\\n* Je dois (Zorundayım)\\n* Tu dois\\n* Il/Elle doit\\n* Nous devons\\n* Vous devez\\n* Ils doivent\\n\\n**Formül:** DEVOIR (Çekimle) + FİİL (Mastar Halde)",
      examples: [
        { fr: "Je dois finir ce projet.", tr: "Bu projeyi bitirmeliyim." },
        { fr: "Nous devons travailler.", tr: "Çalışmalıyız." },
        { fr: "Tu dois envoyer le rapport.", tr: "Raporu göndermelisin." },
      ],
    },
    {
      id: "fr-a2-work-futur-proche",
      title: "📐 BÖLÜM 3b: Yakın Gelecek - FUTUR PROCHE (Ecek/Acak) 🚀",
      explanation:
        "İş planı yaparken 'Yapacağım, Gideceğim' demek için en kolay zaman budur.\\n\\n**Formül:** ALLER (Gidiyorum) + FİİL (Mastar)\\n\\n* Je vais... (Yapacağım)\\n* Tu vas... (Yapacaksın)\\n* Il/Elle va... (Yapacak)\\n* Nous allons... (Yapacağız)\\n* Vous allez... (Yapacaksınız)\\n* Ils vont... (Yapacaklar)",
      examples: [
        { fr: "Je vais envoyer l'email.", tr: "Maili göndereceğim." },
        { fr: "Nous allons faire une réunion.", tr: "Bir toplantı yapacağız." },
        { fr: "Elle va signer le contrat.", tr: "Sözleşmeyi imzalayacak." },
      ],
    },
    {
      id: "fr-a2-work-email",
      title: "📧 BÖLÜM 4: PROFESYONEL İLETİŞİM (Mail Dili)",
      explanation:
        "İş maillerinde 'Selam naber' denmez. İşte kalıplar:\\n\\n**Giriş:**\\n* Madame, / Monsieur, (Hanımefendi / Beyefendi - İsimsiz)\\n* Bonjour Monsieur Yılmaz, (Merhaba Sayın Yılmaz)\\n\\n**Gelişme:**\\n* Je vous écris pour... (...için size yazıyorum.)\\n* En pièce jointe... (Ekte...)\\n\\n**Çıkış (Kapanış):**\\n* Cordialement, (Saygılarımla / İçtenlikle) - En yaygını budur.\\n* Bien à vous, (Saygılarımla)\\n\\n⚡ **Altın Kural:** İş yerinde tanımadığın veya üstün olan herkese 'VOUS' (Siz) diye hitap et. 'Tu' (Sen) demek kabalık sayılabilir.",
      examples: [
        { fr: "Bonjour Monsieur Dupont,", tr: "Merhaba Sayın Dupont," },
        {
          fr: "Je vous écris pour le projet.",
          tr: "Proje için size yazıyorum.",
        },
        { fr: "Cordialement,", tr: "Saygılarımla," },
      ],
    },
    {
      id: "fr-a2-work-dialogue",
      title: "🗣️ BÖLÜM 5: ÖRNEK DİYALOG (Görev Verme)",
      explanation:
        "**Senaryo:** Bir yönetici (Directeur) çalışanına (Employé) yeni bir görev veriyor.\\n\\n**Directeur:** Bonjour Ali, vous avez une minute ?\\n*(Merhaba Ali, bir dakikanız var mı?)*\\n\\n**Ali:** Oui Monsieur, bien sûr.\\n*(Evet efendim, elbette.)*\\n\\n**Directeur:** Nous devons préparer le projet 'SteadyShell'.\\n*(SteadyShell projesini hazırlamalıyız.)*\\n\\n**Ali:** D'accord. C'est pour quand ?\\n*(Tamam. Ne zaman için?)*\\n\\n**Directeur:** Pour demain. C'est très urgent !\\n*(Yarın için. Çok acil!)*\\n\\n**Ali:** Pas de problème. Je vais commencer tout de suite.\\n*(Sorun yok. Hemen başlayacağım.)*\\n\\n**Directeur:** Merci. Bon travail !\\n*(Teşekkürler. İyi çalışmalar!)*",
      examples: [],
    },
  ],
};

const unit359Grammar: UnitGrammar = {
  unitId: 359,
  title: "Teknoloji Kullanımı",
  rules: [
    {
      id: "fr-a2-tech-hardware",
      title: "🧱 BÖLÜM 1: TEMEL DONANIM (Cihazlar)",
      explanation:
        "Masanın üzerindeki aletleri tanıyalım. Cinsiyetlere (Le/La) dikkat!\\n\\n**Erkek (Masculin):**\\n* L'ordinateur (Lordinatör) - Bilgisayar\\n* L'ordinateur portable (... portabl) - Laptop\\n* Le portable / Le smartphone (Lö portabl) - Cep Telefonu\\n* L'écran (Lekran) - Ekran\\n* Le clavier (Lö klavye) - Klavye\\n\\n**Dişi (Féminin):**\\n* La souris (La suri) - Mouse (Fare)\\n* La tablette (La tablet) - Tablet\\n* L'imprimante (Lemprimant) - Yazıcı\\n\\n💡 **İpucu:** 'Laptop' kelimesi de kullanılır ama resmi olanı **'Un portable'** dır.",
      examples: [
        { fr: "J'allume l'ordinateur.", tr: "Bilgisayarı açıyorum." },
        { fr: "Ma souris ne marche pas.", tr: "Farem çalışmıyor." },
        { fr: "L'écran est noir.", tr: "Ekran siyah." },
      ],
    },
    {
      id: "fr-a2-tech-internet",
      title: "🌐 BÖLÜM 2: İNTERNET VE YAZILIM",
      explanation: "Sanal dünyada kullanılan kelimeler:",
      table: {
        headers: ["Fransızca", "Okunuşu 🔊", "Türkçe", "Notlar 📝"],
        rows: [
          ["Internet", "Enternet", "İnternet", "Baş harfi büyük"],
          ["Le site web", "Lö sit veb", "Web sitesi", "-"],
          [
            "L'e-mail / Le courriel",
            "Limeyl / Lö kuryel",
            "E-posta",
            "Courriel daha resmi",
          ],
          ["Le mot de passe", "Lö mo dö pas", "Şifre", "Çok önemli!"],
          ["Le fichier", "Lö fişye", "Dosya", "-"],
          ["Le dossier", "Lö dosye", "Klasör", "-"],
          ["Le lien", "Lö liyen", "Link (Bağlantı)", "-"],
          ["L'arobase (@)", "Larobaz", "Et işareti", "Mail söylerken lazım!"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-tech-verbs-onoff",
      title: "🛠️ BÖLÜM 3a: Açmak ve Kapatmak (Elektronik)",
      explanation:
        "Kapı pencere açar gibi (Ouvrir/Fermer) kullanılmaz! Elektrikli aletler için özel fiiller vardır:\\n\\n**ALLUMER** = Açmak (Elektriği/Cihazı)\\n* J'allume l'ordinateur. (Bilgisayarı açıyorum.)\\n* Allume la lumière! (Işığı aç!)\\n\\n**ÉTEINDRE** = Kapatmak (Söndürmek)\\n* Tu éteins la télé. (TV'yi kapatıyorsun.)\\n* Éteins ton téléphone! (Telefonunu kapat!)",
      examples: [
        { fr: "J'allume l'ordinateur.", tr: "Bilgisayarı açıyorum." },
        { fr: "Tu éteins la télé.", tr: "TV'yi kapatıyorsun." },
        {
          fr: "N'oublie pas d'éteindre l'imprimante.",
          tr: "Yazıcıyı kapatmayı unutma.",
        },
      ],
    },
    {
      id: "fr-a2-tech-verbs-other",
      title: "🛠️ BÖLÜM 3b: Diğer Kritik Fiiller",
      explanation: "Teknolojiyi kullanmak için gereken diğer önemli fiiller:",
      table: {
        headers: ["Fiil", "Anlamı", "Örnek Cümle"],
        rows: [
          [
            "Cliquer (sur)",
            "Tıklamak",
            "Cliquez sur le lien. (Linke tıklayın.)",
          ],
          [
            "Sauvegarder",
            "Kaydetmek",
            "N'oublie pas de sauvegarder. (Kaydetmeyi unutma.)",
          ],
          [
            "Télécharger",
            "İndirmek",
            "Je télécharge un film. (Bir film indiriyorum.)",
          ],
          ["Envoyer", "Göndermek", "J'envoie un e-mail. (Bir mail atıyorum.)"],
          [
            "Naviguer (sur)",
            "Sörf yapmak",
            "Je navigue sur internet. (İnternette geziniyorum.)",
          ],
          ["Brancher", "Fişe takmak", "Branche ton chargeur. (Şarjını tak.)"],
        ],
      },
      examples: [],
    },
    {
      id: "fr-a2-tech-prepositions",
      title: "📐 BÖLÜM 4a: Edatlar (Les Prépositions)",
      explanation:
        "Teknolojide hangi edatı kullanacağız? Bu bölüm çok hata yapılan yerdir!\\n\\n**SUR (Üzerinde):** Ekranlı şeylerin genelde 'üzerinde' oluruz.\\n* Sur internet (İnternette) ✅\\n* Sur l'ordinateur (Bilgisayarda)\\n* Sur Facebook / Instagram\\n* Je suis sur internet. (İnternetteyim.)\\n\\n⚠️ **Asla Dans internet denmez!**\\n\\n**EN (Modlar için):**\\n* En ligne (Çevrimiçi / Online)\\n* En bas de page (Sayfanın altında)",
      examples: [
        { fr: "Je suis sur internet.", tr: "İnternetteyim." },
        {
          fr: "Tu travailles sur l'ordinateur?",
          tr: "Bilgisayarda mı çalışıyorsun?",
        },
        { fr: "Je suis en ligne.", tr: "Çevrimiçiyim." },
      ],
    },
    {
      id: "fr-a2-tech-imperatif",
      title: "📐 BÖLÜM 4b: Emir Kipi (L'Impératif)",
      explanation:
        "Teknoloji genelde talimatlarla çalışır. 'Tıkla, Aç, Kapat'.\\n\\nEmir kipinde 'Tu' (Sen) veya 'Vous' (Siz) öznesi düşer:\\n\\n**(Tu) Cliques → Clique !** (Tıkla!)\\n**(Vous) Cliquez → Cliquez !** (Tıklayın!)\\n**(Vous) Allumez → Allumez votre caméra !** (Kameranızı açın!)\\n\\n**ER fiillerinde -s düşer (Tu için):**\\n* Télécharge le fichier! (Dosyayı indir!)\\n* Sauvegarde ton travail! (İşini kaydet!)",
      examples: [
        { fr: "Cliquez sur le lien.", tr: "Linke tıklayın." },
        { fr: "Allumez votre caméra.", tr: "Kameranızı açın." },
        { fr: "Télécharge l'application.", tr: "Uygulamayı indir." },
      ],
    },
    {
      id: "fr-a2-tech-dialogue",
      title: "🗣️ BÖLÜM 5: Örnek Diyalog (Sorun Çözme)",
      explanation:
        "**Senaryo:** Ofiste Wi-Fi çalışmıyor.\\n\\n**Ali:** Pardon, internet marche ? \\n*(Pardon, internet çalışıyor mu?)*\\n\\n**Paul:** Non, je n'ai pas de connexion.\\n*(Hayır, bağlantım yok.)*\\n\\n**Ali:** C'est bizarre. Tu as le mot de passe ?\\n*(Garip. Şifren var mı?)*\\n\\n**Paul:** Oui, mais le signal est très faible.\\n*(Evet ama sinyal çok zayıf.)*\\n\\n**Ali:** Essaie d'éteindre et rallumer ton ordinateur.\\n*(Bilgisayarını kapatıp tekrar açmayı dene.)*\\n\\n**Paul:** D'accord, je vais essayer. Ah, ça marche maintenant !\\n*(Tamam deneyeceğim. Ah, şimdi çalışıyor!)*",
      examples: [],
    },
    {
      id: "fr-a2-tech-phrases",
      title: "🆘 HAYAT KURTARAN KALIPLAR (Bonus)",
      explanation: "Teknolojik bir sorun yaşadığında bunları kullan:",
      examples: [
        { fr: "Ça ne marche pas.", tr: "Bu çalışmıyor." },
        { fr: "Ma batterie est vide.", tr: "Şarjım bitti / Bataryam boş." },
        { fr: "Je n'ai pas de réseau.", tr: "Şebeke yok / Çekmiyor." },
        { fr: "L'écran est noir.", tr: "Ekran siyah / gitti." },
        {
          fr: "Quelle est l'adresse de votre site ?",
          tr: "Sitenizin adresi nedir?",
        },
      ],
    },
  ],
};

const unit360Grammar: UnitGrammar = {
  unitId: 360,
  title: "A2 Genel Tekrar",
  rules: [
    {
      id: "fr-a2-review",
      title: "📚 A2 Özet",
      explanation:
        "A2'de öğrendiğiniz ana konular:\n* Passé Composé\n* Futur Proche\n* Imparfait\n* Karşılaştırmalar\n* COD/COI Zamirleri\n* Y ve EN\n* Koşul Cümleleri",
      examples: [
        {
          fr: "Félicitations! Vous avez terminé le niveau A2!",
          tr: "Tebrikler! A2 seviyesini bitirdiniz!",
        },
      ],
    },
  ],
};

// Export
export const frenchA2Grammar: UnitGrammar[] = [
  unit331Grammar,
  unit332Grammar,
  unit333Grammar,
  unit334Grammar,
  unit335Grammar,
  unit336Grammar,
  unit337Grammar,
  unit338Grammar,
  unit339Grammar,
  unit340Grammar,
  unit341Grammar,
  unit342Grammar,
  unit343Grammar,
  unit344Grammar,
  unit345Grammar,
  unit346Grammar,
  unit347Grammar,
  unit348Grammar,
  unit349Grammar,
  unit350Grammar,
  unit351Grammar,
  unit352Grammar,
  unit353Grammar,
  unit354Grammar,
  unit355Grammar,
  unit356Grammar,
  unit357Grammar,
  unit358Grammar,
  unit359Grammar,
  unit360Grammar,
];

export function getFrenchA2GrammarForUnit(
  unitId: number,
): UnitGrammar | undefined {
  return frenchA2Grammar.find((g) => g.unitId === unitId);
}
