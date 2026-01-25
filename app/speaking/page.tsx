"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic, MicOff, Volume2, ArrowRight, CheckCircle2, RotateCcw, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { getSpeakingForUnit, UnitSpeaking, SpeakingExercise } from "@/lib/speakings";

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [recordedText, setRecordedText] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "recording" | "success" | "retry">("idle");

    const [isFinished, setIsFinished] = useState(false);

    // Ünite değiştiğinde içeriği yükle
    useEffect(() => {
        const speaking = getSpeakingForUnit(unitId);
        setSpeakingContent(speaking);
        setCurrentIndex(0);
        setStatus("idle");
        setRecordedText(null);
        setIsFinished(false);
    }, [unitId]);

    if (!speakingContent) {
        return (
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-violet-50 to-white flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const exercise = speakingContent.exercises[currentIndex];
    const progress = ((currentIndex + 1) / speakingContent.exercises.length) * 100;
    const isLastExercise = currentIndex === speakingContent.exercises.length - 1;

    // Ünite ID'sine göre dil kodunu belirle
    const getLanguageCode = (unitId: number): string => {
        if (unitId >= 301 && unitId <= 420) return "fr-FR"; // Fransızca
        if (unitId >= 101 && unitId <= 230) return "en-US"; // İngilizce
        return "es-ES"; // İspanyolca (varsayılan)
    };

    const languageCode = getLanguageCode(unitId);

    // Web Speech API
    const playAudio = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = languageCode;

        // Kadın sesi tercih et
        const voices = speechSynthesis.getVoices();
        const femaleVoice = voices.find(v =>
            v.lang.startsWith(languageCode.split('-')[0]) &&
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
        ) || voices.find(v => v.lang.startsWith(languageCode.split('-')[0]));

        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }

        utterance.rate = 0.85; // Daha yavaş ve anlaşılır
        utterance.pitch = 1.1; // Kadın sesi için biraz daha yüksek pitch

        speechSynthesis.speak(utterance);
    };

    const startRecording = () => {
        setIsRecording(true);
        setStatus("recording");
        setRecordedText(null);

        // Web Speech Recognition
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = languageCode;
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setRecordedText(transcript);
                setIsRecording(false);

                // Temizlenmiş metinler (noktalama ve özel karakterleri kaldır)
                const cleanText = (text: string) =>
                    text.toLowerCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // aksanları kaldır
                        .replace(/[¿¡?!.,;:'"()]/g, "") // noktalama
                        .trim();

                const userSpeech = cleanText(transcript);
                const expectedSpeech = cleanText(exercise.text);

                // Kelime bazlı benzerlik hesapla
                const userWords = userSpeech.split(/\s+/).filter(w => w.length > 0);
                const expectedWords = expectedSpeech.split(/\s+/).filter(w => w.length > 0);

                // Kaç kelime eşleşiyor?
                const matchedWords = userWords.filter(word =>
                    expectedWords.some(exp => exp.includes(word) || word.includes(exp))
                ).length;

                const matchRatio = matchedWords / Math.max(expectedWords.length, 1);

                if (exercise.type === "repeat") {
                    // %50 üzeri benzerlik = başarılı (esnek karşılaştırma)
                    setStatus(matchRatio >= 0.5 ? "success" : "retry");
                } else if (exercise.type === "respond" && exercise.expectedKeywords) {
                    // Cevap tipinde anahtar kelime kontrolü
                    const hasKeyword = exercise.expectedKeywords.some(kw =>
                        userSpeech.includes(cleanText(kw))
                    );
                    setStatus(hasKeyword ? "success" : "retry");
                } else {
                    setStatus("success");
                }
            };

            recognition.onerror = () => {
                setIsRecording(false);
                setStatus("retry");
            };

            recognition.onend = () => {
                setIsRecording(false);
            };

            recognition.start();
        } else {
            // Fallback - tarayıcı desteklemiyorsa
            setTimeout(() => {
                setIsRecording(false);
                setRecordedText("(Ses tanıma desteklenmiyor - simülasyon)");
                setStatus("success");
            }, 2000);
        }
    };

    const handleNext = () => {
        if (isLastExercise) {
            setIsFinished(true);
        } else {
            setCurrentIndex(i => i + 1);
            setStatus("idle");
            setRecordedText(null);
        }
    };

    const handleRetry = () => {
        setStatus("idle");
        setRecordedText(null);
    };

    return (
        <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-violet-50 to-white flex flex-col h-full w-full">



            {/* Bitiş Ekranı */}
            {isFinished ? (
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
            ) : (
                <>
                    {/* Üst Bar */}
                    <div className="w-full px-6 py-4 flex items-center justify-between gap-4 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
                        <ArrowLeft onClick={() => {
                            if (currentIndex > 0) {
                                setCurrentIndex(i => i - 1);
                                setStatus("idle");
                                setRecordedText(null);
                            } else {
                                router.back();
                            }
                        }} className="cursor-pointer text-slate-400 hover:text-slate-600 w-6 h-6 transition-colors" />
                        <div className="flex-1 text-center">
                            <Progress value={progress} className="h-3 w-full max-w-md mx-auto" />
                            <p className="text-xs text-slate-400 mt-1">{speakingContent.title}</p>
                        </div>
                        <Mic className="text-violet-500 w-6 h-6" />
                    </div>

                    {/* İçerik */}
                    <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">

                        {/* Badge */}
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-violet-100 text-violet-600 mb-4">
                            {exercise.type === "repeat" ? "Tekrar Et" : "Cevap Ver"}
                        </span>

                        {/* Prompt */}
                        <p className="text-slate-500 font-medium mb-2">{exercise.prompt}</p>

                        {/* Hedef Cümle */}
                        <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 mb-4 w-full text-center shadow-sm">
                            <p className="text-2xl font-bold text-slate-800 mb-2">{exercise.text}</p>
                            <p className="text-slate-400">{exercise.translation}</p>
                        </div>

                        {/* Ses Oynat Butonu */}
                        <Button
                            onClick={() => playAudio(exercise.text)}
                            variant="outline"
                            className="mb-8 rounded-xl font-bold"
                        >
                            <Volume2 className="w-5 h-5 mr-2" /> Dinle
                        </Button>

                        {/* Mikrofon Alanı */}
                        <div className="flex flex-col items-center gap-4">
                            <button
                                onClick={startRecording}
                                disabled={isRecording || status === "success"}
                                className={cn(
                                    "w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-xl",
                                    isRecording && "bg-rose-500 animate-pulse scale-110",
                                    status === "idle" && "bg-violet-500 hover:bg-violet-600 hover:scale-105",
                                    status === "success" && "bg-emerald-500",
                                    status === "retry" && "bg-amber-500"
                                )}
                            >
                                {isRecording ? (
                                    <MicOff className="w-10 h-10 text-white" />
                                ) : status === "success" ? (
                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                ) : (
                                    <Mic className="w-10 h-10 text-white" />
                                )}
                            </button>

                            <p className="text-slate-500 font-medium text-center">
                                {isRecording && "Dinliyorum..."}
                                {status === "idle" && "Konuşmak için mikrofona dokun"}
                                {status === "success" && "Harika! 🎉"}
                                {status === "retry" && "Tekrar deneyelim!"}
                            </p>

                            {/* Kaydedilen Metin */}
                            {recordedText && (
                                <div className={cn(
                                    "mt-4 p-4 rounded-xl w-full text-center",
                                    status === "success" ? "bg-emerald-50 border-2 border-emerald-200" : "bg-amber-50 border-2 border-amber-200"
                                )}>
                                    <p className="text-sm text-slate-500 mb-1">Senin söylediğin:</p>
                                    <p className={cn(
                                        "font-bold",
                                        status === "success" ? "text-emerald-600" : "text-amber-600"
                                    )}>{recordedText}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Alt Buton */}
                    <div className="p-6 border-t border-slate-200/50 bg-white/80 backdrop-blur-md">
                        <div className="max-w-2xl mx-auto flex gap-4">
                            {status === "retry" && (
                                <Button
                                    onClick={handleRetry}
                                    variant="outline"
                                    className="flex-1 rounded-xl py-5 font-bold"
                                >
                                    <RotateCcw className="w-5 h-5 mr-2" /> Tekrar Dene
                                </Button>
                            )}

                            {status === "success" && (
                                <Button
                                    onClick={handleNext}
                                    className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl py-5 font-bold border-b-4 border-emerald-700 active:border-b-0"
                                >
                                    {isLastExercise ? "Bitir" : "Devam Et"} <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
