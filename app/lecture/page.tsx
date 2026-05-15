"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, GraduationCap, Lightbulb, ArrowRight, BookOpen, Bot, Send, Loader2, BookOpenCheck, User, Volume2, Trophy, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { getLectureForUnit, UnitLecture, LectureSlide } from "@/lib/lectures";
import { useLessonProgress } from "@/hooks/use-lesson-progress";
import { cn } from "@/lib/utils";

interface AiMessage {
    role: 'user' | 'assistant';
    content: string;
}

const QUICK_REPLIES = [
    { label: '✅ Anladım, devam', msg: 'Anladım, devam edelim.' },
    { label: '🔄 Tekrar açıkla', msg: 'Bu konuyu tekrar açıklar mısın? Tam anlamadım.' },
    { label: '📝 Örnek ver', msg: 'Bu konu hakkında daha fazla örnek verebilir misin?' },
    { label: '🎯 Test et beni', msg: 'Hadi beni test et! Bir soru sor.' },
];

function speakText(text: string, lang: string) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const cleaned = text.replace(/[✏️🌟😊🎉✅❌💡🤔⚠️📝🎯✓]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleaned);
    const langMap: Record<string, string> = { es: 'es-ES', en: 'en-US', de: 'de-DE', fr: 'fr-FR', 'İspanyolca': 'es-ES' };
    utterance.lang = langMap[lang] || 'es-ES';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
}

export default function LecturePage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500 font-medium">Yükleniyor...</p>
                </div>
            </div>
        }>
            <LectureContent />
        </Suspense>
    );
}

function LectureContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const unitId = parseInt(searchParams.get("unitId") || "1");

    const [lectureContent, setLectureContent] = useState<UnitLecture | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { markLessonCompleted } = useLessonProgress(unitId);

    // AI Hoca state
    const [isAiMode, setIsAiMode] = useState(false);
    const [aiMessages, setAiMessages] = useState<AiMessage[]>([]);
    const [aiInput, setAiInput] = useState('');
    const [aiLoading, setAiLoading] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Typewriter effect
    const typeMessage = useCallback((fullText: string, onDone: () => void) => {
        setIsTyping(true);
        setDisplayedText('');
        let i = 0;
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = setInterval(() => {
            i++;
            setDisplayedText(fullText.slice(0, i));
            if (i >= fullText.length) {
                if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
                setIsTyping(false);
                onDone();
            }
        }, 18);
    }, []);

    useEffect(() => {
        const lecture = getLectureForUnit(unitId);
        setLectureContent(lecture);
        setCurrentSlide(0);
    }, [unitId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [aiMessages]);

    if (!lectureContent) {
        return (
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const slide = lectureContent.slides[currentSlide];
    const progress = ((currentSlide + 1) / lectureContent.slides.length) * 100;
    const isLastSlide = currentSlide === lectureContent.slides.length - 1;

    const handleNext = () => {
        if (isLastSlide) {
            markLessonCompleted("LECTURE");
            router.push(`/lesson?unitId=${unitId}`);
        } else {
            setCurrentSlide(c => c + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(c => c - 1);
        }
    };

    // Ders içeriğini özetleyip AI'a gönderilecek formata çevir
    const buildLessonSummary = (): string => {
        if (!lectureContent) return '';
        const parts: string[] = [];
        parts.push(`Ders: ${lectureContent.title} (${lectureContent.language} ${lectureContent.level})`);
        for (const s of lectureContent.slides) {
            if (s.type === 'intro' && s.content) {
                parts.push(`Giriş: ${s.content}`);
            }
            if (s.type === 'vocabulary' && s.words) {
                const wordList = s.words.map(w => `${w.target} = ${w.native}`).join(', ');
                parts.push(`Kelimeler (${s.title}): ${wordList}`);
            }
            if (s.type === 'grammar' && s.rules) {
                for (const r of s.rules) {
                    parts.push(`Kural: ${r.rule} — ${r.explanation}${r.examples.length > 0 ? ` Örnek: ${r.examples[0]}` : ''}`);
                }
            }
            if (s.type === 'culture' && s.content) {
                parts.push(`Kültür: ${s.content}`);
            }
            if (s.type === 'summary' && s.points) {
                parts.push(`Özet: ${s.points.join(', ')}`);
            }
        }
        return parts.join('\n');
    };

    // AI Hoca modunu başlat
    const startAiMode = async () => {
        setIsAiMode(true);
        setAiMessages([]);
        setAiLoading(true);
        setShowSummary(false);

        try {
            const response = await fetch('/api/lesson/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: 'Dersi başlat.' }],
                    unitTitle: lectureContent.title,
                    lessonSummary: buildLessonSummary(),
                    language: lectureContent.language === 'İspanyolca' ? 'es' : lectureContent.language,
                    level: lectureContent.level
                })
            });
            const data = await response.json();
            if (data.message) {
                setAiLoading(false);
                typeMessage(data.message, () => {
                    setAiMessages([{ role: 'assistant', content: data.message }]);
                    setDisplayedText('');
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

    // AI'a mesaj gönder
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
                    unitTitle: lectureContent.title,
                    lessonSummary: buildLessonSummary(),
                    language: lectureContent.language === 'İspanyolca' ? 'es' : lectureContent.language,
                    level: lectureContent.level
                })
            });
            const data = await response.json();
            if (data.message) {
                setAiLoading(false);
                typeMessage(data.message, () => {
                    setAiMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
                    setDisplayedText('');
                });
            }
        } catch {
            setAiMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Yanıt alınamadı.' }]);
            setAiLoading(false);
        }
    };

    // Quick reply handler
    const handleQuickReply = (msg: string) => {
        sendAiMessage(msg);
    };

    // Exit AI mode with summary
    const exitAiMode = () => {
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        setIsTyping(false);
        setDisplayedText('');
        if (aiMessages.length >= 4) {
            setShowSummary(true);
        } else {
            setIsAiMode(false);
        }
    };

    // Get language code for TTS
    const getLangCode = () => lectureContent.language === 'İspanyolca' ? 'es' : lectureContent.language;

    // ======== AI HOCA MODU ========
    if (isAiMode) {
        // Summary overlay
        if (showSummary) {
            const assistantMsgCount = aiMessages.filter(m => m.role === 'assistant').length;
            return (
                <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center p-6">
                    <div className="max-w-md w-full bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl text-center space-y-6 animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                            <Trophy className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-white">Ders Tamamlandı! 🎉</h2>
                            <p className="text-white/50 text-sm mt-1">{lectureContent.title} • {lectureContent.level}</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-4 space-y-3 text-left border border-white/10">
                            <div className="flex items-center justify-between">
                                <span className="text-white/60 text-sm">💬 Sohbet Turları</span>
                                <span className="text-white font-bold">{assistantMsgCount}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-white/60 text-sm">📚 Konu</span>
                                <span className="text-white font-bold text-right text-sm max-w-[180px] truncate">{lectureContent.title}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-white/60 text-sm">⭐ Durum</span>
                                <span className="text-emerald-400 font-bold flex items-center gap-1"><Sparkles className="w-4 h-4" /> Harika!</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => { setShowSummary(false); setIsAiMode(false); }}
                                className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
                            >
                                📖 Slaytlara Dön
                            </button>
                            <button
                                onClick={() => { setShowSummary(false); }}
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
            <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col h-full w-full">
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
                        <p className="text-white/40 text-xs mt-0.5">{lectureContent.title} • {lectureContent.level}</p>
                    </div>
                    <button
                        onClick={exitAiMode}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                    >
                        <BookOpenCheck className="w-3.5 h-3.5" />
                        Slaytlar
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
                                    {/* TTS Button for assistant messages */}
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

                        {/* Typewriter: currently typing message */}
                        {isTyping && displayedText && (
                            <div className="flex gap-3">
                                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-sm">🐢</div>
                                <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 shadow-md bg-white/10 text-white border border-white/10">
                                    <p className="whitespace-pre-wrap leading-relaxed font-medium text-[15px]">{displayedText}<span className="inline-block w-0.5 h-5 bg-emerald-400 animate-pulse ml-0.5 align-text-bottom"></span></p>
                                </div>
                            </div>
                        )}

                        {/* Loading indicator */}
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

                        {/* Quick Replies */}
                        {showQuickReplies && (
                            <div className="flex flex-wrap gap-2 pt-2 animate-in fade-in slide-in-from-bottom-3 duration-500">
                                {QUICK_REPLIES.map((qr, i) => (
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
                        <div className="bg-white/5 p-2 rounded-2xl border border-white/10 flex items-center gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={aiInput}
                                onChange={(e) => setAiInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendAiMessage())}
                                placeholder="Hocaya sor veya cevap yaz..."
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

    // ======== NORMAL SLAYT MODU ========
    return (
        <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-indigo-50 to-white flex flex-col h-full w-full">

            {/* Üst Bar */}
            <div className="w-full px-6 py-4 flex items-center justify-between gap-4 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
                <ArrowLeft onClick={() => {
                    if (currentSlide > 0) {
                        setCurrentSlide(c => c - 1);
                    } else {
                        router.back();
                    }
                }} className="cursor-pointer text-slate-400 hover:text-slate-600 w-6 h-6 transition-colors" />
                <div className="flex-1 text-center">
                    <Progress value={progress} className="h-3 w-full max-w-md mx-auto" />
                    <p className="text-xs text-slate-400 mt-1">{lectureContent.title}</p>
                </div>
                {/* AI Hoca Butonu */}
                <button
                    onClick={startAiMode}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:scale-105 active:scale-95"
                >
                    <Bot className="w-4 h-4" />
                    AI Hoca
                </button>
            </div>

            {/* İçerik */}
            <div className="flex-1 flex flex-col p-6 max-w-2xl mx-auto w-full overflow-y-auto">

                {/* Slide Başlık */}
                <div className="mb-6 text-center">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{lectureContent.level} • {lectureContent.language}</span>
                    <h1 className="text-2xl font-extrabold text-slate-800 mt-1">{slide.title}</h1>
                </div>

                {/* Slide İçeriği */}
                <div className="flex-1">
                    {slide.type === "intro" && (
                        <div className="space-y-6">
                            <p className="text-lg text-slate-600 leading-relaxed">{slide.content}</p>
                            {slide.tip && (
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                                    <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0" />
                                    <p className="text-amber-700 font-medium">{slide.tip}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === "vocabulary" && (
                        <div className="grid gap-3">
                            {slide.words?.map((word, i) => (
                                <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-4 flex items-center justify-between hover:border-indigo-200 transition-colors">
                                    <div>
                                        <p className="text-xl font-bold text-indigo-600">{word.target}</p>
                                        <p className="text-sm text-slate-400">/{word.pronunciation}/</p>
                                    </div>
                                    <p className="text-lg font-medium text-slate-700">{word.native}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.type === "grammar" && (
                        <div className="space-y-4">
                            <div className="grid gap-3">
                                {slide.rules?.map((rule, i) => (
                                    <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-4">
                                        <p className="text-lg font-bold text-indigo-600">{rule.rule}</p>
                                        <p className="text-slate-600 mt-1">{rule.explanation}</p>
                                        {rule.examples && rule.examples.length > 0 && (
                                            <div className="mt-2 space-y-1">
                                                {rule.examples.map((ex, j) => (
                                                    <p key={j} className="text-sm text-slate-500 italic">• {ex}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {slide.note && (
                                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
                                    <p className="text-indigo-700 font-medium">💡 {slide.note}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === "example" && (
                        <div className="space-y-4">
                            {slide.dialogue?.map((line, i) => (
                                <div key={i} className={`p-4 rounded-2xl ${line.speaker === "A" ? "bg-indigo-50 ml-0 mr-12" : "bg-violet-50 ml-12 mr-0"}`}>
                                    <p className="font-bold text-slate-700">{line.text}</p>
                                    <p className="text-sm text-slate-500 mt-1">{line.translation}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.type === "culture" && (
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">🇪🇸</span>
                                    <div>
                                        <p className="text-lg text-amber-800 leading-relaxed">{slide.content}</p>
                                    </div>
                                </div>
                            </div>
                            {slide.tip && (
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                                    <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0" />
                                    <p className="text-amber-700 font-medium">{slide.tip}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === "practice" && (
                        <div className="space-y-6">
                            <p className="text-lg text-slate-600 leading-relaxed">{slide.content}</p>
                            {slide.points && (
                                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                                    <ul className="space-y-3">
                                        {slide.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✓</span>
                                                <span className="text-green-800 font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {slide.tip && (
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex gap-3">
                                    <Lightbulb className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <p className="text-green-700 font-medium">{slide.tip}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === "summary" && (
                        <div className="space-y-6">
                            <div className="bg-white border-2 border-slate-100 rounded-2xl p-6">
                                <ul className="space-y-3">
                                    {slide.points?.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0">{i + 1}</span>
                                            <span className="text-slate-700 font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {slide.cta && (
                                <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl p-6 text-center text-white">
                                    <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-80" />
                                    <p className="text-lg font-bold">{slide.cta}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === "table" && (
                        <div className="space-y-6">
                            {slide.content && <p className="text-lg text-slate-600 mb-4">{slide.content}</p>}

                            <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        {slide.headers && (
                                            <thead>
                                                <tr className="bg-indigo-50 border-b border-indigo-100">
                                                    {slide.headers.map((header, i) => (
                                                        <th key={i} className="px-4 py-3 text-sm font-bold text-indigo-900 uppercase tracking-wider">
                                                            {header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                        )}
                                        <tbody className="divide-y divide-slate-100">
                                            {slide.rows?.map((row, i) => (
                                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                                    {row.map((cell, j) => (
                                                        <td key={j} className="px-4 py-3 text-slate-700 font-medium whitespace-nowrap md:whitespace-normal">
                                                            {/* Markdown-like bold formatting support */}
                                                            {cell.includes('**') ? (
                                                                <span>
                                                                    {cell.split('**').map((part, k) =>
                                                                        k % 2 === 1 ? <strong key={k} className="text-indigo-700">{part}</strong> : part
                                                                    )}
                                                                </span>
                                                            ) : cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {slide.note && (
                                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
                                    <p className="text-indigo-700 font-medium">💡 {slide.note}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Alt Navigasyon */}
            <div className="p-6 border-t border-slate-200/50 bg-white/80 backdrop-blur-md">
                <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
                    <Button
                        variant="outline"
                        onClick={handlePrev}
                        disabled={currentSlide === 0}
                        className="rounded-xl py-5 px-6 font-bold"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" /> Geri
                    </Button>

                    <div className="flex gap-2">
                        {lectureContent.slides.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? "bg-indigo-600 w-6" : "bg-slate-300"}`}
                            />
                        ))}
                    </div>

                    <Button
                        onClick={handleNext}
                        className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-xl py-5 px-6 font-bold border-b-4 border-indigo-800 active:border-b-0"
                    >
                        {isLastSlide ? (
                            <>Teste Geç <ArrowRight className="w-5 h-5 ml-1" /></>
                        ) : (
                            <>İleri <ChevronRight className="w-5 h-5 ml-1" /></>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
