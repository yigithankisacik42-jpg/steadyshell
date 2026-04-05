import { GrammarRule, GrammarExercise } from "./grammar";

export interface GermanUnitGrammar {
    unitId: number;
    title: string;
    rules: GrammarRule[];
    exercises: GrammarExercise[];
}

// ===== UNIT 561: GELECEK ZAMAN (FUTUR I) =====
const unit561Grammar: GermanUnitGrammar = {
    unitId: 561,
    title: "Gelecek Zaman (Futur I)",
    rules: [
        {
            id: "de-561-1",
            title: "Futur I Yapısı ve Kullanımı",
            explanation: "Almancada Futur I, gelecekteki planları, tahminleri ve sözleri ifade etmek için kullanılır. \n\n**Yapı:** [Özne] + [werden (çekimli)] + ... + [Ana Fiil (Mastar/Infinitiv)]\n\n'werden' fiili yardımcı fiil olarak cümlenin ikinci sırasında çekimlenir, asıl eylemi belirten fiil ise cümlenin en sonuna mastar halde gider.",
            table: {
                headers: ["Zamir", "Werden Çekimi", "Örnek (kommen)"],
                rows: [
                    ["Ich", "werde", "Ich werde kommen."],
                    ["Du", "wirst", "Du wirst kommen."],
                    ["Er / Sie / Es", "wird", "Er wird kommen."],
                    ["Wir", "werden", "Wir werden kommen."],
                    ["Ihr", "werdet", "Ihr werdet kommen."],
                    ["Sie / sie", "werden", "Sie werden kommen."]
                ]
            },
            examples: [
                { de: "Ich werde morgen kommen.", tr: "Yarın geleceğim." },
                { de: "Du wirst bald Deutsch sprechen.", tr: "Yakında Almanca konuşacaksın." },
                { de: "Es wird heute regnen.", tr: "Bugün yağmur yağacak. (Tahmin)" },
                { de: "Wir werden eine Reise planen.", tr: "Bir seyahat planlayacağız." },
                { de: "Ihr werdet das Ziel erreichen.", tr: "Hedefinize ulaşacaksınız." },
                { de: "Sie werden uns helfen.", tr: "Onlar bize yardım edecekler." },
                { de: "Was wirst du am Wochenende machen?", tr: "Hafta sonu ne yapacaksın?" },
                { de: "Ich werde dir immer helfen.", tr: "Sana her zaman yardım edeceğim. (Söz verme)" },
                { de: "Nächste Woche wird er 20 Jahre alt.", tr: "Gelecek hafta 20 yaşında olacak." },
                { de: "Wir werden das Problem lösen.", tr: "Sorunu çözeceğiz." }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ morgen arbeiten.", options: ["werde", "wird", "werden", "wirst"], correct: 0, explanation: "Ich için werden çekimi 'werde'dir." },
        { question: "Du ___ bald Deutsch sprechen.", options: ["wirst", "werdet", "werden", "wird"], correct: 0, explanation: "Du için werden çekimi 'wirst'dir." },
        { question: "Futur I'de asıl fiil nerede durur?", options: ["Başta", "İkinci sırada", "Sonda (Mastar)", "Sonda (Partizip II)"], correct: 2, explanation: "Fiil mastar halde en sona gider." },
        { question: "Wir ___ nach Berlin fahren.", options: ["werden", "werdet", "wird", "wirst"], correct: 0, explanation: "Wir -> werden." },
        { question: "Es ___ heute sicher regnen.", options: ["wird", "werde", "werden", "wirst"], correct: 0, explanation: "Es -> wird." },
        { question: "Ihr ___ das Spiel ___ (kazanacaksınız - gewinnen).", options: ["werdet / gewinnen", "werden / gewinnt", "wird / gewinnen", "werde / gewonnen"], correct: 0, explanation: "Ihr werdet + fiil sonda mastar." },
        { question: "Was ___ du morgen machen?", options: ["wirst", "werde", "wird", "werden"], correct: 0, explanation: "Du -> wirst." },
        { question: "Sie (plural) ___ uns besuchen.", options: ["werden", "wird", "werde", "werdet"], correct: 0, explanation: "Sie (onlar) -> werden." },
        { question: "___ du mir helfen?", options: ["Wirst", "Werde", "Werden", "Wird"], correct: 0, explanation: "Soru cümlesinde de werden çekimi özneye göredir." },
        { question: "Ich werde sogleich ___ (uyuyacağım - schlafen).", options: ["schlafen", "schlafe", "geschlafen", "schläfst"], correct: 0, explanation: "Fiil mastar (schlafen) olarak sona gider." }
    ]
};

// ===== UNIT 562: KONJUNKTIV II (DİLEK VE HAYAL KİPİ) =====
const unit562Grammar: GermanUnitGrammar = {
    unitId: 562,
    title: "Konjunktiv II",
    rules: [
        {
            id: "de-562-1",
            title: "Konjunktiv II: Nezaket, Hayal ve Koşul",
            explanation: "Konjunktiv II; gerçek olmayan durumları (hayaller), nazik ricaları ve koşullu cümleleri ifade etmek için kullanılır.\n\n**İki Ana Yapı Vardır:**\n1. **Würde-Formu:** 'würde' + Mastar (Çoğu fiil için kullanılır).\n2. **Özel Formlar:** 'sein' -> **wäre**, 'haben' -> **hätte**, modal fiiller (könnte, müsste vb.).",
            table: {
                headers: ["Zamir", "sein (wäre)", "haben (hätte)", "würden (+ Mastar)"],
                rows: [
                    ["Ich", "wäre", "hätte", "würde ..."],
                    ["Du", "wärest", "hättest", "würdest ..."],
                    ["Er/Sie/Es", "wäre", "hätte", "würde ..."],
                    ["Wir", "wären", "hätten", "würden ..."],
                    ["Ihr", "wäret", "hättet", "würdet ..."],
                    ["Sie/sie", "wären", "hätten", "würden ..."]
                ]
            },
            examples: [
                { de: "Ich würde gerne im Ausland leben.", tr: "Yurt dışında yaşamayı çok isterdim. (Hayal)" },
                { de: "Könnten Sie mir bitte helfen?", tr: "Bana yardım edebilir miydiniz lütfen? (Nezaket)" },
                { de: "Hätten Sie kurz Zeit?", tr: "Biraz vaktiniz olur muydu?" },
                { de: "Wenn ich reich wäre, würde ich ein Haus kaufen.", tr: "Eğer zengin olsaydım, bir ev alırdım." },
                { de: "Ich wäre gerne jetzt am Strand.", tr: "Şu an sahilde olmayı isterdim." },
                { de: "An deiner Stelle würde ich mehr lernen.", tr: "Senin yerinde olsam daha çok çalışırdım. (Tavsiye)" },
                { de: "Wenn es nicht regnen würde, gingen wir spazieren.", tr: "Eğer yağmur yağmasaydı gezmeye giderdik." },
                { de: "Ich hätte gerne einen Kaffee.", tr: "Bir kahve alabilir miydim? (Sipariş/Nezaket)" },
                { de: "Müsste ich heute nicht arbeiten, wäre ich froh.", tr: "Bugün çalışmak zorunda olmasaydım mutlu olurdum." },
                { de: "Es wäre schön, wenn du kämst.", tr: "Gelsen çok güzel olurdu." }
            ]
        }
    ],
    exercises: [
        { question: "Wenn ich Zeit ___, würde ich kommen.", options: ["habe", "hätte", "hätten", "hatte"], correct: 1, explanation: "Haben fiilinin Konjunktiv II hali 'hätte'dir." },
        { question: "Ich ___ gerne ein Eis.", options: ["hätte", "bin", "werde", "hast"], correct: 0, explanation: "Nezaketli isteklerde 'hätte gerne' kullanılır." },
        { question: "___ Sie mir bitte helfen? (Können)", options: ["Kannst", "Konnten", "Könnten", "Könnte"], correct: 2, explanation: "Nezaketli soru: Könnten Sie...?" },
        { question: "An deiner Stelle ___ ich mehr schlafen.", options: ["würde", "werde", "bin", "ist"], correct: 0, explanation: "Tavsiyelerde 'würde + mastar' kullanılır." },
        { question: "Wenn ich ein Vogel ___ (olsaydım), würde ich fliegen.", options: ["bin", "war", "wäre", "wären"], correct: 2, explanation: "Sein -> wäre." },
        { question: "Wir ___ gerne reisen.", options: ["würden", "werden", "wären", "hätten"], correct: 0, explanation: "Hayal/Dilek: würden + reisen." },
        { question: "Hättest du gerne ___ (para - Geld)?", options: ["Geld", "das Geld", "einem Geld", "Geld es"], correct: 0, explanation: "Belirsiz isim." },
        { question: "Es ___ toll, wenn wir uns sehen.", options: ["wäre", "ist", "war", "bin"], correct: 0, explanation: "Es wäre toll = Harika olurdu." },
        { question: "Ihr ___ (olsaydınız) gerne hier.", options: ["wäret", "wärest", "wären", "wäre"], correct: 0, explanation: "Ihr -> wäret." },
        { question: "___ du mir das Buch geben? (Würden)", options: ["Würdest", "Würde", "Würden", "Werdet"], correct: 0, explanation: "Du -> würdest." }
    ]
};

// ===== UNIT 563: PASSIV YAPI (EDİLGEN) =====
const unit563Grammar: GermanUnitGrammar = {
    unitId: 563,
    title: "Passiv Yapı",
    rules: [
        {
            id: "de-563-1",
            title: "Vorgangspassiv: edilgen yapı",
            explanation: "Almancada eylemi yapan değil, eylemin kendisi veya etkilenen nesne önemliyse pasif yapı kullanılır.\n\n**Yapı:** [Nesne (artık özne)] + [werden (çekimli)] + ... + [Partizip II (fiilin 3. hali)]\n\nEylemi yapanı belirtmek istersek **'von + Dativ'** kullanırız.",
            table: {
                headers: ["Zaman", "Formül", "Örnek"],
                rows: [
                    ["Präsens", "wird + Partizip II", "Das Haus wird gebaut."],
                    ["Präteritum", "wurde + Partizip II", "Das Haus wurde gebaut."],
                    ["Perfekt", "ist ... worden", "Das Haus ist gebaut worden."]
                ]
            },
            examples: [
                { de: "Das Haus wird gebaut.", tr: "Ev inşa ediliyor." },
                { de: "Der Brief wurde gestern geschrieben.", tr: "Mektup dün yazıldı." },
                { de: "Das Auto wird von dem Mechaniker repariert.", tr: "Araba tamirci tarafından tamir ediliyor." },
                { de: "Wir werden informiert.", tr: "Bilgilendiriliyoruz." },
                { de: "Hier wird Deutsch gesprochen.", tr: "Burada Almanca konuşulur." },
                { de: "Die Tür wird her akşam abgeschlossen.", tr: "Kapı her akşam kilitleniyor." },
                { de: "Das Video ist hochgeladen worden.", tr: "Video yüklendi. (Perfekt Passiv)" },
                { de: "Wann wird das Essen serviert?", tr: "Yemek ne zaman servis edilecek?" },
                { de: "Die Patienten werden von den Ärzten untersucht.", tr: "Hastalar doktorlar tarafından muayene ediliyor." },
                { de: "Alles wurde gut organisiert.", tr: "Her şey iyi organize edildi." }
            ]
        }
    ],
    exercises: [
        { question: "Das Haus ___ gebaut.", options: ["wird", "ist", "hat", "werden"], correct: 0, explanation: "Pasif cümlede 'werden' (şimdiki zaman için wird) kullanılır." },
        { question: "Der Brief ___ gestern ___.", options: ["wurde / geschrieben", "wird / schreiben", "ist / geschrieben", "hat / geschrieben"], correct: 0, explanation: "Geçmişte pasif: wurde + Partizip II." },
        { question: "Der Kuchen wird ___ (tarafından) Oma gebacken.", options: ["von", "durch", "bei", "mit"], correct: 0, explanation: "Pasif cümlede eylemi yapan kişi 'von + Dativ' ile belirtilir." },
        { question: "Hier ___ Deutsch ___.", options: ["wird / gesprochen", "werden / gesprochen", "ist / sprechen", "wird / spricht"], correct: 0, explanation: "Tekil (Almanca dili) -> wird." },
        { question: "Die Autos ___ repariert.", options: ["werden", "wird", "wirst", "bin"], correct: 0, explanation: "Plural -> werden." },
        { question: "Ich ___ gerufen.", options: ["werde", "wird", "wirst", "werden"], correct: 0, explanation: "Ich -> werde." },
        { question: "Was ___ oradan ___ (oradan ne alınıyor)?", options: ["wird / gekauft", "werden / gekauft", "ist / kaufen", "hat / gekauft"], correct: 0, explanation: "Tekil -> wird." },
        { question: "Die Tür ___ abgeschlossen ___ (Perfekt Passiv).", options: ["ist / worden", "wird / werden", "hat / worden", "ist / werden"], correct: 0, explanation: "Perfekt Passiv yapısı: sein + Partizip II + worden." },
        { question: "Ihr ___ erwartet.", options: ["werdet", "werden", "wird", "wirst"], correct: 0, explanation: "Ihr -> werdet." },
        { question: "Alles ___ (edilmişti - Präteritum) erledigt.", options: ["wurde", "wird", "ist", "hat"], correct: 0, explanation: "Präteritum pasif: wurde." }
    ]
};

// ===== UNIT 564: DOLAYLI ANLATIM (INDIREKTE REDE - GİRİŞ) =====
const unit564Grammar: GermanUnitGrammar = {
    unitId: 564,
    title: "Dolaylı Anlatım",
    rules: [
        {
            id: "de-564-1",
            title: "Indirekte Rede: Konjunktiv I ve Alternatifler",
            explanation: "Başkasının söylediği bir sözü aktarırken kullanılır. \n\n**İki Yol Vardır:**\n1. **Bağlaçlı:** 'dass' bağlacı yardımıyla yan cümle kurarak (Günlük dilde yaygın).\n2. **Konjunktiv I:** Resmî dilde, haberlerde ve akademik yazışmalarda kullanılır. En belirgin hali 3. tekil şahıstaki **-e** takısıdır (er habe, er sei, er komme).",
            table: {
                headers: ["Zaman", "Doğrudan (Direkt)", "Dolaylı (Indirekt - dass)", "Dolaylı (Konjunktiv I)"],
                rows: [
                    ["Präsens", "Er sagt: 'Ich bin krank.'", "Er sagt, dass er krank ist.", "Er sagt, o sei krank."],
                    ["Perfekt", "Er sagt: 'Ich habe gegessen.'", "Er sagt, dass er gegessen hat.", "Er sagt, o habe gegessen."]
                ]
            },
            examples: [
                { de: "Er sagt, dass er keine Zeit hat.", tr: "Vaktinin olmadığını söylüyor." },
                { de: "Der Arzt meinte, ben solle mehr schlafen.", tr: "Doktor daha çok uyumam gerektiğini söyledi." },
                { de: "Sie fragt, ob ich kommen kann.", tr: "Gelip gelemeyeceğimi soruyor." },
                { de: "Er behauptet, o sei unschuldig.", tr: "Masum olduğunu iddia ediyor. (Konjunktiv I)" },
                { de: "Man sagt, das Wetter werde morgen güzel.", tr: "Yarın havanın güzel olacağı söyleniyor." },
                { de: "Er antwortete, o habe das nicht gewusst.", tr: "Bunu bilmediğini cevapladı." },
                { de: "Die Zeitung schreibt, der Minister komme yarın.", tr: "Gazete, bakanın yarın geleceğini yazıyor." },
                { de: "Sie meinte, dass everything in Ordnung sei.", tr: "Her şeyin yolunda olduğunu (belirtti) söyledi." },
                { de: "Lehrer sagt, wir müssten daha çok lernen.", tr: "Öğretmen daha çok çalışmamız gerektiğini söylüyor." },
                { de: "Er fragt, wo ich wohnen würde.", tr: "Nerede yaşadığımı soruyor. (Konjunktiv II ile aktarım)" }
            ]
        }
    ],
    exercises: [
        { question: "Er sagt: 'Ich habe Zeit.' -> Er sagt, dass er Zeit ___.", options: ["hat", "hätte", "habt", "hatte"], correct: 0, explanation: "Dass bağlacı ile aktarırken fiil çekimli halde sona gider." },
        { question: "Konjunktiv I (3. tekil) yapmak için hangi harf eklenir?", options: ["-e", "-en", "-t", "-st"], correct: 0, explanation: "Konjunktiv I'de er/sie/es genelde -e takısı alır (habe, sei, werde)." },
        { question: "Er sagt, o ___ (olsun - sei) müde.", options: ["sei", "ist", "war", "bin"], correct: 0, explanation: "Sein fiilinin Konjunktiv I'i 'sei'dir." },
        { question: "Sie fragt, ___ (eğer/olup olmadığını) ich komme.", options: ["ob", "dass", "weil", "wenn"], correct: 0, explanation: "Dolaylı sorularda 'ob' kullanılır." },
        { question: "Der Chef meint, wir ___ (çalışmalıyız) mehr.", options: ["müssen", "sollen", "können", "wollen"], correct: 1, explanation: "Başkasına ait görev aktarımında 'sollen' sık kullanılır." },
        { question: "Er behauptet, o ___ (sahip olsun - habe) her şeyi yapabilir.", options: ["habe", "hat", "hätte", "hatte"], correct: 0, explanation: "Haben fiili Konjunktiv I: habe." },
        { question: "Haberlerde dolaylı anlatım için hangi kip tercih edilir?", options: ["Konjunktiv I", "Konjunktiv II", "Perfekt", "Präteritum"], correct: 0, explanation: "Konjunktiv I haber dilidir." },
        { question: "Er fragt, ___ (nerede) du wohnst.", options: ["wo", "wer", "was", "wie"], correct: 0, explanation: "Soru kelimesi ile başlayan dolaylı soru." },
        { question: "Sie sagt, dass sie ___ (geleceğini - kommen wird).", options: ["kommen wird", "wird kommen", "kommt", "kame"], correct: 0, explanation: "Dass cümlenizde fiil sonda." },
        { question: "Er meint, o ___ (gitmeli - gehe) nach Hause.", options: ["gehe", "geht", "ging", "gegangen"], correct: 0, explanation: "Gehen Konjunktiv I: gehe." }
    ]
};

// ===== UNIT 565: GENITIV HALİ (TAMAMLAYAN HAL) =====
const unit565Grammar: GermanUnitGrammar = {
    unitId: 565,
    title: "Genitiv Hali",
    rules: [
        {
            id: "de-565-1",
            title: "Genitiv: Sahiplik ve Aidiyet",
            explanation: "Genitiv ismin -in halidir. B1 seviyesinde sadece sahiplik değil, belirli edatlarla kullanımı da önemlidir.\n\n**Kurallar:**\n1. **Maskulin/Neutral:** des + s/es (tek heceliler genelde -es alır: des Tages).\n2. **Feminin/Plural:** der.",
            table: {
                headers: ["Cinsiyet", "Genitiv Artikel", "İsim Eki", "Örnek"],
                rows: [
                    ["Maskulin (der)", "des", "-(e)s", "des Vaters"],
                    ["Neutral (das)", "des", "-(e)s", "des Hauses"],
                    ["Feminin (die)", "der", "-", "der Mutter"],
                    ["Plural (die)", "der", "-", "der Kinder"]
                ]
            },
            examples: [
                { de: "Das Auto des Vaters.", tr: "Babanın arabası." },
                { de: "Die Farbe der Blumen.", tr: "Çiçeklerin rengi." },
                { de: "Wegen des Regens bleiben wir hier.", tr: "Yağmurdan dolayı burada kalıyoruz. (Edatlı kullanım)" },
                { de: "Während der Reise habe ich viel gelesen.", tr: "Seyahat sırasında çok okudum." },
                { de: "Trotz der Kälte geht er spazieren.", tr: "Soğuğa rağmen yürüyüşe çıkıyor." },
                { de: "Statt des Autos nimmt o den Zug.", tr: "Araba yerine treni alıyor." },
                { de: "Das Ende des Films war traurig.", tr: "Filmin sonu üzücüydü." },
                { de: "Die Zukunft unserer Kinder ist importante.", tr: "Çocuklarımızın geleceği önemlidir." },
                { de: "Das Büro des Chefs ist im ersten Stock.", tr: "Patronun ofisi birinci katta." },
                { de: "Der Geschmack der Suppe ist gut.", tr: "Çorbanın tadı iyi." }
            ]
        }
    ],
    exercises: [
        { question: "Das Ende ___ (haftanın - die Woche).", options: ["der Woche", "des Wochen", "die Woche", "den Woche"], correct: 0, explanation: "Die (dişil) Genitiv'de 'der' olur." },
        { question: "Wegen ___ (yağmurun - der Regen).", options: ["des Regens", "der Regen", "dem Regen", "den Regens"], correct: 0, explanation: "Der (eril) Genitiv'de 'des ...-s' olur." },
        { question: "Trotz ___ (sıcağa - die Hitze) rağmen.", options: ["der Hitze", "die Hitze", "des Hitzes", "den Hitze"], correct: 0, explanation: "Die -> der." },
        { question: "Der Name ___ (çocuğun - das Kind).", options: ["des Kindes", "der Kind", "den Kindes", "das Kind"], correct: 0, explanation: "Das -> des ...-es." },
        { question: "Statt ___ (çay yerine - der Tee).", options: ["des Tees", "der Tee", "dem Tee", "den Tee"], correct: 0, explanation: "Der -> des." },
        { question: "Während ___ (gecenin - die Nacht).", options: ["der Nacht", "die Nacht", "des Nachto", "den Nacht"], correct: 0, explanation: "Die -> der." },
        { question: "Die Blätter ___ (ağaçların - die Bäume).", options: ["der Bäume", "den Bäumen", "des Baumes", "die Bäume"], correct: 0, explanation: "Plural -> der." },
        { question: "Genitiv'de 'eril' ve 'nötr' isimler sonuna ne alır?", options: ["-s veya -es", "-n", "-r", "hiçbir şey"], correct: 0, explanation: "Maskulin ve Neutral isimler takı alır." },
        { question: "Das Spielzeug ___ (bebeğin - das Baby).", options: ["des Babys", "der Babys", "dem Baby", "das Baby"], correct: 0, explanation: "Das (yalın söylenmiş hali) -> des." },
        { question: "Die Entscheidung ___ (patronun - der Chef).", options: ["des Chefs", "der Chef", "dem Chef", "den Chef"], correct: 0, explanation: "Der -> des." }
    ]
};

// ===== UNIT 566: PHRASAL VERBS 1 =====
// ===== UNIT 566: AYRILABİLEN FİİLLER (TRENNBARE VERBEN) =====
const unit566Grammar: GermanUnitGrammar = {
    unitId: 566,
    title: "Ayrılabilen Fiiller",
    rules: [
        {
            id: "de-566-1",
            title: "Trennbare Verben Yapısı",
            explanation: "Almancada bazı fiillerin başında bir ön ek (Präfix) bulunur. Cümle kurulurken bu ön ek fiilden ayrılır ve cümlenin en sonuna gider. Mastar haldeyken birleşiktirler.\n\n**Yaygın ön ekler:** auf-, an-, mit-, ein-, aus-, zu-, ab-, vor-.",
            table: {
                headers: ["Fiil", "Anlamı", "Örnek Cümle"],
                rows: [
                    ["aufstehen", "kalkmak", "Ich stehe um 7 Uhr auf."],
                    ["anrufen", "aramak (tel)", "Ben rufe dich an."],
                    ["mitkommen", "birlikte gelmek", "Kommst du mit?"],
                    ["einkaufen", "alışveriş yapm.", "Er kauft im Supermarkt ein."],
                    ["fernsehen", "TV izlemek", "Wir sehen abends fern."]
                ]
            },
            examples: [
                { de: "Ich stehe um 7 Uhr auf.", tr: "Saat 7'de kalkarım." },
                { de: "Er kauft im Supermarkt ein.", tr: "Süpermarkette alışveriş yapıyor." },
                { de: "Wir machen das Fenster zu.", tr: "Pencereyi kapatıyoruz. (zumachen)" },
                { de: "Rufen Sie mich morgen an?", tr: "Beni yarın arar mısınız?" },
                { de: "Das Konzert fängt um 20 Uhr an.", tr: "Konser saat 20'de başlıyor. (anfangen)" },
                { de: "Sie bereitet das Essen vor.", tr: "Yemeği hazırlıyor. (vorbereiten)" },
                { de: "Bringst du etwas zum Trinken mit?", tr: "İçecek bir şeyler getirir misin? (mitbringen)" },
                { de: "Ich ziehe mich an.", tr: "Giyiniyorum. (anziehen)" },
                { de: "Er hört mit dem Rauchen auf.", tr: "Sigarayı bırakıyor. (aufhören)" },
                { de: "Die Çocuklar räumen das Zimmer auf.", tr: "Çocuklar odayı topluyorlar. (aufräumen)" }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ das Fenster ___ (kapatıyorum - zumachen).", options: ["mache / zu", "zumache / -", "macht / zu", "mache / zumachen"], correct: 0, explanation: "Trennbare Verben: çekimli fiil 2. sırada, ön ek en sonda." },
        { question: "Wann ___ du morgens ___ (kalkarsın - aufstehen)?", options: ["stehst / auf", "aufstehst / -", "steht / auf", "aufsteht / -"], correct: 0, explanation: "Soru cümlesinde de yapı aynıdır." },
        { question: "Wir ___ heute Abend ___ (TV izliyoruz - fernsehen).", options: ["sehen / fern", "fernsehen / -", "sieht / fern", "sehen / fernsehen"], correct: 0, explanation: "Wir -> sehen ... fern." },
        { question: "Er ___ mich morgen ___ (arar - anrufen).", options: ["ruft / an", "anruft / -", "ruft / anrufen", "rufe / an"], correct: 0, explanation: "Er -> ruft ... an." },
        { question: "Kommst du ___ (geliyor musun - mitkommen)?", options: ["mit", "zu", "auf", "an"], correct: 0, explanation: "Mitkommen -> Kommst du mit?" },
        { question: "___ du deine Hausaufgaben ___ (hazırlıyor musun - vorbereiten)?", options: ["Bereitest / vor", "Vorbereitest / -", "Bereitet / vor", "Bereitest / vorbereiten"], correct: 0, explanation: "Du -> bereitest ... vor." },
        { question: "Hangi ön ek ayrılabilir DEĞİLDİR?", options: ["auf-", "be-", "mit-", "ein-"], correct: 1, explanation: "be- ön eki asla ayrılmaz." },
        { question: "Ich ___ den Rock ___ (deniyorum - anprobieren).", options: ["probiere / an", "anprobiere / -", "probiert / an", "anprobiert / -"], correct: 0, explanation: "Anprobieren -> probiere an." },
        { question: "Sie ___ das Licht ___ (açıyor - anmachen).", options: ["macht / an", "anmacht / -", "machen / an", "macht / aus"], correct: 0, explanation: "Anmachen (açmak)." },
        { question: "Bitte ___ Sie ___ (lütfen dinleyin - zuhören)!", options: ["hören / zu", "zuhören / -", "hört / zu", "hören / auf"], correct: 0, explanation: "Emir cümlesinde de ayrılır." }
    ]
};

// ===== UNIT 567: AYRIŞMAYAN FİİLLER (UNTRENNBARE VERBEN) =====
const unit567Grammar: GermanUnitGrammar = {
    unitId: 567,
    title: "Ayrılamayan Fiiller",
    rules: [
        {
            id: "de-567-1",
            title: "Untrennbare Verben Kuralları",
            explanation: "Bu fiillerin başındaki ön ekler asla fiilden ayrılmazlar. Ayrıca bu fiiller Partizip II (geçmiş zaman) formunda 'ge-' takısı almazlar.\n\n**Ayrılmayan ön ekler:** be-, ge-, er-, ver-, zer-, ent-, emp-, miss-.",
            table: {
                headers: ["Ön Ek", "Fiil", "Anlamı", "Örnek"],
                rows: [
                    ["be-", "besuchen", "ziyaret etmek", "Ich besuche dich."],
                    ["ver-", "verstehen", "anlamak", "Ich verstehe dich."],
                    ["er-", "erzählen", "anlatmak", "Er erzählt eine Story."],
                    ["ent-", "entscheiden", "karar vermek", "Wir entscheiden das."],
                    ["ge-", "gehören", "ait olmak", "Das gehört mir."]
                ]
            },
            examples: [
                { de: "Ich verstehe die Regel.", tr: "Kuralı anlıyorum." },
                { de: "Er hat das Haus besucht.", tr: "Evi ziyaret etti. (ge- takısı yok!)" },
                { de: "Wir bezahlen die Rechnung.", tr: "Hesabı ödüyoruz. (bezahlen)" },
                { de: "Zerbrechen Sie das Glas nicht.", tr: "Camı kırmayın. (zerbrechen)" },
                { de: "Ich empfehle dieses Restaurant.", tr: "Bu restoranı tavsiye ediyorum. (empfehlen)" },
                { de: "Wann beginnt der Kurs?", tr: "Kurs ne zaman başlıyor? (beginnen)" },
                { de: "Hast du dich schon entschieden?", tr: "Çoktan karar verdin mi? (entscheiden)" },
                { de: "Er hat alles vergessen.", tr: "Her şeyi unuttu. (vergessen)" },
                { de: "Sie erwartet ein Paket.", tr: "Bir paket bekliyor. (erwarten)" },
                { de: "Die Polizei untersuchte den Fall.", tr: "Polis olayı inceledi. (untersuchen)" }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ den Text (anlıyorum - verstehen).", options: ["verstehe", "stehe ver", "versteht", "steht ver"], correct: 0, explanation: "Verstehen ayrılamaz." },
        { question: "Aşağıdakilerden hangisi AYRILMAZ ön ektir?", options: ["auf-", "be-", "mit-", "an-"], correct: 1, explanation: "be- ön eki asla ayrılmaz." },
        { question: "Er hat mich ___ (ziyaret etti - besuchen).", options: ["besucht", "gebesucht", "besuchen", "gebesuchen"], correct: 0, explanation: "Untrennbare fiiller Partizip II'de ge- almaz." },
        { question: "Wir ___ die Reise (planlıyoruz - planen).", options: ["planen", "beplanen", "geplanen", "verplanen"], correct: 0, explanation: "Burada düz fiil kullanımı." },
        { question: "Ünite 567'deki kurala göre 'vergessen' fiilinin çekimi nasıldır?", options: ["Ich vergesse", "Ich gesse ver", "Ich vergesst", "Ich gesse"], correct: 0, explanation: "Ayrılmaz." },
        { question: "Zerbrechen fiili ne anlama gelir?", options: ["Kırmak (parçalamak)", "Tamir etmek", "Satmak", "Almak"], correct: 0, explanation: "zer- parçalama bildirir." },
        { question: "Hangi ön ek Partizip II'de 'ge-' almasını ENGELLER?", options: ["ver-", "auf-", "an-", "mit-"], correct: 0, explanation: "Ayrılmayan ekler ge- almaz." },
        { question: "Ich ___ bir hediye ___ (alıyorum - bekommen).", options: ["bekomme / -", "komme be / -", "bekommt / -", "gekommen / -"], correct: 0, explanation: "Ayrılmaz." },
        { question: "Entscheiden fiilinin Partizip II hali nedir?", options: ["entschieden", "geentschieden", "geentscheidt", "entscheidet"], correct: 0, explanation: "Düzensiz ve ge- almaz." },
        { question: "Er ___ mir bir hikaye (anlatıyor - erzählen).", options: ["erzählt", "zählt er", "erzählen", "geerzählt"], correct: 0, explanation: "er- ayrılmaz." }
    ]
};

// ===== UNIT 568: FİKİR BELİRTME VE MEDYA =====
const unit568Grammar: GermanUnitGrammar = {
    unitId: 568,
    title: "Fikir Belirtme",
    rules: [
        {
            id: "de-568-1",
            title: "Meiner Meinung nach ve Inversion",
            explanation: "Kendi görüşünüzü ifade ederken 'Meiner Meinung nach' (Bence/Benim görüşüme göre) kalıbı çok sık kullanılır. Bu kalıp cümlenin ilk öğesi kabul edildiği için, hemen ardından fiil gelmelidir (Inversion).",
            table: {
                headers: ["Kalıp", "Anlamı", "Yapı"],
                rows: [
                    ["Meiner Meinung nach...", "Benim görüşüme göre...", "Kalıp + Fiil + Özne"],
                    ["Ich denke, dass...", "Düşünüyorum ki...", "Yan Cümle (fiil sonda)"],
                    ["Ich finde, dass...", "Bence...", "Yan Cümle (fiil sonda)"],
                    ["Ich bin der Meinung, dass...", "Görüşündeyim ki...", "Yan Cümle (fiil sonda)"]
                ]
            },
            examples: [
                { de: "Meiner Meinung nach ist das Internet nützlich.", tr: "Bana göre internet faydalıdır." },
                { de: "Meiner Meinung nach hast du recht.", tr: "Bana göre haklısın." },
                { de: "Ich denke, dass das Handy wichtig ist.", tr: "Cep telefonunun önemli olduğunu düşünüyorum." },
                { de: "Ich finde, dass du gut singst.", tr: "Bence iyi şarkı söylüyorsun." },
                { de: "Ich bin der Meinung, dass wir mehr Sport machen sollten.", tr: "Daha fazla spor yapmamız gerektiği görüşündeyim." },
                { de: "Meiner Meinung nach ist deutsche Grammatik schwer.", tr: "Bana göre Almanca grameri zordur." },
                { de: "Was ist deine Meinung zu diesem Film?", tr: "Bu film hakkında görüşün nedir?" },
                { de: "Meiner Meinung nach spielt o gut Fußball.", tr: "Bana göre o iyi futbol oynuyor." },
                { de: "Glaubst du, dass es regnen wird?", tr: "Yağmur yağacağına inanıyor musun?" },
                { de: "Meiner Meinung nach braucht man kein Auto.", tr: "Bana göre bir arabaya ihtiyaç yok." }
            ]
        }
    ],
    exercises: [
        { question: "Meiner Meinung nach ___ das Internet wichtig.", options: ["ist", "dass", "ich", "bin"], correct: 0, explanation: "Kalıptan hemen sonra fiil gelir." },
        { question: "Ich denke, ___ du recht hast.", options: ["dass", "weil", "ob", "nach"], correct: 0, explanation: "Fikir cümlelerinde 'dass' (ki) bağlacı kullanılır." },
        { question: "Meiner Meinung nach ___ biz her şeyi yapabiliriz.", options: ["können wir", "wir können", "dass wir", "nach wir"], correct: 0, explanation: "Inversion (fiil özne yer değişir)." },
        { question: "Was ist ___ Meinung?", options: ["deine", "dein", "meine", "mein"], correct: 0, explanation: "Die Meinung (dişil) -> deine." },
        { question: "Ich bin ___ Meinung, dass...", options: ["der", "die", "das", "den"], correct: 0, explanation: "Genitiv yapı: der Meinung sein." },
        { question: "Meiner Meinung nach ___ o bugün gelmeyecek.", options: ["kommt er", "er kommt", "dass", "nicht"], correct: 0, explanation: "Fiil + Özne." },
        { question: "Dass bağlacı kullanılan cümlede fiil nerededir?", options: ["En sonda", "İkinci sırada", "Başta", "Özneden sonra"], correct: 0, explanation: "Dass bir yan cümle (Nebensatz) bağlacıdır." },
        { question: "Ich finde, ___ o çok çalışıyor.", options: ["dass", "weil", "wenn", "ob"], correct: 0, explanation: "Bence ... ki." },
        { question: "Meiner Meinung nach ___ biz daha çok su içmeliyiz.", options: ["sollten wir", "wir sollten", "nach", "dass"], correct: 0, explanation: "Fiil + Özne." },
        { question: "Glaubst du, dass o ___? (geliyor - kommt)", options: ["kommt", "ist kommen", "komme", "kommen"], correct: 0, explanation: "Dass cümlesi -> fiil sonda." }
    ]
};

// ===== UNIT 569: ÇEVRE VE NEDEN BELİRTME (WEIL / DA) =====
const unit569Grammar: GermanUnitGrammar = {
    unitId: 569,
    title: "Neden Belirtme (Weil, Da)",
    rules: [
        {
            id: "de-569-1",
            title: "Weil ve Da Bağlaçları",
            explanation: "'Weil' ve 'Da' bağlaçları her ikisi de 'çünkü / -dığı için' anlamına gelir ve neden bildirir. İkisi de yan cümle (Nebensatz) kurar, yani çekimli fiil cümlenin en sonuna gider.\n\n**Fark:** 'Da' cümlesi genellikle cümlenin başında yer alır ve bilinen bir nedeni vurgular.",
            table: {
                headers: ["Bağlaç", "Anlamı", "Fiil Konumu"],
                rows: [
                    ["weil", "çünkü", "En sonda"],
                    ["da", "-dığı için / mademki", "En sonda"],
                    ["denn", "çünkü", "2. sırada (0. bağlaç)"]
                ]
            },
            examples: [
                { de: "Wir müssen handeln, weil das Klima sich ändert.", tr: "Harekete geçmeliyiz çünkü iklim değişiyor." },
                { de: "Da es regnet, bleiben wir zu Hause.", tr: "Yağmur yağdığı için evde kalıyoruz." },
                { de: "Ich bin müde, weil ich viel gearbeitet habe.", tr: "Yorgunum çünkü çok çalıştım." },
                { de: "Da o krank ist, kommt er heute nicht.", tr: "O hasta olduğu için bugün gelmiyor." },
                { de: "Recyceln ist gut, weil es die Umwelt schützt.", tr: "Geri dönüşüm iyidir çünkü çevreyi korur." },
                { de: "Ich komme nicht, weil ben keine Zeit habe.", tr: "Gelmiyorum çünkü vaktim yok." },
                { de: "Da du schon da bist, können wir anfangen.", tr: "Madem geldin, başlayabiliriz." },
                { de: "Er spart Energie, weil o Geld sparen möchte.", tr: "Enerji tasarrufu yapıyor çünkü para biriktirmek istiyor." },
                { de: "Ich lerne Deutsch, weil ich in Deutschland leben will.", tr: "Almanca öğreniyorum çünkü Almanya'da yaşamak istiyorum." },
                { de: "Da es schon spät ist, gehe ich schlafen.", tr: "Çok geç olduğu için uyumaya gidiyorum." }
            ]
        }
    ],
    exercises: [
        { question: "Ich esse, ___ ich Hunger habe.", options: ["weil", "denn", "aber", "und"], correct: 0, explanation: "Fiil sonda olduğu için 'weil' gerekir. (Denn olsaydı fiil 2. sırada olurdu)." },
        { question: "___ es regnet, nehmen wir einen Schirm.", options: ["Da", "Denn", "Weil (ortada olsaydı)", "Aber"], correct: 0, explanation: "Cümle başında 'da' çok sık kullanılır." },
        { question: "Weil bağlacı ile kurulan cümlede fiil nerededir?", options: ["En sonda", "2. sırada", "Başta", "Özneden sonra"], correct: 0, explanation: "Yan cümle kuralı; fiil sonda." },
        { question: "Ich lerne viel, ___ ich bir sınavım var (fiil sonda değil).", options: ["denn", "weil", "da", "dass"], correct: 0, explanation: "Bu soruda fiil 2. sırada -> denn." },
        { question: "Da o krank ___ (olduğu için), kommt er nicht.", options: ["ist", "wird", "bin", "war"], correct: 0, explanation: "Fiil en sona gider." },
        { question: "Wir schützen die Natur, ___ sie wichtig ist.", options: ["weil", "da", "denn", "ob"], correct: 0, explanation: "Çünkü." },
        { question: "Da wir kein Auto ___ (sahip olmadığımız için), fahren wir Bus.", options: ["haben", "hast", "hätte", "hatte"], correct: 0, explanation: "Yan cümle fiili sonda." },
        { question: "Er kommt bugün geç, weil o viel Arbeit ___ (sahibi - hat).", options: ["hat", "ist", "bin", "wird"], correct: 0, explanation: "Hat sonda." },
        { question: "___ du haklısın (da du recht hast), macheden we bunu bence.", options: ["Da", "Weil", "Denn", "So"], correct: 0, explanation: "Mademki / ...için." },
        { question: "Ich bleibe zu Hause, weil ich müde ___.", options: ["bin", "ist", "bist", "sind"], correct: 0, explanation: "Ich için fiil çekimi sonda." }
    ]
};

// ===== UNIT 570: SÜRDÜRÜLEBİLİRLİK VE AMAÇ CÜMLELERİ (UM... ZU / DAMIT) =====
const unit570Grammar: GermanUnitGrammar = {
    unitId: 570,
    title: "Amaç Cümleleri (Um...zu, Damit)",
    rules: [
        {
            id: "de-570-1",
            title: "Um...zu ve Damit Arasındaki Fark",
            explanation: "Bir amacı ifade etmek için iki yapı kullanılır:\n1. **Um... zu:** Ana cümlenin öznesi ile amaç cümlesinin öznesi AYNI ise kullanılır. Özne tekrar edilmez, fiil mastar (zu + Infinitiv) halde sona gider.\n2. **Damit:** Özneler FARKLI ise (veya pekiştirmek için) kullanılır. Bu bir bağlaçtır ve fiil çekimli halde sona gider.",
            table: {
                headers: ["Yapı", "Kullanım Şartı", "Örnek"],
                rows: [
                    ["um ... zu", "Özneler aynı", "Ich spare Geld, um zu reisen."],
                    ["damit", "Özneler farklı/aynı", "Ich spare Geld, damit wir reisen."],
                    ["zu + Inf.", "Kısaltılmış yapı", "Ich versuche, zu helfen."]
                ]
            },
            examples: [
                { de: "Wir recyceln, um die Umwelt zu schützen.", tr: "Çevreyi korumak için geri dönüşüm yapıyoruz." },
                { de: "Ich lerne viel, damit meine Eltern stolz sind.", tr: "Ailem gurur duysun diye çok çalışıyorum. (Özneler farklı!)" },
                { de: "Er macht Sport, um fit zu bleiben.", tr: "Zinde kalmak için spor yapıyor." },
                { de: "Ich gebe dir Geld, damit du das Buch kaufst.", tr: "Kitabı satın alasın diye sana para veriyorum." },
                { de: "Wir sparen Wasser, um die Ressourcen zu bewahren.", tr: "Kaynakları korumak için su tasarrufu yapıyoruz." },
                { de: "Beeil dich, damit wir pünktlich ankommen.", tr: "Dakik varalım diye acele et." },
                { de: "Ich brauche bir sözlük, um den Text zu verstehen.", tr: "Metni anlamak için bir sözlüğe ihtiyacım var." },
                { de: "Er goes to Bank, um Geld abzuheben.", tr: "Para çekmek için bankaya gidiyor." },
                { de: "Mach das Licht aus, damit o schlafen kann.", tr: "O uyuyabilsin diye ışığı kapat." },
                { de: "Wir brauchen help, um das Projekt zu beenden.", tr: "Projeyi bitirmek için yardıma ihtiyacımız var." }
            ]
        }
    ],
    exercises: [
        { question: "Ich lerne Deutsch, ___ in Deutschland ___ arbeiten.", options: ["um / zu", "damit / -", "zu / um", "weil / zu"], correct: 0, explanation: "Özneler aynı (ben) -> um ... zu." },
        { question: "Ich helfe dir, ___ du fertig ___ (olman için - wirst).", options: ["damit / wirst", "um / zu", "damit / zu", "weil / bist"], correct: 0, explanation: "Özneler farklı (ben ve sen) -> damit ... çekimli fiil sonda." },
        { question: "Er isst Gemüse, ___ gesund ___ bleiben.", options: ["um / zu", "damit / zu", "um / -", "zu / zu"], correct: 0, explanation: "Um ... zu sağlıklı kalmak İÇİN." },
        { question: "Ben yazıyorum, ___ sen okuyasın (fiil sonda).", options: ["damit", "um", "zu", "weil"], correct: 0, explanation: "Farklı özneler ve amaç." },
        { question: "Wir sparen, ___ ein Haus ___ kaufen.", options: ["um / zu", "damit / zu", "um / -", "zu / zu"], correct: 0, explanation: "Sahiplik ve özne aynı." },
        { question: "Hangi yapıda özne tekrar EDİLMEZ?", options: ["um ... zu", "damit", "weil", "dass"], correct: 0, explanation: "Um ... zu yapısında özne ana cümle ile aynıdır." },
        { question: "Ich gehe into Cafe, ___ bir kahve ___ içmek (trinken).", options: ["um / zu", "damit / zu", "zu / um", "um / -"], correct: 0, explanation: "İçmek için." },
        { question: "Sprich leise, ___ die Kinder ___ (uyusunlar - schlafen).", options: ["damit / schlafen", "um / zu", "damit / zu", "weil / schlafen"], correct: 0, explanation: "Farklı özneler." },
        { question: "Um ... zu yapısında fiil nerede ve nasıldır?", options: ["Sonda ve Mastar", "Başta", "2. sırada", "Sonda ve çekimli"], correct: 0, explanation: "Zu + Mastar sona gider." },
        { question: "Wir elbiseleri topluyoruz, ___ odayı temiz ___ (aufräumen).", options: ["um / zu", "damit / zu", "zu / zu", "weil / zu"], correct: 0, explanation: "Toplamak için." }
    ]
};

// ===== UNIT 571: KÜLTÜR VE GELENEKLER (SIFAT TAMLAMALARI) =====
const unit571Grammar: GermanUnitGrammar = {
    unitId: 571,
    title: "Sıfat Tamlamaları",
    rules: [
        {
            id: "de-571-1",
            title: "Belirli Artikellerle Sıfat Çekimi",
            explanation: "B1 seviyesinde sıfatların artikellere göre nasıl çekimlendiği (Adjektivdeklination) kritiktir. Belirli artikel (der, die, das) kullanıldığında sıfatlar genellikle zayıf çekim (Schwache Deklination) alır.",
            table: {
                headers: ["Hal", "Maskulin", "Feminin", "Neutral", "Plural"],
                rows: [
                    ["Nominativ", "der gute Mann", "die gute Frau", "das gute Kind", "die guten Leute"],
                    ["Akkusativ", "den guten Mann", "die gute Frau", "das gute Kind", "die guten Leute"],
                    ["Dativ", "dem guten Mann", "der guten Frau", "dem guten Kind", "den guten Leuten"]
                ]
            },
            examples: [
                { de: "Wir schätzen die deutsche Tradition.", tr: "Alman geleneğine değer veriyoruz." },
                { de: "Der alte Turm ist sehr berühmt.", tr: "Eski kule çok ünlüdür." },
                { de: "Ich mag das kalte Wetter nicht.", tr: "Soğuk havayı sevmiyorum." },
                { de: "Die freundlichen Nachbarn helfen uns.", tr: "Nazik komşular bize yardım ediyor." },
                { de: "In der modernen Welt ist alles schnell.", tr: "Modern dünyada her şey hızlıdır." },
                { de: "Er trägt einen schwarzen Anzug.", tr: "Siyah bir takım elbise giyiyor." },
                { de: "Das ist die beste Lösung.", tr: "Bu en iyi çözümdür." },
                { de: "Wir besuchen den kleinen Park.", tr: "Küçük parkı ziyaret ediyoruz." },
                { de: "Ich wohne in einem großen Haus.", tr: "Büyük bir evde yaşıyorum." },
                { de: "Die bunten Blumen sind schön.", tr: "Renkli çiçekler güzeldir." }
            ]
        }
    ],
    exercises: [
        { question: "Der ___ (iyi - gut) Mann hilft mir.", options: ["gute", "guten", "gutem", "guter"], correct: 0, explanation: "Nominativ + Belirli Artikel -> -e eki." },
        { question: "Ich sehe den ___ (eski - alt) Turm.", options: ["alten", "alte", "altem", "alter"], correct: 0, explanation: "Akkusativ Maskulin -> -en eki." },
        { question: "Wir wohnen in der ___ (modern - modern) Stadt.", options: ["modernen", "moderne", "modernem", "moderner"], correct: 0, explanation: "Dativ Feminin -> -en eki." },
        { question: "Das ___ (küçük - klein) Kind spielt.", options: ["kleine", "kleinen", "kleinem", "kleiner"], correct: 0, explanation: "Nominativ Neutral -> -e eki." },
        { question: "Ich danke den ___ (nazik - nett) Leuten.", options: ["netten", "nette", "netter", "nettem"], correct: 0, explanation: "Dativ Plural -> -en eki." },
        { question: "Ein ___ (hızlı - schnell) Auto fährt vorbei.", options: ["schnelles", "schnelle", "schnellen", "schneller"], correct: 0, explanation: "Nominativ Neutral + Belirsiz Artikel -> -es eki." },
        { question: "Mit dem ___ (yeni - neu) Fahrrad.", options: ["neuen", "neue", "neuem", "neuer"], correct: 0, explanation: "Dativ Neutral + Belirli Artikel -> -en eki." },
        { question: "Die ___ (güzel - schön) Frau singt.", options: ["schöne", "schönen", "schöner", "schönem"], correct: 0, explanation: "Nominativ Feminin -> -e eki." },
        { question: "Ich habe bir ___ (sıcak - warm) Tee.", options: ["warmen", "warme", "warmes", "warmer"], correct: 0, explanation: "Akkusativ Maskulin + Belirsiz Artikel -> -en eki." },
        { question: "Belirli artikellerde Dativ hali için sıfat eki nedir?", options: ["-en", "-e", "-er", "-es"], correct: 0, explanation: "Dativ'de tüm cinsiyetler -en alır." }
    ]
};

// ===== UNIT 572: EKONOMİ VE KARŞILAŞTIRMA (KOMPARATIV & SUPERLATIV) =====
const unit572Grammar: GermanUnitGrammar = {
    unitId: 572,
    title: "Karşılaştırma Yapıları",
    rules: [
        {
            id: "de-572-1",
            title: "Komparativ ve Superlativ",
            explanation: "Ekonomik verileri veya durumları kıyaslarken sıfatların karşılaştırma halleri kullanılır.\n\n**Komparativ:** Sıfat + -er (schneller). 'als' kelimesi ile kullanılır.\n**Superlativ:** am + Sıfat + -sten (am schnellsten) veya Belirli Artikel + Sıfat + -ste (der schnellste).",
            table: {
                headers: ["Sıfat", "Komparativ", "Superlativ"],
                rows: [
                    ["gut", "besser", "am besten"],
                    ["viel", "mehr", "am meisten"],
                    ["hoch", "höher", "am höchsten"],
                    ["teuer", "teurer", "am teuersten"],
                    ["groß", "größer", "am größten"]
                ]
            },
            examples: [
                { de: "Die Inflation ist höher als letztes Jahr.", tr: "Enflasyon geçen yıla göre daha yüksek." },
                { de: "Das ist das teuerste Auto der Welt.", tr: "Bu dünyanın en pahalı arabasıdır." },
                { de: "Gold ist wertvoller als Silber.", tr: "Altın gümüşten daha değerlidir." },
                { de: "Mein Bruder ist größer als ich.", tr: "Erkek kardeşim benden daha uzundur." },
                { de: "Dieses Projekt ist am wichtigsten.", tr: "Bu proje en önemlisidir." },
                { de: "Er spricht besser Deutsch als ich.", tr: "O benden daha iyi Almanca konuşuyor." },
                { de: "Der Mount Everest ist der höchste Berg.", tr: "Everest Dağı en yüksek dağdır." },
                { de: "Meyve sebzeden daha sağlıklıdır.", tr: "Obst ist gesünder als Gemüse." },
                { de: "Im Sommer ist es am heißesten.", tr: "Yazın (hava) en sıcaktır." },
                { de: "Der Zug ist schneller als das Fahrrad.", tr: "Tren bisikletten daha hızlıdır." }
            ]
        }
    ],
    exercises: [
        { question: "Berlin ist ___ (büyük) als Hamburg.", options: ["größer", "groß", "am größten", "großer"], correct: 0, explanation: "Karşılaştırma (Komparativ) -> -er." },
        { question: "Das ist der ___ (yüksek) Berg.", options: ["höchste", "höher", "hoch", "am höchsten"], correct: 0, explanation: "Artikel ile Superlativ -> -e takısı." },
        { question: "Er läuft ___ (hızlı) als ich.", options: ["schneller", "schnell", "am schnellsten", "schnellsten"], correct: 0, explanation: "Daha hızlı -> schneller." },
        { question: "Dieses Buch ist ___ (iyi) als das andere.", options: ["besser", "gut", "am besten", "güter"], correct: 0, explanation: "Gut düzensizdir -> besser." },
        { question: "Am ___ (soğuk) ist es im Winter.", options: ["kältesten", "kälter", "kalt", "kälteste"], correct: 0, explanation: "am + -sten yapısı." },
        { question: "Das Auto ist ___ (pahalı) als das Fahrrad.", options: ["teurer", "teuer", "am teuersten", "teureer"], correct: 0, explanation: "Teuer -> teurer (e düşer)." },
        { question: "Ich habe ___ (çok) Zeit als du.", options: ["mehr", "viel", "am meisten", "vieler"], correct: 0, explanation: "Viel -> mehr." },
        { question: "Welches Auto ist am ___ (hızlı)?", options: ["schnellsten", "schneller", "schnell", "schnellste"], correct: 0, explanation: "am + -sten." },
        { question: "Hangi bağlaç Komparativ ile kullanılır?", options: ["als", "wie", "dass", "denn"], correct: 0, explanation: "Eşitsizlik kıyasında 'als' kullanılır." },
        { question: "Eşitlik kıyasında (kadar) ne kullanılır?", options: ["so ... wie", "als", "mehr", "am"], correct: 0, explanation: "so gut wie (kadar iyi)." }
    ]
};

// ===== UNIT 573: TARTIŞMA VE MODALPARTIKELN =====
const unit573Grammar: GermanUnitGrammar = {
    unitId: 573,
    title: "Modalpartikeln",
    rules: [
        {
            id: "de-573-1",
            title: "Doch, Mal, Halt, Ja",
            explanation: "Almancada kelime anlamı dışında cümlenin tonunu (şaşkınlık, rica, kesinlik, çaresizlik) belirlemek için kullanılan küçük kelimeciklerdir. Çevirileri zordur ancak konuşma diline doğallık katarlar.",
            table: {
                headers: ["Parçacık", "Vurgu / Ton", "Örnek"],
                rows: [
                    ["mal", "Nazik rica", "Komm mal her!"],
                    ["doch", "Zıtlık / Israr", "Komm doch!"],
                    ["halt", "Kabulleniş", "Das ist halt so."],
                    ["ja", "Şaşkınlık / Malum", "Das ist ja toll!"],
                    ["denn", "Merak (soruda)", "Was ist denn los?"]
                ]
            },
            examples: [
                { de: "Das ist halt meine Meinung.", tr: "Bu benim fikrim işte (yapacak bir şey yok)." },
                { de: "Komm mal bitte kurz zu mir.", tr: "Lütfen bir saniye yanıma gel." },
                { de: "Du hast doch gesagt, dass du kommst.", tr: "Geleceğini söylemiştin ya (hatırlatma/ısrar)." },
                { de: "Das ist ja unvorstellbar!", tr: "Bu gerçekten inanılmaz! (şaşkınlık)" },
                { de: "Wie spät ist es denn?", tr: "Saat kaç sahi? (meraklı soru)" },
                { de: "Mach doch das Fenster zu!", tr: "Pencereyi kapatsana! (sabırsızlık)" },
                { de: "Echt? Das wusste ich ja gar nicht.", tr: "Gerçekten mi? Bunu hiç bilmiyordum doğrusu." },
                { de: "Wir müssen halt warten.", tr: "Beklemek zorundayız işte." },
                { de: "Hör mal gut zu!", tr: "Beni bir iyi dinle!" },
                { de: "Du bist ja schon fertig!", tr: "Ooo, çoktan bitirmişsin bile!" }
            ]
        }
    ],
    exercises: [
        { question: "Was ist ___ (sahi/merak) passiert?", options: ["denn", "halt", "mal", "ja"], correct: 0, explanation: "Sorularda merak vurgusu için 'denn' kullanılır." },
        { question: "Das ist ___ (işte/yapacak bir şey yok) so.", options: ["halt", "mal", "doch", "ja"], correct: 0, explanation: "Kabulleniş durumunda 'halt' veya 'eben' kullanılır." },
        { question: "Komm ___ (bir/nazikçe) her!", options: ["mal", "ja", "denn", "halt"], correct: 0, explanation: "Ricaları yumuşatmak için 'mal' kullanılır." },
        { question: "Das ist ___ (gerçekten/şaşırtıcı) schön!", options: ["ja", "denn", "halt", "mal"], correct: 0, explanation: "Şaşkınlık bildirmek için 'ja' kullanılır." },
        { question: "Pencereyi kapatsana! (Israr)", options: ["Mach doch das Fenster zu!", "Mach mal das Fenster zu!", "Mach ja das Fenster zu!", "Mach denn das Fenster zu!"], correct: 0, explanation: "Israr/Sabırsızlık için 'doch' kullanılır." },
        { question: "Modalpartikeln cümlenin neresinde yer almaz?", options: ["Cümlenin en başında", "Fiilden sonra", "Özneden sonra", "Nesneden önce"], correct: 0, explanation: "Modalpartikel'lar asla cümle başında yer almazlar." },
        { question: "Echt? Du hast ___ (vurgu) recht!", options: ["ja", "denn", "mal", "halt"], correct: 0, explanation: "Gerçekten/Ooo anlamında ja." },
        { question: "Hör ___ (bir) zu!", options: ["mal", "denn", "ja", "halt"], correct: 0, explanation: "Bir dinle (mal)." },
        { question: "Ich kann ___ (işte) nichts machen.", options: ["halt", "denn", "ja", "mal"], correct: 0, explanation: "Çaresiz kabulleniş halt." },
        { question: "Hast du ___ (şaşkınlık/merak) kein Geld?", options: ["denn", "halt", "ja", "mal"], correct: 0, explanation: "Sahi, paran yok mu?" }
    ]
};

// ===== UNIT 574: SUNUM TEKNİKLERİ VE SIRALAMA =====
const unit574Grammar: GermanUnitGrammar = {
    unitId: 574,
    title: "Sunum Yapma",
    rules: [
        {
            id: "de-574-1",
            title: "Sıralama Bağlaçları ve Geçişler",
            explanation: "Bir sunumu yapılandırmak, fikirleri sıraya koymak için kullanılan zarflardır. Bu kelimelerden sonra fiil gelmelidir (Inversion).",
            table: {
                headers: ["Aşama", "Kalıp", "Anlamı"],
                rows: [
                    ["Giriş", "Zuerst / Einleitend", "Öncelikle"],
                    ["Gelişme", "Dann / Danach / Außerdem", "Sonra / Ayrıca"],
                    ["Sonuç", "Schließlich / Zum Schluss", "Sonuç olarak"]
                ]
            },
            examples: [
                { de: "Zuerst begrüße ich das Publikum.", tr: "Önce seyirciyi selamlıyorum." },
                { de: "Danach beginne ich with dem ersten Punkt.", tr: "Ardından ilk noktaya başlıyorum." },
                { de: "Außerdem möchte ich betonen, dass...", tr: "Ayrıca vurgulamak isterim ki..." },
                { de: "Schließlich danke ich für Isır attention.", tr: "Son olarak dikkatiniz için teşekkür ederim." },
                { de: "Als Nächstes zeige ich Ihnen bir tablo.", tr: "Bir sonraki aşamada size bir tablo göstereceğim." },
                { de: "Zuerst nenne ich die Vorteile.", tr: "Önce avantajları belirteceğim." },
                { de: "Dann komme ich zu den Nachteilen.", tr: "Sonra dezavantajlara geleceğim." },
                { de: "Zusammenfassend lässt sich sagen...", tr: "Özetle denilebilir ki..." },
                { de: "Ein weiterer Punkt ist die Kosten.", tr: "Diğer bir nokta ise maliyetlerdir." },
                { de: "Vielen Dank für Ihre Aufmerksamkeit.", tr: "İlginiz/Dikkatiniz için çok teşekkürler." }
            ]
        }
    ],
    exercises: [
        { question: "___ (Öncelikle) erkläre ich das Thema.", options: ["Zuerst", "Dann", "Schließlich", "Danach"], correct: 0, explanation: "Giriş için Zuerst kullanılır." },
        { question: "Zuerst ..., ___ (sonrasında) ...", options: ["danach", "zuerst", "schließlich", "außerdem"], correct: 0, explanation: "Ardıllık bildirir." },
        { question: "___ (Son olarak) danke ich euch.", options: ["Schließlich", "Zuerst", "Außerdem", "Dann"], correct: 0, explanation: "Sonuç aşaması." },
        { question: "Danach ___ (geliyorum) ich zum zweiten Punkt.", options: ["komme", "kommst", "kommt", "kommen"], correct: 0, explanation: "Zarf başa gelirse fiil 2. sırayı korur (Inversion)." },
        { question: "___ (Ayrıca) gibt es Probleme.", options: ["Außerdem", "Zuerst", "Dann", "Schließlich"], correct: 0, explanation: "Ek bilgi ekleme." },
        { question: "Zusammenfassend ___ (belirtilebilir) man...", options: ["kann", "ist", "muss", "wird"], correct: 0, explanation: "Zusammenfassend kann man sagen." },
        { question: "Welches Wort passt zum Schluss?", options: ["Schließlich", "Zuerst", "Erstens", "Einleitend"], correct: 0, explanation: "Sonuç zarfı." },
        { question: "Zuerst ___ (selamlıyorum) ich Sie.", options: ["begrüße", "begrüßt", "begrüßen", "begrüßt"], correct: 0, explanation: "Ich begrüße." },
        { question: "Danach ___ biz tartışıyoruz (wir diskutieren).", options: ["diskutieren wir", "wir diskutieren", "diskutiert", "dass wir"], correct: 0, explanation: "Inversion: Zarf + Fiil + Özne." },
        { question: "Vielen Dank ___ Isır Aufmerksamkeit.", options: ["für", "von", "bei", "mit"], correct: 0, explanation: "Dank für + Akkusativ." }
    ]
};

// ===== UNIT 575: EDEBİYAT VE PRÄTERITUM =====
const unit575Grammar: GermanUnitGrammar = {
    unitId: 575,
    title: "Präteritum (Geçmiş Zaman)",
    rules: [
        {
            id: "de-575-1",
            title: "Yazılı Dilde Geçmiş Zaman",
            explanation: "Almancada konuşma dilinde geçmiş için 'Perfekt' tercih edilirken, roman, gazete ve resmî raporlarda 'Präteritum' kullanılır. B1 seviyesinde sadece modal ve yardımcı fiillerin değil, tüm fiillerin Präteritum hallerini tanımak önemlidir.",
            table: {
                headers: ["Fiil", "Präsens", "Präteritum", "Anlamı"],
                rows: [
                    ["sein", "ich bin", "ich war", "idim"],
                    ["haben", "ich habe", "ich hatte", "sahibim"],
                    ["machen", "ich mache", "ich machte", "yaptım"],
                    ["gehen", "ich gehe", "ich ging", "gittim"],
                    ["sehen", "ich sehe", "ich sah", "gördüm"]
                ]
            },
            examples: [
                { de: "Es war einmal ein kleiner Prinz.", tr: "Bir zamanlar küçük bir prens vardı." },
                { de: "Er ging jeden Tag in den Wald.", tr: "Her gün ormana giderdi." },
                { de: "Wir machten einen uzun Spaziergang.", tr: "Uzun bir yürüyüş yaptık." },
                { de: "Sie sah einen alten Mann.", tr: "Yaşlı bir adam gördü." },
                { de: "Hattest du keine Angst?", tr: "Korkun yok muydun?" },
                { de: "Der König lebte in einem Schloss.", tr: "Kral bir şatoda yaşıyordu." },
                { de: "Früher rauchte er viel.", tr: "Eskiden çok sigara içerdi." },
                { de: "Was sagtest du?", tr: "Ne demiştin?" },
                { de: "Das Wetter war gestern güzel.", tr: "Hava dün güzeldi." },
                { de: "Ich wusste das nicht.", tr: "Bunu bilmiyordum." }
            ]
        }
    ],
    exercises: [
        { question: "Ich ___ (idim - sein) müde.", options: ["war", "bin", "wäre", "hatte"], correct: 0, explanation: "Sein Präteritum: war." },
        { question: "Er ___ (gitti - gehen) nach Hause.", options: ["ging", "geht", "gegangen", "gange"], correct: 0, explanation: "Gehen Präteritum: ging." },
        { question: "Wir ___ (yapmıştık - machen) Urlaub.", options: ["machten", "machen", "gemacht", "machtet"], correct: 0, explanation: "Düzenli fiil: machen -> machte + -n." },
        { question: "___ (Sahip miydin - haben) du Zeit?", options: ["Hattest", "Hast", "Hätte", "Hattest du"], correct: 0, explanation: "Haben Präteritum: hatte + -st." },
        { question: "Es ___ (vardı) einmal...", options: ["war", "ist", "wurde", "gab"], correct: 0, explanation: "Masal başlangıcı: 'Es war einmal'." },
        { question: "Präteritum nerede daha çok kullanılır?", options: ["Gazete ve Kitaplarda", "Günlük Konuşmada", "WhatsApp mesajlarında", "Market alışverişinde"], correct: 0, explanation: "Yazı dili zamanıdır." },
        { question: "Sie ___ (gördü - sehen) den Hund.", options: ["sah", "sieht", "gesehen", "sahen"], correct: 0, explanation: "Sehen Präteritum: sah." },
        { question: "Ich ___ (biliyordum - wissen) es.", options: ["wusste", "weiß", "gewusst", "wussten"], correct: 0, explanation: "Wissen Präteritum: wusste." },
        { question: "Wir ___ (yaşıyorduk - leben) in Berlin.", options: ["lebten", "leben", "gelebt", "lebt"], correct: 0, explanation: "Leben -> lebte + -n." },
        { question: "Ihr ___ (idiniz) da.", options: ["wart", "wartet", "warst", "sind"], correct: 0, explanation: "Sein: ihr wart." }
    ]
};

// ===== UNIT 576: AKADEMİK YAZMA (NOMINALSTIL) =====
const unit576Grammar: GermanUnitGrammar = {
    unitId: 576,
    title: "Nominalstil (İsimleştirme)",
    rules: [
        {
            id: "de-576-1",
            title: "Fiillerden ve Sıfatlardan İsim Yapma",
            explanation: "Akademik ve resmi dilde eylemleri isimleştirerek (Nominalisierung) daha nesnel ve yoğun bir anlatım sağlanır. Genellikle fiilin mastar hali büyük harfle yazılarak 'das' artikeli ile isimleştirilir.",
            table: {
                headers: ["Fiil", "İsim", "Anlamı"],
                rows: [
                    ["lesen", "das Lesen", "okumak / okuma"],
                    ["schreiben", "das Schreiben", "yazmak / yazım"],
                    ["analysieren", "die Analyse", "analiz etmek / analiz"],
                    ["entscheiden", "die Entscheidung", "karar vermek / karar"],
                    ["diskutieren", "die Diskussion", "tartışmak / tartışma"]
                ]
            },
            examples: [
                { de: "Das Schreiben wissenschaftlicher Arbeiten erfordert Zeit.", tr: "Bilimsel ödevler yazmak zaman gerektirir." },
                { de: "Beim Lesen lernt man viele neue Wörter.", tr: "Okuma sırasında pek çok yeni kelime öğrenilir." },
                { de: "Die Analyse der Daten war sehr komplex.", tr: "Verilerin analizi çok karmaşıktı." },
                { de: "Eine Entscheidung treffen ist oft schwierig.", tr: "Karar vermek çoğu zaman zordur." },
                { de: "Die Diskussion dauerte bis spät in die Nacht.", tr: "Tartışma gece geç saatlere kadar sürdü." },
                { de: "Das Rauchen ist hier verboten.", tr: "Burada sigara içmek yasaktır." },
                { de: "Wir danken Ihnen für Ihr Vertrauen.", tr: "Güveniniz için size teşekkür ederiz." },
                { de: "Nach dem Essen gehen wir spazieren.", tr: "Yemekten sonra yürüyüşe çıkıyoruz." },
                { de: "Das Verständnis der Grammatik ist wichtig.", tr: "Dilbilgisini anlamak önemlidir." },
                { de: "Die Vorbereitung auf die Prüfung läuft gut.", tr: "Sınava hazırlık iyi gidiyor." }
            ]
        }
    ],
    exercises: [
        { question: "___ (okumak) macht Spaß.", options: ["Das Lesen", "Lesen", "Die Lesen", "Der Lesen"], correct: 0, explanation: "Fiil isimleşince 'das' artikeli alır ve büyük harfle başlar." },
        { question: "Nach ___ (yemek yemek - essen) bin ich müde.", options: ["dem Essen", "der Essen", "Essen", "das Essen"], correct: 0, explanation: "Dativ gerektiren edattan (nach) sonra dem Essen." },
        { question: "Die ___ (tartışmak) war sehr laut.", options: ["Diskussion", "Diskutieren", "das Diskutieren", "Diskusyon"], correct: 0, explanation: "Tartışma: die Diskussion." },
        { question: "Wir danken für Ihre ___ (yardım - helfen).", options: ["Hilfe", "das Helfen", "Ihr Helfen", "Helfung"], correct: 0, explanation: "En doğal hali: die Hilfe." },
        { question: "Beim ___ (çalışmak - arbeiten) brauche ich Ruhe.", options: ["Arbeiten", "Arbeit", "das Arbeit", "Arbeitere"], correct: 0, explanation: "Eylem süreci: das Arbeiten." },
        { question: "Treffen Sie bir ___ (karar - entscheiden)!", options: ["Entscheidung", "Entscheiden", "das Entscheiden", "Entscheit"], correct: 0, explanation: "Karar vermek: Entscheidung." },
        { question: "Das ___ (beklemek) hat sich gelohnt.", options: ["Warten", "Wartet", "Warung", "Wartend"], correct: 0, explanation: "Bekleme eylemi: das Warten." },
        { question: "Ihre ___ (fikir - meinen) ist mir wichtig.", options: ["Meinung", "Meinen", "das Meinen", "Meinte"], correct: 0, explanation: "Fikir/Görüş: die Meinung." },
        { question: "Vielen Dank für Ihre ___ (dikkat - aufmerksam).", options: ["Aufmerksamkeit", "Aufmerken", "Aufmerksam", "Aufmerker"], correct: 0, explanation: "-keit eki ile isimleştirme." },
        { question: "Nominalstil nerede tercih edilir?", options: ["Akademik yazılarda", "Arkadaş mesajlarında", "Market listesinde", "Sözlü şakalarda"], correct: 0, explanation: "Resmi ve bilimsel dilde yaygındır." }
    ]
};

// ===== UNIT 577: BİLİM VE TEKNOLOJİ (FUTUR I) =====
const unit577Grammar: GermanUnitGrammar = {
    unitId: 577,
    title: "Futur I",
    rules: [
        {
            id: "de-577-1",
            title: "Gelecek Planları ve Tahminler",
            explanation: "Almancada gelecek zaman `werden + Infinitiv (Mastar Fiil)` yapısıyla kurulur. Ancak kesin planlarda şimdiki zaman (Präsens) da sıkça kullanılır. Futur I daha çok tahmin, niyet ve vaat bildirir.",
            table: {
                headers: ["Şahıs", "Werden Çekimi", "Fiil (Sonda)"],
                rows: [
                    ["ich", "werde", "lernen"],
                    ["du", "wirst", "lernen"],
                    ["er/sie/it", "wird", "lernen"],
                    ["wir", "werden", "lernen"],
                    ["ihr", "werdet", "lernen"],
                    ["Sie/sie", "werden", "lernen"]
                ]
            },
            examples: [
                { de: "Morgen wird es regnen.", tr: "Yarın yağmur yağacak (Tahmin)." },
                { de: "Ich werde dich immer lieben.", tr: "Seni her zaman seveceğim (Söz)." },
                { de: "Robotlar gelecekte her yerde olacaklar.", tr: "Roboter werden in der Zukunft überall sein." },
                { de: "Wir werden bald eine Lösung finden.", tr: "Yakında bir çözüm bulacağız." },
                { de: "Wirst du mir helfen?", tr: "Bana yardım edecek misin?" },
                { de: "Du wirst sehen, alles wird gut.", tr: "Göreceksin, her şey iyi olacak." },
                { de: "Im Jahr 2050 werden wir auf dem Mars leben.", tr: "2050 yılında Mars'ta yaşıyor olacağız." },
                { de: "Er wird wahrscheinlich zu spät kommen.", tr: "O muhtemelen geç gelecek." },
                { de: "Sie werden das Projekt pünktlich beenden.", tr: "Projeyi zamanında bitirecekler." },
                { de: "Was wirst du am Wochenende machen?", tr: "Hafta sonu ne yapacaksın?" }
            ]
        }
    ],
    exercises: [
        { question: "Morgen ___ (olacak) es schneien.", options: ["wird", "werde", "werden", "wirst"], correct: 0, explanation: "Es + wird." },
        { question: "Ich ___ (yapacağım) meine Hausaufgaben machen.", options: ["werde", "wird", "werdet", "werden"], correct: 0, explanation: "Ich + werde." },
        { question: "Wir ___ (gideceğiz) nach Berlin fahren.", options: ["werden", "werdet", "wird", "wirst"], correct: 0, explanation: "Biz gideceğiz: werden." },
        { question: "___ (Edecek misin) du mir helfen?", options: ["Wirst", "Wird", "Werde", "Werdet"], correct: 0, explanation: "Du + wirst." },
        { question: "In Futur I, nerede fiilin mastar hali yer alır?", options: ["Cümle sonunda", "Fiilden hemen sonra", "Özneden önce", "Başta"], correct: 0, explanation: "Werden çekilir, ana fiil sonda mastar kalır." },
        { question: "Sie (onlar) ___ (bulacaklar) bir iş.", options: ["werden finden", "werden findet", "wird finden", "werde finden"], correct: 0, explanation: "Plural: werden + Mastar." },
        { question: "Was ___ (yapacaksın) du studieren?", options: ["wirst", "werden", "wird", "werde"], correct: 0, explanation: "Du wirst." },
        { question: "Alles ___ (olacak) gut.", options: ["wird", "werden", "werde", "wirst"], correct: 0, explanation: "Alles (tekil) + wird." },
        { question: "Futur I yapısında 'werden' hangi anlamı katar?", options: ["-ecek / -acak", "idi", "müş", "-ar / -er"], correct: 0, explanation: "Gelecek zaman eki." },
        { question: "Sen geleceksin (Futur I).", options: ["Du wirst kommen.", "Du kommst.", "Du wirst kommt.", "Du bist gekommen."], correct: 0, explanation: "Werden + Mastar." }
    ]
};

// ===== UNIT 578: SAĞLIK VE BESLENME (SOLLTEN) =====
const unit578Grammar: GermanUnitGrammar = {
    unitId: 578,
    title: "Sollten (Tavsiye)",
    rules: [
        {
            id: "de-578-1",
            title: "Nezaketli Tavsiye ve Tavsiyeler",
            explanation: "Biriyle konuşurken emir vermek yerine nazikçe tavsiyede bulunmak için `sollen` fiilinin Konjunktiv II hali olan `sollten` kullanılır.",
            table: {
                headers: ["Kişi", "Sollten Çekimi", "Anlamı"],
                rows: [
                    ["ich", "sollte", "yapmalıyım"],
                    ["du", "solltest", "yapmalısın"],
                    ["er/sie/es", "sollte", "yapmalı"],
                    ["wir", "sollten", "yapmalıyız"],
                    ["ihr", "solltet", "yapmalısınız"],
                    ["Sie/sie", "sollten", "yapmalılar"]
                ]
            },
            examples: [
                { de: "Du solltest weniger Zucker essen.", tr: "Daha az şeker yemelisin." },
                { de: "Wir sollten jeden Tag Sport treiben.", tr: "Her gün spor yapmalıyız." },
                { de: "Der Arzt sagt, ich sollte mehr schlafen.", tr: "Doktor daha çok uyumam gerektiğini söylüyor." },
                { de: "Ihr solltet mehr Pausen machen.", tr: "Daha fazla ara vermelisiniz." },
                { de: "Man sollte viel Wasser trinken.", tr: "İnsan çok su içmeli." },
                { de: "Sollte ich dieses Medikament nehmen?", tr: "Bu ilacı almalı mıyım?" },
                { de: "Sie sollten sich im Bett ausruhen.", tr: "Yatakta istirahat etmelisiniz." },
                { de: "Du solltest nicht so viel arbeiten.", tr: "Bu kadar çok çalışmamalısın." },
                { de: "Wir sollten gesundes Essen kochen.", tr: "Sağlıklı yemekler pişirmeliyiz." },
                { de: "Sollten wir den Termin verschieben?", tr: "Randevuyu ertelemeli miyiz?" }
            ]
        }
    ],
    exercises: [
        { question: "Du ___ (yemelisin) gesund essen.", options: ["solltest", "sollst", "sollte", "solltet"], correct: 0, explanation: "Nazik tavsiye: solltest." },
        { question: "Biz ___ (yapmalıyız) Sport machen.", options: ["sollten", "sollte", "sollten wir", "sollten"], correct: 0, explanation: "Wir sollten." },
        { question: "Siz (Sie) ___ (dinlenmelisiniz) sich ausruhen.", options: ["sollten", "solltet", "sollte", "sollst"], correct: 0, explanation: "Sie sollten." },
        { question: "___ (Yapmalı mıyım) ich zum Arzt gehen?", options: ["Sollte", "Sollten", "Sollte ich", "Sollst"], correct: 0, explanation: "Ich + sollte." },
        { question: "Sollten ve Sollen farkı nedir?", options: ["Sollten daha naziktir", "Sollten daha serttir", "Fark yoktur", "Sollten gelecek zamandır"], correct: 0, explanation: "Sollten (Konjunktiv II) tavsiye için daha naziktir." },
        { question: "Ihr ___ (okumalısınız) das Buch.", options: ["solltet", "sollten", "sollte", "solltest"], correct: 0, explanation: "Ihr + solltet." },
        { question: "Man ___ (içmeli) viel Tee.", options: ["sollte", "sollten", "sollst", "sollt"], correct: 0, explanation: "Man (3. tekil) + sollte." },
        { question: "Du ___ (içmemelisin) rauchen.", options: ["solltest nicht", "sollen nicht", "sollte nicht", "sollst nicht"], correct: 0, explanation: "Du solltest." },
        { question: "Meyve yemelisin.", options: ["Du solltest Obst essen.", "Du isst Obst.", "Du hast Obst gegessen.", "Du willst Obst essen."], correct: 0, explanation: "Tavsiye yapısı." },
        { question: "Fiil cümlede nerede yer alır?", options: ["Sonda (Mastar)", "Werden'den sonra", "Başta", "Özneden hemen sonra"], correct: 0, explanation: "Modal fiil gibi, ana fiil sonda mastar kalır." }
    ]
};

// ===== UNIT 579: PSİKOLOJİ VE REFLEXIVE VERBEN =====
const unit579Grammar: GermanUnitGrammar = {
    unitId: 579,
    title: "Dönüşlü Fiiller (Reflexiv)",
    rules: [
        {
            id: "de-579-1",
            title: "Akkusativ ve Dativ Dönüşlü Zamirler",
            explanation: "Eylemin özneye geri döndüğü fiillerdir. B1'de hem Akkusativ (mich) hem de nesne olduğunda kullanılan Dativ (mir) dönüşlü zamirler önem kazanır.",
            table: {
                headers: ["Şahıs", "Akkusativ", "Dativ"],
                rows: [
                    ["ich", "mich", "mir"],
                    ["du", "dich", "dir"],
                    ["er/sie/es", "sich", "sich"],
                    ["wir", "uns", "uns"],
                    ["ihr", "euch", "euch"],
                    ["Sie/sie", "sich", "sich"]
                ]
            },
            examples: [
                { de: "Ben seviniyorum.", tr: "Ich freue mich." },
                { de: "Ich putze mir die Zähne.", tr: "Dişlerimi fırçalıyorum (Dativ, çünkü diş nesne)." },
                { de: "Er fühlt sich heute nicht gut.", tr: "O bugün kendini iyi hissetmiyor." },
                { de: "Wir freuen uns auf den Urlaub.", tr: "Tatili dört gözle bekliyoruz." },
                { de: "Hast du dich erkältet?", tr: "Üşüttün mü (kendini soğukladın mı)?" },
                { de: "Sie wäscht sich das Gesicht.", tr: "Yüzünü yıkıyor." },
                { de: "Ihr müsst euch beeilen.", tr: "Acele etmelisiniz." },
                { de: "Ich kann mich nicht an seinen Namen erinnern.", tr: "Onun adını hatırlayamıyorum." },
                { de: "Komm rein ve yerleş.", tr: "Komm rein und setz dich." },
                { de: "Wir interessieren uns für Kunst.", tr: "Sanatla ilgileniyoruz." }
            ]
        }
    ],
    exercises: [
        { question: "Ich freue ___ (ben) çok.", options: ["mich", "mir", "dich", "uns"], correct: 0, explanation: "Freuen + mich (Akkusativ)." },
        { question: "Hast du ___ (sen) dişlerini fırçaladın mı?", options: ["dir", "dich", "sich", "euch"], correct: 0, explanation: "Nesne (die Zähne) olduğu için mir/dir kullanılır." },
        { question: "Er fühlt ___ (kendini) schlecht.", options: ["sich", "mich", "dich", "uns"], correct: 0, explanation: "3. tekil dönüşlü zamiri her zaman 'sich'tir." },
        { question: "Wir beeilen ___ (biz).", options: ["uns", "euch", "sich", "mich"], correct: 0, explanation: "Wir + uns." },
        { question: "Beeilt ___ (siz)! (Imperativ)", options: ["euch", "uns", "sich", "dich"], correct: 0, explanation: "Ihr + euch." },
        { question: "Dativ dönüşlü zamirler ne zaman kullanılır?", options: ["Cümlede başka bir nesne varsa", "Her zaman", "Asla", "Sadece sorularda"], correct: 0, explanation: "Ich wasche MICH (beni), ama ich wasche MIR das Gesicht (yüzümü)." },
        { question: "Ich setze ___ (benim) auf den Stuhl.", options: ["mich", "mir", "sich", "uns"], correct: 0, explanation: "Oturmak: sich setzen." },
        { question: "Sie kämmt ___ (ona) die Haare.", options: ["sich", "mir", "dir", "euch"], correct: 0, explanation: "Saçlarını tarıyor (sich)." },
        { question: "Nasılsın? (Hissediyorsun)", options: ["Wie fühlst du dich?", "Wie geht es?", "Bist du gut?", "Wie findest du dich?"], correct: 0, explanation: "Sich fühlen yapısı." },
        { question: "İlgileniyorum.", options: ["Ich interessiere mich.", "Ich bin interessant.", "Ich habe Interesse.", "Ich interessiere."], correct: 0, explanation: "Dönüşlü fiil kullanımı." }
    ]
};

// ===== UNIT 580: İŞ ALMANCASI (WÜRDE & KÖNNTE) =====
const unit580Grammar: GermanUnitGrammar = {
    unitId: 580,
    title: "Resmi Dil ve Ricalar",
    rules: [
        {
            id: "de-580-1",
            title: "Konjunktiv II ile Nezaket",
            explanation: "İş hayatında veya resmi durumlarda emir vermek yerine 'würden' (istemek/eder misiniz) veya 'könnten' (yapabilir miydiniz) kullanarak rica edilir.",
            table: {
                headers: ["Yapı", "Anlamı", "Örnek"],
                rows: [
                    ["würden + Mastar", "yapar mısınız?", "Würden Sie helfen?"],
                    ["könnten + Mastar", "yapabilir miydiniz?", "Könnten Sie kommen?"],
                    ["wäre", "olsaydı / olurdu", "Das wäre super."],
                    ["hätte", "sahip olsaydı", "Ich hätte gern..."]
                ]
            },
            examples: [
                { de: "Würden Sie mir bitte das Dokument schicken?", tr: "Lütfen bana dökümanı gönderir misiniz?" },
                { de: "Könnten wir den Termin verschieben?", tr: "Randevuyu erteleyebilir miydik?" },
                { de: "Ich hätte gern bir kahve.", tr: "Bir kahve rica ediyorum (sahip olmayı dilerdim)." },
                { de: "Das wäre çok nazikçe von Ihnen.", tr: "Bu sizin tarafınızdan çok nazikçe olurdu." },
                { de: "Würdest du mir mal kurz helfen?", tr: "Bana bir saniye yardım eder misin?" },
                { de: "Könntest du das bitte wiederholen?", tr: "Bunu lütfen tekrar edebilir miydin?" },
                { de: "Ich würde gern mit Chef sprechen.", tr: "Şef ile görüşmek isterdim." },
                { de: "Wäre es möglich, morgen zu kommen?", tr: "Yarın gelmek mümkün olur muydu?" },
                { de: "Hätten Sie bir saniye Zeit?", tr: "Bir saniyeniz olur mu?" },
                { de: "Wir würden uns freuen, Sie zu sehen.", tr: "Sizi görmekten mutluluk duyarız." }
            ]
        }
    ],
    exercises: [
        { question: "___ (Eder misiniz) Sie bitte das Fenster schließen?", options: ["Würden", "Werden", "Wird", "Wollten"], correct: 0, explanation: "Rica için 'würden'." },
        { question: "___ (Yapabilir miydiniz) Sie mir helfen?", options: ["Könnten", "Können", "Kann", "Konnten"], correct: 0, explanation: "Nezaketli rica: könnten." },
        { question: "Ich ___ (istiyorum/rica ediyorum) gern bir Tee.", options: ["hätte", "habe", "bin", "wäre"], correct: 0, explanation: "Siparişlerde 'ich hätte gern' kullanılır." },
        { question: "Das ___ (olurdu) toll!", options: ["wäre", "ist", "bin", "wird"], correct: 0, explanation: "Hypothetical durum: wäre." },
        { question: "Würden veya Könnten'den sonra ana fiil nerede olur?", options: ["Cümle sonunda", "Özneden önce", "Werden'den sonra", "Başta"], correct: 0, explanation: "Modal fiil kuralı gereği mastar sonda." },
        { question: "___ (Eder misin) du das machen?", options: ["Würdest", "Werden", "Wirst", "Hättest"], correct: 0, explanation: "Du + würdest." },
        { question: "___ (Olur muydu) es möglich?", options: ["Wäre", "Hätte", "Würde", "Ist"], correct: 0, explanation: "Es + wäre." },
        { question: "Hätten Sie Zeit? (Anlamı)", options: ["Vaktiniz olur mu?", "Vaktiniz var mı?", "Vaktimi aldınız.", "Vaktiniz olmalı."], correct: 0, explanation: "Nezaketli soru." },
        { question: "Yardım edebilir misin? (En nazik)", options: ["Könntest du mir helfen?", "Hilf mir!", "Du kannst helfen.", "Können Sie helfen?"], correct: 0, explanation: "Konjunktiv II kullanımı." },
        { question: "İş hayatında ricalar için ne kullanılır?", options: ["Konjunktiv II", "Präteritum", "Futur", "Imperativ"], correct: 0, explanation: "Nezaket için Konjunktiv II." }
    ]
};

// ===== UNIT 581: PLUSQUAMPERFEKT (GEÇMİŞİN GEÇMİŞİ) =====
const unit581Grammar: GermanUnitGrammar = {
    unitId: 581,
    title: "Plusquamperfekt",
    rules: [
        {
            id: "de-581-1",
            title: "Miş'li Geçmiş Zaman",
            explanation: "Geçmişte gerçekleşmiş iki olaydan, daha önce olanı anlatmak için kullanılır. Genellikle 'nachdem' (diktan sonra) veya 'bevor' (meden önce) bağlaçlarıyla birlikte görülür. Yapısı: `hatten/waren + Partizip II`.",
            table: {
                headers: ["Yardımcı Fiil", "Çekim (ich)", "Örnek"],
                rows: [
                    ["haben (hatten)", "ich hatte", "hatte gegessen"],
                    ["sein (waren)", "ich war", "war gegangen"],
                    ["du", "hattest / warst", ""],
                    ["er/sie/es", "hatte / war", ""],
                    ["wir", "hatten / waren", ""],
                    ["ihr", "hattet / wart", ""]
                ]
            },
            examples: [
                { de: "Nachdem ich gegessen hatte, ging ich spazieren.", tr: "Yemek yedikten sonra yürüyüşe çıktım." },
                { de: "Er war schon gegangen, bevor ich ankam.", tr: "Ben varmadan önce o çoktan gitmişti." },
                { de: "Hattest du das schon vorher gewusst?", tr: "Bunu daha önceden biliyor muydun?" },
                { de: "Wir waren noch nie in Berlin gewesen.", tr: "Daha önce hiç Berlin'de bulunmamıştık." },
                { de: "Sie hatte den Brief schon geschrieben.", tr: "Mektubu çoktan yazmıştı." },
                { de: "Bevor er das Auto kaufte, hatte er lange gespart.", tr: "Arabayı almadan önce uzun süre para biriktirmişti." },
                { de: "Als ich kam, war die Party schon zu Ende.", tr: "Ben geldiğimde parti çoktan bitmişti." },
                { de: "Hattet ihr eure Hausaufgaben gemacht?", tr: "Ödevlerinizi yapmış mıydınız?" },
                { de: "Ich hatte mir das anders vorgestellt.", tr: "Bunu farklı hayal etmiştim." },
                { de: "Nachdem es geregnet hatte, war die Luft frisch.", tr: "Yağmur yağdıktan sonra hava tazeydi." }
            ]
        }
    ],
    exercises: [
        { question: "Nachdem er ___ (yemek yedi - essen), sah er fern.", options: ["gegessen hatte", "gegessen hat", "essen hatte", "hatte gegessen"], correct: 0, explanation: "Geçmişin geçmişi: hatten + Partizip II." },
        { question: "Bevor ich kam, ___ o ___ (gitmişti - gehen).", options: ["war / gegangen", "hatte / gegangen", "ist / gegangen", "war / gehen"], correct: 0, explanation: "Gehen fiili 'sein' (waren) ile kurulur." },
        { question: "Ich ___ (okumuştum) das Buch schon.", options: ["hatte gelesen", "war gelesen", "habe gelesen", "hatte lesen"], correct: 0, explanation: "Haben -> hatte." },
        { question: "Waren veya Hatten neye göre seçilir?", options: ["Perfekt ile aynı kurala göre", "Rastgele", "Sadece fiilin uzunluğuna göre", "Anlama göre"], correct: 0, explanation: "Perfekt'te 'sein' alanlar 'waren', 'haben' alanlar 'hatten' alır." },
        { question: "Hattest du die Tür ___ (kapatmış mıydın)?", options: ["zugemacht", "zumachen", "gemacht", "zugemachen"], correct: 0, explanation: "Partizip II: zugemacht." },
        { question: "Biz çoktan ___ (varmıştık - ankommen).", options: ["waren angekommen", "hatten angekommen", "waren ankommen", "sind angekommen"], correct: 0, explanation: "Ankommen -> waren." },
        { question: "___ ihr das schon ___ (görmüş müydünüz)?", options: ["Hattet / gesehen", "Wart / gesehen", "Hattet / sehen", "Habt / gesehen"], correct: 0, explanation: "Sehen -> hatten." },
        { question: "Plusquamperfekt cümlede nerede vurgulanır?", options: ["Daha önce olan olayda", "Daha sonra olan olayda", "Gelecekteki olayda", "Şimdiki zamanda"], correct: 0, explanation: "Zaman dizininde en gerideki olay." },
        { question: "Mektubu yazmıştım.", options: ["Ich hatte den Brief geschrieben.", "Ich war den Brief geschrieben.", "Ich habe geschrieben.", "Ich schreibe."], correct: 0, explanation: "Plusquamperfekt yapısı." },
        { question: "Nachdem sie ___ (uyudu - schlafen)...", options: ["geschlafen hatte", "geschlafen war", "schlafen hatte", "hatte schlafen"], correct: 0, explanation: "Schlafen -> hatte." }
    ]
};

// ===== UNIT 582: FUTUR II (TAMAMLANMIŞ GELECEK) =====
const unit582Grammar: GermanUnitGrammar = {
    unitId: 582,
    title: "Futur II",
    rules: [
        {
            id: "de-582-1",
            title: "Gelecekte Bitmiş Olacak Eylemler ve Tahminler",
            explanation: "Gelecekte belirli bir zamanda bitmiş olması beklenen eylemleri anlatır. Ancak günlük dilde daha çok 'geçmişe dair güçlü tahmin' (yapmış olmalı) anlamında kullanılır. Yapısı: `werden + Partizip II + haben/sein`.",
            table: {
                headers: ["Unsur", "Sıralama", "Örnek"],
                rows: [
                    ["Çekimli Fiil", "werden (2. sırada)", "Er wird..."],
                    ["Fiil Formu", "Partizip II (sonda)", "...gearbeitet..."],
                    ["Mastar", "haben/sein (en sonda)", "...haben."]
                ]
            },
            examples: [
                { de: "Bis morgen werde ich das Projekt beendet haben.", tr: "Yarına kadar projeyi bitirmiş olacağım." },
                { de: "Er wird wahrscheinlich schon angekommen sein.", tr: "Muhtemelen çoktan varmış olmalı (geçmiş tahmini)." },
                { de: "In zwei Jahren werden wir das Haus gebaut haben.", tr: "İki yıl içinde evi inşa etmiş olacağız." },
                { de: "Du wirst das sicher schon gehört haben.", tr: "Bunu kesin çoktan duymuşsındur." },
                { de: "Bis nächste Woche wird er genesen sein.", tr: "Gelecek haftaya kadar iyileşmiş olacak." },
                { de: "Sie wird den Schlüssel wohl verloren haben.", tr: "Anahtarı herhalde kaybetmiş olmalı." },
                { de: "Wir werden bis dahin alles vorbereitet haben.", tr: "O zamana kadar her şeyi hazırlamış olacağız." },
                { de: "Es wird wohl geregnet haben.", tr: "Herhalde yağmur yağmıştır." },
                { de: "Morgen um bu saatte biz varmış olacağız.", tr: "Morgen um diese Zeit werden wir angekommen sein." },
                { de: "Haben Sie das Paket erhalten? - Er wird es abgeschickt haben.", tr: "Paketi aldınız mı? - Onu göndermiş olmalı." }
            ]
        }
    ],
    exercises: [
        { question: "Bis morgen ___ ich es ___ (bitirmiş olacağım - haben).", options: ["werde / beendet haben", "wird / beendet haben", "werde / beenden", "habe / beendet werden"], correct: 0, explanation: "Futur II: werde + P2 + haben." },
        { question: "Er wird schon ___ (varmış olmalı - sein).", options: ["angekommen sein", "angekommen haben", "ankommen sein", "ankommen werden"], correct: 0, explanation: "Ankommen fiili 'sein' mastarı ile biter." },
        { question: "Futur II en çok hangi anlamda kullanılır?", options: ["Geçmişe dair tahmin", "Şimdiki zaman", "Emir kipi", "Soru sorma"], correct: 0, explanation: "Günlük dilde geçmiş tahminleri (yapmış olmalı) için yaygındır." },
        { question: "Sie ___ den Brief ___ (yazmış olmalı).", options: ["wird / geschrieben haben", "wird / schreiben werden", "werde / geschrieben haben", "werden / schreiben"], correct: 0, explanation: "Sie wird + P2 + haben." },
        { question: "Wir ___ alles ___ (hazırlamış olacağız).", options: ["werden / vorbereitet haben", "werden / vorbereiten", "wird / vorbereitet sein", "werde / vorbereitet haben"], correct: 0, explanation: "Vorbereiten -> haben." },
        { question: "Bis 2030 ___ die Technik sich ___ (değişmiş olacak).", options: ["wird / verändert haben", "werden / verändert haben", "wird / verändern", "wird / verändert sein"], correct: 0, explanation: "Sich verändern -> haben." },
        { question: "Du wirst es schon ___ (duymuş olmalısın).", options: ["gehört haben", "hören werden", "gehört sein", "hören haben"], correct: 0, explanation: "Hören -> haben." },
        { question: "Hangi yardımcı fiil çekimlenir?", options: ["werden", "haben", "sein", "ana fiil"], correct: 0, explanation: "Sadece 'werden' özneye göre çekimlenir." },
        { question: "Bitirmiş olacağım.", options: ["Ich werde beendet haben.", "Ich werde beenden.", "Ich habe beendet.", "Ich werde beendet sein."], correct: 0, explanation: "Beenden -> haben." },
        { question: "Gitmiş olmalı.", options: ["Er wird gegangen sein.", "Er wird gehen.", "Er wird gegangen haben.", "Er ist gegangen."], correct: 0, explanation: "Gehen -> sein." }
    ]
};

// ===== UNIT 583: RELATIVSÄTZE (İLGİ CÜMLELERİ) =====
const unit583Grammar: GermanUnitGrammar = {
    unitId: 583,
    title: "Relativsätze",
    rules: [
        {
            id: "de-583-1",
            title: "Dativ ve Genitiv İlgi Cümleleri",
            explanation: "Relativsätze (İlgi cümleleri) bir ismi nitelemek için kullanılır. B1 seviyesinde Dativ ve Genitiv halleri ile edatlı kullanım büyük önem taşır.",
            table: {
                headers: ["Hal", "Maskulin", "Feminin", "Neutral", "Plural"],
                rows: [
                    ["Nominativ", "der", "die", "das", "die"],
                    ["Akkusativ", "den", "die", "das", "die"],
                    ["Dativ", "dem", "der", "dem", "denen"],
                    ["Genitiv", "dessen", "deren", "dessen", "deren"]
                ]
            },
            examples: [
                { de: "Das ist der Mann, dem ich geholfen habe.", tr: "Bu, yardım ettiğim adamdır (helfen + Dativ)." },
                { de: "Die Frau, deren Auto kaputt ist, wartet.", tr: "Arabası bozulan kadın bekliyor (Genitiv)." },
                { de: "Das Kind, das dort spielt, ist mein Sohn.", tr: "Orada oynayan çocuk benim oğlumdur." },
                { de: "Die Leute, mit denen ich arbeite, sind nett.", tr: "Birlikte çalıştığım insanlar naziktir (Edat + Dativ)." },
                { de: "Der Film, von dem ich erzählte, ist toll.", tr: "Anlattığım film harika." },
                { de: "Das ist das Haus, in dem ich wohne.", tr: "Bu benim yaşadığım evdir." },
                { de: "Die Schüler, deren Noten gut sind, freuen sich.", tr: "Notları iyi olan öğrenciler seviniyor." },
                { de: "Wo ist der Schlüssel, den ich suche?", tr: "Aradığım anahtar nerede?" },
                { de: "Ich kenne den Lehrer, dessen Auto blau ist.", tr: "Arabası mavi olan öğretmeni tanıyorum." },
                { de: "Dankst du den Leuten, denen du begegnet bist?", tr: "Karşılaştığın insanlara teşekkür ediyor musun?" }
            ]
        }
    ],
    exercises: [
        { question: "Das ist die Frau, ___ (ona) ich danke.", options: ["der", "die", "den", "dessen"], correct: 0, explanation: "Danken + Dativ (Feminin: der)." },
        { question: "Der Mann, ___ (onun) Auto alt ist.", options: ["dessen", "deren", "desser", "den"], correct: 0, explanation: "Genitiv Maskulin: dessen." },
        { question: "Die Kinder, ___ (onlara) wir helfen.", options: ["denen", "die", "der", "dessen"], correct: 0, explanation: "Dativ Plural Relativ zamiri 'denen'dir." },
        { question: "Das ist das Buch, ___ (onu) ich lese.", options: ["das", "dem", "dessen", "die"], correct: 0, explanation: "Akkusativ Neutral: das." },
        { question: "Die Leute, ___ (onların) Kinder hier sind.", options: ["deren", "dessen", "denen", "die"], correct: 0, explanation: "Genitiv Plural: deren." },
        { question: "Der Stift, mit ___ (onunla) ben yazıyorum.", options: ["dem", "den", "der", "dessen"], correct: 0, explanation: "Mit (Dativ) + Maskulin (dem)." },
        { question: "İlgi cümlesinde fiil nerede yer alır?", options: ["En sonda", "2. sırada", "En başta", "Özneden önce"], correct: 0, explanation: "Relativsatz bir yan cümledir, fiil sondadır." },
        { question: "Wo ist das Cafe, ___ (içinde) wir waren?", options: ["in dem", "in das", "in dessen", "im"], correct: 0, explanation: "Nerede? (Dativ) -> in dem." },
        { question: "Gördüğüm adam.", options: ["Der Mann, den ich sehe.", "Der Mann, der ich sehe.", "Der Mann, dem ich sehe.", "De Mann, dessen ich sehe."], correct: 0, explanation: "Sehen + Akkusativ (den)." },
        { question: "Yardım ettiğim kadın.", options: ["Die Frau, der ich helfe.", "Die Frau, die ich helfe.", "Die Frau, deren ich helfe.", "Die Frau, den ich helfe."], correct: 0, explanation: "Helfen + Dativ (Feminin: der)." }
    ]
};

// ===== UNIT 584: KAUSALSÄTZE (WEIL, DA, DENN) =====
const unit584Grammar: GermanUnitGrammar = {
    unitId: 584,
    title: "Kausalsätze",
    rules: [
        {
            id: "de-584-1",
            title: "Weil, Da ve Denn Bağlaçları",
            explanation: "Almancada neden belirtmek için üç ana yapı kullanılır:\n1. **Weil:** Günlük dilde en yaygın olanıdır. Yan cümle kurar (fiil sonda).\n2. **Da:** Cümle başında sık kullanılır. Bilinen bir nedeni belirtir (fiil sonda).\n3. **Denn:** Koordinatif bağlaçtır. Ana cümle kurar (fiil 2. sırada).",
            table: {
                headers: ["Bağlaç", "Cümle Yapısı", "Örnek"],
                rows: [
                    ["weil", "Yan Cümle (Fiil Sonda)", "Ich bleibe, weil es regnet."],
                    ["da", "Yan Cümle (Fiil Sonda)", "Da es regnet, bleibe ich."],
                    ["denn", "Ana Cümle (Fiil 2.)", "Ich bleibe, denn es regnet."]
                ]
            },
            examples: [
                { de: "Ich lerne Deutsch, weil ich in Berlin arbeiten will.", tr: "Almanca öğreniyorum çünkü Berlin'de çalışmak istiyorum." },
                { de: "Da ich krank bin, kann ich nicht kommen.", tr: "Hasta olduğum için gelemiyorum." },
                { de: "Er freut sich, denn er hat im Lotto gewonnen.", tr: "Seviniyor, çünkü lotoyu kazandı." },
                { de: "Wir gehen rein, weil es draußen kalt ist.", tr: "İçeri giriyoruz çünkü dışarısı soğuk." },
                { de: "Da wir schon fertig sind, gehen wir nach Hause.", tr: "Madem bittik, eve gidiyoruz." },
                { de: "Sie isst nichts, denn sie hat keinen Hunger.", tr: "Hiçbir şey yemiyor çünkü aç değil." },
                { de: "Ich beeile mich, weil ich den Zug nicht verpassen möchte.", tr: "Acele ediyorum çünkü treni kaçırmak istemiyorum." },
                { de: "Da der Film langweilig war, sind wir gegangen.", tr: "Film sıkıcı olduğu için gittik." },
                { de: "Er lernt viel, denn morgen ist die Prüfung.", tr: "Çok çalışıyor çünkü yarın sınav var." },
                { de: "Ich bleibe zu Hause, weil ich müde bin.", tr: "Evde kalıyorum çünkü yorgunum." }
            ]
        }
    ],
    exercises: [
        { question: "Ich komme nicht, ___ (çünkü) ich krank ___.", options: ["weil / bin", "weil / bin ich", "denn / bin", "denn / bin ich"], correct: 0, explanation: "Weil yan cümle kurar, fiil (bin) sonda." },
        { question: "___ (Çünkü/Madem) es sonnig ist, gehen wir raus.", options: ["Da", "Denn", "Weil", "Deshalb"], correct: 0, explanation: "Cümle başında neden belirtirken 'Da' çok yaygındır." },
        { question: "Er singt, ___ (çünkü) o mutlu.", options: ["denn er ist glücklich", "denn er glücklich ist", "weil er ist glücklich", "da er ist glücklich"], correct: 0, explanation: "Denn'den sonra düz cümle (fiil 2. sıra) gelir." },
        { question: "Denn bağlacından sonra fiil kaçıncı sıradadır?", options: ["2. Sırada", "En Sonda", "En Başta", "Farketmez"], correct: 0, explanation: "Denn pozisyon 0 sayılır, özne 1, fiil 2." },
        { question: "Weil bağlacı nerede fiil gerektirir?", options: ["Sonda", "Başta", "Özneden hemen sonra", "Fiilden önce"], correct: 0, explanation: "Yan cümle bağlacı fiili sona atar." },
        { question: "Ich helfe dir, ___ (çünkü) du mein Freund bist.", options: ["weil", "denn", "da", "dass"], correct: 0, explanation: "Uygun bağlaç: weil." },
        { question: "___ wir Hunger hatten, haben wir Pizza bestellt.", options: ["Da", "Denn", "Weil", "Dass"], correct: 0, explanation: "Cümle başında 'Da' kullanılır." },
        { question: "Was ist der Unterschied zwischen weil ve denn?", options: ["Sözdizimi", "Anlam", "Uzunluk", "Vurgu"], correct: 0, explanation: "Tek fark cümle yapısıdır (sonda vs 2. sıra)." },
        { question: "Evde kaldım çünkü yağmur yağıyordu.", options: ["Ich blieb zu Hause, weil es regnete.", "Ich blieb zu Hause, denn regnete es.", "Da es regnete ich zu Hause blieb.", "Ich blieb weil zu Hause."], correct: 0, explanation: "Weil + fiil sonda." },
        { question: "Sie lernt, ___ o geçmek istiyor (bestehen will).", options: ["denn sie will bestehen", "weil sie will bestehen", "da sie will bestehen", "denn sie bestehen will"], correct: 0, explanation: "Denn + düz cümle." }
    ]
};

// ===== UNIT 585: WUNSCHSÄTZE (DİLEK CÜMLELERİ) =====
const unit585Grammar: GermanUnitGrammar = {
    unitId: 585,
    title: "Wunschsätze",
    rules: [
        {
            id: "de-585-1",
            title: "Gerçekleşmeyen Dilekler",
            explanation: "Geçmişte veya şu an gerçekleşmesi mümkün olmayan dilekleri ifade etmek için `Konjunktiv II` kullanılır. Genellikle 'Wenn' ile başlar ve 'doch (nur)' veya 'bloß' gibi parçacıklarla pekiştirilir.",
            table: {
                headers: ["Durum", "Yapı", "Örnek"],
                rows: [
                    ["Şimdiki Zaman", "hätte / wäre / würde", "Hätte ich doch Geld!"],
                    ["Geçmiş Zaman", "wäre / hätte + P2", "Wäre ich doch gekommen!"],
                    ["Eylem", "würde + Mastar", "Würde o sadece yazsa!"]
                ]
            },
            examples: [
                { de: "Hätte ich doch nur mehr Zeit!", tr: "Keşke daha fazla vaktim olsaydı!" },
                { de: "Wäre ich doch früher aufgestanden!", tr: "Keşke daha erken kalksaydım!" },
                { de: "Wenn o doch nur kommen würde!", tr: "Keşke gelse!" },
                { de: "Hättest du bloß auf mich gehört!", tr: "Keşke beni dinleseydin!" },
                { de: "Wärst du doch hier!", tr: "Keşke burada olsaydın!" },
                { de: "Hätte ich bloß mahr gelernt!", tr: "Keşke daha çok çalışsaydım!" },
                { de: "Könnte ich doch nur bir kuş gibi uçabilsem!", tr: "Keşke bir kuş gibi uçabilsem!" },
                { de: "Wenn o doch nur mahr Zeit hätte!", tr: "Keşke onun daha çok vakti olsaydı!" },
                { de: "Hätte ich doch den Job genommen!", tr: "Keşke işi kabul etseydim!" },
                { de: "Wäre her şey doch so einfach!", tr: "Keşke her şey bu kadar kolay olsaydı!" }
            ]
        }
    ],
    exercises: [
        { question: "___ ich doch bir araba ___ (Keşke arabam olsa)!", options: ["Hätte / -", "Wäre / -", "Würde / -", "Bin / -"], correct: 0, explanation: "Sahiplik dileği: hätte." },
        { question: "___ ich doch (burada) ___ (Keşke olsa idim)!", options: ["Wäre / -", "Hätte / -", "Würde / -", "Bin / -"], correct: 0, explanation: "Bulunma dileği: wäre." },
        { question: "Hangi kelime dileği pekiştirir?", options: ["doch nur", "vielleicht", "etwas", "nicht"], correct: 0, explanation: "'doch nur' veya 'bloß' dilek cümlelerinde 'keşke' etkisini verir." },
        { question: "Wenn o ___ (gelse)!", options: ["kommen würde", "kommen wird", "kommt", "kame"], correct: 0, explanation: "Eylem dileği: würde + mastar." },
        { question: "Keşke gitseydim (geçmiş).", options: ["Wäre ich doch gegangen!", "Hätte ich doch gegangen!", "Ging ich doch!", "Ich bin gegangen."], correct: 0, explanation: "Geçmiş zaman dileği: wäre/hätte + P2." },
        { question: "Hätte ich doch ___ (para)! ", options: ["Geld", "Geld gehabt", "mit Geld", "Gelde"], correct: 0, explanation: "Şimdiki zaman dileği mastar/P2 gerektirmez." },
        { question: "Wunschsätze yapısında ünlem nerede olur?", options: ["Cümle sonunda", "Başta", "Kelime arasında", "Yoktur"], correct: 0, explanation: "Genellikle ünlem (!) ile biter." },
        { question: "___ du doch nur ___ (Keşke dinleseydin - P2)!", options: ["Hättest / zugehört", "Wärst / zugehört", "Würdest / zuhören", "Hast / zugehört"], correct: 0, explanation: "Hören -> hättest + P2." },
        { question: "Keşke burada olsa.", options: ["Wäre o doch hier!", "Ist o hier!", "Hätte o burada!", "Würde o burada!"], correct: 0, explanation: "Wäre (olsa) yapısı." },
        { question: "Keşke çok zamanım olsa.", options: ["Hätte ich doch viel Zeit!", "Habe ich Zeit!", "Wäre ich Zeit!", "Würde ich Zeit!"], correct: 0, explanation: "Hätte (sahibi olsam) yapısı." }
    ]
};

// ===== UNIT 586: MODALVERBEN (SUBJEKTIVE BEDEUTUNG - TAHMİN) =====
const unit586Grammar: GermanUnitGrammar = {
    unitId: 586,
    title: "Modal fiillerin Tahmin Kullanımı",
    rules: [
        {
            id: "de-586-1",
            title: "Olasılık ve Tahmin Bildirme",
            explanation: "Modal fiiller sadece yetenek veya zorunluluk değil, aynı zamanda bir olayın gerçekleşme olasılığına dair konuşanın tahminini de bildirir. B1'de bu 'subjektif' kullanım (olasılık dereceleri) önemlidir.",
            table: {
                headers: ["Olasılık", "Modal Fiil", "Örnek"],
                rows: [
                    ["%90-100 (Emin)", "müssen", "Er muss krank sein."],
                    ["%70 (Yüksek)", "dürfte", "Es dürfte bald regnen."],
                    ["%50 (Belki)", "können / könnte", "Das könnte wahr sein."],
                    ["%30 (Düşük)", "mögen", "Das mag sein, aber..."],
                    ["%0-10 (İmkansız)", "können + nicht", "Das kann nicht stimmen."]
                ]
            },
            examples: [
                { de: "Er muss wohl im Stau stehen.", tr: "O herhalde trafikte kalmış olmalı (Çok emin)." },
                { de: "Das dürfte die richtige Adresse sein.", tr: "Bu muhtemelen doğru adres olmalı." },
                { de: "Es könnte morgen schneien.", tr: "Yarın kar yağabilir (Olasılık)." },
                { de: "Das mag zwar stimmen, aber ich glaube es nicht.", tr: "Bu doğru olabilir ama ben inanmıyorum." },
                { de: "Wo ist o? Er müsste eigentlich schon hier sein.", tr: "Nerede o? Aslında şimdiye çoktan burada olması gerekirdi." },
                { de: "Das kann nicht wahr sein!", tr: "Bu gerçek olamaz! (İmkansızlık)" },
                { de: "Er will alles gesehen haben.", tr: "Her şeyi gördüğünü iddia ediyor (İddia anlamı)." },
                { de: "Sie soll eine gute Ärztin sein.", tr: "Onun iyi bir doktor olduğu söyleniyor (Söylenti)." },
                { de: "Das muss ein Fehler sein.", tr: "Bu bir hata olmalı." },
                { de: "Könnte es sein, dass wir uns irren?", tr: "Yanılıyor olabilir miyiz?" }
            ]
        }
    ],
    exercises: [
        { question: "Er ist blass. Er ___ krank sein. (%90 emin)", options: ["muss", "kann", "mag", "soll"], correct: 0, explanation: "Yüksek eminlik için 'müssen' kullanılır." },
        { question: "Es ___ morgen regnen. (%50 olasılık)", options: ["könnte", "muss", "soll", "dürfte"], correct: 0, explanation: "Orta derece olasılık için 'könnte'." },
        { question: "Das ___ nicht stimmen! (İmkansız)", options: ["kann", "muss", "mag", "sollte"], correct: 0, explanation: "İnkâr/İmkansızlık: kann nicht." },
        { question: "Das ___ wahr sein, ama emin değilim. (%30)", options: ["mag", "muss", "soll", "kann nicht"], correct: 0, explanation: "Düşük olasılık: mögen." },
        { question: "'Soll sein' hangi anlamı katar?", options: ["Söylenti / Başkasından duyma", "Kendi fikri", "Yeteneği", "Zorunluluk"], correct: 0, explanation: "Sollen (subjektif) başkasından duyulan bilgiyi aktarır." },
        { question: "Er ___ schon da sein. (%70 tahmin)", options: ["dürfte", "kann", "muss", "mag"], correct: 0, explanation: "Yüksek tahmin: dürfte." },
        { question: "Das ___ o sein. (Onun olduğunu iddia ediyor)", options: ["will", "soll", "muss", "kann"], correct: 0, explanation: "Wollen (subjektif) öznenin kendi iddiasını belirtir." },
        { question: "Bu bir mucize olmalı! (Kesinlik)", options: ["Das muss ein Wunder sein!", "Das kann ein Wunder sein.", "Das soll ein Wunder sein.", "Das mag ein Wunder sein."], correct: 0, explanation: "Müssen kesinlik katar." },
        { question: "Könnte yapısı hangisidir?", options: ["Konjunktiv II", "Präsens", "Perfekt", "Futur"], correct: 0, explanation: "Können'in Konjunktiv II halidir." },
        { question: "Gerçek olamaz.", options: ["Das kann nicht wahr sein.", "Das muss nicht wahr sein.", "Das soll nicht wahr sein.", "Das darf nicht wahr sein."], correct: 0, explanation: "İmkansızlık vurgusu." }
    ]
};

// ===== UNIT 587: EDATLI İSİMLEŞTİRME (NOMINALISIERUNG + PRÄP) =====
const unit587Grammar: GermanUnitGrammar = {
    unitId: 587,
    title: "Edatlarla İsimleştirme",
    rules: [
        {
            id: "de-587-1",
            title: "Beim, Zum, Vom Kullanımları",
            explanation: "Fiiller isimleştirildiğinde (das Lesen, das Essen) sık sık edatlarla birleşerek zarf işlevi görürler. 'Beim' (eylem sırasında), 'Zum' (amaç/için), 'Vom' (kaynak/den) anlamı katar.",
            table: {
                headers: ["Yapı", "Anlamı", "Örnek"],
                rows: [
                    ["bei + dem = beim", "-erken / sırasında", "beim Fernsehen"],
                    ["zu + dem = zum", "için / -e", "zum Mitnehmen"],
                    ["von + dem = vom", "-den / -dan", "vom langen Stehen"],
                    ["vor + dem = vor dem", "-madan önce", "vor dem Schlafen"]
                ]
            },
            examples: [
                { de: "Beim Essen sprechen wir nicht.", tr: "Yemek yerken (yemek sırasında) konuşmayız." },
                { de: "Dieses Wasser ist nicht zum Trinken.", tr: "Bu su içmek için değil (içilmez)." },
                { de: "Vom vielen Laufen bin ich müde.", tr: "Çok koşmaktan yorgunum." },
                { de: "Vor dem Schlafengehen lese ich ein Buch.", tr: "Yatmadan önce bir kitap okurum." },
                { de: "Er hat Probleme beim Atmen.", tr: "Nefes alırken problemleri var." },
                { de: "Viel Glück zum Geburtstag!", tr: "Doğum günün kutlu olsun (Doğum gününe dair)." },
                { de: "Ich höre Musik beim Aufräumen.", tr: "Odayı toplarken müzik dinlerim." },
                { de: "Vom Arbeiten bekommt man Hunger.", tr: "Çalışmaktan insan acıkır." },
                { de: "Zum Lernen braucht man Ruhe.", tr: "Öğrenmek için sessizlik gerekir." },
                { de: "Was sagst du vom Wandern?", tr: "Yürüyüşe (doğa yürüyüşü) ne dersin?" }
            ]
        }
    ],
    exercises: [
        { question: "___ (Çalışırken - Arbeiten) trinke ich Kaffee.", options: ["Beim", "Zum", "Vom", "Vor dem"], correct: 0, explanation: "Eylem süreci: beim." },
        { question: "Das ist bir alet ___ (kesmek için - Schneiden).", options: ["zum", "beim", "vom", "im"], correct: 0, explanation: "Amaç bildirirken: zum." },
        { question: "Ich habe Muskelkater ___ (koşmaktan - Laufen).", options: ["vom", "beim", "zum", "am"], correct: 0, explanation: "Nedensellik/Kaynak: vom." },
        { question: "Hangi yapı '-ken' anlamı katar?", options: ["Beim", "Zum", "Vom", "Aus"], correct: 0, explanation: "Eş zamanlılık: beim." },
        { question: "Fiil isimleştirildiğinde artikeli ne olur?", options: ["das", "die", "der", "yoktur"], correct: 0, explanation: "İsimleşen fiiller her zaman 'das' artikeli alır." },
        { question: "Viel Glück ___ (için) Neujahr!", options: ["zum", "beim", "vom", "am"], correct: 0, explanation: "Kutlamalarda: zum." },
        { question: "___ (Uyumadan önce) trinke ich Milch.", options: ["Vor dem Schlafen", "Beim Schlafen", "Zum Schlafen", "Schlafen"], correct: 0, explanation: "Öncelik bildirir." },
        { question: "___ (Anlamak - Verstehen) der Regeln ist schwer.", options: ["Das Verstehen", "Beim Verstehen", "Vom Verstehen", "Zu Verstehen"], correct: 0, explanation: "Özne olarak isimleşmiş fiil." },
        { question: "Yemek yerken.", options: ["Beim Essen.", "Zum Essen.", "Vom Essen.", "Vor dem Essen."], correct: 0, explanation: "Eş zamanlı eylem." },
        { question: "Öğrenmek için.", options: ["Zum Lernen.", "Beim Lernen.", "Am Lernen.", "Vom Lernen."], correct: 0, explanation: "Amaç bildiren yapı." }
    ]
};

// ===== UNIT 588: SIFAT-FİİLLER (PARTIZIPIALATTRIBUTE) =====
const unit588Grammar: GermanUnitGrammar = {
    unitId: 588,
    title: "Sıfat Olarak Partizip I ve II",
    rules: [
        {
            id: "de-588-1",
            title: "Partizip I ve Partizip II'nin Sıfat Kullanımı",
            explanation: "Fiiller sıfat olarak kullanılabilir.\n1. **Partizip I (Mastar + d):** Şimdiki eylemi nitelemek için kullanılır (Aktif/Devam eden durum).\n2. **Partizip II (Geçmiş hal):** Tamamlanmış eylemi nitelemek için kullanılır (Pasif/Bitmiş durum).",
            table: {
                headers: ["Tür", "Yapı", "Örnek", "Anlamı"],
                rows: [
                    ["Partizip I", "Fiil + d + Ek", "das lachende Kind", "gülen çocuk"],
                    ["Partizip II", "P2 + Ek", "das gekaufte Auto", "satın alınan araba"],
                    ["İşçi", "arbeitend", "der arbeitende Mann", "çalışan adam"],
                    ["Kırık", "gebrochen", "das gebrochene Herz", "kırık kalp"]
                ]
            },
            examples: [
                { de: "Das schlafende Baby ist süß.", tr: "Uyuyan bebek çok tatlı." },
                { de: "Die gestohlene Tasche wurde gefunden.", tr: "Çalınan çanta bulundu." },
                { de: "Dort steht ein kochendes Wasser.", tr: "Orada kaynayan bir su duruyor." },
                { de: "Ich lese das gedruckte Buch.", tr: "Basılı kitabı okuyorum." },
                { de: "Die singenden Vögel sind wunderbar.", tr: "Öten (şarkı söyleyen) kuşlar harika." },
                { de: "Zertstörte Häuser sieht man überall.", tr: "Her yerde yıkılmış evler görünüyor." },
                { de: "Ein fahrendes Auto darf man nicht stoppen.", tr: "Hareket halindeki (giden) bir arabayı durdurmamalısın." },
                { de: "Gebackener Kuchen riecht gut.", tr: "Pişmiş (fırınlanmış) kek güzel kokar." },
                { de: "Die weinende Frau braucht Hilfe.", tr: "Ağlayan kadının yardıma ihtiyacı var." },
                { de: "Die Einladung für die kommende Woche.", tr: "Gelecek hafta için davetiye." }
            ]
        }
    ],
    exercises: [
        { question: "Das ___ (uyuyan - schlafen) Kind.", options: ["schlafende", "geschlafene", "schlafend", "schlafen"], correct: 0, explanation: "Devam eden eylem: Partizip I (mastar+d)." },
        { question: "Der ___ (çalınan - stehlen) Wagen.", options: ["gestohlene", "stehlende", "gestohlen", "stehlen"], correct: 0, explanation: "Bitmiş/Pasif durum: Partizip II." },
        { question: "Die ___ (çalışan - arbeiten) Leute.", options: ["arbeitenden", "gearbeiteten", "arbeitend", "arbeiten"], correct: 0, explanation: "Niteleme (Akkusativ/Nominativ Plural) eki alır." },
        { question: "Hangi yapı 'edilgen/bitmiş' anlamı katar?", options: ["Partizip II", "Partizip I", "Mastar", "Präteritum"], correct: 0, explanation: "Partizip II nitelemeleri pasif anlamlıdır." },
        { question: "Ein ___ (ağlayan - weinen) Baby.", options: ["weinendes", "geweintes", "weinend", "weinende"], correct: 0, explanation: "Nominativ Neutral: -es eki." },
        { question: "Das ___ (kaynayan - kochen) Wasser.", options: ["kochende", "gekochte", "kochend", "kochen"], correct: 0, explanation: "Şu an olan eylem." },
        { question: "Die ___ (yıkılmış - zerstören) Brücke.", options: ["zerstörte", "zerstörende", "zerstört", "zerstören"], correct: 0, explanation: "Geçmişte bitmiş durum." },
        { question: "Partizip I nasıl oluşturulur?", options: ["Infinitiv + d", "ge- + Fiil", "Fiil + -te", "Fiil + -en"], correct: 0, explanation: "Mastar sonuna 'd' eklenir." },
        { question: "Gülen adam.", options: ["Der lachende Mann.", "Der gelachte Mann.", "Der lachte Mann.", "Der lachend Mann."], correct: 0, explanation: "Lachen + d + e (çekim)." },
        { question: "Haşlanmış yumurta.", options: ["Das gekochte Ei.", "Das kochende Ei.", "Das kocht Ei.", "Das kochte Ei."], correct: 0, explanation: "Bitmiş eylem: P2." }
    ]
};

// ===== UNIT 589: ÇİFTLİ BAĞLAÇLAR (DOPPELKONJUNKTIONEN) =====
const unit589Grammar: GermanUnitGrammar = {
    unitId: 589,
    title: "Çiftli Bağlaçlar",
    rules: [
        {
            id: "de-589-1",
            title: "İki Parçalı Bağlaçların Kullanımı",
            explanation: "Cümledeki öğeleri birbirine bağlayan ve anlamı kuvvetlendiren iki parçalı yapılardır.",
            table: {
                headers: ["Bağlaç", "Anlamı", "Örnek"],
                rows: [
                    ["sowohl... als auch", "hem... hem de", "Sowohl ich als auch du."],
                    ["weder... noch", "ne... ne de", "Weder Tee noch Kaffee."],
                    ["entweder... oder", "ya... ya da", "Entweder heute oder morgen."],
                    ["nicht nur... sondern auch", "sadece değil... aynı zamanda", "Nicht nur süß, sondern auch lecker."],
                    ["zwar... aber", "gerçi... ama", "Zwar alt, aber stabil."]
                ]
            },
            examples: [
                { de: "Er spricht sowohl Deutsch als auch Englisch.", tr: "O hem Almanca hem de İngilizce konuşuyor." },
                { de: "Ich habe weder Zeit noch Geld.", tr: "Ne vaktim ne de param var." },
                { de: "Wir können entweder ins Kino veya ins Tiyatro gitmek.", tr: "Ya sinemaya ya da tiyatroya gidebiliriz." },
                { de: "Das Auto ist nicht nur schnell, sondern auch sicher.", tr: "Araba sadece hızlı değil, aynı zamanda güvenli." },
                { de: "Zwar bin ich müde, aber ich arbeite weiter.", tr: "Gerçi yorgunum ama çalışmaya devam ediyorum." },
                { de: "Sowohl meine Mutter als auch mein Vater sind Lehrer.", tr: "Hem annem hem de babam öğretmen." },
                { de: "Er trinkt weder Alkohol noch raucht er.", tr: "O ne alkol alıyor ne de sigara içiyor." },
                { de: "Entweder du hilfst mir oder du gehst.", tr: "Ya bana yardım edersin ya da gidersin." },
                { de: "Sie ist nicht nur schön, sondern auch sehr klug.", tr: "O sadece güzel değil, aynı zamanda çok zekidir." },
                { de: "Zwar ist es teuer, aber die Qualität ist top.", tr: "Gerçi pahalı ama kalitesi en üst düzeyde." }
            ]
        }
    ],
    exercises: [
        { question: "Er isst ___ Fleisch ___ Fisch. (Ne... ne de)", options: ["weder / noch", "sowohl / als auch", "entweder / oder", "zwar / aber"], correct: 0, explanation: "Olumsuz ikili bağlaç: weder... noch." },
        { question: "Ich trinke ___ Tee ___ Kaffee. (Hem... hem de)", options: ["sowohl / als auch", "weder / noch", "entweder / oder", "zwar / aber"], correct: 0, explanation: "Olumlu ikili: sowohl... als auch." },
        { question: "___ du lernst ___ du fällst durch. (Ya... ya da)", options: ["Entweder / oder", "Weder / noch", "Sowohl / als auch", "Zwar / aber"], correct: 0, explanation: "Seçenek sunar: entweder... oder." },
        { question: "Das Buch ist ___ teuer ___ gut. (Sadece değil, aynı zamanda)", options: ["nicht nur / sondern auch", "weder / noch", "zwar / aber", "sowohl / als auch"], correct: 0, explanation: "Eklentili yapı." },
        { question: "___ es regnet, ___ biz dışarı çıkıyoruz (zıtlık).", options: ["Zwar / aber", "Entweder / oder", "Weder / noch", "Sowohl / als auch"], correct: 0, explanation: "Gerçi... ama: zwar... aber." },
        { question: "Weder... noch yapısından sonra fiil nasıldır?", options: ["Olumlu (başka 'nicht' gelmez)", "Olumsuz", "Fiil gelmez", "Mastar"], correct: 0, explanation: "Bağlacın kendisi olumsuzluk kattığı için fiil olumludur." },
        { question: "Sowohl Ali ___ Ayşe kommen.", options: ["als auch", "oder", "noch", "sondern"], correct: 0, explanation: "Tamamlayıcısı 'als auch'dır." },
        { question: "Nicht nur... bağlacından sonra ne gelir?", options: ["sondern auch", "oder", "als auch", "noch"], correct: 0, explanation: "Standart ikili." },
        { question: "Ne elma ne armut.", options: ["Weder Apfel noch Birne.", "Sowohl Apfel als auch Birne.", "Entweder Apfel oder Birne.", "Nur Apfel und Birne."], correct: 0, explanation: "Weder... noch yapısı." },
        { question: "Ya şimdi ya asla.", options: ["Entweder jetzt oder nie.", "Weder jetzt noch nie.", "Sowohl jetzt als auch nie.", "Zwar jetzt aber nie."], correct: 0, explanation: "Entweder... oder yapısı." }
    ]
};

// ===== UNIT 590: B1 GENEL TEKRAR (B1 ABSCHLUSS) =====
const unit590Grammar: GermanUnitGrammar = {
    unitId: 590,
    title: "B1 Genel Gramer Özeti",
    rules: [
        {
            id: "de-590-1",
            title: "B1 Seviyesi Final Değerlendirmesi",
            explanation: "B1 seviyesini tamamladınız! Bu ünitede; zamanlar (Perfekt, Präteritum, Plusquamperfekt, Futur), bağlaçlar (Nebensätze), Konjunktiv II ve edilgen çatı (Passiv) gibi tüm temel konuları kapsayan genel bir tekrar yapacağız.",
            table: {
                headers: ["Konu", "Anahtar Yapı", "Örnek"],
                rows: [
                    ["Zamanlar", "hatte/war + P2", "Plusquamperfekt"],
                    ["Dilek", "hätte / wäre / würde", "Konjunktiv II"],
                    ["Bağlaçlar", "weil, obwohl, damit", "Yan Cümleler"],
                    ["Edilgen", "werden + P2", "Passiv"],
                    ["İlgi", "der, die, dem, dessen", "Relativsätze"]
                ]
            },
            examples: [
                { de: "Ich habe bir sınavı geçtim, weil ich viel gelernt hatte.", tr: "Sınavı geçtim çünkü çok çalışmıştım." },
                { de: "Wenn ich reich wäre, würde ich reisen.", tr: "Eğer zengin olsaydım, seyahat ederdim." },
                { de: "Das Haus wird gerade renoviert.", tr: "Ev şu an restore ediliyor (Passiv)." },
                { de: "Kennst du den Mann, der dort steht?", tr: "Orada duran adamı tanıyor musun?" },
                { de: "Olası tahmin: Er müsste schon weg sein.", tr: "O çoktan gitmiş olmalı." },
                { de: "Hem hem de: Sowohl morgen als auch heute.", tr: "Hem yarın hem de bugün." },
                { de: "Tavsiye: Du solltest zum Arzt gehen.", tr: "Doktora gitmelisin." },
                { de: "Ne ne de: Weder Sonne noch Regen.", tr: "Ne güneş ne de yağmur." },
                { de: "İsimleşme: Beim Lernen lernt man.", tr: "Öğrenirken insan öğrenir." },
                { de: "Gelecek: Nächstes Jahr werde ich fliegen.", tr: "Gelecek yıl uçacağım." }
            ]
        }
    ],
    exercises: [
        { question: "Ich gehe, ___ (çünkü) es regnet.", options: ["weil", "denn", "da", "dass"], correct: 0, explanation: "Fiil sonda -> weil." },
        { question: "Ich gehe, ___ (çünkü) es regnet.", options: ["denn", "weil", "da", "obwohl"], correct: 0, explanation: "Fiil 2. sıra -> denn." },
        { question: "Wenn ich Zeit ___ (olsa), ___ (gelirdim) ich.", options: ["hätte / käme", "habe / komme", "hatte / kam", "hätte / würde"], correct: 0, explanation: "Konjunktiv II dilek." },
        { question: "Das Buch ___ (okunuyor - Passiv).", options: ["wird gelesen", "ist gelesen", "hat gelesen", "wurde gelesen"], correct: 0, explanation: "Passiv Präsens: werden + P2." },
        { question: "Der Mann, ___ (ona) ich helfe.", options: ["dem", "den", "der", "dessen"], correct: 0, explanation: "Helfen + Dativ." },
        { question: "Nachdem o ___ (yemişti - essen)...", options: ["gegessen hatte", "gegessen hat", "essen hatte", "hatte essen"], correct: 0, explanation: "Plusquamperfekt." },
        { question: "Bis morgen ___ ich ___ (bitirmiş olacağım).", options: ["werde / beendet haben", "werde / beenden", "bin / beendet", "habe / beendet"], correct: 0, explanation: "Futur II." },
        { question: "Obwohl o hasta ___ (olmasına rağmen), çalışıyor.", options: ["ist", "bin", "war", "sei"], correct: 0, explanation: "Obwohl yan cümle, fiil sonda." },
        { question: "___ (Uyumadan önce) trinke ich Tee.", options: ["Vor dem Schlafen", "Beim Schlafen", "Zum Schlafen", "Nach dem Schlafen"], correct: 0, explanation: "Nominalisierung." },
        { question: "Das ___ (kaynayan) Wasser.", options: ["kochende", "gekochte", "kochend", "kochen"], correct: 0, explanation: "Partizip I." },
        { question: "Ich habe ___ Zeit ___ Geld. (Ne... ne de)", options: ["weder / noch", "sowohl / als auch", "entweder / oder", "zwar / aber"], correct: 0, explanation: "Olumsuz ikili." },
        { question: "Yarın yağmur yağacak (Futur I).", options: ["Morgen wird es regnen.", "Morgen regnet es.", "Morgen hat es geregnet.", "Morgen würde es regnen."], correct: 0, explanation: "Werden + mastar." },
        { question: "Oraya gitmeliydin (Tavsiye).", options: ["Du solltest dorthin gehen.", "Du sollst dorthin gehen.", "Du bist dorthin gegangen.", "Du gehst dorthin."], correct: 0, explanation: "Sollten tavsiye." },
        { question: "İlgileniyorum (Dönüşlü).", options: ["Ich interessiere mich.", "Ich interessiere mir.", "Ich bin interessant.", "Habe Interesse."], correct: 0, explanation: "Reflexiv." },
        { question: "Kırık cam (Sıfat).", options: ["Das gebrochene Glas.", "Das brechende Glas.", "Das gebrochen Glas.", "Das brechen Glas."], correct: 0, explanation: "Partizip II sıfat." },
        { question: "Keşke gelse!", options: ["Käme er doch!", "Kommt er!", "Er ist gekommen.", "Er soll kommen."], correct: 0, explanation: "Wunschsatz." },
        { question: "Gördüğüm çocuk.", options: ["Das Kind, das ich sehe.", "Das Kind, dem ich sehe.", "Das Kind, den ich sehe.", "Das Kind, deren ich sehe."], correct: 0, explanation: "Relativ neutral." },
        { question: "B1 seviyesinde hangi geçmiş zaman daha çok 'romanlarda' kullanılır?", options: ["Präteritum", "Perfekt", "Plusquamperfekt", "Präsens"], correct: 0, explanation: "Präteritum yazı dili zamanıdır." },
        { question: "Das ___ (%90 emin tahmin) wahr sein.", options: ["muss", "kann", "dürfte", "mag"], correct: 0, explanation: "Subjektiv müssen." },
        { question: "Tebrikler! B1 müfredatı bitti.", options: ["Herzlichen Glückwunsch!", "Guten Appetit!", "Gute Besserung!", "Viel Glück!"], correct: 0, explanation: "Başarı tebriği." }
    ]
};

const unitMap: { [key: number]: GermanUnitGrammar } = {
    561: unit561Grammar, 562: unit562Grammar, 563: unit563Grammar, 564: unit564Grammar, 565: unit565Grammar,
    566: unit566Grammar, 567: unit567Grammar, 568: unit568Grammar, 569: unit569Grammar, 570: unit570Grammar,
    571: unit571Grammar, 572: unit572Grammar, 573: unit573Grammar, 574: unit574Grammar, 575: unit575Grammar,
    576: unit576Grammar, 577: unit577Grammar, 578: unit578Grammar, 579: unit579Grammar, 580: unit580Grammar,
    581: unit581Grammar, 582: unit582Grammar, 583: unit583Grammar, 584: unit584Grammar, 585: unit585Grammar,
    586: unit586Grammar, 587: unit587Grammar, 588: unit588Grammar, 589: unit589Grammar, 590: unit590Grammar,
};

export function getGermanB1GrammarForUnit(unitId: number): GermanUnitGrammar {
    return unitMap[unitId] || unit561Grammar;
}
