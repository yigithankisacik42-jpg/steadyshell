import { UnitReading } from './readings';

const readings: { [key: number]: UnitReading } = {
    531: {
        unitId: 531, title: "Berlin'de Bir Gün (Perfekt)", language: "Almanca", level: "A2",
        story: { 
            text: "Gestern habe ich viel in Berlin gemacht. Am Morgen bin ich früh aufgestanden ve habe gefrühstückt. Danach bin ich mit der U-Bahn zum Alexanderplatz gefahren. Dort habe ich den Fernsehturm gesehen. Er ist sehr hoch. Am Mittag habe ich in einem kleinen Restaurant eine Currywurst gegessen. Es hat gut geschmeckt. Am Nachmittag bin ich im Tiergarten spazieren gegangen ve habe Fotos gemacht. Am Abend bin ich müde nach Hause gekommen ve habe sofort geschlafen.", 
            translation: "Dün Berlin'de çok şey yaptım. Sabah erken kalktım ve kahvaltı yaptım. Sonra metroyla Alexanderplatz'a gittim. Orada televizyon kulesini gördüm. O çok yüksek. Öğlen küçük bir restoranda Körili sosis (Currywurst) yedim. Tadı çok iyiydi. Öğleden sonra Tiergarten'da yürüyüşe çıktım ve fotoğraflar çektim. Akşam yorgun bir şekilde eve geldim ve hemen uyudum." 
        },
        questions: [
            { id: 1, question: "Anlatıcı sabah ne yaptı?", options: ["Geç kalktı", "Erken kalkıp kahvaltı yaptı", "İşe gitti"], correctAnswer: "Erken kalkıp kahvaltı yaptı" },
            { id: 2, question: "Alexanderplatz'a ne ile gitti?", options: ["S-Bahn", "Otobüs", "U-Bahn (Metro)"], correctAnswer: "U-Bahn (Metro)" },
            { id: 3, question: "Televizyon kulesi (Fernsehturm) nasıldı?", options: ["Eski", "Çok yüksek", "Kapalı"], correctAnswer: "Çok yüksek" },
            { id: 4, question: "Öğle yemeğinde ne yedi?", options: ["Pizza", "Döner", "Currywurst"], correctAnswer: "Currywurst" },
            { id: 5, question: "Körili sosisin tadı nasıldı?", options: ["Kötü", "Çok baharatlı", "İyi (lezzetli)"], correctAnswer: "İyi (lezzetli)" },
            { id: 6, question: "Öğleden sonra nerede yürüdü?", options: ["Alexanderplatz'da", "Tiergarten'da", "Müze adasında"], correctAnswer: "Tiergarten'da" },
            { id: 7, question: "Yürüyüş yaparken ne yaptı?", options: ["Şarkı söyledi", "Fotoğraflar çekti", "Arkadaşıyla konuştu"], correctAnswer: "Fotoğraflar çekti" },
            { id: 8, question: "Eve ne zaman döndü?", options: ["Öğleden sonra", "Akşam", "Gece yarısı"], correctAnswer: "Akşam" },
            { id: 9, question: "Eve geldiğinde nasıl hissediyordu?", options: ["Enerjik", "Yorgun", "Huzursuz"], correctAnswer: "Yorgun" },
            { id: 10, question: "Eve gelince ne yaptı?", options: ["Yemek yedi", "Hemen uyudu", "Televizyon izledi"], correctAnswer: "Hemen uyudu" }
        ],
        vocabulary: [
            { word: "Aufgestanden", meaning: "Kalktı" },
            { word: "Gefahren", meaning: "Gitti (araçla)" },
            { word: "Gesehen", meaning: "Gördü" },
            { word: "Geschmeckt", meaning: "Tadı olmak" },
            { word: "Spazieren gegangen", meaning: "Yürüyüşe çıktı" }
        ]
    },
    532: {
        unitId: 532, title: "Eski Günler (Präteritum)", language: "Almanca", level: "A2",
        story: { 
            text: "Als ich ein Kind war, wohnte ich in einem kleinen Dorf. Meine Großeltern hatten einen Bauernhof. Es gab dort viele Tiere: Kühe, Schweine ve Hühner. Ich war oft bei ihnen. Das Wetter war im Sommer immer sonnig ve wir spielten den ganzen Tag draußen. Es war eine sehr schöne Zeit. Wir hatten keinen Computer ve kein Internet, ama wir waren trotzdem sehr glücklich. Abends saßen wir zusammen ve erzählten Geschichten.", 
            translation: "Çocukken küçük bir köyde yaşıyordum. Büyükanne ve büyükbabamın bir çiftliği vardı. Orada çok hayvan vardı: inekler, domuzlar ve tavuklar. Sık sık onlarla birlikteydim. Yazın hava her zaman güneşliydi ve bütün gün dışarıda oynardık. Çok güzel bir zamandı. Bilgisayarımız ve internetimiz yoktu ama buna rağmen çok mutluyduk. Akşamları birlikte oturur ve hikayeler anlatırdık." 
        },
        questions: [
            { id: 1, question: "Anlatıcı çocukken nerede yaşıyordu?", options: ["Büyük bir şehirde", "Küçük bir köyde", "Yurt altında"], correctAnswer: "Küçük bir köyde" },
            { id: 2, question: "Büyükanne ve büyükbabasının neyi vardı?", options: ["Bir restoranı", "Bir çiftliği", "Bir dükkanı"], correctAnswer: "Bir çiftliği" },
            { id: 3, question: "Çiftlikte hangi hayvanlar yoktu?", options: ["Aslanlar", "İnekler", "Tavuklar"], correctAnswer: "Aslanlar" },
            { id: 4, question: "Yazın hava nasıldı?", options: ["Yağmurlu", "Güneşli", "Karlı"], correctAnswer: "Güneşli" },
            { id: 5, question: "Çocuklar bütün gün ne yapardı?", options: ["Okula giderlerdi", "Dışarıda oynarlardı", "Çalışırlardı"], correctAnswer: "Dışarıda oynarlardı" },
            { id: 6, question: "O zamanlar ne yoktu?", options: ["Hayvanlar", "Bilgisayar ve internet", "Kitaplar"], correctAnswer: "Bilgisayar ve internet" },
            { id: 7, question: "İnternet olmamasına rağmen nasıllardı?", options: ["Üzgün", "Mutlu", "Sıkılmış"], correctAnswer: "Mutlu" },
            { id: 8, question: "Akşamları ne yaparlardı?", options: ["Erken uyurlardı", "Birlikte oturup hikayeler anlatırlardı", "Televizyon izlerlerdi"], correctAnswer: "Birlikte oturup hikayeler anlatırlardı" },
            { id: 9, question: "Büyükanne ve büyükbabasının evi nasıldı?", options: ["Sıkıcı", "Büyük bir çiftlik", "Modern"], correctAnswer: "Büyük bir çiftlik" },
            { id: 10, question: "Anlatıcı bu zamanlar hakkında ne düşünüyor?", options: ["Kötü bir zamandı", "Güzel bir zamandı", "Hatırlamıyor"], correctAnswer: "Güzel bir zamandı" }
        ],
        vocabulary: [
            { word: "Wohnte", meaning: "Yaşıyordu" },
            { word: "Bauernhof", meaning: "Çiftlik" },
            { word: "Draußen", meaning: "Dışarıda" },
            { word: "Trotzdem", meaning: "Buna rağmen" },
            { word: "Erzählen", meaning: "Anlatmak" }
        ]
    },
    533: {
        unitId: 533, title: "Güzel Bir Akşam Yemeği", language: "Almanca", level: "A2",
        story: { 
            text: "Guten Abend! Wir möchten einen Tisch für vier Personen reservieren. Haben Sie noch Platz? Ja, bitte kommen Sie hierher. Hier ist die Speisekarte. Als Vorspeise nehme ich eine Tomatensuppe ve mein Freund möchte einen kleinen Salat. Als Hauptgericht bestellen wir zweimal Schnitzel mit Pommes ve zweimal Fisch mit Reis. Zum Trinken möchten wir zwei Flaschen Wasser ve eine Flasche Apfelsaft. Hat es Ihnen geschmeckt? Ja, das Essen war exzellent! Wir möchten jetzt bezahlen. Getrennt veya zusammen? Zusammen, bitte.", 
            translation: "İyi akşamlar! Dört kişilik bir masa ayırtmak istiyoruz. Yeriniz var mı? Evet, lütfen buraya gelin. İşte menü. Başlangıç olarak ben bir domates çorbası alıyorum ve arkadaşım küçük bir salata istiyor. Ana yemek olarak iki porsiyon patates kızartmalı şnitzel ve iki porsiyon pilavlı balık sipariş ediyoruz. İçmek için iki şişe su ve bir şişe elma suyu istiyoruz. Tadı nasıldı? Evet, yemek mükemmeldi! Şimdi ödemek istiyoruz. Ayrı mı yoksa birlikte mi? Birlikte lütfen." 
        },
        questions: [
            { id: 1, question: "Kaç kişilik masa istiyorlar?", options: ["İki", "Üç", "Dört"], correctAnswer: "Dört" },
            { id: 2, question: "Başlangıç olarak ne sipariş ediyorlar?", options: ["Balık", "Domates çorbası ve salata", "Şnitzel"], correctAnswer: "Domates çorbası ve salata" },
            { id: 3, question: "Ana yemekte kaç kişi balık yiyor?", options: ["Bir", "İki", "Dört"], correctAnswer: "İki" },
            { id: 4, question: "Şnitzel ile ne servis ediliyor?", options: ["Pilav", "Salata", "Patates kızartması (Pommes)"], correctAnswer: "Patates kızartması (Pommes)" },
            { id: 5, question: "Kaç şişe su istiyorlar?", options: ["Bir", "İki", "Üç"], correctAnswer: "İki" },
            { id: 6, question: "Hangi meyve suyunu sipariş ettiler?", options: ["Portakal suyu", "Elma suyu", "Vişne suyu"], correctAnswer: "Elma suyu" },
            { id: 7, question: "Yemeklerin tadı nasıldı?", options: ["Tuzluydu", "Mükemmeldi", "Kötüydü"], correctAnswer: "Mükemmeldi" },
            { id: 8, question: "Ödemeyi nasıl yapmak istiyorlar?", options: ["Ayrı ayrı", "Birlikte", "Sonra"], correctAnswer: "Birlikte" },
            { id: 9, question: "Restoranda yer var mıydı?", options: ["Evet", "Hayır", "Rezervasyon gerekiyordu"], correctAnswer: "Evet" },
            { id: 10, question: "Arkadaşı başlangıç olarak ne yiyor?", options: ["Çorba", "Salata", "Meyve"], correctAnswer: "Salata" }
        ],
        vocabulary: [
            { word: "Reservieren", meaning: "Rezervasyon yapmak" },
            { word: "Speisekarte", meaning: "Menü" },
            { word: "Hauptgericht", meaning: "Ana yemek" },
            { word: "Bezahlen", meaning: "Ödemek" },
            { word: "Zusammen", meaning: "Birlikte" }
        ]
    },
    534: {
        unitId: 534, title: "Elmalı Strudel Tarifi", language: "Almanca", level: "A2",
        story: { 
            text: "Heute backen wir einen Apfelstrudel. Das ist ein typisches Dessert aus Österreich. Zuerst brauchen wir Äpfel, Zucker, Zimt ve ein bisschen Zitrone. Wir schälen die Äpfel ve schneiden sie in kleine Stücke. Dann mischen wir die Äpfel mit Zucker ve Zimt. Wir nehmen den Teig ve legen die Apfelmischung darauf. Danach rollen wir den Strudel vorsichtig ein. Wir legen ihn in den Ofen ve backen ihn für vierzig Minuten bei einhundertachtzig Grad. Servieren Sie den warmen Strudel mit Vanilleeis veya Sahne. Guten Appetit!", 
            translation: "Bugün elmalı bir strudel pişiriyoruz. Bu, Avusturya'ya özgü tipik bir tatlıdır. İlk önce elma, şeker, tarçın ve biraz limona ihtiyacımız var. Elmaları soyuyoruz ve küçük parçalara bölüyoruz. Sonra elmaları şeker ve tarçınla karıştırıyoruz. Hamuru alıyoruz ve elma karışımını üzerine koyuyoruz. Ondan sonra strudeli dikkatlice sarıyoruz. Fırına koyuyoruz ve 180 derecede kırk dakika pişiriyoruz. Sıcak strudeli vanilyalı dondurma veya krema ile servis edin. Afiyet olsun!" 
        },
        questions: [
            { id: 1, question: "Apfelstrudel hangi ülkenin tatlısıdır?", options: ["Almanya", "Avusturya", "İsviçre"], correctAnswer: "Avusturya" },
            { id: 2, question: "Tarifte hangi malzeme yok?", options: ["Çikolata", "Tarçın", "Şeker"], correctAnswer: "Çikolata" },
            { id: 3, question: "Elmaları hazırlarken ilk ne yapılır?", options: ["Yıkanır", "Soyulur (schälen)", "Rendelenir"], correctAnswer: "Soyulur (schälen)" },
            { id: 4, question: "Elmalar nasıl kesilir?", options: ["Büyük dilimler", "Küçük parçalar", "Kesilmez"], correctAnswer: "Küçük parçalar" },
            { id: 5, question: "Elmalar ne ile karıştırılır?", options: ["Su ve şeker", "Şeker ve tarçın", "Süt"], correctAnswer: "Şeker ve tarçın" },
            { id: 6, question: "Strudel nasıl sarılmalıdır?", options: ["Hızlıca", "Dikkatlice (vorsichtig)", "Sıkıca"], correctAnswer: "Dikkatlice (vorsichtig)" },
            { id: 7, question: "Kaç dakika pişirilir?", options: ["Yirmi", "Kırk", "Altmış"], correctAnswer: "Kırk" },
            { id: 8, question: "Fırın kaç derece olmalıdır?", options: ["150", "180", "220"], correctAnswer: "180" },
            { id: 9, question: "Yanında ne ile servis edilebilir?", options: ["Vanilyalı dondurma veya krema", "Meyve suyu", "Peynir"], correctAnswer: "Vanilyalı dondurma veya krema" },
            { id: 10, question: "Strudel nasıl servis edilmelidir?", options: ["Soğuk", "Sıcak (warm)", "Dondurulmuş"], correctAnswer: "Sıcak (warm)" }
        ],
        vocabulary: [
            { word: "Backen", meaning: "Fırında pişirmek" },
            { word: "Schälen", meaning: "Soymak" },
            { word: "Mischen", meaning: "Karıştırmak" },
            { word: "Teig", meaning: "Hamur" },
            { word: "Vorsichtig", meaning: "Dikkatli" }
        ]
    },
    535: {
        unitId: 535, title: "Süpermarkette Alışveriş", language: "Almanca", level: "A2",
        story: { 
            text: "Ich muss heute viele Lebensmittel einkaufen. Zuerst gehe ich zur Obstabteilung. Ich brauche Bananen, zwei Kilo Orangen ve eine Ananas. Dann suche ich Gemüse: Tomaten, Gurken ve Kartoffeln. In der Kühltheke finde ich Milch, Butter ve Joghurt. Ich brauche auch Fleisch, deshalb gehe ich zur Metzgerei. Ich kaufe ein halbes Kilo Rindfleisch. An der Kasse ist eine lange Schlange. Ich bezahle mit Karte. Das kostet insgesamt fünfzig Euro. Das ist teuer!", 
            translation: "Bugün çok gıda alışverişi yapmam gerekiyor. Önce meyve reyonuna gidiyorum. Muz, iki kilo portakal ve bir ananasa ihtiyacım var. Sonra sebze arıyorum: domates, salatalık ve patates. Soğutucuda süt, tereyağı ve yoğurt buluyorum. Et de lazım, bu yüzden kasaba gidiyorum. Yarım kilo sığır eti alıyorum. Kasada uzun bir kuyruk var. Kartla ödüyorum. Toplam elli euro tutuyor. Bu pahalı!" 
        },
        questions: [
            { id: 1, question: "Anlatıcı önce hangi reyona gidiyor?", options: ["Sebze", "Meyve (Obst)", "Et"], correctAnswer: "Meyve (Obst)" },
            { id: 2, question: "Kaç kilo portakal alıyor?", options: ["Bir", "İki", "Üç"], correctAnswer: "İki" },
            { id: 3, question: "Hangi sebzeyi almadı?", options: ["Patates", "Biber", "Salatalık"], correctAnswer: "Biber" },
            { id: 4, question: "Süt ve yoğurdu nerede buluyor?", options: ["Kasada", "Soğutucuda (Kühltheke)", "Reyonda değil"], correctAnswer: "Soğutucuda (Kühltheke)" },
            { id: 5, question: "Neden kasaba (Metzgerei) gidiyor?", options: ["Ekmek için", "Et (Fleisch) için", "Süt için"], correctAnswer: "Et (Fleisch) için" },
            { id: 6, question: "Ne kadar sığır eti alıyor?", options: ["Bir kilo", "Yarım kilo", "İki yüz gram"], correctAnswer: "Yarım kilo" },
            { id: 7, question: "Kasadaki durum nedir?", options: ["Kimse yok", "Uzun bir kuyruk var", "Kasa kapalı"], correctAnswer: "Uzun bir kuyruk var" },
            { id: 8, question: "Ödemeyi nasıl yapıyor?", options: ["Nakit", "Kartla", "Çekle"], correctAnswer: "Kartla" },
            { id: 9, question: "Alışveriş toplam kaç euro tuttu?", options: ["Yirmi", "Elli", "Yetmiş"], correctAnswer: "Elli" },
            { id: 10, question: "Anlatıcı fiyat hakkında ne düşünüyor?", options: ["Ucuz", "Uygun", "Pahalı"], correctAnswer: "Pahalı" }
        ],
        vocabulary: [
            { word: "Einkaufen", meaning: "Alışveriş yapmak" },
            { word: "Abteilung", meaning: "Reyon/Bölüm" },
            { word: "Fleisch", meaning: "Et" },
            { word: "Schlange", meaning: "Kuyruk/Sıra" },
            { word: "Teuer", meaning: "Pahalı" }
        ]
    },
    536: {
        unitId: 536, title: "İsviçre Tatil Planı", language: "Almanca", level: "A2",
        story: { 
            text: "Nächsten Monat haben wir Urlaub ve wir möchten in die Schweiz reisen. Wir planen eine Woche in den Bergen. Wir fahren mit dem Zug von München nach Zürich. In Zürich bleiben wir zwei Tage ve besuchen den See. Danach fahren wir in ein kleines Dorf in den Alpen. Dort möchten wir wandern ve die Natur genießen. Ich hoffe, das Wetter ist gut ve es regnet nicht. Wir haben schon ein Hotel gebucht. Es ist ein bisschen teuer, ama es hat eine tolle Aussicht.", 
            translation: "Gelecek ay tatilimiz var ve İsviçre'ye seyahat etmek istiyoruz. Dağlarda bir hafta planlıyoruz. Münih'ten Zürih'e trenle gidiyoruz. Zürih'te iki gün kalıyoruz ve gölü ziyaret ediyoruz. Ondan sonra Alpler'de küçük bir köye gidiyoruz. Orada doğa yürüyüşü yapmak ve doğanın tadını çıkarmak istiyoruz. Umarım hava iyidir ve yağmur yağmaz. Şimdiden bir otel ayırttık (rezerve ettik). Biraz pahalı ama harika bir manzarası var." 
        },
        questions: [
            { id: 1, question: "Seyahat ne zaman yapılacak?", options: ["Gelecek hafta", "Gelecek ay", "Yarın"], correctAnswer: "Gelecek ay" },
            { id: 2, question: "Nereye gidiyorlar?", options: ["Avusturya", "İspanya", "İsviçre"], correctAnswer: "İsviçre" },
            { id: 3, question: "Nerede bir hafta geçirmeyi planlıyorlar?", options: ["Şehirde", "Dağlarda", "Deniz kıyısında"], correctAnswer: "Dağlarda" },
            { id: 4, question: "Münih'ten Zürih'e neyle gidiyorlar?", options: ["Uçakla", "Arabayla", "Trenle"], correctAnswer: "Trenle" },
            { id: 5, question: "Zürih'te neyi ziyaret edecekler?", options: ["Bir müzeyi", "Gölü (See)", "Bir kaleyi"], correctAnswer: "Gölü (See)" },
            { id: 6, question: "Alpler'deki köyde ne yapmak istiyorlar?", options: ["Kayak yapmak", "Doğa yürüyüşü (wandern) yapmak", "Alışveriş yapmak"], correctAnswer: "Doğa yürüyüşü (wandern) yapmak" },
            { id: 7, question: "Anlatıcının hava konusundaki umudu nedir?", options: ["Kar yağması", "Yağmur yağmaması", "Çok sıcak olması"], correctAnswer: "Yağmur yağmaması" },
            { id: 8, question: "Oteli ne zaman ayarladılar?", options: ["Oraya gidince", "Şimdiden (schon)", "Gelecek hafta"], correctAnswer: "Şimdiden (schon)" },
            { id: 9, question: "Otel nasıldır?", options: ["Ucuz", "Biraz pahalı", "Eski"], correctAnswer: "Biraz pahalı" },
            { id: 10, question: "Otelin en iyi özelliği nedir?", options: ["Yemeği", "Manzarası (Aussicht)", "Konumu"], correctAnswer: "Manzarası (Aussicht)" }
        ],
        vocabulary: [
            { word: "Reisen", meaning: "Seyahat etmek" },
            { word: "Wandern", meaning: "Doğa yürüyüşü yapmak" },
            { word: "Genießen", meaning: "Tadını çıkarmak" },
            { word: "Gebucht", meaning: "Rezerve etti" },
            { word: "Aussicht", meaning: "Manzara" }
        ]
    },
    537: {
        unitId: 537, title: "Otel Rezervasyonu ve Sorunlar", language: "Almanca", level: "A2",
        story: { 
            text: "Guten Tag, ben ich habe ein Einzelzimmer für drei Nächte reserviert. Mein Name ist Müller. Moment bitte... Ah, Herr Müller, ich sehe Ihre Reservierung, ama es gibt ein Problem. Wir haben kein Einzelzimmer mehr frei. Ama keine Sorge, wir geben Ihnen ein Doppelzimmer zum gleichen Preis. Das Zimmer ist im dritten Stock mit Balkon. Hier ist Ihr Schlüssel. Das Frühstück ist von sieben bis zehn Uhr im Erdgeschoss. Gibt es im Hotel WLAN? Ja, das Passwort steht auf diesem Zettel. Vielen Dank!", 
            translation: "İyi günler, üç gece için tek kişilik bir oda ayırtmıştım. Adım Müller. Bir saniye lütfen... Ah, Bay Müller, rezervasyonunuzu görüyorum ama bir sorun var. Artık boş tek kişilik odamız yok. Ama merak etmeyin, size aynı fiyata çift kişilik bir oda veriyoruz. Oda üçüncü katta ve balkonlu. İşte anahtarınız. Kahvaltı yediden ona kadar zemin katta. Otelde kablosuz internet (WLAN) var mı? Evet, şifre bu kağıtta yazıyor. Teşekkürler!" 
        },
        questions: [
            { id: 1, question: "Bay Müller kaç gece kalacak?", options: ["İki", "Üç", "Beş"], correctAnswer: "Üç" },
            { id: 2, question: "Normalde hangi tipi oda ayırtmıştı?", options: ["Çift kişilik", "Tek kişilik (Einzelzimmer)", "Süit"], correctAnswer: "Tek kişilik (Einzelzimmer)" },
            { id: 3, question: "Oteldeki sorun nedir?", options: ["Oda hazır değil", "Boş tek kişilik oda kalmamış", "Fiyat değişmiş"], correctAnswer: "Boş tek kişilik oda kalmamış" },
            { id: 4, question: "Resepsiyon görevlisi çözüm olarak ne teklif ediyor?", options: ["Para iadesi", "Başka otel", "Aynı fiyata çift kişilik oda"], correctAnswer: "Aynı fiyata çift kişilik oda" },
            { id: 5, question: "Yeni oda kaçıncı kattadır?", options: ["Birinci", "İkinci", "Üçüncü"], correctAnswer: "Üçüncü" },
            { id: 6, question: "Odanın balkonu var mı?", options: ["Evet", "Hayır", "Belirtilmemiş"], correctAnswer: "Evet" },
            { id: 7, question: "Kahvaltı saatleri nedir?", options: ["08:00 - 11:00", "07:00 - 10:00", "06:00 - 09:00"], correctAnswer: "07:00 - 10:00" },
            { id: 8, question: "Kahvaltı salonu nerede?", options: ["Üçüncü katta", "Zemin katta (Erdgeschoss)", "Bahçede"], correctAnswer: "Zemin katta (Erdgeschoss)" },
            { id: 9, question: "İnternet şifresi nerede yazıyor?", options: ["Televizyonda", "Kapıda", "Kağıtta (Zettel)"], correctAnswer: "Kağıtta (Zettel)" },
            { id: 10, question: "Görevli Bay Müller'e ne veriyor?", options: ["Para", "Harita", "Anahtar (Schlüssel)"], correctAnswer: "Anahtar (Schlüssel)" }
        ],
        vocabulary: [
            { word: "Einzelzimmer", meaning: "Tek kişilik oda" },
            { word: "Doppelzimmer", meaning: "Çift kişilik oda" },
            { word: "Stock", meaning: "Kat" },
            { word: "Erdgeschoss", meaning: "Zemin kat" },
            { word: "Schlüssel", meaning: "Anahtar" }
        ]
    },
    538: {
        unitId: 538, title: "Viyana'da Şehir Gezisi", language: "Almanca", level: "A2",
        story: { 
            text: "Wien ist eine wunderschöne Stadt mit viel Kultur. Wir machen heute eine Stadtrundfahrt. Zuerst besuchen wir den Stephansdom im Zentrum. Danach fahren wir zum Schloss Schönbrunn. Das Schloss ist riesig ve hat einen sehr großen Garten. Am Nachmittag gehen wir in ein Wiener Kaffeehaus ve essen eine Sachertorte. Die Torte ist weltberühmt. Später besuchen wir den Prater ve fahren mit dem Riesenrad. Von oben hat man einen tollen Blick über die ganze Stadt. Wien gefällt mir sehr gut!", 
            translation: "Viyana, çok kültürlü, harika bir şehirdir. Bugün bir şehir turu yapıyoruz. Önce merkezdeki Aziz Stefan Katedrali'ni (Stephansdom) ziyaret ediyoruz. Ondan sonra Schönbrunn Sarayı'na gidiyoruz. Saray devasa ve çok büyük bir bahçesi var. Öğleden sonra bir Viyana kahvehanesine gidiyoruz ve bir Sacher keki (Sachertorte) yiyoruz. Kek dünyaca ünlüdür. Daha sonra Prater'e gidiyoruz ve dönme dolaba (Riesenrad) biniyoruz. Yukarıdan tüm şehrin harika bir manzarası var. Viyana'yı çok sevdim!" 
        },
        questions: [
            { id: 1, question: "Viyana nasıl bir şehirdir?", options: ["Modern ve hızlı", "Harika ve kültürlü", "Küçük ve sakin"], correctAnswer: "Harika ve kültürlü" },
            { id: 2, question: "İlk durak neresidir?", options: ["Saray", "Katedral (Stephansdom)", "Kafe"], correctAnswer: "Katedral (Stephansdom)" },
            { id: 3, question: "Schönbrunn Sarayı nasıldır?", options: ["Küçük", "Devasa (riesig)", "Eski püskü"], correctAnswer: "Devasa (riesig)" },
            { id: 4, question: "Sarayın neyi büyüktür?", options: ["Mutfağı", "Bahçesi", "Kapısı"], correctAnswer: "Bahçesi" },
            { id: 5, question: "Öğleden sonra nereye gidiyorlar?", options: ["Müzeye", "Viyana kahvehanesine", "Havalimanına"], correctAnswer: "Viyana kahvehanesine" },
            { id: 6, question: "Denedikleri ünlü tatlı nedir?", options: ["Baklava", "Sachertorte", "Dondurma"], correctAnswer: "Sachertorte" },
            { id: 7, question: "Prater'de neye biniyorlar?", options: ["Arabaya", "Dönme dolaba (Riesenrad)", "Trene"], correctAnswer: "Dönme dolaba (Riesenrad)" },
            { id: 8, question: "Dönme dolabın tepesinden ne görülüyor?", options: ["Sadece nehir", "Tüm şehrin manzarası", "Başka bir şehir"], correctAnswer: "Tüm şehrin manzarası" },
            { id: 9, question: "Sachertorte'nin ünü nedir?", options: ["Sadece Viyana'da bilinir", "Dünyaca ünlüdür (weltberühmt)", "Yeni bir tariftir"], correctAnswer: "Dünyaca ünlüdür (weltberühmt)" },
            { id: 10, question: "Anlatıcı şehri beğendi mi?", options: ["Hayır", "Evet, çok sevdi", "Sıkıldı"], correctAnswer: "Evet, çok sevdi" }
        ],
        vocabulary: [
            { word: "Stadtrundfahrt", meaning: "Şehir turu" },
            { word: "Riesig", meaning: "Devasa" },
            { word: "Weltberühmt", meaning: "Dünyaca ünlü" },
            { word: "Riesenrad", meaning: "Dönme dolap" },
            { word: "Blick", meaning: "Baskış/Manzara" }
        ]
    },
    539: {
        unitId: 539, title: "Eczanede: Sağlık Sorunları", language: "Almanca", level: "A2",
        story: { 
            text: "Guten Tag, ben ich brauche etwas gegen Halsschmerzen ve Husten. Haben Sie ein Rezept vom Arzt? Nein, ich war noch nicht beim Arzt. Dann empfehle ich Ihnen diesen Hustensaft ve diese Halstabletten. Wie oft muss ich die Tabletten nehmen? Dreimal am Tag nach dem Essen. Achten Sie darauf, viel Tee zu trinken ve sich auszuruhen. Wenn es in zwei Tagen nicht besser ist, müssen Sie zum Arzt gehen. Haben Sie auch Pflaster? Ja, hier bitte. Das macht zusammen achtzehn Euro. Gute Besserung!", 
            translation: "İyi günler, boğaz ağrısı ve öksürüğe karşı bir şeye ihtiyacım var. Doktordan reçeteniz var mı? Hayır, henüz doktora gitmedim. O zaman size bu öksürük şurubunu ve bu boğaz tabletlerini tavsiye ederim. Tabletleri ne sıklıkla almalıyım? Yemekten sonra günde üç kez. Bol çay içmeye ve dinlenmeye dikkat edin. İki gün içinde düzelmezse doktora gitmelisiniz. Yarabandı da var mı? Evet, buyurun. Toplam on sekiz euro tutuyor. Geçmiş olsun!" 
        },
        questions: [
            { id: 1, question: "Anlatıcının hangi şikayetleri var?", options: ["Baş ağrısı", "Boğaz ağrısı ve öksürük", "Karın ağrısı"], correctAnswer: "Boğaz ağrısı ve öksürük" },
            { id: 2, question: "Anlatıcının reçetesi var mı?", options: ["Evet", "Hayır", "Unutmuş"], correctAnswer: "Hayır" },
            { id: 3, question: "Eczacı hangi ilaçları tavsiye ediyor?", options: ["Ağrı kesici", "Öksürük şurubu ve boğaz tableti", "Vitamin"], correctAnswer: "Öksürük şurubu ve boğaz tableti" },
            { id: 4, question: "Tabletler ne zaman alınmalı?", options: ["Sabah aç karına", "Yemekten sonra", "Gece yatmadan"], correctAnswer: "Yemekten sonra" },
            { id: 5, question: "Günde kaç tablet alınmalı?", options: ["Bir", "İki", "Üç"], correctAnswer: "Üç" },
            { id: 6, question: "Eczacı başka ne tavsiye ediyor?", options: ["Spor yapmasını", "Bol çay içip dinlenmesini", "Daha çok çalışmasını"], correctAnswer: "Bol çay içip dinlenmesini" },
            { id: 7, question: "Ne zaman doktora gidilmeli?", options: ["Hemen", "İki gün içinde iyileşmezse", "Gereksiz"], correctAnswer: "İki gün içinde iyileşmezse" },
            { id: 8, question: "Ek olarak ne satın aldı?", options: ["Aspirin", "Yarabandı (Pflaster)", "Gözlük"], correctAnswer: "Yarabandı (Pflaster)" },
            { id: 9, question: "Toplam kaç euro ödedi?", options: ["Sekiz", "On sekiz", "Yirmi sekiz"], correctAnswer: "On sekiz" },
            { id: 10, question: "Eczacı görüşmeyi nasıl bitiriyor?", options: ["Teşekkür ederek", "Geçmiş olsun (Gute Besserung) diyerek", "Hoşça kal diyerek"], correctAnswer: "Geçmiş olsun (Gute Besserung) diyerek" }
        ],
        vocabulary: [
            { word: "Halsschmerzen", meaning: "Boğaz ağrısı" },
            { word: "Husten", meaning: "Öksürük" },
            { word: "Rezept", meaning: "Reçete" },
            { word: "Empfehlen", meaning: "Tavsiye etmek" },
            { word: "Pflaster", meaning: "Yarabandı" }
        ]
    },
    540: {
        unitId: 540, title: "Meslekler ve Kariyer", language: "Almanca", level: "A2",
        story: { 
            text: "Was möchtest du später werden? Ich möchte als Journalist arbeiten, weil ich gern schreibe ve Menschen interviewe. Mein Bruder ist Ingenieur ve arbeitet bei einer großen Autofirma. Er findet seinen Job sehr interessant, ama er muss oft Überstunden machen. Meine Schwester ist Verkäuferin in einer Boutique. Sie hat viel Kontakt mit Kunden. In der Zukunft werden viele Berufe digital. Ich glaube, man muss flexibel sein ve immer weiter lernen. Was ist dein Traumberuf?", 
            translation: "İleride ne olmak istersin? Gazeteci olarak çalışmak istiyorum çünkü yazmayı ve insanlarla röportaj yapmayı seviyorum. Erkek kardeşim mühendis ve büyük bir otomobil firmasında çalışıyor. İşini çok ilginç buluyor ama sık sık fazla mesai (Überstunden) yapmak zorunda. Kız kardeşim bir butikte satış elemanı. Müşterilerle çok teması var. Gelecekte birçok meslek dijitalleşecek. Bence esnek olmalı ve her zaman öğrenmeye devam etmeliyiz. Senin hayalindeki meslek nedir?" 
        },
        questions: [
            { id: 1, question: "Anlatıcı neden gazeteci olmak istiyor?", options: ["Para için", "Yazmayı ve röportaj yapmayı sevdiği için", "Ünlü olmak için"], correctAnswer: "Yazmayı ve röportaj yapmayı sevdiği için" },
            { id: 2, question: "Erkek kardeş nerede çalışıyor?", options: ["Gazetede", "Otomobil firmasında", "Hastanede"], correctAnswer: "Otomobil firmasında" },
            { id: 3, question: "Erkek kardeşin işiyle ilgili şikayeti nedir?", options: ["Sıkıcı olması", "Fazla mesai yapması", "Maaşın az olması"], correctAnswer: "Fazla mesai yapması" },
            { id: 4, question: "Kız kardeş ne iş yapıyor?", options: ["Mühendis", "Güvenlik", "Satış elemanı (Verkäuferin)"], correctAnswer: "Satış elemanı (Verkäuferin)" },
            { id: 5, question: "Kız kardeşin işinde ne çok var?", options: ["Kağıt işi", "Müşteri teması", "Seyahat"], correctAnswer: "Müşteri teması" },
            { id: 6, question: "Gelecekte meslekler nasıl olacak?", options: ["Aynı kalacak", "Dijitalleşecek", "Daha kolay olacak"], correctAnswer: "Dijitalleşecek" },
            { id: 7, question: "Anlatıcıya göre iş hayatında nasıl olunmalı?", options: ["Sert", "Esnek (flexibel)", "Yavaş"], correctAnswer: "Esnek (flexibel)" },
            { id: 8, question: "Anlatıcı sürekli ne yapılması gerektiğini düşünüyor?", options: ["Dinlenmek", "Öğrenmeye devam etmek", "Para biriktirmek"], correctAnswer: "Öğrenmeye devam etmek" },
            { id: 9, question: "Erkek kardeş işini nasıl buluyor?", options: ["Zor", "İlginç", "Kötü"], correctAnswer: "İlginç" },
            { id: 10, question: "Anlatıcının hayalindeki meslek nedir?", options: ["Mühendis", "Gazeteci", "Satıcı"], correctAnswer: "Gazeteci" }
        ],
        vocabulary: [
            { word: "Journalist", meaning: "Gazeteci" },
            { word: "Überstunden", meaning: "Fazla mesai" },
            { word: "Kunde", meaning: "Müşteri" },
            { word: "Digital", meaning: "Dijital" },
            { word: "Traumberuf", meaning: "Hayalindeki meslek" }
        ]
    },
    541: {
        unitId: 541, title: "Bir İş Görüşmesi", language: "Almanca", level: "A2",
        story: { 
            text: "Guten Tag, Frau Schmidt. Vielen Dank für die Einladung zum Vorstellungsgespräch. Erzählen Sie uns bitte etwas über sich. Ich habe Informatik studiert ve drei Jahre als Webentwicklerin gearbeitet. Warum möchten Sie bei uns arbeiten? Ihre Firma ist sehr innovativ ve ich möchte mich beruflich weiterentwickeln. Was sind Ihre Stärken? Ich bin teamfähig, zuverlässig ve lerne schnell. Wir bieten Ihnen ein gutes Gehalt ve flexible Arbeitszeiten. Haben Sie noch Fragen? Ja, wie sieht ein typischer Arbeitstag aus? Vielen Dank für das Gespräch, wir rufen Sie nächste Woche an.", 
            translation: "İyi günler, Bayan Schmidt. İş görüşmesine davetiniz için teşekkürler. Lütfen bize biraz kendinizden bahsedin. Bilişim okudum ve üç yıl web geliştiricisi olarak çalıştım. Neden bizimle çalışmak istiyorsunuz? Firmanız çok yenilikçi ve ben mesleki olarak kendimi geliştirmek istiyorum. Güçlü yanlarınız nelerdir? Ekip çalışmasına yatkınım, güvenilirim ve hızlı öğrenirim. Size iyi bir maaş ve esnek çalışma saatleri sunuyoruz. Başka sorunuz var mı? Evet, tipik bir iş günü nasıl görünüyor? Görüşme için teşekkürler, sizi haftaya arayacağız." 
        },
        questions: [
            { id: 1, question: "Bayan Schmidt ne için davet edildi?", options: ["Parti için", "İş görüşmesi için", "Toplantı için"], correctAnswer: "İş görüşmesi için" },
            { id: 2, question: "Bayan Schmidt ne okudu?", options: ["Tıp", "Hukuk", "Bilişim"], correctAnswer: "Bilişim" },
            { id: 3, question: "Hangi alanda üç yıl çalıştı?", options: ["Öğretmenlik", "Web geliştirici", "Satış"], correctAnswer: "Web geliştirici" },
            { id: 4, question: "Neden bu firmada çalışmak istiyor?", options: ["Evi yakın olduğu için", "Yenilikçi olduğu için", "Zorunlu olduğu için"], correctAnswer: "Yenilikçi olduğu için" },
            { id: 5, question: "Kendisinin güçlü yanı olarak neyi belirtmedi?", options: ["Ekip çalışması", "Güvenilir", "Yavaş"], correctAnswer: "Yavaş" },
            { id: 6, question: "Firma çalışanlara ne sunuyor?", options: ["Sadece yemek", "İyi bir maaş ve esnek saatler", "Tatil yardımı"], correctAnswer: "İyi bir maaş ve esnek saatler" },
            { id: 7, question: "Bayan Schmidt'in sorusu ne hakkındaydı?", options: ["Maaş", "Tatil günleri", "Tipik bir iş günü"], correctAnswer: "Tipik bir iş günü" },
            { id: 8, question: "Hangi departman için görüşüyor olabilir?", options: ["İK", "IT", "Pazarlama"], correctAnswer: "IT" },
            { id: 9, question: "Firma onu ne zaman arayacak?", options: ["Yarın", "Gelecek hafta", "Hiçbir zaman"], correctAnswer: "Gelecek hafta" },
            { id: 10, question: "Bayan Schmidt hızlı öğrendiğini söylüyor mu?", options: ["Evet", "Hayır", "Bilmiyorum"], correctAnswer: "Evet" }
        ],
        vocabulary: [
            { word: "Vorstellungsgespräch", meaning: "İş görüşmesi" },
            { word: "Informatik", meaning: "Bilişim" },
            { word: "Stärken", meaning: "Güçlü yanlar" },
            { word: "Gehalt", meaning: "Maaş" },
            { word: "Hızlı", meaning: "Schnell" }
        ]
    },
    542: {
        unitId: 542, title: "Telefonda: Randevu Alma", language: "Almanca", level: "A2",
        story: { 
            text: "Praxis Dr. Weber, guten Tag. Was kann ich für Sie tun? Hallo, mein Name ist Schneider. Ich möchte gern einen Termin vereinbaren. Geht es am Mittwoch um zehn Uhr? Einen Moment, ich schaue nach... Nein, am Mittwoch ist alles voll. Haben Sie am Donnerstag Zeit? Ja, Donnerstag passt mir gut. Um wie viel Uhr? Um fünfzehn Uhr dreißig. Gut, das passt. Können Sie mir bitte Ihre Telefonnummer geben? Meine Nummer ist 0152-3456789. Vielen Dank, Herr Schneider. Bis Donnerstag! Auf Wiederhören!", 
            translation: "Dr. Weber Muayenehanesi, iyi günler. Sizin için ne yapabilirim? Merhaba, adım Schneider. Randevu almak istiyorum. Çarşamba günü saat onda uygun mu? Bir saniye, bakıyorum... Hayır, çarşamba günü her yer dolu. Perşembe günü vaktiniz var mı? Evet, perşembe bana uyar. Saat kaçta? Saat 15:30'da. Güzel, bu uyuyor. Bana telefon numaranızı verebilir miyiz? Numaram 0152-3456789. Teşekkürler Bay Schneider. Perşembeye kadar! (Telefonda) Görüşürüz!" 
        },
        questions: [
            { id: 1, question: "Bay Schneider nereyi arıyor?", options: ["Bir bankayı", "Muayenehaneyi", "Restoranı"], correctAnswer: "Muayenehaneyi" },
            { id: 2, question: "Amacı nedir?", options: ["Şikayet", "Randevu almak", "İş başvurusu"], correctAnswer: "Randevu almak" },
            { id: 3, question: "İlk istediği gün hangisiydi?", options: ["Pazartesi", "Çarşamba", "Perşembe"], correctAnswer: "Çarşamba" },
            { id: 4, question: "Çarşamba günü müsait mi?", options: ["Dolu", "Boş", "Doktor yok"], correctAnswer: "Dolu" },
            { id: 5, question: "Randevu ne zaman?", options: ["Salı", "Çarşamba", "Perşembe"], correctAnswer: "Perşembe" },
            { id: 6, question: "Randevu saati?", options: ["10:00", "15:30", "16:00"], correctAnswer: "15:30" },
            { id: 7, question: "Sekreter ne istedi?", options: ["Adres", "Telefon", "E-posta"], correctAnswer: "Telefon" },
            { id: 8, question: "Numarasının sonu nedir?", options: ["789", "123", "456"], correctAnswer: "789" },
            { id: 9, question: "Vedalaşma nasıldır?", options: ["Auf Wiedersehen", "Auf Wiederhören", "Tschüss"], correctAnswer: "Auf Wiederhören" },
            { id: 10, question: "Dr. Weber ne olabilir?", options: ["Mühendis", "Doktor", "Eğitmen"], correctAnswer: "Doktor" }
        ],
        vocabulary: [
            { word: "Termin", meaning: "Randevu" },
            { word: "Vereinbaren", meaning: "Anlaşmak" },
            { word: "Dolu", meaning: "Voll" },
            { word: "Nachschauen", meaning: "Bakmak/Kontrol etmek" },
            { word: "Auf Wiederhören", meaning: "Telefonda vedalaşma" }
        ]
    },
    543: {
        unitId: 543, title: "Bir E-posta Yazma", language: "Almanca", level: "A2",
        story: { 
            text: "Sehr geehrte Damen ve Herren, mein Name ist Lukas Berg ve ich schreibe Ihnen, weil ich mich für die Stelle als Marketing-Assistent interessiere. In der Anlage finden Sie meinen Lebenslauf ve meine Zeugnisse. Ich habe viel Erfahrung im Bereich Social Media ve online Marketing. Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen. Für weitere Fragen stehe ich Ihnen gern zur Verfügung. Mit freundlichen Grüßen, Lukas Berg.", 
            translation: "Sayın Baylar ve Bayanlar, adım Lukas Berg ve size pazarlama asistanı pozisyonuna ilgi duyduğum için yazıyorum. Ekte özgeçmişimi ve sertifikalarımı bulabilirsiniz. Sosyal medya ve çevrimiçi pazarlama alanında çok deneyimim var. Kişisel bir görüşmeye davet edilmekten çok mutlu olurum. Daha fazla sorunuz için size yardımcı olmaya hazırım. Saygılarımla, Lukas Berg." 
        },
        questions: [
            { id: 1, question: "E-postanın amacı nedir?", options: ["Şikayet", "İş başvurusu", "Rezervasyon"], correctAnswer: "İş başvurusu" },
            { id: 2, question: "Lukas hangi pozisyonu istiyor?", options: ["Asistan", "Müdür", "Grafiker"], correctAnswer: "Asistan" },
            { id: 3, question: "Ekte ne var?", options: ["Fotoğraf", "Özgeçmiş/Sertifika", "Para"], correctAnswer: "Özgeçmiş/Sertifika" },
            { id: 4, question: "Lukas nerede deneyimli?", options: ["Pazarlama", "İnşaat", "Tıp"], correctAnswer: "Pazarlama" },
            { id: 5, question: "Ne bekliyor?", options: ["Para", "Görüşme daveti", "Mektup"], correctAnswer: "Görüşme daveti" },
            { id: 6, question: "E-posta başlığı nasıldır?", options: ["Hallo", "Sehr geehrte Damen und Herren", "Hi"], correctAnswer: "Sehr geehrte Damen und Herren" },
            { id: 7, question: "E-posta sonu nasıldır?", options: ["Tschüss", "Mit freundlichen Grüßen", "Dostça"], correctAnswer: "Mit freundlichen Grüßen" },
            { id: 8, question: "Deneyimli mi?", options: ["Evet", "Hayır", "Az"], correctAnswer: "Evet" },
            { id: 9, question: "Sorulara açık mı?", options: ["Evet", "Hayır", "Belki"], correctAnswer: "Evet" },
            { id: 10, question: "Lebenslauf ne demektir?", options: ["Ders", "Özgeçmiş", "Tatil"], correctAnswer: "Özgeçmiş" }
        ],
        vocabulary: [
            { word: "Stelle", meaning: "İş/Pozisyon" },
            { word: "Anlage", meaning: "Ek" },
            { word: "Lebenslauf", meaning: "Özgeçmiş" },
            { word: "Erfahrung", meaning: "Deneyim" },
            { word: "Grüße", meaning: "Selamlar" }
        ]
    },
    544: {
        unitId: 544, title: "Duygular ve Ruh Hali", language: "Almanca", level: "A2",
        story: { 
            text: "Wie fühlst du dich heute? Ich bin ein bisschen traurig, weil mein Hund krank ist. Gestern war ich dagegen sehr fröhlich, weil ich meine Prüfung bestanden habe. Manchmal bin ich auch gestresst, wenn ich viel Arbeit habe. Meine Freundin ist meistens optimistisch ve hat gute Laune. Wenn es regnet, fühle ich mich oft einsam. Aber wenn die Sonne scheint, bin ich voller Energie. Es ist wichtig, über Gefühle zu sprechen ve nicht alles allein zu behalten.", 
            translation: "Bugün nasıl hissediyorsun? Biraz üzgünüm çünkü köpeğim hasta. Dün ise aksine sınavımı geçtiğim için çok neşeliydim. Bazen işim çok olduğunda stresli de oluyorum. Kız arkadaşım çoğunlukla iyimserdir ve keyfi yerindedir. Yağmur yağdığında sık sık kendimi yalnız hissediyorum. Ama güneş açtığında enerji doluyum. Duygular hakkında konuşmak ve her şeyi tek başına tutmamak önemlidir." 
        },
        questions: [
            { id: 1, question: "Neden üzgün?", options: ["Ders", "Köpeği hasta", "Hava kötü"], correctAnswer: "Köpeği hasta" },
            { id: 2, question: "Dün neden mutluydu?", options: ["Sınavı geçti", "Hava iyiydi", "Yemek yedi"], correctAnswer: "Sınavı geçti" },
            { id: 3, question: "Sınavı ne yaptı?", options: ["Kaldı", "Geçti (bestanden)", "Girmedi"], correctAnswer: "Geçti (bestanden)" },
            { id: 4, question: "Ne zaman stresli?", options: ["Uykusuz", "Çok iş varken", "Yalnızken"], correctAnswer: "Çok iş varken" },
            { id: 5, question: "Kız arkadaşı nasıl?", options: ["Kötümser", "İyimser/Neşeli", "Sert"], correctAnswer: "İyimser/Neşeli" },
            { id: 6, question: "Yağmurda nasıl hisseder?", options: ["Yalnız", "Mutlu", "Öfkeli"], correctAnswer: "Yalnız" },
            { id: 7, question: "Güneşte ne dolu?", options: ["Su", "Enerji", "Hüzün"], correctAnswer: "Enerji" },
            { id: 8, question: "Ne önemlidir?", options: ["Konuşmak", "Sessizlik", "Para"], correctAnswer: "Konuşmak" },
            { id: 9, question: "Köpek nasıldır?", options: ["Gesund", "Krank", "Müde"], correctAnswer: "Krank" },
            { id: 10, question: "Gute Laune ne demek?", options: ["Kötü keyif", "İyi keyif", "Aç"], correctAnswer: "İyi keyif" }
        ],
        vocabulary: [
            { word: "Traurig", meaning: "Üzgün" },
            { word: "Bestanden", meaning: "Geçti" },
            { word: "Gestresst", meaning: "Stresli" },
            { word: "Optimistisch", meaning: "İyimser" },
            { word: "Einsam", meaning: "Yalnız" }
        ]
    },
    545: {
        unitId: 545, title: "Karakter Özellikleri", language: "Almanca", level: "A2",
        story: { 
            text: "Meine beste Freundin heißt Julia. Sie ist ein sehr herzlicher Mensch ve immer hilfsbereit. Julia ist auch sehr fleißig ve lernt jeden Tag für ihr Studium. Aber sie ist manchmal ein bisschen ungeduldig, wenn etwas nicht sofort funktioniert. Mein Bruder ist ganz anders. Er ist eher ruhig ve schüchtern. Er spricht nicht viel mit fremden Menschen. Dafür ist er sehr ehrlich ve man kann ihm immer vertrauen. Ich denke, jeder Mensch hat sowohl positive als auch negative Eigenschaften.", 
            translation: "En iyi arkadaşımın adı Julia. O çok içten bir insan ve her zaman yardımseverdir. Julia ayrıca çok çalışkandır ve eğitimi için her gün ders çalışır. Ama bir şey hemen olmadığında biraz sabırsız olabiliyor. Erkek kardeşim bambaşkadır. O daha çok sakin ve utangaçtır. Yabancı insanlarla çok konuşmaz. Buna karşın çok dürüsttür ve ona her zaman güvenebilirsiniz. Bence her insanın hem olumlu hem de olumsuz özellikleri vardır." 
        },
        questions: [
            { id: 1, question: "Julia nicedir?", options: ["Sakin", "İçten/Yardımsever", "Utangaç"], correctAnswer: "İçten/Yardımsever" },
            { id: 2, question: "Dersleri nasıl?", options: ["Tembel", "Çalışkan (fleißig)", "Girmez"], correctAnswer: "Çalışkan (fleißig)" },
            { id: 3, question: "Ne zaman sabırsız?", options: ["Gecikince", "İşlemeyince", "Açken"], correctAnswer: "İşlemeyince" },
            { id: 4, question: "Kardeşi nasıldır?", options: ["Benzer", "Farklı (anders)", "Aynı"], correctAnswer: "Farklı (anders)" },
            { id: 5, question: "Kardeşin sosyal durumu?", options: ["Konuşkan", "Utangaç (schüchtern)", "Kaba"], correctAnswer: "Utangaç (schüchtern)" },
            { id: 6, question: "Neden güvenilir?", options: ["Güçlü", "Dürüst (ehrlich)", "Zengin"], correctAnswer: "Dürüst (ehrlich)" },
            { id: 7, question: "İnsan özellikleri nasıldır?", options: ["Sadece iyi", "Hem iyi hem kötü", "Sadece kötü"], correctAnswer: "Hem iyi hem kötü" },
            { id: 8, question: "Julia neyi sever?", options: ["Uyumayı", "Yardım etmeyi", "Yalnızlığı"], correctAnswer: "Yardım etmeyi" },
            { id: 9, question: "Kardeşi yabancılarla nasıl?", options: ["Çok konuşur", "Çok konuşmaz", "Hiç konuşmaz"], correctAnswer: "Çok konuşmaz" },
            { id: 10, question: "Ehrlich ne demektir?", options: ["Yalancı", "Dürüst", "Yavaş"], correctAnswer: "Dürüst" }
        ],
        vocabulary: [
            { word: "Hilfsbereit", meaning: "Yardımsever" },
            { word: "Fleißig", meaning: "Çalışkan" },
            { word: "Ungeduldig", meaning: "Sabırsız" },
            { word: "Schüchtern", meaning: "Utangaç" },
            { word: "Ehrlich", meaning: "Dürüst" }
        ]
    },
    546: {
        unitId: 546, title: "Spor ve Fitness", language: "Almanca", level: "A2",
        story: { 
            text: "Sport ist sehr wichtig für die Gesundheit. Ich gehe dreimal pro Woche ins Fitnessstudio. Dort mache ich Krafttraining ve laufe auf dem Laufband. Mein Freund spielt lieber Fußball im Verein. Wir machen auch gern Radtouren in den Bergen. Das ist anstrengend, ama es macht viel Spaß. Wenn man regelmäßig Sport treibt, fühlt man sich fitter ve hat mehr Energie im Alltag. Man sollte auch auf eine gesunde Ernährung achten ve genug Wasser trinken. Welche Sportart magst du am liebsten?", 
            translation: "Spor sağlık için çok önemlidir. Haftada üç kez spor salonuna gidiyorum. Orada ağırlık antrenmanı yapıyorum ve koşu bandında koşuyorum. Arkadaşım bir kulüpte futbol oynamayı tercih ediyor. Dağlarda bisiklet turları yapmayı da seviyoruz. Bu yorucu ama çok eğlenceli. Düzenli spor yapıldığında insan kendini daha zinde hissediyor ve günlük hayatta daha fazla enerjisi oluyor. Sağlıklı beslenmeye de dikkat etmeli ve yeterince su içilmelidir. En çok hangi spor dalını seviyorsun?" 
        },
        questions: [
            { id: 1, question: "Spor ne içindir?", options: ["Eğlence", "Sağlık", "Para"], correctAnswer: "Sağlık" },
            { id: 2, question: "Kaç kez gidiyor?", options: ["Bir", "Üç", "Her gün"], correctAnswer: "Üç" },
            { id: 3, question: "Salonda ne yapıyor?", options: ["Yüzme", "Ağırlık/Koşu bandı", "Masaj"], correctAnswer: "Ağırlık/Koşu bandı" },
            { id: 4, question: "Arkadaşı?", options: ["Basketbol", "Futbol (Verein)", "Golf"], correctAnswer: "Futbol (Verein)" },
            { id: 5, question: "Dağlarda?", options: ["Tırmanış", "Bisiklet turu", "Kayak"], correctAnswer: "Bisiklet turu" },
            { id: 6, question: "Bisiklet turu?", options: ["Kolay", "Yorucu ama eğlenceli", "Sıkıcı"], correctAnswer: "Yorucu ama eğlenceli" },
            { id: 7, question: "Faydası?", options: ["Uyku", "Zindelik/Enerji", "Hiç"], correctAnswer: "Zindelik/Enerji" },
            { id: 8, question: "Ne yapılmalı?", options: ["Beslenmeye dikkat", "Çok yemek", "Hareketsizlik"], correctAnswer: "Beslenmeye dikkat" },
            { id: 9, question: "Sıvı?", options: ["Kola", "Su", "Süt"], correctAnswer: "Su" },
            { id: 10, question: "Laufband ne demek?", options: ["Ağırlık", "Koşu bandı", "Havuz"], correctAnswer: "Koşu bandı" }
        ],
        vocabulary: [
            { word: "Gesundheit", meaning: "Sağlık" },
            { word: "Laufband", meaning: "Koşu bandı" },
            { word: "Anstrengend", meaning: "Yorucu" },
            { word: "Regelmäßig", meaning: "Düzenli" },
            { word: "Ernährung", meaning: "Beslenme" }
        ]
    },
    547: {
        unitId: 547, title: "Bir Konser Günü", language: "Almanca", level: "A2",
        story: { 
            text: "Ich liebe Musik! Am Wochenende war ich mit meinen Freunden auf einem Open-Air-Konzert. Meine Lieblingsband hat gespielt. Die Stimmung war fantastisch ve wir haben den ganzen Abend getanzt ve gesungen. Die Musik war ein bisschen laut, ama das hat uns nicht gestört. Ich spiele selbst auch ein Instrument: die Gitarre. Ich übe jeden Tag eine Stunde. Ich gehe auch gern ins Museum, um klassische Gemälde zu sehen. Kunst ve Musik machen das Leben viel schöner ve interessanter.", 
            translation: "Müziği seviyorum! Hafta sonu arkadaşlarımla açık hava konserindeydim. En sevdiğim grup çaldı. Atmosfer harikaydı ve bütün akşam dans edip şarkı söyledik. Müzik biraz yüksekti ama bu bizi rahatsız etmedi. Ben kendim de bir enstrüman çalıyorum: gitar. Her gün bir saat pratik yapıyorum. Klasik tabloları görmek için müzeye gitmeyi de seviyorum. Sanat ve müzik hayatı çok daha güzel ve ilginç kılıyor." 
        },
        questions: [
            { id: 1, question: "Neredeydi?", options: ["Sinema", "Açık hava konseri", "Müze"], correctAnswer: "Açık hava konseri" },
            { id: 2, question: "Kim çaldı?", options: ["Rastgele grup", "En sevdiği grup", "Öğretmen"], correctAnswer: "En sevdiği grup" },
            { id: 3, question: "Atmosfer?", options: ["Kötü", "Fantastik", "Normal"], correctAnswer: "Fantastik" },
            { id: 4, question: "Müzik?", options: ["Alçak", "Yüksek (laut)", "Yok"], correctAnswer: "Yüksek (laut)" },
            { id: 5, question: "Rahatsız oldular mı?", options: ["Evet", "Hayır", "Biraz"], correctAnswer: "Hayır" },
            { id: 6, question: "Hangi enstrüman?", options: ["Piyano", "Gitar", "Keman"], correctAnswer: "Gitar" },
            { id: 7, question: "Ne kadar çalışıyor?", options: ["Haftada bir", "Her gün bir saat", "Hiç"], correctAnswer: "Her gün bir saat" },
            { id: 8, question: "Müzeye neden gidiyor?", options: ["Yemek", "Tablo görmek", "Uyumak"], correctAnswer: "Tablo görmek" },
            { id: 9, question: "Hayatı ne güzelleştirir?", options: ["Para", "Sanat ve Müzik", "Telefon"], correctAnswer: "Sanat ve Müzik" },
            { id: 10, question: "Gitar kelimesi?", options: ["Gitarre", "Geige", "Klavier"], correctAnswer: "Gitarre" }
        ],
        vocabulary: [
            { word: "Stimmung", meaning: "Atmosfer" },
            { word: "Tanzen", meaning: "Dans etmek" },
            { word: "Üben", meaning: "Pratik yapmak" },
            { word: "Gemälde", meaning: "Tablo" },
            { word: "Kunst", meaning: "Sanat" }
        ]
    },
    548: {
        unitId: 548, title: "Sinema ve Dizi", language: "Almanca", level: "A2",
        story: { 
            text: "Heute Abend bleibe ich zu Hause ve mache einen Filmabend. Ich schaue sehr gern Komödien, weil ich gern lache. Mein Mitbewohner mag lieber Krimis veya Actionfilme, ama heute darf ich entscheiden. Ich habe Popcorn ve Cola gekauft. Manchmal gehen wir auch ins Kino, weil die Leinwand dort viel größer ist ve der Sound besser wirkt. In letzter Zeit schauen viele Menschen Serien auf Streaming-Portalen. Ich finde das praktisch, weil man schauen kann, wann man möchte. Was ist dein Lieblingsfilm?", 
            translation: "Bu akşam evde kalıyorum ve bir film gecesi yapıyorum. Gülmeyi sevdiğim için komedi izlemeyi çok seviyorum. Ev arkadaşım polisiye veya aksiyon filmlerini daha çok seviyor ama bugün kararı ben verebilirim. Patlamış mısır ve kola aldım. Bazen sinemaya da gidiyoruz çünkü oradaki ekran çok daha büyük ve ses daha iyi geliyor. Son zamanlarda birçok insan platformlarda dizi izliyor. Bence bu pratik, çünkü istediğin zaman izleyebiliyorsun. En sevdiğin film hangisi?" 
        },
        questions: [
            { id: 1, question: "Bu akşam ne yapıyor?", options: ["Dışarıda", "Film gecesi", "Uyku"], correctAnswer: "Film gecesi" },
            { id: 2, question: "Hangi türü seviyor?", options: ["Korku", "Komedi", "Dram"], correctAnswer: "Komedi" },
            { id: 3, question: "Neden komedi?", options: ["Ağlamak için", "Gülmek (lachen) için", "Korkmak için"], correctAnswer: "Gülmek (lachen) için" },
            { id: 4, question: "Arkadaşı ne sever?", options: ["Romantik", "Polisiye/Aksiyon", "Müzikal"], correctAnswer: "Polisiye/Aksiyon" },
            { id: 5, question: "Seçimi kim yapıyor?", options: ["Arkadaş", "Anlatıcı", "Kimse"], correctAnswer: "Anlatıcı" },
            { id: 6, question: "Atıştırmalık?", options: ["Meyve", "Popcorn/Kola", "Pizza"], correctAnswer: "Popcorn/Kola" },
            { id: 7, question: "Sinemanın farkı?", options: ["Ucuzluk", "Büyük ekran (Leinwand)", "Sessizlik"], correctAnswer: "Büyük ekran (Leinwand)" },
            { id: 8, question: "Diziler nereden?", options: ["Sadece TV", "Streaming platformları", "Kaset"], correctAnswer: "Streaming platformları" },
            { id: 9, question: "Platformlar neden iyi?", options: ["Ücretsiz", "İstediğin zaman", "Daha hızlı"], correctAnswer: "İstediğin zaman" },
            { id: 10, question: "Leinwand ne demek?", options: ["Koltuk", "Ekran/Perde", "Ses"], correctAnswer: "Ekran/Perde" }
        ],
        vocabulary: [
            { word: "Komödie", meaning: "Komedi" },
            { word: "Entscheiden", meaning: "Karar vermek" },
            { word: "Leinwand", meaning: "Ekran" },
            { word: "Sound", meaning: "Ses" },
            { word: "Praktisch", meaning: "Pratik" }
        ]
    },
    549: {
        unitId: 549, title: "Modern Teknoloji", language: "Almanca", level: "A2",
        story: { 
            text: "Ich habe einen neuen Laptop gekauft, weil mein alter Computer zu langsam war. Das neue Modell ist sehr leicht ve hat einen schnellen Prozessor. Ich benutze ihn für die Arbeit ve auch zur Unterhaltung. Heutzutage benutzen wir fast überall Technik. Mein Smartphone ist mein wichtigster Begleiter. Ich nutze es für die Navigation, zum Chatten ve um Fotos zu machen. Technik macht unser Leben einfacher, ama man sollte auch manchmal 'offline' sein ve die Natur ohne Bildschirm genießen. Wie viele Stunden pro Tag nutzt du das Internet?", 
            translation: "Yeni bir dizüstü bilgisayar aldım çünkü eski bilgisayarım çok yavaştı. Yeni model çok hafif ve hızlı bir işlemcisi var. Onu iş ve eğlence için kullanıyorum. Bugünlerde neredeyse her yerde teknoloji kullanıyoruz. Akıllı telefonum en önemli eşlikçim. Onu navigasyon, sohbet ve fotoğraf çekmek için kullanıyorum. Teknoloji hayatımızı kolaylaştırıyor ama insan bazen 'çevrimdışı' olmalı ve doğanın tadını ekransız çıkarmalıdır. Günde kaç saat internet kullanıyorsun?" 
        },
        questions: [
            { id: 1, question: "Neden yeni laptop?", options: ["Eskisi yavaştı", "Rengi kötüydü", "Kayboldu"], correctAnswer: "Eskisi yavaştı" },
            { id: 2, question: "Özelliği?", options: ["Ağır", "Hafif/Hızlı", "Eski"], correctAnswer: "Hafif/Hızlı" },
            { id: 3, question: "Ne için kullanıyor?", options: ["Sadece oyun", "İş ve eğlence", "Cihaz değil"], correctAnswer: "İş ve eğlence" },
            { id: 4, question: "En önemli parça?", options: ["Laptop", "Smartphone", "Televizyon"], correctAnswer: "Smartphone" },
            { id: 5, question: "Telefonla ne yapmıyor?", options: ["Navigasyon", "Yemek pişirme", "Fotoğraf"], correctAnswer: "Yemek pişirme" },
            { id: 6, question: "Teknoloji ne yapar?", options: ["Zorlaştırır", "Kolaylaştırır (einfacher)", "Yorar"], correctAnswer: "Kolaylaştırır (einfacher)" },
            { id: 7, question: "Hangi tavsiyeyi verdi?", options: ["Hep online ol", "Bazen offline ol", "Hepsini at"], correctAnswer: "Bazen offline ol" },
            { id: 8, question: "Doğada ne olmamalı?", options: ["Ağaç", "Ekran (Bildschirm)", "Su"], correctAnswer: "Ekran (Bildschirm)" },
            { id: 9, question: "Prozessor?", options: ["Ekran", "İşlemci", "Kasa"], correctAnswer: "İşlemci" },
            { id: 10, question: "Einfacher ne demek?", options: ["Zor", "Daha kolay", "Hızlı"], correctAnswer: "Daha kolay" }
        ],
        vocabulary: [
            { word: "Leicht", meaning: "Hafif" },
            { word: "Unterhaltung", meaning: "Eğlence" },
            { word: "Begleiter", meaning: "Eşlikçi" },
            { word: "Einfacher", meaning: "Daha kolay" },
            { word: "Bildschirm", meaning: "Ekran" }
        ]
    },
    550: {
        unitId: 550, title: "Sosyal Medya", language: "Almanca", level: "A2",
        story: { 
            text: "Soziale Medien sind heutzutage sehr beliebt. Viele Menschen posten Fotos ve Videos auf Plattformen wie Instagram oder TikTok. Es ist schön, mit Freunden in Kontakt zu bleiben ve Neuigkeiten zu teilen. Aber man muss auch vorsichtig sein. Datenschutz ist ein wichtiges Thema. Man sollte nicht zu viele private Informationen im Internet teilen. Man muss auch auf Passwörter achten ve sie regelmäßig ändern. Wenn man sicher surft, machen soziale Medien viel Spaß ve bieten viele Möglichkeiten.", 
            translation: "Sosyal medya bugünlerde çok popüler. Birçok insan Instagram veya TikTok gibi platformlarda fotoğraf ve video paylaşıyor. Arkadaşlarla iletişimde kalmak ve haberleri paylaşmak güzel. Ama dikkatli de olunmalıdır. Veri koruması (Datenschutz) önemli bir konudur. İnternette çok fazla özel bilgi paylaşılmamalıdır. Şifrelere de dikkat edilmeli ve düzenli olarak değiştirilmelidir. Güvenli bir şekilde sörf yapıldığında, sosyal medya çok eğlencelidir ve birçok fırsat sunar." 
        },
        questions: [
            { id: 1, question: "Sosyal medya nasıldır?", options: ["Popüler (beliebt)", "Sıkıcı", "Bilinmiyor"], correctAnswer: "Popüler (beliebt)" },
            { id: 2, question: "Ne paylaşılıyor?", options: ["Sadece yazı", "Fotoğraf/Video", "Para"], correctAnswer: "Fotoğraf/Video" },
            { id: 3, question: "Avantajı?", options: ["Yemek", "İletişimde kalmak", "Uyumak"], correctAnswer: "İletişimde kalmak" },
            { id: 4, question: "Datenschutz?", options: ["Hızlı internet", "Veri koruması", "Ekran"], correctAnswer: "Veri koruması" },
            { id: 5, question: "Ne paylaşılmamalı?", options: ["Her şey", "Özel bilgiler", "Komik videolar"], correctAnswer: "Özel bilgiler" },
            { id: 6, question: "Şifre önerisi?", options: ["Değiştirme", "Düzenli değiştir", "Kolay yap"], correctAnswer: "Düzenli değiştir" },
            { id: 7, question: "Nasıl sörf yapılmalı?", options: ["Hızlı", "Güvenli (sicher)", "Gece"], correctAnswer: "Güvenli (sicher)" },
            { id: 8, question: "Haber paylaşmak?", options: ["Güzeldir", "Kötüdür", "Yasasaktır"], correctAnswer: "Güzeldir" },
            { id: 9, question: "Beliebt?", options: ["Pahalı", "Sevilen/Popüler", "Zor"], correctAnswer: "Sevilen/Popüler" },
            { id: 10, question: "Vorsichtig?", options: ["Dikkatli", "Hızlı", "Yorgun"], correctAnswer: "Dikkatli" }
        ],
        vocabulary: [
            { word: "Beliebt", meaning: "Popüler" },
            { word: "Teilen", meaning: "Paylaşmak" },
            { word: "Vorsichtig", meaning: "Dikkatli" },
            { word: "Datenschutz", meaning: "Veri koruması" },
            { word: "Möglichkeiten", meaning: "Fırsatlar" }
        ]
    },
    551: {
        unitId: 551, title: "Çevre ve Doğayı Koruma", language: "Almanca", level: "A2",
        story: { 
            text: "Umweltschutz ist eine große Herausforderung für uns alle. Wir müssen unseren Planeten schützen. Man kann im Alltag viel tun: Plastik vermeiden, Wasser sparen ve Müll trennen. Ich fahre oft mit dem Fahrrad oder nutze den Bus, anstatt das Auto zu nehmen. Das ist besser für die Luft. Wir sollten auch weniger Papier verbrauchen ve regionale Produkte kaufen. Jeder kleine Schritt hilft, die Natur für die Zukunft zu bewahren. Was machst du für die Umwelt?", 
            translation: "Çevreyi koruma hepimiz için büyük bir zorluktur. Gezegenimizi korumalıyız. Günlük hayatta çok şey yapılabilir: Plastikten kaçınmak, su tasarrufu yapmak ve çöpleri ayırmak. Araba kullanmak yerine sık sık bisiklete biniyorum veya otobüsü kullanıyorum. Bu hava için daha iyidir. Daha az kağıt tüketmeli ve bölgesel ürünler satın almalıyız. Her küçük adım, doğayı gelecek için korumaya yardımcı olur. Sen çevre için ne yapıyorsun?" 
        },
        questions: [
            { id: 1, question: "Çevreyi koruma kimin görevi?", options: ["Sadece devletin", "Hepimizin", "Hiç kimsenin"], correctAnswer: "Hepimizin" },
            { id: 2, question: "Günlük hayatta ne yapılabilir?", options: ["Daha çok plastik", "Su tasarrufu/Plastikten kaçınma", "Çöpleri karıştırmak"], correctAnswer: "Su tasarrufu/Plastikten kaçınma" },
            { id: 3, question: "Ulaşımda neyi tercih ediyor?", options: ["Sadece özel araba", "Bisiklet/Otobüs", "Uçak"], correctAnswer: "Bisiklet/Otobüs" },
            { id: 4, question: "Toplu taşıma ne için iyidir?", options: ["Para", "Hava kalitesi", "Eğlence"], correctAnswer: "Hava kalitesi" },
            { id: 5, question: "Kağıt kullanımı?", options: ["Artırılmalı", "Azaltılmalı (weniger)", "Aynı kalmalı"], correctAnswer: "Azaltılmalı (weniger)" },
            { id: 6, question: "Hangi ürünler alınmalı?", options: ["İthal", "Bölgesel (regional)", "En pahalı"], correctAnswer: "Bölgesel (regional)" },
            { id: 7, question: "Küçük adımlar neye yardım eder?", options: ["Doğayı korumaya", "Para biriktirmeye", "Daha çok çalışmaya"], correctAnswer: "Doğayı korumaya" },
            { id: 8, question: "Schützen ne demektir?", options: ["Kırmak", "Korumak", "Kirletmek"], correctAnswer: "Korumak" },
            { id: 9, question: "Vermeiden?", options: ["Kaçınmak", "İstermek", "Satın almak"], correctAnswer: "Kaçınmak" },
            { id: 10, question: "Müll trennen?", options: ["Çöp atmak", "Çöpleri ayırmak", "Çöp yakmak"], correctAnswer: "Çöpleri ayırmak" }
        ],
        vocabulary: [
            { word: "Umweltschutz", meaning: "Çevre koruma" },
            { word: "Schützen", meaning: "Korumak" },
            { word: "Sparen", meaning: "Tasarruf etmek" },
            { word: "Vermeiden", meaning: "Kaçınmak" },
            { word: "Trennen", meaning: "Ayırmak" }
        ]
    },
    552: {
        unitId: 552, title: "Almanya'nın Büyük Şehirleri", language: "Almanca", level: "A2",
        story: { 
            text: "Deutschland hat viele interessante Städte. Berlin ist die Hauptstadt ve bekannt für Geschichte ve Museen. Hamburg liegt im Norden ve hat einen riesigen Hafen. München im Süden ist berühmt für das Oktoberfest ve die Alpen in der Nähe. Köln am Rhein ist bekannt für den Kölner Dom ve den Karneval. Frankfurt ist das Finanzzentrum mit vielen Hochhäusern. Jede Stadt hat ihren eigenen Charakter ve Charme. Welche Stadt möchtest du besuchen?", 
            translation: "Almanya'nın çok ilginç şehirleri var. Berlin başkenttir ve tarih ile müzeleriyle tanınır. Hamburg kuzeydedir ve devasa bir limanı vardır. Güneydeki Münih, Oktoberfest ve yakınındaki Alpler ile ünlüdür. Ren nehri kıyısındaki Köln, Köln Katedrali ve karnavalı ile bilinir. Frankfurt, birçok gökdeleniyle finans merkezidir. Her şehrin kendine özgü karakteri ve cazibesi vardır. Sen hangi şehri ziyaret etmek istersin?" 
        },
        questions: [
            { id: 1, question: "Başkent neresidir?", options: ["Hamburg", "Berlin", "Münih"], correctAnswer: "Berlin" },
            { id: 2, question: "Hamburg nerede yer alır?", options: ["Güneyde", "Kuzeyde (Norden)", "Batıda"], correctAnswer: "Kuzeyde (Norden)" },
            { id: 3, question: "Hamburg'un nesi büyüktür?", options: ["Havalimanı", "Limanı (Hafen)", "İstasyonu"], correctAnswer: "Limanı (Hafen)" },
            { id: 4, question: "Münih neyi ile ünlüdür?", options: ["Katedral", "Oktoberfest", "Gökdelenler"], correctAnswer: "Oktoberfest" },
            { id: 5, question: "Köln hangi nehir üzerindedir?", options: ["Elbe", "Ren (Rhein)", "Tuna"], correctAnswer: "Ren (Rhein)" },
            { id: 6, question: "Köln'ün simgesi nedir?", options: ["Liman", "Dom (Katedral)", "Televizyon kulesi"], correctAnswer: "Dom (Katedral)" },
            { id: 7, question: "Finans merkezi neresidir?", options: ["Berlin", "Köln", "Frankfurt"], correctAnswer: "Frankfurt" },
            { id: 8, question: "Frankfurt'ta ne çoktur?", options: ["Gökdelen (Hochhäuser)", "Çiftlik", "Plaj"], correctAnswer: "Gökdelen (Hochhäuser)" },
            { id: 9, question: "Şehirlerin karakteri nasıldır?", options: ["Aynı", "Farklı/Özgün", "Sıkıcı"], correctAnswer: "Farklı/Özgün" },
            { id: 10, question: "Hauptstadt ne demektir?", options: ["Büyükşehir", "Başkent", "Liman kenti"], correctAnswer: "Başkent" }
        ],
        vocabulary: [
            { word: "Hauptstadt", meaning: "Başkent" },
            { word: "Hafen", meaning: "Liman" },
            { word: "Berühmt", meaning: "Ünlü" },
            { word: "Finanzzentrum", meaning: "Finans merkezi" },
            { word: "Charakter", meaning: "Karakter" }
        ]
    },
    553: {
        unitId: 553, title: "Alman Yemek Kültürü", language: "Almanca", level: "A2",
        story: { 
            text: "Die deutsche Küche ist sehr vielfältig. Ein typisches Frühstück besteht aus Brot, Brötchen, Käse, Wurst ve Marmelade. Sonntags essen viele Familien Schweinebraten mit Klößen oder Spätzle. Kartoffeln sind in Deutschland sehr beliebt ve werden in vielen Variationen zubereitet. Zum Nachtisch gibt es oft Apfelkuchen oder Schwarzwälder Kirschtorte. Man trinkt auch gern Kaffee oder Mineralwasser. In Deutschland gibt es über dreitausend verschiedene Brotsorten. Brot ist ein wichtiger Teil der Kultur.", 
            translation: "Alman mutfağı çok çeşitlidir. Tipik bir kahvaltı ekmek, küçük ekmekler (Brötchen), peynir, sosis ve reçelden oluşur. Pazar günleri birçok aile patates köftesi (Klößen) veya erişte (Spätzle) ile domuz kızartması yer. Patates Almanya'da çok popülerdir ve birçok çeşit halinde hazırlanır. Tatlı olarak sık sık elmalı kek veya Kara Orman vişneli pastası vardır. Kahve veya maden suyu da severek içilir. Almanya'da üç binden fazla farklı ekmek çeşidi vardır. Ekmek kültürün önemli bir parçasıdır." 
        },
        questions: [
            { id: 1, question: "Alman mutfağı nasıldır?", options: ["Tek düze", "Çeşitli (vielfältig)", "Sadece etli"], correctAnswer: "Çeşitli (vielfältig)" },
            { id: 2, question: "Kahvaltıda ne yoktur?", options: ["Peynir", "Pizza", "Sosis"], correctAnswer: "Pizza" },
            { id: 3, question: "Pazar günleri ne yenir?", options: ["Balık", "Domuz kızartması", "Salata"], correctAnswer: "Domuz kızartması" },
            { id: 4, question: "Patatesin popülerliği?", options: ["Az sevilir", "Çok popüler (beliebt)", "Hiç yenmez"], correctAnswer: "Çok popüler (beliebt)" },
            { id: 5, question: "Ünlü bir pasta türü?", options: ["Baklava", "Schwarzwälder Kirschtorte", "Brownie"], correctAnswer: "Schwarzwälder Kirschtorte" },
            { id: 6, question: "Almanya'da kaç çeşit ekmek vardır?", options: ["Yüz", "Bin", "Üç binden fazla"], correctAnswer: "Üç binden fazla" },
            { id: 7, question: "Ekmek kültürün neresindedir?", options: ["Dışında", "Önemli bir parçası", "Önemsiz"], correctAnswer: "Önemli bir parçası" },
            { id: 8, question: "Nachtisch ne demektir?", options: ["Akşam yemeği", "Tatlı", "Kahvaltı"], correctAnswer: "Tatlı" },
            { id: 9, question: "Brötchen ne demektir?", options: ["Büyük ekmek", "Küçük ekmek/Sandviç ekmeği", "Pasta"], correctAnswer: "Küçük ekmek/Sandviç ekmeği" },
            { id: 10, question: "İçecek olarak ne tercih edilir?", options: ["Gazoz", "Kahve/Maden suyu", "Ayran"], correctAnswer: "Kahve/Maden suyu" }
        ],
        vocabulary: [
            { word: "Vielfältig", meaning: "Çeşitli" },
            { word: "Besteht aus", meaning: "-den oluşur" },
            { word: "Beliebt", meaning: "Popüler" },
            { word: "Nachtisch", meaning: "Tatlı" },
            { word: "Sorte", meaning: "Çeşit/Tür" }
        ]
    },
    554: {
        unitId: 554, title: "Bayramlar ve Kutlamalar", language: "Almanca", level: "A2",
        story: { 
            text: "In Deutschland feiert man viele Feste. Weihnachten ist das wichtigste Familienfest im Dezember. Man schmückt einen Tannenbaum ve tauscht Geschenke aus. Im Frühling feiert man Ostern mit Schokoladeneiern ve einem Osterhasen. Ein großes Fest ist auch der Karneval im Februar, besonders im Rheinland. Die Leute tragen Kostüme ve feiern auf der Straße. Geburtstage sind auch sehr wichtig. Man lädt Freunde ein ve isst gemeinsam Kuchen. Feste bringen Menschen zusammen ve machen Freude.", 
            translation: "Almanya'da birçok bayram kutlanır. Noel, Aralık ayındaki en önemli aile bayramıdır. Bir çam ağacı süslenir ve hediyeler takas edilir. Baharda çikolata yumurtalar ve paskalya tavşanı ile Paskalya kutlanır. Şubat ayındaki büyük bir bayram da, özellikle Rheinland bölgesinde, Karnavaldır. İnsanlar kostümler giyer ve sokakta kutlama yaparlar. Doğum günleri de çok önemlidir. Arkadaşlar davet edilir ve birlikte kek yenir. Bayramlar insanları bir araya getirir ve neşe verir." 
        },
        questions: [
            { id: 1, question: "En önemli aile bayramı?", options: ["Karnaval", "Noel (Weihnachten)", "Paskalya"], correctAnswer: "Noel (Weihnachten)" },
            { id: 2, question: "Noel'de ne süslenir?", options: ["Masa", "Çam ağacı (Tannenbaum)", "Kapı"], correctAnswer: "Çam ağacı (Tannenbaum)" },
            { id: 3, question: "Hangi ay Noel kutlanır?", options: ["Ocak", "Aralık (Dezember)", "Kasım"], correctAnswer: "Aralık (Dezember)" },
            { id: 4, question: "Paskalya'da ne yenir?", options: ["Et", "Çikolata yumurta", "Ekmek"], correctAnswer: "Çikolata yumurta" },
            { id: 5, question: "Karnaval ne zaman?", options: ["Aralık", "Şubat", "Haziran"], correctAnswer: "Şubat" },
            { id: 6, question: "Karnavalda ne giyilir?", options: ["Üniforma", "Kostüm", "Bornoz"], correctAnswer: "Kostüm" },
            { id: 7, question: "Doğum günlerinde ne yapılır?", options: ["Yalnız kalınır", "Arkadaşlar davet edilir", "Uyunur"], correctAnswer: "Arkadaşlar davet edilir" },
            { id: 8, question: "Bayramların etkisi?", options: ["İnsanları ayırır", "Bir araya getirir", "Yorar"], correctAnswer: "Bir araya getirir" },
            { id: 9, question: "Geschenk ne demektir?", options: ["Ceza", "Hediye", "Şans"], correctAnswer: "Hediye" },
            { id: 10, question: "Freude ne demektir?", options: ["Neşe/Sevinç", "Üzüntü", "Korku"], correctAnswer: "Neşe/Sevinç" }
        ],
        vocabulary: [
            { word: "Feiern", meaning: "Kutlamak" },
            { word: "Schmücken", meaning: "Süslemek" },
            { word: "Geschenk", meaning: "Hediye" },
            { word: "Einladen", meaning: "Davet etmek" },
            { word: "Zusammen", meaning: "Birlikte" }
        ]
    },
    555: {
        unitId: 555, title: "Medya ve Haberler", language: "Almanca", level: "A2",
        story: { 
            text: "Früher haben die Menschen nur Zeitung gelesen oder im Fernsehen Nachrichten geschaut. Heute informieren wir uns meistens im Internet oder über Apps. In Deutschland gibt es seriöse Nachrichtensendungen wie die 'Tagesschau'. Es ist wichtig, Informationen zu prüfen ve verschiedene Quellen zu nutzen. Manchmal gibt es 'Fake News', die nicht wahr sind. Journalisten müssen objektiv berichten. Eine gute Information hilft uns, die Welt besser zu verstehen ve gute Entscheidungen zu treffen.", 
            translation: "Eskiden insanlar sadece gazete okur veya televizyonda haber izlerdi. Bugün çoğunlukla internetten veya uygulamalar üzerinden bilgi alıyoruz. Almanya'da 'Tagesschau' gibi ciddi haber programları vardır. Bilgileri kontrol etmek ve farklı kaynaklar kullanmak önemlidir. Bazen doğru olmayan 'yalan haberler' (Fake News) vardır. Gazeteciler objektif olarak bildirmelidir. İyi bir bilgi, dünyayı daha iyi anlamamıza ve iyi kararlar vermemize yardımcı olur." 
        },
        questions: [
            { id: 1, question: "Eskiden haberler neredendi?", options: ["İnternet", "Gazete/TV", "Radyo"], correctAnswer: "Gazete/TV" },
            { id: 2, question: "Bugün çoğunlukla nereden?", options: ["Mektup", "İnternet/Apps", "Kulaktan dolma"], correctAnswer: "İnternet/Apps" },
            { id: 3, question: "Almanya'da ünlü program?", options: ["Tagesschau", "Show TV", "CNN"], correctAnswer: "Tagesschau" },
            { id: 4, question: "Bilgi için ne önemli?", options: ["Hemen inanmak", "Farklı kaynakları kullanmak", "Unutmak"], correctAnswer: "Farklı kaynakları kullanmak" },
            { id: 5, question: "Fake News nedir?", options: ["Doğru haber", "Yalan haber", "Spor haberi"], correctAnswer: "Yalan haber" },
            { id: 6, question: "Gazeteciler nasıl olmalı?", options: ["Taraflı", "Objektif", "Sessiz"], correctAnswer: "Objektif" },
            { id: 7, question: "İyi bilgi neye yarar?", options: ["Anlamaya/Karar vermeye", "Kafa karıştırmaya", "Vakit kaybetmeye"], correctAnswer: "Anlamaya/Karar vermeye" },
            { id: 8, question: "Zeitung ne demektir?", options: ["Kitap", "Gazete", "Dergi"], correctAnswer: "Gazete" },
            { id: 9, question: "Wahr ne demektir?", options: ["Yanlış", "Doğru/Gerçek", "Belki"], correctAnswer: "Doğru/Gerçek" },
            { id: 10, question: "Nachrichten ne demektir?", options: ["Müzik", "Haberler", "Spor"], correctAnswer: "Haberler" }
        ],
        vocabulary: [
            { word: "Nachrichten", meaning: "Haberler" },
            { word: "Prüfen", meaning: "Kontrol etmek" },
            { word: "Quelle", meaning: "Kaynak" },
            { word: "Objektiv", meaning: "Objektif" },
            { word: "Wahr", meaning: "Doğru/Gerçek" }
        ]
    },
    556: {
        unitId: 556, title: "Gelecek Planları", language: "Almanca", level: "A2",
        story: { 
            text: "Was sind deine Pläne für die Zukunft? Ich möchte nach dem Studium ein Jahr lang reisen ve die Welt sehen. Danach will ich eine gute Stelle finden ve in einer großen Stadt wohnen. Vielleicht fange ich auch an, eine neue Sprache zu lernen, zum Beispiel Spanisch oder Chinesisch. Mein größter Traum ist es, ein eigenes Haus mit Garten zu haben. Ich glaube, es ist wichtig, Träume zu haben ve hart zu arbeiten, um sie zu erreichen. Und was sind deine Träume?", 
            translation: "Gelecek için planların neler? Eğitimden sonra bir yıl boyunca seyahat etmek ve dünyayı görmek istiyorum. Ondan sonra iyi bir iş bulmak ve büyük bir şehirde yaşamak istiyorum. Belki yeni bir dil öğrenmeye de başlarım, örneğin İspanyolca veya Çince. En büyük hayalim bahçeli kendi evimin olması. Hayallere sahip olmanın ve onlara ulaşmak için çok çalışmanın önemli olduğuna inanıyorum. Peki senin hayallerin neler?" 
        },
        questions: [
            { id: 1, question: "Eğitimden sonra ne istiyor?", options: ["Hemen iş", "Seyahat etmek (reisen)", "Uyumak"], correctAnswer: "Seyahat etmek (reisen)" },
            { id: 2, question: "Ne kadar sürmesini planlıyor?", options: ["Bir hafta", "Bir yıl", "On yıl"], correctAnswer: "Bir yıl" },
            { id: 3, question: "Nerede yaşamak istiyor?", options: ["Köyde", "Büyük şehirde", "Denizde"], correctAnswer: "Büyük şehirde" },
            { id: 4, question: "Hangi dilleri örnek verdi?", options: ["Almanca/Türkçe", "İspanyolca/Çince", "İngilizce/Fransızca"], correctAnswer: "İspanyolca/Çince" },
            { id: 5, question: "En büyük hayali?", options: ["Araba", "Bahçeli kendi evi", "Ünlü olmak"], correctAnswer: "Bahçeli kendi evi" },
            { id: 6, question: "Hayallere ulaşmak için ne yapmalı?", options: ["Sadece beklemeli", "Çok çalışmalı (hart arbeiten)", "Vazgeçmeli"], correctAnswer: "Çok çalışmalı (hart arbeiten)" },
            { id: 7, question: "Plan kelimesi?", options: ["Sorglos", "Pläne", "Arbeit"], correctAnswer: "Pläne" },
            { id: 8, question: "Traum ne demektir?", options: ["Gerçek", "Hayal/Rüya", "Korku"], correctAnswer: "Hayal/Rüya" },
            { id: 9, question: "Zukunft ne demektir?", options: ["Geçmiş", "Gelecek", "Şimdi"], correctAnswer: "Gelecek" },
            { id: 10, question: "Sprache ne demektir?", options: ["Dil", "Yemek", "Müzik"], correctAnswer: "Dil" }
        ],
        vocabulary: [
            { word: "Pläne", meaning: "Planlar" },
            { word: "Zukunft", meaning: "Gelecek" },
            { word: "Traum", meaning: "Hayal/Rüya" },
            { word: "Erreichen", meaning: "Ulaşmak" },
            { word: "Wohnen", meaning: "Yaşamak" }
        ]
    },
    557: {
        unitId: 557, title: "Almanya'da Eğitim Sistemi", language: "Almanca", level: "A2",
        story: { 
            text: "Das deutsche Bildungssystem hat viele verschiedene Wege. Kinder gehen zuerst in die Grundschule. Danach gibt es verschiedene Schulen: Mittelschule, Realschule veya das Gymnasium. Mit dem Abitur kann man an einer Universität studieren. Es gibt auch die Ausbildung, bei der man einen Beruf lernt ve gleichzeitig arbeitet. Das nennt man das 'duale System'. Es ist weltweit bekannt ve hilft jungen Menschen, schnell einen Job zu finden. Lebenslanges Lernen ist heute sehr wichtig.", 
            translation: "Alman eğitim sisteminin birçok farklı yolu vardır. Çocuklar önce ilkokula giderler. Ondan sonra farklı okullar vardır: Ortaokul (Mittelschule), Realschule veya Gymnasium. Abitur ile üniversitede okunabilir. Ayrıca, bir mesleğin öğrenildiği ve aynı zamanda çalışıldığı mesleki eğitim (Ausbildung) de vardır. Buna 'ikili sistem' (duale System) denir. Dünya çapında tanınır ve gençlerin hızlıca iş bulmasına yardımcı olur. Yaşam boyu öğrenme bugün çok önemlidir." 
        },
        questions: [
            { id: 1, question: "Çocuklar önce nereye gider?", options: ["Üniversite", "Grundschule (İlkokul)", "Lise"], correctAnswer: "Grundschule (İlkokul)" },
            { id: 2, question: "Üniversite için ne gereklidir?", options: ["Ehliyet", "Abitur", "Pasaport"], correctAnswer: "Abitur" },
            { id: 3, question: "Duale System nedir?", options: ["Sadece okul", "Sadece iş", "Hem okul hem iş (Ausbildung)"], correctAnswer: "Hem okul hem iş (Ausbildung)" },
            { id: 4, question: "Eğitim sisteminin yolları?", options: ["Tek yol", "Çok çeşitli (viele Wege)", "Sadece özel okul"], correctAnswer: "Çok çeşitli (viele Wege)" },
            { id: 5, question: "Ausbildung ne işe yarar?", options: ["Vakit kaybı", "Meslek öğrenmeye ve iş bulmaya", "Sadece tatil için"], correctAnswer: "Meslek öğrenmeye ve iş bulmaya" },
            { id: 6, question: "Duale System ünü?", options: ["Bilinmiyor", "Dünya çapında tanınır", "Sadece Almanya'da"], correctAnswer: "Dünya çapında tanınır" },
            { id: 7, question: "Bugün ne önemlidir?", options: ["Erken emeklilik", "Yaşam boyu öğrenme", "Hareketsizlik"], correctAnswer: "Yaşam boyu öğrenme" },
            { id: 8, question: "Grundschule ne demektir?", options: ["Yüksekokul", "İlkokul", "Anaokulu"], correctAnswer: "İlkokul" },
            { id: 9, question: "Beruf ne demektir?", options: ["İş/Meslek", "Oyun", "Hobi"], correctAnswer: "İş/Meslek" },
            { id: 10, question: "Bekannt ne demektir?", options: ["Gizli", "Tanınmış/Bilinen", "Yeni"], correctAnswer: "Tanınmış/Bilinen" }
        ],
        vocabulary: [
            { word: "Bildungssystem", meaning: "Eğitim sistemi" },
            { word: "Weg", meaning: "Yol" },
            { word: "Gleichzeitig", meaning: "Aynı zamanda" },
            { word: "Weltweit", meaning: "Dünya çapında" },
            { word: "Beruf", meaning: "Meslek" }
        ]
    },
    558: {
        unitId: 558, title: "Robotlar ve Yapay Zeka", language: "Almanca", level: "A2",
        story: { 
            text: "Roboter werden in unserem Leben immer präsenter. In Fabriken bauen sie Autos, ve in Krankenhäusern helfen sie Chirurgen bei Operationen. Künstliche Intelligenz (KI) kann Texte schreiben 또는 Sprachen übersetzen. Manche Menschen haben Angst, dass Roboter ihre Jobs nehmen. Ama sie können uns auch gefährliche veya schwere Arbeit abnehmen. Es ist wichtig, dass wir lernen, wie man mit dieser Technik umgeht. Die Zukunft wird eine Mischung aus Mensch ve Maschine sein. Was denkst du über Roboter?", 
            translation: "Robotlar hayatımızda giderek daha fazla yer alıyor. Fabrikalarda araba yapıyorlar ve hastanelerde cerrahlara ameliyatlarda yardımcı oluyorlar. Yapay zeka (KI) metinler yazabiliyor veya dilleri çevirebiliyor. Bazı insanlar robotların işlerini ellerinden almasından korkuyor. Ama onlar tehlikeli veya ağır işleri de üstlenebilirler. Bu teknolojiyle nasıl başa çıkacağımızı öğrenmemiz önemlidir. Gelecek, insan ve makinenin bir karışımı olacak. Robotlar hakkında ne düşünüyorsun?" 
        },
        questions: [
            { id: 1, question: "Robotlar fabrikada ne yapıyor?", options: ["Yemek", "Araba yapıyor", "Uyumak"], correctAnswer: "Araba yapıyor" },
            { id: 2, question: "Hastanelerde kime yardım ediyorlar?", options: ["Aşçılara", "Cerrahlara (Chirurgen)", "Güvenliğe"], correctAnswer: "Cerrahlara (Chirurgen)" },
            { id: 3, question: "Yapay zeka (KI) ne yapabilir?", options: ["Sadece resim", "Metin yazma/Çeviri", "Uçamaz"], correctAnswer: "Metin yazma/Çeviri" },
            { id: 4, question: "İnsanların korkusu nedir?", options: ["Robotların bozulması", "İşlerini kaybetmek", "Elektrik kesintisi"], correctAnswer: "İşlerini kaybetmek" },
            { id: 5, question: "Robotların olumlu yanı?", options: ["Pahalı olması", "Tehlikeli/Ağır işleri yapması", "Sessiz olması"], correctAnswer: "Tehlikeli/Ağır işleri yapması" },
            { id: 6, question: "Ne yapmak önemlidir?", options: ["Kaçmak", "Teknolojiyle başa çıkmayı öğrenmek", "Hepsini yasaklamak"], correctAnswer: "Teknolojiyle başa çıkmayı öğrenmek" },
            { id: 7, question: "Gelecek nasıl olacak?", options: ["Sadece insan", "İnsan ve makine karışımı", "Sadece makine"], correctAnswer: "İnsan ve makine karışımı" },
            { id: 8, question: "Metin yazma?", options: ["Yazamaz", "Yazabilir (Texte schreiben)", "Zordur"], correctAnswer: "Yazabilir (Texte schreiben)" },
            { id: 9, question: "Gefährlich ne demektir?", options: ["Güvenli", "Tehlikeli", "Hızlı"], correctAnswer: "Tehlikeli" },
            { id: 10, question: "Maschine ne demektir?", options: ["İnsan", "Makine", "Doğa"], correctAnswer: "Makine" }
        ],
        vocabulary: [
            { word: "Präsenter", meaning: "Mevcut/Var olan" },
            { word: "Künstliche Intelligenz", meaning: "Yapay zeka" },
            { word: "Übersetzen", meaning: "Çeviri yapmak" },
            { word: "Gefährlich", meaning: "Tehlikeli" },
            { word: "Schwer", meaning: "Ağır/Zor" }
        ]
    },
    559: {
        unitId: 559, title: "Wellness ve Sağlıklı Yaşam", language: "Almanca", level: "A2",
        story: { 
            text: "Wellness bedeutet, Körper ve Geist etwas Gutes zu tun. Viele Menschen gehen am Wochenende in eine Therme veya eine Sauna, um sich zu entspannen. Massagen helfen gegen Rückenschmerzen ve Stress. Es ist auch wichtig, gesund zu essen ve genug zu schlafen. Ein Spaziergang im Wald kann Wunder wirken ve den Kopf frei machen. Wellness ist kein Luxus, sondern eine Notwendigkeit für ein glückliches Leben. Man sollte sich Zeit für sich selbst nehmen ve auf seinen Körper hören.", 
            translation: "Wellness, bedene ve zihne iyi bir şey yapmak demektir. Birçok insan hafta sonu rahatlamak için termal tesise veya saunaya gider. Masajlar sırt ağrısına ve strese karşı yardımcı olur. Sağlıklı beslenmek ve yeterince uyumak da önemlidir. Ormanda bir yürüyüş mucizeler yaratabilir ve zihni boşaltabilir. Wellness bir lüks değil, mutlu bir yaşam için bir gerekliliktir. İnsan kendisine vakit ayırmalı ve vücudunu dinlemelidir." 
        },
        questions: [
            { id: 1, question: "Wellness ne demektir?", options: ["Sadece spor", "Beden ve zihne iyilik yapmak", "Sadece uyumak"], correctAnswer: "Beden ve zihne iyilik yapmak" },
            { id: 2, question: "Hafta sonu nereye giderler?", options: ["İşe", "Termal/Sauna", "Okul"], correctAnswer: "Termal/Sauna" },
            { id: 3, question: "Masaj neye iyi gelir?", options: ["Açlığa", "Sırt ağrısı/Stres", "Susuzluğa"], correctAnswer: "Sırt ağrısı/Stres" },
            { id: 4, question: "Yürüyüş nerede mucize yaratır?", options: ["Şehirde", "Ormanda (Wald)", "Evde"], correctAnswer: "Ormanda (Wald)" },
            { id: 5, question: "Wellness nedir?", options: ["Lüks", "Gereklilik (Notwendigkeit)", "Vakit kaybı"], correctAnswer: "Gereklilik (Notwendigkeit)" },
            { id: 6, question: "Ne için vakit ayrılmalı?", options: ["Sadece başkaları", "Kendisi için (sich selbst)", "Sadece iş"], correctAnswer: "Kendisi için (sich selbst)" },
            { id: 7, question: "Vücutla ilgili ne yapmalı?", options: ["Dinlemeli (auf Körper hören)", "Yormalı", "Unutmalı"], correctAnswer: "Dinlemeli (auf Körper hören)" },
            { id: 8, question: "Entspannen ne demektir?", options: ["Yorulmak", "Rahatlamak", "Çalışmak"], correctAnswer: "Rahatlamak" },
            { id: 9, question: "Geist ne demektir?", options: ["Beden", "Zihin/Ruh", "Yemek"], correctAnswer: "Zihin/Ruh" },
            { id: 10, question: "Schlafen ne demektir?", options: ["Yürümek", "Uyumak", "Koşmak"], correctAnswer: "Uyumak" }
        ],
        vocabulary: [
            { word: "Entspannen", meaning: "Rahatlamak" },
            { word: "Wald", meaning: "Orman" },
            { word: "Wunder", meaning: "Mucize" },
            { word: "Notwendigkeit", meaning: "Gereklilik" },
            { word: "Kopf frei machen", meaning: "Zihni boşaltmak" }
        ]
    },
    560: {
        unitId: 560, title: "Veda ve Geri Bakış", language: "Almanca", level: "A2",
        story: { 
            text: "Wir sind am Ende unseres A2-Kurses angekommen. Wir haben viel gelernt: Grammatik, neue Vokabeln ve viele interessante Themen über die Kultur. Es war eine tolle Zeit ve ich hoffe, ihr hattet viel Spaß. Das Lernen einer Sprache hört nie auf. Bleibt motiviert ve übt weiter! Ich wünsche euch alles Gute für eure Zukunft ve viel Erfolg beim Deutschlernen. Auf Wiedersehen ve bis zum nächsten Mal!", 
            translation: "A2 kursumuzun sonuna geldik. Çok şey öğrendik: Dilbilgisi, yeni kelimeler ve kültür hakkında birçok ilginç konu. Harika bir zamandı ve umarım çok eğlenmişsinizdir. Bir dilli öğrenmek asla bitmez. Motive kalın ve pratik yapmaya devam edin! Geleceğiniz için en iyisini ve Almanca öğrenmede başarılar dilerim. Görüşmek üzere ve bir dahaki sefere kadar!" 
        },
        questions: [
            { id: 1, question: "Nereye gelindi?", options: ["Kursun başına", "Kursun sonuna (Ende)", "Ortasına"], correctAnswer: "Kursun sonuna (Ende)" },
            { id: 2, question: "Neler öğrenildi?", options: ["Sadece müzik", "Dilbilgisi/Kelime/Kültür", "Sadece yemek"], correctAnswer: "Dilbilgisi/Kelime/Kültür" },
            { id: 3, question: "Dil öğrenmek ne zaman biter?", options: ["Bir yılda", "Asla bitmez (hört nie auf)", "Hemen"], correctAnswer: "Asla bitmez (hört nie auf)" },
            { id: 4, question: "Tavsiye nedir?", options: ["Vazgeç", "Motive kal/Pratik yap", "Yavaşla"], correctAnswer: "Motive kal/Pratik yap" },
            { id: 5, question: "Ne diliyor?", options: ["Kötülük", "Gelecek için iyilik/Başarı", "Para"], correctAnswer: "Gelecek için iyilik/Başarı" },
            { id: 6, question: "Veda nasıl?", options: ["Tschüss", "Auf Wiedersehen", "Hallo"], correctAnswer: "Auf Wiedersehen" },
            { id: 7, question: "Kurs seviyesi?", options: ["A1", "A2", "B1"], correctAnswer: "A2" },
            { id: 8, question: "Eğlenceli miydi?", options: ["Sıkıcı", "Umarım (Spaß hatten)", "Kötü"], correctAnswer: "Umarım (Spaß hatten)" },
            { id: 9, question: "Erfolg ne demektir?", options: ["Başarı", "Hüzün", "Yol"], correctAnswer: "Başarı" },
            { id: 10, question: "Vokabeln ne demektir?", options: ["Kuşlar", "Kelimeler", "Sayılar"], correctAnswer: "Kelimeler" }
        ],
        vocabulary: [
            { word: "Ende", meaning: "Son" },
            { word: "Hört nie auf", meaning: "Asla bitmez" },
            { word: "Motiviert", meaning: "Motive/İstekli" },
            { word: "Erfolg", meaning: "Başarı" },
            { word: "Bis zum nächsten Mal", meaning: "Bir dahaki sefere kadar" }
        ]
    },
};

export function getGermanA2ReadingForUnit(unitId: number): UnitReading {
    return readings[unitId] || readings[531];
}
