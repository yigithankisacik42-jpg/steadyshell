
// SteadyShell Konu Anlatımı - Fransızca A2 (331-360)
// Curriculum.ts ile senkronize

import { UnitLecture, LectureSlide } from './lectures';

// ===== ÜNİTE 331: GEÇMİŞ TATİLLER =====
const unit331Lecture: UnitLecture = {
    unitId: 331, title: "Passé Composé - Geçmiş Zaman", language: "Fransızca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Geçmiş Zamanı Öğreniyoruz! ⏰", content: "A2 seviyesine hoş geldiniz! Bu derste Passé Composé ile geçmişte tamamlanmış eylemleri anlatmayı öğreneceğiz.", tip: "Passé Composé = AVOIR/ÊTRE + Geçmiş Ortaç" },
        { id: 2, type: "vocabulary", title: "AVOIR ile Çekim", content: "Çoğu fiil AVOIR ile çekilir:\n\n• J'ai mangé = Yedim\n• Tu as visité = Ziyaret ettin\n• Il a travaillé = Çalıştı\n• J'ai passé de bonnes vacances\n• Nous avons visité Paris" },
        {
            id: 3, type: "grammar", title: "Participe Passé Kuralları", rules: [
                { rule: "-ER fiiller → -É", explanation: "Manger → Mangé", examples: ["J'ai mangé", "Elle a chanté"] },
                { rule: "-IR fiiller → -I", explanation: "Finir → Fini", examples: ["J'ai fini", "Tu as choisi"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["AVOIR/ÊTRE + Participe Passé", "-ER → -É, -IR → -I", "ÊTRE ile hareket fiilleri"], cta: "Şimdi geçmiş zaman pratiği yapalım!" }
    ]
};

const unit332Lecture: UnitLecture = {
    unitId: 332, title: "Futur Proche - Yakın Gelecek", language: "Fransızca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Geleceği Planlamak 🔮", content: "Yakın gelecekteki planlarınızı anlatmak için Futur Proche kullanacağız.", tip: "ALLER + Mastar Fiil = Gelecek" },
        { id: 2, type: "vocabulary", title: "Formül", content: "ALLER fiilini şimdiki zamanda çek + Mastar fiil ekle:\n\n• Je vais partir = Gideceğim\n• Tu vas manger = Yiyeceksin\n• Nous allons voyager = Seyahat edeceğiz" },
        {
            id: 3, type: "grammar", title: "Aller Çekimi", rules: [
                { rule: "Je vais", explanation: "Gidiyorum / -eceğim", examples: ["Je vais travailler"] },
                { rule: "Nous allons", explanation: "Gidiyoruz / -eceğiz", examples: ["Nous allons partir"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["ALLER + Mastar = Gelecek", "Çok kolay ve günlük kullanım", "Je vais, Tu vas, Il va..."], cta: "Gelecek planlarınızı söyleyin!" }
    ]
};

const unit333Lecture: UnitLecture = {
    unitId: 333, title: "Sağlık ve Doktorda", language: "Fransızca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Doktorda 🏥", content: "Sağlık sorunlarınızı anlatmayı ve doktor önerilerini anlamayı öğreneceğiz.", tip: "J'ai mal à... = Ağrım var..." },
        { id: 2, type: "vocabulary", title: "Şikayet Etme", content: "• J'ai mal à la tête = Başım ağrıyor\n• J'ai de la fièvre = Ateşim var\n• Je tousse = Öksürüyorum\n• Je suis fatigué = Yorgunum" },
        {
            id: 3, type: "grammar", title: "IL FAUT Kalıbı", rules: [
                { rule: "Il faut + Mastar", explanation: "... lazım / gerekiyor", examples: ["Il faut dormir", "Il faut boire de l'eau"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet", points: ["J'ai mal à + vücut parçası", "Il faut + mastar = lazım", "Depuis = Ne zamandır"], cta: "Sağlık diyaloğu pratiği!" }
    ]
};

// ===== Üniteler 334-360 (Kısa format) =====
const unit334Lecture: UnitLecture = {
    unitId: 334, title: "Bankada", language: "Fransızca", level: "A2", slides: [
        { id: 1, type: "intro", title: "Banka İşlemleri 🏦", content: "Bankada resmi dilde konuşmayı öğreneceğiz.", tip: "Je voudrais... = Rica ederdim..." },
        { id: 2, type: "vocabulary", title: "Resmi Rica", content: "• Je voudrais ouvrir un compte\n• Pourriez-vous m'aider?\n• Est-ce que je peux...?" },
        { id: 3, type: "summary", title: "Özet", points: ["Conditionnel = Kibar", "Je voudrais, Pourriez-vous"], cta: "Banka diyaloğu!" }
    ]
};

const unit335Lecture: UnitLecture = {
    unitId: 335, title: "Postanede", language: "Fransızca", level: "A2", slides: [
        { id: 1, type: "intro", title: "Posta İşlemleri 📮", content: "Mektup ve paket göndermeyi öğreneceğiz.", tip: "Beaucoup de = Çok" },
        { id: 2, type: "vocabulary", title: "Miktar İfadeleri", content: "• Beaucoup de lettres\n• Un peu de patience\n• Trop de travail" },
        { id: 3, type: "summary", title: "Özet", points: ["DE + isim (tanımlıksız)", "Miktar belirteçleri"], cta: "Pratik yapalım!" }
    ]
};

const unit336Lecture: UnitLecture = {
    unitId: 336, title: "Otel Rezervasyonu", language: "Fransızca", level: "A2", slides: [
        { id: 1, type: "intro", title: "Otel Ayırtma 🏨", content: "Otel rezervasyonu yapmayı öğreneceğiz.", tip: "Si + Présent = Gerçek koşul" },
        { id: 2, type: "vocabulary", title: "Koşul Cümlesi", content: "Si vous réservez maintenant, vous aurez une réduction.\nSi la chambre est disponible, je la prends." },
        { id: 3, type: "summary", title: "Özet", points: ["Si + Şimdiki = Gerçek koşul", "Otel terimleri"], cta: "Rezervasyon pratiği!" }
    ]
};

const unit337Lecture: UnitLecture = {
    unitId: 337, title: "Tren İstasyonunda", language: "Fransızca", level: "A2", slides: [
        { id: 1, type: "intro", title: "Trenle Yolculuk 🚂", content: "Tren istasyonunda bilet almayı öğreneceğiz.", tip: "Inversion = Resmi soru" },
        { id: 2, type: "vocabulary", title: "Soru Yapıları", content: "• À quelle heure part le train?\n• Y a-t-il des places?\n• De quel quai?" },
        { id: 3, type: "summary", title: "Özet", points: ["Ters çevirmeli soru", "Tren terimleri"], cta: "Bilet alalım!" }
    ]
};

const unit338Lecture: UnitLecture = {
    unitId: 338, title: "Havaalanında - Edilgen Yapı", language: "Fransızca", level: "A2", slides: [
        {
            id: 1, type: "intro", title: "Mantık Nedir? (Yönetmen Koltuğu) 🎬",
            content: "Bir film çektiğini düşün. Kamerayı kime odaklayacaksın?\n\n• **Etken (Aktif):** Kamera 'İşi Yapan' üzerindedir. (Ahmet elmayı yiyor.)\n• **Edilgen (Pasif):** Kamera 'İşten Etkilenen' üzerindedir. (Elma, Ahmet tarafından yeniliyor.)",
            tip: "Fransızcada: Nesne başa geçer, Özne sona atılır. Araya 'Être' fiili girer."
        },
        {
            id: 2, type: "grammar", title: "Dört Adımlı Kurulum 🧱",
            rules: [
                { rule: "1. Yer Değiştirme 🔀", explanation: "Nesne başa gelir, Özne sona gider.", examples: ["La télé ...... Marie"] },
                { rule: "2. Motoru Takmak (ÊTRE) ⚙️", explanation: "Orijinal cümle hangi zamandaysa, ÊTRE fiilini o zamanda çekimlersin.", examples: ["La télé EST ...... Marie"] },
                { rule: "3. Ana Fiili Dönüştürmek 🔨", explanation: "Ana fiil Participe Passé (geçmiş zaman) haline gelir.", examples: ["La télé est REGARDÉE ...... Marie"] },
                { rule: "4. 'Tarafından' Eklemek (PAR) 🌉", explanation: "İşi yapanı bağlamak için PAR eklenir.", examples: ["La télé est regardée PAR Marie"] }
            ]
        },
        {
            id: 3, type: "grammar", title: "'Akort' Ayarı (L'Accord) ⚠️",
            rules: [
                { rule: "Kural", explanation: "Pasif cümlede ÊTRE kullanıldığı için, fiili yeni özneye uydurmak ZORUNDASIN.", examples: [] },
                { rule: "Dişi Tekil (La/Une)", explanation: "Sonuna -e ekle.", examples: ["La pomme est mangéE"] },
                { rule: "Erkek Çoğul (Les)", explanation: "Sonuna -s ekle.", examples: ["Les gâteaux sont mangéS"] },
                { rule: "Dişi Çoğul (Les)", explanation: "Sonuna -es ekle.", examples: ["Les pommes sont mangéES"] }
            ],
            note: "Okunuş genellikle değişmez, ama yazımda zorunludur!"
        },
        {
            id: 4, type: "grammar", title: "Zaman Yolculuğu 🕰️",
            rules: [
                { rule: "Mantık", explanation: "Sadece 'ÊTRE' fiili zaman değiştirir. Ana fiil (Fermée) hep aynı kalır!", examples: [] },
                { rule: "Présent", explanation: "La porte EST fermée par Ali.", examples: [] },
                { rule: "Passé Composé", explanation: "La porte A ÉTÉ fermée par Ali.", examples: [] },
                { rule: "Futur Proche", explanation: "La porte VA ÊTRE fermée par Ali.", examples: [] }
            ]
        },
        {
            id: 5, type: "grammar", title: "'Par' mı 'De' mi? 🕵️",
            rules: [
                { rule: "Genel Kural", explanation: "'Tarafından' demek için genellikle PAR kullanılır.", examples: ["Fait par moi"] },
                { rule: "İstisna: Duygu Fiilleri", explanation: "Sevmek (Aimer), Tanımak (Connaître), Saygı duymak vb. ile DE kullanılır.", examples: ["Elle est aimée DE tout le monde", "Il est connu DE tous"] }
            ]
        },
        {
            id: 6, type: "summary", title: "Özet 📝",
            points: [
                "Nesne başa, Özne sona geçer",
                "Araya ÊTRE girer (Zamanı belirler)",
                "Fiil Participe Passé olur ve UYUM sağlanır (-e, -s)",
                "Genelde PAR, duygu fiillerinde DE kullanılır"
            ],
            cta: "Şimdi pasif cümle kurmayı dene!"
        }
    ]
};

const unit339Lecture: UnitLecture = {
    unitId: 339, title: "Restoranda Sipariş", language: "Fransızca", level: "A2", slides: [
        { id: 1, type: "intro", title: "Lezzetli Yemek 🍽️", content: "Restoranda detaylı sipariş vermeyi öğreneceğiz.", tip: "COD = le, la, les" },
        { id: 2, type: "vocabulary", title: "COD Zamirleri", content: "• Le menu? Je le regarde.\n• La salade? Je la veux.\n• Les desserts? Je les commande." },
        { id: 3, type: "summary", title: "Özet", points: ["COD = Doğrudan nesne zamiri", "Zamirler fiilden ÖNCE gelir"], cta: "Sipariş verelim!" }
    ]
};

const unit340Lecture: UnitLecture = {
    unitId: 340, title: "Yemek Tarifi ve Emir Kipi", language: "Fransızca", level: "A2", slides: [
        { id: 1, type: "intro", title: "Şef Olalım! 👨‍🍳", content: "Mutfakta şef sensin! Bu derste Fransızca emir kipini (L'Impératif) en ince detayına kadar öğreneceğiz. Kurallar başta karışık gelebilir ama aslında çok mantıklı.", tip: "KURAL 1: Cümlede Tu, Nous, Vous kelimeleri ASLA yazılmaz! Sadece fiil söylenir." },
        {
            id: 2, type: "grammar", title: "1. Kime Emir Verilir? 🎯",
            rules: [
                { rule: "Hedef Kitle", explanation: "Kendine veya 3. şahıslara (O/Onlar) emir veremezsin. Sadece karşındakilere emir verirsin.", examples: [] },
                { rule: "TU (Sen)", explanation: "Samimi emir. (Yap, Gel, Git)", examples: ["Fais!", "Viens!", "Va!"] },
                { rule: "NOUS (Biz)", explanation: "Öneri/Gaz verme. (Yapalım, Gidelim - Let's go mantığı)", examples: ["Faisons!", "Allons-y!"] },
                { rule: "VOUS (Siz)", explanation: "Resmi veya Çoğul emir. (Yapınız, Gelin, Lütfen yapın)", examples: ["Faites!", "Venez!"] }
            ]
        },
        {
            id: 3, type: "grammar", title: "2. Altın Kural: Makas! ✂️",
            rules: [
                { rule: "Tuzak Uyarısı 🚨", explanation: "Şimdiki zamanda (Présent) 'Tu' çekimlerinde normalde hep '-S' vardır (Tu parles).", examples: [] },
                { rule: "Kural", explanation: "Emir Kipinde, eğer fiil **-ER** ile bitiyorsa (Parler, Manger) sondaki **-S** harfini makasla kesip atıyoruz!", examples: ["Tu manges → **Mange!** (S yok!)", "Tu parles → **Parle!** (S yok!)"] },
                { rule: "Dikkat", explanation: "Diğer fiillerde (Finir, Prendre, Faire...) sondaki **-S kalır!**", examples: ["Finis! (Bitir!) - S duruyor.", "Prends! (Al!) - S duruyor."] }
            ]
        },
        {
            id: 4, type: "table", title: "3. Çekim Tablosu 📊",
            content: "Üç farklı fiil grubunun (Düzenli -ER, Düzenli -IR ve Düzensiz) çekimi:",
            headers: ["Kişi", "PARLER (-ER)", "FINIR (-IR)", "FAIRE (Düzensiz)"],
            rows: [
                ["Sen (Tu)", "**Parle!** (Konuş!)", "**Finis!** (Bitir!)", "**Fais!** (Yap!)"],
                ["Biz (Nous)", "**Parlons!** (Konuşalım!)", "**Finissons!** (Bitirelim!)", "**Faisons!** (Yapalım!)"],
                ["Siz (Vous)", "**Parlez!** (Konuşun!)", "**Finissez!** (Bitirin!)", "**Faites!** (Yapın!)"]
            ],
            note: "Parler fiilinde -S düşmüştür, diğerlerinde durmaktadır!"
        },
        {
            id: 5, type: "table", title: "4. VIP Fiiller (Düzensizler) 👑",
            content: "Bu 3 fiil kural tanımaz. Şimdiki zamanla alakaları yoktur, ezber şart!",
            headers: ["Fiil", "Sen (Tu)", "Biz (Nous)", "Siz (Vous)"],
            rows: [
                ["**ÊTRE** (Olmak)", "**Sois!** (Ol)", "**Soyons!** (Olalım)", "**Soyez!** (Olun)"],
                ["**AVOIR** (Sahip Olmak)", "**Aie!** (Sahip ol)", "**Ayons!** (Sahip olalım)", "**Ayez!** (Sahip olun)"],
                ["**SAVOIR** (Bilmek)", "**Sache!** (Bil)", "**Sachons!** (Bilelim)", "**Sachez!** (Bilin)"]
            ]
        },
        {
            id: 6, type: "grammar", title: "5. Dönüşlü ve Olumsuz 🪞⛔",
            rules: [
                { rule: "Dönüşlü Fiiller (Tire Kuralı)", explanation: "Zamir fiilin arkasına geçer ve araya **Tire (-)** girer. 'Te', 'Toi'ya dönüşür!", examples: ["Tu te lèves → **Lève-toi!** (Kalk!)", "Nous nous dépêchons → **Dépêchons-nous!**"] },
                { rule: "Olumsuz Emir (Sandviç)", explanation: "'Ne...Pas' fiili sarar. Zamir tekrar öne geçer ve tire kalkar!", examples: ["Ne touche pas! (Dokunma!)", "Ne te lève pas! (Kalkma!)"] },
                { rule: "İpucu", explanation: "Gitme! (Aller) → **N'va pas!** (-S yine yok!)", examples: [] }
            ]
        },
        { id: 7, type: "summary", title: "Özet 📝", points: ["Tu, Nous, Vous'ya emir verilir", "-ER fiillerinde -S düşer (Makas Kuralı)", "Être, Avoir, Savoir tamamen düzensizdir", "Emirde zamir sona, olumsuzda başa geçer"], cta: "Şimdi mutfağa girme zamanı!" }
    ]
};

// ===== Üniteler 341-360 =====
const unit341Lecture: UnitLecture = { unitId: 341, title: "Alışveriş", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Karşılaştırma 📊", content: "Plus... que, Moins... que, Aussi... que", tip: "Comparatif" }, { id: 2, type: "summary", title: "Özet", points: ["Plus = Daha fazla", "Moins = Daha az"], cta: "Pratik!" }] };
const unit342Lecture: UnitLecture = { unitId: 342, title: "Kıyafet", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "İşaret Sıfatları 👉", content: "Ce, Cette, Ces", tip: "Demonstratifs" }, { id: 2, type: "summary", title: "Özet", points: ["Ce = Erkek", "Cette = Dişi", "Ces = Çoğul"], cta: "Pratik!" }] };
const unit343Lecture: UnitLecture = { unitId: 343, title: "Ev İşleri", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Venir de ⏱️", content: "Az önce yapılan eylemler", tip: "Passé récent" }, { id: 2, type: "summary", title: "Özet", points: ["Venir de + Mastar = Az önce"], cta: "Pratik!" }] };
const unit344Lecture: UnitLecture = { unitId: 344, title: "Haberler", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Imparfait 📰", content: "Sürekli geçmiş", tip: "Alışkanlıklar" }, { id: 2, type: "summary", title: "Özet", points: ["Nous kökü + -ais, -ait..."], cta: "Pratik!" }] };
const unit345Lecture: UnitLecture = { unitId: 345, title: "TV", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "QUI ve QUE 🔗", content: "İlgi zamirleri", tip: "Relative pronouns" }, { id: 2, type: "summary", title: "Özet", points: ["QUI = özne", "QUE = nesne"], cta: "Pratik!" }] };
const unit346Lecture: UnitLecture = { unitId: 346, title: "Sinema", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Superlatif 🏆", content: "En iyi/kötü", tip: "Le plus, Le moins" }, { id: 2, type: "summary", title: "Özet", points: ["Le/La plus + sıfat"], cta: "Pratik!" }] };
const unit347Lecture: UnitLecture = { unitId: 347, title: "Müzik", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "DEPUIS ⏳", content: "...den beri", tip: "Devam eden eylemler" }, { id: 2, type: "summary", title: "Özet", points: ["Depuis + süre = Şimdiki zaman"], cta: "Pratik!" }] };
const unit348Lecture: UnitLecture = { unitId: 348, title: "Spor", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "FAIRE / JOUER 🏃", content: "Spor yapmak", tip: "du, au ayrımı" }, { id: 2, type: "summary", title: "Özet", points: ["Faire DU = aktivite", "Jouer AU = top"], cta: "Pratik!" }] };
const unit349Lecture: UnitLecture = { unitId: 349, title: "Doğa", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Y ve EN 📍", content: "Yer zamirleri", tip: "à/de + yer" }, { id: 2, type: "summary", title: "Özet", points: ["Y = orada (à + yer)", "EN = oradan (de + yer)"], cta: "Pratik!" }] };
const unit350Lecture: UnitLecture = { unitId: 350, title: "Buluşma", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Teklif 💬", content: "Ça te dit de...?", tip: "Proposer" }, { id: 2, type: "summary", title: "Özet", points: ["On pourrait...", "Si on allait...?"], cta: "Pratik!" }] };
const unit351Lecture: UnitLecture = {
    unitId: 351, title: "Telefon Görüşmesi", language: "Fransızca", level: "A2",
    videoUrl: "https://youtu.be/wtbJKBKTpPA",
    slides: [
        { id: 1, type: "intro", title: "Telefon İpuçları 📞", content: "Bu derste telefonda nasıl profesyonelce konuşacağımızı, kendimizi tanıtmayı ve birini telefona istemeyi öğreneceğiz.", tip: "Telefonda 'Je suis' yerine 'C'est' kullanılır!" },
        { id: 2, type: "vocabulary", title: "Temel Terimler 📱", content: "• Allô = Alo (Sadece telefonda!)\\n• Le portable = Cep telefonu\\n• Le réseau = Şebeke\\n• La messagerie = Sesli posta" },
        {
            id: 3, type: "grammar", title: "Birini İsteme Kalıpları 🗣️", rules: [
                { rule: "Je voudrais parler à...", explanation: "...ile görüşmek istiyorum (Kibar)", examples: ["Je voudrais parler à M. Dupont"] },
                { rule: "Est-ce que... est là?", explanation: "...orada mı? (Standart)", examples: ["Est-ce que Marie est là?"] }
            ]
        },
        {
            id: 4, type: "grammar", title: "Bekletme ve Aktarma ⏳", rules: [
                { rule: "Ne quittez pas", explanation: "Hatta kalın / Ayrılmayın", examples: ["Ne quittez pas, s'il vous plaît"] },
                { rule: "Je vous le passe", explanation: "Sizi ona bağlıyorum", examples: ["Un instant, je vous le passe"] }
            ]
        },
        { id: 5, type: "vocabulary", title: "Sorun Çözme ⚠️", content: "Hat kötü olduğunda:\\n• Je vous entends mal (Sizi kötü duyuyorum)\\n• Ça coupe (Ses kesiliyor)\\n• Pouvez-vous répéter? (Tekrar edebilir misiniz?)" },
        { id: 6, type: "summary", title: "Özet 📝", points: ["Kendini tanıt: C'est [İsim]", "İste: Je voudrais parler à...", "Beklet: Ne quittez pas", "Sorun: Ça coupe"], cta: "Şimdi arama yapalım!" }
    ]
};
const unit352Lecture: UnitLecture = { unitId: 352, title: "Davet", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Davet 🎉", content: "Je t'invite à...", tip: "Inviter" }, { id: 2, type: "summary", title: "Özet", points: ["Tu es libre...?", "Avec plaisir!"], cta: "Pratik!" }] };
const unit353Lecture: UnitLecture = { unitId: 353, title: "Özür", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Özür 😔", content: "Je suis désolé(e)", tip: "S'excuser" }, { id: 2, type: "summary", title: "Özet", points: ["J'ai un empêchement", "Ce n'est pas grave"], cta: "Pratik!" }] };
const unit354Lecture: UnitLecture = { unitId: 354, title: "Yol Tarifi", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Yönler 🗺️", content: "Tournez à gauche", tip: "Directions" }, { id: 2, type: "summary", title: "Özet", points: ["Tout droit = Düz", "À côté de = Yanında"], cta: "Pratik!" }] };
const unit355Lecture: UnitLecture = { unitId: 355, title: "Şehir", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Tanıtım 🏛️", content: "C'est une ville qui...", tip: "Describing places" }, { id: 2, type: "summary", title: "Özet", points: ["Il y a beaucoup de...", "Célèbre pour..."], cta: "Pratik!" }] };
const unit356Lecture: UnitLecture = { unitId: 356, title: "Kültür", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Farklar 🌍", content: "En France, on...", tip: "Karşılaştırma" }, { id: 2, type: "summary", title: "Özet", points: ["Contrairement à...", "Par rapport à..."], cta: "Pratik!" }] };
const unit357Lecture: UnitLecture = { unitId: 357, title: "Eğitim", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Okul 🎓", content: "Faire des études", tip: "Eğitim terimleri" }, { id: 2, type: "summary", title: "Özet", points: ["Passer un examen", "Réussir/Échouer"], cta: "Pratik!" }] };
const unit358Lecture: UnitLecture = { unitId: 358, title: "İş", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Kariyer 💼", content: "Chercher un emploi", tip: "İş terimleri" }, { id: 2, type: "summary", title: "Özet", points: ["Postuler", "Entretien"], cta: "Pratik!" }] };
const unit359Lecture: UnitLecture = {
    unitId: 359,
    title: "Teknoloji Kullanımı",
    language: "Fransızca",
    level: "A2",
    videoUrl: "https://youtu.be/SjN75q5e3aM",
    slides: [
        { id: 1, type: "intro", title: "Dijital Dünya 💻", content: "Bu derste teknoloji kullanırken ihtiyacın olan tüm Fransızca ifadeleri öğreneceksin! Bilgisayar, telefon, internet ve Wi-Fi sorunlarıyla ilgili konuşmayı öğreneceksin.", tip: "L'ordinateur = Bilgisayar, Le portable = Telefon" },
        { id: 2, type: "vocabulary", title: "Donanım Kelimeleri 🖥️", content: "• L'ordinateur (Bilgisayar)\\n• L'écran (Ekran)\\n• La souris (Mouse)\\n• Le clavier (Klavye)\\n• L'imprimante (Yazıcı)\\n• La tablette (Tablet)" },
        { id: 3, type: "vocabulary", title: "İnternet Terimleri 🌐", content: "• Le site web (Web sitesi)\\n• L'e-mail (E-posta)\\n• Le mot de passe (Şifre)\\n• Le fichier (Dosya)\\n• Le lien (Link)\\n• L'application (Uygulama)" },
        {
            id: 4, type: "grammar", title: "Allumer vs Éteindre ⚡", rules: [
                { rule: "Allumer", explanation: "Açmak (elektrik)", examples: ["J'allume l'ordinateur", "Allume la lumière!"] },
                { rule: "Éteindre", explanation: "Kapatmak (söndürmek)", examples: ["Éteins l'écran", "Éteignez votre portable!"] }
            ]
        },
        {
            id: 5, type: "grammar", title: "Sur vs En 📍", rules: [
                { rule: "Sur", explanation: "Fiziksel/dijital yüzey", examples: ["Je suis sur internet", "Clique sur le bouton"] },
                { rule: "En", explanation: "Durum/mod (halinde)", examples: ["Je suis en ligne", "En panne (bozuk)"] }
            ]
        },
        { id: 6, type: "vocabulary", title: "Hayat Kurtaran Kalıplar 🆘", content: "• Ça ne marche pas! (Bu çalışmıyor!)\\n• Ma batterie est vide. (Şarjım bitti.)\\n• Je n'ai pas de connexion. (Bağlantım yok.)\\n• Quel est le mot de passe du wifi? (Wi-Fi şifresi ne?)" },
        { id: 7, type: "summary", title: "Özet 📝", points: ["Donanım: ordinateur, écran, souris...", "Fiiller: Allumer/Éteindre, Télécharger, Sauvegarder", "Edatlar: Sur internet, En ligne", "Sorun: Ça ne marche pas!"], cta: "Şimdi teknoloji pratiği yap!" }
    ]
};
const unit360Lecture: UnitLecture = { unitId: 360, title: "A2 Final", language: "Fransızca", level: "A2", slides: [{ id: 1, type: "intro", title: "Tebrikler! 🎉", content: "A2 seviyesini tamamladınız!", tip: "Devam edin!" }, { id: 2, type: "summary", title: "Özet", points: ["Passé Composé ✓", "Futur Proche ✓", "Imparfait ✓"], cta: "B1'e geçin!" }] };

// Export
export const frenchA2Lectures: UnitLecture[] = [
    unit331Lecture, unit332Lecture, unit333Lecture, unit334Lecture, unit335Lecture,
    unit336Lecture, unit337Lecture, unit338Lecture, unit339Lecture, unit340Lecture,
    unit341Lecture, unit342Lecture, unit343Lecture, unit344Lecture, unit345Lecture,
    unit346Lecture, unit347Lecture, unit348Lecture, unit349Lecture, unit350Lecture,
    unit351Lecture, unit352Lecture, unit353Lecture, unit354Lecture, unit355Lecture,
    unit356Lecture, unit357Lecture, unit358Lecture, unit359Lecture, unit360Lecture
];

export function getFrenchA2LectureForUnit(unitId: number): UnitLecture | undefined {
    return frenchA2Lectures.find(l => l.unitId === unitId);
}
