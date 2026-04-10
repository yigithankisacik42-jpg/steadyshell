"use client";

import { UserData } from "@/contexts/user-progress-context";

export type MentorMessageType = "STREAK" | "XP_MILESTONE" | "LONG_BREAK" | "GRAMMAR_TIP" | "WELCOME";

export interface MentorMessage {
    type: MentorMessageType;
    text: string;
    actionLabel?: string;
    actionUrl?: string;
}

export const getMentorMessage = (user: UserData, currentLanguage: string): MentorMessage => {
    const { streak, totalXp } = user;
    const displayName = user.name?.trim() || "Gezgin";
    
    // 1. Welcome / Return message
    if (!streak || streak === 0) {
        return {
            type: "WELCOME",
            text: `Merhaba ${displayName}! Ben Shelldon. Seninle bu maceraya atılmak için sabırsızlanıyorum. İlk dersine hazır mısın? 🐢`,
            actionLabel: "Hadi Başlayalım",
        };
    }

    // 2. High Streak Motivation
    if (streak > 5) {
        return {
            type: "STREAK",
            text: `Vay canına! ${streak} günlük serinle gerçek bir dil canavarısın! 🔥 Bugünün hedefini tamamlayıp bu seriyi bozmayalım mı?`,
            actionLabel: "Derslere Devam",
        };
    }

    // 3. XP Milestones
    if (totalXp > 1000 && totalXp < 1100) {
        return {
            type: "XP_MILESTONE",
            text: `Tebrikler! 1000 XP barajını aştın. 🎉 Artık ${currentLanguage} dilinde temelini sağlamlaştırdın.`,
        };
    }

    // 4. Regular encouragement
    const tips = [
        "Bugün yeni bir şeyler öğrenmek için harika bir gün! 🚀",
        "Küçük adımlar, büyük başarılar getirir. Devam et! 💪",
        "Hata yapmaktan korkma, her hata aslında yeni bir öğrenme fırsatıdır. ✨",
        "Günde sadece 10 dakika bile devasa bir fark yaratır! ⏳",
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    return {
        type: "WELCOME",
        text: `Tekrar hoş geldin! ${randomTip} 🎨`,
        actionLabel: "Ders Seç",
    };
};

export const getShelldonAIResponse = async (
    user: UserData, 
    currentLanguageState: { name: string; level: string },
    userMessage: string
): Promise<string> => {
    // 100% Offline Static Response System for the Mentor Bubble
    const txt = userMessage.toLowerCase();

    // Intent/Keyword based response logic
    if (txt.includes("merhaba") || txt.includes("selam")) {
        return `Merhaba şampiyon! 🌟 Harika görünüyorsun. ${currentLanguageState.name} öğrenmende bugün sana nasıl yardımcı olabilirim?`;
    }

    if (txt.includes("zor") || txt.includes("yapamıyorum") || txt.includes("sıkıldım")) {
        return `Hey dostum, derin bir nefes al! Bazen konular zorlayabilir ama unutma, yavaş ve emin adımlarla ilerlemek en iyisidir. Ben buradayım! 🐢💪`;
    }

    if (txt.includes("nasıl") || txt.includes("tavsiye") || txt.includes("ipucu")) {
        return `Günde sadece 10 dakika pratik yapmak, o dili hayatının bir parçası haline getirir. ⏳ Küçük testler çözerek hafızanı taze tutmalısın!`;
    }

    if (txt.includes("ilerle") || txt.includes("seviye") || txt.includes("xp")) {
        return `Şu an ${currentLanguageState.level} seviyesindesin ve tam ${user.totalXp} XP kazandın! 🔥 Çizgini (${user.streak} gün) bozmadan devam et!`;
    }

    if (txt.includes("teşekkür")) {
        return `Rica ederim dostum! Bir kaplumbağa her zaman yardım için buradadır. Başka sorun olursa çekinme. 🐢✨`;
    }

    // Default Fallbacks
    const fallbacks = [
        `Çok iyi dedin dostum! Eğitim ekranından bir ders seçerek hemen pratik yapabilirsin. 📚`,
        `Bu çok ilginç! Ben daha çok gramer ve kelime ezberleme konularında ustayım. Hemen bir kategori seçip deneyelim mi? 🐢🚀`,
        `Hımm, anladım. Bugün yeni bir kelime grubu öğrenmeye ne dersin? "Kelime" modunu mutlaka dene! 🌟`,
        `Kapabildiğin kadar kelime kap şampiyon! Her hata, mükemmelliğe giden yolda bir adımdır. 💪`
    ];

    // Simulate thinking delay to preserve mentor feeling (but zero cost!)
    await new Promise(resolve => setTimeout(resolve, 800));

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
};
