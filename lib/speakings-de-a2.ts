import { UnitSpeaking } from './speakings';

const speakings: { [key: number]: UnitSpeaking } = {
    531: {
        unitId: 531, title: "Geçmiş Zaman (Perfekt)", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe gestern meine Hausaufgaben gemacht.", translation: "Dün ödevlerimi yaptım." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sind am Wochenende nach Berlin gefahren.", translation: "Hafta sonu Berlin'e gittik." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hast du heute Morgen schon gefrühstückt?", translation: "Bu sabah kahvaltı yaptın mı?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er hat mich gestern Abend angerufen.", translation: "Dün akşam beni aradı." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe den ganzen Tag gearbeitet.", translation: "Bütün gün çalıştım." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sie sind spät nach Hause gekommen.", translation: "Eve geç geldiler." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir haben im Restaurant gegessen.", translation: "Restoranda yemek yedik." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was hast du gestern gemacht?", translation: "Dün ne yaptın?", expectedKeywords: ["habe", "gemacht", "gelernt", "gearbeitet"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Bist du schon mal in Deutschland gewesen?", translation: "Hiç Almanya'da bulundun mu?", expectedKeywords: ["ja", "nein", "bin", "gewesen"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du deine Freunde getroffen?", translation: "Arkadaşlarınla buluştun mu?", expectedKeywords: ["ja", "habe", "getroffen"] }
        ]
    },
    532: {
        unitId: 532, title: "Geçmiş Zaman 2 (Präteritum)", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich war gestern sehr müde.", translation: "Dün çok yorgundum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hattest du am Wochenende Zeit?", translation: "Hafta sonu vaktin var mıydı?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Film war wirklich spannend.", translation: "Film gerçekten heyecan vericiydi." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir hatten ein großes Haus.", translation: "Büyük bir evimiz vardı." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo warst du gestern Nachmittag?", translation: "Dün öğleden sonra neredeydin?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Früher hatte ich einen Hund.", translation: "Eskiden bir köpeğim vardı." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es war ein schöner Tag.", translation: "Güzel bir gündü." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie war dein Wochenende?", translation: "Hafta sonun nasıldı?", expectedKeywords: ["war", "gut", "schön", "langweilig"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo warst du im Urlaub?", translation: "Tatilde neredeydin?", expectedKeywords: ["war", "in", "türkei", "italien"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hattest du als Kind ein Hobby?", translation: "Çocukken bir hobin var mıydı?", expectedKeywords: ["hatte", "ja", "hobbys"] }
        ]
    },
    533: {
        unitId: 533, title: "Restoranda", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte einen Tisch für vier Personen reservieren.", translation: "Dört kişilik bir masa ayırtmak istiyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie auch vegetarische Gerichte?", translation: "Vejetaryen yemekleriniz de var mı?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Können wir bitte die Speisekarte haben?", translation: "Menüyü alabilir miyiz lütfen?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Was können Sie heute empfehlen?", translation: "Bugün ne tavsiye edebilirsiniz?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Als Vorspeise nehme ich eine Suppe.", translation: "Başlangıç olarak bir çorba alıyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Zahlen bitte, wir möchten getrennt bezahlen.", translation: "Hesap lütfen, ayrı ayrı ödemek istiyoruz." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Essen hat sehr gut geschmeckt.", translation: "Yemek çok lezzetliydi." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was möchten Sie trinken?", translation: "Ne içmek istersiniz?", expectedKeywords: ["trinken", "möchte", "wasser", "saft", "bier"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Möchten Sie eine Nachspeise?", translation: "Tatlı ister misiniz?", expectedKeywords: ["ja", "nein", "kuchen", "eis"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist dieser Platz noch frei?", translation: "Bu yer hala boş mu?", expectedKeywords: ["ja", "frei", "nein", "besetzt"] }
        ]
    },
    534: {
        unitId: 534, title: "Alışveriş", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich suche eine neue Jeans in Größe vierzig.", translation: "Kırk beden yeni bir kot pantolon arıyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Darf ich dieses Hemd mal anprobieren?", translation: "Bu gömleği deneyebilir miyim?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo sind die Umkleidekabinen?", translation: "Soyunma kabinleri nerede?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie das auch in einer anderen Farbe?", translation: "Bunun başka bir rengi var mı?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das ist mir leider zu teuer.", translation: "Maalesef bu benim için çok pahalı." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo kann ich bezahlen?", translation: "Nerede ödeme yapabilirim?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich nehme dieses Kleid, es passt perfekt.", translation: "Bu elbiseyi alıyorum, tam oldu." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Kann ich Ihnen helfen?", translation: "Size yardımcı olabilir miyim?", expectedKeywords: ["suche", "hilfe", "schuhe", "hose"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie finden Sie diese Jacke?", translation: "Bu ceketi nasıl buldunuz?", expectedKeywords: ["finde", "gut", "schön", "teuer"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Zahlen Sie bar oder mit Karte?", translation: "Nakit mi yoksa kartla mı ödersiniz?", expectedKeywords: ["bar", "karte", "zahle"] }
        ]
    },
    535: {
        unitId: 535, title: "Seyahat Planları", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Nächsten Sommer möchte ich nach Spanien reisen.", translation: "Gelecek yaz İspanya'ya seyahat etmek istiyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich muss noch meinen Koffer packen.", translation: "Hala valizimi hazırlamam gerekiyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wann fährt der nächste Zug nach München?", translation: "Münih'e bir sonraki tren ne zaman kalkıyor?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben wir alle Reiseunterlagen dabei?", translation: "Bütün seyahat belgelerimiz yanımızda mı?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich freue mich sehr auf den Urlaub.", translation: "Tatili dört gözle bekliyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir fliegen am Montag von Istanbul ab.", translation: "Pazartesi günü İstanbul'dan uçuyoruz." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wie lange fliegen wir bis Berlin?", translation: "Berlin'e uçuş ne kadar sürer?" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wohin möchtest du reisen?", translation: "Nereye seyahat etmek istersin?", expectedKeywords: ["nach", "deutschland", "italien", "reise"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was nimmst du in deinem Koffer mit?", translation: "Valizine ne alıyorsun?", expectedKeywords: ["kleidung", "schuhe", "kamera", "buch"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Reist du lieber mit dem Auto veya dem Zug?", translation: "Araba ile mi yoksa tren ile mi seyahat etmeyi tercih edersin?", expectedKeywords: ["lieber", "auto", "zug"] }
        ]
    },
    536: {
        unitId: 536, title: "Otel Rezervasyonu", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe ein Zimmer auf den Namen Müller reserviert.", translation: "Müller adına bir oda ayırttım." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ist das Frühstück im Preis inbegriffen?", translation: "Kahvaltı fiyata dahil mi?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ab wann kann ich einchecken?", translation: "Saat kaçtan itibaren giriş yapabilirim?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gibt es im Zimmer auch WLAN?", translation: "Odada Wi-Fi var mı?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Können Sie mich morgen um sieben Uhr wecken?", translation: "Yarın beni saat yedide uyandırabilir misiniz?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo wird das Frühstück serviert?", translation: "Kahvaltı nerede servis ediliyor?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte bitte auschecken.", translation: "Çıkış yapmak istiyorum lütfen." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was für ein Zimmer möchten Sie?", translation: "Nasıl bir oda istersiniz?", expectedKeywords: ["einzelzimmer", "doppelzimmer", "möchte"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie lange möchten Sie bleiben?", translation: "Ne kadar kalmak isterseniz?", expectedKeywords: ["tage", "woche", "bleiben"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hat es Ihnen bei uns gefallen?", translation: "Yanımızda kalmaktan memnun kaldınız mı?", expectedKeywords: ["ja", "sehr", "gut", "war"] }
        ]
    },
    537: {
        unitId: 537, title: "Havalimanında", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hier ist mein Reisepass und mein Ticket.", translation: "İşte pasaportum ve biletim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie auch Handgepäck dabei?", translation: "Yanınızda el bagajınız da var mı?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo ist der Check-in-Schalter für Lufthansa?", translation: "Lufthansa için check-in kontuarı nerede?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hat mein Flug Verspätung?", translation: "Uçuşumda rötar var mı?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Muss ich Flüssigkeiten aus der Tasche nehmen?", translation: "Sıvıları çantadan çıkarmam gerekiyor mu?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie einen Fensterplatz für mich?", translation: "Benim için bir cam kenarı koltuğunuz var mı?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo ist das Gate B-12?", translation: "B-12 kapısı nerede?" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Haben Sie Gepäck zum Aufgeben?", translation: "Teslim edilecek bagajınız var mı?", expectedKeywords: ["koffer", "tasche", "ja", "nein"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sind Sie geschäftlich veya privat hier?", translation: "İş için mi yoksa özel (turistik) mi buradasınız?", expectedKeywords: ["privat", "urlaub", "geschäftlich"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Darf ich Ihren Ausweis sehen?", translation: "Kimliğinizi görebilir miyim?", expectedKeywords: ["hier", "bitte", "pass", "ausweis"] }
        ]
    },
    538: {
        unitId: 538, title: "Doktorda", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich fühle mich seit zwei Tagen nicht gut.", translation: "İki gündür kendimi iyi hissetmiyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe starke Halsschmerzen und Fieber.", translation: "Şiddetli boğaz ağrım ve ateşim var." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie einen Termin bei Dr. Schneider?", translation: "Dr. Schneider'dan randevunuz var mı?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich muss Ihnen Blut abnehmen.", translation: "Sizden kan almam gerekiyor." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wie oft muss ich diese Tabletten nehmen?", translation: "Bu hapları ne sıklıkla almam gerekiyor?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sie sollten ein paar Tage im Bett bleiben.", translation: "Birkaç gün yatakta kalmalısınız." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Können Sie mir ein Rezept geben?", translation: "Bana bir reçete verebilir misiniz?" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was fehlt Ihnen denn?", translation: "Şikayetiniz nedir (neyiniz var)?", expectedKeywords: ["schmerzen", "husten", "fieber", "kopf"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Haben Sie Allergien?", translation: "Alerjiniz var mı?", expectedKeywords: ["nein", "ja", "gegen", "medikamente"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sind Sie versichert?", translation: "Sigortalı mısınız?", expectedKeywords: ["ja", "versicherung", "krankenkasse"] }
        ]
    },
    539: {
        unitId: 539, title: "Eczanede", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe ein Rezept vom Arzt.", translation: "Doktordan bir reçetem var." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie etwas gegen Kopfschmerzen?", translation: "Baş ağrısına karşı bir şeyiniz var mı?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Muss ich dieses Medikament vor dem Essen nehmen?", translation: "Bu ilacı yemekten önce mi almam gerekiyor?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gibt es Nebenwirkungen?", translation: "Yan etkileri var mı?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich brauche auch noch ein Pflaster.", translation: "Bir de yara bandına ihtiyacım var." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wie teuer ist dieses Nasenspray?", translation: "Bu burun spreyi ne kadar?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Können Sie mir das erklären?", translation: "Bunu bana açıklayabilir misiniz?" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Haben Sie ein Rezept?", translation: "Reçeteniz var mı?", expectedKeywords: ["hier", "bitte", "ja", "rezept"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Brauchen Sie noch etwas?", translation: "Başka bir şeye ihtiyacınız var mı?", expectedKeywords: ["nein", "danke", "nasenspray", "hustensaft"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist das für ein Kind oder einen Erwachsenen?", translation: "Bu bir çocuk için mi yoksa bir yetişkin için mi?", expectedKeywords: ["kind", "erwachsenen", "mich"] }
        ]
    },
    540: {
        unitId: 540, title: "Meslekler 2", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich arbeite als Krankenpfleger in einem Krankenhaus.", translation: "Bir hastanede hasta bakıcı olarak çalışıyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein Traumberuf ist Architekt.", translation: "Hayalimdeki meslek mimarlık." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "In diesem Job muss man sehr flexibel sein.", translation: "Bu işte çok esnek olmak gerekiyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich mache gerade ein Praktikum bei einer Bank.", translation: "Şu an bir bankada staj yapıyorum." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Welche Qualifikationen braucht man für diesen Beruf?", translation: "Bu meslek için hangi nitelikler gerekiyor?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte später als Journalist arbeiten.", translation: "İleride gazeteci olarak çalışmak istiyorum." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist schwierig, eine gute Stelle zu finden.", translation: "İyi bir iş bulmak zor." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was ist dein Traumberuf?", translation: "Hayalindeki meslek nedir?", expectedKeywords: ["möchte", "werden", "ist", "pilot", "arzt"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Arbeitest du lieber allein oder im Team?", translation: "Yalnız mı yoksa ekip içinde mi çalışmayı tercih edersin?", expectedKeywords: ["team", "allein", "lieber"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was machst du beruflich?", translation: "Mesleğin ne?", expectedKeywords: ["bin", "arbeite", "als", "verkäufer", "student"] }
        ]
    },
    541: {
        unitId: 541, title: "İş Görüşmesi", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Guten Tag, ich bin hier für das Vorstellungsgespräch.", translation: "İyi günler, iş görüşmesi için buradayım." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Können Sie mir etwas über Ihren Lebenslauf erzählen?", translation: "Bana özgeçmişiniz hakkında bir şeyler anlatabilir misiniz?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Warum möchten Sie bei uns arbeiten?", translation: "Neden bizimle çalışmak istiyorsunuz?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe viel Erfahrung im Bereich Marketing.", translation: "Pazarlama alanında çok tecrübem var." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Was sind Ihre Stärken und Schwächen?", translation: "Güçlü ve zayıf yönleriniz nelerdir?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich bin sehr teamfähig und zuverlässig.", translation: "Takım çalışmasına yatkın ve güvenilir biriyim." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wann können Sie anfangen?", translation: "Ne zaman başlayabilirsiniz?" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was sind Ihre Hobbys?", translation: "Hobileriniz nelerdir?", expectedKeywords: ["hobbys", "sind", "lese", "sport", "musik"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sprechen Sie noch andere Sprachen?", translation: "Başka diller konuşuyor musunuz?", expectedKeywords: ["ja", "englisch", "türkisch", "deutsch", "spreche"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Haben Sie noch Fragen an uns?", translation: "Bize başka sorunuz var mı?", expectedKeywords: ["nein", "danke", "frage", "gehalt", "urlaub"] }
        ]
    },
    542: {
        unitId: 542, title: "Telefonda", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hier spricht Max Müller, guten Tag.", translation: "Ben Max Müller, iyi günler." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Könnte ich bitte Herrn Schmidt sprechen?", translation: "Bay Schmidt ile görüşebilir miyim lütfen?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Einen Moment bitte, ich verbinde Sie.", translation: "Bir saniye lütfen, bağlıyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er ist zurzeit leider nicht an seinem Platz.", translation: "Şu anda maalesef yerinde değil." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Möchten Sie eine Nachricht hinterlassen?", translation: "Bir mesaj bırakmak ister misiniz?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Könnten Sie das bitte buchstabieren?", translation: "Bunu heceleyebilir misiniz lütfen?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich rufe später noch einmal an.", translation: "Daha sonra tekrar arayacağım." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Mit wem möchte ich sprechen?", translation: "Kiminle görüşmek istiyorum?", expectedKeywords: ["möchte", "sprechen", "mit", "direktor", "sekretärin"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie ist Ihre Telefonnummer?", translation: "Telefon numaranız nedir?", expectedKeywords: ["nummer", "ist", "null", "eins"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Können Sie mich morgen zurückrufen?", translation: "Beni yarın geri arayabilir misiniz?", expectedKeywords: ["ja", "gerne", "morgen", "rufe", "an"] }
        ]
    },
    543: {
        unitId: 543, title: "E-posta Yazma", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sehr geehrte Damen und Herren.", translation: "Sayın Baylar ve Bayanlar." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Vielen Dank für Ihre schnelle Antwort.", translation: "Hızlı cevabınız için çok teşekkürler." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich schreibe Ihnen, weil ich eine Frage habe.", translation: "Size yazıyorum çünkü bir sorum var." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Im Anhang finden Sie meinen Lebenslauf.", translation: "Ek güçte özgeçmişimi bulabilirsiniz." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich bitte um eine Bestätigung der Reservierung.", translation: "Rezervasyonun onaylanmasını rica ediyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Für weitere Fragen stehe ich Ihnen gerne zur Verfügung.", translation: "Daha fazla soru için hazırım (emrinizdeyim)." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mit freundlichen Grüßen.", translation: "Saygılarımla." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Haben Sie die E-Mail erhalten?", translation: "E-postayı aldınız mı?", expectedKeywords: ["ja", "habe", "erhalten", "gelesen"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "An wen schickst du die Nachricht?", translation: "Mesajı kime gönderiyorsun?", expectedKeywords: ["an", "chef", "freund", "kollegen"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wann antwortest du auf die Anfrage?", translation: "Talebe ne zaman cevap vereceksin?", expectedKeywords: ["heute", "morgen", "sofort", "antworte"] }
        ]
    },
    544: {
        unitId: 544, title: "Duygular", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich bin heute sehr glücklich.", translation: "Bugün çok mutluyum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Warum bist du so traurig?", translation: "Neden bu kadar üzgünsün?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe Angst vor großen Hunden.", translation: "Büyük köpeklerden korkuyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sind von der Nachricht überrascht.", translation: "Haber karşısında şaşırdık." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er ist wütend auf seinen Bruder.", translation: "Erkek kardeşine kızgın." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich fühle mich heute ein bisschen einsam.", translation: "Bugün kendimi biraz yalnız hissediyorum." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es tut mir leid, dass ich zu spät bin.", translation: "Geç kaldığım için üzgünüm." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie fühlst du dich heute?", translation: "Bugün nasıl hissediyorsun?", expectedKeywords: ["fühle", "gut", "müde", "glücklich", "schlecht"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was macht dich froh?", translation: "Seni ne mutlu eder?", expectedKeywords: ["macht", "froh", "sonne", "musik", "essen"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Bist du nervös vor der Prüfung?", translation: "Sınavdan önce gergin misin?", expectedKeywords: ["ja", "nein", "bisschen", "nervös"] }
        ]
    },
    545: {
        unitId: 545, title: "Karakter Özellikleri", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein bester Freund ist sehr ehrlich.", translation: "En iyi arkadaşım çok dürüsttür." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sie ist eine sehr geduldige Lehrerin.", translation: "O çok sabırlı bir öğretmen." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er ist oft faul und möchte nichts machen.", translation: "O sık sık tembeldir ve hiçbir şey yapmak istemez." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir brauchen einen mutigen Anführer.", translation: "Cesur bir lidere ihtiyacımız var." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Bist du ein ordentlicher Mensch?", translation: "Düzenli bir insan mısın?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er ist klug, aber manchmal etwas arrogant.", translation: "Zeki ama bazen biraz kibirli." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich finde Hilfsbereitschaft sehr wichtig.", translation: "Yardımseverliği çok önemli buluyorum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie beschreibst du dich selbst?", translation: "Kendini nasıl tanımlarsın?", expectedKeywords: ["bin", "ehrlich", "fleißig", "lustig"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was ist deine beste Eigenschaft?", translation: "En iyi özelliğin nedir?", expectedKeywords: ["ist", "geduld", "humor", "treue"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Magst du schüchterne Leute?", translation: "Utangaç insanları sever misin?", expectedKeywords: ["ja", "nein", "schüchtern"] }
        ]
    },
    546: {
        unitId: 546, title: "Spor ve Fitness", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich gehe dreimal pro Woche ins Fitnessstudio.", translation: "Haftada üç kez spor salonuna gidiyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Spielst du lieber Fußball oder Tennis?", translation: "Futbol mu yoksa tenis mi oynamayı tercih edersin?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Schwimmen ist sehr gut für den Rücken.", translation: "Yüzmek sırt için çok iyidir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir haben das Spiel am Sonntag gewonnen.", translation: "Pazar günkü maçı kazandık." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte mehr Sport treiben.", translation: "Daha fazla spor yapmak istiyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hast du heute schon trainiert?", translation: "Bugün antrenman yaptın mı?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Marathon war sehr anstrengend.", translation: "Maraton çok yorucuydu." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was ist deine Lieblingssportart?", translation: "En sevdiğin spor türü nedir?", expectedKeywords: ["ist", "fußball", "basketball", "yoga"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Bist du Mitglied in einem Sportverein?", translation: "Bir spor kulübüne üye misin?", expectedKeywords: ["ja", "nein", "mitglied", "verein"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie hältst du dich fit?", translation: "Kendini nasıl formda tutuyorsun?", expectedKeywords: ["jogge", "esse", "gesund", "sport"] }
        ]
    },
    547: {
        unitId: 547, title: "Müzik ve Sanat", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich höre am liebsten klassische Musik.", translation: "En çok klasik müzik dinlemeyi severim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Spielst du ein Instrument?", translation: "Bir enstrüman çalıyor musun?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir waren gestern in einer Kunstgalerie.", translation: "Dün bir sanat galerisindeydik." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Diesen Maler finde ich sehr interessant.", translation: "Bu ressamı çok ilginç buluyorum." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gehst du gern auf Konzerte?", translation: "Konserlere gitmeyi sever misin?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Lied hat eine schöne Melodie.", translation: "Şarkının güzel bir melodisi var." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich zeichne oft in meiner Freizeit.", translation: "Boş zamanlarımda sık sık resim çizerim." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wer ist dein Lieblingsmusiker?", translation: "En sevdiğin müzisyen kim?", expectedKeywords: ["ist", "mag", "band", "sänger"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welches Instrument möchtest du lernen?", translation: "Hangi enstrümanı öğrenmek istersin?", expectedKeywords: ["gitarre", "klavier", "geige", "lernen"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Gefällt dir moderne Kunst?", translation: "Modern sanatı beğeniyor musun?", expectedKeywords: ["ja", "nein", "gefällt", "interessant"] }
        ]
    },
    548: {
        unitId: 548, title: "Sinema ve Dizi", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich schaue mir gerne Serien auf Netflix an.", translation: "Netflix'te dizi izlemeyi severim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Welcher Film läuft heute im Kino?", translation: "Bugün sinemada hangi film var?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Schauspieler waren wirklich großartig.", translation: "Oyuncular gerçekten harikaydı." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Worum geht es in dieser Serie?", translation: "Bu dizi ne hakkında?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich finde Horrorfilme zu gruselig.", translation: "Korku filmlerini çok ürkütücü buluyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wann fängt die Vorstellung an?", translation: "Gösterim ne zaman başlıyor?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hast du den Trailer schon gesehen?", translation: "Fragmanı gördün mü?" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was ist dein Lieblingsfilm?", translation: "En sevdiğin film hangisi?", expectedKeywords: ["film", "ist", "heißt", "mag"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie oft gehst du ins Kino?", translation: "Ne kadar sıklıkla sinemaya gidersin?", expectedKeywords: ["monat", "woche", "selten", "oft"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Schaust du lieber Filme mit Untertiteln?", translation: "Altyazılı filmleri mi tercih edersin?", expectedKeywords: ["ja", "nein", "untertiteln", "lieber"] }
        ]
    },
    549: {
        unitId: 549, title: "Teknoloji", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich brauche ein neues Smartphone.", translation: "Yeni bir akıllı telefona ihtiyacım var." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein Laptop ist heute sehr langsam.", translation: "Dizüstü bilgisayarım bugün çok yavaş." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hast du die neue App schon heruntergeladen?", translation: "Yeni uygulamayı indirdin mi?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Künstliche Intelligenz wird immer wichtiger.", translation: "Yapay zeka giderek daha önemli hale geliyor." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kannst du mir zeigen, wie das funktioniert?", translation: "Bunun nasıl çalıştığını bana gösterebilir misin?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Passwort muss mindestens acht Zeichen haben.", translation: "Şifre en az sekiz karakterden oluşmalı." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich verbringe zu viel Zeit vor dem Computer.", translation: "Bilgisayar başında çok fazla vakit geçiriyorum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welches Gadget benutzt du am meisten?", translation: "En çok hangi cihazı kullanıyorsun?", expectedKeywords: ["handy", "laptop", "tablet", "benutze"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Glaubst du, Roboter sind nützlich?", translation: "Robotların faydalı olduğuna inanıyor musun?", expectedKeywords: ["ja", "glaube", "nützlich", "nein"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie oft kaufst du neue Technik?", translation: "Ne sıklıkla yeni teknoloji satın alırsın?", expectedKeywords: ["jahr", "monat", "selten", "kaufe"] }
        ]
    },
    550: {
        unitId: 550, title: "Sosyal Medya", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe ein neues Foto auf Instagram gepostet.", translation: "Instagram'da yeni bir fotoğraf paylaştım." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wie viele Follower hast du auf Twitter?", translation: "Twitter'da kaç takipçin var?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man sollte vorsichtig mit persönlichen Daten sein.", translation: "Kişisel veriler konusunda dikkatli olunmalı." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich verbringe jeden Tag zwei Stunden auf Facebook.", translation: "Her gün iki saatimi Facebook'ta geçiriyorum." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hast du meinen Kommentar gelesen?", translation: "Yorumumu okudun mu?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir chatten oft über WhatsApp.", translation: "Sık sık WhatsApp üzerinden sohbet ediyoruz." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Dieses Video ist viral gegangen.", translation: "Bu video viral oldu." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welche App magst du am liebsten?", translation: "En çok hangi uygulamayı seviyorsun?", expectedKeywords: ["mag", "instagram", "tiktok", "whatsapp"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Postest du viele Fotos von dir?", translation: "Kendi fotoğraflarını çok paylaşıyor musun?", expectedKeywords: ["ja", "nein", "oft", "poste"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist Social Media gut oder schlecht?", translation: "Sosyal medya iyi mi yoksa kötü mü?", expectedKeywords: ["gut", "schlecht", "vorteile", "nachteile"] }
        ]
    },
    551: {
        unitId: 551, title: "Çevre ve Doğa", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir müssen die Umwelt besser schützen.", translation: "Çevreyi daha iyi korumalıyız." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich trenne meinen Müll jeden Tag.", translation: "Çöpümü her gün ayırıyorum." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Plastik ist ein großes Problem für die Ozeane.", translation: "Plastik okyanuslar için büyük bir sorundur." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "In meiner Stadt gibt es viele Parks.", translation: "Şehrimde çok sayıda park var." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich fahre oft mit dem Fahrrad, um CO2 zu sparen.", translation: "CO2 tasarrufu yapmak için sık sık bisiklet sürüyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Luft in den Bergen ist sehr frisch.", translation: "Dağlardaki hava çok taze." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sollten weniger Wasser verschwenden.", translation: "Daha az su israf etmeliyiz." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was tust du für die Umwelt?", translation: "Çevre için ne yapıyorsun?", expectedKeywords: ["schütze", "müll", "fahrrad", "strom"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Gehst du gern im Wald spazieren?", translation: "Ormanda yürüyüş yapmayı sever misin?", expectedKeywords: ["ja", "nein", "wald", "spazieren"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Kaufst du Bio-Produkte?", translation: "Organik ürünler satın alıyor musun?", expectedKeywords: ["ja", "nein", "bio", "gemüse"] }
        ]
    },
    552: {
        unitId: 552, title: "İklim Değişikliği", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Klimawandel ist eine globale Herausforderung.", translation: "İklim değişikliği küresel bir zorluktur." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Temperaturen steigen jedes Jahr.", translation: "Sıcaklıklar her yıl yükseliyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir brauchen mehr erneuerbare Energien.", translation: "Daha fazla yenilenebilir enerjiye ihtiyacımız var." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Eis an den Polen schmilzt schnell.", translation: "Kutuplardaki buzlar hızla eriyor." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Extremwetter findet immer öfter statt.", translation: "Ekstrem hava koşulları giderek daha sık yaşanıyor." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Jeder kann einen kleinen Beitrag leisten.", translation: "Herkes küçük bir katkıda bulunabilir." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir müssen den Energieverbrauch reduzieren.", translation: "Enerji tüketimini azaltmalıyız." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du Angst vor dem Klimawandel?", translation: "İklim değişikliğinden korkuyor musun?", expectedKeywords: ["ja", "angst", "nein", "wichtig"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Benutzt du öffentliche Verkehrsmittel?", translation: "Toplu taşıma kullanıyor musun?", expectedKeywords: ["ja", "bus", "bahn", "auto", "nein"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was kann man gegen die Erderwärmung tun?", translation: "Küresel ısınmaya karşı ne yapılabilir?", expectedKeywords: ["sparen", "weniger", "pflanzen", "strom"] }
        ]
    },
    553: {
        unitId: 553, title: "Hayvanlar", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein Lieblingstier ist der Elefant.", translation: "En sevdiğim hayvan fildir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hunde sind sehr treue Begleiter.", translation: "Köpekler çok sadık dostlardır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe eine Katze namens Luna.", translation: "Luna adında bir kedim var." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Viele Tierarten sind vom Aussterben bedroht.", translation: "Birçok hayvan türü yok olma tehlikesiyle karşı karşıya." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Besuchst du gern den Zoo?", translation: "Hayvanat bahçesini ziyaret etmeyi sever misin?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Vögel singen morgens im Garten.", translation: "Kuşlar sabahları bahçede şarkı söyler." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte später einen Hund adoptieren.", translation: "İleride bir köpek sahiplenmek istiyorum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du ein Haustier?", translation: "Evcil hayvanın var mı?", expectedKeywords: ["ja", "nein", "hund", "katze", "fisch"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welches Tier findest du gefährlich?", translation: "Hangi hayvanı tehlikeli buluyorsun?", expectedKeywords: ["hai", "löwe", "schlange", "bär"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Magst du lieber Hunde oder Katzen?", translation: "Köpekleri mi yoksa kedileri mi daha çok seversin?", expectedKeywords: ["lieber", "hunde", "katzen"] }
        ]
    },
    554: {
        unitId: 554, title: "Bayramlar ve Kutlamalar", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir feiern Weihnachten mit der ganzen Familie.", translation: "Noel'i bütün aileyle kutluyoruz." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Herzlichen Glückwunsch zum Geburtstag!", translation: "Doğum günün kutlu olsun!" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "An Silvester gibt es ein großes Feuerwerk.", translation: "Yılbaşında büyük bir havai fişek gösterisi olur." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Was schenkst du deiner Mutter zum Muttertag?", translation: "Anneler Günü'nde annene ne hediye edeceksin?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ostern suchen die Kinder Schokoladeneier.", translation: "Paskalya'da çocuklar çikolata yumurtaları ararlar." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir haben eine große Party organisiert.", translation: "Büyük bir parti organize ettik." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich lade dich herzlich zu meiner Hochzeit ein.", translation: "Seni düğünüme içtenlikle davet ediyorum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was ist dein Lieblingsfeiertag?", translation: "En sevdiğin bayram hangisi?", expectedKeywords: ["ist", "weihnachten", "bayram", "zuckerfest"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie feierst du deinen Geburtstag?", translation: "Doğum gününü nasıl kutlarsın?", expectedKeywords: ["party", "freunden", "kuchen", "geschenke"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Isst du spezielle Gerichte an Feiertagen?", translation: "Bayramlarda özel yemekler yer misin?", expectedKeywords: ["ja", "fleisch", "süßigkeiten", "traditionell"] }
        ]
    },
    555: {
        unitId: 555, title: "Gelecek Planları", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Nächstes Jahr möchte ich fließend Deutsch sprechen.", translation: "Gelecek yıl akıcı Almanca konuşmak istiyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich werde bald eine neue Stelle suchen.", translation: "Yakında yeni bir iş arayacağım." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir planen eine Weltreise für das nächste Jahr.", translation: "Gelecek yıl için bir dünya turu planlıyoruz." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich hoffe, dass ich die Prüfung bestehe.", translation: "Umarım sınavı geçerim." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "In zehn Jahren möchte ich ein eigenes Haus haben.", translation: "On yıl sonra kendi evime sahip olmak istiyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Willst du später im Ausland leben?", translation: "İleride yurt dışında yaşamak ister misin?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich werde mehr Zeit für meine Hobbys haben.", translation: "Hobilerim için daha fazla vaktim olacak." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was sind deine Pläne für den nächsten Sommer?", translation: "Gelecek yaz için planların neler?", expectedKeywords: ["reise", "urlaub", "lernen", "arbeiten"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo siehst du dich in fünf Jahren?", translation: "Beş yıl sonra kendini nerede görüyorsun?", expectedKeywords: ["berlin", "job", "familie", "deutschland"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welche Sprache möchtest du als Nächstes lernen?", translation: "Bir sonraki dil olarak neyi öğrenmek istersin?", expectedKeywords: ["englisch", "französisch", "spanisch", "lernen"] }
        ]
    },
    556: {
        unitId: 556, title: "Alman Kültürü", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die deutsche Kultur hat viele interessante Traditionen.", translation: "Alman kültürünün birçok ilginç geleneği vardır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Pünktlichkeit ist in Deutschland sehr wichtig.", translation: "Almanya'da dakiklik çok önemlidir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Oktoberfest in München zieht Millionen von Touristen an.", translation: "Münih'teki Oktoberfest milyonlarca turist çeker." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wurst und Brot sind typisch für die deutsche Küche.", translation: "Sosis ve ekmek Alman mutfağı için tipiktir." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es gibt in Deutschland über dreihundert verschiedene Brotsorten.", translation: "Almanya'da üç yüzden fazla farklı ekmek çeşidi vardır." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Viele Deutsche wandern gern in ihrer Freizeit.", translation: "Birçok Alman boş zamanlarında yürüyüş yapmayı sever." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Deutschland ist bekannt für seine vielen Schlösser.", translation: "Almanya birçok şatosuyla tanınır." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was weißt du über Deutschland?", translation: "Almanya hakkında ne biliyorsun?", expectedKeywords: ["berlin", "bier", "autos", "fußball", "kultur"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Warst du schon mal auf einem deutschen Volksfest?", translation: "Hiç bir Alman halk festivalinde bulundun mu?", expectedKeywords: ["ja", "nein", "oktoberfest", "jahrmarkt"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was findest du an der deutschen Kultur gut?", translation: "Alman kültüründe neyi iyi buluyorsun?", expectedKeywords: ["ordnung", "disziplin", "essen", "geschichte"] }
        ]
    },
    557: {
        unitId: 557, title: "Eğitim Sistemi", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "In Deutschland gehen Kinder mit sechs Jahren zur Schule.", translation: "Almanya'da çocuklar altı yaşında okula giderler." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Nach der Grundschule wählt man eine weiterführende Schule.", translation: "İlkokuldan sonra ileri düzey bir okul seçilir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das duale Ausbildungssystem ist in Deutschland sehr beliebt.", translation: "İkili eğitim sistemi Almanya'da çok popülerdir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte an einer Universität in Berlin studieren.", translation: "Berlin'de bir üniversitede okumak istiyorum." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man muss fleißig lernen, um gute Noten zu bekommen.", translation: "İyi notlar almak için çalışkan olmak gerekir." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hast du dein Abitur schon gemacht?", translation: "Lise bitirme sınavını (Abitur) yaptın mı?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein Studium in Deutschland ist oft kostenlos.", translation: "Almanya'da üniversite eğitimi genellikle ücretsizdir." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was hast du studiert?", translation: "Ne okudun?", expectedKeywords: ["habe", "studiert", "medizin", "jura", "informatik"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Möchtest du eine Ausbildung machen?", translation: "Mesleki eğitim yapmak ister misin?", expectedKeywords: ["ja", "nein", "beruf", "lernen"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie findest du das deutsche Schulsystem?", translation: "Alman okul sistemini nasıl buluyorsun?", expectedKeywords: ["gut", "schwierig", "interessant", "anders"] }
        ]
    },
    558: {
        unitId: 558, title: "Sağlıklı Yaşam", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich versuche, mich gesund zu ernähren.", translation: "Sağlıklı beslenmeye çalışıyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man sollte mindestens zwei Liter Wasser am Tag trinken.", translation: "Günde en az iki litre su içilmeli." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Genug Schlaf ist sehr wichtig für die Gesundheit.", translation: "Yeterli uyku sağlık için çok önemlidir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich mache Yoga, um mich zu entspannen.", translation: "Gevşemek için yoga yapıyorum." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Obst und Gemüse enthalten viele Vitamine.", translation: "Meyve ve sebzeler birçok vitamin içerir." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Rauchen schadet der Lunge.", translation: "Sigara içmek akciğerlere zarar verir." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich fühle mich viel fitter, wenn ich Sport mache.", translation: "Spor yaptığımda kendimi çok daha zinde hissediyorum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was isst du zum Frühstück?", translation: "Kahvaltıda ne yersin?", expectedKeywords: ["eier", "brot", "käse", "müsli", "obst"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Treibst du regelmäßig Sport?", translation: "Düzenli spor yapar mısın?", expectedKeywords: ["ja", "nein", "jogge", "studio", "schwimme"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie viele Stunden schläfst du normalerweise?", translation: "Normalde kaç saat uyursun?", expectedKeywords: ["stunden", "acht", "sieben", "schlafe"] }
        ]
    },
    559: {
        unitId: 559, title: "Hobiler ve Boş Zaman", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "In meiner Freizeit lese ich am liebsten Krimis.", translation: "Boş zamanlarımda en çok polisiye roman okumayı severim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Was sind deine Hobbys?", translation: "Hobilerin nelerdir?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich spiele leidenschaftlich gern Gitarre.", translation: "Tutkuyla gitar çalıyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Am Wochenende treffe ich mich oft mit meinen Freunden.", translation: "Hafta sonları sık sık arkadaşlarımla buluşurum." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir gehen gern im Park spazieren.", translation: "Parkta yürüyüş yapmayı severiz." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Reisen ist mein größtes Hobby.", translation: "Seyahat etmek benim en büyük hobim." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich koche gern für meine Familie.", translation: "Ailem için yemek yapmayı severim." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was machst du am liebsten am Wochenende?", translation: "Hafta sonu en çok ne yapmayı seversin?", expectedKeywords: ["schlafe", "fernsehen", "freunde", "sport"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sammelst du etwas?", translation: "Bir şey biriktiriyor (koleksiyon yapıyor) musun?", expectedKeywords: ["briefmarken", "nein", "münzen", "bücher"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Gehst du gern ins Museum?", translation: "Müzeye gitmeyi sever misin?", expectedKeywords: ["ja", "interessant", "historisch", "nein"] }
        ]
    },
    560: {
        unitId: 560, title: "Genel Tekrar (A2 Son)", language: "Almanca", level: "A2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Herzlichen Glückwunsch, du hast das A2-Level geschafft!", translation: "Tebrikler, A2 seviyesini başardın!" },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Lernen macht Spaß, wenn man Fortschritte sieht.", translation: "İlerleme gördükçe öğrenmek eğlencelidir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich bin bereit für die nächste Stufe.", translation: "Bir sonraki aşama için hazırım." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es war eine tolle Erfahrung, Deutsch zu lernen.", translation: "Almanca öğrenmek harika bir deneyimdi." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte meine Sprachkenntnisse weiter verbessern.", translation: "Dil becerilerimi daha da geliştirmek istiyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Danke für deine Hilfe beim Lernen.", translation: "Öğrenirken yardımların için teşekkürler." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Auf Wiedersehen und viel Erfolg weiterhin!", translation: "Görüşmek üzere ve başarılarının devamını dilerim!" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was war für dich am schwierigsten zu lernen?", translation: "Senin için öğrenmesi en zor şey neydi?", expectedKeywords: ["grammatik", "artikel", "perfekt", "aussprache"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Möchtest du mit B1 weitermachen?", translation: "B1 ile devam etmek ister misin?", expectedKeywords: ["ja", "unbedingt", "natürlich", "nächstes"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "An welches deutschsprachige Land denkst du zuerst?", translation: "İlk olarak hangi Almanca konuşulan ülkeyi düşünüyorsun?", expectedKeywords: ["deutschland", "österreich", "schweiz"] }
        ]
    }
};

export function getGermanA2SpeakingForUnit(unitId: number): UnitSpeaking {
    return speakings[unitId] || speakings[531];
}
