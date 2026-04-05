import { UnitLecture } from './lectures';

const lectures: { [key: number]: UnitLecture } = {
    531: {
        unitId: 531, title: "Geçmiş Zaman (Perfekt)", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Perfekt Nedir? ⏳", content: "Almancada günlük konuşmada en çok kullanılan geçmiş zaman formudur. 'Yaptım, gittim' gibi bitmiş eylemleri anlatır." },
            { id: 2, type: "grammar", title: "Yardımcı Fiil: Haben mı, Sein mı?", rules: [
                { rule: "haben", explanation: "Çoğu fiil ile kullanılır.", examples: ["Ich habe gegessen.", "Du hast gelernt."] },
                { rule: "sein", explanation: "Hareket (A'dan B'ye) veya durum değişikliği bildiren fiillerle kullanılır.", examples: ["Ich bin gegangen.", "Er ist eingeschlafen."] }
            ]},
            { id: 3, type: "table", title: "Önemli Partizip II Formları", headers: ["Mastar", "Partizip II", "Anlamı"], rows: [
                ["machen", "gemacht", "yapmış"], ["gehen", "gegangen", "gitmiş"], ["sehen", "gesehen", "görmüş"], ["kommen", "gekommen", "gelmiş"]
            ]},
            { id: 4, type: "culture", title: "Söz Dizimi", content: "Yardımcı fiil (haben/sein) 2. sıradadır, esas fiil ise 'ge-' takısıyla cümlenin EN SONUNA gider." }
        ]
    },
    532: {
        unitId: 532, title: "Präteritum (war, hatte)", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Geçmişin Kısa Hali 📜", content: "Resmi dilde ve hikayelerde Präteritum kullanılır. Ancak 'sein' ve 'haben' fiilleri için konuşma dilinde bile bu form tercih edilir." },
            { id: 2, type: "table", title: "War ve Hatte Çekimi", headers: ["Şahıs", "war (idim)", "hatte (vardı)"], rows: [
                ["ich", "war", "hatte"], ["du", "warst", "hattest"], ["er/sie/es", "war", "hatte"], ["wir", "waren", "hatten"], ["ihr", "wart", "hachtet"], ["sie/Sie", "waren", "hatten"]
            ]},
            { id: 3, type: "culture", title: "Kullanım Farkı", content: "Örneğin 'Dün hastaydım' demek için 'Ich war gestern krank' demek, 'Ich bin krank gewesen' demekten çok daha doğaldır." }
        ]
    },
    533: {
        unitId: 533, title: "Restoranda Sipariş", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Nazikçe İstemek ☕", content: "Garsona 'Ich will...' (İstiyorum) yerine daha kibar kalıplar kullanmayı öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Sipariş Kalıpları", words: [
                { target: "Ich hätte gern...", native: "İsterdim / Rica ediyorum", pronunciation: "ih het-te gern" },
                { target: "Ich nehme...", native: "Alıyorum", pronunciation: "ih ne-mı" },
                { target: "Können Sie mir ... bringen?", native: "Bana ... getirebilir misiniz?", pronunciation: "kön-nın zi mir ... brin-gın" }
            ]},
            { id: 3, type: "culture", title: "Hesap İsteme", content: "Hesap isterken: 'Zahlen, bitte!' (Hesap lütfen) veya 'Die Rechnung, bitte!' diyebilirsiniz. Genellikle 'Zusammen oder getrennt?' (Birlikte mi ayrı mı?) sorusuna hazırlıklı olun." }
        ]
    },
    534: {
        unitId: 534, title: "Alışveriş (Akkusativ Zamirler)", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Onu Alıyorum! 📦", content: "Nesneleri 'beni, seni, onu' şeklinde ifade etmeyi ve Akkusativ (İ-hali) zamirlerini öğreneceğiz." },
            { id: 2, type: "table", title: "Akkusativ Zamir Tablosu", headers: ["Nominativ", "Akkusativ", "Anlamı"], rows: [
                ["ich", "mich", "beni"], ["du", "dich", "seni"], ["er", "ihn", "onu (eril)"], ["sie", "sie", "onu (dişil)"], ["es", "es", "onu (nötr)"], ["wir", "uns", "bizi"], ["ihr", "euch", "sizi"], ["sie/Sie", "sie/Sie", "onları/sizi"]
            ]},
            { id: 3, type: "culture", title: "Pratik Kullanım", content: "Birinden bahsederken: 'Ich liebe dich' (Seni seviyorum) veya 'Ich sehe ihn' (Onu görüyorum) diyebilirsiniz." }
        ]
    },
    535: {
        unitId: 535, title: "Gelecek Zaman (Futur I)", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Plan Yapma Zamanı! 📅", content: "Gelecekte yapacaklarımızı Almancada nasıl ifade ederiz? 'Werden' yardımcı fiilini öğreniyoruz." },
            { id: 2, type: "grammar", title: "Futur I Yapısı", rules: [
                { rule: "werden + Mastar", explanation: "Werden fiili çekimlenir, asıl fiil mastar (hiç değişmeden) sona gider.", examples: ["Ich werde morgen reisen.", "Wir werden dich anrufen."] }
            ]},
            { id: 3, type: "table", title: "Werden Çekimi", headers: ["Şahıs", "Çekim"], rows: [
                ["ich", "werde"], ["du", "wirst"], ["er/sie/es", "wird"], ["wir", "werden"], ["ihr", "werdet"], ["sie/Sie", "werden"]
            ]},
            { id: 4, type: "culture", title: "Önemli İpucu", content: "Almancada gelecek zaman yerine sık sık şimdiki zaman (Präsens) kullanılır. Örn: 'Ich komme morgen.' (Yarın geliyorum)." }
        ]
    },
    536: {
        unitId: 536, title: "Otel Rezervasyonu", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Otelde Konaklama 🏨", content: "Rezervasyon yaparken, oda özellikleri sorarken ve giriş-çıkış (Check-in/out) yaparken gereken kelimeler." },
            { id: 2, type: "vocabulary", title: "Oda Çeşitleri", words: [
                { target: "das Einzelzimmer", native: "tek kişilik oda", pronunciation: "ayn-tsıl-tsim-mer" },
                { target: "das Doppelzimmer", native: "çift kişilik oda", pronunciation: "do-pıl-tsim-mer" },
                { target: "mit Frühstück", native: "kahvaltı dahil", pronunciation: "mit frü-ştük" },
                { target: "die Reservierung", native: "rezervasyon", pronunciation: "re-zer-vi-rung" }
            ]},
            { id: 3, type: "culture", title: "'Gibt es...?' Kalıbı", content: "'Gibt es...' (Var mı?) kalıbı her zaman Akkusativ (-i hali) ister. Örn: 'Gibt es einen Balkon?' (Balkon var mı?)" }
        ]
    },
    537: {
        unitId: 537, title: "Havalimanı ve Emir Kipi", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Talimatlar ✈️", content: "Havalimanında levhaları anlamak, güvenlikten geçmek ve birinden bir şey yapmasını istemek." },
            { id: 2, type: "grammar", title: "Imperativ (Emir Kipi)", rules: [
                { rule: "Sie Formu", explanation: "Fiil + Sie (En kibar hal).", examples: ["Kommen Sie bitte!", "Geben Sie mir den Pass!"] },
                { rule: "du Formu", explanation: "Fiilin kökü kullanılır, 'du' söylenmez.", examples: ["Komm!", "Trink!"] }
            ]},
            { id: 3, type: "vocabulary", title: "Havalimanı", words: [
                { target: "der Flug", native: "uçuş", pronunciation: "fluk" },
                { target: "das Gate", native: "kapı", pronunciation: "geyt" },
                { target: "das Gepäck", native: "bagaj", pronunciation: "ge-pek" },
                { target: "abfliegen", native: "havalanmak", pronunciation: "ap-fli-gın" }
            ]}
        ]
    },
    538: {
        unitId: 538, title: "Doktorda Şikayetler", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Sağlık Sorunları 🤒", content: "Doktora şikayetlerimizi anlatmak ve vücudumuzdaki ağrıları ifade etmek." },
            { id: 2, type: "vocabulary", title: "Şikayet Etmek", words: [
                { target: "die Schmerzen", native: "ağrılar", pronunciation: "şmert-sın" },
                { target: "das Fieber", native: "ateş", pronunciation: "fi-ber" },
                { target: "husten", native: "öksürmek", pronunciation: "hus-tın" },
                { target: "sich erkälten", native: "soğuk almak", pronunciation: "zih er-kel-tın" }
            ]},
            { id: 3, type: "grammar", title: "Ağrım Var!", rules: [
                { rule: "Ich habe ...schmerzen", explanation: "Genel ağrılar için (Baş ağrısı vb.).", examples: ["Ich habe Kopfschmerzen."] },
                { rule: "Mein/e ... tut weh", explanation: "Daha spesifik ağrılar için.", examples: ["Mein Bein tut weh."] }
            ]},
            { id: 4, type: "culture", title: "'Weh tun' ve Dativ", content: "Ağrıdan bahsederken şahsı belirtmek isterseniz Dativ kullanın: 'Mein Kopf tut MIR weh.' (Başım ağrıyor)." }
        ]
    },
    539: {
        unitId: 539, title: "Eczanede Tavsiyeler", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Tavsiye Almak 💊", content: "Eczanede ilaç sormak ve birinin (doktorun) tavsiyesini başkasına aktarmak (Sollen)." },
            { id: 2, type: "grammar", title: "Sollen Kullanımı", rules: [
                { rule: "sollen (malı/meli)", explanation: "Zorunluluktan çok tavsiye veya başkasının talebini bildirir.", examples: ["Du sollst viel Wasser trinken."] }
            ]},
            { id: 3, type: "vocabulary", title: "Eczane", words: [
                { target: "die Apotheke", native: "eczane", pronunciation: "a-po-te-kı" },
                { target: "das Medikament", native: "ilaç", pronunciation: "me-di-ka-ment" },
                { target: "das Rezept", native: "reçete", pronunciation: "re-tsept" }
            ]},
            { id: 4, type: "culture", title: "Sollen vs Müssen", content: "Kendi kendinize 'yapmalıyım' derseniz 'müssen', biri size 'yapmanı söylüyorum' demişse 'sollen' kullanın." }
        ]
    },
    540: {
        unitId: 540, title: "Meslekler ve Dativ", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "İş Dünyası ve Dativ 💼", content: "Meslekler üzerinde dururken, bazı fiillerin neden Dativ (-e hali) istediğini inceleyeceğiz." },
            { id: 2, type: "grammar", title: "Dativ İsteyen Fiiller", rules: [
                { rule: "helfen", explanation: "yardım etmek.", examples: ["Ich helfe dir."] },
                { rule: "danken", explanation: "teşekkür etmek.", examples: ["Ich danke Ihnen."] },
                { rule: "gratulieren", explanation: "kutlamak.", examples: ["Ich gratuliere dir zum Geburtstag."] }
            ]},
            { id: 3, type: "table", title: "Dativ Zamirleri", headers: ["Nominativ", "Dativ", "Anlamı"], rows: [
                ["ich", "mir", "bana"], ["du", "dir", "sana"], ["er", "ihm", "ona (eril)"], ["sie", "ihr", "ona (dişil)"], ["es", "ihm", "ona (nötr)"], ["wir", "uns", "bize"], ["ihr", "euch", "size"]
            ]}
        ]
    },
    541: {
        unitId: 541, title: "İş Görüşmesi", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Kendini Pazarlamak 📄", content: "İş görüşmelerinde becerilerinizden ve deneyimlerinizden bahsetmek." },
            { id: 2, type: "vocabulary", title: "İş Terimleri", words: [
                { target: "der Lebenslauf", native: "özgeçmiş", pronunciation: "le-bıns-lauf" },
                { target: "die Erfahrung", native: "deneyim", pronunciation: "er-fa-rung" },
                { target: "das Gehalt", native: "maaş", pronunciation: "ge-halt" },
                { target: "vollzeit", native: "tam zamanlı", pronunciation: "fol-tsayt" }
            ]}
        ]
    },
    542: {
        unitId: 542, title: "Telefonda Konuşma", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Alo? 📞", content: "Telefonda kendini tanıtmak, birini istemek ve mesaj bırakmak." },
            { id: 2, type: "vocabulary", title: "Telefon Kalıpları", words: [
                { target: "Hallo, hier spricht...", native: "Merhaba, ben... konuşuyorum", pronunciation: "hir şpriht" },
                { target: "Könne ich mit Herrn ... sprechen?", native: "Bay ... ile görüşebilir miyim?", pronunciation: "kön-ne ih mit hern ... şpri-hın" },
                { target: "zurückrufen", native: "geri aramak", pronunciation: "tsu-rük-ru-fın" }
            ]}
        ]
    },
    543: {
        unitId: 543, title: "E-Posta Yazma", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Dijital Yazışma ✉️", content: "Resmi ve gayriresmi e-posta yazma kuralları." },
            { id: 2, type: "table", title: "E-Posta Hitapları", headers: ["Tür", "Hitap", "Kapanış"], rows: [
                ["Resmi", "Sehr geehrte Damen und Herren", "Mit freundlichen Grüßen"], ["Yarı Resmi", "Sehr geehrter Herr...", "Viele Grüße"], ["Samimi", "Liebe/r...", "Alles Liebe / Tschüss"]
            ]}
        ]
    },
    544: {
        unitId: 544, title: "Duygular ve Ruh Hali", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "İç Dünyamız 😊", content: "Ruh halimizi ifade eden sıfatları ve kalıpları öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Duygular", words: [
                { target: "nervös", native: "gergin", pronunciation: "ner-vös" },
                { target: "entspannt", native: "rahatlamış", pronunciation: "ent-şpant" },
                { target: "überrascht", native: "şaşırmış", pronunciation: "ü-ber-raşt" },
                { target: "stolz", native: "gururlu", pronunciation: "ştolts" }
            ]}
        ]
    },
    545: {
        unitId: 545, title: "Karakter Analizi", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "İnsanları Tanımlamak 🧠", content: "Birinin kişiliğini ve karakterini nasıl anlatırız?" },
            { id: 2, type: "vocabulary", title: "Kişilik Sıfatları", words: [
                { target: "höflich", native: "nazik", pronunciation: "höf-lih" },
                { target: "fleißig", native: "çalışkan", pronunciation: "flay-zih" },
                { target: "faul", native: "tembel", pronunciation: "faul" },
                { target: "ehrlich", native: "dürüst", pronunciation: "er-lih" }
            ]}
        ]
    },
    546: {
        unitId: 546, title: "Spor ve Fitness", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Sağlıklı Yaşam 🏃", content: "Spor türleri ve bir hobiye ilgi duyduğumuzu söylemek." },
            { id: 2, type: "vocabulary", title: "Spor Dalları", words: [
                { target: "das Training", native: "antrenman", pronunciation: "tre-nink" },
                { target: "ins Fitnessstudio gehen", native: "spor salonuna gitmek", pronunciation: "fit-nes-ştu-dyo" },
                { target: "wandern", native: "doğa yürüyüşü yapmak", pronunciation: "van-dern" }
            ]},
            { id: 3, type: "culture", title: "'Interessieren für'", content: "İlgi duymak 'sich interessieren für' (für: Akkusativ) ile söylenir: 'Ich interessiere mich für Yoga.'" }
        ]
    },
    547: {
        unitId: 547, title: "Müzik ve Sanat", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Yaratıcılık 🎸", content: "Müzik aletleri ve sanat dalları hakkında konuşmak." },
            { id: 2, type: "vocabulary", title: "Enstrümanlar", words: [
                { target: "das Klavier", native: "piyano", pronunciation: "kla-vir" },
                { target: "die Geige", native: "keman", pronunciation: "gay-ge" },
                { target: "singen", native: "şarkı söylemek", pronunciation: "zin-gın" }
            ]}
        ]
    },
    548: {
        unitId: 548, title: "Sinema ve Dizi", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Film Keyfi 🎬", content: "Sinemaya gitmek ve izlediğiniz filmi anlatmak." },
            { id: 2, type: "vocabulary", title: "Sinema", words: [
                { target: "der Schauspieler", native: "erkek oyuncu", pronunciation: "şau-şpi-ler" },
                { target: "spannend", native: "heyecan verici", pronunciation: "şpa-nınt" },
                { target: "lustig", native: "komik", pronunciation: "lus-tih" }
            ]}
        ]
    },
    549: {
        unitId: 549, title: "Teknoloji", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Gelecek Burada 💻", content: "Elektronik aletler ve teknolojik kavramlar." },
            { id: 2, type: "vocabulary", title: "Teknik Kelimeler", words: [
                { target: "der Bildschirm", native: "ekran", pronunciation: "bilt-şirm" },
                { target: "herunterladen", native: "indirmek", pronunciation: "he-run-ter-la-dın" },
                { target: "die Datei", native: "dosya", pronunciation: "da-tay" }
            ]}
        ]
    },
    550: {
        unitId: 550, title: "Sosyal Medya", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Bağlantıda Kalmak 📱", content: "Sosyal medya kullanımı ve internet terimleri." },
            { id: 2, type: "culture", title: "Passiv (Edilgen)", content: "A2 seviyesinde 'werden' + 'Partizip II' ile edilgen yapıyı (Ediliyor, yapılıyor) tanımaya başlıyoruz." }
        ]
    },
    551: {
        unitId: 551, title: "Ev ve Taşınma", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Yeni Bir Başlangıç 🏠", content: "Ev kiralama, eşyalar ve taşınma süreci." },
            { id: 2, type: "vocabulary", title: "Ev Eşyaları", words: [
                { target: "umziehen", native: "taşınmak", pronunciation: "um-tsi-ın" },
                { target: "die Miete", native: "kira", pronunciation: "mi-te" },
                { target: "möbliert", native: "eşyalı", pronunciation: "möb-lirt" }
            ]}
        ]
    },
    552: {
        unitId: 552, title: "Çevre ve Doğa", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Doğayı Korumak 🌿", content: "Çevre sorunları ve sürdürülebilirlik hakkında temel kelimeler." },
            { id: 2, type: "vocabulary", title: "Doğa", words: [
                { target: "die Umwelt", native: "çevre", pronunciation: "um-velt" },
                { target: "schützen", native: "korumak", pronunciation: "şüt-sın" },
                { target: "müll trennen", native: "çöpleri ayırmak", pronunciation: "mül tre-nın" }
            ]}
        ]
    },
    553: {
        unitId: 553, title: "Haberler ve Gazete", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Neler Oluyor? 📰", content: "Dünyadan haberleri takip etmek ve bağlaçlı cümleler kurmak." },
            { id: 2, type: "grammar", title: "Weil ve Wenn", content: "Bu bağlaçlar yan cümle yapar ve fiili cümlenin en sonuna atar." }
        ]
    },
    554: {
        unitId: 554, title: "Kültür ve Gelenekler", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Almanya'yı Tanıyalım 🥨", content: "Alman kültürü, bayramlar ve gelenekler." },
            { id: 2, type: "vocabulary", title: "Gelenekler", words: [
                { target: "feiern", native: "kutlamak", pronunciation: "fa-yern" },
                { target: "das Fest", native: "şenlik/festival", pronunciation: "fest" },
                { target: "die Sitte", native: "gelenek", pronunciation: "zit-te" }
            ]}
        ]
    },
    555: {
        unitId: 555, title: "Dativ Hali Tekrar", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Dativ Ustalaşması 🔍", content: "Artikellerin ve zamirlerin Dativ (-e hali) formlarını pekiştireceğiz." },
            { id: 2, type: "table", title: "Dativ Artikeller", headers: ["Maskulin", "Feminin", "Neutral", "Plural"], rows: [
                ["dem", "der", "dem", "den (+n)"]
            ]}
        ]
    },
    556: {
        unitId: 556, title: "Modalverben Review", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Tüm Modal Fiiller 🛑", content: "Dürfen, Sollen, Können, Müssen, Wollen, Möchten fiillerinin toplu tekrarı." }
        ]
    },
    557: {
        unitId: 557, title: "Yan Cümleler (Dass, Weil)", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Daha Karmaşık Cümleler 🔗", content: "'Dass' (ki), 'Weil' (çünkü) ve 'Wenn' (eğer) gibi bağlaçlarla yan cümle kurma." },
            { id: 2, type: "culture", title: "Altın Kural", content: "Bu bağlaçların olduğu cümlede ÇEKİMLİ FİİL her zaman en sondadır!" }
        ]
    },
    558: {
        unitId: 558, title: "Karşılaştırma (Komparativ)", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Daha ve En ⚖️", content: "Nesneleri birbirleriyle karşılaştırmayı ve 'en' iyiyi söylemeyi öğreneceğiz." },
            { id: 2, type: "grammar", title: "Komparativ & Superlativ", rules: [
                { rule: "schnell -> schneller", explanation: "Daha hızlı.", examples: ["Der Zug ist schneller als der Bus."] },
                { rule: "am schnellsten", explanation: "En hızlı.", examples: ["Das Flugzeug ist am schnellsten."] }
            ]}
        ]
    },
    559: {
        unitId: 559, title: "Dönüşlü Fiiller (Reflexiv)", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Sich... 🔄", content: "Eylemin özneye geri döndüğü fiilleri (yıkandım, hazırlandım vb.) öğreneceğiz." },
            { id: 2, type: "grammar", title: "Zamirler", content: "Ich freue mich, du freust dich, er freut sich..." }
        ]
    },
    560: {
        unitId: 560, title: "A2 Final Tekrar", language: "Almanca", level: "A2",
        slides: [
            { id: 1, type: "intro", title: "Tebrikler! 🎉", content: "Almanca A2 seviyesinin sonuna geldiniz. Harika bir gelişim gösterdiniz." },
            { id: 2, type: "culture", title: "Sertifika", content: "A2 seviyesini tamamladınız ve artık günlük hayatta kendinizi rahatça ifade edebiliyorsunuz. Bir sonraki durak B1!" }
        ]
    }
};

export function getGermanA2LectureForUnit(unitId: number): UnitLecture {
    return lectures[unitId] || lectures[531];
}
