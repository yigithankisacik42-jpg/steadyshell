/**
 * SteadyShell Video Veritabanı
 * YouTube video ID'leri - NotebookLM ile oluşturulan ders videoları
 */

export interface UnitVideo {
    unitId: number;
    youtubeId: string;
    title: string;
    level: string;
}

// A1 Videoları (Ünite 1-20)
export const a1Videos: UnitVideo[] = [
    { unitId: 1, youtubeId: "ZUvW0ebMq74", title: "Selamlaşma ve Tanışma", level: "A1" },
    { unitId: 2, youtubeId: "sh9UT1cof1k", title: "Sayılar 1-20", level: "A1" },
    { unitId: 3, youtubeId: "hxjpRBZ-LuY", title: "Aile Üyeleri", level: "A1" },
    { unitId: 4, youtubeId: "FyVxlqMfzN8", title: "Renkler", level: "A1" },
    { unitId: 5, youtubeId: "K2R2zy5sZ6k", title: "Günler ve Aylar", level: "A1" },
    { unitId: 6, youtubeId: "eK73fTxIEyY", title: "Meslekler", level: "A1" },
    { unitId: 7, youtubeId: "cMCVeolMJcA", title: "Yiyecekler", level: "A1" },
    { unitId: 8, youtubeId: "fJDI2gWuh9A", title: "İçecekler", level: "A1" },
    { unitId: 9, youtubeId: "iJ_FNPNl08Q", title: "Ev ve Odalar", level: "A1" },
    { unitId: 10, youtubeId: "knCjdq4g_cE", title: "Mobilyalar", level: "A1" },
    { unitId: 11, youtubeId: "7Wvjnwwh6OI", title: "Vücut Bölümleri", level: "A1" },
    { unitId: 12, youtubeId: "gs_eNd0aXWw", title: "Hayvanlar", level: "A1" },
    { unitId: 13, youtubeId: "70q12tvXRmg", title: "Ulaşım", level: "A1" },
    { unitId: 14, youtubeId: "BijZcpOnNRg", title: "Şehirde Yerler", level: "A1" },
    { unitId: 15, youtubeId: "p6oneYOkIJY", title: "Hava Durumu", level: "A1" },
    { unitId: 16, youtubeId: "eQA7i4Mq0D0", title: "Hobiler", level: "A1" },
    { unitId: 17, youtubeId: "IRN1iIGoMvo", title: "Günlük Rutinler", level: "A1" },
    { unitId: 18, youtubeId: "shXvVTYWYIE", title: "Sayılar 21-100", level: "A1" },
    { unitId: 19, youtubeId: "p0Eq79cLnUg", title: "Alışveriş", level: "A1" },
    { unitId: 20, youtubeId: "sqXFu71pFOo", title: "A1 Tekrar", level: "A1" },
    // Yeni A1 Üniteleri (21-25)
    { unitId: 21, youtubeId: "39h3v7vVVHs", title: "Duygular ve Hisler", level: "A1" },
    { unitId: 22, youtubeId: "pcrEMOvVKeE", title: "Okul ve Sınıf", level: "A1" },
    { unitId: 23, youtubeId: "0IycAsgTlbE", title: "Meyveler ve Sebzeler", level: "A1" },
    { unitId: 25, youtubeId: "My7NkVqXPvo", title: "Fiiller ve Eylemler", level: "A1" },
    { unitId: 26, youtubeId: "pgZxEc8dslQ", title: "İşaret Sıfatları", level: "A1" },
    // Unit 27 video pending
    { unitId: 28, youtubeId: "F1seDfFyWBg", title: "Sıra Sayıları", level: "A1" },
    { unitId: 29, youtubeId: "utEk7i4u-rk", title: "Soru Kelimeleri", level: "A1" },
    { unitId: 30, youtubeId: "bN35NuNhkE8", title: "PODER Fiili", level: "A1" },
];

// A2 Videoları (Ünite 31-60)
export const a2Videos: UnitVideo[] = [
    { unitId: 31, youtubeId: "otvzrZD08sA", title: "Geçmiş Zaman 1 - Pretérito Indefinido", level: "A2" },
    { unitId: 32, youtubeId: "wBSXs-Q5utA", title: "Geçmiş Zaman 2 - Düzensiz Fiiller", level: "A2" },
    { unitId: 33, youtubeId: "6v7Z5H6fbv4", title: "Restoranda", level: "A2" },
    { unitId: 34, youtubeId: "FB5j04Eucig", title: "Alışverişte Uzmanlaşmak", level: "A2" },
    { unitId: 35, youtubeId: "h02koPddAT8", title: "Seyahat Planları", level: "A2" },
    { unitId: 36, youtubeId: "m4maOV6Z_do", title: "Otel Rezervasyonu", level: "A2" },
    { unitId: 37, youtubeId: "r7XtIJzeLAs", title: "Havalimanında", level: "A2" },
    { unitId: 38, youtubeId: "A80UlhfEYD0", title: "Doktorda", level: "A2" },
    { unitId: 39, youtubeId: "XJ4OpCFp7ao", title: "Eczanede", level: "A2" },
    { unitId: 40, youtubeId: "dWXygNo3XLA", title: "Meslekler 2", level: "A2" },
    { unitId: 41, youtubeId: "dWXygNo3XLA", title: "İş Görüşmesi", level: "A2" },
    { unitId: 42, youtubeId: "stKM54CHbH8", title: "Telefonda", level: "A2" },
    { unitId: 43, youtubeId: "sxWl7XflTf0", title: "E-posta Yazma", level: "A2" },
    { unitId: 44, youtubeId: "oeBJk41YxSU", title: "Fikir Beyan Etme", level: "A2" },
    { unitId: 45, youtubeId: "oQt6w5tZw5Y", title: "Karakter Özellikleri", level: "A2" },
    { unitId: 46, youtubeId: "WdBclrH3ohI", title: "Gelecek Planları", level: "A2" },
    { unitId: 47, youtubeId: "0JSMWeWZpLE", title: "Emir Kipi (Tú)", level: "A2" },
    { unitId: 48, youtubeId: "jvhE-RbN0UA", title: "Sinema ve Dizi", level: "A2" },
    { unitId: 49, youtubeId: "HEc6YWmV8lo", title: "Teknoloji", level: "A2" },
    { unitId: 50, youtubeId: "Q4ZwlhO7eNA", title: "Sosyal Medya", level: "A2" },
    { unitId: 51, youtubeId: "-pYo8phymno", title: "Ev ve Taşınma", level: "A2" },
    { unitId: 52, youtubeId: "1R2V5--qzN8", title: "Çevre ve Doğa", level: "A2" },
    { unitId: 53, youtubeId: "WFUkKpAERlc", title: "Haberler", level: "A2" },
    { unitId: 54, youtubeId: "2YVhk6xd-5I", title: "Kültür ve Gelenekler", level: "A2" },
    { unitId: 55, youtubeId: "s41ECvE7VEI", title: "İlgi Zamirleri", level: "A2" },
    { unitId: 56, youtubeId: "aw9o8wuFTOo", title: "Dolaylı Nesne Zamirleri", level: "A2" },
    { unitId: 57, youtubeId: "4cnmXZ8L8x0", title: "Belirsiz Zamirler", level: "A2" },
    { unitId: 58, youtubeId: "2WS6qMGZYdQ", title: "A2 Nitelik Sıfatları", level: "A2" },
    { unitId: 59, youtubeId: "ymyw1K8j7jE", title: "Zarflar", level: "A2" },
    { unitId: 60, youtubeId: "D9CeOnZH3e0", title: "Final Tekrar", level: "A2" },
];

// B1 Videoları (Ünite 41-60)
export const b1Videos: UnitVideo[] = [];

// B2 Videoları (Ünite 61-80)
export const b2Videos: UnitVideo[] = [];

// ====== FRANSIZCA VİDEOLARI ======
// Fransızca A1 Videoları (Ünite 301-330)
export const frA1Videos: UnitVideo[] = [
    { unitId: 301, youtubeId: "pbaouSyQ50I", title: "Selamlaşma ve Tanışma", level: "A1" },
    { unitId: 302, youtubeId: "kFATgstQqFo", title: "Aksanlar ve Ulama", level: "A1" },
    { unitId: 303, youtubeId: "N0hcQD5xyYg", title: "Sayılar 0-20", level: "A1" },
    { unitId: 304, youtubeId: "vTQoOvoShuQ", title: "Renkler", level: "A1" },
    { unitId: 305, youtubeId: "pdeAgEKf0x8", title: "İyelik Sıfatları", level: "A1" },
    { unitId: 306, youtubeId: "858DOJiwdBM", title: "Günler ve Zaman", level: "A1" },
    { unitId: 307, youtubeId: "qijaZTJYvEQ", title: "Ülkeler ve Milliyetler", level: "A1" },
    { unitId: 308, youtubeId: "qqKnW8l9vuA", title: "Meslekler", level: "A1" },
    { unitId: 309, youtubeId: "HBBjtOEstaM", title: "Evimiz", level: "A1" },
    { unitId: 310, youtubeId: "7Xr017HFkig", title: "Sınıfta", level: "A1" },
    { unitId: 311, youtubeId: "1ngixAv1Pqo", title: "Vücudumuz", level: "A1" },
    { unitId: 312, youtubeId: "DdPzOwdTNiQ", title: "Giysiler", level: "A1" },
    { unitId: 313, youtubeId: "NperjB9yH9I", title: "Yiyecekler", level: "A1" }, // Video OK
    { unitId: 314, youtubeId: "bf__GK-vGOg", title: "İçecekler", level: "A1" },
    { unitId: 315, youtubeId: "xdof7kG1Gio", title: "Saatler", level: "A1" },
    { unitId: 316, youtubeId: "w-Gp7UjkFu4", title: "Günlük Rutin", level: "A1" },
    { unitId: 317, youtubeId: "rZ6O0QDJtMw", title: "Hobiler", level: "A1" },
    { unitId: 318, youtubeId: "3VbAiVhaqOU", title: "Hava Durumu", level: "A1" },
    { unitId: 319, youtubeId: "OHlc5tltHqc", title: "Duygular", level: "A1" },
    { unitId: 320, youtubeId: "ghQEVtBMKnU", title: "Şehirde Yönler", level: "A1" },
    { unitId: 321, youtubeId: "YiPopRksYMA", title: "Ulaşım", level: "A1" },
    { unitId: 322, youtubeId: "YSptqTMNOQM", title: "Mevsimler", level: "A1" },
    { unitId: 323, youtubeId: "gKVZct090as", title: "Doğum Günü", level: "A1" },
    { unitId: 324, youtubeId: "viIw2KTYKUo", title: "Tatilde", level: "A1" },
    { unitId: 325, youtubeId: "gsL_ztzNWKA", title: "Alışveriş", level: "A1" },
    { unitId: 326, youtubeId: "GsWfhzkHlmM", title: "Restoranda", level: "A1" },
    { unitId: 327, youtubeId: "qCGBxEfd_p0", title: "Karşılaştırma", level: "A1" },
    { unitId: 328, youtubeId: "ludiYRNkOp4", title: "Hayvanlar", level: "A1" },
    { unitId: 329, youtubeId: "ludiYRNkOp4", title: "Teknoloji", level: "A1" },
];

// Fransızca A2 Videoları (Ünite 331-360)
export const frA2Videos: UnitVideo[] = [
    { unitId: 352, youtubeId: "e-4m5QkP-4M", title: "Davet Etme", level: "A2" },
    { unitId: 353, youtubeId: "OB4LFXFWe_g", title: "Özür Dileme", level: "A2" },
    { unitId: 355, youtubeId: "m83JDXvCnSk", title: "Şehir Hayatı", level: "A2" },
    { unitId: 356, youtubeId: "2powevsF82M", title: "Kültürel Farklar", level: "A2" },
    { unitId: 357, youtubeId: "1702J1hKz3w", title: "Eğitim Hayatı", level: "A2" },
    { unitId: 358, youtubeId: "qWqYV7Pyf8s", title: "İş Hayatı", level: "A2" },
    { unitId: 359, youtubeId: "SjN75q5e3aM", title: "Teknoloji Kullanımı", level: "A2" },
];

// ====== İNGİLİZCE VİDEOLARI ======
export const enA1Videos: UnitVideo[] = [];
export const enA2Videos: UnitVideo[] = [];

// Tüm videoları birleştir (İspanyolca)
export const allVideos = [...a1Videos, ...a2Videos, ...b1Videos, ...b2Videos];

// Tüm Fransızca videoları
export const allFrenchVideos = [...frA1Videos, ...frA2Videos];

// Tüm İngilizce videoları
export const allEnglishVideos = [...enA1Videos, ...enA2Videos];

// Ünite ID'sine göre video getir (dil otomatik algılanır)
export function getVideoForUnit(unitId: number): UnitVideo | undefined {
    // Fransızca: 301-399
    if (unitId >= 301 && unitId <= 399) {
        // A1: 301-330, A2: 331-360
        if (unitId <= 330) {
            return frA1Videos.find(v => v.unitId === unitId);
        }
        return frA2Videos.find(v => v.unitId === unitId);
    }
    // İngilizce: 101-199
    if (unitId >= 101 && unitId <= 199) {
        if (unitId <= 130) {
            return enA1Videos.find(v => v.unitId === unitId);
        }
        return enA2Videos.find(v => v.unitId === unitId);
    }
    // İspanyolca: 1-99
    if (unitId <= 30) {
        return a1Videos.find(v => v.unitId === unitId);
    }
    if (unitId <= 60) {
        return a2Videos.find(v => v.unitId === unitId);
    }
    return allVideos.find(v => v.unitId === unitId);
}

// Seviyeye göre videoları getir
export function getVideosForLevel(level: string): UnitVideo[] {
    switch (level) {
        case 'A1': return a1Videos;
        case 'A2': return a2Videos;
        case 'B1': return b1Videos;
        case 'B2': return b2Videos;
        default: return [];
    }
}

