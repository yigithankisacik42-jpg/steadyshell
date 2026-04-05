/**
 * SteadyShell Phrases Database - Almanca B1
 * 30 Units (ID: 561-590), 5-10 phrases per unit
 */

export interface GermanPhrase {
    phrase: string;
    meaning: string;
    pronunciation: string;
    context: string;
}

export interface GermanUnitPhrases {
    unitId: number;
    title: string;
    phrases: GermanPhrase[];
}

// ===== UNIT 561: GELECEK ZAMAN (FUTUR I) =====
const unit561Phrases: GermanUnitPhrases = {
    unitId: 561, title: "Gelecek Zaman (Futur I)",
    phrases: [
        { phrase: "Ich werde dich morgen anrufen.", meaning: "Seni yarın arayacağım.", pronunciation: "ih ver-dı dih mor-gın an-ru-fın", context: "Söz verme / Plan" },
        { phrase: "Das wird schon klappen.", meaning: "O iş hallolur / Olacak.", pronunciation: "das virt şon kla-pın", context: "Cesaret verme / Tahmin" },
        { phrase: "Was wirst du am Wochenende machen?", meaning: "Hafta sonu ne yapacaksın?", pronunciation: "vas virst du am vo-hın-en-dı ma-hın", context: "Soru" },
        { phrase: "Es wird wahrscheinlich regnen.", meaning: "Muhtemelen yağmur yağacak.", pronunciation: "es virt var-şayn-lıh reg-nın", context: "Hava tahmini" },
        { phrase: "Wir werden unser Ziel erreichen.", meaning: "Hedefimize ulaşacağız.", pronunciation: "vir ver-dın un-zır tsil er-ray-hın", context: "Kararlılık" }
    ]
};

// ===== UNIT 562: KONJUNKTIV II =====
const unit562Phrases: GermanUnitPhrases = {
    unitId: 562, title: "Konjunktiv II",
    phrases: [
        { phrase: "Ich hätte gerne einen Kaffee.", meaning: "Bir kahve alabilir miyim lütfen.", pronunciation: "ih he-tı ger-nı ay-nın ka-fe", context: "Nezaketle isteme" },
        { phrase: "Könnten Sie mir helfen?", meaning: "Bana yardım edebilir misiniz?", pronunciation: "kön-tın zi mir hel-fın", context: "Rica" },
        { phrase: "Wenn ich Zeit hätte, würde ich kommen.", meaning: "Eğer vaktim olsaydı gelirdim.", pronunciation: "ven ih tsayt he-tı vür-dı ih ko-mın", context: "Koşul / Hayal" },
        { phrase: "Das wäre toll!", meaning: "Bu harika olurdu!", pronunciation: "das ve-rı tol", context: "Heyecan / İstek" },
        { phrase: "Ich an deiner Stelle würde das nicht tun.", meaning: "Senin yerinde olsam bunu yapmazdım.", pronunciation: "ih an day-nır şte-lı vür-dı das niht tun", context: "Tavsiye" }
    ]
};

// ===== UNIT 563: PASSIV YAPI =====
const unit563Phrases: GermanUnitPhrases = {
    unitId: 563, title: "Passiv Yapı",
    phrases: [
        { phrase: "Hier wird Deutsch gesprochen.", meaning: "Burada Almanca konuşulur.", pronunciation: "hir virt doytş gı-şpro-hın", context: "Bilgi verme" },
        { phrase: "Das Auto wird gerade repariert.", meaning: "Araba şu an tamir ediliyor.", pronunciation: "das au-to virt gı-ra-dı re-pa-rirt", context: "Durum bildirimi" },
        { phrase: "Der Brief wurde gestern abgeschickt.", meaning: "Mektup dün gönderildi.", pronunciation: "der brif vur-dı ges-tın ap-gı-şikt", context: "Geçmiş eylem" },
        { phrase: "Das Problem muss gelöst werden.", meaning: "Sorun çözülmeli.", pronunciation: "das pro-blem mus gı-löst ver-dın", context: "Gereklilik" },
        { phrase: "Hier darf nicht geraucht werden.", meaning: "Burada sigara içilmez.", pronunciation: "hir darf niht gı-rauht ver-dın", context: "Yasak" }
    ]
};

// ===== UNIT 564: DOLAYLI ANLATIM =====
const unit564Phrases: GermanUnitPhrases = {
    unitId: 564, title: "Dolaylı Anlatım",
    phrases: [
        { phrase: "Er sagte, dass er keine Zeit habe.", meaning: "Vaktinin olmadığını söyledi.", pronunciation: "er zag-tı das er kay-nı tsayt ha-bı", context: "Aktarma" },
        { phrase: "Sie fragte mich, ob ich Hunger hätte.", pronunciation: "zi frag-tı mih op ih hung-ır he-tı", meaning: "Bana aç olup olmadığımı sordu.", context: "Soru aktarma" },
        { phrase: "Der Lehrer meinte, wir sollten mehr lernen.", pronunciation: "der le-rır mayn-tı vir şol-tın mer ler-nın", meaning: "Öğretmen daha fazla çalışmamız gerektiğini belirtti.", context: "Tavsiye aktarma" },
        { phrase: "Es wird berichtet, dass o gewonnen hat.", pronunciation: "es virt be-rih-tet das er gı-von-ın hat", meaning: "Kazandığı bildiriliyor.", context: "Haber aktarma" },
        { phrase: "Er behauptet, o sei unschuldig.", pronunciation: "er be-haup-tet er zay un-şul-dıh", meaning: "Masum olduğunu iddia ediyor.", context: "İddia aktarma" }
    ]
};

// ===== UNIT 565: GENITIV HALİ =====
const unit565Phrases: GermanUnitPhrases = {
    unitId: 565, title: "Genitiv Hali",
    phrases: [
        { phrase: "Wegen des Regens sind wir zu Hause.", meaning: "Yağmurdan dolayı evdeyiz.", pronunciation: "ve-gın des re-gıns zint vir tsu hau-zı", context: "Neden belirtme" },
        { phrase: "Trotz der Kälte geht o spazieren.", meaning: "Soğuğa rağmen yürüyüşe çıkıyor.", pronunciation: "trots der kel-tı get er şpa-tsi-rın", context: "Karşıtlık" },
        { phrase: "Das Ende des Films war traurig.", meaning: "Filmin sonu üzücüydü.", pronunciation: "das en-dı des films var trau-rıh", context: "Açıklama" },
        { phrase: "Während der Prüfung war es sehr leise.", meaning: "Sınav sırasında ortam çok sessizdi.", pronunciation: "ve-rınt der prü-fung var es zer lay-zı", context: "Zaman belirtme" },
        { phrase: "Das Spielzeug des Kindes ist kaputt.", meaning: "Çocuğun oyuncağı bozuk.", pronunciation: "das şpil-tsoyg des kin-dıs ist ka-put", context: "Aitlik" }
    ]
};

// ===== UNIT 566: PHRASAL VERBS 1 =====
const unit566Phrases: GermanUnitPhrases = {
    unitId: 566, title: "Phrasal Verbs 1",
    phrases: [
        { phrase: "Ruf mich bitte später an.", meaning: "Lütfen beni sonra ara.", pronunciation: "ruf mih bi-tı şpe-tır an", context: "İstek" },
        { phrase: "Wir fangen jetzt mit der Arbeit an.", meaning: "Şimdi işe başlıyoruz.", pronunciation: "vir fan-gın yetst mit der ar-bayt an", context: "Eylem başlangıcı" },
        { phrase: "Ich lade dich zu meiner Party ein.", meaning: "Seni partime davet ediyorum.", pronunciation: "ih la-dı dih tsu may-nır par-ti ayn", context: "Davet" },
        { phrase: "Mach bitte das Licht aus.", meaning: "Lütfen ışığı kapat.", pronunciation: "mah bi-tı das liht aus", context: "Rica" },
        { phrase: "Ich stehe jeden Morgen um 7 Uhr auf.", meaning: "Her sabah saat 7'de kalkarım.", pronunciation: "ih şte-ı ye-dın mor-gın um zi-bın ur auf", context: "Rutin" }
    ]
};

// ===== UNIT 567: PHRASAL VERBS 2 =====
const unit567Phrases: GermanUnitPhrases = {
    unitId: 567, title: "Phrasal Verbs 2",
    phrases: [
        { phrase: "Ich verstehe die Frage nicht.", meaning: "Soruyu anlamıyorum.", pronunciation: "ih fer-şte-ı di fra-gı niht", context: "Anlamama" },
        { phrase: "Er erzählt uns eine interessante Geschichte.", meaning: "Bize ilginç bir hikaye anlatıyor.", pronunciation: "er er-tselt uns ay-nı in-te-re-san-tı gı-şih-tı", context: "Anlatım" },
        { phrase: "Das gehört nicht zum Thema.", meaning: "Bu konuyla ilgili değil (konuya ait değil).", pronunciation: "das gı-hört niht tsum te-ma", context: "İtiraz" },
        { phrase: "Ich habe meinen Schlüssel vergessen.", meaning: "Anahtarımı unuttum.", pronunciation: "ih ha-bı may-nın şlü-sıl fer-ge-sın", context: "Unutkanlık" },
        { phrase: "Kannst du mir etwas empfehlen?", meaning: "Bana bir şey tavsiye edebilir misin?", pronunciation: "kanst du mir et-vas em-pfe-lın", context: "Tavsiye isteme" }
    ]
};

// ===== UNIT 568: HABERLER VE MEDYA =====
const unit568Phrases: GermanUnitPhrases = {
    unitId: 568, title: "Haberler ve Medya",
    phrases: [
        { phrase: "Hast du die Nachrichten gelesen?", meaning: "Haberleri okudun mu?", pronunciation: "hast du di nah-rih-tın gı-le-zın", context: "Soru" },
        { phrase: "Meiner Meinung nach ist das wichtig.", meaning: "Bana göre bu önemli.", pronunciation: "may-nır may-nung nah ist das vih-tıh", context: "Fikir belirtme" },
        { phrase: "Die Information ist nicht objektiv.", meaning: "Bilgi objektif değil.", pronunciation: "di in-for-ma-tsion ist niht op-yek-tif", context: "Eleştiri" },
        { phrase: "Das Interview war sehr interessant.", meaning: "Röportaj çok ilginçti.", pronunciation: "das in-ter-vyu var zer in-te-re-sant", context: "Yorum" },
        { phrase: "Ich habe es im Internet gefunden.", meaning: "Onu internette buldum.", pronunciation: "ih ha-bı es im in-ter-net gı-fun-dın", context: "Kaynak belirtme" }
    ]
};

// ===== UNIT 569: ÇEVRE SORUNLARI =====
const unit569Phrases: GermanUnitPhrases = {
    unitId: 569, title: "Çevre Sorunları",
    phrases: [
        { phrase: "Wir müssen die Umwelt schützen.", meaning: "Çevreyi korumalıyız.", pronunciation: "vir müs-tın di um-velt şüt-tsın", context: "Gereklilik" },
        { phrase: "Der Klimawandel ist eine große Gefahr.", meaning: "İklim değişikliği büyük bir tehlikedir.", pronunciation: "der kli-ma-van-dıl ist ay-nı gro-sı gı-far", context: "Tespit" },
        { phrase: "CO2-Ausstoß muss reduziert werden.", meaning: "CO2 salınımı azaltılmalı.", pronunciation: "tse-o-tsvay aus-ştoş mus re-du-tsirt ver-dın", context: "Çözüm" },
        { phrase: "Verschmutzung ist ein globales Problem.", meaning: "Kirlilik küresel bir sorundur.", pronunciation: "fer-şmut-sung ist ayn glo-ba-lıs pro-blem", context: "Genelleme" },
        { phrase: "Plastik ist schädlich für die Natur.", meaning: "Plastik doğa için zararlıdır.", pronunciation: "plas-tik ist şet-lıh für di na-tur", context: "Bilgi" }
    ]
};

// ===== UNIT 570: SÜRDÜRÜLEBİLİRLİK =====
const unit570Phrases: GermanUnitPhrases = {
    unitId: 570, title: "Sürdürülebilirlik",
    phrases: [
        { phrase: "Nachhaltigkeit beginnt im Alltag.", meaning: "Sürdürülebilirlik günlük hayatta başlar.", pronunciation: "nah-hal-tıh-kayt be-gint im al-tag", context: "Felsefe" },
        { phrase: "Recycling ist sehr wichtig.", meaning: "Geri dönüşüm çok önemlidir.", pronunciation: "re-say-kı-ling ist zer vih-tıh", context: "Vurgu" },
        { phrase: "Wir sollten Wasser sparen.", meaning: "Su tasarrufu yapmalıyız.", pronunciation: "vir şol-tın va-sır şpa-rın", context: "Öneri" },
        { phrase: "Ich kaufe nur Bio-Produkte.", meaning: "Sadece organik ürünler alıyorum.", pronunciation: "ih kau-fı nur bi-o pro-duk-tı", context: "Tercih" },
        { phrase: "Erneuerbare Energien sind die Zukunft.", meaning: "Yenilenebilir enerjiler gelecektir.", pronunciation: "er-noy-er-ba-rı e-ner-gi-ın zint di tsu-kunft", context: "Görüş" }
    ]
};

// ===== UNIT 571: KÜLTÜR VE GELENEKLER =====
const unit571Phrases: GermanUnitPhrases = {
    unitId: 571, title: "Kültür ve Gelenekler",
    phrases: [
        { phrase: "Das gehört zu unserer Kultur.", meaning: "Bu bizim kültürümüze aittir.", pronunciation: "das gı-hört tsu un-ze-rer kul-tur", context: "Aitlik" },
        { phrase: "Wir feiern dieses Fest jedes Jahr.", meaning: "Bu şenliği her yıl kutluyoruz.", pronunciation: "vir fay-ern di-zes fest ye-des yar", context: "Gelenek" },
        { phrase: "Es ist ein alter Brauch.", meaning: "Bu eski bir adettir.", pronunciation: "es ist ayn al-ter brauh", context: "Açıklama" }
    ]
};

// ===== UNIT 572: EKONOMİ TEMELLERİ =====
const unit572Phrases: GermanUnitPhrases = {
    unitId: 572, title: "Ekonomi Temelleri",
    phrases: [
        { phrase: "Die Wirtschaftslage ist stabil.", meaning: "Ekonomik durum istikrarlıdır.", pronunciation: "di virt-şafts-la-gı ist şta-bil", context: "Ekonomi" },
        { phrase: "Die Preise sind gestiegen.", meaning: "Fiyatlar yükseldi.", pronunciation: "di pray-zı zint gı-şti-gın", context: "Piyasa" },
        { phrase: "Das Unternehmen macht Gewinn.", meaning: "Şirket kar ediyor.", pronunciation: "das un-ter-ne-mın maht gı-vin", context: "İş dünyası" }
    ]
};

// ===== UNIT 573: TARTIŞMA BECERİLERİ =====
const unit573Phrases: GermanUnitPhrases = {
    unitId: 573, title: "Tartışma Becerileri",
    phrases: [
        { phrase: "Ich bin fest davon überzeugt, dass...", meaning: "Şuna kesinlikle inanıyorum ki...", pronunciation: "ih bin fest da-fon ü-ber-tsoygt das", context: "İkna" },
        { phrase: "Das ist ein wichtiges Argument.", meaning: "Bu önemli bir argümandır.", pronunciation: "das ist ayn vih-ti-ges ar-gu-ment", context: "Tartışma" },
        { phrase: "Wie ist Ihre Meinung dazu?", meaning: "Sizin bu konudaki fikriniz nedir?", pronunciation: "vi ist i-re may-nung da-tsu", context: "Soru" }
    ]
};

// ===== UNIT 574: SUNUM YAPMA =====
const unit574Phrases: GermanUnitPhrases = {
    unitId: 574, title: "Sunum Yapma",
    phrases: [
        { phrase: "Heute präsentiere ich das Thema...", meaning: "Bugün size ... konusunu sunuyorum.", pronunciation: "hoy-tı pre-zen-ti-re ih das te-ma", context: "Giriş" },
        { phrase: "Kommen wir zu nächsten Punkt.", meaning: "Sıradaki noktaya gelelim.", pronunciation: "ko-mın vir tsu nöh-stın punkt", context: "Geçiş" },
        { phrase: "Vielen Dank für Ihre Aufmerksamkeit.", meaning: "İlginiz için çok teşekkür ederim.", pronunciation: "fi-lın dank für i-re auf-merk-zam-kayt", context: "Kapanış" }
    ]
};

// ===== UNIT 575: EDEBİYAT 1 =====
const unit575Phrases: GermanUnitPhrases = {
    unitId: 575, title: "Edebiyat 1",
    phrases: [
        { phrase: "Der Roman handelt von...", meaning: "Roman ... hakkındadır.", pronunciation: "der ro-man han-delt fon", context: "Özet" },
        { phrase: "Die Hauptfigur ist sehr komplex.", meaning: "Ana karakter çok karmaşıktır.", pronunciation: "di haupt-fi-gur ist zer kom-pleks", context: "Analiz" },
        { phrase: "Das Gedicht hat einen tiefen Sinn.", meaning: "Şiirin derin bir anlamı var.", pronunciation: "das gı-diht hat ayn-ın ti-fın zin", context: "Yorum" }
    ]
};

// ===== UNIT 576: AKADEMİK YAZMA =====
const unit576Phrases: GermanUnitPhrases = {
    unitId: 576, title: "Akademik Yazma",
    phrases: [
        { phrase: "In dieser Arbeit wird untersucht...", meaning: "Bu çalışmada ... araştırılmaktadır.", pronunciation: "in di-zer ar-bayt virt un-ter-zuht", context: "Akademik giriş" },
        { phrase: "Zusammenfassend lässt sich sagen...", meaning: "Özetle denilebilir ki...", pronunciation: "tsu-za-mın-fa-sent lest zih za-gın", context: "Sonuç" },
        { phrase: "Es ist wissenschaftlich belegt.", meaning: "Bu bilimsel olarak kanıtlanmıştır.", pronunciation: "es ist vis-ın-şaft-lih be-legt", context: "Kanıt" }
    ]
};

// ===== UNIT 577: BİLİM VE TEKNOLOJİ =====
const unit577Phrases: GermanUnitPhrases = {
    unitId: 577, title: "Bilim ve Teknoloji",
    phrases: [
        { phrase: "Die Technik entwickelt sich schnell.", meaning: "Teknoloji hızlı gelişiyor.", pronunciation: "di teh-nik ent-vik-elt zih şnel", context: "Gelişim" },
        { phrase: "Daten werden sicher gespeichert.", meaning: "Veriler güvenli bir şekilde kaydediliyor.", pronunciation: "da-tın ver-dın zi-her gı-şpay-hert", context: "Bilişim" },
        { phrase: "Forschung ist für den Fortschritt wichtig.", meaning: "Araştırma, ilerleme için önemlidir.", pronunciation: "for-şung ist für den fort-şrit vih-tih", context: "Önem" }
    ]
};

// ===== UNIT 578: SAĞLIK VE BESLENME =====
const unit578Phrases: GermanUnitPhrases = {
    unitId: 578, title: "Sağlık ve Beslenme",
    phrases: [
        { phrase: "Eine ausgewogene Ernährung ist wichtig.", meaning: "Dengeli bir beslenme önemlidir.", pronunciation: "ay-ne aus-ge-vo-ge-ne er-ne-rung ist vih-tih", context: "Sağlık" },
        { phrase: "Man sollte regelmäßig Sport treiben.", meaning: "Düzenli olarak spor yapılmalıdır.", pronunciation: "man zol-te re-gel-me-sih şport tray-bın", context: "Tavsiye" },
        { phrase: "Gesundheit geht vor.", meaning: "Sağlık her şeyden önce gelir.", pronunciation: "gı-zunt-hayt get for", context: "Prensip" }
    ]
};

// ===== UNIT 579: PSİKOLOJİ TEMELLERİ =====
const unit579Phrases: GermanUnitPhrases = {
    unitId: 579, title: "Psikoloji Temelleri",
    phrases: [
        { phrase: "Das Verhalten ist schwer zu erklären.", meaning: "Davranışı açıklamak zordur.", pronunciation: "das fer-hal-tın ist şver tsu er-kle-rın", context: "Psikoloji" },
        { phrase: "Wir zeigen unsere Emotionen.", meaning: "Duygularımızı gösteriyoruz.", pronunciation: "vir tsay-gın un-ze-re e-mo-tsio-nın", context: "Duygu" },
        { phrase: "Motivation ist der Schlüssel zum Erfolg.", meaning: "Motivasyon başarının anahtarıdır.", pronunciation: "mo-ti-va-tsion ist der şlü-sıl tsum er-folg", context: "Başarı" }
    ]
};

// ===== UNIT 580: İŞ ALMANCASI 1 =====
const unit580Phrases: GermanUnitPhrases = {
    unitId: 580, title: "İş Almancası 1",
    phrases: [
        { phrase: "Wir müssen das Meeting verschieben.", meaning: "Toplantıyı ertelemeliyiz.", pronunciation: "vir müs-ın das mi-ting fer-şi-bın", context: "Planlama" },
        { phrase: "Ich freue mich auf die Zusammenarbeit.", meaning: "İşbirliğimiz için memnunum (dört gözle bekliyorum).", pronunciation: "ih froy-ı mih auf di tsu-za-mın-ar-bayt", context: "Nezaket" },
        { phrase: "Die Frist für das Projekt ist morgen.", meaning: "Projenin teslim tarihi yarındır.", pronunciation: "di frist für das pro-yekt ist mor-gın", context: "İş takibi" }
    ]
};

// ===== UNIT 581: PLUSQUAMPERFEKT =====
const unit581Phrases: GermanUnitPhrases = {
    unitId: 581, title: "Plusquamperfekt",
    phrases: [
        { phrase: "Bevor ich ging, hatte ich gegessen.", meaning: "Gitmeden önce yemek yemiştim.", pronunciation: "be-for ih ging ha-tı ih gı-ge-sın", context: "Geçmişin geçmişi" },
        { phrase: "Sie war schon weggegangen.", meaning: "O çoktan gitmişti.", pronunciation: "zi var şon vek-gı-gan-gın", context: "Durum" },
        { phrase: "Wir hatten alles vorbereitet.", meaning: "Her şeyi hazırlamıştık.", pronunciation: "vir ha-tın a-les for-be-ray-tet", context: "Hazırlık" }
    ]
};

// ===== UNIT 582: FUTUR II =====
const unit582Phrases: GermanUnitPhrases = {
    unitId: 582, title: "Futur II",
    phrases: [
        { phrase: "Ich werde es bis morgen gemacht haben.", meaning: "Yarına kadar yapmış olacağım.", pronunciation: "ih ver-dı es bis mor-gın gı-maht ha-bın", context: "Gelecek tamamlanma" },
        { phrase: "Sie wird wohl schon angekommen sein.", meaning: "O galiba çoktan varmıştır.", pronunciation: "zi virt vol şon an-gı-ko-mın zayn", context: "Tahmin" },
        { phrase: "Das Problem wird gelöst worden sein.", meaning: "Sorun çözülmüş olacaktır.", pronunciation: "das pro-blem virt gı-löst vor-dın zayn", context: "Gelecek pasif" }
    ]
};

// ===== UNIT 583: RELATIVSÄTZE =====
const unit583Phrases: GermanUnitPhrases = {
    unitId: 583, title: "Relativsätze",
    phrases: [
        { phrase: "Der Mann, den ich sah, war nett.", meaning: "Gördüğüm adam nazikti.", pronunciation: "der man den ih za var net", context: "Tanımlama" },
        { phrase: "Das Buch, das ich lese, ist gut.", meaning: "Okuduğum kitap iyidir.", pronunciation: "das buh das ih le-zı ist gut", context: "Açıklama" },
        { phrase: "Die Frau, der ich helfe, freut sich.", meaning: "Yardım ettiğim kadın seviniyor.", pronunciation: "di frau der ih hel-fı froyt zih", context: "İlgi cümlesi" }
    ]
};

// ===== UNIT 584: KAUSALSÄTZE =====
const unit584Phrases: GermanUnitPhrases = {
    unitId: 584, title: "Kausalsätze",
    phrases: [
        { phrase: "Da es regnet, bleibe ich hier.", meaning: "Yağmur yağdığı için burada kalıyorum.", pronunciation: "da es reg-net blay-bı ih hir", context: "Sebep" },
        { phrase: "Weil ich müde bin, schlafe ich.", meaning: "Yorgun olduğum için uyuyorum.", pronunciation: "vayl ih mü-dı bin şla-fı", context: "Neden" },
        { phrase: "Denn es ist schon spät.", meaning: "Çünkü zaten geç oldu.", pronunciation: "den es ist şon şpet", context: "Açıklama" }
    ]
};

// ===== UNIT 585: WUNSCHSÄTZE =====
const unit585Phrases: GermanUnitPhrases = {
    unitId: 585, title: "Wunschsätze",
    phrases: [
        { phrase: "Hätte ich doch mehr Zeit!", meaning: "Keşke daha fazla vaktim olsaydı!", pronunciation: "he-tı ih doh mer tsayt", context: "Dilek" },
        { phrase: "Wenn er nur kommen würde!", meaning: "Keşke gelse!", pronunciation: "ven er nur ko-mın vür-dı", context: "İstek" },
        { phrase: "Wäre ich nur reicher!", meaning: "Keşke daha zengin olsaydım!", pronunciation: "ve-rı ih nur ray-hır", context: "Hayal" }
    ]
};

// ===== UNIT 586: MODALVERBEN GEG. =====
const unit586Phrases: GermanUnitPhrases = {
    unitId: 586, title: "Modalverben Geg.",
    phrases: [
        { phrase: "Er könnte krank sein.", meaning: "O hasta olabilir.", pronunciation: "er kön-tı krank zayn", context: "Olasılık" },
        { phrase: "Das müsste stimmen.", meaning: "Bu doğru olmalı.", pronunciation: "das müs-tı ştim-ın", context: "Tahmin" },
        { phrase: "Sie dürfte schon da sein.", meaning: "O çoktan orada olmalı (muhtemelen).", pronunciation: "zi dürf-tı şon da zayn", context: "Kuvvetli tahmin" }
    ]
};

// ===== UNIT 587: NOMINALISIERUNG =====
const unit587Phrases: GermanUnitPhrases = {
    unitId: 587, title: "Nominalisierung",
    phrases: [
        { phrase: "Das Lesen macht Spaß.", meaning: "Okumak keyif verir.", pronunciation: "das le-zın maht şpas", context: "İsimleştirme" },
        { phrase: "Zum Schreiben braucht man Ruhe.", meaning: "Yazmak için sessizliğe ihtiyaç duyulur.", pronunciation: "tsum şray-bın brauht man ru-ı", context: "Kullanım" },
        { phrase: "Beim Lernen bin ich konzentriert.", meaning: "Öğrenirken konsantreyim.", pronunciation: "baym ler-nın bin ih kon-tsen-trirt", context: "Zamanlı eylem" }
    ]
};

// ===== UNIT 588: PARTIZIPIALATT. =====
const unit588Phrases: GermanUnitPhrases = {
    unitId: 588, title: "Partizipialatt.",
    phrases: [
        { phrase: "Das laufende Kind lacht.", meaning: "Koşan çocuk gülüyor.", pronunciation: "das lau-fen-dı kint laht", context: "Sıfat fiil" },
        { phrase: "Die gelesene Zeitung liegt da.", meaning: "Okunmuş gazete orada duruyor.", pronunciation: "di gı-le-ze-ne tsay-tung ligt da", context: "Geçmiş sıfat fiil" },
        { phrase: "Ein arbeitender Mann ist fleißig.", meaning: "Çalışan bir adam çalışkandır.", pronunciation: "ayn ar-bay-ten-der man ist flay-sih", context: "Tanımlama" }
    ]
};

// ===== UNIT 589: KONJUNKTIONEN =====
const unit589Phrases: GermanUnitPhrases = {
    unitId: 589, title: "Konjunktionen",
    phrases: [
        { phrase: "Sowohl ... als auch ...", meaning: "Hem ... hem de ...", pronunciation: "zo-vol als auh", context: "Bağlaç" },
        { phrase: "Weder ... noch ...", meaning: "Ne ... ne de ...", pronunciation: "ve-der noh", context: "Olumsuz bağlaç" },
        { phrase: "Entweder ... oder ...", meaning: "Ya ... ya da ...", pronunciation: "ent-ve-der o-der", context: "Seçenek" }
    ]
};

// ===== UNIT 590: B1 TEKRAR =====
const unit590Phrases: GermanUnitPhrases = {
    unitId: 590, title: "B1 Tekrar",
    phrases: [
        { phrase: "Ich habe das B1-Niveau erreicht.", meaning: "B1 seviyesine ulaştım.", pronunciation: "ih ha-bı das be-ayns ni-vo er-rayht", context: "Başarı" },
        { phrase: "Wir wiederholen alles noch mal.", meaning: "Her şeyi bir kez daha tekrarlıyoruz.", pronunciation: "vir vi-der-ho-lın a-les noh mal", context: "Tekrar" },
        { phrase: "Bereit für die Prüfung!", meaning: "Sınav için hazır!", pronunciation: "be-rayt für di prü-fung", context: "Durum" }
    ]
};

const unitMap: { [key: number]: GermanUnitPhrases } = {
    561: unit561Phrases, 562: unit562Phrases, 563: unit563Phrases, 564: unit564Phrases, 565: unit565Phrases,
    566: unit566Phrases, 567: unit567Phrases, 568: unit568Phrases, 569: unit569Phrases, 570: unit570Phrases,
    571: unit571Phrases, 572: unit572Phrases, 573: unit573Phrases, 574: unit574Phrases, 575: unit575Phrases,
    576: unit576Phrases, 577: unit577Phrases, 578: unit578Phrases, 579: unit579Phrases, 580: unit580Phrases,
    581: unit581Phrases, 582: unit582Phrases, 583: unit583Phrases, 584: unit584Phrases, 585: unit585Phrases,
    586: unit586Phrases, 587: unit587Phrases, 588: unit588Phrases, 589: unit589Phrases, 590: unit590Phrases,
};

export function getGermanB1PhrasesForUnit(unitId: number): GermanUnitPhrases {
    return unitMap[unitId] || unit561Phrases;
}
