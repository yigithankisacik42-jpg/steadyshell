import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Sparkles, ArrowRight, CheckCircle2, Globe, Zap, BookOpen, MessageCircle, Library, Target, Mic, Bot, Theater, Award, Video } from "lucide-react";
import { APP_CONFIG, APP_INFO } from "@/lib/config";

const features = [
    {
        icon: BookOpen,
        title: "Ders Anlatımı",
        description: "Her ünite için detaylı, adım adım dil bilgisi açıklamaları ve örnekler.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Target,
        title: "Kelime Çalışması",
        description: "Görsel kartlarla zengin kelime dağarcığı oluştur, telaffuzları dinle.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: MessageCircle,
        title: "Kalıp İfadeler",
        description: "Günlük konuşmalarda kullanılan hazır kalıpları öğren ve pratik yap.",
        gradient: "from-orange-500 to-amber-500",
    },
    {
        icon: Library,
        title: "Dilbilgisi",
        description: "Fiil çekimleri, zamanlar ve cümle yapıları ile sağlam bir temel oluştur.",
        gradient: "from-purple-500 to-violet-500",
    },
    {
        icon: BookOpen,
        title: "Okuma Parçaları",
        description: "Seviyene uygun hikayeler ve metinler ile anlama becerisini geliştir.",
        gradient: "from-rose-500 to-pink-500",
    },
    {
        icon: Mic,
        title: "Konuşma Pratiği",
        description: "Ses tanıma ile telaffuzunu test et ve native speaker gibi konuş.",
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        icon: Video,
        title: "Video Dersler",
        description: "Görsel ve işitsel öğrenme ile konuları daha hızlı ve kalıcı kavra.",
        gradient: "from-red-500 to-rose-500",
    },
    {
        icon: Bot,
        title: "AI Tutor (Luna)",
        description: "Yapay zeka destekli özel öğretmenin ile istediğin konuda sohbet et.",
        gradient: "from-fuchsia-500 to-purple-500",
    },
    {
        icon: Theater,
        title: "Sahne Modu",
        description: "Gerçek hayat senaryolarında rol yaparak dili pratiğe dök.",
        gradient: "from-amber-500 to-yellow-500",
    },
];

export default function Home() {
    const isEarlyAccess = APP_CONFIG.isEarlyAccess;

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden flex flex-col relative selection:bg-indigo-500/30 selection:text-indigo-200">

            {/* --- ANIMATED BACKGROUND --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-violet-600/20 rounded-full blur-[140px] animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-fuchsia-600/20 rounded-full blur-[100px] animate-pulse mix-blend-screen" style={{ animationDelay: '4s' }} />
            </div>

            {/* --- HEADER --- */}
            <header className="h-24 w-full px-6 lg:px-12 flex items-center justify-between relative z-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative group cursor-pointer">
                        <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity rounded-full"></div>
                        <Image
                            src="/mascot_v2.png"
                            alt="Shelby"
                            width={42}
                            height={42}
                            className="relative z-10 drop-shadow-lg transition-transform group-hover:scale-110 duration-300"
                        />
                    </div>
                    <h1 className="text-2xl font-black bg-gradient-to-r from-white via-indigo-200 to-violet-200 bg-clip-text text-transparent tracking-tighter">SteadyShell</h1>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 font-bold rounded-xl transition-all">
                            Giriş Yap
                        </Button>
                    </Link>
                    <Link href="/register" className="hidden sm:block">
                        <Button className="bg-white text-slate-900 hover:bg-indigo-50 font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95">
                            Başla
                        </Button>
                    </Link>
                </div>
            </header>

            {/* --- HERO SECTION --- */}
            <main className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 gap-12 lg:gap-20 max-w-7xl mx-auto w-full relative z-10 py-12">

                {/* Left Content */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in-up">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-bold text-emerald-300 tracking-wide uppercase">%100 Ücretsiz Eğitim</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                        Dil Öğrenmenin <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block animate-gradient-x">
                            Geleceği Burada.
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-300 font-medium max-w-lg leading-relaxed">
                        Sıkıcı ders kitaplarını unut. Yapay zeka destekli, oyunlaştırılmış ve tamamen ücretsiz bir deneyimle İngilizce, İspanyolca ve Fransızca öğren.
                    </p>

                    <div className="flex items-center gap-6 pt-2 opacity-80">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            Kredi Kartı Gerekmez
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            Her Zaman Ücretsiz
                        </div>
                    </div>
                </div>

                {/* Right Content / Visual */}
                <div className="flex-1 relative flex items-center justify-center lg:justify-end">
                    <div className="relative w-[320px] h-[320px] lg:w-[500px] lg:h-[500px]">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] shadow-2xl relative animate-float">
                                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-lg rotate-12 animate-bounce-slow">
                                    <Star className="w-8 h-8 text-white fill-white" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-indigo-500 to-purple-600 px-6 py-3 rounded-2xl shadow-lg -rotate-6 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-white" />
                                    <span className="font-bold text-white">3 Dil</span>
                                </div>

                                <Image
                                    src="/mascot_v2.png"
                                    alt="Shelby"
                                    width={280}
                                    height={280}
                                    className="drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- FEATURES SECTION --- */}
            <section className="relative z-10 py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            <span className="text-sm font-bold text-indigo-300 uppercase tracking-wide">Neler Öğreneceksin?</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black mb-4">
                            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Kapsamlı Öğrenme Deneyimi</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Sadece kelime ezberlemek değil, dili gerçekten konuşabilmek için ihtiyacın olan her şey burada.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="w-full border-t border-white/5 bg-slate-950/50 backdrop-blur-md py-6 px-4 text-center z-10 relative">
                <div className="flex justify-center items-center gap-4 text-slate-500 text-sm font-medium">
                    <span>© 2025 SteadyShell</span>
                    {isEarlyAccess && (
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400 text-xs">Beta v{APP_INFO.version}</span>
                    )}
                </div>
            </footer>
        </div>
    );
}