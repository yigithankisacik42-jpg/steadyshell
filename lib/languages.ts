/**
 * SteadyShell Dil Verileri
 * 
 * Desteklenen diller ve seviyeleri tanımlar.
 * Ileride Drizzle ile veritabanından çekilecek.
 */

export interface Language {
    code: string;
    name: string;
    nativeName: string;
    flag: string;
    levels: Level[];
    available: boolean;
}

export interface Level {
    code: string;
    name: string;
    description: string;
    unitsCount: number;
}

// CEFR Seviyeleri
const cefrLevels: Record<string, Omit<Level, 'unitsCount'>> = {
    A1: { code: "A1", name: "Başlangıç", description: "Temel ifadeler ve günlük konuşmalar" },
    A2: { code: "A2", name: "Temel", description: "Basit cümleler ve rutin görevler" },
    B1: { code: "B1", name: "Orta Altı", description: "Günlük konular ve kişisel ilgi alanları" },
    B2: { code: "B2", name: "Orta Üstü", description: "Karmaşık metinler ve spontan konuşma" },
    C1: { code: "C1", name: "İleri", description: "Akıcı ve esnek dil kullanımı" },
    C2: { code: "C2", name: "Uzman", description: "Anadil seviyesinde hakimiyet" },
};

export const languages: Language[] = [
    {
        code: "es",
        name: "İspanyolca",
        nativeName: "Español",
        flag: "🇪🇸",
        available: true,
        levels: [
            { ...cefrLevels.A1, unitsCount: 25 },
            { ...cefrLevels.A2, unitsCount: 25 },
            { ...cefrLevels.B1, unitsCount: 25 },
        ],
    },
    {
        code: "en",
        name: "İngilizce",
        nativeName: "English",
        flag: "🇬🇧",
        available: true,
        levels: [
            { ...cefrLevels.A1, unitsCount: 8 },
            { ...cefrLevels.A2, unitsCount: 10 },
            { ...cefrLevels.B1, unitsCount: 12 },
            { ...cefrLevels.B2, unitsCount: 14 },
        ],
    },
    {
        code: "fr",
        name: "Fransızca",
        nativeName: "Français",
        flag: "🇫🇷",
        available: true,
        levels: [
            { ...cefrLevels.A1, unitsCount: 30 },
            { ...cefrLevels.A2, unitsCount: 30 },
            { ...cefrLevels.B1, unitsCount: 30 },
            { ...cefrLevels.B2, unitsCount: 30 },
        ],
    },
];

// Yardımcı fonksiyonlar
export function getLanguageByCode(code: string): Language | undefined {
    return languages.find(lang => lang.code === code);
}

export function getAvailableLanguages(): Language[] {
    return languages.filter(lang => lang.available);
}

export function getDefaultLanguage(): Language {
    return languages[0]; // İspanyolca varsayılan
}
