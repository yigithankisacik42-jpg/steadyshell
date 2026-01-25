"use client";

import { Target, Flame, BookOpen, Zap, Gift, CheckCircle2, Sparkles, ArrowLeft, Trophy, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useQuests, Quest } from "@/lib/quests-context";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// İkon eşleştirme
const getQuestIcon = (iconType: Quest['iconType']) => {
    switch (iconType) {
        case 'xp':
            return { icon: Zap, gradient: "from-amber-400 to-orange-500" };
        case 'reading':
            return { icon: BookOpen, gradient: "from-indigo-400 to-violet-500" };
        case 'streak':
            return { icon: Flame, gradient: "from-rose-400 to-pink-500" };
        case 'bonus':
            return { icon: Target, gradient: "from-violet-400 to-purple-500" };
        default:
            return { icon: Target, gradient: "from-slate-400 to-slate-500" };
    }
};

export default function QuestsPage() {
    const { quests, claimReward, completedCount, totalQuests, refreshQuests } = useQuests();
    const { addXp } = useUserProgress();
    const [claimedToast, setClaimedToast] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        refreshQuests();
        setIsMounted(true);
    }, [refreshQuests]);

    const handleClaim = (quest: Quest) => {
        if (quest.completed && !quest.claimed) {
            const reward = claimReward(quest.id);
            if (reward > 0) {
                addXp(reward);
                setClaimedToast(`+${reward} XP kazandın!`);
                setTimeout(() => setClaimedToast(null), 2500);
            }
        }
    };

    if (!isMounted) return null;

    const overallProgress = totalQuests > 0 ? (completedCount / totalQuests) * 100 : 0;

    return (
        <div className="flex flex-col w-full min-h-screen bg-slate-50 relative overflow-hidden pb-20">

            {/* --- BACKGROUND BLOBS --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-5%] right-[-10%] w-[35rem] h-[35rem] bg-rose-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[10%] left-[-10%] w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* --- TOAST --- */}
            {claimedToast && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-4 fade-in duration-300">
                    <div className="bg-emerald-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl shadow-emerald-500/30 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        {claimedToast}
                    </div>
                </div>
            )}

            {/* --- HEADER --- */}
            <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-rose-100 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 h-[72px] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/learn" className="lg:hidden">
                            <Button variant="ghost" size="icon" className="h-10 w-10 relative text-slate-400 hover:text-rose-600">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-lg lg:text-xl font-black text-slate-700 flex items-center gap-2">
                            <Target className="w-6 h-6 text-rose-500" />
                            Günlük Görevler
                        </h1>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg">
                        <Clock className="w-4 h-4" />
                        Gece yarısı sıfırlanır
                    </div>
                </div>
            </header>

            {/* --- CONTENT --- */}
            <main className="flex-1 w-full max-w-2xl mx-auto p-4 space-y-6 relative z-10">

                {/* Overall Progress Card */}
                <div className="relative bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-6 shadow-xl shadow-rose-500/20 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />

                    <div className="relative z-10 flex items-center justify-between mb-4">
                        <div>
                            <p className="text-rose-100 font-bold text-sm uppercase tracking-wider mb-1">Bugünkü İlerleme</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black">{completedCount}</span>
                                <span className="text-2xl font-bold text-rose-200">/ {totalQuests}</span>
                            </div>
                        </div>
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <Trophy className={cn("w-10 h-10", completedCount === totalQuests ? "text-yellow-300 drop-shadow-md" : "text-white/80")} />
                        </div>
                    </div>

                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${overallProgress}%` }}
                        />
                    </div>

                    {completedCount === totalQuests && (
                        <p className="text-center mt-4 font-bold text-yellow-200 animate-pulse">
                            🎉 Tüm görevleri tamamladın! Yarın tekrar gel.
                        </p>
                    )}
                </div>

                {/* Quest List */}
                <div className="space-y-4">
                    {quests.map((quest) => {
                        const { icon: Icon, gradient } = getQuestIcon(quest.iconType);
                        const progressPercent = quest.target > 0 ? (quest.current / quest.target) * 100 : 0;

                        return (
                            <div
                                key={quest.id}
                                className={cn(
                                    "relative bg-white rounded-[24px] p-5 border-b-4 transition-all duration-300 group overflow-hidden",
                                    quest.claimed
                                        ? "border-slate-200 opacity-60"
                                        : quest.completed
                                            ? "border-emerald-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
                                            : "border-slate-200 hover:-translate-y-1 hover:shadow-lg"
                                )}
                            >
                                {/* Claimed Overlay */}
                                {quest.claimed && (
                                    <div className="absolute top-3 right-3 bg-slate-100 text-slate-400 text-[10px] font-black uppercase px-2 py-1 rounded-lg flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Alındı
                                    </div>
                                )}

                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br shrink-0",
                                        gradient
                                    )}>
                                        <Icon className="w-7 h-7 text-white drop-shadow-sm" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className={cn(
                                            "font-bold text-base leading-tight mb-1",
                                            quest.completed ? "text-emerald-600" : "text-slate-700"
                                        )}>
                                            {quest.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 mb-3 leading-relaxed">{quest.description}</p>

                                        {/* Progress Bar */}
                                        {!quest.claimed && (
                                            <div className="space-y-1.5">
                                                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={cn(
                                                            "h-full rounded-full transition-all duration-500",
                                                            quest.completed ? "bg-emerald-500" : "bg-indigo-500"
                                                        )}
                                                        style={{ width: `${Math.min(progressPercent, 100)}%` }}
                                                    />
                                                </div>
                                                <p className="text-xs text-slate-400 font-bold">
                                                    {quest.current} / {quest.target}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Reward / Button */}
                                    <div className="flex flex-col items-end shrink-0 ml-2">
                                        {quest.completed && !quest.claimed ? (
                                            <Button
                                                onClick={() => handleClaim(quest)}
                                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-2 h-auto rounded-xl shadow-lg shadow-emerald-500/30 animate-pulse"
                                            >
                                                <Gift className="w-4 h-4 mr-1.5" />
                                                Al
                                            </Button>
                                        ) : (
                                            <div className={cn(
                                                "flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-sm",
                                                quest.claimed
                                                    ? "bg-slate-100 text-slate-400"
                                                    : "bg-amber-100 text-amber-600"
                                            )}>
                                                <Gift className="w-4 h-4" />
                                                +{quest.reward} XP
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </main>
        </div>
    );
}
