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

    // Load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setUser({ ...defaultUser, ...parsed });
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }
        setIsLoading(false);
    }, []);

    // Save to localStorage whenever user changes
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        }
    }, [user, isLoading]);

    const addXp = (amount: number) => {
        setUser((prev) => ({
            ...prev,
            totalXp: prev.totalXp + amount,
        }));
    };

    const completeLesson = () => {
        const today = new Date().toISOString().split('T')[0];

        setUser((prev) => {
            // Check streak
            let newStreak = prev.streak;

            if (prev.lastActiveDate !== today) {
                // If last active date was yesterday, increment streak
                // If it was before yesterday, reset to 1
                // If it is null (first time), set to 1

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
                    // If diffDays is 0 (same day), do nothing to streak
                }
            }

            return {
                ...prev,
                streak: newStreak,
                lastActiveDate: today,
            };
        });
    };

    const updateUser = (data: Partial<UserData>) => {
        setUser((prev) => ({ ...prev, ...data }));
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
