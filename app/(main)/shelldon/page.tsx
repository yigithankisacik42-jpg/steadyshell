"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, Mic, MicOff, Send, Volume2, VolumeX, Sparkles, MessageCircle, Check, Loader2, Lightbulb, CheckCircle2, Circle, Phone, PhoneOff, XCircle, ImageIcon, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShelldonAvatar, type ShelldonState } from "@/components/shelldon-avatar";

import { Scene3D } from "@/components/scene-3d";
import { 
    SHELLDON_SCENARIOS, 
    type ShelldonScenario, 
    type ShelldonPracticeMode,
    createShelldonIntro, 
    createShelldonReply, 
    createShelldonFeedback, 
    createShelldonHint, 
    getEmojiGame,
    createEmptyMemory,
    type ConversationMemory,
    type ShelldonPersona,
} from "@/lib/shelldon-offline";
import { useSpeech } from "@/lib/use-speech";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageByCode } from "@/lib/languages";
import { findUnitByLessonId } from "@/lib/curriculum";
import { useShelldon } from "@/contexts/shelldon-context";
import { getKnowledgeHint, type KnowledgeResult } from "@/lib/knowledge-center";

const LANGUAGES = [
    { code: "fr", name: "Fransızca", flag: "🇫🇷" },
    { code: "es", name: "İspanyolca", flag: "🇪🇸" },
    { code: "en", name: "İngilizce", flag: "🇬🇧" },
    { code: "de", name: "Almanca", flag: "🇩🇪" },
];

const PRACTICE_MODES: { id: ShelldonPracticeMode; label: string; description: string; icon: string }[] = [
    { id: "speaking", label: "Konuşma", description: "Doğal diyalog ve akıcılık", icon: "💬" },
    { id: "vocab", label: "Kelime", description: "Hedef kelimelerle pratik", icon: "📚" },
    { id: "grammar", label: "Gramer", description: "Tek yapı, net örnek", icon: "🧩" },
];

interface Correction {
    wrong: string;
    right: string;
    explanation: string;
}

interface Message {
    role: "user" | "assistant";
    content: string;
    imageUrl?: string;
    corrections?: Correction[];
}

interface FeedbackData {
    score: number;
    grammar: string;
    vocabulary: string;
    tip: string;
}



// Component for Interactive Inline Corrections
function UserMessageBubble({ content, corrections }: { content: string, corrections?: Correction[] }) {
    if (!corrections || corrections.length === 0) {
        return <div className="whitespace-pre-wrap leading-relaxed">{content}</div>;
    }

    let elements: React.ReactNode[] = [content];

    corrections.forEach(corr => {
        const wrongText = corr.wrong;
        if (!wrongText || wrongText.length < 2) return;
        
        // Remove trailing punctuation from wrongText to match inside the string more robustly
        const cleanWrongText = wrongText.replace(/[.,!?]$/, "").trim();
        if (!cleanWrongText) return;

        const newElements: React.ReactNode[] = [];
        elements.forEach((el, index) => {
            if (typeof el === 'string') {
                const parts = el.split(cleanWrongText);
                parts.forEach((part, i) => {
                    newElements.push(part);
                    if (i < parts.length - 1) {
                        newElements.push(
                            <div key={`${index}-${i}`} className="relative inline-block group cursor-help font-medium">
                                <span className="underline decoration-wavy decoration-rose-300 decoration-2 underline-offset-4 text-white hover:text-rose-100 transition-colors">
                                    {cleanWrongText}
                                </span>
                                {/* TOOLTIP */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-50 animate-in fade-in slide-in-from-bottom-2 drop-shadow-2xl">
                                    <div className="bg-slate-900 border border-slate-700/50 text-white text-xs p-3.5 rounded-2xl min-w-[220px] max-w-[280px] whitespace-normal relative overflow-hidden">
                                        {/* Glow Effect */}
                                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-500/20 blur-2xl rounded-full" />
                                        
                                        <div className="flex items-start gap-2.5 mb-2 relative z-10">
                                            <div className="bg-emerald-500/20 p-1.5 rounded-full shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <span className="font-bold text-emerald-300 text-sm mt-0.5 tracking-wide">{corr.right}</span>
                                        </div>
                                        <p className="text-slate-300 leading-relaxed text-[12px] border-t border-slate-700/60 pt-2.5 mt-2.5 relative z-10">
                                            {corr.explanation}
                                        </p>
                                    </div>
                                    <div className="w-3 h-3 bg-slate-900 border-r border-b border-slate-700/50 rotate-45 -mt-1.5 rounded-sm" />
                                </div>
                            </div>
                        );
                    }
                });
            } else {
                newElements.push(el);
            }
        });
        elements = newElements;
    });

    return <div className="leading-relaxed whitespace-pre-wrap break-words">{elements}</div>;
}

export default function ShelldonPage() {
    // === STATE ===
    const { currentLanguage, currentLevel, progress } = useLanguage();
    
    // === STATE ===
    const [selectedLang, setSelectedLang] = useState(currentLanguage?.code || "");
    const [practiceMode, setPracticeMode] = useState<ShelldonPracticeMode>("speaking");
    const [selectedScenario, setSelectedScenario] = useState<ShelldonScenario | null>(null);
    const [isInChat, setIsInChat] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [shelldonState, setShelldonState] = useState<ShelldonState>("idle");
    const [turnCount, setTurnCount] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [feedback, setFeedback] = useState<FeedbackData | null>(null);
    const [showTextInput, setShowTextInput] = useState(false);
    
    // Memory and Mode States
    const [userMemory, setUserMemory] = useState<any>(null);
    const [isCallMode, setIsCallMode] = useState(false);
    
    // Yeni stateler (Hint & Görevler)
    const [isLoadingHint, setIsLoadingHint] = useState(false);
    const [currentHint, setCurrentHint] = useState<string | null>(null);
    const [completedObjectives, setCompletedObjectives] = useState<number[]>([]);
    const [sessionSummary, setSessionSummary] = useState<string | null>(null);
    const [sessionGoal, setSessionGoal] = useState<string | null>(null);
    const [repeatQueue, setRepeatQueue] = useState<string[]>([]);
    const [memory, setMemory] = useState<ConversationMemory>(createEmptyMemory());
    
    // UI states
    const [showCommandMenu, setShowCommandMenu] = useState(false);
    const [knowledgeHint, setKnowledgeHint] = useState<KnowledgeResult | null>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Hooks
    const { addXp, completeLesson } = useUserProgress();
    const { userStats, dailyStats } = useShelldon();

    // Sync selectedLang with global language
    useEffect(() => {
        if (currentLanguage?.code) {
            setSelectedLang(currentLanguage.code);
        }
    }, [currentLanguage]);
    
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
        isMouthOpen,
    } = useSpeech(selectedLang || currentLanguage?.code || "de", {
        continuousMode: isCallMode,
        onSilence: (text) => {
            if (text.trim() && !isLoading) {
                stopListening();
                handleSendMessage(text.trim());
            }
        }
    });

    const MAX_TURNS = 15;
    const practiceModeLabel = PRACTICE_MODES.find((mode) => mode.id === practiceMode)?.label ?? "Konuşma";

    const buildLessonContext = useCallback(
        (langCode: string, levelCode: string) => {
            const langMeta = getLanguageByCode(langCode) || currentLanguage;
            const completedLessons = progress[langCode]?.completedLessons ?? [];

            if (completedLessons.length === 0) {
                return `Kullanıcı ${langMeta.name} ${levelCode} seviyesinde. Genel pratik yap.`;
            }

            const lastLessonId = Math.max(...completedLessons);
            const unitInfo = findUnitByLessonId(lastLessonId);
            if (!unitInfo) {
                return `Kullanıcı ${langMeta.name} ${levelCode} seviyesinde. Son ders bilgisi bulunamadı, genel pratik yap.`;
            }

            const lastLesson = unitInfo.unit.lessons.find(l => l.id === lastLessonId);
            const lessonTitle = lastLesson?.title ?? lastLesson?.type ?? "Ders";

            return `Kullanıcı ${langMeta.name} ${unitInfo.levelCode} seviyesinde. Son tamamlanan ders: Ünite ${unitInfo.unit.id} (${unitInfo.unit.title}) • ${lessonTitle}. Öncelik: bu ünitenin temasıyla ilgili kısa bir ısınma sorusu ve örnekler.`;
        },
        [currentLanguage, progress]
    );

    const buildSessionSummary = useCallback(() => {
        if (!selectedScenario) return "Bugün kısa bir pratik yaptın.";
        if (completedObjectives.length === 0) {
            return `${selectedScenario.titleTr} içinde temel ifadeleri denedin.`;
        }
        if (completedObjectives.length === 1) {
            return `${selectedScenario.titleTr} içinde 1 hedefi tamamladın.`;
        }
        return `${selectedScenario.titleTr} içinde ${completedObjectives.length} hedefi tamamladın.`;
    }, [selectedScenario, completedObjectives]);

    const buildSessionGoal = useCallback(() => {
        if (!selectedScenario) return "Mini hedef: Bir sonraki seans kısa cümlelerle devam et.";
        const langCode = selectedLang || currentLanguage?.code || "de";
        const objectives = selectedScenario.objectives[langCode] || [];
        const nextIndex = objectives.findIndex((_, idx) => !completedObjectives.includes(idx));
        if (nextIndex !== -1) {
            return `Mini hedef: ${objectives[nextIndex]}`;
        }
        return "Mini hedef: Bir sonraki seans daha uzun cümleler kur.";
    }, [selectedScenario, completedObjectives, selectedLang, currentLanguage]);

    // === MEMORY LOAD (REMOVED - offline mode) ===

    useEffect(() => {
        if (!isSpeaking && (shelldonState === "speaking" || shelldonState === "happy" || shelldonState === "surprised")) {
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
    }, [messages]);

    // === SAHNE BAŞLAT (OFFLINE) ===
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
        setSessionSummary(null);
        setSessionGoal(null);
        setRepeatQueue([]);
        setMemory(createEmptyMemory());

        const langCode = selectedLang || currentLanguage?.code || "de";

        // Offline intro — no API call
        const intro = createShelldonIntro(scenario, langCode, progress[langCode]?.currentLevel || currentLevel?.code || "A1", practiceMode);
        
        setMessages([{ role: "assistant", content: intro.message }]);
        setShelldonState(intro.mood as ShelldonState);
        speak(intro.message);
        setIsLoading(false);
    };

    // === MESAJ GÖNDER (OFFLINE) ===
    const handleSendMessage = async (text?: string) => {
        const messageText = text || inputValue.trim();
        if (!messageText || isLoading || !selectedScenario) return;

        setInputValue("");
        setShowCommandMenu(false);
        setCurrentHint(null);
        setShelldonState("thinking");
        setIsLoading(true);

        // Check for knowledge hint
        const kHint = getKnowledgeHint(messageText);
        setKnowledgeHint(kHint);

        // --- COMMAND INTERCEPTION ---
        if (messageText.startsWith("/clear")) {
            setMessages([]);
            setTurnCount(0);
            setRepeatQueue([]);
            setMemory(createEmptyMemory());
            setIsLoading(false);
            setShelldonState("idle");
            return;
        } else if (messageText.startsWith("/game")) {
            const langCode = selectedLang || currentLanguage?.code || "de";
            const emojis = getEmojiGame(langCode, Date.now());
            const aiMsg: Message = { role: "assistant", content: emojis };
            setMessages(prev => [...prev, { role: "user", content: messageText }, aiMsg]);
            setShelldonState("happy");
            setIsLoading(false);
            return;
        } else if (messageText.startsWith("/sert")) {
            setMemory(prev => ({ ...prev, persona: "strict" }));
            const aiMsg: Message = { role: "assistant", content: "Tamam, artık daha ciddi ve sert bir öğretmen olacağım. Hata yapmamaya çalış! 🐢🔥" };
            setMessages(prev => [...prev, { role: "user", content: messageText }, aiMsg]);
            setIsLoading(false);
            return;
        } else if (messageText.startsWith("/arkadas")) {
            setMemory(prev => ({ ...prev, persona: "friendly" }));
            const aiMsg: Message = { role: "assistant", content: "Harika! Artık kankayız. Rahat takılalım! 🐢✨" };
            setMessages(prev => [...prev, { role: "user", content: messageText }, aiMsg]);
            setIsLoading(false);
            return;
        } else if (messageText.startsWith("/resmi") || messageText.startsWith("/formal")) {
            setMemory(prev => ({ ...prev, persona: "formal" }));
            const aiMsg: Message = { role: "assistant", content: "Anlaşıldı. Bundan sonra daha profesyonel ve resmi bir üslup kullanacağım. 🐢💼" };
            setMessages(prev => [...prev, { role: "user", content: messageText }, aiMsg]);
            setIsLoading(false);
            return;
        }

        const userMsg: Message = { role: "user", content: messageText };
        const updatedMessages = [...messages, userMsg];
        setMessages(updatedMessages);
        setTurnCount((t) => t + 1);

        // Offline reply — no API call
        const langCode = selectedLang || currentLanguage?.code || "de";
        const levelCode = progress[langCode]?.currentLevel || currentLevel?.code || "A1";

        const reply = createShelldonReply({
            scenario: selectedScenario,
            language: langCode,
            level: levelCode,
            userMessage: messageText,
            messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
            turnIndex: turnCount,
            completedObjectives,
            practiceMode,
            memory,
        });

        // Update memory
        setMemory(reply.updatedMemory);

        // Handle corrections
        const corrections: Correction[] = reply.correction ? [reply.correction] : [];
        if (corrections.length > 0) {
            setRepeatQueue((prev) => {
                const next = [...prev];
                corrections.forEach((corr) => {
                    const phrase = corr.right.trim();
                    if (!phrase) return;
                    if (!next.includes(phrase)) next.push(phrase);
                });
                return next.slice(-5);
            });

            setMessages(prev => {
                const newMsgs = [...prev];
                const lastUserIndex = newMsgs.findLastIndex(m => m.role === "user");
                if (lastUserIndex !== -1) {
                    newMsgs[lastUserIndex] = { ...newMsgs[lastUserIndex], corrections };
                }
                return newMsgs;
            });
        }

        setCompletedObjectives(reply.completedObjectives);

        const aiMsg: Message = { role: "assistant", content: reply.message };
        setMessages((prev) => [...prev, aiMsg]);
        setShelldonState(reply.mood as ShelldonState);
        speak(reply.message);

        if (turnCount + 1 >= MAX_TURNS) {
            setTimeout(() => finishConversation([...updatedMessages, aiMsg]), 3000);
        }

        setIsLoading(false);
    };

    // === KONUŞMAYI BİTİR (OFFLINE) ===
    const finishConversation = async (allMessages: Message[]) => {
        setIsFinished(true);
        setShelldonState("happy");
        setSessionSummary(buildSessionSummary());
        setSessionGoal(buildSessionGoal());

        // XP ver
        addXp(15);
        completeLesson();

        // Offline feedback — no API call
        const langCode = selectedLang || currentLanguage?.code || "en";
        const objectives = selectedScenario?.objectives[langCode] || [];
        const fb = createShelldonFeedback(
            allMessages.map(m => ({ role: m.role, content: m.content })),
            langCode,
            completedObjectives,
            objectives.length
        );
        setFeedback(fb);
    };

    // === İPUCU AL (OFFLINE) ===
    const handleGetHint = async () => {
        if (!selectedScenario || isLoading || isLoadingHint) return;

        setIsLoadingHint(true);
        const langCode = selectedLang || currentLanguage?.code || "en";
        const hint = createShelldonHint(selectedScenario, langCode, completedObjectives, turnCount);
        setCurrentHint(hint);
        setIsLoadingHint(false);
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

    // === INPUT CHANGES ===
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);
        if (val === "/") {
            setShowCommandMenu(true);
        } else if (!val.startsWith("/")) {
            setShowCommandMenu(false);
        }
    };

    // === IMAGE ATTACHMENT ===
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setShowTextInput(true); // Switch to text mode to show preview
            };
            reader.readAsDataURL(file);
        }
    };
    const cancelImage = () => setSelectedImage(null);

    // === KEY PRESS ===
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        } else if (e.key === "Escape") {
            setShowCommandMenu(false);
        }
    };

    const handleCommandClick = (cmd: string) => {
        setInputValue(cmd + (cmd === "/clear" || cmd === "/game" ? "" : " "));
        setShowCommandMenu(false);
        inputRef.current?.focus();
        
        // Auto send clear and game
        if (cmd === "/clear" || cmd === "/game") {
            setTimeout(() => handleSendMessage(cmd), 50);
        }
    };

    const handleRepeatClick = (phrase: string) => {
        if (isLoading) return;
        setRepeatQueue((prev) => prev.filter((item) => item !== phrase));
        handleSendMessage(phrase);
    };

    // === GERİ DÖN ===
    const goBack = () => {
        // Memory extraction removed — offline mode

        stopSpeaking();
        setIsInChat(false);
        setCompletedObjectives([]);
        setTurnCount(0);
        setMemory(createEmptyMemory());
        setShelldonState("idle");
        setIsFinished(false);
        setFeedback(null);
        setSessionSummary(null);
        setSessionGoal(null);
        setTurnCount(0);
        setSelectedImage(null);
        setRepeatQueue([]);
    };

    // =============================================
    // === BİTİŞ EKRANI ===
    // =============================================
    if (isFinished) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 flex flex-col items-center justify-center p-6">
                {/* Avatar */}
                <ShelldonAvatar state="happy" language={selectedLang || currentLanguage?.code || "en"} size={160} className="mb-6" />

                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 text-center">
                    Harika Konuşma! 🎉
                </h1>
                <p className="text-slate-500 mb-6 font-medium text-center">
                    {selectedScenario?.titleTr} senaryosunu tamamladın!
                </p>

                {/* XP */}
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-emerald-100 mb-6 flex items-center gap-4 w-full max-w-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="text-2xl font-black text-emerald-600">+15 XP</p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Konuşma pratiği bonus</p>
                    </div>
                </div>

                {/* Feedback */}
                {feedback ? (
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full max-w-md mb-6 space-y-5 animate-in slide-in-from-bottom-4 duration-500">
                        {/* Skor */}
                        <div className="text-center">
                            <p className="text-5xl font-black text-emerald-500 mb-1">{feedback.score}</p>
                            <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Puan</p>
                        </div>

                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                            <div
                                className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1000"
                                style={{ width: `${feedback.score}%` }}
                            />
                        </div>

                        <div className="space-y-4 text-sm">
                            <div className="flex gap-4 items-start bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
                                <div className="bg-indigo-100 p-2 rounded-lg shrink-0">
                                    <MessageCircle className="w-4 h-4 text-indigo-600" />
                                </div>
                                <div>
                                    <span className="font-bold text-indigo-600 text-[11px] uppercase tracking-wider block mb-1">Gramer</span>
                                    <span className="text-slate-600 font-medium leading-relaxed">{feedback.grammar}</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
                                <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                                    <Sparkles className="w-4 h-4 text-amber-600" />
                                </div>
                                <div>
                                    <span className="font-bold text-amber-600 text-[11px] uppercase tracking-wider block mb-1">Kelime</span>
                                    <span className="text-slate-600 font-medium leading-relaxed">{feedback.vocabulary}</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
                                <div className="bg-emerald-100 p-2 rounded-lg shrink-0">
                                    <Lightbulb className="w-4 h-4 text-emerald-600" />
                                </div>
                                <div>
                                    <span className="font-bold text-emerald-600 text-[11px] uppercase tracking-wider block mb-1">Öneri</span>
                                    <span className="text-slate-600 font-medium leading-relaxed">{feedback.tip}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4 py-12 text-slate-400 mb-6 bg-white/50 rounded-2xl w-full max-w-md border border-dashed border-slate-200">
                        <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
                        <span className="text-sm font-bold uppercase tracking-widest animate-pulse">Analiz yapılıyor...</span>
                    </div>
                )}

                {(sessionSummary || sessionGoal) && (
                    <div className="w-full max-w-md space-y-4 mb-8">
                        {sessionSummary && (
                            <div className="bg-emerald-50 border border-emerald-100/50 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600/70">Oturum Özeti</p>
                                </div>
                                <p className="text-sm text-emerald-900 font-semibold leading-relaxed">{sessionSummary}</p>
                            </div>
                        )}
                        {sessionGoal && (
                            <div className="bg-amber-50 border border-amber-100/50 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600/70">Sıradaki Hedef</p>
                                </div>
                                <p className="text-sm text-amber-900 font-semibold leading-relaxed">{sessionGoal}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Butonlar */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                    <Button
                        onClick={goBack}
                        variant="outline"
                        className="flex-1 rounded-2xl py-7 font-black uppercase tracking-widest text-xs border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm"
                    >
                        Senaryolar
                    </Button>
                    <Button
                        onClick={() => {
                            setIsFinished(false);
                            setFeedback(null);
                            setSessionSummary(null);
                            setSessionGoal(null);
                            setTurnCount(0);
                            setMessages([]);
                            setRepeatQueue([]);
                            if (selectedScenario) startScenario(selectedScenario);
                        }}
                        className="flex-1 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl py-7 font-black uppercase tracking-widest text-xs shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all border-none"
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
        const langCode = selectedLang || currentLanguage?.code || "en";
        const suggestions = selectedScenario.suggestedPhrases[langCode] || [];

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
                                        Mikro pratik • {practiceModeLabel} • Tur {Math.min(turnCount + 1, MAX_TURNS)}/{MAX_TURNS}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* === ANA İÇERİK === */}
                <div className="flex-1 flex flex-col items-center relative z-10 overflow-hidden">
                    {/* Scene 3D veya Shelldon Avatar */}
                    <div className="w-full h-[25vh] sm:h-[30vh] md:h-[40vh] relative shrink-0 border-b border-white/20 bg-slate-900/5">
                        {isCallMode ? (
                            <div className="absolute inset-0">
                                <Scene3D
                                    sceneData={selectedScenario}
                                    messages={messages}
                                    isLoading={isLoading}
                                    isMouthOpen={isMouthOpen}
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center pt-6 pb-2">
                                    <ShelldonAvatar
                                        state={shelldonState}
                                        language={selectedLang || currentLanguage?.code || "en"}
                                        size={150}
                                    />
                            </div>
                        )}

                        {/* Canlı Ses Modu (Call Mode) Toggle */}
                        <div className="absolute top-4 right-4 z-50">
                            <Button
                                variant={isCallMode ? "destructive" : "secondary"}
                                size="sm"
                                onClick={() => {
                                    setIsCallMode(!isCallMode);
                                    if (!isCallMode) {
                                        startListening();
                                    } else {
                                        stopListening();
                                    }
                                }}
                                className={cn(
                                    "rounded-full shadow-lg font-bold flex items-center gap-2 transition-all",
                                    isCallMode ? "bg-rose-500 hover:bg-rose-600 !text-white animate-pulse" : "bg-white/90 hover:bg-white text-emerald-600 border border-emerald-100"
                                )}
                            >
                                {isCallMode ? <PhoneOff className="w-4 h-4 text-white" /> : <Phone className="w-4 h-4 text-emerald-500" />}
                                {isCallMode ? "Aramayı Bitir" : "Canlı Görüşme"}
                            </Button>
                        </div>
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

                    {/* Mesaj Geçmişi */}
                    <div
                        ref={messagesContainerRef}
                        className="flex-1 w-full max-w-lg px-6 overflow-y-auto space-y-4 pb-2 lg:pb-4 scroll-smooth"
                    >
                        {/* Tooltip Padding Spacer */}
                        <div className="h-16 shrink-0" aria-hidden="true" />
                        
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "text-sm px-4 py-3 rounded-2xl max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-sm flex flex-col gap-2",
                                    msg.role === "user"
                                        ? "bg-emerald-500 text-white ml-auto rounded-br-sm"
                                        : "bg-white text-slate-700 border border-slate-100 rounded-bl-sm"
                                )}
                            >
                                {msg.imageUrl && (
                                    <img src={msg.imageUrl} alt="attachment" className="rounded-xl w-48 object-cover border border-white/20 shadow-sm" />
                                )}
                                {msg.role === "user" ? (
                                    <UserMessageBubble content={msg.content} corrections={msg.corrections} />
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                                        {speechSupported && i === messages.length - 1 && (
                                            <button
                                                onClick={() => isSpeaking ? stopSpeaking() : speak(msg.content)}
                                                className="mt-1 flex items-center gap-1.5 text-[11px] font-bold text-emerald-500 hover:text-emerald-700 w-fit"
                                            >
                                                {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                                                {isSpeaking ? "Durdur" : "Tekrar Dinle"}
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isLoading && (
                            <div className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-100 rounded-2xl rounded-bl-sm w-fit animate-in fade-in zoom-in-95 shadow-sm">
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
                                </div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">Shelldon Düşünüyor</span>
                            </div>
                        )}

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

                        {/* Smart Knowledge Hint (Static Guide Integration) */}
                        {knowledgeHint && (
                            <div className="flex flex-col items-center gap-2 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="bg-white border-2 border-indigo-100 p-4 rounded-3xl shadow-xl shadow-indigo-500/10 max-w-[90%] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 rounded-bl-full group-hover:scale-110 transition-transform" />
                                    <div className="flex items-start gap-3">
                                        <div className="bg-indigo-500 p-2 rounded-xl shrink-0 shadow-lg shadow-indigo-200">
                                            <GraduationCap className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Shelldon Öneriyor</p>
                                            <h4 className="font-bold text-slate-800 text-sm mb-1">{knowledgeHint.title}</h4>
                                            <p className="text-xs text-slate-500 line-clamp-1 mb-3">{knowledgeHint.description}</p>
                                            <Link href={`/learn/unit/${knowledgeHint.unitId}`}>
                                                <Button size="sm" className="w-full bg-indigo-600 hover:bg-emerald-600 text-white font-bold h-8 rounded-xl text-xs transition-all">
                                                    Bilgi Bankasında İncele
                                                    <ArrowLeft className="w-3 h-3 ml-2 rotate-180" />
                                                </Button>
                                            </Link>
                                        </div>
                                        <button 
                                            onClick={() => setKnowledgeHint(null)}
                                            className="text-slate-300 hover:text-slate-500 transition-colors"
                                        >
                                            <XCircle className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* === ALT PANEL === */}
                <div className="fixed bottom-20 lg:bottom-0 left-0 right-0 lg:left-auto lg:right-auto lg:sticky bg-white/95 backdrop-blur-xl border-t border-emerald-100 p-4 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
                    <div className="max-w-lg mx-auto">
                        {/* Hata mesajı */}
                        {speechError && (
                            <p className="text-xs text-rose-500 font-bold text-center mb-2">⚠️ {speechError}</p>
                        )}

                        {/* Hata tekrarları */}
                        {repeatQueue.length > 0 && (
                            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                                {repeatQueue.map((phrase, i) => (
                                    <button
                                        key={`${phrase}-${i}`}
                                        onClick={() => handleRepeatClick(phrase)}
                                        disabled={isLoading}
                                        className="shrink-0 px-3 py-1.5 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-200 hover:bg-amber-100 transition-colors disabled:opacity-50 whitespace-nowrap"
                                    >
                                        Tekrar: {phrase}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Öneri cümleleri */}
                        {suggestions.length > 0 && turnCount < MAX_TURNS && (
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
                                <div className="flex-1 relative">
                                    {/* COMMAND MENU */}
                                    {showCommandMenu && (
                                        <div className="absolute bottom-[calc(100%+12px)] left-0 w-full bg-white border border-slate-200 shadow-xl rounded-2xl p-2 z-50 animate-in fade-in slide-in-from-bottom-2">
                                            <div className="text-[10px] font-black tracking-wider text-slate-400 uppercase mb-2 px-2">Kısayol Komutları</div>
                                            <div className="space-y-1">
                                                <button onClick={() => handleCommandClick("/roleplay")} className="w-full flex items-center justify-between p-2 hover:bg-emerald-50 rounded-xl group transition-colors text-left">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xl group-hover:scale-110 transition-transform">🎭</span>
                                                        <div>
                                                            <div className="text-sm font-bold text-slate-700">/roleplay</div>
                                                            <div className="text-[11px] text-slate-400">Yeni bir role bürünür</div>
                                                        </div>
                                                    </div>
                                                </button>
                                                <button onClick={() => handleCommandClick("/game")} className="w-full flex items-center justify-between p-2 hover:bg-emerald-50 rounded-xl group transition-colors text-left">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xl group-hover:scale-110 transition-transform">🎮</span>
                                                        <div>
                                                            <div className="text-sm font-bold text-slate-700">/game</div>
                                                            <div className="text-[11px] text-slate-400">Emoji kelime oyunu başlatır</div>
                                                        </div>
                                                    </div>
                                                </button>
                                                <button onClick={() => handleCommandClick("/clear")} className="w-full flex items-center justify-between p-2 hover:bg-rose-50 rounded-xl group transition-colors text-left">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xl group-hover:scale-110 transition-transform">🧹</span>
                                                        <div>
                                                            <div className="text-sm font-bold text-rose-600">/clear</div>
                                                            <div className="text-[11px] text-rose-400">Sohbeti sıfırlar</div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* IMAGE PREVIEW */}
                                    {selectedImage && (
                                        <div className="absolute bottom-[calc(100%+8px)] left-0 bg-white border border-slate-200 shadow-xl rounded-2xl p-2 z-50 animate-in fade-in zoom-in slide-in-from-bottom-2">
                                            <div className="relative">
                                                <img src={selectedImage} alt="Preview" className="w-24 h-24 object-cover rounded-xl" />
                                                <button 
                                                    onClick={cancelImage}
                                                    className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1 shadow-md hover:bg-rose-600 transition-colors"
                                                >
                                                    <XCircle className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-2 bg-slate-50 rounded-2xl px-3 py-2 border border-slate-200 focus-within:border-emerald-300 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
                                        {/* Image Upload Button Inside Input */}
                                        <button 
                                            onClick={() => fileInputRef.current?.click()}
                                            className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-xl transition-colors shrink-0"
                                            title="Fotoğraf Yükle"
                                        >
                                            <ImageIcon className="w-5 h-5" />
                                        </button>
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            className="hidden" 
                                            ref={fileInputRef} 
                                            onChange={handleImageChange} 
                                        />

                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            onKeyDown={handleKeyPress}
                                            placeholder={selectedImage ? "Fotoğraf hakkında bir şey yaz..." : "Mesajını yaz... ('/' ile komutlar)"}
                                            disabled={isLoading}
                                            className="flex-1 bg-transparent text-sm outline-none text-slate-700 placeholder:text-slate-400"
                                        />
                                        <Button
                                            size="icon"
                                            onClick={() => handleSendMessage()}
                                            disabled={(!inputValue.trim() && !selectedImage) || isLoading}
                                            className="h-8 w-8 shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-md"
                                        >
                                            <Send className="w-4 h-4" />
                                        </Button>
                                    </div>
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
                    <ShelldonAvatar state="idle" language={selectedLang || currentLanguage?.code || "de"} size={140} className="mb-4" />
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

                {/* Step 2: Hedef Seçimi */}
                {selectedLang && (
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-black">2</span>
                            Hedef Seç
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {PRACTICE_MODES.map((mode) => (
                                <button
                                    key={mode.id}
                                    onClick={() => setPracticeMode(mode.id)}
                                    className={cn(
                                        "group bg-white hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 border-b-4",
                                        practiceMode === mode.id
                                            ? "border-emerald-300 bg-emerald-50 shadow-lg shadow-emerald-500/10"
                                            : "border-b-slate-100 hover:border-b-emerald-300"
                                    )}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {mode.icon}
                                        </div>
                                        {practiceMode === mode.id && <Check className="w-4 h-4 text-emerald-500" />}
                                    </div>
                                    <div className="text-slate-700 font-bold text-sm mb-1">{mode.label}</div>
                                    <div className="text-slate-400 text-[11px] leading-relaxed">
                                        {mode.description}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>
                )}

                {/* Step 3: Senaryo Seçimi */}
                {selectedLang && (
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-black">3</span>
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
