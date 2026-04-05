import { Question, QuestionType } from "./questions";

export interface GermanTopic {
    words: string[][];
    sentences: string[];
}

const topics: { [key: number]: GermanTopic } = {
    // A1 Üniteleri (501-530)
    501: { 
        words: [["Hallo", "Merhaba"], ["Guten Morgen", "Günaydın"], ["Guten Tag", "İyi günler"], ["Guten Abend", "İyi akşamlar"], ["Gute Nacht", "İyi geceler"], ["Auf Wiedersehen", "Hoşça kal"], ["Tschüss", "Güle güle"], ["Danke", "Teşekkürler"], ["Bitte", "Lütfen"], ["Wie geht's?", "Nasılsın?"], ["Sehr gut", "Çok iyi"], ["Es geht", "İyi gidiyor"], ["Herr", "Bay"], ["Frau", "Bayan"], ["Freut mich", "Memnun oldum"]], 
        sentences: ["___, wie geht es dir?", "Ich sage ___, wenn ich gehe.", "___, bana yardım edebilir misin?", "Guten ___, Herr Müller.", "___, freut mich Sie kennenzulernen.", "Auf ___, bis bald!"] 
    },
    502: { 
        words: [["Eins", "Bir"], ["Zwei", "İki"], ["Drei", "Üç"], ["Vier", "Dört"], ["Fünf", "Beş"], ["Sechs", "Altı"], ["Sieben", "Yedi"], ["Acht", "Sekiz"], ["Neun", "Dokuz"], ["Zehn", "On"], ["Elf", "On bir"], ["Zwölf", "On iki"], ["Null", "Sıfır"], ["Zahlen", "Sayılar"]], 
        sentences: ["Ich habe ___ Äpfel.", "Das sind ___ Katzen.", "Er möchte ___ Bücher.", "Wie viel ist ___ plus zwei?", "Meine Telefonnummer hat eine ___.", "Ich bin ___ Jahre alt."] 
    },
    503: { 
        words: [["Mutter", "Anne"], ["Vater", "Baba"], ["Bruder", "Erkek kardeş"], ["Schwester", "Kız kardeş"], ["Oma", "Büyükanne"], ["Opa", "Büyükbaba"], ["Tante", "Teyze/Hala"], ["Onkel", "Amca/Dayı"], ["Eltern", "Ebeveyn"], ["Familie", "Aile"], ["Sohn", "Oğul"], ["Tochter", "Kız evlat"], ["Kind", "Çocuk"]], 
        sentences: ["Meine ___ ist sehr nett.", "Ich liebe meinen ___.", "Seine ___ ist groß.", "Das ist meine ___.", "Wie heißt dein ___?", "Meine ___ kommen morgen."] 
    },
    504: { 
        words: [["Rot", "Kırmızı"], ["Blau", "Mavi"], ["Grün", "Yeşil"], ["Gelb", "Sarı"], ["Schwarz", "Siyah"], ["Weiß", "Beyaz"], ["Rosa", "Pembe"], ["Lila", "Mor"], ["Braun", "Kahverengi"], ["Grau", "Gri"], ["Orange", "Turuncu"], ["Farbe", "Renk"]], 
        sentences: ["Der Himmel ist ___.", "Ich habe ein ___es Auto.", "Ihr Kleid ist ___.", "Ich mag ___ nicht.", "Welche ___ hat das Haus?", "Die Sonne ist ___."] 
    },
    505: { 
        words: [["Apfel", "Elma"], ["Brot", "Ekmek"], ["Käse", "Peynir"], ["Fleisch", "Et"], ["Fisch", "Balık"], ["Hähnchen", "Tavuk"], ["Ei", "Yumurta"], ["Reis", "Pirinç"], ["Gemüse", "Sebze"], ["Obst", "Meyve"], ["Nudeln", "Makarna"], ["Salat", "Salata"]], 
        sentences: ["Ich möchte ___ essen.", "Wir brauchen etwas ___.", "Magst du ___?", "Dieses ___ ist lecker.", "Ich esse jeden Tag ___.", "Frisches ___ schmeckt gut."] 
    },
    506: {
        words: [["Wasser", "Su"], ["Milch", "Süt"], ["Kaffee", "Kahve"], ["Tee", "Çay"], ["Saft", "Meyve suyu"], ["Bier", "Bira"], ["Wein", "Şarap"], ["Limonade", "Limonata"], ["Zucker", "Şeker"], ["Glas", "Bardak"], ["Tasse", "Fincan"]],
        sentences: ["Ich trinke ___.", "Möchten Sie einen ___?", "Ein Glas ___, bitte.", "Kaffee mit ___?", "Ich brauche eine ___ Tee.", "Ist das ___ kalt?"]
    },
    507: {
        words: [["Montag", "Pazartesi"], ["Dienstag", "Salı"], ["Mittwoch", "Çarşamba"], ["Donnerstag", "Perşembe"], ["Freitag", "Cuma"], ["Samstag", "Cumartesi"], ["Sonntag", "Pazar"], ["Woche", "Hafta"], ["Monat", "Ay"], ["Jahr", "Yıl"]],
        sentences: ["Heute ist ___.", "Am ___ habe ich frei.", "Nächsten ___ gehe ich ins Kino.", "Die ___ hat sieben Tage.", "Welcher ___ ist heute?", "Ein ___ hat vier Wochen."]
    },
    508: {
        words: [["Zwanzig", "Yirmi"], ["Dreißig", "Otuz"], ["Vierzig", "Kırk"], ["Fünfzig", "Elli"], ["Sechzig", "Altmış"], ["Siebzig", "Yetmiş"], ["Achtzig", "Seksen"], ["Neunzig", "Doksan"], ["Hundert", "Yüz"]],
        sentences: ["Es kostet ___ Euro.", "Ich bin ___ Jahre alt.", "In ___ Minuten sind wir da.", "Ein Kilo kostet ___ Cent.", "Nummer ___ ist richtig."]
    },
    509: {
        words: [["Haus", "Ev"], ["Küche", "Mutfak"], ["Bad", "Banyo"], ["Schlafzimmer", "Yatak odası"], ["Wohnzimmer", "Oturma odası"], ["Garten", "Bahçe"], ["Tür", "Kapı"], ["Fenster", "Pencere"], ["Flur", "Antre"], ["Keller", "Bodrum"]],
        sentences: ["Das ___ ist groß.", "Ich bin in der ___.", "Machen Sie das ___ auf.", "Wir sitzen im ___.", "Die ___ ist geschlossen.", "Wo ist das ___zimmer?"]
    },
    510: {
        words: [["Bett", "Yatak"], ["Tisch", "Masa"], ["Stuhl", "Sandalye"], ["Sofa", "Koltuk"], ["Schrank", "Dolap"], ["Lampe", "Lamba"], ["Spiegel", "Ayna"], ["Regal", "Raf"], ["Teppich", "Halı"], ["Bild", "Resim"]],
        sentences: ["Der ___ ist bequem.", "Setz dich auf den ___.", "Das Buch liegt auf dem ___.", "Schau in den ___.", "Das ___ hängt an der Wand.", "Die ___ ist hell."]
    },
    511: {
        words: [["Kopf", "Baş"], ["Auge", "Göz"], ["Ohr", "Kulak"], ["Nase", "Burun"], ["Mund", "Ağız"], ["Hand", "El"], ["Fuß", "Ayak"], ["Haar", "Saç"], ["Rücken", "Sırt"], ["Finger", "Parmak"]],
        sentences: ["Mein ___ tut weh.", "Sie hat blaue ___en.", "Wasch deine ___.", "Er hat kurze ___e.", "Bewege deine ___.", "Der ___ ist gesund."]
    },
    512: {
        words: [["Hemd", "Gömlek"], ["Hose", "Pantolon"], ["Kleid", "Elbise"], ["Schuh", "Ayakkabı"], ["Jacke", "Ceket"], ["Mantel", "Palto"], ["T-Shirt", "Tişört"], ["Rock", "Etek"], ["Mütze", "Bere"], ["Socke", "Çorap"]],
        sentences: ["Ich kaufe ein ___.", "Deine ___ ist neu.", "Wo ist meine ___?", "Er trägt einen schwarzen ___.", "Das ___ ist zu klein.", "Meine ___n sind nass."]
    },
    513: {
        words: [["Hund", "Köpek"], ["Katze", "Kedi"], ["Vogel", "Kuş"], ["Fisch", "Balık"], ["Pferd", "At"], ["Kuh", "İnek"], ["Löwe", "Aslan"], ["Elefant", "Fil"], ["Maus", "Fare"], ["Schaf", "Koyun"]],
        sentences: ["Der ___ bellt.", "Ich habe eine ___.", "Das ___ ist schnell.", "Ein ___ schwimmt im Wasser.", "Die ___ frisst Käse.", "Hörst du den ___ singen?"]
    },
    514: {
        words: [["Lehrer", "Öğretmen"], ["Arzt", "Doktor"], ["Polizist", "Polis"], ["Koch", "Aşçı"], ["Student", "Öğrenci"], ["Fahrer", "Şoför"], ["Ingenieur", "Mühendis"], ["Verkäufer", "Satıcı"], ["Arbeit", "İş"]],
        sentences: ["Mein Vater ist ___.", "Der ___ hilft mir.", "Ich bin ___.", "Was bist du von ___?", "Ein guter ___ kocht lecker.", "Die ___in arbeitet im Supermarkt."]
    },
    515: {
        words: [["Schule", "Okul"], ["Krankenhaus", "Hastane"], ["Bank", "Banka"], ["Park", "Park"], ["Restaurant", "Restoran"], ["Supermarkt", "Süpermarket"], ["Bahnhof", "İstasyon"], ["Apotheke", "Eczane"]],
        sentences: ["Ich gehe zur ___.", "Das ___ ist weit.", "Wir treffen uns im ___.", "Ich kaufe Brot beim ___.", "Wo ist die nächste ___?", "Der Zug kommt am ___ an."]
    },
    516: {
        words: [["Auto", "Araba"], ["Bus", "Otobüs"], ["Zug", "Tren"], ["Flugzeug", "Uçak"], ["Fahrrad", "Bisiklet"], ["Taxi", "Taksi"], ["U-Bahn", "Metro"], ["Fahren", "Sürmek/Gitmek"]],
        sentences: ["Ich fahre mit dem ___.", "Wo ist das ___?", "Der ___ kommt pünktlich.", "Ich ___ gerne Fahrrad.", "Das ___ fliegt hoch.", "Die ___ ist voll."]
    },
    517: {
        words: [["aufwachen", "Uyanmak"], ["aufstehen", "Kalkmak"], ["duschen", "Duş almak"], ["frühstücken", "Kahvaltı yapmak"], ["arbeiten", "Çalışmak"], ["lernen", "Öğrenmek"], ["kochen", "Yemek pişirmek"]],
        sentences: ["Ich ___ um 7 Uhr.", "Wann ___ du?", "Ich muss heute ___.", "Hast du schon ge___?", "Er ___ jeden Abend.", "Ich ___ Deutsch in der Schule."]
    },
    518: {
        words: [["Uhrzeit", "Saat"], ["Stunde", "Saat (süre)"], ["Minute", "Dakika"], ["Morgen", "Sabah"], ["Mittag", "Öğle"], ["Nachmittag", "Öğleden sonra"], ["Abend", "Akşam"]],
        sentences: ["Wie ist die ___?", "Ich warte eine ___.", "Wir sehen uns am ___.", "Es ist zwölf Uhr ___.", "Guten ___!", "Ein Tag hat 24 ___n."]
    },
    519: {
        words: [["Sonne", "Güneş"], ["Regen", "Yağmur"], ["Wolke", "Bulut"], ["Wind", "Rüzgar"], ["Schnee", "Kar"], ["heiß", "Sıcak"], ["kalt", "Soğuk"], ["Wetter", "Hava"], ["Sonnig", "Güneşli"]],
        sentences: ["Die ___ scheint.", "Gestern gab es ___.", "Wie ist das ___?", "Es ist sehr ___ heute.", "Ich mag ___ im Winter.", "Der ___ weht stark."]
    },
    520: {
        words: [["Sport", "Spor"], ["Musik", "Müzik"], ["Lesen", "Okuma"], ["Tanzen", "Dans"], ["Schwimmen", "Yüzme"], ["Singen", "Şarkı söyleme"], ["Wandern", "Yürüyüş"], ["Hobby", "Hobi"]],
        sentences: ["Mein Hobby ist ___.", "Ich mag ___.", "Gehen wir ___?", "Welches ___ hast du?", "Hörst du gerne ___?", "Ich ___ jeden Samstag im Chor."]
    },
    521: {
        words: [["glücklich", "Mutlu"], ["traurig", "Üzgün"], ["wütend", "Kızgın"], ["müde", "Yorgun"], ["hungrig", "Aç"], ["durstig", "Susamış"], ["Angst", "Korku"], ["lachen", "Gülmek"]],
        sentences: ["Ich bin ___.", "Warum bist du ___?", "Hast du ___?", "Ich bin ___ und möchte schlafen.", "Bist du ___? Hier ist Wasser.", "Warum ___st du?"]
    },
    522: {
        words: [["Buch", "Kitap"], ["Kuli", "Kalem"], ["Bleistift", "Kurşun kalem"], ["Heft", "Defter"], ["Klassenzimmer", "Sınıf"], ["Tafel", "Tahta"], ["Hausaufgabe", "Ev ödevi"]],
        sentences: ["Das ___ ist schwer.", "Schreib an die ___.", "Hast du die ___ gemacht?", "Kannst du mir einen ___ geben?", "Ich schreibe in mein ___.", "Wo ist das ___?"]
    },
    523: {
        words: [["Geburtstag", "Doğum günü"], ["Weihnachten", "Noel"], ["Neujahr", "Yeni yıl"], ["Urlaub", "Tatil"], ["Party", "Parti"], ["Geschenk", "Hediye"], ["feiern", "Kutlamak"]],
        sentences: ["Herzlichen Glückwunsch zum ___!", "Wir ___ zusammen.", "Das ___ ist für dich.", "Viel Spaß im ___!", "Machen wir eine ___?", "Ich kriege ein ___."]
    },
    524: {
        words: [["Land", "Ülke"], ["Deutschland", "Almanya"], ["Türkei", "Türkiye"], ["Schweiz", "İsviçre"], ["Sprache", "Dil"], ["Stadt", "Şehir"], ["Hauptstadt", "Başkent"]],
        sentences: ["Ich komme aus der ___.", "Wie heißt das ___?", "Berlin ist eine ___.", "Welche ___ sprichst du?", "Ich wohne in ___.", "Das ist meine ___."]
    },
    525: {
        words: [["gehen", "Gitmek"], ["kommen", "Gelmek"], ["machen", "Yapmak"], ["nehmen", "Almak"], ["geben", "Vermek"], ["sagen", "Söylemek"], ["sehen", "Görmek"]],
        sentences: ["Ich ___ nach Hause.", "Was ___ du?", "Kannst du das ___?", "Ich ___ dir das Buch.", "Was ___st du dazu?", "Wir ___ uns morgen."]
    },
    526: {
        words: [["der", "Eril tanımlık"], ["die", "Dişil tanımlık"], ["das", "Nötr tanımlık"], ["ein", "Bir"], ["eine", "Bir (dişil)"], ["kein", "Hiç"], ["mein", "Benim"], ["dein", "Senin"]],
        sentences: ["Das ist ___ Mann.", "Das ist ___ Frau.", "___ Name ist Max.", "Ist das ___ Buch?", "Ich habe ___ Geld.", "___ Kind spielt."]
    },
    527: {
        words: [["den", "-i hali (eril)"], ["mich", "Beni"], ["dich", "Seni"], ["ihn", "Onu"], ["uns", "Bizi"], ["euch", "Sizi"], ["für", "İçin"], ["ohne", "Olmadan"]],
        sentences: ["Ich sehe ___ Hund.", "Das ist ___ dich.", "Komm ___ mich.", "Er liebt ___.", "Kaffee ___ Zucker.", "Wir brauchen ___."]
    },
    528: {
        words: [["groß", "Büyük"], ["klein", "Küçük"], ["schön", "Güzel"], ["gut", "İyi"], ["schlecht", "Kötü"], ["neu", "Yeni"], ["alt", "Eski"], ["schnell", "Hızlı"]],
        sentences: ["Das Haus ist ___.", "Ein ___er Tag.", "Der Zug ist ___.", "Wie ___ bist du?", "Mein Auto ist ___.", "Die Pizza ist ___."]
    },
    529: {
        words: [["in", "İçinde"], ["auf", "Üstünde"], ["an", "Kenarında"], ["unter", "Altında"], ["über", "Üzerinde"], ["vor", "Önünde"], ["hinter", "Arkasında"]],
        sentences: ["Ich bin ___ der Schule.", "Das Buch liegt ___ dem Tisch.", "Komm ___ mir.", "Die Katze ist ___ dem Bett.", "Das Bild hängt ___ der Wand."]
    },
    530: {
        words: [["Hallo", "Merhaba"], ["Danke", "Teşekkürler"], ["Bitte", "Lütfen"], ["Name", "İsim"], ["wohnen", "Yaşamak"], ["kommen", "Gelmek"], ["sprechen", "Konuşmak"]],
        sentences: ["Wie ist dein ___?", "Ich ___ in Berlin.", "Ich ___ Deutsch.", "Woher ___ du?", "Vielen ___!", "Gern ge___!"]
    }
};

export function getGermanA1QuestionsForUnit(unitId: number, quizIndex: number = 1): Question[] {
    const data = topics[unitId] || topics[501];
    
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
