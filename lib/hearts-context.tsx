"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

// Sabitler
const MAX_HEARTS = 5;
const RECOVERY_TIME_MS = 24 * 60 * 1000; // 24 dakika = 1 can (milisaniye)
const STORAGE_KEY = "steadyshell_hearts";

interface HeartsData {
    hearts: number;
    lastLostTime: number | null; // Son can kaybetme zamanı (timestamp)
}

interface HeartsContextType {
    hearts: number;
    maxHearts: number;
    loseHeart: () => void;
    resetHearts: () => void;
    getTimeUntilNextHeart: () => number | null; // Kalan süre (ms)
    isRecovering: boolean;
}

const HeartsContext = createContext<HeartsContextType | null>(null);

export function HeartsProvider({ children }: { children: ReactNode }) {
    const [hearts, setHearts] = useState(MAX_HEARTS);
    const [lastLostTime, setLastLostTime] = useState<number | null>(null);
    const [isRecovering, setIsRecovering] = useState(false);

    // localStorage'dan veriyi yükle
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const data: HeartsData = JSON.parse(stored);
                setHearts(data.hearts);
                setLastLostTime(data.lastLostTime);
            } catch (e) {
                console.error("Hearts data parse error:", e);
            }
        }
    }, []);

    // localStorage'a kaydet
    useEffect(() => {
        const data: HeartsData = { hearts, lastLostTime };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, [hearts, lastLostTime]);

    // Can recovery timer
    useEffect(() => {
        if (hearts >= MAX_HEARTS || lastLostTime === null) {
            setIsRecovering(false);
            return;
        }

        setIsRecovering(true);

        const checkRecovery = () => {
            const now = Date.now();
            const timeSinceLastLost = now - lastLostTime;
            const heartsToRecover = Math.floor(timeSinceLastLost / RECOVERY_TIME_MS);

            if (heartsToRecover > 0) {
                const newHearts = Math.min(MAX_HEARTS, hearts + heartsToRecover);
                setHearts(newHearts);

                if (newHearts >= MAX_HEARTS) {
                    // Tam dolu, timer'ı durdur
                    setLastLostTime(null);
                    setIsRecovering(false);
                } else {
                    // Yeni başlangıç zamanı ayarla
                    setLastLostTime(lastLostTime + heartsToRecover * RECOVERY_TIME_MS);
                }
            }
        };

        // Hemen kontrol et
        checkRecovery();

        // Her saniye kontrol et
        const interval = setInterval(checkRecovery, 1000);
        return () => clearInterval(interval);
    }, [hearts, lastLostTime]);

    // Can kaybet
    const loseHeart = useCallback(() => {
        setHearts((prev) => {
            const newHearts = Math.max(0, prev - 1);
            if (newHearts < prev && lastLostTime === null) {
                // İlk can kaybı, timer başlat
                setLastLostTime(Date.now());
            } else if (newHearts < prev && lastLostTime !== null) {
                // Zaten recovering, sadece canı azalt
            }
            return newHearts;
        });

        // Timer'ı başlat (eğer daha önce başlamadıysa)
        if (lastLostTime === null) {
            setLastLostTime(Date.now());
        }
    }, [lastLostTime]);

    // Canları sıfırla (tam doldur)
    const resetHearts = useCallback(() => {
        setHearts(MAX_HEARTS);
        setLastLostTime(null);
        setIsRecovering(false);
    }, []);

    // Sonraki cana kalan süre
    const getTimeUntilNextHeart = useCallback(() => {
        if (hearts >= MAX_HEARTS || lastLostTime === null) {
            return null;
        }

        const now = Date.now();
        const timeSinceLastLost = now - lastLostTime;
        const timeInCurrentCycle = timeSinceLastLost % RECOVERY_TIME_MS;
        return RECOVERY_TIME_MS - timeInCurrentCycle;
    }, [hearts, lastLostTime]);

    return (
        <HeartsContext.Provider
            value={{
                hearts,
                maxHearts: MAX_HEARTS,
                loseHeart,
                resetHearts,
                getTimeUntilNextHeart,
                isRecovering,
            }}
        >
            {children}
        </HeartsContext.Provider>
    );
}

export function useHearts() {
    const context = useContext(HeartsContext);
    if (!context) {
        throw new Error("useHearts must be used within a HeartsProvider");
    }
    return context;
}

// Yardımcı: Süreyi formatla (MM:SS)
export function formatTime(ms: number | null): string {
    if (ms === null || ms <= 0) return "00:00";
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
