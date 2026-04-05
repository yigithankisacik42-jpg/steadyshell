/**
 * SteadyShell Vocabulary Database - Almanca A2
 * 30 Units (ID: 531-560), 20 words per unit
 */

export interface GermanVocabulary {
    word: string;
    meaning: string;
    pronunciation: string;
    example: string;
    exampleTranslation: string;
}

export interface GermanUnitVocabulary {
    unitId: number;
    title: string;
    words: GermanVocabulary[];
}

// ===== UNIT 531: GEÇMİŞ ZAMAN (PERFEKT) - FİİLLER =====
const unit531Vocab: GermanUnitVocabulary = {
    unitId: 531, title: "Geçmiş Zaman (Perfekt) - Fiiller",
    words: [
        { word: "gemacht", meaning: "Yapmış/Yaptı", pronunciation: "gı-maht", example: "Ich habe Hausaufgaben gemacht.", exampleTranslation: "Ödevlerimi yaptım." },
        { word: "gegangen", meaning: "Gitmiş/Gitti", pronunciation: "gı-gan-gın", example: "Er ist nach Hause gegangen.", exampleTranslation: "O eve gitti." },
        { word: "gegessen", meaning: "Yemiş/Yedi", pronunciation: "gı-ge-sın", example: "Wir haben Pizza gegessen.", exampleTranslation: "Pizza yedik." },
        { word: "getrunken", meaning: "İçmiş/İçti", pronunciation: "gı-trun-kın", example: "Ich habe Wasser getrunken.", exampleTranslation: "Su içtim." },
        { word: "gelesen", meaning: "Okumuş/Okudu", pronunciation: "gı-le-zın", example: "Hast du das Buch gelesen?", exampleTranslation: "Kitabı okudun mu?" },
        { word: "geschrieben", meaning: "Yazmış/Yazdı", pronunciation: "gı-şri-bın", example: "Sie hat einen Brief geschrieben.", exampleTranslation: "O bir mektup yazdı." },
        { word: "gekommen", meaning: "Gelmiş/Geldi", pronunciation: "gı-ko-mın", example: "Wann bist du gekommen?", exampleTranslation: "Ne zaman geldin?" },
        { word: "gesehen", meaning: "Görmüş/Gördü", pronunciation: "gı-ze-ın", example: "Ich habe den Film gesehen.", exampleTranslation: "Filmi izledim (gördüm)." },
        { word: "gearbeitet", meaning: "Çalışmış/Çalıştı", pronunciation: "gı-ar-bay-tet", example: "Ich habe viel gearbeitet.", exampleTranslation: "Çok çalıştım." },
        { word: "gelernt", meaning: "Öğrenmiş/Öğrendi", pronunciation: "gı-lernt", example: "Wir haben Deutsch gelernt.", exampleTranslation: "Almanca öğrendik." },
        { word: "gekauft", meaning: "Satın almış/aldı", pronunciation: "gı-kauft", example: "Er hat ein Auto gekauft.", exampleTranslation: "O bir araba satın aldı." },
        { word: "gespielt", meaning: "Oynamış/Oynadı", pronunciation: "gı-şpilt", example: "Die Kinder haben im Garten gespielt.", exampleTranslation: "Çocuklar bahçede oynadı." },
        { word: "gehört", meaning: "Duymuş/Duydu / Dinlemiş/Dinledi", pronunciation: "gı-hört", example: "Ich habe Musik gehört.", exampleTranslation: "Müzik dinledim." },
        { word: "getroffen", meaning: "Buluşmuş/Buluştu", pronunciation: "gı-tro-fın", example: "Ich habe meine Freunde getroffen.", exampleTranslation: "Arkadaşlarımla buluştum." },
        { word: "geschlafen", meaning: "Uyumuş/Uyudu", pronunciation: "gı-şla-fın", example: "Ich habe gut geschlafen.", exampleTranslation: "İyi uyudum." },
        { word: "gefahren", meaning: "Gitmiş/Gitti (araçla)", pronunciation: "gı-fa-rın", example: "Ich bin nach Berlin gefahren.", exampleTranslation: "Berlin'e gittik." },
        { word: "geblieben", meaning: "Kalmış/Kaldı", pronunciation: "gı-bli-bın", example: "Ich bin zu Hause geblieben.", exampleTranslation: "Evde kaldım." },
        { word: "gesprochen", meaning: "Konuşmuş/Konuştu", pronunciation: "gı-şpro-hın", example: "Er hat mit mir gesprochen.", exampleTranslation: "Benimle konuştu." },
        { word: "verstanden", meaning: "Anlamış/Anladı", pronunciation: "fer-ştan-dın", example: "Hast du alles verstanden?", exampleTranslation: "Her şeyi anladın mı?" },
        { word: "begonnen", meaning: "Başlamış/Başladı", pronunciation: "bı-go-nın", example: "Der Kurs hat begonnen.", exampleTranslation: "Kurs başladı." }
    ]
};

// ===== UNIT 532: GEÇMİŞ ZAMAN 2 (PRÄTERİTUM) - FİİLLER =====
const unit532Vocab: GermanUnitVocabulary = {
    unitId: 532, title: "Geçmiş Zaman 2 (Präteritum) - Fiiller",
    words: [
        { word: "war", meaning: "İdi / Vardı (Sein)", pronunciation: "var", example: "Ich war gestern krank.", exampleTranslation: "Dün hastaydım." },
        { word: "hatte", meaning: "Sahibiydi / Vardı (Haben)", pronunciation: "ha-tı", example: "Er hatte keine Zeit.", exampleTranslation: "Onun vakti yoktu." },
        { word: "wollte", meaning: "İstiyordu (Wollen)", pronunciation: "vol-tı", example: "Ich wollte dich anrufen.", exampleTranslation: "Seni aramak istiyordum." },
        { word: "konnte", meaning: "Yapabiliyordu (Können)", pronunciation: "kon-tı", example: "Er konnte nicht kommen.", exampleTranslation: "Gelemiyordu (Gelemedi)." },
        { word: "musste", meaning: "Yapmalıydı (Müssen)", pronunciation: "mus-tı", example: "Ich musste arbeiten.", exampleTranslation: "Çalışmalıydım (Çalışmak zorundaydım)." },
        { word: "sollte", meaning: "Yapması gerekirdi (Sollen)", pronunciation: "tsol-tı", example: "Du solltest leiser sein.", exampleTranslation: "Daha sessiz olmalıydın." },
        { word: "durfte", meaning: "İzni vardı (Dürfen)", pronunciation: "durf-tı", example: "Hier durfte man nicht parken.", exampleTranslation: "Buraya park etmeye izin yoktu." },
        { word: "sagte", meaning: "Dedi/Söyledi", pronunciation: "zak-tı", example: "Er sagte 'Hallo'.", exampleTranslation: "O 'Merhaba' dedi." },
        { word: "machte", meaning: "Yaptı", pronunciation: "mah-tı", example: "Sie machte das Fenster zu.", exampleTranslation: "Pencereyi kapattı." },
        { word: "ging", meaning: "Gitti", pronunciation: "gıng", example: "Wir gingen nach Hause.", exampleTranslation: "Eve gittik." },
        { word: "kam", meaning: "Geldi", pronunciation: "kam", example: "Wann kam er an?", exampleTranslation: "O ne zaman vardı?" },
        { word: "sah", meaning: "Gördü", pronunciation: "za", example: "Ich sah ein kleines Kind.", exampleTranslation: "Küçük bir çocuk gördüm." },
        { word: "gab", meaning: "Verdi", pronunciation: "gap", example: "Es gab viele Leute.", exampleTranslation: "Birçok insan vardı." },
        { word: "wusste", meaning: "Biliyordu", pronunciation: "vus-tı", example: "Ich wusste es nicht.", exampleTranslation: "Bunu bilmiyordum." },
        { word: "dachte", meaning: "Düşündü", pronunciation: "dah-tı", example: "Er dachte an seine Familie.", exampleTranslation: "Ailesini düşündü." },
        { word: "hieß", meaning: "Adıydı", pronunciation: "his", example: "Wie hieß der Film?", exampleTranslation: "Filmin adı neydi?" },
        { word: "lebte", meaning: "Yaşıyordu", pronunciation: "le-ptı", example: "Er lebte in Berlin.", exampleTranslation: "Berlin'de yaşıyordu." },
        { word: "kaufte", meaning: "Satın aldı", pronunciation: "kau-ftı", example: "Wir kauften ein Haus.", exampleTranslation: "Bir ev satın aldık." },
        { word: "fragte", meaning: "Sordu", pronunciation: "frak-tı", example: "Ich fragte den Lehrer.", exampleTranslation: "Öğretmene sordum." },
        { word: "antwortete", meaning: "Cevap verdi", pronunciation: "ant-vor-te-tı", example: "Niemand antwortete mir.", exampleTranslation: "Kimse bana cevap vermedi." }
    ]
};

// ===== UNIT 533: RESTORAN VE YEMEK KÜLTÜRÜ =====
const unit533Vocab: GermanUnitVocabulary = {
    unitId: 533, title: "Restoran ve Yemek Kültürü",
    words: [
        { word: "die Speisekarte", meaning: "Yemek menüsü", pronunciation: "di şpay-zı-kar-tı", example: "Können wir bitte die Speisekarte haben?", exampleTranslation: "Menüyü alabilir miyiz lütfen?" },
        { word: "die Vorspeise", meaning: "Başlangıç yemeği", pronunciation: "di for-şpay-zı", example: "Als Vorspeise nehme ich eine Suppe.", exampleTranslation: "Başlangıç olarak bir çorba alıyorum." },
        { word: "das Hauptgericht", meaning: "Ana yemek", pronunciation: "das haupt-gı-riht", example: "Was ist das Hauptgericht heute?", exampleTranslation: "Bugün ana yemek nedir?" },
        { word: "die Nachspeise", meaning: "Tatlı / Son yemek", pronunciation: "di nah-şpay-zı", example: "Möchten Sie eine Nachspeise?", exampleTranslation: "Tatlı ister misiniz?" },
        { word: "die Rechnung", meaning: "Hesap", pronunciation: "di reh-nung", example: "Die Rechnung bitte!", exampleTranslation: "Hesap lütfen!" },
        { word: "das Trinkgeld", meaning: "Bahşiş", pronunciation: "das trink-gelt", example: "Geben Sie Trinkgeld?", exampleTranslation: "Bahşiş verir misiniz?" },
        { word: "reservieren", meaning: "Rezerve etmek", pronunciation: "re-zer-vi-rın", example: "Ich möchte einen Tisch reservieren.", exampleTranslation: "Bir masa rezerve etmek istiyorum." },
        { word: "bestellen", meaning: "Sipariş vermek", pronunciation: "be-ştel-ın", example: "Haben Sie schon bestellt?", exampleTranslation: "Sipariş verdiniz mi?" },
        { word: "der Kellner", meaning: "Garson", pronunciation: "der kel-nır", example: "Der Kellner ist sehr freundlich.", exampleTranslation: "Garson çok nazik." },
        { word: "das Besteck", meaning: "Çatal bıçak takımı", pronunciation: "das bı-ştek", example: "Ich brauche sauberes Besteck.", exampleTranslation: "Temiz çatal bıçağa ihtiyacım var." },
        { word: "der Löffel", meaning: "Kaşık", pronunciation: "der lö-fıl", example: "Einen Löffel für die Suppe.", exampleTranslation: "Çorba için bir kaşık." },
        { word: "die Gabel", meaning: "Çatal", pronunciation: "di ga-bıl", example: "Gabel und Messer.", exampleTranslation: "Çatal ve bıçak." },
        { word: "das Messer", meaning: "Bıçak", pronunciation: "das me-sır", example: "Das Messer ist scharf.", exampleTranslation: "Bıçak keskin." },
        { word: "die Serviette", meaning: "Peçete", pronunciation: "di zer-vi-ye-tı", example: "Haben Sie eine Serviette?", exampleTranslation: "Peçeteniz var mı?" },
        { word: "das Glas", meaning: "Bardak / Kadeh", pronunciation: "das glas", example: "Ein Glas Wein.", exampleTranslation: "Bir kadeh şarap." },
        { word: "der Teller", meaning: "Tabak", pronunciation: "der te-lır", example: "Ein leerer Teller.", exampleTranslation: "Boş bir tabak." },
        { word: "salzig", meaning: "Tuzlu", pronunciation: "zal-tsıh", example: "Das Essen ist zu salzig.", exampleTranslation: "Yemek çok tuzlu." },
        { word: "scharf", meaning: "Acı / Keskin", pronunciation: "şarf", example: "Vorsicht, die Soße ist scharf!", exampleTranslation: "Dikkat, sos acı!" },
        { word: "süß", meaning: "Tatlı", pronunciation: "züs", example: "Die Torte ist sehr süß.", exampleTranslation: "Pasta çok tatlı." },
        { word: "bitter", meaning: "Acı (tat)", pronunciation: "bi-tırl", example: "Schokolade mit 90% Kakao ist bitter.", exampleTranslation: "90% kakaolu çikolata acıdır." }
    ]
};

// ===== UNIT 534: ALIŞVERİŞ VE MODA =====
const unit534Vocab: GermanUnitVocabulary = {
    unitId: 534, title: "Alışveriş ve Moda",
    words: [
        { word: "die Abteilung", meaning: "Bölüm / Departman", pronunciation: "di ap-tay-lung", example: "Wo ist die Herrenabteilung?", exampleTranslation: "Erkek bölümü nerede?" },
        { word: "das Angebot", meaning: "Teklif / Kampanya / İndirim", pronunciation: "das an-gı-bot", example: "Das ist ein gutes Angebot.", exampleTranslation: "Bu iyi bir kampanya (teklif)." },
        { word: "der Ausverkauf", meaning: "Tasfiye satışı / Büyük indirim", pronunciation: "der aus-fer-kauf", example: "Im Sommer ist Ausverkauf.", exampleTranslation: "Yazın büyük indirim var." },
        { word: "die Größe", meaning: "Beden / Boyut", pronunciation: "di grö-sı", example: "Welche Größe haben Sie?", exampleTranslation: "Bedeniniz nedir?" },
        { word: "die Umkleidekabine", meaning: "Soyunma kabini", pronunciation: "di um-klay-dı-ka-bi-nı", example: "Dort sind die Umkleidekabinen.", exampleTranslation: "Soyunma kabinleri şurada." },
        { word: "anprobieren", meaning: "Denemek (giysi)", pronunciation: "an-pro-bi-rın", example: "Darf ich das Kleid anprobieren?", exampleTranslation: "Elbiseyi deneyebilir miyim?" },
        { word: "passen", meaning: "Uymak / Yakışmak / Tam gelmek", pronunciation: "pa-sın", example: "Die Hose passt mir perfekt.", exampleTranslation: "Pantolon bana tam oldu." },
        { word: "stehen", meaning: "Yakışmak (birine)", pronunciation: "şte-ın", example: "Blau steht dir sehr gut.", exampleTranslation: "Mavi sana çok yakışıyor." },
        { word: "der Kassenbon", meaning: "Kasa fişi", pronunciation: "der ka-sın-bon", example: "Brauchen Sie den Kassenbon?", exampleTranslation: "Fiş istiyor musunuz?" },
        { word: "umtauschen", meaning: "Değiştirmek (ürün)", pronunciation: "um-tau-şın", example: "Ich möchte die Schuhe umtauschen.", exampleTranslation: "Ayakkabıları değiştirmek istiyorum." },
        { word: "billig", meaning: "Ucuz", pronunciation: "bi-lıh", example: "Das ist hier sehr billig.", exampleTranslation: "Burası çok ucuz." },
        { word: "günstig", meaning: "Uygun fiyatlı", pronunciation: "güns-tıh", example: "Ein günstiger Preis.", exampleTranslation: "Uygun bir fiyat." },
        { word: "teuer", meaning: "Pahalı", pronunciation: "toy-ır", example: "Die Tasche ist zu teuer.", exampleTranslation: "Çanta çok pahalı." },
        { word: "die Qualität", meaning: "Kalite", pronunciation: "di kva-li-teyt", example: "Die Qualität ist wichtig.", exampleTranslation: "Kalite önemlidir." },
        { word: "modisch", meaning: "Modaya uygun", pronunciation: "mo-diş", example: "Sie trägt immer modische Kleidung.", exampleTranslation: "O her zaman modaya uygun kıyafetler giyer." },
        { word: "elegant", meaning: "Zarif / Şık", pronunciation: "e-le-gant", example: "Ein elegantes Kleid.", exampleTranslation: "Zarif bir elbise." },
        { word: "bequem", meaning: "Rahat", pronunciation: "be-kveym", example: "Diese Schuhe sind sehr bequem.", exampleTranslation: "Bu ayakkabılar çok rahat." },
        { word: "die Baumwolle", meaning: "Pamuk", pronunciation: "di ba-um-vo-lı", example: "Ein Hemd aus Baumwolle.", exampleTranslation: "Pamuklu bir gömlek." },
        { word: "die Seide", meaning: "İpek", pronunciation: "di zay-dı", example: "Ein Schal aus Seide.", exampleTranslation: "İpek bir atkı." },
        { word: "das Leder", meaning: "Deri", pronunciation: "das le-dır", example: "Schuhe aus echtem Leder.", exampleTranslation: "Gerçek deriden ayakkabılar." }
    ]
};

// ===== UNIT 541: İŞ GÖRÜŞMESİ VE CV =====
const unit541Vocab: GermanUnitVocabulary = {
    unitId: 541, title: "İş Görüşmesi ve CV",
    words: [
        { word: "der Arbeitgeber", meaning: "İşveren", pronunciation: "der ar-bayts-ge-bır", example: "Wer ist dein aktueller Arbeitgeber?", exampleTranslation: "Şu anki işverenin kim?" },
        { word: "der Arbeitnehmer", meaning: "Çalışan / İşçi", pronunciation: "der ar-bayts-ne-mır", example: "Rechte und Pflichten der Arbeitnehmer.", exampleTranslation: "Çalışanların hak ve yükümlülükleri." },
        { word: "die Gehaltsvorstellung", meaning: "Maaş beklentisi", pronunciation: "di gı-halts-for-ştel-ung", example: "Was ist Ihre Gehaltsvorstellung?", exampleTranslation: "Maaş beklentiniz nedir?" },
        { word: "der frühestmögliche Eintrittstermin", meaning: "Mümkün olan en erken başlama tarihi", pronunciation: "der frü-est-mök-lı-hı ayn-trits-ter-min", example: "Nennen Sie uns Ihren frühestmöglichen Eintrittstermin.", exampleTranslation: "Bize mümkün olan en erken başlama tarihinizi söyleyin." },
        { word: "die Stärke", meaning: "Güçlü yan / Güç", pronunciation: "di şter-kı", example: "Nennen Sie mir drei Ihrer Stärken.", exampleTranslation: "Bana üç güçlü yanınızı söyleyin." },
        { word: "die Schwäche", meaning: "Zayıf yan / Zayıflık", pronunciation: "di şve-hı", example: "Was ist Ihre größte Schwäche?", exampleTranslation: "En büyük zayıflığınız nedir?" },
        { word: "die Motivation", meaning: "Motivasyon", pronunciation: "di mo-ti-va-tsion", example: "Was ist Ihre Motivation für diesen Job?", exampleTranslation: "Bu iş için motivasyonunuz nedir?" },
        { word: "das Team", meaning: "Takım / Ekip", pronunciation: "das tim", example: "Ich arbeite gerne im Team.", exampleTranslation: "Takım halinde çalışmayı severim." },
        { word: "pünktlich", meaning: "Dakik", pronunciation: "pünkt-lıh", example: "Pünktlichkeit ist beim Vorstellungsgespräch sehr wichtig.", exampleTranslation: "İş mülakatında dakiklik çok önemlidir." },
        { word: "zuverlässig", meaning: "Güvenilir", pronunciation: "tsu-fer-le-zıh", example: "Er ist ein sehr zuverlässiger Mitarbeiter.", exampleTranslation: "O çok güvenilir bir çalışan." },
        { word: "flexibel", meaning: "Esnek", pronunciation: "flek-zi-bıl", example: "Wir suchen jemanden, der zeitlich flexibel ist.", exampleTranslation: "Zaman açısından esnek birini arıyoruz." },
        { word: "belastbar", meaning: "Strese dayanıklı", pronunciation: "be-last-bar", example: "In diesem Job muss man belastbar sein.", exampleTranslation: "Bu işte strese dayanıklı olunmalı." },
        { word: "die Kentnisse", meaning: "Bilgi / Bilgi birikimi", pronunciation: "di kent-ni-zı", example: "Haben Sie Computerkenntnisse?", exampleTranslation: "Bilgisayar bilginiz var mı?" },
        { word: "die Sprachkenntnisse", meaning: "Dil bilgisi (bir dili bilme derecesi)", pronunciation: "di şprah-kent-ni-zı", example: "Ihre Sprachkenntnisse sind hervorragend.", exampleTranslation: "Dil bilginiz (akıcılığınız) mükemmel." },
        { word: "das Zertifikat", meaning: "Sertifika", pronunciation: "das tser-ti-fi-kat", example: "Ich habe ein B2-Zertifikat in Deutsch.", exampleTranslation: "Almancadan B2 sertifikam var." },
        { word: "die Referenz", meaning: "Referans", pronunciation: "di re-fe-rents", example: "Haben Sie Referenzen von früheren Arbeitgebern?", exampleTranslation: "Önceki işverenlerden referanslarınız var mı?" },
        { word: "die Aufgabe", meaning: "Görev / Ödev", pronunciation: "di auf-ga-bı", example: "Was sind meine genauen Aufgaben?", exampleTranslation: "Tam olarak görevlerim nelerdir?" },
        { word: "der Bereich", meaning: "Alan / Bölge / Sektör", pronunciation: "der bı-rayh", example: "Ich arbeite im Bereich Marketing.", exampleTranslation: "Pazarlama alanında çalışıyorum." },
        { word: "die Firma", meaning: "Firma / Şirket", pronunciation: "di fir-ma", example: "Unsere Firma hat 100 Mitarbeiter.", exampleTranslation: "Şirketimizin 100 çalışanı var." },
        { word: "die Überzeugung", meaning: "İkna / Görüş / Kanı", pronunciation: "di ü-bır-tsoy-gung", example: "Ich bin fest davon überzeugt.", exampleTranslation: "Buna kesinlikle inanıyorum (ikna oldum)." }
    ]
};

// ===== UNIT 542: TELEFON GÖRÜŞMELERİ =====
const unit542Vocab: GermanUnitVocabulary = {
    unitId: 542, title: "Telefon Görüşmeleri",
    words: [
        { word: "anrufen", meaning: "Telefonla aramak", pronunciation: "an-ru-fın", example: "Kann ich dich später anrufen?", exampleTranslation: "Seni sonra arayabilir miyim?" },
        { word: "das Gespräch", meaning: "Konuşma / Görüşme", pronunciation: "das gı-şpreh", example: "Danke für das nette Gespräch.", exampleTranslation: "Nazik görüşme için teşekkürler." },
        { word: "die Vorwahl", meaning: "Alan kodu", pronunciation: "di for-val", example: "Was ist die Vorwahl für Berlin?", exampleTranslation: "Berlin'in alan kodu nedir?" },
        { word: "die Telefonnummer", meaning: "Telefon numarası", pronunciation: "di te-le-fon-nu-mır", example: "Wie ist deine Telefonnummer?", exampleTranslation: "Telefon numaran nedir?" },
        { word: "verbinden", meaning: "Bağlamak (telefonu)", pronunciation: "fer-bin-dın", example: "Einen Moment, ich verbinde Sie.", exampleTranslation: "Bir saniye, sizi bağlıyorum." },
        { word: "besetzt", meaning: "Meşgul", pronunciation: "be-zetst", example: "Die Leitung ist leider besetzt.", exampleTranslation: "Hat maalesef meşgul." },
        { word: "die Nachricht", meaning: "Haber / Mesaj", pronunciation: "di nah-riht", example: "Soll ich eine Nachricht hinterlassen?", exampleTranslation: "Mesaj bırakmalı mıyım?" },
        { word: "der Anrufbeantworter", meaning: "Telesekreter", pronunciation: "der an-ruf-be-ant-vor-tırl", example: "Sprechen Sie bitte auf den Anrufbeantworter.", exampleTranslation: "Lütfen telesekretere konuşun." },
        { word: "auflegen", meaning: "Telefonu kapatmak", pronunciation: "auf-le-gın", example: "Hör nicht auf, leg nicht auf!", exampleTranslation: "Dinle, kapatma (telefonu)!" },
        { word: "erreichen", meaning: "Ulaşmak", pronunciation: "er-ray-hın", example: "Ich konnte ihn telefonisch nicht erreichen.", exampleTranslation: "Ona telefonla ulaşamadım." },
        { word: "zurückrufen", meaning: "Geri aramak", pronunciation: "tsu-rük-ru-fın", example: "Er wird Sie in 10 Minuten zurückrufen.", exampleTranslation: "O sizi 10 dakika içinde geri arayacak." },
        { word: "die Leitung", meaning: "Hat (telefon hattı)", pronunciation: "di lay-tung", example: "Die Leitung ist sehr schlecht.", exampleTranslation: "Hat çok kötü (ses gelmiyor)." },
        { word: "das Mobiltelefon", meaning: "Cep telefonu", pronunciation: "das mo-bil-te-le-font", example: "Schalten Sie bitte Ihr Mobiltelefon aus.", exampleTranslation: "Lütfen cep telefonunuzu kapatın." },
        { word: "das Smartphone", meaning: "Akıllı telefon", pronunciation: "das smart-font", example: "Ich brauche ein neues Smartphone.", exampleTranslation: "Yeni bir akıllı telefona ihtiyacım var." },
        { word: "die App", meaning: "Uygulama", pronunciation: "di ep", example: "Welche Apps nutzt du am meisten?", exampleTranslation: "En çok hangi uygulamaları kullanıyorsun?" },
        { word: "laden", meaning: "Şarj etmek / Yüklemek", pronunciation: "la-dın", example: "Ich muss mein Handy laden.", exampleTranslation: "Telefonumu şarj etmem gerekiyor." },
        { word: "der Akku", meaning: "Batarya / Pil", pronunciation: "der a-ku", example: "Mein Akku ist fast leer.", exampleTranslation: "Bataryam (şarjım) neredeyse boş." },
        { word: "die Kurznachricht (SMS)", meaning: "Kısa mesaj", pronunciation: "di kurts-nah-riht", example: "Ich schreibe dir eine Kurznachricht.", exampleTranslation: "Sana bir kısa mesaj yazıyorum." },
        { word: "wiederholen", meaning: "Tekrar etmek", pronunciation: "vi-dır-ho-lın", example: "Können Sie das bitte wiederholen?", exampleTranslation: "Lütfen bunu tekrar edebilir misiniz?" },
        { word: "buchstabieren", meaning: "Kodlamak / Harf harf söylemek", pronunciation: "buh-şta-bi-rın", example: "Können Sie Ihren Namen buchstabieren?", exampleTranslation: "İsminizi kodlayabilir misiniz?" }
    ]
};

// ===== UNIT 543: E-POSTA VE YAZIŞMA =====
const unit543Vocab: GermanUnitVocabulary = {
    unitId: 543, title: "E-posta ve Yazışma",
    words: [
        { word: "der Absender", meaning: "Gönderen", pronunciation: "der ap-zen-dırl", example: "Wer ist der Absender der Mail?", exampleTranslation: "E-postayı gönderen kim?" },
        { word: "der Empfänger", meaning: "Alıcı", pronunciation: "der emp-feng-ır", example: "Bitte prüfen Sie den Empfänger.", exampleTranslation: "Lütfen alıcıyı kontrol edin." },
        { word: "der Betreff", meaning: "Konu (e-posta konusu)", pronunciation: "der bı-tref", example: "Was soll ich in den Betreff schreiben?", exampleTranslation: "Konu kısmına ne yazmalıyım?" },
        { word: "der Anhang", meaning: "Ek (dosya eki)", pronunciation: "der an-hang", example: "Die Datei finden Sie im Anhang.", exampleTranslation: "Dosyayı ekte bulabilirsiniz." },
        { word: "beifügen", meaning: "Eklemek / İliştirmek", pronunciation: "bay-fü-gın", example: "Ich füge den Lebenslauf bei.", exampleTranslation: "Özgeçmişi ekliyorum." },
        { word: "bestätigen", meaning: "Onaylamak", pronunciation: "be-şte-ti-gın", example: "Bitte bestätigen Sie den Erhalt dieser E-Mail.", exampleTranslation: "Lütfen bu e-postayı aldığınızı onaylayın." },
        { word: "antworten", meaning: "Cevap vermek", pronunciation: "ant-vor-tın", example: "Ich antworte Ihnen so schnell wie möglich.", exampleTranslation: "Size mümkün olan en kısa sürede cevap vereceğim." },
        { word: "weiterleiten", meaning: "İletmek (başka birine)", pronunciation: "vay-tırl-lay-tın", example: "Können Sie mir die Mail weiterleiten?", exampleTranslation: "E-postayı bana iletebilir misiniz?" },
        { word: "löschen", meaning: "Silmek", pronunciation: "lö-şın", example: "Löschen Sie diese Nachricht bitte.", exampleTranslation: "Lütfen bu mesajı silin." },
        { word: "der Ordner", meaning: "Klasör", pronunciation: "der ort-nır", example: "Schieben Sie die Mail in den Ordner 'Wichtig'.", exampleTranslation: "E-postayı 'Önemli' klasörüne taşıyın." },
        { word: "der Papierkorb", meaning: "Çöp kutusu", pronunciation: "der pa-pir-korp", example: "Die Mail ist im Papierkorb.", exampleTranslation: "E-posta çöp kutusunda." },
        { word: "der Spam", meaning: "Gereksiz e-posta / Spam", pronunciation: "der şpem", example: "Schau mal im Spam-Ordner nach.", exampleTranslation: "Spam klasörüne bir bak." },
        { word: "dringend", meaning: "Acil", pronunciation: "drin-gent", example: "Das ist eine dringende Angelegenheit.", exampleTranslation: "Bu acil bir mesele." },
        { word: "bringen", meaning: "Getirmek", pronunciation: "brin-gın", example: "Das Zimmermädchen bringt neue Handtücher.", exampleTranslation: "Oda görevlisi yeni havlular getiriyor." },
        { word: "die Signatur", meaning: "İmza (e-posta sonundaki)", pronunciation: "di zig-na-tur", example: "Ihre Signatur enthält Ihre Telefonnummer.", exampleTranslation: "İmzanız telefon numaranızı içeriyor." },
        { word: "die Anrede", meaning: "Hitap / Seslenme", pronunciation: "di an-re-dı", example: "Welche Anrede ist im Deutschen höflich?", exampleTranslation: "Almancada hangi hitap şekli naziktir?" },
        { word: "der Gruß", meaning: "Selam / Saygı ifadesi", pronunciation: "der grus", example: "Mit freundlichen Grüßen.", exampleTranslation: "Saygılarımla (Dostça selamlarla)." },
        { word: "informieren", meaning: "Bilgilendirmek / Haber vermek", pronunciation: "in-for-mi-rın", example: "Ich wollte Sie nur informieren.", exampleTranslation: "Sizi sadece bilgilendirmek istedim." },
        { word: "der Kontakt", meaning: "Kişi / İletişim / Bağlantı", pronunciation: "der kon-takt", example: "Speichern Sie den neuen Kontakt.", exampleTranslation: "Yeni kişiyi (bağlantıyı) kaydedin." },
        { word: "die Tastatur", meaning: "Klavye", pronunciation: "di tas-ta-tur", example: "Meine Tastatur ist auf Deutsch eingestellt.", exampleTranslation: "Klavyem Almanca olarak ayarlandı." },
        { word: "die Nachricht", meaning: "Mesaj", pronunciation: "di nah-riht", example: "Haben Sie meine Nachricht gelesen?", exampleTranslation: "Mesajımı okudunuz mu?" }
    ]
};

// ===== UNIT 544: DUYGULAR VE RUH HALİ =====
const unit544Vocab: GermanUnitVocabulary = {
    unitId: 544, title: "Duygular ve Ruh Hali",
    words: [
        { word: "zufrieden", meaning: "Memnun / Mutlu", pronunciation: "tsu-fri-dın", example: "Bist du mit deiner Arbeit zufrieden?", exampleTranslation: "İşinden memnun musun?" },
        { word: "begeistert", meaning: "Coşkulu / Hayran", pronunciation: "be-gays-turt", example: "Ich bin begeistert von diesem Film.", exampleTranslation: "Bu filme hayran kaldım (coşkuluyum)." },
        { word: "erleichtert", meaning: "Rahatlamış", pronunciation: "er-layh-turt", example: "Ich bin erleichtert, dass alles geklappt hat.", exampleTranslation: "Her şey yolunda gittiği için rahatladım." },
        { word: "einsam", meaning: "Yalnız (duygu olarak)", pronunciation: "ayn-zam", example: "Fühlst du dich manchmal einsam?", exampleTranslation: "Bazen kendini yalnız hissediyor musun?" },
        { word: "stolz", meaning: "Gururlu", pronunciation: "ştolts", example: "Ich bin stolz auf meinen Erfolg.", exampleTranslation: "Başarımla gurur duyuyorum." },
        { word: "enttäuscht", meaning: "Hayal kırıklığına uğramış", pronunciation: "ent-toyşt", example: "Ich bin sehr enttäuscht von dir.", exampleTranslation: "Senden dolayı çok hayal kırıklığına uğradım." },
        { word: "neidisch", meaning: "Kıskanç (haset)", pronunciation: "nay-diş", example: "Sei nicht neidisch auf andere.", exampleTranslation: "Başkalarını kıskanma." },
        { word: "eifersüchtig", meaning: "Kıskanç (ikili ilişkilerde)", pronunciation: "ay-fır-züh-tıh", example: "Er ist sehr eifersüchtig auf sie.", exampleTranslation: "Ona karşı çok kıskanç." },
        { word: "beleidigt", meaning: "Gücenmiş / Alınmış", pronunciation: "be-lay-diht", example: "Warum bist du jetzt beleidigt?", exampleTranslation: "Neden şimdi gücendin?" },
        { word: "schüchtern", meaning: "Utangaç", pronunciation: "şüh-tırln", example: "Kinder sind oft schüchtern gegenüber Fremden.", exampleTranslation: "Çocuklar yabancılara karşı genellikle utangaçtır." },
        { word: "geduldig", meaning: "Sabırlı", pronunciation: "ge-dul-dıh", example: "Man muss beim Lernen geduldig sein.", exampleTranslation: "Öğrenirken sabırlı olunmalı." },
        { word: "ungeduldig", meaning: "Sabırsız", pronunciation: "un-ge-dul-dıh", example: "Werde nicht so ungeduldig!", exampleTranslation: "Bu kadar sabırsızlanma!" },
        { word: "optimistisch", meaning: "İyimser", pronunciation: "op-ti-mis-tiş", example: "Er sieht die Zukunft optimistisch.", exampleTranslation: "Geleceğe iyimser bakıyor." },
        { word: "pessimistisch", meaning: "Kötümser", pronunciation: "pe-zi-mis-tiş", example: "Denk nicht immer so pessimistisch.", exampleTranslation: "Her zaman böyle kötümser düşünme." },
        { word: "das Vertrauen", meaning: "Güven", pronunciation: "das fer-trau-ın", example: "Ich habe volles Vertrauen in dich.", exampleTranslation: "Sana tam güvenim var." },
        { word: "die Laune", meaning: "Ruh hali / Keyif", pronunciation: "di lau-nı", example: "Er hat heute gute Laune.", exampleTranslation: "Bugün keyfi yerinde." },
        { word: "die Angst", meaning: "Korku", pronunciation: "di angst", example: "Ich habe Angst vor der Prüfung.", exampleTranslation: "Sınavdan korkuyorum." },
        { word: "die Sorge", meaning: "Endişe / Kaygı", pronunciation: "di zor-gı", example: "Mach dir keine Sorgen.", exampleTranslation: "Endişelenme." },
        { word: "beruhigen", meaning: "Sakinleştirmek / Yatıştırmak", pronunciation: "bı-ru-ı-gın", example: "Beruhige dich, alles wird gut.", exampleTranslation: "Sakinleş, her şey iyi olacak." },
        { word: "weinen", meaning: "Ağlamak", pronunciation: "vay-nın", example: "Warum weinst du?", exampleTranslation: "Neden ağlıyorsun?" }
    ]
};

// ===== UNIT 545: KİŞİLİK ÖZELLİKLERİ =====
const unit545Vocab: GermanUnitVocabulary = {
    unitId: 545, title: "Kişilik Özellikleri",
    words: [
        { word: "ehrlich", meaning: "Dürüst", pronunciation: "er-lıh", example: "Ich schätze deine ehrliche Meinung.", exampleTranslation: "Dürüst görüşünü takdir ediyorum." },
        { word: "höflich", meaning: "Nazik / Kibar", pronunciation: "höf-lıh", example: "Er ist ein sehr höflicher Junge.", exampleTranslation: "O çok nazik bir çocuk." },
        { word: "unhöflich", meaning: "Kaba / Nazik olmayan", pronunciation: "un-höf-lıh", example: "Es war unhöflich von ihm, nicht zu grüßen.", exampleTranslation: "Selam vermemesi kabalıktı." },
        { word: "großzügig", meaning: "Cömert", pronunciation: "gros-tsü-gıh", example: "Mein Opa ist sehr großzügig.", exampleTranslation: "Dedem çok cömerttir." },
        { word: "geizig", meaning: "Cimri", pronunciation: "gay-tsıh", example: "Er ist reich, aber geizig.", exampleTranslation: "Zengin ama cimri." },
        { word: "fleißig", meaning: "Çalışkan", pronunciation: "flay-zıh", example: "Fleißige Schüler bekommen gute Noten.", exampleTranslation: "Çalışkan öğrenciler iyi notlar alır." },
        { word: "faul", meaning: "Tembel", pronunciation: "faul", example: "Heute bin ich ein bisschen faul.", exampleTranslation: "Bugün biraz tembelim." },
        { word: "klug", meaning: "Zeki / Akıllı", pronunciation: "kluk", example: "Das war eine kluge Entscheidung.", exampleTranslation: "Bu akıllıca bir karardı." },
        { word: "dumm", meaning: "Aptal / Budala", pronunciation: "dum", example: "Stell keine dummen Fragen.", exampleTranslation: "Aptalca sorular sorma." },
        { word: "mutig", meaning: "Cesur", pronunciation: "mu-tıh", example: "Feuerwehrmänner sind sehr mutig.", exampleTranslation: "İtfaiyeciler çok cesurdur." },
        { word: "feige", meaning: "Korkak", pronunciation: "fay-gı", example: "Lauf nicht weg, sei nicht feige!", exampleTranslation: "Kaçma, korkak olma!" },
        { word: "bescheiden", meaning: "Alçakgönüllü / Mütevazı", pronunciation: "be-şay-dın", example: "Er ist sehr erfolgreich, aber bescheiden.", exampleTranslation: "O çok başarılı ama mütevazı." },
        { word: "arrogant", meaning: "Kibirli / Küstah", pronunciation: "a-ro-gant", example: "Ich mag seine arrogante Art nicht.", exampleTranslation: "Onun kibirli tavrını sevmiyorum." },
        { word: "zuverlässig", meaning: "Güvenilir", pronunciation: "tsu-fer-le-zıh", example: "Ich brauche einen zuverlässigen Partner.", exampleTranslation: "Güvenilir bir ortağa ihtiyacım var." },
        { word: "verantwortlich", meaning: "Sorumlu", pronunciation: "fer-ant-vort-lıh", example: "Wer ist verantwortlich für diesen Fehler?", exampleTranslation: "Bu hatadan kim sorumlu?" },
        { word: "humorvoll", meaning: "Espri anlayışı olan / Şakacı", pronunciation: "hu-mor-fol", example: "Mein Onkel ist sehr humorvoll.", exampleTranslation: "Amcam çok şakacıdır." },
        { word: "ernst", meaning: "Ciddi", pronunciation: "ernst", example: "Du siehst heute so ernst aus.", exampleTranslation: "Bugün çok ciddi görünüyorsun." },
        { word: "sympathisch", meaning: "Sempatik / Cana yakın", pronunciation: "zim-pa-tiş", example: "Sie war mir sofort sympathisch.", exampleTranslation: "Ona hemen ısındım (sempatik geldi)." },
        { word: "streng", meaning: "Sert / Katı / Disiplinli", pronunciation: "ştreng", example: "Unsere Lehrerin ist sehr streng.", exampleTranslation: "Öğretmenimiz çok sert (disiplinli)." },
        { word: "locker", meaning: "Rahat / Gevşek", pronunciation: "lo-kırl", example: "Er ist ein lockerer Typ.", exampleTranslation: "O rahat bir tip." }
    ]
};

// ===== UNIT 546: SPOR VE FITNESS =====
const unit546Vocab: GermanUnitVocabulary = {
    unitId: 546, title: "Spor ve Fitness",
    words: [
        { word: "die Bewegung", meaning: "Hareket / Egzersiz", pronunciation: "di bı-ve-gung", example: "Regelmäßige Bewegung ist gesund.", exampleTranslation: "Düzenli hareket (egzersiz) sağlıklıdır." },
        { word: "das Fitnessstudio", meaning: "Spor salonu", pronunciation: "das fit-nes-ştu-di-o", example: "Ich gehe dreimal pro Woche ins Fitnessstudio.", exampleTranslation: "Haftada üç kez spor salonuna gidiyorum." },
        { word: "der Muskel", meaning: "Kas", pronunciation: "der mus-kıl", example: "Er möchte mehr Muskeln aufbauen.", exampleTranslation: "Daha fazla kas yapmak (geliştirmek) istiyor." },
        { word: "das Training", meaning: "Antrenman / Eğitim", pronunciation: "das tre-ning", example: "Das Training war heute sehr anstrengend.", exampleTranslation: "Antrenman bugün çok yorucuydu." },
        { word: "die Mannschaft", meaning: "Takım / Ekip", pronunciation: "di man-şaft", example: "Unsere Mannschaft hat das Spiel gewonnen.", exampleTranslation: "Takımımız maçı kazandı." },
        { word: "der Schiedsrichter", meaning: "Hakem", pronunciation: "der şits-rih-tırl", example: "Der Schiedsrichter hat einen Fehler gemacht.", exampleTranslation: "Hakem bir hata yaptı." },
        { word: "das Tor", meaning: "Kale / Gol", pronunciation: "das tor", example: "Er hat ein Tor geschossen.", exampleTranslation: "Bir gol attı." },
        { word: "der Wettbewerb", meaning: "Yarışma / Rekabet", pronunciation: "der vet-be-verp", example: "Ich nehme an einem Wettbewerb teil.", exampleTranslation: "Bir yarışmaya katılıyorum." },
        { word: "die Weltmeisterschaft", meaning: "Dünya şampiyonası", pronunciation: "di velt-mayş-tırl-şaft", example: "Wer gewinnt die Weltmeisterschaft?", exampleTranslation: "Dünya şampiyonasını kim kazanacak?" },
        { word: "der Sieg", meaning: "Zafer / Galibiyet", pronunciation: "der zik", example: "Wir feiern unseren Sieg.", exampleTranslation: "Galibiyetimizi kutluyoruz." },
        { word: "die Niederlage", meaning: "Yenilgi / Mağlubiyet", pronunciation: "di ni-dırl-la-gı", example: "Die Niederlage war eine Enttäuschung.", exampleTranslation: "Yenilgi bir hayal kırıklığıydı." },
        { word: "trainieren", meaning: "Antrenman yapmak", pronunciation: "tre-ni-rın", example: "Wir trainieren jeden Montag.", exampleTranslation: "Her Pazartesi antrenman yapıyoruz." },
        { word: "joggen", meaning: "Koşuya çıkmak", pronunciation: "co-gın", example: "Ich gehe gerne im Park joggen.", exampleTranslation: "Parkta koşuya çıkmayı severim." },
        { word: "schwimmen", meaning: "Yüzmek", pronunciation: "şvi-mın", example: "Kannst du gut schwimmen?", exampleTranslation: "İyi yüzebilir misun?" },
        { word: "Rad fahren", meaning: "Bisiklet sürmek", pronunciation: "rat fa-rın", example: "Am Wochenende fahren wir Rad.", exampleTranslation: "Hafta sonu bisiklet sürüyoruz." },
        { word: "der Verein", meaning: "Kulüp / Dernek", pronunciation: "der fer-ayn", example: "Er spielt in einem Fußballverein.", exampleTranslation: "Bir futbol kulübünde oynuyor." },
        { word: "die Ausrüstung", meaning: "Ekipman / Donanım", pronunciation: "di aus-rüs-tung", example: "Die Ausrüstung zum Skifahren ist teuer.", exampleTranslation: "Kayak ekipmanı pahalıdır." },
        { word: "fit", meaning: "Zinde / Formda", pronunciation: "fit", example: "Ich möchte fit bleiben.", exampleTranslation: "Zinde kalmak istiyorum." },
        { word: "anstrengend", meaning: "Yorucu / Zahmetli", pronunciation: "an-ştren-gent", example: "Die Wanderung war sehr anstrengend.", exampleTranslation: "Doğa yürüyüşü çok yorucuydu." },
        { word: "entspannend", meaning: "Rahatlatıcı / Dinlendirici", pronunciation: "ent-şpa-nent", example: "Yoga ist sehr entspannend.", exampleTranslation: "Yoga çok rahatlatıcıdır." }
    ]
};

// ===== UNIT 547: MÜZİK VE KONSER =====
const unit547Vocab: GermanUnitVocabulary = {
    unitId: 547, title: "Müzik ve Konser",
    words: [
        { word: "das Konzert", meaning: "Konser", pronunciation: "das kon-tsert", example: "Gehen wir heute Abend zum Konzert?", exampleTranslation: "Bu akşam konsere gidelim mi?" },
        { word: "die Eintrittskarte", meaning: "Giriş bileti", pronunciation: "di ayn-trits-kar-tı", example: "Haben wir die Eintrittskarten dabei?", exampleTranslation: "Giriş biletleri yanımızda mı?" },
        { word: "die Bühne", meaning: "Sahne", pronunciation: "di bü-nı", example: "Die Band steht auf der Bühne.", exampleTranslation: "Grup sahnede duruyor." },
        { word: "der Musiker", meaning: "Müzisyen", pronunciation: "der mu-zi-kırl", example: "Er ist ein begabter Musiker.", exampleTranslation: "O yetenekli bir müzisyen." },
        { word: "das Instrument", meaning: "Enstrüman", pronunciation: "das in-ştru-ment", example: "Welches Instrument spielst du?", exampleTranslation: "Hangi enstrümanı çalıyorsun?" },
        { word: "die Gitarre", meaning: "Gitar", pronunciation: "di gi-ta-rı", example: "Ich lerne seit einem Jahr Gitarre.", exampleTranslation: "Bir yıldır gitar öğreniyorum." },
        { word: "das Klavier", meaning: "Piyano", pronunciation: "das kla-vir", example: "Sie spielt wunderschön Klavier.", exampleTranslation: "O harika piyano çalıyor." },
        { word: "das Schlagzeug", meaning: "Bateri", pronunciation: "das şlak-tsoyk", example: "Das Schlagzeug ist sehr laut.", exampleTranslation: "Bateri çok gürültülüdür." },
        { word: "der Sänger", meaning: "Şarkıcı", pronunciation: "der zeng-ırl", example: "Der Sänger hat eine tolle Stimme.", exampleTranslation: "Şarkıcının harika bir sesi var." },
        { word: "das Lied", meaning: "Şarkı", pronunciation: "das lit", example: "Das ist mein Lieblingslied.", exampleTranslation: "Bu benim en sevdiğim şarkı." },
        { word: "der Rhythmus", meaning: "Ritm", pronunciation: "der rüt-mus", example: "Ich mag den Rhythmus dieser Musik.", exampleTranslation: "Bu müziğin ritmini seviyorum." },
        { word: "der Text", meaning: "Metin / Söz", pronunciation: "der tekst", example: "Kannst du den Text mitsingen?", exampleTranslation: "Şarkı sözlerine eşlik edebilir misin?" },
        { word: "die Lautstärke", meaning: "Ses seviyesi", pronunciation: "di laut-şter-kı", example: "Regeln Sie bitte die Lautstärke.", exampleTranslation: "Lütfen ses seviyesini ayarlayın." },
        { word: "klatschen", meaning: "Alkışlamak", pronunciation: "klat-şın", example: "Das Publikum klatscht laut.", exampleTranslation: "Seyirci yüksek sesle alkışlıyor." },
        { word: "die Veranstaltung", meaning: "Etkinlik / Organizasyon", pronunciation: "di fer-an-ştal-tung", example: "In der Stadt gibt es viele kulturelle Veranstaltungen.", exampleTranslation: "Şehirde birçok kültürel etkinlik var." },
        { word: "berühmt", meaning: "Ünlü / Meşhur", pronunciation: "be-rümt", example: "Er ist ein berühmter Geiger.", exampleTranslation: "O ünlü bir kemancıdır." },
        { word: "begabt", meaning: "Yetenekli", pronunciation: "be-gapkt", example: "Sie ist sehr musikalisch begabt.", exampleTranslation: "O müzikal açıdan çok yetenekli." },
        { word: "live", meaning: "Canlı", pronunciation: "layf", example: "Ich mag Live-Musik mehr.", exampleTranslation: "Canlı müziği daha çok severim." },
        { word: "das Album", meaning: "Albüm", pronunciation: "das al-bum", example: "Wann kommt das neue Album raus?", exampleTranslation: "Yeni albüm ne zaman çıkıyor?" },
        { word: "die Band", meaning: "Grup (müzik)", pronunciation: "di bent", example: "Die Band spielt Rockmusik.", exampleTranslation: "Grup rock müzik çalıyor." }
    ]
};

// ===== UNIT 548: SİNEMA VE TİYATRO =====
const unit548Vocab: GermanUnitVocabulary = {
    unitId: 548, title: "Sinema ve Tiyatro",
    words: [
        { word: "der Film", meaning: "Film", pronunciation: "der film", example: "Der Film war sehr traurig.", exampleTranslation: "Film çok üzücüydü." },
        { word: "das Kino", meaning: "Sinema", pronunciation: "das ki-no", example: "Wir gehen am Freitag ins Kino.", exampleTranslation: "Cuma günü sinemaya gidiyoruz." },
        { word: "der Schauspieler", meaning: "Oyuncu / Aktör", pronunciation: "der şau-şpi-lırl", example: "Er ist ein bekannter Schauspieler.", exampleTranslation: "O tanınmış bir oyuncu." },
        { word: "die Regie", meaning: "Yönetmenlik / Reji", pronunciation: "di re-ji", example: "Wer führte Regie bei diesem Film?", exampleTranslation: "Bu filmin yönetmenliğini kim yaptı?" },
        { word: "die Handlung", meaning: "Olay örgüsü / Konu", pronunciation: "di hant-lung", example: "Die Handlung ist kompliziert.", exampleTranslation: "Olay örgüsü karmaşık." },
        { word: "die Komödie", meaning: "Komedi", pronunciation: "di ko-mö-di-ı", example: "Wir haben eine lustige Komödie gesehen.", exampleTranslation: "Komik bir komedi izledik." },
        { word: "der Krimi", meaning: "Polisiye", pronunciation: "der kri-mi", example: "Ich lese gerne Krimis.", exampleTranslation: "Polisiye okumayı severim." },
        { word: "die Dokumentation", meaning: "Belgesel", pronunciation: "di do-ku-men-ta-tsion", example: "Eine Dokumentation über Tiere.", exampleTranslation: "Hayvanlar hakkında bir belgesel." },
        { word: "die Leinwand", meaning: "Beyaz perde", pronunciation: "di layn-vant", example: "Die Leinwand im Kino ist riesig.", exampleTranslation: "Sinemadaki beyaz perde devasadır." },
        { word: "der Untertitel", meaning: "Altyazı", pronunciation: "der un-tırl-ti-tıl", example: "Ich sehe Filme lieber mit Untertiteln.", exampleTranslation: "Filmleri altyazılı izlemeyi tercih ederim." },
        { word: "die Besetzung", meaning: "Oyuncu kadrosu", pronunciation: "di be-zet-tsung", example: "Die Besetzung des Films ist großartig.", exampleTranslation: "Filmin oyuncu kadrosu harika." },
        { word: "das Theater", meaning: "Tiyatro", pronunciation: "das te-a-tırl", example: "Wir haben Karten fürs Theater.", exampleTranslation: "Tiyatro için biletlerimiz var." },
        { word: "das Stück", meaning: "Oyun / Parça", pronunciation: "das ştük", example: "Wie hat dir das Theaterstück gefallen?", exampleTranslation: "Tiyatro oyununu nasıl buldun?" },
        { word: "die Rolle", meaning: "Rol", pronunciation: "di ro-lı", example: "Sie spielt die Hauptrolle.", exampleTranslation: "Başrolü oynuyor." },
        { word: "das Publikum", meaning: "Seyirci / İzleyici", pronunciation: "das pub-li-kum", example: "Das Publikum war sehr leise.", exampleTranslation: "Seyirci çok sessizdi." },
        { word: "der Beifall", meaning: "Alkış", pronunciation: "der bay-fal", example: "Es gab langen Beifall.", exampleTranslation: "Uzun süren alkış vardı." },
        { word: "spannend", meaning: "Heyecanlı / Sürükleyici", pronunciation: "şpa-nent", example: "Das Buch ist sehr spannend.", exampleTranslation: "Kitap çok sürükleyici." },
        { word: "lustig", meaning: "Komik / Eğlenceli", pronunciation: "lus-tıh", example: "Der Film war sehr lustig.", exampleTranslation: "Film çok komikti." },
        { word: "langweilig", meaning: "Sıkıcı", pronunciation: "lang-vay-lıh", example: "Ich fand den Film langweilig.", exampleTranslation: "Filmi sıkıcı buldum." },
        { word: "sehenswert", meaning: "Görülmeye değer", pronunciation: "ze-ıns-vert", example: "Diese Ausstellung ist absolut sehenswert.", exampleTranslation: "Bu sergi kesinlikle görülmeye değer." }
    ]
};

// ===== UNIT 549: TEKNOLOJİ VE İNTERNET =====
const unit549Vocab: GermanUnitVocabulary = {
    unitId: 549, title: "Teknoloji ve İnternet",
    words: [
        { word: "das Internet", meaning: "İnternet", pronunciation: "das in-tırl-net", example: "Ich surfe im Internet.", exampleTranslation: "İnternette sörf yapıyorum (geziniyorum)." },
        { word: "die Webseite", meaning: "Web sitesi", pronunciation: "di vep-zay-tı", example: "Die Webseite ist sehr informativ.", exampleTranslation: "Web sitesi çok bilgilendirici." },
        { word: "der Browser", meaning: "Tarayıcı", pronunciation: "der brau-zırl", example: "Welchen Browser benutzt du?", exampleTranslation: "Hangi tarayıcıyı kullanıyorsun?" },
        { word: "das Passwort", meaning: "Şifre / Parola", pronunciation: "das pas-vort", example: "Dein Passwort ist zu einfach.", exampleTranslation: "Şifren çok basit." },
        { word: "die Verbindung", meaning: "Bağlantı", pronunciation: "di fer-bin-dung", example: "Die Internetverbindung ist langsam.", exampleTranslation: "İnternet bağlantısı yavaş." },
        { word: "herunterladen", meaning: "İndirmek / Download", pronunciation: "hı-run-tırl-la-dın", example: "Du kannst die Datei hier herunterladen.", exampleTranslation: "Dosyayı buradan indirebilirsin." },
        { word: "hochladen", meaning: "Yüklemek / Upload", pronunciation: "hoh-la-dın", example: "Ich muss das Foto noch hochladen.", exampleTranslation: "Fotoğrafı henüz yüklemem gerekiyor." },
        { word: "die Datei", meaning: "Dosya", pronunciation: "di da-tay", example: "Wo hast du die Datei gespeichert?", exampleTranslation: "Dosyayı nereye kaydettin?" },
        { word: "die Software", meaning: "Yazılım", pronunciation: "di soft-ver", example: "Wir installieren eine neue Software.", exampleTranslation: "Yeni bir yazılım yüklüyoruz." },
        { word: "die Hardware", meaning: "Donanım", pronunciation: "di hart-ver", example: "Die Hardware muss modernisiert werden.", exampleTranslation: "Donanımın modernize edilmesi gerekiyor." },
        { word: "der Computer", meaning: "Bilgisayar", pronunciation: "der kom-pyu-tırl", example: "Mein Computer ist abgestürzt.", exampleTranslation: "Bilgisayarım çöktü." },
        { word: "der Laptop", meaning: "Dizüstü bilgisayar", pronunciation: "der lep-top", example: "Ich nehme meinen Laptop mit.", exampleTranslation: "Dizüstü bilgisayarımı yanıma alıyorum." },
        { word: "die Tastatur", meaning: "Klavye", pronunciation: "di tas-ta-tur", example: "Ich brauche eine neue Tastatur.", exampleTranslation: "Yeni bir klavyeye ihtiyacım var." },
        { word: "die Maus", meaning: "Fare (bilgisayar)", pronunciation: "di maus", example: "Klicke mit der Maus hier.", exampleTranslation: "Fareyle buraya tıkla." },
        { word: "der Bildschirm", meaning: "Ekran", pronunciation: "der bilt-şirm", example: "Der Bildschirm ist zu dunkel.", exampleTranslation: "Ekran çok karanlık." },
        { word: "drucken", meaning: "Yazdırmak", pronunciation: "dru-kın", example: "Kannst du das Dokument drucken?", exampleTranslation: "Belgeyi yazdırabilir misin?" },
        { word: "der Drucker", meaning: "Yazıcı", pronunciation: "der druk-ırl", example: "Der Drucker hat kein Papier mehr.", exampleTranslation: "Yazıcının kağıdı bitmiş." },
        { word: "kabellos", meaning: "Kablosuz", pronunciation: "ka-bıl-los", example: "Ich benutze eine kabellose Maus.", exampleTranslation: "Kablosuz fare kullanıyorum." },
        { word: "digital", meaning: "Dijital", pronunciation: "di-gi-tal", example: "Wir leben in einer digitalen Welt.", exampleTranslation: "Dijital bir dünyada yaşıyoruz." },
        { word: "online", meaning: "Çevrimiçi", pronunciation: "on-layn", example: "Ich kaufe Lebensmittel oft online.", exampleTranslation: "Gıda maddelerini sık sık çevrimiçi satın alırım." }
    ]
};

// ===== UNIT 550: SOSYAL MEDYA =====
const unit550Vocab: GermanUnitVocabulary = {
    unitId: 550, title: "Sosyal Medya",
    words: [
        { word: "das soziale Netzwerk", meaning: "Sosyal ağ", pronunciation: "das zo-tsi-a-lı nets-verk", example: "Welches soziale Netzwerk nutzt du am meisten?", exampleTranslation: "En çok hangi sosyal ağı kullanıyorsun?" },
        { word: "das Profil", meaning: "Profil", pronunciation: "das pro-fil", example: "Dein Profilbild sieht toll aus.", exampleTranslation: "Profil resmin harika görünüyor." },
        { word: "der Account", meaning: "Hesap", pronunciation: "der a-ka-unt", example: "Ich habe meinen Account gelöscht.", exampleTranslation: "Hesabımı sildim." },
        { word: "posten", meaning: "Paylaşmak / Post atmak", pronunciation: "pos-tın", example: "Ich habe heute ein neues Foto gepostet.", exampleTranslation: "Bugün yeni bir fotoğraf paylaştım." },
        { word: "teilen", meaning: "Paylaşmak", pronunciation: "tay-lın", example: "Kannst du diesen Beitrag teilen?", exampleTranslation: "Bu gönderiyi paylaşabilir misin?" },
        { word: "der Kommentar", meaning: "Yorum", pronunciation: "der ko-men-tar", example: "Schreib mir einen Kommentar.", exampleTranslation: "Bana bir yorum yaz." },
        { word: "kommentieren", meaning: "Yorum yapmak", pronunciation: " ko-men-ti-rın", example: "Sie kommentiert fast jeden Beitrag.", exampleTranslation: "Neredeyse her gönderiye yorum yapıyor." },
        { word: "liken", meaning: "Beğenmek (like atmak)", pronunciation: "lay-kın", example: "Ich habe dein Foto geliked.", exampleTranslation: "Fotoğrafını beğendim." },
        { word: "folgen", meaning: "Takip etmek", pronunciation: "fol-gın", example: "Folgt ihr mir auf Instagram?", exampleTranslation: "Beni Instagram'da takip ediyor musunuz?" },
        { word: "der Abonnent", meaning: "Abone / Takipçi", pronunciation: "der a-bo-nent", example: "Der Kanal hat über eine Million Abonnenten.", exampleTranslation: "Kanalın bir milyondan fazla abonesi var." },
        { word: "das Video", meaning: "Video", pronunciation: "das vi-de-o", example: "Dieses Video ist viral gegangen.", exampleTranslation: "Bu video viral oldu." },
        { word: "der Blog", meaning: "Blog", pronunciation: "der blok", example: "Ich schreibe einen eigenen Blog.", exampleTranslation: "Kendi bloğumu yazıyorum." },
        { word: "die Nachricht", meaning: "Mesaj / Haber", pronunciation: "di nah-riht", example: "Schick mir eine Direktnachricht.", exampleTranslation: "Bana direkt mesaj gönder." },
        { word: "privat", meaning: "Özel / Kişisel", pronunciation: "pri-vat", example: "Mein Konto ist privat.", exampleTranslation: "Hesabım gizli (özel)." },
        { word: "öffentlich", meaning: "Genel / Herkese açık", pronunciation: "ö-fent-lıh", example: "Dieser Beitrag ist öffentlich.", exampleTranslation: "Bu gönderi herkese açık." },
        { word: "die Privatsphäre", meaning: "Gizlilik / Özel yaşam", pronunciation: "di pri-vat-sfe-rı", example: "Privatsphäre ist im Internet wichtig.", exampleTranslation: "İnternette gizlilik önemlidir." },
        { word: "vernetzt", meaning: "Bağlantılı / Ağa bağlı", pronunciation: "fer-netst", example: "Wir sind alle miteinander vernetzt.", exampleTranslation: "Hepimiz birbirimizle bağlantılıyız." },
        { word: "der Trend", meaning: "Trend / Akım", pronunciation: "der trent", example: "Was ist der aktuelle Trend in der Mode?", exampleTranslation: "Modada şu anki trend nedir?" },
        { word: "die Benachrichtigung", meaning: "Bildirim", pronunciation: "di bı-nah-rih-ti-gung", example: "Ich bekomme zu viele Benachrichtigungen.", exampleTranslation: "Çok fazla bildirim alıyorum." },
        { word: "blockieren", meaning: "Engellemek", pronunciation: "blo-ki-rın", example: "Er hat mich blockiert.", exampleTranslation: "Beni engelledi." }
    ]
};

// ===== UNIT 551: EV ARAMA VE TAŞINMA =====
const unit551Vocab: GermanUnitVocabulary = {
    unitId: 551, title: "Ev Arama ve Taşınma",
    words: [
        { word: "die Anzeige", meaning: "İlan", pronunciation: "di an-tsay-gı", example: "Ich habe die Anzeige in der Zeitung gelesen.", exampleTranslation: "İlanı gazetede okudum." },
        { word: "die Kaltmiete", meaning: "Net kira (ısınma hariç)", pronunciation: "di kalt-mi-tı", example: "Wie hoch ist die Kaltmiete?", exampleTranslation: "Net kira ne kadar?" },
        { word: "die Nebenkosten", meaning: "Ek giderler (aidat vb.)", pronunciation: "di ne-bın-kos-tın", example: "Die Nebenkosten sind im Preis enthalten.", exampleTranslation: "Ek giderler fiyata dahildir." },
        { word: "die Warmmiete", meaning: "Brüt kira (her şey dahil)", pronunciation: "di varm-mi-tı", example: "Die Warmmiete beträgt 800 Euro.", exampleTranslation: "Brüt kira 800 euro." },
        { word: "die Kaution", meaning: "Depozito", pronunciation: "di kau-tsion", example: "Man muss drei Monatsmieten Kaution zahlen.", exampleTranslation: "Üç aylık kira kadar depozito ödenmeli." },
        { word: "der Mietvertrag", meaning: "Kira sözleşmesi", pronunciation: "der mit-fer-trak", example: "Unterschreiben Sie bitte den Mietvertrag.", exampleTranslation: "Lütfen kira sözleşmesini imzalayın." },
        { word: "der Vermieter", meaning: "Ev sahibi (kiralayan)", pronunciation: "der fer-mi-tırl", example: "Unser Vermieter ist sehr nett.", exampleTranslation: "Ev sahibimiz çok nazik." },
        { word: "der Mieter", meaning: "Kiracı", pronunciation: "der mi-tırl", example: "Die Mieter im Haus sind ruhig.", exampleTranslation: "Evdeki kiracılar sessiz." },
        { word: "einziehen", meaning: "Taşınmak (bir eve)", pronunciation: "ayn-tsi-ın", example: "Wann können wir in die neue Wohnung einziehen?", exampleTranslation: "Yeni daireye ne zaman taşınabiliriz?" },
        { word: "ausziehen", meaning: "Taşınmak (evden çıkmak)", pronunciation: "aus-tsi-ın", example: "Er zieht nächsten Monat aus.", exampleTranslation: "Gelecek ay taşınıyor (çıkıyor)." },
        { word: "umziehen", meaning: "Taşınmak (bir yerden bir yere)", pronunciation: "um-tsi-ın", example: "Wir ziehen von Berlin nach Hamburg um.", exampleTranslation: "Berlin'den Hamburg'a taşınıyoruz." },
        { word: "das Viertel", meaning: "Semt / Mahalle", pronunciation: "das fir-tıl", example: "In welchem Viertel suchst du eine Wohnung?", exampleTranslation: "Hangi semtte daire arıyorsun?" },
        { word: "die WG (Wohngemeinschaft)", meaning: "Paylaşımlı ev", pronunciation: "di ve-ge", example: "Ich wohne in einer WG mit zwei Studenten.", exampleTranslation: "İki öğrenciyle paylaşımlı bir evde yaşıyorum." },
        { word: "der Mitbewohner", meaning: "Ev arkadaşı", pronunciation: "der mit-bı-vo-nırl", example: "Mein Mitbewohner kocht sehr gut.", exampleTranslation: "Ev arkadaşım çok iyi yemek yapıyor." },
        { word: "möbliert", meaning: "Mobilyalı", pronunciation: "mö-blirt", example: "Die Wohnung wird möbliert vermietet.", exampleTranslation: "Daire mobilyalı olarak kiralanıyor." },
        { word: "hell", meaning: "Aydınlık / Işıklı", pronunciation: "hel", example: "Das Wohnzimmer ist sehr hell.", exampleTranslation: "Oturma odası çok aydınlık." },
        { word: "ruhig", meaning: "Sakin / Sessiz", pronunciation: "ru-ıh", example: "Ich suche eine ruhige Wohnung.", exampleTranslation: "Sakin bir daire arıyorum." },
        { word: "zentral", meaning: "Merkezi", pronunciation: "tsen-tral", example: "Die Lage der Wohnung ist sehr zentral.", exampleTranslation: "Dairenin konumu çok merkezi." },
        { word: "die Heizung", meaning: "Isıtma", pronunciation: "di hay-tsung", example: "Die Heizung funktioniert einwandfrei.", exampleTranslation: "Isıtma sorunsuz çalışıyor." },
        { word: "der Quadratmeter", meaning: "Metrekare", pronunciation: "der kva-drat-me-tırl", example: "Die Wohnung hat 60 Quadratmeter.", exampleTranslation: "Daire 60 metrekare." }
    ]
};

// ===== UNIT 552: ÇEVRE VE EKOLOJİ =====
const unit552Vocab: GermanUnitVocabulary = {
    unitId: 552, title: "Çevre ve Ekoloji",
    words: [
        { word: "die Umwelt", meaning: "Çevre", pronunciation: "di um-velt", example: "Wir müssen die Umwelt schützen.", exampleTranslation: "Çevreyi korumalıyız." },
        { word: "der Umweltschutz", meaning: "Çevreyi koruma", pronunciation: "der um-velt-şuts", example: "Umweltschutz beginnt zu Hause.", exampleTranslation: "Çevreyi koruma evde başlar." },
        { word: "die Natur", meaning: "Doğa", pronunciation: "di na-tur", example: "Ich verbringe gerne Zeit in der Natur.", exampleTranslation: "Doğada vakit geçirmeyi severim." },
        { word: "das Klima", meaning: "İklim", pronunciation: "das kli-ma", example: "Das Klima verändert sich weltweit.", exampleTranslation: "İklim dünya çapında değişiyor." },
        { word: "der Klimawandel", meaning: "İklim değişikliği", pronunciation: "der kli-ma-van-dıl", example: "Der Klimawandel ist eine große Gefahr.", exampleTranslation: "İklim değişikliği büyük bir tehlikedir." },
        { word: "die Erwärmung", meaning: "Isınma", pronunciation: "di er-ver-mung", example: "Die globale Erwärmung stoppen.", exampleTranslation: "Küresel ısınmayı durdurmak." },
        { word: "der Müll", meaning: "Çöp", pronunciation: "der mül", example: "Wirf den Müll bitte in die Tonne.", exampleTranslation: "Lütfen çöpü kutuya at." },
        { word: "die Mülltrennung", meaning: "Çöpleri ayırma", pronunciation: "di mül-tre-nung", example: "Mülltrennung ist in Deutschland sehr wichtig.", exampleTranslation: "Almanya'da çöpleri ayırma çok önemlidir." },
        { word: "das Recycling", meaning: "Geri dönüşüm", pronunciation: "das ri-say-kling", example: "Papier und Glas kommen ins Recycling.", exampleTranslation: "Kağıt ve cam geri dönüşüme gider." },
        { word: "erneuerbare Energien", meaning: "Yenilenebilir enerjiler", pronunciation: "er-noy-ı-ba-rı e-ner-gi-ın", example: "Windkraft ist eine erneuerbare Energie.", exampleTranslation: "Rüzgar enerjisi yenilenebilir bir enerjidir." },
        { word: "die Solarenergie", meaning: "Güneş enerjisi", pronunciation: "di zo-lar-e-ner-gi", example: "Solarenergie ist sauber.", exampleTranslation: "Güneş enerjisi temizdir." },
        { word: "die Verschmutzung", meaning: "Kirlilik", pronunciation: "di fer-şmut-tsung", example: "Die Luftverschmutzung in der Stadt ist hoch.", exampleTranslation: "Şehirdeki hava kirliliği yüksek." },
        { word: "sparen", meaning: "Tasarruf etmek / Biriktirmek", pronunciation: "şpa-rın", example: "Wir müssen Wasser und Strom sparen.", exampleTranslation: "Su ve elektrik tasarrufu yapmalıyız." },
        { word: "verschwenden", meaning: "İsraf etmek", pronunciation: "fer-şven-dın", example: "Verschwende nicht so viel Papier.", exampleTranslation: "Bu kadar çok kağıt israf etme." },
        { word: "schützen", meaning: "Korumak", pronunciation: "şüt-tsın", example: "Diese Creme schützt die Haut.", exampleTranslation: "Bu krem cildi korur." },
        { word: "zerstören", meaning: "Yok etmek / Tahrip etmek", pronunciation: "tser-ştö-rın", example: "Der Sturm hat den Wald zerstört.", exampleTranslation: "Fırtına ormanı tahrip etti." },
        { word: "nachhaltig", meaning: "Sürdürülebilir", pronunciation: "nah-hal-tıh", example: "Wir brauchen eine nachhaltige Strategie.", exampleTranslation: "Sürdürülebilir bir stratejiye ihtiyacımız var." },
        { word: "biologisch", meaning: "Biyolojik / Organik", pronunciation: "bi-o-lo-giş", example: "Ich kaufe nur biologisches Gemüse.", exampleTranslation: "Sadece organik sebze satın alırım." },
        { word: "das Plastik", meaning: "Plastik", pronunciation: "das plas-tik", example: "Wir sollten weniger Plastik benutzen.", exampleTranslation: "Daha az plastik kullanmalıyız." },
        { word: "die Gefahr", meaning: "Tehlike", pronunciation: "di gı-far", example: "In diesem Wald gibt es keine Gefahr.", exampleTranslation: "Bu ormanda tehlike yok." }
    ]
};

// ===== UNIT 553: MEDYA VE HABERLER =====
const unit553Vocab: GermanUnitVocabulary = {
    unitId: 553, title: "Medya ve Haberler",
    words: [
        { word: "die Medien", meaning: "Medya", pronunciation: "di me-di-ın", example: "Medien beeinflussen unsere Meinung.", exampleTranslation: "Medya görüşlerimizi etkiler." },
        { word: "die Nachricht", meaning: "Haber", pronunciation: "di nah-riht", example: "Hast du schon die neuesten Nachrichten gehört?", exampleTranslation: "En son haberleri duydun mu?" },
        { word: "die Zeitung", meaning: "Gazete", pronunciation: "di tsay-tung", example: "Mein Vater liest jeden Morgen die Zeitung.", exampleTranslation: "Babam her sabah gazete okur." },
        { word: "die Zeitschrift", meaning: "Dergi", pronunciation: "di tsayt-şrift", example: "Ich mag Zeitschriften über Mode.", exampleTranslation: "Moda hakkındaki dergileri severim." },
        { word: "der Artikel", meaning: "Makale / Yazı", pronunciation: "der ar-ti-kıl", example: "Der Artikel in der Zeitung war sehr interessant.", exampleTranslation: "Gazetedeki makale çok ilginçti." },
        { word: "das Radio", meaning: "Radyo", pronunciation: "das ra-di-o", example: "Wir hören im Auto Radio.", exampleTranslation: "Arabada radyo dinliyoruz." },
        { word: "das Fernsehen", meaning: "Televizyon (yayın olarak)", pronunciation: "das fern-ze-ın", example: "Was kommt heute im Fernsehen?", exampleTranslation: "Bugün televizyonda ne var?" },
        { word: "die Sendung", meaning: "Yayın / Program", pronunciation: "di zen-dung", example: "Meine Lieblingssendung beginnt um 20 Uhr.", exampleTranslation: "En sevdiğim program saat 20'de başlıyor." },
        { word: "der Moderator", meaning: "Sunucu / Moderatör", pronunciation: "der mo-dı-ra-tırl", example: "Der Moderator stellt die Gäste vor.", exampleTranslation: "Sunucu misafirleri takdim ediyor." },
        { word: "die Schlagzeile", meaning: "Manşet", pronunciation: "di şlak-tsay-lı", example: "Die Schlagzeile heute ist schockierend.", exampleTranslation: "Bugünkü manşet şok edici." },
        { word: "das Ereignis", meaning: "Olay / Hadise", pronunciation: "das er-ayk-nis", example: "Ein wichtiges politisches Ereignis.", exampleTranslation: "Önemli bir siyasi olay." },
        { word: "berichten", meaning: "Haber vermek / Rapor etmek / Anlatmak", pronunciation: "be-rih-tın", example: "Die Medien berichten über das Unglück.", exampleTranslation: "Medya kaza (şanssızlık) hakkında haber veriyor." },
        { word: "die Information", meaning: "Bilgi", pronunciation: "di in-for-ma-tsion", example: "Woher hast du diese Information?", exampleTranslation: "Bu bilgiyi nereden aldın?" },
        { word: "die Meinung", meaning: "Görüş / Fikir", pronunciation: "di may-nung", example: "Was ist deine Meinung zu diesem Thema?", exampleTranslation: "Bu konu hakkındaki fikrin nedir?" },
        { word: "das Interview", meaning: "Röportaj / Mülakat", pronunciation: "das in-tırl-vyu", example: "Der Präsident gab ein Interview.", exampleTranslation: "Başkan bir röportaj verdi." },
        { word: "veröffentlichen", meaning: "Yayımlamak / Açıklamak", pronunciation: "fer-ö-fent-lı-hın", example: "Das Buch wurde letztes Jahr veröffentlicht.", exampleTranslation: "Kitap geçen yıl yayımlandı." },
        { word: "die Presse", meaning: "Basın", pronunciation: "di pre-zı", example: "Die Presse ist eingeladen.", exampleTranslation: "Basın davet edildi." },
        { word: "die Kritik", meaning: "Eleştiri", pronunciation: "di kri-tik", example: "Der Film bekam viel gute Kritik.", exampleTranslation: "Film çok iyi eleştiri aldı." },
        { word: "der Sender", meaning: "Kanal / İstasyon", pronunciation: "der zen-dırl", example: "Welchen Sender schaust du am liebsten?", exampleTranslation: "En çok hangi kanalı izlersin?" },
        { word: "aktuell", meaning: "Güncel", pronunciation: "ak-tu-el", example: "Das sind die aktuellen Nachrichten.", exampleTranslation: "Bunlar güncel haberler." }
    ]
};

// ===== UNIT 554: KÜLTÜR VE GELENEKLER =====
const unit554Vocab: GermanUnitVocabulary = {
    unitId: 554, title: "Kültür ve Gelenekler",
    words: [
        { word: "die Kultur", meaning: "Kültür", pronunciation: "di kul-tur", example: "Deutschland hat eine reiche Kultur.", exampleTranslation: "Almanya'nın zengin bir kültürü var." },
        { word: "die Tradition", meaning: "Gelenek", pronunciation: "di tra-di-tsion", example: "Diese Tradition wird seit Jahrhunderten gepflegt.", exampleTranslation: "Bu gelenek yüzyıllardır yaşatılıyor." },
        { word: "der Brauch", meaning: "Adet / Töre", pronunciation: "der brauh", example: "Was ist ein typisch deutscher Brauch?", exampleTranslation: "Tipik bir Alman adeti nedir?" },
        { word: "die Nationalhymne", meaning: "Milli marş", pronunciation: "di na-tsion-al-hüm-nı", example: "Wir singen die Nationalhymne.", exampleTranslation: "Milli marşı söylüyoruz." },
        { word: "das Fest", meaning: "Festival / Şenlik", pronunciation: "das fest", example: "Das Oktoberfest ist ein weltberühmtes Fest.", exampleTranslation: "Oktoberfest dünya çapında ünlü bir festivaldir." },
        { word: "feiern", meaning: "Kutlamak", pronunciation: "fay-ırn", example: "Wie feiert man Weihnachten in der Türkei?", exampleTranslation: "Türkiye'de Noel (yeni yıl) nasıl kutlanır?" },
        { word: "die Geschichte", meaning: "Tarih / Hikaye", pronunciation: "di gı-şiht-ı", example: "Die deutsche Geschichte ist sehr interessant.", exampleTranslation: "Alman tarihi çok ilginçtir." },
        { word: "das Museum", meaning: "Müze", pronunciation: "das mu-ze-um", example: "Wir besuchen ein historisches Museum.", exampleTranslation: "Tarihi bir müzeyi ziyaret ediyoruz." },
        { word: "die Kunst", meaning: "Sanat", pronunciation: "di kunst", example: "Sie interessiert sich sehr für Kunst.", exampleTranslation: "Sanata çok ilgi duyuyor." },
        { word: "das Denkmal", meaning: "Anıt", pronunciation: "das denk-mal", example: "Das Brandenburger Tor ist ein Denkmal.", exampleTranslation: "Brandenburg Kapısı bir anıttır." },
        { word: "die Religion", meaning: "Din", pronunciation: "di re-li-gi-on", example: "Religion spielt eine wichtige Rolle.", exampleTranslation: "Din önemli bir rol oynuyor." },
        { word: "der Feiertag", meaning: "Resmi tatil / Bayram", pronunciation: "der fay-ır-tak", example: "Morgen ist ein gesetzlicher Feiertag.", exampleTranslation: "Yarın resmi tatil." },
        { word: "der Gast", meaning: "Misafir", pronunciation: "der gast", example: "Gastfreundschaft ist uns wichtig.", exampleTranslation: "Misafirperverlik bizim için önemlidir." },
        { word: "die Gesellschaft", meaning: "Toplum", pronunciation: "di gı-zel-şaft", example: "Ein Problem für die ganze Gesellschaft.", exampleTranslation: "Tüm toplum için bir sorun." },
        { word: "die Erziehung", meaning: "Eğitim / Yetiştirme", pronunciation: "di er-tsi-ung", example: "Erziehung beginnt in der Familie.", exampleTranslation: "Eğitim ailede başlar." },
        { word: "die Sprache", meaning: "Dil", pronunciation: "di şpra-hı", example: "Sprache ist ein Teil der Kultur.", exampleTranslation: "Dil kültürün bir parçasıdır." },
        { word: "das Wahrzeichen", meaning: "Simgesel yapı / Simge", pronunciation: "das var-tsay-hın", example: "Der Kölner Dom ist ein Wahrzeichen.", exampleTranslation: "Köln Katedrali bir simgesel yapıdır." },
        { word: "typisch", meaning: "Tipik", pronunciation: "tü-piş", example: "Das ist typisch für diese Region.", exampleTranslation: "Bu, bu bölge için tipiktir." },
        { word: "modern", meaning: "Modern", pronunciation: "mo-dern", example: "Ein moderner Lebensstil.", exampleTranslation: "Modern bir yaşam tarzı." },
        { word: "altmodisch", meaning: "Eski moda", pronunciation: "alt-mo-diş", example: "Deine Kleidung sieht etwas altmodisch aus.", exampleTranslation: "Kıyafetlerin biraz eski moda görünüyor." }
    ]
};

// ===== UNIT 555: SAĞLIK VE HASTALIK =====
const unit555Vocab: GermanUnitVocabulary = {
    unitId: 555, title: "Sağlık ve Hastalık",
    words: [
        { word: "die Gesundheit", meaning: "Sağlık", pronunciation: "di gı-zunt-hayt", example: "Gesundheit ist das Wichtigste.", exampleTranslation: "Sağlık en önemli şeydir." },
        { word: "die Krankheit", meaning: "Hastalık", pronunciation: "di krank-hayt", example: "Er leidet an einer schweren Krankheit.", exampleTranslation: "Ağır bir hastalıktan muzdarip (çekiyor)." },
        { word: "der Arzt", meaning: "Doktor", pronunciation: "der artst", example: "Ich muss zum Arzt gehen.", exampleTranslation: "Doktora gitmem gerekiyor." },
        { word: "die Praxis", meaning: "Muayenehane", pronunciation: "di prak-sis", example: "Die Praxis ist am Wochenende geschlossen.", exampleTranslation: "Muayenehane hafta sonu kapalı." },
        { word: "das Krankenhaus", meaning: "Hastane", pronunciation: "das kran-kın-haus", example: "Er liegt seit drei Tagen im Krankenhaus.", exampleTranslation: "Üç gündür hastanede yatıyor." },
        { word: "das Medikament", meaning: "İlaç", pronunciation: "das me-di-ka-ment", example: "Nimm dein Medikament rechtzeitig.", exampleTranslation: "İlacını zamanında al." },
        { word: "das Rezept", meaning: "Reçete / Yemek tarifi", pronunciation: "das re-tsept", example: "Der Arzt schreibt ein Rezept.", exampleTranslation: "Doktor bir reçete yazıyor." },
        { word: "die Apotheke", meaning: "Eczane", pronunciation: "di a-po-te-kı", example: "Holen Sie die Medizin in der Apotheke.", exampleTranslation: "İlacı eczaneden alın." },
        { word: "der Schmerz", meaning: "Ağrı / Acı", pronunciation: "der şmerts", example: "Haben Sie starke Schmerzen?", exampleTranslation: "Çok ağrınız var mı?" },
        { word: "die Tablette", meaning: "Hap / Tablet", pronunciation: "di tab-le-tı", example: "Eine Tablette gegen Kopfschmerzen.", exampleTranslation: "Baş ağrısına karşı bir hap." },
        { word: "der Schnupfen", meaning: "Nezle", pronunciation: "der şnup-fın", example: "Ich habe einen starken Schnupfen.", exampleTranslation: "Ağır bir nezlem var." },
        { word: "der Husten", meaning: "Öksürük", pronunciation: "der hus-tın", example: "Trinken Sie Tee gegen den Husten.", exampleTranslation: "Öksürüğe karşı çay için." },
        { word: "das Fieber", meaning: "Ateş (vücut ısısı)", pronunciation: "das fi-bırl", example: "Das Kind hat hohes Fieber.", exampleTranslation: "Çocuğun yüksek ateşi var." },
        { word: "die Verletzung", meaning: "Yaralanma / Sakatlık", pronunciation: "di fer-let-tsung", example: "Eine leichte Verletzung am Bein.", exampleTranslation: "Bacakta hafif bir yaralanma." },
        { word: "untersuchen", meaning: "Muayene etmek / İncelemek", pronunciation: "un-tırl-zu-hın", example: "Der Arzt untersucht den Patienten.", exampleTranslation: "Doktor hastayı muayene ediyor." },
        { word: "verschreiben", meaning: "Reçete yazmak", pronunciation: "fer-şray-bın", example: "Der Arzt hat mir Ruhe verschrieben.", exampleTranslation: "Doktor bana istirahat yazdı (reçete etti)." },
        { word: "sich fühlen", meaning: "Hissetmek", pronunciation: "zi fü-lın", example: "Wie fühlen Sie sich heute?", exampleTranslation: "Bugün kendinizi nasıl hissediyorsunuz?" },
        { word: "krank", meaning: "Hasta", pronunciation: "krank", example: "Ich kann nicht kommen, ich bin krank.", exampleTranslation: "Gelemiyorum, hastayım." },
        { word: "gesund", meaning: "Sağlıklı", pronunciation: "gı-zunt", example: "Viel Obst essen ist gesund.", exampleTranslation: "Çok meyve yemek sağlıklıdır." },
        { word: "müde", meaning: "Yorgun", pronunciation: "mü-dı", example: "Ich bin so müde, ich muss schlafen.", exampleTranslation: "Çok yorgunum, uyumam gerekiyor." }
    ]
};

// ===== UNIT 556: DOĞA VE HAYVANLAR =====
const unit556Vocab: GermanUnitVocabulary = {
    unitId: 556, title: "Doğa ve Hayvanlar",
    words: [
        { word: "die Landschaft", meaning: "Manzara / Peyzaj", pronunciation: "di lant-şaft", example: "Die Landschaft in Bayern ist herrlich.", exampleTranslation: "Bavyera'daki manzara harikadır." },
        { word: "der Berg", meaning: "Dağ", pronunciation: "der berk", example: "Wir steigen auf den Berg.", exampleTranslation: "Dağa tırmanıyoruz." },
        { word: "der Wald", meaning: "Orman", pronunciation: "der valt", example: "Im Wald ist es kühl und schattig.", exampleTranslation: "Ormanda hava serin ve gölgelidir." },
        { word: "der See", meaning: "Göl", pronunciation: "der ze", example: "Im Sommer schwimmen wir im See.", exampleTranslation: "Yazın gölde yüzüyoruz." },
        { word: "der Fluss", meaning: "Nehir / Irmak", pronunciation: "der flus", example: "Der Rhein ist ein langer Fluss.", exampleTranslation: "Ren uzun bir nehirdir." },
        { word: "das Tier", meaning: "Hayvan", pronunciation: "das tir", example: "Welches Tier magst du am meisten?", exampleTranslation: "En çok hangi hayvanı seversin?" },
        { word: "das Haustier", meaning: "Evcil hayvan", pronunciation: "das haus-tir", example: "Ein Hund ist ein treues Haustier.", exampleTranslation: "Köpek sadık bir evcil hayvandır." },
        { word: "der Hund", meaning: "Köpek", pronunciation: "der hunt", example: "Mein Hund heißt Bello.", exampleTranslation: "Köpeğimin adı Bello." },
        { word: "die Nacht", meaning: "Gece", pronunciation: "di naht", example: "Gute Nacht!", exampleTranslation: "İyi geceler!" },
        { word: "die Katze", meaning: "Kedi", pronunciation: "di ka-tsı", example: "Die Katze fängt eine Maus.", exampleTranslation: "Kedi bir fare yakalıyor." },
        { word: "das Pferd", meaning: "At", pronunciation: "das pfert", example: "Reiten ist ein schönes Hobby.", exampleTranslation: "Ata binmek güzel bir hobidir." },
        { word: "der Vogel", meaning: "Kuş", pronunciation: "der fo-gıl", example: "Die Vögel singen morgens.", exampleTranslation: "Kuşlar sabahları ötüyor." },
        { word: "der Fisch", meaning: "Balık", pronunciation: "der fiş", example: "Fische leben im Wasser.", exampleTranslation: "Balıklar suda yaşar." },
        { word: "die Kuh", meaning: "İnek", pronunciation: "di ku", example: "Die Kuh steht auf der Wiese.", exampleTranslation: "İnek çayırda duruyor." },
        { word: "das Schaf", meaning: "Koyun", pronunciation: "das şaf", example: "Dort sind viele Schafe.", exampleTranslation: "Orada birçok koyun var." },
        { word: "die Pflanze", meaning: "Bitki", pronunciation: "di pflan-tsı", example: "Vergiss nicht, die Pflanzen zu gießen.", exampleTranslation: "Bitkileri sulamayı unutma." },
        { word: "der Baum", meaning: "Ağaç", pronunciation: "der baum", example: "Der Apfelbaum trägt viele Früchte.", exampleTranslation: "Elma ağacı birçok meyve veriyor." },
        { word: "die Blume", meaning: "Çiçek", pronunciation: "di blu-mı", example: "Eine rote Rose ist eine schöne Blume.", exampleTranslation: "Kırmızı bir gül güzel bir çiçektir." },
        { word: "wild", meaning: "Vahşi", pronunciation: "vilt", example: "Vorsicht, das ist ein wildes Tier.", exampleTranslation: "Dikkat, bu vahşi bir hayvan." },
        { word: "gefährlich", meaning: "Tehlikeli", pronunciation: "gı-fer-lıh", example: "Es ist gefährlich, hier zu schwimmen.", exampleTranslation: "Burada yüzmek tehlikelidir." },
        { word: "schön", meaning: "Güzel", pronunciation: "şön", example: "Die Natur ist im Frühling besonders schön.", exampleTranslation: "Doğa ilkbaharda özellikle güzeldir." }
    ]
};

// ===== UNIT 557: EĞİTİM VE ÜNİVERSİTE =====
const unit557Vocab: GermanUnitVocabulary = {
    unitId: 557, title: "Eğitim ve Üniversite",
    words: [
        { word: "die Bildung", meaning: "Eğitim", pronunciation: "di bil-dung", example: "Bildung ist der Schlüssel zum Erfolg.", exampleTranslation: "Eğitim başarının anahtarıdır." },
        { word: "die Schule", meaning: "Okul", pronunciation: "di şu-lı", example: "Ich gehe gerne zur Schule.", exampleTranslation: "Okula gitmeyi severim." },
        { word: "die Universität", meaning: "Üniversite", pronunciation: "di u-ni-ver-zi-teyt", example: "Er studiert an einer berühmten Universität.", exampleTranslation: "Ünlü bir üniversitede okuyor." },
        { word: "das Studium", meaning: "Üniversite eğitimi / Öğrenim", pronunciation: "das ştu-di-um", example: "Das Studium der Medizin ist sehr lang.", exampleTranslation: "Tıp eğitimi çok uzundur." },
        { word: "der Student", meaning: "Öğrenci (üniversite)", pronunciation: "der ştu-dent", example: "Viele Studenten wohnen in WGs.", exampleTranslation: "Birçok üniversite öğrencisi paylaşımlı evlerde yaşıyor." },
        { word: "das Semester", meaning: "Dönem / Sömestr", pronunciation: "das ze-mes-tırl", example: "Das neue Semester beginnt im Oktober.", exampleTranslation: "Yeni dönem Ekim'de başlıyor." },
        { word: "die Vorlesung", meaning: "Ders (üniversitede hocanın anlattığı)", pronunciation: "di for-le-zung", example: "Die Vorlesung war sehr interessant.", exampleTranslation: "Ders çok ilginçti." },
        { word: "das Seminar", meaning: "Seminer", pronunciation: "das ze-mi-nar", example: "Ich nehme an einem Seminar über Geschichte teil.", exampleTranslation: "Tarih üzerine bir seminere katılıyorum." },
        { word: "die Prüfung", meaning: "Sınav", pronunciation: "di prü-fung", example: "Hast du deine Prüfung bestanden?", exampleTranslation: "Sınavını geçtin mi?" },
        { word: "die Note", meaning: "Not (başarı notu)", pronunciation: "di no-tı", example: "Er hat eine gute Note in Mathematik bekommen.", exampleTranslation: "Matematikten iyi bir not aldı." },
        { word: "der Abschluss", meaning: "Mezuniyet / Bitirme", pronunciation: "der ap-şlus", example: "Nach dem Abschluss sucht er einen Job.", exampleTranslation: "Mezuniyetten sonra bir iş arıyor." },
        { word: "das Zeugnis", meaning: "Diploma / Karne", pronunciation: "das tsoyk-nis", example: "Geben Sie bitte Ihr Zeugnis ab.", exampleTranslation: "Lütfen diplomanızı teslim edin." },
        { word: "das Fach", meaning: "Ders / Alan / Branş", pronunciation: "das fah", example: "Was ist dein Lieblingsfach?", exampleTranslation: "En sevdiğin ders hangisi?" },
        { word: "die Bibliothek", meaning: "Kütüphane", pronunciation: "di bib-li-o-tek", example: "Ich lerne oft in der Bibliothek.", exampleTranslation: "Sık sık kütüphanede çalışırım." },
        { word: "das Stipendium", meaning: "Burs", pronunciation: "das şti-pen-di-um", example: "Sie hat ein Stipendium bekommen.", exampleTranslation: "O bir burs aldı." },
        { word: "lehren", meaning: "Öğretmek", pronunciation: "le-rın", example: "Er lehrt Geschichte an der Universität.", exampleTranslation: "Üniversitede tarih öğretiyor." },
        { word: "lernen", meaning: "Öğrenmek / Ders çalışmak", pronunciation: "ler-nın", example: "Ich muss für die Prüfung lernen.", exampleTranslation: "Sınav için ders çalışmam gerekiyor." },
        { word: "forschen", meaning: "Araştırmak (bilimsel olarak)", pronunciation: "for-şın", example: "Die Wissenschaftler forschen an einem neuen Medikament.", exampleTranslation: "Bilim insanları yeni bir ilaç üzerinde araştırma yapıyor." },
        { word: "akademisch", meaning: "Akademik", pronunciation: "a-ka-de-miş", example: "Ein akademischer Grad.", exampleTranslation: "Akademik bir derece (unvan)." },
        { word: "kompliziert", meaning: "Karmaşık / Karışık", pronunciation: "kom-pli-tsirt", example: "Das Thema ist sehr kompliziert.", exampleTranslation: "Konu çok karmaşık." }
    ]
};

// ===== UNIT 558: POLİTİKA VE TOPLUM =====
const unit558Vocab: GermanUnitVocabulary = {
    unitId: 558, title: "Politika ve Toplum",
    words: [
        { word: "die Politik", meaning: "Politika", pronunciation: "di po-li-tik", example: "Interessierst du dich für Politik?", exampleTranslation: "Politikayla ilgileniyor musun?" },
        { word: "der Staat", meaning: "Devlet", pronunciation: "der ştat", example: "Der Staat sorgt für die Sicherheit.", exampleTranslation: "Devlet güvenliği sağlar." },
        { word: "die Regierung", meaning: "Hükümet", pronunciation: "di re-gi-rung", example: "Die Regierung plant Reformen.", exampleTranslation: "Hükümet reformlar planlıyor." },
        { word: "das Parlament", meaning: "Parlamento / Meclis", pronunciation: "das par-la-ment", example: "Das Parlament diskutiert über das Gesetz.", exampleTranslation: "Parlamento yasa üzerinde tartışıyor." },
        { word: "die Wahl", meaning: "Seçim", pronunciation: "di val", example: "Wann ist die nächste Wahl?", exampleTranslation: "Bir sonraki seçim ne zaman?" },
        { word: "wählen", meaning: "Seçmek / Oy vermek", pronunciation: "ve-lın", example: "Es ist wichtig, wählen zu gehen.", exampleTranslation: "Oy vermeye gitmek önemlidir." },
        { word: "die Partei", meaning: "Parti (siyasi)", pronunciation: "di par-tay", example: "Welche Partei hat gewonnen?", exampleTranslation: "Hangi parti kazandı?" },
        { word: "der Bürger", meaning: "Vatandaş", pronunciation: "der bür-gırl", example: "Jeder Bürger hat Rechte und Pflichten.", exampleTranslation: "Her vatandaşın hakları ve yükümlülükleri vardır." },
        { word: "die Demokratie", meaning: "Demokrasi", pronunciation: "di de-mo-kra-ti", example: "Demokratie ist eine Regierungsform.", exampleTranslation: "Demokrasi bir yönetim biçimidir." },
        { word: "die Freiheit", meaning: "Özgürlük", pronunciation: "di fray-hayt", example: "Meinungsfreiheit ist wichtig.", exampleTranslation: "Düşünce (ifade) özgürlüğü önemlidir." },
        { word: "das Gesetz", meaning: "Yasa / Kanun", pronunciation: "das gı-zetst", example: "Man muss sich an die Gesetze halten.", exampleTranslation: "Yasalara uyulmalı." },
        { word: "die Steuer", meaning: "Vergi", pronunciation: "di ştoy-ır", example: "Wir zahlen Steuern an den Staat.", exampleTranslation: "Devlete vergi ödüyoruz." },
        { word: "die Wirtschaft", meaning: "Ekonomi", pronunciation: "di virt-şaft", example: "Die Wirtschaft wächst in diesem Jahr.", exampleTranslation: "Ekonomi bu yıl büyüyor." },
        { word: "das Recht", meaning: "Hak / Hukuk", pronunciation: "das reht", example: "Jeder hat das Recht auf Bildung.", exampleTranslation: "Herkesin eğitim hakkı vardır." },
        { word: "die Gerechtigkeit", meaning: "Adalet", pronunciation: "di gı-reht-ıh-kayt", example: "Wir kämpfen für soziale Gerechtigkeit.", exampleTranslation: "Sosyal adalet için savaşıyoruz." },
        { word: "der Frieden", meaning: "Barış", pronunciation: "der fri-dın", example: "Die Welt braucht Frieden.", exampleTranslation: "Dünyanın barışa ihtiyacı var." },
        { word: "der Konflikt", meaning: "Çatışma / Anlaşmazlık", pronunciation: "der kon-flikt", example: "Ein internationaler Konflikt.", exampleTranslation: "Uluslararası bir çatışma." },
        { word: "demonstrieren", meaning: "Gösteri yapmak / Protesto etmek", pronunciation: "de-mon-stri-rın", example: "Die Leute demonstrieren für das Klima.", exampleTranslation: "İnsanlar iklim için gösteri yapıyor." },
        { word: "politisch", meaning: "Siyasi / Politik", pronunciation: "po-li-tiş", example: "Eine politische Entscheidung.", exampleTranslation: "Siyasi bir karar." },
        { word: "sozial", meaning: "Sosyal / Toplumsal", pronunciation: "zo-tsi-al", example: "Soziale Probleme lösen.", exampleTranslation: "Sosyal sorunları çözmek." }
    ]
};

// ===== UNIT 559: GELECEK PLANLARI =====
const unit559Vocab: GermanUnitVocabulary = {
    unitId: 559, title: "Gelecek Planları",
    words: [
        { word: "die Zukunft", meaning: "Gelecek", pronunciation: "di tsu-kunft", example: "Ich denke oft an meine Zukunft.", exampleTranslation: "Sık sık geleceğimi düşünürüm." },
        { word: "der Plan", meaning: "Plan", pronunciation: "der plan", example: "Was ist dein Plan für das Wochenende?", exampleTranslation: "Hafta sonu için planın nedir?" },
        { word: "planen", meaning: "Planlamak", pronunciation: "pla-nın", example: "Wir planen eine große Reise.", exampleTranslation: "Büyük bir seyahat planlıyoruz." },
        { word: "das Ziel", meaning: "Hedef / Amaç", pronunciation: "das tsil", example: "Ich habe meine Ziele erreicht.", exampleTranslation: "Hedeflerime ulaştım." },
        { word: "hoffen", meaning: "Umut etmek / Ummak", pronunciation: "ho-fın", example: "Ich hoffe, dass alles gut geht.", exampleTranslation: "Her şeyin iyi gideceğini umuyorum." },
        { word: "erwarten", meaning: "Beklemek (umut etmek/tahmin etmek)", pronunciation: "er-var-tın", example: "Was erwartest du von diesem Job?", exampleTranslation: "Bu işten ne bekliyorsun?" },
        { word: "der Traum", meaning: "Rüya / Hayal", pronunciation: "der traum", example: "Mein Traum ist es, ein Buch zu schreiben.", exampleTranslation: "Hayalim bir kitap yazmak." },
        { word: "träumen", meaning: "Rüya görmek / Hayal kurmak", pronunciation: "troy-mın", example: "Er träumt von einem eigenen Haus.", exampleTranslation: "Kendi evinin hayalini kuruyor." },
        { word: "entscheiden", meaning: "Karar vermek", pronunciation: "ent-şay-dın", example: "Ich kann mich nicht entscheiden.", exampleTranslation: "Karar veremiyorum." },
        { word: "die Entscheidung", meaning: "Karar", pronunciation: "di ent-şay-dung", example: "Das war eine schwierige Entscheidung.", exampleTranslation: "Bu zor bir karardı." },
        { word: "verändern", meaning: "Değiştirmek", pronunciation: "fer-en-dırln", example: "Ich möchte mein Leben verändern.", exampleTranslation: "Hayatımı değiştirmek istiyorum." },
        { word: "die Veränderung", meaning: "Değişim / Değişiklik", pronunciation: "di fer-en-dı-rung", example: "Veränderungen sind oft positiv.", exampleTranslation: "Değişimler genellikle olumludur." },
        { word: "vielleicht", meaning: "Belki", pronunciation: "fi-layht", example: "Vielleicht komme ich morgen vorbei.", exampleTranslation: "Belki yarın uğrarım." },
        { word: "wahrscheinlich", meaning: "Muhtemelen / Galiba", pronunciation: "var-şayn-lıh", example: "Es wird wahrscheinlich bald regnen.", exampleTranslation: "Muhtemelen yakında yağmur yağacak." },
        { word: "sicher", meaning: "Emin / Güvenli / Kesin", pronunciation: "zi-hırl", example: "Ich bin mir ganz sicher.", exampleTranslation: "Tamamen eminim." },
        { word: "bestimmt", meaning: "Kesinlikle / Belirli", pronunciation: "be-ştimt", example: "Du wirst den Test bestimmt bestehen.", exampleTranslation: "Testi kesinlikle geçeceksin." },
        { word: "die Möglichkeit", meaning: "Olasılık / İmkân", pronunciation: "di mök-lıh-kayt", example: "Es gibt viele Möglichkeiten.", exampleTranslation: "Birçok imkân var." },
        { word: "vorhaben", meaning: "Niyetinde olmak / Yapmayı düşünmek", pronunciation: "for-ha-bın", example: "Was hast du heute noch vor?", exampleTranslation: "Bugün daha ne yapmayı düşünüyorsun (niyetin ne)?" },
        { word: "bald", meaning: "Yakında", pronunciation: "balt", example: "Bis bald!", exampleTranslation: "Yakında görüşürüz!" },
        { word: "demnächst", meaning: "Pek yakında", pronunciation: "dem-nehst", example: "Der Film kommt demnächst ins Kino.", exampleTranslation: "Film pek yakında sinemaya gelecek." }
    ]
};

// ===== UNIT 560: GENEL TEKRAR (A2 SON) =====
const unit560Vocab: GermanUnitVocabulary = {
    unitId: 560, title: "Genel Tekrar (A2 Son)",
    words: [
        { word: "wiederholen", meaning: "Tekrar etmek", pronunciation: "vi-dır-ho-lın", example: "Wiederholen wir die Grammatik.", exampleTranslation: "Dil bilgisini tekrar edelim." },
        { word: "die Wiederholung", meaning: "Tekrar", pronunciation: "di vi-dır-ho-lung", example: "Wiederholung ist wichtig beim Lernen.", exampleTranslation: "Öğrenirken tekrar önemlidir." },
        { word: "geschafft", meaning: "Başarmış / Tamamlamış", pronunciation: "gı-şaft", example: "Du hast es geschafft!", exampleTranslation: "Bunu başardın!" },
        { word: "der Fortschritt", meaning: "İlerleme / Gelişim", pronunciation: "der fort-şrit", example: "Du hast große Fortschritte gemacht.", exampleTranslation: "Büyük ilerleme kaydettin." },
        { word: "die Kenntnisse", meaning: "Bilgi birikimi", pronunciation: "di kent-ni-zı", example: "Deine Sprachkenntnisse sind jetzt viel besser.", exampleTranslation: "Dil bilgin (akıcılığın) şimdi çok daha iyi." },
        { word: "bereit", meaning: "Hazır", pronunciation: "be-rayt", example: "Bist du bereit für B1?", exampleTranslation: "B1 için hazır mısın?" },
        { word: "verbessern", meaning: "Geliştirmek / İyileştirmek / Düzeltmek", pronunciation: "fer-be-sırln", example: "Ich möchte meine Aussprache verbessern.", exampleTranslation: "Telaffuzumu geliştirmek istiyorum." },
        { word: "beherrschen", meaning: "Hakim olmak (bir konuya/dile)", pronunciation: "be-her-şın", example: "Du beherrschst die Grundregeln.", exampleTranslation: "Temel kurallara hakimsin." },
        { word: "fließend", meaning: "Akıcı", pronunciation: "fli-sınt", example: "Du sprichst fast fließend Deutsch.", exampleTranslation: "Neredeyse akıcı Almanca konuşuyorsun." },
        { word: "verstehen", meaning: "Anlamak", pronunciation: "fer-şte-ın", example: "Ich verstehe jetzt fast alles.", exampleTranslation: "Şimdi neredeyse her şeyi anlıyorum." },
        { word: "selbstbewusst", meaning: "Kendine güvenen", pronunciation: "zelpst-be-vust", example: "Sei beim Sprechen selbstbewusst.", exampleTranslation: "Konuşurken kendine güven." },
        { word: "die Stufe", meaning: "Aşama / Seviye / Basamak", pronunciation: "di ştu-fı", example: "Die nächste Stufe ist B1.", exampleTranslation: "Bir sonraki aşama B1." },
        { word: "das Niveau", meaning: "Düzey / Seviye", pronunciation: "das ni-vo", example: "Dein Deutschniveau ist jetzt A2.", exampleTranslation: "Almanca düzeyin şimdi A2." },
        { word: "die Fähigkeit", meaning: "Yetenek / Beceri", pronunciation: "di fe-ıh-kayt", example: "Lese- und Schreibfähigkeiten.", exampleTranslation: "Okuma ve yazma becerileri." },
        { word: "üben", meaning: "Pratik yapmak / Çalışmak", pronunciation: "ü-bın", example: "Wir müssen jeden Tag üben.", exampleTranslation: "Her gün pratik yapmalıyız." },
        { word: "das Ergebnis", meaning: "Sonuç", pronunciation: "das er-gep-nis", example: "Das Ergebnis war sehr gut.", exampleTranslation: "Sonuç çok iyiydi." },
        { word: "erfolgreich", meaning: "Başarılı", pronunciation: "er-folk-rayh", example: "Du warst sehr erfolgreich.", exampleTranslation: "Çok başarılıydın." },
        { word: "das Ziel", meaning: "Hedef", pronunciation: "das tsil", example: "Wir haben unser Ziel erreicht.", exampleTranslation: "Hedefimize ulaştık." },
        { word: "gratulieren", meaning: "Tebrik etmek", pronunciation: "gra-tu-li-rın", example: "Ich gratuliere dir zum A2-Abschluss!", exampleTranslation: "A2 mezuniyetini (başarını) tebrik ederim!" },
        { word: "weitergehen", meaning: "Devam etmek", pronunciation: "vay-tır-ge-ın", example: "Jetzt geht es mit B1 weiter.", exampleTranslation: "Şimdi B1 ile devam ediyor." }
    ]
};

// ===== UNIT 535: SEYAHAT VE TATİL =====
const unit535Vocab: GermanUnitVocabulary = {
    unitId: 535, title: "Seyahat ve Tatil",
    words: [
        { word: "das Reiseziel", meaning: "Seyahat hedefi / Varış yeri", pronunciation: "das ray-zı-tsil", example: "Was ist dein nächstes Reiseziel?", exampleTranslation: "Bir sonraki seyahat hedefin nere?" },
        { word: "die Buchung", meaning: "Rezervasyon", pronunciation: "di bu-hung", example: "Ich habe eine Buchung gemacht.", exampleTranslation: "Rezervasyon yaptım." },
        { word: "das Ticket", meaning: "Bilet", pronunciation: "das ti-kıt", example: "Ich habe mein Ticket vergessen.", exampleTranslation: "Biletimi unuttum." },
        { word: "die Abfahrt", meaning: "Kalkış (araç)", pronunciation: "di ap-fart", example: "Wann ist die Abfahrt?", exampleTranslation: "Kalkış ne zaman?" },
        { word: "die Ankunft", meaning: "Varış", pronunciation: "di an-kunft", example: "Die Ankunft war pünktlich.", exampleTranslation: "Varış tam zamanındaydı." },
        { word: "die Verspätung", meaning: "Gecikme", pronunciation: "di fer-şpe-tung", example: "Der Zug hat 20 Minuten Verspätung.", exampleTranslation: "Trenin 20 dakika gecikmesi var." },
        { word: "der Koffer", meaning: "Valiz / Bavul", pronunciation: "der ko-fır", example: "Ich muss noch meinen Koffer packen.", exampleTranslation: "Hala valizimi toplamam gerekiyor." },
        { word: "die Tasche", meaning: "Çanta", pronunciation: "di ta-şı", example: "Eine kleine Reisetasche.", exampleTranslation: "Küçük bir seyahat çantası." },
        { word: "das Gepäck", meaning: "Bagaj", pronunciation: "das gı-pek", example: "Wo kann ich mein Gepäck abgeben?", exampleTranslation: "Bagajımı nereye teslim edebilirim?" },
        { word: "die Reiseversicherung", meaning: "Seyahat sigortası", pronunciation: "di ray-zı-fer-zi-hı-rung", example: "Haben Sie eine Reiseversicherung?", exampleTranslation: "Seyahat sigortanız var mı?" },
        { word: "das Visum", meaning: "Vize", pronunciation: "das vi-zum", example: "Ich brauche ein Visum für Amerika.", exampleTranslation: "Amerika için vizeye ihtiyacım var." },
        { word: "der Reisepass", meaning: "Pasaport", pronunciation: "der ray-zı-pas", example: "Zeigen Sie bitte Ihren Reisepass.", exampleTranslation: "Lütfen pasaportunuzu gösterin." },
        { word: "der Ausflug", meaning: "Gezi / Ekskürsiyon", pronunciation: "der aus-flug", example: "Wir machen einen Ausflug in die Berge.", exampleTranslation: "Dağlara bir gezi yapıyoruz." },
        { word: "die Sehenswürdigkeit", meaning: "Görülmeye değer yer", pronunciation: "di ze-ıns-vür-dıh-kayt", example: "Berlin hat viele Sehenswürdigkeiten.", exampleTranslation: "Berlin'in görülmeye değer birçok yeri var." },
        { word: "die Stadtrundfahrt", meaning: "Şehir turu", pronunciation: "di ştat-runt-fart", example: "Möchten Sie eine Stadtrundfahrt machen?", exampleTranslation: "Şehir turu yapmak ister misiniz?" },
        { word: "der Reiseführer", meaning: "Rehber (kişi veya kitap)", pronunciation: "der ray-zı-fü-rır", example: "Ich brauche einen Reiseführer von Rom.", exampleTranslation: "Roma için bir rehber kitaba ihtiyacım var." },
        { word: "die Wanderung", meaning: "Doğa yürüyüşü", pronunciation: "di van-dı-rung", example: "Eine Wanderung im Wald.", exampleTranslation: "Ormanda bir doğa yürüyüşü." },
        { word: "der Strand", meaning: "Plaj / Sahil", pronunciation: "der ştrant", example: "Wir liegen am Strand.", exampleTranslation: "Plajda yatıyoruz." },
        { word: "das Meer", meaning: "Deniz", pronunciation: "das mer", example: "Das Meer ist heute sehr ruhig.", exampleTranslation: "Deniz bugün çok sakin." },
        { word: "die Insel", meaning: "Ada", pronunciation: "di in-zıl", example: "Wir machen Urlaub auf einer Insel.", exampleTranslation: "Bir adada tatil yapıyoruz." }
    ]
};

// ===== UNIT 536: OTEL VE KONAKLAMA =====
const unit536Vocab: GermanUnitVocabulary = {
    unitId: 536, title: "Otel ve Konaklama",
    words: [
        { word: "die Unterkunft", meaning: "Konaklama / Barınak", pronunciation: "di un-tırl-kunft", example: "Wir brauchen eine Unterkunft für die Night.", exampleTranslation: "Gece için bir konaklama yerine ihtiyacımız var." },
        { word: "das Hotel", meaning: "Otel", pronunciation: "das ho-tel", example: "Das Hotel liegt im Stadtzentrum.", exampleTranslation: "Otel şehir merkezinde bulunuyor." },
        { word: "das Einzelzimmer", meaning: "Tek kişilik oda", pronunciation: "das ayn-tsıl-tsi-mır", example: "Ich möchte ein Einzelzimmer buchen.", exampleTranslation: "Tek kişilik bir oda rezerve etmek istiyorum." },
        { word: "das Doppelzimmer", meaning: "Çift kişilik oda", pronunciation: "das do-pıl-tsi-mır", example: "Haben Sie noch ein Doppelzimmer frei?", exampleTranslation: "Hala boş çift kişilik odanız var mı?" },
        { word: "die Übernachtung", meaning: "Geceleme", pronunciation: "di ü-bır-nah-tung", example: "Zwei Übernachtungen inkl. Frühstück.", exampleTranslation: "Kahvaltı dahil iki geceleme." },
        { word: "das Frühstücksbuffet", meaning: "Açık büfe kahvaltı", pronunciation: "das frü-ştüks-bu-fe", example: "Das Frühstücksbuffet ist von 7 bis 10 Uhr.", exampleTranslation: "Açık büfe kahvaltı saat 7'den 10'a kadar." },
        { word: "die Halbpension", meaning: "Yarım pansiyon", pronunciation: "di halp-pan-tsion", example: "Buchen wir Vollpension oder Halbpension?", exampleTranslation: "Tam pansiyon mu yoksa yarım pansiyon mu rezerve edelim?" },
        { word: "die Vollpension", meaning: "Tam pansiyon", pronunciation: "di fol-pan-tsion", example: "Vollpension beinhaltet drei Mahlzeiten.", exampleTranslation: "Tam pansiyon üç öğünü kapsar." },
        { word: "die Klimaanlage", meaning: "Klima", pronunciation: "di kli-ma-an-la-gı", example: "Hat das Zimmer eine Klimaanlage?", exampleTranslation: "Odada klima var mı?" },
        { word: "die Heizung", meaning: "Isıtma", pronunciation: "di hay-tsung", example: "Die Heizung funktioniert nicht.", exampleTranslation: "Isıtma çalışmıyor." },
        { word: "der Aufzug", meaning: "Asansör", pronunciation: "der auf-tsuk", example: "Nehmen Sie den Aufzug in den 5. Stock.", exampleTranslation: "5. kata asansörle çıkın." },
        { word: "der Schlüssel", meaning: "Anahtar", pronunciation: "der şlü-sıl", example: "Geben Sie bitte den Zimmerschlüssel an der Rezeption ab.", exampleTranslation: "Lütfen oda anahtarını resepsiyona teslim edin." },
        { word: "die Rezeption", meaning: "Resepsiyon", pronunciation: "di re-tsep-tsion", example: "Die Rezeption ist rund um die Uhr besetzt.", exampleTranslation: "Resepsiyon günün her saatinde doludur (açıktır)." },
        { word: "das Zimmermädchen", meaning: "Oda hizmetçisi (kat görevlisi)", pronunciation: "das tsi-mır-meyt-hın", example: "Das Zimmermädchen bringt yeni havlular getiriyor.", exampleTranslation: "Kat görevlisi yeni havlular getiriyor." },
        { word: "das Handtuch", meaning: "Havlu", pronunciation: "das hant-tuh", example: "Ich brauche ein frisches Handtuch.", exampleTranslation: "Taze bir havluya ihtiyacım var." },
        { word: "die Seife", meaning: "Sabun", pronunciation: "di zay-fı", example: "Gibt es Seife im Badezimmer?", exampleTranslation: "Banyoda sabun var mı?" },
        { word: "die Bettwäsche", meaning: "Nevresim takımı", pronunciation: "di bet-ve-şı", example: "Die Bettwäsche wird täglich gewechselt.", exampleTranslation: "Nevresimler günlük olarak değiştirilir." },
        { word: "die Auskunft", meaning: "Bilgi / Danışma", pronunciation: "di aus-kunft", example: "Wo kann ich eine Auskunft bekommen?", exampleTranslation: "Nereden bilgi alabilirim?" },
        { word: "auschecken", meaning: "Otelden ayrılmak / Çıkış yapmak", pronunciation: "aus-şe-kın", example: "Wir müssen bis 11 Uhr auschecken.", exampleTranslation: "Saat 11'e kadar çıkış yapmalıyiz." },
        { word: "der Aufenthalt", meaning: "Konaklama süresi / Kalış", pronunciation: "der auf-ent-halt", example: "Viel Spaß bei Ihrem Aufenthalt!", exampleTranslation: "Kalışınızda iyi eğlenceler!" }
    ]
};

// ===== UNIT 537: HAVALİMANI VE ULAŞIM =====
const unit537Vocab: GermanUnitVocabulary = {
    unitId: 537, title: "Havalimanı ve Ulaşım",
    words: [
        { word: "das Flugzeug", meaning: "Uçak", pronunciation: "das fluk-tsoyk", example: "Das Flugzeug startet in 30 Minuten.", exampleTranslation: "Uçak 30 dakika içinde kalkıyor." },
        { word: "der Flughafen", meaning: "Havalimanı", pronunciation: "der fluk-ha-fın", example: "Fahren wir mit dem Taxi zum Flughafen?", exampleTranslation: "Havalimanına taksiyle mi gidelim?" },
        { word: "der Abflug", meaning: "Uçağın kalkışı", pronunciation: "der ap-fluk", example: "Wann genau ist der Abflug?", exampleTranslation: "Kalkış tam olarak ne zaman?" },
        { word: "die Landung", meaning: "Uçağın inişi", pronunciation: "di lan-dung", example: "Die Landung war sehr sanft.", exampleTranslation: "İniş çok yumuşaktı." },
        { word: "die Fluggesellschaft", meaning: "Havayolu şirketi", pronunciation: "di fluk-gı-zel-şaft", example: "Mit welcher Fluggesellschaft fliegen Sie?", exampleTranslation: "Hangi havayolu şirketiyle uçuyorsunuz?" },
        { word: "das Terminal", meaning: "Terminal", pronunciation: "das ter-mi-nal", example: "Wir müssen zu Terminal 2.", exampleTranslation: "Terminal 2'ye gitmeliyiz." },
        { word: "das Gate", meaning: "Kapı (havalimanı)", pronunciation: "das geyt", example: "Wo ist das Gate B14?", exampleTranslation: "B14 kapısı nerede?" },
        { word: "die Bordkarte", meaning: "Biniş kartı", pronunciation: "di bort-kar-tı", example: "Haben Sie Ihre Bordkarte dabei?", exampleTranslation: "Biniş kartınız yanınızda mı?" },
        { word: "das Handgepäck", meaning: "El bagajı", pronunciation: "das hant-gı-pek", example: "Ist mein Handgepäck zu schwer?", exampleTranslation: "El bagajım çok mu ağır?" },
        { word: "die Sicherheitskontrolle", meaning: "Güvenlik kontrolü", pronunciation: "di zi-hır-hayts-kon-tro-lı", example: "Die Sicherheitskontrolle dauert lange.", exampleTranslation: "Güvenlik kontrolü uzun sürüyor." },
        { word: "der Reisepass", meaning: "Pasaport", pronunciation: "der ray-zı-pas", example: "Ich kann meinen Reisepass nicht finden.", exampleTranslation: "Pasaportumu bulamıyorum." },
        { word: "der Zoll", meaning: "Gümrük", pronunciation: "der tsol", example: "Haben Sie etwas am Zoll zu verzollen?", exampleTranslation: "Gümrükte gümrüğe tabi bir şeyiniz var mı?" },
        { word: "der Pilot", meaning: "Pilot", pronunciation: "der pi-lot", example: "Der Pilot begrüßt die Passagiere.", exampleTranslation: "Pilot yolcuları karşılıyor." },
        { word: "die Flugbegleiterin", meaning: "Hostes (uçuş görevlisi)", pronunciation: "di fluk-bı-glay-tı-rin", example: "Fragen Sie die Flugbegleiterin nach Wasser.", exampleTranslation: "Uçuş görevlisinden su isteyin." },
        { word: "der Fensterplatz", meaning: "Pencere yanı (koltuk)", pronunciation: "der fens-tırl-plats", example: "Ich hätte gerne einen Fensterplatz.", exampleTranslation: "Pencere kenarı bir koltuk isterdim." },
        { word: "der Gangplatz", meaning: "Koridor yanı (koltuk)", pronunciation: "der gang-plats", example: "Ein Gangplatz ist bequemer zum Aufstehen.", exampleTranslation: "Koridor yanı koltuk ayağa kalkmak için daha rahattır." },
        { word: "der Anschlussflug", meaning: "Aktarmalı uçuş", pronunciation: "der an-şlus-fluk", example: "Ich habe nur eine Stunde für meinen Anschlussflug.", exampleTranslation: "Aktarmalı uçuşum için sadece bir saatim var." },
        { word: "buchen", meaning: "Rezervasyon yapmak / Ayırtmak", pronunciation: "bu-hın", example: "Ich habe den Flug online gebucht.", exampleTranslation: "Uçuşu internetten ayırttım." },
        { word: "stornieren", meaning: "İptal etmek (rezervasyon)", pronunciation: "ştor-ni-rın", example: "Kann ich die Buchung kostenlos stornieren?", exampleTranslation: "Rezervasyonu ücretsiz iptal edebilir miyim?" },
        { word: "der Flug", meaning: "Uçuş", pronunciation: "der fluk", example: "Der Flug nach Berlin dauert zwei Stunden.", exampleTranslation: "Berlin uçuşu iki saat sürüyor." }
    ]
};

// ===== UNIT 538: ŞEHİR HAYATI VE GEZİLECEK YERLER =====
const unit538Vocab: GermanUnitVocabulary = {
    unitId: 538, title: "Şehir Hayatı ve Gezilecek Yerler",
    words: [
        { word: "der Stadtplan", meaning: "Şehir haritası", pronunciation: "der ştat-plan", example: "Haben Sie einen Stadtplan für mich?", exampleTranslation: "Benim için bir şehir haritanız var mı?" },
        { word: "die Besichtigung", meaning: "Gezi / Görme (yer görme)", pronunciation: "di bı-zıhti-gung", example: "Die Schlossbesichtigung dauert eine Stunde.", exampleTranslation: "Saray gezisi bir saat sürüyor." },
        { word: "das Denkmal", meaning: "Anıt", pronunciation: "das denk-mal", example: "Das ist ein Denkmal für Goethe.", exampleTranslation: "Bu Goethe için bir anıt." },
        { word: "das Rathaus", meaning: "Belediye binası", pronunciation: "das rat-haus", example: "Das Rathaus steht am Marktplatz.", exampleTranslation: "Belediye binası pazar meydanında bulunuyor." },
        { word: "die Kirche", meaning: "Kilise", pronunciation: "di kir-hı", example: "Die Kirche ist sehr alt und berühmt.", exampleTranslation: "Kilise çok eski ve meşhurdur." },
        { word: "die Moschee", meaning: "Cami", pronunciation: "di mo-şe", example: "Wann ist die Moschee für Touristen geöffnet?", exampleTranslation: "Cami turistler için ne zaman açık?" },
        { word: "die Brücke", meaning: "Köprü", pronunciation: "di brü-kı", example: "Die Brücke über den Fluss ist gesperrt.", exampleTranslation: "Nehir üzerindeki köprü kapalı." },
        { word: "das Museum", meaning: "Müze", pronunciation: "das mu-ze-um", example: "Wir besuchen morgen das Kunstmuseum.", exampleTranslation: "Yarın sanat müzesini ziyaret ediyoruz." },
        { word: "die Eröffnung", meaning: "Açılış", pronunciation: "di er-öf-nung", example: "Die Eröffnung der Ausstellung ist um 18 Uhr.", exampleTranslation: "Serginin açılışı saat 18'dedir." },
        { word: "die Eintrittskarte", meaning: "Giriş bileti", pronunciation: "di ayn-trits-kar-tı", example: "Wo kann ich die Eintrittskarten kaufen?", exampleTranslation: "Giriş biletlerini nereden satın alabilirim?" },
        { word: "der Turm", meaning: "Kule", pronunciation: "der turm", example: "Man kann den Turm hochlaufen.", exampleTranslation: "Kuleye yukarı çıkılabilir." },
        { word: "der Marktplatz", meaning: "Pazar meydanı", pronunciation: "der markt-plats", example: "Wir treffen uns auf dem Marktplatz.", exampleTranslation: "Pazar meydanında buluşuyoruz." },
        { word: "das Viertel", meaning: "Semt / Mahalle", pronunciation: "das fir-tıl", example: "Das ist ein sehr lebendiges Viertel.", exampleTranslation: "Burası çok canlı bir semt." },
        { word: "die Gasse", meaning: "Dar sokak / Ara sokak", pronunciation: "di ga-sı", example: "Hinter dem Hotel ist eine kleine Gasse.", exampleTranslation: "Otelin arkasında küçük bir ara sokak var." },
        { word: "beleben", meaning: "Canlandırmak / Hareketlendirmek", pronunciation: "bı-le-bın", example: "Touristen beleben die Innenstadt.", exampleTranslation: "Turistler şehir merkezini hareketlendiriyor." },
        { word: "geschichtlich", meaning: "Tarihi / Tarihsel", pronunciation: "gı-şiht-lıh", example: "Dieser Ort ist geschichtlich ehr interessant.", exampleTranslation: "Burası tarihi açıdan çok ilginç." },
        { word: "modern", meaning: "Modern", pronunciation: "mo-dern", example: "Die Stadt hat eine moderne Architektur.", exampleTranslation: "Şehrin modern bir mimarisi var." },
        { word: "laut", meaning: "Gürültülü", pronunciation: "laut", example: "In der Stadt ist es oft sehr laut.", exampleTranslation: "Şehirde hava sık sık gürültülüdür." },
        { word: "ruhig", meaning: "Sakin / Sessiz", pronunciation: "ru-ıh", example: "Suchen Sie einen ruhigen Ort zum Lesen?", exampleTranslation: "Okumak için sakin bir yer mi arıyorsunuz?" },
        { word: "zentral", meaning: "Merkezi", pronunciation: "tsen-tral", example: "Unsere Wohnung liegt sehr zentral.", exampleTranslation: "Dairemiz çok merkezi bir yerde." }
    ]
};

// ===== UNIT 539: İŞ DÜNYASI VE OFİS =====
const unit539Vocab: GermanUnitVocabulary = {
    unitId: 539, title: "İş Dünyası ve Ofis",
    words: [
        { word: "der Arbeitsplatz", meaning: "İş yeri / Çalışma alanı", pronunciation: "der ar-bayts-plats", example: "Fühlst du dich an deinem Arbeitsplatz wohl?", exampleTranslation: "İş yerinde kendini iyi hissediyor musun?" },
        { word: "der Kollege", meaning: "Meslektaş / İş arkadaşı (erkek)", pronunciation: "der ko-le-gı", example: "Mein Kollege hilft mir bei dem Projekt.", exampleTranslation: "İş arkadaşım projede bana yardım ediyor." },
        { word: "die Besprechung", meaning: "Toplantı / Görüşme", pronunciation: "di bı-şpre-hung", example: "Die Besprechung beginnt pünktlich um 9 Uhr.", exampleTranslation: "Toplantı tam saat 9'da başlıyor." },
        { word: "der Termin", meaning: "Randevu / Randevulu toplantı", pronunciation: "der ter-min", example: "Ich habe heute viele Termine.", exampleTranslation: "Bugün çok randevum var." },
        { word: "die Überstunden", meaning: "Fazla mesai", pronunciation: "di ü-bır-ştun-dın", example: "Ich muss heute wieder Überstunden machen.", exampleTranslation: "Bugün yine fazla mesai yapmam gerekiyor." },
        { word: "das Gehalt", meaning: "Maaş", pronunciation: "das gı-halt", example: "Das Gehalt wird am Monatsende bezahlt.", exampleTranslation: "Maaş ay sonunda ödenir." },
        { word: "die Kündigung", meaning: "İstifa / İşten çıkarılma / Fesih", pronunciation: "di kün-di-gung", example: "Er hat seine Kündigung eingereicht.", exampleTranslation: "İstifasını sundu." },
        { word: "befristet", meaning: "Süreli / Geçici (sözleşme vb.)", pronunciation: "bı-fris-tet", example: "Mein Arbeitsvertrag ist befristet.", exampleTranslation: "İş sözleşmem süreli." },
        { word: "die Vollzeit", meaning: "Tam zamanlı", pronunciation: "di fol-tsayt", example: "Ich arbeite in Vollzeit 40 Stunden pro Woche.", exampleTranslation: "Haftada 40 saat tam zamanlı çalışıyorum." },
        { word: "die Teilzeit", meaning: "Yarı zamanlı", pronunciation: "di tayl-tsayt", example: "Sie möchte nach der Pause in Teilzeit arbeiten.", exampleTranslation: "Aradan sonra yarı zamanlı çalışmak istiyor." },
        { word: "das Büro", meaning: "Ofis / Büro", pronunciation: "das bü-ro", example: "Wo genau ist dein Büro?", exampleTranslation: "Ofisin tam olarak nerede?" },
        { word: "der Kopierer", meaning: "Fotokopi makinesi", pronunciation: "der ko-pi-rır", example: "Der Kopierer ist wieder kaputt.", exampleTranslation: "Fotokopi makinesi yine bozuk." },
        { word: "das Dokument", meaning: "Belge / Doküman", pronunciation: "das do-ku-ment", example: "Kannst du mir das Dokument per E-Mail schicken?", exampleTranslation: "Belgeyi bana e-postayla gönderebilir misin?" },
        { word: "die E-Mail", meaning: "E-posta", pronunciation: "di i-meyl", example: "Haben Sie meine E-Mail erhalten?", exampleTranslation: "E-postamı aldınız mı?" },
        { word: "der Ordner", meaning: "Klasör / Dosya", pronunciation: "der ort-nır", example: "Suchen Sie den blauen Ordner im Schrank.", exampleTranslation: "Dolaptaki mavi klasörü arayın." },
        { word: "ausdrucken", meaning: "Çıktı almak / Yazdırmak", pronunciation: "aus-dru-kın", example: "Ich muss den Vertrag noch ausdrucken.", exampleTranslation: "Sözleşmenin hala çıktısını almam gerekiyor." },
        { word: "speichern", meaning: "Kaydetmek (dosya vb.)", pronunciation: "şpay-hırn", example: "Hast du die Datei gespeichert?", exampleTranslation: "Dosyayı kaydettin mi?" },
        { word: "der Chef", meaning: "Patron / Şef / Yönetici", pronunciation: "der şef", example: "Mein Chef ist heute nicht im Büro.", exampleTranslation: "Patronum bugün ofiste değil." },
        { word: "die Verantwortung", meaning: "Sorumluluk", pronunciation: "di fer-ant-vor-tung", example: "Diese Position hat viel Verantwortung.", exampleTranslation: "Bu pozisyonun çok sorumluluğu var." },
        { word: "stressig", meaning: "Stresli", pronunciation: "ştre-zıh", example: "Der Job ist manchmal sehr stressig.", exampleTranslation: "İş bazen çok stresli." }
    ]
};

// ===== UNIT 540: MESLEKLER VE KARİYER =====
const unit540Vocab: GermanUnitVocabulary = {
    unitId: 540, title: "Meslekler ve Kariyer",
    words: [
        { word: "die Karriere", meaning: "Kariyer", pronunciation: "di ka-ri-ye-rı", example: "Sie möchte Karriere in der Medizin machen.", exampleTranslation: "Tıp alanında kariyer yapmak istiyor." },
        { word: "die Ausbildung", meaning: "Mesleki eğitim", pronunciation: "di aus-bil-dung", example: "Ich mache eine Ausbildung zum Mechaniker.", exampleTranslation: "Tamirci olarak mesleki eğitim yapıyorum." },
        { word: "das Studium", meaning: "Üniversite eğitimi / Öğrenim", pronunciation: "das ştu-di-um", example: "Sein Studium dauert für gewöhnlich 4 Jahre.", exampleTranslation: "Onun üniversite eğitimi genellikle 4 yıl sürüyor." },
        { word: "die Fachkraft", meaning: "Uzman çalışan / Nitelikli eleman", pronunciation: "di fah-kraft", example: "In Deutschland sucht man qualifizierte Fachkräfte.", exampleTranslation: "Almanya'da nitelikli uzman elemanlar aranıyor." },
        { word: "die Bewerbung", meaning: "İş başvurusu", pronunciation: "di bı-ver-bung", example: "Ich schreibe gerade eine Bewerbung.", exampleTranslation: "Şu an bir iş başvurusu yazıyorum." },
        { word: "der Lebenslauf", meaning: "Özgeçmiş (CV)", pronunciation: "der le-bıns-lauf", example: "Dein Lebenslauf muss aktuell sein.", exampleTranslation: "Özgeçmişin güncel olmalı." },
        { word: "das Vorstellungsgespräch", meaning: "İş mülakatı", pronunciation: "das for-ştel-ungs-gı-şpreh", example: "Ich bin nervös wegen meines Vorstellungsgesprächs.", exampleTranslation: "İş mülakatım nedeniyle gerginim." },
        { word: "die Arbeitserlaubnis", meaning: "Çalışma izni", pronunciation: "di ar-bayts-er-laub-nis", example: "Haben Sie eine gültige Arbeitserlaubnis?", exampleTranslation: "Geçerli bir çalışma izniniz var mı?" },
        { word: "die Erfahrung", meaning: "Deneyim / Tecrübe", pronunciation: "di er-fa-rung", example: "Haben Sie Erfahrung in diesem Bereich?", exampleTranslation: "Bu alanda deneyiminiz var mı?" },
        { word: "die Fortbildung", meaning: "İleri eğitim / Gelişim kursu", pronunciation: "di fort-bil-dung", example: "Ich nehme an einer Fortbildung teil.", exampleTranslation: "Bir ileri eğitim kursuna katılıyorum." },
        { word: "selbstständig", meaning: "Serbest çalışan / Kendi işinin sahibi", pronunciation: "zelpst-şten-dıh", example: "Er arbeitet als selbstständiger Berater.", exampleTranslation: "Serbest danışman olarak çalışıyor." },
        { word: "der Angestellte", meaning: "Memur / Ücretli çalışan (erkek)", pronunciation: "der an-gı-ştel-tı", example: "Er ist Angestellter bei einer großen Bank.", exampleTranslation: "Büyük bir bankada ücretli çalışan." },
        { word: "die Branche", meaning: "Branş / Sektör", pronunciation: "di bran-şı", example: "In welcher Branche arbeitest du?", exampleTranslation: "Hangi sektörde çalışıyorsun?" },
        { word: "das Zeugnis", meaning: "Karne / Diploma / Sertifika", pronunciation: "das tsoyk-nis", example: "Geben Sie bitte Ihre Zeugnisse ab.", exampleTranslation: "Lütfen diplomalarınızı teslim edin." },
        { word: "die Fähigkeit", meaning: "Yetenek / Beceri", pronunciation: "di fe-ıh-kayt", example: "Welche besonderen Fähigkeiten haben Sie?", exampleTranslation: "Hangi özel yetenekleriniz var?" },
        { word: "fremdsprachig", meaning: "Yabancı dilde olan", pronunciation: "fremt-şpra-hıh", example: "Kenntnisse in fremdsprachigen Texten.", exampleTranslation: "Yabancı dildeki metinlerde bilgi." },
        { word: "das Projekt", meaning: "Proje", pronunciation: "das pro-yekt", example: "Dieses Projekt ist sehr wichtig für die Firma.", exampleTranslation: "Bu proje şirket için çok önemlidir." },
        { word: "die Präsentation", meaning: "Sunum", pronunciation: "di pre-zen-ta-tsion", example: "Ihre Präsentation war sehr klar.", exampleTranslation: "Sunumunuz çok netti." },
        { word: "der Erfolg", meaning: "Başarı", pronunciation: "der er-folk", example: "Ich wünsche dir viel Erfolg!", exampleTranslation: "Sana bol başarı dilerim!" },
        { word: "die Herausforderung", meaning: "Zorluk / Meydan okuma", pronunciation: "di hı-raus-for-dı-rung", example: "Der neue Job ist eine große Herausforderung.", exampleTranslation: "Yeni iş büyük bir zorluk (meydan okuma)." }
    ]
};

const vocabularies: Record<number, GermanUnitVocabulary> = {
    531: unit531Vocab, 532: unit532Vocab, 533: unit533Vocab, 534: unit534Vocab, 535: unit535Vocab,
    536: unit536Vocab, 537: unit537Vocab, 538: unit538Vocab, 539: unit539Vocab, 540: unit540Vocab,
    541: unit541Vocab, 542: unit542Vocab, 543: unit543Vocab, 544: unit544Vocab, 545: unit545Vocab,
    546: unit546Vocab, 547: unit547Vocab, 548: unit548Vocab, 549: unit549Vocab, 550: unit550Vocab,
    551: unit551Vocab, 552: unit552Vocab, 553: unit553Vocab, 554: unit554Vocab, 555: unit555Vocab,
    556: unit556Vocab, 557: unit557Vocab, 558: unit558Vocab, 559: unit559Vocab, 560: unit560Vocab
};

export function getGermanA2VocabularyForUnit(unitId: number) {
    return vocabularies[unitId] || vocabularies[531];
}



