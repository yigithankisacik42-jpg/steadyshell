import { APP_CONFIG } from "@/lib/config";

/**
 * Premium durumunu kontrol eden hook
 * 
 * Feature flag kapalıysa (isPremiumLive: false):
 * - Herkes premium gibi davranır
 * - Sınırsız kalp
 * - Tüm özellikler açık
 * 
 * Feature flag açıksa (isPremiumLive: true):
 * - Gerçek premium kontrolü yapılır
 * - Kalp sınırı aktif
 */

interface PremiumStatus {
    // Kullanıcı premium mi?
    isPremium: boolean;

    // Mevcut kalp sayısı (Infinity = sınırsız)
    hearts: number;

    // Premium sistemi aktif mi?
    isPremiumSystemLive: boolean;

    // Early access modunda mıyız?
    isEarlyAccess: boolean;
}

export function usePremium(): PremiumStatus {
    // Feature flag kontrolü
    const isPremiumSystemLive = APP_CONFIG.isPremiumLive;
    const isEarlyAccess = APP_CONFIG.isEarlyAccess;

    // Premium sistemi kapalıysa herkes premium
    if (!isPremiumSystemLive) {
        return {
            isPremium: true,
            hearts: Infinity,
            isPremiumSystemLive: false,
            isEarlyAccess,
        };
    }

    // Premium sistemi açıksa gerçek kontrol yap
    // TODO: Auth + Veritabanından kullanıcı durumunu çek
    // Şimdilik mock değerler
    return {
        isPremium: false,
        hearts: APP_CONFIG.defaultHearts,
        isPremiumSystemLive: true,
        isEarlyAccess,
    };
}

/**
 * Belirli bir özelliğin kilitli olup olmadığını kontrol et
 * Premium sistemi kapalıysa hiçbir şey kilitli değil
 */
export function isFeatureLocked(featureName: string): boolean {
    if (!APP_CONFIG.isPremiumLive) {
        return false; // Hiçbir şey kilitli değil
    }

    // TODO: Özellik bazlı kilit kontrolü
    // Şimdilik tüm özellikler açık
    return false;
}
