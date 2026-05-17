"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Bot, User, BookOpenCheck, Volume2, Trophy, Sparkles, Send, Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AiTutorChatProps {
    isOpen: boolean;
    onClose: () => void;
    unitTitle: string;
    level: string;
    language: string;
    contextSummary: string;
    initialMessage: string;
    moduleName: string;
    defaultQuickReplies?: { label: string; msg: string }[];
    onComplete?: () => void;
}

const DEFAULT_QUICK_REPLIES = [
    { label: "✅ Anladım, devam", msg: "Anladım, devam edelim." },
    { label: "🔄 Tekrar açıkla", msg: "Bunu biraz daha farklı anlatabilir misin?" },
    { label: "📝 Örnek ver", msg: "Bana birkaç örnek daha verebilir misin?" },
    { label: "🎯 Test et beni", msg: "Hadi beni test et! Bir soru sor." }
];

export function AiTutorChat({
    isOpen,
    onClose,
    unitTitle,
    level,
    language,
    contextSummary,
    initialMessage,
    moduleName,
    defaultQuickReplies = DEFAULT_QUICK_REPLIES,
    onComplete
}: AiTutorChatProps) {
    const [aiMessages, setAiMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
    const [aiInput, setAiInput] = useState("");
    const [aiLoading, setAiLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [showSummary, setShowSummary] = useState(false);
    
    // Voice speech recognition states
    const [isListening, setIsListening] = useState(false);
    const [listeningError, setListeningError] = useState<string | null>(null);
    const recognitionRef = useRef<any>(null);
    
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize chat when opened
    useEffect(() => {
        if (isOpen && aiMessages.length === 0) {
            startChat();
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [aiMessages, aiLoading, displayedText, isOpen]);

    // Cleanup typewriter and speech on unmount to prevent memory leaks
    useEffect(() => {
        return () => {
            if (typingIntervalRef.current) {
                clearInterval(typingIntervalRef.current);
                typingIntervalRef.current = null;
            }
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (e) {
                    // ignore
                }
            }
        };
    }, []);

    // Typewriter effect (race-condition-safe)
    const typeMessage = (fullText: string, onCompleteCB: () => void) => {
        // Always clear previous interval first
        if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
        }
        
        setIsTyping(true);
        setDisplayedText("");
        let i = 0;
        
        typingIntervalRef.current = setInterval(() => {
            if (i < fullText.length - 1) {
                setDisplayedText(prev => prev + fullText.charAt(i));
                i++;
            } else {
                if (typingIntervalRef.current) {
                    clearInterval(typingIntervalRef.current);
                    typingIntervalRef.current = null;
                }
                setIsTyping(false);
                onCompleteCB();
            }
        }, 15);
    };

    // TTS
    const speakText = (text: string, langCode: string) => {
        if (typeof window === 'undefined' || !window.speechSynthesis) return;
        
        // Cancel ongoing speak to avoid overlapping
        try {
            window.speechSynthesis.cancel();
        } catch (e) {
            // ignore
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
        
        const voices = speechSynthesis.getVoices();
        const femaleVoice = voices.find(v => 
            v.lang.startsWith(langCode.split('-')[0]) && 
            (v.name.toLowerCase().includes('female') || 
             v.name.toLowerCase().includes('woman') ||
             v.name.toLowerCase().includes('amelie') ||
             v.name.toLowerCase().includes('marie') ||
             v.name.toLowerCase().includes('céline') ||
             v.name.toLowerCase().includes('zira'))
        ) || voices.find(v => v.lang.startsWith(langCode.split('-')[0]));

        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }

        utterance.rate = 0.9;
        utterance.pitch = 1.1;

        speechSynthesis.speak(utterance);
    };

    // Map Turkish language names → TTS locale codes
    const LANG_NAME_TO_TTS: Record<string, string> = {
        'İspanyolca': 'es-ES', 'Fransızca': 'fr-FR', 'İngilizce': 'en-US',
        'Almanca': 'de-DE', 'İtalyanca': 'it-IT', 'Portekizce': 'pt-PT',
        'es': 'es-ES', 'fr': 'fr-FR', 'en': 'en-US', 'de': 'de-DE', 'it': 'it-IT',
    };

    // Map Turkish language names → ISO 2-letter codes for API
    const LANG_NAME_TO_ISO: Record<string, string> = {
        'İspanyolca': 'es', 'Fransızca': 'fr', 'İngilizce': 'en',
        'Almanca': 'de', 'İtalyanca': 'it', 'Portekizce': 'pt',
    };

    const getLangCode = (): string => {
        return LANG_NAME_TO_TTS[language] || (language.length <= 3 ? language : 'es-ES');
    };

    const normalizeLangForApi = (): string => {
        return LANG_NAME_TO_ISO[language] || (language.length === 2 ? language : 'es');
    };

    // Microphone Speech Recognition Toggle
    const toggleListening = () => {
        if (isListening) {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (e) {
                    console.error("Error stopping recognition:", e);
                }
            }
            setIsListening(false);
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setListeningError("Tarayıcınız ses tanımayı desteklemiyor. Lütfen Chrome veya Edge kullanın.");
            setTimeout(() => setListeningError(null), 4000);
            return;
        }

        setIsListening(true);
        setListeningError(null);

        const rec = new SpeechRecognition();
        rec.lang = getLangCode();
        rec.continuous = false;
        rec.interimResults = false;

        rec.onresult = (event: any) => {
            const transcript = event.results[0]?.[0]?.transcript;
            if (transcript) {
                setAiInput("");
                sendAiMessage(transcript);
            }
        };

        rec.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error);
            if (event.error === 'not-allowed') {
                setListeningError("Mikrofon izni engellendi. Lütfen tarayıcı ayarlarından izin verin.");
            } else if (event.error === 'no-speech') {
                setListeningError("Ses algılanamadı. Mikrofona daha yakın konuşmayı deneyin.");
            } else {
                setListeningError("Ses algılama hatası: " + event.error);
            }
            setIsListening(false);
            setTimeout(() => setListeningError(null), 4000);
        };

        rec.onend = () => {
            setIsListening(false);
        };

        recognitionRef.current = rec;
        try {
            rec.start();
        } catch (e) {
            console.error("Error starting recognition:", e);
            setIsListening(false);
        }
    };

    const startChat = async () => {
        setAiMessages([]);
        setAiLoading(true);
        setShowSummary(false);

        try {
            const response = await fetch('/api/lesson/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: initialMessage }],
                    unitTitle: unitTitle,
                    lessonSummary: contextSummary,
                    language: normalizeLangForApi(),
                    level: level
                })
            });
            const data = await response.json();
            if (data.message) {
                setAiLoading(false);
                typeMessage(data.message, () => {
                    setAiMessages([{ role: 'assistant', content: data.message }]);
                    setDisplayedText('');
                    speakText(data.message, getLangCode()); // Auto play TTS
                });
            } else {
                setAiMessages([{ role: 'assistant', content: '⚠️ AI bağlantı hatası: ' + (data.error || 'Bilinmeyen hata') }]);
                setAiLoading(false);
            }
        } catch {
            setAiMessages([{ role: 'assistant', content: '⚠️ Bağlantı hatası.' }]);
            setAiLoading(false);
        }
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    const sendAiMessage = async (overrideMsg?: string) => {
        const msgToSend = overrideMsg || aiInput.trim();
        if (!msgToSend || aiLoading || isTyping) return;
        
        const newMessages = [...aiMessages, { role: 'user' as const, content: msgToSend }];
        setAiInput('');
        setAiMessages(newMessages);
        setAiLoading(true);

        try {
            const response = await fetch('/api/lesson/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newMessages,
                    unitTitle: unitTitle,
                    lessonSummary: contextSummary,
                    language: normalizeLangForApi(),
                    level: level
                })
            });
            const data = await response.json();
            if (data.message) {
                setAiLoading(false);
                typeMessage(data.message, () => {
                    setAiMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
                    setDisplayedText('');
                    speakText(data.message, getLangCode()); // Auto play TTS
                });
            }
        } catch {
            setAiMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Yanıt alınamadı.' }]);
            setAiLoading(false);
        }
    };

    const handleQuickReply = (msg: string) => {
        sendAiMessage(msg);
    };

    const exitAiMode = () => {
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        setIsTyping(false);
        setDisplayedText('');
        if (aiMessages.length >= 4) {
            setShowSummary(true);
        } else {
            onClose();
            // Reset chat state if we close it completely without summary
            setTimeout(() => setAiMessages([]), 500); 
        }
    };

    if (!isOpen) return null;

    if (showSummary) {
        const assistantMsgCount = aiMessages.filter(m => m.role === 'assistant').length;
        return (
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl text-center space-y-6 animate-in zoom-in-95 duration-300">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-white">Pratik Tamamlandı! 🎉</h2>
                        <p className="text-white/50 text-sm mt-1">{unitTitle} • {level}</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 space-y-3 text-left border border-white/10">
                        <div className="flex items-center justify-between">
                            <span className="text-white/60 text-sm">💬 Sohbet Turları</span>
                            <span className="text-white font-bold">{assistantMsgCount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/60 text-sm">📚 Konu</span>
                            <span className="text-white font-bold text-right text-sm max-w-[180px] truncate">{unitTitle}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/60 text-sm">⭐ Durum</span>
                            <span className="text-emerald-400 font-bold flex items-center gap-1"><Sparkles className="w-4 h-4" /> Harika!</span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={() => { setShowSummary(false); onClose(); onComplete?.(); }}
                            className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            📖 {moduleName}'e Dön
                        </button>
                        <button 
                            onClick={() => { setShowSummary(false); onComplete?.(); }}
                            className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all"
                        >
                            🐢 Devam Et
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const lastMsgIsAssistant = aiMessages.length > 0 && aiMessages[aiMessages.length - 1].role === 'assistant';
    const showQuickReplies = lastMsgIsAssistant && !aiLoading && !isTyping;

    return (
        <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col h-full w-full animate-in fade-in duration-300">
            {/* Header */}
            <div className="w-full px-6 py-4 flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
                <button onClick={exitAiMode} className="text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2">
                        <Bot className="w-5 h-5 text-emerald-400" />
                        <span className="text-white font-bold text-sm">AI Hoca</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">CANLI</span>
                    </div>
                    <p className="text-white/40 text-xs mt-0.5">{unitTitle} • {level}</p>
                </div>
                <button 
                    onClick={exitAiMode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                >
                    <BookOpenCheck className="w-3.5 h-3.5" />
                    {moduleName}
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
                <div className="max-w-2xl mx-auto space-y-4">
                    {aiMessages.map((msg, i) => (
                        <div key={i} className={cn("flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300", msg.role === 'user' ? "flex-row-reverse" : "")}>
                            <div className={cn(
                                "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm",
                                msg.role === 'user' 
                                    ? "bg-indigo-600 text-white" 
                                    : "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
                            )}>
                                {msg.role === 'user' ? <User className="w-4 h-4" /> : '🐢'}
                            </div>
                            <div className="max-w-[85%] flex flex-col gap-1.5">
                                <div className={cn(
                                    "rounded-2xl px-4 py-3 shadow-md",
                                    msg.role === 'user' 
                                        ? "bg-indigo-600 text-white rounded-tr-sm" 
                                        : "bg-white/10 text-white border border-white/10 rounded-tl-sm"
                                )}>
                                    <p className="whitespace-pre-wrap leading-relaxed font-medium text-[15px]">{msg.content}</p>
                                </div>
                                {msg.role === 'assistant' && (
                                    <button 
                                        onClick={() => speakText(msg.content, getLangCode())}
                                        className="self-start flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold text-white/30 hover:text-emerald-400 hover:bg-white/5 transition-all"
                                    >
                                        <Volume2 className="w-3 h-3" /> Sesli Dinle
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}

                    {isTyping && displayedText && (
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-sm">🐢</div>
                            <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 shadow-md bg-white/10 text-white border border-white/10">
                                <p className="whitespace-pre-wrap leading-relaxed font-medium text-[15px]">{displayedText}<span className="inline-block w-0.5 h-5 bg-emerald-400 animate-pulse ml-0.5 align-text-bottom"></span></p>
                            </div>
                        </div>
                    )}

                    {aiLoading && (
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-sm">🐢</div>
                            <div className="bg-white/10 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                                </div>
                                <span className="text-sm font-bold text-white/40">Profesor Shell düşünüyor...</span>
                            </div>
                        </div>
                    )}

                    {showQuickReplies && (
                        <div className="flex flex-wrap gap-2 pt-2 animate-in fade-in slide-in-from-bottom-3 duration-500">
                            {defaultQuickReplies.map((qr, i) => (
                                <button 
                                    key={i}
                                    onClick={() => handleQuickReply(qr.msg)}
                                    className="px-3 py-2 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all"
                                >
                                    {qr.label}
                                </button>
                            ))}
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
                <div className="max-w-2xl mx-auto">
                    {isListening && (
                        <p className="text-rose-400 text-xs font-bold text-center mb-2 animate-pulse">
                            🎤 Dinliyorum... Konuşmaya başlayın
                        </p>
                    )}
                    {listeningError && (
                        <p className="text-amber-400 text-xs font-bold text-center mb-2 animate-pulse">
                            ⚠️ {listeningError}
                        </p>
                    )}
                    <div className="bg-white/5 p-2 rounded-2xl border border-white/10 flex items-center gap-2">
                        <button
                            type="button"
                            onClick={toggleListening}
                            disabled={aiLoading || isTyping}
                            className={cn(
                                "h-10 w-10 flex items-center justify-center rounded-xl transition-all shadow-sm shrink-0 border border-white/10",
                                isListening 
                                    ? "bg-rose-500 hover:bg-rose-600 animate-pulse text-white" 
                                    : "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
                            )}
                        >
                            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                        </button>
                        <input
                            ref={inputRef}
                            type="text"
                            value={aiInput}
                            onChange={(e) => setAiInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendAiMessage())}
                            placeholder="Hocaya sor veya sesli konuşmak için mikrofonu kullan..."
                            disabled={aiLoading || isTyping}
                            className="flex-1 bg-transparent h-12 pl-4 pr-4 font-medium text-white placeholder:text-white/30 border-none outline-none"
                        />
                        <Button 
                            size="icon" 
                            onClick={() => sendAiMessage()}
                            disabled={!aiInput.trim() || aiLoading || isTyping}
                            className="h-10 w-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg shadow-emerald-500/20"
                        >
                            <Send className="w-5 h-5 ml-0.5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
