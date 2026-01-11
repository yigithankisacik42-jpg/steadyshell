"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { getReadingForUnit, UnitReading } from "@/lib/readings";

export default function ReadingPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 font-medium">Yükleniyor...</p>
                </div>
            </div>
        }>
            <ReadingContent />
        </Suspense>
    );
}

function ReadingContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const unitId = parseInt(searchParams.get("unitId") || "1");

    const [readingContent, setReadingContent] = useState<UnitReading | null>(null);
    const [step, setStep] = useState<"reading" | "questions" | "finished">("reading");
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [answerStatus, setAnswerStatus] = useState<"none" | "correct" | "wrong">("none");
    const [showTranslation, setShowTranslation] = useState(false);


    // Ünite değiştiğinde içeriği yükle
    useEffect(() => {
        const reading = getReadingForUnit(unitId);
        setReadingContent(reading);
        setStep("reading");
        setQuestionIndex(0);
        setSelectedAnswer(null);
        setAnswerStatus("none");
        setShowTranslation(false);
    }, [unitId]);

    if (!readingContent) {
        return (
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const currentQuestion = readingContent.questions[questionIndex];
    const progress = step === "reading"
        ? 33
        : step === "questions"
            ? 33 + ((questionIndex + 1) / readingContent.questions.length) * 34
            : 100;

    const handleCheck = () => {
        if (!selectedAnswer) return;
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        setAnswerStatus(isCorrect ? "correct" : "wrong");
    };

    const handleNext = () => {
        if (answerStatus === "none") return;

        if (questionIndex < readingContent.questions.length - 1) {
            setQuestionIndex(i => i + 1);
            setSelectedAnswer(null);
            setAnswerStatus("none");
        } else {
            setStep("finished");
        }
    };

    return (
        <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex flex-col h-full w-full">



            {/* Üst Bar */}
            <div className="w-full px-6 py-4 flex items-center justify-between gap-6 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
                <ArrowLeft onClick={() => {
                    if (step === "questions") {
                        if (questionIndex > 0) {
                            setQuestionIndex(i => i - 1);
                            setSelectedAnswer(null);
                            setAnswerStatus("none");
                        } else {
                            setStep("reading");
                        }
                    } else {
                        router.back();
                    }
                }} className="cursor-pointer text-slate-400 hover:text-slate-600 w-6 h-6 transition-colors" />
                <div className="flex-1 text-center">
                    <Progress value={progress} className="h-3 w-full max-w-md mx-auto" />
                    <p className="text-xs text-slate-400 mt-1">{readingContent.title}</p>
                </div>
                <BookOpen className="text-indigo-500 w-6 h-6" />
            </div>

            {/* İçerik */}
            {step === "reading" && (
                <div className="flex-1 flex flex-col p-6 max-w-2xl mx-auto w-full overflow-y-auto">
                    <div className="mb-4 flex items-center gap-2">
                        <span className="text-2xl">🇪🇸</span>
                        <span className="font-bold text-slate-600">{readingContent.level}</span>
                    </div>

                    <h1 className="text-2xl font-extrabold text-slate-800 mb-6">{readingContent.title}</h1>

                    {/* Hikaye */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-4">
                        <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                            {readingContent.story.text}
                        </p>
                    </div>

                    {/* Çeviri Toggle */}
                    <button
                        onClick={() => setShowTranslation(!showTranslation)}
                        className="text-indigo-600 font-bold text-sm mb-4 hover:underline"
                    >
                        {showTranslation ? "Çeviriyi Gizle" : "Türkçe Çeviriyi Göster"}
                    </button>

                    {showTranslation && (
                        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 mb-4">
                            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                {readingContent.story.translation}
                            </p>
                        </div>
                    )}

                    {/* Kelimeler */}
                    {readingContent.vocabulary.length > 0 && (
                        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 mb-6">
                            <h3 className="font-bold text-amber-700 mb-2">📚 Önemli Kelimeler</h3>
                            <div className="flex flex-wrap gap-2">
                                {readingContent.vocabulary.map((v, i) => (
                                    <span key={i} className="bg-white px-3 py-1 rounded-lg text-sm font-medium text-slate-600">
                                        <span className="text-indigo-600 font-bold">{v.word}</span> = {v.meaning}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {step === "questions" && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
                    <h1 className="text-2xl font-bold text-slate-800 mb-8 text-center">{currentQuestion.question}</h1>

                    <div className="w-full space-y-3 mb-8">
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = selectedAnswer === option;
                            const showResult = answerStatus !== "none";
                            const isCorrect = option === currentQuestion.correctAnswer;

                            let optionStyle = "bg-white border-2 border-slate-200 hover:border-indigo-300";
                            if (isSelected && !showResult) {
                                optionStyle = "bg-indigo-50 border-2 border-indigo-500";
                            }
                            if (showResult && isCorrect) {
                                optionStyle = "bg-emerald-50 border-2 border-emerald-500";
                            }
                            if (showResult && isSelected && !isCorrect) {
                                optionStyle = "bg-rose-50 border-2 border-rose-500";
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => !showResult && setSelectedAnswer(option)}
                                    disabled={showResult}
                                    className={`w-full p-4 rounded-xl font-bold text-left transition-all ${optionStyle}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={showResult && isCorrect ? "text-emerald-600" : showResult && isSelected && !isCorrect ? "text-rose-600" : "text-slate-700"}>
                                            {option}
                                        </span>
                                        {showResult && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                                        {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-rose-500" />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {step === "finished" && (
                <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <div className="text-6xl mb-4">🎉</div>
                    <h1 className="text-3xl font-extrabold text-indigo-600 mb-2">Okuma Tamamlandı!</h1>
                    <p className="text-slate-500 mb-2">{readingContent.title}</p>
                    <p className="text-slate-400 mb-8">+10 XP kazandın!</p>
                    <Button
                        onClick={() => router.push("/learn")}
                        className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold px-10 py-6 rounded-2xl text-lg shadow-xl"
                    >
                        DEVAM ET <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}

            {/* Alt Buton */}
            {step !== "finished" && (
                <div className="p-6 border-t border-slate-200/50 bg-white/80 backdrop-blur-md">
                    <div className="max-w-2xl mx-auto">
                        {step === "reading" ? (
                            <Button
                                onClick={() => setStep("questions")}
                                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold py-6 rounded-2xl text-lg border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1"
                            >
                                SORULARA GEÇ
                            </Button>
                        ) : answerStatus === "none" ? (
                            <Button
                                onClick={handleCheck}
                                disabled={!selectedAnswer}
                                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold py-6 rounded-2xl text-lg disabled:opacity-50 border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1"
                            >
                                KONTROL ET
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                className={`w-full font-bold py-6 rounded-2xl text-lg border-b-4 active:border-b-0 active:translate-y-1 ${answerStatus === "correct"
                                    ? "bg-emerald-500 hover:bg-emerald-600 border-emerald-700"
                                    : "bg-rose-500 hover:bg-rose-600 border-rose-700"
                                    } text-white`}
                            >
                                DEVAM ET
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
