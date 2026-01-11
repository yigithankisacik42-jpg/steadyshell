import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Sparkles } from "lucide-react";
import { APP_CONFIG, APP_INFO } from "@/lib/config";

export default function Home() {
    const isEarlyAccess = APP_CONFIG.isEarlyAccess;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex flex-col">

            {/* ÜST MENÜ (HEADER) */}
            <header className="h-20 w-full border-b border-slate-200/50 px-4 lg:px-10 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    {/* Turtle Logo */}
                    <div className="w-10 h-10 relative">
                        <Image
                            src="/mascot.png"
                            alt="Shelby"
                            width={40}
                            height={40}
                            className="drop-shadow-md"
                        />
                    </div>
                    <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">SteadyShell</h1>
                </div>
                <div className="hidden md:flex gap-4">
                    <div className="flex items-center text-slate-400 font-bold gap-1"><Star className="w-5 h-5 text-amber-400 fill-amber-400" /> 5.0</div>
                </div>
            </header>

            {/* ORTA ALAN (HERO SECTION) */}
            <main className="flex-1 flex flex-col lg:flex-row items-center justify-center p-4 gap-10 max-w-[1000px] mx-auto w-full">

                {/* SOL TARAFA (MASKOT ALANI) */}
                <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full animate-pulse opacity-40"></div>
                    <div className="z-10 bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-2xl shadow-violet-200/50 rotate-3 transition-transform hover:rotate-0 duration-500">
                        <Image
                            src="/mascot.png"
                            alt="Shelby - SteadyShell Mascot"
                            width={180}
                            height={180}
                            className="drop-shadow-xl"
                        />
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold px-4 py-2 rounded-2xl rotate-12 shadow-lg">
                            <Sparkles className="inline w-4 h-4 mr-1" />%100 Ücretsiz!
                        </div>
                    </div>
                </div>

                {/* SAĞ TARAF (YAZI VE BUTONLAR) */}
                <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
                        Yeni bir dil öğrenmenin <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">ücretsiz</span> ve eğlenceli yolu.
                    </h1>
                    <p className="text-lg text-slate-500 font-medium max-w-[400px]">
                        Sıkıcı ders kitaplarını unut. Oyun oynar gibi İngilizce, İspanyolca ve Fransızca öğren.
                    </p>

                    {/* Early Access Banner */}
                    {isEarlyAccess && (
                        <div className="w-full max-w-[350px] bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-3 text-center">
                            <p className="text-sm font-bold text-amber-700">
                                🎉 Erken Erişim döneminde tüm özellikler ücretsiz!
                            </p>
                        </div>
                    )}

                    <div className="flex flex-col gap-3 w-full max-w-[350px]">
                        {/* BAŞLA BUTONU */}
                        <Link href="/register" className="w-full">
                            <Button size="lg" className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-xl py-7 rounded-2xl border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1 transition-all shadow-xl shadow-indigo-300/50">
                                HEMEN BAŞLA
                            </Button>
                        </Link>

                        {/* GİRİŞ BUTONU */}
                        <Link href="/login" className="w-full">
                            <Button variant="outline" size="lg" className="w-full text-slate-700 font-bold text-xl py-7 rounded-2xl border-2 border-slate-200 border-b-4 hover:bg-slate-50 active:border-b-2 active:translate-y-1 transition-all uppercase tracking-wide">
                                ZATEN HESABIM VAR
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            {/* ALT KISIM (FOOTER) */}
            <footer className="h-20 border-t border-slate-200/50 flex items-center justify-center text-slate-400 font-medium bg-white/50">
                <div className="flex items-center gap-2">
                    <span>© 2025 SteadyShell</span>
                    {isEarlyAccess && (
                        <span className="text-xs bg-slate-100 px-2 py-1 rounded-lg">v{APP_INFO.version}</span>
                    )}
                </div>
            </footer>
        </div>
    );
}