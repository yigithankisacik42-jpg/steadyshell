/**
 * SteadyShell Güvenlik Modülü
 * Şifre hashleme, validasyon ve güvenlik yardımcıları
 */

import bcrypt from 'bcryptjs';

// ===== ŞİFRE HASHLEME =====

/**
 * Şifre hashle (bcrypt)
 * @param password - Düz metin şifre
 * @returns Hashlenmiş şifre
 */
export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

/**
 * Şifre doğrula (bcrypt karşılaştırması)
 * @param password - Girilen şifre
 * @param hash - Kayıtlı hash
 * @returns Eşleşme durumu
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
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
    if (!input) return "";
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

// ===== RATE LIMITING (Client-side helper, should be moved to Redis/DB in prod) =====

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
