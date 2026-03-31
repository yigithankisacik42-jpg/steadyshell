"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, Mic, MicOff, Send, Volume2, VolumeX, Sparkles, MessageCircle, Check, Loader2, Lightbulb, CheckCircle2, Circle, Phone, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShelldonAvatar } from "@/components/shelldon-avatar";
import { Scene3D } from "@/components/scene-3d";
import { SHELLDON_SCENARIOS, buildShelldonPrompt, buildFeedbackPrompt, buildHintPrompt, type ShelldonScenario, type ShelldonPracticeMode } from "@/lib/shelldon-ai";
import { useSpeech } from "@/lib/use-speech";
import { useUserProgress } from "@/contexts/user-progress-context";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageByCode } from "@/lib/languages";
import { findUnitByLessonId } from "@/lib/curriculum";

const LANGUAGES = [
    { code: "fr", name: "Fransızca", flag: "🇫🇷" },
    { code: "es", name: "İspanyolca", flag: "🇪🇸" },
    { code: "en", name: "İngilizce", flag: "🇬🇧" },
];

const PRACTICE_MODES: { id: ShelldonPracticeMode; label: string; description: string; icon: string }[] = [
    { id: "speaking", label: "Konuşma", description: "Doğal diyalog ve akıcılık", icon: "💬" },
    { id: "vocab", label: "Kelime", description: "Hedef kelimelerle pratik", icon: "📚" },
    { id: "grammar", label: "Gramer", description: "Tek yapı, net örnek", icon: "🧩" },
];

interface Correction {
    wrong: string;
    right: string;
    explanation: string;
}

interface Message {
    role: "user" | "assistant";
    content: string;
    imageUrl?: string;
    corrections?: Correction[];
}

interface FeedbackData {
    score: number;
    grammar: string;
    vocabulary: string;
    tip: string;
}

type ShelldonState = "idle" | "speaking" | "listening" | "happy" | "thinking";

// Component for Interactive Inline Corrections
function UserMessageBubble({ content, corrections }: { content: string, corrections?: Correction[] }) {
    if (!corrections || corrections.length === 0) {
        return <div className="whitespace-pre-wrap leading-relaxed">{content}</div>;
    }

    let elements: React.ReactNode[] = [content];

    corrections.forEach(corr => {
        const wrongText = corr.wrong;
        if (!wrongText || wrongText.length < 2) return;
        
        // Remove trailing punctuation from wrongText to match inside the string more robustly
        const cleanWrongText = wrongText.replace(/[.,!?]$/, "").trim();
        if (!cleanWrongText) return;

        const newElements: React.ReactNode[] = [];
        elements.forEach((el, index) => {
            if (typeof el === 'string') {
                const parts = el.split(cleanWrongText);
                parts.forEach((part, i) => {
                    newElements.push(part);
                    if (i < parts.length - 1) {
                        newElements.push(
                            <div key={`${index}-${i}`} className="relative inline-block group cursor-help font-medium">
                                <span className="underline decoration-wavy decoration-rose-300 decoration-2 underline-offset-4 text-white hover:text-rose-100 transition-colors">
                                    {cleanWrongText}
                                </span>
                                {/* TOOLTIP */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-50 animate-in fade-in slide-in-from-bottom-2 drop-shadow-2xl">
                                    <div className="bg-slate-900 border border-slate-700/50 text-white text-xs p-3.5 rounded-2xl min-w-[220px] max-w-[280px] whitespace-normal relative overflow-hidden">
                                        {/* Glow Effect */}
                                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-500/20 blur-2xl rounded-full" />
                                        
                                        <div className="flex items-start gap-2.5 mb-2 relative z-10">
                                            <div className="bg-emerald-500/20 p-1.5 rounded-full shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <span className="font-bold text-emerald-300 text-sm mt-0.5 tracking-wide">{corr.right}</span>
                                        </div>
                                        <p className="text-slate-300 leading-relaxed text-[12px] border-t border-slate-700/60 pt-2.5 mt-2.5 relative z-10">
                                            {corr.explanation}
                                        </p>
                                    </div>
                                    <div className="w-3 h-3 bg-slate-900 border-r border-b border-slate-700/50 rotate-45 -mt-1.5 rounded-sm" />
                                </div>
                            </div>
                        );
                    }
                });
            } else {
                newElements.push(el);
            }
        });
        elements = newElements;
    });

    return <div className="leading-relaxed whitespace-pre-wrap">{elements}</div>;
}

export default function ShelldonPage() {
    // === STATE ===
    const [selectedLang, setSelectedLang] = useState("");
    const [practiceMode, setPracticeMode] = useState<ShelldonPracticeMode>("speaking");
    const [selectedScenario, setSelectedScenario] = useState<ShelldonScenario | null>(null);
    const [isInChat, setIsInChat] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [shelldonState, setShelldonState] = useState<ShelldonState>("idle");
    const [currentBubbleText, setCurrentBubbleText] = useState("");
    const [turnCount, setTurnCount] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [feedback, setFeedback] = useState<FeedbackData | null>(null);
    const [showTextInput, setShowTextInput] = useState(false);
    // Memory State
    const [userMemory, setUserMemory] = useState<any>(null);
    // Call Mode State
    const [isCallMode, setIsCallMode] = useState(false);
    // Yeni stateler (Hint & Görevler)
    const [isLoadingHint, setIsLoadingHint] = useState(false);
    const [currentHint, setCurrentHint] = useState<string | null>(null);
    const [completedObjectives, setCompletedObjectives] = useState<number[]>([]);
    const [sessionSummary, setSessionSummary] = useState<string | null>(null);
    const [sessionGoal, setSessionGoal] = useState<string | null>(null);
    const [repeatQueue, setRepeatQueue] = useState<string[]>([]);
    
    // Slash commands state
    const [showCommandMenu, setShowCommandMenu] = useState(false);

    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Hooks
    const { addXp, completeLesson } = useUserProgress();
    const { currentLanguage, currentLevel, progress } = useLanguage();
    const {
        isListening,
        transcript,
        startListening,
        stopListening,
        isSpeaking,
        speak,
        stopSpeaking,
        isSupported: speechSupported,
        error: speechError,
        isMouthOpen,
    } = useSpeech(selectedLang || "fr", {
        continuousMode: isCallMode,
        onSilence: (text) => {
            // Automatically send the message when silence is detected in Call Mode
            if (text.trim() && !isLoading) {
                stopListening(); // Durdur, cevabı bekle
                handleSendMessage(text.trim());
            }
        }
    });

    const MAX_TURNS = 3;
    const practiceModeLabel = PRACTICE_MODES.find((mode) => mode.id === practiceMode)?.label ?? "Konuşma";

    const buildLessonContext = useCallback(
        (langCode: string, levelCode: string) => {
            const langMeta = getLanguageByCode(langCode) || currentLanguage;
            const completedLessons = progress[langCode]?.completedLessons ?? [];

            if (completedLessons.length === 0) {
                return `Kullanıcı ${langMeta.name} ${levelCode} seviyesinde. Genel pratik yap.`;
            }

            const lastLessonId = Math.max(...completedLessons);
            const unitInfo = findUnitByLessonId(lastLessonId);
            if (!unitInfo) {
                return `Kullanıcı ${langMeta.name} ${levelCode} seviyesinde. Son ders bilgisi bulunamadı, genel pratik yap.`;
            }

            const lastLesson = unitInfo.unit.lessons.find(l => l.id === lastLessonId);
            const lessonTitle = lastLesson?.title ?? lastLesson?.type ?? "Ders";

            return `Kullanıcı ${langMeta.name} ${unitInfo.levelCode} seviyesinde. Son tamamlanan ders: Ünite ${unitInfo.unit.id} (${unitInfo.unit.title}) • ${lessonTitle}. Öncelik: bu ünitenin temasıyla ilgili kısa bir ısınma sorusu ve örnekler.`;
        },
        [currentLanguage, progress]
    );

    const buildSessionSummary = useCallback(() => {
        if (!selectedScenario) return "Bugün kısa bir pratik yaptın.";
        if (completedObjectives.length === 0) {
            return `${selectedScenario.titleTr} içinde temel ifadeleri denedin.`;
        }
        if (completedObjectives.length === 1) {
            return `${selectedScenario.titleTr} içinde 1 hedefi tamamladın.`;
        }
        return `${selectedScenario.titleTr} içinde ${completedObjectives.length} hedefi tamamladın.`;
    }, [selectedScenario, completedObjectives]);

    const buildSessionGoal = useCallback(() => {
        if (!selectedScenario) return "Mini hedef: Bir sonraki seans kısa cümlelerle devam et.";
        const langCode = selectedLang || "fr";
        const objectives = selectedScenario.objectives[langCode] || [];
        const nextIndex = objectives.findIndex((_, idx) => !completedObjectives.includes(idx));
        if (nextIndex !== -1) {
            return `Mini hedef: ${objectives[nextIndex]}`;
        }
        return "Mini hedef: Bir sonraki seans daha uzun cümleler kur.";
    }, [selectedScenario, completedObjectives, selectedLang]);

    // === MEMORY LOAD ===
    useEffect(() => {
        fetch('/api/memory')
            .then(r => r.json())
            .then(data => {
                if (!data.error) setUserMemory(data);
            })
            .catch(console.error);
    }, []);

    // === TTS bittiğinde idle'a dön ===
    useEffect(() => {
        if (!isSpeaking && shelldonState === "speaking") {
            setShelldonState("idle");
        }
    }, [isSpeaking, shelldonState]);

    // === Ses tanıma sonucunu input'a yaz ===
    useEffect(() => {
        if (transcript && !isListening) {
            handleSendMessage(transcript);
        }
    }, [transcript, isListening]);

    // === Scroll to bottom ===
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages, currentBubbleText]);

    // === SAHNE BAŞLAT ===
    const startScenario = async (scenario: ShelldonScenario) => {
        setSelectedScenario(scenario);
        setIsInChat(true);
        setIsLoading(true);
        setShelldonState("thinking");
        setMessages([]);
        setTurnCount(0);
        setIsFinished(false);
        setFeedback(null);
        setCompletedObjectives([]);
        setSessionSummary(null);
        setSessionGoal(null);
        setRepeatQueue([]);

        try {
            const langCode = selectedLang || currentLanguage.code;
            const levelCode = progress[langCode]?.currentLevel || currentLevel?.code || "A1";
            const lessonContext = buildLessonContext(langCode, levelCode);
            const systemPrompt = buildShelldonPrompt(langCode, levelCode, scenario, lessonContext, practiceMode);
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: "Sahneyi başlat. Beni senaryoya uygun şekilde karşıla." },
                    ],
                }),
            });

            if (!response.ok) {
                setCurrentBubbleText("⚠️ Bir hata oluştu. Tekrar deneyelim!");
                setShelldonState("idle");
                return;
            }

            const data = await response.json();
            const raw = data.choices?.[0]?.message?.content || "";
            let aiMessage = "Merhaba! 🐢";
            
            // Try parsing JSON response
            try {
                const cleanJson = raw.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
                const parsed = JSON.parse(cleanJson);
                if (parsed.message) aiMessage = parsed.message;
                if (parsed.completedObjectives && Array.isArray(parsed.completedObjectives)) {
                    setCompletedObjectives(parsed.completedObjectives);
                }
                // Parse and strip inner corrections if AI started with errors right away (rare on first load)
                const correctionRegex = /(?:💡\s*(?:Küçük bir |D|d)üzeltme:?\s*\n?)?❌\s*Yanl(?:i|ı)ş:?\s*([\s\S]*?)\n\s*✅\s*Doğrusu?:?\s*([\s\S]*?)\n\s*📝\s*(?:İpucu|Açıklama):?\s*([\s\S]*?)(?:\n\s*Örnek:?\s*[\s\S]*?)?(?:\n\s*Şimdi sen:?\s*[\s\S]*?)?(?=\n\n|\n?$|$)/gi;
                let cleanAiMessage = aiMessage.replace(correctionRegex, "").replace(/💡[^\n]*\n?/gi, "").trim();
                aiMessage = cleanAiMessage;
            } catch (e) {
                // Eğer AI JSON döndürmediyse düz metni al
                aiMessage = raw;
            }

            setMessages([{ role: "assistant", content: aiMessage }]);
            setCurrentBubbleText(aiMessage);
            setShelldonState("speaking");
            speak(aiMessage);
        } catch {
            setCurrentBubbleText("⚠️ Bağlantı hatası. İnternet bağlantını kontrol et!");
            setShelldonState("idle");
        } finally {
            setIsLoading(false);
        }
    };

    // === MESAJ GÖNDER ===
    const handleSendMessage = async (text?: string) => {
        const messageText = text || inputValue.trim();
        if (!messageText || isLoading || !selectedScenario) return;

        setInputValue("");
        setShowCommandMenu(false);
        setCurrentHint(null);
        setShelldonState("thinking");
        setIsLoading(true);

        // --- COMMAND INTERCEPTION ---
        let isSystemCommand = false;
        let commandPrompt = "";
        let commandDisplayName = messageText;

        if (messageText.startsWith("/clear")) {
            setMessages([]);
            setTurnCount(0);
            setRepeatQueue([]);
            setIsLoading(false);
            setShelldonState("idle");
            return;
        } else if (messageText.startsWith("/roleplay")) {
            const role = messageText.replace("/roleplay", "").trim();
            if (!role) {
                setCurrentBubbleText("⚠️ Lütfen '/roleplay [rol]' şeklinde bir rol belirt. Örn: /roleplay polis");
                setIsLoading(false);
                setShelldonState("idle");
                return;
            }
            isSystemCommand = true;
            commandDisplayName = `🎭 Rol Değişimi: ${role}`;
            commandPrompt = `Şu andan itibaren senaryomuzu koruyarak, karakterini DEĞİŞTİRİYORSUN. Artık kesinlikle bir "${role}" olarak davranmalısın. Konuşma tarzını, üslubunu ve kelimelerini tamamen bu yeni role uydur. Sadece hedef dilde konuşmaya devam et. Lütfen bu yeni role girerek bana hemen bir şeyler söyle.`;
        } else if (messageText.startsWith("/game")) {
            isSystemCommand = true;
            commandDisplayName = `🎮 Kelime Oyunu`;
            commandPrompt = `Hadi kelime oyunu oynayalım! Bana arka arkaya aralarında boşluk olan 5 tane rastgele (günlük eşya, hayvan veya yiyecek) emojisi gönder. Sadece emojiler olsun, yazı veya açıklama yazma. Ben de bu emojilerin hedef dildeki isimlerini sırayla bilmeye çalışacağım. Başla!`;
        }

        const userMsg: Message = { role: "user", content: messageText, imageUrl: selectedImage || undefined };
        const updatedMessages = [...messages, userMsg];
        setMessages(updatedMessages);
        setTurnCount((t) => t + 1);
        
        const attachedImage = selectedImage; // Store it for API call
        setSelectedImage(null); // Clear preview

        try {
            const langCode = selectedLang || currentLanguage.code;
            const levelCode = progress[langCode]?.currentLevel || currentLevel?.code || "A1";
            const lessonContext = buildLessonContext(langCode, levelCode);
            let systemPrompt = buildShelldonPrompt(langCode, levelCode, selectedScenario, lessonContext, practiceMode);
            
            // Hafıza (Memory) Enjeksiyonu
            if (userMemory && !isSystemCommand) {
                const details = [];
                if (userMemory.hobbies) details.push(`- Hobiler: ${userMemory.hobbies}`);
                if (userMemory.weaknesses) details.push(`- Zayıf Yönler/Hatalar: ${userMemory.weaknesses}`);
                if (userMemory.profession) details.push(`- Meslek/Eğitim: ${userMemory.profession}`);
                if (userMemory.goals) details.push(`- Hedefler: ${userMemory.goals}`);
                if (userMemory.notes) details.push(`- Genel Notların: ${userMemory.notes}`);
                
                if (details.length > 0) {
                    systemPrompt += `\n\n--- KULLANICI HAFIZASI (MEMORY) ---\nÖnceki sohbetlerden kullanıcı hakkında öğrendiklerin:\n${details.join("\n")}\nBu bilgileri yeri geldiğinde çok doğal ve samimi bir şekilde sohbete kat, onu hatırladığını hissettir, ancak sürekli bahsetme.`;
                }
            }
            
            // Eğer sistem komutuysa son mesajı gizlice özel prompt'a çeviriyoruz
            const apiMessages = [
                { role: "system", content: systemPrompt },
                ...messages.map((m) => {
                    if (m.imageUrl) {
                        return {
                            role: m.role,
                            content: [
                                { type: "text", text: m.content },
                                { type: "image_url", image_url: { url: m.imageUrl } }
                            ]
                        };
                    }
                    return { role: m.role, content: m.content };
                }),
                { 
                    role: "user", 
                    content: attachedImage ? [
                        { type: "text", text: isSystemCommand ? commandPrompt : messageText },
                        { type: "image_url", image_url: { url: attachedImage } }
                    ] : (isSystemCommand ? commandPrompt : messageText) 
                }
            ];

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: attachedImage ? "llama-3.2-11b-vision-preview" : "llama-3.3-70b-versatile",
                    messages: apiMessages,
                }),
            });

            if (!response.ok) {
                setCurrentBubbleText("Hmm, anlayamadım. Tekrar söyler misin? 🐢");
                setShelldonState("idle");
                setIsLoading(false);
                return;
            }

            const data = await response.json();
            const raw = data.choices?.[0]?.message?.content || "";
            let aiMessage = "Devam edelim!";
            let newCompletedObj: number[] = [];

            // Try parsing JSON response
            try {
                const cleanJson = raw.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
                const parsed = JSON.parse(cleanJson);
                if (parsed.message) aiMessage = parsed.message;
                if (parsed.completedObjectives && Array.isArray(parsed.completedObjectives)) {
                    newCompletedObj = parsed.completedObjectives;
                }
            } catch (e) {
                // fallback
                aiMessage = raw;
            }

            // --- INLINE CORRECTION PARSING LOGIC ---
            const corrections: Correction[] = [];
            const correctionRegex = /(?:💡\s*(?:Küçük bir |D|d)üzeltme:?\s*\n?)?❌\s*Yanl(?:i|ı)ş:?\s*([\s\S]*?)\n\s*✅\s*Doğrusu?:?\s*([\s\S]*?)\n\s*📝\s*(?:İpucu|Açıklama):?\s*([\s\S]*?)(?:\n\s*Örnek:?\s*[\s\S]*?)?(?:\n\s*Şimdi sen:?\s*[\s\S]*?)?(?=\n\n|\n?$|$)/gi;
            let match;
            while ((match = correctionRegex.exec(aiMessage)) !== null) {
                if (match[1] && match[2] && match[3]) {
                    corrections.push({
                        wrong: match[1].trim(),
                        right: match[2].trim(),
                        explanation: match[3].trim()
                    });
                }
            }

            let cleanAiMessage = aiMessage;
            if (corrections.length > 0) {
                setRepeatQueue((prev) => {
                    const next = [...prev];
                    corrections.forEach((corr) => {
                        const phrase = corr.right.trim();
                        if (!phrase) return;
                        const existingIndex = next.indexOf(phrase);
                        if (existingIndex !== -1) {
                            next.splice(existingIndex, 1);
                        }
                        next.push(phrase);
                    });
                    return next.slice(-5);
                });

                cleanAiMessage = aiMessage.replace(correctionRegex, "").replace(/💡[^\n]*\n?/gi, "").trim();
                
                // Attach corrections to the last user message
                setMessages(prev => {
                    const newMsgs = [...prev];
                    const lastUserIndex = newMsgs.findLastIndex(m => m.role === "user");
                    if (lastUserIndex !== -1) {
                        newMsgs[lastUserIndex] = { ...newMsgs[lastUserIndex], corrections };
                    }
                    return newMsgs;
                });
            }

            // Fallback: If AI just left empty text after removing corrections, give a generic reply
            if (!cleanAiMessage.trim()) {
                cleanAiMessage = "Devam edelim!";
            }
            aiMessage = cleanAiMessage;

            // Objeleri güncelle (önceki tamamlananları tut, yenileri ekle, unique yap)
            setCompletedObjectives(prev => {
                const merged = [...prev, ...newCompletedObj];
                return Array.from(new Set(merged));
            });

            const aiMsg: Message = { role: "assistant", content: aiMessage };
            setMessages((prev) => [...prev, aiMsg]);
            setCurrentBubbleText(aiMessage);

            // Duygu analizi (basit emoji kontrolü)
            if (aiMessage.includes("✅") || aiMessage.includes("Bravo") || aiMessage.includes("Harika") || aiMessage.includes("Parfait") || aiMessage.includes("Excelente") || aiMessage.includes("Excellent") || aiMessage.includes("Très bien") || aiMessage.includes("Muy bien") || aiMessage.includes("Very good")) {
                setShelldonState("happy");
            } else if (aiMessage.includes("?") && !aiMessage.includes("✅")) {
                setShelldonState("speaking"); // Normal soru soruyor
            } else {
                setShelldonState("speaking");
            }

            speak(aiMessage);

            // Max tura ulaşıldıysa bitir
            if (turnCount + 1 >= MAX_TURNS) {
                setTimeout(() => finishConversation([...updatedMessages, aiMsg]), 3000);
            }
        } catch {
            setCurrentBubbleText("Bağlantı hatası oldu! 😢");
            setShelldonState("idle");
        } finally {
            setIsLoading(false);
        }
    };

    // === KONUŞMAYI BİTİR ===
    const finishConversation = async (allMessages: Message[]) => {
        setIsFinished(true);
        setShelldonState("happy");
        setSessionSummary(buildSessionSummary());
        setSessionGoal(buildSessionGoal());

        // XP ver
        addXp(15);
        completeLesson();

        // Feedback al
        try {
            const userMsgs = allMessages
                .filter((m) => m.role === "user")
                .map((m) => m.content)
                .join("\n");
            const feedbackPrompt = buildFeedbackPrompt(selectedLang, userMsgs);

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: "Sen bir dil analiz asistanısın. SADECE JSON formatında cevap ver." },
                        { role: "user", content: feedbackPrompt },
                    ],
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const raw = data.choices?.[0]?.message?.content || "";
                // JSON parse — markdown code block varsa temizle
                const jsonStr = raw.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
                try {
                    const parsed = JSON.parse(jsonStr);
                    setFeedback(parsed);
                } catch {
                    setFeedback({ score: 75, grammar: "İyi gidiyorsun!", vocabulary: "Kelime dağarcığını geliştir.", tip: "Daha uzun cümleler kur." });
                }
            }
        } catch {
            setFeedback({ score: 75, grammar: "İyi gidiyorsun!", vocabulary: "Kelime dağarcığını geliştir.", tip: "Daha uzun cümleler kur." });
        }
    };

    // === İPUCU AL ===
    const handleGetHint = async () => {
        if (!selectedScenario || isLoading || isLoadingHint) return;

        setIsLoadingHint(true);
        try {
            const userMsgs = messages.map(m => `${m.role === 'user' ? 'Kullanıcı' : 'Shelldon'}: ${m.content}`).join("\n");
            const hintPrompt = buildHintPrompt(selectedLang, selectedScenario.titleTr, userMsgs);

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: "Sen sadece istenen ipucunu (tek cümlelik Türkçe ve hedef dil çevirisiyle veya doğrudan) veren bir asistansın. Açıklama yapma." },
                        { role: "user", content: hintPrompt },
                    ],
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setCurrentHint(data.choices?.[0]?.message?.content || "Bir hata oluştu.");
            }
        } catch {
            setCurrentHint("İpucu alınamadı.");
        } finally {
            setIsLoadingHint(false);
        }
    };

    // === MİKROFON TOGGLE ===
    const toggleMic = () => {
        if (isListening) {
            stopListening();
            setShelldonState("thinking");
        } else {
            if (isSpeaking) stopSpeaking();
            startListening();
            setShelldonState("listening");
        }
    };

    // === INPUT CHANGES ===
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);
        if (val === "/") {
            setShowCommandMenu(true);
        } else if (!val.startsWith("/")) {
            setShowCommandMenu(false);
        }
    };

    // === IMAGE ATTACHMENT ===
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setShowTextInput(true); // Switch to text mode to show preview
            };
            reader.readAsDataURL(file);
        }
    };
    const cancelImage = () => setSelectedImage(null);

    // === KEY PRESS ===
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        } else if (e.key === "Escape") {
            setShowCommandMenu(false);
        }
    };

    const handleCommandClick = (cmd: string) => {
        setInputValue(cmd + (cmd === "/clear" || cmd === "/game" ? "" : " "));
        setShowCommandMenu(false);
        inputRef.current?.focus();
        
        // Auto send clear and game
        if (cmd === "/clear" || cmd === "/game") {
            setTimeout(() => handleSendMessage(cmd), 50);
        }
    };

    const handleRepeatClick = (phrase: string) => {
        if (isLoading) return;
        setRepeatQueue((prev) => prev.filter((item) => item !== phrase));
        handleSendMessage(phrase);
    };

    // === GERİ DÖN ===
    const goBack = () => {
        if (messages.length > 2) {
            // Arka planda hafıza çıkarımı yap
            fetch('/api/memory/extract', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages })
            }).catch(console.error);
        }

        stopSpeaking();
        setIsInChat(false);
        setSelectedScenario(null);
        setMessages([]);
        setCurrentBubbleText("");
        setShelldonState("idle");
        setIsFinished(false);
        setFeedback(null);
        setSessionSummary(null);
        setSessionGoal(null);
        setTurnCount(0);
        setSelectedImage(null);
        setRepeatQueue([]);
    };

    // =============================================
    // === BİTİŞ EKRANI ===
    // =============================================
    if (isFinished) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 flex flex-col items-center justify-center p-6">
                {/* Avatar */}
                <ShelldonAvatar state="happy" language={selectedLang} size={160} className="mb-6" />

                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                    Harika Konuşma! 🎉
                </h1>
                <p className="text-slate-500 mb-6">
                    {selectedScenario?.titleTr} senaryosunu tamamladın!
                </p>

                {/* XP */}
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-emerald-100 mb-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="text-2xl font-black text-emerald-600">+15 XP</p>
                        <p className="text-xs text-slate-400 font-bold">Konuşma pratiği bonus</p>
                    </div>
                </div>

                {/* Feedback */}
                {feedback ? (
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full max-w-md mb-6 space-y-4">
                        {/* Skor */}
                        <div className="text-center">
                            <p className="text-5xl font-black text-emerald-500 mb-1">{feedback.score}</p>
                            <p className="text-sm text-slate-400 font-bold">Puan</p>
                        </div>

                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1000"
                                style={{ width: `${feedback.score}%` }}
                            />
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex gap-3">
                                <span className="font-bold text-indigo-500 shrink-0">📝 Gramer:</span>
                                <span className="text-slate-600">{feedback.grammar}</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-amber-500 shrink-0">📚 Kelime:</span>
                                <span className="text-slate-600">{feedback.vocabulary}</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-emerald-500 shrink-0">💡 İpucu:</span>
                                <span className="text-slate-600">{feedback.tip}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-slate-400 mb-6">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm font-bold">Analiz yapılıyor...</span>
                    </div>
                )}

                {(sessionSummary || sessionGoal) && (
                    <div className="w-full max-w-md space-y-3 mb-6">
                        {sessionSummary && (
                            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                                <p className="text-[11px] font-black uppercase tracking-wider text-emerald-600 mb-2">Özet</p>
                                <p className="text-sm text-emerald-800 font-semibold">{sessionSummary}</p>
                            </div>
                        )}
                        {sessionGoal && (
                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                                <p className="text-[11px] font-black uppercase tracking-wider text-amber-600 mb-2">Mini Hedef</p>
                                <p className="text-sm text-amber-900 font-semibold">{sessionGoal}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Butonlar */}
                <div className="flex gap-3 w-full max-w-md">
                    <Button
                        onClick={goBack}
                        variant="outline"
                        className="flex-1 rounded-xl py-5 font-bold"
                    >
                        Senaryolara Dön
                    </Button>
                    <Button
                        onClick={() => {
                            setIsFinished(false);
                            setFeedback(null);
                            setSessionSummary(null);
                            setSessionGoal(null);
                            setTurnCount(0);
                            setMessages([]);
                            setRepeatQueue([]);
                            if (selectedScenario) startScenario(selectedScenario);
                        }}
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl py-5 font-bold shadow-lg"
                    >
                        Tekrar Dene
                    </Button>
                </div>
            </div>
        );
    }

    // =============================================
    // === KONUŞMA EKRANI ===
    // =============================================
    if (isInChat && selectedScenario) {
        const suggestions = selectedScenario.suggestedPhrases[selectedLang] || [];

        return (
            <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 flex flex-col relative">
                {/* BG Blobs */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-5%] right-[-10%] w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[25rem] h-[25rem] bg-teal-500/5 rounded-full blur-3xl" />
                </div>

                {/* Header */}
                <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
                    <div className="max-w-2xl mx-auto px-4 h-[64px] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={goBack}
                                className="text-slate-400 hover:text-emerald-600 rounded-xl"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{selectedScenario.icon}</span>
                                <div>
                                    <h1 className="font-bold text-slate-800 text-sm leading-tight">
                                        {selectedScenario.titleTr}
                                    </h1>
                                    <p className="text-[11px] text-slate-400 font-medium">
                                        Mikro pratik • {practiceModeLabel} • Tur {Math.min(turnCount + 1, MAX_TURNS)}/{MAX_TURNS}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* === ANA İÇERİK === */}
                <div className="flex-1 flex flex-col items-center relative z-10 overflow-hidden">
                    {/* Scene 3D veya Shelldon Avatar */}
                    <div className="w-full h-[25vh] sm:h-[30vh] md:h-[40vh] relative shrink-0 border-b border-white/20 bg-slate-900/5">
                        {isCallMode ? (
                            <div className="absolute inset-0">
                                <Scene3D
                                    sceneData={selectedScenario}
                                    messages={messages}
                                    isLoading={isLoading}
                                    isMouthOpen={isMouthOpen}
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center pt-6 pb-2">
                                <ShelldonAvatar
                                    state={shelldonState}
                                    language={selectedLang}
                                    size={150}
                                />
                            </div>
                        )}

                        {/* Canlı Ses Modu (Call Mode) Toggle */}
                        <div className="absolute top-4 right-4 z-50">
                            <Button
                                variant={isCallMode ? "destructive" : "secondary"}
                                size="sm"
                                onClick={() => {
                                    setIsCallMode(!isCallMode);
                                    if (!isCallMode) {
                                        // Açılırken otomatik dinlemeye başla
                                        startListening();
                                    } else {
                                        // Kapatırken dinlemeyi kes
                                        stopListening();
                                    }
                                }}
                                className={cn(
                                    "rounded-full shadow-lg font-bold flex items-center gap-2 transition-all",
                                    isCallMode ? "bg-rose-500 hover:bg-rose-600 !text-white animate-pulse" : "bg-white/90 hover:bg-white text-emerald-600 border border-emerald-100"
                                )}
                            >
                                {isCallMode ? <PhoneOff className="w-4 h-4 text-white" /> : <Phone className="w-4 h-4 text-emerald-500" />}
                                {isCallMode ? "Aramayı Bitir" : "Canlı Görüşme"}
                            </Button>
                        </div>
                    </div>

                    {/* Görevler (Checklist) */}
                    {selectedScenario.objectives && selectedScenario.objectives[selectedLang] && (
                        <div className="w-full max-w-lg px-6 mb-4 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100 shadow-sm">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                                    <span>Hedefler</span>
                                    <span className="text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">
                                        {completedObjectives.length} / {selectedScenario.objectives[selectedLang].length}
                                    </span>
                                </h3>
                                <div className="space-y-2.5">
                                    {selectedScenario.objectives[selectedLang].map((obj, i) => {
                                        const isCompleted = completedObjectives.includes(i);
                                        return (
                                            <div key={i} className="flex items-start gap-3 group">
                                                <div className="mt-0.5 shrink-0 transition-colors duration-300">
                                                    {isCompleted ? (
                                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                                    ) : (
                                                        <Circle className="w-5 h-5 text-slate-300 group-hover:text-emerald-200 transition-colors" />
                                                    )}
                                                </div>
                                                <p className={cn(
                                                    "text-sm transition-all duration-300",
                                                    isCompleted ? "text-slate-400 line-through decoration-slate-300" : "text-slate-700 font-medium"
                                                )}>
                                                    {obj}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Konuşma Balonu */}
                    <div className="px-6 w-full max-w-lg mb-4">
                        {currentBubbleText && (
                            <div className="bg-white rounded-2xl px-5 py-4 shadow-lg border border-emerald-100 relative">
                                {/* Üçgen */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-emerald-100 rotate-45" />
                                <p className="text-slate-700 font-medium leading-relaxed text-sm relative z-10 whitespace-pre-wrap">
                                    {currentBubbleText}
                                </p>
                                {/* Dinle butonu */}
                                {speechSupported && (
                                    <button
                                        onClick={() => isSpeaking ? stopSpeaking() : speak(currentBubbleText)}
                                        className="mt-2 flex items-center gap-1 text-xs font-bold text-emerald-500 hover:text-emerald-700"
                                    >
                                        {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                                        {isSpeaking ? "Durdur" : "Tekrar Dinle"}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mesaj Geçmişi (küçük, kaydırılabilir) */}
                    <div
                        ref={messagesContainerRef}
                        className="flex-1 w-full max-w-lg px-6 overflow-y-auto space-y-3 pb-4 scroll-smooth"
                    >
                        {messages.slice(0, -1).map((msg, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "text-sm px-4 py-2.5 rounded-2xl max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-sm flex flex-col gap-2",
                                    msg.role === "user"
                                        ? "bg-emerald-500 text-white ml-auto rounded-br-sm"
                                        : "bg-white text-slate-700 border border-slate-100 rounded-bl-sm"
                                )}
                            >
                                {msg.imageUrl && (
                                    <img src={msg.imageUrl} alt="attachment" className="rounded-xl w-48 object-cover border border-white/20 shadow-sm" />
                                )}
                                {msg.role === "user" ? (
                                    <UserMessageBubble content={msg.content} corrections={msg.corrections} />
                                ) : (
                                    <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                                )}
                            </div>
                        ))}

                        {/* Canlı Dinleme Balonu */}
                        {isListening && transcript && (
                            <div className="text-sm px-4 py-2.5 rounded-2xl max-w-[85%] bg-emerald-500/80 text-white ml-auto rounded-br-sm animate-pulse shadow-sm">
                                {transcript}
                                <span className="inline-block w-1 h-4 ml-1 align-middle bg-white/70 animate-bounce" />
                            </div>
                        )}

                        {/* İpucu Gösterimi */}
                        {currentHint && (
                            <div className="flex flex-col items-center gap-2 mt-4 animate-in fade-in zoom-in-95 duration-300">
                                <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium px-4 py-3 rounded-2xl max-w-[90%] shadow-sm relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-600 p-1.5 rounded-full border border-amber-200">
                                        <Lightbulb className="w-3.5 h-3.5" />
                                    </div>
                                    <p className="mt-1 text-center">{currentHint}</p>
                                    <button
                                        onClick={() => handleSendMessage(currentHint)}
                                        className="mt-2 w-full bg-amber-200 text-amber-900 py-1.5 rounded-xl font-bold hover:bg-amber-300 transition-colors"
                                    >
                                        Bunu Söyle
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* === ALT PANEL === */}
                <div className="sticky bottom-0 bg-white/90 backdrop-blur-xl border-t border-emerald-100 p-4 z-50">
                    <div className="max-w-lg mx-auto">
                        {/* Hata mesajı */}
                        {speechError && (
                            <p className="text-xs text-rose-500 font-bold text-center mb-2">⚠️ {speechError}</p>
                        )}

                        {/* Hata tekrarları */}
                        {repeatQueue.length > 0 && (
                            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                                {repeatQueue.map((phrase, i) => (
                                    <button
                                        key={`${phrase}-${i}`}
                                        onClick={() => handleRepeatClick(phrase)}
                                        disabled={isLoading}
                                        className="shrink-0 px-3 py-1.5 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-200 hover:bg-amber-100 transition-colors disabled:opacity-50 whitespace-nowrap"
                                    >
                                        Tekrar: {phrase}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Öneri cümleleri */}
                        {suggestions.length > 0 && turnCount < MAX_TURNS && (
                            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                                {suggestions.map((phrase, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(phrase)}
                                        disabled={isLoading}
                                        className="shrink-0 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors disabled:opacity-50"
                                    >
                                        {phrase}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Mikrofon + Input */}
                        <div className="flex items-center gap-2">
                            {/* İpucu Butonu */}
                            <button
                                onClick={handleGetHint}
                                disabled={isLoading || isLoadingHint || isListening}
                                className="p-3 text-amber-500 hover:bg-amber-50 rounded-2xl transition-all disabled:opacity-50 border border-transparent hover:border-amber-200"
                                title="İpucu Al"
                            >
                                {isLoadingHint ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lightbulb className="w-5 h-5" />}
                            </button>

                            {/* Yazı/Mikrofon toggle */}
                            <button
                                onClick={() => setShowTextInput(!showTextInput)}
                                className="p-3 text-slate-400 hover:bg-slate-50 hover:text-emerald-600 rounded-2xl transition-all border border-transparent hover:border-slate-200"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </button>

                            {showTextInput ? (
                                /* Text Input */
                                <div className="flex-1 relative">
                                    {/* COMMAND MENU */}
                                    {showCommandMenu && (
                                        <div className="absolute bottom-[calc(100%+12px)] left-0 w-full bg-white border border-slate-200 shadow-xl rounded-2xl p-2 z-50 animate-in fade-in slide-in-from-bottom-2">
                                            <div className="text-[10px] font-black tracking-wider text-slate-400 uppercase mb-2 px-2">Kısayol Komutları</div>
                                            <div className="space-y-1">
                                                <button onClick={() => handleCommandClick("/roleplay")} className="w-full flex items-center justify-between p-2 hover:bg-emerald-50 rounded-xl group transition-colors text-left">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xl group-hover:scale-110 transition-transform">🎭</span>
                                                        <div>
                                                            <div className="text-sm font-bold text-slate-700">/roleplay</div>
                                                            <div className="text-[11px] text-slate-400">Yeni bir role bürünür</div>
                                                        </div>
                                                    </div>
                                                </button>
                                                <button onClick={() => handleCommandClick("/game")} className="w-full flex items-center justify-between p-2 hover:bg-emerald-50 rounded-xl group transition-colors text-left">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xl group-hover:scale-110 transition-transform">🎮</span>
                                                        <div>
                                                            <div className="text-sm font-bold text-slate-700">/game</div>
                                                            <div className="text-[11px] text-slate-400">Emoji kelime oyunu başlatır</div>
                                                        </div>
                                                    </div>
                                                </button>
                                                <button onClick={() => handleCommandClick("/clear")} className="w-full flex items-center justify-between p-2 hover:bg-rose-50 rounded-xl group transition-colors text-left">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xl group-hover:scale-110 transition-transform">🧹</span>
                                                        <div>
                                                            <div className="text-sm font-bold text-rose-600">/clear</div>
                                                            <div className="text-[11px] text-rose-400">Sohbeti sıfırlar</div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* IMAGE PREVIEW */}
                                    {selectedImage && (
                                        <div className="absolute bottom-[calc(100%+8px)] left-0 bg-white border border-slate-200 shadow-xl rounded-2xl p-2 z-50 animate-in fade-in zoom-in slide-in-from-bottom-2">
                                            <div className="relative">
                                                <img src={selectedImage} alt="Preview" className="w-24 h-24 object-cover rounded-xl" />
                                                <button 
                                                    onClick={cancelImage}
                                                    className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1 shadow-md hover:bg-rose-600 transition-colors"
                                                >
                                                    <VolumeX className="w-3 h-3 rotate-45" /> {/* Close icon using VolumeX rotate */}
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-2 bg-slate-50 rounded-2xl px-3 py-2 border border-slate-200 focus-within:border-emerald-300 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
                                        {/* Image Upload Button Inside Input */}
                                        <button 
                                            onClick={() => fileInputRef.current?.click()}
                                            className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-xl transition-colors shrink-0"
                                            title="Fotoğraf Yükle"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                                        </button>
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            className="hidden" 
                                            ref={fileInputRef} 
                                            onChange={handleImageChange} 
                                        />

                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            onKeyDown={handleKeyPress}
                                            placeholder={selectedImage ? "Fotoğraf hakkında bir şey yaz..." : "Mesajını yaz... ('/' ile komutlar)"}
                                            disabled={isLoading}
                                            className="flex-1 bg-transparent text-sm outline-none text-slate-700 placeholder:text-slate-400"
                                        />
                                        <Button
                                            size="icon"
                                            onClick={() => handleSendMessage()}
                                            disabled={(!inputValue.trim() && !selectedImage) || isLoading}
                                            className="h-8 w-8 shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-md"
                                        >
                                            <Send className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                /* Mikrofon Butonu */
                                <button
                                    onClick={toggleMic}
                                    disabled={isLoading}
                                    className={cn(
                                        "flex-1 h-14 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm transition-all duration-300 border-b-4 active:border-b-0 active:translate-y-1",
                                        isListening
                                            ? "bg-rose-500 text-white border-rose-700 animate-pulse shadow-lg shadow-rose-500/30"
                                            : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-700 shadow-lg shadow-emerald-500/20 hover:shadow-xl",
                                        isLoading && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    {isListening ? (
                                        <>
                                            <MicOff className="w-5 h-5" /> Dinliyorum...
                                        </>
                                    ) : isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" /> Shelldon düşünüyor...
                                        </>
                                    ) : (
                                        <>
                                            <Mic className="w-5 h-5" /> Konuş
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // =============================================
    // === SENARYO SEÇİM EKRANI ===
    // =============================================
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 relative overflow-hidden pb-20">
            {/* BG */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-5%] right-[-10%] w-[35rem] h-[35rem] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[10%] left-[-10%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 h-[72px] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/learn">
                            <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-emerald-600 rounded-xl lg:hidden">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-lg lg:text-xl font-black text-slate-700 flex items-center gap-2">
                            🐢 Shelldon
                        </h1>
                    </div>
                    <div className="text-xs font-bold text-emerald-500 bg-emerald-50 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Konuşma Partneri
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-2xl mx-auto px-4 py-8 relative z-10 space-y-8">
                {/* Hero */}
                <div className="flex flex-col items-center text-center">
                    <ShelldonAvatar state="idle" language={selectedLang || "fr"} size={140} className="mb-4" />
                    <h2 className="text-2xl font-extrabold text-slate-800 mb-2">
                        Merhaba! Ben Shelldon 🐢
                    </h2>
                    <p className="text-slate-500 max-w-md text-sm leading-relaxed">
                        Seninle gerçek hayat senaryolarında konuşma pratiği yapacağım.
                        Yavaş ama emin adımlarla, birlikte öğrenelim!
                    </p>
                </div>

                {/* Step 1: Dil Seçimi */}
                <section>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-black">1</span>
                        Dil Seç
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setSelectedLang(lang.code)}
                                className={cn(
                                    "flex items-center gap-2 px-5 py-3 rounded-2xl font-bold transition-all duration-300 border-b-4",
                                    selectedLang === lang.code
                                        ? "bg-emerald-500 text-white border-emerald-700 shadow-lg shadow-emerald-500/20 scale-105"
                                        : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-600 shadow-sm"
                                )}
                            >
                                <span className="text-xl">{lang.flag}</span>
                                {lang.name}
                                {selectedLang === lang.code && <Check className="w-4 h-4" />}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Step 2: Hedef Seçimi */}
                {selectedLang && (
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-black">2</span>
                            Hedef Seç
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {PRACTICE_MODES.map((mode) => (
                                <button
                                    key={mode.id}
                                    onClick={() => setPracticeMode(mode.id)}
                                    className={cn(
                                        "group bg-white hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 border-b-4",
                                        practiceMode === mode.id
                                            ? "border-emerald-300 bg-emerald-50 shadow-lg shadow-emerald-500/10"
                                            : "border-b-slate-100 hover:border-b-emerald-300"
                                    )}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {mode.icon}
                                        </div>
                                        {practiceMode === mode.id && <Check className="w-4 h-4 text-emerald-500" />}
                                    </div>
                                    <div className="text-slate-700 font-bold text-sm mb-1">{mode.label}</div>
                                    <div className="text-slate-400 text-[11px] leading-relaxed">
                                        {mode.description}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>
                )}

                {/* Step 3: Senaryo Seçimi */}
                {selectedLang && (
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-black">3</span>
                            Senaryo Seç
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {SHELLDON_SCENARIOS.map((scenario) => (
                                <button
                                    key={scenario.id}
                                    onClick={() => startScenario(scenario)}
                                    className="group bg-white hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 border-b-4 border-b-slate-100 hover:border-b-emerald-300"
                                >
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {scenario.icon}
                                    </div>
                                    <div className="text-slate-700 font-bold text-sm mb-0.5">{scenario.titleTr}</div>
                                    <div className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                                        {scenario.description}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
