/**
 * SteadyShell Gramer Veritabanı - İspanyolca B1
 * 30 Ünite (ID: 61-90) - Curriculum ile TAM UYUMLU
 * Her ünite için CEFR B1 seviyesine uygun gramer kuralları
 */

export interface B1GrammarRule {
    title: string;
    explanation: string;
    examples: string[];
    table?: string;
    exceptions?: string[];
    notes?: string[];
}

// ===== ÜNİTE 61: GELECEK ZAMAN (FUTURO SIMPLE) =====
const unit61Grammar: B1GrammarRule[] = [
    {
        title: "🇪🇸 Futuro Simple - Düzenli Çekim",
        explanation: "İspanyolcada gelecek zaman, fiilin mastar haline -é, -ás, -á, -emos, -éis, -án ekleri getirilerek yapılır. Tüm fiil grupları (-ar, -er, -ir) aynı ekleri alır.",
        examples: [
            "Hablar → Hablaré, Hablarás, Hablará, Hablaremos, Hablaréis, Hablarán",
            "Comer → Comeré, Comerás, Comerá, Comeremos, Comeréis, Comerán",
            "Vivir → Viviré, Vivirás, Vivirá, Viviremos, Viviréis, Vivirán"
        ],
        table: "| Kişi | Ek | Örnek (Hablar) |\n|---|---|---|\n| Yo | -é | Hablaré |\n| Tú | -ás | Hablarás |\n| Él/Ella | -á | Hablará |\n| Nosotros | -emos | Hablaremos |\n| Vosotros | -éis | Hablaréis |\n| Ellos | -án | Hablarán |",
        notes: ["Tüm kişilerde vurgu son hecededir (Nosotros hariç)", "Dikkat: '-emos' ekinde vurgu yok!"]
    },
    {
        title: "🔥 Düzensiz Kökler - Grup A (E Düşer)",
        explanation: "Bazı fiillerde mastar kökündeki 'e' harfi düşer: Poder→Podr-, Querer→Querr-, Saber→Sabr-, Caber→Cabr-, Haber→Habr-",
        examples: [
            "Poder → Podré (Yapabileceğim)",
            "Querer → Querré (İsteyeceğim) ⚠️ Çift R!",
            "Saber → Sabré (Bileceğim)",
            "Haber → Habrá (Olacak - 3. tekil)"
        ],
        notes: ["Pod-E-r → Podr- (E düşer)", "Bu grupta 'e' harfi yutulur"]
    },
    {
        title: "🔥 Düzensiz Kökler - Grup B (D Türer)",
        explanation: "Bazı fiillerde araya 'd' harfi girer: Tener→Tendr-, Poner→Pondr-, Salir→Saldr-, Venir→Vendr-, Valer→Valdr-",
        examples: [
            "Tener → Tendré (Sahip olacağım)",
            "Poner → Pondré (Koyacağım)",
            "Salir → Saldré (Çıkacağım)",
            "Venir → Vendré (Geleceğim)"
        ],
        notes: ["Ten-E-r → Tendr- (E düşer, D girer)", "Bu grupta karakteristik '-DR-' sesi oluşur"]
    },
    {
        title: "🔥 Düzensiz Kökler - Grup C (Tamamen Değişen)",
        explanation: "Hacer ve Decir fiilleri kökleri tamamen değiştirir.",
        examples: [
            "Hacer → Haré (Yapacağım) - HAC değil HAR!",
            "Decir → Diré (Söyleyeceğim) - DEC değil DIR!"
        ],
        notes: ["Bu iki fiil en çok kullanılan fiillerdir, mutlaka ezberle!"]
    },
    {
        title: "📌 Gelecek Zamanın Kullanım Alanları",
        explanation: "Gelecek zaman sadece gelecek planlar için değil, olasılık belirtmek için de kullanılır (B1 seviyesi!).",
        examples: [
            "Plan: Mañana iré al médico. (Yarın doktora gideceğim)",
            "Tahmin: ¿Qué hora será? (Saat kaç acaba?)",
            "Olasılık: Estará durmiendo. (Uyuyor olmalı)"
        ],
        notes: ["Olasılık kullanımı B1 seviyesinin önemli bir parçasıdır!", "Türkçe karşılığı: 'olmalı, herhalde'"]
    }
];

// ===== ÜNİTE 62: KOŞUL CÜMLELERİ 1 =====
const unit62Grammar: B1GrammarRule[] = [
    {
        title: "🎯 1. Tip Koşul Cümleleri - Mantık",
        explanation: "Gerçekleşmesi muhtemel durumlar için kullanılır. Formül: Si + Presente + Futuro. 'Si' cümlesinde ASLA gelecek zaman kullanılmaz!",
        examples: [
            "Si tengo tiempo, iré. (Zamanım olursa, gideceğim)",
            "Si estudias, aprobarás. (Çalışırsan, geçersin)",
            "Si llueve, no saldremos. (Yağmur yağarsa, çıkmayız)"
        ],
        table: "| Koşul (Si + Presente) | Sonuç (Futuro) |\n|---|---|\n| Si tengo dinero | compraré un coche |\n| Si vienes | te ayudaré |",
        notes: ["Si + Presente (ASLA Futuro değil!)", "Virgül: Si başta ise virgül konur"]
    },
    {
        title: "🛠️ Alternatif Kombinasyonlar",
        explanation: "1. Tip koşul cümlelerinde sonuç kısmı Futuro yerine Imperativo veya Presente olabilir.",
        examples: [
            "Si + Presente + Imperativo: Si tienes hambre, come algo. (Açsan, bir şeyler ye)",
            "Si + Presente + Presente: Si mezclas azul y amarillo, obtienes verde. (Mavi ve sarıyı karıştırırsan, yeşil elde edersin)"
        ],
        notes: ["Imperativo: Emir verme", "Presente + Presente: Genel doğrular"]
    },
    {
        title: "⚠️ 'Si' vs 'Cuando' Farkı",
        explanation: "'Si' belirsizlik, 'Cuando' kesinlik ifade eder. Cuando gelecek referanslıysa Subjuntivo alır.",
        examples: [
            "Si viene Juan, llámame. (Eğer gelirse - belirsiz)",
            "Cuando venga Juan, llámame. (Geldiğinde - kesin gelecek)"
        ],
        notes: ["Si + Indicativo, Cuando + Subjuntivo (gelecek için)"]
    }
];

// ===== ÜNİTE 63: KOŞUL CÜMLELERİ 2 =====
const unit63Grammar: B1GrammarRule[] = [
    {
        title: "🌌 2. Tip Koşul Cümleleri - Hayali Durumlar",
        explanation: "Şu anki gerçekliğin tersini hayal etmek için kullanılır. Formül: Si + Imperfecto de Subjuntivo + Condicional",
        examples: [
            "Si tuviera dinero, compraría un coche. (Param olsaydı, araba alırdım)",
            "Si viviera en España, hablaría español. (İspanya'da yaşasaydım, İspanyolca konuşurdum)"
        ],
        table: "| Koşul (Si + Imp. Subj.) | Sonuç (Condicional) |\n|---|---|\n| Si tuviera tiempo | viajaría |",
        notes: ["Şu an gerçek DEĞİL, hayal!", "Geçmişten değil, şu andan bahsediyoruz"]
    },
    {
        title: "🔧 Imperfecto de Subjuntivo Oluşturma",
        explanation: "Ellos Indefinido çekiminden -ron çıkar, -ra, -ras, -ra, -ramos, -rais, -ran eklenir.",
        examples: [
            "Tener: Tuvieron → Tuvie- → Tuviera",
            "Estar: Estuvieron → Estuvie- → Estuviera",
            "Ser/Ir: Fueron → Fue- → Fuera"
        ],
        table: "| Kişi | Ek |\n|---|---|\n| Yo | -ra |\n| Tú | -ras |\n| Nosotros | -ramos ⚠️ |"
    },
    {
        title: "🔧 Condicional Simple",
        explanation: "Mastar + -ía ekleri. Düzensiz kökler Futuro ile aynıdır.",
        examples: [
            "Hablar → Hablaría",
            "Tener → Tendría (düzensiz)",
            "Hacer → Haría (düzensiz)"
        ]
    },
    {
        title: "👑 Si yo fuera tú... (Tavsiye)",
        explanation: "Birine tavsiye verirken 'Senin yerinde olsaydım...' kalıbı çok kullanılır.",
        examples: [
            "Si yo fuera tú, iría al médico. (Senin yerinde olsaydım, doktora giderdim)",
            "Yo que tú, estudiaría más. (Ben olsam, daha çok çalışırdım)"
        ]
    }
];

// ===== ÜNİTE 64: SUBJUNCTIVE GİRİŞ =====
const unit64Grammar: B1GrammarRule[] = [
    {
        title: "🇪🇸 Subjuntivo Nedir?",
        explanation: "Indicativo gerçekleri bildirir, Subjuntivo ise istek, şüphe ve duyguları ifade eder. 'Yapmasını istiyorum' gibi durumlar.",
        examples: [
            "Indicativo: Juan come. (Juan yiyor - GERÇEK)",
            "Subjuntivo: Quiero que Juan coma. (Juan'ın yemesini istiyorum - İSTEK)"
        ],
        notes: ["Subjuntivo = İstek, şüphe, duygu dünyası"]
    },
    {
        title: "🔧 Subjuntivo Çekim Kuralları",
        explanation: "1) Yo Presente formunun -o'sunu at. 2) -AR fiiller E, -ER/-IR fiiller A alır (ters mantık).",
        examples: [
            "Hablar: Hablo → Habl- → Hable, Hables, Hable...",
            "Comer: Como → Com- → Coma, Comas, Coma...",
            "Vivir: Vivo → Viv- → Viva, Vivas, Viva..."
        ],
        table: "| Şahıs | -AR | -ER/-IR |\n|---|---|---|\n| Yo | -e | -a |\n| Tú | -es | -as |\n| Él | -e | -a |"
    },
    {
        title: "⚠️ DISHES: Tam Düzensizler",
        explanation: "Dar, Ir, Ser, Haber, Estar, Saber fiilleri kurala uymaz.",
        examples: [
            "Dar → Dé", "Ir → Vaya", "Ser → Sea",
            "Haber → Haya", "Estar → Esté", "Saber → Sepa"
        ]
    },
    {
        title: "📍 WEIRDO: Ne Zaman Kullanılır?",
        explanation: "W-Wishes, E-Emotions, I-Impersonal, R-Recommendations, D-Doubt, O-Ojalá",
        examples: [
            "Quiero que vengas. (İstiyorum ki gelsin)",
            "Me alegra que estés aquí. (Burada olman beni mutlu ediyor)",
            "Es importante que estudies. (Çalışman önemli)",
            "No creo que sea verdad. (Doğru olduğunu sanmıyorum)"
        ]
    }
];

// ===== ÜNİTE 65: HABERLER VE MEDYA =====
const unit65Grammar: B1GrammarRule[] = [
    {
        title: "📰 Pasif Yapı: Ser + Participio",
        explanation: "Haberlerde sıkça kullanılır. Eylemi yapan değil, yapılan önemlidir.",
        examples: [
            "El libro fue escrito por Cervantes. (Kitap Cervantes tarafından yazıldı)",
            "La ley fue aprobada. (Yasa onaylandı)"
        ],
        notes: ["Participio cinsiyete uyum sağlar: escrito/escrita/escritos/escritas"]
    },
    {
        title: "🔄 Pasiva Refleja (Se)",
        explanation: "Günlük hayatta daha yaygın. Se + fiil (3. şahıs).",
        examples: [
            "Se vende casa. (Ev satılık)",
            "Se habla español. (İspanyolca konuşulur)"
        ],
        notes: ["Nesne tekil → fiil tekil, Nesne çoğul → fiil çoğul"]
    },
    {
        title: "📺 Medya Dili",
        explanation: "Gazetelerde manşet stili ve kaynak gösterme önemlidir.",
        examples: [
            "Manşet: Presidente visita Francia. (tanımlıklar atılır)",
            "Kaynak: Según fuentes oficiales... (Resmi kaynaklara göre...)"
        ]
    }
];

// ===== ÜNİTE 66: ÇEVRE SORUNLARI =====
const unit66Grammar: B1GrammarRule[] = [
    {
        title: "💪 Zorunluluk Yapıları",
        explanation: "Çevre konularında zorunluluk ifade etmek önemlidir.",
        examples: [
            "Tener que: Tenemos que reciclar. (Geri dönüştürmeliyiz - EN GÜÇLÜ)",
            "Deber: Debemos cuidar el planeta. (Gezegeni korumalıyız - AHLAKİ)",
            "Hay que: Hay que ahorrar agua. (Su tasarrufu yapmalı - GENEL)"
        ],
        table: "| Yapı | Güç | Kullanım |\n|---|---|---|\n| Tener que | En güçlü | Dış baskı |\n| Deber | Orta | Ahlaki görev |\n| Hay que | Genel | Kişisiz |"
    },
    {
        title: "📜 Es necesario que + Subjuntivo",
        explanation: "Farklı özne olduğunda Subjuntivo gerekir.",
        examples: [
            "Es necesario que el gobierno actúe. (Hükümetin harekete geçmesi gerekli)",
            "Es importante que todos reciclen. (Herkesin geri dönüştürmesi önemli)"
        ]
    }
];

// ===== ÜNİTE 67: SÜRDÜRÜLEBİLİRLİK =====
const unit67Grammar: B1GrammarRule[] = [
    {
        title: "📐 Tavsiye Yapıları",
        explanation: "Sustainability konularında tavsiyeleri Subjuntivo ile ifade ederiz.",
        examples: [
            "Te recomiendo que uses menos plástico. (Daha az plastik kullanmanı öneririm)",
            "Te sugiero que recicles. (Geri dönüştürmeni öneriyorum)",
            "Te aconsejo que ahorres energía. (Enerji tasarrufu yapmanı öğütlüyorum)"
        ],
        table: "| Fiil | Anlam |\n|---|---|\n| Recomendar | Önermek |\n| Sugerir | Telkin etmek |\n| Aconsejar | Öğütlemek |"
    },
    {
        title: "🌍 Kişisel Olmayan Tavsiyeler",
        explanation: "Es mejor que, Es aconsejable que yapıları.",
        examples: [
            "Es mejor que uses transporte público. (Toplu taşıma kullanman daha iyi)",
            "Es aconsejable que compres productos locales. (Yerel ürün alman tavsiye edilir)"
        ]
    }
];

// ===== ÜNİTE 68: KÜLTÜR VE GELENEKLER =====
const unit68Grammar: B1GrammarRule[] = [
    {
        title: "🌍 Se Impersonal",
        explanation: "Genel durumları anlatmak için: Se + fiil (3. tekil şahıs).",
        examples: [
            "En España se vive bien. (İspanya'da iyi yaşanır)",
            "Aquí se come tarde. (Burada geç yenir)",
            "Se dice que... (Denir ki...)"
        ],
        notes: ["Özne yok, genel durum anlatılır"]
    },
    {
        title: "📢 Kültürel Kalıplar",
        explanation: "Bayramlar ve gelenekler hakkında konuşurken kullanılan yapılar.",
        examples: [
            "Se celebra... (Kutlanır...)",
            "Es tradición + infinitivo (Gelenek ...maktır)",
            "Se suele + infinitivo (Genellikle ...ılır)"
        ]
    }
];

// ===== ÜNİTE 69: EKONOMİ TEMELLERİ =====
const unit69Grammar: B1GrammarRule[] = [
    {
        title: "📈 Karşılaştırma Yapıları",
        explanation: "Ekonomi haberlerinde karşılaştırma çok kullanılır.",
        examples: [
            "Más ... que: El euro es más fuerte que el dólar. (Euro dolardan daha güçlü)",
            "Menos ... que: Hay menos inflación que antes. (Eskisine göre daha az enflasyon var)",
            "Tan ... como: La crisis es tan grave como la anterior. (Kriz önceki kadar ciddi)"
        ],
        table: "| Yapı | Kullanım |\n|---|---|\n| Más ... que | Üstünlük |\n| Menos ... que | Azlık |\n| Tan ... como | Eşitlik (sıfat) |"
    },
    {
        title: "🚨 Rakamlarla: DE, QUE Değil!",
        explanation: "Sayılarla karşılaştırmada 'que' yerine 'de' kullanılır.",
        examples: [
            "La inflación es más de 10%. (Enflasyon %10'dan fazla)",
            "Cuesta menos de 100 euros. (100 eurodan az tutuyor)"
        ]
    },
    {
        title: "👽 Düzensiz Karşılaştırmalar",
        explanation: "Bazı sıfatların özel karşılaştırma formları vardır.",
        examples: [
            "Bueno → Mejor (Más bueno ❌)",
            "Malo → Peor",
            "Grande → Mayor",
            "Pequeño → Menor"
        ]
    }
];

// ===== ÜNİTE 70: BANKACILIK =====
const unit70Grammar: B1GrammarRule[] = [
    {
        title: "💰 Bankacılık Dili",
        explanation: "Banka işlemlerinde kullanılan yapılar ve kelimeler.",
        examples: [
            "Quiero abrir una cuenta. (Hesap açmak istiyorum)",
            "¿Cuál es el tipo de interés? (Faiz oranı nedir?)",
            "Necesito hacer una transferencia. (Transfer yapmam gerekiyor)"
        ]
    },
    {
        title: "📊 Gelecek Zamanla Tahmin",
        explanation: "Bankacılıkta gelecek tahminleri için Futuro kullanılır.",
        examples: [
            "Los tipos de interés subirán. (Faiz oranları artacak)",
            "El mercado se recuperará. (Piyasa toparlanacak)"
        ]
    }
];

// ===== ÜNİTE 71: TARTIŞMA BECERİLERİ =====
const unit71Grammar: B1GrammarRule[] = [
    {
        title: "🗣️ Fikir Belirtme Kalıpları",
        explanation: "Tartışmada görüş bildirmek için kullanılan yapılar.",
        examples: [
            "En mi opinión... (Bence...)",
            "Desde mi punto de vista... (Benim bakış açımdan...)",
            "Creo que... (Sanıyorum ki...)",
            "Me parece que... (Bana öyle geliyor ki...)"
        ]
    },
    {
        title: "⚔️ Karşı Çıkma ve Uzlaşma",
        explanation: "Nazik bir şekilde karşı çıkma veya uzlaşma ifadeleri.",
        examples: [
            "No estoy de acuerdo. (Katılmıyorum)",
            "Tienes razón, pero... (Haklısın, ama...)",
            "Estoy de acuerdo contigo. (Seninle aynı fikirdeyim)"
        ]
    },
    {
        title: "🧠 Creo que vs No creo que",
        explanation: "Olumlu düşünce Indicativo, olumsuz düşünce Subjuntivo alır.",
        examples: [
            "Creo que es verdad. (Doğru olduğunu düşünüyorum - Indicativo)",
            "No creo que sea verdad. (Doğru olduğunu sanmıyorum - Subjuntivo)"
        ]
    }
];

// ===== ÜNİTE 72: SUNUM YAPMA =====
const unit72Grammar: B1GrammarRule[] = [
    {
        title: "📊 Sunum Yapısı",
        explanation: "İyi bir sunum için kullanılan bağlaçlar ve geçiş ifadeleri.",
        examples: [
            "En primer lugar... (İlk olarak...)",
            "A continuación... (Devamında...)",
            "Por último... (Son olarak...)",
            "En conclusión... (Sonuç olarak...)"
        ]
    },
    {
        title: "🔗 Bağlaçlar",
        explanation: "Fikirleri bağlamak için kullanılan yapılar.",
        examples: [
            "Además (Ayrıca)",
            "Sin embargo (Ancak)",
            "Por lo tanto (Bu nedenle)",
            "Por ejemplo (Örneğin)"
        ]
    }
];

// ===== ÜNİTE 73: EDEBİYAT 1 =====
const unit73Grammar: B1GrammarRule[] = [
    {
        title: "📚 Geçmiş Zamanlar Karşılaştırma",
        explanation: "Hikaye anlatımında farklı geçmiş zamanların kullanımı.",
        examples: [
            "Indefinido: Ayer leí un libro. (Dün bir kitap okudum - tamamlanmış eylem)",
            "Imperfecto: Cuando era joven, leía mucho. (Gençken çok okurdum - alışkanlık)",
            "Pluscuamperfecto: Ya había leído ese libro. (O kitabı zaten okumuştum - geçmişin geçmişi)"
        ]
    },
    {
        title: "🎭 Dolaylı Anlatım Temelleri",
        explanation: "Başkalarının sözünü aktarmak için dijo que, contó que yapıları.",
        examples: [
            "Juan dijo: 'Vengo mañana.' → Juan dijo que vendría mañana.",
            "María me contó que había leído el libro."
        ]
    }
];

// ===== ÜNİTE 74: ŞİİR VE ŞARKI =====
const unit74Grammar: B1GrammarRule[] = [
    {
        title: "🎵 Duygusal İfadeler",
        explanation: "Şiir ve şarkılarda duygu ifade etmek için Subjuntivo sık kullanılır.",
        examples: [
            "Ojalá que llueva. (Keşke yağsa)",
            "Espero que me quieras. (Umarım beni seversin)",
            "Quiero que sepas... (Bilmeni istiyorum...)"
        ]
    },
    {
        title: "💕 Dilek ve İstek Yapıları",
        explanation: "Romantik ve poetik dilek ifadeleri.",
        examples: [
            "Ojalá + Subjuntivo: Ojalá estuvieras aquí. (Keşke burada olsaydın)",
            "Que + Subjuntivo: ¡Que seas feliz! (Mutlu ol!)"
        ]
    }
];

// ===== ÜNİTE 75: TARİH VE POLİTİKA =====
const unit75Grammar: B1GrammarRule[] = [
    {
        title: "📜 Tarihsel Anlatım",
        explanation: "Tarihi olaylar anlatılırken Indefinido ve Imperfecto birlikte kullanılır.",
        examples: [
            "En 1975, murió Franco. España vivía bajo una dictadura. (1975'te Franco öldü. İspanya diktatörlük altında yaşıyordu.)",
            "Cuando llegó la democracia, todo cambió. (Demokrasi geldiğinde, her şey değişti.)"
        ]
    },
    {
        title: "🏛️ Politik Dil",
        explanation: "Politika konularında kullanılan resmi yapılar.",
        examples: [
            "El gobierno ha aprobado... (Hükümet onayladı...)",
            "Se ha decidido que... (...kararlaştırıldı)",
            "La ley fue aprobada por... (Yasa ... tarafından onaylandı)"
        ]
    }
];

// ===== ÜNİTE 76: HUKUK TEMELLERİ =====
const unit76Grammar: B1GrammarRule[] = [
    {
        title: "⚖️ Zorunluluk ve Yasak",
        explanation: "Hukuk dilinde zorunluluk ve yasak ifade etme.",
        examples: [
            "Está prohibido... (...yasaktır)",
            "Es obligatorio... (...zorunludur)",
            "Se debe... (...-meli/-malı)"
        ]
    },
    {
        title: "📋 Resmi Yapılar",
        explanation: "Hukuki metinlerde sık kullanılan yapılar.",
        examples: [
            "Con arreglo a la ley... (Yasaya uygun olarak...)",
            "En virtud de... (...gereğince)",
            "El demandante / El demandado (Davacı / Davalı)"
        ]
    }
];

// ===== ÜNİTE 77: BİLİM VE TEKNOLOJİ =====
const unit77Grammar: B1GrammarRule[] = [
    {
        title: "🔬 Bilimsel Dil",
        explanation: "Bilimsel konularda kullanılan yapılar.",
        examples: [
            "Se ha descubierto que... (Keşfedildi ki...)",
            "Los estudios demuestran que... (Çalışmalar gösteriyor ki...)",
            "Según los científicos... (Bilim insanlarına göre...)"
        ]
    },
    {
        title: "💻 Teknoloji Kelimeleri",
        explanation: "Teknoloji konularında sık kullanılan ifadeler.",
        examples: [
            "La inteligencia artificial (Yapay zeka)",
            "Descargar / Subir (İndirmek / Yüklemek)",
            "El dispositivo (Cihaz)"
        ]
    }
];

// ===== ÜNİTE 78: SAĞLIK VE BESLENME =====
const unit78Grammar: B1GrammarRule[] = [
    {
        title: "🏥 Sağlık Tavsiyeleri",
        explanation: "Sağlık konularında tavsiye vermek için Subjuntivo kullanılır.",
        examples: [
            "Te recomiendo que hagas ejercicio. (Egzersiz yapmanı öneririm)",
            "Es importante que comas bien. (İyi yemen önemli)",
            "Deberías dormir más. (Daha çok uyumalısın)"
        ]
    },
    {
        title: "🍎 Beslenme Dili",
        explanation: "Beslenme konularında kullanılan yapılar.",
        examples: [
            "Es saludable + infinitivo (Sağlıklı ... maktır)",
            "Contiene vitaminas. (Vitamin içerir)",
            "Es bajo en grasas. (Yağı düşük)"
        ]
    }
];

// ===== ÜNİTE 79: PSİKOLOJİ TEMELLERİ =====
const unit79Grammar: B1GrammarRule[] = [
    {
        title: "🧠 Duygu ve Düşünce İfadeleri",
        explanation: "Psikoloji konularında duygu ve düşünceleri ifade etme.",
        examples: [
            "Me siento... (Hissediyorum...)",
            "Me preocupa que... (...-ması beni endişelendiriyor)",
            "Me alegra que... (...-ması beni sevindiriyor)"
        ]
    },
    {
        title: "💭 Refleksif Fiiller",
        explanation: "Duygusal durumları ifade eden refleksif fiiller.",
        examples: [
            "Sentirse (Hissetmek): Me siento feliz.",
            "Preocuparse (Endişelenmek): Me preocupo por ti.",
            "Relajarse (Gevşemek): Necesito relajarme."
        ]
    }
];

// ===== ÜNİTE 80: POR VS PARA =====
const unit80Grammar: B1GrammarRule[] = [
    {
        title: "🎯 Para - Amaç ve Hedef",
        explanation: "Para amaç, hedef, son tarih ve alıcı belirtir.",
        examples: [
            "Amaç: Estudio para aprender. (Öğrenmek için çalışıyorum)",
            "Alıcı: Este regalo es para ti. (Bu hediye senin için)",
            "Son tarih: Lo necesito para mañana. (Yarın için ihtiyacım var)"
        ]
    },
    {
        title: "🔄 Por - Sebep ve Araç",
        explanation: "Por sebep, neden, değişim, araç ve süre belirtir.",
        examples: [
            "Sebep: Gracias por tu ayuda. (Yardımın için teşekkürler)",
            "Araç: Viajamos por avión. (Uçakla seyahat ediyoruz)",
            "Değişim: Lo compré por 10 euros. (10 euroya aldım)"
        ]
    },
    {
        title: "📊 Karşılaştırma Tablosu",
        explanation: "Por ve Para arasındaki farklar.",
        examples: [],
        table: "| Para | Por |\n|---|---|\n| Amaç (İçin) | Sebep (Yüzünden) |\n| Alıcı | Değişim |\n| Son tarih | Süre |\n| Hedef | Araç |"
    }
];

// ===== ÜNİTE 81: SER VS ESTAR İLERİ =====
const unit81Grammar: B1GrammarRule[] = [
    {
        title: "🎭 Anlam Değiştiren Sıfatlar",
        explanation: "Bazı sıfatlar Ser ve Estar ile farklı anlam kazanır.",
        examples: [
            "Ser listo = Zeki olmak / Estar listo = Hazır olmak",
            "Ser aburrido = Sıkıcı olmak / Estar aburrido = Sıkılmış olmak",
            "Ser rico = Zengin olmak / Estar rico = Lezzetli olmak"
        ],
        table: "| Sıfat | Ser | Estar |\n|---|---|---|\n| listo | zeki | hazır |\n| aburrido | sıkıcı | sıkılmış |\n| rico | zengin | lezzetli |"
    },
    {
        title: "📍 Ser/Estar Özeti",
        explanation: "Ser = Kalıcı özellik, Estar = Geçici durum/konum.",
        examples: [
            "Ser: Soy español. (İspanyolum - kalıcı)",
            "Estar: Estoy en Madrid. (Madrid'deyim - konum)",
            "Estar: Estoy cansado. (Yorgunum - geçici)"
        ]
    }
];

// ===== ÜNİTE 82: SPOR VE FITNESS =====
const unit82Grammar: B1GrammarRule[] = [
    {
        title: "🏃 Spor Aktiviteleri",
        explanation: "Spor aktivitelerini ifade ederken kullanılan yapılar.",
        examples: [
            "Hacer deporte (Spor yapmak)",
            "Ir al gimnasio (Spor salonuna gitmek)",
            "Jugar al fútbol (Futbol oynamak)",
            "Practicar natación (Yüzme pratiği yapmak)"
        ]
    },
    {
        title: "💪 Sıklık ve Düzenlilik",
        explanation: "Egzersiz alışkanlıklarını anlatırken kullanılan zarflar.",
        examples: [
            "Todos los días (Her gün)",
            "Tres veces a la semana (Haftada üç kez)",
            "De vez en cuando (Ara sıra)"
        ]
    }
];

// ===== ÜNİTE 83: SEYAHAT DENEYİMLERİ =====
const unit83Grammar: B1GrammarRule[] = [
    {
        title: "✈️ Seyahat Hikâyeleri",
        explanation: "Seyahat deneyimlerini anlatırken Pretérito Perfecto ve Indefinido kullanımı.",
        examples: [
            "He viajado a muchos países. (Birçok ülkeye gittim - deneyim)",
            "El año pasado fui a Japón. (Geçen yıl Japonya'ya gittim - belirli zaman)"
        ]
    },
    {
        title: "🗺️ Planlama Dili",
        explanation: "Seyahat planlamak için kullanılan yapılar.",
        examples: [
            "Voy a reservar... (Rezervasyon yapacağım...)",
            "Me gustaría visitar... (Ziyaret etmek isterim...)",
            "Pienso ir a... (... gitmek niyetindeyim)"
        ]
    }
];

// ===== ÜNİTE 84: MÜZİK VE SANAT =====
const unit84Grammar: B1GrammarRule[] = [
    {
        title: "🎨 Sanat Hakkında Konuşma",
        explanation: "Sanat eserlerini tanımlamak için kullanılan yapılar.",
        examples: [
            "Esta obra fue pintada por Picasso. (Bu eser Picasso tarafından boyandı)",
            "Me parece que es una obra maestra. (Bana başyapıt gibi görünüyor)",
            "Representa... (Temsil ediyor...)"
        ]
    },
    {
        title: "🎵 Müzik Beğenisi",
        explanation: "Müzik tercihlerini ifade etme.",
        examples: [
            "Me encanta el flamenco. (Flamenkoyu çok seviyorum)",
            "Prefiero la música clásica. (Klasik müziği tercih ederim)",
            "No me gusta el reggaetón. (Reggaeton'u sevmiyorum)"
        ]
    }
];

// ===== ÜNİTE 85: İLİŞKİLER VE SOSYAL HAYAT =====
const unit85Grammar: B1GrammarRule[] = [
    {
        title: "💕 İlişki Kelimeleri",
        explanation: "İnsan ilişkilerini tanımlayan kelimeler ve yapılar.",
        examples: [
            "Llevarse bien/mal con (İyi/kötü geçinmek)",
            "Confiar en (Güvenmek)",
            "Apoyar a (Desteklemek)"
        ]
    },
    {
        title: "🤝 Duygu İfadeleri",
        explanation: "İlişkilerde duyguları ifade etme.",
        examples: [
            "Me alegro de que estés aquí. (Burada olmana seviniyorum)",
            "Me molesta que llegues tarde. (Geç kalman beni rahatsız ediyor)",
            "Me sorprende que... (...-ması beni şaşırtıyor)"
        ]
    }
];

// ===== ÜNİTE 86: İŞ VE KARİYER =====
const unit86Grammar: B1GrammarRule[] = [
    {
        title: "💼 İş Başvurusu Dili",
        explanation: "CV ve mülakat için kullanılan yapılar.",
        examples: [
            "Tengo experiencia en... (...-da deneyimim var)",
            "Soy capaz de... (...-yı yapabilirim)",
            "Me interesa el puesto de... (...pozisyonuyla ilgileniyorum)"
        ]
    },
    {
        title: "📈 Kariyer Hedefleri",
        explanation: "Gelecek planlarını ifade etme.",
        examples: [
            "Quiero desarrollarme profesionalmente. (Profesyonel olarak gelişmek istiyorum)",
            "Mi objetivo es... (Hedefim...)",
            "Aspiro a ser... (...olmayı hedefliyorum)"
        ]
    }
];

// ===== ÜNİTE 87: EDEBİYAT 2 =====
const unit87Grammar: B1GrammarRule[] = [
    {
        title: "📖 Dolaylı Anlatım İleri",
        explanation: "Zaman kaydırma kuralları detaylı olarak.",
        examples: [
            "Presente → Imperfecto: 'Estoy feliz' → Dijo que estaba feliz.",
            "Futuro → Condicional: 'Vendré' → Dijo que vendría.",
            "Pretérito Perfecto → Pluscuamperfecto: 'He comido' → Dijo que había comido."
        ],
        table: "| Direkt | Dolaylı |\n|---|---|\n| Presente | Imperfecto |\n| Futuro | Condicional |\n| Perfecto | Pluscuamperfecto |"
    },
    {
        title: "📚 Edebi Terimler",
        explanation: "Edebiyat analizi için temel terimler.",
        examples: [
            "El narrador (Anlatıcı)",
            "El protagonista (Baş karakter)",
            "La trama (Konu/Olay örgüsü)",
            "El desenlace (Sonuç/Çözüm)"
        ]
    }
];

// ===== ÜNİTE 88: İSPANYOL COĞRAFYASI =====
const unit88Grammar: B1GrammarRule[] = [
    {
        title: "🗺️ Coğrafi Tanımlamalar",
        explanation: "Bölge ve coğrafyayı tanımlamak için yapılar.",
        examples: [
            "Está situado en... (...-da konumlanmış)",
            "Limita con... (...ile sınır)",
            "Tiene un clima... (...iklime sahip)"
        ]
    },
    {
        title: "🏔️ Doğa Kelimeleri",
        explanation: "Coğrafi özellikler için kelimeler.",
        examples: [
            "La montaña (Dağ) / La meseta (Yayla)",
            "La costa (Kıyı) / La isla (Ada)",
            "El río (Nehir) / El mar (Deniz)"
        ]
    }
];

// ===== ÜNİTE 89: LATİN AMERİKA KÜLTÜRÜ =====
const unit89Grammar: B1GrammarRule[] = [
    {
        title: "🌎 Bölgesel Farklılıklar",
        explanation: "İspanyolca'nın bölgesel varyasyonları.",
        examples: [
            "Voseo (Arjantin): Vos tenés = Tú tienes",
            "Ustedes (L. Amerika): Ustedes = Vosotros (İspanya)",
            "Seseo: C/Z = S sesi (İspanya'da TH)"
        ]
    },
    {
        title: "🗣️ Kelime Farklılıkları",
        explanation: "Farklı ülkelerde farklı kelimeler.",
        examples: [
            "Araba: Coche (İspanya) / Carro (Meksika) / Auto (Arjantin)",
            "Bilgisayar: Ordenador (İspanya) / Computadora (L. Amerika)",
            "Tamam: Vale (İspanya) / Órale (Meksika) / Dale (Arjantin)"
        ]
    }
];

// ===== ÜNİTE 90: B1 KAPSAMLI FİNAL =====
const unit90Grammar: B1GrammarRule[] = [
    {
        title: "🎓 B1 Dilbilgisi Özeti",
        explanation: "B1 seviyesinin tüm ana konularının özeti.",
        examples: [
            "Gelecek Zaman (Futuro Simple)",
            "Koşul Cümleleri (1. ve 2. Tip)",
            "Subjuntivo (Presente) - WEIRDO",
            "Pasif Yapı (Ser + Participio, Se)",
            "Por vs Para, Ser vs Estar ileri"
        ]
    },
    {
        title: "🔑 Anahtar Yapılar",
        explanation: "B1'de mutlaka bilinmesi gereken yapılar.",
        examples: [
            "Si + Presente + Futuro (1. Tip Koşul)",
            "Si + Imp. Subj. + Condicional (2. Tip Koşul)",
            "WEIRDO + Subjuntivo",
            "Más/Menos ... que, Tan/Tanto ... como"
        ]
    },
    {
        title: "🚀 B2'ye Hazırlık",
        explanation: "B2 seviyesinde karşılaşılacak konular.",
        examples: [
            "Subjuntivo Imperfecto tam kullanım",
            "3. Tip Koşul Cümleleri (İmkansız koşullar)",
            "Akademik ve profesyonel dil",
            "İleri düzey bağlaçlar ve edatlar"
        ]
    }
];

// ===== B1 GRAMMAR MAPPING (ID: 61-90) =====
export function getB1GrammarForUnit(unitId: number): B1GrammarRule[] {
    const idMapping: { [key: number]: B1GrammarRule[] } = {
        61: unit61Grammar, 62: unit62Grammar, 63: unit63Grammar, 64: unit64Grammar, 65: unit65Grammar,
        66: unit66Grammar, 67: unit67Grammar, 68: unit68Grammar, 69: unit69Grammar, 70: unit70Grammar,
        71: unit71Grammar, 72: unit72Grammar, 73: unit73Grammar, 74: unit74Grammar, 75: unit75Grammar,
        76: unit76Grammar, 77: unit77Grammar, 78: unit78Grammar, 79: unit79Grammar, 80: unit80Grammar,
        81: unit81Grammar, 82: unit82Grammar, 83: unit83Grammar, 84: unit84Grammar, 85: unit85Grammar,
        86: unit86Grammar, 87: unit87Grammar, 88: unit88Grammar, 89: unit89Grammar, 90: unit90Grammar
    };
    return idMapping[unitId] || unit61Grammar;
}
