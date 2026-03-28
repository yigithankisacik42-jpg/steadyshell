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
    
    // 1. Welcome / Return message
    if (!streak || streak === 0) {
        return {
            type: "WELCOME",
            text: `Merhaba Yiğithan! Dil yolculuğuna başlamak için harika bir gün. İlk dersine hazır mısın? 🐢`,
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
    try {
        const systemPrompt = `
            Sen Shelldon adında yardımsever, bilge ve neşeli bir kaplumbağa mentorsun. 
            Kullanıcının dil öğrenme yolculuğuna eşlik ediyorsun.
            
            KULLANICI VERİLERİ:
            - İsim: ${user.name}
            - Seviye: ${currentLanguageState.level}
            - Öğrenilen Dil: ${currentLanguageState.name}
            - Toplam XP: ${user.totalXp}
            - Günlük Seri (Streak): ${user.streak}
            
            KURALLAR:
            1. Daima Türkçe konuş.
            2. Cevapların kısa, öz ve motive edici olsun (Maksimum 3 cümle).
            3. Kaplumbağa kişiliğini yansıt (yavaş ama emin adımlarla ilerlemekten bahset, 'dostum' diye hitap et).
            4. Eğer teknik bir soru sorulursa (dil bilgisi vb.), basitçe kolayıyla anlat.
            5. Asla kaba olma.
        `;

        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userMessage }
                ]
            })
        });

        if (!response.ok) throw new Error("AI API hatası");
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Shelldon AI Error:", error);
        return "Şu an biraz dinleniyorum dostum, ama dil öğrenmeye devam etmeni öneririm! 💪";
    }
};
