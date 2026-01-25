"use client";

import { useState, useEffect } from "react";
import { Store, Heart, Snowflake, Gem, Sparkles, Gift, Calendar, Check, Flame, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/lib/config";
import { loadGemData, spendGems, claimDailyReward, getDailyStreakInfo, type GemData } from "@/lib/gems";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Mağaza ürünleri
const shopItems = [
    {
        id: 1,
        category: "hearts",
        title: "Kalp Doldur",
        description: "5 kalp kazan",
        icon: Heart,
        iconColor: "text-rose-500",
        bgGradient: "from-rose-500 to-pink-500",
        price: 350,
    },
    {
        id: 2,
        category: "hearts",
        title: "Sınırsız Kalp",
        description: "3 saat boyunca",
        icon: Heart,
        iconColor: "text-rose-500",
        bgGradient: "from-rose-400 to-rose-600",
        price: 500,
        popular: true,
    },
    {
        id: 3,
        category: "streak",
        title: "Dondurma Hakkı",
        description: "1 gün seriyi koru",
        icon: Snowflake,
        iconColor: "text-sky-500",
        bgGradient: "from-sky-400 to-cyan-500",
        price: 200,
    },
    {
        id: 4,
        category: "streak",
        title: "Çift XP Boost",
        description: "15 dakika boyunca",
        icon: Sparkles,
        iconColor: "text-amber-500",
        bgGradient: "from-amber-400 to-orange-500",
        price: 300,
    },
];

export default function ShopPage() {
    const [gemData, setGemData] = useState<GemData | null>(null);
    const [streakInfo, setStreakInfo] = useState<ReturnType<typeof getDailyStreakInfo> | null>(null);
    const [showRewardAnimation, setShowRewardAnimation] = useState(false);
    const [lastClaimedAmount, setLastClaimedAmount] = useState(0);
    const [purchaseSuccess, setPurchaseSuccess] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setGemData(loadGemData());
        setStreakInfo(getDailyStreakInfo());
        setIsMounted(true);
    }, []);

    const handleClaimDaily = () => {
        const result = claimDailyReward();
        if (result.claimed) {
            setGemData(result.data);
            setLastClaimedAmount(result.amount + result.bonus);
            setShowRewardAnimation(true);
            setStreakInfo(getDailyStreakInfo());

            setTimeout(() => setShowRewardAnimation(false), 3000);
        }
    };

    const handlePurchase = (itemId: number, price: number, title: string) => {
        const result = spendGems(price, `${title} satın alındı`);
        if (result.success) {
            setGemData(result.data);
            setPurchaseSuccess(itemId);
            setTimeout(() => setPurchaseSuccess(null), 2000);
        }
    };

    const userGems = gemData?.balance || 0;

    if (!isMounted) return null;

    return (
        <div className="flex flex-col w-full min-h-screen bg-slate-50 relative overflow-hidden pb-20">

            {/* --- BACKGROUND BLOBS --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[20%] right-[-10%] w-[25rem] h-[25rem] bg-violet-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* --- REWARD ANIMATION MODAL --- */}
            {showRewardAnimation && (
                <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[32px] p-8 shadow-2xl animate-in zoom-in-50 duration-500 scale-100 relative overflow-hidden text-center max-w-sm w-full mx-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 opacity-50" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg shadow-amber-500/30 mb-6 animate-bounce">
                                <Gem className="w-12 h-12 text-white" />
                            </div>

                            <h2 className="text-4xl font-black text-slate-800 mb-2">+{lastClaimedAmount}</h2>
                            <p className="text-slate-500 font-bold uppercase tracking-wider mb-6">Taş Kazanıldı!</p>

                            <Button
                                className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-2xl h-12 font-bold shadow-lg"
                                onClick={() => setShowRewardAnimation(false)}
                            >
                                Harika!
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* --- HEADER --- */}
            <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-indigo-100 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 h-[72px] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/learn" className="lg:hidden">
                            <Button variant="ghost" size="icon" className="h-10 w-10 relative text-slate-400 hover:text-indigo-600">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-lg lg:text-xl font-black text-slate-700 flex items-center gap-2">
                            <Store className="w-6 h-6 text-violet-500" />
                            Mağaza
                        </h1>
                    </div>

                    <div className="flex items-center gap-2 bg-white border border-indigo-100 px-3 py-1.5 rounded-xl shadow-sm">
                        <Gem className="w-5 h-5 text-amber-500 fill-amber-500 drop-shadow-sm" />
                        <span className="font-black text-slate-700 text-lg">{userGems}</span>
                    </div>
                </div>
            </header>

            {/* --- CONTENT --- */}
            <main className="flex-1 w-full max-w-2xl mx-auto p-4 space-y-8 relative z-10">

                {/* Free Banner */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-6 shadow-lg shadow-emerald-500/20 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 transition-colors" />
                    <div className="relative z-10 flex items-start gap-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                            <Gift className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black mb-1">SteadyShell Ücretsiz!</h3>
                            <p className="text-emerald-50 font-medium leading-relaxed opacity-90">
                                Premium üyelik yok! Sadece ders yaparak taş kazan ve ödüllerin tadını çıkar.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Daily Reward */}
                <section>
                    <h2 className="text-lg font-bold text-slate-800 mb-4 px-1">Günlük Ödüller</h2>
                    <div className={cn(
                        "relative overflow-hidden rounded-[32px] p-1 border-b-4 transition-all duration-300 group",
                        streakInfo?.canClaim
                            ? "bg-gradient-to-br from-amber-400 to-orange-500 border-orange-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
                            : "bg-slate-100 border-slate-300"
                    )}>
                        <div className={cn(
                            "bg-white rounded-[28px] p-6 h-full relative overflow-hidden",
                            !streakInfo?.canClaim && "bg-slate-50"
                        )}>
                            {/* Background Pattern */}
                            <div className="absolute right-0 top-0 w-32 h-32 bg-current opacity-[0.03] rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none text-black" />

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                                {/* Left Info */}
                                <div className="flex-1 text-center sm:text-left">
                                    <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                        <Calendar className="w-3.5 h-3.5" />
                                        Günlük Giriş
                                    </div>
                                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                                        <div className="flex items-center text-4xl font-black text-slate-800">
                                            +{(streakInfo?.nextReward || 10) + (streakInfo?.nextBonus || 0)}
                                            <Gem className="w-8 h-8 text-amber-500 fill-amber-500 ml-2" />
                                        </div>
                                    </div>
                                    <p className="text-slate-400 font-medium text-sm">
                                        <span className="text-orange-500 font-bold">{gemData?.dailyStreak} günlük</span> seri bonusu dahil!
                                    </p>
                                </div>

                                {/* Right Action */}
                                <div className="shrink-0 w-full sm:w-auto">
                                    {streakInfo?.canClaim ? (
                                        <Button
                                            onClick={handleClaimDaily}
                                            className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-orange-500/30 border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 transition-all"
                                        >
                                            Ödülü Al
                                        </Button>
                                    ) : (
                                        <div className="max-w-[140px] mx-auto sm:mx-0 flex flex-col items-center gap-1 opacity-50">
                                            <Check className="w-8 h-8 text-emerald-500 bg-emerald-100 p-1.5 rounded-full" />
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Alındı</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shop Items Grid */}
                <section>
                    <h2 className="text-lg font-bold text-slate-800 mb-4 px-1 flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-slate-400" />
                        Güçlendiriciler
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {shopItems.map((item) => (
                            <div
                                key={item.id}
                                className="relative bg-white border border-slate-200 border-b-4 rounded-3xl p-5 hover:-translate-y-1 transition-transform duration-300 group overflow-hidden"
                            >
                                {item.popular && (
                                    <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl shadow-sm">
                                        Popüler
                                    </div>
                                )}

                                {purchaseSuccess === item.id && (
                                    <div className="absolute inset-0 z-20 bg-emerald-500/90 backdrop-blur-sm flex items-center justify-center flex-col text-white animate-in zoom-in duration-300">
                                        <Check className="w-12 h-12 mb-2 drop-shadow-md" />
                                        <span className="font-bold text-lg">Alındı!</span>
                                    </div>
                                )}

                                <div className="flex items-start gap-4 mb-4">
                                    <div className={cn(
                                        "w-16 h-16 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br",
                                        item.bgGradient
                                    )}>
                                        <item.icon className="w-8 h-8 text-white drop-shadow-md" />
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="font-bold text-slate-700 leading-tight mb-1">{item.title}</h3>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.description}</p>
                                    </div>
                                </div>

                                <Button
                                    onClick={() => handlePurchase(item.id, item.price, item.title)}
                                    disabled={userGems < item.price}
                                    className={cn(
                                        "w-full h-11 font-bold rounded-xl transition-all",
                                        userGems >= item.price
                                            ? "bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200"
                                            : "bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed"
                                    )}
                                >
                                    <Gem className={cn("w-4 h-4 mr-1.5", userGems >= item.price ? "text-amber-500" : "text-slate-300")} />
                                    {item.price}
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Streak Info */}
                <section className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-6 border border-indigo-100">
                    <div className="flex items-center gap-2 mb-4">
                        <Flame className="w-5 h-5 text-orange-500" />
                        <h3 className="font-bold text-slate-700">Seri Bonusları</h3>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { days: 3, reward: 5 },
                            { days: 7, reward: 15 },
                            { days: 30, reward: 50 }
                        ].map((milestone) => {
                            const isAchieved = (gemData?.dailyStreak || 0) >= milestone.days;
                            return (
                                <div key={milestone.days} className={cn(
                                    "flex flex-col items-center justify-center p-3 rounded-2xl border-b-4 transition-all",
                                    isAchieved
                                        ? "bg-white border-emerald-200 shadow-sm"
                                        : "bg-white/50 border-slate-100 opacity-60"
                                )}>
                                    <span className={cn("text-xs font-bold uppercase mb-1", isAchieved ? "text-emerald-500" : "text-slate-400")}>
                                        {milestone.days} GÜN
                                    </span>
                                    <div className="flex items-center gap-1 font-black text-slate-700">
                                        +{milestone.reward} <Gem className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

            </main>
        </div>
    );
}
