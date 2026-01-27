"use client";

import { useState, useEffect } from "react";
import { Settings, User, Bell, Lock, LogOut, ChevronRight, Sparkles, Check, TrendingUp, Clock, Target, Award, BookOpen, CheckCircle, XCircle, BarChart3, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { APP_CONFIG } from "@/lib/config";
import { getStatsSummary, getWeeklyStats, formatTimeShort, type DailyStats } from "@/lib/user-stats";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const settingsItems = [
    { icon: Bell, label: "Bildirimler", description: "Hatırlatma ve güncellemeler", href: "/settings/notifications" },
    { icon: Lock, label: "Gizlilik", description: "Hesap güvenliği ayarları", href: "/settings/privacy" },
];

const defaultUser = {
    name: "Yiğithan",
    email: "yigithan@steadyshell.com",
    avatar: "Y",
    isPremium: false,
    streak: 0,
    totalXp: 0,
    joinDate: "Aralık 2025",
};

export default function SettingsPage() {
    const isPremiumLive = APP_CONFIG.isPremiumLive;
    const isEarlyAccess = APP_CONFIG.isEarlyAccess;

    const [name, setName] = useState(defaultUser.name);
    const [email, setEmail] = useState(defaultUser.email);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
    const [user, setUser] = useState(defaultUser);
    const [stats, setStats] = useState<ReturnType<typeof getStatsSummary> | null>(null);
    const [weeklyStats, setWeeklyStats] = useState<DailyStats[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user) {
            const u = session.user;
            // Type assertion or check if properties exist
            setUser(prev => ({
                ...prev,
                name: u.name || prev.name,
                email: u.email || prev.email,
                avatar: u.image || (u.name ? u.name.charAt(0).toUpperCase() : prev.avatar),
            }));
            setName(u.name || "");
            setEmail(u.email || "");
        }

        setStats(getStatsSummary());
        setWeeklyStats(getWeeklyStats());
        setIsMounted(true);
    }, [session]);

    const { update } = useSession();
    const router = useRouter();

    const handleSave = async () => {
        setSaveStatus("saving");

        try {
            const res = await fetch("/api/user/update", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    currentPassword,
                    newPassword
                })
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Güncelleme başarısız"); // Simple alert for now, could use toast
                setSaveStatus("idle");
                return;
            }

            // Update local state
            setUser(prev => ({ ...prev, name, email }));

            // Update NextAuth session
            await update({
                ...data.user
            });

            setSaveStatus("saved");
            setCurrentPassword("");
            setNewPassword("");
            setTimeout(() => setSaveStatus("idle"), 2000);

            router.refresh();

        } catch (error) {
            console.error("Update error:", error);
            setSaveStatus("idle");
            alert("Bir hata oluştu");
        }
    };

    if (!isMounted) return null;

    return (
        <div className="flex flex-col w-full min-h-screen bg-slate-50 relative overflow-hidden pb-20">

            {/* --- BACKGROUND BLOBS --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-5%] right-[10%] w-[35rem] h-[35rem] bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[20%] left-[-10%] w-[30rem] h-[30rem] bg-violet-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* --- HEADER --- */}
            <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 h-[72px] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/learn" className="lg:hidden">
                            <Button variant="ghost" size="icon" className="h-10 w-10 relative text-slate-400 hover:text-indigo-600">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-lg lg:text-xl font-black text-slate-700 flex items-center gap-2">
                            <Settings className="w-6 h-6 text-slate-500" />
                            Ayarlar
                        </h1>
                    </div>
                </div>
            </header>

            {/* --- CONTENT --- */}
            <main className="flex-1 w-full max-w-2xl mx-auto p-4 space-y-6 relative z-10">

                {/* Profile Card */}
                <section className="bg-white rounded-3xl border border-slate-200 border-b-4 shadow-sm p-6 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                    <div className="flex items-center gap-5 mb-6 relative z-10">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-black text-3xl shadow-lg shadow-indigo-500/30">
                            {name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl font-black text-slate-800">{name}</h2>
                                {isEarlyAccess && (
                                    <span className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-[10px] font-black px-2 py-1 rounded-lg flex items-center gap-1 border border-amber-200 uppercase">
                                        <Sparkles className="w-3 h-3" /> Erken Erişim
                                    </span>
                                )}
                            </div>
                            <p className="text-slate-400 font-medium">{email}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl">
                        <div className="text-center">
                            <p className="text-2xl font-black text-indigo-600">{user.totalXp}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Toplam XP</p>
                        </div>
                        <div className="text-center border-x border-slate-200">
                            <p className="text-2xl font-black text-rose-500">🔥 {user.streak}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Gün Serisi</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-black text-slate-600">{user.joinDate}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Üyelik</p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 px-1 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                        Gelişim Takibi
                    </h3>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {[
                            { icon: BookOpen, label: "Toplam Ders", value: stats?.totalLessons || 0, color: "text-indigo-600", bg: "bg-indigo-100" },
                            { icon: Clock, label: "Süre", value: stats?.totalTime || '0 dk', color: "text-amber-600", bg: "bg-amber-100" },
                            { icon: CheckCircle, label: "Doğru", value: stats?.totalCorrect || 0, color: "text-emerald-600", bg: "bg-emerald-100" },
                            { icon: XCircle, label: "Yanlış", value: stats?.totalWrong || 0, color: "text-rose-500", bg: "bg-rose-100" },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white border border-slate-200 border-b-4 rounded-2xl p-4 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center", stat.bg)}>
                                        <stat.icon className={cn("w-4 h-4", stat.color)} />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">{stat.label}</span>
                                </div>
                                <p className={cn("text-2xl font-black", stat.color)}>{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Accuracy Card */}
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-6 shadow-lg shadow-emerald-500/20 mb-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-1 text-emerald-100">
                                    <Target className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Başarı Oranı</span>
                                </div>
                                <p className="text-5xl font-black text-white">%{stats?.accuracy || 0}</p>
                            </div>
                            <div className="w-20 h-20 relative">
                                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="white" strokeWidth="3" strokeDasharray={`${stats?.accuracy || 0}, 100`} strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Weekly Chart */}
                    <div className="bg-white border border-slate-200 border-b-4 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <BarChart3 className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-bold text-slate-500">Son 7 Gün</span>
                        </div>
                        <div className="flex items-end justify-between gap-2 h-24">
                            {[...Array(7)].map((_, i) => {
                                const dayStats = weeklyStats[6 - i];
                                const maxLessons = Math.max(...weeklyStats.map(d => d?.lessonsCompleted || 0), 5);
                                const height = dayStats ? (dayStats.lessonsCompleted / maxLessons) * 100 : 0;
                                const dayNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
                                const today = new Date().getDay();
                                const dayIndex = (today - 6 + i + 7) % 7;
                                return (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                        <div className="w-full bg-slate-100 rounded-t-lg relative" style={{ height: '80px' }}>
                                            <div
                                                className={cn("absolute bottom-0 w-full rounded-t-lg transition-all", i === 6 ? 'bg-gradient-to-t from-indigo-600 to-violet-500' : 'bg-slate-300')}
                                                style={{ height: `${Math.max(height, 5)}%` }}
                                            />
                                        </div>
                                        <span className={cn("text-xs font-bold", i === 6 ? 'text-indigo-600' : 'text-slate-400')}>
                                            {dayNames[dayIndex]}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Profile Edit */}
                <section>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 px-1 flex items-center gap-2">
                        <User className="w-5 h-5 text-slate-400" />
                        Profil Bilgileri
                    </h3>
                    <div className="bg-white border border-slate-200 border-b-4 rounded-3xl p-6 space-y-5">
                        <div className="space-y-2">
                            <Label className="text-slate-600 font-bold text-sm">İsim</Label>
                            <Input value={name} onChange={(e) => setName(e.target.value)} className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-slate-600 font-bold text-sm">Email</Label>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-slate-600 font-bold text-sm">Mevcut Şifre</Label>
                            <Input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Şifre değiştirmek için girin" className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-slate-600 font-bold text-sm">Yeni Şifre</Label>
                            <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Yeni şifre (boş bırakılırsa değişmez)" className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl" />
                        </div>
                        <Button
                            onClick={handleSave}
                            disabled={saveStatus === "saving"}
                            className={cn(
                                "w-full font-bold rounded-2xl h-14 text-base shadow-lg transition-all",
                                saveStatus === "saved" ? "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30" : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/30"
                            )}
                        >
                            {saveStatus === "saving" ? (
                                <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Kaydediliyor...</span>
                            ) : saveStatus === "saved" ? (
                                <span className="flex items-center gap-2"><Check className="w-5 h-5" /> Kaydedildi!</span>
                            ) : (
                                "Değişiklikleri Kaydet"
                            )}
                        </Button>
                    </div>
                </section>

                {/* Other Settings */}
                <section>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 px-1">Diğer Ayarlar</h3>
                    <div className="bg-white border border-slate-200 border-b-4 rounded-3xl overflow-hidden">
                        {settingsItems.map((item, index) => (
                            <div key={item.label}>
                                <Link href={item.href}>
                                    <div className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                                            <item.icon className="w-5 h-5 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-slate-700">{item.label}</p>
                                            <p className="text-sm text-slate-400">{item.description}</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                                {index < settingsItems.length - 1 && <Separator />}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Logout */}
                <Link href="/">
                    <Button variant="outline" className="w-full border-2 border-rose-200 text-rose-500 hover:bg-rose-50 font-bold rounded-2xl h-14 text-base">
                        <LogOut className="w-5 h-5 mr-2" /> Çıkış Yap
                    </Button>
                </Link>

            </main>
        </div>
    );
}
