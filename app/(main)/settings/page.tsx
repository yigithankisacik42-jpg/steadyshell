"use client";

import { useState, useEffect } from "react";
import { Settings, User, Bell, Lock, LogOut, ChevronRight, Sparkles, Check, TrendingUp, Clock, Target, Award, BookOpen, CheckCircle, XCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { APP_CONFIG } from "@/lib/config";
import { getStatsSummary, getWeeklyStats, formatTimeShort, type DailyStats } from "@/lib/user-stats";

const settingsItems = [
    { icon: Bell, label: "Bildirimler", description: "Hatırlatma ve güncellemeler", href: "/settings/notifications" },
    { icon: Lock, label: "Gizlilik", description: "Hesap güvenliği ayarları", href: "/settings/privacy" },
];

// Varsayılan kullanıcı verisi
const defaultUser = {
    name: "Yiğithan",
    email: "yigithan@linguaflow.com",
    avatar: "Y",
    isPremium: false,
    streak: 0,
    totalXp: 0,
    joinDate: "Aralık 2025",
};

export default function SettingsPage() {
    const isPremiumLive = APP_CONFIG.isPremiumLive;
    const isEarlyAccess = APP_CONFIG.isEarlyAccess;

    // State for form fields
    const [name, setName] = useState(defaultUser.name);
    const [email, setEmail] = useState(defaultUser.email);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
    const [user, setUser] = useState(defaultUser);

    // State for statistics
    const [stats, setStats] = useState<ReturnType<typeof getStatsSummary> | null>(null);
    const [weeklyStats, setWeeklyStats] = useState<DailyStats[]>([]);

    // Load user data and stats from localStorage on mount
    useEffect(() => {
        const savedUser = localStorage.getItem("steadyshell_current_user");
        if (savedUser) {
            const parsed = JSON.parse(savedUser);
            setUser({
                ...defaultUser,
                ...parsed,
                avatar: parsed.avatar || (parsed.name ? parsed.name.charAt(0).toUpperCase() : "M"),
            });
            setName(parsed.name || defaultUser.name);
            setEmail(parsed.email || defaultUser.email);
        }

        // Load statistics
        setStats(getStatsSummary());
        setWeeklyStats(getWeeklyStats());
    }, []);

    // Handle save
    const handleSave = () => {
        setSaveStatus("saving");

        // Simulate API call
        setTimeout(() => {
            const updatedUser = {
                ...user,
                name,
                email,
                avatar: name.charAt(0).toUpperCase(),
            };

            // Save to current user session
            localStorage.setItem("steadyshell_current_user", JSON.stringify(updatedUser));
            setUser(updatedUser);

            // Also update in users list if exists
            const users = JSON.parse(localStorage.getItem("steadyshell_users") || "[]");
            const userIndex = users.findIndex((u: { email: string }) => u.email === user.email);
            if (userIndex !== -1) {
                users[userIndex] = { ...users[userIndex], ...updatedUser };
                localStorage.setItem("steadyshell_users", JSON.stringify(users));
            }

            // If password changed, update in users list
            if (newPassword && currentPassword) {
                if (userIndex !== -1) {
                    users[userIndex].password = newPassword;
                    localStorage.setItem("steadyshell_users", JSON.stringify(users));
                }
            }

            setSaveStatus("saved");
            setCurrentPassword("");
            setNewPassword("");

            // Reset status after 2 seconds
            setTimeout(() => setSaveStatus("idle"), 2000);
        }, 500);
    };

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-slate-50 p-4 pb-20">

            {/* Başlık */}
            <div className="w-full max-w-[600px] mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Settings className="w-8 h-8 text-slate-600" />
                    <h1 className="text-3xl font-extrabold text-slate-800">Ayarlar</h1>
                </div>
                <p className="text-slate-500 font-medium">Hesap ve uygulama ayarlarını yönet</p>
            </div>

            {/* Profil Kartı */}
            <div className="w-full max-w-[600px] mb-6">
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        {/* Avatar */}
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                            {name.charAt(0).toUpperCase()}
                        </div>

                        {/* Bilgiler */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl font-bold text-slate-800">{name}</h2>
                                {isEarlyAccess && (
                                    <span className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1 border border-amber-200">
                                        <Sparkles className="w-3 h-3" /> Erken Erişim
                                    </span>
                                )}
                            </div>
                            <p className="text-slate-400">{email}</p>
                        </div>
                    </div>

                    {/* İstatistikler */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl">
                        <div className="text-center">
                            <p className="text-2xl font-extrabold text-indigo-600">{user.totalXp}</p>
                            <p className="text-xs text-slate-400 font-medium">Toplam XP</p>
                        </div>
                        <div className="text-center border-x border-slate-200">
                            <p className="text-2xl font-extrabold text-rose-500">🔥 {user.streak}</p>
                            <p className="text-xs text-slate-400 font-medium">Gün Serisi</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-extrabold text-slate-600">{user.joinDate}</p>
                            <p className="text-xs text-slate-400 font-medium">Üyelik</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Upgrade Banner */}
            {isPremiumLive && !user.isPremium && (
                <div className="w-full max-w-[600px] mb-6">
                    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4 rounded-2xl text-white flex items-center justify-between shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-amber-300 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-amber-700" />
                            </div>
                            <div>
                                <p className="font-bold">SteadyShell Pro'ya Geç</p>
                                <p className="text-sm text-white/80">Sınırsız kalp ve daha fazlası</p>
                            </div>
                        </div>
                        <Link href="/shop">
                            <Button className="bg-white text-indigo-600 hover:bg-white/90 font-bold rounded-xl">
                                Keşfet
                            </Button>
                        </Link>
                    </div>
                </div>
            )}

            {/* 📊 Gelişim Takibi Bölümü */}
            <div className="w-full max-w-[600px] mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    <h3 className="text-lg font-bold text-slate-700">Gelişim Takibi</h3>
                </div>

                {/* Ana İstatistik Kartları */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Toplam Ders */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                                <BookOpen className="w-4 h-4 text-indigo-600" />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">Toplam Ders</span>
                        </div>
                        <p className="text-3xl font-extrabold text-slate-800">{stats?.totalLessons || 0}</p>
                    </div>

                    {/* Harcanan Süre */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                                <Clock className="w-4 h-4 text-amber-600" />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">Süre</span>
                        </div>
                        <p className="text-2xl font-extrabold text-slate-800">{stats?.totalTime || '0 dk'}</p>
                    </div>

                    {/* Doğru Cevaplar */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">Doğru</span>
                        </div>
                        <p className="text-3xl font-extrabold text-emerald-600">{stats?.totalCorrect || 0}</p>
                    </div>

                    {/* Yanlış Cevaplar */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center">
                                <XCircle className="w-4 h-4 text-rose-500" />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">Yanlış</span>
                        </div>
                        <p className="text-3xl font-extrabold text-rose-500">{stats?.totalWrong || 0}</p>
                    </div>
                </div>

                {/* Başarı Oranı Kartı */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-5 mb-4 shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Target className="w-5 h-5 text-white/80" />
                                <span className="text-sm font-bold text-white/80 uppercase">Başarı Oranı</span>
                            </div>
                            <p className="text-4xl font-extrabold text-white">%{stats?.accuracy || 0}</p>
                        </div>
                        <div className="w-20 h-20 relative">
                            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.3)"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeDasharray={`${stats?.accuracy || 0}, 100`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Haftalık Grafik */}
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm mb-4">
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
                                            className={`absolute bottom-0 w-full rounded-t-lg transition-all ${i === 6 ? 'bg-gradient-to-t from-indigo-600 to-violet-500' : 'bg-slate-300'
                                                }`}
                                            style={{ height: `${Math.max(height, 5)}%` }}
                                        />
                                    </div>
                                    <span className={`text-xs font-medium ${i === 6 ? 'text-indigo-600' : 'text-slate-400'}`}>
                                        {dayNames[dayIndex]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bugünkü İstatistikler */}
                <div className="bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-indigo-600">📅 Bugün</span>
                        <span className="text-xs text-indigo-400">{new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                            <p className="text-2xl font-extrabold text-indigo-600">{stats?.todayLessons || 0}</p>
                            <p className="text-xs text-slate-500 font-medium">Ders</p>
                        </div>
                        <div className="text-center border-x border-indigo-200">
                            <p className="text-2xl font-extrabold text-amber-500">{stats?.todayTime || '0dk'}</p>
                            <p className="text-xs text-slate-500 font-medium">Süre</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-extrabold text-emerald-500">🔥 {stats?.currentStreak || 0}</p>
                            <p className="text-xs text-slate-500 font-medium">Seri</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profil Düzenleme */}
            <div className="w-full max-w-[600px] mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-4">Profil Bilgileri</h3>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <div className="space-y-2">
                        <Label className="text-slate-600 font-bold text-sm">İsim</Label>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-slate-600 font-bold text-sm">Email</Label>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-slate-600 font-bold text-sm">Mevcut Şifre</Label>
                        <Input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Şifre değiştirmek için girin"
                            className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-slate-600 font-bold text-sm">Yeni Şifre</Label>
                        <Input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Yeni şifre (boş bırakılırsa değişmez)"
                            className="h-12 bg-slate-50 border-2 focus-visible:ring-indigo-500 font-medium rounded-xl"
                        />
                    </div>
                    <Button
                        onClick={handleSave}
                        disabled={saveStatus === "saving"}
                        className={`w-full font-bold rounded-xl py-5 transition-all ${saveStatus === "saved"
                            ? "bg-emerald-500 hover:bg-emerald-600"
                            : "bg-indigo-600 hover:bg-indigo-700"
                            } text-white`}
                    >
                        {saveStatus === "saving" ? (
                            <span className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Kaydediliyor...
                            </span>
                        ) : saveStatus === "saved" ? (
                            <span className="flex items-center gap-2">
                                <Check className="w-5 h-5" />
                                Kaydedildi!
                            </span>
                        ) : (
                            "Değişiklikleri Kaydet"
                        )}
                    </Button>
                </div>
            </div>

            {/* Diğer Ayarlar */}
            <div className="w-full max-w-[600px] mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-4">Diğer Ayarlar</h3>
                <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                    {settingsItems.map((item, index) => (
                        <div key={item.label}>
                            <Link href={item.href}>
                                <div className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-slate-700">{item.label}</p>
                                        <p className="text-sm text-slate-400">{item.description}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-300" />
                                </div>
                            </Link>
                            {index < settingsItems.length - 1 && <Separator />}
                        </div>
                    ))}
                </div>
            </div>

            {/* Çıkış Yap */}
            <div className="w-full max-w-[600px]">
                <Link href="/">
                    <Button variant="outline" className="w-full border-2 border-rose-200 text-rose-500 hover:bg-rose-50 font-bold rounded-xl py-5">
                        <LogOut className="w-5 h-5 mr-2" /> Çıkış Yap
                    </Button>
                </Link>
            </div>
        </div>
    );
}
