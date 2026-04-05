import { UnitReading } from './readings';

const readings: { [key: number]: UnitReading } = {
    501: {
        unitId: 501, title: "Tanışma: Max Berlin'de", language: "Almanca", level: "A1",
        story: { 
            text: "Hallo! Ich heiße Max ve ich bin zwanzig Jahre alt. Ich komme aus Deutschland. Jetzt wohne ich in Berlin. Berlin ist eine sehr große Stadt. Ich bin Student an der Universität.", 
            translation: "Merhaba! Benim adım Max ve yirmi yaşındayım. Almanya'dan geliyorum. Şimdi Berlin'de yaşıyorum. Berlin çok büyük bir şehir. Üniversitede öğrenciyim." 
        },
        questions: [
            { id: 1, question: "Max kaç yaşında?", options: ["On sekiz", "Yirmi", "Yirmi iki"], correctAnswer: "Yirmi" },
            { id: 2, question: "Max aslen nereli?", options: ["Avusturya", "Almanya", "İsviçre"], correctAnswer: "Almanya" },
            { id: 3, question: "Max şu an nerede yaşıyor?", options: ["Münih", "Hamburg", "Berlin"], correctAnswer: "Berlin" },
            { id: 4, question: "Berlin nasıl bir şehir?", options: ["Küçük", "Büyük", "Eski"], correctAnswer: "Büyük" },
            { id: 5, question: "Max ne iş yapıyor?", options: ["Öğretmen", "Öğrenci", "Doktor"], correctAnswer: "Öğrenci" }
        ],
        vocabulary: [
            { word: "Hallo", meaning: "Merhaba" }, 
            { word: "Heißt", meaning: "Adı olmak" },
            { word: "Wohnen", meaning: "İkamet etmek" },
            { word: "Stadt", meaning: "Şehir" },
            { word: "Student", meaning: "Öğrenci" }
        ]
    },
    502: {
        unitId: 502, title: "Sayılar ve Yaş", language: "Almanca", level: "A1",
        story: { 
            text: "Das ist meine Familie. Ich habe zwei Brüder und eine Schwester. Mein Bruder Lukas ist zehn Jahre alt. Meine Schwester Sarah ismi ist fünfzehn. Wir sind eine große Familie. Wir haben auch einen Hund.", 
            translation: "bu benim ailem. İki erkek kardeşim ve bir kız kardeşim var. Erkek kardeşim Lukas on yaşında. Kız kardeşim Sarah on beş yaşında. Biz büyük bir aileyiz. Ayrıca bir köpeğimiz var." 
        },
        questions: [
            { id: 1, question: "Lukas kaç yaşında?", options: ["Beş", "On", "On beş"], correctAnswer: "On" },
            { id: 2, question: "Sarah kaç yaşında?", options: ["On", "On beş", "Yirmi"], correctAnswer: "On beş" },
            { id: 3, question: "Kaç tane erkek kardeşi var?", options: ["Bir", "İki", "Üç"], correctAnswer: "İki" },
            { id: 4, question: "Ailenin bir hayvanı var mı?", options: ["Evet, bir kedi", "Evet, bir köpek", "Hayır"], correctAnswer: "Evet, bir köpek" },
            { id: 5, question: "Aile küçük mü?", options: ["Evet", "Hayır, büyük", "Yalnız yaşıyor"], correctAnswer: "Hayır, büyük" }
        ],
        vocabulary: [
            { word: "Bruder", meaning: "Erkek kardeş" },
            { word: "Schwester", meaning: "Kız kardeş" },
            { word: "Zehn", meaning: "10" },
            { word: "Fünfzehn", meaning: "15" },
            { word: "Hund", meaning: "Köpek" }
        ]
    },
    503: {
        unitId: 503, title: "Annem ve Babam", language: "Almanca", level: "A1",
        story: { 
            text: "Meine Mutter heißt Anna. Sie ist achtundvierzig Jahre alt ve ist Lehrerin. Mein Vater heißt Tom. Er ist fünfzig Jahre alt ve arbeitet als Arzt. Meine Eltern sind sehr nett. Wir wohnen zusammen in einem Haus.", 
            translation: "Annemin adı Anna. Kırk sekiz yaşında ve öğretmen. Babamın adı Tom. Elli yaşında ve doktor olarak çalışıyor. Ebeveynlerim çok nazikler. Bir evde birlikte yaşıyoruz." 
        },
        questions: [
            { id: 1, question: "Annenin adı ne?", options: ["Sarah", "Anna", "Maria"], correctAnswer: "Anna" },
            { id: 2, question: "Babanın mesleği ne?", options: ["Öğretmen", "Doktor", "Mühendis"], correctAnswer: "Doktor" },
            { id: 3, question: "Baba kaç yaşında?", options: ["Kırk sekiz", "Elli", "Altmış"], correctAnswer: "Elli" },
            { id: 4, question: "Anne ne iş yapıyor?", options: ["Doktor", "Öğretmen", "Hemşire"], correctAnswer: "Öğretmen" },
            { id: 5, question: "Nerede yaşıyorlar?", options: ["Apartmanda", "Bir evde", "Otoda"], correctAnswer: "Bir evde" }
        ],
        vocabulary: [
            { word: "Mutter", meaning: "Anne" },
            { word: "Vater", meaning: "Baba" },
            { word: "Lehrerin", meaning: "Kadın öğretmen" },
            { word: "Arzt", meaning: "Erkek doktor" },
            { word: "Haus", meaning: "Ev" }
        ]
    },
    504: {
        unitId: 504, title: "Renklerin Dünyası", language: "Almanca", level: "A1",
        story: { 
            text: "Alles ist bunt! Das Auto von meinem Vater ist rot. Meine Tasche ist blau. Der Himmel ist heute sehr schön ve blau. Die Sonne ist gelb ve warm. Ich liebe die Farben.", 
            translation: "Her şey renkli! Babamın arabası kırmızı. Çantam mavi. Gökyüzü bugün çok güzel ve mavi. Güneş sarı ve sıcak. Renkleri seviyorum." 
        },
        questions: [
            { id: 1, question: "Babamın arabası ne renk?", options: ["Mavi", "Kırmızı", "Sarı"], correctAnswer: "Kırmızı" },
            { id: 2, question: "Çanta ne renk?", options: ["Siyah", "Mavi", "Yeşil"], correctAnswer: "Mavi" },
            { id: 3, question: "Güneş ne renk?", options: ["Kırmızı", "Sarı", "Mavi"], correctAnswer: "Sarı" },
            { id: 4, question: "Gökyüzü bugün nasıl?", options: ["Gri", "Güzel ve mavi", "Bulutlu"], correctAnswer: "Güzel ve mavi" },
            { id: 5, question: "Anlatıcı renkleri seviyor mu?", options: ["Evet", "Hayır", "Belirtilmemiş"], correctAnswer: "Evet" }
        ],
        vocabulary: [
            { word: "Bunt", meaning: "Renkli" },
            { word: "Rot", meaning: "Kırmızı" },
            { word: "Blau", meaning: "Mavi" },
            { word: "Gelb", meaning: "Sarı" },
            { word: "Tasche", meaning: "Çanta" }
        ]
    },
    505: {
        unitId: 505, title: "Odamdaki Eşyalar", language: "Almanca", level: "A1",
        story: { 
            text: "Mein Zimmer ist klein aber gemütlich. Der Tisch ist groß und braun. Hier lerne ich Deutsch. Der Stuhl ist neu ve bequem. Das Bett ist weiß. An der Wand hängt ein Bild.", 
            translation: "Odam küçük ama rahat. Masa büyük ve kahverengi. Burada Almanca çalışıyorum. Sandalye yeni ve konforlu. Yatak beyaz. Duvarda bir resim asılı." 
        },
        questions: [
            { id: 1, question: "Oda nasıl?", options: ["Büyük", "Küçük ama rahat", "Eski"], correctAnswer: "Küçük ama rahat" },
            { id: 2, question: "Masanın rengi ne?", options: ["Beyaz", "Kahverengi", "Siyah"], correctAnswer: "Kahverengi" },
            { id: 3, question: "Masa küçük mü?", options: ["Evet", "Hayır, büyük", "Orta boy"], correctAnswer: "Hayır, büyük" },
            { id: 4, question: "Yatak ne renk?", options: ["Mavi", "Beyaz", "Gri"], correctAnswer: "Beyaz" },
            { id: 5, question: "Sandalye nasıl?", options: ["Eski", "Yeni ve rahat", "Sert"], correctAnswer: "Yeni ve rahat" }
        ],
        vocabulary: [
            { word: "Zimmer", meaning: "Oda" },
            { word: "Gemütlich", meaning: "Rahat/Samimi" },
            { word: "Neu", meaning: "Yeni" },
            { word: "Bequem", meaning: "Konforlu" },
            { word: "Bild", meaning: "Resim" }
        ]
    },
    506: {
        unitId: 506, title: "Okulda Bir Gün", language: "Almanca", level: "A1",
        story: { 
            text: "Das ist meine Schule. Ich gehe jeden Tag zur Schule. Mein Lieblingsfach ist Deutsch. Wir haben viele Bücher. Der Lehrer ist sehr freundlich. In der Pause spielen wir Fußball.", 
            translation: "Bu benim okulum. Her gün okula gidiyorum. En sevdiğim ders Almanca. Çok kitabımız var. Öğretmen çok arkadaş canlısı. Teneffüste futbol oynuyoruz." 
        },
        questions: [
            { id: 1, question: "En sevdiği ders ne?", options: ["Matematik", "Almanca", "Müzik"], correctAnswer: "Almanca" },
            { id: 2, question: "Okula ne zaman gidiyor?", options: ["Sadece Pazartesi", "Her gün", "Hafta sonu"], correctAnswer: "Her gün" },
            { id: 3, question: "Öğretmen nasıl biri?", options: ["Sert", "Nazik/Arkadaş canlısı", "Genç"], correctAnswer: "Nazik/Arkadaş canlısı" },
            { id: 4, question: "Teneffüste ne yapıyorlar?", options: ["Yemek yiyorlar", "Futbol oynuyorlar", "Uyumak"], correctAnswer: "Futbol oynuyorlar" },
            { id: 5, question: "Çok neye sahipler?", options: ["Defter", "Kitap", "Bilgisayar"], correctAnswer: "Kitap" }
        ],
        vocabulary: [
            { word: "Schule", meaning: "Okul" },
            { word: "Lieblingsfach", meaning: "En sevilen ders" },
            { word: "Bücher", meaning: "Kitaplar" },
            { word: "Freundlich", meaning: "Arkadaş canlısı" },
            { word: "Pause", meaning: "Teneffüs/Ara" }
        ]
    },
    507: {
        unitId: 507, title: "Haftalık Rutin", language: "Almanca", level: "A1",
        story: { 
            text: "Heute ist Montag. Ich arbeite von acht bis siebzehn Uhr. Am Dienstag gohe ich zum Sport. Am Samstag habe ich frei. Dann gehe ich ins Kino oder treffe Freunde. Das Wochenende ist super.", 
            translation: "Bugün Pazartesi. Saat sekizden on yediye kadar çalışıyorum. Salı günü spora gidiyorum. Cumartesi günü boşum (izinliyim). O zaman sinemaya giderim veya arkadaşlarımla buluşurum. Hafta sonu süper." 
        },
        questions: [
            { id: 1, question: "Bugün hangi gün?", options: ["Pazartesi", "Salı", "Pazar"], correctAnswer: "Pazartesi" },
            { id: 2, question: "İş ne zaman bitiyor?", options: ["15:00", "17:00", "18:00"], correctAnswer: "17:00" },
            { id: 3, question: "Salı günü ne yapıyor?", options: ["Sinema", "Spor", "Çalışmak"], correctAnswer: "Spor" },
            { id: 4, question: "Ne zaman boş zamanı var?", options: ["Pazartesi", "Cumartesi", "Hafta içi"], correctAnswer: "Cumartesi" },
            { id: 5, question: "Hafta sonu ne yapıyor?", options: ["Sadece uyuyor", "Sinemaya gider veya arkadaşlarıyla buluşur", "Çalışıyor"], correctAnswer: "Sinemaya gider veya arkadaşlarıyla buluşur" }
        ],
        vocabulary: [
            { word: "Montag", meaning: "Pazartesi" },
            { word: "Arbeiten", meaning: "Çalışmak" },
            { word: "Frei", meaning: "Boş/İzinli" },
            { word: "Treffen", meaning: "Buluşmak" },
            { word: "Wochenende", meaning: "Hafta sonu" }
        ]
    },
    508: {
        unitId: 508, title: "Neler Yapmayı Severim?", language: "Almanca", level: "A1",
        story: { 
            text: "Ich habe viele Hobbys. Ich spiele gern Fußball und Tennis. Musik hören ist auch toll. Am Abend lese ich oft ein Buch. Ich lerne auch Fremdsprachen. Deutsch macht viel Spaß!", 
            translation: "Çok hobim var. Severek futbol ve tenis oynarım. Müzik dinlemek de harika. Akşamları sık sık kitap okurum. Ayrıca yabancı diller öğreniyorum. Almanca çok eğlenceli!" 
        },
        questions: [
            { id: 1, question: "Hangi sporları yapıyor?", options: ["Basketbol", "Futbol ve Tenis", "Yüzme"], correctAnswer: "Futbol ve Tenis" },
            { id: 2, question: "Akşamları ne yapıyor?", options: ["TV izliyor", "Kitap okuyor", "Dans ediyor"], correctAnswer: "Kitap okuyor" },
            { id: 3, question: "Müzik dinlemeyi seviyor mu?", options: ["Evet", "Hayır", "Sıkıcı buluyor"], correctAnswer: "Evet" },
            { id: 4, question: "Ne öğreniyor?", options: ["Yemek pişirmek", "Yabancı diller", "Araba sürmek"], correctAnswer: "Yabancı diller" },
            { id: 5, question: "Almanca hakkında ne düşünüyor?", options: ["Zor", "Eğlenceli", "Kötü"], correctAnswer: "Eğlenceli" }
        ],
        vocabulary: [
            { word: "Hobby", meaning: "Hobi" },
            { word: "Fußball", meaning: "Futbol" },
            { word: "Lesen", meaning: "Okumak" },
            { word: "Fremdsprache", meaning: "Yabancı dil" },
            { word: "Spaß", meaning: "Eğlence" }
        ]
    },
    509: {
        unitId: 509, title: "Mutfakta Neler Var?", language: "Almanca", level: "A1",
        story: { 
            text: "Ich habe Hunger. Zum Frühstück esse ich Brot mit Käse ve trinke Milch. Mein Lieblingsessen ist Pizza. Zum Abendessen koche ich Suppe. Ich trinke viel Wasser. Obst ist gesund.", 
            translation: "Açım. Kahvaltıda peynirli ekmek yiyorum ve süt içiyorum. En sevdiğim yemek pizza. Akşam yemeği için çorba pişiriyorum. Çok su içiyorum. Meyve sağlıklıdır." 
        },
        questions: [
            { id: 1, question: "Kahvaltıda ne yiyor?", options: ["Meyve", "Peynirli ekmek", "Pizza"], correctAnswer: "Peynirli ekmek" },
            { id: 2, question: "Kahvaltıda ne içiyor?", options: ["Çay", "Süt", "Kahve"], correctAnswer: "Süt" },
            { id: 3, question: "En sevdiği yemek ne?", options: ["Çorba", "Pizza", "Salata"], correctAnswer: "Pizza" },
            { id: 4, question: "Akşam yemeği için ne pişiriyor?", options: ["Et", "Çorba", "Makarna"], correctAnswer: "Çorba" },
            { id: 5, question: "Sağlıklı olan ne?", options: ["Pizza", "Meyve", "Börek"], correctAnswer: "Meyve" }
        ],
        vocabulary: [
            { word: "Essen", meaning: "Yemek yemek" },
            { word: "Trinken", meaning: "İçmek" },
            { word: "Frühstück", meaning: "Kahvaltı" },
            { word: "Suppe", meaning: "Çorba" },
            { word: "Gesund", meaning: "Sağlıklı" }
        ]
    },
    510: {
        unitId: 510, title: "Şehir Gezisi", language: "Almanca", level: "A1",
        story: { 
            text: "Berlin ist die Hauptstadt von Deutschland. Es gibt hier viele Museen und Parks. Viele Touristen besuchen das Brandenburger Tor. Das Wetter ist heute sonnig. Wir machen einen Spaziergang im Tiergarten.", 
            translation: "Berlin, Almanya'nın başkentidir. Burada çok sayıda müze ve park var. Birçok turist Brandenburg Kapısı'nı ziyaret ediyor. Hava bugün güneşli. Tiergarten'da yürüyüş yapıyoruz." 
        },
        questions: [
            { id: 1, question: "Almanya'nın başkenti neresidir?", options: ["Münih", "Berlin", "Frankfurt"], correctAnswer: "Berlin" },
            { id: 2, question: "Berlin'de neler var?", options: ["Sadece oteller", "Müzeler ve parklar", "Deniz"], correctAnswer: "Müzeler ve parklar" },
            { id: 3, question: "Turistler nereyi ziyaret ediyor?", options: ["Bir okulu", "Brandenburg Kapısı'nı", "Havalimanını"], correctAnswer: "Brandenburg Kapısı'nı" },
            { id: 4, question: "Hava nasıl?", options: ["Yağmurlu", "Güneşli", "Karlı"], correctAnswer: "Güneşli" },
            { id: 5, question: "Tiergarten'da ne yapıyorlar?", options: ["Yemek yiyorlar", "Yürüyüş yapıyorlar", "Bebek bakıyorlar"], correctAnswer: "Yürüyüş yapıyorlar" }
        ],
        vocabulary: [
            { word: "Hauptstadt", meaning: "Başkent" },
            { word: "Museen", meaning: "Müzeler" },
            { word: "Besuchen", meaning: "Ziyaret etmek" },
            { word: "Wetter", meaning: "Hava durumu" },
            { word: "Spaziergang", meaning: "Yürüyüş" }
        ]
    },
    511: {
        unitId: 511, title: "Vücudumuz ve Sağlık", language: "Almanca", level: "A1",
        story: { 
            text: "Ich fühle mich heute nicht gut. Mein Kopf tut weh ve ich habe Fieber. Ich gehe zum Arzt. Der Arzt sagt: Sie müssen im Bett bleiben ve viel Tee trinken. Gute Besserung!", 
            translation: "Bugün kendimi iyi hissetmiyorum. Başım ağrıyor ve ateşim var. Doktora gidiyorum. Doktor diyor ki: Yatakta kalmalı ve çok çay içmelisiniz. Geçmiş olsun!" 
        },
        questions: [
            { id: 1, question: "Anlatıcı neden doktora gidiyor?", options: ["Aç olduğu için", "Kendini iyi hissetmediği için", "Spora gitmek için"], correctAnswer: "Kendini iyi hissetmediği için" },
            { id: 2, question: "Neresi ağrıyor?", options: ["Ayağı", "Başı", "Kolu"], correctAnswer: "Başı" },
            { id: 3, question: "Başka hangi şikayeti var?", options: ["Öksürük", "Ateş", "Burun akıntısı"], correctAnswer: "Ateş" },
            { id: 4, question: "Doktor ne tavsiye ediyor?", options: ["Dışarı çıkmasını", "Yatakta kalmasını", "Çalışmasını"], correctAnswer: "Yatakta kalmasını" },
            { id: 5, question: "Doktor ne içmesini söylüyor?", options: ["Kahve", "Çay", "Su"], correctAnswer: "Çay" }
        ],
        vocabulary: [
            { word: "Kopf", meaning: "Baş/Kafa" },
            { word: "Fieber", meaning: "Ateş (Hastalık)" },
            { word: "Arzt", meaning: "Doktor" },
            { word: "Bett", meaning: "Yatak" },
            { word: "Gute Besserung", meaning: "Geçmiş olsun" }
        ]
    },
    512: {
        unitId: 512, title: "Hava Durumu: Dört Mevsim", language: "Almanca", level: "A1",
        story: { 
            text: "Wie ist das Wetter heute? Die Sonne scheint ve es ist sehr warm. Im Sommer gehen wir schwimmen. Aber im Winter ist es kalt ve es schneit oft. Wir brauchen dann einen Mantel.", 
            translation: "Bugün hava nasıl? Güneş parlıyor ve hava çok sıcak. Yazın yüzmeye gideriz. Ama kışın hava soğuktur ve sık sık kar yağar. O zaman bir paltoya ihtiyacımız olur." 
        },
        questions: [
            { id: 1, question: "Güneş açtığında hava nasıldır?", options: ["Soğuk", "Sıcak", "Rüzgarlı"], correctAnswer: "Sıcak" },
            { id: 2, question: "Yazın ne yapıyorlar?", options: ["Kayak yapıyorlar", "Yüzmeye gidiyorlar", "Evde kalıyorlar"], correctAnswer: "Yüzmeye gidiyorlar" },
            { id: 3, question: "Kışın hava nasıldır?", options: ["Çok sıcak", "Soğuk ve karlı", "Güneşli"], correctAnswer: "Soğuk ve karlı" },
            { id: 4, question: "Kışın neye ihtiyaç duyulur?", options: ["Tişört", "Palto", "Mayo"], correctAnswer: "Palto" },
            { id: 5, question: "Metne göre ne zaman kar yağar?", options: ["Yazın", "Kışın", "Sonbaharda"], correctAnswer: "Kışın" }
        ],
        vocabulary: [
            { word: "Wetter", meaning: "Hava durumu" },
            { word: "Sonne", meaning: "Güneş" },
            { word: "Warm", meaning: "Sıcak/Ilık" },
            { word: "Kalt", meaning: "Soğuk" },
            { word: "Mantel", meaning: "Palto" }
        ]
    },
    513: {
        unitId: 513, title: "Kıyafet Seçimi", language: "Almanca", level: "A1",
        story: { 
            text: "Ich gehe heute auf eine Party. Ich trage ein weißes Hemd ve eine schwarze Hose. Meine Schuhe sind neu ve bequem. Meine Freundin trägt ein schönes Kleid. Wir sehen toll aus!", 
            translation: "Bugün bir partiye gidiyorum. Beyaz bir gömlek ve siyah bir pantolon giyiyorum. Ayakkabılarım yeni ve rahat. Kız arkadaşım güzel bir elbise giyiyor. Harika görünüyoruz!" 
        },
        questions: [
            { id: 1, question: "Anlatıcı nereye gidiyor?", options: ["Okula", "Partiye", "İşe"], correctAnswer: "Partiye" },
            { id: 2, question: "Gömlek ne renk?", options: ["Mavi", "Beyaz", "Siyah"], correctAnswer: "Beyaz" },
            { id: 3, question: "Pantolon ne renk?", options: ["Gri", "Siyah", "Kahverengi"], correctAnswer: "Siyah" },
            { id: 4, question: "Ayakkabılar nasıl?", options: ["Eski", "Yeni ve rahat", "Dar"], correctAnswer: "Yeni ve rahat" },
            { id: 5, question: "Kız arkadaşı ne giyiyor?", options: ["Etek", "Elbise", "Kot pantolon"], correctAnswer: "Elbise" }
        ],
        vocabulary: [
            { word: "Kleidung", meaning: "Kıyafet" },
            { word: "Hemd", meaning: "Gömlek" },
            { word: "Hose", meaning: "Pantolon" },
            { word: "Schuhe", meaning: "Ayakkabı" },
            { word: "Kleid", meaning: "Elbise" }
        ]
    },
    514: {
        unitId: 514, title: "Gelecekteki Mesleğim", language: "Almanca", level: "A1",
        story: { 
            text: "Was bist du von Beruf? Mein Vater ist Arzt ve hilft kranken Menschen. Meine Mutter arbeitet als Sekretärin in einem Büro. Ich möchte Programmierer werden. Ich liebe Computer ve Technik.", 
            translation: "Mesleğin ne? Babam doktor ve hasta insanlara yardım ediyor. Annem bir ofiste sekreter olarak çalışıyor. Ben programcı olmak istiyorum. Bilgisayarları ve teknolojiyi seviyorum." 
        },
        questions: [
            { id: 1, question: "Babanın mesleği ne?", options: ["Sekreter", "Doktor", "Programcı"], correctAnswer: "Doktor" },
            { id: 2, question: "Anne nerede çalışıyor?", options: ["Hastanede", "Bir ofiste", "Okulda"], correctAnswer: "Bir ofiste" },
            { id: 3, question: "Anlatıcı ne olmak istiyor?", options: ["Doktor", "Sekreter", "Programcı"], correctAnswer: "Programcı" },
            { id: 4, question: "Anlatıcı neyi seviyor?", options: ["Hayvanları", "Bilgisayar ve teknolojiyi", "Yemek yapmayı"], correctAnswer: "Bilgisayar ve teknolojiyi" },
            { id: 5, question: "Doktor kime yardım eder?", options: ["Çocuklara", "Hasta insanlara", "Hayvanlara"], correctAnswer: "Hasta insanlara" }
        ],
        vocabulary: [
            { word: "Beruf", meaning: "Meslek" },
            { word: "Mensch", meaning: "İnsan" },
            { word: "Büro", meaning: "Ofis" },
            { word: "Werden", meaning: "Olmak (gelecek zaman/niyet)" },
            { word: "Technik", meaning: "Teknoloji/Teknik" }
        ]
    },
    515: {
        unitId: 515, title: "Şehir içi Ulaşım", language: "Almanca", level: "A1",
        story: { 
            text: "Wie kommst du zur Arbeit? Ich fahre meistens mit dem Bus veya mit der U-Bahn. Das ist schnell und billig. Mein Freund fährt mit dem Auto, aber es gibt oft Stau. Manchmal gehe ich auch zu Fuß.", 
            translation: "İşe nasıl gidiyorsun? Çoğunlukla otobüsle veya metroyla gidiyorum. Bu hızlı ve ucuz. Arkadaşım arabayla gidiyor ama sık sık trafik oluyor. Bazen yaya (yürüyerek) gidiyorum." 
        },
        questions: [
            { id: 1, question: "Anlatıcı işe çoğunlukla neyle gidiyor?", options: ["Araba", "Otobüs veya Metro", "Bisiklet"], correctAnswer: "Otobüs veya Metro" },
            { id: 2, question: "Otobüs ve metro nasıldır?", options: ["Yavaş", "Hızlı ve ucuz", "Pahalı"], correctAnswer: "Hızlı ve ucuz" },
            { id: 3, question: "Arkadaşı işe nasıl gidiyor?", options: ["Yürüyerek", "Arabayla", "Trenle"], correctAnswer: "Arabayla" },
            { id: 4, question: "Arabayla gitmenin sorunu nedir?", options: ["Çok hızlı", "Trafik sıkışıklığı", "Benzin yok"], correctAnswer: "Trafik sıkışıklığı" },
            { id: 5, question: "Anlatıcı bazen nasıl gidiyor?", options: ["Uçakla", "Yürüyerek", "Koşarak"], correctAnswer: "Yürüyerek" }
        ],
        vocabulary: [
            { word: "Arbeit", meaning: "İş" },
            { word: "Bus", meaning: "Otobüs" },
            { word: "U-Bahn", meaning: "Metro" },
            { word: "Stau", meaning: "Trafik sıkışıklığı" },
            { word: "Zu Fuß", meaning: "Yürüyerek/Yaya" }
        ]
    },
    516: {
        unitId: 516, title: "Sıfatlar: Zıt Kavramlar", language: "Almanca", level: "A1",
        story: { 
            text: "In meinem Obstkorb liegen viele Früchte. Der Apfel ist rot ve sehr süß. Die Zitrone ist gelb ve sauer. Diese Banane ist schon alt ve weich. Ich esse nur frisches Obst.", 
            translation: "Meyve sepetimde birçok meyve duruyor. Elma kırmızı ve çok tatlı. Limon sarı ve ekşi. Bu muz zaten eski (bayat) ve yumuşak. Ben sadece taze meyve yerim." 
        },
        questions: [
            { id: 1, question: "Elma tadı nasıldır?", options: ["Sert", "Tatlı", "Ekşi"], correctAnswer: "Tatlı" },
            { id: 2, question: "Limon ne renktir?", options: ["Yeşil", "Sarı", "Turuncu"], correctAnswer: "Sarı" },
            { id: 3, question: "Limon tadı nasıldır?", options: ["Ekşi", "Acı", "Tatlı"], correctAnswer: "Ekşi" },
            { id: 4, question: "Muz nasılmış?", options: ["Taze ve sert", "Eski ve yumuşak", "Yeşil"], correctAnswer: "Eski ve yumuşak" },
            { id: 5, question: "Anlatıcı ne tür meyveler yiyor?", options: ["Kurutulmuş", "Taze", "Konserve"], correctAnswer: "Taze" }
        ],
        vocabulary: [
            { word: "Süß", meaning: "Tatlı" },
            { word: "Sauer", meaning: "Ekşi" },
            { word: "Alt", meaning: "Eski/Bayat" },
            { word: "Frisch", meaning: "Taze" },
            { word: "Obst", meaning: "Meyve" }
        ]
    },
    517: {
        unitId: 517, title: "Sabah Rutinim", language: "Almanca", level: "A1",
        story: { 
            text: "Mein Tag beginnt früh. Ich stehe um sieben Uhr auf. Dann mache ich das Frühstück ve rufe meine Mutter an. Um acht Uhr fahre ich zur Arbeit. Ich kaufe am Abend im Supermarkt ein.", 
            translation: "Günüm erken başlıyor. Saat yedide kalkıyorum. Sonra kahvaltı hazırlıyorum ve annemi arıyorum. Saat sekizde işe gidiyorum. Akşam süpermarkette alışveriş yapıyorum." 
        },
        questions: [
            { id: 1, question: "Saat kaçta kalkıyor?", options: ["Altı", "Yedi", "Sekiz"], correctAnswer: "Yedi" },
            { id: 2, question: "Kalktıktan sonra ne yapıyor?", options: ["TV izliyor", "Kahvaltı hazırlıyor", "Uyuyor"], correctAnswer: "Kahvaltı hazırlıyor" },
            { id: 3, question: "Kimi arıyor?", options: ["Arkadaşını", "Annesini", "Babasını"], correctAnswer: "Annesini" },
            { id: 4, question: "İşe saat kaçta gidiyor?", options: ["Sekiz", "Dokuz", "Yedi"], correctAnswer: "Sekiz" },
            { id: 5, question: "Alışverişi ne zaman yapıyor?", options: ["Sabah", "Öğle", "Akşam"], correctAnswer: "Akşam" }
        ],
        vocabulary: [
            { word: "Aufstehen", meaning: "Kalkmak" },
            { word: "Anrufen", meaning: "Telefonla aramak" },
            { word: "Einkaufen", meaning: "Alışveriş yapmak" },
            { word: "Beginnen", meaning: "Başlamak" },
            { word: "Früh", meaning: "Erken" }
        ]
    },
    518: {
        unitId: 518, title: "Saat Kaç?", language: "Almanca", level: "A1",
        story: { 
            text: "Wie spät ist es jetzt? Es ist genau drei Uhr. Mein Deutschkurs beginnt um halb vier. Wir haben zwei Stunden Unterricht. Nach dem Kurs gohe ich nach Hause. Es ist dann halb sechs.", 
            translation: "Şimdi saat kaç? Tam olarak saat üç. Almanca kursum üç buçukta (dokuz buçuk gibi söylenir: halb vier) başlıyor. İki saat dersimiz var. Kurstan sonra eve gidiyorum. O zaman saat beş buçuk (halb sechs) oluyor." 
        },
        questions: [
            { id: 1, question: "Şu an saat tam kaç?", options: ["İki", "Üç", "Dört"], correctAnswer: "Üç" },
            { id: 2, question: "Kurs saat kaçta başlıyor?", options: ["03:30", "04:30", "03:00"], correctAnswer: "03:30" },
            { id: 3, question: "Ders kaç saat sürüyor?", options: ["Bir saat", "İki saat", "Üç saat"], correctAnswer: "İki saat" },
            { id: 4, question: "Kurstan sonra nereye gidiyor?", options: ["Parka", "Eve", "Kütüphaneye"], correctAnswer: "Eve" },
            { id: 5, question: "Eve gittiğinde saat kaçtır?", options: ["05:30", "06:30", "05:00"], correctAnswer: "05:30" }
        ],
        vocabulary: [
            { word: "Spät", meaning: "Geç (Saat sorarken kullanılır)" },
            { word: "Uhrzeit", meaning: "Saat" },
            { word: "Halb", meaning: "Yarım/Buçuk" },
            { word: "Unterricht", meaning: "Ders" },
            { word: "Stunde", meaning: "Saat (süre olarak)" }
        ]
    },
    519: {
        unitId: 519, title: "Markette Alışveriş", language: "Almanca", level: "A1",
        story: { 
            text: "Ich brauche Lebensmittel. Ich kaufe Käse, Eier und ein Kilo Äpfel. Das kostet zusammen zwölf Euro. Ich bezahle an der Kasse. Die Verkäuferin ist sehr nett. Auf Wiedersehen!", 
            translation: "Gıdaya ihtiyacım var. Peynir, yumurta ve bir kilo elma alıyorum. Hepsi birlikte on iki euro tutuyor. Kasada ödeme yapıyorum. Satıcı bayan çok nazik. Görüşürüz!" 
        },
        questions: [
            { id: 1, question: "Anlatıcı ne alıyor?", options: ["Sadece elma", "Peynir, yumurta ve elma", "Ekmek"], correctAnswer: "Peynir, yumurta ve elma" },
            { id: 2, question: "Ne kadar elma alıyor?", options: ["Yarım kilo", "Bir kilo", "İki kilo"], correctAnswer: "Bir kilo" },
            { id: 3, question: "Toplam tutar ne kadar?", options: ["On euro", "On iki euro", "On beş euro"], correctAnswer: "On iki euro" },
            { id: 4, question: "Ödemeyi nerede yapıyor?", options: ["Reyonda", "Kasada", "Kapıda"], correctAnswer: "Kasada" },
            { id: 5, question: "Satıcı nasıl biri?", options: ["Kaba", "Nazik", "Yaşlı"], correctAnswer: "Nazik" }
        ],
        vocabulary: [
            { word: "Lebensmittel", meaning: "Gıda/Yiyecek" },
            { word: "Käse", meaning: "Peynir" },
            { word: "Bezahlen", meaning: "Ödemek" },
            { word: "Kasse", meaning: "Kasa" },
            { word: "Verkäuferin", meaning: "Bayan satıcı" }
        ]
    },
    520: {
        unitId: 520, title: "Duygular ve Ruh Hali", language: "Almanca", level: "A1",
        story: { 
            text: "Heute bin ich sehr glücklich. Ich habe eine gute Note in der Prüfung bekommen. Aber gestern war ich traurig ve müde. Jetzt habe ich Energie ve lerne weiter. Wie fühlst du dich?", 
            translation: "Bugün çok mutluyum. Sınavdan iyi bir not aldım. Ama dün üzgün ve yorgundum. Şimdi enerjim var ve öğrenmeye devam ediyorum. Sen nasıl hissediyorsun?" 
        },
        questions: [
            { id: 1, question: "Anlatıcı bugün nasıl hissediyor?", options: ["Üzgün", "Mutlu", "Kızgın"], correctAnswer: "Mutlu" },
            { id: 2, question: "Neden mutlu?", options: ["Hava güzel olduğu için", "Sınavdan iyi not aldığı için", "Yeni bir kitap aldığı için"], correctAnswer: "Sınavdan iyi not aldığı için" },
            { id: 3, question: "Dün nasıl hissediyordu?", options: ["Çok enerjik", "Üzgün ve yorgun", "Korkmuş"], correctAnswer: "Üzgün ve yorgun" },
            { id: 4, question: "Şu an ne yapıyor?", options: ["Uyuyor", "Öğrenmeye/Çalışmaya devam ediyor", "Oyun oynuyor"], correctAnswer: "Öğrenmeye/Çalışmaya devam ediyor" },
            { id: 5, question: "Metne göre anlatıcının neyi var?", options: ["Parası", "Enerjisi", "Arabası"], correctAnswer: "Enerjisi" }
        ],
        vocabulary: [
            { word: "Glücklich", meaning: "Mutlu" },
            { word: "Traurig", meaning: "Üzgün" },
            { word: "Müde", meaning: "Yorgun" },
            { word: "Note", meaning: "Not (Okul)" },
            { word: "Prüfung", meaning: "Sınav" }
        ]
    },
    521: {
        unitId: 521, title: "İstekler ve Planlar", language: "Almanca", level: "A1",
        story: { 
            text: "Was möchtest du am Wochenende machen? Ich möchte ins Schwimmbad gehen ve dort schwimmen. Mein Freund will lieber Fußball spielen. Wir wollen am Sonntag zusammen picknicken. Das macht bestimmt Spaß!", 
            translation: "Hafta sonu ne yapmak istersin? Ben yüzme havuzuna gitmek ve orada yüzmek istiyorum. Arkadaşım ise futbol oynamayı tercih ediyor. Pazar günü birlikte piknik yapmak istiyoruz. Bu kesinlikle eğlenceli olacak!" 
        },
        questions: [
            { id: 1, question: "Anlatıcı hafta sonu nereye gitmek istiyor?", options: ["Sinemaya", "Yüzme havuzuna", "Okula"], correctAnswer: "Yüzme havuzuna" },
            { id: 2, question: "Arkadaşı ne yapmak istiyor?", options: ["Yüzmek", "Futbol oynamak", "Ders çalışmak"], correctAnswer: "Futbol oynamak" },
            { id: 3, question: "Pazar günü ne yapmayı planlıyorlar?", options: ["Alışveriş", "Piknik", "Uyumak"], correctAnswer: "Piknik" },
            { id: 4, question: "Pikniği ne zaman yapmak istiyorlar?", options: ["Cumartesi", "Pazar", "Cuma"], correctAnswer: "Pazar" },
            { id: 5, question: "Anlatıcı bu plan hakkında ne düşünüyor?", options: ["Sıkıcı olacağını", "Eğlenceli olacağını", "Yorucu olacağını"], correctAnswer: "Eğlenceli olacağını" }
        ],
        vocabulary: [
            { word: "Möchten", meaning: "İstemek (nazik)" },
            { word: "Wochenende", meaning: "Hafta sonu" },
            { word: "Schwimmbad", meaning: "Yüzme havuzu" },
            { word: "Lieber", meaning: "Daha çok/tercihen" },
            { word: "Bestimmt", meaning: "Kesinlikle" }
        ]
    },
    522: {
        unitId: 522, title: "Tavsiyeler ve Emirler", language: "Almanca", level: "A1",
        story: { 
            text: "Komm bitte schnell her! Mach das Fenster zu, es ist kalt. Lies diesen Text laut ve schreib die Wörter in dein Heft. Sei bitte leise, das Baby schläft gerade.", 
            translation: "Lütfen çabuk buraya gel! Pencereyi kapat, hava soğuk. Bu metni yüksek sesle oku ve kelimeleri defterine yaz. Lütfen sessiz ol, bebek şu an uyuyor." 
        },
        questions: [
            { id: 1, question: "Anlatıcı neden pencerenin kapatılmasını istiyor?", options: ["Gürültü olduğu için", "Hava soğuk olduğu için", "Yağmur yağdığı için"], correctAnswer: "Hava soğuk olduğu için" },
            { id: 2, question: "Metni nasıl okumalı?", options: ["İçinden", "Yüksek sesle", "Yavaşça"], correctAnswer: "Yüksek sesle" },
            { id: 3, question: "Kelimeleri nereye yazmalı?", options: ["Tahtaya", "Defterine", "Kitaba"], correctAnswer: "Defterine" },
            { id: 4, question: "Neden sessiz olunmalı?", options: ["Öğretmen kızdığı için", "Bebek uyuduğu için", "Kütüphanede oldukları için"], correctAnswer: "Bebek uyuduğu için" },
            { id: 5, question: "Anlatıcı başkasına ne yapmasını söylüyor?", options: ["Gitmesini", "Gelmesini", "Uyumasını"], correctAnswer: "Gelmesini" }
        ],
        vocabulary: [
            { word: "Schnell", meaning: "Hızlı/Çabuk" },
            { word: "Fenster", meaning: "Pencere" },
            { word: "Laut", meaning: "Yüksek sesli" },
            { word: "Heft", meaning: "Defter" },
            { word: "Leise", meaning: "Sessiz" }
        ]
    },
    523: {
        unitId: 523, title: "Dün Neredeydin?", language: "Almanca", level: "A1",
        story: { 
            text: "Gestern war ich nicht im Büro. Ich war krank ve hatte Kopfschmerzen. Mein Bruder war bei mir ve hat Suppe gekocht. Wir hatten viel Zeit zum Reden. Heute geht es mir besser.", 
            translation: "Dün ofiste değildim. Hastaydım ve başım ağrıyordu. Erkek kardeşim yanımdaydı ve çorba pişirdi. Konuşmak için çok vaktimiz vardı. Bugün daha iyiyim." 
        },
        questions: [
            { id: 1, question: "Anlatıcı dün neredeydi?", options: ["Ofiste", "Evde (çünkü hastaydı)", "Parkta"], correctAnswer: "Evde (çünkü hastaydı)" },
            { id: 2, question: "Nesi vardı?", options: ["Ateşi", "Baş ağrısı", "Karın ağrısı"], correctAnswer: "Baş ağrısı" },
            { id: 3, question: "Yanında kim vardı?", options: ["Annesi", "Erkek kardeşi", "Arkadaşı"], correctAnswer: "Erkek kardeşi" },
            { id: 4, question: "Erkek kardeşi ne yaptı?", options: ["İlaç getirdi", "Çorba pişirdi", "Müzik çaldı"], correctAnswer: "Çorba pişirdi" },
            { id: 5, question: "Anlatıcı bugün nasıl?", options: ["Hala hasta", "Daha iyi", "Çok yorgun"], correctAnswer: "Daha iyi" }
        ],
        vocabulary: [
            { word: "Gestern", meaning: "Dün" },
            { word: "Krank", meaning: "Hasta" },
            { word: "Kopfschmerzen", meaning: "Baş ağrısı" },
            { word: "Reden", meaning: "Konuşmak" },
            { word: "Besser", meaning: "Daha iyi" }
        ]
    },
    524: {
        unitId: 524, title: "Yardımlaşma", language: "Almanca", level: "A1",
        story: { 
            text: "Ich helfe meiner Oma im Garten. Sie gibt dem Vogel etwas Wasser. Wir schenken dem Nachbarn Blumen. Das gefällt ihm sehr. Später antworten wir den Freunden per E-Mail.", 
            translation: "Bahçede büyükanneme yardım ediyorum. O, kuşa biraz su veriyor. Komşuya çiçekler hediye ediyoruz. Bu onun çok hoşuna gidiyor. Daha sonra arkadaşlara e-posta ile cevap vereceğiz." 
        },
        questions: [
            { id: 1, question: "Anlatıcı kime yardım ediyor?", options: ["Annesine", "Büyükannesine", "Komşusuna"], correctAnswer: "Büyükannesine" },
            { id: 2, question: "Büyükanne kuşa ne veriyor?", options: ["Yem", "Su", "Ekmek"], correctAnswer: "Su" },
            { id: 3, question: "Komşuya ne veriyorlar?", options: ["Meyve", "Çiçek", "Kitap"], correctAnswer: "Çiçek" },
            { id: 4, question: "Komşu bu hediyeyi sevdi mi?", options: ["Hayır", "Evet, çok hoşuna gitti", "Belirtilmemiş"], correctAnswer: "Evet, çok hoşuna gitti" },
            { id: 5, question: "Arkadaşlara nasıl cevap verecekler?", options: ["Telefonla", "E-posta ile", "Mektupla"], correctAnswer: "E-posta ile" }
        ],
        vocabulary: [
            { word: "Helfen", meaning: "Yardım etmek" },
            { word: "Vogel", meaning: "Kuş" },
            { word: "Schenken", meaning: "Hediye etmek" },
            { word: "Nachbar", meaning: "Komşu" },
            { word: "Antworten", meaning: "Cevap vermek" }
        ]
    },
    525: {
        unitId: 525, title: "Teşekkür ve Tebrik", language: "Almanca", level: "A1",
        story: { 
            text: "Ich danke dir für die Hilfe. Morgen hat mein Vater Geburtstag. Ich gratuliere ihm herzlich. Das Geschenk gehört meinem Bruder, es ist eine Kamera. Wir feiern zusammen bir bir Party.", 
            translation: "Yardımın için sana teşekkür ederim. Yarın babamın doğum günü. Onu içtenlikle tebrik ediyorum. Hediye erkek kardeşime ait, o bir kamera. Birlikte bir parti ile kutluyoruz." 
        },
        questions: [
            { id: 1, question: "Anlatıcı neden teşekkür ediyor?", options: ["Hediye için", "Yardım için", "Para için"], correctAnswer: "Yardım için" },
            { id: 2, question: "Yarın kimin doğum günü?", options: ["Anlatıcının", "Babasının", "Erkek kardeşinin"], correctAnswer: "Babasının" },
            { id: 3, question: "Kamera kime ait?", options: ["Babasına", "Erkek kardeşine", "Anlatıcıya"], correctAnswer: "Erkek kardeşine" },
            { id: 4, question: "Kamera ne amaçla orada?", options: ["Doğum günü hediyesi", "Hediye (erkek kardeşine ait)", "Satın alınmış"], correctAnswer: "Hediye (erkek kardeşine ait)" },
            { id: 5, question: "Nasıl kutluyorlar?", options: ["Yemeğe giderek", "Bir parti ile", "Tatile giderek"], correctAnswer: "Bir parti ile" }
        ],
        vocabulary: [
            { word: "Danken", meaning: "Teşekkür etmek" },
            { word: "Geburtstag", meaning: "Doğum günü" },
            { word: "Gratulieren", meaning: "Tebrik etmek" },
            { word: "Geschenk", meaning: "Hediye" },
            { word: "Gehören", meaning: "Ait olmak" }
        ]
    },
    526: {
        unitId: 526, title: "Evden Okula", language: "Almanca", level: "A1",
        story: { 
            text: "Ich komme aus dem Haus ve gehe zur Bushaltestelle. Ich fahre mit dem Bus zur Schule. Seit einem Monat lerne ich intensiv Deutsch. Nach der Schule gehe ich mit meiner Freundin ins Cafe.", 
            translation: "Evden çıkıyorum ve otobüs durağına gidiyorum. Otobüsle okula gidiyorum. Bir aydır yoğun bir şekilde Almanca öğreniyorum. Okuldan sonra kız arkadaşımla kafeye gidiyorum." 
        },
        questions: [
            { id: 1, question: "Anlatıcı evden çıkınca nereye gidiyor?", options: ["Markete", "Otobüs durağına", "Kafeye"], correctAnswer: "Otobüs durağına" },
            { id: 2, question: "Okula neyle gidiyor?", options: ["Yürüyerek", "Otobüsle", "Bisikletle"], correctAnswer: "Otobüsle" },
            { id: 3, question: "Ne kadar süredir Almanca öğreniyor?", options: ["Bir hafta", "Bir ay", "Bir yıl"], correctAnswer: "Bir ay" },
            { id: 4, question: "Almanca çalışması nasıl?", options: ["Yavaş", "Yoğun", "Sadece hafta sonları"], correctAnswer: "Yoğun" },
            { id: 5, question: "Okuldan sonra ne yapıyor?", options: ["Eve gidiyor", "Kız arkadaşıyla kafeye gidiyor", "Uyuyor"], correctAnswer: "Kız arkadaşıyla kafeye gidiyor" }
        ],
        vocabulary: [
            { word: "Aus", meaning: "-den/-dan (çıkış)" },
            { word: "Bushaltestelle", meaning: "Otobüs durağı" },
            { word: "Mit", meaning: "İle" },
            { word: "Seit", meaning: "-den beri" },
            { word: "Nach", meaning: "Sonra" }
        ]
    },
    527: {
        unitId: 527, title: "Eşyaların Yeri", language: "Almanca", level: "A1",
        story: { 
            text: "Wo ist meine Brille? Sie liegt auf dem Tisch oder unter dem Stuhl. Ich stelle die Lampe neben das Bett. Das Buch liegt zwischen den Zeitungen. Jetzt ist alles an seinem Platz.", 
            translation: "Gözlüğüm nerede? Masanın üstünde veya sandalyenin altında duruyor. Lambayı yatağın yanına koyuyorum. Kitap gazetelerin arasında duruyor. Şimdi her şey yerli yerinde." 
        },
        questions: [
            { id: 1, question: "Anlatıcı neyi arıyor?", options: ["Anahtarını", "Gözlüğünü", "Kitabını"], correctAnswer: "Gözlüğünü" },
            { id: 2, question: "Gözlük masanın neresinde olabilir?", options: ["Üstünde", "Yanında", "Arkasında"], correctAnswer: "Üstünde" },
            { id: 3, question: "Lambayı nereye koyuyor?", options: ["Masanın üstüne", "Yatağın yanına", "Dolaba"], correctAnswer: "Yatağın yanına" },
            { id: 4, question: "Kitap nerede duruyor?", options: ["Gazetelerin altında", "Gazetelerin arasında", "Sandalyede"], correctAnswer: "Gazetelerin arasında" },
            { id: 5, question: "Şu an odanın durumu nasıl?", options: ["Dağınık", "Her şey yerli yerinde", "Çok karanlık"], correctAnswer: "Her şey yerli yerinde" }
        ],
        vocabulary: [
            { word: "Brille", meaning: "Gözlük" },
            { word: "Tisch", meaning: "Masa" },
            { word: "Stuhl", meaning: "Sandalye" },
            { word: "Neben", meaning: "Yanına/Yanında" },
            { word: "Zwischen", meaning: "Arasında" }
        ]
    },
    528: {
        unitId: 528, title: "Dün Neler Yaptım? (Perfekt 1)", language: "Almanca", level: "A1",
        story: { 
            text: "Gestern habe ich viel gemacht. Ich habe meine Wohnung geputzt ve danach Deutsch gelernt. Am Nachmittag habe ich einen Film gesehen. Ich bin auch im Park spazieren gegangen. Es war ein schöner Tag.", 
            translation: "Dün çok şey yaptım. Evimi temizledim ve ondan sonra Almanca çalıştım. Öğleden sonra bir film izledim. Ayrıca parkta yürüyüşe çıktım. Güzel bir gündü." 
        },
        questions: [
            { id: 1, question: "Anlatıcı dün evinde ne yaptı?", options: ["Yemek pişirdi", "Temizlik yaptı", "Parti verdi"], correctAnswer: "Temizlik yaptı" },
            { id: 2, question: "Temizlikten sonra ne yaptı?", options: ["Uyudu", "Almanca çalıştı", "Müzik dinledi"], correctAnswer: "Almanca çalıştı" },
            { id: 3, question: "Öğleden sonra ne izledi?", options: ["Haberleri", "Bir film", "Maç"], correctAnswer: "Bir film" },
            { id: 4, question: "Dışarı çıktı mı?", options: ["Evet, parkta yürüdü", "Hayır, evde kaldı", "Sadece markete gitti"], correctAnswer: "Evet, parkta yürüdü" },
            { id: 5, question: "Günü nasıl geçti?", options: ["Kötü", "Sıkıcı", "Güzel"], correctAnswer: "Güzel" }
        ],
        vocabulary: [
            { word: "Geputzt", meaning: "Temizledi" },
            { word: "Gelernt", meaning: "Öğrendi/Çalıştı" },
            { word: "Gesehen", meaning: "Gördü/İzledi" },
            { word: "Spazieren gegangen", meaning: "Yürüyüşe çıktı" },
            { word: "Wohnung", meaning: "Daire/Ev" }
        ]
    },
    529: {
        unitId: 529, title: "Akşam Yemeği (Perfekt 2)", language: "Almanca", level: "A1",
        story: { 
            text: "Um achtzehn Uhr bin ich nach Hause gekommen. Ich habe Suppe ve Pizza gegessen. Danach habe ich Wasser getrunken. Ich habe mit meiner Freundin telefoniert ve lange gelacht. Es war lustig.", 
            translation: "Saat on sekizde eve geldim. Çorba ve pizza yedim. Ondan sonra su içtim. Kız arkadaşımla telefonda konuştum ve uzun süre güldüm. Komikti." 
        },
        questions: [
            { id: 1, question: "Saat kaçta eve geldi?", options: ["17:00", "18:00", "19:00"], correctAnswer: "18:00" },
            { id: 2, question: "Yemekte ne yedi?", options: ["Sadece pizza", "Çorba ve pizza", "Salata"], correctAnswer: "Çorba ve pizza" },
            { id: 3, question: "Yemekten sonra ne içti?", options: ["Kola", "Su", "Çay"], correctAnswer: "Su" },
            { id: 4, question: "Kiminle telefonda konuştu?", options: ["Annesiyle", "Kız arkadaşıyla", "Patronuyla"], correctAnswer: "Kız arkadaşıyla" },
            { id: 5, question: "Konuşma nasıldı?", options: ["Ciddi", "Komikti ve çok güldüler", "Kısaydı"], correctAnswer: "Komikti ve çok güldüler" }
        ],
        vocabulary: [
            { word: "Gekommen", meaning: "Geldi" },
            { word: "Gegessen", meaning: "Yedi" },
            { word: "Getrunken", meaning: "İçti" },
            { word: "Telefoniert", meaning: "Telefonla konuştu" },
            { word: "Lustig", meaning: "Komik/Eğlenceli" }
        ]
    },
    530: {
        unitId: 530, title: "Seyahat Hatıraları (Perfekt 3)", language: "Almanca", level: "A1",
        story: { 
            text: "Letzten Sommer bin ich nach Italien geflogen. Ich bin viel geschwommen ve habe die Sonne genossen. Ich habe viele Fotos gemacht ve Postkarten geschrieben. Ich habe neue Menschen getroffen.", 
            translation: "Geçen yaz İtalya'ya uçtum. Çok yüzdüm ve güneşin tadını çıkardım. Birçok fotoğraf çektim ve kartpostallar yazdım. Yeni insanlarla tanıştım." 
        },
        questions: [
            { id: 1, question: "Geçen yaz nereye gitti?", options: ["Almanya", "İtalya", "Fransa"], correctAnswer: "İtalya" },
            { id: 2, question: "İtalya'ya nasıl gitti?", options: ["Trenle", "Uçakla", "Arabayla"], correctAnswer: "Uçakla" },
            { id: 3, question: "Denizde ne yaptı?", options: ["Yelken yaptı", "Çok yüzdü", "Balık tuttu"], correctAnswer: "Çok yüzdü" },
            { id: 4, question: "Kimlere yazdı?", options: ["E-posta yazdı", "Kartpostallar yazdı", "Mektup yazdı"], correctAnswer: "Kartpostallar yazdı" },
            { id: 5, question: "Yeni arkadaşlıklar edindi mi?", options: ["Hayır", "Yalnız kaldı", "Evet, yeni insanlarla tanıştı"], correctAnswer: "Evet, yeni insanlarla tanıştı" }
        ],
        vocabulary: [
            { word: "Geflogen", meaning: "Uçtu" },
            { word: "Geschwommen", meaning: "Yüzdü" },
            { word: "Fotos gemacht", meaning: "Fotoğraf çekti" },
            { word: "Geschrieben", meaning: "Yazdı" },
            { word: "Getroffen", meaning: "Tanıştı/Buluştu" }
        ]
    },
};

export function getGermanA1ReadingForUnit(unitId: number): UnitReading {
    return readings[unitId] || readings[501];
}
