/**
 * LinguaFlow Kullanıcı İstatistikleri Modülü
 * Ders performansı, doğru/yanlış cevaplar ve süre takibi
 */

// ===== TİP TANIMLARI =====

export interface LessonStats {
    lessonId: number;
    lessonType: 'grammar' | 'vocabulary' | 'reading' | 'speaking' | 'phrases' | 'lecture' | 'quiz';
    correctAnswers: number;
    wrongAnswers: number;
    timeSpentSeconds: number;
    earnedXp: number;
    completedAt: string;
}

export interface DailyStats {
    date: string; // YYYY-MM-DD format
    lessonsCompleted: number;
    correctAnswers: number;
    wrongAnswers: number;
    totalTimeSeconds: number;
    earnedXp: number;
}

export interface UserStatistics {
    totalLessons: number;
    totalCorrectAnswers: number;
    totalWrongAnswers: number;
    totalTimeSpentSeconds: number;
    totalXp: number;
    currentStreak: number;
    longestStreak: number;
    lessonsHistory: LessonStats[];
    dailyStats: DailyStats[];
    lastActivityDate: string | null;
    accuracyRate: number; // Yüzdelik başarı oranı
}

const STATS_STORAGE_KEY = 'steadyshell_user_stats';

// ===== VARSAYILAN DEĞErLERİ =====

const defaultStats: UserStatistics = {
    totalLessons: 0,
    totalCorrectAnswers: 0,
    totalWrongAnswers: 0,
    totalTimeSpentSeconds: 0,
    totalXp: 0,
    currentStreak: 0,
    longestStreak: 0,
    lessonsHistory: [],
    dailyStats: [],
    lastActivityDate: null,
    accuracyRate: 0,
};

// ===== YARDIMCI FONKSİYONLAR =====

/**
 * Bugünün tarihini YYYY-MM-DD formatında döndür
 */
function getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
}

/**
 * İki tarih arasındaki gün farkını hesapla
 */
function daysBetween(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Başarı oranını hesapla
 */
function calculateAccuracy(correct: number, wrong: number): number {
    const total = correct + wrong;
    if (total === 0) return 0;
    return Math.round((correct / total) * 100);
}

/**
 * Süreyi dakika ve saat formatına çevir
 */
export function formatTime(seconds: number): string {
    if (seconds < 60) return `${seconds} saniye`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} dakika`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} saat ${remainingMinutes} dakika`;
}

/**
 * Süreyi kısa formatta döndür (örn: "2s 15dk")
 */
export function formatTimeShort(seconds: number): string {
    if (seconds < 60) return `${seconds}sn`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}dk`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) return `${hours}s`;
    return `${hours}s ${remainingMinutes}dk`;
}

// ===== ANA FONKSİYONLAR =====

/**
 * Kullanıcı istatistiklerini localStorage'dan yükle
 */
export function loadUserStats(): UserStatistics {
    if (typeof window === 'undefined') return defaultStats;

    try {
        const stored = localStorage.getItem(STATS_STORAGE_KEY);
        if (stored) {
            return { ...defaultStats, ...JSON.parse(stored) };
        }
    } catch (error) {
        console.error('[Stats] Error loading stats:', error);
    }
    return defaultStats;
}

/**
 * Kullanıcı istatistiklerini localStorage'a kaydet
 */
export function saveUserStats(stats: UserStatistics): void {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
    } catch (error) {
        console.error('[Stats] Error saving stats:', error);
    }
}

/**
 * Yeni ders tamamlandığında istatistikleri güncelle
 */
export function recordLessonCompletion(
    lessonId: number,
    lessonType: LessonStats['lessonType'],
    correctAnswers: number,
    wrongAnswers: number,
    timeSpentSeconds: number,
    earnedXp: number
): UserStatistics {
    const stats = loadUserStats();
    const today = getTodayDate();

    // Yeni ders kaydı
    const newLesson: LessonStats = {
        lessonId,
        lessonType,
        correctAnswers,
        wrongAnswers,
        timeSpentSeconds,
        earnedXp,
        completedAt: new Date().toISOString(),
    };

    // Toplam istatistikleri güncelle
    stats.totalLessons += 1;
    stats.totalCorrectAnswers += correctAnswers;
    stats.totalWrongAnswers += wrongAnswers;
    stats.totalTimeSpentSeconds += timeSpentSeconds;
    stats.totalXp += earnedXp;
    stats.accuracyRate = calculateAccuracy(stats.totalCorrectAnswers, stats.totalWrongAnswers);

    // Streak hesapla
    if (stats.lastActivityDate) {
        const daysDiff = daysBetween(stats.lastActivityDate, today);
        if (daysDiff === 0) {
            // Aynı gün, streak değişmez
        } else if (daysDiff === 1) {
            // Ardışık gün, streak artar
            stats.currentStreak += 1;
        } else {
            // Gün atlandı, streak sıfırlanır
            stats.currentStreak = 1;
        }
    } else {
        // İlk aktivite
        stats.currentStreak = 1;
    }

    // En uzun streak güncelle
    if (stats.currentStreak > stats.longestStreak) {
        stats.longestStreak = stats.currentStreak;
    }

    stats.lastActivityDate = today;

    // Ders geçmişine ekle (son 100 ders)
    stats.lessonsHistory.unshift(newLesson);
    if (stats.lessonsHistory.length > 100) {
        stats.lessonsHistory = stats.lessonsHistory.slice(0, 100);
    }

    // Günlük istatistikleri güncelle
    let todayStats = stats.dailyStats.find(d => d.date === today);
    if (!todayStats) {
        todayStats = {
            date: today,
            lessonsCompleted: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            totalTimeSeconds: 0,
            earnedXp: 0,
        };
        stats.dailyStats.unshift(todayStats);
    }
    todayStats.lessonsCompleted += 1;
    todayStats.correctAnswers += correctAnswers;
    todayStats.wrongAnswers += wrongAnswers;
    todayStats.totalTimeSeconds += timeSpentSeconds;
    todayStats.earnedXp += earnedXp;

    // Son 30 günlük veriyi tut
    if (stats.dailyStats.length > 30) {
        stats.dailyStats = stats.dailyStats.slice(0, 30);
    }

    // Kaydet ve döndür
    saveUserStats(stats);
    return stats;
}

/**
 * Bugünkü istatistikleri getir
 */
export function getTodayStats(): DailyStats | null {
    const stats = loadUserStats();
    const today = getTodayDate();
    return stats.dailyStats.find(d => d.date === today) || null;
}

/**
 * Son 7 günün istatistiklerini getir
 */
export function getWeeklyStats(): DailyStats[] {
    const stats = loadUserStats();
    return stats.dailyStats.slice(0, 7);
}

/**
 * Ders türüne göre istatistikleri getir
 */
export function getStatsByLessonType(type: LessonStats['lessonType']): {
    count: number;
    correct: number;
    wrong: number;
    time: number;
    xp: number;
} {
    const stats = loadUserStats();
    const filtered = stats.lessonsHistory.filter(l => l.lessonType === type);

    return {
        count: filtered.length,
        correct: filtered.reduce((sum, l) => sum + l.correctAnswers, 0),
        wrong: filtered.reduce((sum, l) => sum + l.wrongAnswers, 0),
        time: filtered.reduce((sum, l) => sum + l.timeSpentSeconds, 0),
        xp: filtered.reduce((sum, l) => sum + l.earnedXp, 0),
    };
}

/**
 * Tüm istatistikleri sıfırla
 */
export function resetAllStats(): void {
    saveUserStats(defaultStats);
}

/**
 * Özet istatistikleri döndür (profil sayfası için)
 */
export function getStatsSummary(): {
    totalLessons: number;
    totalCorrect: number;
    totalWrong: number;
    accuracy: number;
    totalTime: string;
    totalTimeSeconds: number;
    totalXp: number;
    currentStreak: number;
    longestStreak: number;
    todayLessons: number;
    todayTime: string;
} {
    const stats = loadUserStats();
    const todayStats = getTodayStats();

    return {
        totalLessons: stats.totalLessons,
        totalCorrect: stats.totalCorrectAnswers,
        totalWrong: stats.totalWrongAnswers,
        accuracy: stats.accuracyRate,
        totalTime: formatTime(stats.totalTimeSpentSeconds),
        totalTimeSeconds: stats.totalTimeSpentSeconds,
        totalXp: stats.totalXp,
        currentStreak: stats.currentStreak,
        longestStreak: stats.longestStreak,
        todayLessons: todayStats?.lessonsCompleted || 0,
        todayTime: formatTimeShort(todayStats?.totalTimeSeconds || 0),
    };
}
