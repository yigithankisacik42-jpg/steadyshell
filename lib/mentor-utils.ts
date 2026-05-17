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

    // 3. XP Milestones (expanded ranges)
    const milestones: { min: number; max: number; text: string }[] = [
        { min: 500, max: 600, text: `İlk 500 XP'yi aştın! 🎉 ${currentLanguage} maceranda harika ilerliyorsun.` },
        { min: 1000, max: 1200, text: `Tebrikler! 1000 XP barajını aştın. 🏆 Artık ${currentLanguage} dilinde temelini sağlamlaştırdın.` },
        { min: 2500, max: 2700, text: `2500 XP! 🌟 Artık orta seviye bir ${currentLanguage} konuşucususun. Böyle devam!` },
        { min: 5000, max: 5200, text: `İnanılmaz! 5000 XP'ye ulaştın! 🚀 ${currentLanguage} dilinde profesyonel seviyeye yaklaşıyorsun.` },
        { min: 10000, max: 10500, text: `10.000 XP efsanesi! 👑 ${currentLanguage} dilinin ustasısın. Tebrikler şampiyon!` },
    ];

    for (const ms of milestones) {
        if (totalXp >= ms.min && totalXp < ms.max) {
            return { type: "XP_MILESTONE", text: ms.text };
        }
    }

    // 4. Regular encouragement (expanded pool — 8 tips to reduce repetition)
    const tips = [
        "Bugün yeni bir şeyler öğrenmek için harika bir gün! 🚀",
        "Küçük adımlar, büyük başarılar getirir. Devam et! 💪",
        "Hata yapmaktan korkma, her hata aslında yeni bir öğrenme fırsatıdır. ✨",
        "Günde sadece 10 dakika bile devasa bir fark yaratır! ⏳",
        "Dil öğrenmek bir maraton, sprint değil. Ritmine güven! 🏃",
        "Bugün bir kelime öğrensen, yılda 365 kelime eder! 📚",
        "Kendinle dünkü versiyonunu karşılaştır, başkalarıyla değil. 🌱",
        "Her pratik, beynindeki dil ağını güçlendirir. Bilim böyle diyor! 🧠",
    ];
    
    const tipIndex = (streak + totalXp) % tips.length;

    return {
        type: "WELCOME",
        text: `Tekrar hoş geldin! ${tips[tipIndex]} 🎨`,
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
    if (txt.includes("merhaba") || txt.includes("selam") || txt.includes("hey")) {
        const hour = new Date().getHours();
        const greeting = hour < 12 ? "Günaydın" : hour < 18 ? "İyi günler" : "İyi akşamlar";
        return `${greeting} şampiyon! 🌟 ${currentLanguageState.name} öğrenmende bugün sana nasıl yardımcı olabilirim?`;
    }

    if (txt.includes("zor") || txt.includes("yapamıyorum") || txt.includes("sıkıldım") || txt.includes("anlamıyorum")) {
        return `Hey dostum, derin bir nefes al! 🐢 Bazen konular zorlayabilir ama unutma, yavaş ve emin adımlarla ilerlemek en iyisidir. Sahne moduna geç, pratik yap — o zaman her şey yerine oturacak! 💪`;
    }

    if (txt.includes("nasıl") || txt.includes("tavsiye") || txt.includes("ipucu") || txt.includes("öneri")) {
        return `Bir kaplumbağanın altın tavsiyesi: Günde 10 dakika pratik > haftada 1 saat çalışma! ⏳ Gramer derslerini bitirdikten sonra Sahne modunda gerçek diyaloglarla pekiştir. Bu kombinasyon harika işe yarar! 🎯`;
    }

    if (txt.includes("ilerle") || txt.includes("seviye") || txt.includes("xp") || txt.includes("puan")) {
        return `Şu an ${currentLanguageState.level} seviyesindesin ve tam ${user.totalXp} XP kazandın! 🔥 ${user.streak} günlük çizgini bozmadan devam et. Bir sonraki büyük hedef yolda! 🏆`;
    }

    if (txt.includes("teşekkür") || txt.includes("sağol") || txt.includes("eyv")) {
        return `Rica ederim dostum! Bir kaplumbağa her zaman yardım için buradadır. Başka sorun olursa çekinme. 🐢✨`;
    }

    if (txt.includes("gramer") || txt.includes("dilbilgisi") || txt.includes("kural")) {
        return `Gramer dersleri için ana menüden "📖 Gramer" bölümüne git! Her derste detaylı kurallar, tablolar ve örnekler seni bekliyor. Sonra Shelldon ile pratik yaparak pekiştir! 🐢📝`;
    }

    if (txt.includes("kelime") || txt.includes("vocabulary") || txt.includes("sözcük")) {
        return `Kelime çalışmak için "📚 Kelime" modülünü dene! Tematik kelime gruplarıyla çalışmak, rastgele ezbere göre 3 kat daha etkili. Sonra Sahne modunda bu kelimeleri kullanmayı dene! 🌟`;
    }

    if (txt.includes("konuşma") || txt.includes("speaking") || txt.includes("pratik")) {
        return `Konuşma pratiği yapmak için Shelldon ile sohbet et! 🐢 Kafede sipariş verme, doktora gitme gibi gerçek hayat senaryoları var. Mikrofonu aç ve doğrudan konuş! 🎤`;
    }

    // Fallback responses (expanded pool — 12 responses to minimize repetition)
    const fallbacks = [
        `Çok iyi dedin dostum! Eğitim ekranından bir ders seçerek hemen pratik yapabilirsin. 📚`,
        `Bu çok ilginç! Ben daha çok gramer ve kelime ezberleme konularında ustayım. Hemen bir kategori seçip deneyelim mi? 🐢🚀`,
        `Hımm, anladım. Bugün yeni bir kelime grubu öğrenmeye ne dersin? "Kelime" modunu mutlaka dene! 🌟`,
        `Kapabildiğin kadar kelime kap şampiyon! Her hata, mükemmelliğe giden yolda bir adımdır. 💪`,
        `Güzel soru! Dil öğrenme yolculuğunda her adım önemli. Sahne modunda gerçek hayat senaryolarını dene! 🎭`,
        `İlginç bakış açısı! Sence bugün hangi konuyu pratik etsek? Gramer mi, kelime mi, yoksa konuşma mı? 🤔`,
        `Harika ilerliyorsun! Biliyor musun, günlük pratik haftalık yoğun çalışmadan daha etkili! ⏳`,
        `Bu konu hakkında daha fazla şey öğrenmek istersen, derslere göz at. Ben burada sorularını bekliyor olacağım! 🐢`,
        `Motivasyonun harika! ${currentLanguageState.name} dilinde ${currentLanguageState.level} seviyesindesin. Bir sonraki seviyeye atlayalım! 🚀`,
        `İyi noktaya değindin! Sabırlı ol ve düzenli çalış, yakında harika konuşacaksın! 🌱`,
        `Bunu duymak çok güzel! Dil öğrenmek eğlenceli olmalı. Eğlenirken öğren! 🎉`,
        `Kabuk gibi sağlam adımlarla ilerliyorsun! Bir kaplumbağa olarak söylüyorum: yavaş ama istikrarlı olan kazanır! 🐢🏆`,
    ];

    const seed = userMessage.length + new Date().getMinutes();
    return fallbacks[seed % fallbacks.length];
};
