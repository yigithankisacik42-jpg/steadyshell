"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BookOpen, Star, Play, MessageCircle, Library, Target, MapPin, CheckCircle2, Lock } from 'lucide-react';
import { Unit, LessonType } from '@/lib/curriculum';

interface InteractiveMapProps {
    units: Unit[];
    completedLessons: number[];
}

const getLessonIcon = (type: LessonType, completed: boolean) => {
    if (completed) return <CheckCircle2 className="w-6 h-6" />;
    switch (type) {
        case "VIDEO": return <Play className="w-5 h-5 ml-1" />;
        case "LECTURE": return <BookOpen className="w-5 h-5" />;
        case "VOCABULARY": return <Target className="w-5 h-5" />;
        case "PHRASES": return <MessageCircle className="w-5 h-5" />;
        case "GRAMMAR": return <Library className="w-5 h-5" />;
        case "READING": return <BookOpen className="w-5 h-5" />;
        case "SPEAKING": return <MessageCircle className="w-5 h-5" />;
        default: return <Star className="w-5 h-5" />;
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

export function InteractiveMap({ units, completedLessons }: InteractiveMapProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [activeHoverNode, setActiveHoverNode] = useState<string | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    // Her ünitenin node'larını (lessons) düz bir diziye çevirelim ki yolları çizebilelim
    const allNodes = units.flatMap((unit, unitIdx) => 
        unit.lessons.map((lesson, lessonIdx) => {
            const isCompleted = completedLessons.includes(lesson.id);
            // Bir node'un erişilebilir olması için ya ilk node olmalı, ya tamamlanmış olmalı, ya da bir önceki node tamamlanmış olmalı.
            // Test için hepsi açık mantığı ekleyebiliriz ama map'te sırayı göstermek daha iyi.
            // Şimdilik hepsi erişilebilir yapıyoruz (allLessonsUnlocked = true in parent)
            const isAccessible = true; 

            return {
                ...lesson,
                unitId: unit.id,
                unitTitle: unit.title,
                unitColor: unit.color,
                unitBorderColor: unit.borderColor,
                globalIndex: `${unitIdx}-${lessonIdx}`,
                isCompleted,
                isAccessible,
                isCurrent: !isCompleted && isAccessible,
                lessonsArray: unit.lessons
            };
        })
    );

    return (
        <div className="relative w-full min-h-[800px] bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-50 rounded-3xl overflow-hidden shadow-inner border border-sky-200 p-8 pt-12">
            
            {/* Dekoratif Arka Plan Çizimleri */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/40 blur-3xl rounded-full" />
            <div className="absolute top-[40%] right-[-10%] w-64 h-64 bg-emerald-200/40 blur-3xl rounded-full" />
            <div className="absolute bottom-10 left-[20%] w-48 h-48 bg-amber-200/40 blur-3xl rounded-full" />

            {/* Dalga Desenleri */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50 Q 25 30 50 50 T 100 50" fill="none" stroke="currentColor" className="text-sky-400" strokeWidth="2" strokeDasharray="5,5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#waves)" />
            </svg>

            <div className="relative z-10 flex flex-col items-center justify-start space-y-8 w-full max-w-lg mx-auto pb-32">
                
                {/* Şehir Başlığı (Sanki bir haritada ilerliyormuşuz gibi) */}
                <div className="sticky top-4 z-50 bg-white/80 backdrop-blur-md border border-white/50 px-6 py-3 rounded-full shadow-lg shadow-sky-900/5 mb-8 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-rose-500" />
                    <span className="font-black text-sky-900 tracking-wide">YOLCULUK HARİTASI</span>
                </div>

                {allNodes.map((node, i) => {
                    // Yılan (zig-zag) şeklinde ilerleme efekti
                    const xOffset = Math.sin(i * 0.6) * 80;
                    
                    const isCompleted = node.isCompleted;
                    const isCurrent = node.isCurrent && !allNodes.slice(0, i).some(n => !n.isCompleted); // Gerçek "Current" noktası
                    
                    // Yol çizimi (önceki node ile bu node arasında)
                    const hasNext = i < allNodes.length - 1;

                    return (
                        <div 
                            key={node.id} 
                            className="relative flex flex-col items-center group"
                            style={{ transform: `translateX(${xOffset}px)` }}
                        >
                            {/* Aktif Popup (Glassmorphism) */}
                            <AnimatePresence>
                                {(activeHoverNode === node.globalIndex || isCurrent) && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                        className="absolute bottom-full mb-4 w-48 bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-3 z-50 text-center pointer-events-none"
                                    >
                                        <div className={cn("text-[10px] font-black uppercase tracking-wider mb-1", node.unitColor.replace('bg-', 'text-'))}>
                                            Ünite {node.unitId}
                                        </div>
                                        <div className="text-sm font-bold text-slate-800 leading-tight">
                                            {node.unitTitle}
                                        </div>
                                        <div className="text-xs text-slate-500 mt-1 font-medium">
                                            {node.type}
                                        </div>
                                        {/* Üçgen Ok */}
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 rotate-45 border-r border-b border-white/40" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Node Butonu */}
                            <Link href={node.isAccessible ? getLessonRoute(node.type, node.unitId, i, node.lessonsArray) : '#'}>
                                <motion.div 
                                    whileHover={{ scale: node.isAccessible ? 1.1 : 1 }}
                                    whileTap={{ scale: node.isAccessible ? 0.95 : 1 }}
                                    onHoverStart={() => setActiveHoverNode(node.globalIndex)}
                                    onHoverEnd={() => setActiveHoverNode(null)}
                                    className={cn(
                                        "relative w-20 h-20 rounded-[2rem] flex items-center justify-center text-2xl transition-colors duration-300 z-20 cursor-pointer shadow-xl",
                                        isCompleted
                                            ? "bg-gradient-to-b from-emerald-400 to-emerald-600 text-white shadow-emerald-500/30 border border-emerald-300"
                                            : isCurrent
                                                ? `bg-white border-[6px] ${node.unitBorderColor} ${node.unitBorderColor.replace('border-', 'text-')} scale-110 shadow-2xl`
                                                : "bg-slate-100 border-4 border-slate-200 text-slate-400 shadow-sm"
                                    )}
                                >
                                    {isCurrent && (
                                        <div className={cn("absolute inset-0 rounded-[2rem] border-4 animate-ping opacity-30", node.unitBorderColor)} />
                                    )}
                                    
                                    {!node.isAccessible ? (
                                        <Lock className="w-6 h-6 text-slate-300" />
                                    ) : (
                                        getLessonIcon(node.type, isCompleted)
                                    )}
                                </motion.div>
                            </Link>

                            {/* Bir Sonraki Node'a Giden Çizgi */}
                            {hasNext && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-16 -z-10">
                                    <svg width="100%" height="100%" viewBox="0 0 40 80" preserveAspectRatio="none">
                                        <path 
                                            d="M20,0 C20,40 20,40 20,80" 
                                            fill="none" 
                                            stroke={isCompleted ? "#10b981" : "#cbd5e1"} 
                                            strokeWidth="8" 
                                            strokeLinecap="round"
                                            strokeDasharray={isCompleted ? "none" : "8, 8"}
                                            className={cn("transition-colors duration-500", isCompleted ? "drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "")}
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
