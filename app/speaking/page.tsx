"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic, MicOff, Volume2, ArrowRight, CheckCircle2, RotateCcw, Trophy, Sparkles, BrainCircuit, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { getSpeakingForUnit, UnitSpeaking } from "@/lib/speakings";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useQuests } from "@/lib/quests-context";
import { useShelldon } from "@/contexts/shelldon-context";
import { useLessonProgress } from "@/hooks/use-lesson-progress";
import { recordLessonCompletion } from "@/lib/user-stats";

export default function SpeakingPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-400 font-medium">Yükleniyor...</p>
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
    const [status, setStatus] = useState<"idle" | "recording" | "analyzing" | "success" | "retry">("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    // AI Pronunciation feedback states
    const [aiScore, setAiScore] = useState<number | null>(null);
    const [aiFeedback, setAiFeedback] = useState<string | null>(null);

    const [isFinished, setIsFinished] = useState(false);

    const { addXp, completeLesson } = useUserProgress();
    const { addXP: addQuestXP, addLesson: addQuestLesson } = useQuests();
    const { showShelldon } = useShelldon();
    const { markLessonCompleted } = useLessonProgress(unitId);

    const recognitionRef = useRef<any>(null);

    // Complete lesson and grant XP
    useEffect(() => {
        if (isFinished) {
            addXp(15);
            addQuestXP(15);
            addQuestLesson();
            completeLesson();
            markLessonCompleted("SPEAKING");

            // Record stats locally
            if (speakingContent) {
                const total = speakingContent.exercises.length;
                recordLessonCompletion(
                    unitId,
                    "speaking",
                    total, // assume all completed successfully
                    0,
                    300, // average 5 mins
                    15
                );
            }

            showShelldon("Telaffuzun harikaydı, aksanın şahane! 🎙️", "celebrate", 4000);
        }
    }, [isFinished]);

    // Load content when unitId changes
    useEffect(() => {
        const speaking = getSpeakingForUnit(unitId);
        setSpeakingContent(speaking);
        setCurrentIndex(0);
        setStatus("idle");
        setRecordedText(null);
        setAiScore(null);
        setAiFeedback(null);
        setErrorMessage(null);
        setIsFinished(false);
    }, [unitId]);

    // Cleanup recognition on unmount
    useEffect(() => {
        return () => {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (e) {
                    // ignore
                }
            }
        };
    }, []);

    if (!speakingContent) {
        return (
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const exercises = speakingContent.exercises;
    const exercise = exercises[currentIndex];
    const progress = ((currentIndex + 1) / exercises.length) * 100;
    const isLastExercise = currentIndex === exercises.length - 1;

    // Get TTS Language Code
    const getLanguageCode = (unitId: number): string => {
        if (unitId >= 301 && unitId <= 420) return "fr-FR"; // French
        if (unitId >= 101 && unitId <= 230) return "en-US"; // English
        if (unitId >= 501 && unitId <= 560) return "de-DE"; // German
        return "es-ES"; // Spanish
    };

    const languageCode = getLanguageCode(unitId);

    // Native Speech Synthesis
    const playAudio = (text: string) => {
        if (typeof window === "undefined" || !window.speechSynthesis) return;

        try {
            window.speechSynthesis.cancel();
        } catch (e) {
            // ignore
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = languageCode;

        const voices = speechSynthesis.getVoices();
        const langPrefix = languageCode.split('-')[0];
        
        const femaleVoice = voices.find(v =>
            v.lang.startsWith(langPrefix) &&
            (v.name.toLowerCase().includes('female') ||
                v.name.toLowerCase().includes('woman') ||
                v.name.toLowerCase().includes('amelie') ||
                v.name.toLowerCase().includes('marie') ||
                v.name.toLowerCase().includes('celine') ||
                v.name.toLowerCase().includes('lea') ||
                v.name.toLowerCase().includes('julie') ||
                v.name.toLowerCase().includes('virginie') ||
                v.name.toLowerCase().includes('katja') || 
                v.name.toLowerCase().includes('vicki') || 
                v.name.toLowerCase().includes('marlene') || 
                v.name.toLowerCase().includes('paulina') ||
                v.name.toLowerCase().includes('monica') ||
                v.name.toLowerCase().includes('helena') ||
                v.name.toLowerCase().includes('samantha') ||
                v.name.toLowerCase().includes('karen') ||
                v.name.toLowerCase().includes('victoria') ||
                v.name.toLowerCase().includes('zira') ||
                v.name.includes('Google') && v.name.toLowerCase().includes('female'))
        ) || voices.find(v => v.lang.startsWith(langPrefix));

        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }

        utterance.rate = 0.85; 
        utterance.pitch = 1.1; 

        speechSynthesis.speak(utterance);
    };

    // Analyze speech using DeepSeek API
    const analyzeSpeech = async (transcript: string) => {
        setStatus("analyzing");
        setErrorMessage(null);

        try {
            const res = await fetch("/api/lesson/pronounce", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    expectedText: exercise.text,
                    userSpeech: transcript,
                    language: speakingContent.language || "en",
                    level: speakingContent.level || "A1"
                })
            });

            if (!res.ok) {
                throw new Error("Telaffuz analizi yapılamadı.");
            }

            const data = await res.json();
            
            setAiScore(data.score);
            setAiFeedback(data.feedback);

            if (data.score >= 60 || data.isCorrect) {
                setStatus("success");
                if (data.score >= 85) {
                    showShelldon("Mükemmel telaffuz! Harika gidiyorsun! 🌟", "happy", 2000);
                } else {
                    showShelldon("Güzel iş! Cümleyi başarıyla tamamladın.", "happy", 2000);
                }
            } else {
                setStatus("retry");
                showShelldon("Küçük pürüzler var, tekrar deneyelim mi? Yapabilirsin!", "thinking", 2500);
            }

        } catch (err: any) {
            console.error(err);
            setErrorMessage("Analiz sırasında bir bağlantı hatası oluştu. Lütfen tekrar deneyin.");
            setStatus("retry");
        }
    };

    // Start Web Speech Recognition
    const startRecording = () => {
        setIsRecording(true);
        setStatus("recording");
        setRecordedText(null);
        setAiScore(null);
        setAiFeedback(null);
        setErrorMessage(null);

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = languageCode;
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onresult = (event: any) => {
                const transcript = event.results[0]?.[0]?.transcript;
                if (transcript) {
                    setRecordedText(transcript);
                    analyzeSpeech(transcript);
                }
            };

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error:", event.error);
                setIsRecording(false);
                setStatus("retry");

                if (event.error === "not-allowed") {
                    setErrorMessage("Mikrofon izni gerekli. Lütfen tarayıcı ayarlarından mikrofon iznini verin.");
                } else if (event.error === "no-speech") {
                    setErrorMessage("Ses algılanamadı. Mikrofona yakından ve net konuşmayı deneyin.");
                } else {
                    setErrorMessage("Ses tanıma başarısız oldu. Lütfen tekrar deneyin.");
                }
            };

            recognition.onend = () => {
                setIsRecording(false);
            };

            recognitionRef.current = recognition;
            try {
                recognition.start();
            } catch (e) {
                setIsRecording(false);
                setStatus("retry");
            }
        } else {
            setErrorMessage("Tarayıcınız ses tanımayı desteklemiyor. Lütfen Chrome veya Edge kullanın.");
            setIsRecording(false);
            setStatus("retry");
        }
    };

    const handleNext = () => {
        if (isLastExercise) {
            setIsFinished(true);
        } else {
            setCurrentIndex(i => i + 1);
            setStatus("idle");
            setRecordedText(null);
            setAiScore(null);
            setAiFeedback(null);
            setErrorMessage(null);
        }
    };

    const handleRetry = () => {
        setStatus("idle");
        setRecordedText(null);
        setAiScore(null);
        setAiFeedback(null);
        setErrorMessage(null);
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
        <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col h-full w-full text-white overflow-hidden">
            
            {/* Header / Progress Bar */}
            <div className="w-full px-6 py-4 flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md shrink-0">
                <button 
                    onClick={() => router.push("/learn")} 
                    className="text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="flex-1 text-center max-w-md mx-auto">
                    <Progress value={progress} className="h-2 w-full bg-white/5" />
                    <p className="text-[11px] text-slate-400 font-bold mt-1.5 uppercase tracking-wider">
                        {getLanguageDisplayName(speakingContent.language)} {speakingContent.level} • Cümle {currentIndex + 1} / {exercises.length}
                    </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase bg-violet-500/20 text-violet-400 border border-violet-500/30">
                    <BrainCircuit className="w-4 h-4 animate-pulse" /> AI Telaffuz
                </div>
            </div>

            {/* Bitiş Ekranı */}
            {isFinished ? (
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-300">
                    <div className="w-24 h-24 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/30 mb-6">
                        <Trophy className="w-12 h-12 text-white animate-bounce" />
                    </div>
                    <h1 className="text-3xl font-black bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">Konuşma Tamamlandı! 🎉</h1>
                    <p className="text-slate-400 max-w-sm mb-1">{speakingContent.title}</p>
                    <p className="text-emerald-400 font-bold text-lg mb-8">+15 XP kazandın!</p>
                    <Button
                        onClick={() => router.push("/learn")}
                        className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold px-12 py-6 rounded-2xl text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-105 active:scale-95 transition-all"
                    >
                        DEVAM ET <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            ) : (
                <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col items-center justify-between max-w-2xl mx-auto w-full space-y-6">
                    
                    {/* Prompt Instruction */}
                    <div className="text-center space-y-1 mt-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/5 border border-white/10 text-slate-400">
                            {exercise.type === "repeat" ? "Telaffuz et" : "Cevap ver"}
                        </span>
                        <h2 className="text-slate-300 font-bold text-sm tracking-wide mt-2">{exercise.prompt}</h2>
                    </div>

                    {/* Sentence Box */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 w-full text-center shadow-xl space-y-3 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-wide">
                            {exercise.text}
                        </p>
                        <p className="text-slate-400 font-semibold text-sm sm:text-base italic">
                            "{exercise.translation}"
                        </p>
                    </div>

                    {/* TTS Button */}
                    <Button
                        onClick={() => playAudio(exercise.text)}
                        variant="outline"
                        className="rounded-2xl border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white font-black px-6 py-5 shrink-0"
                    >
                        <Volume2 className="w-5 h-5 mr-2 text-violet-400" /> DOĞRU OKUNUŞU DİNLE
                    </Button>

                    {/* AI Feedback Card */}
                    <div className="w-full shrink-0 min-h-[140px] flex items-center justify-center">
                        {status === "analyzing" && (
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full flex items-center gap-4 animate-pulse">
                                <div className="w-10 h-10 border-4 border-violet-500 border-t-transparent rounded-full animate-spin shrink-0" />
                                <div className="space-y-1.5 flex-1">
                                    <p className="text-sm font-black text-violet-400 uppercase tracking-wider">Profesor Shell İnceliyor...</p>
                                    <p className="text-xs text-slate-400 font-medium">Yapay zeka telaffuzunuzu analiz ediyor. Lütfen bekleyin.</p>
                                </div>
                            </div>
                        )}

                        {(status === "success" || status === "retry") && aiFeedback && (
                            <div className={cn(
                                "border rounded-3xl p-5 w-full space-y-3 shadow-lg animate-in fade-in slide-in-from-bottom-3 duration-300",
                                status === "success" 
                                    ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-300 shadow-emerald-950/20" 
                                    : "bg-amber-500/5 border-amber-500/20 text-amber-300 shadow-amber-950/20"
                            )}>
                                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                    <div className="flex items-center gap-2">
                                        {status === "success" ? (
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                                        )}
                                        <span className="text-sm font-black uppercase tracking-wider">
                                            {status === "success" ? "Harika Telaffuz! 🎉" : "Tekrar Deneyelim mi? 💪"}
                                        </span>
                                    </div>
                                    {aiScore !== null && (
                                        <span className={cn(
                                            "px-3 py-1 rounded-xl text-xs font-black border",
                                            status === "success" 
                                                ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400" 
                                                : "bg-amber-500/20 border-amber-500/30 text-amber-400"
                                        )}>
                                            Skor: {aiScore}/100
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm leading-relaxed font-semibold">
                                    {aiFeedback}
                                </p>

                                {recordedText && (
                                    <div className="bg-white/5 rounded-xl p-2.5 text-xs font-medium space-x-1">
                                        <span className="text-slate-400 font-bold">Algılanan Ses:</span>
                                        <span className="text-white italic">"{recordedText}"</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {status === "idle" && (
                            <p className="text-xs text-slate-500 font-black text-center uppercase tracking-widest animate-pulse">
                                Mikrofona dokunarak cümleyi okumaya başlayın
                            </p>
                        )}
                    </div>

                    {/* Microphone Area / Record Buttons */}
                    <div className="flex flex-col items-center gap-4 shrink-0 pb-6">
                        <button
                            onClick={startRecording}
                            disabled={isRecording || status === "analyzing" || status === "success"}
                            className={cn(
                                "w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-2xl relative group shrink-0 border-2",
                                isRecording 
                                    ? "bg-rose-500 border-white/20 animate-pulse scale-110 shadow-rose-950/50" 
                                    : status === "analyzing"
                                        ? "bg-slate-800 border-white/10 opacity-50 cursor-not-allowed"
                                        : status === "success"
                                            ? "bg-emerald-600 border-emerald-400/30 shadow-emerald-950/50 cursor-default"
                                            : "bg-violet-600 border-white/10 hover:bg-violet-500 hover:scale-105 active:scale-95 shadow-violet-950/50"
                            )}
                        >
                            {isRecording ? (
                                <MicOff className="w-10 h-10 text-white animate-pulse" />
                            ) : status === "success" ? (
                                <CheckCircle2 className="w-10 h-10 text-white" />
                            ) : (
                                <Mic className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                            )}

                            {/* Breathing animation for microphone when idle */}
                            {!isRecording && status === "idle" && (
                                <span className="absolute inset-0 rounded-full border border-violet-500/40 animate-ping [animation-duration:2s]" />
                            )}
                        </button>

                        {/* Error Message Box */}
                        {errorMessage && (
                            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold flex items-center gap-2 max-w-sm text-center">
                                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" /> {errorMessage}
                            </div>
                        )}
                    </div>

                    {/* Footer / Control Bar */}
                    <div className="w-full shrink-0 flex gap-4 mt-auto pt-4 border-t border-white/5 pb-4">
                        {status === "retry" && (
                            <Button
                                onClick={handleRetry}
                                variant="outline"
                                className="flex-1 rounded-2xl py-6 font-black border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm"
                            >
                                <RotateCcw className="w-5 h-5 mr-2 text-amber-400" /> TEKRAR DENE
                            </Button>
                        )}

                        {status === "success" && (
                            <Button
                                onClick={handleNext}
                                className="flex-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white rounded-2xl py-6 font-black border-b-4 border-emerald-700 active:border-b-0 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all text-sm"
                            >
                                {isLastExercise ? "BİTİR VE XP KAZAN" : "SONRAKİ CÜMLE"} <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        )}
                    </div>

                </div>
            )}
        </div>
    );
}
