import { Question, QuestionType } from "./questions";

export interface GermanTopic {
    words: string[][];
    sentences: string[];
}

const topics: { [key: number]: GermanTopic } = {
    // B1 Üniteleri (561-590)
    561: { 
        words: [
            ["werden", "olmak (gelecek zaman)"], ["Zukunft", "Gelecek"], ["Plan", "Plan"], ["Hoffnung", "Umut"], 
            ["Sicherheit", "Güvenlik"], ["Voraussage", "Tahmin"], ["bestimmt", "kesinlikle"], ["wahrscheinlich", "muhtemelen"], 
            ["vielleicht", "belki"], ["bald", "yakında"], ["Absicht", "Niyet"], ["Ziel", "Hedef"],
            ["vermuten", "tahmin etmek"], ["geschehen", "meydana gelmek"], ["erreichen", "ulaşmak"], ["erwarten", "beklemek"],
            ["prognostizieren", "öngörmek"], ["Entwicklung", "Gelişim"], ["Chance", "Şans"], ["Optimismus", "İyimserlik"]
        ],
        sentences: [
            "Ich ___ morgen kommen.", "Was sind deine ___e?", "Es wird ___ regnen.", 
            "Die ___ ist wichtig.", "Hast du ___?", "Ich ___ es bald tun.",
            "Wir ___ unser Ziel ___.", "Was ___ du?", "Die ___ ist gut.", "Ein ___er Ausblick."
        ]
    },
    562: { 
        words: [
            ["würde", "yapardım/ederdim"], ["hätte", "sahip olurdum"], ["wäre", "olurdum"], ["könnte", "yapabilirdim"], 
            ["sollte", "yapmalıydım"], ["müsste", "yapmak zorunda olurdum"], ["dürfte", "izin alabilirdim"], ["Traum", "Hayal"],
            ["Wunsch", "İstek"], ["Bedingung", "Koşul"], ["realität", "Gerçeklik"], ["vorstellen", "Hayal etmek"],
            ["verändern", "değiştirmek"], ["reich", "zengin"], ["glücklich", "mutlu"], ["reisen", "seyahat etmek"],
            ["helfen", "yardım etmek"], ["wissen", "bilmek"], ["tun", "yapmak"], ["erfüllen", "gerçekleştirmek"]
        ],
        sentences: [
            "Ich ___ gerne einen Kaffee.", "Wenn ich Zeit ___.", "Das ___ toll.", 
            "Wenn ich du ___.", "Ich ___ dir helfen.", "Was ___st du tun?",
            "___ du mir say?", "Ich ___ gerne reich ___.", "Alles ___ anders.", "Ein ___ geht in Erfüllung."
        ]
    },
    563: { 
        words: [
            ["wird gemacht", "yapılır"], ["wurde gebaut", "inşa edildi"], ["Passiv", "Edilgen"], ["Subjekt", "Özne"], 
            ["Objekt", "Nesne"], ["Täter", "Fail/Yapan"], ["Vorgang", "Süreç/Eylem"], ["Zustand", "Durum"],
            ["geöffnet", "açık"], ["geschlossen", "kapalı"], ["verboten", "yasak"], ["erlaubt", "izinli"],
            ["gereinigt", "temizlenmiş"], ["repariert", "tamir edilmiş"], ["serviert", "servis edilmiş"], ["gekauft", "satın alınmış"],
            ["benutzt", "kullanılmış"], ["erwartet", "beklenen"], ["gefeiert", "kutlanan"], ["untersucht", "muayene edilen"]
        ],
        sentences: [
            "Die Tür ___ ge___.", "Das Haus ___ 1900 ___.", "Hier ___ nicht geraucht.", 
            "Der Brief ___ gesendet.", "Die Hausaufgabe ___ korrigiert.", "Das Essen ___ gerade ___.",
            "Das Auto ___ in der Werkstatt ___.", "Der Patient ___ vom Arzt ___.", 
            "Die Fenster ___ jeden Tag ___.", "Dieses Buch ___ viel ___."
        ]
    },
    564: { 
        words: [
            ["sagte", "söyledi"], ["fragte", "sordu"], ["meinte", "belirtti"], ["erklärte", "açıkladı"], 
            ["berichtet", "bildirdi"], ["indirekt", "dolaylı"], ["Zitat", "Alıntı"], ["ob", "olup olmadığını"],
            ["behaupten", "iddia etmek"], ["antworten", "cevap vermek"], ["wissen wollen", "bilmek istemek"], ["erzählen", "anlatmak"],
            ["Rede", "Konuşma"], ["Inhalt", "İçerik"], ["Quelle", "Kaynak"], ["Aussage", "İfade"],
            ["bestätigen", "onaylamak"], ["dementieren", "yalanlamak"], ["hervorheben", "vurgulamak"], ["erwähnen", "bahsetmek"]
        ],
        sentences: [
            "Er ___, dass er kommt.", "Sie ___, ob ich Zeit habe.", "Der Lehrer ___, die Prüfung sei schwer.", 
            "Er ___ mir alles.", "Wie ___ er das?", "Die Zeitung ___, dass...",
            "Sie ___ zu wissen, wo...", "Er ___ den Erhalt.", "Er ___ (bahsetti), dass...", "Die ___ ist klar."
        ]
    },
    565: { 
        words: [
            ["des", "-ın (eril/nötr)"], ["der", "-ın (dişil/çoğul)"], ["Besitz", "Mülkiyet"], ["Vater", "Baba"], 
            ["Mutter", "Anne"], ["wegen", "yüzünden"], ["trotz", "rağmen"], ["während", "sırasında"],
            ["innerhalb", "içinde"], ["außerhalb", "dışında"], ["statt", "yerine"], ["hinsichtlich", "bakımından"],
            ["unweit", "yakınında"], ["mittels", "aracılığıyla"], ["kraft", "gücüyle"], ["zwecks", "amacıyla"],
            ["Ende", "Son"], ["Anfang", "Başlangıç"], ["Mitte", "Orta"], ["Besitzer", "Sahip"]
        ],
        sentences: [
            "Das ist das Auto ___ Vaters.", "___ des Regens bleiben wir.", "___ des Fehlers lerne ich.", 
            "___ der Reise schlafe ich.", "Die Farbe ___ Hauses.", "___ (içinde) der Woche.",
            "___ (yerine) des Apfels esse ich...", "Am ___ des Jahres.", "Der ___ des Hundes.", "___ der Prüfung (sırasında)."
        ]
    },
    566: { 
        words: [
            ["aufstehen", "kalkmak"], ["anfangen", "başlamak"], ["einladen", "davet etmek"], ["ausmachen", "kapatmak"], 
            ["zumachen", "kapatmak"], ["aufmachen", "açmak"], ["mitbringen", "getirmek"], ["weggehen", "gitmek/ayrılmak"],
            ["einkaufen", "alışveriş yapmak"], ["fernsehen", "televizyon izlemek"], ["vorbereiten", "hazırlanmak"], ["anrufen", "aramak"],
            ["aussteigen", "inmek"], ["einsteigen", "binmek"], ["nachdenken", "düşünmek"], ["vorstellen", "tanıtmak"],
            ["zuhören", "dinlemek"], ["aufhören", "bırakmak/durmak"], ["anpassen", "uyum sağlamak"], ["abholen", "almaya gitmek"]
        ],
        sentences: [
            "Ich ___ um 6 Uhr ___.", "Der Film ___t jetzt ___.", "Ich ___ dich zum Essen ___.", 
            "___ bitte das Licht ___!", "Kannst du die Tür ___?", "Ich ___ dich morgen ___ (ararım).",
            "Wann ___ wir ___ (başlarız)?", "Ich ___ meine Hausaufgabe ___.", "Hör bitte ___!", "Zieh dich ___."
        ]
    },
    567: { 
        words: [
            ["verstehen", "anlamak"], ["besuchen", "ziyaret etmek"], ["erzählen", "anlatmak"], ["bestellen", "sipariş vermek"], 
            ["gehören", "ait olmak"], ["empfehlen", "tavsiye etmek"], ["bekommen", "almak"], ["vergessen", "unutmak"],
            ["versuchen", "denemek"], ["erklären", "açıklamak"], ["begegnen", "karşılaşmak"], ["erleben", "deneyimlemek"],
            ["verbessern", "iyileştirmek"], ["entscheiden", "karar vermek"], ["versprechen", "söz vermek"], ["gefallen", "beğenmek"],
            ["misslingen", "başarısız olmak"], ["zerstören", "yıkmak"], ["entdecken", "keşfetmek"], ["erreichen", "ulaşmak"]
        ],
        sentences: [
            "Ich ___ dich nicht.", "Hast du mich ge___?", "Er ___ mir bir Geschichte.", 
            "Ich ___ das Essen.", "Das ___ mir.", "Ich ___ es noch einmal.",
            "Kannst du das ___?", "Was hast du ge___?", "Ich ___ (karar verdim) mich.", "Er ___ (söz verdi) es mir."
        ]
    },
    568: { 
        words: [
            ["Medien", "Medya"], ["Presse", "Basın"], ["Information", "Bilgi"], ["Berichterstattung", "Haber yapma"], 
            ["Quelle", "Kaynak"], ["Einfluss", "Etki"], ["Meinung", "Fikir"], ["Öffentlichkeit", "Kamuoyu"],
            ["Internet", "İnternet"], ["Nachricht", "Haber"], ["Journalismus", "Gazetecilik"], ["Werbung", "Reklam"],
            ["Sendung", "Yayın"], ["Kanal", "Kanal"], ["soziale Netzwerke", "sosyal ağlar"], ["Zeitung", "Gazete"],
            ["Radio", "Radyo"], ["Fernsehen", "Televizyon"], ["Magazin", "Dergi"], ["Kritik", "Eleştiri"]
        ],
        sentences: [
            "Die ___ sind wichtig.", "Eine vertrauenswürdige ___.", "Das hat bor großen ___.", 
            "Sag deine ___.", "Die ___ (kamuoyu) weiß alles.", "Hörst du ___?",
            "Ich lese die ___.", "Eine gute ___ (reklam).", "Der ___ (kanal) ist neu.", "Das ist ___ (eleştiri)."
        ]
    },
    569: { 
        words: [
            ["Verschmutzung", "Kirlilik"], ["Erwärmung", "Isınma"], ["Klimawandel", "İklim değişikliği"], ["CO2-Ausstoß", "Karbon salınımı"], 
            ["Umweltschutz", "Çevreyi koruma"], ["Gefahr", "Tehlike"], ["global", "küresel"], ["Ursache", "Neden"],
            ["Abgas", "Egzoz gazı"], ["Müll", "Çöp"], ["Plastik", "Plastik"], ["Ökosystem", "Ekosistem"],
            ["Artensterben", "Türlerin yok olması"], ["Waldsterben", "Ormanların yok olması"], ["Wassermangel", "Su kıtlığı"], ["Energieverbrauch", "Enerji tüketimi"],
            ["schutzbedürftig", "korunmaya muhtaç"], ["bedroht", "tehdit altında"], ["giftig", "zehirli"], ["schädlich", "zararlı"]
        ],
        sentences: [
            "Die globale ___.", "Der ___ ist real.", "Schütze die ___.", 
            "Eine große ___.", "Was ist die ___?", "Vermeide ___.",
            "Das ist ___ (zararlı).", "Das Wasser ist ___.", "Der ___ steiigt.", "Rette das ___."
        ]
    },
    570: { 
        words: [
            ["Nachhaltigkeit", "Sürdürülebilirlik"], ["Ressourcen", "Kaynaklar"], ["Recycling", "Geri dönüşüm"], ["Solarenergie", "Güneş enerjisi"], 
            ["effizient", "verimli"], ["bewusst", "bilinçli"], ["ökologisch", "ekolojik"], ["Zukunft", "Gelecek"],
            ["Windkraft", "Rüzgar gücü"], ["Biotreibstoff", "Biyoyakıt"], ["Verantwortung", "Sorumluluk"], ["Umweltbewusstsein", "Çevre bilinci"],
            ["schonen", "korumak/esirgemek"], ["erneuerbar", "yenilenebilir"], ["unerschöpflich", "tükenmez"], ["sparsam", "tutumlu"],
            ["zertifiziert", "sertifikalı"], ["lokal", "yerel"], ["regional", "bölgesel"], ["fair", "adil"]
        ],
        sentences: [
            "Wir brauchen ___.", "Schütze die ___.", "Das ist ___.", 
            "Lebe ___.", "Handeln Sie ___.", "Nutze ___ (yenilenebilir) Energie.",
            "___ (koru) die Natur.", "Kauf ___ (yerel) Produkte.", "Sei ___ (tutumlu).", "Ein ___er (adil) Handel."
        ]
    },
    571: { 
        words: [
            ["Kultur", "Kültür"], ["Gesellschaft", "Toplum"], ["Integration", "Entegrasyon"], ["Tradition", "Gelenek"], 
            ["Heimat", "Vatan/Memleket"], ["Vielfalt", "Çeşitlilik"], ["Respekt", "Saygı"], ["Werte", "Değerler"],
            ["Sprache", "Dil"], ["Identität", "Kimlik"], ["Zugehörigkeit", "Aitlik"], ["Vorurteil", "Önyargı"],
            ["Toleranz", "Hoşgörü"], ["Offenheit", "Açıklık"], ["Konflikt", "Çatışma"], ["Dialog", "Diyalog"],
            ["Austausch", "Değişim/Takas"], ["Bereicherung", "Zenginleşme"], ["fremd", "yabancı"], ["einheimisch", "yerli"]
        ],
        sentences: [
            "Eine multikulturelle ___.", "Schätze die ___.", "Das ist meine ___.", 
            "Haben Sie ___.", "Unsere ___ (değerler).", "Lerne die ___.",
            "Ohne ___ (önyargı).", "Zeig ___ (hoşgörü).", "Ein guter ___.", "Die ___ (çeşitlilik) ist groß."
        ]
    },
    572: { 
        words: [
            ["Wirtschaft", "Ekonomi"], ["Markt", "Piyasa"], ["Geld", "Para"], ["Investition", "Yatırım"], 
            ["Gewinn", "Kar"], ["Verlust", "Zarar"], ["Handel", "Ticaret"], ["Unternehmen", "Şirket"],
            ["Aktie", "Hisse senedi"], ["Bank", "Banka"], ["Kredit", "Kredi"], ["Zinsen", "Faiz"],
            ["Inflation", "Enflasyon"], ["Wachstum", "Büyüme"], ["Krise", "Kriz"], ["Konjunktur", "Konjonktür"],
            ["Arbeitslosigkeit", "İşsizlik"], ["Export", "İhracat"], ["Import", "İthalat"], ["Umsatz", "Ciro"]
        ],
        sentences: [
            "Die ___ wächst.", "Ein freier ___.", "Haben Sie ___?", 
            "Machen Sie bor ___.", "Das ___ ist büyük.", "Die ___ (enflasyon) ist hoch.",
            "Ein guter ___ (yatırım).", "Viel ___ (kar).", "Kauf bir ___.", "Das ___ (büyüme) ist langsam."
        ]
    },
    573: { 
        words: [
            ["Meinung", "Fikir"], ["Diskussion", "Tartışma"], ["Argument", "Argüman"], ["überzeugen", "ikna etmek"], 
            ["zustimmen", "katılmak"], ["widersprechen", "itiraz etmek"], ["Standpunkt", "Bakış açısı"], ["Kompromiss", "Uzlaşma"],
            ["behaupten", "iddia etmek"], ["begründen", "gerekçelendirmek"], ["analysieren", "analiz etmek"], ["bewerten", "değerlendirmek"],
            ["Kritik", "Eleştiri"], ["Vorschlag", "Öneri"], ["Zweifel", "Şüphe"], ["Sorgfalt", "Özen"],
            ["logisch", "mantıklı"], ["unsinnig", "saçma"], ["fair", "adil"], ["objektiv", "nesnel"]
        ],
        sentences: [
            "Ich bin senin ___.", "Ein starkes ___.", "Ich ___ dir zu.", 
            "Lass uns ___.", "Finden wir bir ___.", "Was ___st du?",
            "Kein ___ (şüphe).", "Das ist ___ (mantıklı).", "Ein guter ___ (öneri).", "Sei ___ (nesnel)."
        ]
    },
    574: { 
        words: [
            ["Präsentation", "Sunum"], ["Vortrag", "Konuşma/Ders"], ["Struktur", "Yapı"], ["Einleitung", "Giriş"], 
            ["Hauptteil", "Ana bölüm"], ["Schluss", "Sonuç"], ["Publikum", "Dinleyici kitlesi"], ["Medium", "Medya/Araç"],
            ["Visualisierung", "Görselleştirme"], ["Folie", "Slayt"], ["Beamer", "Projeksiyon"], ["Handout", "Ders notu"],
            ["Gliederung", "Plan/Anahat"], ["Thema", "Konu"], ["Zielgruppe", "Hedef kitle"], ["Rhetorik", "Hitabet"],
            ["interaktiv", "etkileşimli"], ["anschaulich", "açık/anlaşılır"], ["überzeugend", "ikna edici"], ["souverän", "hakim/kendine güvenen"]
        ],
        sentences: [
            "Halte bor ___.", "Eine klare ___.", "In der ___.", 
            "Vielen Dank için ___.", "Das ist das beste ___.", "Zeig die ___ (slayt).",
            "Was ist das ___?", "Die ___ (yapi) ist gut.", "Sei ___ (ikna edici).", "Ein schöner ___ (ders)."
        ]
    },
    575: { 
        words: [
            ["Literatur", "Edebiyat"], ["Autor", "Yazar"], ["Roman", "Roman"], ["Gedicht", "Şiir"], 
            ["Erzählung", "Anlatı"], ["Klassiker", "Klasik"], ["Interpretation", "Yorum"], ["Stil", "Tarz"],
            ["Drama", "Dram"], ["Lyrik", "Lirik şiir"], ["Metapher", "Metafor"], ["Symbol", "Sembol"],
            ["Handlung", "Olay örgüsü"], ["Figur", "Karakter"], ["Protagonist", "Baş kahraman"], ["Schriftsteller", "Yazar/Edebiyatçı"],
            ["fiktiv", "kurgusal"], ["spannend", "heyecan verici"], ["anspruchsvoll", "iddialı/zorlayıcı"], ["berühmt", "ünlü"]
        ],
        sentences: [
            "Ein berühmter ___.", "Lies bir ___.", "Das ___ (şiir) ist schön.", 
            "Was ist deine ___?", "Ein eleganter ___.", "Der ___ (kahraman) ist mutig.",
            "Eine ___ (heyecan verici) Handlung.", "Das ist ___ (kurgusal).", "Wer ist der ___?", "Ein guter ___ (roman)."
        ]
    },
    576: { 
        words: [
            ["Wissenschaft", "Bilim"], ["Forschung", "Araştırma"], ["Analyse", "Analiz"], ["Methodik", "Metodoloji"], 
            ["Theorie", "Teori"], ["Beweis", "Kanıt"], ["akademisch", "akademik"], ["Artikel", "Makale"],
            ["Labor", "Laboratuvar"], ["Experiment", "Deney"], ["Daten", "Veriler"], ["Ergebnis", "Sonuç"],
            ["Hypothese", "Hipotez"], ["Studie", "Çalışma"], ["Veröffentlichung", "Yayın"], ["Wissenschaftler", "Bilim insanı"],
            ["empirisch", "deneysel"], ["komplex", "karmaşık"], ["objektiv", "nesnel"], ["präzise", "kesin/hassas"]
        ],
        sentences: [
            "Eine neue ___.", "Schreib einen ___.", "Das ist eine gute ___.", 
            "Haben Sie bir ___?", "Ein ___er ___ (makale).", "Das ___ (deney) war erfolgreich.",
            "Die ___ (veriler) sind klar.", "Was ist das ___ (sonuç)?", "Ein ___ (karmaşık) Problem.", "Sei ___ (kesin)."
        ]
    },
    577: { 
        words: [
            ["Technologie", "Teknoloji"], ["Innovation", "İnovasyon"], ["Fortschritt", "İlerleme"], ["Digitalisierung", "Dijitalleşme"], 
            ["Software", "Yazılım"], ["Hardware", "Donanım"], ["Netzwerk", "Ağ"], ["Daten", "Veriler"],
            ["Künstliche Intelligenz", "Yapay Zeka"], ["Algorithmus", "Algoritma"], ["Cloud", "Bulut"], ["Sicherheit", "Güvenlik"],
            ["Entwicklung", "Geliştirme"], ["Benutzer", "Kullanıcı"], ["Schnittstelle", "Arayüz"], ["Update", "Güncelleme"],
            ["virtuell", "sanal"], ["automatisch", "otomatik"], ["kabellos", "kablosuz"], ["effektiv", "etkili"]
        ],
        sentences: [
            "Moderner ___.", "Die ___ geht weiter.", "Schütze deine ___.", 
            "Ein sicheres ___.", "Neue ___ (veriler).", "Was ist ___ (yapay zeka)?",
            "Ein guter ___ (algoritma).", "Mach bir ___.", "Der ___ (kullanıcı) ist zufrieden.", "Das ist ___ (sanal)."
        ]
    },
    578: { 
        words: [
            ["Gesundheit", "Sağlık"], ["Ernährung", "Beslenme"], ["Vitamin", "Vitamin"], ["Protein", "Protein"], 
            ["Kalorien", "Kalori"], ["Sport", "Spor"], ["Lebensstil", "Yaşam tarzı"], ["Prävention", "Önleme"],
            ["Medizin", "Tıp"], ["Krankheit", "Hastalık"], ["Therapie", "Terapi"], ["Symptom", "Belirti"],
            ["Immunsystem", "Bağışıklık sistemi"], ["Entspannung", "Gevşeme"], ["Schlaf", "Uyku"], ["Bewegung", "Hareket"],
            ["ausgewogen", "dengeli"], ["fettarm", "az yağlı"], ["vegetarisch", "vejetaryen"], ["vital", "zinde"]
        ],
        sentences: [
            "Achte auf deine ___.", "Eine gesunde ___.", "Zähle die ___.", 
            "Ein aktiver ___.", "Das ist die beste ___.", "Trink ___ (vitamin).",
            "Iss ___ (dengeli).", "Viel ___ (hareket) ist gut.", "Hast du ___ (belirti)?", "Ein gute ___ (uyku)."
        ]
    },
    579: { 
        words: [
            ["Psychologie", "Psikoloji"], ["Verhalten", "Davranış"], ["Gedanken", "Düşünceler"], ["Gefühle", "Duygular"], 
            ["Stress", "Stres"], ["Therapie", "Terapi"], ["Persönlichkeit", "Kişilik"], ["Bewusstsein", "Bilinç"],
            ["Unterbewusstsein", "Bilinçaltı"], ["Motivation", "Motivasyon"], ["Angst", "Korku"], ["Freude", "Sevinç"],
            ["Trauma", "Travma"], ["Empathie", "Empati"], ["Intelligenz", "Zeka"], ["Gedächtnis", "Hafıza"],
            ["mental", "zihinsel"], ["emotional", "duygusal"], ["sozial", "sosyal"], ["kognitiv", "bilişsel"]
        ],
        sentences: [
            "Das menschliche ___.", "Kontrolliere senin ___.", "Hast du ___ (stres)?", 
            "Eine hilfreiche ___.", "Ein starkes ___ (bilinç).", "Was denkst ___?",
            "Zeig ___ (empati).", "Das ist ___ (duygusal).", "Ein gute ___ (motivasyon).", "Mein ___ (hafıza) ist gut."
        ]
    },
    580: { 
        words: [
            ["Geschäftsdeutsch", "İş Almancası"], ["Verhandlung", "Müzakere"], ["Auftrag", "Sipariş/Görev"], ["Angebot", "Teklif"], 
            ["Korrespondenz", "Yazışma"], ["Meeting", "Toplantı"], ["Protokoll", "Tutanak"], ["Zusammenarbeit", "İşbirliği"],
            ["Kunde", "Müşteri"], ["Lieferant", "Tedarikçi"], ["Vertrag", "Sözleşme"], ["Budget", "Bütçe"],
            ["Termin", "Randevu"], ["Abteilung", "Departman"], ["Projektleitung", "Proje yönetimi"], ["Präsentation", "Sunum"],
            ["professionell", "profesyonel"], ["zuverlässig", "güvenilir"], ["fristgerecht", "zamanında"], ["effektiv", "etkili"]
        ],
        sentences: [
            "Professionelles ___.", "Führe die ___.", "Schreib bir ___ (teklif).", 
            "Wann ist das ___?", "Vielen Dank für die ___.", "Der ___ (müşteri) ist da.",
            "Unterschreib den ___.", "Halte bir ___ (sunum).", "Sei ___ (profesyonel).", "Arbeite ___ (etkili)."
        ]
    },
    581: { 
        words: [
            ["hatte gemacht", "yapmıştı"], ["war gegangen", "gitmişti"], ["Vergangenheit", "Geçmiş"], ["Aktion", "Eylem"], 
            ["Reihenfolge", "Sıralama"], ["zuvor", "daha önce"], ["damals", "o zamanlar"], ["bevor", "önce"],
            ["nachdem", "sonra"], ["sobald", "yapar yapmaz"], ["kaum", "neredeyse hiç/henüz"], ["gerade", "tam o sırada"],
            ["Ende", "Son"], ["Anfang", "Başlangıç"], ["Erinnerung", "Anı"], ["Erfahrung", "Deneyim"],
            ["passiert", "olan/geçen"], ["erledigt", "halledilmiş"], ["vergessen", "unutulmuş"], ["geplant", "planlanmış"]
        ],
        sentences: [
            "Er ___ schon ge___.", "Sie ___ ve ___.", "Ich ___ o zamanlar ___.", 
            "Was ___ du ___?", "___ o ___.", "___ (sonra) ich gegessen hatte.",
            "Alles war ___ (halledilmiş).", "Ich hatte es ___ (unutmuşum).", "Das war ___ (planlanmış).", "Damals ___ ich."
        ]
    },
    582: { 
        words: [
            ["wird gemacht haben", "yapmış olacak"], ["Zukunft", "Gelecek"], ["Abschluss", "Tamamlama"], ["Zeitpunkt", "Zaman noktası"], 
            ["Vermutung", "Tahmin"], ["sicher", "emin"], ["bestimmt", "kesin"], ["bis dann", "o vakte kadar"],
            ["wahrscheinlich", "muhtemelen"], ["vielleicht", "belki"], ["hoffentlich", "umarım"], ["erwartet", "beklenen"],
            ["Ziel", "Hedef"], ["Erfolg", "Başarı"], ["Wandel", "Değişim"], ["Resultat", "Sonuç"],
            ["geklärt", "açıklığa kavuşmuş"], ["erreicht", "ulaşılmış"], ["erledigt", "halledilmiş"], ["vorbei", "geçmiş/bitmiş"]
        ],
        sentences: [
            "Ich ___ es ge___ ___.", "Bis morgen ___ er ___.", "Das ___ er ___.", 
            "___ du ___?", "___ o ___.", "Alles ___ (o vakte kadar) fertig sein.",
            "Wir ___ unser Ziel ___ (ulaşmış olacağız).", "Das ___ (sonuç) ist gut.", "Umarım ___ (hoffentlich).", "Es ___ (muhtemelen)."
        ]
    },
    583: { 
        words: [
            ["der", "ki (eril)"], ["die", "ki (dişil)"], ["das", "ki (nötr)"], ["den", "ki (eril -i hali)"], 
            ["dem", "ki (eril/nötr -e hali)"], ["dessen", "ki onun"], ["deren", "ki onun (dişil)"], ["welcher", "hangisi"],
            ["wo", "ki orada"], ["wohin", "ki oraya"], ["woher", "ki oradan"], ["was", "ki o"],
            ["Person", "Kişi"], ["Sache", "Şey/Nesne"], ["Ort", "Yer"], ["Grund", "Sebep"],
            ["bekannt", "tanınan"], ["interessant", "ilginç"], ["wichtig", "önemli"], ["schön", "güzel"]
        ],
        sentences: [
            "Der Mann, ___ dort steht.", "Das Buch, ___ ich lese.", "Die Frau, ___ ich helfe.", 
            "Der Freund, ___ ich besuche.", "Das Kind, ___ Vater hier ist.", "Das ist cái ___ (yer), wo...",
            "Alles, ___ (ki o) ich weiß.", "Der ___ (sebep), neden...", "Die ___ (kişi), die...", "Das ___ (şey), das..."
        ]
    },
    584: { 
        words: [
            ["weil", "çünkü"], ["da", "mademki/çünkü"], ["denn", "çünkü (bağlaç)"], ["wegen", "yüzünden"], 
            ["aufgrund", "sebebiyle"], ["deshalb", "bu yüzden"], ["darum", "bu sebeple"], ["folglich", "sonuç olarak"],
            ["nämlich", "yani/çünkü"], ["infolge", "sonucunda"], ["aus diesem Grund", "bu nedenle"], ["weswegen", "bu yüzden"],
            ["Ursache", "Neden"], ["Grund", "Sebep"], ["Wirkung", "Etki"], ["Folge", "Sonuç"],
            ["verantwortlich", "sorumlu"], ["schuld", "suçlu/neden olan"], ["dank", "sayesinde"], ["trotz", "rağmen"]
        ],
        sentences: [
            "Ich bleibe, ___ es regnet.", "___ du hier bist, bin ich froh.", "Er kommt nicht, ___ er ist krank.", 
            "___ (yüzünden) des Wetters.", "___ bin ich hier.", "___ (sayesinde) deiner Hilfe.",
            "Das ist die ___ (sonuç).", "Was ist der ___ (sebep)?", "Er ist ___ (sorumlu).", "___ (rağmen) des Regens."
        ]
    },
    585: { 
        words: [
            ["Wunsch", "İstek"], ["Hoffnung", "Umut"], ["Traum", "Hayal"], ["wenn", "eğer"], 
            ["Konjunktiv", "Dilek kipi"], ["Realität", "Gerçeklik"], ["erfüllen", "gerçekleştirmek"], ["Sehnsucht", "Özlem"],
            ["vorstellen", "Hayal etmek"], ["hoffen", "umut etmek"], ["wünschen", "dilemek"], ["glauben", "inanmak"],
            ["Wunder", "Mucize"], ["Ziel", "Hedef"], ["Erfolg", "Başarı"], ["Glück", "Mutluluk"],
            ["möglich", "mümkün"], ["unmöglich", "imkansız"], ["nah", "yakın"], ["fern", "uzak"]
        ],
        sentences: [
            "Ich ___ mir bir ___.", "Wenn ich doch nur ___!", "Ein großer ___.", 
            "Er ___ mir bir ___.", "Haben Sie bir ___?", "Ich ___ (umuyorum), dass...",
            "Ein ___ (mucize) geschah.", "Ist bu ___ (mümkün)?", "Mein ___ (hedef) ist...", "Viel ___ (başarı)!"
        ]
    },
    586: { 
        words: [
            ["Entscheidung treffen", "karar vermek"], ["Verantwortung tragen", "sorumluluk taşımak"], ["Frage stellen", "soru sormak"], ["Hilfe leisten", "yardım etmek"], 
            ["Bescheid sagen", "haber vermek"], ["Angst haben", "korkmak"], ["Glück haben", "şanslı olmak"], ["Zeit verbringen", "vakit geçirmek"],
            ["Interesse haben", "ilgi duymak"], ["Vertrauen haben", "güven duymak"], ["Hoffnung machen", "umutlandırmak"], ["Eindruck machen", "izlenim bırakmak"],
            ["Kritik üben", "eleştirmek"], ["Abschied nehmen", "veda etmek"], ["Bezug nehmen", "atıfta bulunmak"], ["Vorschlag machen", "öneride bulunmak"],
            ["Anspruch haben", "hak iddia etmek"], ["Rücksicht nehmen", "düşünceli davranmak"], ["Vorbereitungen treffen", "hazırlık yapmak"], ["Ruhe bewahren", "sakin kalmak"]
        ],
        sentences: [
            "Ich muss eine ___ ___.", "Wer ___ die ___?", "Kann ich bor ___ ___?", 
            "Bitte ___ mir ___ (haber ver).", "Ich ___ ___ (korkuyorum).", "Wir ___ ___ (vakit geçirdik).",
            "Hast du ___ (ilgi)?", "Er ___ (izlenim bıraktı) einen guten ___.", "Übe keine ___.", "Bewahre ___ (sakin kal)."
        ]
    },
    587: { 
        words: [
            ["jedoch", "ancak"], ["trotzdem", "yine de"], ["außerdem", "ayrıca"], ["entweder ... oder", "ya ... ya da"], 
            ["sowohl ... als auch", "hem ... hem de"], ["weder ... noch", "ne ... ne de"], ["nicht nur ... sondern auch", "sadece ... değil aynı zamanda"], ["zwar ... aber", "gerçi ... ama"],
            ["einerseits ... andererseits", "bir yandan ... diğer yandan"], ["daher", "bu yüzden"], ["deswegen", "bu sebeple"], ["dennoch", "buna rağmen"],
            ["anstatt", "yerine"], ["falls", "eğer"], ["sofern", "şayet"], ["sobald", "yapar yapmaz"],
            ["solange", "sürece"], ["bis", "kadar"], ["damit", "diye/mek için"], ["um ... zu", "mek için"]
        ],
        sentences: [
            "Ich bin müde, ___ lerne ich.", "___ kommst du ___ ich gehe.", "Er ist ___ klug ___ nett.", 
            "Ich habe ___ Zeit ___ Lust.", "Das ist ___ iyi ___ de ucuz.", "___ ich bleibe ___ (diğer yandan).",
            "Iss ___ (yerine) das.", "Sag es, ___ (yapar yapmaz) du...", "Lerne, ___ (mek için) zu...", "___ (eğer) es möglich ist."
        ]
    },
    588: { 
        words: [
            ["Sie", "Siz"], ["Du", "Sen"], ["Anrede", "Hitap"], ["Umgangssprache", "Sokak dili"], 
            ["Höflichkeit", "Nezaket"], ["Distanz", "Mesafe"], ["Kollegialität", "Meslektaşlık"], ["Respekt", "Saygı"],
            ["Anstand", "Edep/Terbiye"], ["Etikette", "Etiket/Görgü"], ["Begrüßung", "Selamlaşma"], ["Verabschiedung", "Vedalaşma"],
            ["förmlich", "resmi"], ["locker", "rahat"], ["angemessen", "uygun"], ["unhöflich", "kaba"],
            ["vertraut", "tanıdık/samimi"], ["fremd", "yabancı"], ["offiziell", "resmi"], ["privat", "özel"]
        ],
        sentences: [
            "Darf ich ___ sagen?", "Benutzen Sie ___.", "Eine höfliche ___.", 
            "Das ist ___ (sokak dili).", "Haben Sie ___.", "Sei ___ (nazik).",
            "Ein ___er (resmi) Brief.", "Das ist ___ (uygun).", "Guten Tag zur ___.", "Ein ___er (kaba) Mann."
        ]
    },
    589: { 
        words: [
            ["Debatte", "Tartışma"], ["Argumentation", "Argüman sunma"], ["Pro", "Lehte"], ["Contra", "Aleyhte"], 
            ["Struktur", "Yapı"], ["Logik", "Mantık"], ["Überzeugungskraft", "İkna gücü"], ["Fazit", "Sonuç/Özet"],
            ["Einleitung", "Giriş"], ["Thesen", "Tezler"], ["Widerspruch", "Çelişki/İtiraz"], ["Beweis", "Kanıt"],
            ["Beispiel", "Örnek"], ["Zusammenhang", "Bağlam"], ["Aspekt", "Açı/Yön"], ["Perspektive", "Bakış açısı"],
            ["analytisch", "analitik"], ["kritisch", "eleştirel"], ["sachlich", "nesnel"], ["redundant", "gereksiz tekrar"]
        ],
        sentences: [
            "Führe bor ___.", "Was ist dein ___ (tez)?", "Ein logisches ___.", 
            "Zieh bir ___ (sonuç).", "Haben Sie bir ___ (kanıt)?", "Nenne bir ___ (örnek).",
            "In diesem ___ (bağlam).", "Ein yeni ___ (açı).", "Sei ___ (eleştirel).", "Das ist ___ (nesnel)."
        ]
    },
    590: { 
        words: [
            ["Wiederholung", "Tekrar"], ["Zusammenfassung", "Özet"], ["Erfolg", "Başarı"], ["Fortschritt", "İlerceleme"], 
            ["Prüfungsvorbereitung", "Sınav hazırlığı"], ["Wissen", "Bilgi"], ["Anwendung", "Uygulama"], ["Meisterschaft", "Ustalık"],
            ["Zertifikat", "Sertifika"], ["Niveau", "Seviye"], ["Kompetenz", "Yetkinlik"], ["Herausforderung", "Zorluk/Mücadele"],
            ["erreichen", "ulaşmak"], ["bestehen", "başarmak/geçmek"], ["festigen", "pekiştirmek"], ["verinnerlichen", "içselleştirmek"],
            ["intensiv", "yoğun"], ["effektiv", "etkili"], ["nachhaltig", "sürdürülebilir"], ["stolz", "gururlu"]
        ],
        sentences: [
            "Machen wir bir ___ (tekrar).", "Schreib bir ___ (özet).", "Viel ___ (başarı)!", 
            "Ein guter ___ (ilerleme).", "Zeig dein ___ (bilgi).", "Hast du die Prüfung ___?",
            "Ich bin ___ (gururlu).", "Ein yeni ___ (yetkinlik).", "Lerne ___ (yoğun).", "Das ist bor ___ (zorluk)."
        ]
    }
};

export function getGermanB1QuestionsForUnit(unitId: number, quizIndex: number = 1): Question[] {
    const data = topics[unitId] || topics[561];
    
    const baseId = (quizIndex - 1) * 20;
    const questions: Question[] = [];

    for (let i = 0; i < 20; i++) {
        const offset = (quizIndex * 3) + i;
        const wordIdx = offset % data.words.length;

        let qType: QuestionType;
        if (i < 7) {
            const easyTypes: QuestionType[] = ["SELECT", "SELECT", "SELECT", "LISTENING", "LISTENING", "SELECT", "LISTENING"];
            qType = easyTypes[i];
        } else if (i < 14) {
            const mediumTypes: QuestionType[] = ["SELECT", "TRANSLATE", "SELECT", "LISTENING", "FILL_BLANK", "TRANSLATE", "SELECT"];
            qType = mediumTypes[i - 7];
        } else {
            const hardTypes: QuestionType[] = ["TRANSLATE", "FILL_BLANK", "LISTENING", "FILL_BLANK", "TRANSLATE", "TRANSLATE"];
            qType = hardTypes[i - 14];
        }

        const otherWords = data.words.filter((_, idx) => idx !== wordIdx);
        const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
        const wrongOptions = shuffledOthers.slice(0, 3);

        const allOptions = [
            { id: "correct", text: data.words[wordIdx][1], correct: true },
            { id: "w1", text: wrongOptions[0][1], correct: false },
            { id: "w2", text: wrongOptions[1][1], correct: false },
            { id: "w3", text: wrongOptions[2][1], correct: false }
        ]
        .sort(() => 0.5 - Math.random())
        .map((opt, idx) => ({ ...opt, id: String.fromCharCode(97 + idx) }));

        const sentenceIdx = (offset + i) % (data.sentences?.length || 1);
        const dynamicSentence = data.sentences ? data.sentences[sentenceIdx] : `Das ist ein ___.`;

        questions.push({
            id: baseId + i + 1,
            type: qType,
            question: qType === "SELECT" ? `'${data.words[wordIdx][0]}' ne demek?` :
                qType === "TRANSLATE" ? "Çevir:" :
                    qType === "LISTENING" ? "Duyduğunu seç:" : "Doldur:",
            options: qType !== "TRANSLATE" ? allOptions : undefined,
            correctAnswer: qType === "TRANSLATE" ? data.words[wordIdx][0] : undefined,
            hint: qType === "TRANSLATE" ? data.words[wordIdx][1] : undefined,
            audioText: qType === "LISTENING" ? data.words[wordIdx][0] : undefined,
            sentence: qType === "FILL_BLANK" ? dynamicSentence : undefined,
        });
    }

    return questions;
}
