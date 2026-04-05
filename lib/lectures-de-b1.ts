/**
 * SteadyShell Lectures Database - Almanca B1
 * 30 Units (ID: 561-590), Multi-slide format
 */

import { UnitLecture } from "./lectures";

// ===== UNIT 561: GELECEK ZAMAN (FUTUR I) =====
const unit561Lecture: UnitLecture = {
    unitId: 561, title: "Gelecek Zaman (Futur I)", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Gelecekten Konuşmak",
            content: "Bu dersimizde Almancada gelecek zamanı (Futur I) öğreneceğiz. Planlarımızı, tahminlerimizi ve sözlerimizi bu yapı ile ifade ederiz."
        },
        {
            id: 2, type: "vocabulary", title: "Anahtar Kelimeler",
            content: "Futur I kurarken şu kelimeler size yardımcı olacaktır:\n\n- **werden**: -ecek/-acak\n- **morgen**: yarın\n- **nächstes Jahr**: gelecek yıl\n- **bald**: yakında\n- **wahrscheinlich**: muhtemelen"
        },
        {
            id: 3, type: "grammar", title: "Cümle Kurulumu",
            content: "Futur I yapısı çok basittir: **werden (çekimli) + ana fiil (mastar)**.\n\nWerden fiili özneye göre çekimlenir, asıl eylem ise cümlenin en sonunda mastar (ek almamış) halde bekler."
        },
        {
            id: 4, type: "table", title: "Werden Çekimi",
            content: "| Özne | Çekim |\n|---|---|\n| ich | werde |\n| du | wirst |\n| er/sie/es | wird |\n| wir | werden |\n| ihr | werdet |\n| sie/Sie | werden |"
        }
    ]
};

// ===== UNIT 562: KONJUNKTIV II =====
const unit562Lecture: UnitLecture = {
    unitId: 562, title: "Konjunktiv II (Dilek Kipi)", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Hayaller ve Nazikçe Ricalar",
            content: "Konjunktiv II, gerçekte olmayan ama olmasını istediğimiz durumları (hayaller) veya birinden bir şey isterken kullandığımız nazik ifadeleri kapsar."
        },
        {
            id: 2, type: "grammar", title: "Nasıl Kurulur?",
            content: "Günlük dilde en çok **'würde + Mastar'** yapısı kullanılır.\nÖrn: Ich würde gerne nach Berlin reisen. (Berlin'e seyahat etmek isterdim.)"
        },
        {
            id: 3, type: "table", title: "Haben ve Sein İstisnası",
            content: "Bu iki fiil 'würde' almaz, kendi formlarını kullanırlar:\n\n- **haben** -> **hätte** (olsaydı/sahip olsaydı)\n- **sein** -> **wäre** (olsaydı/olsa)\n\nÖrn: Wenn ich Zeit **hätte**, **wäre** ich glücklich. (Vaktim olsaydı mutlu olurdum.)"
        },
        {
            id: 4, type: "culture", title: "Nezaket İpucu",
            content: "Bir restoranda veya mağazada 'Ich möchte' (İsterdim) kalıbı aslında bir Konjunktiv II formudur (mögen fiilinden). Bu seviyede daha da öteye giderek 'Könnten Sie...?' veya 'Hätten Sie...?' gibi ifadeleri öğrenmelisiniz."
        }
    ]
};

// ===== UNIT 563: PASSIV YAPI =====
const unit563Lecture: UnitLecture = {
    unitId: 563, title: "Passiv Yapı (Edilgen)", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Eylem Odaklı Cümleler",
            content: "Pasif (Passiv) cümlelerde işi yapan (özne) değil, yapılan işin kendisi ön plandadır. Örn: 'Kapı açıldı' (Kimin açtığı önemli değil)."
        },
        {
            id: 2, type: "grammar", title: "Passiv Formülü",
            content: "Şimdiki zaman pasif için: **werden (çekimli) + Partizip II**.\n\n- Aktif: Er kocht das Essen. (O yemeği pişiriyor.)\n- Pasif: Das Essen **wird** gekocht. (Yemek pişiriliyor.)"
        },
        {
            id: 3, type: "table", title: "Geçmiş Zaman (Präteritum Passiv)",
            content: "Geçmişte 'yapıldı/edildi' demek için werden yerine **wurde** kullanılır:\n\n- Der Brief **wurde** geschrieben. (Mektup yazıldı.)\n- Die Türen **wurden** geöffnet. (Kapılar açıldı.)"
        }
    ]
};

// ===== UNIT 564: DOLAYLI ANLATIM =====
const unit564Lecture: UnitLecture = {
    unitId: 564, title: "Dolaylı Anlatım", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Başkalarının Sözlerini Aktarma",
            content: "Birinin söylediği bir şeyi bir başkasına aktarırken dolaylı anlatımı (Indirekte Rede) kullanırız. Örn: 'Ali dedi ki: Hastayım' yerine 'Ali hasta olduğunu söyledi'."
        },
        {
            id: 2, type: "grammar", title: "Dass Bağlacı",
            content: "B1 seviyesinde en yaygın yöntem **'dass'** bağlacını kullanmaktır. Unutmayın, 'dass' cümlesinde fiil daima en sona gider.\n\nÖrn: Er sagt, **dass** er heute **kommt**."
        },
        {
            id: 3, type: "vocabulary", title: "Aktarma Fiilleri",
            content: "Dolaylı anlatıma başlarken şu fiilleri kullanabilirsiniz:\n\n- **sagen**: söylemek\n- **behaupten**: iddia etmek\n- **meinen**: düşünmek / belirtmek\n- **erzählen**: anlatmak"
        }
    ]
};

// ===== UNIT 565: GENITIV HALİ =====
const unit565Lecture: UnitLecture = {
    unitId: 565, title: "Genitiv (Tamlayan Hali)", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Aidiyet Belirtme",
            content: "Genitiv, bir şeyin birine veya bir şeye ait olduğunu belirtir. Almancada resmî ve yazılı dilde çok sık kullanılır."
        },
        {
            id: 2, type: "grammar", title: "Artikeller Nasıl Değişir?",
            content: "| Artikeli | Genitiv Formu |\n|---|---|\n| der (eril) | **des** + ...s |\n| das (nötr) | **des** + ...s |\n| die (dişil) | **der** |\n| die (çoğul) | **der** |"
        },
        {
            id: 3, type: "culture", title: "Dativ vs Genitiv",
            content: "Günlük dilde Almanlar genellikle Genitiv yerine 'von + Dativ' yapısını kullanırlar. Ancak B1 seviyesindeki sınavlarda ve resmî yazışmalarda Genitiv kullanımı şarttır."
        }
    ]
};

// ===== UNIT 566: PHRASAL VERBS 1 =====
const unit566Lecture: UnitLecture = {
    unitId: 566, title: "Phrasal Verbs 1", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Ayrılabilen Fiiller",
            content: "Bazı fiillerin başında 'auf-', 'an-', 'ein-' gibi ekler bulunur. Bu ekler cümle kurulurken fiilden ayrılıp en sona giderler."
        },
        {
            id: 2, type: "vocabulary", title: "Sıkça Kullanılanlar",
            content: "- **auf**stehen: kalkmak\n- **an**rufen: aramak\n- **ein**kaufen: alışveriş yapmak\n- **fern**sehen: TV izlemek"
        },
        {
            id: 3, type: "table", title: "Örnek Cümleler",
            content: "| Fiil | Cümle |\n|---|---|\n| anrufen | Ich **rufe** dich **an**. |\n| aufstehen | Er **steht** früh **auf**. |\n| einkaufen | Wir **kaufen** heute **ein**. |"
        }
    ]
};

// ===== UNIT 567: PHRASAL VERBS 2 =====
const unit567Lecture: UnitLecture = {
    unitId: 567, title: "Phrasal Verbs 2", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Ayrılamayan Fiiller",
            content: "Bazı ön ekler ise fiilden asla ayrılmazlar. Bunlar: **be-, ge-, er-, ver-, zer-**.\n\nÖrn: verstehen, besuchen, erzählen."
        },
        {
            id: 2, type: "grammar", title: "Kural",
            content: "Bu fiillerin en büyük özelliği, geçmiş zaman (Partizip II) yapılırken başlarına '-ge' takısı almamalarıdır.\n\n- besuchen -> besucht (ge-besucht DEĞİL)\n- verstehen -> verstanden"
        },
        {
            id: 3, type: "vocabulary", title: "Önemli Fiiller",
            content: "- **ver**stehen: anlamak\n- **be**zahlen: ödemek\n- **er**klären: açıklamak\n- **zer**stören: yok etmek"
        }
    ]
};

// ===== UNIT 568: HABERLER VE MEDYA =====
const unit568Lecture: UnitLecture = {
    unitId: 568, title: "Haberler ve Medya", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Medya Dünyası",
            content: "Bu ünitede gazete, televizyon ve internet dünyasındaki terimleri inceleyeceğiz."
        },
        {
            id: 2, type: "vocabulary", title: "Medya Terimleri",
            content: "- **die Presse**: basın\n- **die Quelle**: kaynak\n- **das Interview**: röportaj\n- **die Nachricht**: haber"
        },
        {
            id: 3, type: "culture", title: "Alman Medyası",
            content: "Almanya'da 'Die Tageszeitung' (taz), 'Frankfurter Allgemeine' (FAZ) ve 'Der Spiegel' gibi köklü basın kuruluşları çok önemlidir. Ayrıca sosyal medyaya 'Soziale Medien' denir."
        }
    ]
};

// ===== UNIT 569: ÇEVRE SORUNLARI =====
const unit569Lecture: UnitLecture = {
    unitId: 569, title: "Çevre Sorunları", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Gezegenimizi Korumak",
            content: "İklim değişikliği ve çevre kirliliği gibi küresel sorunları nasıl ifade edeceğimizi öğreneceğiz."
        },
        {
            id: 2, type: "vocabulary", title: "Sorunlar",
            content: "- **der Klimawandel**: iklim değişikliği\n- **die Verschmutzung**: kirlilik\n- **der CO2-Ausstoß**: karbon salınımı\n- **die Erwärmung**: ısınma"
        },
        {
            id: 3, type: "grammar", title: "Neden-Sonuç İlişkisi",
            content: "Çevre konularını tartışırken 'weil' (çünkü) ve 'deshalb' (bu yüzden) bağlaçları çok sık kullanılır.\n\nÖrn: Wir müssen handeln, **weil** das Klima sich ändert."
        }
    ]
};

// ===== UNIT 570: SÜRDÜRÜLEBİLİRLİK =====
const unit570Lecture: UnitLecture = {
    unitId: 570, title: "Sürdürülebilirlik", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Nachhaltigkeit",
            content: "Sürdürülebilirlik (Nachhaltigkeit), geleceği tehlikeye atmadan bugünün ihtiyaçlarını karşılamak demektir."
        },
        {
            id: 2, type: "vocabulary", title: "Çözüm Terimleri",
            content: "- **das Recycling**: geri dönüşüm\n- **erneuerbare Energien**: yenilenebilir enerjiler\n- **Bio-Produkte**: organik ürünler\n- **sparen**: tasarruf etmek"
        },
        {
            id: 3, type: "table", title: "Sık Kullanılan Kalıplar",
            content: "| Almanca | Türkçe |\n|---|---|\n| Wasser sparen | su tasarrufu yapmak |\n| Müll trennen | çöpleri ayırmak |\n| lokal einkaufen | yerel alışveriş yapmak |"
        }
    ]
};

// ===== UNIT 571: KÜLTÜR VE GELENEKLER =====
const unit571Lecture: UnitLecture = {
    unitId: 571, title: "Kültür ve Gelenekler", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Kültürel Miras",
            content: "Almanya zengin kültürel mirası, gelenekleri ve sanatı ile tanınır. Bu ünitede bu değerleri nasıl ifade edeceğimizi öğreneceğiz."
        },
        {
            id: 2, type: "vocabulary", title: "Gelenek Terimleri",
            content: "- **die Tradition**: gelenek\n- **der Brauch**: adet\n- **die Vielfalt**: çeşitlilik\n- **der Feiertag**: bayram/resmi tatil"
        },
        {
            id: 3, type: "table", title: "Önemli Günler",
            content: "| Gün | Almanca |\n|---|---|\n| Noel | Weihnachten |\n| Paskalya | Ostern |\n| Birlik Günü | Tag der Deutschen Einheit |"
        }
    ]
};

// ===== UNIT 572: EKONOMİ TEMELLERİ =====
const unit572Lecture: UnitLecture = {
    unitId: 572, title: "Ekonomi Temelleri", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Ekonomi Dünyası",
            content: "Almanya, Avrupa'nın en büyük ekonomisine sahip ülkesidir. Temel ekonomik terimleri öğrenmek iş hayatı için kritiktir."
        },
        {
            id: 2, type: "vocabulary", title: "İş ve Para",
            content: "- **die Wirtschaft**: ekonomi\n- **der Gewinn**: kar\n- **der Verlust**: zarar\n- **die Inflation**: enflasyon"
        },
        {
            id: 3, type: "grammar", title: "Sıfat Karşılaştırma",
            content: "Ekonomik verileri kıyaslarken 'höher' (daha yüksek) veya 'niedriger' (daha düşük) gibi karşılaştırma yapıları kullanılır."
        }
    ]
};

// ===== UNIT 573: TARTIŞMA BECERİLERİ =====
const unit573Lecture: UnitLecture = {
    unitId: 573, title: "Tartışma Becerileri", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Fikir Belirtme",
            content: "Almancada fikir belirtirken ve birini ikna etmeye çalışırken kullanılan kalıpları öğreneceğiz."
        },
        {
            id: 2, type: "vocabulary", title: "Eylemler",
            content: "- **überzeugen**: ikna etmek\n- **diskutieren**: tartışmak\n- **zustimmen**: katılmak\n- **ablehnen**: reddetmek"
        },
        {
            id: 3, type: "table", title: "Kalıplar",
            content: "| İfade | Türkçe |\n|---|---|\n| Meiner Meinung nach... | Bana göre... |\n| Ich bin dafür. | Ben bundan yanayım. |\n| Das stimmt nicht. | Bu doğru değil. |"
        }
    ]
};

// ===== UNIT 574: SUNUM YAPMA =====
const unit574Lecture: UnitLecture = {
    unitId: 574, title: "Sunum Yapma", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Sunum Yapısı",
            content: "Başarılı bir sunum Giriş, Gelişme ve Sonuç (Einleitung, Hauptteil, Schluss) kısımlarından oluşur."
        },
        {
            id: 2, type: "vocabulary", title: "Sunum Terimleri",
            content: "- **begrüßen**: selamlamak\n- **zusammenfassen**: özetlemek\n- **die Folie**: slayt\n- **das Publikum**: dinleyici"
        },
        {
            id: 3, type: "grammar", title: "Geçiş Kelimeleri",
            content: "Sıralama için: First (Zuerst), then (dann), finally (schließlich).\n\nÖrn: **Zuerst** stelle ich mein Thema vor, **dann** zeige ich Beispiele."
        }
    ]
};

// ===== UNIT 575: EDEBİYAT 1 =====
const unit575Lecture: UnitLecture = {
    unitId: 575, title: "Edebiyat 1", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Alman Edebiyatı",
            content: "Goethe, Schiller gibi isimlerin dünyasına giriş yapıyoruz. Edebiyat dili daha resmî ve zengindir."
        },
        {
            id: 2, type: "vocabulary", title: "Kitap Dünyası",
            content: "- **der Roman**: roman\n- **das Gedicht**: şiir\n- **der Titel**: başlık/eser adı\n- **der Autor**: yazar"
        },
        {
            id: 3, type: "grammar", title: "Präteritum",
            content: "Edebi eserlerde geçmiş zaman için genellikle 'Perfekt' yerine 'Präteritum' kullanılır.\n\nÖrn: Es **war** einmal... (Bir zamanlar ... vardı)"
        }
    ]
};

// ===== UNIT 576: AKADEMİK YAZMA =====
const unit576Lecture: UnitLecture = {
    unitId: 576, title: "Akademik Yazma", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Üniversite Dili",
            content: "Akademik makale veya ödev yazarken dikkat edilmesi gereken resmî üslup ve kuralları öğreneceğiz."
        },
        {
            id: 2, type: "vocabulary", title: "Bilimsel Terimler",
            content: "- **zitieren**: alıntı yapmak\n- **die Recherche**: araştırma\n- **der Abstract**: özet\n- **die Hausarbeit**: ödev/tez"
        },
        {
            id: 3, type: "table", title: "Yazım Kuralları",
            content: "| Kural | Önem |\n|---|---|\n| Objektivite | Öznel yargılardan kaçının |\n| Kaynakça | Tüm kaynakları belirtin |\n| Planlama | İyi bir taslak (Gliederung) oluşturun |"
        }
    ]
};

// ===== UNIT 577: BİLİM VE TEKNOLOJİ =====
const unit577Lecture: UnitLecture = {
    unitId: 577, title: "Bilim ve Teknoloji", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Geleceğin Teknolojisi",
            content: "YZ, robotik ve tıp gibi alanlardaki bilimsel gelişmeleri tartışacağız."
        },
        {
            id: 2, type: "vocabulary", title: "Teknik Terimler",
            content: "- **die Forschung**: araştırma\n- **die Entwicklung**: gelişim\n- **die künstliche Intelligenz**: yapay zeka\n- **das Labor**: laboratuvar"
        },
        {
            id: 3, type: "grammar", title: "Futur I",
            content: "Gelecek tahminleri: **werden + Infinitiv**.\n\nÖrn: Technologie **wird** unser Leben verändern."
        }
    ]
};

// ===== UNIT 578: SAĞLIK VE BESLENME =====
const unit578Lecture: UnitLecture = {
    unitId: 578, title: "Sağlık ve Beslenme", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Sağlıklı Yaşam",
            content: "Vücudumuza iyi bakmak ve dengeli beslenmekle ilgili terimleri inceleyeceğiz."
        },
        {
            id: 2, type: "vocabulary", title: "Mutfak ve Sağlık",
            content: "- **die Ernährung**: beslenme\n- **das Vitamin**: vitamin\n- **vegetarisch**: vejetaryen\n- **die Prävention**: önleme"
        },
        {
            id: 3, type: "culture", title: "Almanya ve Sağlık",
            content: "Almanya'da sağlıklı yaşam ('Bio' akımı) çok popülerdir. İnsanlar organik ürünlere ve düzenli spora önem verirler."
        }
    ]
};

// ===== UNIT 579: PSİKOLOJİ TEMELLERİ =====
const unit579Lecture: UnitLecture = {
    unitId: 579, title: "Psikoloji Temelleri", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "İnsan Psikolojisi",
            content: "Duygular, davranışlar ve ruh sağlığı ile ilgili temel kavramlar."
        },
        {
            id: 2, type: "vocabulary", title: "Psikolojik Terimler",
            content: "- **das Verhalten**: davranış\n- **die Psyche**: ruh/psikoloji\n- **die Emotion**: duygu\n- **der Stress**: stres"
        },
        {
            id: 3, type: "grammar", title: "Dönüşlü Fiiller",
            content: "Pek çok ruhsal durum 'sich' (dönüşlü) fiillerle anlatılır.\n\nÖrn: Ich **freue mich**. (Seviniyorum)"
        }
    ]
};

// ===== UNIT 580: İŞ ALMANCASI 1 =====
const unit580Lecture: UnitLecture = {
    unitId: 580, title: "İş Almancası 1", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "İş Hayatına Giriş",
            content: "İş yerinde iletişim, toplantılar ve yazışmalar için gereken temel Almanca."
        },
        {
            id: 2, type: "vocabulary", title: "Ofis Terimleri",
            content: "- **das Meeting**: toplantı\n- **der Kunde**: müşteri\n- **das Projekt**: proje\n- **die Frist**: mühlet/teslim tarihi"
        },
        {
            id: 3, type: "table", title: "Resmî Yazışma",
            content: "| İfade | Türkçe |\n|---|---|\n| Sehr geehrte Damen und Herren | Sayın Yetkililer |\n| Mit freundlichen Grüßen | Saygılarımla |\n| Ich bitte um Rückmeldung | Geri dönüşünüzü bekliyorum |"
        }
    ]
};

// ===== UNIT 581: PLUSQUAMPERFEKT =====
const unit581Lecture: UnitLecture = {
    unitId: 581, title: "Plusquamperfekt", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Geçmişin Geçmişi",
            content: "Geçmişte gerçekleşen iki olaydan daha önce olanı 'Plusquamperfekt' ile ifade ederiz."
        },
        {
            id: 2, type: "grammar", title: "Yapı (had + done)",
            content: "Özne + **hatte / war** + Partizip II.\n\nÖrn: Ich **hatte** gegessen, **bevor** ich ging."
        },
        {
            id: 3, type: "vocabulary", title: "Bağlaçlar",
            content: "Bu zamanda en çok 'bevor' (önce) ve 'nachdem' (sonra) bağlaçları kullanılır."
        }
    ]
};

// ===== UNIT 582: FUTUR II =====
const unit582Lecture: UnitLecture = {
    unitId: 582, title: "Futur II", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Bitmiş Gelecek",
            content: "Gelecekte belirli bir zamanda tamamlanmış olacak eylemler veya geçmişe dair tahminler için kullanılır."
        },
        {
            id: 2, type: "grammar", title: "Yapı (will have done)",
            content: "Özne + **werde** + Partizip II + **haben / sein**.\n\nÖrn: Bis morgen **werde** ich es **gelernt haben**."
        },
        {
            id: 3, type: "table", title: "Örnekler",
            content: "| Durum | Cümle |\n|---|---|\n| Gelecek | Bis 2030 werden wir das Ziel erreicht haben. |\n| Tahmin | Er wird wohl schon angekommen sein. |"
        }
    ]
};

// ===== UNIT 583: RELATIVSÄTZE =====
const unit583Lecture: UnitLecture = {
    unitId: 583, title: "Relativsätze", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "İlgi Cümleleri",
            content: "Bir ismi niteleyen ve onun hakkında ek bilgi veren yan cümlelerdir."
        },
        {
            id: 2, type: "grammar", title: "İlgi Zamirleri",
            content: "Zamirler niteledikleri ismin artikeline ve cümledeki hallerine (Nom, Akk, Dat) göre değişir.\n\nÖrn: Der Mann, **den** ich sehe... (Gördüğüm adam...)"
        },
        {
            id: 3, type: "table", title: "Zamir Tablosu",
            content: "| Case | Eril | Dişil | Nötr | Çoğul |\n|---|---|---|---|---|\n| Nom | der | die | das | die |\n| Akk | den | die | das | die |\n| Dat | dem | der | dem | denen |"
        }
    ]
};

// ===== UNIT 584: KAUSALSÄTZE =====
const unit584Lecture: UnitLecture = {
    unitId: 584, title: "Kausalsätze", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Neden Belirtme",
            content: "Olayların nedenlerini belirtmek için kullanılan bağlaçları (Weil, Da, Denn) inceleyeceğiz."
        },
        {
            id: 2, type: "grammar", title: "Bauchtabelle (Cümle Yapısı)",
            content: "- **Weil/Da**: Fiil sonda (Nebensatz)\n- **Denn**: Fiil 2. sırada (Hauptsatz)\n\nÖrn: Ich bleibe zu Hause, **weil** es regnet. / **Denn** es regnet."
        },
        {
            id: 3, type: "vocabulary", title: "Zarflar",
            content: "Neden belirtmek için zarf olarak 'deshalb', 'deswegen' ve 'darum' da kullanılabilir."
        }
    ]
};

// ===== UNIT 585: WUNSCHSÄTZE =====
const unit585Lecture: UnitLecture = {
    unitId: 585, title: "Wunschsätze", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Dilek Cümleleri",
            content: "Gerçekleşmesi istenen hayaller veya pişmanlıklar Konjunktiv II ile ifade edilir."
        },
        {
            id: 2, type: "grammar", title: "Kalıplar",
            content: "'Wenn... doch' veya 'Hätte/Wäre... doch' yapıları çok sık kullanılır.\n\nÖrn: **Hätte** ich doch mehr Zeit! (Keşke daha çok vaktim olsaydı!)"
        },
        {
            id: 3, type: "vocabulary", title: "Parçacıklar",
            content: "Dilekleri güçlendirmek için **doch, nur, doch nur** gibi parçacıklar eklenir."
        }
    ]
};

// ===== UNIT 586: MODALVERBEN GEG. =====
const unit586Lecture: UnitLecture = {
    unitId: 586, title: "Modalverben Geg. (Tahmin)",
    language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Olasılık ve Tahmin",
            content: "Modal fiiller (könnte, müsste, dürfte) sadece yetenek/zorunluluk değil, tahmin bildirmek için de kullanılır."
        },
        {
            id: 2, type: "grammar", title: "Dereceler",
            content: "- **Könnte**: Belki (%30-50)\n- **Dürfte**: Muhtemelen (%70-80)\n- **Müsste**: Büyük ihtimalle (%90+)"
        },
        {
            id: 3, type: "vocabulary", title: "Örnek",
            content: "Er **könnte** krank sein. (Hasta olabilir.)\nEr **dürfte** zu Hause sein. (Muhtemelen evdedir.)"
        }
    ]
};

// ===== UNIT 587: NOMINALISIERUNG =====
const unit587Lecture: UnitLecture = {
    unitId: 587, title: "Nominalisierung", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "İsimleştirme",
            content: "B1 ve üstü seviyelerde fiillerin isim hallerini kullanmak (nominal stil) anlatımı güçlendirir."
        },
        {
            id: 2, type: "grammar", title: "Nasıl Yapılır?",
            content: "Fiilin mastar hali büyük harfle yazılır ve 'das' artikeli alır.\n\nÖrn: essen -> **das Essen** (yemek)"
        },
        {
            id: 3, type: "vocabulary", title: "Edatlarla Kullanım",
            content: "**Beim** Lesen (okurken), **zum** Schreiben (yazmak için) gibi yapılar günlük hayatta çok yaygındır."
        }
    ]
};

// ===== UNIT 588: PARTIZIPIALATT. =====
const unit588Lecture: UnitLecture = {
    unitId: 588, title: "Partizipialattribute", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Sıfat Olarak Fiiller",
            content: "Fiillerin Partizip I (yapan) ve Partizip II (yapılmış) hallerini sıfat olarak kullanmayı öğreneceğiz."
        },
        {
            id: 2, type: "grammar", title: "Partizip I vs II",
            content: "- **Partizip I**: lachendes Kind (gülen çocuk) - Aktif/Devam eden\n- **Partizip II**: gelesenes Buch (okunmuş kitap) - Pasif/Tamamlanmış"
        },
        {
            id: 3, type: "vocabulary", title: "Ekler",
            content: "Bu yapılar sıfat gibi davrandıkları için normal sıfat çekim eklerini alırlar."
        }
    ]
};

// ===== UNIT 589: KONJUNKTIONEN =====
const unit589Lecture: UnitLecture = {
    unitId: 589, title: "Çiftli Bağlaçlar", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Doppelkonjunktionen",
            content: "İki durumu birbirine bağlayan çiftli yapıları öğreneceğiz."
        },
        {
            id: 2, type: "vocabulary", title: "Bağlaç Listesi",
            content: "- **Sowohl ... als auch**: Hem ... hem de\n- **Weder ... noch**: Ne ... ne de\n- **Entweder ... oder**: Ya ... ya da\n- **Nicht nur ... sondern auch**: Sadece değil ... aynı zamanda"
        },
        {
            id: 3, type: "grammar", title: "Cümle Yapısı",
            content: "Bu bağlaçlar genellikle Hauptsatz (fiil 2. sıra) yapısını korurlar."
        }
    ]
};

// ===== UNIT 590: B1 TEKRAR =====
const unit590Lecture: UnitLecture = {
    unitId: 590, title: "B1 Seviye Sonu Tekrar", language: "de", level: "B1",
    slides: [
        {
            id: 1, type: "intro", title: "Eksikleri Tamamlama",
            content: "Tebrikler! B1 seviyesinin sonuna geldiniz. Bu ünitede genel bir tekrar yapacağız."
        },
        {
            id: 2, type: "vocabulary", title: "Sınav Motivasyonu",
            content: "B1 Zertifikat sınavı; Okuma, Yazma, Dinleme ve Konuşma bölümlerinden oluşur."
        },
        {
            id: 3, type: "culture", title: "Gelecek Adımlar",
            content: "B1 seviyesi, Almanya'da günlük hayatın ötesinde iş ve akademi dünyasına giriş anahtarınızdır. Bir sonraki adım: B2!"
        }
    ]
};

const unitMap: { [key: number]: UnitLecture } = {
    561: unit561Lecture, 562: unit562Lecture, 563: unit563Lecture, 564: unit564Lecture, 565: unit565Lecture,
    566: unit566Lecture, 567: unit567Lecture, 568: unit568Lecture, 569: unit569Lecture, 570: unit570Lecture,
    571: unit571Lecture, 572: unit572Lecture, 573: unit573Lecture, 574: unit574Lecture, 575: unit575Lecture,
    576: unit576Lecture, 577: unit577Lecture, 578: unit578Lecture, 579: unit579Lecture, 580: unit580Lecture,
    581: unit581Lecture, 582: unit582Lecture, 583: unit583Lecture, 584: unit584Lecture, 585: unit585Lecture,
    586: unit586Lecture, 587: unit587Lecture, 588: unit588Lecture, 589: unit589Lecture, 590: unit590Lecture,
};

export function getGermanB1LecturesForUnit(unitId: number): UnitLecture {
    return unitMap[unitId] || unit561Lecture;
}
