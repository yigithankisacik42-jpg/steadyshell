"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, Trophy, Target, Store, Settings, User, Heart, Flame, Zap, Clock, Bot, Theater, ChevronRight, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHearts, formatTime } from "@/lib/hearts-context";
import { useUserProgress } from "@/contexts/user-progress-context";
import { LanguageSwitcher } from "@/components/language-switcher";

const menuItems = [
  { href: "/learn", icon: Home, label: "Öğren", color: "text-indigo-500" },
  { href: "/ai-tutor", icon: Bot, label: "AI Tutor", color: "text-purple-500", isNew: true },
  { href: "/scene", icon: Theater, label: "Sahne Modu", color: "text-pink-500", isNew: true },
  { href: "/leaderboard", icon: Trophy, label: "Liderlik", color: "text-amber-500" },
  { href: "/quests", icon: Target, label: "Görevler", color: "text-rose-500" },
  { href: "/shop", icon: Store, label: "Mağaza", color: "text-violet-500" },
];

export const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { hearts, maxHearts, getTimeUntilNextHeart, isRecovering } = useHearts();
  const { user } = useUserProgress();
  const [isMounted, setIsMounted] = useState(false);
  const [timeUntilHeart, setTimeUntilHeart] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilHeart(getTimeUntilNextHeart());
    }, 1000);
    return () => clearInterval(interval);
  }, [getTimeUntilNextHeart]);

  const displayUser = isMounted ? user : {
    name: "Misafir",
    email: "",
    avatar: "M",
    totalXp: 0,
    streak: 0
  };

  return (
    <div className={cn(
      "flex h-full lg:w-[280px] lg:fixed left-0 top-0 px-4 py-6 border-r border-white/20 flex-col transition-all duration-300",
      "bg-white/70 backdrop-blur-xl shadow-[4px_0_24px_rgba(0,0,0,0.02)]",
      className
    )}>

      {/* --- LOGO --- */}
      <Link href="/learn" className="mb-8 px-2 group">
        <div className="flex items-center gap-3 transition-transform group-hover:scale-105 duration-300">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
            <Image
              src="/mascot_v2.png"
              alt="Shelby"
              width={42}
              height={42}
              className="drop-shadow-md relative z-10"
            />
          </div>
          <h1 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
            SteadyShell
          </h1>
        </div>
      </Link>

      {/* --- LANGUAGE SWITCHER --- */}
      <div className="px-2 mb-6">
        <LanguageSwitcher />
      </div>

      {/* --- NAVIGATION --- */}
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1 custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const isNew = 'isNew' in item && item.isNew;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "group relative flex items-center gap-x-3 px-4 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden",
                  isActive
                    ? "bg-gradient-to-r from-indigo-50/80 to-purple-50/50 text-indigo-700 shadow-sm border border-indigo-100/50"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                )}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-indigo-500 rounded-r-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                )}

                <item.icon
                  className={cn(
                    "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                    isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-indigo-500/80"
                  )}
                />

                <span className={cn(
                  "font-bold text-[15px] tracking-wide",
                  isActive ? "text-indigo-900" : ""
                )}>
                  {item.label}
                </span>

                {isNew && (
                  <div className="ml-auto flex items-center">
                    <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                      YENİ
                    </span>
                  </div>
                )}

                {isActive && (
                  <ChevronRight className="ml-auto w-4 h-4 text-indigo-300 opacity-60" />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* --- STATS CARDS --- */}
      <div className="grid grid-cols-2 gap-2 mb-4 mt-4">
        {/* Hearts */}
        <div className="col-span-2 relative p-3 rounded-2xl bg-rose-50/50 border border-rose-100/60 backdrop-blur-sm group hover:bg-rose-50 transition-colors">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-1.5">
              <div className="p-1.5 bg-rose-100 rounded-lg group-hover:scale-110 transition-transform">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              </div>
              <span className="text-xs font-bold text-rose-900/70 uppercase">Canlar</span>
            </div>
            {isRecovering && (
              <div className="flex items-center gap-1 text-[10px] font-bold text-rose-500 bg-white/80 px-1.5 py-0.5 rounded-md shadow-sm">
                <Clock className="w-2.5 h-2.5" />
                {formatTime(timeUntilHeart)}
              </div>
            )}
          </div>
          <div className="flex gap-0.5 pl-1">
            {[...Array(maxHearts)].map((_, i) => (
              <div key={i} className={cn("h-1.5 flex-1 rounded-full transition-all", i < hearts ? "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.4)]" : "bg-rose-200/50")} />
            ))}
          </div>
        </div>

        {/* Streak */}
        <div className="p-3 rounded-2xl bg-amber-50/50 border border-amber-100/60 backdrop-blur-sm flex flex-col items-center justify-center group hover:bg-amber-50 transition-colors">
          <Flame className="w-5 h-5 text-amber-500 mb-1 group-hover:scale-110 transition-transform drop-shadow-sm" />
          <span className="text-sm font-black text-amber-600">{displayUser.streak}</span>
          <span className="text-[10px] font-bold text-amber-400 uppercase">Gün</span>
        </div>

        {/* XP */}
        <div className="p-3 rounded-2xl bg-indigo-50/50 border border-indigo-100/60 backdrop-blur-sm flex flex-col items-center justify-center group hover:bg-indigo-50 transition-colors">
          <Zap className="w-5 h-5 text-indigo-500 mb-1 group-hover:scale-110 transition-transform drop-shadow-sm" />
          <span className="text-sm font-black text-indigo-600">{displayUser.totalXp}</span>
          <span className="text-[10px] font-bold text-indigo-400 uppercase">XP</span>
        </div>
      </div>

      {/* --- USER PROFILE CARD --- */}
      <Link href="/settings">
        <div className="relative group p-3 rounded-2xl bg-white/50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                {displayUser.avatar}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 border-2 border-white rounded-full p-0.5">
                <Crown className="w-2.5 h-2.5 text-yellow-900" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-bold text-slate-700 truncate text-sm group-hover:text-indigo-700 transition-colors">{displayUser.name}</p>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider group-hover:text-indigo-400 transition-colors">Ücretsiz Plan</p>
            </div>

            <Settings className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 group-hover:rotate-45 transition-all" />
          </div>
        </div>
      </Link>

    </div>
  );
};
