"use client";

import { useState, useEffect } from "react";
import { Lock, ArrowLeft, Check, Eye, EyeOff, Shield, UserX, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface PrivacySettings {
    profileVisible: boolean;
    showOnLeaderboard: boolean;
    shareProgress: boolean;
    allowAnalytics: boolean;
}

const defaultSettings: PrivacySettings = {
    profileVisible: true,
    showOnLeaderboard: true,
    shareProgress: false,
    allowAnalytics: true,
};

export default function PrivacyPage() {
    const [settings, setSettings] = useState<PrivacySettings>(defaultSettings);
    const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    // Load settings from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("steadyshell_privacy");
        if (saved) {
            setSettings(JSON.parse(saved));
        }
    }, []);

    // Handle toggle
    const handleToggle = (key: keyof PrivacySettings) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Save settings
    const handleSave = () => {
        setSaveStatus("saving");
        setTimeout(() => {
            localStorage.setItem("steadyshell_privacy", JSON.stringify(settings));
            setSaveStatus("saved");
            setTimeout(() => setSaveStatus("idle"), 2000);
        }, 500);
    };

    // Download data
    const handleDownloadData = () => {
        const userData = {
            user: JSON.parse(localStorage.getItem("steadyshell_user") || "{}"),
            notifications: JSON.parse(localStorage.getItem("steadyshell_notifications") || "{}"),
            privacy: settings,
            progress: JSON.parse(localStorage.getItem("steadyshell_progress") || "{}"),
            exportDate: new Date().toISOString(),
        };

        const blob = new Blob([JSON.stringify(userData, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "linguaflow-verilerim.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    // Delete account
    const handleDeleteAccount = () => {
        localStorage.clear();
        window.location.href = "/";
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
                    <Lock className="w-8 h-8 text-indigo-600" />
                    <h1 className="text-3xl font-extrabold text-slate-800">Gizlilik</h1>
                </div>
                <p className="text-slate-500 font-medium">Hesap güvenliği ve gizlilik ayarlarını yönet</p>
            </div>

            {/* Profil Görünürlüğü */}
            <div className="w-full max-w-[600px] mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-500" />
                    Profil Görünürlüğü
                </h3>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <Label className="text-slate-700 font-bold">Herkese Açık Profil</Label>
                            <p className="text-sm text-slate-400">Diğer kullanıcılar profilini görebilsin</p>
                        </div>
                        <Switch
                            checked={settings.profileVisible}
                            onCheckedChange={() => handleToggle("profileVisible")}
                        />
                    </div>

                    <div className="border-t border-slate-100" />

                    <div className="flex items-center justify-between py-2">
                        <div>
                            <Label className="text-slate-700 font-bold">Liderlik Tablosunda Göster</Label>
                            <p className="text-sm text-slate-400">Sıralamada görünür ol</p>
                        </div>
                        <Switch
                            checked={settings.showOnLeaderboard}
                            onCheckedChange={() => handleToggle("showOnLeaderboard")}
                        />
                    </div>

                    <div className="border-t border-slate-100" />

                    <div className="flex items-center justify-between py-2">
                        <div>
                            <Label className="text-slate-700 font-bold">İlerleme Paylaşımı</Label>
                            <p className="text-sm text-slate-400">Arkadaşların ilerlemeni görsün</p>
                        </div>
                        <Switch
                            checked={settings.shareProgress}
                            onCheckedChange={() => handleToggle("shareProgress")}
                        />
                    </div>
                </div>
            </div>

            {/* Veri ve Analitik */}
            <div className="w-full max-w-[600px] mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    Veri ve Analitik
                </h3>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <Label className="text-slate-700 font-bold">Kullanım Analitiği</Label>
                            <p className="text-sm text-slate-400">Uygulamayı geliştirmemize yardım et</p>
                        </div>
                        <Switch
                            checked={settings.allowAnalytics}
                            onCheckedChange={() => handleToggle("allowAnalytics")}
                        />
                    </div>
                </div>
            </div>

            {/* Kaydet Butonu */}
            <div className="w-full max-w-[600px] mb-6">
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

            {/* Veri Yönetimi */}
            <div className="w-full max-w-[600px] mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <UserX className="w-5 h-5 text-rose-500" />
                    Veri Yönetimi
                </h3>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    <Button
                        variant="outline"
                        onClick={handleDownloadData}
                        className="w-full border-2 border-slate-200 text-slate-600 hover:bg-slate-50 font-bold rounded-xl py-5"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Verilerimi İndir
                    </Button>

                    {!showDeleteConfirm ? (
                        <Button
                            variant="outline"
                            onClick={() => setShowDeleteConfirm(true)}
                            className="w-full border-2 border-rose-200 text-rose-500 hover:bg-rose-50 font-bold rounded-xl py-5"
                        >
                            <Trash2 className="w-5 h-5 mr-2" />
                            Hesabımı Sil
                        </Button>
                    ) : (
                        <div className="space-y-3 p-4 bg-rose-50 rounded-xl border border-rose-200">
                            <p className="text-rose-700 font-medium text-center">
                                ⚠️ Bu işlem geri alınamaz! Tüm verileriniz silinecek.
                            </p>
                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => setShowDeleteConfirm(false)}
                                    className="flex-1 border-2 border-slate-200 text-slate-600 font-bold rounded-xl"
                                >
                                    Vazgeç
                                </Button>
                                <Button
                                    onClick={handleDeleteAccount}
                                    className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl"
                                >
                                    Evet, Sil
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
