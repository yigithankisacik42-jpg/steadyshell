"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, ArrowRight, BookOpen, RotateCcw, CheckCircle2, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { getVocabularyForUnit, UnitVocabulary, Vocabulary } from "@/lib/vocabulary";

export default function VocabularyPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 font-medium">Yükleniyor...</p>
                </div>
            </div>
        }>
            <VocabularyContent />
        </Suspense>
    );
}

function VocabularyContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const unitId = parseInt(searchParams.get("unitId") || "1");

    const [vocabContent, setVocabContent] = useState<UnitVocabulary | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showMeaning, setShowMeaning] = useState(false);
    const [learnedWords, setLearnedWords] = useState<number[]>([]);

    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const content = getVocabularyForUnit(unitId);
        setVocabContent(content);
        setCurrentIndex(0);
        setShowMeaning(false);
        setLearnedWords([]);
        setIsFinished(false);
    }, [unitId]);

    if (!vocabContent) return <div className="flex items-center justify-center h-screen">Yükleniyor...</div>;

    const word = vocabContent.words[currentIndex];
    const progress = ((currentIndex + 1) / vocabContent.words.length) * 100;
    const isLastWord = currentIndex === vocabContent.words.length - 1;

    const playAudio = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "es-ES";
        speechSynthesis.speak(utterance);
    };

    const handleNext = () => {
        if (isLastWord) {
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
        if (!showMeaning) playAudio(word.word);
    };

    return (
        <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-emerald-50 to-white flex flex-col h-full w-full">



            {/* Bitiş Ekranı */}
            {isFinished ? (
                <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-200 mb-6">
                        <Trophy className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">Kelimeler Tamamlandı!</h1>
                    <p className="text-slate-500 mb-2">{vocabContent.title}</p>
                    <p className="text-emerald-600 font-bold mb-4">{learnedWords.length}/{vocabContent.words.length} kelime öğrenildi</p>
                    <p className="text-slate-400 mb-8">+10 XP kazandın!</p>
                    <Button
                        onClick={() => router.push("/learn")}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-10 py-6 rounded-2xl text-lg shadow-xl"
                    >
                        DEVAM ET <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            ) : (
                <>
                    {/* Header */}
                    <div className="p-4 flex items-center gap-4 bg-white/80 backdrop-blur border-b border-slate-100 sticky top-0 z-10">
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
                        <span className="text-sm font-bold text-slate-500">{currentIndex + 1}/{vocabContent.words.length}</span>
                    </div>

                    {/* Ana İçerik */}
                    <div className="flex-1 flex flex-col items-center justify-center p-6">
                        <div className="text-center mb-8">
                            <BookOpen className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-slate-700">{vocabContent.title}</h2>
                        </div>

                        {/* Flashcard */}
                        <div
                            onClick={handleFlip}
                            className={cn(
                                "w-full max-w-md h-64 rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 shadow-2xl",
                                showMeaning
                                    ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white"
                                    : "bg-white border-4 border-emerald-200 hover:border-emerald-400"
                            )}
                        >
                            {!showMeaning ? (
                                <>
                                    <p className="text-4xl font-extrabold text-emerald-600 mb-4">{word.word}</p>
                                    <p className="text-slate-400 text-lg">/{word.pronunciation}/</p>
                                    <p className="text-slate-400 mt-4 text-sm">Anlamını görmek için tıkla</p>
                                </>
                            ) : (
                                <>
                                    <p className="text-3xl font-extrabold mb-4">{word.meaning}</p>
                                    <div className="text-white/90 text-center">
                                        <p className="italic mb-1">"{word.example}"</p>
                                        <p className="text-sm opacity-80">{word.exampleTranslation}</p>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Ses Çalma */}
                        <Button
                            variant="outline"
                            onClick={() => playAudio(word.word)}
                            className="mt-6 rounded-xl border-2 border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                        >
                            <Volume2 className="w-5 h-5 mr-2" /> Dinle
                        </Button>

                        {/* Alt Butonlar */}
                        {showMeaning && (
                            <div className="flex gap-4 mt-8 w-full max-w-md">
                                <Button
                                    onClick={handleNext}
                                    variant="outline"
                                    className="flex-1 py-6 rounded-2xl font-bold border-2 border-slate-200 text-slate-600"
                                >
                                    <RotateCcw className="w-5 h-5 mr-2" /> Tekrar Et
                                </Button>
                                <Button
                                    onClick={markAsLearned}
                                    className="flex-1 py-6 rounded-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                                >
                                    <CheckCircle2 className="w-5 h-5 mr-2" /> Öğrendim
                                </Button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
