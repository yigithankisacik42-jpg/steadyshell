import { UnitLecture } from './lectures';

const lectures: { [key: number]: UnitLecture } = {
    501: {
        unitId: 501, title: "Begrüßung & Vorstellen", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Merhaba! 👋", content: "Almanca öğrenme maceranıza hoş geldiniz! Bu ilk dersimizde kendimizi tanıtmayı ve temel selamlaşmaları öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Temel Selamlaşmalar", words: [
                { target: "Hallo", native: "Merhaba", pronunciation: "ha-lo" },
                { target: "Guten Tag", native: "İyi günler", pronunciation: "gu-ten tak" },
                { target: "Guten Morgen", native: "Günaydın", pronunciation: "gu-ten mor-gen" },
                { target: "Guten Abend", native: "İyi akşamlar", pronunciation: "gu-ten a-bent" },
                { target: "Gute Nacht", native: "İyi geceler", pronunciation: "gu-te naht" }
            ]},
            { id: 3, type: "grammar", title: "İsim Sorma ve Söyleme", rules: [
                { rule: "Wie heißen Sie?", explanation: "Adınız nedir? (Nazik form)", examples: ["Ich heiße Max."] },
                { rule: "Wer bist du?", explanation: "Sen kimsin?", examples: ["Ich bin Anna."] }
            ]},
            { id: 4, type: "culture", title: "Küçük Bir İpucu", content: "Almancada 'Gute Nacht' sadece yatarken söylenir. Akşam bir yere girdiğinizde 'Guten Abend' demelisiniz." }
        ]
    },
    502: {
        unitId: 502, title: "Zahlen 1-20", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Sayılar Sayalım! 🔢", content: "Bu derste 0'dan 20'ye kadar olan sayıları ve Almanca sayı sisteminin mantığını öğreneceğiz." },
            { id: 2, type: "table", title: "0-12 Arası Sayılar", headers: ["Sayı", "Almanca", "Okunuş"], rows: [
                ["0", "Null", "nul"], ["1", "eins", "ayns"], ["2", "zwei", "tsvay"], ["3", "drei", "dray"], ["4", "vier", "fir"], ["5", "fünf", "fünf"], ["6", "sechs", "zeks"], ["7", "sieben", "zi-ben"], ["8", "acht", "aht"], ["9", "neun", "noyn"], ["10", "zehn", "tseyn"], ["11", "elf", "elf"], ["12", "zwölf", "tsövlf"]
            ]},
            { id: 3, type: "grammar", title: "13-19 Arası Mantık", rules: [
                { rule: "Sayı + zehn", explanation: "13'ten 19'a kadar sayılar, birler basamağına 'zehn' (10) eklenerek oluşturulur.", examples: ["drei + zehn = dreizehn", "vier + zehn = vierzehn"] }
            ]},
            { id: 4, type: "vocabulary", title: "Önemli Sayılar", words: [
                { target: "zwanzig", native: "yirmi", pronunciation: "tsvan-tsıh" },
                { target: "einhundert", native: "yüz", pronunciation: "ayn-hun-dert" }
            ]},
            { id: 5, type: "culture", title: "Unutma!", content: "16 (sechzehn) ve 17 (siebzehn) sayılarında köklerdeki bazı harfler düşer. Dikkatli ol!" }
        ]
    },
    503: {
        unitId: 503, title: "Familie & Verwandte", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Ailemiz 👨‍👩‍👧‍👦", content: "Bu derste aile üyelerini ve akrabalarımızı Almanca olarak nasıl ifade edeceğimizi öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Çekirdek Aile", words: [
                { target: "der Vater", native: "Baba", pronunciation: "der fa-ter" },
                { target: "die Mutter", native: "Anne", pronunciation: "di mu-ter" },
                { target: "der Bruder", native: "Erkek kardeş", pronunciation: "der bru-der" },
                { target: "die Schwester", native: "Kız kardeş", pronunciation: "di şves-ter" },
                { target: "das Kind", native: "Çocuk", pronunciation: "das kint" }
            ]},
            { id: 3, type: "vocabulary", title: "Akrabalar", words: [
                { target: "der Opa", native: "Dede", pronunciation: "der o-pa" },
                { target: "die Oma", native: "Anneanne/Babaanne", pronunciation: "di o-ma" },
                { target: "der Onkel", native: "Amca/Dayı", pronunciation: "der on-kıl" },
                { target: "die Tante", native: "Hala/Teyze", pronunciation: "di tan-tı" }
            ]},
            { id: 4, type: "culture", title: "Artikellere Dikkat!", content: "Erkek aile üyeleri 'der', kadın aile üyeleri 'die' artikeli alır. Bu kural işini çok kolaylaştıracak!" }
        ]
    },
    504: {
        unitId: 504, title: "Farben & Adjektive", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Renkli Bir Dünya! 🎨", content: "Renkleri ve nesneleri tanımlamak için kullanılan temel sıfatları öğreniyoruz." },
            { id: 2, type: "table", title: "Temel Renkler", headers: ["Renk", "Almanca", "Okunuş"], rows: [
                ["Kırmızı", "Rot", "rot"], ["Mavi", "Blau", "blau"], ["Sarı", "Gelb", "gelp"], ["Yeşil", "Grün", "grün"], ["Siyah", "Schwarz", "şvarts"], ["Beyaz", "Weiß", "vays"], ["Turuncu", "Orange", "o-ran-jı"], ["Mor", "Lila", "li-la"]
            ]},
            { id: 3, type: "vocabulary", title: "Tanımlayıcı Sıfatlar", words: [
                { target: "hell", native: "açık (renk)", pronunciation: "hel" },
                { target: "dunkel", native: "koyu (renk)", pronunciation: "dun-kıl" },
                { target: "bunt", native: "renkli", pronunciation: "bunt" }
            ]},
            { id: 4, type: "culture", title: "Cümle İçinde", content: "Bir nesnenin rengini söylerken: 'Das Buch ist rot.' (Kitap kırmızıdır) şeklinde kurabilirsin." }
        ]
    },
    505: {
        unitId: 505, title: "Artikel (der, die, das)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Artikellerin Gücü 💎", content: "Almancanın en önemli konusu: Der, Die ve Das. Korkmayın, mantığını kavrayacağız." },
            { id: 2, type: "grammar", title: "Üç Farklı Cinsiyet", rules: [
                { rule: "der (Maskulin)", explanation: "Eril kelimeler için kullanılır.", examples: ["der Tisch (masa)", "der Stift (kalem)"] },
                { rule: "die (Feminin)", explanation: "Dişil kelimeler için kullanılır.", examples: ["die Lampe (lamba)", "die Tasche (çanta)"] },
                { rule: "das (Neutral)", explanation: "Nötr kelimeler için kullanılır.", examples: ["das Buch (kitap)", "das Auto (araba)"] }
            ]},
            { id: 3, type: "culture", title: "En Önemli Kural", content: "Yeni bir kelime öğrenirken onu MUTLAKA artikeiiyle birlikte ezberleyin. Kelimeyi artikelsiz öğrenmek yarım öğrenmektir." },
            { id: 4, type: "vocabulary", title: "Çoğul Artikel", words: [
                { target: "die (Plural)", native: "Çoğul artikel", pronunciation: "di", example: "die Bücher (kitaplar)" }
            ]}
        ]
    },
    506: {
        unitId: 506, title: "Verben: Konjugation", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Eyleme Geçiyoruz! 🏃", content: "Fiillerin şahıslara göre nasıl değiştiğini (çekimlendiğini) öğreneceğiz." },
            { id: 2, type: "grammar", title: "Düzenli Fiil Çekimi", rules: [
                { rule: "ich -e", explanation: "Ben", examples: ["ich lerne"] },
                { rule: "du -st", explanation: "Sen", examples: ["du lernst"] },
                { rule: "er/sie/it -t", explanation: "O", examples: ["er lernt"] },
                { rule: "wir -en", explanation: "Biz", examples: ["wir lernen"] },
                { rule: "ihr -t", explanation: "Siz", examples: ["ihr lernt"] },
                { rule: "sie/Sie -en", explanation: "Onlar / Siz (Nazik)", examples: ["sie lernen"] }
            ]},
            { id: 3, type: "vocabulary", title: "Sık Kullanılan Fiiller", words: [
                { target: "kommen", native: "gelmek", pronunciation: "ko-mın" },
                { target: "wohnen", native: "ikamet etmek", pronunciation: "vo-nın" },
                { target: "machen", native: "yapmak", pronunciation: "ma-hın" },
                { target: "trinken", native: "içmek", pronunciation: "trin-kın" }
            ]},
            { id: 4, type: "culture", title: "Kısaltma", content: "Çekim eklerini ezberlemek için 'ESTTEN' kodlamasını kullanabilirsin (st - t - en - t - en)." }
        ]
    },
    507: {
        unitId: 507, title: "Wochentage & Zeit", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Zaman Yönetimi 📅", content: "Haftanın günlerini ve zamanla ilgili temel kelimeleri öğreneceğiz." },
            { id: 2, type: "table", title: "Haftanın Günleri", headers: ["Türkçe", "Almanca", "Okunuş"], rows: [
                ["Pazartesi", "Montag", "mon-tak"], ["Salı", "Dienstag", "dins-tak"], ["Çarşamba", "Mittwoch", "mit-voh"], ["Perşembe", "Donnerstag", "do-ners-tak"], ["Cuma", "Freitag", "fray-tak"], ["Cumartesi", "Samstag", "zams-tak"], ["Pazar", "Sonntag", "zon-tak"]
            ]},
            { id: 3, type: "vocabulary", title: "Zaman Kelimeleri", words: [
                { target: "heute", native: "bugün", pronunciation: "hoy-tı" },
                { target: "morgen", native: "yarın", pronunciation: "mor-gen" },
                { target: "gestern", native: "dün", pronunciation: "ges-tern" },
                { target: "das Wochenende", native: "hafta sonu", pronunciation: "vo-hın-en-dı" }
            ]},
            { id: 4, type: "culture", title: "Edat Kullanımı", content: "Günlerden bahsederken her zaman 'am' edatını kullanırız. Örn: 'am Montag' (Pazartesi günü)." }
        ]
    },
    508: {
        unitId: 508, title: "Pluralformen", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Birden Fazla! 📚", content: "Kelimeleri nasıl çoğul yapacağımızı öğreneceğiz. Almancada çoğullar biraz çeşitlidir." },
            { id: 2, type: "grammar", title: "Çoğul Kuralları", rules: [
                { rule: "Çoğul Artikel 'die'", explanation: "Kelimenin tekil artikeli ne olursa olsun, çoğulda her zaman 'die' olur.", examples: ["der Tisch -> die Tische", "das Buch -> die Bücher"] },
                { rule: "-n / -en ekleri", explanation: "Pek çok kelime sonuna -n veya -en alır.", examples: ["die Lampe -> die Lampen"] }
            ]},
            { id: 3, type: "vocabulary", title: "Düzensiz Çoğullar", words: [
                { target: "das Kind -> die Kinder", native: "Çocuklar", pronunciation: "kin-der" },
                { target: "der Apfel -> die Äpfel", native: "Elmalar", pronunciation: "ep-fıl" },
                { target: "das Auto -> die Autos", native: "Arabalar", pronunciation: "au-tos" }
            ]},
            { id: 4, type: "culture", title: "Sözlük Kullanımı", content: "Sözlükte kelimenin yanında gördüğünüz '-, e' veya '-, er' gibi işaretler o kelimenin nasıl çoğul yapıldığını gösterir." }
        ]
    },
    509: {
        unitId: 509, title: "Satzbau (Cümle Yapısı)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Doğru Dizilim 🧩", content: "Almanca cümle kurarken kelimeleri nereye koyacağımızı öğreneceğiz." },
            { id: 2, type: "grammar", title: "Düz Cümle Yapısı", rules: [
                { rule: "Fiil 2. Sırada!", explanation: "Kurallı bir cümlede çekimlenmiş fiil her zaman ikinci sırada yer alır.", examples: ["Ich trinke Wasser.", "Heute trinke ich Wasser."] }
            ]},
            { id: 3, type: "culture", title: "Altın Kural", content: "Cümlenin başına neyi koyarsan koy (zaman, özne, yer), fiili mutlaka ikinci yere sabitlemelisin!" },
            { id: 4, type: "vocabulary", title: "Bağlaçlar", words: [
                { target: "und", native: "ve", pronunciation: "unt" },
                { target: "aber", native: "ama", pronunciation: "a-ber" },
                { target: "oder", native: "veya", pronunciation: "o-der" }
            ]}
        ]
    },
    510: {
        unitId: 510, title: "W-Fragen (Soru Kelimeleri)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Meraklı Olun! ❓", content: "Bilgi almak için kullanılan 'W' ile başlayan soru kelimelerini öğreniyoruz." },
            { id: 2, type: "table", title: "Soru Kelimeleri", headers: ["Soru", "Anlamı", "Örnek"], rows: [
                ["Wer?", "Kim?", "Wer ist das?"], ["Was?", "Ne?", "Was ist bu?"], ["Wie?", "Nasıl?", "Wie heißt du?"], ["Wo?", "Nerede?", "Wo wohnst du?"], ["Woher?", "Nereden?", "Woher kommst du?"], ["Wohin?", "Nereye?", "Wohin gehst du?"]
            ]},
            { id: 3, type: "grammar", title: "Soru Cümlesi Kurmak", rules: [
                { rule: "Soru Kelimesi + Fiil + Özne", explanation: "Soru kelimesi başa gelir, fiil yine 2. sıradadır.", examples: ["Was machst du?"] }
            ]},
            { id: 4, type: "culture", title: "Ja/Nein Soruları", content: "Eğer soru kelimesi (W) yoksa, fiili en başa koyarak Evet/Hayır sorusu yapabilirsin. Örn: 'Trinkst du Kaffee?'" }
        ]
    },
    511: {
        unitId: 511, title: "Körperteile (Vücut Parçaları)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Vücudumuzu Tanıyalım! 👤", content: "Bu derste temel vücut parçalarını ve doktorda kendimizi ifade etmeyi öğreneceğiz." },
            { id: 2, type: "table", title: "Baş ve Gövde", headers: ["Türkçe", "Almanca", "Okunuş"], rows: [
                ["Baş", "der Kopf", "kopf"], ["Göz", "das Auge", "au-ge"], ["Burun", "die Nase", "na-ze"], ["Ağız", "der Mund", "munt"], ["Kulak", "das Ohr", "or"], ["El", "die Hand", "hant"], ["Kol", "der Arm", "arm"], ["Bacak", "das Bein", "bayn"], ["Ayak", "der Fuß", "fus"]
            ]},
            { id: 3, type: "culture", title: "Ağrım Var!", content: "Ağrıdan bahsederken: 'Mein Kopf tut weh' (Başım ağrıyor) diyebilirsiniz. Çoğulsa: 'Meine Augen tun weh'." }
        ]
    },
    512: {
        unitId: 512, title: "Adjektive (Sıfatlar)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Tanımlama Zamanı! ✨", content: "Nesneleri, insanları ve durumları tanımlamak için kullanılan en temel sıfatları öğreniyoruz." },
            { id: 2, type: "table", title: "Zıt Sıfatlar", headers: ["Sözcük", "Zıttı", "Anlamları"], rows: [
                ["groß (büyük)", "klein", "küçük"], ["gut (iyi)", "schlecht", "kötü"], ["schön (güzel)", "hässlich", "çirkin"], ["alt (eski/yaşlı)", "neu / jung", "yeni / genç"], ["teuer (pahalı)", "billig", "ucuz"], ["heiß (sıcak)", "kalt", "soğuk"]
            ]},
            { id: 3, type: "grammar", title: "Zarflar", rules: [
                { rule: "sehr", explanation: "Sıfatın etkisini artırır (Çok).", examples: ["Das Haus ist sehr groß."] },
                { rule: "zu", explanation: "Olumsuz anlamda 'fazla' (Aşırı).", examples: ["Der Kaffee ist zu heiß."] }
            ]}
        ]
    },
    513: {
        unitId: 513, title: "Modalverben: können, müssen", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Yetenek ve Zorunluluk 💪", content: "Yapabildiğimiz şeyleri (können) ve yapmak zorunda olduklarımızı (müssen) ifade etmeyi öğreneceğiz." },
            { id: 2, type: "grammar", title: "Modal Fiil Çekimi", rules: [
                { rule: "können (ebilmek)", explanation: "ich kann, du kannst, er/sie/es kann...", examples: ["Ich kann Deutsch sprechen."] },
                { rule: "müssen (zorunluluk)", explanation: "ich muss, du musst, er/sie/es muss...", examples: ["Ich muss lernen."] }
            ]},
            { id: 3, type: "culture", title: "Cümle Yapısı", content: "Modal fiil 2. sıradadır, esas fiil ise hiç değişmeden (mastar halde) cümlenin EN SONUNA gider." }
        ]
    },
    514: {
        unitId: 514, title: "Berufe (Meslekler)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Ne İş Yapıyorsunuz? 💼", content: "Meslek adlarını ve iş hayatıyla ilgili temel kavramları öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Popüler Meslekler", words: [
                { target: "der Lehrer", native: "Erkek Öğretmen", pronunciation: "le-rer" },
                { target: "die Lehrerin", native: "Kadın Öğretmen", pronunciation: "le-re-rin" },
                { target: "der Arzt", native: "Erkek Doktor", pronunciation: "artst" },
                { target: "die Ärztin", native: "Kadın Doktor", pronunciation: "erts-tin" },
                { target: "der Verkäufer", native: "Satıcı", pronunciation: "fer-koy-fer" }
            ]},
            { id: 3, type: "culture", title: "Kadın Meslekleri", content: "Almancada mesleklerin kadın hali genellikle sonuna '-in' eklenerek yapılır (Student -> Studentin)." },
            { id: 4, type: "grammar", title: "Mesleği Söylemek", rules: [
                { rule: "Meslek + sein", explanation: "Mesleği söylerken 'bir' (ein) demeyiz.", examples: ["Ich bin Lehrer. (Ben öğretmenim.)"] }
            ]}
        ]
    },
    515: {
        unitId: 515, title: "Präpositionen (in, an, auf)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Konum Bildirme 📍", content: "Nesnelerin nerede olduğunu belirtmek için kullanılan temel edatları öğreniyoruz." },
            { id: 2, type: "grammar", title: "Temel Edatlar", rules: [
                { rule: "in", explanation: "İçinde.", examples: ["im (in dem) Zimmer"] },
                { rule: "auf", explanation: "Üstünde (temas var).", examples: ["auf dem Tisch"] },
                { rule: "an", explanation: "Yanında / Kenarında (duvar, deniz vb.).", examples: ["am (an dem) Meer", "an der Wand"] }
            ]},
            { id: 3, type: "culture", title: "Wo? (Nerede?)", content: "Bu edatlardan sonra artikeller 'Dativ'e dönüşür (der/das -> dem, die -> der)." }
        ]
    },
    516: {
        unitId: 516, title: "Verkehr & Transport", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Yollar ve Araçlar 🚗", content: "Ulaşım araçlarını ve seyahat ederken ihtiyacınız olacak kelimeleri öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Ulaşım Araçları", words: [
                { target: "das Auto", native: "Araba", pronunciation: "au-to" },
                { target: "der Bus", native: "Otobüs", pronunciation: "bus" },
                { target: "der Zug", native: "Tren", pronunciation: "tsuk" },
                { target: "das Flugzeug", native: "Uçak", pronunciation: "fluk-tsoyk" },
                { target: "das Fahrrad", native: "Bisiklet", pronunciation: "fa-rat" }
            ]},
            { id: 3, type: "culture", title: "Mit (ile)", content: "Bir yere ne ile gittiğinizi söylerken 'mit' edatını kullanın: 'Ich fahre mit dem Bus.'." }
        ]
    },
    517: {
        unitId: 517, title: "Trennbare Verben (Ayrılan Fiiller)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Parçalanan Fiiller! ✂️", content: "Almancaya özgü olan 'ayrılan fiiller' konusuna giriyoruz. Eğlenceli bir mantığı var!" },
            { id: 2, type: "grammar", title: "Ayrılma Mantığı", rules: [
                { rule: "Önek Sona Gider", explanation: "Fiilin başındaki ek (auf, an, ab vb.) cümlenin en sonuna atılır.", examples: ["aufstehen (kalkmak) -> Ich stehe um 8 Uhr auf."] }
            ]},
            { id: 3, type: "vocabulary", title: "Önemli Örnekler", words: [
                { target: "anrufen", native: "aramak (telefonla)", pronunciation: "an-ru-fın" },
                { target: "einkaufen", native: "alışveriş yapmak", pronunciation: "ayn-kau-fın" },
                { target: "fernsehen", native: "TV izlemek", pronunciation: "fern-ze-ın" }
            ]},
            { id: 4, type: "culture", title: "Unutma!", content: "Cümlede 'können' gibi bir yardımcı fiil varsa, fiil ayrılmaz, mastar halde sona gider." }
        ]
    },
    518: {
        unitId: 518, title: "Uhrzeit (Saatler)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Saat Kaç? 🕰️", content: "Almancada zamanı sormayı ve söylemeyi öğreneceğiz. Hem resmi hem günlük dili kapsayacağız." },
            { id: 2, type: "vocabulary", title: "Zaman Terimleri", words: [
                { target: "Viertel", native: "Çeyrek", pronunciation: "fir-tel" },
                { target: "halb", native: "Yarım/Buçuk", pronunciation: "halp" },
                { target: "nach", native: "geçe", pronunciation: "nah" },
                { target: "vor", native: "kala", pronunciation: "for" }
            ]},
            { id: 3, type: "grammar", title: "Saat Sormak", rules: [
                { rule: "Wie spät ist es?", explanation: "Saat kaç?", examples: ["Es ist acht Uhr."] },
                { rule: "Um wie viel Uhr?", explanation: "Saat kaçta?", examples: ["Um neun Uhr."] }
            ]},
            { id: 4, type: "culture", title: "Dikkat: Halb!", content: "Almancada 'halb acht' (sekiz buçuk değil), 'yedi buçuk' demektir. Gelecek saatin yarısını ifade eder." }
        ]
    },
    519: {
        unitId: 519, title: "Wetter (Hava Durumu)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Hava Nasıl? ☀️", content: "Hava durumundan bahsetmeyi ve mevsimleri öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Hava Durumu", words: [
                { target: "die Sonne", native: "Güneş", pronunciation: "zon-nı" },
                { target: "der Regen", native: "Yağmur", pronunciation: "re-gen" },
                { target: "der Schnee", native: "Kar", pronunciation: "şne" },
                { target: "windig", native: "rüzgarlı", pronunciation: "vin-dıh" },
                { target: "kalt", native: "soğuk", pronunciation: "kalt" }
            ]},
            { id: 3, type: "culture", title: "Es...", content: "Hava durumunu söylerken 'Es' öznesini kullanırız: 'Es regnet.' (Yağmur yağıyor)." }
        ]
    },
    520: {
        unitId: 520, title: "Freizeit & Hobbys", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "En Sevdiğiniz Hobiler 🎸", content: "Boş zamanlarımızda neler yaptığımızı anlatmayı öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Hobi Çeşitleri", words: [
                { target: "Fußball spielen", native: "futbol oynamak", pronunciation: "fus-bal şpi-lın" },
                { target: "Musik hören", native: "müzik dinlemek", pronunciation: "mu-zik hö-rın" },
                { target: "Filme sehen", native: "film izlemek", pronunciation: "fil-mı ze-ın" },
                { target: "lesen", native: "okumak", pronunciation: "le-zın" },
                { target: "schwimmen", native: "yüzmek", pronunciation: "şvim-mın" }
            ]},
            { id: 3, type: "grammar", title: "Neler Yaparsın?", rules: [
                { rule: "Was machst du gerne?", explanation: "Neler yapmayı seversin?", examples: ["Ich spiele gerne Tennis."] }
            ]},
            { id: 4, type: "culture", title: "Gern (severek)", content: "Almancada 'sevmek' kelimesi yerine genellikle fiilden sonra 'gern' eklenir." }
        ]
    },
    521: {
        unitId: 521, title: "Gefühle (Duygular)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Nasıl Hissediyorsunuz? 😊", content: "Duygularınızı ve fiziksel durumunuzu ifade etmeyi öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Temel Duygular", words: [
                { target: "glücklich", native: "mutlu", pronunciation: "glük-lih" },
                { target: "traurig", native: "üzgün", pronunciation: "trau-rih" },
                { target: "müde", native: "yorgun", pronunciation: "mü-dı" },
                { target: "krank", native: "hasta", pronunciation: "krank" },
                { target: "wütend", native: "kızgın", pronunciation: "vü-tınt" }
            ]},
            { id: 3, type: "culture", title: "Mir ist...", content: "Bazı durumlar 'Mir ist...' (Bana öyle geliyor) ile söylenir: 'Mir ist kalt.' (Üşüyorum), 'Mir ist langweilig.' (Sıkıldım)." }
        ]
    },
    522: {
        unitId: 522, title: "Wegbeschreibung (Yol Tarifi)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Neresi, Nerede? 🗺️", content: "Adres sormayı ve bir yeri tarif etmeyi öğreneceğiz." },
            { id: 2, type: "vocabulary", title: "Yol Kelimeleri", words: [
                { target: "links", native: "sol", pronunciation: "links" },
                { target: "rechts", native: "sağ", pronunciation: "rehts" },
                { target: "geradeaus", native: "dümdüz", pronunciation: "ge-ra-de-aus" },
                { target: "die Ecke", native: "köşe", pronunciation: "ek-kı" },
                { target: "die Ampel", native: "trafik ışığı", pronunciation: "am-pıl" }
            ]},
            { id: 3, type: "culture", title: "Pardon!", content: "Yolda birine bir şey sorarken 'Entschuldigung, wie komme ich zum...?' (Affedersiniz, ...'ya nasıl giderim?) kalıbını kullanın." }
        ]
    },
    523: {
        unitId: 523, title: "Tagesablauf (Günlük Rutin)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Bir Günüm ☀️", content: "Sabah kalkıştan akşam yatışa kadar neler yaptığımızı anlatacağız." },
            { id: 2, type: "vocabulary", title: "Günlük Eylemler", words: [
                { target: "aufstehen", native: "uyanmak/kalkmak", pronunciation: "auf-şte-ın" },
                { target: "frühstücken", native: "kahvaltı yapmak", pronunciation: "frü-ştük-ın" },
                { target: "arbeiten", native: "çalışmak", pronunciation: "ar-bay-tın" },
                { target: "kochen", native: "yemek pişirmek", pronunciation: "ko-hın" },
                { target: "schlafen gehen", native: "uyumaya gitmek", pronunciation: "şla-fın ge-ın" }
            ]},
            { id: 3, type: "grammar", title: "Zamanla Başlamak", rules: [
                { rule: "Saat Başta", explanation: "Cümleye saatle başlarsanız fiil 2. sırada, özne 3. sırada olur.", examples: ["Um 8 Uhr stehe ich auf."] }
            ]}
        ]
    },
    524: {
        unitId: 524, title: "Zukunft (Gelecek Zaman)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Gelecek Planları 🚀", content: "Almancada gelecek zamanın (Futur I) en basit halini göreceğiz." },
            { id: 2, type: "grammar", title: "Werden Kullanımı", rules: [
                { rule: "werden + Mastar", explanation: "Werden fiili özneye göre çekimlenir, asıl fiil sona gider.", examples: ["Ich werde morgen kommen."] }
            ]},
            { id: 3, type: "culture", title: "Präsens ile Gelecek", content: "Almancada gelecek zaman yerine genellikle şimdiki zaman ve bir zaman kelimesi kullanılır: 'Ich komme morgen.' (Yarın geliyorum)." }
        ]
    },
    525: {
        unitId: 525, title: "Perfekt (Geçmiş Zaman)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Neler Yaptık? 📜", content: "Günlük dilde en çok kullanılan geçmiş zaman formunu (Perfekt) öğreneceğiz." },
            { id: 2, type: "grammar", title: "Perfekt Yapısı", rules: [
                { rule: "haben/sein + Partizip II", explanation: "Yardımcı fiil 2. sırada, 'ge-' ile başlayan fiil en sondadır.", examples: ["Ich habe gegessen.", "Ich bin gegangen."] }
            ]},
            { id: 3, type: "culture", title: "Sein mı, Haben mı?", content: "Hareket ve durum değişikliği bildiren fiiller 'sein', diğerleri 'haben' ile kullanılır." }
        ]
    },
    526: {
        unitId: 526, title: "Ort & Richtung (Yer ve Yön)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Nerede, Nereye? 📍", content: "Konum ve yön belirten ifadeleri pekiştireceğiz." },
            { id: 2, type: "vocabulary", title: "Yer Bildirenler", words: [
                { target: "hier", native: "burada", pronunciation: "hir" },
                { target: "dort", native: "orada", pronunciation: "dort" },
                { target: "oben", native: "yukarıda", pronunciation: "o-bın" },
                { target: "unten", native: "aşağıda", pronunciation: "un-tın" },
                { target: "überall", native: "her yerde", pronunciation: "ü-ber-al" }
            ]},
            { id: 3, type: "culture", title: "Hin ve Her", content: "Konuşmacıdan uzağa gidiş için 'hin', konuşmacıya geliş için 'her' kullanılır." }
        ]
    },
    527: {
        unitId: 527, title: "Einkaufen (Alışveriş)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Alışverişe Çıkalım 🛍️", content: "Markette, mağazada ihtiyacınız olacak kelimeler ve kalıplar." },
            { id: 2, type: "vocabulary", title: "Alışveriş Kelimeleri", words: [
                { target: "kaufen", native: "satın almak", pronunciation: "kau-fın" },
                { target: "verkaufen", native: "satmak", pronunciation: "fer-kau-fın" },
                { target: "der Preis", native: "fiyat", pronunciation: "prayz" },
                { target: "im Angebot", native: "indirimde", pronunciation: "im an-ge-bot" },
                { target: "zahlen", native: "ödemek", pronunciation: "tsa-lın" }
            ]},
            { id: 3, type: "culture", title: "Ne kadar?", content: "'Was kostet das?' veya 'Wie viel kostet das?' diyerek fiyat sorabilirsiniz." }
        ]
    },
    528: {
        unitId: 528, title: "Restaurant (Restoran)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Afiyet Olsun! 🍴", content: "Sipariş verme, hesap isteme ve yemek terimleri." },
            { id: 2, type: "vocabulary", title: "Restoranda", words: [
                { target: "die Speisekarte", native: "menü", pronunciation: "şpay-ze-kar-tı" },
                { target: "bestellen", native: "sipariş vermek", pronunciation: "be-ştel-lın" },
                { target: "das Menü", native: "fiks menü", pronunciation: "me-nü" },
                { target: "die Rechnung", native: "hesap", pronunciation: "re-nung" },
                { target: "das Trinkgeld", native: "bahşiş", pronunciation: "trink-gelt" }
            ]},
            { id: 3, type: "culture", title: "Hesap Lütfen!", content: "'Zahlen, bitte!' (Hesap lütfen) veya 'Ich möchte bezahlen.' diyerek hesabı isteyebilirsiniz." }
        ]
    },
    529: {
        unitId: 529, title: "Urlaub & Reisen (Tatil)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "İyi Yolculuklar! ✈️", content: "Tatil planları, oteller ve seyahatle ilgili kelimeler." },
            { id: 2, type: "vocabulary", title: "Tatil Kelimeleri", words: [
                { target: "die Reise", native: "yolculuk", pronunciation: "ray-ze" },
                { target: "das Hotel", native: "otel", pronunciation: "ho-tel" },
                { target: "der Strand", native: "plaj", pronunciation: "ştrant" },
                { target: "besichtigen", native: "gezmek (turistik)", pronunciation: "be-zihti-gın" },
                { target: "das Foto", native: "fotoğraf", pronunciation: "fo-to" }
            ]},
            { id: 3, type: "culture", title: "İyi Tatiller", content: "'Schönen Urlaub!' diyerek birine iyi tatiller dileyebilirsiniz." }
        ]
    },
    530: {
        unitId: 530, title: "Abschied (Veda)", language: "Almanca", level: "A1",
        slides: [
            { id: 1, type: "intro", title: "Görüşmek Üzere! 👋", content: "Vedalaşma biçimleri ve veda sözleri." },
            { id: 2, type: "vocabulary", title: "Vedalaşma", words: [
                { target: "Tschüss", native: "Hoşça kal", pronunciation: "çüs" },
                { target: "Auf Wiedersehen", native: "Güle güle (resmi)", pronunciation: "auf vi-der-ze-ın" },
                { target: "Bis bald", native: "Yakında görüşürüz", pronunciation: "bis balt" },
                { target: "Bis morgen", native: "Yarına kadar", pronunciation: "bis mor-gen" },
                { target: "Mach's gut", native: "Kendine iyi bak", pronunciation: "mahs gut" }
            ]},
            { id: 3, type: "culture", title: "Son Söz", content: "Almanca A1 seviyesini başarıyla tamamladınız! Harika bir iş çıkardınız. Viel Erfolg!" }
        ]
    },
};

export function getGermanA1LectureForUnit(unitId: number): UnitLecture {
    return lectures[unitId] || lectures[501];
}
