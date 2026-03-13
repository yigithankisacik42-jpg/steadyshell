"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, Mic, MicOff, Send, Volume2, VolumeX, Sparkles, MessageCircle, Check, Loader2, Lightbulb, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShelldonAvatar } from "@/components/shelldon-avatar";
import { SHELLDON_SCENARIOS, buildShelldonPrompt, buildFeedbackPrompt, buildHintPrompt, type ShelldonScenario } from "@/lib/shelldon-ai";
import { useSpeech } from "@/lib/use-speech";
import { useUserProgress } from "@/contexts/user-progress-context";

const LANGUAGES = [
    { code: "fr", name: "Fransızca", flag: "🇫🇷" },
    { code: "es", name: "İspanyolca", flag: "🇪🇸" },
    { code: "en", name: "İngilizce", flag: "🇬🇧" },
];

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface FeedbackData {
    score: number;
    grammar: string;
    vocabulary: string;
    tip: string;
}

type ShelldonState = "idle" | "speaking" | "listening" | "happy" | "thinking";

export default function ShelldonPage() {
    // === STATE ===
    const [selectedLang, setSelectedLang] = useState("");
    const [selectedScenario, setSelectedScenario] = useState<ShelldonScenario | null>(null);
    const [isInChat, setIsInChat] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [shelldonState, setShelldonState] = useState<ShelldonState>("idle");
    const [currentBubbleText, setCurrentBubbleText] = useState("");
    const [turnCount, setTurnCount] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [feedback, setFeedback] = useState<FeedbackData | null>(null);
    const [showTextInput, setShowTextInput] = useState(false);
    const [userLevel] = useState("A1");
    // Yeni stateler (Hint & Görevler)
    const [isLoadingHint, setIsLoadingHint] = useState(false);
    const [currentHint, setCurrentHint] = useState<string | null>(null);
    const [completedObjectives, setCompletedObjectives] = useState<number[]>([]);

    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Hooks
    const { addXp, completeLesson } = useUserProgress();
    const {
        isListening,
        transcript,
        startListening,
        stopListening,
        isSpeaking,
        speak,
        stopSpeaking,
        isSupported: speechSupported,
        error: speechError,
    } = useSpeech(selectedLang || "fr");

    const MAX_TURNS = 8;

    // === TTS bittiğinde idle'a dön ===
    useEffect(() => {
        if (!isSpeaking && shelldonState === "speaking") {
            setShelldonState("idle");
        }
    }, [isSpeaking, shelldonState]);

    // === Ses tanıma sonucunu input'a yaz ===
    useEffect(() => {
        if (transcript && !isListening) {
            handleSendMessage(transcript);
        }
    }, [transcript, isListening]);

    // === Scroll to bottom ===
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages, currentBubbleText]);

    // === SAHNE BAŞLAT ===
    const startScenario = async (scenario: ShelldonScenario) => {
        setSelectedScenario(scenario);
        setIsInChat(true);
        setIsLoading(true);
        setShelldonState("thinking");
        setMessages([]);
        setTurnCount(0);
        setIsFinished(false);
        setFeedback(null);
        setCompletedObjectives([]);

        try {
            const systemPrompt = buildShelldonPrompt(selectedLang, userLevel, scenario);
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: "Sahneyi başlat. Beni senaryoya uygun şekilde karşıla." },
                    ],
                }),
            });

            if (!response.ok) {
                setCurrentBubbleText("⚠️ Bir hata oluştu. Tekrar deneyelim!");
                setShelldonState("idle");
                return;
            }

            const data = await response.json();
            const raw = data.choices?.[0]?.message?.content || "";
            let aiMessage = "Merhaba! 🐢";
            
            // Try parsing JSON response
            try {
                const cleanJson = raw.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
                const parsed = JSON.parse(cleanJson);
                if (parsed.message) aiMessage = parsed.message;
                if (parsed.completedObjectives && Array.isArray(parsed.completedObjectives)) {
                    setCompletedObjectives(parsed.completedObjectives);
                }
            } catch (e) {
                // Eğer AI JSON döndürmediyse düz metni al
                aiMessage = raw;
            }

            setMessages([{ role: "assistant", content: aiMessage }]);
            setCurrentBubbleText(aiMessage);
            setShelldonState("speaking");
            speak(aiMessage);
        } catch {
            setCurrentBubbleText("⚠️ Bağlantı hatası. İnternet bağlantını kontrol et!");
            setShelldonState("idle");
        } finally {
            setIsLoading(false);
        }
    };

    // === MESAJ GÖNDER ===
    const handleSendMessage = async (text?: string) => {
        const messageText = text || inputValue.trim();
        if (!messageText || isLoading || !selectedScenario) return;

        setInputValue("");
        setCurrentHint(null);
        setShelldonState("thinking");
        setIsLoading(true);

        const userMsg: Message = { role: "user", content: messageText };
        const updatedMessages = [...messages, userMsg];
        setMessages(updatedMessages);
        setTurnCount((t) => t + 1);

        try {
            const systemPrompt = buildShelldonPrompt(selectedLang, userLevel, selectedScenario);
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: systemPrompt },
                        ...updatedMessages.map((m) => ({ role: m.role, content: m.content })),
                    ],
                }),
            });

            if (!response.ok) {
                setCurrentBubbleText("Hmm, anlayamadım. Tekrar söyler misin? 🐢");
                setShelldonState("idle");
                setIsLoading(false);
                return;
            }

            const data = await response.json();
            const raw = data.choices?.[0]?.message?.content || "";
            let aiMessage = "Devam edelim!";
            let newCompletedObj: number[] = [];

            // Try parsing JSON response
            try {
                const cleanJson = raw.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
                const parsed = JSON.parse(cleanJson);
                if (parsed.message) aiMessage = parsed.message;
                if (parsed.completedObjectives && Array.isArray(parsed.completedObjectives)) {
                    newCompletedObj = parsed.completedObjectives;
                }
            } catch (e) {
                // fallback
                aiMessage = raw;
            }

            // Objeleri güncelle (önceki tamamlananları tut, yenileri ekle, unique yap)
            setCompletedObjectives(prev => {
                const merged = [...prev, ...newCompletedObj];
                return Array.from(new Set(merged));
            });

            const aiMsg: Message = { role: "assistant", content: aiMessage };
            setMessages((prev) => [...prev, aiMsg]);
            setCurrentBubbleText(aiMessage);

            // Duygu analizi (basit emoji kontrolü)
            if (aiMessage.includes("✅") || aiMessage.includes("Bravo") || aiMessage.includes("Harika") || aiMessage.includes("Parfait") || aiMessage.includes("Excelente") || aiMessage.includes("Excellent") || aiMessage.includes("Très bien") || aiMessage.includes("Muy bien") || aiMessage.includes("Very good")) {
                setShelldonState("happy");
            } else if (aiMessage.includes("?") && !aiMessage.includes("✅")) {
                setShelldonState("speaking"); // Normal soru soruyor
            } else {
                setShelldonState("speaking");
            }

            speak(aiMessage);

            // Max tura ulaşıldıysa bitir
            if (turnCount + 1 >= MAX_TURNS) {
                setTimeout(() => finishConversation([...updatedMessages, aiMsg]), 3000);
            }
        } catch {
            setCurrentBubbleText("Bağlantı hatası oldu! 😢");
            setShelldonState("idle");
        } finally {
            setIsLoading(false);
        }
    };

    // === KONUŞMAYI BİTİR ===
    const finishConversation = async (allMessages: Message[]) => {
        setIsFinished(true);
        setShelldonState("happy");

        // XP ver
        addXp(15);
        completeLesson();

        // Feedback al
        try {
            const userMsgs = allMessages
                .filter((m) => m.role === "user")
                .map((m) => m.content)
                .join("\n");
            const feedbackPrompt = buildFeedbackPrompt(selectedLang, userMsgs);

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: "Sen bir dil analiz asistanısın. SADECE JSON formatında cevap ver." },
                        { role: "user", content: feedbackPrompt },
                    ],
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const raw = data.choices?.[0]?.message?.content || "";
                // JSON parse — markdown code block varsa temizle
                const jsonStr = raw.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
                try {
                    const parsed = JSON.parse(jsonStr);
                    setFeedback(parsed);
                } catch {
                    setFeedback({ score: 75, grammar: "İyi gidiyorsun!", vocabulary: "Kelime dağarcığını geliştir.", tip: "Daha uzun cümleler kur." });
                }
            }
        } catch {
            setFeedback({ score: 75, grammar: "İyi gidiyorsun!", vocabulary: "Kelime dağarcığını geliştir.", tip: "Daha uzun cümleler kur." });
        }
    };

    // === İPUCU AL ===
    const handleGetHint = async () => {
        if (!selectedScenario || isLoading || isLoadingHint) return;

        setIsLoadingHint(true);
        try {
            const userMsgs = messages.map(m => `${m.role === 'user' ? 'Kullanıcı' : 'Shelldon'}: ${m.content}`).join("\n");
            const hintPrompt = buildHintPrompt(selectedLang, selectedScenario.titleTr, userMsgs);

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: "Sen sadece istenen ipucunu (tek cümlelik Türkçe ve hedef dil çevirisiyle veya doğrudan) veren bir asistansın. Açıklama yapma." },
                        { role: "user", content: hintPrompt },
                    ],
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setCurrentHint(data.choices?.[0]?.message?.content || "Bir hata oluştu.");
            }
        } catch {
            setCurrentHint("İpucu alınamadı.");
        } finally {
            setIsLoadingHint(false);
        }
    };

    // === MİKROFON TOGGLE ===
    const toggleMic = () => {
        if (isListening) {
            stopListening();
            setShelldonState("thinking");
        } else {
            if (isSpeaking) stopSpeaking();
            startListening();
            setShelldonState("listening");
        }
    };

    // === KEY PRESS ===
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // === GERİ DÖN ===
    const goBack = () => {
        stopSpeaking();
        setIsInChat(false);
        setSelectedScenario(null);
        setMessages([]);
        setCurrentBubbleText("");
        setShelldonState("idle");
        setIsFinished(false);
        setFeedback(null);
        setTurnCount(0);
    };

    // =============================================
    // === BİTİŞ EKRANI ===
    // =============================================
    if (isFinished) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 flex flex-col items-center justify-center p-6">
                {/* Avatar */}
                <ShelldonAvatar state="happy" language={selectedLang} size={160} className="mb-6" />

                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                    Harika Konuşma! 🎉
                </h1>
                <p className="text-slate-500 mb-6">
                    {selectedScenario?.titleTr} senaryosunu tamamladın!
                </p>

                {/* XP */}
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-emerald-100 mb-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="text-2xl font-black text-emerald-600">+15 XP</p>
                        <p className="text-xs text-slate-400 font-bold">Konuşma pratiği bonus</p>
                    </div>
                </div>

                {/* Feedback */}
                {feedback ? (
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full max-w-md mb-6 space-y-4">
                        {/* Skor */}
                        <div className="text-center">
                            <p className="text-5xl font-black text-emerald-500 mb-1">{feedback.score}</p>
                            <p className="text-sm text-slate-400 font-bold">Puan</p>
                        </div>

                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1000"
                                style={{ width: `${feedback.score}%` }}
                            />
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex gap-3">
                                <span className="font-bold text-indigo-500 shrink-0">📝 Gramer:</span>
                                <span className="text-slate-600">{feedback.grammar}</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-amber-500 shrink-0">📚 Kelime:</span>
                                <span className="text-slate-600">{feedback.vocabulary}</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-emerald-500 shrink-0">💡 İpucu:</span>
                                <span className="text-slate-600">{feedback.tip}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-slate-400 mb-6">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm font-bold">Analiz yapılıyor...</span>
                    </div>
                )}

                {/* Butonlar */}
                <div className="flex gap-3 w-full max-w-md">
                    <Button
                        onClick={goBack}
                        variant="outline"
                        className="flex-1 rounded-xl py-5 font-bold"
                    >
                        Senaryolara Dön
                    </Button>
                    <Button
                        onClick={() => {
                            setIsFinished(false);
                            setFeedback(null);
                            setTurnCount(0);
                            setMessages([]);
                            if (selectedScenario) startScenario(selectedScenario);
                        }}
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl py-5 font-bold shadow-lg"
                    >
                        Tekrar Dene
                    </Button>
                </div>
            </div>
        );
    }

    // =============================================
    // === KONUŞMA EKRANI ===
    // =============================================
    if (isInChat && selectedScenario) {
        const suggestions = selectedScenario.suggestedPhrases[selectedLang] || [];

        return (
            <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 flex flex-col relative">
                {/* BG Blobs */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-5%] right-[-10%] w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[25rem] h-[25rem] bg-teal-500/5 rounded-full blur-3xl" />
                </div>

                {/* Header */}
                <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
                    <div className="max-w-2xl mx-auto px-4 h-[64px] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={goBack}
                                className="text-slate-400 hover:text-emerald-600 rounded-xl"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{selectedScenario.icon}</span>
                                <div>
                                    <h1 className="font-bold text-slate-800 text-sm leading-tight">
                                        {selectedScenario.titleTr}
                                    </h1>
                                    <p className="text-[11px] text-slate-400 font-medium">
                                        {LANGUAGES.find((l) => l.code === selectedLang)?.flag}{" "}
                                        {selectedScenario.titleTarget[selectedLang]} • Tur {Math.min(turnCount + 1, MAX_TURNS)}/{MAX_TURNS}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* === ANA İÇERİK === */}
                <div className="flex-1 flex flex-col items-center relative z-10 overflow-hidden">
                    {/* Shelldon Avatar */}
                    <div className="pt-6 pb-2">
                        <ShelldonAvatar
                            state={shelldonState}
                            language={selectedLang}
                            size={150}
                        />
                    </div>

                    {/* Görevler (Checklist) */}
                    {selectedScenario.objectives && selectedScenario.objectives[selectedLang] && (
                        <div className="w-full max-w-lg px-6 mb-4 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100 shadow-sm">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                                    <span>Hedefler</span>
                                    <span className="text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">
                                        {completedObjectives.length} / {selectedScenario.objectives[selectedLang].length}
                                    </span>
                                </h3>
                                <div className="space-y-2.5">
                                    {selectedScenario.objectives[selectedLang].map((obj, i) => {
                                        const isCompleted = completedObjectives.includes(i);
                                        return (
                                            <div key={i} className="flex items-start gap-3 group">
                                                <div className="mt-0.5 shrink-0 transition-colors duration-300">
                                                    {isCompleted ? (
                                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                                    ) : (
                                                        <Circle className="w-5 h-5 text-slate-300 group-hover:text-emerald-200 transition-colors" />
                                                    )}
                                                </div>
                                                <p className={cn(
                                                    "text-sm transition-all duration-300",
                                                    isCompleted ? "text-slate-400 line-through decoration-slate-300" : "text-slate-700 font-medium"
                                                )}>
                                                    {obj}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Konuşma Balonu */}
                    <div className="px-6 w-full max-w-lg mb-4">
                        {currentBubbleText && (
                            <div className="bg-white rounded-2xl px-5 py-4 shadow-lg border border-emerald-100 relative">
                                {/* Üçgen */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-emerald-100 rotate-45" />
                                <p className="text-slate-700 font-medium leading-relaxed text-sm relative z-10 whitespace-pre-wrap">
                                    {currentBubbleText}
                                </p>
                                {/* Dinle butonu */}
                                {speechSupported && (
                                    <button
                                        onClick={() => isSpeaking ? stopSpeaking() : speak(currentBubbleText)}
                                        className="mt-2 flex items-center gap-1 text-xs font-bold text-emerald-500 hover:text-emerald-700"
                                    >
                                        {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                                        {isSpeaking ? "Durdur" : "Tekrar Dinle"}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mesaj Geçmişi (küçük, kaydırılabilir) */}
                    <div
                        ref={messagesContainerRef}
                        className="flex-1 w-full max-w-lg px-6 overflow-y-auto space-y-3 pb-4 scroll-smooth"
                    >
                        {messages.slice(0, -1).map((msg, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "text-sm px-4 py-2.5 rounded-2xl max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-sm",
                                    msg.role === "user"
                                        ? "bg-emerald-500 text-white ml-auto rounded-br-sm"
                                        : "bg-white text-slate-700 border border-slate-100 rounded-bl-sm"
                                )}
                            >
                                <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                            </div>
                        ))}

                        {/* Canlı Dinleme Balonu */}
                        {isListening && transcript && (
                            <div className="text-sm px-4 py-2.5 rounded-2xl max-w-[85%] bg-emerald-500/80 text-white ml-auto rounded-br-sm animate-pulse shadow-sm">
                                {transcript}
                                <span className="inline-block w-1 h-4 ml-1 align-middle bg-white/70 animate-bounce" />
                            </div>
                        )}

                        {/* İpucu Gösterimi */}
                        {currentHint && (
                            <div className="flex flex-col items-center gap-2 mt-4 animate-in fade-in zoom-in-95 duration-300">
                                <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium px-4 py-3 rounded-2xl max-w-[90%] shadow-sm relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-600 p-1.5 rounded-full border border-amber-200">
                                        <Lightbulb className="w-3.5 h-3.5" />
                                    </div>
                                    <p className="mt-1 text-center">{currentHint}</p>
                                    <button
                                        onClick={() => handleSendMessage(currentHint)}
                                        className="mt-2 w-full bg-amber-200 text-amber-900 py-1.5 rounded-xl font-bold hover:bg-amber-300 transition-colors"
                                    >
                                        Bunu Söyle
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* === ALT PANEL === */}
                <div className="sticky bottom-0 bg-white/90 backdrop-blur-xl border-t border-emerald-100 p-4 z-50">
                    <div className="max-w-lg mx-auto">
                        {/* Hata mesajı */}
                        {speechError && (
                            <p className="text-xs text-rose-500 font-bold text-center mb-2">⚠️ {speechError}</p>
                        )}

                        {/* Öneri cümleleri */}
                        {suggestions.length > 0 && turnCount < 3 && (
                            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                                {suggestions.map((phrase, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(phrase)}
                                        disabled={isLoading}
                                        className="shrink-0 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors disabled:opacity-50"
                                    >
                                        {phrase}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Mikrofon + Input */}
                        <div className="flex items-center gap-2">
                            {/* İpucu Butonu */}
                            <button
                                onClick={handleGetHint}
                                disabled={isLoading || isLoadingHint || isListening}
                                className="p-3 text-amber-500 hover:bg-amber-50 rounded-2xl transition-all disabled:opacity-50 border border-transparent hover:border-amber-200"
                                title="İpucu Al"
                            >
                                {isLoadingHint ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lightbulb className="w-5 h-5" />}
                            </button>

                            {/* Yazı/Mikrofon toggle */}
                            <button
                                onClick={() => setShowTextInput(!showTextInput)}
                                className="p-3 text-slate-400 hover:bg-slate-50 hover:text-emerald-600 rounded-2xl transition-all border border-transparent hover:border-slate-200"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </button>

                            {showTextInput ? (
                                /* Text Input */
                                <div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-2xl px-4 py-2 border border-slate-200">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                        placeholder="Mesajını yaz..."
                                        disabled={isLoading}
                                        className="flex-1 bg-transparent text-sm outline-none text-slate-700 placeholder:text-slate-400"
                                    />
                                    <Button
                                        size="icon"
                                        onClick={() => handleSendMessage()}
                                        disabled={!inputValue.trim() || isLoading}
                                        className="h-8 w-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl"
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </div>
                            ) : (
                                /* Mikrofon Butonu */
                                <button
                                    onClick={toggleMic}
                                    disabled={isLoading}
                                    className={cn(
                                        "flex-1 h-14 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm transition-all duration-300 border-b-4 active:border-b-0 active:translate-y-1",
                                        isListening
                                            ? "bg-rose-500 text-white border-rose-700 animate-pulse shadow-lg shadow-rose-500/30"
                                            : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-700 shadow-lg shadow-emerald-500/20 hover:shadow-xl",
                                        isLoading && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    {isListening ? (
                                        <>
                                            <MicOff className="w-5 h-5" /> Dinliyorum...
                                        </>
                                    ) : isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" /> Shelldon düşünüyor...
                                        </>
                                    ) : (
                                        <>
                                            <Mic className="w-5 h-5" /> Konuş
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // =============================================
    // === SENARYO SEÇİM EKRANI ===
    // =============================================
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 relative overflow-hidden pb-20">
            {/* BG */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-5%] right-[-10%] w-[35rem] h-[35rem] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[10%] left-[-10%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 h-[72px] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/learn">
                            <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-emerald-600 rounded-xl lg:hidden">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-lg lg:text-xl font-black text-slate-700 flex items-center gap-2">
                            🐢 Shelldon
                        </h1>
                    </div>
                    <div className="text-xs font-bold text-emerald-500 bg-emerald-50 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Konuşma Partneri
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-2xl mx-auto px-4 py-8 relative z-10 space-y-8">
                {/* Hero */}
                <div className="flex flex-col items-center text-center">
                    <ShelldonAvatar state="idle" language={selectedLang || "fr"} size={140} className="mb-4" />
                    <h2 className="text-2xl font-extrabold text-slate-800 mb-2">
                        Merhaba! Ben Shelldon 🐢
                    </h2>
                    <p className="text-slate-500 max-w-md text-sm leading-relaxed">
                        Seninle gerçek hayat senaryolarında konuşma pratiği yapacağım.
                        Yavaş ama emin adımlarla, birlikte öğrenelim!
                    </p>
                </div>

                {/* Step 1: Dil Seçimi */}
                <section>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-black">1</span>
                        Dil Seç
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setSelectedLang(lang.code)}
                                className={cn(
                                    "flex items-center gap-2 px-5 py-3 rounded-2xl font-bold transition-all duration-300 border-b-4",
                                    selectedLang === lang.code
                                        ? "bg-emerald-500 text-white border-emerald-700 shadow-lg shadow-emerald-500/20 scale-105"
                                        : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-600 shadow-sm"
                                )}
                            >
                                <span className="text-xl">{lang.flag}</span>
                                {lang.name}
                                {selectedLang === lang.code && <Check className="w-4 h-4" />}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Step 2: Senaryo Seçimi */}
                {selectedLang && (
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-black">2</span>
                            Senaryo Seç
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {SHELLDON_SCENARIOS.map((scenario) => (
                                <button
                                    key={scenario.id}
                                    onClick={() => startScenario(scenario)}
                                    className="group bg-white hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 border-b-4 border-b-slate-100 hover:border-b-emerald-300"
                                >
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {scenario.icon}
                                    </div>
                                    <div className="text-slate-700 font-bold text-sm mb-0.5">{scenario.titleTr}</div>
                                    <div className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                                        {scenario.description}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
