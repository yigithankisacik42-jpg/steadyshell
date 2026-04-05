/**
 * SteadyShell Phrases - Almanca A2 (Units 531-560)
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

// Unit 531: Geçmiş Zaman (Perfekt)
export const u531: GermanPhraseUnit = {
    unitId: 531, title: "Geçmiş Zaman (Perfekt)", phrases: [
        { phrase: "Ich habe gestern gearbeitet", meaning: "Dün çalıştım", context: "Geçmiş Zaman", example: "Ich habe gestern bis 20 Uhr gearbeitet.", pronunciation: "ıh ha-bı ges-tırn ar-bay-tet" },
        { phrase: "Was hast du gemacht?", meaning: "Ne yaptın?", context: "Soru", example: "Was hast du am Wochenende gemacht?", pronunciation: "vas hast du gı-maht" },
        { phrase: "Ich bin nach Berlin gefahren", meaning: "Berlin'e gittim", context: "Hareket", example: "Ich bin mit dem Zug nach Berlin gefahren.", pronunciation: "ıh bin nah ber-lin gı-fa-rın" },
        { phrase: "Hast du das gehört?", meaning: "Bunu duydun mu?", context: "Soru", example: "Hast du die Nachrichten gehört?", pronunciation: "hast du das gı-hört" },
        { phrase: "Wir haben Pizza gegessen", meaning: "Pizza yedik", context: "Yemek", example: "Gestern Abend haben wir Pizza gegessen.", pronunciation: "vir ha-bın pit-sa gı-ge-sın" },
        { phrase: "Ich habe dich angerufen", meaning: "Seni aradım", context: "İletişim", example: "Ich habe dich gestern angerufen, aber du warst nicht da.", pronunciation: "ıh ha-bı dıh an-gı-ru-fın" },
        { phrase: "Hat es dir gefallen?", meaning: "Hoşuna gitti mi?", context: "Soru", example: "Hat es dir in Berlin gefallen?", pronunciation: "hat es dir gı-fa-lın" },
        { phrase: "Ich habe alles verstanden", meaning: "Her şeyi anladım", context: "Anlama", example: "Ich habe alles verstanden, danke.", pronunciation: "ıh ha-bı a-lıs fer-ştan-dın" },
        { phrase: "Er ist spät gekommen", meaning: "Geç geldi", context: "Zaman", example: "Er ist gestern sehr spät nach Hause gekommen.", pronunciation: "er ist şpet gı-ko-mın" },
        { phrase: "Wir sind im Park spazieren gegangen", meaning: "Parkta yürüyüş yaptık", context: "Aktivite", example: "Wir sind im Park spazieren gegangen.", pronunciation: "vir zint ım park şpa-tsi-rın gı-gan-gın" },
        { phrase: "Hast du deine Hausaufgaben gemacht?", meaning: "Ödevlerini yaptın mı?", context: "Okul", example: "Hast du deine Hausaufgaben schon gemacht?", pronunciation: "hast du day-nı haus-auf-ga-bın gı-maht" },
        { phrase: "Ich habe das Buch gelesen", meaning: "Kitabı okudum", context: "Hobi", example: "Ich habe das Buch in zwei Tagen gelesen.", pronunciation: "ıh ha-bı das buh gı-le-zın" },
        { phrase: "Sie hat mir geholfen", meaning: "Bana yardım etti", context: "Yardım", example: "Sie hat mir bei der Arbeit geholfen.", pronunciation: "zi hat mir gı-hol-fın" },
        { phrase: "Ich habe meine Schlüssel vergessen", meaning: "Anahtarlarımı unuttum", context: "Durum", example: "Ich habe meine Schlüssel zu Hause vergessen.", pronunciation: "ıh ha-bı may-nı şlü-sıl fer-ge-sın" },
        { phrase: "Wir haben viel gelacht", meaning: "Çok güldük", context: "Duygu", example: "Gestern Abend haben wir viel gelacht.", pronunciation: "vir ha-bın fil gı-laht" }
    ]
};

// Unit 532: Geçmiş Zaman 2 (Präteritum)
export const u532: GermanPhraseUnit = {
    unitId: 532, title: "Geçmiş Zaman 2 (Präteritum)", phrases: [
        { phrase: "Ich war gestern zu Hause", meaning: "Dün evdeydim", context: "Durum", example: "Ich war gestern den ganzen Tag zu Hause.", pronunciation: "ıh var ges-tırn tsu hau-zı" },
        { phrase: "Hattest du Zeit?", meaning: "Vaktin var mıydı?", context: "Soru", example: "Hattest du gestern Zeit für mich?", pronunciation: "ha-test du tsayt" },
        { phrase: "Es war sehr schön", meaning: "Çok güzeldi", context: "Yorum", example: "Das Konzert war sehr schön.", pronunciation: "es var zer şön" },
        { phrase: "Ich hatte Glück", meaning: "Şanslıydım", context: "Durum", example: "Ich hatte wirklich großes Glück.", pronunciation: "ıh ha-tı glük" },
        { phrase: "Wo warst du?", meaning: "Neredeydin?", context: "Soru", example: "Wo warst du am Montag?", pronunciation: "vo varst du" },
        { phrase: "Wir waren im Urlaub", meaning: "Tatildeydik", context: "Seyahat", example: "Letzte Woche waren wir im Urlaub.", pronunciation: "vir va-rın ım ur-laup" },
        { phrase: "Das Wetter war schlecht", meaning: "Hava kötüydü", context: "Hava", example: "Das Wetter war leider sehr schlecht.", pronunciation: "das ve-tır var şleht" },
        { phrase: "Ich hatte keine Lust", meaning: "Canım istemiyordu", context: "Duygu", example: "Ich hatte keine Lust, ins Kino zu gehen.", pronunciation: "ıh ha-tı kay-nı lust" },
        { phrase: "Er war mein Lehrer", meaning: "O benim öğretmenimdi", context: "Tanıtma", example: "Er war früher mein Lehrer.", pronunciation: "er var mayn le-rır" },
        { phrase: "Wir hatten viel Arbeit", meaning: "Çok işimiz vardı", context: "İş", example: "Letzte Woche hatten wir viel Arbeit.", pronunciation: "vir ha-tın fil ar-bayt" },
        { phrase: "Wie war dein Tag?", meaning: "Günün nasıldı?", context: "Soru", example: "Wie war dein Tag im Büro?", pronunciation: "vi var dayn tag" },
        { phrase: "Ich hatte Hunger", meaning: "Açtım", context: "Durum", example: "Ich hatte so großen Hunger.", pronunciation: "ıh ha-tı hun-gır" },
        { phrase: "Es war einmal...", meaning: "Bir varmış bir yokmuş...", context: "Masal", example: "Es war einmal ein kleiner Junge.", pronunciation: "es var ayn-mal" },
        { phrase: "Warst du schon mal in Berlin?", meaning: "Hiç Berlin'de bulundun mu?", context: "Soru", example: "Warst du schon mal in Berlin?", pronunciation: "varst du şon mal in ber-lin" },
        { phrase: "Ich hatte Angst", meaning: "Korkmuştum", context: "Duygu", example: "Ich hatte ein bisschen Angst im Dunkeln.", pronunciation: "ıh ha-tı angst" }
    ]
};

// Unit 533: Restoranda
export const u533: GermanPhraseUnit = {
    unitId: 533, title: "Restoranda", phrases: [
        { phrase: "Einen Tisch für zwei, bitte", meaning: "İki kişilik bir masa lütfen", context: "Restoran", example: "Einen Tisch für zwei Personen, bitte.", pronunciation: "ay-nın tiş für tsvay bi-tı" },
        { phrase: "Die Speisekarte, bitte", meaning: "Menü lütfen", context: "Sipariş", example: "Können wir die Speisekarte haben, bitte?", pronunciation: "di şpay-zı-kar-tı bi-tı" },
        { phrase: "Ich möchte bestellen", meaning: "Sipariş vermek istiyorum", context: "Sipariş", example: "Hallo, ich möchte gerne bestellen.", pronunciation: "ıh möh-tı bı-şte-lın" },
        { phrase: "Was können Sie empfehlen?", meaning: "Ne önerebilirsiniz?", context: "Soru", example: "Was können Sie heute empfehlen?", pronunciation: "vas kö-nın zi emp-fe-lın" },
        { phrase: "Ich nehme das Schnitzel", meaning: "Şinitzel alıyorum", context: "Sipariş", example: "Ich nehme das Schnitzel mit Pommes.", pronunciation: "ıh ne-mı das şnit-sıl" },
        { phrase: "Guten Appetit!", meaning: "Afiyet olsun!", context: "Yemek", example: "Guten Appetit, lassen Sie es sich schmecken!", pronunciation: "gu-tın a-pe-tit" },
        { phrase: "Zahlen, bitte!", meaning: "Hesap lütfen!", context: "Ödeme", example: "Wir möchten gerne zahlen, bitte.", pronunciation: "tsa-lın bi-tı" },
        { phrase: "Haben Sie ein Tagesgericht?", meaning: "Günün yemeği var mı?", context: "Soru", example: "Haben Sie heute ein spezielles Tagesgericht?", pronunciation: "ha-bın zi ayn ta-gıs-gı-rıht" },
        { phrase: "Zusammen oder getrennt?", meaning: "Birlikte mi ayrı mı?", context: "Ödeme", example: "Möchten Sie zusammen oder getrennt zahlen?", pronunciation: "tsu-za-mın o-dır gı-trent" },
        { phrase: "Das stimmt so", meaning: "Üstü kalsın", context: "Bahşiş", example: "Hier sind 20 Euro, das stimmt so.", pronunciation: "das ştımt zo" },
        { phrase: "Es hat sehr gut geschmeckt", meaning: "Tadı çok güzeldi", context: "Yorum", example: "Danke, es hat sehr gut geschmeckt.", pronunciation: "es hat zer gut gı-şmekt" },
        { phrase: "Ich habe eine Reservierung", meaning: "Rezervasyonum var", context: "Giriş", example: "Guten Abend, ich habe eine Reservierung auf den Namen Müller.", pronunciation: "ıh ha-bı ay-nı re-zer-vi-rung" },
        { phrase: "Können wir Salz haben?", meaning: "Tuz alabilir miyiz?", context: "İstek", example: "Können wir bitte noch etwas Salz haben?", pronunciation: "kö-nın vir zalts ha-bın" },
        { phrase: "Ein Glas Wasser, bitte", meaning: "Bir bardak su lütfen", pronunciation: "ayn glas va-sır bi-tı", context: "Sipariş", example: "Ein Glas Leitungswasser, bitte." },
        { phrase: "Wo sind die Toiletten?", meaning: "Tuvaletler nerede?", context: "Soru", example: "Entschuldigung, wo sind die Toiletten?", pronunciation: "vo zint di to-a-le-tın" }
    ]
};

// Unit 534: Alışveriş
export const u534: GermanPhraseUnit = {
    unitId: 534, title: "Alışveriş", phrases: [
        { phrase: "Kann ich Ihnen helfen?", meaning: "Size yardım edebilir miyim?", context: "Mağaza", example: "Guten Tag, kann ich Ihnen helfen?", pronunciation: "kan ıh i-nın hel-fın" },
        { phrase: "Ich schaue mich nur um", meaning: "Sadece bakınıyorum", context: "Mağaza", example: "Danke, ich schaue mich nur um.", pronunciation: "ıh şau-ı mıh nur um" },
        { phrase: "Haben Sie das in Rot?", meaning: "Bunun kırmızısı var mı?", context: "Soru", example: "Haben Sie dieses Kleid auch in Rot?", pronunciation: "ha-bın zi das in rot" },
        { phrase: "Kann ich das anprobieren?", meaning: "Bunu deneyebilir miyim?", context: "Soru", example: "Kann ich das T-Shirt anprobieren?", pronunciation: "kan ıh das an-pro-bi-rın" },
        { phrase: "Wo ist die Umkleidekabine?", meaning: "Giyinme kabini nerede?", context: "Soru", example: "Wo ist bitte die Umkleidekabine?", pronunciation: "vo ist di um-klay-dı-ka-bi-nı" },
        { phrase: "Das ist mir zu teuer", meaning: "Bu bana çok pahalı", context: "Yorum", example: "Das ist mir leider zu teuer.", pronunciation: "das ist mir tsu toy-ır" },
        { phrase: "Nehmen Sie Kreditkarten?", meaning: "Kredi kartı kabul ediyor musunuz?", context: "Ödeme", example: "Nehmen Sie Kreditkarten oder nur bar?", pronunciation: "ne-mın zi kre-dit-kar-tın" },
        { phrase: "Ich suche ein Geschenk", meaning: "Bir hediye arıyorum", context: "Durum", example: "Ich suche ein Geschenk für meine Mutter.", pronunciation: "ıh zu-hı ayn gı-şenk" },
        { phrase: "Wo ist die Kasse?", meaning: "Kasa nerede?", context: "Soru", example: "Entschuldigung, wo ist hier die Kasse?", pronunciation: "vo ist di ka-sı" },
        { phrase: "Haben Sie das eine Nummer größer?", meaning: "Bunun bir numara büyüğü var mı?", context: "Soru", example: "Haben Sie die Schuhe eine Nummer größer?", pronunciation: "ha-bın zi das ay-nı nu-mır grö-sır" },
        { phrase: "Haben Sie das im Angebot?", meaning: "Bu indirimde mi?", context: "Soru", example: "Haben Sie dieses Modell im Angebot?", pronunciation: "ha-bın zi das ım an-gı-bot" },
        { phrase: "Ich nehme es", meaning: "Onu alıyorum", context: "Sipariş", example: "Ja, das gefällt mir. Ich nehme es.", pronunciation: "ıh ne-mı es" },
        { phrase: "Das steht Ihnen gut", meaning: "Bu size çok yakıştı", context: "Yorum", example: "Das Kleid steht Ihnen wirklich gut.", pronunciation: "das ştet i-nın gut" },
        { phrase: "Haben Sie eine Quittung?", meaning: "Fişiniz/Makbuzunuz var mı?", context: "Soru", example: "Haben Sie eine Quittung für den Umtausch?", pronunciation: "ha-bın zi ay-nı kvi-tung" },
        { phrase: "Das ist ein Sonderangebot", meaning: "Bu özel bir kampanya", context: "Mağaza", example: "Das ist heute ein Sonderangebot.", pronunciation: "das ist ayn zon-dır-an-gı-bot" }
    ]
};

// Unit 535: Seyahat Planları
export const u535: GermanPhraseUnit = {
    unitId: 535, title: "Seyahat Planları", phrases: [
        { phrase: "Wohin fliegst du im Urlaub?", meaning: "Tatilde nereye uçuyorsun?", context: "Soru", example: "Wohin fliegst du diesen Sommer im Urlaub?", pronunciation: "vo-hin fligst du ım ur-laup" },
        { phrase: "Ich möchte nach Spanien reisen", meaning: "İspanya'ya seyahat etmek istiyorum", context: "Plan", example: "Ich möchte nächstes Jahr nach Spanien reisen.", pronunciation: "ıh möh-tı nah şpa-ni-ın ray-zın" },
        { phrase: "Wie lange bleibst du dort?", meaning: "Orada ne kadar kalıyorsun?", context: "Soru", example: "Wie lange bleibst du dort? Zwei Wochen.", pronunciation: "vi lan-gı blaypst du dort" },
        { phrase: "Ich buche einen Flug", meaning: "Bir uçuş ayarlıyorum/rezerv ediyorum", context: "Eylem", example: "Ich buche morgen meinen Flug nach Berlin.", pronunciation: "ıh bu-hı ay-nın flug" },
        { phrase: "Hast du deinen Pass?", meaning: "Pasaportun yanında mı?", context: "Soru", example: "Hast du deinen Pass dabei?", pronunciation: "hast du day-nın pas" },
        { phrase: "Ich packe meinen Koffer", meaning: "Valizimi topluyorum", context: "Eylem", example: "Ich packe heute Abend meinen Koffer.", pronunciation: "ıh pa-kı may-nın ko-fır" },
        { phrase: "Wann geht die Reise los?", meaning: "Seyahat ne zaman başlıyor?", context: "Soru", example: "Wann geht die Reise eigentlich los?", pronunciation: "van geyt di ray-zı los" },
        { phrase: "Wir fahren mit dem Auto", meaning: "Arabayla gidiyoruz", context: "Ulaşım", example: "Wir fahren dieses Jahr mit dem Auto nach Italien.", pronunciation: "vir fa-rın mit dem au-to" },
        { phrase: "Ich brauche ein Visum", meaning: "Vizeye ihtiyacım var", context: "Durum", example: "Für diese Reise brauche ich ein Visum.", pronunciation: "ıh brau-hı ayn vi-zum" },
        { phrase: "Gute Reise!", meaning: "İyi yolculuklar!", context: "Dilek", example: "Gute Reise und viel Spaß!", pronunciation: "gu-tı ray-zı" },
        { phrase: "Hast du eine Unterkunft?", meaning: "Kalacak yerin var mı?", context: "Soru", example: "Hast du schon eine Unterkunft gebucht?", pronunciation: "hast du ay-nı un-tırl-kunft" },
        { phrase: "Ich mache Urlaub am Meer", meaning: "Deniz kıyısında tatil yapıyorum", context: "Plan", example: "Ich mache dieses Jahr Urlaub am Meer.", pronunciation: "ıh ma-hı ur-laup am mer" },
        { phrase: "Wir besichtigen die Stadt", meaning: "Şehri geziyoruz/inceliyoruz", context: "Aktivite", example: "Morgen besichtigen wir die Altstadt.", pronunciation: "vir bı-zıhti-gın di ştat" },
        { phrase: "Ich fotografiere viel", meaning: "Çok fotoğraf çekiyorum", context: "Aktivite", example: "Auf Reisen fotografiere ich immer sehr viel.", pronunciation: "ıh fo-to-gra-fi-rı fil" },
        { phrase: "Komm gut nach Hause!", meaning: "Eve sağ salim dön!", context: "Dilek", example: "Tschüss! Komm gut nach Hause!", pronunciation: "kom gut nah hau-zı" }
    ]
};

// Unit 536: Otel Rezervasyonu
export const u536: GermanPhraseUnit = {
    unitId: 536, title: "Otel Rezervasyonu", phrases: [
        { phrase: "Haben Sie ein Zimmer frei?", meaning: "Boş odanız var mı?", context: "Soru", example: "Guten Tag, haben Sie noch ein Zimmer frei?", pronunciation: "ha-bın zi ayn tsi-mır fray" },
        { phrase: "Ich habe ein Zimmer reserviert", meaning: "Bir oda ayırmıştım", context: "Durum", example: "Ich habe ein Einzelzimmer auf den Namen Müller reserviert.", pronunciation: "ıh ha-bı ayn tsi-mır re-zer-virt" },
        { phrase: "Ist das Frühstück inklusive?", meaning: "Kahvaltı dahil mi?", context: "Soru", example: "Ist das Frühstück im Preis inklusive?", pronunciation: "ist das frü-ştük in-klu-zi-vı" },
        { phrase: "Ein Doppelzimmer, bitte", meaning: "Çift kişilik bir oda lütfen", context: "Sipariş", example: "Wir hätten gerne ein Doppelzimmer für drei Nächte.", pronunciation: "ayn do-pıl-tsi-mır bi-tı" },
        { phrase: "Wie viel kostet eine Nacht?", meaning: "Bir gece ne kadar?", context: "Soru", example: "Wie viel kostet eine Nacht mit Frühstück?", pronunciation: "vi fil kos-tet ay-nı naht" },
        { phrase: "Haben Sie WLAN?", meaning: "İnternet/WLAN var mı?", context: "Soru", example: "Haben Sie WLAN auf dem Zimmer?", pronunciation: "ha-bı zi ve-lan" },
        { phrase: "Um wie viel Uhr ist der Check-out?", meaning: "Çıkış saati kaçta?", context: "Soru", example: "Um wie viel Uhr ist morgen der Check-out?", pronunciation: "um vi fil ur ist der çek-aut" },
        { phrase: "Kann ich mit Karte zahlen?", meaning: "Kartla ödeyebilir miyim?", context: "Soru", example: "Kann ich im Hotel mit Kreditkarte zahlen?", pronunciation: "kan ıh mit kar-tı tsa-lın" },
        { phrase: "Gibt es einen Parkplatz?", meaning: "Otopark var mı?", context: "Soru", example: "Gibt es einen Parkplatz für Hotelgäste?", pronunciation: "gipt es ay-nın park-plats" },
        { phrase: "Das Zimmer ist zu laut", meaning: "Oda çok gürültülü", context: "Şikayet", example: "Das Zimmer ist leider viel zu laut.", pronunciation: "das tsi-mır ist tsu laut" },
        { phrase: "Ich brauche ein neues Handtuch", meaning: "Yeni bir havluya ihtiyacım var", context: "İstek", example: "Können Sie mir bitte ein neues Handtuch bringen?", pronunciation: "ıh brau-hı ayn noy-ıs hant-tuh" },
        { phrase: "Gibt es eine Klimaanlage?", meaning: "Klima var mı?", context: "Soru", example: "Hat das Zimmer eine Klimaanlage?", pronunciation: "gipt es ay-nı kli-ma-an-la-gı" },
        { phrase: "Können Sie mich um 7 Uhr wecken?", meaning: "Beni saat 7'de uyandırabilir misiniz?", context: "İstek", example: "Könnten Sie mich morgen bitte um 7 Uhr wecken?", pronunciation: "kö-nın zi mıh um zi-bın ur ve-kın" },
        { phrase: "Wo wird das Frühstück serviert?", meaning: "Kahvaltı nerede servis ediliyor?", context: "Soru", example: "Entschuldigung, wo wird das Frühstück serviert?", pronunciation: "vo virt das frü-ştük ser-virt" },
        { phrase: "Ich möchte noch eine Nacht bleiben", meaning: "Bir gece daha kalmak istiyorum", context: "İstek", example: "Ich möchte gerne noch eine Nacht länger bleiben.", pronunciation: "ıh möh-tı noh ay-nı naht blay-bın" }
    ]
};

// Unit 537: Havalimanında
export const u537: GermanPhraseUnit = {
    unitId: 537, title: "Havalimanında", phrases: [
        { phrase: "Ihr Reisepass, bitte", meaning: "Pasaportunuz lütfen", context: "Kontrol", example: "Guten Tag, Ihren Reisepass und Ihr Ticket, bitte.", pronunciation: "ir ray-zı-pas bi-tı" },
        { phrase: "Haben Sie Gepäck?", meaning: "Bagajınız var mı?", context: "Soru", example: "Haben Sie Gepäck zum Aufgeben?", pronunciation: "ha-bın zi gı-pek" },
        { phrase: "Hier ist meine Bordkarte", meaning: "İşte biniş kartım", context: "Kontrol", example: "Hier ist meine Bordkarte für den Flug nach München.", pronunciation: "hir ist may-nı bort-kar-tı" },
        { phrase: "Wo ist das Gate B12?", meaning: "B12 kapısı nerede?", context: "Soru", example: "Entschuldigung, wissen Sie, wo Gate B12 ist?", pronunciation: "vo ist das geyt be tsvölf" },
        { phrase: "Der Flug hat Verspätung", meaning: "Uçuş rötar yaptı/gecikti", context: "Haber", example: "Der Flug nach Berlin hat leider eine Stunde Verspätung.", pronunciation: "der flug hat fer-şpe-tung" },
        { phrase: "Handgepäck", meaning: "El bagajı", context: "Bilgi", example: "Das ist nur mein Handgepäck.", pronunciation: "hant-gı-pek" },
        { phrase: "Sicherheitskontrolle", meaning: "Güvenlik kontrolü", context: "Terminal", example: "Wo ist die Sicherheitskontrolle?", pronunciation: "zi-hır-hayts-kon-tro-lı" },
        { phrase: "Fensterplatz oder Gangplatz?", meaning: "Cam kenarı mı koridor mu?", context: "Soru", example: "Möchten Sie einen Fensterplatz oder einen Gangplatz?", pronunciation: "fens-tırl-plats o-dır gang-plats" },
        { phrase: "Bitte schnallen Sie sich an", meaning: "Lütfen kemerlerinizi bağlayın", context: "Talimat", example: "Wir starten gleich, bitte schnallen Sie sich an.", pronunciation: "bi-tı şna-lın zi zıh an" },
        { phrase: "Gepäckausgabe", meaning: "Bagaj teslim/alımı", context: "Terminal", example: "Wo ist hier die Gepäckausgabe?", pronunciation: "gı-pı-kaus-ga-bı" },
        { phrase: "Mein Koffer ist weg", meaning: "Valizim kayboldu", context: "Durum", example: "Hilfe, mein Koffer ist nicht angekommen!", pronunciation: "mayn ko-fır ist veg" },
        { phrase: "Wann landet das Flugzeug?", meaning: "Uçak ne zaman iniyor?", context: "Soru", example: "Wissen Sie, wann das Flugzeug aus Hamburg landet?", pronunciation: "van lan-det das flug-tsoyg" },
        { phrase: "Ich muss umsteigen", meaning: "Aktarma yapmam lazım", context: "Seyahat", example: "Ich muss in Frankfurt am Main umsteigen.", pronunciation: "ıh mus um-ştay-gın" },
        { phrase: "Flughafen-Transfer", meaning: "Havalimanı transferi", context: "Ulaşım", example: "Wie komme ich zum Flughafen-Transfer?", pronunciation: "flug-ha-fın trans-fer" },
        { phrase: "Boarding abgeschlossen", meaning: "Uçağa biniş kapandı", context: "Haber", example: "Das Boarding für Flug LH402 ist abgeschlossen.", pronunciation: "bor-ding ap-gı-şlo-sın" }
    ]
};

// Unit 538: Doktorda
export const u538: GermanPhraseUnit = {
    unitId: 538, title: "Doktorda", phrases: [
        { phrase: "Ich habe Kopfschmerzen", meaning: "Başım ağrıyor", context: "Sağlık", example: "Ich habe seit heute Morgen starke Kopfschmerzen.", pronunciation: "ıh ha-bı kopf-şmert-tsın" },
        { phrase: "Mir tut der Rücken weh", meaning: "Sırtım ağrıyor", context: "Sağlık", example: "Mir tut der Rücken weh, ich kann nicht gut sitzen.", pronunciation: "mir tut der rü-kın ve" },
        { phrase: "Ich habe Fieber", meaning: "Ateşim var", context: "Sağlık", example: "Ich fühle mich schlecht, ich habe Fieber.", pronunciation: "ıh ha-bı fi-bır" },
        { phrase: "Sie müssen zum Arzt gehen", meaning: "Doktora gitmelisiniz", context: "Tavsiye", example: "Sie sehen krank aus, Sie müssen zum Arzt gehen.", pronunciation: "zi müs-sın tsum artst ge-ın" },
        { phrase: "Haben Sie einen Termin?", meaning: "Randevunuz var mı?", context: "Soru", example: "Guten Tag, haben Sie bei uns einen Termin?", pronunciation: "ha-bın zi ay-nın ter-min" },
        { phrase: "Was fehlt Ihnen?", meaning: "Şikayetiniz nedir?", context: "Doktor", example: "Guten Tag, Herr Müller. Was fehlt Ihnen heute?", pronunciation: "vas felt i-nın" },
        { phrase: "Machen Sie den Oberkörper frei", meaning: "Üst tarafınızı soyun", context: "Talimat", example: "Machen Sie bitte den Oberkörper frei für die Untersuchung.", pronunciation: "ma-hın zi den o-bır-kör-pır fray" },
        { phrase: "Haben Sie Allergien?", meaning: "Alerjileriniz var mı?", context: "Soru", example: "Haben Sie Allergien gegen bestimmte Medikamente?", pronunciation: "ha-bın zi a-ler-gi-ın" },
        { phrase: "Ich verschreibe Ihnen ein Medikament", meaning: "Size bir ilaç yazıyorum", context: "Doktor", example: "Ich verschreibe Ihnen ein Medikament gegen den Husten.", pronunciation: "ıh fer-şray-bı i-nın ayn me-di-ka-ment" },
        { phrase: "Gute Besserung!", meaning: "Geçmiş olsun!", context: "Dilek", example: "Hier ist Ihr Rezept. Gute Besserung!", pronunciation: "gu-tı be-sı-rung" },
        { phrase: "Wann soll ich wiederkommen?", meaning: "Ne zaman tekrar gelmeliyim?", context: "Soru", example: "Wann soll ich zur Kontrolle wiederkommen?", pronunciation: "van zol ıh vi-dır-ko-mın" },
        { phrase: "Haben Sie Schmerzen?", meaning: "Ağrınız var mı?", context: "Soru", example: "Haben Sie Schmerzen beim Atmen?", pronunciation: "ha-bın zi şmert-tsın" },
        { phrase: "Ich bin erkältet", meaning: "Üşüttüm/Soğuk almışım", context: "Sağlık", example: "Ich bin stark erkältet und habe Schnupfen.", pronunciation: "ıh bin er-kel-tet" },
        { phrase: "Öffnen Sie den Mund", meaning: "Ağzınızı açın", context: "Talimat", example: "Öffnen Sie bitte den Mund und sagen Sie 'Aah'.", pronunciation: "öf-nın zi den munt" },
        { phrase: "Ich brauche eine Krankmeldung", meaning: "İş göremezlik raporuna ihtiyacım var", context: "İstek", example: "Ich brauche eine Krankmeldung für meinen Arbeitgeber.", pronunciation: "ıh brau-hı ay-nı krank-mel-dung" }
    ]
};

// Unit 539: Eczanede
export const u539: GermanPhraseUnit = {
    unitId: 539, title: "Eczanede", phrases: [
        { phrase: "Ich habe ein Rezept", meaning: "Bir reçetem var", context: "Eczane", example: "Guten Tag, ich habe hier ein Rezept vom Arzt.", pronunciation: "ıh ha-bı ayn re-tsept" },
        { phrase: "Haben Sie etwas gegen Husten?", meaning: "Öksürük için bir şeyiniz var mı?", context: "Soru", example: "Haben Sie etwas Gutes gegen starken Husten?", pronunciation: "ha-bın zi et-vas ge-gın hus-tın" },
        { phrase: "Wie oft muss ich das nehmen?", meaning: "Bunu ne sıklıkla almalıyım?", context: "Soru", example: "Wie oft am Tag muss ich das Medikament nehmen?", pronunciation: "vi oft mus ıh das ne-mın" },
        { phrase: "Vor oder nach dem Essen?", meaning: "Yemekten önce mi sonra mı?", context: "Soru", example: "Soll ich die Tabletten vor oder nach dem Essen einnehmen?", pronunciation: "for o-dır nah dem e-sın" },
        { phrase: "Zweimal täglich eine Tablette", meaning: "Günde iki kez bir tablet", context: "Talimat", example: "Nehmen Sie bitte zweimal täglich eine Tablette mit Wasser.", pronunciation: "tsvay-mal teg-lıh ay-nı ta-ble-tı" },
        { phrase: "Haben Sie Nebenwirkungen?", meaning: "Yan etkileriniz var mı?", context: "Soru", example: "Haben diese Tropfen irgendwelche Nebenwirkungen?", pronunciation: "ha-bın zi ne-bın-vir-kun-gın" },
        { phrase: "Was kostet das Medikament?", meaning: "İlacın fiyatı ne kadar?", context: "Soru", example: "Was kostet das Medikament ohne Rezept?", pronunciation: "vas kos-tet das me-di-ka-ment" },
        { phrase: "Ich brauche Schmerztabletten", meaning: "Ağrı kesiciye ihtiyacım var", context: "İstek", example: "Ich brauche bitte eine Packung Schmerztabletten.", pronunciation: "ıh brau-hı şmerts-ta-ble-tın" },
        { phrase: "Lesen Sie die Packungsbeilage", meaning: "Prospektüsü okuyun", context: "Talimat", example: "Bitte lesen Sie vor der Einnahme die Packungsbeilage.", pronunciation: "le-zın zi di pa-kungs-bay-la-gı" },
        { phrase: "Gute Besserung!", meaning: "Geçmiş olsun!", context: "Dilek", example: "Hier ist Ihre Medizin. Gute Besserung!", pronunciation: "gu-tı be-sı-rung" },
        { phrase: "Ich brauche Pflaster", meaning: "Yarabandına ihtiyacım var", context: "İstek", example: "Haben Sie auch wasserfeste Pflaster?", pronunciation: "ıh brau-hı p-flas-tırl" },
        { phrase: "Nasenspray für Kinder", meaning: "Çocuklar için burun spreyi", context: "Soru", example: "Haben Sie ein sanftes Nasenspray für Kinder?", pronunciation: "na-zın-şprey für kin-dırl" },
        { phrase: "Ich habe Halsschmerzen", meaning: "Boğaz ağrım var", context: "Durum", example: "Ich habe starke Halsschmerzen, haben Sie Lutschtabletten?", pronunciation: "ıh ha-bı hals-şmert-tsın" },
        { phrase: "Hier ist Ihr Wechselgeld", meaning: "İşte para üstünüz", context: "Ödeme", example: "Das macht 15 Euro. Hier ist Ihr Wechselgeld.", pronunciation: "hir ist ir vek-sıl-gelt" },
        { phrase: "Danke, auf Wiedersehen!", meaning: "Teşekkürler, hoşça kalın!", context: "Veda", example: "Vielen Dank für die Hilfe. Auf Wiedersehen!", pronunciation: "dan-kı auf vi-dır-ze-ın" }
    ]
};

// Unit 540: Meslekler 2
export const u540: GermanPhraseUnit = {
    unitId: 540, title: "Meslekler 2", phrases: [
        { phrase: "Was bist du von Beruf?", meaning: "Mesleğin ne?", context: "Soru", example: "Was bist du eigentlich von Beruf? Ich bin Ingenieur.", pronunciation: "vas bist du fon bı-ruf" },
        { phrase: "Ich arbeite als Verkäufer", meaning: "Satış elemanı olarak çalışıyorum", context: "İş", example: "Momentan arbeite ich als Verkäufer in einem Supermarkt.", pronunciation: "ıh ar-bay-tı als fer-koy-fır" },
        { phrase: "Wo arbeitest du?", meaning: "Nerede çalışıyorsun?", context: "Soru", example: "Wo arbeitest du? In einer großen Fabrik.", pronunciation: "vo ar-bay-test du" },
        { phrase: "Ich habe viel Arbeit", meaning: "Çok işim var", context: "Durum", example: "Diese Woche habe ich wirklich sehr viel Arbeit.", pronunciation: "ıh ha-bı fil ar-bayt" },
        { phrase: "Der Chef ist nett", meaning: "Patron kibar/iyi biri", context: "Yorum", example: "Mein neuer Chef ist wirklich sehr nett.", pronunciation: "der şef ist net" },
        { phrase: "Ich suche eine neue Stelle", meaning: "Yeni bir iş arıyorum", context: "Durum", example: "Ich bin unzufrieden und suche eine neue Stelle.", pronunciation: "ıh zu-hı ay-nı noy-ı şte-lı" },
        { phrase: "Ich habe Feierabend", meaning: "Mesaim bitti / Paydos", context: "Zaman", example: "Es ist 17 Uhr, ich habe endlich Feierabend!", pronunciation: "ıh ha-bı fay-ır-a-bınt" },
        { phrase: "Wie sind deine Arbeitszeiten?", meaning: "Çalışma saatlerin nasıl?", context: "Soru", example: "Wie sind bei dir die Arbeitszeiten? Von 8 bis 16 Uhr.", pronunciation: "vi zint day-nı ar-bayts-tsay-tın" },
        { phrase: "Ich verdiene gut", meaning: "İyi kazanıyorum", context: "Para", example: "In meinem neuen Job verdiene ich sehr gut.", pronunciation: "ıh fer-di-nı gut" },
        { phrase: "Bist du selbstständig?", meaning: "Kendi işini mi yapıyorsun (serbest çalışan mı)?", context: "Soru", example: "Arbeitest du in einer Firma oder bist du selbstständig?", pronunciation: "bist du zelp-ştın-dıh" },
        { phrase: "Ich mache eine Ausbildung", meaning: "Mesleki eğitim yapıyorum", context: "Durum", example: "Ich mache eine Ausbildung zum Mechaniker.", pronunciation: "ıh ma-hı ay-nı aus-bil-dung" },
        { phrase: "Meine Kollegen sind freundlich", meaning: "Meslektaşlarım arkadaş canlısı", context: "Yorum", example: "Ich mag mein Team, meine Kollegen sind sehr freundlich.", pronunciation: "may-nı ko-le-gın zint froynt-lıh" },
        { phrase: "Ich arbeite im Homeoffice", meaning: "Evden çalışıyorum", context: "Durum", example: "Zweimal pro Woche arbeite ich im Homeoffice.", pronunciation: "ıh ar-bay-tı ım hom-o-fis" },
        { phrase: "Ich habe ein Vorstellungsgespräch", meaning: "İş görüşmem var", context: "Durum", example: "Morgen habe ich ein wichtiges Vorstellungsgespräch.", pronunciation: "ıh ha-bı ayn for-şte-lungs-gı-şpreh" },
        { phrase: "Herzlichen Glückwunsch zum neuen Job!", meaning: "Yeni işin hayırlı olsun/tebrikler!", context: "Dilek", example: "Ich habe gehört, du hast die Stelle! Herzlichen Glückwunsch!", pronunciation: "herts-lı-hın glük-vunş tsum noy-ın tsob" }
    ]
};

// Unit 541: İş Görüşmesi
export const u541: GermanPhraseUnit = {
    unitId: 541, title: "İş Görüşmesi", phrases: [
        { phrase: "Stellen Sie sich vor", meaning: "Kendinizi tanıtın", context: "Görüşme", example: "Bitte stellen Sie sich kurz vor.", pronunciation: "şte-lın zi zıh for" },
        { phrase: "Was sind Ihre Stärken?", meaning: "Güçlü yönleriniz nelerdir?", context: "Soru", example: "Wo liegen Ihre Stärken? Ich bin sehr teamfähig.", pronunciation: "vas zint i-rı şter-kın" },
        { phrase: "Was sind Ihre Schwächen?", meaning: "Zayıf yönleriniz nelerdir?", context: "Soru", example: "Welche Schwächen haben Sie?", pronunciation: "vas zint i-rı şve-hın" },
        { phrase: "Warum möchten Sie hier arbeiten?", meaning: "Neden burada çalışmak istiyorsunuz?", context: "Soru", example: "Warum haben Sie sich bei uns beworben?", pronunciation: "va-rum möh-tın zi hir ar-bay-tın" },
        { phrase: "Ich bin sehr motiviert", meaning: "Çok motiveyim", context: "Duygu", example: "Ich bin sehr motiviert, Neues zu lernen.", pronunciation: "ıh bin zer mo-ti-virt" },
        { phrase: "Haben Sie Fragen an uns?", meaning: "Bize sorularınız var mı?", context: "Soru", example: "Das war's. Haben Sie noch Fragen an uns?", pronunciation: "ha-bın zi fra-gın an uns" },
        { phrase: "Ich habe viel Erfahrung", meaning: "Çok tecrübem var", context: "Durum", example: "Ich habe schon zehn Jahre Erfahrung in diesem Bereich.", pronunciation: "ıh ha-bı fil er-fa-rung" },
        { phrase: "Das Gehalt ist gut", meaning: "Maaş iyi", context: "Para", example: "Wissen Sie schon, wie das Gehalt ist?", pronunciation: "das gı-halt ist gut" },
        { phrase: "Wir melden uns bei Ihnen", meaning: "Size geri döneceğiz/haber vereceğiz", context: "Kapanış", example: "Danke für das Gespräch. Wir melden uns bei Ihnen.", pronunciation: "vir mel-dın uns bay i-nın" },
        { phrase: "Ich spreche drei Sprachen", meaning: "Üç dil konuşuyorum", context: "Beceriler", example: "In meinem Job ist es wichtig, dass ich drei Sprachen spreche.", pronunciation: "ıh şpre-hı dray şpra-hın" },
        { phrase: "Ich arbeite gerne im Team", meaning: "Takım çalışmasını severim", context: "Beceriler", example: "Ich arbeite gerne in einem internationalen Team.", pronunciation: "ıh ar-bay-tı ger-nı ım tim" },
        { phrase: "Was ist Ihre Aufgabe?", meaning: "Göreviniz nedir?", context: "Soru", example: "Was wäre meine genaue Aufgabe in der Firma?", pronunciation: "vas ist i-rı auf-ga-bı" },
        { phrase: "Ich bin flexibel", meaning: "Esneğim", context: "Özellik", example: "Ich bin bei den Arbeitszeiten sehr flexibel.", pronunciation: "ıh bin flek-si-bıl" },
        { phrase: "Viel Erfolg!", meaning: "Başarılar!", context: "Dilek", example: "Viel Erfolg bei deinem Vorstellungsgespräch!", pronunciation: "fil er-folg" },
        { phrase: "Wann kann ich anfangen?", meaning: "Ne zaman başlayabilirim?", context: "Soru", example: "Falls ich die Stelle bekomme, wann kann ich anfangen?", pronunciation: "van kan ıh an-fan-gın" }
    ]
};

// Unit 542: Telefonda
export const u542: GermanPhraseUnit = {
    unitId: 542, title: "Telefonda", phrases: [
        { phrase: "Hallo, hier spricht Müller", meaning: "Merhaba, ben Müller (konuşan Müller)", context: "Giriş", example: "Hallo, hier spricht Thomas Müller. Guten Tag.", pronunciation: "ha-lo hir şpriht mü-lır" },
        { phrase: "Kann ich Herrn Schmidt sprechen?", meaning: "Bay Schmidt ile görüşebilir miyim?", context: "Soru", example: "Hallo, kann ich bitte Herrn Schmidt sprechen?", pronunciation: "kan ıh hern şmit şpre-hın" },
        { phrase: "Einen Moment, bitte", meaning: "Bir saniye lütfen", context: "İstek", example: "Warten Sie einen Moment, bitte.", pronunciation: "ay-nın mo-ment bi-tı" },
        { phrase: "Ich verbinde Sie", meaning: "Sizi bağlıyorum", context: "İşlem", example: "Einen Augenblick, ich verbinde Sie mit Herrn Schmidt.", pronunciation: "ıh fer-bin-dı zi" },
        { phrase: "Er ist gerade nicht da", meaning: "Şu an burada değil", context: "Bilgi", example: "Er ist gerade in einem Meeting und nicht da.", pronunciation: "er ist gı-ra-dı niht da" },
        { phrase: "Wollen Sie eine Nachricht hinterlassen?", meaning: "Bir mesaj bırakmak ister misiniz?", context: "Soru", example: "Wollen Sie eine Nachricht für Frau Müller hinterlassen?", pronunciation: "vo-lın zi ay-nı nah-rıht hin-tırl-la-sın" },
        { phrase: "Können Sie mich zurückrufen?", meaning: "Beni geri arayabilir misiniz?", context: "Soru", example: "Können Sie mich bitte später unter dieser Nummer zurückrufen?", pronunciation: "kö-nın zi mıh tsu-rük-ru-fın" },
        { phrase: "Meine Nummer ist...", meaning: "Numaram...", context: "Bilgi", example: "Meine Telefonnummer ist 0123-456789.", pronunciation: "may-nı nu-mır ist" },
        { phrase: "Ich habe Sie nicht verstanden", meaning: "Sizi anlamadım", context: "Sorun", example: "Entschuldigung, ich habe Sie leider nicht gut verstanden.", pronunciation: "ıh ha-bı zi niht fer-ştan-dın" },
        { phrase: "Können Sie das wiederholen?", meaning: "Bunu tekrar edebilir misiniz?", context: "İstek", example: "Können Sie Ihren Namen bitte noch einmal wiederholen?", pronunciation: "kö-nın zi das vi-dır-ho-lın" },
        { phrase: "Die Leitung ist besetzt", meaning: "Hat meşgul", context: "Sorun", example: "Die Leitung ist leider dauernd besetzt.", pronunciation: "di lay-tung ist bı-zetst" },
        { phrase: "Ich rufe später noch mal an", meaning: "Daha sonra tekrar ararım", context: "Veda", example: "Kein Problem, ich rufe später noch einmal an.", pronunciation: "ıh ru-fı şpe-tırl noh mal an" },
        { phrase: "Vielen Dank für Ihren Anruf", meaning: "Aradığınız için teşekkürler", context: "Kapanış", example: "Vielen Dank für Ihren Anruf. Auf Wiederhören!", pronunciation: "fi-lın dank für i-rın an-ruf" },
        { phrase: "Auf Wiederhören", meaning: "Telefonda hoşça kalın (tekrar görüşmek üzere)", context: "Veda", example: "Auf Wiederhören, Herr Schmidt!", pronunciation: "auf vi-dır-hö-rın" },
        { phrase: "Falsch verbunden", meaning: "Yanlış numara / Yanlış bağlandı", context: "Sorun", example: "Entschuldigung, ich bin wohl falsch verbunden.", pronunciation: "falş fer-bun-dın" }
    ]
};

// Unit 543: E-posta Yazma
export const u543: GermanPhraseUnit = {
    unitId: 543, title: "E-posta Yazma", phrases: [
        { phrase: "Sehr geehrte Damen und Herren", meaning: "Sayın Baylar ve Bayanlar", context: "Selamlama", example: "Sehr geehrte Damen und Herren, ich schreibe Ihnen wegen...", pronunciation: "zer gı-eyr-tı da-mın unt her-ın" },
        { phrase: "Lieber Hans / Liebe Maria", meaning: "Sevgili Hans / Sevgili Maria", context: "Selamlama", example: "Lieber Hans, wie geht es dir?", pronunciation: "li-bır hans / li-bı ma-ri-a" },
        { phrase: "Ich schreibe Ihnen, weil...", meaning: "Size yazıyorum çünkü...", context: "Giriş", example: "Ich schreibe Ihnen, weil ich eine Frage habe.", pronunciation: "ıh şray-bı i-nın vayl" },
        { phrase: "Vielen Dank für Ihre E-Mail", meaning: "E-postanız için teşekkürler", context: "Cevap", example: "Vielen Dank für Ihre schnelle E-Mail.", pronunciation: "fi-lın dank für i-rı i-meyl" },
        { phrase: "Im Anhang finden Sie...", meaning: "Ekte ... bulabilirsiniz", context: "Dosya", example: "Im Anhang finden Sie meinen Lebenslauf.", pronunciation: "ım an-hang fin-dın zi" },
        { phrase: "Ich freue mich auf Ihre Antwort", meaning: "Cevabınızı bekliyorum / Cevabınız beni mutlu eder", context: "Kapanış", example: "Ich freue mich sehr auf Ihre Antwort.", pronunciation: "ıh froy-ı mıh auf i-rı ant-vort" },
        { phrase: "Mit freundlichen Grüßen", meaning: "Saygılarımla", context: "Kapanış", example: "Mit freundlichen Grüßen, Ihr Thomas Müller.", pronunciation: "mit froynt-lı-hın grü-sın" },
        { phrase: "Beste Grüße / Viele Grüße", meaning: "En iyi dileklerimle / Selamlar", context: "Kapanış", example: "Viele Grüße aus Berlin von Maria.", pronunciation: "bes-tı grü-sı / fi-lı grü-sı" },
        { phrase: "Können Sie mir helfen?", meaning: "Bana yardım edebilir misiniz?", context: "Soru", example: "Können Sie mir bitte bei diesem Problem helfen?", pronunciation: "kö-nın zi mir hel-fın" },
        { phrase: "Ich habe eine Frage zu...", meaning: "... hakkında bir sorum var", context: "Soru", example: "Ich habe eine kurze Frage zu Ihrem Angebot.", pronunciation: "ıh ha-bı ay-nı fra-gı tsu" },
        { phrase: "Entschuldigen Sie die Verspätung", meaning: "Gecikme için kusura bakmayın", context: "Özür", example: "Bitte entschuldigen Sie die verspätete Antwort.", pronunciation: "ent-şul-di-gın zi di fer-şpe-tung" },
        { phrase: "Mit freundlicher Unterstützung", meaning: "Dostane destekle", context: "Kapanış", example: "Mit freundlicher Unterstützung unserer Partner.", pronunciation: "mit froynt-lı-hır un-tırl-ştüt-tsung" },
        { phrase: "Schreiben Sie mir bald", meaning: "Bana yakında yazın", context: "İstek", example: "Schreiben Sie mir bitte bald zurück.", pronunciation: "şray-bın zi mir balt" },
        { phrase: "Ich bin zur Zeit nicht im Büro", meaning: "Şu an ofiste değilim", context: "Bilgi", example: "Ich bin zur Zeit im Urlaub und nicht im Büro.", pronunciation: "ıh bin tsur tsayt niht ım bü-ro" },
        { phrase: "Leiten Sie die E-Mail weiter", meaning: "E-postayı iletin", context: "Talimat", example: "Können Sie diese E-Mail bitte an den Chef weiterleiten?", pronunciation: "lay-tın zi di i-meyl vay-tırl" }
    ]
};

// Unit 544: Duygular
export const u544: GermanPhraseUnit = {
    unitId: 544, title: "Duygular", phrases: [
        { phrase: "Ich bin glücklich", meaning: "Mutluyum", context: "Duygu", example: "Ich bin heute sehr glücklich.", pronunciation: "ıh bin glük-lıh" },
        { phrase: "Ich bin traurig", meaning: "Üzgünüm", context: "Duygu", example: "Warum bist du so traurig?", pronunciation: "ıh bin trau-rıh" },
        { phrase: "Ich habe Angst", meaning: "Korkuyorum", context: "Duygu", example: "Ich habe Angst vor Spinnen.", pronunciation: "ıh ha-bı angst" },
        { phrase: "Ich bin wütend", meaning: "Kızgınım", context: "Duygu", example: "Er ist wütend, weil er den Zug verpasst hat.", pronunciation: "ıh bin vü-tınt" },
        { phrase: "Ich bin müde", meaning: "Yorgunum", context: "Duygu", example: "Es war ein langer Tag, ich bin müde.", pronunciation: "ıh bin mü-dı" },
        { phrase: "Ich bin überrascht", meaning: "Şaşırdım", context: "Duygu", example: "Ich bin wirklich überrascht von deinem Besuch.", pronunciation: "ıh bin ü-bır-raşt" },
        { phrase: "Ich bin stolz auf dich", meaning: "Seninle gurur duyuyorum", context: "Duygu", example: "Du hast die Prüfung bestanden! Ich bin stolz auf dich.", pronunciation: "ıh bin ştolts auf dıh" },
        { phrase: "Das freut mich", meaning: "Buna sevindim", context: "Duygu", example: "Das freut mich sehr für dich.", pronunciation: "das froyt mıh" },
        { phrase: "Wie fühlst du dich?", meaning: "Nasıl hissediyorsun?", context: "Soru", example: "Wie fühlst du dich heute Morgen?", pronunciation: "vi füls t du dıh" },
        { phrase: "Ich bin nervös", meaning: "Gerginim/Heyecanlıyım (negatif)", context: "Duygu", example: "Vor der Prüfung bin ich immer sehr nervös.", pronunciation: "ıh bin ner-vös" },
        { phrase: "Das ist mir peinlich", meaning: "Bu benim için utanç verici", context: "Duygu", example: "Oh je, das ist mir wirklich peinlich.", pronunciation: "das ist mir payn-lıh" },
        { phrase: "Ich langweile mich", meaning: "Sıkılıyorum", context: "Duygu", example: "Mir ist langweilig, ich langweile mich.", pronunciation: "ıh lang-vay-lı mıh" },
        { phrase: "Du fehlst mir", meaning: "Seni özlüyorum", context: "Duygu", example: "Komm bald zurück, du fehlst mir so sehr.", pronunciation: "du felst mir" },
        { phrase: "Kopf hoch!", meaning: "Başını dik tut! / Üzülme!", context: "Duygu", example: "Kopf hoch, alles wird gut!", pronunciation: "kopf hoh" },
        { phrase: "Sei nicht böse", meaning: "Kızma / Küsme", context: "Duygu", example: "Bitte sei nicht böse auf mich.", pronunciation: "zay niht bö-zı" }
    ]
};

// Unit 545: Karakter Özellikleri
export const u545: GermanPhraseUnit = {
    unitId: 545, title: "Karakter Özellikleri", phrases: [
        { phrase: "Er ist sehr freundlich", meaning: "O çok nazik/arkadaş canlısı", context: "Özellik", example: "Mein Nachbar ist ein sehr freundlicher Mann.", pronunciation: "er ist zer froynt-lıh" },
        { phrase: "Sie ist intelligent", meaning: "O zeki", context: "Özellik", example: "Sie ist eine sehr intelligente Schülerin.", pronunciation: "zi ist in-te-li-gent" },
        { phrase: "Mein Vater ist geduldig", meaning: "Babam sabırlıdır", context: "Özellik", example: "Mein Vater ist immer sehr geduldig mit mir.", pronunciation: "mayn fa-tırl ist gı-dul-dıh" },
        { phrase: "Sei mutig!", meaning: "Cesur ol!", context: "Dilek", example: "Sei mutig und probier etwas Neues!", pronunciation: "zay mu-tıh" },
        { phrase: "Er ist ehrlich", meaning: "O dürüst", context: "Özellik", example: "Er ist ein ehrlicher Mensch, er lügt nie.", pronunciation: "er ist eyr-lıh" },
        { phrase: "Sie ist hilfsbereit", meaning: "O yardımsever", context: "Özellik", example: "Maria ist sehr hilfsbereit und hilft jedem.", pronunciation: "zi ist hilfs-bı-rayt" },
        { phrase: "Er ist ein bisschen faul", meaning: "O biraz tembel", context: "Özellik", example: "Manchmal ist er ein bisschen faul am Wochenende.", pronunciation: "er ist ayn bis-hın faul" },
        { phrase: "Sie ist fleißig", meaning: "O çalışkan", context: "Özellik", example: "Die Studenten sind alle sehr fleißig.", pronunciation: "zi ist flay-sıh" },
        { phrase: "Mein Freund ist lustig", meaning: "Arkadaşım eğlencelidir/komiktir", context: "Özellik", example: "Thomas erzählt immer Witze, er ist sehr lustig.", pronunciation: "mayn froynt ist lus-tıh" },
        { phrase: "Er ist ruhig", meaning: "O sakin", context: "Özellik", example: "Er ist ein ruhiger Mensch und spricht nicht viel.", pronunciation: "er ist ru-ıh" },
        { phrase: "Bist du schüchtern?", meaning: "Utangaç mısın?", context: "Soru", example: "Bist du vor fremden Menschen schüchtern?", pronunciation: "bist du şüh-tırn" },
        { phrase: "Sie ist pünktlich", meaning: "O dakiktir", context: "Özellik", example: "In Deutschland ist es wichtig, pünktlich zu sein.", pronunciation: "zi ist pünk-lıh" },
        { phrase: "Er ist unordentlich", meaning: "O dağınıktır", context: "Özellik", example: "In seinem Zimmer ist alles unordentlich.", pronunciation: "er ist un-or-dent-lıh" },
        { phrase: "Sie ist kreativ", meaning: "O yaratıcıdır", context: "Özellik", example: "Maria malt sehr gut, sie ist sehr kreativ.", pronunciation: "zi ist kre-a-tiv" },
        { phrase: "Er ist zuverlässig", meaning: "O güvenilirdir", context: "Özellik", example: "Man kann ihm vertrauen, er ist sehr zuverlässig.", pronunciation: "er ist tsu-fır-le-sıh" }
    ]
};

// Unit 546: Spor ve Fitness
export const u546: GermanPhraseUnit = {
    unitId: 546, title: "Spor ve Fitness", phrases: [
        { phrase: "Ich treibe Sport", meaning: "Spor yapıyorum", context: "Aktivite", example: "Ich treibe dreimal pro Woche Sport.", pronunciation: "ıh tray-bı şport" },
        { phrase: "Ich gehe joggen", meaning: "Koşuya/Jogginge gidiyorum", context: "Aktivite", example: "Jeden Samstagmorgen gehe ich joggen.", pronunciation: "ıh ge-ı co-gın" },
        { phrase: "Fußball spielen", meaning: "Futbol oynamak", context: "Spor", example: "Spielst du gerne Fußball mit deinen Freunden?", pronunciation: "füs-bal şpi-lın" },
        { phrase: "Ich bin im Fitnessstudio", meaning: "Fitness salonundayım", context: "Durum", example: "Nach der Arbeit gehe ich oft ins Fitnessstudio.", pronunciation: "ıh bin ım fit-nes-ştu-di-o" },
        { phrase: "Sport ist gesund", meaning: "Spor sağlıklıdır", context: "Yorum", example: "Man muss Sport treiben, denn Sport ist gesund.", pronunciation: "şport ist gı-zunt" },
        { phrase: "Ich mache Yoga", meaning: "Yoga yapıyorum", context: "Aktivite", example: "Yoga hilft mir, mich zu entspannen.", pronunciation: "ıh ma-hı yo-ga" },
        { phrase: "Schwimmen gehen", meaning: "Yüzmeye gitmek", context: "Aktivite", example: "Im Sommer gehen wir oft im See schwimmen.", pronunciation: "şvi-mın ge-ın" },
        { phrase: "Hast du Muskelkater?", meaning: "Kas ağrın var mı?", context: "Soru", example: "Nach dem Training habe ich totalen Muskelkater.", pronunciation: "hast du mus-kıl-ka-tırl" },
        { phrase: "Ich fahre Fahrrad", meaning: "Bisiklet sürüyorum", context: "Aktivite", example: "Ich fahre jeden Tag mit dem Fahrrad zur Arbeit.", pronunciation: "ıh fa-rı fa-rat" },
        { phrase: "Wir haben gewonnen", meaning: "Kazandık", context: "Sonuç", example: "Unsere Mannschaft hat heute 2:1 gewonnen.", pronunciation: "vir ha-bın gı-vo-nın" },
        { phrase: "Viel Bewegung", meaning: "Çok hareket", context: "Tavsiye", example: "Viel Bewegung ist wichtig für den Körper.", pronunciation: "fil bı-ve-gung" },
        { phrase: "Wandern im Wald", meaning: "Ormanda doğa yürüyüşü", context: "Aktivite", example: "Am Wochenende gehen wir im Wald wandern.", pronunciation: "van-dırn ım valt" },
        { phrase: "Ausrüstung kaufen", meaning: "Ekipman satın almak", context: "Alışveriş", example: "Ich muss mir neue Sport-Ausrüstung kaufen.", pronunciation: "aus-rüs-tung kau-fın" },
        { phrase: "Ein gesundes Leben", meaning: "Sağlıklı bir yaşam", context: "Kavram", example: "Ich versuche, ein gesundes Leben zu führen.", pronunciation: "ayn gı-zun-dıs le-bın" },
        { phrase: "Hast du Zeit für Tennis?", meaning: "Tenis için vaktin var mı?", context: "Soru", example: "Spielst du mit mir heute Abend eine Runde Tennis?", pronunciation: "hast du tsayt für te-nis" }
    ]
};

// Unit 547: Müzik ve Sanat
export const u547: GermanPhraseUnit = {
    unitId: 547, title: "Müzik ve Sanat", phrases: [
        { phrase: "Ich höre gerne Musik", meaning: "Müzik dinlemeyi severim", context: "Hobi", example: "Ich höre beim Arbeiten gerne Musik.", pronunciation: "ıh hö-rı ger-nı mu-zik" },
        { phrase: "Spielst du ein Instrument?", meaning: "Bir enstrüman çalıyor musun?", context: "Soru", example: "Spielst du ein Instrument wie Klavier oder Geige?", pronunciation: "şpilst du ayn in-ştru-ment" },
        { phrase: "Ich gehe ins Konzert", meaning: "Konsere gidiyorum", context: "Aktivite", example: "Morgen Abend gehe ich ins Konzert von meiner Lieblingsband.", pronunciation: "ıh ge-ı ins kon-tsert" },
        { phrase: "Das Gemälde ist schön", meaning: "Tablo güzel", context: "Sanat", example: "Das Gemälde im Museum ist wirklich wunderschön.", pronunciation: "das gı-mel-dı ist şön" },
        { phrase: "Ich mag moderne Kunst", meaning: "Modern sanatı severim", context: "Sanat", example: "Magst du eher klassische oder moderne Kunst?", pronunciation: "ıh mag mo-der-nı kunst" },
        { phrase: "Singen macht Spaß", meaning: "Şarkı söylemek eğlencelidir", context: "Aktivite", example: "Ich singe im Chor, das macht viel Spaß.", pronunciation: "zi-nın maht şpas" },
        { phrase: "Ein berühmter Maler", meaning: "Ünlü bir ressam", context: "Sanat", example: "Picasso war ein sehr berühmter Maler.", pronunciation: "ayn bı-rüm-tırl ma-lır" },
        { phrase: "Die Ausstellung besuchen", meaning: "Sergiyi ziyaret etmek", context: "Aktivite", example: "Wollen wir am Sonntag die neue Kunst-Ausstellung besuchen?", pronunciation: "di aus-şte-lung bı-zu-hın" },
        { phrase: "Ich höre Klassik", meaning: "Klasik müzik dinlerim", context: "Müzik", example: "Zum Entspannen höre ich oft Klassik.", pronunciation: "ıh hö-rı kla-sik" },
        { phrase: "Kannst du tanzen?", meaning: "Dans edebilir misin?", context: "Soru", example: "Ich kann nicht gut tanzen, aber ich lerne es.", pronunciation: "kanst du tan-tsın" },
        { phrase: "Laut oder leise?", meaning: "Yüksek sesli mi alçak sesli mi?", context: "Soru", example: "Magst du Musik lieber laut oder leise?", pronunciation: "laut o-dır lay-zı" },
        { phrase: "Eine Eintrittskarte kaufen", meaning: "Giriş bileti satın almak", context: "Alışveriş", example: "Wo kann ich online eine Eintrittskarte kaufen?", pronunciation: "ay-nı ayn-trits-kar-tı kau-fın" },
        { phrase: "Das ist ein Meisterwerk", meaning: "Bu bir başyapıt", context: "Sanat", example: "Seine neue Sinfonie ist ein echtes Meisterwerk.", pronunciation: "das ist ayn may-ştır-verk" },
        { phrase: "Ich zeichne gerne", meaning: "Resim çizmeyi (karakalem) severim", context: "Hobi", example: "In meiner Freizeit zeichne ich oft kleine Skizzen.", pronunciation: "ıh tsayh-nı ger-nı" },
        { phrase: "Bist du musikalisch?", meaning: "Müzik kulağın var mı? / Müzikal misin?", context: "Soru", example: "Meine ganze Familie ist sehr musikalisch.", pronunciation: "bist du mu-zi-ka-liş" }
    ]
};

// Unit 548: Sinema ve Dizi
export const u548: GermanPhraseUnit = {
    unitId: 548, title: "Sinema ve Dizi", phrases: [
        { phrase: "Wollen wir ins Kino gehen?", meaning: "Sinemaya gidelim mi?", context: "İstek", example: "Hast du Lust? Wollen wir heute Abend ins Kino gehen?", pronunciation: "vo-lın vir ins ki-no ge-ın" },
        { phrase: "Welchen Film schauen wir?", meaning: "Hangi filmi izliyoruz?", context: "Soru", example: "Ich weiß nicht. Welchen Film schauen wir uns an?", pronunciation: "vel-hın film şau-ın vir" },
        { phrase: "Ich mag Komödien", meaning: "Komedi filmlerini severim", context: "Hobi", example: "Ich mag am liebsten lustige Komödien zum Lachen.", pronunciation: "ıh mag ko-mö-di-ın" },
        { phrase: "Der Film war spannend", meaning: "Film heyecanlıydı (sürükleyiciydi)", context: "Yorum", example: "Der Thriller gestern Abend war wirklich sehr spannend.", pronunciation: "der film var şpa-nınt" },
        { phrase: "Schläfst du beim Film ein?", meaning: "Film sırasında uyuyakalıyor musun?", context: "Soru", example: "Nein, wenn es spannend ist, schlafe ich beim Film nicht ein.", pronunciation: "şlepst du baym film ayn" },
        { phrase: "Eine neue Folge schauen", meaning: "Yeni bir bölüm izlemek", context: "Aktivite", example: "Heute Abend schauen wir die letzte Folge der Serie.", pronunciation: "ay-nı noy-ı fol-gı şau-ın" },
        { phrase: "Ich bin ein Serienjunkie", meaning: "Dizi bağımlısıyım", context: "Durum", example: "Ich liebe Netflix, ich bin ein echter Serienjunkie.", pronunciation: "ıh bin ayn ze-ri-ın-can-ki" },
        { phrase: "Popcorn und Cola", meaning: "Patlamış mısır ve kola", context: "Yiyecek", example: "Im Kino gehören Popcorn und Cola einfach dazu.", pronunciation: "pop-korn unt ko-la" },
        { phrase: "Wann beginnt die Vorstellung?", meaning: "Gösterim ne zaman başlıyor?", context: "Soru", example: "Um wie viel Uhr beginnt die nächste Vorstellung?", pronunciation: "van bı-gint di for-şte-lung" },
        { phrase: "Der Schauspieler ist gut", meaning: "Erkek oyuncu iyi", context: "Yorum", example: "Ich finde, dieser Schauspieler ist sehr talentiert.", pronunciation: "der şau-şpi-lır ist gut" },
        { phrase: "Synchronisiert oder Untertitel?", meaning: "Dublaj mı altyazı mı?", context: "Soru", example: "Schauen wir den Film lieber synchronisiert oder mit Untertiteln?", pronunciation: "zün-hro-ni-virt o-dır un-tırl-ti-tıl" },
        { phrase: "Basiert auf einer wahren Geschichte", meaning: "Gerçek bir hikayeye dayanıyor", context: "Bilgi", example: "Dieser bewegende Film basiert auf einer wahren Geschichte.", pronunciation: "ba-zirt auf ay-nır va-rın gı-şih-tı" },
        { phrase: "Ich habe den Film schon gesehen", meaning: "Filmi zaten izledim", context: "Durum", example: "Den Film brauche ich nicht zu sehen, ich habe ihn schon gesehen.", pronunciation: "ıh ha-bı den film şon gı-ze-ın" },
        { phrase: "Regisseur / Regisseurin", meaning: "Yönetmen (erkek/kadın)", context: "Kavram", example: "Wer ist der Regisseur dieses interessanten Films?", pronunciation: "re-cis-zör" },
        { phrase: "Gute Unterhaltung!", meaning: "İyi eğlenceler!", context: "Dilek", example: "Viel Spaß im Kino! Gute Unterhaltung!", pronunciation: "gu-tı un-tırl-hal-tung" }
    ]
};

// Unit 549: Teknoloji
export const u549: GermanPhraseUnit = {
    unitId: 549, title: "Teknoloji", phrases: [
        { phrase: "Mein Akku ist leer", meaning: "Şarjım bitti / Bataryam boş", context: "Sorun", example: "Oh nein, mein Handy-Akku ist leer.", pronunciation: "mayn a-ku ist ler" },
        { phrase: "Hast du WLAN?", meaning: "WLAN/İnternetin var mı?", context: "Soru", example: "Können Sie mir das Passwort für das WLAN geben?", pronunciation: "hast du ve-lan" },
        { phrase: "Ich brauche ein Ladekabel", meaning: "Şarj kablosuna ihtiyacım var", context: "İstek", example: "Hast du vielleicht ein Ladekabel für mein Tablet?", pronunciation: "ıh brau-hı ayn la-dı-ka-bıl" },
        { phrase: "Das Internet ist langsam", meaning: "İnternet yavaş", context: "Sorun", example: "Heute ist das Internet bei mir extrem langsam.", pronunciation: "das in-tırl-net ist lang-zam" },
        { phrase: "Herunterladen / Downloaden", meaning: "İndirmek (download yapmak)", context: "Eylem", example: "Du musst die App erst herunterladen.", pronunciation: "hı-run-tırl-la-dın" },
        { phrase: "Auf Datei speichern", meaning: "Dosyaya kaydetmek", context: "Eylem", example: "Vergessen Sie nicht, das Dokument zu speichern.", pronunciation: "auf da-tay şpay-hırn" },
        { phrase: "Ich surfe im Netz", meaning: "İnternette geziniyorum", context: "Aktivite", example: "In meiner Freizeit surfe ich oft im Netz.", pronunciation: "ıh zur-fı ım nets" },
        { phrase: "Künstliche Intelligenz (KI)", meaning: "Yapay Zeka (AI)", context: "Kavram", example: "Was hältst du von der Entwicklung künstlicher Intelligenz?", pronunciation: "künst-lı-hı in-te-li-gents" },
        { phrase: "Ein neues Gerät kaufen", meaning: "Yeni bir cihaz satın almak", context: "Alışveriş", example: "Ich möchte mir ein neues Gerät für meine Arbeit kaufen.", pronunciation: "ayn noy-ıs gı-ret kau-fın" },
        { phrase: "Passwort vergessen", meaning: "Parolayı unuttum", context: "Sorun", example: "Mist, ich habe schon wieder mein Passwort vergessen.", pronunciation: "pas-vort fer-ge-sın" },
        { phrase: "Bildschirm sperren", meaning: "Ekranı kilitlemek", context: "Eylem", example: "Du solltest immer deinen Bildschirm am Arbeitsplatz sperren.", pronunciation: "bilt-şirm şpe-rın" },
        { phrase: "Drucken funktioniert nicht", meaning: "Yazdırma çalışmıyor", context: "Sorun", example: "Der Drucker ist kaputt, drucken funktioniert gerade nicht.", pronunciation: "dru-kın funk-tsio-nirt niht" },
        { phrase: "Software aktualisieren", meaning: "Yazılımı güncellemek", context: "Talimat", example: "Sie müssen regelmässig Ihre Software aktualisieren.", pronunciation: "soft-ver ak-tu-a-li-zi-rın" },
        { phrase: "Tastatur und Maus", meaning: "Klavye ve fare", context: "Donanım", example: "Ich brauche eine neue kabellose Tastatur und eine Maus.", pronunciation: "tas-ta-tur unt maus" },
        { phrase: "Social Media Kanäle", meaning: "Sosyal medya kanalları", context: "İletişim", example: "Welche Social Media Kanäle nutzt du am meisten?", pronunciation: "zo-şıl mi-di-a ka-ne-lı" }
    ]
};

// Unit 550: Sosyal Medya
export const u550: GermanPhraseUnit = {
    unitId: 550, title: "Sosyal Medya", phrases: [
        { phrase: "Bist du auf Instagram?", meaning: "Instagram kullanıyor musun?", context: "Soru", example: "Sag mal, bist du eigentlich auf Instagram oder TikTok?", pronunciation: "bist du auf in-sta-gram" },
        { phrase: "Ich habe ein foto gepostet", meaning: "Bir fotoğraf paylaştım (post attım)", context: "Eylem", example: "Schau mal, ich habe gerade ein Foto von meinem Urlaub gepostet.", pronunciation: "ıh ha-bı ayn fo-to gı-pos-tet" },
        { phrase: "Folge mir!", meaning: "Beni takip et!", context: "İstek", example: "Wenn du meine Bilder magst, dann folge mir!", pronunciation: "fol-gı mir" },
        { phrase: "Gefällt mir! (Like)", meaning: "Beğen! (Like at)", context: "Eylem", example: "Klick einfach auf 'Gefällt mir', wenn es dir gefällt.", pronunciation: "gı-felt mir" },
        { phrase: "Einen Kommentar schreiben", meaning: "Bir yorum yazmak", context: "Aktivite", example: "Du kannst gerne einen Kommentar unter meinen Beitrag schreiben.", pronunciation: "ay-nın ko-men-tar şray-bın" },
        { phrase: "Nachrichten schicken", meaning: "Mesaj göndermek", context: "İletişim", example: "Schreib mir doch eine Nachricht, wenn du Zeit hast.", pronunciation: "nah-rıh-tın şı-kın" },
        { phrase: "Inhalte teilen", meaning: "İçerik paylaşmak (share yapmak)", context: "Aktivite", example: "Diesen interessanten Artikel solltest du unbedingt teilen.", pronunciation: "in-hal-tı tay-lın" },
        { phrase: "Der Beitrag ist viral gegangen", meaning: "Gönderi viral oldu", context: "Sonuç", example: "Hast du das gesehen? Mein Video ist total viral gegangen!", pronunciation: "der bay-trag ist vi-ral gı-gan-gın" },
        { phrase: "Einen Influencer abonnieren", meaning: "Bir Influencer'a abone olmak", context: "Eylem", example: "Ich habe angefangen, diesen neuen Reise-Influencer zu abonnieren.", pronunciation: "ay-nın in-flu-ens-er a-bo-ni-rın" },
        { phrase: "Profil löschen", meaning: "Profili silmek", context: "Eylem", example: "Ich möchte mein altes Facebook-Profil endgültig löschen.", pronunciation: "pro-fil lö-şın" },
        { phrase: "Online-Präsenz", meaning: "Çevrimiçi görünürlük/varlık", context: "Kavram", example: "Heutzutage ist eine gute Online-Präsenz für Firmen wichtig.", pronunciation: "on-layn pre-zents" },
        { phrase: "Hashtags benutzen", meaning: "Hashtagler kullanmak", context: "Talimat", example: "Vergiss nicht, die richtigen Hashtags für dein Bild zu benutzen.", pronunciation: "heş-teks bı-nut-tsın" },
        { phrase: "Das ist Fake News", meaning: "Bu yalan haber", context: "Yorum", example: "Glaub nicht alles im Internet, das ist ganz sicher Fake News.", pronunciation: "das ist feyk nyus" },
        { phrase: "Datenschutz ist wichtig", meaning: "Veri gizliliği önemlidir", context: "Bilgi", example: "Man muss beim Internet vorsichtig sein, Datenschutz ist wichtig.", pronunciation: "da-tın-şuts ist vih-tıh" },
        { phrase: "Süchtig nach dem Handy", meaning: "Telefona bağımlı", context: "Sorun", example: "Viele Jugendliche sind leider süchtig nach ihrem Handy.", pronunciation: "züh-tıh nah dem hen-di" }
    ]
};

// Unit 551: Ev ve Taşınma
export const u551: GermanPhraseUnit = {
    unitId: 551, title: "Ev ve Taşınma", phrases: [
        { phrase: "Ich ziehe um", meaning: "Taşınıyorum", context: "Durum", example: "Nächsten Monat ziehe ich in eine neue Wohnung um.", pronunciation: "ıh tsi-ı um" },
        { phrase: "Die Miete ist hoch", meaning: "Kira yüksek", context: "Para", example: "In München ist die Miete leider extrem hoch.", pronunciation: "di mi-tı ist hoh" },
        { phrase: "Ich suche einen Nachmieter", meaning: "Yeni bir kiracı (benden sonraki) arıyorum", context: "İstek", example: "Ich suche dringend einen Nachmieter für mein Zimmer.", pronunciation: "ıh zu-hı ay-nın nah-mi-tırl" },
        { phrase: "Haben Sie eine Kaution?", meaning: "Depozitonuz var mı?", context: "Soru", example: "Wie hoch ist die Kaution für diese Wohnung?", pronunciation: "ha-bın zi ay-nı kau-tsion" },
        { phrase: "Den Mietvertrag unterschreiben", meaning: "Kira sözleşmesini imzalamak", context: "Eylem", example: "Morgen werden wir endlich den Mietvertrag unterschreiben.", pronunciation: "den mit-fer-trak un-tırl-şray-bın" },
        { phrase: "Die Nebenkosten bezahlen", pronunciation: "di ne-bın-kos-tın bı-tsa-lın", meaning: "Yan giderleri (aidat vb.) ödemek", context: "Para", example: "In der Warmmiete sind die Nebenkosten bereits enthalten." },
        { phrase: "Ein gemütliches Wohnzimmer", meaning: "Rahat/Samimi bir oturma odası", context: "Ev", example: "Ich mag mein neues, gemütliches Wohnzimmer sehr.", pronunciation: "ayn gı-müt-lı-hıs von-tsi-mır" },
        { phrase: "Möbel aufbauen", meaning: "Mobilya kurmak/monte etmek", context: "Eylem", example: "Am Wochenende müssen wir noch die neuen Möbel aufbauen.", pronunciation: "mö-bıl auf-bau-ın" },
        { phrase: "Nachbarn kennenlernen", meaning: "Komşularla tanışmak", context: "Sosyal", example: "Ich möchte gerne meine neuen Nachbarn kennenlernen.", pronunciation: "nah-barn ke-nın-ler-nın" },
        { phrase: "Den Umzug planen", meaning: "Taşınmayı planlamak", context: "Plan", example: "Wir müssen frühzeitig den Umzug in die neue Stadt planen.", pronunciation: "den um-tsuk pla-nın" },
        { phrase: "Karton packen", meaning: "Koli toplamak/hazırlamak", context: "Eylem", example: "Ich habe heute schon fünf Kartons gepackt.", pronunciation: "kar-ton pa-kın" },
        { phrase: "Der Aufzug ist kaputt", meaning: "Asansör bozuk", context: "Sorun", example: "Schon wieder ist der Aufzug im Haus kaputt.", pronunciation: "der auf-tsuk ist ka-put" },
        { phrase: "Eigenheim besitzen", meaning: "Kendi evine sahip olmak", context: "Durum", example: "Es ist mein Traum, irgendwann ein Eigenheim zu besitzen.", pronunciation: "ay-gın-haym bı-zit-tsın" },
        { phrase: "Renovieren macht Arbeit", meaning: "Tadilat iş çıkarır/zordur", context: "Yorum", example: "Die Wohnung zu renovieren macht wirklich viel Arbeit.", pronunciation: "re-no-vi-rın maht ar-bayt" },
        { phrase: "Willkommen im neuen Zuhause!", meaning: "Yeni evine hoş geldin!", context: "Dilek", example: "Alles Gute und willkommen im neuen Zuhause!", pronunciation: "vil-ko-mın ım noy-ın tsu-hau-zı" }
    ]
};

// Unit 552: Çevre ve Doğa
export const u552: GermanPhraseUnit = {
    unitId: 552, title: "Çevre ve Doğa", phrases: [
        { phrase: "Umweltschutz ist wichtig", meaning: "Çevre koruma önemlidir", context: "Kavram", example: "Umweltschutz ist wichtig für unsere Zukunft.", pronunciation: "um-velt-şuts ist vih-tıh" },
        { phrase: "Müll trennen", meaning: "Çöp ayırmak", context: "Aktivite", example: "In Deutschland muss man den Müll richtig trennen.", pronunciation: "mül tre-nın" },
        { phrase: "Plastik vermeiden", meaning: "Plastikten kaçınmak", context: "Aktivite", example: "Wir sollten versuchen, Plastik im Alltag zu vermeiden.", pronunciation: "plas-tik fer-may-dın" },
        { phrase: "Energie sparen", meaning: "Enerji tasarrufu yapmak", context: "Aktivite", example: "Licht aus! Wir müssen mehr Energie sparen.", pronunciation: "e-ner-gi şpa-rın" },
        { phrase: "Klimawandel stoppen", meaning: "İklim değişikliğini durdurmak", context: "Hedef", example: "Wir müssen gemeinsam den Klimawandel stoppen.", pronunciation: "kli-ma-van-dıl şto-pın" },
        { phrase: "Bio-Produkte kaufen", meaning: "Bio/Organik ürünler satın almak", context: "Alışveriş", example: "Ich kaufe am liebsten frische Bio-Produkte vom Markt.", pronunciation: "bi-o-pro-duk-tı kau-fın" },
        { phrase: "Die Natur genießen", meaning: "Doğanın tadını çıkarmak", context: "Aktivite", example: "Am Wochenende wollen wir einfach die Natur genießen.", pronunciation: "di na-tur gı-ni-sın" },
        { phrase: "Nachhaltig leben", meaning: "Sürdürülebilir yaşamak", context: "Yaşam", example: "Nachhaltig leben schont unsere Ressourcen.", pronunciation: "nah-hal-tıh le-bın" },
        { phrase: "Fahrrad statt Auto", meaning: "Araba yerine bisiklet", context: "Ulaşım", example: "Fahrrad statt Auto zu fahren ist gut für die Umwelt.", pronunciation: "fa-rat ştat au-to" },
        { phrase: "Erneuerbare Energien", meaning: "Yenilenebilir enerjiler", context: "Kavram", example: "Wir brauchen mehr Investitionen in erneuerbare Energien.", pronunciation: "er-noy-ı-ba-rı e-ner-gi-ın" },
        { phrase: "Wasserverschwendung vermeiden", meaning: "Su israfından kaçınmak", context: "Aktivite", example: "Bitte achtet darauf, Wasserverschwendung zu vermeiden.", pronunciation: "va-sır-fer-şven-dung fer-may-dın" },
        { phrase: "Wandern im Gebirge", meaning: "Dağlarda yürüyüş yapmak", context: "Aktivite", example: "Nächste Woche gehen wir im Gebirge wandern.", pronunciation: "van-dırn ım gı-bir-gı" },
        { phrase: "Waldbrandgefahr", meaning: "Orman yangını tehlikesi", context: "Uyarı", example: "Im Sommer besteht oft eine hohe Waldbrandgefahr.", pronunciation: "valt-brant-gı-far" },
        { phrase: "Die Luft ist rein", meaning: "Hava temiz", context: "Durum", example: "Hier oben in den Bergen ist die Luft so rein.", pronunciation: "di luft ist rayn" },
        { phrase: "Tiere schützen", meaning: "Hayvanları korumak", context: "Hedef", example: "Wir müssen bedrohte Tiere weltweit schützen.", pronunciation: "ti-rı şüt-tsın" }
    ]
};

// Unit 553: Haberler
export const u553: GermanPhraseUnit = {
    unitId: 553, title: "Haberler", phrases: [
        { phrase: "Was gibt es Neues?", meaning: "Ne haber? / Yeni ne var?", context: "Sosyal", example: "Hallo! Was gibt es Neues bei dir in der Arbeit?", pronunciation: "vas gipt es noy-ıs" },
        { phrase: "Hast du die Nachrichten gelesen?", meaning: "Haberleri okudun mu?", context: "Soru", example: "Hast du schon die Nachrichten von heute Morgen gelesen?", pronunciation: "hast du di nah-rıh-tın gı-le-zın" },
        { phrase: "Ein aktuelles Thema", meaning: "Güncel bir konu", context: "Kavram", example: "Das ist momentan ein sehr aktuelles Thema in der Politik.", pronunciation: "ayn ak-tu-e-lıs te-ma" },
        { phrase: "Zeitung lesen", meaning: "Gazete okumak", context: "Aktivite", example: "Mein Großvater liest jeden Morgen die Zeitung.", pronunciation: "tsay-tung le-zın" },
        { phrase: "Im Fernsehen schauen", meaning: "Televizyonda izlemek", context: "Aktivite", example: "Wir schauen die Tagesschau immer im Fernsehen.", pronunciation: "ım fern-ze-ın şau-ın" },
        { phrase: "Die Weltnachrichten", meaning: "Dünya haberleri", context: "Bilgi", example: "Ich interessiere mich sehr für die Weltnachrichten.", pronunciation: "di velt-nah-rıh-tın" },
        { phrase: "Es wird viel berichtet", meaning: "Çok haber yapılıyor / Çok bahsediliyor", context: "Durum", example: "Über die Krise wird in allen Medien viel berichtet.", pronunciation: "es virt fil bı-rıh-tet" },
        { phrase: "Eine Schlagzeile lesen", meaning: "Bir manşet okumak", context: "Eylem", example: "Die Schlagzeile in der Zeitung heute war schockierend.", pronunciation: "ay-nı şlak-tsay-lı le-zın" },
        { phrase: "Die Meinung sagen", meaning: "Fikrini söylemek", context: "Sosyal", example: "Jeder darf in einer Demokratie seine Meinung sagen.", pronunciation: "di may-nung za-gın" },
        { phrase: "Eilmeldung!", meaning: "Son dakika! / Acil haber!", context: "Bilgi", example: "Eilmeldung! Der Präsident ist gerade zurückgetreten.", pronunciation: "ayl-mel-dung" },
        { phrase: "Ein Interview führen", meaning: "Bir röportaj/mülakat yapmak", context: "Eylem", example: "Der Reporter wird morgen ein Interview mit dem Star führen.", pronunciation: "ayn in-tırl-vju fü-rın" },
        { phrase: "Fake News erkennen", meaning: "Yalan haberi fark etmek", context: "Beceriler", example: "Heutzutage ist es schwer, Fake News sofort zu erkennen.", pronunciation: "feyk nyus er-ke-nın" },
        { phrase: "Diskussion im Radio", meaning: "Radyoda tartışma", context: "Medya", example: "Ich habe vorhin eine spannende Diskussion im Radio gehört.", pronunciation: "dis-kus-sion ım ra-dio" },
        { phrase: "Berichterstattung", meaning: "Haber sunumu / Raporlama", context: "Kavram", example: "Die Berichterstattung war sehr einseitig.", pronunciation: "bı-rıh-tırl-ştat-tung" },
        { phrase: "Informiert bleiben", meaning: "Haberdar kalmak", context: "Dilek", example: "Wichtig ist es, immer gut informiert zu bleiben.", pronunciation: "in-for-mirt blay-bın" }
    ]
};

// Unit 554: Kültür ve Gelenekler
export const u554: GermanPhraseUnit = {
    unitId: 554, title: "Kültür ve Gelenekler", phrases: [
        { phrase: "Deutsche Traditionen", meaning: "Alman gelenekleri", context: "Kültür", example: "Was sind typische deutsche Traditionen zu Weihnachten?", pronunciation: "doy-hı tra-di-tsio-nın" },
        { phrase: "Ein Fest feiern", meaning: "Bir bayramı/festivali kutlamak", context: "Sosyal", example: "Wir werden am Wochenende ein großes Fest feiern.", pronunciation: "ayn fest fay-ırn" },
        { phrase: "Geschenke auspacken", meaning: "Hediyeleri açmak", context: "Aktivite", example: "Die Kinder dürfen jetzt ihre Geschenke auspacken.", pronunciation: "gı-şen-kı aus-pa-kın" },
        { phrase: "Frohe Ostern!", meaning: "Paskalyanız kutlu olsun!", context: "Dilek", example: "Ich wünsche euch allen frohe Ostern!", pronunciation: "fro-ı os-tırln" },
        { phrase: "Guten Rutsch!", meaning: "İyi yıllar! (Yılbaşı gecesi söylenir)", context: "Dilek", example: "Guten Rutsch ins neue Jahr!", pronunciation: "gu-tın rutş" },
        { phrase: "Herzlichen Glückwunsch!", meaning: "Yürekten kutlarım! / Tebrikler!", context: "Dilek", example: "Herzlichen Glückwunsch zum Geburtstag!", pronunciation: "herts-lı-hın glük-vunş" },
        { phrase: "Karneval in Köln", meaning: "Köln'de Karnaval", context: "Etkinlik", example: "Der Karneval in Köln ist weltberühmt.", pronunciation: "kar-ne-val in köln" },
        { phrase: "Ein religiöser Feiertag", meaning: "Dini bir tatil günü", context: "Kültür", example: "Morgen ist ein offizieller religiöser Feiertag.", pronunciation: "ayn re-li-gi-ö-zır fay-ır-tag" },
        { phrase: "Einladung zur Hochzeit", meaning: "Düğün davetiyesi", context: "Sosyal", example: "Haben Sie schon die Einladung zur Hochzeit erhalten?", pronunciation: "ayn-la-dung tsur hoh-tsayt" },
        { phrase: "Prost!", meaning: "Şerefe!", context: "Sosyal", example: "Auf die Freundschaft! Prost!", pronunciation: "prost" },
        { phrase: "Sitten und Gebräuche", meaning: "Adet ve gelenekler", context: "Kavram", example: "Andere Länder, andere Sitten und Gebräuche.", pronunciation: "zi-tın unt gı-broy-hı" },
        { phrase: "Landestypische Küche", meaning: "Ülkeye özgü mutfak", context: "Yemek", example: "Ich probiere im Urlaub gerne die landestypische Küche.", pronunciation: "lan-dıs-tü-pi-şı kü-hı" },
        { phrase: "Ein Denkmal besuchen", meaning: "Bir anıtı ziyaret etmek", context: "Seyahat", example: "Wir besichtigen heute ein historisches Denkmal.", pronunciation: "ayn denk-mal bı-zu-hın" },
        { phrase: "Kulturhistorisch wichtig", meaning: "Kültür tarihi açısından önemli", context: "Bilgi", example: "Dieses Gebäude ist kulturhistorisch sehr wichtig.", pronunciation: "kul-tur-his-to-riş vih-tıh" },
        { phrase: "Brauchtum pflegen", meaning: "Gelenekleri yaşatmak/korumak", context: "Hedef", example: "Es ist schön, altes Brauchtum in den Dörfern zu pflegen.", pronunciation: "brauh-tum p-fle-gın" }
    ]
};

// Unit 555: Dativ Hali
export const u555: GermanPhraseUnit = {
    unitId: 555, title: "Dativ Hali", phrases: [
        { phrase: "Wie geht es dir?", meaning: "Nasılsın? (Sana nasıl gidiyor?)", context: "Gramer-Dativ", example: "Hallo Maria, wie geht es dir heute?", pronunciation: "vi geyt es dir" },
        { phrase: "Es gefällt mir", meaning: "Hoşuma gidiyor / Beğeniyorum", context: "Gramer-Dativ", example: "Das neue Auto gefällt mir sehr gut.", pronunciation: "es gı-felt mir" },
        { phrase: "Hilf mir bitte!", meaning: "Yardım et bana lütfen!", context: "Gramer-Dativ", example: "Ich kann das nicht alleine, hilf mir bitte!", pronunciation: "hilf mir bi-tı" },
        { phrase: "Ich antworte dir", meaning: "Sana cevap veriyorum", context: "Gramer-Dativ", example: "Warte einen Moment, ich antworte dir gleich.", pronunciation: "ıh ant-vor-tı dir" },
        { phrase: "Es gehört mir", meaning: "O bana ait", context: "Gramer-Dativ", example: "Das Buch gehört mir, nicht dir.", pronunciation: "es gı-hört mir" },
        { phrase: "Ich danke Ihnen", meaning: "Size teşekkür ederim (Resmi)", context: "Gramer-Dativ", example: "Ich danke Ihnen für Ihre Hilfe.", pronunciation: "ıh dan-kı i-nın" },
        { phrase: "Glaubst du mir?", meaning: "Bana inanıyor musun?", context: "Gramer-Dativ", example: "Ich sage die Wahrheit, glaubst du mir?", pronunciation: "glaubst du mir" },
        { phrase: "Was schenkst du ihm?", meaning: "Ona ne hediye ediyorsun?", context: "Gramer-Dativ", example: "Was schenkst du ihm zum Geburtstag?", pronunciation: "vas şenkst du im" },
        { phrase: "Ich gratuliere dir", meaning: "Seni tebrik ederim", context: "Gramer-Dativ", example: "Ich gratuliere dir zum neuen Job!", pronunciation: "ıh gra-tu-li-rı dir" },
        { phrase: "Es schmeckt mir", meaning: "Tadı hoşuma gidiyor (Lezzetli geliyor)", context: "Gramer-Dativ", example: "Das Essen schmeckt mir heute besonders gut.", pronunciation: "es şmekt mir" },
        { phrase: "Kannst du mir verzeihen?", meaning: "Beni affedebilir misin?", context: "Gramer-Dativ", example: "Es tut mir leid, kannst du mir verzeihen?", pronunciation: "kanst du mir fer-tsay-ın" },
        { phrase: "Pass auf dich auf!", meaning: "Kendine dikkat et!", context: "Dilek", example: "Tschüss und pass gut auf dich auf!", pronunciation: "pas auf dıh auf" },
        { phrase: "Es tut mir weh", meaning: "Canımı yakıyor / Ağrıyor", context: "Gramer-Dativ", example: "Lass das, es tut mir weh!", pronunciation: "es tut mir ve" },
        { phrase: "Folge mir unauffällig", meaning: "Beni çaktırmadan takip et", context: "Gramer-Dativ", example: "Komm mit und folge mir unauffällig.", pronunciation: "fol-gı mir un-auf-fe-lıh" },
        { phrase: "Zeig mir dein Foto", meaning: "Bana fotoğrafını göster", context: "İstek", example: "Zeig mir bitte mal dein Foto aus dem Urlaub.", pronunciation: "tsayk mir dayn fo-to" }
    ]
};

// Unit 556: Modalverben
export const u556: GermanPhraseUnit = {
    unitId: 556, title: "Modalverben", phrases: [
        { phrase: "Ich kann Deutsch sprechen", meaning: "Almanca konuşabiliyorum", context: "Yetenek/Können", example: "Ich lerne fleißig und ich kann schon gut Deutsch sprechen.", pronunciation: "ıh kan doytş şpre-hın" },
        { phrase: "Du musst Hausaufgaben machen", meaning: "Ödev yapmalısın / Zorunlusun", context: "Zorunluluk/Müssen", example: "Wenn du lernen willst, musst du deine Hausaufgaben machen.", pronunciation: "du must haus-auf-ga-bın ma-hın" },
        { phrase: "Darf ich hier rauchen?", meaning: "Burada sigara içebilir miyim? (İzin var mı?)", context: "İzin/Dürfen", example: "Entschuldigung, darf ich hier auf dem Balkon rauchen?", pronunciation: "darf ıh hir rau-hın" },
        { phrase: "Ich will in den Urlaub fahren", meaning: "Tatile gitmek istiyorum", context: "İstek/Wollen", example: "Nächsten Monat will ich unbedingt in den Urlaub fahren.", pronunciation: "ıh vil in den ur-laup fa-rın" },
        { phrase: "Soll ich dir helfen?", meaning: "Sana yardım etmeli miyim? (Yardım edeyim mi?)", context: "Tavsiye/Sollen", example: "Du siehst gestresst aus. Soll ich dir bei der Arbeit helfen?", pronunciation: "tsol ıh dir hel-fın" },
        { phrase: "Ich möchte einen Kaffee trinken", meaning: "Bir kahve içmek isterim", context: "Nezaket/Möchten", example: "Guten Tag, ich möchte bitte einen Kaffee trinken.", pronunciation: "ıh möh-tı ay-nın ka-fe trin-kın" },
        { phrase: "Er mag Pizza", meaning: "O pizzayı sever", context: "Beğeni/Mögen", example: "Mein kleiner Bruder mag Pizza über alles.", pronunciation: "er mag pit-sa" },
        { phrase: "Wir können das schaffen!", meaning: "Bunu başarabiliriz!", context: "İnanç/Können", example: "Kopf hoch, gemeinsam können wir das schaffen!", pronunciation: "vir kö-nın das şa-fın" },
        { phrase: "Hier darf man nicht parken", meaning: "Buraya park edilemez (yasak)", context: "Yasak/Dürfen", example: "Achtung! Hier darf man absolut nicht parken.", pronunciation: "hir darf man niht par-kın" },
        { phrase: "Du sollst zum Arzt gehen", meaning: "Doktora gitmelisin (tavsiye)", context: "Tavsiye/Sollen", example: "Du hustest so stark, du sollst wirklich zum Arzt gehen.", pronunciation: "du tsolst tsum artst ge-ın" },
        { phrase: "Ich muss jetzt leider gehen", meaning: "Şimdi gitmem gerekiyor maalesef", context: "Zorunluluk/Müssen", example: "Es ist schon spät, ich muss jetzt leider nach Hause gehen.", pronunciation: "ıh mus yetst lay-dırl ge-ın" },
        { phrase: "Das kann man nicht wissen", meaning: "Bunu kimse bilemez / Bilmek mümkün değil", context: "Olasılık/Können", example: "Das war ein Zufall, das kann man vorher nicht wissen.", pronunciation: "das kan man niht vi-sın" },
        { phrase: "Willst du mit mir kommen?", meaning: "Benimle gelmek ister misin?", context: "Soru/Wollen", example: "Ich gehe ins Kino. Willst du mit mir kommen?", pronunciation: "vilst du mit mir ko-mın" },
        { phrase: "Man darf hier nicht laut sein", meaning: "Burada gürültü yapmak yasak", context: "Kural/Dürfen", example: "In der Bibliothek darf man nicht laut sein.", pronunciation: "man darf hir niht laut zayn" },
        { phrase: "Was möchtest du essen?", meaning: "Ne yemek istersin?", context: "Soru/Möchten", example: "Ich lade dich ein. Was möchtest du heute Abend essen?", pronunciation: "vas möh-test du e-sın" }
    ]
};

// Unit 557: Nebensätze
export const u557: GermanPhraseUnit = {
    unitId: 557, title: "Nebensätze", phrases: [
        { phrase: "Ich denke, dass er kommt", meaning: "Geleceğini düşünüyorum", context: "Yan cümle/dass", example: "Ich denke, dass er heute Abend zur Party kommt.", pronunciation: "ıh den-kı das er komt" },
        { phrase: "Weil ich müde bin", meaning: "Yorgun olduğum için", context: "Yan cümle/weil", example: "Ich gehe ins Bett, weil ich sehr müde bin.", pronunciation: "vayl ıh mü-dı bin" },
        { phrase: "Wenn es regnet, bleibe ich hier", meaning: "Eğer yağmur yağarsa, burada kalırım", context: "Yan cümle/wenn", example: "Wenn es morgen regnet, bleibe ich den ganzen Tag zu Hause.", pronunciation: "ven es reg-net blay-bı ıh hir" },
        { phrase: "Ich weiß nicht, ob er Zeit hat", meaning: "Vakti olup olmadığını bilmiyorum", context: "Yan cümle/ob", example: "Ich weiß leider nicht, ob er heute Zeit für uns hat.", pronunciation: "ıh vays niht op er tsayt hat" },
        { phrase: "Bevor ich schlafe, lese ich", meaning: "Uyumadan önce okurum", context: "Yan cümle/bevor", example: "Bevor ich schlafe, lese ich immer noch ein paar Seiten.", pronunciation: "bı-for ıh şla-fı le-zı ıh" },
        { phrase: "Nachdem ich gegessen habe", meaning: "Yemek yedikten sonra", context: "Yan cümle/nachdem", example: "Nachdem ich gegessen habe, trinke ich meistens einen Tee.", pronunciation: "nah-dem ıh gı-ge-sın ha-bı" },
        { phrase: "Da er krank ist, kommt er nicht", meaning: "Hasta olduğu için gelmiyor", context: "Yan cümle/da", example: "Da er heute krank ist, kommt er nicht zur Arbeit.", pronunciation: "da er krank ist komt er niht" },
        { phrase: "Obwohl es kalt ist", meaning: "Soğuk olmasına rağmen", context: "Yan cümle/obwohl", example: "Obwohl es draußen sehr kalt ist, gehe ich spazieren.", pronunciation: "op-vol es kalt ist" },
        { phrase: "Damit ich gesund bleibe", meaning: "Sağlıklı kalmak için", context: "Yan cümle/damit", example: "Ich mache Sport, damit ich fit und gesund bleibe.", pronunciation: "da-mit ıh gı-zunt blay-bı" },
        { phrase: "Während ich arbeite, höre ich Musik", meaning: "Çalışırken müzik dinliyorum", context: "Yan cümle/während", example: "Während ich konzentriert arbeite, höre ich gerne Klassik.", pronunciation: "ve-rınt ıh ar-bay-tı hö-rı ıh mu-zik" },
        { phrase: "Bis der Zug kommt", meaning: "Tren gelene kadar", context: "Yan cümle/bis", example: "Wir warten hier am Gleis, bis der Zug endlich kommt.", pronunciation: "bis der tsuk komt" },
        { phrase: "Seitdem ich in Berlin lebe", meaning: "Berlin'de yaşadığımdan beri", context: "Yan cümle/seitdem", example: "Seitdem ich in Berlin lebe, bin ich viel glücklicher.", pronunciation: "tsayt-dem ıh in ber-lin le-bı" },
        { phrase: "Soweit ich weiß", meaning: "Bildiğim kadarıyla", context: "Yan cümle/soweit", example: "Soweit ich weiß, hat die Bäckerei heute geschlossen.", pronunciation: "zo-vayt ıh vays" },
        { phrase: "Egal, was passiert", meaning: "Ne olursa olsun", context: "İfade", example: "Ich bleibe an deiner Seite, egal, was passiert.", pronunciation: "e-gal vas pa-sirt" },
        { phrase: "Ich hoffe, dass alles gut geht", meaning: "Umarım her şey yolunda gider", context: "Dilek/dass", example: "Viel Glück für die Prüfung! Ich hoffe, dass alles gut geht.", pronunciation: "ıh hof-ı das a-lıs gut geyt" }
    ]
};

// Unit 558: Karşılaştırma
export const u558: GermanPhraseUnit = {
    unitId: 558, title: "Karşılaştırma", phrases: [
        { phrase: "Er ist größer als ich", meaning: "O benden daha uzun/büyük", context: "Karşılaştırma/Komparativ", example: "Mein Bruder ist fast zehn Zentimeter größer als ich.", pronunciation: "er ist grö-sır als ıh" },
        { phrase: "Das ist am besten", meaning: "Bu en iyisi", context: "Karşılaştırma/Superlativ", example: "Ich finde, diese Lösung ist für uns am besten.", pronunciation: "das ist am bes-tın" },
        { phrase: "So schnell wie möglich", meaning: "Mümkün olduğunca hızlı", context: "Karşılaştırma/Equativ", example: "Bitte antworten Sie mir so schnell wie möglich.", pronunciation: "zo şnel vi mög-lıh" },
        { phrase: "Ich bin älter als du", meaning: "Benden daha yaşlıyım/büyüğüm", context: "Karşılaştırma", example: "Glaub mir, ich habe Erfahrung, ich bin älter als du.", pronunciation: "ıh bin el-tırl als du" },
        { phrase: "Das teuerste Auto", meaning: "En pahalı araba", context: "Karşılaştırma/Superlativ", example: "Er hat sich das teuerste Auto im Laden gekauft.", pronunciation: "das toy-ırs-tı au-to" },
        { phrase: "Genauso gut wie vorher", meaning: "En az eskisi kadar iyi", context: "Karşılaştırma", example: "Nach der Reparatur funktioniert es genauso gut wie vorher.", pronunciation: "gı-nau-zo gut vi for-her" },
        { phrase: "Mehr oder weniger", meaning: "Aşağı yukarı / Az çok", context: "Deyim", example: "Ich habe die Arbeit mehr oder weniger fertig gemacht.", pronunciation: "mer o-dır ve-ni-gır" },
        { phrase: "Je schneller, desto besser", meaning: "Ne kadar hızlı, o kadar iyi", context: "Karşılaştırma", example: "Wir haben keine Zeit. Je schneller du bist, desto besser.", pronunciation: "ye şne-lır des-to be-sır" },
        { phrase: "Am liebsten esse ich Pizza", meaning: "En sevdiğim yemek pizza (En seve seve pizza yerim)", context: "Beğeni", example: "Ich mag Pasta, aber am liebsten esse ich Pizza.", pronunciation: "am lip-ştın e-sı ıh pit-sa" },
        { phrase: "Es wird immer kälter", meaning: "Hava gitgide soğuyor", context: "Değişim", example: "Zieh dich warm an, draußen wird es immer kälter.", pronunciation: "es virt i-mır kel-tırl" },
        { phrase: "Ein kleineres Problem", meaning: "Daha küçük bir sorun", context: "Miktar", example: "Mach dir keine Sorgen, das ist nur ein kleineres Problem.", pronunciation: "ayn klay-nı-rıs pro-blem" },
        { phrase: "Viel schöner als gedacht", meaning: "Tahmin edildiğinden çok daha güzel", context: "Yorum", example: "Die Aussicht hier oben ist viel schöner als gedacht.", pronunciation: "fil şö-nır als gı-daht" },
        { phrase: "Weniger ist mehr", meaning: "Azı karar çoğu zarar (Az fazladır)", context: "Atasözü", example: "Beim Design gilt oft: Weniger ist mehr.", pronunciation: "ve-ni-gır ist mer" },
        { phrase: "Das wichtigste Thema", meaning: "En önemli konu", context: "Önem", example: "Gesundheit ist für mich das wichtigste Thema im Leben.", pronunciation: "das vih-tıhs-tı te-ma" },
        { phrase: "Besser spät als nie", meaning: "Geç olsun da güç olmasın (Geç olması hiç olmamasından iyidir)", context: "Atasözü", example: "Hier ist dein Geschenk! Besser spät als nie, oder?", pronunciation: "be-sır şpet als ni" }
    ]
};

// Unit 559: Dönüşlü Fiiller
export const u559: GermanPhraseUnit = {
    unitId: 559, title: "Dönüşlü Fiiller", phrases: [
        { phrase: "Ich freue mich", meaning: "Seviniyorum / Mutluyum", context: "Dönüşlü", example: "Ich freue mich sehr auf unseren gemeinsamen Urlaub.", pronunciation: "ıh froy-ı mıh" },
        { phrase: "Hast du dich gewaschen?", meaning: "Yıkandın mı? / Elini yüzünü yıkadın mı?", context: "Dönüşlü", example: "Komm zum Essen! Hast du dir die Hände gewaschen?", pronunciation: "hast du dıh gı-va-şın" },
        { phrase: "Ich interessiere mich für Kunst", meaning: "Sanatla ilgileniyorum", context: "Dönüşlü", example: "Ich interessiere mich schon lange für moderne Kunst.", pronunciation: "ıh in-te-re-si-rı mıh für kunst" },
        { phrase: "Setz dich bitte!", meaning: "Otur lütfen!", context: "Dönüşlü", example: "Willkommen! Komm rein und setz dich bitte auf das Sofa.", pronunciation: "zetst dıh bi-tı" },
        { phrase: "Ich fühle mich wohl", meaning: "Kendimi iyi/huzurlu hissediyorum", context: "Dönüşlü", example: "In meiner neuen Wohnung fühle mich mich richtig wohl.", pronunciation: "ıh fü-lı mıh vol" },
        { phrase: "Ärger dich nicht!", meaning: "Kızma! / Canını sıkma!", context: "Dönüşlü", example: "Das war doch nur ein kleiner Fehler. Ärger dich nicht!", pronunciation: "er-gır dıh niht" },
        { phrase: "Ich beeile mich", meaning: "Acele ediyorum", context: "Dönüşlü", example: "Warte kurz, ich beeile mich und bin in fünf Minuten fertig.", pronunciation: "ıh bı-ay-lı mıh" },
        { phrase: "Wir treffen uns um 8 Uhr", meaning: "Saat 8'de buluşuyoruz/görüşüyoruz", context: "Dönüşlü", example: "Vergiss es nicht: Wir treffen uns heute um 8 Uhr im Park.", pronunciation: "vir tre-fın uns um aht ur" },
        { phrase: "Ich erinnere mich an dich", meaning: "Seni hatırlıyorum", context: "Dönüşlü", example: "Ja, natürlich! Ich erinnere mich gut an dich.", pronunciation: "ıh er-i-nı-rı mıh an dıh" },
        { phrase: "Leg dich kurz hin", meaning: "Biraz uzan (yat dinlen)", context: "Dönüşlü", example: "Du siehst müde aus. Leg dich doch kurz auf das Bett hin.", pronunciation: "leyk dıh kurts hin" },
        { phrase: "Ich habe mich verspätet", meaning: "Geciktim", context: "Dönüşlü", example: "Entschuldigung, ich habe mich wegen des Verkehrs verspätet.", pronunciation: "ıh ha-bı mıh fer-şpe-tet" },
        { phrase: "Zieh dich warm an!", meaning: "Sıkı giyin!", context: "Dönüşlü", example: "Es ist sehr kalt draußen. Zieh dich bitte warm an!", pronunciation: "tsi dıh varm an" },
        { phrase: "Ich konzentriere mich", meaning: "Konsantre oluyorum", context: "Dönüşlü", example: "Bitte sei leise, ich konzentriere mich gerade auf mein Buch.", pronunciation: "ıh kon-tsen-tri-rı mıh" },
        { phrase: "Ruh dich aus!", meaning: "Dinlen! / İstirahat et!", context: "Dönüşlü", example: "Nach der langen Reise musst du dich erst mal ausruhen.", pronunciation: "ru dıh aus" },
        { phrase: "Ich bedanke mich bei Ihnen", meaning: "Size teşekkürlerimi sunarım (Resmi)", context: "Dönüşlü", example: "Ich bedanke mich herzlich bei Ihnen für das Gespräch.", pronunciation: "ıh bı-dan-kı mıh bay i-nın" }
    ]
};

// Unit 560: A2 Tekrar
export const u560: GermanPhraseUnit = {
    unitId: 560, title: "A2 Tekrar", phrases: [
        { phrase: "Ich habe viel gelernt", meaning: "Çok şey öğrendim", context: "Tekrar", example: "Auf dem A2-Niveau habe ich wirklich viel gelernt.", pronunciation: "ıh ha-bı fil gı-lernt" },
        { phrase: "Ich spreche jetzt besser", meaning: "Şimdi daha iyi konuşuyorum", context: "Tekrar", example: "Ich übe jeden Tag und ich spreche jetzt viel besser.", pronunciation: "ıh şpre-hı yetst be-sır" },
        { phrase: "Das war einfach", meaning: "Bu kolaydı", context: "Tekrar", example: "Die Übung heute war für mich eigentlich ganz einfach.", pronunciation: "das var ayn-fah" },
        { phrase: "Das war schwierig", meaning: "Bu zordu", context: "Tekrar", example: "Die Prüfung gestern war leider ziemlich schwierig.", pronunciation: "das var şvi-rıh" },
        { phrase: "Kannst du das erklären?", meaning: "Bunu açıklayabilir misin?", context: "Soru", example: "Ich verstehe die Grammatik nicht. Kannst du das erklären?", pronunciation: "kanst du das er-kle-rın" },
        { phrase: "Ich brauche mehr Übung", meaning: "Daha fazla pratiğe ihtiyacım var", context: "Durum", example: "Ich verstehe die Regeln, aber ich brauche noch mehr Übung.", pronunciation: "ıh brau-hı mer ü-bung" },
        { phrase: "Wiederholung ist wichtig", meaning: "Tekrar önemlidir", context: "Öneri", example: "Wiederholung ist beim Sprachenlernen sehr wichtig.", pronunciation: "vi-dırl-ho-lung ist vih-tıh" },
        { phrase: "Ich bin fast fertig", meaning: "Neredeyse bitirdim", context: "Durum", example: "Warte noch einen Moment, ich bin fast fertig.", pronunciation: "ıh bin fast fer-tıh" },
        { phrase: "Haben wir alles?", meaning: "Her şeyimiz tamam mı? / Her şeyi aldık mı?", context: "Soru", example: "Bevor wir gehen: Haben wir jetzt wirklich alles?", pronunciation: "ha-bın vir a-lıs" },
        { phrase: "Ich freue mich auf B1", meaning: "B1'i dört gözle bekliyorum", context: "Gelecek", example: "A2 ist geschafft! Ich freue mich jetzt sehr auf B1.", pronunciation: "ıh froy-ı mıh auf be eins" },
        { phrase: "Gib nicht auf!", meaning: "Vazgeçme!", context: "Motivasyon", example: "Es ist manchmal schwer, aber gib bitte nicht auf!", pronunciation: "gip niht auf" },
        { phrase: "Du machst große Fortschritte", meaning: "Büyük ilerleme kaydediyorsun", context: "Motivasyon", example: "Ich bin stolz auf dich, du machst große Fortschritte.", pronunciation: "du mahst gro-sı fort-şri-tı" },
        { phrase: "Lerne jeden Tag ein bisschen", meaning: "Her gün biraz öğren", context: "Tavsiye", example: "Lerne jeden Tag ein bisschen, das bringt viel mehr.", pronunciation: "ler-nı ye-dın tag ayn bis-hın" },
        { phrase: "Viel Spaß beim Lernen!", meaning: "Öğrenirken iyi eğlenceler!", context: "Dilek", example: "Das Projekt macht Spaß. Viel Spaß beim Lernen!", pronunciation: "fil şpas baym ler-nın" },
        { phrase: "Bis zum nächsten Mal!", meaning: "Bir sonraki sefere kadar (görüşürüz)!", context: "Veda", example: "Tschüss! Bis zum nächsten Mal!", pronunciation: "bis tsum neh-ştın mal" }
    ]
};

// Ünitelerin toplandığı liste
export const phrasesDeA2: GermanPhraseUnit[] = [
    u531, u532, u533, u534, u535, u536, u537, u538, u539, u540,
    u541, u542, u543, u544, u545, u546, u547, u548, u549, u550,
    u551, u552, u553, u554, u555, u556, u557, u558, u559, u560
];

/**
 * Ünite ID'sine göre Almanca A2 kalıplarını getiren yardımcı fonksiyon
 */
export const getGermanA2PhrasesForUnit = (unitId: number): GermanPhraseUnit => {
    const unit = phrasesDeA2.find(u => u.unitId === unitId);
    return unit || { unitId, title: `Ünite ${unitId}`, phrases: [] };
};
