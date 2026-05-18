import { GrammarRule, GrammarExercise } from "./grammar";

export interface GermanUnitGrammar {
    unitId: number;
    title: string;
    rules: GrammarRule[];
    exercises: GrammarExercise[];
}

// ===== UNIT 591: İLERİ GRAMER 1 =====
const unit591Grammar: GermanUnitGrammar = {
    unitId: 591,
    title: "İleri Gramer 1 (Erweiterte Zeiten)",
    rules: [
        {
            id: "de-591-1",
            title: "Futur II: Gelecekte Tamamlanmışlık",
            explanation: "Futur II, gelecekte belirli bir zamanda tamamlanmış olacak eylemleri veya geçmişe yönelik güçlü tahminleri ifade etmek için kullanılır.\n\n**Formül:** [Özne] + [werden (çekimli)] + ... + [Partizip II] + [haben/sein (mastar)]",
            examples: [
                { de: "Morgen um diese Zeit werde ich die Prüfung bestanden haben.", tr: "Yarın bu saatte sınavı vermiş olacağım." },
                { de: "Er wird schon angekommen sein.", tr: "Çoktan varmış olmalı. (Geçmişe dair güçlü tahmin)" }
            ]
        }
    ],
    exercises: [
        { question: "Morgen um diese Zeit ___ ich die Arbeit beendet haben.", options: ["werde", "wirst", "wird", "werden"], correct: 0, explanation: "'ich' öznesi ile 'werde' kullanılır." },
        { question: "Er wird wahrscheinlich schon nach Hause gegangen ___.", options: ["sein", "haben", "werden", "ist"], correct: 0, explanation: "Gehen yardımcı fiili 'sein' ile kullanılır." },
        { question: "Futur II hangi anlamı katabilir?", options: ["Gelecekte tamamlanmışlık / Güçlü tahmin", "Şu anki istek", "Geçmişteki pişmanlık", "Şimdiki zaman planı"], correct: 0, explanation: "Futur II hem gelecekte tamamlanacak işleri hem de tahminleri bildirir." },
        { question: "Bis morgen wirst du das Rätsel gelöst ___.", options: ["haben", "sein", "werden", "hast"], correct: 0, explanation: "Lösen fiili 'haben' ile çekimlenir." },
        { question: "Sie werden das Haus bereits gebaut ___.", options: ["haben", "sein", "werden", "haben werden"], correct: 0, explanation: "Bauen fiili 'haben' gerektirir." }
    ]
};

// ===== UNIT 592: İLERİ GRAMER 2 =====
const unit592Grammar: GermanUnitGrammar = {
    unitId: 592,
    title: "İleri Gramer 2 (Komplexe Strukturen)",
    rules: [
        {
            id: "de-592-1",
            title: "Je ... desto Yapısı (Karşılaştırma)",
            explanation: "'Je ... desto / umso' yapısı iki durum arasındaki doğru veya ters orantıyı gösterir. 'Je' ile kurulan ilk cümle yan cümledir (fiil sonda), 'desto' ile başlayan ikinci cümle ise ana cümledir (fiil karşılaştırmalı sıfattan hemen sonra gelir).",
            examples: [
                { de: "Je mehr du lernst, desto besser sprichst du.", tr: "Ne kadar çok çalışırsan, o kadar iyi konuşursun." },
                { de: "Je schneller wir arbeiten, umso früher sind wir fertig.", tr: "Ne kadar hızlı çalışırsak, o kadar erken bitiririz." }
            ]
        }
    ],
    exercises: [
        { question: "Je mehr du lernst, ___ besser wirst du.", options: ["desto", "weil", "da", "denn"], correct: 0, explanation: "Je'nin karşılığı 'desto' veya 'umso'dur." },
        { question: "Je älter man wird, desto ___ ist die Erfahrung.", options: ["größer", "groß", "am größten", "große"], correct: 0, explanation: "Desto'dan sonra Komparativ sıfat gelir." },
        { question: "Je mehr Sport du treibst, ...", options: ["desto gesünder lebst du", "desto du gesünder lebst", "desto lebst du gesünder", "desto gesünder du lebst"], correct: 0, explanation: "Desto + Komparativ sıfat + Fiil + Özne yapısı doğrudur." },
        { question: "Je kälter es ist, ___ mehr heizen wir.", options: ["desto", "je", "da", "dass"], correct: 0, explanation: "Formül: Je ... desto." },
        { question: "Je schneller du fährst, desto ___ (tehlikeli) ist es.", options: ["gefährlicher", "gefährlich", "am gefährlichsten", "gefährlichere"], correct: 0, explanation: "Gefährlich -> gefährlicher." }
    ]
};

// ===== UNIT 593: DEYİMLER 1 =====
const unit593Grammar: GermanUnitGrammar = {
    unitId: 593,
    title: "Deyimler 1 (Redewendungen)",
    rules: [
        {
            id: "de-593-1",
            title: "Deyimlerin Gramer Uyumları",
            explanation: "Almancada deyimler (Redewendungen) kullanılırken fiiller ve nesneler normal dilbilgisi kurallarına (Dativ/Akkusativ) göre çekimlenir.",
            examples: [
                { de: "Jemandem auf den Wecker gehen.", tr: "Birinin sinirini bozmak / kafasını ütülemek." },
                { de: "Die Daumen drücken.", tr: "Şans dilemek / başarılar dilemek." }
            ]
        }
    ],
    exercises: [
        { question: "Ich drücke dir die ___ (şans dileme deyimi).", options: ["Daumen", "Finger", "Hände", "Füße"], correct: 0, explanation: "'Daumen drücken' şans dilemek anlamına gelen kalıptır." },
        { question: "Du gehst mir auf ___ Wecker!", options: ["den", "dem", "der", "das"], optionsLabels: ["den", "dem", "der", "das"], correct: 0, explanation: "auf den Wecker gehen kalıbı Akkusativ eril 'den' alır." } as unknown as GrammarExercise,
        { question: "Was bedeutet 'Zwei Fliegen mit einer Klappe schlagen'?", options: ["Bir taşla iki kuş vurmak", "Çok çalışmak", "Yalan söylemek", "Tembellik yapmak"], correct: 0, explanation: "Deyimin Türkçe karşılığı 'bir taşla iki kuş vurmak'tır." },
        { question: "Er hat zwei linke ___.", options: ["Hände", "Füße", "Augen", "Ohren"], correct: 0, explanation: "'Zwei linke Hände haben' beceriksiz olmak demektir." },
        { question: "Daumen ___ (Şans dilemek fiili).", options: ["drücken", "ziehen", "schlagen", "heben"], correct: 0, explanation: "Daumen drücken." }
    ]
};

// ===== UNIT 594: DEYİMLER 2 =====
const unit594Grammar: GermanUnitGrammar = {
    unitId: 594,
    title: "Deyimler 2 (Weitere Redewendungen)",
    rules: [
        {
            id: "de-594-1",
            title: "Deyimlerin Cümle Yapısı",
            explanation: "Deyimler cümle içinde kullanılırken eylemler cümlenin ikinci sırasında çekimlenir, deyimsel diğer kelimeler sona kayabilir.",
            examples: [
                { de: "Etwas durch die Blume sagen.", tr: "Lafı dolandırarak / kibarca söylemek." },
                { de: "Ein Auge zudrücken.", tr: "Görmezden gelmek / göz yummak." }
            ]
        }
    ],
    exercises: [
        { question: "Er hat ein Auge ___gedrückt.", options: ["zu", "auf", "mit", "ab"], correct: 0, explanation: "zudrücken (göz yummak) ayrılabilir bir fiildir." },
        { question: "Sag es mir direkt, nicht durch die ___!", options: ["Blume", "Katze", "Tür", "Wand"], correct: 0, explanation: "durch die Blume sagen = dolaylı anlatmak." },
        { question: "Ich verstehe nur ___ (Hiçbir şey anlamıyorum deyimi).", options: ["Bahnhof", "Flughafen", "Küche", "Schule"], correct: 0, explanation: "'Ich verstehe nur Bahnhof' hiçbir şey anlamıyorum demektir." },
        { question: "Er hat den Faden ___ (Konuyu kaçırdı).", options: ["verloren", "gesucht", "gefunden", "gemacht"], correct: 0, explanation: "'den Faden verlieren' konuşurken konuyu/ipi kaçırmak demektir." },
        { question: "Jemandem die Daumen ___.", options: ["drücken", "drücke", "gedrückt", "drückt"], correct: 0, explanation: "Mastar kullanımı." }
    ]
};

// ===== UNIT 595: FORMAL YAZIŞMA =====
const unit595Grammar: GermanUnitGrammar = {
    unitId: 595,
    title: "Formal Yazışma (Geschäftsbriefe)",
    rules: [
        {
            id: "de-595-1",
            title: "Formel Yazışmada Mektup Giriş ve Çıkışları",
            explanation: "Almanca resmi mektup veya e-postalarda giriş hitapları ve kapanış selamları katı gramer kurallarına tabidir.\n\n• **Giriş:** *Sehr geehrte Damen und Herren,* (Virgülden sonra küçük harfle başlanır!)\n• **Kapanış:** *Mit freundlichen Grüßen* (Virgül konulmaz!)",
            examples: [
                { de: "Sehr geehrter Herr Müller, ich schreibe Ihnen...", tr: "Sayın Bay Müller, size yazıyorum..." },
                { de: "Mit freundlichen Grüßen (Unterschrift)", tr: "Saygılarımla (İmza)" }
            ]
        }
    ],
    exercises: [
        { question: "Sehr geehrte Damen und Herren, ___ (nasıl devam eder)?", options: ["ich schreibe Ihnen...", "Ich schreibe Ihnen...", "ich schreibe dir...", "Ich schreibe dir..."], correct: 0, explanation: "Resmi mektupta hitap virgülden sonra küçük harfle devam eder ve 'Ihnen' resmi formu kullanılır." },
        { question: "Mit freundlichen Grüßen yazıldıktan sonra hangi işaret konulur?", options: ["Hiçbir işaret konulmaz", "Virgül (,)", "Nokta (.)", "Ünlem (!)"], correct: 0, explanation: "Mit freundlichen Grüßen'den sonra hiçbir noktalama işareti gelmez." },
        { question: "Mektupta 'Sayın Bayan Schmidt' hitabı nasıldır?", options: ["Sehr geehrte Frau Schmidt", "Sehr geehrter Frau Schmidt", "Sehr geehrtes Frau Schmidt", "Sehr geehrten Frau Schmidt"], correct: 0, explanation: "Frau dişil olduğu için 'Sehr geehrte' kullanılır." },
        { question: "Resmi e-postada 'Sana' yerine ne kullanılır?", options: ["Ihnen / Sie", "dir / dich", "euch / euch", "ihr / sie"], correct: 0, explanation: "Resmiyet için 'Ihnen / Sie' kullanılır." },
        { question: "Mektup ekinde dosya olduğunu belirtmek için ne denir?", options: ["Die Datei befindet sich im Anhang.", "Die Datei ist weg.", "Ich habe keine Datei.", "Im Anhang gibt es nichts."], correct: 0, explanation: "Anhang = Mektup/e-posta eki." }
    ]
};

// ===== UNIT 596: SUNUM TEKNİKLERİ =====
const unit596Grammar: GermanUnitGrammar = {
    unitId: 596,
    title: "Sunum Teknikleri (Fortgeschrittene Präsentation)",
    rules: [
        {
            id: "de-596-1",
            title: "Sunum Yapılandırma Kalıpları",
            explanation: "Sunum yaparken dinleyiciyi yönlendirmek için geçiş kalıpları (zuerst, danach, schließlich) ve Inversion (fiil-özne yer değişimi) kullanılır.",
            examples: [
                { de: "Zuerst möchte ich Ihnen die Agenda vorstellen.", tr: "İlk olarak size ajandayı tanıtmak istiyorum." },
                { de: "Schließlich komme ich zum Fazit.", tr: "Son olarak sonuç bölümüne geliyorum." }
            ]
        }
    ],
    exercises: [
        { question: "Zuerst ___ ich mich kurz vor. (tanıtmak - vorstellen)", options: ["stelle / vor", "vorstelle / -", "stellt / vor", "vorstellt / -"], correct: 0, explanation: "Vorstellen ayrılabilir bir fiildir ve Inversion uygulanır." },
        { question: "Ich bedanke mich für ___ Aufmerksamkeit.", options: ["Ihre", "deine", "seine", "ihre"], correct: 0, explanation: "Resmi sunumlarda dinleyicilere 'Ihre' (sizin) şeklinde hitap edilir." },
        { question: "Sunum sonunda ne denir?", options: ["Vielen Dank für Ihre Aufmerksamkeit.", "Tschüss!", "Hallo zusammen.", "Guten Morgen."], correct: 0, explanation: "Dinleyicilere teşekkür etmek en klasik kapanıştır." },
        { question: "Als Nächstes ___ (bakacağız - betrachten) wir die Statistik.", options: ["betrachten", "betrachtet", "betrachteten", "betrachte"], correct: 0, explanation: "Wir betrachten." },
        { question: "Außerdem ___ ich betonen, dass... (vurgulamak istiyorum - möchte)", options: ["möchte", "möchtest", "möchten", "möchtet"], correct: 0, explanation: "Ich möchte." }
    ]
};

// ===== UNIT 597: MÜZAKERE =====
const unit597Grammar: GermanUnitGrammar = {
    unitId: 597,
    title: "Müzakere (Verhandlungsfähigkeiten)",
    rules: [
        {
            id: "de-597-1",
            title: "Nezaketli Şart ve İstekler (Konjunktiv II)",
            explanation: "İş müzakerelerinde doğrudan ve kaba görünmemek adına Konjunktiv II (wäre, hätte, würde) yapıları sıklıkla tercih edilir.",
            examples: [
                { de: "Es wäre gut, wenn wir einen Kompromiss fänden.", tr: "Bir uzlaşma bulsaydık iyi olurdu." },
                { de: "Könnten Sie uns einen Rabatt gewähren?", tr: "Bize bir indirim sağlayabilir miydiniz?" }
            ]
        }
    ],
    exercises: [
        { question: "Es ___ besser, wenn wir uns einigen. (sein - Konjunktiv II)", options: ["wäre", "ist", "war", "wären"], correct: 0, explanation: "Sein Konjunktiv II tekil hali 'wäre'dir." },
        { question: "___ Sie uns entgegenkommen? (Können - Konjunktiv II)", options: ["Könnten", "Können", "Kannst", "Konntet"], correct: 0, explanation: "Nezaketli soru: Könnten Sie...?" },
        { question: "Wenn wir mehr Budget ___ (sahip olsaydık), würden wir investieren.", options: ["hätten", "haben", "hatten", "haben werden"], correct: 0, explanation: "Haben Konjunktiv II çoğul hali 'hätten'dir." },
        { question: "Müzakerede 'uzlaşma' kelimesinin Almancası nedir?", options: ["der Kompromiss", "der Streit", "der Vertrag", "das Geld"], correct: 0, explanation: "der Kompromiss = uzlaşma." },
        { question: "Ich ___ gerne ein Angebot machen. (würde)", options: ["würde", "werde", "wäre", "hätte"], correct: 0, explanation: "Ich würde gerne..." }
    ]
};

// ===== UNIT 598: HUKUK ALMANCASI =====
const unit598Grammar: GermanUnitGrammar = {
    unitId: 598,
    title: "Hukuk Almancası (Rechtsbegriffe)",
    rules: [
        {
            id: "de-598-1",
            title: "Yasal Zorunluluk ve Haklar (Sollen / Dürfen)",
            explanation: "Hukuki metinlerde ve yasalarda zorunluluklar genellikle 'sollen' veya 'müssen', haklar/izinler ise 'dürfen' modal fiilleriyle ifade edilir.",
            examples: [
                { de: "Verträge müssen eingehalten werden.", tr: "Sözleşmelere uyulmalıdır. (Ahde vefa)" },
                { de: "Es ist nicht gestattet, hier zu parken.", tr: "Buraya park etmeye izin verilmemiştir." }
            ]
        }
    ],
    exercises: [
        { question: "Verträge ___ eingehalten werden. (müssen)", options: ["müssen", "sollen", "können", "dürfen"], correct: 0, explanation: "Zorunluluk bildirir." },
        { question: "Laut Gesetz ___ man hier nicht rauchen. (yasak/izin yok)", options: ["darf", "soll", "kann", "muss"], correct: 0, explanation: "Yasak/izin yokluğu 'nicht dürfen' (darf nicht) ile verilir." },
        { question: "Der Vertrag ___ von beiden Parteien unterschrieben werden.", options: ["muss", "kann", "darf", "will"], correct: 0, explanation: "Yasal gereklilik." },
        { question: "Hukuk dilinde 'yasa' kelimesinin Almancası nedir?", options: ["das Gesetz", "der Vertrag", "die Strafe", "der Anwalt"], correct: 0, explanation: "das Gesetz = yasa." },
        { question: "Wer den Vertrag bricht, ___ eine Strafe zahlen.", options: ["muss", "darf", "kann", "möchte"], correct: 0, explanation: "Cezai zorunluluk." }
    ]
};

// ===== UNIT 599: TIBBİ ALMANCA =====
const unit599Grammar: GermanUnitGrammar = {
    unitId: 599,
    title: "Tıbbi Almanca (Medizinische Begriffe)",
    rules: [
        {
            id: "de-599-1",
            title: "Öneri ve Tedavi Reçeteleri (Sollten)",
            explanation: "Doktorlar hastalara önerilerde bulunurken nezaketli tavsiye bildiren 'sollten' modal fiilini sıklıkla kullanırlar.",
            examples: [
                { de: "Sie sollten dreimal täglich eine Tablette einnehmen.", tr: "Günde üç kez bir tablet almalısınız." },
                { de: "Es wird empfohlen, viel Wasser zu trinken.", tr: "Bol su içilmesi tavsiye edilir." }
            ]
        }
    ],
    exercises: [
        { question: "Sie ___ mehr Sport treiben. (Tavsiye - sollen)", options: ["sollten", "müssen", "dürfen", "können"], correct: 0, explanation: "Tavsiyeler için 'sollten' idealdir." },
        { question: "Der Arzt hat mir Tabletten ___ (yazdı - verschreiben).", options: ["verschrieben", "geschrieben", "geverschrieben", "schrieb"], correct: 0, explanation: "Verschreiben ayrılamayan bir fiildir, Partizip II hali 'verschrieben' olur." },
        { question: "'Symptom' kelimesinin Almanca artikeli nedir?", options: ["das", "der", "die", "den"], correct: 0, explanation: "das Symptom." },
        { question: "Der Befund ist ___ (negatif).", options: ["negativ", "positiv", "schlecht", "gut"], correct: 0, explanation: "Tıbbi terim." },
        { question: "Sie sollten sich im Bett ___ (dinlenmek - ausruhen).", options: ["ausruhen", "ruhen aus", "ausgeruht", "ruhen"], correct: 0, explanation: "Modal fiil ile asıl fiil sonda mastar kalır." }
    ]
};

// ===== UNIT 600: FİNANS ALMANCASI =====
const unit600Grammar: GermanUnitGrammar = {
    unitId: 600,
    title: "Finans Almancası (Finanzvokabular)",
    rules: [
        {
            id: "de-600-1",
            title: "Finansal Koşul Cümleleri",
            explanation: "Finansal analizlerde, risk durumlarında ve yatırımlarda şartlı (Wenn) yapılar ve bunların sonuçları sıkça analiz edilir.",
            examples: [
                { de: "Wenn die Zinsen steigen, sinken die Aktienkurse.", tr: "Faizler yükselirse, hisse senedi fiyatları düşer." },
                { de: "Durch Investitionen kann man Vermögen aufbauen.", tr: "Yatırımlar vasıtasıyla servet inşa edilebilir." }
            ]
        }
    ],
    exercises: [
        { question: "Wenn die Zinsen ___, sinken die Kurse. (yükselirse - steigen)", options: ["steigen", "steigt", "gestiegen", "stiegen"], correct: 0, explanation: "Geniş zaman şartı." },
        { question: "Wir investieren, ___ Kapital zu schlagen. (amaç)", options: ["um", "damit", "weil", "dass"], correct: 0, explanation: "um ... zu yapısının 'um' kısmı." },
        { question: "'Hisse senedi' kelimesinin Almancası nedir?", options: ["die Aktie", "das Geld", "die Bank", "der Zins"], correct: 0, explanation: "die Aktie = hisse senedi." },
        { question: "Das Budget ___ (planlandı - Präteritum Passiv).", options: ["wurde geplant", "ist geplant", "wird geplant", "planten"], correct: 0, explanation: "Geçmişte pasif." },
        { question: "Mehr Risiko bedeutet oft ___ Rendite. (daha yüksek - Komparativ)", options: ["höhere", "hoch", "höher", "höchste"], correct: 0, explanation: "die Rendite için çekimli komparativ sıfat 'höhere'dir." }
    ]
};

// ===== UNIT 601: EDEBİYAT ANALİZİ =====
const unit601Grammar: GermanUnitGrammar = {
    unitId: 601,
    title: "Edebiyat Analizi (Literaturanalyse)",
    rules: [
        {
            id: "de-601-1",
            title: "Edebi Yorumlarda Zaman Kullanımı (Präsens)",
            explanation: "Almancada edebi eserlerin analizi, özetlenmesi ve yorumlanması her zaman Şimdiki Zaman (Präsens) kullanılarak yapılır.",
            examples: [
                { de: "Der Autor beschreibt die Einsamkeit der Hauptfigur.", tr: "Yazar, ana karakterin yalnızlığını betimliyor." },
                { de: "Das Motiv des Wassers symbolisiert den Tod.", tr: "Su motifi ölümü simgeliyor." }
            ]
        }
    ],
    exercises: [
        { question: "Der Autor ___ die Gesellschaft. (eleştiriyor - kritisieren)", options: ["kritisiert", "kritisiere", "kritisierte", "kritisiert hat"], correct: 0, explanation: "Edebi analizlerde Präsens (şimdiki zaman) kullanılır." },
        { question: "Das Gedicht ___ aus fünf Strophen. (oluşuyor - bestehen)", options: ["besteht", "bestehen", "bestand", "bestehe"], correct: 0, explanation: "bestehen aus = -den oluşmak." },
        { question: "'Metaphor' kelimesinin Almanca artikeli nedir?", options: ["die", "der", "das", "den"], correct: 0, explanation: "die Metapher." },
        { question: "Das Hauptthema des Romans ___ die Freiheit. (olmak)", options: ["ist", "sind", "war", "wäre"], correct: 0, explanation: "Tekil özne için 'ist'." },
        { question: "Der Roman wurde im Jahr 1808 ___ (yayınlandı - veröffentlichen).", options: ["veröffentlicht", "geveröffentlicht", "veröffentlichten", "veröffentlichte"], correct: 0, explanation: "ver- ayrılmayan ek olduğu için Partizip II'de ge- almaz." }
    ]
};

// ===== UNIT 602: TARTIŞMALI KONULAR =====
const unit602Grammar: GermanUnitGrammar = {
    unitId: 602,
    title: "Tartışmalı Konular (Kontroverse Themen)",
    rules: [
        {
            id: "de-602-1",
            title: "Karşıt Fikirleri Bağlama (Obwohl / Trotzdem)",
            explanation: "'Obwohl' (-e rağmen) yan cümle kurar (fiil sonda). 'Trotzdem' (buna rağmen) ise bir geçiş zarfıdır ve ardından hemen fiil gelir (Inversion).",
            examples: [
                { de: "Obwohl es regnet, gehe ich spazieren.", tr: "Yağmur yağmasına rağmen yürüyüşe çıkıyorum." },
                { de: "Es regnet. Trotzdem gehe ich spazieren.", tr: "Yağmur yağıyor. Buna rağmen yürüyüşe çıkıyorum." }
            ]
        }
    ],
    exercises: [
        { question: "___ es teuer ist, kaufe ich es. (-e rağmen)", options: ["Obwohl", "Trotzdem", "Weil", "Dass"], correct: 0, explanation: "Cümle başında yan cümle kuran bağlaç 'Obwohl'dur." },
        { question: "Es ist teuer. ___ kaufe ich es. (buna rağmen)", options: ["Trotzdem", "Obwohl", "Weil", "Dass"], correct: 0, explanation: "Ana cümle başında zarf olarak 'Trotzdem' kullanılır, ardından fiil gelir." },
        { question: "Ich bin müde, ___ ich weiterlerne.", options: ["obwohl", "trotzdem", "weil", "denn"], correct: 0, explanation: "'obwohl' (-e rağmen) yan cümle kurar ve çekimli fiili en sona atar." },
        { question: "Er hat kein Geld. Trotzdem ___ er ein Auto. (satın alıyor)", options: ["kauft", "kaufen", "kaufte", "kaufen wird"], correct: 0, explanation: "Trotzdem'den sonra fiil (kauft) gelir." },
        { question: "Obwohl er krank ___ (olmasına rağmen), arbeitet er.", options: ["ist", "war", "wäre", "bin"], correct: 0, explanation: "Obwohl yan cümlesinde fiil en sondadır." }
    ]
};

// ===== UNIT 603: AKADEMİK OKUMA =====
const unit603Grammar: GermanUnitGrammar = {
    unitId: 603,
    title: "Akademik Okuma (Wissenschaftliche Texte)",
    rules: [
        {
            id: "de-603-1",
            title: "Resmi Akademik İfadeler ve Pasif Yapı",
            explanation: "Akademik makalelerde yazarın şahsını öne çıkarmamak için edilgen yapı (Passiv) ve 'man' belgisiz zamiri çok sık kullanılır.",
            examples: [
                { de: "Es wird angenommen, dass...", tr: "Farz edilmektedir ki..." },
                { de: "Hierbei kann man beobachten, dass...", tr: "Burada gözlemlenebilir ki..." }
            ]
        }
    ],
    exercises: [
        { question: "Es ___ untersucht, wie sich die Zellen teilen. (Pasif)", options: ["wird", "ist", "hat", "werden"], correct: 0, explanation: "Şimdiki zaman pasif yapısı 'wird + Partizip II' ile kurulur." },
        { question: "Hierbei ___ man deutliche Unterschiede sehen. (Ebilmek - können)", options: ["kann", "kannst", "können", "könnte"], correct: 0, explanation: "'man' tekil özne gibi çekimlenir." },
        { question: "Die Daten ___ analysiert worden. (Perfekt Passiv)", options: ["sind", "haben", "werden", "wurden"], correct: 0, explanation: "Perfekt Passiv: sein + Partizip II + worden." },
        { question: "Wissenschaftliche Texte sind meistens ___.", options: ["objektiv", "subjektiv", "emotional", "lustig"], correct: 0, explanation: "Akademik metinler nesneldir (objektiv)." },
        { question: "Wie ___ man das auf Deutsch? (ifade etmek - ausdrücken)", options: ["drückt / aus", "ausdrückt / -", "drücken / aus", "ausgedrückt / -"], correct: 0, explanation: "ausdrücken ayrılabilir fiildir." }
    ]
};

// ===== UNIT 604: ELEŞTİREL DÜŞÜNME =====
const unit604Grammar: GermanUnitGrammar = {
    unitId: 604,
    title: "Eleştirel Düşünme (Kritisches Denken)",
    rules: [
        {
            id: "de-604-1",
            title: "Şüphe ve Varsayım Kalıpları",
            explanation: "Varsayımlarda bulunurken 'Es ist möglich, dass...' veya 'Es könnte sein, dass...' yapıları kullanılır.",
            examples: [
                { de: "Es könnte sein, dass die Argumente fehlerhaft sind.", tr: "Argümanların hatalı olması muhtemel olabilir." },
                { de: "Es ist zweifelhaft, ob das stimmt.", tr: "Bunun doğru olup olmadığı şüphelidir." }
            ]
        }
    ],
    exercises: [
        { question: "Es ___ sein, dass die Studie fehlerhaft ist. (ihtimal - können)", options: ["könnte", "kann", "konnte", "könnten"], correct: 0, explanation: "Yüksek olasılık/ihtimal Konjunktiv II 'könnte' ile verilir." },
        { question: "Es ist zweifelhaft, ___ (olup olmadığı) bu doğru.", options: ["ob", "dass", "weil", "wenn"], correct: 0, explanation: "Şüphe durumlarında '-ip -mediği' anlamında 'ob' kullanılır." },
        { question: "Ich bezweifle, ___ das klappt. (şüphe duyuyorum - dass)", options: ["dass", "ob", "weil", "da"], correct: 0, explanation: "bezweifeln, dass... yapısı." },
        { question: "Kritisches Denken ist ___ (önemli).", options: ["wichtig", "schlecht", "teuer", "kalt"], correct: 0, explanation: "Anlam bütünlüğü." },
        { question: "Man sollte Argumente logisch ___ (analiz etmek).", options: ["analysieren", "kritisieren", "glauben", "sagen"], correct: 0, explanation: "Logisch analysieren = mantıksal analiz etmek." }
    ]
};

// ===== UNIT 605: ULUSLARARASI İLİŞKİLER =====
const unit605Grammar: GermanUnitGrammar = {
    unitId: 605,
    title: "Uluslararası İlişkiler (Internationale Beziehungen)",
    rules: [
        {
            id: "de-605-1",
            title: "Resmi Siyasi Dil ve Konjunktiv I",
            explanation: "Uluslararası ilişkilerde ve diplomasi haberlerinde başkalarının beyanlarını aktarmak için Konjunktiv I kullanılır.",
            examples: [
                { de: "Der Minister erklärte, das Land sei bereit für Verhandlungen.", tr: "Bakan, ülkenin müzakerelere hazır olduğunu açıkladı." }
            ]
        }
    ],
    exercises: [
        { question: "Der Präsident sagte, die Allianz ___ stark. (sein - Konjunktiv I)", options: ["sei", "ist", "war", "wäre"], correct: 0, explanation: "Sein fiilinin Konjunktiv I 3. tekil çekimi 'sei'dir." },
        { question: "Die Vertreter ___ (bildirdiler - Präteritum) Einigkeit.", options: ["zeigten", "zeigen", "gezeigt", "zeigst"], correct: 0, explanation: "Geçmiş zaman." },
        { question: "Uluslararası bir zirveyi belirtmek için hangi kelime kullanılır?", options: ["der Gipfel", "der Berg", "das Treffen", "der Vertrag"], correct: 0, explanation: "der Gipfel hem zirve dağı hem de siyasi liderler zirvesi demektir." },
        { question: "Die Verhandlungen wurden ___ (kesildi - Präteritum Passiv).", options: ["abgebrochen", "gebrochen", "abbrechen", "gebrochen werden"], correct: 0, explanation: "abbrechen -> abgebrochen." },
        { question: "Es gibt keine friedliche ___ (çözüm).", options: ["Lösung", "Frage", "Problem", "Krieg"], correct: 0, explanation: "friedliche Lösung = barışçıl çözüm." }
    ]
};

// ===== UNIT 606: MEDYA ANALİZİ =====
const unit606Grammar: GermanUnitGrammar = {
    unitId: 606,
    title: "Medya Analizi (Medienkompetenz)",
    rules: [
        {
            id: "de-606-1",
            title: "Medya Eleştirisinde Çekimli Fiiller ve Gerundium",
            explanation: "Medyadaki manipülasyonları eleştirirken 'dass' bağlacı ve 'indem' (-erek, -arak) vasıta bağlaçları sıkça kullanılır.",
            examples: [
                { de: "Man manipuliert die Massen, indem man Fake News verbreitet.", tr: "Sahte haberler yayarak kitleler manipüle ediliyor." }
            ]
        }
    ],
    exercises: [
        { question: "Man schützt sich vor Fake News, ___ man Quellen prüft.", options: ["indem", "obwohl", "weil", "dass"], correct: 0, explanation: "Yöntem bildiren '-erek/arak' anlamındaki bağlaç 'indem'dir." },
        { question: "Die Medien ___ die Meinung der Bürger. (etkiliyor - beeinflussen)", options: ["beeinflussen", "beeinflusst", "beeinflusste", "beeinflussen hat"], correct: 0, explanation: "Çoğul özne için şimdiki zaman." },
        { question: "Viele Nachrichten ___ nicht wahr. (olmak)", options: ["sind", "ist", "war", "wäre"], correct: 0, explanation: "Çoğul özne." },
        { question: "Zensur ist ein Eingriff in die ___ (basın özgürlüğü).", options: ["Pressefreiheit", "Zensur", "Politik", "Wirtschaft"], correct: 0, explanation: "Pressefreiheit = basın özgürlüğü." },
        { question: "Man sollte Nachrichten kritisch ___ (okumak).", options: ["lesen", "schreiben", "hören", "sehen"], correct: 0, explanation: "Kritisch lesen = eleştirel okumak." }
    ]
};

// ===== UNIT 607: İŞ ALMANCASI 2 =====
const unit607Grammar: GermanUnitGrammar = {
    unitId: 607,
    title: "İş Almancası 2 (Fortgeschrittenes Geschäftsdeutsch)",
    rules: [
        {
            id: "de-607-1",
            title: "İş Dünyasında Resmi İstekler ve Şartlar",
            explanation: "İş hayatında üst düzey iletişimde 'Falls' (Eğer/Şayet) bağlacı ve 'dürfen' (izin isteme) yapıları çok yaygındır.",
            examples: [
                { de: "Falls Sie Fragen haben, dürfen Sie mich jederzeit kontaktieren.", tr: "Şayet sorularınız olursa, bana her zaman ulaşabilirsiniz." }
            ]
        }
    ],
    exercises: [
        { question: "___ Sie Unterstützung benötigen, melden Sie sich. (Şayet)", options: ["Falls", "Obwohl", "Weil", "Dass"], correct: 0, explanation: "Koşul bildiren 'Falls' (şayet/eğer) cümlenin başında yan cümle kurar." },
        { question: "___ ich Sie kurz stören? (İzin isteme)", options: ["Darf", "Soll", "Muss", "Will"], correct: 0, explanation: "Kibarca izin istemek için 'dürfen' (darf ich...?) kullanılır." },
        { question: "Wir streben eine langfristige ___ an. (işbirliği)", options: ["Kooperation", "Kündigung", "Pause", "Arbeit"], correct: 0, explanation: "Kooperation = işbirliği." },
        { question: "Das Meeting wurde auf morgen ___ (ertelendi - verschoben).", options: ["verschoben", "geverschoben", "verschieben", "geschoben"], correct: 0, explanation: "verschieben -> verschoben." },
        { question: "Wir müssen die Kosten ___ (azaltmak - senken).", options: ["senken", "heben", "zahlen", "kaufen"], correct: 0, explanation: "Kosten senken = maliyetleri düşürmek." }
    ]
};

// ===== UNIT 608: PROJE YÖNETİMİ =====
const unit608Grammar: GermanUnitGrammar = {
    unitId: 608,
    title: "Proje Yönetimi (Projektmanagement)",
    rules: [
        {
            id: "de-608-1",
            title: "Zaman Sınırları ve Planlama (Bis / Solange)",
            explanation: "Proje yönetiminde zaman sınırlarını belirlemek için 'bis' (-e kadar) ve 'solange' (-diği sürece) bağlaçları kullanılır.",
            examples: [
                { de: "Wir arbeiten an dem Projekt, bis die Deadline erreicht ist.", tr: "Son teslim tarihine ulaşılana kadar proje üzerinde çalışıyoruz." }
            ]
        }
    ],
    exercises: [
        { question: "Wir müssen warten, ___ der Chef zustimmt. (-e kadar)", options: ["bis", "solange", "weil", "dass"], correct: 0, explanation: "Zaman sınırı bildiren bağlaç 'bis'dir." },
        { question: "___ das Budget reicht, investieren wir. (-diği sürece)", options: ["Solange", "Bis", "Weil", "Dass"], correct: 0, explanation: "Süreç bildiren bağlaç 'Solange'dır." },
        { question: "Hangi kelime 'son teslim tarihi' anlamına gelir?", options: ["die Deadline", "der Meilenstein", "das Projekt", "das Meeting"], correct: 0, explanation: "die Deadline." },
        { question: "Ein Meilenstein wurde ___ (ulaşıldı - erreicht).", options: ["erreicht", "geerreicht", "erreichen", "erreichte"], correct: 0, explanation: "er- ile başlayan fiiller ge- almaz." },
        { question: "Wir müssen die Aufgaben im Team ___ (dağıtmak - verteilen).", options: ["verteilen", "sammeln", "löschen", "kaufen"], correct: 0, explanation: "verteilen = dağıtmak/paylaştırmak." }
    ]
};

// ===== UNIT 609: KÜLTÜRLERARASI İLETİŞİM =====
const unit609Grammar: GermanUnitGrammar = {
    unitId: 609,
    title: "Kültürlerarası İletişim (Interkulturelle Kommunikation)",
    rules: [
        {
            id: "de-609-1",
            title: "Empati ve İletişim Kalıpları (Es ist wichtig, zu...)",
            explanation: "Kültürlerarası empati kurarken master yapısı 'Es ist wichtig, + zu + Infinitiv' sıklıkla kullanılır.",
            examples: [
                { de: "Es ist wichtig, Vorurteile abzubauen.", tr: "Önyargıları yıkmak önemlidir." }
            ]
        }
    ],
    exercises: [
        { question: "Es ist wichtig, andere Kulturen zu ___ (anlamak).", options: ["verstehen", "versteht", "verstanden", "verstehe"], correct: 0, explanation: "zu + Mastar fiil sonda yer alır." },
        { question: "Man sollte offen für Neues ___ (olmak).", options: ["sein", "haben", "werden", "ist"], correct: 0, explanation: "sollte + Mastar." },
        { question: "'Önyargı' kelimesinin Almanca çoğulu nedir?", options: ["die Vorurteile", "das Vorurteil", "die Vorurteilen", "den Vorurteilen"], correct: 0, explanation: "die Vorurteile." },
        { question: "Toleranz ___ (gerektirir - erfordern) Geduld.", options: ["erfordert", "erfordern", "erforderte", "erfordert hat"], correct: 0, explanation: "Şimdiki zaman tekil çekim." },
        { question: "Wir lernen viel durch den ___ (iletişim - Austausch).", options: ["Austausch", "Gespräch", "Kultur", "Sprache"], correct: 0, explanation: "der Austausch = fikir alışverişi/iletişim." }
    ]
};

// ===== UNIT 610: KARİYER GELİŞTİRME =====
const unit610Grammar: GermanUnitGrammar = {
    unitId: 610,
    title: "Kariyer Geliştirme (Karriereentwicklung)",
    rules: [
        {
            id: "de-610-1",
            title: "Gelecek Kariyer Hedefleri ve Um...zu Yapısı",
            explanation: "Kariyer hedeflerini ve motivasyonları ifade ederken 'um...zu' (amacıyla) yapısı son derece kullanışlıdır.",
            examples: [
                { de: "Ich bilde mich weiter, um befördert zu werden.", tr: "Terfi almak için kendimi eğitmeye devam ediyorum." }
            ]
        }
    ],
    exercises: [
        { question: "Ich lerne Fremdsprachen, ___ meine Chancen ___ verbessern. (amacıyla)", options: ["um / zu", "damit / -", "zu / um", "weil / zu"], correct: 0, explanation: "Özneler aynı -> um ... zu." },
        { question: "Er will Karriere ___ (yapmak).", options: ["machen", "haben", "tun", "sein"], correct: 0, explanation: "Karriere machen = kariyer yapmak." },
        { question: "Eine Beförderung ___ (aldı - Präteritum).", options: ["erhielt", "erhalten", "erhälst", "erhielte"], correct: 0, explanation: "erhalten -> erhielt (Präteritum)." },
        { question: "Ein gutes Netzwerk ist beruflich ___ (faydalı).", options: ["nützlich", "schlecht", "teuer", "kalt"], correct: 0, explanation: "nützlich = faydalı/yararlı." },
        { question: "Ich bewerbe mich ___ eine neue Stelle.", options: ["um", "für", "bei", "an"], correct: 0, explanation: "sich bewerben um = bir pozisyona başvurmak." }
    ]
};

// ===== UNIT 611: KONJUNKTIV I =====
const unit611Grammar: GermanUnitGrammar = {
    unitId: 611,
    title: "Konjunktiv I (Dolaylı Anlatım)",
    rules: [
        {
            id: "de-611-1",
            title: "Konjunktiv I Yapısı",
            explanation: "Gazete haberlerinde ve resmi raporlarda bir sözü tarafsızca aktarmak için kullanılır.\n\n• **sein** -> *sei*\n• **haben** -> *habe*\n• **kommen** -> *komme*",
            examples: [
                { de: "Er sagte, er sei gesund.", tr: "Hasta olmadığını (sağlıklı olduğunu) söyledi." },
                { de: "Sie meinte, sie habe keine Zeit.", tr: "Vaktinin olmadığını belirtti." }
            ]
        }
    ],
    exercises: [
        { question: "Er behauptet, er ___ (olsun - sein) unschuldig.", options: ["sei", "ist", "wäre", "war"], correct: 0, explanation: "Sein Konjunktiv I çekimi 'sei'dir." },
        { question: "Sie sagt, sie ___ (sahip olsun - haben) ein Auto.", options: ["habe", "hat", "hätte", "haben"], correct: 0, explanation: "Haben Konjunktiv I çekimi 'habe'dir." },
        { question: "Der Sprecher erklärte, das Projekt ___ (başlayacak - werden) bald.", options: ["werde", "wird", "würde", "werden"], correct: 0, explanation: "Werden Konjunktiv I çekimi 'werde'dir." },
        { question: "Konjunktiv I çoğunlukla nerede kullanılır?", options: ["Gazete ve haber dillerinde", "Konuşma dilinde", "Dileklerde", "Masallarda"], correct: 0, explanation: "Tarafsız aktarım için haber dilinde kullanılır." },
        { question: "Er sagte, er ___ (gelsin - kommen) morgen.", options: ["komme", "kommt", "käme", "gekommen sei"], correct: 0, explanation: "Kommen Konjunktiv I çekimi 'komme'dir." }
    ]
};

// ===== UNIT 612: PARTİZİPİAL KONSTRÜKSİYONLAR =====
const unit612Grammar: GermanUnitGrammar = {
    unitId: 612,
    title: "Partizipialkonstruktionen (Sıfat-Fiiller)",
    rules: [
        {
            id: "de-612-1",
            title: "Partizip I ve Partizip II Sıfat Olarak",
            explanation: "Fiilleri sıfat olarak kullanma:\n\n• **Partizip I (Etken/Şimdiki zaman):** Fiil + d (lachend -> gülen)\n• **Partizip II (Edilgen/Geçmiş zaman):** (geschrieben -> yazılmış)",
            examples: [
                { de: "Das lachende Kind.", tr: "Gülen çocuk." },
                { de: "Der geschriebene Brief.", tr: "Yazılmış mektup." }
            ]
        }
    ],
    exercises: [
        { question: "Das ___ (ağlayan - weinen) Baby schläft.", options: ["weinende", "weinenden", "weinen", "geweinte"], correct: 0, explanation: "Ağlayan (aktif) -> weinend + sıfat çekim eki 'e'." },
        { question: "Der ___ (çalınan - stehlen) Wagen wurde gefunden.", options: ["gestohlene", "stehlende", "gestohlen", "stehlen"], correct: 0, explanation: "Çalınmış (edilgen) -> gestohlen + sıfat çekim eki 'e'." },
        { question: "Die ___ (çalışan - arbeiten) Bevölkerung.", options: ["arbeitende", "arbeitenden", "arbeiteten", "gearbeitete"], correct: 0, explanation: "Çalışan -> arbeitend + e." },
        { question: "Das ___ (satılan - verkaufen) Haus.", options: ["verkaufte", "verkaufende", "verkaufen", "geverkaufte"], correct: 0, explanation: "Satılmış -> verkauft + e." },
        { question: "Ein ___ (hızlı koşan - rennen) Hund.", options: ["rennender", "rennende", "gerannter", "rennen"], correct: 0, explanation: "Koşan -> rennend + eril tekil çekim eki 'er' (ein Hund)." }
    ]
};

// ===== UNIT 613: NOMİNALSTİL =====
const unit613Grammar: GermanUnitGrammar = {
    unitId: 613,
    title: "Nominalstil (İsimleştirme)",
    rules: [
        {
            id: "de-613-1",
            title: "İsimleştirme Yöntemleri (-ung, -heit, -keit)",
            explanation: "Fiil ve sıfatları isim yapmak için yaygın ekler kullanılır. Bu isimlerin artikelleri eklere göre değişir (Örn: -ung eki alanlar her zaman 'die'dır).",
            examples: [
                { de: "die Zerstörung (zerstören)", tr: "Yıkım" },
                { de: "die Gesundheit (gesund)", tr: "Sağlık" }
            ]
        }
    ],
    exercises: [
        { question: "Zerstören (yıkmak) fiilinin isim hali hangisidir?", options: ["die Zerstörung", "das Zerstören", "der Zerstör", "die Zerstörtheit"], correct: 0, explanation: "-ung eki ile dişil isim yapılır." },
        { question: "Gesund (sağlıklı) sıfatının isim hali hangisidir?", options: ["die Gesundheit", "das Gesund", "der Gesundung", "die Gesundkeit"], correct: 0, explanation: "-heit eki ile isimleşir." },
        { question: "Ekonomik gelişmeyi (entwickeln) belirtmek için ne denir?", options: ["die Entwicklung", "das Entwickeln", "die Entwickeltheit", "der Entwickler"], correct: 0, explanation: "die Entwicklung = gelişim/gelişme." },
        { question: "-ung takısı alan tüm isimlerin artikeli nedir?", options: ["die", "der", "das", "den"], correct: 0, explanation: "-ung ile biten isimler istisnasız 'die' artikeline sahiptir." },
        { question: "Freundlich (nazik) sıfatının isim hali nedir?", options: ["die Freundlichkeit", "die Freundlichung", "das Freundliche", "der Freund"], correct: 0, explanation: "-keit eki ile 'die Freundlichkeit' (nezaket) olur." }
    ]
};

// ===== UNIT 614: ERWEITERTE PASSİVFORMEN =====
const unit614Grammar: GermanUnitGrammar = {
    unitId: 614,
    title: "Erweiterte Passivformen (Durum Edilgeni)",
    rules: [
        {
            id: "de-614-1",
            title: "Zustandspassiv (Durum Edilgeni) Yapısı",
            explanation: "Bir eylemin sürecini değil, tamamlanmış sonucunun durumunu gösterir.\n\n**Yapı:** [sein] + [Partizip II]\n\n• *Vorgangspassiv (Süreç):* Die Tür wird geschlossen. (Kapı kapatılıyor.)\n• *Zustandspassiv (Durum):* Die Tür ist geschlossen. (Kapı kapalı / kapatılmış durumda.)",
            examples: [
                { de: "Das Geschäft ist bereits geöffnet.", tr: "Dükkan zaten açık (açılmış durumda)." },
                { de: "Die Arbeit ist getan.", tr: "İş yapıldı / tamamlandı." }
            ]
        }
    ],
    exercises: [
        { question: "Die Tür ___ geschlossen. (Şu an kapalı durumda - Zustandspassiv)", options: ["ist", "wird", "hat", "werden"], correct: 0, explanation: "Zustandspassiv 'sein' (ist) ile kurulur." },
        { question: "Das Auto ___ repariert. (Şu an tamir edilmiş durumda)", options: ["ist", "wird", "hat", "werden"], correct: 0, explanation: "Durum edilgeni: ist repariert." },
        { question: "Zustandspassiv hangi yardımcı fiille kurulur?", options: ["sein", "werden", "haben", "können"], correct: 0, explanation: "Zustandspassiv yardımcı fiili 'sein'dir." },
        { question: "Vorgangspassiv ile Zustandspassiv arasındaki fark nedir?", options: ["Biri süreci, diğeri tamamlanmış durumu bildirir", "Hiçbir fark yoktur", "Zaman farkıdır", "Sadece fiiller değişir"], correct: 0, explanation: "Werden ile süreç (Vorgang), sein ile durum (Zustand) vurgulanır." },
        { question: "Die Hausaufgaben ___ gemacht. (Ödevler yapılmış durumda)", options: ["sind", "werden", "haben", "wurden"], correct: 0, explanation: "Çoğul + durum: 'sind'." }
    ]
};

// ===== UNIT 615: WİSSENSCHAFTLİCHES SCHREİBEN =====
const unit615Grammar: GermanUnitGrammar = {
    unitId: 615,
    title: "Wissenschaftliches Schreiben (Akademik Yazım)",
    rules: [
        {
            id: "de-615-1",
            title: "Akademik Yazımda Bağlaçlar (Beziehungsadverbien)",
            explanation: "Argümanları mantıksal olarak bağlamak için 'Folglich' (bu nedenle), 'Demnach' (buna göre) gibi akademik bağlaçlar kullanılır.",
            examples: [
                { de: "Es regnete stark. Folglich wurde das Experiment verschoben.", tr: "Şiddetli yağmur yağıyordu. Bu nedenle deney ertelendi." }
            ]
        }
    ],
    exercises: [
        { question: "Die Ergebnisse waren eindeutig. ___ wurde die Hypothese bestätigt. (Bu nedenle)", options: ["Folglich", "Obwohl", "Weil", "Dass"], correct: 0, explanation: "Sonuç bağlayan zarf 'Folglich'tir." },
        { question: "Es gab Fehler. ___ (buna göre) ist die Studie ungültig.", options: ["Demnach", "Weil", "Trotzdem", "Falls"], correct: 0, explanation: "Demnach = buna göre / bu durumda." },
        { question: "Folglich zarfından sonra cümle yapısı nasıldır?", options: ["Zarf + Fiil + Özne", "Zarf + Özne + Fiil", "Zarf + Fiil sonda", "Düz cümle"], correct: 0, explanation: "Zarf olduğu için Inversion uygulanır." },
        { question: "Akademik yazımda hangi şahıs zamiri kullanımından kaçınılır?", options: ["ich (Ben)", "es (O)", "wir (Biz)", "man (Kişi)"], correct: 0, explanation: "Nesnellik için 'ich' kullanımı en aza indirilir." },
        { question: "Die These muss bewiesen ___ (edilmelidir - Pasif).", options: ["werden", "sein", "haben", "wurde"], correct: 0, explanation: "muss + Pasif mastar (werden)." }
    ]
};

// ===== UNIT 616: AUFSATZ SCHREİBEN =====
const unit616Grammar: GermanUnitGrammar = {
    unitId: 616,
    title: "Aufsatz schreiben (Kompozisyon Yazımı)",
    rules: [
        {
            id: "de-616-1",
            title: "Giriş, Gelişme ve Sonuç Yapısı",
            explanation: "Kompozisyon yazarken geçişler ve yapısal düzen tam bir simetri oluşturmalıdır.",
            examples: [
                { de: "Einleitend lässt sich feststellen, dass...", tr: "Giriş olarak tespit edilebilir ki..." },
                { de: "Zusammenfassend lässt sich sagen...", tr: "Özet olarak söylenebilir ki..." }
            ]
        }
    ],
    exercises: [
        { question: "___ (Özetle) lässt sich sagen, dass...", options: ["Zusammenfassend", "Zuerst", "Einleitend", "Schließlich"], correct: 0, explanation: "Zusammenfassend = özetle." },
        { question: "Einleitend ___ sich behaupten... (tespit edilebilir - lassen)", options: ["lässt", "lassen", "ließ", "lasse"], correct: 0, explanation: "es lässt sich = -ebilir." },
        { question: "Kompozisyonda 'giriş' bölümünün Almancası nedir?", options: ["die Einleitung", "der Hauptteil", "der Schluss", "das Thema"], correct: 0, explanation: "die Einleitung = giriş." },
        { question: "Gelişme bölümüne ne ad verilir?", options: ["der Hauptteil", "die Einleitung", "der Schluss", "die These"], correct: 0, explanation: "der Hauptteil = gelişme/ana kısım." },
        { question: "Zum Schluss ___ (çekiyorum - ziehen) ich ein Fazit.", options: ["ziehe", "ziehe ich", "gezogen", "zieht"], correct: 0, explanation: "Inversion: Zarf + Fiil + Özne." }
    ]
};

// ===== UNIT 617: MÜNDLİCHE PRÜFUNG =====
const unit617Grammar: GermanUnitGrammar = {
    unitId: 617,
    title: "Mündliche Prüfung (Sözlü Sınav B2)",
    rules: [
        {
            id: "de-617-1",
            title: "Sözlü İfadelerde Hızlı Tepki Kalıpları",
            explanation: "Sözlü sınavlarda argümanlara katılırken veya karşı çıkarken kullanılan kalıplardır.",
            examples: [
                { de: "Da stimme ich Ihnen voll und ganz zu.", tr: "Size bu konuda tamamen katılıyorum." },
                { de: "Das sehe ich etwas anders, weil...", tr: "Bunu biraz farklı görüyorum, çünkü..." }
            ]
        }
    ],
    exercises: [
        { question: "Da stimme ich Ihnen ___ (tamamen - voll und ganz) zu.", options: ["voll und ganz", "nicht", "vielleicht", "etwas"], correct: 0, explanation: "voll und ganz zustimmen = tamamen katılmak." },
        { question: "Das sehe ich etwas ___ (farklı).", options: ["anders", "gleich", "so", "gut"], correct: 0, explanation: "etwas anders sehen = biraz farklı görmek." },
        { question: "Ich bin der gleichen ___ (aynı fikirdeyim).", options: ["Meinung", "Idee", "Gedanke", "Sinn"], correct: 0, explanation: "der gleichen Meinung sein = aynı görüşte olmak." },
        { question: "Könnten Sie das bitte ___? (açıklayabilir misiniz - erklären)", options: ["erklären", "sagen", "sprechen", "fragen"], correct: 0, explanation: "erklären = açıklamak/izah etmek." },
        { question: "Ich stimme dir ___ (katılıyorum).", options: ["zu", "mit", "bei", "an"], correct: 0, explanation: "zustimmen (dativ alır) ayrılabilir fiildir." }
    ]
};

// ===== UNIT 618: HÖRVERSTEHEN =====
const unit618Grammar: GermanUnitGrammar = {
    unitId: 618,
    title: "Hörverstehen (Duyduğunu Anlama)",
    rules: [
        {
            id: "de-618-1",
            title: "Dinleme Sırasında Bağlaçların Rolü",
            explanation: "Dinlerken konuşmacının zıtlıkları (aber, dennoch) veya eklemeleri (zudem) belirtme tonuna dikkat edilir.",
            examples: [
                { de: "Er war müde, dennoch arbeitete er weiter.", tr: "Yorgundu, buna rağmen çalışmaya devam etti." }
            ]
        }
    ],
    exercises: [
        { question: "Er war krank, ___ kam er zur Arbeit. (buna rağmen - dennoch)", options: ["dennoch", "obwohl", "weil", "dass"], correct: 0, explanation: "dennoch (buna rağmen) bir zarftır ve Inversion alır." },
        { question: "Zudem ___ (ek olarak - olmak) es sehr teuer.", options: ["ist", "sind", "war", "wäre"], correct: 0, explanation: "zudem (ek olarak) + fiil." },
        { question: "Dinlerken ne yapmak önemlidir?", options: ["Notizen machen (notlar almak)", "Schlafen (uyumak)", "Sprechen (konuşmak)", "Kochen (yemek pişirmek)"], correct: 0, explanation: "Duyduğunu anlamada not almak kritiktir." },
        { question: "Der Sprecher ___ die Hypothese. (reddediyor - ablehnen)", options: ["lehnt / ab", "ablehnt / -", "lehnen / ab", "abgelehnt / -"], correct: 0, explanation: "ablehnen ayrılabilir fiildir." },
        { question: "Ich konnte den Sprecher kaum ___ (duymak).", options: ["hören", "verstehen", "sehen", "fragen"], correct: 0, explanation: "kaum hören = zar zor duymak." }
    ]
};

// ===== UNIT 619: LESEVERSTEHEN =====
const unit619Grammar: GermanUnitGrammar = {
    unitId: 619,
    title: "Leseverstehen (Okuduğunu Anlama B2)",
    rules: [
        {
            id: "de-619-1",
            title: "Hızlı Okumada Bağlaç Analizi",
            explanation: "Karmaşık metinleri hızlı okurken 'zwar ... aber' (gerçi ... ama) gibi ikili bağlaçları tespit etmek anlamı çözmede anahtardır.",
            examples: [
                { de: "Das Buch ist zwar teuer, aber sehr lehrreich.", tr: "Kitap gerçi pahalı ama çok öğretici." }
            ]
        }
    ],
    exercises: [
        { question: "Das Auto ist ___ teuer, aber sehr gut. (gerçi)", options: ["zwar", "nicht", "sehr", "fast"], correct: 0, explanation: "İkili bağlaç kalıbı 'zwar ... aber'dir." },
        { question: "Okuduğunu anlama sınavlarında ne aranır?", options: ["Schlüsselwörter (anahtar kelimeler)", "Bilder (resimler)", "Fehler (hatalar)", "Nichts"], correct: 0, explanation: "Schlüsselwörter = anahtar kelimeler." },
        { question: "Er hat den Text ___ (okudu - Präteritum).", options: ["las", "liest", "gelesen", "leste"], correct: 0, explanation: "lesen -> las (Präteritum)." },
        { question: "Ich versuche, den Inhalt zu ___ (kavramak).", options: ["erfassen", "lesen", "schreiben", "suchen"], correct: 0, explanation: "den Inhalt erfassen = içeriği kavramak." },
        { question: "Obwohl der Text schwer ___ (olmasına rağmen), verstehe ich ihn.", options: ["ist", "war", "wäre", "bin"], correct: 0, explanation: "Obwohl cümlesi fiil sonda." }
    ]
};

// ===== UNIT 620: B2 TEKRAR =====
const unit620Grammar: GermanUnitGrammar = {
    unitId: 620,
    title: "B2 Tekrar (Seviye Özeti)",
    rules: [
        {
            id: "de-620-1",
            title: "B2 Seviyesinin Özeti",
            explanation: "B2 seviyesinde tüm gramer kuralları, ikili bağlaçlar, pasif ve Konjunktiv formları tam olarak birleştirilerek akıcı ve hatasız konuşma hedeflenir.",
            examples: [
                { de: "Nun beherrsche ich die deutsche Grammatik auf B2-Niveau.", tr: "Artık Alman gramerine B2 seviyesinde hakimim." }
            ]
        }
    ],
    exercises: [
        { question: "Ich freue mich ___ das Zertifikat. (-e sevinmek - gelecek)", options: ["auf", "über", "für", "an"], correct: 0, explanation: "Gelecekteki bir şeye sevinmek 'sich freuen auf' ile söylenir." },
        { question: "Nun habe ich das B2-Niveau ___ (ulaştım - erreicht).", options: ["erreicht", "geerreicht", "erreichen", "erreichte"], correct: 0, explanation: "erreichen -> erreicht." },
        { question: "B2 seviyesini başarıyla bitirenlere ne verilir?", options: ["das Zertifikat", "das Geld", "das Auto", "die Schule"], correct: 0, explanation: "das Zertifikat = sertifika." },
        { question: "Ich bedanke mich bei ___ für die Hilfe.", options: ["Ihnen", "Sie", "dir", "dich"], correct: 0, explanation: "bedanken bei + Dativ resmi olarak 'Ihnen' olur." },
        { question: "Ich kann nun fließend Deutsch ___ (konuşmak).", options: ["sprechen", "reden", "sagen", "erzählen"], correct: 0, explanation: "fließend sprechen = akıcı konuşmak." }
    ]
};

const unitMap: { [key: number]: GermanUnitGrammar } = {
    591: unit591Grammar, 592: unit592Grammar, 593: unit593Grammar, 594: unit594Grammar, 595: unit595Grammar,
    596: unit596Grammar, 597: unit597Grammar, 598: unit598Grammar, 599: unit599Grammar, 600: unit600Grammar,
    601: unit601Grammar, 602: unit602Grammar, 603: unit603Grammar, 604: unit604Grammar, 605: unit605Grammar,
    606: unit606Grammar, 607: unit607Grammar, 608: unit608Grammar, 609: unit609Grammar, 610: unit610Grammar,
    611: unit611Grammar, 612: unit612Grammar, 613: unit613Grammar, 614: unit614Grammar, 615: unit615Grammar,
    616: unit616Grammar, 617: unit617Grammar, 618: unit618Grammar, 619: unit619Grammar, 620: unit620Grammar
};

export function getGermanB2GrammarForUnit(unitId: number): GermanUnitGrammar {
    return unitMap[unitId] || unit591Grammar;
}
