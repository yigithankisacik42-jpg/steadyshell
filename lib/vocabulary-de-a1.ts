/**
 * SteadyShell Vocabulary Database - Almanca A1
 * 30 Units (ID: 501-530), 20 words per unit
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

// ===== UNIT 501: SELAMLAŞMA VE TANIŞMA =====
const unit501Vocab: GermanUnitVocabulary = {
    unitId: 501, title: "Selamlaşma ve Tanışma",
    words: [
        { word: "Hallo", meaning: "Merhaba", pronunciation: "ha-lo", example: "Hallo, wie geht es dir?", exampleTranslation: "Merhaba, nasılsın?" },
        { word: "Guten Morgen", meaning: "Günaydın", pronunciation: "gu-tın mor-gın", example: "Guten Morgen, Herr Müller!", exampleTranslation: "Günaydın, Bay Müller!" },
        { word: "Guten Tag", meaning: "İyi günler", pronunciation: "gu-tın tag", example: "Guten Tag, wie kann ich helfen?", exampleTranslation: "İyi günler, nasıl yardımcı olabilirim?" },
        { word: "Guten Abend", meaning: "İyi akşamlar", pronunciation: "gu-tın a-bınt", example: "Guten Abend, willkommen!", exampleTranslation: "İyi akşamlar, hoş geldiniz!" },
        { word: "Gute Nacht", meaning: "İyi geceler", pronunciation: "gu-tı naht", example: "Gute Nacht, schlaf gut!", exampleTranslation: "İyi geceler, iyi uykular!" },
        { word: "Auf Wiedersehen", meaning: "Hoşça kalın", pronunciation: "auf vi-dır-ze-ın", example: "Auf Wiedersehen, bis morgen!", exampleTranslation: "Hoşça kalın, yarın görüşürüz!" },
        { word: "Tschüss", meaning: "Hoşça kal", pronunciation: "çüs", example: "Tschüss, bis bald!", exampleTranslation: "Hoşça kal, yakında görüşürüz!" },
        { word: "Danke", meaning: "Teşekkürler", pronunciation: "dan-kı", example: "Danke schön!", exampleTranslation: "Çok teşekkürler!" },
        { word: "Bitte", meaning: "Rica ederim / Lütfen", pronunciation: "bi-tı", example: "Bitte schön!", exampleTranslation: "Rica ederim!" },
        { word: "Entschuldigung", meaning: "Özür dilerim", pronunciation: "ent-şul-di-gung", example: "Entschuldigung, wo ist der Bahnhof?", exampleTranslation: "Affedersiniz, tren istasyonu nerede?" },
        { word: "Ja", meaning: "Evet", pronunciation: "ya", example: "Ja, natürlich!", exampleTranslation: "Evet, tabii ki!" },
        { word: "Nein", meaning: "Hayır", pronunciation: "nayn", example: "Nein, danke.", exampleTranslation: "Hayır, teşekkürler." },
        { word: "Herr", meaning: "Bay", pronunciation: "her", example: "Guten Tag, Herr Schmidt.", exampleTranslation: "İyi günler, Bay Schmidt." },
        { word: "Frau", meaning: "Bayan/Kadın", pronunciation: "frau", example: "Frau Müller ist Lehrerin.", exampleTranslation: "Bayan Müller öğretmen." },
        { word: "Name", meaning: "İsim", pronunciation: "na-mı", example: "Mein Name ist Thomas.", exampleTranslation: "Benim adım Thomas." },
        { word: "Freund", meaning: "Arkadaş", pronunciation: "froynt", example: "Er ist mein Freund.", exampleTranslation: "O benim arkadaşım." },
        { word: "Willkommen", meaning: "Hoş geldiniz", pronunciation: "vil-ko-mın", example: "Willkommen in Deutschland!", exampleTranslation: "Almanya'ya hoş geldiniz!" },
        { word: "Bis bald", meaning: "Yakında görüşürüz", pronunciation: "bis balt", example: "Tschüss, bis bald!", exampleTranslation: "Hoşça kal, yakında görüşürüz!" },
        { word: "Es tut mir leid", meaning: "Üzgünüm", pronunciation: "es tut mir layt", example: "Es tut mir leid, ich bin spät.", exampleTranslation: "Üzgünüm, geç kaldım." },
        { word: "Wie bitte?", meaning: "Efendim? / Nasıl?", pronunciation: "vi bi-tı", example: "Wie bitte? Können Sie wiederholen?", exampleTranslation: "Efendim? Tekrar edebilir misiniz?" }
    ]
};

// ===== UNIT 502: SAYILAR 1-20 =====
const unit502Vocab: GermanUnitVocabulary = {
    unitId: 502, title: "Sayılar 1-20",
    words: [
        { word: "Eins", meaning: "1", pronunciation: "ayns", example: "Ich habe eins.", exampleTranslation: "Bir tane var." },
        { word: "Zwei", meaning: "2", pronunciation: "tsvay", example: "Zwei Kaffee, bitte.", exampleTranslation: "İki kahve, lütfen." },
        { word: "Drei", meaning: "3", pronunciation: "dray", example: "Drei Brüder.", exampleTranslation: "Üç erkek kardeş." },
        { word: "Vier", meaning: "4", pronunciation: "fir", example: "Vier Jahreszeiten.", exampleTranslation: "Dört mevsim." },
        { word: "Fünf", meaning: "5", pronunciation: "fünf", example: "Fünf Finger.", exampleTranslation: "Beş parmak." },
        { word: "Sechs", meaning: "6", pronunciation: "zeks", example: "Sechs Uhr.", exampleTranslation: "Saat altı." },
        { word: "Sieben", meaning: "7", pronunciation: "zi-bın", example: "Sieben Tage.", exampleTranslation: "Yedi gün." },
        { word: "Acht", meaning: "8", pronunciation: "aht", example: "Acht Stunden.", exampleTranslation: "Sekiz saat." },
        { word: "Neun", meaning: "9", pronunciation: "noyn", example: "Neun Euro.", exampleTranslation: "Dokuz euro." },
        { word: "Zehn", meaning: "10", pronunciation: "tsen", example: "Zehn Minuten.", exampleTranslation: "On dakika." },
        { word: "Elf", meaning: "11", pronunciation: "elf", example: "Elf Schüler.", exampleTranslation: "On bir öğrenci." },
        { word: "Zwölf", meaning: "12", pronunciation: "tsvölf", example: "Zwölf Monate.", exampleTranslation: "On iki ay." },
        { word: "Dreizehn", meaning: "13", pronunciation: "dray-tsen", example: "Er ist dreizehn.", exampleTranslation: "O on üç yaşında." },
        { word: "Vierzehn", meaning: "14", pronunciation: "fir-tsen", example: "Vierzehn Tage.", exampleTranslation: "On dört gün." },
        { word: "Fünfzehn", meaning: "15", pronunciation: "fünf-tsen", example: "Fünfzehn Euro.", exampleTranslation: "On beş euro." },
        { word: "Sechzehn", meaning: "16", pronunciation: "zeh-tsen", example: "Sechzehn Jahre alt.", exampleTranslation: "On altı yaşında." },
        { word: "Siebzehn", meaning: "17", pronunciation: "zip-tsen", example: "Siebzehn Kilometer.", exampleTranslation: "On yedi kilometre." },
        { word: "Achtzehn", meaning: "18", pronunciation: "aht-tsen", example: "Achtzehn Uhr.", exampleTranslation: "Saat on sekiz." },
        { word: "Neunzehn", meaning: "19", pronunciation: "noyn-tsen", example: "Neunzehn Grad.", exampleTranslation: "On dokuz derece." },
        { word: "Zwanzig", meaning: "20", pronunciation: "tsvan-tsıh", example: "Zwanzig Studenten.", exampleTranslation: "Yirmi öğrenci." }
    ]
};

// ===== UNIT 503: AİLE ÜYELERİ =====
const unit503Vocab: GermanUnitVocabulary = {
    unitId: 503, title: "Aile Üyeleri",
    words: [
        { word: "die Mutter", meaning: "Anne", pronunciation: "di mu-tır", example: "Meine Mutter kocht gerne.", exampleTranslation: "Annem yemek yapmayı seviyor." },
        { word: "der Vater", meaning: "Baba", pronunciation: "der fa-tır", example: "Mein Vater arbeitet als Arzt.", exampleTranslation: "Babam doktor olarak çalışıyor." },
        { word: "die Schwester", meaning: "Kız kardeş", pronunciation: "di şves-tır", example: "Meine Schwester ist jünger.", exampleTranslation: "Kız kardeşim daha küçük." },
        { word: "der Bruder", meaning: "Erkek kardeş", pronunciation: "der bru-dır", example: "Mein Bruder studiert.", exampleTranslation: "Erkek kardeşim okuyor." },
        { word: "die Großmutter", meaning: "Büyükanne", pronunciation: "di gros-mu-tır", example: "Meine Großmutter backt Kuchen.", exampleTranslation: "Büyükannem pasta yapıyor." },
        { word: "der Großvater", meaning: "Büyükbaba", pronunciation: "der gros-fa-tır", example: "Mein Großvater erzählt Geschichten.", exampleTranslation: "Büyükbabam hikaye anlatıyor." },
        { word: "die Tante", meaning: "Teyze/Hala", pronunciation: "di tan-tı", example: "Meine Tante wohnt in Berlin.", exampleTranslation: "Teyzem Berlin'de oturuyor." },
        { word: "der Onkel", meaning: "Amca/Dayı", pronunciation: "der on-kıl", example: "Mein Onkel ist Ingenieur.", exampleTranslation: "Amcam mühendis." },
        { word: "der Sohn", meaning: "Oğul", pronunciation: "der zon", example: "Ihr Sohn ist drei Jahre alt.", exampleTranslation: "Oğlu üç yaşında." },
        { word: "die Tochter", meaning: "Kız (evlat)", pronunciation: "di toh-tır", example: "Ihre Tochter geht zur Schule.", exampleTranslation: "Kızı okula gidiyor." },
        { word: "der Ehemann", meaning: "Koca", pronunciation: "der e-ı-man", example: "Ihr Ehemann ist nett.", exampleTranslation: "Kocası düşünceli." },
        { word: "die Ehefrau", meaning: "Eş (kadın)", pronunciation: "di e-ı-frau", example: "Seine Ehefrau ist Ärztin.", exampleTranslation: "Eşi doktor." },
        { word: "die Eltern", meaning: "Ebeveynler", pronunciation: "di el-tırn", example: "Meine Eltern leben in Ankara.", exampleTranslation: "Ailem Ankara'da yaşıyor." },
        { word: "die Geschwister", meaning: "Kardeşler", pronunciation: "di gı-şvis-tır", example: "Ich habe zwei Geschwister.", exampleTranslation: "İki kardeşim var." },
        { word: "die Familie", meaning: "Aile", pronunciation: "di fa-mi-li-ı", example: "Meine Familie ist groß.", exampleTranslation: "Ailem kalabalık." },
        { word: "das Kind", meaning: "Çocuk", pronunciation: "das kint", example: "Das Kind spielt im Garten.", exampleTranslation: "Çocuk bahçede oynuyor." },
        { word: "das Baby", meaning: "Bebek", pronunciation: "das bey-bi", example: "Das Baby schläft.", exampleTranslation: "Bebek uyuyor." },
        { word: "der Cousin", meaning: "Kuzen (erkek)", pronunciation: "der ku-zen", example: "Mein Cousin ist lustig.", exampleTranslation: "Kuzenim komik." },
        { word: "die Cousine", meaning: "Kuzen (kız)", pronunciation: "di ku-zi-nı", example: "Meine Cousine studiert Medizin.", exampleTranslation: "Kuzenim tıp okuyor." },
        { word: "verheiratet", meaning: "Evli", pronunciation: "fer-hay-ra-tet", example: "Ich bin verheiratet.", exampleTranslation: "Evliyim." }
    ]
};

// ===== UNIT 504: RENKLER =====
const unit504Vocab: GermanUnitVocabulary = {
    unitId: 504, title: "Renkler",
    words: [
        { word: "rot", meaning: "Kırmızı", pronunciation: "rot", example: "Das Auto ist rot.", exampleTranslation: "Araba kırmızı." },
        { word: "blau", meaning: "Mavi", pronunciation: "blau", example: "Der Himmel ist blau.", exampleTranslation: "Gökyüzü mavi." },
        { word: "grün", meaning: "Yeşil", pronunciation: "grün", example: "Das Gras ist grün.", exampleTranslation: "Çimen yeşil." },
        { word: "gelb", meaning: "Sarı", pronunciation: "gelp", example: "Die Sonne ist gelb.", exampleTranslation: "Güneş sarı." },
        { word: "schwarz", meaning: "Siyah", pronunciation: "şvarts", example: "Die Katze ist schwarz.", exampleTranslation: "Kedi siyah." },
        { word: "weiß", meaning: "Beyaz", pronunciation: "vays", example: "Der Schnee ist weiß.", exampleTranslation: "Kar beyaz." },
        { word: "braun", meaning: "Kahverengi", pronunciation: "braun", example: "Der Tisch ist braun.", exampleTranslation: "Masa kahverengi." },
        { word: "grau", meaning: "Gri", pronunciation: "grau", example: "Der Elefant ist grau.", exampleTranslation: "Fil gri." },
        { word: "orange", meaning: "Turuncu", pronunciation: "o-ran-jı", example: "Die Orange ist orange.", exampleTranslation: "Portakal turuncu." },
        { word: "rosa", meaning: "Pembe", pronunciation: "ro-za", example: "Die Blumen sind rosa.", exampleTranslation: "Çiçekler pembe." },
        { word: "lila", meaning: "Mor", pronunciation: "li-la", example: "Mein Kleid ist lila.", exampleTranslation: "Elbisem mor." },
        { word: "dunkel", meaning: "Koyu", pronunciation: "dun-kıl", example: "Dunkelblau ist schön.", exampleTranslation: "Koyu mavi güzel." },
        { word: "hell", meaning: "Açık (renk)", pronunciation: "hel", example: "Hellgrün ist frisch.", exampleTranslation: "Açık yeşil taze." },
        { word: "bunt", meaning: "Renkli/Rengarenk", pronunciation: "bunt", example: "Der Schmetterling ist bunt.", exampleTranslation: "Kelebek rengarenk." },
        { word: "die Farbe", meaning: "Renk", pronunciation: "di far-bı", example: "Welche Farbe magst du?", exampleTranslation: "Hangi rengi seversin?" },
        { word: "gold", meaning: "Altın rengi", pronunciation: "golt", example: "Der Ring ist gold.", exampleTranslation: "Yüzük altın rengi." },
        { word: "silber", meaning: "Gümüş rengi", pronunciation: "zil-bır", example: "Die Kette ist silber.", exampleTranslation: "Kolye gümüş rengi." },
        { word: "türkis", meaning: "Turkuaz", pronunciation: "tür-kis", example: "Das Meer ist türkis.", exampleTranslation: "Deniz turkuaz." },
        { word: "beige", meaning: "Bej", pronunciation: "bej", example: "Die Hose ist beige.", exampleTranslation: "Pantolon bej." },
        { word: "Lieblingsfarbe", meaning: "En sevdiğim renk", pronunciation: "lib-lings-far-bı", example: "Meine Lieblingsfarbe ist blau.", exampleTranslation: "En sevdiğim renk mavi." }
    ]
};

// ===== UNIT 505: YİYECEKLER =====
const unit505Vocab: GermanUnitVocabulary = {
    unitId: 505, title: "Yiyecekler",
    words: [
        { word: "das Brot", meaning: "Ekmek", pronunciation: "das brot", example: "Ich esse Brot zum Frühstück.", exampleTranslation: "Kahvaltıda ekmek yerim." },
        { word: "der Käse", meaning: "Peynir", pronunciation: "der ke-zı", example: "Ich liebe Käse.", exampleTranslation: "Peyniri severim." },
        { word: "das Obst", meaning: "Meyve", pronunciation: "das opst", example: "Obst ist gesund.", exampleTranslation: "Meyve sağlıklı." },
        { word: "das Gemüse", meaning: "Sebze", pronunciation: "das gı-mü-zı", example: "Iss dein Gemüse!", exampleTranslation: "Sebzeni ye!" },
        { word: "das Fleisch", meaning: "Et", pronunciation: "das flayş", example: "Ich esse kein Fleisch.", exampleTranslation: "Et yemiyorum." },
        { word: "der Fisch", meaning: "Balık", pronunciation: "der fiş", example: "Fisch ist gesund.", exampleTranslation: "Balık sağlıklı." },
        { word: "das Ei", meaning: "Yumurta", pronunciation: "das ay", example: "Ich esse Eier zum Frühstück.", exampleTranslation: "Kahvaltıda yumurta yerim." },
        { word: "die Butter", meaning: "Tereyağı", pronunciation: "di bu-tır", example: "Brot mit Butter.", exampleTranslation: "Tereyağlı ekmek." },
        { word: "der Reis", meaning: "Pirinç/Pilav", pronunciation: "der rays", example: "Reis mit Gemüse.", exampleTranslation: "Sebzeli pilav." },
        { word: "die Kartoffel", meaning: "Patates", pronunciation: "di kar-to-fıl", example: "Kartoffeln sind lecker.", exampleTranslation: "Patates lezzetli." },
        { word: "die Suppe", meaning: "Çorba", pronunciation: "di zu-pı", example: "Heiße Suppe schmeckt gut.", exampleTranslation: "Sıcak çorba güzel." },
        { word: "der Salat", meaning: "Salata", pronunciation: "der za-lat", example: "Ein frischer Salat.", exampleTranslation: "Taze bir salata." },
        { word: "die Wurst", meaning: "Sosis/Sucuk", pronunciation: "di vurst", example: "Deutsche Wurst ist berühmt.", exampleTranslation: "Alman sosisi meşhur." },
        { word: "die Nudel", meaning: "Makarna", pronunciation: "di nu-dıl", example: "Nudeln mit Soße.", exampleTranslation: "Soslu makarna." },
        { word: "die Pizza", meaning: "Pizza", pronunciation: "di pi-tsa", example: "Pizza ist lecker.", exampleTranslation: "Pizza lezzetli." },
        { word: "das Hähnchen", meaning: "Tavuk", pronunciation: "das hen-hın", example: "Hähnchen mit Reis.", exampleTranslation: "Pilavlı tavuk." },
        { word: "der Apfel", meaning: "Elma", pronunciation: "der ap-fıl", example: "Ein roter Apfel.", exampleTranslation: "Kırmızı bir elma." },
        { word: "die Banane", meaning: "Muz", pronunciation: "di ba-na-nı", example: "Bananen sind gelb.", exampleTranslation: "Muzlar sarı." },
        { word: "das Essen", meaning: "Yemek", pronunciation: "das e-sın", example: "Das Essen ist fertig.", exampleTranslation: "Yemek hazır." },
        { word: "lecker", meaning: "Lezzetli", pronunciation: "le-kır", example: "Das Essen ist lecker!", exampleTranslation: "Yemek lezzetli!" }
    ]
};

// ===== UNIT 506: İÇECEKLER =====
const unit506Vocab: GermanUnitVocabulary = {
    unitId: 506, title: "İçecekler",
    words: [
        { word: "das Wasser", meaning: "Su", pronunciation: "das va-sır", example: "Ich trinke Wasser.", exampleTranslation: "Su içiyorum." },
        { word: "der Kaffee", meaning: "Kahve", pronunciation: "der ka-fe", example: "Ein Kaffee, bitte.", exampleTranslation: "Bir kahve, lütfen." },
        { word: "der Tee", meaning: "Çay", pronunciation: "der te", example: "Türkischer Tee ist stark.", exampleTranslation: "Türk çayı güçlü." },
        { word: "die Milch", meaning: "Süt", pronunciation: "di milh", example: "Kinder trinken Milch.", exampleTranslation: "Çocuklar süt içer." },
        { word: "der Saft", meaning: "Meyve suyu", pronunciation: "der zaft", example: "Orangensaft ist lecker.", exampleTranslation: "Portakal suyu lezzetli." },
        { word: "das Bier", meaning: "Bira", pronunciation: "das bir", example: "Deutsches Bier ist berühmt.", exampleTranslation: "Alman birası meşhur." },
        { word: "der Wein", meaning: "Şarap", pronunciation: "der vayn", example: "Rotwein oder Weißwein?", exampleTranslation: "Kırmızı şarap mı beyaz şarap mı?" },
        { word: "die Limonade", meaning: "Limonata", pronunciation: "di li-mo-na-dı", example: "Eine kalte Limonade.", exampleTranslation: "Soğuk bir limonata." },
        { word: "die Schokolade", meaning: "Sıcak çikolata", pronunciation: "di şo-ko-la-dı", example: "Heiße Schokolade im Winter.", exampleTranslation: "Kışın sıcak çikolata." },
        { word: "die Flasche", meaning: "Şişe", pronunciation: "di fla-şı", example: "Eine Flasche Wasser.", exampleTranslation: "Bir şişe su." },
        { word: "das Glas", meaning: "Bardak", pronunciation: "das glas", example: "Ein Glas Milch.", exampleTranslation: "Bir bardak süt." },
        { word: "die Tasse", meaning: "Fincan", pronunciation: "di ta-sı", example: "Eine Tasse Kaffee.", exampleTranslation: "Bir fincan kahve." },
        { word: "kalt", meaning: "Soğuk", pronunciation: "kalt", example: "Kaltes Wasser, bitte.", exampleTranslation: "Soğuk su, lütfen." },
        { word: "heiß", meaning: "Sıcak", pronunciation: "hays", example: "Der Tee ist heiß.", exampleTranslation: "Çay sıcak." },
        { word: "trinken", meaning: "İçmek", pronunciation: "trin-kın", example: "Was möchten Sie trinken?", exampleTranslation: "Ne içmek istersiniz?" },
        { word: "der Zucker", meaning: "Şeker", pronunciation: "der tsu-kır", example: "Kaffee mit Zucker.", exampleTranslation: "Şekerli kahve." },
        { word: "ohne", meaning: "Olmadan/-sız", pronunciation: "o-nı", example: "Kaffee ohne Milch.", exampleTranslation: "Sütsüz kahve." },
        { word: "mit", meaning: "İle/-lı", pronunciation: "mit", example: "Tee mit Zucker.", exampleTranslation: "Şekerli çay." },
        { word: "die Getränke", meaning: "İçecekler", pronunciation: "di gı-tren-kı", example: "Kalte Getränke.", exampleTranslation: "Soğuk içecekler." },
        { word: "durstig", meaning: "Susamış", pronunciation: "durs-tıh", example: "Ich bin durstig.", exampleTranslation: "Susadım." }
    ]
};

// ===== UNIT 507: GÜNLER VE AYLAR =====
const unit507Vocab: GermanUnitVocabulary = {
    unitId: 507, title: "Günler ve Aylar",
    words: [
        { word: "Montag", meaning: "Pazartesi", pronunciation: "mon-tag", example: "Montag ist Arbeitstag.", exampleTranslation: "Pazartesi iş günü." },
        { word: "Dienstag", meaning: "Salı", pronunciation: "dins-tag", example: "Am Dienstag habe ich Kurs.", exampleTranslation: "Salı günü kursumvar." },
        { word: "Mittwoch", meaning: "Çarşamba", pronunciation: "mit-voh", example: "Mittwoch ist Mitte der Woche.", exampleTranslation: "Çarşamba, haftanın ortası." },
        { word: "Donnerstag", meaning: "Perşembe", pronunciation: "do-nırs-tag", example: "Donnerstag ist bald Freitag.", exampleTranslation: "Perşembe, neredeyse Cuma." },
        { word: "Freitag", meaning: "Cuma", pronunciation: "fray-tag", example: "Freitag ist Wochenende!", exampleTranslation: "Cuma, hafta sonu!" },
        { word: "Samstag", meaning: "Cumartesi", pronunciation: "zams-tag", example: "Am Samstag schlafe ich lang.", exampleTranslation: "Cumartesi uzun uyurum." },
        { word: "Sonntag", meaning: "Pazar", pronunciation: "zon-tag", example: "Sonntag ist Familientag.", exampleTranslation: "Pazar aile günü." },
        { word: "Januar", meaning: "Ocak", pronunciation: "ya-nu-ar", example: "Januar ist kalt.", exampleTranslation: "Ocak soğuk." },
        { word: "Februar", meaning: "Şubat", pronunciation: "feb-ru-ar", example: "Februar ist kurz.", exampleTranslation: "Şubat kısa." },
        { word: "März", meaning: "Mart", pronunciation: "merts", example: "Im März beginnt der Frühling.", exampleTranslation: "Mart'ta bahar başlar." },
        { word: "April", meaning: "Nisan", pronunciation: "ap-ril", example: "April, April!", exampleTranslation: "Nisan, nisan!" },
        { word: "Mai", meaning: "Mayıs", pronunciation: "may", example: "Mai ist wunderschön.", exampleTranslation: "Mayıs çok güzel." },
        { word: "Juni", meaning: "Haziran", pronunciation: "yu-ni", example: "Im Juni beginnt der Sommer.", exampleTranslation: "Haziran'da yaz başlar." },
        { word: "Juli", meaning: "Temmuz", pronunciation: "yu-li", example: "Juli ist sehr heiß.", exampleTranslation: "Temmuz çok sıcak." },
        { word: "August", meaning: "Ağustos", pronunciation: "au-gust", example: "Im August mache ich Urlaub.", exampleTranslation: "Ağustos'ta tatile çıkıyorum." },
        { word: "September", meaning: "Eylül", pronunciation: "zep-tem-bır", example: "Die Schule beginnt im September.", exampleTranslation: "Okul Eylül'de başlar." },
        { word: "Oktober", meaning: "Ekim", pronunciation: "ok-to-bır", example: "Oktober ist Herbst.", exampleTranslation: "Ekim sonbahar." },
        { word: "November", meaning: "Kasım", pronunciation: "no-vem-bır", example: "November ist grau.", exampleTranslation: "Kasım gri." },
        { word: "Dezember", meaning: "Aralık", pronunciation: "de-tsem-bır", example: "Dezember ist Weihnachten.", exampleTranslation: "Aralık Noel zamanı." },
        { word: "die Woche", meaning: "Hafta", pronunciation: "di vo-hı", example: "Eine Woche hat sieben Tage.", exampleTranslation: "Bir hafta yedi gün." }
    ]
};

// ===== UNIT 508: SAYILAR 21-100 =====
const unit508Vocab: GermanUnitVocabulary = {
    unitId: 508, title: "Sayılar 21-100",
    words: [
        { word: "einundzwanzig", meaning: "21", pronunciation: "ayn-unt-tsvan-tsıh", example: "Er ist einundzwanzig.", exampleTranslation: "O yirmi bir yaşında." },
        { word: "dreißig", meaning: "30", pronunciation: "dray-sıh", example: "Dreißig Minuten.", exampleTranslation: "Otuz dakika." },
        { word: "vierzig", meaning: "40", pronunciation: "fir-tsıh", example: "Vierzig Euro.", exampleTranslation: "Kırk euro." },
        { word: "fünfzig", meaning: "50", pronunciation: "fünf-tsıh", example: "Fünfzig Prozent.", exampleTranslation: "Yüzde elli." },
        { word: "sechzig", meaning: "60", pronunciation: "zeh-tsıh", example: "Sechzig Sekunden.", exampleTranslation: "Altmış saniye." },
        { word: "siebzig", meaning: "70", pronunciation: "zip-tsıh", example: "Siebzig Kilometer.", exampleTranslation: "Yetmiş kilometre." },
        { word: "achtzig", meaning: "80", pronunciation: "aht-tsıh", example: "Achtzig Jahre alt.", exampleTranslation: "Seksen yaşında." },
        { word: "neunzig", meaning: "90", pronunciation: "noyn-tsıh", example: "Neunzig Grad.", exampleTranslation: "Doksan derece." },
        { word: "hundert", meaning: "100", pronunciation: "hun-dırt", example: "Hundert Punkte.", exampleTranslation: "Yüz puan." },
        { word: "erste", meaning: "Birinci", pronunciation: "ers-tı", example: "Der erste Platz.", exampleTranslation: "Birinci sıra." },
        { word: "zweite", meaning: "İkinci", pronunciation: "tsvay-tı", example: "Die zweite Straße.", exampleTranslation: "İkinci sokak." },
        { word: "dritte", meaning: "Üçüncü", pronunciation: "dri-tı", example: "Der dritte Stock.", exampleTranslation: "Üçüncü kat." },
        { word: "halb", meaning: "Yarım", pronunciation: "halp", example: "Eine halbe Stunde.", exampleTranslation: "Yarım saat." },
        { word: "doppelt", meaning: "İki kat", pronunciation: "do-pılt", example: "Doppelt so viel.", exampleTranslation: "İki katı kadar." },
        { word: "ein Paar", meaning: "Bir çift", pronunciation: "ayn par", example: "Ein Paar Schuhe.", exampleTranslation: "Bir çift ayakkabı." },
        { word: "tausend", meaning: "1000", pronunciation: "tau-zınt", example: "Tausend Euro.", exampleTranslation: "Bin euro." },
        { word: "Million", meaning: "Milyon", pronunciation: "mil-yon", example: "Eine Million Menschen.", exampleTranslation: "Bir milyon insan." },
        { word: "zählen", meaning: "Saymak", pronunciation: "tse-lın", example: "Bis zehn zählen.", exampleTranslation: "Ona kadar saymak." },
        { word: "die Nummer", meaning: "Numara", pronunciation: "di nu-mır", example: "Welche Nummer?", exampleTranslation: "Hangi numara?" },
        { word: "die Zahl", meaning: "Sayı", pronunciation: "di tsal", example: "Gerade Zahlen.", exampleTranslation: "Çift sayılar." }
    ]
};

// ===== UNIT 509: EV ODALARI =====
const unit509Vocab: GermanUnitVocabulary = {
    unitId: 509, title: "Ev Odaları",
    words: [
        { word: "das Haus", meaning: "Ev", pronunciation: "das haus", example: "Mein Haus ist groß.", exampleTranslation: "Evim büyük." },
        { word: "die Küche", meaning: "Mutfak", pronunciation: "di kü-hı", example: "Ich koche in der Küche.", exampleTranslation: "Mutfakta yemek yapıyorum." },
        { word: "das Schlafzimmer", meaning: "Yatak odası", pronunciation: "das şlaf-tsi-mır", example: "Ich schlafe im Schlafzimmer.", exampleTranslation: "Yatak odamda uyurum." },
        { word: "das Badezimmer", meaning: "Banyo", pronunciation: "das ba-dı-tsi-mır", example: "Das Badezimmer ist sauber.", exampleTranslation: "Banyo temiz." },
        { word: "das Wohnzimmer", meaning: "Oturma odası", pronunciation: "das von-tsi-mır", example: "Wir sitzen im Wohnzimmer.", exampleTranslation: "Oturma odasında oturuyoruz." },
        { word: "das Esszimmer", meaning: "Yemek odası", pronunciation: "das es-tsi-mır", example: "Wir essen im Esszimmer.", exampleTranslation: "Yemek odasında yiyoruz." },
        { word: "der Garten", meaning: "Bahçe", pronunciation: "der gar-tın", example: "Ein schöner Garten.", exampleTranslation: "Güzel bir bahçe." },
        { word: "die Garage", meaning: "Garaj", pronunciation: "di ga-ra-jı", example: "Das Auto ist in der Garage.", exampleTranslation: "Araba garajda." },
        { word: "die Tür", meaning: "Kapı", pronunciation: "di tür", example: "Mach die Tür zu.", exampleTranslation: "Kapıyı kapat." },
        { word: "das Fenster", meaning: "Pencere", pronunciation: "das fens-tır", example: "Öffne das Fenster.", exampleTranslation: "Pencereyi aç." },
        { word: "der Boden", meaning: "Zemin", pronunciation: "der bo-dın", example: "Der Boden ist sauber.", exampleTranslation: "Zemin temiz." },
        { word: "die Wand", meaning: "Duvar", pronunciation: "di vant", example: "Die Wand ist weiß.", exampleTranslation: "Duvar beyaz." },
        { word: "das Dach", meaning: "Çatı", pronunciation: "das dah", example: "Das Dach ist rot.", exampleTranslation: "Çatı kırmızı." },
        { word: "die Treppe", meaning: "Merdiven", pronunciation: "di tre-pı", example: "Geh die Treppe hoch.", exampleTranslation: "Merdivenden çık." },
        { word: "die Wohnung", meaning: "Daire", pronunciation: "di vo-nung", example: "Eine kleine Wohnung.", exampleTranslation: "Küçük bir daire." },
        { word: "der Flur", meaning: "Koridor", pronunciation: "der flur", example: "Im Flur steht ein Schrank.", exampleTranslation: "Koridorda bir dolap var." },
        { word: "der Keller", meaning: "Bodrum kat", pronunciation: "der ke-lır", example: "Im Keller ist es kühl.", exampleTranslation: "Bodrumda serin." },
        { word: "der Balkon", meaning: "Balkon", pronunciation: "der bal-kon", example: "Ich sitze auf dem Balkon.", exampleTranslation: "Balkonda oturuyorum." },
        { word: "das Stockwerk", meaning: "Kat", pronunciation: "das ştok-verk", example: "Im zweiten Stockwerk.", exampleTranslation: "İkinci katta." },
        { word: "wohnen", meaning: "Oturmak/Yaşamak", pronunciation: "vo-nın", example: "Wo wohnst du?", exampleTranslation: "Nerede oturuyorsun?" }
    ]
};

// ===== UNIT 510: MOBİLYALAR =====
const unit510Vocab: GermanUnitVocabulary = {
    unitId: 510, title: "Mobilyalar",
    words: [
        { word: "der Tisch", meaning: "Masa", pronunciation: "der tiş", example: "Der Tisch ist aus Holz.", exampleTranslation: "Masa ahşap." },
        { word: "der Stuhl", meaning: "Sandalye", pronunciation: "der ştul", example: "Setz dich auf den Stuhl.", exampleTranslation: "Sandalyeye otur." },
        { word: "das Sofa", meaning: "Koltuk", pronunciation: "das zo-fa", example: "Das Sofa ist bequem.", exampleTranslation: "Koltuk rahat." },
        { word: "das Bett", meaning: "Yatak", pronunciation: "das bet", example: "Mein Bett ist weich.", exampleTranslation: "Yatağım yumuşak." },
        { word: "der Schreibtisch", meaning: "Çalışma masası", pronunciation: "der şrayp-tiş", example: "Ich arbeite am Schreibtisch.", exampleTranslation: "Çalışma masamda çalışırım." },
        { word: "die Lampe", meaning: "Lamba", pronunciation: "di lam-pı", example: "Mach die Lampe an.", exampleTranslation: "Lambayı aç." },
        { word: "der Fernseher", meaning: "Televizyon", pronunciation: "der fern-ze-ır", example: "Wir schauen Fernseher.", exampleTranslation: "Televizyon izliyoruz." },
        { word: "das Regal", meaning: "Raf", pronunciation: "das re-gal", example: "Bücher im Regal.", exampleTranslation: "Raftaki kitaplar." },
        { word: "der Spiegel", meaning: "Ayna", pronunciation: "der şpi-gıl", example: "Schau in den Spiegel.", exampleTranslation: "Aynaya bak." },
        { word: "der Teppich", meaning: "Halı", pronunciation: "der te-pıh", example: "Der Teppich ist weich.", exampleTranslation: "Halı yumuşak." },
        { word: "der Vorhang", meaning: "Perde", pronunciation: "der for-hang", example: "Mach die Vorhänge zu.", exampleTranslation: "Perdeleri kapat." },
        { word: "das Kissen", meaning: "Yastık", pronunciation: "das ki-sın", example: "Ein weiches Kissen.", exampleTranslation: "Yumuşak bir yastık." },
        { word: "die Decke", meaning: "Battaniye/Tavan", pronunciation: "di de-kı", example: "Die Decke ist warm.", exampleTranslation: "Battaniye sıcak." },
        { word: "der Kühlschrank", meaning: "Buzdolabı", pronunciation: "der kül-şrank", example: "Milch im Kühlschrank.", exampleTranslation: "Buzdolabında süt." },
        { word: "der Schrank", meaning: "Dolap", pronunciation: "der şrank", example: "Kleidung im Schrank.", exampleTranslation: "Dolaptaki kıyafetler." },
        { word: "die Waschmaschine", meaning: "Çamaşır makinesi", pronunciation: "di vaş-ma-şi-nı", example: "Die Wäsche in die Waschmaschine.", exampleTranslation: "Çamaşırları makineye koy." },
        { word: "der Herd", meaning: "Ocak", pronunciation: "der hert", example: "Kochen auf dem Herd.", exampleTranslation: "Ocakta pişirmek." },
        { word: "die Spüle", meaning: "Lavabo/Eviye", pronunciation: "di şpü-lı", example: "Geschirr in der Spüle.", exampleTranslation: "Eviyedeki bulaşıklar." },
        { word: "das Möbel", meaning: "Mobilya", pronunciation: "das mö-bıl", example: "Neue Möbel kaufen.", exampleTranslation: "Yeni mobilya almak." },
        { word: "gemütlich", meaning: "Rahat/Konforlu", pronunciation: "gı-müt-lıh", example: "Das Zimmer ist gemütlich.", exampleTranslation: "Oda rahat." }
    ]
};

// ===== UNIT 511: VÜCUT BÖLÜMLERİ =====
const unit511Vocab: GermanUnitVocabulary = {
    unitId: 511, title: "Vücut Bölümleri",
    words: [
        { word: "der Kopf", meaning: "Baş", pronunciation: "der kopf", example: "Mein Kopf tut weh.", exampleTranslation: "Başım ağrıyor." },
        { word: "das Auge", meaning: "Göz", pronunciation: "das au-gı", example: "Sie hat blaue Augen.", exampleTranslation: "Mavi gözleri var." },
        { word: "das Ohr", meaning: "Kulak", pronunciation: "das or", example: "Ich höre mit den Ohren.", exampleTranslation: "Kulaklarımla duyarım." },
        { word: "die Nase", meaning: "Burun", pronunciation: "di na-zı", example: "Meine Nase ist kalt.", exampleTranslation: "Burnum soğuk." },
        { word: "der Mund", meaning: "Ağız", pronunciation: "der munt", example: "Mach den Mund auf.", exampleTranslation: "Ağzını aç." },
        { word: "die Hand", meaning: "El", pronunciation: "di hant", example: "Wasch dir die Hände.", exampleTranslation: "Ellerini yıka." },
        { word: "der Arm", meaning: "Kol", pronunciation: "der arm", example: "Heb den Arm hoch.", exampleTranslation: "Kolunu kaldır." },
        { word: "das Bein", meaning: "Bacak", pronunciation: "das bayn", example: "Meine Beine sind müde.", exampleTranslation: "Bacaklarım yorgun." },
        { word: "der Fuß", meaning: "Ayak", pronunciation: "der fus", example: "Mein Fuß tut weh.", exampleTranslation: "Ayağım ağrıyor." },
        { word: "der Finger", meaning: "Parmak", pronunciation: "der fin-gır", example: "Fünf Finger.", exampleTranslation: "Beş parmak." },
        { word: "das Haar", meaning: "Saç", pronunciation: "das har", example: "Langes Haar.", exampleTranslation: "Uzun saç." },
        { word: "das Gesicht", meaning: "Yüz", pronunciation: "das gı-zıht", example: "Wasch dein Gesicht.", exampleTranslation: "Yüzünü yıka." },
        { word: "der Rücken", meaning: "Sırt", pronunciation: "der rü-kın", example: "Mein Rücken schmerzt.", exampleTranslation: "Sırtım ağrıyor." },
        { word: "der Bauch", meaning: "Karın", pronunciation: "der bauh", example: "Mein Bauch tut weh.", exampleTranslation: "Karnım ağrıyor." },
        { word: "das Herz", meaning: "Kalp", pronunciation: "das herts", example: "Mein Herz schlägt schnell.", exampleTranslation: "Kalbim hızlı atıyor." },
        { word: "der Zahn", meaning: "Diş", pronunciation: "der tsan", example: "Zähne putzen.", exampleTranslation: "Diş fırçalamak." },
        { word: "die Schulter", meaning: "Omuz", pronunciation: "di şul-tır", example: "Meine Schulter tut weh.", exampleTranslation: "Omuzum ağrıyor." },
        { word: "das Knie", meaning: "Diz", pronunciation: "das kni", example: "Mein Knie schmerzt.", exampleTranslation: "Dizim ağrıyor." },
        { word: "der Hals", meaning: "Boyun/Boğaz", pronunciation: "der hals", example: "Mein Hals tut weh.", exampleTranslation: "Boğazım ağrıyor." },
        { word: "der Körper", meaning: "Vücut", pronunciation: "der kör-pır", example: "Der Körper braucht Bewegung.", exampleTranslation: "Vücut hareket ister." }
    ]
};

// ===== UNIT 512: GİYSİLER =====
const unit512Vocab: GermanUnitVocabulary = {
    unitId: 512, title: "Giysiler",
    words: [
        { word: "das Hemd", meaning: "Gömlek", pronunciation: "das hemt", example: "Ein weißes Hemd.", exampleTranslation: "Beyaz gömlek." },
        { word: "die Hose", meaning: "Pantolon", pronunciation: "di ho-zı", example: "Eine blaue Hose.", exampleTranslation: "Mavi pantolon." },
        { word: "das Kleid", meaning: "Elbise", pronunciation: "das klayt", example: "Ein rotes Kleid.", exampleTranslation: "Kırmızı elbise." },
        { word: "der Schuh", meaning: "Ayakkabı", pronunciation: "der şu", example: "Neue Schuhe.", exampleTranslation: "Yeni ayakkabılar." },
        { word: "die Jacke", meaning: "Ceket", pronunciation: "di ya-kı", example: "Eine Lederjacke.", exampleTranslation: "Deri ceket." },
        { word: "der Mantel", meaning: "Palto", pronunciation: "der man-tıl", example: "Ein warmer Mantel.", exampleTranslation: "Sıcak palto." },
        { word: "das T-Shirt", meaning: "Tişört", pronunciation: "das ti-şört", example: "Ein blaues T-Shirt.", exampleTranslation: "Mavi tişört." },
        { word: "die Jeans", meaning: "Kot pantolon", pronunciation: "di cins", example: "Ich trage gerne Jeans.", exampleTranslation: "Kot giymeyi severim." },
        { word: "der Rock", meaning: "Etek", pronunciation: "der rok", example: "Ein kurzer Rock.", exampleTranslation: "Kısa etek." },
        { word: "die Socke", meaning: "Çorap", pronunciation: "di zo-kı", example: "Weiße Socken.", exampleTranslation: "Beyaz çoraplar." },
        { word: "der Hut", meaning: "Şapka", pronunciation: "der hut", example: "Ein schöner Hut.", exampleTranslation: "Güzel bir şapka." },
        { word: "der Schal", meaning: "Atkı", pronunciation: "der şal", example: "Ein Wollschal.", exampleTranslation: "Yün atkı." },
        { word: "der Handschuh", meaning: "Eldiven", pronunciation: "der hant-şu", example: "Lederhandschuhe.", exampleTranslation: "Deri eldivenler." },
        { word: "der Pullover", meaning: "Kazak", pronunciation: "der pu-lo-vır", example: "Ein warmer Pullover.", exampleTranslation: "Sıcak kazak." },
        { word: "der Anzug", meaning: "Takım elbise", pronunciation: "der an-tsug", example: "Ein schwarzer Anzug.", exampleTranslation: "Siyah takım elbise." },
        { word: "die Mütze", meaning: "Bere", pronunciation: "di mü-tsı", example: "Eine warme Mütze.", exampleTranslation: "Sıcak bere." },
        { word: "die Bluse", meaning: "Bluz", pronunciation: "di blu-zı", example: "Eine weiße Bluse.", exampleTranslation: "Beyaz bluz." },
        { word: "der Gürtel", meaning: "Kemer", pronunciation: "der gür-tıl", example: "Ein Ledergürtel.", exampleTranslation: "Deri kemer." },
        { word: "anziehen", meaning: "Giymek", pronunciation: "an-tsi-ın", example: "Was soll ich anziehen?", exampleTranslation: "Ne giyeyim?" },
        { word: "die Größe", meaning: "Beden", pronunciation: "di grö-sı", example: "Welche Größe tragen Sie?", exampleTranslation: "Hangi bedeni giyiyorsunuz?" }
    ]
};

// ===== UNIT 513: HAYVANLAR =====
const unit513Vocab: GermanUnitVocabulary = {
    unitId: 513, title: "Hayvanlar",
    words: [
        { word: "der Hund", meaning: "Köpek", pronunciation: "der hunt", example: "Ich habe einen Hund.", exampleTranslation: "Bir köpeğim var." },
        { word: "die Katze", meaning: "Kedi", pronunciation: "di ka-tsı", example: "Die Katze schläft.", exampleTranslation: "Kedi uyuyor." },
        { word: "der Vogel", meaning: "Kuş", pronunciation: "der fo-gıl", example: "Ein Vogel singt.", exampleTranslation: "Bir kuş ötüyor." },
        { word: "der Fisch", meaning: "Balık", pronunciation: "der fiş", example: "Fische im Meer.", exampleTranslation: "Denizdeki balıklar." },
        { word: "das Pferd", meaning: "At", pronunciation: "das pfert", example: "Ein schönes Pferd.", exampleTranslation: "Güzel bir at." },
        { word: "die Kuh", meaning: "İnek", pronunciation: "di ku", example: "Kühe geben Milch.", exampleTranslation: "İnekler süt verir." },
        { word: "der Löwe", meaning: "Aslan", pronunciation: "der lö-vı", example: "Der Löwe ist stark.", exampleTranslation: "Aslan güçlü." },
        { word: "der Elefant", meaning: "Fil", pronunciation: "der e-le-fant", example: "Elefanten sind groß.", exampleTranslation: "Filler büyük." },
        { word: "der Affe", meaning: "Maymun", pronunciation: "der a-fı", example: "Affen klettern Bäume.", exampleTranslation: "Maymunlar ağaca tırmanır." },
        { word: "das Kaninchen", meaning: "Tavşan", pronunciation: "das ka-nin-hın", example: "Ein weißes Kaninchen.", exampleTranslation: "Beyaz bir tavşan." },
        { word: "der Bär", meaning: "Ayı", pronunciation: "der ber", example: "Bären mögen Honig.", exampleTranslation: "Ayılar bal sever." },
        { word: "die Schlange", meaning: "Yılan", pronunciation: "di şlan-gı", example: "Schlangen sind gefährlich.", exampleTranslation: "Yılanlar tehlikeli." },
        { word: "das Huhn", meaning: "Tavuk", pronunciation: "das hun", example: "Hühner legen Eier.", exampleTranslation: "Tavuklar yumurta yapar." },
        { word: "die Ente", meaning: "Ördek", pronunciation: "di en-tı", example: "Enten schwimmen.", exampleTranslation: "Ördekler yüzer." },
        { word: "das Haustier", meaning: "Evcil hayvan", pronunciation: "das haus-tir", example: "Ich liebe mein Haustier.", exampleTranslation: "Evcil hayvanımı seviyorum." },
        { word: "die Maus", meaning: "Fare", pronunciation: "di maus", example: "Die Katze jagt die Maus.", exampleTranslation: "Kedi fareyi kovalıyor." },
        { word: "der Schmetterling", meaning: "Kelebek", pronunciation: "der şme-tır-ling", example: "Ein bunter Schmetterling.", exampleTranslation: "Rengarenk bir kelebek." },
        { word: "die Schildkröte", meaning: "Kaplumbağa", pronunciation: "di şilt-krö-tı", example: "Schildkröten sind langsam.", exampleTranslation: "Kaplumbağalar yavaştır." },
        { word: "der Wolf", meaning: "Kurt", pronunciation: "der volf", example: "Der Wolf heult.", exampleTranslation: "Kurt ulur." },
        { word: "das Tier", meaning: "Hayvan", pronunciation: "das tir", example: "Ich mag Tiere.", exampleTranslation: "Hayvanları severim." }
    ]
};

// ===== UNIT 514: MESLEKLER =====
const unit514Vocab: GermanUnitVocabulary = {
    unitId: 514, title: "Meslekler",
    words: [
        { word: "der Arzt", meaning: "Doktor (erkek)", pronunciation: "der artst", example: "Der Arzt hilft Kranken.", exampleTranslation: "Doktor hastalara yardım eder." },
        { word: "die Ärztin", meaning: "Doktor (kadın)", pronunciation: "di erts-tin", example: "Die Ärztin ist nett.", exampleTranslation: "Kadın doktor nazik." },
        { word: "der Lehrer", meaning: "Öğretmen (erkek)", pronunciation: "der le-rır", example: "Der Lehrer unterrichtet.", exampleTranslation: "Öğretmen ders veriyor." },
        { word: "die Lehrerin", meaning: "Öğretmen (kadın)", pronunciation: "di le-rı-rin", example: "Die Lehrerin ist streng.", exampleTranslation: "Kadın öğretmen ciddi." },
        { word: "der Polizist", meaning: "Polis", pronunciation: "der po-li-tsist", example: "Der Polizist schützt uns.", exampleTranslation: "Polis bizi korur." },
        { word: "der Feuerwehrmann", meaning: "İtfaiyeci", pronunciation: "der foy-ır-ver-man", example: "Feuerwehrmänner sind mutig.", exampleTranslation: "İtfaiyeciler cesurdur." },
        { word: "der Koch", meaning: "Aşçı", pronunciation: "der koh", example: "Der Koch kocht gut.", exampleTranslation: "Aşçı iyi yemek yapıyor." },
        { word: "der Ingenieur", meaning: "Mühendis", pronunciation: "der in-je-nyör", example: "Mein Vater ist Ingenieur.", exampleTranslation: "Babam mühendis." },
        { word: "der Anwalt", meaning: "Avukat", pronunciation: "der an-valt", example: "Der Anwalt arbeitet viel.", exampleTranslation: "Avukat çok çalışıyor." },
        { word: "der Fahrer", meaning: "Şoför", pronunciation: "der fa-rır", example: "Der Busfahrer.", exampleTranslation: "Otobüs şoförü." },
        { word: "der Kellner", meaning: "Garson", pronunciation: "der kel-nır", example: "Der Kellner bringt das Essen.", exampleTranslation: "Garson yemeği getiriyor." },
        { word: "der Student", meaning: "Öğrenci", pronunciation: "der ştu-dent", example: "Ich bin Student.", exampleTranslation: "Ben öğrenciyim." },
        { word: "der Bauer", meaning: "Çiftçi", pronunciation: "der bau-ır", example: "Der Bauer arbeitet auf dem Feld.", exampleTranslation: "Çiftçi tarlada çalışıyor." },
        { word: "der Künstler", meaning: "Sanatçı", pronunciation: "der künst-lır", example: "Der Künstler malt.", exampleTranslation: "Sanatçı resim yapıyor." },
        { word: "der Beruf", meaning: "Meslek", pronunciation: "der bı-ruf", example: "Was ist dein Beruf?", exampleTranslation: "Mesleğin ne?" },
        { word: "der Krankenpfleger", meaning: "Hemşire (erkek)", pronunciation: "der kran-kın-pfle-gır", example: "Der Krankenpfleger hilft.", exampleTranslation: "Hemşire yardım ediyor." },
        { word: "der Geschäftsmann", meaning: "İş adamı", pronunciation: "der gı-şefts-man", example: "Er ist Geschäftsmann.", exampleTranslation: "O iş adamı." },
        { word: "der Programmierer", meaning: "Programcı", pronunciation: "der pro-gra-mi-rır", example: "Der Programmierer schreibt Code.", exampleTranslation: "Programcı kod yazıyor." },
        { word: "arbeiten", meaning: "Çalışmak", pronunciation: "ar-bay-tın", example: "Wo arbeitest du?", exampleTranslation: "Nerede çalışıyorsun?" },
        { word: "die Arbeit", meaning: "İş", pronunciation: "di ar-bayt", example: "Ich suche Arbeit.", exampleTranslation: "İş arıyorum." }
    ]
};

// ===== UNIT 515: ŞEHİRDE YERLER =====
const unit515Vocab: GermanUnitVocabulary = {
    unitId: 515, title: "Şehirde Yerler",
    words: [
        { word: "die Schule", meaning: "Okul", pronunciation: "di şu-lı", example: "Ich gehe zur Schule.", exampleTranslation: "Okula gidiyorum." },
        { word: "das Krankenhaus", meaning: "Hastane", pronunciation: "das kran-kın-haus", example: "Das Krankenhaus ist nah.", exampleTranslation: "Hastane yakın." },
        { word: "die Bank", meaning: "Banka", pronunciation: "di bank", example: "Ich gehe zur Bank.", exampleTranslation: "Bankaya gidiyorum." },
        { word: "das Restaurant", meaning: "Restoran", pronunciation: "das res-to-ran", example: "Wir essen im Restaurant.", exampleTranslation: "Restoranda yiyoruz." },
        { word: "der Supermarkt", meaning: "Süpermarket", pronunciation: "der zu-pır-markt", example: "Einkaufen im Supermarkt.", exampleTranslation: "Süpermarkette alışveriş." },
        { word: "der Park", meaning: "Park", pronunciation: "der park", example: "Kinder spielen im Park.", exampleTranslation: "Çocuklar parkta oynuyor." },
        { word: "die Bibliothek", meaning: "Kütüphane", pronunciation: "di bib-li-o-tek", example: "Ich lerne in der Bibliothek.", exampleTranslation: "Kütüphanede çalışıyorum." },
        { word: "das Kino", meaning: "Sinema", pronunciation: "das ki-no", example: "Gehen wir ins Kino?", exampleTranslation: "Sinemaya gidelim mi?" },
        { word: "der Bahnhof", meaning: "Tren istasyonu", pronunciation: "der ban-hof", example: "Der Zug fährt vom Bahnhof.", exampleTranslation: "Tren istasyondan kalkıyor." },
        { word: "der Flughafen", meaning: "Havalimanı", pronunciation: "der flug-ha-fın", example: "Wir fahren zum Flughafen.", exampleTranslation: "Havalimanına gidiyoruz." },
        { word: "das Geschäft", meaning: "Dükkân", pronunciation: "das gı-şeft", example: "Ein Kleidungsgeschäft.", exampleTranslation: "Giyim dükkânı." },
        { word: "der Markt", meaning: "Pazar", pronunciation: "der markt", example: "Gemüse vom Markt.", exampleTranslation: "Pazardan sebze." },
        { word: "die Kirche", meaning: "Kilise", pronunciation: "di kir-hı", example: "Eine alte Kirche.", exampleTranslation: "Eski bir kilise." },
        { word: "die Moschee", meaning: "Cami", pronunciation: "di mo-şe", example: "Eine schöne Moschee.", exampleTranslation: "Güzel bir cami." },
        { word: "die Straße", meaning: "Sokak/Cadde", pronunciation: "di ştra-sı", example: "Die Straße ist lang.", exampleTranslation: "Sokak uzun." },
        { word: "die Apotheke", meaning: "Eczane", pronunciation: "di a-po-te-kı", example: "Wo ist die Apotheke?", exampleTranslation: "Eczane nerede?" },
        { word: "das Rathaus", meaning: "Belediye", pronunciation: "das rat-haus", example: "Das Rathaus ist groß.", exampleTranslation: "Belediye binası büyük." },
        { word: "die Post", meaning: "Postane", pronunciation: "di post", example: "Ich gehe zur Post.", exampleTranslation: "Postaneye gidiyorum." },
        { word: "das Museum", meaning: "Müze", pronunciation: "das mu-ze-um", example: "Das Museum ist interessant.", exampleTranslation: "Müze ilginç." },
        { word: "die Stadt", meaning: "Şehir", pronunciation: "di ştat", example: "Berlin ist eine große Stadt.", exampleTranslation: "Berlin büyük bir şehir." }
    ]
};

// ===== UNIT 516: ULAŞIM =====
const unit516Vocab: GermanUnitVocabulary = {
    unitId: 516, title: "Ulaşım",
    words: [
        { word: "das Auto", meaning: "Araba", pronunciation: "das au-to", example: "Ich fahre mit dem Auto.", exampleTranslation: "Arabayla gidiyorum." },
        { word: "der Bus", meaning: "Otobüs", pronunciation: "der bus", example: "Der Bus kommt um acht Uhr.", exampleTranslation: "Otobüs saat sekizde geliyor." },
        { word: "der Zug", meaning: "Tren", pronunciation: "der tsug", example: "Der Zug hat Verspätung.", exampleTranslation: "Trenin gecikmesi var." },
        { word: "das Flugzeug", meaning: "Uçak", pronunciation: "das flug-tsoyg", example: "Das Flugzeug fliegt nach Berlin.", exampleTranslation: "Uçak Berlin'e uçuyor." },
        { word: "das Fahrrad", meaning: "Bisiklet", pronunciation: "das fa-rat", example: "Ich fahre gerne Fahrrad.", exampleTranslation: "Bisiklet sürmeyi severim." },
        { word: "das Motorrad", meaning: "Motosiklet", pronunciation: "das mo-tor-rat", example: "Er hat ein neues Motorrad.", exampleTranslation: "Onun yeni bir motosikleti var." },
        { word: "das Taxi", meaning: "Taksi", pronunciation: "das tak-si", example: "Rufen Sie ein Taxi, bitte.", exampleTranslation: "Bir taksi çağırın, lütfen." },
        { word: "die U-Bahn", meaning: "Metro", pronunciation: "di u-ban", example: "Ich nehme die U-Bahn.", exampleTranslation: "Metroya biniyorum." },
        { word: "das Schiff", meaning: "Gemi", pronunciation: "das şif", example: "Das Schiff ist im Hafen.", exampleTranslation: "Gemi limanda." },
        { word: "das Boot", meaning: "Tekne", pronunciation: "das bot", example: "Ein kleines Boot auf dem See.", exampleTranslation: "Göl üzerinde küçük bir tekne." },
        { word: "die Fahrkarte", meaning: "Bilet", pronunciation: "di far-kar-tı", example: "Wo kann ich eine Fahrkarte kaufen?", exampleTranslation: "Nereden bilet alabilirim?" },
        { word: "die Haltestelle", meaning: "Durak", pronunciation: "di hal-te-ştel-ı", example: "An der nächsten Haltestelle aussteigen.", exampleTranslation: "Bir sonraki durakta inin." },
        { word: "der Verkehr", meaning: "Trafik", pronunciation: "der fer-ker", example: "Es gibt viel Verkehr.", exampleTranslation: "Çok trafik var." },
        { word: "die Straße", meaning: "Yol / Sokak", pronunciation: "di ştra-sı", example: "Die Straße ist gesperrt.", exampleTranslation: "Yol kapalı." },
        { word: "der Bahnhof", meaning: "İstasyon", pronunciation: "der ban-hof", example: "Zum Bahnhof gehen.", exampleTranslation: "İstasyona gitmek." },
        { word: "die Verspätung", meaning: "Gecikme", pronunciation: "di fer-şpe-tung", example: "Zehn Minuten Verspätung.", exampleTranslation: "On dakika gecikme." },
        { word: "fahren", meaning: "Sürmek / Gitmek (araçla)", pronunciation: "fa-rın", example: "Wir fahren ans Meer.", exampleTranslation: "Denize gidiyoruz." },
        { word: "fliegen", meaning: "Uçmak", pronunciation: "fli-gın", example: "Vögel können fliegen.", exampleTranslation: "Kuşlar uçabilir." },
        { word: "aussteigen", meaning: "Araçtan inmek", pronunciation: "aus-ştay-gın", example: "Hier müssen wir aussteigen.", exampleTranslation: "Burada inmeliyiz." },
        { word: "umsteigen", meaning: "Aktarma yapmak", pronunciation: "um-ştay-gın", example: "In München muss ich umsteigen.", exampleTranslation: "Münih'te aktarma yapmalıyım." }
    ]
};

// ===== UNIT 517: GÜNLÜK RUTİNLER =====
const unit517Vocab: GermanUnitVocabulary = {
    unitId: 517, title: "Günlük Rutinler",
    words: [
        { word: "aufwachen", meaning: "Uyanmak", pronunciation: "auf-va-hın", example: "Ich wache um sieben Uhr auf.", exampleTranslation: "Saat yedide uyanırım." },
        { word: "aufstehen", meaning: "Ayağa kalkmak / Yataktan kalkmak", pronunciation: "auf-şte-ın", example: "Ich stehe sofort auf.", exampleTranslation: "Hemen kalkarım." },
        { word: "duschen", meaning: "Duş almak", pronunciation: "du-şın", example: "Ich dusche morgens.", exampleTranslation: "Sabahları duş alırım." },
        { word: "frühstücken", meaning: "Kahvaltı yapmak", pronunciation: "frü-ştü-kın", example: "Wir frühstücken um acht.", exampleTranslation: "Sekizde kahvaltı yaparız." },
        { word: "arbeiten", meaning: "Çalışmak", pronunciation: "ar-bay-tın", example: "Er arbeitet von neun bis fünf.", exampleTranslation: "Dokuzdan beşe kadar çalışıyor." },
        { word: "lernen", meaning: "Öğrenmek / Ders çalışmak", pronunciation: "ler-nın", example: "Ich lerne Deutsch.", exampleTranslation: "Almanca öğreniyorum." },
        { word: "kochen", meaning: "Yemek pişirmek", pronunciation: "ko-hın", example: "Was kochst du heute?", exampleTranslation: "Bugün ne pişiriyorsun?" },
        { word: "essen", meaning: "Yemek yemek", pronunciation: "e-sın", example: "Wir essen zu Mittag.", exampleTranslation: "Öğle yemeği yiyoruz." },
        { word: "trinken", meaning: "İçmek", pronunciation: "trin-kın", example: "Ich trinke gerne Tee.", exampleTranslation: "Çay içmeyi severim." },
        { word: "schlafen", meaning: "Uyumak", pronunciation: "şla-fın", example: "Ich schlafe acht Stunden.", exampleTranslation: "Sekiz saat uyurum." },
        { word: "fernsehen", meaning: "TV izlemek", pronunciation: "fern-ze-ın", example: "Abends sehen wir fern.", exampleTranslation: "Akşamları TV izleriz." },
        { word: "lesen", meaning: "Okumak", pronunciation: "le-zın", example: "Ich lese ein Buch.", exampleTranslation: "Bir kitap okuyorum." },
        { word: "einkaufen", meaning: "Alışveriş yapmak", pronunciation: "ayn-kau-fın", example: "Ich gehe samstags einkaufen.", exampleTranslation: "Cumartesileri alışverişe giderim." },
        { word: "aufräumen", meaning: "Toplamak / Temizlemek", pronunciation: "auf-roy-mın", example: "Ich muss mein Zimmer aufräumen.", exampleTranslation: "Odamı toplamalıyım." },
        { word: "anrufen", meaning: "Telefonla aramak", pronunciation: "an-ru-fın", example: "Ruf mich bitte an.", exampleTranslation: "Lütfen beni ara." },
        { word: "waschen", meaning: "Yıkamak", pronunciation: "va-şın", example: "Ich wasche die Wäsche.", exampleTranslation: "Çamaşırları yıkıyorum." },
        { word: "putzen", meaning: "Temizlemek", pronunciation: "pu-tsın", example: "Ich putze die Fenster.", exampleTranslation: "Pencereleri temizliyorum." },
        { word: "spazierengehen", meaning: "Yürüyüşe çıkmak", pronunciation: "şpa-tsi-rın-ge-ın", example: "Wir gehen im Park spazieren.", exampleTranslation: "Parkta yürüyüşe çıkıyoruz." },
        { word: "ins Bett gehen", meaning: "Yatağa gitmek / Yatmak", pronunciation: "ins bet ge-ın", example: "Ich gehe um elf ins Bett.", exampleTranslation: "Saat on birde yatarım." },
        { word: "Zähne putzen", meaning: "Diş fırçalamak", pronunciation: "tse-nı pu-tsın", example: "Vergiss nicht, die Zähne zu putzen.", exampleTranslation: "Dişlerini fırçalamayı unutma." }
    ]
};

// ===== UNIT 518: SAAT SÖYLEME =====
const unit518Vocab: GermanUnitVocabulary = {
    unitId: 518, title: "Saat Söyleme",
    words: [
        { word: "die Uhrzeit", meaning: "Saat (zaman olarak)", pronunciation: "di ur-tsayt", example: "Wie spät ist es?", exampleTranslation: "Saat kaç?" },
        { word: "die Stunde", meaning: "Saat (süre olarak)", pronunciation: "di ştun-dı", example: "Die Fahrt dauert eine Stunde.", exampleTranslation: "Yolculuk bir saat sürüyor." },
        { word: "die Minute", meaning: "Dakika", pronunciation: "di mi-nu-tı", example: "Fünf Minuten noch.", exampleTranslation: "Beş dakika daha." },
        { word: "die Sekunde", meaning: "Saniye", pronunciation: "di ze-kun-dı", example: "Warten Sie eine Sekunde.", exampleTranslation: "Bir saniye bekleyin." },
        { word: "Viertel vor", meaning: "Çeyrek kala", pronunciation: "fir-tıl for", example: "Es ist Viertel vor drei.", exampleTranslation: "Saat üçe çeyrek var." },
        { word: "Viertel nach", meaning: "Çeyrek geçe", pronunciation: "fir-tıl nah", example: "Es ist Viertel nach eins.", exampleTranslation: "Saat biri çeyrek geçiyor." },
        { word: "halb", meaning: "Buçuk", pronunciation: "halp", example: "Es ist halb vier.", exampleTranslation: "Saat üç buçuk." },
        { word: "Guten Morgen", meaning: "Günaydın", pronunciation: "gu-tın mor-gın", example: "Guten Morgen, alle zusammen!", exampleTranslation: "Herkese günaydın!" },
        { word: "Vormittag", meaning: "Öğleden önce", pronunciation: "for-mi-tag", example: "Am Vormittag arbeite ich.", exampleTranslation: "Öğleden önce çalışırım." },
        { word: "Mittag", meaning: "Öğle", pronunciation: "mi-tag", example: "Um Mittag essen wir.", exampleTranslation: "Öğlen yemek yeriz." },
        { word: "Nachmittag", meaning: "Öğleden sonra", pronunciation: "nah-mi-tag", example: "Am Nachmittag spiele ich Tennis.", exampleTranslation: "Öğleden sonra tenis oynarım." },
        { word: "Abend", meaning: "Akşam", pronunciation: "a-bınt", example: "Abends lese ich gerne.", exampleTranslation: "Akşamları kitap okumayı severim." },
        { word: "Nacht", meaning: "Gece", pronunciation: "naht", example: "In der Nacht ist es ruhig.", exampleTranslation: "Geceleyin sessizdir." },
        { word: "heute", meaning: "Bugün", pronunciation: "hoy-tı", example: "Heute ist ein schöner Tag.", exampleTranslation: "Bugün güzel bir gün." },
        { word: "morgen", meaning: "Yarın", pronunciation: "mor-gın", example: "Morgen fahre ich weg.", exampleTranslation: "Yarın gidiyorum." },
        { word: "gestern", meaning: "Dün", pronunciation: "ges-tırn", example: "Gestern war ich müde.", exampleTranslation: "Dün yorgundum." },
        { word: "jetzt", meaning: "Şimdi", pronunciation: "yetst", example: "Ich muss jetzt gehen.", exampleTranslation: "Şimdi gitmeliyim." },
        { word: "spät", meaning: "Geç", pronunciation: "şpeyt", example: "Es ist schon spät.", exampleTranslation: "Zaten geç oldu." },
        { word: "früh", meaning: "Erken", pronunciation: "frü", example: "Morgens stehe ich früh auf.", exampleTranslation: "Sabahları erken kalkarım." },
        { word: "pünktlich", meaning: "Dakik", pronunciation: "pünkt-lıh", example: "Seien Sie bitte pünktlich.", exampleTranslation: "Lütfen dakik olun." }
    ]
};

// ===== UNIT 519: HAVA DURUMU =====
const unit519Vocab: GermanUnitVocabulary = {
    unitId: 519, title: "Hava Durumu",
    words: [
        { word: "die Sonne", meaning: "Güneş", pronunciation: "di zo-nı", example: "Die Sonne scheint hell.", exampleTranslation: "Güneş parlak bir şekilde parlıyor." },
        { word: "der Regen", meaning: "Yağmur", pronunciation: "der re-gın", example: "Es gibt viel Regen im Herbst.", exampleTranslation: "Sonbaharda çok yağmur yağar." },
        { word: "die Wolke", meaning: "Bulut", pronunciation: "di vol-kı", example: "Keine Wolke am Himmel.", exampleTranslation: "Gökyüzünde hiç bulut yok." },
        { word: "der Wind", meaning: "Rüzgar", pronunciation: "der vint", example: "Der Wind weht stark.", exampleTranslation: "Rüzgar sert esiyor." },
        { word: "der Schnee", meaning: "Kar", pronunciation: "der şne", example: "Im Winter liegt Schnee.", exampleTranslation: "Kışın kar var." },
        { word: "sonnig", meaning: "Güneşli", pronunciation: "zo-nıh", example: "Heute ist es sonnig.", exampleTranslation: "Bugün güneşli." },
        { word: "regnerisch", meaning: "Yağmurlu", pronunciation: "reg-nı-riş", example: "Ein regnerischer Tag.", exampleTranslation: "Yağmurlu bir gün." },
        { word: "bewölkt", meaning: "Bulutlu", pronunciation: "be-völkt", example: "Der Himmel ist bewölkt.", exampleTranslation: "Gökyüzü bulutlu." },
        { word: "windig", meaning: "Rüzgarlı", pronunciation: "vin-dıh", example: "An der Küste ist es windig.", exampleTranslation: "Sahilde rüzgarlı." },
        { word: "schneien", meaning: "Kar yağması", pronunciation: "şnay-ın", example: "Es schneit draußen.", exampleTranslation: "Dışarıda kar yağıyor." },
        { word: "heiß", meaning: "Sıcak", pronunciation: "hays", example: "Es ist sehr heiß heute.", exampleTranslation: "Bugün hava çok sıcak." },
        { word: "kalt", meaning: "Soğuk", pronunciation: "kalt", example: "Zieh dich warm an, es ist kalt.", exampleTranslation: "Sıkı giyin, hava soğuk." },
        { word: "warm", meaning: "Ilık / Sıcak", pronunciation: "varm", example: "Ein warmer Frühlingsmorgen.", exampleTranslation: "Ilık bir bahar sabahı." },
        { word: "kühl", meaning: "Serin", pronunciation: "kül", example: "Es wird am Abend kühl.", exampleTranslation: "Akşamleyin serinliyor." },
        { word: "das Wetter", meaning: "Hava durumu", pronunciation: "das ve-tır", example: "Wie ist das Wetter heute?", exampleTranslation: "Bugün hava nasıl?" },
        { word: "die Temperatur", meaning: "Sıcaklık", pronunciation: "di tem-pe-ra-tur", example: "Die Temperatur steigt.", exampleTranslation: "Sıcaklık yükseliyor." },
        { word: "der Donner", meaning: "Gök gürültüsü", pronunciation: "der do-nır", example: "Ich höre Donner.", exampleTranslation: "Gök gürültüsü duyuyorum." },
        { word: "der Blitz", meaning: "Şimşek", pronunciation: "der blits", example: "Es gibt Blitze am Himmel.", exampleTranslation: "Gökyüzünde şimşekler var." },
        { word: "der Nebel", meaning: "Sis", pronunciation: "der ne-bıl", example: "Es ist neblig heute.", exampleTranslation: "Bugün hava sisli." },
        { word: "regnen", meaning: "Yağmur yağması", pronunciation: "reg-nın", example: "Es regnet den ganzen Tag.", exampleTranslation: "Bütün gün yağmur yağıyor." }
    ]
};

// ===== UNIT 520: HOBİLER =====
const unit520Vocab: GermanUnitVocabulary = {
    unitId: 520, title: "Hobiler",
    words: [
        { word: "das Hobby", meaning: "Hobi", pronunciation: "das ho-bi", example: "Hobby und Beruf verbinden.", exampleTranslation: "Hobi ve işi birleştirmek." },
        { word: "der Sport", meaning: "Spor", pronunciation: "der şport", example: "Ich mache gerne Sport.", exampleTranslation: "Spor yapmayı severim." },
        { word: "die Musik", meaning: "Müzik", pronunciation: "di mu-zik", example: "Ich höre oft Musik.", exampleTranslation: "Sık sık müzik dinlerim." },
        { word: "das Lesen", meaning: "Okuma", pronunciation: "das le-zın", example: "Lesen ist mein liebstes Hobby.", exampleTranslation: "Okumak en sevdiğim hobim." },
        { word: "das Tanzen", meaning: "Dans etmek", pronunciation: "das tan-tsın", example: "Tanzen macht Spaß.", exampleTranslation: "Dans etmek eğlencelidir." },
        { word: "das Schwimmen", meaning: "Yüzmek", pronunciation: "das şvi-mın", example: "Ich gehe jede Woche schwimmen.", exampleTranslation: "Her hafta yüzmeye giderim." },
        { word: "das Kochen", meaning: "Yemek pişirmek", pronunciation: "das ko-hın", example: "Kochen ist entspannend.", exampleTranslation: "Yemek pişirmek dinlendiricidir." },
        { word: "das Reisen", meaning: "Seyahat etmek", pronunciation: "das ray-zın", example: "Reisen ist teuer.", exampleTranslation: "Seyahat etmek pahalıdır." },
        { word: "die Fotografie", meaning: "Fotoğrafçılık", pronunciation: "di fo-to-gra-fi", example: "Interesse an Fotografie.", exampleTranslation: "Fotoğrafçılığa ilgi." },
        { word: "das Malen", meaning: "Resim yapmak", pronunciation: "das ma-lın", example: "Malen ist kreativ.", exampleTranslation: "Resim yapmak yaratıcıdır." },
        { word: "singen", meaning: "Şarkı söylemek", pronunciation: "zin-gın", example: "Sie singt sehr schön.", exampleTranslation: "Çok güzel şarkı söylüyor." },
        { word: "spielen", meaning: "Oynamak / Çalmak (enstrüman)", pronunciation: "şpi-lın", example: "Ich spiele Gitarre.", exampleTranslation: "Gitar çalıyorum." },
        { word: "wandern", meaning: "Doğa yürüyüşü yapmak", pronunciation: "van-dırn", example: "Am Wochenende wandern wir.", exampleTranslation: "Hafta sonu doğa yürüyüşüne çıkarız." },
        { word: "joggen", meaning: "Koşmak / Jogging", pronunciation: "co-gın", example: "Ich gehe morgens joggen.", exampleTranslation: "Sabahları koşuya çıkarım." },
        { word: "Fußball spielen", meaning: "Futbol oynamak", pronunciation: "fus-bal şpi-lın", example: "Er spielt jeden Tag Fußball.", exampleTranslation: "Her gün futbol oynuyor." },
        { word: "Klavier spielen", meaning: "Piyano çalmak", pronunciation: "kla-vir şpi-lın", example: "Meine Tochter lernt Klavier spielen.", exampleTranslation: "Kızım piyano çalmayı öğreniyor." },
        { word: "Kino gehen", meaning: "Sinemaya gitmek", pronunciation: "ki-no ge-ın", example: "Wollen wir heute ins Kino gehen?", exampleTranslation: "Bugün sinemaya gitmek ister miyiz?" },
        { word: "Freunde treffen", meaning: "Arkadaşlarla buluşmak", pronunciation: "froynd-ı tref-ın", example: "Ich treffe meine Freunde.", exampleTranslation: "Arkadaşlarımla buluşuyorum." },
        { word: "Sprachen lernen", meaning: "Dil öğrenmek", pronunciation: "şpra-hın ler-nın", example: "Sprachen lernen ist wichtig.", exampleTranslation: "Dil öğrenmek önemlidir." },
        { word: "das Computerspiel", meaning: "Bilgisayar oyunu", pronunciation: "das kom-pyu-tır-şpil", example: "Er spielt gerne Computerspiele.", exampleTranslation: "Bilgisayar oyunları oynamayı sever." }
    ]
};

// ===== UNIT 521: DUYGULAR =====
const unit521Vocab: GermanUnitVocabulary = {
    unitId: 521, title: "Duygular",
    words: [
        { word: "glücklich", meaning: "Mutlu", pronunciation: "glük-lıh", example: "Ich bin so glücklich!", exampleTranslation: "Çok mutluyum!" },
        { word: "traurig", meaning: "Üzgün", pronunciation: "trau-rıh", example: "Warum bist du traurig?", exampleTranslation: "Neden üzgünsün?" },
        { word: "wütend", meaning: "Kızgın", pronunciation: "vü-tınt", example: "Er ist wütend auf mich.", exampleTranslation: "Bana kızgın." },
        { word: "müde", meaning: "Yorgun", pronunciation: "mü-dı", example: "Ich bin sehr müde.", exampleTranslation: "Çok yorgunum." },
        { word: "hungrig", meaning: "Aç", pronunciation: "hung-rıh", example: "Bist du hungrig?", exampleTranslation: "Aç mısın?" },
        { word: "durstig", meaning: "Susamış", pronunciation: "durs-tıh", example: "Ich bin durstig, ich brauche Wasser.", exampleTranslation: "Susadım, suya ihtiyacım var." },
        { word: "angst haben", meaning: "Korkmak", pronunciation: "angst ha-bın", example: "Ich habe Angst vor Spinnen.", exampleTranslation: "Örümceklerden korkarım." },
        { word: "aufgeregt", meaning: "Heyecanlı", pronunciation: "auf-gı-reykt", example: "Ich bin aufgeregt wegen der Reise.", exampleTranslation: "Yolculuk yüzünden heyecanlıyım." },
        { word: "gelangweilt", meaning: "Sıkılmış", pronunciation: "gı-lang-vaylt", example: "Mir ist gelangweilt.", exampleTranslation: "Sıkıldım." },
        { word: "überrascht", meaning: "Şaşırmış", pronunciation: "ü-bır-raşt", example: "Ich bin positiv überrascht.", exampleTranslation: "Olumlu yönde şaşırdım." },
        { word: "nervös", meaning: "Gergin", pronunciation: "ner-vös", example: "Vor der Prüfung bin ich nervös.", exampleTranslation: "Sınavdan önce gerginim." },
        { word: "ruhig", meaning: "Sakin", pronunciation: "ru-ıh", example: "Bleib ganz ruhig.", exampleTranslation: "Tamamen sakin kal." },
        { word: "stolz", meaning: "Gururlu", pronunciation: "ştolts", example: "Ich bin stolz auf dich.", exampleTranslation: "Seninle gurur duyuyorum." },
        { word: "verliebt", meaning: "Aşık", pronunciation: "fer-lipt", example: "Er ist in sie verliebt.", exampleTranslation: "Ona aşık." },
        { word: "zufrieden", meaning: "Memnun / Hoşnut", pronunciation: "tsu-fri-dın", example: "Ich bin mit dem Ergebnis zufrieden.", exampleTranslation: "Sonuçtan memnunum." },
        { word: "einsam", meaning: "Yalnız", pronunciation: "ayn-zam", example: "Er fühlt sich einsam.", exampleTranslation: "Kendini yalnız hissediyor." },
        { word: "neugierig", meaning: "Meraklı", pronunciation: "noy-gi-rıh", example: "Kinder sind oft neugierig.", exampleTranslation: "Çocuklar genellikle meraklıdır." },
        { word: "das Gefühl", meaning: "Duygu / His", pronunciation: "das gı-fül", example: "Ein schönes Gefühl.", exampleTranslation: "Güzel bir his." },
        { word: "fühlen", meaning: "Hissetmek", pronunciation: "fü-lın", example: "Wie fühlst du dich?", exampleTranslation: "Nasıl hissediyorsun?" },
        { word: "lachen", meaning: "Gülmek", pronunciation: "la-hın", example: "Wir lachen viel.", exampleTranslation: "Çok gülüyoruz." }
    ]
};

// ===== UNIT 522: OKUL VE SINIF =====
const unit522Vocab: GermanUnitVocabulary = {
    unitId: 522, title: "Okul ve Sınıf",
    words: [
        { word: "das Buch", meaning: "Kitap", pronunciation: "das buh", example: "Lies das Buch.", exampleTranslation: "Kitabı oku." },
        { word: "der Kuli", meaning: "Tükenmez kalem", pronunciation: "der ku-li", example: "Hast du einen Kuli?", exampleTranslation: "Tükenmez kalemin var mı?" },
        { word: "der Bleistift", meaning: "Kurşun kalem", pronunciation: "der blay-ştift", example: "Ich schreibe mit dem Bleistift.", exampleTranslation: "Kurşun kalemle yazıyorum." },
        { word: "das Heft", meaning: "Defter", pronunciation: "das heft", example: "Schreibe in dein Heft.", exampleTranslation: "Defterine yaz." },
        { word: "das Klassenzimmer", meaning: "Sınıf", pronunciation: "das kla-sın-tsi-mır", example: "Wir gehen ins Klassenzimmer.", exampleTranslation: "Sınıfa gidiyoruz." },
        { word: "die Tafel", meaning: "Tahta", pronunciation: "di ta-fıl", example: "Schau an die Tafel.", exampleTranslation: "Tahtaya bak." },
        { word: "die Hausaufgabe", meaning: "Ev ödevi", pronunciation: "di haus-auf-ga-bı", example: "Mach deine Hausaufgaben.", exampleTranslation: "Ödevlerini yap." },
        { word: "die Prüfung", meaning: "Sınav", pronunciation: "di prü-fung", example: "Die Prüfung war schwer.", exampleTranslation: "Sınav zordu." },
        { word: "der Unterricht", meaning: "Ders", pronunciation: "der un-tır-riht", example: "Der Unterricht beginnt jetzt.", exampleTranslation: "Ders şimdi başlıyor." },
        { word: "lernen", meaning: "Öğrenmek", pronunciation: "ler-nın", example: "Ich lerne viel.", exampleTranslation: "Çok öğreniyorum." },
        { word: "lehren", meaning: "Öğretmek", pronunciation: "le-rın", example: "Sie lehrt an der Universität.", exampleTranslation: "Üniversitede öğretiyor." },
        { word: "die Frage", meaning: "Soru", pronunciation: "di fra-gı", example: "Ich habe eine Frage.", exampleTranslation: "Bir sorum var." },
        { word: "die Antwort", meaning: "Cevap", pronunciation: "di ant-vort", example: "Gib mir eine Antwort.", exampleTranslation: "Bana bir cevap ver." },
        { word: "das Papier", meaning: "Kağıt", pronunciation: "das pa-pir", example: "Ein Blatt Papier.", exampleTranslation: "Bir kağıt yaprağı." },
        { word: "der Radiergummi", meaning: "Silgi", pronunciation: "der ra-dir-gu-mi", example: "Wo ist mein Radiergummi?", exampleTranslation: "Silgim nerede?" },
        { word: "die Schultasche", meaning: "Okul çantası", pronunciation: "di şul-ta-şı", example: "Meine Schultasche ist schwer.", exampleTranslation: "Okul çantam ağır." },
        { word: "der Lehrer", meaning: "Öğretmen", pronunciation: "der le-rır", example: "Der Lehrer ist nett.", exampleTranslation: "Öğretmen nazik." },
        { word: "der Schüler", meaning: "Öğrenci", pronunciation: "der şü-lır", example: "Die Schüler sind ruhig.", exampleTranslation: "Öğrenciler sessiz." },
        { word: "die Pause", meaning: "Teneffüs", pronunciation: "di pau-zı", example: "In der Pause spielen wir Fußball.", exampleTranslation: "Teneffüste futbol oynuyoruz." },
        { word: "verstehen", meaning: "Anlamak", pronunciation: "fer-şte-ın", example: "Ich verstehe das nicht.", exampleTranslation: "Bunu anlamıyorum." }
    ]
};

// ===== UNIT 523: TATİLLER VE KUTLAMALAR =====
const unit523Vocab: GermanUnitVocabulary = {
    unitId: 523, title: "Tatiller ve Kutlamalar",
    words: [
        { word: "der Geburtstag", meaning: "Doğum günü", pronunciation: "der gı-burts-tag", example: "Alles Gute zum Geburtstag!", exampleTranslation: "Doğum günün kutlu olsun!" },
        { word: "Weihnachten", meaning: "Noel", pronunciation: "vay-nah-tın", example: "Frohe Weihnachten!", exampleTranslation: "Mutlu Noeller!" },
        { word: "das Neujahr", meaning: "Yeni yıl", pronunciation: "das noy-yar", example: "Ein gutes neues Jahr!", exampleTranslation: "İyi bir yeni yıl dilerim!" },
        { word: "der Urlaub", meaning: "Tatil", pronunciation: "der ur-laup", example: "Schönen Urlaub!", exampleTranslation: "İyi tatiller!" },
        { word: "die Party", meaning: "Parti", pronunciation: "di par-ti", example: "Kommst du zu meiner Party?", exampleTranslation: "Partime geliyor musun?" },
        { word: "das Geschenk", meaning: "Hediye", pronunciation: "das gı-şenk", example: "Ein schönes Geschenk für dich.", exampleTranslation: "Senin için güzel bir hediye." },
        { word: "feiern", meaning: "Kutlamak", pronunciation: "fay-ırn", example: "Wir feiern heute Abend.", exampleTranslation: "Bu akşam kutluyoruz." },
        { word: "der Kuchen", meaning: "Pasta / Kek", pronunciation: "der ku-hın", example: "Geburtstagskuchen backen.", exampleTranslation: "Doğum günü pastası pişirmek." },
        { word: "die Kerze", meaning: "Mum", pronunciation: "di ker-tsı", example: "Puste die Kerzen aus.", exampleTranslation: "Mumları üfle." },
        { word: "die Einladung", meaning: "Davet", pronunciation: "di ayn-la-dung", example: "Danke für die Einladung.", exampleTranslation: "Davet için teşekkürler." },
        { word: "der Gast", meaning: "Misafir", pronunciation: "der gast", example: "Wir haben heute Gäste.", exampleTranslation: "Bugün misafirlerimiz var." },
        { word: "wünschen", meaning: "Dilemek", pronunciation: "vün-şın", example: "Ich wünsche dir viel Glück.", exampleTranslation: "Sana bol şans dilerim." },
        { word: "das Fest", meaning: "Festival / Şenlik", pronunciation: "das fest", example: "Ein großes Fest im Dorf.", exampleTranslation: "Köyde büyük bir şenlik." },
        { word: "die Ferien", meaning: "Okul tatili", pronunciation: "di fe-riyın", example: "Wann beginnen die Ferien?", exampleTranslation: "Tatil ne zaman başlıyor?" },
        { word: "gratulieren", meaning: "Tebrik etmek", pronunciation: "gra-tu-li-rın", example: "Ich gratuliere dir herzlich.", exampleTranslation: "Seni içtenlikle tebrik ederim." },
        { word: "Ostern", meaning: "Paskalya", pronunciation: "os-tırn", example: "Frohe Ostern!", exampleTranslation: "Mutlu Paskalyalar!" },
        { word: "tanzen", meaning: "Dans etmek", pronunciation: "tan-tsın", example: "Wir tanzen auf der Hochzeit.", exampleTranslation: "Düğünde dans ediyoruz." },
        { word: "singen", meaning: "Şarkı söylemek", pronunciation: "zin-gın", example: "Ein Lied singen.", exampleTranslation: "Bir şarkı söylemek." },
        { word: "besuchen", meaning: "Ziyaret etmek", pronunciation: "be-zu-hın", example: "Ich besuche meine Oma.", exampleTranslation: "Büyükannemi ziyaret ediyorum." },
        { word: "zusammen", meaning: "Birlikte", pronunciation: "tsu-za-mın", example: "Wir feiern zusammen.", exampleTranslation: "Birlikte kutluyoruz." }
    ]
};

// ===== UNIT 524: ÜLKELER VE MİLLİYETLER =====
const unit524Vocab: GermanUnitVocabulary = {
    unitId: 524, title: "Ülkeler ve Milliyetler",
    words: [
        { word: "das Land", meaning: "Ülke", pronunciation: "das lant", example: "Welches Land mächtest du besuchen?", exampleTranslation: "Hangi ülkeyi ziyaret etmek istersin?" },
        { word: "Deutschland", meaning: "Almanya", pronunciation: "doytş-lant", example: "Ich wohne in Deutschland.", exampleTranslation: "Almanya'da yaşıyorum." },
        { word: "die Türkei", meaning: "Türkiye", pronunciation: "di tür-kay", example: "Die Türkei ist wunderschön.", exampleTranslation: "Türkiye çok güzel." },
        { word: "Österreich", meaning: "Avusturya", pronunciation: "ös-tır-rayh", example: "Wien ist die Hauptstadt von Österreich.", exampleTranslation: "Viyana, Avusturya'nın başkentidir." },
        { word: "die Schweiz", meaning: "İsviçre", pronunciation: "di şvayts", example: "Die Schweiz hat hohe Berge.", exampleTranslation: "İsviçre'nin yüksek dağları var." },
        { word: "Europa", meaning: "Avrupa", pronunciation: "oy-ro-pa", example: "Europa ist ein Kontinent.", exampleTranslation: "Avrupa bir kıtadır." },
        { word: "deutsch", meaning: "Alman / Almanca", pronunciation: "doytş", example: "Ich lerne Deutsch.", exampleTranslation: "Almanca öğreniyorum." },
        { word: "türkisch", meaning: "Türk / Türkçe", pronunciation: "tür-kiş", example: "Türkisches Essen ist lecker.", exampleTranslation: "Türk yemeği lezzetlidir." },
        { word: "die Sprache", meaning: "Dil", pronunciation: "di şpra-hı", example: "Wie viele Sprachen sprichst du?", exampleTranslation: "Kaç dil konuşuyorsun?" },
        { word: "die Stadt", meaning: "Şehir", pronunciation: "di ştat", example: "Istanbul ist eine große Stadt.", exampleTranslation: "İstanbul büyük bir şehir." },
        { word: "die Hauptstadt", meaning: "Başkent", pronunciation: "di haupt-ştat", example: "Berlin ist die Hauptstadt.", exampleTranslation: "Berlin başkent." },
        { word: "die Flagge", meaning: "Bayrak", pronunciation: "di fla-gı", example: "Die deutsche Flagge.", exampleTranslation: "Alman bayrağı." },
        { word: "die Welt", meaning: "Dünya", pronunciation: "di velt", example: "Die ganze Welt bereisen.", exampleTranslation: "Bütün dünyayı gezmek." },
        { word: "aus", meaning: "-den/-dan", pronunciation: "aus", example: "Ich komme aus der Türkei.", exampleTranslation: "Türkiye'den geliyorum." },
        { word: "fremd", meaning: "Yabancı", pronunciation: "fremt", example: "Eine fremde Sprache.", exampleTranslation: "Yabancı bir dil." },
        { word: "England", meaning: "İngiltere", pronunciation: "eng-lant", example: "Er kommt aus England.", exampleTranslation: "İngiltere'den geliyor." },
        { word: "Frankreich", meaning: "Fransa", pronunciation: "frank-rayh", example: "Paris ist in Frankreich.", exampleTranslation: "Paris Fransa'dadır." },
        { word: "Italien", meaning: "İtalya", pronunciation: "i-ta-liyın", example: "Italien ist berühmt für Pasta.", exampleTranslation: "İtalya makarnasıyla meşhurdur." },
        { word: "Spanien", meaning: "İspanya", pronunciation: "şpa-niyın", example: "Im Sommer fahren wir nach Spanien.", exampleTranslation: "Yazın İspanya'ya gidiyoruz." },
        { word: "reisen", meaning: "Seyahat etmek", pronunciation: "ray-zın", example: "Ich reise gerne.", exampleTranslation: "Seyahat etmeyi severim." }
    ]
};

// ===== UNIT 525: TEMEL FİİLLER =====
const unit525Vocab: GermanUnitVocabulary = {
    unitId: 525, title: "Temel Fiiller",
    words: [
        { word: "gehen", meaning: "Gitmek", pronunciation: "ge-ın", example: "Ich gehe nach Hause.", exampleTranslation: "Eve gidiyorum." },
        { word: "kommen", meaning: "Gelmek", pronunciation: "ko-mın", example: "Wann kommst du?", exampleTranslation: "Ne zaman geliyorsun?" },
        { word: "machen", meaning: "Yapmak", pronunciation: "ma-hın", example: "Was machst du heute?", exampleTranslation: "Bugün ne yapıyorsun?" },
        { word: "nehmen", meaning: "Almak", pronunciation: "ne-mın", example: "Ich nehme den Bus.", exampleTranslation: "Otobüse biniyorum (alıyorum)." },
        { word: "geben", meaning: "Vermek", pronunciation: "ge-bın", example: "Gib mir bitte das Salz.", exampleTranslation: "Lütfen bana tuzu ver." },
        { word: "sagen", meaning: "Söylemek", pronunciation: "za-gın", example: "Sag mir die Wahrheit.", exampleTranslation: "Bana gerçeği söyle." },
        { word: "wissen", meaning: "Bilmek", pronunciation: "vi-sın", example: "Ich weiß es nicht.", exampleTranslation: "Bunu bilmiyorum." },
        { word: "denken", meaning: "Düşünmek", pronunciation: "den-kın", example: "Ich denke an dich.", exampleTranslation: "Seni düşünüyorum." },
        { word: "sehen", meaning: "Görmek", pronunciation: "ze-ın", example: "Ich sehe den Vogel.", exampleTranslation: "Kuşu görüyorum." },
        { word: "wollen", meaning: "İstemek", pronunciation: "vo-lın", example: "Ich will ein Eis.", exampleTranslation: "Bir dondurma istiyorum." },
        { word: "mögen", meaning: "Sevmek / Hoşlanmak", pronunciation: "mö-gın", example: "Ich mag Pizza.", exampleTranslation: "Pizza severim." },
        { word: "brauchen", meaning: "İhtiyaç duymak", pronunciation: "brau-hın", example: "Ich brauche Hilfe.", exampleTranslation: "Yardıma ihtiyacım var." },
        { word: "haben", meaning: "Sahip olmak", pronunciation: "ha-bın", example: "Ich habe ein Auto.", exampleTranslation: "Bir arabam var." },
        { word: "sein", meaning: "Olmak", pronunciation: "zayn", example: "Ich bin glücklich.", exampleTranslation: "Mutluyum." },
        { word: "helfen", pronunciation: "hel-fın", meaning: "Yardım etmek", example: "Kannst du mir helfen?", exampleTranslation: "Bana yardım edebilir misin?" },
        { word: "hören", pronunciation: "hö-rın", meaning: "Duymak / Dinlemek", example: "Ich höre Musik.", exampleTranslation: "Müzik dinliyorum." },
        { word: "schreiben", pronunciation: "şray-bın", meaning: "Yazmak", example: "Ich schreibe einen Brief.", exampleTranslation: "Bir mektup yazıyorum." },
        { word: "sprechen", pronunciation: "şpre-hın", meaning: "Konuşmak", example: "Sprechen Sie Deutsch?", exampleTranslation: "Almanca konuşuyor musunuz?" },
        { word: "finden", pronunciation: "fin-dın", meaning: "Bulmak", example: "Ich finde meinen Schlüssel nicht.", exampleTranslation: "Anahtarımı bulamıyorum." },
        { word: "kaufen", pronunciation: "kau-fın", meaning: "Satın almak", example: "Ich kaufe Brötchen.", exampleTranslation: "Ekmek alıyorum." }
    ]
};

// ===== UNIT 526: ARTİKELLER (DER, DİE, DAS) =====
const unit526Vocab: GermanUnitVocabulary = {
    unitId: 526, title: "Artikeller (der, die, das)",
    words: [
        { word: "der", meaning: "Eril tanımlık", pronunciation: "der", example: "Der Mann ist groß.", exampleTranslation: "Adam uzun boylu." },
        { word: "die", meaning: "Dişil tanımlık", pronunciation: "di", example: "Die Frau ist nett.", exampleTranslation: "Kadın nazik." },
        { word: "das", meaning: "Nötr tanımlık", pronunciation: "das", example: "Das Kind spielt.", exampleTranslation: "Çocuk oynuyor." },
        { word: "ein", meaning: "Belirsiz tanımlık (eril/nötr)", pronunciation: "ayn", example: "Ein Auto fährt.", exampleTranslation: "Bir araba gidiyor." },
        { word: "eine", meaning: "Belirsiz tanımlık (dişil)", pronunciation: "ay-nı", example: "Eine Katze schläft.", exampleTranslation: "Bir kedi uyuyor." },
        { word: "kein", meaning: "Olumsuz tanımlık (eril/nötr)", pronunciation: "kayn", example: "Ich habe kein Geld.", exampleTranslation: "Param yok." },
        { word: "keine", meaning: "Olumsuz tanımlık (dişil/çoğul)", pronunciation: "kay-nı", example: "Ich esse keine Äpfel.", exampleTranslation: "Elma yemem." },
        { word: "mein", meaning: "Benim (eril/nötr)", pronunciation: "mayn", example: "Mein Vater ist hier.", exampleTranslation: "Babam burada." },
        { word: "meine", meaning: "Benim (dişil/çoğul)", pronunciation: "may-nı", example: "Meine Mutter kocht.", exampleTranslation: "Annem yemek pişiriyor." },
        { word: "dein", meaning: "Senin", pronunciation: "dayn", example: "Ist das dein Buch?", exampleTranslation: "Bu senin kitabın mı?" },
        { word: "unser", meaning: "Bizim", pronunciation: "un-zır", example: "Unser Haus ist blau.", exampleTranslation: "Evimiz mavi." },
        { word: "euer", meaning: "Sizin", pronunciation: "oy-ır", example: "Euer Auto ist neu.", exampleTranslation: "Sizin arabanız yeni." },
        { word: "ihr", meaning: "Onun (dişil) / Onların", pronunciation: "ir", example: "Ihr Garten ist schön.", exampleTranslation: "Bahçeleri güzel." },
        { word: "sein", meaning: "Onun (eril/nötr)", pronunciation: "zayn", example: "Sein Hund ist klein.", exampleTranslation: "Onun köpeği küçük." },
        { word: "dieser", meaning: "Bu (eril)", pronunciation: "di-zır", example: "Dieser Mann ist mein Lehrer.", exampleTranslation: "Bu adam benim öğretmenim." },
        { word: "diese", meaning: "Bu (dişil)", pronunciation: "di-zı", example: "Diese Blume ist rot.", exampleTranslation: "Bu çiçek kırmızı." },
        { word: "dieses", meaning: "Bu (nötr)", pronunciation: "di-zıs", example: "Dieses Buch ist alt.", exampleTranslation: "Bu kitap eski." },
        { word: "welcher", meaning: "Hangi", pronunciation: "vel-hır", example: "Welcher Tag ist heute?", exampleTranslation: "Bugün hangi gün?" },
        { word: "alle", meaning: "Hepsi / Herkes", pronunciation: "a-lı", example: "Alle Kinder spielen.", exampleTranslation: "Bütün çocuklar oynuyor." },
        { word: "viele", meaning: "Çok / Birçok", pronunciation: "fi-lı", example: "Ich habe viele Freunde.", exampleTranslation: "Birçok arkadaşım var." }
    ]
};

// ===== UNIT 527: AKKUSATİV (BELİRTME HALİ) =====
const unit527Vocab: GermanUnitVocabulary = {
    unitId: 527, title: "Akkusativ (Belirtme Hali)",
    words: [
        { word: "den", meaning: "Eril tanımlığın Akkusativ hali", pronunciation: "den", example: "Ich sehe den Hund.", exampleTranslation: "Köpeği görüyorum." },
        { word: "die", meaning: "Dişil/Çoğul tanımlığın Akkusativ hali", pronunciation: "di", example: "Ich liebe die Musik.", exampleTranslation: "Müziği seviyorum." },
        { word: "das", meaning: "Nötr tanımlığın Akkusativ hali", pronunciation: "das", example: "Ich lese das Buch.", exampleTranslation: "Kitabı okuyorum." },
        { word: "einen", meaning: "Belirsiz eril tanımlığın Akkusativ hali", pronunciation: "ay-nın", example: "Ich habe einen Bruder.", exampleTranslation: "Bir erkek kardeşim var." },
        { word: "keinen", meaning: "Olumsuz eril tanımlığın Akkusativ hali", pronunciation: "kay-nın", example: "Ich habe keinen Durst.", exampleTranslation: "Susuzluğum yok." },
        { word: "mich", meaning: "Beni", pronunciation: "mih", example: "Er hört mich nicht.", exampleTranslation: "Beni duymuyor." },
        { word: "dich", meaning: "Seni", pronunciation: "dih", example: "Ich liebe dich.", exampleTranslation: "Seni seviyorum." },
        { word: "ihn", meaning: "Onu (eril)", pronunciation: "in", example: "Ich kenne ihn.", exampleTranslation: "Onu tanıyorum." },
        { word: "sie", meaning: "Onu (dişil) / Onları / Sizi", pronunciation: "zi", example: "Ich sehe sie im Park.", exampleTranslation: "Onu parkta görüyorum." },
        { word: "es", meaning: "Onu (nötr)", pronunciation: "es", example: "Ich weiß es.", exampleTranslation: "Onu (bunu) biliyorum." },
        { word: "uns", meaning: "Bizi", pronunciation: "uns", example: "Besuchen Sie uns bald.", exampleTranslation: "Bizi yakında ziyaret edin." },
        { word: "euch", meaning: "Sizi", pronunciation: "oyh", example: "Ich lade euch ein.", exampleTranslation: "Sizi davet ediyorum." },
        { word: "durch", meaning: "Aracılığıyla / İçinden", pronunciation: "durh", example: "Wir gehen durch den Wald.", exampleTranslation: "Ormanın içinden geçiyoruz." },
        { word: "für", meaning: "İçin", pronunciation: "für", example: "Das ist für dich.", exampleTranslation: "Bu senin için." },
        { word: "gegen", meaning: "Karşı", pronunciation: "ge-gın", example: "Ich bin gegen diesen Plan.", exampleTranslation: "Bu plana karşıyım." },
        { word: "ohne", meaning: "Olmadan / -sız", pronunciation: "o-nı", example: "Kaffee ohne Zucker.", exampleTranslation: "Şekersiz kahve." },
        { word: "um", meaning: "Etrafında / Saatlerde (-de)", pronunciation: "um", example: "Um acht Uhr.", exampleTranslation: "Saat sekizde." },
        { word: "bis", meaning: "Kadar", pronunciation: "bis", example: "Bis morgen!", exampleTranslation: "Yarına kadar!" },
        { word: "entlang", meaning: "Boyunca", pronunciation: "ent-lang", example: "Gehen Sie den Fluss entlang.", exampleTranslation: "Nehir boyunca gidin." },
        { word: "besuchen", meaning: "Ziyaret etmek", pronunciation: "be-zu-hın", example: "Ich besuche den Freund.", exampleTranslation: "Arkadaşı ziyaret ediyorum." }
    ]
};

// ===== UNIT 528: SIFATLAR =====
const unit528Vocab: GermanUnitVocabulary = {
    unitId: 528, title: "Sıfatlar (Adjektive)",
    words: [
        { word: "groß", meaning: "Büyük / Uzun", pronunciation: "gros", example: "Das Haus ist groß.", exampleTranslation: "Ev büyük." },
        { word: "klein", meaning: "Küçük", pronunciation: "klayn", example: "Der Hund ist klein.", exampleTranslation: "Köpek küçük." },
        { word: "schön", meaning: "Güzel", pronunciation: "şön", example: "Ein schöner Tag.", exampleTranslation: "Güzel bir gün." },
        { word: "hässlich", meaning: "Çirkin", pronunciation: "hes-lıh", example: "Das Bild ist hässlich.", exampleTranslation: "Resim çirkin." },
        { word: "gut", meaning: "İyi", pronunciation: "gut", example: "Das ist eine gute Idee.", exampleTranslation: "Bu iyi bir fikir." },
        { word: "schlecht", meaning: "Kötü", pronunciation: "şleht", example: "Schlechtes Wetter.", exampleTranslation: "Kötü hava." },
        { word: "neu", meaning: "Yeni", pronunciation: "noy", example: "Ein neues Auto.", exampleTranslation: "Yeni bir araba." },
        { word: "alt", meaning: "Eski / Yaşlı", pronunciation: "alt", example: "Ein altes Buch.", exampleTranslation: "Eski bir kitap." },
        { word: "schnell", meaning: "Hızlı", pronunciation: "şnel", example: "Der Zug ist schnell.", exampleTranslation: "Tren hızlıdır." },
        { word: "langsam", meaning: "Yavaş", pronunciation: "lang-zam", example: "Schildkröten sind langsam.", exampleTranslation: "Kaplumbağalar yavaştır." },
        { word: "einfach", meaning: "Kolay / Basit", pronunciation: "ayn-fah", example: "Deutsch ist einfach.", exampleTranslation: "Almanca kolaydır." },
        { word: "schwierig", meaning: "Zor", pronunciation: "şvi-rıh", example: "Die Prüfung war schwierig.", exampleTranslation: "Sınav zordu." },
        { word: "teuer", meaning: "Pahalı", pronunciation: "toy-ır", example: "Das Auto ist teuer.", exampleTranslation: "Araba pahalı." },
        { word: "billig", meaning: "Ucuz", pronunciation: "bi-lıh", example: "Obst ist hier billig.", exampleTranslation: "Meyve burada ucuz." },
        { word: "leise", meaning: "Sessiz", pronunciation: "lay-zı", example: "Sei bitte leise.", exampleTranslation: "Lütfen sessiz ol." },
        { word: "laut", meaning: "Gürültülü / Sesli", pronunciation: "laut", example: "Die Musik ist zu laut.", exampleTranslation: "Müzik çok sesli." },
        { word: "jung", meaning: "Genç", pronunciation: "yung", example: "Er ist noch jung.", exampleTranslation: "O daha genç." },
        { word: "alt", meaning: "Yaşlı", pronunciation: "alt", example: "Mein Opa ist alt.", exampleTranslation: "Dedem yaşlı." },
        { word: "schwer", meaning: "Ağır / Zor", pronunciation: "şver", example: "Die Tasche ist schwer.", exampleTranslation: "Çanta ağır." },
        { word: "leicht", meaning: "Hafif / Kolay", pronunciation: "layht", example: "Das ist ganz leicht.", exampleTranslation: "Bu çok kolay." }
    ]
};

// ===== UNIT 529: EDATLAR (PRÄPOSİTİONEN) =====
const unit529Vocab: GermanUnitVocabulary = {
    unitId: 529, title: "Edatlar (Präpositionen)",
    words: [
        { word: "in", meaning: "İçinde", pronunciation: "in", example: "Im Haus.", exampleTranslation: "Evin içinde." },
        { word: "auf", meaning: "Üstünde (temaslı)", pronunciation: "auf", example: "Auf dem Tisch.", exampleTranslation: "Masanın üstünde." },
        { word: "an", meaning: "Kenarında / Yanında", pronunciation: "an", example: "Am Fenster.", exampleTranslation: "Pencerenin yanında." },
        { word: "neben", meaning: "Yanında / Bitişiğinde", pronunciation: "ne-bın", example: "Neben der Tür.", exampleTranslation: "Kapının yanında." },
        { word: "unter", meaning: "Altında", pronunciation: "un-tır", example: "Unter dem Bett.", exampleTranslation: "Yatağın altında." },
        { word: "über", meaning: "Üstünde (temasız) / Hakkında", pronunciation: "ü-bır", example: "Über den Wolken.", exampleTranslation: "Bulutların üzerinde." },
        { word: "vor", meaning: "Önünde / Önce", pronunciation: "for", example: "Vor dem Haus.", exampleTranslation: "Evin önünde." },
        { word: "hinter", meaning: "Arkasında", pronunciation: "hin-tır", example: "Hinter dem Garten.", exampleTranslation: "Bahçenin arkasında." },
        { word: "zwischen", meaning: "Arasında", pronunciation: "tsvi-şın", example: "Zwischen den Stühlen.", exampleTranslation: "Sandalyelerin arasında." },
        { word: "mit", meaning: "İle", pronunciation: "mit", example: "Mit meinem Freund.", exampleTranslation: "Arkadaşımla." },
        { word: "von", meaning: "-den/-dan / Aidiyet (-in)", pronunciation: "fon", example: "Von Berlin nach Paris.", exampleTranslation: "Berlin'den Paris'e." },
        { word: "zu", meaning: "-e/-a (yönelme)", pronunciation: "tsu", example: "Geh zur Schule.", exampleTranslation: "Okula git." },
        { word: "nach", meaning: "-e/-a (şehir/ülke yönelme) / Sonra", pronunciation: "nah", example: "Nach Deutschland fahren.", exampleTranslation: "Almanya'ya gitmek." },
        { word: "bei", meaning: "Yanında / -de (kişi/kurum)", pronunciation: "bay", example: "Bei Müller wohnen.", exampleTranslation: "Müller'in yanında kalmak." },
        { word: "seit", meaning: "-den beri", pronunciation: "zayt", example: "Seit gestern bin ich krank.", exampleTranslation: "Dünden beri hastayım." },
        { word: "aus", meaning: "-den/-dan (içinden/nereli)", pronunciation: "aus", example: "Aus der Tasche nehmen.", exampleTranslation: "Çantadan almak." },
        { word: "ohne", meaning: "Olmadan", pronunciation: "o-nı", example: "Ohne Hilfe arbeiten.", exampleTranslation: "Yardım almadan çalışmak." },
        { word: "für", meaning: "İçin", pronunciation: "für", example: "Das ist für dich.", exampleTranslation: "Bu senin için." },
        { word: "gegen", meaning: "Karşı", pronunciation: "ge-gın", example: "Gegen die Wand.", exampleTranslation: "Duvara karşı." },
        { word: "um", meaning: "Etrafında / Saatlerde", pronunciation: "um", example: "Um den Baum herum.", exampleTranslation: "Ağacın etrafında." }
    ]
};

// ===== UNIT 530: A1 GENEL TEKRAR =====
const unit530Vocab: GermanUnitVocabulary = {
    unitId: 530, title: "A1 Genel Tekrar",
    words: [
        { word: "Hallo", meaning: "Merhaba", pronunciation: "ha-lo", example: "Hallo, wie geht's?", exampleTranslation: "Merhaba, nasıl gidiyor?" },
        { word: "Danke", meaning: "Teşekkürler", pronunciation: "dan-kı", example: "Danke für alles.", exampleTranslation: "Her şey için teşekkürler." },
        { word: "Bitte", meaning: "Lütfen / Rica ederim", pronunciation: "bi-tı", example: "Bitte, nehmen Sie Platz.", exampleTranslation: "Lütfen, buyurun oturun." },
        { word: "Entschuldigung", meaning: "Affedersiniz", pronunciation: "ent-şul-di-gung", example: "Entschuldigung, wie spät ist es?", exampleTranslation: "Affedersiniz, saat kaç?" },
        { word: "der Name", meaning: "İsim", pronunciation: "der na-mı", example: "Mein Name ist Ali.", exampleTranslation: "Benim adım Ali." },
        { word: "wohnen", meaning: "Yaşamak / İkamet etmek", pronunciation: "vo-nın", example: "Ich wohne in Berlin.", exampleTranslation: "Berlin'de yaşıyorum." },
        { word: "kommen", meaning: "Gelmek", pronunciation: "ko-mın", example: "Woher kommst du?", exampleTranslation: "Nerelisin?" },
        { word: "sprechen", meaning: "Konuşmak", pronunciation: "şpre-hın", example: "Ich spreche ein wenig Deutsch.", exampleTranslation: "Biraz Almanca konuşuyorum." },
        { word: "lernen", meaning: "Öğrenmek", pronunciation: "ler-nın", example: "Wir lernen zusammen.", exampleTranslation: "Birlikte öğreniyoruz." },
        { word: "essen", meaning: "Yemek yemek", pronunciation: "e-sın", example: "Guten Appetit!", exampleTranslation: "Afiyet olsun!" },
        { word: "trinken", meaning: "İçmek", pronunciation: "trin-kın", example: "Was möchtest du trinken?", exampleTranslation: "Ne içmek istersin?" },
        { word: "das Haus", meaning: "Ev", pronunciation: "das haus", example: "Das Haus ist neu.", exampleTranslation: "Ev yeni." },
        { word: "die Stadt", meaning: "Şehir", pronunciation: "di ştat", example: "Eine schöne Stadt.", exampleTranslation: "Güzel bir şehir." },
        { word: "der Tag", meaning: "Gün", pronunciation: "der tag", example: "Einen schönen Tag noch!", exampleTranslation: "İyi günler dilerim!" },
        { word: "die Zeit", meaning: "Zaman", pronunciation: "di tsayt", example: "Ich habe keine Zeit.", exampleTranslation: "Zamanım yok." },
        { word: "sehen", meaning: "Görmek", pronunciation: "ze-ın", example: "Wir sehen uns morgen.", exampleTranslation: "Yarın görüşürüz." },
        { word: "gehen", meaning: "Gitmek", pronunciation: "ge-ın", example: "Ich gehe jetzt.", exampleTranslation: "Şimdi gidiyorum." },
        { word: "helfen", meaning: "Yardım etmek", pronunciation: "hel-fın", example: "Kannst du mir helfen?", exampleTranslation: "Bana yardım edebilir misin?" },
        { word: "verstehen", meaning: "Anlamak", pronunciation: "fer-şte-ın", example: "Ich verstehe.", exampleTranslation: "Anlıyorum." },
        { word: "Deutschland", meaning: "Almanya", pronunciation: "doytş-lant", example: "Willkommen in Deutschland!", exampleTranslation: "Almanya'ya hoş geldiniz!" }
    ]
};

const unitMap: { [key: number]: GermanUnitVocabulary } = {
    501: unit501Vocab, 502: unit502Vocab, 503: unit503Vocab, 504: unit504Vocab, 505: unit505Vocab,
    506: unit506Vocab, 507: unit507Vocab, 508: unit508Vocab, 509: unit509Vocab, 510: unit510Vocab,
    511: unit511Vocab, 512: unit512Vocab, 513: unit513Vocab, 514: unit514Vocab, 515: unit515Vocab,
    516: unit516Vocab, 517: unit517Vocab, 518: unit518Vocab, 519: unit519Vocab, 520: unit520Vocab,
    521: unit521Vocab, 522: unit522Vocab, 523: unit523Vocab, 524: unit524Vocab, 525: unit525Vocab,
    526: unit526Vocab, 527: unit527Vocab, 528: unit528Vocab, 529: unit529Vocab, 530: unit530Vocab,
};

export function getGermanA1VocabularyForUnit(unitId: number): GermanUnitVocabulary {
    return unitMap[unitId] || unit501Vocab;
}
