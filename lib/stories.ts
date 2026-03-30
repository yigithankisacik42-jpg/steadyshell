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
        scene: "Deniz ve Camille küçük bir kafede oturur. Deniz, Paris'teki eski anılarını ve kayıp tarif defterini anlatır.",
        lines: [
            { speaker: "Deniz", fr: "L'année dernière, j'étais à Paris.", tr: "Geçen yıl Paris'teydim." },
            { speaker: "Camille", fr: "Tu es resté longtemps ?", tr: "Uzun kaldın mı?" },
            { speaker: "Deniz", fr: "Deux semaines. J'ai beaucoup visité la ville.", tr: "İki hafta. Şehri çok gezdim." },
            { speaker: "Camille", fr: "Tu as aimé la ville ?", tr: "Şehri sevdin mi?" },
            { speaker: "Deniz", fr: "Oui, beaucoup. J'ai adoré les cafés.", tr: "Evet, çok. Kafeleri çok sevdim." },
            { speaker: "Camille", fr: "Tu as goûté des desserts ?", tr: "Tatlılar denedin mi?" },
            { speaker: "Deniz", fr: "Oui, j'ai goûté une tarte aux pommes.", tr: "Evet, elmalı tart denedim." },
            { speaker: "Camille", fr: "Tu as acheté des souvenirs ?", tr: "Hediyelik aldın mı?" },
            { speaker: "Deniz", fr: "Oui, et j'ai perdu un vieux carnet de recettes.", tr: "Evet ve eski bir tarif defterimi kaybettim." },
            { speaker: "Camille", fr: "Ah, dommage… On peut le chercher.", tr: "Ah, yazık… Onu arayabiliriz." },
            { speaker: "Deniz", fr: "Merci ! Demain, on va au marché ?", tr: "Teşekkürler! Yarın pazara gidelim mi?" },
            { speaker: "Camille", fr: "Oui, on commence là.", tr: "Evet, oradan başlarız." },
        ],
        interactive: [
            {
                type: "choice",
                prompt: "Camille soruyor: “Tu as aimé la ville ?”",
                options: [
                    { id: "a", text: "Oui, beaucoup.", correct: true },
                    { id: "b", text: "Je m'appelle Deniz.", correct: false },
                    { id: "c", text: "À demain.", correct: false },
                ],
                correctFeedback: "Harika! Doğal bir cevap.",
                wrongFeedback: "Bu cümle soruya cevap olmuyor. Doğru cevap: “Oui, beaucoup.”",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "L'année dernière, je ___ à Paris.",
                options: [
                    { id: "a", text: "suis allé", correct: true },
                    { id: "b", text: "vais", correct: false },
                    { id: "c", text: "irai", correct: false },
                ],
                correctFeedback: "Süper! Geçmiş zaman: “suis allé”.",
                wrongFeedback: "Doğru cevap “suis allé” olmalı.",
            },
            {
                type: "choice",
                prompt: "“J'ai perdu un vieux carnet de recettes.” cümlesinin anlamı nedir?",
                options: [
                    { id: "a", text: "Eski bir tarif defterimi kaybettim.", correct: true },
                    { id: "b", text: "Yeni bir tarif kitabı aldım.", correct: false },
                    { id: "c", text: "Pazara gittim.", correct: false },
                ],
                correctFeedback: "Doğru! “perdre” = kaybetmek.",
                wrongFeedback: "Yanlış. “J'ai perdu” geçmişte kaybettim demektir.",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "J'ai ___ une tarte aux pommes.",
                options: [
                    { id: "a", text: "goûté", correct: true },
                    { id: "b", text: "goûter", correct: false },
                    { id: "c", text: "goûte", correct: false },
                ],
                correctFeedback: "Harika! “goûté” doğru seçim.",
                wrongFeedback: "Doğru cevap “goûté”.",
            },
            {
                type: "choice",
                prompt: "Camille: “On peut le chercher.” Deniz nasıl cevap verir?",
                options: [
                    { id: "a", text: "Merci ! Demain, on va au marché ?", correct: true },
                    { id: "b", text: "Je suis un livre.", correct: false },
                    { id: "c", text: "Hier, j'étais malade.", correct: false },
                ],
                correctFeedback: "Süper! Plan yapma cümlesi çok doğal.",
                wrongFeedback: "Bu cevap konuşmaya uygun değil. Doğru cevap: “Merci ! Demain, on va au marché ?”",
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
