import { Question, QuestionType } from "./questions";

interface GermanTopic {
    words: [string, string][];
    sentences: string[];
}

const topics: { [key: number]: GermanTopic } = {
    501: {
        words: [
            ["Ich", "Ben"], ["Du", "Sen"], ["Er", "O (Eril)"], ["Sie", "O (Dişil)/Siz"], 
            ["Es", "O (Nötr)"], ["Wir", "Biz"], ["Ihr", "Siz (Çoğul)"], ["Hallo", "Merhaba"],
            ["Guten Tag", "İyi günler"], ["Tschüss", "Güle güle"], ["Danke", "Teşekkürler"],
            ["Bitte", "Lütfen/Rica ederim"], ["Ja", "Evet"], ["Nein", "Hayır"], ["Wer", "Kim"],
            ["Was", "Ne"], ["Wie", "Nasıl"], ["Wo", "Nerede"], ["Name", "İsim"], ["Freund", "Arkadaş"]
        ],
        sentences: [
            "___ bin Max.", "Wie heißt ___?", "___ kommt aus Berlin.", 
            "___ sind Freunde.", "___ geht es dir?", "___ ist das?",
            "___ heißt du?", "___ wohnst du?", "___ ist mein Freund.", "___ Tag!"
        ]
    },
    502: {
        words: [
            ["sein", "olmak"], ["haben", "sahip olmak"], ["kommen", "gelmek"], ["wohnen", "yaşamak"], 
            ["heißen", "adlandırılmak"], ["sprechen", "konuşmak"], ["lernen", "öğrenmek"], ["trinken", "içmek"],
            ["essen", "yemek yeme"], ["gehen", "gitmek"], ["sehen", "görmek"], ["hören", "duymak"],
            ["schreiben", "yazmak"], ["lesen", "okumak"], ["machen", "yapmak"], ["kaufen", "satın almak"],
            ["arbeiten", "çalışmak"], ["spielen", "oynamak"], ["singen", "şarkı söylemek"], ["tanzen", "dans etmek"]
        ],
        sentences: [
            "Ich ___ aus der Türkei.", "Du ___ in Berlin.", "Er ___ Deutsch.", 
            "Wir ___ Kaffee.", "Ich ___ Pizza.", "Wann ___ du?",
            "Ich ___ ein Buch.", "Er ___ Musik.", "Wir ___ Fußball.", "Was ___ du?"
        ]
    },
    503: {
        words: [
            ["eins", "bir"], ["zwei", "iki"], ["drei", "üç"], ["vier", "dört"], 
            ["fünf", "beş"], ["sechs", "altı"], ["sieben", "yedi"], ["acht", "sekiz"],
            ["neun", "dokuz"], ["zehn", "on"], ["elf", "on bir"], ["zwölf", "on iki"],
            ["zwanzig", "yirmi"], ["dreißig", "otuz"], ["vierzig", "kırk"], ["fünfzig", "elli"],
            ["null", "sıfır"], ["hundert", "yüz"], ["tausend", "bin"], ["Nummer", "numara"]
        ],
        sentences: [
            "Ich habe ___ Hände.", "Es ist ___ Uhr.", "Das kostet ___ Euro.", 
            "Meine Telefon___ ist...", "Eins plus zwei ist ___.", "Zehn minus fünf ist ___.",
            "Ich bin ___ Jahre alt.", "Hier sind ___ Äpfel.", "Das Haus hat ___ Zimmer.",
            "___, zwei, drei, los!"
        ]
    },
    504: {
        words: [
            ["Vater", "Baba"], ["Mutter", "Anne"], ["Sohn", "Oğul"], ["Tochter", "Kız evlat"], 
            ["Bruder", "Erkek kardeş"], ["Schwester", "Kız kardeş"], ["Opa", "Dede"], ["Oma", "Nene"],
            ["Eltern", "Ebeveyn"], ["Geschwister", "Kardeşler"], ["Kind", "Çocuk"], ["Baby", "Bebek"],
            ["Mann", "Adam/Koca"], ["Frau", "Kadın/Eş"], ["Onkel", "Amca/Dayı"], ["Tante", "Hala/Teyze"],
            ["Cousin", "Kuzen"], ["Nichte", "Yeğen (kız)"], ["Neffe", "Yeğen (erkek)"], ["Familie", "Aile"]
        ],
        sentences: [
            "Meine ___ ist groß.", "Mein ___ arbeitet viel.", "Hast du ___?", 
            "Das ist meine ___.", "Wie alt ist dein ___?", "Meine ___n wohnen hier.",
            "Mein ___ spielt im Garten.", "Ich liebe meine ___.", "Das ist das ___ unserer Nachbarn.",
            "Meine ___ backt Kuchen."
        ]
    },
    505: {
        words: [
            ["Apfel", "Elma"], ["Brot", "Ekmek"], ["Wasser", "Su"], ["Milch", "Süt"], 
            ["Kaffee", "Kahve"], ["Tee", "Çay"], ["Käse", "Peynir"], ["Wurst", "Sucuk/Sosis"],
            ["Ei", "Yumurta"], ["Fleisch", "Et"], ["Fisch", "Balık"], ["Gemüse", "Sebze"],
            ["Obst", "Meyve"], ["Banane", "Muz"], ["Zucker", "Şeker"], ["Salz", "Tuz"],
            ["Butter", "Tereyağı"], ["Reis", "Pirinç"], ["Nudeln", "Makarna"], ["Saft", "Meyve suyu"]
        ],
        sentences: [
            "Ich esse ein ___.", "Ich trinke ___.", "Das ___ ist frisch.", 
            "Ein Glas ___ bitte.", "Ich mag keinen ___.", "Möchten Sie ___?",
            "Obst und ___ sind gesund.", "Zum Frühstück esse ich ___.", "Der ___ schmeckt gut.",
            "Haben wir noch ___?"
        ]
    },
    506: {
        words: [
            ["Montag", "Pazartesi"], ["Dienstag", "Salı"], ["Mittwoch", "Çarşamba"], ["Donnerstag", "Perşembe"], 
            ["Freitag", "Cuma"], ["Samstag", "Cumartesi"], ["Sonntag", "Pazar"], ["Woche", "Hafta"],
            ["Tag", "Gün"], ["Heute", "Bugün"], ["Morgen", "Yarın"], ["Gestern", "Dün"],
            ["Wochenende", "Hafta sonu"], ["Januar", "Ocak"], ["Februar", "Şubat"], ["März", "Mart"],
            ["April", "Nisan"], ["Mai", "Mayıs"], ["Juni", "Haziran"], ["Juli", "Temmuz"]
        ],
        sentences: [
            "Heute ist ___.", "Am ___ habe ich frei.", "Schönes ___!", 
            "Ein Monat hat vier ___n.", "Was machst du am ___?", "___ ist mein Lieblingstag.",
            "___ war ich im Kino.", "___ gehe ich einkaufen.", "Der ___ ist der erste Tag.",
            "Wie viele ___e hat der Januar?"
        ]
    },
    507: {
        words: [
            ["schwarz", "siyah"], ["weiß", "beyaz"], ["rot", "kırmızı"], ["blau", "mavi"], 
            ["grün", "yeşil"], ["gelb", "sarı"], ["braun", "kahverengi"], ["grau", "gri"],
            ["rosa", "pembe"], ["lila", "mor"], ["orange", "turuncu"], ["hell", "açık (renk)"],
            ["dunkel", "koyu (renk)"], ["bunt", "renkli"], ["Farbe", "renk"], ["Silber", "gümüş"],
            ["Gold", "altın"], ["Türkis", "turkuaz"], ["Beige", "bej"], ["Violett", "menekşe rengi"]
        ],
        sentences: [
            "Mein Auto ist ___.", "Der Himmel ist ___.", "Die Blume ist ___.", 
            "Welche ___ magst du?", "Ein ___es Kleid.", "Die Blätter sind ___.",
            "Ich trage eine ___e Hose.", "Das Bild ist sehr ___.", "Ein ___er Anzug (gri).",
            "Geld ist oft ___ (altın)."
        ]
    },
    508: {
        words: [
            ["Haus", "Ev"], ["Zimmer", "Oda"], ["Küche", "Mutfak"], ["Bad", "Banyo"], 
            ["Wohnzimmer", "Oturma odası"], ["Schlafzimmer", "Yatak odası"], ["Garten", "Bahçe"], ["Tür", "Kapı"],
            ["Fenster", "Pencere"], ["Wand", "Duvar"], ["Balkon", "Balkon"], ["Keller", "Bodrum"],
            ["Dach", "Çatı"], ["Treppe", "Merdiven"], ["Flur", "Koridor"], ["Nachbar", "Komşu"],
            ["Miete", "Kira"], ["Schlüssel", "Anahtar"], ["Licht", "Işık"], ["Hausflur", "Bina girişi"]
        ],
        sentences: [
            "Das ___ ist groß.", "Ich koche in der ___.", "Wo ist das ___?", 
            "Die ___ ist zu.", "Öffne das ___.", "Wir sitzen im ___.",
            "Sie schläft im ___.", "Mein ___ ist nett.", "Ich suche den ___.",
            "Die ___ ist hoch."
        ]
    },
    509: {
        words: [
            ["groß", "büyük"], ["klein", "küçük"], ["gut", "iyi"], ["schlecht", "kötü"], 
            ["neu", "yeni"], ["alt", "eski"], ["schnell", "hızlı"], ["langsam", "yavaş"],
            ["schön", "güzel"], ["hässlich", "çirkin"], ["teuer", "pahalı"], ["billig", "ucuz"],
            ["heiß", "sıcak"], ["kalt", "soğuk"], ["sauber", "temiz"], ["schmutzig", "kirli"],
            ["hell", "aydınlık"], ["dunkel", "karanlık"], ["leicht", "kolay/hafif"], ["schwer", "zor/ağır"]
        ],
        sentences: [
            "Das Auto ist ___.", "Die Pizza ist ___.", "Das Buch ist ___.", 
            "Der Film war ___.", "Ich bin ___.", "Es ist sehr ___ heute.",
            "Das ist zu ___.", "Ein ___er Mann.", "Die Aufgabe ist ___.",
            "Sei nicht so ___."
        ]
    },
    510: {
        words: [
            ["Bett", "Yatak"], ["Tisch", "Masa"], ["Stuhl", "Sandalye"], ["Sofa", "Koltuk"], 
            ["Schrank", "Dolap"], ["Lampe", "Lamba"], ["Spiegel", "Ayna"], ["Regal", "Raf"], 
            ["Teppich", "Halı"], ["Bild", "Resim"], ["Vorhang", "Perde"], ["Kissen", "Yastık"],
            ["Decke", "Battaniye"], ["Uhr", "Saat"], ["Vase", "Vazo"], ["Fernseher", "Televizyon"],
            ["Radio", "Radyo"], ["Schreibtisch", "Çalışma masası"], ["Bücherregal", "Kitaplık"], ["Sessel", "Tekli koltuk"]
        ],
        sentences: [
            "Der ___ ist bequem.", "Setz dich auf den ___.", "Das Buch liegt auf dem ___.", 
            "Schau in den ___.", "Das ___ hängt an der Wand.", "Die ___ ist hell.",
            "Der ___ ist alt.", "Eine schöne ___ mit Blumen.",
            "Ich schlafe in meinem ___.", "Der ___ ist neu."
        ]
    },
    511: {
        words: [
            ["Kopf", "Baş"], ["Auge", "Göz"], ["Ohr", "Kulak"], ["Nase", "Burun"], 
            ["Mund", "Ağız"], ["Hand", "El"], ["Fuß", "Ayak"], ["Haar", "Saç"], 
            ["Rücken", "Sırt"], ["Finger", "Parmak"], ["Zahn", "Diş"], ["Zunge", "Dil"],
            ["Hals", "Boyun/Boğaz"], ["Schulter", "Omuz"], ["Knie", "Diz"], ["Bauch", "Karın"],
            ["Gesicht", "Yüz"], ["Lippe", "Dudak"], ["Arm", "Kol"], ["Bein", "Bacak"],
            ["Herz", "Kalp"], ["Blut", "Kan"], ["Körper", "Vücut"]
        ],
        sentences: [
            "Mein ___ tut weh.", "Sie hat blaue ___en.", "Wasch deine ___.", 
            "Er hat kurze ___e.", "Bewege deine ___.", "Der ___ ist gesund.",
            "Ich putze meine ___e.", "Mein ___ ist voll.", "Sie hat breite ___n.",
            "Das ___ schlägt schnell."
        ]
    },
    512: {
        words: [
            ["Hemd", "Gömlek"], ["Hose", "Pantolon"], ["Kleid", "Elbise"], ["Schuh", "Ayakkabı"], 
            ["Jacke", "Ceket"], ["Mantel", "Palto"], ["T-Shirt", "Tişört"], ["Rock", "Etek"], 
            ["Mütze", "Bere"], ["Socke", "Çorap"], ["Pullover", "Kazak"], ["Anzug", "Takım elbise"],
            ["Gürtel", "Kemer"], ["Handschuh", "Eldiven"], ["Schal", "Atkı"], ["Brille", "Gözlük"],
            ["Tasche", "Çanta"], ["Regenschirm", "Şemsiye"], ["Unterwäsche", "İç çamaşırı"], ["Stiefel", "Çizme"]
        ],
        sentences: [
            "Ich kaufe ein ___.", "Deine ___ ist neu.", "Wo ist meine ___?", 
            "Er trägt einen schwarzen ___.", "Das ___ ist zu klein.", "Meine ___n sind nass.",
            "Zieh deinen ___ an, es ist kalt.", "Ich brauche eine neue ___.",
            "Ohne ___ sehe ich nichts.", "Nimm den ___ mit."
        ]
    },
    513: {
        words: [
            ["Hund", "Köpek"], ["Katze", "Kedi"], ["Vogel", "Kuş"], ["Fisch", "Balık"], 
            ["Pferd", "At"], ["Kuh", "İnek"], ["Löwe", "Aslan"], ["Elefant", "Fil"], 
            ["Maus", "Fare"], ["Schaf", "Koyun"], ["Ziege", "Keçi"], ["Hase", "Tavşan"],
            ["Bär", "Ayı"], ["Affe", "Maymun"], ["Schlange", "Yılan"], ["Spinne", "Örümcek"],
            ["Tiger", "Kaplan"], ["Wolf", "Kurt"], ["Giraffe", "Zürafa"], ["Schwein", "Domuz"]
        ],
        sentences: [
            "Der ___ bellt.", "Ich habe eine ___.", "Das ___ ist nhanh.", 
            "Ein ___ schwimmt im Wasser.", "Die ___ frisst Käse.", "Hörst du den ___ singen?",
            "Die ___ gibt Milch.", "Der ___ ist der König der Tiere.",
            "Ein ___ hat einen langen Rüssel.", "Ich habe Angst vor ___n."
        ]
    },
    514: {
        words: [
            ["Lehrer", "Öğretmen"], ["Arzt", "Doktor"], ["Polizist", "Polis"], ["Koch", "Aşçı"], 
            ["Student", "Öğrenci"], ["Fahrer", "Şoför"], ["Ingenieur", "Mühendis"], ["Verkäufer", "Satıcı"], 
            ["Arbeit", "İş"], ["Bäcker", "Fırıncı"], ["Kellner", "Garson"], ["Frisör", "Kuaför"],
            ["Mechaniker", "Tamirci"], ["Sekretär", "Sekreter"], ["Programmierer", "Programcı"], ["Manager", "Yönetici"],
            ["Anwalt", "Avukat"], ["Künstler", "Sanatçı"], ["Pilot", "Pilot"], ["Handwerker", "Zanaatkar"]
        ],
        sentences: [
            "Mein Vater ist ___.", "Der ___ hilft mir.", "Ich bin ___.", 
            "Was bist du von ___?", "Ein guter ___ kocht lecker.", "Die ___in arbeitet im Supermarkt.",
            "Der ___ schneidet meine Haare.", "Der ___ brings das Essen.",
            "Ein ___ backt Brot.", "Sie möchte ___ werden."
        ]
    },
    515: {
        words: [
            ["Schule", "Okul"], ["Krankenhaus", "Hastane"], ["Bank", "Banka"], ["Park", "Park"], 
            ["Restaurant", "Restoran"], ["Supermarkt", "Süpermarket"], ["Bahnhof", "İstasyon"], ["Apotheke", "Eczane"],
            ["Bibliothek", "Kütüphane"], ["Kino", "Sinema"], ["Museum", "Müze"], ["Hotel", "Otel"],
            ["Flughafen", "Havalimanı"], ["Kirche", "Kilise"], ["Post", "Postane"], ["Polizei", "Polis merkezi"],
            ["Schwimmbad", "Yüzme havuzu"], ["Bäckerei", "Fırın"], ["Café", "Kafe"], ["Platz", "Meydan"]
        ],
        sentences: [
            "Ich gehe zur ___.", "Das ___ ist weit.", "Wir treffen uns im ___.", 
            "Ich kaufe Brot beim ___.", "Where ist die nächste ___?", "Der Zug comes am ___ an.",
            "Ich lese in der ___.", "Ein film im ___.", "Wir stay im ___.",
            "Der ___ ist in der Mitte der Stadt."
        ]
    },
    516: {
        words: [
            ["Auto", "Araba"], ["Bus", "Otobüs"], ["Zug", "Tren"], ["Flugzeug", "Uçak"], 
            ["Fahrrad", "Bisiklet"], ["Taxi", "Taksi"], ["U-Bahn", "Metro"], ["Fahren", "Sürmek/Gitmek"],
            ["Motorrad", "Motosiklet"], ["Schiff", "Gemi"], ["LKW", "Kamyon"], ["Straßenbahn", "Tramvay"],
            ["Haltestelle", "Durak"], ["Ticket", "Bilet"], ["Stau", "Trafik sıkışıklığı"], ["Parkplatz", "Otopark"],
            ["Ampel", "Trafik lambası"], ["Brücke", "Köprü"], ["Straße", "Sokak/Cadde"], ["Reise", "Yolculuk"]
        ],
        sentences: [
            "Ich fahre mit dem ___.", "Wo ist das ___?", "Der ___ kommt pünktlich.", 
            "Ich ___ gerne Fahrrad.", "Das ___ fliegt hoch.", "Die ___ ist voll.",
            "Ich waarte an der ___.", "Hast du bir ___ gekauft?", "Viel ___ im Feierabendverkehr.",
            "Parke dein Auto auf dem ___."
        ]
    },
    517: {
        words: [
            ["aufwachen", "Uyanmak"], ["aufstehen", "Kalkmak"], ["duschen", "Duş almak"], 
            ["frühstücken", "Kahvaltı yapmak"], ["arbeiten", "Çalışmak"], ["lernen", "Öğrenmek"], ["kochen", "Yemek pişirmek"],
            ["schlafen", "Uyumak"], ["essen", "Yemek yemek"], ["trinken", "İçmek"], ["gehen", "Gitmek"],
            ["lesen", "Okumak"], ["schreiben", "Yazmak"], ["sehen", "Görmek"], ["hören", "Duymak/Dinlemek"],
            ["machen", "Yapmak"], ["helfen", "Yardım etmek"], ["kaufen", "Satın almak"], ["spielen", "Oynamak"], ["putzen", "Temizlemek"]
        ],
        sentences: [
            "Ich ___ um 7 Uhr.", "Wann ___ du?", "Ich muss bugün ___.", 
            "Hast du schon ge___?", "Er ___ jeden Abend.", "Ich ___ Deutsch in der Schule.",
            "Ich ___ acht Stunden.", "Wir ___ Pasta.", "Kannst du mir ___?",
            "Ich ___ mein Zimmer."
        ]
    },
    518: {
        words: [
            ["Uhrzeit", "Saat"], ["Stunde", "Saat (süre)"], ["Minute", "Dakika"], ["Morgen", "Sabah"], 
            ["Mittag", "Öğle"], ["Nachmittag", "Öğleden sonra"], ["Abend", "Akşam"], ["Nacht", "Gece"],
            ["Kalender", "Takvim"], ["Sekunde", "Saniye"], ["Viertel", "Çeyrek"], ["Halb", "Buçuk"],
            ["Früh", "Erken"], ["Spät", "Geç"], ["Pünktlich", "Dakik"], ["Termin", "Randevu/Randevulu zaman"],
            ["Pause", "Mola"], ["Zeit", "Zaman"], ["Uhr", "Saat (cihaz)"], ["Dauer", "Süre"]
        ],
        sentences: [
            "Wie ist die ___?", "Ich waarte bir ___.", "Wir sehen uns am ___.", 
            "Es ist twelve Uhr ___.", "Guten ___!", "Ein day hat 24 ___n.",
            "Komm bitte ___.", "Ich habe einen ___ beim Arzt.", "Gute ___!",
            "How much ___ haben wir noch?"
        ]
    },
    519: {
        words: [
            ["Sonne", "Güneş"], ["Regen", "Yağmur"], ["Wolke", "Bulut"], ["Wind", "Rüzgar"], 
            ["Schnee", "Kar"], ["heiß", "Sıcak"], ["kalt", "Soğuk"], ["Wetter", "Hava"], ["Sonnig", "Güneşli"],
            ["Gewitter", "Gök gürültülü fırtına"], ["Nebel", "Sis"], ["Himmel", "Gökyüzü"], ["Stern", "Yıldız"],
            ["Mond", "Ay"], ["Temperatur", "Sıcaklık"], ["Grad", "Derece"], ["Regenschirm", "Şemsiye"],
            ["Blitz", "Şimşek"], ["Donner", "Gök gürültüsü"], ["Jahreszeit", "Mevsim"]
        ],
        sentences: [
            "Die ___ scheint.", "Gestern gab es ___.", "Wie ist das ___?", 
            "Es ist very ___ bugün.", "Ich mag ___ im Winter.", "Der ___ weht stark.",
            "Der ___ ist blau.", "Wie viel ___ sind es draußen?", "Es ist sehr ___ (sisli).",
            "Ein starkes ___ kommt."
        ]
    },
    520: {
        words: [
            ["Sport", "Spor"], ["Musik", "Müzik"], ["Lesen", "Okuma"], ["Tanzen", "Dans"], 
            ["Schwimmen", "Yüzme"], ["Singen", "Şarkı söyleme"], ["Wandern", "Yürüyüş"], ["Hobby", "Hobi"],
            ["Malen", "Resim yapma"], ["Kochen", "Yemek yapma"], ["Reisen", "Seyahat etme"], ["Fotografieren", "Fotoğraf çekme"],
            ["Fußball", "Futbol"], ["Tennis", "Tenis"], ["Gitarre", "Gitar"], ["Klavier", "Piyano"],
            ["Kino", "Sinema"], ["Theater", "Tiyatro"], ["Fernsehen", "Televizyon izleme"], ["Joggen", "Koşu yapma"]
        ],
        sentences: [
            "Mein Hobby ist ___.", "Ich mag ___.", "Gehen wir ___?", 
            "Welches ___ hast du?", "Hörst du gerne ___?", "Ich ___ jeden Samstag im Chor.",
            "Ich ___ gerne Landschaften.", "Er spielt ___.", "Wir gehen bugün ins ___.",
            "___ macht Spaß."
        ]
    },
    521: {
        words: [
            ["glücklich", "Mutlu"], ["traurig", "Üzgün"], ["wütend", "Kızgın"], ["müde", "Yorgun"], 
            ["hungrig", "Aç"], ["durstig", "Susamış"], ["Angst", "Korku"], ["lachen", "Gülmek"],
            ["nervös", "Heyecanlı/Gergin"], ["stolz", "Gururlu"], ["überrascht", "Şaşırmış"], ["krank", "Hasta"],
            ["gesund", "Sağlıklı"], ["fit", "Zinde"], ["böse", "Kötü/Kızgın"], ["liebevoll", "Sevgi dolu"],
            ["neugierig", "Meraklı"], ["faul", "Tembel"], ["fleißig", "Çalışkan"], ["langweilig", "Sıkıcı"]
        ],
        sentences: [
            "Ich bin ___.", "Warum bist du ___?", "Hast du ___?", 
            "Ich bin ___ und möchte schlafen.", "Bist du ___? Hier ist Wasser.", "Warum ___st du?",
            "Heute fühle ich mich ___.", "Sei nicht ___.", "Bist du ___ (meraklı)?",
            "Das ist ein ___er Film."
        ]
    },
    522: {
        words: [
            ["Buch", "Kitap"], ["Kuli", "Kalem"], ["Bleistift", "Kurşun kalem"], ["Heft", "Defter"], 
            ["Klassenzimmer", "Sınıf"], ["Tafel", "Tahta"], ["Hausaufgabe", "Ev ödevi"], ["Lehrer", "Öğretmen"],
            ["Schüler", "Öğrenci"], ["Pause", "Mola"], ["Prüfung", "Sınav"], ["Note", "Not"],
            ["Schultasche", "Okul çantası"], ["Lineal", "Cetvel"], ["Radiergummi", "Silgi"], ["Mäppchen", "Kalemlik"],
            ["Wörterbuch", "Sözlük"], ["Projekt", "Proje"], ["Zeugnis", "Karne"], ["Ferien", "Tatil (okul)"]
        ],
        sentences: [
            "Das ___ ist schwer.", "Schreib an die ___.", "Hast du die ___ gemacht?", 
            "Kannst du mir einen ___ geben?", "Ich schreibe in mein ___.", "Wo ist das ___?",
            "Die ___ war schwierig.", "Wann haben wir ___?", "Meine ___ ist auf dem Tisch.",
            "Endlich ___!"
        ]
    },
    523: {
        words: [
            ["Geburtstag", "Doğum günü"], ["Weihnachten", "Noel"], ["Neujahr", "Yeni yıl"], ["Urlaub", "Tatil"], 
            ["Party", "Parti"], ["Geschenk", "Hediye"], ["feiern", "Kutlamak"], ["Ostern", "Paskalya"],
            ["Hochzeit", "Düğün"], ["Einladung", "Davet"], ["Gast", "Misafir"], ["Torte", "Pasta"],
            ["Ballon", "Balon"], ["Lied", "Şarkı"], ["Tanz", "Dans"], ["Spaş", "Eğlence"],
            ["Überraschung", "Sürpriz"], ["Zusammen", "Birlikte"], ["Wunsch", "Dilek"], ["Kerze", "Mum"]
        ],
        sentences: [
            "Herzlichen Glückwunsch zum ___!", "Wir ___ zusammen.", "Das ___ ist für dich.", 
            "Viel Spaß im ___!", "Machen wir eine ___?", "Ich kriege ein ___.",
            "Danke für die ___.", "Hast du many ___e?", "Die ___ brennt.",
            "Alles Gute zum ___."
        ]
    },
    524: {
        words: [
            ["Land", "Ülke"], ["Deutschland", "Almanya"], ["Türkei", "Türkiye"], ["Schweiz", "İsviçre"], 
            ["Sprache", "Dil"], ["Stadt", "Şehir"], ["Hauptstadt", "Başkent"], ["Europa", "Avrupa"],
            ["Welt", "Dünya"], ["Reisepass", "Pasaport"], ["Visum", "Vize"], ["Grenze", "Sınır"],
            ["Karte", "Harita"], ["Flug", "Uçuş"], ["Reise", "Yolculuk"], ["Nachbarland", "Komşu ülke"],
            ["Österreich", "Avusturya"], ["Frankreich", "Fransa"], ["Italien", "İtalya"], ["Spanien", "İspanya"]
        ],
        sentences: [
            "Ich komme aus der ___.", "Wie heißt das ___?", "Berlin ist eine ___.", 
            "Welche ___ sprichst du?", "Ich wohne in ___.", "Das ist meine ___.",
            "Wo ist mein ___ ?", "Wir reisen durch ___.", "Die ___ von Österreich ist Wien.",
            "Ein schönes ___."
        ]
    },
    525: {
        words: [
            ["gehen", "Gitmek"], ["kommen", "Gelmek"], ["machen", "Yapmak"], ["nehmen", "Almak"], 
            ["geben", "Vermek"], ["sagen", "Söylemek"], ["sehen", "Görmek"], ["hören", "Duymak/Dinlemek"],
            ["fragen", "Sormak"], ["antworten", "Cevaplamak"], ["denken", "Düşünmek"], ["glauben", "İnanmak"],
            ["wissen", "Bilmek"], ["verstehen", "Anlamak"], ["helfen", "Yardım etmek"], ["bringen", "Getirmek"],
            ["tragen", "Taşımak/Giymek"], ["essen", "Yemek yemek"], ["trinken", "İçmek"], ["schlafen", "Uyumak"]
        ],
        sentences: [
            "Ich ___ nach Hause.", "Was ___ du?", "Kannst du das ___?", 
            "Ich ___ dir das Buch.", "Was ___st du dazu?", "Wir ___ uns morgen.",
            "Ich ___ dich nicht.", "Kannst du mir ___?", "Ich ___ (bilmiyorum).",
            "Was ___st du zum Abendessen?"
        ]
    },
    526: {
        words: [
            ["der", "Eril tanımlık"], ["die", "Dişil tanımlık"], ["das", "Nötr tanımlık"], ["ein", "Bir"], 
            ["eine", "Bir (dişil)"], ["kein", "Hiç"], ["mein", "Benim"], ["dein", "Senin"],
            ["sein", "Onun (eril)"], ["ihr", "Onun (dişil)/Sizin"], ["unser", "Bizim"], ["euer", "Sizin (çoğul)"],
            ["dieser", "Bu"], ["jeder", "Her"], ["welcher", "Hangi/Hangisi"], ["alle", "Hepsi"],
            ["viele", "Çok"], ["wenige", "Az"], ["etwas", "Biraz"], ["nichts", "Hiçbir şey"]
        ],
        sentences: [
            "Das ist ___ Mann.", "Das ist ___ Frau.", "___ Name ist Max.", 
            "Ist das ___ Buch?", "Ich habe ___ Geld.", "___ Kind spielt.",
            "Das ist ___ Katze (bizim).", "___ Apfel ist rot (bu).", "Haben Sie ___?",
            "___ sind burada."
        ]
    },
    527: {
        words: [
            ["den", "-i hali (eril)"], ["mich", "Beni"], ["dich", "Seni"], ["ihn", "Onu"], 
            ["uns", "Bizi"], ["euch", "Sizi"], ["für", "İçin"], ["ohne", "Olmadan"],
            ["durch", "İçinden/Arasından"], ["gegen", "Karşı"], ["um", "Etrafında/Saatlerde"], ["bis", "Kadar"],
            ["sie", "Onu (dişil)/Onları"], ["es", "Onu (nötr)"], ["Sie", "Sizi (nazik)"], ["direkt", "Doğrudan"],
            ["links", "Sola/Solda"], ["rechts", "Sağa/Sağda"], ["geradeaus", "Dosdoğru"], ["entlang", "Boyunca"]
        ],
        sentences: [
            "Ich sehe ___ Hund.", "Das ist ___ dich.", "Komm ___ mich.", 
            "Er liebt ___.", "Kaffee ___ Zucker.", "Wir gereken ___.",
            "Gehen Sie ___ (dosdoğru).", "Er spielt ___ den Ball.", "Wir laufen ___ den See.",
            "Warst du ___ Freitag da?"
        ]
    },
    528: {
        words: [
            ["groß", "Büyük"], ["klein", "Küçük"], ["schön", "Güzel"], ["gut", "İyi"], 
            ["schlecht", "Kötü"], ["neu", "Yeni"], ["alt", "Eski"], ["schnell", "Hızlı"],
            ["langsam", "Yavaş"], ["teuer", "Pahalı"], ["billig", "Ucuz"], ["warm", "Ilık/Sıcak"],
            ["kalt", "Soğuk"], ["sauber", "Temiz"], ["schmutzig", "Kirli"], ["laut", "Gürültülü"],
            ["leise", "Sessiz"], ["leicht", "Kolay/Hafif"], ["schwer", "Zor/Ağır"], ["jung", "Genç"]
        ],
        sentences: [
            "Das Haus ist ___.", "Ein ___er Tag.", "Der Zug ist ___.", 
            "Wie ___ bist du?", "Mein Auto ist ___.", "Die Pizza ist ___.",
            "Das ist zu ___.", "Ein ___er Mann.", "Die Aufgabe ist ___.",
            "Sei bitte ___."
        ]
    },
    529: {
        words: [
            ["in", "İçinde"], ["auf", "Üstünde"], ["an", "Kenarında"], ["unter", "Altında"], 
            ["über", "Üzerinde"], ["vor", "Önünde"], ["hinter", "Arkasında"], ["neben", "Yanında"],
            ["zwischen", "Arasında"], ["bei", "Yanında/-de/-da"], ["nach", "Sonra/-a/-e"], ["zu", "-e/-a"],
            ["von", "-den/-dan"], ["mit", "İle"], ["seit", "-den beri"], ["ab", "-den itibaren"],
            ["gegenüber", "Karşısında"], ["nah", "Yakın"], ["fern", "Uzak"], ["oben", "Yukarıda"]
        ],
        sentences: [
            "Ich bin ___ der Schule.", "Das Buch liegt ___ dem Tisch.", "Komm ___ mir.", 
            "Die Katze ist ___ den Bett.", "Das Bild hängt ___ der Wand.",
            "Warten Sie ___ mir.", "Ich fahre ___ Hause.", "Er wohnt ___ mir.",
            "Setz dich ___ mich (yanına)."
        ]
    },
    530: {
        words: [
            ["Hallo", "Merhaba"], ["Danke", "Teşekkürler"], ["Bitte", "Lütfen"], ["Name", "İsim"], 
            ["wohnen", "Yaşamak"], ["kommen", "Gelmek"], ["sprechen", "Konuşmak"], ["verstehen", "Anlamak"],
            ["helfen", "Yardım etmek"], ["entschuldigung", "Affedersiniz"], ["bitte", "Rica ederim"], ["gerne", "Memnuniyetle"],
            ["Tschüss", "Güle güle"], ["Tag", "Gün"], ["Nacht", "Gece"], ["Morgen", "Sabah"],
            ["heute", "bugün"], ["hier", "burada"], ["dort", "orada"], ["willkommen", "hoş geldiniz"]
        ],
        sentences: [
            "Wie ist dein ___?", "Ich ___ in Berlin.", "Ich ___ Deutsch.", 
            "Woher ___ du?", "Vielen ___!", "Gern ge___!",
            "___, können Sie mir helfen?", "Herzlich ___!", "Ich ___ Sie nicht (anlamıyorum).",
            "Bis ___!"
        ]
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
