"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Zap, BookOpen, Sparkles, GraduationCap, ChevronRight, MessageCircle, Library, Play, Heart, Clock } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCurriculum, LessonType } from "@/lib/curriculum";
import { APP_CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";
import { getVideoForUnit } from "@/lib/videos";
import { useHearts, formatTime } from "@/lib/hearts-context";

export default function LearnPage() {
    const { currentLanguage, currentLevel, setCurrentLevel, progress } = useLanguage();
    const { hearts, maxHearts, getTimeUntilNextHeart, isRecovering } = useHearts();
    const isPremiumLive = APP_CONFIG.isPremiumLive;
    const allLessonsUnlocked = true; // TEST MODE: Tüm dersler açık

    // Hydration mismatch'i önlemek için client-side mount kontrolü
    const [isMounted, setIsMounted] = useState(false);
    const [timeUntilHeart, setTimeUntilHeart] = useState<number | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Timer güncelleme
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeUntilHeart(getTimeUntilNextHeart());
        }, 1000);
        return () => clearInterval(interval);
    }, [getTimeUntilNextHeart]);

    const currentProgress = progress[currentLanguage.code];
    const units = getCurriculum(currentLanguage.code, currentLevel?.code || "A1");

    const getLessonIcon = (type: LessonType, completed: boolean) => {
        if (completed) return "✓";
        switch (type) {
            case "LECTURE": return "📚";
            case "VOCABULARY": return "📖";
            case "PHRASES": return <MessageCircle className="w-8 h-8" />;
            case "GRAMMAR": return <Library className="w-8 h-8" />;
            case "READING": return "📕";
            case "SPEAKING": return "🎤";
            default: return "★";
        }
    };

    const getLessonRoute = (type: LessonType, unitId: number, lessonIndex: number, lessons: { type: LessonType }[]) => {
        const baseRoute = type === "LECTURE" ? "/lecture" :
            type === "VOCABULARY" ? "/vocabulary" :
                type === "PHRASES" ? "/phrases" :
                    type === "GRAMMAR" ? "/grammar" :
                        type === "READING" ? "/reading" :
                            type === "SPEAKING" ? "/speaking" : "/lesson";

        // LESSON tipi için kaçıncı quiz olduğunu hesapla
        if (type === "LESSON") {
            const previousLessons = lessons.slice(0, lessonIndex);
            const quizIndex = previousLessons.filter(l => l.type === "LESSON").length + 1;
            return `${baseRoute}?unitId=${unitId}&quizIndex=${quizIndex}`;
        }

        return `${baseRoute}?unitId=${unitId}`;
    };


    return (
        <div className="flex flex-col gap-6 pb-40 items-center w-full bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 min-h-screen text-foreground">

            {/* ÜST BİLGİ ÇUBUGU */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md z-40 w-full border-b border-slate-200/50 shadow-sm">
                <div className="p-4 flex justify-center items-center max-w-[800px] mx-auto">
                    {/* Dil Seçici */}
                    <LanguageSwitcher />
                </div>

                {/* Seviye Seçici */}
                <div className="border-t border-slate-100 bg-slate-50/50">
                    <div className="flex gap-2 p-3 overflow-x-auto max-w-[800px] mx-auto items-center">
                        {currentLanguage.levels.map((level) => {
                            const isSelected = currentLevel?.code === level.code;
                            return (
                                <button
                                    key={level.code}
                                    onClick={() => setCurrentLevel(level)}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap transition-all",
                                        isSelected
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                                            : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:shadow-md"
                                    )}
                                >
                                    <GraduationCap className="w-4 h-4" />
                                    {level.code} - {level.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* SEVİYE BİLGİSİ */}
            {currentLevel && (
                <div className="w-full max-w-[600px] px-4">
                    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4 rounded-2xl text-white shadow-lg shadow-indigo-200/50">
                        <h2 className="text-xl font-extrabold">{currentLanguage.flag} {currentLanguage.name} - Seviye {currentLevel.code}</h2>
                        <p className="text-white/80">{currentLevel.description}</p>
                        <div className="flex items-center gap-4 mt-3 text-sm">
                            <span>📚 {units.length} ünite</span>
                            <span>📖 {units.reduce((acc, u) => acc + u.lessons.length, 0)} ders</span>
                        </div>
                    </div>
                </div>
            )}

            {/* ÜNİTELER LİSTESİ */}
            {units.length > 0 ? (
                units.map((unit, unitIndex) => (
                    <div key={unit.id} className="w-full max-w-[600px] relative px-4">
                        {/* Ünite Başlık Kartı */}
                        <div className={`bg-gradient-to-r ${unit.color} p-5 rounded-2xl mb-8 text-white shadow-xl flex justify-between items-center`}>
                            <div>
                                <h2 className="text-lg font-extrabold">{unit.title}</h2>
                                <p className="font-medium opacity-90 text-sm">{unit.description}</p>
                            </div>
                            <Button variant="secondary" className="border-b-4 border-slate-200/50 active:border-b-0 rounded-xl font-bold text-sm bg-white/20 hover:bg-white/30 text-white border-transparent">
                                <BookOpen className="w-4 h-4 mr-1" /> REHBER
                            </Button>
                        </div>

                        {/* DERS BUTONLARI ZİNCİRİ */}
                        <div className="flex flex-col items-center gap-3 mb-8">
                            {/* VİDEO BUTONU - Eğer video varsa en başta göster */}
                            {getVideoForUnit(unit.id) && (
                                <div className="relative flex flex-col items-center">
                                    <Link href={`/video?unitId=${unit.id}`}>
                                        <Button className={`h-16 w-16 rounded-2xl text-2xl shadow-lg transition-all hover:scale-110 active:scale-95 border-b-4 bg-gradient-to-br ${unit.color} ${unit.borderColor}`}>
                                            🎬
                                        </Button>
                                    </Link>
                                    <span className="text-xs text-slate-500 mt-1 font-medium">Video</span>
                                    <div className="h-6 w-2 bg-slate-300 rounded-full mt-1" />
                                </div>
                            )}
                            {unit.lessons.map((lesson, lessonIndex) => {
                                // Hydration mismatch önlemek için isMounted kontrolü
                                const isCompleted = isMounted && currentProgress?.completedLessons.includes(lesson.id);
                                const isAccessible = allLessonsUnlocked || isCompleted || (unitIndex === 0 && lessonIndex <= 1);
                                const isCurrentLesson = unitIndex === 0 && lessonIndex === 1 && !isCompleted;

                                // Zigzag pattern
                                const offset = lessonIndex % 3 === 1 ? 'ml-12' : lessonIndex % 3 === 2 ? 'mr-12' : '';

                                return (
                                    <div
                                        key={lesson.id}
                                        className={`relative flex flex-col items-center ${offset}`}
                                    >
                                        {isCurrentLesson && (
                                            <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white border-2 border-indigo-200 px-3 py-1 rounded-xl font-bold animate-bounce text-indigo-600 z-10 shadow-lg whitespace-nowrap text-sm">
                                                <Sparkles className="inline w-3 h-3 mr-1" />BAŞLA!
                                            </div>
                                        )}

                                        {isAccessible ? (
                                            <Link href={getLessonRoute(lesson.type, unit.id, lessonIndex, unit.lessons)}>
                                                <Button className={cn(
                                                    "h-16 w-16 rounded-2xl text-2xl shadow-lg transition-all hover:scale-110 active:scale-95 border-b-4",
                                                    isCompleted
                                                        ? "bg-emerald-500 border-emerald-700"
                                                        : `bg-gradient-to-br ${unit.color} ${unit.borderColor}`
                                                )}>
                                                    {getLessonIcon(lesson.type, isCompleted)}
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button disabled className="h-16 w-16 rounded-2xl bg-slate-200 border-b-4 border-slate-300 text-2xl opacity-50">
                                                🔒
                                            </Button>
                                        )}

                                        {/* Bağlantı Çizgisi */}
                                        {lessonIndex !== unit.lessons.length - 1 && (
                                            <div className="h-6 w-2 bg-slate-300 rounded-full mt-1" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full max-w-[600px] px-4 text-center py-20">
                    <GraduationCap className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-400">Bu seviye yakında eklenecek!</h3>
                    <p className="text-slate-400 mt-2">Şimdilik A1 seviyesini tamamlayabilirsin.</p>
                </div>
            )}
        </div>
    );
}