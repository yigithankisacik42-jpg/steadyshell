/**
 * Client-side güvenlik yardımcıları
 * Bu dosya bcryptjs import etmez, client-side'da güvenle kullanılabilir.
 */

// ===== RATE LIMITING (Client-side helper) =====

const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 dakika

interface LoginAttemptData {
    count: number;
    lastAttempt: number;
    lockedUntil: number | null;
}

/**
 * Giriş denemesi kontrolü (brute force koruması)
 * @param email - Kullanıcı email
 * @returns Giriş yapılabilir mi?
 */
export function checkLoginAttempts(email: string): { allowed: boolean; remainingTime: number } {
    if (typeof window === 'undefined') return { allowed: true, remainingTime: 0 };

    const key = `login_attempts_${email.toLowerCase()}`;
    const stored = localStorage.getItem(key);
    const attempts: LoginAttemptData = stored
        ? JSON.parse(stored)
        : { count: 0, lastAttempt: 0, lockedUntil: null };

    // Kilit süresi kontrolü
    if (attempts.lockedUntil && Date.now() < attempts.lockedUntil) {
        const remainingTime = Math.ceil((attempts.lockedUntil - Date.now()) / 1000 / 60);
        return { allowed: false, remainingTime };
    }

    // Kilit süresi dolmuşsa sıfırla
    if (attempts.lockedUntil && Date.now() >= attempts.lockedUntil) {
        localStorage.removeItem(key);
        return { allowed: true, remainingTime: 0 };
    }

    return { allowed: true, remainingTime: 0 };
}

/**
 * Başarısız giriş denemesini kaydet
 * @param email - Kullanıcı email
 */
export function recordFailedAttempt(email: string): void {
    if (typeof window === 'undefined') return;

    const key = `login_attempts_${email.toLowerCase()}`;
    const stored = localStorage.getItem(key);
    const attempts: LoginAttemptData = stored
        ? JSON.parse(stored)
        : { count: 0, lastAttempt: 0, lockedUntil: null };

    attempts.count += 1;
    attempts.lastAttempt = Date.now();

    // Maksimum denemeye ulaşıldıysa kilitle
    if (attempts.count >= MAX_LOGIN_ATTEMPTS) {
        attempts.lockedUntil = Date.now() + LOCKOUT_DURATION_MS;
    }

    localStorage.setItem(key, JSON.stringify(attempts));
}

/**
 * Başarılı girişte deneme sayacını sıfırla
 * @param email - Kullanıcı email
 */
export function clearLoginAttempts(email: string): void {
    if (typeof window === 'undefined') return;
    const key = `login_attempts_${email.toLowerCase()}`;
    localStorage.removeItem(key);
}
