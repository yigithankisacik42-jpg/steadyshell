'use client';

import { useState, useEffect } from 'react';

export function useNetworkStatus() {
    const [isOnline, setIsOnline] = useState(() => {
        if (typeof navigator === "undefined") return true;
        return navigator.onLine;
    });
    const [wasOffline, setWasOffline] = useState(false);

    useEffect(() => {
        if (typeof navigator !== "undefined") {
            const initialOnline = navigator.onLine;
            setIsOnline(initialOnline);
            if (!initialOnline) {
                setWasOffline(true);
            }
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
    }, []);

    return { isOnline, wasOffline };
}
