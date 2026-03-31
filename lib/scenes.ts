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
    },
    {
        id: "en-a1-practice",
        title: "🇬🇧 İngilizce A1",
        icon: "🌱",
        scenes: [
            { id: "unit-101", icon: "👋", title: "Greetings", titleTr: "Selamlaşma ve Tanışma", category: "en-a1-practice", description: "Hello, Hi, My name is", systemPrompt: "en-a1-101" },
            { id: "unit-102", icon: "🔢", title: "Numbers 1-20", titleTr: "Sayılar 1-20", category: "en-a1-practice", description: "One, Two, Three", systemPrompt: "en-a1-102" },
            { id: "unit-103", icon: "👨‍👩‍👧", title: "Family", titleTr: "Aile Üyeleri", category: "en-a1-practice", description: "Mother, Father, Brother", systemPrompt: "en-a1-103" },
            { id: "unit-104", icon: "🎨", title: "Colors", titleTr: "Renkler", category: "en-a1-practice", description: "Red, Blue, Green", systemPrompt: "en-a1-104" },
            { id: "unit-105", icon: "🍎", title: "Food", titleTr: "Yiyecekler", category: "en-a1-practice", description: "Bread, Fruit, Vegetables", systemPrompt: "en-a1-105" },
            { id: "unit-106", icon: "☕", title: "Drinks", titleTr: "İçecekler", category: "en-a1-practice", description: "Water, Coffee, Tea", systemPrompt: "en-a1-106" },
            { id: "unit-107", icon: "📅", title: "Time", titleTr: "Günler ve Aylar", category: "en-a1-practice", description: "Monday, January", systemPrompt: "en-a1-107" },
            { id: "unit-108", icon: "💯", title: "Numbers 21-100", titleTr: "Sayılar 21-100", category: "en-a1-practice", description: "Twenty, Fifty, Hundred", systemPrompt: "en-a1-108" },
            { id: "unit-109", icon: "🏠", title: "Home", titleTr: "Ev Odaları", category: "en-a1-practice", description: "Kitchen, Bedroom", systemPrompt: "en-a1-109" },
            { id: "unit-110", icon: "🪑", title: "Furniture", titleTr: "Mobilyalar", category: "en-a1-practice", description: "Table, Chair, Bed", systemPrompt: "en-a1-110" },
            { id: "unit-111", icon: "🦵", title: "Body", titleTr: "Vücut Bölümleri", category: "en-a1-practice", description: "Head, Eyes, Arms", systemPrompt: "en-a1-111" },
            { id: "unit-112", icon: "👕", title: "Clothes", titleTr: "Giysiler", category: "en-a1-practice", description: "Shirt, Pants, Shoes", systemPrompt: "en-a1-112" },
            { id: "unit-113", icon: "🐕", title: "Animals", titleTr: "Hayvanlar", category: "en-a1-practice", description: "Dog, Cat, Bird", systemPrompt: "en-a1-113" },
            { id: "unit-114", icon: "👔", title: "Jobs", titleTr: "Meslekler", category: "en-a1-practice", description: "Doctor, Teacher", systemPrompt: "en-a1-114" },
            { id: "unit-115", icon: "🏪", title: "City", titleTr: "Şehirde Yerler", category: "en-a1-practice", description: "Bank, Park, School", systemPrompt: "en-a1-115" },
            { id: "unit-116", icon: "🚌", title: "Transport", titleTr: "Ulaşım Araçları", category: "en-a1-practice", description: "Car, Bus, Train", systemPrompt: "en-a1-116" },
            { id: "unit-117", icon: "☀️", title: "Routine", titleTr: "Günlük Rutinler", category: "en-a1-practice", description: "Wake up, Sleep", systemPrompt: "en-a1-117" },
            { id: "unit-118", icon: "🕐", title: "Time", titleTr: "Saat Kaç?", category: "en-a1-practice", description: "Half past, O'clock", systemPrompt: "en-a1-118" },
            { id: "unit-119", icon: "☁️", title: "Weather", titleTr: "Hava Durumu", category: "en-a1-practice", description: "Sunny, Rainy", systemPrompt: "en-a1-119" },
            { id: "unit-120", icon: "⚽", title: "Hobbies", titleTr: "Hobiler", category: "en-a1-practice", description: "Sports, Reading", systemPrompt: "en-a1-120" },
            { id: "unit-121", icon: "😊", title: "Feelings", titleTr: "Duygular", category: "en-a1-practice", description: "Happy, Sad", systemPrompt: "en-a1-121" },
            { id: "unit-122", icon: "🏫", title: "School", titleTr: "Okul ve Sınıf", category: "en-a1-practice", description: "Book, Pen, Student", systemPrompt: "en-a1-122" },
            { id: "unit-123", icon: "🎉", title: "Holidays", titleTr: "Tatiller", category: "en-a1-practice", description: "Christmas, Birthday", systemPrompt: "en-a1-123" },
            { id: "unit-124", icon: "🌍", title: "Countries", titleTr: "Ülkeler", category: "en-a1-practice", description: "Where are you from?", systemPrompt: "en-a1-124" },
            { id: "unit-125", icon: "🏃", title: "Verbs", titleTr: "Temel Fiiller", category: "en-a1-practice", description: "Go, Come, Do", systemPrompt: "en-a1-125" },
            { id: "unit-126", icon: "🔄", title: "Habits", titleTr: "Present Simple", category: "en-a1-practice", description: "Always, Usually", systemPrompt: "en-a1-126" },
            { id: "unit-127", icon: "🕒", title: "Now", titleTr: "Present Continuous", category: "en-a1-practice", description: "Thinking, Working", systemPrompt: "en-a1-127" },
            { id: "unit-128", icon: "📏", title: "Adjectives", titleTr: "Sıfatlar", category: "en-a1-practice", description: "Big, Small", systemPrompt: "en-a1-128" },
            { id: "unit-129", icon: "📍", title: "Prepositions", titleTr: "Edatlar", category: "en-a1-practice", description: "In, On, At", systemPrompt: "en-a1-129" },
            { id: "unit-130", icon: "🏆", title: "A1 Review", titleTr: "A1 Genel Tekrar", category: "en-a1-practice", description: "Check your level", systemPrompt: "en-a1-130" }
        ]
    },
    {
        id: "en-a2-practice",
        title: "🇬🇧 İngilizce A2",
        icon: "📚",
        scenes: [
            { id: "unit-131", icon: "⏪", title: "Past Simple 1", titleTr: "Düzenli Geçmiş Zaman", category: "en-a2-practice", description: "Watched, Played, Visited", systemPrompt: "en-a2-131" },
            { id: "unit-132", icon: "⏪", title: "Past Simple 2", titleTr: "Düzensiz Geçmiş Zaman", category: "en-a2-practice", description: "Went, Saw, Had, Did", systemPrompt: "en-a2-132" },
            { id: "unit-133", icon: "🍽️", title: "Restaurant", titleTr: "Restoranda Sipariş", category: "en-a2-practice", description: "I'd like to order, bill please", systemPrompt: "en-a2-133" },
            { id: "unit-134", icon: "🛍️", title: "Shopping", titleTr: "Alışveriş ve Fiyat", category: "en-a2-practice", description: "How much is this?, size", systemPrompt: "en-a2-134" },
            { id: "unit-135", icon: "✈️", title: "Travel Plans", titleTr: "Seyahat Planları", category: "en-a2-practice", description: "Going to visit, planning", systemPrompt: "en-a2-135" },
            { id: "unit-136", icon: "🏨", title: "Hotel", titleTr: "Otel Rezervasyonu", category: "en-a2-practice", description: "Double room, vacancy", systemPrompt: "en-a2-136" },
            { id: "unit-137", icon: "🛫", title: "Airport", titleTr: "Havalimanında", category: "en-a2-practice", description: "Check-in, boarding pass", systemPrompt: "en-a2-137" },
            { id: "unit-138", icon: "🏥", title: "Doctor", titleTr: "Doktorda Şikayet", category: "en-a2-practice", description: "Headache, sore throat", systemPrompt: "en-a2-138" },
            { id: "unit-139", icon: "💊", title: "Pharmacy", titleTr: "Eczanede İlaç", category: "en-a2-practice", description: "Medicine, cold, pain", systemPrompt: "en-a2-139" },
            { id: "unit-140", icon: "👔", title: "Jobs", titleTr: "Meslekler", category: "en-a2-practice", description: "Engineer, software, work", systemPrompt: "en-a2-140" },
            { id: "unit-141", icon: "💼", title: "Interview", titleTr: "İş Görüşmesi", category: "en-a2-practice", description: "Experience, strengths", systemPrompt: "en-a2-141" },
            { id: "unit-142", icon: "📞", title: "Phone", titleTr: "Telefonda Konuşma", category: "en-a2-practice", description: "Speak to, message", systemPrompt: "en-a2-142" },
            { id: "unit-143", icon: "📧", title: "Email", titleTr: "E-posta Yazma", category: "en-a2-practice", description: "Attach, send, reply", systemPrompt: "en-a2-143" },
            { id: "unit-144", icon: "💭", title: "Feelings", titleTr: "Duygular", category: "en-a2-practice", description: "Nervous, excited, worried", systemPrompt: "en-a2-144" },
            { id: "unit-145", icon: "😊", title: "Personality", titleTr: "Kişilik Özellikleri", category: "en-a2-practice", description: "Friendly, hardworking", systemPrompt: "en-a2-145" },
            { id: "unit-146", icon: "⚽", title: "Sports", titleTr: "Spor ve Fitness", category: "en-a2-practice", description: "Gym, workout, yoga", systemPrompt: "en-a2-146" },
            { id: "unit-147", icon: "🎸", title: "Music & Art", titleTr: "Müzik ve Sanat", category: "en-a2-practice", description: "Guitar, concert, museum", systemPrompt: "en-a2-147" },
            { id: "unit-148", icon: "🎬", title: "Movies", titleTr: "Sinema ve Dizi", category: "en-a2-practice", description: "Action, plot, episode", systemPrompt: "en-a2-148" },
            { id: "unit-149", icon: "💻", title: "Tech", titleTr: "Teknoloji Kullanımı", category: "en-a2-practice", description: "Update, wifi, camera", systemPrompt: "en-a2-149" },
            { id: "unit-150", icon: "📱", title: "Social", titleTr: "Sosyal Medya", category: "en-a2-practice", description: "Post, follow, share", systemPrompt: "en-a2-150" },
            { id: "unit-151", icon: "🏠", title: "Home", titleTr: "Ev ve Taşınma", category: "en-a2-practice", description: "Rent, apartment, furniture", systemPrompt: "en-a2-151" },
            { id: "unit-152", icon: "🌍", title: "Environment", titleTr: "Çevre ve Doğa", category: "en-a2-practice", description: "Recycle, green energy", systemPrompt: "en-a2-152" },
            { id: "unit-153", icon: "📰", title: "News", titleTr: "Haberler ve Medya", category: "en-a2-practice", description: "Headline, breaking news", systemPrompt: "en-a2-153" },
            { id: "unit-154", icon: "🏮", title: "Culture", titleTr: "Kültür ve Gelenek", category: "en-a2-practice", description: "Tradition, holiday, festival", systemPrompt: "en-a2-154" },
            { id: "unit-155", icon: "📜", title: "Perfect", titleTr: "Present Perfect", category: "en-a2-practice", description: "Have been, Tried, Visited", systemPrompt: "en-a2-155" },
            { id: "unit-156", icon: "⚖️", title: "Compare 1", titleTr: "Karşılaştırmalar", category: "en-a2-practice", description: "Bigger, Faster, Better", systemPrompt: "en-a2-156" },
            { id: "unit-157", icon: "🥇", title: "Superlative", titleTr: "En Üstünlük", category: "en-a2-practice", description: "Biggest, Best, Most", systemPrompt: "en-a2-157" },
            { id: "unit-158", icon: "💡", title: "Modals", titleTr: "Modal Fiiller", category: "en-a2-practice", description: "Should, Must, Could", systemPrompt: "en-a2-158" },
            { id: "unit-159", icon: "❓", title: "Question Tags", titleTr: "Ek Sorular", category: "en-a2-practice", description: "Don't you, isn't it?", systemPrompt: "en-a2-159" },
            { id: "unit-160", icon: "🏆", title: "A2 Review", titleTr: "A2 Genel Tekrar", category: "en-a2-practice", description: "Check your A2 level", systemPrompt: "en-a2-160" }
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
    const practiceCategories = ["fr-a2-practice", "fr-a1-practice", "es-a1-practice", "es-a2-practice", "en-a1-practice"];
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

// İngilizce A1 pratiği
const EN_A1_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "en-a1-101": { scenario: "Meeting someone for the first time", targetPhrases: ["Hello", "Hi", "My name is...", "Nice to meet you", "How are you?", "Goodbye"], example: "Hello, my name is John. Nice to meet you!" },
    "en-a1-102": { scenario: "Saying numbers in a shop", targetPhrases: ["One, two, three...", "How many?", "I have...", "Ten, twenty"], example: "I have five apples, please." },
    "en-a1-103": { scenario: "Describing your family", targetPhrases: ["Mother", "Father", "Brother", "Sister", "This is my...", "I have..."], example: "This is my sister. Her name is Sarah." },
    "en-a1-104": { scenario: "Talking about colors", targetPhrases: ["Red", "Blue", "Green", "What color is it?", "It is...", "My favorite color is..."], example: "The sky is blue today." },
    "en-a1-105": { scenario: "Ordering food", targetPhrases: ["I like...", "I want...", "Bread", "Fruit", "Vegetables", "Can I have...?"], example: "I like pizza and pasta." },
    "en-a1-106": { scenario: "Asking for a drink", targetPhrases: ["Water", "Coffee", "Tea", "Milk", "I drink...", "Would you like...?"], example: "I drink coffee every morning." },
    "en-a1-107": { scenario: "Talking about dates", targetPhrases: ["Monday, Tuesday...", "January, February...", "When is...?", "Today is..."], example: "My birthday is in June." },
    "en-a1-108": { scenario: "Buying things with larger numbers", targetPhrases: ["Thirty", "Fifty", "One hundred", "How much is it?", "It costs..."], example: "This shirt costs forty dollars." },
    "en-a1-109": { scenario: "Describing your house", targetPhrases: ["Kitchen", "Bedroom", "Bathroom", "Living room", "In the...", "There is..."], example: "There is a bed in my bedroom." },
    "en-a1-110": { scenario: "Talking about furniture", targetPhrases: ["Table", "Chair", "Bed", "Sofa", "Desk", "Where is the...?"], example: "The book is on the desk." },
    "en-a1-111": { scenario: "Describing body parts", targetPhrases: ["Head", "Eyes", "Arms", "Legs", "Hand", "My ... hurts", "I have ... eyes"], example: "My head hurts today." },
    "en-a1-112": { scenario: "Talking about what you're wearing", targetPhrases: ["Shirt", "Pants", "Dress", "Shoes", "I am wearing...", "Blue/Red shirt"], example: "I am wearing a black jacket." },
    "en-a1-113": { scenario: "Talking about pets", targetPhrases: ["Dog", "Cat", "Bird", "Fish", "I have a...", "My pet is..."], example: "I have a small cat named Luna." },
    "en-a1-114": { scenario: "Talking about what people do", targetPhrases: ["Doctor", "Teacher", "Nurse", "Engineer", "I am a...", "What is your job?"], example: "My father is an engineer." },
    "en-a1-115": { scenario: "Asking about city locations", targetPhrases: ["School", "Hospital", "Bank", "Park", "Where is the...?", "Next to/Near"], example: "The park is next to the bank." },
    "en-a1-116": { scenario: "Talking about travel", targetPhrases: ["Car", "Bus", "Train", "Plane", "By bus/car", "How do you go to...?"], example: "I go to school by bus." },
    "en-a1-117": { scenario: "Describing your day", targetPhrases: ["Wake up", "Eat breakfast", "Go to work", "Go to sleep", "At ... o'clock", "Every day"], example: "I wake up at seven o'clock every day." },
    "en-a1-118": { scenario: "Asking for the time", targetPhrases: ["What time is it?", "It is ... o'clock", "Half past...", "Quarter past/to"], example: "It is half past ten." },
    "en-a1-119": { scenario: "Talking about the weather", targetPhrases: ["Sunny", "Rainy", "Cloudy", "Cold/Hot", "How is the weather?", "It is..."], example: "It is very sunny and hot today." },
    "en-a1-120": { scenario: "Sharing interests", targetPhrases: ["I like...", "My hobby is...", "Playing sports", "Reading", "Do you like...?"], example: "I like playing football with my friends." },
    "en-a1-121": { scenario: "Expressing how you feel", targetPhrases: ["Happy", "Sad", "Angry", "Tired", "Excited", "How do you feel?", "I am..."], example: "I am very excited about the party!" },
    "en-a1-122": { scenario: "Talking about school life", targetPhrases: ["Book", "Pen", "Classroom", "Student", "Open your...", "I study..."], example: "There are twenty students in my classroom." },
    "en-a1-123": { scenario: "Talking about celebrations", targetPhrases: ["Birthday", "Holiday", "Christmas", "Party", "Happy...!", "We celebrate..."], example: "We go on holiday in the summer." },
    "en-a1-124": { scenario: "Saying where you are from", targetPhrases: ["Country", "Nationality", "I am from...", "I am [Turkish/English]", "Where are you from?"], example: "I am from Turkey. I am Turkish." },
    "en-a1-125": { scenario: "Using simple actions", targetPhrases: ["Go", "Come", "Eat", "Sleep", "Make", "Do", "I [verb] every day"], example: "I make dinner for my family." },
    "en-a1-126": { scenario: "Talking about habits", targetPhrases: ["Always", "Never", "Sometimes", "Usually", "I work...", "She works..."], example: "She usually reads books in the evening." },
    "en-a1-127": { scenario: "Describing what's happening now", targetPhrases: ["I am ...ing", "You are ...ing", "He is ...ing", "Right now", "Look!"], example: "I am studying English right now." },
    "en-a1-128": { scenario: "Describing things with opposites", targetPhrases: ["Big/Small", "Good/Bad", "Old/New", "Fast/Slow", "Very [adjective]"], example: "This is a very big and beautiful city." },
    "en-a1-129": { scenario: "Saying where things are", targetPhrases: ["In", "On", "At", "Under", "Behind", "In front of", "The ... is ... the ..."], example: "The keys are on the table." },
    "en-a1-130": { scenario: "Reviewing A1 level topics", targetPhrases: ["Hello", "I am...", "I live in...", "I like...", "I can...", "Yesterday", "Now"], example: "Hello, I am a student and I like reading books." },
};

// İngilizce A2 pratiği
const EN_A2_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "en-a2-131": { scenario: "Talking about what you did yesterday", targetPhrases: ["I watched...", "I played...", "I visited...", "Yesterday", "Last night", "-ed verbs"], example: "I watched a movie at home yesterday." },
    "en-a2-132": { scenario: "Talking about past events with irregular verbs", targetPhrases: ["I went...", "I saw...", "I had...", "I did...", "I ate...", "Last weekend"], example: "I went to the park and saw my friends." },
    "en-a2-133": { scenario: "Ordering a meal at a restaurant", targetPhrases: ["I'd like to order...", "Can I have...?", "The bill, please", "Anything else?", "To drink?"], example: "I'd like to order the grilled chicken, please." },
    "en-a2-134": { scenario: "Shopping for clothes and asking about price", targetPhrases: ["How much is this?", "Do you have it in [size]?", "Can I try it on?", "Which one?", "Too expensive"], example: "How much is this blue shirt? Can I try it on?" },
    "en-a2-135": { scenario: "Discussing your next holiday plans", targetPhrases: ["I'm going to visit...", "I'm planning to...", "How long stay?", "Next summer", "Where going?"], example: "I'm going to visit London next summer with my family." },
    "en-a2-136": { scenario: "Booking a room at a hotel", targetPhrases: ["I'd like to book a room", "Double/Single room", "How many nights?", "Is breakfast included?", "Checking in"], example: "I'd like to book a double room for three nights, please." },
    "en-a2-137": { scenario: "Checking in at the airport", targetPhrases: ["Here is my passport", "Boarding pass", "Gate number", "Check-in counter", "Window seat"], example: "Where is the check-in counter for my flight?" },
    "en-a2-138": { scenario: "Describing your symptoms to a doctor", targetPhrases: ["I have a headache", "My throat hurts", "I feel tired", "How long?", "I have a fever"], example: "I have a terrible headache and I feel very tired." },
    "en-a2-139": { scenario: "Buying medicine at a pharmacy", targetPhrases: ["I need something for a cold", "How often should I take it?", "Twice a day", "Medicine", "Pharmacist"], example: "I need something for a cold. How often should I take this medicine?" },
    "en-a2-140": { scenario: "Talking about your job and workplace", targetPhrases: ["I'm a [job name]", "I work as a...", "Where do you work?", "It's my dream job", "Software engineer"], example: "I work as a teacher in a high school." },
    "en-a2-141": { scenario: "Answering questions in a job interview", targetPhrases: ["I have experience in...", "My strengths are...", "Why want this job?", "Challenges", "Experience"], example: "I have three years of experience in marketing." },
    "en-a2-142": { scenario: "Making a formal phone call", targetPhrases: ["Hello, this is [name]", "Can I speak to...?", "Can I take a message?", "Hold a moment", "Call back"], example: "Hello, this is Mark. Can I speak to the manager, please?" },
    "en-a2-143": { scenario: "Asking and giving info about emails", targetPhrases: ["Did you see the email?", "I attached the file", "Please reply", "Send an email", "Check your inbox"], example: "I attached the report to the email I sent yesterday." },
    "en-a2-144": { scenario: "Expressing how you feel about something", targetPhrases: ["I'm feeling nervous", "I'm excited about...", "Don't worry", "Surprised", "Disappointed"], example: "I'm very excited about our trip next week!" },
    "en-a2-145": { scenario: "Describing the personality of a friend", targetPhrases: ["He/She is [adjective]", "Friendly/Shy", "Kind/Generous", "Hardworking", "Honest"], example: "My best friend is very kind and hardworking." },
    "en-a2-146": { scenario: "Talking about your sports routine", targetPhrases: ["I play tennis", "I go to the gym", "Do yoga", "Twice a week", "Every morning", "Fitness"], example: "I go to the gym three times a week to stay fit." },
    "en-a2-147": { scenario: "Sharing your interests in music and art", targetPhrases: ["I play the guitar", "I love concerts", "Visit a museum", "Listen to...", "Artist/Band"], example: "I love listening to rock music and I play the guitar." },
    "en-a2-148": { scenario: "Talking about a movie or series you like", targetPhrases: ["Action movie", "The plot is...", "Have you seen...?", "My favorite show", "Ending"], example: "The plot of this movie is really interesting and exciting." },
    "en-a2-149": { scenario: "Discussing the tech gadgets you use", targetPhrases: ["I need to update...", "Connect to wifi", "Download an app", "Smartphone", "Laptop"], example: "Can you help me connect to the wifi on my new laptop?" },
    "en-a2-150": { scenario: "Talking about your social media habits", targetPhrases: ["I posted a photo", "How many followers?", "Share/Like/Comment", "Instagram/Facebook", "Profile"], example: "I post photos of my travels on Instagram every week." },
    "en-a2-151": { scenario: "Talking about living in an apartment", targetPhrases: ["Rent an apartment", "Landlord", "Furniture", "Moving in", "Balcony/Kitchen"], example: "I'm moving into a new apartment next month." },
    "en-a2-152": { scenario: "Discussing how to save the planet", targetPhrases: ["Recycle more", "Climate change", "Pollution", "Nature", "Protecting", "Save energy"], example: "We should recycle paper and plastic to protect the nature." },
    "en-a2-153": { scenario: "Talking about a news story you read", targetPhrases: ["Did you see the news?", "The headline is...", "Reporter/Article", "Breakthrough", "Interesting"], example: "I read an interesting news article about space travel today." },
    "en-a2-154": { scenario: "Describing a tradition from your country", targetPhrases: ["It's a tradition in...", "We celebrate...", "Special food", "Customs", "Festival/Holiday"], example: "We celebrate Bayram with our families every year." },
    "en-a2-155": { scenario: "Talking about your life experiences", targetPhrases: ["I have never...", "Have you ever...?", "I've been to...", "Twice/Many times", " 경험"], example: "I have been to London three times. It's a great city!" },
    "en-a2-156": { scenario: "Comparing two cities or items", targetPhrases: ["Bigger than...", "More expensive", "Better/Worse", "Fastest", "Comparison"], example: "London is much bigger than Oxford, isn't it?" },
    "en-a2-157": { scenario: "Talking about the best of everything", targetPhrases: ["The best...", "The most beautiful", "The tallest", "In the world", "Superlative"], example: "This is the most beautiful place I've ever seen." },
    "en-a2-158": { scenario: "Giving advice or talking about rules", targetPhrases: ["You should...", "You must...", "Could you...?", "I might...", "Possibility/Advice"], example: "You should see a doctor if you feel sick." },
    "en-a2-159": { scenario: "Confirming info with tag questions", targetPhrases: ["..., isn't it?", "..., don't you?", "..., can't you?", "Checking facts", "Right?"], example: "It's a beautiful day, isn't it?" },
    "en-a2-160": { scenario: "Reviewing everything from A2 level", targetPhrases: ["I've learned...", "Improvements", "難しい(Hard)", "Vocabulary/Grammar", "Next level"], example: "I've learned a lot of new things in English this year." },
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
    } else if (scene.systemPrompt.startsWith("en-a2-")) {
        unitData = EN_A2_PRACTICE_DATA[scene.systemPrompt];
    } else if (scene.systemPrompt.startsWith("en-a1-")) {
        unitData = EN_A1_PRACTICE_DATA[scene.systemPrompt];
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
    const languageName = language === 'fr' ? 'FRANSIZCA' : language === 'es' ? 'İSPANYOLCA' : language === 'en' ? 'İNGİLİZCE' : langInfo.native.toUpperCase();
    const languageNative = language === 'fr' ? 'Fransızca' : language === 'es' ? 'İspanyolca' : language === 'en' ? 'İngilizce' : langInfo.native;

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
