"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Level, getLanguageByCode, getDefaultLanguage, languages } from "@/lib/languages";

interface LanguageContextType {
    // Seçili dil
    currentLanguage: Language;
    setCurrentLanguage: (lang: Language) => void;

    // Seçili seviye
    currentLevel: Level | null;
    setCurrentLevel: (level: Level | null) => void;

    // İlerleme durumu (her dil için ayrı)
    progress: Record<string, LanguageProgress>;
    updateProgress: (langCode: string, progress: Partial<LanguageProgress>) => void;

    // Yardımcı fonksiyonlar
    switchLanguage: (langCode: string) => void;
    availableLanguages: Language[];
}

interface LanguageProgress {
    totalXp: number;
    currentLevel: string;
    completedLessons: number[];
    streak: number;
    lastActivity: string | null;
}

const defaultProgress: LanguageProgress = {
    totalXp: 0,
    currentLevel: "A1",
    completedLessons: [],
    streak: 0,
    lastActivity: null,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [currentLanguage, setCurrentLanguage] = useState<Language>(getDefaultLanguage());
    const [currentLevel, setCurrentLevel] = useState<Level | null>(null);

    // Her dil için ayrı ilerleme - localStorage'dan yükle
    const [progress, setProgress] = useState<Record<string, LanguageProgress>>(() => {
        // Client-side only
        if (typeof window === "undefined") {
            return {
                es: { ...defaultProgress },
                en: { ...defaultProgress },
                fr: { ...defaultProgress },
            };
        }

        const saved = localStorage.getItem("steadyshell_progress");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch {
                return {
                    es: { ...defaultProgress },
                    en: { ...defaultProgress },
                    fr: { ...defaultProgress },
                };
            }
        }

        // Yeni kullanıcı - sıfırdan başlıyor
        return {
            es: { ...defaultProgress },
            en: { ...defaultProgress },
            fr: { ...defaultProgress },
        };
    });

    // İlk seviyeyi ve dili onboarding verilerine göre ayarla
    useEffect(() => {
        // Onboarding verilerini kontrol et
        const selectedLang = localStorage.getItem('steadyshell_selected_language');
        const selectedLevel = localStorage.getItem('steadyshell_selected_level');

        if (selectedLang) {
            const lang = getLanguageByCode(selectedLang);
            if (lang && lang.code !== currentLanguage.code) {
                setCurrentLanguage(lang);
                // Seviyeyi bul ve ayarla
                if (selectedLevel && lang.levels) {
                    const level = lang.levels.find(l => l.code === selectedLevel);
                    if (level) {
                        setCurrentLevel(level);
                        return;
                    }
                }
            }
        }

        // Varsayılan olarak ilk seviyeyi ayarla
        if (currentLanguage && currentLanguage.levels.length > 0 && !currentLevel) {
            setCurrentLevel(currentLanguage.levels[0]);
        }
    }, [currentLanguage, currentLevel]);

    // Progress'i localStorage'a kaydet
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("steadyshell_progress", JSON.stringify(progress));
        }
    }, [progress]);

    const switchLanguage = (langCode: string) => {
        const lang = getLanguageByCode(langCode);
        if (lang) {
            setCurrentLanguage(lang);
            // Seçilen dilin ilk seviyesini ayarla
            if (lang.levels.length > 0) {
                setCurrentLevel(lang.levels[0]);
            }
        }
    };

    const updateProgress = (langCode: string, updates: Partial<LanguageProgress>) => {
        setProgress(prev => ({
            ...prev,
            [langCode]: {
                ...prev[langCode],
                ...updates,
                lastActivity: new Date().toISOString(),
            },
        }));
    };

    return (
        <LanguageContext.Provider
            value={{
                currentLanguage,
                setCurrentLanguage,
                currentLevel,
                setCurrentLevel,
                progress,
                updateProgress,
                switchLanguage,
                availableLanguages: languages.filter(l => l.available),
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
