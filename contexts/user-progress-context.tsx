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
                    // Not logged in, keep default or maybe try localStorage as fallback? 
                    // For now, adhere to secure DB plan.
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

    const syncWithDb = async (userData: UserData) => {
        try {
            await fetch("/api/user-progress", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    totalXp: userData.totalXp,
                    level: userData.level,
                    streak: userData.streak,
                    lastActiveDate: userData.lastActiveDate,
                    hearts: 5 // Default for now, can add to UserData later if needed
                }),
            });
        } catch (e) {
            console.error("Failed to sync with DB", e);
        }
    };

    const addXp = (amount: number) => {
        setUser((prev) => {
            const newState = {
                ...prev,
                totalXp: prev.totalXp + amount,
            };
            syncWithDb(newState);
            return newState;
        });
    };

    const completeLesson = () => {
        const today = new Date().toISOString().split('T')[0];

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

            const newState = {
                ...prev,
                streak: newStreak,
                lastActiveDate: today,
            };

            syncWithDb(newState);
            return newState;
        });
    };

    const updateUser = (data: Partial<UserData>) => {
        setUser((prev) => {
            const newState = { ...prev, ...data };
            // Only sync if relevant fields changed, but for simplicity sync all
            // Or better, check if important fields are in 'data'
            if ('totalXp' in data || 'level' in data || 'streak' in data) {
                syncWithDb(newState);
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
