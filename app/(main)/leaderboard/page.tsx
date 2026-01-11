"use client";

import { Trophy, Medal, TrendingUp, Users } from "lucide-react";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useState, useEffect } from "react";

const getRankStyle = (rank: number) => {
    switch (rank) {
        case 1:
            return "from-amber-400 to-yellow-500 text-white";
        case 2:
            return "from-slate-300 to-slate-400 text-white";
        case 3:
            return "from-amber-600 to-amber-700 text-white";
        default:
            return "from-slate-100 to-slate-200 text-slate-600";
    }
};

const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-amber-400" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-slate-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return null;
};

export default function LeaderboardPage() {
    const { user } = useUserProgress();
    const [leaderboardData, setLeaderboardData] = useState<{ rank: number, name: string, avatar: string, xp: number, isCurrentUser: boolean }[]>([]);

    useEffect(() => {
        // Sadece gerçek kullanıcıyı (seni) göster
        const currentUserEntry = {
            name: user.name || "Misafir",
            avatar: user.avatar,
            xp: user.totalXp,
            isCurrentUser: true
        };

        const allUsers = [currentUserEntry];

        // Sort by XP descending (gerçi tek kişi var ama olsun)
        allUsers.sort((a, b) => b.xp - a.xp);

        // Assign ranks
        const rankedUsers = allUsers.map((u, i) => ({
            ...u,
            rank: i + 1
        }));

        setLeaderboardData(rankedUsers);
    }, [user.totalXp, user.name, user.avatar]);

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-amber-50/30 p-4 pb-20">

            {/* Başlık */}
            <div className="w-full max-w-[600px] mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-8 h-8 text-amber-500" />
                    <h1 className="text-3xl font-extrabold text-slate-800">Liderlik Tablosu</h1>
                </div>
                <p className="text-slate-500 font-medium">Bu haftanın en çalışkan öğrencileri</p>
            </div>

            {/* Lider Tablosu */}
            <div className="w-full max-w-[600px] space-y-3">
                {leaderboardData.map((data) => (
                    <div
                        key={data.rank}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${data.isCurrentUser
                            ? "bg-gradient-to-r from-indigo-50 to-violet-50 border-2 border-indigo-200 shadow-lg scale-[1.02]"
                            : "bg-white border border-slate-100 hover:shadow-md"
                            }`}
                    >
                        {/* Sıralama */}
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getRankStyle(data.rank)} flex items-center justify-center font-bold text-lg shadow-sm`}>
                            {data.rank}
                        </div>

                        {/* Avatar */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md ${data.isCurrentUser
                            ? "bg-gradient-to-br from-indigo-500 to-violet-500"
                            : "bg-gradient-to-br from-slate-400 to-slate-500"
                            }`}>
                            {data.avatar}
                        </div>

                        {/* İsim */}
                        <div className="flex-1">
                            <p className={`font-bold ${data.isCurrentUser ? "text-indigo-600" : "text-slate-700"}`}>
                                {data.name} {data.isCurrentUser && "(Sen)"}
                            </p>
                            <div className="flex items-center gap-1 text-sm text-slate-400">
                                <TrendingUp className="w-4 h-4" />
                                <span>Bu hafta aktif</span>
                            </div>
                        </div>

                        {/* XP ve Rozet */}
                        <div className="flex items-center gap-2">
                            {getRankIcon(data.rank)}
                            <div className="text-right">
                                <p className="font-extrabold text-amber-500">{data.xp.toLocaleString()}</p>
                                <p className="text-xs text-slate-400 font-medium">XP</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

