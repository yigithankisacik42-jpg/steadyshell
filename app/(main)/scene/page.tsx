"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, ArrowLeft, Loader2, MessageCircle, Globe, Check, Theater, Sparkles, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SCENE_CATEGORIES, getSceneById, buildSceneSystemPrompt, Scene, LANGUAGE_NAMES } from "@/lib/scenes";
import { useSpeech } from "@/lib/use-speech";

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
    // Selection state
    const [selectedLang, setSelectedLang] = useState<string>('');
    const [selectedLevel, setSelectedLevel] = useState<string>('');
    const [selectedScene, setSelectedScene] = useState<Scene | null>(null);

    // Chat state
    const [isInChat, setIsInChat] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

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
    } = useSpeech(selectedLang || 'es');

    // Ses tanıma sonucu geldiğinde input'a yaz
    useEffect(() => {
        if (transcript && !isListening) {
            setInputValue(transcript);
        }
    }, [transcript, isListening]);

    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Start scene - get AI's first message
    const startScene = async (scene: Scene) => {
        setSelectedScene(scene);
        setIsInChat(true);
        setIsLoading(true);
        setMessages([]);

        try {
            const systemPrompt = buildSceneSystemPrompt(selectedLang, selectedLevel, scene);

            // Güvenli backend API'yi çağır
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
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
                console.error('API Error:', errorData);
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
            console.error('Error starting scene:', error);
            setMessages([{ role: 'assistant', content: '⚠️ Bağlantı hatası. İnternet bağlantınızı kontrol edin.' }]);
        } finally {
            setIsLoading(false);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };


    // Send message
    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading || !selectedScene) return;

        const userMessage = inputValue.trim();
        setInputValue('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const systemPrompt = buildSceneSystemPrompt(selectedLang, selectedLevel, selectedScene);

            // Güvenli backend API'yi çağır
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
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
                console.error('API Error:', errorData);
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: `⚠️ API Hatası: ${errorData?.error?.message || 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.'}`
                }]);
                return;
            }

            const data = await response.json();
            const aiMessage = data.choices?.[0]?.message?.content;

            if (!aiMessage) {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: '⚠️ AI yanıt vermedi. Lütfen tekrar deneyin.'
                }]);
                return;
            }

            setMessages(prev => [...prev, { role: 'assistant', content: aiMessage }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: '⚠️ Bağlantı hatası. İnternet bağlantınızı kontrol edin.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle enter key
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Back to scene selection
    const backToSelection = () => {
        setIsInChat(false);
        setSelectedScene(null);
        setMessages([]);
    };

    // Selection Screen
    if (!isInChat) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
                {/* Header */}
                <div className="border-b border-white/10 backdrop-blur-lg bg-black/20 sticky top-0 z-50">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Link href="/learn">
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                    <ArrowLeft className="w-5 h-5" />
                                </Button>
                            </Link>
                            <div className="flex items-center gap-2">
                                <Theater className="w-6 h-6 text-purple-400" />
                                <h1 className="text-xl font-bold text-white">Sahne Modu</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-purple-300">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm">Gerçek hayat senaryoları</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-8">
                    {/* Step 1: Language Selection */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-sm">1</span>
                            Dil Seç
                        </h2>
                        <div className="flex gap-3">
                            {LANGUAGES.map(lang => (
                                <button
                                    key={lang.code}
                                    onClick={() => setSelectedLang(lang.code)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${selectedLang === lang.code
                                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                                        }`}
                                >
                                    <span className="text-2xl">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                    {selectedLang === lang.code && <Check className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Level Selection */}
                    {selectedLang && (
                        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-sm">2</span>
                                Seviye Seç
                            </h2>
                            <div className="flex gap-3">
                                {LEVELS.map(level => (
                                    <button
                                        key={level}
                                        onClick={() => setSelectedLevel(level)}
                                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${selectedLevel === level
                                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                                            }`}
                                    >
                                        {level}
                                        {selectedLevel === level && <Check className="w-4 h-4 inline ml-2" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Scene Selection */}
                    {selectedLang && selectedLevel && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-sm">3</span>
                                Senaryo Seç
                            </h2>

                            {SCENE_CATEGORIES.map(category => (
                                <div key={category.id} className="mb-6">
                                    <h3 className="text-white/60 text-sm font-medium mb-3 flex items-center gap-2">
                                        <span>{category.icon}</span>
                                        {category.title}
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                        {category.scenes.map(scene => (
                                            <button
                                                key={scene.id}
                                                onClick={() => startScene(scene)}
                                                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-xl p-4 text-left transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                                            >
                                                <div className="text-3xl mb-2">{scene.icon}</div>
                                                <div className="text-white font-medium text-sm">{scene.titleTr}</div>
                                                <div className="text-white/40 text-xs mt-1 line-clamp-2">{scene.description}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Chat Screen
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex flex-col">
            {/* Chat Header */}
            <div className="border-b border-white/10 backdrop-blur-lg bg-black/20 sticky top-0 z-50">
                <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={backToSelection}
                            className="text-white hover:bg-white/10"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">{selectedScene?.icon}</span>
                            <div>
                                <div className="text-white font-medium">{selectedScene?.titleTr}</div>
                                <div className="text-white/50 text-xs flex items-center gap-2">
                                    <span>{LANGUAGES.find(l => l.code === selectedLang)?.flag}</span>
                                    <span>{selectedLevel}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
                <div className="max-w-3xl mx-auto space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-white/10 text-white border border-white/10'
                                    }`}
                            >
                                {message.role === 'assistant' && (
                                    <div className="flex items-center gap-2 mb-1 text-purple-300">
                                        <span className="text-lg">{selectedScene?.icon}</span>
                                        <span className="text-xs font-medium">AI</span>
                                    </div>
                                )}
                                <p className="whitespace-pre-wrap">{message.content}</p>
                                {/* Dinle butonu - sadece AI mesajları için */}
                                {message.role === 'assistant' && speechSupported && (
                                    <button
                                        onClick={() => isSpeaking ? stopSpeaking() : speak(message.content)}
                                        className="mt-2 flex items-center gap-1 text-xs text-purple-300 hover:text-purple-100 transition-colors"
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

                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white/10 rounded-2xl px-4 py-3 border border-white/10">
                                <Loader2 className="w-5 h-5 animate-spin text-purple-400" />
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input */}
            <div className="border-t border-white/10 backdrop-blur-lg bg-black/20 p-4">
                <div className="max-w-3xl mx-auto flex gap-3">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={isListening ? "🎤 Dinleniyor..." : `${LANGUAGE_NAMES[selectedLang]?.native || 'Hedef dilde'} yaz veya 🎤 ile konuş`}
                        className={`flex-1 bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 ${isListening ? 'border-red-400 bg-red-500/20' : 'border-white/20'}`}
                        disabled={isLoading || isListening}
                    />
                    {/* Mikrofon Butonu */}
                    {speechSupported && (
                        <Button
                            onClick={isListening ? stopListening : startListening}
                            disabled={isLoading}
                            className={`rounded-xl px-4 transition-all ${isListening
                                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                                : 'bg-white/20 hover:bg-white/30 text-white'
                                }`}
                            title={isListening ? "Kaydı durdur" : "Sesli mesaj gönder"}
                        >
                            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                        </Button>
                    )}
                    <Button
                        onClick={sendMessage}
                        disabled={!inputValue.trim() || isLoading}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 rounded-xl"
                    >
                        <Send className="w-5 h-5" />
                    </Button>
                </div>
                {/* Ses hatası gösterimi */}
                {speechError && (
                    <p className="text-xs text-red-400 text-center mt-2">⚠️ {speechError}</p>
                )}
            </div>
        </div>
    );
}
