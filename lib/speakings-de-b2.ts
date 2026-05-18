import { UnitSpeaking } from './speakings';

const speakings: { [key: number]: UnitSpeaking } = {
    591: {
        unitId: 591, title: "Küreselleşme ve Sürdürülebilirlik Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Globalisierung führt zu gravierenden ökologischen Konsequenzen.", translation: "Küreselleşme ciddi ekolojik sonuçlara yol açıyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Multinationale Konzerne müssen nachhaltige Lieferketten etablieren.", translation: "Çok uluslu şirketler sürdürülebilir tedarik zincirleri kurmak zorundadır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wirtschaftliche Interessen kollidieren oft mit den Zielen des Umweltschutzes.", translation: "Ekonomik çıkarlar genellikle çevre koruma hedefleriyle çakışıyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein bewusster Konsum kann den globalen CO2-Ausstoß erheblich senken.", translation: "Bilinçli bir tüketim, küresel karbondioksit emisyonunu önemli ölçüde azaltabilir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sollten Regierungen Gesetze gegen umweltschädliche Firmen verschärfen?", translation: "Hükümetler çevreye zarar veren firmalara karşı yasaları sıkılaştırmalı mı?", expectedKeywords: ["ja", "nein", "gesetze", "verschärfen", "umwelt", "firmen"] }
        ]
    },
    592: {
        unitId: 592, title: "Modern Toplumda Aile Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Vielfalt der Familienmodelle bereichert unser gesellschaftliches Zusammenleben.", translation: "Aile modellerinin çeşitliliği toplumsal birlikte yaşamımızı zenginleştiriyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Patchworkfamilien und Alleinerziehende stehen vor spezifischen rechtlichen Hürden.", translation: "Yama aileler ve tek ebeveynler, kendilerine özgü yasal engellerle karşı karşıyadır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Vereinbarkeit von Familie und Beruf bleibt eine große Herausforderung.", translation: "Aile ve mesleğin bağdaştırılabilirliği büyük bir zorluk olmaya devam ediyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kinderlose Paare entscheiden sich oft ganz bewusst für diesen Lebensentwurf.", translation: "Çocuksuz çiftler genellikle tamamen bilinçli olarak bu yaşam tasarımını tercih ediyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sind moderne Familienformen in deiner Heimat anerkannt?", translation: "Memleketinde modern aile biçimleri kabul görüyor mu?", expectedKeywords: ["ja", "nein", "familienformen", "anerkannt", "gesellschaft"] }
        ]
    },
    593: {
        unitId: 593, title: "Çalışma Hayatının Geleceği Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die künstliche Intelligenz revolutioniert den modernen Arbeitsmarkt im Eiltempo.", translation: "Yapay zeka, modern iş piyasasını jet hızıyla devrimcileştiriyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kreative und soziale Kompetenzen sind durch Maschinen schwer ersetzbar.", translation: "Yaratıcı ve sosyal becerilerin makinelerle ikame edilmesi zordur." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Lebenslanges Lernen ist eine Grundvoraussetzung für beruflichen Erfolg.", translation: "Yaşam boyu öğrenme, mesleki başarı için temel bir ön koşuldur." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Monotone Tätigkeiten werden in naher Zukunft komplett automatisiert.", translation: "Monoton faaliyetler yakın gelecekte tamamen otomatikleştirilecek." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wird KI in Zukunft deinen zukünftigen Beruf ersetzen?", translation: "Yapay zeka gelecekte senin müstakbel mesleğinin yerini alacak mı?", expectedKeywords: ["ja", "nein", "beruf", "ki", "ersetzen", "glaube"] }
        ]
    },
    594: {
        unitId: 594, title: "Çevre Kirliliği ve Plastik Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mikroplastik stellt eine unsichtbare Gefahr für die marine Fauna dar.", translation: "Mikroplastik deniz faunası için görünmez bir tehlike oluşturuyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Über die Nahrungskette gelangen toxische Partikel in den menschlichen Körper.", translation: "Gıda zinciri yoluyla toksik partiküller insan vücuduna ulaşıyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Biologisch abbaubare Kunststoffe könnten das globale Plastikproblem mildern.", translation: "Biyolojik olarak parçalanabilir plastikler küresel plastik sorununu hafifletebilir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir müssen strenge Verbote für Einwegplastik auf internationaler Ebene einführen.", translation: "Uluslararası düzeyde tek kullanımlık plastik için katı yasaklar getirmeliyiz." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was sollte man gegen die Verschmutzung der Meere tun?", translation: "Denizlerin kirlenmesine karşı ne yapılmalıdır?", expectedKeywords: ["plastik", "meere", "verbieten", "reduzieren", "reinigen"] }
        ]
    },
    595: {
        unitId: 595, title: "Çok Dillilik Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mehrsprachigkeit ist in einer vernetzten Welt ein entscheidender Wettbewerbsvorteil.", translation: "Çok dillilik, birbirine bağlı bir dünyada belirleyici bir rekabet avantajıdır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das bilinguale Aufwachsen fördert die kognitive Flexibilität des Gehirns.", translation: "Çift dilli büyümek beynin bilişsel esnekliğini destekler." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Es erleichtert den interkulturellen Austausch auf beruflicher Ebene.", translation: "Mesleki düzeyde kültürlerarası alışverişi kolaylaştırır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sprachen öffnen uns den Zugang zu neuen Denkweisen und Kulturen.", translation: "Diller bize yeni düşünce tarzlarına ve kültürlere erişim sağlar." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welche Vorteile hat das Sprechen mehrerer Sprachen?", translation: "Birden fazla dil konuşmanın ne gibi avantajları vardır?", expectedKeywords: ["vorteile", "sprachen", "kognitiv", "beruf", "kommunikation"] }
        ]
    },
    // Populate remaining units up to 620:
    596: {
        unitId: 596, title: "Bilim Etiği Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Gentechnik wirft komplexe ethische und moralische Probleme auf.", translation: "Gen mühendisliği karmaşık etik ve ahlaki sorunlar doğuruyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wissenschaftler müssen die Grenzen der Menschenwürde stets respektieren.", translation: "Bilim insanları insan onurunun sınırlarına her zaman saygı duymalıdır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Forschung darf nicht ausschließlich ökonomischen Interessen dienen.", translation: "Araştırma, sadece ve sadece ekonomik çıkarlara hizmet etmemelidir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein Verbot des Klonens von Menschen ist international fast unumstritten.", translation: "İnsan klonlanmasının yasaklanması uluslararası düzeyde neredeyse tartışmasızdır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sollte die Wissenschaft Grenzen haben?", expectedKeywords: ["ja", "nein", "wissenschaft", "grenzen", "respektieren"], translation: "Bilimin sınırları olmalı mı?" }
        ]
    },
    597: {
        unitId: 597, title: "Yapay Zeka ve Etik Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Intelligente Algorithmen spiegeln leider oft gesellschaftliche Vorurteile wider.", translation: "Akıllı algoritmalar ne yazık ki genellikle toplumsal önyargıları yansıtıyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Transparenz von KI-Entscheidungen ist eine dringende Notwendigkeit.", translation: "YZ kararlarının şeffaflığı acil bir gerekliliktir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir benötigen klare rechtliche Rahmenbedingungen für den Einsatz von KI.", translation: "YZ kullanımı için net yasal çerçeve koşullarına ihtiyacımız var." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Autonomie des Menschen muss bei jeder Technologie gewahrt bleiben.", translation: "İnsanın özerkliği her teknolojide korunmalıdır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie kann man KI-Systeme gerechter machen?", expectedKeywords: ["algorithmen", "transparent", "gerechter", "daten", "kontrollieren"], translation: "YZ sistemleri nasıl daha adil hale getirilebilir?" }
        ]
    },
    598: {
        unitId: 598, title: "Ekonomik Krizler Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Inflation verringert die Kaufkraft der arbeitenden Bevölkerung.", translation: "Enflasyon çalışan nüfusun satın alma gücünü azaltıyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Finanzkrisen zeigen die Instabilität des unregulierten Kapitalismus.", translation: "Finansal krizler, düzenlenmemiş kapitalizmin istikrarsızlığını gösteriyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Kluft zwischen Arm und Reich vergrößert sich in Krisenzeiten.", translation: "Zengin ve fakir arasındaki uçurum kriz zamanlarında büyüyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Staatliche Rettungspakete belasten oft die zukünftigen Generationen.", translation: "Devletin kurtarma paketleri genellikle gelecek nesillere yük bindiriyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Welche Maßnahmen helfen gegen eine Wirtschaftskrise?", expectedKeywords: ["krize", "wirtschaft", "staat", "helfen", "sparen", "investieren"], translation: "Ekonomik krize karşı hangi önlemler yardımcı olur?" }
        ]
    },
    599: {
        unitId: 599, title: "Tıpta Yeni Teknolojiler Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Telemedizin revolutioniert die medizinische Versorgung auf dem Land.", translation: "Tele-tıp kırsal kesimdeki tıbbi bakımı devrimcileştiriyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Roboter können Chirurgen bei hochkomplexen Operationen unterstützen.", translation: "Robotlar cerrahlara son derece karmaşık ameliyatlarda destek olabilir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Datenschutz von Patientendaten hat oberste Priorität.", translation: "Hasta verilerinin korunması en yüksek önceliğe sahiptir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die persönliche Empathie eines Arztes kann keine KI ersetzen.", translation: "Bir doktorun kişisel empatisinin yerini hiçbir YZ alamaz." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Würdest du dich von einer KI operieren lassen?", expectedKeywords: ["ja", "nein", "ki", "operieren", "arzt", "vertrauen"], translation: "Bir YZ tarafından ameliyat edilmeyi kabul eder miydin?" }
        ]
    },
    600: {
        unitId: 600, title: "Finansal Piyasalar Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Volatilität von Kryptowährungen schreckt konservative Anleger ab.", translation: "Kripto paraların oynaklığı, muhafazakar yatırımcıları korkutuyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Digitale Vermögenswerte gewinnen an den Börsen stetig an Relevanz.", translation: "Dijital varlıklar borsalarda sürekli geçerlilik kazanıyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Viele Spekulanten hoffen auf extrem schnelle Gewinne am Markt.", translation: "Birçok spekülatör piyasada son derece hızlı kazançlar elde etmeyi umuyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Zentralbanken planen die Einführung eigener digitaler Währungen.", translation: "Merkez bankaları kendi dijital para birimlerini piyasaya sürmeyi planlıyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sind Kryptowährungen die Zukunft des Geldes?", expectedKeywords: ["ja", "nein", "kryptowährungen", "zukunft", "geld"], translation: "Kripto paralar paranın geleceği mi?" }
        ]
    },
    601: {
        unitId: 601, title: "Sanat ve Modernizm Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die moderne Kunst bricht bewusst mit den klassischen Sehgewohnheiten.", translation: "Modern sanat, geleneksel görme alışkanlıklarından bilinçli olarak kopar." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Provokation ist oft ein legitimes Mittel des künstlerischen Ausdrucks.", translation: "Provokasyon genellikle sanatsal ifadenin meşru bir aracıdır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Interpretation eines Kunstwerks liegt im Auge des Betrachters.", translation: "Bir sanat eserinin yorumlanması izleyicinin gözündedir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Museen für zeitgenössische Kunst verzeichnen steigende Besucherzahlen.", translation: "Çağdaş sanat müzeleri artan ziyaretçi sayıları kaydediyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was bedeutet Kunst für dich persönlich?", expectedKeywords: ["kunst", "bedeutet", "ausdruck", "leben", "schön"], translation: "Sanat senin için kişisel olarak ne ifade ediyor?" }
        ]
    },
    602: {
        unitId: 602, title: "Cinsiyet Eşitliği Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Lohnlücke zwischen den Geschlechtern muss geschlossen werden.", translation: "Cinsiyetler arası ücret farkı kapatılmalıdır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Frauen sind in Führungspositionen weiterhin stark unterrepräsentiert.", translation: "Kadınlar liderlik pozisyonlarında halen büyük ölçüde yetersiz temsil ediliyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eine gesetzliche Frauenquote sorgt für kontroverse Diskussionen.", translation: "Yasal bir kadın kotası hararetli tartışmalara neden oluyor." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Vorurteile in den Köpfen behindern den gesellschaftlichen Wandel.", translation: "Kafalardaki önyargılar toplumsal değişimi engelliyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie kann man Gleichberechtigung im Beruf fördern?", expectedKeywords: ["gleichberechtigung", "fördern", "quote", "lohn", "beruf"], translation: "İş hayatında eşitlik nasıl teşvik edilebilir?" }
        ]
    },
    603: {
        unitId: 603, title: "Kentleşme Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die zunehmende Urbanisierung überfordert die städtische Infrastruktur.", translation: "Artan kentleşme kentsel altyapıyı zorluyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Bezahlbarer Wohnraum ist ein soziales Grundrecht in einer Demokratie.", translation: "Uygun fiyatlı konut, bir demokraside temel bir sosyal haktır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Smart Cities nutzen Daten zur Optimierung des öffentlichen Verkehrs.", translation: "Akıllı şehirler, toplu taşımayı optimize etmek için verileri kullanır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Lebensqualität in den Vorstädten gewinnt an Attraktivität.", translation: "Banliyölerdeki yaşam kalitesi çekicilik kazanıyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Lebst du lieber in einer Großstadt oder auf dem Land?", expectedKeywords: ["lieber", "grossstadt", "land", "leben", "ruhe"], translation: "Büyük şehirde mi yoksa kırsalda mı yaşamayı tercih edersin?" }
        ]
    },
    604: {
        unitId: 604, title: "Enerji Politikaları Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Energiewende ist das ehrgeizigste Projekt unseres Jahrhunderts.", translation: "Enerji dönüşümü, yüzyılımızın en iddialı projesidir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Fossile Brennstoffe verursachen irreparable Schäden in unserer Atmosphäre.", translation: "Fosil yakıtlar atmosferimizde onarılamaz hasarlara neden oluyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Ausbau der Windkraft stößt oft auf den Widerstand von Anwohnern.", translation: "Rüzgar enerjisinin yaygınlaştırılması genellikle bölge sakinlerinin direnciyle karşılaşır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Speicherung von grünem Strom ist ein technisches Nadelöhr.", translation: "Yeşil elektriğin depolanması teknik bir darboğazdır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sollte Atomkraft als grüne Energie gelten?", expectedKeywords: ["ja", "nein", "atomkraft", "grüne", "energie", "gefährlich"], translation: "Nükleer enerji yeşil enerji olarak kabul edilmeli mi?" }
        ]
    },
    605: {
        unitId: 605, title: "Sosyal Refah Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der demografische Wandel zwingt zur Reform des Rentensystems.", translation: "Demografik değişim emeklilik sisteminin reformunu zorunlu kılıyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Altersarmut betrifft in Zukunft immer mehr alleinstehende Frauen.", translation: "Yaşlılık yoksulluğu gelecekte giderek daha fazla bekar kadını etkileyecek." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein solidarisches Gesundheitssystem schützt die schwächsten Bürger.", translation: "Dayanışmacı bir sağlık sistemi en zayıf vatandaşları korur." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die soziale Schere zwischen Arm und Reich klafft weiter auseinander.", translation: "Zengin ve fakir arasındaki sosyal uçurum daha da açılıyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sollte es ein bedingungsloses Grundeinkommen geben?", expectedKeywords: ["ja", "nein", "grundeinkommen", "geld", "staat"], translation: "Koşulsuz temel gelir olmalı mı?" }
        ]
    },
    606: {
        unitId: 606, title: "Eğitim Reformu Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Chancengleichheit ist die Basis einer gerechten Bildungslandschaft.", translation: "Fırsat eşitliği, adil bir eğitim dünyasının temelidir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Soziale Selektion an Schulen muss systematisch bekämpft werden.", translation: "Okullardaki sosyal seçilim sistematik olarak mücadele edilmelidir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Investitionen in Kitas zahlen sich langfristig für alle aus.", translation: "Kreşlere yapılan yatırımlar uzun vadede herkes için karşılığını verir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Digitale Kompetenzen müssen fest in den Lehrplänen verankert sein.", translation: "Dijital beceriler müfredatlara sıkı bir şekilde yerleştirilmelidir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hängt der Bildungserfolg von den Eltern ab?", expectedKeywords: ["ja", "nein", "bildungserfolg", "eltern", "sozial", "abhängig"], translation: "Eğitim başarısı ebeveynlere mi bağlıdır?" }
        ]
    },
    607: {
        unitId: 607, title: "Çok Kültürlü Yaşam Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Toleranz ist kein passives Dulden, sondern ein aktiver Respekt.", translation: "Tolerans pasif bir katlanma değil, aktif bir saygıdır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der interkulturelle Dialog verhindert die Bildung von Parallelgesellschaften.", translation: "Kültürlerarası diyalog paralel toplumların oluşmasını engeller." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gemeinsame Werte bilden das Fundament einer pluralistischen Gesellschaft.", translation: "Ortak değerler, çoğulcu bir toplumun temelini oluşturur." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Vorurteile beruhen meist auf mangelndem Wissen und fehlender Begegnung.", translation: "Önyargılar genellikle bilgi eksikliğine ve karşılaşma olmamasına dayanır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie kann man Integration in Städten erleichtern?", expectedKeywords: ["integration", "dialog", "sprache", "begegnung", "helfen"], translation: "Şehirlerde entegrasyon nasıl kolaylaştırılabilir?" }
        ]
    },
    608: {
        unitId: 608, title: "Tüketici Hakları Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Deklarationspflicht für Inhaltsstoffe schützt Allergiker effektiv.", translation: "İçindekiler beyan yükümlülüğü alerjisi olanları etkili biçimde korur." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Widerrufsrecht gilt vierzehn Tage für online abgeschlossene Verträge.", translation: "Cayma hakkı internet üzerinden tamamlanan sözleşmeler için on dört gün geçerlidir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Täuschende Werbung kann von Verbraucherschützern abgemahnt werden.", translation: "Yanıltıcı reklamlar tüketici koruyucuları tarafından ihtar edilebilir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Käufer haben Anspruch auf Gewährleistung bei defekter Ware.", translation: "Alıcılar kusurlu mallarda garanti hakkına sahiptir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Kaufst du oft Produkte im Internet?", expectedKeywords: ["ja", "nein", "online", "kaufen", "produkte", "internet"], translation: "İnternetten sık sık ürün satın alır mısın?" }
        ]
    },
    609: {
        unitId: 609, title: "Bilgi Toplumu Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Informationen sind das wertvollste Kapital des einundzwanzigsten Jahrhunderts.", translation: "Bilgiler, yirmi birinci yüzyılın en değerli sermayesidir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Flut an Daten erfordert fortgeschrittene Selektionsfähigkeiten.", translation: "Veri seli, gelişmiş seçilim becerileri gerektirir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kritisches Denken schützt uns vor Desinformation im Netz.", translation: "Eleştirel düşünme bizi internetteki dezenformasyondan korur." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der freie Zugang zu Wissen fördert die demokratische Teilhabe.", translation: "Bilgiye serbest erişim, demokratik katılımı teşvik eder." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sollte das Internet komplett zensurfrei sein?", expectedKeywords: ["ja", "nein", "internet", "zensur", "frei", "kontrolle"], translation: "İnternet tamamen sansürsüz mü olmalı?" }
        ]
    },
    610: {
        unitId: 610, title: "Ruh Sağlığı Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Psychische Erkrankungen dürfen im Job kein Tabuthema mehr sein.", translation: "Ruhsal hastalıklar iş yerinde artık tabu bir konu olmamalıdır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Prävention am Arbeitsplatz senkt die krankheitsbedingten Ausfälle enorm.", translation: "İş yerinde önleme, hastalığa bağlı iş kayıplarını muazzam ölçüde düşürür." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein gesundes Arbeitsklima fördert die Resilienz der Mitarbeiter.", translation: "Sağlıklı bir çalışma ortamı, çalışanların direncini (resilienz) artırır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Entstigmatisierung von Depressionen ist eine wichtige Aufgabe.", translation: "Depresyonun damgalanmaktan kurtarılması önemli bir görevdir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie kann man mentale Gesundheit am Arbeitsplatz schützen?", expectedKeywords: ["pausen", "gesundheit", "mental", "arbeitsplatz", "kommunikation", "stress"], translation: "İş yerinde ruh sağlığı nasıl korunabilir?" }
        ]
    },
    611: {
        unitId: 611, title: "Akademik Yazım Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eine wissenschaftliche Arbeit muss höchsten methodischen Standards genügen.", translation: "Akademik bir çalışma, en yüksek metodolojik standartları karşılamalıdır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Quellenangaben müssen lückenlos und präzise dokumentiert sein.", translation: "Kaynak gösterimleri eksiksiz ve net bir şekilde belgelenmelidir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein Plagiat beschädigt den Ruf eines Forschers nachhaltig.", translation: "İntihal, bir araştırmacının itibarını kalıcı olarak zedeler." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Objektivität ist das Fundament jeder wissenschaftlichen Erkenntnis.", translation: "Objektiflik, her bilimsel bulgunun temelidir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Ist eine Masterarbeit schwer zu schreiben?", expectedKeywords: ["ja", "nein", "masterarbeit", "schreiben", "schwer", "forschung"], translation: "Master tezi yazmak zor mu?" }
        ]
    },
    612: {
        unitId: 612, title: "Kültürlerarası Pratik", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Interkulturelle Missverständnisse beruhen oft auf Stereotypen.", translation: "Kültürlerarası yanlış anlaşılmalar genellikle stereotiplere dayanır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Bereitschaft zum Perspektivenwechsel löst festgefahrene Konflikte.", translation: "Bakış açısını değiştirmeye hazır olmak, tıkanmış çatışmaları çözer." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wir müssen lernen, fremde Verhaltensmuster richtig zu dekodieren.", translation: "Yabancı davranış kalıplarını doğru çözümlemeyi öğrenmeliyiz." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Empathie ist die wichtigste Zutat für erfolgreiche Kooperationen.", translation: "Empati, başarılı işbirlikleri için en önemli malzemedir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie löst du Konflikte mit ausländischen Kollegen?", expectedKeywords: ["konflikte", "kollegen", "reden", "verstehen", "empathie"], translation: "Yabancı meslektaşlarınla yaşadığın çatışmaları nasıl çözersin?" }
        ]
    },
    613: {
        unitId: 613, title: "GDO Tartışmaları Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Gentechnisch veränderte Pflanzen könnten Dürreperioden besser überstehen.", translation: "Genetiği değiştirilmiş bitkiler kuraklık dönemlerini daha iyi atlatabilir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Verbraucher fordern eine lückenlose Kennzeichnungspflicht für GDO-Lebensmittel.", translation: "Tüketiciler, GDO'lu gıdalar için eksiksiz bir etiketleme yükümlülüğü talep ediyor." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die langfristigen Risiken für das Ökosystem sind schwer kalkulierbar.", translation: "Ekosistem için uzun vadeli riskleri tahmin etmek zordur." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die biologische Vielfalt könnte durch Monokulturen bedroht sein.", translation: "Biyolojik çeşitlilik tek tip tarım (monokültür) nedeniyle tehdit altında olabilir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sollte man genmanipulierte Lebensmittel verbieten?", expectedKeywords: ["ja", "nein", "gdo", "lebensmittel", "verbieten", "gesundheit"], translation: "Genetiği değiştirilmiş gıdalar yasaklanmalı mı?" }
        ]
    },
    614: {
        unitId: 614, title: "Sosyal Politikalar Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Langzeitarbeitslosigkeit führt oft zu chronischer Perspektivlosigkeit.", translation: "Uzun süreli işsizlik sıklıkla kronik perspektifsizliğe yol açar." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Umschulungsmaßnahmen erleichtern den Wiedereinstieg in den Arbeitsmarkt.", translation: "Yeniden eğitim önlemleri, iş piyasasına geri dönüşü kolaylaştırır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Staat muss Arbeitslose durch eine aktive Vermittlung unterstützen.", translation: "Devlet, işsizleri aktif bir iş bulma aracılığı ile desteklemelidir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Soziale Ausgrenzung schadet dem demokratischen Zusammenhalt.", translation: "Sosyal dışlanma demokratik birlikteliğe zarar verir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Hilft das Arbeitslosengeld bei der Jobsuche?", expectedKeywords: ["ja", "nein", "geld", "jobsuche", "staat", "helfen"], translation: "İşsizlik maaşı iş aramaya yardımcı olur mu?" }
        ]
    },
    615: {
        unitId: 615, title: "Fikrî Mülkiyet Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Raubkopien im Internet verletzen das Urheberrecht der Künstler.", translation: "İnternetteki korsan kopyalar, sanatçıların telif hakkını ihlal ediyor." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Patentierung schützt Erfindungen vor illegaler Nachahmung.", translation: "Patentleme, buluşları yasa dışı taklitlerden korur." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das geistige Eigentum muss auch im digitalen Zeitalter geschützt sein.", translation: "Fikrî mülkiyet, dijital çağda da korunmalıdır." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Kopierschutzmechanismen werden von Hackern stetig umgangen.", translation: "Kopya koruma mekanizmaları hackerlar tarafından sürekli aşılıyor." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Sollten Filme im Internet komplett gratis sein?", expectedKeywords: ["nein", "urheberrecht", "bezahlen", "künstler", "gratis"], translation: "İnternetteki filmler tamamen ücretsiz mi olmalı?" }
        ]
    },
    616: {
        unitId: 616, title: "Medya Gücü Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Medien fungieren als die vierte Gewalt im Staat.", translation: "Medya devletin dördüncü kuvveti olarak işlev görür." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Eine einseitige Berichterstattung kann politische Wahlen manipulieren.", translation: "Tek taraflı habercilik siyasi seçimleri manipüle edebilir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die Unabhängigkeit der Presse ist eine tragende Säule der Demokratie.", translation: "Basının bağımsızlığı demokrasinin taşıyıcı bir direğidir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Journalisten tragen eine hohe gesellschaftliche Verantwortung.", translation: "Gazeteciler yüksek bir toplumsal sorumluluk taşırlar." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Haben Journalisten heute zu viel Macht?", expectedKeywords: ["ja", "nein", "journalisten", "macht", "medien", "meinung"], translation: "Gazetecilerin bugün çok fazla gücü var mı?" }
        ]
    },
    617: {
        unitId: 617, title: "Sözlü Sınav Taktikleri Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ein strukturierter Vortrag erleichtert dem Prüfer das Verständnis.", translation: "Yapılandırılmış bir sunum, sınav yapıcının anlamasını kolaylaştırır." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "In Stresssituationen hilft ruhiges Ein- und Ausatmen enorm.", translation: "Stres durumlarında sakin nefes alıp vermek muazzam yardımcı olur." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man sollte Fachbegriffe präzise und kontextgerecht anwenden.", translation: "Terimleri kesin ve bağlama uygun şekilde kullanmak gerekir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Blickkontakt signalisiert Kompetenz und Selbstbewusstsein.", translation: "Göz teması kurmak, yetkinlik ve özgüven sinyali verir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Bist du nervös vor mündlichen Prüfungen?", expectedKeywords: ["ja", "nein", "nervös", "prüfung", "mündlich"], translation: "Sözlü sınavlardan önce gergin olur musun?" }
        ]
    },
    618: {
        unitId: 618, title: "Duyduğunu Anlama Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Man muss lernen, implizite Informationen aus dem Vortrag herauszufiltern.", translation: "Sunumdan örtük bilgileri süzmeyi öğrenmek gerekir." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Dialekte und schnelles Sprechtempo erschweren das Hörverstehen.", translation: "Lehçeler ve hızlı konuşma temposu duyduğunu anlamayı zorlaştırır." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das gleichzeitige Mitschreiben erfordert hohe Konzentration.", translation: "Aynı anda not almak yüksek konsantrasyon gerektirir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Erkennen von Schlüsselwörtern ist der Schlüssel zum Erfolg.", translation: "Anahtar kelimeleri tanımak başarının anahtarıdır." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Wie trainierst du dein deutsches Hörverstehen?", expectedKeywords: ["podcast", "filme", "deutsch", "hören", "üben"], translation: "Almanca duyduğunu anlamanı nasıl çalıştırıyorsun?" }
        ]
    },
    619: {
        unitId: 619, title: "Okuduğunu Anlama Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Selektives Lesen hilft, irrelevante Textpassagen schnell zu überfliegen.", translation: "Seçici okuma, ilgisiz metin pasajlarını hızlıca gözden geçirmeye yardımcı olur." },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Unbekannte Vokabeln lassen sich meist logisch aus dem Kontext herleiten.", translation: "Bilinmeyen kelimeler genellikle bağlamdan mantıklı şekilde türetilebilir." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Das Erfassen komplexer Satzstrukturen erfordert kontinuierliches Training.", translation: "Karmaşık cümle yapılarının kavranması sürekli eğitim gerektirir." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Wissenschaftliche Fachtexte weisen eine hohe Dichte an Information auf.", translation: "Bilimsel uzmanlık metinleri yüksek bir bilgi yoğunluğuna sahiptir." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Liest du lieber Zeitungen oder Romane auf Deutsch?", expectedKeywords: ["zeitung", "roman", "lieber", "deutsch", "lesen"], translation: "Almanca gazete mi yoksa roman mı okumayı tercih edersin?" }
        ]
    },
    620: {
        unitId: 620, title: "B2 Seviyesi Mezuniyet Pratiği", language: "Almanca", level: "B2",
        exercises: [
            { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Herzlichen Glückwunsch zum erfolgreichen Erreichen des B2-Niveaus!", translation: "B2 seviyesine başarıyla ulaşmanızdan dolayı gönülden tebrikler!" },
            { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Sie können nun fließend und spontan zu anspruchsvollen Themen Stellung nehmen.", translation: "Artık akıcı ve spontane bir şekilde zorlayıcı konularda görüş bildirebilirsiniz." },
            { id: 3, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Der Weg zur perfekten Sprachbeherrschung führt über stetige Anwendung.", translation: "Kusursuz dil hakimiyetine giden yol, sürekli kullanımdan geçer." },
            { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Die deutsche Sprache öffnet Ihnen fantastische Türen in der globalen Arbeitswelt.", translation: "Alman dili, küresel iş dünyasında size harika kapılar açar." },
            { id: 5, type: "respond", prompt: "Bu soruya cevap ver:", text: "Was ist dein nächstes Ziel beim Deutschlernen?", expectedKeywords: ["c1", "fließend", "sprechen", "ziel", "lernen"], translation: "Almanca öğrenmedeki bir sonraki hedefin nedir?" }
        ]
    }
};

export function getGermanB2SpeakingForUnit(unitId: number): UnitSpeaking {
    return speakings[unitId] || speakings[591];
}
