/**
 * SteadyShell İspanyolca B2 Gramer Veritabanı
 * 
 * B2 Seviyesi: Ünite 61-80 (20 ünite)
 * İleri düzey gramer yapıları ve kurallar
 */

export interface B2GrammarRule {
    id: string;
    title: string;
    explanation: string;
    examples: { spanish: string; turkish: string }[];
    table?: string;
    notes?: string;
    exceptions?: string;
}

// ===== ÜNİTE 61: Subjuntivo Perfecto =====
const unit61Grammar: B2GrammarRule[] = [
    {
        id: "b2-61-1",
        title: "Subjuntivo Perfecto (Presente)",
        explanation: "Geçmişte tamamlanmış bir eylemi şüphe, istek veya duygu ile ifade ederken kullanılır. Haber + participio yapısıyla kurulur.",
        examples: [
            { spanish: "Espero que haya llegado bien.", turkish: "İyi varmış olmasını umuyorum." },
            { spanish: "Dudo que lo haya hecho.", turkish: "Yapmış olduğundan şüpheliyim." },
            { spanish: "Es posible que haya olvidado.", turkish: "Unutmuş olması mümkün." },
            { spanish: "Me alegra que hayas venido.", turkish: "Gelmiş olmana sevindim." },
            { spanish: "No creo que haya dicho eso.", turkish: "Bunu söylemiş olduğuna inanmıyorum." },
            { spanish: "Ojalá haya encontrado trabajo.", turkish: "Keşke iş bulmuş olsun." }
        ],
        table: `| Kişi | Haber | Örnek (Hablar) |
|------|-------|----------------|
| Yo | haya | haya hablado |
| Tú | hayas | hayas hablado |
| Él/Ella | haya | haya hablado |
| Nosotros | hayamos | hayamos hablado |
| Vosotros | hayáis | hayáis hablado |
| Ellos | hayan | hayan hablado |`,
        notes: "Subjuntivo gerektiren yapılarla (espero que, dudo que, es posible que, me alegra que, etc.) kullanılır.",
        exceptions: "Participio düzensiz fiiller: hecho, dicho, visto, escrito, abierto, muerto, puesto, vuelto, roto, cubierto"
    }
];

// ===== ÜNİTE 62: Subjuntivo Imperfecto =====
const unit62Grammar: B2GrammarRule[] = [
    {
        id: "b2-62-1",
        title: "Subjuntivo Imperfecto (-ra / -se)",
        explanation: "Geçmişte veya varsayımsal durumlarda kullanılan subjuntivo formu. -ra ve -se ekleri aynı anlama gelir.",
        examples: [
            { spanish: "Si pudiera, lo haría.", turkish: "Yapabilseydim, yapardım." },
            { spanish: "Ojalá tuviera más tiempo.", turkish: "Keşke daha fazla zamanım olsa." },
            { spanish: "Quisiera una habitación.", turkish: "Bir oda isterdim." },
            { spanish: "Como si fuera verdad.", turkish: "Sanki gerçekmiş gibi." },
            { spanish: "Si supiera la respuesta...", turkish: "Cevabı bilseydim..." },
            { spanish: "Si viniera, sería genial.", turkish: "Gelseydi, harika olurdu." }
        ],
        table: `| Kişi | -ar (hablar) | -er (comer) | -ir (vivir) |
|------|--------------|-------------|-------------|
| Yo | hablara | comiera | viviera |
| Tú | hablaras | comieras | vivieras |
| Él/Ella | hablara | comiera | viviera |
| Nosotros | habláramos | comiéramos | viviéramos |
| Vosotros | hablarais | comierais | vivierais |
| Ellos | hablaran | comieran | vivieran |`,
        notes: "Si + imperfecto subjuntivo + condicional simple = 2. tip şart cümleleri. -ra formu daha yaygın kullanılır.",
        exceptions: "Düzensiz fiiller 3. tekil Pretérito'dan türer: tener→tuviera, poder→pudiera, saber→supiera, venir→viniera, hacer→hiciera, decir→dijera"
    }
];

// ===== ÜNİTE 63: İleri Şart Cümleleri =====
const unit63Grammar: B2GrammarRule[] = [
    {
        id: "b2-63-1",
        title: "Şart Bağlaçları",
        explanation: "Subjuntivo gerektiren şart bağlaçları ile karmaşık şart cümleleri kurma.",
        examples: [
            { spanish: "A condición de que llegues puntual.", turkish: "Zamanında gelmen şartıyla." },
            { spanish: "Siempre que me lo pidas.", turkish: "Benden istediğin sürece." },
            { spanish: "A menos que llueva.", turkish: "Yağmur yağmadıkça." },
            { spanish: "En caso de que necesites ayuda.", turkish: "Yardıma ihtiyacın olursa." },
            { spanish: "Con tal de que aceptes.", turkish: "Kabul etmen yeter ki." },
            { spanish: "A no ser que cambies de opinión.", turkish: "Fikrini değiştirmediğin sürece." }
        ],
        table: `| Bağlaç | Anlam | Subjuntivo? |
|--------|-------|-------------|
| a condición de que | şartıyla | Evet |
| siempre que | ...dığı sürece | Evet |
| a menos que | ...medikçe | Evet |
| en caso de que | ...durumunda | Evet |
| con tal de que | yeter ki | Evet |
| a no ser que | ...olmadığı sürece | Evet |
| suponiendo que | varsayarsak | Evet |
| dado que | ...göz önüne alınırsa | Hayır |`,
        notes: "Bu bağlaçların çoğu subjuntivo gerektirir çünkü varsayımsal veya belirsiz durumları ifade ederler."
    }
];

// ===== ÜNİTE 64: Akademik Yazım =====
const unit64Grammar: B2GrammarRule[] = [
    {
        id: "b2-64-1",
        title: "Akademik Bağlaçlar ve Geçiş İfadeleri",
        explanation: "Akademik ve resmi yazımda kullanılan bağlaçlar ve geçiş ifadeleri.",
        examples: [
            { spanish: "Según los datos obtenidos...", turkish: "Elde edilen verilere göre..." },
            { spanish: "Cabe destacar que...", turkish: "Belirtmek gerekir ki..." },
            { spanish: "En conclusión...", turkish: "Sonuç olarak..." },
            { spanish: "A diferencia de...", turkish: "...den farklı olarak..." },
            { spanish: "Dicho de otro modo...", turkish: "Başka bir deyişle..." },
            { spanish: "En este sentido...", turkish: "Bu anlamda..." }
        ],
        table: `| Kategori | İfadeler |
|----------|----------|
| Giriş | Cabe destacar que, Es importante señalar que, En primer lugar |
| Karşılaştırma | A diferencia de, Por el contrario, Sin embargo |
| Sonuç | En conclusión, Por lo tanto, En resumen |
| Açıklama | Es decir, Dicho de otro modo, En otras palabras |
| Ekleme | Además, Asimismo, Por otra parte |`,
        notes: "Akademik yazımda pasif yapı ve kişisel olmayan ifadeler tercih edilir: Se puede afirmar que..., Los resultados muestran..."
    }
];

// ===== ÜNİTE 65-80: Diğer gramer kuralları =====
const unit65Grammar: B2GrammarRule[] = [
    { id: "b2-65-1", title: "Ekonomik Terimler ve Yapı", explanation: "Ekonomi ve finans alanında kullanılan özel ifadeler.", examples: [{ spanish: "La bolsa subió un 5%.", turkish: "Borsa %5 yükseldi." }, { spanish: "Es una inversión de alto riesgo.", turkish: "Yüksek riskli yatırım." }], notes: "Sayı ve yüzde ifadeleri: subir/bajar un X%, aumentar/disminuir en..." }
];

const unit66Grammar: B2GrammarRule[] = [
    { id: "b2-66-1", title: "Hukuki Terimler", explanation: "Hukuk alanında kullanılan resmi ifadeler ve yapılar.", examples: [{ spanish: "El acusado fue declarado inocente.", turkish: "Sanık masum ilan edildi." }, { spanish: "La sentencia fue apelada.", turkish: "Karara itiraz edildi." }], notes: "Pasif yapı hukuki dilde çok yaygındır: ser + participio" }
];

const unit67Grammar: B2GrammarRule[] = [
    { id: "b2-67-1", title: "Teknoloji Terminolojisi", explanation: "Bilim ve teknoloji alanında kullanılan terimler.", examples: [{ spanish: "La inteligencia artificial revoluciona todo.", turkish: "Yapay zeka her şeyi devrimleştiriyor." }], notes: "Teknoloji terimleri genellikle İngilizce'den alıntıdır: blog, app, streaming, online" }
];

const unit68Grammar: B2GrammarRule[] = [
    { id: "b2-68-1", title: "Siyasi Söylem", explanation: "Siyaset ve toplum konularında kullanılan ifadeler.", examples: [{ spanish: "Los derechos humanos son universales.", turkish: "İnsan hakları evrenseldir." }], notes: "Siyasi tartışmada subjuntivo sık kullanılır: Es necesario que, Es importante que" }
];

const unit69Grammar: B2GrammarRule[] = [
    { id: "b2-69-1", title: "Medya Dili", explanation: "Gazetecilik ve medyada kullanılan özel yapılar.", examples: [{ spanish: "Según fuentes oficiales...", turkish: "Resmi kaynaklara göre..." }], notes: "Haber dili: Alıntılama yapıları - Según, De acuerdo con, Como afirma..." }
];

const unit70Grammar: B2GrammarRule[] = [
    { id: "b2-70-1", title: "Psikoloji Terminolojisi", explanation: "Psikoloji ve davranış bilimlerinde kullanılan terimler.", examples: [{ spanish: "La ansiedad es común.", turkish: "Kaygı yaygındır." }], notes: "Duygusal durumlar: estar + sıfat (estar ansioso, deprimido, estresado)" }
];

const unit71Grammar: B2GrammarRule[] = [
    { id: "b2-71-1", title: "Felsefi Argümantasyon", explanation: "Filozofik tartışma ve düşünce ifade yapıları.", examples: [{ spanish: "¿Existe el libre albedrío?", turkish: "Özgür irade var mı?" }], notes: "Soyut kavramlar için subjuntivo: Dudo que exista, No creo que sea posible" }
];

const unit72Grammar: B2GrammarRule[] = [
    { id: "b2-72-1", title: "Çevre Terminolojisi", explanation: "Çevre ve sürdürülebilirlik alanında kullanılan ifadeler.", examples: [{ spanish: "Hay que reducir la huella de carbono.", turkish: "Karbon ayak izini azaltmak gerekir." }], notes: "Zorunluluk ifadeleri: hay que + infinitivo, es necesario + subjuntivo" }
];

const unit73Grammar: B2GrammarRule[] = [
    { id: "b2-73-1", title: "Sanat Eleştirisi", explanation: "Sanat ve kültür alanında kullanılan eleştirel dil.", examples: [{ spanish: "Es una obra maestra.", turkish: "Bu bir başyapıttır." }], notes: "Değerlendirme ifadeleri: Es + sıfat + que + subjuntivo/indicativo" }
];

const unit74Grammar: B2GrammarRule[] = [
    { id: "b2-74-1", title: "İş Dünyası Dili", explanation: "Profesyonel iş ortamında kullanılan ifadeler.", examples: [{ spanish: "El plan de negocios es sólido.", turkish: "İş planı sağlam." }], notes: "İş dili: presentaciones, reuniones, negociaciones için özel kalıplar" }
];

const unit75Grammar: B2GrammarRule[] = [
    { id: "b2-75-1", title: "Tarihsel Anlatım", explanation: "Tarih ve geçmiş olayları anlatırken kullanılan yapılar.", examples: [{ spanish: "El imperio romano cayó en el 476.", turkish: "Roma İmparatorluğu 476'da çöktü." }], notes: "Tarihsel anlatımda Pretérito Indefinido tercih edilir" }
];

const unit76Grammar: B2GrammarRule[] = [
    { id: "b2-76-1", title: "Tıbbi Terminoloji", explanation: "Sağlık alanında kullanılan profesyonel terimler.", examples: [{ spanish: "El diagnóstico fue certero.", turkish: "Teşhis doğruydu." }], notes: "Tıbbi dil: sintomas, diagnóstico, tratamiento, pronóstico" }
];

const unit77Grammar: B2GrammarRule[] = [
    { id: "b2-77-1", title: "Edebi Analiz", explanation: "Edebiyat eleştirisi ve analizi için kullanılan yapılar.", examples: [{ spanish: "El protagonista evoluciona.", turkish: "Başkahraman gelişiyor." }], notes: "Edebi terimler: narrativa, metáfora, símil, trama, protagonista" }
];

const unit78Grammar: B2GrammarRule[] = [
    { id: "b2-78-1", title: "Diplomatik Dil", explanation: "Uluslararası ilişkiler ve diplomasi dili.", examples: [{ spanish: "Firmaron un tratado de paz.", turkish: "Barış antlaşması imzaladılar." }], notes: "Resmi dil: Pasif yapı ve üçüncü tekil kişi kullanımı" }
];

const unit79Grammar: B2GrammarRule[] = [
    { id: "b2-79-1", title: "Tartışma ve Argümantasyon", explanation: "Tartışma ve fikir savunusu için kullanılan yapılar.", examples: [{ spanish: "Permítame argumentar mi posición.", turkish: "Pozisyonumu savunmama izin verin." }, { spanish: "Refuto ese argumento.", turkish: "O argümanı çürütüyorum." }, { spanish: "Concedo ese punto.", turkish: "O noktayı kabul ediyorum." }], notes: "Tartışma kalıpları: argumentar, refutar, conceder, matizar, persuadir" }
];

const unit80Grammar: B2GrammarRule[] = [
    { id: "b2-80-1", title: "B2 Seviyesi Özet", explanation: "B2 seviyesinde öğrenilen tüm gramer yapılarının özeti.", examples: [{ spanish: "¡Felicidades! Has completado B2.", turkish: "Tebrikler! B2'yi tamamladın." }], notes: "B2 seviyeleri: Subjuntivo perfecto, Subjuntivo imperfecto, İleri şart cümleleri, Akademik yazım, Tartışma ve argümantasyon" }
];

// Ünite ID'sine göre gramer getir (ID: 81-100) - Güncellenmiş aralık
export function getB2GrammarForUnit(unitId: number): B2GrammarRule[] {
    // Unit ID'leri 81-100 arasında, içeride unit61-80 gramerlerini kullan
    const idMapping: { [key: number]: B2GrammarRule[] } = {
        // B2 Temel Üniteler (81-90)
        81: unit61Grammar, 82: unit62Grammar, 83: unit63Grammar, 84: unit64Grammar, 85: unit65Grammar,
        86: unit66Grammar, 87: unit67Grammar, 88: unit68Grammar, 89: unit69Grammar, 90: unit70Grammar,
        // B2 İleri Üniteler (91-100)
        91: unit71Grammar, 92: unit72Grammar, 93: unit73Grammar, 94: unit74Grammar, 95: unit75Grammar,
        96: unit76Grammar, 97: unit77Grammar, 98: unit78Grammar, 99: unit79Grammar, 100: unit80Grammar
    };
    return idMapping[unitId] || unit61Grammar;
}

