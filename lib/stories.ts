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
            { speaker: "Camille", fr: "Ah, dommage... On peut le chercher.", tr: "Ah, yazık... Onu arayabiliriz." },
            { speaker: "Deniz", fr: "Merci ! Demain, on va au marché ?", tr: "Teşekkürler! Yarın pazara gidelim mi?" },
            { speaker: "Camille", fr: "Oui, on commence là.", tr: "Evet, oradan başlarız." },
        ],
        interactive: [
            {
                type: "choice",
                prompt: "Camille soruyor: \"Tu as aimé la ville ?\"",
                options: [
                    { id: "a", text: "Oui, beaucoup.", correct: true },
                    { id: "b", text: "Je m'appelle Deniz.", correct: false },
                    { id: "c", text: "À demain.", correct: false },
                ],
                correctFeedback: "Harika! Doğal bir cevap.",
                wrongFeedback: "Bu cümle soruya cevap olmuyor. Doğru cevap: \"Oui, beaucoup.\"",
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
                correctFeedback: "Süper! Geçmiş zaman: \"suis allé\".",
                wrongFeedback: "Doğru cevap \"suis allé\" olmalı.",
            },
            {
                type: "choice",
                prompt: "\"J'ai perdu un vieux carnet de recettes.\" cümlesinin anlamı nedir?",
                options: [
                    { id: "a", text: "Eski bir tarif defterimi kaybettim.", correct: true },
                    { id: "b", text: "Yeni bir tarif kitabı aldım.", correct: false },
                    { id: "c", text: "Pazara gittim.", correct: false },
                ],
                correctFeedback: "Doğru! \"perdre\" = kaybetmek.",
                wrongFeedback: "Yanlış. \"J'ai perdu\" geçmişte kaybettim demektir.",
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
                correctFeedback: "Harika! \"goûté\" doğru seçim.",
                wrongFeedback: "Doğru cevap \"goûté\".",
            },
            {
                type: "choice",
                prompt: "Camille: \"On peut le chercher.\" Deniz nasıl cevap verir?",
                options: [
                    { id: "a", text: "Merci ! Demain, on va au marché ?", correct: true },
                    { id: "b", text: "Je suis un livre.", correct: false },
                    { id: "c", text: "Hier, j'étais malade.", correct: false },
                ],
                correctFeedback: "Süper! Plan yapma cümlesi çok doğal.",
                wrongFeedback: "Bu cevap konuşmaya uygun değil. Doğru cevap: \"Merci ! Demain, on va au marché ?\"",
            },
        ],
    },
    {
        unitId: 332,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Plan Yapıyoruz",
        scene: "Deniz ve Camille ertesi gün için ayrıntılı bir plan yapar: pazar, satıcılar ve kayıp eşya ofisi.",
        lines: [
            { speaker: "Camille", fr: "On va le retrouver cette semaine.", tr: "Bu hafta onu bulacağız." },
            { speaker: "Deniz", fr: "Demain matin, on va au marché.", tr: "Yarın sabah pazara gidiyoruz." },
            { speaker: "Camille", fr: "On commence à dix heures ?", tr: "Saat on gibi başlayalım mı?" },
            { speaker: "Deniz", fr: "Oui, dix heures, c'est parfait.", tr: "Evet, saat on, harika." },
            { speaker: "Camille", fr: "J'ai une photo du carnet.", tr: "Defterin bir fotoğrafı var bende." },
            { speaker: "Deniz", fr: "Bonne idée, on la montre aux vendeurs.", tr: "İyi fikir, satıcılara gösteririz." },
            { speaker: "Camille", fr: "On va aussi demander au bureau des objets trouvés.", tr: "Kayıp eşya bürosuna da soracağız." },
            { speaker: "Deniz", fr: "Et après, on va au café du coin pour noter les infos.", tr: "Sonra köşedeki kafeye gidip bilgileri not ederiz." },
            { speaker: "Camille", fr: "Tu es libre demain après-midi ?", tr: "Yarın öğleden sonra müsait misin?" },
            { speaker: "Deniz", fr: "Oui, je suis libre toute la journée.", tr: "Evet, tüm gün müsaitim." },
            { speaker: "Camille", fr: "On se retrouve devant l'entrée principale.", tr: "Ana girişin önünde buluşuruz." },
            { speaker: "Deniz", fr: "D'accord, à demain !", tr: "Tamam, yarın görüşürüz!" },
        ],
        interactive: [
            {
                type: "choice",
                prompt: "\"On commence à dix heures ?\" ne demek?",
                options: [
                    { id: "a", text: "Saat 10'da başlayalım mı?", correct: true },
                    { id: "b", text: "Saat 10'da bitti mi?", correct: false },
                    { id: "c", text: "On kişi miyiz?", correct: false },
                ],
                correctFeedback: "Doğru! Başlangıç saati soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Saat 10'da başlayalım mı?\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "Demain matin, on va ___ .",
                options: [
                    { id: "a", text: "au marché", correct: true },
                    { id: "b", text: "à la maison", correct: false },
                    { id: "c", text: "hier", correct: false },
                ],
                correctFeedback: "Süper! \"au marché\" doğru seçim.",
                wrongFeedback: "Doğru cevap \"au marché\".",
            },
            {
                type: "choice",
                prompt: "\"Bonne idée, on la montre aux vendeurs.\" cümlesinin anlamı nedir?",
                options: [
                    { id: "a", text: "İyi fikir, satıcılara gösteririz.", correct: true },
                    { id: "b", text: "Kötü fikir, satıcılardan kaçarız.", correct: false },
                    { id: "c", text: "İyi fikir, eve dönelim.", correct: false },
                ],
                correctFeedback: "Harika! Doğru anlamı seçtin.",
                wrongFeedback: "Yanlış. Doğru anlam: \"İyi fikir, satıcılara gösteririz.\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "On va demander au bureau des ___ .",
                options: [
                    { id: "a", text: "objets trouvés", correct: true },
                    { id: "b", text: "petits déjeuners", correct: false },
                    { id: "c", text: "cartes postales", correct: false },
                ],
                correctFeedback: "Doğru! \"objets trouvés\" = kayıp eşya.",
                wrongFeedback: "Yanlış. Doğru cevap \"objets trouvés\".",
            },
            {
                type: "choice",
                prompt: "Camille: \"Tu es libre demain après-midi ?\" Deniz nasıl cevap verir?",
                options: [
                    { id: "a", text: "Oui, je suis libre toute la journée.", correct: true },
                    { id: "b", text: "Je dors maintenant.", correct: false },
                    { id: "c", text: "Je suis en retard hier.", correct: false },
                ],
                correctFeedback: "Gayet doğal bir cevap!",
                wrongFeedback: "Bu cevap uygun değil. Doğru cevap: \"Oui, je suis libre toute la journée.\"",
            },
        ],
    },
    {
        unitId: 333,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Kısa Bir Mola",
        scene: "Deniz kendini iyi hissetmez ve Camille ile eczaneye uğrar.",
        lines: [
            { speaker: "Deniz", fr: "Je ne me sens pas bien aujourd'hui.", tr: "Bugün iyi hissetmiyorum." },
            { speaker: "Camille", fr: "Tu veux qu'on passe à la pharmacie ?", tr: "Eczaneye uğramamızı ister misin?" },
            { speaker: "Deniz", fr: "Oui, j'ai mal à la gorge et un peu de fièvre.", tr: "Evet, boğazım ağrıyor ve biraz ateşim var." },
            { speaker: "Pharmacien", fr: "Bonjour, quels sont vos symptômes ?", tr: "Merhaba, şikayetleriniz neler?" },
            { speaker: "Deniz", fr: "J'ai mal à la gorge et je tousse.", tr: "Boğazım ağrıyor ve öksürüyorum." },
            { speaker: "Pharmacien", fr: "Je peux vous proposer un sirop et des pastilles.", tr: "Size bir şurup ve pastil önerebilirim." },
            { speaker: "Deniz", fr: "C'est sans ordonnance ?", tr: "Reçetesiz mi?" },
            { speaker: "Pharmacien", fr: "Oui, pas besoin d'ordonnance.", tr: "Evet, reçeteye gerek yok." },
            { speaker: "Camille", fr: "Combien ça coûte ?", tr: "Ne kadar tutuyor?" },
            { speaker: "Pharmacien", fr: "Ça fait huit euros.", tr: "Sekiz euro tutuyor." },
            { speaker: "Deniz", fr: "D'accord, je prends le sirop.", tr: "Tamam, şurubu alıyorum." },
            { speaker: "Pharmacien", fr: "Prenez deux pastilles par jour.", tr: "Günde iki pastil alın." },
        ],
        interactive: [
            {
                type: "choice",
                prompt: "\"Je ne me sens pas bien aujourd'hui.\" ne demek?",
                options: [
                    { id: "a", text: "Bugün iyi hissetmiyorum.", correct: true },
                    { id: "b", text: "Bugün çok mutluyum.", correct: false },
                    { id: "c", text: "Bugün Paris'e gidiyorum.", correct: false },
                ],
                correctFeedback: "Doğru! Cümle 'iyi hissetmiyorum' demektir.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Bugün iyi hissetmiyorum.\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "J'ai mal à la ___ .",
                options: [
                    { id: "a", text: "gorge", correct: true },
                    { id: "b", text: "main", correct: false },
                    { id: "c", text: "fenêtre", correct: false },
                ],
                correctFeedback: "Evet! \"gorge\" = boğaz.",
                wrongFeedback: "Yanlış. Doğru cevap \"gorge\".",
            },
            {
                type: "choice",
                prompt: "\"C'est sans ordonnance ?\" cümlesinin anlamı nedir?",
                options: [
                    { id: "a", text: "Reçetesiz mi?", correct: true },
                    { id: "b", text: "Kredi kartı var mı?", correct: false },
                    { id: "c", text: "Bu ücretsiz mi?", correct: false },
                ],
                correctFeedback: "Doğru! Reçete gerekip gerekmediği soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Reçetesiz mi?\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "Je peux vous proposer un ___ .",
                options: [
                    { id: "a", text: "sirop", correct: true },
                    { id: "b", text: "billet", correct: false },
                    { id: "c", text: "train", correct: false },
                ],
                correctFeedback: "Harika! \"sirop\" doğru seçim.",
                wrongFeedback: "Yanlış. Doğru cevap \"sirop\".",
            },
            {
                type: "choice",
                prompt: "\"Prenez deux pastilles par jour.\" ne demek?",
                options: [
                    { id: "a", text: "Günde iki pastil alın.", correct: true },
                    { id: "b", text: "Her gün iki kez uyuyun.", correct: false },
                    { id: "c", text: "Günde iki kez koşun.", correct: false },
                ],
                correctFeedback: "Doğru! Kullanım talimatı veriliyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Günde iki pastil alın.\"",
            },
        ],
    },
    {
        unitId: 334,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Bankada",
        scene: "Deniz, defteri bulan kişiye ödeme yapmak için bankaya gider.",
        lines: [
            { speaker: "Camille", fr: "On doit faire un virement.", tr: "Havale yapmamız lazım." },
            { speaker: "Deniz", fr: "Je veux payer la personne qui a trouvé le carnet.", tr: "Defteri bulan kişiye ödeme yapmak istiyorum." },
            { speaker: "Employé", fr: "Bonjour, vous avez votre carte d'identité ?", tr: "Merhaba, kimliğiniz var mı?" },
            { speaker: "Deniz", fr: "Oui, la voilà.", tr: "Evet, işte." },
            { speaker: "Employé", fr: "Le montant ?", tr: "Tutar ne kadar?" },
            { speaker: "Deniz", fr: "Je veux envoyer trente euros.", tr: "Otuz euro göndermek istiyorum." },
            { speaker: "Employé", fr: "Vous avez l'IBAN du destinataire ?", tr: "Alıcının IBAN'ı var mı?" },
            { speaker: "Deniz", fr: "Oui, il est sur mon téléphone.", tr: "Evet, telefonumda." },
            { speaker: "Employé", fr: "Signez ici, s'il vous plaît.", tr: "Burayı imzalayın, lütfen." },
            { speaker: "Deniz", fr: "D'accord.", tr: "Tamam." },
            { speaker: "Employé", fr: "Le virement sera fait aujourd'hui.", tr: "Havale bugün yapılacak." },
        ],
        interactive: [
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "On doit faire un ___ .",
                options: [
                    { id: "a", text: "virement", correct: true },
                    { id: "b", text: "dîner", correct: false },
                    { id: "c", text: "voyage", correct: false },
                ],
                correctFeedback: "Doğru! \"virement\" = havale.",
                wrongFeedback: "Yanlış. Doğru cevap \"virement\".",
            },
            {
                type: "choice",
                prompt: "\"Le montant ?\" ne demek?",
                options: [
                    { id: "a", text: "Tutar ne kadar?", correct: true },
                    { id: "b", text: "Tarih ne zaman?", correct: false },
                    { id: "c", text: "İsim ne?", correct: false },
                ],
                correctFeedback: "Evet! Bankada tutar soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Tutar ne kadar?\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "Vous avez votre carte d'___ ?",
                options: [
                    { id: "a", text: "identité", correct: true },
                    { id: "b", text: "hôtel", correct: false },
                    { id: "c", text: "salade", correct: false },
                ],
                correctFeedback: "Harika! \"carte d'identité\" doğru.",
                wrongFeedback: "Yanlış. Doğru cevap \"identité\".",
            },
            {
                type: "choice",
                prompt: "\"Vous avez l'IBAN du destinataire ?\" ne demek?",
                options: [
                    { id: "a", text: "Alıcının IBAN'ı var mı?", correct: true },
                    { id: "b", text: "Biletin numarası ne?", correct: false },
                    { id: "c", text: "Odanın anahtarı var mı?", correct: false },
                ],
                correctFeedback: "Doğru! Alıcı bilgisi soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Alıcının IBAN'ı var mı?\"",
            },
            {
                type: "choice",
                prompt: "\"Signez ici, s'il vous plaît.\" ne demek?",
                options: [
                    { id: "a", text: "Burayı imzalayın, lütfen.", correct: true },
                    { id: "b", text: "Burayı bekleyin, lütfen.", correct: false },
                    { id: "c", text: "Buradan çıkın, lütfen.", correct: false },
                ],
                correctFeedback: "Doğru! İmza isteniyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Burayı imzalayın, lütfen.\"",
            },
        ],
    },
    {
        unitId: 335,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Postanede",
        scene: "Deniz, eski bir notu postayla gönderir.",
        lines: [
            { speaker: "Deniz", fr: "Je veux envoyer cette lettre.", tr: "Bu mektubu göndermek istiyorum." },
            { speaker: "Görevli", fr: "Express ou normal ?", tr: "Ekspres mi normal mi?" },
            { speaker: "Deniz", fr: "Normal, s'il vous plaît.", tr: "Normal, lütfen." },
            { speaker: "Görevli", fr: "C'est pour la France ou pour l'étranger ?", tr: "Fransa için mi yoksa yurt dışı için mi?" },
            { speaker: "Deniz", fr: "Pour la France.", tr: "Fransa için." },
            { speaker: "Görevli", fr: "Vous voulez un suivi ?", tr: "Takip ister misiniz?" },
            { speaker: "Deniz", fr: "Oui, je préfère.", tr: "Evet, tercih ederim." },
            { speaker: "Görevli", fr: "Ça fait trois euros cinquante.", tr: "Üç euro elli." },
            { speaker: "Camille", fr: "On paie par carte.", tr: "Kartla ödüyoruz." },
            { speaker: "Görevli", fr: "Merci. Voici le reçu.", tr: "Teşekkürler. İşte fiş." },
            { speaker: "Deniz", fr: "Parfait, merci.", tr: "Harika, teşekkürler." },
        ],
        interactive: [
            {
                type: "choice",
                prompt: "\"Express ou normal ?\" ne demek?",
                options: [
                    { id: "a", text: "Ekspres mi normal mi?", correct: true },
                    { id: "b", text: "Büyük mü küçük mü?", correct: false },
                    { id: "c", text: "Bugün mü yarın mı?", correct: false },
                ],
                correctFeedback: "Doğru! Gönderim türü soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Ekspres mi normal mi?\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "Je veux envoyer cette ___ .",
                options: [
                    { id: "a", text: "lettre", correct: true },
                    { id: "b", text: "valise", correct: false },
                    { id: "c", text: "soupe", correct: false },
                ],
                correctFeedback: "Harika! \"lettre\" = mektup.",
                wrongFeedback: "Yanlış. Doğru cevap \"lettre\".",
            },
            {
                type: "choice",
                prompt: "\"Vous voulez un suivi ?\" ne demek?",
                options: [
                    { id: "a", text: "Takip ister misiniz?", correct: true },
                    { id: "b", text: "İade ister misiniz?", correct: false },
                    { id: "c", text: "Adres değiştirilsin mi?", correct: false },
                ],
                correctFeedback: "Doğru! Takip numarası soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Takip ister misiniz?\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "Ça fait trois euros ___ .",
                options: [
                    { id: "a", text: "cinquante", correct: true },
                    { id: "b", text: "trente", correct: false },
                    { id: "c", text: "douze", correct: false },
                ],
                correctFeedback: "Evet! \"trois euros cinquante\" doğru.",
                wrongFeedback: "Yanlış. Doğru cevap \"cinquante\".",
            },
            {
                type: "choice",
                prompt: "\"On paie par carte.\" ne demek?",
                options: [
                    { id: "a", text: "Kartla ödüyoruz.", correct: true },
                    { id: "b", text: "Nakit ödüyoruz.", correct: false },
                    { id: "c", text: "Ödemiyoruz.", correct: false },
                ],
                correctFeedback: "Doğru! Ödeme yöntemi belirtiliyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Kartla ödüyoruz.\"",
            },
        ],
    },
    {
        unitId: 336,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Otel Rezervasyonu",
        scene: "Deniz konaklamasını uzatmak için resepsiyona gider.",
        lines: [
            { speaker: "Deniz", fr: "Bonjour, je voudrais prolonger mon séjour.", tr: "Merhaba, konaklamamı uzatmak istiyorum." },
            { speaker: "Resepsiyon", fr: "Pour combien de nuits ?", tr: "Kaç gece için?" },
            { speaker: "Deniz", fr: "Deux nuits, s'il vous plaît.", tr: "İki gece, lütfen." },
            { speaker: "Resepsiyon", fr: "Vous gardez la même chambre ?", tr: "Aynı odayı mı tutuyorsunuz?" },
            { speaker: "Deniz", fr: "Oui, si c'est possible.", tr: "Evet, mümkünse." },
            { speaker: "Resepsiyon", fr: "Le petit-déjeuner est inclus.", tr: "Kahvaltı dahil." },
            { speaker: "Deniz", fr: "Parfait. À quelle heure est le check-out ?", tr: "Harika. Çıkış saati kaçta?" },
            { speaker: "Resepsiyon", fr: "À midi.", tr: "Öğlen." },
            { speaker: "Deniz", fr: "Ça coûte combien par nuit ?", tr: "Gecelik ne kadar?" },
            { speaker: "Resepsiyon", fr: "Soixante euros.", tr: "Altmış euro." },
            { speaker: "Deniz", fr: "D'accord, je confirme.", tr: "Tamam, onaylıyorum." },
            { speaker: "Resepsiyon", fr: "Je vous imprime la confirmation.", tr: "Onayı size yazdırıyorum." },
        ],
        interactive: [
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "Je voudrais prolonger mon ___ .",
                options: [
                    { id: "a", text: "séjour", correct: true },
                    { id: "b", text: "train", correct: false },
                    { id: "c", text: "repas", correct: false },
                ],
                correctFeedback: "Doğru! \"séjour\" = konaklama.",
                wrongFeedback: "Yanlış. Doğru cevap \"séjour\".",
            },
            {
                type: "choice",
                prompt: "\"Pour combien de nuits ?\" ne demek?",
                options: [
                    { id: "a", text: "Kaç gece için?", correct: true },
                    { id: "b", text: "Kaç kişi için?", correct: false },
                    { id: "c", text: "Kaç yıldızlı?", correct: false },
                ],
                correctFeedback: "Evet! Gece sayısı soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Kaç gece için?\"",
            },
            {
                type: "choice",
                prompt: "\"Vous gardez la même chambre ?\" ne demek?",
                options: [
                    { id: "a", text: "Aynı odayı mı tutuyorsunuz?", correct: true },
                    { id: "b", text: "Odanızda temizlik var mı?", correct: false },
                    { id: "c", text: "Odanız nerede?", correct: false },
                ],
                correctFeedback: "Doğru! Odanın değişip değişmeyeceği soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Aynı odayı mı tutuyorsunuz?\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "Le petit-déjeuner est ___ .",
                options: [
                    { id: "a", text: "inclus", correct: true },
                    { id: "b", text: "interdit", correct: false },
                    { id: "c", text: "oublié", correct: false },
                ],
                correctFeedback: "Evet! \"inclus\" = dahil.",
                wrongFeedback: "Yanlış. Doğru cevap \"inclus\".",
            },
            {
                type: "choice",
                prompt: "\"À midi.\" ne demek?",
                options: [
                    { id: "a", text: "Öğlen.", correct: true },
                    { id: "b", text: "Sabah erken.", correct: false },
                    { id: "c", text: "Gece yarısı.", correct: false },
                ],
                correctFeedback: "Doğru! Saat öğlen.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Öğlen.\"",
            },
        ],
    },
    {
        unitId: 337,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Tren Yolculuğu",
        scene: "Kasabaya gitmek için istasyonda bilet alırlar.",
        lines: [
            { speaker: "Camille", fr: "Le train pour Lyon part à 14h.", tr: "Lyon treni 14'te kalkıyor." },
            { speaker: "Deniz", fr: "On achète les billets ici ?", tr: "Biletleri burada mı alıyoruz?" },
            { speaker: "Görevli", fr: "Aller simple ou aller-retour ?", tr: "Tek yön mü gidiş-dönüş mü?" },
            { speaker: "Deniz", fr: "Aller-retour, s'il vous plaît.", tr: "Gidiş-dönüş, lütfen." },
            { speaker: "Görevli", fr: "Vous préférez une place côté fenêtre ?", tr: "Pencere kenarı ister misiniz?" },
            { speaker: "Deniz", fr: "Oui, si possible.", tr: "Evet, mümkünse." },
            { speaker: "Görevli", fr: "Voie 3, départ dans vingt minutes.", tr: "3. peron, yirmi dakika içinde kalkış." },
            { speaker: "Camille", fr: "On doit se dépêcher.", tr: "Acele etmeliyiz." },
            { speaker: "Deniz", fr: "Où est la voiture 5 ?", tr: "5. vagon nerede?" },
            { speaker: "Görevli", fr: "Tout au bout du quai.", tr: "Peronun en sonunda." },
            { speaker: "Camille", fr: "On a le temps pour un café ?", tr: "Bir kahve için zamanımız var mı?" },
            { speaker: "Deniz", fr: "Juste un petit café.", tr: "Sadece küçük bir kahve." },
        ],
        interactive: [
            {
                type: "choice",
                prompt: "\"Aller simple ou aller-retour ?\" ne demek?",
                options: [
                    { id: "a", text: "Tek yön mü gidiş-dönüş mü?", correct: true },
                    { id: "b", text: "Pencere mi koridor mu?", correct: false },
                    { id: "c", text: "Bugün mü yarın mı?", correct: false },
                ],
                correctFeedback: "Doğru! Bilet türü soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Tek yön mü gidiş-dönüş mü?\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "Le train pour Lyon part à ___ .",
                options: [
                    { id: "a", text: "14h", correct: true },
                    { id: "b", text: "8h", correct: false },
                    { id: "c", text: "20h", correct: false },
                ],
                correctFeedback: "Evet! Saat 14'te kalkıyor.",
                wrongFeedback: "Yanlış. Doğru cevap \"14h\".",
            },
            {
                type: "choice",
                prompt: "\"Voie 3, départ dans vingt minutes.\" ne demek?",
                options: [
                    { id: "a", text: "3. peron, yirmi dakika içinde kalkış.", correct: true },
                    { id: "b", text: "3. peron, hemen kalkış.", correct: false },
                    { id: "c", text: "3. vagon, bilet iptali.", correct: false },
                ],
                correctFeedback: "Doğru! Kalkış süresi belirtiliyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"3. peron, yirmi dakika içinde kalkış.\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "place côté ___ .",
                options: [
                    { id: "a", text: "fenêtre", correct: true },
                    { id: "b", text: "livre", correct: false },
                    { id: "c", text: "table", correct: false },
                ],
                correctFeedback: "Doğru! \"fenêtre\" = pencere.",
                wrongFeedback: "Yanlış. Doğru cevap \"fenêtre\".",
            },
            {
                type: "choice",
                prompt: "\"On doit se dépêcher.\" ne demek?",
                options: [
                    { id: "a", text: "Acele etmeliyiz.", correct: true },
                    { id: "b", text: "Rahatlayabiliriz.", correct: false },
                    { id: "c", text: "Yorgun hissetmeliyiz.", correct: false },
                ],
                correctFeedback: "Doğru! Hızlı olmaları gerektiği söyleniyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Acele etmeliyiz.\"",
            },
        ],
    },
    {
        unitId: 338,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Havaalanında Buluşma",
        scene: "Şefin kızı Paris'e gelir ve havaalanında buluşurlar.",
        lines: [
            { speaker: "Deniz", fr: "La fille du chef arrive aujourd'hui.", tr: "Şefin kızı bugün geliyor." },
            { speaker: "Camille", fr: "On l'attend à l'aéroport.", tr: "Onu havaalanında bekleyeceğiz." },
            { speaker: "Deniz", fr: "Quel vol ?", tr: "Hangi uçuş?" },
            { speaker: "Camille", fr: "Le vol AF152, arrivée à 16h10.", tr: "AF152 uçuşu, 16:10'da varış." },
            { speaker: "Deniz", fr: "On se met près de la sortie.", tr: "Çıkışın yakınına geçelim." },
            { speaker: "Camille", fr: "J'ai une pancarte avec son prénom.", tr: "Adıyla bir pankartım var." },
            { speaker: "Deniz", fr: "Elle a beaucoup de bagages ?", tr: "Çok bagajı var mı?" },
            { speaker: "Camille", fr: "Deux valises.", tr: "İki valiz." },
            { speaker: "Deniz", fr: "Si elle ne nous voit pas, on l'appelle.", tr: "Bizi görmezse ararız." },
            { speaker: "Camille", fr: "Son numéro est dans mon téléphone.", tr: "Numarası telefonumda." },
            { speaker: "Deniz", fr: "D'accord, restons ici.", tr: "Tamam, burada kalalım." },
            { speaker: "Camille", fr: "Je la vois, elle arrive !", tr: "Onu görüyorum, geliyor!" },
        ],
        interactive: [
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "On l'attend à l'___ .",
                options: [
                    { id: "a", text: "aéroport", correct: true },
                    { id: "b", text: "hôtel", correct: false },
                    { id: "c", text: "bureau", correct: false },
                ],
                correctFeedback: "Doğru! \"aéroport\" = havaalanı.",
                wrongFeedback: "Yanlış. Doğru cevap \"aéroport\".",
            },
            {
                type: "choice",
                prompt: "\"Quel vol ?\" ne demek?",
                options: [
                    { id: "a", text: "Hangi uçuş?", correct: true },
                    { id: "b", text: "Hangi otel?", correct: false },
                    { id: "c", text: "Hangi tren?", correct: false },
                ],
                correctFeedback: "Doğru! Uçuş numarası soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Hangi uçuş?\"",
            },
            {
                type: "choice",
                prompt: "\"Le vol AF152, arrivée à 16h10.\" ne demek?",
                options: [
                    { id: "a", text: "AF152 uçuşu, 16:10'da varış.", correct: true },
                    { id: "b", text: "AF152 uçuşu, 16:10'da kalkış.", correct: false },
                    { id: "c", text: "AF152 uçuşu iptal oldu.", correct: false },
                ],
                correctFeedback: "Evet! Varış saati söyleniyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"AF152 uçuşu, 16:10'da varış.\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "J'ai une ___ avec son prénom.",
                options: [
                    { id: "a", text: "pancarte", correct: true },
                    { id: "b", text: "valise", correct: false },
                    { id: "c", text: "soupe", correct: false },
                ],
                correctFeedback: "Doğru! \"pancarte\" = pankart/tabela.",
                wrongFeedback: "Yanlış. Doğru cevap \"pancarte\".",
            },
            {
                type: "choice",
                prompt: "\"Je la vois, elle arrive !\" ne demek?",
                options: [
                    { id: "a", text: "Onu görüyorum, geliyor!", correct: true },
                    { id: "b", text: "Onu göremiyorum, gidiyorum.", correct: false },
                    { id: "c", text: "Onu arıyorum, bekliyorum.", correct: false },
                ],
                correctFeedback: "Doğru! Kişinin geldiği söyleniyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Onu görüyorum, geliyor!\"",
            },
        ],
    },
    {
        unitId: 339,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Restoranda",
        scene: "Şefle buluşmadan önce birlikte yemek yerler.",
        lines: [
            { speaker: "Garson", fr: "Bonsoir, vous avez réservé ?", tr: "İyi akşamlar, rezervasyonunuz var mı?" },
            { speaker: "Camille", fr: "Oui, une table pour deux.", tr: "Evet, iki kişilik bir masa." },
            { speaker: "Garson", fr: "Voici la carte.", tr: "İşte menü." },
            { speaker: "Deniz", fr: "Je voudrais la soupe et le plat du jour.", tr: "Çorba ve günün yemeğini istiyorum." },
            { speaker: "Camille", fr: "Et comme boisson, de l'eau.", tr: "İçecek olarak su." },
            { speaker: "Garson", fr: "Souhaitez-vous une entrée ?", tr: "Başlangıç ister misiniz?" },
            { speaker: "Deniz", fr: "Oui, une petite salade.", tr: "Evet, küçük bir salata." },
            { speaker: "Garson", fr: "Le plat du jour est du poulet.", tr: "Günün yemeği tavuk." },
            { speaker: "Camille", fr: "Parfait.", tr: "Harika." },
            { speaker: "Garson", fr: "Vous prenez un dessert ?", tr: "Tatlı alır mısınız?" },
            { speaker: "Deniz", fr: "Pas maintenant, merci.", tr: "Şimdilik değil, teşekkürler." },
            { speaker: "Garson", fr: "Très bien, je reviens.", tr: "Peki, birazdan gelirim." },
        ],
        interactive: [
            {
                type: "choice",
                prompt: "\"Vous avez réservé ?\" ne demek?",
                options: [
                    { id: "a", text: "Rezervasyonunuz var mı?", correct: true },
                    { id: "b", text: "Menüyü istiyor musunuz?", correct: false },
                    { id: "c", text: "Hesabı ister misiniz?", correct: false },
                ],
                correctFeedback: "Doğru! Rezervasyon soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Rezervasyonunuz var mı?\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "une table pour ___ .",
                options: [
                    { id: "a", text: "deux", correct: true },
                    { id: "b", text: "café", correct: false },
                    { id: "c", text: "demain", correct: false },
                ],
                correctFeedback: "Evet! \"deux\" doğru.",
                wrongFeedback: "Yanlış. Doğru cevap \"deux\".",
            },
            {
                type: "choice",
                prompt: "\"Souhaitez-vous une entrée ?\" ne demek?",
                options: [
                    { id: "a", text: "Başlangıç ister misiniz?", correct: true },
                    { id: "b", text: "Tatlı ister misiniz?", correct: false },
                    { id: "c", text: "Hesap ister misiniz?", correct: false },
                ],
                correctFeedback: "Doğru! Başlangıç soruluyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Başlangıç ister misiniz?\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "le plat du ___ .",
                options: [
                    { id: "a", text: "jour", correct: true },
                    { id: "b", text: "train", correct: false },
                    { id: "c", text: "soir", correct: false },
                ],
                correctFeedback: "Evet! \"plat du jour\" doğru.",
                wrongFeedback: "Yanlış. Doğru cevap \"jour\".",
            },
            {
                type: "choice",
                prompt: "\"Pas maintenant, merci.\" ne demek?",
                options: [
                    { id: "a", text: "Şimdilik değil, teşekkürler.", correct: true },
                    { id: "b", text: "Hemen getir, teşekkürler.", correct: false },
                    { id: "c", text: "Bugün kapalıyız.", correct: false },
                ],
                correctFeedback: "Doğru! Nazikçe reddediliyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Şimdilik değil, teşekkürler.\"",
            },
        ],
    },
    {
        unitId: 340,
        arcId: "fr-a2-recipe-book",
        arcTitle: "Kayıp Tarif Defteri",
        title: "Defter Bulundu",
        scene: "Tarif defteri geri döner ve birlikte tarife başlarlar.",
        lines: [
            { speaker: "Şef", fr: "Voici le carnet. Merci d'être venus.", tr: "İşte defter. Geldiğiniz için teşekkürler." },
            { speaker: "Deniz", fr: "On est soulagés !", tr: "Rahatladık!" },
            { speaker: "Şef", fr: "La personne l'a trouvé au marché.", tr: "Kişi defteri pazarda bulmuş." },
            { speaker: "Camille", fr: "Alors, on peut essayer la recette ensemble ?", tr: "O zaman, tarifi birlikte deneyebilir miyiz?" },
            { speaker: "Şef", fr: "Bien sûr. On commence par les ingrédients.", tr: "Tabii. Malzemelerle başlayalım." },
            { speaker: "Deniz", fr: "Il nous faut des tomates, de l'ail et du basilic.", tr: "Domates, sarımsak ve fesleğen lazım." },
            { speaker: "Şef", fr: "Et de l'huile d'olive.", tr: "Ve zeytinyağı." },
            { speaker: "Camille", fr: "Je coupe les tomates.", tr: "Domatesleri kesiyorum." },
            { speaker: "Deniz", fr: "Je mélange avec l'huile.", tr: "Yağla karıştırıyorum." },
            { speaker: "Şef", fr: "Goûtez la sauce.", tr: "Sosu tadın." },
            { speaker: "Camille", fr: "C'est délicieux.", tr: "Çok lezzetli." },
            { speaker: "Şef", fr: "Parfait, on l'a retrouvé et on cuisine !", tr: "Harika, defteri bulduk ve yemek yapıyoruz!" },
        ],
        interactive: [
            {
                type: "choice",
                prompt: "\"On est soulagés !\" ne demek?",
                options: [
                    { id: "a", text: "Rahatladık!", correct: true },
                    { id: "b", text: "Çok kızgınız!", correct: false },
                    { id: "c", text: "Çok yorgunuz!", correct: false },
                ],
                correctFeedback: "Doğru! Rahatlama ifadesi.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Rahatladık!\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "On commence par les ___ .",
                options: [
                    { id: "a", text: "ingrédients", correct: true },
                    { id: "b", text: "tickets", correct: false },
                    { id: "c", text: "chaussures", correct: false },
                ],
                correctFeedback: "Evet! \"ingrédients\" = malzemeler.",
                wrongFeedback: "Yanlış. Doğru cevap \"ingrédients\".",
            },
            {
                type: "choice",
                prompt: "\"Il nous faut des tomates, de l'ail et du basilic.\" ne demek?",
                options: [
                    { id: "a", text: "Domates, sarımsak ve fesleğen lazım.", correct: true },
                    { id: "b", text: "Domatesleri hemen yiyoruz.", correct: false },
                    { id: "c", text: "Pazara yarın gidiyoruz.", correct: false },
                ],
                correctFeedback: "Doğru! Malzeme listesi veriliyor.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Domates, sarımsak ve fesleğen lazım.\"",
            },
            {
                type: "fill_blank",
                prompt: "Cümleyi tamamla:",
                sentence: "Je ___ les tomates.",
                options: [
                    { id: "a", text: "coupe", correct: true },
                    { id: "b", text: "bois", correct: false },
                    { id: "c", text: "achète", correct: false },
                ],
                correctFeedback: "Doğru! \"coupe\" = kesiyorum.",
                wrongFeedback: "Yanlış. Doğru cevap \"coupe\".",
            },
            {
                type: "choice",
                prompt: "\"C'est délicieux.\" ne demek?",
                options: [
                    { id: "a", text: "Çok lezzetli.", correct: true },
                    { id: "b", text: "Çok pahalı.", correct: false },
                    { id: "c", text: "Çok uzak.", correct: false },
                ],
                correctFeedback: "Evet! Lezzet ifadesi.",
                wrongFeedback: "Yanlış. Doğru anlam: \"Çok lezzetli.\"",
            },
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
