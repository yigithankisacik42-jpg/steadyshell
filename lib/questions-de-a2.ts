import { Question, QuestionType } from "./questions";

export interface GermanTopic {
    words: string[][];
    sentences: string[];
}

const topics: { [key: number]: GermanTopic } = {
    // A2 Üniteleri (531-560)
    531: { 
        words: [["gearbeitet", "çalıştı"], ["gelernt", "öğrendi"], ["gemacht", "yaptı"], ["gesagt", "söyledi"], ["gehört", "duydu"], ["gespielt", "oynadı"], ["gekocht", "pişirdi"], ["gekauft", "satın aldı"], ["besucht", "ziyaret etti"], ["erzählt", "anlattı"], ["gelacht", "güldü"], ["gewohnt", "yaşadı"], ["gefrühstückt", "kahvaltı yaptı"], ["geputzt", "temizledi"], ["getanzt", "dans etti"], ["gefragt", "sordu"], ["glaubt", "inandı"], ["gelebt", "yaşadı"], ["gebraucht", "ihtiyaç duydu"], ["gefeiert", "kutladı"]],
        sentences: ["Ich habe gestern viel ___.", "Hast du das schon ___?", "Er hat mir alles ___.", "Wir haben Pizza ___.", "Sie hat ein neues Auto ___.", "Wir haben das ganze Wochenende ___.", "Hast du deine Hausaufgaben ___?", "Ich habe gestern Abend Musik ___.", "Sie hat bei mir ___.", "Wir haben viel ___ (güldük)."]
    },
    532: { 
        words: [["war", "idi"], ["hatte", "sahipti"], ["ging", "gitti"], ["kam", "geldi"], ["sah", "gördü"], ["aß", "yedi"], ["trank", "içti"], ["schrieb", "yazdı"], ["las", "okudu"], ["gab", "verdi"], ["fuhr", "gitti (araçla)"], ["lief", "koştu/yürüdü"], ["flog", "uçtu"], ["sprach", "konuştu"], ["schwamm", "yüzdü"], ["schlief", "uyudu"], ["fand", "buldu"], ["kannte", "tanıdı"], ["wusste", "bildi"], ["brachte", "getirdi"]],
        sentences: ["Gestern ___ ich müde.", "Ich ___ keine Zeit.", "Er ___ nach Hause.", "Wir ___ einen Film.", "Sie ___ einen Apfel.", "Er ___ mit dem Auto.", "Ich ___ damals in İstanbul.", "Gestern ___ es viel Schnee.", "Wir ___ ein Buch.", "Ich ___ es nicht. (bildim)"]
    },
    533: { 
        words: [["Speisekarte", "Menü"], ["Bestellung", "Sipariş"], ["Rechnung", "Hesap"], ["Kellner", "Garson"], ["Trinkgeld", "Bahşiş"], ["Vorspeise", "Başlangıç"], ["Hauptgericht", "Ana yemek"], ["Nachtisch", "Tatlı"], ["Getränk", "İçecek"], ["lecker", "Lezzetli"], ["bestellen", "sipariş vermek"], ["empfehlen", "tavsiye etmek"], ["reservieren", "rezervasyon yapmak"], ["Tisch", "Masa"], ["Salz", "Tuz"], ["Pfeffer", "Karabiber"], ["Zucker", "Şeker"], ["Messer", "Bıçak"], ["Gabel", "Çatal"], ["Löffel", "Kaşık"]],
        sentences: ["Die ___ bitte!", "Ich möchte die ___ aufgeben.", "Zahlen bitte, die ___.", "Das Essen war sehr ___.", "Bringen Sie mir ein ___.", "Ich möchte einen Tisch ___.", "Was können Sie ___?", "Haben Sie eine ___? (çatal)", "Ich brauche etwas ___.", "Der ___ kommt gleich."]
    },
    534: { 
        words: [["Einkaufswagen", "Alışveriş arabası"], ["Kasse", "Kasa"], ["Angebot", "Teklif/İndirim"], ["Preis", "Fiyat"], ["Tüte", "Poşet"], ["Gemüse", "Sebze"], ["Obst", "Meyve"], ["Bäckerei", "Fırın"], ["Metzgerei", "Kasap"], ["super", "Harika"], ["billig", "ucuz"], ["teuer", "pahalı"], ["Rabatt", "indirim"], ["Quittung", "fiş/makbuz"], ["zahlen", "ödemek"], ["ausgeben", "harcamak"], ["sparen", "biriktirmek"], ["Schlange", "kuyruk (sıra)"], ["Öffnungszeiten", "açılış saatleri"], ["geöffnet", "açık"]],
        sentences: ["Wo ist die ___?", "Der ___ ist zu hoch.", "Das ist ein gutes ___.", "Ich brauche eine ___.", "Gehen wir in die ___?", "Kann ich mit Karte ___?", "Haben Sie die ___?", "Das ist sehr ___.", "Ich möchte Geld ___.", "Die ___ ist lang."]
    },
    535: { 
        words: [["Urlaub", "Tatil"], ["Reise", "Yolculuk"], ["Koffer", "Valiz"], ["Ticket", "Bilet"], ["Hotel", "Otel"], ["Strand", "Plaj"], ["Berge", "Dağlar"], ["Sonne", "Güneş"], ["Ausflug", "Gezi"], ["planen", "Planlamak"], ["besichtigen", "gezip görmek"], ["wandern", "doğa yürüyüşü yapmak"], ["Meer", "Deniz"], ["Insel", "Ada"], ["Wald", "Orman"], ["Fluss", "Nehir"], ["Stadtrundfahrt", "şehir turu"], ["Sightseeing", "turistik yerleri gezme"], ["Landkarte", "harita"], ["Souvenir", "hediyelik eşya"]],
        sentences: ["Ich mache ___.", "Wir ___ eine Reise.", "Mein ___ ist schwer.", "Wo ist mein ___?", "Wir gehen an den ___.", "Ich schaue auf die ___.", "Wir müssen ein ___ kaufen.", "Wollen wir einen ___ machen?", "Die ___ scheint herrlich.", "Wir gehen in den ___."]
    },
    536: { 
        words: [["Reservierung", "Rezervasyon"], ["Doppelzimmer", "Çift kişilik oda"], ["Frühstück", "Kahvaltı"], ["Übernachtung", "Konaklama"], ["Ausweis", "Kimlik"], ["Schlüssel", "Anahtar"], ["Empfang", "Resepsiyon"], ["Aufenthalt", "Konaklama süresi"], ["Einzelzimmer", "Tek kişilik oda"], ["Halbpension", "Yarım pansiyon"], ["Vollpension", "Tam pansiyon"], ["Klimaanlage", "Klima"], ["WLAN", "Wi-Fi"], ["Minibar", "Minibar"], ["Aufzug", "Asansör"], ["Parkplatz", "Otopark"], ["Safe", "Kasa"], ["Wellness", "Refah/Sağlıklı yaşam"], ["Balkon", "Balkon"], ["Meerblick", "Deniz manzarası"]],
        sentences: ["Ich habe eine ___.", "Ein ___ für zwei Personen.", "Ist das ___ inklusiv?", "Hier ist mein ___.", "Wo bekomme ich den ___?", "Ein Zimmer mit ___.", "Gibt es im Zimmer ___?", "Der ___ ist im ersten Stock.", "Ich möchte ein ___ für eine Nacht.", "Hat das Hotel einen ___?"]
    },
    537: { 
        words: [["Flughafen", "Havalimanı"], ["Abflug", "Kalkış"], ["Ankunft", "Varış"], ["Gate", "Kapı"], ["Gepäck", "Bagaj"], ["Passagier", "Yolcu"], ["Flugzeug", "Uçak"], ["Boardingpass", "Biniş kartı"], ["Reisepass", "Pasaport"], ["Visum", "Vize"], ["Sitzplatz", "Koltuk"], ["Direktflug", "Aktarmasız uçuş"], ["Verspätung", "Gecikme"], ["Zoll", "Gümrük"], ["Sicherheitskontrolle", "Güvenlik kontrolü"], ["Gürtel", "Kemer"], ["Flugbegleiter", "Kabin memuru"], ["Landung", "İniş"], ["Handgepäck", "El bagajı"], ["Terminal", "Terminal"]],
        sentences: ["Wann ist der ___?", "Wo ist mein ___?", "Wir sind am ___.", "Bringen Sie Ihr ___.", "Das ___ fliegt pünktlich.", "Haben Sie ein ___?", "Mein Flug hat ___.", "Bitte den ___ ablegen.", "Wo ist das ___?", "Zeigen Sie Ihren ___."]
    },
    538: { 
        words: [["Arzt", "Doktor"], ["Krankheit", "Hastalık"], ["Schmerz", "Ağrı"], ["Rezept", "Reçete"], ["Medikament", "İlaç"], ["Fieber", "Ateş"], ["Husten", "Öksürük"], ["Gesundheit", "Sağlık"], ["Schnupfen", "Nezle"], ["Termin", "Randevu"], ["Wartezimmer", "Bekleme odası"], ["Versicherungskarte", "Sigorta kartı"], ["Untersuchung", "Muayene"], ["Spritze", "İğne"], ["Blut", "Kan"], ["Herz", "Kalp"], ["Kopfschmerzen", "Baş ağrısı"], ["Baucherzen", "Karın ağrısı"], ["krankschreiben", "rapor yazmak"], ["gutbessern", "geçmiş olsun"]],
        sentences: ["Ich muss zum ___.", "Ich habe ___.", "Haben Sie ein ___?", "Nehmen Sie dieses ___.", "Gute ___!", "Ich brauche ein ___.", "Das ___ ist voll.", "Haben Sie Ihre ___?", "Der Arzt macht eine ___.", "Ich habe starke ___ (baş ağrısı)."]
    },
    539: { 
        words: [["Apotheke", "Eczane"], ["Tablette", "Tablet/Hap"], ["Salbe", "Merhem"], ["Pflaster", "Yara bandı"], ["Hustensaft", "Öksürük şurubu"], ["beratung", "Danışmanlık"], ["rezeptfrei", "Reçetesiz"], ["Apotheker", "Eczacı"], ["Nebenwirkung", "Yan etki"], ["Beipackzettel", "Prospektüs"], ["Dosierung", "Dozaj"], ["Vitamin", "Vitamin"], ["Nasenspray", "Burun spreyi"], ["Tropfen", "Damla"], ["Verband", "Bandaj"], ["Schmerzmittel", "Ağrı kesici"], ["Antibiotiukum", "Antibiyotik"], ["Allergie", "Alerji"], ["Einnahme", "Alım (ilaç)"], ["Notdienst", "Nöbetçi"]],
        sentences: ["Wo ist die ___?", "Ich brauche ___n.", "Haben Sie eine ___? (merhem)", "Ist das ___?", "Der ___ hilft mir.", "Wie ist die ___?", "Gibt es ___?", "Ich habe bir ___.", "Haben Sie ein ___? (ağrı kesici)", "Die Apotheke hat ___."]
    },
    540: { 
        words: [["Beruf", "Meslek"], ["Arbeit", "İş"], ["Kollege", "Meslektaş"], ["Büro", "Ofis"], ["Chef", "Patron"], ["Gehalt", "Maaş"], ["Überstunden", "Fazla mesai"], ["Ausbildung", "Eğitim/Staj"], ["Bewerbung", "Başvuru"], ["Lebenslauf", "Özgeçmiş"], ["Vertrag", "Sözleşme"], ["Kündigung", "Fesih/İstifa"], ["Pause", "Mola"], ["Aufgabe", "Görev"], ["E-Mail", "E-posta"], ["Drucker", "Yazıcı"], ["Schreibtisch", "Çalışma masası"], ["Besprechung", "Toplantı"], ["Erfolg", "Başarı"], ["pünktlich", "Dakik"]],
        sentences: ["Was ist dein ___?", "Ich arbeite im ___.", "Mein ___ ist nett.", "Ich bekomme ein ___.", "Hast du eine ___?", "Der ___ ist streng.", "Ich mache viele ___.", "Wir haben eine ___.", "Haben Sie den ___?", "Viel ___!"]
    },
    541: { 
        words: [["Vorstellungsgespräch", "İş görüşmesi"], ["Bewerbung", "Başvuru"], ["Lebenslauf", "Özgeçmiş"], ["Stelle", "İş pozisyonu"], ["abteilung", "Departman"], ["pünktlich", "Dakik"], ["Erfahrung", "Deneyim"], ["Gehaltsvorstellung", "Maaş beklentisi"], ["Arbeitsvertrag", "İş sözleşmesi"], ["Probezeit", "Deneme süresi"], ["Team", "Ekip"], ["Stärken", "Güçlü yanlar"], ["Schwächen", "Zayıf yanlar"], ["Qualifikation", "Nitelik"], ["Vollzeit", "Tam zamanlı"], ["Teilzeit", "Yarı zamanlı"], ["flexibel", "esnek"], ["zuverlässig", "güvenilir"], ["verantwortung", "sorumluluk"], ["Zukunft", "Gelecek"]],
        sentences: ["Ich habe ein ___.", "Hier ist mein ___.", "Haben Sie ___?", "Seien Sie ___.", "Welche ___ haben Sie?", "Ich suche eine ___.", "Was sind deine ___?", "Ich möchte in ___ arbeiten.", "Sind Sie ___?", "Meine ___ ist hoch."]
    },
    542: { 
        words: [["Telefon", "Telefon"], ["Anruf", "Arama"], ["Nachricht", "Mesaj"], ["verbindung", "Bağlantı"], ["besetzt", "Meşgul"], ["klingeln", "Çalmak"], ["auflegen", "Kapatmak (telefon)"], ["mailbox", "Sesli mesaj kutusu"], ["Handy", "Cep telefonu"], ["Ladekabel", "Şarj kablosu"], ["Akku", "Batarya"], ["Empfang", "Çekim (sinyal)"], ["wählen", "numara çevirmek"], ["verbinden", "bağlamak"], ["zurückrufen", "geri aramak"], ["ausrichten", "iletmek (mesaj)"], ["erreichen", "ulaşmak"], ["falsch", "yanlış"], ["vorwahl", "alan kodu"], ["teilen", "paylaşmak"]],
        sentences: ["Ich erwarte einen ___.", "Hinterlassen Sie eine ___.", "Die Leitung ist ___.", "Das Telefon ___t.", "Nicht ___!", "Mein ___ ist leer.", "Haben Sie hier ___?", "Kann ich Herrn Müller ___?", "Ich ___ later ___.", "Soll ich etwas ___?"]
    },
    543: { 
        words: [["E-Mail", "E-posta"], ["Betreff", "Konu"], ["Anhang", "Ek"], ["senden", "Göndermek"], ["empfangen", "Almak"], ["antworten", "Cevaplamak"], ["löschen", "Silmek"], ["weiterleiten", "İletmek"], ["Spam", "Spam"], ["Posteingang", "Gelen kutusu"], ["Absender", "Gönderen"], ["Empfänger", "Alıcı"], ["kopieren", "kopyalamak"], ["speichern", "kaydetmek"], ["drucken", "yazdırmak"], ["tastatur", "klavye"], ["maus", "fare"], ["bildschirm", "ekran"], ["passwort", "şifre"], ["anmelden", "oturum açmak"]],
        sentences: ["Schreib mir eine ___ (E-posta).", "Was ist der ___?", "Hier ist der ___.", "Haben Sie die Mail ge___?", "Bitte ___ Sie schnell.", "Ich habe bir Mail ___.", "Leiten Sie die Mail ___.", "Mein ___ ist vergessen.", "Kopieren Sie den ___.", "Melden Sie sich ___."]
    },
    544: { 
        words: [["Gefühl", "Duygu"], ["Angst", "Korku"], ["Freude", "Sevinç"], ["Wut", "Öfke"], ["Liebe", "Aşk"], ["Hoffnung", "Umut"], ["Geduld", "Sabır"], ["Mut", "Cesaret"], ["Glück", "Mutluluk/Şans"], ["Trauer", "Keder"], ["Überraschung", "Sürpriz"], ["Eifersucht", "Kıskançlık"], ["Stolz", "Gurur"], ["Mitleid", "Acıma"], ["Vertrauen", "Güven"], ["Enttäuschung", "Hayal kırıklığı"], ["Neugier", "Merak"], ["Einsamkeit", "Yalnızlık"], ["Zufriedenheit", "Memnuniyet"], ["nervös", "gergin"]],
        sentences: ["Ich habe ___ (korku).", "Zeig deine ___.", "Gib mir ___.", "Haben Sie ___.", "Viel ___!", "Ich brauche dein ___.", "Das ist bir große ___.", "Sei nicht ___.", "Hast du ___?", "Ich fühle ___."]
    },
    545: { 
        words: [["höflich", "Kibar"], ["ehrlich", "Dürüst"], ["lustig", "Komik"], ["schüchtern", "Utangaç"], ["klug", "Zeki"], ["faul", "Tembel"], ["fleißig", "Çalışkan"], ["zuverlässig", "Güvenilir"], ["freundlich", "arkadaş canlısı"], ["geduldig", "sabırlı"], ["kreativ", "yaratıcı"], ["mutig", "cesur"], ["großzügig", "cömert"], ["arrogant", "kibirli"], ["egoistisch", "bencil"], ["pessimistisch", "karamsar"], ["optimistisch", "iyimser"], ["humorvoll", "esprili"], ["ernst", "ciddi"], ["ruhig", "sakin"]],
        sentences: ["Er ist sehr ___.", "Sei ___.", "Das ist ___.", "Sie ist ein ___es Mädchen.", "Ein ___er Mitarbeiter.", "Bleib ___.", "Das war eine ___e Tat.", "Sei nicht so ___.", "Haben Sie ___?", "Sie ist çok ___."]
    },
    546: { 
        words: [["Fussball", "Futbol"], ["Tennis", "Tenis"], ["Schwimmen", "Yüzme"], ["Laufen", "Koşu"], ["Training", "Antrenman"], ["Wettbewerb", "Yarışma"], ["Sieg", "Zafer"], ["Niederlage", "Yenilgi"], ["Mannschaft", "Takım"], ["Trainer", "Antrenör"], ["Spieler", "Oyuncu"], ["Stadion", "Stadyum"], ["Ball", "Top"], ["Tor", "Kale/Gol"], ["Schiedsrichter", "Hakem"], ["Fitnessstudio", "Spor salonu"], ["Yoga", "Yoga"], ["Muskelkater", "Kas ağrısı"], ["Handtuch", "Havlu"], ["Turnschuhe", "Spor ayakkabı"]],
        sentences: ["Ich spiele ___.", "Gehen wir ___?", "Wann ist das ___?", "Viel Erfolg beim ___!", "Ein großer ___.", "Unsere ___ hat gewonnen.", "Wo sind meine ___?", "Der ___ pfeift.", "Ich habe ___ vom Training.", "Das ___ ist voll."]
    },
    547: { 
        words: [["Musik", "Müzik"], ["Konzert", "Konser"], ["Instrument", "Enstrüman"], ["Gitarre", "Gitar"], ["Klavier", "Piyano"], ["Sänger", "Şarkıcı"], ["Lied", "Şarkı"], ["Rhythmus", "Ritim"], ["Band", "Müzik grubu"], ["Bühne", "Sahne"], ["Kopfhörer", "Kulaklık"], ["Lautsprecher", "Hoparlör"], ["Album", "Albüm"], ["Text", "Metin/Söz"], ["Melodie", "Melodi"], ["Klassik", "Klasik müzik"], ["Pop", "Pop müzik"], ["Rock", "Rock müzik"], ["Jazz", "Caz"], ["üben", "pratik yapmak"]],
        sentences: ["Ich höre ___.", "Das ___ war toll.", "Welches ___ spielst du?", "Ein schönes ___.", "Sie ist eine gute ___in.", "Ich muss täglich ___.", "Hast du ___?", "Die ___ ist laut.", "Kennst du die ___?", "Sie trat auf die ___."]
    },
    548: { 
        words: [["Film", "Film"], ["Kino", "Sinema"], ["Schauspieler", "Oyuncu"], ["Regisseur", "Yönetmen"], ["Serie", "Dizi"], ["Fernseher", "Televizyon"], ["Spannung", "Gerilim"], ["Komödie", "Komedi"], ["Horror", "Korku"], ["Action", "Aksiyon"], ["Dokumentation", "Belgesel"], ["Leinwand", "Ekran/Perde"], ["Sitzplatz", "Koltuk"], ["Eintrittskarte", "Giriş bileti"], ["Popcorn", "Patlamış mısır"], ["Untertitel", "Altyazı"], ["Synchronisation", "Dublaj"], ["Kamera", "Kamera"], ["berühmt", "ünlü"], ["drehen", "film çekmek"]],
        sentences: ["Ich schaue einen ___.", "Gehen wir ins ___?", "Wer ist der ___?", "Eine lustige ___.", "Ich sehe einen ___.", "Der Film ist sehr ___.", "Wo ist meine ___?", "Wir haben gute ___.", "Willst du ___?", "Sie ist eine berühmte Schauspielerin."]
    },
    549: { 
        words: [["Computer", "Bilgisayar"], ["Handy", "Cep telefonu"], ["Internet", "İnternet"], ["Bildschirm", "Ekran"], ["Tastatur", "Klavye"], ["Maus", "Fare"], ["Drucker", "Yazıcı"], ["Software", "Yazılım"], ["Laptop", "Dizüstü bilgisayar"], ["Tablet", "Tablet"], ["Kabel", "Kablo"], ["Stecker", "Fiş"], ["Steckdose", "Priz"], ["Festplatte", "Sabit disk"], ["Speicher", "Hafıza"], ["Datei", "Dosya"], ["Ordner", "Klasör"], ["kopieren", "kopyalamak"], ["einfügen", "yapıştırmak"], ["speichern", "kaydetmek"]],
        sentences: ["Mein ___ ist neu.", "Ich brauche ein ___.", "Das ___ ist langsam.", "Schau auf den ___.", "Der ___ funktioniert nicht.", "Wo ist das ___?", "Bitte die Datei ___.", "Erstelle einen neuen ___.", "Der ___ ist voll.", "Steck den ___ in die ___."]
    },
    550: { 
        words: [["Internet", "İnternet"], ["Webseite", "Web sitesi"], ["Passwort", "Şifre"], ["Benutzername", "Kullanıcı adı"], ["Download", "İndirme"], ["Upload", "Yükleme"], ["Browser", "Tarayıcı"], ["Sicherheit", "Güvenlik"], ["E-Mail", "E-posta"], ["Chat", "Sohbet"], ["soziale Medien", "sosyal medya"], ["Profil", "Profil"], ["Link", "Bağlantı"], ["klicken", "tıklamak"], ["surfen", "internette gezinmek"], ["online", "çevrimiçi"], ["offline", "çevrimdışı"], ["Virus", "Virüs"], ["Firewall", "Güvenlik duvarı"], ["löschen", "silmek"]],
        sentences: ["Ich surfe im ___.", "Wie ist das ___?", "Wähle einen ___.", "Ein schneller ___.", "Achte auf die ___.", "Klick auf den ___.", "Bist du ___?", "Ich muss mein Profil ___.", "Sende mir den ___.", "Vorsicht vor einem ___."]
    },
    551: { 
        words: [["Miete", "Kira"], ["Umzug", "Taşınma"], ["Wohnung", "Daire"], ["Nachbar", "Komşu"], ["Vermieter", "Ev sahibi"], ["Vertrag", "Sözleşme"], ["Kaution", "Depozito"], ["Nebenkosten", "Yan giderler"], ["Zwischenmiete", "Alt kiralama"], ["Besichtigung", "Ev gezme/görme"], ["Hausmeister", "Apartman görevlisi"], ["Müll", "Çöp"], ["Heizung", "Isıtma"], ["Strom", "Elektrik"], ["Wasser", "Su"], ["Internetanschluss", "İnternet bağlantısı"], ["Renovierung", "Renovasyon"], ["möbliert", "eşyalı"], ["unmöbliert", "eşyasız"], ["ruhige Lage", "sakin konum"]],
        sentences: ["Die ___ ist teuer.", "Wann ist der ___?", "Schöne ___!", "Mein ___ ist laut.", "Unterschreib den ___.", "Haben Sie eine Quittung für die Kaution?", "Ich möchte eine ___ machen.", "Das Haus hat einen ___.", "Die ___ ist kaputt.", "Ist die Wohnung ___?"]
    },
    552: { 
        words: [["Umwelt", "Çevre"], ["Natur", "Doğa"], ["Wald", "Orman"], ["Fluss", "Nehir"], ["Berge", "Dağlar"], ["Müll", "Çöp"], ["Energie", "Enerji"], ["Klima", "İklim"], ["Tierschutz", "Hayvan koruma"], ["Recycling", "Geri dönüşüm"], ["Mülltrennung", "Çöp ayrıştırma"], ["Plastik", "Plastik"], ["Verschmutzung", "Kirlilik"], ["Nachhaltigkeit", "Sürdürülebilirlik"], ["Erwärmung", "Isınma"], ["Ozonschicht", "Ozon tabakası"], ["Abgas", "Egzoz gazı"], ["Windkraft", "Rüzgar enerjisi"], ["Solaranlage", "Güneş paneli"], ["sparen", "tasarruf etmek"]],
        sentences: ["Schütze die ___.", "Ich liebe die ___.", "Wir gehen in den ___.", "Der ___ ist sauber.", "Trenne den ___.", "Wir müssen ___ sparen.", "Das ist ___.", "Die ___ ist ein Problem.", "Haben Sie eine ___?", "Achte auf die ___."]
    },
    553: { 
        words: [["Nachricht", "Haber"], ["Zeitung", "Gazete"], ["Radio", "Radyo"], ["Journalist", "Gazeteci"], ["Bericht", "Rapor/Haber"], ["Information", "Bilgi"], ["aktuell", "Güncel"], ["wichtig", "Önemli"], ["Schlagzeile", "Manşet"], ["Wetterbericht", "Hava durumu raporu"], ["Sportnachrichten", "Spor haberleri"], ["Politik", "Politika"], ["Wirtschaft", "Ekonomi"], ["Kultur", "Kültür"], ["Interview", "Röportaj"], ["Moderator", "Sunucu"], ["Sendung", "Yayın"], ["Kanal", "Kanal"], ["Internetportal", "İnternet portalı"], ["veröffentlichen", "yayımlamak"]],
        sentences: ["Hast du die ___en gehört?", "Ich lese die ___.", "Schalte das ___ ein.", "Ein ___er ___.", "Vielen Dank für die ___.", "Was ist die ___ von heute?", "Der ___ ist live.", "Das ___ war sehr interessant.", "Haben Sie ___?", "Eine ___e ___."]
    },
    554: { 
        words: [["Kultur", "Kültür"], ["Tradition", "Gelenek"], ["Fest", "Bayram/Şenlik"], ["Brauch", "Adet"], ["Vorgeschichte", "Ön tarih"], ["Religion", "Din"], ["Kunst", "Sanat"], ["Geschichte", "Tarih"], ["Museum", "Müze"], ["Galerie", "Galeri"], ["Ausstellung", "Sergi"], ["Gemälde", "Tablo"], ["Bildhauer", "Heykeltıraş"], ["Oper", "Opera"], ["Theater", "Tiyatro"], ["Ballett", "Bale"], ["Literatur", "Edebiyat"], ["Gedicht", "Şiir"], ["Architektur", "Mimari"], ["denkmal", "anıt"]],
        sentences: ["Eine reiche ___.", "Das ist eine alte ___.", "Viel Spaß beim ___!", "Lerne die ___.", "Interessante ___.", "Besuchen wir das ___?", "Die ___ ist eine Kunst.", "Ein schönes ___.", "Haben Sie eine ___?", "Das ist ein ___."]
    },
    555: { 
        words: [["dem", "-e hali (eril/nötr)"], ["der", "-e hali (dişil)"], ["mir", "Bana"], ["dir", "Sana"], ["ihm", "Ona (eril/nötr)"], ["ihr", "Ona (dişil) / Size"], ["uns", "Bize"], ["euch", "Size"], ["ihnen", "Onlara"], ["Ihnen", "Size (nazik)"], ["gehören", "ait olmak"], ["helfen", "yardım etmek"], ["danken", "teşekkür etmek"], ["antworten", "cevap vermek"], ["vertrauen", "güvenmek"], ["gefallen", "hoşuna gitmek"], ["schmecken", "tadını beğenmek"], ["gratulieren", "tebrik etmek"], ["zugehören", "bir yere ait olmak"], ["vorbeikommen", "uğramak"]],
        sentences: ["Ich helfe ___ Mann.", "Gib ___ die Hand.", "Wie geht es ___?", "Er dankt ___.", "Das gehört ___.", "Komm bei ___ vorbei.", "Kannst du ___ antworten?", "Das ___ mir.", "O ___ mi?", "Herzlichen Glückwunsch ___."]
    },
    556: { 
        words: [["können", "Yapabilmek"], ["müssen", "Zorunda olmak"], ["dürfen", "İzinli olmak"], ["sollen", "Meli/Malı (tavsiye)"], ["wollen", "İstemek"], ["möchten", "İstemek (nazik)"], ["fähig", "Yetenekli"], ["erlaubnis", "İzin"], ["möglich", "mümkün"], ["unmöglich", "imkansız"], ["notwendig", "gerekli"], ["freiwillig", "gönüllü"], ["verpflichtet", "zorunlu"], ["verboten", "yasak"], ["erlaubt", "izinli"], ["Anweisung", "talimat"], ["Ratschlag", "tavsiye"], ["Wunsch", "istek"], ["Absicht", "niyet"], ["Plan", "plan"]],
        sentences: ["Ich ___ Deutsch sprechen.", "Du ___ lernen.", "Wir ___ hier parken.", "Was ___ ich tun?", "Er ___ nach Hause gehen.", "Das ist ___.", "Ist das ___?", "Rauchen ist ___.", "Ich habe die ___.", "Was ist dein ___?"]
    },
    557: { 
        words: [["weil", "çünkü/olduğu için"], ["dass", "ki (yandümle)"], ["wenn", "eğer/zaman"], ["ob", "olup olmadığını"], ["obwohl", "rağmen"], ["während", "sırasında"], ["bevor", "önce"], ["nachdem", "sonra"], ["dennoch", "yine de"], ["trotzdem", "rağmen/yine de"], ["deshalb", "bu yüzden"], ["darum", "bu sebeple"], ["da", "zira/çünkü"], ["seit", "-den beri"], ["bis", "-e kadar"], ["damit", "-sın diye"], ["um ... zu", "-mek için"], ["stattdessen", "bunun yerine"], ["entweder", "ya (da)"], ["oder", "veya"]],
        sentences: ["Ich lerne, ___ es wichtig ist.", "Ich weiß, ___ du kommst.", "___ es regnet, bleibe ich.", "Frag ihn, ___ er Zeit hat.", "___ du gehst, sag Bescheid.", "Ich bin müde, ___ lerne ich.", "___ ich esse, lese ich.", "Warte, ___ (ben gelene kadar).", "Er kommt, ___ zu helfen.", "Ich esse einen Apfel ___ eine Banane."]
    },
    558: { 
        words: [["schneller", "daha hızlı"], ["am schnellsten", "en hızlı"], ["größer", "daha büyük"], ["am größten", "en büyük"], ["besser", "daha iyi"], ["am besten", "en iyi"], ["öfter", "daha sık"], ["genauso", "aynen/kadar"], ["stärker", "daha güçlü"], ["am stärksten", "en güçlü"], ["kleiner", "daha küçük"], ["am kleinsten", "en küçük"], ["teurer", "daha pahalı"], ["am teuersten", "en pahalı"], ["billiger", "daha ucuz"], ["am billigsten", "en ucuz"], ["lieber", "daha ziyade (severek)"], ["am liebsten", "en çok (severek)"], ["Vorteil", "avantaj"], ["Nachteil", "dezavantaj"]],
        sentences: ["Mein Auto ist ___ als deins.", "Er rennt ___.", "Das Haus ist ___.", "Er ist ___ groß wie ich.", "Was ist ___?", "Dieses Buch ist ___.", "Das ist der größte ___.", "Ich trinke ___ Tee.", "Was machst du ___?", "Der Preis ist ___."]
    },
    559: { 
        words: [["sich waschen", "yıkanmak"], ["sich freuen", "sevinmek"], ["sich beeilen", "acele etmek"], ["sich kämmen", "taranmak"], ["sich setzen", "oturmak"], ["sich anziehen", "giyinmek"], ["sich ausruhen", "dinlenmek"], ["sich treffen", "buluşmak"], ["sich unterhalten", "sohbet etmek"], ["sich erinnern", "hatırlamak"], ["sich langweilen", "sıkılmak"], ["sich interessieren", "ilgilenmek"], ["sich ärgern", "kızmak"], ["sich bedanken", "teşekkür etmek"], ["sich fühlen", "hissetmek"], ["sich kämmen", "taranmak"], ["sich schminken", "makyaj yapmak"], ["sich rasieren", "tıraş olmak"], ["sich entspannen", "rahatlamak"], ["sich verlieben", "aşık olmak"]],
        sentences: ["Ich ___ mich.", "Hör auf, dich zu ___.", "Wir müssen uns ___.", "Bitte ___ Sie sich.", "Wann ___ wir uns?", "Ich ___ mich an dich.", "Fühlst du ___ gut?", "Ich ___ mich için Musik.", "Wir ___ uns über das Wetter.", "Rasiert er ___?"]
    },
    560: { 
        words: [["Abschluss", "Mezuniyet/Son"], ["Prüfung", "Sınav"], ["Erfolg", "Başarı"], ["Zertifikat", "Sertifika"], ["Niveau", "Seviye"], ["Wiederholung", "Tekrar"], ["Fortschritt", "İlerleme"], ["Gelerntes", "Öğrenilenler"], ["Ergebnis", "Sonuç"], ["Zukunft", "Gelecek"], ["Wissen", "Bilgi"], ["Fähigkeit", "Yetenek"], ["Ziel", "Hedef"], ["Motivation", "Motivasyon"], ["Anstrengung", "Çaba"], ["erreichen", "ulaşmak"], ["bestehen", "başarmak/geçmek"], ["vorbereiten", "hazırlanmak"], ["feiern", "kutlamak"], ["stolz", "gururlu"]],
        sentences: ["Viel ___ bei der ___!", "Hier ist dein ___.", "Ein großer ___.", "Machen wir eine ___.", "Überprüfe das ___.", "Hast du die Prüfung ___?", "Ich ___ mich vor.", "Ich bin ___ auf dich.", "Was ist dein ___?", "Viel ___ für die Zukunft!"]
    }
};

export function getGermanA2QuestionsForUnit(unitId: number, quizIndex: number = 1): Question[] {
    const data = topics[unitId] || topics[531];
    
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
