import { UnitSpeaking } from './speakings';

const speakings: { [key: number]: UnitSpeaking } = {
    501: {
        unitId: 501, title: "Tanışma Pratiği", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hallo, ich heiße Max.", translation: "Merhaba, benim adım Max." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Freut mich, dich kennen zu lernen.", translation: "Tanıştığımıza memnun oldum." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Guten Morgen, wie geht es Ihnen?", translation: "Günaydın, nasılsınız?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich komme aus Deutschland.", translation: "Almanya'dan geliyorum." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Entschuldigung, ich verstehe das nicht.", translation: "Affedersiniz, bunu anlamıyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Können Sie das bitte wiederholen?", translation: "Lütfen bunu tekrar edebilir misiniz?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich spreche nur ein bisschen Deutsch.", translation: "Sadece biraz Almanca konuşuyorum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie heißt du?", translation: "Adın ne?", expectedKeywords: ["ich", "heiße"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie geht es dir?", translation: "Nasılsın?", expectedKeywords: ["gut", "danke", "geht"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Woher kommen Sie?", translation: "Nerelisiniz?", expectedKeywords: ["komme", "aus", "türkei", "deutschland"] }
        ]
    },
    502: {
        unitId: 502, title: "Sayı Pratiği", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich bin zwanzig Jahre alt.", translation: "Ben yirmi yaşındayım." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eins, zwei, drei, vier, fünf.", translation: "Bir, iki, üç, dört, beş." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sechs, sieben, acht, neun, zehn.", translation: "Altı, yedi, sekiz, dokuz, on." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das macht fünfzehn Euro.", translation: "Bu on beş Euro eder." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe zwei Schwestern.", translation: "İki kız kardeşim var." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein Brötchen und zwei Eier.", translation: "Bir sandviç ekmeği ve iki yumurta." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sind zu dritt.", translation: "Üç kişiyiz." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie alt bist du?", translation: "Kaç yaşındasın?", expectedKeywords: ["bin", "jahre", "alt"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie ist deine Telefonnummer?", translation: "Telefon numaran ne?", expectedKeywords: ["meine", "nummer", "null", "eins"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was kostet das?", translation: "Bu ne kadar?", expectedKeywords: ["euro", "kostet"] }
        ]
    },
    503: {
        unitId: 503, title: "Aile Pratiği", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein Vater ist Lehrer.", translation: "Babam öğretmendir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Meine Mutter arbeitet als Ärztin.", translation: "Annem bir doktor olarak çalışıyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich liebe meine Familie.", translation: "Ailemi seviyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein Bruder lernt Englisch.", translation: "Erkek kardeşim İngilizce öğreniyor." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Meine Großeltern wohnen in Berlin.", translation: "Büyükannem ve büyükbabam Berlin'de yaşıyor." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hast du Kinder?", translation: "Çocukların var mı?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das ist mein Sohn.", translation: "Bu benim oğlum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du Geschwister?", translation: "Kardeşin var mı?", expectedKeywords: ["habe", "geschwister", "bruder", "schwester"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie viele Personen seid ihr?", translation: "Kaç kişisiniz?", expectedKeywords: ["wir", "sind", "personen"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie heißt dein Bruder?", translation: "Erkek kardeşinin adı ne?", expectedKeywords: ["mein", "bruder", "heißt"] }
        ]
    },
    504: {
        unitId: 504, title: "Renk Pratiği", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Himmel ist blau.", translation: "Gökyüzü mavidir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Auto ist rot.", translation: "Araba kırmızıdır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Sonne ist gelb.", translation: "Güneş sarıdır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Grün ist meine Lieblingsfarbe.", translation: "Yeşil benim en sevdiğim renktir." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Blatt ist grün.", translation: "Yaprak yeşildir." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Meine Tasche ist schwarz.", translation: "Çantam siyah." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Milch ist weiß.", translation: "Süt beyazdır." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was ist deine Lieblingsfarbe?", translation: "En sevdiğin renk ne?", expectedKeywords: ["meine", "lieblingsfarbe", "ist"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist der Apfel grün?", translation: "Elma yeşil mi?", expectedKeywords: ["ja", "nein", "apfel", "ist"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welche Farbe hat dein Auto?", translation: "Araban ne renk?", expectedKeywords: ["mein", "auto", "ist", "rot", "blau"] }
        ]
    },
    505: {
        unitId: 505, title: "Eşyalar", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das ist ein Tisch.", translation: "Bu bir masadır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich brauche einen Stuhl.", translation: "Bir sandalyeye ihtiyacım var." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo ist mein Buch?", translation: "Kitabım nerede?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Lampe ist neu.", translation: "Lamba yeni." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe einen Kuli.", translation: "Bir tükenmez kalemim var." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Fenster ist offen.", translation: "Pencere açık." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Tür ist geschlossen.", translation: "Kapı kapalı." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was ist das?", translation: "Bu nedir?", expectedKeywords: ["das", "ist", "ein", "buch", "tisch"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du ein Handy?", translation: "Cep telefonun var mı?", expectedKeywords: ["ja", "habe", "handy"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Brauchst du Hilfe?", translation: "Yardıma ihtiyacın var mı?", expectedKeywords: ["ja", "nein", "hilfe"] }
        ]
    },
    506: {
        unitId: 506, title: "Okul", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich lerne Deutsch.", translation: "Almanca öğreniyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ist das dein Heft?", translation: "Bu senin defterin mi?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Klassenzimmer ist groß.", translation: "Sınıf büyük." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir lesen einen Text.", translation: "Bir metin okuyoruz." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Schreiben Sie bitte an die Tafel.", translation: "Lütfen tahtaya yazınız." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Habe ich eine Hausaufgabe?", translation: "Ödevim var mı?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Lehrerin erklärt die Grammatik.", translation: "Bayan öğretmen dil bilgisini açıklıyor." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was lernst du?", translation: "Ne öğreniyorsun?", expectedKeywords: ["ich", "lerne", "deutsch"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du einen Kuli?", translation: "Tükenmez kalemin var mı?", expectedKeywords: ["ja", "habe", "kuli"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Verstehst du alles?", translation: "Her şeyi anlıyor musun?", expectedKeywords: ["ja", "verstehe", "nein", "nicht"] }
        ]
    },
    507: {
        unitId: 507, title: "Günler", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Heute ist Montag.", translation: "Bugün Pazartesi." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Am Wochenende habe ich frei.", translation: "Hafta sonu boşum/izinliyim." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Morgen ist Dienstag.", translation: "Yarın Salı." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Freitag ist mein Lieblingstag.", translation: "Cuma benim en sevdiğim gündür." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Am Mittwoch gehe ich schwimmen.", translation: "Çarşamba günü yüzmeye gidiyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Donnerstag habe ich viel Arbeit.", translation: "Perşembe çok işim var." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sonntag bleibe ich zu Hause.", translation: "Pazar günü evde kalıyorum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welcher Tag ist heute?", translation: "Bugün hangi gün?", expectedKeywords: ["heute", "ist", "montag", "dienstag"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Arbeitest du am Samstag?", translation: "Cumartesi çalışıyor musun?", expectedKeywords: ["nein", "ich", "arbeite", "nicht"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was machst du am Wochenende?", translation: "Hafta sonu ne yapıyorsun?", expectedKeywords: ["ich", "besuche", "freunde", "mache", "sport"] }
        ]
    },
    508: {
        unitId: 508, title: "Hobiler", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich spiele gern Fußball.", translation: "Futbol oynamayı severim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Meine Hobbys sind Tanzen und Musik.", translation: "Hobilerim dans etmek ve müzik." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich wandere oft im Wald.", translation: "Sık sık ormanda yürüyüş yaparım." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Spielst du ein Instrument?", translation: "Bir enstrüman çalıyor musun?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Fotografieren macht Spaß.", translation: "Fotoğraf çekmek eğlencelidir." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir kochen am Abend zusammen.", translation: "Akşam birlikte yemek pişiriyoruz." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich lerne gern neue Sprachen.", translation: "Yeni diller öğrenmeyi severim." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was machst du gern?", translation: "Ne yapmayı seversin?", expectedKeywords: ["ich", "lese", "schwimme", "gern"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hörst du gern Musik?", translation: "Müzik dinlemeyi sever misin?", expectedKeywords: ["ja", "höre", "musik"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Gehst du oft ins Kino?", translation: "Sık sık sinemaya gider misin?", expectedKeywords: ["ja", "nein", "oft", "kino"] }
        ]
    },
    509: {
        unitId: 509, title: "Yemekler", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich esse gern Pasta.", translation: "Makarna yemeyi severim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein Brötchen und ein Kaffee, bitte.", translation: "Bir sandviç ekmeği ve bir kahve, lütfen." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte einen Orangensaft.", translation: "Portakal suyu istiyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie Käse und Brot?", translation: "Peyniriniz ve ekmeğiniz var mı?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Frühstück ist fertig.", translation: "Kahvaltı hazır." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "İch koche heute eine Suppe.", translation: "Bugün bir çorba pişiriyorum." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Guten Appetit!", translation: "Afiyet olsun!" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was ist dein Lieblingsessen?", translation: "En sevdiğin yemek ne?", expectedKeywords: ["lieblingsessen", "ist", "pizza"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Magst du Äpfel?", translation: "Elma sever misin?", expectedKeywords: ["ja", "mag", "äpfel"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was trinkst du gern?", translation: "Ne içmeyi seversin?", expectedKeywords: ["wasser", "saft", "kaffee", "trinke"] }
        ]
    },
    510: {
        unitId: 510, title: "Şehir", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo wohnst du?", translation: "Nerede yaşıyorsun?" },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Stadt ist sehr schön.", translation: "Şehir çok güzel." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich besuche ein Museum.", translation: "Bir müzeyi ziyaret ediyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gibt es hier einen Park?", translation: "Burada bir park var mı?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Zentrum ist sehr laut.", translation: "Merkez çok gürültülü." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich nehme den Bus.", translation: "Otobüse biniyorum." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo ist die Post?", translation: "Postane nerede?" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo liegt Berlin?", translation: "Berlin nerededir?", expectedKeywords: ["deutschland", "berlin", "liegt"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Kommst du aus der Türkei?", translation: "Türkiye'den mi geliyorsun?", expectedKeywords: ["ja", "bin", "aus", "türkei"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo ist der Supermarkt?", translation: "Süpermarket nerede?", expectedKeywords: ["nah", "links", "rechts", "da"] }
        ]
    },
    511: {
        unitId: 511, title: "Vücut Bölümleri", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein Arm tut weh.", translation: "Kolum ağrıyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe Kopfschmerzen.", translation: "Başım ağrıyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Deine Augen sind blau.", translation: "Gözlerin mavi." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein Mund ist trocken.", translation: "Ağzım kuru." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er hat lange Haare.", translation: "Uzun saçları var." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich benutze meine Hände.", translation: "Ellerimi kullanıyorum." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Arzt untersucht den Bauch.", translation: "Doktor karnı muayene ediyor." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was tut dir weh?", translation: "Neren ağrıyor?", expectedKeywords: ["mein", "rücken", "bein", "weh"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du Fieber?", translation: "Ateşin var mı?", expectedKeywords: ["ja", "nein", "habe", "fieber"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo sind meine Brillen?", translation: "Gözlüğüm nerede?", expectedKeywords: ["da", "tisch", "augen"] }
        ]
    },
    512: {
        unitId: 512, title: "Zıtlıklar", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Haus ist groß und alt.", translation: "Ev büyük ve eski." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Kaffee ist zu heiß.", translation: "Kahve çok sıcak." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Dieser Film ist langweilig.", translation: "Bu film sıkıcı." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein Bett ist bequem.", translation: "Yatağım rahat." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Dieser Weg ist kurz.", translation: "Bu yol kısa." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Nacht ist dunkel.", translation: "Gece karanlık." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Zucker ist süß, Zitrone ist sauer.", translation: "Şeker tatlı, limon ekşi." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist das Zimmer klein?", translation: "Oda küçük mü?", expectedKeywords: ["ja", "nein", "zimmer", "ist"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie ist das Wetter?", translation: "Hava nasıl?", expectedKeywords: ["kalt", "warm", "schön"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist der Tee kalt?", translation: "Çay soğuk mu?", expectedKeywords: ["nein", "heiß", "ist"] }
        ]
    },
    513: {
        unitId: 513, title: "Modal Fiiller", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich kann Deutsch sprechen.", translation: "Almanca konuşabiliyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir müssen heute arbeiten.", translation: "Bugün çalışmamız gerekiyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Darf ich dich etwas fragen?", translation: "Sana bir şey sorabilir miyim?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich will nach Hause gehen.", translation: "Eve gitmek istiyorum." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Soll ich das Brot kaufen?", translation: "Ekmeği almalı mıyım?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man darf hier nicht parken.", translation: "Buraya park etmek yasaktır." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir möchten einen Kaffee trinken.", translation: "Bir kahve içmek istiyoruz." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was kannst du machen?", translation: "Ne yapabilirsin?", expectedKeywords: ["ich", "kann", "schwimmen", "kochen"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Darf ich hier rauchen?", translation: "Burada sigara içebilir miyim?", expectedKeywords: ["nein", "nicht", "darf"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Musst du am Sonntag arbeiten?", translation: "Pazar günü çalışmak zorunda mısın?", expectedKeywords: ["nein", "frei", "nicht"] }
        ]
    },
    514: {
        unitId: 514, title: "Meslekler", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Was bist du von Beruf?", translation: "Mesleğin ne?" },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich arbeite als Ingenieur.", translation: "Mühendis olarak çalışıyorum." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Meine Schwester ist Krankenschwester.", translation: "Kız kardeşim hemşiredir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er möchte Pilot werden.", translation: "Pilot olmak istiyor." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Verkäuferin ist sehr nett.", translation: "Satış elemanı kadın çok nazik." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sind Sie Polizist?", translation: "Polis misiniz?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich bin zurzeit arbeitslos.", translation: "Şu an işsizim." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Arbeitest du in einem Büro?", translation: "Bir ofiste mi çalışıyorsun?", expectedKeywords: ["ja", "nein", "ich", "arbeite"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Möchtest du Lehrer werden?", translation: "Öğretmen olmak ister misin?", expectedKeywords: ["vielleicht", "ja", "möchte"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo arbeiten Sie?", translation: "Nerede çalışıyorsunuz?", expectedKeywords: ["schule", "firma", "krankenhaus"] }
        ]
    },
    515: {
        unitId: 515, title: "Yönler", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gehen Sie nach rechts.", translation: "Sağa gidiniz." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Museum ist geradeaus.", translation: "Müze düz ileride." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Biegen Sie links ab.", translation: "Sola dönün." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Bahnhof ist in der Nähe.", translation: "İstasyon yakında." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Überqueren Sie die Straße.", translation: "Caddeden karşıya geçin." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Apotheke ist gegenüber.", translation: "Eczane karşıda." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "An der Ampel rechts gehen.", translation: "Trafik ışığında sağa gidin." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo ist die Bank?", translation: "Banka nerede?", expectedKeywords: ["links", "rechts", "da"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist das Kino weit von hier?", translation: "Sinema buradan uzak mı?", expectedKeywords: ["nein", "nah", "weit", "ist"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie komme ich zum Hotel?", translation: "Otele nasıl giderim?", expectedKeywords: ["bus", "taxi", "zu", "fuß"] }
        ]
    },
    516: {
        unitId: 516, title: "Ulaşım", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich fahre mit dem Zug.", translation: "Trenle gidiyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Flugzeug startet um neun Uhr.", translation: "Uçak saat dokuzda kalkıyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich nehme die U-Bahn.", translation: "Metroya biniyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie ein Ticket?", translation: "Biletiniz var mı?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo ist der Hafen?", translation: "Liman nerede?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Taxi wartet draußen.", translation: "Taksi dışarıda bekliyor." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich gehe lieber zu Fuß.", translation: "Yürümeyi tercih ederim." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie kommst du zur Arbeit?", translation: "İşe nasıl geliyorsun?", expectedKeywords: ["bus", "auto", "zug", "mit"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du ein Fahrrad?", translation: "Bisikletin var mı?", expectedKeywords: ["ja", "fahre", "fahrrad"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wann kommt die Straßenbahn?", translation: "Tramvay ne zaman geliyor?", expectedKeywords: ["minuten", "gleich", "viertel"] }
        ]
    },
    517: {
        unitId: 517, title: "Ayrılan Fiiller", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich rufe dich an.", translation: "Seni arıyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wann fängt der Film an?", translation: "Film ne zaman başlıyor?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich kaufe im Supermarkt ein.", translation: "Süpermarkette alışveriş yapıyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sehen heute Abend fern.", translation: "Bu akşam televizyon izliyoruz." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er räumt sein Zimmer auf.", translation: "Odasını topluyor." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Bitte machen Sie das Licht aus.", translation: "Lütfen ışığı kapatın." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wann kommen Sie zurück?", translation: "Ne zaman geri gelirsiniz?" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wann stehst du auf?", translation: "Ne zaman kalkıyorsun?", expectedKeywords: ["ich", "stehe", "um", "uhr", "auf"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Kaufst du heute ein?", translation: "Bugün alışveriş yapıyor musun?", expectedKeywords: ["ja", "kaufe", "ein"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wann geht die Sonne auf?", translation: "Güneş ne zaman doğar?", expectedKeywords: ["morgen", "früh", "uhr"] }
        ]
    },
    518: {
        unitId: 518, title: "Saatler", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wie spät ist es?", translation: "Saat kaç?" },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist halb acht.", translation: "Saat yedi buçuk." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist Viertel nach neun.", translation: "Dokuzu çeyrek geçiyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Unterricht dauert eine Stunde.", translation: "Ders bir saat sürer." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich komme in zehn Minuten.", translation: "On dakika içinde geliyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist genau Mittag.", translation: "Tam öğle vakti." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir treffen uns um sieben Uhr.", translation: "Saat yedide buluşuyoruz." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Um wie viel Uhr beginnt der Kurs?", translation: "Kurs saat kaçta başlıyor?", expectedKeywords: ["kurs", "beginnt", "um", "uhr"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du um zwei Uhr Zeit?", translation: "Saat ikide vaktin var mı?", expectedKeywords: ["ja", "nein", "habe", "zeit"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wann gehst du zur Arbeit?", translation: "Ne zaman işe gidiyorsun?", expectedKeywords: ["um", "uhr", "morgens"] }
        ]
    },
    519: {
        unitId: 519, title: "Hava Durumu", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es regnet heute.", translation: "Bugün yağmur yağıyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Morgen wird es sonnig sein.", translation: "Yarın güneşli olacak." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist sehr windig draußen.", translation: "Dışarısı çok rüzgarlı." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Schnee ist weiß und kalt.", translation: "Kar beyaz ve soğuktur." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Im Sommer ist es heiß.", translation: "Yazın hava sıcaktır." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es gibt heute viele Wolken.", translation: "Bugün çok bulut var." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wie ist die Temperatur?", translation: "Sıcaklık kaç derece?" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie ist das Wetter in Istanbul?", translation: "İstanbul'da hava nasıl?", expectedKeywords: ["ist", "heiß", "kalt", "windig"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Magst du Schnee?", translation: "Kar sever misin?", expectedKeywords: ["ja", "liebe", "schnee"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Brauchen wir einen Regenschirm?", translation: "Şemsiyeye ihtiyacımız var mı?", expectedKeywords: ["ja", "regnet", "schrim"] }
        ]
    },
    520: {
        unitId: 520, title: "Boş Zaman", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich treffe Freunde.", translation: "Arkadaşlarımı buluyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir gehen ins Kino.", translation: "Sinemaya gidiyoruz." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich lese ein spannendes Buch.", translation: "Heyecanlı bir kitap okuyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hörst du gern Radio?", translation: "Radyo dinlemeyi sever misin?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir spielen am Abend Karten.", translation: "Akşamları kağıt oynuyoruz." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich schwimme gern im See.", translation: "Göl kenarında yüzmeyi severim." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mein Hobby ist Malen.", translation: "Hobim resim yapmak." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was machst du am Abend?", translation: "Akşam ne yapıyorsun?", expectedKeywords: ["ich", "lese", "fernsehen", "buche"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Gehst du gern spazieren?", translation: "Yürüyüş yapmayı sever misin?", expectedKeywords: ["ja", "gerne", "park"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was sind deine Hobbys?", translation: "Hobilerin neler?", expectedKeywords: ["meine", "hobbys", "sind"] }
        ]
    },
    521: {
        unitId: 521, title: "Duygular", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich bin glücklich.", translation: "Mutluyum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Warum bist du traurig?", translation: "Neden üzgünsün?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe heute gute Laune.", translation: "Bugün keyfim yerinde." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Bist du böse auf mich?", translation: "Bana kızgın mısın?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe Angst vor Hunden.", translation: "Köpeklerden korkarım." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sind sehr überrascht.", translation: "Çok şaşırdık." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er ist im Moment nervös.", translation: "O şu an gergin." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie fühlst du dich heute?", translation: "Bugün nasıl hissediyorsun?", expectedKeywords: ["ich", "fühle", "mich", "gut", "müde"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Bist du müde?", translation: "Yorgun musun?", expectedKeywords: ["ja", "nein", "bin", "müde"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Bist du hungrig?", translation: "Aç mısın?", expectedKeywords: ["ja", "essen", "möchte"] }
        ]
    },
    522: {
        unitId: 522, title: "Yol Tarifi", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo ist der Bahnhof?", translation: "İstasyon nerede?" },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gehen Sie immer geradeaus.", translation: "Daima düz gidiniz." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Bank ist um die Ecke.", translation: "Banka köşenin başında." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Nehmen Sie die zweite Straße links.", translation: "İkinci sokağı sola dönün." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist nicht weit von hier.", translation: "Buradan uzak değil." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Hotel ist auf der rechten Seite.", translation: "Otel sağ tarafta." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Parken Sie vor dem Haus.", translation: "Evin önünde park edin." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Entschuldigung, wie komme ich zum Park?", translation: "Affedersiniz, parka nasıl giderim?", expectedKeywords: ["links", "rechts", "da"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist das Stadtzentrum nah?", translation: "Şehir merkezi yakın mı?", expectedKeywords: ["ja", "ist", "nah", "weit"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo finde ich ein Taxi?", translation: "Nerede taksi bulabilirim?", expectedKeywords: ["draußen", "platz", "ende"] }
        ]
    },
    523: {
        unitId: 523, title: "Günlük Rutin", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich frühstücke um sieben Uhr.", translation: "Saat yedide kahvaltı yaparım." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Abends sehe ich fern.", translation: "Akşamları televizyon izlerim." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich stehe jeden Tag früh auf.", translation: "Her gün erken kalkarım." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Um acht Uhr fahre ich zur Arbeit.", translation: "Saat sekizde işe giderim." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich mache eine Mittagspause.", translation: "Öğle arası veririm." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Nach der Arbeit gehe ich einkaufen.", translation: "İşten sonra alışverişe giderim." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich putze mir die Zähne.", translation: "Dişlerimi fırçalarım." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wann gehst du schlafen?", translation: "Ne zaman uyumaya gidiyorsun?", expectedKeywords: ["ich", "gehe", "um", "uhr", "ins", "bett"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wann isst du zu Mittag?", translation: "Öğle yemeğini ne zaman yiyorsun?", expectedKeywords: ["um", "zwölf", "uhr"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was machst du am Morgen?", translation: "Sabah ne yaparsın?", expectedKeywords: ["ich", "trinke", "kaffee", "dusche"] }
        ]
    },
    524: {
        unitId: 524, title: "Gelecek", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich werde morgen Deutsch lernen.", translation: "Yarın Almanca öğreneceğim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir werden am Samstag wandern.", translation: "Cumartesi günü yürüyüş (doğa) yapacağız." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es wird bald regnen.", translation: "Yakında yağmur yağacak." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wirst du das Auto kaufen?", translation: "Arabayı satın alacak mısın?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich werde im Sommer verreisen.", translation: "Yazın seyahat edeceğim." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sie wird bald fertig sein.", translation: "O yakında hazır olacak." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir werden zusammen kochen.", translation: "Birlikte yemek pişireceğiz." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was wirst du am Wochenende machen?", translation: "Hafta sonu ne yapacaksın?", expectedKeywords: ["ich", "werde", "schwimmen", "schlafen"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wirst du mich anrufen?", translation: "Beni arayacak mısın?", expectedKeywords: ["ja", "werde", "dich", "anrufen"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo wirst du wohnen?", translation: "Nerede yaşayacaksın?", expectedKeywords: ["ich", "werde", "in", "berlin", "wohnen"] }
        ]
    },
    525: {
        unitId: 525, title: "Perfekt Zaman", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe gestern Pizza gegessen.", translation: "Dün pizza yedim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sind im Meer geschwommen.", translation: "Denizde yüzdük." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hast du das Buch gelesen?", translation: "Kitabı okudun mu?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er ist nach Hause gegangen.", translation: "O eve gitti." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir haben viel gelacht.", translation: "Çok güldük." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe meine Hausaufgaben gemacht.", translation: "Ödevlerimi yaptım." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sie hat gestern angerufen.", translation: "Dün aradı." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was hast du gestern gemacht?", translation: "Dün ne yaptın?", expectedKeywords: ["ich", "habe", "gelernt", "gearbeitet", "geschlafen"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Bist du nach Berlin gefahren?", translation: "Berlin'e gittin mi?", expectedKeywords: ["ja", "bin", "nach", "berlin", "gefahren"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was hast du getrunken?", translation: "Ne içtin?", expectedKeywords: ["ich", "habe", "cola", "wasser", "saft"] }
        ]
    },
    526: {
        unitId: 526, title: "Lokasyon", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich bin zu Hause.", translation: "Evdeyim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Katze liegt unter dem Tisch.", translation: "Kedi masanın altında yatıyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Bild hängt an der Wand.", translation: "Resim duvarda asılı." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Schlüssel liegt in der Tasche.", translation: "Anahtar çantanın içinde duruyor." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich sitze auf dem Stuhl.", translation: "Sandalyede oturuyorum." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Kinder spielen vor dem Haus.", translation: "Çocuklar evin önünde oynuyorlar." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Supermarkt ist hinter der Bank.", translation: "Süpermarket bankanın arkasında." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo bist du gerade?", translation: "Şu an neredesin?", expectedKeywords: ["ich", "bin", "in", "schule", "büro"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist das Buch auf dem Regal?", translation: "Kitap rafın üzerinde mi?", expectedKeywords: ["ja", "auf", "regal"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wo liegt dein Handy?", translation: "Cep telefonun nerede duruyor?", expectedKeywords: ["auf", "tisch", "in", "tasche"] }
        ]
    },
    527: {
        unitId: 527, title: "Alışveriş", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Was kostet das?", translation: "Bu ne kadar?" },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie Tomaten?", translation: "Domatesiniz var mı?" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich suche ein blaues Hemd.", translation: "Mavi bir gömlek arıyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Kleid steht size gut.", translation: "Elbise size çok yakışıyor." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kann ich mit Karte zahlen?", translation: "Kartla ödeyebilir miyim?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das ist ein Sonderangebot.", translation: "Bu bir özel teklif/indirim." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte diese Schuhe anprobieren.", translation: "Bu ayakkabıları denemek istiyorum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie kann ich Ihnen helfen?", translation: "Size nasıl yardımcı olabilirim?", expectedKeywords: ["ich", "suche", "hose", "hemd"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist das zu teuer?", translation: "Bu çok mu pahalı?", expectedKeywords: ["nein", "billig", "ist"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Haben Sie eine Tüte?", translation: "Poşetiniz var mı?", expectedKeywords: ["ja", "brauche", "tüte"] }
        ]
    },
    528: {
        unitId: 528, title: "Restoran", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Rechnung, bitte.", translation: "Hesap, lütfen." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich möchte ein Glas Wasser.", translation: "Bir bardak su istiyorum." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Einen Tisch für zwei Personen, bitte.", translation: "İki kişilik bir masa, lütfen." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Haben Sie eine Speisekarte auf Englisch?", translation: "İngilizce menünüz var mı?" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Was können Sie empfehlen?", translation: "Ne tavsiye edebilirsiniz?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Essen war sehr lecker.", translation: "Yemek çok lezzetliydi." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Zahlen, bitte!", translation: "Ödeme, lütfen!" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Haben Sie reserviert?", translation: "Rezervasyon yaptırdınız mı?", expectedKeywords: ["ja", "nein", "habe"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was möchten Sie trinken?", translation: "Ne içmek istersiniz?", expectedKeywords: ["ich", "möchte", "saft", "cola", "bier"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hat es Ihnen geschmeckt?", translation: "Yemeği beğendiniz mi?", expectedKeywords: ["gut", "sehr", "lecker"] }
        ]
    },
    529: {
        unitId: 529, title: "Seyahat", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Schönen Urlaub!", translation: "İyi tatiller!" },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich suche mein Hotel.", translation: "Otelimi arıyorum." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wo kann ich Geld wechseln?", translation: "Nerede para bozdurabilirim?" },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich brauche ein einfaches Ticket.", translation: "Tek yön bir bilete ihtiyacım var." },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wie lange dauert die Fahrt?", translation: "Yolculuk ne kadar sürer?" },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ist dieser Platz noch frei?", translation: "Bu yer hala boş mu?" },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich mache eine Stadtrundfahrt.", translation: "Şehir turu yapıyorum." },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wohin fliegst du?", translation: "Nereye uçuyorsun?", expectedKeywords: ["nach", "deutschland", "spanien"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du deinen Pass?", translation: "Pasaportun yanında mı?", expectedKeywords: ["ja", "habe", "pass"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wann fährt der nächste Zug?", translation: "Bir sonraki tren ne zaman kalkıyor?", expectedKeywords: ["um", "stunde", "gleich"] }
        ]
    },
    530: {
        unitId: 530, title: "Vedalaşma", language: "Almanca", level: "A1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Auf Wiedersehen!", translation: "Görüşmek üzere!" },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Bis bald!", translation: "Yakında görüşürüz!" },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gute Nacht und schlaf gut.", translation: "İyi geceler ve iyi uykular." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mach es gut!", translation: "Kendine iyi bak!" },
            { id: 5, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Meld dich mal wieder.", translation: "Tekrar haberleşelim." },
            { id: 6, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Komm gut nach Hause.", translation: "Eve sağ salim git." },
            { id: 7, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Einen schönen Tag noch!", translation: "İyi günler dilerim!" },
            { id: 8, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wann sehen wir uns wieder?", translation: "Ne zaman tekrar görüşürüz?", expectedKeywords: ["morgen", "nächste", "woche"] },
            { id: 9, type: "respond", prompt: "Bu soruya cevap ver:", text: "Alles Gute!", translation: "Her şey gönlünce olsun!", expectedKeywords: ["danke", "dir", "auch"] },
            { id: 10, type: "respond", prompt: "Bu soruya cevap ver:", text: "Schreibst du mir eine Nachricht?", translation: "Bana mesaj yazar mısın?", expectedKeywords: ["ja", "natürlich", "werde"] }
        ]
    },
};

export function getGermanA1SpeakingForUnit(unitId: number): UnitSpeaking {
    return speakings[unitId] || speakings[501];
}
