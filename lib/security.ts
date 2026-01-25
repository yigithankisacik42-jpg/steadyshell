/**
 * SteadyShell Güvenlik Modülü
 * Şifre hashleme, validasyon ve güvenlik yardımcıları
 */

// ===== ŞİFRE HASHLEME =====

/**
 * SHA-256 ile şifre hashle (Web Crypto API)
 * @param password - Düz metin şifre
 * @returns 64 karakterlik hex hash
 */
export async function hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Şifre doğrula (hash karşılaştırması)
 * @param password - Girilen şifre
 * @param hash - Kayıtlı hash
 * @returns Eşleşme durumu
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    const passwordHash = await hashPassword(password);
    return passwordHash === hash;
}

// ===== ŞİFRE VALİDASYONU =====

export interface PasswordValidation {
    valid: boolean;
    message: string;
}

/**
 * Güçlü şifre politikası kontrolü
 * @param password - Kontrol edilecek şifre
 * @returns Validasyon sonucu
 */
export function validatePassword(password: string): PasswordValidation {
    if (password.length < 8) {
        return { valid: false, message: "Şifre en az 8 karakter olmalı" };
    }
    if (!/[A-Z]/.test(password)) {
        return { valid: false, message: "Şifrede en az 1 büyük harf olmalı" };
    }
    if (!/[a-z]/.test(password)) {
        return { valid: false, message: "Şifrede en az 1 küçük harf olmalı" };
    }
    if (!/[0-9]/.test(password)) {
        return { valid: false, message: "Şifrede en az 1 rakam olmalı" };
    }
    return { valid: true, message: "" };
}

// ===== INPUT SANİTİZASYONU =====

/**
 * XSS saldırılarını önlemek için input temizleme
 * @param input - Ham input
 * @returns Temizlenmiş input
 */
export function sanitizeInput(input: string): string {
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/`/g, '&#96;')
        .trim();
}

/**
 * Email formatı kontrolü
 * @param email - Kontrol edilecek email
 * @returns Geçerli mi?
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== RATE LIMITING =====

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
    const key = `login_attempts_${email.toLowerCase()}`;
    localStorage.removeItem(key);
}

// ===== OTURUM GÜVENLİĞİ =====

/**
 * Oturum token oluştur (basit versiyon)
 * @returns Random session token
 */
export function generateSessionToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Tüm eski kullanıcı verilerini temizle (migration için)
 */
export function clearLegacyUserData(): void {
    // Eski kullanıcıları temizle (güvenlik açığı olan veriler)
    localStorage.removeItem('steadyshell_users');
    localStorage.removeItem('steadyshell_current_user');
    console.log('[Security] Legacy user data cleared for security upgrade');
}
