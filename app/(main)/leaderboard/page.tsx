"use client";

import { Trophy, Medal, TrendingUp, Users, ArrowLeft, Crown, Flame, Zap } from "lucide-react";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const getRankStyle = (rank: number) => {
    switch (rank) {
        case 1:
            return { bg: "from-amber-400 to-yellow-500", text: "text-white", shadow: "shadow-amber-500/30" };
        case 2:
            return { bg: "from-slate-300 to-slate-400", text: "text-white", shadow: "shadow-slate-500/20" };
        case 3:
            return { bg: "from-amber-600 to-orange-600", text: "text-white", shadow: "shadow-orange-500/20" };
        default:
            return { bg: "from-slate-100 to-slate-200", text: "text-slate-600", shadow: "" };
    }
};

const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-amber-400 drop-shadow-md" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-slate-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return null;
};

export default function LeaderboardPage() {
    const { user } = useUserProgress();
    const [leaderboardData, setLeaderboardData] = useState<{ rank: number, name: string, avatar: string, xp: number, isCurrentUser: boolean }[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const res = await fetch("/api/leaderboard");
                if (res.ok) {
                    const data = await res.json();
                    setLeaderboardData(data);
                }
            } catch (error) {
                console.error("Failed to fetch leaderboard", error);
            } finally {
                setIsMounted(true);
            }
        };

        fetchLeaderboard();
    }, [user.totalXp]);

    if (!isMounted) return null;

    const champion = leaderboardData[0];

    return (
        <div className="flex flex-col w-full min-h-screen bg-slate-50 relative overflow-hidden pb-20">

            {/* --- BACKGROUND BLOBS --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-5%] left-[20%] w-[35rem] h-[35rem] bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[10%] right-[-10%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* --- HEADER --- */}
            <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-amber-100 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 h-[72px] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/learn" className="lg:hidden">
                            <Button variant="ghost" size="icon" className="h-10 w-10 relative text-slate-400 hover:text-amber-600">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-lg lg:text-xl font-black text-slate-700 flex items-center gap-2">
                            <Trophy className="w-6 h-6 text-amber-500" />
                            Liderlik Tablosu
                        </h1>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg">
                        <Users className="w-4 h-4" />
                        Bu Hafta
                    </div>
                </div>
            </header>

            {/* --- CONTENT --- */}
            <main className="flex-1 w-full max-w-2xl mx-auto p-4 space-y-6 relative z-10">

                {/* Top Champion Card */}
                {champion && (
                    <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-6 shadow-xl shadow-amber-500/20 text-white overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2" />

                        <div className="relative z-10 flex items-center justify-center flex-col">
                            <Crown className="w-12 h-12 text-yellow-200 mb-3 drop-shadow-lg" />
                            <p className="text-amber-100 font-bold text-sm uppercase tracking-wider mb-1">Haftanın Şampiyonu</p>

                            <div className="flex items-center gap-4 mt-4">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                                    {champion.avatar || "👤"}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black truncate max-w-[200px]">{champion.name || "Misafir"}</h2>
                                    <div className="flex items-center gap-2 mt-1 text-amber-100">
                                        <Zap className="w-4 h-4" />
                                        <span className="font-bold">{champion.xp.toLocaleString()} XP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Leaderboard List */}
                <div className="space-y-3">
                    <h2 className="text-lg font-bold text-slate-800 px-1 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-slate-400" />
                        Sıralama
                    </h2>

                    {leaderboardData.map((data) => {
                        const rankStyle = getRankStyle(data.rank);
                        return (
                            <div
                                key={data.rank}
                                className={cn(
                                    "relative flex items-center gap-4 p-4 rounded-[24px] border-b-4 transition-all duration-300 group overflow-hidden",
                                    data.isCurrentUser
                                        ? "bg-gradient-to-r from-indigo-50 to-violet-50 border-indigo-300 shadow-lg shadow-indigo-500/10 scale-[1.02]"
                                        : "bg-white border-slate-200 hover:-translate-y-1 hover:shadow-lg"
                                )}
                            >
                                {/* Rank Badge */}
                                <div className={cn(
                                    "w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center font-black text-xl shadow-md shrink-0",
                                    rankStyle.bg,
                                    rankStyle.text,
                                    rankStyle.shadow
                                )}>
                                    {data.rank}
                                </div>

                                {/* Avatar */}
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-md shrink-0",
                                    data.isCurrentUser
                                        ? "bg-gradient-to-br from-indigo-500 to-violet-500 text-white"
                                        : "bg-gradient-to-br from-slate-200 to-slate-300"
                                )}>
                                    {data.avatar || "👤"}
                                </div>

                                {/* Name & Status */}
                                <div className="flex-1 min-w-0">
                                    <p className={cn(
                                        "font-bold text-base leading-tight mb-1 flex items-center gap-2",
                                        data.isCurrentUser ? "text-indigo-600" : "text-slate-700"
                                    )}>
                                        <span className="truncate max-w-[120px] sm:max-w-[180px] inline-block overflow-hidden">{data.name}</span>
                                        {data.isCurrentUser && (
                                            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 text-[10px] font-black rounded-lg uppercase shrink-0">Sen</span>
                                        )}
                                    </p>
                                    <div className="flex items-center gap-1.5 text-sm text-slate-400 font-medium">
                                        <Flame className="w-4 h-4 text-orange-400" />
                                        <span>Bu hafta aktif</span>
                                    </div>
                                </div>

                                {/* XP & Icon */}
                                <div className="flex items-center gap-3 shrink-0">
                                    {getRankIcon(data.rank)}
                                    <div className="text-right">
                                        <p className="font-black text-lg text-amber-500">{data.xp.toLocaleString()}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">XP</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Info Note */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-center">
                    <p className="text-sm text-indigo-600 font-medium">
                        🏆 Liderlik tablosu her hafta Pazartesi günü sıfırlanır.
                    </p>
                </div>

            </main>
        </div>
    );
}
