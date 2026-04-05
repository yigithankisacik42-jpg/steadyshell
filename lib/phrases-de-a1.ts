/**
 * SteadyShell Phrases - Almanca A1 (Units 501-530)
 * 15 phrases per unit
 */

export interface GermanPhrase {
    phrase: string;
    meaning: string;
    context: string;
    example: string;
    pronunciation: string;
}

export interface GermanPhraseUnit {
    unitId: number;
    title: string;
    phrases: GermanPhrase[];
}

// Unit 501: Selamlaşma ve Tanışma
export const u501: GermanPhraseUnit = {
    unitId: 501, title: "Selamlaşma ve Tanışma", phrases: [
        { phrase: "Hallo", meaning: "Merhaba", context: "Selamlama", example: "Hallo, wie geht es dir?", pronunciation: "ha-lo" },
        { phrase: "Guten Morgen", meaning: "Günaydın", context: "Selamlama", example: "Guten Morgen, Herr Müller.", pronunciation: "gu-tın mor-gın" },
        { phrase: "Guten Tag", meaning: "İyi günler", context: "Selamlama", example: "Guten Tag, wie kann ich Ihnen helfen?", pronunciation: "gu-tın tag" },
        { phrase: "Guten Abend", meaning: "İyi akşamlar", context: "Selamlama", example: "Guten Abend, willkommen!", pronunciation: "gu-tın a-bınt" },
        { phrase: "Gute Nacht", meaning: "İyi geceler", context: "Veda", example: "Gute Nacht, schlaf gut!", pronunciation: "gu-tı naht" },
        { phrase: "Auf Wiedersehen", meaning: "Hoşça kalın (resmi)", context: "Veda", example: "Auf Wiedersehen, bis morgen!", pronunciation: "auf vi-dır-ze-ın" },
        { phrase: "Tschüss", meaning: "Hoşça kal (samimi)", context: "Veda", example: "Tschüss, bis bald!", pronunciation: "çüs" },
        { phrase: "Wie heißt du?", meaning: "Adın ne?", context: "Tanışma", example: "Hallo! Wie heißt du?", pronunciation: "vi hayst du" },
        { phrase: "Ich heiße...", meaning: "Benim adım...", context: "Tanışma", example: "Ich heiße Anna.", pronunciation: "ıh hay-sı" },
        { phrase: "Freut mich", meaning: "Memnun oldum", context: "Tanışma", example: "Freut mich, dich kennenzulernen.", pronunciation: "froyt mıh" },
        { phrase: "Wie geht es Ihnen?", meaning: "Nasılsınız? (resmi)", context: "Hal hatır", example: "Guten Tag, wie geht es Ihnen?", pronunciation: "vi geyt es i-nın" },
        { phrase: "Mir geht es gut", meaning: "İyiyim", context: "Hal hatır", example: "Danke, mir geht es gut.", pronunciation: "mir geyt es gut" },
        { phrase: "Danke", meaning: "Teşekkürler", context: "Nezaket", example: "Danke schön!", pronunciation: "dan-kı" },
        { phrase: "Bitte", meaning: "Rica ederim / Lütfen", context: "Nezaket", example: "Bitte schön!", pronunciation: "bi-tı" },
        { phrase: "Entschuldigung", meaning: "Özür dilerim / Pardon", context: "Nezaket", example: "Entschuldigung, wo ist der Bahnhof?", pronunciation: "ent-şul-di-gung" }
    ]
};

// Unit 502: Sayılar 1-20
export const u502: GermanPhraseUnit = {
    unitId: 502, title: "Sayılar 1-20", phrases: [
        { phrase: "Eins, zwei, drei", meaning: "Bir, iki, üç", context: "Sayılar", example: "Eins, zwei, drei... los!", pronunciation: "ayns, tsvay, dray" },
        { phrase: "Wie viel kostet das?", meaning: "Bu ne kadar?", context: "Alışveriş", example: "Wie viel kostet das Brot?", pronunciation: "vi fil kos-tet das" },
        { phrase: "Das macht fünf Euro", meaning: "Beş euro eder", context: "Alışveriş", example: "Das macht fünf Euro, bitte.", pronunciation: "das maht fünf oy-ro" },
        { phrase: "Ich bin zwanzig Jahre alt", meaning: "Yirmi yaşındayım", context: "Yaş", example: "Ich bin zwanzig Jahre alt.", pronunciation: "ıh bin tsvan-tsıh ya-rı alt" },
        { phrase: "Wie alt bist du?", meaning: "Kaç yaşındasın?", context: "Yaş", example: "Wie alt bist du?", pronunciation: "vi alt bist du" },
        { phrase: "Meine Telefonnummer ist...", meaning: "Telefon numaram...", context: "İletişim", example: "Meine Telefonnummer ist 0123.", pronunciation: "may-nı te-le-fon-nu-mır ist" },
        { phrase: "Nummer eins", meaning: "Bir numara", context: "Sıralama", example: "Du bist Nummer eins!", pronunciation: "nu-mır ayns" },
        { phrase: "Zum ersten Mal", meaning: "İlk kez", context: "Deneyim", example: "Das ist zum ersten Mal.", pronunciation: "tsum ers-tın mal" },
        { phrase: "Noch einmal", meaning: "Bir kez daha", context: "Tekrar", example: "Noch einmal, bitte!", pronunciation: "noh ayn-mal" },
        { phrase: "Ein bisschen", meaning: "Biraz", context: "Miktar", example: "Ich spreche ein bisschen Deutsch.", pronunciation: "ayn bis-hın" },
        { phrase: "Zu viel", meaning: "Çok fazla", context: "Miktar", example: "Das ist zu viel!", pronunciation: "tsu fil" },
        { phrase: "Wie viele?", meaning: "Kaç tane?", context: "Soru", example: "Wie viele Geschwister hast du?", pronunciation: "vi fi-lı" },
        { phrase: "Beide", meaning: "İkisi de", context: "Miktar", example: "Beide sind schön.", pronunciation: "bay-dı" },
        { phrase: "Genug", meaning: "Yeterli", context: "Miktar", example: "Das ist genug, danke.", pronunciation: "gı-nug" },
        { phrase: "Gar nicht", meaning: "Hiç değil", context: "Olumsuz", example: "Das ist gar nicht schwer.", pronunciation: "gar nıht" }
    ]
};

// Unit 503: Aile Üyeleri
export const u503: GermanPhraseUnit = {
    unitId: 503, title: "Aile Üyeleri", phrases: [
        { phrase: "Das ist meine Mutter", meaning: "Bu benim annem", context: "Aile", example: "Das ist meine Mutter, sie heißt Maria.", pronunciation: "das ist may-nı mu-tır" },
        { phrase: "Mein Vater arbeitet", meaning: "Babam çalışıyor", context: "Aile", example: "Mein Vater arbeitet als Arzt.", pronunciation: "mayn fa-tır ar-bay-tet" },
        { phrase: "Hast du Geschwister?", meaning: "Kardeşin var mı?", context: "Soru", example: "Hast du Geschwister? Ja, einen Bruder.", pronunciation: "hast du gı-şvis-tır" },
        { phrase: "Meine Familie ist groß", meaning: "Ailem büyük/kalabalık", context: "Aile", example: "Meine Familie ist groß, wir sind acht.", pronunciation: "may-nı fa-mi-li-ı ist gros" },
        { phrase: "Ich wohne bei meinen Eltern", meaning: "Ailemle yaşıyorum", context: "Yaşam", example: "Ich wohne noch bei meinen Eltern.", pronunciation: "ıh vo-nı bay may-nın el-tırn" },
        { phrase: "Mein Bruder ist älter", meaning: "Erkek kardeşim daha büyük", context: "Aile", example: "Mein Bruder ist drei Jahre älter.", pronunciation: "mayn bru-dır ist el-tır" },
        { phrase: "Meine Schwester ist jünger", meaning: "Kız kardeşim daha küçük", context: "Aile", example: "Meine Schwester ist noch jünger.", pronunciation: "may-nı şves-tır ist yün-gır" },
        { phrase: "Meine Großeltern wohnen weit weg", meaning: "Büyüklerim uzakta", context: "Aile", example: "Meine Großeltern wohnen weit weg.", pronunciation: "may-nı gros-el-tırn vo-nın vayt veg" },
        { phrase: "Wir sind eine Familie", meaning: "Biz bir aileyiz", context: "Aile", example: "Wir sind eine glückliche Familie.", pronunciation: "vir zint ay-nı fa-mi-li-ı" },
        { phrase: "Bist du verheiratet?", meaning: "Evli misin?", context: "Durum", example: "Bist du verheiratet? Nein, ich bin ledig.", pronunciation: "bist du fer-hay-ra-tet" },
        { phrase: "Ich bin ledig", meaning: "Bekarım", context: "Durum", example: "Ich bin ledig und wohne allein.", pronunciation: "ıh bin le-dıh" },
        { phrase: "Ich habe zwei Kinder", meaning: "İki çocuğum var", context: "Aile", example: "Ich habe zwei Kinder, einen Sohn und eine Tochter.", pronunciation: "ıh ha-bı tsvay kin-dır" },
        { phrase: "Mein Mann/Meine Frau", meaning: "Kocam/Karım", context: "Aile", example: "Mein Mann kocht heute.", pronunciation: "mayn man / may-nı frau" },
        { phrase: "Wir verstehen uns gut", meaning: "İyi anlaşıyoruz", context: "İlişki", example: "Wir verstehen uns sehr gut.", pronunciation: "vir fer-şte-ın uns gut" },
        { phrase: "Wie ein Bruder für mich", meaning: "Benim için bir kardeş gibi", context: "Deyim", example: "Er ist wie ein Bruder für mich.", pronunciation: "vi ayn bru-dır für mıh" }
    ]
};

// Unit 504: Renkler
export const u504: GermanPhraseUnit = {
    unitId: 504, title: "Renkler", phrases: [
        { phrase: "Welche Farbe ist das?", meaning: "Bu hangi renk?", context: "Soru", example: "Welche Farbe ist das? Rot.", pronunciation: "vel-hı far-bı ist das" },
        { phrase: "Meine Lieblingsfarbe ist blau", meaning: "En sevdiğim renk mavi", context: "Tercih", example: "Meine Lieblingsfarbe ist blau.", pronunciation: "may-nı lib-lings-far-bı ist blau" },
        { phrase: "Es ist rot", meaning: "Kırmızı", context: "Tanımlama", example: "Das Auto ist rot.", pronunciation: "es ist rot" },
        { phrase: "Der Himmel ist blau", meaning: "Gökyüzü mavi", context: "Doğa", example: "Heute ist der Himmel blau.", pronunciation: "der hi-mıl ist blau" },
        { phrase: "Das Gras ist grün", meaning: "Çimen yeşil", context: "Doğa", example: "Im Frühling ist das Gras grün.", pronunciation: "das gras ist grün" },
        { phrase: "Schwarz und weiß", meaning: "Siyah ve beyaz", context: "Renkler", example: "Das Foto ist schwarz und weiß.", pronunciation: "şvarts unt vays" },
        { phrase: "Rot werden", meaning: "Kızarmak (utanmak)", context: "Deyim", example: "Sie wird rot, wenn man sie lobt.", pronunciation: "rot ver-dın" },
        { phrase: "In Grau", meaning: "Gri renkte", context: "Giyim", example: "Ich möchte das T-Shirt in Grau.", pronunciation: "in grau" },
        { phrase: "Bunte Farben", meaning: "Renkli/canlı renkler", context: "Tanım", example: "Ich mag bunte Farben.", pronunciation: "bun-tı far-bın" },
        { phrase: "Helle Farben", meaning: "Açık renkler", context: "Tanım", example: "Im Sommer trage ich helle Farben.", pronunciation: "he-lı far-bın" },
        { phrase: "Dunkle Farben", meaning: "Koyu renkler", context: "Tanım", example: "Er trägt immer dunkle Farben.", pronunciation: "dun-klı far-bın" },
        { phrase: "Gelb wie die Sonne", meaning: "Güneş gibi sarı", context: "Benzetme", example: "Die Blume ist gelb wie die Sonne.", pronunciation: "gelp vi di zo-nı" },
        { phrase: "Orange", meaning: "Turuncu", context: "Renk", example: "Der Sonnenuntergang ist orange.", pronunciation: "o-ran-jı" },
        { phrase: "Lila", meaning: "Mor/Eflatun", context: "Renk", example: "Mein Kleid ist lila.", pronunciation: "li-la" },
        { phrase: "Rosa", meaning: "Pembe", context: "Renk", example: "Die Blumen sind rosa.", pronunciation: "ro-za" }
    ]
};

// Unit 505: Yiyecekler
export const u505: GermanPhraseUnit = {
    unitId: 505, title: "Yiyecekler", phrases: [
        { phrase: "Guten Appetit!", meaning: "Afiyet olsun!", context: "Yemek", example: "Guten Appetit! Das Essen ist fertig.", pronunciation: "gu-tın a-pe-tit" },
        { phrase: "Ich habe Hunger", meaning: "Açım / Karnım aç", context: "Durum", example: "Ich habe großen Hunger.", pronunciation: "ıh ha-bı hun-gır" },
        { phrase: "Das Essen ist lecker", meaning: "Yemek lezzetli", context: "Yemek", example: "Das Essen ist sehr lecker!", pronunciation: "das e-sın ist le-kır" },
        { phrase: "Was möchtest du essen?", meaning: "Ne yemek istersin?", context: "Soru", example: "Was möchtest du zum Abendessen?", pronunciation: "vas möh-test du e-sın" },
        { phrase: "Ein Stück Brot", meaning: "Bir dilim ekmek", context: "Yemek", example: "Kann ich ein Stück Brot haben?", pronunciation: "ayn ştük brot" },
        { phrase: "Ich bin satt", meaning: "Doydum", context: "Durum", example: "Danke, ich bin satt.", pronunciation: "ıh bin zat" },
        { phrase: "Ich bin Vegetarier", meaning: "Vejetaryenim", context: "Diyet", example: "Ich bin Vegetarier. Haben Sie etwas ohne Fleisch?", pronunciation: "ıh bin ve-ge-ta-ri-ır" },
        { phrase: "Ohne Zwiebeln, bitte", meaning: "Soğansız, lütfen", context: "Sipariş", example: "Einen Salat ohne Zwiebeln, bitte.", pronunciation: "o-nı tsvi-bıln bi-tı" },
        { phrase: "Was empfehlen Sie?", meaning: "Ne önerirsiniz?", context: "Restoran", example: "Was empfehlen Sie heute?", pronunciation: "vas emp-fe-lın zi" },
        { phrase: "Ich habe eine Allergie", meaning: "Alerjim var", context: "Sağlık", example: "Ich habe eine Allergie gegen Nüsse.", pronunciation: "ıh ha-bı ay-nı a-ler-gi" },
        { phrase: "Tagesgericht", meaning: "Günün yemeği", context: "Restoran", example: "Was ist das Tagesgericht?", pronunciation: "ta-gıs-gı-rıht" },
        { phrase: "Zum Mitnehmen", meaning: "Paket / Götürmek için", context: "Sipariş", example: "Zum Mitnehmen, bitte.", pronunciation: "tsum mit-ne-mın" },
        { phrase: "Es schmeckt gut", meaning: "Tadı güzel", context: "Yorum", example: "Die Suppe schmeckt sehr gut.", pronunciation: "es şmekt gut" },
        { phrase: "Kann ich die Rechnung haben?", meaning: "Hesabı alabilir miyim?", context: "Restoran", example: "Kann ich bitte die Rechnung haben?", pronunciation: "kan ıh di reh-nung ha-bın" },
        { phrase: "Frisches Obst", meaning: "Taze meyve", context: "Yiyecek", example: "Ich esse gerne frisches Obst.", pronunciation: "fri-şıs opst" }
    ]
};

// Unit 506: İçecekler
export const u506: GermanPhraseUnit = {
    unitId: 506, title: "İçecekler", phrases: [
        { phrase: "Ich habe Durst", meaning: "Susadım", context: "Durum", example: "Ich habe großen Durst.", pronunciation: "ıh ha-bı durst" },
        { phrase: "Einen Kaffee, bitte", meaning: "Bir kahve, lütfen", context: "Sipariş", example: "Einen Kaffee mit Milch, bitte.", pronunciation: "ay-nın ka-fe bi-tı" },
        { phrase: "Ohne Zucker", meaning: "Şekersiz", context: "Sipariş", example: "Einen Tee ohne Zucker, bitte.", pronunciation: "o-nı tsu-kır" },
        { phrase: "Mit Eis", meaning: "Buzlu", context: "Sipariş", example: "Ein Wasser mit Eis, bitte.", pronunciation: "mit ays" },
        { phrase: "Prost!", meaning: "Şerefe!", context: "Kutlama", example: "Prost! Auf deine Gesundheit!", pronunciation: "prost" },
        { phrase: "Ich lade dich ein", meaning: "Ben ısmarlıyorum", context: "İkram", example: "Ich lade dich ein, keine Sorge.", pronunciation: "ıh la-dı dıh ayn" },
        { phrase: "Sollen wir etwas trinken?", meaning: "Bir şeyler içelim mi?", context: "Teklif", example: "Sollen wir etwas trinken gehen?", pronunciation: "zo-lın vir et-vas trin-kın" },
        { phrase: "Leitungswasser", meaning: "Çeşme suyu", context: "İçecek", example: "Kann ich Leitungswasser haben?", pronunciation: "lay-tungs-va-sır" },
        { phrase: "Ein Bier, bitte", meaning: "Bir bira, lütfen", context: "Sipariş", example: "Ein Bier vom Fass, bitte.", pronunciation: "ayn bir bi-tı" },
        { phrase: "Haben Sie Orangensaft?", meaning: "Portakal suyunuz var mı?", context: "Soru", example: "Haben Sie frischen Orangensaft?", pronunciation: "ha-bın zi o-ran-jın-zaft" },
        { phrase: "Einen schwarzen Kaffee", meaning: "Sade kahve", context: "Sipariş", example: "Einen schwarzen Kaffee, bitte.", pronunciation: "ay-nın şvar-tsın ka-fe" },
        { phrase: "Koffeinfreier Kaffee", meaning: "Kafeinsiz kahve", context: "Sipariş", example: "Haben Sie koffeinfreien Kaffee?", pronunciation: "ko-fe-in-fray-ır ka-fe" },
        { phrase: "Noch eine Runde", meaning: "Bir tur daha", context: "Sosyal", example: "Noch eine Runde für alle!", pronunciation: "noh ay-nı run-dı" },
        { phrase: "Einen Tee mit Zitrone", meaning: "Limonlu çay", context: "Sipariş", example: "Einen Tee mit Zitrone, bitte.", pronunciation: "ay-nın te mit tsi-tro-nı" },
        { phrase: "Mineralwasser", meaning: "Maden suyu", context: "İçecek", example: "Ein Mineralwasser, bitte.", pronunciation: "mi-ne-ral-va-sır" }
    ]
};

// Unit 507: Günler ve Aylar
export const u507: GermanPhraseUnit = {
    unitId: 507, title: "Günler ve Aylar", phrases: [
        { phrase: "Welcher Tag ist heute?", meaning: "Bugün günlerden ne?", context: "Zaman", example: "Welcher Tag ist heute? Montag.", pronunciation: "vel-hır tag ist hoy-tı" },
        { phrase: "Heute ist Montag", meaning: "Bugün Pazartesi", context: "Zaman", example: "Heute ist Montag, der erste Mai.", pronunciation: "hoy-tı ist mon-tag" },
        { phrase: "Bis Montag", meaning: "Pazartesiye kadar", context: "Veda", example: "Tschüss! Bis Montag!", pronunciation: "bis mon-tag" },
        { phrase: "Am Wochenende", meaning: "Hafta sonunda", context: "Zaman", example: "Was machst du am Wochenende?", pronunciation: "am vo-hın-en-dı" },
        { phrase: "Wann hast du Geburtstag?", meaning: "Doğum günün ne zaman?", context: "Soru", example: "Wann hast du Geburtstag?", pronunciation: "van hast du gı-burts-tag" },
        { phrase: "Am ersten Januar", meaning: "Ocak'ın birinde", context: "Tarih", example: "Mein Geburtstag ist am ersten Januar.", pronunciation: "am ers-tın ya-nu-ar" },
        { phrase: "Jeden Tag", meaning: "Her gün", context: "Sıklık", example: "Ich lerne jeden Tag Deutsch.", pronunciation: "ye-dın tag" },
        { phrase: "Gestern, heute und morgen", meaning: "Dün, bugün ve yarın", context: "Zaman", example: "Gestern war es kalt, heute ist es warm.", pronunciation: "ges-tırn hoy-tı unt mor-gın" },
        { phrase: "Nächste Woche", meaning: "Gelecek hafta", context: "Zaman", example: "Nächste Woche habe ich frei.", pronunciation: "nehs-tı vo-hı" },
        { phrase: "Letzte Woche", meaning: "Geçen hafta", context: "Zaman", example: "Letzte Woche war ich krank.", pronunciation: "lets-tı vo-hı" },
        { phrase: "Nächsten Monat", meaning: "Gelecek ay", context: "Zaman", example: "Nächsten Monat fahre ich nach Berlin.", pronunciation: "nehs-tın mo-nat" },
        { phrase: "Jede Woche", meaning: "Her hafta", context: "Sıklık", example: "Ich gehe jede Woche schwimmen.", pronunciation: "ye-dı vo-hı" },
        { phrase: "Welcher Monat ist es?", meaning: "Hangi aydayız?", context: "Soru", example: "Welcher Monat ist es? Dezember.", pronunciation: "vel-hır mo-nat ist es" },
        { phrase: "Wir sind im Dezember", meaning: "Aralık'tayız", context: "Zaman", example: "Wir sind im Dezember, es ist kalt.", pronunciation: "vir zint ım de-tsem-bır" },
        { phrase: "Unter der Woche", meaning: "Hafta içi", context: "Zaman", example: "Unter der Woche arbeite ich.", pronunciation: "un-tır der vo-hı" }
    ]
};

// Unit 508: Sayılar 21-100
export const u508: GermanPhraseUnit = {
    unitId: 508, title: "Sayılar 21-100", phrases: [
        { phrase: "Einundzwanzig", meaning: "Yirmi bir", context: "Sayı", example: "Ich bin einundzwanzig Jahre alt.", pronunciation: "ayn-unt-tsvan-tsıh" },
        { phrase: "Dreißig", meaning: "Otuz", context: "Sayı", example: "Er ist dreißig Jahre alt.", pronunciation: "dray-sıh" },
        { phrase: "Fünfzig Euro", meaning: "Elli euro", context: "Para", example: "Das kostet fünfzig Euro.", pronunciation: "fünf-tsıh oy-ro" },
        { phrase: "Hundert Prozent", meaning: "Yüzde yüz", context: "Oran", example: "Ich bin hundert Prozent sicher.", pronunciation: "hun-dırt pro-tsent" },
        { phrase: "Ungefähr", meaning: "Yaklaşık / Aşağı yukarı", context: "Tahmin", example: "Es kostet ungefähr fünfzig Euro.", pronunciation: "un-gı-fer" },
        { phrase: "Ich schaue nur", meaning: "Sadece bakıyorum", context: "Alışveriş", example: "Danke, ich schaue nur.", pronunciation: "ıh şau-ı nur" },
        { phrase: "Wie viel insgesamt?", meaning: "Toplamda ne kadar?", context: "Alışveriş", example: "Wie viel macht das insgesamt?", pronunciation: "vi fil ins-gı-zamt" },
        { phrase: "Nehmen Sie Kreditkarte?", meaning: "Kredi kartı alıyor musunuz?", context: "Ödeme", example: "Nehmen Sie Kreditkarte?", pronunciation: "ne-mın zi kre-dit-kar-tı" },
        { phrase: "Ich möchte bar bezahlen", meaning: "Nakit ödemek istiyorum", context: "Ödeme", example: "Ich möchte bar bezahlen, bitte.", pronunciation: "ıh möh-tı bar bı-tsa-lın" },
        { phrase: "Das ist zu teuer", meaning: "Çok pahalı", context: "Alışveriş", example: "Das ist mir zu teuer.", pronunciation: "das ist tsu toy-ır" },
        { phrase: "Gibt es etwas Günstigeres?", meaning: "Daha ucuz bir şey var mı?", context: "Alışveriş", example: "Gibt es etwas Günstigeres?", pronunciation: "gipt es et-vas güns-ti-gı-rıs" },
        { phrase: "Ich nehme es", meaning: "Bunu alıyorum", context: "Alışveriş", example: "Ja, ich nehme es.", pronunciation: "ıh ne-mı es" },
        { phrase: "Der Preis ist fair", meaning: "Fiyat uygun", context: "Alışveriş", example: "Der Preis ist fair, ich kaufe es.", pronunciation: "der prays ist fer" },
        { phrase: "Es ist billig", meaning: "Ucuz", context: "Alışveriş", example: "Das T-Shirt ist billig.", pronunciation: "es ist bi-lıh" },
        { phrase: "Das ist ein gutes Angebot", meaning: "Bu iyi bir teklif/fırsat", context: "Alışveriş", example: "Das ist ein gutes Angebot!", pronunciation: "das ist ayn gu-tıs an-gı-bot" }
    ]
};

// Unit 509: Ev Odaları
export const u509: GermanPhraseUnit = {
    unitId: 509, title: "Ev Odaları", phrases: [
        { phrase: "Willkommen in meinem Haus", meaning: "Evime hoş geldin", context: "Ev", example: "Willkommen in meinem Haus!", pronunciation: "vil-ko-mın in may-nım haus" },
        { phrase: "Fühlen Sie sich wie zu Hause", meaning: "Kendinizi evinizde hissedin", context: "Ev", example: "Bitte, fühlen Sie sich wie zu Hause.", pronunciation: "fü-lın zi zıh vi tsu hau-zı" },
        { phrase: "Ich gehe in die Küche", meaning: "Mutfağa gidiyorum", context: "Ev", example: "Ich gehe in die Küche kochen.", pronunciation: "ıh ge-ı in di kü-hı" },
        { phrase: "Wo ist das Badezimmer?", meaning: "Banyo nerede?", context: "Soru", example: "Entschuldigung, wo ist das Badezimmer?", pronunciation: "vo ist das ba-dı-tsi-mır" },
        { phrase: "Öffne die Tür", meaning: "Kapıyı aç", context: "Talimat", example: "Öffne bitte die Tür.", pronunciation: "öf-nı di tür" },
        { phrase: "Schließe das Fenster", meaning: "Pencereyi kapat", context: "Talimat", example: "Es ist kalt, schließe das Fenster.", pronunciation: "şli-sı das fens-tır" },
        { phrase: "An der Tür klingeln", meaning: "Kapı zilini çalmak", context: "Eylem", example: "Bitte an der Tür klingeln.", pronunciation: "an der tür kling-ıln" },
        { phrase: "Trautes Heim", meaning: "Evim güzel evim", context: "Deyim", example: "Trautes Heim, Glück allein.", pronunciation: "trau-tıs haym" },
        { phrase: "Die Treppe hochgehen", meaning: "Merdivenden çıkmak", context: "Eylem", example: "Gehen Sie die Treppe hoch.", pronunciation: "di tre-pı hoh-ge-ın" },
        { phrase: "In den Keller gehen", meaning: "Bodruma inmek", context: "Eylem", example: "Ich muss in den Keller gehen.", pronunciation: "in den ke-lır ge-ın" },
        { phrase: "Hast du einen Garten?", meaning: "Bahçen var mı?", context: "Soru", example: "Hast du einen Garten? Ja, einen kleinen.", pronunciation: "hast du ay-nın gar-tın" },
        { phrase: "Ich wohne in einer Wohnung", meaning: "Bir dairede oturuyorum", context: "Yaşam", example: "Ich wohne in einer kleinen Wohnung.", pronunciation: "ıh vo-nı in ay-nır vo-nung" },
        { phrase: "Die Miete ist hoch", meaning: "Kira yüksek", context: "Koşul", example: "Die Miete ist zu hoch in Berlin.", pronunciation: "di mi-tı ist hoh" },
        { phrase: "Ich suche eine Wohnung", meaning: "Daire arıyorum", context: "Arama", example: "Ich suche eine Wohnung in der Stadt.", pronunciation: "ıh zu-hı ay-nı vo-nung" },
        { phrase: "Er wohnt im zweiten Stock", meaning: "İkinci katta oturuyor", context: "Konum", example: "Er wohnt im zweiten Stock.", pronunciation: "er vont ım tsvay-tın ştok" }
    ]
};

// Unit 510: Mobilyalar
export const u510: GermanPhraseUnit = {
    unitId: 510, title: "Mobilyalar", phrases: [
        { phrase: "Den Tisch decken", meaning: "Masayı kurmak", context: "Eylem", example: "Kannst du den Tisch decken?", pronunciation: "den tiş de-kın" },
        { phrase: "Setz dich auf das Sofa", meaning: "Koltuğa otur", context: "Talimat", example: "Setz dich auf das Sofa, ruh dich aus.", pronunciation: "zets dıh auf das zo-fa" },
        { phrase: "Das Bett ist gemacht", meaning: "Yatak toplandı", context: "Eylem", example: "Das Bett ist schon gemacht.", pronunciation: "das bet ist gı-maht" },
        { phrase: "Was ist in der Schublade?", meaning: "Çekmecede ne var?", context: "Soru", example: "Was ist in der Schublade?", pronunciation: "vas ist in der şub-la-dı" },
        { phrase: "Unter dem Stuhl", meaning: "Sandalyenin altında", context: "Konum", example: "Die Katze ist unter dem Stuhl.", pronunciation: "un-tır dem ştul" },
        { phrase: "Auf dem Tisch", meaning: "Masanın üstünde", context: "Konum", example: "Das Buch liegt auf dem Tisch.", pronunciation: "auf dem tiş" },
        { phrase: "Das Licht ausmachen", meaning: "Işığı kapatmak", context: "Eylem", example: "Mach bitte das Licht aus.", pronunciation: "das lıht aus-ma-hın" },
        { phrase: "Das Licht anmachen", meaning: "Işığı açmak", context: "Eylem", example: "Es ist dunkel, mach das Licht an.", pronunciation: "das lıht an-ma-hın" },
        { phrase: "Neben dem Schrank", meaning: "Dolabın yanında", context: "Konum", example: "Der Stuhl steht neben dem Schrank.", pronunciation: "ne-bın dem şrank" },
        { phrase: "Hinter dem Vorhang", meaning: "Perdenin arkasında", context: "Konum", example: "Die Katze versteckt sich hinter dem Vorhang.", pronunciation: "hin-tır dem for-hang" },
        { phrase: "Vor dem Fernseher", meaning: "Televizyonun önünde", context: "Konum", example: "Er sitzt vor dem Fernseher.", pronunciation: "for dem fern-ze-ır" },
        { phrase: "Zwischen den Stühlen", meaning: "Sandalyelerin arasında", context: "Konum", example: "Zwischen den beiden Stühlen ist ein Tisch.", pronunciation: "tsvi-şın den ştü-lın" },
        { phrase: "In der Nähe des Fensters", meaning: "Pencerenin yakınında", context: "Konum", example: "Der Schreibtisch steht in der Nähe des Fensters.", pronunciation: "in der ne-ı des fens-tırs" },
        { phrase: "Weit von der Tür", meaning: "Kapıdan uzak", context: "Konum", example: "Das Regal steht weit von der Tür.", pronunciation: "vayt fon der tür" },
        { phrase: "Das Zimmer aufräumen", meaning: "Odayı toplamak", context: "Eylem", example: "Du musst dein Zimmer aufräumen!", pronunciation: "das tsi-mır auf-roy-mın" }
    ]
};

// Unit 511: Vücut Bölümleri
export const u511: GermanPhraseUnit = {
    unitId: 511, title: "Vücut Bölümleri", phrases: [
        { phrase: "Mir tut der Kopf weh", meaning: "Başım ağrıyor", context: "Sağlık", example: "Mir tut der Kopf weh, ich brauche Aspirin.", pronunciation: "mir tut der kopf ve" },
        { phrase: "Ich fühle mich schlecht", meaning: "Kendimi kötü hissediyorum", context: "Sağlık", example: "Ich fühle mich heute schlecht.", pronunciation: "ıh fü-lı mıh şleht" },
        { phrase: "Ich habe Fieber", meaning: "Ateşim var", context: "Sağlık", example: "Ich habe Fieber und Husten.", pronunciation: "ıh ha-bı fi-bır" },
        { phrase: "Ich brauche einen Arzt", meaning: "Doktora ihtiyacım var", context: "Sağlık", example: "Ich brauche dringend einen Arzt.", pronunciation: "ıh brau-hı ay-nın artst" },
        { phrase: "Mach den Mund auf", meaning: "Ağzını aç", context: "Doktor", example: "Mach den Mund auf und sag Aah.", pronunciation: "mah den munt auf" },
        { phrase: "Wasch dir die Hände", meaning: "Ellerini yıka", context: "Hijyen", example: "Wasch dir die Hände vor dem Essen.", pronunciation: "vaş dir di hen-dı" },
        { phrase: "Ich bin krank", meaning: "Hastayım", context: "Sağlık", example: "Ich bin krank und bleibe zu Hause.", pronunciation: "ıh bin krank" },
        { phrase: "Gute Besserung", meaning: "Geçmiş olsun", context: "Dilek", example: "Gute Besserung! Ruh dich aus.", pronunciation: "gu-tı be-sı-rung" },
        { phrase: "Ich habe Husten", meaning: "Öksürüğüm var", context: "Sağlık", example: "Ich habe starken Husten.", pronunciation: "ıh ha-bı hus-tın" },
        { phrase: "Mir tut der Hals weh", meaning: "Boğazım ağrıyor", context: "Sağlık", example: "Mir tut der Hals weh beim Schlucken.", pronunciation: "mir tut der hals ve" },
        { phrase: "Ich habe Grippe", meaning: "Gripim var", context: "Sağlık", example: "Ich habe Grippe und Fieber.", pronunciation: "ıh ha-bı gri-pı" },
        { phrase: "Wo ist die Apotheke?", meaning: "Eczane nerede?", context: "Soru", example: "Wo ist die nächste Apotheke?", pronunciation: "vo ist di a-po-te-kı" },
        { phrase: "Ich brauche ein Rezept", meaning: "Reçeteye ihtiyacım var", context: "Sağlık", example: "Ich brauche ein Rezept vom Arzt.", pronunciation: "ıh brau-hı ayn re-tsept" },
        { phrase: "Medikamente nehmen", meaning: "İlaç almak", context: "Sağlık", example: "Du musst deine Medikamente nehmen.", pronunciation: "me-di-ka-men-tı ne-mın" },
        { phrase: "Einen Krankenwagen rufen", meaning: "Ambulans çağırmak", context: "Acil", example: "Rufen Sie bitte einen Krankenwagen!", pronunciation: "ay-nın kran-kın-va-gın ru-fın" }
    ]
};

// Unit 512: Giysiler
export const u512: GermanPhraseUnit = {
    unitId: 512, title: "Giysiler", phrases: [
        { phrase: "Kann ich das anprobieren?", meaning: "Bunu deneyebilir miyim?", context: "Alışveriş", example: "Kann ich dieses Kleid anprobieren?", pronunciation: "kan ıh das an-pro-bi-rın" },
        { phrase: "Haben Sie eine größere Größe?", meaning: "Daha büyük beden var mı?", context: "Alışveriş", example: "Haben Sie eine größere Größe?", pronunciation: "ha-bın zi ay-nı grö-sı-rı grö-sı" },
        { phrase: "Das steht dir gut", meaning: "Sana yakıştı", context: "Yorum", example: "Das Kleid steht dir sehr gut!", pronunciation: "das ştet dir gut" },
        { phrase: "Ich nehme es", meaning: "Bunu alıyorum", context: "Alışveriş", example: "Ja, ich nehme es. Danke.", pronunciation: "ıh ne-mı es" },
        { phrase: "Mit Karte zahlen", meaning: "Kartla ödemek", context: "Ödeme", example: "Kann ich mit Karte zahlen?", pronunciation: "mit kar-tı tsa-lın" },
        { phrase: "Bar bezahlen", meaning: "Nakit ödemek", context: "Ödeme", example: "Ich möchte bar bezahlen.", pronunciation: "bar bı-tsa-lın" },
        { phrase: "Das ist modern", meaning: "Bu modern", context: "Moda", example: "Das T-Shirt ist sehr modern.", pronunciation: "das ist mo-dern" },
        { phrase: "Schuhe anziehen", meaning: "Ayakkabı giymek", context: "Giyim", example: "Zieh deine Schuhe an, wir gehen.", pronunciation: "şu-ı an-tsi-ın" },
        { phrase: "Haben Sie das in einer anderen Farbe?", meaning: "Başka rengi var mı?", context: "Alışveriş", example: "Haben Sie das in Blau?", pronunciation: "ha-bın zi das in ay-nır an-dı-rın far-bı" },
        { phrase: "Es ist mir zu klein", meaning: "Bana küçük", context: "Beden", example: "Die Hose ist mir zu klein.", pronunciation: "es ist mir tsu klayn" },
        { phrase: "Wo sind die Umkleidekabinen?", meaning: "Giyinme kabinleri nerede?", context: "Alışveriş", example: "Wo sind die Umkleidekabinen?", pronunciation: "vo zint di um-klay-dı-ka-bi-nın" },
        { phrase: "Ich möchte das umtauschen", meaning: "Bunu değiştirmek istiyorum", context: "İade", example: "Ich möchte das Hemd umtauschen.", pronunciation: "ıh möh-tı das um-tau-şın" },
        { phrase: "Haben Sie den Kassenbon?", meaning: "Fişiniz var mı?", context: "İade", example: "Haben Sie den Kassenbon?", pronunciation: "ha-bın zi den ka-sın-bon" },
        { phrase: "Es ist im Angebot", meaning: "İndirimde", context: "Fiyat", example: "Das Kleid ist heute im Angebot.", pronunciation: "es ist ım an-gı-bot" },
        { phrase: "Sommerkleidung", meaning: "Yaz kıyafetleri", context: "Mevsim", example: "Wir brauchen Sommerkleidung.", pronunciation: "zo-mır-klay-dung" }
    ]
};

// Unit 513: Hayvanlar
export const u513: GermanPhraseUnit = {
    unitId: 513, title: "Hayvanlar", phrases: [
        { phrase: "Ich habe einen Hund", meaning: "Bir köpeğim var", context: "Evcil", example: "Ich habe einen Hund namens Rex.", pronunciation: "ıh ha-bı ay-nın hunt" },
        { phrase: "Vorsicht, bissiger Hund!", meaning: "Dikkat, ısıran köpek!", context: "Uyarı", example: "Vorsicht, bissiger Hund!", pronunciation: "for-zıht bi-si-gır hunt" },
        { phrase: "Es ist sehr süß", meaning: "Çok tatlı/sevimli", context: "Yorum", example: "Das Kätzchen ist sehr süß.", pronunciation: "es ist zer züs" },
        { phrase: "Ich mag Tiere", meaning: "Hayvanları severim", context: "Tercih", example: "Ich mag Tiere sehr gerne.", pronunciation: "ıh mag ti-rı" },
        { phrase: "Vogelgesang", meaning: "Kuş ötüşü", context: "Doğa", example: "Ich höre gerne Vogelgesang.", pronunciation: "fo-gıl-gı-zang" },
        { phrase: "Reiten gehen", meaning: "Ata binmek", context: "Aktivite", example: "Am Wochenende gehe ich reiten.", pronunciation: "ray-tın ge-ın" },
        { phrase: "Sich pudelwohl fühlen", meaning: "Çok rahat hissetmek", context: "Deyim", example: "Ich fühle mich pudelwohl hier.", pronunciation: "zıh pu-dıl-vol fü-lın" },
        { phrase: "Krokodilstränen", meaning: "Timsah gözyaşları", context: "Deyim", example: "Er weint Krokodilstränen.", pronunciation: "kro-ko-dils-tre-nın" },
        { phrase: "Hast du Haustiere?", meaning: "Evcil hayvanın var mı?", context: "Soru", example: "Hast du Haustiere? Ja, eine Katze.", pronunciation: "hast du haus-ti-rı" },
        { phrase: "Meine Katze heißt...", meaning: "Kedimin adı...", context: "Tanıtma", example: "Meine Katze heißt Luna.", pronunciation: "may-nı ka-tsı hayst" },
        { phrase: "Den Hund füttern", meaning: "Köpeği beslemek", context: "Bakım", example: "Vergiss nicht, den Hund zu füttern.", pronunciation: "den hunt fü-tırn" },
        { phrase: "Mit dem Hund spazieren gehen", meaning: "Köpeği gezdirmek", context: "Bakım", example: "Ich gehe mit dem Hund spazieren.", pronunciation: "mit dem hunt şpa-tsi-rın ge-ın" },
        { phrase: "Wildtiere", meaning: "Vahşi hayvanlar", context: "Doğa", example: "Im Wald gibt es viele Wildtiere.", pronunciation: "vilt-ti-rı" },
        { phrase: "Haustiere", meaning: "Evcil hayvanlar", context: "Ev", example: "Haustiere machen das Leben schöner.", pronunciation: "haus-ti-rı" },
        { phrase: "Es ist sehr anhänglich", meaning: "Çok sevecen", context: "Hayvan", example: "Mein Hund ist sehr anhänglich.", pronunciation: "es ist zer an-heng-lıh" }
    ]
};

// Unit 514: Meslekler 1
export const u514: GermanPhraseUnit = {
    unitId: 514, title: "Meslekler 1", phrases: [
        { phrase: "Was machen Sie beruflich?", meaning: "Ne iş yapıyorsunuz?", context: "Soru", example: "Was machen Sie beruflich?", pronunciation: "vas ma-hın zi bı-ruf-lıh" },
        { phrase: "Ich arbeite in einem Büro", meaning: "Ofiste çalışıyorum", context: "İş", example: "Ich arbeite in einem großen Büro.", pronunciation: "ıh ar-bay-tı in ay-nım bü-ro" },
        { phrase: "Ich bin Student/Studentin", meaning: "Öğrenciyim", context: "Durum", example: "Ich bin Student an der Universität.", pronunciation: "ıh bin ştu-dent" },
        { phrase: "Ich bin in Rente", meaning: "Emekliyim", context: "Durum", example: "Ich bin seit zwei Jahren in Rente.", pronunciation: "ıh bin in ren-tı" },
        { phrase: "Ich suche Arbeit", meaning: "İş arıyorum", context: "Durum", example: "Ich suche Arbeit als Ingenieur.", pronunciation: "ıh zu-hı ar-bayt" },
        { phrase: "Der Chef / Die Chefin", meaning: "Patron", context: "İş", example: "Der Chef ist heute nicht da.", pronunciation: "der şef / di şe-fin" },
        { phrase: "Teamarbeit", meaning: "Takım çalışması", context: "İş", example: "Teamarbeit ist mir wichtig.", pronunciation: "tim-ar-bayt" },
        { phrase: "Das ist meine Berufung", meaning: "Bu benim mesleğim/tutkum", context: "Kariyer", example: "Lehrer sein ist meine Berufung.", pronunciation: "das ist may-nı bı-ru-fung" },
        { phrase: "Ich habe ein Vorstellungsgespräch", meaning: "İş görüşmem var", context: "Kariyer", example: "Morgen habe ich ein Vorstellungsgespräch.", pronunciation: "ıh ha-bı ayn for-şte-lungs-gı-şpreh" },
        { phrase: "Ich arbeite Vollzeit", meaning: "Tam zamanlı çalışıyorum", context: "İş", example: "Ich arbeite Vollzeit, 40 Stunden.", pronunciation: "ıh ar-bay-tı fol-tsayt" },
        { phrase: "Ich arbeite Teilzeit", meaning: "Yarı zamanlı çalışıyorum", context: "İş", example: "Ich arbeite nur Teilzeit.", pronunciation: "ıh ar-bay-tı tayl-tsayt" },
        { phrase: "Was ist dein Beruf?", meaning: "Mesleğin ne?", context: "Soru", example: "Was ist dein Beruf? Ich bin Lehrer.", pronunciation: "vas ist dayn bı-ruf" },
        { phrase: "Ich bin arbeitslos", meaning: "İşsizim", context: "Durum", example: "Ich bin seit drei Monaten arbeitslos.", pronunciation: "ıh bin ar-bayts-los" },
        { phrase: "Das Gehalt ist gut", meaning: "Maaş iyi", context: "İş", example: "Das Gehalt ist gut für die Position.", pronunciation: "das gı-halt ist gut" },
        { phrase: "Ich habe Urlaub", meaning: "Tatilim var", context: "İş", example: "Nächste Woche habe ich Urlaub.", pronunciation: "ıh ha-bı ur-laup" }
    ]
};

// Unit 515: Şehirde Yerler
export const u515: GermanPhraseUnit = {
    unitId: 515, title: "Şehirde Yerler", phrases: [
        { phrase: "Entschuldigung, ich habe mich verlaufen", meaning: "Pardon, kayboldum", context: "Yol", example: "Entschuldigung, ich habe mich verlaufen.", pronunciation: "ent-şul-di-gung ıh ha-bı mıh fer-lau-fın" },
        { phrase: "Wo ist die Apotheke?", meaning: "Eczane nerede?", context: "Soru", example: "Wo ist die nächste Apotheke?", pronunciation: "vo ist di a-po-te-kı" },
        { phrase: "Gehen Sie geradeaus", meaning: "Düz gidin", context: "Yön", example: "Gehen Sie geradeaus und dann links.", pronunciation: "ge-ın zi gı-ra-dı-aus" },
        { phrase: "Biegen Sie rechts ab", meaning: "Sağa dönün", context: "Yön", example: "Biegen Sie an der Ampel rechts ab.", pronunciation: "bi-gın zi rehts ap" },
        { phrase: "Biegen Sie links ab", meaning: "Sola dönün", context: "Yön", example: "Biegen Sie links ab, dann geradeaus.", pronunciation: "bi-gın zi links ap" },
        { phrase: "Es ist in der Nähe", meaning: "Yakında", context: "Mesafe", example: "Die Post ist in der Nähe.", pronunciation: "es ist in der ne-ı" },
        { phrase: "Am Ende der Straße", meaning: "Sokağın sonunda", context: "Konum", example: "Am Ende der Straße ist ein Park.", pronunciation: "am en-dı der ştra-sı" },
        { phrase: "Um die Ecke", meaning: "Köşeyi dönünce", context: "Konum", example: "Der Supermarkt ist um die Ecke.", pronunciation: "um di e-kı" },
        { phrase: "Wie komme ich zu...?", meaning: "...ya nasıl giderim?", context: "Soru", example: "Wie komme ich zum Bahnhof?", pronunciation: "vi ko-mı ıh tsu" },
        { phrase: "Es ist fünf Minuten entfernt", meaning: "Beş dakika uzaklıkta", context: "Mesafe", example: "Es ist nur fünf Minuten entfernt.", pronunciation: "es ist fünf mi-nu-tın ent-fernt" },
        { phrase: "Die Straße überqueren", meaning: "Karşıya geçmek", context: "Yön", example: "Überqueren Sie die Straße.", pronunciation: "di ştra-sı ü-bır-kve-rın" },
        { phrase: "Die erste rechts", meaning: "İlk sokaktan sağa", context: "Yön", example: "Nehmen Sie die erste rechts.", pronunciation: "di ers-tı rehts" },
        { phrase: "Die zweite links", meaning: "İkinci sokaktan sola", context: "Yön", example: "Nehmen Sie die zweite links.", pronunciation: "di tsvay-tı links" },
        { phrase: "Es ist gegenüber von...", meaning: "...nın karşısında", context: "Konum", example: "Es ist gegenüber vom Rathaus.", pronunciation: "es ist ge-gın-ü-bır fon" },
        { phrase: "Ich kann es nicht finden", meaning: "Bulamıyorum", context: "Kayıp", example: "Ich kann die Straße nicht finden.", pronunciation: "ıh kan es nıht fin-dın" }
    ]
};

// Unit 516: Ulaşım Araçları
export const u516: GermanPhraseUnit = {
    unitId: 516, title: "Ulaşım Araçları", phrases: [
        { phrase: "Eine Hin- und Rückfahrkarte", meaning: "Gidiş-dönüş bileti", context: "Bilet", example: "Eine Hin- und Rückfahrkarte nach München, bitte.", pronunciation: "ay-nı hin unt rük-far-kar-tı" },
        { phrase: "Wann fährt der Zug?", meaning: "Tren ne zaman kalkıyor?", context: "Soru", example: "Wann fährt der Zug nach Berlin?", pronunciation: "van fert der tsug" },
        { phrase: "Den Bus verpassen", meaning: "Otobüsü kaçırmak", context: "Ulaşım", example: "Ich habe den Bus verpasst.", pronunciation: "den bus fer-pa-sın" },
        { phrase: "Gute Reise!", meaning: "İyi yolculuklar!", context: "Dilek", example: "Gute Reise! Bis bald!", pronunciation: "gu-tı ray-zı" },
        { phrase: "In der U-Bahn", meaning: "Metroda", context: "Ulaşım", example: "Ich fahre mit der U-Bahn.", pronunciation: "in der u-ban" },
        { phrase: "Zu Fuß gehen", meaning: "Yürüyerek gitmek", context: "Ulaşım", example: "Ich gehe zu Fuß zur Arbeit.", pronunciation: "tsu fus ge-ın" },
        { phrase: "Ein Taxi nehmen", meaning: "Taksi tutmak", context: "Ulaşım", example: "Sollen wir ein Taxi nehmen?", pronunciation: "ayn tak-si ne-mın" },
        { phrase: "Bitte anschnallen", meaning: "Lütfen emniyet kemerini bağlayın", context: "Güvenlik", example: "Bitte anschnallen, wir starten.", pronunciation: "bi-tı an-şna-lın" },
        { phrase: "Von welchem Gleis fährt er?", meaning: "Hangi perondan kalkıyor?", context: "İstasyon", example: "Von welchem Gleis fährt der Zug?", pronunciation: "fon vel-hım glays fert er" },
        { phrase: "Der Flug hat Verspätung", meaning: "Uçuş gecikti", context: "Havalimanı", example: "Der Flug hat 30 Minuten Verspätung.", pronunciation: "der flug hat fer-şpe-tung" },
        { phrase: "Ich muss umsteigen", meaning: "Aktarma yapmam gerekiyor", context: "Ulaşım", example: "Ich muss in Frankfurt umsteigen.", pronunciation: "ıh mus um-ştay-gın" },
        { phrase: "Wie lange dauert die Fahrt?", meaning: "Yolculuk ne kadar sürer?", context: "Soru", example: "Wie lange dauert die Fahrt nach Hamburg?", pronunciation: "vi lan-gı dau-ırt di fart" },
        { phrase: "Bushaltestelle", meaning: "Otobüs durağı", context: "Konum", example: "Wo ist die nächste Bushaltestelle?", pronunciation: "bus-hal-tı-şte-lı" },
        { phrase: "Hauptbahnhof", meaning: "Ana tren istasyonu", context: "Konum", example: "Wir treffen uns am Hauptbahnhof.", pronunciation: "haupt-ban-hof" },
        { phrase: "Wir kommen zu spät", meaning: "Geç kalıyoruz", context: "Acele", example: "Beeil dich, wir kommen zu spät!", pronunciation: "vir ko-mın tsu şpet" }
    ]
};

// Unit 517: Günlük Rutinler
export const u517: GermanPhraseUnit = {
    unitId: 517, title: "Günlük Rutinler", phrases: [
        { phrase: "Ich stehe früh auf", meaning: "Erken kalkıyorum", context: "Rutin", example: "Ich stehe jeden Tag um 6 Uhr auf.", pronunciation: "ıh şte-ı frü auf" },
        { phrase: "Ich gehe spät ins Bett", meaning: "Geç yatıyorum", context: "Rutin", example: "Ich gehe oft spät ins Bett.", pronunciation: "ıh ge-ı şpet ins bet" },
        { phrase: "Zähne putzen", meaning: "Dişlerini fırçalamak", context: "Hijyen", example: "Vergiss nicht, Zähne zu putzen.", pronunciation: "tse-nı pu-tsın" },
        { phrase: "Den Wecker stellen", meaning: "Alarmı kurmak", context: "Rutin", example: "Ich stelle den Wecker auf 7 Uhr.", pronunciation: "den ve-kır şte-lın" },
        { phrase: "Das Bett machen", meaning: "Yatağı toplamak", context: "Rutin", example: "Mach bitte dein Bett!", pronunciation: "das bet ma-hın" },
        { phrase: "Duschen", meaning: "Duş almak", context: "Hijyen", example: "Ich dusche jeden Morgen.", pronunciation: "du-şın" },
        { phrase: "Zur Arbeit gehen", meaning: "İşe gitmek", context: "Rutin", example: "Ich gehe um 8 Uhr zur Arbeit.", pronunciation: "tsur ar-bayt ge-ın" },
        { phrase: "Nach Hause kommen", meaning: "Eve dönmek", context: "Rutin", example: "Ich komme um 18 Uhr nach Hause.", pronunciation: "nah hau-zı ko-mın" },
        { phrase: "Frühstück machen", meaning: "Kahvaltı hazırlamak", context: "Rutin", example: "Ich mache Frühstück für die Familie.", pronunciation: "frü-ştük ma-hın" },
        { phrase: "Sich schnell anziehen", meaning: "Hızlı giyinmek", context: "Rutin", example: "Ich muss mich schnell anziehen.", pronunciation: "zıh şnel an-tsi-ın" },
        { phrase: "Das Haus verlassen", meaning: "Evden çıkmak", context: "Rutin", example: "Ich verlasse das Haus um 7:30.", pronunciation: "das haus fer-la-sın" },
        { phrase: "Wann stehst du auf?", meaning: "Saat kaçta kalkıyorsun?", context: "Soru", example: "Wann stehst du normalerweise auf?", pronunciation: "van ştest du auf" },
        { phrase: "Normalerweise...", meaning: "Normalde...", context: "Sıklık", example: "Normalerweise stehe ich um 7 auf.", pronunciation: "nor-ma-lır-vay-zı" },
        { phrase: "Am Wochenende", meaning: "Hafta sonları", context: "Zaman", example: "Am Wochenende schlafe ich lang.", pronunciation: "am vo-hın-en-dı" },
        { phrase: "Jeden Morgen", meaning: "Her sabah", context: "Sıklık", example: "Jeden Morgen trinke ich Kaffee.", pronunciation: "ye-dın mor-gın" }
    ]
};

// Unit 518: Saat Kaç?
export const u518: GermanPhraseUnit = {
    unitId: 518, title: "Saat Kaç?", phrases: [
        { phrase: "Wie spät ist es?", meaning: "Saat kaç?", context: "Soru", example: "Entschuldigung, wie spät ist es?", pronunciation: "vi şpet ist es" },
        { phrase: "Pünktlich ankommen", meaning: "Zamanında varmak", context: "Zaman", example: "Bitte komm pünktlich an.", pronunciation: "pünkt-lıh an-ko-mın" },
        { phrase: "Zu spät kommen", meaning: "Geç kalmak", context: "Zaman", example: "Ich komme nie zu spät.", pronunciation: "tsu şpet ko-mın" },
        { phrase: "Punkt...", meaning: "Tam saat...", context: "Saat", example: "Es ist Punkt zwölf.", pronunciation: "punkt" },
        { phrase: "Es ist Mittag", meaning: "Öğle vakti", context: "Zaman", example: "Es ist Mittag, Zeit zum Essen.", pronunciation: "es ist mi-tag" },
        { phrase: "Es ist Mitternacht", meaning: "Gece yarısı", context: "Zaman", example: "Es ist schon Mitternacht.", pronunciation: "es ist mi-tır-naht" },
        { phrase: "Die Zeit vergeht schnell", meaning: "Zaman çabuk geçiyor", context: "Deyim", example: "Die Zeit vergeht so schnell!", pronunciation: "di tsayt fer-geyt şnel" },
        { phrase: "Es eilig haben", meaning: "Acelesi olmak", context: "Durum", example: "Ich habe es eilig, ich muss gehen.", pronunciation: "es ay-lıh ha-bın" },
        { phrase: "Um wie viel Uhr treffen wir uns?", meaning: "Saat kaçta buluşalım?", context: "Plan", example: "Um wie viel Uhr treffen wir uns?", pronunciation: "um vi fil ur tre-fın vir uns" },
        { phrase: "Es ist halb vier", meaning: "Saat üç buçuk", context: "Saat", example: "Es ist halb vier, komm schnell!", pronunciation: "es ist halp fir" },
        { phrase: "Es ist Viertel vor vier", meaning: "Dörde çeyrek var", context: "Saat", example: "Es ist Viertel vor vier.", pronunciation: "es ist fir-tıl for fir" },
        { phrase: "Am Morgen", meaning: "Sabahleyin", context: "Zaman", example: "Am Morgen trinke ich Tee.", pronunciation: "am mor-gın" },
        { phrase: "Am Nachmittag", meaning: "Öğleden sonra", context: "Zaman", example: "Am Nachmittag gehe ich spazieren.", pronunciation: "am nah-mi-tag" },
        { phrase: "Am Abend", meaning: "Akşamleyin", context: "Zaman", example: "Am Abend sehe ich fern.", pronunciation: "am a-bınt" },
        { phrase: "Hast du einen Moment?", meaning: "Bir dakikan var mı?", context: "Soru", example: "Hast du einen Moment Zeit?", pronunciation: "hast du ay-nın mo-ment" }
    ]
};

// Unit 519: Hava Durumu
export const u519: GermanPhraseUnit = {
    unitId: 519, title: "Hava Durumu", phrases: [
        { phrase: "Das Wetter ist schön", meaning: "Hava güzel", context: "Hava", example: "Heute ist das Wetter schön.", pronunciation: "das ve-tır ist şön" },
        { phrase: "Das Wetter ist schlecht", meaning: "Hava kötü", context: "Hava", example: "Das Wetter ist heute schlecht.", pronunciation: "das ve-tır ist şleht" },
        { phrase: "Es regnet in Strömen", meaning: "Bardaktan boşalırcasına yağıyor", context: "Hava", example: "Geh nicht raus, es regnet in Strömen.", pronunciation: "es reg-net in ştrö-mın" },
        { phrase: "Vor Kälte erfrieren", meaning: "Soğuktan donmak", context: "Hava", example: "Ich erfriere fast vor Kälte.", pronunciation: "for kel-tı er-fri-rın" },
        { phrase: "Die Sonne brennt", meaning: "Güneş yakıyor", context: "Hava", example: "Die Sonne brennt heute stark.", pronunciation: "di zo-nı brent" },
        { phrase: "Bewölkter Tag", meaning: "Bulutlu gün", context: "Hava", example: "Heute ist ein bewölkter Tag.", pronunciation: "bı-völk-tır tag" },
        { phrase: "Wettervorhersage", meaning: "Hava durumu tahmini", context: "Haber", example: "Was sagt die Wettervorhersage?", pronunciation: "ve-tır-for-her-za-gı" },
        { phrase: "Einen Regenschirm mitnehmen", meaning: "Şemsiye almak", context: "Tavsiye", example: "Nimm einen Regenschirm mit!", pronunciation: "ay-nın re-gın-şırm mit-ne-mın" },
        { phrase: "Wie ist das Wetter?", meaning: "Hava nasıl?", context: "Soru", example: "Wie ist das Wetter heute?", pronunciation: "vi ist das ve-tır" },
        { phrase: "Es ist sehr heiß", meaning: "Çok sıcak", context: "Hava", example: "Es ist sehr heiß draußen.", pronunciation: "es ist zer hays" },
        { phrase: "Es ist sehr kalt", meaning: "Çok soğuk", context: "Hava", example: "Es ist sehr kalt im Winter.", pronunciation: "es ist zer kalt" },
        { phrase: "Es schneit", meaning: "Kar yağıyor", context: "Hava", example: "Es schneit seit gestern.", pronunciation: "es şnayt" },
        { phrase: "Es gibt ein Gewitter", meaning: "Fırtına var", context: "Hava", example: "Es gibt heute Abend ein Gewitter.", pronunciation: "es gipt ayn gı-vi-tır" },
        { phrase: "Klarer Himmel", meaning: "Açık gökyüzü", context: "Hava", example: "Heute ist der Himmel klar.", pronunciation: "kla-rır hi-mıl" },
        { phrase: "Es fängt an zu regnen", meaning: "Yağmur başlıyor", context: "Hava", example: "Es fängt an zu regnen, gehen wir rein.", pronunciation: "es fengt an tsu reg-nın" }
    ]
};

// Unit 520: Hobiler
export const u520: GermanPhraseUnit = {
    unitId: 520, title: "Hobiler", phrases: [
        { phrase: "Was machst du in deiner Freizeit?", meaning: "Boş zamanında ne yaparsın?", context: "Soru", example: "Was machst du in deiner Freizeit?", pronunciation: "vas mahst du in day-nır fray-tsayt" },
        { phrase: "Ich tanze gerne", meaning: "Dans etmeyi severim", context: "Hobi", example: "Ich tanze gerne Salsa.", pronunciation: "ıh tan-tsı ger-nı" },
        { phrase: "Ich bin Fußballfan", meaning: "Futbol hayranıyım", context: "Spor", example: "Ich bin ein großer Fußballfan.", pronunciation: "ıh bin fus-bal-fen" },
        { phrase: "Gitarre spielen", meaning: "Gitar çalmak", context: "Müzik", example: "Ich spiele seit fünf Jahren Gitarre.", pronunciation: "gi-ta-rı şpi-lın" },
        { phrase: "Einkaufen gehen", meaning: "Alışverişe gitmek", context: "Aktivite", example: "Am Samstag gehe ich einkaufen.", pronunciation: "ayn-kau-fın ge-ın" },
        { phrase: "Einen Film sehen", meaning: "Film izlemek", context: "Eğlence", example: "Wollen wir heute einen Film sehen?", pronunciation: "ay-nın film ze-ın" },
        { phrase: "Mit Freunden ausgehen", meaning: "Arkadaşlarla dışarı çıkmak", context: "Sosyal", example: "Am Freitag gehe ich mit Freunden aus.", pronunciation: "mit froyn-dın aus-ge-ın" },
        { phrase: "Ich habe keine Zeit", meaning: "Zamanım yok", context: "Durum", example: "Tut mir leid, ich habe keine Zeit.", pronunciation: "ıh ha-bı kay-nı tsayt" },
        { phrase: "Was sind deine Hobbys?", meaning: "Hobilerin neler?", context: "Soru", example: "Was sind deine Hobbys?", pronunciation: "vas zint day-nı ho-bis" },
        { phrase: "Ich liebe Musik", meaning: "Müziği seviyorum", context: "Tercih", example: "Ich liebe klassische Musik.", pronunciation: "ıh li-bı mu-zik" },
        { phrase: "Videospiele spielen", meaning: "Video oyunu oynamak", context: "Eğlence", example: "Mein Bruder spielt gerne Videospiele.", pronunciation: "vi-de-o-şpi-lı şpi-lın" },
        { phrase: "Sport treiben", meaning: "Spor yapmak", context: "Spor", example: "Ich treibe dreimal pro Woche Sport.", pronunciation: "şport tray-bın" },
        { phrase: "Bücher lesen", meaning: "Kitap okumak", context: "Hobi", example: "Sie liest gerne Bücher.", pronunciation: "bü-hır le-zın" },
        { phrase: "Sich mit jemandem treffen", meaning: "Biriyle buluşmak", context: "Sosyal", example: "Ich treffe mich morgen mit Anna.", pronunciation: "zıh mit ye-man-dım tre-fın" },
        { phrase: "Spaß haben", meaning: "Eğlenmek", context: "Eğlence", example: "Wir hatten viel Spaß!", pronunciation: "şpas ha-bın" }
    ]
};

// Unit 521: Duygular ve Hisler
export const u521: GermanPhraseUnit = {
    unitId: 521, title: "Duygular ve Hisler", phrases: [
        { phrase: "Wie fühlst du dich?", meaning: "Kendini nasıl hissediyorsun?", context: "Soru", example: "Wie fühlst du dich heute?", pronunciation: "vi fülst du dıh" },
        { phrase: "Ich bin sehr zufrieden", meaning: "Çok memnunum", context: "Duygu", example: "Ich bin sehr zufrieden mit dem Ergebnis.", pronunciation: "ıh bin zer tsu-fri-dın" },
        { phrase: "Ich bin nicht in Stimmung", meaning: "Havamda değilim", context: "Duygu", example: "Ich bin heute nicht in Stimmung.", pronunciation: "ıh bin nıht in şti-mung" },
        { phrase: "Ich habe Angst", meaning: "Korkuyorum", context: "Duygu", example: "Ich habe Angst vor Spinnen.", pronunciation: "ıh ha-bı angst" },
        { phrase: "Ich habe die Nase voll", meaning: "Bıktım usandım", context: "Duygu", example: "Ich habe die Nase voll davon!", pronunciation: "ıh ha-bı di na-zı fol" },
        { phrase: "Das ist mir egal", meaning: "Benim için farketmez", context: "Kayıtsızlık", example: "Das ist mir völlig egal.", pronunciation: "das ist mir e-gal" },
        { phrase: "Was für eine Freude!", meaning: "Ne mutluluk!", context: "Sevinç", example: "Was für eine Freude, dich zu sehen!", pronunciation: "vas für ay-nı froy-dı" },
        { phrase: "Mach dir keine Sorgen", meaning: "Endişelenme", context: "Teselli", example: "Mach dir keine Sorgen, alles wird gut.", pronunciation: "mah dir kay-nı zor-gın" },
        { phrase: "Ich bin nervös", meaning: "Gerginim", context: "Duygu", example: "Ich bin nervös vor der Prüfung.", pronunciation: "ıh bin ner-vös" },
        { phrase: "Mir ist langweilig", meaning: "Sıkıldım", context: "Duygu", example: "Mir ist so langweilig heute.", pronunciation: "mir ist lang-vay-lıh" },
        { phrase: "Was für eine Überraschung!", meaning: "Ne sürpriz!", context: "Şaşırma", example: "Was für eine tolle Überraschung!", pronunciation: "vas für ay-nı ü-bır-ra-şung" },
        { phrase: "Ich bin aufgeregt", meaning: "Heyecanlıyım", context: "Duygu", example: "Ich bin so aufgeregt wegen der Reise.", pronunciation: "ıh bin auf-gı-regt" },
        { phrase: "Es tut mir sehr leid", meaning: "Çok üzgünüm", context: "Üzüntü", example: "Es tut mir sehr leid für dich.", pronunciation: "es tut mir zer layt" },
        { phrase: "Ich bin wütend", meaning: "Kızgınım", context: "Duygu", example: "Ich bin wütend auf ihn.", pronunciation: "ıh bin vü-tent" },
        { phrase: "Ich fühle mich wohl", meaning: "İyi hissediyorum", context: "Duygu", example: "Hier fühle ich mich wohl.", pronunciation: "ıh fü-lı mıh vol" }
    ]
};

// Unit 522: Okul ve Sınıf
export const u522: GermanPhraseUnit = {
    unitId: 522, title: "Okul ve Sınıf", phrases: [
        { phrase: "Darf ich auf die Toilette?", meaning: "Tuvalete gidebilir miyim?", context: "İzin", example: "Darf ich bitte auf die Toilette gehen?", pronunciation: "darf ıh auf di to-a-le-tı" },
        { phrase: "Ich verstehe nicht", meaning: "Anlamıyorum", context: "Ders", example: "Entschuldigung, ich verstehe das nicht.", pronunciation: "ıh fer-şte-ı nıht" },
        { phrase: "Können Sie das wiederholen?", meaning: "Tekrar edebilir misiniz?", context: "Ders", example: "Können Sie das bitte wiederholen?", pronunciation: "kö-nın zi das vi-dır-ho-lın" },
        { phrase: "Ich habe eine Frage", meaning: "Bir sorum var", context: "Ders", example: "Ich habe eine Frage zum Text.", pronunciation: "ıh ha-bı ay-nı fra-gı" },
        { phrase: "Ich bin fertig", meaning: "Bitirdim", context: "Ders", example: "Ich bin mit der Aufgabe fertig.", pronunciation: "ıh bin fer-tıh" },
        { phrase: "Öffnet eure Bücher", meaning: "Kitaplarınızı açın", context: "Talimat", example: "Öffnet eure Bücher auf Seite 20.", pronunciation: "öf-net oy-rı bü-hır" },
        { phrase: "Was sind die Hausaufgaben?", meaning: "Ödev ne?", context: "Ders", example: "Was sind die Hausaufgaben für morgen?", pronunciation: "vas zint di haus-auf-ga-bın" },
        { phrase: "Für die Prüfung lernen", meaning: "Sınava çalışmak", context: "Ders", example: "Ich muss für die Prüfung lernen.", pronunciation: "für di prü-fung ler-nın" },
        { phrase: "Wie sagt man... auf Deutsch?", meaning: "Almanca'da ... nasıl denir?", context: "Soru", example: "Wie sagt man 'thank you' auf Deutsch?", pronunciation: "vi zagt man auf doytş" },
        { phrase: "Was bedeutet das?", meaning: "Bu ne anlama geliyor?", context: "Soru", example: "Was bedeutet dieses Wort?", pronunciation: "vas bı-doy-tet das" },
        { phrase: "Die Hand heben", meaning: "El kaldırmak", context: "Sınıf", example: "Bitte hebt die Hand, wenn ihr fertig seid.", pronunciation: "di hant he-bın" },
        { phrase: "Hausaufgaben machen", meaning: "Ödev yapmak", context: "Ders", example: "Ich muss meine Hausaufgaben machen.", pronunciation: "haus-auf-ga-bın ma-hın" },
        { phrase: "Die Prüfung bestehen", meaning: "Sınavı geçmek", context: "Sonuç", example: "Ich habe die Prüfung bestanden!", pronunciation: "di prü-fung bı-şte-ın" },
        { phrase: "Die Prüfung nicht bestehen", meaning: "Sınavda kalmak", context: "Sonuç", example: "Er hat die Prüfung nicht bestanden.", pronunciation: "di prü-fung nıht bı-şte-ın" },
        { phrase: "Aufpassen", meaning: "Dikkat etmek", context: "Talimat", example: "Bitte passt im Unterricht auf!", pronunciation: "auf-pa-sın" }
    ]
};

// Unit 523: Tatiller ve Bayramlar
export const u523: GermanPhraseUnit = {
    unitId: 523, title: "Tatiller ve Bayramlar", phrases: [
        { phrase: "Frohe Weihnachten!", meaning: "Mutlu Noeller!", context: "Bayram", example: "Frohe Weihnachten und guten Rutsch!", pronunciation: "fro-ı vay-nah-tın" },
        { phrase: "Frohe Ostern!", meaning: "Mutlu Paskalyalar!", context: "Bayram", example: "Frohe Ostern, liebe Familie!", pronunciation: "fro-ı os-tırn" },
        { phrase: "Alles Gute zum Geburtstag!", meaning: "Doğum günün kutlu olsun!", context: "Kutlama", example: "Alles Gute zum Geburtstag, Anna!", pronunciation: "a-lıs gu-tı tsum gı-burts-tag" },
        { phrase: "Frohes neues Jahr!", meaning: "Mutlu yıllar!", context: "Yılbaşı", example: "Frohes neues Jahr 2026!", pronunciation: "fro-ıs noy-ıs yar" },
        { phrase: "Herzlichen Glückwunsch!", meaning: "Tebrikler!", context: "Kutlama", example: "Herzlichen Glückwunsch zur Hochzeit!", pronunciation: "herts-lı-hın glük-vunş" },
        { phrase: "Schöne Feiertage!", meaning: "İyi tatiller!", context: "Tatil", example: "Schöne Feiertage wünsche ich dir!", pronunciation: "şö-nı fay-ır-ta-gı" },
        { phrase: "Ein Geschenk kaufen", meaning: "Hediye almak", context: "Kutlama", example: "Ich muss ein Geschenk kaufen.", pronunciation: "ayn gı-şenk kau-fın" },
        { phrase: "Einen Kuchen backen", meaning: "Pasta yapmak", context: "Kutlama", example: "Wir backen einen Kuchen für die Party.", pronunciation: "ay-nın ku-hın ba-kın" },
        { phrase: "Eine Party feiern", meaning: "Parti vermek", context: "Kutlama", example: "Wir feiern eine große Party.", pronunciation: "ay-nı par-ti fay-ırn" },
        { phrase: "Silvester", meaning: "Yılbaşı gecesi", context: "Bayram", example: "Was machst du an Silvester?", pronunciation: "zil-ves-tır" },
        { phrase: "Karneval feiern", meaning: "Karnaval kutlamak", context: "Festival", example: "In Köln feiert man Karneval.", pronunciation: "kar-ne-val fay-ırn" },
        { phrase: "Einen Toast aussprechen", meaning: "Kadeh kaldırmak", context: "Kutlama", example: "Ich möchte einen Toast aussprechen.", pronunciation: "ay-nın tost aus-şpre-hın" },
        { phrase: "Auf dein Wohl!", meaning: "Senin sağlığına!", context: "Kutlama", example: "Auf dein Wohl! Prost!", pronunciation: "auf dayn vol" },
        { phrase: "Feuerwerk", meaning: "Havai fişek", context: "Kutlama", example: "An Silvester gibt es Feuerwerk.", pronunciation: "foy-ır-verk" },
        { phrase: "Der Tannenbaum", meaning: "Yılbaşı çamı", context: "Noel", example: "Wir schmücken den Tannenbaum.", pronunciation: "der ta-nın-baum" }
    ]
};

// Unit 524: Ülkeler ve Milletler
export const u524: GermanPhraseUnit = {
    unitId: 524, title: "Ülkeler ve Milletler", phrases: [
        { phrase: "Woher kommst du?", meaning: "Nereden geliyorsun?", context: "Soru", example: "Woher kommst du? Aus der Türkei.", pronunciation: "vo-her komst du" },
        { phrase: "Ich komme aus der Türkei", meaning: "Türkiyeden geliyorum", context: "Köken", example: "Ich komme aus der Türkei.", pronunciation: "ıh ko-mı aus der tür-kay" },
        { phrase: "Sprichst du Deutsch?", meaning: "Almanca konuşuyor musun?", context: "Dil", example: "Sprichst du Deutsch? Ja, ein bisschen.", pronunciation: "şprıhst du doytş" },
        { phrase: "Ich spreche ein wenig", meaning: "Biraz konuşuyorum", context: "Dil", example: "Ich spreche ein wenig Deutsch.", pronunciation: "ıh şpre-hı ayn ve-nıh" },
        { phrase: "Meine Muttersprache ist...", meaning: "Ana dilim...", context: "Dil", example: "Meine Muttersprache ist Türkisch.", pronunciation: "may-nı mu-tır-şpra-hı ist" },
        { phrase: "Ich lebe im Ausland", meaning: "Yurtdışında yaşıyorum", context: "Yaşam", example: "Ich lebe seit zwei Jahren im Ausland.", pronunciation: "ıh le-bı ım aus-lant" },
        { phrase: "Es ist mein erstes Mal", meaning: "İlk defa geliyorum", context: "Deneyim", example: "Es ist mein erstes Mal in Deutschland.", pronunciation: "es ist mayn ers-tıs mal" },
        { phrase: "Ich liebe dein Land", meaning: "Ülkeni çok seviyorum", context: "Yorum", example: "Ich liebe dein Land, es ist wunderschön.", pronunciation: "ıh li-bı dayn lant" },
        { phrase: "Was ist deine Nationalität?", meaning: "Milliyetin ne?", context: "Soru", example: "Was ist deine Nationalität?", pronunciation: "vas ist day-nı na-tsio-na-li-tet" },
        { phrase: "Ich lerne Deutsch", meaning: "Almanca öğreniyorum", context: "Eğitim", example: "Ich lerne seit einem Jahr Deutsch.", pronunciation: "ıh ler-nı doytş" },
        { phrase: "Welche Sprachen sprichst du?", meaning: "Hangi dilleri konuşuyorsun?", context: "Soru", example: "Welche Sprachen sprichst du?", pronunciation: "vel-hı şpra-hın şprıhst du" },
        { phrase: "Ich reise um die Welt", meaning: "Dünyayı geziyorum", context: "Seyahat", example: "Eines Tages reise ich um die Welt.", pronunciation: "ıh ray-zı um di velt" },
        { phrase: "Es ist ein schönes Land", meaning: "Güzel bir ülke", context: "Yorum", example: "Deutschland ist ein schönes Land.", pronunciation: "es ist ayn şö-nıs lant" },
        { phrase: "Die Kultur ist anders", meaning: "Kültür farklı", context: "Yorum", example: "Die Kultur hier ist ganz anders.", pronunciation: "di kul-tur ist an-dırs" },
        { phrase: "Ich möchte... besuchen", meaning: "...ziyaret etmek istiyorum", context: "Plan", example: "Ich möchte Berlin besuchen.", pronunciation: "ıh möh-tı bı-zu-hın" }
    ]
};

// Unit 525: Temel Fiiller
export const u525: GermanPhraseUnit = {
    unitId: 525, title: "Temel Fiiller", phrases: [
        { phrase: "Was machst du?", meaning: "Ne yapıyorsun?", context: "Soru", example: "Was machst du gerade?", pronunciation: "vas mahst du" },
        { phrase: "Ich arbeite gerade", meaning: "Şu an çalışıyorum", context: "Durum", example: "Ich arbeite gerade, kann ich später anrufen?", pronunciation: "ıh ar-bay-tı gı-ra-dı" },
        { phrase: "Ich muss üben", meaning: "Pratik yapmam gerekiyor", context: "Eğitim", example: "Ich muss mehr Deutsch üben.", pronunciation: "ıh mus ü-bın" },
        { phrase: "Ich will mehr lernen", meaning: "Daha fazla öğrenmek istiyorum", context: "Eğitim", example: "Ich will mehr über Deutschland lernen.", pronunciation: "ıh vil mer ler-nın" },
        { phrase: "Kannst du mir helfen?", meaning: "Bana yardım edebilir misin?", context: "Yardım", example: "Kannst du mir bitte helfen?", pronunciation: "kanst du mir hel-fın" },
        { phrase: "Ich werde lernen", meaning: "Çalışacağım / Öğreneceğim", context: "Plan", example: "Ich werde morgen lernen.", pronunciation: "ıh ver-dı ler-nın" },
        { phrase: "Ich kann nicht", meaning: "Yapamıyorum", context: "Yetenek", example: "Ich kann das nicht allein machen.", pronunciation: "ıh kan nıht" },
        { phrase: "Schritt für Schritt", meaning: "Adım adım", context: "Deyim", example: "Lerne Deutsch Schritt für Schritt.", pronunciation: "şrıt für şrıt" },
        { phrase: "Was machst du gerade?", meaning: "Şu an ne yapıyorsun?", context: "Soru", example: "Was machst du gerade? Ich lese.", pronunciation: "vas mahst du gı-ra-dı" },
        { phrase: "Ich muss gehen", meaning: "Gitmem lazım", context: "Veda", example: "Tut mir leid, ich muss jetzt gehen.", pronunciation: "ıh mus ge-ın" },
        { phrase: "Ich möchte mich ausruhen", meaning: "Dinlenmek istiyorum", context: "Durum", example: "Ich möchte mich ein bisschen ausruhen.", pronunciation: "ıh möh-tı mıh aus-ru-ın" },
        { phrase: "Ich kann dir helfen", meaning: "Sana yardım edebilirim", context: "Yardım", example: "Ich kann dir dabei helfen.", pronunciation: "ıh kan dir hel-fın" },
        { phrase: "Ich versuche es", meaning: "Deniyorum", context: "Çaba", example: "Ich versuche es, es ist schwer.", pronunciation: "ıh fer-zu-hı es" },
        { phrase: "Ich werde es machen", meaning: "Yapacağım", context: "Söz", example: "Keine Sorge, ich werde es machen.", pronunciation: "ıh ver-dı es ma-hın" },
        { phrase: "Ich bevorzuge...", meaning: "...tercih ederim", context: "Tercih", example: "Ich bevorzuge Tee statt Kaffee.", pronunciation: "ıh bı-for-tsu-gı" }
    ]
};

// Unit 526: Artikeller (der/die/das)
export const u526: GermanPhraseUnit = {
    unitId: 526, title: "Artikeller (der/die/das)", phrases: [
        { phrase: "Was ist der Artikel?", meaning: "Artikeli ne?", context: "Gramer", example: "Was ist der Artikel von 'Haus'? Das.", pronunciation: "vas ist der ar-ti-kıl" },
        { phrase: "Der Mann geht spazieren", meaning: "Adam yürüyüşe çıkıyor", context: "Maskulin", example: "Der Mann geht jeden Tag spazieren.", pronunciation: "der man geyt şpa-tsi-rın" },
        { phrase: "Die Frau liest ein Buch", meaning: "Kadın kitap okuyor", context: "Feminin", example: "Die Frau liest ein interessantes Buch.", pronunciation: "di frau list ayn buh" },
        { phrase: "Das Kind spielt draußen", meaning: "Çocuk dışarıda oynuyor", context: "Neutrum", example: "Das Kind spielt draußen im Garten.", pronunciation: "das kint şpilt drau-sın" },
        { phrase: "Artikel immer lernen", meaning: "Artikeli her zaman öğren", context: "Tavsiye", example: "Man muss den Artikel immer mitlernen.", pronunciation: "ar-ti-kıl i-mır ler-nın" },
        { phrase: "Der Tisch ist groß", meaning: "Masa büyük", context: "Maskulin", example: "Der Tisch in der Küche ist groß.", pronunciation: "der tiş ist gros" },
        { phrase: "Die Tür ist offen", meaning: "Kapı açık", context: "Feminin", example: "Die Tür ist offen, komm rein!", pronunciation: "di tür ist o-fın" },
        { phrase: "Das Fenster ist geschlossen", meaning: "Pencere kapalı", context: "Neutrum", example: "Das Fenster ist geschlossen.", pronunciation: "das fens-tır ist gı-şlo-sın" },
        { phrase: "Ein/Eine/Ein", meaning: "Bir (belgisiz artikel)", context: "Gramer", example: "Ich habe einen Bruder und eine Schwester.", pronunciation: "ayn/ay-nı/ayn" },
        { phrase: "Kein/Keine/Kein", meaning: "Hiç/Yok (olumsuz artikel)", context: "Gramer", example: "Ich habe keine Geschwister.", pronunciation: "kayn/kay-nı/kayn" },
        { phrase: "Der Plural", meaning: "Çoğul hal", context: "Gramer", example: "Im Plural ist der Artikel immer 'die'.", pronunciation: "der plu-ral" },
        { phrase: "Das ist maskulin", meaning: "Bu erildir", context: "Gramer", example: "Das Wort 'Tisch' ist maskulin.", pronunciation: "das ist mas-ku-lin" },
        { phrase: "Das ist feminin", meaning: "Bu dişildir", context: "Gramer", example: "Das Wort 'Lampe' ist feminin.", pronunciation: "das ist fe-mi-nin" },
        { phrase: "Das ist neutral", meaning: "Bu nötrdür", context: "Gramer", example: "Das Wort 'Kind' ist neutral.", pronunciation: "das ist noy-tral" },
        { phrase: "Die Endung zeigt den Artikel", meaning: "Son ek artikeli gösterir", context: "Kural", example: "Wörter auf '-ung' sind immer feminin.", pronunciation: "di en-dung tsaygt den ar-ti-kıl" }
    ]
};

// Unit 527: Akkusativ Hali
export const u527: GermanPhraseUnit = {
    unitId: 527, title: "Akkusativ Hali", phrases: [
        { phrase: "Ich sehe den Mann", meaning: "Adamı görüyorum", context: "Akkusativ", example: "Ich sehe den Mann auf der Straße.", pronunciation: "ıh ze-ı den man" },
        { phrase: "Hast du einen Stift?", meaning: "Bir kalemin var mı?", context: "Akkusativ", example: "Hast du einen Stift für mich?", pronunciation: "hast du ay-nın ştift" },
        { phrase: "Ich kaufe das Buch", meaning: "Kitabı satın alıyorum", context: "Akkusativ", example: "Ich kaufe das Buch im Laden.", pronunciation: "ıh kau-fı das buh" },
        { phrase: "Für dich", meaning: "Senin için", context: "Edat", example: "Das Geschenk ist für dich.", pronunciation: "für dıh" },
        { phrase: "Gegen die Wand", meaning: "Duvara doğru", context: "Edat", example: "Er wirft den Ball gegen die Wand.", pronunciation: "ge-gın di vant" },
        { phrase: "Durch den Park", meaning: "Parkın içinden", context: "Edat", example: "Wir gehen durch den Park.", pronunciation: "durh den park" },
        { phrase: "Ohne mich", meaning: "Bensiz", context: "Edat", example: "Geht ohne mich, ich komme später.", pronunciation: "o-nı mıh" },
        { phrase: "Um die Ecke", meaning: "Köşeyi dönmek", context: "Edat", example: "Das Café ist um die Ecke.", pronunciation: "um di e-kı" },
        { phrase: "Der/Die/Das ändert sich nicht", meaning: "Die ve Das değişmez", context: "Kural", example: "Im Akkusativ ändert sich nur 'der' zu 'den'.", pronunciation: "en-dırt zıh nıht" },
        { phrase: "Ich suche meinen Schlüssel", meaning: "Anahtarımı arıyorum", context: "Akkusativ", example: "Ich suche meinen Schlüssel überall.", pronunciation: "ıh zu-hı may-nın şlü-sıl" },
        { phrase: "Trinkst du einen Kaffee?", meaning: "Bir kahve içer misin?", context: "Akkusativ", example: "Trinkst du einen Kaffee mit mir?", pronunciation: "trinkst du ay-nın ka-fe" },
        { phrase: "Ich esse eine Pizza", meaning: "Bir pizza yiyorum", context: "Akkusativ", example: "Ich esse eine große Pizza.", pronunciation: "ıh e-sı ay-nı pi-tsa" },
        { phrase: "Ich brauche das Auto", meaning: "Arabaya ihtiyacım var", context: "Akkusativ", example: "Ich brauche das Auto morgen.", pronunciation: "ıh brau-hı das au-to" },
        { phrase: "Ich lese einen Roman", meaning: "Bir roman okuyorum", context: "Akkusativ", example: "Ich lese gerade einen spannenden Roman.", pronunciation: "ıh le-zı ay-nın ro-man" },
        { phrase: "Kennst du mich?", meaning: "Beni tanıyor musun?", context: "Zamir", example: "Kennst du mich noch?", pronunciation: "kenst du mıh" }
    ]
};

// Unit 528: Sıfatlar
export const u528: GermanPhraseUnit = {
    unitId: 528, title: "Sıfatlar", phrases: [
        { phrase: "Das Wetter ist wunderbar", meaning: "Hava harika", context: "Sıfat", example: "Das Wetter ist heute wunderbar!", pronunciation: "das ve-tır ist vun-dır-bar" },
        { phrase: "Ein großes Haus", meaning: "Büyük bir ev", context: "Sıfat", example: "Sie wohnen in einem großen Haus.", pronunciation: "ayn gro-sıs haus" },
        { phrase: "Ein kleiner Hund", meaning: "Küçük bir köpek", context: "Sıfat", example: "Das ist ein kleiner süßer Hund.", pronunciation: "ayn klay-nır hunt" },
        { phrase: "Das ist teuer", meaning: "Bu pahalı", context: "Sıfat", example: "Das Restaurant ist sehr teuer.", pronunciation: "das ist toy-ır" },
        { phrase: "Das ist billig", meaning: "Bu ucuz", context: "Sıfat", example: "Dieses Kleid ist billig.", pronunciation: "das ist bi-lıh" },
        { phrase: "Der Film ist langweilig", meaning: "Film sıkıcı", context: "Sıfat", example: "Der Film war sehr langweilig.", pronunciation: "der film ist lang-vay-lıh" },
        { phrase: "Das Essen ist lecker", meaning: "Yemek lezzetli", context: "Sıfat", example: "Das Essen hier ist immer lecker.", pronunciation: "das e-sın ist le-kır" },
        { phrase: "Das ist möglich", meaning: "Bu mümkün", context: "Sıfat", example: "Alles ist möglich!", pronunciation: "das ist mög-lıh" },
        { phrase: "Das ist unmöglich", meaning: "Bu imkansız", context: "Sıfat", example: "Das ist unmöglich zu machen.", pronunciation: "das ist un-mög-lıh" },
        { phrase: "Schnell wie der Wind", meaning: "Rüzgar gibi hızlı", context: "Deyim", example: "Er läuft schnell wie der Wind.", pronunciation: "şnel vi der vint" },
        { phrase: "So schön!", meaning: "Çok güzel!", context: "Sıfat", example: "Der Sonnenuntergang ist so schön!", pronunciation: "zo şön" },
        { phrase: "Ein freundlicher Mensch", meaning: "Kibar bir insan", context: "Sıfat", example: "Er ist ein sehr freundlicher Mensch.", pronunciation: "ayn froynt-lı-hır menş" },
        { phrase: "Es ist wichtig", meaning: "Önemli", context: "Sıfat", example: "Es ist wichtig, Deutsch zu lernen.", pronunciation: "es ist vıh-tıh" },
        { phrase: "Das ist einfach", meaning: "Bu kolay", context: "Sıfat", example: "Diese Übung ist einfach.", pronunciation: "das ist ayn-fah" },
        { phrase: "Das ist schwer", meaning: "Bu zor", context: "Sıfat", example: "Deutsch ist manchmal schwer.", pronunciation: "das ist şver" }
    ]
};

// Unit 529: Edatlar
export const u529: GermanPhraseUnit = {
    unitId: 529, title: "Edatlar", phrases: [
        { phrase: "In der Stadt", meaning: "Şehirde", context: "Konum", example: "Ich wohne in der Stadt.", pronunciation: "in der ştat" },
        { phrase: "Auf dem Tisch", meaning: "Masanın üstünde", context: "Konum", example: "Das Buch liegt auf dem Tisch.", pronunciation: "auf dem tiş" },
        { phrase: "An der Wand", meaning: "Duvarda", context: "Konum", example: "Das Bild hängt an der Wand.", pronunciation: "an der vant" },
        { phrase: "Unter dem Bett", meaning: "Yatağın altında", context: "Konum", example: "Die Schuhe sind unter dem Bett.", pronunciation: "un-tır dem bet" },
        { phrase: "Über dem Tisch", meaning: "Masanın üzerinde", context: "Konum", example: "Die Lampe hängt über dem Tisch.", pronunciation: "ü-bır dem tiş" },
        { phrase: "Neben dem Schrank", meaning: "Dolabın yanında", context: "Konum", example: "Das Bett steht neben dem Schrank.", pronunciation: "ne-bın dem şrank" },
        { phrase: "Zwischen zwei Häusern", meaning: "İki evin arasında", context: "Konum", example: "Der Garten ist zwischen zwei Häusern.", pronunciation: "tsvi-şın tsvay hoy-zırn" },
        { phrase: "Vor dem Haus", meaning: "Evin önünde", context: "Konum", example: "Das Auto steht vor dem Haus.", pronunciation: "for dem haus" },
        { phrase: "Hinter dem Baum", meaning: "Ağacın arkasında", context: "Konum", example: "Die Katze versteckt sich hinter dem Baum.", pronunciation: "hin-tır dem baum" },
        { phrase: "Ich gehe zum Arzt", meaning: "Doktora gidiyorum", context: "Yön", example: "Ich gehe morgen zum Arzt.", pronunciation: "ıh ge-ı tsum artst" },
        { phrase: "Ich komme aus Deutschland", meaning: "Almanya'dan geliyorum", context: "Köken", example: "Ich komme aus Deutschland.", pronunciation: "ıh ko-mı aus doytş-lant" },
        { phrase: "Mit meinem Freund", meaning: "Arkadaşımla", context: "Birliktelik", example: "Ich gehe mit meinem Freund ins Kino.", pronunciation: "mit may-nım froynt" },
        { phrase: "Seit einem Jahr", meaning: "Bir yıldır", context: "Zaman", example: "Ich lerne seit einem Jahr Deutsch.", pronunciation: "zayt ay-nım yar" },
        { phrase: "Nach dem Unterricht", meaning: "Dersten sonra", context: "Zaman", example: "Nach dem Unterricht gehe ich essen.", pronunciation: "nah dem un-tır-rıht" },
        { phrase: "Von... bis...", meaning: "...dan ...a kadar", context: "Zaman", example: "Ich arbeite von 9 bis 17 Uhr.", pronunciation: "fon... bis..." }
    ]
};

// Unit 530: A1 Tekrar
export const u530: GermanPhraseUnit = {
    unitId: 530, title: "A1 Tekrar", phrases: [
        { phrase: "Ich bin bereit", meaning: "Hazırım", context: "Durum", example: "Ich bin bereit für die Prüfung.", pronunciation: "ıh bin bı-rayt" },
        { phrase: "Noch einmal von vorne", meaning: "Baştan bir daha", context: "Tekrar", example: "Noch einmal von vorne, bitte!", pronunciation: "noh ayn-mal fon for-nı" },
        { phrase: "Das weiß ich", meaning: "Bunu biliyorum", context: "Bilgi", example: "Das weiß ich schon.", pronunciation: "das vays ıh" },
        { phrase: "Langsam aber sicher", meaning: "Yavaş ama emin", context: "Deyim", example: "Langsam aber sicher lerne ich Deutsch.", pronunciation: "lang-zam a-bır zi-hır" },
        { phrase: "Alles klar?", meaning: "Her şey anlaşıldı mı?", context: "Soru", example: "Alles klar? Dann machen wir weiter.", pronunciation: "a-lıs klar" },
        { phrase: "So weit, so gut", meaning: "Şimdiye kadar iyi", context: "Deyim", example: "So weit, so gut. Machen wir weiter.", pronunciation: "zo vayt zo gut" },
        { phrase: "Gut gemacht!", meaning: "Aferin! İyi iş!", context: "Tebrik", example: "Gut gemacht! Weiter so!", pronunciation: "gut gı-maht" },
        { phrase: "Ich habe viel gelernt", meaning: "Çok şey öğrendim", context: "Değerlendirme", example: "In diesem Kurs habe ich viel gelernt.", pronunciation: "ıh ha-bı fil gı-lernt" },
        { phrase: "Übung macht den Meister", meaning: "Pratik ustayı yaratır", context: "Deyim", example: "Übung macht den Meister, übe jeden Tag!", pronunciation: "ü-bung maht den mays-tır" },
        { phrase: "Ich kann es schaffen", meaning: "Başarabilirim", context: "Motivasyon", example: "Ich kann es schaffen, ich glaube daran.", pronunciation: "ıh kan es şa-fın" },
        { phrase: "Auf geht's!", meaning: "Hadi başlayalım!", context: "Motivasyon", example: "Auf geht's! A2 wartet auf uns!", pronunciation: "auf geyts" },
        { phrase: "Das macht nichts", meaning: "Sorun değil", context: "Teselli", example: "Das macht nichts, versuch es nochmal.", pronunciation: "das maht nıhts" },
        { phrase: "Ein guter Anfang", meaning: "İyi bir başlangıç", context: "Değerlendirme", example: "Das ist ein guter Anfang!", pronunciation: "ayn gu-tır an-fang" },
        { phrase: "Weiter so!", meaning: "Böyle devam!", context: "Tebrik", example: "Weiter so, du machst das super!", pronunciation: "vay-tır zo" },
        { phrase: "Auf das nächste Level!", meaning: "Bir sonraki seviyeye!", context: "Motivasyon", example: "Auf das nächste Level! A2 kommt!", pronunciation: "auf das nehs-tı le-vıl" }
    ]
};

const unitMap: { [key: number]: GermanPhraseUnit } = {
    501: u501, 502: u502, 503: u503, 504: u504, 505: u505,
    506: u506, 507: u507, 508: u508, 509: u509, 510: u510,
    511: u511, 512: u512, 513: u513, 514: u514, 515: u515,
    516: u516, 517: u517, 518: u518, 519: u519, 520: u520,
    521: u521, 522: u522, 523: u523, 524: u524, 525: u525,
    526: u526, 527: u527, 528: u528, 529: u529, 530: u530,
};

export function getGermanA1PhrasesForUnit(unitId: number): GermanPhraseUnit {
    return unitMap[unitId] || u501;
}
