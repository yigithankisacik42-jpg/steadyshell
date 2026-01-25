"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, ArrowRight, MessageCircle, RotateCcw, CheckCircle2, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { getPhrasesForUnit, UnitPhrases } from "@/lib/phrases";

export default function PhrasesPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 font-medium">Yükleniyor...</p>
                </div>
            </div>
        }>
            <PhrasesContent />
        </Suspense>
    );
}

function PhrasesContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const unitId = parseInt(searchParams.get("unitId") || "1");

    const [content, setContent] = useState<UnitPhrases | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showMeaning, setShowMeaning] = useState(false);
    const [learnedWords, setLearnedWords] = useState<number[]>([]);

    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const data = getPhrasesForUnit(unitId);
        setContent(data);
        setCurrentIndex(0);
        setShowMeaning(false);
        setLearnedWords([]);
        setIsFinished(false);
    }, [unitId]);

    if (!content) return <div className="flex items-center justify-center h-screen">Yükleniyor...</div>;

    const phrase = content.phrases[currentIndex];
    const progress = ((currentIndex + 1) / content.phrases.length) * 100;
    const isLastPhrase = currentIndex === content.phrases.length - 1;

    const playAudio = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);

        // Dil belirleme
        let targetLang = "es-ES";
        if (content.unitId >= 301 && content.unitId <= 360) {
            targetLang = "fr-FR"; // Fransızca A1 ve A2
        } else if (content.unitId >= 101 && content.unitId <= 220) {
            targetLang = "en-US";
        }

        utterance.lang = targetLang;

        // Kadın sesi tercih et
        const voices = speechSynthesis.getVoices();
        const femaleVoice = voices.find(v =>
            v.lang.startsWith(targetLang.split('-')[0]) &&
            (v.name.toLowerCase().includes('female') ||
                v.name.toLowerCase().includes('woman') ||
                v.name.toLowerCase().includes('amelie') ||
                v.name.toLowerCase().includes('marie') ||
                v.name.toLowerCase().includes('céline') ||
                v.name.toLowerCase().includes('celine') ||
                v.name.toLowerCase().includes('léa') ||
                v.name.toLowerCase().includes('lea') ||
                v.name.toLowerCase().includes('julie') ||
                v.name.toLowerCase().includes('virginie') ||
                v.name.toLowerCase().includes('paulina') ||
                v.name.toLowerCase().includes('monica') ||
                v.name.toLowerCase().includes('helena') ||
                v.name.toLowerCase().includes('samantha') ||
                v.name.toLowerCase().includes('karen') ||
                v.name.toLowerCase().includes('victoria') ||
                v.name.toLowerCase().includes('zira') ||
                v.name.includes('Google') && v.name.toLowerCase().includes('female'))
        ) || voices.find(v => v.lang.startsWith(targetLang.split('-')[0]));

        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }

        utterance.rate = 0.9; // Biraz yavaş konuşsun
        utterance.pitch = 1.1; // Kadın sesi için biraz daha yüksek pitch

        speechSynthesis.speak(utterance);
    };

    const handleNext = () => {
        if (isLastPhrase) {
            setIsFinished(true);
        } else {
            setCurrentIndex(i => i + 1);
            setShowMeaning(false);
        }
    };

    const markAsLearned = () => {
        if (!learnedWords.includes(currentIndex)) {
            setLearnedWords([...learnedWords, currentIndex]);
        }
        handleNext();
    };

    const handleFlip = () => {
        setShowMeaning(!showMeaning);
        if (!showMeaning) playAudio(phrase.target);
    };

    return (
        <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-indigo-50 via-white to-slate-50 flex flex-col h-full w-full text-foreground">



            {/* Bitiş Ekranı */}
            {isFinished ? (
                <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-200/50 mb-6">
                        <Trophy className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-indigo-600 mb-2">Kalıplar Tamamlandı!</h1>
                    <p className="text-slate-500 mb-2">{content.title}</p>
                    <p className="text-indigo-600 font-bold mb-4">{learnedWords.length}/{content.phrases.length} kalıp öğrenildi</p>
                    <p className="text-slate-400 mb-8">+15 XP kazandın!</p>
                    <Button
                        onClick={() => router.push("/learn")}
                        className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold px-10 py-6 rounded-2xl text-lg shadow-xl hover:shadow-indigo-200"
                    >
                        DEVAM ET <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            ) : (
                <>
                    {/* Header */}
                    <div className="p-4 flex items-center gap-4 bg-white/90 backdrop-blur border-b border-indigo-100 sticky top-0 z-10">
                        <Button variant="ghost" size="icon" onClick={() => {
                            if (currentIndex > 0) {
                                setCurrentIndex(i => i - 1);
                                setShowMeaning(false);
                            } else {
                                router.back();
                            }
                        }} className="text-slate-400 hover:text-slate-600">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                        <Progress value={progress} className="h-3 flex-1 rounded-full bg-slate-100" />
                        <span className="text-sm font-bold text-slate-500">{currentIndex + 1}/{content.phrases.length}</span>
                    </div>

                    {/* Ana İçerik */}
                    <div className="flex-1 flex flex-col p-6 w-full max-w-4xl mx-auto">
                        <div className="mb-8">
                            {content.level && (
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl">
                                        {content.unitId >= 301 && content.unitId <= 330 ? "🇫🇷" :
                                            content.unitId >= 101 && content.unitId <= 220 ? "🇬🇧" :
                                                "🇪🇸"}
                                    </span>
                                    <span className="font-bold text-slate-600">{content.level}</span>
                                </div>
                            )}
                            <h2 className="text-3xl font-extrabold text-slate-800 text-left">{content.title}</h2>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center w-full">
                            {/* Flashcard */}
                            <div
                                onClick={handleFlip}
                                className={cn(
                                    "w-full max-w-md min-h-[300px] rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 shadow-2xl shadow-indigo-100/50",
                                    showMeaning
                                        ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white"
                                        : "bg-white border-4 border-indigo-200 hover:border-indigo-400"
                                )}
                            >
                                {!showMeaning ? (
                                    <>
                                        <p className="text-3xl font-extrabold text-indigo-600 mb-4 text-center leading-tight">{phrase.target}</p>
                                        <p className="text-slate-400 text-lg">/{phrase.pronunciation}/</p>
                                        <p className="text-slate-400 mt-8 text-sm flex items-center gap-2">
                                            <Volume2 className="w-4 h-4" /> Dinlemek için tıkla
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-2xl font-bold mb-4 text-center text-white">{phrase.native}</p>
                                        <div className="w-full h-px bg-white/20 my-4" />
                                        <p className="text-xl opacity-90 text-center italic text-white">"{phrase.target}"</p>
                                    </>
                                )}
                            </div>

                            {/* Alt Butonlar */}
                            {showMeaning && (
                                <div className="flex gap-4 mt-8 w-full max-w-md">
                                    <Button
                                        onClick={handleNext}
                                        variant="outline"
                                        className="flex-1 py-6 rounded-2xl font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50"
                                    >
                                        <RotateCcw className="w-5 h-5 mr-2" /> Tekrar Et
                                    </Button>
                                    <Button
                                        onClick={markAsLearned}
                                        className="flex-1 py-6 rounded-2xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg hover:shadow-indigo-200"
                                    >
                                        <CheckCircle2 className="w-5 h-5 mr-2" /> Öğrendim
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
