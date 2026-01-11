"use client";

import { Target, Flame, BookOpen, Zap, Gift, CheckCircle2, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useQuests, Quest } from "@/lib/quests-context";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useState, useEffect } from "react";

// İkon eşleştirme
const getQuestIcon = (iconType: Quest['iconType']) => {
    switch (iconType) {
        case 'xp':
            return { icon: Zap, iconColor: "text-amber-500", bgColor: "bg-amber-50" };
        case 'reading':
            return { icon: BookOpen, iconColor: "text-indigo-500", bgColor: "bg-indigo-50" };
        case 'streak':
            return { icon: Flame, iconColor: "text-rose-500", bgColor: "bg-rose-50" };
        case 'bonus':
            return { icon: Target, iconColor: "text-violet-500", bgColor: "bg-violet-50" };
        default:
            return { icon: Target, iconColor: "text-slate-500", bgColor: "bg-slate-50" };
    }
};

export default function QuestsPage() {
    const { quests, claimReward, completedCount, totalQuests, refreshQuests } = useQuests();
    const { addXp } = useUserProgress();
    const [claimedToast, setClaimedToast] = useState<string | null>(null);

    // Sayfa yüklendiğinde görevleri yenile (gün değişimi kontrolü)
    useEffect(() => {
        refreshQuests();
    }, [refreshQuests]);

    // Ödül alma
    const handleClaim = (quest: Quest) => {
        if (quest.completed && !quest.claimed) {
            const reward = claimReward(quest.id);
            if (reward > 0) {
                addXp(reward);
                setClaimedToast(`+${reward} XP kazandın!`);
                setTimeout(() => setClaimedToast(null), 2000);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-rose-50/30 p-4 pb-20">

            {/* Toast */}
            {claimedToast && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-bounce">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        {claimedToast}
                    </div>
                </div>
            )}

            {/* Başlık */}
            <div className="w-full max-w-[600px] mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Target className="w-8 h-8 text-rose-500" />
                    <h1 className="text-3xl font-extrabold text-slate-800">Günlük Görevler</h1>
                </div>
                <p className="text-slate-500 font-medium">Görevleri tamamla, ekstra XP kazan!</p>

                {/* Genel İlerleme */}
                <div className="mt-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-slate-600">Günlük İlerleme</span>
                        <span className="font-extrabold text-rose-500">{completedCount}/{totalQuests}</span>
                    </div>
                    <Progress value={(completedCount / totalQuests) * 100} className="h-3" />

                    {completedCount === totalQuests && (
                        <div className="mt-3 text-center text-emerald-600 font-bold flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-5 h-5" />
                            Tüm görevleri tamamladın! 🎉
                        </div>
                    )}
                </div>
            </div>

            {/* Görev Listesi */}
            <div className="w-full max-w-[600px] space-y-4">
                {quests.map((quest) => {
                    const { icon: Icon, iconColor, bgColor } = getQuestIcon(quest.iconType);
                    const progressPercent = (quest.current / quest.target) * 100;

                    return (
                        <div
                            key={quest.id}
                            className={`p-4 rounded-2xl transition-all ${quest.completed
                                ? quest.claimed
                                    ? "bg-slate-50 border-2 border-slate-200 opacity-60"
                                    : "bg-emerald-50 border-2 border-emerald-200"
                                : "bg-white border border-slate-100 hover:shadow-md"
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                {/* İkon */}
                                <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center`}>
                                    <Icon className={`w-6 h-6 ${iconColor}`} />
                                </div>

                                {/* İçerik */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className={`font-bold ${quest.completed ? "text-emerald-600" : "text-slate-700"}`}>
                                            {quest.title}
                                        </h3>
                                        {quest.claimed && <CheckCircle2 className="w-5 h-5 text-slate-400" />}
                                        {quest.completed && !quest.claimed && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                                    </div>
                                    <p className="text-sm text-slate-400 mb-3">{quest.description}</p>

                                    {/* İlerleme Çubuğu */}
                                    {!quest.claimed && (
                                        <div className="space-y-1">
                                            <Progress value={progressPercent} className="h-2" />
                                            <p className="text-xs text-slate-400 font-medium">{quest.current}/{quest.target}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Ödül / Buton */}
                                <div className="flex flex-col items-end gap-2">
                                    {quest.completed && !quest.claimed ? (
                                        <Button
                                            onClick={() => handleClaim(quest)}
                                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl animate-pulse"
                                        >
                                            <Gift className="w-4 h-4 mr-1" />
                                            Al +{quest.reward} XP
                                        </Button>
                                    ) : (
                                        <div className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-sm ${quest.claimed
                                            ? "bg-slate-100 text-slate-400"
                                            : "bg-amber-100 text-amber-600"
                                            }`}>
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

            {/* Bilgi Notu */}
            <div className="w-full max-w-[600px] mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-700 text-center">
                    💡 Görevler her gün gece yarısı sıfırlanır. Derslerini tamamla ve XP kazan!
                </p>
            </div>
        </div>
    );
}
