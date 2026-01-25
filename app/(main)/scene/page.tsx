"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, ArrowLeft, Loader2, MessageCircle, Globe, Check, Theater, Sparkles, Mic, MicOff, Volume2, VolumeX, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SCENE_CATEGORIES, getSceneById, buildSceneSystemPrompt, Scene, LANGUAGE_NAMES } from "@/lib/scenes";
import { useSpeech } from "@/lib/use-speech";
import { cn } from "@/lib/utils";

const LANGUAGES = [
    { code: 'es', name: 'İspanyolca', flag: '🇪🇸' },
    { code: 'en', name: 'İngilizce', flag: '🇬🇧' },
    { code: 'fr', name: 'Fransızca', flag: '🇫🇷' },
];

const LEVELS = ['A1', 'A2', 'B1', 'B2'];

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function SceneModePage() {
    const [selectedLang, setSelectedLang] = useState<string>('');
    const [selectedLevel, setSelectedLevel] = useState<string>('');
    const [selectedScene, setSelectedScene] = useState<Scene | null>(null);

    const [isInChat, setIsInChat] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

    const startScene = async (scene: Scene) => {
        setSelectedScene(scene);
        setIsInChat(true);
        setIsLoading(true);
        setMessages([]);

        try {
            const systemPrompt = buildSceneSystemPrompt(selectedLang, selectedLevel, scene);
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: 'Sohbeti başlat.' }
                    ]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                setMessages([{ role: 'assistant', content: `⚠️ API Hatası: ${errorData?.error?.message || 'Lütfen tekrar deneyin.'}` }]);
                return;
            }

            const data = await response.json();
            const aiMessage = data.choices?.[0]?.message?.content;

            if (!aiMessage) {
                setMessages([{ role: 'assistant', content: '⚠️ AI yanıt vermedi. Lütfen tekrar deneyin.' }]);
                return;
            }

            setMessages([{ role: 'assistant', content: aiMessage }]);
        } catch (error) {
            setMessages([{ role: 'assistant', content: '⚠️ Bağlantı hatası. İnternet bağlantınızı kontrol edin.' }]);
        } finally {
            setIsLoading(false);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading || !selectedScene) return;

        const userMessage = inputValue.trim();
        setInputValue('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const systemPrompt = buildSceneSystemPrompt(selectedLang, selectedLevel, selectedScene);
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: [
                        { role: 'system', content: systemPrompt },
                        ...messages.map(m => ({ role: m.role, content: m.content })),
                        { role: 'user', content: userMessage }
                    ]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                setMessages(prev => [...prev, { role: 'assistant', content: `⚠️ API Hatası: ${errorData?.error?.message || 'Lütfen tekrar deneyin.'}` }]);
                return;
            }

            const data = await response.json();
            const aiMessage = data.choices?.[0]?.message?.content;

            if (!aiMessage) {
                setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ AI yanıt vermedi.' }]);
                return;
            }

            setMessages(prev => [...prev, { role: 'assistant', content: aiMessage }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Bağlantı hatası.' }]);
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
        setIsInChat(false);
        setSelectedScene(null);
        setMessages([]);
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

                            {SCENE_CATEGORIES.map(category => (
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
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto pt-4 pb-[120px] px-4 relative z-10">
                <div className="max-w-3xl mx-auto space-y-5">
                    {messages.map((message, index) => (
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
                                <p className="whitespace-pre-wrap leading-relaxed font-medium">{message.content}</p>

                                {message.role === 'assistant' && speechSupported && (
                                    <div className="mt-3 pt-3 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => isSpeaking ? stopSpeaking() : speak(message.content)}
                                            className="flex items-center gap-1.5 text-xs font-bold text-violet-300 hover:text-violet-100 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors"
                                        >
                                            {isSpeaking ? <><VolumeX className="w-3.5 h-3.5" /> Durdur</> : <><Volume2 className="w-3.5 h-3.5" /> Dinle</>}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

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

            {/* Floating Input */}
            <div className="fixed bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-10 z-50">
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
        </div>
    );
}
