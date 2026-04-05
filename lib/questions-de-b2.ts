import { Question, QuestionType } from "./questions";

export interface GermanTopic {
    words: string[][];
    sentences: string[];
}

const topics: { [key: number]: GermanTopic } = {
    // B2 Üniteleri (591-620)
    591: { 
        words: [
            ["Zeitform", "Zaman kipi"], ["Vollendung", "Tamamlama"], ["Nuance", "Nüans"], ["Aspekt", "Açı/Yön"], 
            ["Präzision", "Kesinlik"], ["Ausdruck", "İfade"], ["gehoben", "üst düzey"], ["differenzieren", "ayırt etmek"],
            ["Stilistik", "Biçembilim"], ["Modus", "Kip"], ["Indikativ", "Haber kipi"], ["Konjunktiv", "Dilek kipi"],
            ["Imperativ", "Emir kipi"], ["Tempus", "Zaman"], ["Genus Verbi", "Fiil çatısı"], ["Aktiv", "Etken"],
            ["Passiv", "Edilgen"], ["Satzbau", "Cümle yapısı"], ["Wortwahl", "Kelime seçimi"], ["Semantik", "Anlambilim"]
        ],
        sentences: [
            "Eine präzise ___.", "Der richtige ___.", "Man muss ___.", 
            "Ein ___er Stil.", "Welche ___ hat das?", "Achte auf die ___ (nüans).",
            "Die ___ (kesinlik) ist wichtig.", "Benutze ___ (üst düzey) Sprache.", "Wie ___st du?", "Ein guter ___ (ifade)."
        ]
    },
    592: { 
        words: [
            ["Konstruktion", "Yapı"], ["Satzbau", "Cümle yapısı"], ["Verschachtelung", "İç içe geçme"], ["Komplexität", "Karmaşıklık"], 
            ["Logik", "Mantık"], ["Verbindung", "Bağlantı"], ["Analytisch", "Analitik"], ["Stilistik", "Biçembilim"],
            ["Nebensatz", "Yan cümle"], ["Hauptsatz", "Ana cümle"], ["Relativsatz", "İlgi cümlesi"], ["Konnektor", "Bağlayıcı"],
            ["Partizipialattribut", "Ortaç tamlaması"], ["Infinitivgruppe", "Mastar grubu"], ["Interpunktion", "Noktalama"], ["Satzgefüge", "Birleşik cümle yapısı"],
            ["präzise", "kesin"], ["effizient", "verimli"], ["elegant", "zarif"], ["anspruchsvoll", "iddialı/zorlayıcı"]
        ],
        sentences: [
            "Eine komplexe ___.", "Der richtige ___.", "Achte auf die ___.", 
            "Ein logischer ___.", "Die ___ des Textes.", "Vermeide zu viel ___ (iç içe geçme).",
            "Ein ___er (iddialı) Satz.", "Nutze einen ___ (bağlayıcı).", "Was ist die ___ (mantık)?", "Schreib ___ (zarif)."
        ]
    },
    593: { 
        words: [
            ["Redewendung", "Deyim"], ["Metapher", "Metafor"], ["bildlich", "mecazi"], ["Sprichwort", "Atasözü"], 
            ["idiomatisch", "deyimsel"], ["Bedeutung", "Anlam"], ["Herkunft", "Köken"], ["Verwendung", "Kullanım"],
            ["Umgangssprache", "Sokak dili"], ["Kulturgut", "Kültür varlığı"], ["Nuance", "Nüans"], ["Konnotation", "Yan anlam"],
            ["veraltet", "eskimiş"], ["gebräuchlich", "yaygın"], ["feststehend", "kalıplaşmış"], ["ausdrücken", "ifade etmek"],
            ["begreifen", "kavramak"], ["vermitteln", "aracılık etmek/aktarmak"], ["illustrieren", "örneklemek"], ["prägen", "şekillendirmek"]
        ],
        sentences: [
            "Eine geläufige ___.", "Das ist ___ gemeint.", "Kennst du das ___ (atasözü)?", 
            "Was ist die ___?", "Die ___ ist wichtig.", "Benutze bir ___ (deyim).",
            "Was ist die ___ (köken)?", "Ein ___ (yaygın) Ausdruck.", "Das ist ___ (mecazi).", "Wie ___st du das?"
        ]
    },
    594: { 
        words: [
            ["Alltag", "Günlük hayat"], ["Umgangssprache", "Sokak dili"], ["Ausdruck", "İfade"], ["Slang", "Argo"], 
            ["Kontext", "Bağlam"], ["angemessen", "uygun"], ["Situation", "Durum"], ["Variation", "Varyasyon"],
            ["Umgangsform", "Davranış biçimi"], ["Umfeld", "Çevre"], ["Gewohnheit", "Alışkanlık"], ["Ritual", "Ritüel"],
            ["floskel", "basmakalıp söz"], ["Dialekt", "Lehçe"], ["Aussprache", "Telaffuz"], ["Betonung", "Vurgu"],
            ["locker", "rahat"], ["förmlich", "resmi"], ["authentisch", "özgün"], ["spontan", "kendiliğinden"]
        ],
        sentences: [
            "Im deutschen ___.", "Das ist ___ (sokak dili).", "Achte auf den ___.", 
            "Ist das ___ (uygun)?", "In dieser ___.", "Ein ___er (özgün) Sprecher.",
            "Was ist senin ___ (alışkanlık)?", "Benutze keinen ___ (argo).", "Eine gute ___ (telaffuz).", "Sei ___ (kendiliğinden)."
        ]
    },
    595: { 
        words: [
            ["Korrespondenz", "Yazışma"], ["Anrede", "Hitap"], ["Grußformel", "Selamlama formülü"], ["Betreffzeile", "Konu satırı"], 
            ["Anliegen", "Maruzat/Konu"], ["formell", "resmi"], ["höflich", "nazik"], ["Kündigung", "Fesih/İstifa"],
            ["Beschwerde", "Şikayet"], ["Anfrage", "Sorgu/İstek"], ["Bestätigung", "Onay"], ["Einladung", "Davet"],
            ["Anhang", "Ek"], ["Unterschrift", "İmza"], ["Empfänger", "Alıcı"], ["Absender", "Gönderen"],
            ["beifügen", "eklemek"], ["weiterleiten", "iletmek"], ["beantworten", "cevaplamak"], ["formulieren", "formüle etmek/yazmak"]
        ],
        sentences: [
            "Eine offizielle ___.", "Die richtige ___.", "Mein ___ ist folgendes.", 
            "Sehr ___.", "Schreib bor ___ (şikayet).", "Wo ist der ___ (ek)?",
            "Vergiss die ___ (imza) nicht.", "Wer ist der ___ (alıcı)?", "Bitte ___ (ilet) die Mail.", "Wie ___st sen?"
        ]
    },
    596: { 
        words: [
            ["Rhetorik", "Hitabet"], ["Körpersprache", "Beden dili"], ["Präsentation", "Sunum"], ["Visualisierung", "Görselleştirme"], 
            ["Interaktion", "Etkileşim"], ["Publikum", "Dinleyici"], ["Lampenfieber", "Sahne korkusu"], ["Überzeugungskraft", "İkna gücü"],
            ["Stimme", "Ses"], ["Mimik", "Mimik"], ["Gestik", "Jestler"], ["Blickkontakt", "Göz teması"],
            ["Redefluss", "Konuşma akışı"], ["Pausengestaltung", "Duraklama yönetimi"], ["Argumentation", "Argümantasyon"], ["Schlussfolgerung", "Çıkarım"],
            ["souverän", "hakim/kendine güvenen"], ["charismatisch", "karizmatik"], ["authentisch", "özgün"], ["eloquent", "güzel konuşan"]
        ],
        sentences: [
            "Übe deine ___.", "Achte auf senin ___.", "Eine gute ___ (sunum).", 
            "Begeistere das ___.", "Haben Sie ___ (sahne korkusu)?", "Halte ___ (göz teması).",
            "Deine ___ (ses) ist klar.", "Sei ___ (kendine güvenen).", "Was ist senin ___ (çıkarım)?", "Benutze ___ (jestler)."
        ]
    },
    597: { 
        words: [
            ["Verhandlung", "Müzakere"], ["Kompromiss", "Uzlaşma"], ["Strategie", "Strateji"], ["Taktik", "Taktik"], 
            ["Ziel", "Hedef"], ["Argument", "Argüman"], ["Ergebnis", "Sonuç"], ["Einigung", "Anlaşma"],
            ["Position", "Pozisyon"], ["Interesse", "İlgi/Çıkar"], ["Forderung", "Talep"], ["Zugeständnis", "Ödün"],
            ["Verhandlungsgeschick", "Müzakere becerisi"], ["Gegenangebot", "Karşı teklif"], ["Abschluss", "Sonuç/Kapanış"], ["Protokoll", "Tutanak"],
            ["hartnäckig", "inatçı"], ["nachgiebig", "esnek/boyun eğen"], ["sachlich", "nesnel"], ["konstruktiv", "yapıcı"]
        ],
        sentences: [
            "Führe die ___.", "Finden wir bor ___.", "Was ist senin ___?", 
            "Ein starkes ___.", "Erzielen wir bor ___ (anlaşma).", "Was ist senin ___ (talep)?",
            "Mach bir ___ (ödün).", "Sei ___ (yapıcı).", "Kein ___ (karşı teklif).", "Schreib das ___ (tutanak)."
        ]
    },
    598: { 
        words: [
            ["Gesetz", "Kanun"], ["Recht", "Hak/Hukuk"], ["Anwalt", "Avukat"], ["Gericht", "Mahkeme"], 
            ["Paragraf", "Madde/Paragraf"], ["Vertrag", "Sözleşme"], ["Haftung", "Sorumluluk"], ["Urteil", "Karar/Hüküm"],
            ["Klage", "Dava"], ["Zeuge", "Tanık"], ["Beweis", "Kanıt"], ["Staatsanwalt", "Savcı"],
            ["Verteidigung", "Savunma"], ["Paragraf", "Fıkra/Bent"], ["Pflicht", "Görev/Yükümlülük"], ["Eigentum", "Mülkiyet"],
            ["legal", "yasal"], ["illegal", "yasadışı"], ["gerecht", "adil"], ["strafbar", "cezai"]
        ],
        sentences: [
            "Das steht im ___.", "Ich habe bor ___ (hak).", "Gehen wir vor ___.", 
            "Unterschreib den ___.", "Ein gerechtes ___.", "Wo ist der ___ (tanık)?",
            "Hast du einen ___ (kanıt)?", "Das ist ___ (yasadışı).", "Meine ___ (yükümlülük) ist...", "Wer ist der ___ (avukat)?"
        ]
    },
    599: { 
        words: [
            ["Diagnosis", "Teşhis"], ["Therapie", "Terapi"], ["Symptom", "Semptom"], ["Anatomie", "Anatomi"], 
            ["Chirurgie", "Cerrahi"], ["Prävention", "Önleme"], ["Patient", "Hasta"], ["Medizin", "Tıp"],
            ["Heilung", "İyileşme"], ["Vorsorge", "Önlem/Kontrol"], ["Impfung", "Aşı"], ["Infektion", "Enfeksiyon"],
            ["Krankenhaus", "Hastane"], ["Pflege", "Bakım"], ["Rehabilitation", "Rehabilitasyon"], ["Nebenwirkung", "Yan etki"],
            ["chronisch", "kronik"], ["akut", "akut"], ["ansteckend", "bulaşıcı"], ["wirksam", "etkili"]
        ],
        sentences: [
            "Was ist die ___?", "Eine wirksame ___.", "Nenne das ___.", 
            "Alles Gute dem ___ (hasta).", "Fortschritt in der ___.", "Gibt es ___ (yan etki)?",
            "Ist es ___ (bulaşıcı)?", "Geh zur ___ (kontrol).", "Die ___ (bakım) ist gut.", "Eine ___ (kronik) Krankheit."
        ]
    },
    600: { 
        words: [
            ["Finanzen", "Finans"], ["Aktien", "Hisseler"], ["Börse", "Borsa"], ["Zinsen", "Faizler"], 
            ["Kredit", "Kredi"], ["Investment", "Yatırım"], ["Inflation", "Enflasyon"], ["Kapital", "Sermaye"],
            ["Gewinn", "Kar"], ["Verlust", "Zarar"], ["Dividende", "Kar payı"], ["Portfolio", "Portföy"],
            ["Wirtschaftswachstum", "Ekonomik büyüme"], ["Kaufkraft", "Alım gücü"], ["Zahlungsverkehr", "Ödeme trafiği"], ["Steuer", "Vergi"],
            ["rentabel", "karlı"], ["riskant", "riskli"], ["spekulativ", "spekülatif"], ["stabil", "istikrarlı"]
        ],
        sentences: [
            "Verwalte senin ___.", "Wie stehen die ___?", "Die ___ (faizler) steigen.", 
            "Nimm einen ___.", "Schütze senin ___ (sermaye).", "Viel ___ (kar) machen.",
            "Die ___ (enflasyon) sinkt.", "Ein ___ (riskli) Investment.", "Zahl senin ___ (vergi).", "Die ___ (alım gücü) ist gering."
        ]
    },
    601: { 
        words: [
            ["Literatur", "Edebiyat"], ["Epoche", "Dönem/Çağ"], ["Gattung", "Tür"], ["Charakterisierung", "Karakterizasyon"], 
            ["Motiv", "Motif"], ["Symbolik", "Sembolizm"], ["Metrum", "Ölçü"], ["Interpretation", "Yorum"],
            ["Lyrik", "Lirik"], ["Dramatik", "Dramatik"], ["Epik", "Epik"], ["Metapher", "Metafor"],
            ["Protagonist", "Baş kahraman"], ["Antagonist", "Karşı karakter"], ["Erzählperspektive", "Anlatıcı perspektifi"], ["Rhetorik", "Hitabet"],
            ["klassisch", "klasik"], ["modern", "modern"], ["ironisch", "ironik"], ["tiefgründig", "derinlemesine"]
        ],
        sentences: [
            "Eine Analyse der ___.", "Welche ___ ist das?", "Schreib bir ___ (karakterizasyon).", 
            "Was ist das ___ (motif)?", "Eine tiefgründige ___ (yorum).", "Wer ist der ___ (kahraman)?",
            "Eine schöne ___ (metafor).", "Der ___ (anlatıcı) ist...", "Das ___ (ölçü) stimmt.", "Ein ___er (modern) Roman."
        ]
    },
    602: { 
        words: [
            ["Kontroverse", "Tartışma/Anlaşmazlık"], ["Debatte", "Münazara"], ["Ethik", "Etik"], ["Moral", "Moral/Ahlak"], 
            ["Standpunkt", "Bakış açısı"], ["Argumentation", "Argümantasyon"], ["Kritik", "Eleştiri"], ["Diskurs", "Söylem"],
            ["Werte", "Değerler"], ["Normen", "Normlar"], ["Verantwortung", "Sorumluluk"], ["Gewissen", "Vicdan"],
            ["Dilemma", "Dilemma"], ["Konsens", "Konsens/Uzlaşı"], ["Pluralismus", "Çoğulculuk"], ["Ideologie", "İdeoloji"],
            ["kontrovers", "tartışmalı"], ["moralisch", "ahlaki"], ["vertretbar", "savunulabilir"], ["radikal", "radikal"]
        ],
        sentences: [
            "Eine spannende ___.", "Haben Sie einen ___ (bakış açısı)?", "Übe ___ (eleştiri).", 
            "Was ist senin ___ (argümantasyon)?", "Ein öffentlicher ___.", "Ein ethisches ___.",
            "Habe bor ___ (vicdan).", "Finden wir einen ___ (uzlaşı).", "Das ist ___ (ahlaki).", "Keine ___ (ideoloji)."
        ]
    },
    603: { 
        words: [
            ["Textverständnis", "Metin anlama"], ["Quelle", "Kaynak"], ["Zitieren", "Alıntılamak"], ["Abstraktion", "Soyutlama"], 
            ["Hypothese", "Hipotez"], ["Empirie", "Ampiri"], ["Methodik", "Metodoloji"], ["Wissenschaft", "Bilim"],
            ["Forschung", "Araştırma"], ["Analyse", "Analiz"], ["Beleg", "Kanıt"], ["Veröffentlichung", "Yayın"],
            ["Theorie", "Teori"], ["Objektivität", "Nesnellik"], ["Präzision", "Hassasiyet"], ["Struktur", "Yapı"],
            ["akademisch", "akademik"], ["empirisch", "deneysel"], ["plausibel", "makul"], ["fundiert", "temelli/esaslı"]
        ],
        sentences: [
            "Verbessere dein ___.", "Nenne die ___.", "Richtig ___ (alıntıla).", 
            "Stelle bir ___ (hipotez).", "Wissenschaftliche ___.", "Eine gute ___ (araştırma).",
            "Wo ist der ___ (kanıt)?", "Das ist ___ (makul).", "Ein ___ (temelli) Wissen.", "Achte auf ___ (nesnellik)."
        ]
    },
    604: { 
        words: [
            ["Reflexion", "Yansıma/Düşünme"], ["Logik", "Mantık"], ["Skepsis", "Kuşku"], ["Hinterfragen", "Sorgulama"], 
            ["Perspektive", "Perspektif"], ["Objektivität", "Nesnellik"], ["Subjektivität", "Öznellik"], ["Urteil", "Yargı"],
            ["Einsicht", "Anlayış/Kavrayış"], ["Erkenntnis", "Farkındalık/Bilgi"], ["Zweifel", "Şüphe"], ["Vernunft", "Akıl"],
            ["Vorurteil", "Önyargı"], ["Kritikfähigkeit", "Eleştiri yeteneği"], ["Selbstreflexion", "Öz yansıma"], ["Bewusstsein", "Bilinç"],
            ["rational", "rasyonel"], ["kritisch", "eleştirel"], ["tiefgründig", "derin"], ["klar", "net"]
        ],
        sentences: [
            "Fördere senin ___.", "Benutze die ___.", "Behalte senin ___ (kuşku).", 
            "Ein kritischer ___.", "Brauchen wir ___ (nesnellik)?", "Hinterfrage alles.",
            "Eine yeni ___ (farkındalık).", "Sei ___ (eleştirel).", "Was ist senin ___ (yargı)?", "Ohne ___ (önyargı)."
        ]
    },
    605: { 
        words: [
            ["Diplomatie", "Diplomasi"], ["Politik", "Politika"], ["Allianz", "İttifak"], ["Konflikt", "Çatışma"], 
            ["Frieden", "Barış"], ["Verhandlungen", "Müzakereler"], ["Globalisierung", "Küreselleşme"], ["Souveränität", "Egemenlik"],
            ["Abkommen", "Anlaşma"], ["Sanktion", "Yaptırım"], ["Vermittlung", "Arabuluculuk"], ["Gipfeltreffen", "Zirve toplantısı"],
            ["Menschenrechte", "İnsan hakları"], ["Demokratie", "Demokrasi"], ["Rechtstaat", "Hukuk devleti"], ["Bündnis", "Birlik/Pakt"],
            ["diplomatisch", "diplomatik"], ["neutral", "tarafsız"], ["stabil", "istikrarlı"], ["gerecht", "adil"]
        ],
        sentences: [
            "Internationale ___.", "Löse den ___ (çatışma).", "Schließe bir ___ (ittifak).", 
            "Strebe nach ___ (barış).", "Bewahre die ___ (egemenlik).", "Ein neues ___ (anlaşma).",
            "Was sind ___ (insan hakları)?", "Sei ___ (tarafsız).", "Ein ___er (adil) Prozess.", "Das ___ (pakt) hält."
        ]
    },
    606: { 
        words: [
            ["Medien", "Medya"], ["Manipulation", "Manipülasyon"], ["Propaganda", "Propaganda"], ["objektiv", "nesnel"], 
            ["subjektiv", "öznel"], ["Fake News", "Sahte haber"], ["Meinungsbildung", "Fikir oluşumu"], ["Journalismus", "Gazetecilik"],
            ["Informationsfreiheit", "Bilgi özgürlüğü"], ["Zensur", "Sansür"], ["Berichterstattung", "Haber yapma"], ["Quelle", "Kaynak"],
            ["Öffentlichkeit", "Kamuoyu"], ["Pressefreiheit", "Basın özgürlüğü"], ["Nachricht", "Haber"], ["Recherche", "Araştırma"],
            ["glaubwürdig", "güvenilir"], ["seriös", "ciddi/saygın"], ["kritisch", "eleştirel"], ["neutral", "tarafsız"]
        ],
        sentences: [
            "Kritische ___.", "Achte auf ___ (manipülasyon).", "Das ist ___.", 
            "Erkenne ___ (sahte haber).", "Seriöser ___.", "Gegen ___ (sansür).",
            "Eine gute ___ (kaynak).", "Die ___ (kamuoyu) fragt.", "Sei ___ (eleştirel).", "Ist das ___ (güvenilir)?"
        ]
    },
    607: { 
        words: [
            ["Management", "Yönetim"], ["Leadership", "Liderlik"], ["Unternehmenskultur", "Şirket kültürü"], ["Innovation", "İnovasyon"], 
            ["Marktstrategie", "Piyasa stratejisi"], ["Effizienz", "Verimlilik"], ["Nachhaltigkeit", "Sürdürülebilirlik"], ["Erfolg", "Başarı"],
            ["Motivation", "Motivasyon"], ["Teamgeist", "Ekip ruhu"], ["Hierarchie", "Hiyerarşi"], ["Kompetenz", "Yetkinlik"],
            ["Delegieren", "Delege etmek"], ["Zielsetzung", "Hedef belirleme"], ["Feedback", "Geri bildirim"], ["Vision", "Vizyon"],
            ["effektiv", "etkili"], ["produktiv", "üretken"], ["hierarchisch", "hiyerarşik"], ["flexibel", "esnek"]
        ],
        sentences: [
            "Modernes ___.", "Fördere die ___ (liderlik).", "Gelebte ___.", 
            "Steigere die ___ (verimlilik).", "Ein großer ___.", "Haben Sie bir ___ (vizyon)?",
            "Gutes ___ (geribildirim).", "Sei ___ (esnek).", "Arbeite ___ (üretken).", "Keine ___ (hiyerarşi)."
        ]
    },
    608: { 
        words: [
            ["Projekt", "Proje"], ["Zeitplan", "Zaman çizelgesi"], ["Ressourcen", "Kaynaklar"], ["Meilenstein", "Kilometre taşı"], 
            ["Teamarbeit", "Ekip çalışması"], ["Koordination", "Koordinasyon"], ["Ergebnis", "Sonuç"], ["Präsentation", "Sunum"],
            ["Aufgabe", "Görev"], ["Verantwortung", "Sorumluluk"], ["Deadline", "Teslim tarihi"], ["Budget", "Bütçe"],
            ["Planung", "Planlama"], ["Fortschritt", "İlerleme"], ["Risiko", "Risk"], ["Qualität", "Kalite"],
            ["zuverlässig", "güvenilir"], ["strukturiert", "yapılandırılmış"], ["fristgerecht", "zamanında"], ["erfolgreich", "başarılı"]
        ],
        sentences: [
            "Plane das ___.", "Halte den ___.", "Nutze die ___ (kaynaklar).", 
            "Erreiche den ___ (meilenstein).", "Gute ___ (sunum)!", "Wo ist die ___ (görev)?",
            "Achte auf die ___ (deadline).", "Sei ___ (güvenilir).", "Ein gutes ___ (sonuç).", "Wie ist der ___ (ilerleme)?"
        ]
    },
    609: { 
        words: [
            ["Kultur", "Kültür"], ["Austausch", "Alışveriş/Değişim"], ["Sensibilität", "Duyarlılık"], ["Stereotyp", "Stereotip"], 
            ["Vorurteil", "Önyargı"], ["Verständnis", "Anlayış"], ["Toleranz", "Hoşgörü"], ["Integration", "Entegrasyon"],
            ["Identität", "Kimlik"], ["Vielfalt", "Çeşitlilik"], ["Gleichberechtigung", "Eşitlik"], ["Empatie", "Empati"],
            ["Zugehörigkeit", "Ait olma"], ["Fremdheit", "Yabancılık"], ["Bereicherung", "Zenginleşme"], ["Dialog", "Diyalog"],
            ["interkulturell", "kültürlerarası"], ["offen", "açık"], ["respektvoll", "saygılı"], ["vorurteilsfrei", "önyargısız"]
        ],
        sentences: [
            "Interkultureller ___.", "Zeig ___ (duyarlılık).", "Baue ___ (önyargı) ab.", 
            "Haben Sie ___ (anlayış).", "Fördere die ___ (entegrasyon).", "Respektiere die ___ (çeşitlilik).",
            "Sei ___ (saygılı).", "Ein guter ___ (diyalog).", "Das ist bir ___ (zenginleşme).", "Bleib ___ (açık)."
        ]
    },
    610: { 
        words: [
            ["Karriere", "Kariyer"], ["Entwicklung", "Gelişim"], ["Netzwerk", "Ağ"], ["Weiterbildung", "İleri eğitim"], 
            ["Potenzial", "Potansiyel"], ["Motivation", "Motivasyon"], ["Zielsetzung", "Hedef belirleme"], ["Erfolg", "Başarı"],
            ["Aufstieg", "Yükseliş"], ["Berufung", "Meslek aşkı/Çağrı"], ["Ehrgeiz", "Hırs"], ["Qualifikation", "Nitelik"],
            ["Erfahrung", "Deneyim"], ["Kompetenz", "Yetkinlik"], ["Herausforderung", "Zorluk"], ["Chance", "Fırsat"],
            ["ehrgeizig", "hırslı"], ["engagiert", "özverili"], ["zielstrebig", "hedefe odaklı"], ["erfolgreich", "başarılı"]
        ],
        sentences: [
            "Plane senin ___.", "Stärke dein ___ (ağ).", "Nutze senin ___ (potansiyel).", 
            "Brauchen wir ___ (eğitim)?", "Viel ___ (başarı)!", "Eine yeni ___ (zorluk).",
            "Sei ___ (hırslı).", "Hast du ___ (deneyim)?", "Nimm die ___ (fırsat).", "Mein ___ (hedef) ist..."
        ]
    },
    611: { 
        words: [
            ["Indirekte Rede", "Dolaylı Anlatım"], ["Konjunktiv I", "Dilek kipi I"], ["Berichterstattung", "Haber bildirme"], ["behaupten", "iddia etmek"], 
            ["erklären", "açıklamak"], ["mitteilen", "bildirmek"], ["bestätigen", "onaylamak"], ["zitieren", "alıntılamak"],
            ["laut", "göre/uyarınca"], ["gemäß", "uyarınca"], ["folglich", "sonuç olarak"], ["wiedergeben", "aktarmak"],
            ["Aussage", "İfade"], ["Bericht", "Haber/Rapor"], ["Meldung", "Bildiri"], ["Inhalt", "İçerik"],
            ["offiziell", "resmi"], ["angeblich", "iddia edilen"], ["sogenannt", "sözde"], ["vermeintlich", "varsayılan"]
        ],
        sentences: [
            "Er sagte, er ___.", "Sie meinte, es ___.", "Der Bericht ___ (bildiriyor).", 
            "Kannst du das ___ (onaylamak)?", "Wie ___ (alıntı yapıyor) er?", "___ (göre) dem Bericht...",
            "Gib den ___ (içerik) wieder.", "Das ist ___ (resmi).", "Die ___ (ifade) ist klar.", "Er ___ (iddia ediyor) dass..."
        ]
    },
    612: { 
        words: [
            ["Partizip I", "Ortaç I"], ["Partizip II", "Ortaç II"], ["Attribut", "Niteleyici"], ["beschreibend", "betimleyici"], 
            ["Handlung", "Eylem"], ["Zustand", "Durum"], ["kompakt", "Kompakt"], ["stilvoll", "Şık"],
            ["adjektivisch", "sıfatsal"], ["Deklination", "Çekim"], ["Endung", "Ek"], ["Verwandlung", "Dönüşüm"],
            ["laufend", "koşan/devam eden"], ["gelesen", "okunmuş"], ["gebrochen", "kırılmış"], ["lachend", "gülen"],
            ["fließend", "akıcı"], ["geklärt", "açıklanmış"], ["versteckt", "gizli"], ["bekannt", "tanınan"]
        ],
        sentences: [
            "Die ___ne (gülen) Sonne.", "Der ___ne (okunmuş) Brief.", "Das ___de (koşan) Kind.", 
            "Ein ___er (şık) Stil.", "Ganz ___ (kompakt).", "Eine ___ (gizli) Nachricht.",
            "Sprichst du ___ (akıcı)?", "Ein ___er (tanınan) Mann.", "Das ist ___ (açıklanmış).", "Achte auf die ___ (ek)."
        ]
    },
    613: { 
        words: [
            ["Nominalisierung", "İsimleştirme"], ["Stil", "Tarz/Biçim"], ["Präzision", "Kesinlik"], ["Zusammenfassung", "Özet"], 
            ["Sachlichkeit", "Nesnellik"], ["Inhalt", "İçerik"], ["Ausdruck", "İfade"], ["Komplexität", "Karmaşıklık"],
            ["Abstraktion", "Soyutlama"], ["Verknüpfung", "Bağlantı"], ["Kürze", "Kısalık"], ["Eleganz", "Zarafet"],
            ["wissenschaftlich", "bilimsel"], ["bürokratisch", "bürokratik"], ["formal", "biçimsel"], ["inhaltlich", "içerik olarak"],
            ["vermeiden", "kaçınmak"], ["bevorzugen", "tercih etmek"], ["erleichtern", "kolaylaştırmak"], ["festigen", "pekiştirmek"]
        ],
        sentences: [
            "Benutze die ___.", "Eine gute ___ (özet).", "Klarer ___ (tarz).", 
            "Weniger ___ (karmaşıklık).", "Der ___ des Textes.", "Wissenschaftliche ___ (kesinlik).",
            "___ (kaçın) den Fehler.", "Ich ___ (tercih ederim) das.", "Das ___ (zarafet) ist wichtig.", "Eine ___ (biçimsel) Form."
        ]
    },
    614: { 
        words: [
            ["Passiv", "Edilgen"], ["Vorgangspassiv", "Eylem edilgeni"], ["Zustandspassiv", "Durum edilgeni"], ["werden", "olmak"], 
            ["sein", "olmak (durum)"], ["Ersatzformen", "Yedek formlar"], ["man", "birisi/insan"], ["lassen", "bırakmak/yaptırmak"],
            ["gehören", "ait olmak"], ["kommen", "gelmek"], ["erhalten", "almak"], ["bekommen", "almak (pasif)"],
            ["möglich", "mümkün"], ["notwendig", "gerekli"], ["unvermeidlich", "kaçınılmaz"], ["empfohlen", "tavsiye edilen"],
            ["gebaut", "inşa edilmiş"], ["geöffnet", "açılmış"], ["geschlossen", "kapatılmış"], ["erledigt", "halledilmiş"]
        ],
        sentences: [
            "Das Fenster ist ___ (kapatılmış).", "Es wird ___ (inşa ediliyor).", "Das lässt sich ___ (yapılır).", 
            "Man kann es ___.", "Die Form ist ___.", "Es ___ (alır) viel Aufmerksamkeit.",
            "Ist das ___ (mümkün)?", "Sehr ___ (tavsiye edilen).", "Es ___ (halledildi).", "Wer ___ (alır) den Preis?"
        ]
    },
    615: { 
        words: [
            ["Wissenschaft", "Bilim"], ["Diskurs", "Söylem"], ["Abstraktion", "Soyutlama"], ["Methodik", "Metodoloji"], 
            ["Hypothese", "Hipotez"], ["Empirie", "Ampiri"], ["Theorie", "Teori"], ["Zitation", "Atıf"],
            ["Forschung", "Araştırma"], ["Analyse", "Analiz"], ["Beleg", "Dayanak"], ["Veröffentlichung", "Yayın"],
            ["Terminus", "Terim"], ["Definition", "Tanım"], ["Prämisse", "Öncül"], ["Resultat", "Sonuç"],
            ["akademisch", "akademik"], ["analytisch", "analitik"], ["systematisch", "sistematik"], ["objektiv", "nesnel"]
        ],
        sentences: [
            "Wissenschaftlicher ___.", "Eine klare ___ (tanım).", "Stelle bir ___ (hipotez).", 
            "Überprüfe die ___ (teori).", "Richtig ___ (atıf yap).", "Ein guter ___ (terim).",
            "Was ist das ___ (sonuç)?", "Sei ___ (sistematik).", "Ein ___ (akademik) Text.", "Ohne ___ (nesnellik)."
        ]
    },
    616: { 
        words: [
            ["Erörterung", "Tartışma/Makale"], ["Argumentation", "Argümantasyon"], ["Position", "Pozisyon"], ["Begründung", "Gerekçelendirme"], 
            ["Beleg", "Kanıt/Dayanak"], ["Gegenargument", "Karşı argüman"], ["Reflexion", "Düşünme/Yansıma"], ["Fazit", "Sonuç"],
            ["Einleitung", "Giriş"], ["Hauptteil", "Gelişme"], ["Schluss", "Sonuç bölümü"], ["These", "Tez"],
            ["Widerspruch", "Çelişki"], ["Konsens", "Uzlaşı"], ["Überzeugung", "İkna"], ["Standpunkt", "Bakış açısı"],
            ["dialektisch", "diyalektik"], ["logisch", "mantıklı"], ["stichhaltig", "sağlam/geçerli"], ["überzeugend", "ikna edici"]
        ],
        sentences: [
            "Schreib bor ___.", "Was ist senin ___ (pozisyon)?", "Gib bor ___ (gerekçe).", 
            "Nenne ein ___ (kanıt).", "Zieh bir ___ (sonuç).", "Was ist senin ___ (tez)?",
            "Ein ___ (sağlam) Argument.", "Sei ___ (ikna edici).", "Kein ___ (çelişki).", "Ein guter ___ (bakış açısı)."
        ]
    },
    617: { 
        words: [
            ["Mündlich", "Sözlü"], ["Prüfung", "Sınav"], ["Ausdruck", "İfade"], ["Akıcılık", "Flüssigkeit"], 
            ["Vokabular", "Kelime hazinesi"], ["Reaktion", "Reaksiyon"], ["Diskussion", "Tartışma"], ["Feedback", "Geri bildirim"],
            ["Interaktion", "Etkileşim"], ["Aussprache", "Telaffuz"], ["Intonation", "Tonlama"], ["Sprechtempo", "Konuşma hızı"],
            ["Spontanität", "Kendiliğindenlik"], ["Sicherheit", "Güven"], ["Zusammenhang", "Bağlam"], ["Inhalt", "İçerik"],
            ["flüssig", "akıcı"], ["deutlich", "net/anlaşılır"], ["angemessen", "uygun"], ["höflich", "nazik"]
        ],
        sentences: [
            "Viel Erfolg bei der ___!", "Achte auf senin ___ (telaffuz).", "Brauchen wir ___ (akıcılık)?", 
            "Eine gute ___ (reaksiyon).", "Danke için das ___.", "Sprich ___ (akıcı).",
            "Sei ___ (nazik).", "Ein guter ___ (bağlam).", "Was ist der ___ (içerik)?", "Achte auf die ___ (tonlama)."
        ]
    },
    618: { 
        words: [
            ["Hörverstehen", "Duyduğunu anlama"], ["Audiotext", "Sesli metin"], ["Notiz", "Not"], ["Konzentration", "Konsantrasyon"], 
            ["Details", "Detaylar"], ["Hauptaussage", "Ana fikir"], ["Sprecher", "Konuşmacı"], ["Dialekt", "Lehçe"],
            ["Geräusch", "Gürültü/Ses"], ["Hintergrund", "Arka plan"], ["Tempo", "Hız"], ["Pause", "Mola"],
            ["global", "küresel/genel"], ["selektiv", "seçici"], ["detailliert", "ayrıntılı"], ["inferenziell", "çıkarımsal"],
            ["aufmerksam", "dikkatli"], ["hörbar", "duyulabilir"], ["verständlich", "anlaşılır"], ["undeutlich", "belirsiz"]
        ],
        sentences: [
            "Übe dein ___.", "Mach bir ___ (not).", "Brauchen wir ___ (konsantrasyon)?", 
            "Verstehst du den ___ (konuşmacı)?", "Was ist die ___ (ana fikir)?", "Hör ___ (dikkatli) zu.",
            "Achte auf ___ (ayrıntılar).", "Ein ___ (anlaşılır) Text.", "Der ___ (arka plan) ist laut.", "Kein ___ (lehçe)."
        ]
    },
    619: { 
        words: [
            ["Leseverstehen", "Okuduğunu anlama"], ["Text", "Metin"], ["Struktur", "Yapı"], ["Schlüsselwort", "Anahtar kelime"], 
            ["Zusammenhang", "Bağlam"], ["Interpretation", "Yorum"], ["Sachtext", "Bilgi metni"], ["Analyse", "Analiz"],
            ["Abschnitt", "Paragraf/Bölüm"], ["Überschrift", "Başlık"], ["Inhalt", "İçerik"], ["Argumentation", "Argümantasyon"],
            ["kursorisch", "yüzeysel"], ["selektiv", "seçici"], ["detailliert", "ayrıntılı"], ["kritisch", "eleştirel"],
            ["spannend", "heyecan verici"], ["komplex", "karmaşık"], ["informativ", "bilgilendirici"], ["relevant", "ilgili"]
        ],
        sentences: [
            "Verbessere dein ___.", "Analysiere den ___.", "Suche das ___ (anahtar kelime).", 
            "Was ist der ___ (bağlam)?", "Eine tiefgründige ___ (yorum).", "Lies den ___ (bölüm).",
            "Was ist die ___ (başlık)?", "Ein ___ (bilgilendirici) Text.", "Sei ___ (eleştirel).", "Das ist ___ (ilgili)."
        ]
    },
    620: { 
        words: [
            ["Meisterschaft", "Ustalık"], ["Zertifikat", "Sertifika"], ["Erfolg", "Başarı"], ["Niveau", "Seviye"], 
            ["Abschluss", "Mezuniyet"], ["Wissen", "Bilgi"], ["Anwendung", "Uygulama"], ["Zukunft", "Gelecek"],
            ["Kompetenz", "Yetkinlik"], ["Perfektion", "Mükemmellik"], ["Herausforderung", "Zorluk"], ["Ziel", "Hedef"],
            ["erreichen", "ulaşmak"], ["bewältigen", "üstesinden gelmek"], ["beherrschen", "hakim olmak"], ["verfeinern", "inceltmek/geliştirmek"],
            ["exzellent", "mükemmel"], ["fortgeschritten", "ileri düzey"], ["souverän", "hakim"], ["nachhaltig", "sürdürülebilir"]
        ],
        sentences: [
            "Herzlichen Glückwunsch zum ___!", "Du hast das ___ (seviye) erreicht.", "Viel ___ (başarı) in der ___!", 
            "Zeig dein ___ (bilgi).", "Die ___ (gelecek) beginnt şimdi.", "Erreiche dein ___ (hedef).",
            "Du ___ (hakimsin) die Sprache.", "Eine ___ (mükemmel) Arbeit.", "Sei ___ (hakim).", "Was ist die ___ (zorluk)?"
        ]
    }
};

export function getGermanB2QuestionsForUnit(unitId: number, quizIndex: number = 1): Question[] {
    const data = topics[unitId] || topics[591];
    
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
