"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy } from "lucide-react";
import { getSpeakingForUnit, UnitSpeaking } from "@/lib/speakings";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useQuests } from "@/lib/quests-context";
import { useShelldon } from "@/contexts/shelldon-context";
import { useLessonProgress } from "@/hooks/use-lesson-progress";
import { AiTutorChat } from "@/components/ai-tutor-chat";

export default function SpeakingPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 font-medium">Yükleniyor...</p>
                </div>
            </div>
        }>
            <SpeakingContent />
        </Suspense>
    );
}

function SpeakingContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const unitId = parseInt(searchParams.get("unitId") || "1");

    const [speakingContent, setSpeakingContent] = useState<UnitSpeaking | null>(null);
    const [isFinished, setIsFinished] = useState(false);
    const [isAiMode, setIsAiMode] = useState(true);

    const { addXp, completeLesson } = useUserProgress();
    const { addXP: addQuestXP, addLesson: addQuestLesson } = useQuests();
    const { showShelldon } = useShelldon();
    const { markLessonCompleted } = useLessonProgress(unitId);

    // Ders bittiğinde XP ve Seri güncelle
    useEffect(() => {
        if (isFinished) {
            addXp(15);
            addQuestXP(15);
            addQuestLesson();
            completeLesson();
            markLessonCompleted("SPEAKING");
            showShelldon("Telaffuzun harikaydı, aksanın şahane! 🎙️", "celebrate", 4000);
            setIsAiMode(false);
        }
    }, [isFinished]);

    // Ünite değiştiğinde içeriği yükle
    useEffect(() => {
        const speaking = getSpeakingForUnit(unitId);
        setSpeakingContent(speaking);
        setIsFinished(false);
        setIsAiMode(true);
    }, [unitId]);

    if (!speakingContent) {
        return (
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-violet-50 to-white flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // AI context summary builder
    const buildSpeakingSummary = () => {
        const parts = [];
        parts.push(`Konuşma Pratiği: ${speakingContent.title}`);
        
        const exerciseList = speakingContent.exercises.map(e => {
            return `Soru: ${e.prompt} - Hedef Cümle: ${e.text} (${e.translation})`;
        }).join('\n');
        
        parts.push(`Egzersizler:\n${exerciseList}`);
        return parts.join('\n');
    };

    const getLanguageDisplayName = (langCode: string): string => {
        const lower = (langCode || "").toLowerCase();
        if (lower === "en" || lower === "english" || lower === "ingilizce") return "İngilizce";
        if (lower === "es" || lower === "spanish" || lower === "ispanyolca") return "İspanyolca";
        if (lower === "fr" || lower === "french" || lower === "fransızca") return "Fransızca";
        if (lower === "de" || lower === "german" || lower === "almanca") return "Almanca";
        return langCode;
    };

    return (
        <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-violet-50 to-white flex flex-col h-full w-full">
            {isAiMode && (
                <AiTutorChat 
                    isOpen={isAiMode} 
                    onClose={() => router.push("/learn")} 
                    unitTitle={speakingContent.title}
                    level={speakingContent.level || "A1"}
                    language={getLanguageDisplayName(speakingContent.language || "İspanyolca")}
                    contextSummary={buildSpeakingSummary()}
                    initialMessage={`Merhaba! Bugün "${speakingContent.title}" konusunu çalışacağız. Bana bu konuda pratik yapmamda yardımcı ol ve bir soru sorarak diyaloğu başlat.`}
                    moduleName="Konuşma"
                    onComplete={() => setIsFinished(true)}
                />
            )}

            {/* Bitiş Ekranı */}
            {isFinished && (
                <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-violet-200 mb-6">
                        <Trophy className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-violet-600 mb-2">Konuşma Bitti!</h1>
                    <p className="text-slate-500 mb-2">{speakingContent.title}</p>
                    <p className="text-slate-400 mb-8">+15 XP kazandın!</p>
                    <Button
                        onClick={() => router.push("/learn")}
                        className="bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-10 py-6 rounded-2xl text-lg shadow-xl"
                    >
                        DEVAM ET <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    );
}
