"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Lock, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generateMapPath, getUnitColor, MAP_WIDTH, LEVEL_HEIGHT } from './map-utils';
import Image from 'next/image';

interface Unit {
    id: number;
    title: string;
    description: string;
    lessons: { id: number; type: string }[];
}

interface UnitMapProps {
    units: Unit[];
    currentProgress: { completedLessons: number[] } | undefined;
    allLessonsUnlocked: boolean;
    getLessonRoute: (type: string, unitId: number, lessonIndex: number, lessons: any[]) => string;
}

export const UnitMap = ({ units, currentProgress, allLessonsUnlocked, getLessonRoute }: UnitMapProps) => {
    const { points, svgPathD, totalHeight } = generateMapPath(units.length);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to current unit on mount
    useEffect(() => {
        const currentUnitIndex = units.findIndex(u => {
            const isCompleted = u.lessons.every(l => currentProgress?.completedLessons.includes(l.id));
            return !isCompleted;
        });

        const targetIndex = currentUnitIndex === -1 ? units.length - 1 : currentUnitIndex;

        if (scrollRef.current) {
            // Calculate scroll position to center the current unit
            const yPos = points[targetIndex].y;
            const containerHeight = window.innerHeight;
            scrollRef.current.scrollTop = yPos - containerHeight / 2;
        }
    }, [units, currentProgress, points]);

    return (
        <div ref={scrollRef} className="relative w-full overflow-y-auto no-scrollbar" style={{ height: '80vh' }}>
            {/* Dynamic Background based on Zones */}
            <div className="absolute inset-0 w-full z-0 pointer-events-none">
                {/* We can add zone-specific background images or gradients here later */}
                <div className="w-full h-full bg-slate-50 opacity-40" />
            </div>

            <div className="relative mx-auto" style={{ width: MAP_WIDTH, height: totalHeight }}>

                {/* THE PATH (SVG Line) */}
                <svg
                    width={MAP_WIDTH}
                    height={totalHeight}
                    className="absolute top-0 left-0 z-0 pointer-events-none overflow-visible"
                    style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))' }}
                >
                    {/* Path Shadow/Stroke */}
                    <path
                        d={svgPathD}
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray="20 10"
                    />
                    {/* Inner Path */}
                    <path
                        d={svgPathD}
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg>

                {/* THE NODES (Units) */}
                {units.map((unit, index) => {
                    const point = points[index];
                    const completedLessonCount = unit.lessons.filter(l => currentProgress?.completedLessons.includes(l.id)).length;
                    const isCompleted = completedLessonCount === unit.lessons.length;
                    const isLocked = !allLessonsUnlocked && !isCompleted && index > 0 &&
                        !units[index - 1].lessons.every(l => currentProgress?.completedLessons.includes(l.id));

                    const isCurrent = !isCompleted && !isLocked;

                    const colorClass = getUnitColor(index);
                    const firstLesson = unit.lessons[0];
                    const route = firstLesson ? getLessonRoute(firstLesson.type, unit.id, 0, unit.lessons) : '#';

                    return (
                        <div
                            key={unit.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group"
                            style={{ left: point.x, top: point.y }}
                        >
                            {/* Floating Label (Title) */}
                            <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-xl shadow-lg border border-slate-100 whitespace-nowrap z-20 pointer-events-none">
                                <h3 className="font-bold text-slate-700 text-sm">{unit.title}</h3>
                                <p className="text-xs text-slate-400 font-medium">Ünite {unit.id}</p>
                            </div>

                            {/* Node Button */}
                            <Link href={!isLocked ? route : '#'} className={cn("relative outline-none", isLocked && "cursor-not-allowed")}>
                                <motion.div
                                    whileHover={!isLocked ? { scale: 1.1 } : {}}
                                    whileTap={!isLocked ? { scale: 0.95 } : {}}
                                    className={cn(
                                        "w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 transition-all duration-300 relative",
                                        isCompleted
                                            ? `bg-gradient-to-br ${colorClass} text-white border-white`
                                            : isCurrent
                                                ? "bg-white border-indigo-500 text-indigo-600 animate-pulse-slow"
                                                : "bg-slate-200 border-slate-300 text-slate-400"
                                    )}
                                >
                                    {/* Icon Inside Node */}
                                    {isCompleted ? (
                                        <Check className="w-8 h-8 drop-shadow-md" strokeWidth={4} />
                                    ) : isLocked ? (
                                        <Lock className="w-8 h-8" />
                                    ) : (
                                        <Star className="w-8 h-8 fill-current" />
                                    )}

                                    {/* Stars / Crown for completed */}
                                    {isCompleted && (
                                        <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 p-1.5 rounded-full shadow-sm border-2 border-white">
                                            <Star className="w-3 h-3 fill-current" />
                                        </div>
                                    )}

                                    {/* Current Indicator Ring */}
                                    {isCurrent && (
                                        <div className="absolute -inset-3 rounded-full border-4 border-indigo-400/30 animate-ping" />
                                    )}
                                </motion.div>
                            </Link>

                            {/* CHARACTER AVATAR (If Current) */}
                            {isCurrent && (
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: -75, opacity: 1 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                    className="absolute left-1/2 -translate-x-1/2 w-16 h-16 z-30 pointer-events-none"
                                >
                                    <Image
                                        src="/mascot_v2.png"
                                        alt="Current"
                                        width={64}
                                        height={64}
                                        className="drop-shadow-2xl filter brightness-110"
                                    />
                                    {/* Speech Bubble */}
                                    <div className="absolute -top-8 left-full ml-[-20px] bg-white px-3 py-1.5 rounded-xl rounded-bl-sm shadow-md border border-slate-100 whitespace-nowrap animate-bounce">
                                        <span className="text-xs font-black text-indigo-600">Buradayım!</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
