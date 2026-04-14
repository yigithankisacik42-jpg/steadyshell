"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, Sparkles, ArrowLeft, BookOpen, MessageCircle, Mic, MicOff, Volume2, VolumeX, Search, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { createLunaReply, type ChatMessage } from "@/lib/luna-offline";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useSpeech } from "@/lib/use-speech";
import { cn } from "@/lib/utils";
import { curriculum, getCurriculum } from "@/lib/curriculum";
import { searchKnowledgeBase, type KnowledgeResult } from "@/lib/knowledge-center";

const LANGUAGES = [
    { code: 'es', name: 'İspanyolca', flag: '🇪🇸' },
    { code: 'en', name: 'İngilizce', flag: '🇬🇧' },
    { code: 'fr', name: 'Fransızca', flag: '🇫🇷' },
    { code: 'de', name: 'Almanca', flag: '🇩🇪' },
];

export default function KnowledgeCenterPage() {
    const { currentLanguage } = useLanguage();
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userLevel, setUserLevel] = useState("A1");
    const [currentMode, setCurrentMode] = useState<"library" | "chat">("library");
    const [searchResults, setSearchResults] = useState<KnowledgeResult[]>([]);
    const [selectedLang, setSelectedLang] = useState(currentLanguage?.code || 'en');
    const { addXp } = useUserProgress();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial Lang Setup
    useEffect(() => {
        if (currentLanguage) {
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
    } = useSpeech(selectedLang);

    useEffect(() => {
        if (transcript && !isListening) {
            setInputValue(transcript);
        }
    }, [transcript, isListening]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Handle Search
    useEffect(() => {
        if (searchQuery.length > 2) {
            const results = searchKnowledgeBase(searchQuery, selectedLang);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, selectedLang]);

    const handleSendMessage = async (text?: string) => {
        const messageText = text || inputValue.trim();
        if (!messageText || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', content: messageText };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);
        setCurrentMode("chat");

        // Use offline logic (Luna rebranded as Shelldon's Library Assistant)
        const response = createLunaReply(messageText, selectedLang, userLevel, "casual");

        if (response.success) {
            const aiMessage: ChatMessage = { role: 'assistant', content: response.message };
            setMessages(prev => [...prev, aiMessage]);
            if (messages.length > 0 && (messages.length + 2) % 4 === 0) {
                addXp(10);
            }
        }
        setIsLoading(false);
    };

    const currentUnits = getCurriculum(selectedLang, userLevel);

    return (
        <div className="flex flex-col h-screen bg-slate-50 relative overflow-hidden">

            {/* --- BACKGROUND DECOR --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[10%] -right-[10%] w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-3xl" />
                <div className="absolute top-[40%] -left-[10%] w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* --- HEADER --- */}
            <header className="fixed top-0 inset-x-0 h-[72px] bg-white/80 backdrop-blur-xl border-b border-indigo-100 z-50 flex items-center justify-between px-4 lg:px-8 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/learn">
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 text-slate-500">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-600 flex items-center justify-center shadow-lg">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="font-bold text-slate-800 text-lg leading-tight">Bilgi Bankası</h1>
                            <p className="text-xs font-medium text-slate-400">
                                {LANGUAGES.find(l => l.code === selectedLang)?.name} • Statik Rehber
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex gap-1 bg-slate-100 p-1 rounded-xl">
                        <Button 
                            variant={currentMode === "library" ? "default" : "ghost"} 
                            size="sm" 
                            className={cn("rounded-lg text-xs font-bold px-4", currentMode === "library" && "shadow-sm")}
                            onClick={() => setCurrentMode("library")}
                        >
                            <BookOpen className="w-3.5 h-3.5 mr-2" />
                            Kütüphane
                        </Button>
                        <Button 
                            variant={currentMode === "chat" ? "default" : "ghost"} 
                            size="sm" 
                            className={cn("rounded-lg text-xs font-bold px-4", currentMode === "chat" && "shadow-sm")}
                            onClick={() => setCurrentMode("chat")}
                        >
                            <MessageCircle className="w-3.5 h-3.5 mr-2" />
                            Asistan
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <select
                            value={userLevel}
                            onChange={(e) => setUserLevel(e.target.value)}
                            className="bg-transparent text-sm font-bold text-slate-600 outline-none cursor-pointer"
                        >
                            <option value="A1">A1 Seviyesi</option>
                            <option value="A2">A2 Seviyesi</option>
                            <option value="B1">B1 Seviyesi</option>
                            <option value="B2">B2 Seviyesi</option>
                        </select>
                    </div>
                </div>
            </header>

            {/* --- CONTENT --- */}
            <main className="flex-1 overflow-y-auto pt-[80px] pb-[100px] px-4 md:px-8">
                <div className="max-w-5xl mx-auto py-8">
                    
                    {currentMode === "library" ? (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            {/* Search Hero */}
                            <div className="text-center space-y-4 mb-12">
                                <h2 className="text-4xl font-black text-slate-800 tracking-tight">Ne öğrenmek istersin?</h2>
                                <p className="text-slate-500 font-medium">Tüm müfredat cebinde, hem de tamamen reklamsız ve çevrimdışı.</p>
                                
                                <div className="max-w-xl mx-auto relative group">
                                    <div className="absolute inset-0 bg-indigo-500/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                                    <div className="relative flex items-center bg-white border-2 border-slate-200 focus-within:border-indigo-500 rounded-2xl px-4 py-1 shadow-sm transition-all">
                                        <Search className="w-5 h-5 text-slate-400" />
                                        <Input 
                                            placeholder="Gramer konusu veya kelime ara..." 
                                            className="border-none shadow-none focus-visible:ring-0 h-10 font-medium"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Results or Grid */}
                            {searchResults.length > 0 ? (
                                <div className="space-y-4">
                                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest pl-2">Arama Sonuçları</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {searchResults.map((res) => (
                                            <Link key={res.unitId} href={`/learn/unit/${res.unitId}`}>
                                                <div className="p-6 bg-white border border-indigo-100 rounded-3xl hover:shadow-xl hover:shadow-indigo-500/10 transition-all group">
                                                    <span className="text-[10px] font-black text-indigo-500 uppercase px-2 py-0.5 bg-indigo-50 rounded-full mb-3 inline-block">Unit {res.unitId}</span>
                                                    <h4 className="font-black text-slate-800 text-lg mb-2 group-hover:text-indigo-600 transition-colors">{res.title}</h4>
                                                    <p className="text-sm text-slate-500 font-medium line-clamp-2">{res.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest pl-2">{userLevel} Üniteleri</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {currentUnits.map((unit) => (
                                            <Link key={unit.id} href={`/learn/unit/${unit.id}`}>
                                                <div className="relative p-7 bg-white border border-slate-100 rounded-[32px] overflow-hidden group hover:border-indigo-200 transition-all hover:shadow-2xl hover:shadow-indigo-500/5">
                                                    <div className={cn("absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-10 rounded-bl-full transition-all group-hover:scale-110", unit.color)} />
                                                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform", unit.color)}>
                                                        <BookOpen className="w-6 h-6 text-white" />
                                                    </div>
                                                    <h4 className="font-black text-slate-800 text-xl mb-2">{unit.title}</h4>
                                                    <p className="text-sm text-slate-500 font-medium">{unit.description}</p>
                                                    <div className="mt-6 flex items-center gap-2 text-indigo-500 font-bold text-xs">
                                                        <span>Derslere Göz At</span>
                                                        <ArrowLeft className="w-4 h-4 rotate-180" />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="max-w-3xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-500 pb-20">
                            {messages.length === 0 && (
                                <div className="text-center py-20 space-y-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-emerald-600 rounded-3xl mx-auto flex items-center justify-center shadow-xl">
                                        <Bot className="w-12 h-12 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-800">Rehber Asistan</h2>
                                    <p className="text-slate-500 max-w-sm mx-auto font-medium">Bana gramer kuralları, kelime anlamları veya sadece sohbet etmek için yazabilirsin.</p>
                                </div>
                            )}

                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300",
                                        message.role === 'user' ? "flex-row-reverse" : ""
                                    )}
                                >
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0",
                                        message.role === 'user' ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-100"
                                    )}>
                                        {message.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-6 h-6" />}
                                    </div>

                                    <div className={cn(
                                        "max-w-[85%] rounded-[24px] px-6 py-4 shadow-sm relative group",
                                        message.role === 'user' ? "bg-indigo-600 text-white rounded-tr-sm" : "bg-white text-slate-700 border border-slate-100 rounded-tl-sm"
                                    )}>
                                        <p className="leading-relaxed whitespace-pre-wrap font-medium text-sm sm:text-base">
                                            {message.content}
                                        </p>
                                        {message.role === 'assistant' && speechSupported && (
                                            <button
                                                onClick={() => isSpeaking ? stopSpeaking() : speak(message.content)}
                                                className="mt-3 flex items-center gap-1.5 text-[10px] font-black uppercase text-indigo-500 hover:text-indigo-700 transition-colors"
                                            >
                                                {isSpeaking ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                                                {isSpeaking ? "Durdur" : "Dinle"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>
            </main>

            {/* --- INPUT (Chat Only) --- */}
            <div className={cn(
                "fixed bottom-0 inset-x-0 p-4 bg-gradient-to-t from-white via-white to-transparent pt-10 z-50 transition-all transform",
                currentMode === "library" ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
            )}>
                <div className="max-w-2xl mx-auto flex gap-2">
                    <div className="flex-1 relative flex items-center bg-white border-2 border-slate-100 focus-within:border-indigo-500 rounded-2xl px-2 shadow-2xl shadow-indigo-500/10">
                        <Input 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Gramer veya kelime sor..." 
                            className="border-none shadow-none focus-visible:ring-0 h-12 font-medium"
                        />
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={isListening ? stopListening : startListening}
                            className={cn("rounded-xl mr-1", isListening && "text-rose-500 animate-pulse")}
                        >
                            <Mic className="w-5 h-5" />
                        </Button>
                    </div>
                    <Button 
                        onClick={() => handleSendMessage()}
                        disabled={!inputValue.trim()}
                        className="h-12 w-12 bg-indigo-600 text-white rounded-2xl shadow-lg hover:bg-indigo-700"
                    >
                        <Send className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
