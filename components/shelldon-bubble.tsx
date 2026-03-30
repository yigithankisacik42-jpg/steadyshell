"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useShelldon } from "@/contexts/shelldon-context";
import { Heart, Smile, Frown, Lightbulb, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

export const ShelldonBubble = () => {
  const { isVisible, message, mood, hideShelldon } = useShelldon();

  // Avatar ya da ikon (Ruh haline göre şekillenir)
  const getIcon = () => {
    switch (mood) {
      case "happy":
        return <Smile className="w-8 h-8 text-green-500" />;
      case "sad":
        return <Frown className="w-8 h-8 text-blue-400" />;
      case "thinking":
        return <Lightbulb className="w-8 h-8 text-amber-500" />;
      case "celebrate":
        return <PartyPopper className="w-8 h-8 text-purple-500 animate-bounce" />;
      default:
        return <Heart className="w-8 h-8 text-indigo-500 fill-indigo-200" />;
    }
  };

  const getBackgroundColor = () => {
    switch (mood) {
      case "happy":
        return "border-green-300 shadow-green-200/50";
      case "sad":
        return "border-blue-300 shadow-blue-200/50";
      case "thinking":
        return "border-amber-300 shadow-amber-200/50";
      case "celebrate":
        return "border-purple-300 shadow-purple-200/50 bg-gradient-to-r from-purple-50 to-fuchsia-50";
      default:
        return "border-indigo-300 shadow-indigo-200/50";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, y: 50, scale: 0.8, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-24 left-6 z-[9999] pointer-events-auto"
        >
          {/* Çizgi Roman Balonu Tarzı Kutucuk */}
          <div onClick={hideShelldon} className="cursor-pointer group relative">
            
            <div className={cn(
              "flex items-start gap-4 p-4 rounded-3xl rounded-bl-sm",
              "bg-white border-2 shadow-xl hover:shadow-2xl transition-all max-w-[280px]",
              getBackgroundColor()
            )}>
              {/* Avatar Kısmı */}
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-200 group-hover:scale-110 transition-transform shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 pb-1 flex items-end justify-center text-4xl leading-none select-none">
                  🐢
                </div>
                {/* Ruh hali ikonu köşe amblemi */}
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-slate-200">
                    <div className="scale-50 origin-center">{getIcon()}</div>
                </div>
              </div>

              {/* Mesaj Kısmı */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-700 leading-snug">
                  {message}
                </p>
                <div className="mt-1 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  Tıkla Kapat
                </div>
              </div>
            </div>

            {/* Balonun Altındaki Küçük Kuyruk */}
            <svg 
              className={cn("absolute -bottom-5 left-0 w-8 h-8 text-white drop-shadow-md")} 
              viewBox="0 0 32 32" 
              fill="currentColor"
            >
              <path d="M0,0 L0,32 L32,0 Z" />
            </svg>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
