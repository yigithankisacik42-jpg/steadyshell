"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Heart, Check, AlertCircle, Volume2, Trophy, ArrowRight, X, Brain, Sparkles, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useHearts, formatTime } from "@/lib/hearts-context";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useLanguage } from "@/contexts/LanguageContext";
import { useShelldon } from "@/contexts/shelldon-context";
import { compareAnswers, hasMissingAccents } from "@/lib/accent-utils";

interface QuestionOption {
 id: string;
 text: string;
 correct: boolean;
 image?: string;
}

interface AdaptiveQuestion {
 id: number;
 type: "SELECT" | "TRANSLATE" | "FILL_BLANK" | "LISTENING";
 question: string;
 options?: QuestionOption[];
 correctAnswer?: string;
 hint?: string;
 sentence?: string;
 audioText?: string;
 weaknessId?: string;
}

export default function AdaptiveQuizPage() {
 const router = useRouter();
 const { hearts, loseHeart } = useHearts();
 const { addXp } = useUserProgress();
 const { currentLanguage, currentLevel } = useLanguage();
 const { showShelldon } = useShelldon();

 const [phase, setPhase] = useState<"loading" | "quiz" | "finished">("loading");
 const [questions, setQuestions] = useState<AdaptiveQuestion[]>([]);
 const [weaknessTopics, setWeaknessTopics] = useState<string[]>([]);
 const [index, setIndex] = useState(0);
 const [selectedOption, setSelectedOption] = useState<string | null>(null);
 const [textInput, setTextInput] = useState("");
 const [status, setStatus] = useState<"none" | "correct" | "wrong" | "correct_with_accent_warning">("none");
 const [wrongCount, setWrongCount] = useState(0);
 const [audioPlaying, setAudioPlaying] = useState(false);
 const [results, setResults] = useState<{ weaknessId: string | null; wasCorrect: boolean }[]>([]);
 const [resolvedTopics, setResolvedTopics] = useState<string[]>([]);
 const [showExit, setShowExit] = useState(false);
 const [error, setError] = useState<string | null>(null);

 // Generate questions on mount
 useEffect(() => {
 const generateQuestions = async () => {
 try {
 const res = await fetch('/api/adaptive-quiz/generate', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({
 language: currentLanguage?.code || "es",
 level: currentLevel?.code || "A1"
 })
 });

 const data = await res.json();

 if (data.noWeaknesses) {
 setError(data.message);
 setPhase("finished");
 return;
 }

 if (!data.questions || data.questions.length === 0) {
 setError("Sorular üretilemedi. Lütfen tekrar deneyin.");
 setPhase("finished");
 return;
 }

 // Ensure all questions have proper IDs and option IDs
 const validatedQuestions = data.questions.map((q: any, i: number) => ({
 ...q,
 id: q.id || i + 1,
 options: q.options?.map((opt: any, j: number) => ({
 ...opt,
 id: opt.id || String.fromCharCode(97 + j), // a, b, c, d
 }))
 }));

 setQuestions(validatedQuestions);
 setWeaknessTopics(data.weaknessTopics || []);
 setPhase("quiz");
 } catch (err) {
 console.error("Adaptive quiz generation failed:", err);
 setError("Bağlantı hatası. Lütfen tekrar deneyin.");
 setPhase("finished");
 }
 };

 generateQuestions();
 }, [currentLanguage, currentLevel]);

 const challenge = questions[index];
 const progress = questions.length > 0 ? ((index + 1) / questions.length) * 100 : 0;

 const playAudio = () => {
 if (challenge?.audioText) {
 setAudioPlaying(true);
 const utterance = new SpeechSynthesisUtterance(challenge.audioText);
 const langCode = currentLanguage?.code || "es";
 let targetLang = "es-ES";
 if (langCode === "fr") targetLang = "fr-FR";
 else if (langCode === "en") targetLang = "en-US";
 else if (langCode === "de") targetLang = "de-DE";
 else if (langCode === "tr") targetLang = "tr-TR";
 utterance.lang = targetLang;
 utterance.rate = 0.9;
 utterance.pitch = 1.1;
 const voices = speechSynthesis.getVoices();
 const preferredVoice = voices.find(v => v.lang.startsWith(langCode));
 if (preferredVoice) utterance.voice = preferredVoice;
 utterance.onend = () => setAudioPlaying(false);
 speechSynthesis.speak(utterance);
 }
 };

 const getCorrectAnswer = () => {
 if (!challenge) return "";
 if (challenge.type === "TRANSLATE") return challenge.correctAnswer;
 return challenge.options?.find(o => o.correct)?.text;
 };

 const onCheck = () => {
 if (!challenge) return;
 let isCorrect = false;

 if (challenge.type === "SELECT" || challenge.type === "FILL_BLANK" || challenge.type === "LISTENING") {
 const selectedOpt = challenge.options?.find(o => o.id === selectedOption);
 isCorrect = selectedOpt?.correct || false;
 } else if (challenge.type === "TRANSLATE") {
 isCorrect = compareAnswers(textInput, challenge.correctAnswer || "");
 if (isCorrect && hasMissingAccents(textInput, challenge.correctAnswer || "")) {
 setStatus("correct_with_accent_warning");
 setResults(prev => [...prev, { weaknessId: challenge.weaknessId || null, wasCorrect: true }]);
 return;
 }
 }

 if (isCorrect) {
 setStatus("correct");
 setResults(prev => [...prev, { weaknessId: challenge.weaknessId || null, wasCorrect: true }]);
 const happyMsgs = ["Harika!", "İşte bu!", "Mükemmel!", "Çok iyisin!", "Tam isabet!"];
 showShelldon(happyMsgs[Math.floor(Math.random() * happyMsgs.length)], "happy", 2000);
 } else {
 loseHeart();
 setWrongCount(w => w + 1);
 setStatus("wrong");
 setResults(prev => [...prev, { weaknessId: challenge.weaknessId || null, wasCorrect: false }]);
 const sadMsgs = ["Dikkatli ol!", "Pes etme!", "Bir dahakine!", "Küçük hata!"];
 showShelldon(sadMsgs[Math.floor(Math.random() * sadMsgs.length)], "sad", 2500);

 if (hearts - 1 === 0) {
 setTimeout(() => setPhase("finished"), 1500);
 }
 }
 };

 const onNext = () => {
 if (index < questions.length - 1) {
 setIndex(i => i + 1);
 setStatus("none");
 setSelectedOption(null);
 setTextInput("");
 } else {
 setPhase("finished");
 }
 };

 const canCheck = () => {
 if (!challenge) return false;
 if (challenge.type === "TRANSLATE") return textInput.trim().length > 0;
 return selectedOption !== null;
 };

 // Submit results when quiz finishes
 useEffect(() => {
 if (phase === "finished" && results.length > 0) {
 const submitResults = async () => {
 try {
 const res = await fetch('/api/adaptive-quiz/result', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ results })
 });
 const data = await res.json();
 if (data.resolvedTopics) setResolvedTopics(data.resolvedTopics);

 // Award XP
 const correct = results.filter(r => r.wasCorrect).length;
 const xp = correct + (correct >= 8 ? 10 : correct >= 5 ? 5 : 0);
 if (xp > 0) addXp(xp);
 } catch (err) {
 console.error("Failed to submit adaptive quiz results:", err);
 }
 };
 submitResults();
 }
 }, [phase]);

 // LOADING PHASE
 if (phase === "loading") {
 return (
 <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-cyan-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 flex flex-col items-center justify-center">
 <div className="relative mb-8">
 <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-2xl shadow-cyan-500/30 animate-pulse">
 <Brain className="w-12 h-12 text-white" />
 </div>
 <div className="absolute -top-2 -right-2 animate-bounce">
 <Sparkles className="w-8 h-8 text-amber-400" />
 </div>
 </div>
 <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent mb-3">
 Akıllı Sorular Hazırlanıyor...
 </h1>
 <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm">
 Shelldon zayıf noktalarını analiz ediyor ve sana özel sorular üretiyor 🐢✨
 </p>
 <div className="mt-8 flex items-center gap-2">
 <Loader2 className="w-5 h-5 text-indigo-500 animate-spin" />
 <span className="text-sm text-slate-400 font-medium">AI soru üretiyor...</span>
 </div>
 </div>
 );
 }

 // FINISHED PHASE
 if (phase === "finished") {
 const isGameOver = hearts === 0;
 const totalAnswered = results.length;
 const correctCount = results.filter(r => r.wasCorrect).length;
 const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
 const earnedXP = isGameOver ? 0 : correctCount + (correctCount >= 8 ? 10 : correctCount >= 5 ? 5 : 0);

 return (
 <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 dark:from-slate-950 dark:to-slate-900 flex flex-col items-center justify-center p-6">
 {error ? (
 // Error / No weaknesses state
 <div className="text-center space-y-6 max-w-sm">
 <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
 <Check className="w-12 h-12 text-white" />
 </div>
 <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white">{error}</h1>
 <p className="text-slate-500 dark:text-slate-400">Quiz çözerek zayıf noktalarını keşfet, Shelldon onları takip etsin!</p>
 <Button
 onClick={() => router.push("/learn")}
 className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-xl"
 >
 Ders Çöz <ArrowRight className="ml-2 w-5 h-5" />
 </Button>
 </div>
 ) : (
 // Results display
 <div className="text-center space-y-6 max-w-md w-full">
 <div className={cn(
 "w-24 h-24 mx-auto rounded-full flex items-center justify-center shadow-2xl",
 isGameOver
 ? "bg-gradient-to-br from-rose-400 to-red-500"
 : "bg-gradient-to-br from-amber-400 to-orange-400"
 )}>
 {isGameOver ? <Heart className="w-12 h-12 text-white" /> : <Trophy className="w-12 h-12 text-white" />}
 </div>

 <h1 className={cn(
 "text-4xl font-extrabold bg-clip-text text-transparent",
 isGameOver
 ? "bg-gradient-to-r from-rose-600 to-red-600"
 : "bg-gradient-to-r from-cyan-600 to-indigo-600"
 )}>
 {isGameOver ? "Can Bitti!" : "Kamp Tamamlandı!"}
 </h1>

 {/* Stats */}
 <div className="flex items-center justify-center gap-6 mt-4">
 <div className="text-center">
 <p className="text-3xl font-extrabold text-emerald-500">{correctCount}/{totalAnswered}</p>
 <p className="text-sm text-slate-400 dark:text-slate-500">Doğru</p>
 </div>
 <div className="text-center">
 <p className="text-3xl font-extrabold text-amber-500">%{accuracy}</p>
 <p className="text-sm text-slate-400 dark:text-slate-500">Başarı</p>
 </div>
 <div className="text-center">
 <p className="text-3xl font-extrabold text-indigo-500">+{earnedXP}</p>
 <p className="text-sm text-slate-400 dark:text-slate-500">XP</p>
 </div>
 </div>

 {/* Resolved topics celebration */}
 {resolvedTopics.length > 0 && (
 <div className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 mt-4">
 <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
 <Sparkles className="w-5 h-5" /> Zayıflık Giderildi!
 </h3>
 {resolvedTopics.map((topic, i) => (
 <p key={i} className="text-emerald-600 dark:text-emerald-300 text-sm">✅ {topic}</p>
 ))}
 </div>
 )}

 <div className="flex flex-col gap-3 mt-6">
 <Button
 onClick={() => router.push("/adaptive-quiz")}
 className="bg-gradient-to-r from-cyan-600 to-indigo-600 text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-xl w-full"
 >
 Panele Dön <ArrowRight className="ml-2 w-5 h-5" />
 </Button>
 <Button
 onClick={() => router.push("/learn")}
 variant="outline"
 className="px-8 py-5 rounded-xl font-bold w-full dark:border-slate-700 dark:text-slate-300"
 >
 Ders Çöz
 </Button>
 </div>
 </div>
 )}
 </div>
 );
 }

 // QUIZ PHASE
 return (
 <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-cyan-50 dark:from-slate-950 dark:to-slate-900 flex flex-col h-full w-full">

 {/* Exit Modal */}
 {showExit && (
 <div className="fixed inset-0 z-[100000] bg-black/50 flex items-center justify-center p-4">
 <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-sm w-full text-center space-y-4 shadow-2xl">
 <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Çıkmak istediğine emin misin?</h2>
 <p className="text-slate-500 dark:text-slate-400">İlerleme kaydedilmeyecek.</p>
 <Button onClick={() => router.push("/adaptive-quiz")} variant="destructive" className="w-full rounded-xl py-5 font-bold">Evet, Çık</Button>
 <Button onClick={() => setShowExit(false)} variant="outline" className="w-full rounded-xl py-5 font-bold dark:border-slate-700">Vazgeç</Button>
 </div>
 </div>
 )}

 {/* Top Bar */}
 <div className="w-full px-6 py-4 flex items-center justify-between gap-6 border-b border-cyan-200/50 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
 <ArrowLeft onClick={() => setShowExit(true)} className="cursor-pointer text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 w-6 h-6 transition-colors" />
 <div className="flex-1">
 <Progress value={progress} className="h-3 w-full" />
 <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-1 flex items-center justify-center gap-1">
 <Brain className="w-3 h-3" /> Akıllı Quiz — {index + 1}/{questions.length}
 </p>
 </div>
 <div className="flex items-center gap-1">
 {[...Array(hearts)].map((_, i) => (
 <Heart key={i} className="text-rose-500 w-5 h-5 fill-rose-500" />
 ))}
 </div>
 </div>

 {/* Question Area */}
 {challenge && (
 <>
 <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
 {/* Question Type Badge */}
 <div className="mb-4">
 <span className={cn(
 "px-3 py-1 rounded-full text-xs font-bold uppercase",
 challenge.type === "TRANSLATE" && "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400",
 challenge.type === "LISTENING" && "bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400",
 challenge.type === "FILL_BLANK" && "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400",
 challenge.type === "SELECT" && "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400",
 )}>
 {challenge.type === "TRANSLATE" && "Çeviri"}
 {challenge.type === "LISTENING" && "Dinleme"}
 {challenge.type === "FILL_BLANK" && "Boşluk Doldurma"}
 {challenge.type === "SELECT" && "Seçim"}
 </span>
 </div>

 <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 text-center">{challenge.question}</h1>

 {/* TRANSLATE */}
 {challenge.type === "TRANSLATE" && (
 <div className="w-full space-y-4 mt-6">
 <div className="bg-cyan-50 dark:bg-cyan-900/30 border-2 border-cyan-200 dark:border-cyan-800 rounded-2xl p-4 text-center">
 <p className="text-xl font-bold text-cyan-700 dark:text-cyan-300">{challenge.hint}</p>
 </div>
 <Input
 value={textInput}
 onChange={(e) => setTextInput(e.target.value)}
 placeholder="Cevabını yaz..."
 disabled={status !== "none"}
 className={cn(
 "h-14 text-lg font-medium rounded-xl border-2 dark:bg-slate-800 dark:text-white",
 status === "correct" && "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30",
 status === "wrong" && "border-rose-500 bg-rose-50 dark:bg-rose-900/30"
 )}
 onKeyDown={(e) => { if (e.key === "Enter" && canCheck()) onCheck(); }}
 />
 </div>
 )}

 {/* LISTENING */}
 {challenge.type === "LISTENING" && (
 <button
 onClick={playAudio}
 className={cn(
 "mt-4 mb-6 w-20 h-20 rounded-full flex items-center justify-center transition-all",
 audioPlaying ? "bg-sky-500 animate-pulse" : "bg-sky-100 dark:bg-sky-900/50 hover:bg-sky-200 dark:hover:bg-sky-800/50"
 )}
 >
 <Volume2 className={cn("w-10 h-10", audioPlaying ? "text-white" : "text-sky-600 dark:text-sky-400")} />
 </button>
 )}

 {/* FILL_BLANK */}
 {challenge.type === "FILL_BLANK" && challenge.sentence && (
 <div className="bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-4 mt-4 mb-6">
 <p className="text-xl font-medium text-slate-700 dark:text-slate-200 text-center">
 {challenge.sentence.split("_").map((part, i) => (
 <span key={i}>
 {part}
 {i === 0 && (
 <span className={cn(
 "mx-1 px-4 py-1 rounded-lg border-b-4 inline-block",
 selectedOption && status === "none" && "bg-cyan-100 dark:bg-cyan-900/40 border-cyan-300 text-cyan-600",
 status === "correct" && "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-300 text-emerald-600",
 status === "wrong" && "bg-rose-100 dark:bg-rose-900/30 border-rose-300 text-rose-600",
 !selectedOption && "bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
 )}>
 {selectedOption ? challenge.options?.find(o => o.id === selectedOption)?.text : "___"}
 </span>
 )}
 </span>
 ))}
 </p>
 </div>
 )}

 {/* OPTIONS for SELECT, FILL_BLANK, LISTENING */}
 {(challenge.type === "SELECT" || challenge.type === "FILL_BLANK" || challenge.type === "LISTENING") && (
 <div className={cn(
 "grid gap-3 w-full mt-4",
 challenge.options && challenge.options.length <= 3 ? "grid-cols-3" : "grid-cols-2"
 )}>
 {challenge.options?.map((opt) => {
 const isSelected = selectedOption === opt.id;
 const showResult = status !== "none";
 let optionStyle = "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600";
 if (isSelected && !showResult) optionStyle = "bg-cyan-50 dark:bg-cyan-900/30 border-2 border-cyan-500";
 if (showResult && opt.correct) optionStyle = "bg-emerald-50 dark:bg-emerald-900/30 border-2 border-emerald-500";
 if (showResult && isSelected && !opt.correct) optionStyle = "bg-rose-50 dark:bg-rose-900/30 border-2 border-rose-500 animate-shake";

 return (
 <div
 key={opt.id}
 onClick={() => !showResult && setSelectedOption(opt.id)}
 className={cn("p-4 rounded-2xl cursor-pointer text-center transition-all", optionStyle, showResult && "cursor-default")}
 >
 <div className={cn(
 "font-bold",
 showResult && opt.correct && "text-emerald-600 dark:text-emerald-400",
 showResult && isSelected && !opt.correct && "text-rose-600 dark:text-rose-400",
 !showResult && "text-slate-700 dark:text-slate-200"
 )}>{opt.text}</div>
 </div>
 );
 })}
 </div>
 )}
 </div>

 {/* Bottom Button Area */}
 <div className={cn(
 "p-6 border-t w-full",
 (status === "correct" || status === "correct_with_accent_warning") && "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
 status === "wrong" && "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800",
 status === "none" && "bg-white/80 dark:bg-slate-900/80 border-slate-200/50 dark:border-slate-800"
 )}>
 <div className="max-w-2xl mx-auto flex items-center justify-between">
 {status !== "none" && (
 <div className="flex items-center gap-2">
 {status === "correct" ? (
 <>
 <Check className="w-6 h-6 text-emerald-500" />
 <span className="font-bold text-emerald-600 dark:text-emerald-400">Harika!</span>
 </>
 ) : status === "correct_with_accent_warning" ? (
 <>
 <Check className="w-6 h-6 text-amber-500" />
 <div>
 <span className="font-bold text-amber-600 dark:text-amber-400">Doğru! </span>
 <span className="text-amber-600 dark:text-amber-400 text-sm">Aksanlara dikkat: {challenge?.correctAnswer}</span>
 </div>
 </>
 ) : (
 <>
 <AlertCircle className="w-6 h-6 text-rose-500" />
 <span className="font-bold text-rose-600 dark:text-rose-400">Doğru cevap: {getCorrectAnswer()}</span>
 </>
 )}
 </div>
 )}
 <div className={cn(status === "none" && "w-full")}>
 {status === "none" ? (
 <Button
 onClick={onCheck}
 disabled={!canCheck()}
 className="w-full bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-bold py-6 rounded-2xl disabled:opacity-50 border-b-4 border-cyan-800 active:border-b-0 active:translate-y-1"
 >
 KONTROL ET
 </Button>
 ) : (
 <Button
 onClick={onNext}
 className={cn(
 "font-bold py-6 px-8 rounded-2xl border-b-4 active:border-b-0 active:translate-y-1",
 (status === "correct" || status === "correct_with_accent_warning")
 ? "bg-emerald-500 hover:bg-emerald-600 border-emerald-700 text-white"
 : "bg-rose-500 hover:bg-rose-600 border-rose-700 text-white"
 )}
 >
 DEVAM ET
 </Button>
 )}
 </div>
 </div>
 </div>
 </>
 )}
 </div>
 );
}
