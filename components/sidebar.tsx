"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, Trophy, Target, Store, Settings, User, Heart, Flame, Zap, Clock, Bot, Theater } from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/lib/config";
import { useHearts, formatTime } from "@/lib/hearts-context";
import { useUserProgress } from "@/contexts/user-progress-context";



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

  // Global hearts context
  const { hearts, maxHearts, getTimeUntilNextHeart, isRecovering } = useHearts();

  // Custom User Progress Context
  const { user } = useUserProgress();
  const [isMounted, setIsMounted] = useState(false);
  const [timeUntilHeart, setTimeUntilHeart] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Timer güncelleme
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilHeart(getTimeUntilNextHeart());
    }, 1000);
    return () => clearInterval(interval);
  }, [getTimeUntilNextHeart]);

  // Use default values during SSR to avoid hydration mismatch
  const displayUser = isMounted ? user : {
    name: "Misafir",
    email: "",
    avatar: "M",
    totalXp: 0,
    streak: 0
  };

  return (
    <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r border-slate-200/50 flex-col bg-white/80 backdrop-blur-md", className)}>

      {/* Logo */}
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-4 flex items-center gap-x-2">
          <Image
            src="/mascot.png"
            alt="Shelby"
            width={36}
            height={36}
            className="drop-shadow-md"
          />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">SteadyShell</h1>
        </div>
      </Link>

      {/* Menü Linkleri */}
      <div className="flex flex-col gap-y-2 flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const isNew = 'isNew' in item && item.isNew;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-base font-semibold h-[52px] rounded-xl transition-all relative",
                  isActive
                    ? "bg-indigo-50 text-indigo-600 border-2 border-indigo-200"
                    : "border-2 border-transparent hover:bg-slate-50"
                )}
              >
                <item.icon className={cn("mr-4 h-6 w-6", isActive ? "text-indigo-600" : item.color)} />
                {item.label}
                {isNew && (
                  <span className="absolute right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                    YENİ
                  </span>
                )}
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Durum Göstergeleri */}
      <div className="px-4 py-3 space-y-3 border-t border-slate-100">
        {/* Canlar - Global hearts context kullanıyor */}
        <div className="flex flex-col gap-2 px-2 py-2 bg-rose-50 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <span className="font-bold text-rose-600 text-sm">Canlar</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(maxHearts)].map((_, i) => (
                <Heart
                  key={i}
                  className={cn(
                    "w-4 h-4 transition-all",
                    i < hearts ? "text-rose-500 fill-rose-500" : "text-slate-200"
                  )}
                />
              ))}
            </div>
          </div>
          {/* Timer - Can doluyorsa göster */}
          {isRecovering && (
            <div className="flex items-center justify-center gap-1 text-xs text-rose-500 bg-white/60 rounded-lg py-1">
              <Clock className="w-3 h-3" />
              <span className="font-medium">{formatTime(timeUntilHeart)}</span>
              <span className="text-rose-400">sonra +1 ❤️</span>
            </div>
          )}
        </div>

        {/* Streak */}
        <div className="flex items-center justify-between px-2 py-2 bg-amber-50 rounded-xl">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            <span className="font-bold text-amber-600 text-sm">Seri</span>
          </div>
          <span className="font-extrabold text-amber-500">{displayUser.streak} gün</span>
        </div>

        {/* XP */}
        <div className="flex items-center justify-between px-2 py-2 bg-indigo-50 rounded-xl">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-500" />
            <span className="font-bold text-indigo-600 text-sm">XP</span>
          </div>
          <span className="font-extrabold text-indigo-500">{displayUser.totalXp}</span>
        </div>
      </div>

      {/* Alt Alan: Profil */}
      <div className="p-4 border-t border-slate-100">
        <Link href="/settings">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group">
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
              {displayUser.avatar}
            </div>
            {/* Bilgiler */}
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-700 truncate text-sm">{displayUser.name}</p>
              <p className="text-xs text-slate-400 font-medium">Profil</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
