/**
 * SteadyShell Konu Anlatımı Veritabanı - İspanyolca A2
 * 20 Ünite (ID: 21-40), her biri için detaylı konu anlatımı
 */

import { UnitLecture, LectureSlide } from './lectures';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN 1 =====
const unit21Lecture: UnitLecture = {
    unitId: 21, title: "Geçmiş Zaman 1 - Pretérito Indefinido", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Geçmişe Yolculuk Başlıyor! 📅", content: "A2 seviyesine hoş geldin! İlk işimiz İspanyolcanın en önemli geçmiş zamanı olan 'Pretérito Indefinido'yu öğrenmek. Bunu öğrendiğinde dün ne yaptığını, geçen yıl nereye gittiğini rahatça anlatabileceksin.", tip: "Dikkatini topla, bu konu temel taşıdır!" },
        {
            id: 2, type: "grammar", title: "-AR Grubu Fiiller (Detaylı Analiz) 📝", rules: [
                { rule: "Çekim Mantığı", explanation: "Son harfe (özellikle 1. ve 3. tekil şahısa) VURGU yapmalısın!", examples: ["Trabajé (TRABAHÉ) - Çalıştım", "Trabajó (TRABAHÓ) - Çalıştı"] },
                { rule: "⚠️ Koçun Altın Tüyosu 1", explanation: "'Nosotros' çekimi (Trabajamos) hem 'Çalışıyoruz' hem 'Çalıştık' anlamına gelir. Zaman zarfına bakarak ayırt edersin.", examples: ["Hoy trabajamos (Şimdiki)", "Ayer trabajamos (Geçmiş)"] },
                { rule: "⚠️ Koçun Altın Tüyosu 2", explanation: "VURGU HAYAT KURTARIR! 'Hablo' (Konuşuyorum) ile 'Habló' (Konuştu) arasındaki fark sadece sondaki vurgudur.", examples: [] }
            ], points: [
                "Yo Trabaj**é** (Çalıştım)",
                "Tú Trabaj**aste** (Çalıştın)",
                "Él Trabaj**ó** (Çalıştı) 👈 Sert Vurgu!",
                "Nosotros Trabaj**amos** (Çalıştık)",
                "Vosotros Trabaj**asteis** (Çalıştınız)",
                "Ellos Trabaj**aron** (Çalıştılar)"
            ]
        },
        {
            id: 3, type: "grammar", title: "-ER ve -IR Grubu Fiiller 🤝", rules: [
                { rule: "Müjde!", explanation: "-ER ve -IR grubu fiillerin geçmiş zaman ekleri %100 AYNIDIR. Birini öğrenen ikisini de öğrenir.", examples: ["Comí (Yedim)", "Salí (Çıktım)"] },
                { rule: "🔍 Kritik Detay", explanation: "3. Tekil Şahısta 'ió' eki gelir ve 'O' harfine basarak okunur.", examples: ["Comió (Kom-YÖ) - Yedi", "Escribió - Yazdı"] }
            ], points: [
                "Yo Com**í** / Sal**í**",
                "Tú Com**iste** / Sal**iste**",
                "Él Com**ió** / Sal**ió**",
                "Nosotros Com**imos** / Sal**imos**",
                "Vosotros Com**isteis** / Sal**isteis**",
                "Ellos Com**ieron** / Sal**ieron**"
            ]
        },
        {
            id: 4, type: "grammar", title: "Zamanın Anahtarları 🔑", rules: [
                { rule: "Zaman Zarfları", explanation: "Cümleyi geçmişe iten kelimelerdir. Cümlenin başına veya sonuna koyabilirsin.", examples: ["**Ayer** comí pizza (Dün pizza yedim)", "**Hace un año** viajé a Madrid (Bir yıl önce Madrid'e gittim)"] }
            ], points: [
                "Ayer = Dün",
                "Anteayer = Evvelsi gün",
                "Anoche = Dün gece",
                "La semana pasada = Geçen hafta",
                "El año pasado = Geçen yıl",
                "Hace dos días = İki gün önce"
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["-AR: -é, -aste, -ó, -amos, -asteis, -aron", "-ER/-IR: -í, -iste, -ió, -imos, -isteis, -ieron", "Hablo (Şimdiki) ≠ Habló (Geçmiş)", "Nosotros formu Şimdiki Zaman ile aynı olabilir"] }
    ]
};

// ===== ÜNİTE 22: GEÇMİŞ ZAMAN 2 =====
const unit22Lecture: UnitLecture = {
    unitId: 22, title: "Geçmiş Zaman 2 - Düzensiz Fiiller", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Kuralları Yıkanlar! 💥", content: "Düzensiz fiiller her dilde vardır ve genellikle en sık kullanılanlardır. İspanyolcada 'Gitmek', 'Olmak', 'Sahip Olmak' gibi temel fiiller geçmiş zamanda kılık değiştirir.", tip: "Korkma! Gruplara ayırarak hepsini kolayca halledeceğiz." },
        {
            id: 2, type: "grammar", title: "İkiz Kardeşler: Ser ve Ir 🎭", rules: [
                { rule: "Büyük Sürpriz", explanation: "'Ser' (Olmak) ve 'Ir' (Gitmek) geçmişte TAMAMEN AYNI çekilir! Cümlenin bağlamından hangisi olduğunu şıp diye anlarsın.", examples: ["Fui al parque (Parka yönelme var -> GİTTİM)", "La fiesta fue divertida (Eğlenceli bir durum -> OLDU/İDİ)"] }
            ], points: [
                "Yo **Fui**",
                "Tú **Fuiste**",
                "Él **Fue**",
                "Nosotros **Fuimos**",
                "Vosotros **Fuisteis**",
                "Ellos **Fueron**"
            ]
        },
        {
            id: 3, type: "grammar", title: "Sihirli Grup (Kök Değiştirenler) ✨", rules: [
                { rule: "Kural 1: Yeni Kök", explanation: "Bu fiillerin kökü tamamen değişir (Tener -> Tuv, Hic -> Hice gibi).", examples: [] },
                { rule: "Kural 2: Vurgu Yok", explanation: "Bu gruptaki hiçbir fiilde, hiçbir şahısta vurgu işareti (tilde) KULLANILMAZ!", examples: ["Tuve (Doğru) - Tuvé (Yanlış)"] }
            ], points: [
                "**U-Grubu:** Tener/Tuv, Estar/Estuv, Poder/Pud, Poner/Pus, Saber/Sup",
                "**I-Grubu:** Hacer/Hic, Querer/Quis, Venir/Vin",
                "**J-Grubu:** Decir/Dij, Traer/Traj, Conducir/Conduj"
            ]
        },
        {
            id: 4, type: "grammar", title: "Küçük İsyankarlar: Dar ve Ver 👶", rules: [
                { rule: "Dar (Vermek)", explanation: "-AR fiili olmasına rağmen -ER/-IR ekleri alır!", examples: ["Yo di, Tú diste, Él dio..."] },
                { rule: "Ver (Görmek)", explanation: "Çok kısadır ve vurgu işareti almaz.", examples: ["Yo vi, Tú viste, Él vio..."] }
            ], points: [
                "Dar: di, diste, dio, dimos, dieron",
                "Ver: vi, viste, vio, vimos, vieron"
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Ser ve Ir ikizdir: Fui, Fuiste, Fue...", "Kök değiştirenlerde asla vurgu işareti yok!", "Hacer'in 3. tekil şahsı 'Hizo' olur (Hico değil!)", "J-Grubunda 'Ellos' eki '-eron' olur (Dijeron)"] }
    ]
};

// ===== ÜNİTE 23: RESTORANDA =====
const unit23Lecture: UnitLecture = {
    unitId: 23, title: "Restoranda Sipariş Vermek", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Açlıktan Ölmüyoruz! 🍽️", content: "İspanyolca konuşulan bir ülkede aç kalmaman için gereken her şeyi öğreneceğiz. Ama sadece 'istemek' yetmez, kibarca istemek önemlidir!", tip: "Garsona 'Quiero' (İstiyorum) dersen sana kaba bir turist gibi bakabilirler." },
        {
            id: 2, type: "grammar", title: "Sihirli Kalıplar: Querría & Me Gustaría ✨", rules: [
                { rule: "Querría (İsterdim)", explanation: "Querer (İstemek) fiilinin kibar halidir.", examples: ["Querría una mesa (Bir masa rica ediyorum)"] },
                { rule: "Me gustaría (Hoşuma giderdi)", explanation: "Gustar fiilinin kibar halidir.", examples: ["Me gustaría ver el menú (Menüyü görmek isterdim)"] }
            ], points: [
                "❌ Quiero una sopa. (Kaba/Direkt)",
                "✅ Querría una sopa. (Kibar/Nazik)",
                "✅ Para mí, una sopa. (Doğal/Yaygın)"
            ]
        },
        {
            id: 3, type: "grammar", title: "Büyük Tuzak: Pedir vs Ordenar ⚠️", rules: [
                { rule: "PEDIR 👑", explanation: "Sipariş vermek, istemek, rica etmek. Restoranda bunu kullan!", examples: ["Voy a pedir el postre (Tatlıyı söyleyeceğim)"] },
                { rule: "ORDENAR 🚫", explanation: "Emretmek veya düzenlemek (odayı toplamak). İspanya'da garsona bunu söyleme!", examples: [] }
            ], points: [
                "Presente Çekimi (PEDIR - E>İ):",
                "Yo **Pido**",
                "Tú **Pides**",
                "Él **Pide**",
                "Nosotros **Pedimos**",
                "Ellos **Piden**"
            ]
        },
        {
            id: 4, type: "vocabulary", title: "Süper Kelimeler 🎒", words: [
                { target: "De primero / De segundo", native: "Başlangıç / Ana yemek", pronunciation: "" },
                { target: "La cuenta, por favor", native: "Hesap lütfen", pronunciation: "" },
                { target: "Sin cebolla", native: "Soğansız", pronunciation: "" },
                { target: "Está picante", native: "Acı(lı)", pronunciation: "" }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Querría... = ... rica ediyorum", "Para mí... = Benim için/Bana ...", "Pedir = Sipariş etmek (Ordenar DEĞİL!)", "La cuenta = Hesap"] }
    ]
};

// ===== ÜNİTE 24: ALIŞVERİŞ =====
const unit24Lecture: UnitLecture = {
    unitId: 24, title: "Alışverişte Uzmanlaşmak", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Para Harcama Sanatı 🛍️", content: "Bir şeyi 'onu alıyorum' diye kısaca söylemek veya 'bu şundan daha güzel' diyerek kıyaslamak için gereken her şeyi öğreneceğiz.", tip: "İspanyolca'da bir şeyi tekrar tekrar söylemek sevilmez. Zamirler hayat kurtarır!" },
        {
            id: 2, type: "grammar", title: "Nesne Zamirleri: Lo, La, Los, Las 🎯", rules: [
                { rule: "Mantık", explanation: "Nesnenin yerine geçerler. Cinsiyet ve sayıya dikkat!", examples: ["El vestido (Eril) -> **Lo**", "La camiseta (Dişil) -> **La**"] },
                { rule: "Konum", explanation: "Çekimlenmiş fiilin HEMEN ÖNÜNE gelir.", examples: ["**Lo** compro (Onu alıyorum)"] }
            ], points: [
                "**Lo** (Onu - Eril)",
                "**La** (Onu - Dişil)",
                "**Los** (Onları - Eril)",
                "**Las** (Onları - Dişil)"
            ]
        },
        {
            id: 3, type: "grammar", title: "Kıyaslama: Hangisi Daha İyi? ⚖️", rules: [
                { rule: "Más ... que", explanation: "Daha ... (üstünlük)", examples: ["Este es **más caro que** el otro (Bu diğerinden daha pahalı)"] },
                { rule: "Menos ... que", explanation: "Daha az ... (azlık)", examples: ["Es **menos interesante que** el libro"] },
                { rule: "Altın Kural", explanation: "Sıfat, İLK söylenen nesneye uyar!", examples: ["**La mesa** es más **pequeña**"] }
            ], points: [
                "Más barato que... (...'den daha ucuz)",
                "Más bonito que... (...'den daha güzel)",
                "Menos grande que... (...'den daha az büyük)"
            ]
        },
        {
            id: 4, type: "vocabulary", title: "Alışveriş Sıfatları 🏷️", words: [
                { target: "Caro / Barato", native: "Pahalı / Ucuz", pronunciation: "" },
                { target: "Bonito / Feo", native: "Güzel / Çirkin", pronunciation: "" },
                { target: "Grande / Pequeño", native: "Büyük / Küçük", pronunciation: "" },
                { target: "Cómodo", native: "Rahat", pronunciation: "" }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Lo quiero = Onu istiyorum", "Más caro que = ...'den daha pahalı", "La camisa es más bonita = Gömlek daha güzel (uyum!)"] }
    ]
};

// ===== ÜNİTE 25: SEYAHAT PLANLARI =====
const unit25Lecture: UnitLecture = {
    unitId: 25, title: "Gelecek Planları Yapıyoruz", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Plan Yapma Zamanı 📅", content: "Yarın ne yapacaksın? Hafta sonu nereye gideceksin? İspanyolların en sevdiği zamanı öğreniyoruz: Yakın Gelecek!", tip: "Bu yapıyı öğrenirsen, şimdiki zamanı kullanarak geleceği anlatabilirsin!" },
        {
            id: 2, type: "grammar", title: "Altın Formül: Ir + a + Fiil 🏆", rules: [
                { rule: "Formül", explanation: "IR (Çekimli) + a + FİİL (Yalın)", examples: ["Yo **voy a comer** (Ben yemek yiyeceğim)"] },
                { rule: "IR Çekimi", explanation: "Motoru çalıştıralım: Voy, Vas, Va, Vamos, Vais, Van", examples: [] }
            ], points: [
                "**Voy a**... (Gideceğim/Yapacağım)",
                "**Vas a**... (Gideceksin/Yapacaksın)",
                "**Va a**... (Gidecek/Yapacak)",
                "**Vamos a**... (Gideceğiz/Yapacağız)"
            ]
        },
        {
            id: 3, type: "grammar", title: "⚠️ Köprü Uyarısı", rules: [
                { rule: "'A' Harfi Tuzağı", explanation: "Öğrencilerin %90'ı bunu unutur! Aradaki 'A' harfi olmadan cümle kurulmaz.", examples: ["❌ Yo voy comer", "✅ Yo voy **A** comer"] }
            ], points: [
                "Unutma: Voy **A**...",
                "Vas **A**...",
                "Vamos **A**..."
            ]
        },
        {
            id: 4, type: "vocabulary", title: "Gelecek Sinyalleri 📡", words: [
                { target: "Mañana", native: "Yarın", pronunciation: "" },
                { target: "Esta noche", native: "Bu gece", pronunciation: "" },
                { target: "Este fin de semana", native: "Bu hafta sonu", pronunciation: "" },
                { target: "La próxima semana", native: "Gelecek hafta", pronunciation: "" }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Voy a... = ... yapacağım", "Aradaki 'a' harfi KÖPRÜDÜR, unutma!", "No voy a salir = Çıkmayacağım"] }
    ]
};

// ===== ÜNİTE 26: OTEL REZERVASYONU =====
const unit26Lecture: UnitLecture = {
    unitId: 26, title: "Otel Rezervasyonu", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Otel İşlemleri 🏨", content: "Check-in, check-out, oda tipi isteme ve otel hizmetleri hakkında soru sorma.", tip: "İspanya'da check-in genellikle 14:00-16:00, check-out ise 11:00-12:00 arasındadır." },
        {
            id: 2, type: "vocabulary", title: "Otel Kelimeleri", words: [
                { target: "La habitación", native: "Oda", pronunciation: "a-bi-ta-SION" },
                { target: "La llave", native: "Anahtar", pronunciation: "YA-ve" },
                { target: "La recepción", native: "Resepsiyon", pronunciation: "re-sep-SION" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Soru Sorma: Hay vs Tiene ❓", rules: [
                { rule: "Hay (Var mı?)", explanation: "Genel olarak bir şeyin varlığını sormak için.", examples: ["¿**Hay** piscina? (Havuz var mı?)", "¿**Hay** wifi gratis? (Ücretsiz wifi var mı?)"] },
                { rule: "Tiene (Var mı/Sahip mi?)", explanation: "Odanın veya otelin bir özelliği olup olmadığını sormak için.", examples: ["¿La habitación **tiene** baño? (Odanın banyosu var mı?)"] }
            ]
        },
        {
            id: 4, type: "example", title: "Check-in Diyalogu", dialogue: [
                { speaker: "Tú", text: "Tengo una reserva a nombre de García.", translation: "García adına rezervasyonum var." },
                { speaker: "Recepcionista", text: "Sí, habitación 305. Aquí está su llave.", translation: "Evet, oda 305. İşte anahtarınız." }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Tengo una reserva = Rezervasyonum var", "¿El desayuno está incluido? = Kahvaltı dahil mi?", "¿Hay wifi gratis? = Ücretsiz wifi var mı?"] }
    ]
};

// ===== ÜNİTE 27: HAVALİMANINDA =====
const unit27Lecture: UnitLecture = {
    unitId: 27, title: "Havalimanında", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Uçuş Zamanı ✈️", content: "Check-in, güvenlik kontrolü, biniş kapısı ve uçuşla ilgili tüm ifadeler.", tip: "İspanyolca duyurular genellikle pasif yapıda olur: 'Se anuncia el vuelo...'" },
        {
            id: 2, type: "vocabulary", title: "Havalimanı Kelimeleri", words: [
                { target: "El vuelo", native: "Uçuş", pronunciation: "VUE-lo" },
                { target: "La puerta de embarque", native: "Biniş kapısı", pronunciation: "PUER-ta de em-BAR-ke" },
                { target: "El retraso", native: "Gecikme", pronunciation: "re-TRA-so" },
                { target: "La escala", native: "Aktarma", pronunciation: "es-KA-la" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Edilgen Yapı (Pasiva Refleja) 📢", rules: [
                { rule: "Se + Fiil (3. Tekil/Çoğul)", explanation: "Eylemi yapanın önemli olmadığı, genel duyurularda kullanılır.", examples: [] }
            ], points: [
                "**Se anuncia** el vuelo. (Uçuş duyuruluyor/duyurulur)",
                "**Se ruega** silencio. (Sessizlik rica olunur)",
                "**Se abren** las puertas. (Kapılar açılıyor)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Mi vuelo sale a las... = Uçuşum saat ...'da kalkıyor", "¿Cuál es la puerta? = Kapı hangisi?", "El vuelo tiene retraso = Uçuş gecikmeli"] }
    ]
};

// ===== ÜNİTE 28: DOKTORDA =====
const unit28Lecture: UnitLecture = {
    unitId: 28, title: "Doktorda", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Sağlık Önemli 🏥", content: "Şikayetlerini ifade etmek, randevu almak ve doktor talimatlarını anlamak.", tip: "'Me duele' yapısı 'Gustar' gibi çalışır - ağrıyan yer özne olur!" },
        {
            id: 2, type: "vocabulary", title: "Sağlık Kelimeleri", words: [
                { target: "El síntoma", native: "Semptom", pronunciation: "SIN-to-ma" },
                { target: "La fiebre", native: "Ateş", pronunciation: "FIE-bre" },
                { target: "El dolor", native: "Ağrı", pronunciation: "do-LOR" },
                { target: "La receta", native: "Reçete", pronunciation: "re-SE-ta" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Ağrı İfade Etmek: Doler 🤕", rules: [
                { rule: "Yapı: Zamir + Doler", explanation: "Doler fiili, ağrıyan şeye göre çekime girer, kişiye göre değil!", examples: [] }
            ], points: [
                "**Me duele** la cabeza. (Başım ağrıyor - Baş TEKİL olduğu için 'duele')",
                "**Me duelen** los pies. (Ayaklarım ağrıyor - Ayaklar ÇOĞUL olduğu için 'duelen')",
                "**Le duele** el brazo. (Onun kolu ağrıyor)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Me duele... = ...ağrıyor", "Tengo fiebre = Ateşim var", "Necesito una receta = Reçeteye ihtiyacım var"] }
    ]
};

// ===== ÜNİTE 29: ECZANEDE =====
const unit29Lecture: UnitLecture = {
    unitId: 29, title: "Eczanede", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "İlaç Almak 💊", content: "Eczanede ilaç istemek, dozaj sormak ve yan etkiler hakkında bilgi almak.", tip: "İspanya'da eczaneler yeşil haç işaretiyle belirtilir ve nöbetçi eczane sistemi vardır." },
        {
            id: 2, type: "vocabulary", title: "Eczane Kelimeleri", words: [
                { target: "El medicamento", native: "İlaç", pronunciation: "me-di-ka-MEN-to" },
                { target: "El jarabe", native: "Şurup", pronunciation: "ha-RA-be" },
                { target: "Las pastillas", native: "Haplar", pronunciation: "pas-TI-yas" },
                { target: "La pomada", native: "Merhem", pronunciation: "po-MA-da" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Tavsiye ve İzin ⚠️", rules: [
                { rule: "Deber (Tavsiye)", explanation: "İlaç kullanımı hakkında tavsiye verirken: 'Debe tomar...' (Almalısınız)", examples: [] },
                { rule: "Poder (İzin)", explanation: "Soru sorarken: '¿Puedo tomar...?' (Alabilir miyim?)", examples: [] }
            ], points: [
                "**Debe tomar** agua. (Su içmelisiniz)",
                "**No debe beber** alcohol. (Alkol içmemelisiniz)",
                "¿**Puedo** tomarlo con comida? (Yemekle alabilir miyim?)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Necesito algo para... = ... için bir şey istiyorum", "¿Tiene efectos secundarios? = Yan etkileri var mı?", "¿Cómo debo tomarlo? = Nasıl almalıyım?"] }
    ]
};

// ===== ÜNİTE 30: MESLEKLER 2 =====
// ===== ÜNİTE 30: MESLEKLER 2 =====
const unit30Lecture: UnitLecture = {
    unitId: 30, title: "İleri Meslekler", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "İş Dünyası 💼", content: "A1'de temel meslekleri öğrendin. Şimdi detay verme zamanı: Yer, Sektör ve Geçici İşler.", tip: "Ne iş yapıyorsun? = ¿A qué te dedicas?" },
        {
            id: 2, type: "vocabulary", title: "Özel Meslekler", words: [
                { target: "Desarrollador de videojuegos", native: "Oyun Geliştiricisi", pronunciation: "de-sa-rro-lla-DOR" },
                { target: "El estadístico", native: "İstatistikçi", pronunciation: "es-ta-DÍS-ti-co" },
                { target: "El ingeniero", native: "Mühendis", pronunciation: "in-he-NIE-ro" },
                { target: "El jubilado", native: "Emekli", pronunciation: "hu-bi-LA-do" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Meslek Kalıpları 🗣️", rules: [
                { rule: "Ser + Meslek (UN yok!)", explanation: "Mesleği söylerken 'bir' (un/una) KULLANILMAZ! (Soy ingeniero)", examples: [] },
                { rule: "Trabajar EN... (Yer/Sektör)", explanation: "Nerede çalıştığını söylemek için: 'Trabajo en una oficina' veya 'Trabajo en turismo'", examples: [] },
                { rule: "Estar DE... (Geçici)", explanation: "Geçici işler için: 'Estoy de camarero' (Garsonluk yapıyorum)", examples: [] }
            ], points: [
                "**Soy** estudiante. (Öğrenciyim - UN yok)",
                "Trabajo **en** ventas. (Satışta çalışıyorum)",
                "Estoy **de** camarero. (Garsonluk yapıyorum)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Soy... = ...ım/im", "Trabajo en... = ...de çalışıyorum", "Estoy de... = ...olarak çalışıyorum (geçici)"] }
    ]
};

// ===== ÜNİTE 31: İŞ GÖRÜŞMESİ =====
const unit31Lecture: UnitLecture = {
    unitId: 31, title: "İş Görüşmesi", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Mülakat Zamanı 🤝", content: "CV hazırlamak, deneyimlerden bahsetmek ve mülakat sorularını cevaplamak.", tip: "Geçmiş deneyimlerden bahsederken 'He trabajado' (Çalıştım) yapısı kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Mülakat Kelimeleri", words: [
                { target: "El currículum", native: "CV", pronunciation: "ku-rri-KU-lum" },
                { target: "La entrevista", native: "Mülakat", pronunciation: "en-tre-VIS-ta" },
                { target: "La experiencia", native: "Deneyim", pronunciation: "eks-pe-RIEN-sia" },
                { target: "El salario", native: "Maaş", pronunciation: "sa-LA-rio" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Pretérito Perfecto (Yakın Geçmiş) 📜", rules: [
                { rule: "Haber + Participio", explanation: "Geçmiş deneyimleri anlatmak için (zamanı belirsiz).", examples: [] }
            ], points: [
                "Yo **he** trabajado",
                "Tú **has** estudiado",
                "Él **ha** vivido",
                "Nosotros **hemos** aprendido",
                "Ellos **han** escrito"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["He trabajado en... = ...'de çalıştım", "Tengo experiencia en... = ... konusunda deneyimim var", "Mis puntos fuertes son... = Güçlü yönlerim..."] }
    ]
};

// ===== ÜNİTE 32: TELEFONDA =====
const unit32Lecture: UnitLecture = {
    unitId: 32, title: "Telefon Konuşması", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Telefonda İletişim 📞", content: "Profesyonel telefon görüşmeleri yapmak, mesaj bırakmak ve randevu almak.", tip: "İspanyolca'da telefonu açarken '¿Dígame?' veya '¿Sí?' denir." },
        {
            id: 2, type: "vocabulary", title: "Telefon Kelimeleri", words: [
                { target: "La llamada", native: "Arama", pronunciation: "ya-MA-da" },
                { target: "El mensaje", native: "Mesaj", pronunciation: "men-SA-he" },
                { target: "La extensión", native: "Dahili numara", pronunciation: "eks-ten-SION" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Kibar İstekler: Poder 🙏", rules: [
                { rule: "¿Podría...?", explanation: "Poder fiilinin koşullu kipi. Telefonda bir şey isterken çok kullanılır.", examples: [] }
            ], points: [
                "¿**Podría** hablar con Juan? (Juan ile görüşebilir miyim?)",
                "¿**Podría** dejar un mensaje? (Mesaj bırakabilir miyim?)",
                "¿**Podría** repetir, por favor? (Tekrar edebilir misiniz?)"
            ]
        },
        {
            id: 4, type: "example", title: "Telefon Diyalogu", dialogue: [
                { speaker: "Recepcionista", text: "¿Dígame?", translation: "Buyurun?" },
                { speaker: "Tú", text: "Buenos días. ¿Puedo hablar con el Sr. García?", translation: "Günaydın. Bay García ile görüşebilir miyim?" },
                { speaker: "Recepcionista", text: "Un momento, por favor.", translation: "Bir dakika lütfen." }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["¿Puedo hablar con...? = ... ile görüşebilir miyim?", "¿De parte de quién? = Kim arıyor?", "Le devolveré la llamada = Sizi geri arayacağım"] }
    ]
};

// ===== ÜNİTE 33: E-POSTA YAZMA =====
const unit33Lecture: UnitLecture = {
    unitId: 33, title: "Resmi E-posta", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Profesyonel Yazışma ✉️", content: "Resmi e-posta formatı, açılış ve kapanış ifadeleri, ek dosya bildirme.", tip: "İspanyolca resmi yazışmalarda 'Usted' formu kullanılır." },
        {
            id: 2, type: "vocabulary", title: "E-posta Kelimeleri", words: [
                { target: "El asunto", native: "Konu", pronunciation: "a-SUN-to" },
                { target: "El adjunto", native: "Ek dosya", pronunciation: "ad-HUN-to" },
                { target: "El destinatario", native: "Alıcı", pronunciation: "des-ti-na-TA-rio" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Yazışma Kalıpları ✍️", rules: [
                { rule: "Açılışlar", explanation: "Kime yazdığınıza göre değişir.", examples: ["Estimado Señor (Sayın Bay)", "Estimada Señora (Sayın Bayan)"] },
                { rule: "Kapanışlar", explanation: "Saygılarımla demek için.", examples: ["Atentamente", "Cordialmente", "Un cordial saludo"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Le escribo en relación con... = ... ile ilgili yazıyorum", "Adjunto encontrará... = Ekte bulacaksınız", "Quedo a su disposición = Emrinize amadeyim"] }
    ]
};

// ===== ÜNİTE 34: FİKİR BEYAN ETME (MAPPING: UNIT 44) =====
const unit34Lecture: UnitLecture = {
    unitId: 34, title: "Fikirler ve Düşünceler", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Ne Düşünüyorsun? 🤔", content: "Kendi fikirlerini ifade etmek, başkalarına sormak ve katıldığını/katılmadığını söylemek.", tip: "En yaygın kalıp 'Creo que...' (Bence/Sanırım) yapısıdır." },
        {
            id: 2, type: "vocabulary", title: "Fikir Kelimeleri", words: [
                { target: "La opinión", native: "Fikir/Görüş", pronunciation: "o-pi-NION" },
                { target: "La idea", native: "Fikir/Düşünce", pronunciation: "i-DEA" },
                { target: "El acuerdo", native: "Anlaşma/Katılma", pronunciation: "a-KUER-do" },
                { target: "La verdad", native: "Gerçek/Doğru", pronunciation: "ver-DAD" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Fikir Söyleme Kalıpları 🗣️", rules: [
                { rule: "Creo que...", explanation: "Sanırım / Bence...", examples: ["Creo que es fácil (Bence kolay)"] },
                { rule: "Pienso que...", explanation: "Düşünüyorum ki...", examples: ["Pienso que tienes razón (Haklı olduğunu düşünüyorum)"] },
                { rule: "Estoy de acuerdo", explanation: "Katılıyorum.", examples: ["Estoy de acuerdo contigo (Sana katılıyorum)"] }
            ], points: [
                "**Creo que** sí. (Sanırım evet)",
                "**Creo que** no. (Sanmıyorum)",
                "No estoy de acuerdo. (Katılmıyorum)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["¿Qué piensas? = Ne düşünüyorsun?", "Creo que es... = Bence o...", "Tienes razón = Haklısın"] }
    ]
};

// ===== ÜNİTE 35: KARAKTER ÖZELLİKLERİ (MAPPING: UNIT 45) =====
const unit35Lecture: UnitLecture = {
    unitId: 35, title: "Kişilik ve Karakter Analizi", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "İnsan Sarrafı Olmak 🧐", content: "İnsanların karakterini analiz etmek, görünüşün ötesine geçmek.", tip: "Dış görünüş için 'Parecer' (Gibi görünmek) kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Zıt Kutuplar", words: [
                { target: "Generoso ↔ Tacaño", native: "Cömert ↔ Cimri", pronunciation: "he-ne-RO-so / ta-KA-nyo" },
                { target: "Valiente ↔ Cobarde", native: "Cesur ↔ Korkak", pronunciation: "ba-LIEN-te / ko-BAR-de" },
                { target: "Hablador ↔ Callado", native: "Konuşkan ↔ Sessiz", pronunciation: "a-bla-DOR / ka-YA-do" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Karakter Analizi Kalıpları 🧠", rules: [
                { rule: "Parecer + Sıfat", explanation: "... gibi görünmek.", examples: ["Parece serio pero es divertido (Ciddi görünüyor ama eğlenceli)"] },
                { rule: "Caer bien/mal", explanation: "Birine kanı ısınmak (sevmek).", examples: ["Me cae bien Ana (Ana'yı sevdim)", "Me cae mal tu jefe (Patronunu sevmedim)"] }
            ], points: [
                "**Parece** tímido. (Utangaç görünüyor)",
                "No seas **tacaño**. (Cimri olma)",
                "Me **cae** muy bien. (Onu çok sevdim)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Parecer = Görünmek", "Caer bien = Sevmek (karakter)", "Generoso = Cömert"] }
    ]
};


// ===== ÜNİTE 46: GELECEK PLANLARI =====
const unit46Lecture: UnitLecture = {
    unitId: 46, title: "Gelecek Planları", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Geleceğe Bakış! 🔮", content: "Yarın, haftaya veya seneye ne yapacağını anlatmayı öğreniyoruz.", tip: "Tek bir formül her şeyi çözer: Voy a... (Yapacağım)" },
        {
            id: 2, type: "grammar", title: "Sihirli Formül: IR A + FİİL ✨", rules: [
                { rule: "Adım 1: IR Çekimi", explanation: "Voy, Vas, Va, Vamos, Vais, Van", examples: [] },
                { rule: "Adım 2: + A", explanation: "Araya mutlaka 'a' koy.", examples: [] },
                { rule: "Adım 3: Mastar Fiil", explanation: "Yapacağın şeyi ekle (Comer, Dormir...).", examples: ["Voy a comer (Yiyeceğim)", "Vas a dormir (Uyuyacaksın)"] }
            ], points: [
                "Voy a viajar. (Seyahat edeceğim)",
                "Vamos a ganar. (Kazanacağız)",
                "Va a llover. (Yağmur yağacak)"
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Gelecek Zaman Kelimeleri 📅", words: [
                { target: "Mañana", native: "Yarın", pronunciation: "ma-NYA-na" },
                { target: "Luego", native: "Sonra", pronunciation: "LUE-go" },
                { target: "La semana que viene", native: "Gelecek hafta", pronunciation: "la se-MA-na ke BIE-ne" },
                { target: "El año que viene", native: "Gelecek yıl", pronunciation: "el A-nyo ke BIE-ne" }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Voy a... = ... yapacağım", "Vamos a... = ... yapacağız", "Mañana = Yarın"] }
    ]
};


// ===== ÜNİTE 47: EMİR KİPİ (TÚ) =====
const unit47Lecture: UnitLecture = {
    unitId: 47, title: "Arkadaşça Emirler", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Patron Sensin! 😎", content: "Arkadaşına emir vermeyi veya tavsiyede bulunmayı öğreniyoruz.", tip: "Sen diye hitap ederken, fiilin 'O' (3. tekil) halini kullanırız!" },
        {
            id: 2, type: "grammar", title: "Kural: Üçüncü Tekil Şahıs 👇", rules: [
                { rule: "Hablar → Habla", explanation: "Sen konuş! (Tıpkı 'O konuşuyor' gibi)", examples: ["¡Habla conmigo! (Benimle konuş)"] },
                { rule: "Comer → Come", explanation: "Sen ye! (Tıpkı 'O yiyor' gibi)", examples: ["¡Come la sopa! (Çorbayı ye)"] },
                { rule: "Escribir → Escribe", explanation: "Sen yaz!", examples: ["¡Escribe tu nombre!"] }
            ], points: []
        },
        {
            id: 3, type: "vocabulary", title: "Düzensizler: Vin Diesel Grubu 🔥", words: [
                { target: "Ven", native: "Gel", pronunciation: "BEN" },
                { target: "Di", native: "Söyle", pronunciation: "Dİ" },
                { target: "Sal", native: "Çık", pronunciation: "SAL" },
                { target: "Haz", native: "Yap", pronunciation: "AS" },
                { target: "Ten", native: "Al/Tut", pronunciation: "TEN" },
                { target: "Ve", native: "Git", pronunciation: "BE" },
                { target: "Pon", native: "Koy", pronunciation: "PON" }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Habla = Konuş!", "Ven = Gel!", "Haz = Yap!", "!Mira! = Bak!"] }
    ]
};


// ===== ÜNİTE 48: HAVA TAHMİNİ =====
const unit48Lecture: UnitLecture = {
    unitId: 48, title: "Gelecek Hava Tahmini", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Yarın Hava Nasıl Olacak? 🌦️", content: "Gelecek zaman kalıbını hava durumu ile birleştiriyoruz.", tip: "Va a... (Olacak) kalıbını kullanacağız." },
        {
            id: 2, type: "grammar", title: "Gelecek Tahmin Kalıpları", rules: [
                { rule: "Va a llover ☔", explanation: "Yağmur yağacak (Llueve'den)", examples: [] },
                { rule: "Va a hacer sol ☀️", explanation: "Güneşli olacak (Hace sol'dan)", examples: [] },
                { rule: "Va a hacer frío ❄️", explanation: "Soğuk olacak", examples: [] }
            ], points: [
                "Mañana va a llover.",
                "El domingo va a hacer sol.",
                "No salgas, va a hacer mucho frío."
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Mevsimler ve Zaman", words: [
                { target: "La primavera", native: "İlkbahar", pronunciation: "pri-ma-BE-ra" },
                { target: "El verano", native: "Yaz", pronunciation: "be-RA-no" },
                { target: "El otoño", native: "Sonbahar", pronunciation: "o-TO-nyo" },
                { target: "El invierno", native: "Kış", pronunciation: "im-BIER-no" }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Va a llover = Yağmur yağacak", "Va a hacer sol = Güneşli olacak", "Mañana = Yarın"] }
    ]
};

// ===== ÜNİTE 39: TEKNOLOJİ =====
const unit39Lecture: UnitLecture = {
    unitId: 39, title: "Teknoloji", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Dijital Dünya 💻📱", content: "Bilgisayar, telefon, internet ve teknoloji sorunlarından bahsetmek.", tip: "Ordenador = Bilgisayar (İspanya), Computadora = Bilgisayar (Latin Amerika)" },
        {
            id: 2, type: "vocabulary", title: "Teknoloji Kelimeleri", words: [
                { target: "El ordenador", native: "Bilgisayar", pronunciation: "or-de-na-DOR" },
                { target: "El portátil", native: "Dizüstü", pronunciation: "por-TA-til" },
                { target: "La contraseña", native: "Şifre", pronunciation: "kon-tra-SE-nya" },
                { target: "La pantalla", native: "Ekran", pronunciation: "pan-TA-ya" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Teknoloji Fiilleri 🔧", rules: [
                { rule: "Fiil Listesi", explanation: "Hepsi düzenli fiillerdir.", examples: ["Descargar (İndirmek)", "Guardar (Kaydetmek)", "Buscar (Aramak)"] }
            ], points: [
                "Voy a **descargar** el archivo. (Dosyayı indireceğim)",
                "Tengo que **guardar** la foto. (Fotoğrafı kaydetmeliyim)",
                "Necesito **reiniciar**. (Yeniden başlatmam lazım)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Mi ordenador no funciona = Bilgisayarım çalışmıyor", "¿Cuál es la contraseña del wifi? = Wifi şifresi ne?", "Necesito cargar mi móvil = Telefonumu şarj etmem lazım"] }
    ]
};

// ===== ÜNİTE 40: SOSYAL MEDYA =====
const unit40Lecture: UnitLecture = {
    unitId: 40, title: "Sosyal Medya", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Sosyal Ağlar 📲", content: "Sosyal medya platformları, paylaşım, takip etme ve online etkileşim.", tip: "A2 seviyesini de bitirdin! Artık günlük konuşmalarda rahatsın." },
        {
            id: 2, type: "vocabulary", title: "Sosyal Medya Kelimeleri", words: [
                { target: "El perfil", native: "Profil", pronunciation: "per-FIL" },
                { target: "El seguidor", native: "Takipçi", pronunciation: "se-gi-DOR" },
                { target: "Publicar", native: "Yayınlamak", pronunciation: "pu-bli-KAR" },
                { target: "Compartir", native: "Paylaşmak", pronunciation: "kom-par-TIR" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Sosyal Medya Fiilleri 📱", rules: [
                { rule: "Seguir (Takip Etmek)", explanation: "E-I ses değişimi olan düzensiz bir fiildir.", examples: [] }
            ], points: [
                "Yo **sigo** (Takip ediyorum - Düzensiz!)",
                "Tú sigues",
                "Él sigue",
                "Nosotros seguimos",
                "Ellos siguen"
            ]
        },
        { id: 4, type: "summary", title: "🎉 Tebrikler! A2 Tamamlandı!", points: ["A2 Seviyesini Bitirdin!", "Günlük konuşmalarda rahatsın", "Seyahat, iş, sağlık konularında iletişim kurabilirsin", "B1'e hazırsın!"], cta: "Sertifikanı al!" }
    ]
};

// Ünite ID'sine göre A2 lecture getir (ID: 31-60) - Güncellenmiş aralık
export function getA2LectureForUnit(unitId: number): UnitLecture {
    // Unit ID'leri 31-60 arasında, içeride unit21-40 lecture'larını kullan
    const idMapping: { [key: number]: UnitLecture } = {
        // A2 Temel Üniteler (31-40)
        31: unit21Lecture, 32: unit22Lecture, 33: unit23Lecture, 34: unit24Lecture, 35: unit25Lecture,
        36: unit26Lecture, 37: unit27Lecture, 38: unit28Lecture, 39: unit29Lecture, 40: unit30Lecture,

        // A2 Orta Üniteler (41-50)
        41: unit31Lecture, 42: unit32Lecture, 43: unit33Lecture, 44: unit34Lecture, 45: unit35Lecture,
        46: unit46Lecture, 47: unit47Lecture, 48: unit48Lecture, 49: unit39Lecture, 50: unit40Lecture,

        // A2 İleri Üniteler (Placeholder)
        51: unit21Lecture, 52: unit22Lecture, 53: unit23Lecture, 54: unit24Lecture, 55: unit25Lecture,
        56: unit26Lecture, 57: unit27Lecture, 58: unit28Lecture, 59: unit29Lecture, 60: unit30Lecture
    };
    return idMapping[unitId] || unit21Lecture;
}

