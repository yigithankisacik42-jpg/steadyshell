"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, BookOpen, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStoryMetaForUnit } from "@/lib/stories";
import { findUnitById } from "@/lib/curriculum";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export default function StoryPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 font-medium">Yükleniyor...</p>
                </div>
            </div>
        }>
            <StoryContent />
        </Suspense>
    );
}

function StoryContent() {
    const searchParams = useSearchParams();
    const unitId = parseInt(searchParams.get("unitId") || "0");

    const { progress, currentLanguage } = useLanguage();
    const storyMeta = getStoryMetaForUnit(unitId);
    const unitInfo = findUnitById(unitId);
    const langCode = unitInfo?.langCode || currentLanguage.code;
    const unit = unitInfo?.unit;

    const currentProgress = progress[langCode];
    const completedCount = unit
        ? unit.lessons.filter(l => currentProgress?.completedLessons.includes(l.id)).length
        : 0;

    const isUnlocked = !!storyMeta && completedCount > 0;

    if (!storyMeta) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
                <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200">
                    <div className="max-w-3xl mx-auto px-4 h-[72px] flex items-center gap-3">
                        <Link href="/learn">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-600">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-lg font-black text-slate-700">Hikâye Bölümü</h1>
                    </div>
                </header>

                <main className="flex-1 max-w-3xl mx-auto p-6 w-full flex items-center justify-center">
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-sm w-full">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-7 h-7 text-slate-400" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">Bu ünite için hikâye yok</h2>
                        <p className="text-slate-500 mb-6">İleride bu üniteye özel bir hikâye bölümü ekleyebiliriz.</p>
                        <Link href="/learn">
                            <Button className="bg-indigo-600 hover:bg-indigo-700">Derslere Dön</Button>
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    const { segment, index, total } = storyMeta;

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-slate-50 flex flex-col">
            <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-indigo-100">
                <div className="max-w-3xl mx-auto px-4 h-[72px] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/learn">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-600">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-lg font-black text-slate-700">Hikâye Bölümü</h1>
                            <p className="text-xs text-slate-400">{segment.arcTitle} • Bölüm {index}/{total}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-500 bg-indigo-50 px-3 py-1.5 rounded-lg">
                        <Sparkles className="w-4 h-4" />
                        {unit?.title || `Ünite ${unitId}`}
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-3xl mx-auto p-6 w-full">
                {!isUnlocked ? (
                    <div className="bg-white rounded-3xl border border-indigo-100 p-8 text-center shadow-sm">
                        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-7 h-7 text-amber-600" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">Hikâye bölümü kilitli</h2>
                        <p className="text-slate-500 mb-6">
                            Bu bölümü açmak için bu üniteden en az 1 ders tamamla.
                        </p>
                        <Link href="/learn">
                            <Button className="bg-indigo-600 hover:bg-indigo-700">Derslere Dön</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sahne</p>
                            <h2 className="text-2xl font-black text-slate-800 mb-2">{segment.title}</h2>
                            <p className="text-slate-500">{segment.scene}</p>
                        </div>

                        <div className="space-y-4">
                            {segment.lines.map((line, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "p-5 rounded-2xl border shadow-sm",
                                        i % 2 === 0
                                            ? "bg-white border-slate-200"
                                            : "bg-indigo-50/70 border-indigo-100"
                                    )}
                                >
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                        {line.speaker}
                                    </p>
                                    <p className="text-lg font-bold text-indigo-700 mb-1">{line.fr}</p>
                                    <p className="text-slate-500">{line.tr}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
