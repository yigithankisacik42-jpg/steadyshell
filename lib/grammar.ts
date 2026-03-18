/**
 * SteadyShell Dilbilgisi Veritabanı
 * Her ünite için detaylı dilbilgisi kuralları, tablolar ve örnekler
 */

// Imports from other grammar files
import { getEnglishA1GrammarForUnit } from './grammar-en-a1';
import { getEnglishA2GrammarForUnit } from './grammar-en-a2';
import { getB1GrammarForUnit } from './grammar-b1';
import { getB2GrammarForUnit } from './grammar-b2';
import { getA2GrammarForUnit } from './grammar-a2';
import { getFrenchA1GrammarForUnit } from './grammar-fr-a1';
import { getFrenchA2GrammarForUnit } from './grammar-fr-a2';
import { getFrB1GrammarForUnit } from './grammar-fr-b1';

export interface GrammarExample {
    es?: string;
    fr?: string;
    tr: string;
}

export interface GrammarTable {
    headers: string[];
    rows: string[][];
}

export interface GrammarRule {
    id: string;
    title: string;
    explanation: string;
    examples: GrammarExample[];
    table?: GrammarTable;
}

export interface UnitGrammar {
    unitId: number;
    title: string;
    rules: GrammarRule[];
}

// ===== ÜNİTE 1: TANIŞMA VE SER FİİLİ =====
const unit1Grammar: UnitGrammar = {
    unitId: 1, title: "Ser Fiili (Olmak) - Kapsamlı Rehber",
    rules: [
        {
            id: "ser-intro",
            title: "🎯 Ser Fiili Nedir?",
            explanation: "İspanyolca'da 'olmak' fiili için iki farklı fiil kullanılır: **SER** ve **ESTAR**. Bu ilk ünitemizde **SER** fiilini öğreneceğiz.\n\n**SER fiili**, bir nesnenin veya kişinin **özünü, kimliğini ve değişmez niteliklerini** ifade etmek için kullanılır. Türkçe'de 'Ben bakkalkım', 'O doktordur' gibi cümlelerde gizli olan 'olmak' fiiline karşılık gelir.\n\n**Önemli:** İspanyolca'da özne genellikle düşer çünkü fiil çekimi özneyi belli eder:\n* 'Soy médico' = 'Ben doktorum' ('Yo' düşmüş)\n* 'Es alto' = 'O uzundur' ('Él' düşmüş)",
            examples: [
                { es: "Soy estudiante", tr: "Ben öğrenciyim" },
                { es: "Eres inteligente", tr: "Sen zekisin" },
                { es: "Es mi amigo", tr: "O benim arkadaşım" }
            ]
        },
        {
            id: "ser-doga-rule",
            title: "🤔 Ser Fiili Ne Zaman Kullanılır? (DOĞA Kuralı)",
            explanation: "Ser fiilinin temel kullanımlarını akılda tutmak için **DOĞA** kısaltmasını kullanabilirsiniz. Bu kısaltma size Ser fiilinin 4 ana kullanım alanını hatırlatır:\n\n**D** = **Definición (Tanım)** - Bir şeyi tanımlamak, ne olduğunu söylemek\n→ Soy un estudiante. (Ben bir öğrenciyim.)\n→ El libro es interesante. (Kitap ilginçtir.)\n\n**O** = **Origen (Köken)** - Nereli olduğunu, yapıldığı malzemeyi belirtmek\n→ Somos de Turquía. (Biz Türkiye'deniz.)\n→ La mesa es de madera. (Masa ahşaptandır.)\n\n**Ğ** = **Gün (Zaman/Tarih)** - Saatleri, günleri, tarihleri belirtmek\n→ Son las tres. (Saat üç.)\n→ Hoy es lunes. (Bugün pazartesi.)\n\n**A** = **Adjetivo (Kalıcı Sıfatlar)** - Kalıcı, değişmez özellikleri belirtmek\n→ Mi coche es rojo. (Arabam kırmızıdır.)\n→ María es alta. (María uzundur.)",
            examples: [
                { es: "Soy español (Tanım/Kimlik)", tr: "Ben İspanyolum" },
                { es: "Es de Madrid (Köken)", tr: "O Madridli" },
                { es: "Es la una (Saat)", tr: "Saat bir" },
                { es: "El cielo es azul (Kalıcı özellik)", tr: "Gökyüzü mavidir" }
            ],
            table: {
                headers: ["Kısaltma", "Açılımı", "Kullanım Alanı", "Örnek Cümle"],
                rows: [
                    ["D", "Definición", "Tanımlama", "Soy un estudiante."],
                    ["O", "Origen", "Köken/Nereli", "Somos de Turquía."],
                    ["Ğ", "Gün", "Zaman/Tarih", "Son las tres."],
                    ["A", "Adjetivo", "Kalıcı Sıfatlar", "Mi coche es rojo."]
                ]
            }
        },
        {
            id: "ser-extra-uses",
            title: "📌 Ser'in Ek Kullanımları",
            explanation: "DOĞA kuralının dışında SER fiilinin birkaç önemli kullanımı daha vardır:\n\n**1. Meslekler:**\nBir kişinin mesleği onun kimliğinin bir parçasıdır ve değişmez bir özellik olarak kabul edilir.\n→ Mi padre es médico. (Babam doktordur.)\n→ Ella es profesora. (O öğretmendir.)\n\n**2. Sahiplik:**\nBir şeyin kime ait olduğunu belirtirken SER + DE kullanılır.\n→ El libro es de María. (Kitap Maria'nındır.)\n→ ¿De quién es esto? (Bu kimin?)\n\n**3. Olayların Yeri:**\nBir etkinliğin veya olayın NEREDE GERÇEKLEŞECEĞİNİ belirtirken SER kullanılır. (Dikkat: Sabit bir nesnenin konumu için ESTAR kullanılır!)\n→ La fiesta es en mi casa. (Parti benim evimdedir.)\n→ El concierto es en el estadio. (Konser stadyumdadır.)",
            examples: [
                { es: "Mi madre es enfermera", tr: "Annem hemşiredir" },
                { es: "El coche es de mi hermano", tr: "Araba ağabeyimin" },
                { es: "La reunión es en la oficina", tr: "Toplantı ofistedir" }
            ]
        },
        {
            id: "ser-presente",
            title: "📝 Ser Fiili Çekimleri (Presente de Indicativo)",
            explanation: "Ser fiili **düzensiz** bir fiildir. Bu yüzden çekimlerini ezberlemeniz gerekir. İşte en sık kullanılan şimdiki zaman (Presente de Indicativo) çekimleri:\n\n**Önemli ipuçları:**\n1. **'Yo soy'**: Sadece 'soy' desek bile özne bellidir\n2. **'Tú eres'**: İkinci tekil şahıs\n3. **'Él/Ella/Usted es'**: Üçüncü tekil şahıs ve resmi 'siz'\n4. **'Nosotros somos'**: Birinci çoğul şahıs (biz)\n5. **'Vosotros sois'**: İspanya'da kullanılan 'siz' formu\n6. **'Ellos/Ellas/Ustedes son'**: Üçüncü çoğul ve resmi çoğul 'siz'\n\n**Not:** Latin Amerika'da 'vosotros' kullanılmaz, onun yerine 'ustedes' kullanılır.",
            table: {
                headers: ["Zamir", "Çekim", "Türkçe Anlamı"],
                rows: [
                    ["Yo", "soy", "ben (-im)"],
                    ["Tú", "eres", "sen (-sin)"],
                    ["Él / Ella / Usted", "es", "o (-dir) / siz (-siniz) (resmi)"],
                    ["Nosotros/as", "somos", "biz (-iz)"],
                    ["Vosotros/as", "sois", "siz (-siniz) (çoğul, gayriresmi)"],
                    ["Ellos / Ellas / Ustedes", "son", "onlar (-dirler) / siz (-siniz) (çoğul, resmi)"]
                ]
            },
            examples: [
                { es: "Yo soy turco", tr: "Ben Türküm" },
                { es: "Tú eres muy inteligente", tr: "Sen çok zekisin" },
                { es: "Mi hermana es abogada", tr: "Kız kardeşim avukattır" },
                { es: "Nosotros somos amigos", tr: "Biz arkadaşız" },
                { es: "¿De dónde sois?", tr: "Nerelisiniz? (İspanya'da)" },
                { es: "Ellos son muy amables", tr: "Onlar çok naziktirler" }
            ]
        },
        {

            id: "ser-common-phrases",
            title: "💬 Günlük Hayatta Ser ile Sık Kullanılan İfadeler",
            explanation: "Ser fiili İspanyolca'nın en temel fiillerinden biridir. İşte günlük hayatta çok sık duyacağınız ifadeler:\n\n**Tanışma:**\n* ¿Cómo te llamas? - Adın ne?\n* Soy [isim] - Ben [isim]'im\n* Mucho gusto - Memnun oldum\n* ¿De dónde eres? - Nerelisin?\n\n**Saat Sorma:**\n* ¿Qué hora es? - Saat kaç?\n* Es la una - Saat bir (tekil!)\n* Son las dos - Saat iki (çoğul!)\n\n**Günler:**\n* ¿Qué día es hoy? - Bugün günlerden ne?\n* Hoy es lunes - Bugün pazartesi",
            examples: [
                { es: "¡Hola! Soy María, ¿y tú?", tr: "Merhaba! Ben María, sen?" },
                { es: "¿Qué hora es? - Son las cinco", tr: "Saat kaç? - Saat beş" },
                { es: "¿De dónde eres? - Soy de Estambul", tr: "Nerelisin? - İstanbul'luyum" }
            ]
        },
        {
            id: "ser-practice-tips",
            title: "🎓 Pratik Önerileri ve Hatırlatmalar",
            explanation: "SER fiilini iyi öğrenmek için şu önerileri takip edin:\n\n**1. Her gün pratik yapın:**\n* Kendinizi tanıtın: 'Soy [isim], soy de [şehir], soy [meslek]'\n* Saati söyleyin: 'Son las [saat]'\n* Ailenizi tanıtın: 'Mi madre es..., mi padre es...'\n\n**2. DOĞA kuralını ezberleyin:**\n* **D**efinición, **O**rigen, **Ğ**ün, **A**djetivo\n\n**3. Yaygın hatalardan kaçının:**\n* ❌ 'Yo estoy médico' → ✅ 'Yo soy médico' (Meslek = SER)\n* ❌ 'Estoy de Turquía' → ✅ 'Soy de Turquía' (Köken = SER)\n* ❌ 'Están las tres' → ✅ 'Son las tres' (Saat = SER)\n\n**4. SER vs ESTAR farkını anlayın:**\n* SER = Kalıcı, kimlik, öz\n* ESTAR = Geçici, konum, durum\n\n**Sonraki Adım:** Ünite 9'da ESTAR fiilini detaylıca işleyeceğiz!",
            examples: [
                { es: "✅ Soy alto (Kalıcı - Boy)", tr: "Uzunum" },
                { es: "✅ Estoy cansado (Geçici - Yorgunluk)", tr: "Yorgunum" },
                { es: "✅ Madrid es grande (Şehrin özelliği)", tr: "Madrid büyüktür" }
            ]
        }
    ]
};


// ===== ÜNİTE 2: SAYILAR VE ÇOĞUL YAPMA =====
const unit2Grammar: UnitGrammar = {
    unitId: 2, title: "Çoğul Yapma Kuralları - Kapsamlı Rehber",
    rules: [
        {
            id: "plural-intro",
            title: "📚 İspanyolca'da Çoğul Yapma",
            explanation: "İspanyolca'da kelimeleri çoğul yapmak için kelimenin **son harfine** bakılır. Bu ünitte tüm çoğul yapma kurallarını detaylıca öğreneceksiniz.\n\nTemel olarak 5 farklı kural vardır ve her birini ayrı ayrı işleyeceğiz. Ayrıca tanımlayıcıların (artikellerin) nasıl çoğul yapılacağını da göreceğiz.",
            examples: [
                { es: "Libro → Libros", tr: "Kitap → Kitaplar" },
                { es: "El gato → Los gatos", tr: "Kedi → Kediler" }
            ]
        },
        {
            id: "plural-vowel",
            title: "1️⃣ Sesli Harf ile Biten Kelimeler",
            explanation: "Kelime bir **sesli harf (-a, -e, -i, -o, -u)** ile bitiyorsa, kelimenin sonuna sadece **-s** eklenir.\n\nBu en basit ve en yaygın çoğul yapma kuralıdır. İspanyolca kelimelerin büyük çoğunluğu sesli harfle biter.\n\n**Formül:** Kelime + s",
            examples: [
                { es: "Libro (Kitap) → Libros", tr: "Kitap → Kitaplar" },
                { es: "Chica (Kız) → Chicas", tr: "Kız → Kızlar" },
                { es: "Estudiante (Öğrenci) → Estudiantes", tr: "Öğrenci → Öğrenciler" },
                { es: "Coche (Araba) → Coches", tr: "Araba → Arabalar" },
                { es: "Casa (Ev) → Casas", tr: "Ev → Evler" }
            ]
        },
        {
            id: "plural-consonant",
            title: "2️⃣ Sessiz Harf ile Biten Kelimeler",
            explanation: "Kelime bir **sessiz harf** ile bitiyorsa (z hariç!), sonuna **-es** eklenir.\n\nBu kural telaffuzu kolaylaştırmak için uygulanır. Sadece 's' eklemek konuşmayı zorlaştırır.\n\n**Formül:** Kelime + es\n\n**Yaygın sessiz harfler:** -r, -l, -n, -d, -s",
            examples: [
                { es: "Papel (Kağıt) → Papeles", tr: "Kağıt → Kağıtlar" },
                { es: "Universidad (Üniversite) → Universidades", tr: "Üniversite → Üniversiteler" },
                { es: "Doctor (Doktor) → Doctores", tr: "Doktor → Doktorlar" },
                { es: "Ciudad (Şehir) → Ciudades", tr: "Şehir → Şehirler" },
                { es: "Color (Renk) → Colores", tr: "Renk → Renkler" }
            ]
        },
        {
            id: "plural-z",
            title: "3️⃣ 'Z' Harfi ile Biten Kelimeler ⚠️",
            explanation: "Kelime **-z** harfi ile bitiyorsa, **özel bir kural** uygulanır:\n\n**'Z' harfi 'C' harfine dönüşür**, ardından **-es** eklenir.\n\nBu tamamen telaffuzu korumak adına yapılan bir **imla kuralıdır**. İspanyolca'da 'ze' ve 'zi' yazımı tercih edilmez.\n\n**Formül:** -z → -ces",
            examples: [
                { es: "Lápiz (Kalem) → Lápices", tr: "Kalem → Kalemler" },
                { es: "Pez (Balık) → Peces", tr: "Balık → Balıklar" },
                { es: "Voz (Ses) → Voces", tr: "Ses → Sesler" },
                { es: "Luz (Işık) → Luces", tr: "Işık → Işıklar" },
                { es: "Feliz (Mutlu) → Felices", tr: "Mutlu → Mutlular" }
            ]
        },
        {
            id: "plural-stressed-vowel",
            title: "4️⃣ Vurgulu Sesli Harfle Bitenler",
            explanation: "Eğer kelime üzerinde **vurgu işareti olan -í veya -ú** ile bitiyorsa, genellikle **-es** eklenir.\n\nBazı modern kullanımlarda sadece -s de kabul görse de -es daha şık ve geleneksel kabul edilir.\n\n**Dikkat:** -á, -é, -ó ile bitenlerde genellikle sadece **-s** eklenir.",
            examples: [
                { es: "Rubí (Yakut) → Rubíes", tr: "Yakut → Yakutlar" },
                { es: "Tabú (Tabu) → Tabúes", tr: "Tabu → Tabular" },
                { es: "Sofá (Kanepe) → Sofás", tr: "Kanepe → Kanepeler (sadece -s)" },
                { es: "Café (Kahve) → Cafés", tr: "Kahve → Kahveler (sadece -s)" }
            ]
        },
        {
            id: "plural-tilde",
            title: "5️⃣ Vurgu İşareti Değişimi (Tilde)",
            explanation: "Bazı kelimeler çoğul olduklarında **vurgu kuralları** gereği üzerindeki yazılı vurguyu (tilde) kaybeder veya tam tersi, vurgu alırlar.\n\nBu kural İspanyolca'nın vurgu yasalarından kaynaklanır:\n- Hecelerin değişmesiyle vurgu işareti eklenebilir veya kaldırılabilir\n\n**Önemli:** Bu konuyu tam anlamak için İspanyolca vurgu kurallarını bilmek gerekir (ileri seviye).",
            examples: [
                { es: "Canción (Şarkı) → Canciones", tr: "Şarkı → Şarkılar (Vurgu düştü)" },
                { es: "Examen (Sınav) → Exámenes", tr: "Sınav → Sınavlar (Vurgu eklendi)" },
                { es: "Joven (Genç) → Jóvenes", tr: "Genç → Gençler (Vurgu eklendi)" },
                { es: "Imagen (Görüntü) → Imágenes", tr: "Görüntü → Görüntüler (Vurgu eklendi)" }
            ]
        },
        {
            id: "plural-articles",
            title: "🏅 Altın Kural: Tanımlayıcılar (Artículos)",
            explanation: "İspanyolca'da sadece ismi değil, **ismin başındaki tanımlayıcıyı da çoğul yapman gerekir**!\n\nBu çok önemli bir kuraldır ve unutulmamalıdır. Tanımlayıcı tekil kalırsa cümle hatalı olur.",
            table: {
                headers: ["Tekil", "Çoğul", "Örnek"],
                rows: [
                    ["El (Eril)", "Los", "El gato → Los gatos"],
                    ["La (Dişil)", "Las", "La mesa → Las mesas"],
                    ["Un (Belirsiz Eril)", "Unos", "Un perro → Unos perros"],
                    ["Una (Belirsiz Dişil)", "Unas", "Una flor → Unas flores"]
                ]
            },
            examples: [
                { es: "El libro → Los libros", tr: "Kitap → Kitaplar" },
                { es: "La casa → Las casas", tr: "Ev → Evler" },
                { es: "Un coche → Unos coches", tr: "Bir araba → Birkaç araba" }
            ]
        },
        {
            id: "plural-gender-tip",
            title: "💡 Küçük Bir İpucu: Karma Gruplar",
            explanation: "Eğer bir grup **hem erkek hem de kadınlardan** oluşuyorsa, İspanyolca'da her zaman **eril (masculino) çoğul form** kullanılır.\n\nBu kural İspanyolca'nın geleneksel gramer kuralıdır. Günümüzde bazı alternatif kullanımlar tartışılsa da, resmi ve standart kullanım budur.\n\n**Örnek:**\n- 10 kız öğrenci = **Las** estudiantes (Hepsi kız = dişil)\n- 9 kız + 1 erkek öğrenci = **Los** estudiantes (Karma = eril)",
            examples: [
                { es: "Las niñas (Sadece kızlar)", tr: "Kızlar" },
                { es: "Los niños (Sadece erkekler VEYA karma)", tr: "Çocuklar (Erkek veya Karma)" },
                { es: "Los estudiantes (Karma grup)", tr: "Öğrenciler" },
                { es: "Los profesores (Karma grup)", tr: "Öğretmenler" }
            ]
        },
        {
            id: "plural-summary",
            title: "📝 Özet Tablo",
            explanation: "Tüm çoğul yapma kurallarını tek bir tabloda görelim:",
            table: {
                headers: ["Son Harf", "Kural", "Örnek"],
                rows: [
                    ["Sesli harf (-a, -e, -i, -o, -u)", "+ s", "casa → casas"],
                    ["Sessiz harf (-r, -l, -n, -d)", "+ es", "papel → papeles"],
                    ["-z", "z → c + es", "lápiz → lápices"],
                    ["Vurgulu -í, -ú", "+ es (genelde)", "rubí → rubíes"],
                    ["Vurgulu -á, -é, -ó", "+ s", "sofá → sofás"]
                ]
            },
            examples: [
                { es: "¡Practica mucho!", tr: "Çok pratik yap!" }
            ]
        }
    ]
};


// ===== ÜNİTE 3: AİLE VE İYELİK SIFATLARI =====
const unit3Grammar: UnitGrammar = {
    unitId: 3, title: "İyelik Sıfatları - Kapsamlı Rehber",
    rules: [
        {
            id: "possessives-intro",
            title: "📚 İyelik Sıfatları Nedir?",
            explanation: "İyelik sıfatları, bir nesnenin **kime ait** olduğunu belirten kelimelerdir. Türkçe'deki 'benim, senin, onun...' karşılığıdır.\n\nİspanyolca'da iyelik sıfatları, sahip olunan nesnenin **sayısına** (tekil/çoğul) göre değişir. Bu çok önemli bir kuraldır!\n\n**Örnek:**\n* Mi libro (Benim kitabım) - Tek kitap\n* Mis libros (Benim kitaplarım) - Çok kitap",
            examples: [
                { es: "Mi casa es grande", tr: "Benim evim büyük" },
                { es: "Tus ojos son bonitos", tr: "Senin gözlerin güzel" }
            ]
        },
        {
            id: "possessives-table",
            title: "📋 İyelik Sıfatları Tablosu",
            explanation: "Bu tabloyu bir **yol haritası** gibi düşünebilirsin. Nesne tekilse sol sütunu, nesne çoğulsa sağ sütunu kullanıyoruz.\n\n**Önemli:** Mi, Tu, Su kelimeleri cinsiyete göre değişmez! Sadece sayıya göre değişir.",
            table: {
                headers: ["Sahip Kim?", "Tekil Nesne", "Çoğul Nesne", "Türkçe Anlamı"],
                rows: [
                    ["Yo (Ben)", "Mi", "Mis", "Benim"],
                    ["Tú (Sen)", "Tu", "Tus", "Senin"],
                    ["Él / Ella / Usted", "Su", "Sus", "Onun / Sizin (Resmi)"],
                    ["Nosotros/as (Biz)", "Nuestro / Nuestra", "Nuestros / Nuestras", "Bizim"],
                    ["Vosotros/as (Siz)", "Vuestro / Vuestra", "Vuestros / Vuestras", "Sizin (Çoğul-Samimi)"],
                    ["Ellos / Ellas / Ustedes", "Su", "Sus", "Onların / Sizin (Resmi-Çoğul)"]
                ]
            },
            examples: [
                { es: "Mi libro", tr: "Benim kitabım" },
                { es: "Nuestro padre", tr: "Bizim babamız" }
            ]
        },
        {
            id: "rule-a-plural",
            title: "📌 Kural A: Nesne Sayısına Göre Çoğullaştırma",
            explanation: "İspanyolca'da 'Benim' kelimesi, sahip olduğun şey **tek mi yoksa çok mu** olduğuna göre şekil değiştirir.\n\n**Örnek:**\n* **Mi** gato (Benim kedim) → Kedi 1 tane\n* **Mis** gatos (Benim kedilerim) → Kediler çok, 'Mi' de 'Mis' oldu\n\n**🎓 Dil Koçu Notu:**\nTürkçe'de 'Benim kedilerim' derken 'benim' kelimesi değişmez. Ama İspanyolca'da iyelik sıfatı, ismin adeta bir **aynasıdır**; isim çoğulsa o da çoğul olur!",
            examples: [
                { es: "Mi hermano (kardeşim - tekil)", tr: "Kardeşim" },
                { es: "Mis hermanos (kardeşlerim - çoğul)", tr: "Kardeşlerim" },
                { es: "Tu amigo → Tus amigos", tr: "Arkadaşın → Arkadaşların" },
                { es: "Su casa → Sus casas", tr: "Onun evi → Onun evleri" }
            ]
        },
        {
            id: "rule-b-gender",
            title: "📌 Kural B: Cinsiyet Uyumu (Sadece 'Biz' ve 'Siz'de)",
            explanation: "Tabloya bakarsan **Mi, Tu, Su** kelimelerinin dişili veya erili yoktur.\n\nAma **Nuestro (Bizim)** ve **Vuestro (Sizin)** kelimeleri, sahip olunan nesnenin **cinsiyetine göre de** değişir:\n\n* Nesne **Erilse:** Nuestro / Vuestro\n* Nesne **Dişilse:** Nuestra / Vuestra\n\n**Dikkat:** Bu sadece 'biz' ve 'siz' formlarında geçerlidir!",
            table: {
                headers: ["Cinsiyet", "Bizim", "Sizin", "Örnek"],
                rows: [
                    ["Eril", "Nuestro", "Vuestro", "Nuestro padre (Babamız)"],
                    ["Dişil", "Nuestra", "Vuestra", "Nuestra madre (Annemiz)"],
                    ["Eril Çoğul", "Nuestros", "Vuestros", "Nuestros libros (Kitaplarımız)"],
                    ["Dişil Çoğul", "Nuestras", "Vuestras", "Nuestras casas (Evlerimiz)"]
                ]
            },
            examples: [
                { es: "Nuestro padre es médico", tr: "Babamız doktordur (padre = eril)" },
                { es: "Nuestra madre es profesora", tr: "Annemiz öğretmendir (madre = dişil)" },
                { es: "Nuestros hijos son pequeños", tr: "Çocuklarımız küçük" }
            ]
        },
        {
            id: "rule-c-su",
            title: "📌 Kural C: Gizemli 'Su' ve 'Sus' 🃏",
            explanation: "**Su** kelimesi İspanyolca'nın **joker kartıdır**! Birden fazla anlama gelebilir:\n\n1. **Onun** (erkek/kadın)\n2. **Sizin** (tekil-resmi: Usted)\n3. **Onların**\n4. **Sizin** (çoğul-resmi: Ustedes)\n\n**Peki nasıl ayırt ederiz?**\nCümlenin bağlamından veya konuşmanın gidişatından anlarız.\n\n**Örnek:**\n'Su casa' dendiğinde, 'Onun evi' mi yoksa 'Onların evi' mi olduğunu bağlamdan anlarız.",
            examples: [
                { es: "Su casa es grande (Onun evi)", tr: "Onun evi büyük" },
                { es: "Su casa es grande (Sizin eviniz - resmi)", tr: "Sizin eviniz büyük" },
                { es: "Sus libros están aquí", tr: "Onun/Onların kitapları burada" },
                { es: "¿Dónde está su coche?", tr: "Arabası/Arabanız nerede?" }
            ]
        },
        {
            id: "tu-vs-tu",
            title: "⚠️ Karıştırma Tuzağı: 'Tu' vs 'Tú'",
            explanation: "Sıfırdan öğrenirken **en çok yapılan hata** budur! İki kelime çok benzer ama anlamları tamamen farklıdır:\n\n**Tú** (Vurgulu - üstünde işaret var):\n→ **Sen** anlamına gelir (Kişi zamiri)\n→ Örn: **Tú** eres alto. (Sen uzunsun.)\n\n**Tu** (Vurgusuz - işaret yok):\n→ **Senin** anlamına gelir (İyelik sıfatı)\n→ Örn: **Tu** coche es rápido. (Senin araban hızlı.)\n\n**İpucu:** Vurgu işareti = Kişi, Vurgusuz = Sahiplik",
            examples: [
                { es: "Tú eres mi amigo", tr: "Sen benim arkadaşımsın (Tú = Sen)" },
                { es: "Tu amigo es simpático", tr: "Senin arkadaşın sempatik (Tu = Senin)" },
                { es: "¿Tú tienes tu libro?", tr: "Sen kitabını aldın mı? (Her ikisi de!)" }
            ]
        },
        {
            id: "possessives-practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları pekiştirmek için örnek cümleler:",
            examples: [
                { es: "Mi familia es grande", tr: "Benim ailem büyük" },
                { es: "Mis padres son profesores", tr: "Anne babam öğretmendir" },
                { es: "Tu hermana es muy guapa", tr: "Kız kardeşin çok güzel" },
                { es: "Tus primos viven en Madrid", tr: "Kuzenlerin Madrid'de yaşıyor" },
                { es: "Nuestra abuela cocina muy bien", tr: "Babaannemiz çok iyi yemek yapar" },
                { es: "¿Dónde están sus llaves?", tr: "Anahtarları nerede?" }
            ]
        }
    ]
};


// ===== ÜNİTE 4: RENKLER VE SIFAT UYUMU =====
const unit4Grammar: UnitGrammar = {
    unitId: 4, title: "Sıfat Uyumu",
    rules: [
        {
            id: "adjective-order",
            title: "🏅 Altın Kural: Sıralama Tersi!",
            explanation: "Önce bunu cebimize koyalım. Türkçe'nin **tam tersine**, İspanyolca'da genellikle **önce isim gelir, sonra sıfat gelir**.\n\n**Türkçe:** Güzel ev (Sıfat + İsim)\n**İspanyolca:** Ev güzel (İsim + Sıfat) → Casa bonita\n\nBu kural İspanyolca öğrenirken en çok alışılması gereken kurallardan biridir!",
            examples: [
                { es: "Casa bonita", tr: "Güzel ev (Ev + Güzel)" },
                { es: "Libro interesante", tr: "İlginç kitap (Kitap + İlginç)" },
                { es: "Coche rápido", tr: "Hızlı araba (Araba + Hızlı)" }
            ]
        },
        {
            id: "adjective-gender-intro",
            title: "👫 Cinsiyet Uyumu (Erkek mi, Kız mı?)",
            explanation: "Sıfatlar, tanımladıkları kelimenin **cinsiyetine (eril/dişil)** uymak zorundadır.\n\nBurada sıfatları iki gruba ayırıyoruz:\n\n**A Grubu:** '-o' ile biten sıfatlar (Değişkenler)\n**B Grubu:** '-e' veya sessiz harfle bitenler (Nötrler)\n\nHer grubu ayrı ayrı inceleyelim.",
            examples: [
                { es: "El chico alto → La chica alta", tr: "Uzun erkek → Uzun kız" },
                { es: "El coche grande → La casa grande", tr: "Büyük araba → Büyük ev" }
            ]
        },
        {
            id: "adjective-group-a",
            title: "🅰️ A Grubu: '-o' ile Biten Sıfatlar (Değişkenler)",
            explanation: "Bu sıfatlar, kelime **erilse -o**, **dişilse -a** ile biter. En kalabalık grup budur!\n\n**Kural:** -o → -a (dişil için)\n\n**Alto (Uzun):**\n* El chico alt**o** (Uzun erkek çocuk) → İkisi de -o\n* La chica alt**a** (Uzun kız çocuk) → İkisi de -a\n\n**Rojo (Kırmızı):**\n* El libro roj**o** (Kırmızı kitap)\n* La mesa roj**a** (Kırmızı masa)",
            examples: [
                { es: "El gato negro → La gata negra", tr: "Siyah kedi (erkek) → Siyah kedi (dişi)" },
                { es: "El perro pequeño → La perra pequeña", tr: "Küçük köpek (erkek) → Küçük köpek (dişi)" },
                { es: "El niño guapo → La niña guapa", tr: "Yakışıklı çocuk → Güzel kız" },
                { es: "El cuaderno blanco → La camisa blanca", tr: "Beyaz defter → Beyaz gömlek" }
            ]
        },
        {
            id: "adjective-group-b",
            title: "🅱️ B Grubu: '-e' veya Sessiz Harfle Bitenler (Nötrler)",
            explanation: "Bu grup **çok kolaydır**! Çünkü cinsiyete göre **değişmezler**. İsim kız da olsa erkek de olsa aynı kalırlar.\n\n**Grande (Büyük)** → Sonu '-e' ile bitiyor.\n* El coche grande (Büyük araba)\n* La casa grande (Büyük ev) → Gördüğün gibi değişmedi.\n\n**Azul (Mavi)** → Sonu sessiz harfle bitiyor.\n* El bolígrafo azul (Mavi tükenmez kalem)\n* La flor azul (Mavi çiçek) → Yine değişmedi.",
            examples: [
                { es: "El hombre inteligente → La mujer inteligente", tr: "Zeki adam → Zeki kadın" },
                { es: "El problema fácil → La tarea fácil", tr: "Kolay problem → Kolay ödev" },
                { es: "El pantalón azul → La camisa azul", tr: "Mavi pantolon → Mavi gömlek" },
                { es: "El examen difícil → La pregunta difícil", tr: "Zor sınav → Zor soru" }
            ]
        },
        {
            id: "adjective-number",
            title: "🔢 Sayı Uyumu (Tekil mi, Çoğul mu?)",
            explanation: "Hatırlıyor musun? İsimleri çoğul yaparken **-s** veya **-es** ekliyorduk.\n\nİşte sıfatlar da bu kurala uymak zorunda. İsim 's' takısı aldıysa, **sıfat da almak zorundadır**. Yalnız kalamaz!\n\n**Kurallar:**\n* Sesli harfle bitiyorsa: **+s** (rojo → rojos)\n* Sessiz harfle bitiyorsa: **+es** (azul → azules)",
            examples: [
                { es: "El gato negro → Los gatos negros", tr: "Siyah kedi → Siyah kediler" },
                { es: "La casa roja → Las casas rojas", tr: "Kırmızı ev → Kırmızı evler" },
                { es: "El estudiante inteligente → Los estudiantes inteligentes", tr: "Zeki öğrenci → Zeki öğrenciler" },
                { es: "El ojo azul → Los ojos azules", tr: "Mavi göz → Mavi gözler" }
            ]
        },
        {
            id: "adjective-summary-table",
            title: "📊 Büyük Özet Tablosu",
            explanation: "Hadi en popüler sıfatlardan biri olan **'Guapo' (Yakışıklı/Güzel)** kelimesini bir ailenin üzerinde görelim:",
            table: {
                headers: ["İsim Durumu", "İspanyolcası", "Mantığı"],
                rows: [
                    ["Tekil Eril (Erkek)", "El chico guapo", "Orijinal hali"],
                    ["Tekil Dişil (Kız)", "La chica guapa", "-o harfi -a oldu"],
                    ["Çoğul Eril (Erkekler)", "Los chicos guapos", "Hem isme hem sıfata -s geldi"],
                    ["Çoğul Dişil (Kızlar)", "Las chicas guapas", "Dişil yapıldı (-a), sonra -s eklendi"]
                ]
            },
            examples: [
                { es: "El coche nuevo → Los coches nuevos", tr: "Yeni araba → Yeni arabalar" },
                { es: "La película interesante → Las películas interesantes", tr: "İlginç film → İlginç filmler" }
            ]
        },
        {
            id: "adjective-practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Tengo un perro grande", tr: "Büyük bir köpeğim var" },
                { es: "Mi hermana es alta y guapa", tr: "Kız kardeşim uzun ve güzel" },
                { es: "Los libros nuevos son interesantes", tr: "Yeni kitaplar ilginç" },
                { es: "Las flores rojas son bonitas", tr: "Kırmızı çiçekler güzel" },
                { es: "El cielo es azul y bonito", tr: "Gökyüzü mavi ve güzel" },
                { es: "Mis ojos son verdes", tr: "Gözlerim yeşil" }
            ]
        }
    ]
};


// ===== ÜNİTE 5: YİYECEKLER VE QUERER =====
const unit5Grammar: UnitGrammar = {
    unitId: 5, title: "Querer Fiili - Kapsamlı Rehber",
    rules: [
        {
            id: "querer-intro",
            title: "📚 Querer Fiili Nedir?",
            explanation: "**Querer** İspanyolca'nın en önemli ve en sık kullanılan fiillerinden biridir. İki temel anlamı vardır:\n\n**1. İstemek** - Bir şey veya eylem istemek\n**2. Sevmek** - Bir kişiyi sevmek (romantik veya aile bağı)\n\nBu fiil **kök değiştiren** (stem-changing) bir fiildir. Kökündeki **'e'** harfi, bazı çekimlerde **'ie'**ye dönüşür.",
            examples: [
                { es: "Quiero agua", tr: "Su istiyorum" },
                { es: "Te quiero", tr: "Seni seviyorum" }
            ]
        },
        {
            id: "querer-conjugation",
            title: "📝 Querer Fiilinin Çekimi (Geniş Zaman)",
            explanation: "Bu fiilin kökünde bir **ses değişimi** yaşanır.\n\nKökümüz **Quer-** idi, değil mi? Çekimlerken bu **-e** harfi 'çatlıyor' ve **-ie**'ye dönüşüyor.\n\n**İstisna:** Sadece 'Biz' ve 'Siz' derken kök değişmez, düzgün kalır!\n\n**🤖 Koçun Notu:** Nosotros ve Vosotros dışındaki herkes 'ie' dönüşümüne uğradı. Buna **'Bot Kuralı'** denir - tabloyu çizersen bot şekline benzer!",
            table: {
                headers: ["Kişi", "İspanyolcası", "Okunuşu", "Anlamı"],
                rows: [
                    ["Yo", "Quiero", "Kiero", "İstiyorum / Seviyorum"],
                    ["Tú", "Quieres", "Kieres", "İstiyorsun / Seviyorsun"],
                    ["Él / Ella", "Quiere", "Kiere", "İstiyor / Seviyor"],
                    ["Nosotros/as", "Queremos", "Keremos", "İstiyoruz (Değişim yok!)"],
                    ["Vosotros/as", "Queréis", "Kereis", "İstiyorsunuz (Değişim yok!)"],
                    ["Ellos / Ellas", "Quieren", "Kieren", "İstiyorlar"]
                ]
            },
            examples: [
                { es: "Yo quiero, tú quieres, él quiere...", tr: "Ben istiyorum, sen istiyorsun, o istiyor..." },
                { es: "Nosotros queremos (değişmedi!)", tr: "Biz istiyoruz" }
            ]
        },
        {
            id: "querer-use-a",
            title: "🅰️ Kullanım A: Bir Nesne İsterken (Querer + İsim)",
            explanation: "Kahve, kalem, araba gibi **somut bir şey** istediğinde kullanılır.\n\n**Formül:** Querer (çekimli) + İsim\n\nBelirli veya belirsiz artikel kullanabilirsin:\n* un/una = bir (belirsiz)\n* el/la = ... (belirli)",
            examples: [
                { es: "Yo quiero un café", tr: "Bir kahve istiyorum" },
                { es: "Ella quiere el libro", tr: "O kitabı istiyor (belirli kitap)" },
                { es: "¿Quieres agua?", tr: "Su ister misin?" },
                { es: "Queremos dos pizzas", tr: "İki pizza istiyoruz" },
                { es: "No quiero nada", tr: "Hiçbir şey istemiyorum" }
            ]
        },
        {
            id: "querer-use-b",
            title: "🅱️ Kullanım B: Bir Şey Yapmak İsterken (Querer + Eylem)",
            explanation: "**En önemli kullanım budur!**\n\nBir eylemi yapmak istediğini söylerken:\n1. Önce **Querer** fiilini çekimlersin\n2. Yanına yapmak istediğin eylemi **HİÇ DOKUNMADAN** (mastar/infinitive halde) koyarsın\n\n**Formül:** Querer (çekimli) + Fiil (mastar: -ar, -er, -ir)\n\n**Örnek:** Quiero + dormir (uyumak) = Quiero dormir",
            examples: [
                { es: "Quiero dormir", tr: "Uyumak istiyorum" },
                { es: "Queremos ir a España", tr: "İspanya'ya gitmek istiyoruz" },
                { es: "No quiero comer", tr: "Yemek yemek istemiyorum" },
                { es: "¿Quieres bailar conmigo?", tr: "Benimle dans etmek ister misin?" },
                { es: "Ella quiere estudiar medicina", tr: "O tıp okumak istiyor" }
            ]
        },
        {
            id: "querer-use-c",
            title: "❤️ Kullanım C: Birini Severken (Romantik veya Sevgi)",
            explanation: "İspanyolca'da **'Amar'** (Aşkla sevmek) fiili çok güçlüdür - filmlerdeki gibi!\n\nGünlük hayatta arkadaşlarını, aileni veya sevgilini sevdiğini söylerken **'Querer'** kullanılır.\n\n**Dikkat:** Kişileri severken **'a'** edatı kullanılır!\n* Querer **a** alguien = Birini sevmek",
            examples: [
                { es: "Te quiero", tr: "Seni seviyorum" },
                { es: "Te quiero mucho", tr: "Seni çok seviyorum" },
                { es: "Ella quiere a su madre", tr: "O annesini seviyor" },
                { es: "Quiero a mi familia", tr: "Ailemi seviyorum" },
                { es: "¿Me quieres?", tr: "Beni seviyor musun?" }
            ]
        },
        {
            id: "querer-negative",
            title: "🚫 Olumsuz Yapma",
            explanation: "Querer fiilini olumsuz yapmak çok kolaydır. Fiilin önüne **'no'** koyarsın, hepsi bu!\n\n**Formül:** No + Querer (çekimli) + ...",
            examples: [
                { es: "No quiero ir", tr: "Gitmek istemiyorum" },
                { es: "No queremos comer", tr: "Yemek istemiyoruz" },
                { es: "¿Por qué no quieres trabajar?", tr: "Neden çalışmak istemiyorsun?" },
                { es: "Ella no quiere hablar", tr: "O konuşmak istemiyor" }
            ]
        },
        {
            id: "querer-practice",
            title: "🎯 Örneklerle Pekiştirelim",
            explanation: "Önceki ünitelerde öğrendiğimiz **iyelik sıfatlarını** ve **sıfat uyumunu** da içeren cümleler:",
            examples: [
                { es: "Mi hermano quiere una casa grande", tr: "Kardeşim büyük bir ev istiyor (Mi: iyelik, Quiere: 3. tekil)" },
                { es: "Queremos hablar español", tr: "İspanyolca konuşmak istiyoruz (Queremos: Biz, Hablar: mastar)" },
                { es: "¿Por qué no quieres trabajar?", tr: "Neden çalışmak istemiyorsun? (No: olumsuz)" },
                { es: "Mis padres quieren viajar", tr: "Anne babam seyahat etmek istiyor" },
                { es: "¿Qué quieres hacer hoy?", tr: "Bugün ne yapmak istiyorsun?" }
            ]
        }
    ]
};


// ===== ÜNİTE 6: İÇECEKLER VE SIFATLAR =====
const unit6Grammar: UnitGrammar = {
    unitId: 6, title: "Sıfatlar ve Değişmeyen Sıfatlar - Kapsamlı Rehber",
    rules: [
        {
            id: "sentence-formula",
            title: "📐 Cümle Formülü (Basit Cümle Nasıl Kurulur?)",
            explanation: "İspanyolca'da bir şeyi tarif ederken genellikle **'Ser' (Olmak)** fiilini kullanırız.\n\n**Formül:** [İSİM] + [ES / SON] + [SIFAT]\n\n* **Es:** Tekil şeyler için\n* **Son:** Çoğul şeyler için",
            examples: [
                { es: "El coche es rojo", tr: "Araba kırmızıdır (tekil → es)" },
                { es: "Los coches son rojos", tr: "Arabalar kırmızıdır (çoğul → son)" },
                { es: "La casa es grande", tr: "Ev büyüktür" },
                { es: "Las casas son grandes", tr: "Evler büyüktür" }
            ]
        },
        {
            id: "chameleon-adjectives",
            title: "🦎 Bukalemun Sıfatlar (Cinsiyete Göre Değişenler)",
            explanation: "Bunu önceki derste biraz görmüştük. Bu sıfatlar **ismin cinsiyeti neyse ona dönüşürler**. Genellikle **-o** ile biterler.\n\n**Örnek:** Simpático (Sempatik/Hoş)\n* Juan (Erkek) → Juan es simpátic**o**\n* Maria (Kadın) → Maria es simpátic**a**\n* Onlar (Erkekler) → Ellos son simpátic**os**\n* Onlar (Kadınlar) → Ellas son simpátic**as**",
            table: {
                headers: ["Kim?", "Cümle", "Açıklama"],
                rows: [
                    ["Juan (Erkek)", "Juan es simpático", "Juan erkek → -o"],
                    ["Maria (Kadın)", "Maria es simpática", "Maria kadın → -a"],
                    ["Onlar (Erkekler)", "Ellos son simpáticos", "Çoğul erkekler → -os"],
                    ["Onlar (Kadınlar)", "Ellas son simpáticas", "Çoğul kadınlar → -as"]
                ]
            },
            examples: [
                { es: "El niño es alto → La niña es alta", tr: "Erkek çocuk uzun → Kız çocuk uzun" },
                { es: "Los gatos son pequeños → Las gatas son pequeñas", tr: "Kediler (erkek) küçük → Kediler (dişi) küçük" }
            ]
        },
        {
            id: "stubborn-adjectives-intro",
            title: "🧱 İnatçı Sıfatlar (Cinsiyete Göre DEĞİŞMEYENLER)",
            explanation: "İşte asıl konumuz bu! Bazı sıfatlar vardır ki, özne kadın da olsa erkek de olsa **asla değişmezler**. Biz bunlara 'Unisex Sıfatlar' diyebiliriz.\n\n**Kural:** Eğer bir sıfat **'-e' harfiyle** veya bir **sessiz harf (l, n, r, s, z)** ile bitiyorsa, cinsiyet ayrımı yapmaz!",
            examples: [
                { es: "El chico es inteligente", tr: "Erkek çocuk zeki" },
                { es: "La chica es inteligente", tr: "Kız çocuk zeki (değişmedi!)" }
            ]
        },
        {
            id: "stubborn-e-ending",
            title: "🅰️ '-e' ile Bitenler",
            explanation: "En popüler örnekler:\n* **Inteligente** (Zeki)\n* **Grande** (Büyük)\n* **Interesante** (İlginç)\n* **Importante** (Önemli)\n* **Caliente** (Sıcak)\n\nGördün mü? Kız için 'inteligenta' demedik, çünkü kelime zaten **-e** ile bitiyor!",
            examples: [
                { es: "El chico es inteligente / La chica es inteligente", tr: "Erkek zeki / Kız zeki (aynı!)" },
                { es: "El libro es interesante / La película es interesante", tr: "Kitap ilginç / Film ilginç" },
                { es: "El problema es grande / La ciudad es grande", tr: "Sorun büyük / Şehir büyük" }
            ]
        },
        {
            id: "stubborn-consonant-ending",
            title: "🅱️ Sessiz Harf ile Bitenler",
            explanation: "En popüler örnekler:\n* **Azul** (Mavi) - L ile bitiyor\n* **Difícil** (Zor) - L ile bitiyor\n* **Fácil** (Kolay) - L ile bitiyor\n* **Joven** (Genç) - N ile bitiyor\n* **Feliz** (Mutlu) - Z ile bitiyor\n\nDers dişil olsa bile sıfat değişmedi!",
            examples: [
                { es: "El examen es difícil / La lección es difícil", tr: "Sınav zor / Ders zor (aynı!)" },
                { es: "El cielo es azul / La camisa es azul", tr: "Gökyüzü mavi / Gömlek mavi" },
                { es: "El chico es joven / La chica es joven", tr: "Erkek genç / Kız genç" }
            ]
        },
        {
            id: "plural-trap",
            title: "⚠️ Büyük Tuzak! (Çoğul Yapmayı Unutma!)",
            explanation: "A1 öğrencileri genelde şunu karıştırır:\n'Hocam bu sıfatlar değişmiyor dediniz, o zaman çoğul yaparken de mi değişmiyor?'\n\n**HAYIR!** Cinsiyete göre değişmezler ama **sayıya göre (çoğul olunca) mutlaka değişirler!** İspanyolca'da çoğul kuralı affetmez.\n\n**Önemli Not:** Feliz (Mutlu) kelimesi **-z** ile bittiği için çoğul olurken **z → c** dönüşür (Felices).",
            table: {
                headers: ["Tekil (Değişmez)", "Çoğul (Mutlaka Değişir!)", "Örnek Cümle"],
                rows: [
                    ["Inteligente", "Inteligentes", "Mis amigos son inteligentes"],
                    ["Grande", "Grandes", "Las casas son grandes"],
                    ["Azul", "Azules", "Los ojos son azules"],
                    ["Joven", "Jóvenes", "Ellas son jóvenes"],
                    ["Feliz", "Felices (z→c)", "Nosotros somos felices"]
                ]
            },
            examples: [
                { es: "El estudiante es inteligente → Los estudiantes son inteligentes", tr: "Öğrenci zeki → Öğrenciler zeki" },
                { es: "Soy feliz → Somos felices", tr: "Mutluyum → Mutluyuz" }
            ]
        },
        {
            id: "color-summary",
            title: "🎨 Özet Tablo: Renklerle Anlayalım",
            explanation: "Bazı renkler değişir, bazıları değişmez. Bu tabloyu kafana yazarsan çok rahat edersin.",
            table: {
                headers: ["Renk", "Türü", "Eril Örnek", "Dişil Örnek"],
                rows: [
                    ["Rojo (Kırmızı)", "Değişken (-o)", "Coche rojo", "Mesa roja"],
                    ["Negro (Siyah)", "Değişken (-o)", "Gato negro", "Gata negra"],
                    ["Blanco (Beyaz)", "Değişken (-o)", "Libro blanco", "Camisa blanca"],
                    ["Verde (Yeşil)", "Değişmez (-e)", "Libro verde", "Flor verde"],
                    ["Azul (Mavi)", "Değişmez (Sessiz)", "Pantalón azul", "Falda azul"],
                    ["Gris (Gri)", "Değişmez (Sessiz)", "Pelo gris", "Chaqueta gris"]
                ]
            },
            examples: [
                { es: "Tengo un coche rojo y una moto roja", tr: "Kırmızı bir arabam ve kırmızı bir motorum var" },
                { es: "Tengo un libro verde y una flor verde", tr: "Yeşil bir kitabım ve yeşil bir çiçeğim var (aynı!)" }
            ]
        }
    ]
};


// ===== ÜNİTE 7: GÜNLER VE ZAMAN EDATLARI =====
const unit7Grammar: UnitGrammar = {
    unitId: 7, title: "Günler ve Aylar için Edatlar - Kapsamlı Rehber",
    rules: [
        {
            id: "days-intro",
            title: "🚫 Günler İçin Kural: 'Asla EN yok!'",
            explanation: "Türkçe'de 'Pazarteside', 'Salıda' gibi ekler kullanırız. İspanyolca öğrenenler de genelde İngilizce'deki 'on' veya Türkçe'deki '-de/-da' mantığıyla **'En lunes'** deme hatasına düşerler.\n\n**Bunu sakın yapma!**\n\nİspanyolca'da günlerin başına sadece **tanımlık (artículo)** gelir, edat değil!\n\n**Özet:** Günleri söylerken 'En' kelimesini sözlüğünden sil, yerine 'El' veya 'Los' koy.",
            examples: [
                { es: "❌ En lunes (YANLIŞ!)", tr: "Asla böyle deme!" },
                { es: "✅ El lunes (DOĞRU)", tr: "Pazartesi günü" }
            ]
        },
        {
            id: "days-singular",
            title: "📅 Tek Bir Gün: 'El' Kullanımı",
            explanation: "Eğer **tek bir günden** bahsediyorsan (bu Pazartesi, gelecek Salı gibi), günün başına **'El'** gelir.\n\n**Formül:** El + [gün]\n\n* El lunes (Pazartesi günü)\n* El sábado (Cumartesi günü)\n* El viernes (Cuma günü)",
            examples: [
                { es: "Voy al cine el martes", tr: "Salı günü sinemaya gidiyorum" },
                { es: "El domingo vamos a la playa", tr: "Pazar günü plaja gidiyoruz" },
                { es: "Tengo un examen el jueves", tr: "Perşembe günü sınavım var" },
                { es: "¿Qué haces el viernes?", tr: "Cuma günü ne yapıyorsun?" }
            ]
        },
        {
            id: "days-plural",
            title: "🔄 Her Hafta Tekrarlanan Günler: 'Los' Kullanımı",
            explanation: "Eğer **her hafta tekrarlanan** günlerden bahsediyorsan (Her Pazartesi, Pazartesileri gibi), günün başına **'Los'** gelir.\n\n**Formül:** Los + [gün çoğul hali]\n\n* Los lunes (Pazartesileri / Her Pazartesi)\n* Los domingos (Pazarları / Her Pazar)\n* Los sábados (Cumartesileri)",
            examples: [
                { es: "No trabajo los domingos", tr: "Pazarları çalışmam" },
                { es: "Los lunes tengo clase de español", tr: "Pazartesileri İspanyolca dersim var" },
                { es: "Voy al gimnasio los miércoles", tr: "Çarşambaları spor salonuna giderim" },
                { es: "Los viernes salgo con mis amigos", tr: "Cumaları arkadaşlarımla çıkarım" }
            ]
        },
        {
            id: "months-rule",
            title: "📦 Aylar İçin Kural: 'Kutunun İçine Gir'",
            explanation: "Aylar uzun zaman dilimleridir (30 gün). Bu yüzden aylar için **'En'** (içinde, -de/-da) edatını kullanırız.\n\nSanki o ayın **'içindeymişiz'** gibi düşün.\n\n**Formül:** En + [ay]\n\n* En enero (Ocak'ta)\n* En mayo (Mayıs'ta)\n* En agosto (Ağustos'ta)",
            examples: [
                { es: "Mi cumpleaños es en octubre", tr: "Doğum günüm Ekim'de" },
                { es: "Vamos a Madrid en septiembre", tr: "Eylül'de Madrid'e gidiyoruz" },
                { es: "En enero hace frío", tr: "Ocak'ta hava soğuktur" },
                { es: "Las vacaciones son en agosto", tr: "Tatil Ağustos'ta" }
            ]
        },
        {
            id: "comparison-table",
            title: "📊 Karşılaştırma Tablosu",
            explanation: "Günler ve aylar arasındaki farkı bir tabloda görelim:",
            table: {
                headers: ["Zaman", "Edat/Ön Ek", "İspanyolcası", "Türkçe Mantığı"],
                rows: [
                    ["Pazartesi (Tek Gün)", "El", "El lunes", "O Pazartesi"],
                    ["Pazartesileri (Tekrar)", "Los", "Los lunes", "Her Pazartesi"],
                    ["Ocak (Ay)", "En", "En enero", "Ocak'ın içinde"],
                    ["Yaz (Mevsim)", "En", "En verano", "Yaz'ın içinde"]
                ]
            },
            examples: [
                { es: "El lunes voy al médico", tr: "Pazartesi doktora gidiyorum" },
                { es: "Los lunes voy al médico", tr: "Pazartesileri doktora giderim" }
            ]
        },
        {
            id: "seasons",
            title: "🌸 Bonus: Mevsimler de 'En' ile!",
            explanation: "Mevsimler de aylar gibi uzun dönemlerdir, bu yüzden onlar için de **'En'** kullanırız.\n\n* En primavera (İlkbahar'da)\n* En verano (Yaz'da)\n* En otoño (Sonbahar'da)\n* En invierno (Kış'ta)",
            examples: [
                { es: "En verano hace calor", tr: "Yazın hava sıcaktır" },
                { es: "En invierno nieva", tr: "Kışın kar yağar" },
                { es: "Me gusta el otoño", tr: "Sonbaharı severim" },
                { es: "Las flores crecen en primavera", tr: "Çiçekler ilkbaharda büyür" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "El sábado voy a una fiesta", tr: "Cumartesi bir partiye gidiyorum" },
                { es: "Los sábados siempre salgo", tr: "Cumartesileri her zaman çıkarım" },
                { es: "Mi hermano nace en marzo", tr: "Kardeşim Mart'ta doğdu" },
                { es: "¿Qué día es hoy? - Hoy es lunes", tr: "Bugün günlerden ne? - Bugün Pazartesi" },
                { es: "En diciembre celebramos la Navidad", tr: "Aralık'ta Noel'i kutlarız" }
            ]
        }
    ]
};


// ===== ÜNİTE 8: SAYILARIN YAZIMI =====
const unit8Grammar: UnitGrammar = {
    unitId: 8, title: "Sayılar 20-100 - Kapsamlı Rehber",
    rules: [
        {
            id: "numbers-20-intro",
            title: "👯 'Yapışık Kardeşler': 20-29 Arası",
            explanation: "20 ile 29 arasındaki sayılar **TEK KELİME** olarak yazılır.\n\nEskiden 'Veinte y uno' (Yirmi ve bir) denirdi ama zamanla hızlı söylene söylene bu kelimeler kaynaşmış.\n\n**Formül:** VEINTE kelimesindeki sondaki **-e** düşer, yerine **-i** gelir ve sayı eklenir.\n\n**🎓 Koçun Uyarısı:** Sadece **22, 23 ve 26**'da vurgu işareti (tilde) vardır. Diğerlerinde yok!",
            examples: [
                { es: "20: Veinte", tr: "Yirmi" },
                { es: "21: Veintiuno", tr: "Yirmi bir" },
                { es: "22: Veintidós ✓", tr: "Yirmi iki (vurgu var!)" },
                { es: "23: Veintitrés ✓", tr: "Yirmi üç (vurgu var!)" }
            ]
        },
        {
            id: "numbers-20-table",
            title: "📋 20'li Sayılar Tablosu",
            explanation: "Tüm 20'li sayıları bir arada görelim:",
            table: {
                headers: ["Sayı", "İspanyolcası", "Vurgu?"],
                rows: [
                    ["20", "Veinte", "Hayır"],
                    ["21", "Veintiuno", "Hayır"],
                    ["22", "Veintidós", "EVET ✓"],
                    ["23", "Veintitrés", "EVET ✓"],
                    ["24", "Veinticuatro", "Hayır"],
                    ["25", "Veinticinco", "Hayır"],
                    ["26", "Veintiséis", "EVET ✓"],
                    ["27", "Veintisiete", "Hayır"],
                    ["28", "Veintiocho", "Hayır"],
                    ["29", "Veintinueve", "Hayır"]
                ]
            },
            examples: [
                { es: "Tengo veintidós años", tr: "22 yaşındayım" },
                { es: "Hay veinticinco estudiantes", tr: "25 öğrenci var" }
            ]
        },
        {
            id: "numbers-30-99",
            title: "🔀 'Ayrık Kardeşler': 30-99 Arası",
            explanation: "30'dan itibaren özgürlüğümüzü ilan ediyoruz! Artık kelimeleri birleştirmiyoruz. Araya Türkçe'deki 've' anlamına gelen **'y'** harfini koyuyoruz.\n\n**Formül:** [ONLUK SAYI] + y + [BİRLİK SAYI]\n\nÖnce onlukları ezberleyelim, bunlar şart!",
            table: {
                headers: ["Sayı", "İspanyolcası", "Okunuşu", "İpucu"],
                rows: [
                    ["30", "Treinta", "Treynta", "-"],
                    ["40", "Cuarenta", "Kuarenta", "-"],
                    ["50", "Cincuenta", "Sinkuenta", "-"],
                    ["60", "Sesenta", "Sesenta", "'S' ile başlar (Seis-6)"],
                    ["70", "Setenta", "Setenta", "'T' vardır (Siete-7)"],
                    ["80", "Ochenta", "Oçenta", "(Ocho-8'den hatırla)"],
                    ["90", "Noventa", "Nobenta", "(Nueve-9'dan hatırla)"]
                ]
            },
            examples: [
                { es: "31 → Treinta y uno", tr: "Otuz bir" },
                { es: "45 → Cuarenta y cinco", tr: "Kırk beş" },
                { es: "58 → Cincuenta y ocho", tr: "Elli sekiz" },
                { es: "99 → Noventa y nueve", tr: "Doksan dokuz" }
            ]
        },
        {
            id: "numbers-100",
            title: "💯 Büyük Final: 100",
            explanation: "100 sayısı biraz özeldir.\n\n* Tam olarak 100 diyorsan: **Cien**\n* 101, 102 gibi devam edeceksen: **Ciento...** (Ama şimdilik sadece 100'de duralım.)\n\n**Örnekler:**\n* 100 = Cien\n* 100 kişi = Cien personas",
            examples: [
                { es: "Cien por ciento", tr: "Yüzde yüz" },
                { es: "Tengo cien euros", tr: "100 eurom var" },
                { es: "Hay cien personas", tr: "100 kişi var" }
            ]
        },
        {
            id: "uno-rule",
            title: "🌟 Çok Önemli 'Uno' Kuralı!",
            explanation: "Bunu bilirsen çok havalı olursun! 🎓\n\nSonu **'1'** ile biten sayılar (21, 31, 41...), eğer arkasından **ERİL (Masculino)** bir isim geliyorsa kısalır ve **'Un'** olur.\n\n**Tek başına:** Veintiuno (21)\n**İsimle:** Veintiún años (21 yıl)\n\n**Dişil (Femenino) kelimelerde ise 'Una' olur:**\n* 21 kız = Veintiuna chicas",
            table: {
                headers: ["Durum", "Sayı", "İsimle Kullanım"],
                rows: [
                    ["Tek başına", "Veintiuno (21)", "-"],
                    ["Eril isimle", "Veintiún", "Veintiún años"],
                    ["Dişil isimle", "Veintiuna", "Veintiuna chicas"],
                    ["Tek başına", "Treinta y uno (31)", "-"],
                    ["Eril isimle", "Treinta y un", "Treinta y un libros"],
                    ["Dişil isimle", "Treinta y una", "Treinta y una casas"]
                ]
            },
            examples: [
                { es: "Tengo veintiún años (21 yaş - erkek)", tr: "21 yaşındayım" },
                { es: "Hay treinta y un estudiantes", tr: "31 öğrenci var" },
                { es: "Veintiuna páginas (21 sayfa - dişil)", tr: "21 sayfa" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Mi padre tiene cincuenta y dos años", tr: "Babam 52 yaşında" },
                { es: "Hay setenta y cinco estudiantes en la clase", tr: "Sınıfta 75 öğrenci var" },
                { es: "El libro cuesta veintitrés euros", tr: "Kitap 23 euro" },
                { es: "Vivo en el piso cuarenta y uno", tr: "41. katta yaşıyorum" },
                { es: "Son las ochenta y nueve páginas", tr: "89 sayfa" }
            ]
        }
    ]
};


// ===== ÜNİTE 9: EV VE ESTAR =====
const unit9Grammar: UnitGrammar = {
    unitId: 9, title: "ESTAR Fiili ve Konum Bildirme - Kapsamlı Rehber",
    rules: [
        {
            id: "estar-conjugation",
            title: "📝 ESTAR Fiilinin Çekimi (Şimdiki Zaman)",
            explanation: "Önce 'Olmak / Bulunmak' anlamına gelen bu fiili çekimlememiz lazım. Bu fiil biraz asidir, **vurgulara dikkat et!**\n\n**⚠️ Koç Uyarısı:** Estás, Está ve Están kelimelerindeki **vurgu işaretlerini (tilde)** sakın unutma!\n\nEğer 'Esta' dersen 'Bu' demek olur, 'Está' dersen 'O ...-da' demek olur. Anlam tamamen değişir!",
            table: {
                headers: ["Kişi", "Estar Çekimi", "Okunuşu", "Anlamı"],
                rows: [
                    ["Yo", "Estoy", "Estoy", "Ben ...-dayım"],
                    ["Tú", "Estás ✓", "Estas", "Sen ...-dasın"],
                    ["Él / Ella", "Está ✓", "Esta", "O ...-da"],
                    ["Nosotros/as", "Estamos", "Estamos", "Biz ...-dayız"],
                    ["Vosotros/as", "Estáis ✓", "Estais", "Siz ...-dasınız"],
                    ["Ellos / Ellas", "Están ✓", "Estan", "Onlar ...-dalar"]
                ]
            },
            examples: [
                { es: "Estoy bien", tr: "İyiyim" },
                { es: "¿Dónde estás?", tr: "Neredesin?" },
                { es: "Ella está en casa", tr: "O evde" }
            ]
        },
        {
            id: "en-preposition",
            title: "✨ Sihirli Edat: 'EN'",
            explanation: "Türkçe'de biz mekanın sonuna **'-de, -da, -te, -ta'** ekleriz (Evde, Okulda).\n\nİspanyolca'da ise mekanın **başına 'EN'** kelimesini koyarız.\n\n**EN = İçinde, üstünde, -de, -da**",
            examples: [
                { es: "En casa", tr: "Evde" },
                { es: "En el colegio", tr: "Okulda" },
                { es: "En la mesa", tr: "Masada / Masanın üzerinde" },
                { es: "En Estambul", tr: "İstanbul'da" },
                { es: "En el trabajo", tr: "İşte" }
            ]
        },
        {
            id: "sentence-formula",
            title: "📐 Cümle Kurma Formülü",
            explanation: "Şimdi tuğlaları birleştirelim:\n\n**ÖZNE + ESTAR (Çekimlenmiş) + EN + MEKAN**\n\nBu formül ile konum bildiren cümleler kurabilirsin.",
            examples: [
                { es: "Yo estoy en España", tr: "Ben İspanya'dayım" },
                { es: "Nosotros estamos en Eskişehir", tr: "Biz Eskişehir'deyiz" },
                { es: "Tú estás en la escuela", tr: "Sen okuldasın" },
                { es: "Juan está en casa", tr: "Juan evde" }
            ]
        },
        {
            id: "estar-examples-cities",
            title: "🌍 Şehirlerde/Ülkelerde Kullanım",
            explanation: "Şehir ve ülkeler için ESTAR + EN kullanılır:",
            examples: [
                { es: "Estoy en Madrid", tr: "Madrid'deyim" },
                { es: "Ella está en Turquía", tr: "O Türkiye'de" },
                { es: "Estamos en Barcelona", tr: "Barselona'dayız" },
                { es: "¿Estás en Estambul?", tr: "İstanbul'da mısın?" }
            ]
        },
        {
            id: "estar-examples-places",
            title: "🏢 Binalarda/Yerlerde Kullanım",
            explanation: "Binalar ve yerler için de ESTAR + EN kullanılır.\n\n**Not:** 'Casa' kelimesi genelde 'la' almadan kullanılır, tıpkı 'evdeyim' der gibi.",
            examples: [
                { es: "Estoy en el hospital", tr: "Hastanedeyim" },
                { es: "Él está en el banco", tr: "O bankada" },
                { es: "Estamos en casa", tr: "Evdeyiz (la yok!)" },
                { es: "¿Dónde está el baño?", tr: "Tuvalet nerede?" }
            ]
        },
        {
            id: "estar-objects",
            title: "📦 Nesnelerin Konumu",
            explanation: "Nesnelerin nerede olduğunu söylerken de ESTAR kullanılır. Çoğul özneye dikkat!",
            examples: [
                { es: "El libro está en la mesa", tr: "Kitap masada" },
                { es: "Las llaves están en el bolso", tr: "Anahtarlar çantada (çoğul!)" },
                { es: "Mi teléfono está en la cocina", tr: "Telefonum mutfakta" },
                { es: "Los gatos están en el jardín", tr: "Kediler bahçede" }
            ]
        },
        {
            id: "ser-vs-estar",
            title: "🧠 Ser vs Estar Ayrımı",
            explanation: "A1 öğrencileri genelde şunu karıştırır:\n'Hocam ben Türküm derken **Soy turco** diyorum, Türkiye'deyim derken niye **Estoy en Turquía** diyorum?'\n\n**SER:** Senin **kimliğindir**. Değişmez (kolay kolay). (Nerelisin, kimsin?)\n**ESTAR:** Senin **konumundur** veya **duygundur**. Değişir. (Neredesin, nasılsın?)\n\n**🎵 Tekerleme:** 'How you feel and where you are, always use the verb ESTAR.'\n(Nasıl hissettiğin ve nerede olduğun, her zaman ESTAR.)",
            table: {
                headers: ["Kullanım", "Fiil", "Örnek", "Neden?"],
                rows: [
                    ["Milliyet", "SER", "Soy turco", "Kimlik - Değişmez"],
                    ["Konum", "ESTAR", "Estoy en Turquía", "Konum - Değişebilir"],
                    ["Meslek", "SER", "Soy médico", "Kimlik"],
                    ["Duygu", "ESTAR", "Estoy feliz", "Geçici durum"]
                ]
            },
            examples: [
                { es: "Soy de Madrid (Köken-SER)", tr: "Madridliyim" },
                { es: "Estoy en Madrid (Konum-ESTAR)", tr: "Madrid'deyim" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "¿Dónde está mi madre? - Está en el supermercado", tr: "Annem nerede? - Markette" },
                { es: "Los estudiantes están en clase", tr: "Öğrenciler sınıfta" },
                { es: "No estoy en casa, estoy en el trabajo", tr: "Evde değilim, işteyim" },
                { es: "¿Estáis listos?", tr: "Hazır mısınız?" },
                { es: "El gato está debajo de la mesa", tr: "Kedi masanın altında" }
            ]
        }
    ]
};


// ===== ÜNİTE 10: EŞYALAR VE HAY =====
const unit10Grammar: UnitGrammar = {
    unitId: 10, title: "HAY - Varlık Bildirme - Kapsamlı Rehber",
    rules: [
        {
            id: "hay-intro",
            title: "📚 HAY (Okunuşu: Ay) Nedir?",
            explanation: "**'Hay'**, Haber fiilinden gelir ve Türkçe'deki **'Vardır'** anlamını taşır.\n\nBu kelimenin en güzel yanı nedir biliyor musun? **Değişmez!** Tekil için de çoğul için de aynıdır.\n\n(İngilizce'deki 'There is / There are' farkı burada yok, hep 'Hay'.)",
            examples: [
                { es: "Hay un libro", tr: "Bir kitap var" },
                { es: "Hay dos libros", tr: "İki kitap var (Hay değişmedi!)" },
                { es: "Hay muchos gatos", tr: "Çok kedi var" }
            ]
        },
        {
            id: "hay-usage",
            title: "🎯 HAY Nerelerde Kullanılır?",
            explanation: "Bir şeyin **var olup olmadığını** söylerken veya **sayısını** belirtirken kullanılır. Genelde **'Belirsiz'** şeylerden bahsederiz.\n\n**Kullanım Alanları:**\n1. Belirsiz Tanımlıklarla (Un, Una, Unos, Unas)\n2. Sayılarla (Dos, Tres, Cuatro...)\n3. Miktar Belirten Kelimelerle (Mucho, Poco)\n4. Tek Başına Çoğul İsimlerle",
            examples: [
                { es: "Hay una chica", tr: "Bir kız var (Belirsiz)" },
                { es: "Hay tres gatos", tr: "Üç kedi var (Sayı)" },
                { es: "Hay mucha gente", tr: "Çok insan var (Miktar)" },
                { es: "Hay problemas", tr: "Sorunlar var (Çoğul isim)" }
            ]
        },
        {
            id: "hay-vs-estar-intro",
            title: "🥊 Büyük Kapışma: HAY vs ESTAR",
            explanation: "İşte zurnanın zırt dediği yer! İkisi de bir şeyin nerede olduğunu anlatıyor gibi görünse de mantıkları farklıdır.\n\n**HAY = Tanıştırma ve Varlık (Belirsiz)**\nBahsettiğimiz nesneyi ilk kez söylüyorsak veya hangi nesne olduğu belli değilse.\n**Soru:** Ne var? (Var mı yok mu?)\n**İpucu:** Kelimenin başında Un, Una veya Sayı varsa kesin Hay'dır.\n\n**ESTAR = Konum Bulma (Belirli)**\nBahsettiğimiz nesneyi zaten tanıyorsak ve sadece 'Şu an nerede?' diye soruyorsak.\n**Soru:** Nerede?\n**İpucu:** Kelimenin başında El, La, Los, Las, Mi, Tu varsa kesin Estar'dır.",
            examples: [
                { es: "¿Hay un banco cerca?", tr: "Yakında bir banka var mı? (HAY - belirsiz)" },
                { es: "¿Dónde está el banco?", tr: "Banka nerede? (ESTAR - belirli)" }
            ]
        },
        {
            id: "hay-vs-estar-examples",
            title: "💡 Örneklerle 'Aydınlanma' Anı",
            explanation: "Bu iki cümleye dikkatle bak, farkı hemen göreceksin:\n\n**Durum 1: HAY**\nMutfakta ne var?\n→ Hay una manzana en la cocina.\n(Hangi elma olduğu önemli değil, sadece varlığını söylüyorum.)\n\n**Durum 2: ESTAR**\nElma nerede? (Belli bir elmayı arıyorum)\n→ La manzana está en la cocina.\n(Bildiğimiz o elmanın konumunu söylüyorum.)",
            examples: [
                { es: "Hay una manzana en la cocina", tr: "Mutfakta bir elma var (HAY - varlık)" },
                { es: "La manzana está en la cocina", tr: "Elma mutfakta (ESTAR - konum)" },
                { es: "Hay un coche en la calle", tr: "Sokakta bir araba var" },
                { es: "El coche está en la calle", tr: "Araba sokakta" }
            ]
        },
        {
            id: "hay-golden-table",
            title: "🏆 Koçun Altın Tablosu",
            explanation: "Bu tabloyu masana asmalısın! Soruyu çözerken **kelimenin önüne bakman yeterli**.",
            table: {
                headers: ["Kelimenin Önünde Ne Var?", "Hangi Fiil?", "Örnek"],
                rows: [
                    ["Un / Una / Unos", "HAY", "Hay un coche"],
                    ["Sayılar (2, 10, 100)", "HAY", "Hay dos coches"],
                    ["Mucho / Poco", "HAY", "Hay muchos coches"],
                    ["El / La / Los / Las", "ESTAR", "El coche está aquí"],
                    ["Mi / Tu / Su", "ESTAR", "Mi coche está aquí"],
                    ["Özel İsim (Ali, İstanbul)", "ESTAR", "Ali está aquí"]
                ]
            },
            examples: [
                { es: "Hay muchas personas aquí", tr: "Burada çok insan var (HAY)" },
                { es: "Las personas están aquí", tr: "İnsanlar burada (ESTAR)" }
            ]
        },
        {
            id: "hay-negative",
            title: "🚫 Olumsuz: 'No Hay'",
            explanation: "HAY'ın olumsuz hali çok kolaydır. Önüne **'No'** koyarsın.\n\n**No hay = Yok / ... yok**",
            examples: [
                { es: "No hay problema", tr: "Sorun yok" },
                { es: "No hay nadie en casa", tr: "Evde kimse yok" },
                { es: "No hay leche", tr: "Süt yok" },
                { es: "No hay tiempo", tr: "Zaman yok" }
            ]
        },
        {
            id: "hay-questions",
            title: "❓ Soru Sorma",
            explanation: "HAY ile soru sormak için cümlenin başına **¿** koyarsın veya **¿Qué...?**, **¿Cuántos...?** gibi soru kelimeleri kullanırsın.",
            examples: [
                { es: "¿Hay agua?", tr: "Su var mı?" },
                { es: "¿Qué hay en la nevera?", tr: "Buzdolabında ne var?" },
                { es: "¿Cuántos estudiantes hay?", tr: "Kaç öğrenci var?" },
                { es: "¿Hay un banco cerca de aquí?", tr: "Buraya yakın banka var mı?" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "En mi ciudad hay muchos parques", tr: "Şehrimde çok park var" },
                { es: "¿Hay wifi aquí?", tr: "Burada wifi var mı?" },
                { es: "No hay problema, está bien", tr: "Sorun yok, tamam" },
                { es: "Hay tres libros en la mesa, pero el libro rojo está en la silla", tr: "Masada üç kitap var ama kırmızı kitap sandalyede" }
            ]
        }
    ]
};


// ===== ÜNİTE 11: DOLER (AĞRIMAK) =====
const unit11Grammar: UnitGrammar = {
    unitId: 11, title: "DOLER Fiili (Ağrımak) - Kapsamlı Rehber",
    rules: [
        {
            id: "doler-golden-rule",
            title: "🧠 Altın Kural: 'Ağrıyan Şey Öznedir'",
            explanation: "Bu cümlede **patron sen değilsin, patron ağrıyan vücut bölümüdür!**\n\n* Eğer ağrıyan yer **TEK bir şeyse** (Baş, Mide, Sırt) → **DUELE**\n* Eğer ağrıyan yer **ÇOK şeyse** (Ayaklar, Gözler, Dişler) → **DUELEN**\n\n**Kelime Notu:** Doler fiili de 'Bot (Ayakkabı)' fiilidir. 'o' harfi 'ue'ye dönüşür. (Doler → Duele)",
            examples: [
                { es: "Me duele la cabeza (Baş = tekil)", tr: "Başım ağrıyor" },
                { es: "Me duelen los pies (Ayaklar = çoğul)", tr: "Ayaklarım ağrıyor" }
            ]
        },
        {
            id: "doler-formula",
            title: "📐 Formül Tablosu",
            explanation: "Cümleyi kurarken şu sırayı takip edeceksin:\n\n**[Kime?] + [Zamir] + [Duele / Duelen] + [Vücut Bölümü]**",
            table: {
                headers: ["Kime? (Zamir)", "Tekil Ağrı (Duele)", "Çoğul Ağrı (Duelen)"],
                rows: [
                    ["Me (Bana)", "Me duele la cabeza", "Me duelen los pies"],
                    ["Te (Sana)", "Te duele la barriga", "Te duelen los ojos"],
                    ["Le (Ona)", "Le duele la espalda", "Le duelen las manos"],
                    ["Nos (Bize)", "Nos duele la garganta", "Nos duelen las piernas"],
                    ["Os (Size)", "Os duele el oído", "Os duelen los dedos"],
                    ["Les (Onlara)", "Les duele el diente", "Les duelen los dientes"]
                ]
            },
            examples: [
                { es: "Me duele el estómago", tr: "Midem ağrıyor" },
                { es: "Le duelen los pies", tr: "Ayakları ağrıyor (Onun)" }
            ]
        },
        {
            id: "body-parts",
            title: "🏥 Vücut Bölümleri (Hızlı Sözlük)",
            explanation: "Ağrını tarif edebilmen için şu temel parçaları bilmen lazım:",
            table: {
                headers: ["İspanyolca", "Türkçe", "Tekil/Çoğul"],
                rows: [
                    ["La cabeza", "Baş", "Tekil → Duele"],
                    ["El estómago / La barriga", "Mide / Karın", "Tekil → Duele"],
                    ["La garganta", "Boğaz", "Tekil → Duele"],
                    ["La espalda", "Sırt", "Tekil → Duele"],
                    ["El oído", "Kulak (iç)", "Tekil → Duele"],
                    ["Los dientes", "Dişler", "Çoğul → Duelen"],
                    ["Los pies", "Ayaklar", "Çoğul → Duelen"],
                    ["Los ojos", "Gözler", "Çoğul → Duelen"],
                    ["Las manos", "Eller", "Çoğul → Duelen"]
                ]
            },
            examples: [
                { es: "Me duele la garganta", tr: "Boğazım ağrıyor" },
                { es: "Me duelen los ojos", tr: "Gözlerim ağrıyor" }
            ]
        },
        {
            id: "tip-no-possessive",
            title: "⚠️ Püf Noktası A: İyelik Eki Yok!",
            explanation: "Türkçe'de 'Benim başım' deriz. İspanyolca'da **'Mi cabeza'** denmez!\n\nÇünkü baştaki **'Me'** (Bana) kelimesi zaten kimin başı olduğunu anlatır.\n\n**❌ YANLIŞ:** ~~Me duele mi cabeza.~~\n**✅ DOĞRU:** Me duele la cabeza.",
            examples: [
                { es: "✅ Me duele la cabeza", tr: "Başım ağrıyor (la kullan, mi değil!)" },
                { es: "✅ Te duelen los pies", tr: "Ayakların ağrıyor (los kullan, tus değil!)" }
            ]
        },
        {
            id: "tip-le-clarification",
            title: "⚠️ Püf Noktası B: 'Le' Kim?",
            explanation: "'Le duele la cabeza' dediğinde, 'Onun başı ağrıyor' demiş olursun. Ama bu 'O' kim? Ahmet mi? Ayşe mi? Baban mı?\n\nBunu netleştirmek için cümlenin en başına **'A ...'** kalıbı ekleriz.\n\n**Formül:** A [kişi] + le/les + duele/duelen + [vücut bölümü]",
            examples: [
                { es: "A Ahmet le duele la cabeza", tr: "Ahmet'in başı ağrıyor" },
                { es: "A mi madre le duelen los pies", tr: "Annemin ayakları ağrıyor" },
                { es: "A mis amigos les duele el estómago", tr: "Arkadaşlarımın midesi ağrıyor" }
            ]
        },
        {
            id: "doler-questions",
            title: "❓ Soru Sorma",
            explanation: "Ağrı hakkında soru sormak için cümlenin başına **¿** koyarsın:",
            examples: [
                { es: "¿Te duele la garganta?", tr: "Boğazın mı ağrıyor?" },
                { es: "¿Le duele la cabeza?", tr: "Başı mı ağrıyor?" },
                { es: "¿Qué te duele?", tr: "Neren ağrıyor?" },
                { es: "¿Dónde te duele?", tr: "Neren ağrıyor? (Nerede ağrıyor?)" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Örneklerle Pekiştirelim",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Me duele la cabeza", tr: "Başım ağrıyor (Baş tekil → Duele, Bana → Me)" },
                { es: "Me duelen los pies", tr: "Ayaklarım ağrıyor (Ayaklar çoğul → Duelen)" },
                { es: "A Juan le duele el estómago", tr: "Juan'ın midesi ağrıyor" },
                { es: "¿Te duele la garganta?", tr: "Boğazın mı ağrıyor?" },
                { es: "A mi hermano le duelen los dientes", tr: "Kardeşimin dişleri ağrıyor" }
            ]
        }
    ]
};


// ===== ÜNİTE 12: GİYİM VE LLEVAR =====
const unit12Grammar: UnitGrammar = {
    unitId: 12, title: "LLEVAR Fiili - Kapsamlı Rehber",
    rules: [
        {
            id: "llevar-conjugation",
            title: "🛠️ Çekim Tablosu (Geniş Zaman)",
            explanation: "Klasik **-ar** fiili çekimi. Kökümüz **Llev-**.\n\n**Telaffuz İpucu:** İspanyolca'da çift L (**ll**) harfi, 'Y' harfine yakın okunur (Arjantin tarafında 'Ş' gibi okunsa da standart İspanyolca'da 'Y' gibidir).",
            table: {
                headers: ["Kişi", "Çekim", "Okunuşu"],
                rows: [
                    ["Yo", "Llevo", "Yebo / Liebo"],
                    ["Tú", "Llevas", "Yebas"],
                    ["Él / Ella", "Lleva", "Yeba"],
                    ["Nosotros/as", "Llevamos", "Yebamos"],
                    ["Vosotros/as", "Lleváis", "Yebais"],
                    ["Ellos / Ellas", "Llevan", "Yeban"]
                ]
            },
            examples: [
                { es: "Yo llevo, tú llevas, él lleva...", tr: "Ben giyiyorum, sen giyiyorsun, o giyiyor..." }
            ]
        },
        {
            id: "llevar-wear",
            title: "👕 Anlam 1: GİYMEK / ÜZERİNDE TAŞIMAK",
            explanation: "A1 seviyesinde en çok bunu kullanacaksın. 'Üzerinde ne var?', 'Bugün ne giyiyorsun?' derken LLEVAR kullanılır.\n\nSadece kıyafet değil; **gözlük, sakal, çanta, aksesuar**... Vücudunda taşıdığın her şey için geçerlidir.\n\n**Kalıp:** [Özne] + [Llevar] + [Kıyafet/Aksesuar]",
            examples: [
                { es: "Llevo una camisa blanca", tr: "Beyaz bir gömlek giyiyorum / üzerimde var" },
                { es: "Ella lleva gafas", tr: "O gözlük takıyor" },
                { es: "Juan lleva barba", tr: "Juan'ın sakalı var / sakallı" },
                { es: "Llevo un vestido rojo", tr: "Kırmızı bir elbise giyiyorum" },
                { es: "¿Qué llevas hoy?", tr: "Bugün ne giyiyorsun?" }
            ]
        },
        {
            id: "llevar-take",
            title: "📦 Anlam 2: GÖTÜRMEK / TAŞIMAK",
            explanation: "İkinci en önemli anlamı: bir şeyi veya birini **A noktasından B noktasına götürmek**.\n\nTürkçe'deki 'Götürmek' kelimesinin tam karşılığıdır.\n\n**Dikkat:** Traer = Getirmek, Llevar = Götürmek\n\n**Kalıp:** [Özne] + [Llevar] + [Nesne/Kişi] + [A + Yer]",
            examples: [
                { es: "Llevo a los niños al colegio", tr: "Çocukları okula götürüyorum" },
                { es: "¿Me llevas a casa?", tr: "Beni eve götürür müsün / bırakır mısın?" },
                { es: "El camarero lleva la comida", tr: "Garson yemeği götürüyor" },
                { es: "Llevo mi mochila a la escuela", tr: "Çantamı okula götürüyorum" }
            ]
        },
        {
            id: "llevar-contain",
            title: "🍕 Bonus Anlam: 'İçermek' (Yemeklerde)",
            explanation: "Restorana gittiğinde bunu duyacaksın. Bir yemeğin içinde **hangi malzemelerin** olduğunu söylerken kullanılır.",
            examples: [
                { es: "La pizza lleva queso", tr: "Pizza peynir içerir / Pizzada peynir var" },
                { es: "La ensalada no lleva cebolla", tr: "Salatada soğan yok" },
                { es: "¿Qué lleva este plato?", tr: "Bu yemekte ne var?" },
                { es: "El bocadillo lleva jamón y queso", tr: "Sandviçte jambon ve peynir var" }
            ]
        },
        {
            id: "llevar-summary",
            title: "🎯 Özet: Hangi Anlamda Kullanıldığını Nasıl Anlarım?",
            explanation: "Bağlama (konteks) bakacaksın koçum:\n\n* Cümlenin devamında **kıyafet** varsa → **Giymek**\n* Cümlenin devamında bir **yer** (okul, ev) varsa → **Götürmek**\n* Cümlenin devamında **yiyecek malzemesi** varsa → **İçermek**",
            table: {
                headers: ["Bağlam", "Anlam", "Örnek"],
                rows: [
                    ["Kıyafet/Aksesuar", "Giymek", "Llevo gafas (Gözlük takıyorum)"],
                    ["Yer (A + lugar)", "Götürmek", "Llevo a mi hijo al parque"],
                    ["Yemek malzemesi", "İçermek", "La pizza lleva queso"]
                ]
            },
            examples: [
                { es: "Llevo una chaqueta negra", tr: "Siyah bir ceket giyiyorum" },
                { es: "Llevo a mi perro al veterinario", tr: "Köpeğimi veterinere götürüyorum" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm anlamları bir arada uygulayalım:",
            examples: [
                { es: "Hoy llevo pantalones negros y una camisa blanca", tr: "Bugün siyah pantolon ve beyaz gömlek giyiyorum" },
                { es: "Mi madre lleva a mi hermano al médico", tr: "Annem kardeşimi doktora götürüyor" },
                { es: "Esta sopa lleva mucha sal", tr: "Bu çorbada çok tuz var" },
                { es: "¿Llevas paraguas?", tr: "Şemsiye taşıyor musun?" },
                { es: "Siempre llevo mi móvil en el bolsillo", tr: "Her zaman telefonumu cebimde taşırım" }
            ]
        }
    ]
};


// ===== ÜNİTE 13: KARŞILAŞTIRMA (MÁS...QUE) =====
const unit13Grammar: UnitGrammar = {
    unitId: 13, title: "Karşılaştırma Yapma - Kapsamlı Rehber",
    rules: [
        {
            id: "comparatives-mas",
            title: "➕ Üstünlük: 'Daha ... -den/dan'",
            explanation: "Bir şeyin diğerinden **daha fazla** olduğunu söylerken kullanırız.\n\n**Formül:** MÁS + [Sıfat] + QUE\n\n* **Más:** Daha\n* **Que:** -den / -dan (İngilizce'deki 'than')\n\n**⚠️ Önemli Uyarı:** Buradaki 'Que' kelimesini soru olan 'Qué' (Ne?) ile karıştırma. Bu bağlaç olan 'Que'dir.",
            examples: [
                { es: "Juan es más alto que Maria", tr: "Juan, Maria'dan daha uzundur" },
                { es: "El Ferrari es más rápido que el Fiat", tr: "Ferrari, Fiat'tan daha hızlıdır" },
                { es: "Mi casa es más grande que tu casa", tr: "Benim evim senin evinden daha büyük" },
                { es: "Ella es más inteligente que yo", tr: "O benden daha zeki" }
            ]
        },
        {
            id: "comparatives-menos",
            title: "➖ Azlık: 'Daha Az ... -den/dan'",
            explanation: "Bir şeyin diğerinden **daha az** olduğunu söylerken kullanırız.\n\n**Formül:** MENOS + [Sıfat] + QUE\n\n* **Menos:** Daha az (Eksi)",
            examples: [
                { es: "El autobús es menos cómodo que el taxi", tr: "Otobüs, taksiden daha az rahattır" },
                { es: "Yo soy menos viejo que tú", tr: "Ben senden daha az yaşlıyım (= senden gencim)" },
                { es: "Este libro es menos interesante", tr: "Bu kitap daha az ilginç" },
                { es: "Mi coche es menos caro que el tuyo", tr: "Benim arabam seninkinden daha ucuz" }
            ]
        },
        {
            id: "comparatives-equal",
            title: "🟰 Eşitlik: '... Kadar ...'",
            explanation: "İki şeyin **aynı seviyede** olduğunu söylerken kullanırız. Buradaki kalıp biraz farklıdır, dikkat et!\n\n**Formül:** TAN + [Sıfat] + COMO\n\n* **Tan:** O kadar...\n* **Como:** ...gibi / kadar",
            examples: [
                { es: "Ayşe es tan guapa como Fatma", tr: "Ayşe, Fatma kadar güzeldir" },
                { es: "El turco es tan difícil como el árabe", tr: "Türkçe, Arapça kadar zordur" },
                { es: "Mi hermano es tan alto como yo", tr: "Kardeşim benim kadar uzun" },
                { es: "Esta película es tan buena como la otra", tr: "Bu film diğeri kadar iyi" }
            ]
        },
        {
            id: "comparatives-irregulars",
            title: "🚨 Düzensizler: Kuralları Bozanlar!",
            explanation: "İngilizce'de 'Good → Gooder' demeyiz, 'Better' deriz ya; İspanyolca'da da aynısı var.\n\n'Daha iyi' ve 'Daha kötü' derken **Más** kelimesini kullanmayız!\n\nBu iki kelimeyi ezberlemelisin:",
            table: {
                headers: ["Sıfat", "Yanlış ❌", "Doğru ✅", "Türkçe"],
                rows: [
                    ["Bueno (İyi)", "~~Más bueno~~", "MEJOR", "Daha iyi"],
                    ["Malo (Kötü)", "~~Más malo~~", "PEOR", "Daha kötü"],
                    ["Grande (Büyük)", "Más grande VEYA", "MAYOR", "Daha büyük/yaşlı"],
                    ["Pequeño (Küçük)", "Más pequeño VEYA", "MENOR", "Daha küçük/genç"]
                ]
            },
            examples: [
                { es: "La pizza es mejor que la ensalada", tr: "Pizza salatadan daha iyidir" },
                { es: "Este film es peor que el otro", tr: "Bu film diğerinden daha kötüdür" },
                { es: "Mi hermano mayor", tr: "Ağabeyim (daha büyük kardeşim)" }
            ]
        },
        {
            id: "superlatives",
            title: "🏆 Süperlatif: 'EN' Demek",
            explanation: "Bir şeyin 'daha' değil, grubun **'EN'** iyisi veya kötüsü olduğunu nasıl söyleriz?\n\nÇok basit! Karşılaştırma kalıbının başına **EL veya LA** getirirsin.\n\n**Formül:** EL / LA / LOS / LAS + MÁS + [Sıfat]\n\n* El más grande: En büyük\n* La más guapa: En güzel\n* **El mejor:** En iyi (The Best)\n* **El peor:** En kötü (The Worst)",
            examples: [
                { es: "Messi es el mejor jugador", tr: "Messi en iyi oyuncudur" },
                { es: "İstanbul es la ciudad más grande", tr: "İstanbul en büyük şehirdir" },
                { es: "Es el restaurante más caro de la ciudad", tr: "Şehrin en pahalı restoranı" },
                { es: "Ella es la más inteligente de la clase", tr: "O sınıfın en zekisi" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo",
            explanation: "Tüm karşılaştırma yapılarını bir arada görelim:",
            table: {
                headers: ["Tür", "Formül", "Örnek"],
                rows: [
                    ["Üstünlük (+)", "MÁS + sıfat + QUE", "Más alto que"],
                    ["Azlık (-)", "MENOS + sıfat + QUE", "Menos alto que"],
                    ["Eşitlik (=)", "TAN + sıfat + COMO", "Tan alto como"],
                    ["En üstün (🏆)", "EL/LA MÁS + sıfat", "El más alto"],
                    ["Düzensiz (iyi)", "MEJOR (que)", "Mejor que"],
                    ["Düzensiz (kötü)", "PEOR (que)", "Peor que"]
                ]
            },
            examples: [
                { es: "Juan es más alto que Pedro", tr: "Juan Pedro'dan daha uzun" },
                { es: "Juan es el más alto", tr: "Juan en uzun (olanı)" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Mi padre es más alto que mi madre", tr: "Babam annemden daha uzun" },
                { es: "El verano es menos frío que el invierno", tr: "Yaz kıştan daha az soğuk" },
                { es: "Soy tan fuerte como tú", tr: "Senin kadar güçlüyüm" },
                { es: "Este es el mejor día de mi vida", tr: "Bu hayatımın en iyi günü" },
                { es: "Madrid es más grande que Barcelona", tr: "Madrid Barcelona'dan daha büyük" }
            ]
        }
    ]
};


// ===== ÜNİTE 14: MESLEKLERDE EDATLAR (EN/DE) =====
const unit14Grammar: UnitGrammar = {
    unitId: 14, title: "TRABAJAR Fiili ve EN/DE Edatları - Kapsamlı Rehber",
    rules: [
        {
            id: "trabajar-conjugation",
            title: "📝 Trabajar Fiil Çekimi (Geniş Zaman)",
            explanation: "Kökümüz: **Trabaj-**\nEklerimiz: **-o, -as, -a, -amos, -áis, -an**\n\n**🗣️ Telaffuz İpucu:** İspanyolca'da 'J' harfi, boğazdan gelen hırıltılı bir 'H' gibi okunur.\nTrabajo derken 'Trabajo' değil, 'Trabaho' diyeceksin.",
            table: {
                headers: ["Kişi", "Çekim", "Okunuşu", "Anlamı"],
                rows: [
                    ["Yo", "Trabajo", "Trabaho", "Çalışıyorum"],
                    ["Tú", "Trabajas", "Trabahas", "Çalışıyorsun"],
                    ["Él / Ella / Usted", "Trabaja", "Trabaha", "Çalışıyor"],
                    ["Nosotros/as", "Trabajamos", "Trabahamos", "Çalışıyoruz"],
                    ["Vosotros/as", "Trabajáis", "Trabahais", "Çalışıyorsunuz"],
                    ["Ellos / Ellas / Ustedes", "Trabajan", "Trabahan", "Çalışıyorlar"]
                ]
            },
            examples: [
                { es: "¿Dónde trabajas?", tr: "Nerede çalışıyorsun?" },
                { es: "No trabajo los fines de semana", tr: "Hafta sonları çalışmıyorum" }
            ]
        },
        {
            id: "trabajar-en",
            title: "📍 TRABAJAR + EN (Yer / Şirket)",
            explanation: "Bu kuralı artık biliyorsun. Mantık Estar EN (Konum) ile birebir aynıdır.\n\nEğer sorunun cevabı **'Nerede?'** ise, **EN** kullanılır.\n\n**Kullanım Alanları:**\n* Şehirler/Ülkeler\n* Binalar/Ofisler (Hastane, Okul, Banka...)\n* Şirket İsimleri (Google, Zara, Bir fabrika...)\n\n**Formül:** Trabajar + EN + [Mekan]",
            examples: [
                { es: "Trabajo en İstanbul", tr: "İstanbul'da çalışıyorum" },
                { es: "Mi padre trabaja en un banco", tr: "Babam bir bankada çalışıyor" },
                { es: "Ella trabaja en Zara", tr: "O Zara'da çalışıyor" },
                { es: "Trabajamos en la oficina", tr: "Biz ofiste çalışıyoruz" }
            ]
        },
        {
            id: "trabajar-de",
            title: "👨‍🍳 TRABAJAR + DE (Meslek / Görev)",
            explanation: "İşte burası Türkçe'den biraz farklı. Biz 'Doktor olarak çalışıyorum' deriz. İspanyolca'da ise **'DE'** edatı o 'olarak' anlamını verir.\n\nEğer sorunun cevabı **'Ne iş yapıyorsun?'** veya **'Görevin ne?'** ise, **DE** kullanılır.\n\n**Formül:** Trabajar + DE + [Meslek]",
            examples: [
                { es: "Trabajo de profesor", tr: "Öğretmen olarak çalışıyorum" },
                { es: "Juan trabaja de camarero", tr: "Juan garson olarak çalışıyor" },
                { es: "¿Trabajas de guía?", tr: "Rehber olarak mı çalışıyorsun?" },
                { es: "Mi hermana trabaja de enfermera", tr: "Kız kardeşim hemşire olarak çalışıyor" }
            ]
        },
        {
            id: "ser-vs-trabajar-de",
            title: "🧠 Çok Önemli Ayrım: SER vs TRABAJAR DE",
            explanation: "A1 seviyesindeki bir öğrenci olarak şu iki cümle arasındaki farkı bilmelisin:\n\n**Soy médico** (Ben doktorum)\n→ Bu senin KİMLİĞİN. Diploman var, mesleğin bu. (Ser fiili)\n\n**Trabajo de médico** (Doktor olarak çalışıyorum)\n→ Bu senin şu an yaptığın EYLEM/İŞ. 'Şu an bu görevi yapıyorum' demek.\n\n**İpucu:** Genelde 'Geçici işler' veya öğrenciyken yapılan part-time işler için 'Trabajar de' daha sık kullanılır. Ama her ikisi de doğrudur.",
            table: {
                headers: ["Cümle", "Anlam", "Kullanım"],
                rows: [
                    ["Soy médico", "Doktorum (Kimlik)", "Kalıcı meslek, diploma"],
                    ["Trabajo de médico", "Doktor olarak çalışıyorum", "Şu anki görev"],
                    ["Soy estudiante", "Öğrenciyim", "Kimlik"],
                    ["Trabajo de camarero", "Garson olarak çalışıyorum", "Part-time/geçici iş"]
                ]
            },
            examples: [
                { es: "Soy estudiante pero trabajo de camarero", tr: "Öğrenciyim ama garson olarak çalışıyorum" },
                { es: "Es abogada y trabaja de abogada", tr: "Avukat ve avukat olarak çalışıyor" }
            ]
        },
        {
            id: "combo",
            title: "🥊 Kombo Yapalım! (Tam Cümle)",
            explanation: "Hadi iki bilgiyi birleştirelim. Hem ne iş yaptığını hem de nerede olduğunu söyleyelim.\n\n**Formül:** (Ben) + [Trabajo] + DE + [Meslek] + EN + [Yer]",
            examples: [
                { es: "Trabajo de cocinero en un restaurante", tr: "Bir restoranda aşçı olarak çalışıyorum" },
                { es: "Ana trabaja de secretaria en una oficina", tr: "Ana bir ofiste sekreter olarak çalışıyor" },
                { es: "Mi padre trabaja de ingeniero en una fábrica", tr: "Babam bir fabrikada mühendis olarak çalışıyor" },
                { es: "Trabajamos de profesores en una escuela", tr: "Bir okulda öğretmen olarak çalışıyoruz" }
            ]
        },
        {
            id: "summary",
            title: "📊 Özet Tablo",
            explanation: "EN ve DE arasındaki farkı hatırla:",
            table: {
                headers: ["Edat", "Soru", "Kullanım", "Örnek"],
                rows: [
                    ["EN", "Nerede?", "Yer/Şirket", "Trabajo en un banco"],
                    ["DE", "Ne olarak?", "Meslek/Görev", "Trabajo de profesor"]
                ]
            },
            examples: [
                { es: "¿Dónde trabajas? - Trabajo en Madrid", tr: "Nerede çalışıyorsun? - Madrid'de" },
                { es: "¿De qué trabajas? - Trabajo de médico", tr: "Ne iş yapıyorsun? - Doktor olarak" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Mi madre trabaja en un hospital", tr: "Annem bir hastanede çalışıyor" },
                { es: "Trabajo de camarero en un café", tr: "Bir kafede garson olarak çalışıyorum" },
                { es: "¿En qué empresa trabajas?", tr: "Hangi şirkette çalışıyorsun?" },
                { es: "No trabajo, soy estudiante", tr: "Çalışmıyorum, öğrenciyim" },
                { es: "Ella trabaja de periodista en una revista", tr: "O bir dergide gazeteci olarak çalışıyor" }
            ]
        }
    ]
};


// ===== ÜNİTE 15: EMİR KİPİ (BASİT) =====
const unit15Grammar: UnitGrammar = {
    unitId: 15, title: "Emir Kipi ve Yol Tarifi - Kapsamlı Rehber",
    rules: [
        {
            id: "imperative-usted",
            title: "🎩 Kibar Emir Kipi (Imperativo - Usted)",
            explanation: "Normalde Usted (O/Siz) çekimlerinde ne yapıyorduk?\n* -AR fiillerinde -a (Habla - Konuşuyor)\n* -ER/-IR fiillerinde -e (Come - Yiyor)\n\n**AMAAA!** Emir verirken (Lütfen yapınız derken) harfler **YER DEĞİŞTİRİR!**\n\n**Kural: Ünlü Harf Takası (The Vowel Swap)**\n* **-AR** ile bitenler → **-E** olur\n* **-ER / -IR** ile bitenler → **-A** olur\n\n**İpucu:** Harfler 'karşı takımın' formasını giydi! Bu kuralı unutmazsan kibar emirlerin %90'ını halledersin.",
            table: {
                headers: ["Fiil (Mastar)", "Anlamı", "Emir (Usted)", "Mantık"],
                rows: [
                    ["Girar", "Dönmek", "GirE", "AR → E"],
                    ["Doblar", "Dönmek", "DoblE", "AR → E"],
                    ["Tomar", "Almak/Girmek", "TomE", "AR → E"],
                    ["Seguir", "Devam etmek", "SigA", "IR → A"],
                    ["Subir", "Çıkmak", "SubA", "IR → A"],
                    ["Comer", "Yemek", "ComA", "ER → A"]
                ]
            },
            examples: [
                { es: "Gire a la derecha", tr: "Sağa dönünüz" },
                { es: "Tome la primera calle", tr: "İlk sokağı alınız" }
            ]
        },
        {
            id: "four-key-verbs",
            title: "🚦 Yol Tarifi İçin 4 Büyük Fiil",
            explanation: "Yol tarif ederken şu 4 kelimeyi adın gibi bilmelisin:\n\n**1. SIGA** (Takip ediniz / Devam ediniz)\n→ Dümdüz git demek için\n\n**2. GIRE** (Dönünüz)\n→ Sağa veya sola sapmak için\n\n**3. TOME** (Alınız / Sapınız)\n→ Bir sokağa girmek veya araca binmek için\n\n**4. VAYA** (Gidiniz) ⚠️\n→ Düzensiz fiil (Ir fiili). Kurala uymaz, ezberlemen gerekir.",
            examples: [
                { es: "Siga todo recto", tr: "Dümdüz devam ediniz" },
                { es: "Gire a la derecha", tr: "Sağa dönünüz" },
                { es: "Tome la primera calle", tr: "Birinci sokağı alınız" },
                { es: "Tome el autobús", tr: "Otobüse bininiz" },
                { es: "Vaya al hospital", tr: "Hastaneye gidiniz" }
            ]
        },
        {
            id: "compass-words",
            title: "🧭 Pusula Kelimeleri (Sağ, Sol, Düz)",
            explanation: "İşte en çok karıştırılan yer burası! 'Düz' ve 'Sağ' kelimeleri birbirine çok benzer, dikkat et!\n\n👉 **A la derecha:** Sağa\n👈 **A la izquierda:** Sola\n⬆️ **Todo recto / Derecho:** Dümdüz / Dosdoğru\n\n**⚠️ Koç Uyarısı:**\n* **DerechA:** Sağ (Sonu 'a' ile biter)\n* **DerechO:** Düz (Sonu 'o' ile biter - Direk gibi düşün)\n\nSakın taksiciye 'Siga a la derecha' (Sağa devam et) deme, 'Siga derecho' (Düz devam et) de!",
            examples: [
                { es: "Gire a la izquierda", tr: "Sola dönünüz" },
                { es: "Siga todo recto", tr: "Dümdüz gidiniz" },
                { es: "La primera a la derecha", tr: "Sağdaki birinci (sokak)" }
            ]
        },
        {
            id: "location-prepositions",
            title: "📍 Konum Belirtme (Referans Noktaları)",
            explanation: "Yolu tarif ettin, peki bina nerede? Şu edatları kullan:",
            table: {
                headers: ["İspanyolca", "Türkçe", "Örnek"],
                rows: [
                    ["Al lado de...", "Yanında", "Al lado del mercado"],
                    ["Enfrente de...", "Karşısında", "Enfrente del banco"],
                    ["Cerca de...", "Yakınında", "Cerca de la estación"],
                    ["Lejos de...", "Uzağında", "Lejos del centro"],
                    ["Entre...", "Arasında", "Entre el banco y la farmacia"]
                ]
            },
            examples: [
                { es: "El banco está al lado del mercado", tr: "Banka marketin yanındadır" },
                { es: "La farmacia está enfrente del hospital", tr: "Eczane hastanenin karşısındadır" }
            ]
        },
        {
            id: "scenario",
            title: "🎬 Hepsini Birleştirelim (Senaryo)",
            explanation: "Turist (sen) yolda birine soruyor: 'Pardon, müze nerede?'\n\nİspanyol (cevap veriyor):",
            examples: [
                { es: "Siga todo recto", tr: "Dümdüz gidin" },
                { es: "Tome la segunda calle a la derecha", tr: "Sağdaki ikinci sokağa girin" },
                { es: "Gire a la izquierda", tr: "Sola dönün" },
                { es: "El museo está enfrente del parque", tr: "Müze parkın karşısındadır" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo",
            explanation: "Yol tarifi için en önemli emirler:",
            table: {
                headers: ["Fiil", "Emir (Usted)", "Kullanım"],
                rows: [
                    ["Seguir", "Siga", "Düz devam etmek"],
                    ["Girar", "Gire", "Dönmek"],
                    ["Tomar", "Tome", "Sokağa girmek/araca binmek"],
                    ["Ir", "Vaya", "Gitmek (düzensiz!)"]
                ]
            },
            examples: [
                { es: "Perdone, ¿dónde está el banco?", tr: "Afedersiniz, banka nerede?" },
                { es: "Siga recto y gire a la derecha", tr: "Düz gidin ve sağa dönün" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Siga todo recto hasta el final de la calle", tr: "Sokağın sonuna kadar düz gidin" },
                { es: "Gire a la izquierda en el semáforo", tr: "Trafik ışığında sola dönün" },
                { es: "El supermercado está cerca de aquí", tr: "Süpermarket buranın yakınında" },
                { es: "Vaya al segundo piso", tr: "İkinci kata gidin" },
                { es: "Tome la tercera calle a la izquierda", tr: "Soldaki üçüncü sokağa girin" }
            ]
        }
    ]
};


// ===== ÜNİTE 16: IR A / IR EN =====
const unit16Grammar: UnitGrammar = {
    unitId: 16, title: "IR Fiili (Gitmek) - Kapsamlı Rehber",
    rules: [
        {
            id: "ir-conjugation",
            title: "🚀 Fiil Çekimi: IR (Gitmek)",
            explanation: "Bu tabloyu adın gibi ezberlemelisin. Başka yolu yok, tamamen şekil değiştiriyor!\n\n**İpucu:** 'V' harfleri İspanyolca'da dudaklar birbirine değerek yumuşak bir 'B' gibi okunur.\nVoy → Boy gibi.",
            table: {
                headers: ["Kişi", "Çekim", "Okunuşu", "Türkçe"],
                rows: [
                    ["Yo", "Voy", "Boy", "Gidiyorum"],
                    ["Tú", "Vas", "Bas", "Gidiyorsun"],
                    ["Él / Ella", "Va", "Ba", "Gidiyor"],
                    ["Nosotros/as", "Vamos", "Bamos", "Gidiyoruz"],
                    ["Vosotros/as", "Vais", "Bais", "Gidiyorsunuz"],
                    ["Ellos / Ellas", "Van", "Ban", "Gidiyorlar"]
                ]
            },
            examples: [
                { es: "¿A dónde vas?", tr: "Nereye gidiyorsun?" },
                { es: "Vamos a casa", tr: "Eve gidiyoruz" }
            ]
        },
        {
            id: "ir-a",
            title: "📍 IR + A (Bir Yere Gitmek)",
            explanation: "Bir yere yöneldiğinde araya mutlaka **'A'** (yönelme eki: -e/-a) koymalısın.\n\n**Formül:** IR (Çekimlenmiş) + a + [Gidilen Yer]",
            examples: [
                { es: "Voy a Madrid", tr: "Madrid'e gidiyorum" },
                { es: "Vamos a la playa", tr: "Plaja gidiyoruz" },
                { es: "Ella va al parque", tr: "O parka gidiyor" }
            ]
        },
        {
            id: "al-rule",
            title: "⚠️ A1 Seviyesinin En Kritik Kuralı: 'AL'",
            explanation: "Burada küçük bir matematik işlemi var.\n\n**Eğer gittiğin yer Dişil (La) ise:** a + la = **a la** (Değişmez)\n* Voy a la playa (Plaja gidiyorum)\n\n**Eğer gittiğin yer Eril (El) ise:** a + el = **AL** (Birleşir!)\n* ❌ YANLIŞ: ~~Voy a el cine~~\n* ✅ DOĞRU: Voy **al** cine (Sinemaya gidiyorum)",
            table: {
                headers: ["Durum", "Formül", "Örnek"],
                rows: [
                    ["Dişil (La)", "a + la = a la", "Voy a la playa"],
                    ["Eril (El)", "a + el = AL", "Voy al cine"],
                    ["Şehir (artikel yok)", "a + şehir", "Voy a Madrid"]
                ]
            },
            examples: [
                { es: "Vamos al cine", tr: "Sinemaya gidiyoruz (a + el = al)" },
                { es: "Voy a la escuela", tr: "Okula gidiyorum (a + la)" },
                { es: "Ella va al parque", tr: "O parka gidiyor" }
            ]
        },
        {
            id: "ir-en",
            title: "🚌 IR + EN (Bir Araçla Gitmek)",
            explanation: "Bir yere 'ne ile' gittiğini, yani ulaşım aracını söylerken **'EN'** edatını kullanırız. Aracın içinde gittiğin için 'En' mantıklıdır.\n\n**Formül:** IR (Çekimlenmiş) + en + [Araç]\n\n**Popüler Araçlar:**\n* En coche (Araba ile)\n* En autobús (Otobüs ile)\n* En metro (Metro ile)\n* En tren (Tren ile)\n* En avión (Uçak ile)",
            examples: [
                { es: "Voy a Madrid en avión", tr: "Madrid'e uçakla gidiyorum" },
                { es: "Vamos al trabajo en coche", tr: "İşe arabayla gidiyoruz" },
                { es: "Van a la escuela en autobús", tr: "Okula otobüsle gidiyorlar" }
            ]
        },
        {
            id: "walking-exception",
            title: "🛑 Büyük İstisna: Yürümek! 👣",
            explanation: "Yürüyerek gidiyorum derken 'En' kullanılmaz. Çünkü ayaklarının içinde gitmezsin, üzerinde gidersin!\n\n* **A pie** (Yaya / Yürüyerek)\n* **Andando** (Yürüyerek)",
            examples: [
                { es: "Voy a casa a pie", tr: "Eve yürüyerek gidiyorum" },
                { es: "Vamos al parque andando", tr: "Parka yürüyerek gidiyoruz" },
                { es: "Ella va a la escuela a pie", tr: "O okula yürüyerek gidiyor" }
            ]
        },
        {
            id: "full-sentence",
            title: "🧩 Hepsini Birleştirelim (Tam Cümle)",
            explanation: "Hadi şimdi 'Kim', 'Nereye' ve 'Nasıl' gidiyor birleştirelim.\n\n**Formül:** [Özne] + [Fiil] + A + [Yer] + EN + [Araç]",
            examples: [
                { es: "Voy a la escuela en autobús", tr: "(Ben) Okula otobüsle gidiyorum" },
                { es: "Vamos al cine en metro", tr: "(Biz) Sinemaya metroyla gidiyoruz (al cine!)" },
                { es: "¿Vas al trabajo en coche?", tr: "(Sen) İşe arabayla mı gidiyorsun?" },
                { es: "Ella va a la playa en taxi", tr: "O plaja taksiyle gidiyor" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo",
            explanation: "IR fiilinin kullanımlarını bir arada görelim:",
            table: {
                headers: ["Kullanım", "Edat", "Örnek"],
                rows: [
                    ["Bir yere gitmek", "A (+ yer)", "Voy a Madrid"],
                    ["Eril yere gitmek", "AL (a+el)", "Voy al cine"],
                    ["Araçla gitmek", "EN (+ araç)", "Voy en tren"],
                    ["Yürüyerek gitmek", "A PIE", "Voy a pie"]
                ]
            },
            examples: [
                { es: "¿Cómo vas al trabajo?", tr: "İşe nasıl gidiyorsun?" },
                { es: "Voy en autobús", tr: "Otobüsle gidiyorum" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Voy al supermercado en coche", tr: "Markete arabayla gidiyorum" },
                { es: "Vamos a la universidad a pie", tr: "Üniversiteye yürüyerek gidiyoruz" },
                { es: "¿A dónde van en tren?", tr: "Trenle nereye gidiyorlar?" },
                { es: "Mi hermano va al gimnasio en bicicleta", tr: "Kardeşim spor salonuna bisikletle gidiyor" },
                { es: "Voy a España en avión", tr: "İspanya'ya uçakla gidiyorum" }
            ]
        }
    ]
};


// ===== ÜNİTE 17: DÖNÜŞLÜ FİİLLER (DETAYLI) =====
const unit17Grammar: UnitGrammar = {
    unitId: 17, title: "Dönüşlü Fiiller - Kapsamlı Rehber",
    rules: [
        {
            id: "reflexive-pronouns",
            title: "🔑 Dönüşlü Zamirler (Olmazsa Olmaz!)",
            explanation: "Bu fiilleri çekimlemek için önce 'kimi' etkilediğini gösteren o küçük zamirleri bilmen lazım. Bunlar fiilin **EN BAŞINA** gelir.\n\n**Dikkat:** 3. Tekil (O) ve 3. Çoğul (Onlar) şahıslarının ikisi de 'SE' alır.",
            table: {
                headers: ["Kişi", "Zamir", "Anlamı"],
                rows: [
                    ["Yo", "Me", "Kendimi / Beni"],
                    ["Tú", "Te", "Kendini / Seni"],
                    ["Él / Ella / Usted", "Se", "Kendini / Onu"],
                    ["Nosotros/as", "Nos", "Kendimizi / Bizi"],
                    ["Vosotros/as", "Os", "Kendinizi / Sizi"],
                    ["Ellos / Ellas", "Se", "Kendilerini / Onları"]
                ]
            },
            examples: [
                { es: "Me levanto", tr: "Kalkıyorum (Me = kendimi)" },
                { es: "Se lava", tr: "Yıkanıyor (Se = kendini)" }
            ]
        },
        {
            id: "conjugation-steps",
            title: "🛠️ Nasıl Çekimlenir? (3 Adım Kuralı)",
            explanation: "Gel en popüler fiilimiz **Levantarse** (Kalkmak / Kendini kaldırmak) fiilini ameliyat edelim.\n\n**1. KES:** Fiilin sonundaki '-se' ekini at. (Levantar)\n**2. BAŞA AL:** Kişiye uygun zamiri (me, te, se...) başa koy. (Me ...)\n**3. ÇEKİMLE:** Kalan fiili normal geniş zamanda çekimle. (Levanto)\n\n**Sonuç:** Yo me levanto. (Ben kalkıyorum.)",
            table: {
                headers: ["Kişi", "Zamir", "Fiil Çekimi", "Tam Cümle", "Türkçe"],
                rows: [
                    ["Yo", "Me", "levanto", "Me levanto", "Kalkıyorum"],
                    ["Tú", "Te", "levantas", "Te levantas", "Kalkıyorsun"],
                    ["Él / Ella", "Se", "levanta", "Se levanta", "Kalkıyor"],
                    ["Nosotros", "Nos", "levantamos", "Nos levantamos", "Kalkıyoruz"],
                    ["Vosotros", "Os", "levantáis", "Os levantáis", "Kalkıyorsunuz"],
                    ["Ellos", "Se", "levantan", "Se levantan", "Kalkıyorlar"]
                ]
            },
            examples: [
                { es: "Me levanto a las siete", tr: "Saat yedide kalkıyorum" }
            ]
        },
        {
            id: "normal-vs-reflexive",
            title: "🔄 Normal Fiil vs. Dönüşlü Fiil Farkı",
            explanation: "Bu ayrımı anlaman çok önemli!\n\n**Lavar (Yıkamak) vs Lavarse (Yıkanmak)**\n\n**Lavo el coche** = Arabayı yıkıyorum.\n→ Eylem dışarıya (arabaya) gidiyor. Dönüşlü DEĞİL.\n\n**Me lavo las manos** = Ellerimi yıkıyorum.\n→ Eylem bana (kendi elime) dönüyor. DÖNÜŞLÜ.\n\n**Levantar (Kaldırmak) vs Levantarse (Kalkmak)**\n\n**Levanto la caja** = Kutuyu kaldırıyorum.\n**Me levanto** = Ayağa kalkıyorum / Yataktan kalkıyorum.",
            examples: [
                { es: "Lavo el coche (Normal)", tr: "Arabayı yıkıyorum" },
                { es: "Me lavo las manos (Dönüşlü)", tr: "Ellerimi yıkıyorum" },
                { es: "Levanto la caja (Normal)", tr: "Kutuyu kaldırıyorum" },
                { es: "Me levanto (Dönüşlü)", tr: "Kalkıyorum" }
            ]
        },
        {
            id: "daily-routine-verbs",
            title: "📅 A1'de Bilmen Gereken 'Günlük Rutin' Fiilleri",
            explanation: "Sabah kalkıp evden çıkana kadar yaptığın her şey genelde dönüşlüdür!",
            table: {
                headers: ["Fiil", "Anlamı", "Örnek"],
                rows: [
                    ["Llamarse", "Adı olmak", "Me llamo Ali"],
                    ["Levantarse", "Kalkmak", "Me levanto temprano"],
                    ["Ducharse", "Duş almak", "Me ducho"],
                    ["Lavarse", "(Kendini) Yıkamak", "Me lavo la cara"],
                    ["Cepillarse", "Fırçalamak", "Me cepillo los dientes"],
                    ["Afeitarse", "Tıraş olmak", "Me afeito"],
                    ["Vestirse", "Giyinmek", "Me visto rápido"],
                    ["Ponerse", "Üzerine koymak", "Me pongo la chaqueta"],
                    ["Acostarse", "Yatmak", "Me acuesto tarde"]
                ]
            },
            examples: [
                { es: "Me llamo Juan", tr: "Adım Juan" },
                { es: "Me ducho cada mañana", tr: "Her sabah duş alırım" }
            ]
        },
        {
            id: "sentence-formula",
            title: "📐 Cümle Kurma Formülü",
            explanation: "**Formül:** [ÖZNE] + [ZAMİR] + [ÇEKİMLENMİŞ FİİL]",
            examples: [
                { es: "(Yo) Me ducho cada mañana", tr: "(Ben) Her sabah duş alırım" },
                { es: "¿Cómo te llamas?", tr: "(Sen) Adın ne? (Kendine ne diyorsun?)" },
                { es: "Ella se levanta a las ocho", tr: "(O) Saat 8'de kalkar" },
                { es: "Nos acostamos tarde", tr: "(Biz) Geç yatarız" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo",
            explanation: "Dönüşlü zamirleri ve en önemli fiilleri hatırla:",
            table: {
                headers: ["Kişi", "Zamir", "Levantarse", "Llamarse"],
                rows: [
                    ["Yo", "Me", "Me levanto", "Me llamo"],
                    ["Tú", "Te", "Te levantas", "Te llamas"],
                    ["Él/Ella", "Se", "Se levanta", "Se llama"],
                    ["Nosotros", "Nos", "Nos levantamos", "Nos llamamos"],
                    ["Vosotros", "Os", "Os levantáis", "Os llamáis"],
                    ["Ellos", "Se", "Se levantan", "Se llaman"]
                ]
            },
            examples: [
                { es: "¿A qué hora te levantas?", tr: "Saat kaçta kalkarsın?" },
                { es: "Me levanto a las siete", tr: "Saat yedide kalkarım" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Me llamo Ana y me levanto a las seis", tr: "Adım Ana ve saat altıda kalkarım" },
                { es: "Mi hermano se ducha por la mañana", tr: "Kardeşim sabahları duş alır" },
                { es: "¿A qué hora te acuestas?", tr: "Saat kaçta yatarsın?" },
                { es: "Nos vestimos rápidamente", tr: "Hızlıca giyiniriz" },
                { es: "Los niños se lavan las manos antes de comer", tr: "Çocuklar yemekten önce ellerini yıkar" }
            ]
        }
    ]
};


// ===== ÜNİTE 18: SER VE ESTAR ÖZETİ =====
const unit18Grammar: UnitGrammar = {
    unitId: 18, title: "SER vs ESTAR ve Saatler - Kapsamlı Rehber",
    rules: [
        {
            id: "ser-vs-estar-intro",
            title: "🥊 BÖLÜM 1: SER vs ESTAR (Büyük Kapışma)",
            explanation: "Mantığı şöyle kuruyoruz:\n\n**SER:** Senin Fabrika Ayarların (Değişmesi zor olan şeyler)\n**ESTAR:** Senin Anlık Durumun (Değişebilen şeyler ve Konum)",
            examples: [
                { es: "Soy turco (SER - Kimlik)", tr: "Ben Türküm" },
                { es: "Estoy en Turquía (ESTAR - Konum)", tr: "Türkiye'deyim" }
            ]
        },
        {
            id: "ser-usage",
            title: "🆔 SER (Soy, Eres, Es...) → KİMLİK KARTI",
            explanation: "Bir şeyi tanımlarken, 'Bu nedir?', 'Kimdir?' sorularına cevap verirken kullanılır.\n\n**DOCTOR Kuralı:**\n* **D**escripción (Tanım/Kimlik)\n* **O**rigen (Köken/Milliyet)\n* **C**arácter (Karakter özellikleri)\n* **T**iempo (Zaman/Saat)\n* **O**cupación (Meslek)\n* **R**elación (İlişki)",
            examples: [
                { es: "Yo soy Ali", tr: "Ben Ali'yim (Kimlik)" },
                { es: "Tú eres estudiante", tr: "Sen öğrencisin (Meslek)" },
                { es: "Ella es turca", tr: "O Türk (Milliyet)" },
                { es: "Nosotros somos altos", tr: "Biz uzunuz (Fiziksel özellik)" },
                { es: "Hoy es lunes", tr: "Bugün pazartesi (Zaman)" }
            ]
        },
        {
            id: "estar-usage",
            title: "📍😊 ESTAR (Estoy, Estás, Está...) → GPS ve MOD",
            explanation: "Bir şeyin nerede olduğunu veya o an nasıl hissettiğini söylerken kullanılır.\n\n**PLACE Kuralı:**\n* **P**osition (Konum/Yer)\n* **L**ocation (Bulunduğu yer)\n* **A**ction (Eylem - şu an yapılan)\n* **C**ondition (Geçici durum)\n* **E**motion (Duygu)\n\n**⚠️ En Önemli Kural:** Yer değişmese bile konum bildiriyorsa ESTAR!",
            examples: [
                { es: "Madrid está en España", tr: "Madrid İspanya'dadır (Konum)" },
                { es: "Yo estoy feliz", tr: "Mutluyum (Duygu)" },
                { es: "Ella está enferma", tr: "O hasta (Sağlık durumu)" },
                { es: "El café está frío", tr: "Kahve soğuk (Geçici - normalde sıcak)" }
            ]
        },
        {
            id: "meaning-changing",
            title: "🧠 Kritik Fark: Anlamı Değişen Sıfatlar",
            explanation: "Aynı sıfatı her iki fiille de kullanabilirsin ama anlam tamamen değişir!",
            table: {
                headers: ["Sıfat", "SER ile", "ESTAR ile"],
                rows: [
                    ["Aburrido", "Sıkıcı biri olmak (Karakter)", "Sıkılmış olmak (Şu an)"],
                    ["Guapo/a", "Güzel olmak (Genel)", "Güzel olmuşsun (Bugün şık)"],
                    ["Listo", "Zeki olmak (Akıllı)", "Hazır olmak (Şu an hazır)"],
                    ["Rico", "Zengin olmak (Para)", "Lezzetli olmak (Yemek)"]
                ]
            },
            examples: [
                { es: "Juan es aburrido", tr: "Juan sıkıcı biridir (karakter)" },
                { es: "Juan está aburrido", tr: "Juan'ın canı sıkkın (şu an)" },
                { es: "Ella es guapa", tr: "O güzel (genel)" },
                { es: "Ella está guapa", tr: "O güzel olmuş (bugün)" }
            ]
        },
        {
            id: "time-intro",
            title: "⏰ BÖLÜM 2: SAATLER (¿Qué hora es?)",
            explanation: "Saatleri sorarken ve söylerken her zaman **SER** fiilini kullanırız.\n\n**Soru kalıbımız:** ¿Qué hora es? (Saat kaç?)\n\n**Temel Kural:**\n* Saat 1: **Es la una** (Tekil)\n* Diğer Saatler (2-12): **Son las dos, Son las tres...** (Çoğul)",
            examples: [
                { es: "¿Qué hora es?", tr: "Saat kaç?" },
                { es: "Es la una", tr: "Saat 1" },
                { es: "Son las tres", tr: "Saat 3" }
            ]
        },
        {
            id: "time-past",
            title: "🕑 Dakikaları Söylemek (Yelkovan Sağda - Geçe)",
            explanation: "Saati geçiyorsa araya **'Y'** (ve) koyarız.\n\n**Özel Kelimeler:**\n* 15 geçiyor (Çeyrek): **Cuarto**\n* 30 geçiyor (Buçuk): **Media**",
            examples: [
                { es: "Son las dos y cinco", tr: "2:05 (İkiyi beş geçiyor)" },
                { es: "Son las cuatro y diez", tr: "4:10 (Dördü on geçiyor)" },
                { es: "Es la una y veinte", tr: "1:20 (Biri yirmi geçiyor)" },
                { es: "Son las tres y cuarto", tr: "3:15 (Üçü çeyrek geçiyor)" },
                { es: "Son las ocho y media", tr: "8:30 (Sekiz buçuk)" }
            ]
        },
        {
            id: "time-to",
            title: "🕙 Dakikaları Söylemek (Yelkovan Solda - Kala)",
            explanation: "Saat buçuğu geçtiyse, **bir sonraki saati** söyleriz ve kalan dakikayı çıkarırız. Araya **'MENOS'** (eksi) koyarız.\n\n**Formül:** [Bir Sonraki Saat] + MENOS + [Kalan Dakika]",
            examples: [
                { es: "Son las cinco menos diez", tr: "4:50 (Beşe on var)" },
                { es: "Son las diez menos veinte", tr: "9:40 (Ona yirmi var)" },
                { es: "Es la una menos cuarto", tr: "12:45 (Bire çeyrek var)" },
                { es: "Son las tres menos cinco", tr: "2:55 (Üçe beş var)" }
            ]
        },
        {
            id: "time-periods",
            title: "🌅 Günün Vakitleri",
            explanation: "Dijital saat kullanmıyorsan, sabah mı akşam mı olduğunu belirtmek için:",
            table: {
                headers: ["İspanyolca", "Türkçe", "Zaman Dilimi"],
                rows: [
                    ["De la mañana", "Sabahın", "Öğlene kadar"],
                    ["De la tarde", "Öğleden sonranın", "Akşama kadar"],
                    ["De la noche", "Gecenin", "Gece"]
                ]
            },
            examples: [
                { es: "Son las ocho de la mañana", tr: "Sabah 8" },
                { es: "Son las ocho de la tarde", tr: "Akşam 8" },
                { es: "Es la una de la tarde", tr: "Öğleden sonra 1" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo: SER vs ESTAR",
            explanation: "İki fiili karşılaştıralım:",
            table: {
                headers: ["Kullanım", "Fiil", "Örnek"],
                rows: [
                    ["Kimlik/Milliyet", "SER", "Soy turco"],
                    ["Meslek", "SER", "Es profesor"],
                    ["Saat/Zaman", "SER", "Son las tres"],
                    ["Konum", "ESTAR", "Está en Madrid"],
                    ["Duygu/Mod", "ESTAR", "Estoy feliz"],
                    ["Geçici Durum", "ESTAR", "Está enfermo"]
                ]
            },
            examples: [
                { es: "Soy feliz (karakterim böyle)", tr: "Mutlu biriyim" },
                { es: "Estoy feliz (şu an)", tr: "Şu an mutluyum" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Soy estudiante y estoy en la universidad", tr: "Öğrenciyim ve üniversitedeyim" },
                { es: "¿Qué hora es? - Son las cuatro y media", tr: "Saat kaç? - Dört buçuk" },
                { es: "Madrid está en España y es una ciudad grande", tr: "Madrid İspanya'da ve büyük bir şehir" },
                { es: "Estoy cansado pero son las diez de la mañana", tr: "Yorgunum ama sabah 10" },
                { es: "Mi hermano es alto y está enfermo hoy", tr: "Kardeşim uzun ve bugün hasta" }
            ]
        }
    ]
};


// ===== ÜNİTE 19: HACER VE HAVA DURUMU =====
const unit19Grammar: UnitGrammar = {
    unitId: 19, title: "HACER Fiili ve Hava Durumu - Kapsamlı Rehber",
    rules: [
        {
            id: "hacer-conjugation",
            title: "🛠️ Hacer Fiil Çekimi (Geniş Zaman)",
            explanation: "Hacer düzensiz bir fiildir ama sadece 'Ben' (Yo) çekiminde bir sürpriz yapar. Biz buna **'G-Grubu'** deriz çünkü araya bir 'G' harfi girer.\n\n**⚠️ Telaffuz Uyarısı:** İspanyolca'da H harfi ASLA okunmaz. (Hago = Ago)",
            table: {
                headers: ["Kişi", "Çekim", "Okunuşu"],
                rows: [
                    ["Yo", "Hago ⚠️", "Ago (G sürprizi!)"],
                    ["Tú", "Haces", "Ases"],
                    ["Él / Ella", "Hace", "Ase"],
                    ["Nosotros", "Hacemos", "Asemos"],
                    ["Vosotros", "Hacéis", "Aseis"],
                    ["Ellos", "Hacen", "Asen"]
                ]
            },
            examples: [
                { es: "¿Qué haces?", tr: "Ne yapıyorsun?" },
                { es: "Yo hago los deberes", tr: "Ben ödev yapıyorum" }
            ]
        },
        {
            id: "hacer-basic",
            title: "📝 Temel Anlamı: Yapmak / Etmek",
            explanation: "İngilizce'deki **Do** ve **Make** fiillerinin ikisi de budur!",
            examples: [
                { es: "Hacer los deberes", tr: "Ödev yapmak" },
                { es: "Hacer una tarta", tr: "Kek yapmak" },
                { es: "Hacer deporte", tr: "Spor yapmak" },
                { es: "Hacer la cama", tr: "Yatağı toplamak (yapmak)" },
                { es: "Yo hago deporte todos los días", tr: "Ben her gün spor yaparım" }
            ]
        },
        {
            id: "hacer-weather-intro",
            title: "☀️🌧️ Hava Durumu: 'HACE...' Mantığı",
            explanation: "Geldik en ilginç kısma! Türkçe'de 'Hava soğuktur' deriz (-dır/-dir ekiyle, yani Ser/Estar gibi).\n\nİspanyolca'da ise **doğa ana o durumu 'üretiyor/yapıyor'** gibi düşünülür.\n\nKalıbımız her zaman 3. Tekil Şahıs (**HACE**) ile başlar.\n\n**Formül:** HACE + [Hava Durumu İsmi]",
            table: {
                headers: ["İspanyolcası", "Kelime Anlamı", "Türkçe Karşılığı"],
                rows: [
                    ["Hace frío", "Soğuk yapıyor", "Hava soğuk"],
                    ["Hace calor", "Sıcak yapıyor", "Hava sıcak"],
                    ["Hace sol", "Güneş yapıyor", "Hava güneşli"],
                    ["Hace viento", "Rüzgar yapıyor", "Hava rüzgarlı"],
                    ["Hace buen tiempo", "İyi zaman yapıyor", "Hava güzel"],
                    ["Hace mal tiempo", "Kötü zaman yapıyor", "Hava kötü"]
                ]
            },
            examples: [
                { es: "Hace sol hoy", tr: "Bugün güneşli" },
                { es: "¿Qué tiempo hace?", tr: "Hava nasıl?" }
            ]
        },
        {
            id: "mucho-muy-trap",
            title: "🚨 Kritik A1 Tuzağı: 'Muy' mu 'Mucho' mu?",
            explanation: "Burası çok önemli koçum! Türkçe'de 'Çok soğuk' deriz. İspanyolca'da 'Çok' için genelde **Muy** kullanılır (Muy guapa - Çok güzel gibi).\n\n**ANCAK!**\n\nHava durumunda teknik olarak 'Soğukluk yapıyor' dediğimiz için (isim kullandığımız için), Muy değil **MUCHO** kullanmak zorundayız.\n\n❌ YANLIŞ: ~~Hace muy frío~~\n✅ DOĞRU: Hace MUCHO frío (Hava çok soğuk)\n\n❌ YANLIŞ: ~~Hace muy calor~~\n✅ DOĞRU: Hace MUCHO calor (Hava çok sıcak)",
            examples: [
                { es: "Hace mucho frío", tr: "Hava çok soğuk ✅" },
                { es: "Hace mucho calor", tr: "Hava çok sıcak ✅" },
                { es: "Hace mucho viento", tr: "Çok rüzgarlı ✅" },
                { es: "Hace mucho sol", tr: "Çok güneşli ✅" }
            ]
        },
        {
            id: "rain-snow-exception",
            title: "❄️☔ Yağmur ve Kar İstisnası",
            explanation: "Her hava olayı Hacer ile söylenmez! Yağmur ve Kar'ın kendi özel fiilleri vardır. Bunlar için 'Hace lluvia' denmez!\n\n* **Yağmur:** Llueve (Yağmur yağıyor) → Fiil: Llover\n* **Kar:** Nieva (Kar yağıyor) → Fiil: Nevar",
            examples: [
                { es: "Llueve", tr: "Yağmur yağıyor (Hace lluvia DEĞİL!)" },
                { es: "Nieva", tr: "Kar yağıyor" },
                { es: "Hoy llueve mucho", tr: "Bugün çok yağmur yağıyor" },
                { es: "En invierno nieva", tr: "Kışın kar yağar" }
            ]
        },
        {
            id: "weather-questions",
            title: "❓ Hava Durumu Soruları",
            explanation: "Hava durumunu sormak için şu kalıpları kullan:",
            examples: [
                { es: "¿Qué tiempo hace?", tr: "Hava nasıl?" },
                { es: "¿Hace frío hoy?", tr: "Bugün soğuk mu?" },
                { es: "¿Llueve?", tr: "Yağmur yağıyor mu?" },
                { es: "¿Qué tiempo hace en Madrid?", tr: "Madrid'de hava nasıl?" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo",
            explanation: "Hava durumu ifadelerini hatırla:",
            table: {
                headers: ["Durum", "İspanyolca", "Kullanım"],
                rows: [
                    ["Sıcak/Soğuk", "Hace calor/frío", "HACE + isim"],
                    ["Güneşli", "Hace sol", "HACE + isim"],
                    ["Rüzgarlı", "Hace viento", "HACE + isim"],
                    ["Yağmur", "Llueve", "Özel fiil (Llover)"],
                    ["Kar", "Nieva", "Özel fiil (Nevar)"],
                    ["Çok X", "Hace MUCHO X", "MUCHO (muy değil!)"]
                ]
            },
            examples: [
                { es: "Hace buen tiempo", tr: "Hava güzel" },
                { es: "Hace mal tiempo", tr: "Hava kötü" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Hoy hace mucho sol, voy a la playa", tr: "Bugün çok güneşli, plaja gidiyorum" },
                { es: "En verano hace calor y en invierno hace frío", tr: "Yazın sıcak, kışın soğuk" },
                { es: "¿Qué tiempo hace hoy? - Hace buen tiempo", tr: "Bugün hava nasıl? - Hava güzel" },
                { es: "Llueve mucho en mi ciudad", tr: "Şehrimde çok yağmur yağıyor" },
                { es: "Cuando nieva, hago un muñeco de nieve", tr: "Kar yağınca kardan adam yaparım" }
            ]
        }
    ]
};


// ===== ÜNİTE 20: GUSTAR VE ENCANTAR =====
const unit20Grammar: UnitGrammar = {
    unitId: 20, title: "Hobiler ve Aktiviteler - Kapsamlı Rehber",
    rules: [
        {
            id: "hobby-intro",
            title: "🎯 Hobi Anlatmak İçin 3 Ana Kalıp",
            explanation: "Genelde 3 ana kalıp kullanırız:\n\n1. **Me gusta ...** (Yapmayı severim)\n2. **Jugar a ...** (Oynamak)\n3. **Tocar ...** (Çalmak - Enstrüman)",
            examples: [
                { es: "Me gusta cocinar", tr: "Yemek pişirmeyi severim" },
                { es: "Juego al fútbol", tr: "Futbol oynuyorum" },
                { es: "Toco la guitarra", tr: "Gitar çalıyorum" }
            ]
        },
        {
            id: "gustar-infinitive",
            title: "❤️ Altın Kalıp: 'Me Gusta + Mastar Fiil'",
            explanation: "Hobini anlatmanın en kolay yolu 'Bunu yapmayı seviyorum' demektir. Fiili hiç çekimlemeden, ham haliyle (Mastar) kullanırsın.\n\n**Formül:** Me gusta + [Fiil]",
            examples: [
                { es: "Me gusta viajar", tr: "Seyahat etmeyi severim" },
                { es: "Me gusta cocinar", tr: "Yemek pişirmeyi severim" },
                { es: "Me gusta dormir", tr: "Uyumayı severim" },
                { es: "Me gusta aprender idiomas", tr: "Dil öğrenmeyi severim" },
                { es: "Me gusta ver películas", tr: "Film izlemeyi severim" }
            ]
        },
        {
            id: "jugar-a",
            title: "🎮⚽ Jugar A... (Oyun/Spor Oynamak)",
            explanation: "Burada ÇOK DİKKAT etmen gereken bir kural var! İngilizce'de 'Play football' dersin, araya bir şey girmez. Ama İspanyolca'da **'Jugar'** fiilinden sonra mutlaka **'A'** edatı gelir.\n\n**Formül:** Jugar + A + [Spor/Oyun]\n\nEğer oynadığın şey **El** (Eril) ile başlıyorsa, a + el birleşir ve **AL** olur.\n\n**Fiil Çekimi (Jugar - u→ue):**\n* Yo juego\n* Tú juegas",
            examples: [
                { es: "Jugar AL fútbol", tr: "Futbol oynamak (a + el = al)" },
                { es: "Juego al baloncesto", tr: "Basketbol oynuyorum" },
                { es: "Juego a los videojuegos", tr: "Video oyunları oynuyorum" },
                { es: "¿Juegas al tenis?", tr: "Tenis oynuyor musun?" }
            ]
        },
        {
            id: "tocar",
            title: "🎸 Tocar... (Enstrüman Çalmak)",
            explanation: "Sakın enstrümanlar için 'Jugar' (Oynamak) kullanma! İspanyolca'da enstrüman 'çalınmaz', enstrümana **'dokunulur'**.\n\n**Tocar = Dokunmak / Çalmak**",
            examples: [
                { es: "Tocar la guitarra", tr: "Gitar çalmak" },
                { es: "Toco el piano", tr: "Piyano çalıyorum" },
                { es: "Mi hermano toca el violín", tr: "Kardeşim keman çalıyor" },
                { es: "¿Tocas algún instrumento?", tr: "Herhangi bir enstrüman çalıyor musun?" }
            ]
        },
        {
            id: "hobby-vocabulary",
            title: "📚 Hobi Sözlüğü",
            explanation: "En popüler hobiler ve aktiviteler:",
            table: {
                headers: ["İspanyolca", "Okunuşu", "Türkçe"],
                rows: [
                    ["Desarrollar videojuegos", "Desarroyar videohuegos", "Video oyunu geliştirmek"],
                    ["Programar", "Programar", "Kodlamak"],
                    ["Editar videos", "Editar videos", "Video editlemek"],
                    ["Ver series / películas", "Ber series / pelikulas", "Dizi / Film izlemek"],
                    ["Leer libros", "Leer libros", "Kitap okumak"],
                    ["Hacer fotos", "Aser fotos", "Fotoğraf çekmek"],
                    ["Escuchar música", "Eskuçar musika", "Müzik dinlemek"],
                    ["Hacer deporte", "Aser deporte", "Spor yapmak"],
                    ["Dibujar", "Dibuhar", "Çizim yapmak"],
                    ["Bailar", "Bailar", "Dans etmek"]
                ]
            },
            examples: [
                { es: "Me gusta programar", tr: "Kodlamayı severim" },
                { es: "Me encanta ver series", tr: "Dizi izlemeye bayılırım" }
            ]
        },
        {
            id: "gustar-encantar",
            title: "💕 Gustar vs Encantar (Derece Farkı)",
            explanation: "İki fiil arasındaki fark sevme derecesidir:\n\n* **Gustar:** Sevmek / Hoşlanmak\n* **Encantar:** Çok sevmek / Bayılmak",
            examples: [
                { es: "Me gusta el fútbol", tr: "Futbolu severim" },
                { es: "Me encanta el fútbol", tr: "Futbola bayılırım" },
                { es: "Me gustan los gatos", tr: "Kedileri severim" },
                { es: "Me encantan las películas", tr: "Filmlere bayılırım" }
            ]
        },
        {
            id: "dialogue",
            title: "🗣️ Diyalog Kurma (Pratik)",
            explanation: "Biri sana '¿Qué te gusta hacer?' (Ne yapmayı seversin?) veya '¿Cuáles son tus aficiones?' (Hobilerin neler?) diye sorduğunda:",
            examples: [
                { es: "Me gusta el fútbol (Basit)", tr: "Futbolu severim" },
                { es: "Me gusta jugar al fútbol (Orta)", tr: "Futbol oynamayı severim" },
                { es: "Me gusta aprender español y crear videojuegos (İleri)", tr: "İspanyolca öğrenmeyi ve video oyunları yaratmayı severim" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo",
            explanation: "Hangi fiili ne zaman kullanacağını hatırla:",
            table: {
                headers: ["Aktivite", "Fiil", "Örnek"],
                rows: [
                    ["Genel sevmek", "Gustar + isim", "Me gusta el café"],
                    ["Yapmayı sevmek", "Gustar + mastar", "Me gusta cocinar"],
                    ["Spor/Oyun oynamak", "Jugar + A + ...", "Juego al fútbol"],
                    ["Enstrüman çalmak", "Tocar + ...", "Toco la guitarra"],
                    ["Bayılmak", "Encantar", "Me encanta viajar"]
                ]
            },
            examples: [
                { es: "¿Qué te gusta hacer?", tr: "Ne yapmayı seversin?" },
                { es: "Me gusta mucho leer", tr: "Okumayı çok severim" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Me gusta escuchar música y leer libros", tr: "Müzik dinlemeyi ve kitap okumayı severim" },
                { es: "Juego al fútbol los fines de semana", tr: "Hafta sonları futbol oynuyorum" },
                { es: "Mi hermana toca el piano muy bien", tr: "Kız kardeşim çok iyi piyano çalıyor" },
                { es: "Me encanta viajar a nuevos países", tr: "Yeni ülkelere seyahat etmeye bayılırım" },
                { es: "¿Te gusta hacer deporte?", tr: "Spor yapmayı sever misin?" }
            ]
        }
    ]
};


// ===== YENİ A1 ÜNİTELERİ (21-25) =====
// ===== ÜNİTE 21: ESTAR + DUYGULAR =====
const unit21Grammar: UnitGrammar = {
    unitId: 21, title: "ESTAR + Duygular ve PORQUE - Kapsamlı Rehber",
    rules: [
        {
            id: "estar-feelings-formula",
            title: "😌😡 ESTAR + Duygular (Nasıl Hissediyorum?)",
            explanation: "Burada formülümüz çok basit:\n\n**[Özne] + [Estar Çekimi] + [Duygu Sıfatı]**\n\nÖnce Estar çekimini hızlıca hatırlayalım: Estoy, Estás, Está, Estamos, Estáis, Están.",
            examples: [
                { es: "Estoy feliz", tr: "Mutluyum" },
                { es: "¿Estás triste?", tr: "Üzgün müsün?" },
                { es: "Ella está cansada", tr: "O yorgun" }
            ]
        },
        {
            id: "adjective-agreement",
            title: "⚠️ Kritik Kural: Uyum (Sıfatların Dansı)",
            explanation: "Duygu bildiren sıfatlar, öznenin **cinsiyetine ve sayısına** uymak zorundadır!\n\n* Erkek konuşuyorsa: Estoy cansad**o** (Yorgunum)\n* Kadın konuşuyorsa: Estoy cansad**a** (Yorgunum)\n* Biz (Erkekler/Karışık): Estamos cansad**os**\n* Biz (Kadınlar): Estamos cansad**as**",
            examples: [
                { es: "Juan está enamorado", tr: "Juan aşık (erkek)" },
                { es: "María está enamorada", tr: "María aşık (kadın)" },
                { es: "Nosotros estamos muy tristes", tr: "Biz çok üzgünüz (triste çoğul oldu!)" }
            ]
        },
        {
            id: "emotion-vocabulary",
            title: "📚 En Önemli Duygu Sözlüğü (A1 Listesi)",
            explanation: "Hangi sıfatlar değişir, hangileri değişmez dikkat et!",
            table: {
                headers: ["İspanyolca", "Türkçe", "Dikkat!"],
                rows: [
                    ["Contento / Feliz", "Mutlu", "Contento değişir, Feliz değişmez!"],
                    ["Triste", "Üzgün", "-e ile biter, cinsiyete göre değişmez!"],
                    ["Cansado/a", "Yorgun", "(-o / -a) değişir"],
                    ["Enfadado/a", "Kızgın", "(-o / -a) değişir"],
                    ["Nervioso/a", "Gergin / Sinirli", "(-o / -a) değişir"],
                    ["Aburrido/a", "Sıkılmış", "(-o / -a) değişir"],
                    ["Enfermo/a", "Hasta", "(-o / -a) değişir"],
                    ["Preocupado/a", "Endişeli", "(-o / -a) değişir"],
                    ["Enamorado/a", "Aşık", "(-o / -a) değişir"]
                ]
            },
            examples: [
                { es: "Estoy muy nervioso", tr: "Çok gerginim (erkek)" },
                { es: "Ella está aburrida", tr: "O sıkılmış (kadın)" }
            ]
        },
        {
            id: "porque-porqué",
            title: "🧐 PORQUE ile Sebep Bildirme (Çünkü...)",
            explanation: "Duygunu söyledin, peki neden öyle hissediyorsun? İşte burada 'Çünkü' devreye girer.\n\nBurada çok önemli bir yazım farkı var, A1 sınavlarında çok sorulur:\n\n* **¿Por qué?** (Ayrı ve vurgulu) → Neden? / Niçin? (Soru sorarken)\n* **Porque** (Bitişik ve vurgusuz) → Çünkü (Cevap verirken)\n\n**Formül:** [Duygu Cümlesi] + porque + [Sebep Cümlesi]",
            examples: [
                { es: "¿Por qué estás triste?", tr: "Neden üzgünsün? (Soru)" },
                { es: "Estoy triste porque llueve", tr: "Üzgünüm çünkü yağmur yağıyor (Cevap)" }
            ]
        },
        {
            id: "full-examples",
            title: "🧩 Hepsini Birleştirelim (Tam Cümleler)",
            explanation: "Gel şimdi sebep-sonuç ilişkisi kuralım:",
            examples: [
                { es: "¿Por qué estás cansado? - Estoy cansado porque trabajo mucho", tr: "Neden yorgunsun? - Yorgunum çünkü çok çalışıyorum" },
                { es: "¿Por qué está contenta ella? - Ella está contenta porque hoy es viernes", tr: "O neden mutlu? - Mutlu çünkü bugün Cuma" },
                { es: "Estamos enfadados porque el autobús no viene", tr: "Kızgınız çünkü otobüs gelmiyor" }
            ]
        },
        {
            id: "muy-tip",
            title: "🌟 İpucu: Muy ile Derecelendirme",
            explanation: "Duyguların derecesini artırmak için sıfatın önüne **'Muy'** (Çok) gelir.\n\n**Aman dikkat:** Tengo mucho calor (Çok sıcakladım) derken Tener fiili kullanılır ama şimdilik sen duygulara odaklan, **Estar ile Muy** kullan.",
            examples: [
                { es: "Estoy muy feliz", tr: "Çok mutluyum" },
                { es: "Ella está muy cansada", tr: "O çok yorgun" },
                { es: "Estamos muy nerviosos", tr: "Çok gerginiz" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo",
            explanation: "ESTAR + Duygular kuralını hatırla:",
            table: {
                headers: ["Soru", "Cevap Kalıbı"],
                rows: [
                    ["¿Cómo estás?", "Estoy + [duygu]"],
                    ["¿Por qué?", "Porque + [sebep]"],
                    ["Erkek", "Estoy cansadO"],
                    ["Kadın", "Estoy cansadA"],
                    ["Çoğul", "Estamos cansadOS/AS"]
                ]
            },
            examples: [
                { es: "¿Cómo estás? - Estoy bien, gracias", tr: "Nasılsın? - İyiyim, teşekkürler" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Hoy estoy muy feliz porque es mi cumpleaños", tr: "Bugün çok mutluyum çünkü doğum günüm" },
                { es: "Mi hermana está triste porque su gato está enfermo", tr: "Kız kardeşim üzgün çünkü kedisi hasta" },
                { es: "¿Por qué estáis nerviosos? - Estamos nerviosos porque tenemos un examen", tr: "Neden gerginsiniz? - Gerginiz çünkü sınavımız var" },
                { es: "Mis padres están preocupados porque llego tarde", tr: "Ailem endişeli çünkü geç kalıyorum" },
                { es: "No estoy aburrido, estoy cansado", tr: "Sıkılmış değilim, yorgunum" }
            ]
        }
    ]
};


// ===== ÜNİTE 22: TENER QUE (GEREKLİLİK) =====
const unit22Grammar: UnitGrammar = {
    unitId: 22, title: "TENER QUE - Zorunluluk - Kapsamlı Rehber",
    rules: [
        {
            id: "golden-formula",
            title: "🧪 Altın Formül",
            explanation: "Zorunluluk cümlesi kurmak için şu üçlüyü asla ayırma:\n\n**[TENER Çekimi] + QUE + [MASTAR FİİL]**\n\n* **Tener:** Şahsa göre çekimle (Ben, Sen, O...)\n* **Que:** Bu köprüyü sakın unutma! (Bu olmadan sadece 'sahip olmak' anlamına gelir)\n* **Mastar Fiil:** Yapmak zorunda olduğun işi HİÇ DOKUNMADAN (Ir, Comer, Estudiar gibi) olduğu gibi koy.",
            examples: [
                { es: "Tengo que estudiar", tr: "Ders çalışmak zorundayım" },
                { es: "Tienes que ir", tr: "Gitmek zorundasın" }
            ]
        },
        {
            id: "tener-conjugation",
            title: "🛠️ Önce 'Tener' Fiilini Çekimleyelim",
            explanation: "Tener (Sahip olmak) düzensiz bir fiildir ('Go' ve 'Bot' fiilidir). Bunu ezberlememiz şart.",
            table: {
                headers: ["Kişi", "Tener Çekimi", "+ Que + Eylem", "Türkçe"],
                rows: [
                    ["Yo", "Tengo", "Tengo que ir", "Gitmek zorundayım"],
                    ["Tú", "Tienes", "Tienes que estudiar", "Ders çalışmak zorundasın"],
                    ["Él / Ella", "Tiene", "Tiene que comer", "Yemek zorunda"],
                    ["Nosotros/as", "Tenemos", "Tenemos que hablar", "Konuşmak zorundayız"],
                    ["Vosotros/as", "Tenéis", "Tenéis que escuchar", "Dinlemek zorundasınız"],
                    ["Ellos / Ellas", "Tienen", "Tienen que trabajar", "Çalışmak zorundalar"]
                ]
            },
            examples: [
                { es: "Tengo que levantarme temprano", tr: "Erken kalkmak zorundayım" }
            ]
        },
        {
            id: "que-importance",
            title: "🚨 Kritik Uyarı: 'Que' Kelimesinin Önemi",
            explanation: "A1 seviyesindeki en büyük hata şudur: 'Que' kelimesini yutmak.\n\n**Durum 1:** Tengo un coche.\n→ (Bir arabam var.) - Burada mecburiyet yok, sahiplik var.\n\n**Durum 2:** Tengo **QUE** lavar el coche.\n→ (Arabayı yıkamak zorundayım.) - İşte mecburiyet bu!\n\n**Kural:** Eğer cümlenin devamında bir EYLEM (Fiil) geliyorsa, araya mutlaka **QUE** girer.",
            examples: [
                { es: "Tengo un libro (Sahiplik)", tr: "Bir kitabım var" },
                { es: "Tengo QUE leer el libro (Zorunluluk)", tr: "Kitabı okumak zorundayım" }
            ]
        },
        {
            id: "real-life-examples",
            title: "📝 Örneklerle Hayatın Gerçekleri",
            explanation: "Bu yapıyı daha önce öğrendiğimiz kelimelerle birleştirelim:",
            examples: [
                { es: "Tengo que levantarme temprano (Dönüşlü fiil!)", tr: "Erken kalkmak zorundayım" },
                { es: "Él tiene que trabajar mucho", tr: "O çok çalışmak zorunda" },
                { es: "Tenemos que aprender español", tr: "İspanyolca öğrenmek zorundayız" },
                { es: "¿Tienes que ir? (Soru)", tr: "Gitmek zorunda mısın?" },
                { es: "No tengo que cocinar hoy (Olumsuz)", tr: "Bugün yemek yapmak zorunda değilim" }
            ]
        },
        {
            id: "querer-vs-tener-que",
            title: "🥊 Querer vs Tener Que (İstek vs Mecburiyet)",
            explanation: "Bu farkı anlarsan derdini tam anlatırsın:\n\n* **Quiero estudiar** = Ders çalışmak istiyorum (İçimden geliyor)\n* **Tengo que estudiar** = Ders çalışmak zorundayım (Sınavım var, mecburum)",
            table: {
                headers: ["Yapı", "Anlam", "Örnek"],
                rows: [
                    ["Quiero + fiil", "İstek", "Quiero dormir (Uyumak istiyorum)"],
                    ["Tengo que + fiil", "Zorunluluk", "Tengo que estudiar (Çalışmak zorundayım)"]
                ]
            },
            examples: [
                { es: "Quiero ir al cine", tr: "Sinemaya gitmek istiyorum (İstek)" },
                { es: "Tengo que ir al médico", tr: "Doktora gitmek zorundayım (Zorunluluk)" }
            ]
        },
        {
            id: "negative-questions",
            title: "❓ Soru ve Olumsuz",
            explanation: "Olumsuz yapmak için başına **NO** eklenir. Soru yapmak için soru işaretleri ve tonlama kullanılır.",
            examples: [
                { es: "No tengo que trabajar mañana", tr: "Yarın çalışmak zorunda değilim" },
                { es: "¿Tienes que salir ahora?", tr: "Şimdi çıkmak zorunda mısın?" },
                { es: "¿Por qué tenemos que esperar?", tr: "Neden beklemek zorundayız?" },
                { es: "No tiene que pagar", tr: "Ödemek zorunda değil" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo",
            explanation: "TENER QUE formülünü hatırla:",
            table: {
                headers: ["Kişi", "Formül", "Örnek"],
                rows: [
                    ["Yo", "Tengo que + fiil", "Tengo que ir"],
                    ["Tú", "Tienes que + fiil", "Tienes que estudiar"],
                    ["Él/Ella", "Tiene que + fiil", "Tiene que trabajar"],
                    ["Nosotros", "Tenemos que + fiil", "Tenemos que comer"],
                    ["Ellos", "Tienen que + fiil", "Tienen que dormir"]
                ]
            },
            examples: [
                { es: "¿Qué tienes que hacer hoy?", tr: "Bugün ne yapmak zorundasın?" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Mañana tengo que madrugar porque tengo un examen", tr: "Yarın erken kalkmak zorundayım çünkü sınavım var" },
                { es: "Mis padres tienen que trabajar todos los días", tr: "Ailem her gün çalışmak zorunda" },
                { es: "No quiero estudiar pero tengo que estudiar", tr: "Çalışmak istemiyorum ama çalışmak zorundayım" },
                { es: "¿Tenéis que venir a la reunión?", tr: "Toplantıya gelmek zorunda mısınız?" },
                { es: "Ella tiene que ir al hospital porque está enferma", tr: "O hastaneye gitmek zorunda çünkü hasta" }
            ]
        }
    ]
};


// ===== ÜNİTE 23: QUERER + GUSTAR (YEMEK) =====
const unit23Grammar: UnitGrammar = {
    unitId: 23, title: "QUERER ve GUSTAR - Yemek ve Restoran - Kapsamlı Rehber",
    rules: [
        {
            id: "querer-restaurant",
            title: "🙋‍♂️ QUERER: Restoranda Sipariş Vermek",
            explanation: "Karnın aç, garson geldi. 'Ben ... istiyorum' demek için **Querer** fiilini kullanırız.\n\nHatırlarsan bu bir 'Ayakkabı Fiili' idi (e → ie). Restoranda genelde 'Ben' (Yo) veya 'Biz' (Nosotros) kalıplarını kullanırsın.\n\n**Formül:** Quiero + [Yiyecek/İçecek] + (Por favor)\n\n**⚠️ Koç Uyarısı:** Quiero (İstiyorum) biraz emir kipi gibi sert duyulabilir. O yüzden cümlenin sonuna mutlaka **'Por favor'** (Lütfen) eklemeyi unutma. Kibarlık bedava!",
            examples: [
                { es: "Quiero un café, por favor", tr: "Bir kahve istiyorum, lütfen" },
                { es: "Quiero una pizza", tr: "Bir pizza istiyorum" },
                { es: "Queremos dos aguas", tr: "Biz iki su istiyoruz" },
                { es: "Quiero la cuenta, por favor", tr: "Hesabı istiyorum lütfen (MUTLAKA NOT ET!)" }
            ]
        },
        {
            id: "gustar-intro",
            title: "❤️ GUSTAR: Damak Tadını Anlatmak",
            explanation: "Siparişini verdin, yedin. Şimdi yemeği sevip sevmediğini anlatacaksın. Ya da genel olarak 'Ben dondurma severim' diyeceksin.\n\nBurada kuralımız çok net: **GUSTAR fiili, sevdiğin şeyin sayısına göre değişir.**",
            examples: [
                { es: "Me gusta el café", tr: "Kahveyi severim (tekil)" },
                { es: "Me gustan las patatas", tr: "Patatesleri severim (çoğul)" }
            ]
        },
        {
            id: "gustar-singular",
            title: "🍎 A. Tekil Şeyleri Sevmek (Me gusta)",
            explanation: "Eğer sevdiğin şey **tekil**se (Kahve, Çikolata, Pizza) fiilin sonuna -n gelmez.\n\n**Formül:** Me gusta + EL/LA + [Tekil İsim]",
            examples: [
                { es: "Me gusta el café", tr: "Kahveyi severim" },
                { es: "Me gusta el chocolate", tr: "Çikolatayı severim" },
                { es: "Me gusta la pizza", tr: "Pizzayı severim" },
                { es: "No me gusta la leche", tr: "Sütü sevmem" }
            ]
        },
        {
            id: "gustar-plural",
            title: "🍟 B. Çoğul Şeyleri Sevmek (Me gustaN)",
            explanation: "Eğer sevdiğin şey **çoğul**sa (Patatesler, Elmalar, Sebzeler) fiilin sonuna **-n** eklenir.\n\n**Formül:** Me gustan + LOS/LAS + [Çoğul İsim]",
            examples: [
                { es: "Me gustan las patatas", tr: "Patatesleri severim" },
                { es: "Me gustan las manzanas", tr: "Elmaları severim" },
                { es: "No me gustan los tomates", tr: "Domatesleri sevmem" },
                { es: "Me gustan las fresas", tr: "Çilekleri severim" }
            ]
        },
        {
            id: "querer-vs-gustar",
            title: "🥊 Büyük Fark: Querer vs Gustar",
            explanation: "Bu iki fiil arasındaki farkı anlamak A1 için hayati önem taşır.\n\n**Durum 1 (Açlık):**\nQuiero una manzana. → 'Bana bir elma ver, yiyeceğim.' (İstek/Sipariş)\n\n**Durum 2 (Zevk):**\nMe gusta la manzana. → 'Ben elmayı severim.' (Genel bir tercih, şu an yemek zorunda değilsin.)\n\n**İpucu:** Querer ile genelde **Un/Una** (Bir), Gustar ile genelde **El/La** (Genel) kullanılır.",
            table: {
                headers: ["Fiil", "Anlam", "Artikel", "Örnek"],
                rows: [
                    ["Quiero", "İstek/Sipariş", "Un/Una", "Quiero UNA manzana"],
                    ["Me gusta", "Zevk/Tercih", "El/La", "Me gusta LA manzana"]
                ]
            },
            examples: [
                { es: "Quiero una cerveza (Sipariş)", tr: "Bir bira istiyorum" },
                { es: "Me gusta la cerveza (Tercih)", tr: "Birayı severim" }
            ]
        },
        {
            id: "food-vocabulary",
            title: "📚 Yemek Sözlüğü",
            explanation: "Restoranda işine yarayacak temel kelimeler:",
            table: {
                headers: ["İspanyolca", "Türkçe", "Tekil/Çoğul"],
                rows: [
                    ["El café", "Kahve", "Tekil → Me gusta"],
                    ["El agua", "Su", "Tekil (Dikkat: EL!)"],
                    ["La pizza", "Pizza", "Tekil → Me gusta"],
                    ["Las patatas fritas", "Patates kızartması", "Çoğul → Me gustan"],
                    ["Los huevos", "Yumurtalar", "Çoğul → Me gustan"],
                    ["La cuenta", "Hesap", "Tekil"]
                ]
            },
            examples: [
                { es: "Quiero un agua, por favor", tr: "Bir su istiyorum, lütfen" },
                { es: "Me gustan los huevos fritos", tr: "Kızarmış yumurtaları severim" }
            ]
        },
        {
            id: "restaurant-phrases",
            title: "🍽️ Restorandaki Faydalı Kalıplar",
            explanation: "Bu kalıpları ezberle, yurtdışında çok işine yarar:",
            examples: [
                { es: "La carta, por favor", tr: "Menüyü lütfen" },
                { es: "¿Qué me recomienda?", tr: "Ne tavsiye edersiniz?" },
                { es: "Para mí, una ensalada", tr: "Bana bir salata" },
                { es: "La cuenta, por favor", tr: "Hesabı lütfen" },
                { es: "¿Está incluido el servicio?", tr: "Servis dahil mi?" }
            ]
        },
        {
            id: "summary-table",
            title: "📊 Özet Tablo",
            explanation: "QUERER ve GUSTAR farkını hatırla:",
            table: {
                headers: ["Durum", "Fiil", "Artikel", "Örnek"],
                rows: [
                    ["Sipariş verirken", "Quiero", "Un/Una", "Quiero un café"],
                    ["Tekil şeyi sevmek", "Me gusta", "El/La", "Me gusta el café"],
                    ["Çoğul şeyi sevmek", "Me gustan", "Los/Las", "Me gustan los postres"]
                ]
            },
            examples: [
                { es: "¿Te gusta el vino?", tr: "Şarabı sever misin?" },
                { es: "Sí, quiero una copa de vino", tr: "Evet, bir kadeh şarap istiyorum" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Me gusta la paella pero hoy quiero una pizza", tr: "Paellayı severim ama bugün pizza istiyorum" },
                { es: "¿Te gustan las tapas? - Sí, quiero unas tapas, por favor", tr: "Tapasları sever misin? - Evet, biraz tapas istiyorum lütfen" },
                { es: "No me gusta el pescado, quiero carne", tr: "Balığı sevmiyorum, et istiyorum" },
                { es: "Me gustan mucho las frutas, especialmente las fresas", tr: "Meyveleri çok severim, özellikle çilekleri" },
                { es: "Queremos dos cafés y una tarta, por favor", tr: "İki kahve ve bir tart istiyoruz, lütfen" }
            ]
        }
    ]
};


// ===== ÜNİTE 24: SER + MİLLİYET =====
const unit24Grammar: UnitGrammar = {
    unitId: 24, title: "SER ile Milliyet - Kapsamlı Rehber",
    rules: [
        {
            id: "ser-de-country",
            title: "🇹🇷 Yöntem 1: 'SER + DE + Ülke' (En Kolayı)",
            explanation: "Bu yöntem hayat kurtarır! Milliyet sıfatını bilmene gerek kalmaz, ülke ismini bilmen yeterlidir.\n\n**Formül:** (Ben) + SOY + DE + [Ülke İsmi]\n\n**Mantık:** Buradaki 'De' eki, Türkçe'deki '-den / -dan' ekidir.",
            examples: [
                { es: "Soy de Turquía", tr: "Türkiye'denim / Türkiyeliyim" },
                { es: "Eres de España", tr: "İspanya'dansın" },
                { es: "Ella es de Alemania", tr: "O Almanya'dan" },
                { es: "¿De dónde eres?", tr: "Nerelisin? / Nereden geliyorsun?" }
            ]
        },
        {
            id: "ser-nationality",
            title: "🆔 Yöntem 2: 'SER + Milliyet Sıfatı'",
            explanation: "Asıl konumuz bu. Burada 'Türkiye' demiyoruz, 'Türk' diyoruz. Bu bir sıfat olduğu için **Cinsiyet** ve **Sayı** uyumuna girmek zorundadır.\n\n**Formül:** (Ben) + SOY + [Milliyet]",
            examples: [
                { es: "Soy turco (erkek)", tr: "Ben Türküm" },
                { es: "Soy turca (kadın)", tr: "Ben Türküm" },
                { es: "Ella es alemana", tr: "O Alman" }
            ]
        },
        {
            id: "o-ending",
            title: "🅰️ A. Sonu '-o' ile Bitenler (Klasik Kural)",
            explanation: "Eğer milliyet ismi **-o** ile bitiyorsa; erkekler için **-o**, kadınlar için **-a** kullanılır.",
            table: {
                headers: ["Milliyet", "Erkek", "Kadın"],
                rows: [
                    ["Türk", "Soy turco", "Soy turca"],
                    ["İtalyan", "Soy italiano", "Soy italiana"],
                    ["Rus", "Soy ruso", "Soy rusa"],
                    ["Meksikalı", "Soy mexicano", "Soy mexicana"]
                ]
            },
            examples: [
                { es: "Mi padre es turco", tr: "Babam Türk" },
                { es: "Mi madre es turca", tr: "Annem Türk" }
            ]
        },
        {
            id: "consonant-ending",
            title: "⚠️ B. Sessiz Harf ile Bitenler (ÖZEL KURAL!)",
            explanation: "Normalde İspanyolca sıfatlarda sessiz harfle bitenler değişmezdi (Azul, Difícil gibi). **AMA MİLLİYETLERDE DEĞİŞİR!**\n\nSessiz harfle biten milliyetlerin sonuna kadınlar için **'-a'** eklenir.\n\n**Dikkat:** Erkek halinde vurgu işareti (tilde) varsa, kadın halinde genelde düşer (Alemán → Alemana).",
            table: {
                headers: ["Milliyet", "Erkek", "Kadın"],
                rows: [
                    ["İspanyol", "Soy español", "Soy españolA"],
                    ["Alman", "Soy alemán", "Soy alemanA"],
                    ["Fransız", "Soy francés", "Soy francesA"],
                    ["İngiliz", "Soy inglés", "Soy inglesA"]
                ]
            },
            examples: [
                { es: "Mi amigo es francés", tr: "Arkadaşım Fransız (erkek)" },
                { es: "Mi amiga es francesa", tr: "Arkadaşım Fransız (kadın)" }
            ]
        },
        {
            id: "unchanged",
            title: "😐 C. '-e' veya '-a' ile Bitenler (Değişmeyenler)",
            explanation: "Bazı milliyetler doğuştan nötrdür. Kadın da olsa erkek de olsa aynı kalır.",
            table: {
                headers: ["Milliyet", "Erkek", "Kadın", "Değişim"],
                rows: [
                    ["Belçikalı", "Soy belga", "Soy belga", "Yok"],
                    ["ABD'li", "Soy estadounidense", "Soy estadounidense", "Yok"],
                    ["Kanadalı", "Soy canadiense", "Soy canadiense", "Yok"]
                ]
            },
            examples: [
                { es: "Él es estadounidense", tr: "O Amerikalı (erkek)" },
                { es: "Ella es estadounidense", tr: "O Amerikalı (kadın)" }
            ]
        },
        {
            id: "plural",
            title: "🇹🇷🇹🇷 Çoğul Yapma (Biz Türküz!)",
            explanation: "Sadece 'Ben' demiyoruz, 'Biz' veya 'Onlar' derken milliyetleri de çoğul yapmamız lazım (-s veya -es ekleyerek).\n\n**Biz Türküz:**\n* (Erkekler/Karışık): Somos turc**os**\n* (Sadece Kadınlar): Somos turc**as**\n\n**Onlar İspanyol:**\n* (Erkekler): Ellos son español**es** (Sessizle bittiği için -es aldı)\n* (Kadınlar): Ellas son español**as**",
            examples: [
                { es: "Somos turcos", tr: "Biz Türküz" },
                { es: "Ellos son españoles", tr: "Onlar İspanyol (erkekler)" },
                { es: "Ellas son alemanas", tr: "Onlar Alman (kadınlar)" }
            ]
        },
        {
            id: "country-nationality-table",
            title: "🗺️ Özet Tablosu: Ülke vs Milliyet",
            explanation: "Bu tabloyu sık sık kullanacaksın, bir yere not etmeni öneririm:",
            table: {
                headers: ["Ülke (País)", "Erkek Milliyet", "Kadın Milliyet"],
                rows: [
                    ["Turquía (Türkiye)", "Turco", "Turca"],
                    ["España (İspanya)", "Español", "Española"],
                    ["Alemania (Almanya)", "Alemán", "Alemana"],
                    ["Francia (Fransa)", "Francés", "Francesa"],
                    ["Italia (İtalya)", "Italiano", "Italiana"],
                    ["Inglaterra (İngiltere)", "Inglés", "Inglesa"],
                    ["Estados Unidos (ABD)", "Estadounidense", "Estadounidense"]
                ]
            },
            examples: [
                { es: "Mi profesor es de España, es español", tr: "Öğretmenim İspanya'dan, İspanyol" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "¿De dónde eres? - Soy de Turquía, soy turco", tr: "Nerelisin? - Türkiye'denim, Türküm" },
                { es: "Mi madre es alemana pero mi padre es español", tr: "Annem Alman ama babam İspanyol" },
                { es: "Somos turcos pero vivimos en España", tr: "Türküz ama İspanya'da yaşıyoruz" },
                { es: "Mis amigos son franceses", tr: "Arkadaşlarım Fransız" },
                { es: "Ella es italiana y habla muy bien español", tr: "O İtalyan ve çok iyi İspanyolca konuşuyor" }
            ]
        }
    ]
};


// ===== ÜNİTE 25: DÜZENLİ FİİL ÇEKİMİ =====
const unit25Grammar: UnitGrammar = {
    unitId: 25, title: "Düzenli Fiil Çekimi - Kapsamlı Rehber",
    rules: [
        {
            id: "ar-verbs",
            title: "🗣️ -AR Fiilleri (Grubun Lideri)",
            explanation: "**Örnek Fiil:** HABLAR (Konuşmak)\n**Kök:** Habl-\n\nKural çok basit: Ağırlıklı olarak **'A'** harfini duyacaksın.\n\n**Diğer Popüler -AR Fiilleri:** Trabajar (Çalışmak), Estudiar (Ders çalışmak), Bailar (Dans etmek), Viajar (Seyahat etmek).",
            table: {
                headers: ["Kişi", "Ek", "Çekimlenmiş Hali", "Anlamı"],
                rows: [
                    ["Yo", "-o", "Hablo", "Konuşuyorum"],
                    ["Tú", "-as", "Hablas", "Konuşuyorsun"],
                    ["Él / Ella", "-a", "Habla", "Konuşuyor"],
                    ["Nosotros", "-amos", "Hablamos", "Konuşuyoruz"],
                    ["Vosotros", "-áis", "Habláis", "Konuşuyorsunuz"],
                    ["Ellos", "-an", "Hablan", "Konuşuyorlar"]
                ]
            },
            examples: [
                { es: "Hablo español muy bien", tr: "İspanyolcayı çok iyi konuşurum" },
                { es: "Trabajamos todos los días", tr: "Her gün çalışırız" },
                { es: "¿Estudias mucho?", tr: "Çok ders çalışıyor musun?" }
            ]
        },
        {
            id: "er-verbs",
            title: "🍎 -ER Fiilleri (İkinci Grup)",
            explanation: "**Örnek Fiil:** COMER (Yemek yemek)\n**Kök:** Com-\n\nBurada 'A' harfleri yerini **'E'** harfine bırakır. Sadece 'Ben' (Yo) yine '-o' ile biter (Bu kural neredeyse hiç değişmez).\n\n**Diğer Popüler -ER Fiilleri:** Beber (İçmek), Leer (Okumak), Aprender (Öğrenmek), Correr (Koşmak).",
            table: {
                headers: ["Kişi", "Ek", "Çekimlenmiş Hali", "Anlamı"],
                rows: [
                    ["Yo", "-o", "Como", "Yiyorum"],
                    ["Tú", "-es", "Comes", "Yiyorsun"],
                    ["Él / Ella", "-e", "Come", "Yiyor"],
                    ["Nosotros", "-emos", "Comemos", "Yiyoruz"],
                    ["Vosotros", "-éis", "Coméis", "Yiyorsunuz"],
                    ["Ellos", "-en", "Comen", "Yiyorlar"]
                ]
            },
            examples: [
                { es: "Como muchas frutas", tr: "Çok meyve yerim" },
                { es: "Aprendo español todos los días", tr: "Her gün İspanyolca öğreniyorum" },
                { es: "Leemos libros interesantes", tr: "İlginç kitaplar okuyoruz" }
            ]
        },
        {
            id: "ir-verbs",
            title: "🏠 -IR Fiilleri (Sinsi İkizler)",
            explanation: "**Örnek Fiil:** VIVIR (Yaşamak)\n**Kök:** Viv-\n\nBurası çok önemli koçum! **-IR fiilleri, -ER fiillerinin ikizi** gibidir.\n\nÇekimlerin çoğu -ER ile **AYNIDIR**.\nSadece iki yerde değişir:\n* Nosotros: -emos değil, **-imos** olur\n* Vosotros: -éis değil, **-ís** olur\n\n**Diğer Popüler -IR Fiilleri:** Escribir (Yazmak), Abrir (Açmak).",
            table: {
                headers: ["Kişi", "Ek", "Çekimlenmiş Hali", "Anlamı"],
                rows: [
                    ["Yo", "-o", "Vivo", "Yaşıyorum"],
                    ["Tú", "-es", "Vives", "Yaşıyorsun (ER ile aynı)"],
                    ["Él / Ella", "-e", "Vive", "Yaşıyor (ER ile aynı)"],
                    ["Nosotros", "-imos ⚠️", "Vivimos", "Yaşıyoruz (FARKLI!)"],
                    ["Vosotros", "-ís ⚠️", "Vivís", "Yaşıyorsunuz (FARKLI!)"],
                    ["Ellos", "-en", "Viven", "Yaşıyorlar (ER ile aynı)"]
                ]
            },
            examples: [
                { es: "Vivo en Turquía", tr: "Türkiye'de yaşıyorum" },
                { es: "Escribo emails todos los días", tr: "Her gün e-posta yazarım" },
                { es: "Abrimos la puerta", tr: "Kapıyı açıyoruz" }
            ]
        },
        {
            id: "grand-summary",
            title: "🧠 BÜYÜK ÖZET TABLOSU",
            explanation: "Gözünün önünde tek resim olsun istersen al sana formül:",
            table: {
                headers: ["Kişi", "-AR (A Grubu)", "-ER (E Grubu)", "-IR (İnatçı Grup)"],
                rows: [
                    ["Yo", "-o", "-o", "-o"],
                    ["Tú", "-as", "-es", "-es"],
                    ["Él", "-a", "-e", "-e"],
                    ["Nosotros", "-amos", "-emos", "-imos ⚠️"],
                    ["Vosotros", "-áis", "-éis", "-ís ⚠️"],
                    ["Ellos", "-an", "-en", "-en"]
                ]
            },
            examples: [
                { es: "Hablar → Hablo, Hablas, Habla...", tr: "Konuşmak" },
                { es: "Comer → Como, Comes, Come...", tr: "Yemek" },
                { es: "Vivir → Vivo, Vives, Vive...", tr: "Yaşamak" }
            ]
        },
        {
            id: "conjugation-steps",
            title: "📝 Çekimleme Adımları",
            explanation: "Herhangi bir düzenli fiili çekimlemek için 3 adım:\n\n**1. ADIM:** Fiilin sonundaki -AR/-ER/-IR'ı bul ve çıkar (Kök kalır)\n**2. ADIM:** Hangi gruba ait olduğunu belirle (-AR, -ER, -IR)\n**3. ADIM:** Şahısa göre doğru eki ekle",
            examples: [
                { es: "Bailar → Bail- + o = Bailo", tr: "Dans ediyorum" },
                { es: "Beber → Beb- + es = Bebes", tr: "İçiyorsun" },
                { es: "Escribir → Escrib- + imos = Escribimos", tr: "Yazıyoruz" }
            ]
        },
        {
            id: "common-verbs",
            title: "📚 Sık Kullanılan Düzenli Fiiller",
            explanation: "Bu fiilleri ezberle, her yerde karşına çıkacak:",
            table: {
                headers: ["-AR Fiilleri", "-ER Fiilleri", "-IR Fiilleri"],
                rows: [
                    ["Hablar (Konuşmak)", "Comer (Yemek)", "Vivir (Yaşamak)"],
                    ["Trabajar (Çalışmak)", "Beber (İçmek)", "Escribir (Yazmak)"],
                    ["Estudiar (Ders çalışmak)", "Leer (Okumak)", "Abrir (Açmak)"],
                    ["Bailar (Dans etmek)", "Aprender (Öğrenmek)", "Recibir (Almak)"],
                    ["Viajar (Seyahat etmek)", "Correr (Koşmak)", "Subir (Çıkmak)"]
                ]
            },
            examples: [
                { es: "Estudio español porque quiero viajar", tr: "Seyahat etmek istediğim için İspanyolca çalışıyorum" }
            ]
        },
        {
            id: "practice",
            title: "🎯 Pratik Örnekler",
            explanation: "Tüm kuralları bir arada uygulayalım:",
            examples: [
                { es: "Hablo español y aprendo mucho", tr: "İspanyolca konuşuyorum ve çok öğreniyorum" },
                { es: "Mi hermano trabaja en un banco", tr: "Kardeşim bir bankada çalışıyor" },
                { es: "Vivimos en Estambul pero viajamos mucho", tr: "İstanbul'da yaşıyoruz ama çok seyahat ediyoruz" },
                { es: "¿Comes carne o pescado?", tr: "Et mi yoksa balık mı yiyorsun?" },
                { es: "Escribo emails y leo libros todos los días", tr: "Her gün e-posta yazarım ve kitap okurum" }
            ]
        }
    ]
};


// ===== YENİ A1 ÜNİTELERİ (26-30) =====

// ===== ÜNİTE 26: İŞARET SIFATLARI (ESTE/ESTA) =====
const unit26Grammar: UnitGrammar = {
    unitId: 26, title: "İşaret Sıfatları - Este, Esta, Estos, Estas",
    rules: [
        {
            id: "demonstrative-intro",
            title: "👆 İşaret Sıfatları Nedir?",
            explanation: "İşaret sıfatları, bir nesneyi göstermek için kullanılır. Türkçe'deki 'Bu' ve 'Bunlar' kelimelerine karşılık gelir.\n\n**A1 seviyesinde sadece YAKIN mesafe öğreniyoruz:**\n* **Este** = Bu (Eril Tekil)\n* **Esta** = Bu (Dişil Tekil)\n* **Estos** = Bunlar (Eril Çoğul)\n* **Estas** = Bunlar (Dişil Çoğul)\n\n**Kural:** Gösterilen nesnenin cinsiyetine ve sayısına uymalı!",
            examples: [
                { es: "Este libro es interesante", tr: "Bu kitap ilginç" },
                { es: "Esta casa es grande", tr: "Bu ev büyük" },
                { es: "Estos zapatos son nuevos", tr: "Bu ayakkabılar yeni" },
                { es: "Estas flores son bonitas", tr: "Bu çiçekler güzel" }
            ]
        },
        {
            id: "este-masculine",
            title: "📘 ESTE / ESTOS (Eril İsimler İçin)",
            explanation: "**Eril (El ile başlayan) isimler için:**\n\n* **ESTE** = Bu (Tekil)\n* **ESTOS** = Bunlar (Çoğul)\n\n**Örnekler:**\n* El libro → **Este** libro (Bu kitap)\n* Los libros → **Estos** libros (Bu kitaplar)",
            examples: [
                { es: "Este coche es rápido", tr: "Bu araba hızlı" },
                { es: "Este perro es pequeño", tr: "Bu köpek küçük" },
                { es: "Estos niños son mis hijos", tr: "Bu çocuklar benim çocuklarım" },
                { es: "Estos platos están sucios", tr: "Bu tabaklar kirli" }
            ],
            table: {
                headers: ["Artikel", "Tekil", "Çoğul"],
                rows: [
                    ["El (Eril)", "ESTE", "ESTOS"],
                    ["Örnek", "Este libro", "Estos libros"]
                ]
            }
        },
        {
            id: "esta-feminine",
            title: "📕 ESTA / ESTAS (Dişil İsimler İçin)",
            explanation: "**Dişil (La ile başlayan) isimler için:**\n\n* **ESTA** = Bu (Tekil)\n* **ESTAS** = Bunlar (Çoğul)\n\n**Örnekler:**\n* La mesa → **Esta** mesa (Bu masa)\n* Las mesas → **Estas** mesas (Bu masalar)",
            examples: [
                { es: "Esta mesa es de madera", tr: "Bu masa ahşaptan" },
                { es: "Esta chica es mi hermana", tr: "Bu kız benim kız kardeşim" },
                { es: "Estas casas son muy caras", tr: "Bu evler çok pahalı" },
                { es: "Estas manzanas están maduras", tr: "Bu elmalar olgun" }
            ],
            table: {
                headers: ["Artikel", "Tekil", "Çoğul"],
                rows: [
                    ["La (Dişil)", "ESTA", "ESTAS"],
                    ["Örnek", "Esta casa", "Estas casas"]
                ]
            }
        },
        {
            id: "demonstrative-summary",
            title: "📊 Özet Tablo",
            explanation: "Tüm işaret sıfatlarını hatırla:",
            examples: [
                { es: "¿Qué es esto?", tr: "Bu ne? (Cinsiyet belirsiz)" },
                { es: "Este es mi amigo Juan", tr: "Bu benim arkadaşım Juan" }
            ],
            table: {
                headers: ["Cinsiyet", "Tekil (Bu)", "Çoğul (Bunlar)"],
                rows: [
                    ["Eril", "ESTE", "ESTOS"],
                    ["Dişil", "ESTA", "ESTAS"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 27: DEL KULLANIMI =====
const unit27Grammar: UnitGrammar = {
    unitId: 27, title: "DEL Kullanımı - A+EL ve DE+EL Birleşimi",
    rules: [
        {
            id: "del-intro",
            title: "📚 AL ve DEL Nedir?",
            explanation: "İspanyolca'da iki edat **eril artikel (EL)** ile birleşince kısalır:\n\n**A + EL = AL** (Yönelme - ...ya/ye)\n**DE + EL = DEL** (Ayrılma/Sahiplik - ...nın/nin, ...dan/den)\n\n**Dikkat:** Dişil artikel (LA) ile birleşme OLMAZ!\n* A la → A la (Değişmez)\n* De la → De la (Değişmez)",
            examples: [
                { es: "Voy al cine", tr: "Sinemaya gidiyorum (a + el)" },
                { es: "Vengo del trabajo", tr: "İşten geliyorum (de + el)" },
                { es: "Es el coche del profesor", tr: "Öğretmenin arabası (de + el)" }
            ]
        },
        {
            id: "del-ownership",
            title: "🏠 DEL ile Sahiplik Bildirme",
            explanation: "Bir şeyin **kime ait olduğunu** söylerken DE kullanırız. Eğer sahip **EL** ile başlıyorsa, DEL olur.\n\n**Formül:** [Nesne] + DEL + [Sahip (Eril)]\n\n**Örnekler:**\n* El libro del niño = Çocuğun kitabı\n* La casa del médico = Doktorun evi",
            examples: [
                { es: "El coche del padre", tr: "Babanın arabası" },
                { es: "La puerta del hospital", tr: "Hastanenin kapısı" },
                { es: "El nombre del restaurante", tr: "Restoranın adı" },
                { es: "Los hijos del profesor", tr: "Öğretmenin çocukları" }
            ],
            table: {
                headers: ["Sahip", "Kombinasyon", "Örnek"],
                rows: [
                    ["El niño", "DE + EL = DEL", "El libro del niño"],
                    ["La niña", "DE + LA (değişmez)", "El libro de la niña"],
                    ["El profesor", "DEL", "La casa del profesor"],
                    ["La profesora", "DE LA", "La casa de la profesora"]
                ]
            }
        },
        {
            id: "del-origin",
            title: "🚪 DEL ile Kaynak/Çıkış Bildirme",
            explanation: "Bir yerin **içinden/yakınından** geldiğini söylerken DE kullanırız.\n\n**Formül:** Venir/Salir + DEL + [Yer (Eril)]",
            examples: [
                { es: "Vengo del supermercado", tr: "Marketten geliyorum" },
                { es: "Salgo del banco", tr: "Bankadan çıkıyorum" },
                { es: "El tren viene del norte", tr: "Tren kuzeyden geliyor" },
                { es: "Salimos del cine a las diez", tr: "Saat onda sinemadan çıktık" }
            ]
        },
        {
            id: "al-vs-del",
            title: "🥊 AL vs DEL Karşılaştırma",
            explanation: "**AL:** Bir yere GİDERKEN (Yön)\n**DEL:** Bir yerden GELIRKEN veya sahiplik (Kaynak)\n\n**İpucu:**\n* AL → İleriye git (→)\n* DEL → Geriye gel (←)",
            examples: [
                { es: "Voy al parque", tr: "Parka gidiyorum (AL = yön)" },
                { es: "Vengo del parque", tr: "Parktan geliyorum (DEL = kaynak)" },
                { es: "Llevo al niño al colegio", tr: "Çocuğu okula götürüyorum" },
                { es: "Recojo al niño del colegio", tr: "Çocuğu okuldan alıyorum" }
            ],
            table: {
                headers: ["Durum", "Kombinasyon", "Anlam"],
                rows: [
                    ["Yönelme (→)", "A + EL = AL", "Sinemaya gidiyorum"],
                    ["Ayrılma (←)", "DE + EL = DEL", "Sinemadan geliyorum"],
                    ["Sahiplik", "DE + EL = DEL", "Öğretmenin arabası"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 28: SIRA SAYILARI =====
const unit28Grammar: UnitGrammar = {
    unitId: 28, title: "Sıra Sayıları - Primero, Segundo, Tercero",
    rules: [
        {
            id: "ordinal-intro",
            title: "🔢 Sıra Sayıları Nedir?",
            explanation: "Sıra sayıları, nesnelerin **sırasını** belirtir. Türkçe'deki 'Birinci, İkinci, Üçüncü...' karşılığıdır.\n\n**A1 seviyesinde ilk 10'u öğreniyoruz:**\n\n1. Primero (1.)\n2. Segundo (2.)\n3. Tercero (3.)\n4. Cuarto (4.)\n5. Quinto (5.)\n6. Sexto (6.)\n7. Séptimo (7.)\n8. Octavo (8.)\n9. Noveno (9.)\n10. Décimo (10.)",
            examples: [
                { es: "El primer piso", tr: "Birinci kat" },
                { es: "La segunda calle a la derecha", tr: "Sağdaki ikinci sokak" }
            ],
            table: {
                headers: ["Sayı", "İspanyolca", "Kısaltma"],
                rows: [
                    ["1.", "Primero", "1.º / 1.ª"],
                    ["2.", "Segundo", "2.º / 2.ª"],
                    ["3.", "Tercero", "3.º / 3.ª"],
                    ["4.", "Cuarto", "4.º"],
                    ["5.", "Quinto", "5.º"],
                    ["6.", "Sexto", "6.º"],
                    ["7.", "Séptimo", "7.º"],
                    ["8.", "Octavo", "8.º"],
                    ["9.", "Noveno", "9.º"],
                    ["10.", "Décimo", "10.º"]
                ]
            }
        },
        {
            id: "ordinal-agreement",
            title: "⚠️ Cinsiyet ve Sayı Uyumu",
            explanation: "Sıra sayıları, tanımladıkları ismin **cinsiyetine ve sayısına** uyar.\n\n**Eril:** Primero, Segundo...\n**Dişil:** Primera, Segunda...\n**Çoğul:** Primeros/Primeras...\n\n**Özel Kural:** PRIMERO ve TERCERO, eril tekil isimden ÖNCE kullanılınca son 'O' düşer!\n* El primer libro (El primero libro DEĞİL!)\n* El tercer piso (El tercero piso DEĞİL!)",
            examples: [
                { es: "El primer día", tr: "İlk gün (primero → primer)" },
                { es: "La primera vez", tr: "İlk kez (primeira = dişil)" },
                { es: "El tercer piso", tr: "Üçüncü kat (tercero → tercer)" },
                { es: "La tercera puerta", tr: "Üçüncü kapı" }
            ],
            table: {
                headers: ["Sıra", "Eril Tekil", "Dişil Tekil", "İsimden Önce (Eril)"],
                rows: [
                    ["1.", "Primero", "Primera", "Primer ⚠️"],
                    ["2.", "Segundo", "Segunda", "Segundo"],
                    ["3.", "Tercero", "Tercera", "Tercer ⚠️"],
                    ["4.", "Cuarto", "Cuarta", "Cuarto"]
                ]
            }
        },
        {
            id: "ordinal-usage",
            title: "📍 Ne Zaman Kullanılır?",
            explanation: "Sıra sayıları şu durumlarda kullanılır:\n\n**1. Kat numaraları:**\n* Vivo en el segundo piso (2. katta yaşıyorum)\n\n**2. Sıralama:**\n* Es mi primera vez (İlk defam)\n\n**3. Yol tarifi:**\n* Toma la tercera calle (Üçüncü sokağa gir)\n\n**4. Yarışmalar:**\n* Llegó en primer lugar (Birinci geldi)",
            examples: [
                { es: "Vivo en el quinto piso", tr: "Beşinci katta yaşıyorum" },
                { es: "Es la primera vez que vengo", tr: "İlk kez geliyorum" },
                { es: "Tome la segunda a la izquierda", tr: "Soldaki ikinciyi alın" },
                { es: "Juan llegó en tercer lugar", tr: "Juan üçüncü oldu" }
            ]
        }
    ]
};

// ===== ÜNİTE 29: SORU KELİMELERİ =====
const unit29Grammar: UnitGrammar = {
    unitId: 29, title: "Soru Kelimeleri - Cuál, Cuánto, Por qué",
    rules: [
        {
            id: "question-words-intro",
            title: "❓ Soru Kelimeleri (Interrogativos)",
            explanation: "İspanyolca'da soru kelimeleri **vurgu işareti** taşır. A1'de daha önce bazılarını öğrendin, şimdi hepsini tek tabloda görelim:\n\n* **Qué** = Ne?\n* **Quién / Quiénes** = Kim? / Kimler?\n* **Cuál / Cuáles** = Hangisi? / Hangileri?\n* **Cuánto/a/os/as** = Ne kadar? / Kaç tane?\n* **Dónde** = Nerede?\n* **Cuándo** = Ne zaman?\n* **Cómo** = Nasıl?\n* **Por qué** = Neden?",
            examples: [
                { es: "¿Qué quieres?", tr: "Ne istiyorsun?" },
                { es: "¿Cuál prefieres?", tr: "Hangisini tercih edersin?" },
                { es: "¿Cuántos años tienes?", tr: "Kaç yaşındasın?" },
                { es: "¿Por qué estudias español?", tr: "Neden İspanyolca çalışıyorsun?" }
            ],
            table: {
                headers: ["Soru Kelimesi", "Anlam", "Örnek"],
                rows: [
                    ["Qué", "Ne?", "¿Qué es esto?"],
                    ["Quién/Quiénes", "Kim?/Kimler?", "¿Quién es ella?"],
                    ["Cuál/Cuáles", "Hangisi?", "¿Cuál quieres?"],
                    ["Cuánto/a/os/as", "Ne kadar?/Kaç?", "¿Cuánto cuesta?"],
                    ["Dónde", "Nerede?", "¿Dónde vives?"],
                    ["Cuándo", "Ne zaman?", "¿Cuándo vienes?"],
                    ["Cómo", "Nasıl?", "¿Cómo estás?"],
                    ["Por qué", "Neden?", "¿Por qué no vienes?"]
                ]
            }
        },
        {
            id: "cual-que",
            title: "🤔 CUÁL vs QUÉ (Hangisi vs Ne)",
            explanation: "En çok karıştırılan iki soru kelimesi!\n\n**QUÉ:** Tanım sorma, genel bilgi\n* ¿Qué es esto? = Bu ne? (Tanım)\n* ¿Qué quieres? = Ne istiyorsun?\n\n**CUÁL:** Seçim yapma, belirli seçenekler arasından\n* ¿Cuál quieres? = Hangisini istiyorsun? (Seçenekler var)\n* ¿Cuál es tu nombre? = Adın ne? (İsim seçenekleri içinden)\n\n**İpucu:** Seçenek varsa CUÁL, tanım istiyorsan QUÉ",
            examples: [
                { es: "¿Qué es un libro?", tr: "Kitap nedir? (Tanım)" },
                { es: "¿Cuál libro quieres?", tr: "Hangi kitabı istiyorsun? (Seçim)" },
                { es: "¿Qué hora es?", tr: "Saat kaç? (Genel)" },
                { es: "¿Cuál es tu teléfono?", tr: "Telefon numaran ne? (Seçim)" }
            ]
        },
        {
            id: "cuanto-forms",
            title: "🔢 CUÁNTO ve Formları",
            explanation: "CUÁNTO 'Ne kadar?' veya 'Kaç?' anlamına gelir ve sayılabilir nesnelerde **cinsiyet ve sayıya** göre değişir.\n\n* **Cuánto** = Ne kadar? (Sayılamayan veya eril tekil)\n* **Cuánta** = Ne kadar? (Dişil tekil)\n* **Cuántos** = Kaç tane? (Eril çoğul)\n* **Cuántas** = Kaç tane? (Dişil çoğul)",
            examples: [
                { es: "¿Cuánto cuesta?", tr: "Ne kadar? (Fiyat)" },
                { es: "¿Cuánta agua necesitas?", tr: "Ne kadar su lazım?" },
                { es: "¿Cuántos hermanos tienes?", tr: "Kaç kardeşin var? (Erkek)" },
                { es: "¿Cuántas personas hay?", tr: "Kaç kişi var?" }
            ],
            table: {
                headers: ["Form", "Kullanım", "Örnek"],
                rows: [
                    ["Cuánto", "Fiyat / Sayılamayan (Eril)", "¿Cuánto cuesta?"],
                    ["Cuánta", "Sayılamayan (Dişil)", "¿Cuánta leche?"],
                    ["Cuántos", "Sayılabilen (Eril)", "¿Cuántos años?"],
                    ["Cuántas", "Sayılabilen (Dişil)", "¿Cuántas sillas?"]
                ]
            }
        },
        {
            id: "porque-vs-por-que",
            title: "⚠️ POR QUÉ vs PORQUE",
            explanation: "Bu iki yazım çok karıştırılır!\n\n**¿Por qué?** (Ayrı + Vurgulu) = Neden? / Niçin?\n→ Soru sorarken kullanılır\n\n**Porque** (Bitişik + Vurgusuz) = Çünkü\n→ Cevap verirken kullanılır\n\n**İpucu:** Soru = Ayr**I**, Cevap = B**I**tişik",
            examples: [
                { es: "¿Por qué estudias español?", tr: "Neden İspanyolca çalışıyorsun? (Soru)" },
                { es: "Porque quiero viajar a España", tr: "Çünkü İspanya'ya seyahat etmek istiyorum (Cevap)" },
                { es: "¿Por qué no vienes?", tr: "Neden gelmiyorsun?" },
                { es: "Porque estoy enfermo", tr: "Çünkü hastayım" }
            ]
        }
    ]
};

// ===== ÜNİTE 30: PODER FİİLİ =====
const unit30Grammar: UnitGrammar = {
    unitId: 30, title: "PODER Fiili - Yapabilmek / -ebilmek",
    rules: [
        {
            id: "poder-intro",
            title: "💪 PODER Fiili Nedir?",
            explanation: "**PODER** = Yapabilmek, muktedir olmak\n\nTürkçe'deki **'-ebilmek / -abilmek'** ekine karşılık gelir.\n\n**Kullanım Alanları:**\n1. Yetenek (Yapabilir misin?)\n2. İzin (Yapabilir miyim?)\n3. Olasılık (Mümkün mü?)\n\n**Not:** PODER bir 'Bot Fiili'dir (O→UE değişimi yapar).",
            examples: [
                { es: "Puedo hablar español", tr: "İspanyolca konuşabiliyorum" },
                { es: "¿Puedes ayudarme?", tr: "Bana yardım edebilir misin?" },
                { es: "No puedo venir mañana", tr: "Yarın gelemiyorum" }
            ]
        },
        {
            id: "poder-conjugation",
            title: "📝 PODER Fiil Çekimi (Şimdiki Zaman)",
            explanation: "PODER fiili **O→UE** kök değişimi yapar (Bot Fiili). Nosotros ve Vosotros'ta değişmez.\n\n**Kök:** Pod-\n**Değişen Kök:** Pued-",
            examples: [
                { es: "Yo puedo, tú puedes, él puede...", tr: "Ben yapabilirim, sen yapabilirsin, o yapabilir..." }
            ],
            table: {
                headers: ["Kişi", "Çekim", "Türkçe"],
                rows: [
                    ["Yo", "Puedo", "Yapabilirim"],
                    ["Tú", "Puedes", "Yapabilirsin"],
                    ["Él / Ella", "Puede", "Yapabilir"],
                    ["Nosotros", "Podemos ⚠️", "Yapabiliriz (değişmedi!)"],
                    ["Vosotros", "Podéis ⚠️", "Yapabilirsiniz (değişmedi!)"],
                    ["Ellos", "Pueden", "Yapabilirler"]
                ]
            }
        },
        {
            id: "poder-infinitive",
            title: "📐 PODER + Mastar Fiil",
            explanation: "PODER'den sonra eylem gelir ve bu eylem **mastar (infinitive)** formunda kalır, çekimlenmez.\n\n**Formül:** PODER (çekimli) + FİİL (mastar)\n\n* Puedo **hablar** = Konuşabiliyorum\n* Puedes **comer** = Yiyebilirsin\n* Puede **venir** = Gelebilir",
            examples: [
                { es: "Puedo nadar muy bien", tr: "Çok iyi yüzebiliyorum" },
                { es: "¿Puedes abrir la ventana?", tr: "Pencereyi açabilir misin?" },
                { es: "No podemos salir esta noche", tr: "Bu gece dışarı çıkamayız" },
                { es: "Ellos no pueden entender", tr: "Onlar anlayamıyorlar" }
            ]
        },
        {
            id: "poder-permission",
            title: "🙋 İzin İsteme ile PODER",
            explanation: "Kibar bir şekilde izin istemek için PODER kullanılır.\n\n**Formül:** ¿Puedo + mastar fiil + ...?\n\n**Kibar formlar:**\n* ¿Puedo...? = ...yapabilir miyim?\n* ¿Podría...? = ...yapabilir miydim? (Daha kibar - A2)",
            examples: [
                { es: "¿Puedo entrar?", tr: "Girebilir miyim?" },
                { es: "¿Puedo usar tu teléfono?", tr: "Telefonunu kullanabilir miyim?" },
                { es: "¿Puedo sentarme aquí?", tr: "Buraya oturabilir miyim?" },
                { es: "¿Puedo hacerte una pregunta?", tr: "Sana bir soru sorabilir miyim?" }
            ]
        },
        {
            id: "poder-negative",
            title: "🚫 Olumsuz: NO PODER",
            explanation: "Yapamamak için PODER'in önüne **NO** eklenir.\n\n**Formül:** NO + PODER (çekimli) + FİİL (mastar)",
            examples: [
                { es: "No puedo dormir", tr: "Uyuyamıyorum" },
                { es: "No puedes fumar aquí", tr: "Burada sigara içemezsin" },
                { es: "No podemos ir a la fiesta", tr: "Partiye gidemeyiz" },
                { es: "Mi abuelo no puede caminar bien", tr: "Dedem iyi yürüyemiyor" }
            ]
        },
        {
            id: "poder-vs-saber",
            title: "🤔 PODER vs SABER",
            explanation: "İkisi de 'yapabilmek' anlamına gelebilir ama farkları var:\n\n**PODER:** Fiziksel veya durumsal yetenek/imkan\n* No puedo correr (Koşamıyorum - şu an, bacağım ağrıyor)\n\n**SABER:** Öğrenilmiş beceri/bilgi\n* Sé nadar (Yüzmeyi biliyorum - öğrendim)\n\n**İpucu:**\n* Bilgi/Beceri → SABER\n* İmkan/İzin → PODER",
            examples: [
                { es: "Sé cocinar (Bilgi)", tr: "Yemek yapmayı biliyorum" },
                { es: "Pero hoy no puedo cocinar (İmkan)", tr: "Ama bugün yapamıyorum" },
                { es: "¿Sabes nadar?", tr: "Yüzmeyi biliyor musun? (Beceri)" },
                { es: "¿Puedes nadar ahora?", tr: "Şimdi yüzebilir misin? (İmkan)" }
            ],
            table: {
                headers: ["Fiil", "Kullanım", "Örnek"],
                rows: [
                    ["SABER", "Öğrenilmiş beceri", "Sé hablar español"],
                    ["PODER", "Fiziksel imkan", "Puedo hablar ahora"],
                    ["SABER", "Bilgi", "¿Sabes dónde está?"],
                    ["PODER", "İzin", "¿Puedo entrar?"]
                ]
            }
        }
    ]
};


// Import'lar dosyanın başına taşındı

export function getGrammarForUnit(unitId: number): UnitGrammar {
    // === İNGİLİZCE ÜNİTELER (ID 101-220) ===
    // İngilizce A1 (101-130)
    if (unitId >= 101 && unitId <= 130) {
        const enGrammar = getEnglishA1GrammarForUnit(unitId);
        return {
            unitId: enGrammar.unitId,
            title: enGrammar.title,
            rules: enGrammar.rules.map((r, i) => ({
                id: `en-a1-${unitId}-${i}`,
                title: r.title,
                explanation: r.explanation,
                examples: r.examples.map(ex => ({ es: ex.english, tr: ex.turkish }))
            }))
        };
    }

    // İngilizce A2 (131-160)
    if (unitId >= 131 && unitId <= 160) {
        const enGrammar = getEnglishA2GrammarForUnit(unitId);
        return {
            unitId: enGrammar.unitId,
            title: enGrammar.title,
            rules: enGrammar.rules.map((r, i) => ({
                id: `en-a2-${unitId}-${i}`,
                title: r.title,
                explanation: r.explanation,
                examples: r.examples.map(ex => ({ es: ex.english, tr: ex.turkish }))
            }))
        };
    }

    // === İSPANYOLCA ÜNİTELER (ID 1-100) ===
    // B2 üniteleri (91-110) - curriculum.ts ile senkron
    if (unitId >= 91 && unitId <= 110) {
        const b2Grammar = getB2GrammarForUnit(unitId);
        return {
            unitId,
            title: `Ünite ${unitId} Gramer`,
            rules: b2Grammar.map((g, index) => ({
                id: g.id,
                title: g.title,
                explanation: g.explanation,
                examples: g.examples.map(ex => ({ es: ex.spanish, tr: ex.turkish }))
            }))
        };
    }

    // B1 üniteleri (61-90) - curriculum.ts ile senkron
    if (unitId >= 61 && unitId <= 90) {
        const b1Grammar = getB1GrammarForUnit(unitId);
        return {
            unitId,
            title: `Ünite ${unitId} Gramer`,
            rules: b1Grammar.map((g, index) => ({
                id: `b1-${unitId}-${index + 1}`,
                title: g.title,
                explanation: g.explanation,
                examples: g.examples.map(ex => ({ es: ex, tr: "" }))
            }))
        };
    }

    // A2 üniteleri (31-60) - curriculum.ts ile senkron
    if (unitId >= 31 && unitId <= 60) {
        return getA2GrammarForUnit(unitId);
    }

    // Fransızca A1 (301-330)
    if (unitId >= 301 && unitId <= 330) {
        const frGrammar = getFrenchA1GrammarForUnit(unitId);
        if (frGrammar) {
            return frGrammar;
        }
    }

    // Fransızca A2 (331-360)
    if (unitId >= 331 && unitId <= 360) {
        const frA2Grammar = getFrenchA2GrammarForUnit(unitId);
        if (frA2Grammar) {
            return frA2Grammar;
        }
    }

    // Fransızca B1 (361-390)
    if (unitId >= 361 && unitId <= 390) {
        const frB1Grammar = getFrB1GrammarForUnit(unitId);
        if (frB1Grammar) {
            return frB1Grammar;
        }
    }


    // A1 üniteleri (1-30)
    const grammars: { [key: number]: UnitGrammar } = {
        1: unit1Grammar, 2: unit2Grammar, 3: unit3Grammar, 4: unit4Grammar, 5: unit5Grammar,
        6: unit6Grammar, 7: unit7Grammar, 8: unit8Grammar, 9: unit9Grammar, 10: unit10Grammar,
        11: unit11Grammar, 12: unit12Grammar, 13: unit13Grammar, 14: unit14Grammar, 15: unit15Grammar,
        16: unit16Grammar, 17: unit17Grammar, 18: unit18Grammar, 19: unit19Grammar, 20: unit20Grammar,
        21: unit21Grammar, 22: unit22Grammar, 23: unit23Grammar, 24: unit24Grammar, 25: unit25Grammar,
        26: unit26Grammar, 27: unit27Grammar, 28: unit28Grammar, 29: unit29Grammar, 30: unit30Grammar
    };
    return grammars[unitId] || { unitId, title: "Gramer", rules: [] };
}

