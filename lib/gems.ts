/**
 * LinguaFlow Gem (Taş) Sistemi
 * Günlük ödüller, taş kazanma ve harcama
 */

// ===== TİP TANIMLARI =====

export interface GemTransaction {
    id: string;
    type: 'earn' | 'spend';
    amount: number;
    reason: string;
    timestamp: string;
}

export interface GemData {
    balance: number;
    totalEarned: number;
    totalSpent: number;
    lastDailyReward: string | null;
    dailyStreak: number;
    transactions: GemTransaction[];
}

const GEM_STORAGE_KEY = 'steadyshell_gems';

// ===== ÖDÜL AYARLARI =====

export const GEM_REWARDS = {
    dailyLesson: 10,           // İlk günlük ders için
    dailyBonusStreak3: 5,      // 3 günlük seri bonusu
    dailyBonusStreak7: 15,     // 7 günlük seri bonusu
    dailyBonusStreak30: 50,    // 30 günlük seri bonusu
    perfectLesson: 5,          // Hatasız ders tamamlama
    levelUp: 25,               // Seviye atlama
    weeklyChallenge: 30,       // Haftalık görev tamamlama
};

// ===== VARSAYILAN DEĞERLER =====

const defaultGemData: GemData = {
    balance: 50, // Başlangıç bonusu
    totalEarned: 50,
    totalSpent: 0,
    lastDailyReward: null,
    dailyStreak: 0,
    transactions: [{
        id: 'welcome-bonus',
        type: 'earn',
        amount: 50,
        reason: 'Hoş geldin bonusu',
        timestamp: new Date().toISOString(),
    }],
};

// ===== YARDIMCI FONKSİYONLAR =====

function generateId(): string {
    return `gem-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
}

function isToday(dateStr: string): boolean {
    return dateStr === getTodayDate();
}

function isYesterday(dateStr: string): boolean {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return dateStr === yesterday.toISOString().split('T')[0];
}

// ===== ANA FONKSİYONLAR =====

/**
 * Gem verisini localStorage'dan yükle
 */
export function loadGemData(): GemData {
    if (typeof window === 'undefined') return defaultGemData;

    try {
        const stored = localStorage.getItem(GEM_STORAGE_KEY);
        if (stored) {
            return { ...defaultGemData, ...JSON.parse(stored) };
        }
    } catch (error) {
        console.error('[Gems] Error loading gem data:', error);
    }
    return defaultGemData;
}

/**
 * Gem verisini localStorage'a kaydet
 */
export function saveGemData(data: GemData): void {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem(GEM_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('[Gems] Error saving gem data:', error);
    }
}

/**
 * Taş bakiyesini getir
 */
export function getGemBalance(): number {
    return loadGemData().balance;
}

/**
 * Taş kazan
 */
export function earnGems(amount: number, reason: string): GemData {
    const data = loadGemData();

    const transaction: GemTransaction = {
        id: generateId(),
        type: 'earn',
        amount,
        reason,
        timestamp: new Date().toISOString(),
    };

    data.balance += amount;
    data.totalEarned += amount;
    data.transactions.unshift(transaction);

    // Son 50 işlemi tut
    if (data.transactions.length > 50) {
        data.transactions = data.transactions.slice(0, 50);
    }

    saveGemData(data);
    return data;
}

/**
 * Taş harca
 */
export function spendGems(amount: number, reason: string): { success: boolean; data: GemData } {
    const data = loadGemData();

    if (data.balance < amount) {
        return { success: false, data };
    }

    const transaction: GemTransaction = {
        id: generateId(),
        type: 'spend',
        amount,
        reason,
        timestamp: new Date().toISOString(),
    };

    data.balance -= amount;
    data.totalSpent += amount;
    data.transactions.unshift(transaction);

    // Son 50 işlemi tut
    if (data.transactions.length > 50) {
        data.transactions = data.transactions.slice(0, 50);
    }

    saveGemData(data);
    return { success: true, data };
}

/**
 * Günlük ders ödülünü kontrol et ve ver
 * Her gün ilk ders için otomatik taş kazandırır
 */
export function claimDailyReward(): {
    claimed: boolean;
    amount: number;
    bonus: number;
    streakDays: number;
    data: GemData;
} {
    const data = loadGemData();
    const today = getTodayDate();

    // Bugün zaten alındı mı?
    if (data.lastDailyReward && isToday(data.lastDailyReward)) {
        return {
            claimed: false,
            amount: 0,
            bonus: 0,
            streakDays: data.dailyStreak,
            data
        };
    }

    // Seri kontrolü - dün alındı mı?
    if (data.lastDailyReward && isYesterday(data.lastDailyReward)) {
        data.dailyStreak += 1;
    } else {
        data.dailyStreak = 1; // Seri sıfırlandı
    }

    let baseReward = GEM_REWARDS.dailyLesson;
    let bonusReward = 0;

    // Streak bonuları
    if (data.dailyStreak >= 30) {
        bonusReward = GEM_REWARDS.dailyBonusStreak30;
    } else if (data.dailyStreak >= 7) {
        bonusReward = GEM_REWARDS.dailyBonusStreak7;
    } else if (data.dailyStreak >= 3) {
        bonusReward = GEM_REWARDS.dailyBonusStreak3;
    }

    const totalReward = baseReward + bonusReward;

    // Ödülü ver
    const transaction: GemTransaction = {
        id: generateId(),
        type: 'earn',
        amount: totalReward,
        reason: bonusReward > 0
            ? `Günlük ders ödülü (${data.dailyStreak} gün serisi!)`
            : 'Günlük ders ödülü',
        timestamp: new Date().toISOString(),
    };

    data.balance += totalReward;
    data.totalEarned += totalReward;
    data.lastDailyReward = today;
    data.transactions.unshift(transaction);

    if (data.transactions.length > 50) {
        data.transactions = data.transactions.slice(0, 50);
    }

    saveGemData(data);

    return {
        claimed: true,
        amount: baseReward,
        bonus: bonusReward,
        streakDays: data.dailyStreak,
        data
    };
}

/**
 * Bugün günlük ödül alınabilir mi?
 */
export function canClaimDailyReward(): boolean {
    const data = loadGemData();
    return !data.lastDailyReward || !isToday(data.lastDailyReward);
}

/**
 * Günlük seri bilgisini getir
 */
export function getDailyStreakInfo(): {
    streak: number;
    canClaim: boolean;
    nextReward: number;
    nextBonus: number;
} {
    const data = loadGemData();
    const canClaim = canClaimDailyReward();

    let nextStreak = canClaim ? data.dailyStreak + 1 : data.dailyStreak;
    if (!data.lastDailyReward || (!isToday(data.lastDailyReward) && !isYesterday(data.lastDailyReward))) {
        nextStreak = 1; // Seri sıfırlanacak
    }

    let nextBonus = 0;
    if (nextStreak >= 30) {
        nextBonus = GEM_REWARDS.dailyBonusStreak30;
    } else if (nextStreak >= 7) {
        nextBonus = GEM_REWARDS.dailyBonusStreak7;
    } else if (nextStreak >= 3) {
        nextBonus = GEM_REWARDS.dailyBonusStreak3;
    }

    return {
        streak: data.dailyStreak,
        canClaim,
        nextReward: GEM_REWARDS.dailyLesson,
        nextBonus,
    };
}

/**
 * İşlem geçmişini getir
 */
export function getTransactionHistory(limit: number = 10): GemTransaction[] {
    const data = loadGemData();
    return data.transactions.slice(0, limit);
}

/**
 * Tüm gem verisini sıfırla
 */
export function resetGemData(): void {
    saveGemData(defaultGemData);
}
