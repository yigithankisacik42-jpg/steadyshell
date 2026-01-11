"use client";

import { useState, useEffect } from "react";
import { Bell, ArrowLeft, Check, Mail, Smartphone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface NotificationSettings {
    dailyReminder: boolean;
    weeklyProgress: boolean;
    achievementAlerts: boolean;
    emailNotifications: boolean;
    pushNotifications: boolean;
    reminderTime: string;
}

const defaultSettings: NotificationSettings = {
    dailyReminder: true,
    weeklyProgress: true,
    achievementAlerts: true,
    emailNotifications: false,
    pushNotifications: true,
    reminderTime: "20:00",
};

export default function NotificationsPage() {
    const [settings, setSettings] = useState<NotificationSettings>(defaultSettings);
    const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");

    // Load settings from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("steadyshell_notifications");
        if (saved) {
            setSettings(JSON.parse(saved));
        }
    }, []);

    // Handle toggle
    const handleToggle = (key: keyof NotificationSettings) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Handle time change
    const handleTimeChange = (time: string) => {
        setSettings(prev => ({
            ...prev,
            reminderTime: time
        }));
    };

    // Save settings
    const handleSave = () => {
        setSaveStatus("saving");
        setTimeout(() => {
            localStorage.setItem("steadyshell_notifications", JSON.stringify(settings));
            setSaveStatus("saved");
            setTimeout(() => setSaveStatus("idle"), 2000);
        }, 500);
    };

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-slate-50 p-4 pb-20">
            {/* Header */}
            <div className="w-full max-w-[600px] mb-8">
                <Link href="/settings" className="flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-4 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Ayarlar</span>
                </Link>
                <div className="flex items-center gap-3 mb-2">
                    <Bell className="w-8 h-8 text-indigo-600" />
                    <h1 className="text-3xl font-extrabold text-slate-800">Bildirimler</h1>
                </div>
                <p className="text-slate-500 font-medium">Hatırlatma ve bildirim tercihlerini yönet</p>
            </div>

            {/* Günlük Hatırlatıcı */}
            <div className="w-full max-w-[600px] mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    Günlük Hatırlatıcı
                </h3>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <Label className="text-slate-700 font-bold">Günlük Çalışma Hatırlatıcısı</Label>
                            <p className="text-sm text-slate-400">Her gün belirlediğin saatte hatırlat</p>
                        </div>
                        <Switch
                            checked={settings.dailyReminder}
                            onCheckedChange={() => handleToggle("dailyReminder")}
                        />
                    </div>

                    {settings.dailyReminder && (
                        <div className="space-y-2 pt-2 border-t border-slate-100">
                            <Label className="text-slate-600 font-bold text-sm">Hatırlatma Saati</Label>
                            <input
                                type="time"
                                value={settings.reminderTime}
                                onChange={(e) => handleTimeChange(e.target.value)}
                                className="w-full h-12 px-4 bg-slate-50 border-2 border-slate-200 rounded-xl font-medium focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Bildirim Türleri */}
            <div className="w-full max-w-[600px] mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-4">Bildirim Türleri</h3>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <Label className="text-slate-700 font-bold">Haftalık İlerleme Özeti</Label>
                            <p className="text-sm text-slate-400">Haftalık başarılarını özetle</p>
                        </div>
                        <Switch
                            checked={settings.weeklyProgress}
                            onCheckedChange={() => handleToggle("weeklyProgress")}
                        />
                    </div>

                    <div className="border-t border-slate-100" />

                    <div className="flex items-center justify-between py-2">
                        <div>
                            <Label className="text-slate-700 font-bold">Başarı Bildirimleri</Label>
                            <p className="text-sm text-slate-400">Yeni rozet kazandığında bildir</p>
                        </div>
                        <Switch
                            checked={settings.achievementAlerts}
                            onCheckedChange={() => handleToggle("achievementAlerts")}
                        />
                    </div>
                </div>
            </div>

            {/* Bildirim Kanalları */}
            <div className="w-full max-w-[600px] mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-4">Bildirim Kanalları</h3>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <Label className="text-slate-700 font-bold">E-posta Bildirimleri</Label>
                                <p className="text-sm text-slate-400">Bildirimleri e-posta ile al</p>
                            </div>
                        </div>
                        <Switch
                            checked={settings.emailNotifications}
                            onCheckedChange={() => handleToggle("emailNotifications")}
                        />
                    </div>

                    <div className="border-t border-slate-100" />

                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                <Smartphone className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <Label className="text-slate-700 font-bold">Push Bildirimleri</Label>
                                <p className="text-sm text-slate-400">Tarayıcı bildirimleri al</p>
                            </div>
                        </div>
                        <Switch
                            checked={settings.pushNotifications}
                            onCheckedChange={() => handleToggle("pushNotifications")}
                        />
                    </div>
                </div>
            </div>

            {/* Kaydet Butonu */}
            <div className="w-full max-w-[600px]">
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
    );
}
