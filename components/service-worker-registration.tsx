'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegistration() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            // KILL SWITCH: Unregister any existing service workers to fix caching issues
            navigator.serviceWorker.getRegistrations().then(function (registrations) {
                for (let registration of registrations) {
                    console.log('🚨 FORCE UNREGISTERING Service Worker for Unit 340 Update 🚨', registration);
                    registration.unregister();
                }
            });
        }
    }, []);

    return null;
}
