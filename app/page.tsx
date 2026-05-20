import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_CONFIG, APP_INFO } from "@/lib/config";
import { ParticlesBackground } from "@/components/particles-background";
import { LandingHeroEffects } from "@/components/landing-hero-effects";
import { HeroMascot3D } from "@/components/hero-mascot-3d";

export default function Home() {
    const isEarlyAccess = APP_CONFIG.isEarlyAccess;

    return (
        <div className="min-h-screen bg-white text-slate-900 overflow-hidden flex flex-col relative antialiased selection:bg-violet-500/20 selection:text-violet-900">

            {/* === BACKGROUND EFFECTS === */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at top right, rgba(237, 233, 254, 0.8), transparent 40%), radial-gradient(circle at bottom left, rgba(237, 233, 254, 0.5), transparent 40%)",
                    zIndex: 0,
                }}
            />

            {/* Particle Background */}
            <ParticlesBackground />

            {/* Decorative Floating Shapes */}
            <div
                className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-tr from-violet-500/20 to-violet-700/5 rounded-2xl blur-xl pointer-events-none tilt-element"
                style={{ zIndex: 1, animation: "float-rotate 8s ease-in-out infinite" }}
            />
            <div
                className="fixed bottom-40 right-20 w-64 h-64 border-4 border-violet-500/10 rounded-full blur-sm pointer-events-none tilt-element"
                style={{ zIndex: 1, animation: "float-rotate-reverse 10s ease-in-out infinite" }}
            />
            <div
                className="fixed top-1/2 left-1/4 w-16 h-16 bg-violet-100/30 rounded-lg blur-md pointer-events-none tilt-element"
                style={{ zIndex: 1, animation: "float-rotate 8s ease-in-out infinite" }}
            />

            {/* Client-side Effects */}
            <LandingHeroEffects />

            {/* === GLASSMORPHISM NAVBAR === */}
            <header
                className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1280px] rounded-xl border border-white/40 shadow-[0_20px_50px_rgba(109,40,217,0.1)]"
                style={{
                    zIndex: 50,
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                }}
            >
                <div className="flex justify-between items-center px-6 md:px-8 py-3 w-full">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 relative">
                            <div className="absolute inset-0 bg-violet-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity rounded-full" />
                            <Image
                                src="/mascot_v2.png"
                                alt="Shelldon"
                                width={36}
                                height={36}
                                className="relative z-10 drop-shadow-md transition-transform group-hover:scale-110 duration-300"
                            />
                        </div>
                        <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent">
                            SteadyShell
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-slate-700 text-base font-medium hover:text-violet-600 transition-all duration-300 hover:scale-105">
                            Özellikler
                        </a>
                        <a href="#how-it-works" className="text-slate-700 text-base font-medium hover:text-violet-600 transition-all duration-300 hover:scale-105">
                            Nasıl Çalışır?
                        </a>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <Link href="/login" className="hidden sm:block">
                            <Button
                                variant="ghost"
                                className="text-slate-600 hover:text-violet-700 hover:bg-violet-50 font-semibold rounded-lg transition-all"
                            >
                                Giriş Yap
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button
                                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_60px_rgba(124,58,237,0.15)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1),0_40px_100px_rgba(124,58,237,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Hemen Başla
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* === HERO SECTION === */}
            <main className="flex-grow pt-[120px] pb-16 md:pb-24 relative" style={{ zIndex: 10 }}>
                <section className="max-w-[1280px] mx-auto px-5 md:px-6 min-h-[70vh] md:min-h-[80vh] flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 reveal active">

                    {/* Text Content */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-7">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full border border-violet-200/50 shadow-sm hover:scale-105 transition-transform duration-300">
                            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                            <span className="text-xs font-semibold tracking-wider uppercase text-violet-700">
                                Yeni Nesil Eğitim
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 max-w-2xl">
                            Geleceğin{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-violet-500 inline-block hover:scale-[1.03] transition-transform duration-300">
                                Dil Öğrenme
                            </span>{" "}
                            Deneyimi
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-slate-500 font-medium max-w-xl leading-relaxed">
                            Sınırları ortadan kaldıran, tamamen interaktif bir ortamda, yapay zeka destekli eğitmenlerle dil becerilerinizi zirveye taşıyın. Öğrenme süreciniz artık bir zorunluluk değil, sürükleyici bir macera.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link href="/register">
                                <Button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_60px_rgba(124,58,237,0.15)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1),0_40px_100px_rgba(124,58,237,0.25)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-base">
                                    Hemen Başla
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button
                                    variant="outline"
                                    className="border border-white/60 bg-white/70 text-slate-700 font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-base"
                                    style={{ backdropFilter: "blur(12px)" }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    Videoyu İzle
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Graphic - Interactive 3D Shelldon Mascot */}
                    <HeroMascot3D />
                </section>

                {/* === FEATURES / BENTO GRID === */}
                <section id="features" className="max-w-[1280px] mx-auto px-5 md:px-6 mt-20 md:mt-32 reveal">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 hover:scale-[1.02] transition-transform duration-300 inline-block">
                            Öğrenmenin Yeni Boyutu
                        </h2>
                        <p className="text-base text-slate-500 max-w-2xl mx-auto">
                            Geleneksel yöntemleri geride bırakın. Modern teknolojinin sunduğu imkanlarla akıcı konuşmaya her zamankinden daha yakınsınız.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
                        {/* Card 1 - AI Tutor */}
                        <div
                            className="group bg-white/70 border-t border-violet-200/30 rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_60px_rgba(124,58,237,0.1)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1),0_40px_100px_rgba(124,58,237,0.2)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 tilt-element"
                            data-tilt-type="card"
                            style={{ backdropFilter: "blur(12px)" }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6 border border-violet-200/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-violet-600 group-hover:text-violet-700 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 8V4H8" />
                                    <rect width="16" height="12" x="4" y="8" rx="2" />
                                    <path d="M2 14h2" />
                                    <path d="M20 14h2" />
                                    <path d="M15 13v2" />
                                    <path d="M9 13v2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Yapay Zeka Eğitmen</h3>
                            <p className="text-base text-slate-500">
                                Sizin hızınıza ve seviyenize anında uyum sağlayan, 7/24 yanınızda olan kişiselleştirilmiş AI dil koçunuz.
                            </p>
                        </div>

                        {/* Card 2 - 3D Learning Paths */}
                        <div
                            className="group bg-white/70 border-t border-violet-200/30 rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_60px_rgba(124,58,237,0.1)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1),0_40px_100px_rgba(124,58,237,0.2)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 md:translate-y-8 tilt-element"
                            data-tilt-type="card"
                            style={{ backdropFilter: "blur(12px)" }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6 border border-violet-200/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-violet-600 group-hover:text-violet-700 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.29 7 12 12 20.71 7" />
                                    <line x1="12" y1="22" x2="12" y2="12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">İnteraktif Öğrenme Yolları</h3>
                            <p className="text-base text-slate-500">
                                Kelime ve gramer yapılarını görsel hafıza teknikleriyle birleştiren, zengin ve etkileşimli rotalar.
                            </p>
                        </div>

                        {/* Card 3 - Global Community */}
                        <div
                            className="group bg-white/70 border-t border-violet-200/30 rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_60px_rgba(124,58,237,0.1)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1),0_40px_100px_rgba(124,58,237,0.2)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 tilt-element"
                            data-tilt-type="card"
                            style={{ backdropFilter: "blur(12px)" }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6 border border-violet-200/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-violet-600 group-hover:text-violet-700 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Küresel Topluluk</h3>
                            <p className="text-base text-slate-500">
                                Dünyanın dört bir yanından öğrencilerle pratik yapın, anında geri bildirim alın ve kültürel bariyerleri aşın.
                            </p>
                        </div>
                    </div>
                </section>

                {/* === HOW IT WORKS SECTION === */}
                <section id="how-it-works" className="max-w-[1280px] mx-auto px-5 md:px-6 mt-20 md:mt-32 reveal">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                            Nasıl Çalışır?
                        </h2>
                        <p className="text-base text-slate-500 max-w-2xl mx-auto">
                            Sadece 3 adımda dil öğrenme yolculuğunuza başlayın.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Kayıt Ol",
                                description: "Ücretsiz hesap oluştur ve seviyeni belirle. Kredi kartı gerekmez.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <line x1="19" y1="8" x2="19" y2="14" />
                                        <line x1="22" y1="11" x2="16" y2="11" />
                                    </svg>
                                ),
                            },
                            {
                                step: "02",
                                title: "Dersine Başla",
                                description: "Shelldon seni karşılasın. İnteraktif dersler, oyunlar ve AI destekli pratik.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                ),
                            },
                            {
                                step: "03",
                                title: "Ustalaş",
                                description: "Her gün biraz daha ileri. Rozetler kazan, seviyeleri aş ve akıcı konuş.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="8" r="6" />
                                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                                    </svg>
                                ),
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="relative bg-white/70 border border-violet-100/50 rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-500 group"
                                style={{ backdropFilter: "blur(12px)" }}
                            >
                                <div className="text-7xl font-black text-violet-100 absolute top-4 right-6 select-none group-hover:text-violet-200 transition-colors duration-300">
                                    {item.step}
                                </div>
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center mb-6 text-white shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h3>
                                <p className="text-base text-slate-500 relative z-10">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* === CTA SECTION === */}
                <section className="max-w-[1280px] mx-auto px-5 md:px-6 mt-20 md:mt-32 reveal">
                    <div
                        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
                        style={{
                            background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #8b5cf6 100%)",
                        }}
                    >
                        {/* Decorative circles */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-xl" />

                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <Image
                                src="/mascot_v2.png"
                                alt="Shelldon"
                                width={100}
                                height={100}
                                className="drop-shadow-2xl"
                                style={{ animation: "float-rotate 8s ease-in-out infinite" }}
                            />
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight">
                                Dil öğrenme yolculuğun burada başlıyor
                            </h2>
                            <p className="text-lg text-white/80 max-w-xl">
                                Shelldon ile tanış, dil becerilerini geliştir. Tamamen ücretsiz, her zaman yanında.
                            </p>
                            <Link href="/register">
                                <Button className="bg-white text-violet-700 hover:bg-violet-50 font-bold px-10 py-6 rounded-xl shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-lg">
                                    Ücretsiz Başla 🚀
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* === FOOTER === */}
            <footer className="bg-white w-full rounded-t-xl border-t border-slate-200 mt-auto relative" style={{ zIndex: 10 }}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-5 md:px-16 py-12 max-w-[1280px] mx-auto">
                    <Link href="/" className="text-2xl font-bold text-violet-700 hover:scale-105 transition-transform duration-300">
                        SteadyShell
                    </Link>

                    <nav className="flex flex-wrap justify-center gap-6">
                        {["Destek", "Güvenlik", "Kariyer", "İletişim"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm font-semibold tracking-wider uppercase text-slate-600 hover:text-violet-600 transition-colors duration-200 hover:-translate-y-0.5 transform inline-block"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="text-sm text-slate-500 text-center md:text-right flex items-center gap-3">
                        <span>© 2025 SteadyShell. Geleceğin dil öğrenme platformu.</span>
                        {isEarlyAccess && (
                            <span className="px-2 py-0.5 rounded bg-violet-50 border border-violet-200 text-violet-600 text-xs font-semibold">
                                Beta v{APP_INFO.version}
                            </span>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
}