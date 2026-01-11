'use client';

import { useNetworkStatus } from '@/lib/use-network-status';
import { WifiOff } from 'lucide-react';

export function OfflineIndicator() {
    const { isOnline } = useNetworkStatus();

    if (isOnline) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto z-50 animate-in slide-in-from-bottom-4 duration-300">
            <div className="bg-amber-500 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                <WifiOff className="w-5 h-5 flex-shrink-0" />
                <div>
                    <p className="font-medium text-sm">Çevrimdışı Mod</p>
                    <p className="text-xs text-amber-100">İnternet bağlantısı bekleniyor...</p>
                </div>
            </div>
        </div>
    );
}
