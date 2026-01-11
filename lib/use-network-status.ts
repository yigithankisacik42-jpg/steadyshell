'use client';

import { useState, useEffect } from 'react';

export function useNetworkStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [wasOffline, setWasOffline] = useState(false);

    useEffect(() => {
        // İlk yüklemede durumu kontrol et
        setIsOnline(navigator.onLine);

        const handleOnline = () => {
            setIsOnline(true);
            // Eğer önceden offline idiysek, sayfayı yenile
            if (wasOffline) {
                window.location.reload();
            }
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
