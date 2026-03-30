"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Zap, BookOpen, Sparkles, GraduationCap, ChevronRight, MessageCircle, Library, Play, Heart, Clock, Award, Flame, Target, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUserProgress } from "@/contexts/user-progress-context";
import { getCurriculum, LessonType } from "@/lib/curriculum";
import { APP_CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";
import { getVideoForUnit } from "@/lib/videos";
import { useHearts } from "@/lib/hearts-context";
import { Map3DView } from "@/components/learn/map-3d-view";
import { ShelldonMentor } from "@/components/learn/shelldon-mentor";
import { Map as MapIcon, List as ListIcon } from "lucide-react";
import { useShelldon } from "@/contexts/shelldon-context";


export default function LearnPage() {
    const { currentLanguage, currentLevel, setCurrentLevel, progress } = useLanguage();
    const { hearts } = useHearts();
    const { user } = useUserProgress();
    const { showShelldon } = useShelldon();

    const [isMapMode, setIsMapMode] = useState(false);
    
    // Test modu: Tüm dersler açık
    const allLessonsUnlocked = true;

    // Hydration mismatch önleme
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        // Hoş geldin mesajı - Rastgele espriler de eklenebilir!
        const timer = setTimeout(() => {
             showShelldon("Derslere geri dönmene sevindim şampiyon! 🐢", "happy", 5000);
        }, 1500);

        return () => clearTimeout(timer);
    }, [showShelldon]);

    const units = getCurriculum(currentLanguage.code, currentLevel?.code || "A1");
    const currentProgress = progress[currentLanguage.code];

    // Gerçek kullanıcı istatistikleri
    const stats = [
        { label: "Günlük Seri", value: String(user.streak || 0), icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10" },
        { label: "Toplam XP", value: String(user.totalXp || 0), icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
        { label: "Başarılar", value: "0/50", icon: Trophy, color: "text-purple-500", bg: "bg-purple-500/10" },
    ];

    const getLessonIcon = (type: LessonType, completed: boolean) => {
        if (completed) return <div className="text-xl font-bold">✓</div>;
        switch (type) {
            case "VIDEO": return <Play className="w-6 h-6 ml-1" />;
            case "LECTURE": return <BookOpen className="w-6 h-6" />;
            case "VOCABULARY": return <Target className="w-6 h-6" />;
            case "PHRASES": return <MessageCircle className="w-6 h-6" />;
            case "GRAMMAR": return <Library className="w-6 h-6" />;
            case "READING": return <BookOpen className="w-6 h-6" />;
            case "SPEAKING": return <MessageCircle className="w-6 h-6" />;
            default: return <Star className="w-6 h-6" />;
        }
    };

    const getLessonDescription = (type: LessonType) => {
        switch (type) {
            case "VIDEO": return "Konu Videosu";
            case "LECTURE": return "Ders Anlatımı";
            case "VOCABULARY": return "Kelime Çalışması";
            case "PHRASES": return "Kalıp Pratiği";
            case "GRAMMAR": return "Dilbilgisi";
            case "READING": return "Okuma";
            case "SPEAKING": return "Konuşma";
            default: return "Pratik";
        }
    };

    const getLessonRoute = (type: string, unitId: number, lessonIndex: number, lessons: { type: string }[]) => {
        const baseRoute = type === "VIDEO" ? "/video" :
            type === "LECTURE" ? "/lecture" :
                type === "VOCABULARY" ? "/vocabulary" :
                    type === "PHRASES" ? "/phrases" :
                        type === "GRAMMAR" ? "/grammar" :
                            type === "READING" ? "/reading" :
                                type === "SPEAKING" ? "/speaking" : "/lesson";

        if (type === "LESSON") {
            const previousLessons = lessons.slice(0, lessonIndex);
            const quizIndex = previousLessons.filter(l => l.type === "LESSON").length + 1;
            return `${baseRoute}?unitId=${unitId}&quizIndex=${quizIndex}`;
        }

        return `${baseRoute}?unitId=${unitId}`;
    };

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#FDFDFD] pb-32">

            {/* HERO SECTION WITH GLASSMORPHISM */}
            <div className="relative w-full bg-slate-900 text-white overflow-hidden pb-12 pt-6 px-4 md:px-8 shadow-2xl rounded-b-[3rem] mb-10 z-10">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-purple-600/30 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
                    <div className="absolute top-[20%] -right-[10%] w-[40%] h-[120%] bg-indigo-600/30 blur-[80px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[80%] bg-blue-600/20 blur-[90px] rounded-full mix-blend-screen" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Header Top Row */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                            <span className="text-xl">{currentLanguage.flag}</span>
                            <span className="font-bold text-sm tracking-wide">{currentLanguage.name}</span>
                        </div>

                        <div className="flex gap-2 p-1 bg-white/5 backdrop-blur-sm rounded-xl overflow-x-auto max-w-[60vw] md:max-w-none no-scrollbar">
                            {currentLanguage.levels.map((level) => {
                                const isSelected = currentLevel?.code === level.code;
                                return (
                                    <button
                                        key={level.code}
                                        onClick={() => setCurrentLevel(level)}
                                        className={cn(
                                            "px-3 py-2 md:px-4 rounded-lg font-bold text-[10px] md:text-xs transition-all duration-300 flex-shrink-0",
                                            isSelected
                                                ? "bg-white text-indigo-900 shadow-lg scale-105"
                                                : "text-white/60 hover:text-white hover:bg-white/10"
                                        )}
                                    >
                                        {level.code}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Hero Content */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-100">
                                    Öğrenmeye Devam Et!
                                </span>
                            </h1>
                            <p className="text-indigo-200 font-medium text-lg">Bugün harika bir iş çıkarıyorsun, Yiğithan. 🚀</p>
                        </div>

                        {/* Quick Stats Row */}
                        <div className="flex gap-2 md:gap-3 w-full md:w-auto overflow-x-auto md:overflow-visible pb-2 md:pb-0 no-scrollbar">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col items-center justify-center min-w-[5.5rem] h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors flex-shrink-0">
                                    <div className={`p-1.5 md:p-2 rounded-full mb-0.5 md:mb-1 ${stat.bg}`}>
                                        <stat.icon className={`w-4 h-4 md:w-5 md:h-5 ${stat.color}`} />
                                    </div>
                                    <span className="text-xl md:text-2xl font-bold">{stat.value}</span>
                                    <span className="text-[9px] md:text-[10px] text-white/60 uppercase tracking-wider font-semibold">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Access Card */}
                    {isMounted && currentLevel && units.length > 0 && (
                        <div className="flex flex-col gap-4">
                            <Link
                                href={getLessonRoute(units[0].lessons[0].type, units[0].id, 0, units[0].lessons)}
                                className="block w-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 p-6 rounded-3xl flex items-center justify-between group cursor-pointer hover:border-white/40 transition-all hover:scale-[1.02]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-indigo-600">
                                        <Play className="w-5 h-5 ml-1" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl">Kaldığın Yerden Devam Et</h3>
                                        <p className="text-white/70 text-sm">Ünite 1: {units[0].title} • {getLessonDescription(units[0].lessons[0].type)}</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-6 h-6 text-white/50 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* VIEW TOGGLE */}
                            <div className="flex justify-center mt-2">
                                <div className="bg-white/10 backdrop-blur-md p-1 rounded-2xl border border-white/10 flex gap-1">
                                    <button 
                                        onClick={() => setIsMapMode(false)}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                                            !isMapMode ? "bg-white text-indigo-900 shadow-lg" : "text-white/60 hover:text-white"
                                        )}
                                    >
                                        <ListIcon className="w-4 h-4" />
                                        Liste
                                    </button>
                                    <button 
                                        onClick={() => setIsMapMode(true)}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                                            isMapMode ? "bg-white text-indigo-900 shadow-lg" : "text-white/60 hover:text-white"
                                        )}
                                    >
                                        <MapIcon className="w-4 h-4" />
                                        3D Harita
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* SHELLDON'S DAILY WISDOM */}
            <div className="max-w-3xl mx-auto px-4 w-full mb-8 relative z-20">
                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/40 border border-indigo-50 flex items-center gap-6 group hover:border-indigo-200 transition-all">
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden relative">
                        <Image 
                            src="/mascot_v2.png" 
                            alt="Shelldon" 
                            width={50} 
                            height={50} 
                            className="relative z-10"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-3 h-3 text-indigo-500 fill-indigo-500" />
                            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Shelldon'ın Günlük Bilgeliği</span>
                        </div>
                        <p className="text-slate-700 font-bold text-sm leading-relaxed italic">
                            "Her gün sadece 5 yeni kelime öğrensen, bir yılın sonunda koca bir sözlüğe selam durursun dostum! 🐢✨"
                        </p>
                    </div>
                </div>
            </div>

            {/* CURRICULUM CONTENT */}
            <div className="max-w-3xl mx-auto px-4 w-full z-20 relative">
                {isMapMode && isMounted ? (
                    <div className="mb-12">
                        <Map3DView 
                            units={units} 
                            currentProgress={currentProgress}
                            allLessonsUnlocked={allLessonsUnlocked}
                            getLessonRoute={getLessonRoute}
                            getLessonDescription={getLessonDescription}
                        />
                    </div>
                ) : units.length > 0 ? (
                    <div className="flex flex-col gap-12">
                        {units.map((unit, unitIndex) => (
                            <div key={unit.id} className="group">
                                {/* Unit Header Card */}
                                <div className="relative mb-8 bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                                    {/* Decorative Gradient Background */}
                                    <div className={cn("absolute top-0 left-0 w-full h-2 bg-gradient-to-r", unit.color.replace('bg-', 'from-').replace('text-', 'to-'))} />

                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={cn("text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide bg-slate-100 text-slate-500")}>
                                                    ÜNİTE {unit.id}
                                                </span>
                                                {unitIndex === 0 && (
                                                    <span className="text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide bg-emerald-100 text-emerald-600 flex items-center gap-1">
                                                        <Sparkles className="w-3 h-3" /> AKTİF
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-2xl font-black text-slate-800 mb-2 leading-tight">{unit.title}</h2>
                                            <p className="text-slate-500 font-medium leading-relaxed">{unit.description}</p>
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl">
                                            <BookOpen className="w-5 h-5" />
                                        </Button>
                                    </div>

                                    {/* Progress Bar inside card */}
                                    <div className="mt-6">
                                        <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                                            <span>İLERLEME</span>
                                            <span>%{(unit.lessons.filter(l => currentProgress?.completedLessons.includes(l.id)).length / unit.lessons.length * 100).toFixed(0)}</span>
                                        </div>
                                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className={cn("h-full rounded-full transition-all duration-1000 bg-gradient-to-r", unit.color.replace('bg-', 'from-').replace('text-', 'to-'))}
                                                style={{ width: `${(unit.lessons.filter(l => currentProgress?.completedLessons.includes(l.id)).length / unit.lessons.length * 100)}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* AI Practice Button - All supported practice units */}
                                    {((unit.id >= 352 && unit.id <= 359) || // FR A2
                                        (unit.id >= 301 && unit.id <= 320) || // FR A1
                                        (unit.id >= 1 && unit.id <= 20) ||    // ES A1
                                        (unit.id >= 31 && unit.id <= 50)) && ( // ES A2
                                            <Link href={`/scene?unit=${unit.id}&lang=${currentLanguage.code}&level=${currentLevel?.code || 'A1'}`} className="block mt-4">
                                                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-200 rounded-2xl hover:border-violet-400 hover:shadow-lg hover:shadow-violet-100 transition-all group cursor-pointer">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-violet-200">
                                                            <MessageCircle className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-violet-800 text-sm">Luna ile Pratik Yap</p>
                                                            <p className="text-xs text-violet-600/70">Bu ünitenin kalıplarını AI ile çalış</p>
                                                        </div>
                                                    </div>
                                                    <ChevronRight className="w-5 h-5 text-violet-400 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </Link>
                                        )}
                                </div>

                                {/* Lesson Path (Vertical) */}
                                <div className="flex flex-col items-center relative space-y-4 pb-4">
                                    {unit.lessons.map((lesson, lessonIndex) => {
                                        const isCompleted = isMounted && currentProgress?.completedLessons.includes(lesson.id);
                                        const isAccessible = allLessonsUnlocked || isCompleted || (unitIndex === 0 && lessonIndex === 0);
                                        const isCurrent = !isCompleted && isAccessible;

                                        // Zig-zag offset calculation for visual variety
                                        const xOffset = Math.sin(lessonIndex) * 20;

                                        return (
                                            <div key={lesson.id} className="relative z-10 flex flex-col items-center group/lesson" style={{ transform: `translateX(${xOffset}px)` }}>

                                                {/* Tooltip on hover */}
                                                <div className="opacity-0 group-hover/lesson:opacity-100 absolute bottom-full mb-3 px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded-lg shadow-xl transition-all w-max pointer-events-none transform translate-y-2 group-hover/lesson:translate-y-0 text-center">
                                                    {getLessonDescription(lesson.type)}
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                                                </div>

                                                <Link href={isAccessible ? getLessonRoute(lesson.type, unit.id, lessonIndex, unit.lessons) : '#'}>
                                                    <div className={cn(
                                                        "w-20 h-20 rounded-[2rem] flex items-center justify-center text-3xl transition-all duration-300 relative",
                                                        isCompleted
                                                            ? "bg-gradient-to-b from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-200"
                                                            : isCurrent
                                                                ? `bg-white border-4 ${unit.borderColor} ${unit.borderColor.replace('border-', 'text-')} shadow-xl scale-110`
                                                                : "bg-white border-4 border-slate-200 text-slate-300"
                                                    )}>
                                                        {isCurrent && (
                                                            <div className={cn("absolute inset-0 rounded-[2rem] border-4 animate-ping opacity-20", unit.borderColor)} />
                                                        )}
                                                        {getLessonIcon(lesson.type, isCompleted)}

                                                        {/* Status Indicator Badge */}
                                                        {isCurrent && (
                                                            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm animate-bounce">
                                                                BAŞLA
                                                            </div>
                                                        )}
                                                    </div>
                                                </Link>

                                                {/* Connector Line Logic */}
                                                {lessonIndex < unit.lessons.length - 1 && (
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 h-12 -z-10 bg-slate-200/50" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-xl border border-slate-100 text-center">
                        <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                            <GraduationCap className="w-12 h-12 text-indigo-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Henüz İçerik Yok</h3>
                        <p className="text-slate-500 text-lg max-w-md mx-auto">Bu seviye için içeriklerimiz hazırlanıyor. Lütfen daha sonra tekrar kontrol et!</p>
                    </div>
                )}
            </div>

            {/* GRADIENT BOTTOM OVERLAY */}
            <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-30" />

            {/* AI MENTOR */}
            {isMounted && <ShelldonMentor />}
        </div>
    );
}