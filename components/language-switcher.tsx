"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
    const { currentLanguage, availableLanguages, switchLanguage, progress } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const currentProgress = progress[currentLanguage.code];

    return (
        <div className="relative">
            <Button
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 h-10 px-3 rounded-xl hover:bg-slate-100 transition-all"
            >
                <span className="text-2xl">{currentLanguage.flag}</span>
                <span className="font-bold text-slate-700 hidden sm:inline">{currentLanguage.name}</span>
                <ChevronDown className={cn(
                    "w-4 h-4 text-slate-400 transition-transform",
                    isOpen && "rotate-180"
                )} />
            </Button>

            {/* Dropdown Menü */}
            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="p-2">
                            <p className="text-xs font-bold text-slate-400 uppercase px-3 py-2">Dil Seç</p>

                            {availableLanguages.map((lang) => {
                                const langProgress = progress[lang.code];
                                const isSelected = lang.code === currentLanguage.code;

                                return (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            switchLanguage(lang.code);
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            "w-full flex items-center gap-3 p-3 rounded-xl transition-all",
                                            isSelected
                                                ? "bg-indigo-50 border-2 border-indigo-200"
                                                : "hover:bg-slate-50 border-2 border-transparent"
                                        )}
                                    >
                                        <span className="text-3xl">{lang.flag}</span>
                                        <div className="flex-1 text-left">
                                            <p className={cn(
                                                "font-bold",
                                                isSelected ? "text-indigo-600" : "text-slate-700"
                                            )}>
                                                {lang.name}
                                            </p>
                                            <p className="text-xs text-slate-400">
                                                {langProgress?.totalXp || 0} XP • {lang.levels.length} seviye
                                            </p>
                                        </div>
                                        {isSelected && (
                                            <Check className="w-5 h-5 text-indigo-600" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Alt Bilgi */}
                        <div className="border-t border-slate-100 p-3 bg-slate-50">
                            <p className="text-xs text-slate-400 text-center">
                                Dil değiştirdiğinde ilerleme korunur
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
