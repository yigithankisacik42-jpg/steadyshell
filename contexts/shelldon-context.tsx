"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect, useRef } from "react";
import { loadUserStats, getTodayStats, UserStatistics, DailyStats } from "@/lib/user-stats";
import { useQuests } from "@/lib/quests-context";

type Mood = "happy" | "sad" | "thinking" | "default" | "celebrate" | "surprised";

interface ShelldonState {
  isVisible: boolean;
  message: string;
  mood: Mood;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ShelldonContextType extends ShelldonState {
  showShelldon: (message: string, mood?: Mood, duration?: number, action?: { label: string; onClick: () => void }) => void;
  hideShelldon: () => void;
  userStats: UserStatistics | null;
  dailyStats: DailyStats | null;
}

const defaultState: ShelldonState = {
  isVisible: false,
  message: "",
  mood: "default",
};

const ShelldonContext = createContext<ShelldonContextType | undefined>(undefined);

export const ShelldonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ShelldonState>(defaultState);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [userStats, setUserStats] = useState<UserStatistics | null>(null);
  const [dailyStats, setDailyStats] = useState<DailyStats | null>(null);
  const { completedCount } = useQuests();
  
  // Önceki değerleri takip etmek için ref'ler
  const prevStreak = useRef<number>(0);
  const prevCompletedQuests = useRef<number>(0);

  const hideShelldon = useCallback(() => {
    setState((prev) => ({ ...prev, isVisible: false }));
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  const showShelldon = useCallback(
    (message: string, mood: Mood = "default", duration: number = 5000, action?: { label: string; onClick: () => void }) => {
      if (timeoutId) clearTimeout(timeoutId);
      setState({ isVisible: true, message, mood, action });
      if (duration > 0 && !action) { // Eğer bir aksiyon butonu varsa, otomatik kapanmasın (kullanıcı görsün)
        const id = setTimeout(() => hideShelldon(), duration);
        setTimeoutId(id);
      }
    },
    [timeoutId, hideShelldon]
  );

  // İstatistikleri yükle
  useEffect(() => {
    const stats = loadUserStats();
    const today = getTodayStats();
    setUserStats(stats);
    setDailyStats(today);
    prevStreak.current = stats.currentStreak;
  }, []);



  return (
    <ShelldonContext.Provider value={{ ...state, showShelldon, hideShelldon, userStats, dailyStats }}>
      {children}
    </ShelldonContext.Provider>
  );
};

export const useShelldon = () => {
  const context = useContext(ShelldonContext);
  if (context === undefined) {
    throw new Error("useShelldon must be used within a ShelldonProvider");
  }
  return context;
};
