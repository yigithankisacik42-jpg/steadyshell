import { Question, QuestionType } from "./questions";

export interface GermanTopic {
    words: string[][];
    sentences: string[];
}

const topics: { [key: number]: GermanTopic } = {
    // B1 Üniteleri (561-590)
    561: { 
        words: [["werden", "olacak"], ["Zukunft", "Gelecek"], ["Plan", "Plan"], ["Hoffnung", "Umut"], ["Sicherheit", "Güvenlik"], ["Voraussage", "Tahmin"], ["bestimmt", "kesinlikle"], ["wahrscheinlich", "muhtemelen"], ["vielleicht", "belki"], ["bald", "yakında"]],
        sentences: ["Ich ___ morgen kommen.", "Was sind deine ___e?", "Es wird ___ regnen.", "Die ___ ist wichtig.", "Hast du ___?"]
    },
    562: { 
        words: [["würde", "yapardım"], ["hätte", "sahip olurdum"], ["wäre", "olurdum"], ["könnte", "yapabilirdim"], ["sollte", "yapmalıydım"], ["müsste", "yapmak zorunda olurdum"], ["dürfte", "izin alabilirdim"], ["Traum", "Hayal"]],
        sentences: ["Ich ___ gerne einen Kaffee.", "Wenn ich Zeit ___.", "Das ___ toll.", "Eğer ___ sen olsaydım.", "Ich ___ dir helfen."]
    },
    563: { 
        words: [["wird gemacht", "yapılır"], ["wurde gebaut", "inşa edildi"], ["Passiv", "Edilgen"], ["Subjekt", "Özne"], ["Objekt", "Nesne"], ["Täter", "Fail/Yapan"], ["Vorgang", "Süreç/Eylem"], ["Zustand", "Durum"]],
        sentences: ["Die Tür ___ ge___.", "Das Haus ___ 1900 ___.", "Hier ___ nicht geraucht.", "Der Brief ___ gesendet.", "Die Hausaufgabe ___ korrigiert."]
    },
    564: { 
        words: [["sagte", "söyledi"], ["fragte", "sordu"], ["meinte", "belirtti"], ["erklärte", "açıkladı"], ["berichtet", "bildirdi"], ["indirekt", "dolaylı"], ["Zitat", "Alıntı"], ["ob", "olup olmadığını"]],
        sentences: ["Er ___, dass er kommt.", "Sie ___, ob ich Zeit habe.", "Der Lehrer ___, die Prüfung sei schwer.", "Er ___ mir alles.", "Wie ___ er das?"]
    },
    565: { 
        words: [["des", "-ın (eril/nötr)"], ["der", "-ın (dişil/çoğul)"], ["Besitz", "Mülkiyet"], ["Auto des Vaters", "Babanın arabası"], ["Haus der Mutter", "Annenin evi"], ["wegen", "yüzünden"], ["trotz", "rağmen"], ["während", "sırasında"]],
        sentences: ["Das ist das Auto ___ Vaters.", "___ des Regens bleiben wir.", "___ trotz des Fehlers.", "___ während der Reise.", "Die Farbe ___ Hauses."]
    },
    566: { 
        words: [["aufstehen", "kalkmak"], ["anfangen", "başlamak"], ["einladen", "davet etmek"], ["ausmachen", "kapatmak"], ["zumachen", "kapatmak"], ["aufmachen", "açmak"], ["mitbringen", "getirmek"], ["weggehen", "gitmek/ayrılmak"]],
        sentences: ["Ich ___ um 6 Uhr ___.", "Der Film ___t jetzt ___.", "Ich ___ dich ___.", "___ das Licht ___!", "Kannst du es ___?"]
    },
    567: { 
        words: [["verstehen", "anlamak"], ["besuchen", "ziyaret etmek"], ["erzählen", "anlatmak"], ["bestellen", "sipariş vermek"], ["gehören", "ait olmak"], ["empfehlen", "tavsiye etmek"], ["bekommen", "almak"], ["vergessen", "unutmak"]],
        sentences: ["Ich ___ dich nicht.", "Hast du mich ge___?", "Er ___ mir bir Geschichte.", "Ich ___ das Essen.", "Das ___ mir."]
    },
    568: { 
        words: [["Medien", "Medya"], ["Presse", "Basın"], ["Information", "Bilgi"], ["Berichterstattung", "Haber yapma"], ["Quelle", "Kaynak"], ["Einfluss", "Etki"], ["Meinung", "Fikir"], ["Öffentlichkeit", "Kamuoyu"]],
        sentences: ["Die ___ sind wichtig.", "Eine vertrauenswürdige ___.", "Das hat bir ___.", "Sag deine ___.", "Die ___ weiß alles."]
    },
    569: { 
        words: [["Verschmutzung", "Kirlilik"], ["Erwärmung", "Isınma"], ["Klimawandel", "İklim değişikliği"], ["CO2-Ausstoß", "Karbon salınımı"], ["Umweltschutz", "Çevreyi koruma"], ["Gefahr", "Tehlike"], ["global", "küresel"], ["Ursache", "Neden"]],
        sentences: ["Die globale ___.", "Der ___ ist real.", "Schütze die ___.", "Eine große ___.", "Was ist die ___?"]
    },
    570: { 
        words: [["Nachhaltigkeit", "Sürdürülebilirlik"], ["Ressourcen", "Kaynaklar"], ["Recycling", "Geri dönüşüm"], ["solarenergie", "Güneş enerjisi"], ["effizient", "verimli"], ["bewusst", "bilinçli"], ["ökologisch", "ekolojik"], ["Zukunft", "Gelecek"]],
        sentences: ["Wir brauchen ___.", "Schütze die ___.", "Das ist ___.", "Lebe ___.", "Handeln Sie ___."]
    },
    571: { 
        words: [["Kultur", "Kültür"], ["Gesellschaft", "Toplum"], ["Integration", "Entegrasyon"], ["Tradition", "Gelenek"], ["Heimat", "Vatan/Memleket"], ["Vielfalt", "Çeşitlilik"], ["Respekt", "Saygı"], ["Werte", "Değerler"]],
        sentences: ["Eine multikulturelle ___.", "Schätze die ___.", "Das ist meine ___.", "Haben Sie ___.", "Unsere ___."]
    },
    572: { 
        words: [["Wirtschaft", "Ekonomi"], ["Markt", "Piyasa"], ["Geld", "Para"], ["Investition", "Yatırım"], ["Gewinn", "Kar"], ["Verlust", "Zarar"], ["Handel", "Ticaret"], ["Unternehmen", "Şirket"]],
        sentences: ["Die ___ wächst.", "Ein freier ___.", "Haben Sie ___?", "Machen Sie bir ___.", "Das ___ ist groß."]
    },
    573: { 
        words: [["Meinung", "Fikir"], ["Diskussion", "Tartışma"], ["Argument", "Argüman"], ["überzeugen", "ikna etmek"], ["zustimmen", "katılmak"], ["widersprechen", "itiraz etmek"], ["Standpunkt", "Bakış açısı"], ["Kompromiss", "Uzlaşma"]],
        sentences: ["Ich bin senin ___.", "Ein starkes ___.", "Ich ___ dir zu.", "Lass uns ___.", "Finden wir bir ___."]
    },
    574: { 
        words: [["Präsentation", "Sunum"], ["Vortrag", "Konuşma/Ders"], ["Struktur", "Yapı"], ["Einleitung", "Giriş"], ["Hauptteil", "Ana bölüm"], ["Schluss", "Sonuç"], ["Publikum", "Dinleyici kitlesi"], ["Medium", "Medya/Araç"]],
        sentences: ["Halte bor ___.", "Eine klare ___.", "In der ___.", "Vielen Dank dem ___.", "Das ist das beste ___."]
    },
    575: { 
        words: [["Edebiyat", "Literatur"], ["Autor", "Yazar"], ["Roman", "Roman"], ["Gedicht", "Şiir"], ["Erzählung", "Anlatı"], ["Klassiker", "Klasik"], ["Interpretation", "Yorum"], ["Stil", "Tarz"]],
        sentences: ["Ein berühmter ___.", "Lies bir ___.", "Das ___ ist schön.", "Was ist deine ___?", "Ein eleganter ___."]
    },
    576: { 
        words: [["Wissenschaft", "Bilim"], ["Forschung", "Araştırma"], ["Analyse", "Analiz"], ["Methodik", "Metodoloji"], ["Theorie", "Teori"], ["Beweis", "Kanıt"], ["akademisch", "akademik"], ["Artikel", "Makale"]],
        sentences: ["Eine neue ___.", "Schreib einen ___.", "Das ist eine gute ___.", "Haben Sie bir ___?", "Ein ___er ___."]
    },
    577: { 
        words: [["Technologie", "Teknoloji"], ["Innovation", "İnovasyon"], ["Fortschritt", "İlerleme"], ["Digitalisierung", "Dijitalleşme"], ["Software", "Yazılım"], ["Hardware", "Donanım"], ["Netzwerk", "Ağ"], ["Daten", "Veriler"]],
        sentences: ["Moderner ___.", "Die ___ geht weiter.", "Schütze deine ___.", "Ein sicheres ___.", "Neue ___."]
    },
    578: { 
        words: [["Gesundheit", "Sağlık"], ["Ernährung", "Beslenme"], ["Vitamin", "Vitamin"], ["Protein", "Protein"], ["Kalorien", "Kalori"], ["Sport", "Spor"], ["Lebensstil", "Yaşam tarzı"], ["Prävention", "Önleme"]],
        sentences: ["Achte auf deine ___.", "Eine gesunde ___.", "Zähle die ___.", "Ein aktiver ___.", "Das ist die beste ___."]
    },
    579: { 
        words: [["Psychologie", "Psikoloji"], ["Verhalten", "Davranış"], ["Gedanken", "Düşünceler"], ["Gefühle", "Duygular"], ["Stress", "Stres"], ["Therapie", "Terapi"], ["Persönlichkeit", "Kişilik"], ["Bewusstsein", "Bilinç"]],
        sentences: ["Das menschliche ___.", "Kontrolliere senin ___.", "Hast du ___?", "Eine hilfreiche ___.", "Ein starkes ___."]
    },
    580: { 
        words: [["Geschäftsdeutsch", "İş Almancası"], ["Verhandlung", "Müzakere"], ["Auftrag", "Sipariş/Görev"], ["Angebot", "Teklif"], ["Korrespondenz", "Yazışma"], ["Meeting", "Toplantı"], ["Protokoll", "Tutanak"], ["Zusammenarbeit", "İşbirliği"]],
        sentences: ["Profesyonel bir ___.", "Führe die ___.", "Schreib bir ___.", "Wann ist das ___?", "Vielen Dank für die ___."]
    },
    581: { 
        words: [["hatte gemacht", "yapmıştı"], ["war gegangen", "gitmişti"], ["Vergangenheit", "Geçmiş"], ["Aktion", "Eylem"], ["Reihenfolge", "Sıralama"], ["zuvor", "daha önce"], ["damals", "o zamanlar"], ["bevor", "önce"]],
        sentences: ["Tevfik ___ schon ge___.", "Beşir ___ ve ___.", "Ich ___ o zamanler ___.", "Was ___ tu ___?", "___ o ___."]
    },
    582: { 
        words: [["wird gemacht haben", "yapmış olacak"], ["Zukunft", "Gelecek"], ["Abschluss", "Tamamlama"], ["Zeitpunkt", "Zaman noktası"], ["Vermutung", "Tahmin"], ["sicher", "emin"], ["bestimmt", "kesin"], ["bis dann", "o vakte kadar"]],
        sentences: ["Ich ___ es ge___ ___.", "Bis morgen ___ er ___.", "Das ___ er ___.", "___ tu ___?", "___ o ___."]
    },
    583: { 
        words: [["der", "ki (eril)"], ["die", "ki (dişil)"], ["das", "ki (nötr)"], ["den", "ki (eril -i hali)"], ["dem", "ki (eril/nötr -e hali)"], ["dessen", "ki onun"], ["deren", "ki onun (dişil)"], ["welcher", "hangisi"]],
        sentences: ["Der Mann, ___ dort steht.", "Das Buch, ___ ich lese.", "Die Frau, ___ ich helfe.", "Der Freund, ___ ich besuche.", "Das Kind, ___ Vater hier ist."]
    },
    584: { 
        words: [["weil", "çünkü"], ["da", "mademki/çünkü"], ["denn", "çünkü (bağlaç)"], ["wegen", "yüzünden"], ["aufgrund", "sebebiyle"], ["deshalb", "bu yüzden"], ["darum", "bu sebeple"], ["folglich", "sonuç olarak"]],
        sentences: ["Ich bleibe, ___ es regnet.", "___ du hier bist, bin ich froh.", "Er kommt nicht, ___ er ist krank.", "___ des Wetters.", "___ bin ich hier."]
    },
    585: { 
        words: [["Wunsch", "İstek"], ["Hoffnung", "Umut"], ["Traum", "Hayal"], ["Eğer", "Wenn"], ["Konjunktiv", "Dilek kipi"], ["Realität", "Gerçeklik"], ["erfüllen", "gerçekleştirmek"], ["sehnsucht", "özlem"]],
        sentences: ["Ich ___ mir bir ___.", "Wenn ich doch nur ___!", "Ein großer ___.", "Er ___ mir bir ___.", "Haben Sie bir ___?"]
    },
    586: { 
        words: [["Entscheidung treffen", "karar vermek"], ["Verantwortung tragen", "sorumluluk taşımak"], ["Frage stellen", "soru sormak"], ["Hilfe leisten", "yardım etmek"], ["Bescheid sagen", "haber vermek"], ["Angst haben", "korkmak"], ["Glück haben", "şanslı olmak"], ["Zeit verbringen", "vakit geçirmek"]],
        sentences: ["Ich muss eine ___ ___.", "Wer ___ die ___?", "Kann ich bor ___ ___?", "Bitte ___ mir ___.", "Ich ___ ___."]
    },
    587: { 
        words: [["jedoch", "ancak"], ["trotzdem", "yine de"], ["außerdem", "ayrıca"], ["entweder ... oder", "ya ... ya da"], ["sowohl ... als auch", "hem ... hem de"], ["weder ... noch", "ne ... ne de"], ["nicht nur ... sondern auch", "sadece ... değil aynı zamanda"], ["zwar ... aber", "gerçi ... ama"]],
        sentences: ["Ich bin müde, ___ lerne ich.", "___ kommst du ___ ich gehe.", "O ist ___ klug ___ nett.", "Ich habe ___ Zeit ___ Lust.", "Das ist ___ iyi ___ de ucuz."]
    },
    588: { 
        words: [["Sie", "Siz"], ["Du", "Sen"], ["Anrede", "Hitap"], ["Umgangssprache", "Sokak dili"], ["Höflichkeit", "Nezaket"], ["Distanz", "Mesafe"], ["Kollegialität", "Meslektaşlık"], ["Respekt", "Saygı"]],
        sentences: ["Darf ich ___ sagen?", "Benutzen Sie ___.", "Eine höfliche ___.", "Das ist ___.", "Haben Sie ___."]
    },
    589: { 
        words: [["Debatte", "Tartışma"], ["Argumentation", "Argüman sunma"], ["Pro", "Lehte"], ["Contra", "Aleyhte"], ["Struktur", "Yapı"], ["Logik", "Mantık"], ["Überzeugungskraft", "İkna gücü"], ["Fazit", "Sonuç/Özet"]],
        sentences: ["Führe bir ___.", "Was ist dein ___?", "Ein logisches ___.", "Zieh bir ___.", "Haben Sie ___."]
    },
    590: { 
        words: [["Wiederholung", "Tekrar"], ["Zusammenfassung", "Özet"], ["Erfolg", "Başarı"], ["Fortschritt", "İlerleme"], ["Prüfungsvorbereitung", "Sınav hazırlığı"], ["Wissen", "Bilgi"], ["Anwendung", "Uygulama"], ["Meisterschaft", "Ustalık"]],
        sentences: ["Machen wir bir ___.", "Schreib bir ___.", "Viel ___!", "Ein guter ___.", "Zeig dein ___."]
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
