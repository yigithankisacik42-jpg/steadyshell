"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useLanguage } from "@/contexts/LanguageContext";
import { useShelldon } from "@/contexts/shelldon-context";
import { getShelldonAIResponse, getMentorMessage } from "@/lib/mentor-utils";
import { loadUserStats } from "@/lib/user-stats";
import { X, Send, Flame, Zap, Trophy, TrendingUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoachMessage {
    role: "user" | "assistant";
    content: string;
    timestamp: number;
}

// ══════════════════════════════════════════════
// COACH API: Uses /api/lesson/chat for smart AI responses
// Falls back to mentor-utils for offline
// ══════════════════════════════════════════════

async function getCoachResponse(
    userMessage: string,
    messages: CoachMessage[],
    userContext: string
): Promise<string> {
    try {
        const res = await fetch("/api/lesson/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                messages: [
                    ...messages.slice(-6).map(m => ({ role: m.role, content: m.content })),
                    { role: "user", content: userMessage }
                ],
                unitTitle: "Kişisel Koç Modu",
                lessonSummary: `Bu bir kişisel koçluk oturumudur. Kullanıcı bilgileri:\n${userContext}\n\nGörevin: Motivasyon ver, soruları yanıtla, ilerlemeyi takip et. Dil öğrenme tavsiyesi ver. Türkçe yanıtla.`,
                language: "tr",
                level: "A1"
            })
        });

        const data = await res.json();
        if (data.message) return data.message;
        throw new Error("No message");
    } catch {
        // Offline fallback handled by caller
        return "";
    }
}

export function ShelldonCoach() {
    const pathname = usePathname();
    const { user } = useUserProgress();
    const { currentLanguage, currentLevel } = useLanguage();
    const { isVisible: bubbleVisible, message: bubbleMessage, mood: bubbleMood, hideShelldon } = useShelldon();

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<CoachMessage[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasUnread, setHasUnread] = useState(false);
    const [showPulse, setShowPulse] = useState(true);

    // Hide coach on public pages (landing, login, register)
    const hiddenPages = ['/', '/login', '/register'];
    const isHidden = hiddenPages.includes(pathname);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Build user context for AI
    const buildUserContext = useCallback(() => {
        const stats = loadUserStats();
        return [
            `İsim: ${user.name || "Gezgin"}`,
            `Dil: ${currentLanguage.name} (${currentLevel?.code || "A1"})`,
            `Toplam XP: ${user.totalXp}`,
            `Streak: ${user.streak} gün`,
            `Seviye: ${user.level}`,
            `Toplam Ders: ${stats.totalLessons}`,
            `Başarı Oranı: %${stats.accuracyRate}`,
            `Bugün: ${stats.dailyStats[0]?.lessonsCompleted || 0} ders tamamlandı`,
        ].join("\n");
    }, [user, currentLanguage, currentLevel]);

    // Generate welcome message on first open
    const generateWelcome = useCallback(() => {
        const mentorMsg = getMentorMessage(user, currentLanguage.name);
        return mentorMsg.text;
    }, [user, currentLanguage]);

    // Initialize chat when opened
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const welcome = generateWelcome();
            setMessages([{
                role: "assistant",
                content: welcome,
                timestamp: Date.now()
            }]);
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen, messages.length, generateWelcome]);

    // Scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    // Disable pulse after first open
    useEffect(() => {
        if (isOpen) {
            setShowPulse(false);
            setHasUnread(false);
        }
    }, [isOpen]);

    // Show unread indicator when bubble shows
    useEffect(() => {
        if (bubbleVisible && !isOpen) {
            setHasUnread(true);
        }
    }, [bubbleVisible, isOpen]);

    const sendMessage = async (directText?: string) => {
        const text = (directText || inputValue).trim();
        if (!text || isLoading) return;

        const userMsg: CoachMessage = { role: "user", content: text, timestamp: Date.now() };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setInputValue("");
        setIsLoading(true);

        try {
            // Try AI first
            const aiResponse = await getCoachResponse(text, messages, buildUserContext());

            if (aiResponse) {
                setMessages(prev => [...prev, {
                    role: "assistant",
                    content: aiResponse,
                    timestamp: Date.now()
                }]);
            } else {
                // Fallback to offline
                const offlineResponse = await getShelldonAIResponse(
                    user,
                    { name: currentLanguage.name, level: currentLevel?.code || "A1" },
                    text
                );
                setMessages(prev => [...prev, {
                    role: "assistant",
                    content: offlineResponse,
                    timestamp: Date.now()
                }]);
            }
        } catch {
            const offlineResponse = await getShelldonAIResponse(
                user,
                { name: currentLanguage.name, level: currentLevel?.code || "A1" },
                text
            );
            setMessages(prev => [...prev, {
                role: "assistant",
                content: offlineResponse,
                timestamp: Date.now()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const quickActions = [
        { label: "🎯 Bugün ne yapmalıyım?", msg: "Bugün ne yapmalıyım? Bana bir öğrenme planı öner." },
        { label: "💪 Motive et beni!", msg: "Motive et beni! Biraz cesaretlendirici sözler söyle." },
        { label: "📊 Durumum nasıl?", msg: "İlerlemem nasıl? Durumumu analiz et." },
        { label: "💡 İpucu ver", msg: "Dil öğrenme ile ilgili bir ipucu verir misin?" },
    ];

    const stats = loadUserStats();

    // Don't render on public pages
    if (isHidden) return null;

    return (
        <>
            {/* ══════ FLOATING BUTTON ══════ */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        onClick={() => { setIsOpen(true); hideShelldon(); }}
                        className="fixed bottom-24 right-6 md:bottom-6 z-[9998] group"
                        aria-label="Shelldon Koçu Aç"
                    >
                        {/* Pulse ring */}
                        {showPulse && (
                            <span className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping" />
                        )}

                        {/* Main button */}
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 shadow-2xl shadow-violet-500/40 flex items-center justify-center border-2 border-white/20 group-hover:scale-110 group-active:scale-95 transition-transform">
                            <span className="text-3xl select-none leading-none pb-0.5">🐢</span>

                            {/* Sparkle effect */}
                            <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-amber-400 animate-pulse" />

                            {/* Unread dot */}
                            {hasUnread && (
                                <span className="absolute -top-0.5 -left-0.5 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce" />
                            )}
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* ══════ NOTIFICATION BUBBLE (from ShelldonContext) ══════ */}
            <AnimatePresence>
                {bubbleVisible && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={() => { setIsOpen(true); hideShelldon(); }}
                        className="fixed bottom-44 right-6 md:bottom-24 z-[9997] max-w-[280px] cursor-pointer"
                    >
                        <div className={cn(
                            "p-3 rounded-2xl rounded-br-sm bg-white border-2 shadow-xl text-sm font-medium text-slate-700",
                            bubbleMood === "happy" ? "border-green-300" :
                            bubbleMood === "celebrate" ? "border-purple-300" :
                            bubbleMood === "thinking" ? "border-amber-300" :
                            "border-indigo-300"
                        )}>
                            {bubbleMessage}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ══════ CHAT PANEL ══════ */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-[9999] w-full sm:w-[400px] h-[100dvh] sm:h-[600px] sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-white/10 flex flex-col bg-slate-950"
                    >
                        {/* ─── Header ─── */}
                        <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 px-5 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                                        <span className="text-2xl select-none leading-none pb-0.5">🐢</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-base leading-tight">Shelldon</h3>
                                        <p className="text-white/50 text-[11px] font-medium">Kişisel Dil Koçun • Çevrimiçi</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-5 h-5 text-white/70" />
                                </button>
                            </div>

                            {/* ─── Stats Strip ─── */}
                            <div className="flex items-center gap-3 mt-3 bg-white/10 rounded-xl p-2.5 backdrop-blur-sm">
                                <div className="flex items-center gap-1.5 text-amber-300">
                                    <Flame className="w-4 h-4" />
                                    <span className="text-xs font-bold">{user.streak}</span>
                                </div>
                                <div className="w-px h-4 bg-white/20" />
                                <div className="flex items-center gap-1.5 text-emerald-300">
                                    <Zap className="w-4 h-4" />
                                    <span className="text-xs font-bold">{user.totalXp} XP</span>
                                </div>
                                <div className="w-px h-4 bg-white/20" />
                                <div className="flex items-center gap-1.5 text-sky-300">
                                    <Trophy className="w-4 h-4" />
                                    <span className="text-xs font-bold">Lv.{user.level}</span>
                                </div>
                                <div className="w-px h-4 bg-white/20" />
                                <div className="flex items-center gap-1.5 text-violet-300">
                                    <TrendingUp className="w-4 h-4" />
                                    <span className="text-xs font-bold">%{stats.accuracyRate}</span>
                                </div>
                            </div>
                        </div>

                        {/* ─── Messages ─── */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i === messages.length - 1 ? 0.1 : 0 }}
                                    className={cn(
                                        "flex gap-2.5",
                                        msg.role === "user" ? "flex-row-reverse" : ""
                                    )}
                                >
                                    {msg.role === "assistant" && (
                                        <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0 text-sm">
                                            🐢
                                        </div>
                                    )}
                                    <div className={cn(
                                        "max-w-[80%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed font-medium shadow-sm",
                                        msg.role === "user"
                                            ? "bg-violet-600 text-white rounded-tr-sm"
                                            : "bg-white/10 text-white/90 border border-white/10 rounded-tl-sm"
                                    )}>
                                        <p className="whitespace-pre-wrap">{msg.content}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Loading */}
                            {isLoading && (
                                <div className="flex gap-2.5">
                                    <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0 text-sm">
                                        🐢
                                    </div>
                                    <div className="bg-white/10 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
                                        <div className="flex space-x-1.5">
                                            <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Quick Actions (show after last assistant message, when not loading) */}
                            {messages.length > 0 && messages[messages.length - 1].role === "assistant" && !isLoading && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {quickActions.map((qa, i) => (
                                        <button
                                            key={i}
                                            onClick={() => sendMessage(qa.msg)}
                                            className="px-3 py-1.5 rounded-xl text-[11px] font-bold bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/30 transition-all"
                                        >
                                            {qa.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* ─── Input ─── */}
                        <div className="p-3 border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
                            <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 flex items-center gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault();
                                            sendMessage();
                                        }
                                    }}
                                    placeholder="Shelldon'a sor..."
                                    disabled={isLoading}
                                    className="flex-1 bg-transparent h-11 pl-4 pr-2 font-medium text-white placeholder:text-white/30 border-none outline-none text-sm"
                                />
                                <button
                                    onClick={() => sendMessage()}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="h-10 w-10 bg-violet-600 hover:bg-violet-700 disabled:opacity-40 disabled:hover:bg-violet-600 text-white rounded-xl shadow-lg shadow-violet-500/20 flex items-center justify-center transition-all shrink-0"
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                </button>
                            </div>
                            <p className="text-center text-[10px] text-white/20 mt-1.5 font-medium">
                                🐢 Shelldon her zaman yanında • {currentLanguage.name} {currentLevel?.code || ""}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
