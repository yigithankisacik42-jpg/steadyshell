'use client';

import { useState, useEffect } from 'react';

export function useNetworkStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [wasOffline, setWasOffline] = useState(false);

    useEffect(() => {
        // Not: Mobil cihazlarda (özellikle yerel ağ testlerinde) navigator.onLine 
        // bazen yanlışlıkla false dönebiliyor. Bu yüzden sadece event'lere odaklanıyoruz.
        // Başlangıç durumu zaten state'de 'true' olarak ayarlandı.
        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
             setIsOnline(false);
             setWasOffline(true);
        }

        const handleOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
            setWasOffline(true);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [wasOffline]);

    return { isOnline, wasOffline };
}
