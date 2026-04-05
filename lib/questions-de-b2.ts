import { Question, QuestionType } from "./questions";

export interface GermanTopic {
    words: string[][];
    sentences: string[];
}

const topics: { [key: number]: GermanTopic } = {
    // B2 Üniteleri (591-620)
    591: { 
        words: [["Zeitform", "Zaman kipi"], ["Vollendung", "Tamamlama"], ["Nuance", "Nüans"], ["Aspekt", "Açı/Yön"], ["Präzision", "Kesinlik"], ["Ausdruck", "İfade"], ["gehoben", "üst düzey"], ["differenzieren", "ayırt etmek"]],
        sentences: ["Eine präzise ___.", "Der richtige ___.", "Man muss ___.", "Ein ___er Stil.", "Welche ___ hat das?"]
    },
    592: { 
        words: [["Konstruktion", "Yapı"], ["Satzbau", "Cümle yapısı"], ["Verschachtelung", "İç içe geçme"], ["Komplexität", "Karmaşıklık"], ["Logik", "Mantık"], ["Verbindung", "Bağlantı"], ["Analytisch", "Analitik"], ["Stilistik", "Biçembilim"]],
        sentences: ["Eine komplexe ___.", "Der richtige ___.", "Achte auf die ___.", "Ein logischer ___.", "Die ___ des Textes."]
    },
    593: { 
        words: [["Redewendung", "Deyim"], ["Metapher", "Metafor"], ["bildlich", "mecazi"], ["sprichwort", "atasözü"], ["idiomatisch", "deyimsel"], ["Bedeutung", "Anlam"], ["Herkunft", "Köken"], ["Verwendung", "Kullanım"]],
        sentences: ["Eine geläufige ___.", "Das ist ___ gemeint.", "Kennst du das ___?", "Was ist die ___?", "Die ___ ist wichtig."]
    },
    594: { 
        words: [["Alltag", "Günlük hayat"], ["Umgangssprache", "Sokak dili"], ["Ausdruck", "İfade"], ["Slang", "Argo"], ["Kontext", "Bağlam"], ["angemessen", "uygun"], ["Situation", "Durum"], ["Variation", "Varyasyon"]],
        sentences: ["Im deutschen ___.", "Das ist ___.", "Achte auf den ___.", "Ist das ___?", "In dieser ___."]
    },
    595: { 
        words: [["Korrespondenz", "Yazışma"], ["Anrede", "Hitap"], ["Grußformel", "Selamlama formülü"], ["Betreffzeile", "Konu satırı"], ["Anliegen", "Maruzat/Konu"], ["formell", "resmi"], ["höflich", "nazik"], ["Kündigung", "Fesih/İstifa"]],
        sentences: ["Eine offizielle ___.", "Die richtige ___.", "Mein ___ ist folgendes.", "Sehr ___.", "Schreib bor ___."]
    },
    596: { 
        words: [["Rhetorik", "Hitabet"], ["Körpersprache", "Beden dili"], ["Präsentation", "Sunum"], ["Visualisierung", "Görselleştirme"], ["Interaktion", "Etkileşim"], ["Publikum", "Dinleyici"], ["Lampenfieber", "Sahne korkusu"], ["Überzeugungskraft", "İkna gücü"]],
        sentences: ["Übe deine ___.", "Achte auf senin ___.", "Eine gute ___.", "Begeistere das ___.", "Haben Sie ___?"]
    },
    597: { 
        words: [["Verhandlung", "Müzakere"], ["Kompromiss", "Uzlaşma"], ["Strategie", "Strateji"], ["Taktik", "Taktik"], ["Ziel", "Hedef"], ["Argument", "Argüman"], ["Ergebnis", "Sonuç"], ["Einigung", "Anlaşma"]],
        sentences: ["Führe die ___.", "Finden wir bor ___.", "Was ist senin ___?", "Ein starkes ___.", "Erzielen wir bor ___."]
    },
    598: { 
        words: [["Gesetz", "Kanun"], ["Recht", "Hak/Hukuk"], ["Anwalt", "Avukat"], ["Gericht", "Mahkeme"], ["Paragraf", "Madde/Paragraf"], ["Vertrag", "Sözleşme"], ["Haftung", "Sorumluluk"], ["Urteil", "Karar/Hüküm"]],
        sentences: ["Das steht im ___.", "Ich habe bor ___.", "Gehen wir vor ___.", "Unterschreib den ___.", "Ein gerechtes ___."]
    },
    599: { 
        words: [["Diagnosis", "Teşhis"], ["Therapie", "Terapi"], ["Symptom", "Semptom"], ["Anatomie", "Anatomi"], ["Chirurgie", "Cerrahi"], ["Prävention", "Önleme"], ["Patient", "Hasta"], ["Medizin", "Tıp"]],
        sentences: ["Was ist die ___?", "Eine wirksame ___.", "Nenne das ___.", "Alles Gute dem ___.", "Fortschritt in der ___."]
    },
    600: { 
        words: [["Finanzen", "Finans"], ["Aktien", "Hisseler"], ["Börse", "Borsa"], ["Zinsen", "Faizler"], ["Kredit", "Kredi"], ["Investment", "Yatırım"], ["Inflation", "Enflasyon"], ["Kapital", "Sermaye"]],
        sentences: ["Verwalte senin ___.", "Wie stehen die ___?", "Die ___ steigen.", "Nimm einen ___.", "Schütze senin ___."]
    },
    601: { 
        words: [["Literatur", "Edebiyat"], ["Epoche", "Dönem/Çağ"], ["Gattung", "Tür"], ["Charakterisierung", "Karakterizasyon"], ["Motiv", "Motif"], ["Symbolik", "Sembolizm"], ["Metrum", "Ölçü"], ["Interpretation", "Yorum"]],
        sentences: ["Eine Analyse der ___.", "Welche ___ ist das?", "Schreib bor ___.", "Was ist das ___?", "Eine tiefgründige ___."]
    },
    602: { 
        words: [["Kontroverse", "Tartışma/Anlaşmazlık"], ["Debatte", "Münazara"], ["Ethik", "Etik"], ["Moral", "Moral/Ahlak"], ["Standpunkt", "Bakış açısı"], ["Argumentation", "Argümantasyon"], ["Kritik", "Eleştiri"], ["Diskurs", "Söylem"]],
        sentences: ["Eine spannende ___.", "Haben Sie einen ___?", "Übe ___.", "Was ist senin ___?", "Ein öffentlicher ___."]
    },
    603: { 
        words: [["Textverständnis", "Metin anlama"], ["Quelle", "Kaynak"], ["Zitieren", "Alıntılamak"], ["Abstraktion", "Soyutlama"], ["Hypothese", "Hipotez"], ["Empirie", "Ampiri"], ["Methodik", "Metodoloji"], ["Wissenschaft", "Bilim"]],
        sentences: ["Verbessere dein ___.", "Nenne die ___.", "Richtig ___.", "Stelle bor ___.", "Wissenschaftliche ___."]
    },
    604: { 
        words: [["Reflexion", "Yansıma/Düşünme"], ["Logik", "Mantık"], ["Skepsis", "Kuşku"], ["Hinterfragen", "Sorgulama"], ["Perspektive", "Perspektif"], ["Objektivität", "Nesnellik"], ["Subjektivität", "Öznellik"], ["Urteil", "Yargı"]],
        sentences: ["Fördere senin ___.", "Benutze die ___.", "Behalte senin ___.", "Ein kritischer ___.", "Brauchen wir ___?"]
    },
    605: { 
        words: [["Diplomatie", "Diplomasi"], ["Politik", "Politika"], ["Allianz", "İttifak"], ["Konflikt", "Çatışma"], ["Frieden", "Barış"], ["Verhandlungen", "Müzakereler"], ["Globalisierung", "Küreselleşme"], ["Souveränität", "Egemenlik"]],
        sentences: ["Internationale ___.", "Löse den ___.", "Schließe bor ___.", "Strebe nach ___.", "Bewahre die ___."]
    },
    606: { 
        words: [["Medien", "Medya"], ["Manipulation", "Manipülasyon"], ["Propaganda", "Propaganda"], ["objektiv", "nesnel"], ["subjektiv", "öznel"], ["Fake News", "Sahte haber"], ["Meinungsbildung", "Fikir oluşumu"], ["Journalismus", "Gazetecilik"]],
        sentences: ["Kritische ___.", "Achte auf ___.", "Das ist ___.", "Erkenne ___.", "Seriöser ___."]
    },
    607: { 
        words: [["Management", "Yönetim"], ["Leadership", "Liderlik"], ["Unternehmenskultur", "Şirket kültürü"], ["Innovation", "İnovasyon"], ["Marktstrategie", "Piyasa stratejisi"], ["Effizienz", "Verimlilik"], ["Nachhaltigkeit", "Sürdürülebilirlik"], ["Erfolg", "Başarı"]],
        sentences: ["Modernes ___.", "Fördere die ___.", "Gelebte ___.", "Steigere die ___.", "Ein großer ___."]
    },
    608: { 
        words: [["Projekt", "Proje"], ["Zeitplan", "Zaman çizelgesi"], ["Ressourcen", "Kaynaklar"], ["Meilenstein", "Kilometre taşı"], ["Teamarbeit", "Ekip çalışması"], ["Koordination", "Koordinasyon"], ["Ergebnis", "Sonuç"], ["Präsentation", "Sunum"]],
        sentences: ["Plane das ___.", "Halte den ___.", "Nutze die ___.", "Erreiche den ___.", "Gute ___!"]
    },
    609: { 
        words: [["Kultur", "Kültür"], ["Austausch", "Alışveriş/Değişim"], ["Sensibilität", "Duyarlılık"], ["Stereotyp", "Stereotip"], ["Vorurteil", "Önyargı"], ["Verständnis", "Anlayış"], ["Toleranz", "Hoşgörü"], ["Integration", "Entegrasyon"]],
        sentences: ["Interkultureller ___.", "Zeig ___.", "Baue ___ ab.", "Haben Sie ___.", "Fördere die ___."]
    },
    610: { 
        words: [["Karriere", "Kariyer"], ["Entwicklung", "Gelişim"], ["Netzwerk", "Ağ"], ["Weiterbildung", "İleri eğitim"], ["Potenzial", "Potansiyel"], ["Motivation", "Motivasyon"], ["Zielsetzung", "Hedef belirleme"], ["Erfolg", "Başarı"]],
        sentences: ["Plane senin ___.", "Stärke dein ___.", "Nutze senin ___.", "Brauchen wir ___?", "Viel ___!"]
    },
    611: { 
        words: [["Indirekte Rede", "Dolaylı Anlatım"], ["Konjunktiv I", "Dilek kipi I"], ["Berichterstattung", "Haber bildirme"], ["behaupten", "iddia etmek"], ["erklären", "açıklamak"], ["mitteilen", "bildirmek"], ["bestätigen", "onaylamak"], ["zitieren", "alıntılamak"]],
        sentences: ["Er sagte, er ___.", "Sie meinte, es ___.", "Der Bericht ___.", "Kannst du das ___?", "Wie ___ er?"]
    },
    612: { 
        words: [["Partizip I", "Ortaç I"], ["Partizip II", "Ortaç II"], ["Attribut", "Niteleyici"], ["beschreibend", "betimleyici"], ["handlung", "eylem"], ["Zustand", "durum"], ["kompakt", "kompakt"], ["stilvoll", "şık"]],
        sentences: ["Die ___ne Sonne.", "Der ___ne Brief.", "Das ___de Kind.", "Ein ___er Stil.", "Ganz ___."]
    },
    613: { 
        words: [["Nominalisierung", "İsimleştirme"], ["Stil", "Tarz/Biçim"], ["Präzision", "Kesinlik"], ["Zusammenfassung", "Özet"], ["Sachlichkeit", "Nesnellik"], ["Inhalt", "İçerik"], ["Ausdruck", "İfade"], ["Komplexität", "Karmaşıklık"]],
        sentences: ["Benutze den ___.", "Eine gute ___.", "Klarer ___.", "Weniger ___.", "Der ___ des Textes."]
    },
    614: { 
        words: [["Passiv", "Edilgen"], ["Vorgangspassiv", "Eylem edilgeni"], ["Zustandspassiv", "Durum edilgeni"], ["werden", "olmak"], ["sein", "olmak (durum)"], ["Ersatzformen", "Yedek formlar"], ["man", "birisi/insan"], ["lassen", "bırakmak/yaptırmak"]],
        sentences: ["Das Fenster ist ___.", "Es wird ___.", "Das lässt sich ___.", "Man kann es ___.", "Die Form ist ___."]
    },
    615: { 
        words: [["Wissenschaft", "Bilim"], ["Diskurs", "Söylem"], ["Abstraktion", "Soyutlama"], ["Methodik", "Metodoloji"], ["Hypothese", "Hipotez"], ["Empirie", "Ampiri"], ["Theorie", "Teori"], ["Zitation", "Atıf"]],
        sentences: ["Wissenschaftlicher ___.", "Eine klare ___.", "Stelle bor ___.", "Überprüfe die ___.", "Richtig ___."]
    },
    616: { 
        words: [["Erörterung", "Tartışma/Makale"], ["Argumentation", "Argümantasyon"], ["Position", "Pozisyon"], ["Begründung", "Gerekçelendirme"], ["Beleg", "Kanıt/Dayanak"], ["Gegenargument", "Karşı argüman"], ["Reflexion", "Düşünme/Yansıma"], ["Fazit", "Sonuç"]],
        sentences: ["Schreib bor ___.", "Was ist senin ___?", "Gib bor ___.", "Nenne ein ___.", "Zieh bir ___."]
    },
    617: { 
        words: [["Mündlich", "Sözlü"], ["Prüfung", "Sınav"], ["Ausdruck", "İfade"], ["Fluency", "Akıcılık"], ["Vokabular", "Kelime hazinesi"], ["Reaktion", "Reaksiyon"], ["Diskussion", "Tartışma"], ["Feedback", "Geri bildirim"]],
        sentences: ["Viel Erfolg bei der ___!", "Achte auf senin ___.", "Brauchen wir ___?", "Eine gute ___.", "Danke für das ___."]
    },
    618: { 
        words: [["Hörverstehen", "Duyduğunu anlama"], ["Audiotext", "Sesli metin"], ["Notiz", "Not"], ["Konzentration", "Konsantrasyon"], ["Details", "Detaylar"], ["Hauptaussage", "Ana fikir"], ["Sprecher", "Konuşmacı"], ["Dialekt", "Lehçe"]],
        sentences: ["Übe dein ___.", "Mach bir ___.", "Brauchen wir ___?", "Verstehst du den ___?", "Was ist die ___?"]
    },
    619: { 
        words: [["Leseverstehen", "Okuduğunu anlama"], ["Text", "Metin"], ["Struktur", "Yapı"], ["Schlüsselwort", "Anahtar kelime"], ["Zusammenhang", "Bağlam"], ["Interpretation", "Yorum"], ["Sachtext", "Bilgi metni"], ["Analyse", "Analiz"]],
        sentences: ["Verbessere dein ___.", "Analysiere den ___.", "Suche das ___.", "Was ist der ___?", "Eine tiefgründige ___."]
    },
    620: { 
        words: [["Meisterschaft", "Ustalık"], ["Zertifikat", "Sertifika"], ["Erfolg", "Başarı"], ["Niveau", "Seviye"], ["Abschluss", "Mezuniyet"], ["Wissen", "Bilgi"], ["Anwendung", "Uygulama"], ["Zukunft", "Gelecek"]],
        sentences: ["Herzlichen Glückwunsch zum ___!", "Du hast das ___ erreicht.", "Viel ___ in der ___!", "Zeig dein ___.", "Die ___ beginnt jetzt."]
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
