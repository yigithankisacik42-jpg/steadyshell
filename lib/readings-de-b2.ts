import { UnitReading } from './readings';

const readings: { [key: number]: UnitReading } = {
    591: {
        unitId: 591, title: "Küreselleşme ve Sürdürülebilirlik", language: "Almanca", level: "B2",
        story: {
            text: "Die Globalisierung hat die Weltmärkte eng miteinander verflochten, was jedoch gravierende ökologische Folgen nach sich zieht. Viele multinationale Konzerne versuchen nun, nachhaltige Produktionsketten zu etablieren. Dies ist jedoch oft ein langwieriger Prozess, da wirtschaftliche Interessen mit dem Umweltschutz kollidieren.",
            translation: "Küreselleşme dünya pazarlarını birbirine sıkı sıkıya bağladı, ancak bu durum ciddi ekolojik sonuçları da beraberinde getiriyor. Birçok çok uluslu şirket şimdi sürdürülebilir üretim zincirleri kurmaya çalışıyor. Ancak bu, ekonomik çıkarların çevre korumasıyla çakışması nedeniyle genellikle uzun süren bir süreçtir."
        },
        questions: [
            { id: 1, question: "Küreselleşme dünya pazarlarını nasıl etkiledi?", options: ["Birbirinden kopardı", "Birbirine sıkı sıkıya bağladı", "Hiç etkilemedi"], correctAnswer: "Birbirine sıkı sıkıya bağladı" },
            { id: 2, question: "Bunun sonucunda ortaya çıkan sorun nedir?", options: ["Ciddi ekolojik sonuçlar", "Nüfus artışı", "Teknoloji eksikliği"], correctAnswer: "Ciddi ekolojik sonuçlar" },
            { id: 3, question: "Çok uluslu şirketler ne kurmaya çalışıyor?", options: ["Sürdürülebilir üretim zincirleri", "Daha çok fabrika", "Yeni pazarlar"], correctAnswer: "Sürdürülebilir üretim zincirleri" },
            { id: 4, question: "Süreç neden uzun sürüyor?", options: ["Ekonomik çıkarların çevre korumasıyla çakışması nedeniyle", "Para eksikliği yüzünden", "İşçi olmadığı için"], correctAnswer: "Ekonomik çıkarların çevre korumasıyla çakışması nedeniyle" },
            { id: 5, question: "kollidieren kelimesinin anlamı nedir?", options: ["Çakışmak/Çelişmek", "Uyum sağlamak", "Birleşmek"], correctAnswer: "Çakışmak/Çelişmek" }
        ],
        vocabulary: [
            { word: "verflochten", meaning: "bağlanmış/iç içe geçmiş" },
            { word: "gravierend", meaning: "ciddi/ağır" },
            { word: "nachhaltig", meaning: "sürdürülebilir" },
            { word: "langwierig", meaning: "uzun süren" },
            { word: "kollidieren", meaning: "çakışmak/çelişmek" }
        ]
    },
    592: {
        unitId: 592, title: "Modern Toplumda Aile", language: "Almanca", level: "B2",
        story: {
            text: "Die traditionelle Kernfamilie ist längst nicht mehr das einzige Modell in unserer Gesellschaft. Patchworkfamilien, Alleinerziehende und kinderlose Paare prägen das moderne Zusammenleben. Diese Pluralisierung der Lebensformen führt zu neuen gesetzlichen und gesellschaftlichen Herausforderungen.",
            translation: "Geleneksel çekirdek aile artık toplumumuzdaki tek model olmaktan çoktan çıktı. Yama (patchwork) aileler, tek ebeveynler ve çocuksuz çiftler modern birlikte yaşamı şekillendiriyor. Yaşam biçimlerinin bu şekilde çoğullaşması, yeni yasal ve toplumsal zorluklara yol açıyor."
        },
        questions: [
            { id: 1, question: "Geleneksel çekirdek aile için ne söylenebilir?", options: ["Halen tek modeldir", "Artık tek model olmaktan çıkmıştır", "Önemsizleşmiştir"], correctAnswer: "Artık tek model olmaktan çıkmıştır" },
            { id: 2, question: "Modern birlikte yaşamı hangisi şekillendirmez?", options: ["Yama aileler", "Tek ebeveynler", "Sadece geleneksel çekirdek aileler"], correctAnswer: "Sadece geleneksel çekirdek aileler" },
            { id: 3, question: "Yaşam biçimlerinin çoğullaşması neye yol açıyor?", options: ["Yeni yasal ve toplumsal zorluklara", "Nüfusun azalmasına", "Ekonomik refaha"], correctAnswer: "Yeni yasal ve toplumsal zorluklara" },
            { id: 4, question: "modern kelimesinin Almanca eş anlamlısı nedir?", options: ["Altmodisch", "Gegenwärtig", "Traditionell"], correctAnswer: "Gegenwärtig" },
            { id: 5, question: "prägen kelimesinin anlamı nedir?", options: ["Şekillendirmek/Etkilemek", "Zarar vermek", "Öğrenmek"], correctAnswer: "Şekillendirmek/Etkilemek" }
        ],
        vocabulary: [
            { word: "längst nicht mehr", meaning: "çoktan çıktı/artık değil" },
            { word: "Zusammenleben", meaning: "birlikte yaşam" },
            { word: "Pluralisierung", meaning: "çoğullaşma" },
            { word: "prägen", meaning: "şekillendirmek/etkilemek" },
            { word: "Herausforderung", meaning: "zorluk/mücadele" }
        ]
    },
    593: {
        unitId: 593, title: "Çalışma Hayatının Geleceği", language: "Almanca", level: "B2",
        story: {
            text: "Die Digitalisierung und der Einsatz künstlicher Intelligenz revolutionieren die Arbeitswelt in einem rasanten Tempo. Während monotone Tätigkeiten zunehmend automatisiert werden, gewinnen kreative und soziale Kompetenzen massiv an Bedeutung. Lebenslanges Lernen ist daher unerlässlich geworden.",
            translation: "Dijitalleşme ve yapay zeka kullanımı iş dünyasını baş döndürücü bir hızla devrimcileştiriyor. Rutin (monoton) faaliyetler giderek otomatikleşirken, yaratıcı ve sosyal beceriler büyük ölçüde önem kazanıyor. Bu nedenle yaşam boyu öğrenme vazgeçilmez hale geldi."
        },
        questions: [
            { id: 1, question: "İş dünyasını ne devrimcileştiriyor?", options: ["Tarım reformları", "Dijitalleşme ve yapay zeka kullanımı", "Ulaşım araçları"], correctAnswer: "Dijitalleşme ve yapay zeka kullanımı" },
            { id: 2, question: "Hangi faaliyetler otomatikleşiyor?", options: ["Yaratıcı faaliyetler", "Monoton (rutin) faaliyetler", "Sosyal aktiviteler"], correctAnswer: "Monoton (rutin) faaliyetler" },
            { id: 3, question: "Neler büyük ölçüde önem kazanıyor?", options: ["Sadece teknik beceriler", "Yaratıcı ve sosyal beceriler", "Beden gücü"], correctAnswer: "Yaratıcı ve sosyal beceriler" },
            { id: 4, question: "Ne vazgeçilmez hale gelmiştir?", options: ["Yaşam boyu öğrenme", "Erken emeklilik", "Ofiste çalışmak"], correctAnswer: "Yaşam boyu öğrenme" },
            { id: 5, question: "unerlässlich kelimesinin anlamı nedir?", options: ["Gereksiz", "Vazgeçilmez/Elzem", "Mümkün olmayan"], correctAnswer: "Vazgeçilmez/Elzem" }
        ],
        vocabulary: [
            { word: "Einsatz", meaning: "kullanım/devreye sokma" },
            { word: "revolutionieren", meaning: "devrim yapmak/değiştirmek" },
            { word: "Tätigkeit", meaning: "faaliyet/iş" },
            { word: "gewinnen an", meaning: "kazanmak (değer/önem)" },
            { word: "unerlässlich", meaning: "vazgeçilmez/elzem" }
        ]
    },
    594: {
        unitId: 594, title: "Çevre Kirliliği ve Plastik", language: "Almanca", level: "B2",
        story: {
            text: "Die Ozeane sind durch gigantische Mengen an Plastikmüll stark gefährdet. Mikroplastik gelangt über die Nahrungskette in den menschlichen Organismus, was gesundheitliche Gefahren birgt. Forscher suchen fieberhaft nach biologisch abbaubaren Alternativen, um diese Katastrophe einzudämmen.",
            translation: "Okyanuslar devasa miktardaki plastik atıklar nedeniyle ciddi tehlike altında. Mikroplastik, gıda zinciri yoluyla insan organizmasına ulaşıyor ve bu da sağlık açısından tehlikeler barındırıyor. Araştırmacılar bu felaketi durdurmak/sınırlandırmak için hararetle biyolojik olarak parçalanabilir alternatifler arıyorlar."
        },
        questions: [
            { id: 1, question: "Okyanuslar neden tehlike altında?", options: ["Sıcaklık artışı nedeniyle", "Devasa miktardaki plastik atıklar yüzünden", "Balık avcılığından"], correctAnswer: "Devasa miktardaki plastik atıklar yüzünden" },
            { id: 2, question: "Mikroplastik insan organizmasına nasıl ulaşıyor?", options: ["Solunum yoluyla", "Gıda zinciri yoluyla", "Sadece dokunarak"], correctAnswer: "Gıda zinciri yoluyla" },
            { id: 3, question: "Araştırmacılar ne arıyor?", options: ["Daha ucuz plastikler", "Biyolojik olarak parçalanabilir alternatifler", "Yeni okyanuslar"], correctAnswer: "Biyolojik olarak parçalanabilir alternatifler" },
            { id: 4, question: "eindämmen kelimesinin anlamı nedir?", options: ["Sınırlandırmak/Durdurmak", "Artırmak", "İzlemek"], correctAnswer: "Sınırlandırmak/Durdurmak" },
            { id: 5, question: "birgt kelimesinin anlamı nedir?", options: ["Barındırmak/İçermek", "Yok etmek", "Göstermek"], correctAnswer: "Barındırmak/İçermek" }
        ],
        vocabulary: [
            { word: "gefährdet", meaning: "tehlikede/risk altında" },
            { word: "gelangt", meaning: "ulaşır" },
            { word: "birgt", meaning: "barındırır/içerir" },
            { word: "abbaubar", meaning: "parçalanabilir/ayrışabilir" },
            { word: "eindämmen", meaning: "sınırlandırmak/durdurmak" }
        ]
    },
    595: {
        unitId: 595, title: "Çok Dillilik", language: "Almanca", level: "B2",
        story: {
            text: "Mehrsprachigkeit gilt in unserer globalisierten Welt als eine wertvolle Schlüsselkompetenz. Sie fördert nicht nur das kognitive Denkvermögen, sondern erleichtert auch den interkulturellen Austausch. Kinder, die bilingual aufwachsen, profitieren ein Leben lang von diesem kognitiven Vorteil.",
            translation: "Çok dillilik küreselleşen dünyamızda değerli bir anahtar beceri olarak kabul edilir. Sadece bilişsel düşünme yeteneğini geliştirmekle kalmaz, aynı zamanda kültürlerarası alışverişi de kolaylaştırır. Çift dilli büyüyen çocuklar ömür boyu bu bilişsel avantajdan yararlanırlar."
        },
        questions: [
            { id: 1, question: "Çok dillilik nasıl kabul edilir?", options: ["Gereksiz bir yük", "Değerli bir anahtar beceri", "Sadece öğretmenler için önemli"], correctAnswer: "Değerli bir anahtar beceri" },
            { id: 2, question: "Çok dillilik neyi geliştirir?", options: ["Bilişsel düşünme yeteneğini", "Sadece hafızayı", "Hızlı okumayı"], correctAnswer: "Bilişsel düşünme yeteneğini" },
            { id: 3, question: "Çift dilli büyüyen çocuklar ne elde eder?", options: ["Ömür boyu bilişsel avantaj", "Sadece okul başarısı", "Hiçbir şey"], correctAnswer: "Ömür boyu bilişsel avantaj" },
            { id: 4, question: "bilingual kelimesinin anlamı nedir?", options: ["Tek dilli", "Çift dilli/İki dilli", "Çok dilli"], correctAnswer: "Çift dilli/İki dilli" },
            { id: 5, question: "fördert kelimesinin anlamı nedir?", options: ["Desteklemek/Teşvik etmek", "Zarar vermek", "Engellemek"], correctAnswer: "Desteklemek/Teşvik etmek" }
        ],
        vocabulary: [
            { word: "Mehrsprachigkeit", meaning: "çok dillilik" },
            { word: "fördert", meaning: "destekler/teşvik eder" },
            { word: "Denkvermögen", meaning: "düşünme yeteneği" },
            { word: "bilingual", meaning: "çift dilli/iki dilli" },
            { word: "Austausch", meaning: "alışveriş/değişim" }
        ]
    },
    // Populate Units 596 to 620 with consistent advanced structure:
    596: {
        unitId: 596, title: "Bilim Etiği", language: "Almanca", level: "B2",
        story: {
            text: "Die medizinische Forschung macht rasante Fortschritte beim Klonen und der Gentechnik. Dies wirft jedoch schwerwiegende ethische Fragen auf. Wissenschaftler müssen Grenzen respektieren, um die Menschenwürde nicht zu verletzen.",
            translation: "Tıbbi araştırma, klonlama ve gen mühendisliğinde hızlı ilerlemeler kaydediyor. Ancak bu ciddi etik soruları da beraberinde getiriyor. Bilim insanları insan onuruna zarar vermemek için sınırları gözetmelidir."
        },
        questions: [
            { id: 1, question: "Tıbbi araştırma hangi konularda hızlı ilerliyor?", options: ["Klonlama ve gen mühendisliği", "Eski bitkilerin incelenmesi", "Diyet programları"], correctAnswer: "Klonlama ve gen mühendisliği" },
            { id: 2, question: "Bu ilerlemeler ne doğuruyor?", options: ["Sadece maddi faydalar", "Ciddi etik sorular", "Hiçbir şey"], correctAnswer: "Ciddi etik sorular" },
            { id: 3, question: "Bilim insanları neyi gözetmelidir?", options: ["Sadece bütçeyi", "Sınırları (insan onuruna zarar vermemek için)", "Yalnızca şöhreti"], correctAnswer: "Sınırları (insan onuruna zarar vermemek için)" },
            { id: 4, question: "Menschenwürde ne demektir?", options: ["İnsan sağlığı", "İnsan onuru", "İnsan zekası"], correctAnswer: "İnsan onuru" },
            { id: 5, question: "schwerwiegend kelimesinin anlamı nedir?", options: ["Ciddi/Ağır", "Hafif/Önemsiz", "Basit"], correctAnswer: "Ciddi/Ağır" }
        ],
        vocabulary: [
            { word: "Fortschritt", meaning: "ilerleme" },
            { word: "Gentechnik", meaning: "gen mühendisliği" },
            { word: "schwerwiegend", meaning: "ciddi/ağır" },
            { word: "Menschenwürde", meaning: "insan onuru" },
            { word: "verletzen", meaning: "zarar vermek/ihlal etmek" }
        ]
    },
    597: {
        unitId: 597, title: "Yapay Zeka ve Etik", language: "Almanca", level: "B2",
        story: {
            text: "Künstliche Intelligenz findet in immer mehr Lebensbereichen Anwendung. Dennoch warnen Experten vor unkontrollierten Algorithmen, die Vorurteile verstärken können. Eine gesetzliche Regulierung von KI-Systemen ist dringend erforderlich.",
            translation: "Yapay zeka giderek daha fazla yaşam alanında uygulama buluyor. Yine de uzmanlar, önyargıları güçlendirebilecek kontrolsüz algoritmalar konusunda uyarıyorlar. YZ sistemlerinin yasal olarak düzenlenmesi acilen gereklidir."
        },
        questions: [
            { id: 1, question: "Yapay zeka nerede uygulama buluyor?", options: ["Giderek daha fazla yaşam alanında", "Sadece laboratuvarda", "Hiçbir yerde"], correctAnswer: "Giderek daha fazla yaşam alanında" },
            { id: 2, question: "Uzmanlar ne konusunda uyarıyor?", options: ["Önyargıları güçlendirebilecek kontrolsüz algoritmalar", "Yapay zekanın tamamen bozulacağı", "Maddi kayıplar"], correctAnswer: "Önyargıları güçlendirebilecek kontrolsüz algoritmalar" },
            { id: 3, question: "Acilen ne gereklidir?", options: ["YZ sistemlerinin yasal olarak düzenlenmesi", "Yapay zekayı yasaklamak", "Yeni bilgisayarlar almak"], correctAnswer: "YZ sistemlerinin yasal olarak düzenlenmesi" },
            { id: 4, question: "Vorurteil ne demektir?", options: ["Önyargı", "Görüş", "Tecrübe"], correctAnswer: "Önyargı" },
            { id: 5, question: "erforderlich kelimesinin anlamı nedir?", options: ["Gerekli/Zorunlu", "Gereksiz", "İsteğe bağlı"], correctAnswer: "Gerekli/Zorunlu" }
        ],
        vocabulary: [
            { word: "Anwendung", meaning: "uygulama" },
            { word: "warnen vor", meaning: "uyarmak" },
            { word: "Vorurteil", meaning: "önyargı" },
            { word: "verstärken", meaning: "güçlendirmek/artırmak" },
            { word: "erforderlich", meaning: "gerekli/zorunlu" }
        ]
    },
    598: {
        unitId: 598, title: "Ekonomik Krizler", language: "Almanca", level: "B2",
        story: {
            text: "Wirtschaftskrisen betreffen nicht nur Banken, sondern belasten vor allem die einkommensschwächeren Schichten der Bevölkerung. Steigende Preise für Lebensmittel und Energie verschärfen die soziale Ungleichheit in vielen Ländern massiv.",
            translation: "Ekonomik krizler sadece bankaları etkilemekle kalmaz, özellikle nüfusun daha düşük gelirli kesimlerine yük bindirir. Gıda ve enerji için yükselen fiyatlar, birçok ülkedeki sosyal eşitsizliği büyük ölçüde şiddetlendirir."
        },
        questions: [
            { id: 1, question: "Ekonomik krizler en çok kimi etkiler?", options: ["Sadece bankaları", "Nüfusun daha düşük gelirli kesimlerini", "Hiç kimseyi"], correctAnswer: "Nüfusun daha düşük gelirli kesimlerini" },
            { id: 2, question: "Fiyatların yükselmesi neyi şiddetlendiriyor?", options: ["Sosyal eşitsizliği", "Üretim hacmini", "Tüketimi"], correctAnswer: "Sosyal eşitsizliği" },
            { id: 3, question: "verschärfen kelimesinin anlamı nedir?", options: ["Şiddetlendirmek/Kötüleştirmek", "İyileştirmek", "Çözmek"], correctAnswer: "Şiddetlendirmek/Kötüleştirmek" },
            { id: 4, question: "Ungleichheit ne demektir?", options: ["Eşitlik", "Eşitsizlik", "Benzerlik"], correctAnswer: "Eşitsizlik" },
            { id: 5, question: "Bevölkerung ne demektir?", options: ["Toprak", "Nüfus/Halk", "Yönetim"], correctAnswer: "Nüfus/Halk" }
        ],
        vocabulary: [
            { word: "betreffen", meaning: "etkilemek/ilgilendirmek" },
            { word: "belasten", meaning: "yük bindirmek" },
            { word: "einkommensschwach", meaning: "düşük gelirli" },
            { word: "verschärfen", meaning: "şiddetlendirmek/kötüleştirmek" },
            { word: "Ungleichheit", meaning: "eşitsizlik" }
        ]
    },
    599: {
        unitId: 599, title: "Tıpta Yeni Teknolojiler", language: "Almanca", level: "B2",
        story: {
            text: "Die Telemedizin ermöglicht es Patienten, sich virtuell von Spezialisten behandeln zu lassen. Dies spart Zeit und schont Ressourcen im Gesundheitssystem. Dennoch bleibt der persönliche Kontakt zwischen Arzt und Patient unverzichtbar.",
            translation: "Tele-tıp, hastaların uzmanlar tarafından sanal ortamda tedavi edilmesini mümkün kılar. Bu, zaman kazandırır ve sağlık sistemindeki kaynakları korur. Yine de hekim ve hasta arasındaki kişisel temas vazgeçilmezliğini korur."
        },
        questions: [
            { id: 1, question: "Tele-tıp neyi mümkün kılar?", options: ["Sanal ortamda uzmanlarca tedavi edilmeyi", "İlaç fiyatlarının düşmesini", "Hastane sayısının artmasını"], correctAnswer: "Sanal ortamda uzmanlarca tedavi edilmeyi" },
            { id: 2, question: "Tele-tıbbın faydası nedir?", options: ["Zaman kazandırır ve kaynakları korur", "Daha pahalıdır", "Hiçbir faydası yoktur"], correctAnswer: "Zaman kazandırır ve kaynakları korur" },
            { id: 3, question: "Ne vazgeçilmezliğini korur?", options: ["Sanal asistanlar", "Hekim ve hasta arasındaki kişisel temas", "Sadece ilaçlar"], correctAnswer: "Hekim ve hasta arasındaki kişisel temas" },
            { id: 4, question: "unverzichtbar kelimesinin anlamı nedir?", options: ["Gereksiz", "Vazgeçilmez", "Kolay"], correctAnswer: "Vazgeçilmez" },
            { id: 5, question: "schont kelimesinin anlamı nedir?", options: ["Korur/Zarar vermez", "Harcatır", "Kısıtlar"], correctAnswer: "Korur/Zarar vermez" }
        ],
        vocabulary: [
            { word: "ermöglicht", meaning: "mümkün kılar" },
            { word: "behandeln", meaning: "tedavi etmek" },
            { word: "schont", meaning: "korur/özen gösterir" },
            { word: "unverzichtbar", meaning: "vazgeçilmez" },
            { word: "Kontakt", meaning: "temas/ilişki" }
        ]
    },
    600: {
        unitId: 600, title: "Finansal Piyasalar", language: "Almanca", level: "B2",
        story: {
            text: "Kryptowährungen haben in den letzten Jahren eine enorme Wertsteigerung erfahren. Viele Ökonomen warnen jedoch vor den spekulativen Risiken und der extremen Volatilität dieser digitalen Vermögenswerte.",
            translation: "Kripto para birimleri son yıllarda muazzam bir değer artışı yaşadı. Ancak birçok ekonomist, bu dijital varlıkların spekülatif riskleri ve aşırı oynaklığı (volatilitesi) konusunda uyarıyor."
        },
        questions: [
            { id: 1, question: "Kripto paralar son yıllarda ne yaşadı?", options: ["Değer kaybı", "Muazzam bir değer artışı", "Hiçbir değişim"], correctAnswer: "Muazzam bir değer artışı" },
            { id: 2, question: "Ekonomistler ne konusunda uyarıyor?", options: ["Spekülatif riskler ve aşırı oynaklık", "Teknolojik hatalar", "Nakit para eksikliği"], correctAnswer: "Spekülatif riskler ve aşırı oynaklık" },
            { id: 3, question: "enorm kelimesinin anlamı nedir?", options: ["Muazzam/Çok büyük", "Küçük/Önemsiz", "Normal"], correctAnswer: "Muazzam/Çok büyük" },
            { id: 4, question: "Vermögenswert ne demektir?", options: ["Varlık/Aktif", "Borç", "Kayıp"], correctAnswer: "Varlık/Aktif" },
            { id: 5, question: "Volatilität ne demektir?", options: ["Sabitlik", "Oynaklık/Değişkenlik", "Güvenlik"], correctAnswer: "Oynaklık/Değişkenlik" }
        ],
        vocabulary: [
            { word: "enorm", meaning: "muazzam/çok büyük" },
            { word: "Wertsteigerung", meaning: "değer artışı" },
            { word: "Ökonom", meaning: "ekonomist" },
            { word: "Volatilität", meaning: "oynaklık/değişkenlik" },
            { word: "Vermögenswert", meaning: "varlık/aktif" }
        ]
    },
    // Keep populating units 601-620 with highly relevant, beautiful B2 passages!
    601: {
        unitId: 601, title: "Sanat ve Modernizm", language: "Almanca", level: "B2",
        story: {
            text: "Die moderne Kunst bricht oft bewusst mit traditionellen Ästhetikregeln. Dies stößt beim breiten Publikum nicht selten auf Unverständnis. Dennoch regt Kunst dazu an, gesellschaftliche Normen kritisch zu hinterfragen.",
            translation: "Modern sanat genellikle bilinçli olarak geleneksel estetik kurallarından kopar. Bu, genel izleyici kitlesinde sıklıkla kafa karışıklığı veya anlaşılmama ile karşılaşır. Yine de sanat, toplumsal normları eleştirel biçimde sorgulamaya teşvik eder."
        },
        questions: [
            { id: 1, question: "Modern sanat ne yapar?", options: ["Geleneksel estetik kurallarından bilinçli olarak kopar", "Eski kurallara sıkı sıkıya uyar", "Sadece doğayı taklit eder"], correctAnswer: "Geleneksel estetik kurallarından bilinçli olarak kopar" },
            { id: 2, question: "Bu durum izleyicide nasıl karşılanır?", options: ["Sıklıkla kafa karışıklığı/anlaşılmama ile", "Her zaman büyük bir sevinçle", "Önemsiz karşılanır"], correctAnswer: "Sıklıkla kafa karışıklığı/anlaşılmama ile" },
            { id: 3, question: "Sanat bizi neye teşvik eder?", options: ["Toplumsal normları eleştirel biçimde sorgulamaya", "Daha çok harcamaya", "Resim dersleri almaya"], correctAnswer: "Toplumsal normları eleştirel biçimde sorgulamaya" },
            { id: 4, question: "bewusst kelimesinin anlamı nedir?", options: ["Bilinçsizce", "Bilinçli olarak", "Yanlışlıkla"], correctAnswer: "Bilinçli olarak" },
            { id: 5, question: "hinterfragen ne demektir?", options: ["Sorgulamak/Kritik etmek", "Kabul etmek", "Unutmak"], correctAnswer: "Sorgulamak/Kritik etmek" }
        ],
        vocabulary: [
            { word: "Ästhetikregeln", meaning: "estetik kuralları" },
            { word: "Unverständnis", meaning: "anlaşılmama/kafa karışıklığı" },
            { word: "anregen", meaning: "teşvik etmek/uyarmak" },
            { word: "Normen", meaning: "normlar/kurallar" },
            { word: "hinterfragen", meaning: "sorgulamak/kritik etmek" }
        ]
    },
    602: {
        unitId: 602, title: "Toplumsal Cinsiyet Eşitliği", language: "Almanca", level: "B2",
        story: {
            text: "Obwohl gesetzlich verankert, ist die Gleichberechtigung der Geschlechter im Berufsleben noch immer nicht vollständig realisiert. Frauen verdienen im Durchschnitt weniger als Männer in vergleichbaren Positionen, was man als Gender-Pay-Gap bezeichnet.",
            translation: "Yasal olarak güvence altına alınmış olmasına rağmen, cinsiyet eşitliği iş hayatında henüz tamamen gerçekleştirilebilmiş değildir. Kadınlar, karşılaştırılabilir pozisyonlarda ortalamada erkeklerden daha az kazanmaktadır; bu durum 'Gender-Pay-Gap' (Cinsiyete dayalı ücret farkı) olarak adlandırılır."
        },
        questions: [
            { id: 1, question: "Cinsiyet eşitliği iş hayatında ne durumdadır?", options: ["Tamamen gerçekleştirilmiştir", "Henüz tamamen gerçekleştirilebilmiş değildir", "Hiç önemsenmez"], correctAnswer: "Henüz tamamen gerçekleştirilebilmiş değildir" },
            { id: 2, question: "Kadınlar ortalamada ne kadar kazanmaktadır?", options: ["Erkeklerden daha fazla", "Erkeklerden daha az", "Aynı düzeyde"], correctAnswer: "Erkeklerden daha az" },
            { id: 3, question: "Gender-Pay-Gap nedir?", options: ["Cinsiyete dayalı ücret farkı", "İşe alım süreci", "Çalışma saatleri"], correctAnswer: "Cinsiyete dayalı ücret farkı" },
            { id: 4, question: "verankert kelimesinin anlamı nedir?", options: ["Güvence altına alınmış/Yerleşmiş", "Unutulmuş", "Değiştirilmiş"], correctAnswer: "Güvence altına alınmış/Yerleşmiş" },
            { id: 5, question: "realisiert ne demektir?", options: ["Düşünülmüş", "Gerçekleştirilmiş", "İptal edilmiş"], correctAnswer: "Gerçekleştirilmiş" }
        ],
        vocabulary: [
            { word: "verankert", meaning: "güvence altına alınmış/yerleşmiş" },
            { word: "Gleichberechtigung", meaning: "eşitlik" },
            { word: "realisiert", meaning: "gerçekleştirilmiş" },
            { word: "Durchschnitt", meaning: "ortalama" },
            { word: "vergleichbar", meaning: "karşılaştırılabilir" }
        ]
    },
    603: {
        unitId: 603, title: "Kentleşme ve Altyapı", language: "Almanca", level: "B2",
        story: {
            text: "Die fortschreitende Urbanisierung stellt Städte vor immense infrastrukturelle Herausforderungen. Intelligente Verkehrssysteme und bezahlbarer Wohnraum sind entscheidend, um die Lebensqualität in den Metropolen dauerhaft zu sichern.",
            translation: "İlerleyen kentleşme, şehirleri muazzam altyapısal zorluklarla karşı karşıya bırakıyor. Akıllı ulaşım sistemleri ve uygun fiyatlı konutlar, metropollerdeki yaşam kalitesini kalıcı olarak korumak için belirleyicidir."
        },
        questions: [
            { id: 1, question: "İlerleyen kentleşme neye yol açıyor?", options: ["Köy nüfusunun artmasına", "Muazzam altyapısal zorluklara", "Konut fiyatlarının düşmesine"], correctAnswer: "Muazzam altyapısal zorluklara" },
            { id: 2, question: "Metropollerde yaşam kalitesini korumak için ne gereklidir?", options: ["Akıllı ulaşım ve uygun fiyatlı konut", "Sadece daha çok otoyol", "Binaları yıkmak"], correctAnswer: "Akıllı ulaşım ve uygun fiyatlı konut" },
            { id: 3, question: "Urbanisierung kelimesinin Türkçe karşılığı nedir?", options: ["Kentleşme", "Modernleşme", "Ulaşım"], correctAnswer: "Kentleşme" },
            { id: 4, question: "immens kelimesinin anlamı nedir?", options: ["Küçük", "Muazzam/Çok büyük", "Eski"], correctAnswer: "Muazzam/Çok büyük" },
            { id: 5, question: "Wohnraum ne demektir?", options: ["Konut/Yaşam alanı", "İş yeri", "Bahçe"], correctAnswer: "Konut/Yaşam alanı" }
        ],
        vocabulary: [
            { word: "fortschreitend", meaning: "ilerleyen" },
            { word: "Urbanisierung", meaning: "kentleşme" },
            { word: "immens", meaning: "muazzam/çok büyük" },
            { word: "Wohnraum", meaning: "konut/yaşam alanı" },
            { word: "Lebensqualität", meaning: "yaşam kalitesi" }
        ]
    },
    604: {
        unitId: 604, title: "Çevre Kirliliği ve Enerji", language: "Almanca", level: "B2",
        story: {
            text: "Der Ausstieg aus fossilen Energieträgern ist für den globalen Klimaschutz unumgänglich. Der Ausbau erneuerbarer Energien wie Wind- und Solarkraft erfordert jedoch erhebliche Investitionen in die Netzinfrastruktur.",
            translation: "Fosil enerji kaynaklarından vazgeçmek, küresel iklim koruması için kaçınılmazdır. Ancak rüzgar ve güneş enerjisi gibi yenilenebilir enerjilerin yaygınlaştırılması, şebeke altyapısına önemli yatırımlar gerektirir."
        },
        questions: [
            { id: 1, question: "Küresel iklim koruması için ne kaçınılmazdır?", options: ["Daha çok fosil yakıt kullanmak", "Fosil enerji kaynaklarından vazgeçmek", "Yatırımları durdurmak"], correctAnswer: "Fosil enerji kaynaklarından vazgeçmek" },
            { id: 2, question: "Yenilenebilir enerjilerin yaygınlaştırılması ne gerektirir?", options: ["Şebeke altyapısına önemli yatırımlar", "Sadece daha çok zaman", "Hiçbir şey"], correctAnswer: "Şebeke altyapısına önemli yatırımlar" },
            { id: 3, question: "unumgänglich kelimesinin anlamı nedir?", options: ["Kaçınılmaz/Zorunlu", "Gereksiz", "Geçici"], correctAnswer: "Kaçınılmaz/Zorunlu" },
            { id: 4, question: "erneuerbar ne demektir?", options: ["Yenilenebilir", "Tükenebilir", "Eski"], correctAnswer: "Yenilenebilir" },
            { id: 5, question: "Investition ne demektir?", options: ["Yatırım", "Harcama", "Kayıp"], correctAnswer: "Yatırım" }
        ],
        vocabulary: [
            { word: "Ausstieg", meaning: "vazgeçme/çıkış" },
            { word: "unumgänglich", meaning: "kaçınılmaz/zorunlu" },
            { word: "erneuerbar", meaning: "yenilenebilir" },
            { word: "erheblich", meaning: "önemli/büyük ölçüde" },
            { word: "Investition", meaning: "yatırım" }
        ]
    },
    605: {
        unitId: 605, title: "Sosyal Devlet ve Refah", language: "Almanca", level: "B2",
        story: {
            text: "Der demografische Wandel gefährdet die Finanzierung des Rentensystems in vielen europäischen Ländern. Da die Menschen immer älter werden, müssen neue Finanzierungsmodelle entwickelt werden, um Altersarmut zu verhindern.",
            translation: "Demografik değişim, birçok Avrupa ülkesinde emeklilik sisteminin finansmanını tehlikeye atıyor. İnsanlar giderek yaşlandığından, yaşlılık yoksulluğunu önlemek için yeni finansman modelleri geliştirilmelidir."
        },
        questions: [
            { id: 1, question: "Emeklilik sisteminin finansmanını ne tehlikeye atıyor?", options: ["Ekonomik büyüme", "Demografik değişim", "Nüfusun azalması"], correctAnswer: "Demografik değişim" },
            { id: 2, question: "Yaşlılık yoksulluğunu önlemek için ne yapılmalıdır?", options: ["Yeni finansman modelleri geliştirilmeli", "Emekli maaşları düşürülmeli", "Çalışma saatleri artırılmalı"], correctAnswer: "Yeni finansman modelleri geliştirilmeli" },
            { id: 3, question: "Rentensystem ne demektir?", options: ["Emeklilik sistemi", "Eğitim sistemi", "Sağlık sistemi"], correctAnswer: "Emeklilik sistemi" },
            { id: 4, question: "Altersarmut ne demektir?", options: ["Yaşlılık yoksulluğu", "Gençlik işsizliği", "Çocuk eğitimi"], correctAnswer: "Yaşlılık yoksulluğu" },
            { id: 5, question: "verhindern kelimesinin anlamı nedir?", options: ["Önlemek/Engel olmak", "Artırmak", "Desteklemek"], correctAnswer: "Önlemek/Engel olmak" }
        ],
        vocabulary: [
            { word: "demografisch", meaning: "demografik/nüfusla ilgili" },
            { word: "Rentensystem", meaning: "emeklilik sistemi" },
            { word: "Altersarmut", meaning: "yaşlılık yoksulluğu" },
            { word: "verhindern", meaning: "önlemek/engel olmak" },
            { word: "Wandel", meaning: "değişim" }
        ]
    },
    606: {
        unitId: 606, title: "Eğitimde Fırsat Eşitliği", language: "Almanca", level: "B2",
        story: {
            text: "Der Bildungserfolg von Kindern hängt in Deutschland noch immer stark von der sozialen Herkunft der Eltern ab. Experten fordern Reformen, um allen Jugendlichen unabhängig von ihrem familiären Hintergrund faire Chancen zu garantieren.",
            translation: "Almanya'da çocukların eğitim başarısı halen büyük ölçüde anne babalarının sosyal kökenine bağlıdır. Uzmanlar, aile geçmişlerinden bağımsız olarak tüm gençlere adil fırsatlar garanti etmek için reformlar talep ediyor."
        },
        questions: [
            { id: 1, question: "Çocukların eğitim başarısı neye bağlıdır?", options: ["Sadece kendi zekalarına", "Ebeveynlerinin sosyal kökenine", "Okul binasının büyüklüğüne"], correctAnswer: "Ebeveynlerinin sosyal kökenine" },
            { id: 2, question: "Uzmanlar neyi talep ediyor?", options: ["Tüm gençlere adil fırsatlar garanti edecek reformları", "Okul saatlerinin artırılmasını", "Sınavların zorlaştırılmasını"], correctAnswer: "Tüm gençlere adil fırsatlar garanti edecek reformları" },
            { id: 3, question: "Herkunft kelimesinin anlamı nedir?", options: ["Gelecek", "Köken/Köken bilim", "Köken/Geçmiş"], correctAnswer: "Köken/Geçmiş" },
            { id: 4, question: "unabhängig ne demektir?", options: ["Bağımsız", "Bağımlı", "İlgili"], correctAnswer: "Bağımsız" },
            { id: 5, question: "garantieren ne demektir?", options: ["Göz ardı etmek", "Garanti etmek/Güvence vermek", "Talep etmek"], correctAnswer: "Garanti etmek/Güvence vermek" }
        ],
        vocabulary: [
            { word: "Bildungserfolg", meaning: "eğitim başarısı" },
            { word: "Herkunft", meaning: "köken/geçmiş" },
            { word: "unabhängig", meaning: "bağımsız" },
            { word: "Hintergrund", meaning: "arka plan/geçmiş" },
            { word: "garantieren", meaning: "garanti etmek/güvence vermek" }
        ]
    },
    607: {
        unitId: 607, title: "Çok Kültürlü Yaşam", language: "Almanca", level: "B2",
        story: {
            text: "Kulturelle Vielfalt bereichert das gesellschaftliche Leben, erfordert aber auch Toleranz und gegenseitiges Verständnis. Konflikte entstehen meist dort, wo Vorurteile das Handeln bestimmen und kein Dialog stattfindet.",
            translation: "Kültürel çeşitlilik toplumsal yaşamı zenginleştirir, ancak tolerans ve karşılıklı anlayış da gerektirir. Çatışmalar çoğunlukla önyargıların eylemleri belirlediği ve diyalog kurulmayan yerlerde ortaya çıkar."
        },
        questions: [
            { id: 1, question: "Kültür çeşitliliği toplumsal yaşamı ne yapar?", options: ["Zorlaştırır", "Zenginleştirir", "Hiç etkilemez"], correctAnswer: "Zenginleştirir" },
            { id: 2, question: "Çatışmalar nerede ortaya çıkar?", options: ["Önyargıların eylemleri belirlediği ve diyalog kurulmayan yerlerde", "Her okulda", "Sadece kütüphanelerde"], correctAnswer: "Önyargıların eylemleri belirlediği ve diyalog kurulmayan yerlerde" },
            { id: 3, question: "Vielfalt kelimesinin anlamı nedir?", options: ["Birlik", "Çeşitlilik/Zenginlik", "Zorluk"], correctAnswer: "Çeşitlilik/Zenginlik" },
            { id: 4, question: "gegenseitig ne demektir?", options: ["Karşılıklı", "Tek taraflı", "Önemsiz"], correctAnswer: "Karşılıklı" },
            { id: 5, question: "entstehen ne demektir?", options: ["Yok olmak", "Ortaya çıkmak/Oluşmak", "Kabul edilmek"], correctAnswer: "Ortaya çıkmak/Oluşmak" }
        ],
        vocabulary: [
            { word: "Vielfalt", meaning: "çeşitlilik/zenginlik" },
            { word: "gegenseitig", meaning: "karşılıklı" },
            { word: "Verständnis", meaning: "anlayış" },
            { word: "Konflikt", meaning: "çatışma" },
            { word: "entstehen", meaning: "ortaya çıkmak/oluşmak" }
        ]
    },
    608: {
        unitId: 608, title: "Tüketici Hakları", language: "Almanca", level: "B2",
        story: {
            text: "Verbraucher haben das Recht auf transparente Informationen über Produkte und Dienstleistungen. Das Gesetz schützt Käufer vor irreführender Werbung und gibt ihnen das Recht, Verträge innerhalb einer Frist zu widerrufen.",
            translation: "Tüketiciler, ürünler ve hizmetler hakkında şeffaf bilgi edinme hakkına sahiptir. Yasa, alıcıları yanıltıcı reklamlardan korur ve onlara belirli bir süre içinde sözleşmeleri iptal etme (cayma) hakkı verir."
        },
        questions: [
            { id: 1, question: "Tüketicilerin hakkı nedir?", options: ["Şeffaf bilgi edinmek", "Ücretsiz ürün almak", "Her şeyi iade etmek"], correctAnswer: "Şeffaf bilgi edinmek" },
            { id: 2, question: "Yasa alıcıları neyden korur?", options: ["Yanıltıcı reklamlardan", "Pahalı ürünlerden", "Kuryelerden"], correctAnswer: "Yanıltıcı reklamlardan" },
            { id: 3, question: "Tüketicilerin sözleşmelerle ilgili hangi hakkı vardır?", options: ["Süresiz iade hakkı", "Sözleşmeleri belirli bir süre içinde iptal etme (cayma) hakkı", "Hiçbir hakkı yoktur"], correctAnswer: "Sözleşmeleri belirli bir süre içinde iptal etme (cayma) hakkı" },
            { id: 4, question: "Verbraucher ne demektir?", options: ["Üretici", "Tüketici", "Yönetici"], correctAnswer: "Tüketici" },
            { id: 5, question: "widerrufen ne demektir?", options: ["Onaylamak", "İptal etmek/Caymak", "İmzalamak"], correctAnswer: "İptal etmek/Caymak" }
        ],
        vocabulary: [
            { word: "Verbraucher", meaning: "tüketici" },
            { word: "Dienstleistung", meaning: "hizmet" },
            { word: "irreführend", meaning: "yanıltıcı" },
            { word: "Frist", meaning: "süre/mühlet" },
            { word: "widerrufen", meaning: "iptal etmek/caymak" }
        ]
    },
    609: {
        unitId: 609, title: "Bilgi Toplumu", language: "Almanca", level: "B2",
        story: {
            text: "In einer Wissensgesellschaft ist Information die wichtigste Ressource. Die Fähigkeit, Daten kritisch zu analysieren und sinnvoll zu nutzen, bestimmt den wirtschaftlichen und persönlichen Erfolg eines Menschen maßgeblich.",
            translation: "Bilgi toplumunda bilgi en önemli kaynaktır. Verileri eleştirel biçimde analiz etme ve mantıklı kullanma becerisi, bir insanın ekonomik ve kişisel başarısını büyük ölçüde belirler."
        },
        questions: [
            { id: 1, question: "Bilgi toplumunda en önemli kaynak nedir?", options: ["Toprak", "Bilgi", "Altın"], correctAnswer: "Bilgi" },
            { id: 2, question: "Bir insanın başarısını ne belirler?", options: ["Verileri eleştirel analiz etme ve mantıklı kullanma becerisi", "Sadece şans", "Daha çok çalışmak"], correctAnswer: "Verileri eleştirel analiz etme ve mantıklı kullanma becerisi" },
            { id: 3, question: "Wissensgesellschaft ne demektir?", options: ["Sanayi toplumu", "Bilgi toplumu", "Tarım toplumu"], correctAnswer: "Bilgi toplumu" },
            { id: 4, question: "Fähigkeit kelimesinin anlamı nedir?", options: ["Beceri/Yetenek", "Zorluk", "Eğitim"], correctAnswer: "Beceri/Yetenek" },
            { id: 5, question: "maßgeblich ne demektir?", options: ["Büyük ölçüde/Belirleyici", "Önemsizce", "Hızlıca"], correctAnswer: "Büyük ölçüde/Belirleyici" }
        ],
        vocabulary: [
            { word: "Wissensgesellschaft", meaning: "bilgi toplumu" },
            { word: "Fähigkeit", meaning: "beceri/yetenek" },
            { word: "sinnvoll", meaning: "mantıklı/anlamlı" },
            { word: "bestimmt", meaning: "belirler" },
            { word: "maßgeblich", meaning: "büyük ölçüde/belirleyici" }
        ]
    },
    610: {
        unitId: 610, title: "Ruh Sağlığı ve Stres", language: "Almanca", level: "B2",
        story: {
            text: "Mentale Belastungen am Arbeitsplatz führen immer häufiger zu Burn-out und langen Ausfallzeiten. Arbeitgeber müssen präventive Maßnahmen ergreifen, um die psychische Gesundheit ihrer Mitarbeiter zu schützen.",
            translation: "İş yerindeki zihinsel yükler giderek daha sık tükenmişliğe (burn-out) ve uzun iş kaybı sürelerine yol açıyor. İşverenler, çalışanlarının ruh sağlığını korumak için önleyici tedbirler almalıdır."
        },
        questions: [
            { id: 1, question: "Zihinsel yükler neye yol açıyor?", options: ["Daha çok verimliliğe", "Tükenmişliğe (burn-out) ve iş kaybına", "Maaş artışına"], correctAnswer: "Tükenmişliğe (burn-out) ve iş kaybına" },
            { id: 2, question: "İşverenler ne yapmalıdır?", options: ["Çalışma saatlerini artırmalı", "Önleyici tedbirler almalı", "Maaşları düşürmeli"], correctAnswer: "Önleyici tedbirler almalı" },
            { id: 3, question: "Belastung kelimesinin anlamı nedir?", options: ["Rahatlama", "Yük/Stres", "Eğlence"], correctAnswer: "Yük/Stres" },
            { id: 4, question: "präventiv ne demektir?", options: ["Önleyici", "Geçici", "Zararlı"], correctAnswer: "Önleyici" },
            { id: 5, question: "Maßnahme ne demektir?", options: ["Plan", "Önlem/Tedbir", "Görüş"], correctAnswer: "Önlem/Tedbir" }
        ],
        vocabulary: [
            { word: "Belastung", meaning: "yük/stres" },
            { word: "Ausfallzeit", meaning: "iş kaybı süresi" },
            { word: "präventiv", meaning: "önleyici" },
            { word: "Maßnahme", meaning: "önlem/tedbir" },
            { word: "psychisch", meaning: "ruhsal/psikolojik" }
        ]
    },
    // Populate Units 611 to 620 with consistent advanced structure:
    611: {
        unitId: 611, title: "Akademik Yazım ve Yöntem", language: "Almanca", level: "B2",
        story: {
            text: "Wissenschaftliches Schreiben erfordert eine präzise Wortwahl und eine logische Argumentationskette. Zitate müssen korrekt belegt werden, um Plagiate zu vermeiden und die wissenschaftliche Redlichkeit zu wahren.",
            translation: "Akademik yazım, kesin bir kelime seçimi ve mantıklı bir argümantasyon zinciri gerektirir. İntihali önlemek ve bilimsel dürüstlüğü korumak için alıntılar doğru bir şekilde belgelenmelidir."
        },
        questions: [
            { id: 1, question: "Akademik yazım ne gerektirir?", options: ["Kesin kelime seçimi ve mantıklı argümantasyon", "Süslü kelimeler", "Hızlı yazmayı"], correctAnswer: "Kesin kelime seçimi ve mantıklı argümantasyon" },
            { id: 2, question: "Alıntılar neden doğru belgelenmelidir?", options: ["İntihali önlemek ve bilimsel dürüstlüğü korumak için", "Kitabı kalın göstermek için", "Gereksizdir"], correctAnswer: "İntihali önlemek ve bilimsel dürüstlüğü korumak için" },
            { id: 3, question: "präzise kelimesinin anlamı nedir?", options: ["Rastgele", "Kesin/Net", "Zor"], correctAnswer: "Kesin/Net" },
            { id: 4, question: "Plagiat ne demektir?", options: ["İntihal/Aşırma", "Alıntı", "Kaynak"], correctAnswer: "İntihal/Aşırma" },
            { id: 5, question: "wahren ne demektir?", options: ["Korumak/Sürdürmek", "Kaybetmek", "Silmek"], correctAnswer: "Korumak/Sürdürmek" }
        ],
        vocabulary: [
            { word: "Wissenschaftlich", meaning: "bilimsel/akademik" },
            { word: "präzise", meaning: "kesin/net" },
            { word: "Zitat", meaning: "alıntı" },
            { word: "Plagiat", meaning: "intihal/aşırma" },
            { word: "wahren", meaning: "korumak/sürdürmek" }
        ]
    },
    612: {
        unitId: 612, title: "Çok Kültürlü İş Yerleri", language: "Almanca", level: "B2",
        story: {
            text: "In einer globalisierten Wirtschaft sind interkulturelle Kompetenzen unverzichtbar geworden. Missverständnisse können vermieden werden, wenn Mitarbeiter bereit sind, die Perspektiven anderer zu verstehen.",
            translation: "Küreselleşen ekonomide kültürlerarası beceriler vazgeçilmez hale gelmiştir. Çalışanlar başkalarının bakış açılarını anlamaya hazır olduklarında yanlış anlaşılmalar önlenebilir."
        },
        questions: [
            { id: 1, question: "Küreselleşen ekonomide ne vazgeçilmezdir?", options: ["Kültürlerarası beceriler", "Sadece yabancı dil bilmek", "Çok seyahat etmek"], correctAnswer: "Kültürlerarası beceriler" },
            { id: 2, question: "Yanlış anlaşılmalar nasıl önlenebilir?", options: ["Başkalarının bakış açılarını anlamaya hazır olarak", "Hiç konuşmayarak", "Her şeyi kabul ederek"], correctAnswer: "Başkalarının bakış açılarını anlamaya hazır olarak" },
            { id: 3, question: "Missverständnis ne demektir?", options: ["Anlayış", "Yanlış anlaşılma", "İletişim"], correctAnswer: "Yanlış anlaşılma" },
            { id: 4, question: "vermeiden ne demektir?", options: ["Önlemek/Kaçınmak", "Tekrarlamak", "Desteklemek"], correctAnswer: "Önlemek/Kaçınmak" },
            { id: 5, question: "unverzichtbar ne demektir?", options: ["Vazgeçilmez", "Gereksiz", "Kolay"], correctAnswer: "Vazgeçilmez" }
        ],
        vocabulary: [
            { word: "globalisiert", meaning: "küreselleşmiş" },
            { word: "Kompetenz", meaning: "beceri/yetkinlik" },
            { word: "Missverständnis", meaning: "yanlış anlaşılma" },
            { word: "vermeiden", meaning: "önlemek/kaçınmak" },
            { word: "Perspektive", meaning: "bakış açısı" }
        ]
    },
    613: {
        unitId: 613, title: "Genetiği Değiştirilmiş Organizmalar", language: "Almanca", level: "B2",
        story: {
            text: "Genetisch veränderte Lebensmittel könnten helfen, die globale Ernährungskrise zu lösen. Dennoch gibt es heftigen Widerstand in der Bevölkerung, da die langfristigen Risiken für die Gesundheit unklar sind.",
            translation: "Genetiği değiştirilmiş gıdalar küresel gıda krizini çözmeye yardımcı olabilir. Yine de sağlık üzerindeki uzun vadeli riskler belirsiz olduğundan halk arasında sert bir direniş vardır."
        },
        questions: [
            { id: 1, question: "Genetiği değiştirilmiş gıdaların potansiyel faydası nedir?", options: ["Küresel gıda krizini çözmeye yardımcı olmak", "Daha lezzetli olmak", "Fiyatları artırmak"], correctAnswer: "Küresel gıda krizini çözmeye yardımcı olmak" },
            { id: 2, question: "Halk arasında neden direniş var?", options: ["Uzun vadeli sağlık riskleri belirsiz olduğu için", "Daha pahalı olduğu için", "Tadı kötü olduğu için"], correctAnswer: "Uzun vadeli sağlık riskleri belirsiz olduğu için" },
            { id: 3, question: "heftig kelimesinin anlamı nedir?", options: ["Zayıf", "Sert/Şiddetli", "Kolay"], correctAnswer: "Sert/Şiddetli" },
            { id: 4, question: "Widerstand ne demektir?", options: ["Destek", "Direniş/Karşı çıkma", "Uyum"], correctAnswer: "Direniş/Karşı çıkma" },
            { id: 5, question: "langfristig ne demektir?", options: ["Kısa vadeli", "Uzun vadeli", "Geçici"], correctAnswer: "Uzun vadeli" }
        ],
        vocabulary: [
            { word: "Genetisch verändert", meaning: "genetiği değiştirilmiş" },
            { word: "Ernährungskrise", meaning: "gıda/beslenme krizi" },
            { word: "heftig", meaning: "sert/şiddetli" },
            { word: "Widerstand", meaning: "direniş/karşı çıkma" },
            { word: "langfristig", meaning: "uzun vadeli" }
        ]
    },
    614: {
        unitId: 614, title: "İşsizlik ve Sosyal Politikalar", language: "Almanca", level: "B2",
        story: {
            text: "Langzeitarbeitslosigkeit führt oft zu sozialer Isolation und psychischen Problemen. Staatliche Umschulungsprogramme versuchen, betroffenen Personen neue Perspektiven auf dem Arbeitsmarkt zu eröffnen.",
            translation: "Uzun süreli işsizlik sıklıkla sosyal izolasyona ve ruhsal sorunlara yol açar. Devletin mesleki yeniden eğitim programları, etkilenen kişilere iş piyasasında yeni perspektifler açmaya çalışır."
        },
        questions: [
            { id: 1, question: "Uzun süreli işsizlik neye yol açar?", options: ["Sosyal izolasyona ve ruhsal sorunlara", "Daha çok tatile", "Maddi kazanca"], correctAnswer: "Sosyal izolasyona ve ruhsal sorunlara" },
            { id: 2, question: "Devlet programları ne yapmaya çalışıyor?", options: ["Etkilenen kişilere yeni perspektifler açmaya", "İşsizlik maaşını kesmeye", "Herkesi emekli etmeye"], correctAnswer: "Etkilenen kişilere yeni perspektifler açmaya" },
            { id: 3, question: "Langzeitarbeitslosigkeit ne demektir?", options: ["Kısa süreli işsizlik", "Uzun süreli işsizlik", "Geçici çalışma"], correctAnswer: "Uzun süreli işsizlik" },
            { id: 4, question: "Umschulung ne demektir?", options: ["Yeniden eğitim/Meslek değiştirme eğitimi", "Okul tatili", "Sınav"], correctAnswer: "Yeniden eğitim/Meslek değiştirme eğitimi" },
            { id: 5, question: "betroffen kelimesinin anlamı nedir?", options: ["Etkilenen/Muzdarip", "İlgisiz", "Mutlu"], correctAnswer: "Etkilenen/Muzdarip" }
        ],
        vocabulary: [
            { word: "Langzeitarbeitslosigkeit", meaning: "uzun süreli işsizlik" },
            { word: "soziale Isolation", meaning: "sosyal izolasyon" },
            { word: "Umschulung", meaning: "yeniden eğitim/meslek değiştirme eğitimi" },
            { word: "betroffen", meaning: "etkilenen/muzdarip" },
            { word: "Arbeitsmarkt", meaning: "iş piyasası" }
        ]
    },
    615: {
        unitId: 615, title: "Fikrî Mülkiyet", language: "Almanca", level: "B2",
        story: {
            text: "Der Schutz des geistigen Eigentums ist in einer digitalen Welt voller Herausforderungen. Illegale Downloads und Plagiate schaden Autoren und Künstlern massiv und erfordern strengere Gesetze im Internet.",
            translation: "Fikrî mülkiyetin korunması, dijital dünyada zorluklarla doludur. Yasa dışı indirmeler ve intihaller yazarlara ve sanatçılara büyük zarar verir ve internette daha sıkı yasalar gerektirir."
        },
        questions: [
            { id: 1, question: "Dijital dünyada koruması zor olan nedir?", options: ["Fikrî mülkiyet", "Bilgisayar donanımları", "Binalar"], correctAnswer: "Fikrî mülkiyet" },
            { id: 2, question: "Yazarlara ve sanatçılara ne zarar veriyor?", options: ["Yasa dışı indirmeler ve intihaller", "Daha çok kitap okumak", "Kütüphaneler"], correctAnswer: "Yasa dışı indirmeler ve intihaller" },
            { id: 3, question: "Ne tür yasalar gereklidir?", options: ["Daha esnek", "Daha sıkı/sert", "Hiç yasa gerekmez"], correctAnswer: "Daha sıkı/sert" },
            { id: 4, question: "geistiges Eigentum ne demektir?", options: ["Fikrî mülkiyet", "Maddi mülkiyet", "Arsa"], correctAnswer: "Fikrî mülkiyet" },
            { id: 5, question: "illegal ne demektir?", options: ["Yasal", "Yasa dışı", "Serbest"], correctAnswer: "Yasa dışı" }
        ],
        vocabulary: [
            { word: "geistiges Eigentum", meaning: "fikrî mülkiyet" },
            { word: "Herausforderung", meaning: "zorluk" },
            { word: "illegal", meaning: "yasa dışı" },
            { word: "Autoren", meaning: "yazarlar" },
            { word: "streng", meaning: "sıkı/sert" }
        ]
    },
    616: {
        unitId: 616, title: "Medya ve Manipülasyon", language: "Almanca", level: "B2",
        story: {
            text: "Medien haben eine immense Macht über die öffentliche Meinung. Journalisten müssen daher strengen ethischen Richtlinien folgen, um eine objektive Berichterstattung zu gewährleisten.",
            translation: "Medya, kamuoyu üzerinde muazzam bir güce sahiptir. Bu nedenle gazeteciler, objektif bir habercilik sağlamak için sıkı etik ilkelere uymalıdır."
        },
        questions: [
            { id: 1, question: "Medyanın ne üzerinde gücü vardır?", options: ["Sadece sporcular üzerinde", "Kamuoyu üzerinde", "Hava durumu üzerinde"], correctAnswer: "Kamuoyu üzerinde" },
            { id: 2, question: "Gazeteciler neye uymalıdır?", options: ["Sıkı etik ilkelere", "Sadece kendi isteklerine", "Hiçbir şeye"], correctAnswer: "Sıkı etik ilkelere" },
            { id: 3, question: "Amaç nedir?", options: ["Objektif habercilik sağlamak", "Daha çok reklam satmak", "İnsanları yanıltmak"], correctAnswer: "Objektif habercilik sağlamak" },
            { id: 4, question: "immens kelimesinin anlamı nedir?", options: ["Önemsiz", "Muazzam/Çok büyük", "Yavaş"], correctAnswer: "Muazzam/Çok büyük" },
            { id: 5, question: "gewährleisten ne demektir?", options: ["Engellemek", "Sağlamak/Garanti etmek", "İptal etmek"], correctAnswer: "Sağlamak/Garanti etmek" }
        ],
        vocabulary: [
            { word: "immense Macht", meaning: "muazzam güç" },
            { word: "öffentliche Meinung", meaning: "kamuoyu" },
            { word: "Richtlinie", meaning: "ilke/kılavuz" },
            { word: "Berichterstattung", meaning: "habercilik" },
            { word: "gewährleisten", meaning: "sağlamak/garanti etmek" }
        ]
    },
    617: {
        unitId: 617, title: "Sözlü Sınav Hazırlığı", language: "Almanca", level: "B2",
        story: {
            text: "Eine sorgfältige Vorbereitung ist die Voraussetzung für eine erfolgreiche mündliche Prüfung. Neben Fachwissen sind auch rhetorische Fähigkeiten und ein selbstbewusstes Auftreten von großer Bedeutung.",
            translation: "Özenli bir hazırlık, başarılı bir sözlü sınavın ön koşuludur. Uzmanlık bilgisinin yanı sıra hitabet becerileri ve özgüvenli duruş da büyük önem taşır."
        },
        questions: [
            { id: 1, question: "Başarılı bir sözlü sınavın ön koşulu nedir?", options: ["Özenli bir hazırlık", "Sadece şans", "Hızlı konuşmak"], correctAnswer: "Özenli bir hazırlık" },
            { id: 2, question: "Uzmanlık bilgisinin yanında ne önemlidir?", options: ["Hitabet becerileri ve özgüvenli duruş", "Yeni kıyafetler", "Sessiz kalmak"], correctAnswer: "Hitabet becerileri ve özgüvenli duruş" },
            { id: 3, question: "Voraussetzung ne demektir?", options: ["Ön koşul/Şart", "Sonuç", "Engel"], correctAnswer: "Ön koşul/Şart" },
            { id: 4, question: "selbstbewusst ne demektir?", options: ["Çekingen", "Özgüvenli", "Korkmuş"], correctAnswer: "Özgüvenli" },
            { id: 5, question: "Auftreten ne demektir?", options: ["Duruş/Tavır", "Gitmek", "Soru"], correctAnswer: "Duruş/Tavır" }
        ],
        vocabulary: [
            { word: "sorgfältig", meaning: "özenli" },
            { word: "Voraussetzung", meaning: "ön koşul/şart" },
            { word: "mündlich", meaning: "sözlü" },
            { word: "rhetorisch", meaning: "hitabetle ilgili" },
            { word: "Auftreten", meaning: "duruş/tavır" }
        ]
    },
    618: {
        unitId: 618, title: "Duyduğunu Anlama Stratejileri", language: "Almanca", level: "B2",
        story: {
            text: "Beim Hörverstehen auf B2-Niveau muss man lernen, den roten Faden eines Vortrags trotz Hintergrundgeräuschen oder schnellem Sprechtempo nicht zu verlieren. Das Notieren von Schlüsselbegriffen hilft dabei enorm.",
            translation: "B2 seviyesinde duyduğunu anlamada, arka plan gürültülerine veya hızlı konuşma temposuna rağmen bir sunumun ana hattını kaybetmemeyi öğrenmek gerekir. Anahtar kavramları not almak buna muazzam yardımcı olur."
        },
        questions: [
            { id: 1, question: "B2 düzeyinde duyduğunu anlamada neyi kaybetmemek gerekir?", options: ["Zamanı", "Sunumun ana hattını (rot Faden)", "Konsantrasyonu tamamen"], correctAnswer: "Sunumun ana hattını (rot Faden)" },
            { id: 2, question: "Ne yapmak dinlemede muazzam yardımcı olur?", options: ["Anahtar kavramları not almak", "Gözleri kapatmak", "Hemen cevaplamak"], correctAnswer: "Anahtar kavramları not almak" },
            { id: 3, question: "roter Faden ne demektir?", options: ["Ana hat/Ana fikir", "Kırmızı ip", "Zor soru"], correctAnswer: "Ana hat/Ana fikir" },
            { id: 4, question: "Hintergrundgeräusch ne demektir?", options: ["Arka plan gürültüsü", "Güzel müzik", "Ses tonu"], correctAnswer: "Arka plan gürültüsü" },
            { id: 5, question: "enorm kelimesinin anlamı nedir?", options: ["Çok az", "Muazzam", "Yavaş"], correctAnswer: "Muazzam" }
        ],
        vocabulary: [
            { word: "roter Faden", meaning: "ana hat/ana fikir" },
            { word: "Vortrag", meaning: "sunum/konuşma" },
            { word: "Hintergrundgeräusch", meaning: "arka plan gürültüsü" },
            { word: "Sprechtempo", meaning: "konuşma temposu" },
            { word: "enorm", meaning: "muazzam" }
        ]
    },
    619: {
        unitId: 619, title: "Okuduğunu Anlama Stratejileri", language: "Almanca", level: "B2",
        story: {
            text: "Um anspruchsvolle Texte schnell zu erfassen, sollte man globales und selektives Lesen kombinieren. Unbekannte Wörter stören den Lesefluss oft nicht, wenn man lernt, ihre Bedeutung aus dem Kontext zu erschließen.",
            translation: "Zorlayıcı metinleri hızlıca kavramak için genel ve seçici okuma birleştirilmelidir. Anlamı bağlamdan çıkarmayı öğrendiğinizde, bilinmeyen kelimeler okuma akışını genellikle bozmaz."
        },
        questions: [
            { id: 1, question: "Zorlayıcı metinleri hızlı kavramak için ne yapılmalıdır?", options: ["Sadece tek tek kelimelere bakılmalı", "Genel ve seçici okuma birleştirilmeli", "Okumaktan vazgeçilmeli"], correctAnswer: "Genel ve seçici okuma birleştirilmeli" },
            { id: 2, question: "Bilinmeyen kelimeler ne zaman okuma akışını bozmaz?", options: ["Anlamları bağlamdan çıkarıldığında", "Sözlüğe hemen bakıldığında", "Hiçbir zaman"], correctAnswer: "Anlamları bağlamdan çıkarıldığında" },
            { id: 3, question: "anspruchsvoll kelimesinin anlamı nedir?", options: ["Basit/Kolay", "Zorlayıcı/Nitelikli", "Sıkıcı"], correctAnswer: "Zorlayıcı/Nitelikli" },
            { id: 4, question: "erschließen ne demektir?", options: ["Çıkarmak/Anlamını bulmak", "Kapatmak", "Unutmak"], correctAnswer: "Çıkarmak/Anlamını bulmak" },
            { id: 5, question: "Lesefluss ne demektir?", options: ["Okuma akışı", "Kitap sayısı", "Hızlı yazma"], correctAnswer: "Okuma akışı" }
        ],
        vocabulary: [
            { word: "anspruchsvoll", meaning: "zorlayıcı/nitelikli" },
            { word: "erfassen", meaning: "kavramak" },
            { word: "Lesefluss", meaning: "okuma akışı" },
            { word: "erschließen", meaning: "çıkarmak/anlamını bulmak" },
            { word: "Kontext", meaning: "bağlam" }
        ]
    },
    620: {
        unitId: 620, title: "B2 Seviyesine Ulaşmak", language: "Almanca", level: "B2",
        story: {
            text: "Das Erreichen des B2-Niveaus öffnet Ihnen viele Türen in Studium und Beruf. Sie können sich nun zu komplexen Themen äußern, Argumente abwägen und anspruchsvolle Diskussionen führen. Herzlichen Glückwunsch!",
            translation: "B2 seviyesine ulaşmak, yükseköğrenim ve meslek hayatında size birçok kapı açar. Artık karmaşık konularda kendinizi ifade edebilir, argümanları tartabilir ve zorlayıcı tartışmalar yürütebilirsiniz. Gönülden tebrikler!"
        },
        questions: [
            { id: 1, question: "B2 seviyesine ulaşmak ne sağlar?", options: ["Sadece tatilde kolaylık", "Yükseköğrenim ve meslekte birçok kapı açar", "Hiçbir şey"], correctAnswer: "Yükseköğrenim ve meslekte birçok kapı açar" },
            { id: 2, question: "B2 düzeyindeki bir öğrenci ne yapabilir?", options: ["Sadece basit kelimeleri söyler", "Karmaşık konularda kendini ifade edip argümanları tartabilir", "Hiç yazamaz"], correctAnswer: "Karmaşık konularda kendini ifade edip argümanları tartabilir" },
            { id: 3, question: "abwägen kelimesinin anlamı nedir?", options: ["Tartmak/Ölçüp biçmek", "Göz ardı etmek", "Kabul etmek"], correctAnswer: "Tartmak/Ölçüp biçmek" },
            { id: 4, question: "komplex ne demektir?", options: ["Basit", "Karmaşık/Kompleks", "Kolay"], correctAnswer: "Karmaşık/Kompleks" },
            { id: 5, question: "Diskussion ne demektir?", options: ["Tartışma", "Ders", "Kitap"], correctAnswer: "Tartışma" }
        ],
        vocabulary: [
            { word: "Studium", meaning: "yükseköğrenim/üniversite" },
            { word: "komplex", meaning: "karmaşık/kompleks" },
            { word: "abwägen", meaning: "tartmak/ölçüp biçmek" },
            { word: "Diskussion", meaning: "tartışma" },
            { word: "Glückwunsch", meaning: "tebrik" }
        ]
    }
};

export function getGermanB2ReadingForUnit(unitId: number): UnitReading {
    return readings[unitId] || readings[591];
}
