"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, Bot, Theater, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/learn", icon: Home, label: "Ana" },
    { href: "/scene", icon: Theater, label: "Sahne" },
    { href: "/ai-tutor", icon: Bot, label: "Luna" },
    { href: "/leaderboard", icon: Trophy, label: "Sıralama" },
    { href: "/settings", icon: User, label: "Profil" },
];

export const MobileBottomNav = () => {
    const pathname = usePathname();

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/60 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
            {/* Safe area for devices with home indicator */}
            <div className="flex items-center justify-around px-2 py-2 pb-[env(safe-area-inset-bottom,8px)]">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col items-center justify-center min-w-[60px] py-1 group"
                        >
                            <div
                                className={cn(
                                    "p-2 rounded-2xl transition-all duration-300 mb-0.5",
                                    isActive
                                        ? "bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30"
                                        : "group-hover:bg-slate-100"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "w-5 h-5 transition-transform duration-200 group-hover:scale-110",
                                        isActive ? "text-white" : "text-slate-500"
                                    )}
                                />
                            </div>
                            <span
                                className={cn(
                                    "text-[10px] font-bold tracking-wide transition-colors",
                                    isActive ? "text-indigo-600" : "text-slate-400"
                                )}
                            >
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
