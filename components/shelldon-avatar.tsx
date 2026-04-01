"use client";

import { cn } from "@/lib/utils";

export type ShelldonState = "idle" | "speaking" | "listening" | "happy" | "thinking" | "surprised" | "sad";

interface ShelldonAvatarProps {
    state?: ShelldonState;
    language?: string; // 'fr' | 'es' | 'en'
    size?: number;
    className?: string;
}

export function ShelldonAvatar({
    state = "idle",
    language = "fr",
    size = 200,
    className,
}: ShelldonAvatarProps) {
    // Dile göre aksesuar rengi
    const getAccessoryColor = () => {
        switch (language) {
            case "fr": return "#E63946"; // Kırmızı bere
            case "es": return "#FF6B35"; // Turuncu
            case "en": return "#1D3557"; // Lacivert
            default: return "#6366f1"; // Mor
        }
    };

    return (
        <div
            className={cn("relative inline-flex items-center justify-center", className)}
            style={{ width: size, height: size }}
        >
            {/* Parıltı efekti — happy durumda */}
            {state === "happy" && (
                <div className="absolute inset-0 z-0">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-3 h-3 rounded-full animate-ping"
                            style={{
                                backgroundColor: ["#fbbf24", "#f59e0b", "#eab308", "#facc15", "#fde047", "#fef08a"][i],
                                top: `${15 + Math.sin(i * 1.05) * 35}%`,
                                left: `${15 + Math.cos(i * 1.05) * 35}%`,
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: "1.5s",
                            }}
                        />
                    ))}
                </div>
            )}

            <svg
                viewBox="0 0 200 200"
                width={size}
                height={size}
                className="relative z-10"
            >
                {/* === KABUK (SHELL) === */}
                <ellipse
                    cx="100"
                    cy="115"
                    rx="62"
                    ry="55"
                    fill="url(#shellGradient)"
                    className={cn(
                        "transition-all duration-500",
                        state === "speaking" && "animate-[shellPulse_1s_ease-in-out_infinite]",
                        state === "happy" && "animate-[shellGlow_0.8s_ease-in-out_infinite]",
                        state === "surprised" && "animate-bounce"
                    )}
                />
                {/* Kabuk deseni */}
                <path
                    d="M70 95 Q100 80 130 95"
                    fill="none"
                    stroke="#5b8c3e"
                    strokeWidth="2.5"
                    opacity="0.4"
                />
                <path
                    d="M65 115 Q100 100 135 115"
                    fill="none"
                    stroke="#5b8c3e"
                    strokeWidth="2"
                    opacity="0.3"
                />
                <path
                    d="M70 135 Q100 120 130 135"
                    fill="none"
                    stroke="#5b8c3e"
                    strokeWidth="2"
                    opacity="0.3"
                />

                {/* === VÜCUT/KARIN === */}
                <ellipse
                    cx="100"
                    cy="140"
                    rx="35"
                    ry="22"
                    fill="#c6e377"
                    opacity="0.6"
                />

                {/* === BAŞ === */}
                <g className={cn(
                    "transition-transform duration-300",
                    state === "listening" && "animate-[headTilt_2s_ease-in-out_infinite]",
                    state === "surprised" && "scale-105 origin-bottom"
                )}>
                    <ellipse
                        cx="100"
                        cy="62"
                        rx="30"
                        ry="28"
                        fill="#8fbe49"
                    />

                    {/* Yüz alanı — daha açık */}
                    <ellipse cx="100" cy="66" rx="22" ry="18" fill="#a8d65a" />

                    {/* === GÖZLER === */}
                    <g className={cn(
                        state === "idle" && "animate-[blink_4s_ease-in-out_infinite]",
                        state === "happy" && "animate-[squint_0.5s_ease-in-out_forwards]",
                        state === "surprised" && "scale-110 origin-center"
                    )}>
                        {/* Sol göz */}
                        <ellipse 
                            cx="88" 
                            cy="58" 
                            rx={state === "surprised" ? "9" : "7"} 
                            ry={state === "surprised" ? "10" : "8"} 
                            fill={state === "sad" ? "#e2e8f0" : "white"} 
                        />
                        <circle
                            cx="89"
                            cy={state === "sad" ? "61" : "58"}
                            r={state === "surprised" ? "5" : "4"}
                            fill="#2d3748"
                            className={cn(
                                state === "listening" && "animate-[lookUp_2s_ease-in-out_infinite]"
                            )}
                        />
                        <circle cx="90.5" cy={state === "sad" ? "59.5" : "56.5"} r="1.5" fill="white" />

                        {/* Sağ göz */}
                        <ellipse 
                            cx="112" 
                            cy="58" 
                            rx={state === "surprised" ? "9" : "7"} 
                            ry={state === "surprised" ? "10" : "8"} 
                            fill={state === "sad" ? "#e2e8f0" : "white"} 
                        />
                        <circle
                            cx="113"
                            cy={state === "sad" ? "61" : "58"}
                            r={state === "surprised" ? "5" : "4"}
                            fill="#2d3748"
                            className={cn(
                                state === "listening" && "animate-[lookUp_2s_ease-in-out_infinite]"
                            )}
                        />
                        <circle cx="114.5" cy={state === "sad" ? "59.5" : "56.5"} r="1.5" fill="white" />
                    </g>

                    {/* === AĞIZ === */}
                    {state === "speaking" ? (
                        <ellipse
                            cx="100"
                            cy="73"
                            rx="6"
                            ry="4"
                            fill="#6b8c3e"
                            className="animate-[mouthOpen_0.4s_ease-in-out_infinite]"
                        />
                    ) : state === "happy" ? (
                        <path
                            d="M90 70 Q100 80 110 70"
                            fill="none"
                            stroke="#5b8c3e"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />
                    ) : state === "surprised" ? (
                        <circle
                            cx="100"
                            cy="75"
                            r="5"
                            fill="#6b8c3e"
                        />
                    ) : state === "sad" ? (
                        <path
                            d="M92 78 Q100 72 108 78"
                            fill="none"
                            stroke="#5b8c3e"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    ) : (
                        <path
                            d="M93 72 Q100 76 107 72"
                            fill="none"
                            stroke="#5b8c3e"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    )}

                    {/* Yanaklar — happy durumda kızarır */}
                    {state === "happy" && (
                        <>
                            <circle cx="78" cy="68" r="5" fill="#ffb5b5" opacity="0.5" />
                            <circle cx="122" cy="68" r="5" fill="#ffb5b5" opacity="0.5" />
                        </>
                    )}
                </g>

                {/* === AKSESUAR (DİLE GÖRE) === */}
                {language === "fr" && (
                    /* Fransız beresi */
                    <g>
                        <ellipse cx="100" cy="40" rx="22" ry="8" fill={getAccessoryColor()} />
                        <path
                            d="M78 42 Q80 28 100 26 Q120 28 122 42"
                            fill={getAccessoryColor()}
                        />
                        <circle cx="100" cy="26" r="3" fill={getAccessoryColor()} />
                    </g>
                )}
                {language === "es" && (
                    /* İspanyol güneş gözlüğü — gözlerin üstünde */
                    <g>
                        <rect x="79" y="52" width="17" height="12" rx="3" fill="#1a1a2e" opacity="0.8" />
                        <rect x="104" y="52" width="17" height="12" rx="3" fill="#1a1a2e" opacity="0.8" />
                        <line x1="96" y1="57" x2="104" y2="57" stroke="#1a1a2e" strokeWidth="2" />
                        <line x1="79" y1="57" x2="74" y2="53" stroke="#1a1a2e" strokeWidth="2" />
                        <line x1="121" y1="57" x2="126" y2="53" stroke="#1a1a2e" strokeWidth="2" />
                    </g>
                )}
                {language === "en" && (
                    /* İngiliz şapka */
                    <g>
                        <ellipse cx="100" cy="38" rx="30" ry="5" fill={getAccessoryColor()} />
                        <rect x="84" y="22" width="32" height="18" rx="4" fill={getAccessoryColor()} />
                        <rect x="88" y="30" width="24" height="3" rx="1" fill="#c9a84c" />
                    </g>
                )}

                {/* === KOLLAR === */}
                <ellipse
                    cx="55"
                    cy="125"
                    rx="12"
                    ry="8"
                    fill="#8fbe49"
                    transform="rotate(-20, 55, 125)"
                    className={cn(
                        state === "speaking" && "animate-[waveLeft_1.5s_ease-in-out_infinite]",
                    )}
                />
                <ellipse
                    cx="145"
                    cy="125"
                    rx="12"
                    ry="8"
                    fill="#8fbe49"
                    transform="rotate(20, 145, 125)"
                    className={cn(
                        state === "happy" && "animate-[waveRight_0.6s_ease-in-out_infinite]",
                    )}
                />

                {/* === AYAKLAR === */}
                <ellipse cx="75" cy="162" rx="10" ry="6" fill="#8fbe49" />
                <ellipse cx="125" cy="162" rx="10" ry="6" fill="#8fbe49" />

                {/* === GRADIENT TANIMLARI === */}
                <defs>
                    <radialGradient id="shellGradient" cx="40%" cy="35%">
                        <stop offset="0%" stopColor="#a8d65a" />
                        <stop offset="50%" stopColor="#7cb342" />
                        <stop offset="100%" stopColor="#558b2f" />
                    </radialGradient>
                </defs>
            </svg>

            {/* Konuşma durumunda ses dalgaları */}
            {state === "speaking" && (
                <div className="absolute -right-2 top-1/3 flex flex-col gap-1">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1.5 bg-emerald-400 rounded-full animate-[soundWave_0.6s_ease-in-out_infinite]"
                            style={{
                                height: `${8 + i * 4}px`,
                                animationDelay: `${i * 0.15}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Dinleme durumunda mikrofon göstergesi */}
            {state === "listening" && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 bg-rose-400 rounded-full animate-[soundBar_0.5s_ease-in-out_infinite]"
                            style={{
                                height: `${4 + Math.random() * 12}px`,
                                animationDelay: `${i * 0.1}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Düşünme durumunda noktalar */}
            {state === "thinking" && (
                <div className="absolute -right-4 top-1/4 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
