import { GrammarRule } from "./grammar";

export interface GermanUnitGrammar {
    unitId: number;
    title: string;
    rules: GrammarRule[];
}

// ===== UNIT 561: GELECEK ZAMAN (FUTUR I) =====
const unit561Grammar: GermanUnitGrammar = {
    unitId: 561, title: "Gelecek Zaman (Futur I)",
    rules: [
        {
            id: "de-561-1",
            title: "Futur I Yapısı",
            explanation: "Almancada gelecek zaman 'werden' yardımcı fiili ve ana fiilin mastar hali (Infinitiv) ile kurulur. 'werden' fiili özneye göre çekimlenir, ana fiil cümlenin en sonuna gider.",
            examples: [
                { de: "Ich werde morgen kommen.", tr: "Yarın geleceğim." },
                { de: "Du wirst bald Deutsch sprechen.", tr: "Yakında Almanca konuşacaksın." }
            ]
        },
        {
            id: "de-561-2",
            title: "Werden Çekimi",
            explanation: "ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden.",
            examples: [
                { de: "Wir werden eine Reise planen.", tr: "Bir seyahat planlayacağız." },
                { de: "Ihr werdet das Ziel erreichen.", tr: "Hedefinize ulaşacaksınız." }
            ]
        }
    ]
};

// ===== UNIT 562: KONJUNKTIV II =====
const unit562Grammar: GermanUnitGrammar = {
    unitId: 562, title: "Konjunktiv II",
    rules: [
        {
            id: "de-562-1",
            title: "Dilek ve Nezaket Kipi",
            explanation: "Konjunktiv II, gerçek olmayan durumları, dilekleri, hayalleri veya çok nazik ricaları ifade etmek için kullanılır. En yaygın kullanılan yapı 'würde + Mastar' yapısıdır. 'sein' ve 'haben' fiillerinin ise kendi özel formları vardır.",
            examples: [
                { de: "Ich würde gerne reisen.", tr: "Seyahat etmek isterdim." },
                { de: "Hätten Sie kurz Zeit?", tr: "Biraz vaktiniz olur muydu? (Nezaket)" }
            ]
        },
        {
            id: "de-562-2",
            title: "Wäre ve Hätte",
            explanation: "'sein' fiili 'wäre', 'haben' fiili 'hätte' olur. Diğer fiillerin çoğu için 'würde' kullanılır.",
            examples: [
                { de: "Wenn ich reich wäre...", tr: "Eğer zengin olsaydım..." },
                { de: "Wenn ich Zeit hätte, würde ich kommen.", tr: "Eğer vaktim olsaydı, gelirdim." }
            ]
        }
    ]
};

// ===== UNIT 563: PASSIV YAPI =====
const unit563Grammar: GermanUnitGrammar = {
    unitId: 563, title: "Passiv Yapı",
    rules: [
        {
            id: "de-563-1",
            title: "Edilgen Yapı (Vorgangspassiv)",
            explanation: "Eylemi yapanın değil, eylemin kendisinin önemli olduğu durumlarda kullanılır. 'werden + Partizip II' yapısı ile kurulur.",
            examples: [
                { de: "Das Haus wird gebaut.", tr: "Ev inşa ediliyor." },
                { de: "Der Brief wurde gestern geschrieben.", tr: "Mektup dün yazıldı." }
            ]
        },
        {
            id: "de-563-2",
            title: "Öznenin Belirtilmesi (von)",
            explanation: "Eylemi yapanı belirtmek istersek 'von + Dativ' yapısını kullanırız.",
            examples: [
                { de: "Das Auto wird von dem Mechaniker repariert.", tr: "Araba tamirci tarafından tamir ediliyor." }
            ]
        }
    ]
};

// ===== UNIT 564: DOLAYLI ANLATIM =====
const unit564Grammar: GermanUnitGrammar = {
    unitId: 564, title: "Dolaylı Anlatım",
    rules: [
        {
            id: "de-564-1",
            title: "Dolaylı Anlatım (Konjunktiv I / Indirekte Rede)",
            explanation: "Başkasının söylediği bir sözü aktarırken kullanılır. Resmî dilde Konjunktiv I, günlük dilde ise genellikle 'dass' bağlacı veya Konjunktiv II tercih edilir.",
            examples: [
                { de: "Er sagt, dass er keine Zeit hat.", tr: "Vaktinin olmadığını söylüyor." },
                { de: "Der Arzt meinte, ich solle mehr schlafen.", tr: "Doktor daha çok uyumam gerektiğini (belirtti) söyledi." }
            ]
        }
    ]
};

// ===== UNIT 565: GENITIV HALİ =====
const unit565Grammar: GermanUnitGrammar = {
    unitId: 565, title: "Genitiv Hali",
    rules: [
        {
            id: "de-565-1",
            title: "Tamlayan Hali (-in hali)",
            explanation: "Aidiyet veya bir bütünün parçasını belirtmek için kullanılır. Artikel çekimleri: Masculin/Neuter -> des (...s), Feminine/Plural -> der.",
            examples: [
                { de: "Das Auto des Vaters.", tr: "Babanın arabası." },
                { de: "Die Farbe der Blumen.", tr: "Çiçeklerin rengi." }
            ]
        },
        {
            id: "de-565-2",
            title: "Genitiv ile Kullanılan Edatlar",
            explanation: "wegen, während, trotz, statt gibi edatlar Genitiv haliyle kullanılır.",
            examples: [
                { de: "Wegen des Regens.", tr: "Yağmurdan dolayı." },
                { de: "Während der Reise.", tr: "Seyahat sırasında." }
            ]
        }
    ]
};

// ===== UNIT 566: PHRASAL VERBS 1 =====
const unit566Grammar: GermanUnitGrammar = {
    unitId: 566, title: "Ayrılabilen Fiiller (Trennbare Verben)",
    rules: [
        {
            id: "de-566-1",
            title: "Ön Eklerin Ayrılması",
            explanation: "Bu fiillerde ön ek (Präfix) cümlenin en sonuna gider. 'aufstehen', 'einkaufen' gibi.",
            examples: [
                { de: "Ich stehe um 7 Uhr auf.", tr: "Saat 7'de kalkarım." },
                { de: "Er kauft im Supermarkt ein.", tr: "Süpermarkette alışveriş yapıyor." }
            ]
        }
    ]
};

// ===== UNIT 567: PHRASAL VERBS 2 =====
const unit567Grammar: GermanUnitGrammar = {
    unitId: 567, title: "Ayrılamayan Fiiller (Untrennbare Verben)",
    rules: [
        {
            id: "de-567-1",
            title: "Sabit Ön Ekler",
            explanation: "be-, ge-, er-, ver-, zer- gibi ön ekler hiçbir zaman ayrılmaz ve Partizip II hallerinde 'ge-' takısı almazlar.",
            examples: [
                { de: "Ich verstehe die Regel.", tr: "Kuralı anlıyorum." },
                { de: "Er hat das Haus besucht.", tr: "Evi ziyaret etti." }
            ]
        }
    ]
};

// ===== UNIT 568: HABERLER VE MEDYA =====
const unit568Grammar: GermanUnitGrammar = {
    unitId: 568, title: "Fikir Belirtme ve Medya",
    rules: [
        {
            id: "de-568-1",
            title: "Meiner Meinung nach",
            explanation: "Kendi fikrinizi belirtmek için en çok kullanılan kalıptır. Fiil genellikle bu kalıptan hemen sonra gelir (Inversion).",
            examples: [
                { de: "Meiner Meinung nach ist das Internet nützlich.", tr: "Bana göre internet faydalıdır." }
            ]
        }
    ]
};

// ===== UNIT 569: ÇEVRE SORUNLARI =====
const unit569Grammar: GermanUnitGrammar = {
    unitId: 569, title: "Çevre ve Neden Belirtme",
    rules: [
        {
            id: "de-569-1",
            title: "Weil ve Da",
            explanation: "Çevre sorunlarını tartışırken 'weil' (çünkü) ve 'da' (mademki/çünkü) bağlaçları ile yan cümleler kurulur. Fiil sona gider.",
            examples: [
                { de: "Wir müssen handeln, weil das Klima sich ändert.", tr: "Harekete geçmeliyiz çünkü iklim değişiyor." }
            ]
        }
    ]
};

// ===== UNIT 570: SÜRDÜRÜLEBİLİRLİK =====
const unit570Grammar: GermanUnitGrammar = {
    unitId: 570, title: "Sürdürülebilirlik ve Amaç Cümleleri",
    rules: [
        {
            id: "de-570-1",
            title: "Um... zu ve Damit",
            explanation: "Bir amacı belirtmek için 'um... zu' (+ Mastar) veya 'damit' (bağlaç) kullanılır.",
            examples: [
                { de: "Wir recyceln, um die Umwelt zu schützen.", tr: "Çevreyi korumak için geri dönüşüm yapıyoruz." },
                { de: "Sparen Sie Wasser, damit die Ressourcen bleiben.", tr: "Kaynakların kalması için su tasarrufu yapın." }
            ]
        }
    ]
};

// ===== UNIT 571: KÜLTÜR VE GELENEKLER =====
const unit571Grammar: GermanUnitGrammar = {
    unitId: 571, title: "Sıfat Tamlamaları (Adjektivdeklination)",
    rules: [
        {
            id: "de-571-1",
            title: "Belirli Artikellerle Sıfatlar",
            explanation: "Kültürden bahsederken 'die deutsche Kultur' gibi sıfat tamlamaları kullanılır. Belirli artikelden sonra sıfat ekleri genellikle -e veya -en olur.",
            examples: [
                { de: "Wir schätzen die deutsche Tradition.", tr: "Alman geleneğine değer veriyoruz." }
            ]
        }
    ]
};

// ===== UNIT 572: EKONOMİ TEMELLERİ =====
const unit572Grammar: GermanUnitGrammar = {
    unitId: 572, title: "Karşılaştırma (Komparativ & Superlativ)",
    rules: [
        {
            id: "de-572-1",
            title: "Ekonomik Verileri Karşılaştırma",
            explanation: "Daha yüksek (höher), en düşük (am niedrigsten) gibi yapıları kullanarak ekonomik verileri kıyaslarız.",
            examples: [
                { de: "Die Inflation ist höher als letztes Jahr.", tr: "Enflasyon geçen yıla göre daha yüksek." }
            ]
        }
    ]
};

// ===== UNIT 573: TARTIŞMA BECERİLERİ =====
const unit573Grammar: GermanUnitGrammar = {
    unitId: 573, title: "Modalpartikeln",
    rules: [
        {
            id: "de-573-1",
            title: "Doch, Mal, Halt",
            explanation: "Tartışmaların tonunu belirlemek için (rica, güçlendirme) 'mal, doch, halt' gibi parçacıklar kullanılır.",
            examples: [
                { de: "Das ist halt meine Meinung.", tr: "Bu benim fikrim işte (yapacak bir şey yok anlamında)." }
            ]
        }
    ]
};

// ===== UNIT 574: SUNUM YAPMA =====
const unit574Grammar: GermanUnitGrammar = {
    unitId: 574, title: "Sıralama Bağlaçları",
    rules: [
        {
            id: "de-574-1",
            title: "Zuerst, Danach, Schließlich",
            explanation: "Bir sunumu yapılandırmak için sıralama bildiren zarflar kullanılır.",
            examples: [
                { de: "Zuerst begrüße ich das Publikum, danach beginne ich.", tr: "Önce seyirciyi selamlıyorum, sonra başlıyorum." }
            ]
        }
    ]
};

// ===== UNIT 575: EDEBİYAT 1 =====
const unit575Grammar: GermanUnitGrammar = {
    unitId: 575, title: "Präteritum (Geçmiş Zaman)",
    rules: [
        {
            id: "de-575-1",
            title: "Yazılı Anlatımda Geçmiş Zaman",
            explanation: "Edebiyat ve romanlarda olaylar genellikle Perfekt yerine Präteritum ile anlatılır.",
            examples: [
                { de: "Es war einmal ein kleiner Prinz.", tr: "Bir zamanlar küçük bir prens vardı." }
            ]
        }
    ]
};

// ===== UNIT 576: AKADEMİK YAZMA =====
const unit576Grammar: GermanUnitGrammar = {
    unitId: 576, title: "Nominalstil (İsimleştirme)",
    rules: [
        {
            id: "de-576-1",
            title: "Fiillerden İsim Yapma",
            explanation: "Akademik dilde eylemler sıklıkla isimleştirilir (z.B. lesen -> das Lesen).",
            examples: [
                { de: "Das Schreiben der Arbeit dauert lange.", tr: "Ödevi yazmak uzun sürüyor." }
            ]
        }
    ]
};

// ===== UNIT 577: BİLİM VE TEKNOLOJİ =====
const unit577Grammar: GermanUnitGrammar = {
    unitId: 577, title: "Futur I",
    rules: [
        {
            id: "de-577-1",
            title: "Gelecek Tahminleri",
            explanation: "Gelecekteki bilimsel gelişmeleri tahmin etmek için 'werden + Infinitiv' yapısı kullanılır.",
            examples: [
                { de: "KI wird die Welt verändern.", tr: "YZ dünyayı değiştirecektir." }
            ]
        }
    ]
};

// ===== UNIT 578: SAĞLIK VE BESLENME =====
const unit578Grammar: GermanUnitGrammar = {
    unitId: 578, title: "Sollten (Tavsiye)",
    rules: [
        {
            id: "de-578-1",
            title: "Nezaketli Tavsiye",
            explanation: "Sağlık tavsiyeleri verirken 'sollen' fiilinin Konjunktiv II hali (sollten) tercih edilir.",
            examples: [
                { de: "Du solltest mehr Obst essen.", tr: "Daha fazla meyve yemelisin." }
            ]
        }
    ]
};

// ===== UNIT 579: PSİKOLOJİ TEMELLERİ =====
const unit579Grammar: GermanUnitGrammar = {
    unitId: 579, title: "Dönüşlü Fiiller (Reflexiv)",
    rules: [
        {
            id: "de-579-1",
            title: "Sich-Verben",
            explanation: "Pek çok psikolojik durum 'sich fühlen, sich freuen' gibi dönüşlü fiillerle ifade edilir.",
            examples: [
                { de: "Ich fühle mich heute sehr gut.", tr: "Bugün kendimi çok iyi hissediyorum." }
            ]
        }
    ]
};

// ===== UNIT 580: İŞ ALMANCASI 1 =====
const unit580Grammar: GermanUnitGrammar = {
    unitId: 580, title: "Resmi Dil (Sie & Konjunktiv II)",
    rules: [
        {
            id: "de-580-1",
            title: "İş Dünyasında Nezaket",
            explanation: "İş yazışmalarında ricalar 'könnten' veya 'würden' ile daha nazik hale getirilir.",
            examples: [
                { de: "Könnten Sie mir bitte die Datei schicken?", tr: "Lütfen bana dosyayı gönderebilir misiniz?" }
            ]
        }
    ]
};

// ===== UNIT 581: PLUSQUAMPERFEKT =====
const unit581Grammar: GermanUnitGrammar = {
    unitId: 581, title: "Plusquamperfekt",
    rules: [
        {
            id: "de-581-1",
            title: "Miş'li Geçmiş Zaman",
            explanation: "Geçmişte yapılmış bir eylemden de önce gerçekleşen olayları anlatmak için kullanılır. (had done)",
            examples: [
                { de: "Ich hatte gegessen, bevor ich ging.", tr: "Gitmeden önce yemek yemiştim." }
            ]
        }
    ]
};

// ===== UNIT 582: FUTUR II =====
const unit582Grammar: GermanUnitGrammar = {
    unitId: 582, title: "Futur II",
    rules: [
        {
            id: "de-582-1",
            title: "Gelecekte Tamamlanmış Eylem",
            explanation: "Gelecekte belirli bir zamanda bitmiş olması beklenen eylemler için kullanılır.",
            examples: [
                { de: "Yarına kadar bitirmiş olacağım.", tr: "Ich werde es bis morgen beendet haben." }
            ]
        }
    ]
};

// ===== UNIT 583: RELATIVSÄTZE =====
const unit583Grammar: GermanUnitGrammar = {
    unitId: 583, title: "Relativsätze",
    rules: [
        {
            id: "de-583-1",
            title: "İlgi Cümleleri",
            explanation: "B1 seviyesinde artikellerin hal değişimine (Nominativ, Akkusativ, Dativ) göre ilgi cümleleri kurulur.",
            examples: [
                { de: "Der Mann, den ich sehe, ist mein Lehrer.", tr: "Gördüğüm adam benim öğretmenimdir." }
            ]
        }
    ]
};

// ===== UNIT 584: KAUSALSÄTZE =====
const unit584Grammar: GermanUnitGrammar = {
    unitId: 584, title: "Kausalsätze (Weil, Da, Denn)",
    rules: [
        {
            id: "de-584-1",
            title: "Neden Belirtme",
            explanation: "Weil ve Da yan cümle kurarken (fiil sonda), Denn koordinatif bağlaçtır (fiil 2. sırada).",
            examples: [
                { de: "Ich bleibe hier, denn es regnet.", tr: "Burada kalıyorum çünkü yağmur yağıyor." }
            ]
        }
    ]
};

// ===== UNIT 585: WUNSCHSÄTZE =====
const unit585Grammar: GermanUnitGrammar = {
    unitId: 585, title: "Wunschsätze (Keşke)",
    rules: [
        {
            id: "de-585-1",
            title: "Gerçekleşmeyen Dilekler",
            explanation: "Keşke ile başlayan cümlelerde genellikle Konjunktiv II ve 'doch nur' gibi parçacıklar kullanılır.",
            examples: [
                { de: "Hätte ben doch nur mehr Zeit!", tr: "Keşke daha fazla vaktim olsaydı!" }
            ]
        }
    ]
};

// ===== UNIT 586: MODALVERBEN GEG. =====
const unit586Grammar: GermanUnitGrammar = {
    unitId: 586, title: "Modalverben Gegenvartsbezug",
    rules: [
        {
            id: "de-586-1",
            title: "Tahmin Olarak Modal Fiiller",
            explanation: "Könnte, Müsste gibi fiiller olasılık ve tahmin bildirmek için de kullanılır.",
            examples: [
                { de: "Das könnte sein.", tr: "Bu olabilir (olasılık)." }
            ]
        }
    ]
};

// ===== UNIT 587: NOMINALISIERUNG =====
const unit587Grammar: GermanUnitGrammar = {
    unitId: 587, title: "Nominalisierung mit Präpositionen",
    rules: [
        {
            id: "de-587-1",
            title: "Edatlarla İsimleştirme",
            explanation: "Zu, Bei gibi edatlarla isim halindeki fiilleri kullanma (z.B. beim Lesen).",
            examples: [
                { de: "Beim Essen sprechen wir nicht.", tr: "Yemek yerken konuşmayız." }
            ]
        }
    ]
};

// ===== UNIT 588: PARTIZIPIALATT. =====
const unit588Grammar: GermanUnitGrammar = {
    unitId: 588, title: "Sıfat Fiiller (Partizip I & II)",
    rules: [
        {
            id: "de-588-1",
            title: "Partizip as Adjective",
            explanation: "Eylemleri sıfat olarak kullanma (z.B. lachendes Kind - gülen çocuk).",
            examples: [
                { de: "Die arbeitende Bevölkerung.", tr: "Çalışan nüfus." }
            ]
        }
    ]
};

// ===== UNIT 589: KONJUNKTIONEN =====
const unit589Grammar: GermanUnitGrammar = {
    unitId: 589, title: "Çiftli Bağlaçlar",
    rules: [
        {
            id: "de-589-1",
            title: "Doppelkonjunktionen",
            explanation: "Sowohl... als auch (hem... hem de), Weder... noch (ne... ne de).",
            examples: [
                { de: "Er kann sowohl Deutsch als auch Englisch.", tr: "Hem Almanca hem de İngilizce biliyor." }
            ]
        }
    ]
};

// ===== UNIT 590: B1 TEKRAR =====
const unit590Grammar: GermanUnitGrammar = {
    unitId: 590, title: "B1 Genel Gramer Özeti",
    rules: [
        {
            id: "de-590-1",
            title: "Cümle Yapısı Özeti",
            explanation: "B1 seviyesinde öğrenilen tüm bağlaçlar ve yan cümle yapıları (Nebensätze) genel bir tekrar edilir.",
            examples: [
                { de: "Ich freue mich, dass ich bald fertig bin.", tr: "Yakında bitireceğim için mutluyum." }
            ]
        }
    ]
};

const unitMap: { [key: number]: GermanUnitGrammar } = {
    561: unit561Grammar, 562: unit562Grammar, 563: unit563Grammar, 564: unit564Grammar, 565: unit565Grammar,
    566: unit566Grammar, 567: unit567Grammar, 568: unit568Grammar, 569: unit569Grammar, 570: unit570Grammar,
    571: unit571Grammar, 572: unit572Grammar, 573: unit573Grammar, 574: unit574Grammar, 575: unit575Grammar,
    576: unit576Grammar, 577: unit577Grammar, 578: unit578Grammar, 579: unit579Grammar, 580: unit580Grammar,
    581: unit581Grammar, 582: unit582Grammar, 583: unit583Grammar, 584: unit584Grammar, 585: unit585Grammar,
    586: unit586Grammar, 587: unit587Grammar, 588: unit588Grammar, 589: unit589Grammar, 590: unit590Grammar,
};

export function getGermanB1GrammarForUnit(unitId: number): GermanUnitGrammar {
    return unitMap[unitId] || unit561Grammar;
}
