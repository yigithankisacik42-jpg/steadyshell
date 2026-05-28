"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useQuests } from "@/lib/quests-context";
import { Send, ArrowLeft, Loader2, Check, Theater, Sparkles, Mic, MicOff, Volume2, VolumeX, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SCENE_CATEGORIES, Scene } from "@/lib/scenes";
import { createOfflineSceneIntro, createOfflineSceneReply } from "@/lib/scene-offline";
import { useSpeech } from "@/lib/use-speech";
import { cn } from "@/lib/utils";
import { Scene3D } from "@/components/scene-3d";

const LANGUAGES = [
    { code: 'es', name: 'İspanyolca', flag: '🇪🇸' },
    { code: 'en', name: 'İngilizce', flag: '🇬🇧' },
    { code: 'fr', name: 'Fransızca', flag: '🇫🇷' },
    { code: 'de', name: 'Almanca', flag: '🇩🇪' },
];

const LEVELS = ['A1', 'A2', 'B1', 'B2'];

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

function parseAssistantMessage(content: string) {
    const corrections: { corrected: string; wrong: string }[] = [];
    const regex = /\(✏️\s*["'«“‘{]?(.*?)["'»”’}]?\s*(?:←|<-|instead of|not)\s*["'«“‘{]?(.*?)["'»”’}]?\)/g;
    
    let match;
    const matches: { raw: string; corrected: string; wrong: string }[] = [];
    
    while ((match = regex.exec(content)) !== null) {
        matches.push({
            raw: match[0],
            corrected: match[1].trim(),
            wrong: match[2].trim()
        });
        corrections.push({
            corrected: match[1].trim(),
            wrong: match[2].trim()
        });
    }
    
    let cleanText = content;
    for (const m of matches) {
        cleanText = cleanText.replace(m.raw, '');
    }
    cleanText = cleanText.replace(/\s+/g, ' ').trim();
    
    return { cleanText, corrections };
}

// Loading component for Suspense fallback
function SceneLoading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="text-center">
                <Loader2 className="w-12 h-12 text-indigo-400 animate-spin mx-auto mb-4" />
                <p className="text-white/60">Yükleniyor...</p>
            </div>
        </div>
    );
}

// Main page wrapper with Suspense
export default function SceneModePage() {
    return (
        <Suspense fallback={<SceneLoading />}>
            <SceneContent />
        </Suspense>
    );
}

// Actual content component
function SceneContent() {
    const searchParams = useSearchParams();
    

    const { addXp, completeLesson } = useUserProgress();
    const { addXP: addQuestXP, addLesson: addQuestLesson } = useQuests();

    const [selectedLang, setSelectedLang] = useState<string>('');
    const [selectedLevel, setSelectedLevel] = useState<string>('');
    const [selectedScene, setSelectedScene] = useState<Scene | null>(null);

    const [isInChat, setIsInChat] = useState(false);
    const [is3DMode, setIs3DMode] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasAutoStarted, setHasAutoStarted] = useState(false);
    const [matchedPhrases, setMatchedPhrases] = useState<string[]>([]);
    const [isAiMode, setIsAiMode] = useState<boolean | null>(null); // null = henüz belli değil, true = AI, false = Offline
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [evaluationResult, setEvaluationResult] = useState<{
        score: number;
        feedback: string;
        grammarTip: string;
        vocabularyTip: string;
    } | null>(null);
    const [showEvaluationModal, setShowEvaluationModal] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        isListening,
        transcript,
        startListening,
        stopListening,
        isSpeaking,
        speak,
        stopSpeaking,
        isSupported: speechSupported,
        error: speechError
    } = useSpeech(selectedLang || 'es');

    useEffect(() => {
        if (transcript && !isListening) {
            setInputValue(transcript);
        }
    }, [transcript, isListening]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const finishAndEvaluateScene = async () => {
        if (messages.length < 2 || !selectedScene) return;
        
        setIsEvaluating(true);
        stopSpeaking();
        stopListening();
        
        try {
            const response = await fetch('/api/scene/evaluate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages,
                    scene: selectedScene,
                    language: selectedLang || 'es',
                    level: selectedLevel || 'A1'
                })
            });
            
            const data = await response.json();
            
            if (!response.ok || data.error) {
                throw new Error(data.error || 'Evaluation failed');
            }
            
            setEvaluationResult(data);
            setShowEvaluationModal(true);
            
            // Add XP and trigger completed lesson hooks
            const rewardXp = data.score >= 80 ? 25 : 15;
            addXp(rewardXp);
            addQuestXP(rewardXp);
            addQuestLesson();
            completeLesson();
            
        } catch (error: unknown) {
            console.error('[Scene] Evaluation failed:', error);
            // Offline / failure fallback
            setEvaluationResult({
                score: 80,
                feedback: "Tebrikler! Senaryoyu başarıyla tamamladınız. Canlı diyalog pratikleri dil öğreniminde en etkili yöntemlerden biridir. Harika bir iş çıkardınız!",
                grammarTip: "Diyalog süresince kendinizi güzel ifade ettiniz. Cümle kurarken zaman çekimlerine ve kelime uyumlarına dikkat etmeye devam edin.",
                vocabularyTip: "Bir sonraki pratiklerinizde sahneye özel daha fazla alternatif kelime ve kibar kalıplar kullanmayı deneyebilirsiniz."
            });
            setShowEvaluationModal(true);
            
            const rewardXp = 15;
            addXp(rewardXp);
            addQuestXP(rewardXp);
            addQuestLesson();
            completeLesson();
        } finally {
            setIsEvaluating(false);
        }
    };

    const startScene = async (scene: Scene, langOverride?: string, levelOverride?: string) => {
        const activeLang = langOverride || selectedLang || 'es';
        const activeLevel = levelOverride || selectedLevel || 'A1';

        setSelectedLang(activeLang);
        setSelectedLevel(activeLevel);
        setSelectedScene(scene);
        setIsInChat(true);
        setIsLoading(true);
        setMessages([]);
        setMatchedPhrases([]);
        setIsAiMode(null);

        try {
            const response = await fetch('/api/scene/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: 'Start the scene. Greet me and set the context.' }],
                    scene,
                    language: activeLang,
                    level: activeLevel
                })
            });

            const data = await response.json();

            if (!response.ok || data.error || !data.message) {
                throw new Error(data.error || 'No message');
            }

            setIsAiMode(true);
            setMessages([{ role: 'assistant', content: data.message }]);
            speak(parseAssistantMessage(data.message).cleanText);
        } catch (error: unknown) {
            console.error('[Scene] AI Intro FAILED, switching to offline:', error instanceof Error ? error.message : error);
            // Graceful offline fallback
            setIsAiMode(false);
            const offlineIntro = createOfflineSceneIntro(scene, activeLang, activeLevel);
            setMessages([{ role: 'assistant', content: offlineIntro.message }]);
            speak(parseAssistantMessage(offlineIntro.message).cleanText);
        } finally {
            setIsLoading(false);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading || !selectedScene) return;

        const userMessage = inputValue.trim();
        const currentMessages = [...messages, { role: 'user', content: userMessage }];
        
        setInputValue('');
        setMessages(currentMessages as Message[]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/scene/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: currentMessages,
                    scene: selectedScene,
                    language: selectedLang || 'es',
                    level: selectedLevel || 'A1'
                })
            });

            const data = await response.json();

            if (!response.ok || data.error || !data.message) {
                throw new Error(data.error || 'No message');
            }

            setIsAiMode(true);
            setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
            speak(parseAssistantMessage(data.message).cleanText);
        } catch (error: unknown) {
            console.error('[Scene] AI Reply FAILED, switching to offline:', error instanceof Error ? error.message : error);
            // Graceful offline fallback
            setIsAiMode(false);
            const offlineReply = createOfflineSceneReply({
                scene: selectedScene,
                language: selectedLang || 'es',
                level: selectedLevel || 'A1',
                userMessage,
                matchedPhrases,
                turnIndex: messages.length
            });
            setMessages(prev => [...prev, { role: 'assistant', content: offlineReply.message }]);
            if (offlineReply.newlyMatchedPhrases.length > 0) {
                setMatchedPhrases(prev => [...prev, ...offlineReply.newlyMatchedPhrases]);
            }
            speak(parseAssistantMessage(offlineReply.message).cleanText);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const backToSelection = () => {
        // Eğer en az 2 mesaj varsa XP ver
        if (isInChat && messages.length >= 2) {
            addXp(10);
            addQuestXP(10);
            addQuestLesson();
            completeLesson();
        }
        setIsInChat(false);
        setSelectedScene(null);
        setMessages([]);
        setMatchedPhrases([]);
    };

    // --- Selection Screen ---
    if (!isInChat) {
        return (
            <div className="min-h-screen bg-slate-950 relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-10%] left-[20%] w-[50rem] h-[50rem] bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] bg-fuchsia-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                {/* Header */}
                <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur-xl border-b border-white/10">
                    <div className="max-w-4xl mx-auto px-4 h-[72px] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Link href="/learn">
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10 rounded-xl">
                                    <ArrowLeft className="w-5 h-5" />
                                </Button>
                            </Link>
                            <h1 className="text-xl font-black text-white flex items-center gap-2">
                                <Theater className="w-6 h-6 text-violet-400" />
                                Sahne Modu
                            </h1>
                        </div>
                        <div className="flex items-center gap-2 text-violet-300 text-sm font-medium">
                            <Sparkles className="w-4 h-4" />
                            Gerçek hayat senaryoları
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="max-w-4xl mx-auto px-4 py-8 relative z-10 space-y-10">

                    {/* Step 1: Language */}
                    <section>
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-violet-600 rounded-xl flex items-center justify-center text-sm font-black">1</span>
                            Dil Seç
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {LANGUAGES.map(lang => (
                                <button
                                    key={lang.code}
                                    onClick={() => setSelectedLang(lang.code)}
                                    className={cn(
                                        "flex items-center gap-3 px-5 py-3.5 rounded-2xl font-bold transition-all duration-300 border-b-4",
                                        selectedLang === lang.code
                                            ? "bg-violet-600 text-white border-violet-800 shadow-lg shadow-violet-500/30 scale-105"
                                            : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                                    )}
                                >
                                    <span className="text-2xl">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                    {selectedLang === lang.code && <Check className="w-5 h-5" />}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Step 2: Level */}
                    {selectedLang && (
                        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-violet-600 rounded-xl flex items-center justify-center text-sm font-black">2</span>
                                Seviye Seç
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {LEVELS.map(level => (
                                    <button
                                        key={level}
                                        onClick={() => setSelectedLevel(level)}
                                        className={cn(
                                            "px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 border-b-4",
                                            selectedLevel === level
                                                ? "bg-violet-600 text-white border-violet-800 shadow-lg shadow-violet-500/30 scale-105"
                                                : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                                        )}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Step 3: Scene */}
                    {selectedLang && selectedLevel && (
                        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-violet-600 rounded-xl flex items-center justify-center text-sm font-black">3</span>
                                Senaryo Seç
                            </h2>

                            {SCENE_CATEGORIES.filter(category => {
                                if (!category.id.includes('-practice')) return true;
                                const prefix = `${selectedLang}-${selectedLevel?.toLowerCase()}-`;
                                return category.id.startsWith(prefix);
                            }).map(category => (
                                <div key={category.id} className="mb-8">
                                    <h3 className="text-white/50 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <span>{category.icon}</span>
                                        {category.title}
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {category.scenes.map(scene => (
                                            <button
                                                key={scene.id}
                                                onClick={() => startScene(scene)}
                                                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
                                            >
                                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{scene.icon}</div>
                                                <div className="text-white font-bold text-sm mb-1">{scene.titleTr}</div>
                                                <div className="text-white/40 text-xs leading-relaxed line-clamp-2">{scene.description}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>
                    )}
                </main>
            </div>
        );
    }

    // --- Chat Screen ---
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-violet-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[30rem] h-[30rem] bg-fuchsia-500/10 rounded-full blur-[80px]" />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-3xl mx-auto px-4 h-[72px] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={backToSelection}
                            className="text-slate-400 hover:text-white hover:bg-white/10 rounded-xl"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-violet-500/20 rounded-2xl flex items-center justify-center text-3xl">
                                {selectedScene?.icon}
                            </div>
                            <div>
                                <h1 className="text-white font-bold">{selectedScene?.titleTr}</h1>
                                <p className="text-white/50 text-xs flex items-center gap-2">
                                    <span>{LANGUAGES.find(l => l.code === selectedLang)?.flag}</span>
                                    <span>{selectedLevel}</span>
                                    {isAiMode !== null && (
                                        <span className={cn(
                                            "px-1.5 py-0.5 rounded text-[10px] font-black uppercase",
                                            isAiMode
                                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                                : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                                        )}>
                                            {isAiMode ? "🤖 AI" : "📴 Offline"}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIs3DMode(!is3DMode)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-colors border",
                                is3DMode
                                    ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/20"
                                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                            )}
                        >
                            <Sparkles className="w-4 h-4" />
                            {is3DMode ? "2D Mod" : "3D Mod"}
                        </button>

                        {messages.length >= 2 && (
                            <Button
                                onClick={finishAndEvaluateScene}
                                disabled={isEvaluating}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl shadow-lg shadow-emerald-500/20 border border-emerald-500/30 flex items-center gap-2"
                            >
                                {isEvaluating ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Değerlendiriliyor...
                                    </>
                                ) : (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Senaryoyu Bitir
                                    </>
                                )}
                            </Button>
                        )}
                    </div>
                </div>
            </header>

            {/* Main view switch based on mode */}
            {is3DMode ? (
                <div className="relative flex-1">
                    <Scene3D sceneData={selectedScene} messages={messages} isLoading={isLoading} isMouthOpen={isSpeaking} />
                    
                    {/* Subtitle Overlay removed because speech bubbles exist in 3D props */}
                </div>
            ) : (
                <>
                    {/* Background for 2D */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-violet-600/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-[10%] right-[-10%] w-[30rem] h-[30rem] bg-fuchsia-500/10 rounded-full blur-[80px]" />
                    </div>
 
                    {/* Messages for 2D */}
                    <div className="flex-1 overflow-y-auto pt-24 pb-[180px] lg:pb-[120px] px-4 relative z-10">
                <div className="max-w-3xl mx-auto space-y-5">
                    {messages.map((message, index) => {
                        const parsed = message.role === 'assistant'
                            ? parseAssistantMessage(message.content)
                            : { cleanText: message.content, corrections: [] };

                        return (
                            <div
                                key={index}
                                className={cn(
                                    "flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300",
                                    message.role === 'user' ? "flex-row-reverse" : ""
                                )}
                            >
                                <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                                    message.role === 'user'
                                        ? "bg-violet-600 text-white"
                                        : "bg-white/10 border border-white/10 text-2xl"
                                )}>
                                    {message.role === 'user' ? <User className="w-5 h-5" /> : selectedScene?.icon}
                                </div>

                                <div className={cn(
                                    "max-w-[85%] rounded-[20px] px-5 py-4 shadow-md group",
                                    message.role === 'user'
                                        ? "bg-violet-600 text-white rounded-tr-sm"
                                        : "bg-white/10 text-white border border-white/10 rounded-tl-sm"
                                )}>
                                    <p className="whitespace-pre-wrap leading-relaxed font-medium text-white">{parsed.cleanText}</p>

                                    {/* Premium Correction Cards */}
                                    {parsed.corrections.length > 0 && parsed.corrections.map((corr, cIndex) => (
                                        <div key={cIndex} className="mt-3 p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl flex flex-col gap-2 text-sm animate-in zoom-in-95 duration-200">
                                            <div className="flex items-center gap-1.5 text-rose-400 font-bold text-xs">
                                                <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                                                Shelldon Dilbilgisi İpucu
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                <div className="flex items-center gap-1 text-red-400 bg-red-500/15 px-2.5 py-1 rounded-lg border border-red-500/10 w-fit">
                                                    <span className="text-[10px] font-black uppercase">Hatalı:</span>
                                                    <span className="line-through font-semibold">"{corr.wrong}"</span>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-slate-400 hidden sm:block shrink-0" />
                                                <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-lg border border-emerald-500/10 w-fit">
                                                    <span className="text-[10px] font-black uppercase">Doğru:</span>
                                                    <span className="font-bold">"{corr.corrected}"</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {message.role === 'assistant' && speechSupported && (
                                        <div className="mt-3 pt-3 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => isSpeaking ? stopSpeaking() : speak(parsed.cleanText)}
                                                className="flex items-center gap-1.5 text-xs font-bold text-violet-300 hover:text-violet-100 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors"
                                            >
                                                {isSpeaking ? <><VolumeX className="w-3.5 h-3.5" /> Durdur</> : <><Volume2 className="w-3.5 h-3.5" /> Dinle</>}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {isLoading && (
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
                                {selectedScene?.icon}
                            </div>
                            <div className="bg-white/10 border border-white/10 rounded-[20px] rounded-tl-sm px-5 py-4 flex items-center gap-3">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
                                </div>
                                <span className="text-sm font-bold text-white/50">Sahne partneriniz düşünüyor...</span>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>
            </>
            )}

            {/* Floating Input */}
            <div className="fixed bottom-20 lg:bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/80 via-slate-950/60 to-transparent pt-10 z-50">
                <div className="max-w-3xl mx-auto">
                    {speechError && (
                        <div className="mb-2 p-2 bg-red-500/20 text-red-300 text-xs font-bold rounded-lg text-center border border-red-500/30">
                            ⚠️ {speechError}
                        </div>
                    )}

                    <div className="bg-white/5 p-2 rounded-[24px] shadow-2xl shadow-violet-500/5 border border-white/10 flex items-center gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={isListening ? "Dinleniyor..." : "Mesajınızı yazın..."}
                            disabled={isLoading || isListening}
                            className={cn(
                                "flex-1 bg-transparent h-12 pl-4 pr-4 font-medium text-white placeholder:text-white/40 border-none outline-none",
                                isListening && "placeholder:text-violet-400"
                            )}
                        />

                        <div className="flex items-center gap-1 pr-1">
                            {speechSupported && (
                                <Button
                                    size="icon"
                                    onClick={isListening ? stopListening : startListening}
                                    className={cn(
                                        "h-10 w-10 rounded-xl transition-all duration-300",
                                        isListening
                                            ? "bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/30 animate-pulse"
                                            : "bg-white/10 hover:bg-white/20 text-white/70"
                                    )}
                                >
                                    {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                                </Button>
                            )}

                            <Button
                                size="icon"
                                onClick={sendMessage}
                                disabled={!inputValue.trim() || isLoading}
                                className="h-10 w-10 bg-violet-600 hover:bg-violet-700 text-white rounded-xl shadow-lg shadow-violet-500/30"
                            >
                                <Send className="w-5 h-5 ml-0.5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Evaluation Modal */}
            {showEvaluationModal && evaluationResult && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-slate-900 border border-white/10 rounded-[32px] w-full max-w-2xl overflow-hidden shadow-2xl shadow-violet-500/10 animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
                        
                        {/* Modal Header & Score Section */}
                        <div className="p-6 sm:p-8 bg-gradient-to-b from-violet-600/20 to-transparent border-b border-white/5 flex flex-col items-center text-center relative">
                            <div className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-black text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg animate-bounce">
                                <Sparkles className="w-3.5 h-3.5" />
                                +{evaluationResult.score >= 80 ? 25 : 15} XP Kazanıldı!
                            </div>

                            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center p-1 shadow-xl shadow-violet-500/20 mb-4 animate-in roll-in duration-500">
                                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black text-white">{evaluationResult.score}</span>
                                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Skor</span>
                                </div>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
                                Senaryo Tamamlandı!
                            </h3>
                            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-md">
                                {selectedScene?.titleTr} senaryosu üzerinden yaptığınız pratik başarıyla değerlendirildi.
                            </p>
                        </div>

                        {/* Scrollable Report Content */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                            
                            {/* 1. Feedback Box */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                                <h4 className="text-sm font-bold text-violet-300 flex items-center gap-2">
                                    💬 AI Antrenör Değerlendirmesi
                                </h4>
                                <p className="text-white/80 text-sm leading-relaxed font-medium">
                                    {evaluationResult.feedback}
                                </p>
                            </div>

                            {/* 2. Grammar Tip Box */}
                            <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-5 space-y-2">
                                <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                                    💡 Dilbilgisi Koçu
                                </h4>
                                <p className="text-white/80 text-sm leading-relaxed font-medium">
                                    {evaluationResult.grammarTip}
                                </p>
                            </div>

                            {/* 3. Vocabulary Tip Box */}
                            <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-5 space-y-2">
                                <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                                    📚 Kelime ve Doğallık Önerisi
                                </h4>
                                <p className="text-white/80 text-sm leading-relaxed font-medium">
                                    {evaluationResult.vocabularyTip}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="p-6 bg-slate-900 border-t border-white/10 flex justify-end">
                            <Button
                                onClick={() => {
                                    setShowEvaluationModal(false);
                                    setEvaluationResult(null);
                                    setIsInChat(false);
                                    setSelectedScene(null);
                                    setMessages([]);
                                    setMatchedPhrases([]);
                                }}
                                className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-violet-500/20 text-sm transition-all duration-300 hover:scale-105"
                            >
                                Harika, Devam Et!
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
