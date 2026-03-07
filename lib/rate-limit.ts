/**
 * Server-Side Rate Limiter
 * In-memory rate limiting for API endpoints.
 * 
 * Not: Production'da Redis kullanılmalı.
 * In-memory limiter, sunucu restart'ta sıfırlanır ama
 * localStorage'dan çok daha güvenlidir.
 */

interface RateLimitEntry {
    count: number;
    resetTime: number; // Unix timestamp (ms)
}

// In-memory store — her endpoint için ayrı Map
const stores = new Map<string, Map<string, RateLimitEntry>>();

// Periyodik temizlik — bellek sızıntısını önle
const CLEANUP_INTERVAL = 60 * 1000; // 1 dakikada bir
let lastCleanup = Date.now();

function cleanup(store: Map<string, RateLimitEntry>) {
    const now = Date.now();
    if (now - lastCleanup < CLEANUP_INTERVAL) return;
    lastCleanup = now;

    for (const [key, entry] of store) {
        if (now > entry.resetTime) {
            store.delete(key);
        }
    }
}

/**
 * Rate limit kontrolü
 * @param identifier - IP adresi veya email gibi benzersiz tanımlayıcı
 * @param storeName - Endpoint adı (her endpoint ayrı limit)
 * @param maxRequests - Zaman penceresi içindeki max istek sayısı
 * @param windowMs - Zaman penceresi (milisaniye)
 * @returns { success, remaining, resetIn }
 */
export function rateLimit(
    identifier: string,
    storeName: string,
    maxRequests: number,
    windowMs: number
): {
    success: boolean;
    remaining: number;
    resetIn: number; // saniye cinsinden
} {
    // Store oluştur
    if (!stores.has(storeName)) {
        stores.set(storeName, new Map());
    }
    const store = stores.get(storeName)!;

    // Temizlik çalıştır
    cleanup(store);

    const now = Date.now();
    const entry = store.get(identifier);

    // İlk istek veya pencere dolmuş
    if (!entry || now > entry.resetTime) {
        store.set(identifier, {
            count: 1,
            resetTime: now + windowMs,
        });
        return {
            success: true,
            remaining: maxRequests - 1,
            resetIn: Math.ceil(windowMs / 1000),
        };
    }

    // Pencere içinde — sayacı artır
    entry.count += 1;

    if (entry.count > maxRequests) {
        const resetIn = Math.ceil((entry.resetTime - now) / 1000);
        return {
            success: false,
            remaining: 0,
            resetIn,
        };
    }

    return {
        success: true,
        remaining: maxRequests - entry.count,
        resetIn: Math.ceil((entry.resetTime - now) / 1000),
    };
}

/**
 * IP adresini request'ten çıkar
 */
export function getClientIP(request: Request): string {
    // Vercel / proxy arkasındaysa forwarded header'ları kontrol et
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) {
        return forwarded.split(",")[0].trim();
    }

    const realIp = request.headers.get("x-real-ip");
    if (realIp) {
        return realIp;
    }

    // Fallback — bilinmeyen IP
    return "unknown";
}

// ===== ÖNCEDEN TANIMLI LİMİTLER =====

/** Login: IP başına 5 deneme / 15 dakika */
export function checkLoginRateLimit(ip: string) {
    return rateLimit(ip, "login", 5, 15 * 60 * 1000);
}

/** Register: IP başına 3 kayıt / 1 saat */
export function checkRegisterRateLimit(ip: string) {
    return rateLimit(ip, "register", 3, 60 * 60 * 1000);
}

/** Chat API: IP başına 30 istek / dakika */
export function checkChatRateLimit(ip: string) {
    return rateLimit(ip, "chat", 30, 60 * 1000);
}

/** Genel API: IP başına 100 istek / dakika */
export function checkGeneralRateLimit(ip: string) {
    return rateLimit(ip, "general", 100, 60 * 1000);
}
