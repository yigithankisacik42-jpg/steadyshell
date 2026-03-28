"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export const MobileHeader = () => {
    const { currentLanguage, currentLevel, setCurrentLevel } = useLanguage();
    const [showNotifications, setShowNotifications] = useState(false);
    const [hasNewNotification] = useState(true); // TODO: Connect to real notification state

    const levels = currentLanguage?.levels || [];

    return (
        <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
            {/* Safe area for devices with notch */}
            <div className="pt-[env(safe-area-inset-top,0px)]">
                <div className="flex items-center justify-between px-4 py-2">
                    {/* Language Switcher */}
                    <LanguageSwitcher />

                    {/* Level Tabs */}
                    <div className="flex items-center gap-1 bg-slate-100/80 rounded-xl p-1 overflow-x-auto no-scrollbar max-w-[45vw]">
                        {levels.map((level) => {
                            const isActive = currentLevel?.code === level.code;
                            return (
                                <button
                                    key={level.code}
                                    onClick={() => setCurrentLevel(level)}
                                    className={cn(
                                        "px-3.5 py-2 rounded-lg text-xs font-bold transition-all duration-200 flex-shrink-0",
                                        isActive
                                            ? "bg-white text-indigo-600 shadow-sm"
                                            : "text-slate-500 hover:text-slate-700"
                                    )}
                                >
                                    {level.code}
                                </button>
                            );
                        })}
                    </div>

                    {/* Notification Bell */}
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative p-2 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                        <Bell className="w-5 h-5 text-slate-600" />
                        {hasNewNotification && (
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        )}
                    </button>
                </div>

                {/* Notifications Dropdown */}
                {showNotifications && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setShowNotifications(false)}
                        />
                        <div className="absolute right-4 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="p-3 border-b border-slate-100">
                                <h3 className="font-bold text-slate-700">Bildirimler</h3>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {/* Sample notifications */}
                                <div className="p-3 hover:bg-slate-50 border-b border-slate-50">
                                    <p className="text-sm font-medium text-slate-700">🎉 Yeni Ünite Eklendi!</p>
                                    <p className="text-xs text-slate-400 mt-0.5">Kültürel Farklar ünitesi yayında</p>
                                </div>
                                <div className="p-3 hover:bg-slate-50 border-b border-slate-50">
                                    <p className="text-sm font-medium text-slate-700">🔥 Seri Hatırlatması</p>
                                    <p className="text-xs text-slate-400 mt-0.5">Bugün henüz ders tamamlamadın</p>
                                </div>
                                <div className="p-3 hover:bg-slate-50">
                                    <p className="text-sm font-medium text-slate-700">🎭 Sahne Modu</p>
                                    <p className="text-xs text-slate-400 mt-0.5">Yeni senaryolar eklendi</p>
                                </div>
                            </div>
                            <div className="p-2 bg-slate-50 border-t border-slate-100">
                                <button className="w-full text-xs font-bold text-indigo-600 hover:text-indigo-700">
                                    Tümünü Gör
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};
