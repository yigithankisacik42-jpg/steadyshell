/**
 * LinguaFlow Gramer Veritabanı - İspanyolca A2
 * 20 Ünite (ID: 21-40), her biri için detaylı gramer kuralları
 */

import { UnitGrammar, GrammarRule, GrammarExample, GrammarTable } from './grammar';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN 1 - PRETÉRİTO İNDEFİNİDO (DÜZENLİ) =====
const unit21Grammar: UnitGrammar = {
    unitId: 21, title: "Pretérito Indefinido (Düzenli Fiiller)",
    rules: [
        {
            id: "preterito-ar-detailed",
            title: "-AR Grubu Fiiller (Detaylı Analiz)",
            explanation: "**-AR ile biten fiiller (Trabajar, Estudiar, Viajar) için kuralımız şudur:**\n\n* **Yo** trabajé (Son harfe vurgu yap! Trabahé)\n* **Tú** trabajaste\n* **Él/Ella** trabajó (O harfine sert vur! HablÓ)\n* **Nosotros** trabajamos (Dikkat: Şimdiki zamanla aynı olabilir)\n* **Ellos** trabajaron\n\n⚠️ **Koçun Altın Tüyosu 1: 'Nosotros' Tuzağı**\n'Trabajamos' kelimesi hem 'Çalışıyoruz' (Şimdiki) hem de 'Çalıştık' (Geçmiş) anlamına gelir. Farkı 'hoy' (bugün) veya 'ayer' (dün) gibi zaman zarflarından anlarsın.\n\n⚠️ **Koçun Altın Tüyosu 2: Vurgunun Gücü**\n**Hablo** = Konuşuyorum (Vurgu 'a'da)\n**Habló** = Konuştu (Vurgu 'o'da)",
            examples: [
                { es: "Ella cantó muy bien anoche", tr: "O dün gece çok iyi şarkı söyledi (Vurgu 'ó'da)" },
                { es: "Tú bailaste toda la noche", tr: "Sen bütün gece dans ettin" },
                { es: "Ayer trabajamos hasta tarde", tr: "Dün geç saate kadar çalıştık" }
            ],
            table: {
                headers: ["Kişi", "Ek", "Örnek (Trabajar)"],
                rows: [
                    ["Yo", "-é", "Trabajé"],
                    ["Tú", "-aste", "Trabajaste"],
                    ["Él/Ella", "-ó", "Trabajó"],
                    ["Nosotros", "-amos", "Trabajamos"],
                    ["Vosotros", "-asteis", "Trabajasteis"],
                    ["Ellos", "-aron", "Trabajaron"]
                ]
            }
        },
        {
            id: "preterito-er-ir-detailed",
            title: "-ER ve -IR Grubu Fiiller (Detaylı Analiz)",
            explanation: "**Müjde!** İspanyolcada bu iki grubun geçmiş zaman ekleri **%100 aynıdır**.\n\n* **Yo** comí / salí\n* **Tú** comiste / saliste\n* **Él/Ella** comió / salió (Com-YÖ, Sal-YÖ diye okunur - 'O'ya bas!)\n* **Nosotros** comimos / salimos\n* **Ellos** comieron / salieron\n\n🔍 **Kritik Detay:** Üçüncü Tekil Şahıs (-ió) vurgusuna dikkat et. 'Como' (yerim) ile 'Comió' (yedi) karıştırılmamalı!",
            examples: [
                { es: "Yo bebí un café", tr: "Ben bir kahve içtim" },
                { es: "Los estudiantes escribieron un ensayo", tr: "Öğrenciler bir makale yazdılar" },
                { es: "Mis padres vivieron en Turquía", tr: "Ailem Türkiye'de yaşadı" }
            ],
            table: {
                headers: ["Kişi", "Ek", "Comer (Yemek)", "Salir (Çıkmak)"],
                rows: [
                    ["Yo", "-í", "Comí", "Salí"],
                    ["Tú", "-iste", "Comiste", "Saliste"],
                    ["Él/Ella", "-ió", "Comió", "Salió"],
                    ["Nosotros", "-imos", "Comimos", "Salimos"],
                    ["Ellos", "-ieron", "Comieron", "Salieron"]
                ]
            }
        },
        {
            id: "marcadores-temporales",
            title: "Cümleyi 'Geçmiş' Yapan Anahtarlar (Zaman Zarfları)",
            explanation: "Sadece fiili çekimlemek yetmez. Cümleni bu kelimelerle süslemen gerekir. Cümlenin başına veya sonuna gelebilirler:\n\n* **Ayer**: Dün\n* **Anteayer**: Evvelsi gün\n* **Anoche**: Dün gece\n* **La semana pasada**: Geçen hafta\n* **El mes pasado**: Geçen ay\n* **Hace dos días**: İki gün önce\n* **Hace un rato**: Az önce",
            examples: [
                { es: "Hace un año, viajé a Madrid", tr: "Bir yıl önce Madrid'e seyahat ettim" },
                { es: "Anoche comí paella", tr: "Dün gece paella yedim" }
            ]
        }
    ]
};

// ===== ÜNİTE 22: GEÇMİŞ ZAMAN 2 - PRETÉRİTO İNDEFİNİDO (DÜZENSİZ) =====
const unit22Grammar: UnitGrammar = {
    unitId: 22, title: "Pretérito Indefinido (Düzensiz Fiiller)",
    rules: [
        {
            id: "ser-ir-twins",
            title: "\"İkiz Kardeşler\": SER ve IR (Olmak ve Gitmek)",
            explanation: "İspanyolcanın en büyük sürprizi budur. \"Ser\" (Olmak) ve \"Ir\" (Gitmek) fiillerinin geçmiş zaman çekimleri tamamen aynıdır!\nHangisi olduğunu cümlenin gidişatından anlarız.\n\n* **Yo fui** (Gittim / Oldum)\n* **Tú fuiste** (Gittin / Oldun)\n* **Él/Ella fue** (Gitti / Oldu)\n* **Nosotros fuimos** (Gittik / Olduk)\n* **Vosotros fuisteis** (Gittiniz / Oldunuz)\n* **Ellos fueron** (Gittiler / Oldular)",
            examples: [
                { es: "Ayer fui al cine (Ir)", tr: "Dün sinemaya gittim (Yönelme var)" },
                { es: "La película fue horrible (Ser)", tr: "Film berbat oldu/idi (Durum var)" }
            ],
            table: {
                headers: ["Kişi", "Çekim (Ser / Ir)", "Türkçe karşılığı"],
                rows: [
                    ["Yo", "Fui", "Gittim / Oldum"],
                    ["Tú", "Fuiste", "Gittin / Oldun"],
                    ["Él/Ella", "Fue", "Gitti / Oldu"],
                    ["Nosotros", "Fuimos", "Gittik / Olduk"],
                    ["Vosotros", "Fuisteis", "Gittiniz / Oldunuz"],
                    ["Ellos", "Fueron", "Gittiler / Oldular"]
                ]
            }
        },
        {
            id: "root-changers-magic",
            title: "\"Kökünü Değiştirenler\" (Sihirli Grup)",
            explanation: "Bu fiillerde normal kuralları (-é, -ó vb.) unut. Bu fiillerin kökü tamamen değişir ve hepsi ORTAK bir ek grubu alır.\n\n⚠️ **ÇOK ÖNEMLİ KURAL**: Bu gruptaki hiçbir fiilde VURGU (TİLDE) YOKTUR!\n(Comí, Habló derken vurgu vardı ama bunlarda yok: Tuve, Hice, Dijo...)\n\n**Ortak Ekler:**\n-e, -iste, -o, -imos, -isteis, -ieron",
            examples: [
                { es: "Ayer no pude dormir", tr: "Dün uyuyamadım" },
                { es: "Yo tuve un problema", tr: "Bir problemim oldu/vardı" }
            ]
        },
        {
            id: "u-group",
            title: "A. U-Grubu (Kökü U'ya Dönüşenler)",
            explanation: "**Estar** -> **Estuv-**\n**Tener** -> **Tuv-**\n**Poder** -> **Pud-**\n**Poner** -> **Pus-**\n**Saber** -> **Sup-**",
            examples: [
                { es: "Yo estuve en casa", tr: "Evdeydim" },
                { es: "Ella tuvo suerte", tr: "O şanslıydı" },
                { es: "No pudimos venir", tr: "Gelemedik" }
            ],
            table: {
                headers: ["Fiil", "Yeni Kök", "Örnek Çekim (Ben / O)"],
                rows: [
                    ["Estar", "Estuv-", "Yo estuve / Él estuvo"],
                    ["Tener", "Tuv-", "Yo tuve / Él tuvo"],
                    ["Poder", "Pud-", "Yo pude / Él pudo"],
                    ["Poner", "Pus-", "Yo puse / Él puso"],
                    ["Saber", "Sup-", "Yo supe / Él supo"]
                ]
            }
        },
        {
            id: "i-group",
            title: "B. I-Grubu (Kökü I'ya Dönüşenler)",
            explanation: "**Hacer** -> **Hic-**\n**Querer** -> **Quis-**\n**Venir** -> **Vin-**\n\n⚠️ **\"Hacer\" Uyarısı:**\nHacer fiili 3. tekil şahısta (O) \"Hico\" OLMAZ! Okunuşu korumak için \"Hizo\" olur.\n*Él hizo la tarea.*",
            examples: [
                { es: "Yo hice mi tarea", tr: "Ödevimi yaptım" },
                { es: "Ellos quisieron venir", tr: "Gelmeyi istediler" },
                { es: "Tú viniste tarde", tr: "Geç geldin" }
            ],
            table: {
                headers: ["Fiil", "Yeni Kök", "Örnek Çekim (Ben / O)"],
                rows: [
                    ["Hacer", "Hic-", "Yo hice / Él hizo (*Hizo)"],
                    ["Querer", "Quis-", "Yo quise / Él quiso"],
                    ["Venir", "Vin-", "Yo vine / Él vino"]
                ]
            }
        },
        {
            id: "j-group",
            title: "C. J-Grubu (Kökü J'ye Dönüşenler)",
            explanation: "**Decir** -> **Dij-**\n**Traer** -> **Traj-**\n**Conducir** -> **Conduj-**\n\n⚠️ **J-Grubu İçin Özel Kural:**\nÇoğul 3. şahısta (Onlar) normalde \"-ieron\" eki gelirken, J grubunda sadece \"-eron\" gelir. İ harfi düşer.\n*Ellos dijeron (Doğru)* - *Ellos dijieron (Yanlış)*",
            examples: [
                { es: "Yo dije la verdad", tr: "Gerçeği söyledim" },
                { es: "Ellos trajeron comida", tr: "Yiyecek getirdiler" },
                { es: "Él condujo toda la noche", tr: "Bütün gece araba sürdü" }
            ],
            table: {
                headers: ["Fiil", "Yeni Kök", "Örnek Çekim (Ben / O)"],
                rows: [
                    ["Decir", "Dij-", "Yo dije / Él dijo"],
                    ["Traer", "Traj-", "Yo traje / Él trajo"],
                    ["Conducir", "Conduj-", "Yo conduje / Él condujo"]
                ]
            }
        },
        {
            id: "dar-ver",
            title: "Minik İsyankarlar: DAR ve VER",
            explanation: "Bu ikisi kısa fiillerdir ve birbirlerine çok benzerler.\n\n**DAR (Vermek):** -AR fiili olmasına rağmen -ER/-IR ekleri alır.\n*di, diste, dio, dimos, disteis, dieron*\n\n**VER (Görmek):** Düzenlidir ama vurgu işareti (tilde) almaz.\n*vi, viste, vio, vimos, visteis, vieron*",
            examples: [
                { es: "Ayer vi a tu hermano", tr: "Dün kardeşini gördüm" },
                { es: "Ella me dio un regalo", tr: "O bana bir hediye verdi" }
            ]
        }
    ]
};

// ===== ÜNİTE 23: RESTORANDA =====
const unit23Grammar: UnitGrammar = {
    unitId: 23, title: "Restoranda Sipariş - Kibar İstekler",
    rules: [
        {
            id: "polite-requests",
            title: "1. Kibar İstek: \"Quiero\" Yerine Ne Kullanılır?",
            explanation: "Garsona direkt \"Quiero una sopa\" (Çorba istiyorum) demek gramer olarak doğru ama üslup olarak biraz emir kipi gibidir. Onun yerine şu iki \"Sihirli Kalıbı\" kullanıyoruz:\n\n**A) Querría (İsterdim / Rica etsem...)**\nQuerer fiilinin koşul kipidir. Çok yaygın ve kibardır.\n*Kullanımı:* Querría + [İsim] veya [Fiil]\n\n**B) Me gustaría (İsterdim / Hoşuma giderdi)**\nGustar fiilinin kibar halidir.\n*Kullanımı:* Me gustaría + [Fiil]",
            examples: [
                { es: "Querría una mesa para dos", tr: "İki kişilik bir masa rica ediyorum" },
                { es: "Querría ver el menú", tr: "Menüyü görmek isterdim" },
                { es: "Me gustaría beber vino tinto", tr: "Kırmızı şarap içmek isterim" }
            ]
        },
        {
            id: "coach-tip-para-mi",
            title: "💡 Koçun Tüyosu: \"Para mí...\"",
            explanation: "İspanyollar bazen fiil kullanmaya bile üşenir. Masada sıra sana gelince en doğal (ve yine de kibar) olanı şudur:\n\n**Para mí, una ensalada.** (Benim için / Bana bir salata.)",
            examples: [
                { es: "Para mí, el pollo", tr: "Bana tavuk" },
                { es: "Y para beber, agua", tr: "İçmek için de su" }
            ]
        },
        {
            id: "pedir-vs-ordenar",
            title: "2. Büyük Kapışma: PEDIR vs. ORDENAR",
            explanation: "Bu konu İspanyolca öğrenenlerin en çok kafasını karıştıran, \"False Friend\" (Yalancı Arkadaş) tuzağıdır.\n\n**A) PEDIR (İstemek / Sipariş Etmek) 👑**\nRestoranda kullanman gereken ASIL FİİL budur. İspanya'da ve Latin Amerika'nın %90'ında garsona bir şey sipariş ederken bu fiil kullanılır.\n*Presente:* Pido, Pides, Pide, Pedimos, Piden\n\n**B) ORDENAR (Düzenlemek / Emretmek) ⚠️**\nİspanya'da \"Odayı toplamak\" veya \"Emir vermek\" demektir. Restoranda kullanılmaz! Latin Amerika'da bazen kullanılır ama sen PEDIR kullan, güvende kal.",
            examples: [
                { es: "Voy a pedir el postre", tr: "Tatlıyı sipariş edeceğim" },
                { es: "¿Qué vas a pedir?", tr: "Ne sipariş edeceksin?" }
            ],
            table: {
                headers: ["Kişi", "Pedir (İstemek)", "Ordenar (Düzenlemek)"],
                rows: [
                    ["Yo", "Pido", "Ordeno"],
                    ["Tú", "Pides", "Ordenas"],
                    ["Él/Ella", "Pide", "Ordena"],
                    ["Nosotros", "Pedimos", "Ordenamos"],
                    ["Ellos", "Piden", "Ordenan"]
                ]
            }
        },
        {
            id: "restaurant-vocab",
            title: "3. Bilmen Gereken Diğer Restoran Terimleri",
            explanation: "**De primero:** İlk tabak (Başlangıç) olarak...\n**De segundo:** Ana yemek (İkinci tabak) olarak...\n**De postre:** Tatlı olarak...\n**La cuenta, por favor:** Hesap lütfen.\n**¿Está picante?:** Acı mı?\n**Sin cebolla:** Soğansız.",
            examples: [
                { es: "De primero, una sopa", tr: "Başlangıç olarak bir çorba" },
                { es: "La cuenta, por favor", tr: "Hesap lütfen" }
            ]
        }
    ]
};

// ===== ÜNİTE 24: ALIŞVERİŞ =====
const unit24Grammar: UnitGrammar = {
    unitId: 24, title: "Alışveriş - Nesne Zamirleri",
    rules: [
        {
            id: "direct-object-pronouns",
            title: "📦 1. Doğrudan Nesne Zamirleri (Lo, La, Los, Las)",
            explanation: "Türkçede \"Onu, onları\" dediğimiz eklerdir. İspanyolcada nesnenin cinsiyetine ve sayısına göre değişir.\n\n**Mantık Tablosu:**\n* **Tekil:** LO (Eril), LA (Dişil)\n* **Çoğul:** LOS (Eril), LAS (Dişil)\n\n**Kritik Kural (Nereye Koyacağız?):**\nBu zamirler çekimlenmiş fiilin HEMEN ÖNÜNE gelir.",
            examples: [
                { es: "Quiero comprar el vestido -> Lo quiero comprar", tr: "Elbiseyi almak istiyorum -> Onu almak istiyorum" },
                { es: "¿Tienes la camiseta? -> Sí, la tengo", tr: "Tişört sende mi? -> Evet, o bende" },
                { es: "Voy a llevar los zapatos -> Los voy a llevar", tr: "Ayakkabıları alacağım -> Onları alacağım" },
                { es: "No veo las gafas -> No las veo", tr: "Gözlükleri görmüyorum -> Onları görmüyorum" }
            ],
            table: {
                headers: ["Cinsiyet", "Tekil (Onu)", "Çoğul (Onları)"],
                rows: [
                    ["Eril (Masculino)", "LO", "LOS"],
                    ["Dişil (Femenino)", "LA", "LAS"]
                ]
            }
        },
        {
            id: "indirect-object-pronouns",
            title: "🎁 2. Dolaylı Nesne Zamirleri (Me, Te, Le, Nos, Les)",
            explanation: "Dolaylı nesne zamirleri eylemden ETKİLENEN kişiyi belirtir. Türkçede \"bana, sana, ona\" anlamına gelir.\n\n**Zamir Tablosu:**\n* **ME** = Bana\n* **TE** = Sana\n* **LE** = Ona / Size (resmi)\n* **NOS** = Bize\n* **LES** = Onlara\n\n**Kullanım Alanları:**\n* Satıcı sana bir şey gösteriyor\n* Birine bir şey veriyorsun\n* Birinden bir şey istiyorsun",
            examples: [
                { es: "¿Me puede ayudar?", tr: "Bana yardım edebilir misiniz?" },
                { es: "Le doy el dinero", tr: "Ona parayı veriyorum" },
                { es: "¿Te queda bien?", tr: "Sana yakıştı mı?" },
                { es: "Nos trae la cuenta", tr: "Bize hesabı getiriyor" },
                { es: "Les enseño las ofertas", tr: "Onlara indirimleri gösteriyorum" }
            ],
            table: {
                headers: ["Zamir", "Anlam", "Örnek Cümle"],
                rows: [
                    ["ME", "Bana", "¿Me puede mostrar eso?"],
                    ["TE", "Sana", "Te lo envuelvo para regalo"],
                    ["LE", "Ona / Size", "Le recomiendo este modelo"],
                    ["NOS", "Bize", "¿Nos hace un descuento?"],
                    ["LES", "Onlara", "Les doy el recibo"]
                ]
            }
        },
        {
            id: "shopping-phrases",
            title: "🛒 3. Alışveriş Kalıp Cümleleri",
            explanation: "Mağazada sık kullanılan ifadeler:\n\n**Müşteri olarak:**\n* ¿Me lo puedo probar? = Deneyebilir miyim?\n* ¿Lo tiene en otra talla? = Başka beden var mı?\n* ¿Me hace un descuento? = İndirim yapar mısınız?\n* Me lo llevo = Alıyorum\n\n**Satıcı olarak:**\n* ¿Le ayudo en algo? = Yardımcı olabilir miyim?\n* ¿Qué talla usa? = Bedeniniz ne?\n* Le queda muy bien = Size çok yakıştı",
            examples: [
                { es: "¿Me lo puedo probar?", tr: "Bunu deneyebilir miyim?" },
                { es: "¿Lo tiene en talla M?", tr: "M bedeni var mı?" },
                { es: "Me lo llevo", tr: "Alıyorum" },
                { es: "¿Aceptan tarjeta?", tr: "Kart geçiyor mu?" },
                { es: "¿Me hace un descuento?", tr: "İndirim yapar mısınız?" },
                { es: "Le queda perfecto", tr: "Size mükemmel yakıştı" }
            ]
        },
        {
            id: "shopping-vocab-adj",
            title: "🏷️ 4. Alışveriş Kelime Çantası",
            explanation: "**Fiyat/Değer:**\n* **Caro** = Pahalı\n* **Barato** = Ucuz\n* **En oferta** = İndirimde\n* **El descuento** = İndirim\n\n**Beden/Ölçü:**\n* **La talla** = Beden\n* **El número** = Numara (ayakkabı)\n* **Grande / Pequeño** = Büyük / Küçük\n\n**Ödeme:**\n* **En efectivo** = Nakit\n* **Con tarjeta** = Kartla\n* **El recibo** = Fiş",
            examples: [
                { es: "¿Está en oferta?", tr: "İndirimde mi?" },
                { es: "¿Qué talla usa usted?", tr: "Kaç beden giyiyorsunuz?" },
                { es: "Pago en efectivo", tr: "Nakit ödüyorum" },
                { es: "El recibo, por favor", tr: "Fişi verir misiniz?" }
            ]
        }
    ]
};

// ===== ÜNİTE 25: SEYAHAT PLANLARI =====
const unit25Grammar: UnitGrammar = {
    unitId: 25, title: "Gelecek Planları - Altın Formül",
    rules: [
        {
            id: "golden-formula",
            title: "1. Altın Formül: Ir a + Fiil",
            explanation: "$$\\text{IR (Çekimli)} + \\text{a} + \\text{FİİL (Yalın Hal)}$$\n\nBu formülde sadece \"IR\" (Gitmek) fiilini kişiye göre çekimliyorsun. Asıl eylemimiz (yemek, içmek, gezmek) hiç değişmiyor, olduğu gibi kalıyor.",
            examples: [
                { es: "Voy a comer", tr: "Yemek yiyeceğim (Yemeye gidiyorum)" },
                { es: "Vas a estudiar", tr: "Çalışacaksın" },
                { es: "Vamos a jugar", tr: "Oynayacağız" }
            ]
        },
        {
            id: "ir-conjugation",
            title: "2. Motoru Çalıştıralım: IR Fiilinin Çekimi",
            explanation: "\"IR\" düzensiz bir fiildir, bunu ezberlememiz lazım:\n\n* **Yo Voy** (Gidiyorum)\n* **Tú Vas** (Gidiyorsun)\n* **Él/Ella Va** (Gidiyor)\n* **Nosotros Vamos** (Gidiyoruz)\n* **Vosotros Vais** (Gidiyorsunuz)\n* **Ellos Van** (Gidiyorlar)",
            examples: [],
            table: {
                headers: ["Kişi", "IR Çekimi", "Türkçe"],
                rows: [
                    ["Yo", "Voy", "Gidiyorum"],
                    ["Tú", "Vas", "Gidiyorsun"],
                    ["Él/Ella", "Va", "Gidiyor"],
                    ["Nosotros", "Vamos", "Gidiyoruz"],
                    ["Ellos", "Van", "Gidiyorlar"]
                ]
            }
        },
        {
            id: "bridge-trap",
            title: "⚠️ Koçun Uyarısı: \"A\" Harfi Tuzağı",
            explanation: "Öğrencilerin %90'ı hızlı konuşurken aradaki \"a\" harfini yutar.\n\n❌ **Yanlış:** Yo voy comer. (Tarzancası: Ben gitmek yemek.)\n✅ **Doğru:** Yo voy **A** comer.\n\nBu \"a\" harfi, cümlenin çimentosudur. O olmadan bina yıkılır!",
            examples: [
                { es: "Voy a salir", tr: "Çıkacağım" },
                { es: "Va a llover", tr: "Yağmur yağacak" }
            ]
        },
        {
            id: "negation-time",
            title: "3. Olumsuz Yapmak ve Zaman Zarfları",
            explanation: "**Olumsuzluk:** Sadece \"IR\" fiilinin önüne \"NO\" getiriyorsun.\n*No voy a salir.*\n\n**Gelecek Sinyalleri:**\n* **Mañana:** Yarın\n* **Esta noche:** Bu gece\n* **Este fin de semana:** Bu hafta sonu\n* **La próxima semana:** Gelecek hafta",
            examples: [
                { es: "No voy a salir esta noche", tr: "Bu gece çıkmayacağım" },
                { es: "Mañana vamos a viajar", tr: "Yarın seyahat edeceğiz" }
            ]
        }
    ]
};

// ===== ÜNİTE 26: OTEL REZERVASYONU =====
const unit26Grammar: UnitGrammar = {
    unitId: 26, title: "Otel Rezervasyonu - HAY vs. TIENE",
    rules: [
        {
            id: "quisiera",
            title: "🎩 Kibar İstek: Quisiera",
            explanation: "**Quisiera** = Querer fiilinin koşullu kipi, çok kibar isteklerde kullanılır.\n\n* Quisiera una habitación = Bir oda isterdim\n* Quisiera reservar = Rezervasyon yapmak isterdim\n\nResepsiyonda veya otel çalışanlarıyla konuşurken bu kalıp size çok kibar bir üslup kazandırır.",
            examples: [
                { es: "Quisiera una habitación doble", tr: "Çift kişilik oda isterdim" },
                { es: "Quisiera hacer una reserva", tr: "Rezervasyon yapmak isterdim" },
                { es: "Quisiera ver la habitación primero", tr: "Önce odayı görmek isterdim" }
            ]
        },
        {
            id: "hay-vs-tiene-intro",
            title: "🤔 2. Büyük Soru: HAY vs. TIENE (Var mı?)",
            explanation: "İkisi de Türkçeye **\"Var mı?\"** diye çevrilebilir ama İspanyolcada mantıkları çok farklıdır. Bu farkı bilmek seni A2'de bir adım öne taşır.\n\nAşağıda her ikisini ayrı ayrı inceleyelim:",
            examples: [
                { es: "¿Hay wifi en el hotel?", tr: "Otelde wifi var mı? (Genel varlık)" },
                { es: "¿La habitación tiene balcón?", tr: "Odanın balkonu var mı? (Sahiplik)" }
            ]
        },
        {
            id: "hay-haber",
            title: "🅰️ HAY (Haber Fiili) → \"Ortada var mı?\"",
            explanation: "**HAY** genel varlıktan bahseder. Öznesi yoktur (gizli özne 'o' değildir, tamamen geneldir). **\"Mevcut mu?\"** anlamındadır.\n\n**Kullanım alanları:**\n* Bir şeyin ortada olup olmadığını sormak\n* Genel mevcudiyet\n* Belirli olmayan şeyler\n\n**Formül:** ¿Hay + [belirsiz nesne]?\n\n**İpucu:** Cümlenin başına \"Ortada/Burada...\" kelimesini koyabiliyorsan → HAY",
            examples: [
                { es: "¿Hay wifi en el hotel?", tr: "Otelde wifi var mı? (Genel olarak mevcut mu?)" },
                { es: "¿Hay un banco cerca?", tr: "Yakında bir banka var mı?" },
                { es: "¿Hay habitaciones libres?", tr: "Boş oda var mı? (Genel olarak)" },
                { es: "¿Hay piscina?", tr: "Havuz var mı? (Ortada mevcut mu?)" },
                { es: "¿Hay restaurante en el hotel?", tr: "Otelde restoran var mı?" }
            ]
        },
        {
            id: "tiene-tener",
            title: "🅱️ TIENE (Tener Fiili) → \"Sahip mi?\"",
            explanation: "**TIENE** bir özneye (otele, odaya veya resepsiyoniste) aittir. **\"Odanın ...sı var mı?\"** veya **\"Siz ...ya sahip misiniz?\"** demektir.\n\n**Kullanım alanları:**\n* Belirli bir şeyin özelliğini sormak\n* Sahiplik ilişkisi kurmak\n* Kişiye veya nesneye özel soru\n\n**Formül:** ¿[Özne] tiene + [sahip olunan şey]?\n\n**İpucu:** Cümlenin başına \"Odanın...\" veya \"Otelin...\" kelimesini koyabiliyorsan → TIENE",
            examples: [
                { es: "¿La habitación tiene baño privado?", tr: "Odanın özel banyosu var mı? (Oda banyoya sahip mi?)" },
                { es: "¿El hotel tiene piscina?", tr: "Otelin havuzu var mı? (Otel havuza sahip mi?)" },
                { es: "¿Tiene habitaciones libres?", tr: "Boş odanız var mı? (Siz sahip misiniz?)" },
                { es: "¿La habitación tiene aire acondicionado?", tr: "Odada klima var mı?" },
                { es: "¿Tiene servicio de habitaciones?", tr: "Oda servisiniz var mı?" }
            ],
            table: {
                headers: ["Özne", "Tiene Çekimi", "Örnek"],
                rows: [
                    ["Yo", "Tengo", "Tengo una reserva"],
                    ["Tú", "Tienes", "¿Tienes la llave?"],
                    ["Él/Ella/Usted", "Tiene", "¿Tiene habitaciones?"],
                    ["El hotel", "Tiene", "El hotel tiene piscina"],
                    ["La habitación", "Tiene", "La habitación tiene balcón"]
                ]
            }
        },
        {
            id: "hay-tiene-comparison",
            title: "⚡ Pratik İpucu: Hangisini Kullanayım?",
            explanation: "Kafan karışırsa şu **basit testi** yap:\n\n✅ Cümlenin başına **\"Odanın...\"** veya **\"Otelin...\"** kelimesini koyabiliyorsan → **TIENE**\n\n✅ Cümlenin başına **\"Ortada/Burada...\"** kelimesini koyabiliyorsan → **HAY**\n\n**Altın Kural:** HAY genel mevcudiyet, TIENE sahiplik!",
            examples: [
                { es: "(Odanın) Balkonu var mı? → ¿Tiene balcón? ✅", tr: "TIENE kullan - sahiplik var" },
                { es: "(Burada) Boş oda var mı? → ¿Hay habitaciones libres? ✅", tr: "HAY kullan - genel varlık" },
                { es: "(Otelin) Havuzu var mı? → ¿El hotel tiene piscina? ✅", tr: "TIENE kullan - sahiplik var" },
                { es: "(Ortada) Wifi var mı? → ¿Hay wifi? ✅", tr: "HAY kullan - genel varlık" }
            ],
            table: {
                headers: ["Türkçe Mantık", "İspanyolca", "Hangi Fiil?"],
                rows: [
                    ["(Ortada) Boş oda var mı?", "¿Hay habitaciones libres?", "HAY ✓"],
                    ["(Odanın) Balkonu var mı?", "¿Tiene balcón?", "TIENE ✓"],
                    ["(Burada) Wifi var mı?", "¿Hay wifi?", "HAY ✓"],
                    ["(Otelin) Havuzu var mı?", "¿El hotel tiene piscina?", "TIENE ✓"],
                    ["(Siz) Boş odanız var mı?", "¿Tiene habitaciones libres?", "TIENE ✓"]
                ]
            }
        },
        {
            id: "otel-kelime-cantasi",
            title: "🏨 Otel Kelime Çantası (A2)",
            explanation: "Bu yapıları kullanmak için şu kelimeleri cebe atalım:\n\n**Oda Tipleri:**\n* **Habitación individual** = Tek kişilik oda\n* **Habitación doble** = Çift kişilik oda\n\n**Hizmetler:**\n* **Desayuno incluido** = Kahvaltı dahil\n* **Aire acondicionado** = Klima\n* **Ascensor** = Asansör\n\n**Diğer:**\n* **Llave** = Anahtar\n* **Tarjeta** = Kart",
            examples: [
                { es: "Quisiera una habitación individual", tr: "Tek kişilik oda isterdim" },
                { es: "¿El desayuno está incluido?", tr: "Kahvaltı dahil mi?" },
                { es: "¿La habitación tiene aire acondicionado?", tr: "Odada klima var mı?" },
                { es: "¿Hay ascensor?", tr: "Asansör var mı?" },
                { es: "Aquí tiene su llave", tr: "İşte anahtarınız" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe", "HAY/TIENE ile Örnek"],
                rows: [
                    ["Habitación individual", "Tek kişilik oda", "¿Hay habitaciones individuales?"],
                    ["Habitación doble", "Çift kişilik oda", "¿Tiene una habitación doble?"],
                    ["Desayuno incluido", "Kahvaltı dahil", "¿El desayuno está incluido?"],
                    ["Aire acondicionado", "Klima", "¿La habitación tiene aire acondicionado?"],
                    ["Ascensor", "Asansör", "¿Hay ascensor?"],
                    ["Llave / Tarjeta", "Anahtar / Kart", "Aquí tiene su llave"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 27: HAVALİMANINDA =====
const unit27Grammar: UnitGrammar = {
    unitId: 27, title: "Havalimanı Dili - Se + Fiil & Emir Kipi",
    rules: [
        {
            id: "se-fiil-intro",
            title: "📢 1. \"Kim Yaptı Önemli Değil\": Se + Fiil (Pasif / Edilgen Yapı)",
            explanation: "Havalimanında tabelalarda veya anonslarda \"Ben sigara içmeyi yasaklıyorum\" demezler. **\"Sigara içmek yasaktır\"** derler. İşi yapanın kim olduğu önemsizdir, önemli olan kuraldır.\n\nİspanyolcada bunu **\"SE\"** kelimesiyle yaparız.\n\n**📐 Formül:**\n$$\\text{SE} + \\text{FİİL (3. Tekil veya Çoğul Şahıs)}$$\n\nBu yapı, fiili **\"yapılır, edilir, olunur\"** anlamına çevirir.",
            examples: [
                { es: "Se prohíbe fumar", tr: "Sigara içmek yasaktır (yasaklanır)" },
                { es: "Se habla español aquí", tr: "Burada İspanyolca konuşulur" },
                { es: "Se venden billetes", tr: "Biletler satılır" }
            ]
        },
        {
            id: "se-tekil",
            title: "🅰️ Tekil Nesne ile Kullanım (Fiil: -a / -e biter)",
            explanation: "Eğer bahsedilen şey **tekilse** fiil 3. tekil şahıs (Él/Ella) gibi çekimlenir.\n\n**Formül:** Se + Fiil (3. tekil: -a veya -e)\n\n**Örnekler:**\n* Se prohíbe fumar = Sigara içmek yasaktır\n* Se necesita pasaporte = Pasaport gerekir\n* Se habla español = İspanyolca konuşulur",
            examples: [
                { es: "Se prohíbe fumar", tr: "Sigara içmek yasaktır / yasaklanır" },
                { es: "Se necesita pasaporte", tr: "Pasaport gerekir / gereklidir" },
                { es: "Se habla español", tr: "Burada İspanyolca konuşulur" },
                { es: "Se anuncia el vuelo 123", tr: "123 numaralı uçuş duyurulmaktadır" },
                { es: "Se ruega silencio", tr: "Sessizlik rica olunur" }
            ]
        },
        {
            id: "se-cogul",
            title: "🅱️ Çoğul Nesne ile Kullanım (Fiil: -an / -en biter)",
            explanation: "Eğer bahsedilen şeyler **çoğulsa** fiil çoğul (Ellos) çekimlenir.\n\n**Formül:** Se + Fiil (3. çoğul: -an veya -en)\n\n**Örnekler:**\n* Se venden billetes = Biletler satılır\n* Se cancelan los vuelos = Uçuşlar iptal edilir\n* Se aceptan tarjetas = Kartlar kabul edilir",
            examples: [
                { es: "Se venden billetes", tr: "Biletler satılır" },
                { es: "Se cancelan los vuelos", tr: "Uçuşlar iptal edilir" },
                { es: "Se aceptan tarjetas de crédito", tr: "Kredi kartları kabul edilir" },
                { es: "Se buscan empleados", tr: "Çalışan aranıyor (Çalışanlar aranır)" }
            ],
            table: {
                headers: ["Nesne Sayısı", "Fiil Eki", "Örnek"],
                rows: [
                    ["Tekil", "-a / -e", "Se necesita pasaporte"],
                    ["Çoğul", "-an / -en", "Se venden billetes"]
                ]
            }
        },
        {
            id: "imperativo-usted-intro",
            title: "👮‍♂️ 2. \"Lütfen Yapınız\": Resmi Emir Kipi (Usted)",
            explanation: "Güvenlik kontrolündesin. Görevli sana \"Çantanı aç\" demez (bu çok samimi olur). **\"Çantanızı açınız\"** der.\n\nİspanyolcada emir kipi (Imperativo) çok geniştir ama havalimanında sadece **USTED (Siz - Kibar)** formuna ihtiyacın var.",
            examples: [
                { es: "Pase, por favor", tr: "Geçiniz lütfen" },
                { es: "Abra su maleta", tr: "Bavulunuzu açınız" },
                { es: "Saque el ordenador", tr: "Bilgisayarı çıkarınız" }
            ]
        },
        {
            id: "ters-kose-teknigi",
            title: "🔄 Kural: \"Ters Köşe\" Tekniği",
            explanation: "Normalde -AR fiilleri 'a' ile, -ER/-IR fiilleri 'e' ile biterdi ya? **Emir verirken tam tersini yapıyoruz!**\n\n**-AR fiilleri → -E eki alır**\n**-ER/-IR fiilleri → -A eki alır**\n\nBu yüzden buna \"Ters Köşe\" tekniği diyoruz!",
            examples: [
                { es: "Pasar → Pase (Geçiniz)", tr: "-AR fiili → -E oldu" },
                { es: "Comer → Coma (Yiyiniz)", tr: "-ER fiili → -A oldu" },
                { es: "Abrir → Abra (Açınız)", tr: "-IR fiili → -A oldu" }
            ],
            table: {
                headers: ["Fiil Sonu", "Emir Eki (Usted)", "Örnek Fiil", "Emir Hali (Yapınız!)"],
                rows: [
                    ["-AR", "-E", "Pasar (Geçmek)", "Pase (Geçiniz)"],
                    ["-ER", "-A", "Comer (Yemek)", "Coma (Yiyiniz)"],
                    ["-IR", "-A", "Abrir (Açmak)", "Abra (Açınız)"]
                ]
            }
        },
        {
            id: "guvenlik-emirleri",
            title: "🛃 En Sık Duyacağın Emirler (Güvenlikte)",
            explanation: "Bu emirleri havalimanında sürekli duyarsın:\n\n**Pasar (Geçmek):**\n→ Pase, por favor. (Geçiniz lütfen.)\n\n**Abrir (Açmak):**\n→ Abra su maleta. (Bavulunuzu açınız.)\n\n**Sacar (Çıkarmak):**\n→ Saque el ordenador. (Bilgisayarı çıkarınız.)\n\n⚠️ **Not:** Sacar fiilinde 'c' harfi 'qu' olur → Saque",
            examples: [
                { es: "Pase, por favor", tr: "Geçiniz lütfen" },
                { es: "Abra su maleta", tr: "Bavulunuzu açınız" },
                { es: "Saque el ordenador de la bolsa", tr: "Bilgisayarı çantadan çıkarınız" },
                { es: "Espere aquí", tr: "Burada bekleyiniz" },
                { es: "Muestre su pasaporte", tr: "Pasaportunuzu gösteriniz" }
            ]
        },
        {
            id: "g-grubu-fiiller",
            title: "🧘 Düzensiz Ama Hayati Olanlar: \"G\" Grubu (Yoga Fiilleri)",
            explanation: "Bazı fiiller emir kipinde araya bir **\"G\"** harfi alır. Bunları ezberle, kesin duyarsın!\n\n**Poner (Koymak):** Ponga\n**Tener (Tutmak):** Tenga\n**Salir (Çıkmak):** Salga\n**Venir (Gelmek):** Venga\n\nBu fiillere \"Yoga Fiilleri\" veya \"G Grubu\" denir çünkü hepsi -GO/-GA formatına döner.",
            examples: [
                { es: "Ponga su bolso aquí", tr: "Çantanızı buraya koyunuz" },
                { es: "Tenga su pasaporte en la mano", tr: "Pasaportunuzu elinizde tutunuz" },
                { es: "Salga por la puerta 2", tr: "2 numaralı kapıdan çıkınız" },
                { es: "Venga aquí, por favor", tr: "Buraya geliniz lütfen" }
            ],
            table: {
                headers: ["Fiil (Mastar)", "Emir Kipi (Usted)", "Örnek Cümle"],
                rows: [
                    ["Poner (Koymak)", "Ponga", "Ponga su bolso aquí"],
                    ["Tener (Tutmak)", "Tenga", "Tenga su pasaporte en la mano"],
                    ["Salir (Çıkmak)", "Salga", "Salga por la puerta 2"],
                    ["Venir (Gelmek)", "Venga", "Venga aquí"]
                ]
            }
        },
        {
            id: "havalimani-kelime-cantasi",
            title: "✈️ Havalimanı Kelime Çantası (A2)",
            explanation: "Bu kelimeleri cebe atalım:\n\n**Temel Terimler:**\n* **La puerta de embarque** = Biniş kapısı\n* **La tarjeta de embarque** = Biniş kartı (Bilet)\n* **El control de seguridad** = Güvenlik kontrolü\n* **Equipaje de mano** = El bagajı\n\n**Uçuş Durumları:**\n* **Salidas** = Gidişler\n* **Llegadas** = Gelişler\n* **Retrasado** = Rötar yapmış / Gecikmiş",
            examples: [
                { es: "¿Dónde está la puerta de embarque?", tr: "Biniş kapısı nerede?" },
                { es: "Aquí tiene su tarjeta de embarque", tr: "İşte biniş kartınız" },
                { es: "Pase por el control de seguridad", tr: "Güvenlik kontrolünden geçiniz" },
                { es: "El vuelo está retrasado", tr: "Uçuş rötar yaptı" },
                { es: "Solo llevo equipaje de mano", tr: "Sadece el bagajı götürüyorum" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe", "Örnek Kullanım"],
                rows: [
                    ["La puerta de embarque", "Biniş kapısı", "Diríjase a la puerta 5"],
                    ["La tarjeta de embarque", "Biniş kartı", "Muestre su tarjeta de embarque"],
                    ["El control de seguridad", "Güvenlik kontrolü", "Pase por el control"],
                    ["Equipaje de mano", "El bagajı", "Solo equipaje de mano"],
                    ["Salidas / Llegadas", "Gidişler / Gelişler", "Zona de salidas"],
                    ["Retrasado", "Gecikmiş", "El vuelo está retrasado"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 28: DOKTORDA =====
const unit28Grammar: UnitGrammar = {
    unitId: 28, title: "Sağlık Dili - İleri Seviye",
    rules: [
        {
            id: "tener-health",
            title: "🤒 1. TENER ile Sağlık İfadeleri",
            explanation: "A1'de 'Me duele' yapısını öğrendin. Şimdi A2'de 'TENER' fiili ile sağlık durumlarını anlatmayı öğrenelim.\n\n**Formül:** TENER + [Sağlık Durumu]\n\nBu yapıda Türkçede '-im var' dediğimiz durumları anlatıyoruz.",
            examples: [
                { es: "Tengo fiebre", tr: "Ateşim var" },
                { es: "Tengo tos", tr: "Öksürüğüm var" },
                { es: "Tengo gripe", tr: "Gribim" },
                { es: "Tengo alergia", tr: "Alerjim var" },
                { es: "Tengo náuseas", tr: "Midem bulanıyor" },
                { es: "Tengo mareos", tr: "Başım dönüyor" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe", "Kullanım"],
                rows: [
                    ["Tengo fiebre", "Ateşim var", "Yüksek ateş"],
                    ["Tengo tos", "Öksürüğüm var", "Öksürük"],
                    ["Tengo gripe", "Gribim", "Grip olmak"],
                    ["Tengo catarro", "Nezle oldum", "Soğuk algınlığı"],
                    ["Tengo alergia", "Alerjim var", "Alerji"],
                    ["Tengo dolor de...", "...ağrım var", "Ağrı bildirme"]
                ]
            }
        },
        {
            id: "sentirse",
            title: "😷 2. SENTIRSE (Kendini Hissetmek)",
            explanation: "Genel sağlık durumunu anlatmak için dönüşlü bir fiil olan SENTIRSE kullanılır.\n\n**Çekim:** Me siento, Te sientes, Se siente, Nos sentimos, Se sienten\n\n**Dikkat:** Bu fiil 'E → IE' ses değişimi yapar.",
            examples: [
                { es: "Me siento mal", tr: "Kendimi kötü hissediyorum" },
                { es: "Me siento bien", tr: "Kendimi iyi hissediyorum" },
                { es: "Me siento mareado/a", tr: "Başım dönüyor" },
                { es: "No me siento bien", tr: "İyi değilim" },
                { es: "¿Cómo te sientes?", tr: "Nasıl hissediyorsun?" },
                { es: "Se siente enfermo", tr: "Hasta hissediyor" }
            ],
            table: {
                headers: ["Kişi", "Sentirse Çekimi", "Örnek"],
                rows: [
                    ["Yo", "Me siento", "Me siento cansado"],
                    ["Tú", "Te sientes", "¿Te sientes mejor?"],
                    ["Él/Ella", "Se siente", "Se siente enfermo"],
                    ["Nosotros", "Nos sentimos", "Nos sentimos bien"],
                    ["Ellos", "Se sienten", "Se sienten mal"]
                ]
            }
        },
        {
            id: "estar-health",
            title: "🏥 3. ESTAR ile Sağlık Durumları",
            explanation: "Geçici sağlık durumları ESTAR fiili ile anlatabileceğimizi A1'de öğrenmiştik. Şimdi doktor muayenesinde kullanılan ileri ifadeleri görelim.\n\n**Estar + Sıfat:** Geçici durumlar için",
            examples: [
                { es: "Estoy enfermo/a", tr: "Hastayım" },
                { es: "Estoy resfriado/a", tr: "Üşütmüşüm" },
                { es: "Estoy embarazada", tr: "Hamileyim" },
                { es: "Estoy mejor", tr: "Daha iyiyim" },
                { es: "Estoy peor", tr: "Daha kötüyüm" },
                { es: "Estoy débil", tr: "Halsizim" }
            ]
        },
        {
            id: "desde-hace",
            title: "⏰ 4. Süre Bildirme: Desde / Hace",
            explanation: "Doktor şikayetlerin ne zamandır devam ettiğini soracaktır. Bunu anlatmak için:\n\n**DESDE** = ...'den beri (başlangıç noktası)\n**HACE** = ... zamandır (süre)",
            examples: [
                { es: "Tengo tos desde ayer", tr: "Dünden beri öksürüğüm var" },
                { es: "Tengo fiebre desde anoche", tr: "Dün geceden beri ateşim var" },
                { es: "Me siento mal hace dos días", tr: "İki gündür kendimi kötü hissediyorum" },
                { es: "Hace una semana que no duermo bien", tr: "Bir haftadır iyi uyuyamıyorum" }
            ],
            table: {
                headers: ["Yapı", "Kullanım", "Örnek"],
                rows: [
                    ["Desde + zaman", "Başlangıç noktası", "Desde ayer (Dünden beri)"],
                    ["Desde + tarih", "Belirli tarih", "Desde el lunes (Pazartesiden beri)"],
                    ["Hace + süre", "Süre bildirme", "Hace dos días (İki gündür)"],
                    ["Hace + süre + que", "Vurgulu süre", "Hace una semana que... (Bir haftadır...)"]
                ]
            }
        },
        {
            id: "doctor-dialogue",
            title: "👨‍⚕️ 5. Doktor Diyaloğu Kalıpları",
            explanation: "Muayene sırasında sık kullanılan ifadeler:\n\n**Doktor:**\n* ¿Qué le pasa? = Ne oldu?\n* ¿Qué síntomas tiene? = Şikayetleriniz neler?\n* ¿Desde cuándo? = Ne zamandan beri?\n* Abra la boca = Ağzınızı açın\n* Respire hondo = Derin nefes alın\n\n**Hasta:**\n* Me encuentro mal = İyi değilim\n* Me siento fatal = Berbat hissediyorum\n* Creo que tengo... = Sanırım ...var",
            examples: [
                { es: "¿Qué le pasa?", tr: "Ne oldu? / Şikayetiniz ne?" },
                { es: "¿Desde cuándo tiene estos síntomas?", tr: "Bu şikayetler ne zamandan beri var?" },
                { es: "Abra la boca y diga aaa", tr: "Ağzınızı açın ve aaa deyin" },
                { es: "Le voy a recetar un antibiótico", tr: "Size bir antibiyotik yazacağım" },
                { es: "Tiene que descansar", tr: "Dinlenmeniz gerekiyor" },
                { es: "Vuelva en una semana", tr: "Bir hafta sonra tekrar gelin" }
            ]
        }
    ]
};

// ===== ÜNİTE 29: ECZANEDE =====
const unit29Grammar: UnitGrammar = {
    unitId: 29, title: "Eczane Dili",
    rules: [
        {
            id: "necesitar",
            title: "1. İhtiyaç Bildirmek: NECESITAR (İhtiyaç Duymak) 🆘",
            explanation: "Eczacıya ne aradığını veya ne hissettiğini anlatmanın en net yoludur. Düzenli bir -AR fiilidir.\n\n**Çekim:** Necesito, Necesitas, Necesita...\n\nBu fiili iki şekilde kullanabilirsin:\n\n**A) Necesitar + İsim (Bir şeye ihtiyacım var)**\nİlaç veya malzeme isterken kullanılır.\n\n**B) Necesitar + Fiil (Bir şey yapmaya ihtiyacım var)**\nVücudunun ne istediğini anlatırken kullanılır. Fiil mastar (çekimsiz) halde kalır.",
            examples: [
                { es: "Necesito aspirina", tr: "Aspirine ihtiyacım var (İsimle kullanım)" },
                { es: "Necesito una tirita", tr: "Bir yara bandına ihtiyacım var" },
                { es: "Necesito algo para el dolor de cabeza", tr: "Baş ağrısı için bir şeye ihtiyacım var" },
                { es: "Necesito descansar", tr: "Dinlenmeye ihtiyacım var (Fiille kullanım)" },
                { es: "Necesito hablar con el farmacéutico", tr: "Eczacıyla konuşmaya ihtiyacım var" }
            ]
        },
        {
            id: "deber",
            title: "2. Doktorun Emri / Tavsiye: DEBER + Mastar ☝️",
            explanation: "Eczacı sana ilacı nasıl kullanacağını anlatırken veya sen bir zorunluluğundan bahsederken **DEBER** (Meli/Malı) fiilini kullanırsın. İngilizcedeki 'Must' veya 'Should' gibidir.\n\n**Formül:** Deber (Çekimli) + FİİL (Yalın Hal)\n\n**Kullanım Senaryoları:**\n* **Eczacı (Tavsiye/Emir):** Bunu yapmalısınız.\n* **Sen (Zorunluluk):** Bunu yapmalıyım.",
            table: {
                headers: ["Kişi", "Deber Çekimi", "Örnek"],
                rows: [
                    ["Yo", "Debo", "Debo tomar medicina (İlaç almalıyım)"],
                    ["Tú", "Debes", "Debes descansar (Dinlenmelisin)"],
                    ["Él/Ella/Usted", "Debe", "Usted debe beber agua (Su içmelisiniz)"],
                    ["Nosotros", "Debemos", "Debemos cuidarnos (Dikkat etmeliyiz)"],
                    ["Ellos", "Deben", "Deben esperar (Beklemeliler)"]
                ]
            },
            examples: [
                { es: "Usted debe tomar esta pastilla cada 8 horas", tr: "Bu hapı her 8 saatte bir almalısınız" },
                { es: "No debes beber alcohol con este medicamento", tr: "Bu ilaçla alkol içmemelisin" },
                { es: "Debo tomar antibióticos", tr: "Antibiyotik almalıyım" }
            ]
        },
        {
            id: "poder-pharmacy",
            title: "3. İzin ve Olabilirlik: PODER (Ebilmek) ❓",
            explanation: "Bu, 'O-ue' dönüşümü yapan düzensiz bir fiildir (Puedo, Puedes, Puede...).\n\n**A) İzin İstemek (Ben yapabilir miyim?)**\nEczanede bir şey yapmak için izin isterken.\n\n**B) Olabilirlik / Yetenek (O ilaç bunu yapar mı?)**\nİlacın yan etkilerini veya birinin yardımını sorarken.",
            examples: [
                { es: "¿Puedo comprar esto sin receta?", tr: "Bunu reçetesiz alabilir miyim? (İzin)" },
                { es: "¿Puedo pagar con tarjeta?", tr: "Kartla ödeyebilir miyim? (İzin)" },
                { es: "¿Esta medicina puede causar sueño?", tr: "Bu ilaç uyku yapar mı? (Olabilirlik)" },
                { es: "¿Me puede ayudar?", tr: "Bana yardım edebilir misiniz? (Yetenek)" }
            ]
        },
        {
            id: "pharmacy-vocabulary",
            title: "💊 Eczane Kelime Çantası (A2 - Acil Durum Kiti)",
            explanation: "Bu gramerleri kullanmak için şu kelimelere ihtiyacın olacak:",
            table: {
                headers: ["İspanyolca", "Türkçe", "Örnek"],
                rows: [
                    ["La receta", "Reçete", "¿Necesito receta?"],
                    ["El jarabe", "Şurup", "Jarabe para la tos"],
                    ["Las pastillas", "Haplar", "Tomar pastillas"],
                    ["El dolor de...", "... ağrısı", "Dolor de cabeza (Baş ağrısı)"],
                    ["Tengo fiebre", "Ateşim var", "39 grados de fiebre"],
                    ["La gripe", "Grip", "Tengo gripe"],
                    ["Dos veces al día", "Günde iki kez", "Tomar dos veces al día"]
                ]
            },
            examples: []
        }
    ]
};

// ===== ÜNİTE 30: MESLEKLER 2 =====
// ===== ÜNİTE 30: MESLEKLER 2 =====
const unit30Grammar: UnitGrammar = {
    unitId: 30, title: "İleri Meslekler",
    rules: [
        {
            id: "asking-profession",
            title: "1. Soruyu Sormak: '¿A qué te dedicas?'",
            explanation: "Bu cümle kelimesi kelimesine 'Kendini neye adıyorsun?' demektir. Ama biz bunu 'Ne iş yapıyorsun / Neyle meşgulsün?' olarak çeviririz.\n\n**A) Samimi Sorular (Sen - Tú)**\n* **¿A qué te dedicas?** (En doğal ve yaygın olanı)\n* **¿En qué trabajas?** (Neyde/Nerede çalışıyorsun?)\n* **¿Qué haces?** (Ne yapıyorsun? - Geneldir)\n\n**B) Resmi Sorular (Siz - Usted)**\n* **¿A qué se dedica (usted)?** (Ne iş yaparsınız?)\n* **¿En qué trabaja (usted)?**",
            examples: [
                { es: "¿A qué te dedicas?", tr: "Ne iş yapıyorsun?" },
                { es: "¿A qué se dedica usted?", tr: "Ne iş yaparsınız? (Resmi)" }
            ]
        },
        {
            id: "ser-profession",
            title: "2. Cevap Vermek: Altın Kural (SER + Meslek) ⚠️",
            explanation: "İşte en çok yapılan hata! İspanyolcada meslek söylerken **UN / UNA KULLANILMAZ!**\n\n**Formül:** SOY + [MESLEK]\n\n❌ **Yanlış:** Soy un estudiante.\n✅ **Doğru:** Soy estudiante. (Öğrenciyim.)\n\n❌ **Yanlış:** Soy una ingeniera.\n✅ **Doğru:** Soy ingeniera. (Mühendisim.)\n\n**İstisna:** Eğer mesleğin yanına bir **sıfat** eklersen, o zaman 'un/una' geri gelir.\n* Soy **un** buen médico. (Ben iyi bir doktorum.)",
            examples: [
                { es: "Soy estudiante", tr: "Öğrenciyim" },
                { es: "Soy profesor de español", tr: "İspanyolca öğretmeniyim" },
                { es: "Soy un buen ingeniero", tr: "İyi bir mühendisim (Sıfat var, 'un' geldi)" }
            ]
        },
        {
            id: "working-details",
            title: "3. Detay Vermek: 'Nerede Çalışıyorsun?'",
            explanation: "Sadece mesleği söyleyip susmak olmaz. Detay vermek için şu kalıpları kullan:\n\n**A) Yer Bildirme: Trabajar EN...**\n* Trabajo **en** una oficina/un hospital/una escuela.\n\n**B) Sektör Bildirme: Trabajar EN...**\n* Trabajo **en** ventas/turismo/el sector tecnológico.\n\n**C) Geçici İşler: Estar DE...**\nEğer mesleğin değilse ama geçici olarak yapıyorsan:\n* **Estoy de** camarero este verano. (Bu yaz garsonluk yapıyorum)",
            examples: [
                { es: "Trabajo en un hospital", tr: "Bir hastanede çalışıyorum" },
                { es: "Trabajo en el sector turístico", tr: "Turizm sektöründe çalışıyorum" },
                { es: "Estoy de camarero", tr: "Garsonluk yapıyorum (Geçici)" }
            ]
        },
        {
            id: "business-vocabulary",
            title: "4. İş Dünyası Kelime Çantası 💼",
            explanation: "Senin ilgi alanlarına ve genel kullanıma uygun meslekler:",
            table: {
                headers: ["İspanyolca", "Türkçe", "Not"],
                rows: [
                    ["Estudiante", "Öğrenci", "Hem kız hem erkek"],
                    ["Desarrollador de videojuegos", "Oyun geliştiricisi", "Game Dev"],
                    ["Ingeniero", "Mühendis", "Mühendis"],
                    ["Estadístico", "İstatistikçi", "Veri ile ilgili"],
                    ["Médico / Enfermero", "Doktor / Hemşire", "Sağlık"],
                    ["Profesor / Maestro", "Öğretmen", "Eğitim"],
                    ["Abogado", "Avukat", "Hukuk"],
                    ["Camarero", "Garson", "Hizmet"],
                    ["Jubilado", "Emekli", "Meslek değil statü"]
                ]
            },
            examples: []
        }
    ]
};

// ===== ÜNİTE 31: İŞ GÖRÜŞMESİ (MAPPING: UNIT 41) =====
const unit31Grammar: UnitGrammar = {
    unitId: 31, title: "Mülakat Dili ve Geçmiş Tecrübeler",
    rules: [
        {
            id: "preterito-perfecto-formula",
            title: "1. Altın Formül: HABER + PARTICIPIO 📐",
            explanation: "Bu zamanı oluşturmak için iki parçaya ihtiyacımız var: **Haber** (Yardımcı Fiil) + **Participio** (Ortaç).\n\n**A) Haber Fiilinin Çekimi (Şimdiki Zaman)**\nBunu ezberlemelisin, her cümlede olacak!",
            table: {
                headers: ["Kişi", "Haber Çekimi", "Örnek"],
                rows: [
                    ["Yo", "He", "He trabajado"],
                    ["Tú", "Has", "Has comido"],
                    ["Él/Ella", "Ha", "Ha vivido"],
                    ["Nosotros", "Hemos", "Hemos hablado"],
                    ["Vosotros", "Habéis", "Habéis ido"],
                    ["Ellos", "Han", "Han estudiado"]
                ]
            },
            examples: []
        },
        {
            id: "participio-formation",
            title: "B) Fiilin Ucu (Participio) Nasıl Yapılır?",
            explanation: "Fiilin sonundaki eke bakıyoruz ve değiştiriyoruz:\n\n* **-AR ile bitenler → -ADO**\n  * Trabajar → Trabajado\n  * Estudiar → Estudiado\n\n* **-ER / -IR ile bitenler → -IDO**\n  * Aprender → Aprendido\n  * Vivir → Vivido",
            examples: [
                { es: "He trabajado mucho", tr: "Çok çalıştım" },
                { es: "Hemos aprendido español", tr: "İspanyolca öğrendik" }
            ]
        },
        {
            id: "interview-usage",
            title: "2. Mülakatta Nasıl Kullanırız? (Örnek Cümleler) 💬",
            explanation: "Mülakatta 'tecrübelerinden bahset' dediklerinde 'Dün çalıştım' (Indefinido) denmez. 'Çalışma tecrübem var' (Perfecto) denir.",
            examples: [
                { es: "He trabajado en muchas empresas", tr: "Birçok şirkette çalıştım (Tecrübem var)" },
                { es: "He trabajado como gerente", tr: "Müdür olarak çalıştım" },
                { es: "He estudiado en la universidad de Madrid", tr: "Madrid üniversitesinde okudum" },
                { es: "He aprendido inglés y español", tr: "İngilizce ve İspanyolca öğrendim" },
                { es: "Este año he viajado mucho", tr: "Bu yıl çok seyahat ettim (Zaman zarfı ile)" },
                { es: "Nunca he llegado tarde", tr: "Asla geç kalmadım" }
            ]
        },
        {
            id: "irregular-participles",
            title: "3. Dikkat! Düzensizler (CV Bozanlar) ⚠️",
            explanation: "Bazı fiiller kurala uymaz (-ido/-ado almaz). Bunları ezberlemek zorundasın:",
            table: {
                headers: ["Fiil", "Düzensiz Participio", "Örnek Cümle"],
                rows: [
                    ["Hacer (Yapmak)", "Hecho", "He hecho muchos proyectos (Birçok proje yaptım)"],
                    ["Escribir (Yazmak)", "Escrito", "He escrito tres informes (Üç rapor yazdım)"],
                    ["Ver (Görmek)", "Visto", "¿Has visto mi correo? (Mailimi gördün mü?)"],
                    ["Resolver (Çözmek)", "Resuelto", "Hemos resuelto el problema (Sorunu çözdük)"],
                    ["Poner (Koymak)", "Puesto", "He puesto mi CV adjunto (CV'mi ekte sundum)"]
                ]
            },
            examples: []
        }
    ]
};

// ===== ÜNİTE 32: TELEFONDA (MAPPING: UNIT 42) =====
const unit32Grammar: UnitGrammar = {
    unitId: 32, title: "Telefon ve Nezaket Dili",
    rules: [
        {
            id: "podria-grammar",
            title: "1. Sihirli Kelime: PODRÍA (Edebilir miydim?) ☎️",
            explanation: "Telefonda jest ve mimikleri göremeyiz, bu yüzden nezaket çok önemlidir. 'Yapabilir miyim?' demek için 'Puedo' yerine **'Podría'** (Koşul Kipi) kullanılır.\n\n**Anlamı:** 'Rica etsem ... edebilir miydim?' veya '(Siz) ... yapabilir miydiniz?'\n\n**Güzelliği:** Ben (Yo) ve Siz (Usted) çekimi AYNIDIR! Tek bir kelimeyle hem izin isteyebilir hem de rica edebilirsiniz.\n\n**Formül:** ¿Podría + FİİL (Mastar) ...?",
            examples: [
                { es: "¿Podría hablar con Ana?", tr: "Ana ile konuşabilir miydim?" },
                { es: "¿Podría ayudarme?", tr: "Bana yardım edebilir miydiniz?" }
            ]
        },
        {
            id: "phone-scenarios",
            title: "2. Telefonda En Sık Kullanılan 3 Kalıp 📞",
            explanation: "Telefonda direkt emir verilmez (Quiero hablar... vs). İşte en kritik kibar senaryolar:",
            table: {
                headers: ["Senaryo", "Kibar Kalıp (Podría)", "Türkçe"],
                rows: [
                    ["Birini İstemek", "¿Podría hablar con Ana, por favor?", "Ana ile konuşabilir miydim lütfen?"],
                    ["", "¿Podría ponerse con el gerente?", "Müdürü bağlayabilir miydiniz?"],
                    ["Tekrar İstemek", "¿Podría repetir, por favor?", "Tekrar edebilir miydiniz lütfen?"],
                    ["", "¿Podría hablar más despacio?", "Daha yavaş konuşabilir miydiniz?"],
                    ["Bilgi İstemek", "¿Podría decirme la dirección?", "Bana adresi söyleyebilir miydiniz?"],
                    ["Yardım İstemek", "¿Podría ayudarme?", "Bana yardım edebilir miydiniz?"]
                ]
            },
            examples: []
        },
        {
            id: "podria-subject",
            title: "3. Özne Kim? (Ben mi, Siz mi?)",
            explanation: "Podría hem 'Ben' hem 'Siz' anlamına gelebilir. Bağlamdan anlaşılır:",
            examples: [
                { es: "¿Podría hablar con Juan?", tr: "Konuşabilir miyim? (Özne: BEN)" },
                { es: "¿Podría repetir eso?", tr: "Tekrar edebilir misiniz? (Özne: SİZ)" }
            ]
        },
        {
            id: "phone-vocabulary",
            title: "📞 Telefon Kelime Çantası (A2)",
            explanation: "Alo demeden önce bunları cebine at:",
            table: {
                headers: ["İspanyolca", "Anlamı", "Not"],
                rows: [
                    ["¿Dígame?", "Efendim? / Söyleyin?", "Telefonu açarken"],
                    ["¿De parte de quién?", "Kim arıyor?", "Kimin tarafından?"],
                    ["Dejar un recado", "Mesaj bırakmak", "Not bırakmak"],
                    ["Está comunicando", "Hat meşgul", "Görüşüyor"],
                    ["Se ha equivocado", "Yanlış numara", "Hata yaptınız"]
                ]
            },
            examples: []
        }
    ]
};

// ===== ÜNİTE 33: E-POSTA YAZMA (MAPPING: UNIT 43) =====
const unit33Grammar: UnitGrammar = {
    unitId: 33, title: "Resmi Yazışma Dili",
    rules: [
        {
            id: "email-greeting",
            title: "1. Resmi Giriş (Selamlama) 🎩",
            explanation: "Arkadaşına 'Hola' diyebilirsin ama resmiyette 'Sayın' demen gerekir:\n\n* **Estimado Sr. [Soyad]:** Sayın Bay ...\n* **Estimada Sra. [Soyad]:** Sayın Bayan ...\n* **A quien corresponda:** İlgili makama (Kime yazdığını bilmiyorsan, örn: Müşteri hizmetleri)",
            examples: [
                { es: "Estimado Sr. Yılmaz", tr: "Sayın Bay Yılmaz" },
                { es: "A quien corresponda", tr: "İlgili makama" }
            ]
        },
        {
            id: "email-body",
            title: "2. 'Neden Yazıyorum?' (Gelişme) 📨",
            explanation: "Konuya direkt ve şık girmek için:\n\n**A) Amacı Belirtmek:**\n* **Le escribo para...** (Size ... için yazıyorum)\n  * Le escribo para pedir información.\n  * Le escribo para solicitar el puesto.\n\n**B) Dosya Göndermek:**\n* **Adjunto...** (Ekliyorum / Ekte sunuyorum)\n  * Adjunto mi CV.",
            examples: [
                { es: "Le escribo para pedir información", tr: "Size bilgi istemek için yazıyorum" },
                { es: "Adjunto el documento necesario", tr: "Gerekli belgeyi ekliyorum" }
            ]
        },
        {
            id: "email-closing",
            title: "3. Kibar Kapanış (Veda) 🤝",
            explanation: "Mailin sonu çok önemlidir:\n\n**A) Standart Veda:**\n* **Atentamente,** (Saygılarımla - En garantisi)\n* **Saludos cordiales,** (İçten selamlar)\n\n**B) Cevap Beklerken:**\n* **Quedo a la espera de su respuesta.** (Cevabınızı beklemekteyim)",
            examples: [
                { es: "Atentamente,", tr: "Saygılarımla," },
                { es: "Quedo a la espera de su respuesta", tr: "Cevabınızı bekliyorum" }
            ]
        },
        {
            id: "usted-rule",
            title: "4. USTED Kuralı ve Kelime Çantası ⚠️",
            explanation: "Resmi yazışmada 'Sen' (Tú) yoktur, **'Siz' (Usted)** vardır!\n\n* Senin mailin -> **Su** correo\n* Sana gönderiyorum -> **Le** envío\n* Biliyor musun? -> **¿Sabe?**\n\n**E-posta Kelimeleri:**\n* **El asunto:** Konu\n* **El archivo adjunto:** Ekli dosya\n* **La duda:** Tereddüt / Soru (Tengo una duda)",
            examples: [
                { es: "Le envío mi CV", tr: "Size CV'mi gönderiyorum" },
                { es: "Tengo una duda sobre el precio", tr: "Fiyatla ilgili bir sorum var" },
                { es: "En el archivo adjunto...", tr: "Ekli dosyada..." }
            ]
        }
    ]
};

// ===== ÜNİTE 34: FİKİR BEYAN ETME (MAPPING: UNIT 44) =====
const unit34Grammar: UnitGrammar = {
    unitId: 34, title: "Fikirler ve Düşünceler",
    rules: [
        {
            id: "asking-opinion",
            title: "1. Fikir Sormak ❓",
            explanation: "Karşımızdakinin ne düşündüğünü öğrenmek için:\n\n* **¿Qué piensas?** = Ne düşünüyorsun?\n* **¿Qué te parece?** = Sence nasıl? / Sana nasıl geliyor?\n* **¿Cuál es tu opinión?** = Senin fikrin nedir?",
            examples: [
                { es: "¿Qué piensas sobre la película?", tr: "Film hakkında ne düşünüyorsun?" },
                { es: "¿Qué te parece este restaurante?", tr: "Bu restoran sence nasıl?" }
            ]
        },
        {
            id: "giving-opinion",
            title: "2. Fikir Söylemek (Bence...) 🗣️",
            explanation: "Kendi düşüncemizi ifade etmek için:\n\n* **Creo que...** = Sanırım / Bence... (En yaygın)\n* **Pienso que...** = Düşünüyorum ki...\n* **Me parece que...** = Bana öyle geliyor ki...\n* **Para mí...** = Benim için...",
            examples: [
                { es: "Creo que es una buena idea", tr: "Bence bu iyi bir fikir" },
                { es: "Pienso que es importante estudiar", tr: "Ders çalışmanın önemli olduğunu düşünüyorum" },
                { es: "Me parece que es caro", tr: "Bana pahalı gibi geliyor" }
            ]
        },
        {
            id: "agreeing-disagreeing",
            title: "3. Katılma ve Katılmama (Haklısın!) 🤝",
            explanation: "Bir fikre katılıp katılmadığımızı belirtmek için:\n\n**✅ Katılma:**\n* **Estoy de acuerdo.** = Katılıyorum.\n* **Tienes razón.** = Haklısın.\n* **También lo creo.** = Ben de öyle sanıyorum.\n\n**❌ Katılmama:**\n* **No estoy de acuerdo.** = Katılmıyorum.\n* **No tienes razón.** = Haksızsın.\n* **Creo que no.** = Sanmıyorum.",
            examples: [
                { es: "Estoy de acuerdo contigo", tr: "Sana katılıyorum" },
                { es: "Lo siento, pero no estoy de acuerdo", tr: "Üzgünüm ama katılmıyorum" },
                { es: "Sí, tienes razón", tr: "Evet, haklısın" }
            ]
        }
    ]
};

// ===== ÜNİTE 35: KARAKTER ÖZELLİKLERİ (MAPPING: UNIT 45) =====
const unit35Grammar: UnitGrammar = {
    unitId: 35, title: "Kişilik ve Karakter Analizi",
    rules: [
        {
            id: "opposites",
            title: "1. Zıtlıklarla Karakterler (İyi-Kötü) ☯️",
            explanation: "Sadece 'İyi/Kötü' demek yetmez. A2 seviyesinde insanları detaylı tanımlamalıyız:",
            table: {
                headers: ["Pozitif (+)", "Negatif (-)", "Anlamları"],
                rows: [
                    ["Generoso (Cömert)", "Tacaño (Cimri)", "Eli açık / Pinti"],
                    ["Valiente (Cesur)", "Cobarde (Korkak)", "Yürekli / Ödlek"],
                    ["Trabajador (Çalışkan)", "Vago (Tembel)", "İşkolik / Üşengeç"],
                    ["Hablador (Konuşkan)", "Callado (Sessiz)", "Çenesi düşük / Suskun"],
                    ["Educado (Kibar)", "Maleducado (Kaba)", "Terbiyeli / Terbiyesiz"],
                    ["Optimista (İyimser)", "Pesimista (Kötümser)", "Pozitif / Negatif"]
                ]
            },
            examples: [
                { es: "Mi tío es muy generoso", tr: "Amcam çok cömerttir" },
                { es: "No seas tacaño", tr: "Cimri olma" }
            ]
        },
        {
            id: "parecer",
            title: "2. Parecer: Görünüş Aldatabilir 👀",
            explanation: "Birinin dışarıdan nasıl göründüğünü söylemek için **'Parecer'** fiili kullanılır. (Düzenli -ER fiili)\n\n**Kalıp:** Parece + [Sıfat]\n\n* Parece serio pero es divertido. (Ciddi görünüyor ama eğlenceli.)",
            examples: [
                { es: "Parece tímido", tr: "Utangaç görünüyor" },
                { es: "Pareces cansado", tr: "Yorgun görünüyorsun" },
                { es: "Ellos parecen enfadados", tr: "Kızgın görünüyorlar" }
            ]
        },
        {
            id: "caer-bien-mal",
            title: "3. 'Caer Bien / Mal' (Kanı Isınmak) ❤️‍🔥",
            explanation: "Birini sevip sevmediğimizi (arkadaşça) söylemek için 'Amar' (Aşk) kullanılmaz! Bu özel yapı kullanılır. Tıpkı GUSTAR gibi çalışır.\n\n* **Me cae bien:** Onu sevdim / Kanım ısındı / Kafa dengi.\n* **Me cae mal:** Ondan hoşlanmadım / Gıcık oldum.\n\n**Formül:** (A mí) Me cae bien/mal + [Kişi]",
            examples: [
                { es: "Me cae bien Juan", tr: "Juan'ı sevdim (İyi çocuk)" },
                { es: "Me cae mal mi jefe", tr: "Patronumdan haz etmiyorum" },
                { es: "¿Te cae bien Marta?", tr: "Marta'yı sevdin mi?" }
            ]
        }
    ]
};


// ===== ÜNİTE 46: GELECEK PLANLARI (IR A + MASTAR) =====
const unit46Grammar: UnitGrammar = {
    unitId: 46, title: "Gelecek Planları - Ir a + Mastar",
    rules: [
        {
            id: "ir-a-intro",
            title: "🔮 Gelecek Planları (Voy a...)",
            explanation: "İspanyolca'da 'Yapacağım, Edeceğim' demenin en kolay ve en yaygın yolu budur. İngilizce'deki 'Going to' yapısıdır.\n\nFormül çok basit:\n**IR (Çekimli) + A + Fiil (Mastar)**",
            examples: [
                { es: "Voy a comer", tr: "Yemek yiyeceğim" },
                { es: "Voy a dormir", tr: "Uyuyacağım" },
                { es: "Voy a trabajar", tr: "Çalışacağım" }
            ]
        },
        {
            id: "ir-conjugation-review",
            title: "🔄 IR Fiilini Hatırla",
            explanation: "Bu yapıyı kurmak için IR fiilinin çekimini su gibi bilmelisin:",
            table: {
                headers: ["Kişi", "IR Çekimi", "+ A + Eylem", "Anlamı"],
                rows: [
                    ["Yo", "Voy", "Voy a estudiar", "Ders çalışacağım"],
                    ["Tú", "Vas", "Vas a viajar", "Seyahat edeceksin"],
                    ["Él/Ella", "Va", "Va a comprar", "Satın alacak"],
                    ["Nosotros", "Vamos", "Vamos a comer", "Yemek yiyeceğiz"],
                    ["Vosotros", "Vais", "Vais a salir", "Çıkacaksınız"],
                    ["Ellos", "Van", "Van a bailar", "Dans edecekler"]
                ]
            },
            examples: []
        },
        {
            id: "time-markers-future",
            title: "📅 Gelecek Zaman Zarfları",
            explanation: "Gelecekten bahsederken şu kelimeleri cümlenin başına veya sonuna ekleyebilirsin:",
            examples: [
                { es: "Mañana voy a trabajar", tr: "Yarın çalışacağım" },
                { es: "La semana que viene vamos a ir a España", tr: "Gelecek hafta İspanya'ya gideceğiz" },
                { es: "El año que viene voy a graduarme", tr: "Gelecek yıl mezun olacağım" },
                { es: "Luego te voy a llamar", tr: "Sonra seni arayacağım" }
            ]
        }
    ]
};



// ===== ÜNİTE 47: MÜZİK VE SANAT - EMİR KİPİ (IMPERATIVO TÚ) =====
const unit47Grammar: UnitGrammar = {
    unitId: 47, title: "Müzik ve Sanat - Emir Kipi (Tú)",
    rules: [
        {
            id: "imperative-tu-regular",
            title: "👉 1. Düzenli Emirler (Tú) - En Kolay Kural!",
            explanation: "Burada gramer kitaplarını çöpe atabilirsin. Kural şu kadar basit:\n\n**Birine 'Sen' diye hitap ederek emir vereceksen, fiilin 'O' (Él/Ella) halini kullan.**\n\nEvet, geniş zamandaki 3. tekil şahıs neyse, emir kipi de odur!",
            examples: [
                { es: "¡Habla!", tr: "Konuş!" },
                { es: "¡Come!", tr: "Ye!" },
                { es: "¡Escribe!", tr: "Yaz!" },
                { es: "¡Mira!", tr: "Bak!" },
                { es: "¡Escucha!", tr: "Dinle!" }
            ],
            table: {
                headers: ["Fiil (Mastar)", "Geniş Zaman (O yapar)", "EMİR (Sen Yap!)", "Anlamı"],
                rows: [
                    ["Hablar", "Habla", "¡Habla!", "Konuş!"],
                    ["Comer", "Come", "¡Come!", "Ye!"],
                    ["Escribir", "Escribe", "¡Escribe!", "Yaz!"],
                    ["Mirar", "Mira", "¡Mira!", "Bak!"],
                    ["Escuchar", "Escucha", "¡Escucha!", "Dinle!"],
                    ["Correr", "Corre", "¡Corre!", "Koş!"],
                    ["Crear", "Crea", "¡Crea un nivel!", "Yarat! (Oyun geliştirici için)"],
                    ["Usar", "Usa", "¡Usa este código!", "Kullan!"]
                ]
            }
        },
        {
            id: "vin-diesel-rule",
            title: "🔥 2. Vin Diesel Kuralı (Düzensizler)",
            explanation: "İspanyolcada sadece **8 tane fiil** bu kurala uymaz ve kısalıp sertleşir. Bunları akılda tutmak için meşhur bir tekerleme vardır:\n\n**\"Ven Di Sal Haz Ten Ve Pon Sé\"**\n(Okunuşu 'Vin Diesel' ismine benzetildiği için bu adla anılır)",
            examples: [
                { es: "¡Ven aquí!", tr: "Buraya gel!" },
                { es: "¡Di la verdad!", tr: "Gerçeği söyle!" },
                { es: "¡Sal de la casa!", tr: "Evden çık!" },
                { es: "¡Haz tu tarea!", tr: "Ödevini yap!" },
                { es: "¡Ten cuidado!", tr: "Dikkatli ol!" },
                { es: "¡Ve a la escuela!", tr: "Okula git!" },
                { es: "¡Pon la mesa!", tr: "Masayı kur!" },
                { es: "¡Sé feliz!", tr: "Mutlu ol!" }
            ],
            table: {
                headers: ["Kısa Kod (Emir)", "Hangi Fiil?", "Anlamı", "Örnek Cümle"],
                rows: [
                    ["Ven", "Venir", "Gel", "Ven aquí"],
                    ["Di", "Decir", "Söyle", "Di la verdad"],
                    ["Sal", "Salir", "Çık", "Sal de la casa"],
                    ["Haz", "Hacer", "Yap", "Haz tu tarea"],
                    ["Ten", "Tener", "Sahip ol/Tut", "Ten cuidado"],
                    ["Ve", "Ir", "Git", "Ve a la escuela"],
                    ["Pon", "Poner", "Koy/Aç", "Pon la mesa"],
                    ["Sé", "Ser", "Ol", "Sé feliz"]
                ]
            }
        },
        {
            id: "warning-negative",
            title: "⚠️ Kritik Uyarı: Sadece OLUMLU Emirler",
            explanation: "Bu öğrendiklerimiz sadece **'Yap!'** demek içindir.\n\n**'Yapma!'** demek (Olumsuz Emir) İspanyolcada tamamen farklı ve ileri bir konudur (Subjuntivo gerektirir).\n\n✅ **Yap:** ¡Come!\n❌ **Yapma:** ¡No come! (YANLIŞ! Doğrusu: No comas)\n\nŞimdilik sadece pozitife odaklanıyoruz.",
            examples: [
                { es: "¡Come! ✅", tr: "Ye! (Doğru)" },
                { es: "¡No comas! ✅", tr: "Yeme! (Subjuntivo ile doğru)" },
                { es: "¡No come! ❌", tr: "YANLIŞ KULLANIM!" }
            ]
        }
    ]
};



// ===== ÜNİTE 48: SİNEMA VE DİZİ - HAVA DURUMU TAHMİNLERİ =====
const unit48Grammar: UnitGrammar = {
    unitId: 48, title: "Sinema ve Dizi - Hava Tahmini Planları",
    rules: [
        {
            id: "va-a-weather",
            title: "🌤️ 1. Temel Kalıp: 'Va a...' (Olacak)",
            explanation: "Hava durumundan bahsederken özne genellikle 'hava' olduğu için (3. Tekil Şahıs), fiilimizi hep **'Va'** (O gidiyor/olacak) şeklinde çekeriz.\n\n**İpucu:** Dikkat ettiysen sıcaklık ve güneş için **'Hacer'** (yapmak), bulutlu gibi durumlar için **'Estar'** (olmak) fiilini yardımcı olarak kullandık. Ama **Llover** (yağmur) ve **Nevar** (kar) tek başına fiildir.",
            examples: [
                { es: "Va a llover", tr: "Yağmur yağacak (Ba a yover)" },
                { es: "Va a nevar", tr: "Kar yağacak (Ba a nebar)" },
                { es: "Va a hacer sol", tr: "Hava güneşli olacak" },
                { es: "Va a hacer frío", tr: "Hava soğuk olacak" },
                { es: "Va a hacer calor", tr: "Hava sıcak olacak" }
            ],
            table: {
                headers: ["İspanyolca", "Okunuş İpucu", "Türkçe Anlamı"],
                rows: [
                    ["Va a llover", "(Ba a yover)", "Yağmur yağacak"],
                    ["Va a nevar", "(Ba a nebar)", "Kar yağacak"],
                    ["Va a hacer sol", "(Ba a aser sol)", "Hava güneşli olacak"],
                    ["Va a hacer frío", "(Ba a aser frio)", "Hava soğuk olacak"],
                    ["Va a hacer calor", "(Ba a aser kalor)", "Hava sıcak olacak"],
                    ["Va a estar nublado", "(Ba a estar nublado)", "Hava bulutlu olacak"]
                ]
            }
        },
        {
            id: "weather-vacation-plan",
            title: "🏖️ 2. Hava ve Tatil Planı (Sebep-Sonuç)",
            explanation: "Bir önceki derste öğrendiğimiz **'Si' (Eğer)** cümlelerini buraya bağlayalım. Harika bir plan cümlesi böyle kurulur:\n\n**Formül:** Eğer hava şöyle olursa + Şunu yapacağız.",
            examples: [
                { es: "Si hace sol, vamos a ir a la playa", tr: "🏖️ Plaj Planı: Eğer hava güneşli olursa, plaja gideceğiz" },
                { es: "Si llueve, vamos a ver una película en casa", tr: "🎬 Ev Modu: Eğer yağmur yağarsa, evde bir film izleyeceğiz" },
                { es: "Si nieva, vamos a esquiar", tr: "⛷️ Kış Tatili: Eğer kar yağarsa, kayak yapmaya gideceğiz" },
                { es: "Si hace mal tiempo, no vamos a salir", tr: "❌ İptal Durumu: Eğer hava kötü olursa, dışarı çıkmayacağız" }
            ]
        }
    ]
};


// ===== ÜNİTE 39: TEKNOLOJİ =====
const unit39Grammar: UnitGrammar = {
    unitId: 39, title: "Teknoloji Dili - Vocabulario Tech",
    rules: [
        {
            id: "tech-verbs",
            title: "💻 1. En Kritik Teknoloji Fiilleri",
            explanation: "Bilgisayar başında yaptığın temel eylemler:",
            examples: [
                { es: "Enciende el ordenador", tr: "Bilgisayarı aç" },
                { es: "Haz clic en el enlace", tr: "Linke tıkla" },
                { es: "Guarda el proyecto", tr: "Projeyi kaydet" },
                { es: "Tengo que reiniciar el PC", tr: "PC'yi yeniden başlatmam lazım" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe", "Örnek / İpucu"],
                rows: [
                    ["Encender", "Açmak (Cihazı)", "Enciende el ordenador"],
                    ["Apagar", "Kapatmak (Cihazı)", "Apaga la pantalla"],
                    ["Hacer clic", "Tıklamak", "Haz clic en el enlace"],
                    ["Guardar", "Kaydetmek (Dosya)", "Guarda el proyecto"],
                    ["Grabar", "Kaydetmek (Video/Ses)", "⚠️ Video kaydı için bu!"],
                    ["Borrar / Eliminar", "Silmek", "Borrar el archivo"],
                    ["Copiar y Pegar", "Kopyala ve Yapıştır", "Copia y pega el código"],
                    ["Buscar", "Aramak (Google'lamak)", "Buscar en internet"],
                    ["Reiniciar", "Yeniden başlatmak", "Reiniciar el PC"]
                ]
            }
        },
        {
            id: "dev-terms",
            title: "👨‍💻 2. Yazılım ve Geliştirme",
            explanation: "Geliştiriciler (Desarrolladores) için özel kelimeler:",
            examples: [
                { es: "Me gusta programar en C++", tr: "C++ ile kodlamayı severim" },
                { es: "Desarrollar un videojuego", tr: "Bir video oyunu geliştirmek" },
                { es: "Probar el juego", tr: "Oyunu test etmek" },
                { es: "El código no funciona", tr: "Kod çalışmıyor" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe"],
                rows: [
                    ["Programar", "Kodlamak / Programlamak"],
                    ["Desarrollar", "Geliştirmek"],
                    ["Instalar / Desinstalar", "Yüklemek / Kaldırmak"],
                    ["Actualizar", "Güncellemek (Update)"],
                    ["Probar", "Test etmek / Denemek"],
                    ["Funcionar", "Çalışmak (İşlevsel olarak)"]
                ]
            }
        },
        {
            id: "hardware-terms",
            title: "🖥️ 3. Donanım ve Terimler (Nouns)",
            explanation: "Masanın üzerindeki ve ekranın içindeki her şey.\n\n**Not:** İspanya'da 'Ordenador', Latin Amerika'da 'Computadora' denir.",
            examples: [
                { es: "El ordenador / La computadora", tr: "Bilgisayar" },
                { es: "El portátil", tr: "Laptop / Dizüstü" },
                { es: "La contraseña", tr: "Şifre" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe"],
                rows: [
                    ["El ordenador / La computadora", "Bilgisayar"],
                    ["El portátil", "Laptop / Dizüstü"],
                    ["La pantalla", "Ekran"],
                    ["El teclado", "Klavye"],
                    ["El ratón", "Mouse / Fare"],
                    ["El archivo", "Dosya (File)"],
                    ["La carpeta", "Klasör (Folder)"],
                    ["El software / El hardware", "Yazılım / Donanım"],
                    ["La contraseña", "Şifre"],
                    ["La red / El internet", "Ağ / İnternet"]
                ]
            }
        },
        {
            id: "ai-section",
            title: "🤖 4. Yapay Zeka Özel Bölümü (AI)",
            explanation: "Dijital çağın en önemli kelime grubu!\n\n**Dikkat:** Kısaltması AI değil, **IA** olarak okunur: 'İ-A'",
            examples: [
                { es: "La Inteligencia Artificial (IA)", tr: "Yapay Zeka" },
                { es: "Generar una imagen", tr: "Bir resim üretmek (Generate)" },
                { es: "Gemini es una herramienta útil", tr: "Gemini faydalı bir araçtır" },
                { es: "Realidad Virtual", tr: "Sanal Gerçeklik (VR)" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe"],
                rows: [
                    ["La Inteligencia Artificial (IA)", "Yapay Zeka"],
                    ["Generar", "Üretmek (Generate)"],
                    ["La herramienta", "Araç (Tool)"],
                    ["Virtual", "Sanal"],
                    ["Realidad Virtual", "Sanal Gerçeklik"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 40: SOSYAL MEDYA =====
const unit40Grammar: UnitGrammar = {
    unitId: 45, title: "Sosyal Medya Dili - Redes Sociales",
    rules: [
        {
            id: "social-verbs",
            title: "📱 1. Sosyal Medya Fiilleri (Los Verbos)",
            explanation: "Telefon elindeyken yapacağın eylemler bunlar. Çoğu düzenli fiildir, kullanımı kolaydır.",
            examples: [
                { es: "¡Sígueme!", tr: "Beni takip et!" },
                { es: "Comparte con tus amigos", tr: "Arkadaşlarınla paylaş" },
                { es: "Voy a publicar una foto", tr: "Bir fotoğraf paylaşacağım" },
                { es: "Etiqueta a dos amigos", tr: "İki arkadaşını etiketle" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe", "Örnek / Not"],
                rows: [
                    ["Seguir", "Takip etmek", "¡Sígueme! (Beni takip et!)"],
                    ["Compartir", "Paylaşmak", "Comparte con tus amigos"],
                    ["Publicar", "Gönderi paylaşmak / Post atmak", "Voy a publicar una foto"],
                    ["Postear", "Post atmak (Argo/Yaygın)", "Publicar'ın modern hali"],
                    ["Comentar", "Yorum yapmak", "Comenta abajo (Aşağıya yorum yap)"],
                    ["Etiquetar", "Etiketlemek (Tag'lemek)", "Etiqueta a dos amigos"],
                    ["Subir", "Yüklemek (Upload)", "Subir una historia"],
                    ["Descargar", "İndirmek (Download)", "Descargar la aplicación"],
                    ["Bloquear", "Engellemek", "Bloquéalo (Onu engelle)"],
                    ["Dar like / Me gusta", "Beğenmek", "Dale like (Beğen / Like at)"]
                ]
            }
        },
        {
            id: "interface-terms",
            title: "🖥️ 2. Arayüz Terimleri (El Vocabulario)",
            explanation: "Uygulamayı kullanırken ekranında göreceğin kelimeler:",
            examples: [
                { es: "Mi perfil", tr: "Profilim" },
                { es: "Mensaje directo", tr: "Direkt mesaj (DM)" },
                { es: "Tienes una notificación", tr: "Bir bildirimin var" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe"],
                rows: [
                    ["El usuario", "Kullanıcı (Adı)"],
                    ["La contraseña", "Şifre"],
                    ["El perfil", "Profil"],
                    ["La biografía (Bio)", "Biyografi"],
                    ["El seguidor", "Takipçi"],
                    ["El enlace / El link", "Bağlantı / Link"],
                    ["La historia", "Hikaye (Story)"],
                    ["El mensaje directo (DM)", "Direkt mesaj"],
                    ["La notificación", "Bildirim"],
                    ["La cuenta", "Hesap"]
                ]
            }
        },
        {
            id: "call-to-action",
            title: "📣 3. Harekete Geçirici Cümleler (Call to Action)",
            explanation: "İçerik üreticisi olarak takipçilerine ne yapmalarını söyleyeceksin? İşte en popüler kalıplar (Genelde Emir Kipi kullanılır):",
            examples: [
                { es: "Link en la bio", tr: "Link biyografide (Çok kullanılır!)" },
                { es: "Suscríbete a mi canal", tr: "Kanalıma abone ol" },
                { es: "Deja un comentario", tr: "Bir yorum bırak" },
                { es: "Guarda este post", tr: "Bu gönderiyi kaydet" },
                { es: "Activa las notificaciones", tr: "Bildirimleri aç" },
                { es: "Dale like si te gusta", tr: "Beğendiysen like at" }
            ]
        }
    ]
};



// ===== ÜNİTE 49: KÜLTÜR VE GELENEKLER =====
const unit49Grammar: UnitGrammar = {
    unitId: 49, title: "Kültür ve Gelenek Dili",
    rules: [
        {
            id: "soler",
            title: "Alışkanlık: Soler + Fiil",
            explanation: "Geleneksel alışkanlıkları anlatmak için:\n\n**Soler + mastar fiil** = ... yapmak alışkanlığındadır\n\n* Suelo + fiil = Genellikle ... yaparım\n* Se suele + fiil = Genellikle ... yapılır",
            examples: [
                { es: "En España se suele cenar tarde", tr: "İspanya'da genellikle geç yemek yenir" },
                { es: "Solemos celebrar la Navidad en familia", tr: "Genellikle Noel'i aileyle kutlarız" }
            ]
        }
    ]
};

// ===== ÜNİTE 50: A2 FİNAL TEKRAR =====
const unit50Grammar: UnitGrammar = {
    unitId: 50, title: "A2 Genel Tekrar",
    rules: [
        {
            id: "resumen-a2",
            title: "A2 Seviyesi Özet",
            explanation: "A2 seviyesinde öğrendiğiniz ana gramer konuları:\n\n1. **Pretérito Indefinido** (Geçmiş zaman)\n2. **Ir a + infinitivo** (Yakın gelecek)\n3. **Pretérito Perfecto** (Yakın geçmiş)\n4. **Karşılaştırma** (más/menos que)\n5. **Nesne zamirleri** (lo, la, los, las)\n6. **Koşullu kibar ifadeler** (querría, podría)",
            examples: [
                { es: "Ayer fui al cine", tr: "Dün sinemaya gittim (Indefinido)" },
                { es: "Voy a viajar mañana", tr: "Yarın seyahat edeceğim (ir a)" },
                { es: "He estudiado mucho", tr: "Çok çalıştım (Perfecto)" }
            ]
        }
    ]
};

// ===== YENİ A2 GELİŞMİŞ GRAMER ÜNİTELERİ (51-57) =====

// ===== ÜNİTE 51: PRETÉRİTO IMPERFECTO =====
const unit51Grammar: UnitGrammar = {
    unitId: 51, title: "Pretérito Imperfecto - Geçmişte Alışkanlıklar",
    rules: [
        {
            id: "imperfecto-intro",
            title: "🕰️ Imperfecto Nedir?",
            explanation: "**Pretérito Imperfecto**, geçmişte **sürekli veya alışkanlık olan** eylemleri anlatmak için kullanılır.\n\nTürkçe'deki **'-ardı, -erdi, -ırdı'** eklerine karşılık gelir.\n\n**Ne zaman kullanılır?**\n* Geçmişteki alışkanlıklar (Çocukken futbol oynardım)\n* Geçmişteki durumlar/tasvirler (Hava güzeldi)\n* Kesintiye uğrayan eylemler (Yemek yerken telefon çaldı)\n\n**Indefinido vs Imperfecto Farkı:**\n* **Indefinido:** Bitmiş, tek seferlik olaylar (Dün sinemaya gittim)\n* **Imperfecto:** Sürekli, alışkanlık olan olaylar (Çocukken sinemaya giderdim)",
            examples: [
                { es: "Cuando era niño, jugaba al fútbol", tr: "Çocukken futbol oynardım" },
                { es: "Mi abuela siempre cocinaba muy bien", tr: "Büyükannem her zaman çok iyi yemek yapardı" },
                { es: "Antes vivíamos en Madrid", tr: "Önceden Madrid'de yaşardık" }
            ]
        },
        {
            id: "imperfecto-ar",
            title: "📝 -AR Fiilleri Çekimi",
            explanation: "**-AR fiilleri için Imperfecto ekleri:**\n\nKök + **-aba, -abas, -aba, -ábamos, -abais, -aban**\n\n**Örnek: HABLAR (Konuşmak)**",
            examples: [
                { es: "Yo hablaba español", tr: "İspanyolca konuşurdum" },
                { es: "Tú hablabas mucho", tr: "Çok konuşurdun" },
                { es: "Él hablaba con todos", tr: "Herkesle konuşurdu" }
            ],
            table: {
                headers: ["Kişi", "Ek", "HABLAR", "ESTUDIAR"],
                rows: [
                    ["Yo", "-aba", "hablaba", "estudiaba"],
                    ["Tú", "-abas", "hablabas", "estudiabas"],
                    ["Él/Ella", "-aba", "hablaba", "estudiaba"],
                    ["Nosotros", "-ábamos", "hablábamos", "estudiábamos"],
                    ["Vosotros", "-abais", "hablabais", "estudiabais"],
                    ["Ellos", "-aban", "hablaban", "estudiaban"]
                ]
            }
        },
        {
            id: "imperfecto-er-ir",
            title: "📝 -ER/-IR Fiilleri Çekimi",
            explanation: "**-ER ve -IR fiilleri için Imperfecto ekleri (aynıdır!):**\n\nKök + **-ía, -ías, -ía, -íamos, -íais, -ían**\n\n**Örnek: COMER (Yemek) / VIVIR (Yaşamak)**",
            examples: [
                { es: "Yo comía mucho", tr: "Çok yerdim" },
                { es: "Vivíamos en Turquía", tr: "Türkiye'de yaşardık" },
                { es: "Ellos tenían un perro", tr: "Onların bir köpeği vardı" }
            ],
            table: {
                headers: ["Kişi", "Ek", "COMER", "VIVIR"],
                rows: [
                    ["Yo", "-ía", "comía", "vivía"],
                    ["Tú", "-ías", "comías", "vivías"],
                    ["Él/Ella", "-ía", "comía", "vivía"],
                    ["Nosotros", "-íamos", "comíamos", "vivíamos"],
                    ["Vosotros", "-íais", "comíais", "vivíais"],
                    ["Ellos", "-ían", "comían", "vivían"]
                ]
            }
        },
        {
            id: "imperfecto-irregulars",
            title: "⚠️ Düzensiz Fiiller (Sadece 3 Tane!)",
            explanation: "**Imperfecto'da sadece 3 düzensiz fiil vardır!** Bunları ezberle:\n\n**1. SER (Olmak):** era, eras, era, éramos, erais, eran\n**2. IR (Gitmek):** iba, ibas, iba, íbamos, ibais, iban\n**3. VER (Görmek):** veía, veías, veía, veíamos, veíais, veían",
            examples: [
                { es: "Cuando era joven, iba al gimnasio", tr: "Gençken spor salonuna giderdim" },
                { es: "Mi padre era muy alto", tr: "Babam çok uzundu" },
                { es: "Veíamos la tele juntos", tr: "Birlikte televizyon izlerdik" }
            ],
            table: {
                headers: ["Kişi", "SER", "IR", "VER"],
                rows: [
                    ["Yo", "era", "iba", "veía"],
                    ["Tú", "eras", "ibas", "veías"],
                    ["Él/Ella", "era", "iba", "veía"],
                    ["Nosotros", "éramos", "íbamos", "veíamos"],
                    ["Ellos", "eran", "iban", "veían"]
                ]
            }
        },
        {
            id: "imperfecto-signals",
            title: "🚦 Imperfecto Sinyal Kelimeleri",
            explanation: "Bu kelimeleri görünce Imperfecto kullan:\n\n* **Siempre** = Her zaman\n* **Todos los días** = Her gün\n* **Normalmente** = Normalde\n* **De niño/a** = Çocukken\n* **Antes** = Önceden\n* **Cuando era joven** = Gençken\n* **A menudo** = Sık sık",
            examples: [
                { es: "Antes comía mucha carne, ahora soy vegetariano", tr: "Önceden çok et yerdim, şimdi vejetaryenim" },
                { es: "De niño, siempre jugaba en el parque", tr: "Çocukken her zaman parkta oynardım" }
            ]
        }
    ]
};

// ===== ÜNİTE 52: GERUNDİO (ŞİMDİKİ ZAMAN SÜREKLİ) =====
const unit52Grammar: UnitGrammar = {
    unitId: 52, title: "Gerundio - Şu An Yapıyorum (-yor)",
    rules: [
        {
            id: "gerundio-intro",
            title: "🔄 1. Gerundio Nedir?",
            explanation: "Gerundio, fiilin köküne eklenen ve eylemin **devam etmekte olduğunu** gösteren özel bir ektir.\n\n**Türkçedeki karşılığı:** '-yor' eki (Gel-iyor, Yap-ıyor)\n**İngilizcedeki karşılığı:** '-ing' eki (Com-ing, Do-ing)\n\n⚠️ **Tek Başına Kullanılmaz:** Bir fiil zamanı oluşturmak için genellikle yardımcı bir fiile (ESTAR) ihtiyaç duyar.",
            examples: [
                { es: "Estoy estudiando español ahora", tr: "Ben şu an İspanyolca çalışıyorum" },
                { es: "¿Qué estás comiendo?", tr: "Sen ne yiyorsun?" },
                { es: "Ella está leyendo un libro", tr: "O kitap okuyor (Düzensize dikkat!)" }
            ]
        },
        {
            id: "gerundio-formation",
            title: "📝 2. Gerundio Oluşturma (Kurallar)",
            explanation: "Fiilleri Gerundio haline getirmek matematiksel bir işlem gibidir. Fiil kökünü alırsın ve sonuna uygun eki yapıştırırsın.\n\n**İpucu:** Gördüğün gibi -ER ve -IR gruplarının eki aynıdır (-iendo). Sadece -AR grubu farklıdır (-ando).",
            examples: [
                { es: "Hablar → Hablando", tr: "Konuş-mak → Konuşuyor" },
                { es: "Comer → Comiendo", tr: "Ye-mek → Yiyor" },
                { es: "Vivir → Viviendo", tr: "Yaşa-mak → Yaşıyor" }
            ],
            table: {
                headers: ["Fiil Grubu", "Yapılacak İşlem", "Ek", "Örnek Fiil", "Gerundio Hali", "Anlamı"],
                rows: [
                    ["-AR ile bitenler", "-AR'ı at", "-ando", "Hablar", "Hablando", "Konuşuyor"],
                    ["-ER ile bitenler", "-ER'i at", "-iendo", "Comer", "Comiendo", "Yiyor"],
                    ["-IR ile bitenler", "-IR'ı at", "-iendo", "Vivir", "Viviendo", "Yaşıyor"]
                ]
            }
        },
        {
            id: "gerundio-irregulars",
            title: "⚠️ 3. Düzensiz Gerundio'lar",
            explanation: "İspanyolcada her şey bu kadar düz olmuyor tabii. A2 seviyesinde bilmen gereken en kritik 3 düzensiz grup şunlardır:",
            examples: [
                { es: "El niño está durmiendo", tr: "Çocuk uyuyor (O→U)" },
                { es: "Estoy leyendo un libro", tr: "Kitap okuyorum (Y kaynaştırma)" },
                { es: "¿Qué estás diciendo?", tr: "Ne söylüyorsun? (E→I)" }
            ],
            table: {
                headers: ["Değişim Türü", "Fiil", "Gerundio", "Açıklama"],
                rows: [
                    ["E → I", "Decir (Söylemek)", "Diciendo", "Kökündeki 'e' harfi 'i'ye döner"],
                    ["E → I", "Pedir (İstemek)", "Pidiendo", ""],
                    ["E → I", "Servir (Hizmet etmek)", "Sirviendo", ""],
                    ["O → U", "Dormir (Uyumak)", "Durmiendo", "Kökündeki 'o' harfi 'u'ya döner"],
                    ["O → U", "Morir (Ölmek)", "Muriendo", ""],
                    ["Y Kaynaştırma", "Leer (Okumak)", "Leyendo", "İki sesli yan yana gelmesin diye 'y' girer"],
                    ["Y Kaynaştırma", "Oír (Duymak)", "Oyendo", ""],
                    ["Tamamen Düzensiz", "Ir (Gitmek)", "Yendo", "Çok kullanılır, ezberle!"]
                ]
            }
        },
        {
            id: "gerundio-with-estar",
            title: "📐 4. ESTAR + Gerundio Formülü",
            explanation: "İşte şimdi cümleyi kuruyoruz. 'Şu an yapıyorum' demek için **ESTAR** fiilini kişiye göre çekimleriz, yanına da hazırladığımız Gerundio'yu koyarız.\n\n**Formül:** Özne + ESTAR (Çekimli) + Gerundio\n\n**Estar Çekim Hatırlatması:**\nEstoy, Estás, Está, Estamos, Estáis, Están",
            examples: [
                { es: "(Yo) Estoy estudiando español ahora", tr: "Ben şu an İspanyolca çalışıyorum" },
                { es: "¿Qué estás comiendo?", tr: "Sen ne yiyorsun?" },
                { es: "Ella está leyendo un libro", tr: "O kitap okuyor" },
                { es: "Nosotros estamos corriendo en el parque", tr: "Biz parkta koşuyoruz" }
            ],
            table: {
                headers: ["Kişi", "ESTAR Çekimi", "Örnek (Trabajar)", "Anlamı"],
                rows: [
                    ["Yo", "Estoy", "Estoy trabajando", "Ben çalışıyorum"],
                    ["Tú", "Estás", "Estás trabajando", "Sen çalışıyorsun"],
                    ["Él/Ella", "Está", "Está trabajando", "O çalışıyor"],
                    ["Nosotros", "Estamos", "Estamos trabajando", "Biz çalışıyoruz"],
                    ["Ellos", "Están", "Están trabajando", "Onlar çalışıyor"]
                ]
            }
        }
    ]
};


// ===== ÜNİTE 53: POR vs PARA =====
const unit53Grammar: UnitGrammar = {
    unitId: 53, title: "POR vs PARA - Detaylı Karşılaştırma",
    rules: [
        {
            id: "por-para-intro",
            title: "🎯 POR ve PARA Farkı",
            explanation: "Bu iki edat İspanyolca öğrenenlerin en çok karıştırdığı konudur. İkisi de Türkçe'ye 'için' olarak çevrilebilir ama mantıkları farklıdır.\n\n**PARA:** Amaç, hedef, yön (İLERİYE bakıyor)\n**POR:** Sebep, değiş tokuş, araç (GERİYE bakıyor)\n\n**Kolay Kural:**\n* PARA = Ne için? (Amaç)\n* POR = Neden? (Sebep)",
            examples: [
                { es: "Estudio para aprobar", tr: "Geçmek için çalışıyorum (Amaç)" },
                { es: "Gracias por tu ayuda", tr: "Yardımın için teşekkürler (Sebep)" }
            ]
        },
        {
            id: "para-uses",
            title: "🎯 PARA Kullanımları (Amaç/Hedef)",
            explanation: "**PARA şu durumlarda kullanılır:**\n\n**1. Amaç/Hedef:** Ne için? Hangi amaçla?\n* Estudio para aprender = Öğrenmek için çalışıyorum\n\n**2. Alıcı/Kime:** Kimin için?\n* Este regalo es para ti = Bu hediye senin için\n\n**3. Yön/Varış Noktası:** Nereye?\n* Voy para Madrid = Madrid'e doğru gidiyorum\n\n**4. Son Tarih:** Ne zamana kadar?\n* Es para mañana = Yarına kadar\n\n**5. Karşılaştırma:** ...için\n* Para ser joven, sabe mucho = Genç birine göre çok biliyor",
            examples: [
                { es: "Trabajo para ganar dinero", tr: "Para kazanmak için çalışıyorum" },
                { es: "Este libro es para María", tr: "Bu kitap María için" },
                { es: "El informe es para el lunes", tr: "Rapor Pazartesi günü için" }
            ],
            table: {
                headers: ["PARA Kullanımı", "Örnek", "Türkçe"],
                rows: [
                    ["Amaç", "Estudio para aprobar", "Geçmek için çalışıyorum"],
                    ["Alıcı", "Es para ti", "Senin için"],
                    ["Yön", "Salgo para Madrid", "Madrid'e doğru çıkıyorum"],
                    ["Son Tarih", "Para el viernes", "Cumaya kadar"],
                    ["Karşılaştırma", "Para su edad...", "Yaşına göre..."]
                ]
            }
        },
        {
            id: "por-uses",
            title: "🔄 POR Kullanımları (Sebep/Değiş Tokuş)",
            explanation: "**POR şu durumlarda kullanılır:**\n\n**1. Sebep/Neden:** Neden? Hangi sebeple?\n* Gracias por venir = Geldiğin için teşekkürler\n\n**2. Değiş Tokuş/Fiyat:** Karşılığında\n* Lo compré por 10 euros = Onu 10 euroya aldım\n\n**3. Süre:** ...boyunca\n* Estudié por dos horas = İki saat boyunca çalıştım\n\n**4. Yer (İçinden/Boyunca):**\n* Paseo por el parque = Parkta yürüyorum\n\n**5. İletişim Aracı:**\n* Te llamo por teléfono = Seni telefonla arıyorum",
            examples: [
                { es: "Te quiero por ser tú", tr: "Sen olduğun için seni seviyorum" },
                { es: "Cambio mi coche por el tuyo", tr: "Arabamı seninle değiştiriyorum" },
                { es: "El tren pasa por Madrid", tr: "Tren Madrid'den geçiyor" }
            ],
            table: {
                headers: ["POR Kullanımı", "Örnek", "Türkçe"],
                rows: [
                    ["Sebep", "Por la lluvia", "Yağmur yüzünden"],
                    ["Fiyat", "Por 50 euros", "50 euroya"],
                    ["Süre", "Por una hora", "Bir saat boyunca"],
                    ["Yer", "Por la calle", "Sokaktan"],
                    ["İletişim", "Por email", "E-posta ile"]
                ]
            }
        },
        {
            id: "por-para-summary",
            title: "📊 Özet Karşılaştırma",
            explanation: "**Hızlı Test:**\n\n✅ 'Ne için?' (Amaç) → **PARA**\n✅ 'Neden?' (Sebep) → **POR**\n✅ 'Kimin için?' (Alıcı) → **PARA**\n✅ 'Kaça?' (Fiyat) → **POR**\n✅ 'Ne zamana kadar?' → **PARA**\n✅ 'Ne kadar süre?' → **POR**",
            examples: [
                { es: "Estudio español para viajar a España", tr: "İspanya'ya seyahat etmek için İspanyolca çalışıyorum (PARA = amaç)" },
                { es: "No puedo salir por la lluvia", tr: "Yağmur yüzünden dışarı çıkamıyorum (POR = sebep)" }
            ],
            table: {
                headers: ["Soru", "Edat", "Örnek"],
                rows: [
                    ["Ne için? (Amaç)", "PARA", "Para aprender"],
                    ["Neden? (Sebep)", "POR", "Por la lluvia"],
                    ["Kimin için?", "PARA", "Para ti"],
                    ["Kaça?", "POR", "Por 10 euros"],
                    ["Ne zamana kadar?", "PARA", "Para mañana"],
                    ["Ne kadar süre?", "POR", "Por dos horas"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 54: Sİ CLAUSES (KOŞUL CÜMLELERİ) =====
const unit54Grammar: UnitGrammar = {
    unitId: 54, title: "Si Clauses - Koşul Cümleleri",
    rules: [
        {
            id: "si-vs-si-accent",
            title: "⚠️ Si vs Sí (Kritik Fark!)",
            explanation: "**Si** = Eğer (Vurgu işareti yok)\n**Sí** = Evet (Vurgu işareti var)\n\nYazarken buna çok dikkat etmelisin.",
            examples: [
                { es: "Si estudias, aprobarás", tr: "Eğer çalışırsan, geçeceksin (Koşul)" },
                { es: "Sí, quiero estudiar", tr: "Evet, çalışmak istiyorum (Olumlu cevap)" }
            ]
        },
        {
            id: "si-formula",
            title: "📐 Temel Formül: Si + Geniş Zaman (Presente)",
            explanation: "A2 seviyesinde cümlenin **'Si' (Eğer)** ile başlayan kısmı her zaman **Şimdiki/Geniş Zaman (Presente)** ile çekimlenir. Sonuç kısmı ise duruma göre değişir.\n\nİşte en sık kullanacağın 3 yapı:",
            examples: []
        },
        {
            id: "si-general-truths",
            title: "1️⃣ Genel Doğrular ve Alışkanlıklar",
            explanation: "**(Eğer bu olursa, şu olur.)**\n\nHer zaman geçerli olan durumlar için kullanılır.\n\n**Formül:** Si + Presente + Presente",
            examples: [
                { es: "Si llueve, no salgo", tr: "Eğer yağmur yağarsa, dışarı çıkmam" },
                { es: "Si tengo tiempo, leo un libro", tr: "Eğer vaktim olursa/varsa, kitap okurum" },
                { es: "Si como mucho, me duele el estómago", tr: "Çok yersem, midem ağrır" }
            ]
        },
        {
            id: "si-future-plans",
            title: "2️⃣ Gelecek Planları ve İhtimaller",
            explanation: "**(Eğer bu olursa, şunu yapacağım.)**\n\nBir koşula bağlı gelecek planlarını anlatır. Burada gelecek zaman eki (Futuro) yerine, daha basit olan **'Ir + a + fiil'** yapısını da kullanabilirsin.\n\n**Formül:** Si + Presente + Futuro (veya Ir a...)",
            examples: [
                { es: "Si estudias, aprobarás el examen", tr: "Eğer çalışırsan, sınavı geçeceksin" },
                { es: "Si hace sol, vamos a ir a la playa", tr: "Eğer hava güneşli olursa, plaja gideceğiz" },
                { es: "Si vienes a mi casa, veremos una película", tr: "Eğer evime gelirsen, bir film izleyeceğiz" }
            ]
        },
        {
            id: "si-commands",
            title: "3️⃣ Emir ve Tavsiyeler",
            explanation: "**(Eğer durum buysa, bunu yap!)**\n\nKarşı tarafa bir şarta bağlı emir veya tavsiye verirken kullanılır.\n\n**Formül:** Si + Presente + Imperativo (Emir Kipi)",
            examples: [
                { es: "Si tienes hambre, come algo", tr: "Eğer açsan, bir şeyler ye" },
                { es: "Si estás cansado, duerme", tr: "Eğer yorgunsan, uyu" },
                { es: "Si no entiendes, pregúntame", tr: "Eğer anlamazsan, bana sor" }
            ]
        },
        {
            id: "si-word-order",
            title: "🔄 Önemli Bir İpucu: Yer Değiştirme",
            explanation: "Tıpkı İngilizce veya Türkçedeki gibi cümlelerin yerini değiştirebilirsin. Anlam değişmez, sadece virgül kalkar.\n\n**Si başta:** Virgül var\n**Si ortada:** Virgül yok",
            examples: [
                { es: "Si tengo dinero, compraré un coche", tr: "Param olursa araba alacağım (Virgül var)" },
                { es: "Compraré un coche si tengo dinero", tr: "Araba alacağım eğer param olursa (Virgül yok)" }
            ]
        },
        {
            id: "si-summary-table",
            title: "📊 Özet Tablo",
            explanation: "Tüm Si yapılarını bir arada görelim:",
            table: {
                headers: ["Koşul Kısmı (Hep Aynı!)", "Sonuç Kısmı", "Anlamı"],
                rows: [
                    ["Si + Presente", "Presente", "Genel geçer doğrular (Her zaman olur)"],
                    ["Si + Presente", "Futuro / Ir a", "Gelecek planı (Olacak)"],
                    ["Si + Presente", "Imperativo", "Tavsiye/Emir (Yap)"]
                ]
            },
            examples: [
                { es: "Si llueve, no salgo (Alışkanlık)", tr: "Yağarsa çıkmam" },
                { es: "Si llueve, no saldré (Plan)", tr: "Yağarsa çıkmayacağım" },
                { es: "Si llueve, no salgas (Tavsiye)", tr: "Yağarsa çıkma" }
            ]
        }
    ]
};

// ===== ÜNİTE 55: RELATIVE PRONOUNS (İLGİ ZAMİRLERİ) =====
const unit55Grammar: UnitGrammar = {
    unitId: 55, title: "İlgi Zamirleri - Que, Quien, Donde",
    rules: [
        {
            id: "que-joker",
            title: "🃏 1. QUE (Ki, O ki, Hangi) - Joker Kart",
            explanation: "Bu, İspanyolcanın **Joker kartıdır**. En çok bunu kullanacaksın. Hem insanlar hem de nesneler/hayvanlar için kullanılır.\n\n**Özelliği:** Tekil veya çoğul fark etmez, asla değişmez.\n\n**Anlamı:** '...yapan kişi', '...dığım kitap', '...olan araba' gibi sıfat fiil grupları oluşturur.\n\n**⚠️ Dikkat:** Soru kelimesi olan **Qué** (üzerinde vurgu işareti var) ile karıştırma. İlgi zamiri olan **que** vurgusuzdur.",
            examples: [
                { es: "El libro que compré es interesante", tr: "Satın aldığım kitap ilginçtir" },
                { es: "La chica que vive aquí es mi prima", tr: "Burada yaşayan kız benim kuzenimdir" },
                { es: "Los coches que son rápidos cuestan mucho", tr: "Hızlı olan arabalar çok pahalıdır" }
            ]
        },
        {
            id: "quien-people",
            title: "👤 2. QUIEN / QUIENES (Kim, Ki o)",
            explanation: "**Sadece ve sadece insanlar için** kullanılır. Nesneler veya hayvanlar için asla kullanılmaz.\n\n**Özelliği:** Sayıya göre değişir! Tek bir kişiden bahsediyorsan **Quien**, birden fazla kişiden bahsediyorsan **Quienes** olur.\n\n**Ne zaman kullanılır?** Genellikle bir **edattan sonra** (con, de, a, para vb.) veya virgüllerle ayrılmış ek bilgi verirken kullanılır.",
            examples: [
                { es: "La mujer a quien llamé es mi madre", tr: "Aradığım kadın annemdir (a edatı olduğu için 'que' yerine 'quien' tercih edilir)" },
                { es: "Los amigos con quienes voy al cine", tr: "Sinemaya birlikte (onlarla) gittiğim arkadaşlar" },
                { es: "Mi hermano, quien es médico, vive en Madrid", tr: "Doktor olan kardeşim, Madrid'de yaşıyor (Ekstra bilgi verildiği için)" }
            ]
        },
        {
            id: "donde-place",
            title: "📍 3. DONDE (Nerede, Ki orada)",
            explanation: "**Sadece yer/mekan bildirmek için** kullanılır. İngilizcedeki 'where' kullanımıyla aynıdır.\n\n**Özelliği:** Bir yerin içinde gerçekleşen bir eylemi o yere bağlar.",
            examples: [
                { es: "La casa donde vivo es grande", tr: "Yaşadığım ev büyüktür" },
                { es: "Este es el restaurante donde comimos ayer", tr: "Burası dün yemek yediğimiz restoran" },
                { es: "El parque donde corremos es bonito", tr: "Koştuğumuz park güzeldir" }
            ]
        },
        {
            id: "relative-summary",
            title: "📊 Hızlı Özet Tablosu",
            explanation: "Tüm ilgi zamirlerini bir arada görelim:",
            table: {
                headers: ["Zamir", "Kullanım Alanı", "Değişkenlik", "İpucu"],
                rows: [
                    ["Que", "İnsanlar, Nesneler, Hayvanlar", "Değişmez", "En sık kullanılan, genel bağlaç"],
                    ["Quien(es)", "Sadece İnsanlar", "Tekil/Çoğul", "Genelde edatlardan (con, a, de) sonra gelir"],
                    ["Donde", "Yer, Mekan", "Değişmez", "Bir yer ve orada yapılan eylemi anlatır"]
                ]
            },
            examples: [
                { es: "El libro que leo (Genel)", tr: "Okuduğum kitap" },
                { es: "La persona con quien hablo (İnsan + Edat)", tr: "Konuştuğum kişi" },
                { es: "El lugar donde trabajo (Yer)", tr: "Çalıştığım yer" }
            ]
        }
    ]
};

// ===== ÜNİTE 56: ESTE/ESE/AQUEL (İŞARET SIFATLARI) =====
const unit56Grammar: UnitGrammar = {
    unitId: 56, title: "Dolaylı Nesne Zamirleri - Me, Te, Le, Nos, Les",
    rules: [
        {
            id: "indirect-object-intro",
            title: "🎯 Dolaylı Nesne Zamiri Nedir?",
            explanation: "Dolaylı nesne zamiri, eylemin **kime/neye** yapıldığını gösterir.\n\n**Soru:** KIME? (¿A quién?)\n\n**Örnek:** Ben **sana** bir kitap veriyorum.\n→ 'Sana' dolaylı nesnedir, çünkü kitap 'sana' veriliyor.",
            examples: [
                { es: "Te doy un regalo", tr: "Sana bir hediye veriyorum" },
                { es: "Me gusta el café", tr: "Kahve hoşuma gidiyor (Bana)" },
                { es: "Le escribo una carta", tr: "Ona bir mektup yazıyorum" }
            ]
        },
        {
            id: "io-pronouns-chart",
            title: "📊 Dolaylı Nesne Zamirleri Tablosu",
            explanation: "Her kişi için farklı bir zamir kullanılır:",
            examples: [
                { es: "Me llamas mañana", tr: "Yarın beni ararsın" },
                { es: "Te compro un helado", tr: "Sana bir dondurma alıyorum" },
                { es: "Nos enseña español", tr: "Bize İspanyolca öğretiyor" }
            ],
            table: {
                headers: ["Kişi", "Zamir", "Anlamı", "Örnek"],
                rows: [
                    ["Yo", "ME", "Bana", "Me das el libro (Bana kitabı veriyorsun)"],
                    ["Tú", "TE", "Sana", "Te escribo (Sana yazıyorum)"],
                    ["Él/Ella/Usted", "LE", "Ona", "Le digo la verdad (Ona gerçeği söylüyorum)"],
                    ["Nosotros", "NOS", "Bize", "Nos cuenta historias (Bize hikayeler anlatıyor)"],
                    ["Ellos/Ustedes", "LES", "Onlara", "Les doy dinero (Onlara para veriyorum)"]
                ]
            }
        },
        {
            id: "io-position",
            title: "📍 Zamir Nereye Gelir?",
            explanation: "Dolaylı nesne zamiri genellikle **fiilden ÖNCE** gelir.\n\n**Formül:** Zamir + Fiil (Çekimli)\n\n⚠️ **İstisna:** Mastar fiil veya emir kipinde sona yapışır.",
            examples: [
                { es: "Le doy el libro", tr: "Ona kitabı veriyorum (Normal)" },
                { es: "Quiero darte algo", tr: "Sana bir şey vermek istiyorum (Mastar)" },
                { es: "¡Dime!", tr: "Bana söyle! (Emir kipi)" }
            ]
        },
        {
            id: "gustar-connection",
            title: "💡 GUSTAR Bağlantısı",
            explanation: "GUSTAR fiili aslında dolaylı nesne zamirlerini kullanır!\n\n**Me gusta** = 'O' bana hoş geliyor (Bana hoşlanma veriyor)\n\nBu yüzden 'Kahve hoşuma gidiyor' demek için:\n→ **Me** gusta el café (Bana + hoş geliyor + kahve)",
            examples: [
                { es: "Me gusta bailar", tr: "Dans etmek hoşuma gidiyor" },
                { es: "Te gustan los gatos", tr: "Kediler hoşuna gidiyor" },
                { es: "Les encanta viajar", tr: "Seyahat etmek onların çok hoşuna gidiyor" }
            ]
        }
    ]
};

// ===== ÜNİTE 57: INDEFİNİTE PRONOUNS (BELİRSİZ ZAMİRLER) =====
const unit57Grammar: UnitGrammar = {
    unitId: 57, title: "Indefinite Pronouns - Algo, Nada, Alguien, Nadie",
    rules: [
        {
            id: "indefinite-intro",
            title: "❓ Belirsiz Zamirler Nedir?",
            explanation: "Belirsiz zamirler, belirli olmayan kişi veya nesneleri ifade eder.\n\n**Şeyler için:**\n* **ALGO** = Bir şey (olumlu)\n* **NADA** = Hiçbir şey (olumsuz)\n\n**Kişiler için:**\n* **ALGUIEN** = Biri, birisi (olumlu)\n* **NADIE** = Kimse (olumsuz)",
            examples: [
                { es: "¿Quieres algo?", tr: "Bir şey ister misin?" },
                { es: "No quiero nada", tr: "Hiçbir şey istemiyorum" },
                { es: "¿Hay alguien?", tr: "Biri var mı?" },
                { es: "No hay nadie", tr: "Kimse yok" }
            ]
        },
        {
            id: "algo-nada",
            title: "📦 ALGO vs NADA (Şeyler için)",
            explanation: "**ALGO (Bir şey):**\n* ¿Necesitas algo? = Bir şeye ihtiyacın var mı?\n* Tengo algo para ti = Senin için bir şeyim var\n\n**NADA (Hiçbir şey):**\n* No tengo nada = Hiçbir şeyim yok\n* No pasa nada = Bir şey olmaz / Sorun değil\n\n**⚠️ Önemli:** Olumsuz cümlede 'nada' kullanırken, fiilin önünde de 'NO' olur (Çift olumsuz!)",
            examples: [
                { es: "¿Hay algo en la nevera?", tr: "Buzdolabında bir şey var mı?" },
                { es: "No hay nada en la nevera", tr: "Buzdolabında hiçbir şey yok" },
                { es: "Algo está mal", tr: "Bir şey yanlış" },
                { es: "Nada es imposible", tr: "Hiçbir şey imkansız değil" }
            ],
            table: {
                headers: ["Zamir", "Anlam", "Örnek"],
                rows: [
                    ["ALGO", "Bir şey (+)", "¿Quieres algo?"],
                    ["NADA", "Hiçbir şey (-)", "No quiero nada"]
                ]
            }
        },
        {
            id: "alguien-nadie",
            title: "👥 ALGUIEN vs NADIE (Kişiler için)",
            explanation: "**ALGUIEN (Biri, birisi):**\n* ¿Hay alguien en casa? = Evde biri var mı?\n* Alguien me ha llamado = Biri beni aradı\n\n**NADIE (Kimse):**\n* No hay nadie = Kimse yok\n* Nadie me entiende = Kimse beni anlamıyor\n\n**⚠️ Önemli:** Olumsuz cümlede 'nadie' kullanırken, fiilin önünde de 'NO' olur!",
            examples: [
                { es: "¿Conoces a alguien aquí?", tr: "Burada birini tanıyor musun?" },
                { es: "No conozco a nadie", tr: "Kimseyi tanımıyorum" },
                { es: "Alguien ha robado mi cartera", tr: "Biri cüzdanımı çalmış" },
                { es: "Nadie sabe la respuesta", tr: "Kimse cevabı bilmiyor" }
            ],
            table: {
                headers: ["Zamir", "Anlam", "Örnek"],
                rows: [
                    ["ALGUIEN", "Biri (+)", "Busco a alguien"],
                    ["NADIE", "Kimse (-)", "No busco a nadie"]
                ]
            }
        },
        {
            id: "alguno-ninguno",
            title: "🔢 ALGÚN/ALGUNO vs NINGÚN/NINGUNO",
            explanation: "Bu zamirler sayılabilir şeyler için kullanılır:\n\n**ALGÚN/ALGUNO (Bazı, bir):**\n* ¿Tienes algún libro? = Bir kitabın var mı?\n* Algunos son buenos = Bazıları iyi\n\n**NINGÚN/NINGUNO (Hiçbir):**\n* No tengo ningún libro = Hiçbir kitabım yok\n* Ninguno funciona = Hiçbiri çalışmıyor\n\n**⚠️ Kural:** İsimden önce ALGÚN/NINGÚN (kısa form), tek başına ALGUNO/NINGUNO kullanılır.",
            examples: [
                { es: "¿Tienes algún problema?", tr: "Bir sorunun mu var?" },
                { es: "No tengo ningún problema", tr: "Hiçbir sorunum yok" },
                { es: "Algunos estudiantes hablan español", tr: "Bazı öğrenciler İspanyolca konuşuyor" },
                { es: "Ninguno de mis amigos vino", tr: "Arkadaşlarımdan hiçbiri gelmedi" }
            ],
            table: {
                headers: ["Olumlu", "Olumsuz", "Örnek Olumlu", "Örnek Olumsuz"],
                rows: [
                    ["algún/alguno", "ningún/ninguno", "Tengo algún libro", "No tengo ningún libro"],
                    ["alguna", "ninguna", "Tengo alguna idea", "No tengo ninguna idea"],
                    ["algunos", "ningunos (nadir)", "Tengo algunos amigos", "No tengo amigos"],
                    ["algunas", "ningunas (nadir)", "Tengo algunas preguntas", "No tengo preguntas"]
                ]
            }
        },
        {
            id: "indefinite-summary",
            title: "📊 Özet Tablo",
            explanation: "Tüm belirsiz zamirleri bir arada görelim:",
            examples: [],
            table: {
                headers: ["Olumlu", "Olumsuz", "Kullanım"],
                rows: [
                    ["algo", "nada", "Şeyler için"],
                    ["alguien", "nadie", "Kişiler için"],
                    ["algún/alguno", "ningún/ninguno", "Sayılabilir (eril)"],
                    ["alguna", "ninguna", "Sayılabilir (dişil)"],
                    ["siempre", "nunca", "Zaman için"],
                    ["también", "tampoco", "Ekleme için"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 58: A2 NİTELİK SIFATLARI =====
const unit58Grammar: UnitGrammar = {
    unitId: 58, title: "Nitelik Sıfatları - Adjetivos Calificativos",
    rules: [
        {
            id: "physical-features",
            title: "👤 A. Fiziksel Özellikler (Aspecto Físico)",
            explanation: "Varlıkların nasıl olduğunu (rengini, şeklini, huyunu, durumunu) anlatan sıfatlardır.\n\nGenellikle **SER** (olmak) fiiliyle kullanılırlar, çünkü bunlar **kalıcı özelliklerdir**.",
            examples: [
                { es: "Mi hermano es alto", tr: "Kardeşim uzun" },
                { es: "El gato es gordo", tr: "Kedi şişman" },
                { es: "El actor es muy guapo", tr: "Aktör çok yakışıklı" },
                { es: "Tiene el pelo largo", tr: "Uzun saçları var" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe", "Örnek"],
                rows: [
                    ["Alto / Bajo", "Uzun / Kısa", "Mi hermano es alto"],
                    ["Gordo / Delgado", "Şişman / Zayıf", "El gato es gordo"],
                    ["Guapo / Feo", "Yakışıklı(Güzel) / Çirkin", "El actor es muy guapo"],
                    ["Rubio / Moreno", "Sarışın / Esmer", "Soy moreno"],
                    ["Joven / Viejo", "Genç / Yaşlı", "Mi abuelo es viejo"],
                    ["Largo / Corto", "Uzun / Kısa (Nesneler)", "Tiene el pelo largo"]
                ]
            }
        },
        {
            id: "character-personality",
            title: "💡 B. Karakter ve Kişilik (Carácter y Personalidad)",
            explanation: "Yine genellikle kişinin özü olduğu için **SER** fiiliyle kullanılır.",
            examples: [
                { es: "Ella es muy inteligente", tr: "O çok zeki" },
                { es: "Tu amigo es simpático", tr: "Arkadaşın cana yakın" },
                { es: "Los estudiantes son trabajadores", tr: "Öğrenciler çalışkan" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe", "Örnek"],
                rows: [
                    ["Inteligente", "Zeki", "Ella es muy inteligente"],
                    ["Tonto", "Aptal / Şapşal", "No seas tonto"],
                    ["Simpático / Antipático", "Cana yakın / Sevimsiz", "Tu amigo es simpático"],
                    ["Trabajador / Vago", "Çalışkan / Tembel", "Los estudiantes son trabajadores"],
                    ["Divertido / Aburrido", "Eğlenceli / Sıkıcı", "La fiesta es divertida"],
                    ["Amable", "Kibar / Nazik", "El camarero es muy amable"]
                ]
            }
        },
        {
            id: "emotions-estar",
            title: "⚠️ C. Duygular ve Geçici Durumlar (Estados de Ánimo)",
            explanation: "**Kritik Kural:** Bu sıfatlar geçici bir durumu anlattığı için **ESTAR** (bulunmak/durumunda olmak) fiiliyle kullanılır.\n\n**SER = Kalıcı özellik (O uzun boylu)**\n**ESTAR = Geçici durum (O yorgun)**",
            examples: [
                { es: "Estoy muy cansado hoy", tr: "Bugün çok yorgunum" },
                { es: "María está enferma", tr: "María hasta" },
                { es: "¿Por qué estás triste?", tr: "Neden üzgünsün?" },
                { es: "Mi padre está enfadado", tr: "Babam kızgın" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe", "Örnek"],
                rows: [
                    ["Cansado", "Yorgun", "Estoy muy cansado hoy"],
                    ["Enfermo", "Hasta", "María está enferma"],
                    ["Triste / Contento", "Üzgün / Mutlu", "¿Por qué estás triste?"],
                    ["Ocupado / Libre", "Meşgul / Müsait", "El baño está ocupado"],
                    ["Enfadado", "Kızgın", "Mi padre está enfadado"]
                ]
            }
        },
        {
            id: "other-adjective-types",
            title: "📚 2. Diğer Sıfat Çeşitleri",
            explanation: "'Sıfat Çeşitleri' dendiğinde sadece niteleyenler (güzel, çirkin) aklına gelmesin. A2 seviyesinde şu grupları da teknik olarak sıfat olarak kullanırsın:\n\n**İşaret Sıfatları (Demostrativos):** Hangi nesne olduğunu gösterir.\n- Este (Bu), Ese (Şu), Aquel (O/Oradaki)\n\n**Mülkiyet Sıfatları (Posesivos):** Sahiplik bildirir.\n- Mi (Benim), Tu (Senin), Su (Onun), Nuestro (Bizim)...\n\n**Belgisiz Sıfatlar (Indefinidos):** Miktar belirsizse kullanılır.\n- Mucho (Çok), Poco (Az), Bastante (Yeterince/Oldukça)",
            examples: [
                { es: "Este libro es interesante", tr: "Bu kitap ilginç (İşaret)" },
                { es: "Mi casa es grande", tr: "Benim evim büyük (Mülkiyet)" },
                { es: "Hay muchos estudiantes", tr: "Çok öğrenci var (Belgisiz)" }
            ]
        },
        {
            id: "golden-rule-1",
            title: "🥇 Altın Kural 1: Sıfatlar İsimden SONRA Gelir",
            explanation: "Türkçe ve İngilizcenin tersine, İspanyolcada sıfatı ismin arkasına saklarız.\n\n❌ **Yanlış:** Kırmızı araba → Rojo coche\n✅ **Doğru:** Araba kırmızı → Coche rojo\n✅ **Doğru:** Kız güzel → Chica guapa\n\n*(İstisna: 'Bueno' ve 'Malo' bazen öne gelebilir ama şimdilik hep sona koy, güvende kal.)*",
            examples: [
                { es: "Coche rojo", tr: "Kırmızı araba ✅" },
                { es: "Chica guapa", tr: "Güzel kız ✅" },
                { es: "Casa grande", tr: "Büyük ev ✅" }
            ]
        },
        {
            id: "golden-rule-2",
            title: "🥈 Altın Kural 2: Cinsiyet ve Sayı Uyumu (La Concordancia)",
            explanation: "**İsim neyse, sıfat odur.** Patron isimdir, sıfat ona uymak zorundadır.\n\n**İpucu:** Sonu **'-e'** ile biten sıfatlar (Inteligente, Amable, Grande) cinsiyete göre değişmez! Sadece çoğul eki (-s) alırlar.\n- El chico inteligente / La chica inteligente. (Değişmedi!)",
            examples: [
                { es: "El chico alto", tr: "Erkek - Tekil" },
                { es: "La chica alta", tr: "Kadın - Tekil" },
                { es: "Los chicos altos", tr: "Erkekler - Çoğul" },
                { es: "Las chicas altas", tr: "Kadınlar - Çoğul" }
            ],
            table: {
                headers: ["Durum", "Eril", "Dişil"],
                rows: [
                    ["Tekil", "El chico alto", "La chica alta"],
                    ["Çoğul", "Los chicos altos", "Las chicas altas"],
                    ["-e'li (Tekil)", "El chico inteligente", "La chica inteligente"],
                    ["-e'li (Çoğul)", "Los chicos inteligentes", "Las chicas inteligentes"]
                ]
            }
        }
    ]
};


// ===== ÜNİTE 59: ZARF YAPILARI (ADVERBIOS) =====
const unit59Grammar: UnitGrammar = {
    unitId: 59, title: "Zarf Yapıları - Adverbios",
    rules: [
        {
            id: "time-adverbs-calendar",
            title: "⏰ 1. Zaman Zarfları - Takvim ve Anlık Durumlar",
            explanation: "'Ne zaman?' sorusuna cevap verirler. Bunları üç kategoride öğrenirsen hafızanda daha kolay kalır.\n\n**A. Takvim ve Anlık Durumlar**\nBunlar cümlenin başında veya sonunda kullanılabilir.",
            examples: [
                { es: "Hoy tengo un examen", tr: "Bugün sınavım var" },
                { es: "Me levanto temprano", tr: "Erken kalkarım" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe"],
                rows: [
                    ["Ahora", "Şimdi"],
                    ["Hoy", "Bugün"],
                    ["Ayer", "Dün"],
                    ["Mañana", "Yarın (Ayrıca 'sabah' anlamına da gelir)"],
                    ["Anoche", "Dün gece"],
                    ["Pronto", "Yakında / Çabuk"],
                    ["Tarde", "Geç"],
                    ["Temprano", "Erken"]
                ]
            }
        },
        {
            id: "time-adverbs-frequency",
            title: "🔄 B. Sıklık Zarfları (Frecuencia)",
            explanation: "Genellikle **özneden hemen sonra** veya **fiilden önce** gelirler.",
            examples: [
                { es: "Yo siempre estudio español", tr: "Ben her zaman İspanyolca çalışırım" },
                { es: "A veces como pizza", tr: "Bazen pizza yerim" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe"],
                rows: [
                    ["Siempre", "Her zaman"],
                    ["Nunca", "Asla / Hiçbir zaman"],
                    ["A veces", "Bazen"],
                    ["A menudo", "Sık sık"]
                ]
            }
        },
        {
            id: "ya-vs-todavia",
            title: "⚡ C. Kritik İkili: YA vs TODAVÍA",
            explanation: "Bu ikisi A2'nin kilit noktasıdır.\n\n**Ya:** Artık, Zaten, Çoktan\n- Olumlu cümlelerde 'zaten yaptım'\n- Olumsuz cümlelerde 'artık yapmıyorum'\n\n**Todavía (no):** Henüz (değil), Hala",
            examples: [
                { es: "Ya estoy listo", tr: "Çoktan/Zaten hazırım" },
                { es: "Todavía no hablo francés bien", tr: "Henüz Fransızcayı iyi konuşmuyorum" }
            ]
        },
        {
            id: "place-adverbs-distance",
            title: "📍 2. Mekan Zarfları - Mesafe Bildirenler",
            explanation: "'Nerede?' sorusuna cevap verirler. İspanyolcada yer-yön tarif ederken bu kelimeler, genellikle **estar** (bulunmak) fiili ile kullanılır.\n\n**A. Mesafe Bildirenler (İşaret Zamiri Mantığı)**",
            examples: [
                { es: "Tu libro está aquí", tr: "Kitabın burada" },
                { es: "El baño está allí", tr: "Tuvalet orada" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe", "Mesafe Hissi"],
                rows: [
                    ["Aquí", "Burada", "Tam olduğun yer, çok yakın"],
                    ["Ahí", "Şurada", "Biraz ötede, işaret mesafesinde"],
                    ["Allí", "Orada", "Uzakta"]
                ]
            }
        },
        {
            id: "place-adverbs-position",
            title: "🎯 B. Konum Bildirenler (+ DE Kuralı)",
            explanation: "⚠️ **Önemli Kural:** Eğer bu zarflardan sonra bir nesne geliyorsa (evin önünde, masanın altında), araya mutlaka **'de'** edatı girer.\n\n**Karşılaştırmalı Örnek:**\n- El perro está dentro. (Köpek içeride.) → Nesne yok, sadece zarf.\n- El perro está dentro **de** la casa. (Köpek evin içinde.) → Ev (nesne) geldiği için 'de' ekledik.",
            examples: [
                { es: "El gato está cerca de la puerta", tr: "Kedi kapının yakınında" },
                { es: "El libro está encima de la mesa", tr: "Kitap masanın üstünde" }
            ],
            table: {
                headers: ["İspanyolca", "Türkçe"],
                rows: [
                    ["Cerca (de)", "Yakın(ında)"],
                    ["Lejos (de)", "Uzak(ında)"],
                    ["Delante (de)", "Ön(ünde)"],
                    ["Detrás (de)", "Arka(sında)"],
                    ["Encima (de)", "Üst(ünde)"],
                    ["Debajo (de)", "Alt(ında)"],
                    ["Dentro (de)", "İç(inde)"],
                    ["Fuera (de)", "Dış(ında)"]
                ]
            }
        },
        {
            id: "mente-structure",
            title: "➕ Bonus: -MENTE Yapısı (Nasıl?)",
            explanation: "Konumuz zaman ve mekan olsa da, zarf demişken bunu atlayamayız. İngilizcedeki **'-ly'** eki (quickly) neyse, İspanyolcada **'-mente'** odur.\n\nBir sıfatı alıp sonuna **-mente** eklersen, o kelimeyi zarf yaparsın.",
            examples: [
                { es: "Camino rápidamente", tr: "Hızlıca yürüyorum" },
                { es: "Habla lentamente", tr: "Yavaşça konuşuyor" },
                { es: "Normalmente como en casa", tr: "Normalde evde yemek yerim" }
            ],
            table: {
                headers: ["Sıfat", "Zarf (-mente)", "Anlam"],
                rows: [
                    ["Rápida", "Rápidamente", "Hızlıca / Hızlı bir şekilde"],
                    ["Lenta", "Lentamente", "Yavaşça"],
                    ["Normal", "Normalmente", "Normalde / Genellikle"]
                ]
            }
        }
    ]
};

// Ünite ID'sine göre A2 grammar getir (ID: 31-60) - A1 artık 30 ünite
export function getA2GrammarForUnit(unitId: number): UnitGrammar {
    // Yeni ID'lere göre mapping (A2 artık 31'den başlıyor)
    const idMapping: { [key: number]: UnitGrammar } = {
        // A2 Temel Üniteler (31-45)
        31: unit21Grammar, 32: unit22Grammar, 33: unit23Grammar, 34: unit24Grammar, 35: unit25Grammar,
        36: unit26Grammar, 37: unit27Grammar, 38: unit28Grammar, 39: unit29Grammar, 40: unit30Grammar,
        41: unit31Grammar, 42: unit32Grammar, 43: unit33Grammar, 44: unit34Grammar, 45: unit35Grammar,
        // A2 Orta Üniteler (46-55)
        46: unit46Grammar, 47: unit47Grammar, 48: unit48Grammar, 49: unit39Grammar, 50: unit40Grammar,
        51: unit51Grammar, 52: unit52Grammar, 53: unit53Grammar, 54: unit54Grammar, 55: unit55Grammar,
        // A2 Gelişmiş Gramer Üniteleri (56-60)
        56: unit56Grammar, 57: unit57Grammar, 58: unit58Grammar, 59: unit59Grammar
    };

    const grammar = idMapping[unitId];
    if (grammar) {
        return { ...grammar, unitId };
    }
    return unit21Grammar;
}

