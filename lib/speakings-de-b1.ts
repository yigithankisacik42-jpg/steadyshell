import { UnitSpeaking } from './speakings';

const speakings: { [key: number]: UnitSpeaking } = {
    561: {
        unitId: 561, title: "Alışveriş ve Tüketim Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich kaufe meine Kleidung lieber in kleinen Geschäften vor Ort.", translation: "Kıyafetlerimi yerel küçük dükkanlardan almayı tercih ederim." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das ständige Bestellen im Internet schadet unserer Umwelt.", translation: "İnternetten sürekli sipariş vermek çevremize zarar veriyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man sollte bewusster konsumieren und weniger unnötige Dinge kaufen.", translation: "Daha bilinçli tüketmeli ve daha az gereksiz şey satın almalıyız." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Diese bequeme Methode belastet leider die Natur durch Rücksendungen.", translation: "Bu rahat yöntem maalesef geri gönderimler yoluyla doğaya yük bindiriyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Kaufst du Kleidung lieber online oder im Geschäft?", translation: "Kıyafetleri internetten mi yoksa mağazadan mı almayı tercih edersin?", expectedKeywords: ["lieber", "online", "geschäft", "kaufen"] }
        ]
    },
    562: {
        unitId: 562, title: "Kişisel İlişkiler Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein echter Freund steht dir auch in schwierigen Zeiten beiseite.", translation: "Gerçek bir dost, zor zamanlarında da senin yanında durur." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir können stundenlang miteinander sprechen und lachen.", translation: "Saatlerce birbirimizle konuşabilir ve gülebiliriz." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Soziale Medien bieten viele Kontakte, aber wenig Tiefe.", translation: "Sosyal medya birçok bağlantı sunar, ancak az derinlik sunar." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Vertrauen ist die wichtigste Grundlage einer guten Freundschaft.", translation: "Güven, iyi bir dostluğun en önemli temelidir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was macht einen guten Freund aus?", translation: "İyi bir dostu ne tanımlar?", expectedKeywords: ["freund", "helfen", "vertrauen", "gut"] }
        ]
    },
    563: {
        unitId: 563, title: "Gelecek Planları Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Nach dem Abitur möchte ich eine Ausbildung machen.", translation: "Abitur'dan sonra bir mesleki eğitim yapmak istiyorum." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein Auslandsjahr hilft dabei, sich selbst kennenzulernen.", translation: "Yurt dışında geçirilen bir yıl, kendini tanımaya yardımcı olur." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich bin noch unsicher, was meine berufliche Zukunft betrifft.", translation: "Mesleki geleceğim konusunda henüz kararsızım." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist mein Ziel, an einer großen Universität zu studieren.", translation: "Büyük bir üniversitede okumak benim hedefimdir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was möchtest du in der Zukunft machen?", translation: "Gelecekte ne yapmak istersin?", expectedKeywords: ["möchte", "zukunft", "arbeiten", "studieren"] }
        ]
    },
    564: {
        unitId: 564, title: "Teknoloji ve Toplum Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Smartphone ist ein unverzichtbarer Teil unseres Alltags geworden.", translation: "Akıllı telefon, günlük yaşamımızın vazgeçilmez bir parçası haline geldi." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Zu viel Bildschirmzeit schadet der Gesundheit der Augen.", translation: "Çok fazla ekran süresi göz sağlığına zarar veriyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Technologie erleichtert die Kommunikation über weite Distanzen.", translation: "Teknoloji, uzak mesafeler arasındaki iletişimi kolaylaştırıyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sollten öfter eine digitale Pause einlegen.", translation: "Daha sık dijital mola vermeliyiz." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie viel Zeit verbringst du täglich am Handy?", translation: "Günde ne kadar zaman geçirirsin telefonda?", expectedKeywords: ["stunden", "handy", "täglich", "zeit"] }
        ]
    },
    565: {
        unitId: 565, title: "Çevre Koruma Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir müssen Plastikmüll im Alltag so weit wie möglich reduzieren.", translation: "Günlük yaşamda plastik atığı olabildiğince azaltmalıyız." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Öffentliche Verkehrsmittel sind eine umweltfreundliche Alternative.", translation: "Toplu taşıma araçları çevre dostu bir alternatiftir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kleine Gewohnheiten können einen großen Beitrag zum Klimaschutz leisten.", translation: "Küçük alışkanlıklar iklim korumasına büyük katkı sağlayabilir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Mülltrennung ist der erste Schritt zur Wiederverwertung.", translation: "Çöpü ayırmak, geri dönüşümün ilk adımıdır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was tust du für den Umweltschutz?", translation: "Çevre koruması için ne yapıyorsun?", expectedKeywords: ["müll", "trennen", "wasser", "sparen", "umwelt"] }
        ]
    },
    // Populate remaining units 566 to 590:
    566: {
        unitId: 566, title: "Sağlıklı Yaşam ve Spor Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gesunde Ernährung stärkt das Immunsystem des Körpers.", translation: "Sağlıklı beslenme vücudun bağışıklık sistemini güçlendirir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Regelmäßige Bewegung hält uns im Alter fit.", translation: "Düzenli hareket bizi yaşlılıkta zinde tutar." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Schon dreißig Minuten Gehen pro Tag senkt das Krankheitsrisiko.", translation: "Günde sadece otuz dakika yürümek bile hastalık riskini azaltır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sollten versuchen, weniger verarbeitete Lebensmittel zu essen.", translation: "Daha az işlenmiş gıda yemeye çalışmalıyız." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie oft treibst du Sport?", expectedKeywords: ["sport", "treiben", "woche", "mal"], translation: "Ne sıklıkta spor yaparsın?" }
        ]
    },
    567: {
        unitId: 567, title: "Medya ve Haberler Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Täglich hören wir Nachrichten über die globale Politik.", translation: "Her gün küresel politika hakkında haberler duyuyoruz." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist oft schwer, wahre von falschen Informationen zu trennen.", translation: "Doğru bilgiyi yanlıştan ayırmak genellikle zordur." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eine kritische Haltung gegenüber Medien ist sehr wichtig.", translation: "Medya karşısında eleştirel bir duruş çok önemlidir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Fake News verbreiten sich rasant im Internet.", translation: "Yalan haberler internette hızla yayılıyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Woher liest du deine Nachrichten?", expectedKeywords: ["zeitung", "nachrichten", "internet", "lesen"], translation: "Haberlerini nereden okursun?" }
        ]
    },
    568: {
        unitId: 568, title: "Sanat ve Kültür Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kunst bereichert unser tägliches Leben ungemein.", translation: "Sanat günlük hayatımızı fevkalade zenginleştirir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Museen bieten eine Brücke zu unserer Geschichte.", translation: "Müzeler tarihimize bir köprü sunar." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Viele freie Künstler kämpfen um das wirtschaftliche Überleben.", translation: "Birçok serbest sanatçı ekonomik olarak hayatta kalma mücadelesi veriyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kulturelle Veranstaltungen machen eine Stadt attraktiver.", translation: "Kültürel etkinlikler bir şehri daha çekici kılar." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Gehst du gerne ins Museum?", expectedKeywords: ["ja", "nein", "museum", "gerne", "gehen"], translation: "Müzeye gitmeyi sever misin?" }
        ]
    },
    569: {
        unitId: 569, title: "Eğitim Sistemi Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das deutsche Bildungssystem ist in Bundesländern unterschiedlich strukturiert.", translation: "Alman eğitim sistemi eyaletlerde farklı yapılandırılmıştır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Abitur berechtigt zum Studium an einer Universität.", translation: "Abitur, üniversitede okumaya hak kazandırır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eine praktische Ausbildung ist oft eine hervorragende Alternative.", translation: "Pratik bir mesleki eğitim genellikle mükemmel bir alternatiftir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Bildung sollte für alle Kinder kostenlos zugänglich sein.", translation: "Eğitim tüm çocuklar için ücretsiz erişilebilir olmalıdır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Möchtest du studieren oder eine Ausbildung machen?", expectedKeywords: ["studieren", "ausbildung", "lieber", "machen"], translation: "Okumak mı istersin yoksa mesleki eğitim yapmak mı?" }
        ]
    },
    570: {
        unitId: 570, title: "İş Dünyası Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Digitalisierung verändert rasant unsere Arbeitsbedingungen.", translation: "Dijitalleşme çalışma koşullarımızı hızla değiştiriyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Homeoffice spart uns jeden Tag wertvolle Zeit.", translation: "Evden çalışmak bize her gün değerli zaman kazandırıyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man braucht viel Selbstdisziplin, um zu Hause effektiv zu arbeiten.", translation: "Evde etkili çalışmak için çok fazla öz disipline ihtiyaç vardır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eine klare Trennung zwischen Job und Freizeit ist wichtig.", translation: "İş ve boş zaman arasında net bir ayrım önemlidir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Arbeitest du lieber von zu Hause aus?", expectedKeywords: ["lieber", "hause", "homeoffice", "büro"], translation: "Evden çalışmayı mı tercih edersin?" }
        ]
    },
    // Populate remaining units up to 590:
    571: {
        unitId: 571, title: "Çevre ve Doğa Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sollten die natürlichen Ressourcen unseres Planeten schützen.", translation: "Gezegenimizin doğal kaynaklarını korumalıyız." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mülltrennung hilft, wertvolle Stoffe wiederzuverwerten.", translation: "Çöpü ayırmak, değerli maddelerin geri dönüştürülmesine yardımcı olur." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Jeder kann im Alltag auf Plastiktüten verzichten.", translation: "Herkes günlük yaşamda plastik poşet kullanmaktan vazgeçebilir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Umweltfreundliches Verhalten schont das Ökosystem.", translation: "Çevre dostu davranış ekosistemi korur." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Trennst du deinen Müll zu Hause?", expectedKeywords: ["ja", "nein", "müll", "trenne"], translation: "Evde çöpünü ayırıyor musun?" }
        ]
    },
    572: {
        unitId: 572, title: "Girişimcilik Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eine Firmengründung verlangt Mut und einen guten Plan.", translation: "Şirket kurmak cesaret ve iyi bir plan gerektirir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Viele Start-ups scheitern an fehlendem Kapital.", translation: "Birçok start-up sermaye yetersizliğinden başarısız oluyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Erfolg ist das Resultat von Ausdauer und Fleiß.", translation: "Başarı, sabır ve çalışkanlığın sonucudur." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man muss aus Fehlern lernen, um besser zu werden.", translation: "Daha iyi olmak için hatalardan öğrenmek gerekir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Möchtest du eine eigene Firma gründen?", expectedKeywords: ["ja", "nein", "eigene", "firma", "gründen"], translation: "Kendi şirketini kurmak ister misin?" }
        ]
    },
    573: {
        unitId: 573, title: "Sağlık ve Hastane Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die medizinische Versorgung ist in Großstädten meist besser.", translation: "Tıbbi bakım büyük şehirlerde genellikle daha iyidir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Jeder Bürger muss in einer Krankenkasse versichert sein.", translation: "Her vatandaş bir sağlık sigortasında sigortalı olmak zorundadır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Im Notfall zählt jede Minute für den Patienten.", translation: "Acil durumda hasta için her dakika önemlidir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Er muss Medikamente nach Vorschrift des Arztes einnehmen.", translation: "İlaçları doktorun talimatına göre almalıdır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Warst du schon mal im Krankenhaus?", expectedKeywords: ["ja", "nein", "krankenhaus", "war"], translation: "Hiç hastanede bulundun mu?" }
        ]
    },
    574: {
        unitId: 574, title: "Gelenekler Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Traditionen verbinden die Generationen einer Familie.", translation: "Gelenekler bir ailenin nesillerini birbirine bağlar." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir schmücken das Haus festlich für Weihnachten.", translation: "Noel için evi şenlikli bir şekilde süslüyoruz." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Jedes Bundesland hat seine eigenen regionalen Feste.", translation: "Her eyaletin kendi bölgesel festivalleri vardır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist ein alter Brauch, den man pflegen sollte.", translation: "Bu, özen gösterilmesi gereken eski bir adettir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Feierst du gerne Weihnachten?", expectedKeywords: ["ja", "nein", "weihnachten", "feiere"], translation: "Noel'i kutlamayı sever misin?" }
        ]
    },
    575: {
        unitId: 575, title: "Seyahat Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Reisen hilft, neue Kulturen und Sitten zu verstehen.", translation: "Seyahat etmek yeni kültürleri ve adetleri anlamaya yardımcı olur." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Nachhaltiger Tourismus schützt die Natur der Ferienorte.", translation: "Sürdürülebilir turizm tatil yerlerinin doğasını korur." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich suche nach einer umweltfreundlichen Unterkunft.", translation: "Çevre dostu bir konaklama yeri arıyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Zugfahrt war sehr entspannend und komfortabel.", translation: "Tren yolculuğu çok dinlendirici ve konforluydu." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wohin reist du am liebsten?", expectedKeywords: ["liebsten", "türkei", "deutschland", "reise", "meer"], translation: "En çok nereye seyahat edersin?" }
        ]
    },
    576: {
        unitId: 576, title: "Bilim Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die wissenschaftliche Forschung macht große Fortschritte.", translation: "Bilimsel araştırma büyük ilerlemeler kaydediyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Viele Krankheiten können heute erfolgreich geheilt werden.", translation: "Birçok hastalık bugün başarıyla tedavi edilebiliyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Saubere Energiequellen sind die Zukunft unseres Planeten.", translation: "Temiz enerji kaynakları gezegenimizin geleceğidir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eine logische Theorie muss durch Daten bewiesen werden.", translation: "Mantıklı bir teori verilerle kanıtlanmalıdır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Interessierst du dich für Naturwissenschaften?", expectedKeywords: ["ja", "nein", "wissenschaft", "interessiere"], translation: "Doğa bilimleriyle ilgilenir misin?" }
        ]
    },
    577: {
        unitId: 577, title: "Sosyal Sorumluluk Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ehrenamtliche Arbeit ist unbezahlbar für die Gesellschaft.", translation: "Gönüllü çalışma toplum için paha biçilemezdir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Viele Menschen helfen alten Personen in ihrer Nachbarschaft.", translation: "Birçok insan mahallelerindeki yaşlı insanlara yardım ediyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich spende regelmäßig Kleidung an bedürftige Familien.", translation: "Düzenli olarak ihtiyaç sahibi ailelere kıyafet bağışlıyorum." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sich sozial zu engagieren macht das Leben sinnvoller.", translation: "Sosyal olarak gönüllü olmak hayatı daha anlamlı kılar." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Möchtest du ehrenamtlich arbeiten?", expectedKeywords: ["ja", "nein", "ehrenamtlich", "arbeiten", "helfen"], translation: "Gönüllü çalışmak ister misin?" }
        ]
    },
    578: {
        unitId: 578, title: "Çocukluk Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Meine Kindheit war voller glücklicher Momente im Freien.", translation: "Çocukluğum açık havada mutlu anlarla doluydu." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein Kind braucht Liebe und eine sichere Umgebung.", translation: "Bir çocuğun sevgiye ve güvenli bir ortama ihtiyacı vardır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich habe früher viel mit meinen Freunden draußen gespielt.", translation: "Eskiden arkadaşlarımla dışarıda çok oynardım." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Schule prägt unsere Entwicklung in hohem Maße.", translation: "Okul gelişimimizi büyük ölçüde şekillendirir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hattest du eine schöne Kindheit?", expectedKeywords: ["ja", "nein", "kindheit", "schöne", "war"], translation: "Güzel bir çocukluğun oldu mu?" }
        ]
    },
    579: {
        unitId: 579, title: "Tarih Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wer die Geschichte ignoriert, kann die Gegenwart nicht verstehen.", translation: "Tarihi görmezden gelen, şimdiki zamanı anlayamaz." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Historische Museen sind sehr lehrreich für Schulklassen.", translation: "Tarih müzeleri okul sınıfları için çok öğreticidir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man sollte die Fehler der Vergangenheit nicht wiederholen.", translation: "Geçmişin hatalarını tekrarlamamak gerekir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das historische Gebäude wurde prachtvoll restauriert.", translation: "Tarihi bina ihtişamlı bir şekilde restore edildi." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Liest du gerne Geschichtsbücher?", expectedKeywords: ["ja", "nein", "geschichte", "bücher", "lesen"], translation: "Tarih kitapları okumayı sever misin?" }
        ]
    },
    580: {
        unitId: 580, title: "Doğal Kaynaklar Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Trinkwasser ist die wertvollste Ressource auf Erden.", translation: "İçme suyu yeryüzündeki en değerli kaynaktır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Viele Länder leiden bereits unter akutem Wassermangel.", translation: "Birçok ülke şimdiden şiddetli su kıtlığından muzdariptir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir müssen Wasser im Haushalt viel sparsamer nutzen.", translation: "Ev işlerinde suyu çok daha tasarruflu kullanmalıyız." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Dürrezeiten gefährden die weltweite Landwirtschaft.", translation: "Kuraklık dönemleri dünya çapındaki tarımı tehlikeye atıyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sparst du Wasser im Alltag?", expectedKeywords: ["ja", "wasser", "sparen", "dusche", "alltag"], translation: "Günlük yaşamda su tasarrufu yapıyor musun?" }
        ]
    },
    581: {
        unitId: 581, title: "Mimari Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die moderne Architektur nutzt oft umweltschonende Materialien.", translation: "Modern mimari sıklıkla çevre dostu malzemeler kullanır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Solarzellen auf dem Dach erzeugen sauberen Strom.", translation: "Çatıdaki güneş panelleri temiz elektrik üretir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Grüne Dächer verbessern das Klima in Großstädten.", translation: "Yeşil çatılar büyük şehirlerdeki iklimi iyileştirir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das historische Rathaus zieht viele Touristen an.", translation: "Tarihi belediye binası birçok turisti çeker." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Gefällt dir moderne Architektur?", expectedKeywords: ["ja", "nein", "moderne", "architektur", "gefällt"], translation: "Modern mimari hoşuna gidiyor mu?" }
        ]
    },
    582: {
        unitId: 582, title: "Kişisel Gelişim Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Lebenslanges Lernen hält das Gehirn geistig aktiv.", translation: "Yaşam boyu öğrenme beyni zihinsel olarak aktif tutar." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ich besuche einen Kurs, um meine Sprachkenntnisse zu verbessern.", translation: "Dil becerilerimi geliştirmek için bir kursa gidiyorum." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Neue Herausforderungen helfen uns, innerlich zu wachsen.", translation: "Yeni zorluklar içsel olarak büyümemize yardımcı olur." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es ist nie zu spät, ein neues Hobby zu beginnen.", translation: "Yeni bir hobiye başlamak için asla geç değildir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welche neue Sprache möchtest du lernen?", expectedKeywords: ["deutsch", "englisch", "lernen", "möchte", "sprache"], translation: "Hangi yeni dili öğrenmek istersin?" }
        ]
    },
    583: {
        unitId: 583, title: "Entegrasyon Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Erlernen der Landessprache ist der wichtigste Schritt zur Integration.", translation: "Ülke dilini öğrenmek, entegrasyonun en önemli adımıdır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kulturelle Unterschiede sollten uns nicht trennen, sondern bereichern.", translation: "Kültürel farklılıklar bizi ayırmamalı, aksine zenginleştirmelidir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein respektvoller Umgang baut Vorurteile ab.", translation: "Saygılı bir iletişim önyargıları yıkar." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir heißen alle neuen Mitbürger herzlich willkommen.", translation: "Tüm yeni vatandaşlarımızı gönülden selamlıyoruz." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist Deutsch lernen schwer für dich?", expectedKeywords: ["ja", "nein", "deutsch", "schwer", "lernen"], translation: "Almanca öğrenmek senin için zor mu?" }
        ]
    },
    584: {
        unitId: 584, title: "Tüketim Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "In einer Konsumgesellschaft steht der Besitz oft im Mittelpunkt.", translation: "Tüketim toplumunda mülkiyet genellikle merkezde yer alır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Minimalismus bedeutet, sich auf das Wesentliche zu konzentrieren.", translation: "Minimalizm, esas olana odaklanmak demektir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man spart viel Geld, wenn man bewusster einkauft.", translation: "Daha bilinçli alışveriş yapıldığında çok para tasarruf edilir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Weniger Besitz bedeutet oft auch weniger Stress im Leben.", translation: "Daha az mülkiyet genellikle hayatta daha az stres demektir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Magst du minimalistischen Lebensstil?", expectedKeywords: ["ja", "nein", "minimalismus", "lebensstil", "mag"], translation: "Minimalist yaşam tarzını sever misin?" }
        ]
    },
    585: {
        unitId: 585, title: "Medya Okuryazarlığı Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Prüfen Sie immer die Quelle einer Information im Internet.", translation: "İnternetteki bir bilginin kaynağını her zaman kontrol edin." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Glaubwürdige Nachrichten basieren auf echten Fakten.", translation: "Güvenilir haberler gerçek olgulara dayanır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man sollte Fake News nicht ungeprüft weiterleiten.", translation: "Yalan haberleri kontrol etmeden başkasına iletmemek gerekir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der kritische Umgang mit den Medien schützt uns vor Manipulation.", translation: "Medya ile eleştirel ilişki bizi manipülasyondan korur." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Glaubst du allen Nachrichten im Internet?", expectedKeywords: ["nein", "nicht", "alle", "nachrichten", "glauben"], translation: "İnternetteki tüm haberlere inanır mısın?" }
        ]
    },
    586: {
        unitId: 586, title: "Çalışma Koşulları Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eine ausgeglichene Work-Life-Balance ist extrem wichtig.", translation: "Dengeli bir iş-yaşam dengesi son derece önemlidir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gleitzeit ermöglicht es, den Arbeitstag flexibler zu gestalten.", translation: "Esnek mesai, iş gününü daha esnek biçimlendirmeyi mümkün kılar." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Zufriedene Mitarbeiter leisten qualitativ bessere Arbeit.", translation: "Memnun çalışanlar niteliksel olarak daha iyi iş çıkarır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Stress am Arbeitsplatz sollte durch Pausen reduziert werden.", translation: "İş yerindeki stres molalarla azaltılmalıdır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hast du flexible Arbeitszeiten?", expectedKeywords: ["ja", "nein", "flexible", "arbeitszeiten", "habe"], translation: "Esnek çalışma saatlerin var mı?" }
        ]
    },
    587: {
        unitId: 587, title: "Globalleşme Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Globalisierung vernetzt Länder über große Distanzen hinweg.", translation: "Küreselleşme, ülkeleri uzak mesafeler boyunca birbirine bağlar." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sie bringt wirtschaftliche Vorteile, aber auch soziale Probleme.", translation: "Ekonomik faydalar getirir, ancak sosyal sorunlar da getirir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir sollten faire Löhne für Arbeiter weltweit fordern.", translation: "Dünya çapındaki işçiler için adil ücretler talep etmeliyiz." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Konsumenten können durch bewussten Kauf fairen Handel unterstützen.", translation: "Tüketiciler, bilinçli satın alma yoluyla adil ticareti destekleyebilir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Kaufst du Produkte aus fairem Handel?", expectedKeywords: ["ja", "nein", "produkte", "fairem", "handel", "kaufe"], translation: "Adil ticaretten gelen ürünleri satın alır mısın?" }
        ]
    },
    588: {
        unitId: 588, title: "Sağlıklı Psikoloji Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mentale Gesundheit ist ein wichtiges Thema unserer Gesellschaft.", translation: "Ruh sağlığı, toplumumuzun önemli bir konusudur." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Entspannungsübungen helfen, den Alltagsstress abzubauen.", translation: "Gevşeme egzersizleri günlük stresi azaltmaya yardımcı olur." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gesunder Schlaf ist unverzichtbar für die Regeneration des Körpers.", translation: "Sağlıklı uyku, vücudun yenilenmesi için vazgeçilmezdir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sprechen Sie mit Freunden, wenn Sie Sorgen haben.", translation: "Endişeleriniz olduğunda arkadaşlarınızla konuşun." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie baust du Stress ab?", expectedKeywords: ["sport", "musik", "hobbys", "stress", "abbauen"], translation: "Stresi nasıl azaltırsın?" }
        ]
    },
    589: {
        unitId: 589, title: "Yapay Zeka Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Künstliche Intelligenz wird viele Berufe in Zukunft verändern.", translation: "Yapay zeka gelecekte birçok mesleği değiştirecek." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Intelligente Assistenten beantworten Fragen im Handumdrehen.", translation: "Akıllı asistanlar soruları bir göz açıp kapayıncaya kadar yanıtlıyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es gibt viele ethische Bedenken bezüglich selbstfahrender Autos.", translation: "Sürücüsüz arabalarla ilgili birçok etik endişe var." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Technologie entwickelt sich rasanter als je zuvor.", translation: "Teknoloji her zamankinden daha hızlı gelişiyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Nutzt du künstliche Intelligenz im Alltag?", expectedKeywords: ["ja", "nein", "künstliche", "intelligenz", "nutze", "alltag"], translation: "Günlük yaşamda yapay zeka kullanıyor musun?" }
        ]
    },
    590: {
        unitId: 590, title: "B1 Değerlendirme Pratiği", language: "Almanca", level: "B1",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mit dem B1-Zertifikat haben Sie solide Deutschkenntnisse bewiesen.", translation: "B1 sertifikası ile sağlam Almanca bilgisine sahip olduğunuzu kanıtladınız." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sie können nun problemlos über persönliche Interessen sprechen.", translation: "Artık kişisel ilgi alanlarınız hakkında sorunsuzca konuşabilirsiniz." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Schreiben von formellen E-Mails fällt Ihnen viel leichter.", translation: "Resmi e-postalar yazmak size çok daha kolay geliyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Lernen Sie fleißig weiter, um das nächste Level zu erreichen.", translation: "Bir sonraki seviyeye ulaşmak için gayretle çalışmaya devam edin." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Bist du stolz auf dein B1 Deutsch?", expectedKeywords: ["ja", "nein", "stolz", "deutsch", "b1"], translation: "B1 Almancanla gurur duyuyor musun?" }
        ]
    }
};

export function getGermanB1SpeakingForUnit(unitId: number): UnitSpeaking {
    return speakings[unitId] || speakings[561];
}
