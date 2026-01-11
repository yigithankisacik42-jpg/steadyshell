"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, Sparkles, ArrowLeft, Loader2, Lightbulb, BookOpen, MessageCircle, Globe, Check, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { sendMessageToAI, type ChatMessage } from "@/lib/ai";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSpeech } from "@/lib/use-speech";

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
    const [selectedLang, setSelectedLang] = useState(currentLanguage?.code || 'es');
    const [hasStarted, setHasStarted] = useState(false);
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

    // Ses tanıma sonucu geldiğinde input'a yaz
    useEffect(() => {
        if (transcript && !isListening) {
            setInputValue(transcript);
        }
    }, [transcript, isListening]);

    // Dil değişince sohbeti sıfırla
    useEffect(() => {
        setMessages([]);
        setHasStarted(false);
        // Dil değişince inputu temizle
        setInputValue("");
    }, [selectedLang]);

    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Send message
    const handleSendMessage = async (text?: string) => {
        const messageText = text || inputValue.trim();
        if (!messageText || isLoading) return;

        // Add user message
        const userMessage: ChatMessage = {
            role: 'user',
            content: messageText
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);
        setHasStarted(true);

        // Send to AI (Güvenli backend API)
        const response = await sendMessageToAI(
            [...messages, userMessage],
            selectedLang,
            userLevel
        );

        if (response.success) {
            const aiMessage: ChatMessage = {
                role: 'assistant',
                content: response.message
            };
            setMessages(prev => [...prev, aiMessage]);
        } else {
            // Error message
            const errorMessage: ChatMessage = {
                role: 'assistant',
                content: `⚠️ ${response.error || 'Bir hata oluştu. Lütfen tekrar deneyin.'}`
            };
            setMessages(prev => [...prev, errorMessage]);
        }

        setIsLoading(false);
    };

    // Handle enter key
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const activeStarters = STARTERS_BY_LANG[selectedLang] || STARTERS_BY_LANG['es'];

    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-indigo-50 to-white">
            {/* Header */}
            <div className="bg-white border-b border-slate-100 px-4 py-3 shadow-sm z-10">
                <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <Link href="/learn">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="font-bold text-slate-800 flex items-center gap-2">
                                    Luna
                                    <span className="text-xs font-normal bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full">AI Tutor</span>
                                </h1>
                                <p className="text-xs text-emerald-500 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    Çevrimiçi • {LANGUAGES.find(l => l.code === selectedLang)?.name}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        {/* Language Selector */}
                        <div className="relative">
                            <Globe className="absolute left-2.5 top-2.5 w-4 h-4 text-indigo-400" />
                            <select
                                value={selectedLang}
                                onChange={(e) => setSelectedLang(e.target.value)}
                                className="pl-9 pr-8 py-2 bg-white border border-indigo-100 text-indigo-600 font-bold text-sm rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer shadow-sm hover:border-indigo-300 transition-colors"
                            >
                                {LANGUAGES.map(lang => (
                                    <option key={lang.code} value={lang.code}>
                                        {lang.flag} {lang.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Level Selector */}
                        <div className="relative">
                            <Sparkles className="absolute left-2.5 top-2.5 w-4 h-4 text-amber-400" />
                            <select
                                value={userLevel}
                                onChange={(e) => setUserLevel(e.target.value)}
                                className="pl-9 pr-8 py-2 bg-white border border-amber-200 text-amber-600 font-bold text-sm rounded-xl focus:ring-2 focus:ring-amber-500 outline-none appearance-none cursor-pointer shadow-sm hover:border-amber-300 transition-colors"
                            >
                                <option value="A1">A1 - Başlangıç</option>
                                <option value="A2">A2 - Temel</option>
                                <option value="B1">B1 - Orta</option>
                                <option value="B2">B2 - İleri</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50">
                <div className="max-w-3xl mx-auto space-y-6">
                    {/* Welcome Message - Only show if no messages */}
                    {!hasStarted && (
                        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                            <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                                <Bot className="w-12 h-12 text-white" />
                            </div>

                            <h2 className="text-3xl font-extrabold text-slate-800 mb-3">
                                ¡Hola! Ben Luna 👋
                            </h2>
                            <p className="text-slate-500 mb-8 max-w-md text-lg leading-relaxed">
                                Senin kişisel <span className="font-bold text-violet-600">{LANGUAGES.find(l => l.code === selectedLang)?.name}</span> öğretmeninim.
                                Hatalarını düzeltip, sana <span className="font-bold text-emerald-600">Türkçe</span> açıklamalar yapacağım.
                            </p>

                            {/* Quick Start Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-8">
                                {activeStarters.map((starter, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(starter.prompt)}
                                        className="bg-white border border-slate-200 rounded-2xl p-4 text-left hover:border-violet-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <Bot className="w-16 h-16" />
                                        </div>
                                        <span className="text-3xl mb-2 block transform group-hover:scale-110 transition-transform duration-200">{starter.icon}</span>
                                        <p className="font-bold text-slate-700 mb-1">{starter.text}</p>
                                        <p className="text-xs text-violet-500 font-medium">
                                            "{starter.prompt}"
                                        </p>
                                    </button>
                                ))}
                            </div>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap justify-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                    <Check className="w-3 h-3" /> Türkçe Açıklamalı
                                </span>
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                    <Lightbulb className="w-3 h-3" /> Hata Düzeltme
                                </span>
                                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> Kelime Önerileri
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Chat Messages */}
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user'
                                ? 'bg-indigo-500'
                                : 'bg-gradient-to-br from-violet-500 to-purple-600'
                                }`}>
                                {message.role === 'user'
                                    ? <User className="w-4 h-4 text-white" />
                                    : <Bot className="w-4 h-4 text-white" />
                                }
                            </div>

                            {/* Message Bubble */}
                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                ? 'bg-indigo-500 text-white rounded-br-sm'
                                : 'bg-white border border-slate-100 shadow-sm rounded-bl-sm'
                                }`}>
                                <p className={`whitespace-pre-wrap ${message.role === 'user' ? 'text-white' : 'text-slate-700'
                                    }`}>
                                    {message.content}
                                </p>
                                {/* Dinle butonu - sadece AI mesajları için */}
                                {message.role === 'assistant' && speechSupported && (
                                    <button
                                        onClick={() => isSpeaking ? stopSpeaking() : speak(message.content)}
                                        className="mt-2 flex items-center gap-1 text-xs text-violet-500 hover:text-violet-700 transition-colors"
                                    >
                                        {isSpeaking ? (
                                            <><VolumeX className="w-3 h-3" /> Durdur</>
                                        ) : (
                                            <><Volume2 className="w-3 h-3" /> Dinle 🔊</>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Loading Indicator */}
                    {isLoading && (
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span className="text-sm">Luna yazıyor...</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="bg-white border-t border-slate-100 p-4">
                <div className="max-w-2xl mx-auto">
                    <div className="flex gap-2">
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={isListening ? "🎤 Dinleniyor..." : "Mesajını yaz veya 🎤 ile konuş"}
                            className={`flex-1 bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus-visible:ring-violet-500 ${isListening ? 'border-red-400 bg-red-50' : ''}`}
                            disabled={isLoading || isListening}
                        />
                        {/* Mikrofon Butonu */}
                        {speechSupported && (
                            <Button
                                onClick={isListening ? stopListening : startListening}
                                disabled={isLoading}
                                className={`rounded-xl px-4 transition-all ${isListening
                                    ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                                    : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                                    }`}
                                title={isListening ? "Kaydı durdur" : "Sesli mesaj gönder"}
                            >
                                {isListening ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5" />}
                            </Button>
                        )}
                        <Button
                            onClick={() => handleSendMessage()}
                            disabled={!inputValue.trim() || isLoading}
                            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl px-4"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <Send className="w-5 h-5" />
                            )}
                        </Button>
                    </div>
                    {/* Ses hatası veya transcript gösterimi */}
                    {speechError && (
                        <p className="text-xs text-red-500 text-center mt-2">⚠️ {speechError}</p>
                    )}
                    <p className="text-xs text-slate-400 text-center mt-2">
                        Luna, Groq AI (Llama 3) tarafından desteklenmektedir • Seviye: {userLevel}
                    </p>
                </div>
            </div>
        </div>
    );
}
