// SteadyShell - Scene Mode Scenarios
// 20 senaryo, 6 kategori

export interface Scene {
    id: string;
    icon: string;
    title: string;
    titleTr: string;
    category: string;
    description: string;
    systemPrompt: string;
}

export interface SceneCategory {
    id: string;
    title: string;
    icon: string;
    scenes: Scene[];
}

// Seviye açıklamaları
export const LEVEL_PROMPTS: Record<string, string> = {
    A1: "Çok basit ve kısa cümleler kur. Temel kelimeler kullan. Yavaş ve anlaşılır ol.",
    A2: "Basit ama tam cümleler kur. Günlük kelimeler kullan. Net ve anlaşılır ol.",
    B1: "Normal uzunlukta cümleler kur. Çeşitli kelime dağarcığı kullan. Doğal sohbet et.",
    B2: "Karmaşık ve doğal cümleler kur. Zengin kelime dağarcığı ve deyimler kullan. Kültürel incelikler ekle."
};

// Dil isimleri
export const LANGUAGE_NAMES: Record<string, { native: string, turkish: string }> = {
    es: { native: "español", turkish: "İspanyolca" },
    en: { native: "English", turkish: "İngilizce" },
    fr: { native: "français", turkish: "Fransızca" }
};

// 20 Senaryo - 6 Kategori
export const SCENE_CATEGORIES: SceneCategory[] = [
    {
        id: "daily",
        title: "Günlük Hayat",
        icon: "🏠",
        scenes: [
            {
                id: "cafe",
                icon: "☕",
                title: "At the Café",
                titleTr: "Kafede Sipariş",
                category: "daily",
                description: "Bir kafede sipariş ver, menü sor",
                systemPrompt: "bir kafede garson"
            },
            {
                id: "restaurant",
                icon: "🍕",
                title: "At the Restaurant",
                titleTr: "Restoranda Yemek",
                category: "daily",
                description: "Restoranda yemek siparişi ver, hesap iste",
                systemPrompt: "bir restoranda garson"
            },
            {
                id: "supermarket",
                icon: "🛒",
                title: "At the Supermarket",
                titleTr: "Süpermarkette Alışveriş",
                category: "daily",
                description: "Ürün sor, fiyat öğren, kasada ödeme yap",
                systemPrompt: "bir süpermarkette kasiyer"
            },
            {
                id: "bakery",
                icon: "🥖",
                title: "At the Bakery",
                titleTr: "Fırında Ekmek Alma",
                category: "daily",
                description: "Ekmek ve pastane ürünleri al",
                systemPrompt: "bir fırında satıcı"
            },
            {
                id: "market",
                icon: "🥕",
                title: "At the Market",
                titleTr: "Pazarda Alışveriş",
                category: "daily",
                description: "Taze sebze meyve al, pazarlık yap",
                systemPrompt: "bir pazarda sebze meyve satıcısı"
            }
        ]
    },
    {
        id: "transport",
        title: "Ulaşım",
        icon: "🚕",
        scenes: [
            {
                id: "taxi",
                icon: "🚕",
                title: "In a Taxi",
                titleTr: "Takside",
                category: "transport",
                description: "Adres ver, ücret sor, yol tarifi al",
                systemPrompt: "bir taksi şoförü"
            },
            {
                id: "bus",
                icon: "🚌",
                title: "Public Transport",
                titleTr: "Otobüs/Metro",
                category: "transport",
                description: "Bilet al, durak sor, aktarma öğren",
                systemPrompt: "bir otobüs bilet satıcısı veya yolcu"
            },
            {
                id: "train",
                icon: "🚉",
                title: "Train Station",
                titleTr: "Tren İstasyonu",
                category: "transport",
                description: "Tren bileti al, peron sor, sefer saati öğren",
                systemPrompt: "tren istasyonunda bilet satıcısı"
            },
            {
                id: "directions",
                icon: "🗺️",
                title: "Asking Directions",
                titleTr: "Yol Sorma",
                category: "transport",
                description: "Yol tarifi al, bir yere nasıl gidileceğini sor",
                systemPrompt: "sokakta yardımsever bir yaya"
            }
        ]
    },
    {
        id: "travel",
        title: "Seyahat",
        icon: "✈️",
        scenes: [
            {
                id: "hotel",
                icon: "🏨",
                title: "Hotel Check-in",
                titleTr: "Otel Check-in",
                category: "travel",
                description: "Otel rezervasyonu, oda anahtarı, hizmetler",
                systemPrompt: "bir otelde resepsiyonist"
            },
            {
                id: "airport",
                icon: "✈️",
                title: "At the Airport",
                titleTr: "Havalimanı",
                category: "travel",
                description: "Check-in, bagaj, kapı sorma",
                systemPrompt: "havalimanında check-in görevlisi"
            },
            {
                id: "tour",
                icon: "🎒",
                title: "With a Tour Guide",
                titleTr: "Tur Rehberiyle",
                category: "travel",
                description: "Tur hakkında bilgi al, soru sor",
                systemPrompt: "bir tur rehberi"
            },
            {
                id: "museum",
                icon: "🏛️",
                title: "At the Museum",
                titleTr: "Müze/Gezi",
                category: "travel",
                description: "Bilet al, sergi hakkında bilgi al",
                systemPrompt: "bir müzede bilet satıcısı veya rehber"
            }
        ]
    },
    {
        id: "health",
        title: "Sağlık",
        icon: "🏥",
        scenes: [
            {
                id: "doctor",
                icon: "🏥",
                title: "Doctor's Office",
                titleTr: "Doktorda",
                category: "health",
                description: "Şikayetini anlat, randevu al",
                systemPrompt: "bir doktor veya klinik resepsiyonisti"
            },
            {
                id: "pharmacy",
                icon: "💊",
                title: "At the Pharmacy",
                titleTr: "Eczanede",
                category: "health",
                description: "İlaç sor, reçete göster",
                systemPrompt: "bir eczacı"
            }
        ]
    },
    {
        id: "social",
        title: "Sosyal",
        icon: "👋",
        scenes: [
            {
                id: "meeting",
                icon: "👋",
                title: "Meeting Someone",
                titleTr: "Yeni Biriyle Tanışma",
                category: "social",
                description: "Kendini tanıt, sohbet başlat",
                systemPrompt: "yeni tanıştığın biri"
            },
            {
                id: "party",
                icon: "🎉",
                title: "At a Party",
                titleTr: "Partide Sohbet",
                category: "social",
                description: "Small talk yap, ilgi alanlarını paylaş",
                systemPrompt: "bir partide tanıştığın biri"
            },
            {
                id: "phone",
                icon: "📞",
                title: "Phone Call",
                titleTr: "Telefon Görüşmesi",
                category: "social",
                description: "Telefonda randevu al, bilgi sor",
                systemPrompt: "telefonda konuştuğun biri (işletme veya arkadaş)"
            }
        ]
    },
    {
        id: "business",
        title: "İş & Resmi",
        icon: "💼",
        scenes: [
            {
                id: "interview",
                icon: "💼",
                title: "Job Interview",
                titleTr: "İş Görüşmesi",
                category: "business",
                description: "Kendini tanıt, deneyimlerinden bahset",
                systemPrompt: "bir iş görüşmesinde mülakatçı (HR yöneticisi)"
            },
            {
                id: "bank",
                icon: "🏦",
                title: "At the Bank",
                titleTr: "Banka İşlemleri",
                category: "business",
                description: "Hesap aç, para çek, döviz bozdur",
                systemPrompt: "bir bankada müşteri temsilcisi"
            }
        ]
    },
    {
        id: "fr-a2-practice",
        title: "🇫🇷 Fransızca A2",
        icon: "📚",
        scenes: [
            { id: "unit-352", icon: "🎉", title: "Inviter", titleTr: "Davet Etme", category: "fr-a2-practice", description: "Ça te dit, Tu veux, Avec plaisir", systemPrompt: "fr-a2-352" },
            { id: "unit-353", icon: "🙏", title: "S'excuser", titleTr: "Özür Dileme", category: "fr-a2-practice", description: "Pardon, Désolé, C'est ma faute", systemPrompt: "fr-a2-353" },
            { id: "unit-354", icon: "🗺️", title: "Demander son chemin", titleTr: "Yol Tarifi", category: "fr-a2-practice", description: "Tournez, Allez tout droit", systemPrompt: "fr-a2-354" },
            { id: "unit-355", icon: "🏙️", title: "La vie en ville", titleTr: "Şehir Tanıtımı", category: "fr-a2-practice", description: "Il y a, À côté de", systemPrompt: "fr-a2-355" },
            { id: "unit-356", icon: "🌍", title: "Différences culturelles", titleTr: "Kültürel Farklar", category: "fr-a2-practice", description: "Chez nous, En France", systemPrompt: "fr-a2-356" },
            { id: "unit-357", icon: "📖", title: "La vie scolaire", titleTr: "Eğitim Hayatı", category: "fr-a2-practice", description: "Passer un examen, Réussir", systemPrompt: "fr-a2-357" },
            { id: "unit-358", icon: "💼", title: "La vie professionnelle", titleTr: "İş Hayatı", category: "fr-a2-practice", description: "Je travaille, Je dois", systemPrompt: "fr-a2-358" },
            { id: "unit-359", icon: "💻", title: "La technologie", titleTr: "Teknoloji Kullanımı", category: "fr-a2-practice", description: "Internet, Télécharger", systemPrompt: "fr-a2-359" }
        ]
    },
    {
        id: "fr-a1-practice",
        title: "🇫🇷 Fransızca A1",
        icon: "🌱",
        scenes: [
            { id: "unit-301", icon: "👋", title: "Bonjour", titleTr: "Merhaba", category: "fr-a1-practice", description: "Selamlaşma ve tanışma", systemPrompt: "fr-a1-301" },
            { id: "unit-302", icon: "🔤", title: "Alphabet", titleTr: "Alfabe ve Sesler", category: "fr-a1-practice", description: "Fransızca sesletim", systemPrompt: "fr-a1-302" },
            { id: "unit-303", icon: "🔢", title: "Nombres 0-20", titleTr: "Sayılar (0-20)", category: "fr-a1-practice", description: "Temel sayılar", systemPrompt: "fr-a1-303" },
            { id: "unit-304", icon: "🎨", title: "Couleurs", titleTr: "Renkler", category: "fr-a1-practice", description: "Temel renkler", systemPrompt: "fr-a1-304" },
            { id: "unit-305", icon: "👨‍👩‍👧", title: "Famille", titleTr: "Aile Bireyleri", category: "fr-a1-practice", description: "Aile tanıtımı", systemPrompt: "fr-a1-305" },
            { id: "unit-306", icon: "📅", title: "Jours et mois", titleTr: "Günler ve Aylar", category: "fr-a1-practice", description: "Zaman kavramları", systemPrompt: "fr-a1-306" },
            { id: "unit-307", icon: "🌍", title: "Pays", titleTr: "Ülkeler ve Milletler", category: "fr-a1-practice", description: "Nerelisin?", systemPrompt: "fr-a1-307" },
            { id: "unit-308", icon: "👔", title: "Métiers", titleTr: "Meslekler", category: "fr-a1-practice", description: "Ne iş yapıyorsun?", systemPrompt: "fr-a1-308" },
            { id: "unit-309", icon: "🏠", title: "Maison", titleTr: "Evimiz", category: "fr-a1-practice", description: "Ev ve odalar", systemPrompt: "fr-a1-309" },
            { id: "unit-310", icon: "🏫", title: "Classe", titleTr: "Sınıfta", category: "fr-a1-practice", description: "Sınıf eşyaları", systemPrompt: "fr-a1-310" },
            { id: "unit-311", icon: "🦵", title: "Corps", titleTr: "Vücudumuz", category: "fr-a1-practice", description: "Vücut bölümleri", systemPrompt: "fr-a1-311" },
            { id: "unit-312", icon: "👕", title: "Vêtements", titleTr: "Giysiler", category: "fr-a1-practice", description: "Kıyafetler", systemPrompt: "fr-a1-312" },
            { id: "unit-313", icon: "🍎", title: "Nourriture", titleTr: "Yiyecekler", category: "fr-a1-practice", description: "Temel gıdalar", systemPrompt: "fr-a1-313" },
            { id: "unit-314", icon: "☕", title: "Boissons", titleTr: "İçecekler", category: "fr-a1-practice", description: "Sıcak ve soğuk", systemPrompt: "fr-a1-314" },
            { id: "unit-315", icon: "🕐", title: "Quelle heure", titleTr: "Saat Kaç?", category: "fr-a1-practice", description: "Saati sorma", systemPrompt: "fr-a1-315" },
            { id: "unit-316", icon: "☀️", title: "Routine", titleTr: "Günlük Rutin", category: "fr-a1-practice", description: "Sabah rutini", systemPrompt: "fr-a1-316" },
            { id: "unit-317", icon: "⚽", title: "Loisirs", titleTr: "Hobiler", category: "fr-a1-practice", description: "Boş zaman", systemPrompt: "fr-a1-317" },
            { id: "unit-318", icon: "☁️", title: "Météo", titleTr: "Hava Durumu", category: "fr-a1-practice", description: "Hava nasıl?", systemPrompt: "fr-a1-318" },
            { id: "unit-319", icon: "😊", title: "Émotions", titleTr: "Duygular", category: "fr-a1-practice", description: "Nasıl hissediyorsun?", systemPrompt: "fr-a1-319" },
            { id: "unit-320", icon: "🗺️", title: "Directions", titleTr: "Şehirde Yönler", category: "fr-a1-practice", description: "Adres tarifi", systemPrompt: "fr-a1-320" }
        ]
    },
    {
        id: "es-a1-practice",
        title: "🇪🇸 İspanyolca A1",
        icon: "🌱",
        scenes: [
            { id: "unit-1", icon: "👋", title: "Hola", titleTr: "Selamlaşma ve Tanışma", category: "es-a1-practice", description: "Merhaba, nasılsın", systemPrompt: "es-a1-1" },
            { id: "unit-2", icon: "🔢", title: "Números 1-20", titleTr: "Sayılar 1-20", category: "es-a1-practice", description: "Temel sayılar", systemPrompt: "es-a1-2" },
            { id: "unit-3", icon: "👨‍👩‍👧", title: "Familia", titleTr: "Aile Üyeleri", category: "es-a1-practice", description: "Anne, baba, kardeş", systemPrompt: "es-a1-3" },
            { id: "unit-4", icon: "🎨", title: "Colores", titleTr: "Renkler", category: "es-a1-practice", description: "Temel renkler", systemPrompt: "es-a1-4" },
            { id: "unit-5", icon: "🍎", title: "Comida", titleTr: "Yiyecekler", category: "es-a1-practice", description: "Meyve, sebze, et", systemPrompt: "es-a1-5" },
            { id: "unit-6", icon: "☕", title: "Bebidas", titleTr: "İçecekler", category: "es-a1-practice", description: "Su, kahve, çay", systemPrompt: "es-a1-6" },
            { id: "unit-7", icon: "📅", title: "Días y meses", titleTr: "Günler ve Aylar", category: "es-a1-practice", description: "Pazartesi, Ocak", systemPrompt: "es-a1-7" },
            { id: "unit-8", icon: "💯", title: "Números 21-100", titleTr: "Sayılar 21-100", category: "es-a1-practice", description: "İleri sayılar", systemPrompt: "es-a1-8" },
            { id: "unit-9", icon: "🏠", title: "Habitaciones", titleTr: "Ev Odaları", category: "es-a1-practice", description: "Yatak odası, mutfak", systemPrompt: "es-a1-9" },
            { id: "unit-10", icon: "🪑", title: "Muebles", titleTr: "Mobilyalar", category: "es-a1-practice", description: "Masa, sandalye", systemPrompt: "es-a1-10" },
            { id: "unit-11", icon: "🦵", title: "Cuerpo", titleTr: "Vücut Bölümleri", category: "es-a1-practice", description: "Baş, kol, bacak", systemPrompt: "es-a1-11" },
            { id: "unit-12", icon: "👕", title: "Ropa", titleTr: "Giysiler", category: "es-a1-practice", description: "Gömlek, pantolon", systemPrompt: "es-a1-12" },
            { id: "unit-13", icon: "🐕", title: "Animales", titleTr: "Hayvanlar", category: "es-a1-practice", description: "Kedi, köpek, kuş", systemPrompt: "es-a1-13" },
            { id: "unit-14", icon: "👔", title: "Profesiones", titleTr: "Meslekler 1", category: "es-a1-practice", description: "Doktor, öğretmen", systemPrompt: "es-a1-14" },
            { id: "unit-15", icon: "🏪", title: "Lugares", titleTr: "Şehirde Yerler", category: "es-a1-practice", description: "Okul, market, park", systemPrompt: "es-a1-15" },
            { id: "unit-16", icon: "🚌", title: "Transporte", titleTr: "Ulaşım Araçları", category: "es-a1-practice", description: "Araba, otobüs", systemPrompt: "es-a1-16" },
            { id: "unit-17", icon: "☀️", title: "Rutinas", titleTr: "Günlük Rutinler", category: "es-a1-practice", description: "Kalkmak, yemek", systemPrompt: "es-a1-17" },
            { id: "unit-18", icon: "🕐", title: "La hora", titleTr: "Saat Kaç?", category: "es-a1-practice", description: "Saat okuma", systemPrompt: "es-a1-18" },
            { id: "unit-19", icon: "☁️", title: "El tiempo", titleTr: "Hava Durumu", category: "es-a1-practice", description: "Güneşli, yağmurlu", systemPrompt: "es-a1-19" },
            { id: "unit-20", icon: "⚽", title: "Pasatiempos", titleTr: "Hobiler", category: "es-a1-practice", description: "Spor, müzik, sanat", systemPrompt: "es-a1-20" }
        ]
    },
    {
        id: "es-a2-practice",
        title: "🇪🇸 İspanyolca A2",
        icon: "📚",
        scenes: [
            { id: "unit-31", icon: "⏪", title: "Pretérito 1", titleTr: "Geçmiş Zaman 1", category: "es-a2-practice", description: "Pretérito indefinido", systemPrompt: "es-a2-31" },
            { id: "unit-32", icon: "⏪", title: "Pretérito 2", titleTr: "Geçmiş Zaman 2", category: "es-a2-practice", description: "Düzensiz fiiller", systemPrompt: "es-a2-32" },
            { id: "unit-33", icon: "🍽️", title: "Restaurante", titleTr: "Restoranda", category: "es-a2-practice", description: "Sipariş verme", systemPrompt: "es-a2-33" },
            { id: "unit-34", icon: "🛍️", title: "Compras", titleTr: "Alışveriş", category: "es-a2-practice", description: "Fiyat sorma", systemPrompt: "es-a2-34" },
            { id: "unit-35", icon: "✈️", title: "Viajes", titleTr: "Seyahat Planları", category: "es-a2-practice", description: "Tatil yerleri", systemPrompt: "es-a2-35" },
            { id: "unit-36", icon: "🏨", title: "Hotel", titleTr: "Otel Rezervasyonu", category: "es-a2-practice", description: "Oda ayırtma", systemPrompt: "es-a2-36" },
            { id: "unit-37", icon: "🛫", title: "Aeropuerto", titleTr: "Havalimanında", category: "es-a2-practice", description: "Uçuş bilgileri", systemPrompt: "es-a2-37" },
            { id: "unit-38", icon: "🏥", title: "Médico", titleTr: "Doktorda", category: "es-a2-practice", description: "Şikayet bildirme", systemPrompt: "es-a2-38" },
            { id: "unit-39", icon: "💊", title: "Farmacia", titleTr: "Eczanede", category: "es-a2-practice", description: "İlaç alma", systemPrompt: "es-a2-39" },
            { id: "unit-40", icon: "👔", title: "Profesiones 2", titleTr: "Meslekler 2", category: "es-a2-practice", description: "İş tanımları", systemPrompt: "es-a2-40" },
            { id: "unit-41", icon: "💼", title: "Entrevista", titleTr: "İş Görüşmesi", category: "es-a2-practice", description: "CV hazırlama", systemPrompt: "es-a2-41" },
            { id: "unit-42", icon: "📞", title: "Teléfono", titleTr: "Telefonda", category: "es-a2-practice", description: "Telefon konuşması", systemPrompt: "es-a2-42" },
            { id: "unit-43", icon: "📧", title: "Correo", titleTr: "E-posta Yazma", category: "es-a2-practice", description: "Resmi yazışma", systemPrompt: "es-a2-43" },
            { id: "unit-44", icon: "💭", title: "Opiniones", titleTr: "Fikir Beyan Etme", category: "es-a2-practice", description: "Creo que, Pienso que", systemPrompt: "es-a2-44" },
            { id: "unit-45", icon: "😊", title: "Carácter", titleTr: "Karakter Özellikleri", category: "es-a2-practice", description: "Kibar, çalışkan", systemPrompt: "es-a2-45" },
            { id: "unit-46", icon: "🔮", title: "Futuro", titleTr: "Gelecek Planları", category: "es-a2-practice", description: "Ir a + infinitivo", systemPrompt: "es-a2-46" },
            { id: "unit-47", icon: "👆", title: "Imperativo", titleTr: "Emir Kipi", category: "es-a2-practice", description: "Ven, Di, Sal, Haz", systemPrompt: "es-a2-47" },
            { id: "unit-48", icon: "🎬", title: "Cine", titleTr: "Sinema ve Dizi", category: "es-a2-practice", description: "Film türleri", systemPrompt: "es-a2-48" },
            { id: "unit-49", icon: "💻", title: "Tecnología", titleTr: "Teknoloji", category: "es-a2-practice", description: "Bilgisayar, telefon", systemPrompt: "es-a2-49" },
            { id: "unit-50", icon: "📱", title: "Redes sociales", titleTr: "Sosyal Medya", category: "es-a2-practice", description: "İnternet kullanımı", systemPrompt: "es-a2-50" }
        ]
    }
];

// Tüm senaryoları düz liste olarak al
export function getAllScenes(): Scene[] {
    return SCENE_CATEGORIES.flatMap(cat => cat.scenes);
}

// ID'ye göre senaryo bul
export function getSceneById(id: string): Scene | undefined {
    return getAllScenes().find(scene => scene.id === id);
}

// Sahne modu için sistem promptu oluştur
export function buildSceneSystemPrompt(
    language: string,
    level: string,
    scene: Scene
): string {
    const langInfo = LANGUAGE_NAMES[language];
    const levelPrompt = LEVEL_PROMPTS[level];

    // Ünite pratiği için özel prompt (tüm kategoriler için)
    const practiceCategories = ["fr-a2-practice", "fr-a1-practice", "es-a1-practice", "es-a2-practice"];
    if (practiceCategories.includes(scene.category)) {
        return buildUnitPracticePrompt(language, level, scene);
    }

    return `Sen ${scene.systemPrompt} rolündesin.
Kullanıcı ${langInfo.turkish} öğreniyor, seviyesi ${level}.

KURALLAR:
- Sohbeti ${langInfo.native} dilinde yürüt
- ${levelPrompt}
- Doğal bir sohbet ortamı oluştur
- Senaryoya uygun davran

HATA DÜZELTME (ÖNEMLİ):
Kullanıcı gramer, yazım veya kelime hatası yaparsa:
1. Önce senaryoya uygun şekilde ${langInfo.native} cevabını ver
2. Sonra TÜRKÇE olarak hata düzeltmesi yap, şu formatta:

💡 Küçük bir düzeltme:
❌ Yanlış: [kullanıcının yazdığı hatalı kısım]
✅ Doğru: [doğru ${langInfo.native} ifade]
📝 Açıklama: [TÜRKÇE gramer veya kullanım açıklaması]

SENARYO: ${scene.titleTr}
${scene.description}

Sohbeti sen başlat - ${langInfo.native} olarak merhaba de ve rol gereği ilk soruyu sor.`
}

// Ünite pratiği için özel kalıplar - Fransızca A2
const FR_A2_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "fr-a2-352": {
        scenario: "Arkadaşını bir etkinliğe davet eden biri",
        targetPhrases: ["Ça te dit de...?", "Tu veux...?", "On va...?", "Tu es libre...?", "Avec plaisir!", "D'accord!", "Bonne idée!", "Je ne peux pas", "Je suis occupé(e)"],
        example: "Ça te dit d'aller au cinéma ce soir?"
    },
    "fr-a2-353": {
        scenario: "Bir hata yapıp özür dileyen biri",
        targetPhrases: ["Je suis désolé(e)", "Pardon", "Excusez-moi", "C'est ma faute", "Je m'excuse", "Ce n'est pas grave"],
        example: "Je suis vraiment désolé, je suis en retard à cause du bus."
    },
    "fr-a2-354": {
        scenario: "Yol soran bir turist",
        targetPhrases: ["Où est...?", "Pour aller à...?", "Tournez à gauche/droite", "Allez tout droit", "C'est près/loin", "À côté de", "En face de"],
        example: "Excusez-moi, pour aller à la gare, s'il vous plaît?"
    },
    "fr-a2-355": {
        scenario: "Şehir hayatını anlatan biri",
        targetPhrases: ["Il y a...", "Il n'y a pas de...", "Dans ma ville", "Le quartier", "C'est animé/calme", "J'habite à..."],
        example: "Dans ma ville, il y a beaucoup de cafés et de restaurants."
    },
    "fr-a2-356": {
        scenario: "Kültürel farkları tartışan biri",
        targetPhrases: ["Chez nous...", "En France...", "On dit...", "C'est normal de...", "La coutume", "La tradition"],
        example: "En France, on fait la bise pour dire bonjour."
    },
    "fr-a2-357": {
        scenario: "Okul hayatından bahseden biri",
        targetPhrases: ["Passer un examen", "Réussir/Échouer", "Les cours", "Les devoirs", "Le professeur", "Étudier"],
        example: "J'ai passé mon examen la semaine dernière et j'ai réussi!"
    },
    "fr-a2-358": {
        scenario: "İş hayatından bahseden biri",
        targetPhrases: ["Je travaille comme...", "Je dois...", "Le bureau", "Les collègues", "Le patron", "Les réunions"],
        example: "Je travaille comme ingénieur. Je dois assister à beaucoup de réunions."
    },
    "fr-a2-359": {
        scenario: "Teknoloji hakkında konuşan biri",
        targetPhrases: ["Internet", "Télécharger", "Envoyer un mail", "Le mot de passe", "Se connecter", "Les réseaux sociaux"],
        example: "Je télécharge souvent des applications sur mon smartphone."
    }
};

// Fransızca A1 pratiği
const FR_A1_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "fr-a1-301": { scenario: "Yeni tanışan iki kişi", targetPhrases: ["Bonjour", "Je m'appelle...", "Comment tu t'appelles?", "Enchanté(e)", "Ça va?", "Merci"], example: "Bonjour, je m'appelle Marie. Et toi?" },
    "fr-a1-302": { scenario: "Harf sorma", targetPhrases: ["Comment ça s'écrit?", "Ça s'écrit...", "Répétez, s'il vous plaît"], example: "Comment ça s'écrit ton prénom?" },
    "fr-a1-303": { scenario: "Sayı söyleyen biri", targetPhrases: ["Un, deux, trois...", "J'ai ... ans", "Mon numéro est...", "Combien?"], example: "J'ai vingt ans." },
    "fr-a1-304": { scenario: "Renkleri tanımlayan biri", targetPhrases: ["C'est...", "De quelle couleur?", "rouge, bleu, vert, jaune", "J'aime le..."], example: "Ma couleur préférée, c'est le bleu." },
    "fr-a1-305": { scenario: "Ailesini tanıtan biri", targetPhrases: ["Ma mère", "Mon père", "Mon frère", "Ma sœur", "J'ai ... frères/sœurs", "Il/Elle s'appelle..."], example: "Ma mère s'appelle Sophie." },
    "fr-a1-306": { scenario: "Gün ve ay soran biri", targetPhrases: ["Quel jour?", "Aujourd'hui c'est...", "Lundi, mardi...", "En janvier, février..."], example: "Aujourd'hui, c'est lundi 15 mars." },
    "fr-a1-307": { scenario: "Nereli olduğunu söyleyen biri", targetPhrases: ["Je suis...", "Je viens de...", "D'où viens-tu?", "nationalités"], example: "Je suis turc, je viens d'Istanbul." },
    "fr-a1-308": { scenario: "Meslek soran biri", targetPhrases: ["Qu'est-ce que tu fais?", "Je suis...", "Je travaille comme...", "médecin, professeur..."], example: "Je suis professeur de français." },
    "fr-a1-309": { scenario: "Evini anlatan biri", targetPhrases: ["La chambre", "La cuisine", "Le salon", "La salle de bain", "Il y a...", "J'habite dans..."], example: "Dans ma maison, il y a trois chambres." },
    "fr-a1-310": { scenario: "Sınıftaki eşyaları tanımlayan biri", targetPhrases: ["Le livre", "Le cahier", "Le stylo", "Le tableau", "C'est...", "Qu'est-ce que c'est?"], example: "C'est un livre de français." },
    "fr-a1-311": { scenario: "Vücut bölümlerini gösteren biri", targetPhrases: ["La tête", "Le bras", "La jambe", "La main", "J'ai mal à..."], example: "J'ai mal à la tête." },
    "fr-a1-312": { scenario: "Giysi alan biri", targetPhrases: ["Une chemise", "Un pantalon", "Une robe", "Je porte...", "De quelle taille?"], example: "Je porte un pantalon bleu." },
    "fr-a1-313": { scenario: "Yemek yiyen biri", targetPhrases: ["J'aime...", "Je n'aime pas...", "Le pain", "Le fromage", "La viande", "Je mange..."], example: "J'aime le fromage français." },
    "fr-a1-314": { scenario: "İçecek sipariş eden biri", targetPhrases: ["Un café", "Un thé", "De l'eau", "Je voudrais...", "S'il vous plaît"], example: "Je voudrais un café, s'il vous plaît." },
    "fr-a1-315": { scenario: "Saat soran biri", targetPhrases: ["Quelle heure est-il?", "Il est...", "heures", "et demie", "moins le quart"], example: "Il est trois heures et demie." },
    "fr-a1-316": { scenario: "Günlük rutinini anlatan biri", targetPhrases: ["Je me lève à...", "Je prends le petit-déjeuner", "Je vais au travail", "Le matin/soir"], example: "Je me lève à sept heures." },
    "fr-a1-317": { scenario: "Hobilerinden bahseden biri", targetPhrases: ["J'aime...", "Je fais du...", "jouer", "lire", "regarder", "écouter"], example: "J'aime jouer au football." },
    "fr-a1-318": { scenario: "Hava durumunu anlatan biri", targetPhrases: ["Il fait beau", "Il fait froid", "Il pleut", "Il neige", "Le temps est..."], example: "Aujourd'hui, il fait beau." },
    "fr-a1-319": { scenario: "Nasıl hissettiğini söyleyen biri", targetPhrases: ["Je suis content(e)", "Je suis triste", "Je suis fatigué(e)", "Comment tu te sens?"], example: "Je suis très content aujourd'hui!" },
    "fr-a1-320": { scenario: "Yol tarif eden biri", targetPhrases: ["À gauche", "À droite", "Tout droit", "C'est là-bas", "Où est...?"], example: "La pharmacie, c'est à gauche." }
};

// İspanyolca A1 pratiği
const ES_A1_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "es-a1-1": { scenario: "Yeni tanışan iki kişi", targetPhrases: ["Hola", "Me llamo...", "¿Cómo te llamas?", "Mucho gusto", "¿Cómo estás?", "Gracias"], example: "Hola, me llamo Carlos. ¿Y tú?" },
    "es-a1-2": { scenario: "Sayı söyleyen biri", targetPhrases: ["Uno, dos, tres...", "Tengo ... años", "Mi número es...", "¿Cuántos?"], example: "Tengo veinte años." },
    "es-a1-3": { scenario: "Ailesini tanıtan biri", targetPhrases: ["Mi madre", "Mi padre", "Mi hermano/a", "Tengo ... hermanos", "Se llama..."], example: "Mi madre se llama María." },
    "es-a1-4": { scenario: "Renkleri tanımlayan biri", targetPhrases: ["Es...", "¿De qué color?", "rojo, azul, verde", "Me gusta el..."], example: "Mi color favorito es el azul." },
    "es-a1-5": { scenario: "Yemek yiyen biri", targetPhrases: ["Me gusta...", "No me gusta...", "El pan", "La carne", "La fruta", "Como..."], example: "Me gusta la paella." },
    "es-a1-6": { scenario: "İçecek sipariş eden biri", targetPhrases: ["Un café", "Un té", "Agua", "Quisiera...", "Por favor"], example: "Quisiera un café, por favor." },
    "es-a1-7": { scenario: "Gün ve ay soran biri", targetPhrases: ["¿Qué día?", "Hoy es...", "Lunes, martes...", "En enero, febrero..."], example: "Hoy es lunes 15 de marzo." },
    "es-a1-8": { scenario: "Büyük sayıları söyleyen biri", targetPhrases: ["Veintiuno...", "Cincuenta", "Cien", "¿Cuánto cuesta?"], example: "Son cincuenta euros." },
    "es-a1-9": { scenario: "Evini anlatan biri", targetPhrases: ["La habitación", "La cocina", "El salón", "El baño", "Hay...", "Vivo en..."], example: "En mi casa hay tres habitaciones." },
    "es-a1-10": { scenario: "Mobilyaları anlatan biri", targetPhrases: ["La mesa", "La silla", "La cama", "El sofá", "Está en..."], example: "La mesa está en la cocina." },
    "es-a1-11": { scenario: "Vücut bölümlerini gösteren biri", targetPhrases: ["La cabeza", "El brazo", "La pierna", "Me duele..."], example: "Me duele la cabeza." },
    "es-a1-12": { scenario: "Giysi alan biri", targetPhrases: ["Una camisa", "Un pantalón", "Llevo...", "¿Qué talla?"], example: "Llevo un pantalón azul." },
    "es-a1-13": { scenario: "Hayvanları anlatan biri", targetPhrases: ["El perro", "El gato", "Tengo...", "Me gustan..."], example: "Tengo un perro muy simpático." },
    "es-a1-14": { scenario: "Meslek soran biri", targetPhrases: ["¿Qué haces?", "Soy...", "Trabajo como...", "médico, profesor..."], example: "Soy profesor de español." },
    "es-a1-15": { scenario: "Şehirdeki yerleri anlatan biri", targetPhrases: ["La escuela", "El mercado", "El parque", "Está...", "Hay..."], example: "El parque está cerca de mi casa." },
    "es-a1-16": { scenario: "Ulaşım araçlarını anlatan biri", targetPhrases: ["El coche", "El autobús", "El tren", "Voy en...", "Tomo el..."], example: "Voy al trabajo en autobús." },
    "es-a1-17": { scenario: "Günlük rutinini anlatan biri", targetPhrases: ["Me levanto a las...", "Desayuno", "Voy al trabajo", "Por la mañana/noche"], example: "Me levanto a las siete." },
    "es-a1-18": { scenario: "Saat soran biri", targetPhrases: ["¿Qué hora es?", "Son las...", "Y media", "Menos cuarto"], example: "Son las tres y media." },
    "es-a1-19": { scenario: "Hava durumunu anlatan biri", targetPhrases: ["Hace buen tiempo", "Hace frío", "Llueve", "Nieva", "El tiempo está..."], example: "Hoy hace buen tiempo." },
    "es-a1-20": { scenario: "Hobilerinden bahseden biri", targetPhrases: ["Me gusta...", "Juego al...", "Practico...", "Leo", "Escucho"], example: "Me gusta jugar al fútbol." }
};

// İspanyolca A2 pratiği
const ES_A2_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "es-a2-31": { scenario: "Geçmişte ne yaptığını anlatan biri", targetPhrases: ["Ayer...", "La semana pasada...", "Fui", "Comí", "Vi", "Hice"], example: "Ayer fui al cine con mis amigos." },
    "es-a2-32": { scenario: "Geçmiş olayları anlatan biri", targetPhrases: ["Estuve", "Hice", "Dije", "Puse", "Tuve", "Vine"], example: "Ayer hice los deberes y luego salí." },
    "es-a2-33": { scenario: "Restoranda sipariş veren biri", targetPhrases: ["Para mí...", "Quisiera...", "La cuenta, por favor", "¿Qué me recomienda?"], example: "Para mí, una paella, por favor." },
    "es-a2-34": { scenario: "Alışveriş yapan biri", targetPhrases: ["¿Cuánto cuesta?", "Es muy caro", "¿Tiene descuento?", "Me lo llevo"], example: "¿Cuánto cuesta esta camisa?" },
    "es-a2-35": { scenario: "Seyahat planlayan biri", targetPhrases: ["Voy a ir a...", "Quiero visitar...", "Las vacaciones", "El viaje"], example: "Este verano voy a ir a Barcelona." },
    "es-a2-36": { scenario: "Otel rezervasyonu yapan biri", targetPhrases: ["Quisiera reservar...", "Una habitación doble", "¿Tienen disponibilidad?", "¿Está incluido el desayuno?"], example: "Quisiera reservar una habitación para dos noches." },
    "es-a2-37": { scenario: "Havalimanında olan biri", targetPhrases: ["El vuelo", "La puerta de embarque", "Facturar", "El equipaje"], example: "Mi vuelo sale a las tres de la tarde." },
    "es-a2-38": { scenario: "Doktorda olan biri", targetPhrases: ["Me duele...", "Tengo fiebre", "No me siento bien", "¿Qué me recomienda?"], example: "Me duele mucho la garganta." },
    "es-a2-39": { scenario: "Eczanede ilaç alan biri", targetPhrases: ["Necesito algo para...", "¿Tiene algo para...?", "¿Cómo lo tomo?"], example: "Necesito algo para el dolor de cabeza." },
    "es-a2-40": { scenario: "İşini anlatan biri", targetPhrases: ["Trabajo como...", "Mi trabajo es...", "Me encargo de...", "Mis tareas son..."], example: "Trabajo como diseñador gráfico." },
    "es-a2-41": { scenario: "İş görüşmesinde olan biri", targetPhrases: ["Tengo experiencia en...", "Estudié...", "Mis puntos fuertes son...", "Me gustaría trabajar..."], example: "Tengo experiencia en marketing digital." },
    "es-a2-42": { scenario: "Telefonda konuşan biri", targetPhrases: ["¿Dígame?", "¿De parte de quién?", "Un momento, por favor", "Le paso con..."], example: "Buenas tardes, ¿está María?" },
    "es-a2-43": { scenario: "E-posta yazan biri", targetPhrases: ["Estimado/a...", "Le escribo porque...", "Atentamente", "Un cordial saludo"], example: "Estimada señora García, le escribo porque..." },
    "es-a2-44": { scenario: "Fikrini söyleyen biri", targetPhrases: ["Creo que...", "Pienso que...", "En mi opinión...", "Para mí..."], example: "Creo que es una buena idea." },
    "es-a2-45": { scenario: "Birini tanımlayan biri", targetPhrases: ["Es muy...", "Tiene...", "Parece...", "simpático, amable, trabajador"], example: "Mi hermano es muy simpático y trabajador." },
    "es-a2-46": { scenario: "Gelecek planlarını anlatan biri", targetPhrases: ["Voy a...", "Pienso...", "Tengo la intención de...", "El año que viene..."], example: "Voy a aprender español este año." },
    "es-a2-47": { scenario: "Talimat veren biri", targetPhrases: ["Ven aquí", "Dime", "Sal de...", "Haz...", "Pon..."], example: "Por favor, ven aquí y dime qué pasó." },
    "es-a2-48": { scenario: "Film hakkında konuşan biri", targetPhrases: ["La película", "El actor/actriz", "Me gustó porque...", "Es una comedia/drama"], example: "Vi una película de terror ayer." },
    "es-a2-49": { scenario: "Teknoloji hakkında konuşan biri", targetPhrases: ["El ordenador", "El móvil", "Descargar", "Conectarse a internet"], example: "Uso mi móvil para todo." },
    "es-a2-50": { scenario: "Sosyal medyayı anlatan biri", targetPhrases: ["Las redes sociales", "Publicar", "Seguir", "Me gusta", "Compartir"], example: "Publico fotos en Instagram todos los días." }
};

// Ünite pratiği için özel prompt oluştur
function buildUnitPracticePrompt(language: string, level: string, scene: Scene): string {
    const langInfo = LANGUAGE_NAMES[language] || LANGUAGE_NAMES['es'];

    // Doğru veri setini bul
    let unitData: { scenario: string, targetPhrases: string[], example: string } | undefined;

    if (scene.systemPrompt.startsWith("fr-a2-")) {
        unitData = FR_A2_PRACTICE_DATA[scene.systemPrompt];
    } else if (scene.systemPrompt.startsWith("fr-a1-")) {
        unitData = FR_A1_PRACTICE_DATA[scene.systemPrompt];
    } else if (scene.systemPrompt.startsWith("es-a2-")) {
        unitData = ES_A2_PRACTICE_DATA[scene.systemPrompt];
    } else if (scene.systemPrompt.startsWith("es-a1-")) {
        unitData = ES_A1_PRACTICE_DATA[scene.systemPrompt];
    }

    // Varsayılan veri
    if (!unitData) {
        unitData = {
            scenario: scene.titleTr || "Genel konuşma",
            targetPhrases: [scene.description || "Temel kalıplar"],
            example: ""
        };
    }

    const phrasesFormatted = unitData.targetPhrases.map(p => `• ${p}`).join("\n");

    // Dil adını belirle
    const languageName = language === 'fr' ? 'FRANSIZCA' : language === 'es' ? 'İSPANYOLCA' : langInfo.native.toUpperCase();
    const languageNative = language === 'fr' ? 'Fransızca' : language === 'es' ? 'İspanyolca' : langInfo.native;

    return `Sen ${languageNative} öğreten bir AI asistanısın. Kullanıcı "${scene.titleTr}" ünitesini pratik yapmak istiyor.
Seviye: ${level}

GÖREV:
${unitData.scenario} rolünde bir sohbet başlat. Kullanıcının aşağıdaki kalıpları kullanmasını sağla.

HEDEF KALIPLAR (Kullanıcı bunları öğrenmeli):
${phrasesFormatted}

KURALLAR:
1. Sohbeti ${languageName} yürüt
2. Kullanıcıyı yukarıdaki kalıpları kullanmaya teşvik et
3. Kısa ve basit cümleler kullan (${level} seviyesi)
4. Doğal bir sohbet ortamı oluştur

HATA DÜZELTME:
Kullanıcı hata yaparsa:
1. Önce sohbete devam et
2. Sonra TÜRKÇE düzeltme yap:

💡 Düzeltme:
❌ Yanlış: [hatalı kısım]
✅ Doğrusu: [doğru ifade]
📝 İpucu: [açıklama]

KALIP TAKIBI:
Kullanıcı hedef kalıplardan birini doğru kullandığında:
✨ Harika! Bu kalıbı kullandın!

${unitData.example ? `ÖRNEK CÜMLE:\n"${unitData.example}"` : ""}

ÜNİTE: ${scene.titleTr}
${scene.description}

Sohbeti sen başlat - ${languageNative} olarak merhaba de ve kullanıcıyı konuşmaya davet et.
🎯 Hedef: Kullanıcının en az 3-4 hedef kalıbı kullanmasını sağla.`
}
