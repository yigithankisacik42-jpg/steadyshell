"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, Sparkles, ArrowLeft, BookOpen, MessageCircle, Mic, MicOff, Volume2, VolumeX, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { createLunaReply } from "@/lib/luna-offline";
import { type ChatMessage } from "@/lib/ai";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useSpeech } from "@/lib/use-speech";
import { cn } from "@/lib/utils";

// Dillere göre konuşma başlatıcıları
const STARTERS_BY_LANG: Record<string, { icon: string, text: string, prompt: string }[]> = {
    es: [
        { icon: "👋", text: "Merhaba, nasılsın?", prompt: "Hola, ¿cómo estás?" },
        { icon: "🍕", text: "Yemekler hakkında konuşalım", prompt: "Hablemos de la comida española" },
        { icon: "🌍", text: "Seyahat planı yapalım", prompt: "Quiero planear un viaje a España" },
        { icon: "📚", text: "Geçmiş zamanı anlat", prompt: "¿Puedes explicar el pretérito indefinido?" },
    ],
    en: [
        { icon: "👋", text: "Merhaba, nasılsın?", prompt: "Hello, how are you doing?" },
        { icon: "💼", text: "İş görüşmesi pratiği", prompt: "Let's practice a job interview" },
        { icon: "🎬", text: "Filmlerden konuşalım", prompt: "Let's talk about movies" },
        { icon: "📝", text: "Present Perfect anlat", prompt: "Can you explain Present Perfect tense?" },
    ],
    fr: [
        { icon: "👋", text: "Merhaba, nasılsın?", prompt: "Bonjour, comment allez-vous ?" },
        { icon: "🥐", text: "Fransız mutfağı", prompt: "Parlons de la cuisine française" },
        { icon: "🗼", text: "Paris gezisi", prompt: "Je veux visiter Paris" },
        { icon: "❤️", text: "Aşk sözleri", prompt: "Apprends-moi des mots d'amour" },
    ]
};

const LANGUAGES = [
    { code: 'es', name: 'İspanyolca', flag: '🇪🇸' },
    { code: 'en', name: 'İngilizce', flag: '🇬🇧' },
    { code: 'fr', name: 'Fransızca', flag: '🇫🇷' },
];

export default function AITutorPage() {
    const { currentLanguage } = useLanguage();
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userLevel, setUserLevel] = useState("A1");
    const [currentMode, setCurrentMode] = useState<string>("casual");
    const [lunaMood, setLunaMood] = useState<"default" | "happy" | "thinking" | "correcting">("default");
    const [discoveredWords, setDiscoveredWords] = useState<{word: string, translation: string}[]>([]);
    const [selectedLang, setSelectedLang] = useState(currentLanguage?.code || 'es');
    const [hasStarted, setHasStarted] = useState(false);
    const { addXp } = useUserProgress();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Ses özellikleri
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
    } = useSpeech(selectedLang);

    useEffect(() => {
        if (transcript && !isListening) {
            setInputValue(transcript);
        }
    }, [transcript, isListening]);

    useEffect(() => {
        setMessages([]);
        setHasStarted(false);
        setInputValue("");
    }, [selectedLang]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async (text?: string) => {
        const messageText = text || inputValue.trim();
        if (!messageText || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', content: messageText };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);
        setLunaMood("thinking");
        setHasStarted(true);

        const response = createLunaReply(messageText, selectedLang, userLevel, currentMode);

        if (response.success) {
            const aiMessage: ChatMessage = { role: 'assistant', content: response.message };
            setMessages(prev => [...prev, aiMessage]);
            
            // Mood based on content
            if (response.message.includes("❌ Hata")) {
                setLunaMood("correcting");
            } else {
                setLunaMood("happy");
            }

            // Parse discovered words: **word** (translation)
            const wordRegex = /\*\*(.*?)\*\*\s?\((.*?)\)/g;
            let match;
            const newWords: {word: string, translation: string}[] = [];
            while ((match = wordRegex.exec(response.message)) !== null) {
                newWords.push({ word: match[1], translation: match[2] });
            }
            if (newWords.length > 0) {
                setDiscoveredWords(prev => {
                    const existing = new Set(prev.map(w => w.word));
                    const filtered = newWords.filter(nw => !existing.has(nw.word));
                    return [...prev, ...filtered];
                });
            }

            if (messages.length > 0 && (messages.length + 2) % 4 === 0) {
                addXp(10);
            }
        } else {
            setLunaMood("default");
            const errorMessage: ChatMessage = {
                role: 'assistant',
                content: `⚠️ ${response.error || 'Bir hata oluştu. Lütfen tekrar deneyin.'}`
            };
            setMessages(prev => [...prev, errorMessage]);
        }

        setIsLoading(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const activeStarters = STARTERS_BY_LANG[selectedLang] || STARTERS_BY_LANG['es'];

    return (
        <div className="flex flex-col h-screen bg-slate-50 relative overflow-hidden">

            {/* --- BACKGROUND BLOBS --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[10%] -right-[10%] w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-[40%] -left-[10%] w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* --- HEADER (GLASSMORPHISM) --- */}
            <header className="fixed top-0 inset-x-0 h-[72px] bg-white/70 backdrop-blur-xl border-b border-indigo-100 z-50 flex items-center justify-between px-4 lg:px-8 shadow-sm">

                <div className="flex items-center gap-4">
                    <Link href="/learn">
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 text-slate-500">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300",
                                lunaMood === "thinking" ? "bg-amber-500 scale-110" : 
                                lunaMood === "correcting" ? "bg-rose-500" :
                                lunaMood === "happy" ? "bg-emerald-500 scale-105" : "bg-gradient-to-br from-indigo-500 to-violet-600"
                            )}>
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
                        </div>
                        <div>
                            <h1 className="font-bold text-slate-800 text-lg leading-tight flex items-center gap-2">
                                Luna
                                <span className="px-2 py-0.5 rounded-full bg-indigo-100/80 text-indigo-700 text-[10px] font-black uppercase tracking-wide">
                                    AI Tutor
                                </span>
                            </h1>
                            <p className="text-xs font-medium text-slate-400">
                                {LANGUAGES.find(l => l.code === selectedLang)?.name} • "Çevrimdışı Mod ✨"
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {/* Mode Selector */}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
                        <MessageCircle className="w-4 h-4 text-indigo-500" />
                        <select
                            value={currentMode}
                            onChange={(e) => setCurrentMode(e.target.value)}
                            className="bg-transparent text-sm font-bold text-slate-600 outline-none cursor-pointer"
                        >
                            <option value="casual">Sohbet</option>
                            <option value="scenario">Senaryo</option>
                            <option value="grammar">Dilbilgisi</option>
                        </select>
                    </div>

                    {/* Level Selector */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <select
                            value={userLevel}
                            onChange={(e) => setUserLevel(e.target.value)}
                            className="bg-transparent text-sm font-bold text-slate-600 outline-none cursor-pointer"
                        >
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                        </select>
                    </div>

                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-600">
                        <MoreVertical className="w-5 h-5" />
                    </Button>
                </div>
            </header>

            {/* --- MESSAGES AREA --- */}
            <div className="flex-1 overflow-y-auto pt-[80px] pb-[100px] px-4 scroll-smooth">
                <div className="max-w-3xl mx-auto space-y-6">

                    {/* Welcome Screen */}
                    {!hasStarted && (
                        <div className="flex flex-col items-center justify-center min-h-[70vh] animate-fade-in-up">
                            <div className="relative mb-8 group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                                <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center">
                                        <Bot className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 bg-white p-2 rounded-xl shadow-lg rotate-12 group-hover:rotate-6 transition-transform">
                                        <span className="text-2xl">👋</span>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-800 mb-4 text-center">
                                Selam! Ben Luna.
                            </h2>
                            <p className="text-slate-500 text-lg text-center max-w-md mb-10 leading-relaxed">
                                Senin kişisel <strong className="text-indigo-600">{LANGUAGES.find(l => l.code === selectedLang)?.name}</strong> öğretmeninim.
                                Hadi pratik yapmaya başlayalım!
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                                {activeStarters.map((starter, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(starter.prompt)}
                                        className="flex items-start gap-4 p-5 bg-white border border-slate-100 hover:border-indigo-200 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group text-left"
                                    >
                                        <span className="text-4xl group-hover:scale-110 transition-transform duration-300 bg-slate-50 p-2 rounded-xl">{starter.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors mb-1">{starter.text}</h3>
                                            <p className="text-sm text-slate-400 group-hover:text-slate-500 font-medium">"{starter.prompt}"</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Message Bubbles - Adjusted for sidebar space if needed */}
                    <div className="flex gap-6 max-w-5xl mx-auto items-start">
                        <div className="flex-1 space-y-6 overflow-hidden">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300",
                                        message.role === 'user' ? "flex-row-reverse" : ""
                                    )}
                                >
                                    {/* Avatar */}
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0",
                                        message.role === 'user'
                                            ? "bg-indigo-600 text-white"
                                            : "bg-white text-indigo-600 border border-indigo-100"
                                    )}>
                                        {message.role === 'user'
                                            ? <User className="w-5 h-5" />
                                            : <Bot className="w-6 h-6" />
                                        }
                                    </div>

                                    {/* Bubble */}
                                    <div className={cn(
                                        "max-w-[85%] rounded-[20px] px-6 py-4 shadow-sm relative group",
                                        message.role === 'user'
                                            ? "bg-indigo-600 text-white rounded-tr-sm"
                                            : "bg-white text-slate-700 border border-slate-100 rounded-tl-sm"
                                    )}>
                                        <p className="leading-relaxed whitespace-pre-wrap font-medium">
                                            {message.content}
                                        </p>

                                        {/* AI Actions */}
                                        {message.role === 'assistant' && speechSupported && (
                                            <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => isSpeaking ? stopSpeaking() : speak(message.content)}
                                                    className="flex items-center gap-1.5 text-xs font-bold text-indigo-500 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
                                                >
                                                    {isSpeaking ? (
                                                        <><VolumeX className="w-3.5 h-3.5" /> Durdur</>
                                                    ) : (
                                                        <><Volume2 className="w-3.5 h-3.5" /> Dinle</>
                                                    )}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white text-indigo-600 border border-indigo-100 flex items-center justify-center shadow-md">
                                        <Bot className="w-6 h-6" />
                                    </div>
                                    <div className="bg-white border border-slate-100 rounded-[20px] rounded-tl-sm px-6 py-4 shadow-sm flex items-center gap-3">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                                        </div>
                                        <span className="text-sm font-bold text-slate-400">Luna düşünüyor...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* DISCOVERED WORDS SIDEBAR */}
                        {hasStarted && discoveredWords.length > 0 && (
                            <div className="hidden xl:block w-64 bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm sticky top-[80px] animate-in slide-in-from-right duration-500">
                                <div className="flex items-center gap-2 mb-4">
                                    <BookOpen className="w-4 h-4 text-indigo-500" />
                                    <h3 className="font-bold text-sm text-slate-800">Yeni Kelimeler</h3>
                                </div>
                                <div className="space-y-3">
                                    {discoveredWords.map((item, idx) => (
                                        <div key={idx} className="group cursor-help">
                                            <p className="text-sm font-bold text-indigo-600 mb-0.5">{item.word}</p>
                                            <p className="text-xs text-slate-400 font-medium">{item.translation}</p>
                                            <div className="h-0.5 w-0 group-hover:w-full bg-indigo-100 transition-all duration-300 mt-1" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- FLOATING INPUT AREA --- */}
            <div className="fixed bottom-0 inset-x-0 p-4 bg-gradient-to-t from-white via-white/80 to-transparent pt-10 z-50">
                <div className="max-w-3xl mx-auto">
                    {speechError && (
                        <div className="mb-2 p-2 bg-red-50 text-red-500 text-xs font-bold rounded-lg text-center border border-red-100">
                            ⚠️ {speechError}
                        </div>
                    )}

                    <div className="bg-white p-2 rounded-[24px] shadow-2xl shadow-indigo-500/10 border border-slate-100 flex items-center gap-2 relative">
                        <div className="flex-1 relative">
    
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder={isListening ? "Dinleniyor..." : "Mesajınızı yazın..."}
                                disabled={isLoading || isListening}
                                className={cn(
                                    "border-none shadow-none focus-visible:ring-0 bg-transparent h-12 pl-4 pr-4 font-medium text-slate-700 placeholder:text-slate-400",
                                    isListening && "placeholder:text-indigo-500"
                                )}
                            />
                        </div>

                        <div className="flex items-center gap-1 pr-1">
                            {/* Mic Button */}
                            {speechSupported && (
                                <Button
                                    size="icon"
                                    onClick={isListening ? stopListening : startListening}
                                    className={cn(
                                        "h-10 w-10 one-click-scale rounded-xl transition-all duration-300",
                                        isListening
                                            ? "bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/30 animate-pulse"
                                            : "bg-slate-50 hover:bg-slate-100 text-slate-500"
                                    )}
                                >
                                    {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                                </Button>
                            )}

                            {/* Send Button */}
                            <Button
                                size="icon"
                                onClick={() => handleSendMessage()}
                                disabled={!inputValue.trim() || isLoading}
                                className="h-10 w-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/30 one-click-scale disabled:opacity-50"
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
