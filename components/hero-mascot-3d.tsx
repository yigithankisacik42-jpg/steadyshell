"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function HeroMascot3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const rafRef = useRef<number | null>(null);
    const targetRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Smooth mouse tracking with requestAnimationFrame
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate rotation based on mouse position relative to element center
        const maxRotation = 20;
        const x = ((e.clientY - centerY) / (rect.height / 2)) * maxRotation;
        const y = ((e.clientX - centerX) / (rect.width / 2)) * -maxRotation;

        targetRef.current = {
            x: Math.max(-maxRotation, Math.min(maxRotation, x)),
            y: Math.max(-maxRotation, Math.min(maxRotation, y))
        };
    }, []);

    // Smooth animation loop
    useEffect(() => {
        let currentX = 0;
        let currentY = 0;
        const lerp = 0.08; // Smoothing factor

        const animate = () => {
            currentX += (targetRef.current.x - currentX) * lerp;
            currentY += (targetRef.current.y - currentY) * lerp;
            setRotation({ x: currentX, y: currentY });
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    // Listen to mouse globally for parallax
    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    // Reset rotation on mouse leave
    const handleMouseLeave = () => {
        setIsHovered(false);
        targetRef.current = { x: 0, y: 0 };
    };

    // Click bounce effect
    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 600);
    };

    if (!isMounted) {
        return (
            <div className="flex-1 relative w-full flex items-center justify-center min-h-[400px]">
                <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full bg-violet-100/30 animate-pulse" />
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className="flex-1 relative w-full flex items-center justify-center min-h-[400px] md:min-h-[500px] cursor-pointer select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{ perspective: "1200px" }}
        >
            {/* ═══ AMBIENT GLOW LAYERS ═══ */}
            <div
                className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)",
                    filter: "blur(40px)",
                    animation: "pulse 4s ease-in-out infinite",
                }}
            />
            <div
                className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 60%)",
                    filter: "blur(60px)",
                    animation: "pulse 3s ease-in-out infinite 1s",
                }}
            />

            {/* ═══ ORBITING PARTICLES ═══ */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: `${8 + i * 3}px`,
                        height: `${8 + i * 3}px`,
                        background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(167,139,250,0.8)' : 'rgba(196,181,253,0.6)'}, transparent)`,
                        animation: `orbit-particle-${i} ${6 + i * 2}s linear infinite`,
                        boxShadow: `0 0 ${10 + i * 4}px rgba(139,92,246,0.4)`,
                    }}
                />
            ))}

            {/* ═══ FLOATING RING ═══ */}
            <div
                className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border-2 border-violet-300/20 pointer-events-none"
                style={{
                    animation: "spin 20s linear infinite",
                    transform: `rotateX(${rotation.x * 0.5}deg) rotateY(${rotation.y * 0.5}deg)`,
                }}
            />
            <div
                className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] rounded-full border border-violet-200/10 pointer-events-none"
                style={{
                    animation: "spin 30s linear infinite reverse",
                    transform: `rotateX(${rotation.x * 0.3}deg) rotateY(${rotation.y * 0.3}deg)`,
                }}
            />

            {/* ═══ LIGHT BEAM REFLECTION ═══ */}
            <div
                className="absolute w-[200px] h-[300px] md:w-[300px] md:h-[400px] pointer-events-none opacity-30"
                style={{
                    background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(30deg)`,
                    filter: "blur(20px)",
                    transition: "transform 0.1s ease-out",
                }}
            />

            {/* ═══ 3D PLATFORM / SHADOW ═══ */}
            <div
                className="absolute bottom-[10%] md:bottom-[8%] w-[180px] md:w-[250px] h-[30px] md:h-[40px] rounded-[50%] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)",
                    filter: "blur(10px)",
                    transform: `scale(${isHovered ? 1.1 : 1}) translateY(${isHovered ? '5px' : '0px'})`,
                    transition: "transform 0.4s ease-out",
                }}
            />

            {/* ═══ MAIN MASCOT WITH 3D TRANSFORMS ═══ */}
            <div
                className="relative z-10"
                style={{
                    transform: `
                        rotateX(${rotation.x * 0.6}deg) 
                        rotateY(${rotation.y * 0.6}deg) 
                        translateZ(${isHovered ? '30px' : '0px'})
                        scale(${isClicked ? 1.15 : isHovered ? 1.05 : 1})
                    `,
                    transition: isClicked
                        ? "transform 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                        : "transform 0.3s ease-out",
                    transformStyle: "preserve-3d",
                    animation: "mascot-float 5s ease-in-out infinite",
                }}
            >
                {/* Glow behind mascot */}
                <div
                    className="absolute -inset-8 md:-inset-12 rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 60%)",
                        filter: "blur(25px)",
                        transform: `translateZ(-20px)`,
                        opacity: isHovered ? 1 : 0.6,
                        transition: "opacity 0.4s ease",
                    }}
                />

                {/* The actual mascot image */}
                <Image
                    src="/mascot_v2.png"
                    alt="Shelldon - Kişisel Dil Koçunuz"
                    width={420}
                    height={420}
                    className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] object-contain relative z-10"
                    style={{
                        filter: `drop-shadow(0 20px 40px rgba(124,58,237,0.3)) drop-shadow(0 8px 16px rgba(0,0,0,0.1))`,
                        transform: "translateZ(40px)",
                    }}
                    priority
                    draggable={false}
                />

                {/* Sparkle effects on hover */}
                {isHovered && (
                    <>
                        <div className="absolute top-[10%] right-[5%] w-3 h-3 rounded-full bg-amber-300 animate-ping" style={{ animationDuration: '1s' }} />
                        <div className="absolute top-[30%] left-[2%] w-2 h-2 rounded-full bg-violet-300 animate-ping" style={{ animationDuration: '1.3s' }} />
                        <div className="absolute bottom-[20%] right-[10%] w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" style={{ animationDuration: '0.8s' }} />
                    </>
                )}
            </div>

            {/* ═══ FLOATING BADGES ═══ */}
            <div
                className="absolute top-[15%] right-[5%] md:right-[10%] bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-violet-100/50 pointer-events-none z-20"
                style={{
                    animation: "badge-float-1 4s ease-in-out infinite",
                    transform: `rotateX(${rotation.x * 0.3}deg) rotateY(${rotation.y * 0.3}deg) translateZ(60px)`,
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="flex items-center gap-2">
                    <span className="text-lg">🎓</span>
                    <span className="text-xs font-bold text-violet-700">AI Destekli</span>
                </div>
            </div>

            <div
                className="absolute bottom-[20%] left-[5%] md:left-[8%] bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-emerald-100/50 pointer-events-none z-20"
                style={{
                    animation: "badge-float-2 5s ease-in-out infinite",
                    transform: `rotateX(${rotation.x * 0.3}deg) rotateY(${rotation.y * 0.3}deg) translateZ(50px)`,
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="flex items-center gap-2">
                    <span className="text-lg">🌍</span>
                    <span className="text-xs font-bold text-emerald-700">3 Dil</span>
                </div>
            </div>

            <div
                className="absolute top-[55%] right-[2%] md:right-[5%] bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-amber-100/50 pointer-events-none z-20"
                style={{
                    animation: "badge-float-3 4.5s ease-in-out infinite",
                    transform: `rotateX(${rotation.x * 0.3}deg) rotateY(${rotation.y * 0.3}deg) translateZ(55px)`,
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    <span className="text-xs font-bold text-amber-700">İnteraktif</span>
                </div>
            </div>

            {/* ═══ CLICK RIPPLE ═══ */}
            {isClicked && (
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
                >
                    <div
                        className="w-[100px] h-[100px] rounded-full border-2 border-violet-400/50"
                        style={{
                            animation: "ripple-expand 0.6s ease-out forwards",
                        }}
                    />
                </div>
            )}

            {/* ═══ CSS KEYFRAMES (injected inline) ═══ */}
            <style jsx>{`
                @keyframes mascot-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                @keyframes badge-float-1 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-8px) translateX(3px); }
                    66% { transform: translateY(4px) translateX(-2px); }
                }

                @keyframes badge-float-2 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    40% { transform: translateY(6px) translateX(-4px); }
                    70% { transform: translateY(-10px) translateX(2px); }
                }

                @keyframes badge-float-3 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-12px) translateX(5px); }
                }

                @keyframes orbit-particle-0 {
                    0% { transform: rotate(0deg) translateX(160px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(160px) rotate(-360deg); }
                }
                @keyframes orbit-particle-1 {
                    0% { transform: rotate(60deg) translateX(190px) rotate(-60deg); }
                    100% { transform: rotate(420deg) translateX(190px) rotate(-420deg); }
                }
                @keyframes orbit-particle-2 {
                    0% { transform: rotate(120deg) translateX(150px) rotate(-120deg); }
                    100% { transform: rotate(480deg) translateX(150px) rotate(-480deg); }
                }
                @keyframes orbit-particle-3 {
                    0% { transform: rotate(180deg) translateX(200px) rotate(-180deg); }
                    100% { transform: rotate(540deg) translateX(200px) rotate(-540deg); }
                }
                @keyframes orbit-particle-4 {
                    0% { transform: rotate(240deg) translateX(170px) rotate(-240deg); }
                    100% { transform: rotate(600deg) translateX(170px) rotate(-600deg); }
                }
                @keyframes orbit-particle-5 {
                    0% { transform: rotate(300deg) translateX(210px) rotate(-300deg); }
                    100% { transform: rotate(660deg) translateX(210px) rotate(-660deg); }
                }

                @keyframes ripple-expand {
                    0% { transform: scale(0.5); opacity: 1; }
                    100% { transform: scale(4); opacity: 0; }
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
            `}</style>
        </div>
    );
}
