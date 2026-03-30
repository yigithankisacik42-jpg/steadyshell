export type StoryLine = {
    speaker: string;
    fr: string;
    tr: string;
};

export type StoryChoiceOption = {
    id: string;
    text: string;
    correct: boolean;
};

export type StoryInteraction =
    | {
          type: "choice";
          prompt: string;
          options: StoryChoiceOption[];
          correctFeedback?: string;
          wrongFeedback?: string;
      }
    | {
          type: "fill_blank";
          prompt: string;
          sentence: string;
          options: StoryChoiceOption[];
          correctFeedback?: string;
          wrongFeedback?: string;
      };

export type StorySegment = {
    unitId: number;
    arcId: string;
    arcTitle: string;
    title: string;
    scene: string;
    lines: StoryLine[];
    interactive?: StoryInteraction[];
};

const stories: StorySegment[] = [
    {
        unitId: 331,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Paris'e Dönüş",
        scene: "Deniz, Paris'e dair eski anılarını anlatır.",
        lines: [
            { speaker: "Deniz", fr: "L'année dernière, j'étais à Paris.", tr: "Geçen yıl Paris'teydim." },
            { speaker: "Camille", fr: "Tu as aimé la ville ?", tr: "Şehri sevdin mi?" },
            { speaker: "Deniz", fr: "Oui, mais j'ai perdu un vieux carnet de recettes.", tr: "Evet, ama eski bir tarif defterimi kaybettim." },
        ],
        interactive: [
            {
                type: "choice",
                prompt: "Camille soruyor: “Tu as aimé la ville ?” (Şehri sevdin mi?)",
                options: [
                    { id: "a", text: "Oui, beaucoup.", correct: true },
                    { id: "b", text: "Non, c'est trop tôt.", correct: false },
                    { id: "c", text: "Je veux un café.", correct: false },
                ],
                correctFeedback: "Harika! Doğal bir cevap.",
                wrongFeedback: "Bu cümle soruya cevap olmuyor. Doğru cevap: “Oui, beaucoup.”",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "J'ai perdu un vieux ___.",
                options: [
                    { id: "a", text: "carnet", correct: true },
                    { id: "b", text: "chat", correct: false },
                    { id: "c", text: "bouteille", correct: false },
                ],
                correctFeedback: "Süper! “carnet” doğru kelime.",
                wrongFeedback: "Doğru cevap “carnet” olmalı.",
            },
        ],
    },
    {
        unitId: 332,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Plan Yapıyoruz",
        scene: "İkili, tarif defterini bulmak için plan yapar.",
        lines: [
            { speaker: "Camille", fr: "On va le retrouver cette semaine.", tr: "Bu hafta onu bulacağız." },
            { speaker: "Deniz", fr: "Demain, on va visiter le marché.", tr: "Yarın pazarı gezeceğiz." },
            { speaker: "Camille", fr: "Et après, on va demander aux vendeurs.", tr: "Sonra satıcılara soracağız." },
        ],
    },
    {
        unitId: 333,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Kısa Bir Mola",
        scene: "Deniz kendini iyi hissetmez ve eczaneye gider.",
        lines: [
            { speaker: "Deniz", fr: "Je ne me sens pas bien aujourd'hui.", tr: "Bugün iyi hissetmiyorum." },
            { speaker: "Camille", fr: "Tu dois aller à la pharmacie.", tr: "Eczaneye gitmelisin." },
            { speaker: "Deniz", fr: "D'accord, j'ai mal à la gorge.", tr: "Tamam, boğazım ağrıyor." },
        ],
    },
    {
        unitId: 334,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Bankada",
        scene: "Defteri bulan kişiye ödeme yapılır.",
        lines: [
            { speaker: "Camille", fr: "On doit faire un virement.", tr: "Havale yapmalıyız." },
            { speaker: "Deniz", fr: "Je veux payer la personne qui a trouvé le carnet.", tr: "Defteri bulan kişiye ödeme yapmak istiyorum." },
            { speaker: "Görevli", fr: "Vous avez votre carte d'identité ?", tr: "Kimliğiniz var mı?" },
        ],
    },
    {
        unitId: 335,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Postanede",
        scene: "Eski bir not postayla gönderilir.",
        lines: [
            { speaker: "Deniz", fr: "Je veux envoyer cette lettre.", tr: "Bu mektubu göndermek istiyorum." },
            { speaker: "Görevli", fr: "Express ou normal ?", tr: "Ekspres mi normal mi?" },
            { speaker: "Camille", fr: "Normal, s'il vous plaît.", tr: "Normal, lütfen." },
        ],
    },
    {
        unitId: 336,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Otel Rezervasyonu",
        scene: "Deniz kalış süresini uzatır.",
        lines: [
            { speaker: "Deniz", fr: "Je voudrais prolonger mon séjour.", tr: "Konaklamamı uzatmak istiyorum." },
            { speaker: "Resepsiyon", fr: "Pour combien de nuits ?", tr: "Kaç gece için?" },
            { speaker: "Deniz", fr: "Deux nuits, s'il vous plaît.", tr: "İki gece, lütfen." },
        ],
    },
    {
        unitId: 337,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Tren Yolculuğu",
        scene: "Kasabaya gitmek için tren hazırlanır.",
        lines: [
            { speaker: "Camille", fr: "Le train pour Lyon part à 14h.", tr: "Lyon'a tren 14'te kalkıyor." },
            { speaker: "Deniz", fr: "On achète les billets ?", tr: "Biletleri alıyor muyuz?" },
            { speaker: "Görevli", fr: "Voie 3, départ immédiat.", tr: "3. peron, hemen kalkış." },
        ],
    },
    {
        unitId: 338,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Havaalanında Buluşma",
        scene: "Şefin kızı Paris'e gelir.",
        lines: [
            { speaker: "Deniz", fr: "La fille du chef arrive aujourd'hui.", tr: "Şefin kızı bugün geliyor." },
            { speaker: "Camille", fr: "On l'attend à l'aéroport.", tr: "Onu havaalanında bekleyeceğiz." },
            { speaker: "Deniz", fr: "Quel vol ?", tr: "Hangi uçuş?" },
        ],
    },
    {
        unitId: 339,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Restoranda",
        scene: "Şefle buluşmadan önce birlikte yemek yerler.",
        lines: [
            { speaker: "Garson", fr: "Vous avez choisi ?", tr: "Seçtiniz mi?" },
            { speaker: "Deniz", fr: "Je voudrais la soupe et le plat du jour.", tr: "Çorba ve günün yemeğini istiyorum." },
            { speaker: "Camille", fr: "Et comme boisson, de l'eau.", tr: "İçecek olarak su." },
        ],
    },
    {
        unitId: 340,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Defter Bulundu",
        scene: "Tarif defteri geri döner ve birlikte tarife başlarlar.",
        lines: [
            { speaker: "Şef", fr: "Voici le carnet. Merci !", tr: "İşte defter. Teşekkürler!" },
            { speaker: "Deniz", fr: "On peut essayer la recette ensemble ?", tr: "Tarifi birlikte deneyebilir miyiz?" },
            { speaker: "Şef", fr: "Bien sûr, commençons.", tr: "Tabii, başlayalım." },
        ],
    },
];

export function getStoryForUnit(unitId: number): StorySegment | null {
    return stories.find(s => s.unitId === unitId) || null;
}

export function getStoryMetaForUnit(unitId: number): { segment: StorySegment; index: number; total: number } | null {
    const segment = getStoryForUnit(unitId);
    if (!segment) return null;

    const arcSegments = stories
        .filter(s => s.arcId === segment.arcId)
        .sort((a, b) => a.unitId - b.unitId);

    const index = arcSegments.findIndex(s => s.unitId === unitId) + 1;
    return { segment, index, total: arcSegments.length };
}

export function hasStory(unitId: number): boolean {
    return stories.some(s => s.unitId === unitId);
}
