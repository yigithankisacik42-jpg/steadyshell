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
