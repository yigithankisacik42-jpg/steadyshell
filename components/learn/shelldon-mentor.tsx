"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, MessageCircle, Volume2, ArrowRight, Send, Loader2 } from 'lucide-react';
import { useUserProgress } from '@/contexts/user-progress-context';
import { useLanguage } from '@/contexts/LanguageContext';
import { getMentorMessage, getShelldonAIResponse, MentorMessage } from '@/lib/mentor-utils';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const ShelldonMentor = () => {
    const { user } = useUserProgress();
    const { currentLanguage, currentLevel } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial welcome message
    useEffect(() => {
        if (!message) {
            const initial = getMentorMessage(user, currentLanguage.name);
            setMessage(initial.text);
        }
    }, [user, currentLanguage]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const question = userInput;
        setUserInput("");
        setIsLoading(true);

        const aiResponse = await getShelldonAIResponse(
            user, 
            { name: currentLanguage.name, level: currentLevel?.code || "A1" }, 
            question
        );

        setMessage(aiResponse);
        setIsLoading(false);
        
        // Auto play sound for new AI response
        const utterance = new SpeechSynthesisUtterance(aiResponse);
        utterance.lang = 'tr-TR';
        window.speechSynthesis.speak(utterance);
    };

    const playSound = () => {
        if (!message) return;
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'tr-TR';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="fixed bottom-32 right-8 z-50 flex flex-col items-end gap-4 pointer-events-none">
            
            {/* SPEECH BUBBLE / CHAT BOX */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20, x: 20 }}
                        className="bg-white/95 backdrop-blur-2xl p-6 rounded-[2.5rem] rounded-br-sm shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] border border-indigo-100 max-w-sm pointer-events-auto relative mb-2"
                    >
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-slate-400" />
                        </button>

                        <div className="flex items-center gap-2 mb-3 text-indigo-600">
                            <Sparkles className="w-4 h-4 fill-current" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Canlı Shelldon AI</span>
                        </div>

                        <div className="min-h-[60px] mb-4">
                            {isLoading ? (
                                <div className="flex items-center gap-3 text-slate-400 font-bold italic py-2">
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Düşünüyorum dostum...
                                </div>
                            ) : (
                                <p className="text-slate-800 font-bold leading-relaxed text-sm">
                                    "{message}"
                                </p>
                            )}
                        </div>

                        <div className="flex gap-2 mb-4">
                            <Button 
                                onClick={playSound}
                                variant="outline" 
                                size="sm" 
                                className="h-9 px-4 rounded-xl border-indigo-100 text-indigo-600 hover:bg-indigo-50"
                            >
                                <Volume2 className="w-4 h-4 mr-2" />
                                Dinle
                            </Button>
                        </div>

                        {/* CHAT INPUT */}
                        <form onSubmit={handleSendMessage} className="relative mt-4">
                            <Input 
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Bana bir şey sor..."
                                className="pr-12 h-12 rounded-2xl border-slate-200 focus-visible:ring-indigo-500 bg-slate-50 border-none font-bold text-sm"
                                disabled={isLoading}
                            />
                            <button 
                                type="submit"
                                disabled={!userInput.trim() || isLoading}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-600 text-white rounded-xl flex items-center justify-center disabled:opacity-50 transition-transform active:scale-90"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FLOATING SHELLDON AVATAR / BUTTON */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                    "w-20 h-20 bg-white rounded-full shadow-2xl border-4 flex items-center justify-center overflow-hidden transition-all duration-300 pointer-events-auto relative",
                    isOpen ? "border-indigo-500 scale-110" : "border-white hover:border-indigo-200"
                )}
            >
                <div className="relative w-16 h-16 pointer-events-none">
                    <Image 
                        src="/mascot_v2.png" 
                        alt="Shelldon Mentor" 
                        fill 
                        className="object-contain"
                    />
                </div>
                
                {/* Notification Badge */}
                {!isOpen && (
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-red-500 text-white w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-md animate-bounce"
                    >
                        ?
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
};
