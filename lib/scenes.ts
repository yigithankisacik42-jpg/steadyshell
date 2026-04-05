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
    fr: { native: "français", turkish: "Fransızca" },
    de: { native: "Deutsch", turkish: "Almanca" }
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
    },
    {
        id: "de-a1-practice",
        title: "🇩🇪 Almanca A1",
        icon: "🌱",
        scenes: [
            { id: "unit-501", icon: "👋", title: "Hallo", titleTr: "Selamlaşma ve Tanışma", category: "de-a1-practice", description: "Hallo, Wie heißt du?", systemPrompt: "de-a1-501" },
            { id: "unit-502", icon: "🔢", title: "Zahlen 1-20", titleTr: "Sayılar 1-20", category: "de-a1-practice", description: "Eins, zwei, drei", systemPrompt: "de-a1-502" },
            { id: "unit-503", icon: "👨‍👩‍👧", title: "Familie", titleTr: "Aile Üyeleri", category: "de-a1-practice", description: "Mutter, Vater, Schwester", systemPrompt: "de-a1-503" },
            { id: "unit-504", icon: "🎨", title: "Farben", titleTr: "Renkler", category: "de-a1-practice", description: "Rot, Blau, Grün", systemPrompt: "de-a1-504" },
            { id: "unit-505", icon: "🍎", title: "Essen", titleTr: "Yiyecekler", category: "de-a1-practice", description: "Brot, Käse, Obst", systemPrompt: "de-a1-505" },
            { id: "unit-506", icon: "☕", title: "Getränke", titleTr: "İçecekler", category: "de-a1-practice", description: "Wasser, Kaffee, Tee", systemPrompt: "de-a1-506" },
            { id: "unit-507", icon: "📅", title: "Kalender", titleTr: "Günler ve Aylar", category: "de-a1-practice", description: "Montag, Januar", systemPrompt: "de-a1-507" },
            { id: "unit-508", icon: "💯", title: "Zahlen 21-100", titleTr: "Sayılar 21-100", category: "de-a1-practice", description: "Einundzwanzig, Hundert", systemPrompt: "de-a1-508" },
            { id: "unit-509", icon: "🏠", title: "Zimmer", titleTr: "Ev Odaları", category: "de-a1-practice", description: "Küche, Schlafzimmer", systemPrompt: "de-a1-509" },
            { id: "unit-510", icon: "🪑", title: "Möbel", titleTr: "Mobilyalar", category: "de-a1-practice", description: "Tisch, Stuhl, Bett", systemPrompt: "de-a1-510" },
            { id: "unit-511", icon: "🦵", title: "Körper", titleTr: "Vücut Bölümleri", category: "de-a1-practice", description: "Kopf, Arm, Bein", systemPrompt: "de-a1-511" },
            { id: "unit-512", icon: "👕", title: "Kleidung", titleTr: "Giysiler", category: "de-a1-practice", description: "Hemd, Hose, Kleid", systemPrompt: "de-a1-512" },
            { id: "unit-513", icon: "🐕", title: "Tiere", titleTr: "Hayvanlar", category: "de-a1-practice", description: "Katze, Hund, Vogel", systemPrompt: "de-a1-513" },
            { id: "unit-514", icon: "👔", title: "Berufe", titleTr: "Meslekler 1", category: "de-a1-practice", description: "Arzt, Lehrer", systemPrompt: "de-a1-514" },
            { id: "unit-515", icon: "🏪", title: "Orte", titleTr: "Şehirde Yerler", category: "de-a1-practice", description: "Schule, Markt, Park", systemPrompt: "de-a1-515" },
            { id: "unit-516", icon: "🚌", title: "Verkehr", titleTr: "Ulaşım Araçları", category: "de-a1-practice", description: "Auto, Bus, Zug", systemPrompt: "de-a1-516" },
            { id: "unit-517", icon: "☀️", title: "Routine", titleTr: "Günlük Rutinler", category: "de-a1-practice", description: "Aufstehen, Essen", systemPrompt: "de-a1-517" },
            { id: "unit-518", icon: "🕐", title: "Uhrzeit", titleTr: "Saat Kaç?", category: "de-a1-practice", description: "Wie spät ist es?", systemPrompt: "de-a1-518" },
            { id: "unit-519", icon: "☁️", title: "Wetter", titleTr: "Hava Durumu", category: "de-a1-practice", description: "Sonnig, Regnerisch", systemPrompt: "de-a1-519" },
            { id: "unit-520", icon: "⚽", title: "Hobbys", titleTr: "Hobiler", category: "de-a1-practice", description: "Sport, Musik, Lesen", systemPrompt: "de-a1-520" },
            { id: "unit-521", icon: "😊", title: "Gefühle", titleTr: "Duygular ve Hisler", category: "de-a1-practice", description: "Glücklich, Traurig", systemPrompt: "de-a1-521" },
            { id: "unit-522", icon: "🏫", title: "Schule", titleTr: "Okul ve Sınıf", category: "de-a1-practice", description: "Buch, Stift, Tafel", systemPrompt: "de-a1-522" },
            { id: "unit-523", icon: "🎉", title: "Feiertage", titleTr: "Tatiller ve Bayramlar", category: "de-a1-practice", description: "Weihnachten, Ostern", systemPrompt: "de-a1-523" },
            { id: "unit-524", icon: "🌍", title: "Länder", titleTr: "Ülkeler ve Milletler", category: "de-a1-practice", description: "Woher kommst du?", systemPrompt: "de-a1-524" },
            { id: "unit-525", icon: "🏃", title: "Verben", titleTr: "Temel Fiiller", category: "de-a1-practice", description: "Gehen, Kommen, Machen", systemPrompt: "de-a1-525" },
            { id: "unit-526", icon: "📐", title: "Artikel", titleTr: "Artikeller (der/die/das)", category: "de-a1-practice", description: "Artikelregeln", systemPrompt: "de-a1-526" },
            { id: "unit-527", icon: "🎯", title: "Akkusativ", titleTr: "Akkusativ Hali", category: "de-a1-practice", description: "Den, Die, Das", systemPrompt: "de-a1-527" },
            { id: "unit-528", icon: "📏", title: "Adjektive", titleTr: "Sıfatlar", category: "de-a1-practice", description: "Groß, Klein, Schön", systemPrompt: "de-a1-528" },
            { id: "unit-529", icon: "📍", title: "Präpositionen", titleTr: "Edatlar", category: "de-a1-practice", description: "In, Auf, An", systemPrompt: "de-a1-529" },
            { id: "unit-530", icon: "🏆", title: "A1 Wiederholung", titleTr: "A1 Tekrar", category: "de-a1-practice", description: "Seviye özeti", systemPrompt: "de-a1-530" }
        ]
    },
    {
        id: "de-a2-practice",
        title: "🇩🇪 Almanca A2",
        icon: "📚",
        scenes: [
            { id: "unit-531", icon: "⏪", title: "Perfekt", titleTr: "Geçmiş Zaman (Perfekt)", category: "de-a2-practice", description: "Ich habe gemacht", systemPrompt: "de-a2-531" },
            { id: "unit-532", icon: "⏪", title: "Präteritum", titleTr: "Geçmiş Zaman 2", category: "de-a2-practice", description: "Ich war, Ich hatte", systemPrompt: "de-a2-532" },
            { id: "unit-533", icon: "🍽️", title: "Restaurant", titleTr: "Restoranda", category: "de-a2-practice", description: "Bestellen", systemPrompt: "de-a2-533" },
            { id: "unit-534", icon: "🛍️", title: "Einkaufen", titleTr: "Alışveriş", category: "de-a2-practice", description: "Preise", systemPrompt: "de-a2-534" },
            { id: "unit-535", icon: "✈️", title: "Reisepläne", titleTr: "Seyahat Planları", category: "de-a2-practice", description: "Urlaub", systemPrompt: "de-a2-535" },
            { id: "unit-536", icon: "🏨", title: "Hotel", titleTr: "Otel Rezervasyonu", category: "de-a2-practice", description: "Buchen", systemPrompt: "de-a2-536" },
            { id: "unit-537", icon: "🛫", title: "Flughafen", titleTr: "Havalimanında", category: "de-a2-practice", description: "Flug", systemPrompt: "de-a2-537" },
            { id: "unit-538", icon: "🏥", title: "Arzt", titleTr: "Doktorda", category: "de-a2-practice", description: "Beim Arzt", systemPrompt: "de-a2-538" },
            { id: "unit-539", icon: "💊", title: "Apotheke", titleTr: "Eczanede", category: "de-a2-practice", description: "Medikamente", systemPrompt: "de-a2-539" },
            { id: "unit-540", icon: "👔", title: "Berufe 2", titleTr: "Meslekler 2", category: "de-a2-practice", description: "Arbeit", systemPrompt: "de-a2-540" },
            { id: "unit-541", icon: "💼", title: "Gespräch", titleTr: "İş Görüşmesi", category: "de-a2-practice", description: "Vorstellungsgespräch", systemPrompt: "de-a2-541" },
            { id: "unit-542", icon: "📞", title: "Telefon", titleTr: "Telefonda", category: "de-a2-practice", description: "Telefonieren", systemPrompt: "de-a2-542" },
            { id: "unit-543", icon: "📧", title: "E-Mail", titleTr: "E-posta Yazma", category: "de-a2-practice", description: "Formell", systemPrompt: "de-a2-543" },
            { id: "unit-544", icon: "💭", title: "Gefühle", titleTr: "Duygular", category: "de-a2-practice", description: "Ausdrücken", systemPrompt: "de-a2-544" },
            { id: "unit-545", icon: "😊", title: "Charakter", titleTr: "Karakter Özellikleri", category: "de-a2-practice", description: "Nett, fleißig", systemPrompt: "de-a2-545" },
            { id: "unit-546", icon: "⚽", title: "Sport", titleTr: "Spor ve Fitness", category: "de-a2-practice", description: "Sportarten", systemPrompt: "de-a2-546" },
            { id: "unit-547", icon: "🎸", title: "Musik", titleTr: "Müzik ve Sanat", category: "de-a2-practice", description: "Instrumente", systemPrompt: "de-a2-547" },
            { id: "unit-548", icon: "🎬", title: "Filme", titleTr: "Sinema ve Dizi", category: "de-a2-practice", description: "Filmgenres", systemPrompt: "de-a2-548" },
            { id: "unit-549", icon: "💻", title: "Technik", titleTr: "Teknoloji", category: "de-a2-practice", description: "Computer", systemPrompt: "de-a2-549" },
            { id: "unit-550", icon: "📱", title: "Medien", titleTr: "Sosyal Medya", category: "de-a2-practice", description: "Internet", systemPrompt: "de-a2-550" },
            { id: "unit-551", icon: "🏠", title: "Wohnen", titleTr: "Ev ve Taşınma", category: "de-a2-practice", description: "Miete, Umzug", systemPrompt: "de-a2-551" },
            { id: "unit-552", icon: "🌍", title: "Umwelt", titleTr: "Çevre ve Doğa", category: "de-a2-practice", description: "Natur", systemPrompt: "de-a2-552" },
            { id: "unit-553", icon: "📰", title: "News", titleTr: "Haberler", category: "de-a2-practice", description: "Nachrichten", systemPrompt: "de-a2-553" },
            { id: "unit-554", icon: "🏮", title: "Kultur", titleTr: "Kültür ve Gelenekler", category: "de-a2-practice", description: "Traditionen", systemPrompt: "de-a2-554" },
            { id: "unit-555", icon: "🎯", title: "Dativ", titleTr: "Dativ Hali", category: "de-a2-practice", description: "Dem, Der", systemPrompt: "de-a2-555" },
            { id: "unit-556", icon: "💡", title: "Modale", titleTr: "Modalverben", category: "de-a2-practice", description: "Können, Müssen", systemPrompt: "de-a2-556" },
            { id: "unit-557", icon: "🔗", title: "Sätze", titleTr: "Nebensätze", category: "de-a2-practice", description: "Weil, Dass", systemPrompt: "de-a2-557" },
            { id: "unit-558", icon: "⚖️", title: "Vergleich", titleTr: "Karşılaştırma", category: "de-a2-practice", description: "Größer", systemPrompt: "de-a2-558" },
            { id: "unit-559", icon: "🔄", title: "Reflexiv", titleTr: "Dönüşlü Fiiller", category: "de-a2-practice", description: "Sich freuen", systemPrompt: "de-a2-559" },
            { id: "unit-560", icon: "🏆", title: "A2 Wiederholung", titleTr: "A2 Tekrar", category: "de-a2-practice", description: "Seviye özeti", systemPrompt: "de-a2-560" }
        ]
    },
    {
        id: "de-b1-practice",
        title: "🇩🇪 Almanca B1",
        icon: "📘",
        scenes: [
            { id: "unit-561", icon: "🔮", title: "Futur I", titleTr: "Gelecek Zaman", category: "de-b1-practice", description: "Ich werde machen", systemPrompt: "de-b1-561" },
            { id: "unit-562", icon: "💭", title: "Konjunktiv", titleTr: "Konjunktiv II", category: "de-b1-practice", description: "Ich würde", systemPrompt: "de-b1-562" },
            { id: "unit-563", icon: "🔄", title: "Passiv", titleTr: "Passiv Yapı", category: "de-b1-practice", description: "Es wird gemacht", systemPrompt: "de-b1-563" },
            { id: "unit-564", icon: "🗨️", title: "Rede", titleTr: "Dolaylı Anlatım", category: "de-b1-practice", description: "Indirekte Rede", systemPrompt: "de-b1-564" },
            { id: "unit-565", icon: "🎯", title: "Genitiv", titleTr: "Genitiv Hali", category: "de-b1-practice", description: "Des, Der", systemPrompt: "de-b1-565" },
            { id: "unit-566", icon: "🔗", title: "Verben 1", titleTr: "Phrasal Verbs 1", category: "de-b1-practice", description: "Trennbare Verben", systemPrompt: "de-b1-566" },
            { id: "unit-567", icon: "🔗", title: "Verben 2", titleTr: "Phrasal Verbs 2", category: "de-b1-practice", description: "Untrennbare Verben", systemPrompt: "de-b1-567" },
            { id: "unit-568", icon: "📰", title: "Medien", titleTr: "Haberler ve Medya", category: "de-b1-practice", description: "Presse", systemPrompt: "de-b1-568" },
            { id: "unit-569", icon: "🌍", title: "Umwelt", titleTr: "Çevre Sorunları", category: "de-b1-practice", description: "Probleme", systemPrompt: "de-b1-569" },
            { id: "unit-570", icon: "🌱", title: "Nachhaltigkeit", titleTr: "Sürdürülebilirlik", category: "de-b1-practice", description: "Natur", systemPrompt: "de-b1-570" },
            { id: "unit-571", icon: "🏮", title: "Kultur", titleTr: "Kültür ve Gelenekler", category: "de-b1-practice", description: "Tradition", systemPrompt: "de-b1-571" },
            { id: "unit-572", icon: "💰", title: "Wirtschaft", titleTr: "Ekonomi Temelleri", category: "de-b1-practice", description: "Geld", systemPrompt: "de-b1-572" },
            { id: "unit-573", icon: "🗣️", title: "Meinung", titleTr: "Tartışma Becerileri", category: "de-b1-practice", description: "Äußern", systemPrompt: "de-b1-573" },
            { id: "unit-574", icon: "📊", title: "Präsentat.", titleTr: "Sunum Yapma", category: "de-b1-practice", description: "Vortrag", systemPrompt: "de-b1-574" },
            { id: "unit-575", icon: "📖", title: "Literatur", titleTr: "Edebiyat 1", category: "de-b1-practice", description: "Klassik", systemPrompt: "de-b1-575" },
            { id: "unit-576", icon: "📝", title: "Schreiben", titleTr: "Akademik Yazma", category: "de-b1-practice", description: "Aufsatz", systemPrompt: "de-b1-576" },
            { id: "unit-577", icon: "🔬", title: "Wissen", titleTr: "Bilim ve Teknoloji", category: "de-b1-practice", description: "Tech", systemPrompt: "de-b1-577" },
            { id: "unit-578", icon: "🍎", title: "Gesundheit", titleTr: "Sağlık ve Beslenme", category: "de-b1-practice", description: "Döner", systemPrompt: "de-b1-578" },
            { id: "unit-579", icon: "🧠", title: "Psycho", titleTr: "Psikoloji Temelleri", category: "de-b1-practice", description: "Gedanken", systemPrompt: "de-b1-579" },
            { id: "unit-580", icon: "💼", title: "Business 1", titleTr: "İş Almancası 1", category: "de-b1-practice", description: "Beruf", systemPrompt: "de-b1-580" },
            { id: "unit-581", icon: "⏮️", title: "Plusquam.", titleTr: "Plusquamperfekt", category: "de-b1-practice", description: "Ich hatte", systemPrompt: "de-b1-581" },
            { id: "unit-582", icon: "🔮", title: "Futur II", titleTr: "Futur II", category: "de-b1-practice", description: "Gemacht haben", systemPrompt: "de-b1-582" },
            { id: "unit-583", icon: "🔗", title: "Relativ", titleTr: "Relativsätze", category: "de-b1-practice", description: "Der Mann", systemPrompt: "de-b1-583" },
            { id: "unit-584", icon: "🔗", title: "Kausal", titleTr: "Kausalsätze", category: "de-b1-practice", description: "Weil, Da", systemPrompt: "de-b1-584" },
            { id: "unit-585", icon: "🌠", title: "Wunsch", titleTr: "Wunschsätze", category: "de-b1-practice", description: "Eğer", systemPrompt: "de-b1-585" },
            { id: "unit-586", icon: "📚", title: "Kollokat.", titleTr: "Kollokationen", category: "de-b1-practice", description: "Wort", systemPrompt: "de-b1-586" },
            { id: "unit-587", icon: "🔗", title: "Konnektor", titleTr: "Konnektoren", category: "de-b1-practice", description: "Trotzdem", systemPrompt: "de-b1-587" },
            { id: "unit-588", icon: "🗣️", title: "Register", titleTr: "Formell vs Informell", category: "de-b1-practice", description: "Höflich", systemPrompt: "de-b1-588" },
            { id: "unit-589", icon: "🗣️", title: "Debatte", titleTr: "Debattieren", category: "de-b1-practice", description: "Argumente", systemPrompt: "de-b1-589" },
            { id: "unit-590", icon: "🏆", title: "B1 Wiederholung", titleTr: "B1 Tekrar", category: "de-b1-practice", description: "Seviye özeti", systemPrompt: "de-b1-590" }
        ]
    },
    {
        id: "de-b2-practice",
        title: "🇩🇪 Almanca B2",
        icon: "🎓",
        scenes: [
            { id: "unit-591", icon: "📚", title: "Gramer 1", titleTr: "İleri Gramer 1", category: "de-b2-practice", description: "Erweitert", systemPrompt: "de-b2-591" },
            { id: "unit-592", icon: "📚", title: "Gramer 2", titleTr: "İleri Gramer 2", category: "de-b2-practice", description: "Komplex", systemPrompt: "de-b2-592" },
            { id: "unit-593", icon: "📚", title: "Deyimler 1", titleTr: "Deyimler 1", category: "de-b2-practice", description: "Redewendungen", systemPrompt: "de-b2-593" },
            { id: "unit-594", icon: "📚", title: "Deyimler 2", titleTr: "Deyimler 2", category: "de-b2-practice", description: "Weitere", systemPrompt: "de-b2-594" },
            { id: "unit-595", icon: "📧", title: "Briefe", titleTr: "Formal Yazışma", category: "de-b2-practice", description: "Korrespondenz", systemPrompt: "de-b2-595" },
            { id: "unit-596", icon: "📊", title: "Vortrag", titleTr: "Sunum Teknikleri", category: "de-b2-practice", description: "Präsentation", systemPrompt: "de-b2-596" },
            { id: "unit-597", icon: "🤝", title: "Handel", titleTr: "Müzakere", category: "de-b2-practice", description: "Verhandlung", systemPrompt: "de-b2-597" },
            { id: "unit-598", icon: "⚖️", title: "Recht", titleTr: "Hukuk Almancası", category: "de-b2-practice", description: "Begriffe", systemPrompt: "de-b2-598" },
            { id: "unit-599", icon: "🏥", title: "Medizin", titleTr: "Tıbbi Almanca", category: "de-b2-practice", description: "Anatomie", systemPrompt: "de-b2-599" },
            { id: "unit-600", icon: "💰", title: "Finanz", titleTr: "Finans Almancası", category: "de-b2-practice", description: "Börse", systemPrompt: "de-b2-600" },
            { id: "unit-601", icon: "📖", title: "Lit. Anal.", titleTr: "Edebiyat Analizi", category: "de-b2-practice", description: "Lyrik", systemPrompt: "de-b2-601" },
            { id: "unit-602", icon: "🔥", title: "Themen", titleTr: "Tartışmalı Konular", category: "de-b2-practice", description: "Kontrovers", systemPrompt: "de-b2-602" },
            { id: "unit-603", icon: "🎓", title: "Lesen", titleTr: "Akademik Okuma", category: "de-b2-practice", description: "Texte", systemPrompt: "de-b2-603" },
            { id: "unit-604", icon: "🧠", title: "Denken", titleTr: "Eleştirel Düşünme", category: "de-b2-practice", description: "Kritisch", systemPrompt: "de-b2-604" },
            { id: "unit-605", icon: "🌍", title: "Pol.", titleTr: "Uluslararası İlişkiler", category: "de-b2-practice", description: "Global", systemPrompt: "de-b2-605" },
            { id: "unit-606", icon: "📺", title: "Medien", titleTr: "Medya Analizi", category: "de-b2-practice", description: "Analyse", systemPrompt: "de-b2-606" },
            { id: "unit-607", icon: "💼", title: "Business 2", titleTr: "İş Almancası 2", category: "de-b2-practice", description: "Erweitert", systemPrompt: "de-b2-607" },
            { id: "unit-608", icon: "📅", title: "Projekt", titleTr: "Proje Yönetimi", category: "de-b2-practice", description: "Managem.", systemPrompt: "de-b2-608" },
            { id: "unit-609", icon: "🌍", title: "Interkult.", titleTr: "Kültürlerarası İlet.", category: "de-b2-practice", description: "Kommunikation", systemPrompt: "de-b2-609" },
            { id: "unit-610", icon: "🚀", title: "Karriere", titleTr: "Kariyer Geliştirme", category: "de-b2-practice", description: "Entwickl.", systemPrompt: "de-b2-610" },
            { id: "unit-611", icon: "💭", title: "K. I", titleTr: "Konjunktiv I", category: "de-b2-practice", description: "Er sei", systemPrompt: "de-b2-611" },
            { id: "unit-612", icon: "🔗", title: "Partizip", titleTr: "Partizipialkonst.", category: "de-b2-practice", description: "I und II", systemPrompt: "de-b2-612" },
            { id: "unit-613", icon: "✍️", title: "Nominal", titleTr: "Nominalstil", category: "de-b2-practice", description: "Stil", systemPrompt: "de-b2-613" },
            { id: "unit-614", icon: "🔄", title: "Passiv +", titleTr: "Erweit. Passiv", category: "de-b2-practice", description: "Formen", systemPrompt: "de-b2-614" },
            { id: "unit-615", icon: "✍️", title: "Wissenschaft", titleTr: "Wiss. Schreiben", category: "de-b2-practice", description: "Deutsch", systemPrompt: "de-b2-615" },
            { id: "unit-616", icon: "📝", title: "Aufsatz", titleTr: "Aufsatz schreiben", category: "de-b2-practice", description: "Analyse", systemPrompt: "de-b2-616" },
            { id: "unit-617", icon: "🗣️", title: "Prüfung", titleTr: "Mündliche Prüfung", category: "de-b2-practice", description: "Sprechen", systemPrompt: "de-b2-617" },
            { id: "unit-618", icon: "👂", title: "Hören", titleTr: "Hörverstehen", category: "de-b2-practice", description: "Fortgeschr.", systemPrompt: "de-b2-618" },
            { id: "unit-619", icon: "📖", title: "Lesen", titleTr: "Leseverstehen", category: "de-b2-practice", description: "Komplex", systemPrompt: "de-b2-619" },
            { id: "unit-620", icon: "🏆", title: "B2 Wiederhol.", titleTr: "B2 Tekrar", category: "de-b2-practice", description: "Seviye özeti", systemPrompt: "de-b2-620" }
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
    const practiceCategories = [
        "fr-a2-practice", "fr-a1-practice", 
        "es-a1-practice", "es-a2-practice", 
        "en-a1-practice", "en-a2-practice",
        "de-a1-practice", "de-a2-practice", "de-b1-practice", "de-b2-practice"
    ];
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

// Almanca A1 pratiği
const DE_A1_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "de-a1-501": { scenario: "Yeni tanışan iki kişi", targetPhrases: ["Hallo", "Ich heiße...", "Wie heißt du?", "Freut mich", "Wie geht es dir?", "Danke, gut"], example: "Hallo, ich heiße Max. Und wie heißt du?" },
    "de-a1-502": { scenario: "Sayı söyleyen biri", targetPhrases: ["Eins, zwei, drei...", "Ich bin ... Jahre alt", "Meine Nummer ist...", "Wie viele?"], example: "Ich bin zwanzig Jahre alt." },
    "de-a1-503": { scenario: "Ailesini tanıtan biri", targetPhrases: ["Meine Mutter", "Mein Vater", "Meine Schwester", "Mein Bruder", "Das ist...", "Ich habe ... Geschwister"], example: "Das ist mein Bruder. Er heißt Lukas." },
    "de-a1-504": { scenario: "Renkleri tanımlayan biri", targetPhrases: ["Das ist...", "Welche Farbe?", "rot, blau, grün, gelb", "Meine Lieblingsfarbe ist..."], example: "Meine Lieblingsfarbe ist Blau." },
    "de-a1-505": { scenario: "Yemek yiyen biri", targetPhrases: ["Ich mag...", "Ich mag kein/e...", "Das Brot", "Der Käse", "Das Obst", "Ich esse gerne..."], example: "Ich esse gerne Brot mit Käse." },
    "de-a1-506": { scenario: "İçecek sipariş eden biri", targetPhrases: ["Ein Wasser", "Ein Kaffee", "Ein Tee", "Ich möchte...", "Bitte"], example: "Ich möchte einen Kaffee, bitte." },
    "de-a1-507": { scenario: "Gün ve ay soran biri", targetPhrases: ["Welcher Tag?", "Heute ist...", "Montag, Dienstag...", "Im Januar, Februar..."], example: "Heute ist Montag, der 15. März." },
    "de-a1-508": { scenario: "Büyük sayıları söyleyen biri", targetPhrases: ["Einundzwanzig...", "Fünfzig", "Hundert", "Wie viel kostet das?"], example: "Das kostet fünfzig Euro." },
    "de-a1-509": { scenario: "Evini anlatan biri", targetPhrases: ["Die Küche", "Das Wohnzimmer", "Das Schlafzimmer", "Das Bad", "Es gibt...", "Ich wohne in..."], example: "In meiner Wohnung gibt es zwei Zimmer." },
    "de-a1-510": { scenario: "Mobilyaları anlatan biri", targetPhrases: ["Der Tisch", "Der Stuhl", "Das Bett", "Das Sofa", "Das Regal", "Wo ist...?"], example: "Der Stift liegt auf dem Tisch." },
    "de-a1-511": { scenario: "Vücut bölümlerini gösteren biri", targetPhrases: ["Der Kopf", "Der Arm", "Das Bein", "Die Hand", "Mein ... tut weh"], example: "Mein Kopf tut weh." },
    "de-a1-512": { scenario: "Giysi alan biri", targetPhrases: ["Ein Hemd", "Eine Hose", "Ein Kleid", "Ich trage...", "Welche Größe?"], example: "Ich trage eine blaue Hose." },
    "de-a1-513": { scenario: "Hayvanları anlatan biri", targetPhrases: ["Die Katze", "Der Hund", "Der Vogel", "Ich habe...", "Ich mag Tiere"], example: "Ich habe einen kleinen Hund." },
    "de-a1-514": { scenario: "Meslek soran biri", targetPhrases: ["Was bist du von Beruf?", "Ich bin...", "Ich arbeite als...", "Arzt, Lehrer..."], example: "Ich arbeite als Informatiker." },
    "de-a1-515": { scenario: "Şehirdeki yerleri anlatan biri", targetPhrases: ["Die Schule", "Der Bahnhof", "Der Park", "Wo ist...?", "Es ist in der Nähe"], example: "Der Park ist neben der Schule." },
    "de-a1-516": { scenario: "Ulaşım araçlarını anlatan biri", targetPhrases: ["Das Auto", "Der Bus", "Der Zug", "Ich fahre mit...", "Ich nehme den..."], example: "Ich fahre mit dem Bus zur Arbeit." },
    "de-a1-517": { scenario: "Günlük rutinini anlatan biri", targetPhrases: ["Ich stehe um ... auf", "Ich frühstücke", "Ich gehe zur Arbeit", "Am Morgen/Abend"], example: "Ich stehe um sieben Uhr auf." },
    "de-a1-518": { scenario: "Saat soran biri", targetPhrases: ["Wie spät ist es?", "Es ist ... Uhr", "Halb ...", "Viertel vor/nach"], example: "Es ist halb zehn." },
    "de-a1-519": { scenario: "Hava durumunu anlatan biri", targetPhrases: ["Es ist sonnig", "Es ist kalt", "Es regnet", "Es schneit", "Wie ist das Wetter?"], example: "Heute ist es sehr sonnig und warm." },
    "de-a1-520": { scenario: "Hobilerinden bahseden biri", targetPhrases: ["Ich mag...", "Mein Hobby ist...", "Fußball spielen", "Lesen", "Musik hören"], example: "In meiner Freizeit spiele ich gerne Fußball." },
    "de-a1-521": { scenario: "Nasıl hissettiğini söyleyen biri", targetPhrases: ["Ich bin glücklich", "Ich bin traurig", "Ich bin müde", "Wie fühlst du dich?"], example: "Ich bin heute sehr glücklich!" },
    "de-a1-522": { scenario: "Okul hayatından bahseden biri", targetPhrases: ["Das Buch", "Der Stift", "Das Klassenzimmer", "Der Schüler", "Ich lerne..."], example: "Ich lerne Deutsch in der Schule." },
    "de-a1-523": { scenario: "Kutlamalardan bahseden biri", targetPhrases: ["Der Geburtstag", "Frohe Weihnachten", "Viel Glück", "Wir feiern...", "Alles Gute"], example: "Alles Gute zum Geburtstag!" },
    "de-a1-524": { scenario: "Nereli olduğunu söyleyen biri", targetPhrases: ["Ich komme aus...", "Ich bin [Nationalität]", "Woher kommst du?", "Land", "Stadt"], example: "Ich komme aus der Türkei. Ich bin Türke." },
    "de-a1-525": { scenario: "Temel eylemleri kullanan biri", targetPhrases: ["Gehen", "Essen", "Trinken", "Schlafen", "Machen", "Ich [Verb] jeden Tag"], example: "Ich trinke jeden Morgen Tee." },
    "de-a1-526": { scenario: "Artikelleri kullanan biri", targetPhrases: ["Der Mann", "Die Frau", "Das Kind", "Ein/Eine", "Welcher Artikel?"], example: "Der Mann trinkt einen Kaffee." },
    "de-a1-527": { scenario: "Akkusativ nesneleri söyleyen biri", targetPhrases: ["Einen Kaffee", "Den Apfel", "Ich sehe...", "Ich habe..."], example: "Ich habe einen Hund." },
    "de-a1-528": { scenario: "Zıt anlamlı sıfatları kullanan biri", targetPhrases: ["Groß/Klein", "Gut/Schlecht", "Alt/Neu", "Schnell/Langsam", "Sehr [Adjektiv]"], example: "Das Auto ist sehr schnell." },
    "de-a1-529": { scenario: "Yer edatlarını kullanan biri", targetPhrases: ["In", "Auf", "An", "Unter", "Hinter", "Vor", "Das liegt ..."], example: "Der Schlüssel liegt auf dem Regal." },
    "de-a1-530": { scenario: "A1 konularını tekrar eden biri", targetPhrases: ["Ich heiße...", "Ich wohne in...", "Ich mag...", "Ich kann...", "Heute", "Jetzt"], example: "Hallo, ich bin ein Student und ich lerne Deutsch." },
};

// Almanca A2 pratiği
const DE_A2_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "de-a2-531": { scenario: "Geçmişte ne yaptığını anlatan biri (Perfekt)", targetPhrases: ["Ich habe ... gemacht", "Ich bin ... gegangen", "Gestern", "Letzte Woche", "Partizip II"], example: "Gestern habe ich meine Hausaufgaben gemacht." },
    "de-a2-532": { scenario: "Geçmiş durumları anlatan biri (Präteritum)", targetPhrases: ["Ich war", "Ich hatte", "Es gab", "Früher", "Damals"], example: "Früher hatte ich viel Freizeit." },
    "de-a2-533": { scenario: "Restoranda sipariş veren biri", targetPhrases: ["Ich hätte gerne...", "Die Rechnung, bitte", "Was empfehlen Sie?", "Zahlen, bitte"], example: "Ich hätte gerne das Schnitzel mit Kartoffelsalat." },
    "de-a2-534": { scenario: "Alışveriş yapan ve fiyat soran biri", targetPhrases: ["Wie viel kostet das?", "Das ist zu teuer", "Haben Sie das in einer anderen Größe?", "Ich nehme es"], example: "Wie viel kostet dieses blaue Hemd?" },
    "de-a2-535": { scenario: "Tatil planlarından bahseden biri", targetPhrases: ["Ich plane eine Reise nach...", "Ich möchte ... besuchen", "Nächsten Sommer", "Der Urlaub"], example: "Nächsten Sommer plane ich eine Reise nach Berlin." },
    "de-a2-536": { scenario: "Otel odası ayırtan biri", targetPhrases: ["Ich möchte ein Zimmer reservieren", "Einzelzimmer/Doppelzimmer", "Inklusive Frühstück", "Wie viele Nächte?"], example: "Ich möchte ein Doppelzimmer für drei Nächte reservieren." },
    "de-a2-537": { scenario: "Havalimanında bilet/kapı soran biri", targetPhrases: ["Wo ist das Gate?", "Hier ist mein Reisepass", "Der Flug", "Abflug/Ankunft"], example: "Wo ist das Gate für den Flug nach München?" },
    "de-a2-538": { scenario: "Doktora şikayetini anlatan biri", targetPhrases: ["Ich fühle mich nicht gut", "Ich habe Fieber", "Mein Hals tut weh", "Seit wann?"], example: "Ich habe seit gestern starke Kopfschmerzen." },
    "de-a2-539": { scenario: "Eczaneden ilaç alan biri", targetPhrases: ["Ich brauche etwas gegen...", "Wie oft soll ich das nehmen?", "Zweimal täglich", "Das Medikament"], example: "Ich brauche etwas gegen Husten, bitte." },
    "de-a2-540": { scenario: "İşinden ve iş yerinden bahseden biri", targetPhrases: ["Ich arbeite bei...", "Meine Aufgaben sind...", "Der Kollege", "Das Büro"], example: "Ich arbeite bei einer großen Firma als Ingenieur." },
    "de-a2-541": { scenario: "İş görüşmesinde soruları yanıtlayan biri", targetPhrases: ["Ich habe Erfahrung in...", "Meine Stärken sind...", "Warum wollen Sie diesen Job?", "Das Team"], example: "Ich habe zwei Jahre Erfahrung im Marketing." },
    "de-a2-542": { scenario: "Telefonda resmi bir görüşme yapan biri", targetPhrases: ["Hallo, hier spricht...", "Kann ich bitte mit ... sprechen?", "Einen Moment, bitte", "Zurückrufen"], example: "Kann ich bitte mit Frau Schmidt sprechen?" },
    "de-a2-543": { scenario: "E-posta yazarken bilgi alışverişi yapan biri", targetPhrases: ["Sehr geehrte Damen und Herren", "Mit freundlichen Grüßen", "Im Anhang finden Sie...", "Antworten"], example: "Im Anhang finden Sie meinen Lebenslauf." },
    "de-a2-544": { scenario: "Duygularını ifade eden biri", targetPhrases: ["Ich bin nervös", "Ich freue mich auf...", "Keine Sorge", "Überrascht", "Enttäuscht"], example: "Ich freue mich sehr auf unser Treffen nächste Woche." },
    "de-a2-545": { scenario: "Bir arkadaşının karakterini anlatan biri", targetPhrases: ["Er/Sie ist...", "Freundlich/Schüchtern", "Höflich/Ehrlich", "Fleißig", "Humorvoll"], example: "Mein bester Freund ist sehr lustig und ehrlich." },
    "de-a2-546": { scenario: "Spor rutininden bahseden biri", targetPhrases: ["Ich gehe ins Fitnessstudio", "Ich mache Yoga", "Zweimal pro Woche", "Gesund leben", "Sport treiben"], example: "Ich gehe dreimal pro Woche joggen." },
    "de-a2-547": { scenario: "Müzik ve sanat ilgi alanlarını paylaşan biri", targetPhrases: ["Ich spiele Gitarre", "Ich liebe Konzerte", "Ein Museum besuchen", "Maler/Band", "Kunst"], example: "Ich liebe es, klassische Musik zu hören." },
    "de-a2-548": { scenario: "Sevdiği film veya diziden bahseden biri", targetPhrases: ["Der Film handelt von...", "Die Handlung ist...", "Hast du ... gesehen?", "Lieblingsserie"], example: "Meine Lieblingsserie ist sehr spannend." },
    "de-a2-549": { scenario: "Teknolojik cihazlar hakkında konuşan biri", targetPhrases: ["Ich muss ... aktualisieren", "WLAN-Passwort", "Eine App herunterladen", "Das Smartphone", "Der Laptop"], example: "Wie kann ich mich mit dem WLAN verbinden?" },
    "de-a2-550": { scenario: "Sosyal medya alışkanlıklarını anlatan biri", targetPhrases: ["Ich habe ein foto gepostet", "Folgen/Teilen/Liken", "Soziale Medien", "Das Profil", "Online sein"], example: "Ich nutze Instagram jeden Tag." },
    "de-a2-551": { scenario: "Ev ve taşınma hakkında konuşan biri", targetPhrases: ["Eine Wohnung mieten", "Der Vermieter", "Die Möbel", "Einziehen", "Der Balkon"], example: "Ich ziehe nächsten Monat in eine neue Wohnung um." },
    "de-a2-552": { scenario: "Doğayı koruma hakkında konuşan biri", targetPhrases: ["Recyceln", "Der Klimawandel", "Die Umwelt schützen", "Energie sparen", "Natur"], example: "Wir müssen mehr Plastik recyceln." },
    "de-a2-553": { scenario: "Okuduğu bir haberi paylaşan biri", targetPhrases: ["Hast du die Nachrichten gesehen?", "Die Schlagzeile", "Der Artikel", "Interessant/Wichtig"], example: "Ich habe einen interessanten Artikel über Berlin gelesen." },
    "de-a2-554": { scenario: "Alman geleneklerini ve kültürünü anlatan biri", targetPhrases: ["Es ist eine Tradition", "Wir feiern...", "Besonderes Essen", "Feste", "Kultur"], example: "In Deutschland feiern wir Weihnachten mit der Familie." },
    "de-a2-555": { scenario: "Dativ nesneleri ve zamirleri kullanan biri", targetPhrases: ["Mit meinem Freund", "Nach der Arbeit", "Ich helfe dir", "Gefallen/Gehören"], example: "Das Buch gehört meinem Bruder." },
    "de-a2-556": { scenario: "Tavsiye veren veya kuralları anlatan biri", targetPhrases: ["Du solltest...", "Du musst...", "Darf ich...?", "Können/Wollen", "Ratschlag"], example: "Du solltest mehr Wasser trinken." },
    "de-a2-557": { scenario: "Sebep ve amaç belirten cümleler kuran biri", targetPhrases: ["Weil...", "Dass...", "Ob...", "Deshalb", "Nebensatz"], example: "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte." },
    "de-a2-558": { scenario: "Karşılaştırma yapan biri", targetPhrases: ["Größer als...", "Genauso ... wie", "Am besten", "Besser/Mehr", "Vergleichen"], example: "München ist teurer als Berlin." },
    "de-a2-559": { scenario: "Dönüşlü fiilleri kullanan biri", targetPhrases: ["Ich freue mich", "Ich konzentriere mich", "Sich beeilen", "Sich interessieren für"], example: "Ich interessiere mich für deutsche Geschichte." },
    "de-a2-560": { scenario: "A2 seviyesinde öğrendiklerini özetleyen biri", targetPhrases: ["Ich habe viel gelernt", "Meine Fortschritte", "Grammatik/Wortschatz", "Nächstes Level"], example: "Ich kann jetzt einfache Gespräche auf Deutsch führen." },
};

// Almanca B1 pratiği
const DE_B1_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "de-b1-561": { scenario: "Gelecek planlarından bahseden biri (Futur I)", targetPhrases: ["Ich werde ... machen", "Ich werde wohl...", "Was wirst du tun?", "In der Zukunft"], example: "Ich werde nächstes Jahr mein Studium abschließen." },
    "de-b1-562": { scenario: "Hayallerinden ve varsayımlardan bahseden biri (Konjunktiv II)", targetPhrases: ["Ich würde gerne...", "Wenn ich Zeit hätte...", "An deiner Stelle würde ich...", "Könnte/Müsste"], example: "Wenn ich im Lotto gewinnen würde, würde ich eine Weltreise machen." },
    "de-b1-563": { scenario: "Süreçleri ve pasif eylemleri anlatan biri (Passiv)", targetPhrases: ["Es wird gemacht", "Es wurde gebaut", "Das wird repariert", "Zustandspassiv"], example: "Das Auto wird heute in der Werkstatt repariert." },
    "de-b1-564": { scenario: "Birinin sözlerini aktaran biri (Indirekte Rede)", targetPhrases: ["Er sagte, dass...", "Sie fragte, ob...", "Laut dem Bericht", "Dass-Sätze"], example: "Er sagte, dass er erst später kommen kann." },
    "de-b1-565": { scenario: "Genitiv bilgisini kullanan bir yazar", targetPhrases: ["Wegen des Wetters", "Trotz der Probleme", "Während meines Urlaubs", "Besitzanzeigend"], example: "Wegen des schlechten Wetters bleiben wir heute zu Hause." },
    "de-b1-566": { scenario: "Ayrılabilen fiilleri kullanan biri", targetPhrases: ["Aufstehen", "Anfangen", "Abgeben", "Zuhören", "Trennbar"], example: "Wann fängt der Kurs heute an?" },
    "de-b1-567": { scenario: "Ayrılamayan fiilleri kullanan biri", targetPhrases: ["Verstehen", "Erklären", "Besprechen", "Empfehlen", "Untrennbar"], example: "Können Sie mir das bitte noch einmal erklären?" },
    "de-b1-568": { scenario: "Medya ve basın hakkında konuşan biri", targetPhrases: ["Die Pressefreiheit", "Einen Artikel veröffentlichen", "Die sozialen Medien beeinflussen", "Informationen verbreiten"], example: "In den sozialen Medien werden viele Informationen verbreitet." },
    "de-b1-569": { scenario: "Çevre sorunlarını tartışan biri", targetPhrases: ["Die globale Erwärmung", "Den Müll trennen", "Erneuerbare Energien", "Umweltbewusst handeln"], example: "Wir müssen mehr für den Umweltschutz tun." },
    "de-b1-570": { scenario: "Sürdürülebilirlik hakkında konuşan biri", targetPhrases: ["Die Nachhaltigkeit", "Ressourcen schonen", "Ökologisch", "Langfristig planen"], example: "Nachhaltigkeit ist ein wichtiges Thema unserer Zeit." },
    "de-b1-571": { scenario: "Kültürel farklılıkları tartışan biri", targetPhrases: ["Kulturelle Unterschiede", "Die Integration", "Die Vielfalt", "Sich anpassen"], example: "Kulturelle Vielfalt bereichert unsere Gesellschaft." },
    "de-b1-572": { scenario: "Ekonomi temellerinden bahseden biri", targetPhrases: ["Der Arbeitsmarkt", "Die Inflation", "Das Wirtschaftswachstum", "Investieren"], example: "Das Wirtschaftswachstum hat sich dieses Jahr verlangsamt." },
    "de-b1-573": { scenario: "Fikirlerini savunan biri", targetPhrases: ["Meiner Meinung nach...", "Ich bin der Ansicht, dass...", "Einerseits ... andererseits", "Zustimmen/Widersprechen"], example: "Meiner Meinung nach ist das eine gute Lösung." },
    "de-b1-574": { scenario: "Bir proje sunumu yapan biri", targetPhrases: ["Ich möchte Ihnen heute ... vorstellen", "Wie Sie auf der Grafik sehen...", "Zusammenfassend lässt sich sagen", "Ein kurzes Fazit"], example: "Ich möchte Ihnen heute mein neues Projekt vorstellen." },
    "de-b1-575": { scenario: "Bir kitap veya şiiri analiz eden biri", targetPhrases: ["Die Hauptperson", "Das Thema des Buches", "Der Autor beschreibt...", "Die literarische Epoche"], example: "In diesem Roman geht es um die Suche nach Freiheit." },
    "de-b1-576": { scenario: "Akademik bir yazı yazan öğrenci", targetPhrases: ["In dieser Hausarbeit", "Es lässt sich feststellen", "Darüber hinaus", "Bezug nehmend auf..."], example: "In dieser Arbeit werde ich die Auswirkungen der Technik analysieren." },
    "de-b1-577": { scenario: "Bilimsel gelişmelerden bahseden biri", targetPhrases: ["Die künstliche Intelligenz", "Technische Fortschritte", "Forschen", "Entwickeln"], example: "Die Forschung im Bereich der KI macht große Fortschritte." },
    "de-b1-578": { scenario: "Sağlık ve sağlıklı yaşamdan bahseden biri", targetPhrases: ["Eine ausgewogene Ernährung", "Regelmäßige Bewegung", "Stress abbauen", "Die Lebensqualität"], example: "Regelmäßige Bewegung ist wichtig für die Gesundheit." },
    "de-b1-579": { scenario: "Psikolojik temalardan bahseden biri", targetPhrases: ["Das Verhalten", "Die Emotionen", "Die Psyche", "Menschliche Beziehungen"], example: "Unsere Emotionen beeinflussen oft unsere Entscheidungen." },
    "de-b1-580": { scenario: "İş hayatı ve kariyerden bahseden biri", targetPhrases: ["Die Karriereleiter", "Berufliche Ziele", "Sich weiterbilden", "Die Flexibilität"], example: "Man muss sich ständig weiterbilden, um Erfolg zu haben." },
    "de-b1-581": { scenario: "Geçmişin de öncesini anlatan biri (Plusquamperfekt)", targetPhrases: ["Nachdem ich ... hatte", "Bevor er ... war", "Damals", "Abgeschlossen"], example: "Nachdem ich gegessen hatte, ging ich spazieren." },
    "de-b1-582": { scenario: "Gelecekte bitmiş olacak olayları anlatan biri (Futur II)", targetPhrases: ["Ich werde es gemacht haben", "Bis morgen wird er...", "Vermutung", "Abgeschlossen in der Zukunft"], example: "Bis morgen wird er den Bericht fertig geschrieben haben." },
    "de-b1-583": { scenario: "İlgi cümlecikleri kullanan biri (Relativsätze)", targetPhrases: ["Der Mann, der...", "Das Haus, in dem...", "Die Frau, deren...", "Relativpronomen"], example: "Das ist die Frau, die ich gestern im Kino gesehen habe." },
    "de-b1-584": { scenario: "Neden belirten karmaşık cümleler kuran biri (Kausal/Konzessiv)", targetPhrases: ["Obwohl...", "Da...", "Sodass...", "Trotzdem"], example: "Obwohl es regnete, sind wir wandern gegangen." },
    "de-b1-585": { scenario: "Dilek ve şart cümleleri kuran biri", targetPhrases: ["Wäre ich doch...", "Hätte ich nur...", "Es sei denn", "Falls"], example: "Hätte ich doch nur mehr Zeit für meine Hobbys!" },
    "de-b1-586": { scenario: "İleri düzey kelime birlikteliklerini kullanan biri", targetPhrases: ["Einen Entschluss fassen", "Kritik üben", "In Frage stellen", "Abschied nehmen"], example: "Man sollte auch mal Kritik an sich selbst üben." },
    "de-b1-587": { scenario: "Cümle bağlaçlarını profesyonel kullanan biri", targetPhrases: ["Zwar ... aber", "Nicht nur ... sondern auch", "Weder ... noch", "Entweder ... oder"], example: "Er spricht nicht nur Deutsch, sondern auch Französisch." },
    "de-b1-588": { scenario: "Resmiyet seviyeleri arasında geçiş yapan biri", targetPhrases: ["Gestatten Sie mir", "Darf ich Sie darauf hinweisen", "Umgangssprachlich", "Gehobenes Deutsch"], example: "Gestatten Sie mir, Ihnen eine Frage zu stellen." },
    "de-b1-589": { scenario: "Bir münazarada argüman sunan biri", targetPhrases: ["Das Hauptargument dafür ist...", "Man darf nicht vergessen, dass...", "Dagegen spricht...", "Einwände erheben"], example: "Das Hauptargument gegen diese Regelung ist die Freiheit." },
    "de-b1-590": { scenario: "B1 seviyesini tamamlayan bir öğrenci", targetPhrases: ["Ich beherrsche...", "Die Sprachprüfung bestehen", "Selbstständig kommunizieren", "Niveau"], example: "Ich fühle mich jetzt bereit für die B1-Prüfung." },
};

// Almanca B2 pratiği
const DE_B2_PRACTICE_DATA: Record<string, { scenario: string, targetPhrases: string[], example: string }> = {
    "de-b2-591": { scenario: "Karmaşık gramer yapılarını tartışan biri", targetPhrases: ["Partizipialattribute", "Passiv-Ersatzformen", "Satzverbindungen", "Adjektivdeklination"], example: "Die zu besprechenden Themen sind sehr komplex." },
    "de-b2-592": { scenario: "Üst düzey dil becerilerini sergileyen biri", targetPhrases: ["Nominalisierung", "Funktionsverbgefüge", "Präpositionaladjektive", "Wortbildung"], example: "Er brachte sein Bedauern zum Ausdruck." },
    "de-b2-593": { scenario: "Günlük hayatta deyimleri kullanan biri", targetPhrases: ["Auf dem Schlauch stehen", "Die Kirche im Dorf lassen", "Ein Auge zudrücken", "Den Faden verlieren"], example: "Ich stand total auf dem Schlauch." },
    "de-b2-594": { scenario: "İş hayatında deyimleri kullanan biri", targetPhrases: ["Nägel mit Köpfen machen", "Etwas unter Dach und Fach bringen", "Den Gürtel enger schnallen", "Alles unter einen Hut bringen"], example: "Wir müssen endlich Nägel mit Köpfen machen." },
    "de-b2-595": { scenario: "Profesyonel bir şikayet mektubu yazan biri", targetPhrases: ["Hiermit möchte ich mich beschweren über...", "Ich erwarte von Ihnen...", "Sollte ich keine Antwort erhalten...", "Unangemessen"], example: "Hiermit möchte ich mich über den schlechten Service beschweren." },
    "de-b2-596": { scenario: "Karmaşık bir konuyu sunan uzman", targetPhrases: ["Einleitend lässt sich sagen", "Im Gegensatz dazu steht...", "Dies hat zur Folge, dass...", "Ein entscheidender Punkt ist..."], example: "Ein entscheidender Punkt in dieser Debatte ist die Sicherheit." },
    "de-b2-597": { scenario: "Bir iş anlaşması için müzakere yapan biri", targetPhrases: ["Einen Kompromiss schließen", "Über den Preis verhandeln", "Bedingungen stellen", "Ein faires Angebot"], example: "Könnten wir uns auf einen Kompromiss einigen?" },
    "de-b2-598": { scenario: "Hukuki bir konu hakkında bilgi veren biri", targetPhrases: ["Einen Vertrag unterzeichnen", "Gegen geltendes Recht verstoßen", "Die rechtliche Lage klären", "Anspruch haben auf"], example: "Sie haben einen gesetzlichen Anspruch auf Urlaub." },
    "de-b2-599": { scenario: "Tıbbi bir vaka hakkında konuşan doktor", targetPhrases: ["Eine Diagnose stellen", "Körperliche Beschwerden lindern", "Chronische Erkrankungen", "Die Heilungschancen"], example: "Der Arzt stellte eine eindeutige Diagnose." },
    "de-b2-600": { scenario: "Borsa ve finans hakkında konuşan biri", targetPhrases: ["In Aktien investieren", "Das Risiko streuen", "Der Zinseszinnseffekt", "Finanzielle Unabhängigkeit"], example: "Es ist wichtig, das Risiko bei Investitionen zu streuen." },
    "de-b2-601": { scenario: "Bir şiiri veya edebi metni derinlemesine inceleyen biri", targetPhrases: ["Die Metapher", "Die rhetorischen Mittel analysieren", "Die Interpretation", "Die Intention des Autors"], example: "In diesem Gedicht nutzt der Autor viele Metaphern." },
    "de-b2-602": { scenario: "Politik bir konuda tartışan biri", targetPhrases: ["Politische Entscheidungen hinterfragen", "Die Demokratie stärken", "Bürgerpflichten", "Öffentliche Meinung"], example: "Wir sollten politische Entscheidungen kritisch hinterfragen." },
    "de-b2-603": { scenario: "Bilimsel bir makaleyi özetleyen akademisyen", targetPhrases: ["Die vorliegende Studie zeigt...", "Empirische Daten", "Die Relevanz der Ergebnisse", "Schlussfolgerungen ziehen"], example: "Die vorliegende Studie zeigt interessante Ergebnisse." },
    "de-b2-604": { scenario: "Felsefi bir tartışma yürüten biri", targetPhrases: ["Ethische Werte", "Die moralische Verantwortung", "Das Bewusstsein erweitern", "Grundsätzliche Fragen"], example: "Haben wir eine moralische Verantwortung gegenüber der Natur?" },
    "de-b2-605": { scenario: "Uluslararası olayları analiz eden biri", targetPhrases: ["Globale Herausforderungen", "Die Außenpolitik", "Diplomatische Beziehungen", "Internationale Abkommen"], example: "Diplomatische Beziehungen sind wichtig für den Frieden." },
    "de-b2-606": { scenario: "Medya manipülasyonunu tartışan biri", targetPhrases: ["Fake News erkennen", "Die Medienkompetenz", "Objektive Berichterstattung", "Journalistische Sorgfalt"], example: "Medienkompetenz ist heutzutage wichtiger denn je." },
    "de-b2-607": { scenario: "İş yerinde liderlik hakkında konuşan yönetici", targetPhrases: ["Mitarbeiter motivieren", "Verantwortung übernehmen", "Flache Hierarchien", "Die Unternehmenskultur"], example: "Ein guter Chef muss seine Mitarbeiter motivieren können." },
    "de-b2-608": { scenario: "Bir projeyi koordine eden proje müdürü", targetPhrases: ["Termine einhalten", "Den Überblick behalten", "Effiziente Arbeitsweise", "Meilensteine erreichen"], example: "Wir müssen unbedingt den Zeitplan einhalten." },
    "de-b2-609": { scenario: "Kültürlerarası çatışmaları çözen danışman", targetPhrases: ["Interkulturelle Kompetenz", "Vorurteile abbauen", "Missverständnisse klären", "Offenheit gegenüber Neuem"], example: "Interkulturelle Kompetenz hilft bei der Integration." },
    "de-b2-610": { scenario: "Kariyer hedeflerini anlatan profesyonel", targetPhrases: ["Berufliche Neuorientierung", "Sich neuen Herausforderungen stellen", "Aufstiegsmöglichkeiten", "Potenziale entfalten"], example: "Ich suche nach einer neuen beruflichen Herausforderung." },
    "de-b2-611": { scenario: "Haberlerdeki sözleri aktaran biri (Konjunktiv I)", targetPhrases: ["Er sagte, er habe...", "Man behaupte, dass...", "Wie berichtet werde...", "Indirekte Fragen"], example: "Der Minister sagte, er habe keine Kenntnis davon." },
    "de-b2-612": { scenario: "Cümlelerini kısaltan bir yazar (PartizipIAL)", targetPhrases: ["Die spielenden Kinder", "Das gelesene Buch", "Alles berücksichtigend", "Mit zitternder Stimme"], example: "Die laut singenden Gäste störten die Nachbarn." },
    "de-b2-613": { scenario: "Resmi rapor yazan bir memur (Nominalstil)", targetPhrases: ["Zur Bereitstellung von...", "Bei Eintreffen der Ware...", "Unter Berücksichtigung der Umstände", "Die Durchführung"], example: "Bei Eintreffen der Ware erfolgt die Bezahlung." },
    "de-b2-614": { scenario: "Pasif yapıların alternatiflerini kullanan biri", targetPhrases: ["Das lässt sich machen", "Es gilt zu beachten", "Es ist zu erledigen", "Man kann es bearbeiten"], example: "Diese Aufgabe lässt sich leicht lösen." },
    "de-b2-615": { scenario: "Bilimsel bir deney anlatan araştırmacı", targetPhrases: ["Eine Hypothese aufstellen", "Die Versuchsanordnung", "Die Ergebnisse verifizieren", "Publizieren"], example: "Wir müssen die Hypothese durch Experimente belegen." },
    "de-b2-616": { scenario: "Bir kompozisyon yazan öğrenci", targetPhrases: ["Im Folgenden werde ich...", "Daraus ergibt sich...", "Zusammenfassend kann man festhalten", "Ein weiterer Aspekt"], example: "Daraus ergibt sich die Notwendigkeit einer Reform." },
    "de-b2-617": { scenario: "Sözlü sınavda kendini ifade eden aday", targetPhrases: ["Ich bin fest davon überzeugt, dass...", "Darf ich den Punkt näher erläutern?", "Soweit ich weiß...", "In Bezug auf"], example: "Darf ich diesen Punkt noch etwas näher erläutern?" },
    "de-b2-618": { scenario: "Hızlı konuşulan bir podcasti anlatan biri", targetPhrases: ["Wesentliche Informationen erfassen", "Dem Faden folgen", "Inhalte wiedergeben", "Differenzierte Ansichten"], example: "Man muss den wesentlichen Informationen im Podcast folgen." },
    "de-b2-619": { scenario: "Zor bir metni anlayan okuyucu", targetPhrases: ["Zwischen den Zeilen lesen", "Komplexe Zusammenhänge verstehen", "Den Text erschließen", "Kernaussage"], example: "Es ist wichtig, auch zwischen den Zeilen zu lesen." },
    "de-b2-620": { scenario: "B2 seviyesini ustalıkla bitiren öğrenci", targetPhrases: ["Fließend und spontan sprechen", "Über ein breites Spektrum an Themen verfügen", "Sich differenziert ausdrücken", "B2-Niveau erreicht"], example: "Ich kann mich jetzt fließend zu komplexen Themen äußern." },
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
    } else if (scene.systemPrompt.startsWith("de-a1-")) {
        unitData = DE_A1_PRACTICE_DATA[scene.systemPrompt];
    } else if (scene.systemPrompt.startsWith("de-a2-")) {
        unitData = DE_A2_PRACTICE_DATA[scene.systemPrompt];
    } else if (scene.systemPrompt.startsWith("de-b1-")) {
        unitData = DE_B1_PRACTICE_DATA[scene.systemPrompt];
    } else if (scene.systemPrompt.startsWith("de-b2-")) {
        unitData = DE_B2_PRACTICE_DATA[scene.systemPrompt];
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
    const languageName = language === 'fr' ? 'FRANSIZCA' : language === 'es' ? 'İSPANYOLCA' : language === 'en' ? 'İNGİLİZCE' : language === 'de' ? 'ALMANCA' : langInfo.native.toUpperCase();
    const languageNative = language === 'fr' ? 'Fransızca' : language === 'es' ? 'İspanyolca' : language === 'en' ? 'İngilizce' : language === 'de' ? 'Almanca' : langInfo.native;

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
