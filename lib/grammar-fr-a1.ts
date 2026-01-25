
import { UnitGrammar } from './grammar';

// ===== ÜNİTE 301: MERHABA (Selamlaşma ve Tanışma) =====
const unit301Grammar: UnitGrammar = {
    unitId: 301,
    title: "Selamlaşma ve Tanışma",
    rules: [
        {
            id: "fr-a1-greetings-formal",
            title: "👋 Bölüm 1: Selamlaşma (Les Salutations)",
            explanation: "Fransızcada 'Merhaba' demenin **saati** ve **samimiyet derecesi** vardır.\n\n**A. Resmi ve Genel (Her Zaman Güvenli)**\n\n* **Bonjour** (Okunuş: Bonjur) → 'İyi günler / Merhaba'\n  - Sabah kalktığından akşam 18:00 civarına kadar kullanılır.\n  - ⚠️ **Kritik:** Bir kişiye günde SADECE BİR KERE 'Bonjour' denir! İkinci kez dersen bozulabilirler. İkinci görüşmede **Re-bonjour** de.\n\n* **Bonsoir** (Okunuş: Bonsuvar) → 'İyi akşamlar'\n  - Akşam hava kararmaya başladığında veya 18:00'den sonra 'Bonjour' ölür, 'Bonsoir' başlar.\n\n**B. Samimi (Arkadaşlar Arası)**\n\n* **Salut** (Okunuş: Salyu) → 'Selam / Naber / Bay bay'\n  - ⚠️ Sonundaki T okunmaz!\n  - İspanyolcadaki 'Hola' gibidir ama aynı zamanda 'Güle güle' anlamında da kullanılır.\n  - Sadece arkadaşlarına ve yaşıtlarına söyle. Patronuna sakın deme!\n\n* **Coucou** (Okunuş: Kuku) → 'Cee-eee / Selam'\n  - Çok samimidir. Genelde kız arkadaşlar arasında, çocuklara veya sevgiliye söylenir.",
            examples: [
                { fr: "Bonjour, Monsieur.", tr: "İyi günler, Beyefendi." },
                { fr: "Bonsoir, Madame.", tr: "İyi akşamlar, Hanımefendi." },
                { fr: "Salut, ça va?", tr: "Selam, naber?" },
                { fr: "Re-bonjour!", tr: "Tekrar merhaba!" },
                { fr: "Coucou!", tr: "Selaam! (çok samimi)" }
            ]
        },
        {
            id: "fr-a1-farewell",
            title: "🚶‍♂️ Bölüm 2: Vedalaşma (Prendre Congé)",
            explanation: "Vedalaşma ifadeleri:\n\n* **Au revoir** (Okunuş: O rıvuar) → 'Görüşmek üzere / Hoşça kal' (En standart veda)\n\n* **Bonne nuit** (Okunuş: Bon nüi) → 'İyi geceler'\n  - ⚠️ Sadece uyumaya giderken veya gecenin sonunda ayrılırken söylenir. Akşam selamlaşması DEĞİLDİR!\n\n* **À bientôt** (Okunuş: A biento) → 'Yakında görüşürüz'\n\n* **À demain** (Okunuş: A dömen) → 'Yarın görüşürüz'\n\n* **À plus tard** (Okunuş: A plü tar) → 'Sonra görüşürüz'",
            examples: [
                { fr: "Au revoir, à bientôt!", tr: "Hoşça kal, yakında görüşürüz!" },
                { fr: "Bonne nuit, dors bien.", tr: "İyi geceler, iyi uyu." },
                { fr: "À demain!", tr: "Yarın görüşürüz!" }
            ]
        },
        {
            id: "fr-a1-ca-va",
            title: "🗣️ Bölüm 3: 'Nasılsın?' (Demander comment ça va)",
            explanation: "Fransızcanın en sihirli kelimesi: **ÇA VA**. Bu kelime hem soru hem cevaptır. Tonlaman her şeyi değiştirir.\n\n**A. Resmi Soru (Vous - Siz)**\n* **Comment allez-vous ?** (Okunuş: Koman tale vu?) → Tanımadığın kişilere, yaşlılara, üstlerine.\n\n**B. Samimi Soru (Tu - Sen)**\n* **Comment vas-tu ?** (Okunuş: Koman va tü?) → 'Tü' derken dudaklarını büzüp ince bir 'ü' çıkaracaksın.\n\n**C. Sokak Ağzı (Joker)**\n* **Ça va ?** (Okunuş: Sa va?) → 'Gidiyor mu? / İyi misin?' Herkesle, her yerde kullanılabilir.\n\n**Cevaplar:**\n* **Ça va très bien.** → Çok iyiyim.\n* **Ça va bien.** → İyiyim.\n* **Comme ci, comme ça.** (Okunuş: Komsi komsa) → Şöyle böyle / Eh işte.\n* **Pas mal.** → Fena değil.",
            examples: [
                { fr: "Comment allez-vous ?", tr: "Nasılsınız? (resmi)" },
                { fr: "Comment vas-tu ?", tr: "Nasılsın? (samimi)" },
                { fr: "Ça va ? - Ça va bien, merci.", tr: "Naber? - İyiyim, teşekkürler." },
                { fr: "Comme ci, comme ça.", tr: "Şöyle böyle." }
            ]
        },
        {
            id: "fr-a1-introduction",
            title: "🤝 Bölüm 4: Tanışma (Se Présenter)",
            explanation: "Adını söylerken İspanyolcadaki 'Me llamo' (Bana denir ki...) yapısının aynısını kullanacağız.\n\n**Adını Söylemek:**\n* **Je m'appelle...** (Okunuş: Jö mapel...) → 'Benim adım...'\n\n**Memnun Oldum:**\n* **Enchanté** (Okunuş: Anşante) → Erkekler için\n* **Enchantée** → Kadınlar için (yazımda fazladan 'e', okunuş aynı)\n\n**Nerelisin:**\n* **Je suis de...** → '...liyim / ...danım'\n* **Je viens de...** → '...den geliyorum'",
            examples: [
                { fr: "Je m'appelle Marie.", tr: "Benim adım Marie." },
                { fr: "Enchanté de vous rencontrer.", tr: "Tanıştığımıza memnun oldum." },
                { fr: "Je suis de Turquie.", tr: "Türkiye'denim." },
                { fr: "Je viens de Paris.", tr: "Paris'ten geliyorum." }
            ]
        },
        {
            id: "fr-a1-et-toi-vous",
            title: "⚡ Bölüm 5: 'Ve Sen?' / 'Ve Siz?' (Les Pronoms Toniques)",
            explanation: "İspanyolcada 'Y tú?' / 'Y usted?' diyorduk. Fransızcada gramer burada biraz değişiyor.\n\n**Vurgulu Zamirler** devreye girer:\nNormalde 'Ben = Je', 'Sen = Tu' demektir. AMA; 'Ve sen?' gibi kısa sorularda veya vurgu yaparken 'Tu' kullanılmaz! **Toi** kullanılır.\n\n**1. Gayriresmi (Arkadaşça):**\n* **Et toi ?** (Okunuş: E tua?) → 'Ya sen?'\n* 'Tu' diye hitap ettiğin herkese bunu sorabilirsin.\n\n**2. Resmi (Kibar):**\n* **Et vous ?** (Okunuş: E vu?) → 'Ya siz?'\n* 'Vous' diye hitap ettiğin kişilere veya birden fazla kişiye sorarken kullanılır.\n\n⚠️ **Özet Kural:** Karşındakine 'Siz' diyorsan 'Et vous?', 'Sen' diyorsan 'Et toi?'. İkisini sakın karıştırma, Fransızlar buna çok takılır!",
            examples: [
                { fr: "Ça va bien, merci. Et toi?", tr: "İyiyim, teşekkürler. Ya sen?" },
                { fr: "Je vais bien, merci. Et vous?", tr: "İyiyim, teşekkürler. Ya siz?" },
                { fr: "Salut Pierre! Ça va? - Salut! Ça va bien. Et toi?", tr: "Selam Pierre! Naber? - Selam! İyidir. Ya sen?" },
                { fr: "Bonjour Monsieur. Comment allez-vous? - Je vais très bien, merci. Et vous?", tr: "Merhaba Beyefendi. Nasılsınız? - Çok iyiyim, teşekkürler. Ya siz?" }
            ]
        }
    ]
};


// ===== ÜNİTE 302: ALFABE VE SESLER =====
const unit302Grammar: UnitGrammar = {
    unitId: 302,
    title: "Aksanlar ve Ulama",
    rules: [
        {
            id: "fr-a1-accent-aigu",
            title: "🎩 L'Accent Aigu (´) - Kapalı E 😬",
            explanation: "Yönü sağa yatık. Dudaklar gergin, hafif gülümser gibi. İngilizcedeki 'Hey' kelimesindeki 'ey' sesi gibi ama 'y'yi atarsın. Kısa ve keskin bir E.\n\n* **Café** (Kafé) → Ağzı yayarak\n* **École** (Ekol) → Okul\n* **Étudiant** (Etüdyan) → Öğrenci",
            examples: [
                { fr: "Café", tr: "Kafe (Kafé - ağzı yayarak)" },
                { fr: "École", tr: "Okul (Ekol)" },
                { fr: "Étudiant", tr: "Öğrenci (Etüdyan)" }
            ]
        },
        {
            id: "fr-a1-accent-grave",
            title: "😮 L'Accent Grave (`) - Açık E",
            explanation: "Yönü sola yatık. Çene aşağı düşer, ağız açılır. Türkçedeki 'Ben', 'Sen' derkenki rahat, geniş E sesi.\n\n**A/U Üzerindeki Grave:** Bu aksan bazen A ve U harflerine de gelir (à, où). Burada sesi değiştirmez, sadece anlamı ayırır:\n* a (sahip) vs à (-e hali)\n* ou (veya) vs où (nerede)",
            examples: [
                { fr: "Mère", tr: "Anne (Meeer - E'yi açarak)" },
                { fr: "Père", tr: "Baba (Peeer)" },
                { fr: "Très", tr: "Çok (Tre)" }
            ]
        },
        {
            id: "fr-a1-accent-circonflexe",
            title: "🏚️ L'Accent Circonflexe (^) - Şapka",
            explanation: "Çatı şeklinde. Genellikle harfin sesini biraz uzatır veya kalınlaştırır.\n\n**🔮 Polyglot Sırrı:** Şapkalı bir harf görürsen bil ki tarihte o harfin yanında bir 'S' harfi vardı ve zamanla düştü!\n* Hôpital → Hospital (S düştü, O'ya şapka)\n* Forêt → Forest (S düştü, E'ye şapka)\n* Fête → Feast (Parti/Bayram)",
            examples: [
                { fr: "Hôpital", tr: "Hastane (Hospital → S düştü)" },
                { fr: "Forêt", tr: "Orman (Forest → S düştü)" },
                { fr: "Fête", tr: "Parti/Bayram (Feast → S düştü)" }
            ]
        },
        {
            id: "fr-a1-cedille-trema",
            title: "📝 La Cédille (ç) ve Le Tréma (ë)",
            explanation: "**La Cédille (ç):** Çengel. Sadece C harfinin altına gelir. Sert C'yi (K sesi), S sesine çevirir. Türkçedeki Ç ile alakası yoktur!\n* Garçon → Garson okunur (Çengel olmasa 'Garkon' olurdu)\n\n**Le Tréma (ë, ï):** İki nokta. 'Beni yanımdaki harfle birleştirme, ayrı oku' demektir.\n* Noël → No-el diye ayrı okunur (Nokta olmasa 'Nöl' gibi okunurdu)",
            examples: [
                { fr: "Garçon", tr: "Garson (C → S sesi)" },
                { fr: "Noël", tr: "Noel (No-el, ayrı okunur)" }
            ]
        },
        {
            id: "fr-a1-liaison",
            title: "🔗 Ulama (La Liaison)",
            explanation: "Kelimer birbirine yapışır. Eğer bir kelime OKUNMAYAN BİR SESSİZ ile bitiyor ve sonraki kelime SESLİ ile başlıyorsa, bu iki kelime birleşir.\n\n**S → Z Olur:** Les amis → Le-za-mi (S, Z'ye dönüştü)\n**T Canlanır:** C'est un chat → Se-tun şa (T uyandı)\n**N Bağlar:** Un ami → U-na-mi",
            examples: [
                { fr: "Les amis", tr: "Le-za-mi (Arkadaşlar)" },
                { fr: "C'est un chat", tr: "Se-tun şa (Bu bir kedi)" },
                { fr: "Mon amour", tr: "Mo-na-mur (Aşkım)" }
            ]
        }
    ]
};


// ===== ÜNİTE 303: SAYILAR (0-20) =====
const unit303Grammar: UnitGrammar = {
    unitId: 303,
    title: "Sayılar 0-20",
    rules: [
        {
            id: "fr-a1-numbers-0-10",
            title: "🧱 Temel Rakamlar (0-10)",
            explanation: "En büyük düşman telaffuz! Dudakları büzmek gerekiyor.\n\n* **0 Zéro** → Zero\n* **1 Un** → Ön (Genizden)\n* **2 Deux** → Dö (Sondaki X yok!)\n* **3 Trois** → Trua (S okunmaz)\n* **4 Quatre** → Katr\n* **5 Cinq** → Senk\n* **6 Six** → Sis\n* **7 Sept** → Set (⚠️ P okunmaz!)\n* **8 Huit** → Vit\n* **9 Neuf** → Nöf\n* **10 Dix** → Dis",
            examples: [
                { fr: "Sept", tr: "Set (P harfi okunmaz!)" },
                { fr: "Huit", tr: "Vit (H okunmaz)" },
                { fr: "Deux", tr: "Dö (X okunmaz)" }
            ]
        },
        {
            id: "fr-a1-numbers-11-16",
            title: "🐝 'Z' Takımı (11-16)",
            explanation: "İspanyolcadaki -ce grubu gibi, Fransızcada **-ZE** ile biten grup:\n\n* **11 Onze** → Onz\n* **12 Douze** → Duz\n* **13 Treize** → Trez\n* **14 Quatorze** → Katorz\n* **15 Quinze** → Kenz\n* **16 Seize** → Sez (Son özel kelime!)\n\n💡 **Kritik:** 16 (Seize) özel kelimesi olan son sayı. Fransızcada 17'de toplama başlar!",
            examples: [
                { fr: "Onze", tr: "On bir (Onz)" },
                { fr: "Quinze", tr: "On beş (Kenz)" },
                { fr: "Seize", tr: "On altı (Sez - son özel!)" }
            ]
        },
        {
            id: "fr-a1-numbers-17-20",
            title: "➕ Toplama İşlemi (17-20)",
            explanation: "17'den sonra '10 + X' formülü başlar. Araya tire (-) konur!\n\n* **17 Dix-sept** → Dis-set\n* **18 Dix-huit** → Diz-vit (⚠️ X → Z, Liaison!)\n* **19 Dix-neuf** → Diz-nöf\n* **20 Vingt** → Van (G ve T okunmaz!)\n\n🧠 **Parmakla Saymak:** Fransızlar baş parmakla başlar! İşaret parmağıyla 1 yapma!",
            examples: [
                { fr: "Dix-huit", tr: "Diz-vit (X, Z oldu - Liaison)" },
                { fr: "Vingt", tr: "Van (G ve T yok!)" }
            ]
        }
    ]
};

// ===== ÜNİTE 304: RENKLER VE SIFAT UYUMU =====
const unit304Grammar: UnitGrammar = {
    unitId: 304,
    title: "Renkler ve Cinsiyet Uyumu",
    rules: [
        {
            id: "fr-a1-colors-standard",
            title: "🟢🔵⚫ Grup 1: Standart Olanlar (+E Alanlar)",
            explanation: "Bu renklerin Erkek (Masculin) hali sessiz harfle biter ama o harf OKUNMAZ. Dişi (Féminin) yapmak için sonuna -E eklediğinde, o sessiz harf OKUNUR hale gelir.\n\n**Kural:** Dişi = Erkek + e\n\n* **Vert** (Ver) → **Verte** (Vert - T patlar!)\n* **Gris** (Gri) → **Grise** (Griz - S, Z olur)\n* **Bleu** (Blö) → **Bleue** (Blö - ses değişmez)\n* **Noir** (Nuar) → **Noire** (Nuar - ses değişmez)",
            examples: [
                { fr: "Un stylo vert", tr: "Yeşil bir kalem (T okunmaz: Ver)" },
                { fr: "Une pomme verte", tr: "Yeşil bir elma (T okunur: Vert)" },
                { fr: "Un chat gris / Une souris grise", tr: "Gri kedi / Gri fare" }
            ]
        },
        {
            id: "fr-a1-colors-invariable",
            title: "🔴🟡🟠 Grup 2: Doğuştan 'E'li Olanlar (Değişmezler)",
            explanation: "Bu renkler zaten -E harfiyle biter. Erkek veya dişi olması fark etmez, yazılışları AYNI KALIR.\n\n* **Rouge** (Ruj) → Kırmızı\n* **Jaune** (Jon) → Sarı\n* **Rose** (Roz) → Pembe\n* **Orange** (Oranj) → Turuncu",
            examples: [
                { fr: "Un livre rouge / Une voiture rouge", tr: "Kırmızı kitap / Kırmızı araba (Değişmez!)" },
                { fr: "Le soleil jaune", tr: "Sarı güneş" }
            ]
        },
        {
            id: "fr-a1-colors-irregular",
            title: "⚪🟣 Grup 3: Düzensizler (Asiler)",
            explanation: "Bunlar kural tanımaz. Dişi halleri tamamen değişir!\n\n* **Blanc** (Blan) → **Blanche** (Blanş) - Beyaz\n* **Violet** (Viole) → **Violette** (Viyolet) - Mor",
            examples: [
                { fr: "Un chat blanc / Une souris blanche", tr: "Beyaz kedi / Beyaz fare" },
                { fr: "Un livre violet / Une fleur violette", tr: "Mor kitap / Mor çiçek" }
            ]
        },
        {
            id: "fr-a1-colors-plural",
            title: "⚖️ Çoğul Yapmak + Marron/Orange İstisnası",
            explanation: "İsim çoğulsa renk de çoğul olmalı. Sonuna -S ekle.\n\n**Müjde:** Bu S harfi ASLA OKUNMAZ!\n* Les livres verts → Okunuş: Ver (S yok!)\n\n🌰🍊 **Marron ve Orange:** Bunlar meyve ismi olduğu için ASLA DEĞİŞMEZ! Ne -e alır, ne -s alır.\n* Des chaussures marron ✓ (marrons DEME!)",
            examples: [
                { fr: "Les livres verts", tr: "Yeşil kitaplar (S okunmaz!)" },
                { fr: "Des chaussures marron", tr: "Kahverengi ayakkabılar (Değişmez!)" }
            ]
        }
    ]
};

// ===== ÜNİTE 305: AİLE VE İYELİK SIFATLARI =====
const unit305Grammar: UnitGrammar = {
    unitId: 305,
    title: "İyelik Sıfatları (Benim, Senin...)",
    rules: [
        {
            id: "fr-a1-possessives-singular",
            title: "📋 Tekil Sahipler: M - T - S Kuralı",
            explanation: "**Tekil sahipler için:** Mon/Ton/Son kuralı işler.\n\n🙋 **JE (Ben):**\n• Mon père (Babam) - Erkek\n• Ma mère (Annem) - Dişi\n• Mes parents (Ailem) - Çoğul\n\n🙋‍♂️ **TU (Sen):**\n• Ton père (Baban) - Erkek\n• Ta mère (Annen) - Dişi\n• Tes parents (Ailen) - Çoğul\n\n🙋‍♀️ **IL/ELLE (O):**\n• Son père (Onun babası) - Erkek\n• Sa mère (Onun annesi) - Dişi\n• Ses parents (Onun ailesi) - Çoğul\n\n🎉 **Çoğulda cinsiyet farkı yok!** Mes livres / Mes tables - ikisi de MES!",
            examples: [
                { fr: "Mon père, ma mère, mes frères", tr: "Babam, annem, kardeşlerim" },
                { fr: "Ton livre, ta voiture, tes amis", tr: "Kitabın, araban, arkadaşların" },
                { fr: "Ses parents", tr: "Onun ebeveynleri (Erkek/Dişi, fark etmez!)" }
            ]
        },
        {
            id: "fr-a1-possessives-trap",
            title: "🚨 Kritik Tuzak: 'Onun' (Son/Sa) 💣",
            explanation: "İngilizcede 'His car' / 'Her car' ayrımı var. **Fransızcada YOKTUR!**\n\nSON veya SA seçimi, **SAHİBİNE GÖRE DEĞİL, NESNEYE GÖRE** yapılır.\n\n* Ali'nin annesi → **Sa** mère (Anne dişi)\n* Ayşe'nin annesi → **Sa** mère (Yine aynı!)\n* Ayşe'nin babası → **Son** père (Baba erkek)",
            examples: [
                { fr: "Sa mère (Ali / Ayşe fark etmez)", tr: "Onun annesi" },
                { fr: "Son père (erkek/kadın fark etmez)", tr: "Onun babası" }
            ]
        },
        {
            id: "fr-a1-possessives-liaison",
            title: "💎 Altın Kural: Sesli Harf İstisnası",
            explanation: "Nesne **DİŞİ** olsa bile, **SESLİ HARFLE** başlıyorsa 'Ma/Ta/Sa' diyemezsin! Ses takılır.\n\n**Geçici olarak ERKEK takısı kullanılır:**\n* ~~Ma amie~~ ❌ → **Mon** amie ✓ (Mo-na-mi)\n* ~~Ma école~~ ❌ → **Mon** école ✓\n* ~~Sa histoire~~ ❌ → **Son** histoire ✓",
            examples: [
                { fr: "Mon amie (Dişi ama Mon!)", tr: "Kız arkadaşım" },
                { fr: "Mon école", tr: "Okulum (Dişi ama sesli harfle başlıyor)" }
            ]
        },
        {
            id: "fr-a1-possessives-plural",
            title: "👨‍👩‍👧‍👦 Çoğul Sahipler: Notre, Votre, Leur",
            explanation: "Bu kısım çok kolay! Cinsiyet ayrımı (Erkek/Dişi) **kalkar**.\n\n👫 **NOUS (Biz):**\n• Notre maison (Evimiz) - Tekil\n• Nos maisons (Evlerimiz) - Çoğul\n\n👬 **VOUS (Siz):**\n• Votre maison (Eviniz) - Tekil\n• Vos maisons (Evleriniz) - Çoğul\n\n👪 **ILS/ELLES (Onlar):**\n• Leur maison (Onların evi) - Tekil\n• Leurs maisons (Onların evleri) - Çoğul\n\n⚠️ **Leur/Leurs** okunuşta aynı! S harfi okunmaz.",
            examples: [
                { fr: "Notre maison / Nos maisons", tr: "Evimiz / Evlerimiz" },
                { fr: "Leur voiture / Leurs voitures", tr: "Onların arabası / arabaları" }
            ]
        }
    ]
};

// ===== ÜNİTE 306: GÜNLER VE AYLAR =====
const unit306Grammar: UnitGrammar = {
    unitId: 306,
    title: "Günler ve Zaman İfadeleri",
    rules: [
        {
            id: "fr-a1-days-week",
            title: "📅 Haftanın Günleri (Les Jours)",
            explanation: "**Dikkat:** Günler küçük harfle yazılır!\n\n* Lundi (Pazartesi) - Lune/Ay\n* Mardi (Salı) - Mars\n* Mercredi (Çarşamba) - Mercure\n* Jeudi (Perşembe) - Jupiter\n* Vendredi (Cuma) - Vénus\n* Samedi (Cumartesi) - Saturne\n* Dimanche (Pazar) - Dominus\n\n🧠 İspanyolca bilen: Lunes → Lundi. Hep **-DI** ile biter!",
            examples: [
                { fr: "Lundi, mardi, mercredi...", tr: "Pazartesi, Salı, Çarşamba..." },
                { fr: "Le week-end", tr: "Hafta sonu" }
            ]
        },
        {
            id: "fr-a1-days-preposition",
            title: "🛑 Kritik Edat Kuralı: LE mi, BOŞ mu?",
            explanation: "**Tek Seferlik** (Bu Pazartesi) → Edat YOK!\n* Je travaille lundi. (Bu Pazartesi çalışıyorum)\n\n**Genelleme** (Her Pazartesi) → **LE** kullan!\n* Je travaille le lundi. (Pazartesileri çalışırım)\n* Le magasin est fermé le dimanche. (Dükkan Pazarları kapalı)",
            examples: [
                { fr: "Lundi, je vais à Paris.", tr: "Pazartesi Paris'e gidiyorum (tek sefer)" },
                { fr: "Le dimanche, je dors.", tr: "Pazarları uyurum (her hafta)" }
            ]
        },
        {
            id: "fr-a1-time-words",
            title: "⏳ Dün, Bugün, Yarın + Edatlar",
            explanation: "**Zamanın Üç Silahşoru:**\n* **Hier** (İyer) → Dün (H okunmaz!)\n* **Aujourd'hui** (O-jur-dui) → Bugün (Kesme işareti var!)\n* **Demain** (Dö-men) → Yarın\n\n**Edatlar:**\n* Saatler → **À** (Je me lève à 8 heures)\n* Aylar/Yıllar → **EN** (en janvier, en 2024)\n* ⚠️ İlkbahar → **AU** printemps",
            examples: [
                { fr: "Hier j'ai travaillé.", tr: "Dün çalıştım." },
                { fr: "À demain !", tr: "Yarın görüşürüz!" },
                { fr: "Mon anniversaire est en janvier.", tr: "Doğum günüm Ocak'ta." }
            ]
        },
        {
            id: "fr-a1-day-parts",
            title: "🌅 Günün Bölümleri",
            explanation: "* **Le matin** → Sabah\n* **L'après-midi** → Öğleden sonra\n* **Le soir** → Akşam\n* **La nuit** → Gece\n\nJe travaille le matin. (Sabahları çalışırım)",
            examples: [
                { fr: "Je travaille le matin.", tr: "Sabahları çalışırım." },
                { fr: "Il sort le soir.", tr: "Akşamları çıkar." }
            ]
        }
    ]
};

// ===== ÜNİTE 307: MILLIYETLER =====
const unit307Grammar: UnitGrammar = {
    unitId: 307,
    title: "Milliyetler (Nerelisin?)",
    rules: [
        {
            id: "fr-a1-nationality-question",
            title: "🗣️ 'Nerelisin?' Soru Kalıpları",
            explanation: "**Samimi (Tu):**\n* D'où viens-tu ? (Nereden geliyorsun?)\n* Tu es d'où ? (Nerelisin?)\n\n**Resmi (Vous):**\n* D'où venez-vous ? (Nereden geliyorsunuz?)\n\n**Cevap:** Je suis... (Ben ...-im)",
            examples: [
                { fr: "D'où viens-tu ?", tr: "Nereden geliyorsun?" },
                { fr: "Je suis de Turquie.", tr: "Türkiye'denim." }
            ]
        },
        {
            id: "fr-a1-nationality-turk",
            title: "🇹🇷 Kritik Vaka: 'TÜRK' Kelimesi",
            explanation: "Bu kelime **düzensizdir**!\n\n* **Erkek:** Je suis turc. (Okunuş: Türk - C → K)\n* **Kadın:** Je suis turque. (Okunuş: Türk - neredeyse aynı!)\n\n⚠️ Milliyet küçük harfle yazılır! (Je suis turc ✅)",
            examples: [
                { fr: "Il est turc.", tr: "O Türk (erkek)." },
                { fr: "Elle est turque.", tr: "O Türk (kadın)." }
            ]
        },
        {
            id: "fr-a1-nationality-rule",
            title: "🌍 Genel Kural: Sessiz Harfleri Uyandır (+E)",
            explanation: "Erkek hali sessiz harfle biter → OKUNMAZ\nKadın hali -E alır → sessiz harf OKUNUR\n\n* **Français** (Franse) → **Française** (Fransez - S→Z)\n* **Anglais** (Angle) → **Anglaise** (Anglez)\n* **Allemand** (Alman) → **Allemande** (Almand - D patlar)\n* **Espagnol** → **Espagnole** (Aynı ses)",
            examples: [
                { fr: "Il est français. Elle est française.", tr: "O Fransız. (Erkek/Kadın)" },
                { fr: "Il est allemand. Elle est allemande.", tr: "O Alman." }
            ]
        },
        {
            id: "fr-a1-nationality-ien",
            title: "🇮🇹 Çiftleme: -IEN → -IENNE",
            explanation: "İtalya, Kanada, Brezilya: `-ien` ile biter.\n**Kural:** -ien → **-ienne** (N çiftleşir!)\n\n* Italien → **Italienne**\n* Canadien → **Canadienne**\n* Brésilien → **Brésilienne**",
            examples: [
                { fr: "Il est italien. Elle est italienne.", tr: "O İtalyan." },
                { fr: "Il est canadien. Elle est canadienne.", tr: "O Kanadalı." }
            ]
        },
        {
            id: "fr-a1-nationality-invariable",
            title: "🇧🇪 Değişmeyenler (Zaten E'li)",
            explanation: "Erkek hali -E ile bitiyorsa, kadın hali AYNIDIR.\n\n* 🇧🇪 **Belge** (Belçikalı)\n* 🇷🇺 **Russe** (Rus)\n* 🇨🇭 **Suisse** (İsviçreli)",
            examples: [
                { fr: "Il est belge. Elle est belge.", tr: "O Belçikalı." },
                { fr: "Il est russe. Elle est russe.", tr: "O Rus." }
            ]
        }
    ]
};

// ===== ÜNİTE 308: MESLEKLER =====
const unit308Grammar: UnitGrammar = {
    unitId: 308,
    title: "Mesleklerde Cinsiyet",
    rules: [
        {
            id: "fr-a1-jobs-group1",
            title: "👩‍⚖️ Grup 1: Klasik Kural (+E)",
            explanation: "Milliyetlerde öğrendiğimiz kuralın aynısıdır.\n\n**Erkek halinde** sondaki sessiz harf OKUNMAZ.\n**Kadın halinde** -E eklenir ve sondaki harf OKUNUR.\n\n• Avukat: Avocat (Avoka) → Avocate (Avokat)\n• Öğrenci: Étudiant (Etudyan) → Étudiante (Etudyant)\n• Öğretmen: Enseignant → Enseignante\n• Asistan: Assistant → Assistante",
            examples: [
                { fr: "Mon père est avocat.", tr: "Babam avukat." },
                { fr: "Ma mère est avocate.", tr: "Annem avukat." },
                { fr: "Je suis étudiant / étudiante.", tr: "Ben öğrenciyim." }
            ]
        },
        {
            id: "fr-a1-jobs-group2",
            title: "👨‍🍳 Grup 2: Aksan Değişimi (-ER → -ÈRE)",
            explanation: "Fransızcada -ER ile biten çok meslek vardır. Bunları dişi yaparken sonuna -E ekleriz ama yetmez; sondaki E harfinin tepesine bir Grave Aksan (`) koyarız. Ses 'açılır'.\n\n• Fırıncı: Boulanger (Bulanje) → Boulangère (Bulanjer)\n• Aşçı: Cuisinier (Kuiziniye) → Cuisinière (Kuiziniyer)\n• Hemşire: Infirmier (Enfirmiye) → Infirmière (Enfirmiyer)\n\n**Fark:** Erkek halinde son ses 'Kapalı E' (je). Kadın halinde son ses 'Açık E' ve R sesidir (jer).",
            examples: [
                { fr: "Il est boulanger.", tr: "O fırıncı (erkek)." },
                { fr: "Elle est boulangère.", tr: "O fırıncı (kadın)." },
                { fr: "Mon frère est cuisinier.", tr: "Kardeşim aşçı." }
            ]
        },
        {
            id: "fr-a1-jobs-group3",
            title: "🎭 Grup 3: Şarkıcılar ve Müdürler (-EUR)",
            explanation: "Sonu -EUR ile biten kelimeler ikiye ayrılır:\n\n**A. '-EUSE' Olanlar (Kökeni Fiil Olanlar)**\nEğer meslek bir fiilden geliyorsa, sonu -EUSE olur.\n• Satıcı: Vendeur → Vendeuse (Vandöz)\n• Şarkıcı: Chanteur → Chanteuse (Şantöz)\n• Dansçı: Danseur → Danseuse (Dansöz)\n\n**B. '-TRICE' Olanlar (Daha Resmi/Latin)**\nEğer meslek daha resmi veya Latince kökenliyse, sonu -TRICE olur.\n• Müdür: Directeur → Directrice (Direktris)\n• Oyuncu: Acteur → Actrice (Aktris)",
            examples: [
                { fr: "Elle est chanteuse.", tr: "O şarkıcı (kadın)." },
                { fr: "Elle est actrice.", tr: "O oyuncu (kadın)." },
                { fr: "La directrice de l'école.", tr: "Okulun müdiresi." }
            ]
        },
        {
            id: "fr-a1-jobs-group4",
            title: "💻 Grup 4: Çiftleme (-IEN → -IENNE)",
            explanation: "İtalyan (Italien) kuralını hatırla. Sonu -IEN ile biten mesleklerde N harfi çiftleşir.\n\n• Müzisyen: Musicien → Musicienne (Müzisyenn)\n• Yazılımcı: Informaticien → Informaticienne (Enformatisyenn)\n• Elektrikçi: Électricien → Électricienne\n• Mekanikçi: Mécanicien → Mécanicienne",
            examples: [
                { fr: "Il est musicien.", tr: "O müzisyen." },
                { fr: "Elle est musicienne.", tr: "O (kadın) müzisyen." },
                { fr: "Mon ami est informaticien.", tr: "Arkadaşım yazılımcı." }
            ]
        },
        {
            id: "fr-a1-jobs-group5",
            title: "🩺 Grup 5: Direnenler (Değişmeyenler)",
            explanation: "Bazı meslekler tarihsel olarak sadece erkeklere ait görüldüğü için, uzun süre dişi halleri yoktu. Bugün değişiyor ama yaygın kullanım şöyledir:\n\n**Kelime değişmez, sadece tanımlık (Le/La) değişir.**\n\n• Doktor: Le Médecin → La Médecin\n• Mühendis: L'Ingénieur → L'Ingénieur (veya La femme ingénieur)\n• Profesör: Le Professeur → La Professeur\n\n*Not: Quebec Fransızcasında sonlarına -e eklendiği de olur: Professeure. Ama okunuş değişmez!*",
            examples: [
                { fr: "Elle est médecin.", tr: "O (kadın) doktor." },
                { fr: "Ma sœur est ingénieur.", tr: "Kız kardeşim mühendis." },
                { fr: "La professeur est gentille.", tr: "Profesör (kadın) nazik." }
            ]
        }
    ]
};

// ===== ÜNİTE 309: EVİMİZ =====
const unit309Grammar: UnitGrammar = {
    unitId: 309,
    title: "Evimiz (Yer Edatları ve Odalar)",
    rules: [
        {
            id: "fr-a1-prepositions-cities",
            title: "🌍 Bölüm 1: Şehirler ve Ülkeler",
            explanation: "Fransızcada 'Neredesin?' sorusuna cevap verirken şu ayrıma dikkat et:\n\n**A. Şehirler: 'À' (Nokta Atışı) 🎯**\nEğer bahsettiğin yer bir ŞEHİR ise, her zaman **À** kullanırsın. Cinsiyet fark etmez.\n* Je suis **à** Paris. (Paris'teyim.)\n* J'habite **à** Istanbul.\n\n**B. Dişi Ülkeler → EN**\nKural: Sonu -E ile biten ülkeler %99 dişidir.\n* La Turquie → Je suis **en** Turquie.\n* La France → J'habite **en** France.\n\n**C. Erkek Ülkeler → AU**\nKural: Sonu -E ile bitmeyenler erkektir.\n* Le Japon → Il est **au** Japon.\n* Le Canada → Il est **au** Canada.\n\n**D. Çoğul Ülkeler → AUX**\n* Les États-Unis → Je suis **aux** États-Unis.",
            examples: [
                { fr: "Je suis à Paris.", tr: "Paris'teyim." },
                { fr: "J'habite en Turquie.", tr: "Türkiye'de oturuyorum." },
                { fr: "Il est au Japon.", tr: "O Japonya'da." },
                { fr: "Ils sont aux États-Unis.", tr: "Onlar Amerika'da." }
            ]
        },
        {
            id: "fr-a1-prepositions-objects",
            title: "📦 Bölüm 2: Eşyalar Nerede? (Fiziksel Konum)",
            explanation: "Bir kedinin masaya göre konumunu düşünelim:\n\n• **Dans** (İçinde) → Le chat est dans la boîte.\n• **Sur** (Üstünde) → Le chat est sur la table.\n• **Sous** (Altında) → Le chat est sous la table.\n• **Devant** (Önünde) → La voiture est devant la maison.\n• **Derrière** (Arkasında) → Le jardin est derrière la maison.\n• **Entre** (Arasında) → Je suis entre deux chaises.\n\n⚠️ **Sur vs Sous Okunuş:**\n• **Sur** (Üstünde): Ağzını büzerek ince 'Ü' de. (Sür)\n• **Sous** (Altında): Ağzını büzerek 'U' de. (Su)",
            examples: [
                { fr: "Le chat est sur la table.", tr: "Kedi masanın üstünde." },
                { fr: "Le chat est sous la table.", tr: "Kedi masanın altında." },
                { fr: "Le livre est dans le sac.", tr: "Kitap çantanın içinde." },
                { fr: "La voiture est devant la maison.", tr: "Araba evin önünde." }
            ]
        },
        {
            id: "fr-a1-prepositions-de",
            title: "🔗 Bölüm 3: 'DE' ile Kullanılanlar",
            explanation: "Bazı edatlar tek başına kullanılmaz, yanına **'DE'** (-den/-dan) alır:\n\n* **Près de...** → ...-in yakınında\n* **Loin de...** → ...-den uzakta\n* **À côté de...** → ...-in yanında / bitişiğinde\n* **En face de...** → ...-in karşısında\n\n⚠️ **Kritik Dilbilgisi Kuralı (Du/Des):**\nEğer 'De'den sonra gelen kelime Erkek (Le) ise, bunlar birleşir ve **DU** olur!\n* Près de + le cinéma → **Près du cinéma** (Sinemanın yakınında)\n* Loin de + la maison → **Loin de la maison** (Dişide değişim yok)",
            examples: [
                { fr: "J'habite près du cinéma.", tr: "Sinemanın yakınında oturuyorum." },
                { fr: "La banque est à côté de la poste.", tr: "Banka postanın yanında." },
                { fr: "Le café est en face de l'école.", tr: "Kafe okulun karşısında." },
                { fr: "Il habite loin de la ville.", tr: "O şehirden uzakta oturuyor." }
            ]
        },
        {
            id: "fr-a1-prepositions-chez",
            title: "🏠 Bölüm 4: Fransız İcadı 'CHEZ'",
            explanation: "Bu kelimenin tam bir Türkçe karşılığı yok ama **'gillerde'**, **'-in evinde'**, **'-in mekanında'** demektir. **KİŞİLER** için kullanılır.\n\n* **Chez moi:** Benim evimde / Bende\n* **Chez Ali:** Ali'nin evinde / Ali'lerde\n* **Chez le coiffeur:** Kuaförde (Kuaförün dükkanında)\n* **Chez le docteur:** Doktorda (Muayenehanede)\n\n❌ Asla 'Je vais **au** Ali' deme!\n✅ 'Je vais **chez** Ali' de.",
            examples: [
                { fr: "Je suis chez moi.", tr: "Evdeyim. (Benim evimde)" },
                { fr: "Je vais chez Ali.", tr: "Ali'lere gidiyorum." },
                { fr: "Elle est chez le docteur.", tr: "O doktorda." },
                { fr: "On mange chez mes parents.", tr: "Ailemde yemek yiyoruz." }
            ]
        }
    ]
};

// ===== ÜNİTE 310: TANIMLIKLAR =====
const unit310Grammar: UnitGrammar = {
    unitId: 310,
    title: "Belirsiz Tanımlıklar (Les Articles Indéfinis)",
    rules: [
        {
            id: "fr-a1-articles-table",
            title: "📊 Un, Une, Des",
            explanation: "İspanyolcadaki Un / Una / Unos yapısının Fransızca karşılığıdır.\n\n🚹 **ERİL (Masculin) → UN**\n• Okunuş: Ön (Burundan)\n• Anlam: Bir\n• Örnek: Un garçon (Bir erkek çocuk)\n\n🚺 **DİŞİL (Féminin) → UNE**\n• Okunuş: Ün (N okunur)\n• Anlam: Bir\n• Örnek: Une fille (Bir kız çocuk)\n\n👯 **ÇOĞUL (Pluriel) → DES**\n• Okunuş: De (S yok!)\n• Anlam: -lar/-ler (Bazı)\n• Örnek: Des enfants (Çocuklar)",
            examples: [
                { fr: "C'est un garçon.", tr: "Bu bir erkek çocuk." },
                { fr: "C'est une fille.", tr: "Bu bir kız çocuk." },
                { fr: "Ce sont des enfants.", tr: "Bunlar çocuklar." }
            ]
        },
        {
            id: "fr-a1-articles-details",
            title: "🕵️ Detaylı Analiz",
            explanation: "**A. UN (Eril) 🚹**\nOkunuşu: Dudaklarını büz ve 'Ö' de ama sesi burnundan ver. N harfi tam çıkmaz.\n* Un café (Bir kahve)\n* Un ami (Liason: U-na-mi)\n\n**B. UNE (Dişil) 🚺**\nOkunuşu: 'ÜN'. N harfini basarak söylersin.\n* Une pizza (Bir pizza)\n* Une amie (Liason: U-na-mi - Ses aynı!)\n\n**C. DES (Çoğul) 👯‍♂️**\nHem erkekler hem dişiler için DES kullanılır.\n* Un ve Une kelimelerinin çoğuludur.\n* 'Bazı' veya çoğul eki (-lar/-ler) olarak çevrilir.\n* Tek başınayken 'DE' diye okunur. S harfi yutulur.",
            examples: [
                { fr: "J'ai des amis.", tr: "Arkadaşlarım var (Bazı arkadaşlar)." },
                { fr: "Je mange des croissants.", tr: "Kruvasan yiyorum." }
            ]
        },
        {
            id: "fr-a1-articles-liaison",
            title: "🔗 Kritik Kural: 'DES' ve Liaison",
            explanation: "Des kelimesi tek başına 'DE' diye okunur. AMA... Eğer arkasından **sesli harfle** başlayan bir kelime gelirse, o ölü 'S' harfi canlanır ve **'Z'** olur.\n\n* **Sessizle başlarsa:** Des livres (De livr)\n* **Sesliyle başlarsa:** Des amis (De-**Z**a-mi)\n* **Sesliyle başlarsa:** Des oranges (De-**Z**o-ranj)",
            examples: [
                { fr: "Des amis (De-za-mi)", tr: "Arkadaşlar" },
                { fr: "Des écoles (De-ze-kol)", tr: "Okullar" }
            ]
        },
        {
            id: "fr-a1-articles-cest",
            title: "🛍️ 'Bu Bir...' (C'est / Ce sont)",
            explanation: "Nesneleri tanıtmak için bu kalıpları kullanırız:\n\n**Tekil için: C'est... (Bu bir...)**\n* C'est un livre. (Bu bir kitaptır.)\n* C'est une table. (Bu bir masadır.)\n\n**Çoğul için: Ce sont... (Bunlar...)**\n* Ce sont des livres. (Bunlar kitaplardır.)\n* Ce sont des tables. (Bunlar masalardır.)",
            examples: [
                { fr: "Qu'est-ce que c'est?", tr: "Bu nedir?" },
                { fr: "C'est un ordinateur.", tr: "Bu bir bilgisayar." },
                { fr: "Ce sont des stylos.", tr: "Bunlar kalemler." }
            ]
        }
    ]
};

// ===== ÜNİTE 311: VÜCUDUMUZ =====
const unit311Grammar: UnitGrammar = {
    unitId: 311,
    title: "Avoir Mal à (Ağrısı Olmak)",
    rules: [
        {
            id: "fr-a1-avoir-mal-formula",
            title: "📐 Formül: AVOIR + MAL + À + [Vücut Parçası]",
            explanation: "Fransızcada 'Bir yerim ağrıyor' demek için bu formülü kullanırız.\n\n**1. Adım: Avoir Çekimi (Motoru Çalıştır)**\nÖnce 'Kimin ağrısı var?' onu seçmelisin.\n• J'ai mal... (Benim ağrım var...)\n• Tu as mal... (Senin ağrın var...)\n• Il/Elle a mal... (Onun ağrısı var...)\n• Nous avons mal... (Bizim ağrımız var...)\n• Vous avez mal... (Sizin ağrınız var...)\n• Ils/Elles ont mal... (Onların ağrısı var...)",
            examples: [
                { fr: "J'ai mal.", tr: "Ağrım var." },
                { fr: "Tu as mal?", tr: "Ağrın mı var?" },
                { fr: "Elle a mal.", tr: "Onun ağrısı var." }
            ]
        },
        {
            id: "fr-a1-avoir-mal-contraction",
            title: "➕ Edat Birleşimi (Article Contracté)",
            explanation: "İşte zurnanın zırt dediği yer! 'À' edatı, arkasından gelen vücut parçasının cinsiyetine (Le/La/Les) göre mutasyon geçirir.\n\n🚹 **ERİL (Le) → AU**\n• À + Le = **AU** (Okunuş: O)\n\n🚺 **DİŞİL (La) → À LA**\n• À + La = **À LA** (Okunuş: A la)\n\n😲 **SESLİ HARF (L') → À L'**\n• À + L' = **À L'** (Okunuş: A l...)\n\n👯 **ÇOĞUL (Les) → AUX**\n• À + Les = **AUX** (Okunuş: O - X okunmaz!)",
            examples: [
                { fr: "À + le dos = au dos", tr: "Sırtta (Erkek)" },
                { fr: "À + la tête = à la tête", tr: "Başta (Dişi)" },
                { fr: "À + les yeux = aux yeux", tr: "Gözlerde (Çoğul)" }
            ]
        },
        {
            id: "fr-a1-avoir-mal-masculine",
            title: "🚹 Erkek Parçalar (AU)",
            explanation: "Bu vücut parçaları erkek cinsiyettedir, bu yüzden **AU** kullanılır:\n\n• **Le Dos** (Sırt) → J'ai mal **au** dos.\n• **Le Ventre** (Karın) → J'ai mal **au** ventre.\n• **Le Genou** (Diz) → Il a mal **au** genou.\n• **Le Bras** (Kol) → Elle a mal **au** bras.\n• **Le Cou** (Boyun) → Tu as mal **au** cou.",
            examples: [
                { fr: "J'ai mal au dos.", tr: "Sırtım ağrıyor." },
                { fr: "J'ai mal au ventre.", tr: "Karnım ağrıyor." },
                { fr: "Il a mal au genou.", tr: "Dizi ağrıyor." }
            ]
        },
        {
            id: "fr-a1-avoir-mal-feminine",
            title: "🚺 Dişi Parçalar (À LA)",
            explanation: "Bu vücut parçaları dişi cinsiyettedir, bu yüzden **À LA** kullanılır:\n\n• **La Tête** (Baş/Kafa) → J'ai mal **à la** tête.\n• **La Gorge** (Boğaz) → Tu as mal **à la** gorge.\n• **La Jambe** (Bacak) → Elle a mal **à la** jambe.\n• **La Main** (El) → J'ai mal **à la** main.\n• **La Bouche** (Ağız) → Il a mal **à la** bouche.",
            examples: [
                { fr: "J'ai mal à la tête.", tr: "Başım ağrıyor." },
                { fr: "Tu as mal à la gorge.", tr: "Boğazın ağrıyor." },
                { fr: "Elle a mal à la jambe.", tr: "Bacağı ağrıyor." }
            ]
        },
        {
            id: "fr-a1-avoir-mal-vowel",
            title: "😲 Sesli Harfle Başlayanlar (À L')",
            explanation: "Sesli harfle başlayan vücut parçaları için **À L'** kullanılır:\n\n• **L'Estomac** (Mide) → J'ai mal **à l'**estomac.\n• **L'Épaule** (Omuz) → J'ai mal **à l'**épaule.\n• **L'Oreille** (Kulak) → Tu as mal **à l'**oreille.\n• **L'Œil** (Tek göz) → Il a mal **à l'**œil.",
            examples: [
                { fr: "J'ai mal à l'estomac.", tr: "Midem ağrıyor." },
                { fr: "J'ai mal à l'épaule.", tr: "Omzum ağrıyor." },
                { fr: "Tu as mal à l'oreille.", tr: "Kulağın ağrıyor." }
            ]
        },
        {
            id: "fr-a1-avoir-mal-plural",
            title: "👯 Çoğul Parçalar (AUX)",
            explanation: "Çoğul vücut parçaları için **AUX** kullanılır (X okunmaz!):\n\n• **Les Dents** (Dişler) → J'ai mal **aux** dents.\n• **Les Yeux** (Gözler) → J'ai mal **aux** yeux.\n• **Les Pieds** (Ayaklar) → J'ai mal **aux** pieds.\n• **Les Oreilles** (Kulaklar) → Tu as mal **aux** oreilles.\n\n💡 **Not:** Dişler ve gözler için Fransızlar genellikle çoğul kullanır!",
            examples: [
                { fr: "J'ai mal aux dents.", tr: "Dişim ağrıyor." },
                { fr: "J'ai mal aux yeux.", tr: "Gözlerim ağrıyor." },
                { fr: "J'ai mal aux pieds.", tr: "Ayaklarım ağrıyor." }
            ]
        }
    ]
};

// ===== ÜNİTE 312: GİYSİLER =====
const unit312Grammar: UnitGrammar = {
    unitId: 312,
    title: "Porter Fiili ve Giysiler",
    rules: [
        {
            id: "fr-a1-porter-conjugation",
            title: "🧥 Porter Fiil Çekimi (Şimdiki Zaman)",
            explanation: "**Porter** düzenli bir -er fiilidir. Kök: PORT-\n\nÖnemli: Yazılanların çoğu OKUNMAZ!\n\n• Je **porte** (Jö Port) → Giyiyorum\n• Tu **portes** (Tü Port) → Giyiyorsun\n• Il/Elle **porte** (İl Port) → Giyiyor\n• Nous **portons** (Nu Porton) → Giyiyoruz\n• Vous **portez** (Vu Porte) → Giyiyorsunuz\n• Ils/Elles **portent** (İl Port) → Giyiyorlar\n\n⚠️ **BÜYÜK UYARI (ILS PORTENT):**\nÇoğul eki olan -ENT fiillerde ASLA OKUNMAZ!\nSakın 'Portent' deme! Sadece 'Port' de.",
            examples: [
                { fr: "Je porte un pantalon.", tr: "Pantolon giyiyorum." },
                { fr: "Tu portes quoi?", tr: "Ne giyiyorsun?" },
                { fr: "Ils portent des lunettes.", tr: "Gözlük takıyorlar." }
            ]
        },
        {
            id: "fr-a1-porter-meanings",
            title: "👜 Porter'ın Anlam Genişliği",
            explanation: "İspanyolcadaki 'Llevar' gibi, Porter de birden fazla anlama gelir:\n\n👕 **Giymek:**\n• Je porte un pantalon. (Pantolon giyiyorum.)\n\n🧳 **Taşımak:**\n• Je porte une valise. (Bavul taşıyorum.)\n\n👓 **Takmak (Gözlük/Parfüm):**\n• Je porte des lunettes. (Gözlük takıyorum.)\n• Je porte du parfum. (Parfüm sıkıyorum.)",
            examples: [
                { fr: "Je porte un sac.", tr: "Çanta taşıyorum." },
                { fr: "Elle porte des boucles d'oreilles.", tr: "Küpe takıyor." }
            ]
        },
        {
            id: "fr-a1-clothes-vocabulary",
            title: "👗 Gardırop Sözlüğü",
            explanation: "**ÜST GİYİM:**\n• Une chemise (Şömiz) → Gömlek (Dişi)\n• Un t-shirt → Tişört (Erkek)\n• Un pull (Pül) → Kazak (Erkek)\n• Une robe → Elbise (Dişi)\n• Un manteau (Manto) → Mont/Kaban (Erkek)\n\n**ALT GİYİM:**\n• Un pantalon → Pantolon (Erkek)\n• Une jupe (Jüp) → Etek (Dişi)\n• Un jean (Cin) → Kot pantolon (Erkek)\n\n**AKSESUARLAR:**\n• Des chaussures (Şossür) → Ayakkabılar (Çoğul)\n• Des lunettes (Lünet) → Gözlük (Çoğul)\n• Un chapeau (Şapo) → Şapka (Erkek)",
            examples: [
                { fr: "Je porte une chemise blanche.", tr: "Beyaz gömlek giyiyorum." },
                { fr: "Il porte un jean et un t-shirt.", tr: "Kot ve tişört giyiyor." }
            ]
        },
        {
            id: "fr-a1-clothes-colors",
            title: "🎨 Renklerle Kombin Yapmak",
            explanation: "Renk sıfatı, giysinin cinsiyetine göre değişir:\n\n🚹 **Erkek giysi:**\n• Un pantalon **noir** (Siyah pantolon)\n\n🚺 **Dişi giysi:**\n• Une chemise **noire** (+e eklenir)\n\n👯 **Çoğul giysi:**\n• Des chaussures **noires** (+es eklenir)\n\n💡 Okunuş genellikle aynı kalır!",
            examples: [
                { fr: "Je porte un pull rouge.", tr: "Kırmızı kazak giyiyorum." },
                { fr: "Elle porte une jupe bleue.", tr: "Mavi etek giyiyor." },
                { fr: "Ils portent des chaussures blanches.", tr: "Beyaz ayakkabılar giyiyorlar." }
            ]
        },
        {
            id: "fr-a1-clothes-questions",
            title: "🗣️ 'Ne Giyiyorsun?' Soruları",
            explanation: "Birinin stilini sormak için:\n\n**Resmi:**\n• Qu'est-ce que tu portes? (Kes-kı tü port?)\n→ Ne giyiyorsun?\n\n**Sokak Ağzı:**\n• Tu portes quoi? (Tü port kua?)\n→ Ne giyiyorsun?\n\n**Cevap:**\n• Je porte... (Jö port...)",
            examples: [
                { fr: "Qu'est-ce que tu portes aujourd'hui?", tr: "Bugün ne giyiyorsun?" },
                { fr: "Je porte un jean et une chemise.", tr: "Kot ve gömlek giyiyorum." }
            ]
        }
    ]
};

// ===== ÜNİTE 313: YİYECEKLER =====
const unit313Grammar: UnitGrammar = {
    unitId: 313,
    title: "Partitif Artikeller (Du, De la, De l', Des)",
    rules: [
        {
            id: "fr-a1-partitif-formula",
            title: "1. Formül Tablosu: Matematik İşlemi ➕",
            explanation: "Tıpkı yer yön edatlarında (au, aux) olduğu gibi, burada da **DE** (-den/-dan) edatı ile tanımlıklar birleşir.\n\n🚹 **Erkek (Masculin):** De + Le = **DU** → Du café (Kahve)\n🚺 **Dişi (Féminin):** De + La = **DE LA** → De la salade (Salata)\n😲 **Sesli Harf (Voyelle):** De + L' = **DE L'** → De l'eau (Su)\n👯 **Çoğul (Pluriel):** De + Les = **DES** → Des pâtes (Makarna)\n\n🗣️ **Okunuş İpuçları:**\n* **DU:** 'Dü' diye okunur. (Ekmek, Peynir, Kahve...)\n* **DE LA:** 'Dö la' diye okunur. (Et, Çorba, Salata...)\n* **DE L':** 'Dö l...' diye okunur. (Su, Yağ...)",
            examples: [
                { fr: "Je mange du pain.", tr: "Ekmek yiyorum." },
                { fr: "Je bois de la bière.", tr: "Bira içiyorum." },
                { fr: "Je bois de l'eau.", tr: "Su içiyorum." },
                { fr: "Je mange des pâtes.", tr: "Makarna yiyorum." }
            ]
        },
        {
            id: "fr-a1-partitif-difference",
            title: "2. Kritik Fark: 'Sevmek' mi, 'Yemek' mi? ❤️ vs 🍽️",
            explanation: "İşte öğrencilerin en çok karıştırdığı yer. Bu kuralı anlarsan B1 seviyesine zıplarsın!\\n\\n**A. Genel Beğeni (Aimer, Adorer, Préférer) → LE / LA**\\nEğer bir şeyi genel olarak sevdiğini söylüyorsan, o şeyin 'tamamını' kastedersin. Dünyadaki bütün kahveleri seversin.\\n* J'aime **le** café. (Kahveyi severim - Genel)\\n* J'adore **la** viande. (Ete bayılırım.)\\n\\n**B. Tüketim (Manger, Boire, Acheter, Vouloir) → DU / DE LA**\\nEğer bir şeyi yiyor, içiyor veya satın alıyorsan, dünyadaki bütün kahveyi içemezsin. Sadece fincanındakini, yani 'bir miktarını' içersin.\\n* Je bois **du** café. (Kahve içiyorum - Miktar belirsiz, biraz)\\n* Je mange **de la** viande. (Et yiyorum.)",
            examples: [
                { fr: "J'aime le thé, mais je bois de l'eau.", tr: "Çayı severim (genel), ama su içiyorum (tüketim)." },
                { fr: "J'adore le chocolat.", tr: "Çikolataya bayılırım (genel)." },
                { fr: "Je mange du chocolat.", tr: "Çikolata yiyorum (bir miktar)." }
            ]
        },
        {
            id: "fr-a1-partitif-negation",
            title: "3. Yasak Bölge: Olumsuzluk (NE... PAS) 🚫",
            explanation: "Fransızcada 'Yemiyorum / İçmiyorum' dediğin anda **DU, DE LA, DES** anında yok olur!\n\nYerine sadece ve sadece **'DE'** (veya d') gelir.\nBuna 'Sıfır Kuralı' diyoruz. Miktar sıfırsa, artikel de sıfırlanır.\n\n✅ **Olumlu:** J'ai **du** pain. (Ekmeğim var.)\n❌ **Olumsuz:** Je n'ai pas **de** pain. (Hiç ekmeğim yok.)\n\n✅ **Olumlu:** Je bois **de l'**eau. (Su içiyorum.)\n❌ **Olumsuz:** Je ne bois pas **d'**eau. (Su içmiyorum.)\n\n**⚠️ Unutma:** Olumsuz cümlede Du veya De la göremezsin! Hepsi DE olur.",
            examples: [
                { fr: "J'ai du pain.", tr: "Ekmeğim var." },
                { fr: "Je n'ai pas de pain.", tr: "Hiç ekmeğim yok." },
                { fr: "Je ne bois pas d'eau.", tr: "Su içmiyorum." },
                { fr: "Il n'y a pas de fromage.", tr: "Hiç peynir yok." }
            ]
        },
        {
            id: "fr-a1-partitif-vocab",
            title: "4. Mutfak Sözlüğü (Vocabulaire) 🥖",
            explanation: "Bu kuralları uygulamak için en sık kullanılan yiyeceklerin cinsiyetini bilmen gerek.\n\n🚹 **Erkekler (Du):**\n* Le pain (Ekmek) → Du pain\n* Le café (Kahve) → Du café\n* Le fromage (Peynir) → Du fromage\n* Le poulet (Tavuk) → Du poulet\n* Le sucre (Şeker) → Du sucre\n\n🚺 **Dişiler (De la):**\n* La viande (Et) → De la viande\n* La salade (Salata) → De la salade\n* La soupe (Çorba) → De la soupe\n* La bière (Bira) → De la bière\n\n😲 **Sesli (De l'):**\n* L'eau (Su) → De l'eau\n* L'huile (Yağ) → De l'huile\n\n👯 **Çoğul (Des):**\n* Les pâtes (Makarna) → Des pâtes (Fransızcada makarna hep çoğuldur!)\n* Les fruits (Meyveler) → Des fruits",
            examples: [
                { fr: "Je mange du fromage.", tr: "Peynir yiyorum." },
                { fr: "Je bois de la bière.", tr: "Bira içiyorum." },
                { fr: "Je cuisine avec de l'huile.", tr: "Yağla yemek yapıyorum." },
                { fr: "J'achète des fruits.", tr: "Meyve alıyorum." }
            ]
        }
    ]
};

// ===== ÜNİTE 314: İÇECEKLER =====
const unit314Grammar: UnitGrammar = {
    unitId: 314,
    title: "Vouloir, Pouvoir, Devoir (Modal Fiiller)",
    rules: [
        {
            id: "fr-a1-vouloir",
            title: "1. VOULOIR (İstemek) ❤️",
            explanation: "İspanyolcadaki Querer fiilidir. Düzensizdir ve 'X-X-T' kuralına uyar.\n\n**Şimdiki Zaman Çekimi:**\n* Je **veux** (Vö) → İstiyorum\n* Tu **veux** (Vö) → İstiyorsun\n* Il/Elle **veut** (Vö) → İstiyor\n* Nous **voulons** (Vulon)\n* Vous **voulez** (Vule)\n* Ils/Elles **veulent** (Völ) - Dikkat: -ent okunmaz!\n\n☕ **Kibarlık Formülü: 'Je Voudrais'**\nBir kafeye gidip garsona 'Je veux un café' dersen, kaba bulunur! Bunun yerine Koşul Kipi kullanılır:\n* ❌ **Kaba:** Je veux...\n* ✅ **Kibar:** Je voudrais... (Jö vudre) → İsterdim / Alabilir miyim?",
            examples: [
                { fr: "Je veux manger.", tr: "Yemek istiyorum." },
                { fr: "Je voudrais un café, s'il vous plaît.", tr: "Bir kahve rica edebilir miyim?" },
                { fr: "Tu veux du thé?", tr: "Çay ister misin?" }
            ]
        },
        {
            id: "fr-a1-pouvoir",
            title: "2. POUVOIR (-Ebilmek / Gücü Yetmek) 💪",
            explanation: "İspanyolcadaki Poder, İngilizcedeki Can fiilidir. İzin istemek veya yapabilmek için kullanılır.\n\n**Şimdiki Zaman Çekimi (X-X-T kuralı):**\n* Je **peux** (Pö) → Yapabilirim\n* Tu **peux** (Pö)\n* Il/Elle **peut** (Pö)\n* Nous **pouvons** (Puvon)\n* Vous **pouvez** (Puve)\n* Ils/Elles **peuvent** (Pöv) - -ent okunmaz!\n\n🎩 **Ultra Kibarlık: 'Pourriez-vous'**\nTanımadığın birinden rica ederken:\n* Pourriez-vous m'aider? (Bana yardım edebilir miydiniz rica etsem?)",
            examples: [
                { fr: "Je peux entrer?", tr: "Girebilir miyim?" },
                { fr: "Vous pouvez m'aider?", tr: "Bana yardım edebilir misiniz?" },
                { fr: "Il peut venir demain.", tr: "Yarın gelebilir." }
            ]
        },
        {
            id: "fr-a1-devoir",
            title: "3. DEVOIR (Zorunda Olmak / -Meli -Malı) ☝️",
            explanation: "İspanyolcadaki Deber, İngilizcedeki Must/Have to fiilidir.\n\n**Şimdiki Zaman Çekimi (S-S-T kuralı):**\n* Je **dois** (Dua) → Zorundayım\n* Tu **dois** (Dua)\n* Il/Elle **doit** (Dua)\n* Nous **devons** (Dövon)\n* Vous **devez** (Döve)\n* Ils/Elles **doivent** (Duav) - -ent okunmaz!\n\n💸 **Ekstra Anlam: Borçlu Olmak**\n* Combien je vous dois? (Size ne kadar borcum var?) → Hesap öderken çok işe yarar!",
            examples: [
                { fr: "Je dois partir.", tr: "Gitmeliyim / Gitmek zorundayım." },
                { fr: "Tu dois étudier.", tr: "Ders çalışmalısın." },
                { fr: "Combien je vous dois?", tr: "Size ne kadar borcum var?" }
            ]
        },
        {
            id: "fr-a1-modal-infinitive",
            title: "🏆 Altın Kural: Mastar Hali (Infinitif)",
            explanation: "Bu üç fiili kullandığında, arkasından gelen ana eylem ASLA ÇEKİMLENMEZ! Sözlükteki ham haliyle (Mastar) kalır.\n\n❌ **Yanlış:** Je veux mange. (Ben istiyorum yiyorum.)\n✅ **Doğru:** Je veux **manger**. (Ben yemek istiyorum.)\n\n❌ **Yanlış:** Tu peux viens?\n✅ **Doğru:** Tu peux **venir**? (Gelebilir misin?)\n\n**Formül:** [Özne] + [Vouloir/Pouvoir/Devoir çekimli] + [İkinci fiil MASTAR]",
            examples: [
                { fr: "Je veux manger.", tr: "Yemek istiyorum." },
                { fr: "Tu peux venir?", tr: "Gelebilir misin?" },
                { fr: "Elle doit partir.", tr: "Gitmesi gerekiyor." }
            ]
        }
    ]
};

// ===== ÜNİTE 315: SAAT KAÇ? =====
const unit315Grammar: UnitGrammar = {
    unitId: 315,
    title: "Saatleri Söyleme (L'Heure)",
    rules: [
        {
            id: "fr-a1-time-basic",
            title: "1. Temel Soru ve Başlangıç 🧱",
            explanation: "Önce saati sormayı öğrenelim.\n\n🗣️ **Soru:** Quelle heure est-il ? (Kel ör etil?) → Saat kaç?\n\n**Cevap:** Cevap verirken HER ZAMAN şu kalıpla başlarız. Saatler çoğul olsa bile (saat 5, saat 8 gibi) bu kalıp değişmez:\n\n🗣️ **Il est...** (İl e...) → O ...-dir. (Saat ...-dır).",
            examples: [
                { fr: "Quelle heure est-il ?", tr: "Saat kaç?" },
                { fr: "Il est...", tr: "Saat..." }
            ]
        },
        {
            id: "fr-a1-time-hours",
            title: "2. 'Heures' Olmadan Asla! 🚫",
            explanation: "Türkçede 'Saat beş' deriz. Fransızcada 'O beş saat' demek zorundasın. Sayıyı söyledikten sonra **'HEURES'** (ör) kelimesini eklemezsen kimse seni anlamaz.\n\n**Formül:** Il est + [Sayı] + heures\n\n* 02:00 → Il est deux heures.\n* 05:00 → Il est cinq heures.\n* 09:00 → Il est neuf heures.\n\n⚠️ **Tek Bir İstisna:** Saat 01:00 iken.\n'1' sayısı Fransızcada cinsiyetlidir (Un/Une). Saat (Heure) kelimesi dişi olduğu için UNE deriz.\n* 01:00 → Il est **une** heure. (Sonunda 's' yok!)",
            examples: [
                { fr: "Il est cinq heures.", tr: "Saat beş." },
                { fr: "Il est une heure.", tr: "Saat bir." }
            ]
        },
        {
            id: "fr-a1-time-noon-midnight",
            title: "3. 12 Rakamı Yasak! (Öğlen ve Gece) 🕛🌚",
            explanation: "Fransızlar saat 12:00 olduğunda sayı kullanmaz. Özel isim kullanır.\n\n🌞 **Gündüz 12:00** → Midi\n* Il est midi. (Sonuna 'heures' koyma!)\n\nzzz **Gece 12:00** → Minuit\n* Il est minuit. (Sonuna 'heures' koyma!)",
            examples: [
                { fr: "Il est midi.", tr: "Saat öğlen on iki." },
                { fr: "Il est minuit.", tr: "Saat gece yarısı." }
            ]
        },
        {
            id: "fr-a1-time-minutes",
            title: "4. Dakikaları Eklemek (Pizza Dilimleri) 🍕",
            explanation: "Tam saatleri öğrendik. Şimdi yanına dakika ekleyelim.\n\n**A. Basit Dakikalar (1-29 arası):**\nSadece saatin arkasına sayıyı ekle. 'Geçe' kelimesine gerek yok!\n* 02:05 → Il est deux heures cinq.\n* 04:10 → Il est quatre heures dix.\n\n**B. Özel Dilimler:**\n* **Et quart** (E kar) → Çeyrek geçe\n* 03:15 → Il est trois heures **et quart**.\n\n* **Et demie** (E dömi) → Buçuk\n* 05:30 → Il est cinq heures **et demie**.\n* 12:30 (Öğlen) → Il est midi et demi.",
            examples: [
                { fr: "Il est huit heures vingt.", tr: "Saat sekiz yirmi." },
                { fr: "Il est trois heures et quart.", tr: "Saat üçü çeyrek geçiyor." },
                { fr: "Il est midi et demi.", tr: "Saat on iki buçuk." }
            ]
        },
        {
            id: "fr-a1-time-minus",
            title: "5. Zor Kısım (Var Demek / Eksi) ➖",
            explanation: "Saat buçuğu geçtikten sonra (35, 40, 50, 55 gibi), Fransızlar 'Bir sonraki saate şu kadar var' mantığını kullanır.\n\nMatematik işlemi yapacağız: **MOINS** (Mua) = EKSİ.\n\n**Formül:** [Bir Sonraki Saat] + heures + MOINS + [Kalan Dakika]\n\n* 04:50 (Beşe on var) → Il est cinq heures **moins** dix.\n* 07:40 (Sekize yirmi var) → Il est huit heures **moins** vingt.\n* 09:45 (Ona çeyrek var) → Il est dix heures **moins le quart**.",
            examples: [
                { fr: "Il est cinq heures moins dix.", tr: "Saat beşe on var." },
                { fr: "Il est huit heures moins vingt.", tr: "Saat sekize yirmi var." },
                { fr: "Il est dix heures moins le quart.", tr: "Saat ona çeyrek var." }
            ]
        }
    ]
};


// ===== ÜNİTE 316: GÜNLÜK RUTİN =====
const unit316Grammar: UnitGrammar = {
    unitId: 316,
    title: "Günlük Rutin (Dönüşlü Fiiller)",
    rules: [
        {
            id: "fr-a1-reflexive-logic",
            title: "1. Mantık: Bumerang Etkisi 🪃",
            explanation: "Normal fiil ile dönüşlü fiil arasındaki farkı anlamak çok önemlidir.\n\n* **Laver** (Yıkamak): Je lave la voiture. (Arabayı yıkıyorum.) → Eylem arabaya gidiyor.\n* **SE Laver** (Yıkanmak): Je **me** lave. (Yıkanıyorum / Kendimi yıkıyorum.) → Eylem bana geri dönüyor.\n\n😎 **Sır:** Fransızca öğrenmeye başladığında ilk öğrendiğin cümle neydi? *Je m'appelle...* (Benim adım...)\nAslında kelime anlamı şudur: 'Ben kendimi ... diye çağırırım.' Yani sen zaten ilk günden beri dönüşlü fiil kullanıyorsun!",
            examples: [
                { fr: "Je lave la voiture.", tr: "Arabayı yıkıyorum." },
                { fr: "Je me lave.", tr: "Yıkanıyorum." }
            ]
        },
        {
            id: "fr-a1-reflexive-pronouns",
            title: "2. Tablo: 'Ayna' Zamirleri (Me, Te, Se...) 📊",
            explanation: "Dönüşlü fiil çekimlerken, fiilin önüne kimin kendine bu eylemi yaptığını belirten bir zamir koymalıyız.\n\n* **Je** → me (veya m')\n* **Tu** → te (veya t')\n* **Il/Elle** → se (veya s')\n* **Nous** → nous (Evet, iki tane yan yana!)\n* **Vous** → vous (Evet, iki tane yan yana!)\n* **Ils/Elles** → se (veya s')\n\n🗣️ **Polyglot Uyarısı:** 'Nous nous...' ve 'Vous vous...' yan yana gelince kekeliyor gibi hissedebilirsin. Bu çok normal ve doğrudur!",
            examples: [
                { fr: "Nous nous lavons.", tr: "Biz yıkanıyoruz." },
                { fr: "Vous vous lavez.", tr: "Siz yıkanıyorsunuz." }
            ]
        },
        {
            id: "fr-a1-reflexive-conjugation",
            title: "3. Örnek Çekim: Se Laver (Yıkanmak) 🚿",
            explanation: "Düzenli bir fiil (-ER) olduğu için çekimi çok kolaydır. Sadece araya 'ayna zamirlerini' koyacağız.\n\n* Je **me** lave\n* Tu **te** laves\n* Il **se** lave\n* Nous **nous** lavons\n* Vous **vous** lavez\n* Ils **se** lavent",
            examples: [
                { fr: "Je me lave tous les jours.", tr: "Her gün yıkanırım." },
                { fr: "Il se lave le visage.", tr: "Yüzünü yıkıyor." }
            ]
        },
        {
            id: "fr-a1-reflexive-elision",
            title: "4. Sesli Harf Çarpışması (L'élision) 💥",
            explanation: "Eğer fiil sesli harfle (veya H ile) başlıyorsa, me, te, se zamirlerindeki 'e' düşer.\n\nÖrnek Fiil: **S'habiller** (Giyinmek)\n(Normalde 'Se habiller' ama E ve H yan yana gelmez)\n\n* Je **m'**habille (Jö mabiy)\n* Tu **t'**habilles\n* Il **s'**habille",
            examples: [
                { fr: "Je m'habille vite.", tr: "Hızlıca giyiniyorum." },
                { fr: "Elle s'habille bien.", tr: "O iyi giyiniyor." }
            ]
        },
        {
            id: "fr-a1-reflexive-vocab",
            title: "5. Günlük Rutin Sözlüğü 📅",
            explanation: "Sabah kalktığından evden çıkana kadar yaptığın her şey genellikle dönüşlüdür:\n\n* **Se réveiller:** Uyanmak (Je me réveille)\n* **Se lever:** Yataktan kalkmak (Je me lève)\n* **Se laver:** Yıkanmak\n* **Se brosser (les dents):** Dişleri fırçalamak\n* **Se raser:** Tıraş olmak\n* **Se maquiller:** Makyaj yapmak\n* **S'habiller:** Giyinmek\n* **Se coucher:** Yatmak / Yatağa girmek",
            examples: [
                { fr: "Je me réveille à 7 heures.", tr: "Saat 7'de uyanıyorum." },
                { fr: "Je me brosse les dents.", tr: "Dişlerimi fırçalıyorum." }
            ]
        },
        {
            id: "fr-a1-reflexive-negation",
            title: "6. Olumsuz Yapı: Sandviç Kuralı 🥪",
            explanation: "'Yıkanmıyorum' demek istersen, **ne...pas** kalıbı hem zamiri hem fiili içine alır. Bunlar etle tırnak gibidir, ayrılamazlar!\n\n**Formül:** Je + NE + [me lave] + PAS\n\n* Je **ne** me lave **pas**.\n* Tu **ne** t'habilles **pas**.",
            examples: [
                { fr: "Je ne me lève pas tôt.", tr: "Erken kalkmıyorum." },
                { fr: "Il ne se rase pas.", tr: "O tıraş olmuyor." }
            ]
        }
    ]
};

// ===== ÜNİTE 317: HOBİLER =====
const unit317Grammar: UnitGrammar = {
    unitId: 317,
    title: "Hobiler (Faire vs Jouer)",
    rules: [
        {
            id: "fr-a1-hobbies-jouer",
            title: "1. Bölüm 1: JOUER (Oynamak) - 'Top ve Takım' ⚽",
            explanation: "Eğer yaptığın sporda bir **TOP** (balle/ballon), bir **RAKET**, **ZAR**, **KART** veya **OYUN KONSOLU** varsa, yani ortada bir 'oyun/yarışma' mantığı varsa **JOUER** fiilini kullanırsın.\n\n**Gramer Kuralı: 'À' Edatı**\nJouer fiili sporlarla kullanılırken yanına **À** (-e/-a) edatını alır. Bu edat, yanındaki kelimeye göre değişir (Contracté olur):\n\n* **AU** (À + Le): Erkek sporlar için (En yaygını)\n* **À LA** (À + La): Dişi sporlar için\n* **AUX** (À + Les): Çoğul oyunlar için",
            examples: [
                { fr: "Je joue au football.", tr: "Futbol oynuyorum. (Top var, erkek)" },
                { fr: "Je joue aux échecs.", tr: "Satranç oynuyorum. (Çoğul)" },
                { fr: "Je joue aux jeux vidéo.", tr: "Video oyunları oynuyorum." }
            ]
        },
        {
            id: "fr-a1-hobbies-faire",
            title: "2. Bölüm 2: FAIRE (Yapmak) - 'Ter ve Efor' 🏊‍♂️",
            explanation: "Eğer spor BİREYSELSE, ortada bir top yoksa, amaç vücut geliştirmek, ter atmak veya bir aktivite yapmaksa **FAIRE** fiilini kullanırsın.\n\n**Gramer Kuralı: 'DE' Edatı**\nFaire fiili, 'bundan yapıyorum' mantığıyla **DE** (-den/-dan) edatını alır.\n\n* **DU** (De + Le): Erkek sporlar için\n* **DE LA** (De + La): Dişi sporlar için\n* **DE L'**: Sesli harfle başlayanlar için",
            examples: [
                { fr: "Je fais de la natation.", tr: "Yüzüyorum. (Top yok, bireysel)" },
                { fr: "Je fais du vélo.", tr: "Bisiklet sürüyorum." },
                { fr: "Je fais de l'équitation.", tr: "Ata biniyorum." }
            ]
        },
        {
            id: "fr-a1-hobbies-music",
            title: "3. Bölüm 3: Müzik Aletleri (Kritik İstisna!) 🎻",
            explanation: "Burada işler biraz karışır ama çok havalı bir kuraldır. Müzik aletlerini çalarken **JOUER** fiilini kullanırız AMA edat değişir! Sporda 'À' kullanan Jouer, müzikte **'DE'** kullanır. (Tıpkı Faire gibi).\n\n* **Je joue DU piano.** (Piyano - Erkek)\n* **Je joue DE LA guitare.** (Gitar - Dişi)\n* **Je joue DU violon.** (Keman - Erkek)\n\n**Mantık:** Sporda 'Oyun'a dahil olursun' (à), müzikte 'Enstrüman'dan ses çıkarırsın' (de).",
            examples: [
                { fr: "Je joue du piano.", tr: "Piyano çalıyorum." },
                { fr: "Je joue de la guitare.", tr: "Gitar çalıyorum." }
            ]
        },
        {
            id: "fr-a1-hobbies-summary",
            title: "4. Büyük Özet Tablosu 📊",
            explanation: "Hangi fiili nerede kullanacağını hatırlamak için bu tabloyu kullan:\n\n* **Toplu Sporlar / Oyunlar** → JOUER + AU / AUX (Je joue au football)\n* **Bireysel Sporlar** → FAIRE + DU / DE LA (Je fais du sport)\n* **Müzik Aletleri** → JOUER + DU / DE LA (Je joue du piano)",
            examples: [
                { fr: "Joue au tennis, fais du yoga.", tr: "Tenis oyna, yoga yap." }
            ]
        }
    ]
};

// ===== ÜNİTE 318: HAVA DURUMU =====
const unit318Grammar: UnitGrammar = {
    unitId: 318,
    title: "Hava Durumu (Le Temps)",
    rules: [
        {
            id: "fr-a1-weather-question",
            title: "1. Soru: Hava Nasıl? ❓",
            explanation: "**Soru:** Quel temps fait-il?\n**Okunuşu:** Kel tan fet-il?\n**Anlamı:** Hava nasıl? (Kelime anlamı: Hangi havayı yapıyor?)",
            examples: [
                { fr: "Quel temps fait-il?", tr: "Hava nasıl?" },
                { fr: "Quel temps fait-il à Paris?", tr: "Paris'te hava nasıl?" }
            ]
        },
        {
            id: "fr-a1-weather-ilfait",
            title: "2. Kalıp: 'Il fait...' (Hava ... Yapıyor) ☀️",
            explanation: "En yaygın kullanım budur. Sıfatlarla kullanılır.\n\n**Formül:** Il fait + [Sıfat]\n\n• **Il fait beau** (İl fe bo) → Hava güzel 🌞\n• **Il fait mauvais** (İl fe move) → Hava kötü ⛈️\n• **Il fait chaud** (İl fe şo) → Hava sıcak 🥵\n• **Il fait froid** (İl fe frua) → Hava soğuk 🥶\n• **Il fait gris** (İl fe gri) → Hava kapalı/gri ☁️\n\n💡 **Okunuş İpucu:** Chaud (Sıcak) ve Froid (Soğuk) kelimelerinde sondaki 'D' harfi okunmaz!",
            examples: [
                { fr: "Il fait beau aujourd'hui.", tr: "Bugün hava güzel." },
                { fr: "Il fait très chaud en été.", tr: "Yazın hava çok sıcak." },
                { fr: "Il fait froid en hiver.", tr: "Kışın hava soğuk." }
            ]
        },
        {
            id: "fr-a1-weather-ilya",
            title: "3. Kalıp: 'Il y a...' (... Var) 🌬️",
            explanation: "Havada 'var olan' nesnelerden bahsederken kullanılır. Partitif Artikel (Du, De la) gerekir!\n\n**Formül:** Il y a + [Artikel] + [İsim]\n\n• **Il y a du soleil** (İl ya dü soley) → Güneş var ☀️\n• **Il y a du vent** (İl ya dü van) → Rüzgar var 💨\n• **Il y a des nuages** (İl ya de nüaj) → Bulutlar var ☁️\n• **Il y a du brouillard** (İl ya dü bruiyar) → Sis var 🌫️\n• **Il y a de l'orage** (İl ya dö l'oraj) → Fırtına var ⛈️",
            examples: [
                { fr: "Il y a du soleil.", tr: "Güneş var. (Güneşli)" },
                { fr: "Il y a du vent.", tr: "Rüzgar var. (Rüzgarlı)" },
                { fr: "Il y a des nuages.", tr: "Bulutlar var. (Bulutlu)" }
            ]
        },
        {
            id: "fr-a1-weather-special",
            title: "4. Özel Fiiller: Yağmur ve Kar ☔❄️",
            explanation: "Bu iki doğa olayının kendilerine ait özel fiilleri vardır.\n\n**Yağmur Yağıyor:**\n• **Il pleut** (İl plö) - Fiil: Pleuvoir\n\n**Kar Yağıyor:**\n• **Il neige** (İl nej) - Fiil: Neiger\n\n⚠️ Bu fiiller sadece 'Il' ile kullanılır!",
            examples: [
                { fr: "Il pleut.", tr: "Yağmur yağıyor." },
                { fr: "Il neige.", tr: "Kar yağıyor." },
                { fr: "Il pleut beaucoup en automne.", tr: "Sonbaharda çok yağmur yağar." }
            ]
        },
        {
            id: "fr-a1-weather-temperature",
            title: "5. Sıcaklık (La Température) 🌡️",
            explanation: "Dereceyi söylerken yine 'Il fait' kullanılır.\n\n**Soru:** Quelle température fait-il?\n**Okunuşu:** Kel tangperatür fet-il?\n\n**Cevap (+):** Il fait 20 degrés. (İl fe ven dögre)\n**Cevap (-):** Il fait moins 5 degrés. (İl fe mua senk dögre)",
            examples: [
                { fr: "Il fait 25 degrés.", tr: "Hava 25 derece." },
                { fr: "Il fait moins 10 degrés.", tr: "Hava eksi 10 derece." },
                { fr: "Quelle température fait-il?", tr: "Sıcaklık kaç derece?" }
            ]
        }
    ]
};

// ===== ÜNİTE 319: DUYGULAR =====
const unit319Grammar: UnitGrammar = {
    unitId: 319,
    title: "Duygular ve Cinsiyet Uyumu",
    rules: [
        {
            id: "fr-a1-etre-reminder",
            title: "1. ÊTRE Fiili (Hatırlatma) 🕯️",
            explanation: "Duygularını anlatmak için önce 'Ben ...-im' demeyi bilmen lazım.\n\n• **Je suis** (Jö süi) → Ben ...-im\n• **Tu es** (Tü e) → Sen ...-sin\n• **Il/Elle est** (İl e / El e) → O ...-dir\n• **Nous sommes** (Nu som) → Biz ...-iz\n• **Vous êtes** (Vu zet - Liaison!) → Siz ...-siniz\n• **Ils/Elles sont** (İl son / El son) → Onlar ...-ler",
            examples: [
                { fr: "Je suis content.", tr: "Ben memnunum." },
                { fr: "Elle est fatiguée.", tr: "O yorgun." },
                { fr: "Nous sommes heureux.", tr: "Biz mutluyuz." }
            ]
        },
        {
            id: "fr-a1-feelings-change",
            title: "2. Ses Değişimi Olanlar (Dikkat!) 🔊",
            explanation: "Kadınsan veya bahsettiğin kişi Dişi ise, sıfatın sonuna **-E** eklersin. Bu -E harfi normalde okunmayan sondaki sessiz harfi OKUTUR!\n\n• **Content** (Kontan - T yok) → **Contente** (Kontant - T patlar!)\n• **Prêt** (Pre - T yok) → **Prête** (Pret - T patlar!)\n• **Grand** (Gran - D yok) → **Grande** (Grand - D patlar!)\n• **Surpris** (Sürpri - S yok) → **Surprise** (Sürpriz - S→Z olur!)",
            examples: [
                { fr: "Il est content.", tr: "O memnun (erkek)." },
                { fr: "Elle est contente.", tr: "O memnun (kadın)." },
                { fr: "Je suis surpris / surprise.", tr: "Ben şaşkınım." }
            ]
        },
        {
            id: "fr-a1-feelings-same",
            title: "3. Okunuşu Değişmeyenler ✍️",
            explanation: "Sonu sesliyle bitenlerde -E eklesek bile ses değişmez.\n\n• **Fatigué** (Fatige) → **Fatiguée** (Fatige - Aynı!)\n• **Occupé** (Oküpe) → **Occupée** (Oküpe - Aynı!)\n• **Énervé** (Enerve) → **Énervée** (Enerve - Aynı!)\n• **Désolé** (Dezole) → **Désolée** (Dezole - Aynı!)\n\n💡 Sadece yazılışta bir -E fazla olur!",
            examples: [
                { fr: "Je suis fatigué.", tr: "Ben yorgunum (erkek)." },
                { fr: "Je suis fatiguée.", tr: "Ben yorgunum (kadın)." },
                { fr: "Elle est occupée.", tr: "O meşgul." }
            ]
        },
        {
            id: "fr-a1-feelings-invariable",
            title: "4. Hiç Değişmeyenler (Doğuştan E'li) 😐",
            explanation: "Bu kelimeler zaten -E ile biter. Erkek de olsa kadın da olsa aynısıdır.\n\n• **Malade** (Malad) → Hasta\n• **Triste** (Trist) → Üzgün\n• **Jeune** (Jön) → Genç",
            examples: [
                { fr: "Il est malade.", tr: "O hasta (erkek)." },
                { fr: "Elle est malade.", tr: "O hasta (kadın)." },
                { fr: "Je suis triste.", tr: "Ben üzgünüm." }
            ]
        },
        {
            id: "fr-a1-feelings-angry",
            title: "5. Özel Durum: 'Kızgınım' Demek 😡",
            explanation: "Burada bir tuzak var! 'Kızgın' (Colère) bir isimdir, sıfat değil. Bu yüzden özel kalıp kullanılır.\n\n❌ **Yanlış:** Je suis colère.\n✅ **Doğru:** Je suis **en** colère.\n\n**Okunuşu:** Jö süi an koler. (Ben kızgınım.)",
            examples: [
                { fr: "Je suis en colère.", tr: "Ben kızgınım." },
                { fr: "Il est en colère.", tr: "O kızgın." },
                { fr: "Ne sois pas en colère!", tr: "Kızma!" }
            ]
        },
        {
            id: "fr-a1-feelings-plural",
            title: "6. Çoğul Yapma (Biz / Onlar) 👨‍👩‍👧‍👦",
            explanation: "Eğer 'Biz' veya 'Onlar' diyorsak, sıfatın sonuna **-S** ekleriz.\n\n🎉 **Müjde:** Bu -S harfi ASLA OKUNMAZ! Sadece yazarken dikkat et.\n\n• Nous sommes fatigué**s**. → Nu som fatige.\n• Elles sont contente**s**. → El son kontant.",
            examples: [
                { fr: "Nous sommes fatigués.", tr: "Biz yorgunuz." },
                { fr: "Ils sont contents.", tr: "Onlar memnun (erkekler)." },
                { fr: "Elles sont contentes.", tr: "Onlar memnun (kadınlar)." }
            ]
        }
    ]
};

// ===== ÜNİTE 320: ŞEHİRDE YÖNLER =====
const unit320Grammar: UnitGrammar = {
    unitId: 320,
    title: "Emir Kipi ve Yol Tarifi (L'Impératif)",
    rules: [
        {
            id: "fr-a1-imperative-intro",
            title: "1. Emir Kipi: Özne Yok! 📢",
            explanation: "Türkçede 'Sen gel' demeyiz, 'Gel!' deriz. Fransızcada da aynı!\n\nSadece 3 kişiye emir verebilirsin:\n• **Tu** (Sen) → Arkadaşına\n• **Nous** (Biz) → 'Hadi yapalım' anlamı\n• **Vous** (Siz) → Tanımadığın kişiye (En çok bu!)",
            examples: [
                { fr: "Viens!", tr: "Gel! (Tu)" },
                { fr: "Allons!", tr: "Hadi gidelim! (Nous)" },
                { fr: "Écoutez!", tr: "Dinleyin! (Vous)" }
            ]
        },
        {
            id: "fr-a1-imperative-s-rule",
            title: "2. Altın Kural: 'S' Harfini Çöpe At! 🗑️",
            explanation: "Sonu **-ER** ile biten fiillerde 'Sen' (Tu) şahsına emir verirken sondaki **-S** harfi düşer.\n\n**Écouter (Dinlemek):**\n• Tu → Écoute! (Ekut)\n• Nous → Écoutons! (Ekuton)\n• Vous → Écoutez! (Ekute)\n\n**Regarder (Bakmak):**\n• Tu → Regarde! (Rögard)\n• Vous → Regardez! (Rögarde)",
            examples: [
                { fr: "Écoute!", tr: "Dinle!" },
                { fr: "Regarde!", tr: "Bak!" },
                { fr: "Parle!", tr: "Konuş!" }
            ]
        },
        {
            id: "fr-a1-imperative-aller",
            title: "3. Düzensiz Kral: ALLER (Gitmek) 🚶",
            explanation: "Yol tarifinde en çok kullanacağın fiil! 'Sen' çekimi çok kısa.\n\n• **Tu** → **Va!** (Git!) - Okunuş: Va\n• **Nous** → **Allons!** (Hadi gidelim!) - Okunuş: Alon\n• **Vous** → **Allez!** (Gidin!) - Okunuş: Ale",
            examples: [
                { fr: "Va!", tr: "Git!" },
                { fr: "Allons-y!", tr: "Hadi gidelim!" },
                { fr: "Allez tout droit.", tr: "Dümdüz gidin." }
            ]
        },
        {
            id: "fr-a1-directions-vocab",
            title: "4. GPS Modu: Yön Kelimeleri 🧭",
            explanation: "Paris sokaklarında kaybolmamak için bunları ezberle!\n\n• **À droite** (A druat) → Sağ\n• **À gauche** (A goş) → Sol\n• **Tout droit** (Tu drua) → Dümdüz\n\n⚠️ **Dikkat:**\n• À droi**te** (T sesi çıkar) → Sağa\n• Tout droi**t** (T sesi çıkmaz) → Dümdüz",
            examples: [
                { fr: "Tournez à droite.", tr: "Sağa dönün." },
                { fr: "Tournez à gauche.", tr: "Sola dönün." },
                { fr: "Continuez tout droit.", tr: "Dümdüz devam edin." }
            ]
        },
        {
            id: "fr-a1-directions-verbs",
            title: "5. Yol Tarifi Fiilleri (Vous) 🚦",
            explanation: "Tanımadığımız insanlara yol tarif ettiğimiz için **Vous** kullanırız.\n\n**Tourner (Dönmek):**\n• Tournez à droite. (Turne a druat)\n• Tournez à gauche. (Turne a goş)\n\n**Continuer (Devam Etmek):**\n• Continuez tout droit. (Kontinüye tu drua)\n\n**Prendre (Almak):**\n• Prenez la première rue. (Pröne la prömiyer rü)",
            examples: [
                { fr: "Tournez à droite.", tr: "Sağa dönün." },
                { fr: "Continuez tout droit.", tr: "Dümdüz devam edin." },
                { fr: "Prenez la première rue.", tr: "Birinci sokağa girin." }
            ]
        },
        {
            id: "fr-a1-imperative-negative",
            title: "6. Olumsuz Emir (Yapma!) 🚫",
            explanation: "Emir verirken 'Yapma' demek için **Ne... pas** kalıbını fiilin iki yanına koyarız.\n\n• Regarde! → **Ne** regarde **pas**! (Bakma!)\n• Tournez! → **Ne** tournez **pas**! (Dönmeyin!)\n• Va! → **Ne** va **pas**! (Gitme!)",
            examples: [
                { fr: "Ne regarde pas!", tr: "Bakma!" },
                { fr: "Ne tournez pas!", tr: "Dönmeyin!" },
                { fr: "N'allez pas là-bas!", tr: "Oraya gitmeyin!" }
            ]
        }
    ]
};

// ===== ÜNİTE 321: ULAŞIM =====
const unit321Grammar: UnitGrammar = {
    unitId: 321,
    title: "Prendre Fiili ve Ulaşım",
    rules: [
        {
            id: "fr-a1-prendre-conjugation",
            title: "1. Motoru Çalıştır: Prendre Çekimi ⚙️",
            explanation: "Bu fiilde kök sürekli değişir! Ses farkına dikkat et.\n\n• **Je prends** (Jö pran) - D ve S okunmaz\n• **Tu prends** (Tü pran) - Aynı\n• **Il/Elle prend** (İl pran) - D okunmaz\n• **Nous prenons** (Nu prönon) - D düştü!\n• **Vous prenez** (Vu pröne) - D düştü!\n• **Ils prennent** (İl pren) - Çift N, E sesi açıldı!\n\n💡 **Polyglot Uyarısı:**\n• Tekiller: **Pran** (Genizden A)\n• Onlar: **Pren** (Net E, 'Pen' gibi)",
            examples: [
                { fr: "Je prends le bus.", tr: "Otobüse biniyorum." },
                { fr: "Nous prenons le métro.", tr: "Metroya biniyoruz." },
                { fr: "Ils prennent l'avion.", tr: "Onlar uçağa biniyor." }
            ]
        },
        {
            id: "fr-a1-prendre-article",
            title: "2. Altın Kural: 'LE' ile Kullanılır! 🚍",
            explanation: "**Kritik Fark:**\n• **Giderken** (Aller) → Edat kullanılır: Je vais **en** bus.\n• **Binerken** (Prendre) → Tanımlık kullanılır: Je prends **le** bus.\n\n**Mantık:** 'Otobüsle gidiyorum' değil, 'Otobüsü alıyorum.'\n\n**Formül:** Prendre + [Le / La / L'] + [Araç]",
            examples: [
                { fr: "Je prends le bus.", tr: "Otobüse biniyorum." },
                { fr: "Je prends la voiture.", tr: "Arabaya biniyorum." },
                { fr: "Je prends l'avion.", tr: "Uçağa biniyorum." }
            ]
        },
        {
            id: "fr-a1-transport-vocab",
            title: "3. Taşıt Sözlüğü (Les Transports) 🎫",
            explanation: "Hangi araca biniyoruz? İşte liste:\n\n🚹 **Erkek (Le):**\n• Le bus (Lö büs) → Otobüs (S okunur!)\n• Le métro (Lö metro) → Metro\n• Le train (Lö tren) → Tren\n• Le taxi (Lö taksi) → Taksi\n• Le vélo (Lö velo) → Bisiklet\n\n🚺 **Dişi (La):**\n• La voiture (La vuatür) → Araba\n\n😲 **Sesli (L'):**\n• L'avion (L'avyon) → Uçak",
            examples: [
                { fr: "Je prends le bus.", tr: "Otobüse biniyorum." },
                { fr: "Elle prend la voiture.", tr: "O arabaya biniyor." },
                { fr: "Nous prenons l'avion.", tr: "Uçağa biniyoruz." }
            ]
        },
        {
            id: "fr-a1-prendre-examples",
            title: "4. Örnek Cümleler (Diyalog) 🗣️",
            explanation: "**Temel Cümleler:**\n• Je prends le bus. (Jö pran lö büs) → Otobüse biniyorum.\n• Nous prenons le métro. (Nu prönon lö metro) → Metroya biniyoruz.\n• Ils prennent l'avion. (İl pren l'avyon) → Onlar uçağa biniyor.\n\n**Emir Kipi:**\n• Prends le taxi! (Pran lö taksi) → Taksiye bin!\n• Prenez le train! (Pröne lö tren) → Trene binin!",
            examples: [
                { fr: "Prends le taxi!", tr: "Taksiye bin!" },
                { fr: "Prenez le train de 8h.", tr: "Saat 8 trenine binin." },
                { fr: "Tu prends quelle ligne?", tr: "Hangi hatta biniyorsun?" }
            ]
        },
        {
            id: "fr-a1-prendre-coffee",
            title: "5. Ekstra: Kahve İçmek İçin de! ☕",
            explanation: "Fransızlar 'Kahve içiyorum' demek yerine genelde 'Kahve alıyorum' derler.\n\n• **Je prends un café.** (Jö pran ön kafe)\n  → Bir kahve alıyorum / içiyorum.\n\n• **Tu prends quoi?** (Tü pran kua?)\n  → Ne alıyorsun? / Ne içeceksin?",
            examples: [
                { fr: "Je prends un café.", tr: "Bir kahve alıyorum." },
                { fr: "Tu prends quoi?", tr: "Ne alıyorsun?" },
                { fr: "Je prends le petit-déjeuner.", tr: "Kahvaltı yapıyorum." }
            ]
        }
    ]
};

// ===== ÜNİTE 322: MEVSİMLER =====
const unit322Grammar: UnitGrammar = {
    unitId: 322,
    title: "Mevsimler ve En/Au Edatları",
    rules: [
        {
            id: "fr-a1-seasons-logic",
            title: "1. Mantık: Neden 'Au' ve 'En'? 🎶",
            explanation: "Fransızcada kural: Dil takılmamalı, yağ gibi akmalı!\n\n• **EN + Sessiz Harf** = Kötü ses. 'En Printemps' dersen (An-Prentan) diye duraksarsın. Bu yüzden **AU** tercih edilir.\n\n• **EN + Sesli Harf** = Liaison (Ulama)! 'En été' dersen N harfi E'ye yapışır: (An-nete). Fransızların çok sevdiği akıcılık!",
            examples: [
                { fr: "Au printemps (O prentan)", tr: "İlkbaharda (akıcı)" },
                { fr: "En été (An-nete)", tr: "Yazın (ulama)" }
            ]
        },
        {
            id: "fr-a1-seasons-article-vs-preposition",
            title: "2. 'Yazı Severim' vs 'Yazın Giderim' ⚠️",
            explanation: "**Durum A: Özne/Nesne olarak** (Yaz güzeldir, Yazı severim...)\n→ Standart artikel kullan: **Le / L'**\n• J'aime l'été. (Jem l'ete) → Yazı severim.\n• Le printemps est joli. → İlkbahar hoştur.\n\n**Durum B: Zaman olarak** (Yazın yüzerim, Kışın kayarım...)\n→ **EN / AU** edatları devreye girer.\n• Je nage **en** été. (Jö naj an nete) → Yazın yüzerim.",
            examples: [
                { fr: "J'aime l'été.", tr: "Yazı severim (Özne)." },
                { fr: "Je nage en été.", tr: "Yazın yüzerim (Zaman)." }
            ]
        },
        {
            id: "fr-a1-seasons-printemps",
            title: "3. 🌸 LE PRINTEMPS (İlkbahar) - İstisna Kralı",
            explanation: "**Aylar:** Mars (Mart), Avril (Nisan), Mai (Mayıs)\n\n**Kural:** Sessiz harfle (P) başladığı için **AU** alır.\n\n**Okunuş:** Prentan (-temps kısmındaki P ve S okunmaz!)\n\n• Tout est vert **au** printemps.\n  (Tu te ver o prentan) → İlkbaharda her yer yeşildir.",
            examples: [
                { fr: "Au printemps", tr: "İlkbaharda" },
                { fr: "Les fleurs s'ouvrent au printemps.", tr: "Çiçekler ilkbaharda açar." }
            ]
        },
        {
            id: "fr-a1-seasons-ete",
            title: "4. ☀️ L'ÉTÉ (Yaz) - Ulama Kralı",
            explanation: "**Aylar:** Juin (Haziran), Juillet (Temmuz), Août (Ağustos)\n\n**Kural:** Sesliyle başladığı için **EN** alır. Liaison şart!\n\n**Okunuş:** 'En été' derken iki N varmış gibi bastır: (An-nete)\n\n• Nous allons en vacances **en** été.\n  (Nu zalon an vakans an nete) → Yazın tatile gideriz.",
            examples: [
                { fr: "En été", tr: "Yazın" },
                { fr: "Il fait chaud en été.", tr: "Yazın hava sıcak." }
            ]
        },
        {
            id: "fr-a1-seasons-automne",
            title: "5. 🍂 L'AUTOMNE (Sonbahar) - M Harfi Yutan",
            explanation: "**Aylar:** Septembre (Eylül), Octobre (Ekim), Novembre (Kasım)\n\n**Kural:** Sesliyle başladığı için **EN** alır.\n\n**Okunuş:** Automne'daki M harfi okunmaz! 'Otomn' değil, **'Oton'** de.\n\n• Les feuilles sont marron **en** automne.\n  (Le föy son maron an noton) → Sonbaharda yapraklar kahverengi.",
            examples: [
                { fr: "En automne", tr: "Sonbaharda" },
                { fr: "Il pleut en automne.", tr: "Sonbaharda yağmur yağar." }
            ]
        },
        {
            id: "fr-a1-seasons-hiver",
            title: "6. ❄️ L'HIVER (Kış) - Sessiz H",
            explanation: "**Aylar:** Décembre (Aralık), Janvier (Ocak), Février (Şubat)\n\n**Kural:** H harfi yok sayılır, İ ile başlar kabul edilir. **EN** alır.\n\n**Okunuş:** Ulama yapılır. 'An hiver' değil, **(An niver)**\n\n• Il neige beaucoup **en** hiver.\n  (İl nej boku an niver) → Kışın çok kar yağar.",
            examples: [
                { fr: "En hiver", tr: "Kışın" },
                { fr: "Il fait froid en hiver.", tr: "Kışın hava soğuk." }
            ]
        },
        {
            id: "fr-a1-seasons-from-to",
            title: "7. '...-dan ...-a kadar' (De... à...) ↔️",
            explanation: "Süreç belirtirken edatlar değişir!\n\n• **İlkbahar için:** Du (De + Le birleşimi)\n• **Diğerleri için:** De l' (De + L' birleşimi)\n\n• Je travaille **du** printemps **à l'**été.\n  (Jö travay dü prentan a l'ete)\n  → İlkbahardan yaza kadar çalışıyorum.",
            examples: [
                { fr: "Du printemps à l'été", tr: "İlkbahardan yaza" },
                { fr: "De l'automne à l'hiver", tr: "Sonbahardan kışa" }
            ]
        }
    ]
};

// ===== ÜNİTE 323: GELECEK ZAMAN (YAKIN) =====
const unit323Grammar: UnitGrammar = {
    unitId: 323,
    title: "Futur Proche (Yakın Gelecek)",
    rules: [
        {
            id: "fr-a1-futur-aller",
            title: "1. Motoru Çalıştır: Aller Fiili ⚙️",
            explanation: "Önce 'Aller' fiilinin şimdiki zamanını ezbere bilmelisin. Bu fiil burada 'gitmek' değil, '-cek/-cak' eki olarak çalışır.\n\n• **Je vais** (Ve) → ...-ceğim\n• **Tu vas** (Va) → ...-ceksin\n• **Il/Elle va** (Va) → ...-cek\n• **Nous allons** (Nu zalon) → ...-ceğiz\n• **Vous allez** (Vu zale) → ...-ceksiniz\n• **Ils/Elles vont** (Von) → ...-cekler\n\n💡 **Dikkat:** Nous ve Vous çekimlerinde **Liaison** (Ulama) yapılır! Z sesi çıkar.",
            examples: [
                { fr: "Je vais", tr: "...-ceğim" },
                { fr: "Nous allons (Nu zalon)", tr: "...-ceğiz (Ulama!)" }
            ]
        },
        {
            id: "fr-a1-futur-formula",
            title: "2. Formül (Kopyala Yapıştır) 📝",
            explanation: "Dünyanın en basit formülü:\n\n**ALLER Çekimi + MASTAR FİİL**\n\nMastar fiil: Sözlükteki ham hali (Sonu -ER, -IR, -RE). Hiç dokunmuyoruz!\n\n• **Parler:** Je vais parler. (Jö ve parle) → Konuşacağım.\n• **Manger:** Tu vas manger. (Tü va manje) → Yiyeceksin.\n• **Finir:** Nous allons finir. (Nu zalon finir) → Bitireceğiz.\n• **Dormir:** Ils vont dormir. (İl von dormir) → Uyuyacaklar.",
            examples: [
                { fr: "Je vais parler.", tr: "Konuşacağım." },
                { fr: "Tu vas manger.", tr: "Yiyeceksin." },
                { fr: "Nous allons finir.", tr: "Bitireceğiz." }
            ]
        },
        {
            id: "fr-a1-futur-negative",
            title: "3. Olumsuz Yapı: Sandviç Kuralı 🥪",
            explanation: "**Dikkat!** 'Ne... Pas' ekleri ana fiili değil, yardımcı fiili (Aller) sarar. Ana fiil dışarıda kalır.\n\n**Formül:** Je + **NE** + VAIS + **PAS** + PARLER\n\n✅ **Olumlu:** Je vais regarder. (İzleyeceğim.)\n❌ **Olumsuz:** Je **ne** vais **pas** regarder. (İzlemeyeceğim.)\n\n✅ **Olumlu:** Il va venir. (Gelecek.)\n❌ **Olumsuz:** Il **ne** va **pas** venir. (Gelmeyecek.)",
            examples: [
                { fr: "Je ne vais pas regarder.", tr: "İzlemeyeceğim." },
                { fr: "Il ne va pas venir.", tr: "Gelmeyecek." },
                { fr: "Nous n'allons pas partir.", tr: "Gitmeyeceğiz." }
            ]
        },
        {
            id: "fr-a1-futur-reflexive",
            title: "4. Dönüşlü Fiiller (Tuzak!) 🪞",
            explanation: "'Yıkanacağım' veya 'Uyanacağım' derken, ayna zamiri (me, te, se) **iki fiilin arasına** girer.\n\n• **Se lever (Kalkmak):**\n  Je vais **me** lever. (Jö ve mö löve) → Kalkacağım.\n\n• **Se reposer (Dinlenmek):**\n  Tu vas **te** reposer. (Tü va tö röpoze) → Dinleneceksin.",
            examples: [
                { fr: "Je vais me lever.", tr: "Kalkacağım." },
                { fr: "Tu vas te reposer.", tr: "Dinleneceksin." },
                { fr: "Elle va se maquiller.", tr: "Makyaj yapacak." }
            ]
        },
        {
            id: "fr-a1-futur-time",
            title: "5. Gelecek Zaman Kelimeleri ⏳",
            explanation: "Cümlenin sonuna bu kelimeleri eklersen tam bir Fransız olursun!\n\n• **Demain** (Dömen) → Yarın\n• **Ce soir** (Sö suar) → Bu akşam\n• **Bientôt** (Biyento) → Yakında / Birazdan\n• **Plus tard** (Plü tar) → Daha sonra\n• **Dans 5 minutes** (Dan senk minüt) → 5 dakika içinde",
            examples: [
                { fr: "Je vais partir demain.", tr: "Yarın gideceğim." },
                { fr: "Il va arriver bientôt.", tr: "Yakında gelecek." },
                { fr: "Nous allons manger ce soir.", tr: "Bu akşam yiyeceğiz." }
            ]
        }
    ]
};

// ===== ÜNİTE 324: GEÇMİŞ ZAMAN (GİRİŞ) =====
const unit324Grammar: UnitGrammar = {
    unitId: 324,
    title: "Passé Composé (Geçmiş Zaman)",
    rules: [
        {
            id: "fr-a1-passe-avoir",
            title: "1. Parça: Motor (Avoir Fiili) ⚙️",
            explanation: "Cümlenin başında, eylemi kimin yaptığını belirten **Avoir** fiilini şimdiki zamanda çekimleriz.\n\n• **J'ai** (Je) → ...-dim\n• **Tu as** (Tü a) → ...-din\n• **Il/Elle a** (İl a / El a) → ...-di\n• **Nous avons** (Nu zavon) → ...-dik (Ulama!)\n• **Vous avez** (Vu zave) → ...-diniz (Ulama!)\n• **Ils/Elles ont** (İl zon) → ...-diler (Ulama!)",
            examples: [
                { fr: "J'ai...", tr: "Ben ...-dim" },
                { fr: "Nous avons (Nu zavon)", tr: "Biz ...-dik (Ulama!)" }
            ]
        },
        {
            id: "fr-a1-passe-participe",
            title: "2. Parça: Vagon (Participe Passé) 🚃",
            explanation: "Ana eylemi geçmiş zamana çevirip motorun arkasına takıyoruz.\n\n**Kural (Düzenli -ER Fiilleri):**\nFiilin sonundaki -ER'yi at, yerine **-É** koy.\n\n• **Manger** → Mang**é** (Yedi) - Okunuş: Manje\n• **Parler** → Parl**é** (Konuştu) - Okunuş: Parle\n• **Regarder** → Regard**é** (İzledi) - Okunuş: Rögarde\n\n🎉 **Müthiş Haber:** Manger ve Mangé okunuşları AYNIDIR!",
            examples: [
                { fr: "Manger → Mangé", tr: "Yemek → Yedi" },
                { fr: "Parler → Parlé", tr: "Konuşmak → Konuştu" }
            ]
        },
        {
            id: "fr-a1-passe-combine",
            title: "3. Birleştirme: Cümle Kurma 🧩",
            explanation: "Hadi motoru ve vagonu birleştirelim!\n\n• **J'ai mangé.** (Je manje) → Ben yedim.\n• **Tu as parlé.** (Tü a parle) → Sen konuştun.\n• **Nous avons joué au football.** (Nu zavon juye o futbol) → Biz futbol oynadık.\n• **Elles ont travaillé.** (El zon travaye) → Onlar (kızlar) çalıştı.",
            examples: [
                { fr: "J'ai mangé.", tr: "Yedim." },
                { fr: "Tu as parlé.", tr: "Konuştun." },
                { fr: "Nous avons joué.", tr: "Oynadık." }
            ]
        },
        {
            id: "fr-a1-passe-negative",
            title: "4. Olumsuz Yapı: Motoru Kuşat! 🛡️",
            explanation: "'Yemedim' demek için **ne...pas** kalıbı, sadece ve sadece yardımcı fiili (Avoir) içine alır. Vagon dışarıda kalır.\n\n**Formül:** Je + **N'** + AI + **PAS** + MANGÉ\n\n✅ J'ai mangé. → Yedim.\n❌ Je **n'ai pas** mangé. → Yemedim.\n\n**Okunuş:** Jö ne pa manje.",
            examples: [
                { fr: "Je n'ai pas mangé.", tr: "Yemedim." },
                { fr: "Tu n'as pas écouté.", tr: "Dinlemedin." },
                { fr: "Il n'a pas travaillé.", tr: "Çalışmadı." }
            ]
        },
        {
            id: "fr-a1-passe-irregular",
            title: "5. Düzensiz Ama Çok Lazım! 🚨",
            explanation: "Sonu -ER ile bitmeyen bazı fiillerin geçmiş halleri (Vagonları) şekil değiştirir.\n\n• **Faire** (Yapmak) → **Fait** (Fe)\n  J'ai fait du sport. → Spor yaptım.\n\n• **Boire** (İçmek) → **Bu** (Bü)\n  J'ai bu de l'eau. → Su içtim.\n\n• **Voir** (Görmek) → **Vu** (Vü)\n  J'ai vu un film. → Film izledim.",
            examples: [
                { fr: "J'ai fait du sport.", tr: "Spor yaptım." },
                { fr: "J'ai bu de l'eau.", tr: "Su içtim." },
                { fr: "J'ai vu un film.", tr: "Film izledim." }
            ]
        }
    ]
};

// ===== ÜNİTE 325: ALIŞVERİŞ =====
const unit325Grammar: UnitGrammar = {
    unitId: 325,
    title: "Fiyat ve Miktar Sorma (Combien)",
    rules: [
        {
            id: "fr-a1-combien-price",
            title: "1. Fiyat Sorma (Ne Kadar?) 🏷️",
            explanation: "Bir şeyin fiyatını sorarken **Coûter** (Mal olmak / Tutmak) fiilini kullanırız.\n\n**Soru Kalıbı 1 (Resmi):**\n• Combien ça coûte? (Kombiyen sa kut?) → Bu ne kadar tutuyor?\n\n**Soru Kalıbı 2 (Kısa & Sokak Ağzı):**\n• C'est combien? (Se kombiyen?) → Bu ne kadar? / Kaç para?",
            examples: [
                { fr: "Combien ça coûte?", tr: "Bu ne kadar tutuyor?" },
                { fr: "C'est combien?", tr: "Bu ne kadar?" },
                { fr: "Ça fait combien?", tr: "Toplam ne kadar?" }
            ]
        },
        {
            id: "fr-a1-combien-quantity",
            title: "2. Altın Kural: Miktar Sorma (Kaç Tane?) 🔢",
            explanation: "İşte öğrencilerin en çok hata yaptığı yer! 🚨\n\n**Formül:** Combien + **DE** + [İsim]\n\n⚠️ **ÇOK ÖNEMLİ:** Buradaki DE asla Des, Du, De la olmaz!\nİsim çoğul olsa bile aradaki edat hep **DE** kalır.\n\n❌ **Yanlış:** Combien des frères?\n✅ **Doğru:** Combien **de** frères?",
            examples: [
                { fr: "Combien de frères as-tu?", tr: "Kaç kardeşin var?" },
                { fr: "Combien de pommes voulez-vous?", tr: "Kaç elma istiyorsunuz?" },
                { fr: "Combien de temps?", tr: "Ne kadar zaman?" }
            ]
        },
        {
            id: "fr-a1-combien-elision",
            title: "3. Sesli Harf Çarpışması (D') 💥",
            explanation: "Eğer Combien **de** kalıbından sonra gelen kelime sesliyle başlıyorsa, DE düşer ve **D'** olur.\n\n• Combien **d'**argent as-tu? (Kombiyen darjan a-tü?) → Ne kadar paran var?\n\n• Combien **d'**élèves il y a? (Kombiyen delev il ya?) → Kaç öğrenci var?\n\n• Combien **d'**amis as-tu? (Kombiyen dami a-tü?) → Kaç arkadaşın var?",
            examples: [
                { fr: "Combien d'argent?", tr: "Ne kadar para?" },
                { fr: "Combien d'élèves?", tr: "Kaç öğrenci?" },
                { fr: "Combien d'amis?", tr: "Kaç arkadaş?" }
            ]
        },
        {
            id: "fr-a1-combien-summary",
            title: "4. Özet Tablo 📊",
            explanation: "**Fiyat Sorma:**\n• C'est combien? (Se kombiyen?) → Bu ne kadar?\n\n**Adet Sorma (Sessiz harfle):**\n• Combien **de** livres? (Kombiyen dö livr?) → Kaç kitap?\n\n**Adet Sorma (Sesli harfle):**\n• Combien **d'**amis? (Kombiyen dami?) → Kaç arkadaş?",
            examples: [
                { fr: "C'est combien, le café?", tr: "Kahve ne kadar?" },
                { fr: "Combien de kilos?", tr: "Kaç kilo?" },
                { fr: "Combien d'heures?", tr: "Kaç saat?" }
            ]
        }
    ]
};

// ===== ÜNİTE 326: RESTORAN =====
const unit326Grammar: UnitGrammar = {
    unitId: 326,
    title: "Restoranda (Au Restaurant)",
    rules: [
        {
            id: "fr-a1-restaurant-table",
            title: "1. Giriş: Masa İstemek 🪑",
            explanation: "Kapıdan girdin. Direkt boş masaya oturma! Bekle ve garsonla göz teması kur.\n\n**Cümle:**\n• Bonjour, une table pour deux personnes, s'il vous plaît.\n• (Bonjur, ün tabl pur dö person, sil vu ple.)\n• → Merhaba, iki kişilik bir masa lütfen.",
            examples: [
                { fr: "Une table pour deux, s'il vous plaît.", tr: "İki kişilik masa lütfen." },
                { fr: "Vous avez une table libre?", tr: "Boş masanız var mı?" }
            ]
        },
        {
            id: "fr-a1-restaurant-please",
            title: "2. Sihirli Kelime: S'il vous plaît 🙏",
            explanation: "Bu kelimeyi cümlenin başına, sonuna, ortasına... Her yerine koy! Nefes almak gibi kullanmalısın.\n\n**S'il vous plaît** (Sizli bizli / Resmi)\n**Okunuşu:** Sil vu ple.",
            examples: [
                { fr: "Le menu, s'il vous plaît.", tr: "Menü lütfen." },
                { fr: "S'il vous plaît, monsieur!", tr: "Lütfen, bayım!" }
            ]
        },
        {
            id: "fr-a1-restaurant-order",
            title: "3. Sipariş Verme: 'İstiyorum' Deme! ⛔",
            explanation: "Daha önce öğrendiğimiz 'Je veux' (İstiyorum) kalıbını burada çöpe atıyoruz. Çok kaba kaçar!\n\n**A. Je voudrais...** (İsterdim / Rica ediyorum)\n• Je voudrais le menu, s'il vous plaît.\n• (Jö vudre lö mönü, sil vu ple.)\n\n**B. Je vais prendre...** (...Alacağım)\n• Je vais prendre le poulet.\n• (Jö ve pran lö pule.)",
            examples: [
                { fr: "Je voudrais un café.", tr: "Bir kahve rica ediyorum." },
                { fr: "Je vais prendre le steak.", tr: "Biftek alacağım." }
            ]
        },
        {
            id: "fr-a1-restaurant-menu",
            title: "4. Menu vs Carte (Turist Tuzağı!) 📜",
            explanation: "Burada kafalar karışabilir:\n\n**La Carte** (La kart):\n→ İçinde her şeyin yazdığı koca liste. (Bizim bildiğimiz Menü)\n\n**Le Menu** (Lö mönü):\n→ 'Fiks Menü' demektir. (Çorba + Ana Yemek + Tatlı paketi). Daha ucuzdur!",
            examples: [
                { fr: "La carte, s'il vous plaît.", tr: "Menüyü getirir misiniz?" },
                { fr: "C'est quoi le menu du jour?", tr: "Günün menüsü ne?" }
            ]
        },
        {
            id: "fr-a1-restaurant-waiter",
            title: "5. Garsona Seslenmek (ASLA YAPMA! 🚫)",
            explanation: "Filmlerdeki gibi parmağını şıklatıp 'Garçon!' diye bağırma. Bu çok aşağılayıcı kabul edilir.\n\n**Erkek Garsona:**\n• Monsieur! (Mösyö) veya Excusez-moi? (Eksküze mua?)\n\n**Kadın Garsona:**\n• Madame! (Madam)",
            examples: [
                { fr: "Excusez-moi, monsieur!", tr: "Affedersiniz, bayım!" },
                { fr: "Pardon, madame!", tr: "Pardon, hanımefendi!" }
            ]
        },
        {
            id: "fr-a1-restaurant-water",
            title: "6. Su ve Ekmek (Hayat Kurtarıcılar) 🥖💧",
            explanation: "Fransa'da masaya sürahiyle su (musluk suyu ama içilebilir ve ücretsizdir) istersen:\n\n• **Une carafe d'eau, s'il vous plaît.**\n  (Ün karaf do, sil vu ple.) → Bir sürahi su lütfen.\n\n• **Du pain, s'il vous plaît.**\n  (Dü pen, sil vu ple.) → Ekmek lütfen.",
            examples: [
                { fr: "Une carafe d'eau, s'il vous plaît.", tr: "Bir sürahi su lütfen." },
                { fr: "Du pain, s'il vous plaît.", tr: "Ekmek lütfen." }
            ]
        },
        {
            id: "fr-a1-restaurant-bill",
            title: "7. Hesap ve Veda 💸👋",
            explanation: "Yemeği bitirdin. Hesabı isteme vakti.\n\n• **L'addition, s'il vous plaît.** (Ladisyon, sil vu ple.) → Hesap lütfen.\n\n• **C'était très bon!** (Sete tre bon!) → Çok güzeldi!\n\n• **Merci, au revoir!** (Mersi, o rövuar!) → Teşekkürler, hoşça kalın!",
            examples: [
                { fr: "L'addition, s'il vous plaît.", tr: "Hesap lütfen." },
                { fr: "C'était délicieux!", tr: "Lezizdi!" },
                { fr: "Merci, au revoir!", tr: "Teşekkürler, hoşça kalın!" }
            ]
        }
    ]
};

// ===== ÜNİTE 327: KARŞILAŞTIRMA =====
const unit327Grammar: UnitGrammar = {
    unitId: 327,
    title: "Karşılaştırma (Le Comparatif)",
    rules: [
        {
            id: "fr-a1-comparatif-basics",
            title: "1. Üç Temel Kalıp 📏",
            explanation: "Sıfatın önüne ne koyacağına karar ver:\n\n• **Daha fazla (+):** Plus ... que (Plü ... kö)\n• **Daha az (-):** Moins ... que (Muan ... kö)\n• **Eşit (=):** Aussi ... que (Osi ... kö)",
            examples: [
                { fr: "Plus grand que", tr: "...-den daha büyük" },
                { fr: "Moins cher que", tr: "...-den daha ucuz" },
                { fr: "Aussi beau que", tr: "... kadar güzel" }
            ]
        },
        {
            id: "fr-a1-comparatif-sentences",
            title: "2. Cümle Kurma Formülü 🏗️",
            explanation: "**Formül:** A + ÊTRE + PLUS/MOINS + SIFAT + QUE + B\n\n• **PLUS:** Pierre est **plus grand que** Marie.\n  (Pierre e plü gran kö Mari) → Pierre, Marie'den daha uzundur.\n\n• **MOINS:** Le bus est **moins rapide que** le métro.\n  (Lö büs e muan rapid kö lö metro) → Otobüs metrodan daha yavaştır (az hızlıdır).\n\n• **AUSSI:** Je suis **aussi fatigué que** toi.\n  (Jö süi osi fatige kö tua) → Ben senin kadar yorgunum.",
            examples: [
                { fr: "La Ferrari est plus chère.", tr: "Ferrari daha pahalıdır." },
                { fr: "Le bus est moins rapide.", tr: "Otobüs daha yavaştır." }
            ]
        },
        {
            id: "fr-a1-comparatif-meilleur",
            title: "3. Ölümcül Hata: 'Daha İyi' (Meilleur) 🚨",
            explanation: "İngilizcede 'Gooder' denmez, 'Better' denir. Fransızcada da 'Plus Bon' DEMEK YASAKTIR!\n\n❌ **Yanlış:** Le chocolat est ~~plus bon~~.\n✅ **Doğru:** Le chocolat est **meilleur**.\n\n**Örnek:** Messi est meilleur que Ronaldo.\n(Messi e meyyör kö Ronaldo)",
            examples: [
                { fr: "C'est meilleur!", tr: "Bu daha iyi!" },
                { fr: "Il est meilleur que moi.", tr: "O benden daha iyi." }
            ]
        },
        {
            id: "fr-a1-comparatif-pronouns",
            title: "4. Vurgu Zamirleri (Toi, Moi...) 👉",
            explanation: "'Que' kelimesinden sonra şahıs zamiri (Je, Tu, Il) gelmez! **Tonlamalı Zamirler** gelir.\n\n❌ Plus grand que ~~je~~\n✅ Plus grand que **MOI** (Benden)\n\n• Que **moi** (Benden)\n• Que **toi** (Senden)\n• Que **lui** (Ondan - Erkek)\n• Que **nous** (Bizden)",
            examples: [
                { fr: "Plus grand que moi.", tr: "Benden daha büyük." },
                { fr: "Plus rapide que toi.", tr: "Senden daha hızlı." },
                { fr: "Meilleur que lui.", tr: "Ondan daha iyi." }
            ]
        }
    ]
};

// ===== ÜNİTE 328: HAYVANLAR =====
const unit328Grammar: UnitGrammar = {
    unitId: 328,
    title: "Hayvanlar ve Cinsiyet Kuralı",
    rules: [
        {
            id: "fr-a1-animals-pets",
            title: "1. Evcil Hayvanlar (Les Animaux de Compagnie) 🏠",
            explanation: "Evinin neşesi olanlar. Çoğu 'Erkek' (Le) olarak kullanılır.\n\n• **Le Chien** (Lö şiyan) → Köpek\n• **Le Chat** (Lö şa) → Kedi (T okunmaz!)\n• **L'Oiseau** (Luazo) → Kuş\n• **Le Poisson** (Lö puason) → Balık\n• **Le Lapin** (Lö lapen) → Tavşan",
            examples: [
                { fr: "J'ai un chien.", tr: "Bir köpeğim var." },
                { fr: "Le chat dort.", tr: "Kedi uyuyor." },
                { fr: "L'oiseau chante.", tr: "Kuş ötüyor." }
            ]
        },
        {
            id: "fr-a1-animals-farm",
            title: "2. Çiftlik Hayvanları (La Ferme) 🚜",
            explanation: "Burada dişi kelimeler devreye giriyor.\n\n• **La Vache** (La vaş) → İnek 🐮\n• **Le Cheval** (Lö şöval) → At\n• **Le Mouton** (Lö muton) → Koyun\n• **La Poule** (La pul) → Tavuk\n• **Le Canard** (Lö kanar) → Ördek (D okunmaz)",
            examples: [
                { fr: "La vache mange.", tr: "İnek yemek yiyor." },
                { fr: "Le cheval court.", tr: "At koşuyor." }
            ]
        },
        {
            id: "fr-a1-animals-wild",
            title: "3. Vahşi Hayvanlar (Les Animaux Sauvages) 🦁",
            explanation: "Ormanın kralları.\n\n• **Le Lion** (Lö liyon) → Aslan\n• **Le Tigre** (Lö tigr) → Kaplan\n• **L'Éléphant** (Lelefan) → Fil (T okunmaz)\n• **L'Ours** (Lurs) → Ayı (S okunur!)\n• **La Souris** (La suri) → Fare (S okunmaz)\n• **Le Singe** (Lö senj) → Maymun",
            examples: [
                { fr: "Le lion est fort.", tr: "Aslan güçlüdür." },
                { fr: "L'ours est grand.", tr: "Ayı büyüktür." }
            ]
        },
        {
            id: "fr-a1-animals-gender-fixed",
            title: "4. Kritik Kural: Cinsiyet Sabittir! ⚠️",
            explanation: "Öğrencilerin kafasını karıştıran yer: Mickey Mouse bir erkektir ama Fransızcada 'Fare' kelimesi dişidir (**La souris**).\n\nBu yüzden Mickey Mouse için bile **'C'est une souris'** (O bir faredir) deriz. 'Un souris' diyemeyiz.\n\nGramer biyolojiyi döver! 🥊\n• **La girafe** (Zürafa) → Erkek olsa da 'La'\n• **La grenouille** (Kurbağa) → Erkek olsa da 'La'",
            examples: [
                { fr: "C'est une souris.", tr: "Bu bir fare." },
                { fr: "La girafe est haute.", tr: "Zürafa uzundur." }
            ]
        },
        {
            id: "fr-a1-animals-gender-special",
            title: "5. Özel Durum: Kedi ve Köpek 🐶🐱",
            explanation: "Sadece kedi ve köpek için cinsiyet ayrımı sık yapılır:\n\n**Kedi:**\n• Erkek: **Le Chat** (Lö şa)\n• Dişi: **La Chatte** (La şat - T okunur!)\n\n**Köpek:**\n• Erkek: **Le Chien** (Lö şiyan)\n• Dişi: **La Chienne** (La şiyenn - N vurgulu!)",
            examples: [
                { fr: "C'est une chienne.", tr: "Bu bir dişi köpek." },
                { fr: "Ma chatte est mignonne.", tr: "Dişi kedim tatlıdır." }
            ]
        }
    ]
};

// ===== ÜNİTE 329: TEKNOLOJİ =====
const unit329Grammar: UnitGrammar = {
    unitId: 329,
    title: "Amaç Bildirme: Pour + Mastar",
    rules: [
        {
            id: "fr-a1-pour-basic",
            title: "1. Formül: Amaç Bildirmek 🏗️",
            explanation: "Cümleyi ikiye bölüyoruz. İlk kısımda eylemi yapıyoruz, ikinci kısımda amacımızı söylüyoruz.\n\n**Formül:** [Ana Cümle] + **POUR** + [Mastar Fiil]\n\n**Hatırlatma:** Mastar Fiil (Infinitif) neydi? Sonu -ER, -IR, -RE ile biten, hiç ellenmemiş fiil.",
            examples: [
                { fr: "Je travaille pour gagner.", tr: "Kazanmak için çalışıyorum." },
                { fr: "Il court pour maigrir.", tr: "Zayıflamak için koşuyor." }
            ]
        },
        {
            id: "fr-a1-pour-examples",
            title: "2. Örneklerle Analiz 🧐",
            explanation: "**Markete Gitmek:**\n• Je vais au supermarché **pour acheter** du pain.\n  (Jö ve o süpermarşe pur aşete dü pen) → Ekmek almak için markete gidiyorum.\n\n**Ders Çalışmak:**\n• J'étudie **pour apprendre** le français.\n  (Jetüdi pur aprandr lö franse) → Fransızca öğrenmek için çalışıyorum.\n\n**Uyumak:**\n• Je dors **pour me reposer**.\n  (Jö dor pur mö röpoze) → Dinlenmek için uyuyorum.",
            examples: [
                { fr: "Je vais au supermarché pour acheter du pain.", tr: "Ekmek almak için markete gidiyorum." },
                { fr: "J'étudie pour apprendre.", tr: "Öğrenmek için çalışıyorum." },
                { fr: "Je dors pour me reposer.", tr: "Dinlenmek için uyuyorum." }
            ]
        },
        {
            id: "fr-a1-pour-verbs",
            title: "3. Çok Kullanılan 'Amaç' Fiilleri 🧰",
            explanation: "'Pour' kelimesinden sonra genelde hep aynı fiiller gelir. Bunları ezberle:\n\n• **Aller:** ... için gitmek\n• **Manger:** ... için yemek\n• **Voir:** ... için görmek\n• **Parler:** ... için konuşmak\n• **Visiter:** ... için gezmek\n• **Gagner:** ... için kazanmak",
            examples: [
                { fr: "Je viens pour te voir.", tr: "Seni görmek için geliyorum." },
                { fr: "J'appelle pour parler.", tr: "Konuşmak için arıyorum." }
            ]
        },
        {
            id: "fr-a1-pour-money",
            title: "4. 'Para Kazanmak İçin' 💰",
            explanation: "En popüler cümlelerden biridir!\n\n**Soru:** Pourquoi tu travailles ? (Neden çalışıyorsun?)\n**Cevap:** Je travaille **pour gagner de l'argent**.\n\n**Okunuşu:** Jö travay pur ganye dö larjan.",
            examples: [
                { fr: "Je travaille pour gagner de l'argent.", tr: "Para kazanmak için çalışıyorum." },
                { fr: "Il joue pour gagner.", tr: "Kazanmak için oynuyor." }
            ]
        },
        {
            id: "fr-a1-pour-noun-vs-verb",
            title: "5. Dikkat: İsim mi, Fiil mi? ⚠️",
            explanation: "'Pour' kelimesi İngilizcedeki 'For' gibidir. Hem ismin önüne hem fiilin önüne gelebilir.\n\n**Pour + İsim:** Senin için / Annem için.\n• C'est **pour toi**. (Bu senin için.)\n\n**Pour + Fiil:** Gitmek için / Yapmak için.\n• C'est **pour manger**. (Bu yemek için.)",
            examples: [
                { fr: "C'est pour toi.", tr: "Bu senin için." },
                { fr: "C'est pour manger.", tr: "Bu yemek için." }
            ]
        },
        {
            id: "fr-a1-pour-negative",
            title: "6. Olumsuz Amaç (Yapmamak İçin) 🚫",
            explanation: "Bir şeyi yapmamak için çabalıyorsan (Gecikmemek için, unutmamak için), **'Pour NE PAS'** kalıbı kullanılır.\n\nBurada 'Ne' ve 'Pas' ayrılmaz, yapışık ikiz gibi fiilin önüne gelir.\n\n• Je cours **pour ne pas** être en retard.\n  (Jö kur pur nö pa zetr an rötar) → Gecikmemek için koşuyorum.",
            examples: [
                { fr: "Pour ne pas oublier.", tr: "Unutmamak için." },
                { fr: "Pour ne pas tomber.", tr: "Düşmemek için." }
            ]
        }
    ]
};


// ===== ÜNİTE 330: GENEL TEKRAR =====
const unit330Grammar: UnitGrammar = {
    unitId: 330,
    title: "A1 Dilbilgisi Özeti",
    rules: [
        {
            id: "fr-a1-review-verbs",
            title: "🔄 Fiil Çekimleri Özeti",
            explanation: "A1 seviyesinde öğrendiğimiz en önemli 4 fiili hatırlayalım:\n\n1. **Être (Olmak):** Je suis, Tu es, Il est...\n2. **Avoir (Sahip Olmak):** J'ai, Tu as, Il a...\n3. **Aller (Gitmek):** Je vais, Tu vas, Il va...\n4. **Faire (Yapmak):** Je fais, Tu fais, Il fait...",
            examples: [
                { fr: "Je suis étudiant.", tr: "Öğrenciyim." },
                { fr: "J'ai un chat.", tr: "Kedim var." },
                { fr: "Je vais à Paris.", tr: "Paris'e gidiyorum." },
                { fr: "Je fais du sport.", tr: "Spor yapıyorum." }
            ]
        }
    ]
};

// Ünite ID'sine göre grammar getir
export function getFrenchA1GrammarForUnit(unitId: number): UnitGrammar | null {
    const grammars: { [key: number]: UnitGrammar } = {
        301: unit301Grammar,
        302: unit302Grammar,
        303: unit303Grammar,
        304: unit304Grammar,
        305: unit305Grammar,
        306: unit306Grammar,
        307: unit307Grammar,
        308: unit308Grammar,
        309: unit309Grammar,
        310: unit310Grammar,
        311: unit311Grammar,
        312: unit312Grammar,
        313: unit313Grammar,
        314: unit314Grammar,
        315: unit315Grammar,
        316: unit316Grammar,
        317: unit317Grammar,
        318: unit318Grammar,
        319: unit319Grammar,
        320: unit320Grammar,
        321: unit321Grammar,
        322: unit322Grammar,
        323: unit323Grammar,
        324: unit324Grammar,
        325: unit325Grammar,
        326: unit326Grammar,
        327: unit327Grammar,
        328: unit328Grammar,
        329: unit329Grammar,
        330: unit330Grammar
    };

    return grammars[unitId] || null;
}

