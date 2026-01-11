// LinguaFlow Enhanced Service Worker v2
const CACHE_NAME = 'linguaflow-v2';
const STATIC_CACHE = 'linguaflow-static-v2';
const DYNAMIC_CACHE = 'linguaflow-dynamic-v2';

// Kritik dosyalar - bunlar her zaman cache'de olacak
const STATIC_ASSETS = [
    '/',
    '/manifest.webmanifest',
    '/icon-192x192.png',
    '/icon-512x512.png',
    '/offline',
];

// Önemli sayfalar - kullanıcı deneyimi için önceden cache'lenecek
const IMPORTANT_PAGES = [
    '/dashboard',
    '/lesson',
    '/quiz',
    '/vocabulary',
    '/grammar',
    '/reading',
    '/speaking',
    '/phrases',
    '/lecture',
    '/video',
];

// Install - statik dosyaları cache'le
self.addEventListener('install', (event) => {
    console.log('[SW] Installing...');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate - eski cache'leri temizle
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch - akıllı caching stratejisi
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // API istekleri için - network only (AI Tutor vb.)
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(
            fetch(request).catch(() => {
                return new Response(JSON.stringify({ error: 'Çevrimdışısınız' }), {
                    headers: { 'Content-Type': 'application/json' }
                });
            })
        );
        return;
    }

    // Statik dosyalar için - cache first
    if (request.destination === 'image' ||
        request.destination === 'font' ||
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.js')) {
        event.respondWith(
            caches.match(request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(request).then((response) => {
                    if (response && response.status === 200) {
                        const responseClone = response.clone();
                        caches.open(DYNAMIC_CACHE).then((cache) => {
                            cache.put(request, responseClone);
                        });
                    }
                    return response;
                });
            })
        );
        return;
    }

    // Sayfalar için - network first, cache fallback
    event.respondWith(
        fetch(request)
            .then((response) => {
                // Başarılı yanıtı cache'le
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(DYNAMIC_CACHE).then((cache) => {
                        cache.put(request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // Network başarısız - cache'e bak
                return caches.match(request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // Cache'de de yoksa offline sayfası göster
                    if (request.destination === 'document') {
                        return caches.match('/offline');
                    }
                });
            })
    );
});

// Background Sync - internet gelince senkronize et (gelecekte kullanılabilir)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-progress') {
        console.log('[SW] Syncing user progress...');
        // Burada LocalStorage'daki veriyi sunucuya gönderebiliriz
    }
});
