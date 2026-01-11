
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

// ===== ÜNİTE 309: YER EDATLARI =====
const unit309Grammar: UnitGrammar = {
    unitId: 309,
    title: "Yer Edatları (Prépositions de Lieu)",
    rules: [
        {
            id: "fr-a1-prepositions-cities",
            title: "🌍 Bölüm 1: Şehirler ve Ülkeler",
            explanation: "Fransızcada 'Neredesin?' sorusuna cevap verirken şu ayrıma dikkat et:\\n\\n**A. Şehirler: 'À' (Nokta Atışı) 🎯**\\nEğer bahsettiğin yer bir ŞEHİR ise, her zaman **À** kullanırsın. Cinsiyet fark etmez.\\n* Je suis **à** Paris. (Paris'teyim.)\\n* J'habite **à** Istanbul.\\n\\n**B. Dişi Ülkeler → EN**\\nKural: Sonu -E ile biten ülkeler %99 dişidir.\\n* La Turquie → Je suis **en** Turquie.\\n* La France → J'habite **en** France.\\n\\n**C. Erkek Ülkeler → AU**\\nKural: Sonu -E ile bitmeyenler erkektir.\\n* Le Japon → Il est **au** Japon.\\n* Le Canada → Il est **au** Canada.\\n\\n**D. Çoğul Ülkeler → AUX**\\n* Les États-Unis → Je suis **aux** États-Unis.",
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
            explanation: "Bazı edatlar tek başına kullanılmaz, yanına **'DE'** (-den/-dan) alır:\\n\\n* **Près de...** → ...-in yakınında\\n* **Loin de...** → ...-den uzakta\\n* **À côté de...** → ...-in yanında / bitişiğinde\\n* **En face de...** → ...-in karşısında\\n\\n⚠️ **Kritik Dilbilgisi Kuralı (Du/Des):**\\nEğer 'De'den sonra gelen kelime Erkek (Le) ise, bunlar birleşir ve **DU** olur!\\n* Près de + le cinéma → **Près du cinéma** (Sinemanın yakınında)\\n* Loin de + la maison → **Loin de la maison** (Dişide değişim yok)",
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
            explanation: "Bu kelimenin tam bir Türkçe karşılığı yok ama **'gillerde'**, **'-in evinde'**, **'-in mekanında'** demektir. **KİŞİLER** için kullanılır.\\n\\n* **Chez moi:** Benim evimde / Bende\\n* **Chez Ali:** Ali'nin evinde / Ali'lerde\\n* **Chez le coiffeur:** Kuaförde (Kuaförün dükkanında)\\n* **Chez le docteur:** Doktorda (Muayenehanede)\\n\\n❌ Asla 'Je vais **au** Ali' deme!\\n✅ 'Je vais **chez** Ali' de.",
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
            explanation: "**A. UN (Eril) 🚹**\\nOkunuşu: Dudaklarını büz ve 'Ö' de ama sesi burnundan ver. N harfi tam çıkmaz.\\n* Un café (Bir kahve)\\n* Un ami (Liason: U-na-mi)\\n\\n**B. UNE (Dişil) 🚺**\\nOkunuşu: 'ÜN'. N harfini basarak söylersin.\\n* Une pizza (Bir pizza)\\n* Une amie (Liason: U-na-mi - Ses aynı!)\\n\\n**C. DES (Çoğul) 👯‍♂️**\\nHem erkekler hem dişiler için DES kullanılır.\\n* Un ve Une kelimelerinin çoğuludur.\\n* 'Bazı' veya çoğul eki (-lar/-ler) olarak çevrilir.\\n* Tek başınayken 'DE' diye okunur. S harfi yutulur.",
            examples: [
                { fr: "J'ai des amis.", tr: "Arkadaşlarım var (Bazı arkadaşlar)." },
                { fr: "Je mange des croissants.", tr: "Kruvasan yiyorum." }
            ]
        },
        {
            id: "fr-a1-articles-liaison",
            title: "🔗 Kritik Kural: 'DES' ve Liaison",
            explanation: "Des kelimesi tek başına 'DE' diye okunur. AMA... Eğer arkasından **sesli harfle** başlayan bir kelime gelirse, o ölü 'S' harfi canlanır ve **'Z'** olur.\\n\\n* **Sessizle başlarsa:** Des livres (De livr)\\n* **Sesliyle başlarsa:** Des amis (De-**Z**a-mi)\\n* **Sesliyle başlarsa:** Des oranges (De-**Z**o-ranj)",
            examples: [
                { fr: "Des amis (De-za-mi)", tr: "Arkadaşlar" },
                { fr: "Des écoles (De-ze-kol)", tr: "Okullar" }
            ]
        },
        {
            id: "fr-a1-articles-cest",
            title: "🛍️ 'Bu Bir...' (C'est / Ce sont)",
            explanation: "Nesneleri tanıtmak için bu kalıpları kullanırız:\\n\\n**Tekil için: C'est... (Bu bir...)**\\n* C'est un livre. (Bu bir kitaptır.)\\n* C'est une table. (Bu bir masadır.)\\n\\n**Çoğul için: Ce sont... (Bunlar...)**\\n* Ce sont des livres. (Bunlar kitaplardır.)\\n* Ce sont des tables. (Bunlar masalardır.)",
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
    title: "Porter Fiili (Giymek)",
    rules: [
        {
            id: "fr-a1-porter",
            title: "👕 Ne giyiyorsun?",
            explanation: "**Porter** düzenli bir -er fiilidir.\nJe porte, Tu portes, Il porte...",
            examples: [
                { fr: "Je porte un manteau.", tr: "Bir palto giyiyorum." },
                { fr: "Elle porte une robe rouge.", tr: "Kırmızı bir elbise giyiyor." }
            ]
        }
    ]
};

// ===== ÜNİTE 313: YİYECEKLER =====
const unit313Grammar: UnitGrammar = {
    unitId: 313,
    title: "Partitif Artikeller (Du, De la)",
    rules: [
        {
            id: "fr-a1-partitif",
            title: "🍰 Biraz...",
            explanation: "Sayılamayan nesnelerden (su, ekmek, toz şeker) bahsederken 'biraz' anlamında partitif artikel kullanılır.\n\n* **Du:** Eril (Du pain)\n* **De la:** Dişil (De la salade)\n* **De l':** Sesliyle başlayan (De l'eau)",
            examples: [
                { fr: "Je mange du pain.", tr: "Ekmek yiyorum (bir miktar)." },
                { fr: "Je bois de l'eau.", tr: "Su içiyorum." }
            ]
        }
    ]
};

// ===== ÜNİTE 314: İÇECEKLER =====
const unit314Grammar: UnitGrammar = {
    unitId: 314,
    title: "Vouloir, Pouvoir, Devoir",
    rules: [
        {
            id: "fr-a1-modals",
            title: "🙏 Kibarca İstemek",
            explanation: "Bir şey isterken 'Je veux' (İstiyorum) yerine 'Je voudrais' (İsterdim/Rica ediyorum) demek daha kibardır.",
            examples: [
                { fr: "Je voudrais un café, s'il vous plaît.", tr: "Bir kahve rica ediyorum." },
                { fr: "Tu veux du thé?", tr: "Çay ister misin?" }
            ]
        }
    ]
};

// ===== ÜNİTE 315: SAAT KAÇ? =====
const unit315Grammar: UnitGrammar = {
    unitId: 315,
    title: "Saatleri Söyleme",
    rules: [
        {
            id: "fr-a1-time",
            title: "⏰ Quelle heure est-il ?",
            explanation: "Saat sorarken 'Quelle heure est-il?' denir. Cevap verirken hep 'Il est...' kullanılır.\n\n* Il est trois heures (Saat 3).\n* Il est midi (Öğlen 12).\n* Et quart: Çeyrek geçe\n* Moins le quart: Çeyrek kala",
            examples: [
                { fr: "Il est huit heures et quart.", tr: "Saat sekizi çeyrek geçiyor." },
                { fr: "Il est dix heures moins dix.", tr: "Saat ona on var." }
            ]
        }
    ]
};


// ===== ÜNİTE 316: GÜNLÜK RUTİN =====
const unit316Grammar: UnitGrammar = {
    unitId: 316,
    title: "Dönüşlü Fiiller (Les Verbes Pronominaux)",
    rules: [
        {
            id: "fr-a1-reflexive",
            title: "🧘 Kendine Yapılan Eylemler",
            explanation: "Uyanmak, yıkanmak, taranmak gibi eylemler 'dönüşlüdür'. Fiilin başında 'se' vardır (Se laver).\n\nÇekimlenirken:\n* Je **me** lave\n* Tu **te** laves\n* Il **se** lave\n* Nous **nous** lavons\n* Vous **vous** lavez\n* Ils **se** lavent",
            examples: [
                { fr: "Je me réveille à 7h.", tr: "Saat 7'de uyanıyorum." },
                { fr: "Il se douche.", tr: "O duş alıyor." }
            ]
        }
    ]
};

// ===== ÜNİTE 317: HOBİLER =====
const unit317Grammar: UnitGrammar = {
    unitId: 317,
    title: "Faire du... vs Jouer au...",
    rules: [
        {
            id: "fr-a1-hobbies",
            title: "🎾 Spor ve Müzik",
            explanation: "Hobilerden bahsederken iki fiil kullanılır:\n\n1. **Faire de:** Bireysel sporlar ve aktiviteler (Faire du tennis, Faire de la natation)\n2. **Jouer à:** Takım sporları ve oyunlar (Jouer au football)\n3. **Jouer de:** Müzik aletleri (Jouer de la guitare)",
            examples: [
                { fr: "Je fais du vélo.", tr: "Bisiklet sürüyorum." },
                { fr: "Je joue au basket.", tr: "Basketbol oynuyorum." },
                { fr: "Je joue du piano.", tr: "Piyano çalıyorum." }
            ]
        }
    ]
};

// ===== ÜNİTE 318: HAVA DURUMU =====
const unit318Grammar: UnitGrammar = {
    unitId: 318,
    title: "Il fait...",
    rules: [
        {
            id: "fr-a1-weather",
            title: "☁️ Hava Nasıl?",
            explanation: "Hava durumunu anlatırken genellikle 'Il fait' (Hava ...dır/yapar) kalıbı kullanılır.\n\n* Il fait beau (Hava güzel)\n* Il fait chaud (Hava sıcak)\n* Il fait froid (Hava soğuk)\n\nİstisna: Il pleut (Yağmur yağıyor), Il neige (Kar yağıyor).",
            examples: [
                { fr: "Il fait très chaud aujourd'hui.", tr: "Bugün hava çok sıcak." },
                { fr: "Il pleut à Paris.", tr: "Paris'te yağmur yağıyor." }
            ]
        }
    ]
};

// ===== ÜNİTE 319: DUYGULAR =====
const unit319Grammar: UnitGrammar = {
    unitId: 319,
    title: "Être + Sıfat",
    rules: [
        {
            id: "fr-a1-feelings",
            title: "😊 Nasıl Hissediyorsun?",
            explanation: "Duygularımızı anlatırken 'Être' fiili ve sıfat kullanırız. Sıfatlar cinsiyete uymalıdır!\n\n* Je suis content(e) (Memnunum)\n* Je suis fatigué(e) (Yorgunum)\n* Je suis triste (Üzgünüm - değişmez)",
            examples: [
                { fr: "Elle est heureuse.", tr: "O mutlu." },
                { fr: "Ils sont fatigués.", tr: "Onlar yorgun." }
            ]
        }
    ]
};

// ===== ÜNİTE 320: ŞEHİRDE YÖNLER =====
const unit320Grammar: UnitGrammar = {
    unitId: 320,
    title: "Emir Kipi (L'Impératif)",
    rules: [
        {
            id: "fr-a1-imperative",
            title: "👉 Yol Tarifi ve Emirler",
            explanation: "Yol tarif ederken emir kipi kullanılır. Öznesiz kullanılır.\n\n* Tu vas -> Va ! (Git!)\n* Vous tournez -> Tournez ! (Dönün!)\n* Nous allons -> Allons ! (Gidelim!)",
            examples: [
                { fr: "Tournez à droite.", tr: "Sağa dönün." },
                { fr: "Allez tout droit.", tr: "Dümdüz gidin." }
            ]
        }
    ]
};

// ===== ÜNİTE 321: ULAŞIM =====
const unit321Grammar: UnitGrammar = {
    unitId: 321,
    title: "Prendre (Almak/Binmek)",
    rules: [
        {
            id: "fr-a1-prendre",
            title: "🚌 Taşıta Binmek",
            explanation: "**Prendre** düzensiz bir fiildir. Bir taşıta binmek veya bir şey yemek/içmek için kullanılır.\n\nJe prends, Tu prends, Il prend, Nous prenons, Vous prenez, Ils prennent.",
            examples: [
                { fr: "Je prends le bus.", tr: "Otobüse biniyorum." },
                { fr: "Nous prenons le train.", tr: "Trene biniyoruz." }
            ]
        }
    ]
};

// ===== ÜNİTE 322: MEVSİMLER =====
const unit322Grammar: UnitGrammar = {
    unitId: 322,
    title: "Mevsimler ve 'En/Au'",
    rules: [
        {
            id: "fr-a1-seasons",
            title: "🍂 Mevsim Edatları",
            explanation: "Mevsimlerden bahsederken genellikle 'En' kullanılır, ama İlkbahar istisnadır!\n\n* **En** été (Yazın)\n* **En** automne (Sonbaharda)\n* **En** hiver (Kışın)\n* **Au** printemps (İlkbaharda)",
            examples: [
                { fr: "Je vais à la mer en été.", tr: "Yazın denize giderim." },
                { fr: "Les fleurs s'ouvrent au printemps.", tr: "Çiçekler ilkbaharda açar." }
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
            id: "fr-a1-futur-proche",
            title: "🔜 ...Yapacağım",
            explanation: "Yakın gelecekte yapılacak bir şeyi anlatmak çok kolaydır.\n\n**Formül:** Aller (çekimli) + Mastar Fiil\n\n* Je vais manger (Yiyeceğim/Yemek üzereyim)",
            examples: [
                { fr: "Je vais dormir.", tr: "Uyuyacağım." },
                { fr: "Nous allons partir.", tr: "Gideceğiz/Çıkacağız." }
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
            id: "fr-a1-passe-compose",
            title: "🔙 ...Yaptım (Giriş)",
            explanation: "Geçmiş zaman yapmak için yardımcı fiil (Avoir veya Être) ve asıl fiilin geçmiş hali kullanılır.\n\nGenellikle **Avoir** kullanılır.\n* J'ai mangé (Yedim)\n* Tu as fini (Bitirdin)",
            examples: [
                { fr: "J'ai regardé la télé.", tr: "Televizyon izledim." },
                { fr: "Il a acheté une voiture.", tr: "O bir araba aldı." }
            ]
        }
    ]
};

// ===== ÜNİTE 325: ALIŞVERİŞ =====
const unit325Grammar: UnitGrammar = {
    unitId: 325,
    title: "Soru Sorma (Combien?)",
    rules: [
        {
            id: "fr-a1-questions",
            title: "💰 Ne kadar?",
            explanation: "Fiyat sormak veya miktar sormak için **Combien** kullanılır.\n\n* C'est combien ? (Bu ne kadar?)\n* Il y a combien de... ? (Kaç tane ... var?)",
            examples: [
                { fr: "Ça coûte combien ?", tr: "Bu ne kadar tutuyor?" },
                { fr: "Combien de pommes vux-tu ?", tr: "Kaç elma istiyorsun?" }
            ]
        }
    ]
};

// ===== ÜNİTE 326: RESTORAN =====
const unit326Grammar: UnitGrammar = {
    unitId: 326,
    title: "Nezaket İfadeleri",
    rules: [
        {
            id: "fr-a1-politeness",
            title: "🎩 Kibar Olmak",
            explanation: "Restoranda veya dükkanda kullanılır:\n\n* **S'il vous plaît:** Lütfen (Resmi)\n* **Merci beaucoup:** Çok teşekkürler\n* **L'addition, s'il vous plaît:** Hesap lütfen",
            examples: [
                { fr: "Un verre d'eau, s'il vous plaît.", tr: "Bir bardak su, lütfen." }
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
            id: "fr-a1-comparison",
            title: "⚖️ Daha...",
            explanation: "Bir şeyin diğerinden daha ... olduğunu söylemek için:\n\n**Plus** [sıfat] **que**\n\n* Plus grand que (..den daha büyük)\n* Moins cher que (..den daha ucuz)",
            examples: [
                { fr: "Pierre est plus grand que Marie.", tr: "Pierre, Marie'den daha uzundur." },
                { fr: "Ce livre est moins cher.", tr: "Bu kitap daha ucuz." }
            ]
        }
    ]
};

// ===== ÜNİTE 328: HAYVANLAR =====
const unit328Grammar: UnitGrammar = {
    unitId: 328,
    title: "Hayvanlar ve Cinsiyet",
    rules: [
        {
            id: "fr-a1-animals",
            title: "🦁 Hayvan İsimleri",
            explanation: "Hayvan isimlerinin de cinsiyeti vardır. Bazıları dişiliğe göre değişir.\n\n* Le chat (Kedi - Erkek) -> La chatte (Kedi - Dişi)\n* Le chien -> La chienne",
            examples: [
                { fr: "Le lion est fort.", tr: "Aslan güçlüdür." }
            ]
        }
    ]
};

// ===== ÜNİTE 329: TEKNOLOJİ =====
const unit329Grammar: UnitGrammar = {
    unitId: 329,
    title: "İnfinitive Kullanımı",
    rules: [
        {
            id: "fr-a1-infinitive",
            title: "🛠️ ...için (Pour)",
            explanation: "Bir amaç belirtmek için **Pour** + **Mastar Fiil** kullanılır.\n\n* Pour manger (Yemek için)\n* Pour aller (Gitmek için)",
            examples: [
                { fr: "J'utilise mon ordinateur pour travailler.", tr: "Bilgisayarımı çalışmak için kullanıyorum." }
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

