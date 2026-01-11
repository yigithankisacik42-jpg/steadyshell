"use client";

import { useState, useEffect } from "react";
import { Store, Heart, Snowflake, Gem, Sparkles, Gift, Calendar, Check, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/lib/config";
import { loadGemData, spendGems, claimDailyReward, getDailyStreakInfo, type GemData } from "@/lib/gems";

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

    useEffect(() => {
        setGemData(loadGemData());
        setStreakInfo(getDailyStreakInfo());
    }, []);

    // Günlük ödülü al
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

    // Ürün satın al
    const handlePurchase = (itemId: number, price: number, title: string) => {
        const result = spendGems(price, `${title} satın alındı`);
        if (result.success) {
            setGemData(result.data);
            setPurchaseSuccess(itemId);
            setTimeout(() => setPurchaseSuccess(null), 2000);
        }
    };

    const userGems = gemData?.balance || 0;

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-violet-50/30 p-4 pb-20">

            {/* Ödül Animasyonu */}
            {showRewardAnimation && (
                <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce">
                        <div className="flex items-center gap-3">
                            <Gem className="w-10 h-10" />
                            <div>
                                <p className="text-3xl font-extrabold">+{lastClaimedAmount}</p>
                                <p className="text-sm opacity-90">Taş kazandın!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Ücretsiz Site Banneri */}
            <div className="w-full max-w-[600px] mb-6">
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 p-4 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                        <Gift className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="font-bold text-emerald-800">🎉 SteadyShell Tamamen Ücretsiz!</p>
                        <p className="text-sm text-emerald-600">Her gün ders yap, taş kazan, mağazadan ödüller al!</p>
                    </div>
                </div>
            </div>

            {/* Başlık ve Gem Sayısı */}
            <div className="w-full max-w-[600px] mb-6">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <Store className="w-8 h-8 text-violet-500" />
                        <h1 className="text-3xl font-extrabold text-slate-800">Mağaza</h1>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-2 rounded-xl shadow-lg">
                        <Gem className="w-5 h-5 text-white" />
                        <span className="font-extrabold text-white text-lg">{userGems}</span>
                    </div>
                </div>
                <p className="text-slate-500 font-medium">Taş kazan, güçlendiriciler al!</p>
            </div>

            {/* 💎 Günlük Ödül Kartı */}
            <div className="w-full max-w-[600px] mb-8">
                <div className={`relative overflow-hidden p-6 rounded-3xl shadow-xl ${streakInfo?.canClaim
                    ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500'
                    : 'bg-gradient-to-r from-slate-400 to-slate-500'
                    }`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Calendar className="w-5 h-5 text-white/80" />
                                    <span className="text-sm font-bold text-white/80 uppercase">Günlük Ödül</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Gem className="w-8 h-8 text-white" />
                                    <span className="text-4xl font-extrabold text-white">
                                        +{(streakInfo?.nextReward || 10) + (streakInfo?.nextBonus || 0)}
                                    </span>
                                </div>
                                {(streakInfo?.nextBonus || 0) > 0 && (
                                    <p className="text-white/80 text-sm mt-1">
                                        🔥 {streakInfo?.streak || 0} günlük seri bonusu dahil!
                                    </p>
                                )}
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-1">
                                    <Flame className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-white font-bold">{gemData?.dailyStreak || 0} gün</span>
                            </div>
                        </div>

                        {streakInfo?.canClaim ? (
                            <Button
                                onClick={handleClaimDaily}
                                className="w-full bg-white text-orange-600 hover:bg-white/90 font-bold py-5 rounded-xl text-lg shadow-lg"
                            >
                                <Gift className="w-5 h-5 mr-2" />
                                Günlük Ödülü Al!
                            </Button>
                        ) : (
                            <div className="w-full bg-white/20 text-white font-bold py-4 rounded-xl text-center">
                                <Check className="w-5 h-5 inline mr-2" />
                                Bugünkü ödül alındı! Yarın tekrar gel 🌟
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Seri Bilgisi */}
            <div className="w-full max-w-[600px] mb-6">
                <div className="bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-4">
                    <p className="text-sm font-bold text-indigo-600 mb-2">🎯 Seri Bonusları</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className={`p-2 rounded-xl ${(gemData?.dailyStreak || 0) >= 3 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                            <p className="font-bold">3 gün</p>
                            <p className="text-xs">+5 💎</p>
                        </div>
                        <div className={`p-2 rounded-xl ${(gemData?.dailyStreak || 0) >= 7 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                            <p className="font-bold">7 gün</p>
                            <p className="text-xs">+15 💎</p>
                        </div>
                        <div className={`p-2 rounded-xl ${(gemData?.dailyStreak || 0) >= 30 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                            <p className="font-bold">30 gün</p>
                            <p className="text-xs">+50 💎</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mağaza Öğeleri */}
            <div className="w-full max-w-[600px]">
                <h2 className="text-xl font-bold text-slate-700 mb-4">💪 Güçlendiriciler</h2>
                <div className="grid grid-cols-2 gap-4">
                    {shopItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-white border border-slate-100 rounded-2xl p-4 transition-all hover:shadow-lg"
                        >
                            {item.popular && (
                                <div className="absolute -top-2 -right-2 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                                    Popüler
                                </div>
                            )}

                            {purchaseSuccess === item.id && (
                                <div className="absolute inset-0 bg-emerald-500 rounded-2xl flex items-center justify-center z-10">
                                    <div className="text-white text-center">
                                        <Check className="w-10 h-10 mx-auto mb-2" />
                                        <p className="font-bold">Satın Alındı!</p>
                                    </div>
                                </div>
                            )}

                            {/* İkon */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center mb-3 shadow-lg`}>
                                <item.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Bilgiler */}
                            <h3 className="font-bold text-slate-700">{item.title}</h3>
                            <p className="text-sm text-slate-400 mb-3">{item.description}</p>

                            {/* Fiyat Butonu */}
                            <Button
                                onClick={() => handlePurchase(item.id, item.price, item.title)}
                                className={`w-full font-bold rounded-xl py-2 ${userGems >= item.price
                                    ? 'bg-violet-100 hover:bg-violet-200 text-violet-600'
                                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                    }`}
                                disabled={userGems < item.price}
                            >
                                <Gem className="w-4 h-4 mr-1" />
                                {item.price}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Taş Kazanma İpuçları */}
            <div className="w-full max-w-[600px] mt-8">
                <div className="bg-violet-50 border border-violet-100 rounded-2xl p-4">
                    <h3 className="font-bold text-violet-700 mb-2">💡 Nasıl Taş Kazanırım?</h3>
                    <ul className="text-sm text-violet-600 space-y-1">
                        <li>✅ Her gün ders yap: <span className="font-bold">+10 💎</span></li>
                        <li>🔥 Günlük seri tut: <span className="font-bold">+5-50 💎 bonus</span></li>
                        <li>🎯 Hatasız ders bitir: <span className="font-bold">+5 💎</span></li>
                        <li>📚 Okuma tamamla: <span className="font-bold">+3 💎</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
