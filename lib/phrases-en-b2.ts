/**
 * SteadyShell Phrases - English B2 (Units 191-220)
 * 15 phrases per unit
 */

export interface EnglishPhrase {
    phrase: string;
    meaning: string;
    context: string;
    example: string;
    pronunciation: string;
}

export interface EnglishPhraseUnit {
    unitId: number;
    title: string;
    phrases: EnglishPhrase[];
}

// Unit 191: İleri Gramer 1
export const u191: EnglishPhraseUnit = {
    unitId: 191, title: "İleri Gramer 1", phrases: [
        { phrase: "Had been working", meaning: "Çalışmaktaydı", context: "Past Perfect Continuous", example: "I had been working there for ten years.", pronunciation: "hed bi-in vör-king" },
        { phrase: "Will have completed", meaning: "Tamamlamış olacak", context: "Future Perfect", example: "By next month, I will have completed the project.", pronunciation: "vil hev kom-p-li-tid" },
        { phrase: "Have you been waiting long?", meaning: "Çok bekledin mi?", context: "Present Perfect Continuous", example: "Have you been waiting long for the bus?", pronunciation: "hev yu bi-in vey-ting long" },
        { phrase: "I would have gone", meaning: "Giderdim", context: "Third Conditional", example: "If I had known, I would have gone.", pronunciation: "ay vud hev gon" },
        { phrase: "It was being repaired", meaning: "Tamir ediliyordu", context: "Past Continuous Passive", example: "My car was being repaired yesterday.", pronunciation: "it vaz bi-ing ri-pe-yırd" },
        { phrase: "Having said that", meaning: "Bununla birlikte", context: "Bağlaç", example: "It's expensive. Having said that, it's very good.", pronunciation: "he-ving sed det" },
        { phrase: "By the time we arrived", meaning: "Biz varana kadar", context: "Zaman", example: "By the time we arrived, the movie had started.", pronunciation: "bay dı taym vi e-rayvd" },
        { phrase: "Hardly had I...", meaning: "...yapalı henüz olmuştu ki", context: "Inversion", example: "Hardly had I left the house when it rained.", pronunciation: "hard-li hed ay" },
        { phrase: "Only then did I realize", meaning: "Ancak o zaman farkettim", context: "Inversion", example: "Only then did I realize my mistake.", pronunciation: "on-li den did ay ri-ı-layz" },
        { phrase: "Not until much later", meaning: "Çok sonrasına kadar değil", context: "Zaman", example: "Not until much later did we find the truth.", pronunciation: "not an-til maç ley-tır" },
        { phrase: "No sooner had he left", meaning: "Ayrılır ayrılmaz", context: "Inversion", example: "No sooner had he left than the phone rang.", pronunciation: "no su-nır hed hi left" },
        { phrase: "Little did they know", meaning: "Hiç bilmiyorlardı", context: "Inversion", example: "Little did they know what would happen.", pronunciation: "li-tıl did dey nou" },
        { phrase: "Under no circumstances", meaning: "Hiçbir koşulda", context: "Vurgu", example: "Under no circumstances should you open that door.", pronunciation: "an-dır no sör-kım-s-ten-sız" },
        { phrase: "Seldom have I seen", meaning: "Nadiren gördüm", context: "Inversion", example: "Seldom have I seen such beauty.", pronunciation: "sel-dım hev ay si-in" },
        { phrase: "On no account", meaning: "Asla / Hiçbir şekilde", context: "Vurgu", example: "On no account must this be shared.", pronunciation: "on no e-ka-unt" }
    ]
};

// Unit 192: İleri Gramer 2
export const u192: EnglishPhraseUnit = {
    unitId: 192, title: "İleri Gramer 2", phrases: [
        { phrase: "If only I were", meaning: "Keşke ... olsaydım", context: "Dilek", example: "If only I were taller.", pronunciation: "if on-li ay vör" },
        { phrase: "It's high time", meaning: "Tam zamanı", context: "Gereklilik", example: "It's high time we left.", pronunciation: "its hay taym" },
        { phrase: "I'd rather you didn't", meaning: "Yapmanı tercih etmem", context: "İstek", example: "I'd rather you didn't smoke here.", pronunciation: "ayd ra-dır yu did-ınt" },
        { phrase: "Provided that", meaning: "Şartıyla", context: "Koşul", example: "I'll go provided that you accompany me.", pronunciation: "p-ro-vay-did det" },
        { phrase: "As long as", meaning: "Sürece", context: "Koşul", example: "As long as you're happy, I'm happy.", pronunciation: "ez long ez" },
        { phrase: "Unless you hurry", meaning: "Acele etmedikçe", context: "Koşul", example: "You'll miss the train unless you hurry.", pronunciation: "an-les yu ha-ri" },
        { phrase: "Even if it rains", meaning: "Yağmur yağsa bile", context: "Koşul", example: "We'll go even if it rains.", pronunciation: "i-vın if it reyns" },
        { phrase: "In case of emergency", meaning: "Acil durum halinde", context: "Hazırlık", example: "Call this number in case of emergency.", pronunciation: "in keys ov e-mör-cın-si" },
        { phrase: "Suppose we went?", meaning: "Ya gitseydik?", context: "Varsayım", example: "Suppose we went on a trip?", pronunciation: "sı-pouz vi vent" },
        { phrase: "Whether or not", meaning: "Olsa da olmasa da", context: "Belirsizlik", example: "I'll go whether or not you like it.", pronunciation: "ve-dır or not" },
        { phrase: "As if he knew", meaning: "Sanki biliyormuş gibi", context: "Benzetme", example: "He spoke as if he knew everything.", pronunciation: "ez if hi nu" },
        { phrase: "Suppose that was true", meaning: "Diyelim ki bu doğruydu", context: "Varsayım", example: "Suppose that was true, what would you do?", pronunciation: "sı-pouz det vaz t-ru" },
        { phrase: "But for his help", meaning: "Yardımı olmasaydı", context: "Koşul", example: "But for his help, I would have failed.", pronunciation: "bat for hiz help" },
        { phrase: "Were it not for", meaning: "Olmamış olsaydı", context: "Koşul", example: "Were it not for the rain, we would be out.", pronunciation: "vör it not for" },
        { phrase: "Had it not been for", meaning: "Olmamış olsaydı (geçmiş)", context: "Koşul", example: "Had it not been for you, I'd be lost.", pronunciation: "hed it not bi-in for" }
    ]
};

// Unit 193: Deyimler 1
export const u193: EnglishPhraseUnit = {
    unitId: 193, title: "Deyimler 1", phrases: [
        { phrase: "A piece of cake", meaning: "Çocuk oyuncağı", context: "Kolaylık", example: "The exam was a piece of cake.", pronunciation: "e pi-is ov keyk" },
        { phrase: "Break a leg", meaning: "İyi şanslar", context: "Şans", example: "Go out there and break a leg!", pronunciation: "b-reyk e leg" },
        { phrase: "Under the weather", meaning: "Biraz hasta / keyifsiz", context: "Sağlık", example: "I'm feeling a bit under the weather.", pronunciation: "an-dır dı ve-dır" },
        { phrase: "Beat around the bush", meaning: "Lafı dolandırmak", context: "İletişim", example: "Stop beating around the bush and tell me.", pronunciation: "bi-it e-ra-und dı buş" },
        { phrase: "The last straw", meaning: "Bardağı taşıran son damla", context: "Sabır", example: "That comment was the last straw.", pronunciation: "dı last s-t-ro" },
        { phrase: "Bite the bullet", meaning: "Zorluğa göğüs germek", context: "Cesaret", example: "I decided to bite the bullet and do it.", pronunciation: "bayt dı bu-lıt" },
        { phrase: "Blessing in disguise", meaning: "Gizli lütuf", context: "Şans", example: "Losing that job was a blessing in disguise.", pronunciation: "b-le-sing in dis-gayz" },
        { phrase: "Call it a day", meaning: "Paydos etmek / günü bitirmek", context: "İş", example: "Let's call it a day and go home.", pronunciation: "kol it e dey" },
        { phrase: "Cut to the chase", meaning: "Sadede gelmek", context: "İletişim", example: "Cut to the chase and tell me the cost.", pronunciation: "kat tu dı çe-ys" },
        { phrase: "Get out of hand", meaning: "Kontrolden çıkmak", context: "Durum", example: "The party got out of hand.", pronunciation: "get aut ov hend" },
        { phrase: "Hit the nail on the head", meaning: "Tam üstüne bastın / tam isabet", context: "Doğruluk", example: "You hit the nail on the head with that analysis.", pronunciation: "hit dı ne-yıl on dı hed" },
        { phrase: "Kill two birds with one stone", meaning: "Bir taşla iki kuş vurmak", context: "Verimlilik", example: "I killed two birds with one stone.", pronunciation: "kil tu bördz vid van s-toun" },
        { phrase: "Let the cat out of the bag", meaning: "Ağzından kaçırmak / sırrı ifşa etmek", context: "Sır", example: "She let the cat out of the bag.", pronunciation: "let dı ket aut ov dı beg" },
        { phrase: "On the ball", meaning: "İşini iyi bilen / uyanık", context: "Yetenek", example: "Our new manager is really on the ball.", pronunciation: "on dı bol" },
        { phrase: "Once in a blue moon", meaning: "Kirk yılda bir / çok nadiren", context: "Sıklık", example: "We go out once in a blue moon.", pronunciation: "vans in e b-lu mu-un" }
    ]
};

// Unit 194: Deyimler 2
export const u194: EnglishPhraseUnit = {
    unitId: 194, title: "Deyimler 2", phrases: [
        { phrase: "Spill the beans", meaning: "Baklayı ağzından çıkarmak", context: "Sır", example: "Go on, spill the beans!", pronunciation: "s-pil dı bi-inz" },
        { phrase: "Take it with a grain of salt", meaning: "İhtiyatla karşılamak", context: "Şüphe", example: "Take his stories with a grain of salt.", pronunciation: "teyk it vid e g-re-yin ov solt" },
        { phrase: "Up in the air", meaning: "Henüz belirsiz", context: "Belirsizlik", example: "Our travel plans are still up in the air.", pronunciation: "ap in dı e-ir" },
        { phrase: "Burn the midnight oil", meaning: "Gece geç saatlere kadar çalışmak", context: "Çaba", example: "I had to burn the midnight oil to finish.", pronunciation: "börn dı mid-nayt oy-ıl" },
        { phrase: "Keep an eye on", meaning: "Göz kulak olmak", context: "Dikkat", example: "Can you keep an eye on my bag?", pronunciation: "ki-ip en ay on" },
        { phrase: "Let sleeping dogs lie", meaning: "Eski defterleri açmamak", context: "Huzur", example: "I decided to let sleeping dogs lie.", pronunciation: "let s-li-ping dogz lay" },
        { phrase: "Off the hook", meaning: "Yakayı kurtarmak / sorumluluktan kaçmak", context: "Rahatlama", example: "I'm finally off the hook.", pronunciation: "of dı huk" },
        { phrase: "Piece of my mind", meaning: "Ağzına geleni söylemek / sitem etmek", context: "Öfke", example: "I gave him a piece of my mind.", pronunciation: "pi-is ov may maynd" },
        { phrase: "Rule of thumb", meaning: "Genel kural / baş parmak kuralı", context: "Pratik", example: "As a rule of thumb, always check twice.", pronunciation: "ru-ul ov tam" },
        { phrase: "See eye to eye", meaning: "Aynı fikirde olmak", context: "Anlaşma", example: "We don't always see eye to eye.", pronunciation: "si ay tu ay" },
        { phrase: "Sit on the fence", meaning: "Kararsız kalmak / taraf tutmamak", context: "Karar", example: "You can't sit on the fence forever.", pronunciation: "sit on dı fens" },
        { phrase: "The elephant in the room", meaning: "Görmezden gelinen büyük sorun", context: "Durum", example: "We need to talk about the elephant in the room.", pronunciation: "dı e-le-fınt in dı ru-um" },
        { phrase: "Throw cold water on", meaning: "Hevesini kırmak", context: "Moral", example: "Don't throw cold water on my plans.", pronunciation: "t-rou kold vo-tır on" },
        { phrase: "Through thick and thin", meaning: "İyi günde kötü günde", context: "Bağlılık", example: "We stayed together through thick and thin.", pronunciation: "t-ru tik end tin" },
        { phrase: "Under the thumb", meaning: "Baskı altında / avucunun içinde", context: "Kontrol", example: "He's completely under his wife's thumb.", pronunciation: "an-dır dı tam" }
    ]
};

// Unit 195: Formal Yazışma
export const u195: EnglishPhraseUnit = {
    unitId: 195, title: "Formal Yazışma", phrases: [
        { phrase: "To whom it may concern", meaning: "İlgili makama", context: "Resmi Giriş", example: "To whom it may concern, I'm writing to...", pronunciation: "tu hum it mey kon-sörn" },
        { phrase: "I am writing to inquire about", meaning: "...hakkında bilgi almak için yazıyorum", context: "Resmi Giriş", example: "I am writing to inquire about the position.", pronunciation: "ay em ray-ting tu in-k-vay-8-mınt e-baut" },
        { phrase: "With reference to", meaning: "...ile ilgili olarak", context: "Referans", example: "With reference to your letter of 10 May...", pronunciation: "vid re-fı-rıns tu" },
        { phrase: "I would be grateful if", meaning: "...yaparsanız minnettar kalırım", context: "Rica", example: "I would be grateful if you could send a catalog.", pronunciation: "ay vud bi g-rey-t-ful if" },
        { phrase: "Please find attached", meaning: "Ekte bulabilirsiniz", context: "Ek Dosya", example: "Please find attached my resume.", pronunciation: "p-li-iz faynd e-teçt" },
        { phrase: "I apologize for any inconvenience", meaning: "Verdiğimiz rahatsızlık için özür dileriz", context: "Özür", example: "I apologize for any inconvenience caused.", pronunciation: "ay e-po-lo-cayz for e-ni in-kon-vi-ni-yıns" },
        { phrase: "Looking forward to hearing from you", meaning: "Sizden haber bekliyorum", context: "Kapanış", example: "Looking forward to hearing from you soon.", pronunciation: "lu-king for-vırd tu hi-ring f-rom yu" },
        { phrase: "Yours sincerely", meaning: "Saygılarımla (İsim biliniyorsa)", context: "Resmi Kapanış", example: "Yours sincerely, John Smith.", pronunciation: "yorz sin-si-8-li" },
        { phrase: "Yours faithfully", meaning: "Saygılarımla (İsim bilinmiyorsa)", context: "Resmi Kapanış", example: "Yours faithfully, Sarah Jones.", pronunciation: "yorz feyth-ful-li" },
        { phrase: "Should you require further information", meaning: "Daha fazla bilgi gerekirse", context: "Teklif", example: "Should you require further information, contact me.", pronunciation: "şud yu ri-kway-8 för-dır in-for-mey-şın" },
        { phrase: "I look forward to your reply", meaning: "Cevabınızı bekliyorum", context: "Kapanış", example: "I look forward to your reply at your convenience.", pronunciation: "ay luk for-vırd tu yor ri-p-lay" },
        { phrase: "As per our conversation", meaning: "Konuşmamız uyarınca", context: "Referans", example: "As per our conversation earlier today...", pronunciation: "ez pör au-8 kon-ver-sey-şın" },
        { phrase: "On behalf of", meaning: "...adına", context: "Temsil", example: "I am writing on behalf of my company.", pronunciation: "on bi-haf ov" },
        { phrase: "Thank you for your cooperation", meaning: "İşbirliğiniz için teşekkürler", context: "Teşekkür", example: "Thank you for your cooperation in this matter.", pronunciation: "teng-k yu for yor ko-o-pı-rey-şın" },
        { phrase: "Your prompt attention", meaning: "Hızlı ilginiz", context: "Rica", example: "Your prompt attention to this is appreciated.", pronunciation: "yor p-rom-pt e-ten-şın" }
    ]
};

// Unit 196: Sunum Teknikleri
export const u196: EnglishPhraseUnit = {
    unitId: 196, title: "Sunum Teknikleri", phrases: [
        { phrase: "The purpose of my talk is", meaning: "Konuşmamın amacı ...", context: "Giriş", example: "The purpose of my talk is to update you.", pronunciation: "dı pör-pıs ov may tok iz" },
        { phrase: "Let me start by", meaning: "...ile başlamama izin verin", context: "Başlangıç", example: "Let me start by introducing myself.", pronunciation: "let mi s-tart bay" },
        { phrase: "To begin with", meaning: "Öncelikle / Başlarken", context: "Sıralama", example: "To begin with, look at this chart.", pronunciation: "tu bi-gin vid" },
        { phrase: "If you look at the screen", meaning: "Ekrana bakarsanız", context: "Görsel", example: "If you look at the screen, you'll see...", pronunciation: "if yu luk et dı s-k-ri-in" },
        { phrase: "I'd like to highlight", meaning: "Vurgulamak isterim", context: "Önem", example: "I'd like to highlight the key findings.", pronunciation: "ayd layk tu hay-layt" },
        { phrase: "Turning now to", meaning: "Şimdi ... konusuna dönersek", context: "Geçiş", example: "Turning now to the next slide.", pronunciation: "tör-ning na-u tu" },
        { phrase: "Moving on to", meaning: "...konusuna geçersek", context: "Geçiş", example: "Moving on to the financial report.", pronunciation: "mu-ving on tu" },
        { phrase: "As you can see from this table", meaning: "Bu tablodan görebileceğiniz gibi", context: "Analiz", example: "As you can see from this table, sales grew.", pronunciation: "ez yu ken si f-rom dis tey-bıl" },
        { phrase: "In conclusion", meaning: "Sonuç olarak", context: "Özet", example: "In conclusion, we need a new strategy.", pronunciation: "in kon-k-lu-jın" },
        { phrase: "To sum up", meaning: "Özetlemek gerekirse", context: "Özet", example: "To sum up the main points...", pronunciation: "tu sam ap" },
        { phrase: "I'm happy to answer any questions", meaning: "Soruları cevaplamaktan mutluluk duyarım", context: "Soru-Cevap", example: "I'm happy to answer any questions now.", pronunciation: "aym he-pi tu en-sır e-ni k-ves-çıns" },
        { phrase: "Let's take a look at", meaning: "...konusuna bir göz atalım", context: "Geçiş", example: "Let's take a look at the competitors.", pronunciation: "lets teyk e luk et" },
        { phrase: "That brings me to the end", meaning: "Bu beni sona getirdi", context: "Bitiş", example: "That brings me to the end of my presentation.", pronunciation: "det b-rings mi tu end" },
        { phrase: "Thank you for your attention", meaning: "İlginiz için teşekkür ederim", context: "Kapanış", example: "Thank you for your attention today.", pronunciation: "teng-k yu for yor e-ten-şın" },
        { phrase: "Feel free to interrupt", meaning: "Sözümü kesmekten çekinmeyin", context: "Giriş", example: "Feel free to interrupt if you have questions.", pronunciation: "fi-il f-ri tu in-tı-rapt" }
    ]
};

// Unit 197: Müzakere
export const u197: EnglishPhraseUnit = {
    unitId: 197, title: "Müzakere", phrases: [
        { phrase: "Let's find common ground", meaning: "Ortak bir nokta bulalım", context: "Ulaşma", example: "Let's find common ground on this price.", pronunciation: "lets faynd ko-mın g-ra-und" },
        { phrase: "What are your requirements?", meaning: "Gereksinimleriniz nelerdir?", context: "Bilgi Alma", example: "What are your requirements for this deal?", pronunciation: "vat ar yor ri-kway-8-mınts" },
        { phrase: "That sounds reasonable", meaning: "Makul geliyor", context: "Onay", example: "That sounds reasonable to us.", pronunciation: "det sa-undz ri-zı-nı-bıl" },
        { phrase: "I'm afraid I can't agree", meaning: "Korkarım kabul edemem", context: "Red", example: "I'm afraid I can't agree to that discount.", pronunciation: "aym e-f-re-yid ay kant e-g-ri" },
        { phrase: "Is there any room for maneuver?", meaning: "Manevra alanı var mı?", context: "Esneklik", example: "Is there any room for maneuver on the date?", pronunciation: "iz der e-ni ru-um for me-nu-vır" },
        { phrase: "I'd like to propose", meaning: "Öneride bulunmak isterim", context: "Teklif", example: "I'd like to propose an alternative.", pronunciation: "ayd layk tu p-ro-pouz" },
        { phrase: "Let's meet halfway", meaning: "Ortada buluşalım", context: "Uzlaşma", example: "If you pay $10, and I want $20, let's meet halfway.", pronunciation: "lets mi-it haf-vey" },
        { phrase: "That's a firm offer", meaning: "Kesin bir tekliftir", context: "Ciddiyet", example: "This is a firm offer, we won't go lower.", pronunciation: "dets e förm o-fır" },
        { phrase: "Could you clarify?", meaning: "Açıklayabilir misiniz?", context: "Anlama", example: "Could you clarify the delivery terms?", pronunciation: "kud yu k-le-ri-fay" },
        { phrase: "What's the bottom line?", meaning: "En son ne olur? / Asıl mesele nedir?", context: "Sonuç", example: "What's the bottom line for this contract?", pronunciation: "vats dı bo-tımlayn" },
        { phrase: "It's a win-win situation", meaning: "Her iki taraf için de kazançlı", context: "Başarı", example: "This deal is a win-win situation.", pronunciation: "its e vin vin si-çu-ey-şın" },
        { phrase: "I need to sleep on it", meaning: "Bir gece düşünmem lazım", context: "Karar", example: "I like the deal, but I need to sleep on it.", pronunciation: "ay ni-id tu s-li-ip on it" },
        { phrase: "Under these conditions", meaning: "Bu koşullar altında", context: "Sart", example: "We can only sign under these conditions.", pronunciation: "an-dır diiz kon-di-şıns" },
        { phrase: "Let's wrap this up", meaning: "Bitirelim / Bağlayalım", context: "Kapanış", example: "Great, let's wrap this up and sign.", pronunciation: "lets r-rep dis ap" },
        { phrase: "He's a tough negotiator", meaning: "Zor bir müzakereci", context: "Karakter", example: "Be careful, he's a tough negotiator.", pronunciation: "hi-iz e taf ni-go-şi-ey-tır" }
    ]
};

// Unit 198: Hukuk İngilizcesi
export const u198: EnglishPhraseUnit = {
    unitId: 198, title: "Hukuk İngilizcesi", phrases: [
        { phrase: "Legally binding", meaning: "Yasal olarak bağlayıcı", context: "Hukuk", example: "This contract is legally binding.", pronunciation: "li-gıl-li bayn-ding" },
        { phrase: "Breach of contract", meaning: "Sözleşme ihlali", context: "Hukuk", example: "Suing for a breach of contract.", pronunciation: "b-ri-iç ov kon-t-rekt" },
        { phrase: "In accordance with the law", meaning: "Yasalara uygun olarak", context: "Hukuk", example: "We acted in accordance with the law.", pronunciation: "in e-kor-dıns vid dı lo" },
        { phrase: "Null and void", meaning: "Hükümsüz ve geçersiz", context: "Hukuk", example: "The agreement is now null and void.", pronunciation: "nal end voyd" },
        { phrase: "Subject to terms", meaning: "Şartlara bağlıdır", context: "Hukuk", example: "The offer is subject to terms and conditions.", pronunciation: "sab-cekt tu törmz" },
        { phrase: "Power of attorney", meaning: "Vekaletname", context: "Hukuk", example: "She gave me her power of attorney.", pronunciation: "pa-vır ov e-tör-ni" },
        { phrase: "Without prejudice", meaning: "Hakları saklı kalarak", context: "Hukuk", example: "The letter was written without prejudice.", pronunciation: "vi-da-ut p-re-cu-dis" },
        { phrase: "Under the jurisdiction of", meaning: "...yetki alanı altında", context: "Hukuk", example: "This is under the jurisdiction of the court.", pronunciation: "an-dır dı cu-ris-dik-şın ov" },
        { phrase: "Take legal action", meaning: "Yasal işlem başlatmak", context: "Hukuk", example: "We will take legal action if needed.", pronunciation: "teyk li-gıl ek-şın" },
        { phrase: "Party to the agreement", meaning: "Sözleşmenin tarafı", context: "Hukuk", example: "As a party to the agreement, you have rights.", pronunciation: "par-ti tu dı e-g-ri-mınt" },
        { phrase: "Due process", meaning: "Hukuki süreç", context: "Hukuk", example: "Everyone is entitled to due process.", pronunciation: "du p-ro-ses" },
        { phrase: "In testimony whereof", meaning: "Beyanımın kanıtı olarak", context: "Hukuk", example: "In testimony whereof, I sign this.", pronunciation: "in tes-ti-mo-ni ver-ov" },
        { phrase: "Force majeure", meaning: "Mücbir sebep", context: "Hukuk", example: "The delay was due to force majeure.", pronunciation: "fors ma-jör" },
        { phrase: "Notary public", meaning: "Noter", context: "Hukuk", example: "You need to see a notary public.", pronunciation: "no-te-ri pab-lik" },
        { phrase: "Last will and testament", meaning: "Vasiyetname", context: "Hukuk", example: "This is my last will and testament.", pronunciation: "last vil end tes-tı-mınt" }
    ]
};

// Unit 199: Tıbbi İngilizce
export const u199: EnglishPhraseUnit = {
    unitId: 199, title: "Tıbbi İngilizce", phrases: [
        { phrase: "Undergo surgery", meaning: "Ameliyat olmak", context: "Tıp", example: "He needs to undergo surgery.", pronunciation: "an-dır-go sör-cı-ri" },
        { phrase: "Prescribe medication", meaning: "İlaç yazmak", context: "Tıp", example: "The doctor prescribed medication for pain.", pronunciation: "p-re-s-k-rayb me-di-key-şın" },
        { phrase: "Stable condition", meaning: "Stabil durum", context: "Tıp", example: "The patient is in stable condition.", pronunciation: "s-tey-bıl kon-di-şın" },
        { phrase: "Side effects", meaning: "Yan etkiler", context: "Tıp", example: "What are the common side effects?", pronunciation: "sayd e-fekts" },
        { phrase: "Emergency room", meaning: "Acil servis", context: "Tıp", example: "Take him to the emergency room.", pronunciation: "e-mör-cın-si ru-um" },
        { phrase: "Checkup result", meaning: "Kontrol sonucu", context: "Tıp", example: "My checkup results were normal.", pronunciation: "çek-ap ri-zalt" },
        { phrase: "Blood pressure", meaning: "Tansiyon", context: "Tıp", example: "Let's check your blood pressure.", pronunciation: "b-lad p-re-şır" },
        { phrase: "Highly contagious", meaning: "Çok bulaşıcı", context: "Tıp", example: "The virus is highly contagious.", pronunciation: "hay-li kon-tey-cıs" },
        { phrase: "Recovery period", meaning: "İyileşme dönemi", context: "Tıp", example: "The recovery period is six weeks.", pronunciation: "ri-ka-vı-ri pi-ri-yid" },
        { phrase: "Chronic illness", meaning: "Kronik hastalık", context: "Tıp", example: "She suffers from a chronic illness.", pronunciation: "k-ro-nik il-nıs" },
        { phrase: "Intensive care unit", meaning: "Yoğun bakım ünitesi", context: "Tıp", example: "He's in the intensive care unit.", pronunciation: "in-ten-siv ke-ir yu-nit" },
        { phrase: "Make a full recovery", meaning: "Tamamen iyileşmek", context: "Tıp", example: "We expect her to make a full recovery.", pronunciation: "meyk e ful ri-ka-vı-ri" },
        { phrase: "Medical history", meaning: "Tıbbi geçmiş", context: "Tıp", example: "Please fill out your medical history.", pronunciation: "me-di-kıl his-to-ri" },
        { phrase: "Get a second opinion", meaning: "İkinci bir görüş almak", context: "Tıp", example: "I'd like to get a second opinion.", pronunciation: "get e se-kınd o-pin-yın" },
        { phrase: "Preventative measures", meaning: "Önleyici tedbirler", context: "Tıp", example: "Taking preventative measures is key.", pronunciation: "p-ri-ven-tı-tiv me-jırs" }
    ]
};

// Unit 200: Finans İngilizcesi
export const u200: EnglishPhraseUnit = {
    unitId: 200, title: "Finans İngilizcesi", phrases: [
        { phrase: "Return on investment", meaning: "Yatırım getirisi", context: "Finans", example: "The ROI was higher than expected.", pronunciation: "ri-törn on in-vest-mınt" },
        { phrase: "Interest rate", meaning: "Faiz oranı", context: "Finans", example: "Interest rates are rising.", pronunciation: "in-t-rest reyt" },
        { phrase: "Cash flow", meaning: "Nakit akışı", context: "Finans", example: "We have strong cash flow this month.", pronunciation: "keş f-lou" },
        { phrase: "Budget cut", meaning: "Bütçe kesintisi", context: "Finans", example: "There were huge budget cuts last year.", pronunciation: "ba-cıt kat" },
        { phrase: "Stock market crash", meaning: "Borsa çöküşü", context: "Finans", example: "Remember the stock market crash?", pronunciation: "s-tok mar-kıt k-reş" },
        { phrase: "In the red", meaning: "Zararda / Borçta", context: "Finans", example: "The company is in the red this year.", pronunciation: "in dı red" },
        { phrase: "In the black", meaning: "Karda", context: "Finans", example: "We are finally in the black.", pronunciation: "in dı b-lek" },
        { phrase: "Break even", meaning: "Kâr-zarar eşiği", context: "Finans", example: "We expect to break even by June.", pronunciation: "b-reyk i-vın" },
        { phrase: "Asset and liability", meaning: "Varlık ve borç", context: "Finans", example: "Check the balance of assets and liabilities.", pronunciation: "e-set end lay-e-bi-li-ti" },
        { phrase: "Net profit", meaning: "Net kâr", context: "Finans", example: "What was the net profit after tax?", pronunciation: "net p-ro-fit" },
        { phrase: "Investment portfolio", meaning: "Yatırım portföyü", context: "Finans", example: "He has a diverse investment portfolio.", pronunciation: "in-vest-mınt port-fol-yo" },
        { phrase: "Credit rating", meaning: "Kredi notu", context: "Finans", example: "Our credit rating is excellent.", pronunciation: "k-re-dit rey-ting" },
        { phrase: "Fiscal year", meaning: "Mali yıl", context: "Finans", example: "The fiscal year begins in April.", pronunciation: "fis-kıl yi-ır" },
        { phrase: "Tax evasion", meaning: "Vergi kaçırma", context: "Finans", example: "Tax evasion is a serious crime.", pronunciation: "teks i-vey-jın" },
        { phrase: "Publicly traded", meaning: "Halka açık", context: "Finans", example: "It's a publicly traded company.", pronunciation: "pab-lik-li t-re-did" }
    ]
};

// Unit 201: Edebiyat Analizi
export const u201: EnglishPhraseUnit = {
    unitId: 201, title: "Edebiyat Analizi", phrases: [
        { phrase: "Literary devices", meaning: "Edebi sanatlar", context: "Edebiyat", example: "Identify the literary devices used here.", pronunciation: "li-tı-re-ri di-vay-sız" },
        { phrase: "Character development", meaning: "Karakter gelişimi", context: "Edebiyat", example: "The protagonist showed great character development.", pronunciation: "ke-rık-tır di-ve-lop-mınt" },
        { phrase: "Plot twist", meaning: "Beklenmedik olay akışı", context: "Edebiyat", example: "What a shocking plot twist!", pronunciation: "p-lot t-vist" },
        { phrase: "Symbolism", meaning: "Sembolizm", context: "Edebiyat", example: "The red rose is used for symbolism.", pronunciation: "sim-bo-li-zım" },
        { phrase: "Metaphor and simile", meaning: "Metafor ve teşbih", context: "Edebiyat", example: "Distinguish between a metaphor and a simile.", pronunciation: "me-tı-for end si-mi-li" },
        { phrase: "Ironic situation", meaning: "İronik durum", context: "Edebiyat", example: "It was an ironic situation, indeed.", pronunciation: "ay-ro-nik si-çu-ey-şın" },
        { phrase: "Narrative arc", meaning: "Anlatı örgüsü", context: "Edebiyat", example: "The narrative arc reaches its peak here.", pronunciation: "ne-rı-tiv ark" },
        { phrase: "Foreshadowing", meaning: "Önsezi / İpucu verme", context: "Edebiyat", example: "That scene was a great foreshadowing.", pronunciation: "for-şe-do-ving" },
        { phrase: "Thematic analysis", meaning: "Tematik analiz", context: "Edebiyat", example: "We need to do a thematic analysis.", pronunciation: "ti-me-tik e-ne-li-sis" },
        { phrase: "First-person narrator", meaning: "Birinci şahıs anlatıcı", context: "Edebiyat", example: "The book has a first-person narrator.", pronunciation: "först per-sın ne-rey-tır" },
        { phrase: "Stanza and verse", meaning: "Kıta ve mısra", context: "Şiir", example: "Check the third stanza of the poem.", pronunciation: "s-ten-zı end vörs" },
        { phrase: "Critical review", meaning: "Eleştirel inceleme", context: "Edebiyat", example: "He wrote a critical review of the play.", pronunciation: "k-ri-ti-kıl ri-v-yu" },
        { phrase: "Genre-defining", meaning: "Tür belirleyici", context: "Edebiyat", example: "It was a genre-defining novel.", pronunciation: "jan-ra di-fay-ning" },
        { phrase: "Unreliable narrator", meaning: "Güvenilmez anlatıcı", context: "Edebiyat", example: "The story uses an unreliable narrator.", pronunciation: "an-ri-lay-e-bıl ne-rey-tır" },
        { phrase: "Imagery", meaning: "İmgelem", context: "Edebiyat", example: "The writer uses vivid imagery.", pronunciation: "i-mi-cı-ri" }
    ]
};

// Unit 202: Tartışmalı Konular
export const u202: EnglishPhraseUnit = {
    unitId: 202, title: "Tartışmalı Konular", phrases: [
        { phrase: "Ethical dilemma", meaning: "Etik ikilem", context: "Tartışma", example: "We face a major ethical dilemma.", pronunciation: "e-ti-kıl di-le-ma" },
        { phrase: "Public opinion", meaning: "Kamuoyu", context: "Toplum", example: "Public opinion is divided on this issue.", pronunciation: "pab-lik o-pin-yın" },
        { phrase: "Pros and cons", meaning: "Artılar ve eksiler", context: "Tartışma", example: "What are the pros and cons of the policy?", pronunciation: "p-ros end kons" },
        { phrase: "Hotly debated", meaning: "Hararetle tartışılan", context: "Tartışma", example: "It's a hotly debated topic.", pronunciation: "hot-li di-bey-tid" },
        { phrase: "Point of contention", meaning: "Tartışma konusu", context: "Tartışma", example: "That remains a point of contention.", pronunciation: "poynt ov kon-ten-şın" },
        { phrase: "Take a stand", meaning: "Tavır almak / Duruş sergilemek", context: "Tartışma", example: "It's time to take a stand.", pronunciation: "teyk e s-tend" },
        { phrase: "Middle ground", meaning: "Orta yol", context: "Tartışma", example: "Can we find some middle ground?", pronunciation: "mi-dıl g-ra-und" },
        { phrase: "Root cause", meaning: "Temel neden", context: "Tartışma", example: "What is the root cause of the poverty?", pronunciation: "ru-ut koz" },
        { phrase: "Subjective view", meaning: "Öznel görüş", context: "Tartışma", example: "That's just a subjective view.", pronunciation: "sab-cek-tiv v-yu" },
        { phrase: "Policy change", meaning: "Politika değişikliği", context: "Politika", example: "We need an urgent policy change.", pronunciation: "po-li-si çeync" },
        { phrase: "Human rights", meaning: "İnsan hakları", context: "Toplum", example: "Respect human rights at all times.", pronunciation: "hyu-mın rayts" },
        { phrase: "Climate advocacy", meaning: "İklim savunuculuğu", context: "Çevre", example: "Climate advocacy is growing worldwide.", pronunciation: "k-lay-mıt ed-vo-ka-si" },
        { phrase: "Freedom of speech", meaning: "İfade özgürlüğü", context: "Toplum", example: "Protecting freedom of speech is vital.", pronunciation: "f-ri-dım ov s-pi-iç" },
        { phrase: "Conflict of interest", meaning: "Çıkar çatışması", context: "Tartışma", example: "There was a clear conflict of interest.", pronunciation: "kon-f-likt ov in-t-rest" },
        { phrase: "The lesser of two evils", meaning: "Kötünün iyisi", context: "Karar", example: "This choice is the lesser of two evils.", pronunciation: "dı le-sır ov tu i-vıls" }
    ]
};

// Unit 203: Akademik Okuma
export const u203: EnglishPhraseUnit = {
    unitId: 203, title: "Akademik Okuma", phrases: [
        { phrase: "Abstract", meaning: "Özet / Özetçe", context: "Akademik", example: "Read the abstract before the paper.", pronunciation: "eb-s-t-rakt" },
        { phrase: "Peer-reviewed journal", meaning: "Hakemli dergi", context: "Akademik", example: "Publish in a peer-reviewed journal.", pronunciation: "pi-ir ri-v-yud cör-nıl" },
        { phrase: "Hypothesis", meaning: "Hipotez / Varsayım", context: "Akademik", example: "The hypothesis was tested thoroughly.", pronunciation: "hay-po-te-sis" },
        { phrase: "Empirical evidence", meaning: "Deneysel kanıt", context: "Akademik", example: "We need more empirical evidence.", pronunciation: "em-pi-ri-kıl e-vi-dıns" },
        { phrase: "Cited works", meaning: "Atıfta bulunulan eserler", context: "Akademik", example: "Check the list of cited works.", pronunciation: "say-tid vörks" },
        { phrase: "Methodology", meaning: "Metodoloji / Yöntem bilim", context: "Akademik", example: "Explain the methodology in detail.", pronunciation: "me-to-do-lo-ci" },
        { phrase: "Correlation", meaning: "Korelasyon / İlişki", context: "Akademik", example: "There is a strong correlation between them.", pronunciation: "ko-re-ley-şın" },
        { phrase: "Literature review", meaning: "Literatür taraması", context: "Akademik", example: "I'm currently writing the literature review.", pronunciation: "li-tı-re-çur ri-v-yu" },
        { phrase: "Quantitative data", meaning: "Nicel veri", context: "Akademik", example: "Collect quantitative data for analysis.", pronunciation: "kvan-ti-te-tiv de-ta" },
        { phrase: "Qualitative research", meaning: "Nitel araştırma", context: "Akademik", example: "He specializes in qualitative research.", pronunciation: "kvo-li-te-tiv ri-sörç" },
        { phrase: "Statistical significance", meaning: "İstatistiksel anlamlılık", context: "Akademik", example: "The result has statistical significance.", pronunciation: "s-te-tis-ti-kıl sig-ni-fi-kıns" },
        { phrase: "Primary source", meaning: "Birincil kaynak", context: "Akademik", example: "Always consult the primary source.", pronunciation: "p-ray-me-ri sors" },
        { phrase: "Case study", meaning: "Vaka çalışması", context: "Akademik", example: "We analyzed the case study together.", pronunciation: "keys s-ta-di" },
        { phrase: "Thesis statement", meaning: "Tez cümlesi", context: "Akademik", example: "Your thesis statement should be clear.", pronunciation: "ti-sis s-teyt-mınt" },
        { phrase: "Theoretical framework", meaning: "Teorik çerçeve", context: "Akademik", example: "Define the theoretical framework.", pronunciation: "ti-o-re-ti-kıl f-reym-vörk" }
    ]
};

// Unit 204: Eleştirel Düşünme
export const u204: EnglishPhraseUnit = {
    unitId: 204, title: "Eleştirel Düşünme", phrases: [
        { phrase: "Draw a conclusion", meaning: "Sonuç çıkarmak", context: "Düşünme", example: "It's too early to draw a conclusion.", pronunciation: "d-ro e kon-k-lu-jın" },
        { phrase: "Evaluate arguments", meaning: "Argümanları değerlendirmek", context: "Düşünme", example: "Learn to evaluate arguments critically.", pronunciation: "i-val-yu-eyt ar-gyu-mınts" },
        { phrase: "Analytical skills", meaning: "Analitik beceriler", context: "Düşünme", example: "Analytical skills are essential here.", pronunciation: "e-ne-li-ti-kıl s-kilz" },
        { phrase: "Identify bias", meaning: "Önyargıyı tespit etmek", context: "Düşünme", example: "Can you identify any bias in the text?", pronunciation: "ay-den-ti-fay ba-yıs" },
        { phrase: "Logical reasoning", meaning: "Mantıksal akıl yürütme", context: "Düşünme", example: "Use logical reasoning to solve it.", pronunciation: "lo-ci-kıl ri-zı-ning" },
        { phrase: "Implicit meaning", meaning: "Örtük anlam", context: "Düşünme", example: "What is the implicit meaning here?", pronunciation: "im-p-li-sit mi-ning" },
        { phrase: "Explicit statement", meaning: "Açık ifade", context: "Düşünme", example: "It was an explicit statement of intent.", pronunciation: "eks-p-li-sit s-teyt-mınt" },
        { phrase: "Question assumptions", meaning: "Varsayımları sorgulamak", context: "Düşünme", example: "Crucially, we must question assumptions.", pronunciation: "k-ves-çın e-samp-şınz" },
        { phrase: "Reasoned judgment", meaning: "Gerekçeli yargı", context: "Düşünme", example: "Make a reasoned judgment based on facts.", pronunciation: "ri-zınd cac-mınt" },
        { phrase: "Critical perspective", meaning: "Eleştirel bakış açısı", context: "Düşünme", example: "Develop a critical perspective.", pronunciation: "k-ri-ti-kıl per-s-tek-tiv" },
        { phrase: "Validity of a claim", meaning: "Bir iddianın geçerliliği", context: "Düşünme", example: "Check the validity of a claim.", pronunciation: "va-li-di-ti ov e k-ley-m" },
        { phrase: "Rational thinking", meaning: "Rasyonel düşünme", context: "Düşünme", example: "Rational thinking leads to better results.", pronunciation: "re-şı-nıl tin-king" },
        { phrase: "Skepticism", meaning: "Şüphecilik", context: "Düşünme", example: "A healthy dose of skepticism is good.", pronunciation: "s-kep-ti-si-zım" },
        { phrase: "Objectivity", meaning: "Nesnellik", context: "Düşünme", example: "Maintain objectivity in your research.", pronunciation: "ob-cek-ti-vi-ti" },
        { phrase: "Distinguish facts from opinions", meaning: "Olguları görüşlerden ayırmak", context: "Düşünme", example: "Always distinguish facts from opinions.", pronunciation: "dis-tin-gviş fekts f-rom o-pin-yınz" }
    ]
};

// Unit 205: Uluslararası İlişkiler
export const u205: EnglishPhraseUnit = {
    unitId: 205, title: "Uluslararası İlişkiler", phrases: [
        { phrase: "Diplomatic immunity", meaning: "Diplomatik dokunulmazlık", context: "Diplomasi", example: "He claimed diplomatic immunity.", pronunciation: "dip-lo-me-tik i-myu-ni-ti" },
        { phrase: "Bilateral agreement", meaning: "İkili anlaşma", context: "Diplomasi", example: "A bilateral agreement was signed.", pronunciation: "bay-le-tı-rıl e-g-ri-mınt" },
        { phrase: "Trade embargo", meaning: "Ticaret ambargosu", context: "Siyaset", example: "The council voted for a trade embargo.", pronunciation: "t-reyd em-bar-go" },
        { phrase: "Foreign policy", meaning: "Dış politika", context: "Siyaset", example: "The new foreign policy is controversial.", pronunciation: "fo-rin po-li-si" },
        { phrase: "Humanitarian aid", meaning: "İnsani yardım", context: "Global", example: "Providing humanitarian aid to the region.", pronunciation: "hyu-me-ni-te-ri-yın eyd" },
        { phrase: "Sanctions", meaning: "Yaptırımlar", context: "Siyaset", example: "Imposing sanctions on the country.", pronunciation: "sen-k-şınz" },
        { phrase: "International law", meaning: "Uluslararası hukuk", context: "Hukuk", example: "In compliance with international law.", pronunciation: "in-tör-ne-şı-nıl lo" },
        { phrase: "Summit meeting", meaning: "Zirve toplantısı", context: "Diplomasi", example: "World leaders gathered for a summit meeting.", pronunciation: "sa-mit mi-ting" },
        { phrase: "Global security", meaning: "Küresel güvenlik", context: "Global", example: "Ensuring global security for everyone.", pronunciation: "g-lo-bıl se-kyu-ri-ti" },
        { phrase: "Peacekeeping forces", meaning: "Barış gücü", context: "Global", example: "Sending peacekeeping forces to the zone.", pronunciation: "pi-is-ki-ping for-sız" },
        { phrase: "Territorial integrity", meaning: "Toprak bütünlüğü", context: "Siyaset", example: "Respect the territorial integrity.", pronunciation: "te-ri-to-ri-yıl in-teg-ri-ti" },
        { phrase: "Visa requirements", meaning: "Vize gereksinimleri", context: "Seyahat", example: "Check the visa requirements beforehand.", pronunciation: "vi-za ri-kway-ır-mınts" },
        { phrase: "Foreign relations", meaning: "Dış ilişkiler", context: "Siyaset", example: "Stable foreign relations are important.", pronunciation: "fo-rin ri-ley-şınz" },
        { phrase: "Treaty of peace", meaning: "Barış antlaşması", context: "Geçmiş", example: "The treaty of peace was finalized.", pronunciation: "t-ri-ti ov pi-is" },
        { phrase: "National sovereignty", meaning: "Ulusal egemenlik", context: "Siyaset", example: "A matter of national sovereignty.", pronunciation: "ne-şı-nıl sov-rin-ti" }
    ]
};

// Unit 206: Medya Analizi
export const u206: EnglishPhraseUnit = {
    unitId: 206, title: "Medya Analizi", phrases: [
        { phrase: "Fake news", meaning: "Yalan haber", context: "Medya", example: "Don't believe everything in fake news.", pronunciation: "feyk nu-uz" },
        { phrase: "Clickbait", meaning: "Tık tuzağı", context: "Medya", example: "That article is just clickbait.", pronunciation: "k-lik-beyt" },
        { phrase: "Investigative journalism", meaning: "Araştırmacı gazetecilik", context: "Medya", example: "He won awards for investigative journalism.", pronunciation: "in-ves-ti-gey-tiv cör-nı-li-zım" },
        { phrase: "Mass media", meaning: "Kitle iletişim araçları", context: "Medya", example: "The power of mass media is huge.", pronunciation: "mes mi-di-ya" },
        { phrase: "Public relations", meaning: "Halkla ilişkiler", context: "İş", example: "He works in public relations.", pronunciation: "pab-lik ri-ley-şınz" },
        { phrase: "Media bias", meaning: "Medya önyargısı", context: "Medya", example: "Analyzing media bias in election coverage.", pronunciation: "mi-di-ya ba-yıs" },
        { phrase: "Target audience", meaning: "Hedef kitle", context: "Pazarlama", example: "Identify your target audience.", pronunciation: "tar-git o-di-yıns" },
        { phrase: "Broadcast", meaning: "Yayın / Yayınlamak", context: "Medya", example: "Live broadcast from the scene.", pronunciation: "b-rod-kast" },
        { phrase: "Censorship", meaning: "Sansür", context: "Siyaset", example: "Internet censorship is a major issue.", pronunciation: "sen-sör-şip" },
        { phrase: "Viral content", meaning: "Viral içerik", context: "Sosyal Medya", example: "The video became a viral content.", pronunciation: "va-y-rıl kon-tent" },
        { phrase: "Source verification", meaning: "Kaynak doğrulaması", context: "Gazetecilik", example: "Source verification is critical.", pronunciation: "sors ve-ri-fi-key-şın" },
        { phrase: "Newsfeed", meaning: "Haber kaynağı", context: "Medya", example: "Check your newsfeed for updates.", pronunciation: "nu-uz-fi-id" },
        { phrase: "Press release", meaning: "Basın bülteni", context: "Medya", example: "The official press release was issued.", pronunciation: "p-res ri-li-is" },
        { phrase: "Sensationalism", meaning: "Sansasyonellik", context: "Medya", example: "Avoid sensationalism in the news.", pronunciation: "sen-sey-şı-ne-li-zım" },
        { phrase: "Prime time", meaning: "En çok izlenen zaman", context: "TV", example: "The show airs during prime time.", pronunciation: "p-raym taym" }
    ]
};

// Unit 207: İş İngilizcesi 2
export const u207: EnglishPhraseUnit = {
    unitId: 207, title: "İş İngilizcesi 2", phrases: [
        { phrase: "Market share", meaning: "Pazar payı", context: "İş", example: "The company has a large market share.", pronunciation: "mar-kıt şe-ir" },
        { phrase: "Strategic partnership", meaning: "Stratejik ortaklık", context: "İş", example: "Forming a strategic partnership with them.", pronunciation: "s-t-ra-te-cik part-nır-şip" },
        { phrase: "Competitive edge", meaning: "Rekabet avantajı", context: "İş", example: "What is our competitive edge?", pronunciation: "kom-pe-ti-tiv eç" },
        { phrase: "Supply chain", meaning: "Tedarik zinciri", context: "İş", example: "Disruption in the supply chain.", pronunciation: "sı-play çeyn" },
        { phrase: "Core competency", meaning: "Temel yetkinlik", context: "İş", example: "Focus on our core competency.", pronunciation: "kor kom-pı-tın-si" },
        { phrase: "Stakeholder", meaning: "Paydaş", context: "İş", example: "Consulting all stakeholders for the project.", pronunciation: "s-teyk-ho-l-dır" },
        { phrase: "Venture capital", meaning: "Risk sermayesi", context: "Finans", example: "Looking for venture capital funding.", pronunciation: "ven-çur ke-pi-tıl" },
        { phrase: "Acquisition", meaning: "Satın alma / İktisap", context: "İş", example: "The company made a major acquisition.", pronunciation: "e-k-vi-zi-şın" },
        { phrase: "Board of directors", meaning: "Yönetim kurulu", context: "Yönetim", example: "The board of directors met today.", pronunciation: "bord ov di-rek-törz" },
        { phrase: "Executive summary", meaning: "Yönetici özeti", context: "Rapor", example: "Write a summary for the executives.", pronunciation: "eg-ze-ku-tiv sa-mı-ri" },
        { phrase: "Outsourcing", meaning: "Dış kaynak kullanımı", context: "İş", example: "Outsourcing IT services to India.", pronunciation: "aut-sor-sing" },
        { phrase: "Performance appraisal", meaning: "Performans değerlendirmesi", context: "İK", example: "Quarterly performance appraisal session.", pronunciation: "per-for-mıns e-p-rey-zıl" },
        { phrase: "Scalability", meaning: "Ölçeklenebilirlik", context: "İş", example: "We need to ensure scalability.", pronunciation: "s-key-le-bi-li-ti" },
        { phrase: "Turnover rate", meaning: "Ciro oranı / İşçi devir hızı", context: "İş", example: "The high turnover rate is concerning.", pronunciation: "törn-o-vır reyt" },
        { phrase: "Unique selling point", meaning: "Benzersiz satış noktası", context: "Pazarlama", example: "What is your unique selling point?", pronunciation: "yu-ni-ik se-ling poynt" }
    ]
};

// Unit 208: Proje Yönetimi
export const u208: EnglishPhraseUnit = {
    unitId: 208, title: "Proje Yönetimi", phrases: [
        { phrase: "Deliverables", meaning: "Teslimatlar", context: "Proje", example: "The deliverables are due on Friday.", pronunciation: "de-li-vı-rı-bılz" },
        { phrase: "Milestone", meaning: "Dönüm noktası / Kilometre taşı", context: "Proje", example: "We reached an important milestone.", pronunciation: "mayl-s-toun" },
        { phrase: "Gantt chart", meaning: "Gantt diyagramı", context: "Proje", example: "Use a Gantt chart for scheduling.", pronunciation: "gant çart" },
        { phrase: "Critical path", meaning: "Kritik yol", context: "Proje", example: "Identify the critical path in the project.", pronunciation: "k-ri-ti-kıl path" },
        { phrase: "Risk management", meaning: "Risk yönetimi", context: "Proje", example: "A robust risk management plan.", pronunciation: "risk me-nıc-mınt" },
        { phrase: "Allocate resources", meaning: "Kaynak tahsis etmek", context: "Proje", example: "Allocate resources effectively.", pronunciation: "e-lo-keyt ri-sor-sız" },
        { phrase: "Kick-off meeting", meaning: "Proje başlatma toplantısı", context: "Proje", example: "The kick-off meeting starts at 10.", pronunciation: "kik of mi-ting" },
        { phrase: "Scope creep", meaning: "Kapsam genişlemesi", context: "Proje", example: "Avoid scope creep during development.", pronunciation: "s-koup k-ri-ip" },
        { phrase: "After-action review", meaning: "Eylem sonrası değerlendirme", context: "Proje", example: "Conduct an after-action review.", pronunciation: "af-tır ek-şın ri-v-yu" },
        { phrase: "Project charter", meaning: "Proje tüzüğü", context: "Proje", example: "Signed the project charter today.", pronunciation: "p-ro-cekt çar-tır" },
        { phrase: "Stakeholder engagement", meaning: "Paydaş katılımı", context: "Proje", example: "Involve stakeholder engagement early.", pronunciation: "s-teyk-ho-l-dır en-geyc-mınt" },
        { phrase: "Agile methodology", meaning: "Agile / Çevik metodoloji", context: "Proje", example: "We are using Agile methodology.", pronunciation: "e-cayl me-to-do-lo-ci" },
        { phrase: "Quality assurance", meaning: "Kalite güvencesi", context: "Proje", example: "Focus on quality assurance.", pronunciation: "kvo-li-ti e-şu-rıns" },
        { phrase: "Bottleneck", meaning: "Tıkanıklık", context: "Proje", example: "Find the bottleneck in the process.", pronunciation: "bo-tıl-nek" },
        { phrase: "Work breakdown structure", meaning: "İş kırılım yapısı", context: "Proje", example: "Define the work breakdown structure.", pronunciation: "vörk b-reykda-un s-t-rak-çur" }
    ]
};

// Unit 209: Kültürlerarası İletişim
export const u209: EnglishPhraseUnit = {
    unitId: 209, title: "Kültürlerarası İletişim", phrases: [
        { phrase: "Cultural sensitivity", meaning: "Kültürel hassasiyet", context: "Kültür", example: "Maintain cultural sensitivity always.", pronunciation: "kal-çu-rıl sen-si-ti-vi-ti" },
        { phrase: "Language barrier", meaning: "Dil engeli", context: "İletişim", example: "Overcoming the language barrier.", pronunciation: "len-gvic be-ri-yır" },
        { phrase: "Non-verbal communication", meaning: "Sözsüz iletişim", context: "İletişim", example: "Understand non-verbal communication.", pronunciation: "non vör-bıl ko-myu-ni-key-şın" },
        { phrase: "Body language", meaning: "Beden dili", context: "İletişim", example: "Body language varies by culture.", pronunciation: "bo-di len-gvic" },
        { phrase: "Cultural etiquette", meaning: "Kültürel görgü kuralları", context: "Kültür", example: "Learn local cultural etiquette.", pronunciation: "kal-çu-rıl e-ti-ket" },
        { phrase: "Global mindset", meaning: "Küresel zihniyet", context: "Gelişim", example: "Develop a global mindset.", pronunciation: "g-lo-bıl maynd-set" },
        { phrase: "Intercultural competence", meaning: "Kültürlerarası yetkinlik", context: "Gelişim", example: "Gain intercultural competence.", pronunciation: "in-tör-kal-çu-rıl kom-pı-tıns" },
        { phrase: "Cultural awareness", meaning: "Kültürel farkındalık", context: "Gelişim", example: "Cultural awareness helps teamwork.", pronunciation: "kal-çu-rıl e-ver-nıs" },
        { phrase: "Stereotype", meaning: "Kalıplaşmış yargı / Stereotip", context: "Toplum", example: "Avoid a stereotype about people.", pronunciation: "s-te-re-o-tayp" },
        { phrase: "High-context culture", meaning: "Yüksek bağlamlı kültür", context: "Kültür", example: "Japan is a high-context culture.", pronunciation: "hay kon-tekst kal-çur" },
        { phrase: "Direct vs Indirect approach", meaning: "Doğrudan vs Dolaylı yaklaşım", context: "İletişim", example: "Adjust to the direct approach.", pronunciation: "di-rekt vör-sız in-di-rekt e-p-rouç" },
        { phrase: "Expatriate", meaning: "Yurt dışında yaşayan biri", context: "Yaşam", example: "She lives as an expatriate in Turkey.", pronunciation: "eks-pey-t-ri-yıt" },
        { phrase: "Multiculturalism", meaning: "Çok kültürlülük", context: "Toplum", example: "The benefits of multiculturalism.", pronunciation: "mal-ti-kal-çur-ı-li-zım" },
        { phrase: "Deep structure of culture", meaning: "Kültürün derin yapısı", context: "Kültür", example: "Study the deep structure of culture.", pronunciation: "di-ip s-t-rak-çur ov kal-çur" },
        { phrase: "Global citizenship", meaning: "Dünya vatandaşlığı", context: "Toplum", example: "Promoting global citizenship.", pronunciation: "g-lo-bıl si-ti-zın-şip" }
    ]
};

// Unit 210: Kariyer Geliştirme
export const u210: EnglishPhraseUnit = {
    unitId: 210, title: "Kariyer Geliştirme", phrases: [
        { phrase: "Career goal", meaning: "Kariyer hedefi", context: "Kariyer", example: "What is your long-term career goal?", pronunciation: "ka-ri-ır gol" },
        { phrase: "Professional networking", meaning: "Mesleki ağ kurma", context: "Kariyer", example: "The importance of professional networking.", pronunciation: "p-ro-fe-şı-nıl net-vör-king" },
        { phrase: "Work-life balance", meaning: "İş-özel hayat dengesi", context: "Yaşam", example: "Striving for a good work-life balance.", pronunciation: "vörk layf be-lıns" },
        { phrase: "Personal branding", meaning: "Kişisel markalaşma", context: "Kariyer", example: "Build your personal branding online.", pronunciation: "per-sı-nıl b-ren-ding" },
        { phrase: "Soft skills", meaning: "Kişisel beceriler (yumuşak beceriler)", context: "Beceri", example: "Soft skills are highly valued.", pronunciation: "soft s-kilz" },
        { phrase: "Professional resume", meaning: "Profesyonel CV", context: "Başvuru", example: "Submit your professional resume.", pronunciation: "p-ro-fe-şı-nıl re-zu-mey" },
        { phrase: "Lifelong learning", meaning: "Yaşam boyu öğrenme", context: "Gelişim", example: "Commit to lifelong learning.", pronunciation: "layf-long lör-ning" },
        { phrase: "Mentorship program", meaning: "Mentorluk programı", context: "Kariyer", example: "Join the company mentorship program.", pronunciation: "men-tör-şip p-ro-g-rem" },
        { phrase: "Job security", meaning: "İş güvencesi", context: "İş", example: "Many people seek job security.", pronunciation: "cob se-kyu-ri-ti" },
        { phrase: "Promotion opportunity", meaning: "Terfi fırsatı", context: "Kariyer", example: "Is there any promotion opportunity?", pronunciation: "p-ro-mo-şın o-por-tu-ni-ti" },
        { phrase: "Lateral move", meaning: "Yatay geçiş / hareket", context: "Kariyer", example: "Considered a lateral move to another team.", pronunciation: "le-tı-rıl mu-uv" },
        { phrase: "Skill gap", meaning: "Beceri eksiği", context: "Beceri", example: "Identify the skill gap in your team.", pronunciation: "s-kil gep" },
        { phrase: "Career ladder", meaning: "Kariyer basamakları", context: "Kariyer", example: "Climbing the career ladder quickly.", pronunciation: "ka-ri-ır le-dır" },
        { phrase: "Resignation", meaning: "İstifa", context: "Kariyer", example: "He handed in his resignation.", pronunciation: "re-zig-ne-yışın" },
        { phrase: "Upskilling", meaning: "Ek beceri kazanma", context: "Gelişim", example: "Invest in upskilling employees.", pronunciation: "ap-s-kil-ing" }
    ]
};

// Unit 211: Inversion
export const u211: EnglishPhraseUnit = {
    unitId: 211, title: "Inversion", phrases: [
        { phrase: "Not only... but also", meaning: "Sadece... değil, aynı zamanda", context: "Inversion", example: "Not only did he arrive late, but he also forgot his notes.", pronunciation: "not on-li ... bat ol-so" },
        { phrase: "Scarcely had I", meaning: "Henüz ... yapmıştım ki", context: "Inversion", example: "Scarcely had I sat down when the bell rang.", pronunciation: "s-ke-ırs-li hed ay" },
        { phrase: "Should you see her", meaning: "Eğer onu görürsen", context: "Inversion (Condition)", example: "Should you see her, tell her I called.", pronunciation: "şud yu si hör" },
        { phrase: "Had I known", meaning: "Bilseydim", context: "Inversion (Condition)", example: "Had I known the truth, I wouldn't have come.", pronunciation: "hed ay noun" },
        { phrase: "Were I in your position", meaning: "Senin yerinde olsaydım", context: "Inversion (Condition)", example: "Were I in your position, I wouldn't go.", pronunciation: "vör ay in yor po-zi-şın" },
        { phrase: "Rarely do we witness", meaning: "Nadiren tanık oluruz", context: "Inversion", example: "Rarely do we witness such a sunset.", pronunciation: "re-ır-li du vi vit-nıs" },
        { phrase: "Never have I ever", meaning: "Asla ... yapmadım", context: "Inversion", example: "Never have I ever been to America.", pronunciation: "ne-vır hev ay e-vır" },
        { phrase: "Under no circumstances", meaning: "Hiçbir koşulda", context: "Inversion", example: "Under no circumstances can we accept this.", pronunciation: "an-dır no sör-kım-s-ten-sız" },
        { phrase: "Nowhere else can you find", meaning: "Başka hiçbir yerde bulamazsınız", context: "Inversion", example: "Nowhere else can you find such tea.", pronunciation: "no-ver els ken yu faynd" },
        { phrase: "On no account", meaning: "Hiçbir şekilde", context: "Inversion", example: "On no account should you touch that.", pronunciation: "on no e-ka-unt" },
        { phrase: "Only in this way", meaning: "Sadece bu şekilde", context: "Inversion", example: "Only in this way can we succeed.", pronunciation: "on-li in dis vey" },
        { phrase: "So quickly did he run", meaning: "O kadar hızlı koştu ki", context: "Inversion", example: "So quickly did he run that he won.", pronunciation: "so k-vik-li did hi ran" },
        { phrase: "Only after long thought", meaning: "Ancak uzun bir düşünceden sonra", context: "Inversion", example: "Only after long thought did I agree.", pronunciation: "on-li af-tır long tot" },
        { phrase: "Not since the war", meaning: "Savaştan beri değil", context: "Inversion", example: "Not since the war has this happened.", pronunciation: "not sins dı vor" },
        { phrase: "Such was our surprise", meaning: "Şaşkınlığımız öyleydi ki", context: "Inversion", example: "Such was our surprise that we froze.", pronunciation: "saç vaz au-ır sı-p-rayz" }
    ]
};

// Unit 212: Mixed Conditionals
export const u212: EnglishPhraseUnit = {
    unitId: 212, title: "Mixed Conditionals", phrases: [
        { phrase: "If I had been born rich", meaning: "Zengin doğmuş olsaydım", context: "Mixed Conditional", example: "If I had been born rich, I wouldn't be working now.", pronunciation: "if ay hed bi-in born riç" },
        { phrase: "Were I you", meaning: "Senin yerinde olsaydım", context: "Conditional", example: "Were I you, I would have taken the offer.", pronunciation: "vör ay yu" },
        { phrase: "Had I studied harder", meaning: "Daha sıkı çalışmış olsaydım", context: "Conditional", example: "Had I studied harder, I would be a doctor now.", pronunciation: "hed ay s-ta-did har-dır" },
        { phrase: "If he lived here", meaning: "Burada yaşıyor olsaydı", context: "Conditional", example: "If he lived here, he would have called us.", pronunciation: "if hi livd hi-8" },
        { phrase: "Unless it were true", meaning: "Gerçek olmasaydı", context: "Conditional", example: "Unless it were true, she wouldn't say it.", pronunciation: "an-les it vör t-ru" },
        { phrase: "But for your help", meaning: "Yardımın olmasa", context: "Conditional", example: "But for your help, I would be in trouble now.", pronunciation: "bat for yor help" },
        { phrase: "Provided that the weather stays", meaning: "Hava böyle kaldığı sürece", context: "Conditional", example: "Provided that the weather stays good, we'll go.", pronunciation: "p-ro-vay-did det dı ve-dır s-teyz" },
        { phrase: "Suppose you were him", meaning: "Diyelim ki onun yerindesin", context: "Conditional", example: "Suppose you were him, what would you do?", pronunciation: "sı-pouz yu vör him" },
        { phrase: "Imagine we had won", meaning: "Kazandığımızı hayal et", context: "Hypothetical", example: "Imagine we had won the lottery!", pronunciation: "i-me-cin vi hed van" },
        { phrase: "What if it rained?", meaning: "Ya yağmur yağsaydı?", context: "Hypothetical", example: "What if it rained during the party?", pronunciation: "vat if it reynd" },
        { phrase: "I wish I were", meaning: "Keşke ... olsaydım", context: "Wish", example: "I wish I were there with you.", pronunciation: "ay viş ay vör" },
        { phrase: "If only I had known", meaning: "Keşke bilmiş olsaydım", context: "Wish", example: "If only I had known about the problem earlier.", pronunciation: "if on-li ay hed noun" },
        { phrase: "Whether or not you like it", meaning: "Sevsen de sevmesen de", context: "Conditional", example: "Whether or not you like it, I'm going.", pronunciation: "ve-dır or not yu layk it" },
        { phrase: "Even if it costs more", meaning: "Daha pahalıya patlasa bile", context: "Conditional", example: "Even if it costs more, I want it.", pronunciation: "i-vın if it kosts mor" },
        { phrase: "As if he had seen a ghost", meaning: "Sanki hayalet görmüş gibi", context: "Comparison", example: "He looked as if he had seen a ghost.", pronunciation: "ez if hi hed si-in e gous-t" }
    ]
};

// Unit 213: Advanced Passive
export const u213: EnglishPhraseUnit = {
    unitId: 213, title: "Advanced Passive", phrases: [
        { phrase: "It is estimated that", meaning: "Tahmin ediliyor ki", context: "Passive", example: "It is estimated that the population will grow.", pronunciation: "it iz es-ti-mey-tid det" },
        { phrase: "He is said to be", meaning: "Onun ... olduğu söylenir", context: "Passive", example: "He is said to be the richest man here.", pronunciation: "hi iz sed tu bi" },
        { phrase: "It was believed", meaning: "İnanılıyordu ki", context: "Passive", example: "It was believed that the earth was flat.", pronunciation: "it vaz bi-li-ivd" },
        { phrase: "The results are reported to", meaning: "Sonuçların ... olduğu bildiriliyor", context: "Passive", example: "The results are reported to be excellent.", pronunciation: "dı ri-zalt-s ar ri-por-tid tu" },
        { phrase: "They are expected to arrive", meaning: "Varmaları bekleniyor", context: "Passive", example: "They are expected to arrive by 8 PM.", pronunciation: "dey ar ek-s-pek-tid tu e-rayv" },
        { phrase: "To be seen as", meaning: "Olarak görülmek", context: "Passive", example: "This move is seen as a major success.", pronunciation: "tu bi si-in ez" },
        { phrase: "Being followed", meaning: "Takip ediliyor olma", context: "Passive Gerund", example: "I hate the feeling of being followed.", pronunciation: "bi-ing fo-loud" },
        { phrase: "Having been used", meaning: "Kullanılmış olma", context: "Passive Participle", example: "The car, having been used for years, broke down.", pronunciation: "he-ving bi-in yuzd" },
        { phrase: "It should be noted", meaning: "Belirtilmelidir ki", context: "Passive", example: "It should be noted that we lack funds.", pronunciation: "it şud bi no-ut-id" },
        { phrase: "To be considered", meaning: "Dikkate alınmak", context: "Passive", example: "There are many factors to be considered.", pronunciation: "tu bi kon-si-dırd" },
        { phrase: "Will be being processed", meaning: "İşleniyor olacak", context: "Future Continuous Passive", example: "Your data will be being processed soon.", pronunciation: "vil bi bi-ing p-ro-ses-t" },
        { phrase: "Had been being monitored", meaning: "İzlenmekteydi", context: "Past Perfect Continuous Passive", example: "The suspect had been being monitored for weeks.", pronunciation: "hed bi-in bi-ing mo-ni-törd" },
        { phrase: "To be granted", meaning: "Bahşedilmek / Verilmek", context: "Passive", example: "You will be granted access tomorrow.", pronunciation: "tu bi g-ran-tid" },
        { phrase: "Under construction", meaning: "Yapım aşamasında", context: "State", example: "The building is currently under construction.", pronunciation: "an-dır kon-s-t-rak-şın" },
        { phrase: "Being held responsible", meaning: "Sorumlu tutulmak", context: "Passive", example: "No one wants to be held responsible.", pronunciation: "bi-ing held ri-s-pon-si-bıl" }
    ]
};

// Unit 214: Cleft Sentences
export const u214: EnglishPhraseUnit = {
    unitId: 214, title: "Cleft Sentences", phrases: [
        { phrase: "It was John who...", meaning: "Yapan John'du", context: "Cleft", example: "It was John who broke the window.", pronunciation: "it vaz con hu" },
        { phrase: "What I need is", meaning: "İhtiyacım olan şey", context: "Cleft", example: "What I need is a strong coffee.", pronunciation: "vat ay ni-id iz" },
        { phrase: "It is here that", meaning: "Tam burasıdır ki", context: "Cleft", example: "It is here that the accident happened.", pronunciation: "it iz hi-ır det" },
        { phrase: "The person who...", meaning: "Yapan kişi", context: "Cleft", example: "The person who told me was Sarah.", pronunciation: "dı per-sın hu" },
        { phrase: "The reason why...", meaning: "Nedeni şudur ki", context: "Cleft", example: "The reason why I'm here is to help.", pronunciation: "dı ri-zın vay" },
        { phrase: "All I want is", meaning: "Tek istediğim", context: "Cleft", example: "All I want is a peaceful life.", pronunciation: "ol ay vont iz" },
        { phrase: "It was then that", meaning: "İşte o zamandı ki", context: "Cleft", example: "It was then that I realized the truth.", pronunciation: "it vaz den det" },
        { phrase: "The thing that surprises me", meaning: "Beni şaşırtan şey", context: "Cleft", example: "The thing that surprises me is his attitude.", pronunciation: "dı ting det sı-p-ray-zız mi" },
        { phrase: "The way he did it", meaning: "Onu yapış şekli", context: "Cleft", example: "The way he did it was amazing.", pronunciation: "dı vey hi did it" },
        { phrase: "It wasn't until yesterday", meaning: "Ancak dün oldu ki", context: "Cleft", example: "It wasn't until yesterday that I found out.", pronunciation: "it vaz-ınt an-til yes-tır-dey" },
        { phrase: "What happened was", meaning: "Olan şuydu ki", context: "Cleft", example: "What happened was quite unexpected.", pronunciation: "vat he-pınd vaz" },
        { phrase: "It is because of you", meaning: "Senin sayendedir / yüzündendir", context: "Cleft", example: "It is because of you that we won.", pronunciation: "it iz bi-koz ov yu" },
        { phrase: "It was with difficulty", meaning: "Zorlukla oldu", context: "Cleft", example: "It was with difficulty that we finished.", pronunciation: "it vaz vid di-fi-kal-ti det" },
        { phrase: "The place where...", meaning: "Yerin kendisi", context: "Cleft", example: "The place where I born is very small.", pronunciation: "dı p-le-yıs ver" },
        { phrase: "What bothers me is", meaning: "Beni rahatsız eden şey", context: "Cleft", example: "What bothers me is the noise.", pronunciation: "vat ba-dırz mi iz" }
    ]
};

// Unit 215: Advanced Vocabulary
export const u215: EnglishPhraseUnit = {
    unitId: 215, title: "Advanced Vocabulary", phrases: [
        { phrase: "Eloquent", meaning: "Nutku kuvvetli / Hitabeti güçlü", context: "Sıfat", example: "She gave a very eloquent speech.", pronunciation: "e-lo-kvent" },
        { phrase: "Meticulous", meaning: "Titiz / Özenli", context: "Sıfat", example: "He is meticulous about his work.", pronunciation: "me-ti-kyu-lis" },
        { phrase: "Pinnacle", meaning: "Zirve / Doruk", context: "İsim", example: "He reached the pinnacle of his career.", pronunciation: "pi-nı-kıl" },
        { phrase: "Ubiqutous", meaning: "Her yerde bulunan", context: "Sıfat", example: "Mobile phones are ubiquitous nowadays.", pronunciation: "yu-bi-kvi-tis" },
        { phrase: "Obscure", meaning: "Belirsiz / Anlaşılması zor", context: "Sıfat", example: "The meaning of the poem is obscure.", pronunciation: "ob-s-kyu-ır" },
        { phrase: "Pragmatic", meaning: "Pragmatik / Uygulamacı", context: "Sıfat", example: "We need to find a pragmatic solution.", pronunciation: "p-rag-me-tik" },
        { phrase: "Resilient", meaning: "Dirençli / Esnek", context: "Sıfat", example: "Children are often very resilient.", pronunciation: "ri-zi-li-yınt" },
        { phrase: "Superfluous", meaning: "Gereksiz / Fazlalık", context: "Sıfat", example: "That information is superfluous.", pronunciation: "su-per-f-lu-is" },
        { phrase: "Venerable", meaning: "Saygın / Muhterem", context: "Sıfat", example: "A venerable old professor.", pronunciation: "ve-nı-rı-bıl" },
        { phrase: "Widespread", meaning: "Yaygın", context: "Sıfat", example: "The problem is widespread across the city.", pronunciation: "vayd-s-p-red" },
        { phrase: "Bolster", meaning: "Desteklemek / Güçlendirmek", context: "Fiil", example: "Evidence to bolster the argument.", pronunciation: "bol-s-tır" },
        { phrase: "Conundrum", meaning: "Bilinmeze / Muamma", context: "İsim", example: "It is a difficult conundrum to solve.", pronunciation: "ko-nan-drım" },
        { phrase: "Dwindle", meaning: "Azalmak / Küçülmek", context: "Fiil", example: "Resources are starting to dwindle.", pronunciation: "d-vin-dıl" },
        { phrase: "Fascinating", meaning: "Büyüleyici", context: "Sıfat", example: "The history of Rome is fascinating.", pronunciation: "fe-si-ney-ting" },
        { phrase: "Ingenuity", meaning: "Ustalık / Marifet", context: "İsim", example: "I admire his ingenuity and creativity.", pronunciation: "in-ce-nu-i-ti" }
    ]
};

// Unit 216: Essay Writing
export const u216: EnglishPhraseUnit = {
    unitId: 216, title: "Essay Writing", phrases: [
        { phrase: "First and foremost", meaning: "Her şeyden önce", context: "Bağlaç", example: "First and foremost, we must stop the fire.", pronunciation: "först end for-moust" },
        { phrase: "Furthermore", meaning: "Ayrıca / Dahası", context: "Bağlaç", example: "Furthermore, it is very expensive.", pronunciation: "för-dır-mor" },
        { phrase: "In contrast", meaning: "Aksine / Karşıt olarak", context: "Bağlaç", example: "In contrast, his brother is quite tall.", pronunciation: "in kon-t-rast" },
        { phrase: "On the other hand", meaning: "Öte yandan", context: "Bağlaç", example: "On the other hand, it's very convenient.", pronunciation: "on dı a-dır hend" },
        { phrase: "Consequently", meaning: "Sonuç olarak", context: "Bağlaç", example: "Consequently, the project was delayed.", pronunciation: "kon-si-kvent-li" },
        { phrase: "Nevertheless", meaning: "Yine de / Buna rağmen", context: "Bağlaç", example: "It was late; nevertheless, we finished.", pronunciation: "ne-vır-dı-les" },
        { phrase: "To illustrate", meaning: "Örneklendirmek gerekirse", context: "Bağlaç", example: "To illustrate, look at this example.", pronunciation: "tu i-las-t-reyt" },
        { phrase: "Implicitly", meaning: "Dolaylı yoldan", context: "Zarf", example: "He suggested the idea implicitly.", pronunciation: "im-p-li-sit-li" },
        { phrase: "Admittedly", meaning: "Kabul etmek gerekir ki", context: "Bağlaç", example: "Admittedly, it was my mistake.", pronunciation: "ed-mi-tid-li" },
        { phrase: "By and large", meaning: "Genel olarak", context: "Zarf", example: "By and large, it's a good plan.", pronunciation: "bay end larç" },
        { phrase: "Given that", meaning: "Dikkate alındığında", context: "Bağlaç", example: "Given that it's raining, we should stay in.", pronunciation: "gi-vın det" },
        { phrase: "In terms of", meaning: "Bakımından / Açısından", context: "Bağlaç", example: "In terms of cost, it's expensive.", pronunciation: "in törmz ov" },
        { phrase: "Regarding", meaning: "İlgili", context: "Bağlaç", example: "I'm writing regarding your order.", pronunciation: "ri-gar-ding" },
        { phrase: "Transitioning into", meaning: "...konusuna geçerken", context: "Geçiş", example: "Transitioning into the main theme.", pronunciation: "t-ran-zi-şı-ning in-tu" },
        { phrase: "Final thoughts", meaning: "Son düşünceler", context: "Kapanış", example: "My final thoughts on the topic.", pronunciation: "fay-nıl tots" }
    ]
};

// Unit 217: Speaking Fluency
export const u217: EnglishPhraseUnit = {
    unitId: 217, title: "Speaking Fluency", phrases: [
        { phrase: "Fillers", meaning: "Dolgu kelimeler (um, well, like)", context: "Konuşma", example: "Avoid using too many fillers.", pronunciation: "fi-lırs" },
        { phrase: "To put it another way", meaning: "Başka bir deyişle", context: "Konuşma", example: "To put it another way, he's rich.", pronunciation: "tu put it e-na-dır vey" },
        { phrase: "What I'm trying to say is", meaning: "Söylemeye çalıştığım şey", context: "Konuşma", example: "What I'm trying to say is it's risky.", pronunciation: "vat aym t-ra-ying tu sey iz" },
        { phrase: "It goes without saying", meaning: "Söylemeye gerek yok ki", context: "Vurgu", example: "It goes without saying that health is important.", pronunciation: "it gouz vi-da-ut se-ying" },
        { phrase: "To be honest", meaning: "Dürüst olmak gerekirse", context: "Konuşma", example: "To be honest, I don't know.", pronunciation: "tu bi o-nist" },
        { phrase: "Anyway", meaning: "Her neyse", context: "Bağlaç", example: "Anyway, let's get back to the topic.", pronunciation: "e-ni-vey" },
        { phrase: "In a nutshell", meaning: "Kısacası / Özetle", context: "Özet", example: "In a nutshell, we are broke.", pronunciation: "in e nat-şel" },
        { phrase: "On top of that", meaning: "Dahası / Üstelik", context: "Bağlaç", example: "On top of that, it started raining.", pronunciation: "on top ov det" },
        { phrase: "Mind you", meaning: "Yalnız / Belirteyim ki", context: "Düzeltme", example: "He's rich. Mind you, he's very cheap.", pronunciation: "maynd yu" },
        { phrase: "Bear in mind", meaning: "Akılda tutmak / Unutmamak", context: "Dikkat", example: "Bear in mind that the deadline is near.", pronunciation: "be-ir in maynd" },
        { phrase: "Believe it or not", meaning: "İster inan ister inanma", context: "Şaşırtma", example: "Believe it or not, I won!", pronunciation: "bi-li-iv it or not" },
        { phrase: "For instance", meaning: "Örneğin", context: "Örnek", example: "For instance, look at this chart.", pronunciation: "for in-s-tıns" },
        { phrase: "In fact", meaning: "Aslında / Doğrusu", context: "Vurgu", example: "In fact, I've already finished.", pronunciation: "in fekt" },
        { phrase: "Precisely", meaning: "Kesinlikle / Tam olarak", context: "Onay", example: "Precisely! That's what I meant.", pronunciation: "p-ri-say-s-li" },
        { phrase: "Actually", meaning: "Aslında", context: "Düzeltme", example: "Actually, I prefer tea.", pronunciation: "ek-çu-ı-li" }
    ]
};

// Unit 218: Listening Skills
export const u218: EnglishPhraseUnit = {
    unitId: 218, title: "Listening Skills", phrases: [
        { phrase: "Catch the drift", meaning: "Genel fikri kapmak", context: "Dinleme", example: "I didn't catch the drift of the talk.", pronunciation: "keç dı d-rift" },
        { phrase: "Listen attentively", meaning: "Can kulağıyla dinlemek", context: "Dinleme", example: "Please listen attentively.", pronunciation: "lis-ın e-ten-tiv-li" },
        { phrase: "Key takeaway", meaning: "Ana fikir / Sonuç", context: "Özet", example: "What is the key takeaway from the speech?", pronunciation: "ki tey-kı-vey" },
        { phrase: "Pick up on", meaning: "Fark etmek / Kapmak", context: "Anlama", example: "He picked up on her nervousness.", pronunciation: "pik ap on" },
        { phrase: "Muffled sound", meaning: "Boğuk ses", context: "Ses", example: "I could only hear a muffled sound.", pronunciation: "ma-fıld sa-und" },
        { phrase: "Background noise", meaning: "Arka plan gürültüsü", context: "Ses", example: "Too much background noise in the record.", pronunciation: "bek-g-ra-und noyz" },
        { phrase: "Speaker's tone", meaning: "Konuşmacının tonu", context: "Analiz", example: "Listen to the speaker's tone.", pronunciation: "s-pi-kırz toun" },
        { phrase: "Focus on details", meaning: "Detaylara odaklanmak", context: "Dinleme", example: "Now focus on the details.", pronunciation: "fo-kıs on di-teylz" },
        { phrase: "Echo", meaning: "Eko / Yankı", context: "Ses", example: "There is an echo in the room.", pronunciation: "e-ko" },
        { phrase: "Clear pronunciation", meaning: "Net telaffuz", context: "Konuşma", example: "He has a very clear pronunciation.", pronunciation: "k-li-ir p-ro-nan-si-ey-şın" },
        { phrase: "Subtle nuance", meaning: "İnce nüans / ayrıntı", context: "Anlama", example: "I missed a subtle nuance in his words.", pronunciation: "sa-tıl nu-ans" },
        { phrase: "Fast-paced speech", meaning: "Hızlı tempolu konuşma", context: "Dinleme", example: "It was a fast-paced speech.", pronunciation: "fast peys-t s-pi-iç" },
        { phrase: "Heavy accent", meaning: "Ağır aksan", context: "Dinleme", example: "He speaks with a heavy accent.", pronunciation: "he-vi ek-sent" },
        { phrase: "Auditory comprehension", meaning: "İşitsel anlama", context: "Beceri", example: "Improving your auditory comprehension.", pronunciation: "o-di-to-ri kom-p-ri-hen-şın" },
        { phrase: "Take notes", meaning: "Not almak", context: "Eylem", example: "Don't forget to take notes while listening.", pronunciation: "teyk nouts" }
    ]
};

// Unit 219: Reading Comprehension
export const u219: EnglishPhraseUnit = {
    unitId: 219, title: "Reading Comprehension", phrases: [
        { phrase: "Skim and scan", meaning: "Göz gezdirmek ve taramak", context: "Okuma", example: "Skim and scan the text for information.", pronunciation: "s-kim end s-ken" },
        { phrase: "Context clues", meaning: "Bağlam ipuçları", context: "Okuma", example: "Use context clues to guess the word.", pronunciation: "kon-tekst k-lu-uz" },
        { phrase: "Main argument", meaning: "Ana argüman", context: "Okuma", example: "Identify the main argument of the author.", pronunciation: "meyn ar-gyu-mınt" },
        { phrase: "Supporting details", meaning: "Destekleyici detaylar", context: "Okuma", example: "Look for the supporting details.", pronunciation: "sı-por-ting di-teyll-z" },
        { phrase: "Author's intent", meaning: "Yazarın niyeti", context: "Analiz", example: "What is the author's intent here?", pronunciation: "o-dırz in-intent" },
        { phrase: "Critical interpretation", meaning: "Eleştirel yorumlama", context: "Okuma", example: "A critical interpretation of the text.", pronunciation: "k-ri-ti-kıl in-tör-p-ri-tey-şın" },
        { phrase: "Extract information", meaning: "Bilgi çıkarmak", context: "Okuma", example: "Extract key information from the report.", pronunciation: "eks-t-rakt in-for-mey-şın" },
        { phrase: "Summarize the passage", meaning: "Parçayı özetlemek", context: "Okuma", example: "Summarize the passage in your own words.", pronunciation: "sa-mı-rayz dı pe-sıc" },
        { phrase: "Analyze structure", meaning: "Yapıyı analiz etmek", context: "Okuma", example: "Analyze the structure of the essay.", pronunciation: "e-ne-layz s-t-rak-çur" },
        { phrase: "Inference", meaning: "Çıkarım", context: "Okuma", example: "Make an inference based on the facts.", pronunciation: "in-fı-rıns" },
        { phrase: "Textual evidence", meaning: "Metinsel kanıt", context: "Okuma", example: "Provide textual evidence for your claim.", pronunciation: "teks-çu-vıl e-vi-dıns" },
        { phrase: "Logical flow", meaning: "Mantıksal akış", context: "Okuma", example: "The text lacks a logical flow.", pronunciation: "lo-ci-kıl f-lou" },
        { phrase: "Compare and contrast", meaning: "Karşılaştırmak ve zıtlıkları bulmak", context: "Okuma", example: "Compare and contrast these two stories.", pronunciation: "kom-pe-ır end kon-t-rast" },
        { phrase: "Literal meaning", meaning: "Kelime anlamı / Gerçek anlam", context: "Okuma", example: "Don't just look at the literal meaning.", pronunciation: "li-tı-rıl mi-ning" },
        { phrase: "Critical evaluation", meaning: "Eleştirel değerlendirme", context: "Okuma", example: "Provide a critical evaluation of the book.", pronunciation: "k-ri-ti-kıl i-val-yu-ey-şın" }
    ]
};

// Unit 220: B2 Tekrar
export const u220: EnglishPhraseUnit = {
    unitId: 220, title: "B2 Tekrar", phrases: [
        { phrase: "In conclusion", meaning: "Sonuç olarak", context: "Özet", example: "In conclusion, the project was successful.", pronunciation: "in kon-k-lu-jın" },
        { phrase: "To wrap up", meaning: "Toplamak gerekirse", context: "Özet", example: "To wrap up, focus on the goals.", pronunciation: "tu r-rep ap" },
        { phrase: "Overall assessment", meaning: "Genel değerlendirme", context: "Özet", example: "Give an overall assessment of the level.", pronunciation: "o-vır-ol e-ses-mınt" },
        { phrase: "Takeaways", meaning: "Öğretiler / Alınacak dersler", context: "Özet", example: "What are your main takeaways?", pronunciation: "tey-kı-veyz" },
        { phrase: "Final review", meaning: "Son tekrar", context: "Özet", example: "Ready for the final review?", pronunciation: "fay-nıl ri-v-yu" },
        { phrase: "Keep on practicing", meaning: "Pratik yapmaya devam et", context: "Tavsiye", example: "Keep on practicing your English.", pronunciation: "ki-ip on p-rek-ti-sing" },
        { phrase: "Significant progress", meaning: "Önemli ilerleme", context: "Gelişim", example: "You've made significant progress.", pronunciation: "sig-ni-fi-kınt p-ro-g-res" },
        { phrase: "Fluency level", meaning: "Akıcılık seviyesi", context: "Dil", example: "Your fluency level is impressive.", pronunciation: "f-lu-en-si le-vıl" },
        { phrase: "Broaden your horizons", meaning: "Ufkunuzu genişletin", context: "Tavsiye", example: "Traveling broadens your horizons.", pronunciation: "b-rod-ın yor ho-ray-zınz" },
        { phrase: "Sophisticated language", meaning: "Gelişmiş / Karmaşık dil", context: "Dil", example: "She uses sophisticated language.", pronunciation: "so-fis-ti-key-tid len-gvic" },
        { phrase: "Refine your skills", meaning: "Becerilerinizi geliştirin", context: "Gelişim", example: "Refine your skills in writing.", pronunciation: "ri-fayn yor s-kilz" },
        { phrase: "Master the nuances", meaning: "Nüanslara hakim ol", context: "Gelişim", example: "You must master the nuances of English.", pronunciation: "mas-tır dı nu-ans-ız" },
        { phrase: "Reach your potential", meaning: "Potansiyeline ulaş", context: "Gelişim", example: "You've reached your full potential.", pronunciation: "ri-iç yor po-ten-şı-ıl" },
        { phrase: "Moving forward", meaning: "İleriye dönük", context: "Gelişim", example: "Moving forward, we will do better.", pronunciation: "mu-ving for-vırd" },
        { phrase: "Good job!", meaning: "İyi iş!", context: "Övgü", example: "Good job on completing B2!", pronunciation: "gud cob" }
    ]
};

export function getEnglishB2PhrasesForUnit(unitId: number): EnglishPhraseUnit {
    const m: { [k: number]: EnglishPhraseUnit } = {
        191: u191, 192: u192, 193: u193, 194: u194, 195: u195, 196: u196, 197: u197, 198: u198, 199: u199, 200: u200,
        201: u201, 202: u202, 203: u203, 204: u204, 205: u205, 206: u206, 207: u207, 208: u208, 209: u209, 210: u210,
        211: u211, 212: u212, 213: u213, 214: u214, 215: u215, 216: u216, 217: u217, 218: u218, 219: u219, 220: u220
    };
    return m[unitId] || u191;
}
