"use client";

/**
 * SteadyShell Görev (Quest) Sistemi
 * Günlük görevleri takip eder ve XP ödülleri verir
 */

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

// ===== TİP TANIMLARI =====

export interface Quest {
    id: string;
    title: string;
    description: string;
    iconType: 'xp' | 'reading' | 'streak' | 'bonus';
    current: number;
    target: number;
    reward: number;
    completed: boolean;
    claimed: boolean;
}

export interface QuestsData {
    date: string; // YYYY-MM-DD formatında
    quests: Quest[];
    totalXpEarnedToday: number;
    lessonsCompletedToday: number;
    readingsCompletedToday: number;
}

const STORAGE_KEY = "steadyshell_quests";

// ===== VARSAYILAN GÖREVLER =====

function getDefaultQuests(): Quest[] {
    return [
        {
            id: "xp-50",
            title: "50 XP Kazan",
            description: "Ders veya okuma tamamla",
            iconType: 'xp',
            current: 0,
            target: 50,
            reward: 10,
            completed: false,
            claimed: false
        },
        {
            id: "reading-1",
            title: "1 Okuma Yap",
            description: "Bir hikaye oku ve anla",
            iconType: 'reading',
            current: 0,
            target: 1,
            reward: 15,
            completed: false,
            claimed: false
        },
        {
            id: "lesson-1",
            title: "Seriyi Koru",
            description: "Bugün en az 1 ders bitir",
            iconType: 'streak',
            current: 0,
            target: 1,
            reward: 20,
            completed: false,
            claimed: false
        },
        {
            id: "xp-100",
            title: "100 XP Kazan",
            description: "Bonus görev",
            iconType: 'bonus',
            current: 0,
            target: 100,
            reward: 25,
            completed: false,
            claimed: false
        }
    ];
}

function getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
}

// ===== CONTEXT =====

interface QuestsContextType {
    quests: Quest[];
    addXP: (amount: number) => void;
    addReading: () => void;
    addLesson: () => void;
    claimReward: (questId: string) => number;
    refreshQuests: () => void;
    completedCount: number;
    totalQuests: number;
}

const QuestsContext = createContext<QuestsContextType | null>(null);

export function QuestsProvider({ children }: { children: ReactNode }) {
    const [questsData, setQuestsData] = useState<QuestsData>({
        date: getTodayDate(),
        quests: getDefaultQuests(),
        totalXpEarnedToday: 0,
        lessonsCompletedToday: 0,
        readingsCompletedToday: 0
    });

    // localStorage'dan yükle
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const data: QuestsData = JSON.parse(stored);
                // Eğer farklı bir günse, görevleri sıfırla
                if (data.date !== getTodayDate()) {
                    const freshData: QuestsData = {
                        date: getTodayDate(),
                        quests: getDefaultQuests(),
                        totalXpEarnedToday: 0,
                        lessonsCompletedToday: 0,
                        readingsCompletedToday: 0
                    };
                    setQuestsData(freshData);
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(freshData));
                } else {
                    setQuestsData(data);
                }
            } catch (e) {
                console.error("Quests data parse error:", e);
            }
        }
    }, []);

    // localStorage'a kaydet
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(questsData));
    }, [questsData]);

    // Görevleri güncelle
    const updateQuests = useCallback((newData: Partial<QuestsData>) => {
        setQuestsData(prev => {
            const updated = { ...prev, ...newData };

            // Görevlerin durumunu kontrol et
            const updatedQuests = updated.quests.map(quest => {
                let current = quest.current;

                if (quest.id === 'xp-50') {
                    current = Math.min(updated.totalXpEarnedToday, 50);
                } else if (quest.id === 'xp-100') {
                    current = Math.min(updated.totalXpEarnedToday, 100);
                } else if (quest.id === 'reading-1') {
                    current = Math.min(updated.readingsCompletedToday, 1);
                } else if (quest.id === 'lesson-1') {
                    current = Math.min(updated.lessonsCompletedToday, 1);
                }

                const completed = current >= quest.target;

                return {
                    ...quest,
                    current,
                    completed: quest.claimed ? quest.completed : completed
                };
            });

            return { ...updated, quests: updatedQuests };
        });
    }, []);

    // XP ekle
    const addXP = useCallback((amount: number) => {
        updateQuests({
            totalXpEarnedToday: questsData.totalXpEarnedToday + amount
        });
    }, [questsData.totalXpEarnedToday, updateQuests]);

    // Okuma tamamla
    const addReading = useCallback(() => {
        updateQuests({
            readingsCompletedToday: questsData.readingsCompletedToday + 1
        });
    }, [questsData.readingsCompletedToday, updateQuests]);

    // Ders tamamla
    const addLesson = useCallback(() => {
        updateQuests({
            lessonsCompletedToday: questsData.lessonsCompletedToday + 1
        });
    }, [questsData.lessonsCompletedToday, updateQuests]);

    // Ödül al
    const claimReward = useCallback((questId: string): number => {
        let reward = 0;

        setQuestsData(prev => {
            const updatedQuests = prev.quests.map(quest => {
                if (quest.id === questId && quest.completed && !quest.claimed) {
                    reward = quest.reward;
                    return { ...quest, claimed: true };
                }
                return quest;
            });
            return { ...prev, quests: updatedQuests };
        });

        return reward;
    }, []);

    // Görevleri yenile (gün değişimi için)
    const refreshQuests = useCallback(() => {
        if (questsData.date !== getTodayDate()) {
            const freshData: QuestsData = {
                date: getTodayDate(),
                quests: getDefaultQuests(),
                totalXpEarnedToday: 0,
                lessonsCompletedToday: 0,
                readingsCompletedToday: 0
            };
            setQuestsData(freshData);
        }
    }, [questsData.date]);

    const completedCount = questsData.quests.filter(q => q.completed).length;
    const totalQuests = questsData.quests.length;

    return (
        <QuestsContext.Provider
            value={{
                quests: questsData.quests,
                addXP,
                addReading,
                addLesson,
                claimReward,
                refreshQuests,
                completedCount,
                totalQuests
            }}
        >
            {children}
        </QuestsContext.Provider>
    );
}

export function useQuests() {
    const context = useContext(QuestsContext);
    if (!context) {
        throw new Error("useQuests must be used within a QuestsProvider");
    }
    return context;
}
