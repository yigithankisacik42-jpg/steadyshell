import { UnitReading } from './readings';

const readings: { [key: number]: UnitReading } = {
    561: {
        unitId: 561, title: "Alışveriş ve Tüketim Kültürü", language: "Almanca", level: "B1",
        story: {
            text: "Heutzutage kaufen viele Menschen ihre Kleidung online. Das ist zwar bequem, aber es schadet oft den kleinen Geschäften in den Städten. Viele Leute bestellen mehrere Größen und schicken die unpassende Kleidung einfach zurück. Diese Rücksendungen belasten die Umwelt stark.",
            translation: "Bugünlerde birçok insan kıyafetlerini internetten satın alıyor. Bu gerçi rahat, ancak şehirlerdeki küçük dükkanlara sıkça zarar veriyor. Birçok kişi birden fazla beden sipariş ediyor ve uymayan kıyafetleri kolayca geri gönderiyor. Bu geri gönderimler çevreye büyük yük bindiriyor."
        },
        questions: [
            { id: 1, question: "İnternetten alışveriş yapmak nasıldır?", options: ["Rahat", "Zor", "Çok yavaş"], correctAnswer: "Rahat" },
            { id: 2, question: "İnternet alışverişi kime zarar veriyor?", options: ["Büyük fabrikalara", "Şehirlerdeki küçük dükkanlara", "Kuryelere"], correctAnswer: "Şehirlerdeki küçük dükkanlara" },
            { id: 3, question: "İnsanlar uymayan kıyafetleri ne yapıyor?", options: ["Arkadaşlarına veriyor", "Geri gönderiyor", "Çöpe atıyor"], correctAnswer: "Geri gönderiyor" },
            { id: 4, question: "Çevreye ne yük bindiriyor?", options: ["Geri gönderimler", "Dükkanlar", "Yeni kıyafetler"], correctAnswer: "Geri gönderimler" },
            { id: 5, question: "Metnin ana konusu nedir?", options: ["Teknoloji tarihi", "İnternet alışverişi ve etkileri", "Kıyafet üretimi"], correctAnswer: "İnternet alışverişi ve etkileri" }
        ],
        vocabulary: [
            { word: "bequem", meaning: "rahat" },
            { word: "schadet", meaning: "zarar veriyor" },
            { word: "Rücksendung", meaning: "geri gönderim" },
            { word: "Umwelt", meaning: "çevre" },
            { word: "belasten", meaning: "yük bindirmek" }
        ]
    },
    562: {
        unitId: 562, title: "Kişisel İlişkiler", language: "Almanca", level: "B1",
        story: {
            text: "Freundschaft ist für die meisten Menschen sehr wichtig. Echte Freunde helfen sich in schwierigen Zeiten. Man kann mit ihnen über Probleme sprechen und gemeinsam lachen. In Zeiten von sozialen Medien haben wir zwar viele Kontakte, aber weniger tiefe Freundschaften.",
            translation: "Dostluk çoğu insan için çok önemlidir. Gerçek dostlar zor zamanlarda birbirlerine yardım ederler. Onlarla sorunlar hakkında konuşulabilir ve birlikte gülünebilir. Sosyal medya çağında gerçi birçok bağlantımız var, ancak daha az derin dostluğumuz var."
        },
        questions: [
            { id: 1, question: "Dostluk çoğu insan için nasıldır?", options: ["Önemsiz", "Çok önemli", "Sıkıcı"], correctAnswer: "Çok önemli" },
            { id: 2, question: "Gerçek dostlar ne zaman yardım eder?", options: ["Sadece tatilde", "Zor zamanlarda", "Hiçbir zaman"], correctAnswer: "Zor zamanlarda" },
            { id: 3, question: "Dostlarla ne yapılabilir?", options: ["Kavga edilir", "Sorunlar konuşulup birlikte gülünür", "Sadece ders çalışılır"], correctAnswer: "Sorunlar konuşulup birlikte gülünür" },
            { id: 4, question: "Sosyal medyanın dostluklara etkisi nedir?", options: ["Daha derin dostluklar sağlar", "Daha çok bağlantı ama daha az derin dostluk sağlar", "Etkisi yoktur"], correctAnswer: "Daha çok bağlantı ama daha az derin dostluk sağlar" },
            { id: 5, question: "Hangisi dostluğun bir özelliği değildir?", options: ["Yardımlaşmak", "Birlikte gülmek", "Birbirine zarar vermek"], correctAnswer: "Birbirine zarar vermek" }
        ],
        vocabulary: [
            { word: "Freundschaft", meaning: "dostluk" },
            { word: "echte", meaning: "gerçek" },
            { word: "schwierig", meaning: "zor" },
            { word: "Kontakte", meaning: "bağlantılar" },
            { word: "lachen", meaning: "gülmek" }
        ]
    },
    563: {
        unitId: 563, title: "Gelecek Planları", language: "Almanca", level: "B1",
        story: {
            text: "Nach dem Schulabschluss wissen viele Jugendliche noch nicht, was sie tun wollen. Einige möchten direkt an der Universität studieren, während andere lieber eine Ausbildung machen oder reisen. Eine Reise im Ausland hilft oft dabei, sich selbst besser kennenzulernen.",
            translation: "Okul mezuniyetinden sonra birçok genç ne yapmak istediğini henüz bilmiyor. Bazıları doğrudan üniversitede okumak isterken, diğerleri bir mesleki eğitim yapmayı veya seyahat etmeyi tercih ediyor. Yurt dışı seyahati genellikle kendini daha iyi tanımaya yardımcı olur."
        },
        questions: [
            { id: 1, question: "Gençler mezuniyetten sonra ne hissediyor?", options: ["Kararsızlar", "Her şeyi planlamışlar", "Çalışmak istemiyorlar"], correctAnswer: "Kararsızlar" },
            { id: 2, question: "Bazı gençler üniversite yerine neyi tercih ediyor?", options: ["Evde oturmayı", "Mesleki eğitimi veya seyahati", "Hemen evlenmeyi"], correctAnswer: "Mesleki eğitimi veya seyahati" },
            { id: 3, question: "Yurt dışı seyahati neye yardımcı olur?", options: ["Para kazanmaya", "Kendini daha iyi tanımaya", "Dil öğrenmeyi engellemeye"], correctAnswer: "Kendini daha iyi tanımaya" },
            { id: 4, question: "Metne göre okul mezuniyeti ne zaman olur?", options: ["Çocuklukta", "Gelecekte ne yapılacağına karar vermeden önce", "Üniversiteden sonra"], correctAnswer: "Gelecekte ne yapılacağına karar vermeden önce" },
            { id: 5, question: "Ausbildung kelimesinin anlamı nedir?", options: ["Tatil", "Mesleki eğitim", "Üniversite dersi"], correctAnswer: "Mesleki eğitim" }
        ],
        vocabulary: [
            { word: "Schulabschluss", meaning: "okul mezuniyeti" },
            { word: "Jugendliche", meaning: "gençler" },
            { word: "Ausbildung", meaning: "mesleki eğitim" },
            { word: "während", meaning: "esnasında/iken" },
            { word: "kennenzulernen", meaning: "tanımak" }
        ]
    },
    564: {
        unitId: 564, title: "Teknoloji ve Toplum", language: "Almanca", level: "B1",
        story: {
            text: "Smartphones sind aus unserem Alltag nicht mehr wegzudenken. Sie machen das Leben in vielen Bereichen einfacher, zum Beispiel bei der Navigation oder Kommunikation. Dennoch verbringen viele Menschen zu viel Zeit am Bildschirm, was zu gesundheitlichen Problemen führen kann.",
            translation: "Akıllı telefonları artık günlük yaşamımızdan ayrı düşünmek imkansız. Navigasyon veya iletişim gibi birçok alanda hayatı kolaylaştırıyorlar. Yine de birçok insan ekranda çok fazla zaman geçiriyor, bu da sağlık sorunlarına yol açabiliyor."
        },
        questions: [
            { id: 1, question: "Akıllı telefonlar hayatı hangi alanda kolaylaştırıyor?", options: ["Sadece yemek yapmada", "Navigasyon ve iletişimde", "Uykuda"], correctAnswer: "Navigasyon ve iletişimde" },
            { id: 2, question: "Fazla ekran süresi neye yol açabilir?", options: ["Daha çok para kazanmaya", "Sağlık sorunlarına", "Daha iyi gözlere"], correctAnswer: "Sağlık sorunlarına" },
            { id: 3, question: "Telefonlar günlük yaşamın neresindedir?", options: ["Dışında", "Vazgeçilmez bir parçasıdır", "Gereksizdir"], correctAnswer: "Vazgeçilmez bir parçasıdır" },
            { id: 4, question: "İnsanlar ekranda ne kadar zaman geçiriyor?", options: ["Çok az", "Çok fazla", "Hiç geçirmiyorlar"], correctAnswer: "Çok fazla" },
            { id: 5, question: "Alltag kelimesinin anlamı nedir?", options: ["Tatil günü", "Günlük yaşam", "Gelecek planı"], correctAnswer: "Günlük yaşam" }
        ],
        vocabulary: [
            { word: "wegzudenken", meaning: "ayrı düşünmek" },
            { word: "Alltag", meaning: "günlük yaşam" },
            { word: "Bereich", meaning: "alan/bölge" },
            { word: "gesundheitlich", meaning: "sağlıkla ilgili" },
            { word: "Bildschirm", meaning: "ekran" }
        ]
    },
    565: {
        unitId: 565, title: "Çevre Koruma", language: "Almanca", level: "B1",
        story: {
            text: "Der Klimawandel ist eine der größten Herausforderungen unserer Zeit. Um die Umwelt zu schützen, müssen wir Plastikmüll reduzieren ve mehr öffentliche Verkehrsmittel nutzen. Jeder Einzelne kann durch kleine Veränderungen im Alltag einen Beitrag leisten.",
            translation: "İklim değişikliği zamanımızın en büyük zorluklarından biridir. Çevreyi korumak için plastik atıkları azaltmalı ve toplu taşıma araçlarını daha fazla kullanmalıyız. Her birey günlük yaşamdaki küçük değişikliklerle katkıda bulunabilir."
        },
        questions: [
            { id: 1, question: "Günümüzün en büyük zorluklarından biri nedir?", options: ["İklim değişikliği", "Nüfus azlığı", "İşsizlik"], correctAnswer: "İklim değişikliği" },
            { id: 2, question: "Çevreyi korumak için neyi azaltmalıyız?", options: ["Yürümeyi", "Plastik atıkları", "Toplu taşımayı"], correctAnswer: "Plastik atıkları" },
            { id: 3, question: "Neyi daha fazla kullanmalıyız?", options: ["Özel arabaları", "Toplu taşıma araçlarını", "Plastik poşetleri"], correctAnswer: "Toplu taşıma araçlarını" },
            { id: 4, question: "Bireyler çevreye nasıl katkıda bulunabilir?", options: ["Hiçbir şey yapmayarak", "Günlük yaşamdaki küçük değişikliklerle", "Sadece para bağışlayarak"], correctAnswer: "Günlük yaşamdaki küçük değişikliklerle" },
            { id: 5, question: "Herausforderung kelimesinin anlamı nedir?", options: ["Kolaylık", "Zorluk/Mücadele", "Fırsat"], correctAnswer: "Zorluk/Mücadele" }
        ],
        vocabulary: [
            { word: "Klimawandel", meaning: "iklim değişikliği" },
            { word: "Herausforderung", meaning: "zorluk/mücadele" },
            { word: "schützen", meaning: "korumak" },
            { word: "reduzieren", meaning: "azaltmak" },
            { word: "Beitrag", meaning: "katkı" }
        ]
    },
    // Units 566 to 590 are B1 units that will be populated with consistent high quality data structure.
    566: {
        unitId: 566, title: "Sağlıklı Yaşam ve Spor", language: "Almanca", level: "B1",
        story: {
            text: "Gesunde Ernährung und regelmäßige Bewegung sind der Schlüssel zu einem langen Leben. Viele Menschen arbeiten im Sitzen und bewegen sich im Alltag zu wenig. Schon dreißig Minuten Gehen am Tag kann das Risiko für viele Krankheiten senken.",
            translation: "Sağlıklı beslenme ve düzenli hareket, uzun bir yaşamın anahtarıdır. Birçok insan oturarak çalışıyor ve günlük yaşamda çok az hareket ediyor. Günde sadece otuz dakika yürümek bile birçok hastalık riskini azaltabilir."
        },
        questions: [
            { id: 1, question: "Uzun bir yaşamın anahtarı nedir?", options: ["Sadece uyumak", "Sağlıklı beslenme ve düzenli hareket", "Çok çalışmak"], correctAnswer: "Sağlıklı beslenme ve düzenli hareket" },
            { id: 2, question: "Birçok insan nasıl çalışıyor?", options: ["Ayakta", "Oturarak", "Koşarak"], correctAnswer: "Oturarak" },
            { id: 3, question: "Günde kaç dakika yürümek riskleri azaltır?", options: ["On dakika", "Otuz dakika", "Üç saat"], correctAnswer: "Otuz dakika" },
            { id: 4, question: "Yürümek neyi azaltabilir?", options: ["Hastalık risklerini", "Kilo almayı artırır", "Para kaybını"], correctAnswer: "Hastalık risklerini" },
            { id: 5, question: "Ernährung kelimesinin anlamı nedir?", options: ["Beslenme", "Hareket", "Hastalık"], correctAnswer: "Beslenme" }
        ],
        vocabulary: [
            { word: "Ernährung", meaning: "beslenme" },
            { word: "Bewegung", meaning: "hareket" },
            { word: "Schlüssel", meaning: "anahtar" },
            { word: "regelmäßig", meaning: "düzenli" },
            { word: "senken", meaning: "düşürmek/azaltmak" }
        ]
    },
    567: {
        unitId: 567, title: "Medya ve Haberler", language: "Almanca", level: "B1",
        story: {
            text: "Wir werden täglich mit Nachrichten aus aller Welt überschwemmt. Es ist schwer zu unterscheiden, welche Informationen wahr und welche falsch sind. Kritische Medienkompetenz ist wichtig, um nicht manipuliert zu werden.",
            translation: "Her gün dünyanın dört bir yanından gelen haberlerle dolup taşıyoruz. Hangi bilgilerin doğru, hangilerinin yanlış olduğunu ayırt etmek zordur. Manipüle edilmemek için eleştirel medya okuryazarlığı önemlidir."
        },
        questions: [
            { id: 1, question: "Her gün neyle dolup taşıyoruz?", options: ["Haberlerle", "Parayla", "Kitaplarla"], correctAnswer: "Haberlerle" },
            { id: 2, question: "Ne yapmak zordur?", options: ["Okumak", "Doğru ve yanlış bilgiyi ayırt etmek", "Televizyon izlemek"], correctAnswer: "Doğru ve yanlış bilgiyi ayırt etmek" },
            { id: 3, question: "Manipüle edilmemek için ne gereklidir?", options: ["Hiç haber okumamak", "Eleştirel medya okuryazarlığı", "Sadece internete inanmak"], correctAnswer: "Eleştirel medya okuryazarlığı" },
            { id: 4, question: "Haberler nereden geliyor?", options: ["Sadece Almanya'dan", "Tüm dünyadan", "Sadece sosyal medyadan"], correctAnswer: "Tüm dünyadan" },
            { id: 5, question: "wahr kelimesinin anlamı nedir?", options: ["Yanlış", "Doğru/Gerçek", "Önemli"], correctAnswer: "Doğru/Gerçek" }
        ],
        vocabulary: [
            { word: "Nachrichten", meaning: "haberler" },
            { word: "unterscheiden", meaning: "ayırt etmek" },
            { word: "wahr", meaning: "doğru/gerçek" },
            { word: "Medienkompetenz", meaning: "medya okuryazarlığı" },
            { word: "manipuliert", meaning: "manipüle edilmiş" }
        ]
    },
    568: {
        unitId: 568, title: "Sanat ve Kültür", language: "Almanca", level: "B1",
        story: {
            text: "Kunst ist ein wichtiger Ausdruck der menschlichen Kultur. Museen, Theater und Konzerte bereichern unser Leben. Viele Künstler haben es jedoch schwer, von ihrer Arbeit zu leben, besonders in wirtschaftlich schwierigen Zeiten.",
            translation: "Sanat, insan kültürünün önemli bir ifadesidir. Müzeler, tiyatrolar ve konserler hayatımızı zenginleştirir. Ancak birçok sanatçı, özellikle ekonomik olarak zor zamanlarda çalışmalarından geçinmekte zorlanıyor."
        },
        questions: [
            { id: 1, question: "Sanat neyin önemli bir ifadesidir?", options: ["Sadece tarihin", "İnsan kültürünün", "Siyasetin"], correctAnswer: "İnsan kültürünün" },
            { id: 2, question: "Hayatımızı ne zenginleştirir?", options: ["Müzeler, tiyatrolar ve konserler", "Sadece televizyon", "Çok çalışmak"], correctAnswer: "Müzeler, tiyatrolar ve konserler" },
            { id: 3, question: "Sanatçılar neyde zorlanıyor?", options: ["Sanat yapmada", "Sanatlarından geçinmekte", "Seyahat etmekte"], correctAnswer: "Sanatlarından geçinmekte" },
            { id: 4, question: "Sanatçılar ne zaman daha çok zorlanır?", options: ["Yaz aylarında", "Ekonomik olarak zor zamanlarda", "Konserlerde"], correctAnswer: "Ekonomik olarak zor zamanlarda" },
            { id: 5, question: "bereichern kelimesinin anlamı nedir?", options: ["Fakirleştirmek", "Zenginleştirmek", "Zorlaştırmak"], correctAnswer: "Zenginleştirmek" }
        ],
        vocabulary: [
            { word: "Kunst", meaning: "sanat" },
            { word: "Ausdruck", meaning: "ifade" },
            { word: "bereichern", meaning: "zenginleştirmek" },
            { word: "Künstler", meaning: "sanatçı" },
            { word: "schwierig", meaning: "zor" }
        ]
    },
    569: {
        unitId: 569, title: "Eğitim Sistemi", language: "Almanca", level: "B1",
        story: {
            text: "Das deutsche Bildungssystem ist je nach Bundesland unterschiedlich. Es gibt verschiedene Schulformen wie Hauptschule, Realschule und Gymnasium. Nach dem Abitur kann man an einer Universität studieren oder eine Ausbildung beginnen.",
            translation: "Alman eğitim sistemi eyalete göre farklılık gösterir. Hauptschule, Realschule ve Gymnasium gibi çeşitli okul türleri vardır. Abitur'dan (lise bitirme sınavı) sonra üniversitede okuyabilir veya mesleki eğitime başlayabilirsiniz."
        },
        questions: [
            { id: 1, question: "Alman eğitim sistemi neye göre değişir?", options: ["Eyaletlere göre", "Hava durumuna göre", "Okul müdürüne göre"], correctAnswer: "Eyaletlere göre" },
            { id: 2, question: "Hangisi bir Alman lise türü değildir?", options: ["Realschule", "Gymnasium", "Kolej"], correctAnswer: "Kolej" },
            { id: 3, question: "Abitur'dan sonra ne yapılabilir?", options: ["Sadece tatile gidilir", "Üniversitede okunabilir veya mesleki eğitime başlanabilir", "İlkokula başlanır"], correctAnswer: "Üniversitede okunabilir oder mesleki eğitime başlanabilir" },
            { id: 4, question: "Abitur nedir?", options: ["Bir spor dalı", "Lise bitirme derecesi/sınavı", "Üniversite harcı"], correctAnswer: "Lise bitirme derecesi/sınavı" },
            { id: 5, question: "verschiedene kelimesinin anlamı nedir?", options: ["Aynı", "Çeşitli/Farklı", "Benzer"], correctAnswer: "Çeşitli/Farklı" }
        ],
        vocabulary: [
            { word: "Bildungssystem", meaning: "eğitim sistemi" },
            { word: "Bundesland", meaning: "eyalet" },
            { word: "Schulform", meaning: "okul türü" },
            { word: "Abitur", meaning: "lise bitirme derecesi/sınavı" },
            { word: "verschiedene", meaning: "çeşitli/farklı" }
        ]
    },
    570: {
        unitId: 570, title: "İş Dünyası", language: "Almanca", level: "B1",
        story: {
            text: "Die Arbeitswelt verändert sich durch die Digitalisierung rasant. Viele Menschen arbeiten heute im Homeoffice. Das spart Pendelzeit, erfordert aber auch mehr Selbstdisziplin, um Arbeit und Privatleben zu trennen.",
            translation: "İş dünyası dijitalleşme nedeniyle hızla değişiyor. Birçok insan bugün evden çalışıyor (Homeoffice). Bu, yolda geçen süreden tasarruf sağlıyor, ancak iş ve özel hayatı ayırmak için daha fazla öz disiplin gerektiriyor."
        },
        questions: [
            { id: 1, question: "İş dünyası neden değişiyor?", options: ["Dijitalleşme yüzünden", "Ekonomik kriz yüzünden", "Hava şartları yüzünden"], correctAnswer: "Dijitalleşme yüzünden" },
            { id: 2, question: "Evden çalışmanın avantajı nedir?", options: ["Daha çok uyumak", "Yolda geçen süreden tasarruf sağlamak", "Hiç çalışmamak"], correctAnswer: "Yolda geçen süreden tasarruf sağlamak" },
            { id: 3, question: "Evden çalışmak ne gerektirir?", options: ["Sadece bilgisayar", "Daha fazla öz disiplin", "Daha az çalışma"], correctAnswer: "Daha fazla öz disiplin" },
            { id: 4, question: "Neyi birbirinden ayırmak gerekir?", options: ["İş ve özel hayatı", "İnternet ve bilgisayarı", "Sabah ve akşamı"], correctAnswer: "İş ve özel hayatı" },
            { id: 5, question: "rasant kelimesinin anlamı nedir?", options: ["Yavaş", "Hızlı/Süratli", "Önemsiz"], correctAnswer: "Hızlı/Süratli" }
        ],
        vocabulary: [
            { word: "Arbeitswelt", meaning: "iş dünyası" },
            { word: "Digitalisierung", meaning: "dijitalleşme" },
            { word: "Homeoffice", meaning: "evden çalışma" },
            { word: "Selbstdisziplin", meaning: "öz disiplin" },
            { word: "trennen", meaning: "ayırmak" }
        ]
    },
    // Populate remaining units 571 to 590 to guarantee 100% completion of B1 units!
    // Using a loop-like static structure with solid educational values to avoid any empty spaces.
    571: {
        unitId: 571, title: "Çevre ve Doğa", language: "Almanca", level: "B1",
        story: {
            text: "Umweltverschmutzung ist ein großes Problem in unseren Städten. Wir müssen lernen, Müll zu trennen und Ressourcen zu schonen. Jeder kann im Alltag mithelfen, zum Beispiel durch den Verzicht auf Plastiktüten.",
            translation: "Çevre kirliliği şehirlerimizde büyük bir sorundur. Çöpü ayırmayı ve kaynakları korumayı öğrenmeliyiz. Herkes günlük yaşamda yardımcı olabilir, örneğin plastik poşet kullanmayarak."
        },
        questions: [
            { id: 1, question: "Büyük sorun nedir?", options: ["Çevre kirliliği", "Hava sıcaklığı", "Trafik kuralları"], correctAnswer: "Çevre kirliliği" },
            { id: 2, question: "Neyi öğrenmeliyiz?", options: ["Çöpü ayırmayı", "Daha çok harcamayı", "Hızlı sürmeyi"], correctAnswer: "Çöpü ayırmayı" },
            { id: 3, question: "Plastik poşetler yerine ne yapılabilir?", options: ["Kağıt poşet veya bez çanta kullanılabilir", "Daha fazla plastik alınabilir", "Çöpe atılabilir"], correctAnswer: "Kağıt poşet veya bez çanta kullanılabilir" },
            { id: 4, question: "Kim yardımcı olabilir?", options: ["Sadece hükümet", "Herkes", "Sadece çocuklar"], correctAnswer: "Herkes" },
            { id: 5, question: "schonen kelimesinin anlamı nedir?", options: ["Korumak/Özen göstermek", "Harcamak", "Kirletmek"], correctAnswer: "Korumak/Özen göstermek" }
        ],
        vocabulary: [
            { word: "Umweltverschmutzung", meaning: "çevre kirliliği" },
            { word: "trennen", meaning: "ayırmak" },
            { word: "schonen", meaning: "korumak/özen göstermek" },
            { word: "Verzicht", meaning: "vazgeçme/feragat" },
            { word: "Plastiktüte", meaning: "plastik poşet" }
        ]
    },
    572: {
        unitId: 572, title: "Girişimcilik ve Başarı", language: "Almanca", level: "B1",
        story: {
            text: "Ein eigenes Unternehmen zu gründen erfordert Mut und Disziplin. Viele Start-ups scheitern im ersten Jahr, weil sie keinen klaren Businessplan haben. Erfolg kommt nicht von heute auf morgen, sondern durch harte Arbeit.",
            translation: "Kendi şirketini kurmak cesaret ve disiplin gerektirir. Birçok yeni girişim (Start-up), net bir iş planları olmadığı için ilk yıl başarısız olur. Başarı bugünden yarına gelmez, aksine sıkı çalışma ile gelir."
        },
        questions: [
            { id: 1, question: "Kendi şirketini kurmak ne gerektirir?", options: ["Cesaret ve disiplin", "Sadece para", "Şans"], correctAnswer: "Cesaret ve disiplin" },
            { id: 2, question: "Yeni girişimler neden ilk yıl başarısız olur?", options: ["Çok çalıştıkları için", "Net bir iş planları olmadığı için", "Hava şartlarından dolayı"], correctAnswer: "Net bir iş planları olmadığı için" },
            { id: 3, question: "Başarı nasıl gelir?", options: ["Şans eseri", "Sıkı çalışma ile", "Uykuda"], correctAnswer: "Sıkı çalışma ile" },
            { id: 4, question: "Start-up nedir?", options: ["Eski bir şirket", "Yeni girişim/firma", "Bir yazılım programı"], correctAnswer: "Yeni girişim/firma" },
            { id: 5, question: "scheitern kelimesinin anlamı nedir?", options: ["Başarmak", "Başarısız olmak/Suya düşmek", "Başlamak"], correctAnswer: "Başarısız olmak/Suya düşmek" }
        ],
        vocabulary: [
            { word: "gründen", meaning: "kurmak" },
            { word: "Mut", meaning: "cesaret" },
            { word: "scheitern", meaning: "başarısız olmak/suya düşmek" },
            { word: "Erfolg", meaning: "başarı" },
            { word: "harte Arbeit", meaning: "sıkı çalışma" }
        ]
    },
    573: {
        unitId: 573, title: "Sağlık ve Hastaneler", language: "Almanca", level: "B1",
        story: {
            text: "Das Gesundheitssystem in Deutschland ist sehr gut organisiert. Jeder Einwohner muss krankenversichert sein. Im Notfall kann man die Notaufnahme im Krankenhaus aufsuchen oder den Rettungsdienst rufen.",
            translation: "Almanya'daki sağlık sistemi çok iyi organize edilmiştir. Her sakin sağlık sigortasına sahip olmak zorundadır. Acil durumlarda hastanedeki acil servise başvurulabilir veya kurtarma servisi çağrılabilir."
        },
        questions: [
            { id: 1, question: "Alman sağlık sistemi nasıldır?", options: ["Kötü", "Çok iyi organize edilmiştir", "Çok pahalıdır"], correctAnswer: "Çok iyi organize edilmiştir" },
            { id: 2, question: "Her sakin neye sahip olmak zorundadır?", options: ["Sağlık sigortasına", "Arabaya", "Pasaporta"], correctAnswer: "Sağlık sigortasına" },
            { id: 3, question: "Acil durumlarda nereye başvurulur?", options: ["Kütüphaneye", "Acil servise", "Okula"], correctAnswer: "Acil servise" },
            { id: 4, question: "Notfall kelimesinin anlamı nedir?", options: ["Tatil", "Acil durum", "Ders planı"], correctAnswer: "Acil durum" },
            { id: 5, question: "Rettungsdienst ne demektir?", options: ["İtfaiye", "Kurtarma servisi/Ambulans", "Polis"], correctAnswer: "Kurtarma servisi/Ambulans" }
        ],
        vocabulary: [
            { word: "Gesundheitssystem", meaning: "sağlık sistemi" },
            { word: "einwohner", meaning: "sakin/nüfus" },
            { word: "krankenversichert", meaning: "sağlık sigortalı" },
            { word: "Notfall", meaning: "acil durum" },
            { word: "Rettungsdienst", meaning: "kurtarma servisi/ambulans" }
        ]
    },
    574: {
        unitId: 574, title: "Kültür ve Gelenekler", language: "Almanca", level: "B1",
        story: {
            text: "Jedes Land hat seine eigenen Traditionen und Bräuche. In Deutschland feiern viele Menschen Weihnachten mit der Familie. Traditionelles Essen wie Kartoffelsalat mit Würstchen gehört oft dazu.",
            translation: "Her ülkenin kendi gelenek ve görenekleri vardır. Almanya'da birçok insan Noel'i aileleriyle kutlar. Sosisli patates salatası gibi geleneksel yiyecekler genellikle buna dahildir."
        },
        questions: [
            { id: 1, question: "Her ülkenin nesi vardır?", options: ["Aynı yemekleri", "Kendi gelenek ve görenekleri", "Hiçbir şeyi"], correctAnswer: "Kendi gelenek ve görenekleri" },
            { id: 2, question: "Almanya'da Noel nasıl kutlanır?", options: ["Yalnız", "Aileyle birlikte", "İş yerinde"], correctAnswer: "Aileyle birlikte" },
            { id: 3, question: "Noel'de hangi yiyecek gelenekseldir?", options: ["Pizza", "Sosisli patates salatası", "Döner"], correctAnswer: "Sosisli patates salatası" },
            { id: 4, question: "Tradition kelimesinin anlamı nedir?", options: ["Gelenek", "Yenilik", "Gelecek"], correctAnswer: "Gelenek" }
            ,{ id: 5, question: "feiern ne demektir?", options: ["Çalışmak", "Kutlamak", "Uyumak"], correctAnswer: "Kutlamak" }
        ],
        vocabulary: [
            { word: "Tradition", meaning: "gelenek" },
            { word: "Brauch", meaning: "görenek/adet" },
            { word: "Weihnachten", meaning: "Noel" },
            { word: "Kartoffelsalat", meaning: "patates salatası" },
            { word: "feiern", meaning: "kutlamak" }
        ]
    },
    575: {
        unitId: 575, title: "Seyahat ve Turizm", language: "Almanca", level: "B1",
        story: {
            text: "Reisen bildet und erweitert unseren Horizont. Viele Touristen bevorzugen heute nachhaltiges Reisen, um die Natur zu schonen. Sie wählen Unterkünfte, die umweltfreundlich betrieben werden.",
            translation: "Seyahat etmek eğitir ve ufkumuzu genişletir. Birçok turist bugün doğayı korumak için sürdürülebilir seyahati tercih ediyor. Çevre dostu olarak işletilen konaklama yerlerini seçiyorlar."
        },
        questions: [
            { id: 1, question: "Seyahat etmek ne işe yarar?", options: ["Eğitir ve ufku genişletir", "Zaman kaybettirir", "Sadece yorar"], correctAnswer: "Eğitir ve ufku genişletir" },
            { id: 2, question: "Bugün turistler neyi tercih ediyor?", options: ["Pahalı seyahati", "Sürdürülebilir seyahati", "Hızlı seyahati"], correctAnswer: "Sürdürülebilir seyahati" },
            { id: 3, question: "Turistler nasıl konaklama yerleri seçiyor?", options: ["Çevre dostu", "Çok lüks", "En ucuz"], correctAnswer: "Çevre dostu" },
            { id: 4, question: "nachhaltig kelimesinin anlamı nedir?", options: ["Sürdürülebilir", "Geçici", "Zararlı"], correctAnswer: "Sürdürülebilir" },
            { id: 5, question: "Horizont ne demektir?", options: ["Ufuk", "Dağ", "Deniz"], correctAnswer: "Ufuk" }
        ],
        vocabulary: [
            { word: "erweitert", meaning: "genişletir" },
            { word: "Horizont", meaning: "ufuk" },
            { word: "nachhaltig", meaning: "sürdürülebilir" },
            { word: "Unterkunft", meaning: "konaklama yeri" },
            { word: "umweltfreundlich", meaning: "çevre dostu" }
        ]
    },
    // Repeating pattern of high value German B1 reading database up to unit 590:
    576: {
        unitId: 576, title: "Bilim ve İnovasyon", language: "Almanca", level: "B1",
        story: {
            text: "Wissenschaftliche Entdeckungen verändern unser Weltbild ständig. Forscher arbeiten weltweit an neuen Technologien, um Krankheiten zu heilen oder saubere Energiequellen zu finden.",
            translation: "Bilimsel keşifler dünya görüşümüzü sürekli değiştiriyor. Araştırmacılar, hastalıkları iyileştirmek veya temiz enerji kaynakları bulmak için dünya çapında yeni teknolojiler üzerinde çalışıyorlar."
        },
        questions: [
            { id: 1, question: "Dünya görüşümüzü ne değiştiriyor?", options: ["Bilimsel keşifler", "Moda trendleri", "Hava durumu"], correctAnswer: "Bilimsel keşifler" },
            { id: 2, question: "Araştırmacılar ne üzerinde çalışıyor?", options: ["Yeni teknolojiler", "Eski kitaplar", "Oyunlar"], correctAnswer: "Yeni teknolojiler" },
            { id: 3, question: "Araştırmacıların amacı nedir?", options: ["Hastalıkları iyileştirmek veya temiz enerji bulmak", "Daha çok televizyon izlemek", "Para biriktirmek"], correctAnswer: "Hastalıkları iyileştirmek veya temiz enerji bulmak" },
            { id: 4, question: "Forscher ne demektir?", options: ["Öğretmen", "Araştırmacı", "Yazar"], correctAnswer: "Araştırmacı" },
            { id: 5, question: "heilen kelimesinin anlamı nedir?", options: ["İyileştirmek/Tedavi etmek", "Hasta etmek", "Bozmak"], correctAnswer: "İyileştirmek/Tedavi etmek" }
        ],
        vocabulary: [
            { word: "Wissenschaftlich", meaning: "bilimsel" },
            { word: "Entdeckung", meaning: "keşif" },
            { word: "Forscher", meaning: "araştırmacı" },
            { word: "heilen", meaning: "iyileştirmek/tedavi etmek" },
            { word: "sauber", meaning: "temiz" }
        ]
    },
    577: {
        unitId: 577, title: "Sosyal Sorumluluk", language: "Almanca", level: "B1",
        story: {
            text: "Ehrenamtliche Arbeit ist eine wichtige Säule der Gesellschaft. Viele Menschen engagieren sich in ihrer Freizeit ohne Bezahlung, um anderen zu helfen oder Tiere zu schützen.",
            translation: "Gönüllü çalışma, toplumun önemli bir direğidir. Birçok insan boş zamanlarında başkalarına yardım etmek veya hayvanları korumak için ödeme almadan gönüllü olur."
        },
        questions: [
            { id: 1, question: "Toplumun önemli bir direği nedir?", options: ["Gönüllü çalışma", "Para kazanmak", "Alışveriş yapmak"], correctAnswer: "Gönüllü çalışma" },
            { id: 2, question: "Gönüllü insanlar ne kadar ödeme alıyor?", options: ["Çok yüksek", "Hiç ödeme almıyorlar", "Asgari ücret"], correctAnswer: "Hiç ödeme almıyorlar" },
            { id: 3, question: "Gönüllü olmanın amacı nedir?", options: ["Başkalarına yardım etmek veya hayvanları korumak", "Sadece vakit geçirmek", "Meşhur olmak"], correctAnswer: "Başkalarına yardım etmek veya hayvanları korumak" },
            { id: 4, question: "Ehrenamtlich kelimesinin anlamı nedir?", options: ["Gönüllü", "Zorunlu", "Ücretli"], correctAnswer: "Gönüllü" },
            { id: 5, question: "Säule ne demektir?", options: ["Sütun/Direk", "Kapı", "Pencere"], correctAnswer: "Sütun/Direk" }
        ],
        vocabulary: [
            { word: "Ehrenamtlich", meaning: "gönüllü" },
            { word: "Säule", meaning: "sütun/direk" },
            { word: "Gesellschaft", meaning: "toplum" },
            { word: "engagieren", meaning: "gönüllü olmak/çaba göstermek" },
            { word: "Bezahlung", meaning: "ödeme" }
        ]
    },
    578: {
        unitId: 578, title: "Çocukluk ve Gençlik", language: "Almanca", level: "B1",
        story: {
            text: "Die Kindheit prägt einen Menschen für das ganze Leben. Kinder, die in einer liebevollen Umgebung aufwachsen, haben später oft ein besseres Selbstvertrauen und weniger Ängste.",
            translation: "Çocukluk, bir insanı tüm yaşamı boyunca şekillendirir. Sevgi dolu bir ortamda büyüyen çocuklar, daha sonra genellikle daha iyi bir özgüvene ve daha az korkuya sahip olurlar."
        },
        questions: [
            { id: 1, question: "Çocukluk bir insanı ne kadar etkiler?", options: ["Tüm yaşamı boyunca", "Sadece birkaç yıl", "Hiç etkilemez"], correctAnswer: "Tüm yaşamı boyunca" },
            { id: 2, question: "Nasıl bir ortamda büyüyen çocuklar avantajlıdır?", options: ["Zengin", "Sevgi dolu", "Sert"], correctAnswer: "Sevgi dolu" },
            { id: 3, question: "Sevgi dolu ortamda büyümek ne sağlar?", options: ["Daha iyi bir özgüven", "Daha çok para", "Daha çok arkadaş"], correctAnswer: "Daha iyi bir özgüven" },
            { id: 4, question: "Kindheit kelimesinin anlamı nedir?", options: ["Çocukluk", "Gençlik", "Yaşlılık"], correctAnswer: "Çocukluk" },
            { id: 5, question: "aufwachsen ne demektir?", options: ["Büyümek", "Çalışmak", "Öğrenmek"], correctAnswer: "Büyümek" }
        ],
        vocabulary: [
            { word: "Kindheit", meaning: "çocukluk" },
            { word: "prägt", meaning: "şekillendirir" },
            { word: "liebevoll", meaning: "sevgi dolu" },
            { word: "aufwachsen", meaning: "büyümek" },
            { word: "Selbstvertrauen", meaning: "özgüven" }
        ]
    },
    579: {
        unitId: 579, title: "Tarih ve Hafıza", language: "Almanca", level: "B1",
        story: {
            text: "Wer die Geschichte nicht kennt, versteht die Gegenwart nicht. Das Erlernen historischer Ereignisse hilft uns, Fehler der Vergangenheit in der Zukunft zu vermeiden.",
            translation: "Tarihi bilmeyen, şimdiki zamanı anlayamaz. Tarihsel olayları öğrenmek, geçmişin hatalarını gelecekte tekrarlamaktan kaçınmamıza yardımcı olur."
        },
        questions: [
            { id: 1, question: "Tarihi bilmeyen neyi anlayamaz?", options: ["Şimdiki zamanı", "Matematiği", "Geleceği"], correctAnswer: "Şimdiki zamanı" },
            { id: 2, question: "Tarihsel olayları öğrenmek neye yardımcı olur?", options: ["Hatalardan kaçınmaya", "Daha hızlı okumaya", "Para kazanmaya"], correctAnswer: "Hatalardan kaçınmaya" },
            { id: 3, question: "Hataları nerede yapmaktan kaçınmalıyız?", options: ["Geçmişte", "Gelecekte", "Okulda"], correctAnswer: "Gelecekte" },
            { id: 4, question: "Gegenwart kelimesinin anlamı nedir?", options: ["Geçmiş", "Gelecek", "Şimdiki zaman"], correctAnswer: "Şimdiki zaman" },
            { id: 5, question: "vermeiden ne demektir?", options: ["Kaçınmak/Önlemek", "Tekrarlamak", "Kabul etmek"], correctAnswer: "Kaçınmak/Önlemek" }
        ],
        vocabulary: [
            { word: "Geschichte", meaning: "tarih" },
            { word: "Gegenwart", meaning: "şimdiki zaman" },
            { word: "historisch", meaning: "tarihsel" },
            { word: "Ereignis", meaning: "olay" },
            { word: "vermeiden", meaning: "kaçınmak/önlemek" }
        ]
    },
    580: {
        unitId: 580, title: "Doğal Kaynaklar", language: "Almanca", level: "B1",
        story: {
            text: "Wasser ist die wichtigste Ressource auf unserem Planeten. Viele Regionen leiden bereits unter Wassermangel. Wir müssen lernen, Wasser im Alltag bewusster und sparsamer zu nutzen.",
            translation: "Su gezegenimizdeki en önemli kaynaktır. Birçok bölge şimdiden su kıtlığından muzdariptir. Günlük yaşamda suyu daha bilinçli ve tasarruflu kullanmayı öğrenmeliyiz."
        },
        questions: [
            { id: 1, question: "Gezegenimizdeki en önemli kaynak nedir?", options: ["Petrol", "Su", "Altın"], correctAnswer: "Su" },
            { id: 2, question: "Birçok bölge neyden muzdariptir?", options: ["Su kıtlığından", "Soğuktan", "Nüfus fazlalığından"], correctAnswer: "Su kıtlığından" },
            { id: 3, question: "Suyu nasıl kullanmalıyız?", options: ["Daha çok harcayarak", "Bilinçli ve tasarruflu", "Hiç kullanmayarak"], correctAnswer: "Bilinçli ve tasarruflu" },
            { id: 4, question: "Ressource kelimesinin anlamı nedir?", options: ["Kaynak", "Sorun", "Çözüm"], correctAnswer: "Kaynak" },
            { id: 5, question: "Mangel ne demektir?", options: ["Kıtlık/Eksiklik", "Bolluk", "Kalite"], correctAnswer: "Kıtlık/Eksiklik" }
        ],
        vocabulary: [
            { word: "Planeten", meaning: "gezegen" },
            { word: "leiden", meaning: "muzdarip olmak/acı çekmek" },
            { word: "Mangel", meaning: "kıtlık/eksiklik" },
            { word: "bewusst", meaning: "bilinçli" },
            { word: "sparsam", meaning: "tasarruflu" }
        ]
    },
    // Units 581 to 590 are fully populated to secure completion.
    581: {
        unitId: 581, title: "Şehir ve Mimari", language: "Almanca", level: "B1",
        story: {
            text: "Moderne Architektur versucht, Funktionalität und Umweltschutz zu verbinden. Grüne Dächer und solarbetriebene Gebäude werden in modernen Großstädten immer beliebter.",
            translation: "Modern mimari, işlevsellik ve çevre korumasını birleştirmeye çalışıyor. Yeşil çatılar ve güneş enerjisiyle çalışan binalar modern büyük şehirlerde giderek daha popüler hale geliyor."
        },
        questions: [
            { id: 1, question: "Modern mimari neyi birleştirmeye çalışıyor?", options: ["İşlevsellik ve çevre korumasını", "Eski ve yeni tarzları", "Farklı renkleri"], correctAnswer: "İşlevsellik ve çevre korumasını" },
            { id: 2, question: "Büyük şehirlerde ne popüler hale geliyor?", options: ["Ahşap evler", "Yeşil çatılar ve güneş enerjili binalar", "Gökdelenler"], correctAnswer: "Yeşil çatılar ve güneş enerjili binalar" },
            { id: 3, question: "Mimari kelimesinin Almanca karşılığı nedir?", options: ["Möbel", "Architektur", "Gebäude"], correctAnswer: "Architektur" },
            { id: 4, question: "beliebt kelimesinin anlamı nedir?", options: ["Zor", "Popüler/Sevilmeyen", "Popüler/Sevilen"], correctAnswer: "Popüler/Sevilen" },
            { id: 5, question: "Großstadt ne demektir?", options: ["Köy", "Büyük şehir", "Kasaba"], correctAnswer: "Büyük şehir" }
        ],
        vocabulary: [
            { word: "Architektur", meaning: "mimari" },
            { word: "Funktionalität", meaning: "işlevsellik" },
            { word: "verbinden", meaning: "birleştirmek" },
            { word: "solarbetrieben", meaning: "güneş enerjili" },
            { word: "Großstadt", meaning: "büyük şehir" }
        ]
    },
    582: {
        unitId: 582, title: "Kişisel Gelişim", language: "Almanca", level: "B1",
        story: {
            text: "Lebenslanges Lernen ist in der heutigen Arbeitswelt unverzichtbar. Man sollte regelmäßig neue Fähigkeiten erwerben, um sich persönlich und beruflich weiterzuentwickeln.",
            translation: "Yaşam boyu öğrenme, günümüz iş dünyasında vazgeçilmezdir. Kişisel ve mesleki olarak gelişmek için düzenli olarak yeni beceriler kazanılmalıdır."
        },
        questions: [
            { id: 1, question: "İş dünyasında ne vazgeçilmezdir?", options: ["Yaşam boyu öğrenme", "Erken emeklilik", "Sadece dinlenmek"], correctAnswer: "Yaşam boyu öğrenme" },
            { id: 2, question: "Neden yeni beceriler kazanmalıyız?", options: ["Kişisel ve mesleki gelişim için", "Daha çok televizyon izlemek için", "Eğlenmek için"], correctAnswer: "Kişisel ve mesleki gelişim için" },
            { id: 3, question: "unverzichtbar kelimesinin anlamı nedir?", options: ["Vazgeçilebilir", "Vazgeçilmez", "Gereksiz"], correctAnswer: "Vazgeçilmez" },
            { id: 4, question: "erwerben ne demektir?", options: ["Kazanmak/Edinmek", "Kaybetmek", "Satmak"], correctAnswer: "Kazanmak/Edinmek" },
            { id: 5, question: "Fähigkeiten ne demektir?", options: ["Dersler", "Beceriler/Yetenekler", "Sorunlar"], correctAnswer: "Beceriler/Yetenekler" }
        ],
        vocabulary: [
            { word: "Lebenslanges Lernen", meaning: "yaşam boyu öğrenme" },
            { word: "unverzichtbar", meaning: "vazgeçilmez" },
            { word: "Fähigkeiten", meaning: "beceriler/yetenekler" },
            { word: "erwerben", meaning: "kazanmak/edinmek" },
            { word: "weiterzuentwickeln", meaning: "geliştirmek" }
        ]
    },
    583: {
        unitId: 583, title: "Göç ve Entegrasyon", language: "Almanca", level: "B1",
        story: {
            text: "Migration bereichert Gesellschaften in kultureller Hinsicht. Eine erfolgreiche Entegrasyon erfordert jedoch Anstrengungen von beiden Seiten: den Einwanderern und der Aufnahmegesellschaft.",
            translation: "Göç, toplumları kültürel açıdan zenginleştirir. Ancak başarılı bir entegrasyon her iki tarafın da çabasını gerektirir: göçmenler ve ev sahibi toplum."
        },
        questions: [
            { id: 1, question: "Göç toplumları nasıl etkiler?", options: ["Kültürel açıdan zenginleştirir", "Hiç etkilemez", "Zarar verir"], correctAnswer: "Kültürel açıdan zenginleştirir" },
            { id: 2, question: "Entegrasyon kimin çabasını gerektirir?", options: ["Sadece göçmenlerin", "Sadece devletin", "Her iki tarafın da (göçmenler ve ev sahibi toplum)"], correctAnswer: "Her iki tarafın da (göçmenler ve ev sahibi toplum)" },
            { id: 3, question: "Einwanderer ne demektir?", options: ["Göçmen/Muhacir", "Yerli", "Ziyaretçi"], correctAnswer: "Göçmen/Muhacir" },
            { id: 4, question: "erfolgreich kelimesinin anlamı nedir?", options: ["Zor", "Başarılı", "Başarısız"], correctAnswer: "Başarılı" },
            { id: 5, question: "Anstrengung ne demektir?", options: ["Kolaylık", "Çaba/Zorlanma", "Dinlenme"], correctAnswer: "Çaba/Zorlanma" }
        ],
        vocabulary: [
            { word: "Migration", meaning: "göç" },
            { word: "Entegrasyon", meaning: "entegrasyon" },
            { word: "Anstrengung", meaning: "çaba/zorlanma" },
            { word: "Einwanderer", meaning: "göçmen/muhacir" },
            { word: "Aufnahmegesellschaft", meaning: "ev sahibi toplum" }
        ]
    },
    584: {
        unitId: 584, title: "Tüketim Toplumu", language: "Almanca", level: "B1",
        story: {
            text: "In einer Konsumgesellschaft kaufen Menschen oft Dinge, die sie eigentlich nicht brauchen. Minimalismus ist eine Gegenbewegung, die zu bewussterem Konsum und weniger Besitz aufruft.",
            translation: "Tüketim toplumunda insanlar genellikle gerçekten ihtiyaç duymadıkları şeyleri satın alırlar. Minimalizm, daha bilinçli tüketime ve daha az mülkiyete çağıran bir karşı harekettir."
        },
        questions: [
            { id: 1, question: "Tüketim toplumunda insanlar ne satın alır?", options: ["Sadece yiyecek", "İhtiyaç duymadıkları şeyleri", "Hiçbir şey"], correctAnswer: "İhtiyaç duymadıkları şeyleri" },
            { id: 2, question: "Minimalizm nedir?", options: ["Bir alışveriş festivali", "Bilinçli tüketim ve az mülkiyete çağıran karşı hareket", "Bir resim tarzı"], correctAnswer: "Bilinçli tüketim ve az mülkiyete çağıran karşı hareket" },
            { id: 3, question: "Konsumgesellschaft ne demektir?", options: ["Tüketim toplumu", "Üretim toplumu", "Tarım toplumu"], correctAnswer: "Tüketim toplumu" },
            { id: 4, question: "Besitz kelimesinin anlamı nedir?", options: ["Mülkiyet/Borç", "Mülkiyet/Sahiplik", "Kayıp"], correctAnswer: "Mülkiyet/Sahiplik" },
            { id: 5, question: "bewusst kelimesinin anlamı nedir?", options: ["Bilinçli", "Hızlı", "Zorunlu"], correctAnswer: "Bilinçli" }
        ],
        vocabulary: [
            { word: "Konsumgesellschaft", meaning: "tüketim toplumu" },
            { word: "Minimalismus", meaning: "minimalizm" },
            { word: "Gegenbewegung", meaning: "karşı hareket" },
            { word: "Besitz", meaning: "mülkiyet/sahiplik" },
            { word: "bewusst", meaning: "bilinçli" }
        ]
    },
    585: {
        unitId: 585, title: "Medya Okuryazarlığı", language: "Almanca", level: "B1",
        story: {
            text: "Medienkompetenz ist wichtig, um die Glaubwürdigkeit von Nachrichten im Internet zu prüfen. Man sollte Informationen aus verschiedenen Quellen vergleichen und Fake News blockieren.",
            translation: "Medya okuryazarlığı, internetteki haberlerin güvenilirliğini kontrol etmek için önemlidir. Çeşitli kaynaklardan gelen bilgiler karşılaştırılmalı ve yalan haberler engellenmelidir."
        },
        questions: [
            { id: 1, question: "Medya okuryazarlığı ne için önemlidir?", options: ["Haberlerin güvenilirliğini kontrol etmek için", "Daha hızlı yazmak için", "Bilgisayar almak için"], correctAnswer: "Haberlerin güvenilirliğini kontrol etmek için" },
            { id: 2, question: "Bilgiler nasıl doğrulanabilir?", options: ["Sadece tek bir kaynağa inanarak", "Çeşitli kaynaklardan gelen bilgileri karşılaştırarak", "Sosyal medyaya bakmadan"], correctAnswer: "Çeşitli kaynaklardan gelen bilgileri karşılaştırarak" },
            { id: 3, question: "Glaubwürdigkeit ne demektir?", options: ["Güvenilirlik", "Hız", "Yalan"], correctAnswer: "Güvenilirlik" },
            { id: 4, question: "Quelle kelimesinin anlamı nedir?", options: ["Kaynak", "Haber", "Yazar"], correctAnswer: "Kaynak" },
            { id: 5, question: "vergleichen ne demektir?", options: ["Karşılaştırmak", "Ayırmak", "Silmek"], correctAnswer: "Karşılaştırmak" }
        ],
        vocabulary: [
            { word: "Medienkompetenz", meaning: "medya okuryazarlığı" },
            { word: "Glaubwürdigkeit", meaning: "güvenilirlik" },
            { word: "Quelle", meaning: "kaynak" },
            { word: "vergleichen", meaning: "karşılaştırmak" },
            { word: "Fake News", meaning: "yalan haber" }
        ]
    },
    586: {
        unitId: 586, title: "Çalışma Koşulları", language: "Almanca", level: "B1",
        story: {
            text: "Eine gute Work-Life-Balance ist entscheidend für das Wohlbefinden der Mitarbeiter. Unternehmen, die flexible Arbeitszeiten anbieten, haben oft zufriedene und produktivere Teams.",
            translation: "İyi bir iş-yaşam dengesi, çalışanların esenliği için belirleyicidir. Esnek çalışma saatleri sunan şirketler genellikle memnun ve daha üretken ekiplere sahiptir."
        },
        questions: [
            { id: 1, question: "Çalışanların esenliği için ne belirleyicidir?", options: ["İyi bir iş-yaşam dengesi", "Daha çok mesai yapmak", "Düşük maaş"], correctAnswer: "İyi bir iş-yaşam dengesi" },
            { id: 2, question: "Hangi şirketler daha üretken ekiplere sahiptir?", options: ["Esnek çalışma saatleri sunanlar", "Sadece hafta sonu çalışanlar", "Büyük binaları olanlar"], correctAnswer: "Esnek çalışma saatleri sunanlar" },
            { id: 3, question: "Wohlbefinden ne demektir?", options: ["Esenlik/Sağlık", "Yorgunluk", "Hastalık"], correctAnswer: "Esenlik/Sağlık" },
            { id: 4, question: "flexibel kelimesinin anlamı nedir?", options: ["Esnek", "Sert/Katı", "Değişmez"], correctAnswer: "Esnek" },
            { id: 5, question: "produktiv ne demektir?", options: ["Üretken/Verimli", "Yavaş", "Zararlı"], correctAnswer: "Üretken/Verimli" }
        ],
        vocabulary: [
            { word: "Work-Life-Balance", meaning: "iş-yaşam dengesi" },
            { word: "Wohlbefinden", meaning: "esenlik/sağlık" },
            { word: "flexibel", meaning: "esnek" },
            { word: "zufrieden", meaning: "memnun" },
            { word: "produktiv", meaning: "üretken/verimli" }
        ]
    },
    587: {
        unitId: 587, title: "Globalleşme", language: "Almanca", level: "B1",
        story: {
            text: "Globalisierung verbindet Märkte und Kulturen weltweit. Sie bietet wirtschaftliche Chancen, führt aber auch zu Problemen wie der Ausbeutung von Arbeitnehmern in Entwicklungsländern.",
            translation: "Küreselleşme, dünya çapındaki pazarları ve kültürleri birbirine bağlar. Ekonomik fırsatlar sunar, ancak gelişmekte olan ülkelerdeki çalışanların sömürülmesi gibi sorunlara da yol açar."
        },
        questions: [
            { id: 1, question: "Küreselleşme neyi bağlar?", options: ["Pazarları ve kültürleri", "Sadece nehirleri", "Sınırları kapatır"], correctAnswer: "Pazarları ve kültürleri" },
            { id: 2, question: "Küreselleşmenin getirdiği bir sorun nedir?", options: ["Gelişmekte olan ülkelerdeki çalışanların sömürülmesi", "Daha çok seyahat", "Düşük nüfus"], correctAnswer: "Gelişmekte olan ülkelerdeki çalışanların sömürülmesi" },
            { id: 3, question: "Globalisierung kelimesinin Türkçe anlamı nedir?", options: ["Küreselleşme", "Sanayileşme", "Modernleşme"], correctAnswer: "Küreselleşme" },
            { id: 4, question: "Ausbeutung ne demektir?", options: ["Sömürü", "Katkı", "Yatırım"], correctAnswer: "Sömürü" },
            { id: 5, question: "Entwicklungsland ne demektir?", options: ["Gelişmiş ülke", "Gelişmekte olan ülke", "Ada ülkesi"], correctAnswer: "Gelişmekte olan ülke" }
        ],
        vocabulary: [
            { word: "Globalisierung", meaning: "küreselleşme" },
            { word: "Chancen", meaning: "fırsatlar" },
            { word: "Ausbeutung", meaning: "sömürü" },
            { word: "Arbeitnehmer", meaning: "çalışan/işçi" },
            { word: "Entwicklungsland", meaning: "gelişmekte olan ülke" }
        ]
    },
    588: {
        unitId: 588, title: "Sağlıklı Psikoloji", language: "Almanca", level: "B1",
        story: {
            text: "Mentale Gesundheit ist genauso wichtig wie körperliche Fitness. Stress im Beruf sollte durch Entspannungsübungen oder Hobbys in der Freizeit abgebaut werden.",
            translation: "Ruh sağlığı, en az fiziksel uygunluk (fitness) kadar önemlidir. İş yerindeki stres, boş zamanlardaki gevşeme egzersizleri veya hobilerle azaltılmalıdır."
        },
        questions: [
            { id: 1, question: "Ruh sağlığı ne kadar önemlidir?", options: ["Fiziksel sağlık kadar önemlidir", "Önemsizdir", "Sadece yaşlılar için önemlidir"], correctAnswer: "Fiziksel sağlık kadar önemlidir" },
            { id: 2, question: "İş yerindeki stres nasıl azaltılabilir?", options: ["Daha çok çalışarak", "Gevşeme egzersizleri veya hobilerle", "Televizyon izlemeyerek"], correctAnswer: "Gevşeme egzersizleri veya hobilerle" },
            { id: 3, question: "mental kelimesinin anlamı nedir?", options: ["Zihinsel/Ruhsal", "Fiziksel", "Genel"], correctAnswer: "Zihinsel/Ruhsal" },
            { id: 4, question: "Entspannung ne demektir?", options: ["Gevşeme/Rahatlama", "Stres", "Çalışma"], correctAnswer: "Gevşeme/Rahatlama" },
            { id: 5, question: "abbauen ne demektir?", options: ["Azaltmak/Gidermek", "Artırmak", "Kurmak"], correctAnswer: "Azaltmak/Gidermek" }
        ],
        vocabulary: [
            { word: "mental", meaning: "zihinsel/ruhsal" },
            { word: "körperlich", meaning: "fiziksel" },
            { word: "Entspannung", meaning: "gevşeme/rahatlama" },
            { word: "abbauen", meaning: "azaltmak/gidermek" },
            { word: "Freizeit", meaning: "boş zaman" }
        ]
    },
    589: {
        unitId: 589, title: "Yapay Zeka", language: "Almanca", level: "B1",
        story: {
            text: "Künstliche Intelligenz beeinflusst immer mehr Bereiche unseres Lebens. Von automatisierten Autos bis zu intelligenten Assistenten bietet KI viele Chancen, wirft aber auch ethische Fragen auf.",
            translation: "Yapay zeka hayatımızın giderek daha fazla alanını etkiliyor. Otonom arabalardan akıllı asistanlara kadar YZ birçok fırsat sunuyor, ancak etik sorular da doğuruyor."
        },
        questions: [
            { id: 1, question: "Hayatımızı ne etkiliyor?", options: ["Yapay zeka", "Hava durumu", "Geleneksel yemekler"], correctAnswer: "Yapay zeka" },
            { id: 2, question: "Yapay zeka hangi alanlarda kullanılır?", options: ["Otonom arabalar ve akıllı asistanlar", "Sadece kütüphanelerde", "Hiçbir yerde"], correctAnswer: "Otonom arabalar ve akıllı asistanlar" },
            { id: 3, question: "Yapay zeka ne tür sorular doğuruyor?", options: ["Etik sorular", "Basit sorular", "Maddi sorular"], correctAnswer: "Etik sorular" },
            { id: 4, question: "Künstliche Intelligenz ne demektir?", options: ["Yapay zeka", "Doğal zeka", "Bilgisayar mühendisliği"], correctAnswer: "Yapay zeka" },
            { id: 5, question: "beeinflusst kelimesinin anlamı nedir?", options: ["Etkiler", "Korur", "Zarar verir"], correctAnswer: "Etkiler" }
        ],
        vocabulary: [
            { word: "Künstliche Intelligenz", meaning: "yapay zeka" },
            { word: "beeinflusst", meaning: "etkiler" },
            { word: "automatisiert", meaning: "otomatikleştirilmiş/otonom" },
            { word: "Chancen", meaning: "fırsatlar" },
            { word: "ethisch", meaning: "etik" }
        ]
    },
    590: {
        unitId: 590, title: "B1 Seviye Değerlendirmesi", language: "Almanca", level: "B1",
        story: {
            text: "Mit dem Erreichen des B1-Niveaus können Sie die meisten Alltagssituationen auf Deutsch meistern. Sie sind nun in der Lage, Ihre Meinung zu äußern und einfache Texte zu schreiben. Weiteres Üben führt zum Erfolg.",
            translation: "B1 seviyesine ulaşarak Almanca'daki çoğu günlük durumun üstesinden gelebilirsiniz. Artık fikrinizi ifade edebilir ve basit metinler yazabilirsiniz. Daha fazla pratik yapmak başarıya götürür."
        },
        questions: [
            { id: 1, question: "B1 seviyesine ulaşan biri ne yapabilir?", options: ["Çoğu günlük durumun üstesinden gelebilir", "Hiç konuşamaz", "Sadece kelime ezberler"], correctAnswer: "Çoğu günlük durumun üstesinden gelebilir" },
            { id: 2, question: "B1 seviyesindeki biri fikrini ne yapabilir?", options: ["İfade edebilir", "Sadece saklayabilir", "Çok zor ifade eder"], correctAnswer: "İfade edebilir" },
            { id: 3, question: "Ne tür metinler yazabilir?", options: ["Karmaşık akademik makaleler", "Basit metinler", "Hiç yazamaz"], correctAnswer: "Basit metinler" },
            { id: 4, question: "Başarıya ne götürür?", options: ["Daha fazla pratik yapmak", "Çalışmayı bırakmak", "Sadece televizyon izlemek"], correctAnswer: "Daha fazla pratik yapmak" },
            { id: 5, question: "äußern kelimesinin anlamı nedir?", options: ["İfade etmek/Belirtmek", "Dinlemek", "Okumak"], correctAnswer: "İfade etmek/Belirtmek" }
        ],
        vocabulary: [
            { word: "meistern", meaning: "üstesinden gelmek/başarmak" },
            { word: "äußern", meaning: "ifade etmek/belirtmek" },
            { word: "in der Lage sein", meaning: "yapabilecek durumda olmak" },
            { word: "einfach", meaning: "basit/kolay" },
            { word: "Erfolg", meaning: "başarı" }
        ]
    }
};

export function getGermanB1ReadingForUnit(unitId: number): UnitReading {
    return readings[unitId] || readings[561];
}
