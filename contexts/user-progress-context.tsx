"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const STORAGE_KEY = "steadyshell_current_user";

export interface UserData {
    name: string;
    email: string;
    avatar: string;
    totalXp: number;
    streak: number;
    lastActiveDate: string | null; // ISO Date string (YYYY-MM-DD)
    level: number;
}

const defaultUser: UserData = {
    name: "Gezgin",
    email: "",
    avatar: "G",
    totalXp: 0,
    streak: 0,
    lastActiveDate: null,
    level: 1,
};

interface UserProgressContextType {
    user: UserData;
    isLoading: boolean;
    addXp: (amount: number) => void;
    completeLesson: () => void;
    updateUser: (data: Partial<UserData>) => void;
}

const UserProgressContext = createContext<UserProgressContextType | null>(null);

export function UserProgressProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserData>(defaultUser);
    const [isLoading, setIsLoading] = useState(true);

    // Load from API
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/user-progress");
                if (res.ok) {
                    const data = await res.json();
                    setUser({
                        name: data.name || "Gezgin",
                        email: data.email,
                        avatar: data.avatar || "G",
                        totalXp: data.totalXp,
                        streak: data.streak,
                        lastActiveDate: data.lastActiveDate,
                        level: data.level,
                    });
                } else if (res.status === 401) {
                    console.log("User not logged in");
                }
            } catch (e) {
                console.error("Failed to fetch user data", e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    // --- GÜVENLİ: Sunucuya delta XP gönder ---
    const addXp = (amount: number) => {
        // Optimistic update (UI hemen güncellenir)
        setUser((prev) => ({
            ...prev,
            totalXp: prev.totalXp + amount,
        }));

        // Sunucuya gönder — sunucu doğrulayacak
        fetch("/api/user-progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                action: "add_xp",
                amount: amount,
            }),
        })
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("XP sync failed");
            })
            .then((data) => {
                // Sunucudan dönen gerçek değerlerle güncelle
                setUser((prev) => ({
                    ...prev,
                    totalXp: data.totalXp,
                    level: data.level,
                }));
            })
            .catch((e) => {
                console.error("Failed to sync XP with server", e);
                // Optimistic update'i geri al
                setUser((prev) => ({
                    ...prev,
                    totalXp: Math.max(0, prev.totalXp - amount),
                }));
            });
    };

    // --- GÜVENLİ: Ders tamamlama — streak sunucu tarafında hesaplanır ---
    const completeLesson = () => {
        const today = new Date().toISOString().split('T')[0];

        // Optimistic update
        setUser((prev) => {
            let newStreak = prev.streak;
            if (prev.lastActiveDate !== today) {
                if (!prev.lastActiveDate) {
                    newStreak = 1;
                } else {
                    const lastDate = new Date(prev.lastActiveDate);
                    const currentDate = new Date(today);
                    const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays === 1) {
                        newStreak += 1;
                    } else if (diffDays > 1) {
                        newStreak = 1;
                    }
                }
            }
            return {
                ...prev,
                streak: newStreak,
                lastActiveDate: today,
            };
        });

        // Sunucuya gönder
        fetch("/api/user-progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                action: "complete_lesson",
            }),
        })
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("Lesson sync failed");
            })
            .then((data) => {
                // Sunucudan dönen gerçek değerlerle güncelle
                setUser((prev) => ({
                    ...prev,
                    streak: data.streak,
                    lastActiveDate: data.lastActiveDate,
                }));
            })
            .catch((e) => {
                console.error("Failed to sync lesson with server", e);
            });
    };

    const updateUser = (data: Partial<UserData>) => {
        setUser((prev) => {
            const newState = { ...prev, ...data };

            // XP değişikliği varsa sunucuya delta olarak gönder
            if ('totalXp' in data && data.totalXp !== undefined) {
                const delta = data.totalXp - prev.totalXp;
                if (delta > 0) {
                    fetch("/api/user-progress", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            action: "add_xp",
                            amount: delta,
                        }),
                    }).catch((e) => console.error("Failed to sync updateUser XP", e));
                }
            }

            return newState;
        });
    };

    return (
        <UserProgressContext.Provider value={{ user, isLoading, addXp, completeLesson, updateUser }}>
            {children}
        </UserProgressContext.Provider>
    );
}

export function useUserProgress() {
    const context = useContext(UserProgressContext);
    if (!context) {
        throw new Error("useUserProgress must be used within a UserProgressProvider");
    }
    return context;
}
