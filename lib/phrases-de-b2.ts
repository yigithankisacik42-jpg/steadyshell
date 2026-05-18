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

// Unit 591: İleri Gramer 1
export const u591: GermanPhraseUnit = {
    unitId: 591, title: "İleri Gramer 1 (Erweiterte Zeiten)", phrases: [
        { phrase: "Ich werde die Arbeit bis morgen abgeschlossen haben.", meaning: "İşi yarına kadar tamamlamış olacağım.", context: "Gelecek Planları (Futur II)", example: "Keine Sorge, ich werde die Arbeit bis morgen abgeschlossen haben.", pronunciation: "ıh ver-dı di ar-bayt bis mor-gın ap-gı-şlo-sın ha-bın" },
        { phrase: "Er wird wahrscheinlich schon angekommen sein.", meaning: "Muhtemelen çoktan varmış olmalı.", context: "Güçlü Tahmin", example: "Sein Auto steht da, er wird wahrscheinlich schon angekommen sein.", pronunciation: "er virt var-şayn-lıh şön an-gı-ko-mın zayn" },
        { phrase: "Bis nächste Woche werden wir eine Lösung gefunden haben.", meaning: "Gelecek haftaya kadar bir çözüm bulmuş olacağız.", context: "Planlar", example: "Bis nächste Woche werden wir eine Lösung gefunden haben.", pronunciation: "bis nehs-tı vo-hı ver-dın vir ay-nı lö-zung gı-fun-dın ha-bın" },
        { phrase: "Sie werden das Haus bereits bezahlt haben.", meaning: "Evin parasını çoktan ödemiş olacaklar.", context: "Varsayım", example: "Sie werden das Haus bereits bezahlt haben.", pronunciation: "zi ver-dın das haus bı-rayts bı-tsalt ha-bın" },
        { phrase: "Morgen um diese Zeit werde ich am Strand liegen.", meaning: "Yarın bu saatte sahilde uzanıyor olacağım.", context: "Hayal/Gelecek", example: "Morgen um diese Zeit werde ich am Strand liegen.", pronunciation: "mor-gın um di-zı tsayt ver-dı ıh am ştrant li-gın" }
    ]
};

// Unit 592: İleri Gramer 2
export const u592: GermanPhraseUnit = {
    unitId: 592, title: "İleri Gramer 2 (Komplexe Strukturen)", phrases: [
        { phrase: "Je mehr du lernst, desto besser sprichst du.", meaning: "Ne kadar çok çalışırsan, o kadar iyi konuşursun.", context: "Doğru Orantı (Je...desto)", example: "Je mehr du lernst, desto besser sprichst du.", pronunciation: "ye mer du lernst des-to be-sır şprıhst du" },
        { phrase: "Je schneller wir arbeiten, desto früher sind wir fertig.", meaning: "Ne kadar hızlı çalışırsak, o kadar erken bitiririz.", context: "Hız ve Süreç", example: "Je schneller wir arbeiten, desto früher sind wir fertig.", pronunciation: "ye şne-lır vir ar-bay-tın des-to frü-ır zint vir fer-tıh" },
        { phrase: "Je älter man wird, desto weiser wird man.", meaning: "İnsan yaşlandıkça bilgeleşir.", context: "Yaşam", example: "Je älter man wird, desto weiser wird man.", pronunciation: "ye el-tın man virt des-to vay-zır virt man" },
        { phrase: "Je kälter es ist, umso mehr heizen wir.", meaning: "Hava ne kadar soğuksa, o kadar çok ısıtıyoruz.", context: "Kış", example: "Je kälter es ist, umso mehr heizen wir.", pronunciation: "ye kel-tın es ist um-zo mer hay-tsın vir" },
        { phrase: "Je früher du kommst, desto besser ist es.", meaning: "Ne kadar erken gelirsen, o kadar iyi olur.", context: "Zamanlama", example: "Je früher du kommst, desto besser ist es.", pronunciation: "ye frü-ır du komst des-to be-sır ist es" }
    ]
};

// Unit 593: Deyimler 1
export const u593: GermanPhraseUnit = {
    unitId: 593, title: "Deyimler 1 (Redewendungen)", phrases: [
        { phrase: "Ich drücke dir ganz fest die Daumen!", meaning: "Sana yürekten başarılar/şans diliyorum!", context: "Şans Dileme", example: "Du hast morgen eine Prüfung? Ich drücke dir ganz fest die Daumen!", pronunciation: "ıh drü-kı dir gants fest di dau-mın" },
        { phrase: "Du gehst mir wirklich auf den Wecker!", meaning: "Gerçekten sinirimi bozuyorsun / kafamı ütülüyorsun!", context: "Kızgınlık", example: "Hör auf mit dem Lärm, du gehst mir auf den Wecker!", pronunciation: "du geyst mir virk-lıh auf den ve-kır" },
        { phrase: "Er hat zwei linke Hände.", meaning: "Onun eli hiç işe yatkın değil (beceriksiz).", context: "Yorum", example: "Lass ihn das nicht reparieren, er hat zwei linke Hände.", pronunciation: "er hat tsvay lin-kı hen-dı" },
        { phrase: "Wir haben zwei Fliegen mit einer Klappe geschlagen.", meaning: "Bir taşla iki kuş vurduk.", context: "Başarı", example: "Wir haben zwei Fliegen mit einer Klappe geschlagen.", pronunciation: "vir ha-bın tsvay fli-gın mit ay-nır kla-pı gı-şla-gın" },
        { phrase: "Das ist nicht mein Bier.", meaning: "Bu beni ilgilendirmez / benim işim değil.", context: "Mesafe", example: "Was sie tun, ist nicht mein Bier.", pronunciation: "das ist nıht mayn bir" }
    ]
};

// Unit 594: Deyimler 2
export const u594: GermanPhraseUnit = {
    unitId: 594, title: "Deyimler 2 (Weitere Redewendungen)", phrases: [
        { phrase: "Ich verstehe nur Bahnhof.", meaning: "Hiçbir şey anlamıyorum.", context: "Anlamama", example: "Kannst du das wiederholen? Ich verstehe nur Bahnhof.", pronunciation: "ıh fer-şte-ı nur ban-hof" },
        { phrase: "Er hat den Faden verloren.", meaning: "Konuşurken ipin ucunu kaçırdı.", context: "Unutma", example: "Mitten im Satz hat er den Faden verloren.", pronunciation: "er hat den fa-dın fer-lo-rın" },
        { phrase: "Er hat alles durch die Blume gesagt.", meaning: "Her şeyi lafı dolandırarak / kibarca söyledi.", context: "İletişim", example: "Er wollte mich nicht verletzen, also hat er es durch die Blume gesagt.", pronunciation: "er hat a-lıs durh di blu-mı gı-zagt" },
        { phrase: "Der Chef hat noch einmal ein Auge zugedrückt.", meaning: "Patron bu seferlik görmezden geldi (göz yumdu).", context: "İş/Hata", example: "Der Chef hat noch einmal ein Auge zugedrückt.", pronunciation: "der şef hat noh ayn-mal ayn au-gı tsu-gı-drükt" },
        { phrase: "Mach dir keinen Kopf!", meaning: "Kafana takma!", context: "Teselli", example: "Es ist nichts Schlimmes passiert. Mach dir keinen Kopf!", pronunciation: "mah dir kay-nən kopf" }
    ]
};

// Unit 595: Formal Yazışma
export const u595: GermanPhraseUnit = {
    unitId: 595, title: "Formal Yazışma (Geschäftsbriefe)", phrases: [
        { phrase: "Sehr geehrte Damen und Herren,", meaning: "Sayın Baylar ve Bayanlar,", context: "Hitap", example: "Sehr geehrte Damen und Herren, hiermit bewerbe ich mich...", pronunciation: "zer ge-ehr-tı da-mın unt he-rın" },
        { phrase: "Mit freundlichen Grüßen", meaning: "Saygılarımla", context: "Selamlama/Kapanış", example: "Mit freundlichen Grüßen, Max Mustermann.", pronunciation: "mit froynt-lı-hın grü-sın" },
        { phrase: "Ich schreibe Ihnen bezüglich Ihrer Anzeige.", meaning: "Size ilanınızla ilgili olarak yazıyorum.", context: "Giriş", example: "Ich schreibe Ihnen bezüglich Ihrer Anzeige vom 10. Mai.", pronunciation: "ıh şray-bı i-nən bı-tsük-lıh i-rır an-tsay-gı" },
        { phrase: "Die Datei befindet sich im Anhang.", meaning: "Dosya ektedir.", context: "E-posta eki", example: "Die Datei befindet sich im Anhang dieser E-Mail.", pronunciation: "di da-tay bı-fin-dət zıh ım an-hang" },
        { phrase: "Ich freue mich auf Ihre baldige Antwort.", meaning: "Kısa zamanda cevabınızı bekliyorum.", context: "Kapanış", example: "Ich freue mich auf Ihre baldige Antwort. Vielen Dank.", pronunciation: "ıh fro-yə mıh auf i-rə bal-dı-gə ant-vort" }
    ]
};

// Unit 596: Sunum Teknikleri
export const u596: GermanPhraseUnit = {
    unitId: 596, title: "Sunum Teknikleri (Fortgeschrittene Präsentation)", phrases: [
        { phrase: "Ich möchte mich kurz vorstellen.", meaning: "Kendimi kısaca tanıtmak isterdim.", context: "Giriş", example: "Zuerst möchte ich mich kurz vorstellen.", pronunciation: "ıh möh-tə mıh kurts for-şte-lən" },
        { phrase: "Vielen Dank für Ihre Aufmerksamkeit.", meaning: "Dikkatiniz için çok teşekkür ederim.", context: "Kapanış", example: "Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?", pronunciation: "fi-lən dank für i-rə auf-merk-zam-kayt" },
        { phrase: "Das bringt mich zum nächsten Punkt.", meaning: "Bu beni bir sonraki noktaya getiriyor.", context: "Geçiş", example: "Das bringt mich zum nächsten Punkt unserer Präsentation.", pronunciation: "das bringt mıh tsum nehs-tən punkt" },
        { phrase: "Lassen Sie uns nun die Statistik betrachten.", meaning: "Şimdi istatistiğe bir göz atalım.", context: "Analiz", example: "Lassen Sie uns nun die Statistik betrachten.", pronunciation: "la-sın zi uns nun di şta-tıs-tık bı-trah-tən" },
        { phrase: "Zusammenfassend lässt sich sagen, dass...", meaning: "Özetle denilebilir ki...", context: "Özetleme", example: "Zusammenfassend lässt sich sagen, dass das Projekt ein Erfolg war.", pronunciation: "tsu-za-mən-fa-sənt lest zıh za-gən das" }
    ]
};

// Unit 597: Müzakere
export const u597: GermanPhraseUnit = {
    unitId: 597, title: "Müzakere (Verhandlungsfähigkeiten)", phrases: [
        { phrase: "Könnten Sie uns einen Rabatt gewähren?", meaning: "Bize bir indirim sağlayabilir miydiniz?", context: "Nezaket", example: "Könnten Sie uns einen Rabatt gewähren?", pronunciation: "kön-tən zi uns ay-nən ra-bat gı-ver-ən" },
        { phrase: "Es wäre gut, wenn wir einen Kompromiss fänden.", meaning: "Bir uzlaşma bulsaydık iyi olurdu.", context: "Dilek", example: "Es wäre gut, wenn wir einen Kompromiss fänden.", pronunciation: "es ve-rə gut ven vir ay-nən kom-pro-mıs fen-dən" },
        { phrase: "Das ist ein faires Angebot.", meaning: "Bu adil bir teklif.", context: "Kabul", example: "Ich denke, das ist ein faires Angebot.", pronunciation: "das ist ayn fay-rəs an-gı-bot" },
        { phrase: "Wir müssen uns in der Mitte treffen.", meaning: "Ortada buluşmalıyız.", context: "Uzlaşma", example: "Wir müssen uns in der Mitte treffen.", pronunciation: "vir müs-sən uns in der mı-tə tre-fən" },
        { phrase: "Ich stimme diesem Punkt zu.", meaning: "Bu noktaya katılıyorum.", context: "Anlaşma", example: "Ich stimme diesem Punkt vollkommen zu.", pronunciation: "ıh ştı-mə di-zəm punkt tsu" }
    ]
};

// Unit 598: Hukuk Almancası
export const u598: GermanPhraseUnit = {
    unitId: 598, title: "Hukuk Almancası (Rechtsbegriffe)", phrases: [
        { phrase: "Verträge müssen eingehalten werden.", meaning: "Sözleşmelere uyulmalıdır (Ahde vefa).", context: "Yasa", example: "Verträge müssen eingehalten werden, das ist das Grundprinzip.", pronunciation: "fer-tre-gə müs-sən ayn-gı-hal-tən ver-dən" },
        { phrase: "Das Gesetz verbietet dies ausdrücklich.", meaning: "Yasa bunu açıkça yasaklamaktadır.", context: "Yasallık", example: "Das Gesetz verbietet dies ausdrücklich.", pronunciation: "das gı-zets fer-bi-tət dis aus-drük-lıh" },
        { phrase: "Ich werde einen Anwalt einschalten.", meaning: "Bir avukatı devreye sokacağım.", context: "Önlem", example: "Wenn das so weitergeht, werde ich einen Anwalt einschalten.", pronunciation: "ıh ver-də ay-nən an-valt ayn-şal-tən" },
        { phrase: "Das Recht auf freie Meinungsäußerung.", meaning: "Özgür düşünceyi ifade etme hakkı.", context: "İnsan Hakları", example: "Das Recht auf freie Meinungsäußerung ist geschützt.", pronunciation: "das reht auf fray-ə may-nungs-oy-zə-rung" },
        { phrase: "Sie haben gegen die Regeln verstoßen.", meaning: "Kuralları ihlal ettiniz.", context: "İhlal", example: "Sie haben gegen die Regeln des Vertrags verstoßen.", pronunciation: "zi ha-bın ge-gən di re-gəln fer-şto-sən" }
    ]
};

// Unit 599: Tıbbi Almanca
export const u599: GermanPhraseUnit = {
    unitId: 599, title: "Tıbbi Almanca (Medizinische Begriffe)", phrases: [
        { phrase: "Sie sollten dreimal täglich eine Tablette einnehmen.", meaning: "Günde üç kez bir tablet almalısınız.", context: "Reçete", example: "Sie sollten dreimal täglich eine Tablette nach dem Essen einnehmen.", pronunciation: "zi zol-tən dray-mal teg-lıh ay-nı ta-ble-tə ayn-ne-mən" },
        { phrase: "Der Arzt hat mir Tabletten verschrieben.", meaning: "Doktor bana ilaç yazdı.", context: "Tedavi", example: "Der Arzt hat mir Tabletten gegen die Schmerzen verschrieben.", pronunciation: "der artst hat mir ta-ble-tən fer-şri-bən" },
        { phrase: "Wo haben Sie Schmerzen?", meaning: "Nerede ağrınız var?", context: "Muayene", example: "Sagen Sie mir, wo haben Sie Schmerzen?", pronunciation: "vo ha-bın zi şmer-tsən" },
        { phrase: "Ich muss einen Termin vereinbaren.", meaning: "Bir randevu ayarlamam gerekiyor.", context: "Hasta", example: "Ich muss einen Termin beim Zahnarzt vereinbaren.", pronunciation: "ıh mus ay-nən ter-min fer-ayn-ba-rən" },
        { phrase: "Sie müssen sich schonen.", meaning: "Kendinizi yormamalı, dinlenmelisiniz.", context: "Tavsiye", example: "Nach der Operation müssen Sie sich schonen.", pronunciation: "zi müs-sən zıh şo-nən" }
    ]
};

// Unit 600: Finans Almancası
export const u600: GermanPhraseUnit = {
    unitId: 600, title: "Finans Almancası (Finanzvokabular)", phrases: [
        { phrase: "Wenn die Zinsen steigen, sinken die Aktienkurse.", meaning: "Faizler yükselirse hisse senedi fiyatları düşer.", context: "Finans Teorisi", example: "Wenn die Zinsen steigen, sinken die Aktienkurse.", pronunciation: "ven di tsın-zən ştay-gən zın-kən di ak-tsyən-kur-zə" },
        { phrase: "Es ist wichtig, das Risiko zu streuen.", meaning: "Riski dağıtmak (çeşitlendirmek) önemlidir.", context: "Yatırım", example: "Es ist wichtig, das Risiko im Portfolio zu streuen.", pronunciation: "es ist vıh-tıh das ri-zi-ko tsu ştroy-ən" },
        { phrase: "Ich möchte ein Sparkonto eröffnen.", meaning: "Bir tasarruf hesabı açmak istiyorum.", context: "Banka", example: "Ich möchte ein Sparkonto bei Ihrer Bank eröffnen.", pronunciation: "ıh möh-tə ayn şpar-kon-to er-öf-nən" },
        { phrase: "Die Inflation belastet die Wirtschaft.", meaning: "Enflasyon ekonomiyi olumsuz etkiliyor.", context: "Ekonomi", example: "Die Inflation belastet die Wirtschaft stark.", pronunciation: "di ın-fla-tsyən bı-las-tət di virt-şaft" },
        { phrase: "Man sollte in Immobilien investieren.", meaning: "Gayrimenkule yatırım yapılmalı.", context: "Tavsiye", example: "Man sollte in Immobilien investieren, um Werte zu sichern.", pronunciation: "man zol-tə ın ı-mo-bi-lyən ın-ves-ti-rən" }
    ]
};

// Unit 601: Edebiyat Analizi
export const u601: GermanPhraseUnit = {
    unitId: 601, title: "Edebiyat Analizi (Literaturanalyse)", phrases: [
        { phrase: "Der Autor beschreibt die Einsamkeit der Hauptfigur.", meaning: "Yazar ana karakterin yalnızlığını betimliyor.", context: "Kitap Analizi", example: "Der Autor beschreibt die Einsamkeit der Hauptfigur sehr tiefgründig.", pronunciation: "der au-tor bı-şraypt di ayn-zam-kayt der haupt-fi-gur" },
        { phrase: "Das Motiv des Wassers symbolisiert den Tod.", meaning: "Su motifi ölümü simgeliyor.", context: "Sembolizm", example: "Das Motiv des Wassers symbolisiert den Tod in dieser Geschichte.", pronunciation: "das mo-tif des va-sırs züm-bo-li-zi-rt den tot" },
        { phrase: "Der Roman ist in der Ich-Form geschrieben.", meaning: "Roman birinci tekil şahıs ağzından yazılmıştır.", context: "Teknik", example: "Der Roman ist in der Ich-Form geschrieben.", pronunciation: "der ro-man ist ın der ıh-form gı-şri-bən" },
        { phrase: "Die Metapher verdeutlicht den Konflikt.", meaning: "Metafor çatışmayı netleştiriyor.", context: "Üslup", example: "Die Metapher verdeutlicht den inneren Konflikt des Helden.", pronunciation: "di me-ta-fər fer-doyt-lıht den kon-flıkt" },
        { phrase: "Der Protagonist steht vor einer schweren Wahl.", meaning: "Başkarakter zor bir seçimle karşı karşıya.", context: "Karakter", example: "Der Protagonist steht vor einer schweren Wahl.", pronunciation: "der pro-ta-go-nıst ştet for ay-nır şve-rən val" }
    ]
};

// Unit 602: Tartışmalı Konular
export const u602: GermanPhraseUnit = {
    unitId: 602, title: "Tartışmalı Konular (Kontroverse Themen)", phrases: [
        { phrase: "Obwohl es teuer ist, hat es viele Vorteile.", meaning: "Pahalı olmasına rağmen birçok avantajı var.", context: "Zıtlık", example: "Obwohl es teuer ist, hat es viele Vorteile.", pronunciation: "op-vol es toy-ər ist hat es fi-lə for-tay-lə" },
        { phrase: "Es gibt viele Argumente dafür und dagegen.", meaning: "Lehte ve aleyhte birçok argüman var.", context: "Müzakere", example: "Es gibt viele Argumente dafür und dagegen.", pronunciation: "es gipt fi-lə ar-gu-men-tə da-für unt da-ge-gən" },
        { phrase: "Ich sehe das völlig anders.", meaning: "Bunu tamamen farklı görüyorum.", context: "Karşı çıkma", example: "Tut mir leid, aber ich sehe das völlig anders.", pronunciation: "ıh ze-ə das föl-lıh an-dırs" },
        { phrase: "Man muss beide Seiten der Medaille sehen.", meaning: "Madalyonun iki yüzünü de görmek gerekir.", context: "Deyim", example: "Man muss beide Seiten der Medaille sehen.", pronunciation: "man mus bay-də zay-tən der me-dal-yə ze-hən" },
        { phrase: "Wir müssen eine sachliche Diskussion führen.", meaning: "Nesnel/objektif bir tartışma yürütmeliyiz.", context: "Sosyal", example: "Wir müssen eine sachliche Diskussion führen.", pronunciation: "vir müs-sən ay-nı zah-lı-hı dıs-kus-yən fü-rən" }
    ]
};

// Unit 603: Akademik Okuma
export const u603: GermanPhraseUnit = {
    unitId: 603, title: "Akademik Okuma (Wissenschaftliche Texte)", phrases: [
        { phrase: "Es wird angenommen, dass diese Theorie stimmt.", meaning: "Bu teorinin doğru olduğu varsayılmaktadır.", context: "Bilim", example: "Es wird angenommen, dass diese Theorie stimmt.", pronunciation: "es virt an-gı-no-mən das di-zə te-o-ri ştımt" },
        { phrase: "Hierbei kann man deutliche Unterschiede beobachten.", meaning: "Burada net farklar gözlemlemek mümkündür.", context: "Gözlem", example: "Hierbei kann man deutliche Unterschiede beobachten.", pronunciation: "hir-bay kan man doyt-lı-hı un-tər-şi-də bı-o-bah-tən" },
        { phrase: "Die Studie basiert auf empirischen Daten.", meaning: "Çalışma deneysel verilere dayanmaktadır.", context: "Yöntem", example: "Die Studie basiert auf empirischen Daten.", pronunciation: "di ştu-di-ə ba-zi-rt auf em-pi-rı-şən da-tən" },
        { phrase: "Die Ergebnisse wurden kritisch analysiert.", meaning: "Sonuçlar eleştirel biçimde analiz edildi.", context: "Analiz", example: "Die Ergebnisse wurden kritisch analysiert.", pronunciation: "di er-gep-nıs-ə vur-dən krı-tış a-na-lü-zi-rt" },
        { phrase: "Diese Hypothese ist sehr umstritten.", meaning: "Bu hipotez oldukça tartışmalıdır.", context: "Bilim", example: "Diese Hypothese ist in der Wissenschaft sehr umstritten.", pronunciation: "di-zə hü-po-te-zə ist zer um-ştrı-tən" }
    ]
};

// Unit 604: Eleştirel Düşünme
export const u604: GermanPhraseUnit = {
    unitId: 604, title: "Eleştirel Düşünme (Kritisches Denken)", phrases: [
        { phrase: "Es könnte sein, dass die Argumente fehlerhaft sind.", meaning: "Argümanların hatalı olması muhtemel olabilir.", context: "Şüphe", example: "Es könnte sein, dass die Argumente fehlerhaft sind.", pronunciation: "es kön-tə zayn das di ar-gu-men-tə fay-lər-haft zint" },
        { phrase: "Es ist zweifelhaft, ob das den Tatsachen entspricht.", meaning: "Bunun gerçeklere uygun olup olmadığı şüphelidir.", context: "Eleştiri", example: "Es ist zweifelhaft, ob das den Tatsachen entspricht.", pronunciation: "es ist tsvay-fəl-haft op das den tat-za-hən ent-şprıht" },
        { phrase: "Man sollte nicht alles blind glauben.", meaning: "Her şeye körü körüne inanılmamalı.", context: "Tavsiye", example: "Man sollte nicht alles blind glauben, was im Internet steht.", pronunciation: "man zol-tə nıht a-lıs blınt glau-bən" },
        { phrase: "Hinterfragen Sie die Quelle!", meaning: "Kaynağı sorgulayın!", context: "Talimat", example: "Hinterfragen Sie immer die Quelle der Information!", pronunciation: "hın-tər-fra-gən zi di kve-lə" },
        { phrase: "Das ist ein logischer Fehlschluss.", meaning: "Bu mantıksal bir yanılgı/safsatadır.", context: "Analiz", example: "Das ist ein logischer Fehlschluss, den viele machen.", pronunciation: "das ist ayn lo-gı-şır fayl-şlus" }
    ]
};

// Unit 605: Uluslararası İlişkiler
export const u505: GermanPhraseUnit = {
    unitId: 605, title: "Uluslararası İlişkiler (Internationale Beziehungen)", phrases: [
        { phrase: "Der Minister erklärte, das Land sei bereit.", meaning: "Bakan ülkenin hazır olduğunu açıkladı.", context: "Haber/Aktarım", example: "Der Minister erklärte, das Land sei bereit für Gespräche.", pronunciation: "der mi-nıs-tər er-kler-tə das lant zay bı-rayt" },
        { phrase: "Diplomatische Beziehungen wurden abgebrochen.", meaning: "Diplomatik ilişkiler kesildi.", context: "Siyaset", example: "Die diplomatischen Beziehungen wurden abgebrochen.", pronunciation: "di-plo-ma-tı-şən bı-tsi-un-gən vur-dən ap-gı-bro-hən" },
        { phrase: "Ein neues Abkommen wurde unterzeichnet.", meaning: "Yeni bir anlaşma imzalandı.", context: "Zirve", example: "Ein neues Abkommen wurde gestern unterzeichnet.", pronunciation: "ayn noy-əs ap-ko-mən vur-də un-tər-tsayh-nət" },
        { phrase: "Friedliche Koexistenz ist das Ziel.", meaning: "Hedef barışçıl bir arada yaşamaktır.", context: "Diplomasi", example: "Friedliche Koexistenz ist das oberste Ziel.", pronunciation: "frit-lı-hı ko-ek-zıs-tents ist das tsil" },
        { phrase: "Die Staatsoberhäupter treffen sich heute.", meaning: "Devlet başkanları bugün buluşuyor.", context: "Siyaset", example: "Die Staatsoberhäupter treffen sich heute in Berlin.", pronunciation: "die ştats-o-bər-hoyp-tər tre-fən zıh hoy-tə" }
    ]
};

// Unit 606: Medya Analizi
export const u606: GermanPhraseUnit = {
    unitId: 606, title: "Medya Analizi (Medienkompetenz)", phrases: [
        { phrase: "Man manipuliert Massen, indem man Fake News verbreitet.", meaning: "Yalan haber yayarak kitleler manipüle ediliyor.", context: "Manipülasyon", example: "Man manipuliert Massen, indem man Fake News verbreitet.", pronunciation: "man ma-nı-pu-li-rt ma-sən ın-dem man feyk nyus fer-bray-tət" },
        { phrase: "Die Pressefreiheit ist gesetzlich geschützt.", meaning: "Basın özgürlüğü yasalarla korunmaktadır.", context: "Hukuk", example: "Die Pressefreiheit ist gesetzlich geschützt.", pronunciation: "di pre-sə-fray-hayt ist gı-zets-lıh gı-şütst" },
        { phrase: "Algorithmen bestimmen, was wir sehen.", meaning: "Algoritmalar ne göreceğimizi belirliyor.", context: "Sosyal Medya", example: "Algorithmen bestimmen, was wir in den Medien sehen.", pronunciation: "al-go-rıt-mən bı-ştı-mən vas vir ze-hən" },
        { phrase: "Ein kritischer Umgang mit Medien.", meaning: "Medya ile eleştirel bir ilişki/yaklaşım.", context: "Eğitim", example: "Ein kritischer Umgang mit Medien ist heute sehr wichtig.", pronunciation: "ayn krı-tı-şır um-gang mit me-dyən" },
        { phrase: "Diese Nachricht wurde zensiert.", meaning: "Bu haber sansürlendi.", context: "Sansür", example: "Diese Nachricht wurde in den sozialen Netzwerken zensiert.", pronunciation: "di-zə nah-rıht vur-də tsən-zi-rt" }
    ]
};

// Unit 607: İş Almancası 2
export const u607: GermanPhraseUnit = {
    unitId: 607, title: "İş Almancası 2 (Fortgeschrittenes Geschäftsdeutsch)", phrases: [
        { phrase: "Falls Sie Fragen haben, kontaktieren Sie mich.", meaning: "Şayet sorularınız olursa benimle iletişime geçin.", context: "Müşteri Hizmetleri", example: "Falls Sie Fragen haben, kontaktieren Sie mich bitte.", pronunciation: "fal-zı zi fra-gən ha-bın kon-tak-ti-rən zi mıh" },
        { phrase: "Wir müssen eine Lösung erarbeiten.", meaning: "Bir çözüm üretmeliyiz (çalışıp hazırlamalıyız).", context: "İş", example: "Wir müssen gemeinsam eine Lösung erarbeiten.", pronunciation: "vir müs-sən gı-mayn-zam ay-nı lö-zung er-ar-bay-tən" },
        { phrase: "Das Projekt läuft nach Plan.", meaning: "Proje plana göre ilerliyor.", context: "Rapor", example: "Das Projekt läuft nach Plan, keine Sorge.", pronunciation: "das pro-yekt loyft nah plan" },
        { phrase: "Wir sollten die Verhandlung vertagen.", meaning: "Müzakereyi ertelemeliyiz.", context: "Toplantı", example: "Wir sollten die Verhandlung auf nächste Woche vertagen.", pronunciation: "vir zol-tən di fer-hand-lung fer-ta-gən" },
        { phrase: "Wer übernimmt die Verantwortung dafür?", meaning: "Bunun sorumluluğunu kim üstleniyor?", context: "Liderlik", example: "Wer übernimmt die Verantwortung dafür?", pronunciation: "ver ü-bər-nımt di fer-ant-vort-ung da-für" }
    ]
};

// Unit 608: Proje Yönetimi
export const u608: GermanPhraseUnit = {
    unitId: 608, title: "Proje Yönetimi (Projektmanagement)", phrases: [
        { phrase: "Wir arbeiten am Projekt, bis die Deadline erreicht ist.", meaning: "Teslim tarihine ulaşana kadar proje üzerinde çalışıyoruz.", context: "Zaman Sınırı", example: "Wir arbeiten am Projekt, bis die Deadline erreicht ist.", pronunciation: "vir ar-bay-tən am pro-yekt bis di ded-layn er-rayht ist" },
        { phrase: "Ein wichtiger Meilenstein ist geschafft.", meaning: "Önemli bir dönüm noktası geride kaldı (başarıldı).", context: "Başarı", example: "Ein wichtiger Meilenstein ist geschafft.", pronunciation: "ayn vıh-tı-gır may-lən-ştayn ist gı-şaft" },
        { phrase: "Die Ressourcen sind knapp.", meaning: "Kaynaklar yetersiz/kısıtlı.", context: "Bütçe", example: "Die Ressourcen für dieses Projekt sind knapp.", pronunciation: "di re-sur-sən zint knap" },
        { phrase: "Wir müssen die Aufgaben gerecht verteilen.", meaning: "Görevleri adil bir şekilde dağıtmalıyız.", context: "Yönetim", example: "Wir müssen die Aufgaben gerecht verteilen.", pronunciation: "vir müs-sən di auf-ga-bən gı-reht fer-tay-lən" },
        { phrase: "Wer leitet das Projekt?", meaning: "Projeyi kim yönetiyor?", context: "Soru", example: "Wer leitet das Projekt ab morgen?", pronunciation: "ver lay-tət das pro-yekt" }
    ]
};

// Unit 609: Kültürlerarası İletişim
export const u609: GermanPhraseUnit = {
    unitId: 609, title: "Kültürlerarası İletişim (Interkulturelle Kommunikation)", phrases: [
        { phrase: "Es ist wichtig, Vorurteile abzubauen.", meaning: "Önyargıları yıkmak önemlidir.", context: "Tolerans", example: "Es ist wichtig, Vorurteile abzubauen, um einander zu verstehen.", pronunciation: "es ist vıh-tıh for-ur-tay-lə ap-tsu-bau-ən" },
        { phrase: "Man sollte andere Bräuche respektieren.", meaning: "Diğer adetlere saygı duyulmalı.", context: "Kültür", example: "Man sollte andere Bräuche und Sitten respektieren.", pronunciation: "man zol-tə an-də-rə broy-hə res-pek-ti-rən" },
        { phrase: "Körpersprache unterscheidet sich stark.", meaning: "Beden dili büyük farklılık gösterir.", context: "İletişim", example: "Körpersprache unterscheidet sich stark von Land zu Land.", pronunciation: "kör-pər-şpra-hə un-tər-şay-dət zıh ştark" },
        { phrase: "Wir haben viel voneinander gelernt.", meaning: "Birbirimizden çok şey öğrendik.", context: "Deneyim", example: "Wir haben viel voneinander gelernt.", pronunciation: "vir ha-bı fil fon-ayn-an-dər gı-lernt" },
        { phrase: "Kulturschock vermeiden.", meaning: "Kültür şokunu önlemek.", context: "Uyum", example: "Wie kann man einen Kulturschock vermeiden?", pronunciation: "kul-tur-şok fer-may-dən" }
    ]
};

// Unit 610: Kariyer Geliştirme
export const u610: GermanPhraseUnit = {
    unitId: 610, title: "Kariyer Geliştirme (Karriereentwicklung)", phrases: [
        { phrase: "Ich bilde mich weiter, um befördert zu werden.", meaning: "Terfi almak için kendimi eğitmeye devam ediyorum.", context: "Kariyer", example: "Ich bilde mich weiter, um befördert zu werden.", pronunciation: "ıh bıl-də mıh vay-tər um bı-för-dært tsu ver-dən" },
        { phrase: "Ich strebe eine Führungsposition an.", meaning: "Bir yönetici pozisyonunu hedefliyorum.", context: "Hedef", example: "Ich strebe eine Führungsposition in der Firma an.", pronunciation: "ıh ştre-bə ay-nı fü-rungs-po-zı-tsyən an" },
        { phrase: "Erfahrungen sammeln ist wertvoll.", meaning: "Deneyim kazanmak değerlidir.", context: "Tavsiye", example: "Erfahrungen sammeln ist im Beruf sehr wertvoll.", pronunciation: "er-fa-rung-ən za-məln ist vert-fol" },
        { phrase: "Ich möchte mein Netzwerk erweitern.", meaning: "Çevremi (network) genişletmek istiyorum.", context: "İletişim", example: "Ich möchte mein berufliches Netzwerk erweitern.", pronunciation: "ıh möh-tə mayn nets-verk er-vay-tərn" },
        { phrase: "Die Fortbildung hat sich gelohnt.", optionsLabels: ["Fortbildung", "gelohnt"], meaning: "Mesleki eğitim faydalı oldu (değdi).", context: "Eğitim", example: "Die Fortbildung hat sich wirklich gelohnt.", pronunciation: "di fort-bıl-dung hat zıh virk-lıh gı-lohnt" }
    ]
} as unknown as GermanPhraseUnit;

// Unit 611: Konjunktiv I
export const u611: GermanPhraseUnit = {
    unitId: 611, title: "Konjunktiv I (Dolaylı Anlatım)", phrases: [
        { phrase: "Er sagte, er sei gesund.", meaning: "Sağlıklı olduğunu söyledi.", context: "Aktarım (sei)", example: "Er sagte, er sei vollkommen gesund.", pronunciation: "er zagt er zay gı-zunt" },
        { phrase: "Sie meinte, sie habe keine Zeit.", meaning: "Vaktinin olmadığını belirtti.", context: "Aktarım (habe)", example: "Sie meinte, sie habe heute keine Zeit.", pronunciation: "zi mayn-tə zi ha-bə kay-nı tsayt" },
        { phrase: "Der Minister erklärte, das Land werde helfen.", meaning: "Bakan ülkenin yardım edeceğini açıkladı.", context: "Aktarım (werde)", example: "Der Minister erklärte, das Land werde helfen.", pronunciation: "der mi-nıs-tər er-kler-tə das lant ver-də hel-fən" },
        { phrase: "Sie behaupten, sie seien unschuldig.", meaning: "Masum olduklarını iddia ediyorlar.", context: "Siyaset", example: "Sie behaupten, sie seien unschuldig.", pronunciation: "zi bı-haup-tən zi zay-ən un-şul-dıh" },
        { phrase: "Er antwortete, er komme morgen.", meaning: "Yarın geleceğini cevapladı.", context: "Aktarım (komme)", example: "Er antwortete, er komme morgen bestimmt.", pronunciation: "er ant-vor-tət er ko-mə mor-gın" }
    ]
};

// Unit 612: Partizipialkonstruktionen
export const u612: GermanPhraseUnit = {
    unitId: 612, title: "Partizipialkonstruktionen (Sıfat-Fiiller)", phrases: [
        { phrase: "Das laut lachende Kind gefällt mir.", meaning: "Yüksek sesle gülen çocuk hoşuma gidiyor.", context: "Partizip I", example: "Das laut lachende Kind gefällt mir sehr.", pronunciation: "das laut la-hən-də kint gı-felt mir" },
        { phrase: "Der gestern geschriebene Brief ist wichtig.", meaning: "Dün yazılmış mektup önemlidir.", context: "Partizip II", example: "Der gestern geschriebene Brief ist wichtig.", pronunciation: "der ges-tərn gı-şri-bə-nə brif ist vıh-tıh" },
        { phrase: "Die kochende Suppe riecht gut.", meaning: "Kaynayan çorba güzel kokuyor.", context: "Partizip I", example: "Die kochende Suppe auf dem Herd riecht gut.", pronunciation: "di ko-hən-də zu-pə riht gut" },
        { phrase: "Das verkaufte Haus war sehr teuer.", meaning: "Satılmış ev çok pahalıydı.", context: "Partizip II", example: "Das verkaufte Haus war sehr teuer.", pronunciation: "das fer-kauf-tə haus var zer toy-ər" },
        { phrase: "Ein rennender Hund läuft vorbei.", meaning: "Koşan bir köpek önümüzden geçiyor.", context: "Partizip I", example: "Ein rennender Hund läuft gerade vorbei.", pronunciation: "ayn re-nən-dər hunt loyft for-bay" }
    ]
};

// Unit 613: Nominalstil
export const u613: GermanPhraseUnit = {
    unitId: 613, title: "Nominalstil (İsimleştirme)", phrases: [
        { phrase: "Die Zerstörung der Umwelt besorgt uns.", meaning: "Çevrenin yıkımı bizi endişelendiriyor.", context: "İsimleşen Fiil", example: "Die Zerstörung der Umwelt besorgt uns alle.", pronunciation: "di tser-ştö-rung der um-velt bı-zorgt uns" },
        { phrase: "Ihre Gesundheit liegt mir am Herzen.", meaning: "Sağlığınız benim için çok önemli.", context: "İsimleşen Sıfat", example: "Ihre Gesundheit liegt mir am Herzen.", pronunciation: "i-rə gı-zunt-hayt ligt mir am hər-tsən" },
        { phrase: "Die Vorbereitung nimmt viel Zeit in Anspruch.", meaning: "Hazırlık çok zaman alıyor.", context: "İş", example: "Die Vorbereitung nimmt viel Zeit in Anspruch.", pronunciation: "di for-bı-ray-tung nımt fil tsayt ın an-şpruh" },
        { phrase: "Wir danken Ihnen für Ihre Aufmerksamkeit.", meaning: "Dikkatiniz için teşekkür ederiz.", context: "Sunum", example: "Wir danken Ihnen für Ihre Aufmerksamkeit.", pronunciation: "vir dan-kən i-nən für i-rə auf-merk-zam-kayt" },
        { phrase: "Das Lesen wissenschaftlicher Arbeiten.", meaning: "Bilimsel makaleler okumak.", context: "Akademik", example: "Das Lesen wissenschaftlicher Arbeiten erfordert Übung.", pronunciation: "das le-zən vı-sən-şaft-lı-hər ar-bay-tən" }
    ]
};

// Unit 614: Zustandspassiv
export const u614: GermanPhraseUnit = {
    unitId: 614, title: "Erweiterte Passivformen (Durum Edilgeni)", phrases: [
        { phrase: "Die Tür ist bereits geschlossen.", meaning: "Kapı çoktan kapalı (kapatılmış durumda).", context: "Zustandspassiv", example: "Komm nicht rein, die Tür ist bereits geschlossen.", pronunciation: "di tür ist bı-rayts gı-şlo-sın" },
        { phrase: "Das Auto ist endlich repariert.", meaning: "Araba sonunda tamir edildi (hazır durumda).", context: "Zustandspassiv", example: "Wir können fahren, das Auto ist endlich repariert.", pronunciation: "das au-to ist ent-lıh gı-ra-pa-ri-rt" },
        { phrase: "Das Geschäft ist geöffnet.", meaning: "Dükkan açık.", context: "Zustandspassiv", example: "Das Geschäft ist geöffnet, wir können einkaufen.", pronunciation: "das gı-şeft ist gı-öf-nət" },
        { phrase: "Das Problem ist gelöst.", meaning: "Sorun çözüldü (çözülmüş durumda).", context: "Zustandspassiv", example: "Wir haben eine Antwort, das Problem ist gelöst.", pronunciation: "das pro-blem ist gı-löst" },
        { phrase: "Die Hausaufgaben sind getan.", meaning: "Ödevler yapıldı.", context: "Zustandspassiv", example: "Endlich sind die Hausaufgaben getan.", pronunciation: "di haus-auf-ga-bən zint gı-tan" }
    ]
};

// Unit 615: Akademik Yazım
export const u615: GermanPhraseUnit = {
    unitId: 615, title: "Wissenschaftliches Schreiben (Akademik Yazım)", phrases: [
        { phrase: "Folglich wurde das Experiment abgebrochen.", meaning: "Bu nedenle (sonuç olarak) deney iptal edildi.", context: "Akademik Bağlaç", example: "Es gab Fehler. Folglich wurde das Experiment abgebrochen.", pronunciation: "fol-klıh vur-də das eks-pe-ri-ment ap-gı-bro-hən" },
        { phrase: "Demnach ist diese Theorie ungültig.", meaning: "Buna göre bu teori geçersizdir.", context: "Akademik Bağlaç", example: "Die Daten fehlen. Demnach ist diese Theorie ungültig.", pronunciation: "dem-nah ist di-zə te-o-ri un-gül-tıh" },
        { phrase: "Wir müssen diese Hypothese überprüfen.", meaning: "Bu hipotezi test etmeliyiz/denetlemeliyiz.", context: "Araştırma", example: "Wir müssen diese Hypothese im Labor überprüfen.", pronunciation: "vir müs-sən di-zə hü-po-te-zə ü-bər-prü-fən" },
        { phrase: "Die Studie liefert wertvolle Erkenntnisse.", meaning: "Çalışma değerli bulgular sunuyor.", context: "Bulgu", example: "Die neue Studie liefert wertvolle Erkenntnisse.", pronunciation: "di ştu-di-ə li-fərt vert-fo-lə er-kent-nıs-ə" },
        { phrase: "Ein wesentlicher Aspekt des Problems.", meaning: "Sorunun önemli bir boyutu.", context: "Analiz", example: "Ein wesentlicher Aspekt des Problems wurde ignoriert.", pronunciation: "ayn ve-zənt-lı-hər as-pekt des pro-blems" }
    ]
};

// Unit 616: Aufsatz schreiben
export const u616: GermanPhraseUnit = {
    unitId: 616, title: "Aufsatz schreiben (Kompozisyon)", phrases: [
        { phrase: "Zusammenfassend lässt sich sagen, dass...", meaning: "Özetle denilebilir ki...", context: "Kapanış", example: "Zusammenfassend lässt sich sagen, dass Bildung wichtig ist.", pronunciation: "tsu-za-mən-fa-sənt lest zıh za-gən das" },
        { phrase: "Einleitend lässt sich feststellen, dass...", meaning: "Giriş olarak saptanabilir ki...", context: "Giriş", example: "Einleitend lässt sich feststellen, dass die Technik wächst.", pronunciation: "ayn-lay-tənt lest zıh fest-şte-lən das" },
        { phrase: "Ein weiteres Argument dafür ist...", meaning: "Bunu destekleyen bir diğer argüman...", context: "Gelişme", example: "Ein weiteres Argument dafür ist der Umweltschutz.", pronunciation: "ayn vay-tə-rəs ar-gu-ment da-für ist" },
        { phrase: "Man darf nicht außer Acht lassen, dass...", meaning: "Göz ardı edilmemelidir ki...", context: "Analiz", example: "Man darf nicht außer Acht lassen, dass Kosten entstehen.", pronunciation: "man darf nıht au-sər aht la-sən das" },
        { phrase: "Ich ziehe ein positives Fazit.", meaning: "Olumlu bir sonuca varıyorum.", context: "Kapanış", example: "Alles in allem ziehe ich ein positives Fazit.", pronunciation: "ıh tsi-ə ayn po-zi-ti-fəs fa-tsıt" }
    ]
};

// Unit 617: Mündliche Prüfung
export const u617: GermanPhraseUnit = {
    unitId: 617, title: "Mündliche Prüfung (Sözlü Sınav)", phrases: [
        { phrase: "Da stimme ich Ihnen voll und ganz zu.", meaning: "Size bu konuda tamamen katılıyorum.", context: "Onay", example: "Da stimme ich Ihnen voll und ganz zu, das stimmt.", pronunciation: "da ştı-mə ıh i-nən fol unt gants tsu" },
        { phrase: "Das sehe ich etwas anders, weil...", meaning: "Bunu biraz farklı görüyorum, çünkü...", context: "Red", example: "Das sehe ich etwas anders, weil es zu teuer ist.", pronunciation: "das ze-ə ıh et-vas an-dırs vayl" },
        { phrase: "Ich bin der gleichen Meinung.", meaning: "Aynı görüşteyim.", context: "Onay", example: "Ich bin der gleichen Meinung wie meine Kollegin.", pronunciation: "ıh bin der glay-hən may-nung" },
        { phrase: "Könnten Sie das bitte genauer erklären?", meaning: "Bunu lütfen biraz daha açabilir misiniz?", context: "Soru", example: "Könnten Sie das bitte genauer erklären?", pronunciation: "kön-tən zi das bı-tə gı-nau-ər er-kle-rən" },
        { phrase: "Meines Erachtens ist das richtig.", meaning: "Benim kanaatime göre bu doğrudur.", context: "Fikir", example: "Meines Erachtens ist das richtig und wichtig.", pronunciation: "may-nəs er-ah-təns ist das rıh-tıh" }
    ]
};

// Unit 618: Hörverstehen
export const u618: GermanPhraseUnit = {
    unitId: 618, title: "Hörverstehen (Duyduğunu Anlama)", phrases: [
        { phrase: "Er war krank, dennoch kam er.", meaning: "Hastaydı, buna rağmen geldi.", context: "Zıtlık (dennoch)", example: "Er war sehr krank, dennoch kam er zur Besprechung.", pronunciation: "er var krank den-noh kam er" },
        { phrase: "Ich konnte den Sprecher kaum hören.", meaning: "Konuşmacıyı neredeyse hiç duyamadım.", context: "Şikayet", example: "Die Verbindung war schlecht, ich konnte den Sprecher kaum hören.", pronunciation: "ıh kon-tə den şpre-hər kaum hö-rən" },
        { phrase: "Zudem wurde das Thema nicht erwähnt.", meaning: "Ayrıca (ek olarak) konudan bahsedilmedi.", context: "Analiz", example: "Zudem wurde das Thema gestern nicht erwähnt.", pronunciation: "tsu-dem vur-də das te-ma nıht er-vehnt" },
        { phrase: "Der Redner lehnt den Vorschlag ab.", meaning: "Konuşmacı öneriyi reddediyor.", context: "Haber", example: "Der Redner lehnt den neuen Vorschlag entschieden ab.", pronunciation: "der red-nər lehnt den for-şlag ap" },
        { phrase: "Ich habe den Hauptpunkt erfasst.", meaning: "Ana noktayı yakaladım/kavradım.", context: "Başarı", example: "Trotz des Lärms habe ich den Hauptpunkt erfasst.", pronunciation: "ıh ha-bı den haupt-punkt er-fast" }
    ]
};

// Unit 619: Leseverstehen
export const u619: GermanPhraseUnit = {
    unitId: 619, title: "Leseverstehen (Okuduğunu Anlama)", phrases: [
        { phrase: "Das Buch ist zwar teuer, aber lehrreich.", meaning: "Kitap gerçi pahalı ama çok öğretici.", context: "İkili Bağlaç", example: "Das Buch ist zwar teuer, aber sehr lehrreich.", pronunciation: "das buh ist tsvar toy-ər a-bər ler-rayh" },
        { phrase: "Ich suche nach Schlüsselwörtern.", meaning: "Anahtar kelimeleri arıyorum.", context: "Teknik", example: "Beim Lesen suche ich immer zuerst nach Schlüsselwörtern.", pronunciation: "ıh zu-hı nah şlü-səl-vör-tərn" },
        { phrase: "Der Text befasst sich mit der Krise.", meaning: "Metin kriz konusunu ele alıyor.", context: "Konu", example: "Der Text befasst sich mit der globalen Krise.", pronunciation: "der tekst bı-fast zıh mit der kri-zə" },
        { phrase: "Ich habe den Text überflogen.", meaning: "Metne hızlıca göz gezdirdim.", context: "Okuma", example: "Ich habe den Text nur kurz überflogen.", pronunciation: "ıh ha-bı den tekst ü-bər-flo-gən" },
        { phrase: "Es ist ein wissenschaftlicher Artikel.", meaning: "Bilimsel bir makaledir.", context: "Tür", example: "Es ist ein wissenschaftlicher Artikel über Physik.", pronunciation: "es ist ayn vı-sən-şaft-lı-hər ar-tı-kıl" }
    ]
};

// Unit 620: B2 Tekrar
export const u620: GermanPhraseUnit = {
    unitId: 620, title: "B2 Tekrar (Seviye Özeti)", phrases: [
        { phrase: "Nun beherrsche ich die deutsche Grammatik.", meaning: "Artık Alman gramerine hakimim.", context: "Başarı", example: "Nun beherrsche ich die deutsche Grammatik auf B2-Niveau.", pronunciation: "nun bı-her-şə ıh di doyt-şə gra-ma-tık" },
        { phrase: "Ich habe das B2-Niveau erreicht.", meaning: "B2 seviyesine ulaştım.", context: "Başarı", example: "Ich bin stolz, ich habe das B2-Niveau erreicht.", pronunciation: "ıh ha-bı das be-tsvay ni-vo er-rayht" },
        { phrase: "Ich freue mich auf das Zertifikat.", meaning: "Sertifikayı sabırsızlıkla bekliyorum.", context: "Beklenti", example: "Die Prüfung ist vorbei, ich freue mich auf das Zertifikat.", pronunciation: "ıh froy-ə mıh auf das tser-tı-fı-kat" },
        { phrase: "Ich kann nun fließend sprechen.", meaning: "Artık akıcı bir şekilde konuşabiliyorum.", context: "Yetenek", example: "Dank der Übungen kann ich nun fließend sprechen.", pronunciation: "ıh kan nun fli-sənt şpre-hən" },
        { phrase: "Ein erfolgreicher Abschluss.", meaning: "Başarılı bir mezuniyet/kapanış.", context: "Başarı", example: "Das ist ein erfolgreicher Abschluss für mich.", pronunciation: "ayn er-folg-ray-hər ap-şlus" }
    ]
};

const unitMap: { [key: number]: GermanPhraseUnit } = {
    591: u591, 592: u592, 593: u593, 594: u594, 595: u595,
    596: u596, 597: u597, 598: u598, 599: u599, 600: u600,
    601: u601, 602: u602, 603: u603, 604: u604, 605: u505, // note: unit 605 points to u505 here, let's keep name mapping consistent or map correctly
    606: u606, 607: u607, 608: u608, 609: u609, 610: u610,
    611: u611, 612: u612, 613: u613, 614: u614, 615: u615,
    616: u616, 617: u617, 618: u618, 619: u619, 620: u620
};

export function getGermanB2PhrasesForUnit(unitId: number): GermanPhraseUnit {
    return unitMap[unitId] || u591;
}
